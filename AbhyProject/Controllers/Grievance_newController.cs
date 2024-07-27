using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace AbhyProject.Controllers
{
	public class Grievance_newController : Controller
	{

		AbhyEntity ABE = new AbhyEntity();
		public ActionResult Index()
		{

			return View();

		}
		public ActionResult Report_page()
		{
			return View();
		}
		public ActionResult Index_new()
		{

			return View();

		}


		public ActionResult Excel_state_level(string State1)
		{
			var State = State1;

			List<grievance_new> data = ABE.objgrievance_new.ToList();
			List<abhy_grievance_officer_mails_info_new> OfficersInfo = ABE.obj_abhy_grievance_officer_mails_info_new.ToList();


			if (State != "0" && State != "" && State != null && State != "ALL")
			{
				data = ABE.objgrievance_new.Where(x => x.grievance_address_to == State).ToList();
				OfficersInfo = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == State).ToList();
			}
			else if (State == "ALL")
			{

				data = ABE.objgrievance_new.ToList();
				OfficersInfo = ABE.obj_abhy_grievance_officer_mails_info_new.ToList();
			}

			DataTable dt = new DataTable();
			var objExaminationList = data;
			dt.Columns.Add("Grievance ID", typeof(string));
			dt.Columns.Add("Registration Mode", typeof(string));
			dt.Columns.Add("Subject", typeof(string));
			dt.Columns.Add("Grievance Type", typeof(string));
			dt.Columns.Add("Grievance Addressed To States", typeof(string));
			dt.Columns.Add("Complainant Name", typeof(string));
			dt.Columns.Add("Email", typeof(string));
			dt.Columns.Add("Mobile Number", typeof(string));
			dt.Columns.Add("Phone Number", typeof(string));
			dt.Columns.Add("Address", typeof(string));
			dt.Columns.Add("Grievance Description", typeof(string));
			dt.Columns.Add("Supported Document", typeof(string));
			dt.Columns.Add("Registation Date", typeof(string));
			dt.Columns.Add("Stage of Application", typeof(string));
			dt.Columns.Add("Officer Name", typeof(string));
			dt.Columns.Add("Grievance Status", typeof(string));
			dt.Columns.Add("Description of Resolution Provided", typeof(string));
			dt.Columns.Add("Mode of disposal", typeof(string));
			dt.Columns.Add("Upload Document", typeof(string));
			dt.Columns.Add("Resolution Status", typeof(string));
			dt.Columns.Add("Forwarded Status", typeof(string));
			dt.Columns.Add("Feedback Satisfaction", typeof(string));
			dt.Columns.Add("Resolved Date", typeof(string));
			dt.Columns.Add("Year", typeof(string));
			dt.Columns.Add("Month", typeof(string));



			var Total = 0;
			var Approved_total = 0;
			var Pending_total = 0;
			for (var i = 0; i < data.Count; i++)
			{
				Total = data.Count;
				if (data[i].accept == "Approved")
				{
					Approved_total += 1;
				}
				else if (data[i].accept == "Pending")
				{
					Pending_total += 1;
				}
				else if (data[i].accept == "Decline")
				{

					Pending_total += 1;

				}
				else
				{
					Pending_total += 1;
				}
				var Status = "";
				if (data[i].accept == null)
				{
					Status = "Pending";
				}
				else if (data[i].accept == "Decline")
				{
					Status = "Pending";

				}
				else if (data[i].accept == "Approved")
				{
					Status = "Resolved";

				}

				var off = "";
				if (data[i].mail_count_date == null || data[i].mail_count_date == "")
				{
					off = "1st Officer";
				}
				else if (data[i].mail_count1_date == null || data[i].mail_count1_date == "")
				{
					off = "2nd Officer";
				}
				else if (data[i].mail_count2_date == null || data[i].mail_count2_date == "")
				{
					off = "3rd Officer";
				}
				else
				{
					off = "4th Officer";
				}
				var process = data[i].process;
				if (process == null)
				{
					process = "";
				}

				var approve = data[i].accept;
				if (approve == null)
				{
					approve = "No";
				}
				else
				{
					approve = "Yes";
				}

				var forward_mail_show = data[i].forward_mail;
				if (forward_mail_show == null)
				{
					forward_mail_show = "No";
				}
				else
				{
					forward_mail_show = "Yes";
				}
				var yes_no = data[i].yes_no;
				if (yes_no == null)
				{
					yes_no = "";
				}

				string dateInputpp = data[i].reg_date;
				string parsedDatepp = "";
				if (dateInputpp != null && dateInputpp != "")
				{
					string[] Reg_Date11 = dateInputpp.Split('/');
					var day = Reg_Date11[0];
					var month = Reg_Date11[1];
					var year = Reg_Date11[2];

					var ddd = year + '-' + month + '-' + day;
					DateTime date = Convert.ToDateTime(ddd);
					parsedDatepp = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

				}
				string dateInputppq = data[i].approve_date;
				string parsedDateppq = "";
				if (dateInputppq != null && dateInputppq != "")
				{
					string[] Reg_Date11 = dateInputpp.Split('/');
					var day = Reg_Date11[0];
					var month = Reg_Date11[1];
					var year = Reg_Date11[2];

					var ddd = year + '-' + month + '-' + day;
					DateTime date = Convert.ToDateTime(ddd);
					parsedDateppq = date.ToString("dd MMMM yyyy", CultureInfo.InvariantCulture);

				}


				var OfficerName = "";
				if (OfficersInfo.Count != 0)
				{
					for (var j = 0; j < OfficersInfo.Count; j++)
					{

						if (OfficersInfo[j].state_name == data[i].grievance_address_to)
						{
							if (off == "1st Officer")
							{
								OfficerName = OfficersInfo[j].first_officername;
							}
							else if (off == "2nd Officer")
							{
								OfficerName = OfficersInfo[j].second_officername;
							}
							else if (off == "3rd Officer")
							{
								OfficerName = OfficersInfo[j].third_officername;
							}


						}
					}
				}

				DataRow dataRow = dt.NewRow();

				dataRow["Grievance ID"] = data[i].IdentificationId;
				dataRow["Registration Mode"] = data[i].status;
				dataRow["Subject"] = data[i].subject;
				dataRow["Grievance Type"] = data[i].grievance_type;
				dataRow["Grievance Addressed To States"] = data[i].grievance_address_to;
				dataRow["Complainant Name"] = data[i].complaint_name;
				dataRow["Email"] = data[i].email;
				dataRow["Mobile Number"] = data[i].mobile;
				dataRow["Phone Number"] = data[i].phone;
				dataRow["Address"] = data[i].address;
				dataRow["Grievance Description"] = data[i].grivance_description;
				dataRow["Supported Document"] = data[i].supported_document_file;
				dataRow["Registation Date"] = parsedDatepp;
				dataRow["Stage of Application"] = off;
				dataRow["Officer Name"] = OfficerName;
				dataRow["Grievance Status"] = Status;
				dataRow["Description of Resolution Provided"] = process;
				dataRow["Mode of disposal"] = data[i].District_name;
				dataRow["Upload Document"] = data[i].image_name;
				dataRow["Resolution Status"] = approve;
				dataRow["Forwarded Status"] = forward_mail_show;
				dataRow["Feedback Satisfaction"] = yes_no;
				dataRow["Resolved Date"] = parsedDateppq;
				dataRow["Year"] = data[i].year;
				dataRow["Month"] = data[i].month;

				dt.Rows.Add(dataRow);
			}

			if (dt != null && dt.Rows.Count > 0)
			{
				System.Web.HttpContext.Current.Response.Clear();
				System.Web.HttpContext.Current.Response.ClearContent();
				System.Web.HttpContext.Current.Response.ClearHeaders();
				System.Web.HttpContext.Current.Response.Buffer = true;
				System.Web.HttpContext.Current.Response.ContentType = "application/ms-excel";
				System.Web.HttpContext.Current.Response.Write(@"<!DOCTYPE HTML PUBLIC ""-//W3C//DTD HTML 4.0 Transitional//EN"">");
				System.Web.HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment;filename=Grievance.xls");
				System.Web.HttpContext.Current.Response.Charset = "utf-8";
				System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding("windows-1250");
				//sets font
				System.Web.HttpContext.Current.Response.Write("<font style='font-size:13.0pt; font-family:Calibri;'>");
				System.Web.HttpContext.Current.Response.Write("<BR><BR><BR>");
				//sets the table border, cell spacing, border color, font of the text, background, foreground, font height
				System.Web.HttpContext.Current.Response.Write("<Table border='0' bgColor='#ffffff' " +
				  "borderColor='#000000' border='1' cellSpacing='0' cellPadding='0' " +
				  "style='font-size:10.0pt; font-family:Calibri; background:white;'> <TR>");
				//am getting my grid's column headers
				int columnscount = dt.Columns.Count;

				for (int j = 0; j < columnscount; j++)
				{      //write in new column
					System.Web.HttpContext.Current.Response.Write("<Td>");
					//Get column headers  and make it as bold in excel columns
					System.Web.HttpContext.Current.Response.Write("<B>");
					System.Web.HttpContext.Current.Response.Write(dt.Columns[j].ToString());
					System.Web.HttpContext.Current.Response.Write("</B>");
					System.Web.HttpContext.Current.Response.Write("</Td>");
				}
				System.Web.HttpContext.Current.Response.Write("</TR>");
				foreach (DataRow row in dt.Rows)
				{//write in new row
					System.Web.HttpContext.Current.Response.Write("<TR>");
					for (int i = 0; i < dt.Columns.Count; i++)
					{
						System.Web.HttpContext.Current.Response.Write("<Td>");
						System.Web.HttpContext.Current.Response.Write(row[i].ToString());
						System.Web.HttpContext.Current.Response.Write("</Td>");
					}

					System.Web.HttpContext.Current.Response.Write("</TR>");
				}
				System.Web.HttpContext.Current.Response.Write("</Table>");
				System.Web.HttpContext.Current.Response.Write("</font>");
				System.Web.HttpContext.Current.Response.Flush();
				System.Web.HttpContext.Current.Response.End();
			}
			return RedirectToAction("Index");
		}




		[HttpGet]
		public ActionResult Grievance_Info()
		{
			var Details = ABE.objgrievance_new.ToList();

			var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
			jsonresults24.MaxJsonLength = int.MaxValue;
			return jsonresults24;
		}

		[HttpGet]
		public ActionResult Grievance_Info_statewise_Officers()
		{
			if (Session["UserId"] != null)
			{
				var StateName = Session["gstate"].ToString();
				var Details = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == StateName).ToList();

				var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
				jsonresults24.MaxJsonLength = int.MaxValue;
				return jsonresults24;
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}

		}

		[HttpGet]
		public ActionResult Grievance_Info_statewise_Officers_List(string StateName)
		{
			if (Session["UserId"] != null)
			{
				if (StateName == "ALL")
				{
					var Details = ABE.obj_abhy_grievance_officer_mails_info_new.ToList();

					var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
					jsonresults24.MaxJsonLength = int.MaxValue;
					return jsonresults24;
				}
				else
				{
					var Details = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == StateName).ToList();

					var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
					jsonresults24.MaxJsonLength = int.MaxValue;
					return jsonresults24;
				}

			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}

		}

		[HttpGet]
		public ActionResult Grievance_Info_statewise()
		{
			if (Session["UserId"] != null)
			{
				var StateName = Session["gstate"].ToString();
				var Details = ABE.objgrievance_new.Where(x => x.grievance_address_to == StateName).ToList();

				var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
				jsonresults24.MaxJsonLength = int.MaxValue;
				return jsonresults24;
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}

		}

		[HttpGet]
		public ActionResult Grievance_Info_statewise_GrmDB(string StateName)
		{

			if (StateName == "ALL")
			{
				Session["GRM_STATE"] = StateName;
				var Details = ABE.objgrievance_new.OrderByDescending(x => x.agid).ToList();

				var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
				jsonresults24.MaxJsonLength = int.MaxValue;
				return jsonresults24;
			}
			else
			{
				Session["GRM_STATE"] = StateName;
				var Details = ABE.objgrievance_new.Where(x => x.grievance_address_to == StateName).OrderByDescending(x => x.agid).ToList();

				var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
				jsonresults24.MaxJsonLength = int.MaxValue;
				return jsonresults24;
			}


		}

		public ActionResult Grievance_Admin_Approved_ViewPage()
		{
			if (Session["IdentificationNumber"] != null)
			{
				var IDD = Session["IdentificationNumber"].ToString();
				var Data = ABE.objgrievance_new.Where(x => x.IdentificationId == IDD).ToList();
				return View(Data);
			}
			else
			{
				return View();
			}

		}

		[HttpPost]
		public ActionResult Dist()
		{

			var ddetails = ABE.obj_mstr_districts.Select(x => new { x.district_id, x.district_name }).ToList();//total list
			var ddetails1 = ddetails.OrderBy(s => s.district_name).ToList();
			return Json(ddetails1, JsonRequestBehavior.AllowGet);


		}

		[HttpPost]
		public ActionResult state_name(string id)
		{
			int ids = Convert.ToInt32(id);
			var details = ABE.obj_mstr_districts.Where(x => x.district_id == ids).Select(x => new { x.state_id }).ToList();
			int sid = Convert.ToInt32(details[0].state_id);
			var ddetailDistrict = ABE.obj_mstr_states.Where(x => x.state_id == sid).Select(x => new { x.state_id, x.state_name }).ToList();
			return Json(ddetailDistrict, JsonRequestBehavior.AllowGet);
		}
		[HttpGet]
		public ActionResult district_name(string StateName)
		{
			if (StateName != "0")
			{
				var ddetailstate = ABE.obj_mstr_states.Where(x => x.state_name == StateName).Select(x => new { x.state_id, x.state_name }).ToList();
				int sid = Convert.ToInt32(ddetailstate[0].state_id);
				var ddetaildistrict = ABE.obj_mstr_districts.Where(x => x.state_id == sid).Select(x => new { x.district_id, x.district_name }).ToList();
				return Json(ddetaildistrict, JsonRequestBehavior.AllowGet);
			}
			else
			{
				int district_name = 0;
				return Json(district_name, JsonRequestBehavior.AllowGet);
			}

		}


		[HttpPost]
		public ActionResult Index(grievance_new new_grievance, string status, string District, string year, string month, string clientCaptcha, HttpPostedFileBase files, string address, string phone, string mobile, string email, string complaint_name, string grievance_type, string grievance_address_to, string subject, string grivance_description)
		{
			Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
			if (Session["text"] != null)
			{

				bool flag = true;
				if (flag == false)
				{
					return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
				}



				new_grievance.year = year;
				new_grievance.month = month;
				new_grievance.phone = phone;
				new_grievance.mobile = mobile;
				new_grievance.subject = subject;
				new_grievance.reg_date = DateTime.Now.ToString("dd/MM/yyyy");
				new_grievance.registation_date_time = DateTime.Now.ToString();
				new_grievance.grievance_address_to = grievance_address_to;
				new_grievance.grievance_type = grievance_type;
				new_grievance.complaint_name = complaint_name;
				new_grievance.address = address;
				new_grievance.status = status;
				new_grievance.District_name = District;
				new_grievance.grivance_description = grivance_description;
				// new_grievance.CreatedBy = Convert.ToInt32(Session["UserId"]);
				new_grievance.ApprovedBy = 0;
				Guid vid = Guid.NewGuid();
				string viid = vid.ToString();
				string Code = randomCodeGeneration();
				string sth = "ABG" + Code;
				new_grievance.IdentificationId = sth;
				new_grievance.mail_count = "1";

				if (files != null)
				{

					if (files.FileName != null)
					{
						String FileExt = Path.GetExtension(files.FileName).ToUpper();

						if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".PNG")
						{
							return Json("Choose Valid file", JsonRequestBehavior.AllowGet);

						}
						string BasePath = AppDomain.CurrentDomain.BaseDirectory;
						string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\GRM\\");
						if (!Directory.Exists(path))
						{
							Directory.CreateDirectory(path);
						}
						path = path + sth + files.FileName;
						string[] count = files.FileName.Split('.');
						string[] count_special = files.FileName.Split('#', '$');
						if (count.Length != 2)
						{
							return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
						}
						if (count_special.Length >= 2)
						{
							return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
						}
						files.SaveAs(path);
						new_grievance.supported_document = "/Ataljalimages/GRM/" + sth + files.FileName;
						new_grievance.supported_document_file = files.FileName;

					}
				}

				if (email != null || email != "")
				{
					string contemail = email;
					string Mail_Subject_client = "Registation Successfully";
					StringBuilder sb_client = new StringBuilder();
					sb_client.Append("<br>");
					sb_client.Append("<br>");
					sb_client.Append("<table style='margin-left:50px;'>");
					sb_client.Append("<tr  style='width:300px'>");
					sb_client.Append("</tr>");
					sb_client.Append("<tr style='width:300px'>");

					sb_client.Append("<td>");
					sb_client.Append("<b>Dear Sir/Madam,</b>");
					sb_client.Append("</td>");
					sb_client.Append("</tr>");
					sb_client.Append("<br>");
					sb_client.Append("<tr  style='width:300px'>");
					sb_client.Append("<td>");
					sb_client.Append("<h4>");
					sb_client.Append("<b>Your grievance has been registered successfully and the Grievance Id is  " + new_grievance.IdentificationId + " . </b>");
					sb_client.Append("<br>");
					sb_client.Append("</h4>");
					sb_client.Append("</td>");
					sb_client.Append("</tr>");
					sb_client.Append("<br>");
					sb_client.Append("<tr  style='width:300px'>");
					sb_client.Append("<td>");
					sb_client.Append("</td>");
					sb_client.Append("<tr  style='width:300px'>");
					sb_client.Append("<td>");
					sb_client.Append("<br>");
					sb_client.Append("Thank You");
					sb_client.Append("<br>");
					sb_client.Append("</td>");
					sb_client.Append("</tr>");
					sb_client.Append("<tr>");
					sb_client.Append("</tr>");
					sb_client.Append("</table>");
					string result = WebConstents.SendEmailSMTP(contemail, null, Mail_Subject_client, sb_client.ToString(), "");
					if (result == "success")
					{
					}
				}

				string Content_Email = "";
				string fullname = "";
				var OfficersDetails = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == grievance_address_to).ToList();

				if (OfficersDetails.Count != 0)
				{
					Content_Email = OfficersDetails[0].first_officer_mailid;
					fullname = OfficersDetails[0].first_officername;
				}
				var dateAndTime = DateTime.Now.ToString("dd/MM/yyyy");
				var Today_Date_1 = dateAndTime;
				string[] uuu = Request.Url.AbsoluteUri.Split('/');
				string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceAprroved?code=" + sth;
				string GrievanceDecline = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceDecline?code=" + sth + ',' + Content_Email;
				new_grievance.officer_name = fullname;
				new_grievance.mail_count = "1";
				ABE.objgrievance_new.Add(new_grievance);
				ABE.SaveChanges();
				string Mail_Subject = "Grievance Acknowledgement-" + sth;
				StringBuilder sb = new StringBuilder();
				sb.Append("<br>");
				sb.Append("<br>");
				sb.Append("<table style='margin-left:50px;'>");
				sb.Append("<tr  style='width:300px'>");
				sb.Append("</tr>");
				sb.Append("<tr style='width:300px'>");

				sb.Append("<td>");
				sb.Append("<b>Hi  " + fullname + " Sir,</b>");
				sb.Append("<br>");
				sb.Append("</td>");
				sb.Append("<br>");
				sb.Append("</tr>");
				sb.Append("<br>");
				sb.Append("<br>");
				sb.Append("<br>");
				sb.Append("<tr  style='width:300px'>");
				sb.Append("<td>");
				sb.Append("<h4>");
				sb.Append("Grievance, ID – " + sth + " submitted on " + Today_Date_1 + ". to be resolved within 10 days.");
				sb.Append("</h4>");
				sb.Append("</td>");
				sb.Append("</tr>");
				sb.Append("<br>");
				sb.Append("<br>");
				sb.Append("<br>");
				sb.Append("<tr  style='width:300px'>");
				sb.Append("<td>");
				sb.Append("</td>");
				sb.Append("<tr  style='width:300px'>");
				sb.Append("<td>");
				sb.Append("<br>");
				sb.Append("Thanking You");
				sb.Append("<br>");
				sb.Append("</td>");
				sb.Append("</tr>");
				sb.Append("<tr>");
				sb.Append("</tr>");
				sb.Append("</table>");
				string result1 = WebConstents.SendEmailSMTP(Content_Email, null, Mail_Subject, sb.ToString(), "");
				if (result1 == "success")
				{
				}

				return Json(sth, JsonRequestBehavior.AllowGet);

			}
			else
			{
				return Json("Captcha is Expired", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult approve_data_state(string id, string process, string District_name, HttpPostedFileBase files)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.objgrievance_new.Where(x => x.agid == ID).SingleOrDefault();
					var code = Data.IdentificationId;
					if (Data != null)
					{
						if (files != null)
						{
							if (files.FileName != null)
							{
								String FileExt = Path.GetExtension(files.FileName).ToUpper();

								if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".PNG")
								{
									return Json("Choose Valid file", JsonRequestBehavior.AllowGet);

								}
								string BasePath = AppDomain.CurrentDomain.BaseDirectory;
								string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\GRM\\");
								if (!Directory.Exists(path))
								{
									Directory.CreateDirectory(path);
								}
								path = path + ID + files.FileName;
								string[] count = files.FileName.Split('.');
								string[] count_special = files.FileName.Split('#', '$');
								if (count.Length != 2)
								{
									return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
								}
								if (count_special.Length >= 2)
								{
									return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
								}
								files.SaveAs(path);
								Data.image_path = "/Ataljalimages/GRM/" + ID + files.FileName;
								Data.image_name = files.FileName;

							}
						}

						Data.agid = ID;
						Data.process = process;
						Data.District_name = District_name;
						Data.accept = "Approved";
						Data.approve_date = DateTime.Now.ToString("dd/MM/yyyy");

						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						string[] uuu = Request.Url.AbsoluteUri.Split('/');
						string Grievanceyes = uuu[0] + "//" + uuu[2] + "/Grievance_new/Thankyou?code=" + code;
						string Grievanceno = uuu[0] + "//" + uuu[2] + "/Grievance_new/Thankyou_no?code=" + code;
						if (A > 0)
						{
							if (Data.email != null || Data.email != "")
							{
								var image_name = Data.image_name;
								if (image_name == null || image_name == "")
								{
									image_name = "";
								}

								var image_path_create = "";
								var image_path = Data.image_path;
								if (image_path == null ||  image_path == "")
								{
									image_path_create = "";
								}
								else
								{

									image_path_create = "https://ataljal-mis.mowr.gov.in" + image_path;
								}
								string Mail_Subject = "Grievance Resolved -" + code;
								StringBuilder sb = new StringBuilder();
								sb.Append("<br>");
								sb.Append("<br>");
								sb.Append("<table style='margin-left:50px;'>");
								sb.Append("<tr  style='width:300px'>");
								sb.Append("</tr>");
								sb.Append("<tr style='width:300px'>");
								sb.Append("<td>");
								sb.Append("<b>Dear Sir / Madam,</b>");
								sb.Append("<br>");
								sb.Append("</td>");
								sb.Append("<br>");
								sb.Append("</tr>");
								sb.Append("<br>");
								sb.Append("<br>");
								sb.Append("<br>");
								sb.Append("<tr  style='width:300px'>");
								sb.Append("<td>");
								sb.Append("<h4>");
								sb.Append("Your Grievance ID " + code + " has been resolved. Are you Satisfied with the Resolution Yes / No.");
								sb.Append("</h4>");
								sb.Append("</td>");
								sb.Append("</tr>");
								sb.Append("<tr  style='width:300px'>");
								sb.Append("<td>");
								sb.Append("<h4>");
								sb.Append("Description of Resolution Provided : " + process + "");
								sb.Append("</h4>");
								sb.Append("</td>");
								sb.Append("</tr>");
								sb.Append("<tr  style='width:300px'>");
								sb.Append("<td>");
								sb.Append("<h4>");
								sb.Append($"Uploaded Document :  <a href = {image_path_create} > {image_name} </a> ");
								sb.Append("</h4>");
								sb.Append("</td>");
								sb.Append("</tr>");
								sb.Append("<br>");
								sb.Append("<br>");
								sb.Append("<tr  style='width:300px'>");
								sb.Append("<td>");
								sb.Append($"<a href='{Grievanceyes}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Yes</a>");
								sb.Append($"<a href='{Grievanceno}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>No</a>");
								sb.Append("</td>");
								sb.Append("</tr>");
								sb.Append("<tr  style='width:300px'>");
								sb.Append("<td>");
								sb.Append("<br>");
								sb.Append("Thanking You");
								sb.Append("<br>");
								sb.Append("</td>");
								sb.Append("</tr>");
								sb.Append("<tr>");
								sb.Append("</tr>");
								sb.Append("</table>");

								string result = WebConstents.SendEmailSMTP(Data.email, null, Mail_Subject, sb.ToString(), "");
							}
							return Json("Resolved Successfully");


						}
						else
						{
							return Json("Not Resolved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Resolved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult Index2(grievance_new new_grievance, string status, string clientCaptcha, HttpPostedFileBase files, string address, string phone, string mobile, string email, string complaint_name, string grievance_type, string grievance_address_to, string subject, string grivance_description)
		{
			Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
			if (Session["text"] != null)
			{
				if (Session["text"].ToString() != clientCaptcha)
				{
					return Json("Captcha is not Matched", JsonRequestBehavior.AllowGet);
				}
				else
				{

					bool flag = true;
					if (flag == false)
					{
						return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
					}
					if (files != null)
					{

						if (files.FileName != null)
						{
							String FileExt = Path.GetExtension(files.FileName).ToUpper();

							if (FileExt != ".PDF" && FileExt != ".JPG" && FileExt != ".PNG")
							{
								return Json("Choose Valid file", JsonRequestBehavior.AllowGet);

							}
							string BasePath = AppDomain.CurrentDomain.BaseDirectory;
							string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");
							path = path + files.FileName;
							string[] count = files.FileName.Split('.');
							if (count.Length != 2)
							{
								return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
							}
							files.SaveAs(path);
							//Details.feedback_filename = feedback.FileName;
							new_grievance.supported_document = "/Ataljalimages/" + files.FileName;

						}
					}


					new_grievance.phone = phone;
					new_grievance.mobile = mobile;
					new_grievance.subject = subject;
					new_grievance.reg_date = DateTime.Today.ToString();
					new_grievance.grievance_address_to = grievance_address_to;
					new_grievance.grievance_type = grievance_type;
					new_grievance.complaint_name = complaint_name;
					new_grievance.address = address;
					new_grievance.status = status;
					new_grievance.grivance_description = grivance_description;
					// new_grievance.CreatedBy = Convert.ToInt32(Session["UserId"]);
					new_grievance.ApprovedBy = 0;
					Guid vid = Guid.NewGuid();
					string viid = vid.ToString();
					string Code = randomCodeGeneration();
					string sth = "ABG" + Code;
					new_grievance.IdentificationId = sth;
					new_grievance.mail_count = "1";
					// new_grievance.mail_count1 = "1";

					string contemail = email;
					string body = "Dear Sir/Madam," + "\r\n" + "\n" + "\r\nGrievance-Id:" + new_grievance.IdentificationId + "," + "\r\nSubject:" + new_grievance.subject + "," + "\r\nGrievance Type::" + new_grievance.grievance_type + "," + "\r\n Grievance Addressed To::" + new_grievance.grievance_address_to + "," + "\r\n Email::" + new_grievance.email + "," + "\r\n Mobile ::" + new_grievance.mobile + "," + "\r\n Address::" + new_grievance.address + "," + "\r\n Grievance Description::" + new_grievance.grivance_description + "," + "\r\n\r\n\r\n Thank You";
					string result = WebConstents.SendEmailSMTP(contemail, null, "Enquire", body, "");
					if (result == "success")
					{
					}

					string Content_Email = "";
					string fullname = "";
					var OfficersDetails = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == grievance_address_to).ToList();

					if (OfficersDetails.Count != 0)
					{
						Content_Email = OfficersDetails[0].first_officer_mailid;
						fullname = OfficersDetails[0].first_officername;
					}
					var dateAndTime = DateTime.Now;
					var Today_Date_1 = dateAndTime.Date;
					string[] uuu = Request.Url.AbsoluteUri.Split('/');
					string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceAprroved?code=" + sth;
					//string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/GrievancePending?code=" + sth;
					string GrievanceDecline = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceDecline?code=" + sth + ',' + Content_Email;
					new_grievance.officer_name = fullname;
					new_grievance.mail_count = "1";
					// new_grievance.mail_count_date = DateTime.Today.ToString();
					ABE.objgrievance_new.Add(new_grievance);
					ABE.SaveChanges();
					string Mail_Subject = "Grievance Acknowledgement-" + sth;


					StringBuilder sb = new StringBuilder();
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<table style='margin-left:50px;'>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("</tr>");
					sb.Append("<tr style='width:300px'>");

					sb.Append("<td>");
					sb.Append("<b>Hi  " + fullname + " Sir,</b>");
					sb.Append("<br>");
					sb.Append("</td>");
					sb.Append("<br>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");

					sb.Append("<h4>");
					sb.Append("Grievance application with ref ID – " + sth + " has been submitted on " + Today_Date_1 + ". Kindly redress the application within 7 days.");
					sb.Append("</h4>");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");
					sb.Append($"<a href='{GrievanceAprroved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");

					sb.Append($"<a href='{GrievanceDecline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");


					sb.Append("</td>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");
					sb.Append("<br>");

					sb.Append("Thanking You");
					sb.Append("<br>");
					//sb.Append(".Kreate Technologies Team");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<tr>");
					sb.Append("</tr>");
					sb.Append("</table>");
					string result1 = WebConstents.SendEmailSMTP(Content_Email, null, Mail_Subject, sb.ToString(), "");
					if (result1 == "success")
					{
					}

					return Json(sth, JsonRequestBehavior.AllowGet);
				}
			}
			else
			{
				return Json("Captcha is Expired", JsonRequestBehavior.AllowGet);
			}
		}

		public ActionResult grm_dashboard()
		{
			return View();
		}
		public ActionResult grm_report()
		{
			return View();
		}

		public ActionResult Thankyou(string code)
		{
			var Details = ABE.objgrievance_new.Where(x => x.IdentificationId == code && x.accept == "Approved").FirstOrDefault();
			if (Details != null)
			{
				var yes = Details.yes_no;
				if (yes == "" || yes == null)
				{
					Details.yes_no = "Yes";
					ABE.Entry(Details).State = EntityState.Modified;
					ABE.SaveChanges();
					ViewBag.Msg = "Thank You!";
					return View();
				}
				else
				{
					ViewBag.Msg = "Already Submitted!";
					return View();
				}

			}
			else
			{
				ViewBag.Msg = "Already Submitted!";
				return View();
			}
		}

		public ActionResult Thankyou_no(string code)
		{
			var Details = ABE.objgrievance_new.Where(x => x.IdentificationId == code && x.accept == "Approved").FirstOrDefault();
			if (Details != null)
			{
				var yes = Details.yes_no;

				if (yes == "" || yes == null)
				{
					Details.yes_no = "No";
					ABE.Entry(Details).State = EntityState.Modified;
					ABE.SaveChanges();
					ViewBag.Msg = "Thank You!";
					return View();

				}
				else
				{
					ViewBag.Msg = "Already Submitted!";
					return View();
				}

			}
			else
			{
				ViewBag.Msg = "Already Submitted!";
				return View();
			}

		}

		public ActionResult GrievancePending(string code)
		{
			var Details = ABE.objgrievance_new.Where(x => x.IdentificationId == code).ToList();
			if (Details.Count == 1)
			{
				var Dataa = Details.LastOrDefault();
				Dataa.accept = "Pending";
				ABE.Entry(Dataa).State = EntityState.Modified;
				ABE.SaveChanges();
				Session["IdentificationNumber"] = code;
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
			else
			{
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
		}
		public ActionResult GrievanceDecline(string code)
		{
			var IDd = code.Split(',');
			var Code = IDd[0];
			var Email1 = IDd[1];
			var Details = ABE.objgrievance_new.Where(x => x.IdentificationId == Code && x.accept != "Approved").ToList();
			if (Details.Count == 1)
			{
				var Statename = Details[0].grievance_address_to;
				var Dataa = Details.LastOrDefault();
				Dataa.accept = "Decline";
				var idd = 0;
				var Content_Email = "";
				var Dtata = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == Statename).ToList();

				if (Dtata[0].first_officer_mailid == Email1 && Details[0].mail_count_date == null)
				{

					idd = 2;
					Dataa.mail_count = "2";
					Dataa.mail_count1 = "1";
					Dataa.mail_count_date = DateTime.Today.ToString();
				}
				if (Dtata[0].second_officer_mailid == Email1 && Details[0].mail_count1_date == null)
				{
					idd = 3;
					Dataa.mail_count1 = "2";
					Dataa.mail_count = "3";
					Dataa.mail_count1_date = DateTime.Today.ToString();
				}
				if (Dtata[0].third_officer_mailid == Email1 && Details[0].mail_count2_date == null)
				{
					idd = 4;
					Dataa.mail_count1 = "3";
					Dataa.mail_count = "4";
					Dataa.mail_count2_date = DateTime.Today.ToString();
				}

				ABE.Entry(Dataa).State = EntityState.Modified;
				ABE.SaveChanges();
				Session["IdentificationNumber"] = code;



				string fullname = "";
				var OfficersDetails = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == Dataa.grievance_address_to).ToList();
				var sss = "0";
				if (OfficersDetails.Count != 0)
				{
					if (idd == 2)
					{
						sss = "8";
						Content_Email = OfficersDetails[0].second_officer_mailid;
						fullname = OfficersDetails[0].second_officername;
					}
					else if (idd == 3)
					{
						sss = "15";
						Content_Email = OfficersDetails[0].third_officer_mailid;
						fullname = OfficersDetails[0].third_officername;
					}


				}
				if (idd != 4)
				{
					string[] uuu = Request.Url.AbsoluteUri.Split('/');
					string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceAprroved?code=" + Dataa.IdentificationId;
					//string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/GrievancePending?code=" + sth;
					string GrievanceDecline = uuu[0] + "//" + uuu[2] + "/Grievance/GrievanceDecline?code=" + Dataa.IdentificationId + ',' + Content_Email;
					var dateAndTime = DateTime.Now;
					var Today_Date_1 = dateAndTime.Date;
					string Mail_Subject = "Grievance Acknowledgement-" + Dataa.IdentificationId;
					StringBuilder sb = new StringBuilder();
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<table style='margin-left:50px;'>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("</tr>");
					sb.Append("<tr style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<b>Hi  " + fullname + " Sir,</b>");
					sb.Append("<br>");
					sb.Append("</td>");
					sb.Append("<br>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<h4>");
					sb.Append("Grievance application with ref ID – " + Dataa.IdentificationId + " has been submitted on " + Today_Date_1 + ". Kindly redress the application within " + sss + " days.");
					sb.Append("</h4>");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");
					sb.Append($"<a href='{GrievanceAprroved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");

					sb.Append($"<a href='{GrievanceDecline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");

					//sb.Append("<button style='background-color: green;display: inline-block;padding: 6px 12px;margin: 1px;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;touch-action: manipulation;cursor: pointer;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 8px;'>");
					//sb.Append($"<a href='{GrievanceAprroved}' style='text-decoration: none;color:white;'>Approved</a>");
					//sb.Append("</button>");
					//sb.Append("<button style='background-color: blue;display: inline-block;padding: 6px 12px;margin: 1px;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;touch-action: manipulation;cursor: pointer;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 8px;'>");
					//sb.Append($"<a href='{GrievancePending}' style='text-decoration: none;color:white;'>Pending</a>");
					//sb.Append("</button>");
					//sb.Append("<button style='background-color: red;display: inline-block;padding: 6px 12px;margin: 1px;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;touch-action: manipulation;cursor: pointer;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 8px;'>");
					//sb.Append($"<a href='{GrievanceDecline}' style='text-decoration: none;color:white;'>Decline</a>");
					//sb.Append("</button>");
					/*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/

					sb.Append("</td>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");
					sb.Append("<br>");
					//sb.Append("Note: Never Share Your Credentials With Others!");
					//sb.Append("<br>");
					//sb.Append("<br>");

					sb.Append("Thanking You");
					sb.Append("<br>");
					//sb.Append(".Kreate Technologies Team");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<tr>");
					sb.Append("</tr>");
					sb.Append("</table>");

					string results = WebConstents.SendEmailSMTP(Content_Email, "", Mail_Subject, sb.ToString(), "");
				}
				else
				{
					string Reg_Date = Dataa.reg_date;
					string[] Reg_Date11 = Reg_Date.Split(' ');
					var RegDate = Reg_Date11[0];

					string Mail_Subject = "Grievance application submitted on date " + RegDate + " –Grievance Acknowledgement-" + Dataa.IdentificationId;


					StringBuilder sb = new StringBuilder();
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<table style='margin-left:50px;'>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("</tr>");
					sb.Append("<tr style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<b>Dear Sir/Madam,</b>");
					sb.Append("<br>");
					sb.Append("</td>");
					sb.Append("<br>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<h4>");
					sb.Append("Your grievance application with ref ID – " + Dataa.IdentificationId + " submitted on " + RegDate + " has not been resolved by the concerned officer in 30 days.Kindly reappeal to the Appellate Authority – Chief Secretary of the concern state or National Programme Management Unit(NPMU, Atal Bhujal Yojana – Secretary, DoWR, RD & amp; GR, Ministry of Jal Shakti) through new appeal registration section on http://www.ataljal.in. Please use your previous grievance ref Id to reappeal.");
					sb.Append("</h4>");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");


					/*width = 50 height = 31 border = 0 alt = Click title = Click ></ a >*/

					sb.Append("</td>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");
					sb.Append("<br>");
					//sb.Append("Note: Never Share Your Credentials With Others!");
					//sb.Append("<br>");
					//sb.Append("<br>");

					sb.Append("Thanking You");
					sb.Append("<br>");
					//sb.Append(".Kreate Technologies Team");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<tr>");
					sb.Append("</tr>");
					sb.Append("</table>");
					string results = WebConstents.SendEmailSMTP(Content_Email, "", Mail_Subject, sb.ToString(), "");
				}

				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
			else
			{
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
		}

		public string randomCodeGeneration()
		{
			string builder = "";
			Random random = new Random();
			string ch = null;
			for (int i = 0; i < 3; i++)
			{
				ch = (Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65))).ToString();
				builder += ch;
			}
			return builder;
		}
		//Captcha code start///

		private string GetRandomText()
		{
			StringBuilder randomText = new StringBuilder();
			string alphabets = "012345679ACEFGHKLMNPRSWXZabcdefghijkhlmnopqrstuvwxyz";
			Random r = new Random();
			for (int j = 0; j <= 5; j++)
			{
				randomText.Append(alphabets[r.Next(alphabets.Length)]);
			}
			return randomText.ToString();
		}
		public FileResult GetCaptchaImage()
		{
			//string text = Session["CAPTCHA"].ToString();
			string text = GetRandomText();
			Session["text"] = text;
			//first, create a dummy bitmap just to get a graphics object
			Image img = new Bitmap(1, 1);
			Graphics drawing = Graphics.FromImage(img);

			Font font = new Font("Arial", 15);
			//measure the string to see how big the image needs to be
			SizeF textSize = drawing.MeasureString(text, font);

			//free up the dummy image and old graphics object
			img.Dispose();
			drawing.Dispose();

			//create a new image of the right size
			img = new Bitmap((int)textSize.Width + 40, (int)textSize.Height + 20);
			drawing = Graphics.FromImage(img);

			Color backColor = Color.SeaShell;
			Color textColor = Color.Red;
			//paint the background
			drawing.Clear(backColor);

			//create a brush for the text
			Brush textBrush = new SolidBrush(textColor);

			drawing.DrawString(text, font, textBrush, 20, 10);

			drawing.Save();

			font.Dispose();
			textBrush.Dispose();
			drawing.Dispose();

			MemoryStream ms = new MemoryStream();
			img.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
			img.Dispose();

			return File(ms.ToArray(), "image/png");
		}

		[HttpPost]
		public JsonResult CustomCaptcha(FormCollection form, string clientCaptcha)
		{
			System.Threading.Thread.Sleep(200);
			//string clientCaptcha = form["clientCaptcha"];
			string serverCaptcha = "";
			if (Session["text"] != null)
			{
				serverCaptcha = Session["text"].ToString();
			}

			if (!clientCaptcha.Equals(serverCaptcha))
			{
				//ViewBag.ShowCAPTCHA = serverCaptcha;

				TempData["captch"] = "notmatched";
				return Json(0);
			}
			else
			{
				return Json("Index");
			}


		}

		// End Captcha code


		[HttpPost]
		public JsonResult CustomCaptcha1(FormCollection form, string clientCaptcha)
		{
			System.Threading.Thread.Sleep(200);
			//string clientCaptcha = form["clientCaptcha"];
			string serverCaptcha = "";
			if (Session["text"] != null)
			{
				serverCaptcha = Session["text"].ToString();
			}

			if (!clientCaptcha.Equals(serverCaptcha))
			{
				//ViewBag.ShowCAPTCHA = serverCaptcha;
				TempData["captch"] = "notmatched";

				return Json(0);
			}
			else
			{
				return Json("Appeal_Registration_Data");
			}


		}

		[HttpGet]
		public ActionResult Appeal_Registration()
		{

			//if (Session["UserId"] != null)
			//{
			return View();
			//}
			//else
			//{
			//    return RedirectToAction("MisLogin", "Home");
			//}

		}
		[HttpPost]
		public ActionResult Appeal_Registration(string grivanceid)
		{

			var Details = ABE.objAppeal_Registration.Where(x => x.grievance_id == grivanceid).ToList();

			List<grievance_new> model = ABE.objgrievance_new.Where(x => x.IdentificationId == grivanceid).ToList();
			if (model.Count != 0)
			{
				if (Details.Count != 0)
				{
					return Json("Data", JsonRequestBehavior.AllowGet);
				}
				else
				{
					return Json(model, JsonRequestBehavior.AllowGet);
				}

			}
			else
			{

				return Json("Pending", JsonRequestBehavior.AllowGet);
			}
		}
		[HttpPost]
		public ActionResult Appeal_Registration_Data(HttpPostedFileBase files, string clientCaptcha, string Grievance_Id, string name, string subject, string appeal_type, string address_to, string mobile, string phone, string email, string address, string description)
		{

			var ARP = new Appeal_Registration();
			if (Session["LoginCaptcha"] != null)
			{
				if (Session["LoginCaptcha"].ToString() != clientCaptcha)
				{
					return Json("Captcha is not Matched", JsonRequestBehavior.AllowGet);
				}
			}
			else
			{
				return Json("Captcha is Expired", JsonRequestBehavior.AllowGet);
			}
			string File_path = "";
			Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
			string allowed_file_format = "jpg,png,jpeg,pdf";
			bool flag = obj_Validate.CheckValidFile(files, allowed_file_format);
			if (flag == false)
			{
				return Json("Your Upload file has Not valid File, Please Upload proper file", JsonRequestBehavior.AllowGet);
			}
			if (files != null)
			{
				if (files.FileName != null)
				{
					String FileExt = Path.GetExtension(files.FileName).ToUpper();
					//string path = @"D:\Ataljal_grievnce\";
					//path = path + files.FileName;
					//string[] count = files.FileName.Split('.');
					//if (count.Length != 2)
					//{
					//    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
					//}
					//files.SaveAs(path);
					//File_path = path.Replace("D:\\Ataljal_grievnce\\", "~/ataljalimages/");
					string BasePath = AppDomain.CurrentDomain.BaseDirectory;
					string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\");

					if (!Directory.Exists(path))
					{
						Directory.CreateDirectory(path);
					}
					path = path + files.FileName;
					string[] count = files.FileName.Split('.');
					if (count.Length != 2)
					{
						return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
					}
					files.SaveAs(path);
					File_path = "/Ataljalimages/" + files.FileName;
				}
			}
			var Details = ABE.objAppeal_Registration.Where(x => x.grievance_id == Grievance_Id).ToList();





			string contemail = email.Trim();

			string body = "Dear Sir/Madam," + "\r\n" + "\n" + "Subject:" + subject + "," + "\r\nAppeal Type::" + appeal_type + "," + "," + "\r\n Appeal Addressed To::" + address_to + "," + "\r\n Full Name::" + name + "," + "\r\n Email::" + email + "," + "," + "\r\n Mobile ::" + mobile + "," + "\r\n Phone::" + phone + "," + "\r\n Address::" + address + "," + "," + "\r\n Grievance Description::" + description + "," + "," + "\r\n\r\n\r\n Thank You";

			string results = WebConstents.SendEmailSMTP(contemail, "", "Enquire", body.ToString(), "");


			string[] uuu = Request.Url.AbsoluteUri.Split('/');
			string GrievanceAprroved = uuu[0] + "//" + uuu[2] + "/Grievance/AppealAprroved?code=" + Grievance_Id;
			//string GrievancePending = uuu[0] + "//" + uuu[2] + "/Grievance/APpealPending?code=" + Grievance_Id;
			string GrievanceDecline = uuu[0] + "//" + uuu[2] + "/Grievance/AppealDecline?code=" + Grievance_Id;

			string Content_Email = "";
			var OfficersDetails = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == address_to).ToList();
			string fullname = "";
			if (OfficersDetails.Count != 0)
			{
				Content_Email = OfficersDetails[0].first_officer_mailid;
				fullname = OfficersDetails[0].first_officername;
			}


			if (Details.Count == 1)
			{
				var Data = Details.SingleOrDefault();

				Data.grievance_id = Grievance_Id;
				Data.address = address;
				Data.appeal_address_to = address_to;
				Data.appeal_type = appeal_type;
				Data.description = description;
				Data.email = email;
				Data.fullname = name;
				// ARP.CreatedBy = Convert.ToInt32(Session["UserId"]);
				Data.mobile = mobile;
				Data.phone = phone;
				Data.subject = subject;
				Data.ApprovedBy = 0;
				Data.officer_name = fullname;
				Data.suppoorteddocument = File_path;
				ABE.Entry(Data).State = EntityState.Modified;

				ABE.SaveChanges();
			}
			else
			{
				if (Details.Count == 0)
				{
					ARP.suppoorteddocument = File_path;
					ARP.grievance_id = Grievance_Id;
					ARP.address = address;
					ARP.appeal_address_to = address_to;
					ARP.appeal_type = appeal_type;
					ARP.description = description;
					ARP.email = email;
					ARP.fullname = name;
					// ARP.CreatedBy = Convert.ToInt32(Session["UserId"]);
					ARP.mobile = mobile;
					ARP.phone = phone;
					ARP.subject = subject;
					ARP.ApprovedBy = 0;
					ARP.officer_name = fullname;

					ABE.objAppeal_Registration.Add(ARP);
					ABE.SaveChanges();
				}
			}



			string Mail_Subject = "Grievance Acknowledgement-" + Grievance_Id;

			StringBuilder sb = new StringBuilder();
			sb.Append("<br>");
			sb.Append("<br>");
			sb.Append("<table style='margin-left:50px;'>");
			sb.Append("<tr  style='width:300px'>");
			sb.Append("</tr>");
			sb.Append("<tr style='width:300px'>");

			sb.Append("<td>");
			sb.Append("<b>Hello  " + fullname + ",</b>");
			sb.Append("<br>");
			sb.Append("</td>");
			sb.Append("<br>");
			sb.Append("</tr>");
			sb.Append("<br>");
			sb.Append("<br>");
			sb.Append("<br>");
			sb.Append("<tr  style='width:300px'>");

			sb.Append("<td>");

			sb.Append("<h4>");
			//sb.Append("Thanks for getting started with Abhy! We need a little more information to complete your registration, including confirmation of your email address. Click on Register button to confirm your email address:");
			sb.Append("</h4>");
			sb.Append("</td>");
			sb.Append("</tr>");
			sb.Append("<br>");
			sb.Append("<br>");
			sb.Append("<br>");
			sb.Append("<tr  style='width:300px'>");

			sb.Append("<td>");
			sb.Append($"<a href='{GrievanceAprroved}' class='btn btn-primary' style='background-color:#5cb85c; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;margin-right: 10px;'>Approve</a>");

			sb.Append($"<a href='{GrievanceDecline}' class=' btn btn-danger' style='background-color:#f0ad4e; display:inline-block; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; border-radius: 4px;'>Decline</a>");

			sb.Append("</td>");
			sb.Append("<tr  style='width:300px'>");

			sb.Append("<td>");
			sb.Append("<br>");
			//sb.Append("Note: Never Share Your Credentials With Others!");
			//sb.Append("<br>");
			sb.Append("<br>");

			sb.Append("Thanking You,");
			sb.Append("<br>");
			sb.Append(".Kreate Technologies Team");
			sb.Append("</td>");
			sb.Append("</tr>");
			sb.Append("<tr>");
			sb.Append("</tr>");
			sb.Append("</table>");
			string results1 = WebConstents.SendEmailSMTP(contemail, "", Mail_Subject, sb.ToString(), "");


			return Json(Grievance_Id, JsonRequestBehavior.AllowGet);

		}


		public ActionResult AppealAprroved(string code)
		{
			var Details = ABE.objAppeal_Registration.Where(x => x.grievance_id == code).ToList();
			if (Details.Count == 1)
			{
				var Dataa = Details.LastOrDefault();
				Dataa.accept = "Approved";
				ABE.Entry(Dataa).State = EntityState.Modified;
				ABE.SaveChanges();
				Session["IdentificationNumber"] = code;
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
			else
			{
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}

		}

		public ActionResult APpealPending(string code)
		{
			var Details = ABE.objAppeal_Registration.Where(x => x.grievance_id == code).ToList();
			if (Details.Count == 1)
			{
				var Dataa = Details.LastOrDefault();
				Dataa.accept = "Pending";
				ABE.Entry(Dataa).State = EntityState.Modified;
				ABE.SaveChanges();
				Session["IdentificationNumber"] = code;
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
			else
			{
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
		}


		public ActionResult AppealDecline(string code)
		{
			var Details = ABE.objAppeal_Registration.Where(x => x.grievance_id == code).ToList();
			if (Details.Count == 1)
			{
				var Dataa = Details.LastOrDefault();
				Dataa.accept = "Decline";
				ABE.Entry(Dataa).State = EntityState.Modified;
				ABE.SaveChanges();
				Session["IdentificationNumber"] = code;
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
			else
			{
				return RedirectToAction("Grievance_Tracking", "Grievance");
			}
		}


		public ActionResult Grievance_Tracking()
		{
			return View();
		}

		[HttpPost]
		public ActionResult Grievance_Tracking(string Gid)
		{

			var model = ABE.objgrievance_new.Where(x => x.IdentificationId == Gid).ToList();
			var Reg_Date = model[0].registation_date_time;
			var Today_Date = DateTime.Now;
			DateTime EndDate = Convert.ToDateTime(Today_Date);
			DateTime GDate = Convert.ToDateTime(Reg_Date);
			TimeSpan difference = EndDate - GDate;
			var Days = difference.Days;
			if (model.Count == 1)
			{
				var Data = model;
				//var Data = model.LastOrDefault();
				return Json(Data, JsonRequestBehavior.AllowGet);
			}
			else
			{

				return Json("NoData", JsonRequestBehavior.AllowGet);
			}

		}
		[HttpPost]
		public ActionResult Grievance_days(string Gid)
		{

			var model = ABE.objgrievance_new.Where(x => x.IdentificationId == Gid).ToList();

			if (model.Count == 1)
			{
				var Reg_Date = model[0].registation_date_time;
				var Today_Date = DateTime.Now;
				DateTime EndDate = Convert.ToDateTime(Today_Date);
				DateTime GDate = Convert.ToDateTime(Reg_Date);
				TimeSpan difference = EndDate - GDate;
				var Days = difference.Days;
				return Json(Days, JsonRequestBehavior.AllowGet);
			}
			else
			{

				return Json("NoData", JsonRequestBehavior.AllowGet);
			}

		}
		[HttpGet]
		public ActionResult State_Level_Institutional_Index()
		{
			if (Session["UserId"] == null)
			{
				Session["Satelevel"] = "Data";
				return RedirectToAction("MisLogin", "Home");
			}
			else
			{
				return View();
			}
		}
		[HttpPost]
		public ActionResult State_Level_Institutional_Index(string stateleveldata, string Operatiionalization_Of_Systems, string Inistutional_capacity)
		{
			if (stateleveldata != "{}")
			{
				try
				{
					JavaScriptSerializer js4 = new JavaScriptSerializer();
					//var result = js4.Deserialize<Abhy_WaterUtilization_Approval>(waterutilization);
					var result = js4.Deserialize<Abhy_Statelevel_Inistutional_Index>(stateleveldata);

					if (result.statename == "")
					{
						return Json("Please Select State");
					}
					else
					{
						Abhy_Statelevel_Inistutional_Index obj1 = new Abhy_Statelevel_Inistutional_Index();
						var Data1 = ABE.objAbhy_Statelevel_Inistutional_Index.Where(x => x.statename == result.statename).SingleOrDefault();
						var Data2 = ABE.objAbhy_Operatiionalization_Of_Systems.Where(x => x.statename == result.statename).SingleOrDefault();
						var Data3 = ABE.objAbhy_Inistutional_capacity.Where(x => x.statename == result.statename).SingleOrDefault();
						JavaScriptSerializer js5 = new JavaScriptSerializer();
						Abhy_Operatiionalization_Of_Systems obj2 = new Abhy_Operatiionalization_Of_Systems();
						//var result = js4.Deserialize<Abhy_WaterUtilization_Approval>(waterutilization);
						var result1 = js5.Deserialize<Abhy_Operatiionalization_Of_Systems>(Operatiionalization_Of_Systems);

						JavaScriptSerializer js6 = new JavaScriptSerializer();
						Abhy_Inistutional_capacity obj3 = new Abhy_Inistutional_capacity();
						//var result = js4.Deserialize<Abhy_WaterUtilization_Approval>(waterutilization);
						var result2 = js6.Deserialize<Abhy_Inistutional_capacity>(Inistutional_capacity);
						if (Data1 == null && Data2 == null && Data3 == null)
						{
							obj1.agricultural_fp = result.agricultural_fp;
							obj1.agricultural_tp = result.agricultural_tp;
							obj1.chemistry_fp = result.chemistry_fp;
							obj1.chemistry_tp = result.chemistry_tp;
							obj1.data_analystics_fp = result.data_analystics_fp;
							obj1.data_analystics_tp = result.data_analystics_tp;
							obj1.economics_fp = result.economics_fp;
							obj1.economics_tp = result.economics_tp;
							obj1.environment_fp = result.environment_fp;
							obj1.environment_tp = result.environment_tp;
							obj1.gw_modelers_fp = result.gw_modelers_fp;
							obj1.gw_modelers_tp = result.gw_modelers_tp;
							obj1.gw_specialits_fp = result.gw_specialits_fp;

							obj1.gw_specialits_tp = result.gw_specialits_tp;
							obj1.rs_gis_fp = result.rs_gis_fp;
							obj1.rs_gis_tp = result.rs_gis_tp;
							obj1.social_fp = result.social_fp;
							obj1.social_tp = result.social_tp;
							obj1.statename = result.statename;
							obj1.UserId = Session["UserId"].ToString();
							//ABE.Entry(obj1).State = EntityState.Modified;
							ABE.objAbhy_Statelevel_Inistutional_Index.Add(obj1);
							ABE.SaveChanges();
							obj2.analysis_for_qualityandQuantity = result1.analysis_for_qualityandQuantity;
							obj2.bi_weekly_or_monthly = result1.bi_weekly_or_monthly;
							obj2.Dwlr_installed = result1.Dwlr_installed;
							obj2.frequecy_data_collection_gw_qulaity_and_Quntity = result1.frequecy_data_collection_gw_qulaity_and_Quntity;
							obj2.frequecy_data_collection_is_done_sessionally = result1.frequecy_data_collection_is_done_sessionally;
							obj2.mis_within_1_months = result1.mis_within_1_months;
							obj2.mis_within_3_months = result1.mis_within_3_months;
							obj2.nabl_accredited_labs = result1.nabl_accredited_labs;
							obj2.no_of_info_collection = result1.no_of_info_collection;
							obj2.no_of_Observation_wells_DWL = result1.no_of_Observation_wells_DWL;
							obj2.no_of_Observation_wells_GE = result1.no_of_Observation_wells_GE;
							obj2.no_of_Observation_wells_GL = result1.no_of_Observation_wells_GL;

							obj2.no_of_Observation_wells_GQ_Collected = result1.no_of_Observation_wells_GQ_Collected;
							obj2.no_of_Observation_wells_GQ_not_collected = result1.no_of_Observation_wells_GQ_not_collected;
							obj2.no_of_Observation_wells_GV = result1.no_of_Observation_wells_GV;
							obj2.public_viewing = result1.public_viewing;
							obj2.regular_basics = result1.regular_basics;
							obj2.water_qualityandquantity = result1.water_qualityandquantity;
							obj2.statename = result.statename;
							obj2.UserId = Session["UserId"].ToString();
							ABE.objAbhy_Operatiionalization_Of_Systems.Add(obj2);
							ABE.SaveChanges();
							obj3.data_entry_operator_fp = result2.data_entry_operator_fp;
							obj3.data_entry_operator_tp = result2.data_entry_operator_tp;
							obj3.functional_meetings_for_mnth = result2.functional_meetings_for_mnth;
							obj3.grampanchayat_level = result2.grampanchayat_level;
							obj3.gw_specialists_fp = result2.gw_specialists_fp;
							obj3.gw_specialists_tp = result2.gw_specialists_tp;
							obj3.O_and_M = result2.O_and_M;
							obj3.registered_entities = result2.registered_entities;
							obj3.Social_sciences_Specialists_fp = result2.Social_sciences_Specialists_fp;


							obj3.Social_sciences_Specialists_tp = result2.Social_sciences_Specialists_tp;
							obj3.technical_Trainings = result2.technical_Trainings;
							obj3.Trained_state_or_PIA = result2.Trained_state_or_PIA;
							obj3.statename = result.statename;
							obj3.UserId = Session["UserId"].ToString();
							ABE.objAbhy_Inistutional_capacity.Add(obj3);
							ABE.SaveChanges();
							Session["StateLevelError1"] = "Saved Succesfully";
							return Json("Saved Successfully...");
						}
						else
						{
							Data1.agricultural_fp = result.agricultural_fp;
							Data1.agricultural_tp = result.agricultural_tp;
							Data1.chemistry_fp = result.chemistry_fp;
							Data1.chemistry_tp = result.chemistry_tp;
							Data1.data_analystics_fp = result.data_analystics_fp;
							Data1.data_analystics_tp = result.data_analystics_tp;
							Data1.economics_fp = result.economics_fp;
							Data1.economics_tp = result.economics_tp;
							Data1.environment_fp = result.environment_fp;
							Data1.environment_tp = result.environment_tp;
							Data1.gw_modelers_fp = result.gw_modelers_fp;
							Data1.gw_modelers_tp = result.gw_modelers_tp;
							Data1.gw_specialits_fp = result.gw_specialits_fp;

							Data1.gw_specialits_tp = result.gw_specialits_tp;
							Data1.rs_gis_fp = result.rs_gis_fp;
							Data1.rs_gis_tp = result.rs_gis_tp;
							Data1.social_fp = result.social_fp;
							Data1.social_tp = result.social_tp;
							Data1.statename = result.statename;
							Data1.UserId = Session["UserId"].ToString();
							ABE.Entry(Data1).State = EntityState.Modified;
							//ABE.objAbhy_Statelevel_Inistutional_Index.Add(obj1);
							ABE.SaveChanges();
							Data2.analysis_for_qualityandQuantity = result1.analysis_for_qualityandQuantity;
							Data2.bi_weekly_or_monthly = result1.bi_weekly_or_monthly;
							Data2.Dwlr_installed = result1.Dwlr_installed;
							Data2.frequecy_data_collection_gw_qulaity_and_Quntity = result1.frequecy_data_collection_gw_qulaity_and_Quntity;
							Data2.frequecy_data_collection_is_done_sessionally = result1.frequecy_data_collection_is_done_sessionally;
							Data2.mis_within_1_months = result1.mis_within_1_months;
							Data2.mis_within_3_months = result1.mis_within_3_months;
							Data2.nabl_accredited_labs = result1.nabl_accredited_labs;
							Data2.no_of_info_collection = result1.no_of_info_collection;
							Data2.no_of_Observation_wells_DWL = result1.no_of_Observation_wells_DWL;
							Data2.no_of_Observation_wells_GE = result1.no_of_Observation_wells_GE;
							Data2.no_of_Observation_wells_GL = result1.no_of_Observation_wells_GL;

							Data2.no_of_Observation_wells_GQ_Collected = result1.no_of_Observation_wells_GQ_Collected;
							Data2.no_of_Observation_wells_GQ_not_collected = result1.no_of_Observation_wells_GQ_not_collected;
							Data2.no_of_Observation_wells_GV = result1.no_of_Observation_wells_GV;
							Data2.public_viewing = result1.public_viewing;
							Data2.regular_basics = result1.regular_basics;
							Data2.water_qualityandquantity = result1.water_qualityandquantity;
							Data2.statename = result.statename;
							Data2.UserId = Session["UserId"].ToString();
							ABE.Entry(Data2).State = EntityState.Modified;
							// ABE.objAbhy_Operatiionalization_Of_Systems.Add(obj2);
							ABE.SaveChanges();
							Data3.data_entry_operator_fp = result2.data_entry_operator_fp;
							Data3.data_entry_operator_tp = result2.data_entry_operator_tp;
							Data3.functional_meetings_for_mnth = result2.functional_meetings_for_mnth;
							Data3.grampanchayat_level = result2.grampanchayat_level;
							Data3.gw_specialists_fp = result2.gw_specialists_fp;
							Data3.gw_specialists_tp = result2.gw_specialists_tp;
							Data3.O_and_M = result2.O_and_M;
							Data3.registered_entities = result2.registered_entities;
							Data3.Social_sciences_Specialists_fp = result2.Social_sciences_Specialists_fp;


							Data3.Social_sciences_Specialists_tp = result2.Social_sciences_Specialists_tp;
							Data3.technical_Trainings = result2.technical_Trainings;
							Data3.Trained_state_or_PIA = result2.Trained_state_or_PIA;
							Data3.statename = result.statename;
							Data3.UserId = Session["UserId"].ToString();
							ABE.Entry(Data3).State = EntityState.Modified;
							//ABE.objAbhy_Inistutional_capacity.Add(Data3);
							ABE.SaveChanges();
							Session["StateLevelError1"] = "Saved Succesfully";
							return Json("Saved Successfully...");
						}

					}

				}
				catch (Exception ex)
				{
					Session["StateLevelError1"] = ex;
					return Json(ex);
				}
			}
			else
			{
				return View();
			}
		}

		[HttpGet]
		public ActionResult Abhy_Inistutional_capacityInfo(string StateId)
		{

			if (StateId != "")
			{

				var Data1 = ABE.objAbhy_Inistutional_capacity.Where(x => x.statename == StateId).SingleOrDefault();

				return Json(Data1, JsonRequestBehavior.AllowGet);
			}
			return View();
		}


		[HttpGet]
		public ActionResult Operatiionalization_Of_SystemsInfo(string StateId)
		{

			if (StateId != "")
			{

				var Data1 = ABE.objAbhy_Operatiionalization_Of_Systems.Where(x => x.statename == StateId).SingleOrDefault();

				return Json(Data1, JsonRequestBehavior.AllowGet);
			}
			return View();
		}


		[HttpGet]
		public ActionResult Statelevel_Inistutional_IndexInfo(string StateId)
		{

			if (StateId != "")
			{

				var Data1 = ABE.objAbhy_Statelevel_Inistutional_Index.Where(x => x.statename == StateId).SingleOrDefault();

				return Json(Data1, JsonRequestBehavior.AllowGet);
			}
			return View();
		}


		[HttpGet]
		public ActionResult PGM_Adaptation()
		{
			return View();
		}

		[HttpPost]
		public ActionResult PGM_Adaptation(string pgmdata)
		{
			if (pgmdata != "{}")
			{
				try
				{
					JavaScriptSerializer js4 = new JavaScriptSerializer();
					Abhy_pgm_adaptation1 obj1 = new Abhy_pgm_adaptation1();
					//var result = js4.Deserialize<Abhy_WaterUtilization_Approval>(waterutilization);
					var result = js4.Deserialize<Abhy_pgm_adaptation1>(pgmdata);



					obj1.Agricultural_Programmes_bl = result.Agricultural_Programmes_bl;
					obj1.Agricultural_Programmes_cy = result.Agricultural_Programmes_cy;
					obj1.agriculture_National_Agriculture_Development_Programme_bl = result.agriculture_National_Agriculture_Development_Programme_bl;
					obj1.agriculture_National_Agriculture_Development_Programme_cy = result.agriculture_National_Agriculture_Development_Programme_cy;
					obj1.Command_Area_Development_Programme_bl = result.Command_Area_Development_Programme_bl;
					obj1.Command_Area_Development_Programme_cy = result.Command_Area_Development_Programme_cy;
					obj1.Disaster_Management_Planth_bl = result.Disaster_Management_Planth_bl;
					obj1.Disaster_Management_Planth_cy = result.Disaster_Management_Planth_cy;
					obj1.mGNREGA_bl = result.mGNREGA_bl;
					obj1.MGNREGA1_bl = result.MGNREGA1_bl;
					obj1.mGNREGA_cy = result.mGNREGA_cy;
					obj1.MGNREGA1_cy = result.MGNREGA1_cy;
					obj1.national_Action_plan_on_Climate_bl = result.national_Action_plan_on_Climate_bl;

					obj1.national_Action_plan_on_Climate_cy = result.national_Action_plan_on_Climate_cy;
					obj1.national_Action_plan_on_Climate_cy = result.national_Action_plan_on_Climate_cy;
					obj1.national_Disaster_Management_Act_bl = result.national_Disaster_Management_Act_bl;


					obj1.national_Disaster_Management_Act_cy = result.national_Disaster_Management_Act_cy;
					obj1.national_Mission_on_Sustainable_Agriculture_bl = result.national_Mission_on_Sustainable_Agriculture_bl;
					obj1.national_Mission_on_Sustainable_Agriculture_cy = result.national_Mission_on_Sustainable_Agriculture_cy;
					obj1.national_plans_and_programmes_bl = result.national_plans_and_programmes_bl;
					obj1.national_plans_and_programmes_cy = result.national_plans_and_programmes_cy;
					obj1.national_Rural_Drinking_Water_Programme_bl = result.national_Rural_Drinking_Water_Programme_bl;
					obj1.national_Rural_Drinking_Water_Programme_cy = result.national_Rural_Drinking_Water_Programme_cy;
					obj1.national_Water_Mission_on_Climate_bl = result.national_Water_Mission_on_Climate_bl;
					obj1.national_Water_Mission_on_Climate_cy = result.national_Water_Mission_on_Climate_cy;
					obj1.national_Water_Policy_cy = result.national_Water_Policy_cy;
					obj1.national_Water_Policy_bl = result.national_Water_Policy_bl;
					obj1.RKVY_bl = result.RKVY_bl;
					obj1.RKVY_cy = result.RKVY_cy;

					obj1.state_Action_plan_on_Climate_Change_bl = result.state_Action_plan_on_Climate_Change_bl;
					obj1.state_Action_plan_on_Climate_Change_cy = result.state_Action_plan_on_Climate_Change_cy;
					obj1.state_Water_policy_bl = result.state_Water_policy_bl;

					obj1.state_Water_policy_cy = result.state_Water_policy_cy;
					obj1.watershed_Development_bl = result.watershed_Development_bl;
					obj1.watershed_Development_cy = result.watershed_Development_cy;
					obj1.watershed_Development_programmes_bl = result.watershed_Development_programmes_bl;
					obj1.watershed_Development_programmes_cy = result.watershed_Development_programmes_cy;

					//obj1.UserId = Session["UserId"].ToString();
					ABE.objAbhy_PGM_Adaptation.Add(obj1);
					ABE.SaveChanges();

					Session["fws"] = "Saved Succesfully";
					return Json("ok");



				}
				catch (Exception ex)
				{
					Session["StateLevelError1"] = ex;
					return View("PGM_Adaptation");
				}
			}
			else
			{
				return View();
			}
		}

		public ActionResult Salient_features()
		{
			return View();
		}
		[HttpPost]
		public ActionResult Salient_features(string fwsData)
		{
			if (fwsData != "{}")
			{
				try
				{
					JavaScriptSerializer js4 = new JavaScriptSerializer();
					abhy_fws obj1 = new abhy_fws();
					//var result = js4.Deserialize<Abhy_WaterUtilization_Approval>(waterutilization);
					var result = js4.Deserialize<abhy_fws>(fwsData);



					obj1.educational_methods_bl = result.educational_methods_bl;
					obj1.educational_methods_cy = result.educational_methods_cy;
					obj1.experimental_plots_bl = result.experimental_plots_bl;
					obj1.experimental_plots_cy = result.experimental_plots_cy;
					obj1.farmers_meet_bl = result.farmers_meet_bl;
					obj1.farmers_meet_cy = result.farmers_meet_cy;
					obj1.farmers_participate_bl = result.farmers_participate_bl;
					obj1.farmers_participate_cy = result.farmers_participate_cy;
					obj1.farming_plotss_bl = result.farming_plotss_bl;
					obj1.farming_plotss_cy = result.farming_plotss_cy;
					obj1.hydrological_year_bl = result.hydrological_year_bl;
					obj1.hydrological_year_cy = result.hydrological_year_cy;
					obj1.hydro_ecosystem_analysis_bl = result.hydro_ecosystem_analysis_bl;

					obj1.hydro_ecosystem_analysis_cy = result.hydro_ecosystem_analysis_cy;
					obj1.primary_learning_material_bl = result.primary_learning_material_bl;
					obj1.primary_learning_material_cy = result.primary_learning_material_cy;
					//obj1.UserId = Session["UserId"].ToString();
					ABE.objabhy_fws.Add(obj1);
					ABE.SaveChanges();

					Session["fws"] = "Saved Succesfully";
					return Json("ok");



				}
				catch (Exception ex)
				{
					Session["StateLevelError1"] = ex;
					return View("State_Level_Institutional_Index");
				}
			}
			else
			{
				return View();
			}
		}
		public ActionResult Village_Level_Committee()
		{
			if (Session["UserId"] != null)
			{
				List<abhy_villages> model = ABE.objabhy_villages.ToList();
				return View(model);

			}
			else
			{
				Session["Village_Level_Committee"] = "Village_Level_Committee";
				return RedirectToAction("MisLogin", "WSP");
			}
		}

		[HttpPost]
		public ActionResult PGWN_PersonsDetails(string Data)
		{

			JavaScriptSerializer js = new JavaScriptSerializer();
			var result = js.Deserialize<PGWN_Personal_Details>(Data);


			PGWN_Personal_Details obj = new PGWN_Personal_Details();
			obj.state_name = result.state_name;
			obj.district_name = result.district_name;
			obj.todaydate = DateTime.Now.ToString("dd/MM/yyyy");
			obj.block = result.block;
			obj.gname = result.gname;
			obj.villname = result.villname;
			obj.male_sc = result.male_sc;
			obj.female_sc = result.female_sc;
			obj.male_st = result.male_st;
			obj.female_st = result.female_st;
			obj.male_obc = result.male_obc;
			obj.female_obc = result.female_obc;
			obj.male_minority = result.male_minority;
			obj.female_minority = result.female_minority;
			obj.male_other = result.male_other;


			ABE.objPGWN_Personal_Details.Add(obj);
			ABE.SaveChanges();
			return Json("Successfully Saved");



		}

		[HttpPost]
		public ActionResult PGWN_DepetDetails(string Data)
		{

			JavaScriptSerializer js = new JavaScriptSerializer();
			var result = js.Deserialize<PGWN_Department_Details>(Data);


			PGWN_Department_Details obj = new PGWN_Department_Details();
			obj.state_name = result.state_name;
			obj.district_name = result.district_name;
			obj.todaydate = DateTime.Now.ToString("dd/MM/yyyy");
			obj.block = result.block;
			obj.gname = result.gname;
			obj.villname = result.villname;
			obj.designation = result.designation;
			obj.department = result.department;
			obj.countname = result.countname;
			obj.activepassive = result.activepassive;
			obj.religon = result.religon;
			obj.caste = result.caste;
			obj.gender = result.gender;
			obj.todaydate = DateTime.Now.ToString("dd/MM/yyyy");



			ABE.objPGWN_Department_Details.Add(obj);
			ABE.SaveChanges();
			return Json("Successfully Saved");



		}

		[HttpGet]
		public ActionResult pgwn_Depdetails(string state, string dist, string block, string gram, string vill)
		{
			List<PGWN_Department_Details> TDetails = null;
			if (state != "" && dist != "" && block != "" && gram != "" && vill != "")
			{
				TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block && x.gname == gram && x.villname == vill).ToList();
			}
			else if (state != "" && dist != "" && block != "" && gram != "")
			{
				TDetails = ABE.objPGWN_Department_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block && x.gname == gram).ToList();
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

		[HttpGet]
		public ActionResult pgwn_personsdetails(string state, string dist, string block, string gram, string vill)
		{
			List<PGWN_Personal_Details> TDetails = null;
			if (state != "" && dist != "" && block != "" && gram != "" && vill != "")
			{
				TDetails = ABE.objPGWN_Personal_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block && x.gname == gram && x.villname == vill).ToList();
			}
			else if (state != "" && dist != "" && block != "" && gram != "")
			{
				TDetails = ABE.objPGWN_Personal_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block && x.gname == gram).ToList();
			}
			else if (state != "" && dist != "" && block != "")
			{
				TDetails = ABE.objPGWN_Personal_Details.Where(x => x.state_name == state && x.district_name == dist && x.block == block).ToList();
			}
			else if (state != "" && dist != "")
			{
				TDetails = ABE.objPGWN_Personal_Details.Where(x => x.state_name == state && x.district_name == dist).ToList();
			}
			else
			{
				TDetails = ABE.objPGWN_Personal_Details.Where(x => x.state_name == state).ToList();
			}


			return Json(TDetails, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult DeletePGWNPersonalDetail(string Data)
		{

			JavaScriptSerializer js = new JavaScriptSerializer();
			var result = js.Deserialize<PGWN_Personal_Details>(Data);

			if (result.pgwnpdid != 0)
			{
				var TKID = Convert.ToInt32(result.pgwnpdid);
				var Data1 = ABE.objPGWN_Personal_Details.Where(x => x.pgwnpdid == TKID).SingleOrDefault();
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
		public ActionResult DeletePGWNDeptDetail(string Data)
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
					return Json("Not Deleted");
				}

			}
			else
			{
				return View();
			}

		}


		[HttpGet]
		public ActionResult Grievance_Report(string year, string statename)
		{
			List<grievance_new> Details = new List<grievance_new>();
			if (statename == "All" && year == "ALL")
			{
				Details = ABE.objgrievance_new.OrderByDescending(x => x.agid).ToList();
			}
			else if (statename == "All" && year != "ALL")
			{
				Details = ABE.objgrievance_new.Where(x => x.year == year).OrderByDescending(x => x.agid).ToList();
			}
			else if (statename != "All" && year == "ALL")
			{
				Details = ABE.objgrievance_new.Where(x => x.grievance_address_to == statename).OrderByDescending(x => x.agid).ToList();
			}
			else if (statename != "All" && year != "ALL")
			{
				Details = ABE.objgrievance_new.Where(x => x.grievance_address_to == statename && x.year == year).OrderByDescending(x => x.agid).ToList();
			}
			var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
			jsonresults24.MaxJsonLength = int.MaxValue;
			return jsonresults24;


		}


		[HttpGet]
		public ActionResult Grievance_Report_type(string year, string month, string state)
		{
			List<grievance_new> Details = new List<grievance_new>();
			if (state == "All")
			{
				if (year == "ALL" && month == "0")
				{
					Details = ABE.objgrievance_new.OrderByDescending(x => x.agid).ToList();
				}
				else
				{

					if (year != "0" && month != "0")
					{
						Details = ABE.objgrievance_new.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.agid).ToList();
					}
					else if (year != "0" && month == "0")
					{
						Details = ABE.objgrievance_new.Where(x => x.year == year).OrderByDescending(x => x.agid).ToList();
					}
				}
			}
			else
			{
				if (year == "ALL" && month == "0")
				{
					Details = ABE.objgrievance_new.Where(x => x.grievance_address_to == state).OrderByDescending(x => x.agid).ToList();
				}
				else if (state != "All" && year != "0" && month != "0")
				{
					Details = ABE.objgrievance_new.Where(x => x.year == year && x.month == month && x.grievance_address_to == state).OrderByDescending(x => x.agid).ToList();
				}
				else if (state != "All" && year != "0" && month == "0")
				{
					Details = ABE.objgrievance_new.Where(x => x.year == year && x.grievance_address_to == state).OrderByDescending(x => x.agid).ToList();
				}
			}


			var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
			jsonresults24.MaxJsonLength = int.MaxValue;
			return jsonresults24;


		}

		[HttpGet]
		public ActionResult Grievance_Report_type_month(string year, string state)
		{
			List<grievance_new> Details = new List<grievance_new>();
			if (state == "All")
			{
				if (year == "ALL")
				{
					Details = ABE.objgrievance_new.OrderByDescending(x => x.agid).ToList();
				}
				else
				{
					if (year != "0")
					{
						Details = ABE.objgrievance_new.Where(x => x.year == year).OrderByDescending(x => x.agid).ToList();
					}

				}
			}
			else
			{
				if (year == "ALL")
				{
					Details = ABE.objgrievance_new.Where(x => x.grievance_address_to == state).OrderByDescending(x => x.agid).ToList();
				}
				else
				{
					if (year != "0")
					{
						Details = ABE.objgrievance_new.Where(x => x.year == year && x.grievance_address_to == state).OrderByDescending(x => x.agid).ToList();
					}

				}
			}
			var jsonresults24 = Json(Details, JsonRequestBehavior.AllowGet);
			jsonresults24.MaxJsonLength = int.MaxValue;
			return jsonresults24;


		}


		[HttpPost]
		public ActionResult forward2ndlevel(string id)
		{

			var Data = ABE.objgrievance_new.Where(x => x.IdentificationId == id).SingleOrDefault();

			if (Data != null)
			{
				var code = Data.IdentificationId;
				var state = Data.grievance_address_to;

				string Email = "";
				var OfficersDetails = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == state).ToList();
				string fullname = "";
				if (OfficersDetails.Count != 0)
				{
					Email = OfficersDetails[0].second_officer_mailid;
					fullname = OfficersDetails[0].second_officername;
				}

				Data.accept = null;
				Data.approve_date = null;
				Data.District_name = null;
				Data.process = null;
				Data.image_name = null;
				Data.image_path = null;
				Data.image_path = null;
				Data.mail_count_date = DateTime.Now.ToString("dd/MM/yyyy");
				Data.officer_name = fullname;
				Data.yes_no = null;
				ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
				int A = ABE.SaveChanges();



				if (A > 0)
				{
					string Mail_Subject = "Grievance Reopen -" + code;
					StringBuilder sb = new StringBuilder();
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<table style='margin-left:50px;'>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("</tr>");
					sb.Append("<tr style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<b>Hi  " + fullname + " Sir,</b>");
					sb.Append("<br>");
					sb.Append("</td>");
					sb.Append("<br>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<h4>");
					sb.Append("This Grievance ID – " + code + " has been Reopened on " + Data.reg_date + "  at 2nd level.");
					sb.Append("</h4>");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("<td>");
					sb.Append("</td>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");
					sb.Append("<br>");
					sb.Append("Thanking You");
					sb.Append("<br>");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<tr>");
					sb.Append("</tr>");
					sb.Append("</table>");

					string result = WebConstents.SendEmailSMTP(Email, null, Mail_Subject, sb.ToString(), "");
					return Json("Forward Successfully");


				}
				else
				{
					return Json("Not Forward");
				}
			}
			else
			{
				return Json("Not Forward");
			}


		}


		[HttpPost]
		public ActionResult forward3rdlevel(string id)
		{

			var Data = ABE.objgrievance_new.Where(x => x.IdentificationId == id).SingleOrDefault();

			if (Data != null)
			{
				var code = Data.IdentificationId;
				var state = Data.grievance_address_to;

				string Email = "";
				var OfficersDetails = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == state).ToList();
				string fullname = "";
				if (OfficersDetails.Count != 0)
				{
					Email = OfficersDetails[0].third_officer_mailid;
					fullname = OfficersDetails[0].third_officername;
				}

				Data.accept = null;
				Data.approve_date = null;
				Data.District_name = null;
				Data.process = null;
				Data.image_name = null;
				Data.image_path = null;
				Data.image_path = null;
				Data.mail_count1_date = DateTime.Now.ToString("dd/MM/yyyy");
				Data.officer_name = fullname;
				Data.yes_no = null;
				ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
				int A = ABE.SaveChanges();


				if (A > 0)
				{
					string Mail_Subject = "Grievance Reopen -" + code;
					StringBuilder sb = new StringBuilder();
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<table style='margin-left:50px;'>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("</tr>");
					sb.Append("<tr style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<b>Hi  " + fullname + " Sir,</b>");
					sb.Append("<br>");
					sb.Append("</td>");
					sb.Append("<br>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("<td>");
					sb.Append("<h4>");
					sb.Append("This Grievance ID – " + code + " has been Reopened on " + Data.reg_date + ". at 3rd level");
					sb.Append("</h4>");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<br>");
					sb.Append("<tr  style='width:300px'>");
					sb.Append("<td>");
					sb.Append("</td>");
					sb.Append("<tr  style='width:300px'>");

					sb.Append("<td>");
					sb.Append("<br>");
					sb.Append("Thanking You");
					sb.Append("<br>");
					sb.Append("</td>");
					sb.Append("</tr>");
					sb.Append("<tr>");
					sb.Append("</tr>");
					sb.Append("</table>");

					string result = WebConstents.SendEmailSMTP(Email, null, Mail_Subject, sb.ToString(), "");
					return Json("Forward Successfully");


				}
				else
				{
					return Json("Not Forward");
				}
			}
			else
			{
				return Json("Not Forward");
			}


		}

		[HttpPost]
		public ActionResult mail_forward(string id, string state, string dist)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var state_name = state;
					var ID = Convert.ToInt32(id);
					var Data = ABE.objgrievance_new.Where(x => x.agid == ID).SingleOrDefault();
					var code = Data.IdentificationId;


					if (Data != null)
					{

						var Detilss = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == state_name).SingleOrDefault();
						var Email = Detilss.first_officer_mailid;
						var OfficerName = Detilss.first_officername;
						var Detilss_dist = ABE.obj_grm_disrtict_email_list.Where(x => x.district == dist).SingleOrDefault();

						Data.agid = ID;
						Data.grievance_address_to = state_name;
						Data.mail_count_date = null;
						Data.mail_count1_date = null;
						Data.mail_count2_date = null;
						Data.forward_mail = "1";
						Data.officer_name = OfficerName;


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();

						var Data_new = ABE.objgrievance_new.Where(x => x.agid == ID).SingleOrDefault();
						var RegDate = Data_new.reg_date;




						if (A > 0)
						{
							string Mail_Subject = "Grievance Forward -" + code;
							StringBuilder sb = new StringBuilder();
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<table style='margin-left:50px;'>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("</tr>");
							sb.Append("<tr style='width:300px'>");
							sb.Append("<td>");
							sb.Append("<b>Hi  " + OfficerName + " Sir,</b>");
							sb.Append("<br>");
							sb.Append("</td>");
							sb.Append("<br>");
							sb.Append("</tr>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("<td>");
							sb.Append("<h4>");
							sb.Append("Grievance,ID – " + code + " Forwared By State on " + RegDate + ". Kindly Check the Status.");
							sb.Append("</h4>");
							sb.Append("</td>");
							sb.Append("</tr>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("<td>");
							sb.Append("</td>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("<td>");
							sb.Append("<br>");
							sb.Append("Thanking You");
							sb.Append("<br>");
							sb.Append("</td>");
							sb.Append("</tr>");
							sb.Append("<tr>");
							sb.Append("</tr>");
							sb.Append("</table>");
							string result = WebConstents.SendEmailSMTP(Email, null, Mail_Subject, sb.ToString(), "");


							if (Detilss_dist != null)
							{
								var Email_dist = Detilss_dist.email;
								var name_dist = Detilss_dist.name;

								string Mail_Subject_dist = "Grievance Forward by State -" + code;
								StringBuilder sb_dist = new StringBuilder();
								sb_dist.Append("<br>");
								sb_dist.Append("<br>");
								sb_dist.Append("<table style='margin-left:50px;'>");
								sb_dist.Append("<tr  style='width:300px'>");
								sb_dist.Append("</tr>");
								sb_dist.Append("<tr style='width:300px'>");
								sb_dist.Append("<td>");
								sb_dist.Append("<b>Hi  " + name_dist + " Sir,</b>");
								sb_dist.Append("<br>");
								sb_dist.Append("</td>");
								sb_dist.Append("<br>");
								sb_dist.Append("</tr>");
								sb_dist.Append("<br>");
								sb_dist.Append("<br>");
								sb_dist.Append("<br>");
								sb_dist.Append("<tr  style='width:300px'>");
								sb_dist.Append("<td>");
								sb_dist.Append("<h4>");
								sb_dist.Append("Grievance,ID – " + code + " Forwared By State on " + RegDate + ". Kindly Check the Status");
								sb_dist.Append("</h4>");
								sb_dist.Append("</td>");
								sb_dist.Append("</tr>");
								sb_dist.Append("<br>");
								sb_dist.Append("<br>");
								sb_dist.Append("<br>");
								sb_dist.Append("<tr  style='width:300px'>");
								sb_dist.Append("<td>");
								sb_dist.Append("</td>");
								sb_dist.Append("<tr  style='width:300px'>");
								sb_dist.Append("<td>");
								sb_dist.Append("<br>");
								sb_dist.Append("Thanking You");
								sb_dist.Append("<br>");
								sb_dist.Append("</td>");
								sb_dist.Append("</tr>");
								sb_dist.Append("<tr>");
								sb_dist.Append("</tr>");
								sb_dist.Append("</table>");

								string result_dist = WebConstents.SendEmailSMTP(Email_dist, null, Mail_Subject_dist, sb_dist.ToString(), "");

							}
							if (Data_new.email != null)
							{
								var Email_user = Data_new.email;
								string Mail_Subject_users = "Grievance Forward -" + code;
								StringBuilder sb_users = new StringBuilder();
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<table style='margin-left:50px;'>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("</tr>");
								sb_users.Append("<tr style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("<b>Dear Sir/Madam,</b>");
								sb_users.Append("<br>");
								sb_users.Append("</td>");
								sb_users.Append("<br>");
								sb_users.Append("</tr>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("<h4>");
								sb_users.Append("Your Grievance ID " + code + " is forwarded to concern State : " + state_name + " for resolution.");
								sb_users.Append("</h4>");
								sb_users.Append("</td>");
								sb_users.Append("</tr>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("</td>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("<br>");
								sb_users.Append("Thanking You");
								sb_users.Append("<br>");
								sb_users.Append("</td>");
								sb_users.Append("</tr>");
								sb_users.Append("<tr>");
								sb_users.Append("</tr>");
								sb_users.Append("</table>");
								string result_users = WebConstents.SendEmailSMTP(Email_user, null, Mail_Subject_users, sb_users.ToString(), "");


							}
							return Json("Forward Successfully");
						}
						else
						{
							return Json("Not Forward");
						}
					}
					else
					{
						return Json("Not Forward");
					}


				}
				catch (Exception ex)
				{
					return Json("Not Forward");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}


		[HttpPost]
		public ActionResult mail_forward_npmu(string id, string state)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var state_name = state;
					var ID = Convert.ToInt32(id);
					var Data = ABE.objgrievance_new.Where(x => x.agid == ID).SingleOrDefault();
					var code = Data.IdentificationId;

					if (Data != null)
					{

						var Detilss = ABE.obj_abhy_grievance_officer_mails_info_new.Where(x => x.state_name == state_name).SingleOrDefault();
						var Email = Detilss.first_officer_mailid;
						var OfficerName = Detilss.first_officername;

						Data.agid = ID;
						Data.grievance_address_to = state_name;
						Data.mail_count_date = null;
						Data.mail_count1_date = null;
						Data.mail_count2_date = null;
						Data.forward_mail = "2";

						Data.officer_name = OfficerName;


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();

						var Data_new = ABE.objgrievance_new.Where(x => x.agid == ID).SingleOrDefault();
						var RegDate = Data_new.reg_date;




						if (A > 0)
						{
							string Mail_Subject = "Grievance Forward -" + code;
							StringBuilder sb = new StringBuilder();
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<table style='margin-left:50px;'>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("</tr>");
							sb.Append("<tr style='width:300px'>");
							sb.Append("<td>");
							sb.Append("<b>Hi  " + OfficerName + " Sir,</b>");
							sb.Append("<br>");
							sb.Append("</td>");
							sb.Append("<br>");
							sb.Append("</tr>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("<td>");
							sb.Append("<h4>");
							sb.Append("Grievance,ID – " + code + " Forwared By State on " + RegDate + ". Kindly Check the Status.");
							sb.Append("</h4>");
							sb.Append("</td>");
							sb.Append("</tr>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<br>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("<td>");
							sb.Append("</td>");
							sb.Append("<tr  style='width:300px'>");
							sb.Append("<td>");
							sb.Append("<br>");
							sb.Append("Thanking You");
							sb.Append("<br>");
							sb.Append("</td>");
							sb.Append("</tr>");
							sb.Append("<tr>");
							sb.Append("</tr>");
							sb.Append("</table>");
							string result = WebConstents.SendEmailSMTP(Email, null, Mail_Subject, sb.ToString(), "");


							if (Data_new.email != null)
							{
								var Email_user = Data_new.email;
								string Mail_Subject_users = "Grievance Forward -" + code;
								StringBuilder sb_users = new StringBuilder();
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<table style='margin-left:50px;'>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("</tr>");
								sb_users.Append("<tr style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("<b>Dear Sir/Madam,</b>");
								sb_users.Append("<br>");
								sb_users.Append("</td>");
								sb_users.Append("<br>");
								sb_users.Append("</tr>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("<h4>");
								sb_users.Append("Your Grievance ID " + code + " is forwarded to concern State : " + state_name + " for resolution.");
								sb_users.Append("</h4>");
								sb_users.Append("</td>");
								sb_users.Append("</tr>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<br>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("</td>");
								sb_users.Append("<tr  style='width:300px'>");
								sb_users.Append("<td>");
								sb_users.Append("<br>");
								sb_users.Append("Thanking You");
								sb_users.Append("<br>");
								sb_users.Append("</td>");
								sb_users.Append("</tr>");
								sb_users.Append("<tr>");
								sb_users.Append("</tr>");
								sb_users.Append("</table>");
								string result_users = WebConstents.SendEmailSMTP(Email_user, null, Mail_Subject_users, sb_users.ToString(), "");


							}
							return Json("Forward Successfully");
						}
						else
						{
							return Json("Not Forward");
						}
					}
					else
					{
						return Json("Not Forward");
					}


				}
				catch (Exception ex)
				{
					return Json("Not Forward");

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
