using AbhyProject.Classes;
using AbhyProject.Excel;
using AbhyProject.Models;
using AbhyProject.Utility;
using ClosedXML.Excel;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Timers;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;



namespace AbhyProject.Controllers
{
	public class IECController : Controller
	{
		//Traninig_newController
		AbhyEntity ABE = new AbhyEntity();
		AtaljalEntity AJE = new AtaljalEntity();
		// GET: IEC
		public ActionResult Index()
		{
			return View();
		}
		public ActionResult IEC_Module()
		{
			
			return View();
		}
		public ActionResult IEC_Module_report()
		{

			return View();
		}

		//State pdf code start
		public ActionResult IEC_Module_report_state(string state_name, string year1, string month1)
		{
			Session["state_name"] = state_name;
			Session["year1"] = year1;
			Session["month1"] = month1;
			return View();
		}

		[HttpPost]
		public ActionResult Data_state_report(string State1, string year_state, string month_state, string state_name)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = State1.ToString();
					var Year = year_state.ToString();
					var month = month_state.ToString();
					var state = state_name.ToString();
					var officer_name = "State Level Nodal Officer";
					var officer = Session["Officer"].ToString();

					if (officer == "State Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer).OrderBy(x => x.order_by_month).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list

							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}

					}
					else
					{
						if (Year == "All")
						{
							if (state != "0" && state != "" && state != null && officer_name != "0" && officer_name != "" && officer_name != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
						else
						{
							if (state != "0" && state != "" && state != null && officer_name != "0" && officer_name != "" && officer_name != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && officer_name != "0" && officer_name != "" && officer_name != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
					}

					var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
					jsonResult.MaxJsonLength = int.MaxValue;
					return jsonResult;
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

		//State pdf code End

		//Dist pdf code start
		public ActionResult IEC_Module_report_Dist(string state_name, string dist_name, string year1, string month1)
		{
			Session["state_name"] = state_name;
			Session["dist_name"] = dist_name;
			Session["year1"] = year1;
			Session["month1"] = month1;
			return View();
		}

		[HttpPost]
		public ActionResult Data_dist_report(string State1, string Dist1, string state_name11, string dist_name1, string year11, string month11)
		{
			if (Session["UserId"] != null)
			{
				try
				{

					var data = ABE.obj_abhy_IEC.ToList();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = State1;
					var Dist = Dist1;
					var officer = Session["Officer"].ToString();
					var dist_name = "District Level Nodal Officer";
					var state = state_name11;
					var district_name = dist_name1;
					var Year = year11;
					var month = month11;

					if (officer == "District Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}

						else
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer && x.year == Year && x.month == month).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer && x.year == Year).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
					}
					else if (officer == "State Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == dist_name).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == dist_name).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year && x.month == month).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == dist_name && x.year == Year && x.month == month).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == dist_name && x.year == Year).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
					}
					else
					{
						if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
						{
							var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year && x.month == month).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
							ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
						}
						else if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null)
						{
							var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();
							ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
						}
					}
					var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
					jsonResult.MaxJsonLength = int.MaxValue;
					return jsonResult;

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

		//Dist pdf code End

		// Gram pdf code start
		public ActionResult IEC_Module_report_Gram(string state_name, string dist_name, string block_name, string gram_name, string year1, string month1)
		{
			Session["state_name"] = state_name;
			Session["dist_name"] = dist_name;
			Session["block_name"] = block_name;
			Session["gram_name"] = gram_name;
			Session["year1"] = year1;
			Session["month1"] = month1;
			return View();
		}


		[HttpPost]
		public ActionResult Data_get_gram(string State1, string Dist1, string Block1, string Gram1, string state_name1, string dist_name, string block_name, string gram_name1, string year1, string month1)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var data = ABE.obj_abhy_IEC.ToList();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = State1;
					var Dist = Dist1;
					var Block = Block1;
					var Gram = Gram1;
					var officer = Session["Officer"].ToString();
					var gram_name = "Gram Panchyat Nodal Officer";
					var state = state_name1;
					var district_name = dist_name;
					var block = block_name;
					var gram = gram_name1;
					var Year = year1;
					var month = month1;

					if (officer == "Gram Panchyat Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == officer).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}

						}
					}
					else if (officer == "District Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}

					}
					else if (officer == "State Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
					}
					else
					{
						if (Year == "All")
						{
							if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}

						}
						else
						{
							if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
							else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();//total list
							}
						}
					}
					var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
					jsonResult.MaxJsonLength = int.MaxValue;
					return jsonResult;
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


		//Gram pdf code End



