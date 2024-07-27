using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using ClosedXML.Excel;
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
    public class DliverificationController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: Dliverification
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Dli_module()
        {
            
            return View();
        }


        [HttpGet]
        public ActionResult Dliverification_State()
        {
            if (Session["UserId"] != null)
            {
                if (Session["Officer"].ToString() == "State Level Nodal Officer") {
                    if (Session["gstate"] != null && Session["gstate"].ToString() != "0" && Session["gstate"].ToString() != "")
                    {
                        Session["DLI_State"] = Session["gstate"].ToString();
                        var Statename = Session["gstate"].ToString();
                        return Json(Statename, JsonRequestBehavior.AllowGet);
                    }
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult Dli_1_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.objabhy_dli_one.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult DLI_1_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_dli_one>(Data);
                var StateName = result.state_name;

                var Data1 = ABE.objabhy_dli_one.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count == 1)
                {
                    var Data2 = Data1.SingleOrDefault();


                    Data2.state_name = StateName;
                    Data2.waterlevel_i_baseline = result.waterlevel_i_baseline;
                    Data2.waterlevel_i_20_21 = result.waterlevel_i_20_21;
                    Data2.waterlevel_i_21_22 = result.waterlevel_i_21_22;
                    Data2.waterlevel_i_22_23 = result.waterlevel_i_22_23;
                    Data2.waterlevel_i_23_24 = result.waterlevel_i_23_24;
                    Data2.waterlevel_i_24_25 = result.waterlevel_i_24_25;
                    Data2.waterlevel_i_cumulative = result.waterlevel_i_cumulative;
                    Data2.waterlevel_i_disbursible = result.waterlevel_i_disbursible;

                    Data2.waterlevel_ii_baseline = result.waterlevel_ii_baseline;
                    Data2.waterlevel_ii_20_21 = result.waterlevel_ii_20_21;
                    Data2.waterlevel_ii_21_22 = result.waterlevel_ii_21_22;
                    Data2.waterlevel_ii_22_23 = result.waterlevel_ii_22_23;
                    Data2.waterlevel_ii_23_24 = result.waterlevel_ii_23_24;
                    Data2.waterlevel_ii_24_25 = result.waterlevel_ii_24_25;
                    Data2.waterlevel_ii_cumulative = result.waterlevel_ii_cumulative;
                    Data2.waterlevel_ii_disbursible = result.waterlevel_ii_disbursible;

                    Data2.waterlevel_iv_baseline = result.waterlevel_iv_baseline;
                    Data2.waterlevel_iv_20_21 = result.waterlevel_iv_20_21;
                    Data2.waterlevel_iv_21_22 = result.waterlevel_iv_21_22;
                    Data2.waterlevel_iv_22_23 = result.waterlevel_iv_22_23;
                    Data2.waterlevel_iv_23_24 = result.waterlevel_iv_23_24;
                    Data2.waterlevel_iv_24_25 = result.waterlevel_iv_24_25;
                    Data2.waterlevel_iv_cumulative = result.waterlevel_iv_cumulative;
                    Data2.waterlevel_iv_disbursible = result.waterlevel_iv_disbursible;

                    Data2.waterlevel_v_baseline = result.waterlevel_v_baseline;
                    Data2.waterlevel_v_20_21 = result.waterlevel_v_20_21;
                    Data2.waterlevel_v_21_22 = result.waterlevel_v_21_22;
                    Data2.waterlevel_v_22_23 = result.waterlevel_v_22_23;
                    Data2.waterlevel_v_23_24 = result.waterlevel_v_23_24;
                    Data2.waterlevel_v_24_25 = result.waterlevel_v_24_25;
                    Data2.waterlevel_v_cumulative = result.waterlevel_v_cumulative;
                    Data2.waterlevel_v_disbursible = result.waterlevel_v_disbursible;

                    Data2.waterlevel_vii_baseline = result.waterlevel_vii_baseline;
                    Data2.waterlevel_vii_20_21 = result.waterlevel_vii_20_21;
                    Data2.waterlevel_vii_21_22 = result.waterlevel_vii_21_22;
                    Data2.waterlevel_vii_22_23 = result.waterlevel_vii_22_23;
                    Data2.waterlevel_vii_23_24 = result.waterlevel_vii_23_24;
                    Data2.waterlevel_vii_24_25 = result.waterlevel_vii_24_25;
                    Data2.waterlevel_vii_cumulative = result.waterlevel_vii_cumulative;
                    Data2.waterlevel_vii_disbursible = result.waterlevel_vii_disbursible;

                    Data2.waterlevel_viii_baseline = result.waterlevel_viii_baseline;
                    Data2.waterlevel_viii_20_21 = result.waterlevel_viii_20_21;
                    Data2.waterlevel_viii_21_22 = result.waterlevel_viii_21_22;
                    Data2.waterlevel_viii_22_23 = result.waterlevel_viii_22_23;
                    Data2.waterlevel_viii_23_24 = result.waterlevel_viii_23_24;
                    Data2.waterlevel_viii_24_25 = result.waterlevel_viii_24_25;
                    Data2.waterlevel_viii_cumulative = result.waterlevel_viii_cumulative;
                    Data2.waterlevel_viii_disbursible = result.waterlevel_viii_disbursible;

                    Data2.waterquality_i_baseline = result.waterquality_i_baseline;
                    Data2.waterquality_i_20_21 = result.waterquality_i_20_21;
                    Data2.waterquality_i_21_22 = result.waterquality_i_21_22;
                    Data2.waterquality_i_22_23 = result.waterquality_i_22_23;
                    Data2.waterquality_i_23_24 = result.waterquality_i_23_24;
                    Data2.waterquality_i_24_25 = result.waterquality_i_24_25;
                    Data2.waterquality_i_cumulative = result.waterquality_i_cumulative;
                    Data2.waterquality_i_disbursible = result.waterquality_i_disbursible;

                    Data2.waterquality_ii_baseline = result.waterquality_ii_baseline;
                    Data2.waterquality_ii_20_21 = result.waterquality_ii_20_21;
                    Data2.waterquality_ii_21_22 = result.waterquality_ii_21_22;
                    Data2.waterquality_ii_22_23 = result.waterquality_ii_22_23;
                    Data2.waterquality_ii_23_24 = result.waterquality_ii_23_24;
                    Data2.waterquality_ii_24_25 = result.waterquality_ii_24_25;
                    Data2.waterquality_ii_cumulative = result.waterquality_ii_cumulative;
                    Data2.waterquality_ii_disbursible = result.waterquality_ii_disbursible;

                    Data2.waterquality_iv_baseline = result.waterquality_iv_baseline;
                    Data2.waterquality_iv_20_21 = result.waterquality_iv_20_21;
                    Data2.waterquality_iv_21_22 = result.waterquality_iv_21_22;
                    Data2.waterquality_iv_22_23 = result.waterquality_iv_22_23;
                    Data2.waterquality_iv_23_24 = result.waterquality_iv_23_24;
                    Data2.waterquality_iv_24_25 = result.waterquality_iv_24_25;
                    Data2.waterquality_iv_cumulative = result.waterquality_iv_cumulative;
                    Data2.waterquality_iv_disbursible = result.waterquality_iv_disbursible;

                    Data2.waterquality_v_baseline = result.waterquality_v_baseline;
                    Data2.waterquality_v_20_21 = result.waterquality_v_20_21;
                    Data2.waterquality_v_21_22 = result.waterquality_v_21_22;
                    Data2.waterquality_v_22_23 = result.waterquality_v_22_23;
                    Data2.waterquality_v_23_24 = result.waterquality_v_23_24;
                    Data2.waterquality_v_24_25 = result.waterquality_v_24_25;
                    Data2.waterquality_v_cumulative = result.waterquality_v_cumulative;
                    Data2.waterquality_v_disbursible = result.waterquality_v_disbursible;

                    Data2.blockwise_i_baseline = result.blockwise_i_baseline;
                    Data2.blockwise_i_20_21 = result.blockwise_i_20_21;
                    Data2.blockwise_i_21_22 = result.blockwise_i_21_22;
                    Data2.blockwise_i_22_23 = result.blockwise_i_22_23;
                    Data2.blockwise_i_23_24 = result.blockwise_i_23_24;
                    Data2.blockwise_i_24_25 = result.blockwise_i_24_25;
                    Data2.blockwise_i_cumulative = result.blockwise_i_cumulative;
                    Data2.blockwise_i_disbursible = result.blockwise_i_disbursible;

                    Data2.blockwise_ii_baseline = result.blockwise_ii_baseline;
                    Data2.blockwise_ii_20_21 = result.blockwise_ii_20_21;
                    Data2.blockwise_ii_21_22 = result.blockwise_ii_21_22;
                    Data2.blockwise_ii_22_23 = result.blockwise_ii_22_23;
                    Data2.blockwise_ii_23_24 = result.blockwise_ii_23_24;
                    Data2.blockwise_ii_24_25 = result.blockwise_ii_24_25;
                    Data2.blockwise_ii_cumulative = result.blockwise_ii_cumulative;
                    Data2.blockwise_ii_disbursible = result.blockwise_ii_disbursible;

                    Data2.statewise_i_baseline = result.statewise_i_baseline;
                    Data2.statewise_i_20_21 = result.statewise_i_20_21;
                    Data2.statewise_i_21_22 = result.statewise_i_21_22;
                    Data2.statewise_i_22_23 = result.statewise_i_22_23;
                    Data2.statewise_i_23_24 = result.statewise_i_23_24;
                    Data2.statewise_i_24_25 = result.statewise_i_24_25;
                    Data2.statewise_i_cumulative = result.statewise_i_cumulative;
                    Data2.statewise_i_disbursible = result.statewise_i_disbursible;
                    ABE.Entry(Data2).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");

                }
                else
                {

                    if (Data1.Count == 0)
                    {
                        abhy_dli_one obj = new abhy_dli_one();
                        obj.state_name = StateName;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        obj.state_name = StateName;
                        obj.waterlevel_i_baseline = result.waterlevel_i_baseline;
                        obj.waterlevel_i_20_21 = result.waterlevel_i_20_21;
                        obj.waterlevel_i_21_22 = result.waterlevel_i_21_22;
                        obj.waterlevel_i_22_23 = result.waterlevel_i_22_23;
                        obj.waterlevel_i_23_24 = result.waterlevel_i_23_24;
                        obj.waterlevel_i_24_25 = result.waterlevel_i_24_25;
                        obj.waterlevel_i_cumulative = result.waterlevel_i_cumulative;
                        obj.waterlevel_i_disbursible = result.waterlevel_i_disbursible;

                        obj.waterlevel_ii_baseline = result.waterlevel_ii_baseline;
                        obj.waterlevel_ii_20_21 = result.waterlevel_ii_20_21;
                        obj.waterlevel_ii_21_22 = result.waterlevel_ii_21_22;
                        obj.waterlevel_ii_22_23 = result.waterlevel_ii_22_23;
                        obj.waterlevel_ii_23_24 = result.waterlevel_ii_23_24;
                        obj.waterlevel_ii_24_25 = result.waterlevel_ii_24_25;
                        obj.waterlevel_ii_cumulative = result.waterlevel_ii_cumulative;
                        obj.waterlevel_ii_disbursible = result.waterlevel_ii_disbursible;

                        obj.waterlevel_iv_baseline = result.waterlevel_iv_baseline;
                        obj.waterlevel_iv_20_21 = result.waterlevel_iv_20_21;
                        obj.waterlevel_iv_21_22 = result.waterlevel_iv_21_22;
                        obj.waterlevel_iv_22_23 = result.waterlevel_iv_22_23;
                        obj.waterlevel_iv_23_24 = result.waterlevel_iv_23_24;
                        obj.waterlevel_iv_24_25 = result.waterlevel_iv_24_25;
                        obj.waterlevel_iv_cumulative = result.waterlevel_iv_cumulative;
                        obj.waterlevel_iv_disbursible = result.waterlevel_iv_disbursible;

                        obj.waterlevel_v_baseline = result.waterlevel_v_baseline;
                        obj.waterlevel_v_20_21 = result.waterlevel_v_20_21;
                        obj.waterlevel_v_21_22 = result.waterlevel_v_21_22;
                        obj.waterlevel_v_22_23 = result.waterlevel_v_22_23;
                        obj.waterlevel_v_23_24 = result.waterlevel_v_23_24;
                        obj.waterlevel_v_24_25 = result.waterlevel_v_24_25;
                        obj.waterlevel_v_cumulative = result.waterlevel_v_cumulative;
                        obj.waterlevel_v_disbursible = result.waterlevel_v_disbursible;

                        obj.waterlevel_vii_baseline = result.waterlevel_vii_baseline;
                        obj.waterlevel_vii_20_21 = result.waterlevel_vii_20_21;
                        obj.waterlevel_vii_21_22 = result.waterlevel_vii_21_22;
                        obj.waterlevel_vii_22_23 = result.waterlevel_vii_22_23;
                        obj.waterlevel_vii_23_24 = result.waterlevel_vii_23_24;
                        obj.waterlevel_vii_24_25 = result.waterlevel_vii_24_25;
                        obj.waterlevel_vii_cumulative = result.waterlevel_vii_cumulative;
                        obj.waterlevel_vii_disbursible = result.waterlevel_vii_disbursible;

                        obj.waterlevel_viii_baseline = result.waterlevel_viii_baseline;
                        obj.waterlevel_viii_20_21 = result.waterlevel_viii_20_21;
                        obj.waterlevel_viii_21_22 = result.waterlevel_viii_21_22;
                        obj.waterlevel_viii_22_23 = result.waterlevel_viii_22_23;
                        obj.waterlevel_viii_23_24 = result.waterlevel_viii_23_24;
                        obj.waterlevel_viii_24_25 = result.waterlevel_viii_24_25;
                        obj.waterlevel_viii_cumulative = result.waterlevel_viii_cumulative;
                        obj.waterlevel_viii_disbursible = result.waterlevel_viii_disbursible;

                        obj.waterquality_i_baseline = result.waterquality_i_baseline;
                        obj.waterquality_i_20_21 = result.waterquality_i_20_21;
                        obj.waterquality_i_21_22 = result.waterquality_i_21_22;
                        obj.waterquality_i_22_23 = result.waterquality_i_22_23;
                        obj.waterquality_i_23_24 = result.waterquality_i_23_24;
                        obj.waterquality_i_24_25 = result.waterquality_i_24_25;
                        obj.waterquality_i_cumulative = result.waterquality_i_cumulative;
                        obj.waterquality_i_disbursible = result.waterquality_i_disbursible;

                        obj.waterquality_ii_baseline = result.waterquality_ii_baseline;
                        obj.waterquality_ii_20_21 = result.waterquality_ii_20_21;
                        obj.waterquality_ii_21_22 = result.waterquality_ii_21_22;
                        obj.waterquality_ii_22_23 = result.waterquality_ii_22_23;
                        obj.waterquality_ii_23_24 = result.waterquality_ii_23_24;
                        obj.waterquality_ii_24_25 = result.waterquality_ii_24_25;
                        obj.waterquality_ii_cumulative = result.waterquality_ii_cumulative;
                        obj.waterquality_ii_disbursible = result.waterquality_ii_disbursible;

                        obj.waterquality_iv_baseline = result.waterquality_iv_baseline;
                        obj.waterquality_iv_20_21 = result.waterquality_iv_20_21;
                        obj.waterquality_iv_21_22 = result.waterquality_iv_21_22;
                        obj.waterquality_iv_22_23 = result.waterquality_iv_22_23;
                        obj.waterquality_iv_23_24 = result.waterquality_iv_23_24;
                        obj.waterquality_iv_24_25 = result.waterquality_iv_24_25;
                        obj.waterquality_iv_cumulative = result.waterquality_iv_cumulative;
                        obj.waterquality_iv_disbursible = result.waterquality_iv_disbursible;

                        obj.waterquality_v_baseline = result.waterquality_v_baseline;
                        obj.waterquality_v_20_21 = result.waterquality_v_20_21;
                        obj.waterquality_v_21_22 = result.waterquality_v_21_22;
                        obj.waterquality_v_22_23 = result.waterquality_v_22_23;
                        obj.waterquality_v_23_24 = result.waterquality_v_23_24;
                        obj.waterquality_v_24_25 = result.waterquality_v_24_25;
                        obj.waterquality_v_cumulative = result.waterquality_v_cumulative;
                        obj.waterquality_v_disbursible = result.waterquality_v_disbursible;

                        obj.blockwise_i_baseline = result.blockwise_i_baseline;
                        obj.blockwise_i_20_21 = result.blockwise_i_20_21;
                        obj.blockwise_i_21_22 = result.blockwise_i_21_22;
                        obj.blockwise_i_22_23 = result.blockwise_i_22_23;
                        obj.blockwise_i_23_24 = result.blockwise_i_23_24;
                        obj.blockwise_i_24_25 = result.blockwise_i_24_25;
                        obj.blockwise_i_cumulative = result.blockwise_i_cumulative;
                        obj.blockwise_i_disbursible = result.blockwise_i_disbursible;

                        obj.blockwise_ii_baseline = result.blockwise_ii_baseline;
                        obj.blockwise_ii_20_21 = result.blockwise_ii_20_21;
                        obj.blockwise_ii_21_22 = result.blockwise_ii_21_22;
                        obj.blockwise_ii_22_23 = result.blockwise_ii_22_23;
                        obj.blockwise_ii_23_24 = result.blockwise_ii_23_24;
                        obj.blockwise_ii_24_25 = result.blockwise_ii_24_25;
                        obj.blockwise_ii_cumulative = result.blockwise_ii_cumulative;
                        obj.blockwise_ii_disbursible = result.blockwise_ii_disbursible;

                        obj.statewise_i_baseline = result.statewise_i_baseline;
                        obj.statewise_i_20_21 = result.statewise_i_20_21;
                        obj.statewise_i_21_22 = result.statewise_i_21_22;
                        obj.statewise_i_22_23 = result.statewise_i_22_23;
                        obj.statewise_i_23_24 = result.statewise_i_23_24;
                        obj.statewise_i_24_25 = result.statewise_i_24_25;
                        obj.statewise_i_cumulative = result.statewise_i_cumulative;
                        obj.statewise_i_disbursible = result.statewise_i_disbursible;

                        ABE.objabhy_dli_one.Add(obj);
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
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult abhy_dli_one_upload_row1()
        {
            try
            {
                if (Session["UserId"] != null)
                {
                    var State = Session["DLI_State"].ToString();

                    var Details = ABE.obj_abhy_dli_one_upload_row1.Where(x => x.state_name == State).ToList();
                    // string waterlevel_iii_baseline = Request["waterlevel_iii_baseline"];

                    string upload_count = Request["upload_count"];
                    var str = upload_count.Split(',');
                    int ll = str.Length - 1;
                    var upload_Count_Value = str[ll];
                    if (Details.Count == 1)
                    {

                        var Data1 = Details.LastOrDefault();


                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row1();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname =  $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                                string allowed_file_format = "xls,xlsx,csv,pdf";
                                bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                                if (flag == false)
                                {
                                    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                // Get the complete folder path and store the file inside it. 

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            //Data1.waterlevel_iii_baseline = waterlevel_iii_baseline;
                            Data1.state_name = State;
                            if (upload_Count_Value == "1")
                            {
                                var Filename = Data1.waterlevel_iii_20_21_filename;
                                var FilePath1 = Data1.waterlevel_iii_20_21_filepath;
                                Data1.waterlevel_iii_20_21_filename = Filename + ',' + File_Names;
                                Data1.waterlevel_iii_20_21_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                var Filename = Data1.waterlevel_iii_21_22_filename;
                                var FilePath1 = Data1.waterlevel_iii_21_22_filepath;
                                Data1.waterlevel_iii_21_22_filename = Filename + ',' + File_Names;
                                Data1.waterlevel_iii_21_22_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                var Filename = Data1.waterlevel_iii_22_23_filename;
                                var FilePath1 = Data1.waterlevel_iii_22_23_filepath;
                                Data1.waterlevel_iii_22_23_filename = Filename + ',' + File_Names;
                                Data1.waterlevel_iii_22_23_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                var Filename = Data1.waterlevel_iii_23_24_filename;
                                var FilePath1 = Data1.waterlevel_iii_23_24_filepath;
                                Data1.waterlevel_iii_23_24_filename = Filename + ',' + File_Names;
                                Data1.waterlevel_iii_23_24_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                var Filename = Data1.waterlevel_iii_24_25_filename;
                                var FilePath1 = Data1.waterlevel_iii_24_25_filepath;
                                Data1.waterlevel_iii_24_25_filename = Filename + ',' + File_Names;
                                Data1.waterlevel_iii_24_25_filepath = FilePath1 + ',' + Paths;
                            }

                            ABE.Entry(Data1).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }
                    }
                    else
                    {

                        if (Details.Count == 0)
                        {
                            HttpFileCollectionBase files = Request.Files;
                            var obj = new abhy_dli_one_upload_row1();
                            string Paths = "";
                            string File_Names = "";
                            if (files.Count == 0)
                            {
                                return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                            }
                            else
                            {

                                for (int i = 0; i < files.Count; i++)
                                {

                                    HttpPostedFileBase file = files[i];
                                    string fname;
                                    // Checking for Internet Explorer      
                                    if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                    {
                                        string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                        fname = testfiles[testfiles.Length - 1];
                                        string name = Path.GetFileNameWithoutExtension(fname);
                                        string ext = Path.GetExtension(fname);
                                        fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                    }
                                    else
                                    {
                                        
                                        string name = Path.GetFileNameWithoutExtension(file.FileName);
                                        string ext = Path.GetExtension(file.FileName);
                                        fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                    }
                                    // Get the complete folder path and store the file inside it.      
                                    //string path = @"D:\Ataljal_grievnce\";
                                    //path = path + fname;
                                    //string[] count = file.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    //}

                                    //file.SaveAs(path);
                                    //// Get the complete folder path and store the file inside it.      
                                    ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                    //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                    //Paths = MainPath + ',';
                                    ////file.SaveAs(fname);
                                    //File_Names = file.FileName + ',';
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + fname;
                                    string[] count = fname.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    file.SaveAs(path);


                                    var MainPath = "/Ataljalimages/" + fname;
                                    Paths = MainPath + ',';
                                    File_Names = fname + ',';
                                }

                                // obj.waterlevel_iii_baseline = waterlevel_iii_baseline;
                                obj.state_name = State;
                                if (upload_Count_Value == "1")
                                {
                                    obj.waterlevel_iii_20_21_filename = File_Names;
                                    obj.waterlevel_iii_20_21_filepath = Paths;
                                }
                                if (upload_Count_Value == "2")
                                {
                                    obj.waterlevel_iii_21_22_filename = File_Names;
                                    obj.waterlevel_iii_21_22_filepath = Paths;
                                }
                                if (upload_Count_Value == "3")
                                {
                                    obj.waterlevel_iii_22_23_filename = File_Names;
                                    obj.waterlevel_iii_22_23_filepath = Paths;
                                }
                                if (upload_Count_Value == "4")
                                {
                                    obj.waterlevel_iii_23_24_filename = File_Names;
                                    obj.waterlevel_iii_23_24_filepath = Paths;
                                }
                                if (upload_Count_Value == "5")
                                {
                                    obj.waterlevel_iii_24_25_filename = File_Names;
                                    obj.waterlevel_iii_24_25_filepath = Paths;
                                }
                                obj.state_name = State;

                                ABE.obj_abhy_dli_one_upload_row1.Add(obj);
                                ABE.SaveChanges();
                                return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                            }


                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }

                    }
                }
                else
                {
                    return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_upload_row1_download(string Valu)
        {
            if (Session["UserId"] != null)
            {

                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row1.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string waterlevel_iii_20_21_filepath = Details[0].waterlevel_iii_20_21_filepath;
                        string waterlevel_iii_20_21_filename = Details[0].waterlevel_iii_20_21_filename;
                        var Paths1 = waterlevel_iii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_iii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_iii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string waterlevel_iii_21_22_filepath = Details[0].waterlevel_iii_21_22_filepath;
                        string waterlevel_iii_21_22_filename = Details[0].waterlevel_iii_21_22_filename;
                        var Paths1 = waterlevel_iii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_iii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_iii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string waterlevel_iii_22_23_filepath = Details[0].waterlevel_iii_22_23_filepath;
                        string waterlevel_iii_22_23_filename = Details[0].waterlevel_iii_21_22_filename;
                        var Paths1 = waterlevel_iii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_iii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_iii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string waterlevel_iii_23_24_filepath = Details[0].waterlevel_iii_23_24_filepath;
                        string waterlevel_iii_23_24_filename = Details[0].waterlevel_iii_23_24_filename;
                        var Paths1 = waterlevel_iii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_iii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_iii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string waterlevel_iii_24_25_filepath = Details[0].waterlevel_iii_24_25_filepath;
                        string waterlevel_iii_24_25_filename = Details[0].waterlevel_iii_24_25_filename;
                        var Paths1 = waterlevel_iii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_iii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_iii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli1_1_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_one_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_one_upload_row2()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row2.Where(x => x.state_name == StateName).ToList();
                //string waterlevel_vi_baseline = Request["waterlevel_vi_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();


                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_one_upload_row2();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                                
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "xls,xlsx,csv,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);
                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';

                        }

                        // Data1.waterlevel_vi_baseline = waterlevel_vi_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.waterlevel_vi_20_21_filename;
                            var FilePath1 = Data1.waterlevel_vi_20_21_filepath;
                            Data1.waterlevel_vi_20_21_filename = Filename + ',' + File_Names;
                            Data1.waterlevel_vi_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.waterlevel_vi_21_22_filename;
                            var FilePath1 = Data1.waterlevel_vi_21_22_filepath;
                            Data1.waterlevel_vi_21_22_filename = Filename + ',' + File_Names;
                            Data1.waterlevel_vi_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.waterlevel_vi_22_23_filename;
                            var FilePath1 = Data1.waterlevel_vi_22_23_filepath;
                            Data1.waterlevel_vi_22_23_filename = Filename + ',' + File_Names;
                            Data1.waterlevel_vi_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.waterlevel_vi_23_24_filename;
                            var FilePath1 = Data1.waterlevel_vi_23_24_filepath;
                            Data1.waterlevel_vi_23_24_filename = Filename + ',' + File_Names;
                            Data1.waterlevel_vi_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.waterlevel_vi_24_25_filename;
                            var FilePath1 = Data1.waterlevel_vi_24_25_filepath;
                            Data1.waterlevel_vi_24_25_filename = Filename + ',' + File_Names;
                            Data1.waterlevel_vi_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row2();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);
                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            //  obj.waterlevel_vi_baseline = waterlevel_vi_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.waterlevel_vi_20_21_filename = File_Names;
                                obj.waterlevel_vi_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.waterlevel_vi_21_22_filename = File_Names;
                                obj.waterlevel_vi_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.waterlevel_vi_22_23_filename = File_Names;
                                obj.waterlevel_vi_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.waterlevel_vi_23_24_filename = File_Names;
                                obj.waterlevel_vi_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.waterlevel_vi_24_25_filename = File_Names;
                                obj.waterlevel_vi_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_one_upload_row2.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }



                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_one_upload_row2_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row2.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string waterlevel_vi_20_21_filepath = Details[0].waterlevel_vi_20_21_filepath;
                        string waterlevel_vi_20_21_filename = Details[0].waterlevel_vi_20_21_filename;
                        var Paths1 = waterlevel_vi_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_vi_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_vi_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string waterlevel_vi_21_22_filepath = Details[0].waterlevel_vi_21_22_filepath;
                        string waterlevel_vi_21_22_filename = Details[0].waterlevel_vi_21_22_filename;
                        var Paths1 = waterlevel_vi_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_vi_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_vi_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string waterlevel_vi_22_23_filepath = Details[0].waterlevel_vi_22_23_filepath;
                        string waterlevel_vi_22_23_filename = Details[0].waterlevel_vi_21_22_filename;
                        var Paths1 = waterlevel_vi_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_vi_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_vi_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string waterlevel_vi_23_24_filepath = Details[0].waterlevel_vi_23_24_filepath;
                        string waterlevel_vi_23_24_filename = Details[0].waterlevel_vi_23_24_filename;
                        var Paths1 = waterlevel_vi_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_vi_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_vi_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string waterlevel_vi_24_25_filepath = Details[0].waterlevel_vi_24_25_filepath;
                        string waterlevel_vi_24_25_filename = Details[0].waterlevel_vi_24_25_filename;
                        var Paths1 = waterlevel_vi_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = waterlevel_vi_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterlevel_vi_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli1_2_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row2.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult abhy_dli_one_upload_row3()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row3.Where(x => x.state_name == StateName).ToList();
                // string waterquality_iii_baseline = Request["waterquality_iii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();


                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_one_upload_row3();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                                
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "xls,xlsx,csv,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);

                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.waterquality_iii_baseline = waterquality_iii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.waterquality_iii_20_21_filename;
                            var FilePath1 = Data1.waterquality_iii_20_21_filepath;
                            Data1.waterquality_iii_20_21_filename = Filename + ',' + File_Names;
                            Data1.waterquality_iii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.waterquality_iii_21_22_filename;
                            var FilePath1 = Data1.waterquality_iii_21_22_filepath;
                            Data1.waterquality_iii_21_22_filename = Filename + ',' + File_Names;
                            Data1.waterquality_iii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.waterquality_iii_22_23_filename;
                            var FilePath1 = Data1.waterquality_iii_22_23_filepath;
                            Data1.waterquality_iii_22_23_filename = Filename + ',' + File_Names;
                            Data1.waterquality_iii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.waterquality_iii_23_24_filename;
                            var FilePath1 = Data1.waterquality_iii_23_24_filepath;
                            Data1.waterquality_iii_23_24_filename = Filename + ',' + File_Names;
                            Data1.waterquality_iii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.waterquality_iii_24_25_filename;
                            var FilePath1 = Data1.waterquality_iii_24_25_filepath;
                            Data1.waterquality_iii_24_25_filename = Filename + ',' + File_Names;
                            Data1.waterquality_iii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row3();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.waterquality_iii_baseline = waterquality_iii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.waterquality_iii_20_21_filename = File_Names;
                                obj.waterquality_iii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.waterquality_iii_21_22_filename = File_Names;
                                obj.waterquality_iii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.waterquality_iii_22_23_filename = File_Names;
                                obj.waterquality_iii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.waterquality_iii_23_24_filename = File_Names;
                                obj.waterquality_iii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.waterquality_iii_24_25_filename = File_Names;
                                obj.waterquality_iii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_one_upload_row3.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate data is There");
                    }


                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_upload_row3_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row3.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string waterquality_iii_20_21_filepath = Details[0].waterquality_iii_20_21_filepath;
                        string waterquality_iii_20_21_filename = Details[0].waterquality_iii_20_21_filename;
                        var Paths1 = waterquality_iii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_iii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_iii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string waterquality_iii_21_22_filepath = Details[0].waterquality_iii_21_22_filepath;
                        string waterquality_iii_21_22_filename = Details[0].waterquality_iii_21_22_filename;
                        var Paths1 = waterquality_iii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_iii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_iii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string waterquality_iii_22_23_filepath = Details[0].waterquality_iii_22_23_filepath;
                        string waterquality_iii_22_23_filename = Details[0].waterquality_iii_22_23_filename;
                        var Paths1 = waterquality_iii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_iii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_iii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string waterquality_iii_23_24_filepath = Details[0].waterquality_iii_23_24_filepath;
                        string waterquality_iii_23_24_filename = Details[0].waterquality_iii_23_24_filename;
                        var Paths1 = waterquality_iii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_iii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_iii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string waterquality_iii_24_25_filepath = Details[0].waterquality_iii_24_25_filepath;
                        string waterquality_iii_24_25_filename = Details[0].waterquality_iii_24_25_filename;
                        var Paths1 = waterquality_iii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_iii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_iii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli1_3_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_one_upload_row3.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_one_upload_row4()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row4.Where(x => x.state_name == StateName).ToList();
                //string waterquality_vi_baseline = Request["waterquality_vi_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();


                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_one_upload_row4();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                                
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "xls,xlsx,csv,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);

                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.waterquality_vi_baseline = waterquality_vi_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.waterquality_vi_20_21_filename;
                            var FilePath1 = Data1.waterquality_vi_20_21_filepath;
                            Data1.waterquality_vi_20_21_filename = Filename + ',' + File_Names;
                            Data1.waterquality_vi_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.waterquality_vi_21_22_filename;
                            var FilePath1 = Data1.waterquality_vi_21_22_filepath;
                            Data1.waterquality_vi_21_22_filename = Filename + ',' + File_Names;
                            Data1.waterquality_vi_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.waterquality_vi_22_23_filename;
                            var FilePath1 = Data1.waterquality_vi_22_23_filepath;
                            Data1.waterquality_vi_22_23_filename = Filename + ',' + File_Names;
                            Data1.waterquality_vi_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.waterquality_vi_23_24_filename;
                            var FilePath1 = Data1.waterquality_vi_23_24_filepath;
                            Data1.waterquality_vi_23_24_filename = Filename + ',' + File_Names;
                            Data1.waterquality_vi_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.waterquality_vi_24_25_filename;
                            var FilePath1 = Data1.waterquality_vi_24_25_filepath;
                            Data1.waterquality_vi_24_25_filename = Filename + ',' + File_Names;
                            Data1.waterquality_vi_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row4();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.waterquality_vi_baseline = waterquality_vi_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.waterquality_vi_20_21_filename = File_Names;
                                obj.waterquality_vi_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.waterquality_vi_21_22_filename = File_Names;
                                obj.waterquality_vi_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.waterquality_vi_22_23_filename = File_Names;
                                obj.waterquality_vi_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.waterquality_vi_23_24_filename = File_Names;
                                obj.waterquality_vi_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.waterquality_vi_24_25_filename = File_Names;
                                obj.waterquality_vi_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_one_upload_row4.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_upload_row4_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row4.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string waterquality_vi_20_21_filepath = Details[0].waterquality_vi_20_21_filepath;
                        string waterquality_vi_20_21_filename = Details[0].waterquality_vi_20_21_filename;
                        var Paths1 = waterquality_vi_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_vi_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_vi_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string waterquality_vi_21_22_filepath = Details[0].waterquality_vi_21_22_filepath;
                        string waterquality_vi_21_22_filename = Details[0].waterquality_vi_21_22_filename;
                        var Paths1 = waterquality_vi_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_vi_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_vi_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string waterquality_vi_22_23_filepath = Details[0].waterquality_vi_22_23_filepath;
                        string waterquality_vi_22_23_filename = Details[0].waterquality_vi_22_23_filename;
                        var Paths1 = waterquality_vi_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_vi_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_vi_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string waterquality_vi_23_24_filepath = Details[0].waterquality_vi_23_24_filepath;
                        string waterquality_vi_23_24_filename = Details[0].waterquality_vi_23_24_filename;
                        var Paths1 = waterquality_vi_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_vi_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_vi_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string waterquality_vi_24_25_filepath = Details[0].waterquality_vi_24_25_filepath;
                        string waterquality_vi_24_25_filename = Details[0].waterquality_vi_24_25_filename;
                        var Paths1 = waterquality_vi_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = waterquality_vi_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterquality_vi_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli1_4_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_one_upload_row4.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_one_upload_row5()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row5.Where(x => x.state_name == StateName).ToList();
                // string blockwise_ii_baseline = Request["blockwise_ii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();


                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_one_upload_row5();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                               
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.blockwise_ii_baseline = blockwise_ii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.blockwise_ii_20_21_filename;
                            var FilePath1 = Data1.blockwise_ii_20_21_filepath;
                            Data1.blockwise_ii_20_21_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.blockwise_ii_21_22_filename;
                            var FilePath1 = Data1.blockwise_ii_21_22_filepath;
                            Data1.blockwise_ii_21_22_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.blockwise_ii_22_23_filename;
                            var FilePath1 = Data1.blockwise_ii_22_23_filepath;
                            Data1.blockwise_ii_22_23_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.blockwise_ii_23_24_filename;
                            var FilePath1 = Data1.blockwise_ii_23_24_filepath;
                            Data1.blockwise_ii_23_24_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.blockwise_ii_24_25_filename;
                            var FilePath1 = Data1.blockwise_ii_24_25_filepath;
                            Data1.blockwise_ii_24_25_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row5();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.blockwise_ii_baseline = blockwise_ii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.blockwise_ii_20_21_filename = File_Names;
                                obj.blockwise_ii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.blockwise_ii_21_22_filename = File_Names;
                                obj.blockwise_ii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.blockwise_ii_22_23_filename = File_Names;
                                obj.blockwise_ii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.blockwise_ii_23_24_filename = File_Names;
                                obj.blockwise_ii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.blockwise_ii_24_25_filename = File_Names;
                                obj.blockwise_ii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_one_upload_row5.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }


                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_upload_row5_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row5.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string blockwise_ii_20_21_filepath = Details[0].blockwise_ii_20_21_filepath;
                        string blockwise_ii_20_21_filename = Details[0].blockwise_ii_20_21_filename;
                        var Paths1 = blockwise_ii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string blockwise_ii_21_22_filepath = Details[0].blockwise_ii_21_22_filepath;
                        string blockwise_ii_21_22_filename = Details[0].blockwise_ii_21_22_filename;
                        var Paths1 = blockwise_ii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string blockwise_ii_22_23_filepath = Details[0].blockwise_ii_22_23_filepath;
                        string blockwise_ii_22_23_filename = Details[0].blockwise_ii_22_23_filename;
                        var Paths1 = blockwise_ii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string blockwise_ii_23_24_filepath = Details[0].blockwise_ii_23_24_filepath;
                        string blockwise_ii_23_24_filename = Details[0].blockwise_ii_23_24_filename;
                        var Paths1 = blockwise_ii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string blockwise_ii_24_25_filepath = Details[0].blockwise_ii_24_25_filepath;
                        string blockwise_ii_24_25_filename = Details[0].blockwise_ii_24_25_filename;
                        var Paths1 = blockwise_ii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult Dli1_5_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row5.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_one_upload_row6()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row6.Where(x => x.state_name == StateName).ToList();
                // string statewise_ii_baseline = Request["statewise_ii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();


                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_one_upload_row6();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                                
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.statewise_ii_baseline = statewise_ii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.statewise_ii_20_21_filename;
                            var FilePath1 = Data1.statewise_ii_20_21_filepath;
                            Data1.statewise_ii_20_21_filename = Filename + ',' + File_Names;
                            Data1.statewise_ii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.statewise_ii_21_22_filename;
                            var FilePath1 = Data1.statewise_ii_21_22_filepath;
                            Data1.statewise_ii_21_22_filename = Filename + ',' + File_Names;
                            Data1.statewise_ii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.statewise_ii_22_23_filename;
                            var FilePath1 = Data1.statewise_ii_22_23_filepath;
                            Data1.statewise_ii_22_23_filename = Filename + ',' + File_Names;
                            Data1.statewise_ii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.statewise_ii_23_24_filename;
                            var FilePath1 = Data1.statewise_ii_23_24_filepath;
                            Data1.statewise_ii_23_24_filename = Filename + ',' + File_Names;
                            Data1.statewise_ii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.statewise_ii_24_25_filename;
                            var FilePath1 = Data1.statewise_ii_24_25_filepath;
                            Data1.statewise_ii_24_25_filename = Filename + ',' + File_Names;
                            Data1.statewise_ii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row6();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);

                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.statewise_ii_baseline = statewise_ii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.statewise_ii_20_21_filename = File_Names;
                                obj.statewise_ii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.statewise_ii_21_22_filename = File_Names;
                                obj.statewise_ii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.statewise_ii_22_23_filename = File_Names;
                                obj.statewise_ii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.statewise_ii_23_24_filename = File_Names;
                                obj.statewise_ii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.statewise_ii_24_25_filename = File_Names;
                                obj.statewise_ii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_one_upload_row6.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_upload_row6_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row6.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string statewise_ii_20_21_filepath = Details[0].statewise_ii_20_21_filepath;
                        string statewise_ii_20_21_filename = Details[0].statewise_ii_20_21_filename;
                        var Paths1 = statewise_ii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = statewise_ii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statewise_ii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string statewise_ii_21_22_filepath = Details[0].statewise_ii_21_22_filepath;
                        string statewise_ii_21_22_filename = Details[0].statewise_ii_21_22_filename;
                        var Paths1 = statewise_ii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = statewise_ii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statewise_ii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string statewise_ii_22_23_filepath = Details[0].statewise_ii_22_23_filepath;
                        string statewise_ii_22_23_filename = Details[0].statewise_ii_22_23_filename;
                        var Paths1 = statewise_ii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = statewise_ii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statewise_ii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string statewise_ii_23_24_filepath = Details[0].statewise_ii_23_24_filepath;
                        string statewise_ii_23_24_filename = Details[0].statewise_ii_23_24_filename;
                        var Paths1 = statewise_ii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = statewise_ii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statewise_ii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string statewise_ii_24_25_filepath = Details[0].statewise_ii_24_25_filepath;
                        string statewise_ii_24_25_filename = Details[0].statewise_ii_24_25_filename;
                        var Paths1 = statewise_ii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = statewise_ii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statewise_ii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli1_6_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_one_upload_row6.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        //DLI Row 7 starts
        public ActionResult abhy_dli_one_upload_row7()
        {
            try
            {
                if (Session["UserId"] != null)
                {
                    var State = Session["DLI_State"].ToString();

                    var Details = ABE.obj_abhy_dli_one_upload_row7.Where(x => x.state_name == State).ToList();
                    // string waterlevel_iii_baseline = Request["waterlevel_iii_baseline"];

                    string upload_count = Request["upload_count"];
                    var str = upload_count.Split(',');
                    int ll = str.Length - 1;
                    var upload_Count_Value = str[ll];
                    if (Details.Count == 1)
                    {

                        var Data1 = Details.LastOrDefault();


                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row1();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                   
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                                string allowed_file_format = "xls,xlsx,csv,jpg,pdf";
                                bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                                if (flag == false)
                                {
                                    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //// D:\Ataljal_grievnce\dli_images
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);

                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            //  Data1.waterlevel_iii_baseline = waterlevel_iii_baseline;
                            Data1.state_name = State;
                            if (upload_Count_Value == "1")
                            {
                                var Filename = Data1.mow_v_20_21_filename;
                                var FilePath1 = Data1.mow_v_20_21_filepath;
                                Data1.mow_v_20_21_filename = Filename + ',' + File_Names;
                                Data1.mow_v_20_21_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                var Filename = Data1.mow_v_21_22_filename;
                                var FilePath1 = Data1.mow_v_21_22_filepath;
                                Data1.mow_v_21_22_filename = Filename + ',' + File_Names;
                                Data1.mow_v_21_22_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                var Filename = Data1.mow_v_22_23_filename;
                                var FilePath1 = Data1.mow_v_22_23_filepath;
                                Data1.mow_v_22_23_filename = Filename + ',' + File_Names;
                                Data1.mow_v_22_23_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                var Filename = Data1.mow_v_23_24_filename;
                                var FilePath1 = Data1.mow_v_23_24_filepath;
                                Data1.mow_v_23_24_filename = Filename + ',' + File_Names;
                                Data1.mow_v_23_24_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                var Filename = Data1.mow_v_24_25_filename;
                                var FilePath1 = Data1.mow_v_24_25_filepath;
                                Data1.mow_v_24_25_filename = Filename + ',' + File_Names;
                                Data1.mow_v_24_25_filepath = FilePath1 + ',' + Paths;
                            }

                            ABE.Entry(Data1).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }
                    }
                    else
                    {
                        if (Details.Count == 0)
                        {
                            HttpFileCollectionBase files = Request.Files;
                            var obj = new abhy_dli_one_upload_row7();
                            string Paths = "";
                            string File_Names = "";
                            if (files.Count == 0)
                            {
                                return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                            }
                            else
                            {

                                for (int i = 0; i < files.Count; i++)
                                {

                                    HttpPostedFileBase file = files[i];
                                    string fname;
                                    // Checking for Internet Explorer      
                                    if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                    {
                                        string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                        fname = testfiles[testfiles.Length - 1];
                                        string name = Path.GetFileNameWithoutExtension(fname);
                                        string ext = Path.GetExtension(fname);
                                        fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                    }
                                    else
                                    {
                                        string name = Path.GetFileNameWithoutExtension(file.FileName);
                                        string ext = Path.GetExtension(file.FileName);
                                        fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                    }
                                    // Get the complete folder path and store the file inside it.      
                                    //string path = @"D:\Ataljal_grievnce\";
                                    //path = path + fname;
                                    //string[] count = file.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    //}
                                    //file.SaveAs(path);
                                    //// Get the complete folder path and store the file inside it.      
                                    ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                    //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                    //Paths = MainPath + ',';
                                    ////file.SaveAs(fname);
                                    //File_Names = file.FileName + ',';
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + fname;
                                    string[] count = fname.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    file.SaveAs(path);


                                    var MainPath = "/Ataljalimages/" + fname;
                                    Paths = MainPath + ',';
                                    File_Names = fname + ',';
                                }

                                // obj.waterlevel_iii_baseline = waterlevel_iii_baseline;
                                obj.state_name = State;
                                if (upload_Count_Value == "1")
                                {
                                    obj.mow_v_20_21_filename = File_Names;
                                    obj.mow_v_20_21_filepath = Paths;
                                }
                                if (upload_Count_Value == "2")
                                {
                                    obj.mow_v_21_22_filename = File_Names;
                                    obj.mow_v_21_22_filepath = Paths;
                                }
                                if (upload_Count_Value == "3")
                                {
                                    obj.mow_v_22_23_filename = File_Names;
                                    obj.mow_v_22_23_filepath = Paths;
                                }
                                if (upload_Count_Value == "4")
                                {
                                    obj.mow_v_23_24_filename = File_Names;
                                    obj.mow_v_23_24_filepath = Paths;
                                }
                                if (upload_Count_Value == "5")
                                {
                                    obj.mow_v_24_25_filename = File_Names;
                                    obj.mow_v_24_25_filepath = Paths;
                                }
                                obj.state_name = State;

                                ABE.obj_abhy_dli_one_upload_row7.Add(obj);
                                ABE.SaveChanges();
                                return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                            }

                        }
                        else
                        {
                            return Json("Duplicate data is there");
                        }

                    }
                }
                else
                {
                    return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_upload_row7_download(string Valu)
        {
            if (Session["UserId"] != null)
            {

                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row7.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string mow_v_20_21_filename = Details[0].mow_v_20_21_filename;
                        string mow_v_20_21_filepath = Details[0].mow_v_20_21_filepath;
                        var Paths1 = mow_v_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = mow_v_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_v_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string mow_v_21_22_filename = Details[0].mow_v_21_22_filename;
                        string mow_v_21_22_filepath = Details[0].mow_v_21_22_filepath;
                        var Paths1 = mow_v_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = mow_v_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_v_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string mow_v_22_23_filename = Details[0].mow_v_22_23_filename;
                        string mow_v_22_23_filepath = Details[0].mow_v_22_23_filepath;
                        var Paths1 = mow_v_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = mow_v_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_v_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string mow_v_23_24_filename = Details[0].mow_v_23_24_filename;
                        string mow_v_23_24_filepath = Details[0].mow_v_23_24_filepath;
                        var Paths1 = mow_v_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = mow_v_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_v_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string mow_v_24_25_filename = Details[0].mow_v_24_25_filename;
                        string mow_v_24_25_filepath = Details[0].mow_v_24_25_filepath;
                        var Paths1 = mow_v_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = mow_v_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_v_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli1_7_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_one_upload_row7.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }
        //DLI row 7 ends

        //DLI Row 8 starts
        public ActionResult abhy_dli_one_upload_row8()
        {
            try
            {
                if (Session["UserId"] != null)
                {
                    var State = Session["DLI_State"].ToString();

                    var Details = ABE.obj_abhy_dli_one_upload_row8.Where(x => x.state_name == State).ToList();
                    // string waterlevel_iii_baseline = Request["waterlevel_iii_baseline"];

                    string upload_count = Request["upload_count"];
                    var str = upload_count.Split(',');
                    int ll = str.Length - 1;
                    var upload_Count_Value = str[ll];
                    if (Details.Count == 1)
                    {

                        var Data1 = Details.LastOrDefault();


                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_one_upload_row8();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                   
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                                string allowed_file_format = "xls,xlsx,csv,jpg,pdf";
                                bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                                if (flag == false)
                                {
                                    return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //// D:\Ataljal_grievnce\dli_images
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            //  Data1.waterlevel_iii_baseline = waterlevel_iii_baseline;
                            Data1.state_name = State;
                            if (upload_Count_Value == "1")
                            {
                                var Filename = Data1.mow_vi_20_21_filename;
                                var FilePath1 = Data1.mow_vi_20_21_filepath;
                                Data1.mow_vi_20_21_filename = Filename + ',' + File_Names;
                                Data1.mow_vi_20_21_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                var Filename = Data1.mow_vi_21_22_filename;
                                var FilePath1 = Data1.mow_vi_21_22_filepath;
                                Data1.mow_vi_21_22_filename = Filename + ',' + File_Names;
                                Data1.mow_vi_21_22_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                var Filename = Data1.mow_vi_22_23_filename;
                                var FilePath1 = Data1.mow_vi_22_23_filepath;
                                Data1.mow_vi_22_23_filename = Filename + ',' + File_Names;
                                Data1.mow_vi_22_23_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                var Filename = Data1.mow_vi_23_24_filename;
                                var FilePath1 = Data1.mow_vi_23_24_filepath;
                                Data1.mow_vi_23_24_filename = Filename + ',' + File_Names;
                                Data1.mow_vi_23_24_filepath = FilePath1 + ',' + Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                var Filename = Data1.mow_vi_24_25_filename;
                                var FilePath1 = Data1.mow_vi_24_25_filepath;
                                Data1.mow_vi_24_25_filename = Filename + ',' + File_Names;
                                Data1.mow_vi_24_25_filepath = FilePath1 + ',' + Paths;
                            }

                            ABE.Entry(Data1).State = EntityState.Modified;
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }
                    }
                    else
                    {

                        if (Details.Count == 0)
                        {
                            HttpFileCollectionBase files = Request.Files;
                            var obj = new abhy_dli_one_upload_row8();
                            string Paths = "";
                            string File_Names = "";
                            if (files.Count == 0)
                            {
                                return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                            }
                            else
                            {

                                for (int i = 0; i < files.Count; i++)
                                {

                                    HttpPostedFileBase file = files[i];
                                    string fname;
                                    // Checking for Internet Explorer      
                                    if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                    {
                                        string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                        fname = testfiles[testfiles.Length - 1];
                                        string name = Path.GetFileNameWithoutExtension(fname);
                                        string ext = Path.GetExtension(fname);
                                        fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                    }
                                    else
                                    {
                                        
                                        string name = Path.GetFileNameWithoutExtension(file.FileName);
                                        string ext = Path.GetExtension(file.FileName);
                                        fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                    }
                                    // Get the complete folder path and store the file inside it.      
                                    //string path = @"D:\Ataljal_grievnce\";
                                    //path = path + fname;
                                    //string[] count = file.FileName.Split('.');
                                    //if (count.Length != 2)
                                    //{
                                    //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    //}
                                    //file.SaveAs(path);
                                    //// Get the complete folder path and store the file inside it.      
                                    ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                    //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                    //Paths = MainPath + ',';
                                    ////file.SaveAs(fname);
                                    //File_Names = file.FileName + ',';
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                    if (!Directory.Exists(path))
                                    {
                                        Directory.CreateDirectory(path);
                                    }
                                    path = path + fname;
                                    string[] count = fname.Split('.');
                                    if (count.Length != 2)
                                    {
                                        return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                    }
                                    file.SaveAs(path);


                                    var MainPath = "/Ataljalimages/" + fname;
                                    Paths = MainPath + ',';
                                    File_Names = fname + ',';
                                }

                                // obj.waterlevel_iii_baseline = waterlevel_iii_baseline;
                                obj.state_name = State;
                                if (upload_Count_Value == "1")
                                {
                                    obj.mow_vi_20_21_filename = File_Names;
                                    obj.mow_vi_20_21_filepath = Paths;
                                }
                                if (upload_Count_Value == "2")
                                {
                                    obj.mow_vi_21_22_filename = File_Names;
                                    obj.mow_vi_21_22_filepath = Paths;
                                }
                                if (upload_Count_Value == "3")
                                {
                                    obj.mow_vi_22_23_filename = File_Names;
                                    obj.mow_vi_22_23_filepath = Paths;
                                }
                                if (upload_Count_Value == "4")
                                {
                                    obj.mow_vi_23_24_filename = File_Names;
                                    obj.mow_vi_23_24_filepath = Paths;
                                }
                                if (upload_Count_Value == "5")
                                {
                                    obj.mow_vi_24_25_filename = File_Names;
                                    obj.mow_vi_24_25_filepath = Paths;
                                }
                                obj.state_name = State;

                                ABE.obj_abhy_dli_one_upload_row8.Add(obj);
                                ABE.SaveChanges();
                                return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                            }

                        }
                        else
                        {
                            return Json("Duplicate Data is there");
                        }

                    }
                }
                else
                {
                    return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_upload_row8_download(string Valu)
        {
            if (Session["UserId"] != null)
            {

                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_one_upload_row8.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string mow_vi_20_21_filename = Details[0].mow_vi_20_21_filename;
                        string mow_vi_20_21_filepath = Details[0].mow_vi_20_21_filepath;
                        var Paths1 = mow_vi_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = mow_vi_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_vi_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string mow_vi_21_22_filename = Details[0].mow_vi_21_22_filename;
                        string mow_vi_21_22_filepath = Details[0].mow_vi_21_22_filepath;
                        var Paths1 = mow_vi_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = mow_vi_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_vi_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string mow_vi_22_23_filename = Details[0].mow_vi_22_23_filename;
                        string mow_vi_22_23_filepath = Details[0].mow_vi_22_23_filepath;
                        var Paths1 = mow_vi_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = mow_vi_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_vi_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string mow_vi_23_24_filename = Details[0].mow_vi_23_24_filename;
                        string mow_vi_23_24_filepath = Details[0].mow_vi_23_24_filepath;
                        var Paths1 = mow_vi_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = mow_vi_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_vi_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string mow_vi_24_25_filename = Details[0].mow_vi_24_25_filename;
                        string mow_vi_24_25_filepath = Details[0].mow_vi_24_25_filepath;
                        var Paths1 = mow_vi_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = mow_vi_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = mow_vi_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli1_8_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_one_upload_row8.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }
        //DLI row 8 ends

        //upload rows dli 1 getting controllers
        [HttpGet]
        public ActionResult abhy_dli_one_one_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_one_two_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row2.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_one_three_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row3.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_one_four_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_one_upload_row4.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_one_five_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row5.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_one_six_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row6.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_one_seven_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row7.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_one_eigth_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_one_upload_row8.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        //Dli2
        [HttpGet]
        public ActionResult Dli_2_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.objabhy_dli_two.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }
        [HttpPost]
        public ActionResult DLI_2_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_dli_two>(Data);
                var StateName = result.state_name;

                var Data1 = ABE.objabhy_dli_two.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count == 1)
                {

                    var Data2 = Data1.SingleOrDefault();
                    Data2.state_name = StateName;
                    Data2.userid = Convert.ToInt32(Session["UserId"]);
                    Data2.waterbudgets_i_baseline = result.waterbudgets_i_baseline;
                    Data2.waterbudgets_i_20_21 = result.waterbudgets_i_20_21;
                    Data2.waterbudgets_i_21_22 = result.waterbudgets_i_21_22;
                    Data2.waterbudgets_i_22_23 = result.waterbudgets_i_22_23;
                    Data2.waterbudgets_i_23_24 = result.waterbudgets_i_23_24;
                    Data2.waterbudgets_i_24_25 = result.waterbudgets_i_24_25;
                    Data2.waterbudgets_i_cumulative = result.waterbudgets_i_cumulative;
                    Data2.waterbudgets_i_disbursible = result.waterbudgets_i_disbursible;

                    Data2.wsp_i_baseline = result.wsp_i_baseline;
                    Data2.wsp_i_20_21 = result.wsp_i_20_21;
                    Data2.wsp_i_21_22 = result.wsp_i_21_22;
                    Data2.wsp_i_22_23 = result.wsp_i_22_23;
                    Data2.wsp_i_23_24 = result.wsp_i_23_24;
                    Data2.wsp_i_24_25 = result.wsp_i_24_25;
                    Data2.wsp_i_cumulative = result.wsp_i_cumulative;
                    Data2.wsp_i_disbursible = result.wsp_i_disbursible;

                    Data2.community_i_baseline = result.community_i_baseline;
                    Data2.community_i_20_21 = result.community_i_20_21;
                    Data2.community_i_21_22 = result.community_i_21_22;
                    Data2.community_i_22_23 = result.community_i_22_23;
                    Data2.community_i_23_24 = result.community_i_23_24;
                    Data2.community_i_24_25 = result.community_i_24_25;
                    Data2.community_i_cumulative = result.community_i_cumulative;
                    Data2.community_i_disbursible = result.community_i_disbursible;

                    Data2.community_iii_baseline = result.community_iii_baseline;
                    Data2.community_iii_20_21 = result.community_iii_20_21;
                    Data2.community_iii_21_22 = result.community_iii_21_22;
                    Data2.community_iii_22_23 = result.community_iii_22_23;
                    Data2.community_iii_23_24 = result.community_iii_23_24;
                    Data2.community_iii_24_25 = result.community_iii_24_25;
                    Data2.community_iii_cumulative = result.community_iii_cumulative;
                    Data2.community_iii_disbursible = result.community_iii_disbursible;

                    Data2.community_iv_baseline = result.community_iv_baseline;
                    Data2.community_iv_20_21 = result.community_iv_20_21;
                    Data2.community_iv_21_22 = result.community_iv_21_22;
                    Data2.community_iv_22_23 = result.community_iv_22_23;
                    Data2.community_iv_23_24 = result.community_iv_23_24;
                    Data2.community_iv_24_25 = result.community_iv_24_25;
                    Data2.community_iv_cumulative = result.community_iv_cumulative;
                    Data2.community_iv_disbursible = result.community_iv_disbursible;

                    Data2.community_v_baseline = result.community_v_baseline;
                    Data2.community_v_20_21 = result.community_v_20_21;
                    Data2.community_v_21_22 = result.community_v_21_22;
                    Data2.community_v_22_23 = result.community_v_22_23;
                    Data2.community_v_23_24 = result.community_v_23_24;
                    Data2.community_v_24_25 = result.community_v_24_25;
                    Data2.community_v_cumulative = result.community_v_cumulative;
                    Data2.community_v_disbursible = result.community_v_disbursible;
                    ABE.Entry(Data2).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (Data1.Count == 0)
                    {
                        abhy_dli_two obj = new abhy_dli_two();
                        obj.state_name = StateName;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        obj.waterbudgets_i_baseline = result.waterbudgets_i_baseline;
                        obj.waterbudgets_i_20_21 = result.waterbudgets_i_20_21;
                        obj.waterbudgets_i_21_22 = result.waterbudgets_i_21_22;
                        obj.waterbudgets_i_22_23 = result.waterbudgets_i_22_23;
                        obj.waterbudgets_i_23_24 = result.waterbudgets_i_23_24;
                        obj.waterbudgets_i_24_25 = result.waterbudgets_i_24_25;
                        obj.waterbudgets_i_cumulative = result.waterbudgets_i_cumulative;
                        obj.waterbudgets_i_disbursible = result.waterbudgets_i_disbursible;

                        obj.wsp_i_baseline = result.wsp_i_baseline;
                        obj.wsp_i_20_21 = result.wsp_i_20_21;
                        obj.wsp_i_21_22 = result.wsp_i_21_22;
                        obj.wsp_i_22_23 = result.wsp_i_22_23;
                        obj.wsp_i_23_24 = result.wsp_i_23_24;
                        obj.wsp_i_24_25 = result.wsp_i_24_25;
                        obj.wsp_i_cumulative = result.wsp_i_cumulative;
                        obj.wsp_i_disbursible = result.wsp_i_disbursible;

                        obj.community_i_baseline = result.community_i_baseline;
                        obj.community_i_20_21 = result.community_i_20_21;
                        obj.community_i_21_22 = result.community_i_21_22;
                        obj.community_i_22_23 = result.community_i_22_23;
                        obj.community_i_23_24 = result.community_i_23_24;
                        obj.community_i_24_25 = result.community_i_24_25;
                        obj.community_i_cumulative = result.community_i_cumulative;
                        obj.community_i_disbursible = result.community_i_disbursible;

                        obj.community_iii_baseline = result.community_iii_baseline;
                        obj.community_iii_20_21 = result.community_iii_20_21;
                        obj.community_iii_21_22 = result.community_iii_21_22;
                        obj.community_iii_22_23 = result.community_iii_22_23;
                        obj.community_iii_23_24 = result.community_iii_23_24;
                        obj.community_iii_24_25 = result.community_iii_24_25;
                        obj.community_iii_cumulative = result.community_iii_cumulative;
                        obj.community_iii_disbursible = result.community_iii_disbursible;

                        obj.community_iv_baseline = result.community_iv_baseline;
                        obj.community_iv_20_21 = result.community_iv_20_21;
                        obj.community_iv_21_22 = result.community_iv_21_22;
                        obj.community_iv_22_23 = result.community_iv_22_23;
                        obj.community_iv_23_24 = result.community_iv_23_24;
                        obj.community_iv_24_25 = result.community_iv_24_25;
                        obj.community_iv_cumulative = result.community_iv_cumulative;
                        obj.community_iv_disbursible = result.community_iv_disbursible;

                        obj.community_v_baseline = result.community_v_baseline;
                        obj.community_v_20_21 = result.community_v_20_21;
                        obj.community_v_21_22 = result.community_v_21_22;
                        obj.community_v_22_23 = result.community_v_22_23;
                        obj.community_v_23_24 = result.community_v_23_24;
                        obj.community_v_24_25 = result.community_v_24_25;
                        obj.community_v_cumulative = result.community_v_cumulative;
                        obj.community_v_disbursible = result.community_v_disbursible;
                        ABE.objabhy_dli_two.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate data is there");
                    }

                }


            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_two_upload_row1()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row1.Where(x => x.state_name == StateName).ToList();
                //string waterbudgets_ii_baseline = Request["waterbudgets_ii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_two_upload_row1();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                               
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.waterbudgets_ii_baseline = waterbudgets_ii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.waterbudgets_ii_20_21_filename;
                            var FilePath1 = Data1.waterbudgets_ii_20_21_filepath;
                            Data1.waterbudgets_ii_20_21_filename = Filename + ',' + File_Names;
                            Data1.waterbudgets_ii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.waterbudgets_ii_21_22_filename;
                            var FilePath1 = Data1.waterbudgets_ii_21_22_filepath;
                            Data1.waterbudgets_ii_21_22_filename = Filename + ',' + File_Names;
                            Data1.waterbudgets_ii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.waterbudgets_ii_22_23_filename;
                            var FilePath1 = Data1.waterbudgets_ii_22_23_filepath;
                            Data1.waterbudgets_ii_22_23_filename = Filename + ',' + File_Names;
                            Data1.waterbudgets_ii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.waterbudgets_ii_23_24_filename;
                            var FilePath1 = Data1.waterbudgets_ii_23_24_filepath;
                            Data1.waterbudgets_ii_23_24_filename = Filename + ',' + File_Names;
                            Data1.waterbudgets_ii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.waterbudgets_ii_24_25_filename;
                            var FilePath1 = Data1.waterbudgets_ii_24_25_filepath;
                            Data1.waterbudgets_ii_24_25_filename = Filename + ',' + File_Names;
                            Data1.waterbudgets_ii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {

                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_two_upload_row1();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                   
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.waterbudgets_ii_baseline = waterbudgets_ii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.waterbudgets_ii_20_21_filename = File_Names;
                                obj.waterbudgets_ii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.waterbudgets_ii_21_22_filename = File_Names;
                                obj.waterbudgets_ii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.waterbudgets_ii_22_23_filename = File_Names;
                                obj.waterbudgets_ii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.waterbudgets_ii_23_24_filename = File_Names;
                                obj.waterbudgets_ii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.waterbudgets_ii_24_25_filename = File_Names;
                                obj.waterbudgets_ii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_two_upload_row1.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult abhy_dli_two_upload_row1_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row1.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string waterbudgets_ii_20_21_filepath = Details[0].waterbudgets_ii_20_21_filepath;
                        string waterbudgets_ii_20_21_filename = Details[0].waterbudgets_ii_20_21_filename;
                        var Paths1 = waterbudgets_ii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = waterbudgets_ii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterbudgets_ii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string waterbudgets_ii_21_22_filepath = Details[0].waterbudgets_ii_21_22_filepath;
                        string waterbudgets_ii_21_22_filename = Details[0].waterbudgets_ii_21_22_filename;
                        var Paths1 = waterbudgets_ii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = waterbudgets_ii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterbudgets_ii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string waterbudgets_ii_22_23_filepath = Details[0].waterbudgets_ii_22_23_filepath;
                        string waterbudgets_ii_22_23_filename = Details[0].waterbudgets_ii_22_23_filename;
                        var Paths1 = waterbudgets_ii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = waterbudgets_ii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterbudgets_ii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string waterbudgets_ii_23_24_filepath = Details[0].waterbudgets_ii_23_24_filepath;
                        string waterbudgets_ii_23_24_filename = Details[0].waterbudgets_ii_23_24_filename;
                        var Paths1 = waterbudgets_ii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = waterbudgets_ii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterbudgets_ii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string waterbudgets_ii_24_25_filepath = Details[0].waterbudgets_ii_24_25_filepath;
                        string waterbudgets_ii_24_25_filename = Details[0].waterbudgets_ii_24_25_filename;
                        var Paths1 = waterbudgets_ii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = waterbudgets_ii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = waterbudgets_ii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli2_1_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_two_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_two_upload_row2()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row2.Where(x => x.state_name == StateName).ToList();
                // string wsp_ii_baseline = Request["wsp_ii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_two_upload_row1();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                                
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.wsp_ii_baseline = wsp_ii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.wsp_ii_20_21_filename;
                            var FilePath1 = Data1.wsp_ii_20_21_filepath;
                            Data1.wsp_ii_20_21_filename = Filename + ',' + File_Names;
                            Data1.wsp_ii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.wsp_ii_21_22_filename;
                            var FilePath1 = Data1.wsp_ii_21_22_filepath;
                            Data1.wsp_ii_21_22_filename = Filename + ',' + File_Names;
                            Data1.wsp_ii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.wsp_ii_22_23_filename;
                            var FilePath1 = Data1.wsp_ii_22_23_filepath;
                            Data1.wsp_ii_22_23_filename = Filename + ',' + File_Names;
                            Data1.wsp_ii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.wsp_ii_23_24_filename;
                            var FilePath1 = Data1.wsp_ii_23_24_filepath;
                            Data1.wsp_ii_23_24_filename = Filename + ',' + File_Names;
                            Data1.wsp_ii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.wsp_ii_24_25_filename;
                            var FilePath1 = Data1.wsp_ii_24_25_filepath;
                            Data1.wsp_ii_24_25_filename = Filename + ',' + File_Names;
                            Data1.wsp_ii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_two_upload_row2();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.wsp_ii_baseline = wsp_ii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.wsp_ii_20_21_filename = File_Names;
                                obj.wsp_ii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.wsp_ii_21_22_filename = File_Names;
                                obj.wsp_ii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.wsp_ii_22_23_filename = File_Names;
                                obj.wsp_ii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.wsp_ii_23_24_filename = File_Names;
                                obj.wsp_ii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.wsp_ii_24_25_filename = File_Names;
                                obj.wsp_ii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_two_upload_row2.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_two_upload_row2_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row2.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string wsp_ii_20_21_filepath = Details[0].wsp_ii_20_21_filepath;
                        string wsp_ii_20_21_filename = Details[0].wsp_ii_20_21_filename;
                        var Paths1 = wsp_ii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = wsp_ii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = wsp_ii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string wsp_ii_21_22_filepath = Details[0].wsp_ii_21_22_filepath;
                        string wsp_ii_21_22_filename = Details[0].wsp_ii_21_22_filename;
                        var Paths1 = wsp_ii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = wsp_ii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = wsp_ii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string wsp_ii_22_23_filepath = Details[0].wsp_ii_22_23_filepath;
                        string wsp_ii_22_23_filename = Details[0].wsp_ii_22_23_filename;
                        var Paths1 = wsp_ii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = wsp_ii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = wsp_ii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string wsp_ii_23_24_filepath = Details[0].wsp_ii_23_24_filepath;
                        string wsp_ii_23_24_filename = Details[0].wsp_ii_23_24_filename;
                        var Paths1 = wsp_ii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = wsp_ii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = wsp_ii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string wsp_ii_24_25_filepath = Details[0].wsp_ii_24_25_filepath;
                        string wsp_ii_24_25_filename = Details[0].wsp_ii_24_25_filename;
                        var Paths1 = wsp_ii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = wsp_ii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = wsp_ii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli2_2_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_two_upload_row2.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_two_upload_row3()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row3.Where(x => x.state_name == StateName).ToList();
                //string community_ii_baseline = Request["community_ii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_two_upload_row3();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "doc,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.community_ii_baseline = community_ii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.community_ii_20_21_filename;
                            var FilePath1 = Data1.community_ii_20_21_filepath;
                            Data1.community_ii_20_21_filename = Filename + ',' + File_Names;
                            Data1.community_ii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.community_ii_21_22_filename;
                            var FilePath1 = Data1.community_ii_21_22_filepath;
                            Data1.community_ii_21_22_filename = Filename + ',' + File_Names;
                            Data1.community_ii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.community_ii_22_23_filename;
                            var FilePath1 = Data1.community_ii_22_23_filepath;
                            Data1.community_ii_22_23_filename = Filename + ',' + File_Names;
                            Data1.community_ii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.community_ii_23_24_filename;
                            var FilePath1 = Data1.community_ii_23_24_filepath;
                            Data1.community_ii_23_24_filename = Filename + ',' + File_Names;
                            Data1.community_ii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.community_ii_24_25_filename;
                            var FilePath1 = Data1.community_ii_24_25_filepath;
                            Data1.community_ii_24_25_filename = Filename + ',' + File_Names;
                            Data1.community_ii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {

                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_two_upload_row3();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.community_ii_baseline = community_ii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.community_ii_20_21_filename = File_Names;
                                obj.community_ii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.community_ii_21_22_filename = File_Names;
                                obj.community_ii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.community_ii_22_23_filename = File_Names;
                                obj.community_ii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.community_ii_23_24_filename = File_Names;
                                obj.community_ii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.community_ii_24_25_filename = File_Names;
                                obj.community_ii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_two_upload_row3.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_two_upload_row3_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row3.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string community_ii_20_21_filepath = Details[0].community_ii_20_21_filepath;
                        string community_ii_20_21_filename = Details[0].community_ii_20_21_filename;
                        var Paths1 = community_ii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = community_ii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_ii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string community_ii_21_22_filepath = Details[0].community_ii_21_22_filepath;
                        string community_ii_21_22_filename = Details[0].community_ii_21_22_filename;
                        var Paths1 = community_ii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = community_ii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_ii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string community_ii_22_23_filepath = Details[0].community_ii_22_23_filepath;
                        string community_ii_22_23_filename = Details[0].community_ii_22_23_filename;
                        var Paths1 = community_ii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = community_ii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_ii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string community_ii_23_24_filepath = Details[0].community_ii_23_24_filepath;
                        string community_ii_23_24_filename = Details[0].community_ii_23_24_filename;
                        var Paths1 = community_ii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = community_ii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_ii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string community_ii_24_25_filepath = Details[0].community_ii_24_25_filepath;
                        string community_ii_24_25_filename = Details[0].community_ii_24_25_filename;
                        var Paths1 = community_ii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = community_ii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_ii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli2_3_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_two_upload_row3.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_two_upload_row4()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row4.Where(x => x.state_name == StateName).ToList();
                //string community_vi_baseline = Request["community_vi_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_two_upload_row4();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                                
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "doc,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.community_vi_baseline = community_vi_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.community_vi_20_21_filename;
                            var FilePath1 = Data1.community_vi_20_21_filepath;
                            Data1.community_vi_20_21_filename = Filename + ',' + File_Names;
                            Data1.community_vi_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.community_vi_21_22_filename;
                            var FilePath1 = Data1.community_vi_21_22_filepath;
                            Data1.community_vi_21_22_filename = Filename + ',' + File_Names;
                            Data1.community_vi_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.community_vi_22_23_filename;
                            var FilePath1 = Data1.community_vi_22_23_filepath;
                            Data1.community_vi_22_23_filename = Filename + ',' + File_Names;
                            Data1.community_vi_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.community_vi_23_24_filename;
                            var FilePath1 = Data1.community_vi_23_24_filepath;
                            Data1.community_vi_23_24_filename = Filename + ',' + File_Names;
                            Data1.community_vi_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.community_vi_24_25_filename;
                            var FilePath1 = Data1.community_vi_24_25_filepath;
                            Data1.community_vi_24_25_filename = Filename + ',' + File_Names;
                            Data1.community_vi_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_two_upload_row4();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            //obj.community_vi_baseline = community_vi_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.community_vi_20_21_filename = File_Names;
                                obj.community_vi_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.community_vi_21_22_filename = File_Names;
                                obj.community_vi_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.community_vi_22_23_filename = File_Names;
                                obj.community_vi_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.community_vi_23_24_filename = File_Names;
                                obj.community_vi_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.community_vi_24_25_filename = File_Names;
                                obj.community_vi_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_two_upload_row4.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }


                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_two_upload_row4_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_two_upload_row4.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string community_vi_20_21_filepath = Details[0].community_vi_20_21_filepath;
                        string community_vi_20_21_filename = Details[0].community_vi_20_21_filename;
                        var Paths1 = community_vi_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = community_vi_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_vi_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string community_vi_21_22_filepath = Details[0].community_vi_21_22_filepath;
                        string community_vi_21_22_filename = Details[0].community_vi_21_22_filename;
                        var Paths1 = community_vi_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = community_vi_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_vi_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string community_vi_22_23_filepath = Details[0].community_vi_22_23_filepath;
                        string community_vi_22_23_filename = Details[0].community_vi_22_23_filename;
                        var Paths1 = community_vi_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = community_vi_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_vi_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string community_vi_23_24_filepath = Details[0].community_vi_23_24_filepath;
                        string community_vi_23_24_filename = Details[0].community_vi_23_24_filename;
                        var Paths1 = community_vi_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = community_vi_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_vi_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string community_vi_24_25_filepath = Details[0].community_vi_24_25_filepath;
                        string community_vi_24_25_filename = Details[0].community_vi_24_25_filename;
                        var Paths1 = community_vi_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = community_vi_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = community_vi_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli2_4_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_two_upload_row4.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        //upload rows dli 2 getting controllers
        [HttpGet]
        public ActionResult abhy_dli_two_one_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_two_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_two_two_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_two_upload_row2.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_two_three_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_two_upload_row3.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_two_four_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_two_upload_row4.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }



        [HttpGet]
        public ActionResult Dli_3_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.objabhy_dli_three.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult DLI_3_Info(string Data)
        {
            if (Session["UserId"] != null)

            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_dli_three>(Data);
                var StateName = result.state_name;

                var Data1 = ABE.objabhy_dli_three.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count == 1)
                {

                    var Data2 = Data1.SingleOrDefault();
                    abhy_dli_three obj = new abhy_dli_three();
                    Data2.state_name = StateName;
                    Data2.userid = Convert.ToInt32(Session["UserId"]);
                    Data2.statelevel_i_baseline = result.statelevel_i_baseline;
                    Data2.statelevel_i_20_21 = result.statelevel_i_20_21;
                    Data2.statelevel_i_21_22 = result.statelevel_i_21_22;
                    Data2.statelevel_i_22_23 = result.statelevel_i_22_23;
                    Data2.statelevel_i_23_24 = result.statelevel_i_23_24;
                    Data2.statelevel_i_24_25 = result.statelevel_i_24_25;
                    Data2.statelevel_i_cumulative = result.statelevel_i_cumulative;
                    Data2.statelevel_i_disbursible = result.statelevel_i_disbursible;

                    Data2.statelevel_iii_baseline = result.statelevel_iii_baseline;
                    Data2.statelevel_iii_20_21 = result.statelevel_iii_20_21;
                    Data2.statelevel_iii_21_22 = result.statelevel_iii_21_22;
                    Data2.statelevel_iii_22_23 = result.statelevel_iii_22_23;
                    Data2.statelevel_iii_23_24 = result.statelevel_iii_23_24;
                    Data2.statelevel_iii_24_25 = result.statelevel_iii_24_25;
                    Data2.statelevel_iii_cumulative = result.statelevel_iii_cumulative;
                    Data2.statelevel_iii_disbursible = result.statelevel_iii_disbursible;
                    ABE.Entry(Data2).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");

                }
                else
                {
                    if (Data1.Count == 0)
                    {
                        abhy_dli_three obj = new abhy_dli_three();
                        obj.state_name = StateName;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        obj.statelevel_i_baseline = result.statelevel_i_baseline;
                        obj.statelevel_i_20_21 = result.statelevel_i_20_21;
                        obj.statelevel_i_21_22 = result.statelevel_i_21_22;
                        obj.statelevel_i_22_23 = result.statelevel_i_22_23;
                        obj.statelevel_i_23_24 = result.statelevel_i_23_24;
                        obj.statelevel_i_24_25 = result.statelevel_i_24_25;
                        obj.statelevel_i_cumulative = result.statelevel_i_cumulative;
                        obj.statelevel_i_disbursible = result.statelevel_i_disbursible;

                        obj.statelevel_iii_baseline = result.statelevel_iii_baseline;
                        obj.statelevel_iii_20_21 = result.statelevel_iii_20_21;
                        obj.statelevel_iii_21_22 = result.statelevel_iii_21_22;
                        obj.statelevel_iii_22_23 = result.statelevel_iii_22_23;
                        obj.statelevel_iii_23_24 = result.statelevel_iii_23_24;
                        obj.statelevel_iii_24_25 = result.statelevel_iii_24_25;
                        obj.statelevel_iii_cumulative = result.statelevel_iii_cumulative;
                        obj.statelevel_iii_disbursible = result.statelevel_iii_disbursible;
                        ABE.objabhy_dli_three.Add(obj);
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
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }



        }


        public ActionResult abhy_dli_three_upload_row1()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_three_upload_row1.Where(x => x.state_name == StateName).ToList();
                // string statelevel_ii_baseline = Request["statelevel_ii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_three_upload_row1();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                              
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "xls,xlsx,csv,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.statelevel_ii_baseline = statelevel_ii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.statelevel_ii_20_21_filename;
                            var FilePath1 = Data1.statelevel_ii_20_21_filepath;
                            Data1.statelevel_ii_20_21_filename = Filename + ',' + File_Names;
                            Data1.statelevel_ii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.statelevel_ii_21_22_filename;
                            var FilePath1 = Data1.statelevel_ii_21_22_filepath;
                            Data1.statelevel_ii_21_22_filename = Filename + ',' + File_Names;
                            Data1.statelevel_ii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.statelevel_ii_22_23_filename;
                            var FilePath1 = Data1.statelevel_ii_22_23_filepath;
                            Data1.statelevel_ii_22_23_filename = Filename + ',' + File_Names;
                            Data1.statelevel_ii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.statelevel_ii_23_24_filename;
                            var FilePath1 = Data1.statelevel_ii_23_24_filepath;
                            Data1.statelevel_ii_23_24_filename = Filename + ',' + File_Names;
                            Data1.statelevel_ii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.statelevel_ii_24_25_filename;
                            var FilePath1 = Data1.statelevel_ii_24_25_filepath;
                            Data1.statelevel_ii_24_25_filename = Filename + ',' + File_Names;
                            Data1.statelevel_ii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_three_upload_row1();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.statelevel_ii_baseline = statelevel_ii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.statelevel_ii_20_21_filename = File_Names;
                                obj.statelevel_ii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.statelevel_ii_21_22_filename = File_Names;
                                obj.statelevel_ii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.statelevel_ii_22_23_filename = File_Names;
                                obj.statelevel_ii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.statelevel_ii_23_24_filename = File_Names;
                                obj.statelevel_ii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.statelevel_ii_24_25_filename = File_Names;
                                obj.statelevel_ii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_three_upload_row1.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_three_upload_row1_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_three_upload_row1.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string statelevel_ii_20_21_filepath = Details[0].statelevel_ii_20_21_filepath;
                        string statelevel_ii_20_21_filename = Details[0].statelevel_ii_20_21_filename;
                        var Paths1 = statelevel_ii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = statelevel_ii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statelevel_ii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string statelevel_ii_21_22_filepath = Details[0].statelevel_ii_21_22_filepath;
                        string statelevel_ii_21_22_filename = Details[0].statelevel_ii_21_22_filename;
                        var Paths1 = statelevel_ii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = statelevel_ii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statelevel_ii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string statelevel_ii_22_23_filepath = Details[0].statelevel_ii_22_23_filepath;
                        string statelevel_ii_22_23_filename = Details[0].statelevel_ii_22_23_filename;
                        var Paths1 = statelevel_ii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = statelevel_ii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statelevel_ii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string statelevel_ii_23_24_filepath = Details[0].statelevel_ii_23_24_filepath;
                        string statelevel_ii_23_24_filename = Details[0].statelevel_ii_23_24_filename;
                        var Paths1 = statelevel_ii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = statelevel_ii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statelevel_ii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string statelevel_ii_24_25_filepath = Details[0].statelevel_ii_24_25_filepath;
                        string statelevel_ii_24_25_filename = Details[0].statelevel_ii_24_25_filename;
                        var Paths1 = statelevel_ii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = statelevel_ii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = statelevel_ii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli3_1_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_three_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        //upload rows dli 3 getting controllers
        [HttpGet]
        public ActionResult abhy_dli_three_one_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_three_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli_4_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.objabhy_dli_four.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult DLI_4_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_dli_four>(Data);
                var StateName = result.state_name;

                var Data1 = ABE.objabhy_dli_four.Where(x => x.state_name == StateName).ToList();

                if (Data1.Count == 1)
                {
                    var Data2 = Data1.SingleOrDefault();

                    abhy_dli_four obj = new abhy_dli_four();
                    Data2.state_name = StateName;
                    Data2.userid = Convert.ToInt32(Session["UserId"]);

                    Data2.irrigation_i_baseline = result.irrigation_i_baseline;
                    Data2.irrigation_i_20_21 = result.irrigation_i_20_21;
                    Data2.irrigation_i_21_22 = result.irrigation_i_21_22;
                    Data2.irrigation_i_22_23 = result.irrigation_i_22_23;
                    Data2.irrigation_i_23_24 = result.irrigation_i_23_24;
                    Data2.irrigation_i_24_25 = result.irrigation_i_24_25;
                    Data2.irrigation_i_cumulative = result.irrigation_i_cumulative;
                    Data2.irrigation_i_disbursible = result.irrigation_i_disbursible;

                    Data2.irrigation_ii_baseline = result.irrigation_ii_baseline;
                    Data2.irrigation_ii_20_21 = result.irrigation_ii_20_21;
                    Data2.irrigation_ii_21_22 = result.irrigation_ii_21_22;
                    Data2.irrigation_ii_22_23 = result.irrigation_ii_22_23;
                    Data2.irrigation_ii_23_24 = result.irrigation_ii_23_24;
                    Data2.irrigation_ii_24_25 = result.irrigation_ii_24_25;
                    Data2.irrigation_ii_cumulative = result.irrigation_ii_cumulative;
                    Data2.irrigation_ii_disbursible = result.irrigation_ii_disbursible;

                    Data2.cropping_i_baseline = result.cropping_i_baseline;
                    Data2.cropping_i_20_21 = result.cropping_i_20_21;
                    Data2.cropping_i_21_22 = result.cropping_i_21_22;
                    Data2.cropping_i_22_23 = result.cropping_i_22_23;
                    Data2.cropping_i_23_24 = result.cropping_i_23_24;
                    Data2.cropping_i_24_25 = result.cropping_i_24_25;
                    Data2.cropping_i_cumulative = result.cropping_i_cumulative;
                    Data2.cropping_i_disbursible = result.cropping_i_disbursible;

                    Data2.cropping_ii_baseline = result.cropping_ii_baseline;
                    Data2.cropping_ii_20_21 = result.cropping_ii_20_21;
                    Data2.cropping_ii_21_22 = result.cropping_ii_21_22;
                    Data2.cropping_ii_22_23 = result.cropping_ii_22_23;
                    Data2.cropping_ii_23_24 = result.cropping_ii_23_24;
                    Data2.cropping_ii_24_25 = result.cropping_ii_24_25;
                    Data2.cropping_ii_cumulative = result.cropping_ii_cumulative;
                    Data2.cropping_ii_disbursible = result.cropping_ii_disbursible;

                    Data2.cropping_iii_baseline = result.cropping_iii_baseline;
                    Data2.cropping_iii_20_21 = result.cropping_iii_20_21;
                    Data2.cropping_iii_21_22 = result.cropping_iii_21_22;
                    Data2.cropping_iii_22_23 = result.cropping_iii_22_23;
                    Data2.cropping_iii_23_24 = result.cropping_iii_23_24;
                    Data2.cropping_iii_24_25 = result.cropping_iii_24_25;
                    Data2.cropping_iii_cumulative = result.cropping_iii_cumulative;
                    Data2.cropping_iii_disbursible = result.cropping_iii_disbursible;
                    Data2.cropping_iv_baseline = result.cropping_iv_baseline;
                    Data2.cropping_iv_20_21 = result.cropping_iv_20_21;
                    Data2.cropping_iv_21_22 = result.cropping_iv_21_22;
                    Data2.cropping_iv_22_23 = result.cropping_iv_22_23;
                    Data2.cropping_iv_23_24 = result.cropping_iv_23_24;
                    Data2.cropping_iv_24_25 = result.cropping_iv_24_25;
                    Data2.cropping_iv_cumulative = result.cropping_iv_cumulative;
                    Data2.cropping_iv_disbursible = result.cropping_iv_disbursible;
                    Data2.electricity_i_baseline = result.electricity_i_baseline;
                    Data2.electricity_i_20_21 = result.electricity_i_20_21;
                    Data2.electricity_i_21_22 = result.electricity_i_21_22;
                    Data2.electricity_i_22_23 = result.electricity_i_22_23;
                    Data2.electricity_i_23_24 = result.electricity_i_23_24;
                    Data2.electricity_i_24_25 = result.electricity_i_24_25;
                    Data2.electricity_i_cumulative = result.electricity_i_cumulative;
                    Data2.electricity_i_disbursible = result.electricity_i_disbursible;

                    ABE.Entry(Data2).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (Data1.Count == 0)
                    {
                        abhy_dli_four obj = new abhy_dli_four();
                        obj.state_name = StateName;
                        obj.userid = Convert.ToInt32(Session["UserId"]);

                        obj.irrigation_i_baseline = result.irrigation_i_baseline;
                        obj.irrigation_i_20_21 = result.irrigation_i_20_21;
                        obj.irrigation_i_21_22 = result.irrigation_i_21_22;
                        obj.irrigation_i_22_23 = result.irrigation_i_22_23;
                        obj.irrigation_i_23_24 = result.irrigation_i_23_24;
                        obj.irrigation_i_24_25 = result.irrigation_i_24_25;
                        obj.irrigation_i_cumulative = result.irrigation_i_cumulative;
                        obj.irrigation_i_disbursible = result.irrigation_i_disbursible;

                        obj.irrigation_ii_baseline = result.irrigation_ii_baseline;
                        obj.irrigation_ii_20_21 = result.irrigation_ii_20_21;
                        obj.irrigation_ii_21_22 = result.irrigation_ii_21_22;
                        obj.irrigation_ii_22_23 = result.irrigation_ii_22_23;
                        obj.irrigation_ii_23_24 = result.irrigation_ii_23_24;
                        obj.irrigation_ii_24_25 = result.irrigation_ii_24_25;
                        obj.irrigation_ii_cumulative = result.irrigation_ii_cumulative;
                        obj.irrigation_ii_disbursible = result.irrigation_ii_disbursible;

                        obj.cropping_i_baseline = result.cropping_i_baseline;
                        obj.cropping_i_20_21 = result.cropping_i_20_21;
                        obj.cropping_i_21_22 = result.cropping_i_21_22;
                        obj.cropping_i_22_23 = result.cropping_i_22_23;
                        obj.cropping_i_23_24 = result.cropping_i_23_24;
                        obj.cropping_i_24_25 = result.cropping_i_24_25;
                        obj.cropping_i_cumulative = result.cropping_i_cumulative;
                        obj.cropping_i_disbursible = result.cropping_i_disbursible;

                        obj.cropping_ii_baseline = result.cropping_ii_baseline;
                        obj.cropping_ii_20_21 = result.cropping_ii_20_21;
                        obj.cropping_ii_21_22 = result.cropping_ii_21_22;
                        obj.cropping_ii_22_23 = result.cropping_ii_22_23;
                        obj.cropping_ii_23_24 = result.cropping_ii_23_24;
                        obj.cropping_ii_24_25 = result.cropping_ii_24_25;
                        obj.cropping_ii_cumulative = result.cropping_ii_cumulative;
                        obj.cropping_ii_disbursible = result.cropping_ii_disbursible;

                        obj.cropping_iii_baseline = result.cropping_iii_baseline;
                        obj.cropping_iii_20_21 = result.cropping_iii_20_21;
                        obj.cropping_iii_21_22 = result.cropping_iii_21_22;
                        obj.cropping_iii_22_23 = result.cropping_iii_22_23;
                        obj.cropping_iii_23_24 = result.cropping_iii_23_24;
                        obj.cropping_iii_24_25 = result.cropping_iii_24_25;
                        obj.cropping_iii_cumulative = result.cropping_iii_cumulative;
                        obj.cropping_iii_disbursible = result.cropping_iii_disbursible;
                        obj.cropping_iv_baseline = result.cropping_iv_baseline;
                        obj.cropping_iv_20_21 = result.cropping_iv_20_21;
                        obj.cropping_iv_21_22 = result.cropping_iv_21_22;
                        obj.cropping_iv_22_23 = result.cropping_iv_22_23;
                        obj.cropping_iv_23_24 = result.cropping_iv_23_24;
                        obj.cropping_iv_24_25 = result.cropping_iv_24_25;
                        obj.cropping_iv_cumulative = result.cropping_iv_cumulative;
                        obj.cropping_iv_disbursible = result.cropping_iv_disbursible;
                        obj.electricity_i_baseline = result.electricity_i_baseline;
                        obj.electricity_i_20_21 = result.electricity_i_20_21;
                        obj.electricity_i_21_22 = result.electricity_i_21_22;
                        obj.electricity_i_22_23 = result.electricity_i_22_23;
                        obj.electricity_i_23_24 = result.electricity_i_23_24;
                        obj.electricity_i_24_25 = result.electricity_i_24_25;
                        obj.electricity_i_cumulative = result.electricity_i_cumulative;
                        obj.electricity_i_disbursible = result.electricity_i_disbursible;

                        ABE.objabhy_dli_four.Add(obj);
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
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }


        }

        public ActionResult abhy_dli_four_upload_row1()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_four_upload_row1.Where(x => x.state_name == StateName).ToList();
                //string irrigation_iii_baseline = Request["irrigation_iii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_four_upload_row1();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                              
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "xls,xlsx,csv,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.irrigation_iii_baseline = irrigation_iii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.irrigation_iii_20_21_filename;
                            var FilePath1 = Data1.irrigation_iii_20_21_filepath;
                            Data1.irrigation_iii_20_21_filename = Filename + ',' + File_Names;
                            Data1.irrigation_iii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.irrigation_iii_21_22_filename;
                            var FilePath1 = Data1.irrigation_iii_21_22_filepath;
                            Data1.irrigation_iii_21_22_filename = Filename + ',' + File_Names;
                            Data1.irrigation_iii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.irrigation_iii_22_23_filename;
                            var FilePath1 = Data1.irrigation_iii_22_23_filepath;
                            Data1.irrigation_iii_22_23_filename = Filename + ',' + File_Names;
                            Data1.irrigation_iii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.irrigation_iii_23_24_filename;
                            var FilePath1 = Data1.irrigation_iii_23_24_filepath;
                            Data1.irrigation_iii_23_24_filename = Filename + ',' + File_Names;
                            Data1.irrigation_iii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.irrigation_iii_24_25_filename;
                            var FilePath1 = Data1.irrigation_iii_24_25_filepath;
                            Data1.irrigation_iii_24_25_filename = Filename + ',' + File_Names;
                            Data1.irrigation_iii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_four_upload_row1();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                    
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.irrigation_iii_baseline = irrigation_iii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.irrigation_iii_20_21_filename = File_Names;
                                obj.irrigation_iii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.irrigation_iii_21_22_filename = File_Names;
                                obj.irrigation_iii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.irrigation_iii_22_23_filename = File_Names;
                                obj.irrigation_iii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.irrigation_iii_23_24_filename = File_Names;
                                obj.irrigation_iii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.irrigation_iii_24_25_filename = File_Names;
                                obj.irrigation_iii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_four_upload_row1.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }
                    }
                    else
                    {
                        return Json("Duplicate Data is there");
                    }


                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_four_upload_row1_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_four_upload_row1.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string irrigation_iii_20_21_filepath = Details[0].irrigation_iii_20_21_filepath;
                        string irrigation_iii_20_21_filename = Details[0].irrigation_iii_20_21_filename;
                        var Paths1 = irrigation_iii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = irrigation_iii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = irrigation_iii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string irrigation_iii_21_22_filepath = Details[0].irrigation_iii_21_22_filepath;
                        string irrigation_iii_21_22_filename = Details[0].irrigation_iii_21_22_filename;
                        var Paths1 = irrigation_iii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = irrigation_iii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = irrigation_iii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string irrigation_iii_22_23_filepath = Details[0].irrigation_iii_22_23_filepath;
                        string irrigation_iii_22_23_filename = Details[0].irrigation_iii_22_23_filename;
                        var Paths1 = irrigation_iii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = irrigation_iii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = irrigation_iii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string irrigation_iii_23_24_filepath = Details[0].irrigation_iii_23_24_filepath;
                        string irrigation_iii_23_24_filename = Details[0].irrigation_iii_23_24_filename;
                        var Paths1 = irrigation_iii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = irrigation_iii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = irrigation_iii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string irrigation_iii_24_25_filepath = Details[0].irrigation_iii_24_25_filepath;
                        string irrigation_iii_24_25_filename = Details[0].irrigation_iii_24_25_filename;
                        var Paths1 = irrigation_iii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = irrigation_iii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = irrigation_iii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli4_1_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_four_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_four_upload_row2()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_four_upload_row2.Where(x => x.state_name == StateName).ToList();
                // string cropping_v_baseline = Request["cropping_v_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_four_upload_row2();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                              
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "xls,xlsx,csv,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        // Data1.cropping_v_baseline = cropping_v_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.cropping_v_20_21_filename;
                            var FilePath1 = Data1.cropping_v_20_21_filepath;
                            Data1.cropping_v_20_21_filename = Filename + ',' + File_Names;
                            Data1.cropping_v_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.cropping_v_21_22_filename;
                            var FilePath1 = Data1.cropping_v_21_22_filepath;
                            Data1.cropping_v_21_22_filename = Filename + ',' + File_Names;
                            Data1.cropping_v_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.cropping_v_22_23_filename;
                            var FilePath1 = Data1.cropping_v_22_23_filepath;
                            Data1.cropping_v_22_23_filename = Filename + ',' + File_Names;
                            Data1.cropping_v_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.cropping_v_23_24_filename;
                            var FilePath1 = Data1.cropping_v_23_24_filepath;
                            Data1.cropping_v_23_24_filename = Filename + ',' + File_Names;
                            Data1.cropping_v_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.cropping_v_24_25_filename;
                            var FilePath1 = Data1.cropping_v_24_25_filepath;
                            Data1.cropping_v_24_25_filename = Filename + ',' + File_Names;
                            Data1.cropping_v_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_four_upload_row2();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {
                                   
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);


                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            // obj.cropping_v_baseline = cropping_v_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.cropping_v_20_21_filename = File_Names;
                                obj.cropping_v_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.cropping_v_21_22_filename = File_Names;
                                obj.cropping_v_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.cropping_v_22_23_filename = File_Names;
                                obj.cropping_v_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.cropping_v_23_24_filename = File_Names;
                                obj.cropping_v_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.cropping_v_24_25_filename = File_Names;
                                obj.cropping_v_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_four_upload_row2.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate data is there");
                    }


                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_four_upload_row2_download(string Valu)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_four_upload_row2.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string cropping_v_20_21_filepath = Details[0].cropping_v_20_21_filepath;
                        string cropping_v_20_21_filename = Details[0].cropping_v_20_21_filename;
                        var Paths1 = cropping_v_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = cropping_v_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = cropping_v_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string cropping_v_21_22_filepath = Details[0].cropping_v_21_22_filepath;
                        string cropping_v_21_22_filename = Details[0].cropping_v_21_22_filename;
                        var Paths1 = cropping_v_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = cropping_v_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = cropping_v_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string cropping_v_22_23_filepath = Details[0].cropping_v_22_23_filepath;
                        string cropping_v_22_23_filename = Details[0].cropping_v_22_23_filename;
                        var Paths1 = cropping_v_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = cropping_v_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = cropping_v_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string cropping_v_23_24_filepath = Details[0].cropping_v_23_24_filepath;
                        string cropping_v_23_24_filename = Details[0].cropping_v_23_24_filename;
                        var Paths1 = cropping_v_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = cropping_v_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = cropping_v_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string cropping_v_24_25_filepath = Details[0].cropping_v_24_25_filepath;
                        string cropping_v_24_25_filename = Details[0].cropping_v_24_25_filename;
                        var Paths1 = cropping_v_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = cropping_v_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = cropping_v_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli4_2_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_four_upload_row2.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        //upload rows dli 4 getting controllers
        [HttpGet]
        public ActionResult abhy_dli_four_one_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_four_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult abhy_dli_four_two_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_four_upload_row2.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli_5_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.objabhy_dli_five.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult DLI_5_Info(string Data)
        {
            if (Session["UserId"] != null)
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_dli_five>(Data);
                var StateName = result.state_name;

                var Data1 = ABE.objabhy_dli_five.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count == 1)
                {
                    var Data2 = Data1.SingleOrDefault();


                    abhy_dli_five obj = new abhy_dli_five();
                    Data2.state_name = StateName;
                    Data2.userid = Convert.ToInt32(Session["UserId"]);
                    Data2.blockwise_i_baseline = result.blockwise_i_baseline;
                    Data2.blockwise_i_20_21 = result.blockwise_i_20_21;
                    Data2.blockwise_i_21_22 = result.blockwise_i_21_22;
                    Data2.blockwise_i_22_23 = result.blockwise_i_22_23;
                    Data2.blockwise_i_23_24 = result.blockwise_i_23_24;
                    Data2.blockwise_i_24_25 = result.blockwise_i_24_25;
                    Data2.blockwise_i_cumulative = result.blockwise_i_cumulative;
                    Data2.blockwise_i_disbursible = result.blockwise_i_disbursible;
                    Data2.blockwise_iii_baseline = result.blockwise_iii_baseline;
                    Data2.blockwise_iii_20_21 = result.blockwise_iii_20_21;
                    Data2.blockwise_iii_21_22 = result.blockwise_iii_21_22;
                    Data2.blockwise_iii_22_23 = result.blockwise_iii_22_23;
                    Data2.blockwise_iii_23_24 = result.blockwise_iii_23_24;
                    Data2.blockwise_iii_24_25 = result.blockwise_iii_24_25;
                    Data2.blockwise_iii_cumulative = result.blockwise_iii_cumulative;
                    Data2.blockwise_iii_disbursible = result.blockwise_iii_disbursible;
                    Data2.blockwise_iv_baseline = result.blockwise_iv_baseline;
                    Data2.blockwise_iv_20_21 = result.blockwise_iv_20_21;
                    Data2.blockwise_iv_21_22 = result.blockwise_iv_21_22;
                    Data2.blockwise_iv_22_23 = result.blockwise_iv_22_23;
                    Data2.blockwise_iv_23_24 = result.blockwise_iv_23_24;
                    Data2.blockwise_iv_24_25 = result.blockwise_iv_24_25;
                    Data2.blockwise_iv_cumulative = result.blockwise_iv_cumulative;
                    Data2.blockwise_iv_disbursible = result.blockwise_iv_disbursible;
                    ABE.Entry(Data2).State = EntityState.Modified;

                    ABE.SaveChanges();
                    return Json("Successfully Saved");
                }
                else
                {
                    if (Data1.Count == 0)
                    {
                        abhy_dli_five obj = new abhy_dli_five();
                        obj.state_name = StateName;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        obj.blockwise_i_baseline = result.blockwise_i_baseline;
                        obj.blockwise_i_20_21 = result.blockwise_i_20_21;
                        obj.blockwise_i_21_22 = result.blockwise_i_21_22;
                        obj.blockwise_i_22_23 = result.blockwise_i_22_23;
                        obj.blockwise_i_23_24 = result.blockwise_i_23_24;
                        obj.blockwise_i_24_25 = result.blockwise_i_24_25;
                        obj.blockwise_i_cumulative = result.blockwise_i_cumulative;
                        obj.blockwise_i_disbursible = result.blockwise_i_disbursible;
                        obj.blockwise_iii_baseline = result.blockwise_iii_baseline;
                        obj.blockwise_iii_20_21 = result.blockwise_iii_20_21;
                        obj.blockwise_iii_21_22 = result.blockwise_iii_21_22;
                        obj.blockwise_iii_22_23 = result.blockwise_iii_22_23;
                        obj.blockwise_iii_23_24 = result.blockwise_iii_23_24;
                        obj.blockwise_iii_24_25 = result.blockwise_iii_24_25;
                        obj.blockwise_iii_cumulative = result.blockwise_iii_cumulative;
                        obj.blockwise_iii_disbursible = result.blockwise_iii_disbursible;
                        obj.blockwise_iv_baseline = result.blockwise_iv_baseline;
                        obj.blockwise_iv_20_21 = result.blockwise_iv_20_21;
                        obj.blockwise_iv_21_22 = result.blockwise_iv_21_22;
                        obj.blockwise_iv_22_23 = result.blockwise_iv_22_23;
                        obj.blockwise_iv_23_24 = result.blockwise_iv_23_24;
                        obj.blockwise_iv_24_25 = result.blockwise_iv_24_25;
                        obj.blockwise_iv_cumulative = result.blockwise_iv_cumulative;
                        obj.blockwise_iv_disbursible = result.blockwise_iv_disbursible;
                        ABE.objabhy_dli_five.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate data is there");
                    }


                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult abhy_dli_five_upload_row1()
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_five_upload_row1.Where(x => x.state_name == StateName).ToList();
                // string blockwise_ii_baseline = Request["blockwise_ii_baseline"];

                string upload_count = Request["upload_count"];
                var str = upload_count.Split(',');
                int ll = str.Length - 1;
                var upload_Count_Value = str[ll];
                if (Details.Count == 1)
                {
                    var Data1 = Details.LastOrDefault();

                    HttpFileCollectionBase files = Request.Files;
                    var obj = new abhy_dli_five_upload_row1();
                    string Paths = "";
                    string File_Names = "";
                    if (files.Count == 0)
                    {
                        return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {

                        for (int i = 0; i < files.Count; i++)
                        {

                            HttpPostedFileBase file = files[i];
                            string fname;
                            // Checking for Internet Explorer      
                            if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                            {
                                string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                fname = testfiles[testfiles.Length - 1];
                                string name = Path.GetFileNameWithoutExtension(fname);
                                string ext = Path.GetExtension(fname);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            else
                            {
                               
                                string name = Path.GetFileNameWithoutExtension(file.FileName);
                                string ext = Path.GetExtension(file.FileName);
                                fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                            }
                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            string allowed_file_format = "xls,xlsx,csv,pdf";
                            bool flag = obj_Validate.CheckValidFile(file, allowed_file_format);
                            if (flag == false)
                            {
                                return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            // Get the complete folder path and store the file inside it.      
                            //string path = @"D:\Ataljal_grievnce\";
                            //path = path + fname;
                            //string[] count = file.FileName.Split('.');
                            //if (count.Length != 2)
                            //{
                            //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            //}
                            //file.SaveAs(path);
                            //// Get the complete folder path and store the file inside it.      
                            ////fname = "@D:\bsi_images\BSi_images\"", fname);
                            //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                            //Paths = MainPath + ',';
                            ////file.SaveAs(fname);
                            //File_Names = file.FileName + ',';
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + fname;
                            string[] count = fname.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            file.SaveAs(path);


                            var MainPath = "/Ataljalimages/" + fname;
                            Paths = MainPath + ',';
                            File_Names = fname + ',';
                        }

                        //  Data1.blockwise_ii_baseline = blockwise_ii_baseline;
                        Data1.state_name = StateName;
                        if (upload_Count_Value == "1")
                        {
                            var Filename = Data1.blockwise_ii_20_21_filename;
                            var FilePath1 = Data1.blockwise_ii_20_21_filepath;
                            Data1.blockwise_ii_20_21_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_20_21_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "2")
                        {
                            var Filename = Data1.blockwise_ii_21_22_filename;
                            var FilePath1 = Data1.blockwise_ii_21_22_filepath;
                            Data1.blockwise_ii_21_22_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_21_22_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "3")
                        {
                            var Filename = Data1.blockwise_ii_22_23_filename;
                            var FilePath1 = Data1.blockwise_ii_22_23_filepath;
                            Data1.blockwise_ii_22_23_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_22_23_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "4")
                        {
                            var Filename = Data1.blockwise_ii_23_24_filename;
                            var FilePath1 = Data1.blockwise_ii_23_24_filepath;
                            Data1.blockwise_ii_23_24_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_23_24_filepath = FilePath1 + ',' + Paths;
                        }
                        if (upload_Count_Value == "5")
                        {
                            var Filename = Data1.blockwise_ii_24_25_filename;
                            var FilePath1 = Data1.blockwise_ii_24_25_filepath;
                            Data1.blockwise_ii_24_25_filename = Filename + ',' + File_Names;
                            Data1.blockwise_ii_24_25_filepath = FilePath1 + ',' + Paths;
                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                    }
                }
                else
                {
                    if (Details.Count == 0)
                    {
                        HttpFileCollectionBase files = Request.Files;
                        var obj = new abhy_dli_five_upload_row1();
                        string Paths = "";
                        string File_Names = "";
                        if (files.Count == 0)
                        {
                            return Json("Please Upload Files", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {

                            for (int i = 0; i < files.Count; i++)
                            {

                                HttpPostedFileBase file = files[i];
                                string fname;
                                // Checking for Internet Explorer      
                                if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                                {
                                    string[] testfiles = file.FileName.Split(new char[] { '\\' });
                                    fname = testfiles[testfiles.Length - 1];
                                    string name = Path.GetFileNameWithoutExtension(fname);
                                    string ext = Path.GetExtension(fname);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                else
                                {                                   
                                    string name = Path.GetFileNameWithoutExtension(file.FileName);
                                    string ext = Path.GetExtension(file.FileName);
                                    fname = $"{name}_{Guid.NewGuid().ToString("N").Substring(0, 8)}{ext}";
                                }
                                // Get the complete folder path and store the file inside it.      
                                //string path = @"D:\Ataljal_grievnce\";
                                //path = path + fname;
                                //string[] count = file.FileName.Split('.');
                                //if (count.Length != 2)
                                //{
                                //    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                //}
                                //file.SaveAs(path);
                                //// Get the complete folder path and store the file inside it.      
                                ////fname = "@D:\bsi_images\BSi_images\"", fname);
                                //var MainPath = path.Replace("D:\\Ataljal_grievnce\\", "~/Ataljalimages/");
                                //Paths = MainPath + ',';
                                ////file.SaveAs(fname);
                                //File_Names = file.FileName + ',';
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + fname;
                                string[] count = fname.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                file.SaveAs(path);

                                var MainPath = "/Ataljalimages/" + fname;
                                Paths = MainPath + ',';
                                File_Names = fname + ',';
                            }

                            //  obj.blockwise_ii_baseline = blockwise_ii_baseline;
                            obj.state_name = StateName;
                            if (upload_Count_Value == "1")
                            {
                                obj.blockwise_ii_20_21_filename = File_Names;
                                obj.blockwise_ii_20_21_filepath = Paths;
                            }
                            if (upload_Count_Value == "2")
                            {
                                obj.blockwise_ii_21_22_filename = File_Names;
                                obj.blockwise_ii_21_22_filepath = Paths;
                            }
                            if (upload_Count_Value == "3")
                            {
                                obj.blockwise_ii_22_23_filename = File_Names;
                                obj.blockwise_ii_22_23_filepath = Paths;
                            }
                            if (upload_Count_Value == "4")
                            {
                                obj.blockwise_ii_23_24_filename = File_Names;
                                obj.blockwise_ii_23_24_filepath = Paths;
                            }
                            if (upload_Count_Value == "5")
                            {
                                obj.blockwise_ii_24_25_filename = File_Names;
                                obj.blockwise_ii_24_25_filepath = Paths;
                            }

                            ABE.obj_abhy_dli_five_upload_row1.Add(obj);
                            ABE.SaveChanges();
                            return Json("Your files uploaded successfully", JsonRequestBehavior.AllowGet);

                        }

                    }
                    else
                    {
                        return Json("Duplicate data is there");
                    }

                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        public ActionResult abhy_dli_five_upload_row1_download(string Valu)

        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["DLI_State"].ToString();
                var Details = ABE.obj_abhy_dli_five_upload_row1.Where(x => x.state_name == StateName).ToList();
                var FileName_Main = "";
                var Mainpath = "";
                if (Details.Count != 0)
                {
                    string upload_count1 = Valu;
                    var sssss = upload_count1.Split(',');
                    var sss = sssss.Length - 1;
                    var upload_count = sssss[sss];
                    char[] delimiterChars = { ',', ',' };
                    if (upload_count == "1")
                    {
                        //  obj.waterlevel_iii_20_21_filename = File_Names;
                        string blockwise_ii_20_21_filepath = Details[0].blockwise_ii_20_21_filepath;
                        string blockwise_ii_20_21_filename = Details[0].blockwise_ii_20_21_filename;
                        var Paths1 = blockwise_ii_20_21_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_20_21_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_20_21_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }

                        }

                    }
                    if (upload_count == "2")
                    {
                        string blockwise_ii_21_22_filepath = Details[0].blockwise_ii_21_22_filepath;
                        string blockwise_ii_21_22_filename = Details[0].blockwise_ii_21_22_filename;
                        var Paths1 = blockwise_ii_21_22_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_21_22_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_21_22_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "3")
                    {
                        string blockwise_ii_22_23_filepath = Details[0].blockwise_ii_22_23_filepath;
                        string blockwise_ii_22_23_filename = Details[0].blockwise_ii_22_23_filename;
                        var Paths1 = blockwise_ii_22_23_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_22_23_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_22_23_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "4")
                    {
                        string blockwise_ii_23_24_filepath = Details[0].blockwise_ii_23_24_filepath;
                        string blockwise_ii_23_24_filename = Details[0].blockwise_ii_23_24_filename;
                        var Paths1 = blockwise_ii_23_24_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_23_24_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_23_24_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }
                    if (upload_count == "5")
                    {
                        string blockwise_ii_24_25_filepath = Details[0].blockwise_ii_24_25_filepath;
                        string blockwise_ii_24_25_filename = Details[0].blockwise_ii_24_25_filename;
                        var Paths1 = blockwise_ii_24_25_filepath.Split(delimiterChars);
                        string[] Pathss = blockwise_ii_24_25_filepath.Split(new string[] { ",," }, StringSplitOptions.None);
                        string[] FileNamess = blockwise_ii_24_25_filename.Split(new string[] { ",," }, StringSplitOptions.None);

                        if (Pathss.Length != 0)
                        {
                            var ss = Pathss.Length - 1;
                            var UrlPath = Pathss[ss].Split(',');
                            var FileName_ = FileNamess[ss].Split(',');
                            FileName_Main = FileName_[0];
                            if (UrlPath.Length != 0)
                            {
                                for (var i = 0; i < UrlPath.Length; i++)
                                {
                                    if (UrlPath[i] != "")
                                    {
                                        Mainpath = UrlPath[i];
                                    }
                                }
                            }
                        }
                    }

                    //byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\DLI_IMAGES\"+ FileName_Main);
                    //string fileName = FileName_Main;
                    //return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
                    return Json(Mainpath, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json("No Files", JsonRequestBehavior.AllowGet);
                }

            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Dli5_1_Upload_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                Session["DLI_State"] = state;
                var StateName = state;

                var Data1 = ABE.obj_abhy_dli_five_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        //upload rows dli 5 getting controllers
        [HttpGet]
        public ActionResult abhy_dli_five_one_upload_row_geting(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = state;
                Session["DLI_State"] = state;
                var Data1 = ABE.obj_abhy_dli_five_upload_row1.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        //admin_framework matrix code
        public ActionResult admin_FrameWork_Matrix()
        {
            
            return View();
        }
        [HttpPost]
        public ActionResult admin_FrameWork_Matrix_Info(string Data)
        {
            if (Session["UserId"] != null)
            {

                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_frameworkmatrix_new>(Data);
                var StateName = result.state_name;

                var Data1 = ABE.obj_abhy_frameworkmatrix_new.Where(x => x.state_name == StateName).ToList();
                if (Data1.Count == 1)
                {
                    var Data2 = Data1.SingleOrDefault();
                    abhy_frameworkmatrix_new obj = new abhy_frameworkmatrix_new();
                    obj.state_name = StateName;
                    obj.userid = Convert.ToInt32(Session["UserId"]);

                    Data2.state_name = StateName;
                    Data2.dli1_1_baseline = result.dli1_1_baseline;
                    Data2.dli1_1_20_21 = result.dli1_1_20_21;
                    Data2.dli1_1_21_22 = result.dli1_1_21_22;
                    Data2.dli1_1_22_23 = result.dli1_1_22_23;
                    Data2.dli1_1_23_24 = result.dli1_1_23_24;
                    Data2.dli1_1_24_25 = result.dli1_1_24_25;
                    Data2.dli1_1_cumulative = result.dli1_1_cumulative;


                    Data2.dli1_1_1_baseline = result.dli1_1_1_baseline;
                    Data2.dli1_1_1_20_21 = result.dli1_1_1_20_21;
                    Data2.dli1_1_1_21_22 = result.dli1_1_1_21_22;
                    Data2.dli1_1_1_22_23 = result.dli1_1_1_22_23;
                    Data2.dli1_1_1_23_24 = result.dli1_1_1_23_24;
                    Data2.dli1_1_1_24_25 = result.dli1_1_1_24_25;
                    Data2.dli1_1_1_cumulative = result.dli1_1_1_cumulative;


                    Data2.dli1_1_2_baseline = result.dli1_1_2_baseline;
                    Data2.dli1_1_2_20_21 = result.dli1_1_2_20_21;
                    Data2.dli1_1_2_21_22 = result.dli1_1_2_21_22;
                    Data2.dli1_1_2_22_23 = result.dli1_1_2_22_23;
                    Data2.dli1_1_2_23_24 = result.dli1_1_2_23_24;
                    Data2.dli1_1_2_24_25 = result.dli1_1_2_24_25;
                    Data2.dli1_1_2_cumulative = result.dli1_1_2_cumulative;


                    Data2.dli2_2_baseline = result.dli2_2_baseline;
                    Data2.dli2_2_20_21 = result.dli2_2_20_21;
                    Data2.dli2_2_21_22 = result.dli2_2_21_22;
                    Data2.dli2_2_22_23 = result.dli2_2_22_23;
                    Data2.dli2_2_23_24 = result.dli2_2_23_24;
                    Data2.dli2_2_24_25 = result.dli2_2_24_25;
                    Data2.dli2_2_cumulative = result.dli2_2_cumulative;

                    Data2.dli2_2_1_baseline = result.dli2_2_1_baseline;
                    Data2.dli2_2_1_20_21 = result.dli2_2_1_20_21;
                    Data2.dli2_2_1_21_22 = result.dli2_2_1_21_22;
                    Data2.dli2_2_1_22_23 = result.dli2_2_1_22_23;
                    Data2.dli2_2_1_23_24 = result.dli2_2_1_23_24;
                    Data2.dli2_2_1_24_25 = result.dli2_2_1_24_25;
                    Data2.dli2_2_1_cumulative = result.dli2_2_1_cumulative;

                    Data2.dli2_3_baseline = result.dli2_3_baseline;
                    Data2.dli2_3_20_21 = result.dli2_3_20_21;
                    Data2.dli2_3_21_22 = result.dli2_3_21_22;
                    Data2.dli2_3_22_23 = result.dli2_3_22_23;
                    Data2.dli2_3_23_24 = result.dli2_3_23_24;
                    Data2.dli2_3_24_25 = result.dli2_3_24_25;
                    Data2.dli2_3_cumulative = result.dli2_3_cumulative;

                    Data2.dli2_3a_baseline = result.dli2_3a_baseline;
                    Data2.dli2_3a_20_21 = result.dli2_3a_20_21;
                    Data2.dli2_3a_21_22 = result.dli2_3a_21_22;
                    Data2.dli2_3a_22_23 = result.dli2_3a_22_23;
                    Data2.dli2_3a_23_24 = result.dli2_3a_23_24;
                    Data2.dli2_3a_24_25 = result.dli2_3a_24_25;
                    Data2.dli2_3a_cumulative = result.dli2_3a_cumulative;


                    Data2.dli2_3_1_baseline = result.dli2_3_1_baseline;
                    Data2.dli2_3_1_20_21 = result.dli2_3_1_20_21;
                    Data2.dli2_3_1_21_22 = result.dli2_3_1_21_22;
                    Data2.dli2_3_1_22_23 = result.dli2_3_1_22_23;
                    Data2.dli2_3_1_23_24 = result.dli2_3_1_23_24;
                    Data2.dli2_3_1_24_25 = result.dli2_3_1_24_25;
                    Data2.dli2_3_1_cumulative = result.dli2_3_1_cumulative;


                    Data2.dli2_3_1a_baseline = result.dli2_3_1a_baseline;
                    Data2.dli2_3_1a_20_21 = result.dli2_3_1a_20_21;
                    Data2.dli2_3_1a_21_22 = result.dli2_3_1a_21_22;
                    Data2.dli2_3_1a_22_23 = result.dli2_3_1a_22_23;
                    Data2.dli2_3_1a_23_24 = result.dli2_3_1a_23_24;
                    Data2.dli2_3_1a_24_25 = result.dli2_3_1a_24_25;
                    Data2.dli2_3_1a_cumulative = result.dli2_3_1a_cumulative;

                    Data2.dli3_4_baseline = result.dli3_4_baseline;
                    Data2.dli3_4_20_21 = result.dli3_4_20_21;
                    Data2.dli3_4_21_22 = result.dli3_4_21_22;
                    Data2.dli3_4_22_23 = result.dli3_4_22_23;
                    Data2.dli3_4_23_24 = result.dli3_4_23_24;
                    Data2.dli3_4_24_25 = result.dli3_4_24_25;
                    Data2.dli3_4_cumulative = result.dli3_4_cumulative;


                    Data2.dli3_4_1_baseline = result.dli3_4_1_baseline;
                    Data2.dli3_4_1_20_21 = result.dli3_4_1_20_21;
                    Data2.dli3_4_1_21_22 = result.dli3_4_1_21_22;
                    Data2.dli3_4_1_22_23 = result.dli3_4_1_22_23;
                    Data2.dli3_4_1_23_24 = result.dli3_4_1_23_24;
                    Data2.dli3_4_1_24_25 = result.dli3_4_1_24_25;
                    Data2.dli3_4_1_cumulative = result.dli3_4_1_cumulative;


                    Data2.dli3_4_2_baseline = result.dli3_4_2_baseline;
                    Data2.dli3_4_2_20_21 = result.dli3_4_2_20_21;
                    Data2.dli3_4_2_21_22 = result.dli3_4_2_21_22;
                    Data2.dli3_4_2_22_23 = result.dli3_4_2_22_23;
                    Data2.dli3_4_2_23_24 = result.dli3_4_2_23_24;
                    Data2.dli3_4_2_24_25 = result.dli3_4_2_24_25;
                    Data2.dli3_4_2_cumulative = result.dli3_4_2_cumulative;

                    Data2.dli3_4_3_baseline = result.dli3_4_3_baseline;
                    Data2.dli3_4_3_20_21 = result.dli3_4_3_20_21;
                    Data2.dli3_4_3_21_22 = result.dli3_4_3_21_22;
                    Data2.dli3_4_3_22_23 = result.dli3_4_3_22_23;
                    Data2.dli3_4_3_23_24 = result.dli3_4_3_23_24;
                    Data2.dli3_4_3_24_25 = result.dli3_4_3_24_25;
                    Data2.dli3_4_3_cumulative = result.dli3_4_3_cumulative;

                    Data2.dli3_4_4_baseline = result.dli3_4_4_baseline;
                    Data2.dli3_4_4_20_21 = result.dli3_4_4_20_21;
                    Data2.dli3_4_4_21_22 = result.dli3_4_4_21_22;
                    Data2.dli3_4_4_22_23 = result.dli3_4_4_22_23;
                    Data2.dli3_4_4_23_24 = result.dli3_4_4_23_24;
                    Data2.dli3_4_4_24_25 = result.dli3_4_4_24_25;
                    Data2.dli3_4_4_cumulative = result.dli3_4_4_cumulative;

                    Data2.dli4_5_baseline = result.dli4_5_baseline;
                    Data2.dli4_5_20_21 = result.dli4_5_20_21;
                    Data2.dli4_5_21_22 = result.dli4_5_21_22;
                    Data2.dli4_5_22_23 = result.dli4_5_22_23;
                    Data2.dli4_5_23_24 = result.dli4_5_23_24;
                    Data2.dli4_5_24_25 = result.dli4_5_24_25;
                    Data2.dli4_5_cumulative = result.dli4_5_cumulative;

                    Data2.dli4_5_1_baseline = result.dli4_5_1_baseline;
                    Data2.dli4_5_1_20_21 = result.dli4_5_1_20_21;
                    Data2.dli4_5_1_21_22 = result.dli4_5_1_21_22;
                    Data2.dli4_5_1_22_23 = result.dli4_5_1_22_23;
                    Data2.dli4_5_1_23_24 = result.dli4_5_1_23_24;
                    Data2.dli4_5_1_24_25 = result.dli4_5_1_24_25;
                    Data2.dli4_5_1_cumulative = result.dli4_5_1_cumulative;

                    Data2.dli5_6_baseline = result.dli5_6_baseline;
                    Data2.dli5_6_20_21 = result.dli5_6_20_21;
                    Data2.dli5_6_21_22 = result.dli5_6_21_22;
                    Data2.dli5_6_22_23 = result.dli5_6_22_23;
                    Data2.dli5_6_23_24 = result.dli5_6_23_24;
                    Data2.dli5_6_24_25 = result.dli5_6_24_25;
                    Data2.dli5_6_cumulative = result.dli5_6_cumulative;

                    Data2.dli5_6_1_baseline = result.dli5_6_1_baseline;
                    Data2.dli5_6_1_20_21 = result.dli5_6_1_20_21;
                    Data2.dli5_6_1_21_22 = result.dli5_6_1_21_22;
                    Data2.dli5_6_1_22_23 = result.dli5_6_1_22_23;
                    Data2.dli5_6_1_23_24 = result.dli5_6_1_23_24;
                    Data2.dli5_6_1_24_25 = result.dli5_6_1_24_25;
                    Data2.dli5_6_1_cumulative = result.dli5_6_1_cumulative;
                    ABE.Entry(Data2).State = EntityState.Modified;
                    ABE.SaveChanges();
                    return Json("Successfully Saved");

                }
                else
                {
                    if (Data1.Count == 0)
                    {
                        abhy_frameworkmatrix_new obj = new abhy_frameworkmatrix_new();
                        obj.state_name = StateName;
                        obj.userid = Convert.ToInt32(Session["UserId"]);
                        obj.state_name = StateName;
                        obj.dli1_1_baseline = result.dli1_1_baseline;
                        obj.dli1_1_20_21 = result.dli1_1_20_21;
                        obj.dli1_1_21_22 = result.dli1_1_21_22;
                        obj.dli1_1_22_23 = result.dli1_1_22_23;
                        obj.dli1_1_23_24 = result.dli1_1_23_24;
                        obj.dli1_1_24_25 = result.dli1_1_24_25;
                        obj.dli1_1_cumulative = result.dli1_1_cumulative;


                        obj.dli1_1_1_baseline = result.dli1_1_1_baseline;
                        obj.dli1_1_1_20_21 = result.dli1_1_1_20_21;
                        obj.dli1_1_1_21_22 = result.dli1_1_1_21_22;
                        obj.dli1_1_1_22_23 = result.dli1_1_1_22_23;
                        obj.dli1_1_1_23_24 = result.dli1_1_1_23_24;
                        obj.dli1_1_1_24_25 = result.dli1_1_1_24_25;
                        obj.dli1_1_1_cumulative = result.dli1_1_1_cumulative;


                        obj.dli1_1_2_baseline = result.dli1_1_2_baseline;
                        obj.dli1_1_2_20_21 = result.dli1_1_2_20_21;
                        obj.dli1_1_2_21_22 = result.dli1_1_2_21_22;
                        obj.dli1_1_2_22_23 = result.dli1_1_2_22_23;
                        obj.dli1_1_2_23_24 = result.dli1_1_2_23_24;
                        obj.dli1_1_2_24_25 = result.dli1_1_2_24_25;
                        obj.dli1_1_2_cumulative = result.dli1_1_2_cumulative;


                        obj.dli2_2_baseline = result.dli2_2_baseline;
                        obj.dli2_2_20_21 = result.dli2_2_20_21;
                        obj.dli2_2_21_22 = result.dli2_2_21_22;
                        obj.dli2_2_22_23 = result.dli2_2_22_23;
                        obj.dli2_2_23_24 = result.dli2_2_23_24;
                        obj.dli2_2_24_25 = result.dli2_2_24_25;
                        obj.dli2_2_cumulative = result.dli2_2_cumulative;

                        obj.dli2_2_1_baseline = result.dli2_2_1_baseline;
                        obj.dli2_2_1_20_21 = result.dli2_2_1_20_21;
                        obj.dli2_2_1_21_22 = result.dli2_2_1_21_22;
                        obj.dli2_2_1_22_23 = result.dli2_2_1_22_23;
                        obj.dli2_2_1_23_24 = result.dli2_2_1_23_24;
                        obj.dli2_2_1_24_25 = result.dli2_2_1_24_25;
                        obj.dli2_2_1_cumulative = result.dli2_2_1_cumulative;

                        obj.dli2_3_baseline = result.dli2_3_baseline;
                        obj.dli2_3_20_21 = result.dli2_3_20_21;
                        obj.dli2_3_21_22 = result.dli2_3_21_22;
                        obj.dli2_3_22_23 = result.dli2_3_22_23;
                        obj.dli2_3_23_24 = result.dli2_3_23_24;
                        obj.dli2_3_24_25 = result.dli2_3_24_25;
                        obj.dli2_3_cumulative = result.dli2_3_cumulative;

                        obj.dli2_3a_baseline = result.dli2_3a_baseline;
                        obj.dli2_3a_20_21 = result.dli2_3a_20_21;
                        obj.dli2_3a_21_22 = result.dli2_3a_21_22;
                        obj.dli2_3a_22_23 = result.dli2_3a_22_23;
                        obj.dli2_3a_23_24 = result.dli2_3a_23_24;
                        obj.dli2_3a_24_25 = result.dli2_3a_24_25;
                        obj.dli2_3a_cumulative = result.dli2_3a_cumulative;


                        obj.dli2_3_1_baseline = result.dli2_3_1_baseline;
                        obj.dli2_3_1_20_21 = result.dli2_3_1_20_21;
                        obj.dli2_3_1_21_22 = result.dli2_3_1_21_22;
                        obj.dli2_3_1_22_23 = result.dli2_3_1_22_23;
                        obj.dli2_3_1_23_24 = result.dli2_3_1_23_24;
                        obj.dli2_3_1_24_25 = result.dli2_3_1_24_25;
                        obj.dli2_3_1_cumulative = result.dli2_3_1_cumulative;


                        obj.dli2_3_1a_baseline = result.dli2_3_1a_baseline;
                        obj.dli2_3_1a_20_21 = result.dli2_3_1a_20_21;
                        obj.dli2_3_1a_21_22 = result.dli2_3_1a_21_22;
                        obj.dli2_3_1a_22_23 = result.dli2_3_1a_22_23;
                        obj.dli2_3_1a_23_24 = result.dli2_3_1a_23_24;
                        obj.dli2_3_1a_24_25 = result.dli2_3_1a_24_25;
                        obj.dli2_3_1a_cumulative = result.dli2_3_1a_cumulative;

                        obj.dli3_4_baseline = result.dli3_4_baseline;
                        obj.dli3_4_20_21 = result.dli3_4_20_21;
                        obj.dli3_4_21_22 = result.dli3_4_21_22;
                        obj.dli3_4_22_23 = result.dli3_4_22_23;
                        obj.dli3_4_23_24 = result.dli3_4_23_24;
                        obj.dli3_4_24_25 = result.dli3_4_24_25;
                        obj.dli3_4_cumulative = result.dli3_4_cumulative;


                        obj.dli3_4_1_baseline = result.dli3_4_1_baseline;
                        obj.dli3_4_1_20_21 = result.dli3_4_1_20_21;
                        obj.dli3_4_1_21_22 = result.dli3_4_1_21_22;
                        obj.dli3_4_1_22_23 = result.dli3_4_1_22_23;
                        obj.dli3_4_1_23_24 = result.dli3_4_1_23_24;
                        obj.dli3_4_1_24_25 = result.dli3_4_1_24_25;
                        obj.dli3_4_1_cumulative = result.dli3_4_1_cumulative;


                        obj.dli3_4_2_baseline = result.dli3_4_2_baseline;
                        obj.dli3_4_2_20_21 = result.dli3_4_2_20_21;
                        obj.dli3_4_2_21_22 = result.dli3_4_2_21_22;
                        obj.dli3_4_2_22_23 = result.dli3_4_2_22_23;
                        obj.dli3_4_2_23_24 = result.dli3_4_2_23_24;
                        obj.dli3_4_2_24_25 = result.dli3_4_2_24_25;
                        obj.dli3_4_2_cumulative = result.dli3_4_2_cumulative;

                        obj.dli3_4_3_baseline = result.dli3_4_3_baseline;
                        obj.dli3_4_3_20_21 = result.dli3_4_3_20_21;
                        obj.dli3_4_3_21_22 = result.dli3_4_3_21_22;
                        obj.dli3_4_3_22_23 = result.dli3_4_3_22_23;
                        obj.dli3_4_3_23_24 = result.dli3_4_3_23_24;
                        obj.dli3_4_3_24_25 = result.dli3_4_3_24_25;
                        obj.dli3_4_3_cumulative = result.dli3_4_3_cumulative;

                        obj.dli3_4_4_baseline = result.dli3_4_4_baseline;
                        obj.dli3_4_4_20_21 = result.dli3_4_4_20_21;
                        obj.dli3_4_4_21_22 = result.dli3_4_4_21_22;
                        obj.dli3_4_4_22_23 = result.dli3_4_4_22_23;
                        obj.dli3_4_4_23_24 = result.dli3_4_4_23_24;
                        obj.dli3_4_4_24_25 = result.dli3_4_4_24_25;
                        obj.dli3_4_4_cumulative = result.dli3_4_4_cumulative;

                        obj.dli4_5_baseline = result.dli4_5_baseline;
                        obj.dli4_5_20_21 = result.dli4_5_20_21;
                        obj.dli4_5_21_22 = result.dli4_5_21_22;
                        obj.dli4_5_22_23 = result.dli4_5_22_23;
                        obj.dli4_5_23_24 = result.dli4_5_23_24;
                        obj.dli4_5_24_25 = result.dli4_5_24_25;
                        obj.dli4_5_cumulative = result.dli4_5_cumulative;

                        obj.dli4_5_1_baseline = result.dli4_5_1_baseline;
                        obj.dli4_5_1_20_21 = result.dli4_5_1_20_21;
                        obj.dli4_5_1_21_22 = result.dli4_5_1_21_22;
                        obj.dli4_5_1_22_23 = result.dli4_5_1_22_23;
                        obj.dli4_5_1_23_24 = result.dli4_5_1_23_24;
                        obj.dli4_5_1_24_25 = result.dli4_5_1_24_25;
                        obj.dli4_5_1_cumulative = result.dli4_5_1_cumulative;

                        obj.dli5_6_baseline = result.dli5_6_baseline;
                        obj.dli5_6_20_21 = result.dli5_6_20_21;
                        obj.dli5_6_21_22 = result.dli5_6_21_22;
                        obj.dli5_6_22_23 = result.dli5_6_22_23;
                        obj.dli5_6_23_24 = result.dli5_6_23_24;
                        obj.dli5_6_24_25 = result.dli5_6_24_25;
                        obj.dli5_6_cumulative = result.dli5_6_cumulative;

                        obj.dli5_6_1_baseline = result.dli5_6_1_baseline;
                        obj.dli5_6_1_20_21 = result.dli5_6_1_20_21;
                        obj.dli5_6_1_21_22 = result.dli5_6_1_21_22;
                        obj.dli5_6_1_22_23 = result.dli5_6_1_22_23;
                        obj.dli5_6_1_23_24 = result.dli5_6_1_23_24;
                        obj.dli5_6_1_24_25 = result.dli5_6_1_24_25;
                        obj.dli5_6_1_cumulative = result.dli5_6_1_cumulative;

                        ABE.obj_abhy_frameworkmatrix_new.Add(obj);
                        ABE.SaveChanges();
                        return Json("Successfully Saved");
                    }
                    else
                    {
                        return Json("Duplicate data is there");
                    }



                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        public ActionResult admin_FrameWork_Matrix_Details(string state)
        {
            if (Session["UserId"] != null)
            {
                var StateName = Session["gstate"].ToString();

                var Data1 = ABE.obj_abhy_frameworkmatrix_new.Where(x => x.state_name == state).ToList();
                if (Data1.Count != 0)
                {
                    var Datata = Data1.LastOrDefault();
                    return Json(Datata, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("NO", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        //Dli1 delete methods for 6 rows 

        //DLI1 Ist Row
        [HttpGet]
        public ActionResult Delete_First_20_21_DLI1(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');


            var Data1 = ABE.obj_abhy_dli_one_upload_row1.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "waterlevel_iii_20_21_filepath_1")
            {
                var Abc = SSS.waterlevel_iii_20_21_filepath.Split(',');
                var Filepath = SSS.waterlevel_iii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_iii_20_21_filepath = a;
                SSS.waterlevel_iii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_iii_21_22_filepath_1")
            {
                var Abc = SSS.waterlevel_iii_21_22_filepath.Split(',');
                var Filepath = SSS.waterlevel_iii_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_iii_21_22_filepath = a;
                SSS.waterlevel_iii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_iii_22_23_filepath_1")
            {
                var Abc = SSS.waterlevel_iii_22_23_filepath.Split(',');
                var Filepath = SSS.waterlevel_iii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_iii_22_23_filepath = a;
                SSS.waterlevel_iii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_iii_23_24_filepath_1")
            {
                var Abc = SSS.waterlevel_iii_23_24_filepath.Split(',');
                var Filepath = SSS.waterlevel_iii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_iii_23_24_filepath = a;
                SSS.waterlevel_iii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_iii_24_25_filepath_1")
            {
                var Abc = SSS.waterlevel_iii_24_25_filepath.Split(',');
                var Filepath = SSS.waterlevel_iii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_iii_24_25_filepath = a;
                SSS.waterlevel_iii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI1 IInd Row
        [HttpGet]
        public ActionResult Delete_First_DLI1_Vi(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');


            var Data1 = ABE.obj_abhy_dli_one_upload_row2.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "waterlevel_vi_20_21_filepath_1")
            {
                var Abc = SSS.waterlevel_vi_20_21_filepath.Split(',');
                var Filepath = SSS.waterlevel_vi_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_vi_20_21_filepath = a;
                SSS.waterlevel_vi_20_21_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_vi_21_22_filepath_1")
            {
                var Abc = SSS.waterlevel_vi_21_22_filepath.Split(',');
                var Filepath = SSS.waterlevel_vi_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_vi_21_22_filepath = a;
                SSS.waterlevel_vi_21_22_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_vi_22_23_filepath_1")
            {
                var Abc = SSS.waterlevel_vi_22_23_filepath.Split(',');
                var Filepath = SSS.waterlevel_vi_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_vi_22_23_filepath = a;
                SSS.waterlevel_vi_22_23_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_vi_23_24_filepath_1")
            {
                var Abc = SSS.waterlevel_vi_23_24_filepath.Split(',');
                var Filepath = SSS.waterlevel_vi_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_vi_23_24_filepath = a;
                SSS.waterlevel_vi_23_24_filename = FileNames;
            }
            else if (Ss[1] == "waterlevel_vi_24_25_filepath_1")
            {
                var Abc = SSS.waterlevel_vi_24_25_filepath.Split(',');
                var Filepath = SSS.waterlevel_vi_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterlevel_vi_24_25_filepath = a;
                SSS.waterlevel_vi_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI1 III rd Row
        [HttpGet]
        public ActionResult Delete_First_DLI1_b_II(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');


            var Data1 = ABE.obj_abhy_dli_one_upload_row3.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "waterquality_iii_20_21_filepath_1")
            {
                var Abc = SSS.waterquality_iii_20_21_filepath.Split(',');
                var Filepath = SSS.waterquality_iii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_iii_20_21_filepath = a;
                SSS.waterquality_iii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_iii_21_22_filepath_1")
            {
                var Abc = SSS.waterquality_iii_21_22_filepath.Split(',');
                var Filepath = SSS.waterquality_iii_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_iii_21_22_filepath = a;
                SSS.waterquality_iii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_iii_22_23_filepath_1")
            {
                var Abc = SSS.waterquality_iii_22_23_filepath.Split(',');
                var Filepath = SSS.waterquality_iii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_iii_22_23_filepath = a;
                SSS.waterquality_iii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_iii_23_24_filepath_1")
            {
                var Abc = SSS.waterquality_iii_23_24_filepath.Split(',');
                var Filepath = SSS.waterquality_iii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_iii_23_24_filepath = a;
                SSS.waterquality_iii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_iii_24_25_filepath_1")
            {
                var Abc = SSS.waterquality_iii_24_25_filepath.Split(',');
                var Filepath = SSS.waterquality_iii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_iii_24_25_filepath = a;
                SSS.waterquality_iii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI1 IV th Row
        [HttpGet]
        public ActionResult Delete_First_DLI1_b_V(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_one_upload_row4.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "waterquality_vi_20_21_filepath_1")
            {
                var Abc = SSS.waterquality_vi_20_21_filepath.Split(',');
                var Filepath = SSS.waterquality_vi_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_vi_20_21_filepath = a;
                SSS.waterquality_vi_20_21_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_vi_21_22_filepath_1")
            {
                var Abc = SSS.waterquality_vi_21_22_filepath.Split(',');
                var Filepath = SSS.waterquality_vi_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_vi_21_22_filepath = a;
                SSS.waterquality_vi_21_22_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_vi_22_23_filepath_1")
            {
                var Abc = SSS.waterquality_vi_22_23_filepath.Split(',');
                var Filepath = SSS.waterquality_vi_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_vi_22_23_filepath = a;
                SSS.waterquality_vi_22_23_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_vi_23_24_filepath_1")
            {
                var Abc = SSS.waterquality_vi_23_24_filepath.Split(',');
                var Filepath = SSS.waterquality_vi_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_vi_23_24_filepath = a;
                SSS.waterquality_vi_23_24_filename = FileNames;
            }
            else if (Ss[1] == "waterquality_vi_24_25_filepath_1")
            {
                var Abc = SSS.waterquality_vi_24_25_filepath.Split(',');
                var Filepath = SSS.waterquality_vi_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterquality_vi_24_25_filepath = a;
                SSS.waterquality_vi_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }
        //DLI 5th row
        [HttpGet]
        public ActionResult Delete_First_DLI1_2_II(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_one_upload_row5.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "blockwise_ii_20_21_filepath_1")
            {
                var Abc = SSS.blockwise_ii_20_21_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_20_21_filepath = a;
                SSS.blockwise_ii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "blockwise_ii_21_22_filepath_1")
            {
                var Abc = SSS.blockwise_ii_21_22_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_21_22_filepath = a;
                SSS.blockwise_ii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "blockwise_ii_22_23_filepath_1")
            {
                var Abc = SSS.blockwise_ii_22_23_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_22_23_filepath = a;
                SSS.blockwise_ii_22_23_filename = FileNames;
            }
            else if (Ss[1] == " blockwise_ii_23_24_filepath_1")
            {
                var Abc = SSS.blockwise_ii_23_24_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_23_24_filepath = a;
                SSS.blockwise_ii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "blockwise_ii_24_25_filepath_1")
            {
                var Abc = SSS.blockwise_ii_24_25_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_24_25_filepath = a;
                SSS.blockwise_ii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }
        //DLI 6th Row
        //Delete_First_DLI1_3_II
        [HttpGet]
        public ActionResult Delete_First_DLI1_3_II(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_one_upload_row6.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "statewise_ii_20_21_filepath_1")
            {
                var Abc = SSS.statewise_ii_20_21_filepath.Split(',');
                var Filepath = SSS.statewise_ii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statewise_ii_20_21_filepath = a;
                SSS.statewise_ii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "statewise_ii_21_22_filepath_1")
            {
                var Abc = SSS.statewise_ii_21_22_filepath.Split(',');
                var Filepath = SSS.statewise_ii_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statewise_ii_21_22_filepath = a;
                SSS.statewise_ii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "statewise_ii_22_23_filepath_1")
            {
                var Abc = SSS.statewise_ii_22_23_filepath.Split(',');
                var Filepath = SSS.statewise_ii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statewise_ii_22_23_filepath = a;
                SSS.statewise_ii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "statewise_ii_23_24_filepath_1")
            {
                var Abc = SSS.statewise_ii_23_24_filepath.Split(',');
                var Filepath = SSS.statewise_ii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statewise_ii_23_24_filepath = a;
                SSS.statewise_ii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "statewise_ii_24_25_filepath_1")
            {
                var Abc = SSS.statewise_ii_24_25_filepath.Split(',');
                var Filepath = SSS.statewise_ii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statewise_ii_24_25_filepath = a;
                SSS.statewise_ii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI 7th Row
        //Delete_First_DLI1_7
        [HttpGet]
        public ActionResult Delete_First_DLI1_7(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_one_upload_row7.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "mow_v_20_21_filepath_1")
            {
                var Abc = SSS.mow_v_20_21_filepath.Split(',');
                var Filepath = SSS.mow_v_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_v_20_21_filepath = a;
                SSS.mow_v_20_21_filename = FileNames;
            }
            else if (Ss[1] == "mow_v_21_22_filepath_1")
            {
                var Abc = SSS.mow_v_21_22_filepath.Split(',');
                var Filepath = SSS.mow_v_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_v_21_22_filepath = a;
                SSS.mow_v_21_22_filename = FileNames;
            }
            else if (Ss[1] == "mow_v_22_23_filepath_1")
            {
                var Abc = SSS.mow_v_22_23_filepath.Split(',');
                var Filepath = SSS.mow_v_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_v_22_23_filepath = a;
                SSS.mow_v_22_23_filename = FileNames;
            }
            else if (Ss[1] == "mow_v_23_24_filepath_1")
            {
                var Abc = SSS.mow_v_23_24_filepath.Split(',');
                var Filepath = SSS.mow_v_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_v_23_24_filepath = a;
                SSS.mow_v_23_24_filename = FileNames;
            }
            else if (Ss[1] == "mow_v_24_25_filepath_1")
            {
                var Abc = SSS.mow_v_24_25_filepath.Split(',');
                var Filepath = SSS.mow_v_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_v_24_25_filepath = a;
                SSS.mow_v_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI 8th Row
        //Delete_First_DLI1_8
        [HttpGet]
        public ActionResult Delete_First_DLI1_8(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_one_upload_row8.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "mow_vi_20_21_filepath_1")
            {
                var Abc = SSS.mow_vi_20_21_filepath.Split(',');
                var Filepath = SSS.mow_vi_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_vi_20_21_filepath = a;
                SSS.mow_vi_20_21_filename = FileNames;
            }
            else if (Ss[1] == "mow_vi_21_22_filepath_1")
            {
                var Abc = SSS.mow_vi_21_22_filepath.Split(',');
                var Filepath = SSS.mow_vi_21_22_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_vi_21_22_filepath = a;
                SSS.mow_vi_21_22_filename = FileNames;
            }
            else if (Ss[1] == "mow_vi_22_23_filepath_1")
            {
                var Abc = SSS.mow_vi_22_23_filepath.Split(',');
                var Filepath = SSS.mow_vi_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_vi_22_23_filepath = a;
                SSS.mow_vi_22_23_filename = FileNames;
            }
            else if (Ss[1] == "mow_vi_23_24_filepath_1")
            {
                var Abc = SSS.mow_vi_23_24_filepath.Split(',');
                var Filepath = SSS.mow_vi_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_vi_23_24_filepath = a;
                SSS.mow_vi_23_24_filename = FileNames;
            }
            else if (Ss[1] == "mow_vi_24_25_filepath_1")
            {
                var Abc = SSS.mow_vi_24_25_filepath.Split(',');
                var Filepath = SSS.mow_vi_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.mow_vi_24_25_filepath = a;
                SSS.mow_vi_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }


        //DLI2 4 deleted rows...
        //Ist Row
        [HttpGet]
        public ActionResult Delete_First_DLI2_I(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_two_upload_row1.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "waterbudgets_ii_20_21_filepath_1")
            {
                var Abc = SSS.waterbudgets_ii_20_21_filepath.Split(',');
                var Filepath = SSS.waterbudgets_ii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterbudgets_ii_20_21_filepath = a;
                SSS.waterbudgets_ii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "waterbudgets_ii_21_22_filepath_1")
            {
                var Abc = SSS.waterbudgets_ii_21_22_filepath.Split(',');
                var Filepath = SSS.waterbudgets_ii_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterbudgets_ii_21_22_filepath = a;
                SSS.waterbudgets_ii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "waterbudgets_ii_22_23_filepath_1")
            {
                var Abc = SSS.waterbudgets_ii_22_23_filepath.Split(',');
                var Filepath = SSS.waterbudgets_ii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterbudgets_ii_22_23_filepath = a;
                SSS.waterbudgets_ii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "waterbudgets_ii_23_24_filepath_1")
            {
                var Abc = SSS.waterbudgets_ii_23_24_filepath.Split(',');
                var Filepath = SSS.waterbudgets_ii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterbudgets_ii_23_24_filepath = a;
                SSS.waterbudgets_ii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "waterbudgets_ii_24_25_filepath_1")
            {
                var Abc = SSS.waterbudgets_ii_24_25_filepath.Split(',');
                var Filepath = SSS.waterbudgets_ii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.waterbudgets_ii_24_25_filepath = a;
                SSS.waterbudgets_ii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI2 IIrow
        [HttpGet]
        public ActionResult Delete_First_DLI2_II(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_two_upload_row2.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "wsp_ii_20_21_filepath_1")
            {
                var Abc = SSS.wsp_ii_20_21_filepath.Split(',');
                var Filepath = SSS.wsp_ii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.wsp_ii_20_21_filepath = a;
                SSS.wsp_ii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "wsp_ii_21_22_filepath_1")
            {
                var Abc = SSS.wsp_ii_21_22_filepath.Split(',');
                var Filepath = SSS.wsp_ii_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.wsp_ii_21_22_filepath = a;
                SSS.wsp_ii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "wsp_ii_22_23_filepath_1")
            {
                var Abc = SSS.wsp_ii_22_23_filepath.Split(',');
                var Filepath = SSS.wsp_ii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.wsp_ii_22_23_filepath = a;
                SSS.wsp_ii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "wsp_ii_23_24_filepath_1")
            {
                var Abc = SSS.wsp_ii_23_24_filepath.Split(',');
                var Filepath = SSS.wsp_ii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.wsp_ii_23_24_filepath = a;
                SSS.wsp_ii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "wsp_ii_24_25_filepath_1")
            {
                var Abc = SSS.wsp_ii_24_25_filepath.Split(',');
                var Filepath = SSS.wsp_ii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.wsp_ii_24_25_filepath = a;
                SSS.wsp_ii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI2 IIIrow
        [HttpGet]
        public ActionResult Delete_First_DLI2_III(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_two_upload_row3.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "community_ii_20_21_filepath_1")
            {
                var Abc = SSS.community_ii_20_21_filepath.Split(',');
                var Filepath = SSS.community_ii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_ii_20_21_filepath = a;
                SSS.community_ii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "community_ii_21_22_filepath_1")
            {
                var Abc = SSS.community_ii_21_22_filepath.Split(',');
                var Filepath = SSS.community_ii_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_ii_21_22_filepath = a;
                SSS.community_ii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "community_ii_22_23_filepath_1")
            {
                var Abc = SSS.community_ii_22_23_filepath.Split(',');
                var Filepath = SSS.community_ii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_ii_22_23_filepath = a;
                SSS.community_ii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "community_ii_23_24_filepath_1")
            {
                var Abc = SSS.community_ii_23_24_filepath.Split(',');
                var Filepath = SSS.community_ii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_ii_23_24_filepath = a;
                SSS.community_ii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "community_ii_24_25_filepath_1")
            {
                var Abc = SSS.community_ii_24_25_filepath.Split(',');
                var Filepath = SSS.community_ii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_ii_24_25_filepath = a;
                SSS.community_ii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI2 IV row

        [HttpGet]
        public ActionResult Delete_First_DLI2_IV(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_two_upload_row4.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "community_vi_20_21_filepath_1")
            {
                var Abc = SSS.community_vi_20_21_filepath.Split(',');
                var Filepath = SSS.community_vi_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_vi_20_21_filepath = a;
                SSS.community_vi_20_21_filename = FileNames;
            }
            else if (Ss[1] == "community_vi_21_22_filepath_1")
            {
                var Abc = SSS.community_vi_21_22_filepath.Split(',');
                var Filepath = SSS.community_vi_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_vi_21_22_filepath = a;
                SSS.community_vi_21_22_filename = FileNames;
            }
            else if (Ss[1] == "community_vi_22_23_filepath_1")
            {
                var Abc = SSS.community_vi_22_23_filepath.Split(',');
                var Filepath = SSS.community_vi_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_vi_22_23_filepath = a;
                SSS.community_vi_22_23_filename = FileNames;
            }
            else if (Ss[1] == "community_vi_23_24_filepath_1")
            {
                var Abc = SSS.community_vi_23_24_filepath.Split(',');
                var Filepath = SSS.community_vi_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_vi_23_24_filepath = a;
                SSS.community_vi_23_24_filename = FileNames;
            }
            else if (Ss[1] == "community_vi_24_25_filepath_1")
            {
                var Abc = SSS.community_vi_24_25_filepath.Split(',');
                var Filepath = SSS.community_vi_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.community_vi_24_25_filepath = a;
                SSS.community_vi_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }
        //DLI 3

        [HttpGet]
        public ActionResult Delete_First_DLI3_II(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_three_upload_row1.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "statelevel_ii_20_21_filepath_1")
            {
                var Abc = SSS.statelevel_ii_20_21_filepath.Split(',');
                var Filepath = SSS.statelevel_ii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statelevel_ii_20_21_filepath = a;
                SSS.statelevel_ii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "statelevel_ii_21_22_filepath_1")
            {
                var Abc = SSS.statelevel_ii_21_22_filepath.Split(',');
                var Filepath = SSS.statelevel_ii_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statelevel_ii_21_22_filepath = a;
                SSS.statelevel_ii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "statelevel_ii_22_23_filepath_1")
            {
                var Abc = SSS.statelevel_ii_22_23_filepath.Split(',');
                var Filepath = SSS.statelevel_ii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statelevel_ii_22_23_filepath = a;
                SSS.statelevel_ii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "statelevel_ii_23_24_filepath_1")
            {
                var Abc = SSS.statelevel_ii_23_24_filepath.Split(',');
                var Filepath = SSS.statelevel_ii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statelevel_ii_23_24_filepath = a;
                SSS.statelevel_ii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "statelevel_ii_24_25_filepath_1")
            {
                var Abc = SSS.statelevel_ii_23_24_filepath.Split(',');
                var Filepath = SSS.statelevel_ii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.statelevel_ii_23_24_filepath = a;
                SSS.statelevel_ii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI 4
        //Ist Row

        [HttpGet]
        public ActionResult Delete_First_DLI4_I(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_four_upload_row1.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "irrigation_iii_20_21_filepath_1")
            {
                var Abc = SSS.irrigation_iii_20_21_filepath.Split(',');
                var Filepath = SSS.irrigation_iii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.irrigation_iii_20_21_filepath = a;
                SSS.irrigation_iii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "irrigation_iii_21_22_filepath_1")
            {
                var Abc = SSS.irrigation_iii_21_22_filepath.Split(',');
                var Filepath = SSS.irrigation_iii_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.irrigation_iii_21_22_filepath = a;
                SSS.irrigation_iii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "irrigation_iii_22_23_filepath_1")
            {
                var Abc = SSS.irrigation_iii_22_23_filepath.Split(',');
                var Filepath = SSS.irrigation_iii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.irrigation_iii_22_23_filepath = a;
                SSS.irrigation_iii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "irrigation_iii_23_24_filepath_1")
            {
                var Abc = SSS.irrigation_iii_23_24_filepath.Split(',');
                var Filepath = SSS.irrigation_iii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.irrigation_iii_23_24_filepath = a;
                SSS.irrigation_iii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "irrigation_iii_24_25_filepath_1")
            {
                var Abc = SSS.irrigation_iii_23_24_filepath.Split(',');
                var Filepath = SSS.irrigation_iii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.irrigation_iii_23_24_filepath = a;
                SSS.irrigation_iii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //row 2
        [HttpGet]
        public ActionResult Delete_First_DLI4_II(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_four_upload_row2.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "cropping_v_20_21_filepath_1")
            {
                var Abc = SSS.cropping_v_20_21_filepath.Split(',');
                var Filepath = SSS.cropping_v_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.cropping_v_20_21_filepath = a;
                SSS.cropping_v_20_21_filename = FileNames;
            }
            else if (Ss[1] == "cropping_v_21_22_filepath_1")
            {
                var Abc = SSS.cropping_v_21_22_filepath.Split(',');
                var Filepath = SSS.cropping_v_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.cropping_v_21_22_filepath = a;
                SSS.cropping_v_21_22_filename = FileNames;
            }
            else if (Ss[1] == "cropping_v_22_23_filepath_1")
            {
                var Abc = SSS.cropping_v_22_23_filepath.Split(',');
                var Filepath = SSS.cropping_v_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.cropping_v_22_23_filepath = a;
                SSS.cropping_v_22_23_filename = FileNames;
            }
            else if (Ss[1] == "cropping_v_23_24_filepath_1")
            {
                var Abc = SSS.cropping_v_23_24_filepath.Split(',');
                var Filepath = SSS.cropping_v_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.cropping_v_23_24_filepath = a;
                SSS.cropping_v_23_24_filename = FileNames;
            }
            else if (Ss[1] == "cropping_v_24_25_filepath_1")
            {
                var Abc = SSS.cropping_v_23_24_filepath.Split(',');
                var Filepath = SSS.cropping_v_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.cropping_v_24_25_filepath = a;
                SSS.cropping_v_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }

        //DLI 5------------------------------

        //Row 1   Delete_First_DLI5_I
        [HttpGet]
        public ActionResult Delete_First_DLI5_I(string state, string Elemnt)
        {
            var Ss = Elemnt.Split(',');

            var Data1 = ABE.obj_abhy_dli_five_upload_row1.Where(x => x.state_name == state).ToList();
            var SSS = Data1.LastOrDefault();
            if (Ss[1] == "blockwise_ii_20_21_filepath_1")
            {
                var Abc = SSS.blockwise_ii_20_21_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_20_21_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_20_21_filepath = a;
                SSS.blockwise_ii_20_21_filename = FileNames;
            }
            else if (Ss[1] == "blockwise_ii_21_22_filepath_1")
            {
                var Abc = SSS.blockwise_ii_21_22_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_21_22_filename.Split(',');

                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_21_22_filepath = a;
                SSS.blockwise_ii_21_22_filename = FileNames;
            }
            else if (Ss[1] == "blockwise_ii_22_23_filepath_1")
            {
                var Abc = SSS.blockwise_ii_22_23_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_22_23_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_22_23_filepath = a;
                SSS.blockwise_ii_22_23_filename = FileNames;
            }
            else if (Ss[1] == "blockwise_ii_23_24_filepath_1")
            {
                var Abc = SSS.blockwise_ii_23_24_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_23_24_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_23_24_filepath = a;
                SSS.blockwise_ii_23_24_filename = FileNames;
            }
            else if (Ss[1] == "blockwise_ii_24_25_filepath_1")
            {
                var Abc = SSS.blockwise_ii_23_24_filepath.Split(',');
                var Filepath = SSS.blockwise_ii_24_25_filename.Split(',');
                var a = "";
                var FileNames = "";
                for (var i = 0; i < Abc.Length; i++)
                {

                    if (Ss[0] != Abc[i])
                    {
                        if (Abc[i] != "")
                        {
                            FileNames += Filepath[i] + ",";
                            a += Abc[i] + ",";
                        }

                    }
                }

                SSS.blockwise_ii_23_24_filepath = a;
                SSS.blockwise_ii_24_25_filename = FileNames;
            }

            ABE.Entry(SSS).State = EntityState.Modified;
            ABE.SaveChanges();
            return Json("Ok", JsonRequestBehavior.AllowGet);

        }


        public ActionResult Export_admin_FrameWork_Matrix_ToExcel()
        {
            List<abhy_frameworkmatrix_new> ddetails = new List<abhy_frameworkmatrix_new>();

            var State = Session["AdminFrameworkstate"].ToString();

            if (State != "0" && State != "" && State != null)
            {
                if (State == "ALL")
                {
                    ddetails = ABE.obj_abhy_frameworkmatrix_new.ToList();//total list
                }
                else
                {
                    ddetails = ABE.obj_abhy_frameworkmatrix_new.Where(x => x.state_name == State).ToList();//total list
                }

            }

            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Data");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "StateName";
                worksheet.Cell(currentRow, 2).Value = "Indicator 1: States with improved groundwater monitoring and disclosure of groundwater data - Baseline";
                worksheet.Cell(currentRow, 3).Value = "Indicator 1: States with improved groundwater monitoring and disclosure of groundwater data - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 4).Value = "Indicator 1: States with improved groundwater monitoring and disclosure of groundwater data - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 5).Value = "Indicator 1: States with improved groundwater monitoring and disclosure of groundwater data - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 6).Value = "Indicator 1: States with improved groundwater monitoring and disclosure of groundwater data - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 7).Value = "Indicator 1: States with improved groundwater monitoring and disclosure of groundwater data - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 8).Value = "Indicator 1: States with improved groundwater monitoring and disclosure of groundwater data - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 9).Value = "1.1: Blocks with online groundwater quality and water-level monitoring reports made publicly available - Baseline";
                worksheet.Cell(currentRow, 10).Value = "1.1: Blocks with online groundwater quality and water-level monitoring reports made publicly available - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 11).Value = "1.1: Blocks with online groundwater quality and water-level monitoring reports made publicly available - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 12).Value = "1.1: Blocks with online groundwater quality and water-level monitoring reports made publicly available - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 13).Value = "1.1: Blocks with online groundwater quality and water-level monitoring reports made publicly available - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 14).Value = "1.1: Blocks with online groundwater quality and water-level monitoring reports made publicly available - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 15).Value = "1.1: Blocks with online groundwater quality and water-level monitoring reports made publicly available - Cumulative Achievements(2020-2025)";


                worksheet.Cell(currentRow, 16).Value = "1.2: State-level accredited groundwater quality labs - Baseline";
                worksheet.Cell(currentRow, 17).Value = "1.2: State-level accredited groundwater quality labs - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 18).Value = "1.2: State-level accredited groundwater quality labs - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 19).Value = "1.2: State-level accredited groundwater quality labs - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 20).Value = "1.2: State-level accredited groundwater quality labs - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 21).Value = "1.2: State-level accredited groundwater quality labs - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 22).Value = "1.2: State-level accredited groundwater quality labs - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 23).Value = "Indicator 2: GPs with Community-led WSPs prepared and approved - Baseline";
                worksheet.Cell(currentRow, 24).Value = "Indicator 2: GPs with Community-led WSPs prepared and approved - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 25).Value = "Indicator 2: GPs with Community-led WSPs prepared and approved - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 26).Value = "Indicator 2: GPs with Community-led WSPs prepared and approved - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 27).Value = "Indicator 2: GPs with Community-led WSPs prepared and approved - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 28).Value = "Indicator 2: GPs with Community-led WSPs prepared and approved - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 29).Value = "Indicator 2: GPs with Community-led WSPs prepared and approved - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 30).Value = "2.1: GP-level water budgets completed - Baseline";
                worksheet.Cell(currentRow, 31).Value = "2.1: GP-level water budgets completed - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 32).Value = "2.1: GP-level water budgets completed - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 33).Value = "2.1: GP-level water budgets completed - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 34).Value = "2.1: GP-level water budgets completed - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 35).Value = "2.1: GP-level water budgets completed - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 36).Value = "2.1: GP-level water budgets completed - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 37).Value = "Indicator 3: Direct Program beneficiaries - Baseline";
                worksheet.Cell(currentRow, 38).Value = "Indicator 3: Direct Program beneficiaries - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 39).Value = "Indicator 3: Direct Program beneficiaries - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 40).Value = "Indicator 3: Direct Program beneficiaries - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 41).Value = "Indicator 3: Direct Program beneficiaries - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 42).Value = "Indicator 3: Direct Program beneficiaries - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 43).Value = "Indicator 3: Direct Program beneficiaries - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 44).Value = "(3a) of which women - Baseline";
                worksheet.Cell(currentRow, 45).Value = "(3a) of which women - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 46).Value = "(3a) of which women - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 47).Value = "(3a) of which women - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 48).Value = "(3a) of which women - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 49).Value = "(3a) of which women - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 50).Value = "(3a) of which women - Cumulative Achievements(2020-2025)";


                worksheet.Cell(currentRow, 51).Value = "3.1: People benefitting from demand- side measures - Baseline";
                worksheet.Cell(currentRow, 52).Value = "3.1: People benefitting from demand- side measures - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 53).Value = "3.1: People benefitting from demand- side measures - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 54).Value = "3.1: People benefitting from demand- side measures - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 55).Value = "3.1: People benefitting from demand- side measures - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 56).Value = "3.1: People benefitting from demand- side measures - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 57).Value = "3.1: People benefitting from demand- side measures - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 58).Value = "(3.1a) of which women - Baseline";
                worksheet.Cell(currentRow, 59).Value = "(3.1a) of which women - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 60).Value = "(3.1a) of which women - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 61).Value = "(3.1a) of which women - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 62).Value = "(3.1a) of which women - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 63).Value = "(3.1a) of which women - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 64).Value = "(3.1a) of which women - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 65).Value = "Indicator 4: GPs which have adopted participatory groundwater management - Baseline";
                worksheet.Cell(currentRow, 66).Value = "Indicator 4: GPs which have adopted participatory groundwater management - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 67).Value = "Indicator 4: GPs which have adopted participatory groundwater management - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 68).Value = "Indicator 4: GPs which have adopted participatory groundwater management - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 69).Value = "Indicator 4: GPs which have adopted participatory groundwater management - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 70).Value = "Indicator 4: GPs which have adopted participatory groundwater management - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 71).Value = "Indicator 4: GPs which have adopted participatory groundwater management - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 72).Value = "4.1: WUAs or other village-level water committees established and functioning - Baseline";
                worksheet.Cell(currentRow, 73).Value = "4.1: WUAs or other village-level water committees established and functioning - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 74).Value = "4.1: WUAs or other village-level water committees established and functioning - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 75).Value = "4.1: WUAs or other village-level water committees established and functioning - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 76).Value = "4.1: WUAs or other village-level water committees established and functioning - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 77).Value = "4.1: WUAs or other village-level water committees established and functioning - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 78).Value = "4.1: WUAs or other village-level water committees established and functioning - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 79).Value = "4.2: Women’s representation in WUAs or other village-level water committees - Baseline";
                worksheet.Cell(currentRow, 80).Value = "4.2: Women’s representation in WUAs or other village-level water committees - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 81).Value = "4.2: Women’s representation in WUAs or other village-level water committees - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 82).Value = "4.2: Women’s representation in WUAs or other village-level water committees - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 83).Value = "4.2: Women’s representation in WUAs or other village-level water committees - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 84).Value = "4.2: Women’s representation in WUAs or other village-level water committees - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 85).Value = "4.2: Women’s representation in WUAs or other village-level water committees - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 86).Value = "4.3: Women in decision-making roles within WUAs (President, Vice President, Secretary, and Treasurer) - Baseline";
                worksheet.Cell(currentRow, 87).Value = "4.3: Women in decision-making roles within WUAs (President, Vice President, Secretary, and Treasurer) - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 88).Value = "4.3: Women in decision-making roles within WUAs (President, Vice President, Secretary, and Treasurer) - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 89).Value = "4.3: Women in decision-making roles within WUAs (President, Vice President, Secretary, and Treasurer) - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 90).Value = "4.3: Women in decision-making roles within WUAs (President, Vice President, Secretary, and Treasurer) - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 91).Value = "4.3: Women in decision-making roles within WUAs (President, Vice President, Secretary, and Treasurer) - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 92).Value = "4.3: Women in decision-making roles within WUAs (President, Vice President, Secretary, and Treasurer) - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 93).Value = "4.4: Wells with functioning meters for monitoring groundwater level (observation wells), volumetric water use, or energy use - Baseline";
                worksheet.Cell(currentRow, 94).Value = "4.4: Wells with functioning meters for monitoring groundwater level (observation wells), volumetric water use, or energy use - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 95).Value = "4.4: Wells with functioning meters for monitoring groundwater level (observation wells), volumetric water use, or energy use - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 96).Value = "4.4: Wells with functioning meters for monitoring groundwater level (observation wells), volumetric water use, or energy use - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 97).Value = "4.4: Wells with functioning meters for monitoring groundwater level (observation wells), volumetric water use, or energy use - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 98).Value = "4.4: Wells with functioning meters for monitoring groundwater level (observation wells), volumetric water use, or energy use - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 99).Value = "4.4: Wells with functioning meters for monitoring groundwater level (observation wells), volumetric water use, or energy use - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 100).Value = "Indicator 5: Area with reduction in water consumption - Baseline";
                worksheet.Cell(currentRow, 101).Value = "Indicator 5: Area with reduction in water consumption - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 102).Value = "Indicator 5: Area with reduction in water consumption - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 103).Value = "Indicator 5: Area with reduction in water consumption - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 104).Value = "Indicator 5: Area with reduction in water consumption - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 105).Value = "Indicator 5: Area with reduction in water consumption - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 106).Value = "Indicator 5: Area with reduction in water consumption - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 107).Value = "5.1: Area provided with new/improved irrigation or drainage services made publicly available - Baseline";
                worksheet.Cell(currentRow, 108).Value = "5.1: Area provided with new/improved irrigation or drainage services made publicly available - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 109).Value = "5.1: Area provided with new/improved irrigation or drainage services made publicly available - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 110).Value = "5.1: Area provided with new/improved irrigation or drainage services made publicly available - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 111).Value = "5.1: Area provided with new/improved irrigation or drainage services made publicly available - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 112).Value = "5.1: Area provided with new/improved irrigation or drainage services made publicly available - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 113).Value = "5.1: Area provided with new/improved irrigation or drainage services made publicly available - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 114).Value = "Indicator 6: Blocks with arrest in the declining trend of groundwater levels - Baseline";
                worksheet.Cell(currentRow, 115).Value = "Indicator 6: Blocks with arrest in the declining trend of groundwater levels - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 116).Value = "Indicator 6: Blocks with arrest in the declining trend of groundwater levels - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 117).Value = "Indicator 6: Blocks with arrest in the declining trend of groundwater levels - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 118).Value = "Indicator 6: Blocks with arrest in the declining trend of groundwater levels - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 119).Value = "Indicator 6: Blocks with arrest in the declining trend of groundwater levels - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 120).Value = "Indicator 6: Blocks with arrest in the declining trend of groundwater levels - Cumulative Achievements(2020-2025)";

                worksheet.Cell(currentRow, 121).Value = "6.1: Blocks that show reduction in stage of groundwater development - Baseline";
                worksheet.Cell(currentRow, 122).Value = "6.1: Blocks that show reduction in stage of groundwater development - Achievement (2020-2021)";
                worksheet.Cell(currentRow, 123).Value = "6.1: Blocks that show reduction in stage of groundwater development - Achievement (2021-2022)";
                worksheet.Cell(currentRow, 124).Value = "6.1: Blocks that show reduction in stage of groundwater development - Achievement (2022-2023)";
                worksheet.Cell(currentRow, 125).Value = "6.1: Blocks that show reduction in stage of groundwater development - Achievement (2023-2024)";
                worksheet.Cell(currentRow, 126).Value = "6.1: Blocks that show reduction in stage of groundwater development - Achievement (2024-2025)";
                worksheet.Cell(currentRow, 127).Value = "6.1: Blocks that show reduction in stage of groundwater development - Cumulative Achievements(2020-2025)";


                if (ddetails.Count != 0)
                {


                    foreach (var user in ddetails)
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = user.state_name;
                        worksheet.Cell(currentRow, 2).Value = user.dli1_1_baseline;
                        worksheet.Cell(currentRow, 3).Value = user.dli1_1_20_21;
                        worksheet.Cell(currentRow, 4).Value = user.dli1_1_21_22;
                        worksheet.Cell(currentRow, 5).Value = user.dli1_1_22_23;
                        worksheet.Cell(currentRow, 6).Value = user.dli1_1_23_24;
                        worksheet.Cell(currentRow, 7).Value = user.dli1_1_24_25;
                        worksheet.Cell(currentRow, 8).Value = user.dli1_1_cumulative;
                        worksheet.Cell(currentRow, 9).Value = user.dli1_1_1_baseline;
                        worksheet.Cell(currentRow, 10).Value = user.dli1_1_1_20_21;
                        worksheet.Cell(currentRow, 11).Value = user.dli1_1_1_21_22;
                        worksheet.Cell(currentRow, 12).Value = user.dli1_1_1_22_23;
                        worksheet.Cell(currentRow, 13).Value = user.dli1_1_1_23_24;
                        worksheet.Cell(currentRow, 14).Value = user.dli1_1_1_24_25;
                        worksheet.Cell(currentRow, 15).Value = user.dli1_1_1_cumulative;
                        worksheet.Cell(currentRow, 16).Value = user.dli1_1_2_baseline;
                        worksheet.Cell(currentRow, 17).Value = user.dli1_1_2_20_21;
                        worksheet.Cell(currentRow, 18).Value = user.dli1_1_2_21_22;
                        worksheet.Cell(currentRow, 19).Value = user.dli1_1_2_22_23;
                        worksheet.Cell(currentRow, 20).Value = user.dli1_1_2_23_24;
                        worksheet.Cell(currentRow, 21).Value = user.dli1_1_2_24_25;
                        worksheet.Cell(currentRow, 22).Value = user.dli1_1_2_cumulative;
                        worksheet.Cell(currentRow, 23).Value = user.dli2_2_baseline;
                        worksheet.Cell(currentRow, 24).Value = user.dli2_2_20_21;
                        worksheet.Cell(currentRow, 25).Value = user.dli2_2_21_22;
                        worksheet.Cell(currentRow, 26).Value = user.dli2_2_22_23;
                        worksheet.Cell(currentRow, 27).Value = user.dli2_2_23_24;
                        worksheet.Cell(currentRow, 28).Value = user.dli2_2_24_25;
                        worksheet.Cell(currentRow, 29).Value = user.dli2_2_cumulative;
                        worksheet.Cell(currentRow, 30).Value = user.dli2_2_1_baseline;
                        worksheet.Cell(currentRow, 31).Value = user.dli2_2_1_20_21;
                        worksheet.Cell(currentRow, 32).Value = user.dli2_2_1_21_22;
                        worksheet.Cell(currentRow, 33).Value = user.dli2_2_1_22_23;
                        worksheet.Cell(currentRow, 34).Value = user.dli2_2_1_23_24;
                        worksheet.Cell(currentRow, 35).Value = user.dli2_2_1_24_25;

                        worksheet.Cell(currentRow, 36).Value = user.dli2_2_1_cumulative;
                        worksheet.Cell(currentRow, 37).Value = user.dli2_3_baseline;
                        worksheet.Cell(currentRow, 38).Value = user.dli2_3_20_21;
                        worksheet.Cell(currentRow, 39).Value = user.dli2_3_21_22;
                        worksheet.Cell(currentRow, 40).Value = user.dli2_3_22_23;
                        worksheet.Cell(currentRow, 41).Value = user.dli2_3_23_24;
                        worksheet.Cell(currentRow, 42).Value = user.dli2_3_24_25;
                        worksheet.Cell(currentRow, 43).Value = user.dli2_3_cumulative;
                        worksheet.Cell(currentRow, 44).Value = user.dli2_3a_baseline;
                        worksheet.Cell(currentRow, 45).Value = user.dli2_3a_20_21;
                        worksheet.Cell(currentRow, 46).Value = user.dli2_3a_21_22;
                        worksheet.Cell(currentRow, 47).Value = user.dli2_3a_22_23;
                        worksheet.Cell(currentRow, 48).Value = user.dli2_3a_23_24;
                        worksheet.Cell(currentRow, 49).Value = user.dli2_3a_24_25;
                        worksheet.Cell(currentRow, 50).Value = user.dli2_3a_cumulative;

                        worksheet.Cell(currentRow, 51).Value = user.dli2_3_1_baseline;
                        worksheet.Cell(currentRow, 52).Value = user.dli2_3_1_20_21;
                        worksheet.Cell(currentRow, 53).Value = user.dli2_3_1_21_22;
                        worksheet.Cell(currentRow, 54).Value = user.dli2_3_1_22_23;
                        worksheet.Cell(currentRow, 55).Value = user.dli2_3_1_23_24;
                        worksheet.Cell(currentRow, 56).Value = user.dli2_3_1_24_25;
                        worksheet.Cell(currentRow, 57).Value = user.dli2_3_1_cumulative;

                        worksheet.Cell(currentRow, 58).Value = user.dli2_3_1a_baseline;
                        worksheet.Cell(currentRow, 59).Value = user.dli2_3_1a_20_21;
                        worksheet.Cell(currentRow, 60).Value = user.dli2_3_1a_21_22;
                        worksheet.Cell(currentRow, 61).Value = user.dli2_3_1a_22_23;
                        worksheet.Cell(currentRow, 62).Value = user.dli2_3_1a_23_24;
                        worksheet.Cell(currentRow, 63).Value = user.dli2_3_1a_24_25;
                        worksheet.Cell(currentRow, 64).Value = user.dli2_3_1a_cumulative;

                        worksheet.Cell(currentRow, 65).Value = user.dli3_4_baseline;
                        worksheet.Cell(currentRow, 66).Value = user.dli3_4_20_21;
                        worksheet.Cell(currentRow, 67).Value = user.dli3_4_21_22;
                        worksheet.Cell(currentRow, 68).Value = user.dli3_4_22_23;
                        worksheet.Cell(currentRow, 69).Value = user.dli3_4_23_24;
                        worksheet.Cell(currentRow, 70).Value = user.dli3_4_24_25;
                        worksheet.Cell(currentRow, 71).Value = user.dli3_4_cumulative;

                        worksheet.Cell(currentRow, 72).Value = user.dli3_4_1_baseline;
                        worksheet.Cell(currentRow, 73).Value = user.dli3_4_1_20_21;
                        worksheet.Cell(currentRow, 74).Value = user.dli3_4_1_21_22;
                        worksheet.Cell(currentRow, 75).Value = user.dli3_4_1_22_23;
                        worksheet.Cell(currentRow, 76).Value = user.dli3_4_1_23_24;
                        worksheet.Cell(currentRow, 77).Value = user.dli3_4_1_24_25;
                        worksheet.Cell(currentRow, 78).Value = user.dli3_4_1_cumulative;


                        worksheet.Cell(currentRow, 79).Value = user.dli3_4_2_baseline;
                        worksheet.Cell(currentRow, 80).Value = user.dli3_4_2_20_21;
                        worksheet.Cell(currentRow, 81).Value = user.dli3_4_2_21_22;
                        worksheet.Cell(currentRow, 82).Value = user.dli3_4_2_22_23;
                        worksheet.Cell(currentRow, 83).Value = user.dli3_4_2_23_24;
                        worksheet.Cell(currentRow, 84).Value = user.dli3_4_2_24_25;
                        worksheet.Cell(currentRow, 85).Value = user.dli3_4_2_cumulative;

                        worksheet.Cell(currentRow, 86).Value = user.dli3_4_3_baseline;
                        worksheet.Cell(currentRow, 87).Value = user.dli3_4_3_20_21;
                        worksheet.Cell(currentRow, 88).Value = user.dli3_4_3_21_22;
                        worksheet.Cell(currentRow, 89).Value = user.dli3_4_1_22_23;
                        worksheet.Cell(currentRow, 90).Value = user.dli3_4_3_23_24;
                        worksheet.Cell(currentRow, 91).Value = user.dli3_4_3_24_25;
                        worksheet.Cell(currentRow, 92).Value = user.dli3_4_3_cumulative;

                        worksheet.Cell(currentRow, 93).Value = user.dli3_4_4_baseline;
                        worksheet.Cell(currentRow, 94).Value = user.dli3_4_4_20_21;
                        worksheet.Cell(currentRow, 95).Value = user.dli3_4_4_21_22;
                        worksheet.Cell(currentRow, 96).Value = user.dli3_4_4_22_23;
                        worksheet.Cell(currentRow, 97).Value = user.dli3_4_4_23_24;
                        worksheet.Cell(currentRow, 98).Value = user.dli3_4_4_24_25;
                        worksheet.Cell(currentRow, 99).Value = user.dli3_4_4_cumulative;

                        worksheet.Cell(currentRow, 100).Value = user.dli4_5_baseline;
                        worksheet.Cell(currentRow, 101).Value = user.dli4_5_20_21;
                        worksheet.Cell(currentRow, 102).Value = user.dli4_5_21_22;
                        worksheet.Cell(currentRow, 103).Value = user.dli4_5_22_23;
                        worksheet.Cell(currentRow, 104).Value = user.dli4_5_23_24;
                        worksheet.Cell(currentRow, 105).Value = user.dli4_5_24_25;
                        worksheet.Cell(currentRow, 106).Value = user.dli4_5_cumulative;

                        worksheet.Cell(currentRow, 107).Value = user.dli4_5_1_baseline;
                        worksheet.Cell(currentRow, 108).Value = user.dli4_5_1_20_21;
                        worksheet.Cell(currentRow, 109).Value = user.dli4_5_1_21_22;
                        worksheet.Cell(currentRow, 110).Value = user.dli4_5_1_22_23;
                        worksheet.Cell(currentRow, 111).Value = user.dli4_5_1_23_24;
                        worksheet.Cell(currentRow, 112).Value = user.dli4_5_1_24_25;
                        worksheet.Cell(currentRow, 113).Value = user.dli4_5_1_cumulative;

                        worksheet.Cell(currentRow, 114).Value = user.dli5_6_baseline;
                        worksheet.Cell(currentRow, 115).Value = user.dli5_6_20_21;
                        worksheet.Cell(currentRow, 116).Value = user.dli5_6_21_22;
                        worksheet.Cell(currentRow, 117).Value = user.dli5_6_22_23;
                        worksheet.Cell(currentRow, 118).Value = user.dli5_6_23_24;
                        worksheet.Cell(currentRow, 119).Value = user.dli5_6_24_25;
                        worksheet.Cell(currentRow, 120).Value = user.dli5_6_cumulative;

                        worksheet.Cell(currentRow, 121).Value = user.dli5_6_1_baseline;
                        worksheet.Cell(currentRow, 122).Value = user.dli5_6_1_20_21;
                        worksheet.Cell(currentRow, 123).Value = user.dli5_6_1_21_22;
                        worksheet.Cell(currentRow, 124).Value = user.dli5_6_1_22_23;
                        worksheet.Cell(currentRow, 125).Value = user.dli5_6_1_23_24;
                        worksheet.Cell(currentRow, 126).Value = user.dli5_6_1_24_25;
                        worksheet.Cell(currentRow, 127).Value = user.dli5_6_1_cumulative;


                    }
                }
                else
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "";
                    worksheet.Cell(currentRow, 2).Value = "";
                    worksheet.Cell(currentRow, 3).Value = "";
                    worksheet.Cell(currentRow, 4).Value = "";
                    worksheet.Cell(currentRow, 5).Value = "";
                    worksheet.Cell(currentRow, 6).Value = "";
                    worksheet.Cell(currentRow, 7).Value = "";
                    worksheet.Cell(currentRow, 8).Value = "";
                    worksheet.Cell(currentRow, 9).Value = "";
                    worksheet.Cell(currentRow, 10).Value = "NO DATA";
                    worksheet.Cell(currentRow, 11).Value = "";
                    worksheet.Cell(currentRow, 12).Value = "";
                    worksheet.Cell(currentRow, 13).Value = "";
                    worksheet.Cell(currentRow, 14).Value = "";
                    worksheet.Cell(currentRow, 15).Value = "";
                    worksheet.Cell(currentRow, 16).Value = "";
                    worksheet.Cell(currentRow, 17).Value = "";
                    worksheet.Cell(currentRow, 18).Value = "";
                    worksheet.Cell(currentRow, 19).Value = "";
                    worksheet.Cell(currentRow, 20).Value = "";
                    worksheet.Cell(currentRow, 21).Value = "";
                    worksheet.Cell(currentRow, 22).Value = "";
                    worksheet.Cell(currentRow, 23).Value = "";
                    worksheet.Cell(currentRow, 24).Value = "";
                    worksheet.Cell(currentRow, 25).Value = "NO DATA";
                    worksheet.Cell(currentRow, 26).Value = "";
                    worksheet.Cell(currentRow, 27).Value = "";
                    worksheet.Cell(currentRow, 28).Value = "";
                    worksheet.Cell(currentRow, 29).Value = "";
                    worksheet.Cell(currentRow, 30).Value = "";
                    worksheet.Cell(currentRow, 31).Value = "";
                    worksheet.Cell(currentRow, 32).Value = "";
                    worksheet.Cell(currentRow, 33).Value = "";
                    worksheet.Cell(currentRow, 34).Value = "";
                    worksheet.Cell(currentRow, 35).Value = "";
                    worksheet.Cell(currentRow, 36).Value = "";
                    worksheet.Cell(currentRow, 37).Value = "";
                    worksheet.Cell(currentRow, 38).Value = "";
                    worksheet.Cell(currentRow, 39).Value = "NO DATA";
                    worksheet.Cell(currentRow, 40).Value = "";
                    worksheet.Cell(currentRow, 41).Value = "";
                    worksheet.Cell(currentRow, 42).Value = "";
                    worksheet.Cell(currentRow, 43).Value = "";
                    worksheet.Cell(currentRow, 44).Value = "";
                    worksheet.Cell(currentRow, 45).Value = "";
                    worksheet.Cell(currentRow, 46).Value = "";
                    worksheet.Cell(currentRow, 47).Value = "";
                    worksheet.Cell(currentRow, 48).Value = "";
                    worksheet.Cell(currentRow, 49).Value = "";
                    worksheet.Cell(currentRow, 50).Value = "";

                    worksheet.Cell(currentRow, 51).Value = "";
                    worksheet.Cell(currentRow, 52).Value = "";
                    worksheet.Cell(currentRow, 53).Value = "";
                    worksheet.Cell(currentRow, 54).Value = "";
                    worksheet.Cell(currentRow, 55).Value = "";
                    worksheet.Cell(currentRow, 56).Value = "";
                    worksheet.Cell(currentRow, 57).Value = "";
                    worksheet.Cell(currentRow, 58).Value = "";
                    worksheet.Cell(currentRow, 59).Value = "";
                    worksheet.Cell(currentRow, 60).Value = "";
                    worksheet.Cell(currentRow, 61).Value = "";
                    worksheet.Cell(currentRow, 62).Value = "";
                    worksheet.Cell(currentRow, 63).Value = "";
                    worksheet.Cell(currentRow, 64).Value = "NO DATA";
                    worksheet.Cell(currentRow, 65).Value = "";
                    worksheet.Cell(currentRow, 66).Value = "";
                    worksheet.Cell(currentRow, 67).Value = "";
                    worksheet.Cell(currentRow, 68).Value = "";
                    worksheet.Cell(currentRow, 69).Value = "";
                    worksheet.Cell(currentRow, 70).Value = "";
                    worksheet.Cell(currentRow, 71).Value = "";
                    worksheet.Cell(currentRow, 72).Value = "";
                    worksheet.Cell(currentRow, 73).Value = "";
                    worksheet.Cell(currentRow, 74).Value = "";
                    worksheet.Cell(currentRow, 75).Value = "";

                    worksheet.Cell(currentRow, 76).Value = "";
                    worksheet.Cell(currentRow, 77).Value = "";
                    worksheet.Cell(currentRow, 78).Value = "";
                    worksheet.Cell(currentRow, 79).Value = "";
                    worksheet.Cell(currentRow, 80).Value = "";
                    worksheet.Cell(currentRow, 81).Value = "";
                    worksheet.Cell(currentRow, 82).Value = "";
                    worksheet.Cell(currentRow, 83).Value = "";
                    worksheet.Cell(currentRow, 84).Value = "";
                    worksheet.Cell(currentRow, 85).Value = "";
                    worksheet.Cell(currentRow, 86).Value = "";
                    worksheet.Cell(currentRow, 87).Value = "";
                    worksheet.Cell(currentRow, 88).Value = "";
                    worksheet.Cell(currentRow, 89).Value = "NO DATA";
                    worksheet.Cell(currentRow, 90).Value = "";
                    worksheet.Cell(currentRow, 91).Value = "";
                    worksheet.Cell(currentRow, 92).Value = "";
                    worksheet.Cell(currentRow, 93).Value = "";
                    worksheet.Cell(currentRow, 94).Value = "";
                    worksheet.Cell(currentRow, 95).Value = "";
                    worksheet.Cell(currentRow, 96).Value = "";
                    worksheet.Cell(currentRow, 97).Value = "";
                    worksheet.Cell(currentRow, 98).Value = "";
                    worksheet.Cell(currentRow, 99).Value = "";
                    worksheet.Cell(currentRow, 100).Value = "";


                    worksheet.Cell(currentRow, 101).Value = "";
                    worksheet.Cell(currentRow, 102).Value = "";
                    worksheet.Cell(currentRow, 103).Value = "";
                    worksheet.Cell(currentRow, 104).Value = "";
                    worksheet.Cell(currentRow, 105).Value = "";
                    worksheet.Cell(currentRow, 106).Value = "";
                    worksheet.Cell(currentRow, 107).Value = "";
                    worksheet.Cell(currentRow, 108).Value = "";
                    worksheet.Cell(currentRow, 109).Value = "";
                    worksheet.Cell(currentRow, 110).Value = "";
                    worksheet.Cell(currentRow, 111).Value = "";
                    worksheet.Cell(currentRow, 112).Value = "";
                    worksheet.Cell(currentRow, 113).Value = "";
                    worksheet.Cell(currentRow, 114).Value = "NO DATA";
                    worksheet.Cell(currentRow, 115).Value = "";
                    worksheet.Cell(currentRow, 116).Value = "";
                    worksheet.Cell(currentRow, 117).Value = "";
                    worksheet.Cell(currentRow, 118).Value = "";
                    worksheet.Cell(currentRow, 119).Value = "";
                    worksheet.Cell(currentRow, 120).Value = "";
                    worksheet.Cell(currentRow, 121).Value = "";
                    worksheet.Cell(currentRow, 122).Value = "";
                    worksheet.Cell(currentRow, 123).Value = "";
                    worksheet.Cell(currentRow, 124).Value = "";
                    worksheet.Cell(currentRow, 125).Value = "";
                    worksheet.Cell(currentRow, 126).Value = "";
                    worksheet.Cell(currentRow, 127).Value = "";
                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Framework_Matrix_Information.xlsx");
                }



            }
        }


    }
}

