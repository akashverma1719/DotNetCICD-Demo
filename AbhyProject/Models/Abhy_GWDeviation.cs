using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class Abhy_GWDeviation
    {
    }

    [Table("abhy_water_utilization", Schema = "ingwb")]
    public class Abhy_WaterUtilization_Approval
    {
        [Key]
        public long awuid { get; set; }
        public string site_type { get; set; }
        public string site_name { get; set; }
        public string depth { get; set; }
        public string date { get; set; }
        public string month { get; set; }
        public string wl_2014 { get; set; }
        public string wl_2015 { get; set; }
        public string wl_2016 { get; set; }


        public string wl_2017 { get; set; }
        public string wl_2018 { get; set; }
        public string wl_2019 { get; set; }

        public string state { get; set; }
        public string dist { get; set; }
        public string block { get; set; }
        public string avg { get; set; }
        public string accept { get; set; }
        public string Reject { get; set; }
        public string ApprovedBy { get; set; }
        public string utilization { get; set; }

        public string site_id { get; set; }

        public string jan_14 { get; set; }
        public string jan_15 { get; set; }
        public string jan_16 { get; set; }
        public string jan_17 { get; set; }

        public string jan_18 { get; set; }

        public string jan_19 { get; set; }

        public string may_14 { get; set; }
        public string may_15 { get; set; }
        public string may_16 { get; set; }
        public string may_17 { get; set; }

        public string may_18 { get; set; }

        public string may_19 { get; set; }

        public string nov_14 { get; set; }
        public string nov_15 { get; set; }
        public string nov_16 { get; set; }
        public string nov_17 { get; set; }

        public string nov_18 { get; set; }
        public string nov_19 { get; set; }


        public string aug_14 { get; set; }
        public string aug_15 { get; set; }
        public string aug_16 { get; set; }
        public string aug_17 { get; set; }

        public string aug_18 { get; set; }

        public string aug_19 { get; set; }
        public string UserId { get; set; }
        public string manualdata { get; set; }


    }


    [Table("abhy_feedback", Schema = "ingwb")]
    public class abhy_feedback
    {
        [Key]
        public long afid { get; set; }
        public string document { get; set; }
        public int apdid { get; set; }
        public string name { get; set; }

        public string mobile { get; set; }
        public string address { get; set; }
        public string agency { get; set; }
        public string feedback { get; set; }
        public string UserId { get; set; }
        public int fkid { get; set; }

    }



    [Table("abhy_gwl_quantity1", Schema = "public")]
    public class Abhy_gwl_quantity1
    {
        [Key]
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        [Column("NETGWAVAIL(Annual Groundwater Available)")]
        public string Gwl_Available { get; set; }

        public string area_GWB { get; set; }
        [Column("WITHDRAWAL(Annual Groundwater Withdrawl) cubicmeter")]
        public string gw_Withdrawl { get; set; }
        public string STATUS_11 { get; set; }
        public string STAGEGWDEV { get; set; }

        public long gwlqid { get; set; }

    }

    [Table("abhy_dashboard_count", Schema = "public")]
    public class Abhy_dashboard_count
    {
        [Key]
        public string States { get; set; }
        public string Geographical_area { get; set; }
        public string Population { get; set; }

        public string Villages { get; set; }


        public long dcid { get; set; }

    }



    [Table("abhy_statelevel_inistutional_index", Schema = "public")]
    public class Abhy_Statelevel_Inistutional_Index
    {
        [Key]
        public long asliiid { get; set; }
        public string gw_specialits_tp { get; set; }
        public string gw_specialits_fp { get; set; }
        public string gw_modelers_tp { get; set; }

        public string gw_modelers_fp { get; set; }

        public string rs_gis_tp { get; set; }
        public string rs_gis_fp { get; set; }
        public string social_tp { get; set; }

        public string social_fp { get; set; }


        public string data_analystics_tp { get; set; }
        public string data_analystics_fp { get; set; }
        public string economics_tp { get; set; }

        public string economics_fp { get; set; }

        public string chemistry_tp { get; set; }
        public string chemistry_fp { get; set; }
        public string environment_tp { get; set; }

        public string environment_fp { get; set; }
        public string agricultural_tp { get; set; }

        public string agricultural_fp { get; set; }
        public string UserId { get; set; }
        public string statename { get; set; }
    }



    [Table("abhy_operatiionalization_of_Systems", Schema = "public")]
    public class Abhy_Operatiionalization_Of_Systems
    {
        [Key]
        public long aoosid { get; set; }
        public string bi_weekly_or_monthly { get; set; }
        public string frequecy_data_collection_gw_qulaity_and_Quntity { get; set; }
        public string frequecy_data_collection_is_done_sessionally { get; set; }

        public string Dwlr_installed { get; set; }

        public string nabl_accredited_labs { get; set; }
        public string public_viewing { get; set; }
        public string water_qualityandquantity { get; set; }

        public string analysis_for_qualityandQuantity { get; set; }


        public string mis_within_1_months { get; set; }
        public string mis_within_3_months { get; set; }



        public string no_of_info_collection { get; set; }
        public string regular_basics { get; set; }
        public string no_of_Observation_wells_DWL { get; set; }

        public string no_of_Observation_wells_GV { get; set; }


        public string no_of_Observation_wells_GE { get; set; }
        public string no_of_Observation_wells_GL { get; set; }

        public string no_of_Observation_wells_GQ_Collected { get; set; }
        public string no_of_Observation_wells_GQ_not_collected { get; set; }
        public string UserId { get; set; }
        public string statename { get; set; }
    }




    [Table("abhy_inist_ind_cap", Schema = "public")]
    public class Abhy_Inistutional_capacity
    {
        [Key]
        public long aicid { get; set; }
        public string UserId { get; set; }
        public string technical_Trainings { get; set; }
        public string registered_entities { get; set; }
        public string gw_specialists_tp { get; set; }
        public string gw_specialists_fp { get; set; }
        public string grampanchayat_level { get; set; }
        public string functional_meetings_for_mnth { get; set; }
        public string data_entry_operator_tp { get; set; }
        public string data_entry_operator_fp { get; set; }



        public string Trained_state_or_PIA { get; set; }
        public string Social_sciences_Specialists_tp { get; set; }


        public string Social_sciences_Specialists_fp { get; set; }

        public string O_and_M { get; set; }
        public string statename { get; set; }
    }

    [Table("abhy_salient_features", Schema = "ingwb")]
    public class abhy_fws
    {
        [Key]
        public long fwsid { get; set; }
        public string hydrological_year_bl { get; set; }
        public string hydrological_year_cy { get; set; }
        public string farmers_participate_bl { get; set; }
        public string farmers_participate_cy { get; set; }
        public string farmers_meet_bl { get; set; }
        public string farmers_meet_cy { get; set; }
        public string primary_learning_material_bl { get; set; }
        public string primary_learning_material_cy { get; set; }
        public string farming_plotss_bl { get; set; }
        public string farming_plotss_cy { get; set; }
        public string educational_methods_bl { get; set; }
        public string educational_methods_cy { get; set; }
        public string hydro_ecosystem_analysis_bl { get; set; }
        public string hydro_ecosystem_analysis_cy { get; set; }
        public string experimental_plots_bl { get; set; }
        public string experimental_plots_cy { get; set; }


    }


    [Table("abhy_pgm_adaptation", Schema = "ingwb")]
    public class Abhy_pgm_adaptation1
    {
        [Key]
        public long apaid { get; set; }
        public string national_plans_and_programmes_bl { get; set; }
        public string national_plans_and_programmes_cy { get; set; }
        public string national_Action_plan_on_Climate_bl { get; set; }
        public string national_Action_plan_on_Climate_cy { get; set; }
        public string national_Water_Mission_on_Climate_bl { get; set; }
        public string national_Water_Mission_on_Climate_cy { get; set; }
        public string national_Mission_on_Sustainable_Agriculture_bl { get; set; }
        public string national_Mission_on_Sustainable_Agriculture_cy { get; set; }
        public string national_Water_Policy_bl { get; set; }
        public string national_Water_Policy_cy { get; set; }
        public string watershed_Development_bl { get; set; }
        public string watershed_Development_cy { get; set; }
        public string mGNREGA_bl { get; set; }
        public string mGNREGA_cy { get; set; }
        public string national_Rural_Drinking_Water_Programme_bl { get; set; }
        public string national_Rural_Drinking_Water_Programme_cy { get; set; }

        public string agriculture_National_Agriculture_Development_Programme_bl { get; set; }
        public string agriculture_National_Agriculture_Development_Programme_cy { get; set; }
        public string national_Disaster_Management_Act_bl { get; set; }
        public string national_Disaster_Management_Act_cy { get; set; }
        public string state_Action_plan_on_Climate_Change_bl { get; set; }
        public string state_Action_plan_on_Climate_Change_cy { get; set; }
        public string state_Water_policy_bl { get; set; }
        public string state_Water_policy_cy { get; set; }
        public string watershed_Development_programmes_bl { get; set; }
        public string watershed_Development_programmes_cy { get; set; }
        public string MGNREGA1_bl { get; set; }

        public string MGNREGA1_cy { get; set; }
        public string RKVY_bl { get; set; }
        public string RKVY_cy { get; set; }
        public string Disaster_Management_Planth_bl { get; set; }
        public string Disaster_Management_Planth_cy { get; set; }
        public string Command_Area_Development_Programme_bl { get; set; }
        public string Command_Area_Development_Programme_cy { get; set; }
        public string Agricultural_Programmes_bl { get; set; }
        public string Agricultural_Programmes_cy { get; set; }
    }



}
