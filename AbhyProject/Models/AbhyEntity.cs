using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using static AbhyProject.Models.wsp_23;

namespace AbhyProject.Models
{
    public class AbhyEntity : DbContext
    {
        public AbhyEntity() : base(nameOrConnectionString: "AbhyEntity") { }
        public virtual DbSet<abhy_wsp_master_data> obj_abhy_wsp_master_data { get; set; }
        public virtual DbSet<AAAATesting> obj_AAAATesting { get; set; }
        public virtual DbSet<abhy_master_tbl_gptraining> obj_abhy_master_tbl_gptraining { get; set; }
        public virtual DbSet<abhy_wsp_approved_status> obj_abhy_wsp_approved_status { get; set; }
        public virtual DbSet<abhy_approval_master> obj_abhy_approval_master { get; set; }
        public virtual DbSet<dd_wsp_module> obj_dd_wsp_module { get; set; }
        public virtual DbSet<dd_wsp_submodule> obj_dd_wsp_submodule { get; set; }

        public virtual DbSet<abhy_wsp_gpdata_new> obj_abhy_wsp_gpdata_new { get; set; }
        public virtual DbSet<abhy_wsp_gwl> obj_abhy_wsp_gwl { get; set; }
        public virtual DbSet<abhy_wsp_gwq> obj_abhy_wsp_gwq { get; set; }
        public virtual DbSet<abhy_gpdata_dropdown> obj_abhy_gpdata_dropdown { get; set; }
        public virtual DbSet<abhy_wsp_gram_images> obj_abhy_wsp_gram_images { get; set; }
        public virtual DbSet<abhy_wsp_wateravailbility_new> obj_abhy_wsp_wateravailbility_new { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_data> obj_abhy_waterdraft_irrigation_data { get; set; }
        public virtual DbSet<abhy_uti_waterdraft_domestic_new> obj_abhy_uti_waterdraft_domestic_new { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_meta> obj_abhy_waterdraft_irrigation_meta { get; set; }
        public virtual DbSet<abhy_wsp_waterbalance_new> obj_abhy_wsp_waterbalance_new { get; set; }
        public virtual DbSet<abhy_wsp_waterbudget_new> obj_abhy_wsp_waterbudget_new { get; set; }
        //Water Utilization
        public virtual DbSet<abhy_waterdraft_industry> obj_abhy_waterdraft_industry { get; set; }  
        public virtual DbSet<abhy_waterdraft_other> obj_abhy_waterdraft_other { get; set; }  //manish new 2
        public virtual DbSet<abhy_kharif_veg_dropdown> obj_abhy_kharif_veg_dropdown { get; set; }  //manish


        public virtual DbSet<abhy_waterdraft_domestic> obj_abhy_waterdraft_domestic { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation> obj_abhy_waterdraft_irrigation { get; set; }  //manish

        public virtual DbSet<abhy_waterdraft_irrigation_kharif> obj_abhy_waterdraft_irrigation_kharif { get; set; }  //manish
        public virtual DbSet<abhy_waterdraft_irrigation_rabi> obj_abhy_waterdraft_irrigation_rabi { get; set; }  //manish
        public virtual DbSet<abhy_waterdraft_irrigation_summer> obj_abhy_waterdraft_irrigation_summer { get; set; }  //manish

        //akash
        public virtual DbSet<abhy_wsp_demand_meta> obj_abhy_wsp_demand_meta { get; set; }
        public virtual DbSet<abhy_measures> obj_abhy_measures { get; set; }
        public virtual DbSet<abhy_measures_drip> obj_abhy_measures_drip { get; set; }
        public virtual DbSet<abhy_measures_crop> obj_abhy_measures_crop { get; set; }
        public virtual DbSet<abhy_measures_irr> obj_abhy_measures_irr { get; set; }
        public virtual DbSet<abhy_measures_any> obj_abhy_measures_any { get; set; }
        public virtual DbSet<abhy_measures_innovative> obj_abhy_measures_innovative { get; set; }
        public virtual DbSet<abhy_supply_ref_info> obj_abhy_supply_ref_info { get; set; }

        public virtual DbSet<abhy_wsp_demand_sprinkler> obj_abhy_wsp_demand_sprinkler { get; set; }
        public virtual DbSet<abhy_wsp_demand_drip> obj_abhy_wsp_demand_drip { get; set; }
        public virtual DbSet<abhy_wsp_demand_pipeline> obj_abhy_wsp_demand_pipeline { get; set; }
        public virtual DbSet<abhy_wsp_demand_anyother> obj_abhy_wsp_demand_anyother { get; set; }
        public virtual DbSet<abhy_wsp_demand_fund_details> obj_abhy_wsp_demand_fund_details { get; set; }
        public virtual DbSet<abhy_wsp_innovative_measures> obj_abhy_wsp_innovative_measures { get; set; }
        public virtual DbSet<abhy_wsp_demand_change_crop> obj_abhy_wsp_demand_change_crop { get; set; }
        public virtual DbSet<abhy_artificial_recharge_st_data> obj_abhy_artificial_recharge_st_data { get; set; }
        public virtual DbSet<abhy_water_conservation_st_data> obj_abhy_water_conservation_st_data { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee> obj_abhy_wsp_pgwm_committee { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_member> obj_abhy_wsp_pgwm_committee_member { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_member_vw> obj_abhy_wsp_pgwm_committee_member_vw { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_meeting_vw> obj_abhy_wsp_pgwm_committee_meeting_vw { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_meeting> obj_abhy_wsp_pgwm_committee_meeting { get; set; }
        public virtual DbSet<abhy_wsp_dpmu_declaration> obj_abhy_wsp_dpmu_declaration { get; set; }
        public virtual DbSet<abhy_wsp_dpmu_declaration_vw> obj_abhy_wsp_dpmu_declaration_vw { get; set; }



        public virtual DbSet<abhy_iec_dropdown> obj_abhy_iec_dropdown { get; set; }
        public virtual DbSet<abhy_IEC> obj_abhy_IEC { get; set; }
        
        public virtual DbSet<abhy_gwqm_ftk> obj_abhy_gwqm_ftk { get; set; }
        public virtual DbSet<abhy_wsp_funding_source> obj_abhy_wsp_funding_source { get; set; }
        public virtual DbSet<abhy_new_DLI3> obj_abhy_new_DLI3 { get; set; }
        public virtual DbSet<abhy_DLI3_upload_document> obj_abhy_DLI3_upload_document { get; set; }
        public virtual DbSet<electricity_feeder_separation> obj_electricity_feeder_separation { get; set; }
        public virtual DbSet<dli4_efficient_irrigation_system> obj_dli4_efficient_irrigation_system { get; set; }
        public virtual DbSet<dli4_area_with_crop_shifting> obj_dli4_area_with_crop_shifting { get; set; }
        public virtual DbSet<dli4_water_saving_agriculture> obj_dli4_water_saving_agriculture { get; set; }
        public virtual DbSet<dli4_upload_document> obj_dli4_upload_document { get; set; }
        public virtual DbSet<Users> objUsers { get; set; }
        public virtual DbSet<Users_delete> objUsers_delete { get; set; }
        
        public virtual DbSet<Users_Test> objUsers_Test { get; set; }
        public virtual DbSet<user_autologin> obj_user_autologin { get; set; }
        public virtual DbSet<login_datetime> obj_login_datetime { get; set; }
        public virtual DbSet<vw_loginboth> obj_vw_loginboth { get; set; }
        public virtual DbSet<vw_loginboth_full> obj_vw_loginboth_full { get; set; }
        public virtual DbSet<login_attempts> obj_login_attempts { get; set; }
        public virtual DbSet<feedback_count> obj_feedback_count { get; set; }

        public virtual DbSet<DLI4_2122_Statewisedata> obj_dli4_2122_statewisedata { get; set; }



        public virtual DbSet<Abhy_Verifications> objAbhy_Verifications { get; set; }

        public virtual DbSet<GroundWater> objGroundWater { get; set; }

        public virtual DbSet<TenderDetails> objTenderDetails { get; set; }
        public virtual DbSet<TenderAwards> objTenderAwards { get; set; }
        public virtual DbSet<E_Tender> objE_Tender { get; set; }
        public virtual DbSet<WpsDetails> objWpsDetails { get; set; }
        public virtual DbSet<VillageParameters> objVillageParameters { get; set; }
        public virtual DbSet<GroundWaterQuantity> objGroundWaterQuantity { get; set; }
        public virtual DbSet<abhy_demand> objabhy_demand { get; set; }
        public virtual DbSet<New_Grievance> objNew_Grievance { get; set; }
        public virtual DbSet<grievance_new> objgrievance_new { get; set; }
        public virtual DbSet<abhy_grievance_officer_mails_info> obj_abhy_grievance_officer_mails_info { get; set; }
        public virtual DbSet<abhy_grievance_officer_mails_info_new> obj_abhy_grievance_officer_mails_info_new { get; set; }
        public virtual DbSet<grm_disrtict_email_list> obj_grm_disrtict_email_list { get; set; }
        public virtual DbSet<Appeal_Registration> objAppeal_Registration { get; set; }

        public virtual DbSet<Conference> objConference { get; set; }

        public virtual DbSet<abhywaterbudget> objabhywaterbudget { get; set; }


        public virtual DbSet<VendorRegisters> objVendorRegisters { get; set; }

        public virtual DbSet<abhy_ground_water> objabhy_ground_water { get; set; }
        public virtual DbSet<abhy_groundwater_rainfall> objabhy_groundwater_rainfall { get; set; }
        public virtual DbSet<Abhy_Training_Workshops> objAbhy_Training_Workshops { get; set; }
        public virtual DbSet<abhy_training_workshops> obj_abhy_training_workshops { get; set; }

        // training and workshop module
        public virtual DbSet<current_events> obj_current_events { get; set; }
        public virtual DbSet<vw_current_events> obj_vw_current_events { get; set; }
        public virtual DbSet<current_event_pop> obj_current_event_pop { get; set; }
        public virtual DbSet<vw_reg_traininggp> obj_vw_reg_traininggp { get; set; }
        public virtual DbSet<events_material> obj_events_material { get; set; }    
        public virtual DbSet<events_calendar> obj_events_calendar { get; set; }    
        public virtual DbSet<abhy_feedback_latest> obj_abhy_feedback_latest { get; set; }
        public virtual DbSet<vw_abhy_feedback_latest> obj_vw_abhy_feedback_latest { get; set; }
        //new regs training and workshops
        public virtual DbSet<abhy_training_newregs> obj_abhy_training_newregs { get; set; }
        
        public virtual DbSet<reg_traininggp> obj_reg_traininggp { get; set; }
        public virtual DbSet<reg_traininggp_full> obj_reg_traininggp_full { get; set; }
        public virtual DbSet<abhy_tamc> objabhy_tamc { get; set; }
        public virtual DbSet<abhy_agencies> objabhy_agencies { get; set; }
        public virtual DbSet<abhystates_completecensusdata_new> objabhystates_completecensusdata_new { get; set; }
        public virtual DbSet<abhystates_completecensusdata_Insert1> objabhystates_completecensusdata_Insert1 { get; set; }
        public virtual DbSet<abhy_published_documents> objabhy_published_documents { get; set; }
        public virtual DbSet<abhy_feedback> objabhy_feedback { get; set; }
        public virtual DbSet<GroundwaterLevels> objGroundwaterLevels { get; set; }
        public virtual DbSet<InstitutionalIndex> objInstitutionalIndex { get; set; }
        public virtual DbSet<RainFallData> objRainFallData { get; set; }
        public virtual DbSet<AdminRoles> objAdminRoles { get; set; }
        public virtual DbSet<GP_waterYear_JuneTOMay> objGP_waterYear_JuneTOMay { get; set; }
        public virtual DbSet<abhy_states> objabhy_states { get; set; }

        public virtual DbSet<abhy_districts> objabhy_districts { get; set; }
        public virtual DbSet<abhy_blocks> objabhy_blocks { get; set; }
        public virtual DbSet<abhy_grampanchayat> objabhy_grampanchayat { get; set; }
        public virtual DbSet<abhy_villages> objabhy_villages { get; set; }
        public virtual DbSet<abhy_wsp> objabhy_wsp { get; set; }

        public virtual DbSet<TblAreaUnderLine_By> objTblAreaUnderLine_By { get; set; }
        public virtual DbSet<abhy_agencies1> objabhy_agencies1 { get; set; }


        public virtual DbSet<Abhy_groundwater_quality> objAbhy_groundwater_quality { get; set; }
        public virtual DbSet<Abhy_groundwater_levels> objabhy_groundwater_levels { get; set; }
        public virtual DbSet<Abhy_WaterUtilization_Approval> objAbhy_WaterUtilization_Approval { get; set; }

        public virtual DbSet<Abhy_groundwater_levels2> objabhy_groundwater_levels2 { get; set; }

        public virtual DbSet<Abhy_gwl_quantity1> objAbhy_gwl_quantity1 { get; set; }
        public virtual DbSet<Abhy_gwl_quantity> objAbhy_gwl_quantity { get; set; }
        public virtual DbSet<Abhy_dashboard_count> objAbhy_dashboard_count { get; set; }

        public virtual DbSet<abhy_annual_data> objabhy_annual_data { get; set; }

        public virtual DbSet<Abhy_Inistutional_capacity> objAbhy_Inistutional_capacity { get; set; }
        public virtual DbSet<Abhy_Operatiionalization_Of_Systems> objAbhy_Operatiionalization_Of_Systems { get; set; }
        public virtual DbSet<Abhy_Statelevel_Inistutional_Index> objAbhy_Statelevel_Inistutional_Index { get; set; }

        public virtual DbSet<abhy_fws> objabhy_fws { get; set; }
        public virtual DbSet<Abhy_pgm_adaptation1> objAbhy_PGM_Adaptation { get; set; }
        public virtual DbSet<Abhy_Total_Rainfall> objAbhy_Total_Rainfall { get; set; }
        public virtual DbSet<Abhy_Rainfall_Saved_Data> objAbhy_Rainfall_Saved_Data { get; set; }
        public virtual DbSet<abhy_livestock> objabhy_livestock { get; set; }

        public virtual DbSet<abhycensus_coordinates> objabhycensus_coordinates { get; set; }
        public virtual DbSet<abhy_demand1> objabhy_demand1 { get; set; }
        public virtual DbSet<abhy_supply1> objabhy_supply1 { get; set; }
        public virtual DbSet<PGWN_Personal_Details> objPGWN_Personal_Details { get; set; }
        public virtual DbSet<PGWN_Department_Details> objPGWN_Department_Details { get; set; }

        public virtual DbSet<abhy_households> objabhy_households { get; set; }
        public virtual DbSet<abhy_wspform> objabhy_wspform { get; set; }
        public virtual DbSet<abhy_disbursement> objabhy_disbursement { get; set; }
        public virtual DbSet<abhy_framework_matrix> objabhy_framework_matrix { get; set; }

        public virtual DbSet<abhy_committee_functionality> objabhy_committee_functionality { get; set; }
        public virtual DbSet<abhy_wsp_interventions> objabhy_wsp_interventions { get; set; }
        public virtual DbSet<abhy_supply2> objabhy_supply2 { get; set; }
        public virtual DbSet<abhy_demand2> objabhy_demand2 { get; set; }
        public virtual DbSet<abhy_water_budget_form> objabhy_water_budget_form { get; set; }
        public virtual DbSet<abhy_seasoncorps> objabhy_seasoncorps { get; set; }
        public virtual DbSet<abhy_wb_report> objabhy_wb_report { get; set; }
        public virtual DbSet<abhy_waterbudget_report> objabhy_waterbudget_report { get; set; }
        public virtual DbSet<abhy_water_budget_form_InsertedData> obj_abhy_water_budget_form_InsertedData { get; set; }
        public virtual DbSet<abhy_total_wsp_budget> obj_abhy_total_wsp_budget { get; set; }
        public virtual DbSet<Abhy_Landowner_Baseline> obj_Abhy_Landowner_Baseline { get; set; }
        public virtual DbSet<Abhy_Land_use_and_irrigated_areas> obj_Abhy_Land_use_and_irrigated_areas { get; set; }

        public virtual DbSet<abhy_about_contact_agencies> objabhy_about_contact_agencies { get; set; }

        // ataljal
        public virtual DbSet<abhy_wsp_demandside_department_name> obj_abhy_wsp_demandside_department_name { get; set; }
        public virtual DbSet<abhy_wsp_scheme_name> obj_abhy_wsp_scheme_name { get; set; }
        public virtual DbSet<abhy_wsp_supplyside_department_name> obj_abhy_wsp_supplyside_department_name { get; set; }
        public virtual DbSet<demand_funding_source> obj_demand_funding_source { get; set; }

        public virtual DbSet<supply_funding_source> obj_supply_funding_source { get; set; }

        public virtual DbSet<supply_water_conservation> obj_supply_water_conservation { get; set; }

        public virtual DbSet<supply_AR_Structures> obj_supply_AR_Structures { get; set; }

        public virtual DbSet<vw_supply_any_other_intervention> obj_vw_supply_any_other_intervention { get; set; }
        public virtual DbSet<vw_supply_water_conservation> obj_vw_supply_water_conservation { get; set; }

        public virtual DbSet<vw_supply_AR_Structures> obj_vw_supply_AR_Structures { get; set; }
        public virtual DbSet<vw_abhy_supplyside_DLI3> obj_vw_abhy_supplyside_DLI3 { get; set; }

        public virtual DbSet<supply_any_other_intervention> obj_supply_any_other_intervention { get; set; }

        public virtual DbSet<abhy_supplyside_DLI3> obj_abhy_supplyside_DLI3 { get; set; }
        public virtual DbSet<AR_WC_Structures> obj_AR_WC_Structures { get; set; }

        public virtual DbSet<Abhy_Draft_Savedata> obj_Abhy_Draft_Savedata { get; set; }
        public virtual DbSet<Abhy_Water_Avalibility> obj_Abhy_Water_Avalibility { get; set; }
        public virtual DbSet<Abhy_Total_WSP> obj_Abhy_Total_WSP { get; set; }

        public virtual DbSet<abhy_demandside_drip_saveddata> obj_drip_saveddata { get; set; }
        public virtual DbSet<abhy_demandside_sprinkler_saveddata> obj_sprinkler { get; set; }

        public virtual DbSet<abhy_demandside_pipelies_saveddata> obj_pipeline { get; set; }

        public virtual DbSet<abhy_demandside_reduction_saveddata> obj_reduction { get; set; }
        public virtual DbSet<abhy_demandside_other_saveddata> obj_other { get; set; }

        public virtual DbSet<abhy_demandside_crop_diversification_saveddata> obj_crop { get; set; }

        public virtual DbSet<abhy_total_waterbudget> obj_tol_waterbudget { get; set; }
        public virtual DbSet<abhy_gpdata_new> obj_abhy_gpdata_new { get; set; }
        public virtual DbSet<abhy_wsp_socialmonitoring> obj_abhy_wsp_socialmonitoring { get; set; }

        public virtual DbSet<abhy_waterdraft_new> obj_abhy_waterdraft_new { get; set; }

        public virtual DbSet<abhy_waterbalance_new> obj_abhy_waterbalance_new { get; set; }

        public virtual DbSet<abhy_wateravailability_new> obj_abhy_wateravailability_new { get; set; }

        public virtual DbSet<abhy_waterbudget_new> obj_abhy_waterbudget_new { get; set; }

        public virtual DbSet<abhy_gpdata_population> obj_abhy_gpdata_population { get; set; }

        public virtual DbSet<abhy_maps> obj_maps { get; set; }

        public virtual DbSet<abhy_gram_images> obj_abhy_gram_images { get; set; }

        public virtual DbSet<abhy_gram_images_new> obj_abhy_gram_images_new { get; set; }

        public virtual DbSet<abhy_gram_images_test> obj_abhy_gram_images_test { get; set; }
        

        //new entites of ground water mointoring

        public virtual DbSet<Abhy_groundwater_levels2_new> obj_Abhy_groundwater_levels2_new { get; set; }
        public virtual DbSet<Abhy_groundwater_quality_new> obj_Abhy_groundwater_quality_new { get; set; }
        public virtual DbSet<Abhy_gwl_quantity_new> obj_Abhy_gwl_quantity_new { get; set; }
        public virtual DbSet<Abhy_Total_Rainfall_new> obj_Abhy_Total_Rainfall_new { get; set; }

        public virtual DbSet<abhy_groundwater_datacollection> obj_abhy_groundwater_datacollection { get; set; }

        public virtual DbSet<abhy_totalrainfall_updated_new> obj_abhy_totalrainfall_updated_new { get; set; }




        public virtual DbSet<abhy_totalrainfall_monthly_new> obj_abhy_totalrainfall_monthly_new { get; set; }
        public virtual DbSet<abhy_totalrainfall_yearly_new> obj_abhy_totalrainfall_yearly_new { get; set; }

        //baseline tables
        public virtual DbSet<sarpanchdetails> obj_sarpanchdetails { get; set; }
        public virtual DbSet<abhy_baseline_gpdata> obj_abhy_baseline_gpdata { get; set; }
        public virtual DbSet<vw_gpdcidata_tracker_count_statewise> obj_vw_gpdcidata_tracker_count_statewise { get; set; }
        public virtual DbSet<vw_gpdcidata_tracker_count_districtwise> obj_vw_gpdcidata_tracker_count_districtwise { get; set; }
        public virtual DbSet<vw_gpdcidata_tracker_count_blockwise> obj_vw_gpdcidata_tracker_count_blockwise { get; set; }
        public virtual DbSet<vw_gpdcidata_tracker_count_gpwise> obj_vw_gpdcidata_tracker_count_gpwise { get; set; }
        public virtual DbSet<abhy_baseline_emailid> obj_abhy_baseline_emailid { get; set; }
        public virtual DbSet<abhy_baseline_gp_upload> obj_abhy_baseline_gp_upload { get; set; }
        public virtual DbSet<abhy_baseline_gp_livestock> obj_abhy_baseline_gp_livestock { get; set; }
        public virtual DbSet<abhy_baseline_gp_surfacewater> obj_abhy_baseline_gp_surfacewater { get; set; }
        public virtual DbSet<abhy_baseline_gp_groundwater> obj_abhy_baseline_gp_groundwater { get; set; }
        public virtual DbSet<abhy_baseline_gp_existingwells> obj_abhy_baseline_gp_existingwells { get; set; }
        public virtual DbSet<abhy_baseline_gp_watereff> obj_abhy_baseline_gp_watereff { get; set; }

        public virtual DbSet<abhy_baseline_gp_remarks> obj_abhy_baseline_gpdata_remarks { get; set; }
        public virtual DbSet<abhy_block_gp_area_info> obj_abhy_block_gp_area_info { get; set; }
        public virtual DbSet<master_list_gp_wsp> obj_master_list_gp_wsp { get; set; }

        public virtual DbSet<vw_orderwise_state_district_block_gp_area_info> obj_vw_orderwise_state_district_block_gp_area_info { get; set; }
        public virtual DbSet<Training_dropdown_info> obj_Training_dropdown_info { get; set; }
        public virtual DbSet<abhy_baseline_drinkingwater_irrigation_gpdata> obj_abhy_baseline_drinkingwater_irrigation_gpdata { get; set; }

        public virtual DbSet<abhy_baseline_borewell_tubewell_gpdata> obj_abhy_baseline_borewell_tubewell_gpdata { get; set; }

        public virtual DbSet<abhy_baseline_gwl_observation_wells_gpdata> obj_abhy_baseline_gwl_observation_wells_gpdata { get; set; }

        public virtual DbSet<abhy_baseline_gw_qualitydata_gpdata> obj_abhy_baseline_gw_qualitydata_gpdata { get; set; }

        public virtual DbSet<abhy_baseline_water_management_measures_gpdata> obj_abhy_baseline_water_management_measures_gpdata { get; set; }

        public virtual DbSet<abhy_baseline_sarpanchdetails_gpdata> obj_abhy_baseline_sarpanchdetails_gpdata { get; set; }

        public virtual DbSet<abhy_tender_images_new> obj_abhy_tender_images_new { get; set; }

        public virtual DbSet<abhy_baseline_waterbodies_ponds_gpdata> obj_abhy_baseline_waterbodies_ponds_gpdata { get; set; }

        public virtual DbSet<abhy_baseline_adoption_gpdata> obj_abhy_baseline_adoption_gpdata { get; set; }

        public virtual DbSet<abhy_baseline_social_org_gpdata> obj_abhy_baseline_social_org_gpdata { get; set; }

        public virtual DbSet<abhy_waterdraft_industry_new> obj_abhy_waterdraft_industry_new { get; set; }

        public virtual DbSet<abhy_waterdraft_other_new> obj_abhy_abhy_waterdraft_other_new { get; set; }

        public virtual DbSet<abhy_groundwater_levels2_new1> obj_abhy_groundwater_levels2_new1 { get; set; }


        //new module DLI VERIFIFATION

        public virtual DbSet<abhy_dli_one> objabhy_dli_one { get; set; }
        public virtual DbSet<abhy_dli_two> objabhy_dli_two { get; set; }
        public virtual DbSet<abhy_dli_three> objabhy_dli_three { get; set; }
        public virtual DbSet<abhy_dli_four> objabhy_dli_four { get; set; }
        public virtual DbSet<abhy_dli_five> objabhy_dli_five { get; set; }

        // DLI upload tables
        public virtual DbSet<abhy_dli_one_upload_row1> obj_abhy_dli_one_upload_row1 { get; set; }
        public virtual DbSet<abhy_dli_one_upload_row2> obj_abhy_dli_one_upload_row2 { get; set; }
        public virtual DbSet<abhy_dli_one_upload_row3> obj_abhy_dli_one_upload_row3 { get; set; }
        public virtual DbSet<abhy_dli_one_upload_row4> obj_abhy_dli_one_upload_row4 { get; set; }
        public virtual DbSet<abhy_dli_one_upload_row5> obj_abhy_dli_one_upload_row5 { get; set; }
        public virtual DbSet<abhy_dli_one_upload_row6> obj_abhy_dli_one_upload_row6 { get; set; }

        public virtual DbSet<abhy_dli_two_upload_row1> obj_abhy_dli_two_upload_row1 { get; set; }
        public virtual DbSet<abhy_dli_two_upload_row2> obj_abhy_dli_two_upload_row2 { get; set; }
        public virtual DbSet<abhy_dli_two_upload_row3> obj_abhy_dli_two_upload_row3 { get; set; }
        public virtual DbSet<abhy_dli_two_upload_row4> obj_abhy_dli_two_upload_row4 { get; set; }

        public virtual DbSet<abhy_dli_three_upload_row1> obj_abhy_dli_three_upload_row1 { get; set; }

        public virtual DbSet<abhy_dli_four_upload_row1> obj_abhy_dli_four_upload_row1 { get; set; }
        public virtual DbSet<abhy_dli_four_upload_row2> obj_abhy_dli_four_upload_row2 { get; set; }

        public virtual DbSet<abhy_dli_five_upload_row1> obj_abhy_dli_five_upload_row1 { get; set; }

        public virtual DbSet<abhy_frameworkmatrix_new> obj_abhy_frameworkmatrix_new { get; set; }


        public virtual DbSet<abhy_waterdraft_domestic_new> obj_abhy_waterdraft_domestic_new { get; set; }

        //new tables social mointoruing 14 tables

        public virtual DbSet<abhy_socialmgt_gramdb> obj_abhy_socialmgt_gramdb { get; set; }
        public virtual DbSet<abhy_socialmgt_sanitation_committee> obj_abhy_socialmgt_sanitation_committee { get; set; }
        public virtual DbSet<abhy_socialmgt_support_agency> obj_abhy_socialmgt_support_agency { get; set; }
        public virtual DbSet<abhy_socialmgt_other_local_institues> obj_abhy_socialmgt_other_local_institues { get; set; }
        public virtual DbSet<abhy_socialmgt_tol_population> obj_abhy_socialmgt_tol_population { get; set; }
        public virtual DbSet<abhy_socialmgt_socio_economic> obj_abhy_socialmgt_socio_economic { get; set; }
        public virtual DbSet<abhy_socialmgt_vulnerable_communities> obj_abhy_socialmgt_vulnerable_communities { get; set; }
        public virtual DbSet<abhy_socialmgt_farmers> obj_abhy_socialmgt_farmers { get; set; }
        public virtual DbSet<abhy_socialmgt_iec_activities> obj_abhy_socialmgt_iec_activities { get; set; }
        public virtual DbSet<abhy_socialmgt_village_meetings> obj_abhy_socialmgt_village_meetings { get; set; }
        public virtual DbSet<abhy_socialmgt_community_feedback> obj_abhy_socialmgt_community_feedback { get; set; }
        public virtual DbSet<abhy_socialmgt_social_audit> obj_abhy_socialmgt_social_audit { get; set; }
        public virtual DbSet<abhy_socialmgt_grm> obj_abhy_socialmgt_grm { get; set; }
        public virtual DbSet<abhy_socialmgt_capacity_building> obj_abhy_socialmgt_capacity_building { get; set; }

        //new tables mis 
        public virtual DbSet<abhy_mis_pip_activity> obj_abhy_mis_pip_activity { get; set; }
        public virtual DbSet<abhy_mis_awp_activity> obj_abhy_mis_awp_activity { get; set; }
        public virtual DbSet<abhy_mis_pip_form> obj_abhy_mis_pip_form { get; set; }
        public virtual DbSet<abhy_mis_awp_form> obj_abhy_mis_awp_form { get; set; }

        //new tables b components
        public virtual DbSet<abhy_mis_pip_b_activity> obj_abhy_mis_pip_b_activity { get; set; }
        public virtual DbSet<abhy_mis_awp_b_activity> obj_abhy_mis_awp_b_activity { get; set; }
        public virtual DbSet<abhy_mis_pip_b_form> obj_abhy_mis_pip_b_form { get; set; }
        public virtual DbSet<abhy_mis_awp_b_form> obj_abhy_mis_awp_b_form { get; set; }

        public virtual DbSet<abhy_mis_pip_awp_feedback> obj_abhy_mis_pip_awp_feedback { get; set; }

        //finacial progress 
        public virtual DbSet<abhy_financialprogress_dropdown> obj_abhy_financialprogress_dropdown { get; set; }
        public virtual DbSet<abhy_financialprogress_insertdata_vw> obj_abhy_financialprogress_insertdata_vw { get; set; }
        public virtual DbSet<abhy_financialprogress_insertdata> obj_abhy_financialprogress_insertdata { get; set; }

        //finacial progress  b component
        public virtual DbSet<abhy_financialprogress_b_dropdown> obj_abhy_financialprogress_b_dropdown { get; set; }
        public virtual DbSet<abhy_financialprogress_b_insertdata> obj_abhy_financialprogress_b_insertdata { get; set; }

        public virtual DbSet<abhy_financialprogress_b_insertdata_vw> obj_abhy_financialprogress_b_insertdata_vw { get; set; }
        public virtual DbSet<abhy_financialprogress_type_download> obj_abhy_financialprogress_type_download { get; set; }

        //physical monitoring dropdown
        public virtual DbSet<abhy_physicalmonitoring_dropdown> obj_abhy_physicalmonitoring_dropdown { get; set; }
        //abhishek
        public virtual DbSet<abhy_physicalmonitoring_dropdown_new> obj_abhy_physicalmonitoring_dropdown_new { get; set; }
        //abhi0704
        public virtual DbSet<abhy_physicalmonitoring_dropdown_new2> obj_abhy_physicalmonitoring_dropdown_new2 { get; set; }

        // abhi0704
        public virtual DbSet<abhy_physicalmonitoring_dropdown_new3> obj_abhy_physicalmonitoring_dropdown_new3 { get; set; }

        public virtual DbSet<abhy_physicalmonitoring_insertdata> obj_abhy_physicalmonitoring_insertdata { get; set; }
        public virtual DbSet<abhy_fund_release_monitoring_dd> obj_abhy_fund_release_monitoring_dd { get; set; }

        //procurement milestone 
        public virtual DbSet<abhy_procurement_milestone_dropdown> obj_abhy_procurement_milestone_dropdown { get; set; }
        public virtual DbSet<abhy_physicalmonitoring_insertdata_view> obj_abhy_physicalmonitoring_insertdata_view { get; set; }
        public virtual DbSet<abhy_procurement_milestone_insertdata> obj_abhy_procurement_milestone_insertdata { get; set; }
        public virtual DbSet<incentive_fund_utilization> obj_incentive_fund_utilization { get; set; }
        public virtual DbSet<abhy_procurement_milestone_type_download> obj_abhy_procurement_milestone_type_download { get; set; }

        //fund release
        public virtual DbSet<abhy_phymon_fund_release> obj_abhy_phymon_fund_release { get; set; }

        //contact details NPMU/SPMU/CGWB
        public virtual DbSet<abhy_contact_npmu> obj_abhy_contact_npmu { get; set; }
        public virtual DbSet<abhy_contact_spmu> obj_abhy_contact_spmu { get; set; }
        public virtual DbSet<abhy_contact_cgwb> obj_abhy_contact_cgwb { get; set; }


        //new feedback form

        public virtual DbSet<abhy_feedback_new> obj_abhy_feedback_new { get; set; }

        // environment safeguard tool

        public virtual DbSet<abhy_safeguard_tool_download> obj_abhy_safeguard_tool_download { get; set; }
        public virtual DbSet<abhy_safeguard_tool> obj_abhy_safeguard_tool { get; set; }


        public virtual DbSet<abhy_disclosure> obj_abhy_disclosure { get; set; }
        public virtual DbSet<abhy_disclosure_23> obj_abhy_disclosure_23 { get; set; }

        public virtual DbSet<abhy_training_manuals> obj_abhy_training_manuals { get; set; }


        public virtual DbSet<abhy_mis_wsp_approved> obj_abhy_mis_wsp_approved { get; set; }

        //state officer regs
        public virtual DbSet<abhy_stateofficer_regs> obj_abhy_stateofficer_regs { get; set; }

        //new table for dli mow

        public virtual DbSet<abhy_dli_one_upload_row7> obj_abhy_dli_one_upload_row7 { get; set; }

        public virtual DbSet<abhy_dli_one_upload_row8> obj_abhy_dli_one_upload_row8 { get; set; }

        public virtual DbSet<abhy_wsp_parameters> obj_abhy_wsp_parameters { get; set; }

        public virtual DbSet<abhy_email_verification> obj_abhy_email_verification { get; set; }

        public virtual DbSet<abhy_fund_requirements> obj_abhy_fund_requirements { get; set; }

        public virtual DbSet<abhy_tbl_error> obj_abhy_tbl_error { get; set; }

        public virtual DbSet<abhy_forgotpwd> obj_abhy_forgotpwd { get; set; }

        //abhy_logs
        public virtual DbSet<abhy_logs> obj_abhy_logs { get; set; }
        public virtual DbSet<abhy_DLI> obj_abhy_DLI { get; set; }

        //mstr_tables  //chetan mstr
        public virtual DbSet<mstr_states> obj_mstr_states { get; set; }
        public virtual DbSet<mstr_districts> obj_mstr_districts { get; set; }
        public virtual DbSet<mstr_blocks> obj_mstr_blocks { get; set; }
        public virtual DbSet<mstr_grampanchayat> obj_mstr_grampanchayat { get; set; }
        public virtual DbSet<abhy_wsp_email_info> obj_abhy_wsp_email_info { get; set; }

        public virtual DbSet<social_socialmgt_other_local_institues> obj_social_socialmgt_other_local_institues { get; set; }
        public virtual DbSet<social_socialmgt_support_agency> obj_social_socialmgt_support_agency { get; set; }
        public virtual DbSet<social_socialmgt_farmers> obj_social_socialmgt_farmers { get; set; }
        public virtual DbSet<social_socialmgt_village_meetings> obj_social_socialmgt_village_meetings { get; set; }
        public virtual DbSet<social_socialmgt_village_meetings_vw> obj_social_socialmgt_village_meetings_vw { get; set; }
        public virtual DbSet<social_socialmgt_grm> obj_social_socialmgt_grm { get; set; }
        public virtual DbSet<social_socialmgt_remark> obj_social_socialmgt_remarks { get; set; }
        public virtual DbSet<social_sarpanchdetails> obj_social_sarpanchdetails { get; set; }
        public virtual DbSet<incentive_demand> obj_incentive_demand { get; set; }
        public virtual DbSet<incentive_supply> obj_incentive_supply { get; set; }
        public virtual DbSet<incentive_other> obj_incentive_other { get; set; }

        public virtual DbSet<demandside_dli3_new> obj_demandside_dli3_new { get; set; }
        public virtual DbSet<vw_dli3_phase2_lop> obj_vw_dli3_phase2_lop { get; set; }
        public virtual DbSet<demandside_dli3_new_dth> obj_demandside_dli3_new_dth { get; set; }
        public virtual DbSet<demandside_dli3_new_k> obj_demandside_dli3_new_k { get; set; }
        public virtual DbSet<demandside_dli3_new_k1> obj_demandside_dli3_new_k1 { get; set; }
        public virtual DbSet<supplyside_dli3_new> obj_supplyside_dli3_new { get; set; }
        public virtual DbSet<supplyside_dli3_new_dth> obj_supplyside_dli3_new_dth { get; set; }
        public virtual DbSet<supplyside_dli3_new_k> obj_supplyside_dli3_new_k { get; set; }
        public virtual DbSet<demandside_dli3_addnew> obj_demandside_dli3_addnew { get; set; }
        public virtual DbSet<demandside_dli3_phase2addnew> obj_demandside_dli3_phase2addnew { get; set; }
        public virtual DbSet<lop1demandside_dli3_phase2addnew> obj_lop1demandside_dli3_phase2addnew { get; set; }
        public virtual DbSet<dli3_demandside_excelphase1_2> obj_dli3_demandside_excelphase1_2 { get; set; }
        public virtual DbSet<DLI3_upload_document_new> obj_abhy_DLI3_upload_document_new { get; set; }
        public virtual DbSet<DLI3_admittedclaim> obj_DLI3_admittedclaim { get; set; }
      
        //WSP 2024-25
        #region 
        public virtual DbSet<abhy_wsp_master_data_24> obj_abhy_wsp_master_data_24 { get; set; }
        public virtual DbSet<abhy_wsp_gpdata_new_24> obj_abhy_wsp_gpdata_new_24 { get; set; }
        public virtual DbSet<abhy_wsp_gram_images_24> obj_abhy_wsp_gram_images_24 { get; set; }
        public virtual DbSet<abhy_wsp_gwl_24> obj_abhy_wsp_gwl_24 { get; set; }
        public virtual DbSet<abhy_wsp_gwq_24> obj_abhy_wsp_gwq_24 { get; set; }
        public virtual DbSet<abhy_wsp_mapview_image_path> obj_abhy_wsp_mapview_image_path { get; set; }
        public virtual DbSet<abhy_wsp_wateravailbility_new_24> obj_abhy_wsp_wateravailbility_new_24 { get; set; }
        public virtual DbSet<abhy_uti_waterdraft_domestic_new_24> obj_abhy_uti_waterdraft_domestic_new_24 { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_meta_24> obj_abhy_waterdraft_irrigation_meta_24 { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_data_24> obj_abhy_waterdraft_irrigation_data_24 { get; set; }
        public virtual DbSet<abhy_waterdraft_industry_24> obj_abhy_waterdraft_industry_24 { get; set; }
        public virtual DbSet<abhy_waterdraft_other_24> obj_abhy_waterdraft_other_24 { get; set; }  
        public virtual DbSet<abhy_wsp_waterbalance_new_24> obj_abhy_wsp_waterbalance_new_24 { get; set; }
        public virtual DbSet<abhy_wsp_waterbudget_new_24> obj_abhy_wsp_waterbudget_new_24 { get; set; }
        public virtual DbSet<abhy_wsp_demand_meta_24> obj_abhy_wsp_demand_meta_24 { get; set; }
        public virtual DbSet<abhy_wsp_demand_sprinkler_24> obj_abhy_wsp_demand_sprinkler_24 { get; set; }
        public virtual DbSet<abhy_wsp_demand_drip_24> obj_abhy_wsp_demand_drip_24 { get; set; }
        public virtual DbSet<abhy_wsp_demand_pipeline_24> obj_abhy_wsp_demand_pipeline_24 { get; set; }
        public virtual DbSet<abhy_wsp_demand_change_crop_24> obj_abhy_wsp_demand_change_crop_24 { get; set; }
        public virtual DbSet<abhy_wsp_demand_anyother_24> obj_abhy_wsp_demand_anyother_24 { get; set; }
        public virtual DbSet<abhy_wsp_demand_fund_details_24> obj_abhy_wsp_demand_fund_details_24 { get; set; }
        public virtual DbSet<abhy_artificial_recharge_st_data_24> obj_abhy_artificial_recharge_st_data_24 { get; set; }
        public virtual DbSet<abhy_water_conservation_st_data_24> obj_abhy_water_conservation_st_data_24 { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_member_24> obj_abhy_wsp_pgwm_committee_member_24 { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_meeting_24> obj_abhy_wsp_pgwm_committee_meeting_24 { get; set; }
        public virtual DbSet<abhy_wsp_dpmu_declaration_24> obj_abhy_wsp_dpmu_declaration_24 { get; set; }
        public virtual DbSet<abhy_mis_wsp_approved_24> obj_abhy_mis_wsp_approved_24 { get; set; }
        #endregion

        #region WSP 2023-24 Updation
        public virtual DbSet<abhy_wsp_gpdata_new_23> obj_abhy_wsp_gpdata_new_23 { get; set; }
        public virtual DbSet<abhy_wsp_gram_images_23> obj_abhy_wsp_gram_images_23 { get; set; }
        public virtual DbSet<abhy_wsp_gwl_23> obj_abhy_wsp_gwl_23 { get; set; }
        public virtual DbSet<abhy_wsp_gwq_23> obj_abhy_wsp_gwq_23 { get; set; }
        public virtual DbSet<abhy_wsp_wateravailbility_new_23> obj_abhy_wsp_wateravailbility_new_23 { get; set; }
        public virtual DbSet<abhy_uti_waterdraft_domestic_new_23> obj_abhy_uti_waterdraft_domestic_new_23 { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_meta_23> obj_abhy_waterdraft_irrigation_meta_23 { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_data_23> obj_abhy_waterdraft_irrigation_data_23 { get; set; }
        public virtual DbSet<abhy_waterdraft_industry_23> obj_abhy_waterdraft_industry_23 { get; set; }
        public virtual DbSet<abhy_waterdraft_other_23> obj_abhy_waterdraft_other_23 { get; set; }
        public virtual DbSet<abhy_wsp_waterbalance_new_23> obj_abhy_wsp_waterbalance_new_23 { get; set; }
        public virtual DbSet<abhy_wsp_waterbudget_new_23> obj_abhy_wsp_waterbudget_new_23 { get; set; }

        public virtual DbSet<abhy_wsp_demand_meta_23> obj_abhy_wsp_demand_meta_23 { get; set; }
        public virtual DbSet<abhy_wsp_demand_sprinkler_23> obj_abhy_wsp_demand_sprinkler_23 { get; set; }
        public virtual DbSet<abhy_wsp_demand_drip_23> obj_abhy_wsp_demand_drip_23 { get; set; }
        public virtual DbSet<abhy_wsp_demand_pipeline_23> obj_abhy_wsp_demand_pipeline_23 { get; set; }
        public virtual DbSet<abhy_wsp_demand_change_crop_23> obj_abhy_wsp_demand_change_crop_23 { get; set; }
        public virtual DbSet<abhy_wsp_demand_anyother_23> obj_abhy_wsp_demand_anyother_23 { get; set; }
        public virtual DbSet<abhy_wsp_demand_fund_details_23> obj_abhy_wsp_demand_fund_details_23 { get; set; }
        public virtual DbSet<abhy_artificial_recharge_st_data_23> obj_abhy_artificial_recharge_st_data_23 { get; set; }
        public virtual DbSet<abhy_water_conservation_st_data_23> obj_abhy_water_conservation_st_data_23 { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_member_23> obj_abhy_wsp_pgwm_committee_member_23 { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_meeting_23> obj_abhy_wsp_pgwm_committee_meeting_23 { get; set; }
        public virtual DbSet<abhy_wsp_dpmu_declaration_23> obj_abhy_wsp_dpmu_declaration_23 { get; set; }
        #endregion

        //WSP 2024-25_update
        #region 
        public virtual DbSet<abhy_wsp_master_data_24_update> obj_abhy_wsp_master_data_24_update { get; set; }
        public virtual DbSet<abhy_wsp_gpdata_new_24_update> obj_abhy_wsp_gpdata_new_24_update { get; set; }
        public virtual DbSet<abhy_wsp_gram_images_24_update> obj_abhy_wsp_gram_images_24_update { get; set; }
        public virtual DbSet<abhy_wsp_gwl_24_update> obj_abhy_wsp_gwl_24_update { get; set; }
        public virtual DbSet<abhy_wsp_gwq_24_update> obj_abhy_wsp_gwq_24_update { get; set; }
        public virtual DbSet<abhy_wsp_wateravailbility_new_24_update> obj_abhy_wsp_wateravailbility_new_24_update { get; set; }
        public virtual DbSet<abhy_uti_waterdraft_domestic_new_24_update> obj_abhy_uti_waterdraft_domestic_new_24_update { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_meta_24_update> obj_abhy_waterdraft_irrigation_meta_24_update { get; set; }
        public virtual DbSet<abhy_waterdraft_irrigation_data_24_update> obj_abhy_waterdraft_irrigation_data_24_update { get; set; }
        public virtual DbSet<abhy_waterdraft_industry_24_update> obj_abhy_waterdraft_industry_24_update { get; set; }
        public virtual DbSet<abhy_waterdraft_other_24_update> obj_abhy_waterdraft_other_24_update { get; set; }
        public virtual DbSet<abhy_wsp_waterbalance_new_24_update> obj_abhy_wsp_waterbalance_new_24_update { get; set; }
        public virtual DbSet<abhy_wsp_waterbudget_new_24_update> obj_abhy_wsp_waterbudget_new_24_update { get; set; }
        public virtual DbSet<abhy_wsp_demand_meta_24_update> obj_abhy_wsp_demand_meta_24_update { get; set; }
        public virtual DbSet<abhy_wsp_demand_sprinkler_24_update> obj_abhy_wsp_demand_sprinkler_24_update { get; set; }
        public virtual DbSet<abhy_wsp_demand_drip_24_update> obj_abhy_wsp_demand_drip_24_update { get; set; }
        public virtual DbSet<abhy_wsp_demand_pipeline_24_update> obj_abhy_wsp_demand_pipeline_24_update { get; set; }
        public virtual DbSet<abhy_wsp_demand_change_crop_24_update> obj_abhy_wsp_demand_change_crop_24_update { get; set; }
        public virtual DbSet<abhy_wsp_demand_anyother_24_update> obj_abhy_wsp_demand_anyother_24_update { get; set; }
        public virtual DbSet<abhy_wsp_demand_fund_details_24_update> obj_abhy_wsp_demand_fund_details_24_update { get; set; }
        public virtual DbSet<abhy_artificial_recharge_st_data_24_update> obj_abhy_artificial_recharge_st_data_24_update { get; set; }
        public virtual DbSet<abhy_water_conservation_st_data_24_update> obj_abhy_water_conservation_st_data_24_update { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_member_24_update> obj_abhy_wsp_pgwm_committee_member_24_update { get; set; }
        public virtual DbSet<abhy_wsp_pgwm_committee_meeting_24_update> obj_abhy_wsp_pgwm_committee_meeting_24_update { get; set; }
        public virtual DbSet<abhy_wsp_dpmu_declaration_24_update> obj_abhy_wsp_dpmu_declaration_24_update { get; set; }
        public virtual DbSet<abhy_mis_wsp_approved_24_update> obj_abhy_mis_wsp_approved_24_update { get; set; }

        //DLI3 2025
        public virtual DbSet<demandside_dli3_new_2025> obj_demandside_dli3_new_2025 { get; set; }
        public virtual DbSet<demandside_dli3_addnew_2025> obj_demandside_dli3_addnew_2025 { get; set; }
        public virtual DbSet<vw_dli3_phase1_total_summary_24_25> obj_vw_dli3_phase1_total_summary_24_25 { get; set; }
        public virtual DbSet<vw_dli3_combine_sd_lop_phase2_report_24> obj_vw_dli3_combine_sd_lop_phase2_report_24 { get; set; }
        public virtual DbSet<vw_dli3_demand_phase1_report_24_25> obj_vw_dli3_demand_phase1_report_24_25 { get; set; }
        public virtual DbSet<vw_dli3_lop_phase2_demand_report_24> obj_vw_dli3_lop_phase2_demand_report_24 { get; set; }
        public virtual DbSet<lop1demandside_dli3_phase2addnew_2025> obj_lop1demandside_dli3_phase2addnew_2025 { get; set; }
        public virtual DbSet<vw_dli3_phase2_lop_24> obj_vw_dli3_phase2_lop_24 { get; set; }
        public virtual DbSet<DLI3_upload_document_new_2025> obj_abhy_DLI3_upload_document_new_2025 { get; set; }
        public virtual DbSet<supplyside_dli3_new2025> obj_supplyside_dli3_new2025 { get; set; }
        public virtual DbSet<vw_dli3_supply_phase1_report_24_25> obj_vw_dli3_supply_phase1_report_24_25 { get; set; }
        public virtual DbSet<vw_dli3_lop_phase2_supply_report_24> obj_vw_dli3_lop_phase2_supply_report_24 { get; set; }
        public virtual DbSet<supplyside_dli3_new2025_dth> obj_supplyside_dli3_new2025_dth { get; set; }
        public virtual DbSet<supplyside_dli3_new_k2025> obj_supplyside_dli3_new_k2025 { get; set; }
        #endregion


        //Water Budget - 25-26
        #region
        public virtual DbSet<abhy_ml_with_block_gp_area_info_new> obj_abhy_ml_with_block_gp_area_info_new { get; set; }
        public virtual DbSet<wb_grampanchayat_basic_info> obj_wb_grampanchayat_basic_info { get; set; }
        public virtual DbSet<wb_est_ground_water_avail> obj_wb_est_ground_water_avail { get; set; }
        public virtual DbSet<wb_est_avai_rainfall_supply_intervention> obj_wb_est_avai_rainfall_supply_intervention { get; set; }
        public virtual DbSet<wb_avai_surface_water_stor> obj_wb_avai_surface_water_stor { get; set; }
        public virtual DbSet<wb_art_rech_water_cons_structure> obj_wb_art_rech_water_cons_structure { get; set; }
        public virtual DbSet<wb_water_avai_transported_water> obj_wb_water_avai_transported_water { get; set; }
        public virtual DbSet<wb_water_avai_non_potable> obj_wb_water_avai_non_potable { get; set; }
        public virtual DbSet<wb_tot_water_avail> obj_wb_tot_water_avail { get; set; }
        public virtual DbSet<wb_water_drink_ind_req> obj_wb_water_drink_ind_req { get; set; }
        public virtual DbSet<wb_area_crops_irr_water_req> obj_wb_area_crops_irr_water_req { get; set; }
        public virtual DbSet<wb_total_water_req> obj_wb_total_water_req { get; set; }
        public virtual DbSet<wb_water_balance> obj_wb_water_balance { get; set; }
        public virtual DbSet<wb_ref_type_of_structure> obj_wb_ref_type_of_structure { get; set; }
        public virtual DbSet<wb_ref_type_of_crop_net_irr_req> obj_wb_ref_type_of_crop_net_irr_req { get; set; }
        public virtual DbSet<wb_reject_status> obj_wb_reject_status { get; set; }
        public virtual DbSet<WbRejectStatusView> WbRejectStatusView { get; set; }
        public virtual DbSet<WbBasicInfoViewModel> wb_basicinfoview { get; set; }
        public virtual DbSet<WBEstGroundWaterAvailViewModel> wb_estgroundwateravailview { get; set; }
        public virtual DbSet<WBEstRainfallSupplyInterventionViewModel> wb_estavairainfallsupplyinterventionview { get; set; }
        public virtual DbSet<WBSurfaceWaterStorViewModel> wb_avaisurfacewaterstorview { get; set; }
        public virtual DbSet<WBARWCstructureViewModel> wb_artrechwaterconsstructureview { get; set; }
        public virtual DbSet<WBWaterAvaiTransportedWaterViewModel> wb_wateravaitransportedwaterview { get; set; }
        public virtual DbSet<WBWaterAvaiNonPotableViewModel> wb_wateravainon_potableview { get; set; }
        public virtual DbSet<WBTotWaterAvailViewModel> wb_totwateravailview { get; set; }
        public virtual DbSet<WBWaterDrinkIndReqViewModel> wb_waterdrinkindreqview { get; set; }
        public virtual DbSet<WBAreaCropsViewModel> wb_areacropsview { get; set; }
        public virtual DbSet<WBTotalWaterReqViewModel> wb_totalwaterreqview { get; set; }
        public virtual DbSet<WBWaterBalanceViewModel> wb_waterbalanceview { get; set; }

        #endregion



    }
}