		[HttpPost]
		public ActionResult State_SessionInfo_1(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);
					if (Session["Officer"] != null && Session["Officer"].ToString() == "Admin")
					{
						var Statename = "Admin";
						var Str = Statename;
						return Json(Str, JsonRequestBehavior.AllowGet);

					}
					else if (Session["Officer"] != null && Session["Officer"].ToString() == "National Level Nodal Officer")
					{
						var Statename = "Admin";
						var Str = Statename;
						return Json(Str, JsonRequestBehavior.AllowGet);

					}
					else if (Session["Officer"] != null && Session["Officer"].ToString() == "State Level Nodal Officer")
					{
						var Officer = "State Level Nodal Officer";
						var Statename = Session["gstate"].ToString();
						var Str = Officer + ',' + Statename;
						return Json(Str, JsonRequestBehavior.AllowGet);

					}
					else if (Session["Officer"] != null && Session["Officer"].ToString() == "District Level Nodal Officer")
					{
						var Officer = "District Level Nodal Officer";
						var Statename = Session["gstate"].ToString();
						var Dist = Session["gdist"].ToString();
						var Str = Officer + ',' + Statename + ',' + Dist;
						return Json(Str, JsonRequestBehavior.AllowGet);

					}
					else if (Session["Officer"] != null && Session["Officer"].ToString() == "Block Level Nodal Officer")
					{
						var Officer = "Block Level Nodal Officer";
						var Statename = Session["gstate"].ToString();
						var Dist = Session["gdist"].ToString();
						var Block = Session["gblock"].ToString();
						var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block;
						return Json(Str, JsonRequestBehavior.AllowGet);

					}
					else if (Session["Officer"] != null && Session["Officer"].ToString() == "Gram Panchyat Nodal Officer")
					{
						var Officer = "Gram Panchyat Nodal Officer";
						var Statename = Session["gstate"].ToString();
						var Dist = Session["gdist"].ToString();
						var Block = Session["gblock"].ToString();
						var Gram = Session["ggram"].ToString(); //var year = Session["Year"].ToString();
						var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block + ',' + Gram /*+ ',' + year*/;
						return Json(Str, JsonRequestBehavior.AllowGet);

					}

					else
					{
						return Json("Admin", JsonRequestBehavior.AllowGet);

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
		public ActionResult Name_Dropdown(string ActivityName)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					List<abhy_iec_dropdown> ddetails = new List<abhy_iec_dropdown>();

					ddetails = ABE.obj_abhy_iec_dropdown.Where(x => x.activity == ActivityName).ToList();  // total list

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

		[HttpGet]
		public ActionResult Name_Dropdown_new(string ActivityNameNew)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					List<abhy_iec_dropdown> ddetails = new List<abhy_iec_dropdown>();

					ddetails = ABE.obj_abhy_iec_dropdown.Where(x => x.activity == ActivityNameNew).ToList();  // total list

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

		[HttpPost]
		public ActionResult Save_data_iec(string Data) //saving
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);

					var Details = new abhy_IEC();
					var State = "";
					var Dist = "";
					var Gram = "";
					var Block = "";
					var Email = Session["Email"].ToString();
					var officer = Session["Officer"].ToString();
					var year = result.year;
					var month = result.month;
					int month_num = Get_Month_Number(month);

					if (Session["gstate"] != null)
					{
						Details.state_name = Session["gstate"].ToString();
					}
					else
					{
						Details.state_name = State;
					}
					if (Session["gdist"] != null)
					{
						Details.district_name = Session["gdist"].ToString();
					}
					else
					{
						Details.district_name = Dist;
					}
					if (Session["gblock"] != null)
					{
						Details.block_name = Session["gblock"].ToString();
					}
					else
					{
						Details.block_name = Block;
					}
					if (Session["ggram"] != null)
					{
						Details.gpname = Session["ggram"].ToString();
					}
					else
					{
						Details.gpname = Gram;
					}
					//Details.year = year;
					if (month == "March")
                    {
						Details.year = "2024-25";
                    }
                    else
                    {
						Details.year = year;
					}
					Details.month = month;
					Details.order_by_month = month_num;
					Details.entry_by = Email;
					Details.activity = result.activity;
					Details.activity_other = result.activity_other;
					Details.sub_activity = result.sub_activity;
					Details.sub_activity_other = result.sub_activity_other;
					Details.number = result.number;
					Details.cumulative_total = result.cumulative_total;
					Details.IEC_activity = result.IEC_activity;
					Details.remark = result.remark;
					Details.Nodal_officer = officer;

					ABE.obj_abhy_IEC.Add(Details);
					ABE.SaveChanges();

					
					var activity = result.activity;
					var subactivity = result.sub_activity;
					var nodalofficer = officer;
					var state = Details.state_name;
					var dist = Details.district_name;
					var gp = Details.gpname;

