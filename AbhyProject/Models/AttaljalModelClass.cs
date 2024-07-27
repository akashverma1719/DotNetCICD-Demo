using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{

    public class AttaljalModelClass
    {
    }
    [Table("AAAATesting", Schema = "public")]

    public class AAAATesting
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
    }

    [Table("socialmonitoring", Schema = "public")]
    public class socialmonitoring
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string location { get; set; }
        public string date { get; set; }
        public string numberofattendees { get; set; }
        public string male { get; set; }
        public string female { get; set; }
        public string minutesofmeeting { get; set; }
        public string image { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string event1 { get; set; }
        public string others { get; set; }
        public string email { get; set; }
        public string mom_filename { get; set; }
        public string photogragh_filename { get; set; }
        public string status { get; set; }
        public string datetime { get; set; }
        public string otherevent { get; set; }
        public string officer_name { get; set; }
        public string village { get; set; }
        public string approve { get; set; }
        public string reject_remark { get; set; }
    }

    [Table("abhy_demandside_funding_source", Schema = "public")]
    public class demand_funding_source
    {
        [Key]
        public int? id { get; set; }
        public string funding_sourcename { get; set; }

    }

    [Table("abhy_supplyside_ar_wc_structures", Schema = "public")]
    public class AR_WC_Structures
    {
        [Key]
        public int? id { get; set; }
        public string ar_wc_types { get; set; }

    }
    [Table("abhy_supplyside_funding_source", Schema = "public")]
    public class supply_funding_source
    {
        [Key]
        public int? id { get; set; }
        public string funding_soursename { get; set; }

    }
    [Table("abhy_supplyside_water_conservation", Schema = "public")]
    public class supply_water_conservation
    {
        [Key]
        public int id { get; set; }
        public string officer_name { get; set; }
        public string village_name { get; set; }
        public string type_wc_structure { get; set; }
        //public string other_wc_structure { get; set; }
        public string storage_capacity { get; set; }
        public string effective_storage_available_use { get; set; }
        public string kharif_no_of_fillings { get; set; }
        public string Rabi_no_of_filllings { get; set; }
        public string recharge { get; set; }
        public string gw_recharge_kharif { get; set; }
        public string gw_recharge_rabi { get; set; }
        public string gw_recharge_annual { get; set; }
        public string total_gw_saved { get; set; }
        public string possiable_funding_source { get; set; }
        // public string other_funding_source { get; set; }
        public int userid { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string other_funding_source { get; set; }

        //estmated cost
        public string wc_approx_estimated_cost { get; set; }
        public string wc_cost_type { get; set; }

        ///download
        public string wc_filename { get; set; }
        public string wc_filepath { get; set; }

        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string wc_department_name { get; set; }
        public string wc_year { get; set; }
        public string new_table_entry_b { get; set; }

    }
   
    [Table("abhy_supplyside_AR_Structures", Schema = "public")]
    public class supply_AR_Structures
    {
        [Key]
        public int id { get; set; }

        public string officer_name { get; set; }
        public string village_name { get; set; }
        public string type_ar_structure { get; set; }
        // public string other_ar_structure { get; set; }
        public string storage_capacity { get; set; }
        public string kharif_no_of_filling { get; set; }
        public string rabi_no_of_filling { get; set; }
        public string recharge { get; set; }
        public string gw_recharge_kharif { get; set; }
        public string gw_recharge_rabi { get; set; }
        public string gw_recharge_annual { get; set; }
        public string possible_funding_source { get; set; }
        // public string other_funding_scource { get; set; }
        public int userid { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string other_funding_source { get; set; }

        //estmated cost
        public string ar_approx_estimated_cost { get; set; }
        public string ar_cost_type { get; set; }

        //download
        public string ar_filename { get; set; }
        public string ar_filepath { get; set; }

        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string ar_department_name { get; set; }
        public string sp_year { get; set; }
        public string new_table_entry_a { get; set; }
    }

    [Table("vw_supply_ar_structures", Schema = "public")]
    public class vw_supply_AR_Structures
    {
        [Key]
        public int id { get; set; }
        public string officer_name { get; set; }
        public string village_name { get; set; }
        public string type_ar_structure { get; set; }
        public string storage_capacity { get; set; }
        public string kharif_no_of_filling { get; set; }
        public string rabi_no_of_filling { get; set; }
        public string recharge { get; set; }
        public string gw_recharge_kharif { get; set; }
        public string gw_recharge_rabi { get; set; }
        public string gw_recharge_annual { get; set; }
        public string possible_funding_source { get; set; }
        public int userid { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string other_funding_source { get; set; }
        public string ar_approx_estimated_cost { get; set; }
        public string ar_cost_type { get; set; }
        public string ar_filename { get; set; }
        public string ar_filepath { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string ar_department_name { get; set; }
        public string sp_year { get; set; }
        public string new_table_entry_a { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }
    }

    [Table("vw_supply_any_other_intervention", Schema = "public")]
    public class vw_supply_any_other_intervention
    {
        [Key]
        public int id { get; set; }
        public string officer_name { get; set; }
        public string village_name { get; set; }
        public string other_structure { get; set; }
        public string unit { get; set; }
        public string storage_capacity { get; set; }
        public string no_of_filling_kharif { get; set; }
        public string no_of_filling_rabi { get; set; }
        public string recharge { get; set; }
        public string gw_recharge_kharif { get; set; }
        public string gw_recharge_rabi { get; set; }
        public string gw_recharge_annual { get; set; }
        public string possible_funding_source { get; set; }
        public int userid { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string other_funding_source { get; set; }
        public string anyother_approx_estimated_cost { get; set; }
        public string anyother_cost_type { get; set; }
        public string anyother_filename { get; set; }
        public string anyother_filepath { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string other_department_name { get; set; }
        public string any_year { get; set; }
        public string new_table_entry_c { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }

    }

    [Table("vw_supply_water_conservation", Schema = "public")]
    public class vw_supply_water_conservation
    {
        [Key]
        public int id { get; set; }
        public string officer_name { get; set; }
        public string village_name { get; set; }
        public string type_wc_structure { get; set; }
        public string storage_capacity { get; set; }
        public string effective_storage_available_use { get; set; }
        public string kharif_no_of_fillings { get; set; }
        public string recharge { get; set; }
        public string gw_recharge_kharif { get; set; }
        public string gw_recharge_rabi { get; set; }
        public string gw_recharge_annual { get; set; }
        public string total_gw_saved { get; set; }
        public string possiable_funding_source { get; set; }
        public int userid { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string other_funding_source { get; set; }
        public string wc_approx_estimated_cost { get; set; }
        public string wc_cost_type { get; set; }
        public string wc_filename { get; set; }
        public string wc_filepath { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string wc_department_name { get; set; }
        public string wc_year { get; set; }
        public string new_table_entry_b { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }

    }

    [Table("vw_abhy_supplyside_dli3", Schema = "public")]
    public class vw_abhy_supplyside_DLI3
    {
        public int id { get; set; }

        public string state_name { get; set; }

        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string village { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string supply_side { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string name_of_structure { get; set; }
        public string latitude_of_proposed { get; set; }
        public string longitude_of_proposed { get; set; }
        public string total_approximate { get; set; }
        public string approximate_fund { get; set; }
        public string gap_funding { get; set; }
        public string work_start_date { get; set; }
        public string work_completion_date { get; set; }
        public string type { get; set; }
        public string ddlnew { get; set; }
        public string latitude_of_structure { get; set; }
        public string longitude_of_structure { get; set; }
        public string department_name_new { get; set; }
        public string scheme_name_new { get; set; }
        public string expenditure_incurred { get; set; }
        public string atal_jal_incentive { get; set; }
        public string remark { get; set; }
        public string entry_date { get; set; }
        public string user_id { get; set; }
        public int old_id1 { get; set; }
        public int old_id2 { get; set; }
        public int old_id3 { get; set; }
        public string new_row { get; set; }
        public string approval { get; set; }
        public string reject { get; set; }
        public string schemename_other { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }


    }



    [Table("abhy_supplyside_any_other_intervention", Schema = "public")]
    public class supply_any_other_intervention
    {
        [Key]
        public int id { get; set; }
        public string officer_name { get; set; }

        public string village_name { get; set; }
        public string other_structure { get; set; }
        public string unit { get; set; }
        public string storage_capacity { get; set; }
        public string no_of_filling_kharif { get; set; }
        public string no_of_filling_rabi { get; set; }
        public string recharge { get; set; }
        public string gw_recharge_kharif { get; set; }
        public string gw_recharge_rabi { get; set; }
        public string gw_recharge_annual { get; set; }
        public string possible_funding_source { get; set; }
        public int userid { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string other_funding_source { get; set; }

        //estmated cost
        public string anyother_approx_estimated_cost { get; set; }
        public string anyother_cost_type { get; set; }

        //download
        public string anyother_filename { get; set; }
        public string anyother_filepath { get; set; }

        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string other_department_name { get; set; }
        public string any_year { get; set; }
        public string new_table_entry_c { get; set; }

    }
    public class vw_abhy_new_Supply_side_new
    {
        public List<vw_supply_AR_Structures> Su { get; set; }

        public List<vw_supply_water_conservation> Su1 { get; set; }
        public List<vw_supply_any_other_intervention> Su2 { get; set; }
        public List<vw_abhy_supplyside_DLI3> Su3 { get; set; }
    }
    public class abhy_new_Supply_side_new
    {
        public List<supply_AR_Structures> Su { get; set; }

        public List<supply_water_conservation> Su1 { get; set; }
        public List<supply_any_other_intervention> Su2 { get; set; }
        public List<abhy_supplyside_DLI3> Su3 { get; set; }
    }



    [Table("abhy_supplyside_DLI3", Schema = "public")]
    public class abhy_supplyside_DLI3
    {
        public int id { get; set; }

        public string state_name { get; set; }

        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string village { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string supply_side { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string name_of_structure { get; set; }
        public string latitude_of_proposed { get; set; }
        public string longitude_of_proposed { get; set; }
        public string total_approximate { get; set; }
        public string approximate_fund { get; set; }
        public string gap_funding { get; set; }
        public string work_start_date { get; set; }
        public string work_completion_date { get; set; }
        public string type { get; set; }
        public string ddlnew { get; set; }
        public string latitude_of_structure { get; set; }
        public string longitude_of_structure { get; set; }
        public string department_name_new { get; set; }
        public string scheme_name_new { get; set; }
        public string expenditure_incurred { get; set; }
        public string atal_jal_incentive { get; set; }
        public string remark { get; set; }
        public string entry_date { get; set; }
        public string user_id { get; set; }
        public int old_id1 { get; set; }
        public int old_id2 { get; set; }
        public int old_id3 { get; set; }
        public string new_row { get; set; }
        public string approval { get; set; }
        public string reject { get; set; }
        public string schemename_other { get; set; }


    }


}