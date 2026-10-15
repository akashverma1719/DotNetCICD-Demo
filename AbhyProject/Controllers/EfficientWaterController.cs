using AbhyProject.Classes;
using AbhyProject.Models;
using AbhyProject.Utility;
using ClosedXML.Excel;
using DocumentFormat.OpenXml.Drawing.Charts;
using DocumentFormat.OpenXml.Spreadsheet;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Information;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;
using OpenXmlPowerTools;
using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.UI.WebControls;
using System.Data;
using System.Drawing;
using System.Runtime.InteropServices.ComTypes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using AbhyProject.Excel;
using System.IO;
using ClosedXML.Excel;
using System.Data;
using System.ComponentModel;
using System.Text.RegularExpressions;
using System.Text;
using System.Security.Cryptography;
using Newtonsoft.Json;
using System.Configuration;
using AbhyProject.Classes;
using System.Globalization;
using AbhyProject.Utility;
using System.Drawing;
using System.Runtime.InteropServices.ComTypes;

namespace AbhyProject.Controllers
{
    public class EfficientWaterController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: EfficientWater
        public ActionResult EfficientWater()
        {
            //ViewBag.SchemeList = ABE.obj_supply_funding_source.ToList();
            return View();
        }
        public ActionResult EfficientWater_report()
        {

            return View();
        }

        public ActionResult Electricity_feeder()
        {

            return View();
        }
        public ActionResult main_page()
        {

            return View();
        }
        public ActionResult DLI4_Upload_Document()
        {
            return View();
        }
				public ActionResult admitted_claim()
	   {
		    return View();
	   }
		
		
        [HttpPost]
        public ActionResult DropdownInfoDli4()
        {
            //string state = string.Empty;

            try
            {
                var slist = ABE.obj_abhy_block_gp_area_info.ToList();

                var HouseHolddata = slist;
                var jsonresults30 = Json(HouseHolddata, JsonRequestBehavior.AllowGet);
                jsonresults30.MaxJsonLength = int.MaxValue;
                return jsonresults30;

            }
            catch (Exception ex)
            {
                return Json("OK");
            }


        }

