using AbhyProject.Models;
using DocumentFormat.OpenXml.EMMA;
using DocumentFormat.OpenXml.Office2010.Excel;
using OpenXmlPowerTools;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.IO;
using ClosedXML.Excel;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using DocumentFormat.OpenXml.Drawing;
using System.Text.RegularExpressions;
using System.IO.Compression;
using DocumentFormat.OpenXml.Drawing.Charts;
using System.Web.Configuration;
using DocumentFormat.OpenXml.Bibliography;

namespace AbhyProject.Controllers
{
    public class WaterBudget_2526Controller : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        // GET: WaterBudget_2526
        //public ActionResult Index()
        //{

        //    WizardViewModel wizardViewModel = new WizardViewModel();
        //    //wizardViewModel.wb_grampanchayat_basic_info = new wb_grampanchayat_basic_info();
        //    return View(wizardViewModel);
        //}

        //public ActionResult Index1()
        //{
        //    int state_id = Convert.ToInt32(Session["lg_state"]);
        //    int district_id = Convert.ToInt32(Session["lg_dist"]);
        //    int block_id = Convert.ToInt32(Session["lg_block"]);
        //    int gp_id = Convert.ToInt32(Session["lg_gram"]);
        //    string year = Convert.ToString(Session["lg_year"]);


        //    WizardViewModel wizardViewModel = new WizardViewModel();
        //    var data = ABE.obj_wb_grampanchayat_basic_info.
        //            Where(x => x.state_id == state_id
        //            && x.district_id == district_id
        //            && x.block_id == block_id
        //            && x.gp_id == gp_id
        //            && x.year == year
        //        ).Select(s => new wb_grampanchayat_basic_infoVM
        //        {
        //            gp_area = s.gp_area,
        //            annual_rainfall = s.annual_rainfall,
        //            human_population = s.human_population,
        //            livestock_population = s.human_population
        //        }).SingleOrDefault();
        //    if (data != null)
        //    {
        //        wizardViewModel.wb_grampanchayat_basic_info = data;

        //    }
        //    // wizardViewModel.items = new List<wb_art_rech_water_cons_structureVM>();
        //    //wizardViewModel.wb_grampanchayat_basic_info = new wb_grampanchayat_basic_info();
        //    return View(wizardViewModel);
        //}
        public ActionResult Wsp_Home()
        {
            WizardViewModel wizardViewModel = new WizardViewModel();

            int state_id = Convert.ToInt32(Session["lg_state"]);
            int district_id = Convert.ToInt32(Session["lg_dist"]);
            int block_id = Convert.ToInt32(Session["lg_block"]);
            int gp_id = Convert.ToInt32(Session["lg_gram"]);
            string year = Convert.ToString(Session["lg_year"]);

            var getallstructure = ABE.obj_wb_ref_type_of_structure.ToList();
            var getAllcrops = ABE.obj_wb_ref_type_of_crop_net_irr_req.AsEnumerable()
                 .Select(s => new SelectListItem
                 {
                     Value = s.id.ToString(),
                     Text = s.crop_name,
                 }).ToList();
            wizardViewModel.Allcrops = getAllcrops;
            //Section1 - get
            var grampanchayat_basic_info = ABE.obj_wb_grampanchayat_basic_info.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_grampanchayat_basic_infoVM
                {
                    gp_area = s.gp_area,
                    annual_rainfall = s.annual_rainfall,
                    human_population = s.human_population,
                    livestock_population = s.livestock_population
                }).SingleOrDefault();

            //Section5 - get
            var Allstructures = ABE.obj_wb_art_rech_water_cons_structure.
                   Where(x => x.state_id == state_id
                   && x.district_id == district_id
                   && x.block_id == block_id
                   && x.gp_id == gp_id
                   && x.year == year
               ).Select(s => new wb_art_rech_water_cons_structureVM
               {
                   type_of_structure = s.type_of_structure,
                   number_of_structures = s.number_of_structures,
                   area_of_structures = s.area_of_structures,
                   avg_depth_structures = s.avg_depth_structures,
                   total_storage_capacity = s.total_storage_capacity,
                   annual_fillings = s.annual_fillings,
                   qt_annual_rech_water = s.qt_annual_rech_water,
                   type_of_structure_other = s.other_type_of_structure,
                   total = s.total,
                   id = s.id

               }).ToList();

