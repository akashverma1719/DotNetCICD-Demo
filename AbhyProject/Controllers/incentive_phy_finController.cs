using AbhyProject.Classes;
using AbhyProject.Models;
using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using AbhyProject.Utility;

namespace AbhyProject.Controllers
{
	public class incentive_phy_finController : Controller
	{
		AbhyEntity ABE = new AbhyEntity();
		AtaljalEntity AJE = new AtaljalEntity();

		public ActionResult Index()
		{
			return View();
		}
		public ActionResult inc_rep()
		{
			return View();
		}
		public ActionResult all_report_incentivemodule()
		{
			return View();
		}
		public ActionResult Combine_Department_incentivemodule()
		{
			return View();
		}
		public ActionResult suppyside()
		{
			return View();
		}
		public ActionResult demandside()
		{
			return View();
		}
		public ActionResult other()
		{
			return View();
		}

		public ActionResult suppyside_report()
		{
			return View();
		}
		public ActionResult demandside_report()
		{
			return View();
		}
		public ActionResult other_report_new()
		{
			return View();
		}

		public ActionResult other_pdf()
		{
			return View();
		}
		public ActionResult demandside_pdf()
		{
			return View();
		}
		public ActionResult supplyside_pdf()
		{
			return View();
		}
		public ActionResult viewpage()
		{

			return View();
		}
		public ActionResult all_report()
		{
			return View();
		}
		public ActionResult state_report_demand()
		{
			return View();
		}
		public ActionResult district_report_demand()
		{
			return View();
		}
		public ActionResult all_report_supply()
		{
			return View();
		}
		public ActionResult state_report_supply()
		{
			return View();
		}
		public ActionResult district_report_supply()
		{
			return View();
		}

		public ActionResult all_report_other()
		{
			return View();
		}
		public ActionResult state_report_other()
		{
			return View();
		}
		public ActionResult district_report_other()
		{
			return View();
		}
		[HttpPost]
		public ActionResult state_tracker(string statename, string year, string month)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var otherdepartments = (string)"";

