using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using AbhyProject.Classes;
using AbhyProject.Models;

namespace AbhyProject.Controllers
{
    public class PgwmController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult pgwm_summary()
        {
            return View();
        }



        [HttpPost]
        public ActionResult Save_abhy_wsp_pgwm_committee_member(string data)
        {
            try
            {
                DateTime now = DateTime.Now;
                int MonthNumber = now.Month;

                // Get the name of the month
                string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<abhy_wsp_pgwm_committee_member>(data);
                var Data = new abhy_wsp_pgwm_committee_member();
                var obj = new abhy_wsp_pgwm_committee();
                var month = monthName;
                obj.state_name = Session["gstate"].ToString();
                obj.district_name = Session["gdist"].ToString();
                obj.block_name = Session["gblock"].ToString(); ;
                obj.gp_name = Session["ggram"].ToString();
                obj.data_year = Session["year"].ToString();
                obj.entry_by = Session["Email"].ToString();

                ABE.obj_abhy_wsp_pgwm_committee.Add(obj);
                ABE.SaveChanges();

                Data.abhy_wsp_pgwm_committee_id = obj.id;
                Data.member_name = result.member_name;
                Data.designation = result.designation;
                Data.gender = result.gender;
                Data.contact_no = result.contact_no;
                Data.month = month;
                Data.month_order_by = Get_Month_Number(month);
                Data.entry_by = Session["Email"].ToString();

                //ABE.Entry(Data).State = EntityState.Modified;
                ABE.obj_abhy_wsp_pgwm_committee_member.Add(Data);
                ABE.SaveChanges();

                return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            { return Json("Error", JsonRequestBehavior.AllowGet); }
        }


        [HttpGet]
        public ActionResult Getting_abhy_wsp_pgwm_committee_member()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var month = Session["month"].ToString();
                    List<abhy_wsp_pgwm_committee_member_vw> ddetails = new List<abhy_wsp_pgwm_committee_member_vw>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_pgwm_committee_member_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).ToList();//total list
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

            }
        }


        [HttpPost]
        public ActionResult Delete_abhy_wsp_pgwm_committee_member(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_wsp_pgwm_committee>(Data);

                    if (result.id != 0)
                    {
                        var TKID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_wsp_pgwm_committee.Where(x => x.id == TKID).SingleOrDefault();
                        var Data2 = ABE.obj_abhy_wsp_pgwm_committee_member.Where(x => x.abhy_wsp_pgwm_committee_id == TKID).SingleOrDefault();
                        if (Data1 != null && Data2 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.Entry(Data2).State = EntityState.Deleted;
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

        public class TestModel
        {
            public int abhy_wsp_pgwm_committee_id { get; set; }
            public HttpPostedFileBase mom_doc { get; set; }
            public HttpPostedFileBase meeting_image { get; set; }
            public HttpPostedFileBase meeting_resolution { get; set; }
            public HttpPostedFileBase attendance_sheet { get; set; }
            public string meeting_date { get; set; }
            public string meeting_gp_name { get; set; }
            public string month { get; set; }
            public string meeting_village { get; set; }
            public string meeting_location { get; set; }
            public int male_attendees { get; set; }
            public int female_attendees { get; set; }
            public int transgender_attendees { get; set; }
            public int total_attendees { get; set; }
        }

        [HttpPost]
        public ActionResult Save_abhy_wsp_pgwm_committee_meeting(TestModel model)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    DateTime now = DateTime.Now;
                    int MonthNumber = now.Month;
                    // Get the name of the month
                    string monthName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(MonthNumber);
                    var months = monthName;
                    var state_name = Session["gstate"].ToString();
                    var district_name = Session["gdist"].ToString();
                    var block_name = Session["gblock"].ToString();
                    var gp_name = Session["ggram"].ToString();
                    var data_year = Session["year"].ToString();

                    var data_count = ABE.obj_abhy_wsp_pgwm_committee_meeting_vw.Where(x => x.state_name == state_name && x.district_name == district_name && x.block_name == block_name && x.gp_name == gp_name && x.data_year == data_year).ToList();
                    if (data_count.Count != 0)
                    {
                        return Json("Already, data exists. For re-entry data, First delete or use edit!", JsonRequestBehavior.AllowGet);
                    }
                    List<abhy_wsp_pgwm_committee_meeting> ddetails = new List<abhy_wsp_pgwm_committee_meeting>();
                    var Details = new abhy_wsp_pgwm_committee_meeting();
                    var obj = new abhy_wsp_pgwm_committee();
                    model.month = monthName;
                    obj.state_name = Session["gstate"].ToString();
                    obj.district_name = Session["gdist"].ToString();
                    obj.block_name = Session["gblock"].ToString();
                    obj.gp_name = Session["ggram"].ToString();
                    obj.entry_by = Session["Email"].ToString();
                    obj.data_year = Session["year"].ToString();

                    ABE.obj_abhy_wsp_pgwm_committee.Add(obj);
                    ABE.SaveChanges();

                    Details.abhy_wsp_pgwm_committee_id = obj.id;
                    Details.meeting_date = model.meeting_date;
                    Details.meeting_gp_name = model.meeting_gp_name;
                    Details.meeting_village = model.meeting_village;
                    Details.meeting_location = model.meeting_location;
                    Details.male_attendees = model.male_attendees;
                    Details.female_attendees = model.female_attendees;
                    Details.transgender_attendees = model.transgender_attendees;
                    Details.month = model.month;
                    Details.month_order_by = Get_Month_Number(model.month);
                    Details.entry_by = Session["Email"].ToString();

                    var Total = 0;
                    Total = model.male_attendees + model.female_attendees + model.transgender_attendees;
                    Details.total_attendees = Total;
                    if (model.mom_doc != null)
                    {
                        if (model.mom_doc.FileName != null)
                        {
                            string FileExt = Path.GetExtension(model.mom_doc.FileName).ToUpper();
                            if (FileExt != ".PDF")
                            {
                                return Json("Choose Valid MOM(pdf)", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.mom_doc.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = Path.GetExtension(model.mom_doc.FileName);
                            string name = Path.GetFileNameWithoutExtension(model.mom_doc.FileName);
                            string mom_filename = name + DateTime.Now.Ticks + ext;

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\MOM\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + mom_filename;
                            model.mom_doc.SaveAs(path);
                            //Details.mom_doc = mom.FileName;
                            Details.mom_doc = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/MOM/" + mom_filename;
                        }
                    }
                    if (model.meeting_image != null)
                    {
                        if (model.meeting_image.FileName != null)
                        {
                            string FileExt = Path.GetExtension(model.meeting_image.FileName).ToUpper();
                            if (FileExt != ".JPEG" && FileExt != ".PNG" && FileExt != ".JPG")
                            {
                                return Json("Choose Valid Photograph", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.meeting_image.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = Path.GetExtension(model.meeting_image.FileName);
                            string name = Path.GetFileNameWithoutExtension(model.meeting_image.FileName);
                            string meeting_filename = name + DateTime.Now.Ticks + ext;
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\Meeting Image\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + meeting_filename;
                            model.meeting_image.SaveAs(path);
                            //Details.meeting_image = photograph.FileName;
                            Details.meeting_image = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/Meeting Image/" + meeting_filename;
                        }
                    }
                    if (model.meeting_resolution != null)
                    {
                        if (model.meeting_resolution.FileName != null)
                        {
                            string FileExt = Path.GetExtension(model.meeting_resolution.FileName).ToUpper();
                            if (FileExt != ".PDF")
                            {
                                return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.meeting_resolution.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = Path.GetExtension(model.meeting_resolution.FileName);
                            string name = Path.GetFileNameWithoutExtension(model.meeting_resolution.FileName);
                            string meeting_resolution_filename = name + DateTime.Now.Ticks + ext;

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\Meeting Resolution\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + meeting_resolution_filename;
                            model.meeting_resolution.SaveAs(path);
                            Details.meeting_resolution = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/Meeting Resolution/" + meeting_resolution_filename;
                        }
                    }
                    if (model.attendance_sheet != null)
                    {
                        if (model.attendance_sheet.FileName != null)
                        {
                            string FileExt = Path.GetExtension(model.attendance_sheet.FileName).ToUpper();
                            if (FileExt != ".PDF")
                            {
                                return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);
                            }
                            string[] count = model.attendance_sheet.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                            }
                            string ext = Path.GetExtension(model.attendance_sheet.FileName);
                            string name = Path.GetFileNameWithoutExtension(model.attendance_sheet.FileName);
                            string attendance_sheet_filename = name + DateTime.Now.Ticks + ext;

                            string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\Attendance Sheet\\" + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + attendance_sheet_filename;
                            model.attendance_sheet.SaveAs(path);
                            Details.attendance_sheet = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/Attendance Sheet/" + attendance_sheet_filename;
                        }
                    }
                    ABE.obj_abhy_wsp_pgwm_committee_meeting.Add(Details);
                    ABE.SaveChanges();
                    return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json("Data Not Saved");
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }

            //return Json("Logout", JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult Getting_abhy_wsp_pgwm_committee_meeting()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var State = Session["gstate"].ToString();
                    var Dist = Session["gdist"].ToString();
                    var Block = Session["gblock"].ToString();
                    var Gram = Session["ggram"].ToString();
                    var Year = Session["year"].ToString();
                    //var month = Session["month"].ToString();

                    List<abhy_wsp_pgwm_committee_meeting_vw> ddetails = new List<abhy_wsp_pgwm_committee_meeting_vw>();

                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        ddetails = ABE.obj_abhy_wsp_pgwm_committee_meeting_vw.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gp_name == Gram && x.data_year == Year).ToList();//total list

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

            }

        }


        [HttpPost]
        public ActionResult Delete_pgwm_meeting(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_wsp_pgwm_committee_meeting>(Data);

                    if (result.id != 0)
                    {
                        var GPID = Convert.ToInt32(result.id);
                        var Data1 = ABE.obj_abhy_wsp_pgwm_committee_meeting.Where(x => x.abhy_wsp_pgwm_committee_id == GPID).SingleOrDefault();
                        var Data2 = ABE.obj_abhy_wsp_pgwm_committee.Where(x => x.id == GPID).SingleOrDefault();
                        if (Data1 != null)
                        {

                            ABE.Entry(Data1).State = EntityState.Deleted;
                            ABE.Entry(Data2).State = EntityState.Deleted;
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


        [HttpPost]
        public ActionResult Update_pgwm_meeting_Info(TestModel model)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    var GPID = Convert.ToInt32(model.abhy_wsp_pgwm_committee_id);
                    var obj = ABE.obj_abhy_wsp_pgwm_committee_meeting_vw.Where(x => x.id == GPID).SingleOrDefault();
                    var Data1 = ABE.obj_abhy_wsp_pgwm_committee_meeting.Where(x => x.abhy_wsp_pgwm_committee_id == GPID).SingleOrDefault();
                    if (Data1 != null)
                    {
                        //Data1.id = GPID;
                        Data1.meeting_date = model.meeting_date;
                        //Data1.meeting_gp_name = meeting_gp_name;
                        Data1.meeting_village = model.meeting_village;
                        Data1.meeting_location = model.meeting_location;
                        Data1.male_attendees = model.male_attendees;
                        Data1.female_attendees = model.female_attendees;
                        Data1.transgender_attendees = model.transgender_attendees;
                        Data1.total_attendees = model.total_attendees;

                        if (model.mom_doc != null)
                        {

                            if (model.mom_doc.FileName != null)
                            {
                                string FileExt = Path.GetExtension(model.mom_doc.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid MOM(pdf)", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.mom_doc.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = Path.GetExtension(model.mom_doc.FileName);
                                string name = Path.GetFileNameWithoutExtension(model.mom_doc.FileName);
                                string mom_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\MOM\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + mom_filename;
                                model.mom_doc.SaveAs(path);
                                //Details.mom_doc = mom.FileName;
                                Data1.mom_doc = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/MOM/" + mom_filename;
                            }
                        }

                        if (model.meeting_image != null)
                        {
                            if (model.meeting_image.FileName != null)
                            {
                                string FileExt = Path.GetExtension(model.meeting_image.FileName).ToUpper();
                                if (FileExt != ".JPEG" && FileExt != ".PNG" && FileExt != ".JPG")
                                {
                                    return Json("Choose Valid Photograph", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.meeting_image.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = Path.GetExtension(model.meeting_image.FileName);
                                string name = Path.GetFileNameWithoutExtension(model.meeting_image.FileName);
                                string meeting_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\Meeting Image\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }


                                path = path + meeting_filename;
                                model.meeting_image.SaveAs(path);
                                //Details.meeting_image = photograph.FileName;
                                Data1.meeting_image = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/Meeting Image/" + meeting_filename;

                            }

                        }

                        if (model.meeting_resolution != null)
                        {

                            if (model.meeting_resolution.FileName != null)
                            {
                                string FileExt = Path.GetExtension(model.meeting_resolution.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.meeting_resolution.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = Path.GetExtension(model.meeting_resolution.FileName);
                                string name = Path.GetFileNameWithoutExtension(model.meeting_resolution.FileName);
                                string meeting_resolution_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\Meeting Resolution\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + meeting_resolution_filename;
                                model.meeting_resolution.SaveAs(path);
                                Data1.meeting_resolution = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/Meeting Resolution/" + meeting_resolution_filename;

                            }

                        }
                        if (model.attendance_sheet != null)
                        {

                            if (model.attendance_sheet.FileName != null)
                            {
                                string FileExt = Path.GetExtension(model.attendance_sheet.FileName).ToUpper();
                                if (FileExt != ".PDF")
                                {
                                    return Json("Choose Valid Resolution(pdf)", JsonRequestBehavior.AllowGet);

                                }
                                string[] count = model.attendance_sheet.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                string ext = Path.GetExtension(model.attendance_sheet.FileName);
                                string name = Path.GetFileNameWithoutExtension(model.attendance_sheet.FileName);
                                string attendance_sheet_filename = name + DateTime.Now.Ticks + ext;

                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\PGWM\\" + obj.gp_name + "\\" + obj.data_year + "\\Attendance Sheet\\" + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }

                                path = path + attendance_sheet_filename;
                                model.attendance_sheet.SaveAs(path);
                                Data1.attendance_sheet = "/Ataljalimages/PGWM/" + obj.gp_name + "/" + obj.data_year + "/Attendance Sheet/" + attendance_sheet_filename;

                            }

                        }

                        ABE.Entry(Data1).State = EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Updated Successfully");
                        }
                        else
                        {
                            return Json("Not Updated");
                        }
                    }

                }
                catch (Exception ex)
                {
                    return Json("Unsuccessful Update");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
    }
}
