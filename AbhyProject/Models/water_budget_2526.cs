using DocumentFormat.OpenXml.CustomXmlSchemaReferences;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class water_budget_2526
    {
    }
    
    [Table("abhy_ml_with_block_gp_area_info_new", Schema = "public")]
    public class abhy_ml_with_block_gp_area_info_new
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string   lg_state { get; set; }
        public string district_name { get; set; }
        public string lg_dist { get; set; }
        public string block_name { get; set; }
        public string lg_block { get; set; }
        public string gram_panchayat_name { get; set; }
        public string lg_gram { get; set; }
        public string block_area { get; set; }
        public string gp_area { get; set; }
        public string village_name { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

    }

    [Table("wb_grampanchayat_basic_info", Schema = "public")]
    public class wb_grampanchayat_basic_info
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double gp_area { get; set; }
        public double annual_rainfall { get; set; }
        public double human_population { get; set; }
        public double livestock_population { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int ? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_est_ground_water_avail", Schema = "public")]
    public class wb_est_ground_water_avail
    {
        [Key]
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
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int ? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_est_avai_rainfall_supply_intervention", Schema = "public")]
    public class wb_est_avai_rainfall_supply_intervention
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double uti_rainfall_runoff { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int ? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_avai_surface_water_stor", Schema = "public")]
    public class wb_avai_surface_water_stor
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double exist_structure { get; set; }
        public double annual_filling { get; set; }
        public double capacity_structure { get; set; }
        public double total_capacity_structure { get; set; }
        public double lossess { get; set; }
        public double total_surface_water_uti { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_art_rech_water_cons_structure", Schema = "public")]
    public class wb_art_rech_water_cons_structure
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public string type_of_structure { get; set; }
        public string other_type_of_structure { get; set; }
        public int number_of_structures { get; set; }
        public double area_of_structures { get; set; }
        public double avg_depth_structures { get; set; }
        public double total { get; set; }

        public double total_storage_capacity { get; set; }
        public double annual_fillings { get; set; }
        public double qt_annual_rech_water { get; set; }
        public string created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public string updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_water_avai_transported_water", Schema = "public")]
    public class wb_water_avai_transported_water
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double transported_water { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_water_avai_non_potable", Schema = "public")]
    public class wb_water_avai_non_potable
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double water_non_potable_use { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_tot_water_avail", Schema = "public")]
    public class wb_tot_water_avail
    {
        [Key]
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
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_water_drink_ind_req", Schema = "public")]
    public class wb_water_drink_ind_req
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double drink_dom_water_req { get; set; }
        public double water_req_livestock_pop { get; set; }
        public double ? water_req_indust { get; set; }
        public double total_water_requirement { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_area_crops_irr_water_req", Schema = "public")]
    public class wb_area_crops_irr_water_req
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public string crop { get; set; }
        public string other_crop_entry { get; set; }
        public double net_irrigation_requirement { get; set; }
        public double area_kharif_season { get; set; }
        public double area_rabi_season { get; set; }
        public double area_summer_season { get; set; }
        public double total_gross_cropped_area { get; set; }
        public double total_irrigation_requirement { get; set; }
        public double total_water_req { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_total_water_req", Schema = "public")]
    public class wb_total_water_req
    {
        [Key]
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
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_water_balance", Schema = "public")]
    public class wb_water_balance
    {
        [Key]
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double total_water_availability { get; set; }
        public double total_water_requirement { get; set; }
        public double water_balance { get; set; }
        public int created_by { get; set; }
        public DateTime created_datetime { get; set; }
        public int? updated_by { get; set; }
        public DateTime updated_datetime { get; set; }

    }

    [Table("wb_ref_type_of_structure", Schema = "public")]
    public class wb_ref_type_of_structure
    {
        [Key]
        public int id { get; set; }
        public string name_of_structure { get; set; }

    }

    [Table("wb_ref_type_of_crop_net_irr_req", Schema = "public")]
    public class wb_ref_type_of_crop_net_irr_req
    {
        [Key]
        public int id { get; set; }
        public string crop_name { get; set; }
        public double net_irrigation_requirement { get; set; }

    }

    [Table("wb_reject_status", Schema = "public")]
    public class wb_reject_status
    {
        [Key]
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
        public DateTime ? waterbudget_date { get; set; }

    }

    [Table("wb_reject_status_view", Schema = "public")]
    public class WbRejectStatusView
    {
        public int id { get; set; }
        public int status_id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public DateTime? waterbudget_date { get; set; }

    }
    [Table("wb_basicinfoview", Schema = "public")]
    public class WbBasicInfoViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double basic_gp_area { get; set; }
        public double annual_rainfall { get; set; }
        public double human_population { get; set; }
        public double livestock_population { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }


    [Table("wb_estgroundwateravailview", Schema = "public")]
    public class WBEstGroundWaterAvailViewModel
    {
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
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_estavairainfallsupplyinterventionview", Schema = "public")]
    public class WBEstRainfallSupplyInterventionViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double uti_rainfall_runoff { get; set; }     
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_avaisurfacewaterstorview", Schema = "public")]
    public class WBSurfaceWaterStorViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double exist_structure { get; set; }
        public double annual_filling { get; set; }
        public double capacity_structure { get; set; }
        public double total_capacity_structure { get; set; }
        public double lossess { get; set; }
        public double total_surface_water_uti { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }


    [Table("wb_artrechwaterconsstructureview", Schema = "public")]
    public class WBARWCstructureViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public string type_of_structure { get; set; }
        public string other_type_of_structure { get; set; }
        public int number_of_structures { get; set; }
        public double area_of_structures { get; set; }
        public double avg_depth_structures { get; set; }
        public double total_storage_capacity { get; set; }
        public double annual_fillings { get; set; }
        public double qt_annual_rech_water { get; set; }
        public double total { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_wateravaitransportedwaterview", Schema = "public")]
    public class WBWaterAvaiTransportedWaterViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }       
        public double transported_water { get; set; }     
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_wateravainon_potableview", Schema = "public")]
    public class WBWaterAvaiNonPotableViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double water_non_potable_use { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_totwateravailview", Schema = "public")]
    public class WBTotWaterAvailViewModel
    {
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
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }


    [Table("wb_waterdrinkindreqview", Schema = "public")]
    public class WBWaterDrinkIndReqViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double drink_dom_water_req { get; set; }
        public double water_req_livestock_pop { get; set; }
        public double water_req_indust { get; set; }
        public double total_water_requirement { get; set; }      
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_areacropsview", Schema = "public")]
    public class WBAreaCropsViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public string crop { get; set; }
        public string other_crop_entry { get; set; }
        public double net_irrigation_requirement { get; set; }
        public double area_kharif_season { get; set; }
        public double area_rabi_season { get; set; }
        public double area_summer_season { get; set; }
        public double total_gross_cropped_area { get; set; }
        public double total_irrigation_requirement { get; set; }
        public double total_water_req { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_totalwaterreqview", Schema = "public")]
    public class WBTotalWaterReqViewModel
    {
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
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

    [Table("wb_waterbalanceview", Schema = "public")]
    public class WBWaterBalanceViewModel
    {
        public int id { get; set; }
        public int state_id { get; set; }
        public int district_id { get; set; }
        public int block_id { get; set; }
        public int gp_id { get; set; }
        public string year { get; set; }
        public double total_water_availability { get; set; }
        public double total_water_requirement { get; set; }
        public double water_balance { get; set; }       
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
    }

}