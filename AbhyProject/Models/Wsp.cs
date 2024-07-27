using DocumentFormat.OpenXml.CustomXmlSchemaReferences;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class Wsp
    {
    }

    [Table("abhy_wsp_district_wise_rainfall_et_gwra_24", Schema = "public")]
    public class abhy_wsp_master_data_24
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string dist_annual_rainfall { get; set; }
        public string evt_mm { get; set; }
        public string gwr_rainfall_monsoon { get; set; }
        public string gwr_rainfall_non_monsoon { get; set; }
        public string gwr_rainfall_other_src_mansoon { get; set; }
        public string gwr_rainfall_other_src_non_mansoon { get; set; }
        public string gw_withdrawl { get; set; }
        public string loss_natural_discharge { get; set; }
        public string category { get; set; }

    }

    [Table("abhy_wsp_gpdata_new_24", Schema = "public")]
    public class abhy_wsp_gpdata_new_24
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gram_panchayat_name { get; set; }
        public string village_name { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string gp_id { get; set; }
        public string block_area { get; set; }
        public string gp_area { get; set; }
        public string watershed_code { get; set; }
        public string watershed_name { get; set; }
        public string watershed_area_block { get; set; }
        public string sub_basin_code { get; set; }
        public string sub_basin_name { get; set; }
        public string basin_code { get; set; }
        public string basin_name { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }

        public string year { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string other_basin_name { get; set; }
        public string other_sub_basin_name { get; set; }

    }

    [Table("abhy_wsp_gram_images_24", Schema = "public")]
    public class abhy_wsp_gram_images_24
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string gpimage1 { get; set; }
        public string gpimage2 { get; set; }
        public string gpimage3 { get; set; }
        public string gpimage4 { get; set; }
        public string gpimage1_filename { get; set; }
        public string gpimage2_filename { get; set; }
        public string gpimage3_filename { get; set; }
        public string gpimage4_filename { get; set; }
        public string datetime { get; set; }

        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }

    }
    [Table("abhy_wsp_gwl_24", Schema = "public")]
    public class abhy_wsp_gwl_24

    {
        public string sno { get; set; }
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string sitename { get; set; }
        public string typeofwell { get; set; }
        public string source_Ownership { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string wellid { get; set; }
        public string welldepth { get; set; }
        public string well { get; set; }
        public string datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string isarchive { get; set; }
        public string locationdetails { get; set; }
        public string other_well_type { get; set; }
        public string Diameter_of_Well { get; set; }
        public string Height_of_Measuring_Point { get; set; }
        public string source_Ownership_type { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string status { get; set; }
        public int gwl_meta_id { get; set; }
        public string gwl_reading { get; set; }
        public string gwl_date { get; set; }
        public string gwl_email { get; set; }
        public string wsp_fyyear { get; set; }
        public long ma_id { get; set; }
        public DateTime wsp_save_date { get; set; }


    }
    [Table("abhy_wsp_gwq_24", Schema = "public")]
    public class abhy_wsp_gwq_24
    {
        public string sno { get; set; }
        public int id { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GP { get; set; }
        public string Village { get; set; }
        public string Site_Name { get; set; }
        public string Well_Type { get; set; }
        public string Source { get; set; }
        public string Well_ID { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Well_Depth { get; set; }
        public string Aquifer { get; set; }
        public string Formation { get; set; }
        public string Years { get; set; }
        public string pH { get; set; }
        public string EC { get; set; }
        public string TDS { get; set; }
        public string TH { get; set; }
        public string Calcium { get; set; }
        public string Magnesium { get; set; }
        public string Sodium { get; set; }
        public string Potassium { get; set; }
        public string Carbonate { get; set; }
        public string Bicarbonate { get; set; }
        public string Sulphate { get; set; }
        public string Chloride { get; set; }
        public string Fluoride { get; set; }
        public string Nitrate { get; set; }
        public string Remark { get; set; }
        public string wsp_fyyear { get; set; }
        public long ma_id { get; set; }
        public DateTime wsp_save_date { get; set; }

    }

    [Table("abhy_wsp_wateravailbility_new_24", Schema = "public")]
    public class abhy_wsp_wateravailbility_new_24
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string year { get; set; }
        public double annual_rainfall { get; set; }
        public double est_vol_rainfall { get; set; }
        public double evapo_rate { get; set; }
        public double est_evapo_loss { get; set; }
        public double est_water_rain { get; set; }
        public double weigh_run_conf { get; set; }
        public double rain_runoff { get; set; }
        public double rech_monsoon { get; set; }
        public double rech_nonmonsoon { get; set; }
        public double tot_grd_rech_rain { get; set; }
        public double ground_monsoon { get; set; }
        public double ground_nonmonsoon { get; set; }
        public double tot_grd_rech_oth { get; set; }
        public double loss_nature { get; set; }
        public double tot_grd_wat_avail { get; set; }
        public double ground_water_with { get; set; }
        public string category { get; set; }
        public string avail_storages { get; set; }
        public string avail_storages_grd { get; set; }
        public string avail_storages_sur { get; set; }
        public double total_surface_body { get; set; }
        public double loss_if { get; set; }
        public double surface_water_avail { get; set; }
        public double trans_water_out { get; set; }
        public double total_sirface_water { get; set; }
        public double total_avail_water { get; set; }

        public string ar_data_year { get; set; }
        public string er_data_year { get; set; }

        public string month { get; set; }
        public int month_ordery_by { get; set; }
        public string avail_upload_file { get; set; }
        public string avail_upload_dir { get; set; }
        public string other_source_name { get; set; }
    }


    [Table("abhy_uti_waterdraft_domestic_new_24", Schema = "public")]        //manish water utilization
    public class abhy_uti_waterdraft_domestic_new_24
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }

        public string total_pop_human { get; set; }
        public string daily_water_req { get; set; }
        public string water_req_human { get; set; }
        public string total_pop_livestock { get; set; }
        public string avg_water_req { get; set; }
        public string water_req_livestock { get; set; }
        public string annual_wat_req_hum { get; set; }
        public string perc_grd_hum { get; set; }
        public string water_deman_hum { get; set; }
        public string perc_sur_hum { get; set; }
        public string water_dem_hum { get; set; }
        public string annual_wat_req_liv { get; set; }
        public string perc_grd_liv { get; set; }
        public string water_deman_liv { get; set; }
        public string perc_sur_liv { get; set; }
        public string water_dem_liv { get; set; }
        public string daily_wat_req_per_liv { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }


    [Table("abhy_waterdraft_irrigation_meta_24", Schema = "public")]
    public class abhy_waterdraft_irrigation_meta_24
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string total_water_dem { get; set; }
        public string per_ground_water { get; set; }
        public string per_surface_water { get; set; }
        public string uti_ground_water { get; set; }
        public string uti_surface_water { get; set; }
        public string data_year { get; set; }
        public string entry_by { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }

    [Table("abhy_waterdraft_irrigation_data_24", Schema = "public")]
    public class abhy_waterdraft_irrigation_data_24
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public string season_type { get; set; }
        public string crop_category { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public double area { get; set; }
        public double gross_water { get; set; }
        public double water_demand { get; set; }
        public int isupdated_sp { get; set; }
        public int isupdated_dp { get; set; }
        public int isupdated_pl { get; set; }
    }
    [Table("abhy_waterdraft_industry_24", Schema = "public")]
    public class abhy_waterdraft_industry_24
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string industry_name { get; set; }
        public string industry_daily_water_req { get; set; }
        public string industry_days_use { get; set; }
        public string industry_demand_surface_water { get; set; }
        public string industry_demand_ground_water { get; set; }
        public string annual_ind_demand { get; set; }
        public double indus_grd_water { get; set; }
        public double indus_sur_water { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }

    [Table("abhy_waterdraft_other_24", Schema = "public")]                   //manish  water Utilization
    public class abhy_waterdraft_other_24
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string use { get; set; }
        public string daily_req { get; set; }
        public string annual_req { get; set; }
        public string no_of_days_use { get; set; }
        public string demand_met_surface_water { get; set; }
        public string demand_met_ground_water { get; set; }
        public double oth_grd_water { get; set; }
        public double oth_sur_water { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }

    [Table("abhy_wsp_waterbalance_new_24", Schema = "public")]
    public class abhy_wsp_waterbalance_new_24
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public double wb_sw_avail { get; set; }
        public double wb_gw_avail { get; set; }
        public double wb_total_avail { get; set; }
        public double wb_sw_utili { get; set; }
        public double wb_gw_utili { get; set; }
        public double wb_total_utili { get; set; }
        public double wb_sw_balance { get; set; }
        public double wb_gw_balance { get; set; }
        public double wb_total_balance { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
        public string year { get; set; }

    }
    [Table("abhy_wsp_waterbudget_new_24", Schema = "public")]
    public class abhy_wsp_waterbudget_new_24
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public int human_p_pop { get; set; }
        public double human_a_pop { get; set; }
        public int human_no_of_year { get; set; }
        public int human_pre_pop { get; set; }
        public int human_per_capita { get; set; }
        public double human_pro_water_req { get; set; }
        public int live_p_pop { get; set; }
        public double live_a_pop { get; set; }
        public int live_no_of_year { get; set; }
        public int live_pro_pop { get; set; }
        public double live_pre_capita { get; set; }
        public double live_pro_water_req { get; set; }
        public double total_pro_water_req { get; set; }
        public double proposed_share_gw { get; set; }
        public double proposed_share_sw { get; set; }
        public double demand_gw { get; set; }
        public double demand_sw { get; set; }
        public double ground_water { get; set; }
        public double surface_water { get; set; }
        public double total_wt_available { get; set; }
        public string officer_name { get; set; }
        public string datetime { get; set; }
        public string month { get; set; }
        public string year { get; set; }
        public int month_ordery_by { get; set; }

    }
    [Table("abhy_wsp_demand_meta_24", Schema = "public")]
    public class abhy_wsp_demand_meta_24
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string data_year { get; set; }
        public bool approve_npmu { get; set; }
        public bool approve_dpmu { get; set; }
        public bool approve_spmu { get; set; }
        public string entry_by { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }
    [Table("abhy_wsp_demand_sprinkler_24", Schema = "public")]
    public class abhy_wsp_demand_sprinkler_24
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public string season_type { get; set; }
        public string crop_category { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public string area_irrigation { get; set; }
        public string gross_water { get; set; }
        public string water_demand { get; set; }
        public string area_proposed { get; set; }
        public string reduction { get; set; }
        public string net_water_demand { get; set; }
        public string reduction_gw { get; set; }
        public string reduction_in_demand { get; set; }
    }
    [Table("abhy_wsp_demand_drip_24", Schema = "public")]
    public class abhy_wsp_demand_drip_24
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public string season_type { get; set; }
        public string crop_category { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public string area_irrigation { get; set; }
        public string gross_water { get; set; }
        public string water_demand { get; set; }
        public string area_proposed { get; set; }
        public string reduction { get; set; }
        public string net_water_demand { get; set; }
        public string reduction_gw { get; set; }
        public string reduction_in_demand { get; set; }

    }
    [Table("abhy_wsp_demand_pipeline_24", Schema = "public")]
    public class abhy_wsp_demand_pipeline_24
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public string season_type { get; set; }
        public string crop_category { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public string area_irrigation { get; set; }
        public string gross_water { get; set; }
        public string water_demand { get; set; }
        public string area_proposed { get; set; }
        public string reduction { get; set; }
        public string net_water_demand { get; set; }
        public string reduction_gw { get; set; }
        public string reduction_in_demand { get; set; }

    }
    [Table("abhy_wsp_demand_change_crop_24", Schema = "public")]
    public class abhy_wsp_demand_change_crop_24
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public int uti_id { get; set; }
        public string season_type { get; set; }
        public string change_water_demand { get; set; }
        public string crop_category { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public string area_ch { get; set; }
        public string water_req { get; set; }
        public string original_crop_name { get; set; }
        public string original_area { get; set; }
        public string original_wt_dmd { get; set; }
        public string reduction_gw { get; set; }
    }
    [Table("abhy_wsp_demand_anyother_24", Schema = "public")]
    public class abhy_wsp_demand_anyother_24
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public string season_type { get; set; }
        public string crop_category { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public string area_irrigation { get; set; }
        public string gross_water { get; set; }
        public string water_demand { get; set; }
        public string reduction { get; set; }
        public string water_save { get; set; }

        public string innovative_measures { get; set; }
        public string other_innovative { get; set; }
        public string proposed_area { get; set; }
    }
    [Table("abhy_wsp_demand_fund_details_24", Schema = "public")]
    public class abhy_wsp_demand_fund_details_24
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string approx_est_cost { get; set; }
        public string fund_for { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
    }
    [Table("abhy_artificial_recharge_st_data_24", Schema = "public")]
    public class abhy_artificial_recharge_st_data_24
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village_name { get; set; }
        public string location_detail { get; set; }
        public string type_of_ar { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string work_proposed { get; set; }
        public string storage_capacity { get; set; }
        public string annual_filling_no { get; set; }
        public string recharge { get; set; }
        public string annual_gw_recharge { get; set; }
        public string estimated_cost { get; set; }
        public string fund_avail_convergence { get; set; }
        public string gap_funding_atal { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string other_scheme { get; set; }
        public string old_lat { get; set; }
        public string old_lon { get; set; }

    }
    [Table("abhy_water_conservation_st_data_24", Schema = "public")]
    public class abhy_water_conservation_st_data_24
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village_name { get; set; }
        public string location_detail { get; set; }
        public string type_of_wr { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string work_proposed { get; set; }
        public string storage_capacity { get; set; }
        public string annual_filling_no { get; set; }
        public string effective_storage { get; set; }
        public string estimated_cost { get; set; }
        public string fund_avail_convergence { get; set; }
        public string gap_funding_atal { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string other_scheme { get; set; }
        public string old_lat { get; set; }
        public string old_lon { get; set; }
    }

    [Table("abhy_wsp_pgwm_committee_member_24", Schema = "public")]
    public class abhy_wsp_pgwm_committee_member_24
    {
        [Key]
        public Int32 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string data_year { get; set; }
        public string member_name { get; set; }
        public string designation { get; set; }
        public string gender { get; set; }
        public string contact_no { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
    }
    [Table("abhy_wsp_pgwm_committee_meeting_24", Schema = "public")]
    public class abhy_wsp_pgwm_committee_meeting_24
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string data_year { get; set; }
        public string meeting_date { get; set; }
        public string meeting_gp_name { get; set; }
        public string meeting_village { get; set; }
        public string meeting_location { get; set; }
        public int male_attendees { get; set; }
        public int female_attendees { get; set; }
        public int transgender_attendees { get; set; }
        public int total_attendees { get; set; }
        public string mom_doc { get; set; }
        public string meeting_image { get; set; }
        public string meeting_resolution { get; set; }
        public string attendance_sheet { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
    }
    [Table("abhy_wsp_dpmu_declaration_24", Schema = "public")]
    public class abhy_wsp_dpmu_declaration_24
    {
        [Key]
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string data_year { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string dpmu_declaration { get; set; }
        public string entry_by { get; set; }
        public DateTime entry_time { get; set; }
    }
    [Table("abhy_wsp_mapview_image_path", Schema = "public")]
    public class abhy_wsp_mapview_image_path
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string financial_year { get; set; }
        public string module_name { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
    }
    [Table("abhy_mis_wsp_approved_24", Schema = "public")]
    public class abhy_mis_wsp_approved_24
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string dist { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string fy_year { get; set; }
        public string wsp_file { get; set; }
        public string wsp_path { get; set; }
        public string wsp_date { get; set; }
        public string user_id { get; set; }
    }
}