					if (statename != "All")
					{
						var ss = statename;

						string[] states = { ss };
						List<incentive_report> all_data = new List<incentive_report>();

						for (int i = 0; i < states.Length; i++)
						{


							string state = states[i];
							List<incentive_demand> total_target = new List<incentive_demand>();
							List<master_list_gp> masterlist = new List<master_list_gp>();


							if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
							{
								total_target = ABE.obj_incentive_demand.Where(x => x.state == state && x.year == year && x.month == month).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();

							}
							else if (year != "0" && year != "" && year != null)
							{
								total_target = ABE.obj_incentive_demand.Where(x => x.state == state && x.year == year).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();
							}
							else
							{
								total_target = ABE.obj_incentive_demand.Where(x => x.state == state).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();
							}
							var gp_npmu = masterlist.GroupBy(c => c.gram_panchayat_name).ToList().Count();

							var updatedMetaData = new List<incentive_demand>();
							var aa = total_target.GroupBy(c => c.department).ToList().Count();
							if (aa != 0)
							{
								var ff = gp_npmu / aa;
								var uniqueGpNames = total_target.GroupBy(c => c.department).Select(g => g.Key).ToList();
								foreach (var gpName in uniqueGpNames)
								{
									if (gpName != null && gpName != "")
									{
										incentive_report data = new incentive_report();
										var matchedData = total_target.Where(x => x.department == gpName).ToList();

										if (matchedData.Any(g => g.department == "Other"))
										{
											// Get the first 'otherdepartment' value where 'department' is "Other"
											otherdepartments = matchedData
											   .Where(g => g.department == "Other")
											   .Select(g => g.otherdepartment)
											   .FirstOrDefault();
										}
										else
										{
											otherdepartments = "";

										}

										if (matchedData != null)
										{

											var gp_incentive = matchedData.GroupBy(c => c.gp).ToList().Count();


											var inc_cost = matchedData.Sum(x =>
											{
												if (double.TryParse(x.cost, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var inc_area = matchedData.Sum(x =>
											{
												if (double.TryParse(x.area_under, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var inc_ben = matchedData.Sum(x =>
											{
												if (double.TryParse(x.total_beneficiary, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var m_sc = matchedData.Sum(x =>
											{
												if (double.TryParse(x.msc, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var m_st = matchedData.Sum(x =>
											{
												if (double.TryParse(x.mst, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var m_obc = matchedData.Sum(x =>
											{
												if (double.TryParse(x.mobc, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var m_other = matchedData.Sum(x =>
											{
												if (double.TryParse(x.mother, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var f_sc = matchedData.Sum(x =>
											{
												if (double.TryParse(x.fsc, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var f_st = matchedData.Sum(x =>
											{
												if (double.TryParse(x.fst, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var f_obc = matchedData.Sum(x =>
											{
												if (double.TryParse(x.fobc, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});
											var f_other = matchedData.Sum(x =>
											{
												if (double.TryParse(x.fother, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});

											var demand_activity = matchedData.GroupBy(x => x.activity).ToList();
											var demand_activity_value = "";
											foreach (var item in demand_activity)
											{
												var activity = item.Key;

												demand_activity_value += activity + " , ";
											}

											data.department = gpName;
											data.otherdepartment = otherdepartments;

											//data.atal_gp = Convert.ToInt32(ff);
											data.atal_gp = Convert.ToInt32(gp_npmu);
											data.inc_gp = Convert.ToInt32(gp_incentive);
											data.cost = Convert.ToDouble(inc_cost);
											data.area = Convert.ToDouble(inc_area);
											data.beneficery = Convert.ToInt32(inc_ben);
											data.m_sc = Convert.ToInt32(m_sc);
											data.m_st = Convert.ToInt32(m_st);
											data.m_obc = Convert.ToInt32(m_obc);
											data.m_other = Convert.ToInt32(m_other);
											data.f_sc = Convert.ToInt32(f_sc);
											data.f_st = Convert.ToInt32(f_st);
											data.f_obc = Convert.ToInt32(f_obc);
											data.f_other = Convert.ToInt32(f_other);
											data.activity = demand_activity_value;

											all_data.Add(data);

										}
									}
								}

								var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
								jsonResult.MaxJsonLength = int.MaxValue;
								return jsonResult;
							}

							else
							{
								return Json("No Data", JsonRequestBehavior.AllowGet);
							}

						}
						return Json("No Data", JsonRequestBehavior.AllowGet);


					}
					else
					{

						string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
						List<incentive_report> all_data = new List<incentive_report>();

						//for (int i = 0; i < states.Length; i++)
						//{


						//string state = states[i];
						List<incentive_demand> total_target = new List<incentive_demand>();
						List<master_list_gp> masterlist = new List<master_list_gp>();


						if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
						{
							total_target = ABE.obj_incentive_demand.Where(x => x.year == year && x.month == month).ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();

						}
						else if (year != "0" && year != "" && year != null)
						{
							total_target = ABE.obj_incentive_demand.Where(x => x.year == year).ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();
						}
						else
						{
							total_target = ABE.obj_incentive_demand.ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();
						}
						var gp_npmu = masterlist.GroupBy(c => c.gram_panchayat_name).ToList().Count();

						var updatedMetaData = new List<incentive_demand>();
						var aa = total_target.GroupBy(c => c.department).ToList().Count();
						if (aa != 0)
						{
							var ff = gp_npmu / aa;
							var uniqueGpNames = total_target.GroupBy(c => c.department).Select(g => g.Key).ToList();
							foreach (var gpName in uniqueGpNames)
							{
								if (gpName != null && gpName != "")
								{
									incentive_report data = new incentive_report();
									var matchedData = total_target.Where(x => x.department == gpName).ToList();
									if (matchedData.Any(g => g.department == "Other"))
									{
										// Get the first 'otherdepartment' value where 'department' is "Other"
										otherdepartments = matchedData
										   .Where(g => g.department == "Other")
										   .Select(g => g.otherdepartment)
										   .FirstOrDefault();
									}
									else
									{
										otherdepartments = "";

									}


									if (matchedData != null)
									{
										var gp_incentive = matchedData.GroupBy(c => c.gp).ToList().Count();

										var distinctStates = matchedData.Select(g => g.state).Distinct().ToList();
										var totalgpdata = masterlist.Where(g => distinctStates.Contains(g.state_name))
											.GroupBy(c => c.gram_panchayat_name).Count();


										var inc_cost = matchedData.Sum(x =>
										{
											if (double.TryParse(x.cost, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var inc_area = matchedData.Sum(x =>
										{
											if (double.TryParse(x.area_under, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var inc_ben = matchedData.Sum(x =>
										{
											if (double.TryParse(x.total_beneficiary, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var m_sc = matchedData.Sum(x =>
										{
											if (double.TryParse(x.msc, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var m_st = matchedData.Sum(x =>
										{
											if (double.TryParse(x.mst, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var m_obc = matchedData.Sum(x =>
										{
											if (double.TryParse(x.mobc, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var m_other = matchedData.Sum(x =>
										{
											if (double.TryParse(x.mother, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var f_sc = matchedData.Sum(x =>
										{
											if (double.TryParse(x.fsc, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var f_st = matchedData.Sum(x =>
										{
											if (double.TryParse(x.fst, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var f_obc = matchedData.Sum(x =>
										{
											if (double.TryParse(x.fobc, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});
										var f_other = matchedData.Sum(x =>
										{
											if (double.TryParse(x.fother, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});

										var demand_activity = matchedData.GroupBy(x => x.activity).ToList();
										var demand_activity_value = "";
										foreach (var item in demand_activity)
										{
											var activity = item.Key;

											demand_activity_value += activity + " , ";
										}

										data.department = gpName;
										data.otherdepartment = otherdepartments;
										//data.atal_gp = Convert.ToInt32(ff);
										data.atal_gp = Convert.ToInt32(totalgpdata);
										data.inc_gp = Convert.ToInt32(gp_incentive);
										data.cost = Convert.ToDouble(inc_cost);
										data.area = Convert.ToDouble(inc_area);
										data.beneficery = Convert.ToInt32(inc_ben);
										data.m_sc = Convert.ToInt32(m_sc);
										data.m_st = Convert.ToInt32(m_st);
										data.m_obc = Convert.ToInt32(m_obc);
										data.m_other = Convert.ToInt32(m_other);
										data.f_sc = Convert.ToInt32(f_sc);
										data.f_st = Convert.ToInt32(f_st);
										data.f_obc = Convert.ToInt32(f_obc);
										data.f_other = Convert.ToInt32(f_other);
										data.activity = demand_activity_value;

										all_data.Add(data);

									}
								}
							}



							var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
							jsonResult.MaxJsonLength = int.MaxValue;
							return jsonResult;
						}
						else
						{
							return Json("No Data", JsonRequestBehavior.AllowGet);
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

		[HttpPost]
		public ActionResult supply_tracker(string statename, string year, string month)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var otherdepartments = (string)"";

					if (statename != "All")
					{
						var ss = statename;


						string[] states = { ss };
						List<incentive_report> all_data = new List<incentive_report>();

						for (int i = 0; i < states.Length; i++)
						{


							string state = states[i];
							List<incentive_supply> total_target = new List<incentive_supply>();
							List<master_list_gp> masterlist = new List<master_list_gp>();


							if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
							{
								total_target = ABE.obj_incentive_supply.Where(x => x.state == state && x.year == year && x.month == month).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();

							}
							else if (year != "0" && year != "" && year != null)
							{
								total_target = ABE.obj_incentive_supply.Where(x => x.state == state && x.year == year).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();
							}
							else
							{
								total_target = ABE.obj_incentive_supply.Where(x => x.state == state).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();
							}
							var gp_npmu = masterlist.GroupBy(c => c.gram_panchayat_name).ToList().Count();

							var updatedMetaData = new List<incentive_supply>();
							var aa = total_target.GroupBy(c => c.nameofdepartment).ToList().Count();
							if (aa != 0)
							{
								var ff = gp_npmu / aa;
								var uniqueGpNames = total_target.GroupBy(c => c.nameofdepartment).Select(g => g.Key).ToList();
								foreach (var gpName in uniqueGpNames)
								{
									if (gpName != null && gpName != "" && gpName != "null")
									{
										incentive_report data = new incentive_report();
										var matchedData = total_target.Where(x => x.nameofdepartment == gpName).ToList();

										if (matchedData.Any(g => g.nameofdepartment == "Other"))
										{
											// Get the first 'otherdepartment' value where 'department' is "Other"
											otherdepartments = matchedData
											   .Where(g => g.nameofdepartment == "Other")
											   .Select(g => g.other_department)
											   .FirstOrDefault();
										}
										else
										{
											otherdepartments = "";

										}

										if (matchedData != null)
										{
											var gp_incentive = matchedData.GroupBy(c => c.gram).ToList().Count();

											var inc_cost = matchedData.Sum(x =>
											{
												if (double.TryParse(x.cost, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});

											int supply_structure = matchedData.Count;
											int typenew = matchedData.Where(x => x.typeofwork == "New").Count();
											int Renovation = matchedData.Where(x => x.typeofwork == "Renovation").Count();

											var demand_activity = matchedData.GroupBy(x => x.nameofstructure).ToList();
											var demand_activity_value = "";
											foreach (var item in demand_activity)
											{
												var activity = item.Key;

												demand_activity_value += activity + " , ";
											}

											data.department = gpName;
											data.otherdepartment = otherdepartments;
											//data.atal_gp = Convert.ToInt32(ff);
											data.atal_gp = Convert.ToInt32(gp_npmu);
											data.inc_gp = Convert.ToInt32(gp_incentive);
											data.cost = Convert.ToDouble(inc_cost);
											data.area = Convert.ToDouble(supply_structure);
											data.beneficery = Convert.ToInt32(typenew);
											data.m_sc = Convert.ToInt32(Renovation);
											data.activity = demand_activity_value;

											all_data.Add(data);

										}
									}
								}

								var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
								jsonResult.MaxJsonLength = int.MaxValue;
								return jsonResult;
							}

							else
							{
								return Json("No Data", JsonRequestBehavior.AllowGet);
							}

						}
						return Json("No Data", JsonRequestBehavior.AllowGet);


					}
					else
					{

						string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
						List<incentive_report> all_data = new List<incentive_report>();

						//for (int i = 0; i < states.Length; i++)
						//{


						//string state = states[i];
						List<incentive_supply> total_target = new List<incentive_supply>();
						List<master_list_gp> masterlist = new List<master_list_gp>();


						if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
						{
							total_target = ABE.obj_incentive_supply.Where(x => x.year == year && x.month == month).ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();

						}
						else if (year != "0" && year != "" && year != null)
						{
							total_target = ABE.obj_incentive_supply.Where(x => x.year == year).ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();
						}
						else
						{
							total_target = ABE.obj_incentive_supply.ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();
						}
						var gp_npmu = masterlist.GroupBy(c => c.gram_panchayat_name).ToList().Count();

						var updatedMetaData = new List<incentive_supply>();
						var aa = total_target.GroupBy(c => c.nameofdepartment).ToList().Count();
						if (aa != 0)
						{
							var ff = gp_npmu / aa;
							var uniqueGpNames = total_target.GroupBy(c => c.nameofdepartment).Select(g => g.Key).ToList();
							foreach (var gpName in uniqueGpNames)
							{
								if (gpName != null && gpName != "" && gpName != "null")
								{
									incentive_report data = new incentive_report();
									var matchedData = total_target.Where(x => x.nameofdepartment == gpName).ToList();
									if (matchedData.Any(g => g.nameofdepartment == "Other"))
									{
										// Get the first 'otherdepartment' value where 'department' is "Other"
										otherdepartments = matchedData
										   .Where(g => g.nameofdepartment == "Other")
										   .Select(g => g.other_department)
										   .FirstOrDefault();
									}
									else
									{
										otherdepartments = "";

									}

									if (matchedData != null)
									{
										var gp_incentive = matchedData.GroupBy(c => c.gram).ToList().Count();
										var distinctStates = matchedData.Select(g => g.state).Distinct().ToList();
										var totalgpdata = masterlist.Where(g => distinctStates.Contains(g.state_name))
														.GroupBy(c => c.gram_panchayat_name).Count();

										var inc_cost = matchedData.Sum(x =>
										{
											if (double.TryParse(x.cost, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});

										int supply_structure = matchedData.Count;
										int typenew = matchedData.Where(x => x.typeofwork == "New").Count();
										int Renovation = matchedData.Where(x => x.typeofwork == "Renovation").Count();

										var demand_activity = matchedData.GroupBy(x => x.nameofstructure).ToList();
										var demand_activity_value = "";
										foreach (var item in demand_activity)
										{
											var activity = item.Key;

											demand_activity_value += activity + " , ";
										}

										data.department = gpName;
										data.otherdepartment = otherdepartments;
										//data.atal_gp = Convert.ToInt32(ff);
										data.atal_gp = Convert.ToInt32(totalgpdata);
										data.inc_gp = Convert.ToInt32(gp_incentive);
										data.cost = Convert.ToDouble(inc_cost);
										data.area = Convert.ToDouble(supply_structure);
										data.beneficery = Convert.ToInt32(typenew);
										data.m_sc = Convert.ToInt32(Renovation);
										data.activity = demand_activity_value;

										all_data.Add(data);

									}
								}
							}

							var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
							jsonResult.MaxJsonLength = int.MaxValue;
							return jsonResult;
						}

						else
						{
							return Json("No Data", JsonRequestBehavior.AllowGet);
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


		[HttpPost]
		public ActionResult other_tracker(string statename, string year, string month)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var otherdepartments = (string)"";

					if (statename != "All")
					{
						var ss = statename;

						string[] states = { ss };
						List<incentive_report> all_data = new List<incentive_report>();

						for (int i = 0; i < states.Length; i++)
						{


							string state = states[i];
							List<incentive_other> total_target = new List<incentive_other>();
							List<master_list_gp> masterlist = new List<master_list_gp>();


							if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
							{
								total_target = ABE.obj_incentive_other.Where(x => x.state == state && x.year == year && x.month == month).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();

							}
							else if (year != "0" && year != "" && year != null)
							{
								total_target = ABE.obj_incentive_other.Where(x => x.state == state && x.year == year).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();
							}
							else
							{
								total_target = ABE.obj_incentive_other.Where(x => x.state == state).ToList();
								masterlist = AJE.obj_master_list_gp.Where(x => x.state_name == state && x.mis_list == "MIS").ToList();
							}
							var gp_npmu = masterlist.GroupBy(c => c.gram_panchayat_name).ToList().Count();

							var updatedMetaData = new List<incentive_other>();
							var aa = total_target.GroupBy(c => c.nameofdepartment).ToList().Count();
							if (aa != 0)
							{
								var ff = gp_npmu / aa;
								var uniqueGpNames = total_target.GroupBy(c => c.nameofdepartment).Select(g => g.Key).ToList();
								foreach (var gpName in uniqueGpNames)
								{
									if (gpName != null && gpName != "" && gpName != "null")
									{
										incentive_report data = new incentive_report();
										var matchedData = total_target.Where(x => x.nameofdepartment == gpName).ToList();
										if (matchedData.Any(g => g.nameofdepartment == "Other"))
										{
											// Get the first 'otherdepartment' value where 'department' is "Other"
											otherdepartments = matchedData
											   .Where(g => g.nameofdepartment == "Other")
											   .Select(g => g.other_department)
											   .FirstOrDefault();
										}
										else
										{
											otherdepartments = "";

										}

										if (matchedData != null)
										{
											var gp_incentive = matchedData.GroupBy(c => c.gram).ToList().Count();

											var inc_cost = matchedData.Sum(x =>
											{
												if (double.TryParse(x.cost, out double areaValue))
												{
													return areaValue;
												}
												else
												{
													return 0.0; // Default value if conversion fails
												}
											});

											int supply_structure = matchedData.Count;
											int typenew = matchedData.Where(x => x.typeofwork == "New").Count();
											int Renovation = matchedData.Where(x => x.typeofwork == "Renovation").Count();

											var demand_activity = matchedData.GroupBy(x => x.nameofstructure).ToList();
											var demand_activity_value = "";
											foreach (var item in demand_activity)
											{
												var activity = item.Key;

												demand_activity_value += activity + " , ";
											}

											data.department = gpName;
											data.otherdepartment = otherdepartments;
											//data.atal_gp = Convert.ToInt32(ff);
											data.atal_gp = Convert.ToInt32(gp_npmu);
											data.inc_gp = Convert.ToInt32(gp_incentive);
											data.cost = Convert.ToDouble(inc_cost);
											data.area = Convert.ToDouble(supply_structure);
											data.beneficery = Convert.ToInt32(typenew);
											data.m_sc = Convert.ToInt32(Renovation);
											data.activity = demand_activity_value;

											all_data.Add(data);

										}
									}
								}

								var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
								jsonResult.MaxJsonLength = int.MaxValue;
								return jsonResult;
							}

							else
							{
								return Json("No Data", JsonRequestBehavior.AllowGet);
							}

						}
						return Json("No Data", JsonRequestBehavior.AllowGet);


					}
					else
					{

						string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
						List<incentive_report> all_data = new List<incentive_report>();

						//for (int i = 0; i < states.Length; i++)
						//{


						//string state = states[i];
						List<incentive_other> total_target = new List<incentive_other>();
						List<master_list_gp> masterlist = new List<master_list_gp>();


						if (year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
						{
							total_target = ABE.obj_incentive_other.Where(x => x.year == year && x.month == month).ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();

						}
						else if (year != "0" && year != "" && year != null)
						{
							total_target = ABE.obj_incentive_other.Where(x => x.year == year).ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();
						}
						else
						{
							total_target = ABE.obj_incentive_other.ToList();
							masterlist = AJE.obj_master_list_gp.Where(x => x.mis_list == "MIS").ToList();
						}
						var gp_npmu = masterlist.GroupBy(c => c.gram_panchayat_name).ToList().Count();

						var updatedMetaData = new List<incentive_other>();
						var aa = total_target.GroupBy(c => c.nameofdepartment).ToList().Count();
						if (aa != 0)
						{
							var ff = gp_npmu / aa;
							var uniqueGpNames = total_target.GroupBy(c => c.nameofdepartment).Select(g => g.Key).ToList();
							foreach (var gpName in uniqueGpNames)
							{
								if (gpName != null && gpName != "" && gpName != "null")
								{
									incentive_report data = new incentive_report();
									var matchedData = total_target.Where(x => x.nameofdepartment == gpName).ToList();
									if (matchedData.Any(g => g.nameofdepartment == "Other"))
									{
										// Get the first 'otherdepartment' value where 'department' is "Other"
										otherdepartments = matchedData
										   .Where(g => g.nameofdepartment == "Other")
										   .Select(g => g.other_department)
										   .FirstOrDefault();
									}
									else
									{
										otherdepartments = "";

									}
									if (matchedData != null)
									{
										var gp_incentive = matchedData.GroupBy(c => c.gram).ToList().Count();
										var distinctStates = matchedData.Select(g => g.state).Distinct().ToList();
										var totalgpdata = masterlist.Where(g => distinctStates.Contains(g.state_name))
														.GroupBy(c => c.gram_panchayat_name).Count();

										var inc_cost = matchedData.Sum(x =>
										{
											if (double.TryParse(x.cost, out double areaValue))
											{
												return areaValue;
											}
											else
											{
												return 0.0; // Default value if conversion fails
											}
										});

										int supply_structure = matchedData.Count;
										int typenew = matchedData.Where(x => x.typeofwork == "New").Count();
										int Renovation = matchedData.Where(x => x.typeofwork == "Renovation").Count();

										var demand_activity = matchedData.GroupBy(x => x.nameofstructure).ToList();
										var demand_activity_value = "";
										foreach (var item in demand_activity)
										{
											var activity = item.Key;

											demand_activity_value += activity + " , ";
										}

										data.department = gpName;
										data.otherdepartment = otherdepartments;
										//data.atal_gp = Convert.ToInt32(ff);
										data.atal_gp = Convert.ToInt32(totalgpdata);
										data.inc_gp = Convert.ToInt32(gp_incentive);
										data.cost = Convert.ToDouble(inc_cost);
										data.area = Convert.ToDouble(supply_structure);
										data.beneficery = Convert.ToInt32(typenew);
										data.m_sc = Convert.ToInt32(Renovation);
										data.activity = demand_activity_value;

										all_data.Add(data);

									}
								}
							}

							var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
							jsonResult.MaxJsonLength = int.MaxValue;
							return jsonResult;
						}

						else
						{
							return Json("No Data", JsonRequestBehavior.AllowGet);
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



		[HttpPost]
		public ActionResult StateLevel_Dropdown(string StateName, string Dist, string Block, string Gram, string Year, string Month)
		{
			Session["gstate"] = StateName.TrimEnd('\n').TrimEnd(' ');
			Session["gdist"] = Dist.TrimEnd('\n').TrimEnd(' ');
			Session["gblock"] = Block.TrimEnd('\n').TrimEnd(' ');
			Session["ggram"] = Gram.TrimEnd('\n').TrimEnd(' ');
			Session["year"] = Year;
			Session["month"] = Month;
			return Json("Yes", JsonRequestBehavior.AllowGet);
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
		public ActionResult allmodule_report()
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var StateOfficer = Session["Officer"].ToString();

					if (StateOfficer == "State Level Nodal Officer")
					{
						var ss = Session["gstate"].ToString();

						string[] states = { ss };
						List<all_module_report> all_data = new List<all_module_report>();

						for (int i = 0; i < states.Length; i++)
						{
							all_module_report data = new all_module_report();

							string state = states[i];

							var demandside_data = ABE.obj_incentive_demand.Where(x => x.state == state).ToList();
							var supplyside_data = ABE.obj_incentive_supply.Where(x => x.state == state).ToList();
							var other_data = ABE.obj_incentive_other.Where(x => x.state == state).ToList();


							var demandcost = demandside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var supplycost = supplyside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var othercost = other_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});


							var demand_area = demandside_data.Sum(x => Convert.ToDouble(x.area_under));
							int supply_structure = supplyside_data.Count;
							int other_structure = other_data.Count;


							var demand_activity = demandside_data.GroupBy(x => x.activity).ToList();
							var demand_activity_value = "";
							foreach (var item in demand_activity)
							{
								var activity = item.Key;

								demand_activity_value += activity + " , ";
							}

							var supply_activity = supplyside_data.GroupBy(x => x.nameofstructure).ToList();

							var supply_activity_value = "";
							foreach (var item in supply_activity)
							{
								var activity = item.Key;

								supply_activity_value += activity + " , ";
							}

							var other_activity = other_data.GroupBy(x => x.nameofstructure).ToList();

							var other_activity_value = "";
							foreach (var item in other_activity)
							{
								var activity = item.Key;

								other_activity_value += activity + " , ";
							}

							data.statename = state;
							data.demand_cost = Convert.ToDouble(demandcost);
							data.supply_cost = Convert.ToDouble(supplycost);
							data.other_cost = Convert.ToDouble(othercost);
							data.demand_area = Convert.ToDouble(demand_area);
							data.supply_structure = supply_structure;
							data.other_structure = other_structure;
							data.demand_activity_value = demand_activity_value;
							data.supply_activity_value = supply_activity_value;
							data.other_activity_value = other_activity_value;


							all_data.Add(data);
						}


						var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
						jsonResult.MaxJsonLength = int.MaxValue;
						return jsonResult;
					}
					else
					{

						string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };

						List<all_module_report> all_data = new List<all_module_report>();

						for (int i = 0; i < states.Length; i++)
						{
							all_module_report data = new all_module_report();

							string state = states[i];

							var demandside_data = ABE.obj_incentive_demand.Where(x => x.state == state).ToList();
							var supplyside_data = ABE.obj_incentive_supply.Where(x => x.state == state).ToList();
							var other_data = ABE.obj_incentive_other.Where(x => x.state == state).ToList();


							var demandcost = demandside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var supplycost = supplyside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var othercost = other_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});


							var demand_area = demandside_data.Sum(x => Convert.ToDouble(x.area_under));
							int supply_structure = supplyside_data.Count;
							int other_structure = other_data.Count;


							var demand_activity = demandside_data.GroupBy(x => x.activity).ToList();
							var demand_activity_value = "";
							foreach (var item in demand_activity)
							{
								var activity = item.Key;

								demand_activity_value += activity + " , ";
							}

							var supply_activity = supplyside_data.GroupBy(x => x.nameofstructure).ToList();

							var supply_activity_value = "";
							foreach (var item in supply_activity)
							{
								var activity = item.Key;

								supply_activity_value += activity + " , ";
							}

							var other_activity = other_data.GroupBy(x => x.nameofstructure).ToList();

							var other_activity_value = "";
							foreach (var item in other_activity)
							{
								var activity = item.Key;

								other_activity_value += activity + " , ";
							}

							data.statename = state;
							data.demand_cost = Convert.ToDouble(demandcost);
							data.supply_cost = Convert.ToDouble(supplycost);
							data.other_cost = Convert.ToDouble(othercost);
							data.demand_area = Convert.ToDouble(demand_area);
							data.supply_structure = supply_structure;
							data.other_structure = other_structure;
							data.demand_activity_value = demand_activity_value;
							data.supply_activity_value = supply_activity_value;
							data.other_activity_value = other_activity_value;


							all_data.Add(data);
						}


						var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
						jsonResult.MaxJsonLength = int.MaxValue;
						return jsonResult;
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
		public ActionResult Save_demand(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_demand>(Data);
					var Details = new incentive_demand();


					var Email = Session["Email"].ToString();
					var officer = Session["Officer"].ToString();

					Details.state = result.state;
					Details.district = result.district;
					Details.block = result.block;
					Details.gp = result.gp;
					Details.year = result.year;
					Details.month = result.month;
					var month = result.month;
					int month_num = Get_Month_Number(month);
					Details.order_by_month = month_num;
					Details.department = result.department;
					Details.otherdepartment = result.otherdepartment;
					Details.activity = result.activity;
					Details.cost = result.cost;
					if(result.area_under != "")
                    {
						Details.area_under = result.area_under;
					}
                    else
                    {
						return Json("Please Enter Area under Full Subsidy ( Ha)", JsonRequestBehavior.AllowGet);
					}
					
					Details.msc = result.msc;
					Details.mst = result.mst;
					Details.mobc = result.mobc;
					Details.mother = result.mother;
					Details.fsc = result.fsc;
					Details.fst = result.fst;
					Details.fobc = result.fobc;
					Details.fother = result.fother;
					Details.total_beneficiary = result.total_beneficiary;
					Details.email = Email;
					Details.remark = result.remark;

					ABE.obj_incentive_demand.Add(Details);
					ABE.SaveChanges();
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
		public ActionResult total_gp_demand(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<Pagenum>(Data);


					var State = result.statename;
					var Dist = result.districtname;
					var Block = result.blockname;
					var Gram = result.gpname;
					var year = result.year;
					var month = result.month;

					List<incentive_demand> Final_data = new List<incentive_demand>();

					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null)
					{
						var data1 = ABE.obj_incentive_demand.Where(x => x.state == State).ToList();
						var data = data1.GroupBy(c => c.gp).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_demand.Where(n => n.gp == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}

					var exetotal = Final_data.Count;
					var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
					jsonresult.MaxJsonLength = int.MaxValue;
					return jsonresult;
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
		public ActionResult update_demand(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_demand>(Data);
					var id = Convert.ToInt32(result.id);
					var Details = ABE.obj_incentive_demand.Where(x => x.id == id).FirstOrDefault();
					Details.cost = result.cost;
					Details.area_under = result.area_under;
					Details.msc = result.msc;
					Details.mst = result.mst;
					Details.mobc = result.mobc;
					Details.mother = result.mother;
					Details.fsc = result.fsc;
					Details.fst = result.fst;
					Details.fobc = result.fobc;
					Details.fother = result.fother;
					Details.total_beneficiary = result.total_beneficiary;
					Details.remark = result.remark;
					Details.update_month = result.update_month;

					ABE.Entry(Details).State = EntityState.Modified;
					ABE.SaveChanges();
					return Json("Update Successfully", JsonRequestBehavior.AllowGet);


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
		public ActionResult Data_get(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_demand>(Data);
					List<incentive_demand> ddetails = new List<incentive_demand>();
					var State = result.state;
					var Dist = result.district;
					var Block = result.block;
					var Gram = result.gp;
					var year = result.year;
					var month = result.month;



					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

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

		[HttpGet]
		public ActionResult Data_get_pdf()
		{
			if (Session["UserId"] != null)
			{
				try
				{


					var userid = Convert.ToInt32(Session["UserId"]);
					var State = "";
					var Dist = "";
					var Block = "";
					var Gram = "";
					var year = "";
					var month = "";
					if (Session["gstate"] != null)
					{
						State = Session["gstate"].ToString();
					}
					if (Session["gdist"] != null)
					{
						Dist = Session["gdist"].ToString();
					}
					if (Session["gblock"] != null)
					{
						Block = Session["gblock"].ToString();
					}
					if (Session["ggram"] != null)
					{
						Gram = Session["ggram"].ToString();
					}
					if (Session["year"] != null)
					{
						year = Session["year"].ToString();
					}
					if (Session["month"] != null)
					{
						month = Session["month"].ToString();
					}


					List<incentive_demand> ddetails = new List<incentive_demand>();

					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null)
					{
						ddetails = ABE.obj_incentive_demand.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

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
		public ActionResult Delete_data(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_demand>(Data);

					if (result.id != 0)
					{
						var TKID = Convert.ToInt32(result.id);
						var Data1 = ABE.obj_incentive_demand.Where(x => x.id == TKID).SingleOrDefault();

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

		public ActionResult Demand_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
		{
			var State = state1;
			var Dist = district1;
			var Block = block01;
			var Gram = gp1;
			var year = year1;
			var month = month1;

			List<incentive_demand> ddetails = new List<incentive_demand>();

			if (State != "All")
			{
				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.gp == Gram).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

				}
			}
			else
			{
				if (State == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State == "All" && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State == "All")
				{
					ddetails = ABE.obj_incentive_demand.OrderByDescending(x => x.id).ToList();//total list

				}
			}
			using (var workbook = new XLWorkbook())
			{

				var worksheet = workbook.Worksheets.Add("Demand Side Incentive Fund");
				var currentRow = 1;
				worksheet.Cell(currentRow, 1).Value = "State";
				worksheet.Cell(currentRow, 2).Value = "District";
				worksheet.Cell(currentRow, 3).Value = "Block";
				worksheet.Cell(currentRow, 4).Value = "Grampanchayat";
				worksheet.Cell(currentRow, 5).Value = "Year";
				worksheet.Cell(currentRow, 6).Value = "Month";
				worksheet.Cell(currentRow, 7).Value = "Updated Month";
				worksheet.Cell(currentRow, 8).Value = "Name of Department";
				worksheet.Cell(currentRow, 9).Value = "Other Name of Department";
				worksheet.Cell(currentRow, 10).Value = "Name of Activity";
				worksheet.Cell(currentRow, 11).Value = "Cost (Incentive Fund Utilization) Lakhs";
				worksheet.Cell(currentRow, 12).Value = "Area covered utilizing Atal Jal Incentive fund (Ha)";
				worksheet.Cell(currentRow, 13).Value = "Total Beneficiary";
				worksheet.Cell(currentRow, 14).Value = "Male SC";
				worksheet.Cell(currentRow, 15).Value = "Male ST";
				worksheet.Cell(currentRow, 16).Value = "Male OBC";
				worksheet.Cell(currentRow, 17).Value = "Male General";
				worksheet.Cell(currentRow, 18).Value = "Female SC";
				worksheet.Cell(currentRow, 19).Value = "Female ST";
				worksheet.Cell(currentRow, 20).Value = "Female OBC";
				worksheet.Cell(currentRow, 21).Value = "Female General";
				worksheet.Cell(currentRow, 22).Value = "Remark (If Any)";




				if (ddetails.Count != 0)
				{
					for (int i = 0; i < ddetails.Count; i++)
					{
						currentRow++;
						var remark = ddetails[i].remark;
						if (remark == null)
						{
							remark = "";
						}
						var update_month = ddetails[i].update_month;
						if (update_month == null)
						{
							update_month = "";
						}

						worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
						worksheet.Cell(currentRow, 2).Value = ddetails[i].district;
						worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
						worksheet.Cell(currentRow, 4).Value = ddetails[i].gp;
						worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
						worksheet.Cell(currentRow, 6).Value = ddetails[i].month;
						worksheet.Cell(currentRow, 7).Value = update_month;
						worksheet.Cell(currentRow, 8).Value = ddetails[i].department;
						worksheet.Cell(currentRow, 9).Value = ddetails[i].otherdepartment;
						worksheet.Cell(currentRow, 10).Value = ddetails[i].activity;
						worksheet.Cell(currentRow, 11).Value = ddetails[i].cost;
						worksheet.Cell(currentRow, 12).Value = ddetails[i].area_under;
						worksheet.Cell(currentRow, 13).Value = ddetails[i].total_beneficiary;
						worksheet.Cell(currentRow, 14).Value = ddetails[i].msc;
						worksheet.Cell(currentRow, 15).Value = ddetails[i].mst;
						worksheet.Cell(currentRow, 16).Value = ddetails[i].mobc;
						worksheet.Cell(currentRow, 17).Value = ddetails[i].mother;
						worksheet.Cell(currentRow, 18).Value = ddetails[i].fsc;
						worksheet.Cell(currentRow, 19).Value = ddetails[i].fst;
						worksheet.Cell(currentRow, 20).Value = ddetails[i].fobc;
						worksheet.Cell(currentRow, 21).Value = ddetails[i].fother;
						worksheet.Cell(currentRow, 22).Value = remark;



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
					worksheet.Cell(currentRow, 7).Value = "No Data";
					worksheet.Cell(currentRow, 8).Value = "";
					worksheet.Cell(currentRow, 9).Value = "";
					worksheet.Cell(currentRow, 10).Value = "";
					worksheet.Cell(currentRow, 11).Value = "";
					worksheet.Cell(currentRow, 12).Value = "";

				}
				var nnn = "Demand Side Incentive Fund Utilization (Physical & Financial Progress)";
				var csv = ".xlsx";
				var excel_name = State + ' ' + nnn + csv;
				using (var stream = new MemoryStream())
				{
					workbook.SaveAs(stream);
					var content = stream.ToArray();

					return File(
						content,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						excel_name);
				}
			}
		}

		[HttpGet]
		public ActionResult Department_name()
		{
			if (Session["UserId"] != null)
			{
				try
				{
					List<abhy_wsp_demandside_department_name> ddetails1 = ABE.obj_abhy_wsp_demandside_department_name.ToList();
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
		public ActionResult supply_Department_name()
		{
			if (Session["UserId"] != null)
			{
				try
				{
					List<abhy_wsp_supplyside_department_name> ddetails1 = ABE.obj_abhy_wsp_supplyside_department_name.ToList();
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


		[HttpPost]
		public ActionResult Save_data(string state, string dist, string block, string remark, string othernameofdepartment, string gram, string year, string month, string nameofdepartment, string nameofstructure, string latitude, string longitude, string nameofwork, string cost, string typeofwork, string statusofwork, HttpPostedFileBase image)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					int k = 0;
					var Data = new incentive_supply();
					if (Data != null)
					{


						Data.state = state;
						Data.dist = dist;
						Data.block = block;
						Data.gram = gram;
						Data.nameofdepartment = nameofdepartment;
						Data.other_department = othernameofdepartment;
						Data.nameofstructure = nameofstructure;
						Data.latitude = latitude;
						Data.longitude = longitude;
						Data.cost = cost;
						Data.statusofwork = statusofwork;
						Data.entry_date = DateTime.Now.ToString();
						Data.year = year;
						Data.month = month;
						int month_num = Get_Month_Number(month);
						Data.order_by_month = month_num;
						Data.typeofwork = typeofwork;
						Data.remark = remark;
						Data.user_id = Session["Officer"].ToString();
						if (image != null)
						{
							++k;
							string ext = Path.GetExtension(image.FileName).ToUpper();
							string name = Path.GetFileNameWithoutExtension(image.FileName);
							string FileName = name + DateTime.Now.Ticks + k + ext;
							if (image.FileName != null)
							{
								String FileExt = Path.GetExtension(image.FileName).ToUpper();
								if (FileExt != ".PNG" && FileExt != ".JPG" && FileExt != ".JPEG")
								{
									return Json("Choose Valid File", JsonRequestBehavior.AllowGet);
								}
								string BasePath = AppDomain.CurrentDomain.BaseDirectory;
								string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\Incentive_Fund\\Supply_Side\\");
								if (!Directory.Exists(path))
								{
									Directory.CreateDirectory(path);
								}
								path = path + FileName;
								string[] count = image.FileName.Split('.');
								string[] count_special = image.FileName.Split('#', '$');
								if (count.Length != 2)
								{
									return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
								}
								if (count_special.Length >= 2)
								{
									return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
								}
								image.SaveAs(path);
								Data.image_name = FileName;
								Data.image_path = "/Ataljalimages/Incentive_Fund/Supply_Side/" + FileName;

							}
						}

						ABE.obj_incentive_supply.Add(Data);
						ABE.SaveChanges();
						return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

					}

				}
				catch (Exception ex)
				{
					return Json("error");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult Data_get_supply(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_supply>(Data);
					List<incentive_supply> ddetails = new List<incentive_supply>();
					var State = result.state;
					var Dist = result.dist;
					var Block = result.block;
					var Gram = result.gram;
					var year = result.year;
					var month = result.month;



					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

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
		public ActionResult total_gp_supply(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<Pagenum>(Data);


					var State = result.statename;
					var Dist = result.districtname;
					var Block = result.blockname;
					var Gram = result.gpname;
					var year = result.year;
					var month = result.month;

					List<incentive_supply> Final_data = new List<incentive_supply>();

					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null)
					{
						var data1 = ABE.obj_incentive_supply.Where(x => x.state == State).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_supply.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}

					var exetotal = Final_data.Count;
					var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
					jsonresult.MaxJsonLength = int.MaxValue;
					return jsonresult;
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
		public ActionResult Data_get_supply_pdf()
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var userid = Convert.ToInt32(Session["UserId"]);

					var State = "";
					var Dist = "";
					var Block = "";
					var Gram = "";
					var year = "";
					var month = "";
					if (Session["gstate"] != null)
					{
						State = Session["gstate"].ToString();
					}
					if (Session["gdist"] != null)
					{
						Dist = Session["gdist"].ToString();
					}
					if (Session["gblock"] != null)
					{
						Block = Session["gblock"].ToString();
					}
					if (Session["ggram"] != null)
					{
						Gram = Session["ggram"].ToString();
					}
					if (Session["year"] != null)
					{
						year = Session["year"].ToString();
					}
					if (Session["month"] != null)
					{
						month = Session["month"].ToString();
					}

					List<incentive_supply> ddetails = new List<incentive_supply>();


					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null)
					{
						ddetails = ABE.obj_incentive_supply.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

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
		public ActionResult Delete_data_supply(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_supply>(Data);

					if (result.id != 0)
					{
						var TKID = Convert.ToInt32(result.id);
						var Data1 = ABE.obj_incentive_supply.Where(x => x.id == TKID).SingleOrDefault();

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

		[HttpPost]
		public ActionResult update_supply(int id, string update_month, string typeofwork, string latitude, string longitude, string cost, string statusofwork, string remark, HttpPostedFileBase image)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					int k = 0;
					JavaScriptSerializer js = new JavaScriptSerializer();
					var idd = Convert.ToInt32(id);
					var Details = ABE.obj_incentive_supply.Where(x => x.id == idd).FirstOrDefault();
					Details.id = id;
					Details.update_month = update_month;
					Details.typeofwork = typeofwork;
					Details.latitude = latitude;
					Details.longitude = longitude;
					Details.cost = cost;
					Details.statusofwork = statusofwork;
					Details.remark = remark;
					if (image != null)
					{
						++k;
						string ext = Path.GetExtension(image.FileName).ToUpper();
						string name = Path.GetFileNameWithoutExtension(image.FileName);
						string FileName = name + DateTime.Now.Ticks + k + ext;
						if (image.FileName != null)
						{
							String FileExt = Path.GetExtension(image.FileName).ToUpper();
							if (FileExt != ".PNG" && FileExt != ".JPG" && FileExt != ".JPEG")
							{
								return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

							}
							string BasePath = AppDomain.CurrentDomain.BaseDirectory;
							string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\Incentive_Fund\\Supply_Side\\");
							if (!Directory.Exists(path))
							{
								Directory.CreateDirectory(path);
							}
							path = path + FileName;
							string[] count = image.FileName.Split('.');
							string[] count_special = image.FileName.Split('#', '$');
							if (count.Length != 2)
							{
								return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
							}
							if (count_special.Length >= 2)
							{
								return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
							}
							image.SaveAs(path);
							Details.image_name = FileName;
							Details.image_path = "/Ataljalimages/Incentive_Fund/Supply_Side/" + FileName;

						}
					}



					ABE.Entry(Details).State = EntityState.Modified;
					ABE.SaveChanges();
					return Json("Update Successfully", JsonRequestBehavior.AllowGet);


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

		public ActionResult supply_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
		{
			var State = state1;
			var Dist = district1;
			var Block = block01;
			var Gram = gp1;
			var year = year1;
			var month = month1;

			List<incentive_supply> ddetails = new List<incentive_supply>();

			if (State != "All")
			{

				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

				}
			}
			else
			{
				if (State == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State == "All" && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State == "All")
				{
					ddetails = ABE.obj_incentive_supply.OrderByDescending(x => x.id).ToList();//total list

				}
			}
			using (var workbook = new XLWorkbook())
			{

				var worksheet = workbook.Worksheets.Add("Supply Side Incentive Fund");
				var currentRow = 1;
				worksheet.Cell(currentRow, 1).Value = "State";
				worksheet.Cell(currentRow, 2).Value = "District";
				worksheet.Cell(currentRow, 3).Value = "Block";
				worksheet.Cell(currentRow, 4).Value = "Grampanchayat";
				worksheet.Cell(currentRow, 5).Value = "Year";
				worksheet.Cell(currentRow, 6).Value = "Month";
				worksheet.Cell(currentRow, 7).Value = "Updated Month";
				worksheet.Cell(currentRow, 8).Value = "Name of Department";
				worksheet.Cell(currentRow, 9).Value = "Other Name of Department";
				worksheet.Cell(currentRow, 10).Value = "Name of Structure";
				worksheet.Cell(currentRow, 11).Value = "Work Type";
				worksheet.Cell(currentRow, 12).Value = "Latitude Degree Decimal";
				worksheet.Cell(currentRow, 13).Value = "Longitude Degree Decimal";
				worksheet.Cell(currentRow, 14).Value = "Cost (Incentive Fund Utilization) Lakhs";
				worksheet.Cell(currentRow, 15).Value = "Status of Work";
				worksheet.Cell(currentRow, 16).Value = "Image of Structure";
				worksheet.Cell(currentRow, 17).Value = "Remark (If Any)";

				if (ddetails.Count != 0)
				{
					for (int i = 0; i < ddetails.Count; i++)
					{
						currentRow++;
						var remark = ddetails[i].remark;
						if (remark == null)
						{
							remark = "";
						}
						var update_month = ddetails[i].update_month;
						if (update_month == null)
						{
							update_month = "";
						}
						var other_department = ddetails[i].other_department;
						if (other_department == null)
						{
							other_department = "";
						}

						worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
						worksheet.Cell(currentRow, 2).Value = ddetails[i].dist;
						worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
						worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
						worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
						worksheet.Cell(currentRow, 6).Value = ddetails[i].month;
						worksheet.Cell(currentRow, 7).Value = update_month;
						worksheet.Cell(currentRow, 8).Value = ddetails[i].nameofdepartment;
						worksheet.Cell(currentRow, 9).Value = other_department;
						worksheet.Cell(currentRow, 10).Value = ddetails[i].nameofstructure;
						worksheet.Cell(currentRow, 11).Value = ddetails[i].typeofwork;
						worksheet.Cell(currentRow, 12).Value = ddetails[i].latitude;
						worksheet.Cell(currentRow, 13).Value = ddetails[i].longitude;
						worksheet.Cell(currentRow, 14).Value = ddetails[i].cost;
						worksheet.Cell(currentRow, 15).Value = ddetails[i].statusofwork;
						worksheet.Cell(currentRow, 16).Value = ddetails[i].image_name;
						worksheet.Cell(currentRow, 17).Value = remark;

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
					worksheet.Cell(currentRow, 7).Value = "No Data";
					worksheet.Cell(currentRow, 8).Value = "";
					worksheet.Cell(currentRow, 9).Value = "";
					worksheet.Cell(currentRow, 10).Value = "";
					worksheet.Cell(currentRow, 11).Value = "";
					worksheet.Cell(currentRow, 12).Value = "";






				}
				var nnn = "Supply Side Incentive Fund Utilization (Physical & Financial Progress)";
				var csv = ".xlsx";
				var excel_name = State + ' ' + nnn + csv;
				using (var stream = new MemoryStream())
				{
					workbook.SaveAs(stream);
					var content = stream.ToArray();

					return File(
						content,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						excel_name);
				}
			}
		}

		//Other
		[HttpPost]
		public ActionResult Save_data_other(string state, string dist, string block, string remark, string othernameofdepartment, string gram, string year, string month, string nameofdepartment, string nameofstructure, string latitude, string longitude, string nameofwork, string cost, string typeofwork, string statusofwork, HttpPostedFileBase image)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					int k = 0;
					var Data = new incentive_other();
					if (Data != null)
					{


						Data.state = state;
						Data.dist = dist;
						Data.block = block;
						Data.gram = gram;
						Data.nameofdepartment = nameofdepartment;
						Data.other_department = othernameofdepartment;
						Data.nameofstructure = nameofstructure;
						Data.latitude = latitude;
						Data.longitude = longitude;
						Data.cost = cost;
						Data.statusofwork = statusofwork;
						Data.entry_date = DateTime.Now.ToString();
						Data.year = year;
						Data.month = month;
						int month_num = Get_Month_Number(month);
						Data.order_by_month = month_num;
						Data.typeofwork = typeofwork;
						Data.remark = remark;
						Data.user_id = Session["Officer"].ToString();
						if (image != null)
						{
							++k;
							string ext = Path.GetExtension(image.FileName).ToUpper();
							string name = Path.GetFileNameWithoutExtension(image.FileName);
							string FileName = name + DateTime.Now.Ticks + k + ext;
							if (image.FileName != null)
							{
								String FileExt = Path.GetExtension(image.FileName).ToUpper();
								if (FileExt != ".PNG" && FileExt != ".JPG" && FileExt != ".JPEG")
								{
									return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

								}
								string BasePath = AppDomain.CurrentDomain.BaseDirectory;
								string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\Incentive_Fund\\Other\\");
								if (!Directory.Exists(path))
								{
									Directory.CreateDirectory(path);
								}
								path = path + FileName;
								string[] count = image.FileName.Split('.');
								string[] count_special = image.FileName.Split('#', '$');
								if (count.Length != 2)
								{
									return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
								}
								if (count_special.Length >= 2)
								{
									return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
								}
								image.SaveAs(path);
								Data.image_name = FileName;
								Data.image_path = "/Ataljalimages/Incentive_Fund/Other/" + FileName;

							}
						}

						ABE.obj_incentive_other.Add(Data);
						ABE.SaveChanges();
						return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

					}

				}
				catch (Exception ex)
				{
					return Json("error");

				}
				return Json("Invalid");
			}
			else
			{
				return Json("Logout", JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		public ActionResult Data_get_other(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_other>(Data);
					List<incentive_other> ddetails = new List<incentive_other>();
					var State = result.state;
					var Dist = result.dist;
					var Block = result.block;
					var Gram = result.gram;
					var year = result.year;
					var month = result.month;



					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

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
		public ActionResult total_gp_other(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<Pagenum>(Data);


					var State = result.statename;
					var Dist = result.districtname;
					var Block = result.blockname;
					var Gram = result.gpname;
					var year = result.year;
					var month = result.month;

					List<incentive_other> Final_data = new List<incentive_other>();

					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year && x.month == month).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}
					else if (State != "0" && State != "" && State != null)
					{
						var data1 = ABE.obj_incentive_other.Where(x => x.state == State).ToList();
						var data = data1.GroupBy(c => c.gram).ToList();

						for (int i = 0; i < data.Count; i++)
						{
							var daada = data[i].Key;
							var exist2 = ABE.obj_incentive_other.Where(n => n.gram == daada).OrderByDescending(x => x.id).FirstOrDefault();
							Final_data.Add(exist2);
						}
					}

					var exetotal = Final_data.Count;
					var jsonresult = Json(exetotal, JsonRequestBehavior.AllowGet);
					jsonresult.MaxJsonLength = int.MaxValue;
					return jsonresult;
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
		public ActionResult Data_get_other_pdf()
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var userid = Convert.ToInt32(Session["UserId"]);

					var State = "";
					var Dist = "";
					var Block = "";
					var Gram = "";
					var year = "";
					var month = "";
					if (Session["gstate"] != null)
					{
						State = Session["gstate"].ToString();
					}
					if (Session["gdist"] != null)
					{
						Dist = Session["gdist"].ToString();
					}
					if (Session["gblock"] != null)
					{
						Block = Session["gblock"].ToString();
					}
					if (Session["ggram"] != null)
					{
						Gram = Session["ggram"].ToString();
					}
					if (Session["year"] != null)
					{
						year = Session["year"].ToString();
					}
					if (Session["month"] != null)
					{
						month = Session["month"].ToString();
					}

					List<incentive_other> ddetails = new List<incentive_other>();


					if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

					}
					else if (State != "0" && State != "" && State != null)
					{
						ddetails = ABE.obj_incentive_other.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

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
		public ActionResult Delete_data_other(string Data)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					JavaScriptSerializer js = new JavaScriptSerializer();
					var result = js.Deserialize<incentive_other>(Data);

					if (result.id != 0)
					{
						var TKID = Convert.ToInt32(result.id);
						var Data1 = ABE.obj_incentive_other.Where(x => x.id == TKID).SingleOrDefault();

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

		[HttpPost]
		public ActionResult update_other(int id, string update_month, string typeofwork, string latitude, string longitude, string cost, string statusofwork, string remark, HttpPostedFileBase image)
		{
			if (Session["UserId"] != null)
			{
				try
				{
					int k = 0;
					JavaScriptSerializer js = new JavaScriptSerializer();
					var idd = Convert.ToInt32(id);
					var Details = ABE.obj_incentive_other.Where(x => x.id == idd).FirstOrDefault();
					Details.id = id;
					Details.update_month = update_month;
					Details.typeofwork = typeofwork;
					Details.latitude = latitude;
					Details.longitude = longitude;
					Details.cost = cost;
					Details.statusofwork = statusofwork;
					Details.remark = remark;
					if (image != null)
					{
						++k;
						string ext = Path.GetExtension(image.FileName).ToUpper();
						string name = Path.GetFileNameWithoutExtension(image.FileName);
						string FileName = name + DateTime.Now.Ticks + k + ext;
						if (image.FileName != null)
						{
							String FileExt = Path.GetExtension(image.FileName).ToUpper();
							if (FileExt != ".PNG" && FileExt != ".JPG" && FileExt != ".JPEG")
							{
								return Json("Choose Valid File", JsonRequestBehavior.AllowGet);

							}
							string BasePath = AppDomain.CurrentDomain.BaseDirectory;
							string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\Incentive_Fund\\Other\\");
							if (!Directory.Exists(path))
							{
								Directory.CreateDirectory(path);
							}
							path = path + FileName;
							string[] count = image.FileName.Split('.');
							string[] count_special = image.FileName.Split('#', '$');
							if (count.Length != 2)
							{
								return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
							}
							if (count_special.Length >= 2)
							{
								return Json("Please use the proper file name without special characters (# , $) .", JsonRequestBehavior.AllowGet);
							}
							image.SaveAs(path);
							Details.image_name = FileName;
							Details.image_path = "/Ataljalimages/Incentive_Fund/Other/" + FileName;

						}
					}



					ABE.Entry(Details).State = EntityState.Modified;
					ABE.SaveChanges();
					return Json("Update Successfully", JsonRequestBehavior.AllowGet);


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

		public ActionResult other_excel(string state1, string district1, string block01, string gp1, string year1, string month1)
		{
			var State = state1;
			var Dist = district1;
			var Block = block01;
			var Gram = gp1;
			var year = year1;
			var month = month1;

			List<incentive_other> ddetails = new List<incentive_other>();
			if (State != "All")
			{
				if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gram == Gram).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.block == Block).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.dist == Dist).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list

				}
			}
			else
			{
				if (State == "All" && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.year == year && x.month == month).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State == "All" && year != "0" && year != "" && year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.year == year).OrderByDescending(x => x.id).ToList();//total list

				}
				else if (State == "All")
				{
					ddetails = ABE.obj_incentive_other.OrderByDescending(x => x.id).ToList();//total list

				}
			}
			using (var workbook = new XLWorkbook())
			{

				var worksheet = workbook.Worksheets.Add("Other Incentive Fund");
				var currentRow = 1;
				worksheet.Cell(currentRow, 1).Value = "State";
				worksheet.Cell(currentRow, 2).Value = "District";
				worksheet.Cell(currentRow, 3).Value = "Block";
				worksheet.Cell(currentRow, 4).Value = "Grampanchayat";
				worksheet.Cell(currentRow, 5).Value = "Year";
				worksheet.Cell(currentRow, 6).Value = "Month";
				worksheet.Cell(currentRow, 7).Value = "Updated Month";
				worksheet.Cell(currentRow, 8).Value = "Name of Department";
				worksheet.Cell(currentRow, 9).Value = "Other Name of Department";
				worksheet.Cell(currentRow, 10).Value = "Name of Structure";
				worksheet.Cell(currentRow, 11).Value = "Work Type";
				worksheet.Cell(currentRow, 12).Value = "Latitude Degree Decimal";
				worksheet.Cell(currentRow, 13).Value = "Longitude Degree Decimal";
				worksheet.Cell(currentRow, 14).Value = "Cost (Incentive Fund Utilization) Lakhs";
				worksheet.Cell(currentRow, 15).Value = "Status of Work";
				worksheet.Cell(currentRow, 16).Value = "Image of Structure";
				worksheet.Cell(currentRow, 17).Value = "Remark (If Any)";

				if (ddetails.Count != 0)
				{
					for (int i = 0; i < ddetails.Count; i++)
					{
						currentRow++;
						var remark = ddetails[i].remark;
						if (remark == null)
						{
							remark = "";
						}
						var update_month = ddetails[i].update_month;
						if (update_month == null)
						{
							update_month = "";
						}
						var other_department = ddetails[i].other_department;
						if (other_department == null)
						{
							other_department = "";
						}

						worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
						worksheet.Cell(currentRow, 2).Value = ddetails[i].dist;
						worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
						worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
						worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
						worksheet.Cell(currentRow, 6).Value = ddetails[i].month;
						worksheet.Cell(currentRow, 7).Value = update_month;
						worksheet.Cell(currentRow, 8).Value = ddetails[i].nameofdepartment;
						worksheet.Cell(currentRow, 9).Value = other_department;
						worksheet.Cell(currentRow, 10).Value = ddetails[i].nameofstructure;
						worksheet.Cell(currentRow, 11).Value = ddetails[i].typeofwork;
						worksheet.Cell(currentRow, 12).Value = ddetails[i].latitude;
						worksheet.Cell(currentRow, 13).Value = ddetails[i].longitude;
						worksheet.Cell(currentRow, 14).Value = ddetails[i].cost;
						worksheet.Cell(currentRow, 15).Value = ddetails[i].statusofwork;
						worksheet.Cell(currentRow, 16).Value = ddetails[i].image_name;
						worksheet.Cell(currentRow, 17).Value = remark;

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
					worksheet.Cell(currentRow, 7).Value = "No Data";
					worksheet.Cell(currentRow, 8).Value = "";
					worksheet.Cell(currentRow, 9).Value = "";
					worksheet.Cell(currentRow, 10).Value = "";
					worksheet.Cell(currentRow, 11).Value = "";
					worksheet.Cell(currentRow, 12).Value = "";
				}

				var nnn = "Other Innovative Work/Activity Incentive Fund Utilization (Physical & Financial Progress)";
				var csv = ".xlsx";
				var excel_name = State + ' ' + nnn + csv;
				using (var stream = new MemoryStream())
				{
					workbook.SaveAs(stream);
					var content = stream.ToArray();

					return File(
						content,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						excel_name);
				}
			}
		}

		[HttpPost]
		public ActionResult demand_report()
		{
			var Year = "";
			var Month = "";
			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
				int[] gps_count = { 1873, 1647, 1199, 670, 1133, 1132, 549 };
				List<total_demand> all_data = new List<total_demand>();
				List<incentive_demand> ddetails = new List<incentive_demand>();

				if (Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else
				{
					ddetails = ABE.obj_incentive_demand.OrderByDescending(x => x.order_by_month).ToList();

				}

				for (int i = 0; i < states.Length; i++)
				{
					total_demand data = new total_demand();

					string state = states[i];
					data.statename = state;
					data.totalgp = gps_count[i];
					var costtotal = ddetails.Where(x => x.state == state).ToList();
					data.totalgp_count = costtotal.GroupBy(x => x.gp).Count();
					var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
					data.cost = Convert.ToDouble(costtotalaa);
					var area_underaa = costtotal.Sum(x => Convert.ToDouble(x.area_under));
					data.area_under = Convert.ToDouble(area_underaa);
					var total_beneficiaryaa = costtotal.Sum(x => Convert.ToDecimal(x.total_beneficiary));
					data.total_beneficiary = Convert.ToInt32(total_beneficiaryaa);
					var msca = costtotal.Sum(x => Convert.ToDecimal(x.msc));
					data.msc = Convert.ToInt32(msca);
					var msta = costtotal.Sum(x => Convert.ToDecimal(x.mst));
					data.mst = Convert.ToInt32(msta);
					var mobca = costtotal.Sum(x => Convert.ToDecimal(x.mobc));
					data.mobc = Convert.ToInt32(mobca);
					var mothera = costtotal.Sum(x => Convert.ToDecimal(x.mother));
					data.mother = Convert.ToInt32(mothera);
					var fsca = costtotal.Sum(x => Convert.ToDecimal(x.fsc));
					data.fsc = Convert.ToInt32(fsca);
					var fsta = costtotal.Sum(x => Convert.ToDecimal(x.fst));
					data.fst = Convert.ToInt32(fsta);
					var fobca = costtotal.Sum(x => Convert.ToDecimal(x.fobc));
					data.fobc = Convert.ToInt32(fobca);
					var fothera = costtotal.Sum(x => Convert.ToDecimal(x.fother));
					data.fother = Convert.ToInt32(fothera);
					var findactivity = costtotal.GroupBy(x => x.activity).ToList();
					var activity_value = "";
					for (int j = 0; j < findactivity.Count; j++)
					{
						var activity = findactivity[j].Key;

						activity_value += activity + " , ";


					}
					data.activity_name = activity_value;
					all_data.Add(data);
				}


				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult demand_report_state()
		{
			var Year = "";
			var Month = "";
			var State = "";
			if (Session["gstate"] != null)
			{
				State = Session["gstate"].ToString();
			}
			else
			{
				State = "0";
			}
			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();

				List<total_demand> all_data = new List<total_demand>();
				List<incentive_demand> ddetails = new List<incentive_demand>();

				if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State).OrderByDescending(x => x.order_by_month).ToList();

				}

				for (int i = 0; i < dist.Count; i++)
				{
					total_demand data = new total_demand();
					string district = dist[i].Key;
					data.statename = district;
					var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.district_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
					data.totalgp = gp.Count;
					var costtotal = ddetails.Where(x => x.district == district).ToList();
					data.totalgp_count = costtotal.GroupBy(x => x.gp).Count();
					var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
					data.cost = Convert.ToDouble(costtotalaa);
					var area_underaa = costtotal.Sum(x => Convert.ToDouble(x.area_under));
					data.area_under = Convert.ToDouble(area_underaa);
					var total_beneficiaryaa = costtotal.Sum(x => Convert.ToDecimal(x.total_beneficiary));
					data.total_beneficiary = Convert.ToInt32(total_beneficiaryaa);
					var msca = costtotal.Sum(x => Convert.ToDecimal(x.msc));
					data.msc = Convert.ToInt32(msca);
					var msta = costtotal.Sum(x => Convert.ToDecimal(x.mst));
					data.mst = Convert.ToInt32(msta);
					var mobca = costtotal.Sum(x => Convert.ToDecimal(x.mobc));
					data.mobc = Convert.ToInt32(mobca);
					var mothera = costtotal.Sum(x => Convert.ToDecimal(x.mother));
					data.mother = Convert.ToInt32(mothera);
					var fsca = costtotal.Sum(x => Convert.ToDecimal(x.fsc));
					data.fsc = Convert.ToInt32(fsca);
					var fsta = costtotal.Sum(x => Convert.ToDecimal(x.fst));
					data.fst = Convert.ToInt32(fsta);
					var fobca = costtotal.Sum(x => Convert.ToDecimal(x.fobc));
					data.fobc = Convert.ToInt32(fobca);
					var fothera = costtotal.Sum(x => Convert.ToDecimal(x.fother));
					data.fother = Convert.ToInt32(fothera);
					var findactivity = costtotal.GroupBy(x => x.activity).ToList();
					var activity_value = "";
					for (int j = 0; j < findactivity.Count; j++)
					{
						var activity = findactivity[j].Key;

						activity_value += activity + " , ";


					}
					data.activity_name = activity_value;
					all_data.Add(data);
				}


				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult demand_report_district()
		{
			var Year = "";
			var Month = "";
			var State = "";

			if (Session["gstate"] != null)
			{
				State = Session["gstate"].ToString();
			}
			else
			{
				State = "0";
			}

			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();



				List<total_demand> all_data = new List<total_demand>();
				List<incentive_demand> ddetails = new List<incentive_demand>();

				if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_demand.Where(x => x.state == State).OrderByDescending(x => x.order_by_month).ToList();

				}
				for (int j = 0; j < dist.Count; j++)
				{
					string dist_name = dist[j].Key;
					var block = ABE.obj_abhy_block_gp_area_info.Where(x => x.district_name == dist_name).Distinct().GroupBy(x => x.block_name).ToList();

					for (int i = 0; i < block.Count; i++)
					{

						total_demand data = new total_demand();
						string district = block[i].Key;
						data.statename = district;
						var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
						//var district_name = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).FirstOrDefault();
						//var disttt = district_name.district_name;
						data.dist_name = dist_name;
						data.totalgp = gp.Count;
						var costtotal = ddetails.Where(x => x.block == district).ToList();
						data.totalgp_count = costtotal.GroupBy(x => x.gp).Count();
						var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
						data.cost = Convert.ToDouble(costtotalaa);
						var area_underaa = costtotal.Sum(x => Convert.ToDouble(x.area_under));
						data.area_under = Convert.ToDouble(area_underaa);
						var total_beneficiaryaa = costtotal.Sum(x => Convert.ToDecimal(x.total_beneficiary));
						data.total_beneficiary = Convert.ToInt32(total_beneficiaryaa);
						var msca = costtotal.Sum(x => Convert.ToDecimal(x.msc));
						data.msc = Convert.ToInt32(msca);
						var msta = costtotal.Sum(x => Convert.ToDecimal(x.mst));
						data.mst = Convert.ToInt32(msta);
						var mobca = costtotal.Sum(x => Convert.ToDecimal(x.mobc));
						data.mobc = Convert.ToInt32(mobca);
						var mothera = costtotal.Sum(x => Convert.ToDecimal(x.mother));
						data.mother = Convert.ToInt32(mothera);
						var fsca = costtotal.Sum(x => Convert.ToDecimal(x.fsc));
						data.fsc = Convert.ToInt32(fsca);
						var fsta = costtotal.Sum(x => Convert.ToDecimal(x.fst));
						data.fst = Convert.ToInt32(fsta);
						var fobca = costtotal.Sum(x => Convert.ToDecimal(x.fobc));
						data.fobc = Convert.ToInt32(fobca);
						var fothera = costtotal.Sum(x => Convert.ToDecimal(x.fother));
						data.fother = Convert.ToInt32(fothera);
						var findactivity = costtotal.GroupBy(x => x.activity).ToList();

						var activity_value = "";
						for (int k = 0; k < findactivity.Count; k++)
						{
							var activity = findactivity[k].Key;

							activity_value += activity + " , ";

						}
						data.activity_name = activity_value;
						all_data.Add(data);
					}
				}


				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult suppy_report()
		{
			var Year = "";
			var Month = "";
			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
				int[] gps_count = { 1873, 1647, 1199, 670, 1133, 1132, 549 };
				List<total_supply> all_data = new List<total_supply>();
				List<incentive_supply> ddetails = new List<incentive_supply>();

				if (Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else
				{
					ddetails = ABE.obj_incentive_supply.OrderByDescending(x => x.order_by_month).ToList();

				}

				for (int i = 0; i < states.Length; i++)
				{
					total_supply data = new total_supply();

					string state = states[i];
					data.statename = state;
					data.totalgp = gps_count[i];
					var costtotal = ddetails.Where(x => x.state == state).ToList();
					data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
					data.no_of_structure = costtotal.Count;
					data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
					//var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
					var costtotalaa = costtotal.Sum(x =>
					{
						if (double.TryParse(x.cost, out double areaValue))
						{
							return areaValue;
						}
						else
						{
							return 0.0; // Default value if conversion fails
						}
					});
					data.cost = Convert.ToDouble(costtotalaa);
					var typea = costtotal.Where(x => x.typeofwork == "New").ToList();
					data.type_new = typea.Count;
					var typeb = costtotal.Where(x => x.typeofwork == "Renovation").ToList();
					data.type_rew = typeb.Count;
					var findactivity = costtotal.GroupBy(x => x.nameofstructure).ToList();

					var activity_value = "";
					for (int j = 0; j < findactivity.Count; j++)
					{
						var activity = findactivity[j].Key;

						activity_value += activity + " , ";

					}
					data.activity_name = activity_value;

					all_data.Add(data);
				}


				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult supply_report_state()
		{
			var Year = "";
			var Month = "";
			var State = "";
			if (Session["gstate"] != null)
			{
				State = Session["gstate"].ToString();
			}
			else
			{
				State = "0";
			}
			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();

				List<total_supply> all_data = new List<total_supply>();
				List<incentive_supply> ddetails = new List<incentive_supply>();

				if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State).OrderByDescending(x => x.order_by_month).ToList();

				}

				for (int i = 0; i < dist.Count; i++)
				{
					total_supply data = new total_supply();
					string district = dist[i].Key;
					data.statename = district;
					var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.district_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
					data.totalgp = gp.Count;
					var costtotal = ddetails.Where(x => x.dist == district).ToList();
					data.no_of_structure = costtotal.Count;
					data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
					//var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
					var costtotalaa = costtotal.Sum(x =>
					{
						if (double.TryParse(x.cost, out double areaValue))
						{
							return areaValue;
						}
						else
						{
							return 0.0; // Default value if conversion fails
						}
					});
					data.cost = Convert.ToDouble(costtotalaa);
					var typea = costtotal.Where(x => x.typeofwork == "New").ToList();
					data.type_new = typea.Count;
					var typeb = costtotal.Where(x => x.typeofwork == "Renovation").ToList();
					data.type_rew = typeb.Count;
					var findactivity = costtotal.GroupBy(x => x.nameofstructure).ToList();

					var activity_value = "";
					for (int j = 0; j < findactivity.Count; j++)
					{
						var activity = findactivity[j].Key;

						activity_value += activity + " , ";

					}
					data.activity_name = activity_value;

					all_data.Add(data);
				}


				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult supply_report_district()
		{
			var Year = "";
			var Month = "";
			var State = "";

			if (Session["gstate"] != null)
			{
				State = Session["gstate"].ToString();
			}
			else
			{
				State = "0";
			}

			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();


				List<total_supply> all_data = new List<total_supply>();
				List<incentive_supply> ddetails = new List<incentive_supply>();

				if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_supply.Where(x => x.state == State).OrderByDescending(x => x.order_by_month).ToList();

				}
				for (int k = 0; k < dist.Count; k++)
				{
					string dist_name = dist[k].Key;
					var block = ABE.obj_abhy_block_gp_area_info.Where(x => x.district_name == dist_name).Distinct().GroupBy(x => x.block_name).ToList();

					for (int i = 0; i < block.Count; i++)
					{
						total_supply data = new total_supply();
						string district = block[i].Key;
						data.statename = district;
						var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
						//var district_name = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).FirstOrDefault();
						//var disttt = district_name.district_name;
						data.dist_name = dist_name;
						data.totalgp = gp.Count;
						var costtotal = ddetails.Where(x => x.block == district).ToList();
						data.no_of_structure = costtotal.Count;
						data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
						//var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
						var costtotalaa = costtotal.Sum(x =>
						{
							if (double.TryParse(x.cost, out double areaValue))
							{
								return areaValue;
							}
							else
							{
								return 0.0; // Default value if conversion fails
							}
						});
						data.cost = Convert.ToDouble(costtotalaa);
						var typea = costtotal.Where(x => x.typeofwork == "New").ToList();
						data.type_new = typea.Count;
						var typeb = costtotal.Where(x => x.typeofwork == "Renovation").ToList();
						data.type_rew = typeb.Count;
						var findactivity = costtotal.GroupBy(x => x.nameofstructure).ToList();

						var activity_value = "";
						for (int j = 0; j < findactivity.Count; j++)
						{
							var activity = findactivity[j].Key;

							activity_value += activity + " , ";

						}
						data.activity_name = activity_value;

						all_data.Add(data);
					}

				}

				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult other_report()
		{
			var Year = "";
			var Month = "";
			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
				int[] gps_count = { 1873, 1647, 1199, 670, 1133, 1132, 549 };
				List<total_supply> all_data = new List<total_supply>();
				List<incentive_other> ddetails = new List<incentive_other>();

				if (Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else
				{
					ddetails = ABE.obj_incentive_other.OrderByDescending(x => x.order_by_month).ToList();

				}

				for (int i = 0; i < states.Length; i++)
				{
					total_supply data = new total_supply();

					string state = states[i];
					data.statename = state;
					data.totalgp = gps_count[i];
					var costtotal = ddetails.Where(x => x.state == state).ToList();
					data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
					data.no_of_structure = costtotal.Count;
					data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
					var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
					data.cost = Convert.ToDouble(costtotalaa);
					var typea = costtotal.Where(x => x.typeofwork == "New").ToList();
					data.type_new = typea.Count;
					var typeb = costtotal.Where(x => x.typeofwork == "Renovation").ToList();
					data.type_rew = typeb.Count;
					var findactivity = costtotal.GroupBy(x => x.nameofstructure).ToList();

					var activity_value = "";
					for (int j = 0; j < findactivity.Count; j++)
					{
						var activity = findactivity[j].Key;

						activity_value += activity + " , ";

					}
					data.activity_name = activity_value;
					all_data.Add(data);
				}


				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult other_report_state()
		{
			var Year = "";
			var Month = "";
			var State = "";
			if (Session["gstate"] != null)
			{
				State = Session["gstate"].ToString();
			}
			else
			{
				State = "0";
			}
			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();

				List<total_supply> all_data = new List<total_supply>();
				List<incentive_other> ddetails = new List<incentive_other>();

				if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State).OrderByDescending(x => x.order_by_month).ToList();

				}

				for (int i = 0; i < dist.Count; i++)
				{
					total_supply data = new total_supply();
					string district = dist[i].Key;
					data.statename = district;
					var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.district_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
					data.totalgp = gp.Count;
					var costtotal = ddetails.Where(x => x.dist == district).ToList();
					data.no_of_structure = costtotal.Count;
					data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
					var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
					data.cost = Convert.ToDouble(costtotalaa);
					var typea = costtotal.Where(x => x.typeofwork == "New").ToList();
					data.type_new = typea.Count;
					var typeb = costtotal.Where(x => x.typeofwork == "Renovation").ToList();
					data.type_rew = typeb.Count;
					var findactivity = costtotal.GroupBy(x => x.nameofstructure).ToList();

					var activity_value = "";
					for (int j = 0; j < findactivity.Count; j++)
					{
						var activity = findactivity[j].Key;

						activity_value += activity + " , ";

					}
					data.activity_name = activity_value;

					all_data.Add(data);
				}


				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}

		[HttpPost]
		public ActionResult other_report_district()
		{
			var Year = "";
			var Month = "";
			var State = "";

			if (Session["gstate"] != null)
			{
				State = Session["gstate"].ToString();
			}
			else
			{
				State = "0";
			}

			if (Session["year"] != null)
			{
				Year = Session["year"].ToString();
			}
			else
			{
				Year = "0";
			}
			if (Session["month"] != null)
			{
				Month = Session["month"].ToString();
			}
			else
			{

				Month = "0";
			}

			try
			{
				var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == State).Distinct().GroupBy(x => x.district_name).ToList();


				List<total_supply> all_data = new List<total_supply>();
				List<incentive_other> ddetails = new List<incentive_other>();

				if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != "0" && Month != "" && Month != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == Year && x.month == Month).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.order_by_month).ToList();

				}
				else if (State != "0" && State != "" && State != null)
				{
					ddetails = ABE.obj_incentive_other.Where(x => x.state == State).OrderByDescending(x => x.order_by_month).ToList();

				}

				for (int k = 0; k < dist.Count; k++)
				{
					string dist_name = dist[k].Key;
					var block = ABE.obj_abhy_block_gp_area_info.Where(x => x.district_name == dist_name).Distinct().GroupBy(x => x.block_name).ToList();

					for (int i = 0; i < block.Count; i++)
					{
						total_supply data = new total_supply();
						string district = block[i].Key;
						data.statename = district;
						var gp = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).Distinct().GroupBy(x => x.gram_panchayat_name).ToList();
						//var district_name = ABE.obj_abhy_block_gp_area_info.Where(x => x.block_name == district).FirstOrDefault();
						//var disttt = district_name.district_name;
						data.dist_name = dist_name;
						data.totalgp = gp.Count;
						var costtotal = ddetails.Where(x => x.block == district).ToList();
						data.no_of_structure = costtotal.Count;
						data.totalgp_count = costtotal.GroupBy(x => x.gram).Count();
						var costtotalaa = costtotal.Sum(x => Convert.ToDouble(x.cost));
						data.cost = Convert.ToDouble(costtotalaa);
						var typea = costtotal.Where(x => x.typeofwork == "New").ToList();
						data.type_new = typea.Count;
						var typeb = costtotal.Where(x => x.typeofwork == "Renovation").ToList();
						data.type_rew = typeb.Count;
						var findactivity = costtotal.GroupBy(x => x.nameofstructure).ToList();

						var activity_value = "";
						for (int j = 0; j < findactivity.Count; j++)
						{
							var activity = findactivity[j].Key;

							activity_value += activity + " , ";

						}
						data.activity_name = activity_value;

						all_data.Add(data);
					}

				}
				var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
				jsonResult.MaxJsonLength = int.MaxValue;
				return jsonResult;

			}
			catch (Exception Ex)
			{
				return Json("Error", JsonRequestBehavior.AllowGet);
			}




		}
		[HttpPost]
		public ActionResult alldepartment_report()
		{
			if (Session["UserId"] != null)
			{
				try
				{
					var StateOfficer = Session["Officer"].ToString();

					if (StateOfficer == "State Level Nodal Officer")
					{
						var ss = Session["gstate"].ToString();

						string[] states = { ss };
						List<all_module_report> all_data = new List<all_module_report>();

						for (int i = 0; i < states.Length; i++)
						{
							all_module_report data = new all_module_report();

							string state = states[i];

							var demandside_data = ABE.obj_incentive_demand.Where(x => x.state == state).ToList();
							var supplyside_data = ABE.obj_incentive_supply.Where(x => x.state == state).ToList();
							var other_data = ABE.obj_incentive_other.Where(x => x.state == state).ToList();




							var demandcost = demandside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var supplycost = supplyside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var othercost = other_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});


							var demand_area = demandside_data.Sum(x => Convert.ToDouble(x.area_under));
							int supply_structure = supplyside_data.Count;
							int other_structure = other_data.Count;


							var demand_activity = demandside_data.GroupBy(x => x.activity).ToList();
							var demand_activity_value = "";
							foreach (var item in demand_activity)
							{
								var activity = item.Key;

								demand_activity_value += activity + " , ";
							}

							var supply_activity = supplyside_data.GroupBy(x => x.nameofstructure).ToList();

							var supply_activity_value = "";
							foreach (var item in supply_activity)
							{
								var activity = item.Key;

								supply_activity_value += activity + " , ";
							}

							var other_activity = other_data.GroupBy(x => x.nameofstructure).ToList();

							var other_activity_value = "";
							foreach (var item in other_activity)
							{
								var activity = item.Key;

								other_activity_value += activity + " , ";
							}

							data.statename = state;
							data.demand_cost = Convert.ToDouble(demandcost);
							data.supply_cost = Convert.ToDouble(supplycost);
							data.other_cost = Convert.ToDouble(othercost);
							data.demand_area = Convert.ToDouble(demand_area);
							data.supply_structure = supply_structure;
							data.other_structure = other_structure;
							data.demand_activity_value = demand_activity_value;
							data.supply_activity_value = supply_activity_value;
							data.other_activity_value = other_activity_value;


							all_data.Add(data);
						}


						var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
						jsonResult.MaxJsonLength = int.MaxValue;
						return jsonResult;
					}
					else
					{

						string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };

						List<all_module_report> all_data = new List<all_module_report>();

						for (int i = 0; i < states.Length; i++)
						{
							all_module_report data = new all_module_report();

							string state = states[i];

							var demandside_data = ABE.obj_incentive_demand.Where(x => x.state == state).ToList();
							var supplyside_data = ABE.obj_incentive_supply.Where(x => x.state == state).ToList();
							var other_data = ABE.obj_incentive_other.Where(x => x.state == state).ToList();


							var demandcost = demandside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var supplycost = supplyside_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});

							var othercost = other_data.Sum(x =>
							{
								if (double.TryParse(x.cost, out double areaValue))
								{
									return areaValue;
								}
								else
								{
									return 0.0; // Default value if conversion fails
								}
							});


							var demand_area = demandside_data.Sum(x => Convert.ToDouble(x.area_under));
							int supply_structure = supplyside_data.Count;
							int other_structure = other_data.Count;


							var demand_activity = demandside_data.GroupBy(x => x.activity).ToList();
							var demand_activity_value = "";
							foreach (var item in demand_activity)
							{
								var activity = item.Key;

								demand_activity_value += activity + " , ";
							}

							var supply_activity = supplyside_data.GroupBy(x => x.nameofstructure).ToList();

							var supply_activity_value = "";
							foreach (var item in supply_activity)
							{
								var activity = item.Key;

								supply_activity_value += activity + " , ";
							}

							var other_activity = other_data.GroupBy(x => x.nameofstructure).ToList();

							var other_activity_value = "";
							foreach (var item in other_activity)
							{
								var activity = item.Key;

								other_activity_value += activity + " , ";
							}

							data.statename = state;
							data.demand_cost = Convert.ToDouble(demandcost);
							data.supply_cost = Convert.ToDouble(supplycost);
							data.other_cost = Convert.ToDouble(othercost);
							data.demand_area = Convert.ToDouble(demand_area);
							data.supply_structure = supply_structure;
							data.other_structure = other_structure;
							data.demand_activity_value = demand_activity_value;
							data.supply_activity_value = supply_activity_value;
							data.other_activity_value = other_activity_value;


							all_data.Add(data);
						}


						var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
						jsonResult.MaxJsonLength = int.MaxValue;
						return jsonResult;
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


	}
}