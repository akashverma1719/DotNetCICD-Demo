using AbhyProject.Classes;
using AbhyProject.Excel;
using AbhyProject.Models;
using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    
    public class WSPHomeController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        
        // GET: WSPHome
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Gp_information()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active =  CheckLogin.CheckLoginStatus(userId);
            //if(Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            
            return View();
        }
        public ActionResult Monitoring_evaluation()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }

        public ActionResult NewLogin()
        {
            return View();
        }
        [HttpGet]
        public ActionResult DemandSide_Funding_Source()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<demand_funding_source> ddetails = ABE.obj_demand_funding_source.ToList();//total list
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

        [HttpGet]
        public ActionResult SupplaySide_Funding_Source()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<supply_funding_source> ddetails1 = ABE.obj_supply_funding_source.OrderBy(x=> x.funding_soursename).ToList();//total list
                    return Json(ddetails1, JsonRequestBehavior.AllowGet);
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
        [HttpGet]
        public ActionResult AR_WC_Structures()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<AR_WC_Structures> ddetails2 = ABE.obj_AR_WC_Structures.OrderBy(x => x.ar_wc_types).ToList();//total list
                    return Json(ddetails2, JsonRequestBehavior.AllowGet);
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

        [HttpGet]
        public ActionResult AR_Structure_Details()
        {
            return View();
        }


        [HttpPost]
        public ActionResult AR_Structure_Info(HttpPostedFileBase files, string other_ar_possible_funding_source, string ar_village, string ar_type_structure, string ar_storage_capacity, string ar_noof_filling_kharif, string ar_noof_filling_rabi, string ar_recharge, string ar_gw_recharge_kharif, string ar_gw_recharge_rabi, string ar_gw_recharge_anuual, string ar_possible_funding_source, string latitude, string longitude, string ar_approx_estimated_cost, string ar_cost_type, string ar_department_name, string sp_year)
        {
            //JavaScriptSerializer js = new JavaScriptSerializer();
            //var result = js.Deserialize<supply_AR_Structures>(Data);
            if (Session["UserId"] != null)
            {
                var StateName = "";
                var DistName = "";
                var BlockName = "";
                var GramName = "";
                if (Session["gstate"] != null)
                {
                    StateName = Session["gstate"].ToString();
                }
                if (Session["gdist"] != null)
                {
                    DistName = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    BlockName = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    GramName = Session["ggram"].ToString();
                }


                var Info = new supply_AR_Structures();
                Info.state_name = StateName;
                Info.district_name = DistName;
                Info.block_name = BlockName;
                Info.gpname = GramName;
                var UserId = Convert.ToInt32(Session["UserId"]);
                if (files != null)
                {
                    if (files.FileName != null)
                    {
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "xlsx,xls,csv";
                        bool flag = obj_Validate.CheckValidFile(files, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        String FileExt = Path.GetExtension(files.FileName).ToUpper();
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");


                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        //string path = @"D:\Ataljal_grievnce\";
                        path = path + "\\" + files.FileName;
                        string[] count = files.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        files.SaveAs(path);
                        Info.ar_filename = files.FileName;
                        Info.ar_filepath = "/Ataljalimages/" + files.FileName;

                    }
                }

                Info.latitude = latitude;
                Info.longitude = longitude;
                var TodayDate1 = DateTime.Now.ToString();
                var Datea = TodayDate1.Split('/', '-', ' ');
                //string[] date = null;
                //if (Datea[0].Contains('/'))
                //{
                //    date = Datea[0].Split('/');
                //}
                //else if (Datea[0].Contains('-'))
                //{
                //    date = Datea[0].Split('-');
                //}
                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];

                Info.date_time = Today1;
                Info.date_time = DateTime.Today.ToString();
                Info.userid = UserId;
                Info.officer_name = Session["Officer"].ToString();
                Double ar_gw_recharge_anuual1;
                bool ar_gw_recharge_anuual11 = Double.TryParse(ar_gw_recharge_anuual, out ar_gw_recharge_anuual1);
                if (ar_gw_recharge_anuual11 == true)
                {
                    Info.gw_recharge_annual = ar_gw_recharge_anuual;
                    double a2 = Convert.ToDouble(ar_gw_recharge_anuual);

                    if (a2 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("GW Recharge (Ha.m) Annual Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double ar_gw_recharge_kharif1;
                bool ar_gw_recharge_kharif11 = Double.TryParse(ar_gw_recharge_kharif, out ar_gw_recharge_kharif1);
                if (ar_gw_recharge_kharif11 == true)
                {
                    Info.gw_recharge_kharif = ar_gw_recharge_kharif;
                    double a3 = Convert.ToDouble(ar_gw_recharge_kharif);

                    if (a3 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("GW Recharge (Ha.m) Kharif Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double ar_gw_recharge_rabi1;
                bool ar_gw_recharge_rabi11 = Double.TryParse(ar_gw_recharge_rabi, out ar_gw_recharge_rabi1);
                if (ar_gw_recharge_rabi11 == true)
                {
                    Info.gw_recharge_rabi = ar_gw_recharge_rabi;
                    double a4 = Convert.ToDouble(ar_gw_recharge_rabi);

                    if (a4 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("GW Recharge (Ha.m) Rabi Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double kharif_no_of_filling1;
                bool kharif_no_of_filling11 = Double.TryParse(ar_noof_filling_kharif, out kharif_no_of_filling1);
                if (kharif_no_of_filling11 == true)
                {
                    Info.kharif_no_of_filling = ar_noof_filling_kharif;
                    double a5 = Convert.ToDouble(ar_noof_filling_kharif);

                    if (a5 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }

                }
                else
                {
                    return Json("Number of Fillings (Kharif) Value in  Characters", JsonRequestBehavior.AllowGet);
                }
                //Info.other_ar_structure = ar_other_structure;
                // Info.other_funding_scource = ar_other_funding_source;
                Info.possible_funding_source = ar_possible_funding_source;

                Double rabi_no_of_filling1;
                bool rabi_no_of_filling11 = Double.TryParse(ar_noof_filling_rabi, out rabi_no_of_filling1);
                if (rabi_no_of_filling11 == true)
                {
                    Info.rabi_no_of_filling = ar_noof_filling_rabi;
                    double a6 = Convert.ToDouble(ar_noof_filling_rabi);

                    if (a6 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }


                }
                else
                {
                    return Json("Number of Fillings (Rabi) Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double ar_recharge1;
                bool ar_recharge11 = Double.TryParse(ar_recharge, out ar_recharge1);
                if (rabi_no_of_filling11 == true)
                {
                    Info.recharge = ar_recharge;
                    double a7 = Convert.ToDouble(ar_recharge);

                    if (a7 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Recharge % Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double ar_storage_capacity1;
                bool ar_storage_capacity11 = Double.TryParse(ar_storage_capacity, out ar_storage_capacity1);
                if (ar_storage_capacity11 == true)
                {
                    Info.storage_capacity = ar_storage_capacity;
                    double a8 = Convert.ToDouble(ar_storage_capacity);

                    if (a8 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Storage Capacity (Ha.m) Value in  Characters", JsonRequestBehavior.AllowGet);
                }
                Info.type_ar_structure = ar_type_structure;
                Info.village_name = ar_village;
                Info.other_funding_source = other_ar_possible_funding_source;

                double a1 = Convert.ToDouble(ar_approx_estimated_cost);

                if (a1 < 0)
                {
                    return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                }
                double ar_storage_capacity111 = 0;
                double ar_noof_filling_kharif111 = 0;
                double ar_noof_filling_rabi111 = 0;
                double ar_recharge111 = 0;

                if (ar_storage_capacity != "" && ar_storage_capacity != null)
                {
                    ar_storage_capacity111 = double.Parse(ar_storage_capacity);
                }

                if (ar_noof_filling_kharif != "" && ar_noof_filling_kharif != null)
                {
                    ar_noof_filling_kharif111 = double.Parse(ar_noof_filling_kharif);
                }
                if (ar_noof_filling_rabi != "" && ar_noof_filling_rabi != null)
                {
                    ar_noof_filling_rabi111 = double.Parse(ar_noof_filling_rabi);
                }
                if (ar_recharge != "" && ar_recharge != null)
                {
                    ar_recharge111 = double.Parse(ar_recharge);
                }

                double ar_gw_recharge_kharif111 = ar_storage_capacity111 * ar_noof_filling_kharif111 * ar_recharge111 * 0.01;

                double ar_gw_recharge_rabi111 = ar_storage_capacity111 * ar_noof_filling_rabi111 * ar_recharge111 * 0.01;

                double ar_gw_recharge_anuual111 = ar_gw_recharge_kharif111 + ar_gw_recharge_rabi111;

                //Info.gw_recharge_annual =  Math.Round(ar_gw_recharge_anuual111,4).ToString("F");
                Info.gw_recharge_annual = Math.Round(ar_gw_recharge_anuual111, 4).ToString();
                Info.gw_recharge_kharif = Math.Round(ar_gw_recharge_kharif111, 4).ToString();
                Info.gw_recharge_rabi = Math.Round(ar_gw_recharge_rabi111, 4).ToString();
                Info.kharif_no_of_filling = ar_noof_filling_kharif;
                //Info.other_ar_structure = ar_other_structure;
                // Info.other_funding_scource = ar_other_funding_source;
                Info.possible_funding_source = ar_possible_funding_source;
                Info.rabi_no_of_filling = ar_noof_filling_rabi;
                Info.recharge = ar_recharge;
                Info.storage_capacity = ar_storage_capacity;
                Info.type_ar_structure = ar_type_structure;
                Info.village_name = ar_village;
                Info.other_funding_source = other_ar_possible_funding_source;
                Info.ar_approx_estimated_cost = ar_approx_estimated_cost;
                Info.ar_cost_type = ar_cost_type;
                Info.ar_approx_estimated_cost = ar_approx_estimated_cost;
                Info.ar_cost_type = ar_cost_type;
                Info.ar_department_name = ar_department_name;
                Info.sp_year = sp_year;
                Info.new_table_entry_a = "0";
                ABE.obj_supply_AR_Structures.Add(Info);
                ABE.SaveChanges();
                return Json("Saved Succuessfully", JsonRequestBehavior.AllowGet);


            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult UpdateAR(string AR_Structure_Details2)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<supply_AR_Structures>(AR_Structure_Details2);


            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_supply_AR_Structures.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.userid = Convert.ToInt32(Session["UserId"]);
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;

                Data1.gw_recharge_annual = result.gw_recharge_annual;
                Data1.gw_recharge_kharif = result.gw_recharge_kharif;
                Data1.gw_recharge_rabi = result.gw_recharge_rabi;
                Data1.kharif_no_of_filling = result.kharif_no_of_filling;

                Data1.possible_funding_source = result.possible_funding_source;
                Data1.rabi_no_of_filling = result.rabi_no_of_filling;
                Data1.recharge = result.recharge;
                Data1.storage_capacity = result.storage_capacity;
                Data1.type_ar_structure = result.type_ar_structure;
                Data1.village_name = result.village_name;
                Data1.other_funding_source = result.other_funding_source;
                Data1.ar_approx_estimated_cost = result.ar_approx_estimated_cost;
                Data1.ar_cost_type = result.ar_cost_type;
                Data1.ar_department_name = result.ar_department_name;
                Data1.sp_year = result.sp_year;
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
        public ActionResult DeleteAR(string AR_Structure_Details2)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<supply_AR_Structures>(AR_Structure_Details2);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_supply_AR_Structures.Where(x => x.id == ARID).FirstOrDefault();
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
        public ActionResult WC_Structure_Infoture_Info(HttpPostedFileBase files, string other_wc_possible_funding_source, string wc_village, string wc_type_structure, string wc_storage_capacity, string wc_effective_storage, string wc_noof_filling_kharif, string wc_noof_filling_rabi, string wc_recharge, string wc_gw_recharge_kharif, string wc_gw_recharge_rabi, string wc_gw_recharge_anuual, string wc_gw_total_saved, string wc_possible_funding_source, string latitude, string longitude, string wc_approx_estimated_cost, string wc_cost_type,string wc_department_name,string wc_year)
        {
            //JavaScriptSerializer js = new JavaScriptSerializer();
            // var result = js.Deserialize<supply_water_conservation>(Data);
            if (Session["UserId"] != null)
            {
                var StateName = "";
                var DistName = "";
                var BlockName = "";
                var GramName = "";
                if (Session["gstate"] != null)
                {
                    StateName = Session["gstate"].ToString();
                }
                if (Session["gdist"] != null)
                {
                    DistName = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    BlockName = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    GramName = Session["ggram"].ToString();
                }


                var Info = new supply_water_conservation();
                Info.state_name = StateName;
                Info.district_name = DistName;
                Info.block_name = BlockName;
                Info.gpname = GramName;
                var UserId = Convert.ToInt32(Session["UserId"]);
                if (files != null)
                {
                    if (files.FileName != null)
                    {
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "xlsx,xls,csv";
                        bool flag = obj_Validate.CheckValidFile(files, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        String FileExt = Path.GetExtension(files.FileName).ToUpper();
                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        //string path = @"D:\Ataljal_grievnce\";
                        path = path + files.FileName;
                        string[] count = files.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        files.SaveAs(path);
                        Info.wc_filename = files.FileName;
                        Info.wc_filepath = "/Ataljalimages/" + files.FileName;

                    }
                }
                Info.latitude = latitude;
                Info.longitude = longitude;
                var TodayDate1 = DateTime.Now.ToString();
                var Datea = TodayDate1.Split('/', '-', ' ');
                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                //var Today1 = Datea[0] + '-' + Datea[1] + '-' + Datea[2];
                Info.date_time = Today1;
                Info.userid = UserId;
                Double wc_gw_recharge_anuual1;
                bool wc_gw_recharge_anuual11 = Double.TryParse(wc_gw_recharge_anuual, out wc_gw_recharge_anuual1);
                if (wc_gw_recharge_anuual11 == true)
                {
                    Info.gw_recharge_annual = wc_gw_recharge_anuual;
                    double a5 = Convert.ToDouble(wc_gw_recharge_anuual);

                    if (a5 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }


                }
                else
                {
                    return Json("GW Recharge (Ha.m) Annual  Value in  Characters", JsonRequestBehavior.AllowGet);
                }



                Double wc_gw_recharge_kharif1;
                bool wc_gw_recharge_kharif11 = Double.TryParse(wc_gw_recharge_kharif, out wc_gw_recharge_kharif1);
                if (wc_gw_recharge_kharif11 == true)
                {
                    Info.gw_recharge_kharif = wc_gw_recharge_kharif;
                    double a6 = Convert.ToDouble(wc_gw_recharge_kharif);

                    if (a6 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("GW Recharge (Ha.m) Kharif  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double wc_gw_recharge_rabi1;
                bool wc_gw_recharge_rabi11 = Double.TryParse(wc_gw_recharge_rabi, out wc_gw_recharge_rabi1);
                if (wc_gw_recharge_rabi11 == true)
                {
                    Info.gw_recharge_rabi = wc_gw_recharge_rabi;
                    double a7 = Convert.ToDouble(wc_gw_recharge_rabi);

                    if (a7 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("GW Recharge (Ha.m) Rabi  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double wc_noof_filling_kharif1;
                bool wc_noof_filling_kharif11 = Double.TryParse(wc_noof_filling_kharif, out wc_noof_filling_kharif1);
                if (wc_noof_filling_kharif11 == true)
                {
                    Info.kharif_no_of_fillings = wc_noof_filling_kharif;
                    double a8 = Convert.ToDouble(wc_noof_filling_kharif);

                    if (a8 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Number of Fillings (Kharif)  Value in  Characters", JsonRequestBehavior.AllowGet);
                }
                // Info.other_wc_structure = wc_other_structure;
                // Info.other_funding_source = wc_other_funding_source;
                Info.possiable_funding_source = wc_possible_funding_source;

                Double wc_noof_filling_rabi1;
                bool wc_noof_filling_rabi11 = Double.TryParse(wc_noof_filling_rabi, out wc_noof_filling_rabi1);
                if (wc_noof_filling_rabi11 == true)
                {
                    Info.Rabi_no_of_filllings = wc_noof_filling_rabi;
                    double a9 = Convert.ToDouble(wc_noof_filling_rabi);

                    if (a9 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Number of Fillings (Rabi)  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double wc_recharge1;
                bool wc_recharge11 = Double.TryParse(wc_recharge, out wc_recharge1);
                if (wc_recharge11 == true)
                {
                    Info.recharge = wc_recharge;
                    double a10 = Convert.ToDouble(wc_recharge);

                    if (a10 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Recharge %  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double wc_storage_capacity1;
                bool wc_storage_capacity11 = Double.TryParse(wc_storage_capacity, out wc_storage_capacity1);
                if (wc_storage_capacity11 == true)
                {
                    Info.storage_capacity = wc_storage_capacity;
                    double a11 = Convert.ToDouble(wc_storage_capacity);

                    if (a11 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Storage Capacity (Ha.m)  Value in  Characters", JsonRequestBehavior.AllowGet);
                }
                Info.type_wc_structure = wc_type_structure;
                Info.effective_storage_available_use = wc_effective_storage;
                Info.total_gw_saved = wc_gw_total_saved;
                Info.village_name = wc_village;
                Info.other_funding_source = other_wc_possible_funding_source;

                double a1 = Convert.ToDouble(wc_approx_estimated_cost);

                if (a1 < 0)
                {
                    return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                }
                double wc_storage_capacity111 = 0;
                if (wc_storage_capacity != null && wc_storage_capacity != "")
                {
                    wc_storage_capacity111 = double.Parse(wc_storage_capacity);
                }
                double wc_effective_storage111 = wc_storage_capacity1 * 0.6;
                double wc_noof_filling_kharif111 = 0;
                if (wc_noof_filling_kharif != null && wc_noof_filling_kharif != "")
                {
                    wc_noof_filling_kharif111 = double.Parse(wc_noof_filling_kharif);
                }

                double wc_noof_filling_rabi111 = 0;

                if (wc_noof_filling_rabi != null && wc_noof_filling_rabi != "")
                {
                    wc_noof_filling_rabi111 = double.Parse(wc_noof_filling_rabi);
                }

                double wc_recharge111 = 0;

                if (wc_recharge != null && wc_recharge != "")
                {
                    wc_recharge111 = double.Parse(wc_recharge);
                }


                double wc_gw_recharge_kharif111 = wc_storage_capacity1 * wc_effective_storage111 * wc_noof_filling_kharif111 * wc_recharge111 * 0.01;
                //double wc_gw_recharge_rabi111 = wc_storage_capacity1 * wc_effective_storage111 * wc_noof_filling_rabi111 * wc_recharge111 * 0.01;

                //double wc_gw_recharge_anuual111 = wc_gw_recharge_kharif1 + wc_gw_recharge_rabi1;

                //double wc_gw_total_saved1 = wc_effective_storage111 + wc_gw_recharge_anuual1;


                //Info.gw_recharge_annual = wc_gw_recharge_anuual111.ToString("F");
                //Info.gw_recharge_annual = Math.Round(wc_gw_recharge_anuual111, 4).ToString();
                //Info.gw_recharge_kharif = Math.Round(wc_gw_recharge_kharif111, 4).ToString();
                //Info.gw_recharge_rabi = Math.Round(wc_gw_recharge_rabi111, 4).ToString();
                Info.kharif_no_of_fillings = wc_noof_filling_kharif;
                // Info.other_wc_structure = wc_other_structure;
                // Info.other_funding_source = wc_other_funding_source;
                Info.possiable_funding_source = wc_possible_funding_source;
                Info.Rabi_no_of_filllings = wc_noof_filling_rabi;
                Info.recharge = wc_recharge;
                Info.storage_capacity = wc_storage_capacity;
                Info.type_wc_structure = wc_type_structure;
                Info.effective_storage_available_use = Math.Round(wc_effective_storage111, 4).ToString();
                //Info.total_gw_saved = Math.Round(wc_gw_total_saved1, 4).ToString();
                Info.village_name = wc_village;
                Info.other_funding_source = other_wc_possible_funding_source;
                Info.wc_approx_estimated_cost = wc_approx_estimated_cost;
                Info.wc_cost_type = wc_cost_type;
                Info.wc_department_name = wc_department_name;
                Info.wc_year = wc_year;
                Info.new_table_entry_b = "0";
                ABE.obj_supply_water_conservation.Add(Info);
                ABE.SaveChanges();

                return Json("Saved Succuessfully", JsonRequestBehavior.AllowGet);

            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        public ActionResult UpdateWC(string WC_Structure_Details2)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<supply_water_conservation>(WC_Structure_Details2);


            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_supply_water_conservation.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;
                Data1.gw_recharge_annual = result.gw_recharge_annual;
                Data1.gw_recharge_kharif = result.gw_recharge_kharif;
                Data1.gw_recharge_rabi = result.gw_recharge_rabi;
                Data1.kharif_no_of_fillings = result.kharif_no_of_fillings;
                // Info.other_wc_structure = wc_other_structure;
                // Info.other_funding_source = wc_other_funding_source;
                Data1.possiable_funding_source = result.possiable_funding_source;
                Data1.Rabi_no_of_filllings = result.Rabi_no_of_filllings;
                Data1.recharge = result.recharge;
                Data1.storage_capacity = result.storage_capacity;
                Data1.type_wc_structure = result.type_wc_structure;
                Data1.effective_storage_available_use = result.effective_storage_available_use;
                Data1.total_gw_saved = result.total_gw_saved;
                Data1.village_name = result.village_name;
                Data1.other_funding_source = result.other_funding_source;
                Data1.wc_approx_estimated_cost = result.wc_approx_estimated_cost;
                Data1.wc_cost_type = result.wc_cost_type;
                Data1.wc_department_name = result.wc_department_name;
                Data1.wc_year = result.wc_year;
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
        public ActionResult DeleteWC(string WC_Structure_Details2)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<supply_water_conservation>(WC_Structure_Details2);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_supply_water_conservation.Where(x => x.id == ARID).FirstOrDefault();
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
        public ActionResult other_Intervention_Info(HttpPostedFileBase files, string other_other_possible_funding_source, string other_village, string other_type_structure, string other_storage_capacity, string other_noof_filling_kharif, string other_noof_filling_rabi, string other_recharge, string other_gw_recharge_kharif, string other_gw_recharge_rabi, string other_gw_recharge_anuual, string other_possible_funding_source, string latitude, string longitude, string anyother_approx_estimated_cost, string anyother_cost_type,string other_department_name, string any_year)
        {
            //JavaScriptSerializer js = new JavaScriptSerializer();
            //var result = js.Deserialize<supply_any_other_intervention>(Data);

            if (Session["UserId"] != null)
            {
                var StateName = "";
                var DistName = "";
                var BlockName = "";
                var GramName = "";
                if (Session["gstate"] != null)
                {
                    StateName = Session["gstate"].ToString();
                }
                if (Session["gdist"] != null)
                {
                    DistName = Session["gdist"].ToString();
                }
                if (Session["gblock"] != null)
                {
                    BlockName = Session["gblock"].ToString();
                }
                if (Session["ggram"] != null)
                {
                    GramName = Session["ggram"].ToString();
                }

                var Info = new supply_any_other_intervention();
                Info.state_name = StateName;
                Info.district_name = DistName;
                Info.block_name = BlockName;
                Info.gpname = GramName;
                var UserId = Convert.ToInt32(Session["UserId"]);
                if (files != null)
                {
                    if (files.FileName != null)
                    {
                        Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                        string allowed_file_format = "xlsx,xls,csv";
                        bool flag = obj_Validate.CheckValidFile(files, allowed_file_format);
                        if (flag == false)
                        {
                            return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        String FileExt = Path.GetExtension(files.FileName).ToUpper();

                        string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                        string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        //string path = @"D:\Ataljal_grievnce\";
                        path = path + files.FileName;
                        string[] count = files.FileName.Split('.');
                        if (count.Length != 2)
                        {
                            return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                        }
                        files.SaveAs(path);
                        Info.anyother_filepath = files.FileName;
                        Info.anyother_filepath = "/Ataljalimages/" + files.FileName;

                    }
                }

                Info.latitude = latitude;
                Info.longitude = longitude;

                var TodayDate1 = DateTime.Now.ToString();
                var Datea = TodayDate1.Split('/', '-', ' ');
                var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                // var Today1 = Datea[0] + '-' + Datea[1] + '-' + Datea[2];
                Info.date_time = Today1;
                Info.userid = UserId;
                double a1 = Convert.ToDouble(anyother_approx_estimated_cost);

                if (a1 < 0)
                {
                    return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                }



                Double other_storage_capacity11;
                bool other_storage_capacity111 = Double.TryParse(other_storage_capacity, out other_storage_capacity11);
                if (other_storage_capacity111 == true)
                {
                    Info.storage_capacity = other_storage_capacity;
                    double a2 = Convert.ToDouble(other_storage_capacity);

                    if (a2 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }

                }
                else
                {
                    return Json("Storage Capacity (Ha.m)  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double no_of_filling_kharif11;
                bool no_of_filling_kharif111 = Double.TryParse(other_noof_filling_kharif, out no_of_filling_kharif11);
                if (no_of_filling_kharif111 == true)
                {
                    Info.no_of_filling_kharif = other_noof_filling_kharif;
                    double a3 = Convert.ToDouble(other_noof_filling_kharif);

                    if (a3 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Number of Fillings (Kharif)  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double other_noof_filling_rabi11;
                bool other_noof_filling_rabi111 = Double.TryParse(other_noof_filling_rabi, out other_noof_filling_rabi11);
                if (other_noof_filling_rabi111 == true)
                {
                    Info.no_of_filling_rabi = other_noof_filling_rabi;
                    double a4 = Convert.ToDouble(other_noof_filling_rabi);

                    if (a4 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Number of Fillings (Rabi)  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Double other_recharge11;
                bool other_recharge111 = Double.TryParse(other_recharge, out other_recharge11);
                if (other_recharge111 == true)
                {
                    Info.recharge = other_recharge;
                    double a2 = Convert.ToDouble(other_recharge);

                    if (a2 < 0)
                    {
                        return Json("Your Entered Approximate Estimated Cost is Negitive Value", JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json("Recharge  Value in  Characters", JsonRequestBehavior.AllowGet);
                }

                Info.userid = UserId;
                Info.village_name = other_village;
                Info.other_structure = other_type_structure;

                double other_gw_recharge_kharif1 = 0;

                double other_gw_recharge_rabi1 = 0;

                double other_gw_recharge_anuual1 = 0;

                double other_storage_capacity1 = 0;
                if (other_storage_capacity != "" && other_storage_capacity != null)
                {
                    other_storage_capacity1 = double.Parse(other_storage_capacity);
                }

                double other_noof_filling_kharif1 = 0;

                if (other_noof_filling_kharif != null && other_noof_filling_kharif != "")
                {
                    other_noof_filling_kharif1 = double.Parse(other_noof_filling_kharif);
                }

                double other_noof_filling_rabi1 = 0;

                if (other_noof_filling_rabi != null && other_noof_filling_rabi != "")
                {
                    other_noof_filling_rabi1 = double.Parse(other_noof_filling_rabi);
                }

                double other_recharge1 = 0;

                if (other_recharge != null && other_recharge != "")
                {
                    other_recharge1 = double.Parse(other_recharge);
                }

                other_gw_recharge_kharif1 = other_storage_capacity1 * other_noof_filling_kharif1 * other_recharge1 * 0.01;

                other_gw_recharge_rabi1 = other_storage_capacity1 * other_noof_filling_rabi1 * other_recharge1 * 0.01;

                other_gw_recharge_anuual1 = other_gw_recharge_kharif1 + other_gw_recharge_rabi1;


                //Info.gw_recharge_kharif = other_gw_recharge_kharif1.ToString("F");
                Info.gw_recharge_kharif = Math.Round(other_gw_recharge_kharif1, 4).ToString();
                Info.gw_recharge_rabi = Math.Round(other_gw_recharge_rabi1, 4).ToString();
                Info.gw_recharge_annual = Math.Round(other_gw_recharge_anuual1, 4).ToString();
                Info.possible_funding_source = other_possible_funding_source;
                Info.other_funding_source = other_other_possible_funding_source;

                Info.anyother_approx_estimated_cost = anyother_approx_estimated_cost;
                Info.anyother_cost_type = anyother_cost_type;
                Info.other_department_name = other_department_name;
                Info.any_year = any_year;
                Info.new_table_entry_c = "0";
                ABE.obj_supply_any_other_intervention.Add(Info);
                ABE.SaveChanges();

                return Json("Saved Succuessfully", JsonRequestBehavior.AllowGet);

            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Export(string DataForM)
        {

            if (Session["UserId"] != null)
            {
                try
                {

                    if (Session["UserId"] != null)
                    {
                        var DistName = "";
                        var BlockName = "";
                        var GramName = "";
                        var StateName = "";
                        if (Session["gstate"] != null)
                        {
                            StateName = Session["gstate"].ToString();
                        }
                        if (Session["gdist"] != null)
                        {
                            DistName = Session["gdist"].ToString();
                        }
                        if (Session["gblock"] != null)
                        {
                            BlockName = Session["gblock"].ToString();
                        }
                        if (Session["ggram"] != null)
                        {
                            GramName = Session["ggram"].ToString();
                        }
                        // var UserId = Convert.ToInt32(Session["UserId"]);
                        //  var Data = ABE.obj_supply_AR_Structures.Where(x => x.userid == UserId).ToList();
                        if (DataForM == "AI")
                        {
                            var Data = ABE.obj_supply_AR_Structures.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).ToList();
                            if (Data.Count != 0)
                            {
                                var data = ABE.obj_supply_AR_Structures
                                    .Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).
         Select(s => new
         {
             s.gpname,
             s.village_name,
             s.latitude,
             s.longitude,
             s.type_ar_structure,
             s.storage_capacity,
             s.kharif_no_of_filling,
             s.rabi_no_of_filling,
             s.recharge,
             s.gw_recharge_kharif,
             s.gw_recharge_rabi,
             s.gw_recharge_annual,
             s.sp_year,
             s.ar_department_name,
             s.possible_funding_source,
             s.ar_approx_estimated_cost,
         }).ToList();
                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "Artificial Recharge Structures Report", true, "AI");
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "Artificial Recharge Structures.xlsx");
                            }
                        }
                        if (DataForM == "Anyother")
                        {
                            var Data = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).ToList();
                            if (Data.Count != 0)
                            {
                                var data = ABE.obj_supply_any_other_intervention.
                                    Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).
                                    Select(s => new
                                    {
                                        s.gpname,
                                        s.village_name,
                                        s.latitude,
                                        s.longitude,
                                        s.other_structure,
                                        s.storage_capacity,
                                        s.no_of_filling_kharif,
                                        s.no_of_filling_rabi,
                                        s.recharge,
                                        s.gw_recharge_kharif,
                                        s.gw_recharge_rabi,
                                        s.gw_recharge_annual,
                                        s.any_year,
                                        s.other_department_name,
                                        s.possible_funding_source,
                                        s.anyother_approx_estimated_cost
                                    }).ToList();
                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "Any Other Intervention Report", true, "AI");
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "Any Other Intervention.xlsx");
                            }
                        }
                        if (DataForM == "Water")
                        {
                            var Data = ABE.obj_supply_water_conservation.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).ToList();
                            if (Data.Count != 0)
                            {
                                var data = ABE.obj_supply_water_conservation.
                                    Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).
                                    Select(s => new
                                    {
                                        s.gpname,
                                        s.village_name,
                                        s.latitude,
                                        s.longitude,
                                        s.type_wc_structure,
                                        s.storage_capacity,
                                        s.effective_storage_available_use,
                                        s.kharif_no_of_fillings,
                                        s.Rabi_no_of_filllings,
                                        s.recharge,
                                        s.gw_recharge_kharif,
                                        s.gw_recharge_rabi,
                                        s.gw_recharge_annual,
                                        s.total_gw_saved,
                                        s.wc_year,
                                        s.wc_department_name,
                                        s.possiable_funding_source,
                                        s.wc_approx_estimated_cost
                                    }).ToList();
                                byte[] filecontent = ExcelExportHelper.ExportExcel(data, "Water Conservation Structures Report", true, "AI");
                                return File(filecontent, ExcelExportHelper.ExcelContentType, "Water Conservation Structures.xlsx");
                            }
                        }
                    }
                }

                catch (Exception Ex)
                {

                }
            }
            else
            {


            }
            return RedirectToAction("Wspsuppyside", "WSPHome");
        }

        [HttpPost]
        public ActionResult UpdateAO(string AO_Structure_Details2)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<supply_any_other_intervention>(AO_Structure_Details2);

            var ARID = Convert.ToInt32(result.id);
            var Data1 = ABE.obj_supply_any_other_intervention.Where(x => x.id == ARID).FirstOrDefault();
            if (Data1 != null)
            {
                Data1.latitude = result.latitude;
                Data1.longitude = result.longitude;
                Data1.village_name = result.village_name;
                Data1.other_structure = result.other_structure;

                Data1.storage_capacity = result.storage_capacity;
                Data1.no_of_filling_kharif = result.no_of_filling_kharif;
                Data1.no_of_filling_rabi = result.no_of_filling_rabi;
                Data1.recharge = result.recharge;
                Data1.gw_recharge_kharif = result.gw_recharge_kharif;
                Data1.gw_recharge_rabi = result.gw_recharge_rabi;
                Data1.gw_recharge_annual = result.gw_recharge_annual;
                Data1.possible_funding_source = result.possible_funding_source;

                Data1.other_funding_source = result.other_funding_source;
                Data1.anyother_approx_estimated_cost = result.anyother_approx_estimated_cost;
                Data1.anyother_cost_type = result.anyother_cost_type;
                Data1.other_department_name = result.other_department_name;
                Data1.any_year = result.any_year;
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
        public ActionResult DeleteAO(string AO_Structure_Details2)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();
            var result = js.Deserialize<supply_water_conservation>(AO_Structure_Details2);

            if (result.id != 0)
            {
                var ARID = Convert.ToInt32(result.id);
                var Data1 = ABE.obj_supply_any_other_intervention.Where(x => x.id == ARID).FirstOrDefault();
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

        public string Validation_NegitiveVal(string Number_value)
        {
            Double checking_value;
            bool checking_value_1 = Double.TryParse(Number_value, out checking_value);
            if (checking_value_1 == true)
            {

                double a2 = Convert.ToDouble(Number_value);

                if (a2 <= 0)
                {
                    return "Negitive value is not allowed";
                }
                else
                {
                    return "True";
                }
            }
            else
            {
                return "Characters are not allowed";
            }

        }

        [HttpPost]
        public ActionResult DripSavedData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_demandside_drip_saveddata>(Data);
                    var obj = new abhy_demandside_drip_saveddata();
                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Details = ABE.obj_drip_saveddata.Where(x => x.statename == StateName && x.districtname == DistName && x.blockname == BlockName && x.gpname == GramName).ToList();
                    if (Details.Count != 0)
                    {
                        var Data11 = Details.LastOrDefault();

                        Data11.statename = StateName;
                        Data11.blockname = BlockName;
                        Data11.districtname = DistName;
                        Data11.gpname = GramName;
                        Data11.userid = Convert.ToInt32(userid);

                        Data11.drip_kharif_paddy_crop_area = result.drip_kharif_paddy_crop_area;
                        Data11.drip_kharif_paddy_fundingsource = result.drip_kharif_paddy_fundingsource;
                        Data11.drip_kharif_paddy_irri_area = result.drip_kharif_paddy_irri_area;
                        Data11.drip_kharif_paddy_waterdemand = result.drip_kharif_paddy_waterdemand;
                        Data11.drip_kharif_paddy_drip_waterdemand = result.drip_kharif_paddy_drip_waterdemand;
                        Data11.drip_kharif_paddy_reduction_gw_demand = result.drip_kharif_paddy_reduction_gw_demand;

                        //Ragi
                        Data11.drip_kharif_ragi_crop_area = result.drip_kharif_ragi_crop_area;
                        Data11.drip_kharif_ragi_fundingsource = result.drip_kharif_ragi_fundingsource;
                        Data11.drip_kharif_ragi_irri_area = result.drip_kharif_ragi_irri_area;
                        Data11.drip_kharif_ragi_waterdemand = result.drip_kharif_ragi_waterdemand;
                        Data11.drip_kharif_ragi_drip_waterdemand = result.drip_kharif_ragi_drip_waterdemand;
                        Data11.drip_kharif_ragi_reduction_gw_demand = result.drip_kharif_ragi_reduction_gw_demand;

                        //groundnut
                        Data11.drip_kharif_groundnut_crop_area = result.drip_kharif_groundnut_crop_area;
                        Data11.drip_kharif_groundnut_fundingsource = result.drip_kharif_groundnut_fundingsource;
                        Data11.drip_kharif_groundnut_irri_area = result.drip_kharif_groundnut_irri_area;
                        Data11.drip_kharif_groundnut_waterdemand = result.drip_kharif_groundnut_waterdemand;
                        Data11.drip_kharif_groundnut_drip_waterdemand = result.drip_kharif_groundnut_drip_waterdemand;
                        Data11.drip_kharif_groundnut_reduction_gw_demand = result.drip_kharif_groundnut_reduction_gw_demand;


                        //sugarcane
                        Data11.drip_kharif_sugarcane_crop_area = result.drip_kharif_sugarcane_crop_area;
                        Data11.drip_kharif_sugarcane_fundingsource = result.drip_kharif_sugarcane_fundingsource;
                        Data11.drip_kharif_sugarcane_irri_area = result.drip_kharif_sugarcane_irri_area;
                        Data11.drip_kharif_sugarcane_waterdemand = result.drip_kharif_sugarcane_waterdemand;
                        Data11.drip_kharif_sugarcane_drip_waterdemand = result.drip_kharif_sugarcane_drip_waterdemand;
                        Data11.drip_kharif_sugarcane_reduction_gw_demand = result.drip_kharif_sugarcane_reduction_gw_demand;

                        //Tomoto


                        Data11.drip_kharif_tomoto_crop_area = result.drip_kharif_tomoto_crop_area;
                        Data11.drip_kharif_tomoto_fundingsource = result.drip_kharif_tomoto_fundingsource;

                        Data11.drip_kharif_tomoto_irri_area = result.drip_kharif_tomoto_irri_area;
                        Data11.drip_kharif_tomoto_waterdemand = result.drip_kharif_tomoto_waterdemand;
                        Data11.drip_kharif_tomoto_drip_waterdemand = result.drip_kharif_tomoto_drip_waterdemand;
                        Data11.drip_kharif_tomoto_reduction_gw_demand = result.drip_kharif_tomoto_reduction_gw_demand;

                        //Cabbage

                        //Data11.drip_kharif_cabbage_crop_area = result.drip_kharif_cabbage_crop_area;
                        //Data11.drip_kharif_cabbage_fundingsource = result.drip_kharif_cabbage_fundingsource;

                        //Data11.drip_kharif_cabbage_irri_area = result.drip_kharif_cabbage_irri_area;
                        //Data11.drip_kharif_cabbage_waterdemand = result.drip_kharif_cabbage_waterdemand;
                        //Data11.drip_kharif_cabbage_drip_waterdemand = result.drip_kharif_cabbage_drip_waterdemand;
                        //Data11.drip_kharif_cabbage_reduction_gw_demand = result.drip_kharif_cabbage_reduction_gw_demand;

                        ////Beans

                        //Data11.drip_kharif_beans_crop_area = result.drip_kharif_beans_crop_area;
                        //Data11.drip_kharif_beans_fundingsource = result.drip_kharif_beans_fundingsource;

                        //Data11.drip_kharif_beans_irri_area = result.drip_kharif_beans_irri_area;
                        //Data11.drip_kharif_beans_waterdemand = result.drip_kharif_beans_waterdemand;
                        //Data11.drip_kharif_beans_drip_waterdemand = result.drip_kharif_beans_drip_waterdemand;
                        //Data11.drip_kharif_beans_reduction_gw_demand = result.drip_kharif_beans_reduction_gw_demand;

                        //floriculture
                        Data11.drip_kharif_floriculture_crop_area = result.drip_kharif_floriculture_crop_area;
                        Data11.drip_kharif_floriculture_fundingsource = result.drip_kharif_floriculture_fundingsource;

                        Data11.drip_kharif_floriculture_irri_area = result.drip_kharif_floriculture_irri_area;
                        Data11.drip_kharif_floriculture_waterdemand = result.drip_kharif_floriculture_waterdemand;
                        Data11.drip_kharif_floriculture_drip_waterdemand = result.drip_kharif_floriculture_drip_waterdemand;
                        Data11.drip_kharif_floriculture_reduction_gw_demand = result.drip_kharif_floriculture_reduction_gw_demand;

                        //sericulture

                        Data11.drip_kharif_sericulture_crop_area = result.drip_kharif_sericulture_crop_area;
                        Data11.drip_kharif_sericulture_fundingsource = result.drip_kharif_sericulture_fundingsource;

                        Data11.drip_kharif_sericulture_irri_area = result.drip_kharif_sericulture_irri_area;
                        Data11.drip_kharif_sericulture_waterdemand = result.drip_kharif_sericulture_waterdemand;
                        Data11.drip_kharif_sericulture_drip_waterdemand = result.drip_kharif_sericulture_drip_waterdemand;
                        Data11.drip_kharif_sericulture_reduction_gw_demand = result.drip_kharif_sericulture_reduction_gw_demand;

                        //Cucumber

                        //Data11.drip_kharif_cucumber_crop_area = result.drip_kharif_cucumber_crop_area;
                        //Data11.drip_kharif_cucumber_fundingsource = result.drip_kharif_cucumber_fundingsource;

                        //Data11.drip_kharif_cucumber_irri_area = result.drip_kharif_cucumber_irri_area;
                        //Data11.drip_kharif_cucumber_waterdemand = result.drip_kharif_cucumber_waterdemand;
                        //Data11.drip_kharif_cucumber_drip_waterdemand = result.drip_kharif_cucumber_drip_waterdemand;
                        //Data11.drip_kharif_cucumber_reduction_gw_demand = result.drip_kharif_cucumber_reduction_gw_demand;

                        //banana

                        Data11.drip_kharif_banana_crop_area = result.drip_kharif_banana_crop_area;
                        Data11.drip_kharif_banana_fundingsource = result.drip_kharif_banana_fundingsource;

                        Data11.drip_kharif_banana_irri_area = result.drip_kharif_banana_irri_area;
                        Data11.drip_kharif_banana_waterdemand = result.drip_kharif_banana_waterdemand;
                        Data11.drip_kharif_banana_drip_waterdemand = result.drip_kharif_banana_drip_waterdemand;
                        Data11.drip_kharif_banana_reduction_gw_demand = result.drip_kharif_banana_reduction_gw_demand;

                        //fodder

                        Data11.drip_kharif_fodder_crop_area = result.drip_kharif_fodder_crop_area;
                        Data11.drip_kharif_fodder_fundingsource = result.drip_kharif_fodder_fundingsource;

                        Data11.drip_kharif_fodder_irri_area = result.drip_kharif_fodder_irri_area;
                        Data11.drip_kharif_fodder_waterdemand = result.drip_kharif_fodder_waterdemand;
                        Data11.drip_kharif_fodder_drip_waterdemand = result.drip_kharif_fodder_drip_waterdemand;
                        Data11.drip_kharif_fodder_reduction_gw_demand = result.drip_kharif_fodder_reduction_gw_demand;

                        //Maize

                        Data11.drip_kharif_maize_crop_area = result.drip_kharif_maize_crop_area;
                        Data11.drip_kharif_maize_fundingsource = result.drip_kharif_maize_fundingsource;

                        Data11.drip_kharif_maize_irri_area = result.drip_kharif_maize_irri_area;
                        Data11.drip_kharif_maize_waterdemand = result.drip_kharif_maize_waterdemand;
                        Data11.drip_kharif_maize_drip_waterdemand = result.drip_kharif_maize_drip_waterdemand;
                        Data11.drip_kharif_maize_reduction_gw_demand = result.drip_kharif_maize_reduction_gw_demand;

                        //potato

                        //Data11.drip_kharif_potato_crop_area = result.drip_kharif_potato_crop_area;
                        //Data11.drip_kharif_potato_fundingsource = result.drip_kharif_potato_fundingsource;

                        //Data11.drip_kharif_potato_irri_area = result.drip_kharif_potato_irri_area;
                        //Data11.drip_kharif_potato_waterdemand = result.drip_kharif_potato_waterdemand;
                        //Data11.drip_kharif_potato_drip_waterdemand = result.drip_kharif_potato_drip_waterdemand;
                        //Data11.drip_kharif_potato_reduction_gw_demand = result.drip_kharif_potato_reduction_gw_demand;

                        //chillies

                        Data11.drip_kharif_chillies_crop_area = result.drip_kharif_chillies_crop_area;
                        Data11.drip_kharif_chillies_fundingsource = result.drip_kharif_chillies_fundingsource;

                        Data11.drip_kharif_chillies_irri_area = result.drip_kharif_chillies_irri_area;
                        Data11.drip_kharif_chillies_waterdemand = result.drip_kharif_chillies_waterdemand;
                        Data11.drip_kharif_chillies_drip_waterdemand = result.drip_kharif_chillies_drip_waterdemand;
                        Data11.drip_kharif_chillies_reduction_gw_demand = result.drip_kharif_chillies_reduction_gw_demand;

                        //cotton

                        Data11.drip_kharif_cotton_crop_area = result.drip_kharif_cotton_crop_area;
                        Data11.drip_kharif_cotton_fundingsource = result.drip_kharif_cotton_fundingsource;
                        Data11.drip_kharif_cotton_irri_area = result.drip_kharif_cotton_irri_area;
                        Data11.drip_kharif_cotton_waterdemand = result.drip_kharif_cotton_waterdemand;
                        Data11.drip_kharif_cotton_drip_waterdemand = result.drip_kharif_cotton_drip_waterdemand;
                        Data11.drip_kharif_cotton_reduction_gw_demand = result.drip_kharif_cotton_reduction_gw_demand;

                        //melon


                        Data11.drip_kharif_melon_crop_area = result.drip_kharif_melon_crop_area;
                        Data11.drip_kharif_melon_fundingsource = result.drip_kharif_melon_fundingsource;

                        Data11.drip_kharif_melon_irri_area = result.drip_kharif_melon_irri_area;
                        Data11.drip_kharif_melon_waterdemand = result.drip_kharif_melon_waterdemand;
                        Data11.drip_kharif_melon_drip_waterdemand = result.drip_kharif_melon_drip_waterdemand;
                        Data11.drip_kharif_melon_reduction_gw_demand = result.drip_kharif_melon_reduction_gw_demand;

                        //citrus
                        Data11.drip_kharif_citrus_crop_area = result.drip_kharif_citrus_crop_area;
                        Data11.drip_kharif_citrus_fundingsource = result.drip_kharif_citrus_fundingsource;

                        Data11.drip_kharif_citrus_irri_area = result.drip_kharif_citrus_irri_area;
                        Data11.drip_kharif_citrus_waterdemand = result.drip_kharif_citrus_waterdemand;
                        Data11.drip_kharif_citrus_drip_waterdemand = result.drip_kharif_citrus_drip_waterdemand;
                        Data11.drip_kharif_citrus_reduction_gw_demand = result.drip_kharif_citrus_reduction_gw_demand;

                        //peanut

                        //Data11.drip_kharif_peanut_crop_area = result.drip_kharif_peanut_crop_area;
                        //Data11.drip_kharif_peanut_fundingsource = result.drip_kharif_peanut_fundingsource;

                        //Data11.drip_kharif_peanut_irri_area = result.drip_kharif_peanut_irri_area;
                        //Data11.drip_kharif_peanut_waterdemand = result.drip_kharif_peanut_waterdemand;
                        //Data11.drip_kharif_peanut_drip_waterdemand = result.drip_kharif_peanut_drip_waterdemand;
                        //Data11.drip_kharif_peanut_reduction_gw_demand = result.drip_kharif_peanut_reduction_gw_demand;


                        //horticulture

                        Data11.drip_kharif_horticulture_crop_area = result.drip_kharif_horticulture_crop_area;
                        Data11.drip_kharif_horticulture_fundingsource = result.drip_kharif_horticulture_fundingsource;

                        Data11.drip_kharif_horticulture_irri_area = result.drip_kharif_horticulture_irri_area;
                        Data11.drip_kharif_horticulture_waterdemand = result.drip_kharif_horticulture_waterdemand;
                        Data11.drip_kharif_horticulture_drip_waterdemand = result.drip_kharif_horticulture_drip_waterdemand;
                        Data11.drip_kharif_horticulture_reduction_gw_demand = result.drip_kharif_horticulture_reduction_gw_demand;

                        //karif crops total

                        Data11.drip_kharif_total_waterdemand = result.drip_kharif_total_waterdemand;
                        Data11.drip_kharif_total_drip_waterdemand = result.drip_kharif_total_drip_waterdemand;
                        Data11.drip_kharif_total_reduction_waterdemand = result.drip_kharif_total_reduction_waterdemand;

                        //rabi sericulture

                        Data11.drip_rabi_sericulture_crop_area = result.drip_rabi_sericulture_crop_area;
                        Data11.drip_rabi_sericulture_fundingsource = result.drip_rabi_sericulture_fundingsource;

                        Data11.drip_rabi_sericulture_irri_area = result.drip_rabi_sericulture_irri_area;
                        Data11.drip_rabi_sericulture_waterdemand = result.drip_rabi_sericulture_waterdemand;
                        Data11.drip_rabi_sericulture_drip_waterdemand = result.drip_rabi_sericulture_drip_waterdemand;
                        Data11.drip_rabi_sericulture_reduction_gw_demand = result.drip_rabi_sericulture_reduction_gw_demand;

                        //rabi tomoto

                        Data11.drip_rabi_tomoto_crop_area = result.drip_rabi_tomoto_crop_area;
                        Data11.drip_rabi_tomoto_fundingsource = result.drip_rabi_tomoto_fundingsource;

                        Data11.drip_rabi_tomoto_irri_area = result.drip_rabi_tomoto_irri_area;
                        Data11.drip_rabi_tomoto_waterdemand = result.drip_rabi_tomoto_waterdemand;
                        Data11.drip_rabi_tomoto_drip_waterdemand = result.drip_rabi_tomoto_drip_waterdemand;
                        Data11.drip_rabi_tomoto_reduction_gw_demand = result.drip_rabi_tomoto_reduction_gw_demand;

                        //rabi cabbage

                        //Data11.drip_rabi_cabbage_crop_area = result.drip_rabi_cabbage_crop_area;
                        //Data11.drip_rabi_cabbage_fundingsource = result.drip_rabi_cabbage_fundingsource;

                        //Data11.drip_rabi_cabbage_irri_area = result.drip_rabi_cabbage_irri_area;
                        //Data11.drip_rabi_cabbage_waterdemand = result.drip_rabi_cabbage_waterdemand;
                        //Data11.drip_rabi_cabbage_drip_waterdemand = result.drip_rabi_cabbage_drip_waterdemand;
                        //Data11.drip_rabi_cabbage_reduction_gw_demand = result.drip_rabi_cabbage_reduction_gw_demand;

                        //rabi beans

                        //Data11.drip_rabi_beans_crop_area = result.drip_rabi_beans_crop_area;
                        //Data11.drip_rabi_beans_fundingsource = result.drip_rabi_beans_fundingsource;

                        //Data11.drip_rabi_beans_irri_area = result.drip_rabi_beans_irri_area;
                        //Data11.drip_rabi_beans_waterdemand = result.drip_rabi_beans_waterdemand;
                        //Data11.drip_rabi_beans_drip_waterdemand = result.drip_rabi_beans_drip_waterdemand;
                        //Data11.drip_rabi_beans_reduction_gw_demand = result.drip_rabi_beans_reduction_gw_demand;

                        //rabi floriculture

                        Data11.drip_rabi_floriculture_crop_area = result.drip_rabi_floriculture_crop_area;
                        Data11.drip_rabi_floriculture_fundingsource = result.drip_rabi_floriculture_fundingsource;

                        Data11.drip_rabi_floriculture_irri_area = result.drip_rabi_floriculture_irri_area;
                        Data11.drip_rabi_floriculture_waterdemand = result.drip_rabi_floriculture_waterdemand;
                        Data11.drip_rabi_floriculture_drip_waterdemand = result.drip_rabi_floriculture_drip_waterdemand;
                        Data11.drip_rabi_floriculture_reduction_gw_demand = result.drip_rabi_floriculture_reduction_gw_demand;

                        //rabi potato

                        //Data11.drip_rabi_potato_crop_area = result.drip_rabi_potato_crop_area;
                        //Data11.drip_rabi_potato_fundingsource = result.drip_rabi_potato_fundingsource;

                        //Data11.drip_rabi_potato_irri_area = result.drip_rabi_potato_irri_area;
                        //Data11.drip_rabi_potato_waterdemand = result.drip_rabi_potato_waterdemand;
                        //Data11.drip_rabi_potato_drip_waterdemand = result.drip_rabi_potato_drip_waterdemand;
                        //Data11.drip_rabi_potato_reduction_gw_demand = result.drip_rabi_potato_reduction_gw_demand;

                        //rabi cucumber

                        //Data11.drip_rabi_cucumber_crop_area = result.drip_rabi_cucumber_crop_area;
                        //Data11.drip_rabi_cucumber_fundingsource = result.drip_rabi_cucumber_fundingsource;

                        //Data11.drip_rabi_cucumber_irri_area = result.drip_rabi_cucumber_irri_area;
                        //Data11.drip_rabi_cucumber_waterdemand = result.drip_rabi_cucumber_waterdemand;
                        //Data11.drip_rabi_cucumber_drip_waterdemand = result.drip_rabi_cucumber_drip_waterdemand;
                        //Data11.drip_rabi_cucumber_reduction_gw_demand = result.drip_rabi_cucumber_reduction_gw_demand;

                        //rabi ragi

                        Data11.drip_rabi_ragi_crop_area = result.drip_rabi_ragi_crop_area;
                        Data11.drip_rabi_ragi_fundingsource = result.drip_rabi_ragi_fundingsource;

                        Data11.drip_rabi_ragi_irri_area = result.drip_rabi_ragi_irri_area;
                        Data11.drip_rabi_ragi_waterdemand = result.drip_rabi_ragi_waterdemand;
                        Data11.drip_rabi_ragi_drip_waterdemand = result.drip_rabi_ragi_drip_waterdemand;
                        Data11.drip_rabi_ragi_reduction_gw_demand = result.drip_rabi_ragi_reduction_gw_demand;

                        //rabi sugarcane

                        Data11.drip_rabi_sugarcane_crop_area = result.drip_rabi_sugarcane_crop_area;
                        Data11.drip_rabi_sugarcane_fundingsource = result.drip_rabi_sugarcane_fundingsource;

                        Data11.drip_rabi_sugarcane_irri_area = result.drip_rabi_sugarcane_irri_area;
                        Data11.drip_rabi_sugarcane_waterdemand = result.drip_rabi_sugarcane_waterdemand;
                        Data11.drip_rabi_sugarcane_drip_waterdemand = result.drip_rabi_sugarcane_drip_waterdemand;
                        Data11.drip_rabi_sugarcane_reduction_gw_demand = result.drip_rabi_sugarcane_reduction_gw_demand;


                        //Rabi Maize
                        Data11.drip_rabi_maize_crop_area = result.drip_rabi_maize_crop_area;
                        Data11.drip_rabi_maize_fundingsource = result.drip_rabi_maize_fundingsource;

                        Data11.drip_rabi_maize_irri_area = result.drip_rabi_maize_irri_area;
                        Data11.drip_rabi_maize_waterdemand = result.drip_rabi_maize_waterdemand;
                        Data11.drip_rabi_maize_drip_waterdemand = result.drip_rabi_maize_drip_waterdemand;
                        Data11.drip_rabi_maize_reduction_gw_demand = result.drip_rabi_maize_reduction_gw_demand;

                        //rabi fodder

                        Data11.drip_rabi_fodder_crop_area = result.drip_rabi_fodder_crop_area;
                        Data11.drip_rabi_fodder_fundingsource = result.drip_rabi_fodder_fundingsource;

                        Data11.drip_rabi_fodder_irri_area = result.drip_rabi_fodder_irri_area;
                        Data11.drip_rabi_fodder_waterdemand = result.drip_rabi_fodder_waterdemand;
                        Data11.drip_rabi_fodder_drip_waterdemand = result.drip_rabi_fodder_drip_waterdemand;
                        Data11.drip_rabi_fodder_reduction_gw_demand = result.drip_rabi_fodder_reduction_gw_demand;

                        //rabi paddy

                        Data11.drip_rabi_paddy_crop_area = result.drip_rabi_paddy_crop_area;
                        Data11.drip_rabi_paddy_fundingsource = result.drip_rabi_paddy_fundingsource;

                        Data11.drip_rabi_paddy_irri_area = result.drip_rabi_paddy_irri_area;
                        Data11.drip_rabi_paddy_waterdemand = result.drip_rabi_paddy_waterdemand;
                        Data11.drip_rabi_paddy_drip_waterdemand = result.drip_rabi_paddy_drip_waterdemand;
                        Data11.drip_rabi_paddy_reduction_gw_demand = result.drip_rabi_paddy_reduction_gw_demand;

                        //rabi alfalfa

                        Data11.drip_rabi_alfalfa_crop_area = result.drip_rabi_alfalfa_crop_area;
                        Data11.drip_rabi_alfalfa_fundingsource = result.drip_rabi_alfalfa_fundingsource;

                        Data11.drip_rabi_alfalfa_irri_area = result.drip_rabi_alfalfa_irri_area;
                        Data11.drip_rabi_alfalfa_waterdemand = result.drip_rabi_alfalfa_waterdemand;
                        Data11.drip_rabi_alfalfa_drip_waterdemand = result.drip_rabi_alfalfa_drip_waterdemand;
                        Data11.drip_rabi_alfalfa_reduction_gw_demand = result.drip_rabi_alfalfa_reduction_gw_demand;

                        // rabi onion

                        //Data11.drip_rabi_onion_crop_area = result.drip_rabi_onion_crop_area;
                        //Data11.drip_rabi_onion_fundingsource = result.drip_rabi_onion_fundingsource;

                        //Data11.drip_rabi_onion_irri_area = result.drip_rabi_onion_irri_area;
                        //Data11.drip_rabi_onion_waterdemand = result.drip_rabi_onion_waterdemand;
                        //Data11.drip_rabi_onion_drip_waterdemand = result.drip_rabi_onion_drip_waterdemand;
                        //Data11.drip_rabi_onion_reduction_gw_demand = result.drip_rabi_onion_reduction_gw_demand;

                        //rabi horticulture

                        Data11.drip_rabi_horticulture_crop_area = result.drip_rabi_horticulture_crop_area;
                        Data11.drip_rabi_horticulture_fundingsource = result.drip_rabi_horticulture_fundingsource;

                        Data11.drip_rabi_horticulture_irri_area = result.drip_rabi_horticulture_irri_area;
                        Data11.drip_rabi_horticulture_waterdemand = result.drip_rabi_horticulture_waterdemand;
                        Data11.drip_rabi_horticulture_drip_waterdemand = result.drip_rabi_horticulture_drip_waterdemand;
                        Data11.drip_rabi_horticulture_reduction_gw_demand = result.drip_rabi_horticulture_reduction_gw_demand;

                        //rabi sunflower
                        Data11.drip_rabi_sunflower_crop_area = result.drip_rabi_sunflower_crop_area;
                        Data11.drip_rabi_sunflower_fundingsource = result.drip_rabi_sunflower_fundingsource;

                        Data11.drip_rabi_sunflower_irri_area = result.drip_rabi_sunflower_irri_area;
                        Data11.drip_rabi_sunflower_waterdemand = result.drip_rabi_sunflower_waterdemand;
                        Data11.drip_rabi_sunflower_drip_waterdemand = result.drip_rabi_sunflower_drip_waterdemand;
                        Data11.drip_rabi_sunflower_reduction_gw_demand = result.drip_rabi_sunflower_reduction_gw_demand;

                        //rabi crops total

                        Data11.drip_rabi_total_waterdemand = result.drip_rabi_total_waterdemand;
                        Data11.drip_rabi_total_rabi_waterdemand = result.drip_rabi_total_rabi_waterdemand;
                        Data11.drip_rabi_total_reduction_waterdemand = result.drip_rabi_total_reduction_waterdemand;


                        //summer sericulture

                        Data11.drip_summer_sericulture_crop_area = result.drip_summer_sericulture_crop_area;
                        Data11.drip_summer_sericulture_fundingsource = result.drip_summer_sericulture_fundingsource;

                        Data11.drip_summer_sericulture_irri_area = result.drip_summer_sericulture_irri_area;
                        Data11.drip_summer_sericulture_waterdemand = result.drip_summer_sericulture_waterdemand;
                        Data11.drip_summer_sericulture_drip_waterdemand = result.drip_summer_sericulture_drip_waterdemand;
                        Data11.drip_summer_sericulture_reduction_gw_demand = result.drip_summer_sericulture_reduction_gw_demand;

                        //summer tomoto

                        Data11.drip_summer_tomoto_crop_area = result.drip_summer_tomoto_crop_area;
                        Data11.drip_summer_tomoto_fundingsource = result.drip_summer_tomoto_fundingsource;

                        Data11.drip_summer_tomoto_irri_area = result.drip_summer_tomoto_irri_area;
                        Data11.drip_summer_tomoto_waterdemand = result.drip_summer_tomoto_waterdemand;
                        Data11.drip_summer_tomoto_drip_waterdemand = result.drip_summer_tomoto_drip_waterdemand;
                        Data11.drip_summer_tomoto_reduction_gw_demand = result.drip_summer_tomoto_reduction_gw_demand;

                        //sumer cabbage

                        //Data11.drip_summer_cabbage_crop_area = result.drip_summer_cabbage_crop_area;
                        //Data11.drip_summer_cabbage_fundingsource = result.drip_summer_cabbage_fundingsource;

                        //Data11.drip_summer_cabbage_irri_area = result.drip_summer_cabbage_irri_area;
                        //Data11.drip_summer_cabbage_waterdemand = result.drip_summer_cabbage_waterdemand;
                        //Data11.drip_summer_cabbage_drip_waterdemand = result.drip_summer_cabbage_drip_waterdemand;
                        //Data11.drip_summer_cabbage_reduction_gw_demand = result.drip_summer_cabbage_reduction_gw_demand;

                        //summer beans

                        //Data11.drip_summer_beans_crop_area = result.drip_summer_beans_crop_area;
                        //Data11.drip_summer_beans_fundingsource = result.drip_summer_beans_fundingsource;

                        //Data11.drip_summer_beans_irri_area = result.drip_summer_beans_irri_area;
                        //Data11.drip_summer_beans_waterdemand = result.drip_summer_beans_waterdemand;
                        //Data11.drip_summer_beans_drip_waterdemand = result.drip_summer_beans_drip_waterdemand;
                        //Data11.drip_summer_beans_reduction_gw_demand = result.drip_summer_beans_reduction_gw_demand;

                        //summer floriculture

                        Data11.drip_summer_floriculture_crop_area = result.drip_summer_floriculture_crop_area;
                        Data11.drip_summer_floriculture_fundingsource = result.drip_summer_floriculture_fundingsource;

                        Data11.drip_summer_floriculture_irri_area = result.drip_summer_floriculture_irri_area;
                        Data11.drip_summer_floriculture_waterdemand = result.drip_summer_floriculture_waterdemand;
                        Data11.drip_summer_floriculture_drip_waterdemand = result.drip_summer_floriculture_drip_waterdemand;
                        Data11.drip_summer_floriculture_reduction_gw_demand = result.drip_summer_floriculture_reduction_gw_demand;

                        //summer maize
                        Data11.drip_summer_maize_crop_area = result.drip_summer_maize_crop_area;
                        Data11.drip_summer_maize_fundingsource = result.drip_summer_maize_fundingsource;

                        Data11.drip_summer_maize_irri_area = result.drip_summer_maize_irri_area;
                        Data11.drip_summer_maize_waterdemand = result.drip_summer_maize_waterdemand;
                        Data11.drip_summer_maize_drip_waterdemand = result.drip_summer_maize_drip_waterdemand;
                        Data11.drip_summer_maize_reduction_gw_demand = result.drip_summer_maize_drip_waterdemand;

                        //summer fodder
                        Data11.drip_summer_fodder_crop_area = result.drip_summer_fodder_crop_area;
                        Data11.drip_summer_fodder_fundingsource = result.drip_summer_fodder_fundingsource;

                        Data11.drip_summer_fodder_irri_area = result.drip_summer_fodder_irri_area;
                        Data11.drip_summer_fodder_waterdemand = result.drip_summer_fodder_waterdemand;
                        Data11.drip_summer_fodder_drip_waterdemand = result.drip_summer_fodder_drip_waterdemand;
                        Data11.drip_summer_fodder_reduction_gw_demand = result.drip_summer_fodder_reduction_gw_demand;

                        //summer sugarcane

                        Data11.drip_summer_sugarcane_crop_area = result.drip_summer_sugarcane_crop_area;
                        Data11.drip_summer_sugarcane_fundingsource = result.drip_summer_sugarcane_fundingsource;

                        Data11.drip_summer_sugarcane_irri_area = result.drip_summer_sugarcane_irri_area;
                        Data11.drip_summer_sugarcane_waterdemand = result.drip_summer_sugarcane_waterdemand;
                        Data11.drip_summer_sugarcane_drip_waterdemand = result.drip_summer_sugarcane_drip_waterdemand;
                        Data11.drip_summer_sugarcane_reduction_gw_demand = result.drip_summer_sugarcane_reduction_gw_demand;


                        //summer crops total
                        Data11.drip_summer_total_waterdemand = result.drip_summer_total_waterdemand;
                        Data11.drip_summer_total_summer_waterdemand = result.drip_summer_total_summer_waterdemand;
                        Data11.drip_summer_total_reduction_waterdemand = result.drip_summer_total_reduction_waterdemand;
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        Data11.date_time = Today1;

                        //annual total
                        Data11.drip_annual_reduction_waterdemand = result.drip_annual_reduction_waterdemand;

                        //new columns water requirement
                        Data11.drip_kharif_paddy_water_req = result.drip_kharif_paddy_water_req;
                        Data11.drip_kharif_ragi_water_req = result.drip_kharif_ragi_water_req;
                        Data11.drip_kharif_groundnut_water_req = result.drip_kharif_groundnut_water_req;
                        Data11.drip_kharif_sugarcane_water_req = result.drip_kharif_sugarcane_water_req;
                        Data11.drip_kharif_tomoto_water_req = result.drip_kharif_tomoto_water_req;
                        // Data11.drip_kharif_cabbage_water_req = result.drip_kharif_cabbage_water_req;
                        // Data11.drip_kharif_beans_water_req = result.drip_kharif_beans_water_req;
                        Data11.drip_kharif_floriculture_water_req = result.drip_kharif_floriculture_water_req;
                        Data11.drip_kharif_sericulture_water_req = result.drip_kharif_sericulture_water_req;
                        // Data11.drip_kharif_cucumber_water_req = result.drip_kharif_cucumber_water_req;
                        Data11.drip_kharif_banana_water_req = result.drip_kharif_banana_water_req;
                        Data11.drip_kharif_fodder_water_req = result.drip_kharif_fodder_water_req;
                        Data11.drip_kharif_maize_water_req = result.drip_kharif_maize_water_req;
                        // Data11.drip_kharif_potato_water_req = result.drip_kharif_potato_water_req;
                        Data11.drip_kharif_chillies_water_req = result.drip_kharif_chillies_water_req;
                        Data11.drip_kharif_cotton_water_req = result.drip_kharif_cotton_water_req;
                        Data11.drip_kharif_melon_water_req = result.drip_kharif_melon_water_req;
                        Data11.drip_kharif_citrus_water_req = result.drip_kharif_citrus_water_req;
                        //Data11.drip_kharif_peanut_water_req = result.drip_kharif_peanut_water_req;
                        Data11.drip_kharif_horticulture_water_req = result.drip_kharif_horticulture_water_req;
                        Data11.drip_summer_sugarcane_irri_area = result.drip_summer_sugarcane_irri_area;

                        Data11.drip_rabi_sericulture_water_req = result.drip_rabi_sericulture_water_req;
                        Data11.drip_rabi_tomoto_water_req = result.drip_rabi_tomoto_water_req;
                        // Data11.drip_rabi_cabbage_water_req = result.drip_rabi_cabbage_water_req;
                        // Data11.drip_rabi_beans_water_req = result.drip_rabi_beans_water_req;
                        Data11.drip_rabi_floriculture_water_req = result.drip_rabi_floriculture_water_req;
                        // Data11.drip_rabi_potato_water_req = result.drip_rabi_potato_water_req;
                        // Data11.drip_rabi_cucumber_water_req = result.drip_rabi_cucumber_water_req;
                        Data11.drip_rabi_ragi_water_req = result.drip_rabi_ragi_water_req;
                        Data11.drip_rabi_sugarcane_water_req = result.drip_rabi_sugarcane_water_req;
                        Data11.drip_rabi_maize_water_req = result.drip_rabi_maize_water_req;
                        Data11.drip_rabi_fodder_water_req = result.drip_rabi_fodder_water_req;
                        Data11.drip_rabi_paddy_water_req = result.drip_rabi_paddy_water_req;
                        Data11.drip_rabi_alfalfa_water_req = result.drip_rabi_alfalfa_water_req;
                        // Data11.drip_rabi_onion_water_req = result.drip_rabi_onion_water_req;
                        Data11.drip_rabi_horticulture_water_req = result.drip_rabi_horticulture_water_req;
                        Data11.drip_rabi_sunflower_water_req = result.drip_rabi_sunflower_water_req;

                        Data11.drip_summer_sericulture_water_req = result.drip_summer_sericulture_water_req;
                        // Data11.drip_summer_tomoto_water_req = result.drip_summer_tomoto_water_req;
                        //  Data11.drip_summer_cabbage_water_req = result.drip_summer_cabbage_water_req;
                        //  Data11.drip_summer_beans_water_req = result.drip_summer_beans_water_req;
                        Data11.drip_summer_floriculture_water_req = result.drip_summer_floriculture_water_req;
                        Data11.drip_summer_maize_water_req = result.drip_summer_maize_water_req;
                        Data11.drip_summer_fodder_water_req = result.drip_summer_fodder_water_req;
                        Data11.drip_summer_sugarcane_water_req = result.drip_summer_sugarcane_water_req;

                        Data11.drip_other_funding_source = result.drip_other_funding_source;

                        //if (result.drip_approx_estimated_cost != null && result.drip_approx_estimated_cost != "")
                        //{
                        //    string valid_negitive = Validation_NegitiveVal(result.drip_approx_estimated_cost);
                        //    if (valid_negitive == "True")
                        //    {
                                
                        //    }
                        //    else
                        //    {
                        //        return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                        //    }

                        //}
                        Data11.drip_approx_estimated_cost = result.drip_approx_estimated_cost;
                        Data11.drip_cost_type = result.drip_cost_type;

                        //summer horticulture
                        Data11.drip_summer_horticulture_crop_area = result.drip_summer_horticulture_crop_area;
                        Data11.drip_summer_horticulture_irri_area = result.drip_summer_horticulture_irri_area;
                        Data11.drip_summer_horticulture_water_req = result.drip_summer_horticulture_water_req;
                        Data11.drip_summer_horticulture_waterdemand = result.drip_summer_horticulture_waterdemand;
                        Data11.drip_summer_horticulture_netwater_waterdemand = result.drip_summer_horticulture_netwater_waterdemand;
                        Data11.drip_summer_horticulture_reduction_gw_demand = result.drip_summer_horticulture_reduction_gw_demand;
                        //add crops
                        Data11.drip_kharif_othercrop_name1 = result.drip_kharif_othercrop_name1;
                        Data11.drip_kharif_othercrop_area1 = result.drip_kharif_othercrop_area1;
                        Data11.drip_kharif_othercrop_irri_area1 = result.drip_kharif_othercrop_irri_area1;
                        Data11.drip_kharif_othercrop_water_req1 = result.drip_kharif_othercrop_water_req1;
                        Data11.drip_kharif_othercrop_waterdemand1 = result.drip_kharif_othercrop_waterdemand1;
                        Data11.drip_kharif_othercrop_drip_waterdemand1 = result.drip_kharif_othercrop_drip_waterdemand1;
                        Data11.drip_kharif_othercrop_reduc_gw_demand1 = result.drip_kharif_othercrop_reduc_gw_demand1;

                        Data11.drip_kharif_othercrop_name2 = result.drip_kharif_othercrop_name2;
                        Data11.drip_kharif_othercrop_area2 = result.drip_kharif_othercrop_area2;
                        Data11.drip_kharif_othercrop_irri_area2 = result.drip_kharif_othercrop_irri_area2;
                        Data11.drip_kharif_othercrop_water_req2 = result.drip_kharif_othercrop_water_req2;
                        Data11.drip_kharif_othercrop_waterdemand2 = result.drip_kharif_othercrop_waterdemand2;
                        Data11.drip_kharif_othercrop_drip_waterdemand2 = result.drip_kharif_othercrop_drip_waterdemand2;
                        Data11.drip_kharif_othercrop_reduc_gw_demand2 = result.drip_kharif_othercrop_reduc_gw_demand2;

                        Data11.drip_kharif_othercrop_name3 = result.drip_kharif_othercrop_name3;
                        Data11.drip_kharif_othercrop_area3 = result.drip_kharif_othercrop_area3;
                        Data11.drip_kharif_othercrop_irri_area3 = result.drip_kharif_othercrop_irri_area3;
                        Data11.drip_kharif_othercrop_water_req3 = result.drip_kharif_othercrop_water_req3;
                        Data11.drip_kharif_othercrop_waterdemand3 = result.drip_kharif_othercrop_waterdemand3;
                        Data11.drip_kharif_othercrop_drip_waterdemand3 = result.drip_kharif_othercrop_drip_waterdemand3;
                        Data11.drip_kharif_othercrop_reduc_gw_demand3 = result.drip_kharif_othercrop_reduc_gw_demand3;

                        Data11.drip_kharif_othercrop_name4 = result.drip_kharif_othercrop_name4;
                        Data11.drip_kharif_othercrop_area4 = result.drip_kharif_othercrop_area4;
                        Data11.drip_kharif_othercrop_irri_area4 = result.drip_kharif_othercrop_irri_area4;
                        Data11.drip_kharif_othercrop_water_req4 = result.drip_kharif_othercrop_water_req4;
                        Data11.drip_kharif_othercrop_waterdemand4 = result.drip_kharif_othercrop_waterdemand4;
                        Data11.drip_kharif_othercrop_drip_waterdemand4 = result.drip_kharif_othercrop_drip_waterdemand4;
                        Data11.drip_kharif_othercrop_reduc_gw_demand4 = result.drip_kharif_othercrop_reduc_gw_demand4;

                        Data11.drip_kharif_othercrop_name5 = result.drip_kharif_othercrop_name5;
                        Data11.drip_kharif_othercrop_area5 = result.drip_kharif_othercrop_area5;
                        Data11.drip_kharif_othercrop_irri_area5 = result.drip_kharif_othercrop_irri_area5;
                        Data11.drip_kharif_othercrop_water_req5 = result.drip_kharif_othercrop_water_req5;
                        Data11.drip_kharif_othercrop_waterdemand5 = result.drip_kharif_othercrop_waterdemand5;
                        Data11.drip_kharif_othercrop_drip_waterdemand5 = result.drip_kharif_othercrop_drip_waterdemand5;
                        Data11.drip_kharif_othercrop_reduc_gw_demand5 = result.drip_kharif_othercrop_reduc_gw_demand5;

                        //summer rabi
                        Data11.drip_rabi_othercrop_name1 = result.drip_rabi_othercrop_name1;
                        Data11.drip_rabi_othercrop_area1 = result.drip_rabi_othercrop_area1;
                        Data11.drip_rabi_othercrop_irri_area1 = result.drip_rabi_othercrop_irri_area1;
                        Data11.drip_rabi_othercrop_water_req1 = result.drip_rabi_othercrop_water_req1;
                        Data11.drip_rabi_othercrop_waterdemand1 = result.drip_rabi_othercrop_waterdemand1;
                        Data11.drip_rabi_othercrop_drip_waterdemand1 = result.drip_rabi_othercrop_drip_waterdemand1;
                        Data11.drip_rabi_othercrop_reduc_gw_demand1 = result.drip_rabi_othercrop_reduc_gw_demand1;

                        Data11.drip_rabi_othercrop_name2 = result.drip_rabi_othercrop_name2;
                        Data11.drip_rabi_othercrop_area2 = result.drip_rabi_othercrop_area2;
                        Data11.drip_rabi_othercrop_irri_area2 = result.drip_rabi_othercrop_irri_area2;
                        Data11.drip_rabi_othercrop_water_req2 = result.drip_rabi_othercrop_water_req2;
                        Data11.drip_rabi_othercrop_waterdemand2 = result.drip_rabi_othercrop_waterdemand2;
                        Data11.drip_rabi_othercrop_drip_waterdemand2 = result.drip_rabi_othercrop_drip_waterdemand2;
                        Data11.drip_rabi_othercrop_reduc_gw_demand2 = result.drip_rabi_othercrop_reduc_gw_demand2;

                        Data11.drip_rabi_othercrop_name3 = result.drip_rabi_othercrop_name3;
                        Data11.drip_rabi_othercrop_area3 = result.drip_rabi_othercrop_area3;
                        Data11.drip_rabi_othercrop_irri_area3 = result.drip_rabi_othercrop_irri_area3;
                        Data11.drip_rabi_othercrop_water_req3 = result.drip_rabi_othercrop_water_req3;
                        Data11.drip_rabi_othercrop_waterdemand3 = result.drip_rabi_othercrop_waterdemand3;
                        Data11.drip_rabi_othercrop_drip_waterdemand3 = result.drip_rabi_othercrop_drip_waterdemand3;
                        Data11.drip_rabi_othercrop_reduc_gw_demand3 = result.drip_rabi_othercrop_reduc_gw_demand3;

                        Data11.drip_rabi_othercrop_name4 = result.drip_rabi_othercrop_name4;
                        Data11.drip_rabi_othercrop_area4 = result.drip_rabi_othercrop_area4;
                        Data11.drip_rabi_othercrop_irri_area4 = result.drip_rabi_othercrop_irri_area4;
                        Data11.drip_rabi_othercrop_water_req4 = result.drip_rabi_othercrop_water_req4;
                        Data11.drip_rabi_othercrop_waterdemand4 = result.drip_rabi_othercrop_waterdemand4;
                        Data11.drip_rabi_othercrop_drip_waterdemand4 = result.drip_rabi_othercrop_drip_waterdemand4;
                        Data11.drip_rabi_othercrop_reduc_gw_demand4 = result.drip_rabi_othercrop_reduc_gw_demand4;

                        Data11.drip_rabi_othercrop_name5 = result.drip_rabi_othercrop_name5;
                        Data11.drip_rabi_othercrop_area5 = result.drip_rabi_othercrop_area5;
                        Data11.drip_rabi_othercrop_irri_area5 = result.drip_rabi_othercrop_irri_area5;
                        Data11.drip_rabi_othercrop_water_req5 = result.drip_rabi_othercrop_water_req5;
                        Data11.drip_rabi_othercrop_waterdemand5 = result.drip_rabi_othercrop_waterdemand5;
                        Data11.drip_rabi_othercrop_drip_waterdemand5 = result.drip_rabi_othercrop_drip_waterdemand5;
                        Data11.drip_rabi_othercrop_reduc_gw_demand5 = result.drip_rabi_othercrop_reduc_gw_demand5;

                        //summer
                        Data11.drip_summer_othercrop_name1 = result.drip_summer_othercrop_name1;
                        Data11.drip_summer_othercrop_area1 = result.drip_summer_othercrop_area1;
                        Data11.drip_summer_othercrop_irri_area1 = result.drip_summer_othercrop_irri_area1;
                        Data11.drip_summer_othercrop_water_req1 = result.drip_summer_othercrop_water_req1;
                        Data11.drip_summer_othercrop_waterdemand1 = result.drip_summer_othercrop_waterdemand1;
                        Data11.drip_summer_othercrop_drip_waterdemand1 = result.drip_summer_othercrop_drip_waterdemand1;
                        Data11.drip_summer_othercrop_reduc_gw_demand1 = result.drip_summer_othercrop_reduc_gw_demand1;

                        Data11.drip_summer_othercrop_name2 = result.drip_summer_othercrop_name2;
                        Data11.drip_summer_othercrop_area2 = result.drip_summer_othercrop_area2;
                        Data11.drip_summer_othercrop_irri_area2 = result.drip_summer_othercrop_irri_area2;
                        Data11.drip_summer_othercrop_water_req2 = result.drip_summer_othercrop_water_req2;
                        Data11.drip_summer_othercrop_waterdemand2 = result.drip_summer_othercrop_waterdemand2;
                        Data11.drip_summer_othercrop_drip_waterdemand2 = result.drip_summer_othercrop_drip_waterdemand2;
                        Data11.drip_summer_othercrop_reduc_gw_demand2 = result.drip_summer_othercrop_reduc_gw_demand2;

                        Data11.drip_summer_othercrop_name3 = result.drip_summer_othercrop_name3;
                        Data11.drip_summer_othercrop_area3 = result.drip_summer_othercrop_area3;
                        Data11.drip_summer_othercrop_irri_area3 = result.drip_summer_othercrop_irri_area3;
                        Data11.drip_summer_othercrop_water_req3 = result.drip_summer_othercrop_water_req3;
                        Data11.drip_summer_othercrop_waterdemand3 = result.drip_summer_othercrop_waterdemand3;
                        Data11.drip_summer_othercrop_drip_waterdemand3 = result.drip_summer_othercrop_drip_waterdemand3;
                        Data11.drip_summer_othercrop_reduc_gw_demand3 = result.drip_summer_othercrop_reduc_gw_demand3;

                        Data11.drip_summer_othercrop_name4 = result.drip_summer_othercrop_name4;
                        Data11.drip_summer_othercrop_area4 = result.drip_summer_othercrop_area4;
                        Data11.drip_summer_othercrop_irri_area4 = result.drip_summer_othercrop_irri_area4;
                        Data11.drip_summer_othercrop_water_req4 = result.drip_summer_othercrop_water_req4;
                        Data11.drip_summer_othercrop_waterdemand4 = result.drip_summer_othercrop_waterdemand4;
                        Data11.drip_summer_othercrop_drip_waterdemand4 = result.drip_summer_othercrop_drip_waterdemand4;
                        Data11.drip_summer_othercrop_reduc_gw_demand4 = result.drip_summer_othercrop_reduc_gw_demand4;

                        Data11.drip_summer_othercrop_name5 = result.drip_summer_othercrop_name5;
                        Data11.drip_summer_othercrop_area5 = result.drip_summer_othercrop_area5;
                        Data11.drip_summer_othercrop_irri_area5 = result.drip_summer_othercrop_irri_area5;
                        Data11.drip_summer_othercrop_water_req5 = result.drip_summer_othercrop_water_req5;
                        Data11.drip_summer_othercrop_waterdemand5 = result.drip_summer_othercrop_waterdemand5;
                        Data11.drip_summer_othercrop_drip_waterdemand5 = result.drip_summer_othercrop_drip_waterdemand5;
                        Data11.drip_summer_othercrop_reduc_gw_demand5 = result.drip_summer_othercrop_reduc_gw_demand5;


                        //other crops

                        //Data11.drip_kharif_othercrop_name = result.drip_kharif_othercrop_name;
                        //Data11.drip_kharif_othercrop_area = result.drip_kharif_othercrop_area;
                        //Data11.drip_kharif_othercrop_irri_area = result.drip_kharif_othercrop_irri_area;
                        //Data11.drip_kharif_othercrop_water_req = result.drip_kharif_othercrop_water_req;
                        //Data11.drip_kharif_othercrop_waterdemand = result.drip_kharif_othercrop_waterdemand;
                        //Data11.drip_kharif_othercrop_drip_waterdemand = result.drip_kharif_othercrop_drip_waterdemand;
                        //Data11.drip_kharif_othercrop_reduc_gw_demand = result.drip_kharif_othercrop_reduc_gw_demand;

                        //Data11.drip_rabi_othercrop_name = result.drip_rabi_othercrop_name;
                        //Data11.drip_rabi_othercrop_area = result.drip_rabi_othercrop_area;
                        //Data11.drip_rabi_othercrop_irri_area = result.drip_rabi_othercrop_irri_area;
                        //Data11.drip_rabi_othercrop_water_req = result.drip_rabi_othercrop_water_req;
                        //Data11.drip_rabi_othercrop_waterdemand = result.drip_rabi_othercrop_waterdemand;
                        //Data11.drip_rabi_othercrop_drip_waterdemand = result.drip_rabi_othercrop_drip_waterdemand;
                        //Data11.drip_rabi_othercrop_reduc_gw_demand = result.drip_rabi_othercrop_reduc_gw_demand;

                        //Data11.drip_summer_othercrop_name = result.drip_summer_othercrop_name;
                        //Data11.drip_summer_othercrop_area = result.drip_summer_othercrop_area;
                        //Data11.drip_summer_othercrop_irri_area = result.drip_summer_othercrop_irri_area;
                        //Data11.drip_summer_othercrop_water_req = result.drip_summer_othercrop_water_req;
                        //Data11.drip_summer_othyercrop_waterdemand = result.drip_summer_othyercrop_waterdemand;
                        //Data11.drip_summer_othercrop_drip_waterdemand = result.drip_summer_othercrop_drip_waterdemand;
                        //Data11.drip_summer_othercrop_reduc_gw_demand = result.drip_summer_othercrop_reduc_gw_demand;

                        ABE.Entry(Data11).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        obj.statename = StateName;
                        obj.blockname = BlockName;
                        obj.districtname = DistName;
                        obj.gpname = GramName;
                        obj.userid = Convert.ToInt32(userid);




                        if (result.drip_approx_estimated_cost != null && result.drip_approx_estimated_cost != "")
                        {
                            string valid_negitive = Validation_NegitiveVal(result.drip_approx_estimated_cost);
                            if (valid_negitive == "True")
                            {
                                obj.drip_approx_estimated_cost = result.drip_approx_estimated_cost;
                            }
                            else
                            {
                                return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                            }

                        }
                        obj.drip_cost_type = result.drip_cost_type;

                        //summer horticulture
                        obj.drip_summer_horticulture_crop_area = result.drip_summer_horticulture_crop_area;
                        obj.drip_summer_horticulture_irri_area = result.drip_summer_horticulture_irri_area;
                        obj.drip_summer_horticulture_water_req = result.drip_summer_horticulture_water_req;
                        obj.drip_summer_horticulture_waterdemand = result.drip_summer_horticulture_waterdemand;
                        obj.drip_summer_horticulture_netwater_waterdemand = result.drip_summer_horticulture_netwater_waterdemand;
                        obj.drip_summer_horticulture_reduction_gw_demand = result.drip_summer_horticulture_reduction_gw_demand;


                        obj.drip_kharif_paddy_crop_area = result.drip_kharif_paddy_crop_area;
                        obj.drip_kharif_paddy_fundingsource = result.drip_kharif_paddy_fundingsource;
                        obj.drip_kharif_paddy_irri_area = result.drip_kharif_paddy_irri_area;
                        obj.drip_kharif_paddy_waterdemand = result.drip_kharif_paddy_waterdemand;
                        obj.drip_kharif_paddy_drip_waterdemand = result.drip_kharif_paddy_drip_waterdemand;
                        obj.drip_kharif_paddy_reduction_gw_demand = result.drip_kharif_paddy_reduction_gw_demand;

                        //Ragi
                        obj.drip_kharif_ragi_crop_area = result.drip_kharif_ragi_crop_area;
                        obj.drip_kharif_ragi_fundingsource = result.drip_kharif_ragi_fundingsource;
                        obj.drip_kharif_ragi_irri_area = result.drip_kharif_ragi_irri_area;
                        obj.drip_kharif_ragi_waterdemand = result.drip_kharif_ragi_waterdemand;
                        obj.drip_kharif_ragi_drip_waterdemand = result.drip_kharif_ragi_drip_waterdemand;
                        obj.drip_kharif_ragi_reduction_gw_demand = result.drip_kharif_ragi_reduction_gw_demand;

                        //groundnut
                        obj.drip_kharif_groundnut_crop_area = result.drip_kharif_groundnut_crop_area;
                        obj.drip_kharif_groundnut_fundingsource = result.drip_kharif_groundnut_fundingsource;

                        obj.drip_kharif_groundnut_irri_area = result.drip_kharif_groundnut_irri_area;
                        obj.drip_kharif_groundnut_waterdemand = result.drip_kharif_groundnut_waterdemand;
                        obj.drip_kharif_groundnut_drip_waterdemand = result.drip_kharif_groundnut_drip_waterdemand;
                        obj.drip_kharif_groundnut_reduction_gw_demand = result.drip_kharif_groundnut_reduction_gw_demand;


                        //sugarcane
                        obj.drip_kharif_sugarcane_crop_area = result.drip_kharif_sugarcane_crop_area;
                        obj.drip_kharif_sugarcane_fundingsource = result.drip_kharif_sugarcane_fundingsource;

                        obj.drip_kharif_sugarcane_irri_area = result.drip_kharif_sugarcane_irri_area;
                        obj.drip_kharif_sugarcane_waterdemand = result.drip_kharif_sugarcane_waterdemand;
                        obj.drip_kharif_sugarcane_drip_waterdemand = result.drip_kharif_sugarcane_drip_waterdemand;
                        obj.drip_kharif_sugarcane_reduction_gw_demand = result.drip_kharif_sugarcane_reduction_gw_demand;

                        //Tomoto


                        obj.drip_kharif_tomoto_crop_area = result.drip_kharif_tomoto_crop_area;
                        obj.drip_kharif_tomoto_fundingsource = result.drip_kharif_tomoto_fundingsource;

                        obj.drip_kharif_tomoto_irri_area = result.drip_kharif_tomoto_irri_area;
                        obj.drip_kharif_tomoto_waterdemand = result.drip_kharif_tomoto_waterdemand;
                        obj.drip_kharif_tomoto_drip_waterdemand = result.drip_kharif_tomoto_drip_waterdemand;
                        obj.drip_kharif_tomoto_reduction_gw_demand = result.drip_kharif_tomoto_reduction_gw_demand;

                        //Cabbage

                        //obj.drip_kharif_cabbage_crop_area = result.drip_kharif_cabbage_crop_area;
                        //obj.drip_kharif_cabbage_fundingsource = result.drip_kharif_cabbage_fundingsource;

                        //obj.drip_kharif_cabbage_irri_area = result.drip_kharif_cabbage_irri_area;
                        //obj.drip_kharif_cabbage_waterdemand = result.drip_kharif_cabbage_waterdemand;
                        //obj.drip_kharif_cabbage_drip_waterdemand = result.drip_kharif_cabbage_drip_waterdemand;
                        //obj.drip_kharif_cabbage_reduction_gw_demand = result.drip_kharif_cabbage_reduction_gw_demand;

                        //Beans

                        //obj.drip_kharif_beans_crop_area = result.drip_kharif_beans_crop_area;
                        //obj.drip_kharif_beans_fundingsource = result.drip_kharif_beans_fundingsource;

                        //obj.drip_kharif_beans_irri_area = result.drip_kharif_beans_irri_area;
                        //obj.drip_kharif_beans_waterdemand = result.drip_kharif_beans_waterdemand;
                        //obj.drip_kharif_beans_drip_waterdemand = result.drip_kharif_beans_drip_waterdemand;
                        //obj.drip_kharif_beans_reduction_gw_demand = result.drip_kharif_beans_reduction_gw_demand;

                        //floriculture
                        obj.drip_kharif_floriculture_crop_area = result.drip_kharif_floriculture_crop_area;
                        obj.drip_kharif_floriculture_fundingsource = result.drip_kharif_floriculture_fundingsource;

                        obj.drip_kharif_floriculture_irri_area = result.drip_kharif_floriculture_irri_area;
                        obj.drip_kharif_floriculture_waterdemand = result.drip_kharif_floriculture_waterdemand;
                        obj.drip_kharif_floriculture_drip_waterdemand = result.drip_kharif_floriculture_drip_waterdemand;
                        obj.drip_kharif_floriculture_reduction_gw_demand = result.drip_kharif_floriculture_reduction_gw_demand;

                        //sericulture

                        obj.drip_kharif_sericulture_crop_area = result.drip_kharif_sericulture_crop_area;
                        obj.drip_kharif_sericulture_fundingsource = result.drip_kharif_sericulture_fundingsource;

                        obj.drip_kharif_sericulture_irri_area = result.drip_kharif_sericulture_irri_area;
                        obj.drip_kharif_sericulture_waterdemand = result.drip_kharif_sericulture_waterdemand;
                        obj.drip_kharif_sericulture_drip_waterdemand = result.drip_kharif_sericulture_drip_waterdemand;
                        obj.drip_kharif_sericulture_reduction_gw_demand = result.drip_kharif_sericulture_reduction_gw_demand;

                        //Cucumber

                        //obj.drip_kharif_cucumber_crop_area = result.drip_kharif_cucumber_crop_area;
                        //obj.drip_kharif_cucumber_fundingsource = result.drip_kharif_cucumber_fundingsource;

                        //obj.drip_kharif_cucumber_irri_area = result.drip_kharif_cucumber_irri_area;
                        //obj.drip_kharif_cucumber_waterdemand = result.drip_kharif_cucumber_waterdemand;
                        //obj.drip_kharif_cucumber_drip_waterdemand = result.drip_kharif_cucumber_drip_waterdemand;
                        //obj.drip_kharif_cucumber_reduction_gw_demand = result.drip_kharif_cucumber_reduction_gw_demand;

                        //banana

                        obj.drip_kharif_banana_crop_area = result.drip_kharif_banana_crop_area;
                        obj.drip_kharif_banana_fundingsource = result.drip_kharif_banana_fundingsource;

                        obj.drip_kharif_banana_irri_area = result.drip_kharif_banana_irri_area;
                        obj.drip_kharif_banana_waterdemand = result.drip_kharif_banana_waterdemand;
                        obj.drip_kharif_banana_drip_waterdemand = result.drip_kharif_banana_drip_waterdemand;
                        obj.drip_kharif_banana_reduction_gw_demand = result.drip_kharif_banana_reduction_gw_demand;

                        //fodder

                        obj.drip_kharif_fodder_crop_area = result.drip_kharif_fodder_crop_area;
                        obj.drip_kharif_fodder_fundingsource = result.drip_kharif_fodder_fundingsource;

                        obj.drip_kharif_fodder_irri_area = result.drip_kharif_fodder_irri_area;
                        obj.drip_kharif_fodder_waterdemand = result.drip_kharif_fodder_waterdemand;
                        obj.drip_kharif_fodder_drip_waterdemand = result.drip_kharif_fodder_drip_waterdemand;
                        obj.drip_kharif_fodder_reduction_gw_demand = result.drip_kharif_fodder_reduction_gw_demand;

                        //Maize

                        obj.drip_kharif_maize_crop_area = result.drip_kharif_maize_crop_area;
                        obj.drip_kharif_maize_fundingsource = result.drip_kharif_maize_fundingsource;

                        obj.drip_kharif_maize_irri_area = result.drip_kharif_maize_irri_area;
                        obj.drip_kharif_maize_waterdemand = result.drip_kharif_maize_waterdemand;
                        obj.drip_kharif_maize_drip_waterdemand = result.drip_kharif_maize_drip_waterdemand;
                        obj.drip_kharif_maize_reduction_gw_demand = result.drip_kharif_maize_reduction_gw_demand;

                        //potato

                        //obj.drip_kharif_potato_crop_area = result.drip_kharif_potato_crop_area;
                        //obj.drip_kharif_potato_fundingsource = result.drip_kharif_potato_fundingsource;

                        //obj.drip_kharif_potato_irri_area = result.drip_kharif_potato_irri_area;
                        //obj.drip_kharif_potato_waterdemand = result.drip_kharif_potato_waterdemand;
                        //obj.drip_kharif_potato_drip_waterdemand = result.drip_kharif_potato_drip_waterdemand;
                        //obj.drip_kharif_potato_reduction_gw_demand = result.drip_kharif_potato_reduction_gw_demand;

                        //chillies

                        obj.drip_kharif_chillies_crop_area = result.drip_kharif_chillies_crop_area;
                        obj.drip_kharif_chillies_fundingsource = result.drip_kharif_chillies_fundingsource;

                        obj.drip_kharif_chillies_irri_area = result.drip_kharif_chillies_irri_area;
                        obj.drip_kharif_chillies_waterdemand = result.drip_kharif_chillies_waterdemand;
                        obj.drip_kharif_chillies_drip_waterdemand = result.drip_kharif_chillies_drip_waterdemand;
                        obj.drip_kharif_chillies_reduction_gw_demand = result.drip_kharif_chillies_reduction_gw_demand;

                        //cotton

                        obj.drip_kharif_cotton_crop_area = result.drip_kharif_cotton_crop_area;
                        obj.drip_kharif_cotton_fundingsource = result.drip_kharif_cotton_fundingsource;
                        obj.drip_kharif_cotton_irri_area = result.drip_kharif_cotton_irri_area;
                        obj.drip_kharif_cotton_waterdemand = result.drip_kharif_cotton_waterdemand;
                        obj.drip_kharif_cotton_drip_waterdemand = result.drip_kharif_cotton_drip_waterdemand;
                        obj.drip_kharif_cotton_reduction_gw_demand = result.drip_kharif_cotton_reduction_gw_demand;

                        //melon


                        obj.drip_kharif_melon_crop_area = result.drip_kharif_melon_crop_area;
                        obj.drip_kharif_melon_fundingsource = result.drip_kharif_melon_fundingsource;

                        obj.drip_kharif_melon_irri_area = result.drip_kharif_melon_irri_area;
                        obj.drip_kharif_melon_waterdemand = result.drip_kharif_melon_waterdemand;
                        obj.drip_kharif_melon_drip_waterdemand = result.drip_kharif_melon_drip_waterdemand;
                        obj.drip_kharif_melon_reduction_gw_demand = result.drip_kharif_melon_reduction_gw_demand;

                        //citrus
                        obj.drip_kharif_citrus_crop_area = result.drip_kharif_citrus_crop_area;
                        obj.drip_kharif_citrus_fundingsource = result.drip_kharif_citrus_fundingsource;

                        obj.drip_kharif_citrus_irri_area = result.drip_kharif_citrus_irri_area;
                        obj.drip_kharif_citrus_waterdemand = result.drip_kharif_citrus_waterdemand;
                        obj.drip_kharif_citrus_drip_waterdemand = result.drip_kharif_citrus_drip_waterdemand;
                        obj.drip_kharif_citrus_reduction_gw_demand = result.drip_kharif_citrus_reduction_gw_demand;

                        //peanut

                        //obj.drip_kharif_peanut_crop_area = result.drip_kharif_peanut_crop_area;
                        //obj.drip_kharif_peanut_fundingsource = result.drip_kharif_peanut_fundingsource;

                        //obj.drip_kharif_peanut_irri_area = result.drip_kharif_peanut_irri_area;
                        //obj.drip_kharif_peanut_waterdemand = result.drip_kharif_peanut_waterdemand;
                        //obj.drip_kharif_peanut_drip_waterdemand = result.drip_kharif_peanut_drip_waterdemand;
                        //obj.drip_kharif_peanut_reduction_gw_demand = result.drip_kharif_peanut_reduction_gw_demand;


                        //horticulture

                        obj.drip_kharif_horticulture_crop_area = result.drip_kharif_horticulture_crop_area;
                        obj.drip_kharif_horticulture_fundingsource = result.drip_kharif_horticulture_fundingsource;

                        obj.drip_kharif_horticulture_irri_area = result.drip_kharif_horticulture_irri_area;
                        obj.drip_kharif_horticulture_waterdemand = result.drip_kharif_horticulture_waterdemand;
                        obj.drip_kharif_horticulture_drip_waterdemand = result.drip_kharif_horticulture_drip_waterdemand;
                        obj.drip_kharif_horticulture_reduction_gw_demand = result.drip_kharif_horticulture_reduction_gw_demand;

                        //karif crops total

                        obj.drip_kharif_total_waterdemand = result.drip_kharif_total_waterdemand;
                        obj.drip_kharif_total_drip_waterdemand = result.drip_kharif_total_drip_waterdemand;
                        obj.drip_kharif_total_reduction_waterdemand = result.drip_kharif_total_reduction_waterdemand;

                        //rabi sericulture

                        obj.drip_rabi_sericulture_crop_area = result.drip_rabi_sericulture_crop_area;
                        obj.drip_rabi_sericulture_fundingsource = result.drip_rabi_sericulture_fundingsource;

                        obj.drip_rabi_sericulture_irri_area = result.drip_rabi_sericulture_irri_area;
                        obj.drip_rabi_sericulture_waterdemand = result.drip_rabi_sericulture_waterdemand;
                        obj.drip_rabi_sericulture_drip_waterdemand = result.drip_rabi_sericulture_drip_waterdemand;
                        obj.drip_rabi_sericulture_reduction_gw_demand = result.drip_rabi_sericulture_reduction_gw_demand;

                        //rabi tomoto

                        obj.drip_rabi_tomoto_crop_area = result.drip_rabi_tomoto_crop_area;
                        obj.drip_rabi_tomoto_fundingsource = result.drip_rabi_tomoto_fundingsource;

                        obj.drip_rabi_tomoto_irri_area = result.drip_rabi_tomoto_irri_area;
                        obj.drip_rabi_tomoto_waterdemand = result.drip_rabi_tomoto_waterdemand;
                        obj.drip_rabi_tomoto_drip_waterdemand = result.drip_rabi_tomoto_drip_waterdemand;
                        obj.drip_rabi_tomoto_reduction_gw_demand = result.drip_rabi_tomoto_reduction_gw_demand;

                        //rabi cabbage

                        //obj.drip_rabi_cabbage_crop_area = result.drip_rabi_cabbage_crop_area;
                        //obj.drip_rabi_cabbage_fundingsource = result.drip_rabi_cabbage_fundingsource;

                        //obj.drip_rabi_cabbage_irri_area = result.drip_rabi_cabbage_irri_area;
                        //obj.drip_rabi_cabbage_waterdemand = result.drip_rabi_cabbage_waterdemand;
                        //obj.drip_rabi_cabbage_drip_waterdemand = result.drip_rabi_cabbage_drip_waterdemand;
                        //obj.drip_rabi_cabbage_reduction_gw_demand = result.drip_rabi_cabbage_reduction_gw_demand;

                        //rabi beans

                        //obj.drip_rabi_beans_crop_area = result.drip_rabi_beans_crop_area;
                        //obj.drip_rabi_beans_fundingsource = result.drip_rabi_beans_fundingsource;

                        //obj.drip_rabi_beans_irri_area = result.drip_rabi_beans_irri_area;
                        //obj.drip_rabi_beans_waterdemand = result.drip_rabi_beans_waterdemand;
                        //obj.drip_rabi_beans_drip_waterdemand = result.drip_rabi_beans_drip_waterdemand;
                        //obj.drip_rabi_beans_reduction_gw_demand = result.drip_rabi_beans_reduction_gw_demand;

                        //rabi floriculture

                        obj.drip_rabi_floriculture_crop_area = result.drip_rabi_floriculture_crop_area;
                        obj.drip_rabi_floriculture_fundingsource = result.drip_rabi_floriculture_fundingsource;

                        obj.drip_rabi_floriculture_irri_area = result.drip_rabi_floriculture_irri_area;
                        obj.drip_rabi_floriculture_waterdemand = result.drip_rabi_floriculture_waterdemand;
                        obj.drip_rabi_floriculture_drip_waterdemand = result.drip_rabi_floriculture_drip_waterdemand;
                        obj.drip_rabi_floriculture_reduction_gw_demand = result.drip_rabi_floriculture_reduction_gw_demand;

                        //rabi potato

                        //obj.drip_rabi_potato_crop_area = result.drip_rabi_potato_crop_area;
                        //obj.drip_rabi_potato_fundingsource = result.drip_rabi_potato_fundingsource;

                        //obj.drip_rabi_potato_irri_area = result.drip_rabi_potato_irri_area;
                        //obj.drip_rabi_potato_waterdemand = result.drip_rabi_potato_waterdemand;
                        //obj.drip_rabi_potato_drip_waterdemand = result.drip_rabi_potato_drip_waterdemand;
                        //obj.drip_rabi_potato_reduction_gw_demand = result.drip_rabi_potato_reduction_gw_demand;

                        //rabi cucumber

                        //obj.drip_rabi_cucumber_crop_area = result.drip_rabi_cucumber_crop_area;
                        //obj.drip_rabi_cucumber_fundingsource = result.drip_rabi_cucumber_fundingsource;

                        //obj.drip_rabi_cucumber_irri_area = result.drip_rabi_cucumber_irri_area;
                        //obj.drip_rabi_cucumber_waterdemand = result.drip_rabi_cucumber_waterdemand;
                        //obj.drip_rabi_cucumber_drip_waterdemand = result.drip_rabi_cucumber_drip_waterdemand;
                        //obj.drip_rabi_cucumber_reduction_gw_demand = result.drip_rabi_cucumber_reduction_gw_demand;

                        //rabi ragi

                        obj.drip_rabi_ragi_crop_area = result.drip_rabi_ragi_crop_area;
                        obj.drip_rabi_ragi_fundingsource = result.drip_rabi_ragi_fundingsource;

                        obj.drip_rabi_ragi_irri_area = result.drip_rabi_ragi_irri_area;
                        obj.drip_rabi_ragi_waterdemand = result.drip_rabi_ragi_waterdemand;
                        obj.drip_rabi_ragi_drip_waterdemand = result.drip_rabi_ragi_drip_waterdemand;
                        obj.drip_rabi_ragi_reduction_gw_demand = result.drip_rabi_ragi_reduction_gw_demand;

                        //rabi sugarcane

                        obj.drip_rabi_sugarcane_crop_area = result.drip_rabi_sugarcane_crop_area;
                        obj.drip_rabi_sugarcane_fundingsource = result.drip_rabi_sugarcane_fundingsource;

                        obj.drip_rabi_sugarcane_irri_area = result.drip_rabi_sugarcane_irri_area;
                        obj.drip_rabi_sugarcane_waterdemand = result.drip_rabi_sugarcane_waterdemand;
                        obj.drip_rabi_sugarcane_drip_waterdemand = result.drip_rabi_sugarcane_drip_waterdemand;
                        obj.drip_rabi_sugarcane_reduction_gw_demand = result.drip_rabi_sugarcane_reduction_gw_demand;


                        //Rabi Maize
                        obj.drip_rabi_maize_crop_area = result.drip_rabi_maize_crop_area;
                        obj.drip_rabi_maize_fundingsource = result.drip_rabi_maize_fundingsource;

                        obj.drip_rabi_maize_irri_area = result.drip_rabi_maize_irri_area;
                        obj.drip_rabi_maize_waterdemand = result.drip_rabi_maize_waterdemand;
                        obj.drip_rabi_maize_drip_waterdemand = result.drip_rabi_maize_drip_waterdemand;
                        obj.drip_rabi_maize_reduction_gw_demand = result.drip_rabi_maize_reduction_gw_demand;

                        //rabi fodder

                        obj.drip_rabi_fodder_crop_area = result.drip_rabi_fodder_crop_area;
                        obj.drip_rabi_fodder_fundingsource = result.drip_rabi_fodder_fundingsource;

                        obj.drip_rabi_fodder_irri_area = result.drip_rabi_fodder_irri_area;
                        obj.drip_rabi_fodder_waterdemand = result.drip_rabi_fodder_waterdemand;
                        obj.drip_rabi_fodder_drip_waterdemand = result.drip_rabi_fodder_drip_waterdemand;
                        obj.drip_rabi_fodder_reduction_gw_demand = result.drip_rabi_fodder_reduction_gw_demand;

                        //rabi paddy

                        obj.drip_rabi_paddy_crop_area = result.drip_rabi_paddy_crop_area;
                        obj.drip_rabi_paddy_fundingsource = result.drip_rabi_paddy_fundingsource;

                        obj.drip_rabi_paddy_irri_area = result.drip_rabi_paddy_irri_area;
                        obj.drip_rabi_paddy_waterdemand = result.drip_rabi_paddy_waterdemand;
                        obj.drip_rabi_paddy_drip_waterdemand = result.drip_rabi_paddy_drip_waterdemand;
                        obj.drip_rabi_paddy_reduction_gw_demand = result.drip_rabi_paddy_reduction_gw_demand;

                        //rabi alfalfa

                        obj.drip_rabi_alfalfa_crop_area = result.drip_rabi_alfalfa_crop_area;
                        obj.drip_rabi_alfalfa_fundingsource = result.drip_rabi_alfalfa_fundingsource;

                        obj.drip_rabi_alfalfa_irri_area = result.drip_rabi_alfalfa_irri_area;
                        obj.drip_rabi_alfalfa_waterdemand = result.drip_rabi_alfalfa_waterdemand;
                        obj.drip_rabi_alfalfa_drip_waterdemand = result.drip_rabi_alfalfa_drip_waterdemand;
                        obj.drip_rabi_alfalfa_reduction_gw_demand = result.drip_rabi_alfalfa_reduction_gw_demand;

                        // rabi onion

                        //obj.drip_rabi_onion_crop_area = result.drip_rabi_onion_crop_area;
                        //obj.drip_rabi_onion_fundingsource = result.drip_rabi_onion_fundingsource;

                        //obj.drip_rabi_onion_irri_area = result.drip_rabi_onion_irri_area;
                        //obj.drip_rabi_onion_waterdemand = result.drip_rabi_onion_waterdemand;
                        //obj.drip_rabi_onion_drip_waterdemand = result.drip_rabi_onion_drip_waterdemand;
                        //obj.drip_rabi_onion_reduction_gw_demand = result.drip_rabi_onion_reduction_gw_demand;

                        //rabi horticulture

                        obj.drip_rabi_horticulture_crop_area = result.drip_rabi_horticulture_crop_area;
                        obj.drip_rabi_horticulture_fundingsource = result.drip_rabi_horticulture_fundingsource;

                        obj.drip_rabi_horticulture_irri_area = result.drip_rabi_horticulture_irri_area;
                        obj.drip_rabi_horticulture_waterdemand = result.drip_rabi_horticulture_waterdemand;
                        obj.drip_rabi_horticulture_drip_waterdemand = result.drip_rabi_horticulture_drip_waterdemand;
                        obj.drip_rabi_horticulture_reduction_gw_demand = result.drip_rabi_horticulture_reduction_gw_demand;

                        //rabi sunflower
                        obj.drip_rabi_sunflower_crop_area = result.drip_rabi_sunflower_crop_area;
                        obj.drip_rabi_sunflower_fundingsource = result.drip_rabi_sunflower_fundingsource;

                        obj.drip_rabi_sunflower_irri_area = result.drip_rabi_sunflower_irri_area;
                        obj.drip_rabi_sunflower_waterdemand = result.drip_rabi_sunflower_waterdemand;
                        obj.drip_rabi_sunflower_drip_waterdemand = result.drip_rabi_sunflower_drip_waterdemand;
                        obj.drip_rabi_sunflower_reduction_gw_demand = result.drip_rabi_sunflower_reduction_gw_demand;

                        //rabi crops total

                        obj.drip_rabi_total_waterdemand = result.drip_rabi_total_waterdemand;
                        obj.drip_rabi_total_rabi_waterdemand = result.drip_rabi_total_rabi_waterdemand;
                        obj.drip_rabi_total_reduction_waterdemand = result.drip_rabi_total_reduction_waterdemand;


                        //summer sericulture

                        obj.drip_summer_sericulture_crop_area = result.drip_summer_sericulture_crop_area;
                        obj.drip_summer_sericulture_fundingsource = result.drip_summer_sericulture_fundingsource;

                        obj.drip_summer_sericulture_irri_area = result.drip_summer_sericulture_irri_area;
                        obj.drip_summer_sericulture_waterdemand = result.drip_summer_sericulture_waterdemand;
                        obj.drip_summer_sericulture_drip_waterdemand = result.drip_summer_sericulture_drip_waterdemand;
                        obj.drip_summer_sericulture_reduction_gw_demand = result.drip_summer_sericulture_reduction_gw_demand;

                        //summer tomoto

                        obj.drip_summer_tomoto_crop_area = result.drip_summer_tomoto_crop_area;
                        obj.drip_summer_tomoto_fundingsource = result.drip_summer_tomoto_fundingsource;

                        obj.drip_summer_tomoto_irri_area = result.drip_summer_tomoto_irri_area;
                        obj.drip_summer_tomoto_waterdemand = result.drip_summer_tomoto_waterdemand;
                        obj.drip_summer_tomoto_drip_waterdemand = result.drip_summer_tomoto_drip_waterdemand;
                        obj.drip_summer_tomoto_reduction_gw_demand = result.drip_summer_tomoto_reduction_gw_demand;

                        //sumer cabbage

                        //obj.drip_summer_cabbage_crop_area = result.drip_summer_cabbage_crop_area;
                        //obj.drip_summer_cabbage_fundingsource = result.drip_summer_cabbage_fundingsource;

                        //obj.drip_summer_cabbage_irri_area = result.drip_summer_cabbage_irri_area;
                        //obj.drip_summer_cabbage_waterdemand = result.drip_summer_cabbage_waterdemand;
                        //obj.drip_summer_cabbage_drip_waterdemand = result.drip_summer_cabbage_drip_waterdemand;
                        //obj.drip_summer_cabbage_reduction_gw_demand = result.drip_summer_cabbage_reduction_gw_demand;

                        //summer beans

                        //obj.drip_summer_beans_crop_area = result.drip_summer_beans_crop_area;
                        //obj.drip_summer_beans_fundingsource = result.drip_summer_beans_fundingsource;

                        //obj.drip_summer_beans_irri_area = result.drip_summer_beans_irri_area;
                        //obj.drip_summer_beans_waterdemand = result.drip_summer_beans_waterdemand;
                        //obj.drip_summer_beans_drip_waterdemand = result.drip_summer_beans_drip_waterdemand;
                        //obj.drip_summer_beans_reduction_gw_demand = result.drip_summer_beans_reduction_gw_demand;

                        //summer floriculture

                        obj.drip_summer_floriculture_crop_area = result.drip_summer_floriculture_crop_area;
                        obj.drip_summer_floriculture_fundingsource = result.drip_summer_floriculture_fundingsource;

                        obj.drip_summer_floriculture_irri_area = result.drip_summer_floriculture_irri_area;
                        obj.drip_summer_floriculture_waterdemand = result.drip_summer_floriculture_waterdemand;
                        obj.drip_summer_floriculture_drip_waterdemand = result.drip_summer_floriculture_drip_waterdemand;
                        obj.drip_summer_floriculture_reduction_gw_demand = result.drip_summer_floriculture_reduction_gw_demand;

                        //summer maize
                        obj.drip_summer_maize_crop_area = result.drip_summer_maize_crop_area;
                        obj.drip_summer_maize_fundingsource = result.drip_summer_maize_fundingsource;

                        obj.drip_summer_maize_irri_area = result.drip_summer_maize_irri_area;
                        obj.drip_summer_maize_waterdemand = result.drip_summer_maize_waterdemand;
                        obj.drip_summer_maize_drip_waterdemand = result.drip_summer_maize_drip_waterdemand;
                        obj.drip_summer_maize_reduction_gw_demand = result.drip_summer_maize_drip_waterdemand;

                        //summer fodder
                        obj.drip_summer_fodder_crop_area = result.drip_summer_fodder_crop_area;
                        obj.drip_summer_fodder_fundingsource = result.drip_summer_fodder_fundingsource;

                        obj.drip_summer_fodder_irri_area = result.drip_summer_fodder_irri_area;
                        obj.drip_summer_fodder_waterdemand = result.drip_summer_fodder_waterdemand;
                        obj.drip_summer_fodder_drip_waterdemand = result.drip_summer_fodder_drip_waterdemand;
                        obj.drip_summer_fodder_reduction_gw_demand = result.drip_summer_fodder_reduction_gw_demand;

                        //summer sugarcane

                        obj.drip_summer_sugarcane_crop_area = result.drip_summer_sugarcane_crop_area;
                        obj.drip_summer_sugarcane_fundingsource = result.drip_summer_sugarcane_fundingsource;

                        obj.drip_summer_sugarcane_irri_area = result.drip_summer_sugarcane_irri_area;
                        obj.drip_summer_sugarcane_waterdemand = result.drip_summer_sugarcane_waterdemand;
                        obj.drip_summer_sugarcane_drip_waterdemand = result.drip_summer_sugarcane_drip_waterdemand;
                        obj.drip_summer_sugarcane_reduction_gw_demand = result.drip_summer_sugarcane_reduction_gw_demand;


                        //summer crops total
                        obj.drip_summer_total_waterdemand = result.drip_summer_total_waterdemand;
                        obj.drip_summer_total_summer_waterdemand = result.drip_summer_total_summer_waterdemand;
                        obj.drip_summer_total_reduction_waterdemand = result.drip_summer_total_reduction_waterdemand;
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        obj.date_time = Today1;

                        //annual total
                        obj.drip_annual_reduction_waterdemand = result.drip_annual_reduction_waterdemand;

                        //new columns water requirement
                        obj.drip_kharif_paddy_water_req = result.drip_kharif_paddy_water_req;
                        obj.drip_kharif_ragi_water_req = result.drip_kharif_ragi_water_req;
                        obj.drip_kharif_groundnut_water_req = result.drip_kharif_groundnut_water_req;
                        obj.drip_kharif_sugarcane_water_req = result.drip_kharif_sugarcane_water_req;
                        obj.drip_kharif_tomoto_water_req = result.drip_kharif_tomoto_water_req;
                        //obj.drip_kharif_cabbage_water_req = result.drip_kharif_cabbage_water_req;
                        //obj.drip_kharif_beans_water_req = result.drip_kharif_beans_water_req;
                        obj.drip_kharif_floriculture_water_req = result.drip_kharif_floriculture_water_req;
                        obj.drip_kharif_sericulture_water_req = result.drip_kharif_sericulture_water_req;
                        //obj.drip_kharif_cucumber_water_req = result.drip_kharif_cucumber_water_req;
                        obj.drip_kharif_banana_water_req = result.drip_kharif_banana_water_req;
                        obj.drip_kharif_fodder_water_req = result.drip_kharif_fodder_water_req;
                        obj.drip_kharif_maize_water_req = result.drip_kharif_maize_water_req;
                        //obj.drip_kharif_potato_water_req = result.drip_kharif_potato_water_req;
                        obj.drip_kharif_chillies_water_req = result.drip_kharif_chillies_water_req;
                        obj.drip_kharif_cotton_water_req = result.drip_kharif_cotton_water_req;
                        obj.drip_kharif_melon_water_req = result.drip_kharif_melon_water_req;
                        obj.drip_kharif_citrus_water_req = result.drip_kharif_citrus_water_req;
                        //obj.drip_kharif_peanut_water_req = result.drip_kharif_peanut_water_req;
                        obj.drip_kharif_horticulture_water_req = result.drip_kharif_horticulture_water_req;
                        obj.drip_summer_sugarcane_irri_area = result.drip_summer_sugarcane_irri_area;

                        obj.drip_rabi_sericulture_water_req = result.drip_rabi_sericulture_water_req;
                        obj.drip_rabi_tomoto_water_req = result.drip_rabi_tomoto_water_req;
                        //obj.drip_rabi_cabbage_water_req = result.drip_rabi_cabbage_water_req;
                        //obj.drip_rabi_beans_water_req = result.drip_rabi_beans_water_req;
                        obj.drip_rabi_floriculture_water_req = result.drip_rabi_floriculture_water_req;
                        //obj.drip_rabi_potato_water_req = result.drip_rabi_potato_water_req;
                        //obj.drip_rabi_cucumber_water_req = result.drip_rabi_cucumber_water_req;
                        obj.drip_rabi_ragi_water_req = result.drip_rabi_ragi_water_req;
                        obj.drip_rabi_sugarcane_water_req = result.drip_rabi_sugarcane_water_req;
                        obj.drip_rabi_maize_water_req = result.drip_rabi_maize_water_req;
                        obj.drip_rabi_fodder_water_req = result.drip_rabi_fodder_water_req;
                        obj.drip_rabi_paddy_water_req = result.drip_rabi_paddy_water_req;
                        // obj.drip_rabi_alfalfa_water_req = result.drip_rabi_alfalfa_water_req;
                        obj.drip_rabi_onion_water_req = result.drip_rabi_onion_water_req;
                        obj.drip_rabi_horticulture_water_req = result.drip_rabi_horticulture_water_req;
                        obj.drip_rabi_sunflower_water_req = result.drip_rabi_sunflower_water_req;

                        obj.drip_summer_sericulture_water_req = result.drip_summer_sericulture_water_req;
                        obj.drip_summer_tomoto_water_req = result.drip_summer_tomoto_water_req;
                        // obj.drip_summer_cabbage_water_req = result.drip_summer_cabbage_water_req;
                        // obj.drip_summer_beans_water_req = result.drip_summer_beans_water_req;
                        obj.drip_summer_floriculture_water_req = result.drip_summer_floriculture_water_req;
                        obj.drip_summer_maize_water_req = result.drip_summer_maize_water_req;
                        obj.drip_summer_fodder_water_req = result.drip_summer_fodder_water_req;
                        obj.drip_summer_sugarcane_water_req = result.drip_summer_sugarcane_water_req;
                        obj.drip_other_funding_source = result.drip_other_funding_source;

                        //add crop

                        obj.drip_kharif_othercrop_name1 = result.drip_kharif_othercrop_name1;
                        obj.drip_kharif_othercrop_area1 = result.drip_kharif_othercrop_area1;
                        obj.drip_kharif_othercrop_irri_area1 = result.drip_kharif_othercrop_irri_area1;
                        obj.drip_kharif_othercrop_water_req1 = result.drip_kharif_othercrop_water_req1;
                        obj.drip_kharif_othercrop_waterdemand1 = result.drip_kharif_othercrop_waterdemand1;
                        obj.drip_kharif_othercrop_drip_waterdemand1 = result.drip_kharif_othercrop_drip_waterdemand1;
                        obj.drip_kharif_othercrop_reduc_gw_demand1 = result.drip_kharif_othercrop_reduc_gw_demand1;

                        obj.drip_kharif_othercrop_name2 = result.drip_kharif_othercrop_name2;
                        obj.drip_kharif_othercrop_area2 = result.drip_kharif_othercrop_area2;
                        obj.drip_kharif_othercrop_irri_area2 = result.drip_kharif_othercrop_irri_area2;
                        obj.drip_kharif_othercrop_water_req2 = result.drip_kharif_othercrop_water_req2;
                        obj.drip_kharif_othercrop_waterdemand2 = result.drip_kharif_othercrop_waterdemand2;
                        obj.drip_kharif_othercrop_drip_waterdemand2 = result.drip_kharif_othercrop_drip_waterdemand2;
                        obj.drip_kharif_othercrop_reduc_gw_demand2 = result.drip_kharif_othercrop_reduc_gw_demand2;

                        obj.drip_kharif_othercrop_name3 = result.drip_kharif_othercrop_name3;
                        obj.drip_kharif_othercrop_area3 = result.drip_kharif_othercrop_area3;
                        obj.drip_kharif_othercrop_irri_area3 = result.drip_kharif_othercrop_irri_area3;
                        obj.drip_kharif_othercrop_water_req3 = result.drip_kharif_othercrop_water_req3;
                        obj.drip_kharif_othercrop_waterdemand3 = result.drip_kharif_othercrop_waterdemand3;
                        obj.drip_kharif_othercrop_drip_waterdemand3 = result.drip_kharif_othercrop_drip_waterdemand3;
                        obj.drip_kharif_othercrop_reduc_gw_demand3 = result.drip_kharif_othercrop_reduc_gw_demand3;

                        obj.drip_kharif_othercrop_name4 = result.drip_kharif_othercrop_name4;
                        obj.drip_kharif_othercrop_area4 = result.drip_kharif_othercrop_area4;
                        obj.drip_kharif_othercrop_irri_area4 = result.drip_kharif_othercrop_irri_area4;
                        obj.drip_kharif_othercrop_water_req4 = result.drip_kharif_othercrop_water_req4;
                        obj.drip_kharif_othercrop_waterdemand4 = result.drip_kharif_othercrop_waterdemand4;
                        obj.drip_kharif_othercrop_drip_waterdemand4 = result.drip_kharif_othercrop_drip_waterdemand4;
                        obj.drip_kharif_othercrop_reduc_gw_demand4 = result.drip_kharif_othercrop_reduc_gw_demand4;

                        obj.drip_kharif_othercrop_name5 = result.drip_kharif_othercrop_name5;
                        obj.drip_kharif_othercrop_area5 = result.drip_kharif_othercrop_area5;
                        obj.drip_kharif_othercrop_irri_area5 = result.drip_kharif_othercrop_irri_area5;
                        obj.drip_kharif_othercrop_water_req5 = result.drip_kharif_othercrop_water_req5;
                        obj.drip_kharif_othercrop_waterdemand5 = result.drip_kharif_othercrop_waterdemand5;
                        obj.drip_kharif_othercrop_drip_waterdemand5 = result.drip_kharif_othercrop_drip_waterdemand5;
                        obj.drip_kharif_othercrop_reduc_gw_demand5 = result.drip_kharif_othercrop_reduc_gw_demand5;

                        //summer rabi
                        obj.drip_rabi_othercrop_name1 = result.drip_rabi_othercrop_name1;
                        obj.drip_rabi_othercrop_area1 = result.drip_rabi_othercrop_area1;
                        obj.drip_rabi_othercrop_irri_area1 = result.drip_rabi_othercrop_irri_area1;
                        obj.drip_rabi_othercrop_water_req1 = result.drip_rabi_othercrop_water_req1;
                        obj.drip_rabi_othercrop_waterdemand1 = result.drip_rabi_othercrop_waterdemand1;
                        obj.drip_rabi_othercrop_drip_waterdemand1 = result.drip_rabi_othercrop_drip_waterdemand1;
                        obj.drip_rabi_othercrop_reduc_gw_demand1 = result.drip_rabi_othercrop_reduc_gw_demand1;

                        obj.drip_rabi_othercrop_name2 = result.drip_rabi_othercrop_name2;
                        obj.drip_rabi_othercrop_area2 = result.drip_rabi_othercrop_area2;
                        obj.drip_rabi_othercrop_irri_area2 = result.drip_rabi_othercrop_irri_area2;
                        obj.drip_rabi_othercrop_water_req2 = result.drip_rabi_othercrop_water_req2;
                        obj.drip_rabi_othercrop_waterdemand2 = result.drip_rabi_othercrop_waterdemand2;
                        obj.drip_rabi_othercrop_drip_waterdemand2 = result.drip_rabi_othercrop_drip_waterdemand2;
                        obj.drip_rabi_othercrop_reduc_gw_demand2 = result.drip_rabi_othercrop_reduc_gw_demand2;

                        obj.drip_rabi_othercrop_name3 = result.drip_rabi_othercrop_name3;
                        obj.drip_rabi_othercrop_area3 = result.drip_rabi_othercrop_area3;
                        obj.drip_rabi_othercrop_irri_area3 = result.drip_rabi_othercrop_irri_area3;
                        obj.drip_rabi_othercrop_water_req3 = result.drip_rabi_othercrop_water_req3;
                        obj.drip_rabi_othercrop_waterdemand3 = result.drip_rabi_othercrop_waterdemand3;
                        obj.drip_rabi_othercrop_drip_waterdemand3 = result.drip_rabi_othercrop_drip_waterdemand3;
                        obj.drip_rabi_othercrop_reduc_gw_demand3 = result.drip_rabi_othercrop_reduc_gw_demand3;

                        obj.drip_rabi_othercrop_name4 = result.drip_rabi_othercrop_name4;
                        obj.drip_rabi_othercrop_area4 = result.drip_rabi_othercrop_area4;
                        obj.drip_rabi_othercrop_irri_area4 = result.drip_rabi_othercrop_irri_area4;
                        obj.drip_rabi_othercrop_water_req4 = result.drip_rabi_othercrop_water_req4;
                        obj.drip_rabi_othercrop_waterdemand4 = result.drip_rabi_othercrop_waterdemand4;
                        obj.drip_rabi_othercrop_drip_waterdemand4 = result.drip_rabi_othercrop_drip_waterdemand4;
                        obj.drip_rabi_othercrop_reduc_gw_demand4 = result.drip_rabi_othercrop_reduc_gw_demand4;

                        obj.drip_rabi_othercrop_name5 = result.drip_rabi_othercrop_name5;
                        obj.drip_rabi_othercrop_area5 = result.drip_rabi_othercrop_area5;
                        obj.drip_rabi_othercrop_irri_area5 = result.drip_rabi_othercrop_irri_area5;
                        obj.drip_rabi_othercrop_water_req5 = result.drip_rabi_othercrop_water_req5;
                        obj.drip_rabi_othercrop_waterdemand5 = result.drip_rabi_othercrop_waterdemand5;
                        obj.drip_rabi_othercrop_drip_waterdemand5 = result.drip_rabi_othercrop_drip_waterdemand5;
                        obj.drip_rabi_othercrop_reduc_gw_demand5 = result.drip_rabi_othercrop_reduc_gw_demand5;

                        //summer
                        obj.drip_summer_othercrop_name1 = result.drip_summer_othercrop_name1;
                        obj.drip_summer_othercrop_area1 = result.drip_summer_othercrop_area1;
                        obj.drip_summer_othercrop_irri_area1 = result.drip_summer_othercrop_irri_area1;
                        obj.drip_summer_othercrop_water_req1 = result.drip_summer_othercrop_water_req1;
                        obj.drip_summer_othercrop_waterdemand1 = result.drip_summer_othercrop_waterdemand1;
                        obj.drip_summer_othercrop_drip_waterdemand1 = result.drip_summer_othercrop_drip_waterdemand1;
                        obj.drip_summer_othercrop_reduc_gw_demand1 = result.drip_summer_othercrop_reduc_gw_demand1;

                        obj.drip_summer_othercrop_name2 = result.drip_summer_othercrop_name2;
                        obj.drip_summer_othercrop_area2 = result.drip_summer_othercrop_area2;
                        obj.drip_summer_othercrop_irri_area2 = result.drip_summer_othercrop_irri_area2;
                        obj.drip_summer_othercrop_water_req2 = result.drip_summer_othercrop_water_req2;
                        obj.drip_summer_othercrop_waterdemand2 = result.drip_summer_othercrop_waterdemand2;
                        obj.drip_summer_othercrop_drip_waterdemand2 = result.drip_summer_othercrop_drip_waterdemand2;
                        obj.drip_summer_othercrop_reduc_gw_demand2 = result.drip_summer_othercrop_reduc_gw_demand2;

                        obj.drip_summer_othercrop_name3 = result.drip_summer_othercrop_name3;
                        obj.drip_summer_othercrop_area3 = result.drip_summer_othercrop_area3;
                        obj.drip_summer_othercrop_irri_area3 = result.drip_summer_othercrop_irri_area3;
                        obj.drip_summer_othercrop_water_req3 = result.drip_summer_othercrop_water_req3;
                        obj.drip_summer_othercrop_waterdemand3 = result.drip_summer_othercrop_waterdemand3;
                        obj.drip_summer_othercrop_drip_waterdemand3 = result.drip_summer_othercrop_drip_waterdemand3;
                        obj.drip_summer_othercrop_reduc_gw_demand3 = result.drip_summer_othercrop_reduc_gw_demand3;

                        obj.drip_summer_othercrop_name4 = result.drip_summer_othercrop_name4;
                        obj.drip_summer_othercrop_area4 = result.drip_summer_othercrop_area4;
                        obj.drip_summer_othercrop_irri_area4 = result.drip_summer_othercrop_irri_area4;
                        obj.drip_summer_othercrop_water_req4 = result.drip_summer_othercrop_water_req4;
                        obj.drip_summer_othercrop_waterdemand4 = result.drip_summer_othercrop_waterdemand4;
                        obj.drip_summer_othercrop_drip_waterdemand4 = result.drip_summer_othercrop_drip_waterdemand4;
                        obj.drip_summer_othercrop_reduc_gw_demand4 = result.drip_summer_othercrop_reduc_gw_demand4;

                        obj.drip_summer_othercrop_name5 = result.drip_summer_othercrop_name5;
                        obj.drip_summer_othercrop_area5 = result.drip_summer_othercrop_area5;
                        obj.drip_summer_othercrop_irri_area5 = result.drip_summer_othercrop_irri_area5;
                        obj.drip_summer_othercrop_water_req5 = result.drip_summer_othercrop_water_req5;
                        obj.drip_summer_othercrop_waterdemand5 = result.drip_summer_othercrop_waterdemand5;
                        obj.drip_summer_othercrop_drip_waterdemand5 = result.drip_summer_othercrop_drip_waterdemand5;
                        obj.drip_summer_othercrop_reduc_gw_demand5 = result.drip_summer_othercrop_reduc_gw_demand5;
                        //other crops

                        //obj.drip_kharif_othercrop_name = result.drip_kharif_othercrop_name;
                        //obj.drip_kharif_othercrop_area = result.drip_kharif_othercrop_area;
                        //obj.drip_kharif_othercrop_irri_area = result.drip_kharif_othercrop_irri_area;
                        //obj.drip_kharif_othercrop_water_req = result.drip_kharif_othercrop_water_req;
                        //obj.drip_kharif_othercrop_waterdemand = result.drip_kharif_othercrop_waterdemand;
                        //obj.drip_kharif_othercrop_drip_waterdemand = result.drip_kharif_othercrop_drip_waterdemand;
                        //obj.drip_kharif_othercrop_reduc_gw_demand = result.drip_kharif_othercrop_reduc_gw_demand;

                        //obj.drip_rabi_othercrop_name = result.drip_rabi_othercrop_name;
                        //obj.drip_rabi_othercrop_area = result.drip_rabi_othercrop_area;
                        //obj.drip_rabi_othercrop_irri_area = result.drip_rabi_othercrop_irri_area;
                        //obj.drip_rabi_othercrop_water_req = result.drip_rabi_othercrop_water_req;
                        //obj.drip_rabi_othercrop_waterdemand = result.drip_rabi_othercrop_waterdemand;
                        //obj.drip_rabi_othercrop_drip_waterdemand = result.drip_rabi_othercrop_drip_waterdemand;
                        //obj.drip_rabi_othercrop_reduc_gw_demand = result.drip_rabi_othercrop_reduc_gw_demand;

                        //obj.drip_summer_othercrop_name = result.drip_summer_othercrop_name;
                        //obj.drip_summer_othercrop_area = result.drip_summer_othercrop_area;
                        //obj.drip_summer_othercrop_irri_area = result.drip_summer_othercrop_irri_area;
                        //obj.drip_summer_othercrop_water_req = result.drip_summer_othercrop_water_req;
                        //obj.drip_summer_othyercrop_waterdemand = result.drip_summer_othyercrop_waterdemand;
                        //obj.drip_summer_othercrop_drip_waterdemand = result.drip_summer_othercrop_drip_waterdemand;
                        //obj.drip_summer_othercrop_reduc_gw_demand = result.drip_summer_othercrop_reduc_gw_demand;

                        ABE.obj_drip_saveddata.Add(obj);
                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json(ex);
                }
            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }


        public ActionResult PipelineSavedData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_demandside_pipelies_saveddata>(Data);
                    var obj = new abhy_demandside_pipelies_saveddata();

                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Details = ABE.obj_pipeline.Where(x => x.statename == StateName && x.districtname == DistName && x.blockname == BlockName && x.gpname == GramName).ToList();
                    if (Details.Count != 0)
                    {
                        var Data11 = Details.LastOrDefault();
                        Data11.statename = StateName;
                        Data11.blockname = BlockName;
                        Data11.districtname = DistName;
                        Data11.gpname = GramName;
                        Data11.userid = Convert.ToInt32(userid);
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        Data11.date_time = Today1;
                        Data11.pipeline_kharif_paddy_crop_area = result.pipeline_kharif_paddy_crop_area;
                        Data11.pipeline_kharif_paddy_fundingsource = result.pipeline_kharif_paddy_fundingsource;
                        Data11.pipeline_kharif_paddy_irri_area = result.pipeline_kharif_paddy_irri_area;
                        Data11.pipeline_kharif_paddy_waterdemand = result.pipeline_kharif_paddy_waterdemand;
                        Data11.pipeline_kharif_paddy_pipeline_waterdemand = result.pipeline_kharif_paddy_pipeline_waterdemand;
                        Data11.pipeline_kharif_paddy_reduction_water_demand = result.pipeline_kharif_paddy_reduction_water_demand;

                        //Ragi
                        Data11.pipeline_kharif_ragi_crop_area = result.pipeline_kharif_ragi_crop_area;
                        Data11.pipeline_kharif_ragi_fundingsource = result.pipeline_kharif_ragi_fundingsource;
                        Data11.pipeline_kharif_ragi_irri_area = result.pipeline_kharif_ragi_irri_area;
                        Data11.pipeline_kharif_ragi_waterdemand = result.pipeline_kharif_ragi_waterdemand;
                        Data11.pipeline_kharif_ragi_pipeline_waterdemand = result.pipeline_kharif_ragi_pipeline_waterdemand;
                        Data11.pipeline_kharif_ragi_reduction_water_demand = result.pipeline_kharif_ragi_reduction_water_demand;

                        //groundnut
                        Data11.pipeline_kharif_groundnut_crop_area = result.pipeline_kharif_groundnut_crop_area;
                        Data11.pipeline_kharif_groundnut_fundingsource = result.pipeline_kharif_groundnut_fundingsource;

                        Data11.pipeline_kharif_groundnut_irri_area = result.pipeline_kharif_groundnut_irri_area;
                        Data11.pipeline_kharif_groundnut_waterdemand = result.pipeline_kharif_groundnut_waterdemand;
                        Data11.pipeline_kharif_groundnut_pipeline_waterdemand = result.pipeline_kharif_groundnut_pipeline_waterdemand;
                        Data11.pipeline_kharif_groundnut_reduction_water_demand = result.pipeline_kharif_groundnut_reduction_water_demand;


                        //sugarcane
                        Data11.pipeline_kharif_sugarcane_crop_area = result.pipeline_kharif_sugarcane_crop_area;
                        Data11.pipeline_kharif_sugarcane_fundingsource = result.pipeline_kharif_sugarcane_fundingsource;

                        Data11.pipeline_kharif_sugarcane_irri_area = result.pipeline_kharif_sugarcane_irri_area;
                        Data11.pipeline_kharif_sugarcane_waterdemand = result.pipeline_kharif_sugarcane_waterdemand;
                        Data11.pipeline_kharif_sugarcane_pipeline_waterdemand = result.pipeline_kharif_sugarcane_pipeline_waterdemand;
                        Data11.pipeline_kharif_sugarcane_reduction_water_demand = result.pipeline_kharif_sugarcane_reduction_water_demand;

                        //Tomoto


                        Data11.pipeline_kharif_tomoto_crop_area = result.pipeline_kharif_tomoto_crop_area;
                        Data11.pipeline_kharif_tomoto_fundingsource = result.pipeline_kharif_tomoto_fundingsource;

                        Data11.pipeline_kharif_tomoto_irri_area = result.pipeline_kharif_tomoto_irri_area;
                        Data11.pipeline_kharif_tomoto_waterdemand = result.pipeline_kharif_tomoto_waterdemand;
                        Data11.pipeline_kharif_tomoto_pipeline_waterdemand = result.pipeline_kharif_tomoto_pipeline_waterdemand;
                        Data11.pipeline_kharif_tomoto_reduction_water_demand = result.pipeline_kharif_tomoto_reduction_water_demand;

                        //Cabbage

                        //Data11.pipeline_kharif_cabbage_crop_area = result.pipeline_kharif_cabbage_crop_area;
                        //Data11.pipeline_kharif_cabbage_fundingsource = result.pipeline_kharif_cabbage_fundingsource;

                        //Data11.pipeline_kharif_cabbage_irri_area = result.pipeline_kharif_cabbage_irri_area;
                        //Data11.pipeline_kharif_cabbage_waterdemand = result.pipeline_kharif_cabbage_waterdemand;
                        //Data11.pipeline_kharif_cabbage_pipeline_waterdemand = result.pipeline_kharif_cabbage_pipeline_waterdemand;
                        //Data11.pipeline_kharif_cabbage_reduction_water_demand = result.pipeline_kharif_cabbage_reduction_water_demand;

                        //Beans

                        //Data11.pipeline_kharif_beans_crop_area = result.pipeline_kharif_beans_crop_area;
                        //Data11.pipeline_kharif_beans_fundingsource = result.pipeline_kharif_beans_fundingsource;

                        //Data11.pipeline_kharif_beans_irri_area = result.pipeline_kharif_beans_irri_area;
                        //Data11.pipeline_kharif_beans_waterdemand = result.pipeline_kharif_beans_waterdemand;
                        //Data11.pipeline_kharif_beans_pipeline_waterdemand = result.pipeline_kharif_beans_pipeline_waterdemand;
                        //Data11.pipeline_kharif_beans_reduction_water_demand = result.pipeline_kharif_beans_reduction_water_demand;

                        //floriculture
                        Data11.pipeline_kharif_floriculture_crop_area = result.pipeline_kharif_floriculture_crop_area;
                        Data11.pipeline_kharif_floriculture_fundingsource = result.pipeline_kharif_floriculture_fundingsource;

                        Data11.pipeline_kharif_floriculture_irri_area = result.pipeline_kharif_floriculture_irri_area;
                        Data11.pipeline_kharif_floriculture_waterdemand = result.pipeline_kharif_floriculture_waterdemand;
                        Data11.pipeline_kharif_floriculture_pipeline_waterdemand = result.pipeline_kharif_floriculture_pipeline_waterdemand;
                        Data11.pipeline_kharif_floriculture_reduction_water_demand = result.pipeline_kharif_floriculture_reduction_water_demand;

                        //sericulture

                        Data11.pipeline_kharif_sericulture_crop_area = result.pipeline_kharif_sericulture_crop_area;
                        Data11.pipeline_kharif_sericulture_fundingsource = result.pipeline_kharif_sericulture_fundingsource;

                        Data11.pipeline_kharif_sericulture_irri_area = result.pipeline_kharif_sericulture_irri_area;
                        Data11.pipeline_kharif_sericulture_waterdemand = result.pipeline_kharif_sericulture_waterdemand;
                        Data11.pipeline_kharif_sericulture_pipeline_waterdemand = result.pipeline_kharif_sericulture_pipeline_waterdemand;
                        Data11.pipeline_kharif_sericulture_reduction_water_demand = result.pipeline_kharif_sericulture_reduction_water_demand;

                        //Cucumber

                        //Data11.pipeline_kharif_cucumber_crop_area = result.pipeline_kharif_cucumber_crop_area;
                        //Data11.pipeline_kharif_cucumber_fundingsource = result.pipeline_kharif_cucumber_fundingsource;

                        //Data11.pipeline_kharif_cucumber_irri_area = result.pipeline_kharif_cucumber_irri_area;
                        //Data11.pipeline_kharif_cucumber_waterdemand = result.pipeline_kharif_cucumber_waterdemand;
                        //Data11.pipeline_kharif_cucumber_pipeline_waterdemand = result.pipeline_kharif_cucumber_pipeline_waterdemand;
                        //Data11.pipeline_kharif_cucumber_reduction_water_demand = result.pipeline_kharif_cucumber_reduction_water_demand;

                        //banana

                        Data11.pipeline_kharif_banana_crop_area = result.pipeline_kharif_banana_crop_area;
                        Data11.pipeline_kharif_banana_fundingsource = result.pipeline_kharif_banana_fundingsource;

                        Data11.pipeline_kharif_banana_irri_area = result.pipeline_kharif_banana_irri_area;
                        Data11.pipeline_kharif_banana_waterdemand = result.pipeline_kharif_banana_waterdemand;
                        Data11.pipeline_kharif_banana_pipeline_waterdemand = result.pipeline_kharif_banana_pipeline_waterdemand;
                        Data11.pipeline_kharif_banana_reduction_water_demand = result.pipeline_kharif_banana_reduction_water_demand;

                        //fodder

                        Data11.pipeline_kharif_fodder_crop_area = result.pipeline_kharif_fodder_crop_area;
                        Data11.pipeline_kharif_fodder_fundingsource = result.pipeline_kharif_fodder_fundingsource;

                        Data11.pipeline_kharif_fodder_irri_area = result.pipeline_kharif_fodder_irri_area;
                        Data11.pipeline_kharif_fodder_waterdemand = result.pipeline_kharif_fodder_waterdemand;
                        Data11.pipeline_kharif_fodder_pipeline_waterdemand = result.pipeline_kharif_fodder_pipeline_waterdemand;
                        Data11.pipeline_kharif_fodder_reduction_water_demand = result.pipeline_kharif_fodder_reduction_water_demand;

                        //Maize

                        Data11.pipeline_kharif_maize_crop_area = result.pipeline_kharif_maize_crop_area;
                        Data11.pipeline_kharif_maize_fundingsource = result.pipeline_kharif_maize_fundingsource;

                        Data11.pipeline_kharif_maize_irri_area = result.pipeline_kharif_maize_irri_area;
                        Data11.pipeline_kharif_maize_waterdemand = result.pipeline_kharif_maize_waterdemand;
                        Data11.pipeline_kharif_maize_pipeline_waterdemand = result.pipeline_kharif_maize_pipeline_waterdemand;
                        Data11.pipeline_kharif_maize_reduction_water_demand = result.pipeline_kharif_maize_reduction_water_demand;

                        //potato

                        //Data11.pipeline_kharif_potato_crop_area = result.pipeline_kharif_potato_crop_area;
                        //Data11.pipeline_kharif_potato_fundingsource = result.pipeline_kharif_potato_fundingsource;

                        //Data11.pipeline_kharif_potato_irri_area = result.pipeline_kharif_potato_irri_area;
                        //Data11.pipeline_kharif_potato_waterdemand = result.pipeline_kharif_potato_waterdemand;
                        //Data11.pipeline_kharif_potato_pipeline_waterdemand = result.pipeline_kharif_potato_pipeline_waterdemand;
                        //Data11.pipeline_kharif_potato_reduction_water_demand = result.pipeline_kharif_potato_reduction_water_demand;

                        //chillies

                        Data11.pipeline_kharif_chillies_crop_area = result.pipeline_kharif_chillies_crop_area;
                        Data11.pipeline_kharif_chillies_fundingsource = result.pipeline_kharif_chillies_fundingsource;

                        Data11.pipeline_kharif_chillies_irri_area = result.pipeline_kharif_chillies_irri_area;
                        Data11.pipeline_kharif_chillies_waterdemand = result.pipeline_kharif_chillies_waterdemand;
                        Data11.pipeline_kharif_chillies_pipeline_waterdemand = result.pipeline_kharif_chillies_pipeline_waterdemand;
                        Data11.pipeline_kharif_chillies_reduction_water_demand = result.pipeline_kharif_chillies_reduction_water_demand;

                        //cotton

                        Data11.pipeline_kharif_cotton_crop_area = result.pipeline_kharif_cotton_crop_area;
                        Data11.pipeline_kharif_cotton_fundingsource = result.pipeline_kharif_cotton_fundingsource;
                        Data11.pipeline_kharif_cotton_irri_area = result.pipeline_kharif_cotton_irri_area;
                        Data11.pipeline_kharif_cotton_waterdemand = result.pipeline_kharif_cotton_waterdemand;
                        Data11.pipeline_kharif_cotton_pipeline_waterdemand = result.pipeline_kharif_cotton_pipeline_waterdemand;
                        Data11.pipeline_kharif_cotton_reduction_water_demand = result.pipeline_kharif_cotton_reduction_water_demand;

                        //melon


                        Data11.pipeline_kharif_melon_crop_area = result.pipeline_kharif_melon_crop_area;
                        Data11.pipeline_kharif_melon_fundingsource = result.pipeline_kharif_melon_fundingsource;

                        Data11.pipeline_kharif_melon_irri_area = result.pipeline_kharif_melon_irri_area;
                        Data11.pipeline_kharif_melon_waterdemand = result.pipeline_kharif_melon_waterdemand;
                        Data11.pipeline_kharif_melon_pipeline_waterdemand = result.pipeline_kharif_melon_pipeline_waterdemand;
                        Data11.pipeline_kharif_melon_reduction_water_demand = result.pipeline_kharif_melon_reduction_water_demand;

                        //citrus
                        Data11.pipeline_kharif_citrus_crop_area = result.pipeline_kharif_citrus_crop_area;
                        Data11.pipeline_kharif_citrus_fundingsource = result.pipeline_kharif_citrus_fundingsource;

                        Data11.pipeline_kharif_citrus_irri_area = result.pipeline_kharif_citrus_irri_area;
                        Data11.pipeline_kharif_citrus_waterdemand = result.pipeline_kharif_citrus_waterdemand;
                        Data11.pipeline_kharif_citrus_pipeline_waterdemand = result.pipeline_kharif_citrus_pipeline_waterdemand;
                        Data11.pipeline_kharif_citrus_reduction_water_demand = result.pipeline_kharif_citrus_reduction_water_demand;

                        //peanut

                        //Data11.pipeline_kharif_peanut_crop_area = result.pipeline_kharif_peanut_crop_area;
                        //Data11.pipeline_kharif_peanut_fundingsource = result.pipeline_kharif_peanut_fundingsource;

                        //Data11.pipeline_kharif_peanut_irri_area = result.pipeline_kharif_peanut_irri_area;
                        //Data11.pipeline_kharif_peanut_waterdemand = result.pipeline_kharif_peanut_waterdemand;
                        //Data11.pipeline_kharif_peanut_pipeline_waterdemand = result.pipeline_kharif_peanut_pipeline_waterdemand;
                        //Data11.pipeline_kharif_peanut_reduction_water_demand = result.pipeline_kharif_peanut_reduction_water_demand;


                        //horticulture

                        Data11.pipeline_kharif_horticulture_crop_area = result.pipeline_kharif_horticulture_crop_area;
                        Data11.pipeline_kharif_horticulture_fundingsource = result.pipeline_kharif_horticulture_fundingsource;

                        Data11.pipeline_kharif_horticulture_irri_area = result.pipeline_kharif_horticulture_irri_area;
                        Data11.pipeline_kharif_horticulture_waterdemand = result.pipeline_kharif_horticulture_waterdemand;
                        Data11.pipeline_kharif_horticulture_pipeline_waterdemand = result.pipeline_kharif_horticulture_pipeline_waterdemand;
                        Data11.pipeline_kharif_horticulture_reduction_water_demand = result.pipeline_kharif_horticulture_reduction_water_demand;

                        //karif crops total

                        Data11.pipeline_kharif_total_waterdemand = result.pipeline_kharif_total_waterdemand;
                        Data11.pipeline_kharif_total_pipeline_waterdemand = result.pipeline_kharif_total_pipeline_waterdemand;
                        Data11.pipeline_kharif_total_reduction_waterdemand = result.pipeline_kharif_total_reduction_waterdemand;

                        //rabi sericulture

                        Data11.pipeline_rabi_sericulture_crop_area = result.pipeline_rabi_sericulture_crop_area;
                        Data11.pipeline_rabi_sericulture_fundingsource = result.pipeline_rabi_sericulture_fundingsource;

                        Data11.pipeline_rabi_sericulture_irri_area = result.pipeline_rabi_sericulture_irri_area;
                        Data11.pipeline_rabi_sericulture_waterdemand = result.pipeline_rabi_sericulture_waterdemand;
                        Data11.pipeline_rabi_sericulture_pipeline_waterdemand = result.pipeline_rabi_sericulture_pipeline_waterdemand;
                        Data11.pipeline_rabi_sericulture_reduction_water_demand = result.pipeline_rabi_sericulture_reduction_water_demand;

                        //rabi tomoto

                        Data11.pipeline_rabi_tomoto_crop_area = result.pipeline_rabi_tomoto_crop_area;
                        Data11.pipeline_rabi_tomoto_fundingsource = result.pipeline_rabi_tomoto_fundingsource;

                        Data11.pipeline_rabi_tomoto_irri_area = result.pipeline_rabi_tomoto_irri_area;
                        Data11.pipeline_rabi_tomoto_waterdemand = result.pipeline_rabi_tomoto_waterdemand;
                        Data11.pipeline_rabi_tomoto_pipeline_waterdemand = result.pipeline_rabi_tomoto_pipeline_waterdemand;
                        Data11.pipeline_rabi_tomoto_reduction_water_demand = result.pipeline_rabi_tomoto_reduction_water_demand;

                        //rabi cabbage

                        //Data11.pipeline_rabi_cabbage_crop_area = result.pipeline_rabi_cabbage_crop_area;
                        //Data11.pipeline_rabi_cabbage_fundingsource = result.pipeline_rabi_cabbage_fundingsource;

                        //Data11.pipeline_rabi_cabbage_irri_area = result.pipeline_rabi_cabbage_irri_area;
                        //Data11.pipeline_rabi_cabbage_waterdemand = result.pipeline_rabi_cabbage_waterdemand;
                        //Data11.pipeline_rabi_cabbage_pipeline_waterdemand = result.pipeline_rabi_cabbage_pipeline_waterdemand;
                        //Data11.pipeline_rabi_cabbage_reduction_water_demand = result.pipeline_rabi_cabbage_reduction_water_demand;

                        //rabi beans

                        //Data11.pipeline_rabi_beans_crop_area = result.pipeline_rabi_beans_crop_area;
                        //Data11.pipeline_rabi_beans_fundingsource = result.pipeline_rabi_beans_fundingsource;

                        //Data11.pipeline_rabi_beans_irri_area = result.pipeline_rabi_beans_irri_area;
                        //Data11.pipeline_rabi_beans_waterdemand = result.pipeline_rabi_beans_waterdemand;
                        //Data11.pipeline_rabi_beans_pipeline_waterdemand = result.pipeline_rabi_beans_pipeline_waterdemand;
                        //Data11.pipeline_rabi_beans_reduction_water_demand = result.pipeline_rabi_beans_reduction_water_demand;

                        //rabi floriculture

                        Data11.pipeline_rabi_floriculture_crop_area = result.pipeline_rabi_floriculture_crop_area;
                        Data11.pipeline_rabi_floriculture_fundingsource = result.pipeline_rabi_floriculture_fundingsource;

                        Data11.pipeline_rabi_floriculture_irri_area = result.pipeline_rabi_floriculture_irri_area;
                        Data11.pipeline_rabi_floriculture_waterdemand = result.pipeline_rabi_floriculture_waterdemand;
                        Data11.pipeline_rabi_floriculture_pipeline_waterdemand = result.pipeline_rabi_floriculture_pipeline_waterdemand;
                        Data11.pipeline_rabi_floriculture_reduction_water_demand = result.pipeline_rabi_floriculture_reduction_water_demand;

                        //rabi potato

                        //Data11.pipeline_rabi_potato_crop_area = result.pipeline_rabi_potato_crop_area;
                        //Data11.pipeline_rabi_potato_fundingsource = result.pipeline_rabi_potato_fundingsource;

                        //Data11.pipeline_rabi_potato_irri_area = result.pipeline_rabi_potato_irri_area;
                        //Data11.pipeline_rabi_potato_waterdemand = result.pipeline_rabi_potato_waterdemand;
                        //Data11.pipeline_rabi_potato_pipeline_waterdemand = result.pipeline_rabi_potato_pipeline_waterdemand;
                        //Data11.pipeline_rabi_potato_reduction_water_demand = result.pipeline_rabi_potato_reduction_water_demand;

                        //rabi cucumber

                        //Data11.pipeline_rabi_cucumber_crop_area = result.pipeline_rabi_cucumber_crop_area;
                        //Data11.pipeline_rabi_cucumber_fundingsource = result.pipeline_rabi_cucumber_fundingsource;

                        //Data11.pipeline_rabi_cucumber_irri_area = result.pipeline_rabi_cucumber_irri_area;
                        //Data11.pipeline_rabi_cucumber_waterdemand = result.pipeline_rabi_cucumber_waterdemand;
                        //Data11.pipeline_rabi_cucumber_pipeline_waterdemand = result.pipeline_rabi_cucumber_pipeline_waterdemand;
                        //Data11.pipeline_rabi_cucumber_reduction_water_demand = result.pipeline_rabi_cucumber_reduction_water_demand;

                        //rabi ragi

                        Data11.pipeline_rabi_ragi_crop_area = result.pipeline_rabi_ragi_crop_area;
                        Data11.pipeline_rabi_ragi_fundingsource = result.pipeline_rabi_ragi_fundingsource;

                        Data11.pipeline_rabi_ragi_irri_area = result.pipeline_rabi_ragi_irri_area;
                        Data11.pipeline_rabi_ragi_waterdemand = result.pipeline_rabi_ragi_waterdemand;
                        Data11.pipeline_rabi_ragi_pipeline_waterdemand = result.pipeline_rabi_ragi_pipeline_waterdemand;
                        Data11.pipeline_rabi_ragi_reduction_water_demand = result.pipeline_rabi_ragi_reduction_water_demand;

                        //rabi sugarcane

                        Data11.pipeline_rabi_sugarcane_crop_area = result.pipeline_rabi_sugarcane_crop_area;
                        Data11.pipeline_rabi_sugarcane_fundingsource = result.pipeline_rabi_sugarcane_fundingsource;

                        Data11.pipeline_rabi_sugarcane_irri_area = result.pipeline_rabi_sugarcane_irri_area;
                        Data11.pipeline_rabi_sugarcane_waterdemand = result.pipeline_rabi_sugarcane_waterdemand;
                        Data11.pipeline_rabi_sugarcane_pipeline_waterdemand = result.pipeline_rabi_sugarcane_pipeline_waterdemand;
                        Data11.pipeline_rabi_sugarcane_reduction_water_demand = result.pipeline_rabi_sugarcane_reduction_water_demand;


                        //Rabi Maize
                        Data11.pipeline_rabi_maize_crop_area = result.pipeline_rabi_maize_crop_area;
                        Data11.pipeline_rabi_maize_fundingsource = result.pipeline_rabi_maize_fundingsource;

                        Data11.pipeline_rabi_maize_irri_area = result.pipeline_rabi_maize_irri_area;
                        Data11.pipeline_rabi_maize_waterdemand = result.pipeline_rabi_maize_waterdemand;
                        Data11.pipeline_rabi_maize_pipeline_waterdemand = result.pipeline_rabi_maize_pipeline_waterdemand;
                        Data11.pipeline_rabi_maize_reduction_water_demand = result.pipeline_rabi_maize_reduction_water_demand;

                        //rabi fodder

                        Data11.pipeline_rabi_fodder_crop_area = result.pipeline_rabi_fodder_crop_area;
                        Data11.pipeline_rabi_fodder_fundingsource = result.pipeline_rabi_fodder_fundingsource;

                        Data11.pipeline_rabi_fodder_irri_area = result.pipeline_rabi_fodder_irri_area;
                        Data11.pipeline_rabi_fodder_waterdemand = result.pipeline_rabi_fodder_waterdemand;
                        Data11.pipeline_rabi_fodder_pipeline_waterdemand = result.pipeline_rabi_fodder_pipeline_waterdemand;
                        Data11.pipeline_rabi_fodder_reduction_water_demand = result.pipeline_rabi_fodder_reduction_water_demand;

                        //rabi paddy

                        Data11.pipeline_rabi_paddy_crop_area = result.pipeline_rabi_paddy_crop_area;
                        Data11.pipeline_rabi_paddy_fundingsource = result.pipeline_rabi_paddy_fundingsource;

                        Data11.pipeline_rabi_paddy_irri_area = result.pipeline_rabi_paddy_irri_area;
                        Data11.pipeline_rabi_paddy_waterdemand = result.pipeline_rabi_paddy_waterdemand;
                        Data11.pipeline_rabi_paddy_pipeline_waterdemand = result.pipeline_rabi_paddy_pipeline_waterdemand;
                        Data11.pipeline_rabi_paddy_reduction_water_demand = result.pipeline_rabi_paddy_reduction_water_demand;

                        //rabi alfalfa

                        Data11.pipeline_rabi_alfalfa_crop_area = result.pipeline_rabi_alfalfa_crop_area;
                        Data11.pipeline_rabi_alfalfa_fundingsource = result.pipeline_rabi_alfalfa_fundingsource;

                        Data11.pipeline_rabi_alfalfa_irri_area = result.pipeline_rabi_alfalfa_irri_area;
                        Data11.pipeline_rabi_alfalfa_waterdemand = result.pipeline_rabi_alfalfa_waterdemand;
                        Data11.pipeline_rabi_alfalfa_pipeline_waterdemand = result.pipeline_rabi_alfalfa_pipeline_waterdemand;
                        Data11.pipeline_rabi_alfalfa_reduction_water_demand = result.pipeline_rabi_alfalfa_reduction_water_demand;

                        // rabi onion

                        //Data11.pipeline_rabi_onion_crop_area = result.pipeline_rabi_onion_crop_area;
                        //Data11.pipeline_rabi_onion_fundingsource = result.pipeline_rabi_onion_fundingsource;

                        //Data11.pipeline_rabi_onion_irri_area = result.pipeline_rabi_onion_irri_area;
                        //Data11.pipeline_rabi_onion_waterdemand = result.pipeline_rabi_onion_waterdemand;
                        //Data11.pipeline_rabi_onion_pipeline_waterdemand = result.pipeline_rabi_onion_pipeline_waterdemand;
                        //Data11.pipeline_rabi_onion_reduction_water_demand = result.pipeline_rabi_onion_reduction_water_demand;

                        //rabi horticulture

                        Data11.pipeline_rabi_horticulture_crop_area = result.pipeline_rabi_horticulture_crop_area;
                        Data11.pipeline_rabi_horticulture_fundingsource = result.pipeline_rabi_horticulture_fundingsource;

                        Data11.pipeline_rabi_horticulture_irri_area = result.pipeline_rabi_horticulture_irri_area;
                        Data11.pipeline_rabi_horticulture_waterdemand = result.pipeline_rabi_horticulture_waterdemand;
                        Data11.pipeline_rabi_horticulture_pipeline_waterdemand = result.pipeline_rabi_horticulture_pipeline_waterdemand;
                        Data11.pipeline_rabi_horticulture_reduction_water_demand = result.pipeline_rabi_horticulture_reduction_water_demand;

                        //rabi sunflower
                        Data11.pipeline_rabi_sunflower_crop_area = result.pipeline_rabi_sunflower_crop_area;
                        Data11.pipeline_rabi_sunflower_fundingsource = result.pipeline_rabi_sunflower_fundingsource;

                        Data11.pipeline_rabi_sunflower_irri_area = result.pipeline_rabi_sunflower_irri_area;
                        Data11.pipeline_rabi_sunflower_waterdemand = result.pipeline_rabi_sunflower_waterdemand;
                        Data11.pipeline_rabi_sunflower_pipeline_waterdemand = result.pipeline_rabi_sunflower_pipeline_waterdemand;
                        Data11.pipeline_rabi_sunflower_reduction_water_demand = result.pipeline_rabi_sunflower_reduction_water_demand;

                        //rabi crops total

                        Data11.pipeline_rabi_total_waterdemand = result.pipeline_rabi_total_waterdemand;
                        Data11.pipeline_rabi_total_rabi_waterdemand = result.pipeline_rabi_total_rabi_waterdemand;
                        Data11.pipeline_rabi_total_reduction_waterdemand = result.pipeline_rabi_total_reduction_waterdemand;


                        //summer sericulture

                        Data11.pipeline_summer_sericulture_crop_area = result.pipeline_summer_sericulture_crop_area;
                        Data11.pipeline_summer_sericulture_fundingsource = result.pipeline_summer_sericulture_fundingsource;

                        Data11.pipeline_summer_sericulture_irri_area = result.pipeline_summer_sericulture_irri_area;
                        Data11.pipeline_summer_sericulture_waterdemand = result.pipeline_summer_sericulture_waterdemand;
                        Data11.pipeline_summer_sericulture_pipeline_waterdemand = result.pipeline_summer_sericulture_pipeline_waterdemand;
                        Data11.pipeline_summer_sericulture_reduction_water_demand = result.pipeline_summer_sericulture_reduction_water_demand;

                        //summer tomoto

                        Data11.pipeline_summer_tomoto_crop_area = result.pipeline_summer_tomoto_crop_area;
                        Data11.pipeline_summer_tomoto_fundingsource = result.pipeline_summer_tomoto_fundingsource;

                        Data11.pipeline_summer_tomoto_irri_area = result.pipeline_summer_tomoto_irri_area;
                        Data11.pipeline_summer_tomoto_waterdemand = result.pipeline_summer_tomoto_waterdemand;
                        Data11.pipeline_summer_tomoto_pipeline_waterdemand = result.pipeline_summer_tomoto_pipeline_waterdemand;
                        Data11.pipeline_summer_tomoto_reduction_water_demand = result.pipeline_summer_tomoto_reduction_water_demand;

                        //sumer cabbage

                        //Data11.pipeline_summer_cabbage_crop_area = result.pipeline_summer_cabbage_crop_area;
                        //Data11.pipeline_summer_cabbage_fundingsource = result.pipeline_summer_cabbage_fundingsource;

                        //Data11.pipeline_summer_cabbage_irri_area = result.pipeline_summer_cabbage_irri_area;
                        //Data11.pipeline_summer_cabbage_waterdemand = result.pipeline_summer_cabbage_waterdemand;
                        //Data11.pipeline_summer_cabbage_pipeline_waterdemand = result.pipeline_summer_cabbage_pipeline_waterdemand;
                        //Data11.pipeline_summer_cabbage_reduction_water_demand = result.pipeline_summer_cabbage_reduction_water_demand;

                        //summer beans

                        //Data11.pipeline_summer_beans_crop_area = result.pipeline_summer_beans_crop_area;
                        //Data11.pipeline_summer_beans_fundingsource = result.pipeline_summer_beans_fundingsource;

                        //Data11.pipeline_summer_beans_irri_area = result.pipeline_summer_beans_irri_area;
                        //Data11.pipeline_summer_beans_waterdemand = result.pipeline_summer_beans_waterdemand;
                        //Data11.pipeline_summer_beans_pipeline_waterdemand = result.pipeline_summer_beans_pipeline_waterdemand;
                        //Data11.pipeline_summer_beans_reduction_water_demand = result.pipeline_summer_beans_reduction_water_demand;

                        //summer floriculture

                        Data11.pipeline_summer_floriculture_crop_area = result.pipeline_summer_floriculture_crop_area;
                        Data11.pipeline_summer_floriculture_fundingsource = result.pipeline_summer_floriculture_fundingsource;

                        Data11.pipeline_summer_floriculture_irri_area = result.pipeline_summer_floriculture_irri_area;
                        Data11.pipeline_summer_floriculture_waterdemand = result.pipeline_summer_floriculture_waterdemand;
                        Data11.pipeline_summer_floriculture_pipeline_waterdemand = result.pipeline_summer_floriculture_pipeline_waterdemand;
                        Data11.pipeline_summer_floriculture_reduction_water_demand = result.pipeline_summer_floriculture_reduction_water_demand;

                        //summer maize
                        Data11.pipeline_summer_maize_crop_area = result.pipeline_summer_maize_crop_area;
                        Data11.pipeline_summer_maize_fundingsource = result.pipeline_summer_maize_fundingsource;

                        Data11.pipeline_summer_maize_irri_area = result.pipeline_summer_maize_irri_area;
                        Data11.pipeline_summer_maize_waterdemand = result.pipeline_summer_maize_waterdemand;
                        Data11.pipeline_summer_maize_pipeline_waterdemand = result.pipeline_summer_maize_pipeline_waterdemand;
                        Data11.pipeline_summer_maize_reduction_water_demand = result.pipeline_summer_maize_pipeline_waterdemand;

                        //summer fodder
                        Data11.pipeline_summer_fodder_crop_area = result.pipeline_summer_fodder_crop_area;
                        Data11.pipeline_summer_fodder_fundingsource = result.pipeline_summer_fodder_fundingsource;

                        Data11.pipeline_summer_fodder_irri_area = result.pipeline_summer_fodder_irri_area;
                        Data11.pipeline_summer_fodder_waterdemand = result.pipeline_summer_fodder_waterdemand;
                        Data11.pipeline_summer_fodder_pipeline_waterdemand = result.pipeline_summer_fodder_pipeline_waterdemand;
                        Data11.pipeline_summer_fodder_reduction_water_demand = result.pipeline_summer_fodder_reduction_water_demand;

                        //summer sugarcane

                        Data11.pipeline_summer_sugarcane_crop_area = result.pipeline_summer_sugarcane_crop_area;
                        Data11.pipeline_summer_sugarcane_fundingsource = result.pipeline_summer_sugarcane_fundingsource;

                        Data11.pipeline_summer_sugarcane_irri_area = result.pipeline_summer_sugarcane_irri_area;
                        Data11.pipeline_summer_sugarcane_waterdemand = result.pipeline_summer_sugarcane_waterdemand;
                        Data11.pipeline_summer_sugarcane_pipeline_waterdemand = result.pipeline_summer_sugarcane_pipeline_waterdemand;
                        Data11.pipeline_summer_sugarcane_reduction_water_demand = result.pipeline_summer_sugarcane_reduction_water_demand;


                        //summer crops total
                        Data11.pipeline_summer_total_waterdemand = result.pipeline_summer_total_waterdemand;
                        Data11.pipeline_summer_total_summer_waterdemand = result.pipeline_summer_total_summer_waterdemand;
                        Data11.pipeline_summer_total_reduction_waterdemand = result.pipeline_summer_total_reduction_waterdemand;

                        //annual total
                        Data11.pipeline_annual_reduction_waterdemand = result.pipeline_annual_reduction_waterdemand;

                        Data11.latitude = result.latitude;
                        Data11.longitude = result.longitude;


                        //Data11.pipeline_kharif_water_demand = result.pipeline_kharif_water_demand;
                        //Data11.pipeline_kharif_water_save = result.pipeline_kharif_water_save;
                        //Data11.pipeline_rabi_water_demand = result.pipeline_rabi_water_demand;
                        //Data11.pipeline_rabi_water_save = result.pipeline_rabi_water_save;
                        //Data11.pipeline_summercrop_water_demand = result.pipeline_summercrop_water_demand;
                        //Data11.pipeline_summercrop_water_save = result.pipeline_summercrop_water_save;


                        //new columns water requirement
                        Data11.pipeline_kharif_paddy_water_req = result.pipeline_kharif_paddy_water_req;
                        Data11.pipeline_kharif_ragi_water_req = result.pipeline_kharif_ragi_water_req;
                        Data11.pipeline_kharif_groundnut_water_req = result.pipeline_kharif_groundnut_water_req;
                        Data11.pipeline_kharif_sugarcane_water_req = result.pipeline_kharif_sugarcane_water_req;
                        Data11.pipeline_kharif_tomoto_water_req = result.pipeline_kharif_tomoto_water_req;
                        // Data11.pipeline_kharif_cabbage_water_req = result.pipeline_kharif_cabbage_water_req;
                        //Data11.pipeline_kharif_beans_water_req = result.pipeline_kharif_beans_water_req;
                        Data11.pipeline_kharif_floriculture_water_req = result.pipeline_kharif_floriculture_water_req;
                        Data11.pipeline_kharif_sericulture_water_req = result.pipeline_kharif_sericulture_water_req;
                        // Data11.pipeline_kharif_cucumber_water_req = result.pipeline_kharif_cucumber_water_req;
                        Data11.pipeline_kharif_banana_water_req = result.pipeline_kharif_banana_water_req;
                        Data11.pipeline_kharif_fodder_water_req = result.pipeline_kharif_fodder_water_req;
                        Data11.pipeline_kharif_maize_water_req = result.pipeline_kharif_maize_water_req;
                        // Data11.pipeline_kharif_potato_water_req = result.pipeline_kharif_potato_water_req;
                        Data11.pipeline_kharif_chillies_water_req = result.pipeline_kharif_chillies_water_req;
                        Data11.pipeline_kharif_cotton_water_req = result.pipeline_kharif_cotton_water_req;
                        Data11.pipeline_kharif_melon_water_req = result.pipeline_kharif_melon_water_req;
                        Data11.pipeline_kharif_citrus_water_req = result.pipeline_kharif_citrus_water_req;
                        // Data11.pipeline_kharif_peanut_water_req = result.pipeline_kharif_peanut_water_req;
                        Data11.pipeline_kharif_horticulture_water_req = result.pipeline_kharif_horticulture_water_req;
                        Data11.pipeline_summer_sugarcane_irri_area = result.pipeline_summer_sugarcane_irri_area;

                        Data11.pipeline_rabi_sericulture_water_req = result.pipeline_rabi_sericulture_water_req;
                        Data11.pipeline_rabi_tomoto_water_req = result.pipeline_rabi_tomoto_water_req;
                        // Data11.pipeline_rabi_cabbage_water_req = result.pipeline_rabi_cabbage_water_req;
                        // Data11.pipeline_rabi_beans_water_req = result.pipeline_rabi_beans_water_req;
                        Data11.pipeline_rabi_floriculture_water_req = result.pipeline_rabi_floriculture_water_req;
                        // Data11.pipeline_rabi_potato_water_req = result.pipeline_rabi_potato_water_req;
                        // Data11.pipeline_rabi_cucumber_water_req = result.pipeline_rabi_cucumber_water_req;
                        Data11.pipeline_rabi_ragi_water_req = result.pipeline_rabi_ragi_water_req;
                        Data11.pipeline_rabi_sugarcane_water_req = result.pipeline_rabi_sugarcane_water_req;
                        Data11.pipeline_rabi_maize_water_req = result.pipeline_rabi_maize_water_req;
                        Data11.pipeline_rabi_fodder_water_req = result.pipeline_rabi_fodder_water_req;
                        Data11.pipeline_rabi_paddy_water_req = result.pipeline_rabi_paddy_water_req;
                        Data11.pipeline_rabi_alfalfa_water_req = result.pipeline_rabi_alfalfa_water_req;
                        // Data11.pipeline_rabi_onion_water_req = result.pipeline_rabi_onion_water_req;
                        Data11.pipeline_rabi_horticulture_water_req = result.pipeline_rabi_horticulture_water_req;
                        Data11.pipeline_rabi_sunflower_water_req = result.pipeline_rabi_sunflower_water_req;

                        Data11.pipeline_summer_sericulture_water_req = result.pipeline_summer_sericulture_water_req;
                        Data11.pipeline_summer_tomoto_water_req = result.pipeline_summer_tomoto_water_req;
                        // Data11.pipeline_summer_cabbage_water_req = result.pipeline_summer_cabbage_water_req;
                        // Data11.pipeline_summer_beans_water_req = result.pipeline_summer_beans_water_req;
                        Data11.pipeline_summer_floriculture_water_req = result.pipeline_summer_floriculture_water_req;
                        Data11.pipeline_summer_maize_water_req = result.pipeline_summer_maize_water_req;
                        Data11.pipeline_summer_fodder_water_req = result.pipeline_summer_fodder_water_req;
                        Data11.pipeline_summer_sugarcane_water_req = result.pipeline_summer_sugarcane_water_req;
                        Data11.pipeline_other_funding_source = result.pipeline_other_funding_source;

                        //if (result.pipeline_approx_estimated_cost != null && result.pipeline_approx_estimated_cost != "")
                        //{
                        //    string valid_negitive = Validation_NegitiveVal(result.pipeline_approx_estimated_cost);
                        //    if (valid_negitive == "True")
                        //    {
                        //        Data11.pipeline_approx_estimated_cost = result.pipeline_approx_estimated_cost;
                        //    }
                        //    else
                        //    {
                        //        return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                        //    }

                        //}
                        Data11.pipeline_approx_estimated_cost = result.pipeline_approx_estimated_cost;
                        Data11.pipeline_cost_type = result.pipeline_cost_type;

                        //horiculture
                        Data11.pipeline_summer_horticulture_crop_area = result.pipeline_summer_horticulture_crop_area;
                        Data11.pipeline_summer_horticulture_irri_area = result.pipeline_summer_horticulture_irri_area;
                        Data11.pipeline_summer_horticulture_water_req = result.pipeline_summer_horticulture_water_req;
                        Data11.pipeline_summer_horticulture_waterdemand = result.pipeline_summer_horticulture_waterdemand;
                        Data11.pipeline_summer_horticulture_netwater_waterdemand = result.pipeline_summer_horticulture_netwater_waterdemand;
                        Data11.pipeline_summer_horticulture_reduction_gw_demand = result.pipeline_summer_horticulture_reduction_gw_demand;

                        //add crops
                        Data11.pipeline_kharif_othercrop_name1 = result.pipeline_kharif_othercrop_name1;
                        Data11.pipeline_kharif_othercrop_area1 = result.pipeline_kharif_othercrop_area1;
                        Data11.pipeline_kharif_othercrop_irri_area1 = result.pipeline_kharif_othercrop_irri_area1;
                        Data11.pipeline_kharif_othercrop_water_req1 = result.pipeline_kharif_othercrop_water_req1;
                        Data11.pipeline_kharif_othercrop_waterdemand1 = result.pipeline_kharif_othercrop_waterdemand1;
                        Data11.pipeline_kharif_othercrop_pipeline_waterdemand1 = result.pipeline_kharif_othercrop_pipeline_waterdemand1;
                        Data11.pipeline_kharif_othercrop_reduc_gw_demand1 = result.pipeline_kharif_othercrop_reduc_gw_demand1;

                        Data11.pipeline_kharif_othercrop_name2 = result.pipeline_kharif_othercrop_name2;
                        Data11.pipeline_kharif_othercrop_area2 = result.pipeline_kharif_othercrop_area2;
                        Data11.pipeline_kharif_othercrop_irri_area2 = result.pipeline_kharif_othercrop_irri_area2;
                        Data11.pipeline_kharif_othercrop_water_req2 = result.pipeline_kharif_othercrop_water_req2;
                        Data11.pipeline_kharif_othercrop_waterdemand2 = result.pipeline_kharif_othercrop_waterdemand2;
                        Data11.pipeline_kharif_othercrop_pipeline_waterdemand2 = result.pipeline_kharif_othercrop_pipeline_waterdemand2;
                        Data11.pipeline_kharif_othercrop_reduc_gw_demand2 = result.pipeline_kharif_othercrop_reduc_gw_demand2;

                        Data11.pipeline_kharif_othercrop_name3 = result.pipeline_kharif_othercrop_name3;
                        Data11.pipeline_kharif_othercrop_area3 = result.pipeline_kharif_othercrop_area3;
                        Data11.pipeline_kharif_othercrop_irri_area3 = result.pipeline_kharif_othercrop_irri_area3;
                        Data11.pipeline_kharif_othercrop_water_req3 = result.pipeline_kharif_othercrop_water_req3;
                        Data11.pipeline_kharif_othercrop_waterdemand3 = result.pipeline_kharif_othercrop_waterdemand3;
                        Data11.pipeline_kharif_othercrop_pipeline_waterdemand3 = result.pipeline_kharif_othercrop_pipeline_waterdemand3;
                        Data11.pipeline_kharif_othercrop_reduc_gw_demand3 = result.pipeline_kharif_othercrop_reduc_gw_demand3;

                        Data11.pipeline_kharif_othercrop_name4 = result.pipeline_kharif_othercrop_name4;
                        Data11.pipeline_kharif_othercrop_area4 = result.pipeline_kharif_othercrop_area4;
                        Data11.pipeline_kharif_othercrop_irri_area4 = result.pipeline_kharif_othercrop_irri_area4;
                        Data11.pipeline_kharif_othercrop_water_req4 = result.pipeline_kharif_othercrop_water_req4;
                        Data11.pipeline_kharif_othercrop_waterdemand4 = result.pipeline_kharif_othercrop_waterdemand4;
                        Data11.pipeline_kharif_othercrop_pipeline_waterdemand4 = result.pipeline_kharif_othercrop_pipeline_waterdemand4;
                        Data11.pipeline_kharif_othercrop_reduc_gw_demand4 = result.pipeline_kharif_othercrop_reduc_gw_demand4;

                        Data11.pipeline_kharif_othercrop_name5 = result.pipeline_kharif_othercrop_name5;
                        Data11.pipeline_kharif_othercrop_area5 = result.pipeline_kharif_othercrop_area5;
                        Data11.pipeline_kharif_othercrop_irri_area5 = result.pipeline_kharif_othercrop_irri_area5;
                        Data11.pipeline_kharif_othercrop_water_req5 = result.pipeline_kharif_othercrop_water_req5;
                        Data11.pipeline_kharif_othercrop_waterdemand5 = result.pipeline_kharif_othercrop_waterdemand5;
                        Data11.pipeline_kharif_othercrop_pipeline_waterdemand5 = result.pipeline_kharif_othercrop_pipeline_waterdemand5;
                        Data11.pipeline_kharif_othercrop_reduc_gw_demand5 = result.pipeline_kharif_othercrop_reduc_gw_demand5;

                        Data11.pipeline_rabi_othercrop_name1 = result.pipeline_rabi_othercrop_name1;
                        Data11.pipeline_rabi_othercrop_area1 = result.pipeline_rabi_othercrop_area1;
                        Data11.pipeline_rabi_othercrop_irri_area1 = result.pipeline_rabi_othercrop_irri_area1;
                        Data11.pipeline_rabi_othercrop_water_req1 = result.pipeline_rabi_othercrop_water_req1;
                        Data11.pipeline_rabi_othercrop_waterdemand1 = result.pipeline_rabi_othercrop_waterdemand1;
                        Data11.pipeline_rabi_othercrop_pipeline_waterdemand1 = result.pipeline_rabi_othercrop_pipeline_waterdemand1;
                        Data11.pipeline_rabi_othercrop_reduc_gw_demand1 = result.pipeline_rabi_othercrop_reduc_gw_demand1;

                        Data11.pipeline_rabi_othercrop_name2 = result.pipeline_rabi_othercrop_name2;
                        Data11.pipeline_rabi_othercrop_area2 = result.pipeline_rabi_othercrop_area2;
                        Data11.pipeline_rabi_othercrop_irri_area2 = result.pipeline_rabi_othercrop_irri_area2;
                        Data11.pipeline_rabi_othercrop_water_req2 = result.pipeline_rabi_othercrop_water_req2;
                        Data11.pipeline_rabi_othercrop_waterdemand2 = result.pipeline_rabi_othercrop_waterdemand2;
                        Data11.pipeline_rabi_othercrop_pipeline_waterdemand2 = result.pipeline_rabi_othercrop_pipeline_waterdemand2;
                        Data11.pipeline_rabi_othercrop_reduc_gw_demand2 = result.pipeline_rabi_othercrop_reduc_gw_demand2;

                        Data11.pipeline_rabi_othercrop_name3 = result.pipeline_rabi_othercrop_name3;
                        Data11.pipeline_rabi_othercrop_area3 = result.pipeline_rabi_othercrop_area3;
                        Data11.pipeline_rabi_othercrop_irri_area3 = result.pipeline_rabi_othercrop_irri_area3;
                        Data11.pipeline_rabi_othercrop_water_req3 = result.pipeline_rabi_othercrop_water_req3;
                        Data11.pipeline_rabi_othercrop_waterdemand3 = result.pipeline_rabi_othercrop_waterdemand3;
                        Data11.pipeline_rabi_othercrop_pipeline_waterdemand3 = result.pipeline_rabi_othercrop_pipeline_waterdemand3;
                        Data11.pipeline_rabi_othercrop_reduc_gw_demand3 = result.pipeline_rabi_othercrop_reduc_gw_demand3;

                        Data11.pipeline_rabi_othercrop_name4 = result.pipeline_rabi_othercrop_name4;
                        Data11.pipeline_rabi_othercrop_area4 = result.pipeline_rabi_othercrop_area4;
                        Data11.pipeline_rabi_othercrop_irri_area4 = result.pipeline_rabi_othercrop_irri_area4;
                        Data11.pipeline_rabi_othercrop_water_req4 = result.pipeline_rabi_othercrop_water_req4;
                        Data11.pipeline_rabi_othercrop_waterdemand4 = result.pipeline_rabi_othercrop_waterdemand4;
                        Data11.pipeline_rabi_othercrop_pipeline_waterdemand4 = result.pipeline_rabi_othercrop_pipeline_waterdemand4;
                        Data11.pipeline_rabi_othercrop_reduc_gw_demand4 = result.pipeline_rabi_othercrop_reduc_gw_demand4;

                        Data11.pipeline_rabi_othercrop_name5 = result.pipeline_rabi_othercrop_name5;
                        Data11.pipeline_rabi_othercrop_area5 = result.pipeline_rabi_othercrop_area5;
                        Data11.pipeline_rabi_othercrop_irri_area5 = result.pipeline_rabi_othercrop_irri_area5;
                        Data11.pipeline_rabi_othercrop_water_req5 = result.pipeline_rabi_othercrop_water_req5;
                        Data11.pipeline_rabi_othercrop_waterdemand5 = result.pipeline_rabi_othercrop_waterdemand5;
                        Data11.pipeline_rabi_othercrop_pipeline_waterdemand5 = result.pipeline_rabi_othercrop_pipeline_waterdemand5;
                        Data11.pipeline_rabi_othercrop_reduc_gw_demand5 = result.pipeline_rabi_othercrop_reduc_gw_demand5;

                        Data11.pipeline_summer_othercrop_name1 = result.pipeline_summer_othercrop_name1;
                        Data11.pipeline_summer_othercrop_area1 = result.pipeline_summer_othercrop_area1;
                        Data11.pipeline_summer_othercrop_irri_area1 = result.pipeline_summer_othercrop_irri_area1;
                        Data11.pipeline_summer_othercrop_water_req1 = result.pipeline_summer_othercrop_water_req1;
                        Data11.pipeline_summer_othercrop_waterdemand1 = result.pipeline_summer_othercrop_waterdemand1;
                        Data11.pipeline_summer_othercrop_pipeline_waterdemand1 = result.pipeline_summer_othercrop_pipeline_waterdemand1;
                        Data11.pipeline_summer_othercrop_reduc_gw_demand1 = result.pipeline_summer_othercrop_reduc_gw_demand1;

                        Data11.pipeline_summer_othercrop_name2 = result.pipeline_summer_othercrop_name2;
                        Data11.pipeline_summer_othercrop_area2 = result.pipeline_summer_othercrop_area2;
                        Data11.pipeline_summer_othercrop_irri_area2 = result.pipeline_summer_othercrop_irri_area2;
                        Data11.pipeline_summer_othercrop_water_req2 = result.pipeline_summer_othercrop_water_req2;
                        Data11.pipeline_summer_othercrop_waterdemand2 = result.pipeline_summer_othercrop_waterdemand2;
                        Data11.pipeline_summer_othercrop_pipeline_waterdemand2 = result.pipeline_summer_othercrop_pipeline_waterdemand2;
                        Data11.pipeline_summer_othercrop_reduc_gw_demand2 = result.pipeline_summer_othercrop_reduc_gw_demand2;

                        Data11.pipeline_summer_othercrop_name3 = result.pipeline_summer_othercrop_name3;
                        Data11.pipeline_summer_othercrop_area3 = result.pipeline_summer_othercrop_area3;
                        Data11.pipeline_summer_othercrop_irri_area3 = result.pipeline_summer_othercrop_irri_area3;
                        Data11.pipeline_summer_othercrop_water_req3 = result.pipeline_summer_othercrop_water_req3;
                        Data11.pipeline_summer_othercrop_waterdemand3 = result.pipeline_summer_othercrop_waterdemand3;
                        Data11.pipeline_summer_othercrop_pipeline_waterdemand3 = result.pipeline_summer_othercrop_pipeline_waterdemand3;
                        Data11.pipeline_summer_othercrop_reduc_gw_demand3 = result.pipeline_summer_othercrop_reduc_gw_demand3;

                        Data11.pipeline_summer_othercrop_name4 = result.pipeline_summer_othercrop_name4;
                        Data11.pipeline_summer_othercrop_area4 = result.pipeline_summer_othercrop_area4;
                        Data11.pipeline_summer_othercrop_irri_area4 = result.pipeline_summer_othercrop_irri_area4;
                        Data11.pipeline_summer_othercrop_water_req4 = result.pipeline_summer_othercrop_water_req4;
                        Data11.pipeline_summer_othercrop_waterdemand4 = result.pipeline_summer_othercrop_waterdemand4;
                        Data11.pipeline_summer_othercrop_pipeline_waterdemand4 = result.pipeline_summer_othercrop_pipeline_waterdemand4;
                        Data11.pipeline_summer_othercrop_reduc_gw_demand4 = result.pipeline_summer_othercrop_reduc_gw_demand4;

                        Data11.pipeline_summer_othercrop_name5 = result.pipeline_summer_othercrop_name5;
                        Data11.pipeline_summer_othercrop_area5 = result.pipeline_summer_othercrop_area5;
                        Data11.pipeline_summer_othercrop_irri_area5 = result.pipeline_summer_othercrop_irri_area5;
                        Data11.pipeline_summer_othercrop_water_req5 = result.pipeline_summer_othercrop_water_req5;
                        Data11.pipeline_summer_othercrop_waterdemand5 = result.pipeline_summer_othercrop_waterdemand5;
                        Data11.pipeline_summer_othercrop_pipeline_waterdemand5 = result.pipeline_summer_othercrop_pipeline_waterdemand5;
                        Data11.pipeline_summer_othercrop_reduc_gw_demand5 = result.pipeline_summer_othercrop_reduc_gw_demand5;

                        ABE.Entry(Data11).State = EntityState.Modified;

                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        obj.statename = StateName;
                        obj.blockname = BlockName;
                        obj.districtname = DistName;
                        obj.gpname = GramName;
                        obj.userid = Convert.ToInt32(userid);


                        if (result.pipeline_approx_estimated_cost != null && result.pipeline_approx_estimated_cost != "")
                        {
                            string valid_negitive = Validation_NegitiveVal(result.pipeline_approx_estimated_cost);
                            if (valid_negitive == "True")
                            {
                                obj.pipeline_approx_estimated_cost = result.pipeline_approx_estimated_cost;
                            }
                            else
                            {
                                return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                            }

                        }
                        obj.pipeline_cost_type = result.pipeline_cost_type;

                        //summer horiculture
                        obj.pipeline_summer_horticulture_crop_area = result.pipeline_summer_horticulture_crop_area;
                        obj.pipeline_summer_horticulture_irri_area = result.pipeline_summer_horticulture_irri_area;
                        obj.pipeline_summer_horticulture_water_req = result.pipeline_summer_horticulture_water_req;
                        obj.pipeline_summer_horticulture_waterdemand = result.pipeline_summer_horticulture_waterdemand;
                        obj.pipeline_summer_horticulture_netwater_waterdemand = result.pipeline_summer_horticulture_netwater_waterdemand;
                        obj.pipeline_summer_horticulture_reduction_gw_demand = result.pipeline_summer_horticulture_reduction_gw_demand;


                        obj.pipeline_kharif_paddy_crop_area = result.pipeline_kharif_paddy_crop_area;
                        obj.pipeline_kharif_paddy_fundingsource = result.pipeline_kharif_paddy_fundingsource;
                        obj.pipeline_kharif_paddy_irri_area = result.pipeline_kharif_paddy_irri_area;
                        obj.pipeline_kharif_paddy_waterdemand = result.pipeline_kharif_paddy_waterdemand;
                        obj.pipeline_kharif_paddy_pipeline_waterdemand = result.pipeline_kharif_paddy_pipeline_waterdemand;
                        obj.pipeline_kharif_paddy_reduction_water_demand = result.pipeline_kharif_paddy_reduction_water_demand;

                        //Ragi
                        obj.pipeline_kharif_ragi_crop_area = result.pipeline_kharif_ragi_crop_area;
                        obj.pipeline_kharif_ragi_fundingsource = result.pipeline_kharif_ragi_fundingsource;
                        obj.pipeline_kharif_ragi_irri_area = result.pipeline_kharif_ragi_irri_area;
                        obj.pipeline_kharif_ragi_waterdemand = result.pipeline_kharif_ragi_waterdemand;
                        obj.pipeline_kharif_ragi_pipeline_waterdemand = result.pipeline_kharif_ragi_pipeline_waterdemand;
                        obj.pipeline_kharif_ragi_reduction_water_demand = result.pipeline_kharif_ragi_reduction_water_demand;

                        //groundnut
                        obj.pipeline_kharif_groundnut_crop_area = result.pipeline_kharif_groundnut_crop_area;
                        obj.pipeline_kharif_groundnut_fundingsource = result.pipeline_kharif_groundnut_fundingsource;

                        obj.pipeline_kharif_groundnut_irri_area = result.pipeline_kharif_groundnut_irri_area;
                        obj.pipeline_kharif_groundnut_waterdemand = result.pipeline_kharif_groundnut_waterdemand;
                        obj.pipeline_kharif_groundnut_pipeline_waterdemand = result.pipeline_kharif_groundnut_pipeline_waterdemand;
                        obj.pipeline_kharif_groundnut_reduction_water_demand = result.pipeline_kharif_groundnut_reduction_water_demand;


                        //sugarcane
                        obj.pipeline_kharif_sugarcane_crop_area = result.pipeline_kharif_sugarcane_crop_area;
                        obj.pipeline_kharif_sugarcane_fundingsource = result.pipeline_kharif_sugarcane_fundingsource;

                        obj.pipeline_kharif_sugarcane_irri_area = result.pipeline_kharif_sugarcane_irri_area;
                        obj.pipeline_kharif_sugarcane_waterdemand = result.pipeline_kharif_sugarcane_waterdemand;
                        obj.pipeline_kharif_sugarcane_pipeline_waterdemand = result.pipeline_kharif_sugarcane_pipeline_waterdemand;
                        obj.pipeline_kharif_sugarcane_reduction_water_demand = result.pipeline_kharif_sugarcane_reduction_water_demand;

                        //Tomoto


                        obj.pipeline_kharif_tomoto_crop_area = result.pipeline_kharif_tomoto_crop_area;
                        obj.pipeline_kharif_tomoto_fundingsource = result.pipeline_kharif_tomoto_fundingsource;

                        obj.pipeline_kharif_tomoto_irri_area = result.pipeline_kharif_tomoto_irri_area;
                        obj.pipeline_kharif_tomoto_waterdemand = result.pipeline_kharif_tomoto_waterdemand;
                        obj.pipeline_kharif_tomoto_pipeline_waterdemand = result.pipeline_kharif_tomoto_pipeline_waterdemand;
                        obj.pipeline_kharif_tomoto_reduction_water_demand = result.pipeline_kharif_tomoto_reduction_water_demand;

                        //Cabbage

                        //obj.pipeline_kharif_cabbage_crop_area = result.pipeline_kharif_cabbage_crop_area;
                        //obj.pipeline_kharif_cabbage_fundingsource = result.pipeline_kharif_cabbage_fundingsource;

                        //obj.pipeline_kharif_cabbage_irri_area = result.pipeline_kharif_cabbage_irri_area;
                        //obj.pipeline_kharif_cabbage_waterdemand = result.pipeline_kharif_cabbage_waterdemand;
                        //obj.pipeline_kharif_cabbage_pipeline_waterdemand = result.pipeline_kharif_cabbage_pipeline_waterdemand;
                        //obj.pipeline_kharif_cabbage_reduction_water_demand = result.pipeline_kharif_cabbage_reduction_water_demand;

                        //Beans

                        //obj.pipeline_kharif_beans_crop_area = result.pipeline_kharif_beans_crop_area;
                        //obj.pipeline_kharif_beans_fundingsource = result.pipeline_kharif_beans_fundingsource;

                        //obj.pipeline_kharif_beans_irri_area = result.pipeline_kharif_beans_irri_area;
                        //obj.pipeline_kharif_beans_waterdemand = result.pipeline_kharif_beans_waterdemand;
                        //obj.pipeline_kharif_beans_pipeline_waterdemand = result.pipeline_kharif_beans_pipeline_waterdemand;
                        //obj.pipeline_kharif_beans_reduction_water_demand = result.pipeline_kharif_beans_reduction_water_demand;

                        //floriculture
                        obj.pipeline_kharif_floriculture_crop_area = result.pipeline_kharif_floriculture_crop_area;
                        obj.pipeline_kharif_floriculture_fundingsource = result.pipeline_kharif_floriculture_fundingsource;

                        obj.pipeline_kharif_floriculture_irri_area = result.pipeline_kharif_floriculture_irri_area;
                        obj.pipeline_kharif_floriculture_waterdemand = result.pipeline_kharif_floriculture_waterdemand;
                        obj.pipeline_kharif_floriculture_pipeline_waterdemand = result.pipeline_kharif_floriculture_pipeline_waterdemand;
                        obj.pipeline_kharif_floriculture_reduction_water_demand = result.pipeline_kharif_floriculture_reduction_water_demand;

                        //sericulture

                        obj.pipeline_kharif_sericulture_crop_area = result.pipeline_kharif_sericulture_crop_area;
                        obj.pipeline_kharif_sericulture_fundingsource = result.pipeline_kharif_sericulture_fundingsource;

                        obj.pipeline_kharif_sericulture_irri_area = result.pipeline_kharif_sericulture_irri_area;
                        obj.pipeline_kharif_sericulture_waterdemand = result.pipeline_kharif_sericulture_waterdemand;
                        obj.pipeline_kharif_sericulture_pipeline_waterdemand = result.pipeline_kharif_sericulture_pipeline_waterdemand;
                        obj.pipeline_kharif_sericulture_reduction_water_demand = result.pipeline_kharif_sericulture_reduction_water_demand;

                        //Cucumber

                        //obj.pipeline_kharif_cucumber_crop_area = result.pipeline_kharif_cucumber_crop_area;
                        //obj.pipeline_kharif_cucumber_fundingsource = result.pipeline_kharif_cucumber_fundingsource;

                        //obj.pipeline_kharif_cucumber_irri_area = result.pipeline_kharif_cucumber_irri_area;
                        //obj.pipeline_kharif_cucumber_waterdemand = result.pipeline_kharif_cucumber_waterdemand;
                        //obj.pipeline_kharif_cucumber_pipeline_waterdemand = result.pipeline_kharif_cucumber_pipeline_waterdemand;
                        //obj.pipeline_kharif_cucumber_reduction_water_demand = result.pipeline_kharif_cucumber_reduction_water_demand;

                        //banana

                        obj.pipeline_kharif_banana_crop_area = result.pipeline_kharif_banana_crop_area;
                        obj.pipeline_kharif_banana_fundingsource = result.pipeline_kharif_banana_fundingsource;

                        obj.pipeline_kharif_banana_irri_area = result.pipeline_kharif_banana_irri_area;
                        obj.pipeline_kharif_banana_waterdemand = result.pipeline_kharif_banana_waterdemand;
                        obj.pipeline_kharif_banana_pipeline_waterdemand = result.pipeline_kharif_banana_pipeline_waterdemand;
                        obj.pipeline_kharif_banana_reduction_water_demand = result.pipeline_kharif_banana_reduction_water_demand;

                        //fodder

                        obj.pipeline_kharif_fodder_crop_area = result.pipeline_kharif_fodder_crop_area;
                        obj.pipeline_kharif_fodder_fundingsource = result.pipeline_kharif_fodder_fundingsource;

                        obj.pipeline_kharif_fodder_irri_area = result.pipeline_kharif_fodder_irri_area;
                        obj.pipeline_kharif_fodder_waterdemand = result.pipeline_kharif_fodder_waterdemand;
                        obj.pipeline_kharif_fodder_pipeline_waterdemand = result.pipeline_kharif_fodder_pipeline_waterdemand;
                        obj.pipeline_kharif_fodder_reduction_water_demand = result.pipeline_kharif_fodder_reduction_water_demand;

                        //Maize

                        obj.pipeline_kharif_maize_crop_area = result.pipeline_kharif_maize_crop_area;
                        obj.pipeline_kharif_maize_fundingsource = result.pipeline_kharif_maize_fundingsource;

                        obj.pipeline_kharif_maize_irri_area = result.pipeline_kharif_maize_irri_area;
                        obj.pipeline_kharif_maize_waterdemand = result.pipeline_kharif_maize_waterdemand;
                        obj.pipeline_kharif_maize_pipeline_waterdemand = result.pipeline_kharif_maize_pipeline_waterdemand;
                        obj.pipeline_kharif_maize_reduction_water_demand = result.pipeline_kharif_maize_reduction_water_demand;

                        //potato

                        //obj.pipeline_kharif_potato_crop_area = result.pipeline_kharif_potato_crop_area;
                        //obj.pipeline_kharif_potato_fundingsource = result.pipeline_kharif_potato_fundingsource;

                        //obj.pipeline_kharif_potato_irri_area = result.pipeline_kharif_potato_irri_area;
                        //obj.pipeline_kharif_potato_waterdemand = result.pipeline_kharif_potato_waterdemand;
                        //obj.pipeline_kharif_potato_pipeline_waterdemand = result.pipeline_kharif_potato_pipeline_waterdemand;
                        //obj.pipeline_kharif_potato_reduction_water_demand = result.pipeline_kharif_potato_reduction_water_demand;

                        //chillies

                        obj.pipeline_kharif_chillies_crop_area = result.pipeline_kharif_chillies_crop_area;
                        obj.pipeline_kharif_chillies_fundingsource = result.pipeline_kharif_chillies_fundingsource;

                        obj.pipeline_kharif_chillies_irri_area = result.pipeline_kharif_chillies_irri_area;
                        obj.pipeline_kharif_chillies_waterdemand = result.pipeline_kharif_chillies_waterdemand;
                        obj.pipeline_kharif_chillies_pipeline_waterdemand = result.pipeline_kharif_chillies_pipeline_waterdemand;
                        obj.pipeline_kharif_chillies_reduction_water_demand = result.pipeline_kharif_chillies_reduction_water_demand;

                        //cotton

                        obj.pipeline_kharif_cotton_crop_area = result.pipeline_kharif_cotton_crop_area;
                        obj.pipeline_kharif_cotton_fundingsource = result.pipeline_kharif_cotton_fundingsource;
                        obj.pipeline_kharif_cotton_irri_area = result.pipeline_kharif_cotton_irri_area;
                        obj.pipeline_kharif_cotton_waterdemand = result.pipeline_kharif_cotton_waterdemand;
                        obj.pipeline_kharif_cotton_pipeline_waterdemand = result.pipeline_kharif_cotton_pipeline_waterdemand;
                        obj.pipeline_kharif_cotton_reduction_water_demand = result.pipeline_kharif_cotton_reduction_water_demand;

                        //melon


                        obj.pipeline_kharif_melon_crop_area = result.pipeline_kharif_melon_crop_area;
                        obj.pipeline_kharif_melon_fundingsource = result.pipeline_kharif_melon_fundingsource;

                        obj.pipeline_kharif_melon_irri_area = result.pipeline_kharif_melon_irri_area;
                        obj.pipeline_kharif_melon_waterdemand = result.pipeline_kharif_melon_waterdemand;
                        obj.pipeline_kharif_melon_pipeline_waterdemand = result.pipeline_kharif_melon_pipeline_waterdemand;
                        obj.pipeline_kharif_melon_reduction_water_demand = result.pipeline_kharif_melon_reduction_water_demand;

                        //citrus
                        obj.pipeline_kharif_citrus_crop_area = result.pipeline_kharif_citrus_crop_area;
                        obj.pipeline_kharif_citrus_fundingsource = result.pipeline_kharif_citrus_fundingsource;

                        obj.pipeline_kharif_citrus_irri_area = result.pipeline_kharif_citrus_irri_area;
                        obj.pipeline_kharif_citrus_waterdemand = result.pipeline_kharif_citrus_waterdemand;
                        obj.pipeline_kharif_citrus_pipeline_waterdemand = result.pipeline_kharif_citrus_pipeline_waterdemand;
                        obj.pipeline_kharif_citrus_reduction_water_demand = result.pipeline_kharif_citrus_reduction_water_demand;

                        //peanut

                        //obj.pipeline_kharif_peanut_crop_area = result.pipeline_kharif_peanut_crop_area;
                        //obj.pipeline_kharif_peanut_fundingsource = result.pipeline_kharif_peanut_fundingsource;

                        //obj.pipeline_kharif_peanut_irri_area = result.pipeline_kharif_peanut_irri_area;
                        //obj.pipeline_kharif_peanut_waterdemand = result.pipeline_kharif_peanut_waterdemand;
                        //obj.pipeline_kharif_peanut_pipeline_waterdemand = result.pipeline_kharif_peanut_pipeline_waterdemand;
                        //obj.pipeline_kharif_peanut_reduction_water_demand = result.pipeline_kharif_peanut_reduction_water_demand;


                        //horticulture

                        obj.pipeline_kharif_horticulture_crop_area = result.pipeline_kharif_horticulture_crop_area;
                        obj.pipeline_kharif_horticulture_fundingsource = result.pipeline_kharif_horticulture_fundingsource;

                        obj.pipeline_kharif_horticulture_irri_area = result.pipeline_kharif_horticulture_irri_area;
                        obj.pipeline_kharif_horticulture_waterdemand = result.pipeline_kharif_horticulture_waterdemand;
                        obj.pipeline_kharif_horticulture_pipeline_waterdemand = result.pipeline_kharif_horticulture_pipeline_waterdemand;
                        obj.pipeline_kharif_horticulture_reduction_water_demand = result.pipeline_kharif_horticulture_reduction_water_demand;

                        //karif crops total

                        obj.pipeline_kharif_total_waterdemand = result.pipeline_kharif_total_waterdemand;
                        obj.pipeline_kharif_total_pipeline_waterdemand = result.pipeline_kharif_total_pipeline_waterdemand;
                        obj.pipeline_kharif_total_reduction_waterdemand = result.pipeline_kharif_total_reduction_waterdemand;

                        //rabi sericulture

                        obj.pipeline_rabi_sericulture_crop_area = result.pipeline_rabi_sericulture_crop_area;
                        obj.pipeline_rabi_sericulture_fundingsource = result.pipeline_rabi_sericulture_fundingsource;

                        obj.pipeline_rabi_sericulture_irri_area = result.pipeline_rabi_sericulture_irri_area;
                        obj.pipeline_rabi_sericulture_waterdemand = result.pipeline_rabi_sericulture_waterdemand;
                        obj.pipeline_rabi_sericulture_pipeline_waterdemand = result.pipeline_rabi_sericulture_pipeline_waterdemand;
                        obj.pipeline_rabi_sericulture_reduction_water_demand = result.pipeline_rabi_sericulture_reduction_water_demand;

                        //rabi tomoto

                        obj.pipeline_rabi_tomoto_crop_area = result.pipeline_rabi_tomoto_crop_area;
                        obj.pipeline_rabi_tomoto_fundingsource = result.pipeline_rabi_tomoto_fundingsource;

                        obj.pipeline_rabi_tomoto_irri_area = result.pipeline_rabi_tomoto_irri_area;
                        obj.pipeline_rabi_tomoto_waterdemand = result.pipeline_rabi_tomoto_waterdemand;
                        obj.pipeline_rabi_tomoto_pipeline_waterdemand = result.pipeline_rabi_tomoto_pipeline_waterdemand;
                        obj.pipeline_rabi_tomoto_reduction_water_demand = result.pipeline_rabi_tomoto_reduction_water_demand;

                        //rabi cabbage

                        //obj.pipeline_rabi_cabbage_crop_area = result.pipeline_rabi_cabbage_crop_area;
                        //obj.pipeline_rabi_cabbage_fundingsource = result.pipeline_rabi_cabbage_fundingsource;

                        //obj.pipeline_rabi_cabbage_irri_area = result.pipeline_rabi_cabbage_irri_area;
                        //obj.pipeline_rabi_cabbage_waterdemand = result.pipeline_rabi_cabbage_waterdemand;
                        //obj.pipeline_rabi_cabbage_pipeline_waterdemand = result.pipeline_rabi_cabbage_pipeline_waterdemand;
                        //obj.pipeline_rabi_cabbage_reduction_water_demand = result.pipeline_rabi_cabbage_reduction_water_demand;

                        //rabi beans

                        //obj.pipeline_rabi_beans_crop_area = result.pipeline_rabi_beans_crop_area;
                        //obj.pipeline_rabi_beans_fundingsource = result.pipeline_rabi_beans_fundingsource;

                        //obj.pipeline_rabi_beans_irri_area = result.pipeline_rabi_beans_irri_area;
                        //obj.pipeline_rabi_beans_waterdemand = result.pipeline_rabi_beans_waterdemand;
                        //obj.pipeline_rabi_beans_pipeline_waterdemand = result.pipeline_rabi_beans_pipeline_waterdemand;
                        //obj.pipeline_rabi_beans_reduction_water_demand = result.pipeline_rabi_beans_reduction_water_demand;

                        //rabi floriculture

                        obj.pipeline_rabi_floriculture_crop_area = result.pipeline_rabi_floriculture_crop_area;
                        obj.pipeline_rabi_floriculture_fundingsource = result.pipeline_rabi_floriculture_fundingsource;

                        obj.pipeline_rabi_floriculture_irri_area = result.pipeline_rabi_floriculture_irri_area;
                        obj.pipeline_rabi_floriculture_waterdemand = result.pipeline_rabi_floriculture_waterdemand;
                        obj.pipeline_rabi_floriculture_pipeline_waterdemand = result.pipeline_rabi_floriculture_pipeline_waterdemand;
                        obj.pipeline_rabi_floriculture_reduction_water_demand = result.pipeline_rabi_floriculture_reduction_water_demand;

                        //rabi potato

                        //obj.pipeline_rabi_potato_crop_area = result.pipeline_rabi_potato_crop_area;
                        //obj.pipeline_rabi_potato_fundingsource = result.pipeline_rabi_potato_fundingsource;

                        //obj.pipeline_rabi_potato_irri_area = result.pipeline_rabi_potato_irri_area;
                        //obj.pipeline_rabi_potato_waterdemand = result.pipeline_rabi_potato_waterdemand;
                        //obj.pipeline_rabi_potato_pipeline_waterdemand = result.pipeline_rabi_potato_pipeline_waterdemand;
                        //obj.pipeline_rabi_potato_reduction_water_demand = result.pipeline_rabi_potato_reduction_water_demand;

                        //rabi cucumber

                        //obj.pipeline_rabi_cucumber_crop_area = result.pipeline_rabi_cucumber_crop_area;
                        //obj.pipeline_rabi_cucumber_fundingsource = result.pipeline_rabi_cucumber_fundingsource;

                        //obj.pipeline_rabi_cucumber_irri_area = result.pipeline_rabi_cucumber_irri_area;
                        //obj.pipeline_rabi_cucumber_waterdemand = result.pipeline_rabi_cucumber_waterdemand;
                        //obj.pipeline_rabi_cucumber_pipeline_waterdemand = result.pipeline_rabi_cucumber_pipeline_waterdemand;
                        //obj.pipeline_rabi_cucumber_reduction_water_demand = result.pipeline_rabi_cucumber_reduction_water_demand;

                        //rabi ragi

                        obj.pipeline_rabi_ragi_crop_area = result.pipeline_rabi_ragi_crop_area;
                        obj.pipeline_rabi_ragi_fundingsource = result.pipeline_rabi_ragi_fundingsource;

                        obj.pipeline_rabi_ragi_irri_area = result.pipeline_rabi_ragi_irri_area;
                        obj.pipeline_rabi_ragi_waterdemand = result.pipeline_rabi_ragi_waterdemand;
                        obj.pipeline_rabi_ragi_pipeline_waterdemand = result.pipeline_rabi_ragi_pipeline_waterdemand;
                        obj.pipeline_rabi_ragi_reduction_water_demand = result.pipeline_rabi_ragi_reduction_water_demand;

                        //rabi sugarcane

                        obj.pipeline_rabi_sugarcane_crop_area = result.pipeline_rabi_sugarcane_crop_area;
                        obj.pipeline_rabi_sugarcane_fundingsource = result.pipeline_rabi_sugarcane_fundingsource;

                        obj.pipeline_rabi_sugarcane_irri_area = result.pipeline_rabi_sugarcane_irri_area;
                        obj.pipeline_rabi_sugarcane_waterdemand = result.pipeline_rabi_sugarcane_waterdemand;
                        obj.pipeline_rabi_sugarcane_pipeline_waterdemand = result.pipeline_rabi_sugarcane_pipeline_waterdemand;
                        obj.pipeline_rabi_sugarcane_reduction_water_demand = result.pipeline_rabi_sugarcane_reduction_water_demand;


                        //Rabi Maize
                        obj.pipeline_rabi_maize_crop_area = result.pipeline_rabi_maize_crop_area;
                        obj.pipeline_rabi_maize_fundingsource = result.pipeline_rabi_maize_fundingsource;

                        obj.pipeline_rabi_maize_irri_area = result.pipeline_rabi_maize_irri_area;
                        obj.pipeline_rabi_maize_waterdemand = result.pipeline_rabi_maize_waterdemand;
                        obj.pipeline_rabi_maize_pipeline_waterdemand = result.pipeline_rabi_maize_pipeline_waterdemand;
                        obj.pipeline_rabi_maize_reduction_water_demand = result.pipeline_rabi_maize_reduction_water_demand;

                        //rabi fodder

                        obj.pipeline_rabi_fodder_crop_area = result.pipeline_rabi_fodder_crop_area;
                        obj.pipeline_rabi_fodder_fundingsource = result.pipeline_rabi_fodder_fundingsource;

                        obj.pipeline_rabi_fodder_irri_area = result.pipeline_rabi_fodder_irri_area;
                        obj.pipeline_rabi_fodder_waterdemand = result.pipeline_rabi_fodder_waterdemand;
                        obj.pipeline_rabi_fodder_pipeline_waterdemand = result.pipeline_rabi_fodder_pipeline_waterdemand;
                        obj.pipeline_rabi_fodder_reduction_water_demand = result.pipeline_rabi_fodder_reduction_water_demand;

                        //rabi paddy

                        obj.pipeline_rabi_paddy_crop_area = result.pipeline_rabi_paddy_crop_area;
                        obj.pipeline_rabi_paddy_fundingsource = result.pipeline_rabi_paddy_fundingsource;

                        obj.pipeline_rabi_paddy_irri_area = result.pipeline_rabi_paddy_irri_area;
                        obj.pipeline_rabi_paddy_waterdemand = result.pipeline_rabi_paddy_waterdemand;
                        obj.pipeline_rabi_paddy_pipeline_waterdemand = result.pipeline_rabi_paddy_pipeline_waterdemand;
                        obj.pipeline_rabi_paddy_reduction_water_demand = result.pipeline_rabi_paddy_reduction_water_demand;

                        //rabi alfalfa

                        obj.pipeline_rabi_alfalfa_crop_area = result.pipeline_rabi_alfalfa_crop_area;
                        obj.pipeline_rabi_alfalfa_fundingsource = result.pipeline_rabi_alfalfa_fundingsource;

                        obj.pipeline_rabi_alfalfa_irri_area = result.pipeline_rabi_alfalfa_irri_area;
                        obj.pipeline_rabi_alfalfa_waterdemand = result.pipeline_rabi_alfalfa_waterdemand;
                        obj.pipeline_rabi_alfalfa_pipeline_waterdemand = result.pipeline_rabi_alfalfa_pipeline_waterdemand;
                        obj.pipeline_rabi_alfalfa_reduction_water_demand = result.pipeline_rabi_alfalfa_reduction_water_demand;

                        // rabi onion

                        //obj.pipeline_rabi_onion_crop_area = result.pipeline_rabi_onion_crop_area;
                        //obj.pipeline_rabi_onion_fundingsource = result.pipeline_rabi_onion_fundingsource;

                        //obj.pipeline_rabi_onion_irri_area = result.pipeline_rabi_onion_irri_area;
                        //obj.pipeline_rabi_onion_waterdemand = result.pipeline_rabi_onion_waterdemand;
                        //obj.pipeline_rabi_onion_pipeline_waterdemand = result.pipeline_rabi_onion_pipeline_waterdemand;
                        //obj.pipeline_rabi_onion_reduction_water_demand = result.pipeline_rabi_onion_reduction_water_demand;

                        //rabi horticulture

                        obj.pipeline_rabi_horticulture_crop_area = result.pipeline_rabi_horticulture_crop_area;
                        obj.pipeline_rabi_horticulture_fundingsource = result.pipeline_rabi_horticulture_fundingsource;

                        obj.pipeline_rabi_horticulture_irri_area = result.pipeline_rabi_horticulture_irri_area;
                        obj.pipeline_rabi_horticulture_waterdemand = result.pipeline_rabi_horticulture_waterdemand;
                        obj.pipeline_rabi_horticulture_pipeline_waterdemand = result.pipeline_rabi_horticulture_pipeline_waterdemand;
                        obj.pipeline_rabi_horticulture_reduction_water_demand = result.pipeline_rabi_horticulture_reduction_water_demand;

                        //rabi sunflower
                        obj.pipeline_rabi_sunflower_crop_area = result.pipeline_rabi_sunflower_crop_area;
                        obj.pipeline_rabi_sunflower_fundingsource = result.pipeline_rabi_sunflower_fundingsource;

                        obj.pipeline_rabi_sunflower_irri_area = result.pipeline_rabi_sunflower_irri_area;
                        obj.pipeline_rabi_sunflower_waterdemand = result.pipeline_rabi_sunflower_waterdemand;
                        obj.pipeline_rabi_sunflower_pipeline_waterdemand = result.pipeline_rabi_sunflower_pipeline_waterdemand;
                        obj.pipeline_rabi_sunflower_reduction_water_demand = result.pipeline_rabi_sunflower_reduction_water_demand;

                        //rabi crops total

                        obj.pipeline_rabi_total_waterdemand = result.pipeline_rabi_total_waterdemand;
                        obj.pipeline_rabi_total_rabi_waterdemand = result.pipeline_rabi_total_rabi_waterdemand;
                        obj.pipeline_rabi_total_reduction_waterdemand = result.pipeline_rabi_total_reduction_waterdemand;


                        //summer sericulture

                        obj.pipeline_summer_sericulture_crop_area = result.pipeline_summer_sericulture_crop_area;
                        obj.pipeline_summer_sericulture_fundingsource = result.pipeline_summer_sericulture_fundingsource;

                        obj.pipeline_summer_sericulture_irri_area = result.pipeline_summer_sericulture_irri_area;
                        obj.pipeline_summer_sericulture_waterdemand = result.pipeline_summer_sericulture_waterdemand;
                        obj.pipeline_summer_sericulture_pipeline_waterdemand = result.pipeline_summer_sericulture_pipeline_waterdemand;
                        obj.pipeline_summer_sericulture_reduction_water_demand = result.pipeline_summer_sericulture_reduction_water_demand;

                        //summer tomoto

                        obj.pipeline_summer_tomoto_crop_area = result.pipeline_summer_tomoto_crop_area;
                        obj.pipeline_summer_tomoto_fundingsource = result.pipeline_summer_tomoto_fundingsource;

                        obj.pipeline_summer_tomoto_irri_area = result.pipeline_summer_tomoto_irri_area;
                        obj.pipeline_summer_tomoto_waterdemand = result.pipeline_summer_tomoto_waterdemand;
                        obj.pipeline_summer_tomoto_pipeline_waterdemand = result.pipeline_summer_tomoto_pipeline_waterdemand;
                        obj.pipeline_summer_tomoto_reduction_water_demand = result.pipeline_summer_tomoto_reduction_water_demand;

                        //sumer cabbage

                        //obj.pipeline_summer_cabbage_crop_area = result.pipeline_summer_cabbage_crop_area;
                        //obj.pipeline_summer_cabbage_fundingsource = result.pipeline_summer_cabbage_fundingsource;

                        //obj.pipeline_summer_cabbage_irri_area = result.pipeline_summer_cabbage_irri_area;
                        //obj.pipeline_summer_cabbage_waterdemand = result.pipeline_summer_cabbage_waterdemand;
                        //obj.pipeline_summer_cabbage_pipeline_waterdemand = result.pipeline_summer_cabbage_pipeline_waterdemand;
                        //obj.pipeline_summer_cabbage_reduction_water_demand = result.pipeline_summer_cabbage_reduction_water_demand;

                        //summer beans

                        //obj.pipeline_summer_beans_crop_area = result.pipeline_summer_beans_crop_area;
                        //obj.pipeline_summer_beans_fundingsource = result.pipeline_summer_beans_fundingsource;

                        //obj.pipeline_summer_beans_irri_area = result.pipeline_summer_beans_irri_area;
                        //obj.pipeline_summer_beans_waterdemand = result.pipeline_summer_beans_waterdemand;
                        //obj.pipeline_summer_beans_pipeline_waterdemand = result.pipeline_summer_beans_pipeline_waterdemand;
                        //obj.pipeline_summer_beans_reduction_water_demand = result.pipeline_summer_beans_reduction_water_demand;

                        //summer floriculture

                        obj.pipeline_summer_floriculture_crop_area = result.pipeline_summer_floriculture_crop_area;
                        obj.pipeline_summer_floriculture_fundingsource = result.pipeline_summer_floriculture_fundingsource;

                        obj.pipeline_summer_floriculture_irri_area = result.pipeline_summer_floriculture_irri_area;
                        obj.pipeline_summer_floriculture_waterdemand = result.pipeline_summer_floriculture_waterdemand;
                        obj.pipeline_summer_floriculture_pipeline_waterdemand = result.pipeline_summer_floriculture_pipeline_waterdemand;
                        obj.pipeline_summer_floriculture_reduction_water_demand = result.pipeline_summer_floriculture_reduction_water_demand;

                        //summer maize
                        obj.pipeline_summer_maize_crop_area = result.pipeline_summer_maize_crop_area;
                        obj.pipeline_summer_maize_fundingsource = result.pipeline_summer_maize_fundingsource;

                        obj.pipeline_summer_maize_irri_area = result.pipeline_summer_maize_irri_area;
                        obj.pipeline_summer_maize_waterdemand = result.pipeline_summer_maize_waterdemand;
                        obj.pipeline_summer_maize_pipeline_waterdemand = result.pipeline_summer_maize_pipeline_waterdemand;
                        obj.pipeline_summer_maize_reduction_water_demand = result.pipeline_summer_maize_pipeline_waterdemand;

                        //summer fodder
                        obj.pipeline_summer_fodder_crop_area = result.pipeline_summer_fodder_crop_area;
                        obj.pipeline_summer_fodder_fundingsource = result.pipeline_summer_fodder_fundingsource;

                        obj.pipeline_summer_fodder_irri_area = result.pipeline_summer_fodder_irri_area;
                        obj.pipeline_summer_fodder_waterdemand = result.pipeline_summer_fodder_waterdemand;
                        obj.pipeline_summer_fodder_pipeline_waterdemand = result.pipeline_summer_fodder_pipeline_waterdemand;
                        obj.pipeline_summer_fodder_reduction_water_demand = result.pipeline_summer_fodder_reduction_water_demand;

                        //summer sugarcane

                        obj.pipeline_summer_sugarcane_crop_area = result.pipeline_summer_sugarcane_crop_area;
                        obj.pipeline_summer_sugarcane_fundingsource = result.pipeline_summer_sugarcane_fundingsource;

                        obj.pipeline_summer_sugarcane_irri_area = result.pipeline_summer_sugarcane_irri_area;
                        obj.pipeline_summer_sugarcane_waterdemand = result.pipeline_summer_sugarcane_waterdemand;
                        obj.pipeline_summer_sugarcane_pipeline_waterdemand = result.pipeline_summer_sugarcane_pipeline_waterdemand;
                        obj.pipeline_summer_sugarcane_reduction_water_demand = result.pipeline_summer_sugarcane_reduction_water_demand;


                        //summer crops total
                        obj.pipeline_summer_total_waterdemand = result.pipeline_summer_total_waterdemand;
                        obj.pipeline_summer_total_summer_waterdemand = result.pipeline_summer_total_summer_waterdemand;
                        obj.pipeline_summer_total_reduction_waterdemand = result.pipeline_summer_total_reduction_waterdemand;

                        //annual total
                        obj.pipeline_annual_reduction_waterdemand = result.pipeline_annual_reduction_waterdemand;

                        obj.latitude = result.latitude;
                        obj.longitude = result.longitude;

                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        obj.date_time = Today1;

                        //obj.pipeline_kharif_water_demand = result.pipeline_kharif_water_demand;
                        //obj.pipeline_kharif_water_save = result.pipeline_kharif_water_save;
                        //obj.pipeline_rabi_water_demand = result.pipeline_rabi_water_demand;
                        //obj.pipeline_rabi_water_save = result.pipeline_rabi_water_save;
                        //obj.pipeline_summercrop_water_demand = result.pipeline_summercrop_water_demand;
                        //obj.pipeline_summercrop_water_save = result.pipeline_summercrop_water_save;


                        //new columns water requirement
                        obj.pipeline_kharif_paddy_water_req = result.pipeline_kharif_paddy_water_req;
                        obj.pipeline_kharif_ragi_water_req = result.pipeline_kharif_ragi_water_req;
                        obj.pipeline_kharif_groundnut_water_req = result.pipeline_kharif_groundnut_water_req;
                        obj.pipeline_kharif_sugarcane_water_req = result.pipeline_kharif_sugarcane_water_req;
                        obj.pipeline_kharif_tomoto_water_req = result.pipeline_kharif_tomoto_water_req;
                        //obj.pipeline_kharif_cabbage_water_req = result.pipeline_kharif_cabbage_water_req;
                        //obj.pipeline_kharif_beans_water_req = result.pipeline_kharif_beans_water_req;
                        obj.pipeline_kharif_floriculture_water_req = result.pipeline_kharif_floriculture_water_req;
                        obj.pipeline_kharif_sericulture_water_req = result.pipeline_kharif_sericulture_water_req;
                        // obj.pipeline_kharif_cucumber_water_req = result.pipeline_kharif_cucumber_water_req;
                        obj.pipeline_kharif_banana_water_req = result.pipeline_kharif_banana_water_req;
                        obj.pipeline_kharif_fodder_water_req = result.pipeline_kharif_fodder_water_req;
                        obj.pipeline_kharif_maize_water_req = result.pipeline_kharif_maize_water_req;
                        //obj.pipeline_kharif_potato_water_req = result.pipeline_kharif_potato_water_req;
                        obj.pipeline_kharif_chillies_water_req = result.pipeline_kharif_chillies_water_req;
                        obj.pipeline_kharif_cotton_water_req = result.pipeline_kharif_cotton_water_req;
                        obj.pipeline_kharif_melon_water_req = result.pipeline_kharif_melon_water_req;
                        obj.pipeline_kharif_citrus_water_req = result.pipeline_kharif_citrus_water_req;
                        // obj.pipeline_kharif_peanut_water_req = result.pipeline_kharif_peanut_water_req;
                        obj.pipeline_kharif_horticulture_water_req = result.pipeline_kharif_horticulture_water_req;
                        obj.pipeline_summer_sugarcane_irri_area = result.pipeline_summer_sugarcane_irri_area;

                        obj.pipeline_rabi_sericulture_water_req = result.pipeline_rabi_sericulture_water_req;
                        obj.pipeline_rabi_tomoto_water_req = result.pipeline_rabi_tomoto_water_req;
                        // obj.pipeline_rabi_cabbage_water_req = result.pipeline_rabi_cabbage_water_req;
                        // obj.pipeline_rabi_beans_water_req = result.pipeline_rabi_beans_water_req;
                        obj.pipeline_rabi_floriculture_water_req = result.pipeline_rabi_floriculture_water_req;
                        //obj.pipeline_rabi_potato_water_req = result.pipeline_rabi_potato_water_req;
                        //obj.pipeline_rabi_cucumber_water_req = result.pipeline_rabi_cucumber_water_req;
                        obj.pipeline_rabi_ragi_water_req = result.pipeline_rabi_ragi_water_req;
                        obj.pipeline_rabi_sugarcane_water_req = result.pipeline_rabi_sugarcane_water_req;
                        obj.pipeline_rabi_maize_water_req = result.pipeline_rabi_maize_water_req;
                        obj.pipeline_rabi_fodder_water_req = result.pipeline_rabi_fodder_water_req;
                        obj.pipeline_rabi_paddy_water_req = result.pipeline_rabi_paddy_water_req;
                        obj.pipeline_rabi_alfalfa_water_req = result.pipeline_rabi_alfalfa_water_req;
                        // obj.pipeline_rabi_onion_water_req = result.pipeline_rabi_onion_water_req;
                        obj.pipeline_rabi_horticulture_water_req = result.pipeline_rabi_horticulture_water_req;
                        obj.pipeline_rabi_sunflower_water_req = result.pipeline_rabi_sunflower_water_req;

                        obj.pipeline_summer_sericulture_water_req = result.pipeline_summer_sericulture_water_req;
                        obj.pipeline_summer_tomoto_water_req = result.pipeline_summer_tomoto_water_req;
                        //obj.pipeline_summer_cabbage_water_req = result.pipeline_summer_cabbage_water_req;
                        //obj.pipeline_summer_beans_water_req = result.pipeline_summer_beans_water_req;
                        obj.pipeline_summer_floriculture_water_req = result.pipeline_summer_floriculture_water_req;
                        obj.pipeline_summer_maize_water_req = result.pipeline_summer_maize_water_req;
                        obj.pipeline_summer_fodder_water_req = result.pipeline_summer_fodder_water_req;
                        obj.pipeline_summer_sugarcane_water_req = result.pipeline_summer_sugarcane_water_req;

                        obj.pipeline_other_funding_source = result.pipeline_other_funding_source;

                        //add crops
                        obj.pipeline_kharif_othercrop_name1 = result.pipeline_kharif_othercrop_name1;
                        obj.pipeline_kharif_othercrop_area1 = result.pipeline_kharif_othercrop_area1;
                        obj.pipeline_kharif_othercrop_irri_area1 = result.pipeline_kharif_othercrop_irri_area1;
                        obj.pipeline_kharif_othercrop_water_req1 = result.pipeline_kharif_othercrop_water_req1;
                        obj.pipeline_kharif_othercrop_waterdemand1 = result.pipeline_kharif_othercrop_waterdemand1;
                        obj.pipeline_kharif_othercrop_pipeline_waterdemand1 = result.pipeline_kharif_othercrop_pipeline_waterdemand1;
                        obj.pipeline_kharif_othercrop_reduc_gw_demand1 = result.pipeline_kharif_othercrop_reduc_gw_demand1;

                        obj.pipeline_kharif_othercrop_name2 = result.pipeline_kharif_othercrop_name2;
                        obj.pipeline_kharif_othercrop_area2 = result.pipeline_kharif_othercrop_area2;
                        obj.pipeline_kharif_othercrop_irri_area2 = result.pipeline_kharif_othercrop_irri_area2;
                        obj.pipeline_kharif_othercrop_water_req2 = result.pipeline_kharif_othercrop_water_req2;
                        obj.pipeline_kharif_othercrop_waterdemand2 = result.pipeline_kharif_othercrop_waterdemand2;
                        obj.pipeline_kharif_othercrop_pipeline_waterdemand2 = result.pipeline_kharif_othercrop_pipeline_waterdemand2;
                        obj.pipeline_kharif_othercrop_reduc_gw_demand2 = result.pipeline_kharif_othercrop_reduc_gw_demand2;

                        obj.pipeline_kharif_othercrop_name3 = result.pipeline_kharif_othercrop_name3;
                        obj.pipeline_kharif_othercrop_area3 = result.pipeline_kharif_othercrop_area3;
                        obj.pipeline_kharif_othercrop_irri_area3 = result.pipeline_kharif_othercrop_irri_area3;
                        obj.pipeline_kharif_othercrop_water_req3 = result.pipeline_kharif_othercrop_water_req3;
                        obj.pipeline_kharif_othercrop_waterdemand3 = result.pipeline_kharif_othercrop_waterdemand3;
                        obj.pipeline_kharif_othercrop_pipeline_waterdemand3 = result.pipeline_kharif_othercrop_pipeline_waterdemand3;
                        obj.pipeline_kharif_othercrop_reduc_gw_demand3 = result.pipeline_kharif_othercrop_reduc_gw_demand3;

                        obj.pipeline_kharif_othercrop_name4 = result.pipeline_kharif_othercrop_name4;
                        obj.pipeline_kharif_othercrop_area4 = result.pipeline_kharif_othercrop_area4;
                        obj.pipeline_kharif_othercrop_irri_area4 = result.pipeline_kharif_othercrop_irri_area4;
                        obj.pipeline_kharif_othercrop_water_req4 = result.pipeline_kharif_othercrop_water_req4;
                        obj.pipeline_kharif_othercrop_waterdemand4 = result.pipeline_kharif_othercrop_waterdemand4;
                        obj.pipeline_kharif_othercrop_pipeline_waterdemand4 = result.pipeline_kharif_othercrop_pipeline_waterdemand4;
                        obj.pipeline_kharif_othercrop_reduc_gw_demand4 = result.pipeline_kharif_othercrop_reduc_gw_demand4;

                        obj.pipeline_kharif_othercrop_name5 = result.pipeline_kharif_othercrop_name5;
                        obj.pipeline_kharif_othercrop_area5 = result.pipeline_kharif_othercrop_area5;
                        obj.pipeline_kharif_othercrop_irri_area5 = result.pipeline_kharif_othercrop_irri_area5;
                        obj.pipeline_kharif_othercrop_water_req5 = result.pipeline_kharif_othercrop_water_req5;
                        obj.pipeline_kharif_othercrop_waterdemand5 = result.pipeline_kharif_othercrop_waterdemand5;
                        obj.pipeline_kharif_othercrop_pipeline_waterdemand5 = result.pipeline_kharif_othercrop_pipeline_waterdemand5;
                        obj.pipeline_kharif_othercrop_reduc_gw_demand5 = result.pipeline_kharif_othercrop_reduc_gw_demand5;

                        obj.pipeline_rabi_othercrop_name1 = result.pipeline_rabi_othercrop_name1;
                        obj.pipeline_rabi_othercrop_area1 = result.pipeline_rabi_othercrop_area1;
                        obj.pipeline_rabi_othercrop_irri_area1 = result.pipeline_rabi_othercrop_irri_area1;
                        obj.pipeline_rabi_othercrop_water_req1 = result.pipeline_rabi_othercrop_water_req1;
                        obj.pipeline_rabi_othercrop_waterdemand1 = result.pipeline_rabi_othercrop_waterdemand1;
                        obj.pipeline_rabi_othercrop_pipeline_waterdemand1 = result.pipeline_rabi_othercrop_pipeline_waterdemand1;
                        obj.pipeline_rabi_othercrop_reduc_gw_demand1 = result.pipeline_rabi_othercrop_reduc_gw_demand1;

                        obj.pipeline_rabi_othercrop_name2 = result.pipeline_rabi_othercrop_name2;
                        obj.pipeline_rabi_othercrop_area2 = result.pipeline_rabi_othercrop_area2;
                        obj.pipeline_rabi_othercrop_irri_area2 = result.pipeline_rabi_othercrop_irri_area2;
                        obj.pipeline_rabi_othercrop_water_req2 = result.pipeline_rabi_othercrop_water_req2;
                        obj.pipeline_rabi_othercrop_waterdemand2 = result.pipeline_rabi_othercrop_waterdemand2;
                        obj.pipeline_rabi_othercrop_pipeline_waterdemand2 = result.pipeline_rabi_othercrop_pipeline_waterdemand2;
                        obj.pipeline_rabi_othercrop_reduc_gw_demand2 = result.pipeline_rabi_othercrop_reduc_gw_demand2;

                        obj.pipeline_rabi_othercrop_name3 = result.pipeline_rabi_othercrop_name3;
                        obj.pipeline_rabi_othercrop_area3 = result.pipeline_rabi_othercrop_area3;
                        obj.pipeline_rabi_othercrop_irri_area3 = result.pipeline_rabi_othercrop_irri_area3;
                        obj.pipeline_rabi_othercrop_water_req3 = result.pipeline_rabi_othercrop_water_req3;
                        obj.pipeline_rabi_othercrop_waterdemand3 = result.pipeline_rabi_othercrop_waterdemand3;
                        obj.pipeline_rabi_othercrop_pipeline_waterdemand3 = result.pipeline_rabi_othercrop_pipeline_waterdemand3;
                        obj.pipeline_rabi_othercrop_reduc_gw_demand3 = result.pipeline_rabi_othercrop_reduc_gw_demand3;

                        obj.pipeline_rabi_othercrop_name4 = result.pipeline_rabi_othercrop_name4;
                        obj.pipeline_rabi_othercrop_area4 = result.pipeline_rabi_othercrop_area4;
                        obj.pipeline_rabi_othercrop_irri_area4 = result.pipeline_rabi_othercrop_irri_area4;
                        obj.pipeline_rabi_othercrop_water_req4 = result.pipeline_rabi_othercrop_water_req4;
                        obj.pipeline_rabi_othercrop_waterdemand4 = result.pipeline_rabi_othercrop_waterdemand4;
                        obj.pipeline_rabi_othercrop_pipeline_waterdemand4 = result.pipeline_rabi_othercrop_pipeline_waterdemand4;
                        obj.pipeline_rabi_othercrop_reduc_gw_demand4 = result.pipeline_rabi_othercrop_reduc_gw_demand4;

                        obj.pipeline_rabi_othercrop_name5 = result.pipeline_rabi_othercrop_name5;
                        obj.pipeline_rabi_othercrop_area5 = result.pipeline_rabi_othercrop_area5;
                        obj.pipeline_rabi_othercrop_irri_area5 = result.pipeline_rabi_othercrop_irri_area5;
                        obj.pipeline_rabi_othercrop_water_req5 = result.pipeline_rabi_othercrop_water_req5;
                        obj.pipeline_rabi_othercrop_waterdemand5 = result.pipeline_rabi_othercrop_waterdemand5;
                        obj.pipeline_rabi_othercrop_pipeline_waterdemand5 = result.pipeline_rabi_othercrop_pipeline_waterdemand5;
                        obj.pipeline_rabi_othercrop_reduc_gw_demand5 = result.pipeline_rabi_othercrop_reduc_gw_demand5;

                        obj.pipeline_summer_othercrop_name1 = result.pipeline_summer_othercrop_name1;
                        obj.pipeline_summer_othercrop_area1 = result.pipeline_summer_othercrop_area1;
                        obj.pipeline_summer_othercrop_irri_area1 = result.pipeline_summer_othercrop_irri_area1;
                        obj.pipeline_summer_othercrop_water_req1 = result.pipeline_summer_othercrop_water_req1;
                        obj.pipeline_summer_othercrop_waterdemand1 = result.pipeline_summer_othercrop_waterdemand1;
                        obj.pipeline_summer_othercrop_pipeline_waterdemand1 = result.pipeline_summer_othercrop_pipeline_waterdemand1;
                        obj.pipeline_summer_othercrop_reduc_gw_demand1 = result.pipeline_summer_othercrop_reduc_gw_demand1;

                        obj.pipeline_summer_othercrop_name2 = result.pipeline_summer_othercrop_name2;
                        obj.pipeline_summer_othercrop_area2 = result.pipeline_summer_othercrop_area2;
                        obj.pipeline_summer_othercrop_irri_area2 = result.pipeline_summer_othercrop_irri_area2;
                        obj.pipeline_summer_othercrop_water_req2 = result.pipeline_summer_othercrop_water_req2;
                        obj.pipeline_summer_othercrop_waterdemand2 = result.pipeline_summer_othercrop_waterdemand2;
                        obj.pipeline_summer_othercrop_pipeline_waterdemand2 = result.pipeline_summer_othercrop_pipeline_waterdemand2;
                        obj.pipeline_summer_othercrop_reduc_gw_demand2 = result.pipeline_summer_othercrop_reduc_gw_demand2;

                        obj.pipeline_summer_othercrop_name3 = result.pipeline_summer_othercrop_name3;
                        obj.pipeline_summer_othercrop_area3 = result.pipeline_summer_othercrop_area3;
                        obj.pipeline_summer_othercrop_irri_area3 = result.pipeline_summer_othercrop_irri_area3;
                        obj.pipeline_summer_othercrop_water_req3 = result.pipeline_summer_othercrop_water_req3;
                        obj.pipeline_summer_othercrop_waterdemand3 = result.pipeline_summer_othercrop_waterdemand3;
                        obj.pipeline_summer_othercrop_pipeline_waterdemand3 = result.pipeline_summer_othercrop_pipeline_waterdemand3;
                        obj.pipeline_summer_othercrop_reduc_gw_demand3 = result.pipeline_summer_othercrop_reduc_gw_demand3;

                        obj.pipeline_summer_othercrop_name4 = result.pipeline_summer_othercrop_name4;
                        obj.pipeline_summer_othercrop_area4 = result.pipeline_summer_othercrop_area4;
                        obj.pipeline_summer_othercrop_irri_area4 = result.pipeline_summer_othercrop_irri_area4;
                        obj.pipeline_summer_othercrop_water_req4 = result.pipeline_summer_othercrop_water_req4;
                        obj.pipeline_summer_othercrop_waterdemand4 = result.pipeline_summer_othercrop_waterdemand4;
                        obj.pipeline_summer_othercrop_pipeline_waterdemand4 = result.pipeline_summer_othercrop_pipeline_waterdemand4;
                        obj.pipeline_summer_othercrop_reduc_gw_demand4 = result.pipeline_summer_othercrop_reduc_gw_demand4;

                        obj.pipeline_summer_othercrop_name5 = result.pipeline_summer_othercrop_name5;
                        obj.pipeline_summer_othercrop_area5 = result.pipeline_summer_othercrop_area5;
                        obj.pipeline_summer_othercrop_irri_area5 = result.pipeline_summer_othercrop_irri_area5;
                        obj.pipeline_summer_othercrop_water_req5 = result.pipeline_summer_othercrop_water_req5;
                        obj.pipeline_summer_othercrop_waterdemand5 = result.pipeline_summer_othercrop_waterdemand5;
                        obj.pipeline_summer_othercrop_pipeline_waterdemand5 = result.pipeline_summer_othercrop_pipeline_waterdemand5;
                        obj.pipeline_summer_othercrop_reduc_gw_demand5 = result.pipeline_summer_othercrop_reduc_gw_demand5;

                        //crops  others
                        //obj.pipeline_kharif_othercrop_name = result.pipeline_kharif_othercrop_name;
                        //obj.pipeline_kharif_othercrop_area = result.pipeline_kharif_othercrop_area;
                        //obj.pipeline_kharif_othercrop_irri_area = result.pipeline_kharif_othercrop_irri_area;
                        //obj.pipeline_kharif_othercrop_water_req = result.pipeline_kharif_othercrop_water_req;
                        //obj.pipeline_kharif_othercrop_waterdemand = result.pipeline_kharif_othercrop_waterdemand;
                        //obj.pipeline_kharif_othercrop_pipeline_waterdemand = result.pipeline_kharif_othercrop_pipeline_waterdemand;
                        //obj.pipeline_kharif_othercrop_reduc_gw_demand = result.pipeline_kharif_othercrop_reduc_gw_demand;


                        //obj.pipeline_rabi_othercrop_name = result.pipeline_rabi_othercrop_name;
                        //obj.pipeline_rabi_othercrop_area = result.pipeline_rabi_othercrop_area;
                        //obj.pipeline_rabi_othercrop_irri_area = result.pipeline_rabi_othercrop_irri_area;
                        //obj.pipeline_rabi_othercrop_water_req = result.pipeline_rabi_othercrop_water_req;
                        //obj.pipeline_rabi_othercrop_waterdemand = result.pipeline_rabi_othercrop_waterdemand;
                        //obj.pipeline_rabi_othercrop_pipeline_waterdemand = result.pipeline_rabi_othercrop_pipeline_waterdemand;
                        //obj.pipeline_rabi_othercrop_reduc_gw_demand = result.pipeline_rabi_othercrop_reduc_gw_demand;

                        //obj.pipeline_summer_othercrop_name = result.pipeline_summer_othercrop_name;
                        //obj.pipeline_summer_othercrop_area = result.pipeline_summer_othercrop_area;
                        //obj.pipeline_summer_othercrop_irri_area = result.pipeline_summer_othercrop_irri_area;
                        //obj.pipeline_summer_othercrop_water_req = result.pipeline_summer_othercrop_water_req;
                        //obj.pipeline_summer_othercrop_waterdemand = result.pipeline_summer_othercrop_waterdemand;
                        //obj.pipeline_summer_othercrop_pipeline_waterdemand = result.pipeline_summer_othercrop_pipeline_waterdemand;
                        //obj.pipeline_summer_othercrop_reduc_gw_demand = result.pipeline_summer_othercrop_reduc_gw_demand;

                        ABE.obj_pipeline.Add(obj);
                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json(ex);
                }
            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }


        public ActionResult ReductionSaveData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_demandside_reduction_saveddata>(Data);
                    var obj = new abhy_demandside_reduction_saveddata();

                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Details = ABE.obj_reduction.Where(x => x.statename == StateName && x.districtname == DistName && x.blockname == BlockName && x.gpname == GramName).ToList();
                    if (Details.Count != 0)
                    {
                        var Data11 = Details.LastOrDefault();

                        Data11.blockname = BlockName;
                        Data11.districtname = DistName;
                        Data11.gpname = GramName;
                        Data11.statename = StateName;
                        Data11.userid = Convert.ToInt32(userid);
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        Data11.date_time = Today1;
                        Data11.reduction_kharif_paddy_crop_area = result.reduction_kharif_paddy_crop_area;
                        Data11.reduction_kharif_paddy_quatum_value = result.reduction_kharif_paddy_quatum_value;
                        Data11.reduction_kharif_paddy_fundingsource = result.reduction_kharif_paddy_fundingsource;
                        Data11.reduction_kharif_ragi_crop_area = result.reduction_kharif_ragi_crop_area;
                        Data11.reduction_kharif_ragi_quatum_value = result.reduction_kharif_ragi_quatum_value;
                        Data11.reduction_kharif_ragi_fundingsource = result.reduction_kharif_ragi_fundingsource;
                        Data11.reduction_kharif_groundnut_crop_area = result.reduction_kharif_groundnut_crop_area;
                        Data11.reduction_kharif_groundnut_quatum_value = result.reduction_kharif_groundnut_quatum_value;
                        Data11.reduction_kharif_groundnut_fundingsource = result.reduction_kharif_groundnut_fundingsource;
                        Data11.reduction_kharif_sugarcane_crop_area = result.reduction_kharif_sugarcane_crop_area;
                        Data11.reduction_kharif_sugarcane_quatum_value = result.reduction_kharif_sugarcane_quatum_value;
                        Data11.reduction_kharif_sugarcane_fundingsource = result.reduction_kharif_sugarcane_fundingsource;
                        Data11.reduction_kharif_tomoto_crop_area = result.reduction_kharif_tomoto_crop_area;
                        Data11.reduction_kharif_tomoto_quatum_value = result.reduction_kharif_tomoto_quatum_value;
                        Data11.reduction_kharif_tomoto_fundingsource = result.reduction_kharif_tomoto_fundingsource;

                        //Data11.reduction_kharif_cabbage_crop_area = result.reduction_kharif_cabbage_crop_area;
                        //Data11.reduction_kharif_cabbage_quatum_value = result.reduction_kharif_cabbage_quatum_value;
                        //Data11.reduction_kharif_cabbage_fundingsource = result.reduction_kharif_cabbage_fundingsource;

                        //Data11.reduction_kharif_beans_crop_area = result.reduction_kharif_beans_crop_area;
                        //Data11.reduction_kharif_beans_quatum_value = result.reduction_kharif_beans_quatum_value;
                        //Data11.reduction_kharif_beans_fundingsource = result.reduction_kharif_beans_fundingsource;

                        Data11.reduction_kharif_floriculture_crop_area = result.reduction_kharif_floriculture_crop_area;
                        Data11.reduction_kharif_floriculture_quatum_value = result.reduction_kharif_floriculture_quatum_value;
                        Data11.reduction_kharif_floriculture_fundingsource = result.reduction_kharif_floriculture_fundingsource;
                        Data11.reduction_kharif_sericulture_crop_area = result.reduction_kharif_sericulture_crop_area;
                        Data11.reduction_kharif_sericulture_quatum_value = result.reduction_kharif_sericulture_quatum_value;
                        Data11.reduction_kharif_sericulture_fundingsource = result.reduction_kharif_sericulture_fundingsource;

                        //Data11.reduction_kharif_cucumber_crop_area = result.reduction_kharif_cucumber_crop_area;
                        //Data11.reduction_kharif_cucumber_quatum_value = result.reduction_kharif_cucumber_quatum_value;
                        //Data11.reduction_kharif_cucumber_fundingsource = result.reduction_kharif_cucumber_fundingsource;

                        Data11.reduction_kharif_banana_crop_area = result.reduction_kharif_banana_crop_area;
                        Data11.reduction_kharif_banana_quatum_value = result.reduction_kharif_banana_quatum_value;
                        Data11.reduction_kharif_banana_fundingsource = result.reduction_kharif_banana_fundingsource;
                        Data11.reduction_kharif_fodder_crop_area = result.reduction_kharif_fodder_crop_area;
                        Data11.reduction_kharif_fodder_quatum_value = result.reduction_kharif_fodder_quatum_value;
                        Data11.reduction_kharif_fodder_fundingsource = result.reduction_kharif_fodder_fundingsource;
                        Data11.reduction_kharif_maize_crop_area = result.reduction_kharif_maize_crop_area;
                        Data11.reduction_kharif_maize_quatum_value = result.reduction_kharif_maize_quatum_value;
                        Data11.reduction_kharif_maize_fundingsource = result.reduction_kharif_maize_fundingsource;

                        //Data11.reduction_kharif_potato_crop_area = result.reduction_kharif_potato_crop_area;
                        //Data11.reduction_kharif_potato_quatum_value = result.reduction_kharif_potato_quatum_value;
                        //Data11.reduction_kharif_potato_fundingsource = result.reduction_kharif_potato_fundingsource;

                        Data11.reduction_kharif_chillies_crop_area = result.reduction_kharif_chillies_crop_area;
                        Data11.reduction_kharif_chillies_quatum_value = result.reduction_kharif_chillies_quatum_value;
                        Data11.reduction_kharif_chillies_fundingsource = result.reduction_kharif_chillies_fundingsource;
                        Data11.reduction_kharif_cotton_crop_area = result.reduction_kharif_cotton_crop_area;
                        Data11.reduction_kharif_cotton_quatum_value = result.reduction_kharif_cotton_quatum_value;
                        Data11.reduction_kharif_cotton_fundingsource = result.reduction_kharif_cotton_fundingsource;
                        Data11.reduction_kharif_melon_crop_area = result.reduction_kharif_melon_crop_area;
                        Data11.reduction_kharif_melon_quatum_value = result.reduction_kharif_melon_quatum_value;
                        Data11.reduction_kharif_melon_fundingsource = result.reduction_kharif_melon_fundingsource;
                        Data11.reduction_kharif_citrus_crop_area = result.reduction_kharif_citrus_crop_area;
                        Data11.reduction_kharif_citrus_quatum_value = result.reduction_kharif_citrus_quatum_value;
                        Data11.reduction_kharif_citrus_fundingsource = result.reduction_kharif_citrus_fundingsource;

                        //Data11.reduction_kharif_peanut_crop_area = result.reduction_kharif_peanut_crop_area;
                        //Data11.reduction_kharif_peanut_quatum_value = result.reduction_kharif_peanut_quatum_value;
                        //Data11.reduction_kharif_peanut_fundingsource = result.reduction_kharif_peanut_fundingsource;

                        Data11.reduction_kharif_horticulture_crop_area = result.reduction_kharif_horticulture_crop_area;
                        Data11.reduction_kharif_horticulture_quatum_value = result.reduction_kharif_horticulture_quatum_value;
                        Data11.reduction_kharif_horticulture_fundingsource = result.reduction_kharif_horticulture_fundingsource;

                        Data11.reduction_rabi_sericulture_crop_area = result.reduction_rabi_sericulture_crop_area;
                        Data11.reduction_rabi_sericulture_quatum_value = result.reduction_rabi_sericulture_quatum_value;
                        Data11.reduction_rabi_sericulture_fundingsource = result.reduction_rabi_sericulture_fundingsource;

                        Data11.reduction_rabi_tomoto_crop_area = result.reduction_rabi_tomoto_crop_area;
                        Data11.reduction_rabi_tomoto_quatum_value = result.reduction_rabi_tomoto_quatum_value;
                        Data11.reduction_rabi_tomoto_fundingsource = result.reduction_rabi_tomoto_fundingsource;

                        //Data11.reduction_rabi_cabbage_crop_area = result.reduction_rabi_cabbage_crop_area;
                        //Data11.reduction_rabi_cabbage_quatum_value = result.reduction_rabi_cabbage_quatum_value;
                        //Data11.reduction_rabi_cabbage_fundingsource = result.reduction_rabi_cabbage_fundingsource;
                        //Data11.reduction_rabi_beans_crop_area = result.reduction_rabi_beans_crop_area;
                        //Data11.reduction_rabi_beans_quatum_value = result.reduction_rabi_beans_quatum_value;
                        //Data11.reduction_rabi_beans_fundingsource = result.reduction_rabi_beans_fundingsource;

                        Data11.reduction_rabi_floriculture_crop_area = result.reduction_rabi_floriculture_crop_area;
                        Data11.reduction_rabi_floriculture_quatum_value = result.reduction_rabi_floriculture_quatum_value;
                        Data11.reduction_rabi_floriculture_fundingsource = result.reduction_rabi_floriculture_fundingsource;

                        //Data11.reduction_rabi_potato_crop_area = result.reduction_rabi_potato_crop_area;
                        //Data11.reduction_rabi_potato_quatum_value = result.reduction_rabi_potato_quatum_value;
                        //Data11.reduction_rabi_potato_fundingsource = result.reduction_rabi_potato_fundingsource;

                        //Data11.reduction_rabi_cucumber_crop_area = result.reduction_rabi_cucumber_crop_area;
                        //Data11.reduction_rabi_cucumber_quatum_value = result.reduction_rabi_cucumber_quatum_value;
                        //Data11.reduction_rabi_cucumber_fundingsource = result.reduction_rabi_cucumber_fundingsource;

                        Data11.reduction_rabi_ragi_crop_area = result.reduction_rabi_ragi_crop_area;
                        Data11.reduction_rabi_ragi_quatum_value = result.reduction_rabi_ragi_quatum_value;
                        Data11.reduction_rabi_ragi_fundingsource = result.reduction_rabi_ragi_fundingsource;
                        Data11.reduction_rabi_sugarcane_crop_area = result.reduction_rabi_sugarcane_crop_area;
                        Data11.reduction_rabi_sugarcane_quatum_value = result.reduction_rabi_sugarcane_quatum_value;
                        Data11.reduction_rabi_sugarcane_fundingsource = result.reduction_rabi_sugarcane_fundingsource;
                        Data11.reduction_rabi_maize_crop_area = result.reduction_rabi_maize_crop_area;
                        Data11.reduction_rabi_maize_quatum_value = result.reduction_rabi_maize_quatum_value;
                        Data11.reduction_rabi_maize_fundingsource = result.reduction_rabi_maize_fundingsource;
                        Data11.reduction_rabi_fodder_crop_area = result.reduction_rabi_fodder_crop_area;
                        Data11.reduction_rabi_fodder_quatum_value = result.reduction_rabi_fodder_quatum_value;
                        Data11.reduction_rabi_fodder_fundingsource = result.reduction_rabi_fodder_fundingsource;
                        Data11.reduction_rabi_paddy_crop_area = result.reduction_rabi_paddy_crop_area;
                        Data11.reduction_rabi_paddy_quatum_value = result.reduction_rabi_paddy_quatum_value;
                        Data11.reduction_rabi_paddy_fundingsource = result.reduction_rabi_paddy_fundingsource;
                        Data11.reduction_rabi_alfalfa_crop_area = result.reduction_rabi_alfalfa_crop_area;
                        Data11.reduction_rabi_alfalfa_quatum_value = result.reduction_rabi_alfalfa_quatum_value;
                        Data11.reduction_rabi_alfalfa_fundingsource = result.reduction_rabi_alfalfa_fundingsource;

                        //Data11.reduction_rabi_onion_crop_area = result.reduction_rabi_onion_crop_area;
                        //Data11.reduction_rabi_onion_quatum_value = result.reduction_rabi_onion_quatum_value;
                        //Data11.reduction_rabi_onion_fundingsource = result.reduction_rabi_onion_fundingsource;

                        Data11.reduction_rabi_horticulture_crop_area = result.reduction_rabi_horticulture_crop_area;
                        Data11.reduction_rabi_horticulture_quatum_value = result.reduction_rabi_horticulture_quatum_value;
                        Data11.reduction_rabi_horticulture_fundingsource = result.reduction_rabi_horticulture_fundingsource;
                        Data11.reduction_rabi_sunflower_crop_area = result.reduction_rabi_sunflower_crop_area;
                        Data11.reduction_rabi_sunflower_quatum_value = result.reduction_rabi_sunflower_quatum_value;
                        Data11.reduction_rabi_sunflower_fundingsource = result.reduction_rabi_sunflower_fundingsource;

                        Data11.reduction_summer_sericulture_crop_area = result.reduction_summer_sericulture_crop_area;
                        Data11.reduction_summer_sericulture_quatum_value = result.reduction_summer_sericulture_quatum_value;
                        Data11.reduction_summer_sericulture_fundingsource = result.reduction_summer_sericulture_fundingsource;

                        Data11.reduction_summer_tomoto_crop_area = result.reduction_summer_tomoto_crop_area;
                        Data11.reduction_summer_tomoto_quatum_value = result.reduction_summer_tomoto_quatum_value;
                        Data11.reduction_summer_tomoto_fundingsource = result.reduction_summer_tomoto_fundingsource;

                        //Data11.reduction_summer_cabbage_crop_area = result.reduction_summer_cabbage_crop_area;
                        //Data11.reduction_summer_cabbage_quatum_value = result.reduction_summer_cabbage_quatum_value;
                        //Data11.reduction_summer_cabbage_fundingsource = result.reduction_summer_cabbage_fundingsource;
                        //Data11.reduction_summer_beans_crop_area = result.reduction_summer_beans_crop_area;
                        //Data11.reduction_summer_beans_quatum_value = result.reduction_summer_beans_quatum_value;
                        //Data11.reduction_summer_beans_fundingsource = result.reduction_summer_beans_fundingsource;

                        Data11.reduction_summer_floriculture_crop_area = result.reduction_summer_floriculture_crop_area;
                        Data11.reduction_summer_floriculture_quatum_value = result.reduction_summer_floriculture_quatum_value;
                        Data11.reduction_summer_floriculture_fundingsource = result.reduction_summer_floriculture_fundingsource;
                        Data11.reduction_summer_maize_crop_area = result.reduction_summer_maize_crop_area;
                        Data11.reduction_summer_maize_quatum_value = result.reduction_summer_maize_quatum_value;
                        Data11.reduction_summer_maize_fundingsource = result.reduction_summer_maize_fundingsource;
                        Data11.reduction_summer_fodder_crop_area = result.reduction_summer_fodder_crop_area;
                        Data11.reduction_summer_fodder_quatum_value = result.reduction_summer_fodder_quatum_value;
                        Data11.reduction_summer_fodder_fundingsource = result.reduction_summer_fodder_fundingsource;
                        Data11.reduction_summer_sugarcane_crop_area = result.reduction_summer_sugarcane_crop_area;
                        Data11.reduction_summer_sugarcane_quatum_value = result.reduction_summer_sugarcane_quatum_value;
                        Data11.reduction_summer_sugarcane_fundingsource = result.reduction_summer_sugarcane_fundingsource;


                        Data11.latitude = result.latitude;
                        Data11.longitude = result.longitude;


                        Data11.reduction_kharif_total_kharifcrop_waterdemand = result.reduction_kharif_total_kharifcrop_waterdemand;
                        Data11.reduction_kharif_total_reduc_gw_demand = result.reduction_kharif_total_reduc_gw_demand;

                        Data11.reduction_rabi_total_rabicrop_waterdemand = result.reduction_rabi_total_rabicrop_waterdemand;
                        Data11.reduction_rabi_total_reduc_gw_demand = result.reduction_rabi_total_reduc_gw_demand;

                        Data11.reduction_summer_total_summercrop_waterdemand = result.reduction_summer_total_summercrop_waterdemand;
                        Data11.reduction_summer_total_reduc_gw_demand = result.reduction_summer_total_reduc_gw_demand;
                        Data11.reduction_total_annual_waterdemand = result.reduction_total_annual_waterdemand;
                        //new columns water requirement
                        Data11.reduction_kharif_paddy_water_req = result.reduction_kharif_paddy_water_req;
                        Data11.reduction_kharif_ragi_water_req = result.reduction_kharif_ragi_water_req;
                        Data11.reduction_kharif_groundnut_water_req = result.reduction_kharif_groundnut_water_req;
                        Data11.reduction_kharif_sugarcane_water_req = result.reduction_kharif_sugarcane_water_req;
                        Data11.reduction_kharif_tomoto_water_req = result.reduction_kharif_tomoto_water_req;
                        //Data11.reduction_kharif_cabbage_water_req = result.reduction_kharif_cabbage_water_req;
                        //Data11.reduction_kharif_beans_water_req = result.reduction_kharif_beans_water_req;
                        Data11.reduction_kharif_floriculture_water_req = result.reduction_kharif_floriculture_water_req;
                        Data11.reduction_kharif_sericulture_water_req = result.reduction_kharif_sericulture_water_req;
                        //Data11.reduction_kharif_cucumber_water_req = result.reduction_kharif_cucumber_water_req;
                        Data11.reduction_kharif_banana_water_req = result.reduction_kharif_banana_water_req;
                        Data11.reduction_kharif_fodder_water_req = result.reduction_kharif_fodder_water_req;
                        Data11.reduction_kharif_maize_water_req = result.reduction_kharif_maize_water_req;
                        // Data11.reduction_kharif_potato_water_req = result.reduction_kharif_potato_water_req;
                        Data11.reduction_kharif_chillies_water_req = result.reduction_kharif_chillies_water_req;
                        Data11.reduction_kharif_cotton_water_req = result.reduction_kharif_cotton_water_req;
                        Data11.reduction_kharif_melon_water_req = result.reduction_kharif_melon_water_req;
                        Data11.reduction_kharif_citrus_water_req = result.reduction_kharif_citrus_water_req;
                        //Data11.reduction_kharif_peanut_water_req = result.reduction_kharif_peanut_water_req;
                        Data11.reduction_kharif_horticulture_water_req = result.reduction_kharif_horticulture_water_req;
                        //Data11.reduction_summer_sugarcane_irri_area = result.reduction_summer_sugarcane_irri_area;

                        Data11.reduction_rabi_sericulture_water_req = result.reduction_rabi_sericulture_water_req;
                        Data11.reduction_rabi_tomoto_water_req = result.reduction_rabi_tomoto_water_req;
                        // Data11.reduction_rabi_cabbage_water_req = result.reduction_rabi_cabbage_water_req;
                        // Data11.reduction_rabi_beans_water_req = result.reduction_rabi_beans_water_req;
                        Data11.reduction_rabi_floriculture_water_req = result.reduction_rabi_floriculture_water_req;
                        //Data11.reduction_rabi_potato_water_req = result.reduction_rabi_potato_water_req;
                        //Data11.reduction_rabi_cucumber_water_req = result.reduction_rabi_cucumber_water_req;
                        Data11.reduction_rabi_ragi_water_req = result.reduction_rabi_ragi_water_req;
                        Data11.reduction_rabi_sugarcane_water_req = result.reduction_rabi_sugarcane_water_req;
                        Data11.reduction_rabi_maize_water_req = result.reduction_rabi_maize_water_req;
                        Data11.reduction_rabi_fodder_water_req = result.reduction_rabi_fodder_water_req;
                        Data11.reduction_rabi_paddy_water_req = result.reduction_rabi_paddy_water_req;
                        Data11.reduction_rabi_alfalfa_water_req = result.reduction_rabi_alfalfa_water_req;
                        //Data11.reduction_rabi_onion_water_req = result.reduction_rabi_onion_water_req;
                        Data11.reduction_rabi_horticulture_water_req = result.reduction_rabi_horticulture_water_req;
                        Data11.reduction_rabi_sunflower_water_req = result.reduction_rabi_sunflower_water_req;

                        Data11.reduction_summer_sericulture_water_req = result.reduction_summer_sericulture_water_req;
                        Data11.reduction_summer_tomoto_water_req = result.reduction_summer_tomoto_water_req;
                        // Data11.reduction_summer_cabbage_water_req = result.reduction_summer_cabbage_water_req;
                        // Data11.reduction_summer_beans_water_req = result.reduction_summer_beans_water_req;
                        Data11.reduction_summer_floriculture_water_req = result.reduction_summer_floriculture_water_req;
                        Data11.reduction_summer_maize_water_req = result.reduction_summer_maize_water_req;
                        Data11.reduction_summer_fodder_water_req = result.reduction_summer_fodder_water_req;
                        Data11.reduction_summer_sugarcane_water_req = result.reduction_summer_sugarcane_water_req;

                        Data11.reduction_other_funding_source = result.reduction_other_funding_source;

                        Data11.reduction_kharif_paddy_waterdemand = result.reduction_kharif_paddy_waterdemand;
                        Data11.reduction_kharif_paddy_gw_demand = result.reduction_kharif_paddy_gw_demand;

                        Data11.reduction_kharif_ragi_waterdemand = result.reduction_kharif_ragi_waterdemand;
                        Data11.reduction_kharif_ragi_gw_demand = result.reduction_kharif_ragi_gw_demand;

                        Data11.reduction_kharif_groundnut_waterdemand = result.reduction_kharif_groundnut_waterdemand;
                        Data11.reduction_kharif_groundnut_gw_demand = result.reduction_kharif_groundnut_gw_demand;


                        Data11.reduction_kharif_sugarcane_waterdemand = result.reduction_kharif_sugarcane_waterdemand;
                        Data11.reduction_kharif_sugarcane_gw_demand = result.reduction_kharif_sugarcane_gw_demand;


                        Data11.reduction_kharif_tomoto_waterdemand = result.reduction_kharif_tomoto_waterdemand;
                        Data11.reduction_kharif_tomoto_gw_demand = result.reduction_kharif_tomoto_gw_demand;


                        // Data11.reduction_kharif_cabbage_waterdemand = result.reduction_kharif_cabbage_waterdemand;
                        // Data11.reduction_kharif_cabbage_gw_demand = result.reduction_kharif_cabbage_gw_demand;

                        //Data11.reduction_kharif_beans_waterdemand = result.reduction_kharif_beans_waterdemand;
                        //Data11.reduction_kharif_beans_gw_demand = result.reduction_kharif_beans_gw_demand;

                        Data11.reduction_kharif_floriculture_waterdemand = result.reduction_kharif_floriculture_waterdemand;
                        Data11.reduction_kharif_floriculture_gw_demand = result.reduction_kharif_floriculture_gw_demand;


                        Data11.reduction_kharif_sericulture_waterdemand = result.reduction_kharif_sericulture_waterdemand;
                        Data11.reduction_kharif_sericulture_gw_demand = result.reduction_kharif_sericulture_gw_demand;

                        // Data11.reduction_kharif_cucumber_waterdemand = result.reduction_kharif_cucumber_waterdemand;
                        // Data11.reduction_kharif_cucumber_gw_demand = result.reduction_kharif_cucumber_gw_demand;

                        Data11.reduction_kharif_banana_waterdemand = result.reduction_kharif_banana_waterdemand;
                        Data11.reduction_kharif_banana_gw_demand = result.reduction_kharif_banana_gw_demand;


                        Data11.reduction_kharif_fodder_waterdemand = result.reduction_kharif_fodder_waterdemand;
                        Data11.reduction_kharif_fodder_gw_demand = result.reduction_kharif_fodder_gw_demand;

                        Data11.reduction_kharif_maize_waterdemand = result.reduction_kharif_maize_waterdemand;
                        Data11.reduction_kharif_maize_gw_demand = result.reduction_kharif_maize_gw_demand;


                        // Data11.reduction_kharif_potato_waterdemand = result.reduction_kharif_potato_waterdemand;
                        // Data11.reduction_kharif_potato_gw_demand = result.reduction_kharif_potato_gw_demand;


                        Data11.reduction_kharif_chillies_waterdemand = result.reduction_kharif_chillies_waterdemand;
                        Data11.reduction_kharif_chillies_gw_demand = result.reduction_kharif_chillies_gw_demand;

                        Data11.reduction_kharif_cotton_waterdemand = result.reduction_kharif_cotton_waterdemand;
                        Data11.reduction_kharif_cotton_gw_demand = result.reduction_kharif_cotton_gw_demand;

                        Data11.reduction_kharif_melon_waterdemand = result.reduction_kharif_melon_waterdemand;
                        Data11.reduction_kharif_melon_gw_demand = result.reduction_kharif_melon_gw_demand;


                        Data11.reduction_kharif_citrus_waterdemand = result.reduction_kharif_citrus_waterdemand;
                        Data11.reduction_kharif_citrus_gw_demand = result.reduction_kharif_citrus_gw_demand;


                        // Data11.reduction_kharif_peanut_waterdemand = result.reduction_kharif_peanut_waterdemand;
                        // Data11.reduction_kharif_peanut_gw_demand = result.reduction_kharif_peanut_gw_demand;

                        //Data11.reduction_kharif_othercrop_gw_waterdemand = result.reduction_kharif_othercrop_gw_waterdemand;
                        //Data11.reduction_kharif_othercrop_reduc_gw_demand = result.reduction_kharif_othercrop_reduc_gw_demand;


                        Data11.reduction_kharif_horticulture_waterdemand = result.reduction_kharif_horticulture_waterdemand;
                        Data11.reduction_kharif_horticulture_gw_demand = result.reduction_kharif_horticulture_gw_demand;



                        Data11.reduction_rabi_sericulture_waterdemand = result.reduction_rabi_sericulture_waterdemand;
                        Data11.reduction_rabi_sericulture_gw_demand = result.reduction_rabi_sericulture_gw_demand;
                        Data11.reduction_rabi_tomoto_waterdemand = result.reduction_rabi_tomoto_waterdemand;
                        Data11.reduction_rabi_tomoto_gw_demand = result.reduction_rabi_tomoto_gw_demand;


                        // Data11.reduction_rabi_cabbage_waterdemand = result.reduction_rabi_cabbage_waterdemand;
                        // Data11.reduction_rabi_cabbage_gw_demand = result.reduction_rabi_cabbage_gw_demand;


                        // Data11.reduction_rabi_beans_waterdemand = result.reduction_rabi_beans_waterdemand;
                        // Data11.reduction_rabi_beans_gw_demand = result.reduction_rabi_beans_gw_demand;

                        Data11.reduction_rabi_floriculture_waterdemand = result.reduction_rabi_floriculture_waterdemand;
                        Data11.reduction_rabi_floriculture_gw_demand = result.reduction_rabi_floriculture_gw_demand;


                        // Data11.reduction_rabi_potato_waterdemand = result.reduction_rabi_potato_waterdemand;
                        //Data11.reduction_rabi_potato_gw_demand = result.reduction_rabi_potato_gw_demand;

                        // Data11.reduction_rabi_cucuber_waterdemand = result.reduction_rabi_cucuber_waterdemand;
                        // Data11.reduction_rabi_cucuber_gw_demand = result.reduction_rabi_cucuber_gw_demand;


                        Data11.reduction_rabi_ragi_waterdemand = result.reduction_rabi_ragi_waterdemand;
                        Data11.reduction_rabi_ragi_gw_demand = result.reduction_rabi_ragi_gw_demand;


                        Data11.reduction_rabi_sugarcane_waterdemand = result.reduction_rabi_sugarcane_waterdemand;
                        Data11.reduction_rabi_sugarcane_gw_demand = result.reduction_rabi_sugarcane_gw_demand;

                        Data11.reduction_rabi_maize_waterdemand = result.reduction_rabi_maize_waterdemand;
                        Data11.reduction_rabi_maize_gw_demand = result.reduction_rabi_maize_gw_demand;


                        Data11.reduction_rabi_fodder_waterdemand = result.reduction_rabi_fodder_waterdemand;
                        Data11.reduction_rabi_fodder_gw_demand = result.reduction_rabi_fodder_gw_demand;


                        Data11.reduction_rabi_paddy_waterdemand = result.reduction_rabi_paddy_waterdemand;
                        Data11.reduction_rabi_paddy_gw_demand = result.reduction_rabi_paddy_gw_demand;


                        Data11.reduction_rabi_alfalfa_waterdemand = result.reduction_rabi_alfalfa_waterdemand;
                        Data11.reduction_rabi_alfalfa_gw_demand = result.reduction_rabi_alfalfa_gw_demand;


                        //Data11.reduction_rabi_onion_waterdemand = result.reduction_rabi_onion_waterdemand;
                        //Data11.reduction_rabi_onion_gw_demand = result.reduction_rabi_onion_gw_demand;


                        Data11.reduction_rabi_horticulture_waterdemand = result.reduction_rabi_horticulture_waterdemand;
                        Data11.reduction_rabi_horticulture_gw_demand = result.reduction_rabi_horticulture_gw_demand;


                        Data11.reduction_rabi_sunflower_waterdemand = result.reduction_rabi_sunflower_waterdemand;
                        Data11.reduction_rabi_sunflower_gw_demand = result.reduction_rabi_sunflower_gw_demand;

                        //Data11.reduction_rabi_othercrop_gw_waterdemand = result.reduction_rabi_othercrop_gw_waterdemand;
                        //Data11.reduction_rabi_othercrop_reduc_gw_demand = result.reduction_rabi_othercrop_reduc_gw_demand;




                        Data11.reduction_summer_sericulture_waterdemand = result.reduction_summer_sericulture_waterdemand;
                        Data11.reduction_summer_sericulture_gw_demand = result.reduction_summer_sericulture_gw_demand;

                        Data11.reduction_summer_tomoto_waterdemand = result.reduction_summer_tomoto_waterdemand;
                        Data11.reduction_summer_tomoto_gw_demand = result.reduction_summer_tomoto_gw_demand;

                        // Data11.reduction_summer_cabbage_waterdemand = result.reduction_summer_cabbage_waterdemand;
                        //Data11.reduction_summer_cabbage_gw_demand = result.reduction_summer_cabbage_gw_demand;

                        //Data11.reduction_summer_beans_waterdemand = result.reduction_summer_beans_waterdemand;
                        //Data11.reduction_summer_beans_gw_demand = result.reduction_summer_beans_gw_demand;

                        Data11.reduction_summer_floriculture_waterdemand = result.reduction_summer_floriculture_waterdemand;
                        Data11.reduction_summer_floriculture_gw_demand = result.reduction_summer_floriculture_gw_demand;

                        Data11.reduction_summer_maize_waterdemand = result.reduction_summer_maize_waterdemand;
                        Data11.reduction_summer_maize_gw_demand = result.reduction_summer_maize_gw_demand;

                        Data11.reduction_summer_fodder_waterdemand = result.reduction_summer_fodder_waterdemand;
                        Data11.reduction_summer_fodder_gw_demand = result.reduction_summer_fodder_gw_demand;

                        Data11.reduction_summer_sugarcane_waterdemand = result.reduction_summer_sugarcane_waterdemand;
                        Data11.reduction_summer_sugarcane_gw_demand = result.reduction_summer_sugarcane_gw_demand;


                        //Data11.reduction_summer_othercrop_gw_waterdemand = result.reduction_summer_othercrop_gw_waterdemand;
                        //Data11.reduction_summer_othercrop_reduc_gw_demand = result.reduction_summer_othercrop_reduc_gw_demand;

                        //if (result.reduction_approx_estimated_cost != null && result.reduction_approx_estimated_cost != "")
                        //{
                        //    string valid_negitive = Validation_NegitiveVal(result.reduction_approx_estimated_cost);
                        //    if (valid_negitive == "True")
                        //    {
                                

                        //    }
                        //    else
                        //    {
                        //        return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                        //    }

                        //}
                        Data11.reduction_approx_estimated_cost = result.reduction_approx_estimated_cost;
                        Data11.reduction_cost_type = result.reduction_cost_type;

                        //summer horiculture
                        Data11.reduction_summer_horticulture_crop_area = result.reduction_summer_horticulture_crop_area;
                        Data11.reduction_summer_horticulture_quantum_uservalue = result.reduction_summer_horticulture_quantum_uservalue;
                        Data11.reduction_summer_horticulture_water_req = result.reduction_summer_horticulture_water_req;
                        Data11.reduction_summer_horticulture_waterdemand = result.reduction_summer_horticulture_waterdemand;
                        Data11.reduction_summer_horticulture_reduction_gw_demand = result.reduction_summer_horticulture_reduction_gw_demand;

                        //add crops
                        Data11.reduction_kharif_othercrop_name1 = result.reduction_kharif_othercrop_name1;
                        Data11.reduction_kharif_othercrop_area1 = result.reduction_kharif_othercrop_area1;
                        Data11.reduction_kharif_othercrop_quantum_uservalue1 = result.reduction_kharif_othercrop_quantum_uservalue1;
                        Data11.reduction_kharif_othercrop_water_req1 = result.reduction_kharif_othercrop_water_req1;
                        Data11.reduction_kharif_othercrop_waterdemand1 = result.reduction_kharif_othercrop_waterdemand1;
                        Data11.reduction_kharif_othercrop_reduction_gw_demand1 = result.reduction_kharif_othercrop_reduction_gw_demand1;

                        Data11.reduction_kharif_othercrop_name2 = result.reduction_kharif_othercrop_name2;
                        Data11.reduction_kharif_othercrop_area2 = result.reduction_kharif_othercrop_area2;
                        Data11.reduction_kharif_othercrop_quantum_uservalue2 = result.reduction_kharif_othercrop_quantum_uservalue2;
                        Data11.reduction_kharif_othercrop_water_req2 = result.reduction_kharif_othercrop_water_req2;
                        Data11.reduction_kharif_othercrop_waterdemand2 = result.reduction_kharif_othercrop_waterdemand2;
                        Data11.reduction_kharif_othercrop_reduction_gw_demand2 = result.reduction_kharif_othercrop_reduction_gw_demand2;

                        Data11.reduction_kharif_othercrop_name3 = result.reduction_kharif_othercrop_name3;
                        Data11.reduction_kharif_othercrop_area3 = result.reduction_kharif_othercrop_area3;
                        Data11.reduction_kharif_othercrop_quantum_uservalue3 = result.reduction_kharif_othercrop_quantum_uservalue3;
                        Data11.reduction_kharif_othercrop_water_req3 = result.reduction_kharif_othercrop_water_req3;
                        Data11.reduction_kharif_othercrop_waterdemand3 = result.reduction_kharif_othercrop_waterdemand3;
                        Data11.reduction_kharif_othercrop_reduction_gw_demand3 = result.reduction_kharif_othercrop_reduction_gw_demand3;

                        Data11.reduction_kharif_othercrop_name4 = result.reduction_kharif_othercrop_name4;
                        Data11.reduction_kharif_othercrop_area4 = result.reduction_kharif_othercrop_area4;
                        Data11.reduction_kharif_othercrop_quantum_uservalue4 = result.reduction_kharif_othercrop_quantum_uservalue4;
                        Data11.reduction_kharif_othercrop_water_req4 = result.reduction_kharif_othercrop_water_req4;
                        Data11.reduction_kharif_othercrop_waterdemand4 = result.reduction_kharif_othercrop_waterdemand4;
                        Data11.reduction_kharif_othercrop_reduction_gw_demand4 = result.reduction_kharif_othercrop_reduction_gw_demand4;

                        Data11.reduction_kharif_othercrop_name5 = result.reduction_kharif_othercrop_name5;
                        Data11.reduction_kharif_othercrop_area5 = result.reduction_kharif_othercrop_area5;
                        Data11.reduction_kharif_othercrop_quantum_uservalue5 = result.reduction_kharif_othercrop_quantum_uservalue5;
                        Data11.reduction_kharif_othercrop_water_req5 = result.reduction_kharif_othercrop_water_req5;
                        Data11.reduction_kharif_othercrop_waterdemand5 = result.reduction_kharif_othercrop_waterdemand5;
                        Data11.reduction_kharif_othercrop_reduction_gw_demand5 = result.reduction_kharif_othercrop_reduction_gw_demand5;



                        Data11.reduction_rabi_othercrop_name1 = result.reduction_rabi_othercrop_name1;
                        Data11.reduction_rabi_othercrop_area1 = result.reduction_rabi_othercrop_area1;
                        Data11.reduction_rabi_othercrop_quantum_uservalue1 = result.reduction_rabi_othercrop_quantum_uservalue1;
                        Data11.reduction_rabi_othercrop_water_req1 = result.reduction_rabi_othercrop_water_req1;
                        Data11.reduction_rabi_othercrop_waterdemand1 = result.reduction_rabi_othercrop_waterdemand1;
                        Data11.reduction_rabi_othercrop_reduction_gw_demand1 = result.reduction_rabi_othercrop_reduction_gw_demand1;

                        Data11.reduction_rabi_othercrop_name2 = result.reduction_rabi_othercrop_name2;
                        Data11.reduction_rabi_othercrop_area2 = result.reduction_rabi_othercrop_area2;
                        Data11.reduction_rabi_othercrop_quantum_uservalue2 = result.reduction_rabi_othercrop_quantum_uservalue2;
                        Data11.reduction_rabi_othercrop_water_req2 = result.reduction_rabi_othercrop_water_req2;
                        Data11.reduction_rabi_othercrop_waterdemand2 = result.reduction_rabi_othercrop_waterdemand2;
                        Data11.reduction_rabi_othercrop_reduction_gw_demand2 = result.reduction_rabi_othercrop_reduction_gw_demand2;

                        Data11.reduction_rabi_othercrop_name3 = result.reduction_rabi_othercrop_name3;
                        Data11.reduction_rabi_othercrop_area3 = result.reduction_rabi_othercrop_area3;
                        Data11.reduction_rabi_othercrop_quantum_uservalue3 = result.reduction_rabi_othercrop_quantum_uservalue3;
                        Data11.reduction_rabi_othercrop_water_req3 = result.reduction_rabi_othercrop_water_req3;
                        Data11.reduction_rabi_othercrop_waterdemand3 = result.reduction_rabi_othercrop_waterdemand3;
                        Data11.reduction_rabi_othercrop_reduction_gw_demand3 = result.reduction_rabi_othercrop_reduction_gw_demand3;

                        Data11.reduction_rabi_othercrop_name4 = result.reduction_rabi_othercrop_name4;
                        Data11.reduction_rabi_othercrop_area4 = result.reduction_rabi_othercrop_area4;
                        Data11.reduction_rabi_othercrop_quantum_uservalue4 = result.reduction_rabi_othercrop_quantum_uservalue4;
                        Data11.reduction_rabi_othercrop_water_req4 = result.reduction_rabi_othercrop_water_req4;
                        Data11.reduction_rabi_othercrop_waterdemand4 = result.reduction_rabi_othercrop_waterdemand4;
                        Data11.reduction_rabi_othercrop_reduction_gw_demand4 = result.reduction_rabi_othercrop_reduction_gw_demand4;

                        Data11.reduction_rabi_othercrop_name5 = result.reduction_rabi_othercrop_name5;
                        Data11.reduction_rabi_othercrop_area5 = result.reduction_rabi_othercrop_area5;
                        Data11.reduction_rabi_othercrop_quantum_uservalue5 = result.reduction_rabi_othercrop_quantum_uservalue5;
                        Data11.reduction_rabi_othercrop_water_req5 = result.reduction_rabi_othercrop_water_req5;
                        Data11.reduction_rabi_othercrop_waterdemand5 = result.reduction_rabi_othercrop_waterdemand5;
                        Data11.reduction_rabi_othercrop_reduction_gw_demand5 = result.reduction_rabi_othercrop_reduction_gw_demand5;




                        Data11.reduction_summer_othercrop_name1 = result.reduction_summer_othercrop_name1;
                        Data11.reduction_summer_othercrop_area1 = result.reduction_summer_othercrop_area1;
                        Data11.reduction_summer_othercrop_quantum_uservalue1 = result.reduction_summer_othercrop_quantum_uservalue1;
                        Data11.reduction_summer_othercrop_water_req1 = result.reduction_summer_othercrop_water_req1;
                        Data11.reduction_summer_othercrop_waterdemand1 = result.reduction_summer_othercrop_waterdemand1;
                        Data11.reduction_summer_othercrop_reduction_gw_demand1 = result.reduction_summer_othercrop_reduction_gw_demand1;

                        Data11.reduction_summer_othercrop_name2 = result.reduction_summer_othercrop_name2;
                        Data11.reduction_summer_othercrop_area2 = result.reduction_summer_othercrop_area2;
                        Data11.reduction_summer_othercrop_quantum_uservalue2 = result.reduction_summer_othercrop_quantum_uservalue2;
                        Data11.reduction_summer_othercrop_water_req2 = result.reduction_summer_othercrop_water_req2;
                        Data11.reduction_summer_othercrop_waterdemand2 = result.reduction_summer_othercrop_waterdemand2;
                        Data11.reduction_summer_othercrop_reduction_gw_demand2 = result.reduction_summer_othercrop_reduction_gw_demand2;

                        Data11.reduction_summer_othercrop_name3 = result.reduction_summer_othercrop_name3;
                        Data11.reduction_summer_othercrop_area3 = result.reduction_summer_othercrop_area3;
                        Data11.reduction_summer_othercrop_quantum_uservalue3 = result.reduction_summer_othercrop_quantum_uservalue3;
                        Data11.reduction_summer_othercrop_water_req3 = result.reduction_summer_othercrop_water_req3;
                        Data11.reduction_summer_othercrop_waterdemand3 = result.reduction_summer_othercrop_waterdemand3;
                        Data11.reduction_summer_othercrop_reduction_gw_demand3 = result.reduction_summer_othercrop_reduction_gw_demand3;

                        Data11.reduction_summer_othercrop_name4 = result.reduction_summer_othercrop_name4;
                        Data11.reduction_summer_othercrop_area4 = result.reduction_summer_othercrop_area4;
                        Data11.reduction_summer_othercrop_quantum_uservalue4 = result.reduction_summer_othercrop_quantum_uservalue4;
                        Data11.reduction_summer_othercrop_water_req4 = result.reduction_summer_othercrop_water_req4;
                        Data11.reduction_summer_othercrop_waterdemand4 = result.reduction_summer_othercrop_waterdemand4;
                        Data11.reduction_summer_othercrop_reduction_gw_demand4 = result.reduction_summer_othercrop_reduction_gw_demand4;

                        Data11.reduction_summer_othercrop_name5 = result.reduction_summer_othercrop_name5;
                        Data11.reduction_summer_othercrop_area5 = result.reduction_summer_othercrop_area5;
                        Data11.reduction_summer_othercrop_quantum_uservalue5 = result.reduction_summer_othercrop_quantum_uservalue5;
                        Data11.reduction_summer_othercrop_water_req5 = result.reduction_summer_othercrop_water_req5;
                        Data11.reduction_summer_othercrop_waterdemand5 = result.reduction_summer_othercrop_waterdemand5;
                        Data11.reduction_summer_othercrop_reduction_gw_demand5 = result.reduction_summer_othercrop_reduction_gw_demand5;


                        //other crops
                        //Data11.reduction_kharif_othercrop_name = result.reduction_kharif_othercrop_name;
                        //Data11.reduction_kharif_othercrop_area = result.reduction_kharif_othercrop_area;
                        //Data11.reduction_kharif_othercrop_water_req = result.reduction_kharif_othercrop_water_req;
                        //Data11.reduction_kharif_othercrop_quantum_value = result.reduction_kharif_othercrop_quantum_value;
                        //Data11.reduction_kharif_othercrop_gw_waterdemand = result.reduction_kharif_othercrop_gw_waterdemand;
                        //Data11.reduction_kharif_othercrop_reduc_gw_demand = result.reduction_kharif_othercrop_reduc_gw_demand;

                        //Data11.reduction_rabi_othercrop_name = result.reduction_rabi_othercrop_name;
                        //Data11.reduction_rabi_othercrop_area = result.reduction_rabi_othercrop_area;
                        //Data11.reduction_rabi_othercrop_water_req = result.reduction_rabi_othercrop_water_req;
                        //Data11.reduction_rabi_othercrop_quantum_value = result.reduction_rabi_othercrop_quantum_value;
                        //Data11.reduction_rabi_othercrop_gw_waterdemand = result.reduction_rabi_othercrop_gw_waterdemand;
                        //Data11.reduction_rabi_othercrop_reduc_gw_demand = result.reduction_rabi_othercrop_reduc_gw_demand;

                        //Data11.reduction_summer_othercrop_name = result.reduction_summer_othercrop_name;
                        //Data11.reduction_summer_othercrop_area = result.reduction_summer_othercrop_area;
                        //Data11.reduction_summer_othercrop_water_req = result.reduction_summer_othercrop_water_req;
                        //Data11.reduction_summer_othercrop_quantum_value = result.reduction_summer_othercrop_quantum_value;
                        //Data11.reduction_summer_othercrop_gw_waterdemand = result.reduction_summer_othercrop_gw_waterdemand;
                        //Data11.reduction_summer_othercrop_reduc_gw_demand = result.reduction_summer_othercrop_reduc_gw_demand;


                        ABE.Entry(Data11).State = EntityState.Modified;

                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        obj.statename = StateName;
                        obj.blockname = BlockName;
                        obj.districtname = DistName;
                        obj.gpname = GramName;
                        obj.userid = Convert.ToInt32(userid);

                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        obj.date_time = Today1;

                        if (result.reduction_approx_estimated_cost != null && result.reduction_approx_estimated_cost != "")
                        {
                            string valid_negitive = Validation_NegitiveVal(result.reduction_approx_estimated_cost);
                            if (valid_negitive == "True")
                            {
                                obj.reduction_approx_estimated_cost = result.reduction_approx_estimated_cost;

                            }
                            else
                            {
                                return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                            }

                        }
                        obj.reduction_cost_type = result.reduction_cost_type;

                        //summer horiculture
                        obj.reduction_summer_horticulture_crop_area = result.reduction_summer_horticulture_crop_area;
                        obj.reduction_summer_horticulture_quantum_uservalue = result.reduction_summer_horticulture_quantum_uservalue;
                        obj.reduction_summer_horticulture_water_req = result.reduction_summer_horticulture_water_req;
                        obj.reduction_summer_horticulture_waterdemand = result.reduction_summer_horticulture_waterdemand;
                        obj.reduction_summer_horticulture_reduction_gw_demand = result.reduction_summer_horticulture_reduction_gw_demand;


                        obj.reduction_kharif_paddy_waterdemand = result.reduction_kharif_paddy_waterdemand;
                        obj.reduction_kharif_paddy_gw_demand = result.reduction_kharif_paddy_gw_demand;

                        obj.reduction_kharif_ragi_waterdemand = result.reduction_kharif_ragi_waterdemand;
                        obj.reduction_kharif_ragi_gw_demand = result.reduction_kharif_ragi_gw_demand;

                        obj.reduction_kharif_groundnut_waterdemand = result.reduction_kharif_groundnut_waterdemand;
                        obj.reduction_kharif_groundnut_gw_demand = result.reduction_kharif_groundnut_gw_demand;


                        obj.reduction_kharif_sugarcane_waterdemand = result.reduction_kharif_sugarcane_waterdemand;
                        obj.reduction_kharif_sugarcane_gw_demand = result.reduction_kharif_sugarcane_gw_demand;


                        obj.reduction_kharif_tomoto_waterdemand = result.reduction_kharif_tomoto_waterdemand;
                        obj.reduction_kharif_tomoto_gw_demand = result.reduction_kharif_tomoto_gw_demand;


                        // obj.reduction_kharif_cabbage_waterdemand = result.reduction_kharif_cabbage_waterdemand;
                        // obj.reduction_kharif_cabbage_gw_demand = result.reduction_kharif_cabbage_gw_demand;

                        // obj.reduction_kharif_beans_waterdemand = result.reduction_kharif_beans_waterdemand;
                        // obj.reduction_kharif_beans_gw_demand = result.reduction_kharif_beans_gw_demand;

                        obj.reduction_kharif_floriculture_waterdemand = result.reduction_kharif_floriculture_waterdemand;
                        obj.reduction_kharif_floriculture_gw_demand = result.reduction_kharif_floriculture_gw_demand;


                        obj.reduction_kharif_sericulture_waterdemand = result.reduction_kharif_sericulture_waterdemand;
                        obj.reduction_kharif_sericulture_gw_demand = result.reduction_kharif_sericulture_gw_demand;

                        // obj.reduction_kharif_cucumber_waterdemand = result.reduction_kharif_cucumber_waterdemand;
                        // obj.reduction_kharif_cucumber_gw_demand = result.reduction_kharif_cucumber_gw_demand;

                        obj.reduction_kharif_banana_waterdemand = result.reduction_kharif_banana_waterdemand;
                        obj.reduction_kharif_banana_gw_demand = result.reduction_kharif_banana_gw_demand;


                        obj.reduction_kharif_fodder_waterdemand = result.reduction_kharif_fodder_waterdemand;
                        obj.reduction_kharif_fodder_gw_demand = result.reduction_kharif_fodder_gw_demand;

                        obj.reduction_kharif_maize_waterdemand = result.reduction_kharif_maize_waterdemand;
                        obj.reduction_kharif_maize_gw_demand = result.reduction_kharif_maize_gw_demand;


                        // obj.reduction_kharif_potato_waterdemand = result.reduction_kharif_potato_waterdemand;
                        // obj.reduction_kharif_potato_gw_demand = result.reduction_kharif_potato_gw_demand;


                        obj.reduction_kharif_chillies_waterdemand = result.reduction_kharif_chillies_waterdemand;
                        obj.reduction_kharif_chillies_gw_demand = result.reduction_kharif_chillies_gw_demand;

                        obj.reduction_kharif_cotton_waterdemand = result.reduction_kharif_cotton_waterdemand;
                        obj.reduction_kharif_cotton_gw_demand = result.reduction_kharif_cotton_gw_demand;

                        obj.reduction_kharif_melon_waterdemand = result.reduction_kharif_melon_waterdemand;
                        obj.reduction_kharif_melon_gw_demand = result.reduction_kharif_melon_gw_demand;


                        obj.reduction_kharif_citrus_waterdemand = result.reduction_kharif_citrus_waterdemand;
                        obj.reduction_kharif_citrus_gw_demand = result.reduction_kharif_citrus_gw_demand;


                        //obj.reduction_kharif_peanut_waterdemand = result.reduction_kharif_peanut_waterdemand;
                        //obj.reduction_kharif_peanut_gw_demand = result.reduction_kharif_peanut_gw_demand;

                        //obj.reduction_kharif_othercrop_gw_waterdemand = result.reduction_kharif_othercrop_gw_waterdemand;
                        //obj.reduction_kharif_othercrop_reduc_gw_demand = result.reduction_kharif_othercrop_reduc_gw_demand;


                        obj.reduction_kharif_horticulture_waterdemand = result.reduction_kharif_horticulture_waterdemand;
                        obj.reduction_kharif_horticulture_gw_demand = result.reduction_kharif_horticulture_gw_demand;



                        obj.reduction_rabi_sericulture_waterdemand = result.reduction_rabi_sericulture_waterdemand;
                        obj.reduction_rabi_sericulture_gw_demand = result.reduction_rabi_sericulture_gw_demand;
                        obj.reduction_rabi_tomoto_waterdemand = result.reduction_rabi_tomoto_waterdemand;
                        obj.reduction_rabi_tomoto_gw_demand = result.reduction_rabi_tomoto_gw_demand;


                        // obj.reduction_rabi_cabbage_waterdemand = result.reduction_rabi_cabbage_waterdemand;
                        //obj.reduction_rabi_cabbage_gw_demand = result.reduction_rabi_cabbage_gw_demand;


                        // obj.reduction_rabi_beans_waterdemand = result.reduction_rabi_beans_waterdemand;
                        // obj.reduction_rabi_beans_gw_demand = result.reduction_rabi_beans_gw_demand;

                        obj.reduction_rabi_floriculture_waterdemand = result.reduction_rabi_floriculture_waterdemand;
                        obj.reduction_rabi_floriculture_gw_demand = result.reduction_rabi_floriculture_gw_demand;


                        // obj.reduction_rabi_potato_waterdemand = result.reduction_rabi_potato_waterdemand;
                        // obj.reduction_rabi_potato_gw_demand = result.reduction_rabi_potato_gw_demand;

                        // obj.reduction_rabi_cucuber_waterdemand = result.reduction_rabi_cucuber_waterdemand;
                        // obj.reduction_rabi_cucuber_gw_demand = result.reduction_rabi_cucuber_gw_demand;


                        obj.reduction_rabi_ragi_waterdemand = result.reduction_rabi_ragi_waterdemand;
                        obj.reduction_rabi_ragi_gw_demand = result.reduction_rabi_ragi_gw_demand;


                        obj.reduction_rabi_sugarcane_waterdemand = result.reduction_rabi_sugarcane_waterdemand;
                        obj.reduction_rabi_sugarcane_gw_demand = result.reduction_rabi_sugarcane_gw_demand;

                        obj.reduction_rabi_maize_waterdemand = result.reduction_rabi_maize_waterdemand;
                        obj.reduction_rabi_maize_gw_demand = result.reduction_rabi_maize_gw_demand;


                        obj.reduction_rabi_fodder_waterdemand = result.reduction_rabi_fodder_waterdemand;
                        obj.reduction_rabi_fodder_gw_demand = result.reduction_rabi_fodder_gw_demand;


                        obj.reduction_rabi_paddy_waterdemand = result.reduction_rabi_paddy_waterdemand;
                        obj.reduction_rabi_paddy_gw_demand = result.reduction_rabi_paddy_gw_demand;


                        obj.reduction_rabi_alfalfa_waterdemand = result.reduction_rabi_alfalfa_waterdemand;
                        obj.reduction_rabi_alfalfa_gw_demand = result.reduction_rabi_alfalfa_gw_demand;


                        // obj.reduction_rabi_onion_waterdemand = result.reduction_rabi_onion_waterdemand;
                        // obj.reduction_rabi_onion_gw_demand = result.reduction_rabi_onion_gw_demand;


                        obj.reduction_rabi_horticulture_waterdemand = result.reduction_rabi_horticulture_waterdemand;
                        obj.reduction_rabi_horticulture_gw_demand = result.reduction_rabi_horticulture_gw_demand;


                        obj.reduction_rabi_sunflower_waterdemand = result.reduction_rabi_sunflower_waterdemand;
                        obj.reduction_rabi_sunflower_gw_demand = result.reduction_rabi_sunflower_gw_demand;

                        //obj.reduction_rabi_othercrop_gw_waterdemand = result.reduction_rabi_othercrop_gw_waterdemand;
                        //obj.reduction_rabi_othercrop_reduc_gw_demand = result.reduction_rabi_othercrop_reduc_gw_demand;




                        obj.reduction_summer_sericulture_waterdemand = result.reduction_summer_sericulture_waterdemand;
                        obj.reduction_summer_sericulture_gw_demand = result.reduction_summer_sericulture_gw_demand;

                        obj.reduction_summer_tomoto_waterdemand = result.reduction_summer_tomoto_waterdemand;
                        obj.reduction_summer_tomoto_gw_demand = result.reduction_summer_tomoto_gw_demand;

                        // obj.reduction_summer_cabbage_waterdemand = result.reduction_summer_cabbage_waterdemand;
                        // obj.reduction_summer_cabbage_gw_demand = result.reduction_summer_cabbage_gw_demand;

                        // obj.reduction_summer_beans_waterdemand = result.reduction_summer_beans_waterdemand;
                        // obj.reduction_summer_beans_gw_demand = result.reduction_summer_beans_gw_demand;

                        obj.reduction_summer_floriculture_waterdemand = result.reduction_summer_floriculture_waterdemand;
                        obj.reduction_summer_floriculture_gw_demand = result.reduction_summer_floriculture_gw_demand;

                        obj.reduction_summer_maize_waterdemand = result.reduction_summer_maize_waterdemand;
                        obj.reduction_summer_maize_gw_demand = result.reduction_summer_maize_gw_demand;

                        obj.reduction_summer_fodder_waterdemand = result.reduction_summer_fodder_waterdemand;
                        obj.reduction_summer_fodder_gw_demand = result.reduction_summer_fodder_gw_demand;

                        obj.reduction_summer_sugarcane_waterdemand = result.reduction_summer_sugarcane_waterdemand;
                        obj.reduction_summer_sugarcane_gw_demand = result.reduction_summer_sugarcane_gw_demand;


                        //obj.reduction_summer_othercrop_gw_waterdemand = result.reduction_summer_othercrop_gw_waterdemand;
                        //obj.reduction_summer_othercrop_reduc_gw_demand = result.reduction_summer_othercrop_reduc_gw_demand;

                        obj.reduction_kharif_paddy_crop_area = result.reduction_kharif_paddy_crop_area;
                        obj.reduction_kharif_paddy_quatum_value = result.reduction_kharif_paddy_quatum_value;
                        obj.reduction_kharif_paddy_fundingsource = result.reduction_kharif_paddy_fundingsource;
                        obj.reduction_kharif_ragi_crop_area = result.reduction_kharif_ragi_crop_area;
                        obj.reduction_kharif_ragi_quatum_value = result.reduction_kharif_ragi_quatum_value;
                        obj.reduction_kharif_ragi_fundingsource = result.reduction_kharif_ragi_fundingsource;
                        obj.reduction_kharif_groundnut_crop_area = result.reduction_kharif_groundnut_crop_area;
                        obj.reduction_kharif_groundnut_quatum_value = result.reduction_kharif_groundnut_quatum_value;
                        obj.reduction_kharif_groundnut_fundingsource = result.reduction_kharif_groundnut_fundingsource;
                        obj.reduction_kharif_sugarcane_crop_area = result.reduction_kharif_sugarcane_crop_area;
                        obj.reduction_kharif_sugarcane_quatum_value = result.reduction_kharif_sugarcane_quatum_value;
                        obj.reduction_kharif_sugarcane_fundingsource = result.reduction_kharif_sugarcane_fundingsource;
                        obj.reduction_kharif_tomoto_crop_area = result.reduction_kharif_tomoto_crop_area;
                        obj.reduction_kharif_tomoto_quatum_value = result.reduction_kharif_tomoto_quatum_value;
                        obj.reduction_kharif_tomoto_fundingsource = result.reduction_kharif_tomoto_fundingsource;
                        // obj.reduction_kharif_cabbage_crop_area = result.reduction_kharif_cabbage_crop_area;
                        // obj.reduction_kharif_cabbage_quatum_value = result.reduction_kharif_cabbage_quatum_value;
                        // obj.reduction_kharif_cabbage_fundingsource = result.reduction_kharif_cabbage_fundingsource;
                        // obj.reduction_kharif_beans_crop_area = result.reduction_kharif_beans_crop_area;
                        // obj.reduction_kharif_beans_quatum_value = result.reduction_kharif_beans_quatum_value;
                        // obj.reduction_kharif_beans_fundingsource = result.reduction_kharif_beans_fundingsource;
                        obj.reduction_kharif_floriculture_crop_area = result.reduction_kharif_floriculture_crop_area;
                        obj.reduction_kharif_floriculture_quatum_value = result.reduction_kharif_floriculture_quatum_value;
                        obj.reduction_kharif_floriculture_fundingsource = result.reduction_kharif_floriculture_fundingsource;
                        obj.reduction_kharif_sericulture_crop_area = result.reduction_kharif_sericulture_crop_area;
                        obj.reduction_kharif_sericulture_quatum_value = result.reduction_kharif_sericulture_quatum_value;
                        obj.reduction_kharif_sericulture_fundingsource = result.reduction_kharif_sericulture_fundingsource;
                        //obj.reduction_kharif_cucumber_crop_area = result.reduction_kharif_cucumber_crop_area;
                        //obj.reduction_kharif_cucumber_quatum_value = result.reduction_kharif_cucumber_quatum_value;
                        //obj.reduction_kharif_cucumber_fundingsource = result.reduction_kharif_cucumber_fundingsource;
                        obj.reduction_kharif_banana_crop_area = result.reduction_kharif_banana_crop_area;
                        obj.reduction_kharif_banana_quatum_value = result.reduction_kharif_banana_quatum_value;
                        obj.reduction_kharif_banana_fundingsource = result.reduction_kharif_banana_fundingsource;
                        obj.reduction_kharif_fodder_crop_area = result.reduction_kharif_fodder_crop_area;
                        obj.reduction_kharif_fodder_quatum_value = result.reduction_kharif_fodder_quatum_value;
                        obj.reduction_kharif_fodder_fundingsource = result.reduction_kharif_fodder_fundingsource;
                        obj.reduction_kharif_maize_crop_area = result.reduction_kharif_maize_crop_area;
                        obj.reduction_kharif_maize_quatum_value = result.reduction_kharif_maize_quatum_value;
                        obj.reduction_kharif_maize_fundingsource = result.reduction_kharif_maize_fundingsource;
                        //obj.reduction_kharif_potato_crop_area = result.reduction_kharif_potato_crop_area;
                        //obj.reduction_kharif_potato_quatum_value = result.reduction_kharif_potato_quatum_value;
                        //obj.reduction_kharif_potato_fundingsource = result.reduction_kharif_potato_fundingsource;
                        obj.reduction_kharif_chillies_crop_area = result.reduction_kharif_chillies_crop_area;
                        obj.reduction_kharif_chillies_quatum_value = result.reduction_kharif_chillies_quatum_value;
                        obj.reduction_kharif_chillies_fundingsource = result.reduction_kharif_chillies_fundingsource;
                        obj.reduction_kharif_cotton_crop_area = result.reduction_kharif_cotton_crop_area;
                        obj.reduction_kharif_cotton_quatum_value = result.reduction_kharif_cotton_quatum_value;
                        obj.reduction_kharif_cotton_fundingsource = result.reduction_kharif_cotton_fundingsource;
                        obj.reduction_kharif_melon_crop_area = result.reduction_kharif_melon_crop_area;
                        obj.reduction_kharif_melon_quatum_value = result.reduction_kharif_melon_quatum_value;
                        obj.reduction_kharif_melon_fundingsource = result.reduction_kharif_melon_fundingsource;
                        obj.reduction_kharif_citrus_crop_area = result.reduction_kharif_citrus_crop_area;
                        obj.reduction_kharif_citrus_quatum_value = result.reduction_kharif_citrus_quatum_value;
                        obj.reduction_kharif_citrus_fundingsource = result.reduction_kharif_citrus_fundingsource;
                        // obj.reduction_kharif_peanut_crop_area = result.reduction_kharif_peanut_crop_area;
                        //obj.reduction_kharif_peanut_quatum_value = result.reduction_kharif_peanut_quatum_value;
                        //obj.reduction_kharif_peanut_fundingsource = result.reduction_kharif_peanut_fundingsource;
                        obj.reduction_kharif_horticulture_crop_area = result.reduction_kharif_horticulture_crop_area;
                        obj.reduction_kharif_horticulture_quatum_value = result.reduction_kharif_horticulture_quatum_value;
                        obj.reduction_kharif_horticulture_fundingsource = result.reduction_kharif_horticulture_fundingsource;
                        obj.reduction_rabi_sericulture_crop_area = result.reduction_rabi_sericulture_crop_area;
                        obj.reduction_rabi_sericulture_quatum_value = result.reduction_rabi_sericulture_quatum_value;
                        obj.reduction_rabi_sericulture_fundingsource = result.reduction_rabi_sericulture_fundingsource;
                        obj.reduction_rabi_tomoto_crop_area = result.reduction_rabi_tomoto_crop_area;
                        obj.reduction_rabi_tomoto_quatum_value = result.reduction_rabi_tomoto_quatum_value;
                        obj.reduction_rabi_tomoto_fundingsource = result.reduction_rabi_tomoto_fundingsource;
                        //obj.reduction_rabi_cabbage_crop_area = result.reduction_rabi_cabbage_crop_area;
                        //obj.reduction_rabi_cabbage_quatum_value = result.reduction_rabi_cabbage_quatum_value;
                        //obj.reduction_rabi_cabbage_fundingsource = result.reduction_rabi_cabbage_fundingsource;
                        //obj.reduction_rabi_beans_crop_area = result.reduction_rabi_beans_crop_area;
                        //obj.reduction_rabi_beans_quatum_value = result.reduction_rabi_beans_quatum_value;
                        //obj.reduction_rabi_beans_fundingsource = result.reduction_rabi_beans_fundingsource;
                        obj.reduction_rabi_floriculture_crop_area = result.reduction_rabi_floriculture_crop_area;
                        obj.reduction_rabi_floriculture_quatum_value = result.reduction_rabi_floriculture_quatum_value;
                        obj.reduction_rabi_floriculture_fundingsource = result.reduction_rabi_floriculture_fundingsource;
                        //obj.reduction_rabi_potato_crop_area = result.reduction_rabi_potato_crop_area;
                        //obj.reduction_rabi_potato_quatum_value = result.reduction_rabi_potato_quatum_value;
                        //obj.reduction_rabi_potato_fundingsource = result.reduction_rabi_potato_fundingsource;
                        //obj.reduction_rabi_cucumber_crop_area = result.reduction_rabi_cucumber_crop_area;
                        //obj.reduction_rabi_cucumber_quatum_value = result.reduction_rabi_cucumber_quatum_value;
                        // obj.reduction_rabi_cucumber_fundingsource = result.reduction_rabi_cucumber_fundingsource;
                        obj.reduction_rabi_ragi_crop_area = result.reduction_rabi_ragi_crop_area;
                        obj.reduction_rabi_ragi_quatum_value = result.reduction_rabi_ragi_quatum_value;
                        obj.reduction_rabi_ragi_fundingsource = result.reduction_rabi_ragi_fundingsource;
                        obj.reduction_rabi_sugarcane_crop_area = result.reduction_rabi_sugarcane_crop_area;
                        obj.reduction_rabi_sugarcane_quatum_value = result.reduction_rabi_sugarcane_quatum_value;
                        obj.reduction_rabi_sugarcane_fundingsource = result.reduction_rabi_sugarcane_fundingsource;
                        obj.reduction_rabi_maize_crop_area = result.reduction_rabi_maize_crop_area;
                        obj.reduction_rabi_maize_quatum_value = result.reduction_rabi_maize_quatum_value;
                        obj.reduction_rabi_maize_fundingsource = result.reduction_rabi_maize_fundingsource;
                        obj.reduction_rabi_fodder_crop_area = result.reduction_rabi_fodder_crop_area;
                        obj.reduction_rabi_fodder_quatum_value = result.reduction_rabi_fodder_quatum_value;
                        obj.reduction_rabi_fodder_fundingsource = result.reduction_rabi_fodder_fundingsource;
                        obj.reduction_rabi_paddy_crop_area = result.reduction_rabi_paddy_crop_area;
                        obj.reduction_rabi_paddy_quatum_value = result.reduction_rabi_paddy_quatum_value;
                        obj.reduction_rabi_paddy_fundingsource = result.reduction_rabi_paddy_fundingsource;
                        obj.reduction_rabi_alfalfa_crop_area = result.reduction_rabi_alfalfa_crop_area;
                        obj.reduction_rabi_alfalfa_quatum_value = result.reduction_rabi_alfalfa_quatum_value;
                        obj.reduction_rabi_alfalfa_fundingsource = result.reduction_rabi_alfalfa_fundingsource;
                        // obj.reduction_rabi_onion_crop_area = result.reduction_rabi_onion_crop_area;
                        // obj.reduction_rabi_onion_quatum_value = result.reduction_rabi_onion_quatum_value;
                        // obj.reduction_rabi_onion_fundingsource = result.reduction_rabi_onion_fundingsource;
                        obj.reduction_rabi_horticulture_crop_area = result.reduction_rabi_horticulture_crop_area;
                        obj.reduction_rabi_horticulture_quatum_value = result.reduction_rabi_horticulture_quatum_value;
                        obj.reduction_rabi_horticulture_fundingsource = result.reduction_rabi_horticulture_fundingsource;
                        obj.reduction_rabi_sunflower_crop_area = result.reduction_rabi_sunflower_crop_area;
                        obj.reduction_rabi_sunflower_quatum_value = result.reduction_rabi_sunflower_quatum_value;
                        obj.reduction_rabi_sunflower_fundingsource = result.reduction_rabi_sunflower_fundingsource;
                        obj.reduction_summer_sericulture_crop_area = result.reduction_summer_sericulture_crop_area;
                        obj.reduction_summer_sericulture_quatum_value = result.reduction_summer_sericulture_quatum_value;
                        obj.reduction_summer_sericulture_fundingsource = result.reduction_summer_sericulture_fundingsource;
                        obj.reduction_summer_tomoto_crop_area = result.reduction_summer_tomoto_crop_area;
                        obj.reduction_summer_tomoto_quatum_value = result.reduction_summer_tomoto_quatum_value;
                        obj.reduction_summer_tomoto_fundingsource = result.reduction_summer_tomoto_fundingsource;
                        // obj.reduction_summer_cabbage_crop_area = result.reduction_summer_cabbage_crop_area;
                        //obj.reduction_summer_cabbage_quatum_value = result.reduction_summer_cabbage_quatum_value;
                        // obj.reduction_summer_cabbage_fundingsource = result.reduction_summer_cabbage_fundingsource;
                        //obj.reduction_summer_beans_crop_area = result.reduction_summer_beans_crop_area;
                        // obj.reduction_summer_beans_quatum_value = result.reduction_summer_beans_quatum_value;
                        // obj.reduction_summer_beans_fundingsource = result.reduction_summer_beans_fundingsource;
                        obj.reduction_summer_floriculture_crop_area = result.reduction_summer_floriculture_crop_area;
                        obj.reduction_summer_floriculture_quatum_value = result.reduction_summer_floriculture_quatum_value;
                        obj.reduction_summer_floriculture_fundingsource = result.reduction_summer_floriculture_fundingsource;
                        obj.reduction_summer_maize_crop_area = result.reduction_summer_maize_crop_area;
                        obj.reduction_summer_maize_quatum_value = result.reduction_summer_maize_quatum_value;
                        obj.reduction_summer_maize_fundingsource = result.reduction_summer_maize_fundingsource;
                        obj.reduction_summer_fodder_crop_area = result.reduction_summer_fodder_crop_area;
                        obj.reduction_summer_fodder_quatum_value = result.reduction_summer_fodder_quatum_value;
                        obj.reduction_summer_fodder_fundingsource = result.reduction_summer_fodder_fundingsource;
                        obj.reduction_summer_sugarcane_crop_area = result.reduction_summer_sugarcane_crop_area;
                        obj.reduction_summer_sugarcane_quatum_value = result.reduction_summer_sugarcane_quatum_value;
                        obj.reduction_summer_sugarcane_fundingsource = result.reduction_summer_sugarcane_fundingsource;


                        obj.latitude = result.latitude;
                        obj.longitude = result.longitude;


                        obj.reduction_kharif_total_kharifcrop_waterdemand = result.reduction_kharif_total_kharifcrop_waterdemand;
                        obj.reduction_kharif_total_reduc_gw_demand = result.reduction_kharif_total_reduc_gw_demand;

                        obj.reduction_rabi_total_rabicrop_waterdemand = result.reduction_rabi_total_rabicrop_waterdemand;
                        obj.reduction_rabi_total_reduc_gw_demand = result.reduction_rabi_total_reduc_gw_demand;

                        obj.reduction_summer_total_summercrop_waterdemand = result.reduction_summer_total_summercrop_waterdemand;
                        obj.reduction_summer_total_reduc_gw_demand = result.reduction_summer_total_reduc_gw_demand;
                        obj.reduction_total_annual_waterdemand = result.reduction_total_annual_waterdemand;
                        //new columns water requirement
                        obj.reduction_kharif_paddy_water_req = result.reduction_kharif_paddy_water_req;
                        obj.reduction_kharif_ragi_water_req = result.reduction_kharif_ragi_water_req;
                        obj.reduction_kharif_groundnut_water_req = result.reduction_kharif_groundnut_water_req;
                        obj.reduction_kharif_sugarcane_water_req = result.reduction_kharif_sugarcane_water_req;
                        obj.reduction_kharif_tomoto_water_req = result.reduction_kharif_tomoto_water_req;
                        // obj.reduction_kharif_cabbage_water_req = result.reduction_kharif_cabbage_water_req;
                        // obj.reduction_kharif_beans_water_req = result.reduction_kharif_beans_water_req;
                        obj.reduction_kharif_floriculture_water_req = result.reduction_kharif_floriculture_water_req;
                        obj.reduction_kharif_sericulture_water_req = result.reduction_kharif_sericulture_water_req;
                        // obj.reduction_kharif_cucumber_water_req = result.reduction_kharif_cucumber_water_req;
                        obj.reduction_kharif_banana_water_req = result.reduction_kharif_banana_water_req;
                        obj.reduction_kharif_fodder_water_req = result.reduction_kharif_fodder_water_req;
                        obj.reduction_kharif_maize_water_req = result.reduction_kharif_maize_water_req;
                        //obj.reduction_kharif_potato_water_req = result.reduction_kharif_potato_water_req;
                        obj.reduction_kharif_chillies_water_req = result.reduction_kharif_chillies_water_req;
                        obj.reduction_kharif_cotton_water_req = result.reduction_kharif_cotton_water_req;
                        obj.reduction_kharif_melon_water_req = result.reduction_kharif_melon_water_req;
                        obj.reduction_kharif_citrus_water_req = result.reduction_kharif_citrus_water_req;
                        //obj.reduction_kharif_peanut_water_req = result.reduction_kharif_peanut_water_req;
                        obj.reduction_kharif_horticulture_water_req = result.reduction_kharif_horticulture_water_req;
                        //obj.reduction_summer_sugarcane_irri_area = result.reduction_summer_sugarcane_irri_area;

                        obj.reduction_rabi_sericulture_water_req = result.reduction_rabi_sericulture_water_req;
                        obj.reduction_rabi_tomoto_water_req = result.reduction_rabi_tomoto_water_req;
                        // obj.reduction_rabi_cabbage_water_req = result.reduction_rabi_cabbage_water_req;
                        // obj.reduction_rabi_beans_water_req = result.reduction_rabi_beans_water_req;
                        obj.reduction_rabi_floriculture_water_req = result.reduction_rabi_floriculture_water_req;
                        // obj.reduction_rabi_potato_water_req = result.reduction_rabi_potato_water_req;
                        // obj.reduction_rabi_cucumber_water_req = result.reduction_rabi_cucumber_water_req;
                        obj.reduction_rabi_ragi_water_req = result.reduction_rabi_ragi_water_req;
                        obj.reduction_rabi_sugarcane_water_req = result.reduction_rabi_sugarcane_water_req;
                        obj.reduction_rabi_maize_water_req = result.reduction_rabi_maize_water_req;
                        obj.reduction_rabi_fodder_water_req = result.reduction_rabi_fodder_water_req;
                        obj.reduction_rabi_paddy_water_req = result.reduction_rabi_paddy_water_req;
                        obj.reduction_rabi_alfalfa_water_req = result.reduction_rabi_alfalfa_water_req;
                        //obj.reduction_rabi_onion_water_req = result.reduction_rabi_onion_water_req;
                        obj.reduction_rabi_horticulture_water_req = result.reduction_rabi_horticulture_water_req;
                        obj.reduction_rabi_sunflower_water_req = result.reduction_rabi_sunflower_water_req;

                        obj.reduction_summer_sericulture_water_req = result.reduction_summer_sericulture_water_req;
                        obj.reduction_summer_tomoto_water_req = result.reduction_summer_tomoto_water_req;
                        // obj.reduction_summer_cabbage_water_req = result.reduction_summer_cabbage_water_req;
                        //obj.reduction_summer_beans_water_req = result.reduction_summer_beans_water_req;
                        obj.reduction_summer_floriculture_water_req = result.reduction_summer_floriculture_water_req;
                        obj.reduction_summer_maize_water_req = result.reduction_summer_maize_water_req;
                        obj.reduction_summer_fodder_water_req = result.reduction_summer_fodder_water_req;
                        obj.reduction_summer_sugarcane_water_req = result.reduction_summer_sugarcane_water_req;

                        obj.reduction_other_funding_source = result.reduction_other_funding_source;

                        //add crops
                        obj.reduction_kharif_othercrop_name1 = result.reduction_kharif_othercrop_name1;
                        obj.reduction_kharif_othercrop_area1 = result.reduction_kharif_othercrop_area1;
                        obj.reduction_kharif_othercrop_quantum_uservalue1 = result.reduction_kharif_othercrop_quantum_uservalue1;
                        obj.reduction_kharif_othercrop_water_req1 = result.reduction_kharif_othercrop_water_req1;
                        obj.reduction_kharif_othercrop_waterdemand1 = result.reduction_kharif_othercrop_waterdemand1;
                        obj.reduction_kharif_othercrop_reduction_gw_demand1 = result.reduction_kharif_othercrop_reduction_gw_demand1;

                        obj.reduction_kharif_othercrop_name2 = result.reduction_kharif_othercrop_name2;
                        obj.reduction_kharif_othercrop_area2 = result.reduction_kharif_othercrop_area2;
                        obj.reduction_kharif_othercrop_quantum_uservalue2 = result.reduction_kharif_othercrop_quantum_uservalue2;
                        obj.reduction_kharif_othercrop_water_req2 = result.reduction_kharif_othercrop_water_req2;
                        obj.reduction_kharif_othercrop_waterdemand2 = result.reduction_kharif_othercrop_waterdemand2;
                        obj.reduction_kharif_othercrop_reduction_gw_demand2 = result.reduction_kharif_othercrop_reduction_gw_demand2;

                        obj.reduction_kharif_othercrop_name3 = result.reduction_kharif_othercrop_name3;
                        obj.reduction_kharif_othercrop_area3 = result.reduction_kharif_othercrop_area3;
                        obj.reduction_kharif_othercrop_quantum_uservalue3 = result.reduction_kharif_othercrop_quantum_uservalue3;
                        obj.reduction_kharif_othercrop_water_req3 = result.reduction_kharif_othercrop_water_req3;
                        obj.reduction_kharif_othercrop_waterdemand3 = result.reduction_kharif_othercrop_waterdemand3;
                        obj.reduction_kharif_othercrop_reduction_gw_demand3 = result.reduction_kharif_othercrop_reduction_gw_demand3;

                        obj.reduction_kharif_othercrop_name4 = result.reduction_kharif_othercrop_name4;
                        obj.reduction_kharif_othercrop_area4 = result.reduction_kharif_othercrop_area4;
                        obj.reduction_kharif_othercrop_quantum_uservalue4 = result.reduction_kharif_othercrop_quantum_uservalue4;
                        obj.reduction_kharif_othercrop_water_req4 = result.reduction_kharif_othercrop_water_req4;
                        obj.reduction_kharif_othercrop_waterdemand4 = result.reduction_kharif_othercrop_waterdemand4;
                        obj.reduction_kharif_othercrop_reduction_gw_demand4 = result.reduction_kharif_othercrop_reduction_gw_demand4;

                        obj.reduction_kharif_othercrop_name5 = result.reduction_kharif_othercrop_name5;
                        obj.reduction_kharif_othercrop_area5 = result.reduction_kharif_othercrop_area5;
                        obj.reduction_kharif_othercrop_quantum_uservalue5 = result.reduction_kharif_othercrop_quantum_uservalue5;
                        obj.reduction_kharif_othercrop_water_req5 = result.reduction_kharif_othercrop_water_req5;
                        obj.reduction_kharif_othercrop_waterdemand5 = result.reduction_kharif_othercrop_waterdemand5;
                        obj.reduction_kharif_othercrop_reduction_gw_demand5 = result.reduction_kharif_othercrop_reduction_gw_demand5;



                        obj.reduction_rabi_othercrop_name1 = result.reduction_rabi_othercrop_name1;
                        obj.reduction_rabi_othercrop_area1 = result.reduction_rabi_othercrop_area1;
                        obj.reduction_rabi_othercrop_quantum_uservalue1 = result.reduction_rabi_othercrop_quantum_uservalue1;
                        obj.reduction_rabi_othercrop_water_req1 = result.reduction_rabi_othercrop_water_req1;
                        obj.reduction_rabi_othercrop_waterdemand1 = result.reduction_rabi_othercrop_waterdemand1;
                        obj.reduction_rabi_othercrop_reduction_gw_demand1 = result.reduction_rabi_othercrop_reduction_gw_demand1;

                        obj.reduction_rabi_othercrop_name2 = result.reduction_rabi_othercrop_name2;
                        obj.reduction_rabi_othercrop_area2 = result.reduction_rabi_othercrop_area2;
                        obj.reduction_rabi_othercrop_quantum_uservalue2 = result.reduction_rabi_othercrop_quantum_uservalue2;
                        obj.reduction_rabi_othercrop_water_req2 = result.reduction_rabi_othercrop_water_req2;
                        obj.reduction_rabi_othercrop_waterdemand2 = result.reduction_rabi_othercrop_waterdemand2;
                        obj.reduction_rabi_othercrop_reduction_gw_demand2 = result.reduction_rabi_othercrop_reduction_gw_demand2;

                        obj.reduction_rabi_othercrop_name3 = result.reduction_rabi_othercrop_name3;
                        obj.reduction_rabi_othercrop_area3 = result.reduction_rabi_othercrop_area3;
                        obj.reduction_rabi_othercrop_quantum_uservalue3 = result.reduction_rabi_othercrop_quantum_uservalue3;
                        obj.reduction_rabi_othercrop_water_req3 = result.reduction_rabi_othercrop_water_req3;
                        obj.reduction_rabi_othercrop_waterdemand3 = result.reduction_rabi_othercrop_waterdemand3;
                        obj.reduction_rabi_othercrop_reduction_gw_demand3 = result.reduction_rabi_othercrop_reduction_gw_demand3;

                        obj.reduction_rabi_othercrop_name4 = result.reduction_rabi_othercrop_name4;
                        obj.reduction_rabi_othercrop_area4 = result.reduction_rabi_othercrop_area4;
                        obj.reduction_rabi_othercrop_quantum_uservalue4 = result.reduction_rabi_othercrop_quantum_uservalue4;
                        obj.reduction_rabi_othercrop_water_req4 = result.reduction_rabi_othercrop_water_req4;
                        obj.reduction_rabi_othercrop_waterdemand4 = result.reduction_rabi_othercrop_waterdemand4;
                        obj.reduction_rabi_othercrop_reduction_gw_demand4 = result.reduction_rabi_othercrop_reduction_gw_demand4;

                        obj.reduction_rabi_othercrop_name5 = result.reduction_rabi_othercrop_name5;
                        obj.reduction_rabi_othercrop_area5 = result.reduction_rabi_othercrop_area5;
                        obj.reduction_rabi_othercrop_quantum_uservalue5 = result.reduction_rabi_othercrop_quantum_uservalue5;
                        obj.reduction_rabi_othercrop_water_req5 = result.reduction_rabi_othercrop_water_req5;
                        obj.reduction_rabi_othercrop_waterdemand5 = result.reduction_rabi_othercrop_waterdemand5;
                        obj.reduction_rabi_othercrop_reduction_gw_demand5 = result.reduction_rabi_othercrop_reduction_gw_demand5;




                        obj.reduction_summer_othercrop_name1 = result.reduction_summer_othercrop_name1;
                        obj.reduction_summer_othercrop_area1 = result.reduction_summer_othercrop_area1;
                        obj.reduction_summer_othercrop_quantum_uservalue1 = result.reduction_summer_othercrop_quantum_uservalue1;
                        obj.reduction_summer_othercrop_water_req1 = result.reduction_summer_othercrop_water_req1;
                        obj.reduction_summer_othercrop_waterdemand1 = result.reduction_summer_othercrop_waterdemand1;
                        obj.reduction_summer_othercrop_reduction_gw_demand1 = result.reduction_summer_othercrop_reduction_gw_demand1;

                        obj.reduction_summer_othercrop_name2 = result.reduction_summer_othercrop_name2;
                        obj.reduction_summer_othercrop_area2 = result.reduction_summer_othercrop_area2;
                        obj.reduction_summer_othercrop_quantum_uservalue2 = result.reduction_summer_othercrop_quantum_uservalue2;
                        obj.reduction_summer_othercrop_water_req2 = result.reduction_summer_othercrop_water_req2;
                        obj.reduction_summer_othercrop_waterdemand2 = result.reduction_summer_othercrop_waterdemand2;
                        obj.reduction_summer_othercrop_reduction_gw_demand2 = result.reduction_summer_othercrop_reduction_gw_demand2;

                        obj.reduction_summer_othercrop_name3 = result.reduction_summer_othercrop_name3;
                        obj.reduction_summer_othercrop_area3 = result.reduction_summer_othercrop_area3;
                        obj.reduction_summer_othercrop_quantum_uservalue3 = result.reduction_summer_othercrop_quantum_uservalue3;
                        obj.reduction_summer_othercrop_water_req3 = result.reduction_summer_othercrop_water_req3;
                        obj.reduction_summer_othercrop_waterdemand3 = result.reduction_summer_othercrop_waterdemand3;
                        obj.reduction_summer_othercrop_reduction_gw_demand3 = result.reduction_summer_othercrop_reduction_gw_demand3;

                        obj.reduction_summer_othercrop_name4 = result.reduction_summer_othercrop_name4;
                        obj.reduction_summer_othercrop_area4 = result.reduction_summer_othercrop_area4;
                        obj.reduction_summer_othercrop_quantum_uservalue4 = result.reduction_summer_othercrop_quantum_uservalue4;
                        obj.reduction_summer_othercrop_water_req4 = result.reduction_summer_othercrop_water_req4;
                        obj.reduction_summer_othercrop_waterdemand4 = result.reduction_summer_othercrop_waterdemand4;
                        obj.reduction_summer_othercrop_reduction_gw_demand4 = result.reduction_summer_othercrop_reduction_gw_demand4;

                        obj.reduction_summer_othercrop_name5 = result.reduction_summer_othercrop_name5;
                        obj.reduction_summer_othercrop_area5 = result.reduction_summer_othercrop_area5;
                        obj.reduction_summer_othercrop_quantum_uservalue5 = result.reduction_summer_othercrop_quantum_uservalue5;
                        obj.reduction_summer_othercrop_water_req5 = result.reduction_summer_othercrop_water_req5;
                        obj.reduction_summer_othercrop_waterdemand5 = result.reduction_summer_othercrop_waterdemand5;
                        obj.reduction_summer_othercrop_reduction_gw_demand5 = result.reduction_summer_othercrop_reduction_gw_demand5;


                        //other crops
                        //obj.reduction_kharif_othercrop_name = result.reduction_kharif_othercrop_name;
                        //obj.reduction_kharif_othercrop_area = result.reduction_kharif_othercrop_area;
                        //obj.reduction_kharif_othercrop_water_req = result.reduction_kharif_othercrop_water_req;
                        //obj.reduction_kharif_othercrop_quantum_value = result.reduction_kharif_othercrop_quantum_value;
                        //obj.reduction_kharif_othercrop_gw_waterdemand = result.reduction_kharif_othercrop_gw_waterdemand;
                        //obj.reduction_kharif_othercrop_reduc_gw_demand = result.reduction_kharif_othercrop_reduc_gw_demand;

                        //obj.reduction_rabi_othercrop_name = result.reduction_rabi_othercrop_name;
                        //obj.reduction_rabi_othercrop_area = result.reduction_rabi_othercrop_area;
                        //obj.reduction_rabi_othercrop_water_req = result.reduction_rabi_othercrop_water_req;
                        //obj.reduction_rabi_othercrop_quantum_value = result.reduction_rabi_othercrop_quantum_value;
                        //obj.reduction_rabi_othercrop_gw_waterdemand = result.reduction_rabi_othercrop_gw_waterdemand;
                        //obj.reduction_rabi_othercrop_reduc_gw_demand = result.reduction_rabi_othercrop_reduc_gw_demand;

                        //obj.reduction_summer_othercrop_name = result.reduction_summer_othercrop_name;
                        //obj.reduction_summer_othercrop_area = result.reduction_summer_othercrop_area;
                        //obj.reduction_summer_othercrop_water_req = result.reduction_summer_othercrop_water_req;
                        //obj.reduction_summer_othercrop_quantum_value = result.reduction_summer_othercrop_quantum_value;
                        //obj.reduction_summer_othercrop_gw_waterdemand = result.reduction_summer_othercrop_gw_waterdemand;
                        //obj.reduction_summer_othercrop_reduc_gw_demand = result.reduction_summer_othercrop_reduc_gw_demand;


                        ABE.obj_reduction.Add(obj);
                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json(ex);
                }

            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        public ActionResult OtherSaveData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_demandside_other_saveddata>(Data);
                    var obj = new abhy_demandside_other_saveddata();
                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Details = ABE.obj_other.Where(x => x.statename == StateName && x.districtname == DistName && x.blockname == BlockName && x.gpname == GramName).ToList();
                    if (Details.Count != 0)
                    {
                        var Data11 = Details.LastOrDefault();
                        Data11.statename = StateName;
                        Data11.userid = Convert.ToInt32(userid);
                        Data11.blockname = BlockName;
                        Data11.districtname = DistName;
                        Data11.gpname = GramName;
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        Data11.date_time = Today1;


                        //if (result.other_approx_estimated_cost != null && result.other_approx_estimated_cost != "")
                        //{
                        //    string valid_negitive = Validation_NegitiveVal(result.other_approx_estimated_cost);
                        //    if (valid_negitive == "True")
                        //    {
                                

                        //    }
                        //    else
                        //    {
                        //        return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                        //    }

                        //}
                        Data11.other_approx_estimated_cost = result.other_approx_estimated_cost;
                        Data11.other_cost_type = result.other_cost_type;

                        Data11.other_kharif_paddy_water_req = result.other_kharif_paddy_water_req;
                        Data11.other_kharif_paddy_water_demand = result.other_kharif_paddy_water_demand;
                        Data11.other_kharif_paddy_reduc_gw_demand = result.other_kharif_paddy_reduc_gw_demand;

                        Data11.other_kharif_ragi_water_req = result.other_kharif_ragi_water_req;
                        Data11.other_kharif_ragi_water_demand = result.other_kharif_ragi_water_demand;
                        Data11.other_kharif_ragi_reduc_gw_demand = result.other_kharif_ragi_reduc_gw_demand;

                        Data11.other_kharif_groundnut_water_req = result.other_kharif_groundnut_water_req;
                        Data11.other_kharif_groundnut_water_demand = result.other_kharif_groundnut_water_demand;
                        Data11.other_kharif_groundnut_reduc_gw_demand = result.other_kharif_groundnut_reduc_gw_demand;

                        Data11.other_kharif_sugarcane_water_req = result.other_kharif_sugarcane_water_req;
                        Data11.other_kharif_sugarcane_water_demand = result.other_kharif_sugarcane_water_demand;
                        Data11.other_kharif_sugarcane_reduc_gw_demand = result.other_kharif_sugarcane_reduc_gw_demand;

                        Data11.other_kharif_tomoto_water_req = result.other_kharif_tomoto_water_req;
                        Data11.other_kharif_tomoto_water_demand = result.other_kharif_tomoto_water_demand;
                        Data11.other_kharif_tomoto_reduc_gw_demand = result.other_kharif_tomoto_reduc_gw_demand;

                        //Data11.other_kharif_cabbage_water_req = result.other_kharif_cabbage_water_req;
                        //Data11.other_kharif_cabbage_water_demand = result.other_kharif_cabbage_water_demand;
                        //Data11.other_kharif_cabbage_reduc_gw_demand = result.other_kharif_cabbage_reduc_gw_demand;

                        //Data11.other_kharif_beans_water_req = result.other_kharif_beans_water_req;
                        //Data11.other_kharif_beans_water_demand = result.other_kharif_beans_water_demand;
                        //Data11.other_kharif_beans_reduc_gw_demand = result.other_kharif_beans_reduc_gw_demand;

                        Data11.other_kharif_floriculture_water_req = result.other_kharif_floriculture_water_req;
                        Data11.other_kharif_floriculture_water_demand = result.other_kharif_floriculture_water_demand;
                        Data11.other_kharif_floriculture_reduc_gw_demand = result.other_kharif_floriculture_reduc_gw_demand;

                        Data11.other_kharif_sericulture_water_req = result.other_kharif_sericulture_water_req;
                        Data11.other_kharif_sericulture_water_demand = result.other_kharif_sericulture_water_demand;
                        Data11.other_kharif_sericulture_reduc_gw_demand = result.other_kharif_sericulture_reduc_gw_demand;

                        //Data11.other_kharif_cucumber_water_req = result.other_kharif_cucumber_water_req;
                        //Data11.other_kharif_cucumber_water_demand = result.other_kharif_cucumber_water_demand;
                        //Data11.other_kharif_cucumber_reduc_gw_demand = result.other_kharif_cucumber_reduc_gw_demand;

                        Data11.other_kharif_banana_water_req = result.other_kharif_banana_water_req;
                        Data11.other_kharif_banana_water_demand = result.other_kharif_banana_water_demand;
                        Data11.other_kharif_banana_reduc_gw_demand = result.other_kharif_banana_reduc_gw_demand;



                        Data11.other_rabi_sericulture_water_req = result.other_rabi_sericulture_water_req;
                        Data11.other_rabi_sericulture_water_demand = result.other_rabi_sericulture_water_demand;
                        Data11.other_rabi_sericulture_reduc_gw_demand = result.other_rabi_sericulture_reduc_gw_demand;

                        Data11.other_rabi_tomoto_water_req = result.other_rabi_tomoto_water_req;
                        Data11.other_rabi_tomoto_water_demand = result.other_rabi_tomoto_water_demand;
                        Data11.other_rabi_tomoto_reduc_gw_demand = result.other_rabi_tomoto_reduc_gw_demand;

                        //Data11.other_rabi_cabbage_water_req = result.other_rabi_cabbage_water_req;
                        //Data11.other_rabi_cabbage_water_demand = result.other_rabi_cabbage_water_demand;
                        //Data11.other_rabi_cabbage_reduc_gw_demand = result.other_rabi_cabbage_reduc_gw_demand;

                        //Data11.other_rabi_beans_water_req = result.other_rabi_beans_water_req;
                        //Data11.other_rabi_beans_water_demand = result.other_rabi_beans_water_demand;
                        //Data11.other_rabi_beans_reduc_gw_demand = result.other_rabi_beans_reduc_gw_demand;

                        Data11.other_rabi_floriculture_water_req = result.other_rabi_floriculture_water_req;
                        Data11.other_rabi_floriculture_water_demand = result.other_rabi_floriculture_water_demand;
                        Data11.other_rabi_floriculture_reduc_gw_demand = result.other_rabi_floriculture_reduc_gw_demand;

                        //Data11.other_rabi_potato_water_req = result.other_rabi_potato_water_req;
                        //Data11.other_rabi_potato_water_demand = result.other_rabi_potato_water_demand;
                        //Data11.other_rabi_potato_reduc_gw_demand = result.other_rabi_potato_reduc_gw_demand;

                        //Data11.other_rabi_cucumber_water_req = result.other_rabi_cucumber_water_req;
                        //Data11.other_rabi_cucumber_water_demand = result.other_rabi_cucumber_water_demand;
                        //Data11.other_rabi_cucumber_reduc_gw_demand = result.other_rabi_cucumber_reduc_gw_demand;

                        Data11.other_rabi_ragi_water_req = result.other_rabi_ragi_water_req;
                        Data11.other_rabi_ragi_water_demand = result.other_rabi_ragi_water_demand;
                        Data11.other_rabi_ragi_reduc_gw_demand = result.other_rabi_ragi_reduc_gw_demand;

                        Data11.other_rabi_sugarcane_water_req = result.other_rabi_sugarcane_water_req;
                        Data11.other_rabi_sugarcane_water_demand = result.other_rabi_sugarcane_water_demand;
                        Data11.other_rabi_sugarcane_reduc_gw_demand = result.other_rabi_sugarcane_reduc_gw_demand;

                        Data11.other_rabi_maize_water_req = result.other_rabi_maize_water_req;
                        Data11.other_rabi_maize_water_demand = result.other_rabi_maize_water_demand;
                        Data11.other_rabi_maize_reduc_gw_demand = result.other_rabi_maize_reduc_gw_demand;

                        Data11.other_rabi_fodder_water_req = result.other_rabi_fodder_water_req;
                        Data11.other_rabi_fodder_water_demand = result.other_rabi_fodder_water_demand;
                        Data11.other_rabi_fodder_reduc_gw_demand = result.other_rabi_fodder_reduc_gw_demand;

                        Data11.other_rabi_paddy_water_req = result.other_rabi_paddy_water_req;
                        Data11.other_rabi_paddy_water_demand = result.other_rabi_paddy_water_demand;
                        Data11.other_rabi_paddy_reduc_gw_demand = result.other_rabi_paddy_reduc_gw_demand;

                        Data11.other_rabi_alfalfa_water_req = result.other_rabi_alfalfa_water_req;
                        Data11.other_rabi_alfalfa_water_demand = result.other_rabi_alfalfa_water_demand;
                        Data11.other_rabi_alfalfa_reduc_gw_demand = result.other_rabi_alfalfa_reduc_gw_demand;

                        //Data11.other_rabi_onion_water_req = result.other_rabi_onion_water_req;
                        //Data11.other_rabi_onion_water_demand = result.other_rabi_onion_water_demand;
                        //Data11.other_rabi_onion_reduc_gw_demand = result.other_rabi_onion_reduc_gw_demand;

                        Data11.other_rabi_horticulture_water_req = result.other_rabi_horticulture_water_req;
                        Data11.other_rabi_horticulture_water_demand = result.other_rabi_horticulture_water_demand;
                        Data11.other_rabi_horticulture_reduc_gw_demand = result.other_rabi_horticulture_reduc_gw_demand;

                        Data11.other_rabi_sunflower_water_req = result.other_rabi_sunflower_water_req;
                        Data11.other_rabi_sunflower_water_demand = result.other_rabi_sunflower_water_demand;
                        Data11.other_rabi_sunflower_reduc_gw_demand = result.other_rabi_sunflower_reduc_gw_demand;



                        Data11.other_summer_sericulture_water_req = result.other_summer_sericulture_water_req;
                        Data11.other_summer_sericulture_water_demand = result.other_summer_sericulture_water_demand;
                        Data11.other_summer_sericulture_reduc_gw_demand = result.other_summer_sericulture_reduc_gw_demand;

                        Data11.other_summer_tomoto_water_req = result.other_summer_tomoto_water_req;
                        Data11.other_summer_tomoto_water_demand = result.other_summer_tomoto_water_demand;
                        Data11.other_summer_tomoto_reduc_gw_demand = result.other_summer_tomoto_reduc_gw_demand;

                        //Data11.other_summer_cabbage_water_req = result.other_summer_cabbage_water_req;
                        //Data11.other_summer_cabbage_water_demand = result.other_summer_cabbage_water_demand;
                        //Data11.other_summer_cabbage_reduc_gw_demand = result.other_summer_cabbage_reduc_gw_demand;

                        //Data11.other_summer_beans_water_req = result.other_summer_beans_water_req;
                        //Data11.other_summer_beans_water_demand = result.other_summer_beans_water_demand;
                        //Data11.other_summer_beans_reduc_gw_demand = result.other_summer_beans_reduc_gw_demand;

                        Data11.other_summer_floriculture_water_req = result.other_summer_floriculture_water_req;
                        Data11.other_summer_floriculture_water_demand = result.other_summer_floriculture_water_demand;
                        Data11.other_summer_floriculture_reduc_gw_demand = result.other_summer_floriculture_reduc_gw_demand;

                        Data11.other_summer_maize_water_req = result.other_summer_maize_water_req;
                        Data11.other_summer_maize_water_demand = result.other_summer_maize_water_demand;
                        Data11.other_summer_maize_reduc_gw_demand = result.other_summer_maize_reduc_gw_demand;

                        Data11.other_summer_fodder_water_req = result.other_summer_fodder_water_req;
                        Data11.other_summer_fodder_water_demand = result.other_summer_fodder_water_demand;
                        Data11.other_summer_fodder_reduc_gw_demand = result.other_summer_fodder_reduc_gw_demand;

                        Data11.other_summer_sugarcane_water_req = result.other_summer_sugarcane_water_req;
                        Data11.other_summer_sugarcane_water_demand = result.other_summer_sugarcane_water_demand;
                        Data11.other_summer_sugarcane_reduc_gw_demand = result.other_summer_sugarcane_reduc_gw_demand;
                        Data11.other_kharif_fodder_water_req = result.other_kharif_fodder_water_req;
                        Data11.other_kharif_fodder_water_demand = result.other_kharif_fodder_water_demand;
                        Data11.other_kharif_fodder_reduc_gw_demand = result.other_kharif_fodder_reduc_gw_demand;

                        Data11.other_kharif_maize_water_req = result.other_kharif_maize_water_req;
                        Data11.other_kharif_maize_water_demand = result.other_kharif_maize_water_demand;
                        Data11.other_kharif_maize_reduc_gw_demand = result.other_kharif_maize_reduc_gw_demand;

                        //Data11.other_kharif_potato_water_req = result.other_kharif_potato_water_req;
                        //Data11.other_kharif_potato_water_demand = result.other_kharif_potato_water_demand;
                        //Data11.other_kharif_potato_reduc_gw_demand = result.other_kharif_potato_reduc_gw_demand;

                        Data11.other_kharif_chillies_water_req = result.other_kharif_chillies_water_req;
                        Data11.other_kharif_chillies_water_demand = result.other_kharif_chillies_water_demand;
                        Data11.other_kharif_chillies_reduc_gw_demand = result.other_kharif_chillies_reduc_gw_demand;

                        Data11.other_kharif_cotton_water_req = result.other_kharif_cotton_water_req;
                        Data11.other_kharif_cotton_water_demand = result.other_kharif_cotton_water_demand;
                        Data11.other_kharif_cotton_reduc_gw_demand = result.other_kharif_cotton_reduc_gw_demand;

                        Data11.other_kharif_melon_water_req = result.other_kharif_melon_water_req;
                        Data11.other_kharif_melon_water_demand = result.other_kharif_melon_water_demand;
                        Data11.other_kharif_melon_reduc_gw_demand = result.other_kharif_melon_reduc_gw_demand;

                        Data11.other_kharif_citrus_water_req = result.other_kharif_citrus_water_req;
                        Data11.other_kharif_citrus_water_demand = result.other_kharif_citrus_water_demand;
                        Data11.other_kharif_citrus_reduc_gw_demand = result.other_kharif_citrus_reduc_gw_demand;

                        //Data11.other_kharif_peanut_water_req = result.other_kharif_peanut_water_req;
                        //Data11.other_kharif_peanut_water_demand = result.other_kharif_peanut_water_demand;
                        //Data11.other_kharif_peanut_reduc_gw_demand = result.other_kharif_peanut_reduc_gw_demand;

                        Data11.other_kharif_horticulture_water_req = result.other_kharif_horticulture_water_req;
                        Data11.other_kharif_horticulture_water_demand = result.other_kharif_horticulture_water_demand;
                        Data11.other_kharif_horticulture_reduc_gw_demand = result.other_kharif_horticulture_reduc_gw_demand;

                        Data11.other_kharif_paddy_crop_area = result.other_kharif_paddy_crop_area;
                        Data11.other_kharif_paddy_intervention_value = result.other_kharif_paddy_intervention_value;
                        Data11.other_kharif_paddy_fundingsource = result.other_kharif_paddy_fundingsource;

                        Data11.other_kharif_ragi_crop_area = result.other_kharif_ragi_crop_area;
                        Data11.other_kharif_ragi_intervention_value = result.other_kharif_ragi_intervention_value;
                        Data11.other_kharif_ragi_fundingsource = result.other_kharif_ragi_fundingsource;

                        Data11.other_kharif_groundnut_crop_area = result.other_kharif_groundnut_crop_area;
                        Data11.other_kharif_groundnut_intervention_value = result.other_kharif_groundnut_intervention_value;
                        Data11.other_kharif_groundnut_fundingsource = result.other_kharif_groundnut_fundingsource;

                        Data11.other_kharif_sugarcane_crop_area = result.other_kharif_sugarcane_crop_area;
                        Data11.other_kharif_sugarcane_intervention_value = result.other_kharif_sugarcane_intervention_value;
                        Data11.other_kharif_sugarcane_fundingsource = result.other_kharif_sugarcane_fundingsource;

                        Data11.other_kharif_tomoto_crop_area = result.other_kharif_tomoto_crop_area;
                        Data11.other_kharif_tomoto_intervention_value = result.other_kharif_tomoto_intervention_value;
                        Data11.other_kharif_tomoto_fundingsource = result.other_kharif_tomoto_fundingsource;

                        //Data11.other_kharif_cabbage_crop_area = result.other_kharif_cabbage_crop_area;
                        //Data11.other_kharif_cabbage_intervention_value = result.other_kharif_cabbage_intervention_value;
                        //Data11.other_kharif_cabbage_fundingsource = result.other_kharif_cabbage_fundingsource;
                        //Data11.other_kharif_beans_crop_area = result.other_kharif_beans_crop_area;
                        //Data11.other_kharif_beans_intervention_value = result.other_kharif_beans_intervention_value;
                        //Data11.other_kharif_beans_fundingsource = result.other_kharif_beans_fundingsource;

                        Data11.other_kharif_floriculture_crop_area = result.other_kharif_floriculture_crop_area;
                        Data11.other_kharif_floriculture_intervention_value = result.other_kharif_floriculture_intervention_value;
                        Data11.other_kharif_floriculture_fundingsource = result.other_kharif_floriculture_fundingsource;
                        Data11.other_kharif_sericulture_crop_area = result.other_kharif_sericulture_crop_area;
                        Data11.other_kharif_sericulture_intervention_value = result.other_kharif_sericulture_intervention_value;
                        Data11.other_kharif_sericulture_fundingsource = result.other_kharif_sericulture_fundingsource;

                        //Data11.other_kharif_cucumber_crop_area = result.other_kharif_cucumber_crop_area;
                        //Data11.other_kharif_cucumber_intervention_value = result.other_kharif_cucumber_intervention_value;
                        //Data11.other_kharif_cucumber_fundingsource = result.other_kharif_cucumber_fundingsource;

                        Data11.other_kharif_banana_crop_area = result.other_kharif_banana_crop_area;
                        Data11.other_kharif_banana_intervention_value = result.other_kharif_banana_intervention_value;
                        Data11.other_kharif_banana_fundingsource = result.other_kharif_banana_fundingsource;
                        Data11.other_kharif_fodder_crop_area = result.other_kharif_fodder_crop_area;
                        Data11.other_kharif_fodder_intervention_value = result.other_kharif_fodder_intervention_value;
                        Data11.other_kharif_fodder_fundingsource = result.other_kharif_fodder_fundingsource;
                        Data11.other_kharif_maize_crop_area = result.other_kharif_maize_crop_area;
                        Data11.other_kharif_maize_intervention_value = result.other_kharif_maize_intervention_value;
                        Data11.other_kharif_maize_fundingsource = result.other_kharif_maize_fundingsource;

                        //Data11.other_kharif_potato_crop_area = result.other_kharif_potato_crop_area;
                        //Data11.other_kharif_potato_intervention_value = result.other_kharif_potato_intervention_value;
                        //Data11.other_kharif_potato_fundingsource = result.other_kharif_potato_fundingsource;

                        Data11.other_kharif_chillies_crop_area = result.other_kharif_chillies_crop_area;
                        Data11.other_kharif_chillies_intervention_value = result.other_kharif_chillies_intervention_value;
                        Data11.other_kharif_chillies_fundingsource = result.other_kharif_chillies_fundingsource;
                        Data11.other_kharif_cotton_crop_area = result.other_kharif_cotton_crop_area;
                        Data11.other_kharif_cotton_intervention_value = result.other_kharif_cotton_intervention_value;
                        Data11.other_kharif_cotton_fundingsource = result.other_kharif_cotton_fundingsource;
                        Data11.other_kharif_melon_crop_area = result.other_kharif_melon_crop_area;
                        Data11.other_kharif_melon_intervention_value = result.other_kharif_melon_intervention_value;
                        Data11.other_kharif_melon_fundingsource = result.other_kharif_melon_fundingsource;
                        Data11.other_kharif_citrus_crop_area = result.other_kharif_citrus_crop_area;
                        Data11.other_kharif_citrus_intervention_value = result.other_kharif_citrus_intervention_value;
                        Data11.other_kharif_citrus_fundingsource = result.other_kharif_citrus_fundingsource;

                        //Data11.other_kharif_peanut_crop_area = result.other_kharif_peanut_crop_area;
                        //Data11.other_kharif_peanut_intervention_value = result.other_kharif_peanut_intervention_value;
                        //Data11.other_kharif_peanut_fundingsource = result.other_kharif_peanut_fundingsource;

                        Data11.other_kharif_horticulture_crop_area = result.other_kharif_horticulture_crop_area;
                        Data11.other_kharif_horticulture_intervention_value = result.other_kharif_horticulture_intervention_value;
                        Data11.other_kharif_horticulture_fundingsource = result.other_kharif_horticulture_fundingsource;
                        Data11.other_rabi_sericulture_crop_area = result.other_rabi_sericulture_crop_area;
                        Data11.other_rabi_sericulture_intervention_value = result.other_rabi_sericulture_intervention_value;
                        Data11.other_rabi_sericulture_fundingsource = result.other_rabi_sericulture_fundingsource;
                        Data11.other_rabi_tomoto_crop_area = result.other_rabi_tomoto_crop_area;
                        Data11.other_rabi_tomoto_intervention_value = result.other_rabi_tomoto_intervention_value;
                        Data11.other_rabi_tomoto_fundingsource = result.other_rabi_tomoto_fundingsource;
                        //Data11.other_rabi_cabbage_crop_area = result.other_rabi_cabbage_crop_area;
                        //Data11.other_rabi_cabbage_intervention_value = result.other_rabi_cabbage_intervention_value;
                        //Data11.other_rabi_cabbage_fundingsource = result.other_rabi_cabbage_fundingsource;
                        //Data11.other_rabi_beans_crop_area = result.other_rabi_beans_crop_area;
                        //Data11.other_rabi_beans_intervention_value = result.other_rabi_beans_intervention_value;
                        //Data11.other_rabi_beans_fundingsource = result.other_rabi_beans_fundingsource;
                        Data11.other_rabi_floriculture_crop_area = result.other_rabi_floriculture_crop_area;
                        Data11.other_rabi_floriculture_intervention_value = result.other_rabi_floriculture_intervention_value;
                        Data11.other_rabi_floriculture_fundingsource = result.other_rabi_floriculture_fundingsource;
                        //Data11.other_rabi_potato_crop_area = result.other_rabi_potato_crop_area;
                        //Data11.other_rabi_potato_intervention_value = result.other_rabi_potato_intervention_value;
                        //Data11.other_rabi_potato_fundingsource = result.other_rabi_potato_fundingsource;
                        //Data11.other_rabi_cucumber_crop_area = result.other_rabi_cucumber_crop_area;
                        //Data11.other_rabi_cucuber_intervention_value = result.other_rabi_cucuber_intervention_value;
                        //Data11.other_rabi_cucumber_fundingsource = result.other_rabi_cucumber_fundingsource;
                        Data11.other_rabi_ragi_crop_area = result.other_rabi_ragi_crop_area;
                        Data11.other_rabi_ragi_intervention_value = result.other_rabi_ragi_intervention_value;
                        Data11.other_rabi_ragi_fundingsource = result.other_rabi_ragi_fundingsource;
                        Data11.other_rabi_sugarcane_crop_area = result.other_rabi_sugarcane_crop_area;
                        Data11.other_rabi_sugarcane_intervention_value = result.other_rabi_sugarcane_intervention_value;
                        Data11.other_rabi_sugarcane_fundingsource = result.other_rabi_sugarcane_fundingsource;
                        Data11.other_rabi_maize_crop_area = result.other_rabi_maize_crop_area;
                        Data11.other_rabi_maize_intervention_value = result.other_rabi_maize_intervention_value;
                        Data11.other_rabi_maize_fundingsource = result.other_rabi_maize_fundingsource;
                        Data11.other_rabi_fodder_crop_area = result.other_rabi_fodder_crop_area;
                        Data11.other_rabi_fodder_intervention_value = result.other_rabi_fodder_intervention_value;
                        Data11.other_rabi_fodder_fundingsource = result.other_rabi_fodder_fundingsource;
                        Data11.other_rabi_paddy_crop_area = result.other_rabi_paddy_crop_area;
                        Data11.other_rabi_paddy_intervention_value = result.other_rabi_paddy_intervention_value;
                        Data11.other_rabi_paddy_fundingsource = result.other_rabi_paddy_fundingsource;
                        Data11.other_rabi_alfalfa_crop_area = result.other_rabi_alfalfa_crop_area;
                        Data11.other_rabi_alfalfa_intervention_value = result.other_rabi_alfalfa_intervention_value;
                        Data11.other_rabi_alfalfa_fundingsource = result.other_rabi_alfalfa_fundingsource;
                        //Data11.other_rabi_onion_crop_area = result.other_rabi_onion_crop_area;
                        //Data11.other_rabi_onion_intervention_value = result.other_rabi_onion_intervention_value;
                        //Data11.other_rabi_onion_fundingsource = result.other_rabi_onion_fundingsource;
                        Data11.other_rabi_horticulture_crop_area = result.other_rabi_horticulture_crop_area;
                        Data11.other_rabi_horticulture_intervention_value = result.other_rabi_horticulture_intervention_value;
                        Data11.other_rabi_horticulture_fundingsource = result.other_rabi_horticulture_fundingsource;
                        Data11.other_rabi_sunflower_crop_area = result.other_rabi_sunflower_crop_area;
                        Data11.other_rabi_sunflower_intervention_value = result.other_rabi_sunflower_intervention_value;
                        Data11.other_rabi_sunflower_fundingsource = result.other_rabi_sunflower_fundingsource;
                        Data11.other_summer_sericulture_crop_area = result.other_summer_sericulture_crop_area;
                        Data11.other_summer_sericulture_intervention_value = result.other_summer_sericulture_intervention_value;
                        Data11.other_summer_sericulture_fundingsource = result.other_summer_sericulture_fundingsource;
                        Data11.other_summer_tomoto_crop_area = result.other_summer_tomoto_crop_area;
                        Data11.other_summer_tomoto_intervention_value = result.other_summer_tomoto_intervention_value;
                        Data11.other_summer_tomoto_fundingsource = result.other_summer_tomoto_fundingsource;
                        //Data11.other_summer_cabbage_crop_area = result.other_summer_cabbage_crop_area;
                        //Data11.other_summer_cabbage_intervention_value = result.other_summer_cabbage_intervention_value;
                        //Data11.other_summer_cabbage_fundingsource = result.other_summer_cabbage_fundingsource;
                        //Data11.other_summer_beans_crop_area = result.other_summer_beans_crop_area;
                        //Data11.other_summer_beans_intervention_value = result.other_summer_beans_intervention_value;
                        //Data11.other_summer_beans_fundingsource = result.other_summer_beans_fundingsource;
                        Data11.other_summer_floriculture_crop_area = result.other_summer_floriculture_crop_area;
                        Data11.other_summer_floiculture_intervention_value = result.other_summer_floiculture_intervention_value;
                        Data11.other_summer_floriculture_fundingsource = result.other_summer_floriculture_fundingsource;
                        Data11.other_summer_maize_crop_area = result.other_summer_maize_crop_area;
                        Data11.other_summer_maize_intervention_value = result.other_summer_maize_intervention_value;
                        Data11.other_summer_maize_fundingsource = result.other_summer_maize_fundingsource;
                        Data11.other_summer_fodder_crop_area = result.other_summer_fodder_crop_area;
                        Data11.other_summer_fodder_intervention_value = result.other_summer_fodder_intervention_value;
                        Data11.other_summer_fodder_fundingsource = result.other_summer_fodder_fundingsource;
                        Data11.other_summer_sugarcane_crop_area = result.other_summer_sugarcane_crop_area;
                        Data11.other_summer_sugarcane_intervention_value = result.other_summer_sugarcane_intervention_value;
                        Data11.other_summer_sugarcane_fundingsource = result.other_summer_sugarcane_fundingsource;



                        Data11.other_total_annual_waterdemand = result.other_total_annual_waterdemand;

                        Data11.latitude = result.latitude;
                        Data11.longitude = result.longitude;

                        // Data11.userid
                        //Data11.other_measure_kharif_water_demand = result.other_measure_kharif_water_demand;
                        //Data11.other_measure_rabi_water_demand = result.other_measure_rabi_water_demand;
                        //Data11.other_measure_summer_crop_water_demand = result.other_measure_summer_crop_water_demand;

                        //new columns for water requirement and water saving
                        //new columns water requirement
                        Data11.other_kharif_paddy_water_req = result.other_kharif_paddy_water_req;
                        Data11.other_kharif_ragi_water_req = result.other_kharif_ragi_water_req;
                        Data11.other_kharif_groundnut_water_req = result.other_kharif_groundnut_water_req;
                        Data11.other_kharif_sugarcane_water_req = result.other_kharif_sugarcane_water_req;
                        Data11.other_kharif_tomoto_water_req = result.other_kharif_tomoto_water_req;
                        // Data11.other_kharif_cabbage_water_req = result.other_kharif_cabbage_water_req;
                        // Data11.other_kharif_beans_water_req = result.other_kharif_beans_water_req;
                        Data11.other_kharif_floriculture_water_req = result.other_kharif_floriculture_water_req;
                        Data11.other_kharif_sericulture_water_req = result.other_kharif_sericulture_water_req;
                        //Data11.other_kharif_cucumber_water_req = result.other_kharif_cucumber_water_req;
                        Data11.other_kharif_banana_water_req = result.other_kharif_banana_water_req;
                        Data11.other_kharif_fodder_water_req = result.other_kharif_fodder_water_req;
                        Data11.other_kharif_maize_water_req = result.other_kharif_maize_water_req;
                        // Data11.other_kharif_potato_water_req = result.other_kharif_potato_water_req;
                        Data11.other_kharif_chillies_water_req = result.other_kharif_chillies_water_req;
                        Data11.other_kharif_cotton_water_req = result.other_kharif_cotton_water_req;
                        Data11.other_kharif_melon_water_req = result.other_kharif_melon_water_req;
                        Data11.other_kharif_citrus_water_req = result.other_kharif_citrus_water_req;
                        // Data11.other_kharif_peanut_water_req = result.other_kharif_peanut_water_req;
                        Data11.other_kharif_horticulture_water_req = result.other_kharif_horticulture_water_req;
                        //Data11.other_summer_sugarcane_irri_area = result.other_summer_sugarcane_irri_area;

                        Data11.other_rabi_sericulture_water_req = result.other_rabi_sericulture_water_req;
                        Data11.other_rabi_tomoto_water_req = result.other_rabi_tomoto_water_req;
                        // Data11.other_rabi_cabbage_water_req = result.other_rabi_cabbage_water_req;
                        // Data11.other_rabi_beans_water_req = result.other_rabi_beans_water_req;
                        Data11.other_rabi_floriculture_water_req = result.other_rabi_floriculture_water_req;
                        // Data11.other_rabi_potato_water_req = result.other_rabi_potato_water_req;
                        // Data11.other_rabi_cucumber_water_req = result.other_rabi_cucumber_water_req;
                        Data11.other_rabi_ragi_water_req = result.other_rabi_ragi_water_req;
                        Data11.other_rabi_sugarcane_water_req = result.other_rabi_sugarcane_water_req;
                        Data11.other_rabi_maize_water_req = result.other_rabi_maize_water_req;
                        Data11.other_rabi_fodder_water_req = result.other_rabi_fodder_water_req;
                        Data11.other_rabi_paddy_water_req = result.other_rabi_paddy_water_req;
                        Data11.other_rabi_alfalfa_water_req = result.other_rabi_alfalfa_water_req;
                        //Data11.other_rabi_onion_water_req = result.other_rabi_onion_water_req;
                        Data11.other_rabi_horticulture_water_req = result.other_rabi_horticulture_water_req;
                        Data11.other_rabi_sunflower_water_req = result.other_rabi_sunflower_water_req;

                        Data11.other_summer_sericulture_water_req = result.other_summer_sericulture_water_req;
                        Data11.other_summer_tomoto_water_req = result.other_summer_tomoto_water_req;
                        // Data11.other_summer_cabbage_water_req = result.other_summer_cabbage_water_req;
                        // Data11.other_summer_beans_water_req = result.other_summer_beans_water_req;
                        Data11.other_summer_floriculture_water_req = result.other_summer_floriculture_water_req;
                        Data11.other_summer_maize_water_req = result.other_summer_maize_water_req;
                        Data11.other_summer_fodder_water_req = result.other_summer_fodder_water_req;
                        Data11.other_summer_sugarcane_water_req = result.other_summer_sugarcane_water_req;

                        //new columns water saving

                        Data11.other_kharif_paddy_water_saving = result.other_kharif_paddy_water_saving;
                        Data11.other_kharif_ragi_water_saving = result.other_kharif_ragi_water_saving;
                        Data11.other_kharif_groundnut_water_saving = result.other_kharif_groundnut_water_saving;
                        Data11.other_kharif_sugarcane_water_saving = result.other_kharif_sugarcane_water_saving;
                        Data11.other_kharif_tomoto_water_saving = result.other_kharif_tomoto_water_saving;
                        // Data11.other_kharif_cabbage_water_saving = result.other_kharif_cabbage_water_saving;
                        // Data11.other_kharif_beans_water_saving = result.other_kharif_beans_water_saving;
                        Data11.other_kharif_floriculture_water_saving = result.other_kharif_floriculture_water_saving;
                        Data11.other_kharif_sericulture_water_saving = result.other_kharif_sericulture_water_saving;
                        // Data11.other_kharif_cucumber_water_saving = result.other_kharif_cucumber_water_saving;
                        Data11.other_kharif_banana_water_saving = result.other_kharif_banana_water_saving;
                        Data11.other_kharif_fodder_water_saving = result.other_kharif_fodder_water_saving;
                        Data11.other_kharif_maize_water_saving = result.other_kharif_maize_water_saving;
                        //  Data11.other_kharif_potato_water_saving = result.other_kharif_potato_water_saving;
                        Data11.other_kharif_chillies_water_saving = result.other_kharif_chillies_water_saving;
                        Data11.other_kharif_cotton_water_saving = result.other_kharif_cotton_water_saving;
                        Data11.other_kharif_melon_water_saving = result.other_kharif_melon_water_saving;
                        Data11.other_kharif_citrus_water_saving = result.other_kharif_citrus_water_saving;
                        // Data11.other_kharif_peanut_water_saving = result.other_kharif_peanut_water_saving;
                        Data11.other_kharif_horticulture_water_saving = result.other_kharif_horticulture_water_saving;
                        //Data11.other_summer_sugarcane_irri_area = result.other_summer_sugarcane_irri_area;

                        Data11.other_rabi_sericulture_water_saving = result.other_rabi_sericulture_water_saving;
                        Data11.other_rabi_tomoto_water_saving = result.other_rabi_tomoto_water_saving;
                        // Data11.other_rabi_cabbage_water_saving = result.other_rabi_cabbage_water_saving;
                        // Data11.other_rabi_beans_water_saving = result.other_rabi_beans_water_saving;
                        Data11.other_rabi_floriculture_water_saving = result.other_rabi_floriculture_water_saving;
                        // Data11.other_rabi_potato_water_saving = result.other_rabi_potato_water_saving;
                        // Data11.other_rabi_cucumber_water_saving = result.other_rabi_cucumber_water_saving;
                        Data11.other_rabi_ragi_water_saving = result.other_rabi_ragi_water_saving;
                        Data11.other_rabi_sugarcane_water_saving = result.other_rabi_sugarcane_water_saving;
                        Data11.other_rabi_maize_water_saving = result.other_rabi_maize_water_saving;
                        Data11.other_rabi_fodder_water_saving = result.other_rabi_fodder_water_saving;
                        Data11.other_rabi_paddy_water_saving = result.other_rabi_paddy_water_saving;
                        Data11.other_rabi_alfalfa_water_saving = result.other_rabi_alfalfa_water_saving;
                        //Data11.other_rabi_onion_water_saving = result.other_rabi_onion_water_saving;
                        Data11.other_rabi_horticulture_water_saving = result.other_rabi_horticulture_water_saving;
                        Data11.other_rabi_sunflower_water_saving = result.other_rabi_sunflower_water_saving;

                        Data11.other_summer_sericulture_water_saving = result.other_summer_sericulture_water_saving;
                        Data11.other_summer_tomoto_water_saving = result.other_summer_tomoto_water_saving;
                        // Data11.other_summer_cabbage_water_saving = result.other_summer_cabbage_water_saving;
                        // Data11.other_summer_beans_water_saving = result.other_summer_beans_water_saving;
                        Data11.other_summer_floriculture_water_saving = result.other_summer_floriculture_water_saving;
                        Data11.other_summer_maize_water_saving = result.other_summer_maize_water_saving;
                        Data11.other_summer_fodder_water_saving = result.other_summer_fodder_water_saving;
                        Data11.other_summer_sugarcane_water_saving = result.other_summer_sugarcane_water_saving;



                        //totals
                        Data11.other_kharif_total_kharifcrop_waterdemand = result.other_kharif_total_kharifcrop_waterdemand;
                        Data11.other_kharif_total_reduc_gw_demand = result.other_kharif_total_reduc_gw_demand;
                        Data11.other_rabi_total_rabicrop_waterdemand = result.other_rabi_total_rabicrop_waterdemand;
                        Data11.other_rabi_total_reduc_gw_demand = result.other_rabi_total_reduc_gw_demand;
                        Data11.other_summer_total_summercrop_waterdemand = result.other_summer_total_summercrop_waterdemand;
                        Data11.other_summer_total_reduc_gw_demand = result.other_summer_total_reduc_gw_demand;


                        Data11.other_funding_source = result.other_funding_source;

                        //summer horiculture
                        Data11.other_summer_horticulture_crop_area = result.other_summer_horticulture_crop_area;
                        Data11.other_summer_horticulture_invention_proposed = result.other_summer_horticulture_invention_proposed;
                        Data11.other_summer_horticulture_water_saving = result.other_summer_horticulture_water_saving;
                        Data11.other_summer_horticulture_water_req = result.other_summer_horticulture_water_req;
                        Data11.other_summer_horticulture_waterdemand = result.other_summer_horticulture_waterdemand;
                        Data11.other_summer_horticulture_reduction_gw_deman = result.other_summer_horticulture_reduction_gw_deman;

                        //add crops
                        //add crops
                        //add crops
                        //add crops
                        Data11.other_kharif_othercrop_name1 = result.other_kharif_othercrop_name1;
                        Data11.other_kharif_othercrop_area1 = result.other_kharif_othercrop_area1;
                        Data11.other_kharif_othercrop_invention_proposed1 = result.other_kharif_othercrop_invention_proposed1;
                        Data11.other_kharif_othercrop_water_saving1 = result.other_kharif_othercrop_water_saving1;
                        Data11.other_kharif_othercrop_water_req1 = result.other_kharif_othercrop_water_req1;
                        Data11.other_kharif_othercrop_waterdemand1 = result.other_kharif_othercrop_waterdemand1;
                        Data11.other_kharif_othercrop_reduction_gw_demand1 = result.other_kharif_othercrop_reduction_gw_demand1;

                        Data11.other_kharif_othercrop_name2 = result.other_kharif_othercrop_name2;
                        Data11.other_kharif_othercrop_area2 = result.other_kharif_othercrop_area2;
                        Data11.other_kharif_othercrop_invention_proposed2 = result.other_kharif_othercrop_invention_proposed2;
                        Data11.other_kharif_othercrop_water_saving2 = result.other_kharif_othercrop_water_saving2;
                        Data11.other_kharif_othercrop_water_req2 = result.other_kharif_othercrop_water_req2;
                        Data11.other_kharif_othercrop_waterdemand2 = result.other_kharif_othercrop_waterdemand2;
                        Data11.other_kharif_othercrop_reduction_gw_demand2 = result.other_kharif_othercrop_reduction_gw_demand2;

                        Data11.other_kharif_othercrop_name3 = result.other_kharif_othercrop_name3;
                        Data11.other_kharif_othercrop_area3 = result.other_kharif_othercrop_area3;
                        Data11.other_kharif_othercrop_invention_proposed3 = result.other_kharif_othercrop_invention_proposed3;
                        Data11.other_kharif_othercrop_water_saving3 = result.other_kharif_othercrop_water_saving3;
                        Data11.other_kharif_othercrop_water_req3 = result.other_kharif_othercrop_water_req3;
                        Data11.other_kharif_othercrop_waterdemand3 = result.other_kharif_othercrop_waterdemand3;
                        Data11.other_kharif_othercrop_reduction_gw_demand3 = result.other_kharif_othercrop_reduction_gw_demand3;

                        Data11.other_kharif_othercrop_name4 = result.other_kharif_othercrop_name4;
                        Data11.other_kharif_othercrop_area4 = result.other_kharif_othercrop_area4;
                        Data11.other_kharif_othercrop_invention_proposed4 = result.other_kharif_othercrop_invention_proposed4;
                        Data11.other_kharif_othercrop_water_saving4 = result.other_kharif_othercrop_water_saving4;
                        Data11.other_kharif_othercrop_water_req4 = result.other_kharif_othercrop_water_req4;
                        Data11.other_kharif_othercrop_waterdemand4 = result.other_kharif_othercrop_waterdemand4;
                        Data11.other_kharif_othercrop_reduction_gw_demand4 = result.other_kharif_othercrop_reduction_gw_demand4;

                        Data11.other_kharif_othercrop_name5 = result.other_kharif_othercrop_name5;
                        Data11.other_kharif_othercrop_area5 = result.other_kharif_othercrop_area5;
                        Data11.other_kharif_othercrop_invention_proposed5 = result.other_kharif_othercrop_invention_proposed5;
                        Data11.other_kharif_othercrop_water_saving5 = result.other_kharif_othercrop_water_saving5;
                        Data11.other_kharif_othercrop_water_req5 = result.other_kharif_othercrop_water_req5;
                        Data11.other_kharif_othercrop_waterdemand5 = result.other_kharif_othercrop_waterdemand5;
                        Data11.other_kharif_othercrop_reduction_gw_demand5 = result.other_kharif_othercrop_reduction_gw_demand5;


                        Data11.other_rabi_othercrop_name1 = result.other_rabi_othercrop_name1;
                        Data11.other_rabi_othercrop_area1 = result.other_rabi_othercrop_area1;
                        Data11.other_rabi_othercrop_invention_proposed1 = result.other_rabi_othercrop_invention_proposed1;
                        Data11.other_rabi_othercrop_water_saving1 = result.other_rabi_othercrop_water_saving1;
                        Data11.other_rabi_othercrop_water_req1 = result.other_rabi_othercrop_water_req1;
                        Data11.other_rabi_othercrop_waterdemand1 = result.other_rabi_othercrop_waterdemand1;
                        Data11.other_rabi_othercrop_reduction_gw_demand1 = result.other_rabi_othercrop_reduction_gw_demand1;

                        Data11.other_rabi_othercrop_name2 = result.other_rabi_othercrop_name2;
                        Data11.other_rabi_othercrop_area2 = result.other_rabi_othercrop_area2;
                        Data11.other_rabi_othercrop_invention_proposed2 = result.other_rabi_othercrop_invention_proposed2;
                        Data11.other_rabi_othercrop_water_saving2 = result.other_rabi_othercrop_water_saving2;
                        Data11.other_rabi_othercrop_water_req2 = result.other_rabi_othercrop_water_req2;
                        Data11.other_rabi_othercrop_waterdemand2 = result.other_rabi_othercrop_waterdemand2;
                        Data11.other_rabi_othercrop_reduction_gw_demand2 = result.other_rabi_othercrop_reduction_gw_demand2;

                        Data11.other_rabi_othercrop_name3 = result.other_rabi_othercrop_name3;
                        Data11.other_rabi_othercrop_area3 = result.other_rabi_othercrop_area3;
                        Data11.other_rabi_othercrop_invention_proposed3 = result.other_rabi_othercrop_invention_proposed3;
                        Data11.other_rabi_othercrop_water_saving3 = result.other_rabi_othercrop_water_saving3;
                        Data11.other_rabi_othercrop_water_req3 = result.other_rabi_othercrop_water_req3;
                        Data11.other_rabi_othercrop_waterdemand3 = result.other_rabi_othercrop_waterdemand3;
                        Data11.other_rabi_othercrop_reduction_gw_demand3 = result.other_rabi_othercrop_reduction_gw_demand3;

                        Data11.other_rabi_othercrop_name4 = result.other_rabi_othercrop_name4;
                        Data11.other_rabi_othercrop_area4 = result.other_rabi_othercrop_area4;
                        Data11.other_rabi_othercrop_invention_proposed4 = result.other_rabi_othercrop_invention_proposed4;
                        Data11.other_rabi_othercrop_water_saving4 = result.other_rabi_othercrop_water_saving4;
                        Data11.other_rabi_othercrop_water_req4 = result.other_rabi_othercrop_water_req4;
                        Data11.other_rabi_othercrop_waterdemand4 = result.other_rabi_othercrop_waterdemand4;
                        Data11.other_rabi_othercrop_reduction_gw_demand4 = result.other_rabi_othercrop_reduction_gw_demand4;

                        Data11.other_rabi_othercrop_name5 = result.other_rabi_othercrop_name5;
                        Data11.other_rabi_othercrop_area5 = result.other_rabi_othercrop_area5;
                        Data11.other_rabi_othercrop_invention_proposed5 = result.other_rabi_othercrop_invention_proposed5;
                        Data11.other_rabi_othercrop_water_saving5 = result.other_rabi_othercrop_water_saving5;
                        Data11.other_rabi_othercrop_water_req5 = result.other_rabi_othercrop_water_req5;
                        Data11.other_rabi_othercrop_waterdemand5 = result.other_rabi_othercrop_waterdemand5;
                        Data11.other_rabi_othercrop_reduction_gw_demand5 = result.other_rabi_othercrop_reduction_gw_demand5;


                        Data11.other_summer_othercrop_name1 = result.other_summer_othercrop_name1;
                        Data11.other_summer_othercrop_area1 = result.other_summer_othercrop_area1;
                        Data11.other_summer_othercrop_invention_proposed1 = result.other_summer_othercrop_invention_proposed1;
                        Data11.other_summer_othercrop_water_saving1 = result.other_summer_othercrop_water_saving1;
                        Data11.other_summer_othercrop_water_req1 = result.other_summer_othercrop_water_req1;
                        Data11.other_summer_othercrop_waterdemand1 = result.other_summer_othercrop_waterdemand1;
                        Data11.other_summer_othercrop_reduction_gw_demand1 = result.other_summer_othercrop_reduction_gw_demand1;

                        Data11.other_summer_othercrop_name2 = result.other_summer_othercrop_name2;
                        Data11.other_summer_othercrop_area2 = result.other_summer_othercrop_area2;
                        Data11.other_summer_othercrop_invention_proposed2 = result.other_summer_othercrop_invention_proposed2;
                        Data11.other_summer_othercrop_water_saving2 = result.other_summer_othercrop_water_saving2;
                        Data11.other_summer_othercrop_water_req2 = result.other_summer_othercrop_water_req2;
                        Data11.other_summer_othercrop_waterdemand2 = result.other_summer_othercrop_waterdemand2;
                        Data11.other_summer_othercrop_reduction_gw_demand2 = result.other_summer_othercrop_reduction_gw_demand2;

                        Data11.other_summer_othercrop_name3 = result.other_summer_othercrop_name3;
                        Data11.other_summer_othercrop_area3 = result.other_summer_othercrop_area3;
                        Data11.other_summer_othercrop_invention_proposed3 = result.other_summer_othercrop_invention_proposed3;
                        Data11.other_summer_othercrop_water_saving3 = result.other_summer_othercrop_water_saving3;
                        Data11.other_summer_othercrop_water_req3 = result.other_summer_othercrop_water_req3;
                        Data11.other_summer_othercrop_waterdemand3 = result.other_summer_othercrop_waterdemand3;
                        Data11.other_summer_othercrop_reduction_gw_demand3 = result.other_summer_othercrop_reduction_gw_demand3;

                        Data11.other_summer_othercrop_name4 = result.other_summer_othercrop_name4;
                        Data11.other_summer_othercrop_area4 = result.other_summer_othercrop_area4;
                        Data11.other_summer_othercrop_invention_proposed4 = result.other_summer_othercrop_invention_proposed4;
                        Data11.other_summer_othercrop_water_saving4 = result.other_summer_othercrop_water_saving4;
                        Data11.other_summer_othercrop_water_req4 = result.other_summer_othercrop_water_req4;
                        Data11.other_summer_othercrop_waterdemand4 = result.other_summer_othercrop_waterdemand4;
                        Data11.other_summer_othercrop_reduction_gw_demand4 = result.other_summer_othercrop_reduction_gw_demand4;

                        Data11.other_summer_othercrop_name5 = result.other_summer_othercrop_name5;
                        Data11.other_summer_othercrop_area5 = result.other_summer_othercrop_area5;
                        Data11.other_summer_othercrop_invention_proposed5 = result.other_summer_othercrop_invention_proposed5;
                        Data11.other_summer_othercrop_water_saving5 = result.other_summer_othercrop_water_saving5;
                        Data11.other_summer_othercrop_water_req5 = result.other_summer_othercrop_water_req5;
                        Data11.other_summer_othercrop_waterdemand5 = result.other_summer_othercrop_waterdemand5;
                        Data11.other_summer_othercrop_reduction_gw_demand5 = result.other_summer_othercrop_reduction_gw_demand5;


                        //other crops
                        //Data11.other_kharif_othercrop_name = result.other_kharif_othercrop_name;
                        //Data11.other_kharif_othercrop_area = result.other_kharif_othercrop_area;
                        //Data11.other_kharif_othercrop_intervention = result.other_kharif_othercrop_intervention;
                        //Data11.other_kharif_othercrop_water_saving = result.other_kharif_othercrop_water_saving;
                        //Data11.other_kharif_othercrop_water_req = result.other_kharif_othercrop_water_req;
                        //Data11.other_kharif_othercrop_gw_waterdemand = result.other_kharif_othercrop_gw_waterdemand;
                        //Data11.other_kharif_othercrop_reduc_gw_demand = result.other_kharif_othercrop_reduc_gw_demand;


                        //Data11.other_rabi_othercrop_name = result.other_rabi_othercrop_name;
                        //Data11.other_rabi_othercrop_area = result.other_rabi_othercrop_area;
                        //Data11.other_rabi_othercrop_intervention = result.other_rabi_othercrop_intervention;
                        //Data11.other_rabi_othercrop_water_saving = result.other_rabi_othercrop_water_saving;
                        //Data11.other_rabi_othercrop_water_req = result.other_rabi_othercrop_water_req;
                        //Data11.other_rabi_othercrop_gw_waterdemand = result.other_rabi_othercrop_gw_waterdemand;
                        //Data11.other_rabi_othercrop_reduc_gw_demand = result.other_rabi_othercrop_reduc_gw_demand;

                        //Data11.other_summer_othercrop_name = result.other_summer_othercrop_name;
                        //Data11.other_summer_othercrop_area = result.other_summer_othercrop_area;
                        //Data11.other_summer_othercrop_intervention = result.other_summer_othercrop_intervention;
                        //Data11.other_summer_othercrop_water_saving = result.other_summer_othercrop_water_saving;
                        //Data11.other_summer_othercrop_water_req = result.other_summer_othercrop_water_req;
                        //Data11.other_summer_othercrop_gw_waterdemand = result.other_summer_othercrop_gw_waterdemand;
                        //Data11.other_summer_othercrop_reduc_gw_demand = result.other_summer_othercrop_reduc_gw_demand;

                        ABE.Entry(Data11).State = EntityState.Modified;

                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        obj.statename = StateName;
                        obj.userid = Convert.ToInt32(userid);
                        obj.blockname = BlockName;
                        obj.districtname = DistName;
                        obj.gpname = GramName;
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        obj.date_time = Today1;


                        if (result.other_approx_estimated_cost != null && result.other_approx_estimated_cost != "")
                        {
                            string valid_negitive = Validation_NegitiveVal(result.other_approx_estimated_cost);
                            if (valid_negitive == "True")
                            {
                                obj.other_approx_estimated_cost = result.other_approx_estimated_cost;

                            }
                            else
                            {
                                return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                            }

                        }
                        obj.other_cost_type = result.other_cost_type;

                        obj.other_kharif_paddy_water_req = result.other_kharif_paddy_water_req;
                        obj.other_kharif_paddy_water_demand = result.other_kharif_paddy_water_demand;
                        obj.other_kharif_paddy_reduc_gw_demand = result.other_kharif_paddy_reduc_gw_demand;

                        obj.other_kharif_ragi_water_req = result.other_kharif_ragi_water_req;
                        obj.other_kharif_ragi_water_demand = result.other_kharif_ragi_water_demand;
                        obj.other_kharif_ragi_reduc_gw_demand = result.other_kharif_ragi_reduc_gw_demand;

                        obj.other_kharif_groundnut_water_req = result.other_kharif_groundnut_water_req;
                        obj.other_kharif_groundnut_water_demand = result.other_kharif_groundnut_water_demand;
                        obj.other_kharif_groundnut_reduc_gw_demand = result.other_kharif_groundnut_reduc_gw_demand;

                        obj.other_kharif_sugarcane_water_req = result.other_kharif_sugarcane_water_req;
                        obj.other_kharif_sugarcane_water_demand = result.other_kharif_sugarcane_water_demand;
                        obj.other_kharif_sugarcane_reduc_gw_demand = result.other_kharif_sugarcane_reduc_gw_demand;

                        obj.other_kharif_tomoto_water_req = result.other_kharif_tomoto_water_req;
                        obj.other_kharif_tomoto_water_demand = result.other_kharif_tomoto_water_demand;
                        obj.other_kharif_tomoto_reduc_gw_demand = result.other_kharif_tomoto_reduc_gw_demand;

                        //obj.other_kharif_cabbage_water_req = result.other_kharif_cabbage_water_req;
                        //obj.other_kharif_cabbage_water_demand = result.other_kharif_cabbage_water_demand;
                        //obj.other_kharif_cabbage_reduc_gw_demand = result.other_kharif_cabbage_reduc_gw_demand;

                        //obj.other_kharif_beans_water_req = result.other_kharif_beans_water_req;
                        //obj.other_kharif_beans_water_demand = result.other_kharif_beans_water_demand;
                        //obj.other_kharif_beans_reduc_gw_demand = result.other_kharif_beans_reduc_gw_demand;

                        obj.other_kharif_floriculture_water_req = result.other_kharif_floriculture_water_req;
                        obj.other_kharif_floriculture_water_demand = result.other_kharif_floriculture_water_demand;
                        obj.other_kharif_floriculture_reduc_gw_demand = result.other_kharif_floriculture_reduc_gw_demand;

                        obj.other_kharif_sericulture_water_req = result.other_kharif_sericulture_water_req;
                        obj.other_kharif_sericulture_water_demand = result.other_kharif_sericulture_water_demand;
                        obj.other_kharif_sericulture_reduc_gw_demand = result.other_kharif_sericulture_reduc_gw_demand;

                        //obj.other_kharif_cucumber_water_req = result.other_kharif_cucumber_water_req;
                        //obj.other_kharif_cucumber_water_demand = result.other_kharif_cucumber_water_demand;
                        //obj.other_kharif_cucumber_reduc_gw_demand = result.other_kharif_cucumber_reduc_gw_demand;

                        obj.other_kharif_banana_water_req = result.other_kharif_banana_water_req;
                        obj.other_kharif_banana_water_demand = result.other_kharif_banana_water_demand;
                        obj.other_kharif_banana_reduc_gw_demand = result.other_kharif_banana_reduc_gw_demand;



                        obj.other_rabi_sericulture_water_req = result.other_rabi_sericulture_water_req;
                        obj.other_rabi_sericulture_water_demand = result.other_rabi_sericulture_water_demand;
                        obj.other_rabi_sericulture_reduc_gw_demand = result.other_rabi_sericulture_reduc_gw_demand;

                        obj.other_rabi_tomoto_water_req = result.other_rabi_tomoto_water_req;
                        obj.other_rabi_tomoto_water_demand = result.other_rabi_tomoto_water_demand;
                        obj.other_rabi_tomoto_reduc_gw_demand = result.other_rabi_tomoto_reduc_gw_demand;

                        //obj.other_rabi_cabbage_water_req = result.other_rabi_cabbage_water_req;
                        //obj.other_rabi_cabbage_water_demand = result.other_rabi_cabbage_water_demand;
                        //obj.other_rabi_cabbage_reduc_gw_demand = result.other_rabi_cabbage_reduc_gw_demand;

                        //obj.other_rabi_beans_water_req = result.other_rabi_beans_water_req;
                        //obj.other_rabi_beans_water_demand = result.other_rabi_beans_water_demand;
                        //obj.other_rabi_beans_reduc_gw_demand = result.other_rabi_beans_reduc_gw_demand;

                        obj.other_rabi_floriculture_water_req = result.other_rabi_floriculture_water_req;
                        obj.other_rabi_floriculture_water_demand = result.other_rabi_floriculture_water_demand;
                        obj.other_rabi_floriculture_reduc_gw_demand = result.other_rabi_floriculture_reduc_gw_demand;

                        //obj.other_rabi_potato_water_req = result.other_rabi_potato_water_req;
                        //obj.other_rabi_potato_water_demand = result.other_rabi_potato_water_demand;
                        //obj.other_rabi_potato_reduc_gw_demand = result.other_rabi_potato_reduc_gw_demand;

                        //obj.other_rabi_cucumber_water_req = result.other_rabi_cucumber_water_req;
                        //obj.other_rabi_cucumber_water_demand = result.other_rabi_cucumber_water_demand;
                        //obj.other_rabi_cucumber_reduc_gw_demand = result.other_rabi_cucumber_reduc_gw_demand;

                        obj.other_rabi_ragi_water_req = result.other_rabi_ragi_water_req;
                        obj.other_rabi_ragi_water_demand = result.other_rabi_ragi_water_demand;
                        obj.other_rabi_ragi_reduc_gw_demand = result.other_rabi_ragi_reduc_gw_demand;

                        obj.other_rabi_sugarcane_water_req = result.other_rabi_sugarcane_water_req;
                        obj.other_rabi_sugarcane_water_demand = result.other_rabi_sugarcane_water_demand;
                        obj.other_rabi_sugarcane_reduc_gw_demand = result.other_rabi_sugarcane_reduc_gw_demand;

                        obj.other_rabi_maize_water_req = result.other_rabi_maize_water_req;
                        obj.other_rabi_maize_water_demand = result.other_rabi_maize_water_demand;
                        obj.other_rabi_maize_reduc_gw_demand = result.other_rabi_maize_reduc_gw_demand;

                        obj.other_rabi_fodder_water_req = result.other_rabi_fodder_water_req;
                        obj.other_rabi_fodder_water_demand = result.other_rabi_fodder_water_demand;
                        obj.other_rabi_fodder_reduc_gw_demand = result.other_rabi_fodder_reduc_gw_demand;

                        obj.other_rabi_paddy_water_req = result.other_rabi_paddy_water_req;
                        obj.other_rabi_paddy_water_demand = result.other_rabi_paddy_water_demand;
                        obj.other_rabi_paddy_reduc_gw_demand = result.other_rabi_paddy_reduc_gw_demand;

                        obj.other_rabi_alfalfa_water_req = result.other_rabi_alfalfa_water_req;
                        obj.other_rabi_alfalfa_water_demand = result.other_rabi_alfalfa_water_demand;
                        obj.other_rabi_alfalfa_reduc_gw_demand = result.other_rabi_alfalfa_reduc_gw_demand;

                        //obj.other_rabi_onion_water_req = result.other_rabi_onion_water_req;
                        //obj.other_rabi_onion_water_demand = result.other_rabi_onion_water_demand;
                        //obj.other_rabi_onion_reduc_gw_demand = result.other_rabi_onion_reduc_gw_demand;

                        obj.other_rabi_horticulture_water_req = result.other_rabi_horticulture_water_req;
                        obj.other_rabi_horticulture_water_demand = result.other_rabi_horticulture_water_demand;
                        obj.other_rabi_horticulture_reduc_gw_demand = result.other_rabi_horticulture_reduc_gw_demand;

                        obj.other_rabi_sunflower_water_req = result.other_rabi_sunflower_water_req;
                        obj.other_rabi_sunflower_water_demand = result.other_rabi_sunflower_water_demand;
                        obj.other_rabi_sunflower_reduc_gw_demand = result.other_rabi_sunflower_reduc_gw_demand;



                        obj.other_summer_sericulture_water_req = result.other_summer_sericulture_water_req;
                        obj.other_summer_sericulture_water_demand = result.other_summer_sericulture_water_demand;
                        obj.other_summer_sericulture_reduc_gw_demand = result.other_summer_sericulture_reduc_gw_demand;

                        obj.other_summer_tomoto_water_req = result.other_summer_tomoto_water_req;
                        obj.other_summer_tomoto_water_demand = result.other_summer_tomoto_water_demand;
                        obj.other_summer_tomoto_reduc_gw_demand = result.other_summer_tomoto_reduc_gw_demand;

                        //obj.other_summer_cabbage_water_req = result.other_summer_cabbage_water_req;
                        //obj.other_summer_cabbage_water_demand = result.other_summer_cabbage_water_demand;
                        //obj.other_summer_cabbage_reduc_gw_demand = result.other_summer_cabbage_reduc_gw_demand;

                        //obj.other_summer_beans_water_req = result.other_summer_beans_water_req;
                        //obj.other_summer_beans_water_demand = result.other_summer_beans_water_demand;
                        //obj.other_summer_beans_reduc_gw_demand = result.other_summer_beans_reduc_gw_demand;

                        obj.other_summer_floriculture_water_req = result.other_summer_floriculture_water_req;
                        obj.other_summer_floriculture_water_demand = result.other_summer_floriculture_water_demand;
                        obj.other_summer_floriculture_reduc_gw_demand = result.other_summer_floriculture_reduc_gw_demand;

                        obj.other_summer_maize_water_req = result.other_summer_maize_water_req;
                        obj.other_summer_maize_water_demand = result.other_summer_maize_water_demand;
                        obj.other_summer_maize_reduc_gw_demand = result.other_summer_maize_reduc_gw_demand;

                        obj.other_summer_fodder_water_req = result.other_summer_fodder_water_req;
                        obj.other_summer_fodder_water_demand = result.other_summer_fodder_water_demand;
                        obj.other_summer_fodder_reduc_gw_demand = result.other_summer_fodder_reduc_gw_demand;

                        obj.other_summer_sugarcane_water_req = result.other_summer_sugarcane_water_req;
                        obj.other_summer_sugarcane_water_demand = result.other_summer_sugarcane_water_demand;
                        obj.other_summer_sugarcane_reduc_gw_demand = result.other_summer_sugarcane_reduc_gw_demand;

                        obj.other_kharif_fodder_water_req = result.other_kharif_fodder_water_req;
                        obj.other_kharif_fodder_water_demand = result.other_kharif_fodder_water_demand;
                        obj.other_kharif_fodder_reduc_gw_demand = result.other_kharif_fodder_reduc_gw_demand;

                        obj.other_kharif_maize_water_req = result.other_kharif_maize_water_req;
                        obj.other_kharif_maize_water_demand = result.other_kharif_maize_water_demand;
                        obj.other_kharif_maize_reduc_gw_demand = result.other_kharif_maize_reduc_gw_demand;

                        //obj.other_kharif_potato_water_req = result.other_kharif_potato_water_req;
                        //obj.other_kharif_potato_water_demand = result.other_kharif_potato_water_demand;
                        //obj.other_kharif_potato_reduc_gw_demand = result.other_kharif_potato_reduc_gw_demand;

                        obj.other_kharif_chillies_water_req = result.other_kharif_chillies_water_req;
                        obj.other_kharif_chillies_water_demand = result.other_kharif_chillies_water_demand;
                        obj.other_kharif_chillies_reduc_gw_demand = result.other_kharif_chillies_reduc_gw_demand;

                        obj.other_kharif_cotton_water_req = result.other_kharif_cotton_water_req;
                        obj.other_kharif_cotton_water_demand = result.other_kharif_cotton_water_demand;
                        obj.other_kharif_cotton_reduc_gw_demand = result.other_kharif_cotton_reduc_gw_demand;

                        obj.other_kharif_melon_water_req = result.other_kharif_melon_water_req;
                        obj.other_kharif_melon_water_demand = result.other_kharif_melon_water_demand;
                        obj.other_kharif_melon_reduc_gw_demand = result.other_kharif_melon_reduc_gw_demand;

                        obj.other_kharif_citrus_water_req = result.other_kharif_citrus_water_req;
                        obj.other_kharif_citrus_water_demand = result.other_kharif_citrus_water_demand;
                        obj.other_kharif_citrus_reduc_gw_demand = result.other_kharif_citrus_reduc_gw_demand;

                        //obj.other_kharif_peanut_water_req = result.other_kharif_peanut_water_req;
                        //obj.other_kharif_peanut_water_demand = result.other_kharif_peanut_water_demand;
                        //obj.other_kharif_peanut_reduc_gw_demand = result.other_kharif_peanut_reduc_gw_demand;

                        obj.other_kharif_horticulture_water_req = result.other_kharif_horticulture_water_req;
                        obj.other_kharif_horticulture_water_demand = result.other_kharif_horticulture_water_demand;
                        obj.other_kharif_horticulture_reduc_gw_demand = result.other_kharif_horticulture_reduc_gw_demand;

                        obj.other_kharif_paddy_crop_area = result.other_kharif_paddy_crop_area;
                        obj.other_kharif_paddy_intervention_value = result.other_kharif_paddy_intervention_value;
                        obj.other_kharif_paddy_fundingsource = result.other_kharif_paddy_fundingsource;
                        obj.other_kharif_ragi_crop_area = result.other_kharif_ragi_crop_area;
                        obj.other_kharif_ragi_intervention_value = result.other_kharif_ragi_intervention_value;
                        obj.other_kharif_ragi_fundingsource = result.other_kharif_ragi_fundingsource;
                        obj.other_kharif_groundnut_crop_area = result.other_kharif_groundnut_crop_area;
                        obj.other_kharif_groundnut_intervention_value = result.other_kharif_groundnut_intervention_value;
                        obj.other_kharif_groundnut_fundingsource = result.other_kharif_groundnut_fundingsource;
                        obj.other_kharif_sugarcane_crop_area = result.other_kharif_sugarcane_crop_area;
                        obj.other_kharif_sugarcane_intervention_value = result.other_kharif_sugarcane_intervention_value;
                        obj.other_kharif_sugarcane_fundingsource = result.other_kharif_sugarcane_fundingsource;
                        obj.other_kharif_tomoto_crop_area = result.other_kharif_tomoto_crop_area;
                        obj.other_kharif_tomoto_intervention_value = result.other_kharif_tomoto_intervention_value;
                        obj.other_kharif_tomoto_fundingsource = result.other_kharif_tomoto_fundingsource;
                        //obj.other_kharif_cabbage_crop_area = result.other_kharif_cabbage_crop_area;
                        //obj.other_kharif_cabbage_intervention_value = result.other_kharif_cabbage_intervention_value;
                        //obj.other_kharif_cabbage_fundingsource = result.other_kharif_cabbage_fundingsource;
                        //obj.other_kharif_beans_crop_area = result.other_kharif_beans_crop_area;
                        //obj.other_kharif_beans_intervention_value = result.other_kharif_beans_intervention_value;
                        //obj.other_kharif_beans_fundingsource = result.other_kharif_beans_fundingsource;
                        obj.other_kharif_floriculture_crop_area = result.other_kharif_floriculture_crop_area;
                        obj.other_kharif_floriculture_intervention_value = result.other_kharif_floriculture_intervention_value;
                        obj.other_kharif_floriculture_fundingsource = result.other_kharif_floriculture_fundingsource;
                        obj.other_kharif_sericulture_crop_area = result.other_kharif_sericulture_crop_area;
                        obj.other_kharif_sericulture_intervention_value = result.other_kharif_sericulture_intervention_value;
                        obj.other_kharif_sericulture_fundingsource = result.other_kharif_sericulture_fundingsource;
                        //obj.other_kharif_cucumber_crop_area = result.other_kharif_cucumber_crop_area;
                        //obj.other_kharif_cucumber_intervention_value = result.other_kharif_cucumber_intervention_value;
                        //obj.other_kharif_cucumber_fundingsource = result.other_kharif_cucumber_fundingsource;
                        obj.other_kharif_banana_crop_area = result.other_kharif_banana_crop_area;
                        obj.other_kharif_banana_intervention_value = result.other_kharif_banana_intervention_value;
                        obj.other_kharif_banana_fundingsource = result.other_kharif_banana_fundingsource;
                        obj.other_kharif_fodder_crop_area = result.other_kharif_fodder_crop_area;
                        obj.other_kharif_fodder_intervention_value = result.other_kharif_fodder_intervention_value;
                        obj.other_kharif_fodder_fundingsource = result.other_kharif_fodder_fundingsource;
                        obj.other_kharif_maize_crop_area = result.other_kharif_maize_crop_area;
                        obj.other_kharif_maize_intervention_value = result.other_kharif_maize_intervention_value;
                        obj.other_kharif_maize_fundingsource = result.other_kharif_maize_fundingsource;
                        //obj.other_kharif_potato_crop_area = result.other_kharif_potato_crop_area;
                        //obj.other_kharif_potato_intervention_value = result.other_kharif_potato_intervention_value;
                        //obj.other_kharif_potato_fundingsource = result.other_kharif_potato_fundingsource;
                        obj.other_kharif_chillies_crop_area = result.other_kharif_chillies_crop_area;
                        obj.other_kharif_chillies_intervention_value = result.other_kharif_chillies_intervention_value;
                        obj.other_kharif_chillies_fundingsource = result.other_kharif_chillies_fundingsource;
                        obj.other_kharif_cotton_crop_area = result.other_kharif_cotton_crop_area;
                        obj.other_kharif_cotton_intervention_value = result.other_kharif_cotton_intervention_value;
                        obj.other_kharif_cotton_fundingsource = result.other_kharif_cotton_fundingsource;
                        obj.other_kharif_melon_crop_area = result.other_kharif_melon_crop_area;
                        obj.other_kharif_melon_intervention_value = result.other_kharif_melon_intervention_value;
                        obj.other_kharif_melon_fundingsource = result.other_kharif_melon_fundingsource;
                        obj.other_kharif_citrus_crop_area = result.other_kharif_citrus_crop_area;
                        obj.other_kharif_citrus_intervention_value = result.other_kharif_citrus_intervention_value;
                        obj.other_kharif_citrus_fundingsource = result.other_kharif_citrus_fundingsource;
                        //obj.other_kharif_peanut_crop_area = result.other_kharif_peanut_crop_area;
                        //obj.other_kharif_peanut_intervention_value = result.other_kharif_peanut_intervention_value;
                        //obj.other_kharif_peanut_fundingsource = result.other_kharif_peanut_fundingsource;
                        obj.other_kharif_horticulture_crop_area = result.other_kharif_horticulture_crop_area;
                        obj.other_kharif_horticulture_intervention_value = result.other_kharif_horticulture_intervention_value;
                        obj.other_kharif_horticulture_fundingsource = result.other_kharif_horticulture_fundingsource;
                        obj.other_rabi_sericulture_crop_area = result.other_rabi_sericulture_crop_area;
                        obj.other_rabi_sericulture_intervention_value = result.other_rabi_sericulture_intervention_value;
                        obj.other_rabi_sericulture_fundingsource = result.other_rabi_sericulture_fundingsource;
                        obj.other_rabi_tomoto_crop_area = result.other_rabi_tomoto_crop_area;
                        obj.other_rabi_tomoto_intervention_value = result.other_rabi_tomoto_intervention_value;
                        obj.other_rabi_tomoto_fundingsource = result.other_rabi_tomoto_fundingsource;
                        //obj.other_rabi_cabbage_crop_area = result.other_rabi_cabbage_crop_area;
                        //obj.other_rabi_cabbage_intervention_value = result.other_rabi_cabbage_intervention_value;
                        //obj.other_rabi_cabbage_fundingsource = result.other_rabi_cabbage_fundingsource;
                        //obj.other_rabi_beans_crop_area = result.other_rabi_beans_crop_area;
                        //obj.other_rabi_beans_intervention_value = result.other_rabi_beans_intervention_value;
                        //obj.other_rabi_beans_fundingsource = result.other_rabi_beans_fundingsource;
                        obj.other_rabi_floriculture_crop_area = result.other_rabi_floriculture_crop_area;
                        obj.other_rabi_floriculture_intervention_value = result.other_rabi_floriculture_intervention_value;
                        obj.other_rabi_floriculture_fundingsource = result.other_rabi_floriculture_fundingsource;
                        //obj.other_rabi_potato_crop_area = result.other_rabi_potato_crop_area;
                        //obj.other_rabi_potato_intervention_value = result.other_rabi_potato_intervention_value;
                        //obj.other_rabi_potato_fundingsource = result.other_rabi_potato_fundingsource;
                        //obj.other_rabi_cucumber_crop_area = result.other_rabi_cucumber_crop_area;
                        //obj.other_rabi_cucuber_intervention_value = result.other_rabi_cucuber_intervention_value;
                        //obj.other_rabi_cucumber_fundingsource = result.other_rabi_cucumber_fundingsource;
                        obj.other_rabi_ragi_crop_area = result.other_rabi_ragi_crop_area;
                        obj.other_rabi_ragi_intervention_value = result.other_rabi_ragi_intervention_value;
                        obj.other_rabi_ragi_fundingsource = result.other_rabi_ragi_fundingsource;
                        obj.other_rabi_sugarcane_crop_area = result.other_rabi_sugarcane_crop_area;
                        obj.other_rabi_sugarcane_intervention_value = result.other_rabi_sugarcane_intervention_value;
                        obj.other_rabi_sugarcane_fundingsource = result.other_rabi_sugarcane_fundingsource;
                        obj.other_rabi_maize_crop_area = result.other_rabi_maize_crop_area;
                        obj.other_rabi_maize_intervention_value = result.other_rabi_maize_intervention_value;
                        obj.other_rabi_maize_fundingsource = result.other_rabi_maize_fundingsource;
                        obj.other_rabi_fodder_crop_area = result.other_rabi_fodder_crop_area;
                        obj.other_rabi_fodder_intervention_value = result.other_rabi_fodder_intervention_value;
                        obj.other_rabi_fodder_fundingsource = result.other_rabi_fodder_fundingsource;
                        obj.other_rabi_paddy_crop_area = result.other_rabi_paddy_crop_area;
                        obj.other_rabi_paddy_intervention_value = result.other_rabi_paddy_intervention_value;
                        obj.other_rabi_paddy_fundingsource = result.other_rabi_paddy_fundingsource;
                        obj.other_rabi_alfalfa_crop_area = result.other_rabi_alfalfa_crop_area;
                        obj.other_rabi_alfalfa_intervention_value = result.other_rabi_alfalfa_intervention_value;
                        obj.other_rabi_alfalfa_fundingsource = result.other_rabi_alfalfa_fundingsource;
                        //obj.other_rabi_onion_crop_area = result.other_rabi_onion_crop_area;
                        //obj.other_rabi_onion_intervention_value = result.other_rabi_onion_intervention_value;
                        //obj.other_rabi_onion_fundingsource = result.other_rabi_onion_fundingsource;
                        obj.other_rabi_horticulture_crop_area = result.other_rabi_horticulture_crop_area;
                        obj.other_rabi_horticulture_intervention_value = result.other_rabi_horticulture_intervention_value;
                        obj.other_rabi_horticulture_fundingsource = result.other_rabi_horticulture_fundingsource;
                        obj.other_rabi_sunflower_crop_area = result.other_rabi_sunflower_crop_area;
                        obj.other_rabi_sunflower_intervention_value = result.other_rabi_sunflower_intervention_value;
                        obj.other_rabi_sunflower_fundingsource = result.other_rabi_sunflower_fundingsource;
                        obj.other_summer_sericulture_crop_area = result.other_summer_sericulture_crop_area;
                        obj.other_summer_sericulture_intervention_value = result.other_summer_sericulture_intervention_value;
                        obj.other_summer_sericulture_fundingsource = result.other_summer_sericulture_fundingsource;
                        obj.other_summer_tomoto_crop_area = result.other_summer_tomoto_crop_area;
                        obj.other_summer_tomoto_intervention_value = result.other_summer_tomoto_intervention_value;
                        obj.other_summer_tomoto_fundingsource = result.other_summer_tomoto_fundingsource;
                        //obj.other_summer_cabbage_crop_area = result.other_summer_cabbage_crop_area;
                        //obj.other_summer_cabbage_intervention_value = result.other_summer_cabbage_intervention_value;
                        //obj.other_summer_cabbage_fundingsource = result.other_summer_cabbage_fundingsource;
                        //obj.other_summer_beans_crop_area = result.other_summer_beans_crop_area;
                        //obj.other_summer_beans_intervention_value = result.other_summer_beans_intervention_value;
                        //obj.other_summer_beans_fundingsource = result.other_summer_beans_fundingsource;
                        obj.other_summer_floriculture_crop_area = result.other_summer_floriculture_crop_area;
                        obj.other_summer_floiculture_intervention_value = result.other_summer_floiculture_intervention_value;
                        obj.other_summer_floriculture_fundingsource = result.other_summer_floriculture_fundingsource;
                        obj.other_summer_maize_crop_area = result.other_summer_maize_crop_area;
                        obj.other_summer_maize_intervention_value = result.other_summer_maize_intervention_value;
                        obj.other_summer_maize_fundingsource = result.other_summer_maize_fundingsource;
                        obj.other_summer_fodder_crop_area = result.other_summer_fodder_crop_area;
                        obj.other_summer_fodder_intervention_value = result.other_summer_fodder_intervention_value;
                        obj.other_summer_fodder_fundingsource = result.other_summer_fodder_fundingsource;
                        obj.other_summer_sugarcane_crop_area = result.other_summer_sugarcane_crop_area;
                        obj.other_summer_sugarcane_intervention_value = result.other_summer_sugarcane_intervention_value;
                        obj.other_summer_sugarcane_fundingsource = result.other_summer_sugarcane_fundingsource;

                        obj.other_total_annual_waterdemand = result.other_total_annual_waterdemand;

                        obj.latitude = result.latitude;
                        obj.longitude = result.longitude;

                        // obj.userid
                        //obj.other_measure_kharif_water_demand = result.other_measure_kharif_water_demand;
                        //obj.other_measure_rabi_water_demand = result.other_measure_rabi_water_demand;
                        //obj.other_measure_summer_crop_water_demand = result.other_measure_summer_crop_water_demand;

                        //new columns for water requirement and water saving
                        //new columns water requirement
                        obj.other_kharif_paddy_water_req = result.other_kharif_paddy_water_req;
                        obj.other_kharif_ragi_water_req = result.other_kharif_ragi_water_req;
                        obj.other_kharif_groundnut_water_req = result.other_kharif_groundnut_water_req;
                        obj.other_kharif_sugarcane_water_req = result.other_kharif_sugarcane_water_req;
                        obj.other_kharif_tomoto_water_req = result.other_kharif_tomoto_water_req;
                        // obj.other_kharif_cabbage_water_req = result.other_kharif_cabbage_water_req;
                        // obj.other_kharif_beans_water_req = result.other_kharif_beans_water_req;
                        obj.other_kharif_floriculture_water_req = result.other_kharif_floriculture_water_req;
                        obj.other_kharif_sericulture_water_req = result.other_kharif_sericulture_water_req;
                        // obj.other_kharif_cucumber_water_req = result.other_kharif_cucumber_water_req;
                        obj.other_kharif_banana_water_req = result.other_kharif_banana_water_req;
                        obj.other_kharif_fodder_water_req = result.other_kharif_fodder_water_req;
                        obj.other_kharif_maize_water_req = result.other_kharif_maize_water_req;
                        // obj.other_kharif_potato_water_req = result.other_kharif_potato_water_req;
                        obj.other_kharif_chillies_water_req = result.other_kharif_chillies_water_req;
                        obj.other_kharif_cotton_water_req = result.other_kharif_cotton_water_req;
                        obj.other_kharif_melon_water_req = result.other_kharif_melon_water_req;
                        obj.other_kharif_citrus_water_req = result.other_kharif_citrus_water_req;
                        // obj.other_kharif_peanut_water_req = result.other_kharif_peanut_water_req;
                        obj.other_kharif_horticulture_water_req = result.other_kharif_horticulture_water_req;
                        //obj.other_summer_sugarcane_irri_area = result.other_summer_sugarcane_irri_area;

                        obj.other_rabi_sericulture_water_req = result.other_rabi_sericulture_water_req;
                        obj.other_rabi_tomoto_water_req = result.other_rabi_tomoto_water_req;
                        // obj.other_rabi_cabbage_water_req = result.other_rabi_cabbage_water_req;
                        // obj.other_rabi_beans_water_req = result.other_rabi_beans_water_req;
                        obj.other_rabi_floriculture_water_req = result.other_rabi_floriculture_water_req;
                        // obj.other_rabi_potato_water_req = result.other_rabi_potato_water_req;
                        // obj.other_rabi_cucumber_water_req = result.other_rabi_cucumber_water_req;
                        obj.other_rabi_ragi_water_req = result.other_rabi_ragi_water_req;
                        obj.other_rabi_sugarcane_water_req = result.other_rabi_sugarcane_water_req;
                        obj.other_rabi_maize_water_req = result.other_rabi_maize_water_req;
                        obj.other_rabi_fodder_water_req = result.other_rabi_fodder_water_req;
                        obj.other_rabi_paddy_water_req = result.other_rabi_paddy_water_req;
                        obj.other_rabi_alfalfa_water_req = result.other_rabi_alfalfa_water_req;
                        // obj.other_rabi_onion_water_req = result.other_rabi_onion_water_req;
                        obj.other_rabi_horticulture_water_req = result.other_rabi_horticulture_water_req;
                        obj.other_rabi_sunflower_water_req = result.other_rabi_sunflower_water_req;

                        obj.other_summer_sericulture_water_req = result.other_summer_sericulture_water_req;
                        obj.other_summer_tomoto_water_req = result.other_summer_tomoto_water_req;
                        //obj.other_summer_cabbage_water_req = result.other_summer_cabbage_water_req;
                        //obj.other_summer_beans_water_req = result.other_summer_beans_water_req;
                        obj.other_summer_floriculture_water_req = result.other_summer_floriculture_water_req;
                        obj.other_summer_maize_water_req = result.other_summer_maize_water_req;
                        obj.other_summer_fodder_water_req = result.other_summer_fodder_water_req;
                        obj.other_summer_sugarcane_water_req = result.other_summer_sugarcane_water_req;

                        //new columns water saving

                        obj.other_kharif_paddy_water_saving = result.other_kharif_paddy_water_saving;
                        obj.other_kharif_ragi_water_saving = result.other_kharif_ragi_water_saving;
                        obj.other_kharif_groundnut_water_saving = result.other_kharif_groundnut_water_saving;
                        obj.other_kharif_sugarcane_water_saving = result.other_kharif_sugarcane_water_saving;
                        obj.other_kharif_tomoto_water_saving = result.other_kharif_tomoto_water_saving;
                        // obj.other_kharif_cabbage_water_saving = result.other_kharif_cabbage_water_saving;
                        // obj.other_kharif_beans_water_saving = result.other_kharif_beans_water_saving;
                        obj.other_kharif_floriculture_water_saving = result.other_kharif_floriculture_water_saving;
                        obj.other_kharif_sericulture_water_saving = result.other_kharif_sericulture_water_saving;
                        //obj.other_kharif_cucumber_water_saving = result.other_kharif_cucumber_water_saving;
                        obj.other_kharif_banana_water_saving = result.other_kharif_banana_water_saving;
                        obj.other_kharif_fodder_water_saving = result.other_kharif_fodder_water_saving;
                        obj.other_kharif_maize_water_saving = result.other_kharif_maize_water_saving;
                        //obj.other_kharif_potato_water_saving = result.other_kharif_potato_water_saving;
                        obj.other_kharif_chillies_water_saving = result.other_kharif_chillies_water_saving;
                        obj.other_kharif_cotton_water_saving = result.other_kharif_cotton_water_saving;
                        obj.other_kharif_melon_water_saving = result.other_kharif_melon_water_saving;
                        obj.other_kharif_citrus_water_saving = result.other_kharif_citrus_water_saving;
                        // obj.other_kharif_peanut_water_saving = result.other_kharif_peanut_water_saving;
                        obj.other_kharif_horticulture_water_saving = result.other_kharif_horticulture_water_saving;
                        //obj.other_summer_sugarcane_irri_area = result.other_summer_sugarcane_irri_area;

                        obj.other_rabi_sericulture_water_saving = result.other_rabi_sericulture_water_saving;
                        obj.other_rabi_tomoto_water_saving = result.other_rabi_tomoto_water_saving;
                        // obj.other_rabi_cabbage_water_saving = result.other_rabi_cabbage_water_saving;
                        // obj.other_rabi_beans_water_saving = result.other_rabi_beans_water_saving;
                        obj.other_rabi_floriculture_water_saving = result.other_rabi_floriculture_water_saving;
                        // obj.other_rabi_potato_water_saving = result.other_rabi_potato_water_saving;
                        // obj.other_rabi_cucumber_water_saving = result.other_rabi_cucumber_water_saving;
                        obj.other_rabi_ragi_water_saving = result.other_rabi_ragi_water_saving;
                        obj.other_rabi_sugarcane_water_saving = result.other_rabi_sugarcane_water_saving;
                        obj.other_rabi_maize_water_saving = result.other_rabi_maize_water_saving;
                        obj.other_rabi_fodder_water_saving = result.other_rabi_fodder_water_saving;
                        obj.other_rabi_paddy_water_saving = result.other_rabi_paddy_water_saving;
                        obj.other_rabi_alfalfa_water_saving = result.other_rabi_alfalfa_water_saving;
                        // obj.other_rabi_onion_water_saving = result.other_rabi_onion_water_saving;
                        obj.other_rabi_horticulture_water_saving = result.other_rabi_horticulture_water_saving;
                        obj.other_rabi_sunflower_water_saving = result.other_rabi_sunflower_water_saving;

                        obj.other_summer_sericulture_water_saving = result.other_summer_sericulture_water_saving;
                        obj.other_summer_tomoto_water_saving = result.other_summer_tomoto_water_saving;
                        //obj.other_summer_cabbage_water_saving = result.other_summer_cabbage_water_saving;
                        // obj.other_summer_beans_water_saving = result.other_summer_beans_water_saving;
                        obj.other_summer_floriculture_water_saving = result.other_summer_floriculture_water_saving;
                        obj.other_summer_maize_water_saving = result.other_summer_maize_water_saving;
                        obj.other_summer_fodder_water_saving = result.other_summer_fodder_water_saving;
                        obj.other_summer_sugarcane_water_saving = result.other_summer_sugarcane_water_saving;



                        //totals
                        obj.other_kharif_total_kharifcrop_waterdemand = result.other_kharif_total_kharifcrop_waterdemand;
                        obj.other_kharif_total_reduc_gw_demand = result.other_kharif_total_reduc_gw_demand;
                        obj.other_rabi_total_rabicrop_waterdemand = result.other_rabi_total_rabicrop_waterdemand;
                        obj.other_rabi_total_reduc_gw_demand = result.other_rabi_total_reduc_gw_demand;
                        obj.other_summer_total_summercrop_waterdemand = result.other_summer_total_summercrop_waterdemand;
                        obj.other_summer_total_reduc_gw_demand = result.other_summer_total_reduc_gw_demand;
                        obj.other_funding_source = result.other_funding_source;
                        //add crops
                        //add crops
                        obj.other_kharif_othercrop_name1 = result.other_kharif_othercrop_name1;
                        obj.other_kharif_othercrop_area1 = result.other_kharif_othercrop_area1;
                        obj.other_kharif_othercrop_invention_proposed1 = result.other_kharif_othercrop_invention_proposed1;
                        obj.other_kharif_othercrop_water_saving1 = result.other_kharif_othercrop_water_saving1;
                        obj.other_kharif_othercrop_water_req1 = result.other_kharif_othercrop_water_req1;
                        obj.other_kharif_othercrop_waterdemand1 = result.other_kharif_othercrop_waterdemand1;
                        obj.other_kharif_othercrop_reduction_gw_demand1 = result.other_kharif_othercrop_reduction_gw_demand1;

                        obj.other_kharif_othercrop_name2 = result.other_kharif_othercrop_name2;
                        obj.other_kharif_othercrop_area2 = result.other_kharif_othercrop_area2;
                        obj.other_kharif_othercrop_invention_proposed2 = result.other_kharif_othercrop_invention_proposed2;
                        obj.other_kharif_othercrop_water_saving2 = result.other_kharif_othercrop_water_saving2;
                        obj.other_kharif_othercrop_water_req2 = result.other_kharif_othercrop_water_req2;
                        obj.other_kharif_othercrop_waterdemand2 = result.other_kharif_othercrop_waterdemand2;
                        obj.other_kharif_othercrop_reduction_gw_demand2 = result.other_kharif_othercrop_reduction_gw_demand2;

                        obj.other_kharif_othercrop_name3 = result.other_kharif_othercrop_name3;
                        obj.other_kharif_othercrop_area3 = result.other_kharif_othercrop_area3;
                        obj.other_kharif_othercrop_invention_proposed3 = result.other_kharif_othercrop_invention_proposed3;
                        obj.other_kharif_othercrop_water_saving3 = result.other_kharif_othercrop_water_saving3;
                        obj.other_kharif_othercrop_water_req3 = result.other_kharif_othercrop_water_req3;
                        obj.other_kharif_othercrop_waterdemand3 = result.other_kharif_othercrop_waterdemand3;
                        obj.other_kharif_othercrop_reduction_gw_demand3 = result.other_kharif_othercrop_reduction_gw_demand3;

                        obj.other_kharif_othercrop_name4 = result.other_kharif_othercrop_name4;
                        obj.other_kharif_othercrop_area4 = result.other_kharif_othercrop_area4;
                        obj.other_kharif_othercrop_invention_proposed4 = result.other_kharif_othercrop_invention_proposed4;
                        obj.other_kharif_othercrop_water_saving4 = result.other_kharif_othercrop_water_saving4;
                        obj.other_kharif_othercrop_water_req4 = result.other_kharif_othercrop_water_req4;
                        obj.other_kharif_othercrop_waterdemand4 = result.other_kharif_othercrop_waterdemand4;
                        obj.other_kharif_othercrop_reduction_gw_demand4 = result.other_kharif_othercrop_reduction_gw_demand4;

                        obj.other_kharif_othercrop_name5 = result.other_kharif_othercrop_name5;
                        obj.other_kharif_othercrop_area5 = result.other_kharif_othercrop_area5;
                        obj.other_kharif_othercrop_invention_proposed5 = result.other_kharif_othercrop_invention_proposed5;
                        obj.other_kharif_othercrop_water_saving5 = result.other_kharif_othercrop_water_saving5;
                        obj.other_kharif_othercrop_water_req5 = result.other_kharif_othercrop_water_req5;
                        obj.other_kharif_othercrop_waterdemand5 = result.other_kharif_othercrop_waterdemand5;
                        obj.other_kharif_othercrop_reduction_gw_demand5 = result.other_kharif_othercrop_reduction_gw_demand5;


                        obj.other_rabi_othercrop_name1 = result.other_rabi_othercrop_name1;
                        obj.other_rabi_othercrop_area1 = result.other_rabi_othercrop_area1;
                        obj.other_rabi_othercrop_invention_proposed1 = result.other_rabi_othercrop_invention_proposed1;
                        obj.other_rabi_othercrop_water_saving1 = result.other_rabi_othercrop_water_saving1;
                        obj.other_rabi_othercrop_water_req1 = result.other_rabi_othercrop_water_req1;
                        obj.other_rabi_othercrop_waterdemand1 = result.other_rabi_othercrop_waterdemand1;
                        obj.other_rabi_othercrop_reduction_gw_demand1 = result.other_rabi_othercrop_reduction_gw_demand1;

                        obj.other_rabi_othercrop_name2 = result.other_rabi_othercrop_name2;
                        obj.other_rabi_othercrop_area2 = result.other_rabi_othercrop_area2;
                        obj.other_rabi_othercrop_invention_proposed2 = result.other_rabi_othercrop_invention_proposed2;
                        obj.other_rabi_othercrop_water_saving2 = result.other_rabi_othercrop_water_saving2;
                        obj.other_rabi_othercrop_water_req2 = result.other_rabi_othercrop_water_req2;
                        obj.other_rabi_othercrop_waterdemand2 = result.other_rabi_othercrop_waterdemand2;
                        obj.other_rabi_othercrop_reduction_gw_demand2 = result.other_rabi_othercrop_reduction_gw_demand2;

                        obj.other_rabi_othercrop_name3 = result.other_rabi_othercrop_name3;
                        obj.other_rabi_othercrop_area3 = result.other_rabi_othercrop_area3;
                        obj.other_rabi_othercrop_invention_proposed3 = result.other_rabi_othercrop_invention_proposed3;
                        obj.other_rabi_othercrop_water_saving3 = result.other_rabi_othercrop_water_saving3;
                        obj.other_rabi_othercrop_water_req3 = result.other_rabi_othercrop_water_req3;
                        obj.other_rabi_othercrop_waterdemand3 = result.other_rabi_othercrop_waterdemand3;
                        obj.other_rabi_othercrop_reduction_gw_demand3 = result.other_rabi_othercrop_reduction_gw_demand3;

                        obj.other_rabi_othercrop_name4 = result.other_rabi_othercrop_name4;
                        obj.other_rabi_othercrop_area4 = result.other_rabi_othercrop_area4;
                        obj.other_rabi_othercrop_invention_proposed4 = result.other_rabi_othercrop_invention_proposed4;
                        obj.other_rabi_othercrop_water_saving4 = result.other_rabi_othercrop_water_saving4;
                        obj.other_rabi_othercrop_water_req4 = result.other_rabi_othercrop_water_req4;
                        obj.other_rabi_othercrop_waterdemand4 = result.other_rabi_othercrop_waterdemand4;
                        obj.other_rabi_othercrop_reduction_gw_demand4 = result.other_rabi_othercrop_reduction_gw_demand4;

                        obj.other_rabi_othercrop_name5 = result.other_rabi_othercrop_name5;
                        obj.other_rabi_othercrop_area5 = result.other_rabi_othercrop_area5;
                        obj.other_rabi_othercrop_invention_proposed5 = result.other_rabi_othercrop_invention_proposed5;
                        obj.other_rabi_othercrop_water_saving5 = result.other_rabi_othercrop_water_saving5;
                        obj.other_rabi_othercrop_water_req5 = result.other_rabi_othercrop_water_req5;
                        obj.other_rabi_othercrop_waterdemand5 = result.other_rabi_othercrop_waterdemand5;
                        obj.other_rabi_othercrop_reduction_gw_demand5 = result.other_rabi_othercrop_reduction_gw_demand5;


                        obj.other_summer_othercrop_name1 = result.other_summer_othercrop_name1;
                        obj.other_summer_othercrop_area1 = result.other_summer_othercrop_area1;
                        obj.other_summer_othercrop_invention_proposed1 = result.other_summer_othercrop_invention_proposed1;
                        obj.other_summer_othercrop_water_saving1 = result.other_summer_othercrop_water_saving1;
                        obj.other_summer_othercrop_water_req1 = result.other_summer_othercrop_water_req1;
                        obj.other_summer_othercrop_waterdemand1 = result.other_summer_othercrop_waterdemand1;
                        obj.other_summer_othercrop_reduction_gw_demand1 = result.other_summer_othercrop_reduction_gw_demand1;

                        obj.other_summer_othercrop_name2 = result.other_summer_othercrop_name2;
                        obj.other_summer_othercrop_area2 = result.other_summer_othercrop_area2;
                        obj.other_summer_othercrop_invention_proposed2 = result.other_summer_othercrop_invention_proposed2;
                        obj.other_summer_othercrop_water_saving2 = result.other_summer_othercrop_water_saving2;
                        obj.other_summer_othercrop_water_req2 = result.other_summer_othercrop_water_req2;
                        obj.other_summer_othercrop_waterdemand2 = result.other_summer_othercrop_waterdemand2;
                        obj.other_summer_othercrop_reduction_gw_demand2 = result.other_summer_othercrop_reduction_gw_demand2;

                        obj.other_summer_othercrop_name3 = result.other_summer_othercrop_name3;
                        obj.other_summer_othercrop_area3 = result.other_summer_othercrop_area3;
                        obj.other_summer_othercrop_invention_proposed3 = result.other_summer_othercrop_invention_proposed3;
                        obj.other_summer_othercrop_water_saving3 = result.other_summer_othercrop_water_saving3;
                        obj.other_summer_othercrop_water_req3 = result.other_summer_othercrop_water_req3;
                        obj.other_summer_othercrop_waterdemand3 = result.other_summer_othercrop_waterdemand3;
                        obj.other_summer_othercrop_reduction_gw_demand3 = result.other_summer_othercrop_reduction_gw_demand3;

                        obj.other_summer_othercrop_name4 = result.other_summer_othercrop_name4;
                        obj.other_summer_othercrop_area4 = result.other_summer_othercrop_area4;
                        obj.other_summer_othercrop_invention_proposed4 = result.other_summer_othercrop_invention_proposed4;
                        obj.other_summer_othercrop_water_saving4 = result.other_summer_othercrop_water_saving4;
                        obj.other_summer_othercrop_water_req4 = result.other_summer_othercrop_water_req4;
                        obj.other_summer_othercrop_waterdemand4 = result.other_summer_othercrop_waterdemand4;
                        obj.other_summer_othercrop_reduction_gw_demand4 = result.other_summer_othercrop_reduction_gw_demand4;

                        obj.other_summer_othercrop_name5 = result.other_summer_othercrop_name5;
                        obj.other_summer_othercrop_area5 = result.other_summer_othercrop_area5;
                        obj.other_summer_othercrop_invention_proposed5 = result.other_summer_othercrop_invention_proposed5;
                        obj.other_summer_othercrop_water_saving5 = result.other_summer_othercrop_water_saving5;
                        obj.other_summer_othercrop_water_req5 = result.other_summer_othercrop_water_req5;
                        obj.other_summer_othercrop_waterdemand5 = result.other_summer_othercrop_waterdemand5;
                        obj.other_summer_othercrop_reduction_gw_demand5 = result.other_summer_othercrop_reduction_gw_demand5;
                        //other crops
                        //obj.other_kharif_othercrop_name = result.other_kharif_othercrop_name;
                        //obj.other_kharif_othercrop_area = result.other_kharif_othercrop_area;
                        //obj.other_kharif_othercrop_intervention = result.other_kharif_othercrop_intervention;
                        //obj.other_kharif_othercrop_water_saving = result.other_kharif_othercrop_water_saving;
                        //obj.other_kharif_othercrop_water_req = result.other_kharif_othercrop_water_req;
                        //obj.other_kharif_othercrop_gw_waterdemand = result.other_kharif_othercrop_gw_waterdemand;
                        //obj.other_kharif_othercrop_reduc_gw_demand = result.other_kharif_othercrop_reduc_gw_demand;


                        //obj.other_rabi_othercrop_name = result.other_rabi_othercrop_name;
                        //obj.other_rabi_othercrop_area = result.other_rabi_othercrop_area;
                        //obj.other_rabi_othercrop_intervention = result.other_rabi_othercrop_intervention;
                        //obj.other_rabi_othercrop_water_saving = result.other_rabi_othercrop_water_saving;
                        //obj.other_rabi_othercrop_water_req = result.other_rabi_othercrop_water_req;
                        //obj.other_rabi_othercrop_gw_waterdemand = result.other_rabi_othercrop_gw_waterdemand;
                        //obj.other_rabi_othercrop_reduc_gw_demand = result.other_rabi_othercrop_reduc_gw_demand;

                        //obj.other_summer_othercrop_name = result.other_summer_othercrop_name;
                        //obj.other_summer_othercrop_area = result.other_summer_othercrop_area;
                        //obj.other_summer_othercrop_intervention = result.other_summer_othercrop_intervention;
                        //obj.other_summer_othercrop_water_saving = result.other_summer_othercrop_water_saving;
                        //obj.other_summer_othercrop_water_req = result.other_summer_othercrop_water_req;
                        //obj.other_summer_othercrop_gw_waterdemand = result.other_summer_othercrop_gw_waterdemand;
                        //obj.other_summer_othercrop_reduc_gw_demand = result.other_summer_othercrop_reduc_gw_demand;

                        ABE.obj_other.Add(obj);
                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json(ex);
                }
            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        public ActionResult CropSaveData(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_demandside_crop_diversification_saveddata>(Data);
                    var obj = new abhy_demandside_crop_diversification_saveddata();

                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var Details = ABE.obj_crop.Where(x => x.statename == StateName && x.districtname == DistName && x.blockname == BlockName && x.gpname == GramName).ToList();
                    if (Details.Count != 0)
                    {
                        var Data11 = Details.LastOrDefault();
                        Data11.userid = Convert.ToInt32(userid);
                        Data11.statename = StateName;
                        Data11.blockname = BlockName;
                        Data11.districtname = DistName;
                        Data11.gpname = GramName;
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        Data11.date_time = Today1;

                        //if (result.crop_approx_estimated_cost != null && result.crop_approx_estimated_cost != "")
                        //{
                        //    string valid_negitive = Validation_NegitiveVal(result.crop_approx_estimated_cost);
                        //    if (valid_negitive == "True")
                        //    {
                                

                        //    }
                        //    else
                        //    {
                        //        return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                        //    }

                        //}
                        Data11.crop_approx_estimated_cost = result.crop_approx_estimated_cost;
                        Data11.crop_cost_type = result.crop_cost_type;

                        Data11.changed_kharif_paddy_crop_area = result.changed_kharif_paddy_crop_area;
                        Data11.changed_kharif_paddy_fundingsource = result.changed_kharif_paddy_fundingsource;
                        Data11.changed_kharif_ragi_crop_area = result.changed_kharif_ragi_crop_area;
                        //  Data11.changed_kharif_ragi_fundingsource = result.changed_kharif_ragi_fundingsource;
                        Data11.changed_kharif_groundnut_crop_area = result.changed_kharif_groundnut_crop_area;
                        //  Data11.changed_kharif_groundnut_fundingsource = result.changed_kharif_groundnut_fundingsource;
                        Data11.changed_kharif_sugarcane_crop_area = result.changed_kharif_sugarcane_crop_area;
                        //  Data11.changed_kharif_sugarcane_fundingsource = result.changed_kharif_sugarcane_fundingsource;
                        Data11.changed_kharif_tomoto_crop_area = result.changed_kharif_tomoto_crop_area;
                        // Data11.changed_kharif_tomoto_fundingsource = result.changed_kharif_tomoto_fundingsource;
                        //Data11.changed_kharif_cabbage_crop_area = result.changed_kharif_cabbage_crop_area;
                        //Data11.changed_kharif_cabbage_fundingsource = result.changed_kharif_cabbage_fundingsource;
                        //Data11.changed_kharif_beans_crop_area = result.changed_kharif_beans_crop_area;
                        //Data11.changed_kharif_beans_fundingsource = result.changed_kharif_beans_fundingsource;
                        Data11.changed_kharif_floriculture_crop_area = result.changed_kharif_floriculture_crop_area;
                        //Data11.changed_kharif_floriculture_fundingsource = result.changed_kharif_floriculture_fundingsource;
                        Data11.changed_kharif_sericulture_crop_area = result.changed_kharif_sericulture_crop_area;
                        //Data11.changed_kharif_sericulture_fundingsource = result.changed_kharif_sericulture_fundingsource;
                        //Data11.changed_kharif_cucumber_crop_area = result.changed_kharif_cucumber_crop_area;
                        //Data11.changed_kharif_cucumber_fundingsource = result.changed_kharif_cucumber_fundingsource;
                        Data11.changed_kharif_banana_crop_area = result.changed_kharif_banana_crop_area;
                        //Data11.changed_kharif_banana_fundingsource = result.changed_kharif_banana_fundingsource;
                        Data11.changed_kharif_fodder_crop_area = result.changed_kharif_fodder_crop_area;
                        // Data11.changed_kharif_fodder_fundingsource = result.changed_kharif_fodder_fundingsource;
                        Data11.changed_kharif_maize_crop_area = result.changed_kharif_maize_crop_area;
                        //  Data11.changed_kharif_maize_fundingsource = result.changed_kharif_maize_fundingsource;
                        //Data11.changed_kharif_potato_crop_area = result.changed_kharif_potato_crop_area;
                        //Data11.changed_kharif_potato_fundingsource = result.changed_kharif_potato_fundingsource;
                        Data11.changed_kharif_chillies_crop_area = result.changed_kharif_chillies_crop_area;
                        //  Data11.changed_kharif_chillies_fundingsource = result.changed_kharif_chillies_fundingsource;
                        Data11.changed_kharif_cotton_crop_area = result.changed_kharif_cotton_crop_area;
                        //  Data11.changed_kharif_cotton_fundingsource = result.changed_kharif_cotton_fundingsource;
                        Data11.changed_kharif_melon_crop_area = result.changed_kharif_melon_crop_area;
                        //  Data11.changed_kharif_melon_fundingsource = result.changed_kharif_melon_fundingsource;
                        Data11.changed_kharif_citrus_crop_area = result.changed_kharif_citrus_crop_area;
                        //  Data11.changed_kharif_citrus_fundingsource = result.changed_kharif_citrus_fundingsource;
                        //Data11.changed_kharif_peanut_crop_area = result.changed_kharif_peanut_crop_area;
                        //Data11.changed_kharif_peanut_fundingsource = result.changed_kharif_peanut_fundingsource;
                        Data11.changed_kharif_horticulture_crop_area = result.changed_kharif_horticulture_crop_area;
                        //  Data11.changed_kharif_horticulture_fundingsource = result.changed_kharif_horticulture_fundingsource;
                        Data11.changed_rabi_sericulture_crop_area = result.changed_rabi_sericulture_crop_area;
                        //   Data11.changed_rabi_sericulture_fundingsource = result.changed_rabi_sericulture_fundingsource;
                        Data11.changed_rabi_tomoto_crop_area = result.changed_rabi_tomoto_crop_area;
                        //   Data11.changed_rabi_tomoto_fundingsource = result.changed_rabi_tomoto_fundingsource;
                        //Data11.changed_rabi_cabbage_crop_area = result.changed_rabi_cabbage_crop_area;
                        //Data11.changed_rabi_cabbage_fundingsource = result.changed_rabi_cabbage_fundingsource;
                        //Data11.changed_rabi_beans_crop_area = result.changed_rabi_beans_crop_area;
                        //Data11.changed_rabi_beans_fundingsource = result.changed_rabi_beans_fundingsource;
                        Data11.changed_rabi_floriculture_crop_area = result.changed_rabi_floriculture_crop_area;
                        //  Data11.changed_rabi_floriculture_fundingsource = result.changed_rabi_floriculture_fundingsource;
                        //Data11.changed_rabi_potato_crop_area = result.changed_rabi_potato_crop_area;
                        //Data11.changed_rabi_potato_fundingsource = result.changed_rabi_potato_fundingsource;
                        //Data11.changed_rabi_cucumber_crop_area = result.changed_rabi_cucumber_crop_area;
                        //Data11.changed_rabi_cucumber_fundingsource = result.changed_rabi_cucumber_fundingsource;
                        Data11.changed_rabi_ragi_crop_area = result.changed_rabi_ragi_crop_area;
                        //    Data11.changed_rabi_ragi_fundingsource = result.changed_rabi_ragi_fundingsource;
                        Data11.changed_rabi_sugarcane_crop_area = result.changed_rabi_sugarcane_crop_area;
                        //   Data11.changed_rabi_sugarcane_fundingsource = result.changed_rabi_sugarcane_fundingsource;
                        Data11.changed_rabi_maize_crop_area = result.changed_rabi_maize_crop_area;
                        // Data11.changed_rabi_maize_fundingsource = result.changed_rabi_maize_fundingsource;
                        Data11.changed_rabi_fodder_crop_area = result.changed_rabi_fodder_crop_area;
                        //  Data11.changed_rabi_fodder_fundingsource = result.changed_rabi_fodder_fundingsource;
                        Data11.changed_rabi_paddy_crop_area = result.changed_rabi_paddy_crop_area;
                        //  Data11.changed_rabi_paddy_fundingsource = result.changed_rabi_paddy_fundingsource;
                        Data11.changed_rabi_alfalfa_crop_area = result.changed_rabi_alfalfa_crop_area;
                        //Data11.changed_rabi_alfalfa_fundingsource = result.changed_rabi_alfalfa_fundingsource;
                        //Data11.changed_rabi_onion_crop_area = result.changed_rabi_onion_crop_area;
                        //Data11.changed_rabi_onion_fundingsource = result.changed_rabi_onion_fundingsource;
                        Data11.changed_rabi_horticulture_crop_area = result.changed_rabi_horticulture_crop_area;
                        // Data11.changed_rabi_horticulture_fundingsource = result.changed_rabi_horticulture_fundingsource;
                        Data11.changed_rabi_sunflower_crop_area = result.changed_rabi_sunflower_crop_area;
                        // Data11.changed_rabi_sunflower_fundingsource = result.changed_rabi_sunflower_fundingsource;
                        Data11.changed_summer_sericulture_crop_area = result.changed_summer_sericulture_crop_area;
                        // Data11.changed_summer_sericulture_fundingsource = result.changed_summer_sericulture_fundingsource;
                        Data11.changed_summer_tomoto_crop_area = result.changed_summer_tomoto_crop_area;
                        //  Data11.changed_summer_tomoto_fundingsource = result.changed_summer_tomoto_fundingsource;
                        //Data11.changed_summer_cabbage_crop_area = result.changed_summer_cabbage_crop_area;
                        //Data11.changed_summer_cabbage_fundingsource = result.changed_summer_cabbage_fundingsource;
                        //Data11.changed_summer_beans_crop_area = result.changed_summer_beans_crop_area;
                        //Data11.changed_summer_beans_fundingsource = result.changed_summer_beans_fundingsource;
                        Data11.changed_summer_floriculture_crop_area = result.changed_summer_floriculture_crop_area;
                        //  Data11.changed_summer_floriculture_fundingsource = result.changed_summer_floriculture_fundingsource;
                        Data11.changed_summer_maize_crop_area = result.changed_summer_maize_crop_area;
                        //  Data11.changed_summer_maize_fundingsource = result.changed_summer_maize_fundingsource;
                        Data11.changed_summer_fodder_crop_area = result.changed_summer_fodder_crop_area;
                        //  Data11.changed_summer_fodder_fundingsource = result.changed_summer_fodder_fundingsource;
                        Data11.changed_summer_sugarcane_crop_area = result.changed_summer_sugarcane_crop_area;
                        //Data11.changed_summer_sugarcane_fundingsource = result.changed_summer_sugarcane_fundingsource;

                        Data11.original_kharif_paddy_crop_area = result.original_kharif_paddy_crop_area;
                        //  Data11.original_kharif_paddy_fundingsource = result.original_kharif_paddy_fundingsource;
                        Data11.original_kharif_ragi_crop_area = result.original_kharif_ragi_crop_area;
                        //  Data11.original_kharif_ragi_fundingsource = result.original_kharif_ragi_fundingsource;
                        Data11.original_kharif_groundnut_crop_area = result.original_kharif_groundnut_crop_area;
                        //Data11.original_kharif_groundnut_fundingsource = result.original_kharif_groundnut_fundingsource;
                        Data11.original_kharif_sugarcane_crop_area = result.original_kharif_sugarcane_crop_area;
                        // Data11.original_kharif_sugarcane_fundingsource = result.original_kharif_sugarcane_fundingsource;
                        Data11.original_kharif_tomoto_crop_area = result.original_kharif_tomoto_crop_area;
                        // Data11.original_kharif_tomoto_fundingsource = result.original_kharif_tomoto_fundingsource;
                        //Data11.original_kharif_cabbage_crop_area = result.original_kharif_cabbage_crop_area;
                        //Data11.original_kharif_cabbage_fundingsource = result.original_kharif_cabbage_fundingsource;
                        //Data11.original_kharif_beans_crop_area = result.original_kharif_beans_crop_area;
                        //Data11.original_kharif_beans_fundingsource = result.original_kharif_beans_fundingsource;
                        Data11.original_kharif_floriculture_crop_area = result.original_kharif_floriculture_crop_area;
                        //  Data11.original_kharif_floriculture_fundingsource = result.original_kharif_floriculture_fundingsource;
                        Data11.original_kharif_sericulture_crop_area = result.original_kharif_sericulture_crop_area;
                        //  Data11.original_kharif_sericulture_fundingsource = result.original_kharif_sericulture_fundingsource;
                        //Data11.original_kharif_cucumber_crop_area = result.original_kharif_cucumber_crop_area;
                        //Data11.original_kharif_cucumber_fundingsource = result.original_kharif_cucumber_fundingsource;
                        Data11.original_kharif_banana_crop_area = result.original_kharif_banana_crop_area;
                        //  Data11.original_kharif_banana_fundingsource = result.original_kharif_banana_fundingsource;
                        Data11.original_kharif_fodder_crop_area = result.original_kharif_fodder_crop_area;
                        //Data11.original_kharif_fodder_fundingsource = result.original_kharif_fodder_fundingsource;
                        Data11.original_kharif_maize_crop_area = result.original_kharif_maize_crop_area;
                        // Data11.original_kharif_maize_fundingsource = result.original_kharif_maize_fundingsource;
                        //Data11.original_kharif_potato_crop_area = result.original_kharif_potato_crop_area;
                        //Data11.original_kharif_potato_fundingsource = result.original_kharif_potato_fundingsource;
                        Data11.original_kharif_chillies_crop_area = result.original_kharif_chillies_crop_area;
                        // Data11.original_kharif_chillies_fundingsource = result.original_kharif_chillies_fundingsource;
                        Data11.original_kharif_cotton_crop_area = result.original_kharif_cotton_crop_area;
                        // Data11.original_kharif_cotton_fundingsource = result.original_kharif_cotton_fundingsource;
                        Data11.original_kharif_melon_crop_area = result.original_kharif_melon_crop_area;
                        // Data11.original_kharif_melon_fundingsource = result.original_kharif_melon_fundingsource;
                        Data11.original_kharif_citrus_crop_area = result.original_kharif_citrus_crop_area;
                        // Data11.original_kharif_citrus_fundingsource = result.original_kharif_citrus_fundingsource;
                        //Data11.original_kharif_peanut_crop_area = result.original_kharif_peanut_crop_area;
                        //Data11.original_kharif_peanut_fundingsource = result.original_kharif_peanut_fundingsource;
                        Data11.original_kharif_horticulture_crop_area = result.original_kharif_horticulture_crop_area;
                        //  Data11.original_kharif_horticulture_fundingsource = result.original_kharif_horticulture_fundingsource;
                        Data11.original_rabi_sericulture_crop_area = result.original_rabi_sericulture_crop_area;
                        //Data11.original_rabi_sericulture_fundingsource = result.original_rabi_sericulture_fundingsource;
                        Data11.original_rabi_tomoto_crop_area = result.original_rabi_tomoto_crop_area;
                        // Data11.original_rabi_tomoto_fundingsource = result.original_rabi_tomoto_fundingsource;
                        //Data11.original_rabi_cabbage_crop_area = result.original_rabi_cabbage_crop_area;
                        //Data11.original_rabi_cabbage_fundingsource = result.original_rabi_cabbage_fundingsource;
                        //Data11.original_rabi_beans_crop_area = result.original_rabi_beans_crop_area;
                        //Data11.original_rabi_beans_fundingsource = result.original_rabi_beans_fundingsource;
                        Data11.original_rabi_floriculture_crop_area = result.original_rabi_floriculture_crop_area;
                        //  Data11.original_rabi_floriculture_fundingsource = result.original_rabi_floriculture_fundingsource;
                        //Data11.original_rabi_potato_crop_area = result.original_rabi_potato_crop_area;
                        //Data11.original_rabi_potato_fundingsource = result.original_rabi_potato_fundingsource;
                        //Data11.original_rabi_cucumber_crop_area = result.original_rabi_cucumber_crop_area;
                        //Data11.original_rabi_cucumber_fundingsource = result.original_rabi_cucumber_fundingsource;
                        Data11.original_rabi_ragi_crop_area = result.original_rabi_ragi_crop_area;
                        //Data11.original_rabi_ragi_fundingsource = result.original_rabi_ragi_fundingsource;
                        Data11.original_rabi_sugarcane_crop_area = result.original_rabi_sugarcane_crop_area;
                        // Data11.original_rabi_sugarcane_fundingsource = result.original_rabi_sugarcane_fundingsource;
                        Data11.original_rabi_maize_crop_area = result.original_rabi_maize_crop_area;
                        //  Data11.original_rabi_maize_fundingsource = result.original_rabi_maize_fundingsource;
                        Data11.original_rabi_fodder_crop_area = result.original_rabi_fodder_crop_area;
                        //Data11.original_rabi_fodder_fundingsource = result.original_rabi_fodder_fundingsource;
                        Data11.original_rabi_paddy_crop_area = result.original_rabi_paddy_crop_area;
                        // Data11.original_rabi_paddy_fundingsource = result.original_rabi_paddy_fundingsource;
                        Data11.original_rabi_alfalfa_crop_area = result.original_rabi_alfalfa_crop_area;
                        //   Data11.original_rabi_alfalfa_fundingsource = result.original_rabi_alfalfa_fundingsource;
                        //Data11.original_rabi_onion_crop_area = result.original_rabi_onion_crop_area;
                        //Data11.original_rabi_onion_fundingsource = result.original_rabi_onion_fundingsource;
                        Data11.original_rabi_horticulture_crop_area = result.original_rabi_horticulture_crop_area;
                        // Data11.original_rabi_horticulture_fundingsource = result.original_rabi_horticulture_fundingsource;
                        Data11.original_rabi_sunflower_crop_area = result.original_rabi_sunflower_crop_area;
                        // Data11.original_rabi_sunflower_fundingsource = result.original_rabi_sunflower_fundingsource;
                        Data11.original_summer_sericulture_crop_area = result.original_summer_sericulture_crop_area;
                        //  Data11.original_summer_sericulture_fundingsource = result.original_summer_sericulture_fundingsource;
                        //  Data11.original_summer_tomoto_crop_area = result.original_summer_tomoto_crop_area;
                        Data11.original_summer_tomoto_fundingsource = result.original_summer_tomoto_fundingsource;
                        //Data11.original_summer_cabbage_crop_area = result.original_summer_cabbage_crop_area;
                        //Data11.original_summer_cabbage_fundingsource = result.original_summer_cabbage_fundingsource;
                        //Data11.original_summer_beans_crop_area = result.original_summer_beans_crop_area;
                        //Data11.original_summer_beans_fundingsource = result.original_summer_beans_fundingsource;
                        Data11.original_summer_floriculture_crop_area = result.original_summer_floriculture_crop_area;
                        //  Data11.original_summer_floriculture_fundingsource = result.original_summer_floriculture_fundingsource;
                        Data11.original_summer_maize_crop_area = result.original_summer_maize_crop_area;
                        //Data11.original_summer_maize_fundingsource = result.original_summer_maize_fundingsource;
                        Data11.original_summer_fodder_crop_area = result.original_summer_fodder_crop_area;
                        // Data11.original_summer_fodder_fundingsource = result.original_summer_fodder_fundingsource;
                        Data11.original_summer_sugarcane_crop_area = result.original_summer_sugarcane_crop_area;
                        //                        Data11.original_summer_sugarcane_fundingsource = result.original_summer_sugarcane_fundingsource;

                        Data11.original_kharif_paddy_waterdemand = result.original_kharif_paddy_waterdemand;
                        Data11.original_kharif_ragi_waterdemand = result.original_kharif_ragi_waterdemand;
                        Data11.original_kharif_groundnut_waterdemand = result.original_kharif_groundnut_waterdemand;
                        Data11.original_kharif_sugarcane_waterdemand = result.original_kharif_sugarcane_waterdemand;

                        Data11.original_kharif_tomoto_waterdemand = result.original_kharif_tomoto_waterdemand;
                        //Data11.original_kharif_cabbage_waterdemand = result.original_kharif_cabbage_waterdemand;
                        //Data11.original_kharif_beans_waterdemand = result.original_kharif_beans_waterdemand;
                        Data11.original_kharif_floriculture_waterdemand = result.original_kharif_floriculture_waterdemand;

                        Data11.original_kharif_sericulture_waterdemand = result.original_kharif_sericulture_waterdemand;
                        //Data11.original_kharif_cucumber_waterdemand = result.original_kharif_cucumber_waterdemand;
                        Data11.original_kharif_banana_waterdemand = result.original_kharif_banana_waterdemand;
                        Data11.original_kharif_fodder_waterdemand = result.original_kharif_fodder_waterdemand;

                        Data11.original_kharif_maize_waterdemand = result.original_kharif_maize_waterdemand;
                        //Data11.original_kharif_potato_waterdemand = result.original_kharif_potato_waterdemand;
                        Data11.original_kharif_chillies_waterdemand = result.original_kharif_chillies_waterdemand;
                        Data11.original_kharif_cotton_waterdemand = result.original_kharif_cotton_waterdemand;

                        Data11.original_kharif_melon_waterdemand = result.original_kharif_melon_waterdemand;
                        Data11.original_kharif_citrus_waterdemand = result.original_kharif_citrus_waterdemand;
                        // Data11.original_kharif_peanut_waterdemand = result.original_kharif_peanut_waterdemand;
                        Data11.original_kharif_horticulture_waterdemand = result.original_kharif_horticulture_waterdemand;

                        //original rabi water demand
                        Data11.original_rabi_sericulture_waterdemand = result.original_rabi_sericulture_waterdemand;
                        Data11.original_rabi_tomoto_waterdemand = result.original_rabi_tomoto_waterdemand;
                        // Data11.original_rabi_cabbage_waterdemand = result.original_rabi_cabbage_waterdemand;
                        // Data11.original_rabi_beans_waterdemand = result.original_rabi_beans_waterdemand;

                        Data11.original_rabi_floriculture_waterdemand = result.original_rabi_floriculture_waterdemand;
                        // Data11.original_rabi_potato_waterdemand = result.original_rabi_potato_waterdemand;
                        // Data11.original_rabi_cucumber_waterdemand = result.original_rabi_cucumber_waterdemand;
                        Data11.original_rabi_ragi_waterdemand = result.original_rabi_ragi_waterdemand;

                        Data11.original_rabi_sugarcane_waterdemand = result.original_rabi_sugarcane_waterdemand;
                        Data11.original_rabi_maize_waterdemand = result.original_rabi_maize_waterdemand;
                        Data11.original_rabi_fodder_waterdemand = result.original_rabi_fodder_waterdemand;
                        Data11.original_rabi_paddy_waterdemand = result.original_rabi_paddy_waterdemand;

                        Data11.original_rabi_alfalfa_waterdemand = result.original_rabi_alfalfa_waterdemand;
                        //Data11.original_rabi_onion_waterdemand = result.original_rabi_onion_waterdemand;
                        Data11.original_rabi_horticulture_waterdemand = result.original_rabi_horticulture_waterdemand;
                        Data11.original_rabi_sunflower_waterdemand = result.original_rabi_sunflower_waterdemand;

                        //summer
                        Data11.original_summer_sericulture_waterdemand = result.original_summer_sericulture_waterdemand;
                        Data11.original_summer_tomoto_waterdemand = result.original_summer_tomoto_waterdemand;
                        //Data11.original_summer_cabbage_waterdemand = result.original_summer_cabbage_waterdemand;
                        //Data11.original_summer_beans_waterdemand = result.original_summer_beans_waterdemand;

                        Data11.original_summer_floriculture_waterdemand = result.original_summer_floriculture_waterdemand;
                        Data11.original_summer_maize_waterdemand = result.original_summer_maize_waterdemand;
                        Data11.original_summer_fodder_waterdemand = result.original_summer_fodder_waterdemand;
                        Data11.original_summer_sugarcane_waterdemand = result.original_summer_sugarcane_waterdemand;

                        //changed water demand
                        //other karif water demand
                        Data11.changed_kharif_paddy_waterdemand = result.changed_kharif_paddy_waterdemand;
                        Data11.changed_kharif_ragi_waterdemand = result.changed_kharif_ragi_waterdemand;
                        Data11.changed_kharif_groundnut_waterdemand = result.changed_kharif_groundnut_waterdemand;
                        Data11.changed_kharif_sugarcane_waterdemand = result.changed_kharif_sugarcane_waterdemand;

                        Data11.changed_kharif_tomoto_waterdemand = result.changed_kharif_tomoto_waterdemand;
                        // Data11.changed_kharif_cabbage_waterdemand = result.changed_kharif_cabbage_waterdemand;
                        // Data11.changed_kharif_beans_waterdemand = result.changed_kharif_beans_waterdemand;
                        Data11.changed_kharif_floriculture_waterdemand = result.changed_kharif_floriculture_waterdemand;

                        Data11.changed_kharif_sericulture_waterdemand = result.changed_kharif_sericulture_waterdemand;
                        // Data11.changed_kharif_cucumber_waterdemand = result.changed_kharif_cucumber_waterdemand;
                        Data11.changed_kharif_banana_waterdemand = result.changed_kharif_banana_waterdemand;
                        Data11.changed_kharif_fodder_waterdemand = result.changed_kharif_fodder_waterdemand;

                        Data11.changed_kharif_maize_waterdemand = result.changed_kharif_maize_waterdemand;
                        // Data11.changed_kharif_potato_waterdemand = result.changed_kharif_potato_waterdemand;
                        Data11.changed_kharif_chillies_waterdemand = result.changed_kharif_chillies_waterdemand;
                        Data11.changed_kharif_cotton_waterdemand = result.changed_kharif_cotton_waterdemand;

                        Data11.changed_kharif_melon_waterdemand = result.changed_kharif_melon_waterdemand;
                        Data11.changed_kharif_citrus_waterdemand = result.changed_kharif_citrus_waterdemand;
                        // Data11.changed_kharif_peanut_waterdemand = result.changed_kharif_peanut_waterdemand;
                        Data11.changed_kharif_horticulture_waterdemand = result.changed_kharif_horticulture_waterdemand;

                        //original rabi water demand
                        Data11.changed_rabi_sericulture_waterdemand = result.changed_rabi_sericulture_waterdemand;
                        Data11.changed_rabi_tomoto_waterdemand = result.changed_rabi_tomoto_waterdemand;
                        // Data11.changed_rabi_cabbage_waterdemand = result.changed_rabi_cabbage_waterdemand;
                        // Data11.changed_rabi_beans_waterdemand = result.changed_rabi_beans_waterdemand;

                        Data11.changed_rabi_floriculture_waterdemand = result.changed_rabi_floriculture_waterdemand;
                        // Data11.changed_rabi_potato_waterdemand = result.changed_rabi_potato_waterdemand;
                        // Data11.changed_rabi_cucumber_waterdemand = result.changed_rabi_cucumber_waterdemand;
                        Data11.changed_rabi_ragi_waterdemand = result.changed_rabi_ragi_waterdemand;

                        Data11.changed_rabi_sugarcane_waterdemand = result.changed_rabi_sugarcane_waterdemand;
                        Data11.changed_rabi_maize_waterdemand = result.changed_rabi_maize_waterdemand;
                        Data11.changed_rabi_fodder_waterdemand = result.changed_rabi_fodder_waterdemand;
                        Data11.changed_rabi_paddy_waterdemand = result.changed_rabi_paddy_waterdemand;

                        Data11.changed_rabi_alfalfa_waterdemand = result.changed_rabi_alfalfa_waterdemand;
                        // Data11.changed_rabi_onion_waterdemand = result.changed_rabi_onion_waterdemand;
                        Data11.changed_rabi_horticulture_waterdemand = result.changed_rabi_horticulture_waterdemand;
                        Data11.changed_rabi_sunflower_waterdemand = result.changed_rabi_sunflower_waterdemand;

                        //summer
                        Data11.changed_summer_sericulture_waterdemand = result.changed_summer_sericulture_waterdemand;
                        // Data11.changed_summer_tomoto_waterdemand = result.changed_summer_tomoto_waterdemand;
                        // Data11.changed_summer_cabbage_waterdemand = result.changed_summer_cabbage_waterdemand;
                        Data11.changed_summer_beans_waterdemand = result.changed_summer_beans_waterdemand;

                        Data11.changed_summer_floriculture_waterdemand = result.changed_summer_floriculture_waterdemand;
                        Data11.changed_summer_maize_waterdemand = result.changed_summer_maize_waterdemand;
                        Data11.changed_summer_fodder_waterdemand = result.changed_summer_fodder_waterdemand;
                        Data11.changed_summer_sugarcane_waterdemand = result.changed_summer_sugarcane_waterdemand;


                        Data11.latitude = result.latitude;
                        Data11.longitude = result.longitude;

                        //Data11.userid

                        //for the both changed and original sidepanel id are same
                        //changed
                        //Data11.crop_diversion_kharif_water_demand = result.crop_diversion_kharif_water_demand;
                        //Data11.crop_diversion_rabi_water_demand = result.crop_diversion_rabi_water_demand;
                        //Data11.crop_diversion_summer_crop_water_demand = result.crop_diversion_summer_crop_water_demand;
                        ////original
                        //Data11.crop_diversion_kharif_water_demand2 = result.crop_diversion_kharif_water_demand2;
                        //Data11.crop_diversion_rabi_water_demand2 = result.crop_diversion_rabi_water_demand2;
                        //Data11.crop_diversion_summer_crop_water_demand2 = result.crop_diversion_summer_crop_water_demand2;

                        //new columns of water requirement
                        //new columns water requirement
                        //original water req
                        Data11.original_kharif_paddy_water_req = result.original_kharif_paddy_water_req;
                        Data11.original_kharif_ragi_water_req = result.original_kharif_ragi_water_req;
                        Data11.original_kharif_groundnut_water_req = result.original_kharif_groundnut_water_req;
                        Data11.original_kharif_sugarcane_water_req = result.original_kharif_sugarcane_water_req;
                        Data11.original_kharif_tomoto_water_req = result.original_kharif_tomoto_water_req;
                        // Data11.original_kharif_cabbage_water_req = result.original_kharif_cabbage_water_req;
                        // Data11.original_kharif_beans_water_req = result.original_kharif_beans_water_req;
                        Data11.original_kharif_floriculture_water_req = result.original_kharif_floriculture_water_req;
                        Data11.original_kharif_sericulture_water_req = result.original_kharif_sericulture_water_req;
                        // Data11.original_kharif_cucumber_water_req = result.original_kharif_cucumber_water_req;
                        Data11.original_kharif_banana_water_req = result.original_kharif_banana_water_req;
                        Data11.original_kharif_fodder_water_req = result.original_kharif_fodder_water_req;
                        Data11.original_kharif_maize_water_req = result.original_kharif_maize_water_req;
                        //  Data11.original_kharif_potato_water_req = result.original_kharif_potato_water_req;
                        Data11.original_kharif_chillies_water_req = result.original_kharif_chillies_water_req;
                        Data11.original_kharif_cotton_water_req = result.original_kharif_cotton_water_req;
                        Data11.original_kharif_melon_water_req = result.original_kharif_melon_water_req;
                        Data11.original_kharif_citrus_water_req = result.original_kharif_citrus_water_req;
                        // Data11.original_kharif_peanut_water_req = result.original_kharif_peanut_water_req;
                        Data11.original_kharif_horticulture_water_req = result.original_kharif_horticulture_water_req;
                        //Data11.original_summer_sugarcane_irri_area = result.original_summer_sugarcane_irri_area;

                        Data11.original_rabi_sericulture_water_req = result.original_rabi_sericulture_water_req;
                        Data11.original_rabi_tomoto_water_req = result.original_rabi_tomoto_water_req;
                        // Data11.original_rabi_cabbage_water_req = result.original_rabi_cabbage_water_req;
                        // Data11.original_rabi_beans_water_req = result.original_rabi_beans_water_req;
                        Data11.original_rabi_floriculture_water_req = result.original_rabi_floriculture_water_req;
                        // Data11.original_rabi_potato_water_req = result.original_rabi_potato_water_req;
                        // Data11.original_rabi_cucumber_water_req = result.original_rabi_cucumber_water_req;
                        Data11.original_rabi_ragi_water_req = result.original_rabi_ragi_water_req;
                        Data11.original_rabi_sugarcane_water_req = result.original_rabi_sugarcane_water_req;
                        Data11.original_rabi_maize_water_req = result.original_rabi_maize_water_req;
                        Data11.original_rabi_fodder_water_req = result.original_rabi_fodder_water_req;
                        Data11.original_rabi_paddy_water_req = result.original_rabi_paddy_water_req;
                        Data11.original_rabi_alfalfa_water_req = result.original_rabi_alfalfa_water_req;
                        // Data11.original_rabi_onion_water_req = result.original_rabi_onion_water_req;
                        Data11.original_rabi_horticulture_water_req = result.original_rabi_horticulture_water_req;
                        Data11.original_rabi_sunflower_water_req = result.original_rabi_sunflower_water_req;

                        Data11.original_summer_sericulture_water_req = result.original_summer_sericulture_water_req;
                        Data11.original_summer_tomoto_water_req = result.original_summer_tomoto_water_req;
                        // Data11.original_summer_cabbage_water_req = result.original_summer_cabbage_water_req;
                        // Data11.original_summer_beans_water_req = result.original_summer_beans_water_req;
                        Data11.original_summer_floriculture_water_req = result.original_summer_floriculture_water_req;
                        Data11.original_summer_maize_water_req = result.original_summer_maize_water_req;
                        Data11.original_summer_fodder_water_req = result.original_summer_fodder_water_req;
                        Data11.original_summer_sugarcane_water_req = result.original_summer_sugarcane_water_req;

                        //changed water requirement
                        Data11.changed_kharif_paddy_crop_water_req = result.changed_kharif_paddy_crop_water_req;
                        Data11.changed_kharif_ragi_crop_water_req = result.changed_kharif_ragi_crop_water_req;
                        Data11.changed_kharif_groundnut_water_req = result.changed_kharif_groundnut_water_req;
                        Data11.changed_kharif_sugarcane_water_req = result.changed_kharif_sugarcane_water_req;
                        Data11.changed_kharif_tomoto_water_req = result.changed_kharif_tomoto_water_req;
                        //Data11.changed_kharif_cabbage_water_req = result.changed_kharif_cabbage_water_req;
                        //Data11.changed_kharif_beans_water_req = result.changed_kharif_beans_water_req;
                        Data11.changed_kharif_floriculture_water_req = result.changed_kharif_floriculture_water_req;
                        Data11.changed_kharif_sericulture_water_req = result.changed_kharif_sericulture_water_req;
                        //Data11.changed_kharif_cucumber_water_req = result.changed_kharif_cucumber_water_req;
                        Data11.changed_kharif_banana_water_req = result.changed_kharif_banana_water_req;
                        Data11.changed_kharif_fodder_water_req = result.changed_kharif_fodder_water_req;
                        Data11.changed_kharif_maize_water_req = result.changed_kharif_maize_water_req;
                        //Data11.changed_kharif_potato_water_req = result.changed_kharif_potato_water_req;
                        Data11.changed_kharif_chillies_water_req = result.changed_kharif_chillies_water_req;
                        Data11.changed_kharif_cotton_water_req = result.changed_kharif_cotton_water_req;
                        Data11.changed_kharif_melon_water_req = result.changed_kharif_melon_water_req;
                        Data11.changed_kharif_citrus_water_req = result.changed_kharif_citrus_water_req;
                        // Data11.changed_kharif_peanut_water_req = result.changed_kharif_peanut_water_req;
                        Data11.changed_kharif_horticulture_water_req = result.changed_kharif_horticulture_water_req;
                        //Data11.changed_summer_sugarcane_irri_area = result.changed_summer_sugarcane_irri_area; 

                        Data11.changed_rabi_sericulture_water_req = result.changed_rabi_sericulture_water_req;
                        Data11.changed_rabi_tomoto_water_req = result.changed_rabi_tomoto_water_req;
                        // Data11.changed_rabi_cabbage_water_req = result.changed_rabi_cabbage_water_req;
                        //Data11.changed_rabi_beans_water_req = result.changed_rabi_beans_water_req;
                        Data11.changed_rabi_floriculture_water_req = result.changed_rabi_floriculture_water_req;
                        // Data11.changed_rabi_potato_water_req = result.changed_rabi_potato_water_req;
                        // Data11.changed_rabi_cucumber_water_req = result.changed_rabi_cucumber_water_req;
                        Data11.changed_rabi_ragi_water_req = result.changed_rabi_ragi_water_req;
                        Data11.changed_rabi_sugarcane_water_req = result.changed_rabi_sugarcane_water_req;
                        Data11.changed_rabi_maize_water_req = result.changed_rabi_maize_water_req;
                        Data11.changed_rabi_fodder_water_req = result.changed_rabi_fodder_water_req;
                        Data11.changed_rabi_paddy_water_req = result.changed_rabi_paddy_water_req;
                        Data11.changed_rabi_alfalfa_water_req = result.changed_rabi_alfalfa_water_req;
                        // Data11.changed_rabi_onion_water_req = result.changed_rabi_onion_water_req;
                        Data11.changed_rabi_horticulture_water_req = result.changed_rabi_horticulture_water_req;
                        Data11.changed_rabi_sunflower_water_req = result.changed_rabi_sunflower_water_req;

                        Data11.changed_summer_sericulture_water_req = result.changed_summer_sericulture_water_req;
                        Data11.changed_summer_tomoto_water_req = result.changed_summer_tomoto_water_req;
                        // Data11.changed_summer_cabbage_water_req = result.changed_summer_cabbage_water_req;
                        // Data11.changed_summer_beans_water_req = result.changed_summer_beans_water_req;
                        Data11.changed_summer_floriculture_water_req = result.changed_summer_floriculture_water_req;
                        Data11.changed_summer_maize_water_req = result.changed_summer_maize_water_req;
                        Data11.changed_summer_fodder_water_req = result.changed_summer_fodder_water_req;
                        Data11.changed_summer_sugarcane_water_req = result.changed_summer_sugarcane_water_req;


                        //totals
                        Data11.original_kharif_total_waterdemand = result.original_kharif_total_waterdemand;
                        Data11.original_rabi_total_waterdemand = result.original_rabi_total_waterdemand;
                        Data11.original_summer_total_waterdemand = result.original_summer_total_waterdemand;

                        Data11.changed_kharif_total_waterdemand = result.changed_kharif_total_waterdemand;
                        Data11.changed_kharif_total_gw_reduc_waterdemand = result.changed_kharif_total_gw_reduc_waterdemand;
                        Data11.changed_rabi_total_waterdemand = result.changed_rabi_total_waterdemand;
                        Data11.changed_rabi_total_gw_reduc_waterdemand = result.changed_rabi_total_gw_reduc_waterdemand;
                        Data11.changed_summer_total_waterdemand = result.changed_summer_total_waterdemand;
                        Data11.changed_summer_total_gw_reduc_waterdemand = result.changed_summer_total_gw_reduc_waterdemand;
                        Data11.crop_total_annual_waterdemand = result.crop_total_annual_waterdemand;

                        Data11.crop_other_funding_source = result.crop_other_funding_source;
                        //other crops
                        //Data11.original_kharif_othercrop_name = result.original_kharif_othercrop_name;
                        //Data11.original_kharif_othercrop_area = result.original_kharif_othercrop_area;
                        //Data11.original_kharif_othercrop_water_req = result.original_kharif_othercrop_water_req;
                        //Data11.original_kharif_othercrop_waterdemand = result.original_kharif_othercrop_waterdemand;

                        //Data11.original_rabi_othercrop_name = result.original_rabi_othercrop_name;
                        //Data11.original_rabi_othercrop_area = result.original_rabi_othercrop_area;
                        //Data11.original_rabi_othercrop_water_req = result.original_rabi_othercrop_water_req;
                        //Data11.original_rabi_othercrop_waterdemand = result.original_rabi_othercrop_waterdemand;

                        //Data11.original_summer_othercrop_name = result.original_summer_othercrop_name;
                        //Data11.original_summer_othercrop_area = result.original_summer_othercrop_area;
                        //Data11.original_summer_othercrop_water_req = result.original_summer_othercrop_water_req;
                        //Data11.original_summer_othercrop_waterdemand = result.original_summer_othercrop_waterdemand;

                        //Data11.changed_kharif_othercrop_name = result.changed_kharif_othercrop_name;
                        //Data11.changed_kharif_othercrop_area = result.changed_kharif_othercrop_area;
                        //Data11.changed_kharif_othercrop_water_req = result.changed_kharif_othercrop_water_req;
                        //Data11.changed_kharif_othercrop_waterdemand = result.changed_kharif_othercrop_waterdemand;


                        //Data11.changed_rabi_othercrop_name = result.changed_rabi_othercrop_name;
                        //Data11.changed_rabi_othercrop_area = result.changed_rabi_othercrop_area;
                        //Data11.changed_rabi_othercrop_water_req = result.changed_rabi_othercrop_water_req;
                        //Data11.changed_rabi_othercrop_waterdemand = result.changed_rabi_othercrop_waterdemand;

                        //Data11.changed_summer_othercrop_name = result.changed_summer_othercrop_name;
                        //Data11.changed_summer_othercrop_area = result.changed_summer_othercrop_area;
                        //Data11.changed_summer_othercrop_water_req = result.changed_summer_othercrop_water_req;
                        //Data11.changed_summer_othercrop_waterdemand = result.changed_summer_othercrop_waterdemand;
                        //reduction values
                        //kharif
                        Data11.changed_kharif_paddy_gw_reduc_waterdemand = result.changed_kharif_paddy_gw_reduc_waterdemand;
                        Data11.changed_kharif_ragi_gw_reduc_waterdemand = result.changed_kharif_ragi_gw_reduc_waterdemand;
                        Data11.changed_kharif_groundnut_gw_reduc_waterdemand = result.changed_kharif_groundnut_gw_reduc_waterdemand;
                        Data11.changed_kharif_sugarcane_gw_reduc_waterdemand = result.changed_kharif_sugarcane_gw_reduc_waterdemand;

                        Data11.changed_kharif_tomoto_gw_reduc_waterdemand = result.changed_kharif_tomoto_gw_reduc_waterdemand;
                        // Data11.changed_kharif_cabbage_gw_reduc_waterdemand = result.changed_kharif_cabbage_gw_reduc_waterdemand;
                        // Data11.changed_kharif_beans_gw_reduc_waterdemand = result.changed_kharif_beans_gw_reduc_waterdemand;
                        Data11.changed_kharif_floriculture_gw_reduc_waterdemand = result.changed_kharif_floriculture_gw_reduc_waterdemand;

                        Data11.changed_kharif_sericulture_gw_reduc_waterdemand = result.changed_kharif_sericulture_gw_reduc_waterdemand;
                        // Data11.changed_kharif_cucumber_gw_reduc_waterdemand = result.changed_kharif_cucumber_gw_reduc_waterdemand;
                        Data11.changed_kharif_banana_gw_reduc_waterdemand = result.changed_kharif_banana_gw_reduc_waterdemand;
                        Data11.changed_kharif_fodder_gw_reduc_waterdemand = result.changed_kharif_fodder_gw_reduc_waterdemand;

                        Data11.changed_kharif_maize_gw_reduc_waterdemand = result.changed_kharif_maize_gw_reduc_waterdemand;
                        // Data11.changed_kharif_potato_gw_reduc_waterdemand = result.changed_kharif_potato_gw_reduc_waterdemand;
                        Data11.changed_kharif_chillies_gw_reduc_waterdemand = result.changed_kharif_chillies_gw_reduc_waterdemand;
                        Data11.changed_kharif_cotton_gw_reduc_waterdemand = result.changed_kharif_cotton_gw_reduc_waterdemand;

                        Data11.changed_kharif_melon_gw_reduc_waterdemand = result.changed_kharif_melon_gw_reduc_waterdemand;
                        Data11.changed_kharif_citrus_gw_reduc_waterdemand = result.changed_kharif_citrus_gw_reduc_waterdemand;
                        // Data11.changed_kharif_peanut_gw_reduc_waterdemand = result.changed_kharif_peanut_gw_reduc_waterdemand;
                        Data11.changed_kharif_horticulture_gw_reduc_waterdemand = result.changed_kharif_horticulture_gw_reduc_waterdemand;

                        //rabi
                        Data11.changed_rabi_sericulture_gw_reduc_waterdemand = result.changed_rabi_sericulture_gw_reduc_waterdemand;
                        Data11.changed_rabi_tomoto_gw_reduc_waterdemand = result.changed_rabi_tomoto_gw_reduc_waterdemand;
                        // Data11.changed_rabi_cabbage_gw_reduc_waterdemand = result.changed_rabi_cabbage_gw_reduc_waterdemand;
                        // Data11.changed_rabi_beans_gw_reduc_waterdemand = result.changed_rabi_beans_gw_reduc_waterdemand;

                        Data11.changed_rabi_floriculture_gw_reduc_waterdemand = result.changed_rabi_floriculture_gw_reduc_waterdemand;
                        // Data11.changed_rabi_potato_gw_reduc_waterdemand = result.changed_rabi_potato_gw_reduc_waterdemand;
                        // Data11.changed_rabi_cucumber_gw_reduc_waterdemand = result.changed_rabi_cucumber_gw_reduc_waterdemand;
                        Data11.changed_rabi_ragi_gw_reduc_waterdemand = result.changed_rabi_ragi_gw_reduc_waterdemand;

                        Data11.changed_rabi_sugarcane_gw_reduc_waterdemand = result.changed_rabi_sugarcane_gw_reduc_waterdemand;
                        Data11.changed_rabi_maize_gw_reduc_waterdemand = result.changed_rabi_maize_gw_reduc_waterdemand;
                        Data11.changed_rabi_fodder_gw_reduc_waterdemand = result.changed_rabi_fodder_gw_reduc_waterdemand;
                        Data11.changed_rabi_paddy_gw_reduc_waterdemand = result.changed_rabi_paddy_gw_reduc_waterdemand;

                        Data11.changed_rabi_alfalfa_gw_reduc_waterdemand = result.changed_rabi_alfalfa_gw_reduc_waterdemand;
                        // Data11.changed_rabi_onion_gw_reduc_waterdemand = result.changed_rabi_onion_gw_reduc_waterdemand;
                        Data11.changed_rabi_horticulture_gw_reduc_waterdemand = result.changed_rabi_horticulture_gw_reduc_waterdemand;
                        Data11.changed_rabi_sunflower_gw_reduc_waterdemand = result.changed_rabi_sunflower_gw_reduc_waterdemand;

                        //summer
                        Data11.changed_summer_sericulture_gw_reduc_waterdemand = result.changed_summer_sericulture_gw_reduc_waterdemand;
                        Data11.changed_summer_tomoto_gw_reduc_waterdemand = result.changed_summer_tomoto_gw_reduc_waterdemand;
                        // Data11.changed_summer_cabbage_gw_reduc_waterdemand = result.changed_summer_cabbage_gw_reduc_waterdemand;
                        // Data11.changed_summer_beans_gw_reduc_waterdemand = result.changed_summer_beans_gw_reduc_waterdemand;

                        Data11.changed_summer_floriculture_gw_reduc_waterdemand = result.changed_summer_floriculture_gw_reduc_waterdemand;
                        Data11.changed_summer_maize_gw_reduc_waterdemand = result.changed_summer_maize_gw_reduc_waterdemand;
                        Data11.changed_summer_fodder_gw_reduc_waterdemand = result.changed_summer_fodder_gw_reduc_waterdemand;
                        Data11.changed_summer_sugarcane_gw_reduc_waterdemand = result.changed_summer_sugarcane_gw_reduc_waterdemand;

                        //horiculture
                        Data11.original_summer_horticulture_crop_area = result.original_summer_horticulture_crop_area;
                        Data11.original_summer_horticulture_water_req = result.original_summer_horticulture_water_req;
                        Data11.original_summer_horticulture_waterdemand = result.original_summer_horticulture_waterdemand;
                        Data11.changed_summer_horticulture_crop_area = result.changed_summer_horticulture_crop_area;
                        Data11.changed_summer_horticulture_water_req = result.changed_summer_horticulture_water_req;
                        Data11.changed_summer_horticulture_waterdemand = result.changed_summer_horticulture_waterdemand;
                        Data11.changed_summer_horticulture_reduction_gw_demand = result.changed_summer_horticulture_reduction_gw_demand;

                        //other crops 5boxes original and changed
                        Data11.original_kharif_othercrop_name1 = result.original_kharif_othercrop_name1;
                        Data11.original_kharif_othercrop_area1 = result.original_kharif_othercrop_area1;
                        Data11.original_kharif_horticulture_water_req1 = result.original_kharif_horticulture_water_req1;
                        Data11.original_kharif_horticulture_waterdemand1 = result.original_kharif_horticulture_waterdemand1;

                        Data11.original_kharif_othercrop_name2 = result.original_kharif_othercrop_name2;
                        Data11.original_kharif_othercrop_area2 = result.original_kharif_othercrop_area2;
                        Data11.original_kharif_horticulture_water_req2 = result.original_kharif_horticulture_water_req2;
                        Data11.original_kharif_horticulture_waterdemand2 = result.original_kharif_horticulture_waterdemand2;

                        Data11.original_kharif_othercrop_name3 = result.original_kharif_othercrop_name3;
                        Data11.original_kharif_othercrop_area3 = result.original_kharif_othercrop_area3;
                        Data11.original_kharif_horticulture_water_req3 = result.original_kharif_horticulture_water_req3;
                        Data11.original_kharif_horticulture_waterdemand3 = result.original_kharif_horticulture_waterdemand3;

                        Data11.original_kharif_othercrop_name4 = result.original_kharif_othercrop_name4;
                        Data11.original_kharif_othercrop_area4 = result.original_kharif_othercrop_area4;
                        Data11.original_kharif_horticulture_water_req4 = result.original_kharif_horticulture_water_req4;
                        Data11.original_kharif_horticulture_waterdemand4 = result.original_kharif_horticulture_waterdemand4;

                        Data11.original_kharif_othercrop_name5 = result.original_kharif_othercrop_name5;
                        Data11.original_kharif_othercrop_area5 = result.original_kharif_othercrop_area5;
                        Data11.original_kharif_horticulture_water_req5 = result.original_kharif_horticulture_water_req5;
                        Data11.original_kharif_horticulture_waterdemand5 = result.original_kharif_horticulture_waterdemand5;

                        Data11.original_rabi_othercrop_name1 = result.original_rabi_othercrop_name1;
                        Data11.original_rabi_othercrop_area1 = result.original_rabi_othercrop_area1;
                        Data11.original_rabi_horticulture_water_req1 = result.original_rabi_horticulture_water_req1;
                        Data11.original_rabi_horticulture_waterdemand1 = result.original_rabi_horticulture_waterdemand1;

                        Data11.original_rabi_othercrop_name2 = result.original_rabi_othercrop_name2;
                        Data11.original_rabi_othercrop_area2 = result.original_rabi_othercrop_area2;
                        Data11.original_rabi_horticulture_water_req2 = result.original_rabi_horticulture_water_req2;
                        Data11.original_rabi_horticulture_waterdemand2 = result.original_rabi_horticulture_waterdemand2;

                        Data11.original_rabi_othercrop_name3 = result.original_rabi_othercrop_name3;
                        Data11.original_rabi_othercrop_area3 = result.original_rabi_othercrop_area3;
                        Data11.original_rabi_horticulture_water_req3 = result.original_rabi_horticulture_water_req3;
                        Data11.original_rabi_horticulture_waterdemand3 = result.original_rabi_horticulture_waterdemand3;

                        Data11.original_rabi_othercrop_name4 = result.original_rabi_othercrop_name4;
                        Data11.original_rabi_othercrop_area4 = result.original_rabi_othercrop_area4;
                        Data11.original_rabi_horticulture_water_req4 = result.original_rabi_horticulture_water_req4;
                        Data11.original_rabi_horticulture_waterdemand4 = result.original_rabi_horticulture_waterdemand4;

                        Data11.original_rabi_othercrop_name5 = result.original_rabi_othercrop_name5;
                        Data11.original_rabi_othercrop_area5 = result.original_rabi_othercrop_area5;
                        Data11.original_rabi_horticulture_water_req5 = result.original_rabi_horticulture_water_req5;
                        Data11.original_rabi_horticulture_waterdemand5 = result.original_rabi_horticulture_waterdemand5;

                        Data11.original_summer_othercrop_name1 = result.original_summer_othercrop_name1;
                        Data11.original_summer_othercrop_area1 = result.original_summer_othercrop_area1;
                        Data11.original_summer_horticulture_water_req1 = result.original_summer_horticulture_water_req1;
                        Data11.original_summer_horticulture_waterdemand1 = result.original_summer_horticulture_waterdemand1;

                        Data11.original_summer_othercrop_name2 = result.original_summer_othercrop_name2;
                        Data11.original_summer_othercrop_area2 = result.original_summer_othercrop_area2;
                        Data11.original_summer_horticulture_water_req2 = result.original_summer_horticulture_water_req2;
                        Data11.original_summer_horticulture_waterdemand2 = result.original_summer_horticulture_waterdemand2;

                        Data11.original_summer_othercrop_name3 = result.original_summer_othercrop_name3;
                        Data11.original_summer_othercrop_area3 = result.original_summer_othercrop_area3;
                        Data11.original_summer_horticulture_water_req3 = result.original_summer_horticulture_water_req3;
                        Data11.original_summer_horticulture_waterdemand3 = result.original_summer_horticulture_waterdemand3;


                        Data11.original_summer_othercrop_name4 = result.original_summer_othercrop_name4;
                        Data11.original_summer_othercrop_area4 = result.original_summer_othercrop_area4;
                        Data11.original_summer_horticulture_water_req4 = result.original_summer_horticulture_water_req4;
                        Data11.original_summer_horticulture_waterdemand4 = result.original_summer_horticulture_waterdemand4;

                        Data11.original_summer_othercrop_name5 = result.original_summer_othercrop_name5;
                        Data11.original_summer_othercrop_area5 = result.original_summer_othercrop_area5;
                        Data11.original_summer_horticulture_water_req5 = result.original_summer_horticulture_water_req5;
                        Data11.original_summer_horticulture_waterdemand5 = result.original_summer_horticulture_waterdemand5;


                        Data11.changed_kharif_othercrop_name1 = result.changed_kharif_othercrop_name1;
                        Data11.changed_kharif_croparea_area1 = result.changed_kharif_croparea_area1;
                        Data11.changed_kharif_horticulture_water_req1 = result.changed_kharif_horticulture_water_req1;
                        Data11.changed_kharif_horticulture_waterdemand1 = result.changed_kharif_horticulture_waterdemand1;
                        Data11.changed_kharif_horticulture_reduction_gw_demand1 = result.changed_kharif_horticulture_reduction_gw_demand1;

                        Data11.changed_kharif_othercrop_name2 = result.changed_kharif_othercrop_name2;
                        Data11.changed_kharif_croparea_area2 = result.changed_kharif_croparea_area2;
                        Data11.changed_kharif_horticulture_water_req2 = result.changed_kharif_horticulture_water_req2;
                        Data11.changed_kharif_horticulture_waterdemand2 = result.changed_kharif_horticulture_waterdemand2;
                        Data11.changed_kharif_horticulture_reduction_gw_demand2 = result.changed_kharif_horticulture_reduction_gw_demand2;

                        Data11.changed_kharif_othercrop_name3 = result.changed_kharif_othercrop_name3;
                        Data11.changed_kharif_croparea_area3 = result.changed_kharif_croparea_area3;
                        Data11.changed_kharif_horticulture_water_req3 = result.changed_kharif_horticulture_water_req3;
                        Data11.changed_kharif_horticulture_waterdemand3 = result.changed_kharif_horticulture_waterdemand3;
                        Data11.changed_kharif_horticulture_reduction_gw_demand3 = result.changed_kharif_horticulture_reduction_gw_demand3;

                        Data11.changed_kharif_othercrop_name4 = result.changed_kharif_othercrop_name4;
                        Data11.changed_kharif_croparea_area4 = result.changed_kharif_croparea_area4;
                        Data11.changed_kharif_horticulture_water_req4 = result.changed_kharif_horticulture_water_req4;
                        Data11.changed_kharif_horticulture_waterdemand4 = result.changed_kharif_horticulture_waterdemand4;
                        Data11.changed_kharif_horticulture_reduction_gw_demand4 = result.changed_kharif_horticulture_reduction_gw_demand4;

                        Data11.changed_kharif_othercrop_name5 = result.changed_kharif_othercrop_name5;
                        Data11.changed_kharif_croparea_area5 = result.changed_kharif_croparea_area5;
                        Data11.changed_kharif_horticulture_water_req5 = result.changed_kharif_horticulture_water_req5;
                        Data11.changed_kharif_horticulture_waterdemand5 = result.changed_kharif_horticulture_waterdemand5;
                        Data11.changed_kharif_horticulture_reduction_gw_demand5 = result.changed_kharif_horticulture_reduction_gw_demand5;

                        Data11.changed_rabi_othercrop_name1 = result.changed_rabi_othercrop_name1;
                        Data11.changed_rabi_croparea_area1 = result.changed_rabi_croparea_area1;
                        Data11.changed_rabi_horticulture_water_req1 = result.changed_rabi_horticulture_water_req1;
                        Data11.changed_rabi_horticulture_waterdemand1 = result.changed_rabi_horticulture_waterdemand1;
                        Data11.changed_rabi_horticulture_reduction_gw_demand1 = result.changed_rabi_horticulture_reduction_gw_demand1;

                        Data11.changed_rabi_othercrop_name2 = result.changed_rabi_othercrop_name2;
                        Data11.changed_rabi_croparea_area2 = result.changed_rabi_croparea_area2;
                        Data11.changed_rabi_horticulture_water_req2 = result.changed_rabi_horticulture_water_req2;
                        Data11.changed_rabi_horticulture_waterdemand2 = result.changed_rabi_horticulture_waterdemand2;
                        Data11.changed_rabi_horticulture_reduction_gw_demand2 = result.changed_rabi_horticulture_reduction_gw_demand2;

                        Data11.changed_rabi_othercrop_name3 = result.changed_rabi_othercrop_name3;
                        Data11.changed_rabi_croparea_area3 = result.changed_rabi_croparea_area3;
                        Data11.changed_rabi_horticulture_water_req3 = result.changed_rabi_horticulture_water_req3;
                        Data11.changed_rabi_horticulture_waterdemand3 = result.changed_rabi_horticulture_waterdemand3;
                        Data11.changed_rabi_horticulture_reduction_gw_demand3 = result.changed_rabi_horticulture_reduction_gw_demand3;

                        Data11.changed_rabi_othercrop_name4 = result.changed_rabi_othercrop_name4;
                        Data11.changed_rabi_croparea_area4 = result.changed_rabi_croparea_area4;
                        Data11.changed_rabi_horticulture_water_req4 = result.changed_rabi_horticulture_water_req4;
                        Data11.changed_rabi_horticulture_waterdemand4 = result.changed_rabi_horticulture_waterdemand4;
                        Data11.changed_rabi_horticulture_reduction_gw_demand4 = result.changed_rabi_horticulture_reduction_gw_demand4;

                        Data11.changed_rabi_othercrop_name5 = result.changed_rabi_othercrop_name5;
                        Data11.changed_rabi_croparea_area5 = result.changed_rabi_croparea_area5;
                        Data11.changed_rabi_horticulture_water_req5 = result.changed_rabi_horticulture_water_req5;
                        Data11.changed_rabi_horticulture_waterdemand5 = result.changed_rabi_horticulture_waterdemand5;
                        Data11.changed_rabi_horticulture_reduction_gw_demand5 = result.changed_rabi_horticulture_reduction_gw_demand5;

                        Data11.changed_summer_othercrop_name1 = result.changed_summer_othercrop_name1;
                        Data11.changed_summer_croparea_area1 = result.changed_summer_croparea_area1;
                        Data11.changed_summer_horticulture_water_req1 = result.changed_summer_horticulture_water_req1;
                        Data11.changed_summer_horticulture_waterdemand1 = result.changed_summer_horticulture_waterdemand1;
                        Data11.changed_summer_horticulture_reduction_gw_demand1 = result.changed_summer_horticulture_reduction_gw_demand1;

                        Data11.changed_summer_othercrop_name2 = result.changed_summer_othercrop_name2;
                        Data11.changed_summer_croparea_area2 = result.changed_summer_croparea_area2;
                        Data11.changed_summer_horticulture_water_req2 = result.changed_summer_horticulture_water_req2;
                        Data11.changed_summer_horticulture_waterdemand2 = result.changed_summer_horticulture_waterdemand2;
                        Data11.changed_summer_horticulture_reduction_gw_demand2 = result.changed_summer_horticulture_reduction_gw_demand2;

                        Data11.changed_summer_othercrop_name3 = result.changed_summer_othercrop_name3;
                        Data11.changed_summer_croparea_area3 = result.changed_summer_croparea_area3;
                        Data11.changed_summer_horticulture_water_req3 = result.changed_summer_horticulture_water_req3;
                        Data11.changed_summer_horticulture_waterdemand3 = result.changed_summer_horticulture_waterdemand3;
                        Data11.changed_summer_horticulture_reduction_gw_demand3 = result.changed_summer_horticulture_reduction_gw_demand3;

                        Data11.changed_summer_othercrop_name4 = result.changed_summer_othercrop_name4;
                        Data11.changed_summer_croparea_area4 = result.changed_summer_croparea_area4;
                        Data11.changed_summer_horticulture_water_req4 = result.changed_summer_horticulture_water_req4;
                        Data11.changed_summer_horticulture_waterdemand4 = result.changed_summer_horticulture_waterdemand4;
                        Data11.changed_summer_horticulture_reduction_gw_demand4 = result.changed_summer_horticulture_reduction_gw_demand4;

                        Data11.changed_summer_othercrop_name5 = result.changed_summer_othercrop_name5;
                        Data11.changed_summer_croparea_area5 = result.changed_summer_croparea_area5;
                        Data11.changed_summer_horticulture_water_req5 = result.changed_summer_horticulture_water_req5;
                        Data11.changed_summer_horticulture_waterdemand5 = result.changed_summer_horticulture_waterdemand5;
                        Data11.changed_summer_horticulture_reduction_gw_demand5 = result.changed_summer_horticulture_reduction_gw_demand5;
                        ABE.Entry(Data11).State = EntityState.Modified;

                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        obj.userid = Convert.ToInt32(userid);
                        obj.statename = StateName;
                        obj.blockname = BlockName;
                        obj.districtname = DistName;
                        obj.gpname = GramName;
                        var TodayDate1 = DateTime.Now.ToString();
                        var Datea = TodayDate1.Split('/', ' ', '-');
                        var Today1 = Datea[1] + '/' + Datea[0] + '/' + Datea[2];
                        obj.date_time = Today1;

                        if (result.crop_approx_estimated_cost != null && result.crop_approx_estimated_cost != "")
                        {
                            string valid_negitive = Validation_NegitiveVal(result.crop_approx_estimated_cost);
                            if (valid_negitive == "True")
                            {
                                obj.crop_approx_estimated_cost = result.crop_approx_estimated_cost;

                            }
                            else
                            {
                                return Json(valid_negitive, JsonRequestBehavior.AllowGet);
                            }

                        }
                        obj.crop_cost_type = result.crop_cost_type;

                        obj.changed_kharif_paddy_crop_area = result.changed_kharif_paddy_crop_area;
                        obj.changed_kharif_paddy_fundingsource = result.changed_kharif_paddy_fundingsource;
                        obj.changed_kharif_ragi_crop_area = result.changed_kharif_ragi_crop_area;
                        //  obj.changed_kharif_ragi_fundingsource = result.changed_kharif_ragi_fundingsource;
                        obj.changed_kharif_groundnut_crop_area = result.changed_kharif_groundnut_crop_area;
                        //  obj.changed_kharif_groundnut_fundingsource = result.changed_kharif_groundnut_fundingsource;
                        obj.changed_kharif_sugarcane_crop_area = result.changed_kharif_sugarcane_crop_area;
                        //  obj.changed_kharif_sugarcane_fundingsource = result.changed_kharif_sugarcane_fundingsource;
                        obj.changed_kharif_tomoto_crop_area = result.changed_kharif_tomoto_crop_area;
                        // obj.changed_kharif_tomoto_fundingsource = result.changed_kharif_tomoto_fundingsource;
                        //obj.changed_kharif_cabbage_crop_area = result.changed_kharif_cabbage_crop_area;
                        //obj.changed_kharif_cabbage_fundingsource = result.changed_kharif_cabbage_fundingsource;
                        //obj.changed_kharif_beans_crop_area = result.changed_kharif_beans_crop_area;
                        //obj.changed_kharif_beans_fundingsource = result.changed_kharif_beans_fundingsource;
                        obj.changed_kharif_floriculture_crop_area = result.changed_kharif_floriculture_crop_area;
                        //obj.changed_kharif_floriculture_fundingsource = result.changed_kharif_floriculture_fundingsource;
                        obj.changed_kharif_sericulture_crop_area = result.changed_kharif_sericulture_crop_area;
                        //obj.changed_kharif_sericulture_fundingsource = result.changed_kharif_sericulture_fundingsource;
                        //obj.changed_kharif_cucumber_crop_area = result.changed_kharif_cucumber_crop_area;
                        //obj.changed_kharif_cucumber_fundingsource = result.changed_kharif_cucumber_fundingsource;
                        obj.changed_kharif_banana_crop_area = result.changed_kharif_banana_crop_area;
                        //obj.changed_kharif_banana_fundingsource = result.changed_kharif_banana_fundingsource;
                        obj.changed_kharif_fodder_crop_area = result.changed_kharif_fodder_crop_area;
                        // obj.changed_kharif_fodder_fundingsource = result.changed_kharif_fodder_fundingsource;
                        obj.changed_kharif_maize_crop_area = result.changed_kharif_maize_crop_area;
                        //  obj.changed_kharif_maize_fundingsource = result.changed_kharif_maize_fundingsource;
                        //obj.changed_kharif_potato_crop_area = result.changed_kharif_potato_crop_area;
                        //obj.changed_kharif_potato_fundingsource = result.changed_kharif_potato_fundingsource;
                        obj.changed_kharif_chillies_crop_area = result.changed_kharif_chillies_crop_area;
                        //  obj.changed_kharif_chillies_fundingsource = result.changed_kharif_chillies_fundingsource;
                        obj.changed_kharif_cotton_crop_area = result.changed_kharif_cotton_crop_area;
                        //  obj.changed_kharif_cotton_fundingsource = result.changed_kharif_cotton_fundingsource;
                        obj.changed_kharif_melon_crop_area = result.changed_kharif_melon_crop_area;
                        //  obj.changed_kharif_melon_fundingsource = result.changed_kharif_melon_fundingsource;
                        obj.changed_kharif_citrus_crop_area = result.changed_kharif_citrus_crop_area;
                        //  obj.changed_kharif_citrus_fundingsource = result.changed_kharif_citrus_fundingsource;
                        //obj.changed_kharif_peanut_crop_area = result.changed_kharif_peanut_crop_area;
                        //obj.changed_kharif_peanut_fundingsource = result.changed_kharif_peanut_fundingsource;
                        obj.changed_kharif_horticulture_crop_area = result.changed_kharif_horticulture_crop_area;
                        //  obj.changed_kharif_horticulture_fundingsource = result.changed_kharif_horticulture_fundingsource;
                        obj.changed_rabi_sericulture_crop_area = result.changed_rabi_sericulture_crop_area;
                        //   obj.changed_rabi_sericulture_fundingsource = result.changed_rabi_sericulture_fundingsource;
                        obj.changed_rabi_tomoto_crop_area = result.changed_rabi_tomoto_crop_area;
                        //   obj.changed_rabi_tomoto_fundingsource = result.changed_rabi_tomoto_fundingsource;
                        //obj.changed_rabi_cabbage_crop_area = result.changed_rabi_cabbage_crop_area;
                        //obj.changed_rabi_cabbage_fundingsource = result.changed_rabi_cabbage_fundingsource;
                        //obj.changed_rabi_beans_crop_area = result.changed_rabi_beans_crop_area;
                        //obj.changed_rabi_beans_fundingsource = result.changed_rabi_beans_fundingsource;
                        obj.changed_rabi_floriculture_crop_area = result.changed_rabi_floriculture_crop_area;
                        //  obj.changed_rabi_floriculture_fundingsource = result.changed_rabi_floriculture_fundingsource;
                        //obj.changed_rabi_potato_crop_area = result.changed_rabi_potato_crop_area;
                        //obj.changed_rabi_potato_fundingsource = result.changed_rabi_potato_fundingsource;
                        //obj.changed_rabi_cucumber_crop_area = result.changed_rabi_cucumber_crop_area;
                        //obj.changed_rabi_cucumber_fundingsource = result.changed_rabi_cucumber_fundingsource;
                        obj.changed_rabi_ragi_crop_area = result.changed_rabi_ragi_crop_area;
                        //    obj.changed_rabi_ragi_fundingsource = result.changed_rabi_ragi_fundingsource;
                        obj.changed_rabi_sugarcane_crop_area = result.changed_rabi_sugarcane_crop_area;
                        //   obj.changed_rabi_sugarcane_fundingsource = result.changed_rabi_sugarcane_fundingsource;
                        obj.changed_rabi_maize_crop_area = result.changed_rabi_maize_crop_area;
                        // obj.changed_rabi_maize_fundingsource = result.changed_rabi_maize_fundingsource;
                        obj.changed_rabi_fodder_crop_area = result.changed_rabi_fodder_crop_area;
                        //  obj.changed_rabi_fodder_fundingsource = result.changed_rabi_fodder_fundingsource;
                        obj.changed_rabi_paddy_crop_area = result.changed_rabi_paddy_crop_area;
                        //  obj.changed_rabi_paddy_fundingsource = result.changed_rabi_paddy_fundingsource;
                        obj.changed_rabi_alfalfa_crop_area = result.changed_rabi_alfalfa_crop_area;
                        //obj.changed_rabi_alfalfa_fundingsource = result.changed_rabi_alfalfa_fundingsource;
                        //obj.changed_rabi_onion_crop_area = result.changed_rabi_onion_crop_area;
                        //obj.changed_rabi_onion_fundingsource = result.changed_rabi_onion_fundingsource;
                        obj.changed_rabi_horticulture_crop_area = result.changed_rabi_horticulture_crop_area;
                        // obj.changed_rabi_horticulture_fundingsource = result.changed_rabi_horticulture_fundingsource;
                        obj.changed_rabi_sunflower_crop_area = result.changed_rabi_sunflower_crop_area;
                        // obj.changed_rabi_sunflower_fundingsource = result.changed_rabi_sunflower_fundingsource;
                        obj.changed_summer_sericulture_crop_area = result.changed_summer_sericulture_crop_area;
                        // obj.changed_summer_sericulture_fundingsource = result.changed_summer_sericulture_fundingsource;
                        obj.changed_summer_tomoto_crop_area = result.changed_summer_tomoto_crop_area;
                        //  obj.changed_summer_tomoto_fundingsource = result.changed_summer_tomoto_fundingsource;
                        //obj.changed_summer_cabbage_crop_area = result.changed_summer_cabbage_crop_area;
                        //obj.changed_summer_cabbage_fundingsource = result.changed_summer_cabbage_fundingsource;
                        //obj.changed_summer_beans_crop_area = result.changed_summer_beans_crop_area;
                        //obj.changed_summer_beans_fundingsource = result.changed_summer_beans_fundingsource;
                        obj.changed_summer_floriculture_crop_area = result.changed_summer_floriculture_crop_area;
                        //  obj.changed_summer_floriculture_fundingsource = result.changed_summer_floriculture_fundingsource;
                        obj.changed_summer_maize_crop_area = result.changed_summer_maize_crop_area;
                        //  obj.changed_summer_maize_fundingsource = result.changed_summer_maize_fundingsource;
                        obj.changed_summer_fodder_crop_area = result.changed_summer_fodder_crop_area;
                        //  obj.changed_summer_fodder_fundingsource = result.changed_summer_fodder_fundingsource;
                        obj.changed_summer_sugarcane_crop_area = result.changed_summer_sugarcane_crop_area;
                        //obj.changed_summer_sugarcane_fundingsource = result.changed_summer_sugarcane_fundingsource;

                        obj.original_kharif_paddy_crop_area = result.original_kharif_paddy_crop_area;
                        //  obj.original_kharif_paddy_fundingsource = result.original_kharif_paddy_fundingsource;
                        obj.original_kharif_ragi_crop_area = result.original_kharif_ragi_crop_area;
                        //  obj.original_kharif_ragi_fundingsource = result.original_kharif_ragi_fundingsource;
                        obj.original_kharif_groundnut_crop_area = result.original_kharif_groundnut_crop_area;
                        //obj.original_kharif_groundnut_fundingsource = result.original_kharif_groundnut_fundingsource;
                        obj.original_kharif_sugarcane_crop_area = result.original_kharif_sugarcane_crop_area;
                        // obj.original_kharif_sugarcane_fundingsource = result.original_kharif_sugarcane_fundingsource;
                        obj.original_kharif_tomoto_crop_area = result.original_kharif_tomoto_crop_area;
                        // obj.original_kharif_tomoto_fundingsource = result.original_kharif_tomoto_fundingsource;
                        //obj.original_kharif_cabbage_crop_area = result.original_kharif_cabbage_crop_area;
                        //obj.original_kharif_cabbage_fundingsource = result.original_kharif_cabbage_fundingsource;
                        //obj.original_kharif_beans_crop_area = result.original_kharif_beans_crop_area;
                        //obj.original_kharif_beans_fundingsource = result.original_kharif_beans_fundingsource;
                        obj.original_kharif_floriculture_crop_area = result.original_kharif_floriculture_crop_area;
                        //  obj.original_kharif_floriculture_fundingsource = result.original_kharif_floriculture_fundingsource;
                        obj.original_kharif_sericulture_crop_area = result.original_kharif_sericulture_crop_area;
                        //  obj.original_kharif_sericulture_fundingsource = result.original_kharif_sericulture_fundingsource;
                        //obj.original_kharif_cucumber_crop_area = result.original_kharif_cucumber_crop_area;
                        //obj.original_kharif_cucumber_fundingsource = result.original_kharif_cucumber_fundingsource;
                        obj.original_kharif_banana_crop_area = result.original_kharif_banana_crop_area;
                        //  obj.original_kharif_banana_fundingsource = result.original_kharif_banana_fundingsource;
                        obj.original_kharif_fodder_crop_area = result.original_kharif_fodder_crop_area;
                        //obj.original_kharif_fodder_fundingsource = result.original_kharif_fodder_fundingsource;
                        obj.original_kharif_maize_crop_area = result.original_kharif_maize_crop_area;
                        // obj.original_kharif_maize_fundingsource = result.original_kharif_maize_fundingsource;
                        //obj.original_kharif_potato_crop_area = result.original_kharif_potato_crop_area;
                        //obj.original_kharif_potato_fundingsource = result.original_kharif_potato_fundingsource;
                        obj.original_kharif_chillies_crop_area = result.original_kharif_chillies_crop_area;
                        // obj.original_kharif_chillies_fundingsource = result.original_kharif_chillies_fundingsource;
                        obj.original_kharif_cotton_crop_area = result.original_kharif_cotton_crop_area;
                        // obj.original_kharif_cotton_fundingsource = result.original_kharif_cotton_fundingsource;
                        obj.original_kharif_melon_crop_area = result.original_kharif_melon_crop_area;
                        // obj.original_kharif_melon_fundingsource = result.original_kharif_melon_fundingsource;
                        obj.original_kharif_citrus_crop_area = result.original_kharif_citrus_crop_area;
                        // obj.original_kharif_citrus_fundingsource = result.original_kharif_citrus_fundingsource;
                        //obj.original_kharif_peanut_crop_area = result.original_kharif_peanut_crop_area;
                        //obj.original_kharif_peanut_fundingsource = result.original_kharif_peanut_fundingsource;
                        obj.original_kharif_horticulture_crop_area = result.original_kharif_horticulture_crop_area;
                        //  obj.original_kharif_horticulture_fundingsource = result.original_kharif_horticulture_fundingsource;
                        obj.original_rabi_sericulture_crop_area = result.original_rabi_sericulture_crop_area;
                        //obj.original_rabi_sericulture_fundingsource = result.original_rabi_sericulture_fundingsource;
                        obj.original_rabi_tomoto_crop_area = result.original_rabi_tomoto_crop_area;
                        // obj.original_rabi_tomoto_fundingsource = result.original_rabi_tomoto_fundingsource;
                        //obj.original_rabi_cabbage_crop_area = result.original_rabi_cabbage_crop_area;
                        //obj.original_rabi_cabbage_fundingsource = result.original_rabi_cabbage_fundingsource;
                        //obj.original_rabi_beans_crop_area = result.original_rabi_beans_crop_area;
                        //obj.original_rabi_beans_fundingsource = result.original_rabi_beans_fundingsource;
                        obj.original_rabi_floriculture_crop_area = result.original_rabi_floriculture_crop_area;
                        //  obj.original_rabi_floriculture_fundingsource = result.original_rabi_floriculture_fundingsource;
                        //obj.original_rabi_potato_crop_area = result.original_rabi_potato_crop_area;
                        //obj.original_rabi_potato_fundingsource = result.original_rabi_potato_fundingsource;
                        //obj.original_rabi_cucumber_crop_area = result.original_rabi_cucumber_crop_area;
                        //obj.original_rabi_cucumber_fundingsource = result.original_rabi_cucumber_fundingsource;
                        obj.original_rabi_ragi_crop_area = result.original_rabi_ragi_crop_area;
                        //obj.original_rabi_ragi_fundingsource = result.original_rabi_ragi_fundingsource;
                        obj.original_rabi_sugarcane_crop_area = result.original_rabi_sugarcane_crop_area;
                        // obj.original_rabi_sugarcane_fundingsource = result.original_rabi_sugarcane_fundingsource;
                        obj.original_rabi_maize_crop_area = result.original_rabi_maize_crop_area;
                        //  obj.original_rabi_maize_fundingsource = result.original_rabi_maize_fundingsource;
                        obj.original_rabi_fodder_crop_area = result.original_rabi_fodder_crop_area;
                        //obj.original_rabi_fodder_fundingsource = result.original_rabi_fodder_fundingsource;
                        obj.original_rabi_paddy_crop_area = result.original_rabi_paddy_crop_area;
                        // obj.original_rabi_paddy_fundingsource = result.original_rabi_paddy_fundingsource;
                        obj.original_rabi_alfalfa_crop_area = result.original_rabi_alfalfa_crop_area;
                        //   obj.original_rabi_alfalfa_fundingsource = result.original_rabi_alfalfa_fundingsource;
                        //obj.original_rabi_onion_crop_area = result.original_rabi_onion_crop_area;
                        //obj.original_rabi_onion_fundingsource = result.original_rabi_onion_fundingsource;
                        obj.original_rabi_horticulture_crop_area = result.original_rabi_horticulture_crop_area;
                        // obj.original_rabi_horticulture_fundingsource = result.original_rabi_horticulture_fundingsource;
                        obj.original_rabi_sunflower_crop_area = result.original_rabi_sunflower_crop_area;
                        // obj.original_rabi_sunflower_fundingsource = result.original_rabi_sunflower_fundingsource;
                        obj.original_summer_sericulture_crop_area = result.original_summer_sericulture_crop_area;
                        //  obj.original_summer_sericulture_fundingsource = result.original_summer_sericulture_fundingsource;
                        //  obj.original_summer_tomoto_crop_area = result.original_summer_tomoto_crop_area;
                        obj.original_summer_tomoto_fundingsource = result.original_summer_tomoto_fundingsource;
                        //obj.original_summer_cabbage_crop_area = result.original_summer_cabbage_crop_area;
                        //obj.original_summer_cabbage_fundingsource = result.original_summer_cabbage_fundingsource;
                        //obj.original_summer_beans_crop_area = result.original_summer_beans_crop_area;
                        //obj.original_summer_beans_fundingsource = result.original_summer_beans_fundingsource;
                        obj.original_summer_floriculture_crop_area = result.original_summer_floriculture_crop_area;
                        //  obj.original_summer_floriculture_fundingsource = result.original_summer_floriculture_fundingsource;
                        obj.original_summer_maize_crop_area = result.original_summer_maize_crop_area;
                        //obj.original_summer_maize_fundingsource = result.original_summer_maize_fundingsource;
                        obj.original_summer_fodder_crop_area = result.original_summer_fodder_crop_area;
                        // obj.original_summer_fodder_fundingsource = result.original_summer_fodder_fundingsource;
                        obj.original_summer_sugarcane_crop_area = result.original_summer_sugarcane_crop_area;
                        //                        obj.original_summer_sugarcane_fundingsource = result.original_summer_sugarcane_fundingsource;

                        obj.original_kharif_paddy_waterdemand = result.original_kharif_paddy_waterdemand;
                        obj.original_kharif_ragi_waterdemand = result.original_kharif_ragi_waterdemand;
                        obj.original_kharif_groundnut_waterdemand = result.original_kharif_groundnut_waterdemand;
                        obj.original_kharif_sugarcane_waterdemand = result.original_kharif_sugarcane_waterdemand;

                        obj.original_kharif_tomoto_waterdemand = result.original_kharif_tomoto_waterdemand;
                        //obj.original_kharif_cabbage_waterdemand = result.original_kharif_cabbage_waterdemand;
                        //obj.original_kharif_beans_waterdemand = result.original_kharif_beans_waterdemand;
                        obj.original_kharif_floriculture_waterdemand = result.original_kharif_floriculture_waterdemand;

                        obj.original_kharif_sericulture_waterdemand = result.original_kharif_sericulture_waterdemand;
                        //obj.original_kharif_cucumber_waterdemand = result.original_kharif_cucumber_waterdemand;
                        obj.original_kharif_banana_waterdemand = result.original_kharif_banana_waterdemand;
                        obj.original_kharif_fodder_waterdemand = result.original_kharif_fodder_waterdemand;

                        obj.original_kharif_maize_waterdemand = result.original_kharif_maize_waterdemand;
                        //obj.original_kharif_potato_waterdemand = result.original_kharif_potato_waterdemand;
                        obj.original_kharif_chillies_waterdemand = result.original_kharif_chillies_waterdemand;
                        obj.original_kharif_cotton_waterdemand = result.original_kharif_cotton_waterdemand;

                        obj.original_kharif_melon_waterdemand = result.original_kharif_melon_waterdemand;
                        obj.original_kharif_citrus_waterdemand = result.original_kharif_citrus_waterdemand;
                        // obj.original_kharif_peanut_waterdemand = result.original_kharif_peanut_waterdemand;
                        obj.original_kharif_horticulture_waterdemand = result.original_kharif_horticulture_waterdemand;

                        //original rabi water demand
                        obj.original_rabi_sericulture_waterdemand = result.original_rabi_sericulture_waterdemand;
                        obj.original_rabi_tomoto_waterdemand = result.original_rabi_tomoto_waterdemand;
                        // obj.original_rabi_cabbage_waterdemand = result.original_rabi_cabbage_waterdemand;
                        // obj.original_rabi_beans_waterdemand = result.original_rabi_beans_waterdemand;

                        obj.original_rabi_floriculture_waterdemand = result.original_rabi_floriculture_waterdemand;
                        // obj.original_rabi_potato_waterdemand = result.original_rabi_potato_waterdemand;
                        // obj.original_rabi_cucumber_waterdemand = result.original_rabi_cucumber_waterdemand;
                        obj.original_rabi_ragi_waterdemand = result.original_rabi_ragi_waterdemand;

                        obj.original_rabi_sugarcane_waterdemand = result.original_rabi_sugarcane_waterdemand;
                        obj.original_rabi_maize_waterdemand = result.original_rabi_maize_waterdemand;
                        obj.original_rabi_fodder_waterdemand = result.original_rabi_fodder_waterdemand;
                        obj.original_rabi_paddy_waterdemand = result.original_rabi_paddy_waterdemand;

                        obj.original_rabi_alfalfa_waterdemand = result.original_rabi_alfalfa_waterdemand;
                        //obj.original_rabi_onion_waterdemand = result.original_rabi_onion_waterdemand;
                        obj.original_rabi_horticulture_waterdemand = result.original_rabi_horticulture_waterdemand;
                        obj.original_rabi_sunflower_waterdemand = result.original_rabi_sunflower_waterdemand;

                        //summer
                        obj.original_summer_sericulture_waterdemand = result.original_summer_sericulture_waterdemand;
                        obj.original_summer_tomoto_waterdemand = result.original_summer_tomoto_waterdemand;
                        //obj.original_summer_cabbage_waterdemand = result.original_summer_cabbage_waterdemand;
                        //obj.original_summer_beans_waterdemand = result.original_summer_beans_waterdemand;

                        obj.original_summer_floriculture_waterdemand = result.original_summer_floriculture_waterdemand;
                        obj.original_summer_maize_waterdemand = result.original_summer_maize_waterdemand;
                        obj.original_summer_fodder_waterdemand = result.original_summer_fodder_waterdemand;
                        obj.original_summer_sugarcane_waterdemand = result.original_summer_sugarcane_waterdemand;

                        //changed water demand
                        //other karif water demand
                        obj.changed_kharif_paddy_waterdemand = result.changed_kharif_paddy_waterdemand;
                        obj.changed_kharif_ragi_waterdemand = result.changed_kharif_ragi_waterdemand;
                        obj.changed_kharif_groundnut_waterdemand = result.changed_kharif_groundnut_waterdemand;
                        obj.changed_kharif_sugarcane_waterdemand = result.changed_kharif_sugarcane_waterdemand;

                        obj.changed_kharif_tomoto_waterdemand = result.changed_kharif_tomoto_waterdemand;
                        // obj.changed_kharif_cabbage_waterdemand = result.changed_kharif_cabbage_waterdemand;
                        // obj.changed_kharif_beans_waterdemand = result.changed_kharif_beans_waterdemand;
                        obj.changed_kharif_floriculture_waterdemand = result.changed_kharif_floriculture_waterdemand;

                        obj.changed_kharif_sericulture_waterdemand = result.changed_kharif_sericulture_waterdemand;
                        // obj.changed_kharif_cucumber_waterdemand = result.changed_kharif_cucumber_waterdemand;
                        obj.changed_kharif_banana_waterdemand = result.changed_kharif_banana_waterdemand;
                        obj.changed_kharif_fodder_waterdemand = result.changed_kharif_fodder_waterdemand;

                        obj.changed_kharif_maize_waterdemand = result.changed_kharif_maize_waterdemand;
                        // obj.changed_kharif_potato_waterdemand = result.changed_kharif_potato_waterdemand;
                        obj.changed_kharif_chillies_waterdemand = result.changed_kharif_chillies_waterdemand;
                        obj.changed_kharif_cotton_waterdemand = result.changed_kharif_cotton_waterdemand;

                        obj.changed_kharif_melon_waterdemand = result.changed_kharif_melon_waterdemand;
                        obj.changed_kharif_citrus_waterdemand = result.changed_kharif_citrus_waterdemand;
                        // obj.changed_kharif_peanut_waterdemand = result.changed_kharif_peanut_waterdemand;
                        obj.changed_kharif_horticulture_waterdemand = result.changed_kharif_horticulture_waterdemand;

                        //original rabi water demand
                        obj.changed_rabi_sericulture_waterdemand = result.changed_rabi_sericulture_waterdemand;
                        obj.changed_rabi_tomoto_waterdemand = result.changed_rabi_tomoto_waterdemand;
                        // obj.changed_rabi_cabbage_waterdemand = result.changed_rabi_cabbage_waterdemand;
                        // obj.changed_rabi_beans_waterdemand = result.changed_rabi_beans_waterdemand;

                        obj.changed_rabi_floriculture_waterdemand = result.changed_rabi_floriculture_waterdemand;
                        // obj.changed_rabi_potato_waterdemand = result.changed_rabi_potato_waterdemand;
                        // obj.changed_rabi_cucumber_waterdemand = result.changed_rabi_cucumber_waterdemand;
                        obj.changed_rabi_ragi_waterdemand = result.changed_rabi_ragi_waterdemand;

                        obj.changed_rabi_sugarcane_waterdemand = result.changed_rabi_sugarcane_waterdemand;
                        obj.changed_rabi_maize_waterdemand = result.changed_rabi_maize_waterdemand;
                        obj.changed_rabi_fodder_waterdemand = result.changed_rabi_fodder_waterdemand;
                        obj.changed_rabi_paddy_waterdemand = result.changed_rabi_paddy_waterdemand;

                        obj.changed_rabi_alfalfa_waterdemand = result.changed_rabi_alfalfa_waterdemand;
                        // obj.changed_rabi_onion_waterdemand = result.changed_rabi_onion_waterdemand;
                        obj.changed_rabi_horticulture_waterdemand = result.changed_rabi_horticulture_waterdemand;
                        obj.changed_rabi_sunflower_waterdemand = result.changed_rabi_sunflower_waterdemand;

                        //summer
                        obj.changed_summer_sericulture_waterdemand = result.changed_summer_sericulture_waterdemand;
                        // obj.changed_summer_tomoto_waterdemand = result.changed_summer_tomoto_waterdemand;
                        // obj.changed_summer_cabbage_waterdemand = result.changed_summer_cabbage_waterdemand;
                        obj.changed_summer_beans_waterdemand = result.changed_summer_beans_waterdemand;

                        obj.changed_summer_floriculture_waterdemand = result.changed_summer_floriculture_waterdemand;
                        obj.changed_summer_maize_waterdemand = result.changed_summer_maize_waterdemand;
                        obj.changed_summer_fodder_waterdemand = result.changed_summer_fodder_waterdemand;
                        obj.changed_summer_sugarcane_waterdemand = result.changed_summer_sugarcane_waterdemand;


                        obj.latitude = result.latitude;
                        obj.longitude = result.longitude;

                        //obj.userid

                        //for the both changed and original sidepanel id are same
                        //changed
                        //obj.crop_diversion_kharif_water_demand = result.crop_diversion_kharif_water_demand;
                        //obj.crop_diversion_rabi_water_demand = result.crop_diversion_rabi_water_demand;
                        //obj.crop_diversion_summer_crop_water_demand = result.crop_diversion_summer_crop_water_demand;
                        ////original
                        //obj.crop_diversion_kharif_water_demand2 = result.crop_diversion_kharif_water_demand2;
                        //obj.crop_diversion_rabi_water_demand2 = result.crop_diversion_rabi_water_demand2;
                        //obj.crop_diversion_summer_crop_water_demand2 = result.crop_diversion_summer_crop_water_demand2;

                        //new columns of water requirement
                        //new columns water requirement
                        //original water req
                        obj.original_kharif_paddy_water_req = result.original_kharif_paddy_water_req;
                        obj.original_kharif_ragi_water_req = result.original_kharif_ragi_water_req;
                        obj.original_kharif_groundnut_water_req = result.original_kharif_groundnut_water_req;
                        obj.original_kharif_sugarcane_water_req = result.original_kharif_sugarcane_water_req;
                        obj.original_kharif_tomoto_water_req = result.original_kharif_tomoto_water_req;
                        // obj.original_kharif_cabbage_water_req = result.original_kharif_cabbage_water_req;
                        // obj.original_kharif_beans_water_req = result.original_kharif_beans_water_req;
                        obj.original_kharif_floriculture_water_req = result.original_kharif_floriculture_water_req;
                        obj.original_kharif_sericulture_water_req = result.original_kharif_sericulture_water_req;
                        // obj.original_kharif_cucumber_water_req = result.original_kharif_cucumber_water_req;
                        obj.original_kharif_banana_water_req = result.original_kharif_banana_water_req;
                        obj.original_kharif_fodder_water_req = result.original_kharif_fodder_water_req;
                        obj.original_kharif_maize_water_req = result.original_kharif_maize_water_req;
                        //  obj.original_kharif_potato_water_req = result.original_kharif_potato_water_req;
                        obj.original_kharif_chillies_water_req = result.original_kharif_chillies_water_req;
                        obj.original_kharif_cotton_water_req = result.original_kharif_cotton_water_req;
                        obj.original_kharif_melon_water_req = result.original_kharif_melon_water_req;
                        obj.original_kharif_citrus_water_req = result.original_kharif_citrus_water_req;
                        // obj.original_kharif_peanut_water_req = result.original_kharif_peanut_water_req;
                        obj.original_kharif_horticulture_water_req = result.original_kharif_horticulture_water_req;
                        //obj.original_summer_sugarcane_irri_area = result.original_summer_sugarcane_irri_area;

                        obj.original_rabi_sericulture_water_req = result.original_rabi_sericulture_water_req;
                        obj.original_rabi_tomoto_water_req = result.original_rabi_tomoto_water_req;
                        // obj.original_rabi_cabbage_water_req = result.original_rabi_cabbage_water_req;
                        // obj.original_rabi_beans_water_req = result.original_rabi_beans_water_req;
                        obj.original_rabi_floriculture_water_req = result.original_rabi_floriculture_water_req;
                        // obj.original_rabi_potato_water_req = result.original_rabi_potato_water_req;
                        // obj.original_rabi_cucumber_water_req = result.original_rabi_cucumber_water_req;
                        obj.original_rabi_ragi_water_req = result.original_rabi_ragi_water_req;
                        obj.original_rabi_sugarcane_water_req = result.original_rabi_sugarcane_water_req;
                        obj.original_rabi_maize_water_req = result.original_rabi_maize_water_req;
                        obj.original_rabi_fodder_water_req = result.original_rabi_fodder_water_req;
                        obj.original_rabi_paddy_water_req = result.original_rabi_paddy_water_req;
                        obj.original_rabi_alfalfa_water_req = result.original_rabi_alfalfa_water_req;
                        // obj.original_rabi_onion_water_req = result.original_rabi_onion_water_req;
                        obj.original_rabi_horticulture_water_req = result.original_rabi_horticulture_water_req;
                        obj.original_rabi_sunflower_water_req = result.original_rabi_sunflower_water_req;

                        obj.original_summer_sericulture_water_req = result.original_summer_sericulture_water_req;
                        obj.original_summer_tomoto_water_req = result.original_summer_tomoto_water_req;
                        // obj.original_summer_cabbage_water_req = result.original_summer_cabbage_water_req;
                        // obj.original_summer_beans_water_req = result.original_summer_beans_water_req;
                        obj.original_summer_floriculture_water_req = result.original_summer_floriculture_water_req;
                        obj.original_summer_maize_water_req = result.original_summer_maize_water_req;
                        obj.original_summer_fodder_water_req = result.original_summer_fodder_water_req;
                        obj.original_summer_sugarcane_water_req = result.original_summer_sugarcane_water_req;

                        //changed water requirement
                        obj.changed_kharif_paddy_crop_water_req = result.changed_kharif_paddy_crop_water_req;
                        obj.changed_kharif_ragi_crop_water_req = result.changed_kharif_ragi_crop_water_req;
                        obj.changed_kharif_groundnut_water_req = result.changed_kharif_groundnut_water_req;
                        obj.changed_kharif_sugarcane_water_req = result.changed_kharif_sugarcane_water_req;
                        obj.changed_kharif_tomoto_water_req = result.changed_kharif_tomoto_water_req;
                        //obj.changed_kharif_cabbage_water_req = result.changed_kharif_cabbage_water_req;
                        //obj.changed_kharif_beans_water_req = result.changed_kharif_beans_water_req;
                        obj.changed_kharif_floriculture_water_req = result.changed_kharif_floriculture_water_req;
                        obj.changed_kharif_sericulture_water_req = result.changed_kharif_sericulture_water_req;
                        //obj.changed_kharif_cucumber_water_req = result.changed_kharif_cucumber_water_req;
                        obj.changed_kharif_banana_water_req = result.changed_kharif_banana_water_req;
                        obj.changed_kharif_fodder_water_req = result.changed_kharif_fodder_water_req;
                        obj.changed_kharif_maize_water_req = result.changed_kharif_maize_water_req;
                        //obj.changed_kharif_potato_water_req = result.changed_kharif_potato_water_req;
                        obj.changed_kharif_chillies_water_req = result.changed_kharif_chillies_water_req;
                        obj.changed_kharif_cotton_water_req = result.changed_kharif_cotton_water_req;
                        obj.changed_kharif_melon_water_req = result.changed_kharif_melon_water_req;
                        obj.changed_kharif_citrus_water_req = result.changed_kharif_citrus_water_req;
                        // obj.changed_kharif_peanut_water_req = result.changed_kharif_peanut_water_req;
                        obj.changed_kharif_horticulture_water_req = result.changed_kharif_horticulture_water_req;
                        //obj.changed_summer_sugarcane_irri_area = result.changed_summer_sugarcane_irri_area; 

                        obj.changed_rabi_sericulture_water_req = result.changed_rabi_sericulture_water_req;
                        obj.changed_rabi_tomoto_water_req = result.changed_rabi_tomoto_water_req;
                        // obj.changed_rabi_cabbage_water_req = result.changed_rabi_cabbage_water_req;
                        //obj.changed_rabi_beans_water_req = result.changed_rabi_beans_water_req;
                        obj.changed_rabi_floriculture_water_req = result.changed_rabi_floriculture_water_req;
                        // obj.changed_rabi_potato_water_req = result.changed_rabi_potato_water_req;
                        // obj.changed_rabi_cucumber_water_req = result.changed_rabi_cucumber_water_req;
                        obj.changed_rabi_ragi_water_req = result.changed_rabi_ragi_water_req;
                        obj.changed_rabi_sugarcane_water_req = result.changed_rabi_sugarcane_water_req;
                        obj.changed_rabi_maize_water_req = result.changed_rabi_maize_water_req;
                        obj.changed_rabi_fodder_water_req = result.changed_rabi_fodder_water_req;
                        obj.changed_rabi_paddy_water_req = result.changed_rabi_paddy_water_req;
                        obj.changed_rabi_alfalfa_water_req = result.changed_rabi_alfalfa_water_req;
                        // obj.changed_rabi_onion_water_req = result.changed_rabi_onion_water_req;
                        obj.changed_rabi_horticulture_water_req = result.changed_rabi_horticulture_water_req;
                        obj.changed_rabi_sunflower_water_req = result.changed_rabi_sunflower_water_req;

                        obj.changed_summer_sericulture_water_req = result.changed_summer_sericulture_water_req;
                        obj.changed_summer_tomoto_water_req = result.changed_summer_tomoto_water_req;
                        // obj.changed_summer_cabbage_water_req = result.changed_summer_cabbage_water_req;
                        // obj.changed_summer_beans_water_req = result.changed_summer_beans_water_req;
                        obj.changed_summer_floriculture_water_req = result.changed_summer_floriculture_water_req;
                        obj.changed_summer_maize_water_req = result.changed_summer_maize_water_req;
                        obj.changed_summer_fodder_water_req = result.changed_summer_fodder_water_req;
                        obj.changed_summer_sugarcane_water_req = result.changed_summer_sugarcane_water_req;


                        //totals
                        obj.original_kharif_total_waterdemand = result.original_kharif_total_waterdemand;
                        obj.original_rabi_total_waterdemand = result.original_rabi_total_waterdemand;
                        obj.original_summer_total_waterdemand = result.original_summer_total_waterdemand;

                        obj.changed_kharif_total_waterdemand = result.changed_kharif_total_waterdemand;
                        obj.changed_kharif_total_gw_reduc_waterdemand = result.changed_kharif_total_gw_reduc_waterdemand;
                        obj.changed_rabi_total_waterdemand = result.changed_rabi_total_waterdemand;
                        obj.changed_rabi_total_gw_reduc_waterdemand = result.changed_rabi_total_gw_reduc_waterdemand;
                        obj.changed_summer_total_waterdemand = result.changed_summer_total_waterdemand;
                        obj.changed_summer_total_gw_reduc_waterdemand = result.changed_summer_total_gw_reduc_waterdemand;
                        obj.crop_total_annual_waterdemand = result.crop_total_annual_waterdemand;

                        obj.crop_other_funding_source = result.crop_other_funding_source;
                        //other crops
                        //obj.original_kharif_othercrop_name = result.original_kharif_othercrop_name;
                        //obj.original_kharif_othercrop_area = result.original_kharif_othercrop_area;
                        //obj.original_kharif_othercrop_water_req = result.original_kharif_othercrop_water_req;
                        //obj.original_kharif_othercrop_waterdemand = result.original_kharif_othercrop_waterdemand;

                        //obj.original_rabi_othercrop_name = result.original_rabi_othercrop_name;
                        //obj.original_rabi_othercrop_area = result.original_rabi_othercrop_area;
                        //obj.original_rabi_othercrop_water_req = result.original_rabi_othercrop_water_req;
                        //obj.original_rabi_othercrop_waterdemand = result.original_rabi_othercrop_waterdemand;

                        //obj.original_summer_othercrop_name = result.original_summer_othercrop_name;
                        //obj.original_summer_othercrop_area = result.original_summer_othercrop_area;
                        //obj.original_summer_othercrop_water_req = result.original_summer_othercrop_water_req;
                        //obj.original_summer_othercrop_waterdemand = result.original_summer_othercrop_waterdemand;

                        //obj.changed_kharif_othercrop_name = result.changed_kharif_othercrop_name;
                        //obj.changed_kharif_othercrop_area = result.changed_kharif_othercrop_area;
                        //obj.changed_kharif_othercrop_water_req = result.changed_kharif_othercrop_water_req;
                        //obj.changed_kharif_othercrop_waterdemand = result.changed_kharif_othercrop_waterdemand;


                        //obj.changed_rabi_othercrop_name = result.changed_rabi_othercrop_name;
                        //obj.changed_rabi_othercrop_area = result.changed_rabi_othercrop_area;
                        //obj.changed_rabi_othercrop_water_req = result.changed_rabi_othercrop_water_req;
                        //obj.changed_rabi_othercrop_waterdemand = result.changed_rabi_othercrop_waterdemand;

                        //obj.changed_summer_othercrop_name = result.changed_summer_othercrop_name;
                        //obj.changed_summer_othercrop_area = result.changed_summer_othercrop_area;
                        //obj.changed_summer_othercrop_water_req = result.changed_summer_othercrop_water_req;
                        //obj.changed_summer_othercrop_waterdemand = result.changed_summer_othercrop_waterdemand;
                        //reduction values
                        //kharif
                        obj.changed_kharif_paddy_gw_reduc_waterdemand = result.changed_kharif_paddy_gw_reduc_waterdemand;
                        obj.changed_kharif_ragi_gw_reduc_waterdemand = result.changed_kharif_ragi_gw_reduc_waterdemand;
                        obj.changed_kharif_groundnut_gw_reduc_waterdemand = result.changed_kharif_groundnut_gw_reduc_waterdemand;
                        obj.changed_kharif_sugarcane_gw_reduc_waterdemand = result.changed_kharif_sugarcane_gw_reduc_waterdemand;

                        obj.changed_kharif_tomoto_gw_reduc_waterdemand = result.changed_kharif_tomoto_gw_reduc_waterdemand;
                        // obj.changed_kharif_cabbage_gw_reduc_waterdemand = result.changed_kharif_cabbage_gw_reduc_waterdemand;
                        // obj.changed_kharif_beans_gw_reduc_waterdemand = result.changed_kharif_beans_gw_reduc_waterdemand;
                        obj.changed_kharif_floriculture_gw_reduc_waterdemand = result.changed_kharif_floriculture_gw_reduc_waterdemand;

                        obj.changed_kharif_sericulture_gw_reduc_waterdemand = result.changed_kharif_sericulture_gw_reduc_waterdemand;
                        // obj.changed_kharif_cucumber_gw_reduc_waterdemand = result.changed_kharif_cucumber_gw_reduc_waterdemand;
                        obj.changed_kharif_banana_gw_reduc_waterdemand = result.changed_kharif_banana_gw_reduc_waterdemand;
                        obj.changed_kharif_fodder_gw_reduc_waterdemand = result.changed_kharif_fodder_gw_reduc_waterdemand;

                        obj.changed_kharif_maize_gw_reduc_waterdemand = result.changed_kharif_maize_gw_reduc_waterdemand;
                        // obj.changed_kharif_potato_gw_reduc_waterdemand = result.changed_kharif_potato_gw_reduc_waterdemand;
                        obj.changed_kharif_chillies_gw_reduc_waterdemand = result.changed_kharif_chillies_gw_reduc_waterdemand;
                        obj.changed_kharif_cotton_gw_reduc_waterdemand = result.changed_kharif_cotton_gw_reduc_waterdemand;

                        obj.changed_kharif_melon_gw_reduc_waterdemand = result.changed_kharif_melon_gw_reduc_waterdemand;
                        obj.changed_kharif_citrus_gw_reduc_waterdemand = result.changed_kharif_citrus_gw_reduc_waterdemand;
                        // obj.changed_kharif_peanut_gw_reduc_waterdemand = result.changed_kharif_peanut_gw_reduc_waterdemand;
                        obj.changed_kharif_horticulture_gw_reduc_waterdemand = result.changed_kharif_horticulture_gw_reduc_waterdemand;

                        //rabi
                        obj.changed_rabi_sericulture_gw_reduc_waterdemand = result.changed_rabi_sericulture_gw_reduc_waterdemand;
                        obj.changed_rabi_tomoto_gw_reduc_waterdemand = result.changed_rabi_tomoto_gw_reduc_waterdemand;
                        // obj.changed_rabi_cabbage_gw_reduc_waterdemand = result.changed_rabi_cabbage_gw_reduc_waterdemand;
                        // obj.changed_rabi_beans_gw_reduc_waterdemand = result.changed_rabi_beans_gw_reduc_waterdemand;

                        obj.changed_rabi_floriculture_gw_reduc_waterdemand = result.changed_rabi_floriculture_gw_reduc_waterdemand;
                        // obj.changed_rabi_potato_gw_reduc_waterdemand = result.changed_rabi_potato_gw_reduc_waterdemand;
                        // obj.changed_rabi_cucumber_gw_reduc_waterdemand = result.changed_rabi_cucumber_gw_reduc_waterdemand;
                        obj.changed_rabi_ragi_gw_reduc_waterdemand = result.changed_rabi_ragi_gw_reduc_waterdemand;

                        obj.changed_rabi_sugarcane_gw_reduc_waterdemand = result.changed_rabi_sugarcane_gw_reduc_waterdemand;
                        obj.changed_rabi_maize_gw_reduc_waterdemand = result.changed_rabi_maize_gw_reduc_waterdemand;
                        obj.changed_rabi_fodder_gw_reduc_waterdemand = result.changed_rabi_fodder_gw_reduc_waterdemand;
                        obj.changed_rabi_paddy_gw_reduc_waterdemand = result.changed_rabi_paddy_gw_reduc_waterdemand;

                        obj.changed_rabi_alfalfa_gw_reduc_waterdemand = result.changed_rabi_alfalfa_gw_reduc_waterdemand;
                        // obj.changed_rabi_onion_gw_reduc_waterdemand = result.changed_rabi_onion_gw_reduc_waterdemand;
                        obj.changed_rabi_horticulture_gw_reduc_waterdemand = result.changed_rabi_horticulture_gw_reduc_waterdemand;
                        obj.changed_rabi_sunflower_gw_reduc_waterdemand = result.changed_rabi_sunflower_gw_reduc_waterdemand;

                        //summer
                        obj.changed_summer_sericulture_gw_reduc_waterdemand = result.changed_summer_sericulture_gw_reduc_waterdemand;
                        obj.changed_summer_tomoto_gw_reduc_waterdemand = result.changed_summer_tomoto_gw_reduc_waterdemand;
                        // obj.changed_summer_cabbage_gw_reduc_waterdemand = result.changed_summer_cabbage_gw_reduc_waterdemand;
                        // obj.changed_summer_beans_gw_reduc_waterdemand = result.changed_summer_beans_gw_reduc_waterdemand;

                        obj.changed_summer_floriculture_gw_reduc_waterdemand = result.changed_summer_floriculture_gw_reduc_waterdemand;
                        obj.changed_summer_maize_gw_reduc_waterdemand = result.changed_summer_maize_gw_reduc_waterdemand;
                        obj.changed_summer_fodder_gw_reduc_waterdemand = result.changed_summer_fodder_gw_reduc_waterdemand;
                        obj.changed_summer_sugarcane_gw_reduc_waterdemand = result.changed_summer_sugarcane_gw_reduc_waterdemand;

                        //horiculture
                        obj.original_summer_horticulture_crop_area = result.original_summer_horticulture_crop_area;
                        obj.original_summer_horticulture_water_req = result.original_summer_horticulture_water_req;
                        obj.original_summer_horticulture_waterdemand = result.original_summer_horticulture_waterdemand;
                        obj.changed_summer_horticulture_crop_area = result.changed_summer_horticulture_crop_area;
                        obj.changed_summer_horticulture_water_req = result.changed_summer_horticulture_water_req;
                        obj.changed_summer_horticulture_waterdemand = result.changed_summer_horticulture_waterdemand;
                        obj.changed_summer_horticulture_reduction_gw_demand = result.changed_summer_horticulture_reduction_gw_demand;

                        //other crops 5boxes original and changed
                        obj.original_kharif_othercrop_name1 = result.original_kharif_othercrop_name1;
                        obj.original_kharif_othercrop_area1 = result.original_kharif_othercrop_area1;
                        obj.original_kharif_horticulture_water_req1 = result.original_kharif_horticulture_water_req1;
                        obj.original_kharif_horticulture_waterdemand1 = result.original_kharif_horticulture_waterdemand1;

                        obj.original_kharif_othercrop_name2 = result.original_kharif_othercrop_name2;
                        obj.original_kharif_othercrop_area2 = result.original_kharif_othercrop_area2;
                        obj.original_kharif_horticulture_water_req2 = result.original_kharif_horticulture_water_req2;
                        obj.original_kharif_horticulture_waterdemand2 = result.original_kharif_horticulture_waterdemand2;

                        obj.original_kharif_othercrop_name3 = result.original_kharif_othercrop_name3;
                        obj.original_kharif_othercrop_area3 = result.original_kharif_othercrop_area3;
                        obj.original_kharif_horticulture_water_req3 = result.original_kharif_horticulture_water_req3;
                        obj.original_kharif_horticulture_waterdemand3 = result.original_kharif_horticulture_waterdemand3;

                        obj.original_kharif_othercrop_name4 = result.original_kharif_othercrop_name4;
                        obj.original_kharif_othercrop_area4 = result.original_kharif_othercrop_area4;
                        obj.original_kharif_horticulture_water_req4 = result.original_kharif_horticulture_water_req4;
                        obj.original_kharif_horticulture_waterdemand4 = result.original_kharif_horticulture_waterdemand4;

                        obj.original_kharif_othercrop_name5 = result.original_kharif_othercrop_name5;
                        obj.original_kharif_othercrop_area5 = result.original_kharif_othercrop_area5;
                        obj.original_kharif_horticulture_water_req5 = result.original_kharif_horticulture_water_req5;
                        obj.original_kharif_horticulture_waterdemand5 = result.original_kharif_horticulture_waterdemand5;

                        obj.original_rabi_othercrop_name1 = result.original_rabi_othercrop_name1;
                        obj.original_rabi_othercrop_area1 = result.original_rabi_othercrop_area1;
                        obj.original_rabi_horticulture_water_req1 = result.original_rabi_horticulture_water_req1;
                        obj.original_rabi_horticulture_waterdemand1 = result.original_rabi_horticulture_waterdemand1;

                        obj.original_rabi_othercrop_name2 = result.original_rabi_othercrop_name2;
                        obj.original_rabi_othercrop_area2 = result.original_rabi_othercrop_area2;
                        obj.original_rabi_horticulture_water_req2 = result.original_rabi_horticulture_water_req2;
                        obj.original_rabi_horticulture_waterdemand2 = result.original_rabi_horticulture_waterdemand2;

                        obj.original_rabi_othercrop_name3 = result.original_rabi_othercrop_name3;
                        obj.original_rabi_othercrop_area3 = result.original_rabi_othercrop_area3;
                        obj.original_rabi_horticulture_water_req3 = result.original_rabi_horticulture_water_req3;
                        obj.original_rabi_horticulture_waterdemand3 = result.original_rabi_horticulture_waterdemand3;

                        obj.original_rabi_othercrop_name4 = result.original_rabi_othercrop_name4;
                        obj.original_rabi_othercrop_area4 = result.original_rabi_othercrop_area4;
                        obj.original_rabi_horticulture_water_req4 = result.original_rabi_horticulture_water_req4;
                        obj.original_rabi_horticulture_waterdemand4 = result.original_rabi_horticulture_waterdemand4;

                        obj.original_rabi_othercrop_name5 = result.original_rabi_othercrop_name5;
                        obj.original_rabi_othercrop_area5 = result.original_rabi_othercrop_area5;
                        obj.original_rabi_horticulture_water_req5 = result.original_rabi_horticulture_water_req5;
                        obj.original_rabi_horticulture_waterdemand5 = result.original_rabi_horticulture_waterdemand5;

                        obj.original_summer_othercrop_name1 = result.original_summer_othercrop_name1;
                        obj.original_summer_othercrop_area1 = result.original_summer_othercrop_area1;
                        obj.original_summer_horticulture_water_req1 = result.original_summer_horticulture_water_req1;
                        obj.original_summer_horticulture_waterdemand1 = result.original_summer_horticulture_waterdemand1;

                        obj.original_summer_othercrop_name2 = result.original_summer_othercrop_name2;
                        obj.original_summer_othercrop_area2 = result.original_summer_othercrop_area2;
                        obj.original_summer_horticulture_water_req2 = result.original_summer_horticulture_water_req2;
                        obj.original_summer_horticulture_waterdemand2 = result.original_summer_horticulture_waterdemand2;

                        obj.original_summer_othercrop_name3 = result.original_summer_othercrop_name3;
                        obj.original_summer_othercrop_area3 = result.original_summer_othercrop_area3;
                        obj.original_summer_horticulture_water_req3 = result.original_summer_horticulture_water_req3;
                        obj.original_summer_horticulture_waterdemand3 = result.original_summer_horticulture_waterdemand3;


                        obj.original_summer_othercrop_name4 = result.original_summer_othercrop_name4;
                        obj.original_summer_othercrop_area4 = result.original_summer_othercrop_area4;
                        obj.original_summer_horticulture_water_req4 = result.original_summer_horticulture_water_req4;
                        obj.original_summer_horticulture_waterdemand4 = result.original_summer_horticulture_waterdemand4;

                        obj.original_summer_othercrop_name5 = result.original_summer_othercrop_name5;
                        obj.original_summer_othercrop_area5 = result.original_summer_othercrop_area5;
                        obj.original_summer_horticulture_water_req5 = result.original_summer_horticulture_water_req5;
                        obj.original_summer_horticulture_waterdemand5 = result.original_summer_horticulture_waterdemand5;


                        obj.changed_kharif_othercrop_name1 = result.changed_kharif_othercrop_name1;
                        obj.changed_kharif_croparea_area1 = result.changed_kharif_croparea_area1;
                        obj.changed_kharif_horticulture_water_req1 = result.changed_kharif_horticulture_water_req1;
                        obj.changed_kharif_horticulture_waterdemand1 = result.changed_kharif_horticulture_waterdemand1;
                        obj.changed_kharif_horticulture_reduction_gw_demand1 = result.changed_kharif_horticulture_reduction_gw_demand1;

                        obj.changed_kharif_othercrop_name2 = result.changed_kharif_othercrop_name2;
                        obj.changed_kharif_croparea_area2 = result.changed_kharif_croparea_area2;
                        obj.changed_kharif_horticulture_water_req2 = result.changed_kharif_horticulture_water_req2;
                        obj.changed_kharif_horticulture_waterdemand2 = result.changed_kharif_horticulture_waterdemand2;
                        obj.changed_kharif_horticulture_reduction_gw_demand2 = result.changed_kharif_horticulture_reduction_gw_demand2;

                        obj.changed_kharif_othercrop_name3 = result.changed_kharif_othercrop_name3;
                        obj.changed_kharif_croparea_area3 = result.changed_kharif_croparea_area3;
                        obj.changed_kharif_horticulture_water_req3 = result.changed_kharif_horticulture_water_req3;
                        obj.changed_kharif_horticulture_waterdemand3 = result.changed_kharif_horticulture_waterdemand3;
                        obj.changed_kharif_horticulture_reduction_gw_demand3 = result.changed_kharif_horticulture_reduction_gw_demand3;

                        obj.changed_kharif_othercrop_name4 = result.changed_kharif_othercrop_name4;
                        obj.changed_kharif_croparea_area4 = result.changed_kharif_croparea_area4;
                        obj.changed_kharif_horticulture_water_req4 = result.changed_kharif_horticulture_water_req4;
                        obj.changed_kharif_horticulture_waterdemand4 = result.changed_kharif_horticulture_waterdemand4;
                        obj.changed_kharif_horticulture_reduction_gw_demand4 = result.changed_kharif_horticulture_reduction_gw_demand4;

                        obj.changed_kharif_othercrop_name5 = result.changed_kharif_othercrop_name5;
                        obj.changed_kharif_croparea_area5 = result.changed_kharif_croparea_area5;
                        obj.changed_kharif_horticulture_water_req5 = result.changed_kharif_horticulture_water_req5;
                        obj.changed_kharif_horticulture_waterdemand5 = result.changed_kharif_horticulture_waterdemand5;
                        obj.changed_kharif_horticulture_reduction_gw_demand5 = result.changed_kharif_horticulture_reduction_gw_demand5;

                        obj.changed_rabi_othercrop_name1 = result.changed_rabi_othercrop_name1;
                        obj.changed_rabi_croparea_area1 = result.changed_rabi_croparea_area1;
                        obj.changed_rabi_horticulture_water_req1 = result.changed_rabi_horticulture_water_req1;
                        obj.changed_rabi_horticulture_waterdemand1 = result.changed_rabi_horticulture_waterdemand1;
                        obj.changed_rabi_horticulture_reduction_gw_demand1 = result.changed_rabi_horticulture_reduction_gw_demand1;

                        obj.changed_rabi_othercrop_name2 = result.changed_rabi_othercrop_name2;
                        obj.changed_rabi_croparea_area2 = result.changed_rabi_croparea_area2;
                        obj.changed_rabi_horticulture_water_req2 = result.changed_rabi_horticulture_water_req2;
                        obj.changed_rabi_horticulture_waterdemand2 = result.changed_rabi_horticulture_waterdemand2;
                        obj.changed_rabi_horticulture_reduction_gw_demand2 = result.changed_rabi_horticulture_reduction_gw_demand2;

                        obj.changed_rabi_othercrop_name3 = result.changed_rabi_othercrop_name3;
                        obj.changed_rabi_croparea_area3 = result.changed_rabi_croparea_area3;
                        obj.changed_rabi_horticulture_water_req3 = result.changed_rabi_horticulture_water_req3;
                        obj.changed_rabi_horticulture_waterdemand3 = result.changed_rabi_horticulture_waterdemand3;
                        obj.changed_rabi_horticulture_reduction_gw_demand3 = result.changed_rabi_horticulture_reduction_gw_demand3;

                        obj.changed_rabi_othercrop_name4 = result.changed_rabi_othercrop_name4;
                        obj.changed_rabi_croparea_area4 = result.changed_rabi_croparea_area4;
                        obj.changed_rabi_horticulture_water_req4 = result.changed_rabi_horticulture_water_req4;
                        obj.changed_rabi_horticulture_waterdemand4 = result.changed_rabi_horticulture_waterdemand4;
                        obj.changed_rabi_horticulture_reduction_gw_demand4 = result.changed_rabi_horticulture_reduction_gw_demand4;

                        obj.changed_rabi_othercrop_name5 = result.changed_rabi_othercrop_name5;
                        obj.changed_rabi_croparea_area5 = result.changed_rabi_croparea_area5;
                        obj.changed_rabi_horticulture_water_req5 = result.changed_rabi_horticulture_water_req5;
                        obj.changed_rabi_horticulture_waterdemand5 = result.changed_rabi_horticulture_waterdemand5;
                        obj.changed_rabi_horticulture_reduction_gw_demand5 = result.changed_rabi_horticulture_reduction_gw_demand5;

                        obj.changed_summer_othercrop_name1 = result.changed_summer_othercrop_name1;
                        obj.changed_summer_croparea_area1 = result.changed_summer_croparea_area1;
                        obj.changed_summer_horticulture_water_req1 = result.changed_summer_horticulture_water_req1;
                        obj.changed_summer_horticulture_waterdemand1 = result.changed_summer_horticulture_waterdemand1;
                        obj.changed_summer_horticulture_reduction_gw_demand1 = result.changed_summer_horticulture_reduction_gw_demand1;

                        obj.changed_summer_othercrop_name2 = result.changed_summer_othercrop_name2;
                        obj.changed_summer_croparea_area2 = result.changed_summer_croparea_area2;
                        obj.changed_summer_horticulture_water_req2 = result.changed_summer_horticulture_water_req2;
                        obj.changed_summer_horticulture_waterdemand2 = result.changed_summer_horticulture_waterdemand2;
                        obj.changed_summer_horticulture_reduction_gw_demand2 = result.changed_summer_horticulture_reduction_gw_demand2;

                        obj.changed_summer_othercrop_name3 = result.changed_summer_othercrop_name3;
                        obj.changed_summer_croparea_area3 = result.changed_summer_croparea_area3;
                        obj.changed_summer_horticulture_water_req3 = result.changed_summer_horticulture_water_req3;
                        obj.changed_summer_horticulture_waterdemand3 = result.changed_summer_horticulture_waterdemand3;
                        obj.changed_summer_horticulture_reduction_gw_demand3 = result.changed_summer_horticulture_reduction_gw_demand3;

                        obj.changed_summer_othercrop_name4 = result.changed_summer_othercrop_name4;
                        obj.changed_summer_croparea_area4 = result.changed_summer_croparea_area4;
                        obj.changed_summer_horticulture_water_req4 = result.changed_summer_horticulture_water_req4;
                        obj.changed_summer_horticulture_waterdemand4 = result.changed_summer_horticulture_waterdemand4;
                        obj.changed_summer_horticulture_reduction_gw_demand4 = result.changed_summer_horticulture_reduction_gw_demand4;

                        obj.changed_summer_othercrop_name5 = result.changed_summer_othercrop_name5;
                        obj.changed_summer_croparea_area5 = result.changed_summer_croparea_area5;
                        obj.changed_summer_horticulture_water_req5 = result.changed_summer_horticulture_water_req5;
                        obj.changed_summer_horticulture_waterdemand5 = result.changed_summer_horticulture_waterdemand5;
                        obj.changed_summer_horticulture_reduction_gw_demand5 = result.changed_summer_horticulture_reduction_gw_demand5;


                        ABE.obj_crop.Add(obj);
                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json(ex);
                }
            }
            else
            {

                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }

        [HttpGet]
        public ActionResult AR_Structure_Details1()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    // var UserId = Convert.ToInt32(Session["UserId"]);
                    //  var Data = ABE.obj_supply_AR_Structures.Where(x => x.userid == UserId).ToList();
                    var Data = ABE.obj_supply_AR_Structures.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).ToList();
                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();
                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }



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
        [HttpGet]
        public ActionResult WC_Structure_Infoture_Details1()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    // var UserId = Convert.ToInt32(Session["UserId"]);
                    // var Data = ABE.obj_supply_water_conservation.Where(x => x.userid == UserId).ToList();
                    var Data = ABE.obj_supply_water_conservation.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).ToList();
                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();
                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }
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
        [HttpGet]
        public ActionResult other_Intervention_Details1()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var StateName = "";
                    var DistName = "";
                    var BlockName = "";
                    var GramName = "";
                    if (Session["gstate"] != null)
                    {
                        StateName = Session["gstate"].ToString();
                    }
                    if (Session["gdist"] != null)
                    {
                        DistName = Session["gdist"].ToString();
                    }
                    if (Session["gblock"] != null)
                    {
                        BlockName = Session["gblock"].ToString();
                    }
                    if (Session["ggram"] != null)
                    {
                        GramName = Session["ggram"].ToString();
                    }
                    //var UserId = Convert.ToInt32(Session["UserId"]);
                    //var Data = ABE.obj_supply_any_other_intervention.Where(x => x.userid == UserId).ToList();
                    var Data = ABE.obj_supply_any_other_intervention.Where(x => x.state_name == StateName && x.district_name == DistName && x.block_name == BlockName && x.gpname == GramName).ToList();
                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();
                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }

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




        [HttpGet]
        public ActionResult Sprinkler_Info1()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();

                    var UserId = Convert.ToInt32(Session["UserId"]);
                    var Data = ABE.obj_sprinkler.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();
                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();

                        return Json(Data1, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
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
                // return RedirectToAction("MisLogin", "WSP");
            }
        }

        [HttpGet]
        public ActionResult Drip_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserId = Convert.ToInt32(Session["UserId"]);
                    var Data = ABE.obj_drip_saveddata.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();


                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();

                        return Json(Data1, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
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
                // return RedirectToAction("MisLogin", "WSP");
            }
        }


        [HttpGet]
        public ActionResult PipeLine_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserId = Convert.ToInt32(Session["UserId"]);
                    var Data = ABE.obj_pipeline.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();

                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();

                        return Json(Data1, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
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
                // return RedirectToAction("MisLogin", "WSP");
            }
        }




        [HttpGet]
        public ActionResult Crop_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserId = Convert.ToInt32(Session["UserId"]);
                    var Data = ABE.obj_crop.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();

                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();

                        return Json(Data1, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
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
                // return RedirectToAction("MisLogin", "WSP");
            }
        }




        [HttpGet]
        public ActionResult Other_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserId = Convert.ToInt32(Session["UserId"]);
                    var Data = ABE.obj_other.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();

                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();

                        return Json(Data1, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
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
                // return RedirectToAction("MisLogin", "WSP");
            }
        }


        [HttpGet]
        public ActionResult Reduction_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();

                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var UserId = Convert.ToInt32(Session["UserId"]);

                    var Data = ABE.obj_reduction.Where(x => x.statename == State && x.districtname == Dist && x.blockname == Block && x.gpname == Gram).ToList();

                    if (Data.Count != 0)
                    {
                        var Data1 = Data.LastOrDefault();

                        return Json(Data1, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(Data, JsonRequestBehavior.AllowGet);
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
                // return RedirectToAction("MisLogin", "WSP");
            }
        }
        public ActionResult WspDemandside()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }

        public ActionResult Wspsuppyside()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }
        public ActionResult WSPDemansidereports()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }

        public ActionResult WaterBudget()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }

        public ActionResult WaterBudget_report()
        {
            //int userId = Convert.ToInt32(Session["UserId"]);
            //int Active = CheckLogin.CheckLoginStatus(userId);
            //if (Active == 1)
            //{
            //    return RedirectToAction("WSP_GWM_HOME", "WspNew");
            //}
            return View();
        }

        //training manuals
        public ActionResult WspHome()
        {

            return View();

        }
        [HttpPost]
        public ActionResult WspHome_Info(HttpPostedFileBase filename_mobile, HttpPostedFileBase filename_mis, HttpPostedFileBase filename_wsp)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var Data = ABE.obj_abhy_training_manuals.ToList();

                    var Details = new abhy_training_manuals();
                    if (Data.Count == 1)
                    {
                        var data1 = Data.SingleOrDefault();
                        if (filename_mobile != null)
                        {
                            if (filename_mobile.FileName != null)
                            {
                                String FileExt = Path.GetExtension(filename_mobile.FileName).ToUpper();

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                path = path + filename_mobile.FileName;
                                filename_mobile.SaveAs(path);
                                data1.filename_mobile = filename_mobile.FileName;
                                data1.filepath_mobile = "/Ataljalimages/" + filename_mobile.FileName;

                            }
                        }
                        if (filename_mis != null)
                        {
                            if (filename_mis.FileName != null)
                            {
                                String FileExt = Path.GetExtension(filename_mis.FileName).ToUpper();

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                path = path + filename_mis.FileName;
                                filename_mis.SaveAs(path);
                                data1.filename_mis = filename_mis.FileName;
                                data1.filepath_mis = "/Ataljalimages/" + filename_mis.FileName;

                            }
                        }

                        if (filename_wsp != null)
                        {
                            if (filename_wsp.FileName != null)
                            {
                                String FileExt = Path.GetExtension(filename_wsp.FileName).ToUpper();

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                path = path + filename_wsp.FileName;
                                filename_wsp.SaveAs(path);
                                data1.filename_wsp = filename_wsp.FileName;
                                data1.filepath_wsp = "/Ataljalimages/" + filename_wsp.FileName;

                            }
                        }
                        data1.manual_date = DateTime.Today.ToString();

                        data1.userid = Convert.ToInt32(Session["UserId"]);
                        ABE.Entry(data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        if (Data.Count == 0)
                        {
                            if (filename_mobile != null)
                            {
                                if (filename_mobile.FileName != null)
                                {
                                    String FileExt = Path.GetExtension(filename_mobile.FileName).ToUpper();
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\training_manuals\\");
                                    //string path = @"D:\Ataljal_grievnce\training_manuals";
                                    path = path + filename_mobile.FileName;
                                    filename_mobile.SaveAs(path);
                                    Details.filename_mobile = filename_mobile.FileName;
                                    Details.filepath_mobile = "/Ataljalimages/training_manuals/" + filename_mobile.FileName;

                                }
                            }
                            if (filename_mis != null)
                            {
                                if (filename_mis.FileName != null)
                                {
                                    String FileExt = Path.GetExtension(filename_mis.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\training_manuals\\");
                                    path = path + filename_mis.FileName;
                                    filename_mis.SaveAs(path);
                                    Details.filename_mis = filename_mis.FileName;
                                    Details.filepath_mis = "/Ataljalimages/training_manuals/" + filename_mis.FileName;

                                }
                            }

                            if (filename_wsp != null)
                            {
                                if (filename_wsp.FileName != null)
                                {
                                    String FileExt = Path.GetExtension(filename_wsp.FileName).ToUpper();

                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\training_manuals\\");
                                    path = path + filename_wsp.FileName;
                                    filename_wsp.SaveAs(path);
                                    Details.filename_wsp = filename_wsp.FileName;
                                    Details.filepath_wsp = "/Ataljalimages/training_manuals/" + filename_wsp.FileName;

                                }
                            }
                            Details.manual_date = DateTime.Today.ToString();

                            Details.userid = Convert.ToInt32(Session["UserId"]);
                            ABE.obj_abhy_training_manuals.Add(Details);
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("Duplicate data is there");
                        }

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
        [HttpGet]
        public ActionResult Training_mannual_testing()
        {
            if (Session["UserId"] != null)
            {
                var UserName = Session["Officer"].ToString();

                return Json(UserName, JsonRequestBehavior.AllowGet);
               
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult WspHome_Info_Get()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    //var UserId = Convert.ToInt32(Session["UserId"]);

                    var Data = ABE.obj_abhy_training_manuals.ToList();
                    if (Data.Count != 0)
                    {
                        // var Data1 = Data.LastOrDefault();
                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        return Json(Data, JsonRequestBehavior.AllowGet);
                    }



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

        //training manual END
    }
}