					delete_cumulative(state, dist, gp, activity, subactivity, nodalofficer, year);
					return Json("Successfully Saved", JsonRequestBehavior.AllowGet);


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
		public ActionResult Data_get(string Data, string year_gram, string month_gram, string state_name, string district, string block_name1, string name_gram)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);
					var data = ABE.obj_abhy_IEC.ToList();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = result.state_name;
					var Dist = result.district_name;
					var Block = result.block_name;
					var Gram = result.gpname;
					var officer = Session["Officer"].ToString();
					var gram_name = "Gram Panchyat Nodal Officer";
					var state = state_name.ToString();
					var district_name = district.ToString();
					var block = block_name1.ToString();
					var gram = name_gram.ToString();
					var Year = year_gram.ToString();
					var month = month_gram.ToString();

					if (officer == "Gram Panchyat Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == officer).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}

						}
					}

					else if (officer == "District Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}

					}
					else if (officer == "State Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
					}
					else
					{
						if (Year == "All")
						{
							if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == gram_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}

						}
						else
						{
							if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.block_name == block && x.gpname == gram && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.block_name == block && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == Dist && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == gram_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == gram_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
					}
					var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
					jsonResult.MaxJsonLength = int.MaxValue;
					return jsonResult;
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
		public ActionResult Data_dist(string Data, string year_dist, string month_dist, string state_name, string district)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);
					var data = ABE.obj_abhy_IEC.ToList();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = result.state_name;
					var Dist = result.district_name;
					var Block = result.block_name;
					var Gram = result.gpname;
					var officer = Session["Officer"].ToString();
					var dist_name = "District Level Nodal Officer";
					var state = state_name.ToString();
					var district_name = district.ToString();
					var Year = year_dist.ToString();
					var month = month_dist.ToString();

					if (officer == "District Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer).OrderBy(x => x.order_by_month).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}

						else
						{
							if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();

							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer && x.year == Year).OrderBy(x => x.order_by_month).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer).OrderBy(x => x.order_by_month).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
					}
					else if (officer == "State Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == dist_name).OrderBy(x => x.order_by_month).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == dist_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).OrderByDescending(x => x.sub_activity).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == dist_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == dist_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
					}
					else
					{
						if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
						{
							var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();
							ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
						}
						else if (state != "0" && state != "" && state != null && district_name != "0" && district_name != "" && district_name != null && Year != "0" && Year != "" && Year != null)
						{
							var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district_name && x.Nodal_officer == dist_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();
							ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
						}
					}

					var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
					jsonResult.MaxJsonLength = int.MaxValue;
					return jsonResult;
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
		public ActionResult Data_state(string Data, string year_state, string month_state, string state_name)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);
					var data = ABE.obj_abhy_IEC.ToList();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = result.state_name;
					var Dist = result.district_name;
					var Block = result.block_name;
					var Gram = result.gpname;
					var Year = year_state.ToString();
					var month = month_state.ToString();
					var state = state_name.ToString();
					var officer_name = "State Level Nodal Officer";
					var officer = Session["Officer"].ToString();

					if (officer == "State Level Nodal Officer")
					{
						if (Year == "All")
						{
							if (State != "0" && State != "" && State != null && officer != "0" && officer != "" && officer != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
						else
						{
							if (State != "0" && State != "" && State != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (State != "0" && State != "" && State != null && officer != "0" && officer != "" && officer != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}

					}
					else
					{
						if (Year == "All")
						{
							if (state != "0" && state != "" && state != null && officer_name != "0" && officer_name != "" && officer_name != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
						else
						{
							if (state != "0" && state != "" && state != null && officer_name != "0" && officer_name != "" && officer_name != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
							else if (state != "0" && state != "" && state != null && officer_name != "0" && officer_name != "" && officer_name != null && Year != "0" && Year != "" && Year != null)
							{
								var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
								ddetails = abc.OrderByDescending(x => x.sub_activity).ToList();
							}
						}
					}

					var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
					jsonResult.MaxJsonLength = int.MaxValue;
					return jsonResult;
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



		public ActionResult report_data()
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
					var year = Session["year"].ToString();
					var month = Session["month"].ToString();

					List<abhy_IEC> ddetails = new List<abhy_IEC>();

					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null)
					{
						ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State).OrderByDescending(x => x.id).OrderByDescending(x => x.sub_activity).ToList();//total list

					}

					var jsonResult = Json(ddetails, JsonRequestBehavior.AllowGet);
					jsonResult.MaxJsonLength = int.MaxValue;
					return jsonResult;


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
		public ActionResult Update_data(string id, string activity, string other_activity, string sub_act1, string sub_activity_other, string number, string cumulative_total, string IEC_activity, string remark)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.activity = activity;
						Data.activity_other = other_activity;
						Data.sub_activity = sub_act1;
						Data.sub_activity_other = sub_activity_other;
						Data.number = number;
						Data.cumulative_total = cumulative_total;
						Data.IEC_activity = IEC_activity;
						Data.remark = remark;

						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							update_cumulative(ID);
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

		private void update_cumulative(int id)
		{
			int i = 0;
			decimal total = 0;
			var ID = Convert.ToInt32(id);
			var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
			List<abhy_IEC> Data_gp = new List<abhy_IEC>();
			if (Data.Nodal_officer == "Gram Panchyat Nodal Officer")
			{
				Data_gp = ABE.obj_abhy_IEC.Where(x => x.gpname == Data.gpname && x.year == Data.year && x.activity == Data.activity && x.sub_activity == Data.sub_activity).OrderBy(x => x.order_by_month).ToList();
			}
			else if (Data.Nodal_officer == "District Level Nodal Officer")
			{
				Data_gp = ABE.obj_abhy_IEC.Where(x => x.district_name == Data.district_name && x.year == Data.year && x.activity == Data.activity && x.sub_activity == Data.sub_activity).OrderBy(x => x.order_by_month).ToList();
			}
			else if (Data.Nodal_officer == "State Level Nodal Officer")
			{
				Data_gp = ABE.obj_abhy_IEC.Where(x => x.state_name == Data.state_name && x.year == Data.year && x.activity == Data.activity && x.sub_activity == Data.sub_activity).OrderBy(x => x.order_by_month).ToList();
			}
			foreach (var item in Data_gp)
			{
				var dts = ABE.obj_abhy_IEC.Where(x => x.id == item.id).FirstOrDefault();
				total += Convert.ToDecimal(item.number);
				dts.cumulative_total = Convert.ToString(total);
				ABE.Entry(dts).State = EntityState.Modified;
				ABE.SaveChanges();
			}
		}

		[HttpPost]
		public ActionResult Delete_data(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);

					if (result.id != 0)
					{
						var TKID = Convert.ToInt32(result.id);
						var Data1 = ABE.obj_abhy_IEC.Where(x => x.id == TKID).SingleOrDefault();
						var cumuative = Data1.cumulative_total;
						var activity = Data1.activity;
						var subactivity = Data1.sub_activity;
						var nodalofficer = Data1.Nodal_officer;
						var year = Data1.year;
						var state = Data1.state_name;
						var dist = Data1.district_name;
						var gp = Data1.gpname;

						if (Data1 != null)
						{

							ABE.Entry(Data1).State = EntityState.Deleted;
							ABE.SaveChanges();
							delete_cumulative(state, dist, gp, activity, subactivity, nodalofficer, year);
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
		private void delete_cumulative(string state, string dist, string gp, string activity, string subactivity, string nodalofficer, string year)
		{
			int i = 0;
			decimal total = 0;
			List<abhy_IEC> Data_gp = new List<abhy_IEC>();
			if (nodalofficer == "Gram Panchyat Nodal Officer")
			{
				Data_gp = ABE.obj_abhy_IEC.Where(x => x.gpname == gp && x.year == year && x.activity == activity && x.sub_activity == subactivity).OrderBy(x => x.order_by_month).ToList();
			}
			else if (nodalofficer == "District Level Nodal Officer")
			{
				Data_gp = ABE.obj_abhy_IEC.Where(x => x.district_name == dist && x.year == year && x.activity == activity && x.sub_activity == subactivity).OrderBy(x => x.order_by_month).ToList();
			}
			else if (nodalofficer == "State Level Nodal Officer")
			{
				Data_gp = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == year && x.activity == activity && x.sub_activity == subactivity).OrderBy(x => x.order_by_month).ToList();
			}
			foreach (var item in Data_gp)
			{
				var dts = ABE.obj_abhy_IEC.Where(x => x.id == item.id).FirstOrDefault();
				total += Convert.ToDecimal(item.number);
				dts.cumulative_total = Convert.ToString(total);
				ABE.Entry(dts).State = EntityState.Modified;
				ABE.SaveChanges();

			}
		}

		[HttpPost]
		public ActionResult approve_data(string id)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.approve_status = "District";
						Data.remark_status = "";


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							return Json("Submit To DPMU");
						}
						else
						{
							return Json("Not Approved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Approved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult approve_data_Dist(string id)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.approve_status = "Approved";
						Data.remark_status = "";


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							return Json("Approved Successfully");
						}
						else
						{
							return Json("Not Approved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Approved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult approve_data_Dist_dist(string id)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.approve_status = "State";
						Data.remark_status = "";


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							return Json("Submit To SPMU");
						}
						else
						{
							return Json("Not Approved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Approved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}


		[HttpPost]
		public ActionResult approve_data_state(string id)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.approve_status = "Approved";


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							return Json("Successfully Approved");
						}
						else
						{
							return Json("Not Approved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Approved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult reject_data(string id, string reject)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.approve_status = "Gram";
						Data.remark_status = reject;


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							return Json("Reject By DPMU");
						}
						else
						{
							return Json("Not Approved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Approved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult reject_data_dist(string id, string reject)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.approve_status = "Dist";
						Data.remark_status = reject;


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							return Json("Reject By SPMU");
						}
						else
						{
							return Json("Not Approved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Approved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult reject_data_state(string id, string reject)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var ID = Convert.ToInt32(id);
					var Data = ABE.obj_abhy_IEC.Where(x => x.id == ID).SingleOrDefault();
					if (Data != null)
					{

						Data.id = ID;
						Data.approve_status = "District";
						Data.remark_status = reject;


						ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
						int A = ABE.SaveChanges();
						if (A > 0)
						{
							return Json("Reject BY SPMU");
						}
						else
						{
							return Json("Not Approved");
						}
					}

				}
				catch (Exception ex)
				{
					return Json("Not Approved");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		//Excel code
		public ActionResult Excel_state_level(string State1, string state_name, string year1, string month1)
		{
			var State = State1;
			var state = state_name;
			var year = year1;
			var month = month1;
			var officer_name = "State Level Nodal Officer";




			List<abhy_IEC> TDetails = ABE.obj_abhy_IEC.ToList();


			if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
			{
				var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name && x.year == year && x.month == month).OrderBy(x=>x.order_by_month).ToList();//total list
				TDetails = abc.OrderByDescending(x => x.activity).ToList();
			}
			else if (state != "0" && state != "" && state != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
			{
				var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
				TDetails = abc.OrderByDescending(x => x.activity).ToList();
			}
			else if (State != "0" && State != "" && State != null && year == "All")
			{
				var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
				TDetails = abc.OrderByDescending(x => x.activity).ToList();
			}
			else if (state != "0" && state != "" && state != null && year == "All")
			{
				var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
				TDetails = abc.OrderByDescending(x => x.activity).ToList();
			}
			else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
			{
				var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.year == year && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
				TDetails = abc.OrderByDescending(x => x.activity).ToList();
			}
			else if (state != "0" && state != "" && state != null && year != "0" && year != "" && year != null)
			{
				var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == year && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
				TDetails = abc.OrderByDescending(x => x.activity).ToList();
			}

			using (var workbook = new XLWorkbook())
			{

				var worksheet = workbook.Worksheets.Add("IEC State Level");
				var currentRow = 1;
				worksheet.Cell(currentRow, 1).Value = "State";
				worksheet.Cell(currentRow, 2).Value = "Year";
				worksheet.Cell(currentRow, 3).Value = "Month";
				worksheet.Cell(currentRow, 4).Value = "Activity";
				worksheet.Cell(currentRow, 5).Value = "Activity Other";
				worksheet.Cell(currentRow, 6).Value = "Sub Activity";
				worksheet.Cell(currentRow, 7).Value = "Sub Activity Other";
				worksheet.Cell(currentRow, 8).Value = "Number";
				worksheet.Cell(currentRow, 9).Value = "Cumulative Total";
				worksheet.Cell(currentRow, 10).Value = "IEC Activity Detail";
				worksheet.Cell(currentRow, 11).Value = "Remarks";
				worksheet.Cell(currentRow, 12).Value = "Approve Remarks";
				worksheet.Cell(currentRow, 13).Value = "Reject Remarks";

				if (TDetails.Count != 0)
				{


					foreach (var user in TDetails)
					{
						var approval = user.approve_status;
						if (approval == "Approved")
						{
							approval = "Approved";

						}
						else if (approval == null)
						{
							approval = "At SPMU";

						}

						currentRow++;
						worksheet.Cell(currentRow, 1).Value = user.state_name;
						worksheet.Cell(currentRow, 2).Value = user.year;
						worksheet.Cell(currentRow, 3).Value = user.month;
						worksheet.Cell(currentRow, 4).Value = user.activity;
						worksheet.Cell(currentRow, 5).Value = user.activity_other;
						worksheet.Cell(currentRow, 6).Value = user.sub_activity;
						worksheet.Cell(currentRow, 7).Value = user.sub_activity_other;
						worksheet.Cell(currentRow, 8).Value = user.number;
						worksheet.Cell(currentRow, 9).Value = user.cumulative_total;
						worksheet.Cell(currentRow, 10).Value = user.IEC_activity;
						worksheet.Cell(currentRow, 11).Value = user.remark;
						worksheet.Cell(currentRow, 12).Value = approval;
						worksheet.Cell(currentRow, 13).Value = user.reject_status;

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
					worksheet.Cell(currentRow, 6).Value = "No Data";
					worksheet.Cell(currentRow, 7).Value = "";
					worksheet.Cell(currentRow, 8).Value = "";
					worksheet.Cell(currentRow, 9).Value = "";
					worksheet.Cell(currentRow, 10).Value = "";
					worksheet.Cell(currentRow, 11).Value = "";
					worksheet.Cell(currentRow, 12).Value = "";






				}
				using (var stream = new MemoryStream())
				{
					workbook.SaveAs(stream);
					var content = stream.ToArray();

					return File(
						content,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						"IEC State Level.xlsx");
				}
			}
		}

		public ActionResult Excel_district_level(string State1, string district1, string state_name, string dist_name, string year1, string month1)
		{
			var State = State1;
			var Dist = district1;
			var state = state_name;
			var dist = dist_name;
			var year = year1;
			var month = month1;
			var officer_name = "District Level Nodal Officer";
			var officer = Session["Officer"].ToString();

			List<abhy_IEC> TDetails = ABE.obj_abhy_IEC.ToList();

			if (officer == "National Level Nodal Officer" || officer == "Admin")
			{
				if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.Nodal_officer == officer_name && x.year == year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && year != "0" && year != "" && year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.Nodal_officer == officer_name && x.year == year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && year != "0" && year != "" && year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
			}
			else if (officer == "State Level Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.Nodal_officer == officer_name && x.year == year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && year != "0" && year != "" && year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.Nodal_officer == officer_name && x.year == year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name && x.year == year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name && x.year == year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
			}
			else if (officer == "District Level Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer_name && x.year == year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer_name && x.year == year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}

			}


			using (var workbook = new XLWorkbook())
			{

				var worksheet = workbook.Worksheets.Add("IEC District Level");
				var currentRow = 1;
				worksheet.Cell(currentRow, 1).Value = "State";
				worksheet.Cell(currentRow, 2).Value = "District";
				worksheet.Cell(currentRow, 3).Value = "Year";
				worksheet.Cell(currentRow, 4).Value = "Month";
				worksheet.Cell(currentRow, 5).Value = "Activity";
				worksheet.Cell(currentRow, 6).Value = "Activity Other";
				worksheet.Cell(currentRow, 7).Value = "Sub Activity";
				worksheet.Cell(currentRow, 8).Value = "Sub Activity Other";
				worksheet.Cell(currentRow, 9).Value = "Number";
				worksheet.Cell(currentRow, 10).Value = "Cumulative Total";
				worksheet.Cell(currentRow, 11).Value = "IEC Activity Detail";
				worksheet.Cell(currentRow, 12).Value = "Remarks";
				worksheet.Cell(currentRow, 13).Value = "Approve Remarks";
				worksheet.Cell(currentRow, 14).Value = "Reject Remarks";

				if (TDetails.Count != 0)
				{


					foreach (var user in TDetails)
					{
						var approval = user.approve_status;
						if (approval == "State")
						{
							approval = "Submited To SPMU";

						}
						else if (approval == "Approved")
						{
							approval = "Approved";

						}
						else if (approval == null)
						{
							approval = "At DPMU";

						}
						else if (approval == "Dist")
						{
							approval = "Rejected By SPMU";

						}
						currentRow++;
						worksheet.Cell(currentRow, 1).Value = user.state_name;
						worksheet.Cell(currentRow, 2).Value = user.district_name;
						worksheet.Cell(currentRow, 3).Value = user.year;
						worksheet.Cell(currentRow, 4).Value = user.month;
						worksheet.Cell(currentRow, 5).Value = user.activity;
						worksheet.Cell(currentRow, 6).Value = user.activity_other;
						worksheet.Cell(currentRow, 7).Value = user.sub_activity;
						worksheet.Cell(currentRow, 8).Value = user.sub_activity_other;
						worksheet.Cell(currentRow, 9).Value = user.number;
						worksheet.Cell(currentRow, 10).Value = user.cumulative_total;
						worksheet.Cell(currentRow, 11).Value = user.IEC_activity;
						worksheet.Cell(currentRow, 12).Value = user.remark;
						worksheet.Cell(currentRow, 13).Value = approval;
						worksheet.Cell(currentRow, 14).Value = user.reject_status;


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
					worksheet.Cell(currentRow, 6).Value = "No Data";
					worksheet.Cell(currentRow, 7).Value = "";
					worksheet.Cell(currentRow, 8).Value = "";
					worksheet.Cell(currentRow, 9).Value = "";
					worksheet.Cell(currentRow, 10).Value = "";
					worksheet.Cell(currentRow, 11).Value = "";
					worksheet.Cell(currentRow, 12).Value = "";
					worksheet.Cell(currentRow, 13).Value = "";






				}
				using (var stream = new MemoryStream())
				{
					workbook.SaveAs(stream);
					var content = stream.ToArray();

					return File(
						content,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						"IEC District Level.xlsx");
				}
			}
		}

		public ActionResult Excel_gram_level(string state1, string district1, string block01, string gp1, string year1, string month1, string state_name, string dist_name, string block_name, string gram_name)
		{
			var State = state1;
			var Dist = district1;
			var Block = block01;
			var Gram = gp1;
			var state = state_name;
			var dist = dist_name;
			var block = block_name;
			var gram = gram_name;
			var Year = year1;
			var month = month1;
			var officer_name = "Gram Panchyat Nodal Officer";
			var officer = Session["Officer"].ToString();

			List<abhy_IEC> TDetails = ABE.obj_abhy_IEC.ToList();

			if (officer == "National Level Nodal Officer" || officer == "Admin")
			{
				if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (state != "0" && state != "" && state != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
			}
			else if (officer == "State Level Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}

			}
			else if (officer == "District Level Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}

			}
			else if (officer == "Gram Panchyat Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == officer_name && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == officer_name && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year == "All")
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == officer_name).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}


			}


			using (var workbook = new XLWorkbook())
			{

				var worksheet = workbook.Worksheets.Add("IEC Grampanchayat Level");
				var currentRow = 1;
				worksheet.Cell(currentRow, 1).Value = "State";
				worksheet.Cell(currentRow, 2).Value = "District";
				worksheet.Cell(currentRow, 3).Value = "Block";
				worksheet.Cell(currentRow, 4).Value = "Grampanchayat";
				worksheet.Cell(currentRow, 5).Value = "Year";
				worksheet.Cell(currentRow, 6).Value = "Month";
				worksheet.Cell(currentRow, 7).Value = "Activity";
				worksheet.Cell(currentRow, 8).Value = "Activity Other";
				worksheet.Cell(currentRow, 9).Value = "Sub Activity";
				worksheet.Cell(currentRow, 10).Value = "Sub Activity Other";
				worksheet.Cell(currentRow, 11).Value = "Number";
				worksheet.Cell(currentRow, 12).Value = "Cumulative Total";
				worksheet.Cell(currentRow, 13).Value = "IEC Activity Detail";
				worksheet.Cell(currentRow, 14).Value = "Remarks";
				worksheet.Cell(currentRow, 15).Value = "Approve";
				worksheet.Cell(currentRow, 16).Value = "Reject Remarks";

				if (TDetails.Count != 0)
				{


					foreach (var user in TDetails)
					{
						var approval = user.approve_status;
						if (approval == "District")
						{
							approval = "Submited To DPMU";

						}
						else if (approval == "Approved")
						{
							approval = "Approved";

						}
						else if (approval == null)
						{
							approval = "At GP Level";

						}
						else if (approval == "Gram")
						{
							approval = "Rejected By SPMU";

						}
						currentRow++;
						worksheet.Cell(currentRow, 1).Value = user.state_name;
						worksheet.Cell(currentRow, 2).Value = user.district_name;
						worksheet.Cell(currentRow, 3).Value = user.block_name;
						worksheet.Cell(currentRow, 4).Value = user.gpname;
						worksheet.Cell(currentRow, 5).Value = user.year;
						worksheet.Cell(currentRow, 6).Value = user.month;
						worksheet.Cell(currentRow, 7).Value = user.activity;
						worksheet.Cell(currentRow, 8).Value = user.activity_other;
						worksheet.Cell(currentRow, 9).Value = user.sub_activity;
						worksheet.Cell(currentRow, 10).Value = user.sub_activity_other;
						worksheet.Cell(currentRow, 11).Value = user.number;
						worksheet.Cell(currentRow, 12).Value = user.cumulative_total;
						worksheet.Cell(currentRow, 13).Value = user.IEC_activity;
						worksheet.Cell(currentRow, 14).Value = user.remark;
						worksheet.Cell(currentRow, 15).Value = approval;
						worksheet.Cell(currentRow, 16).Value = user.reject_status;

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
					worksheet.Cell(currentRow, 6).Value = "No Data";
					worksheet.Cell(currentRow, 7).Value = "";
					worksheet.Cell(currentRow, 8).Value = "";
					worksheet.Cell(currentRow, 9).Value = "";
					worksheet.Cell(currentRow, 10).Value = "";
					worksheet.Cell(currentRow, 11).Value = "";
					worksheet.Cell(currentRow, 12).Value = "";
					worksheet.Cell(currentRow, 13).Value = "";
					worksheet.Cell(currentRow, 14).Value = "";
					worksheet.Cell(currentRow, 15).Value = "";






				}
				using (var stream = new MemoryStream())
				{
					workbook.SaveAs(stream);
					var content = stream.ToArray();

					return File(
						content,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						"IEC Grampanchayat Level.xlsx");
				}
			}
		}

		public ActionResult Excel_all_data(string state1, string district1, string block01, string gp1, string year1, string month1, string state_name, string dist_name, string block_name, string gram_name)
		{
			var State = state1;
			var Dist = district1;
			var Block = block01;
			var Gram = gp1;
			var state = state_name;
			var dist = dist_name;
			var block = block_name;
			var gram = gram_name;
			var Year = year1;
			var month = month1;
			var officer = Session["Officer"].ToString();

			List<abhy_IEC> TDetails = new List<abhy_IEC>();

			if (officer == "National Level Nodal Officer" || officer == "Admin")
			{
				if (state =="All") {
					if (state == "All" && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state == "All" && Year != "0" && Year != "" && Year != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state == "All" && month != "0" && month != "" && month != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else
					{
						var abc = ABE.obj_abhy_IEC.OrderBy(x => x.order_by_month).ToList();
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
				}
				else {

					if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block && x.gpname == gram).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist && x.block_name == block).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null && dist != "0" && dist != "" && dist != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == dist).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
					else if (state != "0" && state != "" && state != null)
					{
						var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == state).OrderBy(x => x.order_by_month).ToList();//total list
						TDetails = abc.OrderByDescending(x => x.activity).ToList();
					}
				}
			}
			else if (officer == "State Level Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.gpname == gram && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.gpname == gram && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block && x.gpname == gram).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && dist != "0" && dist != "" && dist != null && block != "0" && block != "" && block != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == dist && x.block_name == block).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}

			}
			else if (officer == "District Level Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == block && x.gpname == gram && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}

			}
			else if (officer == "Gram Panchyat Nodal Officer")
			{
				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month == month).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
				{
					var abc = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderBy(x => x.order_by_month).ToList();//total list
					TDetails = abc.OrderByDescending(x => x.activity).ToList();
				}


			}


            using (var workbook = new XLWorkbook())
			{

				var worksheet = workbook.Worksheets.Add("IEC All Level");
				var currentRow = 1;
				worksheet.Cell(currentRow, 1).Value = "State";
				worksheet.Cell(currentRow, 2).Value = "District";
				worksheet.Cell(currentRow, 3).Value = "Block";
				worksheet.Cell(currentRow, 4).Value = "Grampanchayat";
				worksheet.Cell(currentRow, 5).Value = "Year";
				worksheet.Cell(currentRow, 6).Value = "Month";
				worksheet.Cell(currentRow, 7).Value = "Activity";
				worksheet.Cell(currentRow, 8).Value = "Activity Other";
				worksheet.Cell(currentRow, 9).Value = "Sub Activity";
				worksheet.Cell(currentRow, 10).Value = "Sub Activity Other";
				worksheet.Cell(currentRow, 11).Value = "Number";
				worksheet.Cell(currentRow, 12).Value = "Cumulative Total";
				worksheet.Cell(currentRow, 13).Value = "IEC Activity Detail";
				worksheet.Cell(currentRow, 14).Value = "Remarks";
				worksheet.Cell(currentRow, 15).Value = "Approve Remarks";
				worksheet.Cell(currentRow, 16).Value = "Reject Remarks";
				worksheet.Cell(currentRow, 17).Value = "Nodal Officer(Data Entered By)";

				if (TDetails.Count != 0)
				{


					foreach (var user in TDetails)
					{
						
						var approval = user.approve_status;
						var nameofficer = user.Nodal_officer;
						if (nameofficer == "Gram Panchyat Nodal Officer")
						{
							if (approval == "District")
							{
								approval = "Submited To DPMU";

							}
							else if (approval == "Approved")
							{
								approval = "Approved";

							}
							else if (approval == null)
							{
								approval = "At GP Level";

							}
							else if (approval == "Gram")
							{
								approval = "Rejected By SPMU";

							}
						}
						else if (nameofficer == "District Level Nodal Officer")
						{

							if (approval == "State")
							{
								approval = "Submited To SPMU";

							}
							else if (approval == "Approved")
							{
								approval = "Approved";

							}
							else if (approval == null)
							{
								approval = "At DPMU";

							}
							else if (approval == "Dist")
							{
								approval = "Rejected By SPMU";

							}
						}
						else if (nameofficer == "State Level Nodal Officer")
						{
							if (approval == "Approved")
							{
								approval = "Approved";

							}
							else if (approval == null)
							{
								approval = "At SPMU";

							}
						}
						currentRow++;
						worksheet.Cell(currentRow, 1).Value = user.state_name;
						worksheet.Cell(currentRow, 2).Value = user.district_name;
						worksheet.Cell(currentRow, 3).Value = user.block_name;
						worksheet.Cell(currentRow, 4).Value = user.gpname;
						worksheet.Cell(currentRow, 5).Value = user.year;
						worksheet.Cell(currentRow, 6).Value = user.month;
						worksheet.Cell(currentRow, 7).Value = user.activity;
						worksheet.Cell(currentRow, 8).Value = user.activity_other;
						worksheet.Cell(currentRow, 9).Value = user.sub_activity;
						worksheet.Cell(currentRow, 10).Value = user.sub_activity_other;
						worksheet.Cell(currentRow, 11).Value = user.number;
						worksheet.Cell(currentRow, 12).Value = user.cumulative_total;
						worksheet.Cell(currentRow, 13).Value = user.IEC_activity;
						worksheet.Cell(currentRow, 14).Value = user.remark;
						worksheet.Cell(currentRow, 15).Value = approval;
						worksheet.Cell(currentRow, 16).Value = user.reject_status;
						worksheet.Cell(currentRow, 17).Value = user.Nodal_officer;

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
					worksheet.Cell(currentRow, 6).Value = "No Data";
					worksheet.Cell(currentRow, 7).Value = "";
					worksheet.Cell(currentRow, 8).Value = "";
					worksheet.Cell(currentRow, 9).Value = "";
					worksheet.Cell(currentRow, 10).Value = "";
					worksheet.Cell(currentRow, 11).Value = "";
					worksheet.Cell(currentRow, 12).Value = "";
					worksheet.Cell(currentRow, 13).Value = "";
					worksheet.Cell(currentRow, 14).Value = "";
					worksheet.Cell(currentRow, 15).Value = "";
					worksheet.Cell(currentRow, 16).Value = "";






				}
				using (var stream = new MemoryStream())
				{
					workbook.SaveAs(stream);
					var content = stream.ToArray();

					return File(
						content,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						"IEC All Data.xlsx");
				}
			}
		}

		[HttpPost]
		public ActionResult value_find(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);
					var data = ABE.obj_abhy_IEC.ToList();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = result.state_name;
					var Dist = result.district_name;
					var Block = result.block_name;
					var Gram = result.gpname;
					var Year = result.year;
					var month = result.month;
					var activity = result.activity;
					var sub_activity = result.sub_activity;
					var officer = Session["Officer"].ToString();
					var gram_name = "Gram Panchyat Nodal Officer";
					var dist_dist = "District Level Nodal Officer";
					var state_state = "State Level Nodal Officer";


					if (officer == "Gram Panchyat Nodal Officer")
					{
						if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
						{
							if (activity != "0" && activity != "" && activity != null && sub_activity != "0" && sub_activity != "" && sub_activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year  && x.activity == activity && x.sub_activity == sub_activity).ToList();

								int c_count = ddetails.Sum(x => Int32.Parse(x.number));
								return Json(c_count, JsonRequestBehavior.AllowGet);
							}
							else
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year  && x.activity == activity).ToList();
								int c_count = ddetails.Sum(x => Int32.Parse(x.number));
								return Json(c_count, JsonRequestBehavior.AllowGet);
							}

						}
					}

					else if (officer == "District Level Nodal Officer")
					{
						if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
						{
							if (activity != "0" && activity != "" && activity != null && sub_activity != "0" && sub_activity != "" && sub_activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == dist_dist && x.year == Year && x.activity == activity && x.sub_activity == sub_activity).ToList();//total list

								int c_count = ddetails.Sum(x => Int32.Parse(x.number));
								return Json(c_count, JsonRequestBehavior.AllowGet);
							}
							else
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == dist_dist && x.year == Year  && x.activity == activity).ToList();//total list
								int c_count = ddetails.Sum(x => Int32.Parse(x.number));
								return Json(c_count, JsonRequestBehavior.AllowGet);
							}



						}
					}
					else if (officer == "State Level Nodal Officer")
					{
						if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
						{
							if (activity != "0" && activity != "" && activity != null && sub_activity != "0" && sub_activity != "" && sub_activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == state_state && x.year == Year  && x.activity == activity && x.sub_activity == sub_activity).ToList();//total list

								int c_count = ddetails.Sum(x => Int32.Parse(x.number));
								return Json(c_count, JsonRequestBehavior.AllowGet);
							}
							else
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == state_state && x.year == Year   && x.activity == activity).ToList();//total list
								int c_count = ddetails.Sum(x => Int32.Parse(x.number));
								return Json(c_count, JsonRequestBehavior.AllowGet);
							}


						}
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
		public ActionResult value_find_data(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<abhy_IEC>(Data);
					var data = ABE.obj_abhy_IEC.ToList();
					List<abhy_IEC> ddetails = new List<abhy_IEC>();
					var State = result.state_name;
					var Dist = result.district_name;
					var Block = result.block_name;
					var Gram = result.gpname;
					var Year = result.year;
					var month = result.month;
					var activity = result.activity;
					var sub_activity = result.sub_activity;
					var officer = Session["Officer"].ToString();
					var gram_name = "Gram Panchyat Nodal Officer";
					var dist_dist = "District Level Nodal Officer";
					var state_state = "State Level Nodal Officer";


					if (officer == "Gram Panchyat Nodal Officer")
					{
						if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
						{
							if (activity != "0" && activity != "" && activity != null && sub_activity != "0" && sub_activity != "" && sub_activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month && x.activity == activity && x.sub_activity == sub_activity).ToList();

							}
							else if (activity != "0" && activity != "" && activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month && x.activity == activity).ToList();

							}
							if (ddetails.Count != 0)
							{
								return Json("Already Data Exist", JsonRequestBehavior.AllowGet);
							}


						}
					}

					else if (officer == "District Level Nodal Officer")
					{
						if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
						{
							if (activity != "0" && activity != "" && activity != null && sub_activity != "0" && sub_activity != "" && sub_activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.Nodal_officer == dist_dist && x.year == Year && x.month == month && x.activity == activity && x.sub_activity == sub_activity).ToList();//total list

							}
							else if (activity != "0" && activity != "" && activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month && x.activity == activity).ToList();

							}
							if (ddetails.Count != 0)
							{
								return Json("Already Data Exist", JsonRequestBehavior.AllowGet);
							}
						}
					}
					else if (officer == "State Level Nodal Officer")
					{
						if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month != "0" && month != "" && month != null)
						{
							if (activity != "0" && activity != "" && activity != null && sub_activity != "0" && sub_activity != "" && sub_activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.Nodal_officer == state_state && x.year == Year && x.month == month && x.activity == activity && x.sub_activity == sub_activity).ToList();//total list

							}
							else if (activity != "0" && activity != "" && activity != null)
							{
								ddetails = ABE.obj_abhy_IEC.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.Nodal_officer == gram_name && x.year == Year && x.month == month && x.activity == activity).ToList();

							}
							if (ddetails.Count != 0)
							{
								return Json("Already Data Exist", JsonRequestBehavior.AllowGet);
							}

						}
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




	}
}