            //Section2 - get
            var obj_wb_est_ground_water_availObj = ABE.obj_wb_est_ground_water_avail.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_est_ground_water_availVM
                {
                    annual_rainfall = s.annual_rainfall,
                    est_vol_rainfall = s.est_vol_rainfall,
                    evapo_loss = s.evapo_loss,
                    est_water_avai_rainfall = s.est_water_avai_rainfall,
                    est_vol_rech_gw = s.est_vol_rech_gw

                }).SingleOrDefault();

            //Section3 - get
            var obj_wb_est_avai_rainfall_supply_interventionObj = ABE.obj_wb_est_avai_rainfall_supply_intervention.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_est_avai_rainfall_supply_interventionVM
                {
                    uti_rainfall_runoff = s.uti_rainfall_runoff,


                }).SingleOrDefault();

            //Section4 - get
            var obj_wb_avai_surface_water_storObj = ABE.obj_wb_avai_surface_water_stor.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_avai_surface_water_storVM
                {
                    exist_structure = s.exist_structure,
                    annual_filling = s.annual_filling,
                    capacity_structure = s.capacity_structure,
                    total_capacity_structure = s.total_capacity_structure,
                    lossess = s.lossess,
                    total_surface_water_uti = s.total_surface_water_uti


                }).SingleOrDefault();

            //Section6 - get
            var obj_wb_water_avai_transported_waterObj = ABE.obj_wb_water_avai_transported_water.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_avai_transported_waterVM
                {
                    transported_water = s.transported_water


                }).SingleOrDefault();

            //Section7 - get
            var obj_wb_water_avai_non_potableObj = ABE.obj_wb_water_avai_non_potable.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_avai_non_potableVM
                {
                    water_non_potable_use = s.water_non_potable_use


                }).SingleOrDefault();

            //Section8 - get
            var obj_wb_tot_water_availObj = ABE.obj_wb_tot_water_avail.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_tot_water_availVM
                {
                    groundwater_avail = s.groundwater_avail,
                    surface_water_avail = s.surface_water_avail,
                    add_ground_water = s.add_ground_water,
                    transported_water = s.transported_water,
                    water_non_potable_use = s.water_non_potable_use,
                    total_water_availability = s.total_water_availability


                }).SingleOrDefault();

            //Section9 - get
            var obj_wb_water_drink_ind_reqObj = ABE.obj_wb_water_drink_ind_req.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_drink_ind_reqVM
                {
                    drink_dom_water_req = s.drink_dom_water_req,
                    water_req_livestock_pop = s.water_req_livestock_pop,
                    water_req_indust = s.water_req_indust,
                    total_water_requirement = s.total_water_requirement,


                }).SingleOrDefault();

            //10
            var AllCrops = ABE.obj_wb_area_crops_irr_water_req.
                   Where(x => x.state_id == state_id
                   && x.district_id == district_id
                   && x.block_id == block_id
                   && x.gp_id == gp_id
                   && x.year == year
               ).Select(s => new wb_area_crops_irr_water_reqVM
               {
                   crop = s.crop,
                   crop_other = s.other_crop_entry,
                   net_irrigation_requirement = s.net_irrigation_requirement,
                   area_kharif_season = s.area_kharif_season,
                   area_rabi_season = s.area_rabi_season,
                   area_summer_season = s.area_summer_season,
                   total_gross_cropped_area = s.total_gross_cropped_area,
                   total_irrigation_requirement = s.total_irrigation_requirement,
                   total_water_req = s.total_water_req,
                   id = s.id

               }).ToList();

            //Section11 - get
            var obj_wb_total_water_reqObj = ABE.obj_wb_total_water_req.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_total_water_reqVM
                {
                    drink_dom_water_req = s.drink_dom_water_req,
                    water_req_livestock_pop = s.water_req_livestock_pop,
                    irri_water_req = s.irri_water_req,
                    water_req_indust = s.water_req_indust,
                    total_water_requirement = s.total_water_requirement,


                }).SingleOrDefault();

            //Section12 - get
            var obj_wb_water_balanceObj = ABE.obj_wb_water_balance.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_balanceVM
                {
                    total_water_availability = s.total_water_availability,
                    total_water_requirement = s.total_water_requirement,
                    water_balance = s.water_balance,

                }).SingleOrDefault();


            //section-1
            if (grampanchayat_basic_info != null)
            {
                wb_est_ground_water_availVM wb_Est_Ground_Water_AvailVM = new wb_est_ground_water_availVM();
                wb_est_avai_rainfall_supply_interventionVM wb_est_avai_rainfall_supply_interventionVM = new wb_est_avai_rainfall_supply_interventionVM();
                wb_tot_water_availVM wb_tot_water_availVM = new wb_tot_water_availVM();
                wb_water_drink_ind_reqVM wb_water_drink_ind_reqVM = new wb_water_drink_ind_reqVM();
                wb_total_water_reqVM wb_total_water_reqVM = new wb_total_water_reqVM();
                wb_water_balanceVM wb_water_balanceVM = new wb_water_balanceVM();

                wizardViewModel.wb_grampanchayat_basic_info = grampanchayat_basic_info;

                //section-2
                if (obj_wb_est_ground_water_availObj != null)
                {
                    wizardViewModel.wb_est_ground_water_avail = obj_wb_est_ground_water_availObj;

                    //section-3
                    if (obj_wb_est_avai_rainfall_supply_interventionObj != null)
                    {
                        wizardViewModel.wb_est_avai_rainfall_supply_intervention = obj_wb_est_avai_rainfall_supply_interventionObj;
                    }
                    else
                    {
                        wb_est_avai_rainfall_supply_interventionVM.uti_rainfall_runoff = (obj_wb_est_ground_water_availObj.est_water_avai_rainfall * 0.4);
                        wizardViewModel.wb_est_avai_rainfall_supply_intervention = wb_est_avai_rainfall_supply_interventionVM;

                    }
                }
                else
                {
                    wb_Est_Ground_Water_AvailVM.annual_rainfall = (grampanchayat_basic_info.annual_rainfall / 1000);
                    wb_Est_Ground_Water_AvailVM.est_vol_rainfall = (grampanchayat_basic_info.annual_rainfall / 1000) * grampanchayat_basic_info.gp_area;
                    wb_Est_Ground_Water_AvailVM.evapo_loss = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall * 0.3);
                    wb_Est_Ground_Water_AvailVM.est_water_avai_rainfall = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall) - (wb_Est_Ground_Water_AvailVM.evapo_loss);
                    wb_Est_Ground_Water_AvailVM.est_vol_rech_gw = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall * 0.12);
                    wizardViewModel.wb_est_ground_water_avail = wb_Est_Ground_Water_AvailVM;
                    if (obj_wb_est_avai_rainfall_supply_interventionObj != null)
                    {
                        wizardViewModel.wb_est_avai_rainfall_supply_intervention = obj_wb_est_avai_rainfall_supply_interventionObj;
                    }
                    else
                    {
                        wb_est_avai_rainfall_supply_interventionVM.uti_rainfall_runoff = (wb_Est_Ground_Water_AvailVM.est_water_avai_rainfall * 0.4);
                        wizardViewModel.wb_est_avai_rainfall_supply_intervention = wb_est_avai_rainfall_supply_interventionVM;

                    }
                }
                //

                //section-4
                if (obj_wb_avai_surface_water_storObj != null)
                {
                    wizardViewModel.wb_avai_surface_water_stor = obj_wb_avai_surface_water_storObj;
                    //section-5
                    if (Allstructures.Count > 0)
                    {
                        wizardViewModel.structureTotal = Allstructures[0].total;
                        wizardViewModel.items = Allstructures;


                        //section-8
                        if (obj_wb_tot_water_availObj != null)
                        {
                            wizardViewModel.wb_tot_water_avail = obj_wb_tot_water_availObj;
                        }
                        else
                        {

                            //checking Section 6
                            if (obj_wb_water_avai_transported_waterObj != null)
                            {
                                wb_tot_water_availVM.transported_water = obj_wb_water_avai_transported_waterObj.transported_water;
                            }
                            else
                            {
                                wb_tot_water_availVM.transported_water = 0;
                            }

                            wb_tot_water_availVM.groundwater_avail = (obj_wb_est_ground_water_availObj.est_vol_rech_gw);
                            wb_tot_water_availVM.surface_water_avail = (obj_wb_avai_surface_water_storObj.total_surface_water_uti);
                            wb_tot_water_availVM.add_ground_water = (Allstructures[0].total);


                            if (obj_wb_water_avai_non_potableObj != null)
                            {
                                wb_tot_water_availVM.water_non_potable_use = obj_wb_water_avai_non_potableObj.water_non_potable_use;
                            }
                            else
                            {
                                wb_tot_water_availVM.water_non_potable_use = 0;
                            }

                            wb_tot_water_availVM.total_water_availability = (wb_tot_water_availVM.groundwater_avail + wb_tot_water_availVM.surface_water_avail
                                + wb_tot_water_availVM.add_ground_water + wb_tot_water_availVM.transported_water + wb_tot_water_availVM.water_non_potable_use);

                            wizardViewModel.wb_tot_water_avail = wb_tot_water_availVM;

                        }
                    }

                }
                //else
                //{
                //    wb_avai_surface_water_storVM.total_capacity_structure = (wb_avai_surface_water_storVM.exist_structure * wb_avai_surface_water_storVM.annual_filling * wb_avai_surface_water_storVM.capacity_structure);
                //    wb_avai_surface_water_storVM.lossess = (wb_avai_surface_water_storVM.total_capacity_structure * 0.4);
                //    wb_avai_surface_water_storVM.total_surface_water_uti = (wb_avai_surface_water_storVM.total_capacity_structure - wb_avai_surface_water_storVM.lossess);

                //    wizardViewModel.wb_est_avai_rainfall_supply_intervention = wb_est_avai_rainfall_supply_interventionVM;

                //}


                //Section10 
                if (AllCrops.Count > 0)
                {
                    wizardViewModel.CropTotal = AllCrops[0].total_water_req;
                    wizardViewModel.itemsList = AllCrops;
                }


                //section-6
                if (obj_wb_water_avai_transported_waterObj != null)
                {
                    wizardViewModel.wb_water_avai_transported_water = obj_wb_water_avai_transported_waterObj;
                }
                //section-7
                if (obj_wb_water_avai_non_potableObj != null)
                {
                    wizardViewModel.wb_water_avai_non_potable = obj_wb_water_avai_non_potableObj;
                }


                //section-9
                if (obj_wb_water_drink_ind_reqObj != null)
                {
                    wizardViewModel.wb_water_drink_ind_req = obj_wb_water_drink_ind_reqObj;
                    //section11
                    if (obj_wb_total_water_reqObj != null)
                    {
                        wb_total_water_reqVM.drink_dom_water_req = obj_wb_total_water_reqObj.drink_dom_water_req;
                        wb_total_water_reqVM.water_req_livestock_pop = obj_wb_total_water_reqObj.water_req_livestock_pop;
                        if (AllCrops.Count > 0)
                        {
                            wb_total_water_reqVM.irri_water_req = AllCrops[0].total_water_req;
                        }
                        wb_total_water_reqVM.water_req_indust = obj_wb_total_water_reqObj.water_req_indust;
                        wb_total_water_reqVM.total_water_requirement = obj_wb_total_water_reqObj.total_water_requirement;
                        wizardViewModel.wb_total_water_req = wb_total_water_reqVM;
                    }
                    else
                    {
                        if (obj_wb_water_drink_ind_reqObj != null)
                        {
                            wb_total_water_reqVM.drink_dom_water_req = (obj_wb_water_drink_ind_reqObj.drink_dom_water_req);
                            wb_total_water_reqVM.water_req_livestock_pop = (obj_wb_water_drink_ind_reqObj.water_req_livestock_pop);
                            wb_total_water_reqVM.water_req_indust = Convert.ToDouble(obj_wb_water_drink_ind_reqObj.water_req_indust);
                            if (AllCrops.Count > 0)
                            {
                                wb_total_water_reqVM.irri_water_req = AllCrops[0].total_water_req;
                            }
                        }
                        else
                        {
                            wb_total_water_reqVM.drink_dom_water_req = 0;
                        }
                        //wb_tot_water_availVM.add_ground_water = (Allstructures[0].total);
                        wb_total_water_reqVM.total_water_requirement = (wb_total_water_reqVM.drink_dom_water_req + wb_total_water_reqVM.water_req_livestock_pop
                            + wb_total_water_reqVM.irri_water_req + wb_total_water_reqVM.water_req_indust);

                        wizardViewModel.wb_total_water_req = wb_total_water_reqVM;
                    }
                }
                else
                {
                    //double drink_dom_water_reqcal = (55 * 365 / 10000000);
                    wb_water_drink_ind_reqVM.drink_dom_water_req = (grampanchayat_basic_info.human_population * 0.0020075);
                    //double water_req_livestock_popcal = (20 * 365 / 10000000);
                    wb_water_drink_ind_reqVM.water_req_livestock_pop = (grampanchayat_basic_info.livestock_population * 0.00073);
                    wb_water_drink_ind_reqVM.total_water_requirement = (wb_water_drink_ind_reqVM.drink_dom_water_req + wb_water_drink_ind_reqVM.water_req_livestock_pop + Convert.ToDouble(wb_water_drink_ind_reqVM.water_req_indust));
                    wizardViewModel.wb_water_drink_ind_req = wb_water_drink_ind_reqVM;
                }



                //section12
                if (obj_wb_water_balanceObj != null)
                {
                    wizardViewModel.wb_water_balance = obj_wb_water_balanceObj;
                }
                else
                {
                    if (obj_wb_tot_water_availObj != null)
                    {
                        wb_water_balanceVM.total_water_availability = obj_wb_tot_water_availObj.total_water_availability;
                    }
                    if (obj_wb_total_water_reqObj != null)
                    {
                        wb_water_balanceVM.total_water_requirement = obj_wb_total_water_reqObj.total_water_requirement;
                    }
                    else
                    {
                        wb_water_balanceVM.total_water_requirement = 0;
                    }


                    wb_water_balanceVM.water_balance = wb_water_balanceVM.total_water_availability - wb_water_balanceVM.total_water_requirement;

                    wizardViewModel.wb_water_balance = wb_water_balanceVM;

                }
            }

            return View(wizardViewModel);
        }

        [HttpPost]
        public JsonResult Deletestructure(int rowId)
        {
            try
            {
                // Fetch the record based on rowId
                var structure = ABE.obj_wb_art_rech_water_cons_structure
                    .FirstOrDefault(x => x.id == rowId);

                if (structure == null)
                {
                    return Json(new { success = false, message = "Record not found" });
                }

                // Remove the record
                ABE.obj_wb_art_rech_water_cons_structure.Remove(structure);
                ABE.SaveChanges();

                return Json(new { success = true, message = "Record deleted successfully" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }


        [HttpPost]
        public JsonResult DeleteCrop(int rowId)
        {
            try
            {
                // Fetch the record based on rowId
                var crop = ABE.obj_wb_area_crops_irr_water_req
                    .FirstOrDefault(x => x.id == rowId);

                if (crop == null)
                {
                    return Json(new { success = false, message = "Record not found" });
                }

                // Remove the record
                ABE.obj_wb_area_crops_irr_water_req.Remove(crop);
                ABE.SaveChanges();

                return Json(new { success = true, message = "Record deleted successfully" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }



        [HttpPost]
        public JsonResult Approved(Param model)
        {

            try
            {
                wb_reject_status obj = new wb_reject_status();
                if (model != null)
                {
                    int state_id = Convert.ToInt32(model.state_id);
                    int district_id = Convert.ToInt32(model.district_id);
                    int block_id = Convert.ToInt32(model.block_id);
                    int gp_id = Convert.ToInt32(model.gp_id);
                    var existingInfo = ABE.obj_wb_reject_status.
           Where(x => x.state_id == state_id
           && x.district_id == district_id
           && x.block_id == block_id
           && x.gp_id == gp_id
           && x.year == model.Year
       ).SingleOrDefault();

                    if (existingInfo != null)
                    {
                        existingInfo.state_id = state_id;
                        existingInfo.district_id = district_id;
                        existingInfo.block_id = block_id;
                        existingInfo.gp_id = gp_id;
                        existingInfo.year = model.Year;
                        existingInfo.status_id = 5;
                        existingInfo.email_id = Convert.ToString(Session["userid"]);
                        ABE.Entry(existingInfo).State = EntityState.Modified;
                        int row = ABE.SaveChanges();
                        return Json(new { success = row > 0 ? true : false });
                    }
                    else
                    {
                        obj.state_id = Convert.ToInt32(model.state_id);
                        obj.district_id = Convert.ToInt32(model.district_id);
                        obj.block_id = Convert.ToInt32(model.block_id);
                        obj.gp_id = Convert.ToInt32(model.gp_id);
                        obj.year = model.Year;
                        obj.status_id = 5;
                        obj.email_id = Convert.ToString(Session["userid"]);
                        ABE.obj_wb_reject_status.Add(obj);
                        int row = ABE.SaveChanges();
                        return Json(new { success = row > 0 ? true : false });

                    }


                }
            }
            catch (Exception ex)
            {

                return Json(new { success = false, message = ex.InnerException.Message.ToString() });
            }

            return Json(new { success = true });
        }

        [HttpPost]
        public JsonResult Reject(Param model)
        {


            wb_reject_status obj = new wb_reject_status();
            if (model != null)
            {
                int state_id = Convert.ToInt32(model.state_id);
                int district_id = Convert.ToInt32(model.district_id);
                int block_id = Convert.ToInt32(model.block_id);
                int gp_id = Convert.ToInt32(model.gp_id);
                var existingInfo = ABE.obj_wb_reject_status.
       Where(x => x.state_id == state_id
       && x.district_id == district_id
       && x.block_id == block_id
       && x.gp_id == gp_id
       && x.year == model.Year
   ).SingleOrDefault();

                if (existingInfo != null)
                {
                    existingInfo.state_id = state_id;
                    existingInfo.district_id = district_id;
                    existingInfo.block_id = block_id;
                    existingInfo.gp_id = gp_id;
                    existingInfo.year = model.Year;
                    existingInfo.status_id = 3;
                    existingInfo.remarks = model.remarks;
                    existingInfo.email_id = Convert.ToString(Session["userid"]);
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = Convert.ToInt32(model.state_id);
                    obj.district_id = Convert.ToInt32(model.district_id);
                    obj.block_id = Convert.ToInt32(model.block_id);
                    obj.gp_id = Convert.ToInt32(model.gp_id);
                    obj.year = model.Year;
                    obj.status_id = 5;
                    obj.remarks = model.remarks;
                    obj.email_id = Convert.ToString(Session["userid"]);
                    ABE.obj_wb_reject_status.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });

                }


            }
            return Json(new { success = false });
        }
        [HttpPost]
        public JsonResult Submit(Param model)
        {

            try
            {
                wb_reject_status obj = new wb_reject_status();
                if (model != null)
                {
                    int state_id = Convert.ToInt32(model.state_id);
                    int district_id = Convert.ToInt32(model.district_id);
                    int block_id = Convert.ToInt32(model.block_id);
                    int gp_id = Convert.ToInt32(model.gp_id);
                    var existingInfo = ABE.obj_wb_reject_status.
           Where(x => x.state_id == state_id
           && x.district_id == district_id
           && x.block_id == block_id
           && x.gp_id == gp_id
           && x.year == model.Year
       ).SingleOrDefault();

                    if (existingInfo != null)
                    {
                        existingInfo.state_id = state_id;
                        existingInfo.district_id = district_id;
                        existingInfo.block_id = block_id;
                        existingInfo.gp_id = gp_id;
                        existingInfo.year = model.Year;
                        existingInfo.status_id = 1;
                        existingInfo.email_id = Convert.ToString(Session["userid"]);
                        ABE.Entry(existingInfo).State = EntityState.Modified;
                        int row = ABE.SaveChanges();
                        return Json(new { success = row > 0 ? true : false });
                    }
                    else
                    {
                        obj.state_id = Convert.ToInt32(model.state_id);
                        obj.district_id = Convert.ToInt32(model.district_id);
                        obj.block_id = Convert.ToInt32(model.block_id);
                        obj.gp_id = Convert.ToInt32(model.gp_id);
                        obj.year = model.Year;
                        obj.status_id = 1;
                        obj.email_id = Convert.ToString(Session["userid"]);
                        ABE.obj_wb_reject_status.Add(obj);
                        int row = ABE.SaveChanges();
                        return Json(new { success = row > 0 ? true : false });

                    }


                }
            }
            catch (Exception ex)
            {

                return Json(new { success = false, message = ex.InnerException.Message.ToString() });
            }

            return Json(new { success = true });
        }


        [HttpPost]
        public ActionResult get_approved_reject_status()
        {
            try
            {
                WizardViewModel wizardViewModel = new WizardViewModel();
                int state_id = Convert.ToInt32(Session["lg_state"]);
                int district_id = Convert.ToInt32(Session["lg_dist"]);
                int block_id = Convert.ToInt32(Session["lg_block"]);
                int gp_id = Convert.ToInt32(Session["lg_gram"]);
                string year = Convert.ToString(Session["lg_year"]);

                wb_reject_status data = new wb_reject_status();
                data = ABE.obj_wb_reject_status.Where(x => x.state_id == state_id && x.district_id == district_id && x.block_id == block_id && x.gp_id == gp_id && x.year == year).SingleOrDefault();

                if (data != null)
                {
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("null", JsonRequestBehavior.AllowGet);
                }

            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        public ActionResult getCropById(string cropId)
        {
            try
            {
                var getAllcrops = ABE.obj_wb_ref_type_of_crop_net_irr_req
    .Select(s => new
    {
        s.net_irrigation_requirement,
        id = s.id.ToString()
    }).Where(x => x.id == cropId).SingleOrDefault();
                if (getAllcrops != null)
                {
                    return Json(getAllcrops, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("null", JsonRequestBehavior.AllowGet);
                }


            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }


        [HttpPost]
        public JsonResult CheckStatus(Param model)
        {
            string message = "Please click on the save button before moving to next step";
            int state_id = Convert.ToInt32(Session["lg_state"]);
            int district_id = Convert.ToInt32(Session["lg_dist"]);
            int block_id = Convert.ToInt32(Session["lg_block"]);
            int gp_id = Convert.ToInt32(Session["lg_gram"]);
            string year = Convert.ToString(Session["lg_year"]);
            if (model != null)
            {
                if (model.stepIndex == 1 && model.stepTitle == "C01")
                {
                    var existingInfo = ABE.obj_wb_grampanchayat_basic_info.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }
                else if (model.stepIndex == 2 && model.stepTitle == "C02")
                {
                    var existingInfo = ABE.obj_wb_est_ground_water_avail.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 3 && model.stepTitle == "C03")
                {
                    var existingInfo = ABE.obj_wb_est_avai_rainfall_supply_intervention.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 4 && model.stepTitle == "C04")
                {
                    var existingInfo = ABE.obj_wb_avai_surface_water_stor.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 5 && model.stepTitle == "C05")
                {
                    var existingInfo = ABE.obj_wb_art_rech_water_cons_structure.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).ToList();
                    if (existingInfo.Count() > 0)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 6 && model.stepTitle == "C06")
                {
                    var existingInfo = ABE.obj_wb_water_avai_transported_water.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 7 && model.stepTitle == "C07")
                {
                    var existingInfo = ABE.obj_wb_water_avai_non_potable.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 8 && model.stepTitle == "C08")
                {
                    var existingInfo = ABE.obj_wb_tot_water_avail.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 9 && model.stepTitle == "C09")
                {
                    var existingInfo = ABE.obj_wb_water_drink_ind_req.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 10 && model.stepTitle == "C10")
                {
                    var existingInfo = ABE.obj_wb_area_crops_irr_water_req.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).ToList();
                    if (existingInfo.Count() > 0)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 11 && model.stepTitle == "C11")
                {
                    var existingInfo = ABE.obj_wb_total_water_req.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

                else if (model.stepIndex == 12 && model.stepTitle == "C12")
                {
                    var existingInfo = ABE.obj_wb_water_balance.
                            Where(x => x.state_id == state_id
                            && x.district_id == district_id
                            && x.block_id == block_id
                            && x.gp_id == gp_id
                            && x.year == year
                        ).SingleOrDefault();
                    if (existingInfo != null)
                    {
                        return Json(new { success = true, data = existingInfo });
                    }
                    else
                    {
                        return Json(new { success = false, msg = message });
                    }
                }

            }
            else
            {
                return Json(new { success = true });
            }
            return Json(new { success = true });

        }


        public ActionResult water_budget()
        {
            return View();
        }

        public ActionResult Pdf_Report2()
        {
            WizardViewModel wizardViewModel = new WizardViewModel();
            int state_id = Convert.ToInt32(Session["lg_state"]);
            int district_id = Convert.ToInt32(Session["lg_dist"]);
            int block_id = Convert.ToInt32(Session["lg_block"]);
            int gp_id = Convert.ToInt32(Session["lg_gram"]);
            string year = Convert.ToString(Session["lg_year"]);
            var getallstructure = ABE.obj_wb_ref_type_of_structure.ToList();
            var getAllcrops = ABE.obj_wb_ref_type_of_crop_net_irr_req.AsEnumerable()
                 .Select(s => new SelectListItem
                 {
                     Value = s.id.ToString(),
                     Text = s.crop_name,
                 }).ToList();
            wizardViewModel.Allcrops = getAllcrops;
            //Section1 - get
            var grampanchayat_basic_info = ABE.obj_wb_grampanchayat_basic_info.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_grampanchayat_basic_infoVM
                {
                    gp_area = s.gp_area,
                    annual_rainfall = s.annual_rainfall,
                    human_population = s.human_population,
                    livestock_population = s.livestock_population
                }).SingleOrDefault();

            //Section5 - get
            var Allstructures = ABE.obj_wb_art_rech_water_cons_structure.
                   Where(x => x.state_id == state_id
                   && x.district_id == district_id
                   && x.block_id == block_id
                   && x.gp_id == gp_id
                   && x.year == year
               ).Select(s => new wb_art_rech_water_cons_structureVM
               {
                   type_of_structure = s.type_of_structure,
                   number_of_structures = s.number_of_structures,
                   area_of_structures = s.area_of_structures,
                   avg_depth_structures = s.avg_depth_structures,
                   total_storage_capacity = s.total_storage_capacity,
                   annual_fillings = s.annual_fillings,
                   qt_annual_rech_water = s.qt_annual_rech_water,
                   type_of_structure_other = s.other_type_of_structure,
                   total = s.total,
                   id = s.id

               }).ToList();

            //Section2 - get
            var obj_wb_est_ground_water_availObj = ABE.obj_wb_est_ground_water_avail.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_est_ground_water_availVM
                {
                    annual_rainfall = s.annual_rainfall,
                    est_vol_rainfall = s.est_vol_rainfall,
                    evapo_loss = s.evapo_loss,
                    est_water_avai_rainfall = s.est_water_avai_rainfall,
                    est_vol_rech_gw = s.est_vol_rech_gw

                }).SingleOrDefault();

            //Section3 - get
            var obj_wb_est_avai_rainfall_supply_interventionObj = ABE.obj_wb_est_avai_rainfall_supply_intervention.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_est_avai_rainfall_supply_interventionVM
                {
                    uti_rainfall_runoff = s.uti_rainfall_runoff,


                }).SingleOrDefault();

            //Section4 - get
            var obj_wb_avai_surface_water_storObj = ABE.obj_wb_avai_surface_water_stor.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_avai_surface_water_storVM
                {
                    exist_structure = s.exist_structure,
                    annual_filling = s.annual_filling,
                    capacity_structure = s.capacity_structure,
                    total_capacity_structure = s.total_capacity_structure,
                    lossess = s.lossess,
                    total_surface_water_uti = s.total_surface_water_uti


                }).SingleOrDefault();

            //Section6 - get
            var obj_wb_water_avai_transported_waterObj = ABE.obj_wb_water_avai_transported_water.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_avai_transported_waterVM
                {
                    transported_water = s.transported_water


                }).SingleOrDefault();

            //Section7 - get
            var obj_wb_water_avai_non_potableObj = ABE.obj_wb_water_avai_non_potable.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_avai_non_potableVM
                {
                    water_non_potable_use = s.water_non_potable_use


                }).SingleOrDefault();

            //Section8 - get
            var obj_wb_tot_water_availObj = ABE.obj_wb_tot_water_avail.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_tot_water_availVM
                {
                    groundwater_avail = s.groundwater_avail,
                    surface_water_avail = s.surface_water_avail,
                    add_ground_water = s.add_ground_water,
                    transported_water = s.transported_water,
                    water_non_potable_use = s.water_non_potable_use,
                    total_water_availability = s.total_water_availability


                }).SingleOrDefault();

            //Section9 - get
            var obj_wb_water_drink_ind_reqObj = ABE.obj_wb_water_drink_ind_req.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_drink_ind_reqVM
                {
                    drink_dom_water_req = s.drink_dom_water_req,
                    water_req_livestock_pop = s.water_req_livestock_pop,
                    water_req_indust = s.water_req_indust,
                    total_water_requirement = s.total_water_requirement,


                }).SingleOrDefault();

            //10
            //var AllCrops = ABE.obj_wb_area_crops_irr_water_req.
            //       Where(x => x.state_id == state_id
            //       && x.district_id == district_id
            //       && x.block_id == block_id
            //       && x.gp_id == gp_id
            //       && x.year == year
            //   ).Select(s => new wb_area_crops_irr_water_reqVM
            //   {
            //       crop = s.crop,
            //       crop_other = s.other_crop_entry,
            //       net_irrigation_requirement = s.net_irrigation_requirement,
            //       area_kharif_season = s.area_kharif_season,
            //       area_rabi_season = s.area_rabi_season,
            //       area_summer_season = s.area_summer_season,
            //       total_gross_cropped_area = s.total_gross_cropped_area,
            //       total_irrigation_requirement = s.total_irrigation_requirement,
            //       total_water_req = s.total_water_req,
            //       id = s.id

            //   }).ToList();

            var AllCrops = (from crops in ABE.obj_wb_ref_type_of_crop_net_irr_req
                            join cropRef in ABE.obj_wb_area_crops_irr_water_req
                            on crops.id.ToString() equals cropRef.crop
                            where cropRef.state_id == state_id
                                  && cropRef.district_id == district_id
                                  && cropRef.block_id == block_id
                                  && cropRef.gp_id == gp_id
                                  && cropRef.year == year
                            select new wb_area_crops_irr_water_reqVM
                            {
                                crop = crops.crop_name,
                                crop_other = cropRef.other_crop_entry,
                                net_irrigation_requirement = cropRef.net_irrigation_requirement,
                                area_kharif_season = cropRef.area_kharif_season,
                                area_rabi_season = cropRef.area_rabi_season,
                                area_summer_season = cropRef.area_summer_season,
                                total_gross_cropped_area = cropRef.total_gross_cropped_area,
                                total_irrigation_requirement = cropRef.total_irrigation_requirement,
                                total_water_req = cropRef.total_water_req,
                                id = cropRef.id
                            }).ToList();


            //Section11 - get
            var obj_wb_total_water_reqObj = ABE.obj_wb_total_water_req.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_total_water_reqVM
                {
                    drink_dom_water_req = s.drink_dom_water_req,
                    water_req_livestock_pop = s.water_req_livestock_pop,
                    irri_water_req = s.irri_water_req,
                    water_req_indust = s.water_req_indust,
                    total_water_requirement = s.total_water_requirement,


                }).SingleOrDefault();

            //Section12 - get
            var obj_wb_water_balanceObj = ABE.obj_wb_water_balance.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_balanceVM
                {
                    total_water_availability = s.total_water_availability,
                    total_water_requirement = s.total_water_requirement,
                    water_balance = s.water_balance,

                }).SingleOrDefault();


            //section-1
            if (grampanchayat_basic_info != null)
            {
                wb_est_ground_water_availVM wb_Est_Ground_Water_AvailVM = new wb_est_ground_water_availVM();
                wb_est_avai_rainfall_supply_interventionVM wb_est_avai_rainfall_supply_interventionVM = new wb_est_avai_rainfall_supply_interventionVM();
                wb_tot_water_availVM wb_tot_water_availVM = new wb_tot_water_availVM();
                wb_water_drink_ind_reqVM wb_water_drink_ind_reqVM = new wb_water_drink_ind_reqVM();
                wb_total_water_reqVM wb_total_water_reqVM = new wb_total_water_reqVM();
                wb_water_balanceVM wb_water_balanceVM = new wb_water_balanceVM();


                wizardViewModel.wb_grampanchayat_basic_info = grampanchayat_basic_info;

                //section-2
                if (obj_wb_est_ground_water_availObj != null)
                {
                    wizardViewModel.wb_est_ground_water_avail = obj_wb_est_ground_water_availObj;
                }
                else
                {
                    wb_Est_Ground_Water_AvailVM.annual_rainfall = (grampanchayat_basic_info.annual_rainfall / 1000);
                    wb_Est_Ground_Water_AvailVM.est_vol_rainfall = (grampanchayat_basic_info.annual_rainfall / 1000) * grampanchayat_basic_info.gp_area;
                    wb_Est_Ground_Water_AvailVM.evapo_loss = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall * 0.3);
                    wb_Est_Ground_Water_AvailVM.est_water_avai_rainfall = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall) - (wb_Est_Ground_Water_AvailVM.evapo_loss);
                    wb_Est_Ground_Water_AvailVM.est_vol_rech_gw = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall * 0.12);
                    wizardViewModel.wb_est_ground_water_avail = wb_Est_Ground_Water_AvailVM;
                }
                //
                //section-3
                if (obj_wb_est_avai_rainfall_supply_interventionObj != null)
                {
                    wizardViewModel.wb_est_avai_rainfall_supply_intervention = obj_wb_est_avai_rainfall_supply_interventionObj;
                }
                else
                {
                    wb_est_avai_rainfall_supply_interventionVM.uti_rainfall_runoff = (obj_wb_est_ground_water_availObj.est_water_avai_rainfall * 0.4);
                    wizardViewModel.wb_est_avai_rainfall_supply_intervention = wb_est_avai_rainfall_supply_interventionVM;

                }
                //section-4
                if (obj_wb_avai_surface_water_storObj != null)
                {
                    wizardViewModel.wb_avai_surface_water_stor = obj_wb_avai_surface_water_storObj;
                }
                //else
                //{
                //    wb_avai_surface_water_storVM.total_capacity_structure = (wb_avai_surface_water_storVM.exist_structure * wb_avai_surface_water_storVM.annual_filling * wb_avai_surface_water_storVM.capacity_structure);
                //    wb_avai_surface_water_storVM.lossess = (wb_avai_surface_water_storVM.total_capacity_structure * 0.4);
                //    wb_avai_surface_water_storVM.total_surface_water_uti = (wb_avai_surface_water_storVM.total_capacity_structure - wb_avai_surface_water_storVM.lossess);

                //    wizardViewModel.wb_est_avai_rainfall_supply_intervention = wb_est_avai_rainfall_supply_interventionVM;

                //}


                //section-5
                if (Allstructures.Count > 0)
                {
                    wizardViewModel.structureTotal = Allstructures[0].total;
                    wizardViewModel.items = Allstructures;

                }
                //Section10 
                if (AllCrops.Count > 0)
                {
                    wizardViewModel.CropTotal = AllCrops[0].total_water_req;
                    wizardViewModel.itemsList = AllCrops;
                }


                //section-6
                if (obj_wb_water_avai_transported_waterObj != null)
                {
                    wizardViewModel.wb_water_avai_transported_water = obj_wb_water_avai_transported_waterObj;
                }
                //section-7
                if (obj_wb_water_avai_non_potableObj != null)
                {
                    wizardViewModel.wb_water_avai_non_potable = obj_wb_water_avai_non_potableObj;
                }
                //section-8
                if (obj_wb_tot_water_availObj != null)
                {
                    wizardViewModel.wb_tot_water_avail = obj_wb_tot_water_availObj;
                }
                else
                {

                    wb_tot_water_availVM.groundwater_avail = (obj_wb_est_ground_water_availObj.est_vol_rech_gw);
                    wb_tot_water_availVM.surface_water_avail = (obj_wb_avai_surface_water_storObj.total_surface_water_uti);
                    wb_tot_water_availVM.add_ground_water = (Allstructures[0].total);
                    if (obj_wb_water_avai_transported_waterObj != null)
                    {
                        wb_tot_water_availVM.transported_water = obj_wb_water_avai_transported_waterObj.transported_water;
                    }
                    else
                    {
                        wb_tot_water_availVM.transported_water = 0;
                    }

                    if (obj_wb_water_avai_non_potableObj != null)
                    {
                        wb_tot_water_availVM.water_non_potable_use = obj_wb_water_avai_non_potableObj.water_non_potable_use;
                    }
                    else
                    {
                        wb_tot_water_availVM.water_non_potable_use = 0;
                    }


                    wb_tot_water_availVM.total_water_availability = (wb_tot_water_availVM.groundwater_avail + wb_tot_water_availVM.surface_water_avail
                        + wb_tot_water_availVM.add_ground_water + wb_tot_water_availVM.transported_water + wb_tot_water_availVM.water_non_potable_use);

                    wizardViewModel.wb_tot_water_avail = wb_tot_water_availVM;

                }

                //section-9
                if (obj_wb_water_drink_ind_reqObj != null)
                {
                    wizardViewModel.wb_water_drink_ind_req = obj_wb_water_drink_ind_reqObj;
                }
                else
                {
                    //double drink_dom_water_reqcal = (55 * 365 / 10000000);
                    wb_water_drink_ind_reqVM.drink_dom_water_req = (grampanchayat_basic_info.human_population * 0.0020075);
                    //double water_req_livestock_popcal = (20 * 365 / 10000000);
                    wb_water_drink_ind_reqVM.water_req_livestock_pop = (grampanchayat_basic_info.livestock_population * 0.00073);

                    wb_water_drink_ind_reqVM.total_water_requirement = (wb_water_drink_ind_reqVM.drink_dom_water_req + wb_water_drink_ind_reqVM.water_req_livestock_pop + Convert.ToDouble(wb_water_drink_ind_reqVM.water_req_indust));


                    wizardViewModel.wb_water_drink_ind_req = wb_water_drink_ind_reqVM;



                }

                //section11
                if (obj_wb_total_water_reqObj != null)
                {
                    wizardViewModel.wb_total_water_req = obj_wb_total_water_reqObj;
                }
                else
                {
                    if (obj_wb_water_drink_ind_reqObj != null)
                    {
                        wb_total_water_reqVM.drink_dom_water_req = (obj_wb_water_drink_ind_reqObj.drink_dom_water_req);
                        wb_total_water_reqVM.water_req_livestock_pop = (obj_wb_water_drink_ind_reqObj.water_req_livestock_pop);
                        wb_total_water_reqVM.water_req_indust = Convert.ToDouble(obj_wb_water_drink_ind_reqObj.water_req_indust);

                    }
                    else
                    {
                        wb_total_water_reqVM.drink_dom_water_req = 0;
                    }
                    //wb_tot_water_availVM.add_ground_water = (Allstructures[0].total);
                    wb_total_water_reqVM.total_water_requirement = (wb_total_water_reqVM.drink_dom_water_req + wb_total_water_reqVM.water_req_livestock_pop
                        + wb_tot_water_availVM.add_ground_water + wb_total_water_reqVM.water_req_indust);
                    wizardViewModel.wb_total_water_req = wb_total_water_reqVM;

                }

                //section12
                if (obj_wb_water_balanceObj != null)
                {
                    wizardViewModel.wb_water_balance = obj_wb_water_balanceObj;
                }
                else
                {
                    if (obj_wb_tot_water_availObj != null)
                    {
                        wb_water_balanceVM.total_water_availability = obj_wb_tot_water_availObj.total_water_availability;
                    }
                    if (obj_wb_total_water_reqObj != null)
                    {
                        wb_water_balanceVM.total_water_requirement = obj_wb_total_water_reqObj.total_water_requirement;
                    }
                    else
                    {
                        wb_water_balanceVM.total_water_requirement = 0;
                    }


                    wb_water_balanceVM.water_balance = wb_water_balanceVM.total_water_availability - wb_water_balanceVM.total_water_requirement;

                    wizardViewModel.wb_water_balance = wb_water_balanceVM;



                }
            }

            return View(wizardViewModel);
        }


        public ActionResult uploadreport()
        {
            WizardViewModel wizardViewModel = new WizardViewModel();
            int state_id = Convert.ToInt32(Session["lg_state"]);
            int district_id = Convert.ToInt32(Session["lg_dist"]);
            int block_id = Convert.ToInt32(Session["lg_block"]);
            int gp_id = Convert.ToInt32(Session["lg_gram"]);
            string year = Convert.ToString(Session["lg_year"]);
            var getallstructure = ABE.obj_wb_ref_type_of_structure.ToList();
            var getAllcrops = ABE.obj_wb_ref_type_of_crop_net_irr_req.AsEnumerable()
                 .Select(s => new SelectListItem
                 {
                     Value = s.id.ToString(),
                     Text = s.crop_name,
                 }).ToList();
            wizardViewModel.Allcrops = getAllcrops;
            //Section1 - get
            var grampanchayat_basic_info = ABE.obj_wb_grampanchayat_basic_info.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_grampanchayat_basic_infoVM
                {
                    gp_area = s.gp_area,
                    annual_rainfall = s.annual_rainfall,
                    human_population = s.human_population,
                    livestock_population = s.livestock_population
                }).SingleOrDefault();

            //Section5 - get
            var Allstructures = ABE.obj_wb_art_rech_water_cons_structure.
                   Where(x => x.state_id == state_id
                   && x.district_id == district_id
                   && x.block_id == block_id
                   && x.gp_id == gp_id
                   && x.year == year
               ).Select(s => new wb_art_rech_water_cons_structureVM
               {
                   type_of_structure = s.type_of_structure,
                   number_of_structures = s.number_of_structures,
                   area_of_structures = s.area_of_structures,
                   avg_depth_structures = s.avg_depth_structures,
                   total_storage_capacity = s.total_storage_capacity,
                   annual_fillings = s.annual_fillings,
                   qt_annual_rech_water = s.qt_annual_rech_water,
                   type_of_structure_other = s.other_type_of_structure,
                   total = s.total,
                   id = s.id

               }).ToList();

            //Section2 - get
            var obj_wb_est_ground_water_availObj = ABE.obj_wb_est_ground_water_avail.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_est_ground_water_availVM
                {
                    annual_rainfall = s.annual_rainfall,
                    est_vol_rainfall = s.est_vol_rainfall,
                    evapo_loss = s.evapo_loss,
                    est_water_avai_rainfall = s.est_water_avai_rainfall,
                    est_vol_rech_gw = s.est_vol_rech_gw

                }).SingleOrDefault();

            //Section3 - get
            var obj_wb_est_avai_rainfall_supply_interventionObj = ABE.obj_wb_est_avai_rainfall_supply_intervention.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_est_avai_rainfall_supply_interventionVM
                {
                    uti_rainfall_runoff = s.uti_rainfall_runoff,


                }).SingleOrDefault();

            //Section4 - get
            var obj_wb_avai_surface_water_storObj = ABE.obj_wb_avai_surface_water_stor.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_avai_surface_water_storVM
                {
                    exist_structure = s.exist_structure,
                    annual_filling = s.annual_filling,
                    capacity_structure = s.capacity_structure,
                    total_capacity_structure = s.total_capacity_structure,
                    lossess = s.lossess,
                    total_surface_water_uti = s.total_surface_water_uti


                }).SingleOrDefault();

            //Section6 - get
            var obj_wb_water_avai_transported_waterObj = ABE.obj_wb_water_avai_transported_water.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_avai_transported_waterVM
                {
                    transported_water = s.transported_water


                }).SingleOrDefault();

            //Section7 - get
            var obj_wb_water_avai_non_potableObj = ABE.obj_wb_water_avai_non_potable.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_avai_non_potableVM
                {
                    water_non_potable_use = s.water_non_potable_use


                }).SingleOrDefault();

            //Section8 - get
            var obj_wb_tot_water_availObj = ABE.obj_wb_tot_water_avail.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_tot_water_availVM
                {
                    groundwater_avail = s.groundwater_avail,
                    surface_water_avail = s.surface_water_avail,
                    add_ground_water = s.add_ground_water,
                    transported_water = s.transported_water,
                    water_non_potable_use = s.water_non_potable_use,
                    total_water_availability = s.total_water_availability


                }).SingleOrDefault();

            //Section9 - get
            var obj_wb_water_drink_ind_reqObj = ABE.obj_wb_water_drink_ind_req.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_drink_ind_reqVM
                {
                    drink_dom_water_req = s.drink_dom_water_req,
                    water_req_livestock_pop = s.water_req_livestock_pop,
                    water_req_indust = s.water_req_indust,
                    total_water_requirement = s.total_water_requirement,


                }).SingleOrDefault();

            //10
            //var AllCrops = ABE.obj_wb_area_crops_irr_water_req.
            //       Where(x => x.state_id == state_id
            //       && x.district_id == district_id
            //       && x.block_id == block_id
            //       && x.gp_id == gp_id
            //       && x.year == year
            //   ).Select(s => new wb_area_crops_irr_water_reqVM
            //   {
            //       crop = s.crop,
            //       crop_other = s.other_crop_entry,
            //       net_irrigation_requirement = s.net_irrigation_requirement,
            //       area_kharif_season = s.area_kharif_season,
            //       area_rabi_season = s.area_rabi_season,
            //       area_summer_season = s.area_summer_season,
            //       total_gross_cropped_area = s.total_gross_cropped_area,
            //       total_irrigation_requirement = s.total_irrigation_requirement,
            //       total_water_req = s.total_water_req,
            //       id = s.id

            //   }).ToList();

            var AllCrops = (from crops in ABE.obj_wb_ref_type_of_crop_net_irr_req
                            join cropRef in ABE.obj_wb_area_crops_irr_water_req
                            on crops.id.ToString() equals cropRef.crop
                            where cropRef.state_id == state_id
                                  && cropRef.district_id == district_id
                                  && cropRef.block_id == block_id
                                  && cropRef.gp_id == gp_id
                                  && cropRef.year == year
                            select new wb_area_crops_irr_water_reqVM
                            {
                                crop = crops.crop_name,
                                crop_other = cropRef.other_crop_entry,
                                net_irrigation_requirement = cropRef.net_irrigation_requirement,
                                area_kharif_season = cropRef.area_kharif_season,
                                area_rabi_season = cropRef.area_rabi_season,
                                area_summer_season = cropRef.area_summer_season,
                                total_gross_cropped_area = cropRef.total_gross_cropped_area,
                                total_irrigation_requirement = cropRef.total_irrigation_requirement,
                                total_water_req = cropRef.total_water_req,
                                id = cropRef.id
                            }).ToList();

            //Section11 - get
            var obj_wb_total_water_reqObj = ABE.obj_wb_total_water_req.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_total_water_reqVM
                {
                    drink_dom_water_req = s.drink_dom_water_req,
                    water_req_livestock_pop = s.water_req_livestock_pop,
                    irri_water_req = s.irri_water_req,
                    water_req_indust = s.water_req_indust,
                    total_water_requirement = s.total_water_requirement,


                }).SingleOrDefault();

            //Section12 - get
            var obj_wb_water_balanceObj = ABE.obj_wb_water_balance.
                    Where(x => x.state_id == state_id
                    && x.district_id == district_id
                    && x.block_id == block_id
                    && x.gp_id == gp_id
                    && x.year == year
                ).Select(s => new wb_water_balanceVM
                {
                    total_water_availability = s.total_water_availability,
                    total_water_requirement = s.total_water_requirement,
                    water_balance = s.water_balance,

                }).SingleOrDefault();


            //section-1
            if (grampanchayat_basic_info != null)
            {
                wb_est_ground_water_availVM wb_Est_Ground_Water_AvailVM = new wb_est_ground_water_availVM();
                wb_est_avai_rainfall_supply_interventionVM wb_est_avai_rainfall_supply_interventionVM = new wb_est_avai_rainfall_supply_interventionVM();
                wb_tot_water_availVM wb_tot_water_availVM = new wb_tot_water_availVM();
                wb_water_drink_ind_reqVM wb_water_drink_ind_reqVM = new wb_water_drink_ind_reqVM();
                wb_total_water_reqVM wb_total_water_reqVM = new wb_total_water_reqVM();
                wb_water_balanceVM wb_water_balanceVM = new wb_water_balanceVM();


                wizardViewModel.wb_grampanchayat_basic_info = grampanchayat_basic_info;

                //section-2
                if (obj_wb_est_ground_water_availObj != null)
                {
                    wizardViewModel.wb_est_ground_water_avail = obj_wb_est_ground_water_availObj;
                }
                else
                {
                    wb_Est_Ground_Water_AvailVM.annual_rainfall = (grampanchayat_basic_info.annual_rainfall / 1000);
                    wb_Est_Ground_Water_AvailVM.est_vol_rainfall = (grampanchayat_basic_info.annual_rainfall / 1000) * grampanchayat_basic_info.gp_area;
                    wb_Est_Ground_Water_AvailVM.evapo_loss = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall * 0.3);
                    wb_Est_Ground_Water_AvailVM.est_water_avai_rainfall = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall) - (wb_Est_Ground_Water_AvailVM.evapo_loss);
                    wb_Est_Ground_Water_AvailVM.est_vol_rech_gw = (wb_Est_Ground_Water_AvailVM.est_vol_rainfall * 0.12);
                    wizardViewModel.wb_est_ground_water_avail = wb_Est_Ground_Water_AvailVM;
                }
                //
                //section-3
                if (obj_wb_est_avai_rainfall_supply_interventionObj != null)
                {
                    wizardViewModel.wb_est_avai_rainfall_supply_intervention = obj_wb_est_avai_rainfall_supply_interventionObj;
                }
                else
                {
                    wb_est_avai_rainfall_supply_interventionVM.uti_rainfall_runoff = (obj_wb_est_ground_water_availObj.est_water_avai_rainfall * 0.4);
                    wizardViewModel.wb_est_avai_rainfall_supply_intervention = wb_est_avai_rainfall_supply_interventionVM;

                }
                //section-4
                if (obj_wb_avai_surface_water_storObj != null)
                {
                    wizardViewModel.wb_avai_surface_water_stor = obj_wb_avai_surface_water_storObj;
                }
                //else
                //{
                //    wb_avai_surface_water_storVM.total_capacity_structure = (wb_avai_surface_water_storVM.exist_structure * wb_avai_surface_water_storVM.annual_filling * wb_avai_surface_water_storVM.capacity_structure);
                //    wb_avai_surface_water_storVM.lossess = (wb_avai_surface_water_storVM.total_capacity_structure * 0.4);
                //    wb_avai_surface_water_storVM.total_surface_water_uti = (wb_avai_surface_water_storVM.total_capacity_structure - wb_avai_surface_water_storVM.lossess);

                //    wizardViewModel.wb_est_avai_rainfall_supply_intervention = wb_est_avai_rainfall_supply_interventionVM;

                //}


                //section-5
                if (Allstructures.Count > 0)
                {
                    wizardViewModel.structureTotal = Allstructures[0].total;
                    wizardViewModel.items = Allstructures;

                }
                //Section10 
                if (AllCrops.Count > 0)
                {
                    wizardViewModel.CropTotal = AllCrops[0].total_water_req;
                    wizardViewModel.itemsList = AllCrops;
                }


                //section-6
                if (obj_wb_water_avai_transported_waterObj != null)
                {
                    wizardViewModel.wb_water_avai_transported_water = obj_wb_water_avai_transported_waterObj;
                }
                //section-7
                if (obj_wb_water_avai_non_potableObj != null)
                {
                    wizardViewModel.wb_water_avai_non_potable = obj_wb_water_avai_non_potableObj;
                }
                //section-8
                if (obj_wb_tot_water_availObj != null)
                {
                    wizardViewModel.wb_tot_water_avail = obj_wb_tot_water_availObj;
                }
                else
                {

                    wb_tot_water_availVM.groundwater_avail = (obj_wb_est_ground_water_availObj.est_vol_rech_gw);
                    wb_tot_water_availVM.surface_water_avail = (obj_wb_avai_surface_water_storObj.total_surface_water_uti);
                    wb_tot_water_availVM.add_ground_water = (Allstructures[0].total);
                    if (obj_wb_water_avai_transported_waterObj != null)
                    {
                        wb_tot_water_availVM.transported_water = obj_wb_water_avai_transported_waterObj.transported_water;
                    }
                    else
                    {
                        wb_tot_water_availVM.transported_water = 0;
                    }

                    if (obj_wb_water_avai_non_potableObj != null)
                    {
                        wb_tot_water_availVM.water_non_potable_use = obj_wb_water_avai_non_potableObj.water_non_potable_use;
                    }
                    else
                    {
                        wb_tot_water_availVM.water_non_potable_use = 0;
                    }


                    wb_tot_water_availVM.total_water_availability = (wb_tot_water_availVM.groundwater_avail + wb_tot_water_availVM.surface_water_avail
                        + wb_tot_water_availVM.add_ground_water + wb_tot_water_availVM.transported_water + wb_tot_water_availVM.water_non_potable_use);

                    wizardViewModel.wb_tot_water_avail = wb_tot_water_availVM;

                }

                //section-9
                if (obj_wb_water_drink_ind_reqObj != null)
                {
                    wizardViewModel.wb_water_drink_ind_req = obj_wb_water_drink_ind_reqObj;
                }
                else
                {
                    //double drink_dom_water_reqcal = (55 * 365 / 10000000);
                    wb_water_drink_ind_reqVM.drink_dom_water_req = (grampanchayat_basic_info.human_population * 0.0020075);
                    //double water_req_livestock_popcal = (20 * 365 / 10000000);
                    wb_water_drink_ind_reqVM.water_req_livestock_pop = (grampanchayat_basic_info.livestock_population * 0.00073);

                    wb_water_drink_ind_reqVM.total_water_requirement = (wb_water_drink_ind_reqVM.drink_dom_water_req + wb_water_drink_ind_reqVM.water_req_livestock_pop + Convert.ToDouble(wb_water_drink_ind_reqVM.water_req_indust));


                    wizardViewModel.wb_water_drink_ind_req = wb_water_drink_ind_reqVM;



                }

                //section11
                if (obj_wb_total_water_reqObj != null)
                {
                    wizardViewModel.wb_total_water_req = obj_wb_total_water_reqObj;
                }
                else
                {
                    if (obj_wb_water_drink_ind_reqObj != null)
                    {
                        wb_total_water_reqVM.drink_dom_water_req = (obj_wb_water_drink_ind_reqObj.drink_dom_water_req);
                        wb_total_water_reqVM.water_req_livestock_pop = (obj_wb_water_drink_ind_reqObj.water_req_livestock_pop);
                        wb_total_water_reqVM.water_req_indust = Convert.ToDouble(obj_wb_water_drink_ind_reqObj.water_req_indust);

                    }
                    else
                    {
                        wb_total_water_reqVM.drink_dom_water_req = 0;
                    }
                    //wb_tot_water_availVM.add_ground_water = (Allstructures[0].total);
                    wb_total_water_reqVM.total_water_requirement = (wb_total_water_reqVM.drink_dom_water_req + wb_total_water_reqVM.water_req_livestock_pop
                        + wb_tot_water_availVM.add_ground_water + wb_total_water_reqVM.water_req_indust);
                    wizardViewModel.wb_total_water_req = wb_total_water_reqVM;

                }

                //section12
                if (obj_wb_water_balanceObj != null)
                {
                    wizardViewModel.wb_water_balance = obj_wb_water_balanceObj;
                }
                else
                {
                    if (obj_wb_tot_water_availObj != null)
                    {
                        wb_water_balanceVM.total_water_availability = obj_wb_tot_water_availObj.total_water_availability;
                    }
                    if (obj_wb_total_water_reqObj != null)
                    {
                        wb_water_balanceVM.total_water_requirement = obj_wb_total_water_reqObj.total_water_requirement;
                    }
                    else
                    {
                        wb_water_balanceVM.total_water_requirement = 0;
                    }


                    wb_water_balanceVM.water_balance = wb_water_balanceVM.total_water_availability - wb_water_balanceVM.total_water_requirement;

                    wizardViewModel.wb_water_balance = wb_water_balanceVM;



                }
            }

            return View(wizardViewModel);
        }



        [HttpPost]
        public ActionResult StateLevel_Dropdown(string lg_state, string lg_dist, string lg_block, string lg_gram, string Year)
        {
            int stateid = Convert.ToInt32(lg_state);
            int lg_distId = Convert.ToInt32(lg_dist);
            int lg_blockId = Convert.ToInt32(lg_block);
            int lg_gramId = Convert.ToInt32(lg_gram);
            var data = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.lg_state == lg_state
            && s.lg_dist == lg_dist
            && s.lg_block == lg_block
            && s.lg_gram == lg_gram
            ).SingleOrDefault();

            Session["lg_state"] = lg_state;
            Session["lg_dist"] = lg_dist;
            Session["lg_block"] = lg_block;
            Session["lg_gram"] = lg_gram;
            Session["lg_year"] = Year;
            Session["lg_stateName"] = data.state_name.TrimEnd('\n').TrimEnd(' ');
            Session["lg_distName"] = data.district_name.TrimEnd('\n').TrimEnd(' ');
            Session["lg_blockName"] = data.block_name.TrimEnd('\n').TrimEnd(' ');
            Session["lg_gramName"] = data.gram_panchayat_name.TrimEnd('\n').TrimEnd(' ');

            return Json("Yes", JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult State_SessionInfo_1(string Data)
        {
            if (Session["UserId"] != null)
            {
                try
                {



                    JavaScriptSerializer js = new JavaScriptSerializer();
                    var result = js.Deserialize<abhy_socialmgt_gramdb>(Data);
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
                        string sname = Session["gstate"].ToString();
                        string dist = Session["gdist"].ToString();
                        string block = Session["gblock"].ToString();
                        string gp = Session["ggram"].ToString();

                        var data = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.state_name == sname
                        && s.district_name == dist
                        && s.block_name == block
                        && s.gram_panchayat_name == gp
                        ).SingleOrDefault();
                        if (data != null)
                        {
                            Session["lg_state"] = data.lg_state;
                        }
                        var Officer = "State Level Nodal Officer";
                        var Statename = Session["lg_state"].ToString();
                        var Str = Officer + ',' + Statename;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "District Level Nodal Officer")
                    {
                        string sname = Session["gstate"].ToString();
                        string dist = Session["gdist"].ToString();
                        string block = Session["gblock"].ToString();
                        string gp = Session["ggram"].ToString();

                        var data = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.state_name == sname
                        && s.district_name == dist
                        && s.block_name == block
                        && s.gram_panchayat_name == gp
                        ).SingleOrDefault();
                        if (data != null)
                        {
                            Session["lg_state"] = data.lg_state;
                            Session["lg_dist"] = data.lg_dist;
                        }
                        var Officer = "District Level Nodal Officer";
                        var Statename = Session["lg_state"].ToString();
                        var Dist = Session["lg_dist"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Block Level Nodal Officer")
                    {
                        string sname = Session["gstate"].ToString();
                        string dist = Session["gdist"].ToString();
                        string block = Session["gblock"].ToString();
                        string gp = Session["ggram"].ToString();

                        var data = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.state_name == sname
                        && s.district_name == dist
                        && s.block_name == block
                        && s.gram_panchayat_name == gp
                        ).SingleOrDefault();
                        if (data != null)
                        {
                            Session["lg_state"] = data.lg_state;
                            Session["lg_dist"] = data.lg_dist;
                            Session["lg_block"] = data.lg_block;
                        }
                        var Officer = "Block Level Nodal Officer";
                        var Statename = Session["lg_state"].ToString();
                        var Dist = Session["lg_dist"].ToString();
                        var Block = Session["lg_block"].ToString();
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block;
                        return Json(Str, JsonRequestBehavior.AllowGet);

                    }
                    else if (Session["Officer"] != null && Session["Officer"].ToString() == "Gram Panchyat Nodal Officer")
                    {
                        string sname = Session["gstate"].ToString();
                        string dist = Session["gdist"].ToString();
                        string block = Session["gblock"].ToString();
                        string gp = Session["ggram"].ToString();

                        var data = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.state_name == sname
                        && s.district_name == dist
                        && s.block_name == block
                        && s.gram_panchayat_name == gp
                        ).SingleOrDefault();
                        if (data != null)
                        {
                            Session["lg_state"] = data.lg_state;
                            Session["lg_dist"] = data.lg_dist;
                            Session["lg_block"] = data.lg_block;
                            Session["lg_gram"] = data.lg_gram;
                        }

                        var Officer = "Gram Panchyat Nodal Officer";
                        var Statename = data.lg_state;
                        var Dist = data.lg_dist;
                        var Block = data.lg_block;
                        var Gram = data.lg_gram;
                        var Str = Officer + ',' + Statename + ',' + Dist + ',' + Block + ',' + Gram;
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

        [HttpPost]
        public ActionResult Sign_Up_DropdownInfo()
        {
            //string state = string.Empty;

            try
            {
                var slist = ABE.obj_abhy_ml_with_block_gp_area_info_new.ToList();
                //var slist = ABE.obj_abhy_gpdata_new.ToList();
                //state = Session["gstate_name"].ToString();
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
        /// <summary>
        /// StepOne-Gram Panchayat Basic Information
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult StepOne(WizardViewModel model)
        {
            wb_grampanchayat_basic_info obj = new wb_grampanchayat_basic_info();
            model.wb_grampanchayat_basic_info.year = Session["lg_year"].ToString();

            try
            {
                var existingInfo = ABE.obj_wb_grampanchayat_basic_info.
                    Where(x => x.state_id == model.wb_grampanchayat_basic_info.state_id
                    && x.district_id == model.wb_grampanchayat_basic_info.district_id
                    && x.block_id == model.wb_grampanchayat_basic_info.block_id
                    && x.gp_id == model.wb_grampanchayat_basic_info.gp_id
                    && x.year == model.wb_grampanchayat_basic_info.year
                ).SingleOrDefault();

                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_grampanchayat_basic_info.state_id;
                    existingInfo.district_id = model.wb_grampanchayat_basic_info.district_id;
                    existingInfo.block_id = model.wb_grampanchayat_basic_info.block_id;
                    existingInfo.gp_id = model.wb_grampanchayat_basic_info.gp_id;
                    existingInfo.gp_area = model.wb_grampanchayat_basic_info.gp_area;
                    existingInfo.annual_rainfall = model.wb_grampanchayat_basic_info.annual_rainfall;
                    existingInfo.human_population = model.wb_grampanchayat_basic_info.human_population;
                    existingInfo.livestock_population = model.wb_grampanchayat_basic_info.livestock_population;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });

                }
                else
                {
                    obj.state_id = model.wb_grampanchayat_basic_info.state_id;
                    obj.district_id = model.wb_grampanchayat_basic_info.district_id;
                    obj.block_id = model.wb_grampanchayat_basic_info.block_id;
                    obj.gp_id = model.wb_grampanchayat_basic_info.gp_id;
                    obj.year = model.wb_grampanchayat_basic_info.year;
                    obj.gp_area = model.wb_grampanchayat_basic_info.gp_area;
                    obj.annual_rainfall = model.wb_grampanchayat_basic_info.annual_rainfall;
                    obj.human_population = model.wb_grampanchayat_basic_info.human_population;
                    obj.livestock_population = model.wb_grampanchayat_basic_info.livestock_population;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_grampanchayat_basic_info.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }
            return Json(new { success = true });

        }
        /// <summary>
        /// StepTwo-Estimated Ground Water Availability
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult StepTwo(WizardViewModel model)
        {

            wb_est_ground_water_avail obj = new wb_est_ground_water_avail();
            model.wb_est_ground_water_avail.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_est_ground_water_avail.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_est_ground_water_avail.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_est_ground_water_avail.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_est_ground_water_avail.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_est_ground_water_avail.
                    Where(x => x.state_id == model.wb_est_ground_water_avail.state_id
                    && x.district_id == model.wb_est_ground_water_avail.district_id
                    && x.block_id == model.wb_est_ground_water_avail.block_id
                    && x.gp_id == model.wb_est_ground_water_avail.gp_id
                    && x.year == model.wb_est_ground_water_avail.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_est_ground_water_avail.state_id;
                    existingInfo.district_id = model.wb_est_ground_water_avail.district_id;
                    existingInfo.block_id = model.wb_est_ground_water_avail.block_id;
                    existingInfo.gp_id = model.wb_est_ground_water_avail.gp_id;
                    existingInfo.annual_rainfall = model.wb_est_ground_water_avail.annual_rainfall;
                    existingInfo.est_vol_rainfall = model.wb_est_ground_water_avail.est_vol_rainfall;
                    existingInfo.evapo_loss = model.wb_est_ground_water_avail.evapo_loss;
                    existingInfo.est_water_avai_rainfall = model.wb_est_ground_water_avail.est_water_avai_rainfall;
                    existingInfo.est_vol_rech_gw = model.wb_est_ground_water_avail.est_vol_rech_gw;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = model.wb_est_ground_water_avail.state_id;
                    obj.district_id = model.wb_est_ground_water_avail.district_id;
                    obj.block_id = model.wb_est_ground_water_avail.block_id;
                    obj.gp_id = model.wb_est_ground_water_avail.gp_id;
                    obj.year = model.wb_est_ground_water_avail.year;
                    obj.annual_rainfall = model.wb_est_ground_water_avail.annual_rainfall;
                    obj.est_vol_rainfall = model.wb_est_ground_water_avail.est_vol_rainfall;
                    obj.evapo_loss = model.wb_est_ground_water_avail.evapo_loss;
                    obj.est_water_avai_rainfall = model.wb_est_ground_water_avail.est_water_avai_rainfall;
                    obj.est_vol_rech_gw = model.wb_est_ground_water_avail.est_vol_rech_gw;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_est_ground_water_avail.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }

        /// <summary>
        /// StepThree-Estimated Availability from Rainfall for planning of supply side interventions
        /// </summary>
        [HttpPost]
        public JsonResult StepThree(WizardViewModel model)
        {
            wb_est_avai_rainfall_supply_intervention obj = new wb_est_avai_rainfall_supply_intervention();
            model.wb_est_avai_rainfall_supply_intervention.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_est_avai_rainfall_supply_intervention.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_est_avai_rainfall_supply_intervention.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_est_avai_rainfall_supply_intervention.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_est_avai_rainfall_supply_intervention.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_est_avai_rainfall_supply_intervention.
                    Where(x => x.state_id == model.wb_est_avai_rainfall_supply_intervention.state_id
                    && x.district_id == model.wb_est_avai_rainfall_supply_intervention.district_id
                    && x.block_id == model.wb_est_avai_rainfall_supply_intervention.block_id
                    && x.gp_id == model.wb_est_avai_rainfall_supply_intervention.gp_id
                    && x.year == model.wb_est_avai_rainfall_supply_intervention.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_est_avai_rainfall_supply_intervention.state_id;
                    existingInfo.district_id = model.wb_est_avai_rainfall_supply_intervention.district_id;
                    existingInfo.block_id = model.wb_est_avai_rainfall_supply_intervention.block_id;
                    existingInfo.gp_id = model.wb_est_avai_rainfall_supply_intervention.gp_id;
                    existingInfo.uti_rainfall_runoff = model.wb_est_avai_rainfall_supply_intervention.uti_rainfall_runoff;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = model.wb_est_avai_rainfall_supply_intervention.state_id;
                    obj.district_id = model.wb_est_avai_rainfall_supply_intervention.district_id;
                    obj.block_id = model.wb_est_avai_rainfall_supply_intervention.block_id;
                    obj.gp_id = model.wb_est_avai_rainfall_supply_intervention.gp_id;
                    obj.year = model.wb_est_avai_rainfall_supply_intervention.year;
                    obj.uti_rainfall_runoff = model.wb_est_avai_rainfall_supply_intervention.uti_rainfall_runoff;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_est_avai_rainfall_supply_intervention.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }


        /// <summary>
        /// StepFour-Availability of Surface Water Storage
        /// </summary>
        [HttpPost]
        public JsonResult StepFour(WizardViewModel model)
        {
            wb_avai_surface_water_stor obj = new wb_avai_surface_water_stor();
            model.wb_avai_surface_water_stor.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_avai_surface_water_stor.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_avai_surface_water_stor.block_id = Convert.ToInt32(Session["lg_block"]); ;
            model.wb_avai_surface_water_stor.gp_id = Convert.ToInt32(Session["lg_gram"]); ;
            model.wb_avai_surface_water_stor.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_avai_surface_water_stor.
                    Where(x => x.state_id == model.wb_avai_surface_water_stor.state_id
                    && x.district_id == model.wb_avai_surface_water_stor.district_id
                    && x.block_id == model.wb_avai_surface_water_stor.block_id
                    && x.gp_id == model.wb_avai_surface_water_stor.gp_id
                    && x.year == model.wb_avai_surface_water_stor.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_avai_surface_water_stor.state_id;
                    existingInfo.district_id = model.wb_avai_surface_water_stor.district_id;
                    existingInfo.block_id = model.wb_avai_surface_water_stor.block_id;
                    existingInfo.gp_id = model.wb_avai_surface_water_stor.gp_id;
                    existingInfo.exist_structure = model.wb_avai_surface_water_stor.exist_structure;
                    existingInfo.annual_filling = model.wb_avai_surface_water_stor.annual_filling;
                    existingInfo.capacity_structure = model.wb_avai_surface_water_stor.capacity_structure;
                    existingInfo.total_capacity_structure = model.wb_avai_surface_water_stor.total_capacity_structure;
                    existingInfo.lossess = model.wb_avai_surface_water_stor.lossess;
                    existingInfo.total_surface_water_uti = model.wb_avai_surface_water_stor.total_surface_water_uti;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });

                }
                else
                {
                    obj.state_id = model.wb_avai_surface_water_stor.state_id;
                    obj.district_id = model.wb_avai_surface_water_stor.district_id;
                    obj.block_id = model.wb_avai_surface_water_stor.block_id;
                    obj.gp_id = model.wb_avai_surface_water_stor.gp_id;
                    obj.year = model.wb_avai_surface_water_stor.year;
                    obj.exist_structure = model.wb_avai_surface_water_stor.exist_structure;
                    obj.annual_filling = model.wb_avai_surface_water_stor.annual_filling;
                    obj.capacity_structure = model.wb_avai_surface_water_stor.capacity_structure;
                    obj.total_capacity_structure = model.wb_avai_surface_water_stor.total_capacity_structure;
                    obj.lossess = model.wb_avai_surface_water_stor.lossess;
                    obj.total_surface_water_uti = model.wb_avai_surface_water_stor.total_surface_water_uti;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_avai_surface_water_stor.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }

        /// <summary>
        /// StepFive - Detail of Artificial Recharge & Water Conservation Structures
        /// </summary>
        [HttpPost]
        public JsonResult StepFive(WizardViewModel model)
        {
            WizardViewModel wizardViewModel = new WizardViewModel();
            int isExits = 0;
            int state_id = Convert.ToInt32(Session["lg_state"]);
            int district_id = Convert.ToInt32(Session["lg_dist"]);
            int block_id = Convert.ToInt32(Session["lg_block"]);
            int gp_id = Convert.ToInt32(Session["lg_gram"]);
            string year = Convert.ToString(Session["lg_year"]);

            try
            {
                List<wb_art_rech_water_cons_structureVM> Listitems = new List<wb_art_rech_water_cons_structureVM>();
                if (model.items.Count > 0)
                {
                    foreach (var item in model.items)
                    {
                        var existingEntity = ABE.obj_wb_art_rech_water_cons_structure
                                             .Where(e => e.id == item.id).SingleOrDefault();

                        if (existingEntity != null)
                        {
                            existingEntity.number_of_structures = item.number_of_structures;
                            existingEntity.area_of_structures = item.area_of_structures;
                            existingEntity.avg_depth_structures = item.avg_depth_structures;
                            existingEntity.total_storage_capacity = item.total_storage_capacity;
                            existingEntity.annual_fillings = item.annual_fillings;
                            existingEntity.qt_annual_rech_water = item.qt_annual_rech_water;
                            existingEntity.type_of_structure = item.type_of_structure;
                            existingEntity.other_type_of_structure = item.type_of_structure_other;
                            existingEntity.total = item.total;
                            existingEntity.updated_by = Convert.ToString(Session["userid"]);
                            existingEntity.updated_datetime = DateTime.Now;
                            ABE.Entry(existingEntity).State = EntityState.Modified;
                        }
                        else
                        {

                            if (item.type_of_structure != "Other")
                            {
                                var duplicateEntity = ABE.obj_wb_art_rech_water_cons_structure
                           .Where(e => e.state_id == item.state_id &&
                                       e.district_id == item.district_id &&
                                       e.block_id == item.block_id &&
                                       e.gp_id == item.gp_id &&
                                       e.year == item.year &&
                                       e.type_of_structure == item.type_of_structure)
                           .SingleOrDefault();
                                if (duplicateEntity == null)
                                {
                                    // Add a new entity if it doesn't exist
                                    wb_art_rech_water_cons_structure newEntity = new wb_art_rech_water_cons_structure
                                    {
                                        state_id = item.state_id,
                                        district_id = item.district_id,
                                        block_id = item.block_id,
                                        gp_id = item.gp_id,
                                        year = item.year,
                                        type_of_structure = item.type_of_structure,
                                        number_of_structures = item.number_of_structures,
                                        area_of_structures = item.area_of_structures,
                                        avg_depth_structures = item.avg_depth_structures,
                                        other_type_of_structure = item.type_of_structure_other,
                                        total_storage_capacity = item.total_storage_capacity,
                                        total = item.total,
                                        annual_fillings = item.annual_fillings,
                                        qt_annual_rech_water = item.qt_annual_rech_water,
                                        created_by = Convert.ToString(Session["userid"]),
                                        created_datetime = DateTime.Now
                                    };

                                    ABE.obj_wb_art_rech_water_cons_structure.Add(newEntity);
                                }
                                else
                                {
                                    isExits = 1;
                                    //         if (duplicateEntity.type_of_structure == "Other")
                                    //         {
                                    //             duplicateEntity = ABE.obj_wb_art_rech_water_cons_structure
                                    //.Where(e => e.state_id == item.state_id &&
                                    //            e.district_id == item.district_id &&
                                    //            e.block_id == item.block_id &&
                                    //            e.gp_id == item.gp_id &&
                                    //            e.year == item.year &&
                                    //            e.id == item.id &&
                                    //            e.other_type_of_structure == item.other_type_of_structure)
                                    //.SingleOrDefault();
                                    //             if (duplicateEntity == null)
                                    //             {
                                    //                 // Add a new entity if it doesn't exist
                                    //                 wb_art_rech_water_cons_structure newEntity = new wb_art_rech_water_cons_structure
                                    //                 {
                                    //                     state_id = item.state_id,
                                    //                     district_id = item.district_id,
                                    //                     block_id = item.block_id,
                                    //                     gp_id = item.gp_id,
                                    //                     year = item.year,
                                    //                     type_of_structure = item.type_of_structure,
                                    //                     number_of_structures = item.number_of_structures,
                                    //                     area_of_structures = item.area_of_structures,
                                    //                     avg_depth_structures = item.avg_depth_structures,
                                    //                     other_type_of_structure = item.other_type_of_structure,
                                    //                     total_storage_capacity = item.total_storage_capacity,
                                    //                     total = item.total,
                                    //                     annual_fillings = item.annual_fillings,
                                    //                     qt_annual_rech_water = item.qt_annual_rech_water,
                                    //                     created_by = Convert.ToString(Session["userid"]),
                                    //                     created_datetime = DateTime.Now
                                    //                 };

                                    //                 ABE.obj_wb_art_rech_water_cons_structure.Add(newEntity);
                                    //             }
                                    //             else
                                    //             {
                                    //                 isExits = 1;
                                    //             }
                                    //         }
                                    //         else
                                    //         {
                                    //             isExits = 1;
                                    //         }
                                }
                            }
                            else
                            {
                                wb_art_rech_water_cons_structure newEntity = new wb_art_rech_water_cons_structure
                                {
                                    state_id = item.state_id,
                                    district_id = item.district_id,
                                    block_id = item.block_id,
                                    gp_id = item.gp_id,
                                    year = item.year,
                                    type_of_structure = item.type_of_structure,
                                    number_of_structures = item.number_of_structures,
                                    area_of_structures = item.area_of_structures,
                                    avg_depth_structures = item.avg_depth_structures,
                                    other_type_of_structure = item.type_of_structure_other,
                                    total_storage_capacity = item.total_storage_capacity,
                                    total = item.total,
                                    annual_fillings = item.annual_fillings,
                                    qt_annual_rech_water = item.qt_annual_rech_water,
                                    created_by = Convert.ToString(Session["userid"]),
                                    created_datetime = DateTime.Now
                                };

                                ABE.obj_wb_art_rech_water_cons_structure.Add(newEntity);
                            }
                            

                        }
                    }
                    ABE.SaveChanges();
                    var Allstructures = ABE.obj_wb_art_rech_water_cons_structure.
         Where(x => x.state_id == state_id
         && x.district_id == district_id
         && x.block_id == block_id
         && x.gp_id == gp_id
         && x.year == year
     ).Select(s => new wb_art_rech_water_cons_structureVM
     {
         type_of_structure = s.type_of_structure,
         number_of_structures = s.number_of_structures,
         area_of_structures = s.area_of_structures,
         avg_depth_structures = s.avg_depth_structures,
         total_storage_capacity = s.total_storage_capacity,
         annual_fillings = s.annual_fillings,
         qt_annual_rech_water = s.qt_annual_rech_water,
         type_of_structure_other = s.other_type_of_structure,
         total = s.total,
         id = s.id

     }).ToList();

                    string partialBody = "";
                    string partialFooter = "";


                    if (Allstructures.Any())
                    {
                        wizardViewModel.items = Allstructures;
                        wizardViewModel.structureTotal = Allstructures[0].total;
                        // Render the partial view as a string
                        partialBody = this.RenderPartialViewToString("_TableRowPartial", wizardViewModel);
                        partialFooter = this.RenderPartialViewToString("_TableFooterPartial", wizardViewModel);

                    }

                   
                    //return Json(new { success = true ,msg= isExits,data= duplicateEntityAll});
                    return Json(new
                    {
                        success = true,
                        msg = isExits,
                        data = Allstructures,
                        partialBody = partialBody,// include rendered partial view in the response
                        partialFooter = partialFooter
                    });
                }
                else
                {
                    return Json(new { success = false });
                }

            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }
        }

        public string RenderPartialViewToString(string viewName, object model)
        {
            if (string.IsNullOrEmpty(viewName))
                viewName = ControllerContext.RouteData.GetRequiredString("action");

            ViewData.Model = model;

            using (var sw = new StringWriter())
            {
                var viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, viewName);
                var viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                viewResult.View.Render(viewContext, sw);
                return sw.GetStringBuilder().ToString();
            }
        }



        /// <summary>
        /// StepSix - Water Availability from Transported Water
        /// </summary>
        [HttpPost]
        public JsonResult StepSix(WizardViewModel model)
        {
            wb_water_avai_transported_water obj = new wb_water_avai_transported_water();
            model.wb_water_avai_transported_water.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_water_avai_transported_water.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_water_avai_transported_water.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_water_avai_transported_water.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_water_avai_transported_water.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_water_avai_transported_water.
                    Where(x => x.state_id == model.wb_water_avai_transported_water.state_id
                    && x.district_id == model.wb_water_avai_transported_water.district_id
                    && x.block_id == model.wb_water_avai_transported_water.block_id
                    && x.gp_id == model.wb_water_avai_transported_water.gp_id
                    && x.year == model.wb_water_avai_transported_water.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_water_avai_transported_water.state_id;
                    existingInfo.district_id = model.wb_water_avai_transported_water.district_id;
                    existingInfo.block_id = model.wb_water_avai_transported_water.block_id;
                    existingInfo.gp_id = model.wb_water_avai_transported_water.gp_id;
                    existingInfo.transported_water = model.wb_water_avai_transported_water.transported_water;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = model.wb_water_avai_transported_water.state_id;
                    obj.district_id = model.wb_water_avai_transported_water.district_id;
                    obj.block_id = model.wb_water_avai_transported_water.block_id;
                    obj.gp_id = model.wb_water_avai_transported_water.gp_id;
                    obj.year = model.wb_water_avai_transported_water.year;
                    obj.transported_water = model.wb_water_avai_transported_water.transported_water;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_water_avai_transported_water.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }


        /// <summary>
        /// StepSeven - Water Available for non - potable use
        /// </summary>
        [HttpPost]
        public JsonResult StepSeven(WizardViewModel model)
        {
            wb_water_avai_non_potable obj = new wb_water_avai_non_potable();
            model.wb_water_avai_non_potable.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_water_avai_non_potable.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_water_avai_non_potable.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_water_avai_non_potable.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_water_avai_non_potable.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_water_avai_non_potable.
                    Where(x => x.state_id == model.wb_water_avai_non_potable.state_id
                    && x.district_id == model.wb_water_avai_non_potable.district_id
                    && x.block_id == model.wb_water_avai_non_potable.block_id
                    && x.gp_id == model.wb_water_avai_non_potable.gp_id
                    && x.year == model.wb_water_avai_non_potable.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_water_avai_non_potable.state_id;
                    existingInfo.district_id = model.wb_water_avai_non_potable.district_id;
                    existingInfo.block_id = model.wb_water_avai_non_potable.block_id;
                    existingInfo.gp_id = model.wb_water_avai_non_potable.gp_id;
                    existingInfo.water_non_potable_use = model.wb_water_avai_non_potable.water_non_potable_use;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = model.wb_water_avai_non_potable.state_id;
                    obj.district_id = model.wb_water_avai_non_potable.district_id;
                    obj.block_id = model.wb_water_avai_non_potable.block_id;
                    obj.gp_id = model.wb_water_avai_non_potable.gp_id;
                    obj.year = model.wb_water_avai_non_potable.year;
                    obj.water_non_potable_use = model.wb_water_avai_non_potable.water_non_potable_use;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_water_avai_non_potable.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }

        /// <summary>
        /// StepEight - Total Water Availability
        /// </summary>
        [HttpPost]
        public JsonResult StepEight(WizardViewModel model)
        {
            wb_tot_water_avail obj = new wb_tot_water_avail();
            model.wb_tot_water_avail.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_tot_water_avail.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_tot_water_avail.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_tot_water_avail.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_tot_water_avail.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_tot_water_avail.
                    Where(x => x.state_id == model.wb_tot_water_avail.state_id
                    && x.district_id == model.wb_tot_water_avail.district_id
                    && x.block_id == model.wb_tot_water_avail.block_id
                    && x.gp_id == model.wb_tot_water_avail.gp_id
                    && x.year == model.wb_tot_water_avail.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_tot_water_avail.state_id;
                    existingInfo.district_id = model.wb_tot_water_avail.district_id;
                    existingInfo.block_id = model.wb_tot_water_avail.block_id;
                    existingInfo.gp_id = model.wb_tot_water_avail.gp_id;
                    existingInfo.groundwater_avail = model.wb_tot_water_avail.groundwater_avail;
                    existingInfo.surface_water_avail = model.wb_tot_water_avail.surface_water_avail;
                    existingInfo.add_ground_water = model.wb_tot_water_avail.add_ground_water;
                    existingInfo.transported_water = model.wb_tot_water_avail.transported_water;
                    existingInfo.water_non_potable_use = model.wb_tot_water_avail.water_non_potable_use;
                    existingInfo.total_water_availability = model.wb_tot_water_avail.total_water_availability;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = model.wb_tot_water_avail.state_id;
                    obj.district_id = model.wb_tot_water_avail.district_id;
                    obj.block_id = model.wb_tot_water_avail.block_id;
                    obj.gp_id = model.wb_tot_water_avail.gp_id;
                    obj.year = model.wb_tot_water_avail.year;
                    obj.groundwater_avail = model.wb_tot_water_avail.groundwater_avail;
                    obj.surface_water_avail = model.wb_tot_water_avail.surface_water_avail;
                    obj.add_ground_water = model.wb_tot_water_avail.add_ground_water;
                    obj.transported_water = model.wb_tot_water_avail.transported_water;
                    obj.water_non_potable_use = model.wb_tot_water_avail.water_non_potable_use;
                    obj.total_water_availability = model.wb_tot_water_avail.total_water_availability;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_tot_water_avail.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }

        /// <summary>
        /// StepNine - Water Requirement for drinking/domestic, Industries and other commercial uses
        /// </summary>
        [HttpPost]
        public JsonResult StepNine(WizardViewModel model)
        {
            wb_water_drink_ind_req obj = new wb_water_drink_ind_req();
            model.wb_water_drink_ind_req.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_water_drink_ind_req.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_water_drink_ind_req.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_water_drink_ind_req.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_water_drink_ind_req.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_water_drink_ind_req.
                    Where(x => x.state_id == model.wb_water_drink_ind_req.state_id
                    && x.district_id == model.wb_water_drink_ind_req.district_id
                    && x.block_id == model.wb_water_drink_ind_req.block_id
                    && x.gp_id == model.wb_water_drink_ind_req.gp_id
                    && x.year == model.wb_water_drink_ind_req.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_water_drink_ind_req.state_id;
                    existingInfo.district_id = model.wb_water_drink_ind_req.district_id;
                    existingInfo.block_id = model.wb_water_drink_ind_req.block_id;
                    existingInfo.gp_id = model.wb_water_drink_ind_req.gp_id;
                    existingInfo.drink_dom_water_req = model.wb_water_drink_ind_req.drink_dom_water_req;
                    existingInfo.water_req_livestock_pop = model.wb_water_drink_ind_req.water_req_livestock_pop;
                    existingInfo.water_req_indust = model.wb_water_drink_ind_req.water_req_indust;
                    existingInfo.water_req_livestock_pop = model.wb_water_drink_ind_req.water_req_livestock_pop;
                    existingInfo.total_water_requirement = model.wb_water_drink_ind_req.total_water_requirement;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = model.wb_water_drink_ind_req.state_id;
                    obj.district_id = model.wb_water_drink_ind_req.district_id;
                    obj.block_id = model.wb_water_drink_ind_req.block_id;
                    obj.gp_id = model.wb_water_drink_ind_req.gp_id;
                    obj.year = model.wb_water_drink_ind_req.year;
                    obj.drink_dom_water_req = model.wb_water_drink_ind_req.drink_dom_water_req;
                    obj.water_req_livestock_pop = model.wb_water_drink_ind_req.water_req_livestock_pop;
                    obj.water_req_indust = model.wb_water_drink_ind_req.water_req_indust;
                    obj.total_water_requirement = model.wb_water_drink_ind_req.total_water_requirement;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_water_drink_ind_req.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }


        /// <summary>
        /// StepEleven - Total  Water Requirement
        /// </summary>
        [HttpPost]
        public JsonResult StepEleven(WizardViewModel model)
        {
            wb_total_water_req obj = new wb_total_water_req();
            model.wb_total_water_req.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_total_water_req.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_total_water_req.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_total_water_req.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_total_water_req.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_total_water_req.
                    Where(x => x.state_id == model.wb_total_water_req.state_id
                    && x.district_id == model.wb_total_water_req.district_id
                    && x.block_id == model.wb_total_water_req.block_id
                    && x.gp_id == model.wb_total_water_req.gp_id
                    && x.year == model.wb_total_water_req.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_total_water_req.state_id;
                    existingInfo.district_id = model.wb_total_water_req.district_id;
                    existingInfo.block_id = model.wb_total_water_req.block_id;
                    existingInfo.gp_id = model.wb_total_water_req.gp_id;
                    existingInfo.drink_dom_water_req = model.wb_total_water_req.drink_dom_water_req;
                    existingInfo.water_req_livestock_pop = model.wb_total_water_req.water_req_livestock_pop;
                    existingInfo.irri_water_req = model.wb_total_water_req.irri_water_req;
                    existingInfo.water_req_indust = model.wb_total_water_req.water_req_indust;
                    existingInfo.total_water_requirement = model.wb_total_water_req.total_water_requirement;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {

                    obj.state_id = model.wb_total_water_req.state_id;
                    obj.district_id = model.wb_total_water_req.district_id;
                    obj.block_id = model.wb_total_water_req.block_id;
                    obj.gp_id = model.wb_total_water_req.gp_id;
                    obj.year = model.wb_total_water_req.year;
                    obj.drink_dom_water_req = model.wb_total_water_req.drink_dom_water_req;
                    obj.water_req_livestock_pop = model.wb_total_water_req.water_req_livestock_pop;
                    obj.irri_water_req = model.wb_total_water_req.irri_water_req;
                    obj.water_req_indust = model.wb_total_water_req.water_req_indust;
                    obj.total_water_requirement = model.wb_total_water_req.total_water_requirement;
                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_total_water_req.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }


        /// <summary>
        /// StepTwelve - Water Balance
        /// </summary>
        [HttpPost]
        public JsonResult StepTwelve(WizardViewModel model)
        {
            wb_water_balance obj = new wb_water_balance();
            model.wb_water_balance.state_id = Convert.ToInt32(Session["lg_state"]);
            model.wb_water_balance.district_id = Convert.ToInt32(Session["lg_dist"]);
            model.wb_water_balance.block_id = Convert.ToInt32(Session["lg_block"]);
            model.wb_water_balance.gp_id = Convert.ToInt32(Session["lg_gram"]);
            model.wb_water_balance.year = Convert.ToString(Session["lg_year"]);
            try
            {
                var existingInfo = ABE.obj_wb_water_balance.
                    Where(x => x.state_id == model.wb_water_balance.state_id
                    && x.district_id == model.wb_water_balance.district_id
                    && x.block_id == model.wb_water_balance.block_id
                    && x.gp_id == model.wb_water_balance.gp_id
                    && x.year == model.wb_water_balance.year
                ).SingleOrDefault();
                if (existingInfo != null)
                {
                    existingInfo.state_id = model.wb_water_balance.state_id;
                    existingInfo.district_id = model.wb_water_balance.district_id;
                    existingInfo.block_id = model.wb_water_balance.block_id;
                    existingInfo.gp_id = model.wb_water_balance.gp_id;
                    existingInfo.total_water_availability = model.wb_water_balance.total_water_availability;
                    existingInfo.total_water_requirement = model.wb_water_balance.total_water_requirement;
                    existingInfo.water_balance = model.wb_water_balance.water_balance;
                    existingInfo.updated_by = Convert.ToInt32(Session["userid"]);
                    existingInfo.updated_datetime = DateTime.Now;
                    ABE.Entry(existingInfo).State = EntityState.Modified;
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }
                else
                {
                    obj.state_id = model.wb_water_balance.state_id;
                    obj.district_id = model.wb_water_balance.district_id;
                    obj.block_id = model.wb_water_balance.block_id;
                    obj.gp_id = model.wb_water_balance.gp_id;
                    obj.year = model.wb_water_balance.year;
                    obj.total_water_availability = model.wb_water_balance.total_water_availability;
                    obj.total_water_requirement = model.wb_water_balance.total_water_requirement;
                    obj.water_balance = model.wb_water_balance.water_balance;

                    obj.created_by = Convert.ToInt32(Session["userid"]);
                    obj.created_datetime = DateTime.Now;
                    ABE.obj_wb_water_balance.Add(obj);
                    int row = ABE.SaveChanges();
                    return Json(new { success = row > 0 ? true : false });
                }


            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }

            return Json(new { success = true });
        }


        /// <summary>
        /// StepTen - Area under Major Crops and Irrigation Water Requirement
        /// </summary>
        [HttpPost]
        public JsonResult StepTen(WizardViewModel model)
        {
            WizardViewModel wizardViewModel = new WizardViewModel();
            var getAllcrops = ABE.obj_wb_ref_type_of_crop_net_irr_req.AsEnumerable()
                 .Select(s => new SelectListItem
                 {
                     Value = s.id.ToString(),
                     Text = s.crop_name,
                 }).ToList();
            wizardViewModel.Allcrops = getAllcrops;
            int isExits = 0;
            int state_id = Convert.ToInt32(Session["lg_state"]);
            int district_id = Convert.ToInt32(Session["lg_dist"]);
            int block_id = Convert.ToInt32(Session["lg_block"]);
            int gp_id = Convert.ToInt32(Session["lg_gram"]);
            string year = Convert.ToString(Session["lg_year"]);

            try
            {
                List<wb_area_crops_irr_water_reqVM> Listitems = new List<wb_area_crops_irr_water_reqVM>();
                if (model.itemsList.Count > 0)
                {
                    foreach (var item in model.itemsList)
                    {
                        var existingEntity = ABE.obj_wb_area_crops_irr_water_req
                                             .Where(e => e.id == item.id).SingleOrDefault();
                        if (existingEntity != null)
                        {
                            // Update the existing entity's properties
                            existingEntity.crop = item.crop;
                            existingEntity.other_crop_entry = item.crop_other;
                            existingEntity.net_irrigation_requirement = item.net_irrigation_requirement;
                            existingEntity.area_kharif_season = item.area_kharif_season;
                            existingEntity.area_rabi_season = item.area_rabi_season;
                            existingEntity.area_summer_season = item.area_summer_season;
                            existingEntity.total_gross_cropped_area = item.total_gross_cropped_area;
                            existingEntity.total_irrigation_requirement = item.total_irrigation_requirement;
                            existingEntity.total_water_req = item.total_water_req;
                            existingEntity.updated_by = Convert.ToInt32(Session["userid"]);
                            existingEntity.updated_datetime = DateTime.Now;
                            ABE.Entry(existingEntity).State = EntityState.Modified;
                        }
                        else
                        {
                            if (item.crop != "12")
                            {
                                var duplicateEntity = ABE.obj_wb_area_crops_irr_water_req
                       .Where(e => e.state_id == item.state_id &&
                                   e.district_id == item.district_id &&
                                   e.block_id == item.block_id &&
                                   e.gp_id == item.gp_id &&
                                   e.year == item.year &&
                                   e.crop == item.crop)
                       .SingleOrDefault();
                                if (duplicateEntity == null)
                                {
                                    // Add a new entity if it doesn't exist
                                    wb_area_crops_irr_water_req newEntity = new wb_area_crops_irr_water_req
                                    {
                                        state_id = item.state_id,
                                        district_id = item.district_id,
                                        block_id = item.block_id,
                                        gp_id = item.gp_id,
                                        year = item.year,
                                        crop = item.crop,
                                        other_crop_entry = item.crop_other,
                                        net_irrigation_requirement = item.net_irrigation_requirement,
                                        area_kharif_season = item.area_kharif_season,
                                        area_rabi_season = item.area_rabi_season,
                                        area_summer_season = item.area_summer_season,
                                        total_gross_cropped_area = item.total_gross_cropped_area,
                                        total_irrigation_requirement = item.total_irrigation_requirement,
                                        total_water_req = item.total_water_req,
                                        created_by = Convert.ToInt32(Session["userid"]),
                                        created_datetime = DateTime.Now
                                    };
                                    ABE.obj_wb_area_crops_irr_water_req.Add(newEntity);
                                }
                                else
                                {
                                    isExits = 1;

                                }
                            }
                            else {
                                wb_area_crops_irr_water_req newEntity = new wb_area_crops_irr_water_req
                                {
                                    state_id = item.state_id,
                                    district_id = item.district_id,
                                    block_id = item.block_id,
                                    gp_id = item.gp_id,
                                    year = item.year,
                                    crop = item.crop,
                                    other_crop_entry = item.crop_other,
                                    net_irrigation_requirement = item.net_irrigation_requirement,
                                    area_kharif_season = item.area_kharif_season,
                                    area_rabi_season = item.area_rabi_season,
                                    area_summer_season = item.area_summer_season,
                                    total_gross_cropped_area = item.total_gross_cropped_area,
                                    total_irrigation_requirement = item.total_irrigation_requirement,
                                    total_water_req = item.total_water_req,
                                    created_by = Convert.ToInt32(Session["userid"]),
                                    created_datetime = DateTime.Now
                                };
                                ABE.obj_wb_area_crops_irr_water_req.Add(newEntity);
                            }
                            }
                    }
                    ABE.SaveChanges();

                    var Allcropsdata = ABE.obj_wb_area_crops_irr_water_req.
    Where(x => x.state_id == state_id
    && x.district_id == district_id
    && x.block_id == block_id
    && x.gp_id == gp_id
    && x.year == year
).Select(s => new wb_area_crops_irr_water_reqVM
{
    crop = s.crop,
    crop_other = s.other_crop_entry,
    net_irrigation_requirement = s.net_irrigation_requirement,
    area_kharif_season = s.area_kharif_season,
    area_rabi_season = s.area_rabi_season,
    area_summer_season = s.area_summer_season,
    total_gross_cropped_area = s.total_gross_cropped_area,
    total_irrigation_requirement = s.total_irrigation_requirement,
    total_water_req = s.total_water_req,
    id = s.id
}).ToList();
                    string partialBody = "";
                    string partialFooter = "";


                    if (Allcropsdata.Any())
                    {
                        wizardViewModel.itemsList = Allcropsdata;
                        wizardViewModel.CropTotal = Allcropsdata[0].total_water_req;
                        // Render the partial view as a string
                        partialBody = this.RenderPartialViewToString("_TableRowPartialCrop", wizardViewModel);
                        partialFooter = this.RenderPartialViewToString("_TableFooterPartialCrop", wizardViewModel);

                    }

                    return Json(new
                    {
                        success = true,
                        msg = isExits,
                        data = Allcropsdata,
                        partialBody = partialBody,// include rendered partial view in the response
                        partialFooter = partialFooter
                    });
                }
                else
                {
                    return Json(new { success = false });
                }

            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.InnerException.Message.ToString() });

            }
        }

      

        public ActionResult AllApprovedExcel_WaterBudget_All(string StateName, string DistrictName, string BlockName, string GramName, string Year)
        {

            int State;
            int District;
            int Block;
            int Gram;
            State = Convert.ToInt32(StateName);
            District = Convert.ToInt32(DistrictName);
            Block = Convert.ToInt32(BlockName);
            Gram = Convert.ToInt32(GramName);
            string lg_stateName = string.Empty;
            string lg_distName = string.Empty;
            string lg_blockName = string.Empty;
            string lg_gramName = string.Empty;
            if (Session["UserId"] != null)
            {
                try
                {
                    string path = "https://ataljal.mowr.gov.in";
                    double[] AllVersion = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };

                    FileContentResult robj;
                    using (var workbookAll = new XLWorkbook())
                    {
                        foreach (var item in AllVersion)
                        {

                            if (item == 1)
                            {


                                List<wb_grampanchayat_basic_infoVM> ddetails = new List<wb_grampanchayat_basic_infoVM>();
                                ddetails = ABE.wb_basicinfoview.Select(s => new wb_grampanchayat_basic_infoVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    gp_area = s.basic_gp_area,
                                    annual_rainfall = s.annual_rainfall,
                                    human_population = s.human_population,
                                    livestock_population = s.livestock_population,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();




                                var worksheet = workbookAll.Worksheets.Add("1.GPBasicInformation");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "gp_area(ha)";
                                worksheet.Cell(currentRow, 7).Value = "annual_rainfall(mm)";
                                worksheet.Cell(currentRow, 8).Value = "human_population(Nos.)";
                                worksheet.Cell(currentRow, 9).Value = "livestock_population(Nos.)";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].gp_area;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].annual_rainfall;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].human_population;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].livestock_population;

                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";

                                }

                            }


                            if (item == 2)
                            {
                                List<wb_est_ground_water_availVM> ddetails = new List<wb_est_ground_water_availVM>();
                                ddetails = ABE.wb_estgroundwateravailview.Select(s => new wb_est_ground_water_availVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    annual_rainfall = s.annual_rainfall,
                                    est_vol_rainfall = s.est_vol_rainfall,
                                    evapo_loss = s.evapo_loss,
                                    est_water_avai_rainfall = s.est_water_avai_rainfall,
                                    est_vol_rech_gw = s.est_vol_rech_gw,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();


                                var worksheet = workbookAll.Worksheets.Add("2.Ground_Water_Availability");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Annual Rainfall(m)";
                                worksheet.Cell(currentRow, 7).Value = "Estimated Volume of Rainfall(ha m)";
                                worksheet.Cell(currentRow, 8).Value = "Evapotranspiration losses(ha m)";
                                worksheet.Cell(currentRow, 9).Value = "Estimated Water Available from Rainfall(ha m)";
                                worksheet.Cell(currentRow, 10).Value = "Estimated Volume of Recharge into Groundwater(ha m)";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].annual_rainfall;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].est_vol_rainfall;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].evapo_loss;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].est_water_avai_rainfall;
                                        worksheet.Cell(currentRow, 10).Value = ddetails[i].est_vol_rech_gw;

                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";
                                    worksheet.Cell(currentRow, 10).Value = "";

                                }


                            }

                            if (item == 3)
                            {
                                List<wb_est_avai_rainfall_supply_interventionVM> ddetails = new List<wb_est_avai_rainfall_supply_interventionVM>();
                                ddetails = ABE.wb_estavairainfallsupplyinterventionview.Select(s => new wb_est_avai_rainfall_supply_interventionVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    uti_rainfall_runoff = s.uti_rainfall_runoff,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("3.Availability_Rainfall");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Utilisable Rainfall Runoff(ha m)";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].uti_rainfall_runoff;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";

                                }


                            }


                            if (item == 4)
                            {
                                List<wb_avai_surface_water_storVM> ddetails = new List<wb_avai_surface_water_storVM>();
                                ddetails = ABE.wb_avaisurfacewaterstorview.Select(s => new wb_avai_surface_water_storVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    exist_structure = s.exist_structure,
                                    annual_filling = s.annual_filling,
                                    capacity_structure = s.capacity_structure,
                                    total_capacity_structure = s.total_capacity_structure,
                                    lossess = s.lossess,
                                    total_surface_water_uti = s.total_surface_water_uti,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                             ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("4.Surface_Water_Storage");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Number of Existing Surface(Nos.)";
                                worksheet.Cell(currentRow, 7).Value = "Annual Number of Fillings(Nos.)";
                                worksheet.Cell(currentRow, 8).Value = "Storage Capacity(ha m)";
                                worksheet.Cell(currentRow, 9).Value = "Total Storage Capacity(ha m)";
                                worksheet.Cell(currentRow, 10).Value = "Lossess(ha m)";
                                worksheet.Cell(currentRow, 11).Value = "Total Surface Water Storage Available(ha m)";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].exist_structure;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].annual_filling;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].capacity_structure;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].total_capacity_structure;
                                        worksheet.Cell(currentRow, 10).Value = ddetails[i].lossess;
                                        worksheet.Cell(currentRow, 11).Value = ddetails[i].total_surface_water_uti;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";
                                    worksheet.Cell(currentRow, 10).Value = "";
                                    worksheet.Cell(currentRow, 11).Value = "";

                                }


                            }

                            if (item == 5)
                            {
                                List<wb_art_rech_water_cons_structureVM> ddetails = new List<wb_art_rech_water_cons_structureVM>();
                                ddetails = ABE.wb_artrechwaterconsstructureview.Select(s => new wb_art_rech_water_cons_structureVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    type_of_structure = s.type_of_structure,
                                    type_of_structure_other = s.other_type_of_structure,
                                    number_of_structures = s.number_of_structures,
                                    area_of_structures = s.area_of_structures,
                                    avg_depth_structures = s.avg_depth_structures,
                                    total_storage_capacity = s.total_storage_capacity,
                                    annual_fillings = s.annual_fillings,
                                    qt_annual_rech_water = s.qt_annual_rech_water,
                                    total = s.total,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                             ).ToList();


                                var worksheet = workbookAll.Worksheets.Add("5.AR_WC_Structures");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Type of Structure";
                                worksheet.Cell(currentRow, 7).Value = "Other Type of Structure";
                                worksheet.Cell(currentRow, 8).Value = "Number of Structures(Nos.)";
                                worksheet.Cell(currentRow, 9).Value = "Area of Structures(Sq.m)";
                                worksheet.Cell(currentRow, 10).Value = "Average Depth of Structures(m)";
                                worksheet.Cell(currentRow, 11).Value = "Total Storage Capacity(ha m)";
                                worksheet.Cell(currentRow, 12).Value = "Annual Filling Count(Nos.)";
                                worksheet.Cell(currentRow, 13).Value = "Annual Recharge Water Volume(ha m)";
                                worksheet.Cell(currentRow, 14).Value = "Total";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].type_of_structure;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].type_of_structure_other;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].number_of_structures;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].area_of_structures;
                                        worksheet.Cell(currentRow, 10).Value = ddetails[i].avg_depth_structures;
                                        worksheet.Cell(currentRow, 11).Value = ddetails[i].total_storage_capacity;
                                        worksheet.Cell(currentRow, 12).Value = ddetails[i].annual_fillings;
                                        worksheet.Cell(currentRow, 13).Value = ddetails[i].qt_annual_rech_water;
                                        worksheet.Cell(currentRow, 14).Value = ddetails[i].total;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";
                                    worksheet.Cell(currentRow, 10).Value = "";
                                    worksheet.Cell(currentRow, 11).Value = "";
                                    worksheet.Cell(currentRow, 12).Value = "";
                                    worksheet.Cell(currentRow, 13).Value = "";
                                    worksheet.Cell(currentRow, 14).Value = "";

                                }


                            }

                            if (item == 6)
                            {
                                List<wb_water_avai_transported_waterVM> ddetails = new List<wb_water_avai_transported_waterVM>();
                                ddetails = ABE.wb_wateravaitransportedwaterview.Select(s => new wb_water_avai_transported_waterVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    transported_water = s.transported_water,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("6.Transported Water");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Transported Water(ha.m)";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].transported_water;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";

                                }


                            }

                            if (item == 7)
                            {
                                List<wb_water_avai_non_potableVM> ddetails = new List<wb_water_avai_non_potableVM>();
                                ddetails = ABE.wb_wateravainon_potableview.Select(s => new wb_water_avai_non_potableVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    water_non_potable_use = s.water_non_potable_use,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("7.Non_potable_Use");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Non_Potable(ha.m)";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].water_non_potable_use;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";

                                }


                            }

                            if (item == 8)
                            {
                                List<wb_tot_water_availVM> ddetails = new List<wb_tot_water_availVM>();
                                ddetails = ABE.wb_totwateravailview.Select(s => new wb_tot_water_availVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    groundwater_avail = s.groundwater_avail,
                                    surface_water_avail = s.surface_water_avail,
                                    add_ground_water = s.add_ground_water,
                                    transported_water = s.transported_water,
                                    water_non_potable_use = s.water_non_potable_use,
                                    total_water_availability = s.total_water_availability,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("8.Total_Water_Availability");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Groundwater Availability(ha.m)";
                                worksheet.Cell(currentRow, 7).Value = "Surface water Availability(ha.m)";
                                worksheet.Cell(currentRow, 8).Value = "Additional Groundwater Availability(ha.m)";
                                worksheet.Cell(currentRow, 9).Value = "Transported Water(ha.m)";
                                worksheet.Cell(currentRow, 10).Value = "Water Available_nonpotable(ha.m)";
                                worksheet.Cell(currentRow, 11).Value = "Total Water Availability(ha.m)";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].groundwater_avail;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].surface_water_avail;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].add_ground_water;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].transported_water;
                                        worksheet.Cell(currentRow, 10).Value = ddetails[i].water_non_potable_use;
                                        worksheet.Cell(currentRow, 11).Value = ddetails[i].total_water_availability;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";
                                    worksheet.Cell(currentRow, 10).Value = "";
                                    worksheet.Cell(currentRow, 11).Value = "";

                                }


                            }

                            if (item == 9)
                            {
                                List<wb_water_drink_ind_reqVM> ddetails = new List<wb_water_drink_ind_reqVM>();
                                ddetails = ABE.wb_waterdrinkindreqview.Select(s => new wb_water_drink_ind_reqVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    drink_dom_water_req = s.drink_dom_water_req,
                                    water_req_livestock_pop = s.water_req_livestock_pop,
                                    water_req_indust = s.water_req_indust,
                                    total_water_requirement = s.total_water_requirement,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("9.drinking_domestic_Industries");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Human population(ha.m)";
                                worksheet.Cell(currentRow, 7).Value = "Livestock Population(ha.m)";
                                worksheet.Cell(currentRow, 8).Value = "Industries(ha.m)";
                                worksheet.Cell(currentRow, 9).Value = "Total Water Requirement(ha.m)";


                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].drink_dom_water_req;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].water_req_livestock_pop;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].water_req_indust;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].total_water_requirement;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";

                                }


                            }


                            if (item == 10)
                            {
                                List<wb_area_crops_irr_water_reqVM> ddetails = new List<wb_area_crops_irr_water_reqVM>();
                                ddetails = ABE.wb_areacropsview.Select(s => new wb_area_crops_irr_water_reqVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    crop = s.crop,
                                    crop_other = s.other_crop_entry,
                                    net_irrigation_requirement = s.net_irrigation_requirement,
                                    area_kharif_season = s.area_kharif_season,
                                    area_rabi_season = s.area_rabi_season,
                                    area_summer_season = s.area_summer_season,
                                    total_gross_cropped_area = s.total_gross_cropped_area,
                                    total_irrigation_requirement = s.total_irrigation_requirement,
                                    total_water_req = s.total_water_req,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();


                                var worksheet = workbookAll.Worksheets.Add("10.Major_Crops_Irrigation");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Crop";
                                worksheet.Cell(currentRow, 7).Value = "Other Crop";
                                worksheet.Cell(currentRow, 8).Value = "Net Irrigation Requirement";
                                worksheet.Cell(currentRow, 9).Value = "Area in Kharif";
                                worksheet.Cell(currentRow, 10).Value = "Area in Rabi";
                                worksheet.Cell(currentRow, 11).Value = "Area in Summer";
                                worksheet.Cell(currentRow, 12).Value = "Total Gross Cropped Area";
                                worksheet.Cell(currentRow, 13).Value = "Total Irrigation Requirement";
                                worksheet.Cell(currentRow, 14).Value = "Total";

                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].crop;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].crop_other;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].net_irrigation_requirement;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].area_kharif_season;
                                        worksheet.Cell(currentRow, 10).Value = ddetails[i].area_rabi_season;
                                        worksheet.Cell(currentRow, 11).Value = ddetails[i].area_summer_season;
                                        worksheet.Cell(currentRow, 12).Value = ddetails[i].total_gross_cropped_area;
                                        worksheet.Cell(currentRow, 13).Value = ddetails[i].total_irrigation_requirement;
                                        worksheet.Cell(currentRow, 14).Value = ddetails[i].total_water_req;
                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";
                                    worksheet.Cell(currentRow, 10).Value = "";
                                    worksheet.Cell(currentRow, 11).Value = "";
                                    worksheet.Cell(currentRow, 12).Value = "";
                                    worksheet.Cell(currentRow, 13).Value = "";
                                    worksheet.Cell(currentRow, 14).Value = "";

                                }
                            }

                            if (item == 11)
                            {
                                List<wb_total_water_reqVM> ddetails = new List<wb_total_water_reqVM>();
                                ddetails = ABE.wb_totalwaterreqview.Select(s => new wb_total_water_reqVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    drink_dom_water_req = s.drink_dom_water_req,
                                    water_req_livestock_pop = s.water_req_livestock_pop,
                                    irri_water_req = s.irri_water_req,
                                    water_req_indust = s.water_req_indust,
                                    total_water_requirement = s.total_water_requirement,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                            ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("11.Total_Water_Requirement");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Drinking and Domestic Water requirement(ha.m)";
                                worksheet.Cell(currentRow, 7).Value = "Water requirement Livestock Population(ha.m)";
                                worksheet.Cell(currentRow, 8).Value = "Irrigation Water requirement(ha.m)";
                                worksheet.Cell(currentRow, 9).Value = "industries Water requirement(ha.m)";
                                worksheet.Cell(currentRow, 10).Value = "Total Water Requirement(ha.m)";


                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].drink_dom_water_req;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].water_req_livestock_pop;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].irri_water_req;
                                        worksheet.Cell(currentRow, 9).Value = ddetails[i].water_req_indust;
                                        worksheet.Cell(currentRow, 10).Value = ddetails[i].total_water_requirement;

                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";
                                    worksheet.Cell(currentRow, 9).Value = "";
                                    worksheet.Cell(currentRow, 10).Value = "";


                                }

                            }

                            if (item == 12)
                            {
                                List<wb_water_balanceVM> ddetails = new List<wb_water_balanceVM>();
                                ddetails = ABE.wb_waterbalanceview.Select(s => new wb_water_balanceVM
                                {
                                    id = s.id,
                                    state_id = s.state_id,
                                    district_id = s.district_id,
                                    block_id = s.block_id,
                                    gp_id = s.gp_id,
                                    year = s.year,
                                    total_water_availability = s.total_water_availability,
                                    total_water_requirement = s.total_water_requirement,
                                    water_balance = s.water_balance,
                                    StateName = s.statename,
                                    DistrictName = s.districtname,
                                    BlockName = s.blockname,
                                    GpName = s.gpname
                                }).Where(x => (State == 0 || x.state_id == State) &&
                            (District == 0 || x.district_id == District) &&
                            (Block == 0 || x.block_id == Block) &&
                            (Gram == 0 || x.gp_id == Gram) &&
                            x.year == Year
                             ).ToList();

                                var worksheet = workbookAll.Worksheets.Add("12.Water Balance");
                                var currentRow = 1;
                                worksheet.Cell(currentRow, 1).Value = "State";
                                worksheet.Cell(currentRow, 2).Value = "District";
                                worksheet.Cell(currentRow, 3).Value = "Block";
                                worksheet.Cell(currentRow, 4).Value = "Gram Panchayat";
                                worksheet.Cell(currentRow, 5).Value = "year";
                                worksheet.Cell(currentRow, 6).Value = "Total Water Availability(ha m)";
                                worksheet.Cell(currentRow, 7).Value = "Total Water Requirement(ha m)";
                                worksheet.Cell(currentRow, 8).Value = "Water Balance(ha m)";


                                if (ddetails.Count != 0)
                                {
                                    for (int i = 0; i < ddetails.Count; i++)
                                    {
                                        currentRow++;
                                        worksheet.Cell(currentRow, 1).Value = ddetails[i].StateName;
                                        worksheet.Cell(currentRow, 2).Value = ddetails[i].DistrictName;
                                        worksheet.Cell(currentRow, 3).Value = ddetails[i].BlockName;
                                        worksheet.Cell(currentRow, 4).Value = ddetails[i].GpName;
                                        worksheet.Cell(currentRow, 5).Value = ddetails[i].year;
                                        worksheet.Cell(currentRow, 6).Value = ddetails[i].total_water_availability;
                                        worksheet.Cell(currentRow, 7).Value = ddetails[i].total_water_requirement;
                                        worksheet.Cell(currentRow, 8).Value = ddetails[i].water_balance;

                                    }
                                }
                                else
                                {
                                    currentRow++;
                                    worksheet.Cell(currentRow, 1).Value = "";
                                    worksheet.Cell(currentRow, 2).Value = "";
                                    worksheet.Cell(currentRow, 3).Value = "";
                                    worksheet.Cell(currentRow, 4).Value = "";
                                    worksheet.Cell(currentRow, 5).Value = "No Data";
                                    worksheet.Cell(currentRow, 6).Value = "";
                                    worksheet.Cell(currentRow, 7).Value = "";
                                    worksheet.Cell(currentRow, 8).Value = "";


                                }


                            }


                        }
                        using (var stream = new MemoryStream())
                        {
                            workbookAll.SaveAs(stream);
                            var content = stream.ToArray();
                            //return File(
                            //    content,
                            //    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            //    "AllCombine.xlsx");

                            var fileName = "Approved WaterBudget.xlsx";
                            var bytesdata = File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
                            robj = bytesdata;
                        }
                    }
                    return Json(robj, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    abhy_tbl_error error_data = new abhy_tbl_error();
                    error_data.error_test = Ex.Message;
                    error_data.user_email = Ex.StackTrace;
                    //error_data.user_type = "WspExcel - " + Module_name;
                    error_data.error_count = "1";
                    error_data.date_time = DateTime.Now.ToString();
                    ABE.obj_abhy_tbl_error.Add(error_data);
                    ABE.SaveChanges();
                    return RedirectToAction("Wsp_Home", "WaterBudget_2526");
                }
            }
            else
            {
                return RedirectToAction("WSP_GWM_HOME", "WspNew");
            }
        }


        //public ActionResult Create_Excel_WaterBudget_All(int State, int District, int Block, int Gram, string Year)
        //{
        //    string lg_stateName = string.Empty;
        //    string lg_distName = string.Empty;
        //    string lg_blockName = string.Empty;
        //    string lg_gramName = string.Empty;
        //    if (Session["UserId"] != null)
        //    {
        //        try
        //        {
        //            var data = ABE.obj_abhy_ml_with_block_gp_area_info_new
        //                .SingleOrDefault(s => s.lg_state == State.ToString()
        //                                  && s.lg_dist == District.ToString()
        //                                  && s.lg_block == Block.ToString()
        //                                  && s.lg_gram == Gram.ToString());
        //            if (data != null)
        //            {
        //                lg_stateName = data.state_name;
        //                lg_distName = data.district_name;
        //                lg_blockName = data.block_name;
        //                lg_gramName = data.gram_panchayat_name;

        //            }
        //            double[] AllVersion = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };
        //            FileContentResult robj;
        //            using (var workbookAll = new XLWorkbook())
        //            {
        //                var mergedWorksheet = workbookAll.Worksheets.Add("MergedData");
        //                var currentRow = 1;
        //                foreach (var item in AllVersion)
        //                {
        //                    IEnumerable<dynamic> ddetails = null; // Use dynamic for flexibility
        //                    string source = string.Empty;

        //                    switch (item)
        //                    {
        //                        case 1:
        //                            ddetails = ABE.obj_wb_grampanchayat_basic_info
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();

        //                            source = "Table 1: Gram Panchyat Basic information";
        //                            break;
        //                        case 2:
        //                            ddetails = ABE.obj_wb_est_ground_water_avail
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table2 : Estimated Ground Water Availability";
        //                            break;
        //                        case 3:
        //                            ddetails = ABE.obj_wb_est_avai_rainfall_supply_intervention
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table3 : Estimated Availability from Rainfall for planning of supply side interventions";
        //                            break;
        //                        case 4:
        //                            ddetails = ABE.obj_wb_avai_surface_water_stor
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 4: Availability of Surface Water Storage";
        //                            break;
        //                        case 5:
        //                            ddetails = ABE.obj_wb_art_rech_water_cons_structure
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 5: Detail of Artificial Recharge & Water Conservation Structures";
        //                            break;

        //                        case 6:
        //                            ddetails = ABE.obj_wb_water_avai_transported_water
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 6: Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)";
        //                            break;

        //                        case 7:
        //                            ddetails = ABE.obj_wb_water_avai_non_potable
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 7. Water Available for non - potable use through Grey Water Management";
        //                            break;

        //                        case 8:
        //                            ddetails = ABE.obj_wb_tot_water_avail
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 8. Total Water Availability";
        //                            break;

        //                        case 9:
        //                            ddetails = ABE.obj_wb_water_drink_ind_req
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 9. Water Requirement for drinking/domestic, Industries and other commercial uses";
        //                            break;

        //                        case 10:
        //                            ddetails = (from crops in ABE.obj_wb_ref_type_of_crop_net_irr_req
        //                                        join cropRef in ABE.obj_wb_area_crops_irr_water_req
        //                                        on crops.id.ToString() equals cropRef.crop
        //                                        select new wb_area_crops_irr_water_reqVM
        //                                        {
        //                                            crop = crops.crop_name,
        //                                            crop_other = cropRef.other_crop_entry,
        //                                            state_id = cropRef.state_id,
        //                                            district_id = cropRef.district_id,
        //                                            block_id = cropRef.block_id,
        //                                            gp_id = cropRef.gp_id,
        //                                            year = cropRef.year,
        //                                            net_irrigation_requirement = cropRef.net_irrigation_requirement,
        //                                            area_kharif_season = cropRef.area_kharif_season,
        //                                            area_rabi_season = cropRef.area_rabi_season,
        //                                            area_summer_season = cropRef.area_summer_season,
        //                                            total_gross_cropped_area = cropRef.total_gross_cropped_area,
        //                                            total_irrigation_requirement = cropRef.total_irrigation_requirement,
        //                                            total_water_req = cropRef.total_water_req
        //                                        }) 
        //  .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //  .ToList();
        //                            source = "Table 10. Area under Major Crops and Irrigation Water Requirement";
        //                            break;

        //                        case 11:
        //                            ddetails = ABE.obj_wb_total_water_req
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 11. Total  Water Requirement";
        //                            break;

        //                        case 12:
        //                            ddetails = ABE.obj_wb_water_balance
        //                                .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
        //                                .ToList();
        //                            source = "Table 12. Water Balance (Ha. m)";
        //                            break;

        //                        default:
        //                            break;
        //                    }
        //                    // Add a section header for each source
        //                    //mergedWorksheet.Cell(currentRow, 1).Value = $"--- {source} ---";
        //                    //currentRow++;

        //                    var headerCell = mergedWorksheet.Cell(currentRow, 1);
        //                    headerCell.Value = $"------- {source} --------";
        //                    headerCell.Style.Font.Bold = true;
        //                    mergedWorksheet.Range(currentRow, 1, currentRow, 14).Merge().Style.Alignment.SetHorizontal(XLAlignmentHorizontalValues.Center);

        //                    currentRow++;
        //                    switch (source)
        //                    {
        //                        case "Table 1: Gram Panchyat Basic information":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "GP Area(ha)";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Annual Rainfall(mm)";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Human Population(Nos.)";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Livestock Population(Nos.)";
        //                            break;

        //                        case "Table2 : Estimated Ground Water Availability":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Annual Rainfall(m)";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Estimated Volume Rainfall(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Evaporation Loss(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Estimated Water Availability Rainfall(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 10).Value = "Estimated Volume Recharge Groundwater(ha m)";
        //                            break;

        //                        case "Table3 : Estimated Availability from Rainfall for planning of supply side interventions":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Utilized Rainfall Runoff(ha m)";
        //                            break;

        //                        case "Table 4: Availability of Surface Water Storage":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Existing Surface(Nos.)";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Annual Filling(Nos.)";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Storage Capacity(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Total Storage Capacity(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 10).Value = "Losses(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 11).Value = "Total Surface Water Available(ha m)";
        //                            break;

        //                        case "Table 5: Detail of Artificial Recharge & Water Conservation Structures":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Type of Structure";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Other Type of Structure";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Number of Structures(Nos.)";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Area of Structures(Sq.m)";
        //                            mergedWorksheet.Cell(currentRow, 10).Value = "Average Depth of Structures(m)";
        //                            mergedWorksheet.Cell(currentRow, 11).Value = "Total Storage Capacity(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 12).Value = "Annual Fillings(Nos.)";
        //                            mergedWorksheet.Cell(currentRow, 13).Value = "Volume of Annual Recharged Water(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 14).Value = "Total";
        //                            break;

        //                        case "Table 6: Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Transported Water(ha.m)";
        //                            break;

        //                        case "Table 7. Water Available for non - potable use through Grey Water Management":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Non_Potable(ha.m)";
        //                            break;

        //                        case "Table 8. Total Water Availability":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Groundwater Availability(ha.m)";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Surface water Availability(ha.m)";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Additional Groundwater Availability(ha.m)";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Transported Water(ha.m)";
        //                            mergedWorksheet.Cell(currentRow, 10).Value = "Water Available_nonpotable(ha.m)";
        //                            mergedWorksheet.Cell(currentRow, 11).Value = "Total Water Availability(ha.m)";
        //                            break;

        //                        case "Table 9. Water Requirement for drinking/domestic, Industries and other commercial uses":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Water Reuirement for Human population(ha.m)";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Water Reuirement for Livestock Population(ha m) ";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Water Reuirement for Industries(ha m) ";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Total Water Requirement(ha m) ";
        //                            break;

        //                        case "Table 10. Area under Major Crops and Irrigation Water Requirement":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Crop";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Other Crop";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Net Irrigation Requirement(in m)";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Area in Kharif(ha)";
        //                            mergedWorksheet.Cell(currentRow, 10).Value = "Area in Rabi(ha)";
        //                            mergedWorksheet.Cell(currentRow, 11).Value = "Area in Summer(ha)";
        //                            mergedWorksheet.Cell(currentRow, 12).Value = "Total Gross Cropped Area(ha)";
        //                            mergedWorksheet.Cell(currentRow, 13).Value = "Total Irrigation Requirement(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 14).Value = "Total(ha m)";
        //                            break;

        //                        case "Table 11. Total  Water Requirement":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Drinking and Domestic Water Requirement(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Livestock Population Water Requirement(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Irrigation Water Requirement(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 9).Value = "Industries Water Requirement(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 10).Value = "Total Water Requirement(ha m)";
        //                            break;

        //                        case "Table 12. Water Balance (Ha. m)":
        //                            mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
        //                            mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
        //                            mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
        //                            mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
        //                            mergedWorksheet.Cell(currentRow, 5).Value = "Year";
        //                            mergedWorksheet.Cell(currentRow, 6).Value = "Total Water Availability(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 7).Value = "Total Water Requirement(ha m)";
        //                            mergedWorksheet.Cell(currentRow, 8).Value = "Water Balance(ha m)";
        //                            break;
        //                    }
        //                    mergedWorksheet.Range(currentRow, 1, currentRow, 14).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
        //                    mergedWorksheet.Range(currentRow, 1, currentRow, 14).Style.Font.Bold = true;
        //                    // If data is found, add it to the merged worksheet
        //                    if (ddetails != null && ddetails.Any())
        //                    {

        //                        foreach (var detail in ddetails)
        //                        {
        //                            currentRow++;
        //                            mergedWorksheet.Cell(currentRow, 1).Value = lg_stateName;
        //                            mergedWorksheet.Cell(currentRow, 2).Value = lg_distName;
        //                            mergedWorksheet.Cell(currentRow, 3).Value = lg_blockName;
        //                            mergedWorksheet.Cell(currentRow, 4).Value = lg_gramName;
        //                            mergedWorksheet.Cell(currentRow, 5).Value = detail.year;

        //                            // Add specific fields based on source
        //                            switch (source)
        //                            {
        //                                case "Table 1: Gram Panchyat Basic information":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.gp_area;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.annual_rainfall;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.human_population;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.livestock_population;
        //                                    break;
        //                                case "Table2 : Estimated Ground Water Availability":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.annual_rainfall;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.est_vol_rainfall;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.evapo_loss;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.est_water_avai_rainfall;
        //                                    mergedWorksheet.Cell(currentRow, 10).Value = detail.est_vol_rech_gw;
        //                                    break;
        //                                case "Table3 : Estimated Availability from Rainfall for planning of supply side interventions":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.uti_rainfall_runoff;
        //                                    break;
        //                                case "Table 4: Availability of Surface Water Storage":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.exist_structure;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.annual_filling;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.capacity_structure;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.total_capacity_structure;
        //                                    mergedWorksheet.Cell(currentRow, 10).Value = detail.lossess;
        //                                    mergedWorksheet.Cell(currentRow, 11).Value = detail.total_surface_water_uti;
        //                                    break;
        //                                case "Table 5: Detail of Artificial Recharge & Water Conservation Structures":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.type_of_structure;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.other_type_of_structure;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.number_of_structures;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.area_of_structures;
        //                                    mergedWorksheet.Cell(currentRow, 10).Value = detail.avg_depth_structures;
        //                                    mergedWorksheet.Cell(currentRow, 11).Value = detail.total_storage_capacity;
        //                                    mergedWorksheet.Cell(currentRow, 12).Value = detail.annual_fillings;
        //                                    mergedWorksheet.Cell(currentRow, 13).Value = detail.qt_annual_rech_water;
        //                                    mergedWorksheet.Cell(currentRow, 14).Value = detail.total;
        //                                    break;

        //                                case "Table 6: Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.transported_water;
        //                                    break;

        //                                case "Table 7. Water Available for non - potable use through Grey Water Management":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.water_non_potable_use;
        //                                    break;

        //                                case "Table 8. Total Water Availability":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.groundwater_avail;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.surface_water_avail;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.add_ground_water;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.transported_water;
        //                                    mergedWorksheet.Cell(currentRow, 10).Value = detail.water_non_potable_use;
        //                                    mergedWorksheet.Cell(currentRow, 11).Value = detail.total_water_availability;
        //                                    break;

        //                                case "Table 9. Water Requirement for drinking/domestic, Industries and other commercial uses":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.drink_dom_water_req;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.water_req_livestock_pop;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.water_req_indust;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.total_water_requirement;
        //                                    break;

        //                                case "Table 10. Area under Major Crops and Irrigation Water Requirement":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.crop;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.crop_other;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.net_irrigation_requirement;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.area_kharif_season;
        //                                    mergedWorksheet.Cell(currentRow, 10).Value = detail.area_rabi_season;
        //                                    mergedWorksheet.Cell(currentRow, 11).Value = detail.area_summer_season;
        //                                    mergedWorksheet.Cell(currentRow, 12).Value = detail.total_gross_cropped_area;
        //                                    mergedWorksheet.Cell(currentRow, 13).Value = detail.total_irrigation_requirement;
        //                                    mergedWorksheet.Cell(currentRow, 14).Value = detail.total_water_req;
        //                                    break;

        //                                case "Table 11. Total  Water Requirement":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.drink_dom_water_req;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.water_req_livestock_pop;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.irri_water_req;
        //                                    mergedWorksheet.Cell(currentRow, 9).Value = detail.water_req_indust;
        //                                    mergedWorksheet.Cell(currentRow, 10).Value = detail.total_water_requirement;
        //                                    break;

        //                                case "Table 12. Water Balance (Ha. m)":
        //                                    mergedWorksheet.Cell(currentRow, 6).Value = detail.total_water_availability;
        //                                    mergedWorksheet.Cell(currentRow, 7).Value = detail.total_water_requirement;
        //                                    mergedWorksheet.Cell(currentRow, 8).Value = detail.water_balance;
        //                                    break;
        //                            }
        //                            // Center-align the values
        //                            mergedWorksheet.Range(currentRow, 1, currentRow, 14).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
        //                        }
        //                        currentRow++;
        //                    }

        //                    else
        //                    {
        //                        currentRow++;
        //                        mergedWorksheet.Cell(currentRow, 1).Value = lg_stateName;
        //                        mergedWorksheet.Cell(currentRow, 2).Value = lg_distName;
        //                        mergedWorksheet.Cell(currentRow, 3).Value = lg_blockName;
        //                        mergedWorksheet.Cell(currentRow, 4).Value = lg_gramName;
        //                        mergedWorksheet.Cell(currentRow, 5).Value = Year;
        //                        mergedWorksheet.Cell(currentRow, 6).Value = "No Data";
        //                    }

        //                    currentRow++; // Add an extra row for spacing between sections

        //                }

        //                using (var stream = new MemoryStream())
        //                {
        //                    workbookAll.SaveAs(stream);
        //                    var content = stream.ToArray();
        //                    //return File(
        //                    //    content,
        //                    //    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        //                    //    "AllCombine.xlsx");
        //                    var fileName = lg_gramName + "_2025_26_WaterBudget.xlsx";
        //                    var bytesdata = File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);

        //                    robj = bytesdata;
        //                }
        //            }
        //            return Json(robj, JsonRequestBehavior.AllowGet);
        //        }
        //        catch (Exception Ex)
        //        {
        //            // Handle error logging as before
        //            abhy_tbl_error error_data = new abhy_tbl_error
        //            {
        //                error_test = Ex.Message,
        //                user_email = Ex.StackTrace,
        //                error_count = "1",
        //                date_time = DateTime.Now.ToString()
        //            };
        //            ABE.obj_abhy_tbl_error.Add(error_data);
        //            ABE.SaveChanges();
        //            return RedirectToAction("Wsp_Home", "WaterBudget_2526");
        //        }
        //    }
        //    return RedirectToAction("Wsp_Home", "WaterBudget_2526");
        //}


        public ActionResult Create_Excel_WaterBudget_All(int State, int District, int Block, int Gram, string Year)
        {
            string lg_stateName = string.Empty;
            string lg_distName = string.Empty;
            string lg_blockName = string.Empty;
            string lg_gramName = string.Empty;
            if (Session["UserId"] != null)
            {
                try
                {
                    var data = ABE.obj_abhy_ml_with_block_gp_area_info_new
                        .SingleOrDefault(s => s.lg_state == State.ToString()
                                          && s.lg_dist == District.ToString()
                                          && s.lg_block == Block.ToString()
                                          && s.lg_gram == Gram.ToString());
                    if (data != null)
                    {
                        lg_stateName = data.state_name;
                        lg_distName = data.district_name;
                        lg_blockName = data.block_name;
                        lg_gramName = data.gram_panchayat_name;
                    }

                    double[] AllVersion = { 1, 2, 3, 4,5, 6, 7, 8, 9, 10, 11, 12 };
                    FileContentResult robj;
                    using (var workbookAll = new XLWorkbook())
                    {
                        var mergedWorksheet = workbookAll.Worksheets.Add("MergedData");
                        var currentRow = 1;

                        // Write state, district, block, and gram panchayat columns only once
                        mergedWorksheet.Cell(currentRow, 1).Value = "State Name";
                        mergedWorksheet.Cell(currentRow, 2).Value = "District Name";
                        mergedWorksheet.Cell(currentRow, 3).Value = "Block Name";
                        mergedWorksheet.Cell(currentRow, 4).Value = "Gram Panchayat Name";
                        mergedWorksheet.Cell(currentRow, 5).Value = "Year";

                        mergedWorksheet.Range(currentRow, 1, currentRow, 5).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                        mergedWorksheet.Range(currentRow, 1, currentRow, 5).Style.Font.Bold = true;

                        currentRow++; // Move to the next row
                        mergedWorksheet.Cell(currentRow, 1).Value = lg_stateName;
                        mergedWorksheet.Cell(currentRow, 2).Value = lg_distName;
                        mergedWorksheet.Cell(currentRow, 3).Value = lg_blockName;
                        mergedWorksheet.Cell(currentRow, 4).Value = lg_gramName;
                        mergedWorksheet.Cell(currentRow, 5).Value = Year;

                        mergedWorksheet.Range(currentRow, 1, currentRow, 5).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;

                        currentRow++;

                        foreach (var item in AllVersion)
                        {
                            IEnumerable<dynamic> ddetails = null;
                            string source = string.Empty;

                            switch (item)
                            {
                                case 1:
                                    ddetails = ABE.obj_wb_grampanchayat_basic_info
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 1: Gram Panchyat Basic information";
                                    break;
                                case 2:
                                    ddetails = ABE.obj_wb_est_ground_water_avail
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 2: Estimated Ground Water Availability";
                                    break;
                                case 3:
                                    ddetails = ABE.obj_wb_est_avai_rainfall_supply_intervention
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 3: Estimated Availability from Rainfall for planning of supply side interventions";
                                    break;
                                case 4:
                                    ddetails = ABE.obj_wb_avai_surface_water_stor
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 4: Availability of Surface Water Storage";
                                    break;

                                case 5:
                                    ddetails = ABE.obj_wb_art_rech_water_cons_structure
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 5: Detail of Artificial Recharge & Water Conservation Structures";
                                    break;

                                case 6:
                                    ddetails = ABE.obj_wb_water_avai_transported_water
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 6: Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)";
                                    break;

                                case 7:
                                    ddetails = ABE.obj_wb_water_avai_non_potable
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 7. Water Available for non - potable use through Grey Water Management";
                                    break;

                                case 8:
                                    ddetails = ABE.obj_wb_tot_water_avail
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 8. Total Water Availability";
                                    break;

                                case 9:
                                    ddetails = ABE.obj_wb_water_drink_ind_req
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 9. Water Requirement for drinking/domestic, Industries and other commercial uses";
                                    break;

                                case 10:
                                    ddetails = (from crops in ABE.obj_wb_ref_type_of_crop_net_irr_req
                                                join cropRef in ABE.obj_wb_area_crops_irr_water_req
                                                on crops.id.ToString() equals cropRef.crop
                                                select new wb_area_crops_irr_water_reqVM
                                                {
                                                    crop = crops.crop_name,
                                                    crop_other = cropRef.other_crop_entry,
                                                    state_id = cropRef.state_id,
                                                    district_id = cropRef.district_id,
                                                    block_id = cropRef.block_id,
                                                    gp_id = cropRef.gp_id,
                                                    year = cropRef.year,
                                                    net_irrigation_requirement = cropRef.net_irrigation_requirement,
                                                    area_kharif_season = cropRef.area_kharif_season,
                                                    area_rabi_season = cropRef.area_rabi_season,
                                                    area_summer_season = cropRef.area_summer_season,
                                                    total_gross_cropped_area = cropRef.total_gross_cropped_area,
                                                    total_irrigation_requirement = cropRef.total_irrigation_requirement,
                                                    total_water_req = cropRef.total_water_req
                                                })
          .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
          .ToList();
                                    source = "Table 10. Area under Major Crops and Irrigation Water Requirement";
                                    break;

                                case 11:
                                    ddetails = ABE.obj_wb_total_water_req
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 11. Total  Water Requirement";
                                    break;

                                case 12:
                                    ddetails = ABE.obj_wb_water_balance
                                        .Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year)
                                        .ToList();
                                    source = "Table 12. Water Balance (Ha. m)";
                                    break;

                                default:
                                    break;
                            }


                            // Add a section header for each source
                            var headerCell = mergedWorksheet.Cell(currentRow, 1);
                            headerCell.Value = $"------- {source} --------";
                            headerCell.Style.Font.Bold = true;
                            mergedWorksheet.Range(currentRow, 1, currentRow, 9).Merge().Style.Alignment.SetHorizontal(XLAlignmentHorizontalValues.Center);

                            currentRow++;
                            // Add table-specific column headers, without repeating state, district, block, and gram panchayat
                            switch (source)
                            {
                                case "Table 1: Gram Panchyat Basic information":
                                    mergedWorksheet.Cell(currentRow, 1).Value = "GP Area(ha)";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Annual Rainfall(mm)";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Human Population(Nos.)";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Livestock Population(Nos.)";
                                    break;

                                case "Table 2: Estimated Ground Water Availability":
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Annual Rainfall(m)";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Estimated Volume of Rainfall (ha m)";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Evapotranspiration losses (ha.m)";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Estimated Water Available from Rainfall (ha m)";
                                    mergedWorksheet.Cell(currentRow, 5).Value = "Estimated Volume of Recharge into Groundwater (ha m)";
                                    break;

                                case "Table 3: Estimated Availability from Rainfall for planning of supply side interventions":
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Utilisable Rainfall Runoff(ha m)";
                                    break;

                                case "Table 4: Availability of Surface Water Storage":
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Number of Existing Surface Water Bodies/Structures (Nos.)";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Annual Number of Fillings (at least 2 fillings)(Nos.)";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Storage Capacity of the Structures (ha m)";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Total Storage Capacity of the Structures (ha m)";
                                    mergedWorksheet.Cell(currentRow, 5).Value = "Losses(40%)(ha m)";
                                    mergedWorksheet.Cell(currentRow, 6).Value = "Total Surface Water Storage Available for Utilisation(ha m)";
                                    break;

                                case "Table 5: Detail of Artificial Recharge & Water Conservation Structures":                                    
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Type of Structure";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Other Type of Structure";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Number of Structures(Nos.)";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Area of Structures(Sq.m)";
                                    mergedWorksheet.Cell(currentRow, 5).Value = "Average Depth of Structures(m)";
                                    mergedWorksheet.Cell(currentRow, 6).Value = "Total Storage Capacity(ha m)";
                                    mergedWorksheet.Cell(currentRow, 7).Value = "Annual Fillings(Nos.)";
                                    mergedWorksheet.Cell(currentRow, 8).Value = "Volume of Annual Recharged Water(ha m)";
                                    //mergedWorksheet.Cell(currentRow, 9).Value = "Total";
                                    break;

                                case "Table 6: Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)":                                   
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)(ha.m)";
                                    break;

                                case "Table 7. Water Available for non - potable use through Grey Water Management":                                  
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Water Available for non - potable use through Grey Water Management (ha.m)";
                                    break;

                                case "Table 8. Total Water Availability":                                  
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Groundwater Availability(ha.m)";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Surface water Availability(ha.m)";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Additional Ground water availability due to AR & WC Structure(ha.m)";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Transported Water (canal/Rivulet/Nala/Spring/Natural Sources)(ha.m)";
                                    mergedWorksheet.Cell(currentRow, 5).Value = "Water Available for non - potable use through Grey Water Management(ha.m)";
                                    mergedWorksheet.Cell(currentRow, 6).Value = "Total Water Availability(ha.m)";
                                    break;

                                case "Table 9. Water Requirement for drinking/domestic, Industries and other commercial uses":                                  
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Drinking and Domestic Water Requirement for Human population of GP(ha.m)";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Water Requirement for Livestock Population (20 LPCD approx.)(ha m) ";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Water requirement for industries and other commercial uses, if any(ha m) ";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Total Water Requirement(ha m) ";
                                    break;

                                case "Table 10. Area under Major Crops and Irrigation Water Requirement":                                    
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Crop";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Other Crop";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Net Irrigation Requirement(in m)";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Area in Kharif(ha)";
                                    mergedWorksheet.Cell(currentRow, 5).Value = "Area in Rabi(ha)";
                                    mergedWorksheet.Cell(currentRow, 6).Value = "Area in Summer(ha)";
                                    mergedWorksheet.Cell(currentRow, 7).Value = "Total Gross Cropped Area(ha)";
                                    mergedWorksheet.Cell(currentRow, 8).Value = "Total Irrigation Requirement(ha m)";
                                    mergedWorksheet.Cell(currentRow, 9).Value = "Total(ha m)";
                                    break;

                                case "Table 11. Total  Water Requirement":                                    
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Drinking and Domestic Water Requirement(ha m)";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Livestock Population Water Requirement(ha m)";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Irrigation Water Requirement(ha m)";
                                    mergedWorksheet.Cell(currentRow, 4).Value = "Industries Water Requirement(ha m)";
                                    mergedWorksheet.Cell(currentRow, 5).Value = "Total Water Requirement(ha m)";
                                    break;

                                case "Table 12. Water Balance (Ha. m)":                                   
                                    mergedWorksheet.Cell(currentRow, 1).Value = "Total Water Availability(ha m)";
                                    mergedWorksheet.Cell(currentRow, 2).Value = "Total Water Requirement(ha m)";
                                    mergedWorksheet.Cell(currentRow, 3).Value = "Water Balance(ha m)";
                                    break;
                            }

                            mergedWorksheet.Range(currentRow, 1, currentRow, 9).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                            mergedWorksheet.Range(currentRow, 1, currentRow, 9).Style.Font.Bold = true;

                            // If data is found, add it to the merged worksheet
                            if (ddetails != null && ddetails.Any())
                            {
                                double totalQtAnnualRechWater = 0;
                                double cal_total_water_req = 0;
                                foreach (var detail in ddetails)
                                {
                                   
                                    currentRow++;
                                    switch (source)
                                    {
                                        case "Table 1: Gram Panchyat Basic information":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.gp_area;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.annual_rainfall;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.human_population;
                                            mergedWorksheet.Cell(currentRow, 4).Value = detail.livestock_population;
                                            break;
                                        case "Table 2: Estimated Ground Water Availability":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.annual_rainfall;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.est_vol_rainfall;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.evapo_loss;
                                            mergedWorksheet.Cell(currentRow, 4).Value = detail.est_water_avai_rainfall;
                                            mergedWorksheet.Cell(currentRow, 5).Value = detail.est_vol_rech_gw;
                                            break;
                                        case "Table 3: Estimated Availability from Rainfall for planning of supply side interventions":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.uti_rainfall_runoff;
                                            break;
                                        case "Table 4: Availability of Surface Water Storage":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.exist_structure;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.annual_filling;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.capacity_structure;
                                            mergedWorksheet.Cell(currentRow, 4).Value = detail.total_capacity_structure;
                                            mergedWorksheet.Cell(currentRow, 5).Value = detail.lossess;
                                            mergedWorksheet.Cell(currentRow, 6).Value = detail.total_surface_water_uti;
                                            break;

                                        case "Table 5: Detail of Artificial Recharge & Water Conservation Structures":
                                                mergedWorksheet.Cell(currentRow, 1).Value = detail.type_of_structure;
                                                mergedWorksheet.Cell(currentRow, 2).Value = detail.other_type_of_structure;
                                                mergedWorksheet.Cell(currentRow, 3).Value = detail.number_of_structures;
                                                mergedWorksheet.Cell(currentRow, 4).Value = detail.area_of_structures;
                                                mergedWorksheet.Cell(currentRow, 5).Value = detail.avg_depth_structures;
                                                mergedWorksheet.Cell(currentRow, 6).Value = detail.total_storage_capacity;
                                                mergedWorksheet.Cell(currentRow, 7).Value = detail.annual_fillings;
                                                mergedWorksheet.Cell(currentRow, 8).Value = detail.qt_annual_rech_water;
                                            //mergedWorksheet.Cell(currentRow, 9).Value = detail.total;

                                            totalQtAnnualRechWater = detail.total; 
                                            break;
                                         
                                        case "Table 6: Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.transported_water;
                                            break;

                                        case "Table 7. Water Available for non - potable use through Grey Water Management":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.water_non_potable_use;
                                            break;

                                        case "Table 8. Total Water Availability":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.groundwater_avail;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.surface_water_avail;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.add_ground_water;
                                            mergedWorksheet.Cell(currentRow, 4).Value = detail.transported_water;
                                            mergedWorksheet.Cell(currentRow, 5).Value = detail.water_non_potable_use;
                                            mergedWorksheet.Cell(currentRow, 6).Value = detail.total_water_availability;
                                            break;

                                        case "Table 9. Water Requirement for drinking/domestic, Industries and other commercial uses":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.drink_dom_water_req;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.water_req_livestock_pop;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.water_req_indust;
                                            mergedWorksheet.Cell(currentRow, 4).Value = detail.total_water_requirement;
                                            break;

                                        case "Table 10. Area under Major Crops and Irrigation Water Requirement":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.crop;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.crop_other;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.net_irrigation_requirement;
                                            mergedWorksheet.Cell(currentRow, 4).Value = detail.area_kharif_season;
                                            mergedWorksheet.Cell(currentRow, 5).Value = detail.area_rabi_season;
                                            mergedWorksheet.Cell(currentRow, 6).Value = detail.area_summer_season;
                                            mergedWorksheet.Cell(currentRow, 7).Value = detail.total_gross_cropped_area;
                                            mergedWorksheet.Cell(currentRow, 8).Value = detail.total_irrigation_requirement;
                                            cal_total_water_req = detail.total_water_req;
                                            break;

                                        case "Table 11. Total  Water Requirement":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.drink_dom_water_req;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.water_req_livestock_pop;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.irri_water_req;
                                            mergedWorksheet.Cell(currentRow, 4).Value = detail.water_req_indust;
                                            mergedWorksheet.Cell(currentRow, 5).Value = detail.total_water_requirement;
                                            break;

                                        case "Table 12. Water Balance (Ha. m)":
                                            mergedWorksheet.Cell(currentRow, 1).Value = detail.total_water_availability;
                                            mergedWorksheet.Cell(currentRow, 2).Value = detail.total_water_requirement;
                                            mergedWorksheet.Cell(currentRow, 3).Value = detail.water_balance;
                                            break;
                                    }
                                    mergedWorksheet.Range(currentRow, 1, currentRow, 9).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                                }
                                if (source == "Table 5: Detail of Artificial Recharge & Water Conservation Structures")
                                {
                                    currentRow++;
                                    mergedWorksheet.Cell(currentRow, 7).Value = "Total";
                                    mergedWorksheet.Cell(currentRow, 8).Value = totalQtAnnualRechWater; // Add the calculated total with 4 decimal places
                                    mergedWorksheet.Range(currentRow, 7, currentRow, 8).Style.Font.Bold = true;
                                }
                                if (source == "Table 10. Area under Major Crops and Irrigation Water Requirement")
                                {
                                    currentRow++;
                                    mergedWorksheet.Cell(currentRow, 7).Value = "Total";
                                    mergedWorksheet.Cell(currentRow, 8).Value = cal_total_water_req; // Add the calculated total with 4 decimal places
                                    mergedWorksheet.Range(currentRow, 7, currentRow, 8).Style.Font.Bold = true;
                                }
                                currentRow++;
                            }
                            else
                            {
                                currentRow++;
                                mergedWorksheet.Cell(currentRow, 1).Value = "No Data Available";
                            }

                            currentRow++; // Add an extra row for spacing between sections
                        }

                        using (var stream = new MemoryStream())
                        {
                            workbookAll.SaveAs(stream);
                            var content = stream.ToArray();
                            //return File(
                            //    content,
                            //    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            //    "AllCombine.xlsx");
                            var fileName = lg_gramName + "_2025_26_WaterBudget.xlsx";
                            var bytesdata = File(stream.ToArray(), "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);

                            robj = bytesdata;
                        }
                    }
                    return Json(robj, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return RedirectToAction("Logout", "Login");
        }


        public ActionResult ApprovedWaterBudgetReport()
        {
            return View();
        }
        public ActionResult approved_pdf()
        {
            return View();
        }
        public ActionResult approved_excel()
        {
            return View();
        }

        public ActionResult GetApprovedGpCount(string lg_state, string lg_dist, string lg_block, string lg_gram, string Year)
        {

            int State = Convert.ToInt32(lg_state);
            int District = Convert.ToInt32(lg_dist);
            int Block = Convert.ToInt32(lg_block);
            int Gram = Convert.ToInt32(lg_gram);
            var data = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.lg_state == lg_state
            && s.lg_dist == lg_dist
            && s.lg_block == lg_block
            && s.lg_gram == lg_gram
            ).SingleOrDefault();

            int count = 0;
            Year = "2025-26";

            if (lg_state != "0" && lg_state != null && lg_dist != "0" && lg_dist != null && lg_block != "0" && lg_block != null && lg_gram != "0" && lg_gram != null)
            {
                count = ABE.obj_wb_reject_status.Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.gp_id == Gram && x.year == Year && x.status_id == 5).ToList().Count();
            }
            else if (lg_state != "0" && lg_state != null && lg_dist != "0" && lg_dist != null && lg_block != "0" && lg_block != null)
            {
                count = ABE.obj_wb_reject_status.Where(x => x.state_id == State && x.district_id == District && x.block_id == Block && x.year == Year && x.status_id == 5).ToList().Count();
            }
            else if (lg_state != "0" && lg_state != null && lg_dist != "0" && lg_dist != null)
            {
                count = ABE.obj_wb_reject_status.Where(x => x.state_id == State && x.district_id == District && x.year == Year && x.status_id == 5).ToList().Count();
            }
            else if (lg_state != "0" && lg_state != null)
            {
                count = ABE.obj_wb_reject_status.Where(x => x.state_id == State && x.year == Year && x.status_id == 5).ToList().Count();
            }
            else
            {
                count = ABE.obj_wb_reject_status.Where(x => x.year == Year && x.status_id == 5).ToList().Count();
            }

            return Json(count);
        }
        public ActionResult DownloadZipFile(int Id)
        {
            abhy_ml_with_block_gp_area_info_newVM abhy_Ml_With_Block_Gp_Area_Info_NewVM = new abhy_ml_with_block_gp_area_info_newVM();
            try
            {

                List<string> obj = new List<string>();
                var Data = ABE.obj_wb_reject_status.Where(x => x.id == Id).SingleOrDefault();

                if (Data != null)
                {
                    abhy_Ml_With_Block_Gp_Area_Info_NewVM = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.lg_state == Data.state_id.ToString()
                   && s.lg_dist == Data.district_id.ToString()
                    && s.lg_block == Data.block_id.ToString()
                   && s.lg_gram == Data.gp_id.ToString()
                   ).Select(x => new abhy_ml_with_block_gp_area_info_newVM
                   {
                       gram_panchayat_name = x.gram_panchayat_name,
                       district_name = x.district_name,
                       state_name = x.state_name,
                       block_name = x.block_name
                   }).SingleOrDefault();

                    Log($"FileName Wsp_Pdf Year 24-25: {Data}");
                    obj.Add(Data.waterbudget_path);
                }
                // Create a memory stream to store the zip file
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    // Create a zip archive
                    using (ZipArchive archive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
                    {
                        // Add each PDF file to the zip archive
                        foreach (string pdfFilePath in obj)
                        {
                            string fileName = System.IO.Path.GetFileName(pdfFilePath);
                            string _filepath = string.Empty;
                            _filepath = Server.MapPath(pdfFilePath);
                            AddFileToZip(archive, _filepath, fileName);

                        }
                    }

                    // Set the position to the beginning of the stream
                    memoryStream.Position = 0;

                    // Set the response headers
                    Response.Clear();
                    Response.AddHeader("Content-Disposition", "attachment; filename=" + abhy_Ml_With_Block_Gp_Area_Info_NewVM.gram_panchayat_name + "_" + Data.year + "_WaterBudget.zip");
                    Response.ContentType = "application/zip";

                    // Copy the zip file to the response stream
                    memoryStream.CopyTo(Response.OutputStream);
                    Response.Flush();
                    Response.End();
                }

            }
            catch (Exception ex)
            {
                Log($"ex Message 24-25: {ex.Message.ToString()}"); ;
            }
            return View();
        }
        private void Log(string message)
        {
            string logFilePath = Server.MapPath("~/logWaterbudget24_25.txt");
            using (StreamWriter writer = new StreamWriter(logFilePath, true))
            {
                writer.WriteLine($"{DateTime.Now}: {message}");
            }
        }
        private void AddFileToZip(ZipArchive archive, string filePath, string entryName)
        {
            try
            {
                // Create a new entry in the zip archive
                ZipArchiveEntry entry = archive.CreateEntry(entryName);

                // Open the file to be added to the archive
                using (FileStream fileStream = new FileStream(filePath, FileMode.Open))
                {
                    // Copy the file content to the zip entry
                    using (Stream entryStream = entry.Open())
                    {
                        fileStream.CopyTo(entryStream);
                    }
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        public ActionResult GetApprovedGpCountAllPdf(int lg_state, int lg_dist, int lg_block, int lg_gram, string Year)
        {

            List<wb_reject_statusVM> wb_Reject_StatusVMs = new List<wb_reject_statusVM>();
            var data = ABE.WbRejectStatusView
                .Where(x => (lg_state == 0 || x.state_id == lg_state) &&
                            (lg_dist == 0 || x.district_id == lg_dist) &&
                            (lg_block == 0 || x.block_id == lg_block) &&
                            (lg_gram == 0 || x.gp_id == lg_gram) &&
                            x.year == Year &&
                            x.status_id == 5)
                .ToList();
            return Json(data);
        }

        private string getuniqueId(string File)
        {
            string extension = System.IO.Path.GetExtension(File);
            string fileNameWithoutExtension = System.IO.Path.GetFileNameWithoutExtension(File);
            string output = Regex.Replace(fileNameWithoutExtension, @"[^a-zA-Z0-9]", string.Empty); // Replaces special characters with an underscore
            string uniqueId = DateTime.Now.ToString("ddMMyyyyHHmmss") + DateTime.Now.Ticks.ToString().Substring(DateTime.Now.Ticks.ToString().Length - 4);
            string newFileName = $"{output}_{uniqueId}{extension}";
            return newFileName;
        }

        [HttpPost]
        public ActionResult SaveFinalReportOnServer(HttpPostedFileBase pdf)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    string response = "";


                    int state_id = Convert.ToInt32(Session["lg_state"]);
                    int district_id = Convert.ToInt32(Session["lg_dist"]);
                    int block_id = Convert.ToInt32(Session["lg_block"]);
                    int gp_id = Convert.ToInt32(Session["lg_gram"]);
                    string year = Convert.ToString(Session["lg_year"]);

                    string lg_stateName = string.Empty;
                    string lg_distName = string.Empty;
                    string lg_blockName = string.Empty;
                    string lg_gramName = string.Empty;

                    var data = ABE.obj_abhy_ml_with_block_gp_area_info_new.Where(s => s.lg_state == state_id.ToString()
                   && s.lg_dist == district_id.ToString()
                    && s.lg_block == block_id.ToString()
                   && s.lg_gram == gp_id.ToString()
                   ).SingleOrDefault();

                    if (data != null)
                    {
                        lg_stateName = data.state_name;
                        lg_distName = data.district_name;
                        lg_blockName = data.block_name;
                        lg_gramName = data.gram_panchayat_name;

                    }

                    wb_reject_status obj = new wb_reject_status();
                    var ApproveData = ABE.obj_wb_reject_status.Where(x => x.state_id == state_id && x.district_id == district_id && x.block_id == block_id && x.gp_id == gp_id && x.year == year).FirstOrDefault();
                    //var Data = ABE.obj_abhy_mis_wsp_approved_24_update.Where(x => x.state == State && x.dist == Dist && x.block == Block && x.gp == Gram).FirstOrDefault();
                    if (ApproveData != null)
                    {
                        if (pdf.FileName != null)
                        {
                            string FileName = lg_gramName + "_" + year + "_" + getuniqueId(pdf.FileName);
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WaterBudget\\" + lg_stateName + "\\" + lg_distName + "\\" + lg_blockName + "\\" + year + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + FileName;

                            string[] count = pdf.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload valid file";
                            }
                            else
                            {
                                pdf.SaveAs(path);
                                string File_path = "/Ataljalimages/WaterBudget/" + lg_stateName + "/" + lg_distName + "/" + lg_blockName + "/" + year + "/" + FileName;
                                //Data.state_name = State;
                                //Data.district_name = Dist;
                                //Data.block_name = Block;
                                //Data.gpname = Gram;
                                ApproveData.waterbudget_file = FileName;
                                ApproveData.waterbudget_path = File_path;
                                ApproveData.approver_id = Convert.ToString(Session["userid"]);
                                ApproveData.waterbudget_date = DateTime.Now;
                                ApproveData.status_id = 5;
                                ABE.Entry(ApproveData).State = EntityState.Modified;
                                ABE.SaveChanges();
                                response = "Water Budget Final Report Upload Successfully";
                            }
                            return Json(response);
                        }
                        return Json("File not found!");
                    }
                    else
                    {
                        if (pdf.FileName != null)
                        {
                            string FileName = lg_gramName + "_" + year + "_" + getuniqueId(pdf.FileName);
                            string BasePath = AppDomain.CurrentDomain.BaseDirectory; //ConfigurationManager.AppSettings["path"];
                            string path = System.IO.Path.Combine(BasePath, "Ataljalimages\\WaterBudget\\" + lg_stateName + "\\" + lg_distName + "\\" + lg_blockName + "\\" + year + "\\");
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            path = path + FileName;

                            string[] count = pdf.FileName.Split('.');
                            if (count.Length != 2)
                            {
                                response = "Your Upload file has Double Extention, Please Upload valid file";
                            }

                            return Json(response);
                        }
                        return Json("File not found!");
                    }
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
        }



    }
}