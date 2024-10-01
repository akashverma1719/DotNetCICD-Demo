using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Models
{



    public class abhy_ml_with_block_gp_area_info_newVM
    {
        public int id { get; set; }
        public string state_name { get; set; }
        public int lg_state { get; set; }
        public string district_name { get; set; }
        public int lg_dist { get; set; }
        public string block_name { get; set; }
        public int lg_block { get; set; }
        public string gram_panchayat_name { get; set; }
        public int lg_gram { get; set; }
        public string block_area { get; set; }
        public string gp_area { get; set; }
        public string village_name { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

    }

    public class wb_grampanchayat_basic_infoVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }

        [Required(ErrorMessage = "Please enter GP area (ha).")]
        public double gp_area { get; set; }

        [Required(ErrorMessage = "Please Enter  Annual Rainfall (mm).")]
        public double annual_rainfall { get; set; }

        [Required(ErrorMessage = "Please Enter Human population(Nos.)")]
        public double human_population { get; set; }

        [Required(ErrorMessage = "Please Enter Livestock Population(Nos.)")]
        public double livestock_population { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }



    }

    public class wb_est_ground_water_availVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }       
        public double annual_rainfall { get; set; }
        public double est_vol_rainfall { get; set; }
        public double evapo_loss { get; set; }
        public double est_water_avai_rainfall { get; set; }
        public double est_vol_rech_gw { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }

    }

    public class wb_est_avai_rainfall_supply_interventionVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double uti_rainfall_runoff { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }
    }

    public class wb_avai_surface_water_storVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }

        [Required(ErrorMessage = "Please Enter Bodies/Structures (Nos.),Otherwise fill it '0'")]
        public double exist_structure { get; set; }

        [Required(ErrorMessage = "Please Enter Annual Number of Filling (Nos.),Otherwise fill it '0'")]
        public double annual_filling { get; set; }

        [Required(ErrorMessage = "Please Enter Storage Capacity of the Structures (ha m),Otherwise fill it '0'")]
        public double capacity_structure { get; set; }
        public double total_capacity_structure { get; set; }
        public double lossess { get; set; }
        public double total_surface_water_uti { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }
    }

    public class wb_art_rech_water_cons_structureVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }

        [Required(ErrorMessage = "Please Select Type of Structure,Otherwise fill it '0'")]
        public string type_of_structure { get; set; }
        public string type_of_structure_other { get; set; }

        [Required(ErrorMessage = "Please Enter Number of Structures (Nos.),Otherwise fill it '0'")]
        public int number_of_structures { get; set; }

        [Required(ErrorMessage = "Please Enter Area of the Structures (Sq.m),Otherwise fill it '0'")]
        public double area_of_structures { get; set; }

        [Required(ErrorMessage = "Please Enter Average Depth of Structures (m),Otherwise fill it '0'")]
        public double avg_depth_structures { get; set; }
        public double total_storage_capacity { get; set; }

        [Required(ErrorMessage = "Please Enter Annual No. of Fillings (Nos.),Otherwise fill it '0'")]
        public double annual_fillings { get; set; }
        public double qt_annual_rech_water { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int ? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }
        public double total { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }
    }

    public class wb_water_avai_transported_waterVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }

        [Required(ErrorMessage = "Please Enter Transported Water (ha.m),Otherwise fill it '0'")]
        public double transported_water { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }
    }

    public class wb_water_avai_non_potableVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }

        [Required(ErrorMessage = "Please Enter Water Available (ha.m),Otherwise fill it '0'")]
        public double water_non_potable_use { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }
    }

    public class wb_tot_water_availVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double groundwater_avail { get; set; }
        public double surface_water_avail { get; set; }
        public double add_ground_water { get; set; }
        public double transported_water { get; set; }
        public double water_non_potable_use { get; set; }
        public double total_water_availability { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }

    }

    public class wb_water_drink_ind_reqVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double drink_dom_water_req { get; set; }
        public double water_req_livestock_pop { get; set; }

        [Required(ErrorMessage = "Please Enter Water requirement, Otherwise fill it '0'")]
        public double ? water_req_indust { get; set; }
        public double total_water_requirement { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }

    }

    public class wb_area_crops_irr_water_reqVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public string crop { get; set; }
        public string crop_other { get; set; }
        public double net_irrigation_requirement { get; set; }
        public double area_kharif_season { get; set; }
        public double area_rabi_season { get; set; }
        public double area_summer_season { get; set; }
        public double total_gross_cropped_area { get; set; }
        public double total_irrigation_requirement { get; set; }
        public double total_water_req { get; set; }

        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }

    }

    public class wb_total_water_reqVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double drink_dom_water_req { get; set; }
        public double water_req_livestock_pop { get; set; }
        public double irri_water_req { get; set; }
        public double water_req_indust { get; set; }
        public double total_water_requirement { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }
    }

    public class wb_water_balanceVM
    {
        public int stepindex { get; set; }
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double total_water_availability { get; set; }
        public double total_water_requirement { get; set; }
        public double water_balance { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GpName { get; set; }

    }

    public class wb_ref_type_of_structureVM
    {
        public int id { get; set; }
        public string name_of_structure { get; set; }

    }

  
    public class wb_ref_type_of_crop_net_irr_reqVM
    {
        public int id { get; set; }
        public string crop_name { get; set; }
        public double net_irrigation_requirement { get; set; }

    }

    
    public class wb_reject_statusVM
    {
       
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public int status_id { get; set; }
        public string remarks { get; set; }
        public string email_id { get; set; }
        public string waterbudget_file { get; set; }
        public string waterbudget_path { get; set; }
        public string approver_id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public DateTime? waterbudget_date { get; set; }
    }


    public class Param {
        public int stepIndex { get; set; }
        public string stepTitle { get; set; }

        public string state_id { get; set; }
        public string district_id { get; set; }
        public string block_id { get; set; }
        public string gp_id { get; set; }
        public string Year { get; set; }
        public string remarks { get; set; }


    
    }
    public class WizardViewModel
    {
        public WizardViewModel()
        {

                items = new List<wb_art_rech_water_cons_structureVM>();
                itemsList = new List<wb_area_crops_irr_water_reqVM>();
                Values = new List<SelectListItem>
                {
                new SelectListItem { Value = "Percolation tank", Text = "Percolation tank" },
                new SelectListItem { Value = "Check dam", Text = "Check dam" },
                new SelectListItem { Value = "Farm pond", Text = "Farm pond" },
                 new SelectListItem { Value = "Other", Text = "Other" }
                };

        }


        public string state_id { get; set; }
        public string district_id { get; set; }
        public string block_id { get; set; }
        public string gp_id { get; set; }
       public string year { get; set; }
        public double structureTotal { get; set; }

        public double CropTotal { get; set; }


        // [Required]
        //public string StepOneData { get; set; }
        //[Required]
        //public string StepTwoData { get; set; }
        //public string StepThreeData { get; set; }
        public abhy_ml_with_block_gp_area_info_newVM Master_state_district_block_gp { get; set; }
        //Step1
        public wb_grampanchayat_basic_infoVM wb_grampanchayat_basic_info { get; set; }
        //Step2
        public wb_est_ground_water_availVM wb_est_ground_water_avail { get; set; }
        //Step3
        public wb_est_avai_rainfall_supply_interventionVM wb_est_avai_rainfall_supply_intervention { get; set; }
        //Step4
        public wb_avai_surface_water_storVM wb_avai_surface_water_stor { get; set; }
        //Step5
        public wb_art_rech_water_cons_structureVM wb_art_rech_water_cons_structure { get; set; }
        //Step6
        public wb_water_avai_transported_waterVM wb_water_avai_transported_water { get; set; }
        //Step7
        public wb_water_avai_non_potableVM wb_water_avai_non_potable { get; set; }
        //Step8
        public wb_tot_water_availVM wb_tot_water_avail { get; set; }
        //Step9
        public wb_water_drink_ind_reqVM wb_water_drink_ind_req { get; set; }
        //Step10
        public wb_area_crops_irr_water_reqVM wb_area_crops_irr_water_req { get; set; }
        //Step11
        public wb_total_water_reqVM wb_total_water_req { get; set; }
        //Step12
        public wb_water_balanceVM wb_water_balance { get; set; }


        public wb_ref_type_of_structureVM wb_ref_type_of_structure { get; set; }
        public wb_ref_type_of_crop_net_irr_reqVM wb_ref_type_of_crop_net_irr_req { get; set; }
        public wb_reject_statusVM wb_reject_status { get; set; }
        public List<wb_art_rech_water_cons_structureVM> items { get; set; }
        public List<wb_area_crops_irr_water_reqVM> itemsList { get; set; }

        public List<SelectListItem> Values { get; set; }
        public List<SelectListItem> Allcrops { get; set; }


    }
    public class Item
    {
        public int Id { get; set; }
       // [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        //[Required(ErrorMessage = "Name is required")]
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}