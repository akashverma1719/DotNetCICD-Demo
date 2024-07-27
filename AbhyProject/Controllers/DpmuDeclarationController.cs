using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
    public class DpmuDeclarationController : Controller
    {

        AbhyEntity ABE = new AbhyEntity();
        // GET: DpmuDeclaration
        public ActionResult declaration()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Upload_dpmu_declaration(HttpPostedFileBase dpmu_declaration)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;

                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    string state_name = Session["gstate"].ToString();
                    string district_name = Session["gdist"].ToString();
                    string block_name = Session["gblock"].ToString();
                    string gp_name = Session["ggram"].ToString();
                    string entry_by = Session["Email"].ToString();
                    string data_year = Session["year"].ToString();
                    string month = monthName;

                    abhy_wsp_dpmu_declaration data = new abhy_wsp_dpmu_declaration();
                    List<abhy_wsp_dpmu_declaration> details1 = new List<abhy_wsp_dpmu_declaration>();
                    details1 = ABE.obj_abhy_wsp_dpmu_declaration.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.data_year == data_year).ToList();
                    if (details1.Count != 0)
                    {
                        var data1 = details1.AsQueryable().FirstOrDefault();
                        data1.entry_by = entry_by;

                        if (dpmu_declaration != null)
                        {

                            if (dpmu_declaration.FileName != null)
                            {
                                string FileExt = Path.GetExtension(dpmu_declaration.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = dpmu_declaration.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = Path.GetExtension(dpmu_declaration.FileName);
                                string name = Path.GetFileNameWithoutExtension(dpmu_declaration.FileName);
                                string filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalDPMUDeclaration\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gp_name + "\\" + data_year + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + filename;
                                dpmu_declaration.SaveAs(path);
                                //Details.dpmu_declaration = mom.FileName;
                                data1.dpmu_declaration = "/Ataljalimages/AtaljalDPMUDeclaration/" + state_name + "/" + district_name + "/" + block_name + "/" + gp_name + "/" + data_year + "/" + filename;
                                ABE.Entry(data1).State = EntityState.Modified;
                                ABE.SaveChanges();

                            }
                        }
                        return Json("Successfully Updated", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        data.state_name = state_name;
                        data.district_name = district_name;
                        data.block_name = block_name;
                        data.gp_name = gp_name;
                        data.data_year = data_year;
                        data.entry_by = entry_by;
                        data.month = month;
                        int month_num = Get_Month_Number(month);
                        data.month_order_by = month_num;

                        if (dpmu_declaration != null)
                        {

                            if (dpmu_declaration.FileName != null)
                            {
                                string FileExt = Path.GetExtension(dpmu_declaration.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = dpmu_declaration.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = Path.GetExtension(dpmu_declaration.FileName);
                                string name = Path.GetFileNameWithoutExtension(dpmu_declaration.FileName);
                                string filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\AtaljalDPMUDeclaration\\" + state_name + "\\" + district_name + "\\" + block_name + "\\" + gp_name + "\\" + data_year + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + filename;
                                dpmu_declaration.SaveAs(path);
                                //Details.dpmu_declaration = mom.FileName;
                                data.dpmu_declaration = "/Ataljalimages/AtaljalDPMUDeclaration/" + state_name + "/" + district_name + "/" + block_name + "/" + gp_name + "/" + data_year + "/" + filename;
                                ABE.obj_abhy_wsp_dpmu_declaration.Add(data);
                                ABE.SaveChanges();
                            }
                        }
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                    }
                }
                catch (Exception ex)
                {
                    return Json("Data Not Saved");
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult Get_dpmu_declaration()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    string state_name = Session["gstate"].ToString();
                    string district_name = Session["gdist"].ToString();
                    string block_name = Session["gblock"].ToString();
                    string gp_name = Session["ggram"].ToString();
                    string entry_by = Session["Email"].ToString();
                    string data_year = Session["year"].ToString();
                    //string month = Session["month"].ToString();

                    abhy_wsp_dpmu_declaration_vw data = new abhy_wsp_dpmu_declaration_vw();
                    var details1 = ABE.obj_abhy_wsp_dpmu_declaration_vw.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.data_year == data_year).ToList();
                    return Json(details1, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("SessionTimeOut", JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult Delete_dpmu_declaration(string data)
        {
            if (Session["userid"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<dynamic>(data);

                    int id = Convert.ToInt32(result["IDD"]);

                    var DEtails = ABE.obj_abhy_wsp_dpmu_declaration.Where(x => x.id == id).ToList();
                    DEtails[0].dpmu_declaration = "";

                    ABE.Entry(DEtails[0]).State = EntityState.Modified;
                    ABE.SaveChanges();

                    return Json("Deleted", JsonRequestBehavior.AllowGet);

                }


                catch (Exception ex)
                {
                    return Json("error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("logout", JsonRequestBehavior.AllowGet);
            }
        }


        public int Get_Month_Number(string month)
        {
            int month_num = 0;
            switch (month)
            {
                case "April":
                    month_num = 1;
                    break;
                case "May":
                    month_num = 2;
                    break;
                case "June":
                    month_num = 3;
                    break;
                case "July":
                    month_num = 4;
                    break;
                case "August":
                    month_num = 5;
                    break;
                case "September":
                    month_num = 6;
                    break;
                case "October":
                    month_num = 7;
                    break;
                case "November":
                    month_num = 8;
                    break;
                case "December":
                    month_num = 9;
                    break;
                case "January":
                    month_num = 10;
                    break;
                case "February":
                    month_num = 11;
                    break;
                case "March":
                    month_num = 12;
                    break;
            }
            return month_num;
        }
    }
}