        [HttpPost]
        public ActionResult save_irrigation_system(List<dli4_efficient_irrigation_system> Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var state = Data[0].state;
                    var district = Data[0].district;
                    var block = Data[0].block;
                    var gram = Data[0].gram;
                    var year = Data[0].year;
                    var fy_phase = Data[0].fy_phase;
                    dli4_efficient_irrigation_system ddetails = new dli4_efficient_irrigation_system();
                    if (year == "2022-23")
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).FirstOrDefault();
                    }
                    else
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).FirstOrDefault();
                    }
                    //total list
                    if (ddetails != null)
                    {
                        ddetails.sprinkler_convergence = Data[0].sprinkler_convergence;
                        ddetails.drip_convergence = Data[0].drip_convergence;
                        ddetails.pipeline_convergence = Data[0].pipeline_convergence;
                        ddetails.total_convergence = Data[0].total_convergence;
                        ddetails.sprinkler_incentive = Data[0].sprinkler_incentive;
                        ddetails.drip_incentive = Data[0].drip_incentive;
                        ddetails.pipeline_incentive = Data[0].pipeline_incentive;
                        ddetails.total_incentive = Data[0].total_incentive;
                        ddetails.sprinkler_financing = Data[0].sprinkler_financing;
                        ddetails.drip_financing = Data[0].drip_financing;
                        ddetails.pipeline_financing = Data[0].pipeline_financing;
                        ddetails.total_financing = Data[0].total_financing;
                        ddetails.sprinkler_total = Data[0].sprinkler_total;
                        ddetails.drip_total = Data[0].drip_total;
                        ddetails.pipeline_total = Data[0].pipeline_total;
                        ddetails.all_irrigation_total = Data[0].all_irrigation_total;
                        ddetails.userid = Session["Email"].ToString();
                        ddetails.entry_date = DateTime.Today.ToString("dd-MM-yyyy");
                        ddetails.approve = "At DPMU";

                        ddetails.tot_spr_ben = Data[0].tot_spr_ben;
                        //ddetails.sc_spr_ben = Data[0].sc_spr_ben;
                        //ddetails.st_spr_ben = Data[0].st_spr_ben;
                        //ddetails.obc_spr_ben = Data[0].obc_spr_ben;
                        //ddetails.gen_spr_ben = Data[0].gen_spr_ben;

                        ddetails.tot_drip_ben = Data[0].tot_drip_ben;
                        //ddetails.sc_drip_ben = Data[0].sc_drip_ben;
                        //ddetails.st_drip_ben = Data[0].st_drip_ben;
                        //ddetails.obc_drip_ben = Data[0].obc_drip_ben;
                        //ddetails.gen_drip_ben = Data[0].gen_drip_ben;

                        ddetails.tot_pipe_ben = Data[0].tot_pipe_ben;
                        //ddetails.sc_pipe_ben = Data[0].sc_pipe_ben;
                        //ddetails.st_pipe_ben = Data[0].st_pipe_ben;
                        //ddetails.obc_pipe_ben = Data[0].obc_pipe_ben;
                        //ddetails.gen_pipe_ben = Data[0].gen_pipe_ben;
                        ABE.Entry(ddetails).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Updated Successfully", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        Data[0].userid = Session["Email"].ToString();
                        Data[0].entry_date = DateTime.Today.ToString("dd-MM-yyyy");
                        ABE.obj_dli4_efficient_irrigation_system.Add(Data[0]);
                        ABE.SaveChanges();
                        return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
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
        public ActionResult Data_DLI4_report(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var state = result.statename;
                    var district = result.districtname;
                    var block = result.blockname;
                    var gram = result.gpname;
                    var year = result.year;
                    var fy_phase = result.fy_phase;
                    var month = "0";

                    List<dli4_efficient_irrigation_system> ddetails = new List<dli4_efficient_irrigation_system>();
                    if (year == "2022-23")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year).ToList();//total list
                        }
                    }
                    else
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }

                    }
                    if (ddetails.Count != 0)
                    {
                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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

        public ActionResult DLI4_excel_a(string state, string district, string block, string gram, string year, string fy_phase)
        {



            var month = "0";
            List<dli4_efficient_irrigation_system> ddetails = new List<dli4_efficient_irrigation_system>();

            if (state != "ALL")
            {
                if (year != "2023-24")
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year).ToList();//total list
                    }
                }
                else
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                }
            }
            else
            {
                ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.year == year && x.fy_phase == fy_phase).ToList();//total list
            }


            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("DLI 4");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                worksheet.Cell(currentRow, 5).Value = "Financial Year";
                worksheet.Cell(currentRow, 6).Value = "Phase";

                //Convergence column merge
                worksheet.Range(currentRow, 7, currentRow, 10).Merge();
                worksheet.Cell(currentRow, 7).Value = "Convergence";

                worksheet.Cell(currentRow + 1, 7).Value = "Area under Sprinkler Irrigation";
                worksheet.Cell(currentRow + 1, 8).Value = "Area under Drip Irrigation";
                worksheet.Cell(currentRow + 1, 9).Value = "Irrigation through Pipelines";
                worksheet.Cell(currentRow + 1, 10).Value = "Total";


                //Incentive Fund Column Merge
                worksheet.Range(currentRow, 11, currentRow, 14).Merge();
                worksheet.Cell(currentRow, 11).Value = "Incentive fund";

                worksheet.Cell(currentRow + 1, 11).Value = "Area under Sprinkler Irrigation";
                worksheet.Cell(currentRow + 1, 12).Value = "Area under Drip Irrigation";
                worksheet.Cell(currentRow + 1, 13).Value = "Irrigation through Pipelines";
                worksheet.Cell(currentRow + 1, 14).Value = "Total";

                //worksheet.Cell(currentRow, 11).Value = "Area under Sprinkler Irrigation(Incentive fund)";
                //worksheet.Cell(currentRow, 12).Value = "Area under Drip Irrigation(Incentive fund)";
                //worksheet.Cell(currentRow, 13).Value = "Irrigation through Pipelines(Incentive fund)";
                //worksheet.Cell(currentRow, 14).Value = "Total";

                //Financing column merge
                worksheet.Range(currentRow, 15, currentRow, 18).Merge();
                worksheet.Cell(currentRow, 15).Value = "Self/ private financing";

                worksheet.Cell(currentRow + 1, 15).Value = "Area under Sprinkler Irrigation";
                worksheet.Cell(currentRow + 1, 16).Value = "Area under Drip Irrigation";
                worksheet.Cell(currentRow + 1, 17).Value = "Irrigation through Pipelines";
                worksheet.Cell(currentRow + 1, 18).Value = "Total";

                //worksheet.Cell(currentRow, 15).Value = "Area under Sprinkler Irrigation(self/ private financing)";
                //worksheet.Cell(currentRow, 16).Value = "Area under Drip Irrigation(self/ private financing)";
                //worksheet.Cell(currentRow, 17).Value = "Irrigation through Pipelines(self/ private financing)";
                //worksheet.Cell(currentRow, 18).Value = "Total";
                worksheet.Cell(currentRow, 19).Value = "Total";
                worksheet.Cell(currentRow, 20).Value = "Total Sprinkler Beneficiary";
                worksheet.Cell(currentRow, 21).Value = "Total Drip Beneficiary";
                worksheet.Cell(currentRow, 22).Value = "Total Pipelines Beneficiary";
                worksheet.Cell(currentRow, 23).Value = "All Total Beneficiary";
                worksheet.Cell(currentRow, 24).Value = "SPMU Approval Status";
                worksheet.Cell(currentRow, 25).Value = "Reject Remark";

                for (int col = 1; col <= 25; col++)
                {
                    worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                    worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                }
                for (int col = 7; col <= 18; col++)
                {
                    worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                    worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                }

                currentRow = 2;
                if (ddetails.Count != 0)
                {
                    decimal sprcon = 0, drpcon = 0, pipcon = 0, ttlcon = 0, sprinc = 0, drpinc = 0, pipinc = 0, ttlinc = 0, sprfin = 0, drpfin = 0, pipfin = 0, ttlfin = 0, irrttl = 0, totspr = 0, totdrp = 0, totpip = 0;
                    decimal totalAllFinal = 0;

                    for (int i = 0; i < ddetails.Count; i++)
                    {
                        decimal totalAll = 0;
                        var approval = ddetails[i].approve;
                        totalAll += Convert.ToDecimal(ddetails[i].tot_spr_ben) + Convert.ToDecimal(ddetails[i].tot_drip_ben) + Convert.ToDecimal(ddetails[i].tot_pipe_ben);


                        if (approval == "State")
                        {
                            sprcon += Convert.ToDecimal(ddetails[i].sprinkler_convergence);
                            drpcon += Convert.ToDecimal(ddetails[i].drip_convergence);
                            pipcon += Convert.ToDecimal(ddetails[i].pipeline_convergence);
                            ttlcon += Convert.ToDecimal(ddetails[i].total_convergence);
                            sprinc += Convert.ToDecimal(ddetails[i].sprinkler_incentive);
                            drpinc += Convert.ToDecimal(ddetails[i].drip_incentive);
                            pipinc += Convert.ToDecimal(ddetails[i].pipeline_incentive);
                            ttlinc += Convert.ToDecimal(ddetails[i].total_incentive);
                            sprfin += Convert.ToDecimal(ddetails[i].sprinkler_financing);
                            drpfin += Convert.ToDecimal(ddetails[i].drip_financing);
                            pipfin += Convert.ToDecimal(ddetails[i].pipeline_financing);
                            ttlfin += Convert.ToDecimal(ddetails[i].total_financing);
                            irrttl += Convert.ToDecimal(ddetails[i].all_irrigation_total);
                            totspr += Convert.ToDecimal(ddetails[i].tot_spr_ben);
                            totdrp += Convert.ToDecimal(ddetails[i].tot_drip_ben);
                            totpip += Convert.ToDecimal(ddetails[i].tot_pipe_ben);
                            totalAllFinal += Convert.ToDecimal(ddetails[i].tot_spr_ben) + Convert.ToDecimal(ddetails[i].tot_drip_ben) + Convert.ToDecimal(ddetails[i].tot_pipe_ben);

                            approval = "Approved";

                        }
                        else if (approval == "Dist")
                        {
                            sprcon += Convert.ToDecimal(ddetails[i].sprinkler_convergence);
                            drpcon += Convert.ToDecimal(ddetails[i].drip_convergence);
                            pipcon += Convert.ToDecimal(ddetails[i].pipeline_convergence);
                            ttlcon += Convert.ToDecimal(ddetails[i].total_convergence);
                            sprinc += Convert.ToDecimal(ddetails[i].sprinkler_incentive);
                            drpinc += Convert.ToDecimal(ddetails[i].drip_incentive);
                            pipinc += Convert.ToDecimal(ddetails[i].pipeline_incentive);
                            ttlinc += Convert.ToDecimal(ddetails[i].total_incentive);
                            sprfin += Convert.ToDecimal(ddetails[i].sprinkler_financing);
                            drpfin += Convert.ToDecimal(ddetails[i].drip_financing);
                            pipfin += Convert.ToDecimal(ddetails[i].pipeline_financing);
                            ttlfin += Convert.ToDecimal(ddetails[i].total_financing);
                            irrttl += Convert.ToDecimal(ddetails[i].all_irrigation_total);
                            totspr += Convert.ToDecimal(ddetails[i].tot_spr_ben);
                            totdrp += Convert.ToDecimal(ddetails[i].tot_drip_ben);
                            totpip += Convert.ToDecimal(ddetails[i].tot_pipe_ben);
                            totalAllFinal += Convert.ToDecimal(ddetails[i].tot_spr_ben) + Convert.ToDecimal(ddetails[i].tot_drip_ben) + Convert.ToDecimal(ddetails[i].tot_pipe_ben);

                            approval = "Submitted To SPMU";

                        }
                        else if (approval == null)
                        {
                            approval = "At DPMU";

                        }
                        else if (approval == "Reject")
                        {
                            approval = "Rejected";

                        }
                        currentRow++;



                        worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
                        worksheet.Cell(currentRow, 2).Value = ddetails[i].district;
                        worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
                        worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                        worksheet.Cell(currentRow, 6).Value = ddetails[i].fy_phase;
                        worksheet.Cell(currentRow, 7).Value = ddetails[i].sprinkler_convergence;
                        worksheet.Cell(currentRow, 8).Value = ddetails[i].drip_convergence;
                        worksheet.Cell(currentRow, 9).Value = ddetails[i].pipeline_convergence;
                        worksheet.Cell(currentRow, 10).Value = ddetails[i].total_convergence;
                        worksheet.Cell(currentRow, 11).Value = ddetails[i].sprinkler_incentive;
                        worksheet.Cell(currentRow, 12).Value = ddetails[i].drip_incentive;
                        worksheet.Cell(currentRow, 13).Value = ddetails[i].pipeline_incentive;
                        worksheet.Cell(currentRow, 14).Value = ddetails[i].total_incentive;
                        worksheet.Cell(currentRow, 15).Value = ddetails[i].sprinkler_financing;
                        worksheet.Cell(currentRow, 16).Value = ddetails[i].drip_financing;
                        worksheet.Cell(currentRow, 17).Value = ddetails[i].pipeline_financing;
                        worksheet.Cell(currentRow, 18).Value = ddetails[i].total_financing;
                        worksheet.Cell(currentRow, 19).Value = ddetails[i].all_irrigation_total;
                        worksheet.Cell(currentRow, 20).Value = ddetails[i].tot_spr_ben;
                        worksheet.Cell(currentRow, 21).Value = ddetails[i].tot_drip_ben;
                        worksheet.Cell(currentRow, 22).Value = ddetails[i].tot_pipe_ben;
                        worksheet.Cell(currentRow, 23).Value = totalAll;
                        worksheet.Cell(currentRow, 24).Value = approval;
                        worksheet.Cell(currentRow, 25).Value = ddetails[i].reject;

                        for (int j = 1; j <= 23; j++)
                        {
                            worksheet.Cell(currentRow, j).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                        }

                        int lastRow = currentRow;

                        if (lastRow == (ddetails.Count + 2))
                        {
                            currentRow++;
                            worksheet.Cell((lastRow + 1), 1).Value = "Total";
                            worksheet.Cell((lastRow + 1), 2).Value = "";
                            worksheet.Cell((lastRow + 1), 3).Value = "";
                            worksheet.Cell((lastRow + 1), 4).Value = "";
                            worksheet.Cell((lastRow + 1), 5).Value = "";
                            worksheet.Cell((lastRow + 1), 6).Value = "";
                            worksheet.Cell((lastRow + 1), 7).Value = sprcon;
                            worksheet.Cell((lastRow + 1), 8).Value = drpcon;
                            worksheet.Cell((lastRow + 1), 9).Value = pipcon;
                            worksheet.Cell((lastRow + 1), 10).Value = ttlcon;
                            worksheet.Cell((lastRow + 1), 11).Value = sprinc;
                            worksheet.Cell((lastRow + 1), 12).Value = drpinc;
                            worksheet.Cell((lastRow + 1), 13).Value = pipinc;
                            worksheet.Cell((lastRow + 1), 14).Value = ttlinc;
                            worksheet.Cell((lastRow + 1), 15).Value = sprfin;
                            worksheet.Cell((lastRow + 1), 16).Value = drpfin;
                            worksheet.Cell((lastRow + 1), 17).Value = pipfin;
                            worksheet.Cell((lastRow + 1), 18).Value = ttlfin;
                            worksheet.Cell((lastRow + 1), 19).Value = irrttl;
                            worksheet.Cell((lastRow + 1), 20).Value = totspr;
                            worksheet.Cell((lastRow + 1), 21).Value = totdrp;
                            worksheet.Cell((lastRow + 1), 22).Value = totpip;
                            worksheet.Cell((lastRow + 1), 23).Value = totalAllFinal;
                            worksheet.Cell((lastRow + 1), 24).Value = "";
                            worksheet.Cell((lastRow + 1), 25).Value = "";

                            for (int k = 1; k <= 25; k++)
                            {
                                worksheet.Cell(currentRow, k).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                            }
                        }
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
                    worksheet.Cell(currentRow, 13).Value = "";





                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "DLI4 Increase in Area (in Ha) with Efficient Irrigation System .xlsx");
                }
            }

        }
        public ActionResult DLI4_partialapproved_excel_a(string state, string district, string block, string gram, string year, string fy_phase)
        {

            var month = "0";
            List<dli4_efficient_irrigation_system> ddetails = new List<dli4_efficient_irrigation_system>();

            if (state != "ALL")
            {
                if (year != "2023-24")
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                }
                else
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                }
            }
            else
            {
                ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
            }


            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("DLI 4");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                worksheet.Cell(currentRow, 5).Value = "Financial Year";
                worksheet.Cell(currentRow, 6).Value = "Phase";

                ////Convergence column merge
                worksheet.Range(currentRow, 7, currentRow, 10).Merge();
                worksheet.Cell(currentRow, 7).Value = "Convergence";

                worksheet.Cell(currentRow + 1, 7).Value = "Area under Sprinkler Irrigation";
                worksheet.Cell(currentRow + 1, 8).Value = "Area under Drip Irrigation";
                worksheet.Cell(currentRow + 1, 9).Value = "Irrigation through Pipelines";
                worksheet.Cell(currentRow + 1, 10).Value = "Total";

                //Incentive Fund Column Merge
                worksheet.Range(currentRow, 11, currentRow, 14).Merge();
                worksheet.Cell(currentRow, 11).Value = "Incentive fund";

                worksheet.Cell(currentRow + 1, 11).Value = "Area under Sprinkler Irrigation";
                worksheet.Cell(currentRow + 1, 12).Value = "Area under Drip Irrigation";
                worksheet.Cell(currentRow + 1, 13).Value = "Irrigation through Pipelines";
                worksheet.Cell(currentRow + 1, 14).Value = "Total";


                //Financing column merge
                worksheet.Range(currentRow, 15, currentRow, 18).Merge();
                worksheet.Cell(currentRow, 15).Value = "Self/ private financing";

                worksheet.Cell(currentRow + 1, 15).Value = "Area under Sprinkler Irrigation";
                worksheet.Cell(currentRow + 1, 16).Value = "Area under Drip Irrigation";
                worksheet.Cell(currentRow + 1, 17).Value = "Irrigation through Pipelines";
                worksheet.Cell(currentRow + 1, 18).Value = "Total";


                worksheet.Cell(currentRow, 19).Value = "Total";
                worksheet.Cell(currentRow, 20).Value = "Total Sprinkler Beneficiary";
                worksheet.Cell(currentRow, 21).Value = "Total Drip Beneficiary";
                worksheet.Cell(currentRow, 22).Value = "Total Pipelines Beneficiary";
                worksheet.Cell(currentRow, 23).Value = "All Total Beneficiary";
                //worksheet.Cell(currentRow, 23).Value = "Reject Remark";
                worksheet.Cell(currentRow, 24).Value = "SPMU Approval Status";
                worksheet.Cell(currentRow, 25).Value = "NPMU Approval Status";
                worksheet.Cell(currentRow, 26).Value = "NPMU Remarks";
                worksheet.Cell(currentRow, 27).Value = "NPMU Admitted Claim";


                for (int col = 1; col <= 27; col++)
                {
                    worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                    worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                }
                for (int col = 7; col <= 18; col++)
                {
                    worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                    worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                }

                currentRow = 2;
                if (ddetails.Count != 0)
                {
                    decimal sprcon = 0, drpcon = 0, pipcon = 0, ttlcon = 0, sprinc = 0, drpinc = 0, pipinc = 0, ttlinc = 0, sprfin = 0, drpfin = 0, pipfin = 0, ttlfin = 0, irrttl = 0, totspr = 0, totdrp = 0, totpip = 0;
                    decimal totalAllFinal = 0;
                    for (int i = 0; i < ddetails.Count; i++)
                    {
                        decimal totalAll = 0;
                        var approval = ddetails[i].approve;
                        string partial_approve = string.Empty;
                        totalAll += Convert.ToDecimal(ddetails[i].tot_spr_ben) + Convert.ToDecimal(ddetails[i].tot_drip_ben) + Convert.ToDecimal(ddetails[i].tot_pipe_ben);


                        if (approval == "State")
                        {
                            sprcon += Convert.ToDecimal(ddetails[i].sprinkler_convergence);
                            drpcon += Convert.ToDecimal(ddetails[i].drip_convergence);
                            pipcon += Convert.ToDecimal(ddetails[i].pipeline_convergence);
                            ttlcon += Convert.ToDecimal(ddetails[i].total_convergence);
                            sprinc += Convert.ToDecimal(ddetails[i].sprinkler_incentive);
                            drpinc += Convert.ToDecimal(ddetails[i].drip_incentive);
                            pipinc += Convert.ToDecimal(ddetails[i].pipeline_incentive);
                            ttlinc += Convert.ToDecimal(ddetails[i].total_incentive);
                            sprfin += Convert.ToDecimal(ddetails[i].sprinkler_financing);
                            drpfin += Convert.ToDecimal(ddetails[i].drip_financing);
                            pipfin += Convert.ToDecimal(ddetails[i].pipeline_financing);
                            ttlfin += Convert.ToDecimal(ddetails[i].total_financing);
                            irrttl += Convert.ToDecimal(ddetails[i].all_irrigation_total);
                            totspr += Convert.ToDecimal(ddetails[i].tot_spr_ben);
                            totdrp += Convert.ToDecimal(ddetails[i].tot_drip_ben);
                            totpip += Convert.ToDecimal(ddetails[i].tot_pipe_ben);
                            totalAllFinal += Convert.ToDecimal(ddetails[i].tot_spr_ben) + Convert.ToDecimal(ddetails[i].tot_drip_ben) + Convert.ToDecimal(ddetails[i].tot_pipe_ben);

                            approval = "Approved";

                            if (!string.IsNullOrEmpty(ddetails[i].approval_status))
                            {
                                if (ddetails[i].approval_status == "A")
                                {
                                    partial_approve = "Approved";
                                }
                                if (ddetails[i].approval_status == "P")
                                {
                                    partial_approve = "Partial Approved";
                                }
                                if (ddetails[i].approval_status == "R")
                                {
                                    partial_approve = "Reject";
                                }

                            }

                        }
                        else if (approval == "Dist")
                        {
                            sprcon += Convert.ToDecimal(ddetails[i].sprinkler_convergence);
                            drpcon += Convert.ToDecimal(ddetails[i].drip_convergence);
                            pipcon += Convert.ToDecimal(ddetails[i].pipeline_convergence);
                            ttlcon += Convert.ToDecimal(ddetails[i].total_convergence);
                            sprinc += Convert.ToDecimal(ddetails[i].sprinkler_incentive);
                            drpinc += Convert.ToDecimal(ddetails[i].drip_incentive);
                            pipinc += Convert.ToDecimal(ddetails[i].pipeline_incentive);
                            ttlinc += Convert.ToDecimal(ddetails[i].total_incentive);
                            sprfin += Convert.ToDecimal(ddetails[i].sprinkler_financing);
                            drpfin += Convert.ToDecimal(ddetails[i].drip_financing);
                            pipfin += Convert.ToDecimal(ddetails[i].pipeline_financing);
                            ttlfin += Convert.ToDecimal(ddetails[i].total_financing);
                            irrttl += Convert.ToDecimal(ddetails[i].all_irrigation_total);
                            totspr += Convert.ToDecimal(ddetails[i].tot_spr_ben);
                            totdrp += Convert.ToDecimal(ddetails[i].tot_drip_ben);
                            totpip += Convert.ToDecimal(ddetails[i].tot_pipe_ben);
                            totalAllFinal += Convert.ToDecimal(ddetails[i].tot_spr_ben) + Convert.ToDecimal(ddetails[i].tot_drip_ben) + Convert.ToDecimal(ddetails[i].tot_pipe_ben);

                            approval = "Submitted To SPMU";

                        }
                        else if (approval == null)
                        {
                            approval = "At DPMU";

                        }
                        else if (approval == "Reject")
                        {
                            approval = "Rejected";

                        }
                        currentRow++;




                        worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
                        worksheet.Cell(currentRow, 2).Value = ddetails[i].district;
                        worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
                        worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                        worksheet.Cell(currentRow, 6).Value = ddetails[i].fy_phase;
                        worksheet.Cell(currentRow, 7).Value = ddetails[i].sprinkler_convergence;
                        worksheet.Cell(currentRow, 8).Value = ddetails[i].drip_convergence;
                        worksheet.Cell(currentRow, 9).Value = ddetails[i].pipeline_convergence;
                        worksheet.Cell(currentRow, 10).Value = ddetails[i].total_convergence;
                        worksheet.Cell(currentRow, 11).Value = ddetails[i].sprinkler_incentive;
                        worksheet.Cell(currentRow, 12).Value = ddetails[i].drip_incentive;
                        worksheet.Cell(currentRow, 13).Value = ddetails[i].pipeline_incentive;
                        worksheet.Cell(currentRow, 14).Value = ddetails[i].total_incentive;
                        worksheet.Cell(currentRow, 15).Value = ddetails[i].sprinkler_financing;
                        worksheet.Cell(currentRow, 16).Value = ddetails[i].drip_financing;
                        worksheet.Cell(currentRow, 17).Value = ddetails[i].pipeline_financing;
                        worksheet.Cell(currentRow, 18).Value = ddetails[i].total_financing;
                        worksheet.Cell(currentRow, 19).Value = ddetails[i].all_irrigation_total;
                        worksheet.Cell(currentRow, 20).Value = ddetails[i].tot_spr_ben;
                        worksheet.Cell(currentRow, 21).Value = ddetails[i].tot_drip_ben;
                        worksheet.Cell(currentRow, 22).Value = ddetails[i].tot_pipe_ben;
                        worksheet.Cell(currentRow, 23).Value = totalAll;
                        //worksheet.Cell(currentRow, 23).Value = ddetails[i].reject;
                        worksheet.Cell(currentRow, 24).Value = approval;
                        worksheet.Cell(currentRow, 25).Value = partial_approve;
                        worksheet.Cell(currentRow, 26).Value = ddetails[i].approval_remarks;
                        worksheet.Cell(currentRow, 27).Value = ddetails[i].TotalNpmuValue;

                        for (int j = 1; j <= 27; j++)
                        {
                            worksheet.Cell(currentRow, j).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                        }


                        int lastRow = currentRow;

                        if (lastRow == (ddetails.Count + 2))
                        {
                            currentRow++;
                            worksheet.Cell((lastRow + 1), 1).Value = "Total";
                            worksheet.Cell((lastRow + 1), 2).Value = "";
                            worksheet.Cell((lastRow + 1), 3).Value = "";
                            worksheet.Cell((lastRow + 1), 4).Value = "";
                            worksheet.Cell((lastRow + 1), 5).Value = "";
                            worksheet.Cell((lastRow + 1), 6).Value = "";
                            worksheet.Cell((lastRow + 1), 7).Value = sprcon;
                            worksheet.Cell((lastRow + 1), 8).Value = drpcon;
                            worksheet.Cell((lastRow + 1), 9).Value = pipcon;
                            worksheet.Cell((lastRow + 1), 10).Value = ttlcon;
                            worksheet.Cell((lastRow + 1), 11).Value = sprinc;
                            worksheet.Cell((lastRow + 1), 12).Value = drpinc;
                            worksheet.Cell((lastRow + 1), 13).Value = pipinc;
                            worksheet.Cell((lastRow + 1), 14).Value = ttlinc;
                            worksheet.Cell((lastRow + 1), 15).Value = sprfin;
                            worksheet.Cell((lastRow + 1), 16).Value = drpfin;
                            worksheet.Cell((lastRow + 1), 17).Value = pipfin;
                            worksheet.Cell((lastRow + 1), 18).Value = ttlfin;
                            worksheet.Cell((lastRow + 1), 19).Value = irrttl;
                            worksheet.Cell((lastRow + 1), 20).Value = totspr;
                            worksheet.Cell((lastRow + 1), 21).Value = totdrp;
                            worksheet.Cell((lastRow + 1), 22).Value = totpip;
                            worksheet.Cell((lastRow + 1), 23).Value = totalAllFinal;
                            worksheet.Cell((lastRow + 1), 24).Value = "";
                            worksheet.Cell((lastRow + 1), 25).Value = "";


                            for (int k = 1; k <= 25; k++)
                            {
                                worksheet.Cell(currentRow, k).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                            }


                        }
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
                    worksheet.Cell(currentRow, 13).Value = "";





                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "DLI4 Increase in Area (in Ha) with Efficient Irrigation System NPMU Admitted Claim .xlsx");
                }
            }

        }

        [HttpPost]
        public ActionResult Approve_RemarkUpdate(string ids, string remarks,
            decimal TotalNpmuValue,
            string type)
        {
            List<dli4_efficient_irrigation_system> dataList = new List<dli4_efficient_irrigation_system>();
            if (Session["UserId"] != null)
            {
                var idList = ids.Split(',');
                try
                {
                    if (idList.Length > 0)
                    {
                        if (type == "P" || type == "R")
                        {
                            if (type == "R")
                            {
                                TotalNpmuValue = 0;
                            }
                            dataList = ABE.obj_dli4_efficient_irrigation_system.Where(f => (idList.Contains(f.id.ToString()))).ToList();

                            dataList.ForEach(a =>
                            {

                                a.approval_remarks = remarks;
                                a.approval_status = type;
                                a.TotalNpmuValue = TotalNpmuValue;


                            });

                        }
                        else
                        {
                            dataList = ABE.obj_dli4_efficient_irrigation_system.Where(f => (idList.Contains(f.id.ToString()))).ToList();
                            dataList.ForEach(a =>
                            {
                                a.approval_remarks = remarks;
                                a.approval_status = type;
                                a.TotalNpmuValue = Convert.ToDecimal(a.all_irrigation_total);
                            });
                        }
                        dataList.ForEach(a =>
                        {
                            ABE.Entry(a).State = System.Data.Entity.EntityState.Modified;
                        });
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json(new { statusCode = 200, msg = "Data Updated successfully" });
                        }
                        else
                        {
                            return Json(new { statusCode = 101, msg = "Data not Updated!" });
                        }
                    }
                    else
                    {
                        return Json(new { statusCode = 102, msg = "Not Selected" });
                    }
                    //int[] IdsArr = ids.Split(',').Select(int.Parse).ToArray();
                    //foreach (var item in IdsArr)
                    //{

                    //    var ID = Convert.ToInt32(item);
                    //    var Data = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.id == ID).SingleOrDefault();
                    //    if (Data != null)
                    //    {

                    //        Data.id = ID;
                    //        Data.approval_status = type;
                    //        if (type == "P" || type == "R")
                    //        {
                    //            Data.approval_remarks = remarks;
                    //        }
                    //        else {
                    //            Data.approval_remarks = null;
                    //        }
                    //        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                    //        int A = ABE.SaveChanges();

                    //        if (A > 0)
                    //        {
                    //            return Json(new {statusCode=200,msg="Partial approved" });
                    //        }
                    //        else
                    //        {
                    //            return Json(new { statusCode = 101, msg = "Not approved" });
                    //        }
                    //    }
                    //    }
                }
                catch (Exception ex)
                {
                    return Json(new { statusCode = 400, msg = ex.Message });

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
                    var Data = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "State";
                        Data.reject = "";


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
        public ActionResult reject_data(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
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
        public ActionResult Data_DLI4_report2(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var state = result.statename;
                    var district = result.districtname;
                    var block = result.blockname;
                    var gram = result.gpname;
                    var year = result.year;
                    var fy_phase = result.fy_phase;
                    var month = "0";

                    List<dli4_area_with_crop_shifting> ddetails = new List<dli4_area_with_crop_shifting>();
                    if (year == "2022-23")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year).ToList();//total list
                        }
                    }
                    else
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                    }
                    if (ddetails.Count != 0)
                    {
                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult DLI4_excel_b(string state, string district, string block, string gram, string year, string fy_phase)
        {

            var month = "0";
            List<dli4_area_with_crop_shifting> ddetails = new List<dli4_area_with_crop_shifting>();


            if (state != "ALL")
            {
                if (year != "2023-24")
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year).ToList();//total list
                    }
                }
                else
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                }
            }
            else
            {
                ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.year == year && x.fy_phase == fy_phase).ToList();//total list
            }


            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("DLI 4");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                worksheet.Cell(currentRow, 5).Value = "Financial Year";
                worksheet.Cell(currentRow, 6).Value = "Phase";
                worksheet.Cell(currentRow, 7).Value = "Name of existing High water consuming Crop";
                //worksheet.Cell(currentRow, 8).Value = "Other Crop Name";
                worksheet.Cell(currentRow, 8).Value = "Name of replacing low water consuming crop";
                worksheet.Cell(currentRow, 9).Value = "Area with crop shifting (Ha)";
                worksheet.Cell(currentRow, 10).Value = "Name of Department";
                worksheet.Cell(currentRow, 11).Value = "Name of Scheme";
                worksheet.Cell(currentRow, 12).Value = "Other Scheme";
                worksheet.Cell(currentRow, 13).Value = "Total Beneficiary";
                worksheet.Cell(currentRow, 14).Value = "SPMU Approval Status";
                worksheet.Cell(currentRow, 15).Value = "Reject Remark";

                if (ddetails.Count != 0)
                {
                    decimal hghtolw = 0, totben = 0;
                    for (int i = 0; i < ddetails.Count; i++)
                    {
                        var approval = ddetails[i].approve;
                        if (approval == "State")
                        {
                            hghtolw += Convert.ToDecimal(ddetails[i].hightolow_wcc);
                            totben += Convert.ToDecimal(ddetails[i].total_ben);
                            approval = "Approved";

                        }
                        else if (approval == "Dist")
                        {
                            hghtolw += Convert.ToDecimal(ddetails[i].hightolow_wcc);
                            totben += Convert.ToDecimal(ddetails[i].total_ben);
                            approval = "Submitted To SPMU";

                        }
                        else if (approval == null)
                        {
                            approval = "At DPMU";

                        }
                        else if (approval == "Reject")
                        {
                            approval = "Rejected";

                        }


                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
                        worksheet.Cell(currentRow, 2).Value = ddetails[i].district;
                        worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
                        worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                        worksheet.Cell(currentRow, 6).Value = ddetails[i].fy_phase;
                        worksheet.Cell(currentRow, 7).Value = ddetails[i].existing_high_wcc;
                        //worksheet.Cell(currentRow, 8).Value = ddetails[i].other_crop;
                        worksheet.Cell(currentRow, 8).Value = ddetails[i].replacing_low_wcc;
                        worksheet.Cell(currentRow, 9).Value = ddetails[i].hightolow_wcc;
                        worksheet.Cell(currentRow, 10).Value = ddetails[i].department;
                        worksheet.Cell(currentRow, 11).Value = ddetails[i].scheme;
                        worksheet.Cell(currentRow, 12).Value = ddetails[i].other_scheme;
                        worksheet.Cell(currentRow, 13).Value = ddetails[i].total_ben;
                        worksheet.Cell(currentRow, 14).Value = approval;
                        worksheet.Cell(currentRow, 15).Value = ddetails[i].reject;

                        for (int j = 1; j <= 15; j++)
                        {
                            worksheet.Cell(currentRow, j).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                        }

                        int lastRow = currentRow;

                        if (lastRow == (ddetails.Count + 1))
                        {
                            currentRow++;
                            worksheet.Cell((lastRow + 1), 1).Value = "Total";
                            worksheet.Cell((lastRow + 1), 2).Value = "";
                            worksheet.Cell((lastRow + 1), 3).Value = "";
                            worksheet.Cell((lastRow + 1), 4).Value = "";
                            worksheet.Cell((lastRow + 1), 5).Value = "";
                            worksheet.Cell((lastRow + 1), 6).Value = "";
                            worksheet.Cell((lastRow + 1), 7).Value = "";
                            worksheet.Cell((lastRow + 1), 8).Value = "";
                            worksheet.Cell((lastRow + 1), 9).Value = hghtolw;
                            worksheet.Cell((lastRow + 1), 10).Value = "";
                            worksheet.Cell((lastRow + 1), 11).Value = "";
                            worksheet.Cell((lastRow + 1), 12).Value = "";
                            worksheet.Cell((lastRow + 1), 13).Value = totben;


                            for (int k = 1; k <= 12; k++)
                            {
                                worksheet.Cell(currentRow, k).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                            }
                        }

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
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "DLI4 Increase in area with shift in cropping pattern .xlsx");
                }
            }

        }
        public ActionResult DLI4_partialapproved_excel_b(string state, string district, string block, string gram, string year, string fy_phase)
        {

            var month = "0";
            List<dli4_area_with_crop_shifting> ddetails = new List<dli4_area_with_crop_shifting>();

            if (state != "ALL")
            {
                if (year != "2023-24")
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                }
                else
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                    }
                }
            }
            else
            {
                ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
            }


            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("DLI 4");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                worksheet.Cell(currentRow, 5).Value = "Financial Year";
                worksheet.Cell(currentRow, 6).Value = "Phase";
                worksheet.Cell(currentRow, 7).Value = "Name of existing High water consuming Crop";
                //worksheet.Cell(currentRow, 8).Value = "Other Crop Name";
                worksheet.Cell(currentRow, 8).Value = "Name of replacing low water consuming crop";
                worksheet.Cell(currentRow, 9).Value = "Area with crop shifting (Ha)";
                worksheet.Cell(currentRow, 10).Value = "Name of Department";
                worksheet.Cell(currentRow, 11).Value = "Name of Scheme";
                worksheet.Cell(currentRow, 12).Value = "Other Scheme";
                worksheet.Cell(currentRow, 13).Value = "Total Beneficiary";
                //worksheet.Cell(currentRow, 13).Value = "Reject Remark";
                worksheet.Cell(currentRow, 14).Value = "SPMU Approval Status";
                worksheet.Cell(currentRow, 15).Value = "NPMU Approval Status";
                worksheet.Cell(currentRow, 16).Value = "NPMU Remarks";
                worksheet.Cell(currentRow, 17).Value = "Area with crop shifting accepted by NPMU";
                worksheet.Cell(currentRow, 18).Value = "NPMU Admitted Claim";

                if (ddetails.Count != 0)
                {
                    decimal hghtolw = 0, totben = 0;
                    for (int i = 0; i < ddetails.Count; i++)
                    {
                        var approval = ddetails[i].approve;
                        string partial_approve = string.Empty;

                        if (approval == "State")
                        {
                            hghtolw += Convert.ToDecimal(ddetails[i].hightolow_wcc);
                            totben += Convert.ToDecimal(ddetails[i].total_ben);
                            approval = "Approved";


                            if (!string.IsNullOrEmpty(ddetails[i].approval_status))
                            {
                                if (ddetails[i].approval_status == "A")
                                {
                                    partial_approve = "Approved";
                                }
                                if (ddetails[i].approval_status == "P")
                                {
                                    partial_approve = "Partial Approved";
                                }
                                if (ddetails[i].approval_status == "R")
                                {
                                    partial_approve = "Reject";
                                }

                            }

                        }
                        else if (approval == "Dist")
                        {
                            hghtolw += Convert.ToDecimal(ddetails[i].hightolow_wcc);
                            totben += Convert.ToDecimal(ddetails[i].total_ben);
                            approval = "Submitted To SPMU";

                        }
                        else if (approval == null)
                        {
                            approval = "At DPMU";

                        }
                        else if (approval == "Reject")
                        {
                            approval = "Rejected";

                        }
                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
                        worksheet.Cell(currentRow, 2).Value = ddetails[i].district;
                        worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
                        worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                        worksheet.Cell(currentRow, 6).Value = ddetails[i].fy_phase;
                        worksheet.Cell(currentRow, 7).Value = ddetails[i].existing_high_wcc;
                        //worksheet.Cell(currentRow, 8).Value = ddetails[i].other_crop;
                        worksheet.Cell(currentRow, 8).Value = ddetails[i].replacing_low_wcc;
                        worksheet.Cell(currentRow, 9).Value = ddetails[i].hightolow_wcc;
                        worksheet.Cell(currentRow, 10).Value = ddetails[i].department;
                        worksheet.Cell(currentRow, 11).Value = ddetails[i].scheme;
                        worksheet.Cell(currentRow, 12).Value = ddetails[i].other_scheme;
                        worksheet.Cell(currentRow, 13).Value = ddetails[i].total_ben;
                        //worksheet.Cell(currentRow, 13).Value = ddetails[i].reject;
                        worksheet.Cell(currentRow, 14).Value = approval;
                        approval = "Approved";
                        worksheet.Cell(currentRow, 15).Value = partial_approve;
                        worksheet.Cell(currentRow, 16).Value = ddetails[i].approval_remarks;
                        worksheet.Cell(currentRow, 17).Value = ddetails[i].crop_shifting_area;
                        worksheet.Cell(currentRow, 18).Value = ddetails[i].TotalNpmuValue;


                        for (int j = 1; j <= 18; j++)
                        {
                            worksheet.Cell(currentRow, j).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                        }




                        int lastRow = currentRow;

                        if (lastRow == (ddetails.Count + 1))
                        {
                            currentRow++;
                            worksheet.Cell((lastRow + 1), 1).Value = "Total";
                            worksheet.Cell((lastRow + 1), 2).Value = "";
                            worksheet.Cell((lastRow + 1), 3).Value = "";
                            worksheet.Cell((lastRow + 1), 4).Value = "";
                            worksheet.Cell((lastRow + 1), 5).Value = "";
                            worksheet.Cell((lastRow + 1), 6).Value = "";
                            worksheet.Cell((lastRow + 1), 7).Value = "";
                            worksheet.Cell((lastRow + 1), 8).Value = "";
                            worksheet.Cell((lastRow + 1), 9).Value = hghtolw;
                            worksheet.Cell((lastRow + 1), 10).Value = "";
                            worksheet.Cell((lastRow + 1), 11).Value = "";
                            worksheet.Cell((lastRow + 1), 12).Value = "";
                            worksheet.Cell((lastRow + 1), 13).Value = totben;

                            for (int k = 1; k <= 12; k++)
                            {
                                worksheet.Cell(currentRow, k).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                            }
                        }

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
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "DLI4 Increase in area with shift in cropping pattern NPMU Admitted Claim .xlsx");
                }
            }

        }

        [HttpPost]
        public ActionResult Approve_RemarkUpdate_b(string ids, string remarks, string type, decimal croparea, decimal TotalNpmuValue)
        {
            List<dli4_area_with_crop_shifting> dataList = new List<dli4_area_with_crop_shifting>();
            if (Session["UserId"] != null)
            {
                var idList = ids.Split(',');
                try
                {
                    if (idList.Length > 0)
                    {
                        if (type == "P" || type == "R")
                        {
                            if (type == "R")
                            {
                                TotalNpmuValue = 0;
                            }
                            dataList = ABE.obj_dli4_area_with_crop_shifting.Where(f => (idList.Contains(f.id.ToString()))).ToList();
                            dataList.ForEach(a =>
                            {
                                a.approval_remarks = remarks;
                                a.crop_shifting_area = Convert.ToDecimal(croparea);
                                a.approval_status = type;
                                a.TotalNpmuValue = TotalNpmuValue;



                            });
                        }

                        else
                        {
                            dataList = ABE.obj_dli4_area_with_crop_shifting.Where(f => (idList.Contains(f.id.ToString()))).ToList();
                            dataList.ForEach(a =>
                            {
                                a.approval_remarks = remarks;
                                a.crop_shifting_area = 0;
                                a.approval_status = type;
                                a.TotalNpmuValue = Convert.ToDecimal(a.total_ben);

                            });
                        }
                        dataList.ForEach(a =>
                        {
                            ABE.Entry(a).State = System.Data.Entity.EntityState.Modified;
                        });
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json(new { statusCode = 200, msg = "Data Updated successfully" });
                        }
                        else
                        {
                            return Json(new { statusCode = 101, msg = "Data not Updated!" });
                        }
                    }
                    else
                    {
                        return Json(new { statusCode = 102, msg = "Not Selected" });
                    }
                    //int[] IdsArr = ids.Split(',').Select(int.Parse).ToArray();
                    //foreach (var item in IdsArr)
                    //{

                    //    var ID = Convert.ToInt32(item);
                    //    var Data = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.id == ID).SingleOrDefault();
                    //    if (Data != null)
                    //    {

                    //        Data.id = ID;
                    //        Data.approval_status = type;
                    //        if (type == "P" || type == "R")
                    //        {
                    //            Data.approval_remarks = remarks;
                    //        }
                    //        else {
                    //            Data.approval_remarks = null;
                    //        }
                    //        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                    //        int A = ABE.SaveChanges();

                    //        if (A > 0)
                    //        {
                    //            return Json(new {statusCode=200,msg="Partial approved" });
                    //        }
                    //        else
                    //        {
                    //            return Json(new { statusCode = 101, msg = "Not approved" });
                    //        }
                    //    }
                    //    }
                }
                catch (Exception ex)
                {
                    return Json(new { statusCode = 400, msg = ex.Message });

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult approve_data_state_a(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "State";
                        Data.reject = "";


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
        public ActionResult reject_data_a(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
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
        public ActionResult Data_DLI4_report3(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var state = result.statename;
                    var district = result.districtname;
                    var block = result.blockname;
                    var gram = result.gpname;
                    var year = result.year;
                    var fy_phase = result.fy_phase;
                    var month = "0";

                    List<dli4_water_saving_agriculture> ddetails = new List<dli4_water_saving_agriculture>();
                    if (year == "2023-24")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year).ToList();//total list
                        }
                    }
                    else
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                            //var data = ddetails.Where(x => Convert.ToInt32(x.mulching_total_ben)>0).ToList();
                        }
                    }
                    if (ddetails.Count != 0)
                    {
                        var jsonresult = Json(ddetails, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult DLI4_excel_c(string state, string district, string block, string gram, string year, string fy_phase)
        {

            var month = "0";

            List<dli4_water_saving_agriculture> ddetails = new List<dli4_water_saving_agriculture>();

            if (state != "ALL")
            {
                if (year != "2023-24")
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.year == year).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year).ToList();//total list
                    }
                }
                else
                {
                    if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }
                    else if (state != "0" && state != "" && state != null)
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase).ToList();//total list
                    }

                }
            }
            else
            {
                ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.year == year && x.fy_phase == fy_phase).ToList();//total list
            }

            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("DLI 4");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                worksheet.Cell(currentRow, 5).Value = "Financial Year";
                worksheet.Cell(currentRow, 6).Value = "Phase";
                //Convergence column merge
                worksheet.Range(currentRow, 7, currentRow, 15).Merge();
                worksheet.Cell(currentRow, 7).Value = "Increase in area through convergence";

                worksheet.Cell(currentRow + 1, 7).Value = "Super seeder /happy seeder/zero tillage";
                worksheet.Cell(currentRow + 1, 8).Value = "Polyhouse /net house";
                worksheet.Cell(currentRow + 1, 9).Value = "Mulching";
                worksheet.Cell(currentRow + 1, 10).Value = "Hydrogel";
                worksheet.Cell(currentRow + 1, 11).Value = "DSR";
                worksheet.Cell(currentRow + 1, 12).Value = "Other 1";
                worksheet.Cell(currentRow + 1, 13).Value = "Other 2";
                worksheet.Cell(currentRow + 1, 14).Value = "Other 3";
                worksheet.Cell(currentRow + 1, 15).Value = "Total";

                //worksheet.Cell(currentRow, 6).Value = "Super seeder /happy seeder/zero tillage";
                //worksheet.Cell(currentRow, 7).Value = "Polyhouse /net house";
                //worksheet.Cell(currentRow, 8).Value = "Mulching";
                //worksheet.Cell(currentRow, 9).Value = "Hydrogel";
                //worksheet.Cell(currentRow, 10).Value = "DSR";
                //worksheet.Cell(currentRow, 11).Value = "Other 1";
                //worksheet.Cell(currentRow, 12).Value = "Other 2";
                //worksheet.Cell(currentRow, 13).Value = "Other 3";
                //worksheet.Cell(currentRow, 14).Value = "Total";

                //Incentive fund column merge
                worksheet.Range(currentRow, 16, currentRow, 24).Merge();
                worksheet.Cell(currentRow, 16).Value = "Increase in area through Incentive fund";

                worksheet.Cell(currentRow + 1, 16).Value = "Super seeder /happy seeder/zero tillage";
                worksheet.Cell(currentRow + 1, 17).Value = "Polyhouse /net house";
                worksheet.Cell(currentRow + 1, 18).Value = "Mulching";
                worksheet.Cell(currentRow + 1, 19).Value = "Hydrogel";
                worksheet.Cell(currentRow + 1, 20).Value = "DSR";
                worksheet.Cell(currentRow + 1, 21).Value = "Other 1";
                worksheet.Cell(currentRow + 1, 22).Value = "Other 2";
                worksheet.Cell(currentRow + 1, 23).Value = "Other 3";
                worksheet.Cell(currentRow + 1, 24).Value = "Total";

                //worksheet.Cell(currentRow, 15).Value = "Super seeder /happy seeder/zero tillage";
                //worksheet.Cell(currentRow, 16).Value = "Polyhouse /net house";
                //worksheet.Cell(currentRow, 17).Value = "Mulching";
                //worksheet.Cell(currentRow, 18).Value = "Hydrogel";
                //worksheet.Cell(currentRow, 19).Value = "DSR";
                //worksheet.Cell(currentRow, 20).Value = "Other 1";
                //worksheet.Cell(currentRow, 21).Value = "Other 2";
                //worksheet.Cell(currentRow, 22).Value = "Other 3";
                //worksheet.Cell(currentRow, 23).Value = "Total";

                //financing column merge
                worksheet.Range(currentRow, 25, currentRow, 33).Merge();
                worksheet.Cell(currentRow, 25).Value = "Increase in area through self/private financing";

                worksheet.Cell(currentRow + 1, 25).Value = "Super seeder /happy seeder/zero tillage";
                worksheet.Cell(currentRow + 1, 26).Value = "Polyhouse /net house";
                worksheet.Cell(currentRow + 1, 27).Value = "Mulching";
                worksheet.Cell(currentRow + 1, 28).Value = "Hydrogel";
                worksheet.Cell(currentRow + 1, 29).Value = "DSR";
                worksheet.Cell(currentRow + 1, 30).Value = "Other 1";
                worksheet.Cell(currentRow + 1, 31).Value = "Other 2";
                worksheet.Cell(currentRow + 1, 32).Value = "Other 3";
                worksheet.Cell(currentRow + 1, 33).Value = "Total";

                //worksheet.Cell(currentRow, 24).Value = "Super seeder /happy seeder/zero tillage";
                //worksheet.Cell(currentRow, 25).Value = "Polyhouse /net house";
                //worksheet.Cell(currentRow, 26).Value = "Mulching";
                //worksheet.Cell(currentRow, 27).Value = "Hydrogel";
                //worksheet.Cell(currentRow, 28).Value = "DSR";
                //worksheet.Cell(currentRow, 29).Value = "Other 1";
                //worksheet.Cell(currentRow, 30).Value = "Other 2";
                //worksheet.Cell(currentRow, 31).Value = "Other 3";
                //worksheet.Cell(currentRow, 32).Value = "Total";

                worksheet.Cell(currentRow, 34).Value = "All Total";
                worksheet.Cell(currentRow, 35).Value = "Other Type 1";
                worksheet.Cell(currentRow, 36).Value = "Other Type 2";
                worksheet.Cell(currentRow, 37).Value = "Other Type 3";
                worksheet.Cell(currentRow, 38).Value = "Total Beneficiary Super seeder /happy seeder/zero tillage";
                worksheet.Cell(currentRow, 39).Value = "Total Beneficiary Polyhouse /net house";
                worksheet.Cell(currentRow, 40).Value = "Total Beneficiary Mulching";
                worksheet.Cell(currentRow, 41).Value = "Total Beneficiary Hydrogel";
                worksheet.Cell(currentRow, 42).Value = "Total Beneficiary DSR";
                worksheet.Cell(currentRow, 43).Value = "Total Beneficiary Other 1";
                worksheet.Cell(currentRow, 44).Value = "Total Beneficiary Other 2";
                worksheet.Cell(currentRow, 45).Value = "Total Beneficiary Other 3";
                worksheet.Cell(currentRow, 46).Value = "All Total Beneficiary";
                worksheet.Cell(currentRow, 47).Value = "Status";
                worksheet.Cell(currentRow, 48).Value = "Reject Remark";

                for (int col = 1; col <= 48; col++)
                {
                    worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                    worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                }
                for (int col = 7; col <= 34; col++)
                {
                    worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                    worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                }
                //worksheet.Range("A4:D4").Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;

                currentRow = 2;

                if (ddetails.Count != 0)
                {
                    decimal supcon = 0, polcon = 0, mulcon = 0, hydcon = 0, dsrcon = 0, othcon1 = 0, othcon2 = 0, othcon3 = 0, contot = 0;
                    decimal supinc = 0, polinc = 0, mulinc = 0, hydinc = 0, dsrinc = 0, othinc1 = 0, othinc2 = 0, othinc3 = 0, inctot = 0;
                    decimal supfin = 0, polfin = 0, mulfin = 0, hydfin = 0, dsrfin = 0, othfin1 = 0, othfin2 = 0, othfin3 = 0, fintot = 0, alltot = 0;
                    decimal othmet1 = 0, othmet2 = 0, othmet3 = 0, supben = 0, polben = 0, mulben = 0, hydben = 0, dsrben = 0, othben1 = 0, othben2 = 0, othben3 = 0;

                    decimal totalAllFinal = 0;

                    for (int i = 0; i < ddetails.Count; i++)
                    {
                        decimal totalAll = 0;
                        var dara = ddetails.ToList().Where(s => s.approve == "State").ToList();
                        var approval = ddetails[i].approve;
                        totalAll += Convert.ToDecimal(ddetails[i].super_total_ben) + Convert.ToDecimal(ddetails[i].polyhouse_total_ben) + Convert.ToDecimal(ddetails[i].mulching_total_ben) + Convert.ToDecimal(ddetails[i].hydrogel_total_ben) + Convert.ToDecimal(ddetails[i].dsr_total_ben) + Convert.ToDecimal(ddetails[i].other1_total_ben) + Convert.ToDecimal(ddetails[i].other2_total_ben) + Convert.ToDecimal(ddetails[i].other3_total_ben);

                        if (approval == "State")
                        {
                            //if (!string.IsNullOrEmpty(ddetails[i].other_water_saving_method2) &&
                            //    !string.IsNullOrEmpty(ddetails[i].other_water_saving_method3) &&
                            //    !string.IsNullOrEmpty(ddetails[i].super_total_ben) &&
                            //    !string.IsNullOrEmpty(ddetails[i].polyhouse_total_ben)
                            //    )

                            {
                                supcon += Convert.ToDecimal(ddetails[i].super_area_covered_through_convergence);
                                polcon += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_convergence);
                                mulcon += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_convergence);
                                hydcon += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_convergence);
                                dsrcon += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_convergence);
                                othcon1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence1);
                                othcon2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence2);
                                othcon3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence3);
                                contot += Convert.ToDecimal(ddetails[i].convergence_total_area);
                                supinc += Convert.ToDecimal(ddetails[i].super_area_covered_through_incentive);
                                polinc += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_incentive);
                                mulinc += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_incentive);
                                hydinc += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_incentive);
                                dsrinc += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_incentive);
                                othinc1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive1);
                                othinc2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive2);
                                othinc3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive3);
                                inctot += Convert.ToDecimal(ddetails[i].incentive_total_area);
                                supfin += Convert.ToDecimal(ddetails[i].super_area_covered_through_financing);
                                polfin += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_financing);
                                mulfin += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_financing);
                                hydfin += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_financing);
                                dsrfin += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_financing);
                                othfin1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_financing1);
                                othfin2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_financing2);
                                othfin3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_financing3);
                                fintot += Convert.ToDecimal(ddetails[i].financing_total_area);
                                alltot += Convert.ToDecimal(ddetails[i].all_total_area);
                                //othmet1 += Convert.ToDecimal(ddetails[i].other_water_saving_method1);
                                //othmet2 += Convert.ToDecimal(ddetails[i].other_water_saving_method2);
                                //othmet3 += Convert.ToDecimal(ddetails[i].other_water_saving_method3);

                                supben += Convert.ToDecimal(ddetails[i].super_total_ben);
                                polben += Convert.ToDecimal(ddetails[i].polyhouse_total_ben);
                                mulben += Convert.ToDecimal(ddetails[i].mulching_total_ben);
                                hydben += Convert.ToDecimal(ddetails[i].hydrogel_total_ben);
                                dsrben += Convert.ToDecimal(ddetails[i].dsr_total_ben);
                                othben1 += Convert.ToDecimal(ddetails[i].other1_total_ben);
                                othben2 += Convert.ToDecimal(ddetails[i].other2_total_ben);
                                othben3 += Convert.ToDecimal(ddetails[i].other3_total_ben);

                                //totalAll += Convert.ToDecimal(supben + polben + mulben + hydben + dsrben + othben1 + othben2 + othben3);
                                //totalAllFinal += supben + polben + mulben + hydben + dsrben + othben1 + othben2 + othben3;
                                totalAllFinal += Convert.ToDecimal(ddetails[i].super_total_ben) + Convert.ToDecimal(ddetails[i].polyhouse_total_ben) + Convert.ToDecimal(ddetails[i].mulching_total_ben) + Convert.ToDecimal(ddetails[i].hydrogel_total_ben) + Convert.ToDecimal(ddetails[i].dsr_total_ben) + Convert.ToDecimal(ddetails[i].other1_total_ben) + Convert.ToDecimal(ddetails[i].other2_total_ben) + Convert.ToDecimal(ddetails[i].other3_total_ben);

                                approval = "Approved";
                            }

                        }
                        else if (approval == "Dist")
                        {
                            supcon += Convert.ToDecimal(ddetails[i].super_area_covered_through_convergence);
                            polcon += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_convergence);
                            mulcon += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_convergence);
                            hydcon += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_convergence);
                            dsrcon += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_convergence);
                            othcon1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence1);
                            othcon2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence2);
                            othcon3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence3);
                            contot += Convert.ToDecimal(ddetails[i].convergence_total_area);
                            supinc += Convert.ToDecimal(ddetails[i].super_area_covered_through_incentive);
                            polinc += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_incentive);
                            mulinc += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_incentive);
                            hydinc += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_incentive);
                            dsrinc += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_incentive);
                            othinc1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive1);
                            othinc2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive2);
                            othinc3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive3);
                            inctot += Convert.ToDecimal(ddetails[i].incentive_total_area);
                            supfin += Convert.ToDecimal(ddetails[i].super_area_covered_through_financing);
                            polfin += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_financing);
                            mulfin += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_financing);
                            hydfin += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_financing);
                            dsrfin += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_financing);
                            othfin1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_financing1);
                            othfin2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_financing2);
                            othfin3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_financing3);
                            fintot += Convert.ToDecimal(ddetails[i].financing_total_area);
                            alltot += Convert.ToDecimal(ddetails[i].all_total_area);
                            //othmet1 += Convert.ToDecimal(ddetails[i].other_water_saving_method1);
                            //othmet2 += Convert.ToDecimal(ddetails[i].other_water_saving_method2);
                            //othmet3 += Convert.ToDecimal(ddetails[i].other_water_saving_method3);

                            supben += Convert.ToDecimal(ddetails[i].super_total_ben);
                            polben += Convert.ToDecimal(ddetails[i].polyhouse_total_ben);
                            mulben += Convert.ToDecimal(ddetails[i].mulching_total_ben);
                            hydben += Convert.ToDecimal(ddetails[i].hydrogel_total_ben);
                            dsrben += Convert.ToDecimal(ddetails[i].dsr_total_ben);
                            othben1 += Convert.ToDecimal(ddetails[i].other1_total_ben);
                            othben2 += Convert.ToDecimal(ddetails[i].other2_total_ben);
                            othben3 += Convert.ToDecimal(ddetails[i].other3_total_ben);

                            //totalAll = Convert.ToDecimal(supben + polben + mulben + hydben + dsrben + othben1 + othben2 + othben3);
                            //totalAll += Convert.ToDecimal(ddetails[i].super_total_ben) + Convert.ToDecimal(ddetails[i].polyhouse_total_ben) + Convert.ToDecimal(ddetails[i].mulching_total_ben) + Convert.ToDecimal(ddetails[i].hydrogel_total_ben) + Convert.ToDecimal(ddetails[i].dsr_total_ben) + Convert.ToDecimal(ddetails[i].other1_total_ben) + Convert.ToDecimal(ddetails[i].other2_total_ben) + Convert.ToDecimal(ddetails[i].other3_total_ben);

                            //totalAllFinal += (supben + polben + mulben + hydben + dsrben + othben1 + othben2 + othben3);
                            totalAllFinal += Convert.ToDecimal(ddetails[i].super_total_ben) + Convert.ToDecimal(ddetails[i].polyhouse_total_ben) + Convert.ToDecimal(ddetails[i].mulching_total_ben) + Convert.ToDecimal(ddetails[i].hydrogel_total_ben) + Convert.ToDecimal(ddetails[i].dsr_total_ben) + Convert.ToDecimal(ddetails[i].other1_total_ben) + Convert.ToDecimal(ddetails[i].other2_total_ben) + Convert.ToDecimal(ddetails[i].other3_total_ben);

                            approval = "Submitted To SPMU";

                        }
                        else if (approval == null)
                        {
                            approval = "At DPMU";

                        }
                        else if (approval == "Reject")
                        {
                            approval = "Rejected";

                        }
                        currentRow++;

                        worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
                        worksheet.Cell(currentRow, 2).Value = ddetails[i].district;
                        worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
                        worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                        worksheet.Cell(currentRow, 6).Value = ddetails[i].fy_phase;
                        worksheet.Cell(currentRow, 7).Value = ddetails[i].super_area_covered_through_convergence;
                        worksheet.Cell(currentRow, 8).Value = ddetails[i].polyhouse_area_covered_through_convergence;
                        worksheet.Cell(currentRow, 9).Value = ddetails[i].mulching_area_covered_through_convergence;
                        worksheet.Cell(currentRow, 10).Value = ddetails[i].hydrogel_area_covered_through_convergence;
                        worksheet.Cell(currentRow, 11).Value = ddetails[i].dsr_area_covered_through_convergence;
                        worksheet.Cell(currentRow, 12).Value = ddetails[i].other_area_covered_through_convergence1;
                        worksheet.Cell(currentRow, 13).Value = ddetails[i].other_area_covered_through_convergence2;
                        worksheet.Cell(currentRow, 14).Value = ddetails[i].other_area_covered_through_convergence3;
                        worksheet.Cell(currentRow, 15).Value = ddetails[i].convergence_total_area;
                        worksheet.Cell(currentRow, 16).Value = ddetails[i].super_area_covered_through_incentive;
                        worksheet.Cell(currentRow, 17).Value = ddetails[i].polyhouse_area_covered_through_incentive;
                        worksheet.Cell(currentRow, 18).Value = ddetails[i].mulching_area_covered_through_incentive;
                        worksheet.Cell(currentRow, 19).Value = ddetails[i].hydrogel_area_covered_through_incentive;
                        worksheet.Cell(currentRow, 20).Value = ddetails[i].dsr_area_covered_through_incentive;
                        worksheet.Cell(currentRow, 21).Value = ddetails[i].other_area_covered_through_incentive1;
                        worksheet.Cell(currentRow, 22).Value = ddetails[i].other_area_covered_through_incentive2;
                        worksheet.Cell(currentRow, 23).Value = ddetails[i].other_area_covered_through_incentive3;
                        worksheet.Cell(currentRow, 24).Value = ddetails[i].incentive_total_area;
                        worksheet.Cell(currentRow, 25).Value = ddetails[i].super_area_covered_through_financing;
                        worksheet.Cell(currentRow, 26).Value = ddetails[i].polyhouse_area_covered_through_financing;
                        worksheet.Cell(currentRow, 27).Value = ddetails[i].mulching_area_covered_through_financing;
                        worksheet.Cell(currentRow, 28).Value = ddetails[i].hydrogel_area_covered_through_financing;
                        worksheet.Cell(currentRow, 29).Value = ddetails[i].dsr_area_covered_through_financing;
                        worksheet.Cell(currentRow, 30).Value = ddetails[i].other_area_covered_through_financing1;
                        worksheet.Cell(currentRow, 31).Value = ddetails[i].other_area_covered_through_financing2;
                        worksheet.Cell(currentRow, 32).Value = ddetails[i].other_area_covered_through_financing3;
                        worksheet.Cell(currentRow, 33).Value = ddetails[i].financing_total_area;
                        worksheet.Cell(currentRow, 34).Value = ddetails[i].all_total_area;
                        worksheet.Cell(currentRow, 35).Value = ddetails[i].other_water_saving_method1;
                        worksheet.Cell(currentRow, 36).Value = ddetails[i].other_water_saving_method2;
                        worksheet.Cell(currentRow, 37).Value = ddetails[i].other_water_saving_method3;
                        worksheet.Cell(currentRow, 38).Value = ddetails[i].super_total_ben;
                        worksheet.Cell(currentRow, 39).Value = ddetails[i].polyhouse_total_ben;
                        worksheet.Cell(currentRow, 40).Value = ddetails[i].mulching_total_ben;
                        worksheet.Cell(currentRow, 41).Value = ddetails[i].hydrogel_total_ben;
                        worksheet.Cell(currentRow, 42).Value = ddetails[i].dsr_total_ben;
                        worksheet.Cell(currentRow, 43).Value = ddetails[i].other1_total_ben;
                        worksheet.Cell(currentRow, 44).Value = ddetails[i].other2_total_ben;
                        worksheet.Cell(currentRow, 45).Value = ddetails[i].other3_total_ben;
                        worksheet.Cell(currentRow, 46).Value = totalAll;
                        worksheet.Cell(currentRow, 47).Value = approval;
                        worksheet.Cell(currentRow, 48).Value = ddetails[i].reject;


                        for (int j = 1; j <= 47; j++)
                        {
                            worksheet.Cell(currentRow, j).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                        }


                        int lastRow = currentRow;
                        if (lastRow == (ddetails.Count + 2))
                        {
                            currentRow++;
                            worksheet.Cell((lastRow + 1), 1).Value = "Total";
                            worksheet.Cell((lastRow + 1), 2).Value = "";
                            worksheet.Cell((lastRow + 1), 3).Value = "";
                            worksheet.Cell((lastRow + 1), 4).Value = "";
                            worksheet.Cell((lastRow + 1), 5).Value = "";
                            worksheet.Cell((lastRow + 1), 6).Value = "";
                            worksheet.Cell((lastRow + 1), 7).Value = supcon;
                            worksheet.Cell((lastRow + 1), 8).Value = polcon;
                            worksheet.Cell((lastRow + 1), 9).Value = mulcon;
                            worksheet.Cell((lastRow + 1), 10).Value = hydcon;
                            worksheet.Cell((lastRow + 1), 11).Value = dsrcon;
                            worksheet.Cell((lastRow + 1), 12).Value = othcon1;
                            worksheet.Cell((lastRow + 1), 13).Value = othcon2;
                            worksheet.Cell((lastRow + 1), 14).Value = othcon3;
                            worksheet.Cell((lastRow + 1), 15).Value = contot;
                            worksheet.Cell((lastRow + 1), 16).Value = supinc;
                            worksheet.Cell((lastRow + 1), 17).Value = polinc;
                            worksheet.Cell((lastRow + 1), 18).Value = mulinc;
                            worksheet.Cell((lastRow + 1), 19).Value = hydinc;
                            worksheet.Cell((lastRow + 1), 20).Value = dsrinc;
                            worksheet.Cell((lastRow + 1), 21).Value = othinc1;
                            worksheet.Cell((lastRow + 1), 22).Value = othinc2;
                            worksheet.Cell((lastRow + 1), 23).Value = othinc3;
                            worksheet.Cell((lastRow + 1), 24).Value = inctot;
                            worksheet.Cell((lastRow + 1), 25).Value = supfin;
                            worksheet.Cell((lastRow + 1), 26).Value = polfin;
                            worksheet.Cell((lastRow + 1), 27).Value = mulfin;
                            worksheet.Cell((lastRow + 1), 28).Value = hydfin;
                            worksheet.Cell((lastRow + 1), 29).Value = dsrfin;
                            worksheet.Cell((lastRow + 1), 30).Value = othfin1;
                            worksheet.Cell((lastRow + 1), 31).Value = othfin2;
                            worksheet.Cell((lastRow + 1), 32).Value = othfin3;
                            worksheet.Cell((lastRow + 1), 33).Value = fintot;
                            worksheet.Cell((lastRow + 1), 34).Value = alltot;
                            worksheet.Cell((lastRow + 1), 35).Value = "";
                            worksheet.Cell((lastRow + 1), 36).Value = "";
                            worksheet.Cell((lastRow + 1), 37).Value = "";
                            worksheet.Cell((lastRow + 1), 38).Value = supben;
                            worksheet.Cell((lastRow + 1), 39).Value = polben;
                            worksheet.Cell((lastRow + 1), 40).Value = mulben;
                            worksheet.Cell((lastRow + 1), 41).Value = hydben;
                            worksheet.Cell((lastRow + 1), 42).Value = dsrben;
                            worksheet.Cell((lastRow + 1), 43).Value = othben1;
                            worksheet.Cell((lastRow + 1), 44).Value = othben2;
                            worksheet.Cell((lastRow + 1), 45).Value = othben3;
                            worksheet.Cell((lastRow + 1), 46).Value = totalAllFinal;

                            for (int k = 1; k <= 46; k++)
                            {
                                worksheet.Cell(currentRow, k).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                            }
                        }
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




                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "DLI4 Increase in area under other water saving method ( Ha) used for agriculture .xlsx");
                }
            }



        }
        public ActionResult DLI4_partialapproved_excel_c(string state, string district, string block, string gram, string year, string fy_phase)
        {
            try
            {
                var month = "0";

                List<dli4_water_saving_agriculture> ddetails = new List<dli4_water_saving_agriculture>();


                if (state != "ALL")
                {
                    if (year != "2023-24")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }
                    }
                    else
                    {

                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                        }

                    }
                }
                else
                {
                    ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.year == year && x.fy_phase == fy_phase && (x.approval_status == "P" || x.approval_status == "A" || x.approval_status == "R")).ToList();//total list
                }


                using (var workbook = new XLWorkbook())
                {

                    var worksheet = workbook.Worksheets.Add("DLI 4");
                    var currentRow = 1;
                    worksheet.Cell(currentRow, 1).Value = "State";
                    worksheet.Cell(currentRow, 2).Value = "District";
                    worksheet.Cell(currentRow, 3).Value = "Block";
                    worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                    worksheet.Cell(currentRow, 5).Value = "Financial Year";
                    worksheet.Cell(currentRow, 6).Value = "Phase";
                    //Convergence column merge
                    worksheet.Range(currentRow, 7, currentRow, 15).Merge();
                    worksheet.Cell(currentRow, 7).Value = "Increase in area through convergence";

                    worksheet.Cell(currentRow + 1, 7).Value = "Super seeder /happy seeder/zero tillage";
                    worksheet.Cell(currentRow + 1, 8).Value = "Polyhouse /net house";
                    worksheet.Cell(currentRow + 1, 9).Value = "Mulching";
                    worksheet.Cell(currentRow + 1, 10).Value = "Hydrogel";
                    worksheet.Cell(currentRow + 1, 11).Value = "DSR";
                    worksheet.Cell(currentRow + 1, 12).Value = "Other 1";
                    worksheet.Cell(currentRow + 1, 13).Value = "Other 2";
                    worksheet.Cell(currentRow + 1, 14).Value = "Other 3";
                    worksheet.Cell(currentRow + 1, 15).Value = "Total";

                    //worksheet.Cell(currentRow, 6).Value = "Super seeder /happy seeder/zero tillage";
                    //worksheet.Cell(currentRow, 7).Value = "Polyhouse /net house";
                    //worksheet.Cell(currentRow, 8).Value = "Mulching";
                    //worksheet.Cell(currentRow, 9).Value = "Hydrogel";
                    //worksheet.Cell(currentRow, 10).Value = "DSR";
                    //worksheet.Cell(currentRow, 11).Value = "Other 1";
                    //worksheet.Cell(currentRow, 12).Value = "Other 2";
                    //worksheet.Cell(currentRow, 13).Value = "Other 3";
                    //worksheet.Cell(currentRow, 14).Value = "Total";

                    //Incentive fund column merge
                    worksheet.Range(currentRow, 16, currentRow, 24).Merge();
                    worksheet.Cell(currentRow, 16).Value = "Increase in area through Incentive fund";

                    worksheet.Cell(currentRow + 1, 16).Value = "Super seeder /happy seeder/zero tillage";
                    worksheet.Cell(currentRow + 1, 17).Value = "Polyhouse /net house";
                    worksheet.Cell(currentRow + 1, 18).Value = "Mulching";
                    worksheet.Cell(currentRow + 1, 19).Value = "Hydrogel";
                    worksheet.Cell(currentRow + 1, 20).Value = "DSR";
                    worksheet.Cell(currentRow + 1, 21).Value = "Other 1";
                    worksheet.Cell(currentRow + 1, 22).Value = "Other 2";
                    worksheet.Cell(currentRow + 1, 23).Value = "Other 3";
                    worksheet.Cell(currentRow + 1, 24).Value = "Total";

                    //worksheet.Cell(currentRow, 15).Value = "Super seeder /happy seeder/zero tillage";
                    //worksheet.Cell(currentRow, 16).Value = "Polyhouse /net house";
                    //worksheet.Cell(currentRow, 17).Value = "Mulching";
                    //worksheet.Cell(currentRow, 18).Value = "Hydrogel";
                    //worksheet.Cell(currentRow, 19).Value = "DSR";
                    //worksheet.Cell(currentRow, 20).Value = "Other 1";
                    //worksheet.Cell(currentRow, 21).Value = "Other 2";
                    //worksheet.Cell(currentRow, 22).Value = "Other 3";
                    //worksheet.Cell(currentRow, 23).Value = "Total";

                    //financing column merge
                    worksheet.Range(currentRow, 25, currentRow, 33).Merge();
                    worksheet.Cell(currentRow, 25).Value = "Increase in area through self/private financing";

                    worksheet.Cell(currentRow + 1, 25).Value = "Super seeder /happy seeder/zero tillage";
                    worksheet.Cell(currentRow + 1, 26).Value = "Polyhouse /net house";
                    worksheet.Cell(currentRow + 1, 27).Value = "Mulching";
                    worksheet.Cell(currentRow + 1, 28).Value = "Hydrogel";
                    worksheet.Cell(currentRow + 1, 29).Value = "DSR";
                    worksheet.Cell(currentRow + 1, 30).Value = "Other 1";
                    worksheet.Cell(currentRow + 1, 31).Value = "Other 2";
                    worksheet.Cell(currentRow + 1, 32).Value = "Other 3";
                    worksheet.Cell(currentRow + 1, 33).Value = "Total";

                    worksheet.Cell(currentRow, 34).Value = "All Total";
                    worksheet.Cell(currentRow, 35).Value = "Other Type 1";
                    worksheet.Cell(currentRow, 36).Value = "Other Type 2";
                    worksheet.Cell(currentRow, 37).Value = "Other Type 3";
                    worksheet.Cell(currentRow, 38).Value = "Total Beneficiary Super seeder /happy seeder/zero tillage";
                    worksheet.Cell(currentRow, 39).Value = "Total Beneficiary Polyhouse /net house";
                    worksheet.Cell(currentRow, 40).Value = "Total Beneficiary Mulching";
                    worksheet.Cell(currentRow, 41).Value = "Total Beneficiary Hydrogel";
                    worksheet.Cell(currentRow, 42).Value = "Total Beneficiary DSR";
                    worksheet.Cell(currentRow, 43).Value = "Total Beneficiary Other 1";
                    worksheet.Cell(currentRow, 44).Value = "Total Beneficiary Other 2";
                    worksheet.Cell(currentRow, 45).Value = "Total Beneficiary Other 3";
                    worksheet.Cell(currentRow, 46).Value = "All Total Beneficiary";
                    //worksheet.Cell(currentRow,45).Value = "Reject Remark";
                    worksheet.Cell(currentRow, 47).Value = "SPMU Approval Status";
                    worksheet.Cell(currentRow, 48).Value = "NPMU Approval Status";
                    worksheet.Cell(currentRow, 49).Value = "NPMU Remarks";
                    worksheet.Cell(currentRow, 50).Value = "NPMU Admitted Claim";

                    for (int col = 1; col <= 50; col++)
                    {
                        worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    for (int col = 7; col <= 33; col++)
                    {
                        worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    currentRow = 2;

                    if (ddetails.Count != 0)
                    {
                        decimal supcon = 0, polcon = 0, mulcon = 0, hydcon = 0, dsrcon = 0, othcon1 = 0, othcon2 = 0, othcon3 = 0, contot = 0;
                        decimal supinc = 0, polinc = 0, mulinc = 0, hydinc = 0, dsrinc = 0, othinc1 = 0, othinc2 = 0, othinc3 = 0, inctot = 0;
                        decimal supfin = 0, polfin = 0, mulfin = 0, hydfin = 0, dsrfin = 0, othfin1 = 0, othfin2 = 0, othfin3 = 0, fintot = 0, alltot = 0;
                        decimal othmet1 = 0, othmet2 = 0, othmet3 = 0, supben = 0, polben = 0, mulben = 0, hydben = 0, dsrben = 0, othben1 = 0, othben2 = 0, othben3 = 0;

                        decimal totalAllFinal = 0;

                        for (int i = 0; i < ddetails.Count; i++)
                        {
                            decimal totalAll = 0;
                            var approval = ddetails[i].approve;
                            string partial_approve = string.Empty;
                            totalAll += Convert.ToDecimal(ddetails[i].super_total_ben) + Convert.ToDecimal(ddetails[i].polyhouse_total_ben) + Convert.ToDecimal(ddetails[i].mulching_total_ben) + Convert.ToDecimal(ddetails[i].hydrogel_total_ben) + Convert.ToDecimal(ddetails[i].dsr_total_ben) + Convert.ToDecimal(ddetails[i].other1_total_ben) + Convert.ToDecimal(ddetails[i].other2_total_ben) + Convert.ToDecimal(ddetails[i].other3_total_ben);

                            if (approval == "State")
                            {
                                //if (!string.IsNullOrEmpty(ddetails[i].other_water_saving_method2) && !string.IsNullOrEmpty(ddetails[i].other_water_saving_method3) && !string.IsNullOrEmpty(ddetails[i].super_total_ben) && !string.IsNullOrEmpty(ddetails[i].polyhouse_total_ben))
                                {
                                    supcon += Convert.ToDecimal(ddetails[i].super_area_covered_through_convergence);
                                    polcon += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_convergence);
                                    mulcon += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_convergence);
                                    hydcon += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_convergence);
                                    dsrcon += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_convergence);
                                    othcon1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence1);
                                    othcon2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence2);
                                    othcon3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence3);
                                    contot += Convert.ToDecimal(ddetails[i].convergence_total_area);
                                    supinc += Convert.ToDecimal(ddetails[i].super_area_covered_through_incentive);
                                    polinc += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_incentive);
                                    mulinc += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_incentive);
                                    hydinc += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_incentive);
                                    dsrinc += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_incentive);
                                    othinc1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive1);
                                    othinc2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive2);
                                    othinc3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive3);
                                    inctot += Convert.ToDecimal(ddetails[i].incentive_total_area);
                                    supfin += Convert.ToDecimal(ddetails[i].super_area_covered_through_incentive);
                                    polfin += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_incentive);
                                    mulfin += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_incentive);
                                    hydfin += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_incentive);
                                    dsrfin += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_incentive);
                                    othfin1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive1);
                                    othfin2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive2);
                                    othfin3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive3);
                                    fintot += Convert.ToDecimal(ddetails[i].financing_total_area);
                                    alltot += Convert.ToDecimal(ddetails[i].all_total_area);
                                    //othmet1 += Convert.ToDecimal(ddetails[i].other_water_saving_method1);
                                    //othmet2 += Convert.ToDecimal(ddetails[i].other_water_saving_method2);
                                    //othmet3 += Convert.ToDecimal(ddetails[i].other_water_saving_method3);

                                    supben += Convert.ToDecimal(ddetails[i].super_total_ben);
                                    polben += Convert.ToDecimal(ddetails[i].polyhouse_total_ben);
                                    mulben += Convert.ToDecimal(ddetails[i].mulching_total_ben);
                                    hydben += Convert.ToDecimal(ddetails[i].hydrogel_total_ben);
                                    dsrben += Convert.ToDecimal(ddetails[i].dsr_total_ben);
                                    othben1 += Convert.ToDecimal(ddetails[i].other1_total_ben);
                                    othben2 += Convert.ToDecimal(ddetails[i].other2_total_ben);
                                    othben3 += Convert.ToDecimal(ddetails[i].other3_total_ben);
                                    totalAllFinal += Convert.ToDecimal(ddetails[i].super_total_ben) + Convert.ToDecimal(ddetails[i].polyhouse_total_ben) + Convert.ToDecimal(ddetails[i].mulching_total_ben) + Convert.ToDecimal(ddetails[i].hydrogel_total_ben) + Convert.ToDecimal(ddetails[i].dsr_total_ben) + Convert.ToDecimal(ddetails[i].other1_total_ben) + Convert.ToDecimal(ddetails[i].other2_total_ben) + Convert.ToDecimal(ddetails[i].other3_total_ben);

                                    approval = "Approved";


                                    if (!string.IsNullOrEmpty(ddetails[i].approval_status))
                                    {
                                        if (ddetails[i].approval_status == "A")
                                        {
                                            partial_approve = "Approved";
                                        }
                                        if (ddetails[i].approval_status == "P")
                                        {
                                            partial_approve = "Partial Approved";
                                        }
                                        if (ddetails[i].approval_status == "R")
                                        {
                                            partial_approve = "Reject";
                                        }

                                    }
                                }

                            }
                            else if (approval == "Dist")
                            {
                                supcon += Convert.ToDecimal(ddetails[i].super_area_covered_through_convergence);
                                polcon += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_convergence);
                                mulcon += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_convergence);
                                hydcon += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_convergence);
                                dsrcon += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_convergence);
                                othcon1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence1);
                                othcon2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence2);
                                othcon3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_convergence3);
                                contot += Convert.ToDecimal(ddetails[i].convergence_total_area);
                                supinc += Convert.ToDecimal(ddetails[i].super_area_covered_through_incentive);
                                polinc += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_incentive);
                                mulinc += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_incentive);
                                hydinc += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_incentive);
                                dsrinc += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_incentive);
                                othinc1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive1);
                                othinc2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive2);
                                othinc3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive3);
                                inctot += Convert.ToDecimal(ddetails[i].incentive_total_area);
                                supfin += Convert.ToDecimal(ddetails[i].super_area_covered_through_incentive);
                                polfin += Convert.ToDecimal(ddetails[i].polyhouse_area_covered_through_incentive);
                                mulfin += Convert.ToDecimal(ddetails[i].mulching_area_covered_through_incentive);
                                hydfin += Convert.ToDecimal(ddetails[i].hydrogel_area_covered_through_incentive);
                                dsrfin += Convert.ToDecimal(ddetails[i].dsr_area_covered_through_incentive);
                                othfin1 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive1);
                                othfin2 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive2);
                                othfin3 += Convert.ToDecimal(ddetails[i].other_area_covered_through_incentive3);
                                fintot += Convert.ToDecimal(ddetails[i].financing_total_area);
                                alltot += Convert.ToDecimal(ddetails[i].all_total_area);
                                //othmet1 += Convert.ToDecimal(ddetails[i].other_water_saving_method1);
                                //othmet2 += Convert.ToDecimal(ddetails[i].other_water_saving_method2);
                                //othmet3 += Convert.ToDecimal(ddetails[i].other_water_saving_method3);

                                supben += Convert.ToDecimal(ddetails[i].super_total_ben);
                                polben += Convert.ToDecimal(ddetails[i].polyhouse_total_ben);
                                mulben += Convert.ToDecimal(ddetails[i].mulching_total_ben);
                                hydben += Convert.ToDecimal(ddetails[i].hydrogel_total_ben);
                                dsrben += Convert.ToDecimal(ddetails[i].dsr_total_ben);
                                othben1 += Convert.ToDecimal(ddetails[i].other1_total_ben);
                                othben2 += Convert.ToDecimal(ddetails[i].other2_total_ben);
                                othben3 += Convert.ToDecimal(ddetails[i].other3_total_ben);
                                totalAllFinal += Convert.ToDecimal(ddetails[i].super_total_ben) + Convert.ToDecimal(ddetails[i].polyhouse_total_ben) + Convert.ToDecimal(ddetails[i].mulching_total_ben) + Convert.ToDecimal(ddetails[i].hydrogel_total_ben) + Convert.ToDecimal(ddetails[i].dsr_total_ben) + Convert.ToDecimal(ddetails[i].other1_total_ben) + Convert.ToDecimal(ddetails[i].other2_total_ben) + Convert.ToDecimal(ddetails[i].other3_total_ben);

                                approval = "Submitted To SPMU";

                            }
                            else if (approval == null)
                            {
                                approval = "At DPMU";

                            }
                            else if (approval == "Reject")
                            {
                                approval = "Rejected";

                            }
                            currentRow++;

                            worksheet.Cell(currentRow, 1).Value = ddetails[i].state;
                            worksheet.Cell(currentRow, 2).Value = ddetails[i].district;
                            worksheet.Cell(currentRow, 3).Value = ddetails[i].block;
                            worksheet.Cell(currentRow, 4).Value = ddetails[i].gram;
                            worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                            worksheet.Cell(currentRow, 6).Value = ddetails[i].fy_phase;
                            worksheet.Cell(currentRow, 7).Value = ddetails[i].super_area_covered_through_convergence;
                            worksheet.Cell(currentRow, 8).Value = ddetails[i].polyhouse_area_covered_through_convergence;
                            worksheet.Cell(currentRow, 9).Value = ddetails[i].mulching_area_covered_through_convergence;
                            worksheet.Cell(currentRow, 10).Value = ddetails[i].hydrogel_area_covered_through_convergence;
                            worksheet.Cell(currentRow, 11).Value = ddetails[i].dsr_area_covered_through_convergence;
                            worksheet.Cell(currentRow, 12).Value = ddetails[i].other_area_covered_through_convergence1;
                            worksheet.Cell(currentRow, 13).Value = ddetails[i].other_area_covered_through_convergence2;
                            worksheet.Cell(currentRow, 14).Value = ddetails[i].other_area_covered_through_convergence3;
                            worksheet.Cell(currentRow, 15).Value = ddetails[i].convergence_total_area;
                            worksheet.Cell(currentRow, 16).Value = ddetails[i].super_area_covered_through_incentive;
                            worksheet.Cell(currentRow, 17).Value = ddetails[i].polyhouse_area_covered_through_incentive;
                            worksheet.Cell(currentRow, 18).Value = ddetails[i].mulching_area_covered_through_incentive;
                            worksheet.Cell(currentRow, 19).Value = ddetails[i].hydrogel_area_covered_through_incentive;
                            worksheet.Cell(currentRow, 20).Value = ddetails[i].dsr_area_covered_through_incentive;
                            worksheet.Cell(currentRow, 21).Value = ddetails[i].other_area_covered_through_incentive1;
                            worksheet.Cell(currentRow, 22).Value = ddetails[i].other_area_covered_through_incentive2;
                            worksheet.Cell(currentRow, 23).Value = ddetails[i].other_area_covered_through_incentive3;
                            worksheet.Cell(currentRow, 24).Value = ddetails[i].incentive_total_area;
                            worksheet.Cell(currentRow, 25).Value = ddetails[i].super_area_covered_through_financing;
                            worksheet.Cell(currentRow, 26).Value = ddetails[i].polyhouse_area_covered_through_financing;
                            worksheet.Cell(currentRow, 27).Value = ddetails[i].mulching_area_covered_through_financing;
                            worksheet.Cell(currentRow, 28).Value = ddetails[i].hydrogel_area_covered_through_financing;
                            worksheet.Cell(currentRow, 29).Value = ddetails[i].dsr_area_covered_through_financing;
                            worksheet.Cell(currentRow, 30).Value = ddetails[i].other_area_covered_through_financing1;
                            worksheet.Cell(currentRow, 31).Value = ddetails[i].other_area_covered_through_financing2;
                            worksheet.Cell(currentRow, 32).Value = ddetails[i].other_area_covered_through_financing3;
                            worksheet.Cell(currentRow, 33).Value = ddetails[i].financing_total_area;
                            worksheet.Cell(currentRow, 34).Value = ddetails[i].all_total_area;
                            worksheet.Cell(currentRow, 35).Value = ddetails[i].other_water_saving_method1;
                            worksheet.Cell(currentRow, 36).Value = ddetails[i].other_water_saving_method2;
                            worksheet.Cell(currentRow, 37).Value = ddetails[i].other_water_saving_method3;

                            worksheet.Cell(currentRow, 38).Value = ddetails[i].super_total_ben;
                            worksheet.Cell(currentRow, 39).Value = ddetails[i].polyhouse_total_ben;
                            worksheet.Cell(currentRow, 40).Value = ddetails[i].mulching_total_ben;
                            worksheet.Cell(currentRow, 41).Value = ddetails[i].hydrogel_total_ben;
                            worksheet.Cell(currentRow, 42).Value = ddetails[i].dsr_total_ben;
                            worksheet.Cell(currentRow, 43).Value = ddetails[i].other1_total_ben;
                            worksheet.Cell(currentRow, 44).Value = ddetails[i].other2_total_ben;
                            worksheet.Cell(currentRow, 45).Value = ddetails[i].other3_total_ben;
                            worksheet.Cell(currentRow, 46).Value = totalAll;
                            //worksheet.Cell(currentRow, 45).Value = ddetails[i].reject;
                            worksheet.Cell(currentRow, 47).Value = approval;
                            worksheet.Cell(currentRow, 48).Value = partial_approve;
                            worksheet.Cell(currentRow, 49).Value = ddetails[i].approval_remarks;
                            worksheet.Cell(currentRow, 50).Value = ddetails[i].TotalNpmuValue;

                            for (int j = 1; j <= 50; j++)
                            {
                                worksheet.Cell(currentRow, j).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                            }


                            int lastRow = currentRow;

                            if (lastRow == (ddetails.Count + 2))
                            {
                                currentRow++;
                                worksheet.Cell((lastRow + 1), 1).Value = "Total";
                                worksheet.Cell((lastRow + 1), 2).Value = "";
                                worksheet.Cell((lastRow + 1), 3).Value = "";
                                worksheet.Cell((lastRow + 1), 4).Value = "";
                                worksheet.Cell((lastRow + 1), 5).Value = "";
                                worksheet.Cell((lastRow + 1), 6).Value = "";

                                worksheet.Cell((lastRow + 1), 7).Value = supcon;
                                worksheet.Cell((lastRow + 1), 8).Value = polcon;
                                worksheet.Cell((lastRow + 1), 9).Value = mulcon;
                                worksheet.Cell((lastRow + 1), 10).Value = hydcon;
                                worksheet.Cell((lastRow + 1), 11).Value = dsrcon;
                                worksheet.Cell((lastRow + 1), 12).Value = othcon1;
                                worksheet.Cell((lastRow + 1), 13).Value = othcon2;
                                worksheet.Cell((lastRow + 1), 14).Value = othcon3;
                                worksheet.Cell((lastRow + 1), 15).Value = contot;
                                worksheet.Cell((lastRow + 1), 16).Value = supinc;
                                worksheet.Cell((lastRow + 1), 17).Value = polinc;
                                worksheet.Cell((lastRow + 1), 18).Value = mulinc;
                                worksheet.Cell((lastRow + 1), 19).Value = hydinc;
                                worksheet.Cell((lastRow + 1), 20).Value = dsrinc;
                                worksheet.Cell((lastRow + 1), 21).Value = othinc1;
                                worksheet.Cell((lastRow + 1), 22).Value = othinc2;
                                worksheet.Cell((lastRow + 1), 23).Value = othinc3;
                                worksheet.Cell((lastRow + 1), 24).Value = inctot;
                                worksheet.Cell((lastRow + 1), 25).Value = supfin;
                                worksheet.Cell((lastRow + 1), 26).Value = polfin;
                                worksheet.Cell((lastRow + 1), 27).Value = mulfin;
                                worksheet.Cell((lastRow + 1), 28).Value = hydfin;
                                worksheet.Cell((lastRow + 1), 29).Value = dsrfin;
                                worksheet.Cell((lastRow + 1), 30).Value = othfin1;
                                worksheet.Cell((lastRow + 1), 31).Value = othfin2;
                                worksheet.Cell((lastRow + 1), 32).Value = othfin3;
                                worksheet.Cell((lastRow + 1), 33).Value = fintot;
                                worksheet.Cell((lastRow + 1), 34).Value = alltot;
                                worksheet.Cell((lastRow + 1), 35).Value = "";
                                worksheet.Cell((lastRow + 1), 36).Value = "";
                                worksheet.Cell((lastRow + 1), 37).Value = "";
                                worksheet.Cell((lastRow + 1), 38).Value = supben;
                                worksheet.Cell((lastRow + 1), 39).Value = polben;
                                worksheet.Cell((lastRow + 1), 40).Value = mulben;
                                worksheet.Cell((lastRow + 1), 41).Value = hydben;
                                worksheet.Cell((lastRow + 1), 42).Value = dsrben;
                                worksheet.Cell((lastRow + 1), 43).Value = othben1;
                                worksheet.Cell((lastRow + 1), 44).Value = othben2;
                                worksheet.Cell((lastRow + 1), 45).Value = othben3;
                                worksheet.Cell((lastRow + 1), 46).Value = totalAllFinal;


                                for (int k = 1; k <= 46; k++)
                                {
                                    worksheet.Cell(currentRow, k).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                                }

                            }

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






                    }
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();

                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            "DLI4 Increase in area under other water saving method ( Ha) used for agriculture NPMU Admitted Claim .xlsx");
                    }
                }
            }
            catch (Exception ex)
            {
                Log($"ex Message 24-25: {ex.InnerException.Message.ToString()}");
                return Content(ex.Message.ToString());
            }
        }
        private void Log(string message)
        {
            string logFilePath = Server.MapPath("~/efficientlog.txt");
            using (StreamWriter writer = new StreamWriter(logFilePath, true))
            {
                writer.WriteLine($"{DateTime.Now}: {message}");
            }
        }
        [HttpPost]
        public ActionResult Approve_RemarkUpdate_c(string ids, string remarks, string type, decimal TotalNpmuValue)
        {
            List<dli4_water_saving_agriculture> dataList = new List<dli4_water_saving_agriculture>();
            if (Session["UserId"] != null)
            {
                var idList = ids.Split(',');
                try
                {
                    if (idList.Length > 0)
                    {
                        if (type == "P" || type == "R")
                        {
                            if (type == "R")
                            {
                                TotalNpmuValue = 0;
                            }
                            dataList = ABE.obj_dli4_water_saving_agriculture.Where(f => (idList.Contains(f.id.ToString()))).ToList();
                            dataList.ForEach(a =>
                            {
                                a.approval_remarks = remarks;
                                a.approval_status = type;
                                a.TotalNpmuValue = TotalNpmuValue;

                            });
                        }
                        else
                        {
                            dataList = ABE.obj_dli4_water_saving_agriculture.Where(f => (idList.Contains(f.id.ToString()))).ToList();
                            dataList.ForEach(a =>
                            {
                                a.approval_remarks = remarks;
                                a.approval_status = type;
                                a.TotalNpmuValue = Convert.ToDecimal(a.all_total_area);

                            });
                        }
                        dataList.ForEach(a =>
                        {
                            ABE.Entry(a).State = System.Data.Entity.EntityState.Modified;
                        });
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json(new { statusCode = 200, msg = "Data Updated successfully" });
                        }
                        else
                        {
                            return Json(new { statusCode = 101, msg = "Data not Updated!" });
                        }
                    }
                    else
                    {
                        return Json(new { statusCode = 102, msg = "Not Selected" });
                    }
                    //int[] IdsArr = ids.Split(',').Select(int.Parse).ToArray();
                    //foreach (var item in IdsArr)
                    //{

                    //    var ID = Convert.ToInt32(item);
                    //    var Data = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.id == ID).SingleOrDefault();
                    //    if (Data != null)
                    //    {

                    //        Data.id = ID;
                    //        Data.approval_status = type;
                    //        if (type == "P" || type == "R")
                    //        {
                    //            Data.approval_remarks = remarks;
                    //        }
                    //        else {
                    //            Data.approval_remarks = null;
                    //        }
                    //        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                    //        int A = ABE.SaveChanges();

                    //        if (A > 0)
                    //        {
                    //            return Json(new {statusCode=200,msg="Partial approved" });
                    //        }
                    //        else
                    //        {
                    //            return Json(new { statusCode = 101, msg = "Not approved" });
                    //        }
                    //    }
                    //    }
                }
                catch (Exception ex)
                {
                    return Json(new { statusCode = 400, msg = ex.Message });

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult approve_data_state_b(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_water_saving_agriculture.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "State";
                        Data.reject = "";


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
        public ActionResult reject_data_b(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_water_saving_agriculture.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
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
        public ActionResult Save_data(string state, string dist, string block, string year, string fy_phase, string separation)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var Data = new electricity_feeder_separation();
                    if (Data != null)
                    {
                        var datacheck = ABE.obj_electricity_feeder_separation.Where(x => x.state == state && x.district == dist && x.block == block && year == year && x.fy_phase == fy_phase).ToList().Count;
                        if (datacheck == 0)
                        {
                            Data.state = state;
                            Data.district = dist;
                            Data.block = block;
                            Data.year = year;
                            Data.fy_phase = fy_phase;
                            Data.separation = separation;
                            Data.entry_date = DateTime.Now;
                            Data.user_id = Session["Officer"].ToString();



                            ABE.obj_electricity_feeder_separation.Add(Data);
                            ABE.SaveChanges();
                            return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
                        }
                        else
                        {
                            return Json("You have already save data in this block", JsonRequestBehavior.AllowGet);
                        }

                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult Data_upload_doc(string Data)
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
                    var Year = result.year;
                    var fy_phase = result.fy_phase;

                    List<electricity_feeder_separation> details = new List<electricity_feeder_separation>();
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
                    }

                    if (details.Count != 0)
                    {
                        var jsonresult = Json(details, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult get_irrigation_system(string state, string district, string block, string gram, string year, string fy_phase)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<dli4_efficient_irrigation_system> ddetails = new List<dli4_efficient_irrigation_system>();
                   
                    if (year == "2022-23")
                    {

                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list

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
        public ActionResult get_irrigation_system2(string state, string district, string block, string gram, string year, string month, string fy_phase)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<dli4_efficient_irrigation_system> ddetails = new List<dli4_efficient_irrigation_system>();
                    if (year != "2023-24")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.month == month).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state).ToList();//total list
                        }
                    }
                    else
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null && month != "0" && month != "" && month != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.month == month).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district).ToList();//total list
                        }
                        else if (state != "0" && state != "" && state != null)
                        {
                            ddetails = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state).ToList();//total list
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
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }
        }
        [HttpPost]
        public JsonResult Save_dli4_area_with_crop_shifting(dli4_area_with_crop_shifting model)
        {
            if (model.id == 0)
            {
                model.userid = Session["Email"].ToString();
                model.entry_date = DateTime.Now.ToString("dd-MM-yyyy");
                ABE.obj_dli4_area_with_crop_shifting.Add(model);
                int rs = ABE.SaveChanges();
                ModelState.Clear();
                return Json("Data saved successfully.", JsonRequestBehavior.AllowGet);
            }
            else
            {
                var obj = new dli4_area_with_crop_shifting()
                {
                    id = model.id,
                    state = model.state,
                    district = model.district,
                    block = model.block,
                    gram = model.gram,
                    year = model.year,
                    fy_phase = model.fy_phase,
                    existing_high_wcc = model.existing_high_wcc,
                    //other_crop = model.other_crop,
                    other_existing_high_wcc = model.other_existing_high_wcc,
                    replacing_low_wcc = model.replacing_low_wcc,
                    hightolow_wcc = model.hightolow_wcc,
                    department = model.department,
                    other_department = model.other_department,
                    scheme = model.scheme,
                    other_scheme = model.other_scheme,
                    total_ben = model.total_ben,
                    //sc = model.sc,
                    //st = model.st,
                    //obc = model.obc,
                    //gen = model.gen,
                    userid = Session["Email"].ToString(),
                    entry_date = DateTime.Now.ToString("dd-MM-yyyy")
                };
                ABE.Entry(obj).State = EntityState.Modified;
                int rs = ABE.SaveChanges();
                ModelState.Clear();
                return Json("Data updated successfully.", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult get_area_with_crop_shifting(string state, string district, string block, string gram, string year, string fy_phase)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<dli4_area_with_crop_shifting> ddetails = new List<dli4_area_with_crop_shifting>();
                    if (year == "2022-23")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }
                    }
                    else
                    {
                        ddetails = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list

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
        public JsonResult delete_area_with_crop_shifting(int id)
        {
            var obj = new dli4_area_with_crop_shifting();
            obj.id = id;
            ABE.Entry(obj).State = EntityState.Deleted;
            //ABE.obj_dli4_area_with_crop_shifting.Remove(obj);
            int rs = ABE.SaveChanges();
            return Json(rs, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult get_area_with_crop_shifting_byId(int id)
        {
            var details = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.id == id).FirstOrDefault();
            return Json(details, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Save_dli4_water_saving_agriculture(List<dli4_water_saving_agriculture> data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var state = data[0].state;
                    var district = data[0].district;
                    var block = data[0].block;
                    var gram = data[0].gram;
                    var year = data[0].year;
                    var fy_phase = data[0].fy_phase;
                    var ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).FirstOrDefault();//total list
                    if (ddetails == null)
                    {
                        data[0].userid = Session["Email"].ToString();
                        data[0].entry_date = DateTime.Now.ToString("dd-MM-yyyy");
                        ABE.obj_dli4_water_saving_agriculture.Add(data[0]);
                        int rs = ABE.SaveChanges();
                        ModelState.Clear();
                        return Json("Data saved successfully.", JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        ddetails.super_area_covered_through_convergence = data[0].super_area_covered_through_convergence;
                        ddetails.super_area_covered_through_incentive = data[0].super_area_covered_through_incentive;
                        ddetails.super_area_covered_through_financing = data[0].super_area_covered_through_financing;
                        ddetails.hydrogel_area_covered_through_convergence = data[0].hydrogel_area_covered_through_convergence;
                        ddetails.hydrogel_area_covered_through_incentive = data[0].hydrogel_area_covered_through_incentive;
                        ddetails.hydrogel_area_covered_through_financing = data[0].hydrogel_area_covered_through_financing;
                        //ddetails.forestry_area_covered_through_convergence = data[0].forestry_area_covered_through_convergence;
                        //ddetails.forestry_area_covered_through_incentive = data[0].forestry_area_covered_through_incentive;
                        //ddetails.forestry_area_covered_through_financing = data[0].forestry_area_covered_through_financing;
                        ddetails.dsr_area_covered_through_convergence = data[0].dsr_area_covered_through_convergence;
                        ddetails.dsr_area_covered_through_incentive = data[0].dsr_area_covered_through_incentive;
                        ddetails.dsr_area_covered_through_financing = data[0].dsr_area_covered_through_financing;
                        ddetails.mulching_area_covered_through_convergence = data[0].mulching_area_covered_through_convergence;
                        ddetails.mulching_area_covered_through_incentive = data[0].mulching_area_covered_through_incentive;
                        ddetails.mulching_area_covered_through_financing = data[0].mulching_area_covered_through_financing;
                        ddetails.polyhouse_area_covered_through_convergence = data[0].polyhouse_area_covered_through_convergence;
                        ddetails.polyhouse_area_covered_through_incentive = data[0].polyhouse_area_covered_through_incentive;
                        ddetails.polyhouse_area_covered_through_financing = data[0].polyhouse_area_covered_through_financing;
                        ddetails.other_area_covered_through_convergence1 = data[0].other_area_covered_through_convergence1;
                        ddetails.other_area_covered_through_incentive1 = data[0].other_area_covered_through_incentive1;
                        ddetails.other_area_covered_through_financing1 = data[0].other_area_covered_through_financing1;
                        ddetails.other_area_covered_through_convergence2 = data[0].other_area_covered_through_convergence2;
                        ddetails.other_area_covered_through_incentive2 = data[0].other_area_covered_through_incentive2;
                        ddetails.other_area_covered_through_financing2 = data[0].other_area_covered_through_financing2;
                        ddetails.other_area_covered_through_convergence3 = data[0].other_area_covered_through_convergence3;
                        ddetails.other_area_covered_through_incentive3 = data[0].other_area_covered_through_incentive3;
                        ddetails.other_area_covered_through_financing3 = data[0].other_area_covered_through_financing3;
                        ddetails.convergence_total_area = data[0].convergence_total_area;
                        ddetails.incentive_total_area = data[0].incentive_total_area;
                        ddetails.financing_total_area = data[0].financing_total_area;
                        ddetails.all_total_area = data[0].all_total_area;
                        ddetails.other_water_saving_method1 = data[0].other_water_saving_method1;
                        ddetails.other_water_saving_method2 = data[0].other_water_saving_method2;
                        ddetails.other_water_saving_method3 = data[0].other_water_saving_method3;

                        ddetails.super_total_ben = data[0].super_total_ben;
                        //ddetails.super_sc_ben = data[0].super_sc_ben;
                        //ddetails.super_st_ben = data[0].super_st_ben;
                        //ddetails.super_obc_ben = data[0].super_obc_ben;
                        //ddetails.super_gen_ben = data[0].super_gen_ben;

                        ddetails.polyhouse_total_ben = data[0].polyhouse_total_ben;
                        //ddetails.polyhouse_sc_ben = data[0].polyhouse_sc_ben;
                        //ddetails.polyhouse_st_ben = data[0].polyhouse_st_ben;
                        //ddetails.polyhouse_obc_ben = data[0].polyhouse_obc_ben;
                        //ddetails.polyhouse_gen_ben = data[0].polyhouse_gen_ben;

                        ddetails.mulching_total_ben = data[0].mulching_total_ben;
                        //ddetails.mulching_sc_ben = data[0].mulching_sc_ben;
                        //ddetails.mulching_st_ben = data[0].mulching_st_ben;
                        //ddetails.mulching_obc_ben = data[0].mulching_obc_ben;
                        //ddetails.mulching_gen_ben = data[0].mulching_gen_ben;

                        ddetails.hydrogel_total_ben = data[0].hydrogel_total_ben;
                        //ddetails.hydrogel_sc_ben = data[0].hydrogel_sc_ben;
                        //ddetails.hydrogel_st_ben = data[0].hydrogel_st_ben;
                        //ddetails.hydrogel_obc_ben = data[0].hydrogel_obc_ben;
                        //ddetails.hydrogel_gen_ben = data[0].hydrogel_gen_ben;

                        ddetails.dsr_total_ben = data[0].dsr_total_ben;
                        //ddetails.dsr_sc_ben = data[0].dsr_sc_ben;
                        //ddetails.dsr_st_ben = data[0].dsr_st_ben;
                        //ddetails.dsr_obc_ben = data[0].dsr_obc_ben;
                        //ddetails.dsr_gen_ben = data[0].dsr_gen_ben;

                        ddetails.other1_total_ben = data[0].other1_total_ben;
                        //ddetails.other1_sc_ben = data[0].other1_sc_ben;
                        //ddetails.other1_st_ben = data[0].other1_st_ben;
                        //ddetails.other1_obc_ben = data[0].other1_obc_ben;
                        //ddetails.other1_gen_ben = data[0].other1_gen_ben;

                        ddetails.other2_total_ben = data[0].other2_total_ben;
                        //ddetails.other2_sc_ben = data[0].other2_sc_ben;
                        //ddetails.other2_st_ben = data[0].other2_st_ben;
                        //ddetails.other2_obc_ben = data[0].other2_obc_ben;
                        //ddetails.other2_gen_ben = data[0].other2_gen_ben;

                        ddetails.other3_total_ben = data[0].other3_total_ben;
                        //ddetails.other3_sc_ben = data[0].other3_sc_ben;
                        //ddetails.other3_st_ben = data[0].other3_st_ben;
                        //ddetails.other3_obc_ben = data[0].other3_obc_ben;
                        //ddetails.other3_gen_ben = data[0].other3_gen_ben;

                        ddetails.entry_date = DateTime.Now.ToString("dd-MM-yyyy");
                        ddetails.userid = Session["Email"].ToString();
                        ddetails.approve = "At DPMU";

                        ABE.Entry(ddetails).State = EntityState.Modified;
                        ABE.SaveChanges();
                        return Json("Updated Successfully", JsonRequestBehavior.AllowGet);
                    }

                }
                catch (Exception Ex)
                {
                    return Json(Ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }

        }

        [HttpPost]
        public ActionResult get_dli4_water_saving_agriculture(string state, string district, string block, string gram, string year, string fy_phase)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<dli4_water_saving_agriculture> ddetails = new List<dli4_water_saving_agriculture>();
                   
                    if (year == "2022-23")
                    {
                        if (state != "0" && state != "" && state != null && district != "0" && district != "" && district != null && block != "0" && block != "" && block != null && gram != "0" && gram != "" && gram != null && year != "0" && year != "" && year != null)
                        {
                            ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();//total list
                        }
                    }
                    else
                    {
                        ddetails = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();//total list
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
        //[HttpPost]
        //public ActionResult save_agriculture_method(List<dli4_water_saving_agriculture> Data)
        //{
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            if (Data[0].id == 0)
        //            {
        //                Data[0].userid = Session["Email"].ToString();
        //                Data[0].entry_date = DateTime.Today.ToString("dd-MM-yyyy");
        //                ABE.obj_dli4_water_saving_agriculture.Add(Data[0]);
        //                ABE.SaveChanges();
        //                return Json("Saved Successfully", JsonRequestBehavior.AllowGet);
        //            }
        //            else
        //            {
        //                var obj = new dli4_water_saving_agriculture()
        //                {
        //                    id = Data[0].id,
        //                    state = Data[0].state,
        //                    district = Data[0].district,
        //                    block = Data[0].block,
        //                    gram = Data[0].gram,
        //                    year = Data[0].year,
        //                    water_saving_methods = Data[0].water_saving_methods,
        //                    other_water_saving_methods = Data[0].other_water_saving_methods,
        //                    area_covered_through_convergence = Data[0].area_covered_through_convergence,
        //                    area_covered_through_financing = Data[0].area_covered_through_financing,
        //                    area_covered_through_incentive = Data[0].area_covered_through_incentive,
        //                    total_area = Data[0].total_area,
        //                    entry_date = DateTime.Today.ToString("dd-MM-yyyy"),
        //                    userid = Session["Email"].ToString()
        //                };
        //                ABE.Entry(obj).State = EntityState.Modified;
        //                ABE.SaveChanges();
        //                return Json("Updated Successfully", JsonRequestBehavior.AllowGet);
        //            }

        //        }
        //        catch (Exception Ex)
        //        {
        //            return Json("Error", JsonRequestBehavior.AllowGet);
        //        }
        //    }
        //    else
        //    {
        //        return Json("Logout", JsonRequestBehavior.AllowGet);
        //        // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
        //    }

        //}
        public JsonResult delete_dli4_water_saving_agriculture(int id)
        {
            var obj = new dli4_water_saving_agriculture();
            obj.id = id;
            ABE.Entry(obj).State = EntityState.Deleted;
            //ABE.obj_dli4_area_with_crop_shifting.Remove(obj);
            int rs = ABE.SaveChanges();
            return Json(rs, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult get_dli4_water_saving_agriculture_byId(int id)
        {
            var details = ABE.obj_dli4_water_saving_agriculture.Where(x => x.id == id).FirstOrDefault();
            return Json(details, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Submit_To_SPMU(string state, string district, string block, string gram, string year, string fy_phase)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    if (year == "2022-23")
                    {
                        var ddetails1 = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).FirstOrDefault();//total list
                        var ddetails2 = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).ToList();
                        var ddetails3 = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year).FirstOrDefault();
                        if (ddetails1 != null)
                        {
                            if (ddetails1.approve == "" || ddetails1.approve == null || ddetails1.approve == "Reject" || ddetails1.approve == "At DPMU")
                            {
                                ddetails1.approve = "Dist";
                                ABE.Entry(ddetails1).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                        if (ddetails3 != null)
                        {
                            if (ddetails3.approve == "" || ddetails3.approve == null || ddetails3.approve == "Reject" || ddetails3.approve == "At DPMU")
                            {
                                ddetails3.approve = "Dist";
                                ABE.Entry(ddetails3).State = EntityState.Modified;
                                ABE.SaveChanges();
                            }
                        }
                        if (ddetails2.Count != 0)
                        {
                            foreach (var item in ddetails2)
                            {
                                if (item.approve != "" || item.approve != null || item.approve != "Reject" || item.approve != "Reject")
                                {
                                    item.approve = "Dist";
                                    ABE.Entry(item).State = EntityState.Modified;
                                    ABE.SaveChanges();
                                }
                            }
                        }

                        return Json("Successfully submit to SPMU");
                    }
                    else
                    {
                        var ddetails1 = ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).FirstOrDefault();//total list
                        var ddetails2 = ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).ToList();
                        var ddetails3 = ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.district == district && x.block == block && x.gram == gram && x.year == year && x.fy_phase == fy_phase).FirstOrDefault();
                        if (ddetails1 != null)
                        {
                            if (ddetails1.approve == "" || ddetails1.approve == null || ddetails1.approve == "Reject")
                            {
                                ddetails1.approve = "Dist";
                                ABE.Entry(ddetails1).State = EntityState.Modified;
                                ABE.SaveChanges();

                            }

                        }
                        if (ddetails3 != null)
                        {
                            if (ddetails3.approve == "" || ddetails3.approve == null || ddetails3.approve == "Reject")
                            {
                                ddetails3.approve = "Dist";
                                ABE.Entry(ddetails3).State = EntityState.Modified;
                                ABE.SaveChanges();

                            }
                        }
                        if (ddetails2.Count != 0)
                        {
                            foreach (var item in ddetails2)
                            {
                                if (item.approve != "" || item.approve != null || item.approve != "Reject")
                                {
                                    item.approve = "Dist";
                                    ABE.Entry(item).State = EntityState.Modified;
                                    ABE.SaveChanges();
                                }
                            }
                        }
                        return Json("Successfully submit to SPMU");
                    }

                }
                catch (Exception Ex)
                {
                    return Json(Ex, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
                // return RedirectToAction("WSP_GWM_HOME", "WSPNew");
            }

        }
        [HttpPost]
        public ActionResult Save_dli4_upload_document(string state, string dist, string year, string fy_phase, string description, HttpPostedFileBase image)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var Data = new dli4_upload_document();
                    if (Data != null)
                    {


                        Data.state = state;
                        Data.district = dist;
                        Data.year = year;
                        Data.fy_phase = fy_phase;
                        string phase = fy_phase.Replace("-", "_");
                        Data.description = description;
                        Data.entry_date = DateTime.Now;
                        Data.user_id = Session["Officer"].ToString();

                        if (image != null)
                        {

                            if (image.FileName != null)
                            {

                                string ext = Path.GetExtension(image.FileName);
                                string name = Path.GetFileNameWithoutExtension(image.FileName);
                                string FileName = name + DateTime.Now.Ticks + ext;
                                String FileExt = Path.GetExtension(image.FileName).ToUpper();
                                if (FileExt != ".PDF" && FileExt != ".XLSX" && FileExt != ".XLS")
                                {
                                    return Json("Please Choose Valid File!", JsonRequestBehavior.AllowGet);

                                }
                                string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DLI4\\" + year + "\\" + phase + "\\");
                                if (!Directory.Exists(path))
                                {
                                    Directory.CreateDirectory(path);
                                }
                                path = path + FileName;
                                string[] count = image.FileName.Split('.');
                                if (count.Length != 2)
                                {
                                    return Json("Your Upload file has Double Extention, Please Upload proper file", JsonRequestBehavior.AllowGet);
                                }
                                image.SaveAs(path);
                                Data.image_name = FileName;
                                Data.image_path = "/Ataljalimages/DLI4/" + year + "/" + phase + "/" + FileName;

                            }
                        }

                        ABE.obj_dli4_upload_document.Add(Data);
                        ABE.SaveChanges();
                        return Json("Successfully Saved", JsonRequestBehavior.AllowGet);

                    }

                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult Update_upload_DLI4(string id, string state, string dist, string description, HttpPostedFileBase image)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        if (Data.fy_phase != null || Data.fy_phase != "" || Data.fy_phase != "NULL")
                        {


                            Data.state = state;
                            Data.district = dist;
                            Data.description = description;

                            string phaseformat = Data.fy_phase;
                            string phase = phaseformat.Replace("-", "_");

                            Malicious_File_Upload_Restriction obj_Validate = new Malicious_File_Upload_Restriction();
                            if (image != null)
                            {
                                ++k;
                                string ext = Path.GetExtension(image.FileName);
                                string name = Path.GetFileNameWithoutExtension(image.FileName);
                                string FileName = name + DateTime.Now.Ticks + k + ext;
                                //bool flag = obj_Validate.CheckValidFile(image, allowed_file_format);

                                if (image.FileName != null)
                                {
                                    String FileExt = Path.GetExtension(image.FileName).ToUpper();
                                    if (FileExt != ".PDF" && FileExt != ".XLSX" && FileExt != ".XLS")
                                    {
                                        return Json("Pleae Choose Valid File!", JsonRequestBehavior.AllowGet);

                                    }
                                    string BasePath = AppDomain.CurrentDomain.BaseDirectory;
                                    string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\DLI4\\" + Data.year + "\\" + phase + "\\");
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
                                    Data.image_path = "/Ataljalimages/DLI4/" + Data.year + "/" + phase + "/" + FileName;

                                }
                            }


                            Data.entry_date = DateTime.Now;
                            Data.user_id = Session["Officer"].ToString();


                            ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                            int A = ABE.SaveChanges();
                            if (A > 0)
                            {
                                return Json("Successfully Update");
                            }


                        }
                    }
                    else
                    {
                        return Json("Data not updated");
                    }
                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult get_dli4_upload_document(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<Pagenum>(Data);

                    var State = result.statename;
                    var Dist = result.districtname;
                    var year = result.year;
                    var fy_phase = result.fy_phase;

                    List<dli4_upload_document> details = new List<dli4_upload_document>();
                    if (year == "2022-23")
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            details = ABE.obj_dli4_upload_document.Where(x => x.state == State && x.district == Dist).OrderByDescending(x => x.id).ToList();//total list                      
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            details = ABE.obj_dli4_upload_document.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list                      
                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && year != "0" && year != "" && year != null)
                        {
                            details = ABE.obj_dli4_upload_document.Where(x => x.state == State && x.district == Dist && x.year == year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            details = ABE.obj_dli4_upload_document.Where(x => x.state == State && x.district == Dist && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
                        }
                        else if (State != "0" && State != "" && State != null && year != "0" && year != "" && year != null)
                        {
                            details = ABE.obj_dli4_upload_document.Where(x => x.state == State && x.year == year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            details = ABE.obj_dli4_upload_document.Where(x => x.state == State && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
                        }
                    }


                    if (details.Count != 0)
                    {
                        var jsonresult = Json(details, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
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
        public ActionResult approve_data_upload(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "Dist";
                        Data.reject = "";


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
        public ActionResult approve_data_state_upload(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "State";
                        Data.reject = "";


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
        public ActionResult reject_data_upload(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
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
        public JsonResult Delete_data_upload(int id)
        {
            var obj = new dli4_upload_document();
            obj.id = id;
            ABE.Entry(obj).State = EntityState.Deleted;
            //ABE.obj_dli4_area_with_crop_shifting.Remove(obj);
            int rs = ABE.SaveChanges();
            return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult GetAllData(string state, string year)
        {
            List<dli_4_report> DataList = new List<dli_4_report>();
            string[] areas = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
            string[] years = { "2021-22", "2022-23", "2023-24", "2024-25","2025-26" };
            string[] Phases = { "Phase-1", "Phase-2","Phase-3" };
            if (state == "All" && year == "All")
            {
                foreach (string i in areas)
                {
                    foreach (string j in years)
                    {

                        if (j != "2021-22")
                        {
                            if (j == "2023-24")
                            {
                                foreach (var item in Phases)
                                {
                                    dli_4_report Data2 = new dli_4_report();
                                    Data2.state = i;
                                    Data2.year = j;
                                    Data2.phase = item;
                                    Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                    Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                    Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                    Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                    Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                    Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                    DataList.Add(Data2);
                                }
                            }
                            else if (j == "2024-25")
                            {
                                foreach (var item in Phases)
                                {
                                    dli_4_report Data2 = new dli_4_report();
                                    Data2.state = i;
                                    Data2.year = j;
                                    Data2.phase = item;
                                    Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                    Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                    Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                    Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                    Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                    Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                    DataList.Add(Data2);
                                }
                            }
                            else if (j == "2025-26")
                            {
                                foreach (var item in Phases)
                                {
                                    dli_4_report Data2 = new dli_4_report();
                                    Data2.state = i;
                                    Data2.year = j;
                                    Data2.phase = item;
                                    Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                    Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                    Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                    Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                    Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                    Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                    DataList.Add(Data2);
                                }
                            }
                            else if (j == "2022-23")
                            {
                                dli_4_report Data = new dli_4_report();
                                Data.state = i;
                                Data.year = j;
                                Data.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State").ToList().Sum(x => x.sprinkler_total));
                                Data.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State").ToList().Sum(x => x.drip_total));
                                Data.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == j && x.approve == "State").ToList().Sum(x => x.pipeline_total));
                                Data.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == j && x.approve == "State").ToList().Sum(x => x.hightolow_wcc));
                                Data.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == j && x.approve == "State").ToList().Sum(x => x.all_total_area));
                                Data.total_claim = Data.sprinkler_irrigation + Data.drip_irrigation + Data.pipeline_irrigation + Data.crop_shifting + Data.water_saving_method;
                                DataList.Add(Data);
                            }
                        }
                        else
                        {
                            dli_4_report Data1 = new dli_4_report();
                            List<dli_4_report> DataListItem = new List<dli_4_report>();
                            Data1.state = i;
                            Data1.year = j;
                            var objectdata = ABE.obj_dli4_2122_statewisedata.Where(x => x.state == i && x.year == j).SingleOrDefault();
                            if (objectdata != null)
                            {

                                Data1.sprinkler_irrigation = Convert.ToDouble(objectdata.sprinkler_total);
                                Data1.drip_irrigation = Convert.ToDouble(objectdata.drip_total);
                                Data1.pipeline_irrigation = Convert.ToDouble(objectdata.pipeline_total);
                                Data1.crop_shifting = Convert.ToDouble(objectdata.hightolow_wcc);
                                Data1.water_saving_method = Convert.ToDouble(objectdata.all_total_area);
                                Data1.total_claim = Convert.ToDouble(objectdata.total_claim);
                                DataListItem.Add(Data1);

                            }
                            DataList.AddRange(DataListItem);

                        }

                    }
                }
            }
            else if (state != "All" && year != "All")
            {

                if (year != "2021-22")
                {
                    if (year == "2023-24")
                    {
                        foreach (var item in Phases)
                        {
                            dli_4_report Data2 = new dli_4_report();
                            Data2.state = state;
                            Data2.year = year;
                            Data2.phase = item;
                            Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                            Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                            Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                            Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                            Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                            Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                            DataList.Add(Data2);
                        }
                    }
                    else if (year == "2024-25")
                    {
                        foreach (var item in Phases)
                        {
                            dli_4_report Data2 = new dli_4_report();
                            Data2.state = state;
                            Data2.year = year;
                            Data2.phase = item;
                            Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                            Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                            Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                            Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                            Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                            Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                            DataList.Add(Data2);
                        }
                    }
                    else if (year == "2025-26")
                    {
                        foreach (var item in Phases)
                        {
                            dli_4_report Data2 = new dli_4_report();
                            Data2.state = state;
                            Data2.year = year;
                            Data2.phase = item;
                            Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                            Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                            Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                            Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                            Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                            Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                            DataList.Add(Data2);
                        }
                    }
                    else if (year == "2022-23")
                    {
                        dli_4_report Data = new dli_4_report();
                        Data.state = state;
                        Data.year = year;
                        Data.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State").ToList().Sum(x => x.sprinkler_total));
                        Data.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State").ToList().Sum(x => x.drip_total));
                        Data.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == year && x.approve == "State").ToList().Sum(x => x.pipeline_total));
                        Data.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == year && x.approve == "State").ToList().Sum(x => x.hightolow_wcc));
                        Data.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == year && x.approve == "State").ToList().Sum(x => x.all_total_area));
                        Data.total_claim = Data.sprinkler_irrigation + Data.drip_irrigation + Data.pipeline_irrigation + Data.crop_shifting + Data.water_saving_method;
                        DataList.Add(Data);
                    }

                }
                //2021-22
                else
                {
                    dli_4_report Data1 = new dli_4_report();
                    List<dli_4_report> DataListItem = new List<dli_4_report>();
                    Data1.state = state;
                    Data1.year = year;
                    var objectdata = ABE.obj_dli4_2122_statewisedata.Where(x => x.state == state && x.year == year).SingleOrDefault();
                    if (objectdata != null)
                    {

                        Data1.sprinkler_irrigation = Convert.ToDouble(objectdata.sprinkler_total);
                        Data1.drip_irrigation = Convert.ToDouble(objectdata.drip_total);
                        Data1.pipeline_irrigation = Convert.ToDouble(objectdata.pipeline_total);
                        Data1.crop_shifting = Convert.ToDouble(objectdata.hightolow_wcc);
                        Data1.water_saving_method = Convert.ToDouble(objectdata.all_total_area);
                        Data1.total_claim = Convert.ToDouble(objectdata.total_claim);
                        DataListItem.Add(Data1);

                    }
                    DataList.AddRange(DataListItem);
                }


            }
            else if (state != "All" && year == "All")
            {
                foreach (string j in years)
                {

                    if (j != "2021-22")
                    {
                        if (j == "2023-24")
                        {
                            foreach (var item in Phases)
                            {
                                dli_4_report Data2 = new dli_4_report();
                                Data2.state = state;
                                Data2.year = j;
                                Data2.phase = item;
                                Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                DataList.Add(Data2);
                            }
                        }
                        else if (j == "2024-25")
                        {
                            foreach (var item in Phases)
                            {
                                dli_4_report Data2 = new dli_4_report();
                                Data2.state = state;
                                Data2.year = j;
                                Data2.phase = item;
                                Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                DataList.Add(Data2);
                            }
                        }
                        else if (j == "2025-26")
                        {
                            foreach (var item in Phases)
                            {
                                dli_4_report Data2 = new dli_4_report();
                                Data2.state = state;
                                Data2.year = j;
                                Data2.phase = item;
                                Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == j && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                DataList.Add(Data2);
                            }
                        }
                        else if(j == "2022-23")
                        {
                            dli_4_report Data = new dli_4_report();
                            Data.state = state;
                            Data.year = j;
                            Data.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State").ToList().Sum(x => x.sprinkler_total));
                            Data.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State").ToList().Sum(x => x.drip_total));
                            Data.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == state && x.year == j && x.approve == "State").ToList().Sum(x => x.pipeline_total));
                            Data.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == state && x.year == j && x.approve == "State").ToList().Sum(x => x.hightolow_wcc));
                            Data.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == state && x.year == j && x.approve == "State").ToList().Sum(x => x.all_total_area));
                            Data.total_claim = Data.sprinkler_irrigation + Data.drip_irrigation + Data.pipeline_irrigation + Data.crop_shifting + Data.water_saving_method;
                            DataList.Add(Data);
                        }
                    }
                    else
                    {

                        dli_4_report Data1 = new dli_4_report();
                        List<dli_4_report> DataListItem = new List<dli_4_report>();
                        Data1.state = state;
                        Data1.year = j;
                        var objectdata = ABE.obj_dli4_2122_statewisedata.Where(x => x.state == state && x.year == j).SingleOrDefault();
                        if (objectdata != null)
                        {

                            Data1.sprinkler_irrigation = Convert.ToDouble(objectdata.sprinkler_total);
                            Data1.drip_irrigation = Convert.ToDouble(objectdata.drip_total);
                            Data1.pipeline_irrigation = Convert.ToDouble(objectdata.pipeline_total);
                            Data1.crop_shifting = Convert.ToDouble(objectdata.hightolow_wcc);
                            Data1.water_saving_method = Convert.ToDouble(objectdata.all_total_area);
                            Data1.total_claim = Convert.ToDouble(objectdata.total_claim);
                            DataListItem.Add(Data1);

                        }
                        DataList.AddRange(DataListItem);
                    }


                }
            }
            else if (state == "All" && year != "All")
            {
                foreach (string i in areas)
                {
                    if (year != "2021-22")
                    {
                        if (year == "2023-24")
                        {
                            foreach (var item in Phases)
                            {
                                dli_4_report Data2 = new dli_4_report();
                                Data2.state = i;
                                Data2.year = year;
                                Data2.phase = item;
                                Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                DataList.Add(Data2);
                            }
                        }
                        else if (year == "2024-25")
                        {
                            foreach (var item in Phases)
                            {
                                dli_4_report Data2 = new dli_4_report();
                                Data2.state = i;
                                Data2.year = year;
                                Data2.phase = item;
                                Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                DataList.Add(Data2);
                            }
                        }
                        else if (year == "2025-26")
                        {
                            foreach (var item in Phases)
                            {
                                dli_4_report Data2 = new dli_4_report();
                                Data2.state = i;
                                Data2.year = year;
                                Data2.phase = item;
                                Data2.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.sprinkler_total));
                                Data2.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.drip_total));
                                Data2.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.pipeline_total));
                                Data2.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.hightolow_wcc));
                                Data2.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == year && x.approve == "State" && x.fy_phase == item).ToList().Sum(x => x.all_total_area));
                                Data2.total_claim = Data2.sprinkler_irrigation + Data2.drip_irrigation + Data2.pipeline_irrigation + Data2.crop_shifting + Data2.water_saving_method;
                                DataList.Add(Data2);
                            }
                        }
                        else if (year == "2022-23")
                        {
                            dli_4_report Data = new dli_4_report();
                            Data.state = i;
                            Data.year = year;
                            Data.sprinkler_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State").ToList().Sum(x => x.sprinkler_total));
                            Data.drip_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State").ToList().Sum(x => x.drip_total));
                            Data.pipeline_irrigation = Convert.ToDouble(ABE.obj_dli4_efficient_irrigation_system.Where(x => x.state == i && x.year == year && x.approve == "State").ToList().Sum(x => x.pipeline_total));
                            Data.crop_shifting = Convert.ToDouble(ABE.obj_dli4_area_with_crop_shifting.Where(x => x.state == i && x.year == year && x.approve == "State").ToList().Sum(x => x.hightolow_wcc));
                            Data.water_saving_method = Convert.ToDouble(ABE.obj_dli4_water_saving_agriculture.Where(x => x.state == i && x.year == year && x.approve == "State").ToList().Sum(x => x.all_total_area));
                            Data.total_claim = Data.sprinkler_irrigation + Data.drip_irrigation + Data.pipeline_irrigation + Data.crop_shifting + Data.water_saving_method;
                            DataList.Add(Data);
                        }
                    }
                    else
                    {

                        dli_4_report Data1 = new dli_4_report();
                        List<dli_4_report> DataListItem = new List<dli_4_report>();
                        Data1.state = state;
                        Data1.year = year;
                        var objectdata = ABE.obj_dli4_2122_statewisedata.Where(x => x.state == i && x.year == year).SingleOrDefault();
                        if (objectdata != null)
                        {

                            Data1.sprinkler_irrigation = Convert.ToDouble(objectdata.sprinkler_total);
                            Data1.drip_irrigation = Convert.ToDouble(objectdata.drip_total);
                            Data1.pipeline_irrigation = Convert.ToDouble(objectdata.pipeline_total);
                            Data1.crop_shifting = Convert.ToDouble(objectdata.hightolow_wcc);
                            Data1.water_saving_method = Convert.ToDouble(objectdata.all_total_area);
                            Data1.total_claim = Convert.ToDouble(objectdata.total_claim);
                            DataListItem.Add(Data1);

                        }
                        DataList.AddRange(DataListItem);
                    }
                }
            }

            return Json(DataList, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Delete_data_uploadfeed(int id)
        {
            var obj = new electricity_feeder_separation();
            obj.id = id;
            ABE.Entry(obj).State = EntityState.Deleted;
            int rs = ABE.SaveChanges();
            return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Update_DLI4feed(string id, string description)
        {

            if (Session["UserId"] != null)
            {
                try
                {
                    int k = 0;
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_electricity_feeder_separation.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.separation = description;
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Successfully Update");
                        }
                    }
                    else
                    {
                        return Json("Data not updated");
                    }
                }
                catch (Exception ex)
                {
                    return Json("");

                }
                return Json("Invalid");
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult approve_data_feed(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_electricity_feeder_separation.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "NPMU";
                        Data.reject = "";


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Submit To NPMU");
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
        public ActionResult approve_data_state_feed(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_electricity_feeder_separation.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "Approve";
                        Data.reject = "";


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
        public ActionResult reject_data_feed(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_electricity_feeder_separation.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approve = "Reject";
                        Data.reject = reject;


                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
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

        public ActionResult exportexcelfeed(string State, string Dist, string Block, string Year, string fy_phase)
        {

            JavaScriptSerializer js = new JavaScriptSerializer();

            List<electricity_feeder_separation> details = new List<electricity_feeder_separation>();
            if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && fy_phase != "0" && fy_phase != "" && fy_phase != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == Year).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.block == Block && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && fy_phase != "0" && fy_phase != "" && fy_phase != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.year == Year).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.district == Dist && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && fy_phase != "0" && fy_phase != "" && fy_phase != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.year == Year && x.fy_phase == fy_phase).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State && x.year == Year).OrderByDescending(x => x.id).ToList();//total list                      
            }
            else if (State != "0" && State != "" && State != null)
            {
                details = ABE.obj_electricity_feeder_separation.Where(x => x.state == State).OrderByDescending(x => x.id).ToList();//total list                      
            }

            using (var workbook = new XLWorkbook())
            {

                var worksheet = workbook.Worksheets.Add("Training Calender State Level");
                var currentRow = 1;
                worksheet.Cell(currentRow, 1).Value = "State";
                worksheet.Cell(currentRow, 2).Value = "District";
                worksheet.Cell(currentRow, 3).Value = "Block";
                worksheet.Cell(currentRow, 4).Value = "Year";
                worksheet.Cell(currentRow, 5).Value = "Phase";
                worksheet.Cell(currentRow, 6).Value = "Brought under feeder separation in claim duration";
                worksheet.Cell(currentRow, 7).Value = "Data Validation";
                worksheet.Cell(currentRow, 8).Value = "Reject Remark";

                if (details.Count != 0)
                {
                    foreach (var user in details)
                    {
                        currentRow++;
                        var approve = user.approve;
                        if (approve == null || approve == "")
                        {
                            approve = "At SPMU";
                        }
                        else if (approve == "NPMU")
                        {
                            approve = "Submitted To NPMU";
                        }
                        else if (approve == "Approve")
                        {
                            approve = "Approved";
                        }
                        else if (approve == "Reject")
                        {
                            approve = "Rejected";
                        }
                        var reject_status = user.reject;
                        if (reject_status == null)
                        {
                            reject_status = "";
                        }
                        worksheet.Cell(currentRow, 1).Value = user.state;
                        worksheet.Cell(currentRow, 2).Value = user.district;
                        worksheet.Cell(currentRow, 3).Value = user.block;
                        worksheet.Cell(currentRow, 4).Value = user.year;
                        worksheet.Cell(currentRow, 5).Value = user.fy_phase;
                        worksheet.Cell(currentRow, 6).Value = user.separation;
                        worksheet.Cell(currentRow, 7).Value = approve;
                        worksheet.Cell(currentRow, 8).Value = reject_status;

                    }
                }
                else
                {
                    currentRow++;
                    worksheet.Cell(currentRow, 1).Value = "";
                    worksheet.Cell(currentRow, 2).Value = "";
                    worksheet.Cell(currentRow, 3).Value = "No Data";
                    worksheet.Cell(currentRow, 4).Value = "";
                    worksheet.Cell(currentRow, 5).Value = "";
                    worksheet.Cell(currentRow, 6).Value = "";

                }
                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    var content = stream.ToArray();

                    return File(
                        content,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        "Electricity Feeder Sepration.xlsx");
                }
            }

        }




        //   Admitted Claim




        [HttpPost]
        
        public JsonResult Delete_data_upload_npmu(int id)
        {
            // Check if user is logged in
            if (Session["UserId"] == null)
                return Json("Logout", JsonRequestBehavior.AllowGet);

            try
            {
                var obj = ABE.obj_dli4_upload_document_npmu.SingleOrDefault(x => x.id == id);
                if (obj == null)
                    return Json("Data not found", JsonRequestBehavior.AllowGet);

                ABE.Entry(obj).State = EntityState.Deleted;
                int rs = ABE.SaveChanges();

                if (rs > 0)
                    return Json("Deleted Successfully", JsonRequestBehavior.AllowGet);
                else
                    return Json("No record deleted", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult Update_upload_DLI4_npmu(string id, string state, string dist, string description, HttpPostedFileBase image)
        {
            if (Session["UserId"] == null)
                return Json("Logout", JsonRequestBehavior.AllowGet);
            try
            {
                int recordId = Convert.ToInt32(id);
                var data = ABE.obj_dli4_upload_document_npmu.SingleOrDefault(x => x.id == recordId);
                if (data == null)
                    return Json("Data not found", JsonRequestBehavior.AllowGet);             
                data.state = state;
                data.district = dist;
                data.description = description;             
                if (image != null)
                {
                    string ext = Path.GetExtension(image.FileName).Trim().ToUpper();
                    if (ext != ".PDF" && ext != ".XLSX" && ext != ".XLS")
                        return Json("Please choose a valid file (.pdf, .xlsx, .xls).", JsonRequestBehavior.AllowGet);
                    string name = Path.GetFileNameWithoutExtension(image.FileName);
                    string fileName = name + "_" + DateTime.Now.Ticks + ext;                  
                    if (image.FileName.Contains("#") || image.FileName.Contains("$"))
                        return Json("Please use a proper file name without special characters (#, $).", JsonRequestBehavior.AllowGet);
                    if (image.FileName.Split('.').Length != 2)
                        return Json("Your upload file has a double extension, please upload a proper file.", JsonRequestBehavior.AllowGet);               
                    string basePath = AppDomain.CurrentDomain.BaseDirectory;                
                    string folderPath = Path.Combine(basePath, "Ataljalimages", "DLI4", "admitted_claim");
                    if (!string.IsNullOrEmpty(data.year))
                        folderPath = Path.Combine(folderPath, data.year.ToString());
                    if (!string.IsNullOrEmpty(data.fy_phase) && data.fy_phase.ToUpper() != "NULL")
                    {
                        string phase = data.fy_phase.Replace("-", "_");
                        folderPath = Path.Combine(folderPath, phase);
                    }                   
                    Directory.CreateDirectory(folderPath);                  
                    string fullPath = Path.Combine(folderPath, fileName);
                    image.SaveAs(fullPath);                  
                    data.image_name = fileName;
                    data.image_path = $"/Ataljalimages/DLI4/admitted_claim/{(string.IsNullOrEmpty(data.year) ? "" : data.year + "/")}{(string.IsNullOrEmpty(data.fy_phase) || data.fy_phase.ToUpper() == "NULL" ? "" : data.fy_phase.Replace("-", "_") + "/")}{fileName}";
                }            
                data.entry_date = DateTime.Now;
                data.user_id = Session["Officer"]?.ToString() ?? "";
                ABE.Entry(data).State = System.Data.Entity.EntityState.Modified;
                int result = ABE.SaveChanges();
                if (result > 0)
                    return Json("Successfully Updated", JsonRequestBehavior.AllowGet);
                else
                    return Json("No changes detected", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult approve_data_upload_npmu(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_upload_document.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {
                        Data.id = ID;
                        Data.approval = "Dist";
                        Data.reject = "";
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
        public ActionResult approve_data_state_upload_npmu(string id)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_upload_document_npmu.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "State";
                        Data.reject = "";
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

        public ActionResult get_dli4_upload_document_npmu(string Data)
        {
            if (Session["UserId"] == null)
                return Json(new { status = "Logout" }, JsonRequestBehavior.AllowGet);
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                var result = js.Deserialize<Pagenum>(Data);
                string state = result?.statename?.Trim();
                string dist = result?.districtname?.Trim();
                string year = result?.year?.Trim();
                string fy_phase = result?.fy_phase?.Trim();
                if (string.IsNullOrEmpty(state) || state == "0")
                    return Json(new { status = "Error", message = "Please select a valid state." }, JsonRequestBehavior.AllowGet);              
                var query = ABE.obj_dli4_upload_document_npmu.AsQueryable()
                                .Where(x => x.state == state);
                if (!string.IsNullOrEmpty(dist) && dist != "0" && dist != "undefined")
                    query = query.Where(x => x.district == dist);
                if (!string.IsNullOrEmpty(year) && year != "0" && year != "undefined")
                    query = query.Where(x => x.year == year);
                if (!string.IsNullOrEmpty(fy_phase) && fy_phase != "0" && fy_phase != "undefined")
                    query = query.Where(x => x.fy_phase == fy_phase);
                var details = query.OrderByDescending(x => x.id).ToList();
                return Json(new { status = "OK", data = details }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { status = "Error", message = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult reject_data_upload_npmu(string id, string reject)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    var ID = Convert.ToInt32(id);
                    var Data = ABE.obj_dli4_upload_document_npmu.Where(x => x.id == ID).SingleOrDefault();
                    if (Data != null)
                    {

                        Data.id = ID;
                        Data.approval = "Reject";
                        Data.reject = reject;
                        ABE.Entry(Data).State = System.Data.Entity.EntityState.Modified;
                        int A = ABE.SaveChanges();
                        if (A > 0)
                        {
                            return Json("Rejected Successfully");
                        }
                        else
                        {
                            return Json("Not Rejected");
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
        public ActionResult Save_dli4_upload_document_npmu(string state, string dist, string year, string fy_phase, string description, HttpPostedFileBase image)
        {
            if (Session["UserId"] == null)
                return Json("Logout", JsonRequestBehavior.AllowGet);
            try
            {
                var data = new dli4_upload_document_npmu();              
                data.state = state;
                data.district = string.IsNullOrEmpty(dist) ? null : dist;
                data.year = string.IsNullOrEmpty(year) ? null : year;
                data.fy_phase = string.IsNullOrEmpty(fy_phase) ? null : fy_phase;
                data.description = description;
                data.entry_date = DateTime.Now;
                data.user_id = Session["Officer"]?.ToString() ?? "";             
                if (image != null)
                {
                    string ext = Path.GetExtension(image.FileName).Trim().ToUpper();                  
                    if (ext != ".PDF" && ext != ".XLSX" && ext != ".XLS")
                        return Json("Please choose a valid file (.pdf, .xlsx, .xls).", JsonRequestBehavior.AllowGet);
                    string name = Path.GetFileNameWithoutExtension(image.FileName);
                    string fileName = name + "_" + DateTime.Now.Ticks + ext;              
                    if (image.FileName.Contains("#") || image.FileName.Contains("$"))
                        return Json("Please use a proper file name without special characters (#, $).", JsonRequestBehavior.AllowGet);
                    if (image.FileName.Split('.').Length != 2)
                        return Json("Your upload file has a double extension, please upload a proper file.", JsonRequestBehavior.AllowGet);                  
                    string basePath = AppDomain.CurrentDomain.BaseDirectory;
                    string folderPath = Path.Combine(basePath, "Ataljalimages", "DLI4", "admitted_claim");
                    if (!string.IsNullOrEmpty(year))
                        folderPath = Path.Combine(folderPath, year);
                    if (!string.IsNullOrEmpty(fy_phase) && fy_phase.ToUpper() != "NULL")
                    {
                        string phase = fy_phase.Replace("-", "_");
                        folderPath = Path.Combine(folderPath, phase);
                    }                   
                    Directory.CreateDirectory(folderPath);                  
                    string fullPath = Path.Combine(folderPath, fileName);
                    image.SaveAs(fullPath);             
                    data.image_name = fileName;
                    data.image_path = $"/Ataljalimages/DLI4/admitted_claim/{(string.IsNullOrEmpty(year) ? "" : year + "/")}{(string.IsNullOrEmpty(fy_phase) || fy_phase.ToUpper() == "NULL" ? "" : fy_phase.Replace("-", "_") + "/")}{fileName}";
                }           
                ABE.obj_dli4_upload_document_npmu.Add(data);
                ABE.SaveChanges();
                return Json("Successfully Saved", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

















    }
}
