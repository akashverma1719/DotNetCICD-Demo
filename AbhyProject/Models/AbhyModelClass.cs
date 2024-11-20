using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;


namespace AbhyProject.Models
{
    public class AbhyModelClass
    {

    }
    // -----------------Master DropDown Data For Training GP Module---------
    [Table("abhy_master_tbl_gptraining", Schema = "public")]
    public class abhy_master_tbl_gptraining
    {
        [Key]
        public int id { get; set; }
        public string email { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gram_panchayat_name { get; set; }
    }

    //water level class start 
    [Table("vw_gwl_sd_block_month_year_summary_template", Schema = "public")]
    public class vw_gwl_sd_block_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_sd_block_year_summary_template", Schema = "public")]
    public class vw_gwl_sd_block_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_sd_block_summary_template", Schema = "public")]
    public class vw_gwl_sd_block_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_s_district_month_year_summary_template", Schema = "public")]
    public class vw_gwl_s_district_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_s_district_year_summary_template", Schema = "public")]
    public class vw_gwl_s_district_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_s_district_summary_template", Schema = "public")]
    public class vw_gwl_s_district_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_state_month_year_summary_template", Schema = "public")]
    public class vw_gwl_state_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_state_year_summary_template", Schema = "public")]
    public class vw_gwl_state_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_gwl_state_summary_template", Schema = "public")]
    public class vw_gwl_state_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }
    //water level class end 

    //Rainfall class start 
    [Table("vw_rainfall_sd_block_month_year_summary_template", Schema = "public")]
    public class vw_rainfall_sd_block_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_sd_block_year_summary_template", Schema = "public")]
    public class vw_rainfall_sd_block_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_sd_block_summary_template", Schema = "public")]
    public class vw_rainfall_sd_block_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_s_district_month_year_summary_template", Schema = "public")]
    public class vw_rainfall_s_district_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_s_district_year_summary_template", Schema = "public")]
    public class vw_rainfall_s_district_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_s_district_summary_template", Schema = "public")]
    public class vw_rainfall_s_district_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_state_month_year_summary_template", Schema = "public")]
    public class vw_rainfall_state_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_state_year_summary_template", Schema = "public")]
    public class vw_rainfall_state_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_rainfall_state_summary_template", Schema = "public")]
    public class vw_rainfall_state_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }
    //Rainfall class end 

    //Quality class start 
    [Table("vw_water_wq_sd_block_month_year_summary_template", Schema = "public")]
    public class vw_water_wq_sd_block_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_sd_block_year_summary_template", Schema = "public")]
    public class vw_water_wq_sd_block_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_sd_block_summary_template", Schema = "public")]
    public class vw_water_wq_sd_block_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_s_district_month_year_summary_template", Schema = "public")]
    public class vw_water_wq_s_district_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_s_district_year_summary_template", Schema = "public")]
    public class vw_water_wq_s_district_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_s_district_summary_template", Schema = "public")]
    public class vw_water_wq_s_district_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_state_month_year_summary_template", Schema = "public")]
    public class vw_water_wq_state_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_state_year_summary_template", Schema = "public")]
    public class vw_water_wq_state_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_water_wq_state_summary_template", Schema = "public")]
    public class vw_water_wq_state_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }
    //Quality class end 

    //waterflow class start 

    [Table("vw_waterflow_sd_block_month_year_summary_template", Schema = "public")]
    public class vw_waterflow_sd_block_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_sd_block_year_summary_template", Schema = "public")]
    public class vw_waterflow_sd_block_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_sd_block_summary_template", Schema = "public")]
    public class vw_waterflow_sd_block_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_s_district_month_year_summary_template", Schema = "public")]
    public class vw_waterflow_s_district_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_s_district_year_summary_template", Schema = "public")]
    public class vw_waterflow_s_district_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_s_district_summary_template", Schema = "public")]
    public class vw_waterflow_s_district_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_state_month_year_summary_template", Schema = "public")]
    public class vw_waterflow_state_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_state_year_summary_template", Schema = "public")]
    public class vw_waterflow_state_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }

    [Table("vw_waterflow_state_summary_template", Schema = "public")]
    public class vw_waterflow_state_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public Int32 no_of_dynamic_data_entries { get; set; }
        public Int32 dynamic_approved_data { get; set; }
        public Int32 dynamic_data_validation { get; set; }

    }
    //waterflow class end 

    //wellinventory class start 

    [Table("vw_wellinventory_sd_block_month_year_summary_template", Schema = "public")]
    public class vw_wellinventory_sd_block_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }
    }

    [Table("vw_wellinventory_sd_block_year_summary_template", Schema = "public")]
    public class vw_wellinventory_sd_block_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_wellinventory_sd_block_summary_template", Schema = "public")]
    public class vw_wellinventory_sd_block_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_wellinventory_s_district_month_year_summary_template", Schema = "public")]
    public class vw_wellinventory_s_district_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_wellinventory_s_district_year_summary_template", Schema = "public")]
    public class vw_wellinventory_s_district_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_wellinventory_s_district_summary_template", Schema = "public")]
    public class vw_wellinventory_s_district_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_wellinventory_state_month_year_summary_template", Schema = "public")]
    public class vw_wellinventory_state_month_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_wellinventory_state_year_summary_template", Schema = "public")]
    public class vw_wellinventory_state_year_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_wellinventory_state_summary_template", Schema = "public")]
    public class vw_wellinventory_state_summary_template
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }
    //wellinventory class end 

    //social event class start 

    [Table("vw_socialmonitoring_sd_block_month_year_summary", Schema = "public")]
    public class vw_socialmonitoring_sd_block_month_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }
    }

    [Table("vw_socialmonitoring_sd_block_year_summary", Schema = "public")]
    public class vw_socialmonitoring_sd_block_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_socialmonitoring_sd_block_summary", Schema = "public")]
    public class vw_socialmonitoring_sd_block_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_socialmonitoring_s_district_month_year_summary", Schema = "public")]
    public class vw_socialmonitoring_s_district_month_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_socialmonitoring_s_district_year_summary", Schema = "public")]
    public class vw_socialmonitoring_s_district_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_socialmonitoring_s_district_summary", Schema = "public")]
    public class vw_socialmonitoring_s_district_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_socialmonitoring_state_month_year_summary", Schema = "public")]
    public class vw_socialmonitoring_state_month_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_socialmonitoring_state_year_summary", Schema = "public")]
    public class vw_socialmonitoring_state_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_socialmonitoring_state_summary", Schema = "public")]
    public class vw_socialmonitoring_state_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }
    //social event class end 
    //geotagging class start 

    [Table("vw_geo_sd_block_month_year_summary", Schema = "public")]
    public class vw_geo_sd_block_month_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }
    }

    [Table("vw_geo_sd_block_year_summary", Schema = "public")]
    public class vw_geo_sd_block_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_geo_sd_block_summary", Schema = "public")]
    public class vw_geo_sd_block_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_geo_s_district_month_year_summary", Schema = "public")]
    public class vw_geo_s_district_month_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_geo_s_district_year_summary", Schema = "public")]
    public class vw_geo_s_district_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_geo_s_district_summary", Schema = "public")]
    public class vw_geo_s_district_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_geo_state_month_year_summary", Schema = "public")]
    public class vw_geo_state_month_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double month { get; set; }
        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_geo_state_year_summary", Schema = "public")]
    public class vw_geo_state_year_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Double year { get; set; }
        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }

    [Table("vw_geo_state_summary", Schema = "public")]
    public class vw_geo_state_summary
    {
        [Key]
        public int row_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }

        public Int32 total_gp_count { get; set; }
        public Int32 total_no_of_wells_sations { get; set; }
        public Int32 gp_covered { get; set; }
        public Int32 gp_with_no_data { get; set; }
        public Int32 static_approved_data { get; set; }
        public Int32 static_data_validation { get; set; }
        public string no_of_dynamic_data_entries { get; set; }
        public string dynamic_approved_data { get; set; }
        public string dynamic_data_validation { get; set; }

    }
    //geotagging event class end 
    [Table("vw_water_meta_data", Schema = "public")]
    public class vw_water_meta_data
    {
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public DateTime entry_time { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }


    }
    [Table("vw_rainfall_meta_data", Schema = "public")]
    public class vw_rainfall_meta_data
    {
        [Key]
        public int id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string rf_uid { get; set; }
        public string locationdetail { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string date_time { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
    }

    [Table("vw_gwl_meta_data", Schema = "public")]
    public class vw_gwl_meta_data
    {
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
        public string locationdetails { get; set; }
        public string other_well_type { get; set; }
        public string Diameter_of_Well { get; set; }
        public string Height_of_Measuring_Point { get; set; }
        public string source_Ownership_type { get; set; }
        public string source_Ownership_type_other { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }


    }
    [Table("master_list_gp", Schema = "public")]
    public class master_list_gp
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gram_panchayat_name { get; set; }
        public string mobile_list { get; set; }
        public string mis_list { get; set; }


    }
    public class all_module_report
    {

        public string statename { get; set; }
        public double demand_cost { get; set; }
        public double supply_cost { get; set; }
        public double other_cost { get; set; }
        public double demand_area { get; set; }
        public int supply_structure { get; set; }
        public int other_structure { get; set; }
        public string demand_activity_value { get; set; }
        public string supply_activity_value { get; set; }
        public string other_activity_value { get; set; }




    }

    public class incentive_report
    {

        public string department { get; set; }
        public string otherdepartment { get; set; }
        public int atal_gp { get; set; }
        public int inc_gp { get; set; }
        public double cost { get; set; }
        public double area { get; set; }
        public int beneficery { get; set; }
        public int m_sc { get; set; }
        public int m_st { get; set; }
        public int m_obc { get; set; }
        public int m_other { get; set; }
        public int f_sc { get; set; }
        public int f_st { get; set; }
        public int f_obc { get; set; }
        public int f_other { get; set; }
        public string activity { get; set; }
        
    }
    public class training_report_class
    {
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public double totalcurrentevent { get; set; }
        public double uploadevent { get; set; }
        public double approve { get; set; }
        public double reject { get; set; }
        public double spmu { get; set; }
        public double dpmu { get; set; }
        public double tt { get; set; }
        public double c_tt { get; set; }
        public double currentnoofcurrent { get; set; }
    }


    //----------WSP TABLES-----------------

    [Table("dd_wsp_module", Schema = "public")]
    public class dd_wsp_module
    {
        [Key]
        public int id { get; set; }
        public int module_val { get; set; }
        public string module_name { get; set; }
        public string fin_year { get; set; }
    }

    [Table("dd_wsp_submodule", Schema = "public")]
    public class dd_wsp_submodule
    {
        [Key]
        public int id { get; set; }
        public int module_val { get; set; }
        public decimal sub_module_val { get; set; }
        public string sub_module_name { get; set; }
        public string fin_year { get; set; }
    }
    [Table("abhy_wsp_district_wise_rainfall_et_gwra", Schema = "public")]
    public class abhy_wsp_master_data
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
    [Table("abhy_approval_master", Schema = "public")]

    public class abhy_approval_master
    {
        [Key]
        public int id { get; set; }
        public int status_id { get; set; }
        public int status_name { get; set; }

    }
    [Table("abhy_wsp_approved_status", Schema = "public")]
    public class abhy_wsp_approved_status
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string year { get; set; }
        public string month_name { get; set; }
        public int status_id { get; set; }
        public string gp_email { get; set; }
        public string district_email { get; set; }
        public string state_email { get; set; }
        public string gp_remarks { get; set; }
        public string wa_remarks { get; set; }
        public string wu_remarks { get; set; }
        public string wb_remarks { get; set; }
        public string wbu_remarks { get; set; }
        public string ds_remarks { get; set; }
        public string ss_remarks { get; set; }
        public string pgwm_remarks { get; set; }
        public string reject_status { get; set; }
    }

    [Table("abhy_wsp_gpdata_new", Schema = "public")]
    public class abhy_wsp_gpdata_new
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



    [Table("abhy_gpdata_dropdown", Schema = "public")]
    public class abhy_gpdata_dropdown
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gram_panchayat_name { get; set; }
        public string watershed_code { get; set; }
        public string watershed_name { get; set; }
        public string watershed_area_block { get; set; }
        public string sub_basin_code { get; set; }
        public string sub_basin_name { get; set; }
        public string basin_code { get; set; }
        public string basin_name { get; set; }
    }

    [Table("abhy_wsp_gram_images", Schema = "public")]
    public class abhy_wsp_gram_images
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

    [Table("abhy_wsp_wateravailbility_new", Schema = "public")]
    public class abhy_wsp_wateravailbility_new
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string year { get; set; }
        public string annual_rainfall { get; set; }
        public string est_vol_rainfall { get; set; }
        public string evapo_rate { get; set; }
        public string est_evapo_loss { get; set; }
        public string est_water_rain { get; set; }
        public string weigh_run_conf { get; set; }
        public string rain_runoff { get; set; }
        public string rech_monsoon { get; set; }
        public string rech_nonmonsoon { get; set; }
        public string tot_grd_rech_rain { get; set; }
        public string ground_monsoon { get; set; }
        public string ground_nonmonsoon { get; set; }
        public string tot_grd_rech_oth { get; set; }
        public string loss_nature { get; set; }
        public string tot_grd_wat_avail { get; set; }
        public string ground_water_with { get; set; }
        public string category { get; set; }
        public string avail_storages { get; set; }
        public string avail_storages_grd { get; set; }
        public string avail_storages_sur { get; set; }
        public string total_surface_body { get; set; }
        public string loss_if { get; set; }
        public string surface_water_avail { get; set; }
        public string trans_water_out { get; set; }
        public string total_sirface_water { get; set; }
        public string total_avail_water { get; set; }

        public string ar_data_year { get; set; }
        public string er_data_year { get; set; }

        public string month { get; set; }
        public int month_ordery_by { get; set; }
        public string avail_upload_file { get; set; }
        public string avail_upload_dir { get; set; }
        public string other_source_name { get; set; }
    }
    [Table("abhy_waterdraft_irrigation_data", Schema = "public")]
    public class abhy_waterdraft_irrigation_data
    {
        [Key]
        public int id { get; set; }
        public int meta_id { get; set; }
        public string season_type { get; set; }
        public string crop_category { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public string area { get; set; }
        public string gross_water { get; set; }
    }

    [Table("abhy_uti_waterdraft_domestic_new", Schema = "public")]        //manish water utilization
    public class abhy_uti_waterdraft_domestic_new
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

    [Table("abhy_waterdraft_irrigation_meta", Schema = "public")]
    public class abhy_waterdraft_irrigation_meta
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

    [Table("abhy_waterdraft_industry", Schema = "public")]                   //manish  water Utilization
    public class abhy_waterdraft_industry
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
        public string indus_grd_water { get; set; }
        public string indus_sur_water { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }

    [Table("abhy_kharif_veg_dropdown", Schema = "public")]                   //manish  water Utilization
    public class abhy_kharif_veg_dropdown
    {
        [Key]
        public int id { get; set; }
        public string food_for { get; set; }
        public string food_name { get; set; }
        public string food_type { get; set; }
    }
    [Table("abhy_waterdraft_irrigation", Schema = "public")]        //manish new water utilization
    public class abhy_waterdraft_irrigation
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string crop_kharif { get; set; }
        public string area_kharif { get; set; }
        public string gross_water_req_kharif { get; set; }
        public string total_water_dem_kharif { get; set; }
        public string crop_rabi { get; set; }
        public string area_rabi { get; set; }
        public string gross_water_req_rabi { get; set; }
        public string total_water_dem_rabi { get; set; }
        public string crop_summer { get; set; }
        public string area_summer { get; set; }
        public string gross_water_req_summer { get; set; }
        public string total_water_dem_summer { get; set; }


    }

    [Table("abhy_waterdraft_irrigation_kharif", Schema = "public")]        //manish new water utilization
    public class abhy_waterdraft_irrigation_kharif
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string crop_kharif { get; set; }
        public string area_kharif { get; set; }
        public string gross_water_req_kharif { get; set; }
        public string total_water_dem_kharif { get; set; }
        public string crop_type1 { get; set; }
        public string crop_type2 { get; set; }
        public string annual { get; set; }
        public string ground { get; set; }
        public string surface { get; set; }
    }

    [Table("abhy_waterdraft_irrigation_rabi", Schema = "public")]        //manish new water utilization
    public class abhy_waterdraft_irrigation_rabi
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string crop_rabi { get; set; }
        public string area_rabi { get; set; }
        public string gross_water_req_rabi { get; set; }
        public string total_water_dem_rabi { get; set; }
        public string crop_type1 { get; set; }
        public string crop_type2 { get; set; }
        public string annual { get; set; }
        public string ground { get; set; }
        public string surface { get; set; }
    }

    [Table("abhy_waterdraft_irrigation_summer", Schema = "public")]        //manish new water utilization
    public class abhy_waterdraft_irrigation_summer
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string crop_summer { get; set; }
        public string area_summer { get; set; }
        public string gross_water_req_summer { get; set; }
        public string annual { get; set; }
        public string ground { get; set; }
        public string surface { get; set; }
        public string total_water_dem_summer { get; set; }
        public string crop_type1 { get; set; }
        public string crop_type2 { get; set; }
    }

    [Table("abhy_waterdraft_other", Schema = "public")]                   //manish  water Utilization
    public class abhy_waterdraft_other
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
        public string oth_grd_water { get; set; }
        public string oth_sur_water { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }
    [Table("abhy_waterdraft_domestic", Schema = "public")]        //manish water utilization
    public class abhy_waterdraft_domestic
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
        public string livestock_name { get; set; }
        public string total_livestock { get; set; }
        public string daily_water_livestock { get; set; }
        public string human_annual_req { get; set; }
        public string human_per_met_gw { get; set; }
        public string livestock_annual_req { get; set; }
        public string livestock_per_met_gw { get; set; }
        public string human_met_gw { get; set; }
        public string livestock_met_gw { get; set; }
        public string human_per_met_sw { get; set; }
        public string livestock_per_met_sw { get; set; }
        public string human_met_sw { get; set; }
        public string livestock_met_sw { get; set; }
    }
    [Table("abhy_wsp_waterbalance_new", Schema = "public")]
    public class abhy_wsp_waterbalance_new
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
        public string wb_sw_avail { get; set; }
        public string wb_gw_avail { get; set; }
        public string wb_total_avail { get; set; }
        public string wb_sw_utili { get; set; }
        public string wb_gw_utili { get; set; }
        public string wb_total_utili { get; set; }
        public string wb_sw_balance { get; set; }
        public string wb_gw_balance { get; set; }
        public string wb_total_balance { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
        public string year { get; set; }

    }
    [Table("abhy_wsp_waterbudget_new", Schema = "public")]
    public class abhy_wsp_waterbudget_new
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

        public string human_p_pop { get; set; }
        public string human_a_pop { get; set; }
        public string human_no_of_year { get; set; }
        public string human_pre_pop { get; set; }
        public string human_per_capita { get; set; }
        public string human_pro_water_req { get; set; }
        public string live_p_pop { get; set; }
        public string live_a_pop { get; set; }
        public string live_no_of_year { get; set; }
        public string live_pro_pop { get; set; }
        public string live_pre_capita { get; set; }
        public string live_pro_water_req { get; set; }
        public string total_pro_water_req { get; set; }
        public string proposed_share_gw { get; set; }
        public string proposed_share_sw { get; set; }
        public string demand_gw { get; set; }
        public string demand_sw { get; set; }
        public string ground_water { get; set; }
        public string surface_water { get; set; }
        public string total_wt_available { get; set; }
        public string officer_name { get; set; }
        public string datetime { get; set; }
        public string month { get; set; }
        public string year { get; set; }
        public int month_ordery_by { get; set; }

    }
    [Table("abhy_wsp_demand_fund_details", Schema = "public")]
    public class abhy_wsp_demand_fund_details
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
    [Table("abhy_wsp_demandside_department_name", Schema = "public")]

    public class abhy_wsp_demandside_department_name
    {
        [Key]
        public int id { get; set; }
        public string department_name { get; set; }
    }

    [Table("abhy_wsp_scheme_name", Schema = "public")]

    public class abhy_wsp_scheme_name
    {
        [Key]
        public int id { get; set; }
        public string scheme_name { get; set; }
    }

    [Table("abhy_wsp_supplyside_department_name", Schema = "public")]

    public class abhy_wsp_supplyside_department_name
    {
        [Key]
        public int id { get; set; }
        public string department_name { get; set; }
    }


    [Table("abhy_wsp_innovative_measures", Schema = "public")]
    public class abhy_wsp_innovative_measures
    {
        [Key]
        public int id { get; set; }

        public int meta_id { get; set; }
        public string ddlcrop_int_pr { get; set; }
        public string ddlcrop_int_pr_sec { get; set; }
        public string ddlcrop_int_pr_th { get; set; }
        public string possible_funding_sprinkler_im { get; set; }
        public string aprx_est_cost_sprinkler_im { get; set; }
        public string aprx_fund_avail_sprinkler_im { get; set; }
        public string gap_fund_sprinkler_im { get; set; }

    }
    [Table("abhy_wsp_demand_change_crop", Schema = "public")]
    public class abhy_wsp_demand_change_crop
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
    [Table("abhy_wsp_demand_meta", Schema = "public")]
    public class abhy_wsp_demand_meta
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
    [Table("abhy_wsp_demand_sprinkler", Schema = "public")]
    public class abhy_wsp_demand_sprinkler
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
    [Table("abhy_wsp_demand_drip", Schema = "public")]
    public class abhy_wsp_demand_drip
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
    [Table("abhy_wsp_demand_pipeline", Schema = "public")]
    public class abhy_wsp_demand_pipeline
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
    [Table("abhy_wsp_demand_anyother", Schema = "public")]
    public class abhy_wsp_demand_anyother
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
    [Table("abhy_measures", Schema = "public")]
    public class abhy_measures
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }

        public string season { get; set; }
        public string crop { get; set; }
        public string crop2 { get; set; }
        public string crop3 { get; set; }
        public string area_under { get; set; }
        public string water_demand { get; set; }
        public string area_proposed { get; set; }
        public string reduction { get; set; }
        public string net_water_demand { get; set; }
        public string reduction_in_GW { get; set; }
        public string possible_funding { get; set; }
        public string approximate_estimated { get; set; }
        public string approximate_fund_available { get; set; }
        public string gap_funding { get; set; }
        public string gross_water { get; set; }

    }
    [Table("abhy_measures_drip", Schema = "public")]
    public class abhy_measures_drip
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string season_drip { get; set; }
        public string crop_drip { get; set; }
        public string crop2_drip { get; set; }
        public string crop3_drip { get; set; }
        public string area_under_drip { get; set; }
        public string gross_water_drip { get; set; }
        public string water_demand_drip { get; set; }
        public string area_proposed_drip { get; set; }
        public string reduction_drip { get; set; }
        public string net_water_demand_drip { get; set; }
        public string reduction_in_GW_drip { get; set; }
        public string possible_funding_drip { get; set; }
        public string approximate_estimated_drip { get; set; }
        public string approximate_fund_available_drip { get; set; }
        public string gap_funding_drip { get; set; }


    }
    [Table("abhy_measures_crop", Schema = "public")]
    public class abhy_measures_crop
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }

        public string season_crop { get; set; }
        public string crop_crop { get; set; }
        public string crop2_crop { get; set; }
        public string crop3_crop { get; set; }
        public string crop_category { get; set; }
        public string area_crop { get; set; }
        public string gross_water_crop { get; set; }
        public string original_crop { get; set; }
        public string crop_crop_crop { get; set; }
        public string area_crop_area { get; set; }
        public string gross_water_crop_gross { get; set; }
        public string change_water_crop { get; set; }
        public string reduction_crop { get; set; }
        public string possible_funding_crop { get; set; }
        public string approximate_estimated_crop { get; set; }
        public string gap_funding_crop { get; set; }

    }
    [Table("abhy_measures_any", Schema = "public")]
    public class abhy_measures_any
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }

        public string intervention_any { get; set; }
        public string season_any { get; set; }
        public string crop_any { get; set; }
        public string crop2_any { get; set; }
        public string crop3_any { get; set; }
        public string area_any { get; set; }
        public string water_req_any { get; set; }
        public string water_demand_any { get; set; }
        public string water_saving_any { get; set; }
        public string total_reduction_any { get; set; }
        public string possible_funding_any { get; set; }
        public string approximate_estimated_any { get; set; }
        public string approximate_fund_any { get; set; }
        public string gap_funding_any { get; set; }
        public string ddlcrop2D_any { get; set; }
        public string ddlcrop3D_any { get; set; }


    }

    [Table("abhy_measures_irr", Schema = "public")]
    public class abhy_measures_irr
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string ddl_season_irr { get; set; }
        public string crop_irr { get; set; }
        public string crop2_irr { get; set; }
        public string crop3_irr { get; set; }
        public string area_under_irr { get; set; }
        public string gross_water_irr { get; set; }
        public string water_demand_irr { get; set; }
        public string area_proposed_irr { get; set; }
        public string reduction_irr { get; set; }
        public string net_water_demand_irr { get; set; }
        public string reduction_in_gw_irr { get; set; }
        public string possible_funding_irr { get; set; }
        public string total_approximate_estimated_irr { get; set; }
        public string approximate_fund_available_irr { get; set; }
        public string gap_funding_irr { get; set; }

    }

    [Table("abhy_measures_innovative", Schema = "public")]
    public class abhy_measures_innovative
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }

        public string water_harvesting { get; set; }
        public string percolation { get; set; }
        public string recharge_shafts { get; set; }
        public string rooftop_water { get; set; }
        public string storm_water { get; set; }
        public string village_water { get; set; }
        public string farm_ponds { get; set; }
        public string feeder_separation { get; set; }
        public string intelligent_rationing { get; set; }
        public string electricity_metering { get; set; }
        public string grid_connected { get; set; }
        public string recycling { get; set; }
        public string groundwater_metering { get; set; }
        public string groundwater_regulation { get; set; }
        public string water_quota { get; set; }
        public string land_levelling { get; set; }
        public string mulching { get; set; }
        public string climate_smart { get; set; }
        public string cultivation { get; set; }
        public string crop_cultivation { get; set; }
        public string farmer_field { get; set; }
        public string user_monitoring { get; set; }
        public string community_self { get; set; }
        public string well_spacing { get; set; }
        public string improved_groundwater { get; set; }
        public string community_level { get; set; }


    }
    [Table("abhy_artificial_recharge_st_data", Schema = "public")]
    public class abhy_artificial_recharge_st_data
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
    [Table("abhy_water_conservation_st_data", Schema = "public")]
    public class abhy_water_conservation_st_data
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
    [Table("abhy_supply_ref_info", Schema = "public")] // manish
    public class abhy_supply_ref_info
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string scheme_name { get; set; }
        public string gov_type { get; set; }
        public string posibble_fund { get; set; }
        public string fund_prposed { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int month_ordery_by { get; set; }
    }

    [Table("abhy_wsp_pgwm_committee_member_vw", Schema = "public")]
    public class abhy_wsp_pgwm_committee_member_vw
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

    [Table("abhy_wsp_pgwm_committee_meeting_vw", Schema = "public")]
    public class abhy_wsp_pgwm_committee_meeting_vw
    {
        [Key]
        public Int32 id { get; set; }
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

    [Table("abhy_wsp_pgwm_committee", Schema = "public")]
    public class abhy_wsp_pgwm_committee
    {
        [Key]
        public Int32 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string data_year { get; set; }
        public string entry_by { get; set; }
        public string entry_time { get; set; }
    }

    [Table("abhy_wsp_pgwm_committee_meeting", Schema = "public")]
    public class abhy_wsp_pgwm_committee_meeting
    {
        [Key]
        public int id { get; set; }

        public Int32 abhy_wsp_pgwm_committee_id { get; set; }
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

    [Table("abhy_wsp_pgwm_committee_member", Schema = "public")]
    public class abhy_wsp_pgwm_committee_member
    {
        [Key]
        public int id { get; set; }
        public Int32 abhy_wsp_pgwm_committee_id { get; set; }
        public string member_name { get; set; }
        public string designation { get; set; }
        public string gender { get; set; }
        public string contact_no { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
    }

    [Table("abhy_wsp_dpmu_declaration", Schema = "public")]
    public class abhy_wsp_dpmu_declaration
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
        //public DateTime entry_time { get; set; }
    }

    [Table("abhy_wsp_dpmu_declaration_vw", Schema = "public")]
    public class abhy_wsp_dpmu_declaration_vw
    {
        [Key]
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string data_year { get; set; }
        public string dpmu_declaration { get; set; }
        public string entry_by { get; set; }
        public DateTime entry_time { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
    }








    // IEC Module dropdown
    [Table("abhy_iec_dropdown", Schema = "public")]
    public class abhy_iec_dropdown
    {
        [Key]
        public int? id { get; set; }

        public string activity { get; set; }

        public string sub_activity { get; set; }
    }

    [Table("abhy_IEC", Schema = "public")]
    public class abhy_IEC
    {
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int order_by_month { get; set; }
        public string entry_by { get; set; }
        public string activity { get; set; }
        public string activity_other { get; set; }
        public string sub_activity { get; set; }
        public string sub_activity_other { get; set; }
        public string number { get; set; }
        public string cumulative_total { get; set; }
        public string IEC_activity { get; set; }
        public string remark { get; set; }
        public string Nodal_officer { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
    }

    //MADB class start

    [Table("WaterFlow", Schema = "public")]
    public class WaterFlow
    {
        [Key]
        public int id { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string DateofEntry { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string CropIrrigated { get; set; }
        public string WaterReading_Date { get; set; }
        public string MeterReading { get; set; }
        public string UnitReading { get; set; }
        public string Meterid { get; set; }
        public string Entry_Date { get; set; }
        public string approve { get; set; }


    }

    [Table("vw_waterflow_all", Schema = "public")]
    public class vw_waterflow_all
    {

        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string depthofwell { get; set; }
        public string CropIrrigated { get; set; }
        public string UnitReading { get; set; }
        public string DateofEntry { get; set; }
        public string Meterid { get; set; }
        public string status { get; set; }
        public string status_data { get; set; }
        public int wf_meta_id { get; set; }
        public int id { get; set; }
        public string WaterReading_Date { get; set; }
        public string MeterReading { get; set; }
        public string wf_date_time { get; set; }
        public string wf_email { get; set; }
        public string Entry_Date { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }


    }

    [Table("vw_waterflow_meta", Schema = "public")]
    public class vw_waterflow_meta
    {
        [Key]
        public int id { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string DateofEntry { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string depthofwell { get; set; }
        public string CropIrrigated { get; set; }
        public string UnitReading { get; set; }
        public string Meterid { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string datetime { get; set; }


    }

    [Table("waterflow_meta", Schema = "public")]
    public class waterflow_meta
    {
        [Key]
        public int id { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string DateofEntry { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string depthofwell { get; set; }
        public string CropIrrigated { get; set; }
        public string UnitReading { get; set; }
        public string Meterid { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string datetime { get; set; }


    }

    [Table("waterflow_data", Schema = "public")]
    public class waterflow_data
    {
        [Key]
        public int id { get; set; }
        public int wf_meta_id { get; set; }
        public string WaterReading_Date { get; set; }
        public string MeterReading { get; set; }
        public string wf_date_time { get; set; }
        public string wf_email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }


    }

    public class vw_waterflow_meta_new
    {
        [Key]
        public int id { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string DateofEntry { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string depthofwell { get; set; }
        public string CropIrrigated { get; set; }
        public string UnitReading { get; set; }
        public string Meterid { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string status { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public string datetime { get; set; }


    }

    [Table("rainfall_meta", Schema = "public")]
    public class rainfall_meta
    {
        [Key]
        public int id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string date_time { get; set; }

    }

    [Table("rainfall_data", Schema = "public")]
    public class rainfall_data
    {
        [Key]
        public int id { get; set; }
        public int rf_meta_id { get; set; }
        public DateTime rf_date { get; set; }
        public string rf_reading { get; set; }
        public DateTime rf_date_time { get; set; }
        public string rf_email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
    }

    [Table("vw_rainfall_meta", Schema = "public")]
    public class vw_rainfall_meta
    {
        [Key]
        public int id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string date_time { get; set; }

        public string fyyear { get; set; }
        public string fymonth { get; set; }
    }
    public class all_rainfall_data
    {
        //public int id_meta { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }
        public DateTime? date_time { get; set; }
        // public int rf_id_data { get; set; }
        public int rf_meta_id { get; set; }
        public string rf_date { get; set; }
        public string rf_reading { get; set; }
        //public DateTime? rf_date_time { get; set; }
        public string rf_email { get; set; }
    }

    public class vw_gwl_new
    {
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
        public string locationdetails { get; set; }
        public string other_well_type { get; set; }
        public string Diameter_of_Well { get; set; }
        public string Height_of_Measuring_Point { get; set; }
        public string source_Ownership_type { get; set; }
        public string source_Ownership_type_other { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string status { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }


    }
    public class vw_rainfall_meta_new
    {
        [Key]
        public int id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }
        public string status { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public string date_time { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
    }

    public class vw_water_new
    {
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public DateTime? entry_time { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public string status { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }


    }


    [Table("water_wq_meta", Schema = "public")]
    public class water_wq_meta
    {
        [Key]
        public int id { get; set; }
        public Int64 sr_no { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public DateTime? entry_time { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public int? isachive { get; set; }

    }
    [Table("vw_block_gp_villagename", Schema = "public")]
    public class vw_block_gp_villagename
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gram_panchayat_name { get; set; }
        public string village_name { get; set; }

    }


    [Table("water_wq_data", Schema = "public")]
    public class water_wq_data
    {
        [Key]
        public int data_id { get; set; }
        public int water_qi_meta_id { get; set; }
        public string qi_date { get; set; }
        public string ph { get; set; }
        public string chloride { get; set; }
        public string free_chlorine { get; set; }
        public string turbudity { get; set; }
        public string total_hardness_mgl { get; set; }
        public string alkalinity_mgl { get; set; }
        public string nitrate_mgl { get; set; }
        public string fluoride_mgl { get; set; }
        public string iron_mgl { get; set; }
        public string arsenic_mgl { get; set; }
        public string ec_us_cm { get; set; }
        public string tds { get; set; }
        public string bacterial_test { get; set; }
        public string email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public DateTime? entry_time_data { get; set; }
    }

    public class all_data_water
    {
        public int id { get; set; }
        public Int64 sr_no { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public DateTime entry_time { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public int isachive { get; set; }

        public int data_id { get; set; }
        public int water_qi_meta_id { get; set; }
        public string qi_date { get; set; }
        public string ph { get; set; }
        public string chloride { get; set; }
        public string free_chlorine { get; set; }
        public string turbudity { get; set; }
        public string total_hardness_mgl { get; set; }
        public string alkalinity_mgl { get; set; }
        public string nitrate_mgl { get; set; }
        public string fluoride_mgl { get; set; }
        public string iron_mgl { get; set; }
        public string arsenic_mgl { get; set; }
        public string ec_us_cm { get; set; }
        public string tds { get; set; }
        public string bacterial_test { get; set; }
        public string email { get; set; }

        public DateTime? entry_time_data { get; set; }
    }

    [Table("vw_count_wellinventory", Schema = "public")]
    public class vw_count_wellinventory
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public Int32 total_count { get; set; }
        public Int32 distinct_gp_count { get; set; }
        public Int32 diff { get; set; }

    }

    [Table("vw_count_geo_new", Schema = "public")]
    public class vw_count_geo_new
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public Int32 total_count { get; set; }
        public Int32 distinct_gp_count { get; set; }
        public Int32 diff { get; set; }

    }

    [Table("vw_count_rainfall_meta_count", Schema = "public")]
    public class vw_count_rainfall_meta_count
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public Int32 total_count { get; set; }
        public Int32 distinct_gp_count { get; set; }
        public Int32 diff { get; set; }

    }

    [Table("gwl_meta", Schema = "public")]
    public class gwl_meta
    {
        [Key]
        public int id { get; set; }
        public Int64 sr_no { get; set; }
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
        public string source_Ownership_type_other { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }


    }

    [Table("vw_count_gwl_meta_count", Schema = "public")]
    public class vw_count_gwl_meta_count
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public Int32 total_count { get; set; }
        public Int32 distinct_gp_count { get; set; }
        public Int32 diff { get; set; }

    }

    [Table("vw_count_water_wq_meta_count", Schema = "public")]
    public class vw_count_water_wq_meta_count
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public Int32 total_count { get; set; }
        public Int32 distinct_gp_count { get; set; }
        public Int32 diff { get; set; }

    }

    [Table("vw_count_waterflow_meta_count", Schema = "public")]
    public class vw_count_waterflow_meta_count
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public Int32 total_count { get; set; }
        public Int32 distinct_gp_count { get; set; }
        public Int32 diff { get; set; }

    }

    [Table("vw_count_socialmonitoring_count", Schema = "public")]
    public class vw_count_socialmonitoring_count
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public Int32 total_count { get; set; }
        public Int32 distinct_gp_count { get; set; }
        public Int32 diff { get; set; }

    }


    [Table("gwl_data", Schema = "public")]
    public class gwl_data
    {
        [Key]
        //public int id_gwl { get; set; }
        public int id { get; set; }
        public int gwl_meta_id { get; set; }
        public string gwl_reading { get; set; }
        public DateTime gwl_date { get; set; }
        public string gwl_email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public DateTime date_time { get; set; }
    }

    public class all_gwl_data
    {
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
        public Int64 sr_no { get; set; }
        public string well { get; set; }
        public DateTime? datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string isarchive { get; set; }
        public string locationdetails { get; set; }
        public string other_well_type { get; set; }
        public string Diameter_of_Well { get; set; }
        public string Height_of_Measuring_Point { get; set; }
        public string source_Ownership_type { get; set; }

        public int gwl_meta_id { get; set; }
        public string gwl_reading { get; set; }
        public string gwl_date { get; set; }
        public string gwl_email { get; set; }
        public DateTime date_time { get; set; }
    }
    // For map

    [Table("vw_bs_waterlevel_pv_data", Schema = "public")]
    public class vw_bs_waterlevel_pv_data
    {
        [Key]


        public int id { get; set; }
        public int partition_id { get; set; }
        public int gwl_meta_id { get; set; }
        public string gwl_reading { get; set; }
        public DateTime gwl_date { get; set; }
        public string gwl_email { get; set; }
        public string status_data { get; set; }

        public DateTime date_time { get; set; }
    }




    [Table("vw_bs_waterlevel_pv_meta_data", Schema = "public")]
    public class vw_bs_waterlevel_pv_meta_data
    {
        [Key]

        public int row_id { get; set; }
        public int id { get; set; }
        public int part_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string sitename { get; set; }
        public string typeofwell { get; set; }
        public string source_ownership { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string wellid { get; set; }
        public int welldepth { get; set; }
        public string well { get; set; }
        public string datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string isarchive { get; set; }
        public string locationdetails { get; set; }
        public string other_well_type { get; set; }
        public string diameter_of_well { get; set; }
        public string height_of_measuring_point { get; set; }
        public string source_ownership_type { get; set; }
        public string fyyear_str { get; set; }
        public int? fyyear { get; set; }
        public string status { get; set; }
        public long gwl_meta_id { get; set; }
        public string gwl_reading { get; set; }
        public DateTime gwl_date { get; set; }
        public string gwl_email { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }


    }
    //Waterlevel ends
    [Table("vw_gwl_meta", Schema = "public")]
    public class vw_gwl
    {
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
        public string locationdetails { get; set; }
        public string other_well_type { get; set; }
        public string Diameter_of_Well { get; set; }
        public string Height_of_Measuring_Point { get; set; }
        public string source_Ownership_type { get; set; }
        public string source_Ownership_type_other { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }


    }
    [Table("vw_waterflow_meta_data", Schema = "public")]
    public class vw_waterflow_meta_data
    {
        [Key]
        public int id { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string DateofEntry { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string depthofwell { get; set; }
        public string CropIrrigated { get; set; }
        public string UnitReading { get; set; }
        public string Meterid { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string datetime { get; set; }


    }
    [Table("gwl_meta_delete", Schema = "public")]
    public class gwl_meta_delete
    {
        [Key]
        public int id { get; set; }
        public Int64 sr_no { get; set; }
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
        public string source_Ownership_type_other { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int table_id { get; set; }


    }

    [Table("gwl_data_delete", Schema = "public")]
    public class gwl_data_delete
    {
        [Key]
        //public int id_gwl { get; set; }
        public int id { get; set; }
        public int gwl_meta_id { get; set; }
        public string gwl_reading { get; set; }
        public DateTime gwl_date { get; set; }
        public string gwl_email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public DateTime date_time { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int tableid { get; set; }
    }
    [Table("geo_new_delete", Schema = "public")]
    public class geo_new_delete
    {
        [Key]
        public int id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string typeofstructure { get; set; }
        public string storagecapacity { get; set; }
        public string nooffillings { get; set; }
        public string image1 { get; set; }
        public string image2 { get; set; }
        public string deviceid { get; set; }
        public string others { get; set; }
        public DateTime? date { get; set; }
        public string email { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string date1 { get; set; }
        public string datetime { get; set; }
        public string locationdetail { get; set; }
        public string wcu_aby { get; set; }
        public string wcu_aby_remark { get; set; }
        public string approve { get; set; }
        public string reject_remark { get; set; }
        public DateTime? date_time { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int? tableid { get; set; }

    }
    [Table("water_wq_meta_delete", Schema = "public")]
    public class water_wq_meta_delete
    {
        [Key]
        public int id { get; set; }
        public Int64 sr_no { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public DateTime? entry_time { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public int? isachive { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int tableid { get; set; }

    }
    [Table("water_wq_data_delete", Schema = "public")]
    public class water_wq_data_delete
    {
        [Key]
        public int data_id { get; set; }
        public int water_qi_meta_id { get; set; }
        public string qi_date { get; set; }
        public string ph { get; set; }
        public string chloride { get; set; }
        public string free_chlorine { get; set; }
        public string turbudity { get; set; }
        public string total_hardness_mgl { get; set; }
        public string alkalinity_mgl { get; set; }
        public string nitrate_mgl { get; set; }
        public string fluoride_mgl { get; set; }
        public string iron_mgl { get; set; }
        public string arsenic_mgl { get; set; }
        public string ec_us_cm { get; set; }
        public string tds { get; set; }
        public string bacterial_test { get; set; }
        public string email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int tableid { get; set; }
        public DateTime? entry_time_data { get; set; }
    }
    [Table("waterflow_meta_delete", Schema = "public")]
    public class waterflow_meta_delete
    {
        [Key]
        public int id { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string DateofEntry { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string depthofwell { get; set; }
        public string CropIrrigated { get; set; }
        public string UnitReading { get; set; }
        public string Meterid { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string datetime { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int tableid { get; set; }


    }
    [Table("waterflow_data_delete", Schema = "public")]
    public class waterflow_data_delete
    {
        [Key]
        public int id { get; set; }
        public int wf_meta_id { get; set; }
        public string WaterReading_Date { get; set; }
        public string MeterReading { get; set; }
        public string wf_date_time { get; set; }
        public string wf_email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int tableid { get; set; }


    }
    [Table("rainfall_meta_delete", Schema = "public")]
    public class rainfall_meta_delete
    {
        [Key]
        public int id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string date_time { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int tableid { get; set; }

    }
    [Table("rainfall_data_delete", Schema = "public")]
    public class rainfall_data_delete
    {
        [Key]
        public int id { get; set; }
        public int rf_meta_id { get; set; }
        public DateTime rf_date { get; set; }
        public string rf_reading { get; set; }
        public DateTime rf_date_time { get; set; }
        public string rf_email { get; set; }
        public string status_data { get; set; }
        public string reject_remark { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int tableid { get; set; }
    }

    [Table("wellinventory_delete", Schema = "public")]
    public class wellinventory_delete
    {
        [Key]
        public int? gid { get; set; }
        public string wellno { get; set; }
        public string date { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string locationdetails { get; set; }
        public string ownername { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string welldiameter { get; set; }
        public string welldepth { get; set; }
        public string measuringpoint { get; set; }
        public string welltype { get; set; }
        public string wellwaterpotable { get; set; }
        public string waterleveldepth { get; set; }
        public string well_type_other { get; set; }
        public string use { get; set; }
        public string pumpinstalled { get; set; }
        public string electricmeterselecteditem { get; set; }
        public string datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string approve { get; set; }
        public string reject_remark { get; set; }
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int? tableid { get; set; }

    }
    [Table("socialmonitoring_delete", Schema = "public")]
    public class socialmonitoring_delete
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
        public string deleted_email { get; set; }
        public string deleted_time { get; set; }
        public int? tableid { get; set; }
    }
    [Table("mobile_files", Schema = "public")]
    public class mobile_files
    {
        [Key]
        public int Fileid { get; set; }
        public string Filename { get; set; }
        public string Dir_path { get; set; }
        public string SourceType { get; set; }
        public string Email { get; set; }
        public string FileType { get; set; }

        public DateTime EntryDate { get; set; }

    }
    [Table("abhy_wsp_gwl", Schema = "public")]
    public class abhy_wsp_gwl

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
    [Table("abhy_wsp_gwq", Schema = "public")]
    public class abhy_wsp_gwq
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

    [Table("vw_gwl", Schema = "public")]
    public class vw_gwl_all
    {
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
        public string status_data { get; set; }
        public int gwl_meta_id { get; set; }
        public string gwl_reading { get; set; }
        public string gwl_date { get; set; }
        public string gwl_email { get; set; }


    }
    [Table("vw_rainfall", Schema = "public")]
    public class vw_rainfall
    {
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }
        public string status { get; set; }
        public string status_data { get; set; }
        public DateTime date_time { get; set; }
        [Key]
        public int id { get; set; }
        public int rf_meta_id { get; set; }
        public DateTime rf_date { get; set; }
        public string rf_reading { get; set; }
        public DateTime rf_date_time { get; set; }
        public string rf_email { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
    }

    [Table("vw_wellinventory", Schema = "public")]
    public class vw_wellinventory
    {
        [Key]
        public int? gid { get; set; }
        public string wellno { get; set; }
        public string date { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string locationdetails { get; set; }
        public string ownername { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string welldiameter { get; set; }
        public string welldepth { get; set; }
        public string measuringpoint { get; set; }
        public string welltype { get; set; }
        public string wellwaterpotable { get; set; }
        public string waterleveldepth { get; set; }
        public string use { get; set; }
        public int? well_sl_no { get; set; }
        public string pumpinstalled { get; set; }

        public string electricmeterselecteditem { get; set; }

        public string datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string well_type_other { get; set; }
        public string approve { get; set; }
        public string reject_remark { get; set; }

    }

    [Table("vw_geotagging", Schema = "public")]
    public class vw_geotagging
    {
        [Key]
        public int? id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string typeofstructure { get; set; }
        public string storagecapacity { get; set; }
        public string nooffillings { get; set; }
        public string wcu_aby { get; set; }
        public string wcu_aby_remark { get; set; }
        public string image1 { get; set; }
        public string image2 { get; set; }
        public string deviceid { get; set; }
        public string others { get; set; }
        public string date { get; set; }
        public string email { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string date1 { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string datetime { get; set; }
        public string locationdetail { get; set; }
        public string approve { get; set; }
        public string reject_remark { get; set; }
        public DateTime? date_time { get; set; }
    }
    [Table("vw_socialmonitoring", Schema = "public")]
    public class vw_socialmonitoring
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string location { get; set; }
        public string date { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
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
        public int FinancialMonth { get; set; }
        public string FinancialYear { get; set; }
    }
    [Table("vw_water_meta", Schema = "public")]
    public class vw_water
    {
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public DateTime entry_time { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public string status { get; set; }
        public string reject_remark { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }


    }
    [Table("pv_quality", Schema = "public")]
    public class pv_quality
    {
        public long id { get; set; }
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
    }

    [Table("pv_quality_data", Schema = "public")]
    public class pv_quality_data
    {
        [Key]
        public int? id { get; set; }
        public string well_id { get; set; }
        public int pv_meta_id { get; set; }
        public string aquifer { get; set; }
        public string formation { get; set; }
        public string year { get; set; }
        public string ph { get; set; }
        public string ec { get; set; }
        public string tds { get; set; }
        public string th { get; set; }
        public string calcium { get; set; }
        public string magnesium { get; set; }
        public string sodium { get; set; }
        public string potassium { get; set; }
        public string carbonate { get; set; }
        public string bicarbonate { get; set; }
        public string sulphate { get; set; }
        public string chloride { get; set; }
        public string fluoride { get; set; }
        public string nitrate { get; set; }
        public string remark { get; set; }

    }

    [Table("vw_water", Schema = "public")]
    public class vw_water_all
    {

        public Int64 sr_no { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public DateTime entry_time { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public int isachive { get; set; }
        public string status { get; set; }
        public string status_data { get; set; }

        [Key]
        public int data_id { get; set; }
        public int water_qi_meta_id { get; set; }
        public string qi_date { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string ph { get; set; }
        public string chloride { get; set; }
        public string free_chlorine { get; set; }
        public string turbudity { get; set; }
        public string total_hardness_mgl { get; set; }
        public string alkalinity_mgl { get; set; }
        public string nitrate_mgl { get; set; }
        public string fluoride_mgl { get; set; }
        public string iron_mgl { get; set; }
        public string arsenic_mgl { get; set; }
        public string ec_us_cm { get; set; }
        public string tds { get; set; }
        public string bacterial_test { get; set; }
        public string email { get; set; }
        public DateTime? entry_time_data { get; set; }

    }

    public class lgcode_gwl
    {
        public int? state_id { get; set; }

        public int lg_state { get; set; }
        public int district_id { get; set; }

        public int lg_dist { get; set; }
        public int block_id { get; set; }

        public int lg_block { get; set; }
        public int grampanchayat_id { get; set; }

        public int lg_gram { get; set; }   //edit
        public string well_code { get; set; }

        public int id { get; set; }
        public Int64 sr_no { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string sitename { get; set; }
        public string typeofwell { get; set; }
        public string source_Ownership { get; set; }
        public string source_Ownership_type { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string wellid { get; set; }
        public string welldepth { get; set; }

        public string well { get; set; }
        public DateTime datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string isarchive { get; set; }
        public string locationdetails { get; set; }
        public string other_well_type { get; set; }
        public string Diameter_of_Well { get; set; }
        public string Height_of_Measuring_Point { get; set; }
    }

    public class lgcode_water
    {
        public int? state_id { get; set; }

        public int lg_state { get; set; }
        public int district_id { get; set; }

        public int lg_dist { get; set; }
        public int block_id { get; set; }

        public int lg_block { get; set; }
        public int grampanchayat_id { get; set; }

        public int lg_gram { get; set; }   //edit
        public string well_code { get; set; }

        public int id { get; set; }
        public Int64 sr_no { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_of_entry { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public string entry_time { get; set; }
        public string gwqm_ftk_id { get; set; }
        public string date_time { get; set; }
        public string water_status { get; set; }
        public string issus { get; set; }
        public string otherwelltype { get; set; }
        public string otherspls { get; set; }
        public string date { get; set; }
        public string datetime { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public int isachive { get; set; }
    }

    //MADB class end

    [Table("groundwater_meta", Schema = "public")]
    public class groundwater_meta
    {
        [Key]
        public int meta_id { get; set; }
        public string type { get; set; }
        public string WellType { get; set; }
        public int month { get; set; }
        public int year { get; set; }
        public int value { get; set; }
        public int groundid { get; set; }
        public DateTime? time { get; set; }
        public string pre_monsoon { get; set; }
        public string post_monsoon { get; set; }  //abhi


    }

    [Table("abhy_gwqm_ftk", Schema = "public")]          //chetan api
    public class abhy_gwqm_ftk
    {
        [Key]
        public int? gwqm_ftk_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public DateTime? date { get; set; }
        public DateTime? datetime { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public DateTime? date_of_entry { get; set; }   //edit
        public string type_of_well { get; set; }
        public string well_id { get; set; }
        public string well_depth_mbgl { get; set; }
        public string ph { get; set; }
        public string total_hardness_mgl { get; set; }
        public string alkalinity_mgl { get; set; }
        public string nitrate_mgl { get; set; }
        public string fluoride_mgl { get; set; }
        public string tds { get; set; }
        public string iron_mgl { get; set; }
        public string arsenic_mgl { get; set; }
        public string ec_us_cm { get; set; }
        public string bacterial_test { get; set; }
        public string others { get; set; }
        public string otherspls { get; set; }
        public string otherwelltype { get; set; }
        public string chloride { get; set; }
        public string free_chlorine { get; set; }
        public string turbudity { get; set; }
        public string isachive { get; set; }
        public DateTime date_time { get; set; }
    }

    [Table("abhy_about_contact_agencies", Schema = "public")]
    public class abhy_about_contact_agencies
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string project_coordinator { get; set; }
        public string contact_details { get; set; }
        public string nodel_officer_project_director { get; set; }
        public string agency_name { get; set; }
        public string contact { get; set; }
        public string designation { get; set; }
        public string header { get; set; }
    }


    [Table("abhy_VerificationsTable", Schema = "public")]
    public class Abhy_Verifications
    {
        [Key]
        public int avid { get; set; }
        public string verification_code { get; set; }
    }
    [Table("abhystates_completecensusdata_new", Schema = "public")]
    public class abhystates_completecensusdata_new
    {
        [Key]
        public int SNO { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string sub_district_name { get; set; }
        public string Village_Name { get; set; }
        public string gram_panchayat_name { get; set; }
        public string Total_Geographical_Area_in_Hectares { get; set; }
        public string Total_Households { get; set; }
        public string Total_Population_of_Village { get; set; }
        public string Tube_Wells_Borehole_Functioning_All_round_the_year { get; set; }
        public string Spring_Functioning_All_round_the_year { get; set; }
        public string River_Canal_Functioning_All_round_the_year { get; set; }
        public string Tank_Pond_Lake_Functioning_All_round_the_year { get; set; }
        public string Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour { get; set; }
        public string Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours { get; set; }
        public string Power_Supply_for_domestic_have_to_calculate_the_average_from_tw { get; set; }
        public string Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H { get; set; }
        public string Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho { get; set; }
        public string Power_Supply_for_agriculture_have_to_calculate_the_average_from { get; set; }
        public string Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou { get; set; }
        public string Power_Supply_for_commercial_have_to_calculate_the_average_from_ { get; set; }
        public string Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours { get; set; }
        public string Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours { get; set; }
        public string Power_Supply_for_all_users_have_to_calculate_the_average_from_t { get; set; }
        public string Agricultural_Commodities_First { get; set; }
        public string Manufacturers_Commodities_First { get; set; }
        public string Agricultural_Commodities_Second { get; set; }
        public string Manufacturers_Commodities_Second { get; set; }
        public string Agricultural_Commodities_Third { get; set; }
        public string Area_under_Non_Agricultural_Uses_in_Hectares { get; set; }
        public string Net_Area_Sown_in_Hectares { get; set; }
        public string Canals_Area_in_Hectares { get; set; }
        public string Wells_Tube_Wells_Area_in_Hectares { get; set; }
        public string Tanks_Lakes_Area_in_Hectares { get; set; }
        public string Waterfall_Area_in_Hectares { get; set; }
        public string Manufacturers_Commodities_Third { get; set; }
        public string Springs_Depth { get; set; }
        public string Reservoir_Name { get; set; }
        [Column("Current_Reservoir_Level_(m)")]
        public double Current_Reservoir_Level { get; set; }
        [Column("Live_Capacity_at_FRL_(BCM)")]
        public double Live_Capacity_at_FRL { get; set; }
        [Column("Live_Capacity_at_FRL_(m_cube)")]
        public double Live_Capacity_at_FRL_ { get; set; }
        [Column("Current_Live_Storage_(BCM)")]
        public double Current_Live_Storage { get; set; }
        [Column("Current_Live_Storage_(m_cube)")]
        public double Current_Live_Storage_ { get; set; }

        public double AvgOfSurfaceWaterRainfall { get; set; }
        public double No_Of_CheckDams { get; set; }
        public double CheckDams_Capacity { get; set; }
        public double Gwr_Rainfall_Area { get; set; }
        public double Gwr_Rainfall_Rainfall { get; set; }
        public double NetArea_Under_CheckDams_and_NalaBunds { get; set; }
        public double Gwr_IT_maximum_SubmergenceArea { get; set; }
        public double Gwr_IT_Reacharge_Rate { get; set; }
        public double Gwr_IT_DaysOfSubmergence { get; set; }
        public double Gwr_CD_maximumSubmergence_Area { get; set; }
        public double Gwr_CD_AverageDepthOf_Water { get; set; }
        public double Gwr_CD_NoOfFillings { get; set; }
        public double Gwr_STC_LengthOfthe_Canals { get; set; }
        public double Gwr_STC_Seepage_Factor { get; set; }
        public double Gwr_STC_Flowing_Days { get; set; }
        public double Gwr_STC_Avg_Wetted_Perimeter { get; set; }
        public double Gwr_SWI_AreaIrrigated { get; set; }
        public double Gwr_SWI_DesignedDischarge_At_Outlet { get; set; }
        public double Gwr_SWI_Seepage_Factor { get; set; }
        public double Gwr_SWI_WaterReleased_At_OutLet { get; set; }
        public double Gwr_GwI_CommndArea_Irrigation { get; set; }
        public double Gwr_GwI_CommandArea_ReturnFlow { get; set; }
        public double Gwr_GwI_NonCommand_Area_Irrigation { get; set; }
        public double Gwr_GwI_NonCommand_Area_ReturnFlow { get; set; }
        public double Draft_Irrigation_DailyPumping_Hours { get; set; }
        public double Draft_Irrigation_Total_NoOf_Pumping_Days { get; set; }
        public double Draft_Irrigation_Avg_Pumping_Rate { get; set; }
        public double Draft_Drink_Tot_Water_Requirement_For_People { get; set; }
        public double Draft_Drink_Tot_Water_Requirement_For_CowsBufalos { get; set; }
        public double Draft_Drink_Tot_Water_Requirement_For_Bullocks { get; set; }
        public double Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps { get; set; }
        public double Draft_Industry_GW_In_Take { get; set; }
        public double Draft_Industry_Tot_Noof_Production_Days { get; set; }
        public int Tbl_Condition { get; set; }
        public string Canals_Depth { get; set; }
        public string Tanks_Depth { get; set; }
        public string River_Depth { get; set; }
        public string Springs_Total_Geographical_Area_in_Hectares { get; set; }
        public string Canals_River_Canal_Functioning_All_round_the_year { get; set; }

        public string River_Canals_Area_in_Hectares { get; set; }
        public string Harvesting_Canals_Area_in_Hectares { get; set; }
        public string Harvesting_Tanks_Lakes_Area_in_Hectares { get; set; }
        public string aquifer { get; set; }

        public double springs_Discharge { get; set; }
        public double checkdams_Discharge { get; set; }
        public double canals_Discharge { get; set; }
        public double reservoir_Discharge { get; set; }
        public double lakespondstanks_Discharge { get; set; }
        public double river_Discharge { get; set; }

        public double surface_water_paddy { get; set; }
        public double surface_water_nonpaddy { get; set; }
        public double Industry_Prod_days { get; set; }
        public string checkdams_depth { get; set; }

    }

    [Table("abhy_users_test", Schema = "public")]
    public class Users_Test
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string NodalOfficer { get; set; }
        public string ContactNumber { get; set; }
        public string DepartmentName { get; set; }
        public string Password { get; set; }
        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string Villagename { get; set; }
        public string CheckingCode { get; set; }

        public string stateofficer_email { get; set; }

        public string VerificationCode { get; set; }
        public string Verifiedornot { get; set; }
        public string RollId { get; set; }
    }

    public class UsersVM
    {
        public int? UserId { get; set; }
        public string UserType { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string NodalOfficer { get; set; }
        public string ContactNumber { get; set; }
        public string DepartmentName { get; set; }
        public string Password { get; set; }
        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string Villagename { get; set; }//original password
        public string CheckingCode { get; set; }// # key 
        public string stateofficer_email { get; set; }//for encryption
        public string first_time_approved_by { get; set; }
        public string last_changed_password_by { get; set; }                            // public int? isactive { get; set; }//for concurrent login status
        public string VerificationCode { get; set; }//email verification code
        public string Verifiedornot { get; set; }// email verification status
        public string RollId { get; set; }//for rolls
        public string clientcaptcha { get; set; }
        public int? isactive { get; set; }
        public string access_auth { get; set; }
        public int email_verify { get; set; }
        public string approved_by { get; set; }
        public string mail_sent { get; set; }
        public DateTimeOffset EntryTime { get; set; }
        public string EntryTimeString { get; set; }
        public string approve_DateString { get; set; }
        public string hashText { get; set; }
        public string CP_hashText { get; set; }
        public DateTime? approved_Date { get; set; }
    }


    [Table("abhy_users", Schema = "public")]
    public class Users
    {
        [Key]
        public int? UserId { get; set; }
        public string UserToken { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string NodalOfficer { get; set; }
        public string ContactNumber { get; set; }
        public string DepartmentName { get; set; }
        public string Password { get; set; }
        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string Villagename { get; set; }//original password
        public string CheckingCode { get; set; }// # key 
        public string stateofficer_email { get; set; }//for encryption
                                                      // public int? isactive { get; set; }//for concurrent login status
        public string VerificationCode { get; set; }//email verification code
        public string Verifiedornot { get; set; }// email verification status
        public string RollId { get; set; }//for rolls
        public string clientcaptcha { get; set; }
        public int? isactive { get; set; }
        public string access_auth { get; set; }
        public int email_verify { get; set; }
        public string approved_by { get; set; }
        public string mail_sent { get; set; }
        public DateTimeOffset EntryTime { get; set; }
        public string first_time_approved_by { get; set; }
        public string last_changed_password_by { get; set; }
        public DateTime? approved_Date { get; set; }



    }

    [Table("abhy_users_delete", Schema = "public")]
    public class Users_delete
    {
        [Key]
        public int id { get; set; }
        public int? UserId { get; set; }
        public string UserToken { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string NodalOfficer { get; set; }
        public string ContactNumber { get; set; }
        public string DepartmentName { get; set; }
        public string Password { get; set; }
        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string Villagename { get; set; }//original password
        public string CheckingCode { get; set; }// # key 
        public string stateofficer_email { get; set; }//for encryption
        public string VerificationCode { get; set; }//email verification code
        public string Verifiedornot { get; set; }// email verification status
        public string RollId { get; set; }//for rolls
        public string clientcaptcha { get; set; }
        public int? isactive { get; set; }
        public string access_auth { get; set; }
        public int email_verify { get; set; }
        public string approved_by { get; set; }
        public string mail_sent { get; set; }
        public DateTimeOffset EntryTime { get; set; }
        public string first_time_approved_by { get; set; }
        public string last_changed_password_by { get; set; }
        public string email_delete { get; set; }
        public string datetime_delete { get; set; }
        public DateTime? approved_Date { get; set; }



    }

    [Table("login_datetime", Schema = "public")]
    public class login_datetime
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string loginlogout { get; set; }
        public string date { get; set; }
        public string datetime { get; set; }
        public string checkloginlogout { get; set; }


    }


    public class CropDataViewModel
    {
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string dataYear { get; set; }
        public string seasonType { get; set; }
        public string cropCategory { get; set; }
        public string cropType { get; set; }
        public string cropName { get; set; }
        public string areaIrrigation { get; set; }
        public string grossWater { get; set; }
        public string areaProposed { get; set; }
        public string reductionInDemand { get; set; }
        public string waterDemand { get; set; }
        public string netWaterDemand { get; set; }
        public string reductionGw { get; set; }
    }

    public class RootCrop
    {
        public string Gp { get; set; }
        public List<CropDataViewModel> ListCropDataViewModel { get; set; }

    }

    [Table("vw_loginboth", Schema = "public")]
    public class vw_loginboth
    {
        [Key]
        public int? id { get; set; }
        public string email { get; set; }
        public string name { get; set; }
        public string date { get; set; }
        public int login_count { get; set; }
        public int logout_count { get; set; }
        public string total_duration { get; set; }
        public string NodalOfficer { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string access_auth { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string day { get; set; }

    }

    [Table("vw_loginboth_full", Schema = "public")]
    public class vw_loginboth_full
    {
        [Key]
        public int? id { get; set; }
        public string email { get; set; }
        public string name { get; set; }
        public string date { get; set; }
        public string datetime { get; set; }
        public string loginlogout { get; set; }
        public string NodalOfficer { get; set; }

        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string access_auth { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string day { get; set; }

    }



    [Table("user_autologin", Schema = "public")]
    public class user_autologin
    {
        [Key]
        public int id { get; set; }
        public int user_id { get; set; }
        public string last_ip { get; set; }
        public string last_login { get; set; }
        public int isactive { get; set; }
    }

    [Table("login_attempts", Schema = "public")]
    public class login_attempts
    {
        [Key]
        public long id { get; set; }
        public int userid { get; set; }
        public string ip_address { get; set; }
        public int login_count { get; set; }
        public string last_login { get; set; }
    }

    [Table("feedback_count", Schema = "public")]
    public class feedback_count
    {
        [Key]
        public long id { get; set; }
        public string ip_address { get; set; }
        public int count { get; set; }
        public string entry_date { get; set; }
    }


    [Table("abhy_wpsdetails", Schema = "public")]
    public class WpsDetails
    {
        [Key]
        public int WId { get; set; }

        public string State { get; set; }
        public string Dist { get; set; }
        public string Block { get; set; }
        public string Gram { get; set; }

        public string Lat { get; set; }
        public string Lng { get; set; }
    }

    [Table("abhy_vendorregisters", Schema = "public")]
    public class VendorRegisters
    {
        [Key]
        public long Vid { get; set; }

        public string CompanyName { get; set; }
        public string NodalOfficer { get; set; }
        public string PhoneNumber { get; set; }
        public string MobileNumber { get; set; }

        public string WebsiteLink { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string AreYou { get; set; }
        public string Category { get; set; }
        public string CategoryofHydro { get; set; }
        public string Description { get; set; }
    }

    [Table("abhy_groundwater", Schema = "public")]
    public class GroundWater
    {
        [Key]
        public int ground_waterlevel_id { get; set; }

        public string site_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }

        public string sitename { get; set; }
        public string y2007_pre { get; set; }
        public string y2007_post { get; set; }
        public string y2008_pre { get; set; }
        public string y2008_post { get; set; }
        public string y2009_pre { get; set; }
        public string y2009_post { get; set; }

        public string y2010_pre { get; set; }
        public string y2010_post { get; set; }
        public string y2011_pre { get; set; }
        public string y2011_post { get; set; }
        public string y2012_pre { get; set; }
        public string y2012_post { get; set; }
        public string y2013_pre { get; set; }
        public string y2013_post { get; set; }
        public string y2014_pre { get; set; }
        public string y2014_post { get; set; }
        public string y2015_pre { get; set; }
        public string y2015_post { get; set; }

        public string latitude { get; set; }
        public string longitude { get; set; }
        public string site_type { get; set; }
        public string block_name { get; set; }
        public string vil_name { get; set; }
        public string rainfall { get; set; }
        public string ph { get; set; }
        public string electrical { get; set; }
        public string wqa_th { get; set; }
        public string tds { get; set; }
        public string wqa_total { get; set; }
        public string wqa_ca { get; set; }
        public string wqa_mg { get; set; }
        public string wqa_na { get; set; }
        public string wqa_k { get; set; }
        public string iron { get; set; }
        public string wqa_carbon { get; set; }
        public string wqa_bicarb { get; set; }
        public string chloride { get; set; }
        public string sulphate { get; set; }
        public string nitrate { get; set; }



        public string fluoride { get; set; }
        public string wqa_nitr_1 { get; set; }
        public string dateandtime { get; set; }
        public string wtr_level { get; set; }
        public string username { get; set; }
        public string y2019_pre { get; set; }
    }

    // traing and workshop module

    [Table("events_calendar", Schema = "public")]
    public class events_calendar
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string current_event { get; set; }
        public string current_event_year { get; set; }
        public string event_calendar { get; set; }
        public string download { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string month { get; set; }
        public string download_filename { get; set; }
        public string Nodal_officer { get; set; }
        public string entry_by { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
        public string isarchive { get; set; }
        public int month_number { get; set; }
    }


    [Table("reg_traininggp", Schema = "public")]   //new table
    public class reg_traininggp
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string type_of_event { get; set; }
        public string topic_training { get; set; }
        public string location { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public int male_population { get; set; }
        public int female_population { get; set; }
        public int other_population { get; set; }
        public int total_participants { get; set; }
        public string atten_sheet { get; set; }
        public string photograph { get; set; }
        public string feedback { get; set; }
        public string date { get; set; }
        public string year { get; set; }
        public string SC { get; set; }
        public string ST { get; set; }
        public string OBC { get; set; }
        public string General { get; set; }
        public string event_upload_filename { get; set; }
        public string event_upload { get; set; }
        public string atten_sheet_filename { get; set; }
        public string photograph_filename { get; set; }
        public string feedback_filename { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
        public string unic_key { get; set; }
        public string timestamp { get; set; }
        //public bool gp_sent { get; set; }
        //public bool d_reject { get; set; }
        //public bool d_sent { get; set; }
        //public bool s_reject { get; set; }
        //public bool approved { get; set; }
        //public string remarks { get; set; }
        public string Nodal_officer { get; set; }
        public string participant_name { get; set; }
        public string gender { get; set; }
        public string category { get; set; }
        public string mobile_no { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
        public string approve_status_full { get; set; }
        public string reject_status_full { get; set; }
        public string remark_status_full { get; set; }
        public int new_row { get; set; }

    }

    [Table("reg_traininggp_full", Schema = "public")]   //new table
    public class reg_traininggp_full
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string type_of_event { get; set; }
        public string topic_training { get; set; }
        public string location { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public int male_population { get; set; }
        public int female_population { get; set; }
        public int other_population { get; set; }
        public int total_participants { get; set; }
        public string atten_sheet { get; set; }
        public string photograph { get; set; }
        public string feedback { get; set; }
        public string date { get; set; }
        public string year { get; set; }
        public string SC { get; set; }
        public string ST { get; set; }
        public string OBC { get; set; }
        public string General { get; set; }
        public string atten_sheet_filename { get; set; }
        public string photograph_filename { get; set; }
        public string feedback_filename { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
        public string timestamp { get; set; }
        public string Nodal_officer { get; set; }
        public string participant_name { get; set; }
        public string gender { get; set; }
        public string category { get; set; }
        public string mobile_no { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
        public string approve_status_full { get; set; }
        public string reject_status_full { get; set; }
        public string remark_status_full { get; set; }
        public int multiple_row { get; set; }
        public int old_id { get; set; }
        public int multiple_row_new { get; set; }
        public int multiple_id { get; set; }
    }
    [Table("current_events", Schema = "public")]    //abhi
    public class current_events
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        //public string current_event { get; set; }
        public string p_training_name { get; set; }
        public string type_of_event { get; set; }
        public string location_expo { get; set; }
        public string particular_expo { get; set; }
        public string level_event { get; set; }
        public string event_platform { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public string reg_open_date { get; set; }
        public string reg_close_date { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string year { set; get; }
        public string month { set; get; }
        public string Nodal_officer { get; set; }
        public string entry_by { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
        public string from_date_time { get; set; }
        public string to_date_time { get; set; }
        public string reg_open_date_time { get; set; }
        public string reg_close_date_time { get; set; }
        public string unic_key { get; set; }
        public string filename { get; set; }
        public string filepath { get; set; }
        public string village_name { get; set; }
        public int? male_population { get; set; }
        public int? female_population { get; set; }
        public int? other_population { get; set; }
        public int? total_participants { get; set; }
        public string SC { get; set; }
        public string ST { get; set; }
        public string OBC { get; set; }
        public string General { get; set; }
        public string event_upload_filename { get; set; }
        public string event_upload { get; set; }
        public string atten_sheet_filename { get; set; }
        public string atten_sheet { get; set; }
        public string photograph_filename { get; set; }
        public string photograph { get; set; }
        public string feedback_filename { get; set; }
        public string feedback { get; set; }
        public string nameofparticipent { get; set; }
        public string gendernew { get; set; }
        public string categorynew { get; set; }
        public string mobilenonew { get; set; }
        public string addnewid { get; set; }
        public string feedbackentry { get; set; }
    }
    [Table("current_events_addnew", Schema = "public")]    //abhi
    public class current_events_addnew
    {
        [Key]
        public int id { get; set; }
        public string nameofparticipent { get; set; }
        public string gendernew { get; set; }
        public string categorynew { get; set; }
        public string mobilenonew { get; set; }
        public string addnewid { get; set; }
        public string unic_key { get; set; }

    }

    [Table("vw_current_events_addnew", Schema = "public")]    //abhi
    public class vw_current_events_addnew
    {
        [Key]
        public int rw_id { get; set; }
        public int id { get; set; }
        public string addnewid { get; set; }
        public string level_event { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string p_training_name { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public string month { get; set; }
        public string year { get; set; }
        public string atten_sheet_filename { get; set; }
        public string atten_sheet { get; set; }
        public string nameofparticipent { get; set; }
        public string gendernew { get; set; }
        public string categorynew { get; set; }
        public string mobilenonew { get; set; }
        public string unic_key { get; set; }
        public string from_table { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
    }

    [Table("feedback_gp", Schema = "public")]    //abhi
    public class feedback_gp
    {
        [Key]
        public int? id { get; set; }
        public string feedid { get; set; }
        public string regno { get; set; }
        public string topictraining { get; set; }
        public string gp_training { get; set; }
        public string participant_name { get; set; }
        public string male { get; set; }
        public string female { get; set; }
        public string transgender { get; set; }
        public string event_platform { get; set; }
        public string todaydate { get; set; }
        public string from_date_feed { get; set; }
        public string to_date_feed { get; set; }
        public string total_days { get; set; }
        public string unic_key { get; set; }
        public string structure_of_training { get; set; }
        public string course_material { get; set; }
        public string interaction_with_trainer { get; set; }
        public string hands_on_practice { get; set; }
        public string usefulness_of_contents { get; set; }
        public string information_presented { get; set; }
        public string participant_questions { get; set; }
        public string food_quality { get; set; }
        public string most_interesting_thing { get; set; }
        public string overall_impression { get; set; }
        public string your_suggestions { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string nodal_officer { get; set; }
    }

    [Table("vw_alldata_gplevel", Schema = "public")]    //abhi
    public class alldata_gplevel
    {
        [Key]
        public int rw_id { get; set; }
        public int id { get; set; }
        public string p_training_name { get; set; }
        public string type_of_event { get; set; }
        public string location_expo { get; set; }
        public string particular_expo { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string event_platform { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public string location { set; get; }
        public string male_population { set; get; }
        public string female_population { get; set; }
        public string other_population { get; set; }
        public string total_participants { get; set; }
        public string sc { get; set; }
        public string st { get; set; }
        public string obc { get; set; }
        public string general { get; set; }
        public string atten_sheet_filename { get; set; }
        public string photograph_filename { get; set; }
        public string feedback_filename { get; set; }
        public string event_upload_filename { get; set; }
        public string nameofparticipent { get; set; }
        public string gendernew { get; set; }
        public string categorynew { get; set; }
        public string mobilenonew { get; set; }
        public string regno { get; set; }
        public string feed_p_training_name { get; set; }
        public string feed_gp { get; set; }
        public string feed_total_participants { get; set; }
        public string male { get; set; }
        public string female { get; set; }
        public string other { get; set; }
        public string feed_event_platform { get; set; }
        public string todaydate { get; set; }
        public string from_date_feed { get; set; }
        public string to_date_feed { get; set; }
        public string total_days { get; set; }
        public string structure_of_training { get; set; }
        public string course_material { get; set; }
        public string interaction_with_trainer { get; set; }
        public string hands_on_practice { get; set; }
        public string usefulness_of_contents { get; set; }
        public string information_presented { get; set; }
        public string participant_questions { get; set; }
        public string food_quality { get; set; }
        public string most_interesting_thing { get; set; }
        public string overall_impression { get; set; }
        public string your_suggestions { get; set; }
        public string from_table { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
    }

    [Table("vw_training_count_current_events", Schema = "public")]
    public class current_event_pop
    {
        [Key]
        public int? id { get; set; }
        public string p_training_name { get; set; }
        public string type_of_event { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string Nodal_officer { get; set; }
        public string to_date { get; set; }
        public string training_status { get; set; }
        public string file_count { get; set; }
        public string uploaded_content_status { get; set; }
        public string upload_content_path { get; set; }
        public string upload_content_file { get; set; }
        public string male_count { get; set; }
        public string female_count { get; set; }
        public string transgender_count { get; set; }
        public string total_participants { get; set; }
        public string event_approve_status { get; set; }
        public string material_approve_status { get; set; }

    }

    public class current_event_pop_new
    {
        [Key]
        public int? id { get; set; }
        public string p_training_name { get; set; }
        public string type_of_event { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string Nodal_officer { get; set; }
        public string to_date { get; set; }
        public string training_status { get; set; }
        public string file_count { get; set; }
        public string uploaded_content_status { get; set; }
        public string upload_content_path { get; set; }
        public string upload_content_file { get; set; }
        public string male_count { get; set; }
        public string female_count { get; set; }
        public string transgender_count { get; set; }
        public string total_participants { get; set; }
        public string fd_male_count { get; set; }
        public string fd_female_count { get; set; }
        public string fd_transgender_count { get; set; }
        public string fd_total_count { get; set; }
        public string event_approve_status { get; set; }
        public string material_approve_status { get; set; }

    }

    [Table("vw_training_gender_count_material_gp", Schema = "public")]
    public class TrainingGenderCountMaterialGp
    {
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string p_training_name { get; set; }
        public string training_status { get; set; }
        public string Nodal_officer { get; set; }
        public int male_population { get; set; }
        public int female_population { get; set; }
        public int other_population { get; set; }
        public int total_participants { get; set; }
        public string event_upload_filename { get; set; }
        public string event_upload { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
        public string unic_key { get; set; }
    }
    [Table("vw_training_gender_feedback_count_npmu", Schema = "public")]
    public class vw_training_gender_feedback_count_npmu
    {
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string Nodal_officer { get; set; }
        public string p_training_name { get; set; }
        public string training_status { get; set; }
        public string filename { get; set; }
        public string filepath { get; set; }
        public int reg_male_count { get; set; }
        public int reg_female_count { get; set; }
        public int reg_transgender_count { get; set; }
        public int reg_total_count { get; set; }
        public int fd_male_count { get; set; }
        public int fd_female_count { get; set; }
        public int fd_transgender_count { get; set; }
        public int fd_total_count { get; set; }
        public string unic_key { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
    }

    [Table("vw_current_events", Schema = "public")]    //abhi
    public class vw_current_events
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        //public string current_event { get; set; }
        public string p_training_name { get; set; }
        public string type_of_event { get; set; }
        public string location_expo { get; set; }
        public string particular_expo { get; set; }
        public string level_event { get; set; }
        public string event_platform { get; set; }
        public string yearname { get; set; }
        public string monthname { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public string reg_open_date { get; set; }
        public string reg_close_date { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public double year { set; get; }
        public double month { set; get; }
        public string Nodal_officer { get; set; }
        public string entry_by { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
        public string from_date_time { get; set; }
        public string to_date_time { get; set; }
        public string reg_open_date_time { get; set; }
        public string reg_close_date_time { get; set; }
        public string FinancialMonth { get; set; }
        public string FinancialYear { get; set; }
        public double? day { get; set; }
        public string unic_key { get; set; }
        public string highest_date { get; set; }
        public Double highest_date_year { get; set; }
        public Double highest_date_month { get; set; }
        public Double highest_date_day { get; set; }
    }

    [Table("vw_reg_traininggp", Schema = "public")]   //new table
    public class vw_reg_traininggp
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string type_of_event { get; set; }
        public string topic_training { get; set; }
        public string location { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public int male_population { get; set; }
        public int female_population { get; set; }
        public int other_population { get; set; }
        public int total_participants { get; set; }
        public string atten_sheet { get; set; }
        public string photograph { get; set; }
        public string feedback { get; set; }
        public string date { get; set; }
        public string year { get; set; }
        public string SC { get; set; }
        public string ST { get; set; }
        public string OBC { get; set; }
        public string General { get; set; }
        public string atten_sheet_filename { get; set; }
        public string photograph_filename { get; set; }
        public string feedback_filename { get; set; }
        public string month { get; set; }
        public int? month_order_by { get; set; }
        public string entry_by { get; set; }
        public string timestamp { get; set; }
        public string Nodal_officer { get; set; }
        public string participant_name { get; set; }
        public string gender { get; set; }
        public string category { get; set; }
        public string mobile_no { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }
        public string approve_status_full { get; set; }
        public string reject_status_full { get; set; }
        public string remark_status_full { get; set; }
        public int new_row { get; set; }
        public double day { get; set; }
        public string FinancialMonth { get; set; }
        public string FinancialYear { get; set; }

    }
    [Table("events_material", Schema = "public")]    //abhi new
    public class events_material
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        //public string current_event { get; set; }
        public string p_training_name { get; set; }
        public string type_of_event { get; set; }
        public string location_expo { get; set; }
        public string particular_expo { get; set; }
        public string level_event { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string unic_key { get; set; }

        public string event_platform { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public string upload_content { get; set; }
        public string remark { get; set; }
        public string Nodal_officer { get; set; }
        public string entry_by { get; set; }
        public string approve_status { get; set; }
        public string reject_status { get; set; }
        public string remark_status { get; set; }

    }

    [Table("abhy_training_newregs", Schema = "public")]
    public class abhy_training_newregs
    {
        [Key]
        public int? id { get; set; }
        public string p_name { get; set; }
        public string p_gender { get; set; }
        public string p_age { get; set; }
        public string p_occupation { get; set; }
        public string p_qual { get; set; }
        public string p_phoneno { get; set; }
        public string p_emailid { get; set; }
        public string p_address { get; set; }
        public string p_training_name { get; set; }
        public string p_state_name { get; set; }
        public string p_district_name { get; set; }
        public string p_block_name { get; set; }
        public string p_other_state_name { get; set; }
        public string registration_no { get; set; }
        public string clientcaptcha { get; set; }
        public string parti_state { get; set; }
        public string to_date { get; set; }
        public string from_date { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string currentdate { get; set; }
        public string entry_date { get; set; }
        public string nodal { get; set; }
        public string unic_key { get; set; }
        public string typeofevent { get; set; }
        public string mail_send { get; set; }
        public string mailsend_date { get; set; }
        public string feedback_yesno { get; set; }
        public Int32 mail_count { get; set; }
    }

    [Table("vw_abhy_training_newregs_approved", Schema = "public")]
    public class vw_abhy_training_newregs_approved
    {
        [Key]
        public int? id { get; set; }
        public string p_name { get; set; }
        public string p_gender { get; set; }
        public string p_age { get; set; }
        public string p_occupation { get; set; }
        public string p_qual { get; set; }
        public string p_phoneno { get; set; }
        public string p_emailid { get; set; }
        public string p_address { get; set; }
        public string p_training_name { get; set; }
        public string p_state_name { get; set; }
        public string p_district_name { get; set; }
        public string p_block_name { get; set; }
        public string p_other_state_name { get; set; }
        public string registration_no { get; set; }
        public string clientcaptcha { get; set; }
        public string parti_state { get; set; }
        public string to_date { get; set; }
        public string from_date { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string currentdate { get; set; }
        public string entry_date { get; set; }
        public string nodal { get; set; }
        public string unic_key { get; set; }
        public string typeofevent { get; set; }
        public string mail_send { get; set; }
        public string mailsend_date { get; set; }
        public string feedback_yesno { get; set; }
        public string approve_status { get; set; }
        public Int32 mail_count { get; set; }
    }

    [Table("abhy_feedback_latest", Schema = "public")]   //abhi
    public class abhy_feedback_latest
    {
        [Key]
        public int id { get; set; }
        public string registration_no { get; set; }
        public string p_training_name { get; set; }
        public string participant_name { get; set; }
        public string level_of_event { get; set; }
        public string event_platform { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public string total_days { get; set; }
        public string structure_of_training { get; set; }
        public string course_material { get; set; }
        public string interaction_with_trainer { get; set; }
        public string hands_on_practice { get; set; }
        public string usefulness_of_contents { get; set; }
        public string information_presented { get; set; }
        public string participant_questions { get; set; }
        public string food_quality { get; set; }
        public string most_interesting_thing { get; set; }
        public string overall_impression { get; set; }
        public string your_suggestions { get; set; }
        public string clientcaptcha { get; set; }
        public string DateTime { get; set; }
        public string dist { get; set; }
        public string block { get; set; }
        public string unic_key { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string Nodal_officer { get; set; }
        public string currentdate { get; set; }
        public string gender { get; set; }
    }

    //[Table("abhy_IEC", Schema = "public")]
    //public class abhy_IEC
    //{
    //    public int id { get; set; }
    //    public string state_name { get; set; }
    //    public string district_name { get; set; }
    //    public string block_name { get; set; }
    //    public string gpname { get; set; }
    //    public string year { get; set; }
    //    public string month { get; set; }
    //    public int order_by_month { get; set; }
    //    public string entry_by { get; set; }
    //    public string activity { get; set; }
    //    public string activity_other { get; set; }
    //    public string sub_activity { get; set; }
    //    public string sub_activity_other { get; set; }
    //    public string number { get; set; }
    //    public string cumulative_total { get; set; }
    //    public string IEC_activity { get; set; }
    //    public string remark { get; set; }
    //    public string Nodal_officer { get; set; }
    //    public string approve_status { get; set; }
    //    public string reject_status { get; set; }
    //    public string remark_status { get; set; }
    //}

    [Table("abhy_groundwaterquantity", Schema = "public")]
    public class GroundWaterQuantity
    {
        [Key]
        public string state_name { get; set; }
        public string dist_name { get; set; }
        public string tal_name { get; set; }
        public string block_name { get; set; }
        public string area { get; set; }
        public string ham { get; set; }

        public string ham0 { get; set; }
        public string avail_ham { get; set; }
        public string irr_ham { get; set; }
        public string stage { get; set; }
        public string text { get; set; }
        public string ind_ham { get; set; }

        public string gw_dft_ham { get; set; }
        public string area_1 { get; set; }
        public string ham_1 { get; set; }
        public string annual_ground_water { get; set; }
        public string net_annual_ground_water { get; set; }
        public string irr_ham_1 { get; set; }



        public string stage_of_ground_water_percent { get; set; }
        public string category { get; set; }
        public string categorisation { get; set; }
        public string ind_ham_1 { get; set; }
        public string annual_ground_water_draft { get; set; }
        public string longitude { get; set; }

        public string latitude { get; set; }
        public int ground_water_quantity_id { get; set; }
        public string emailid { get; set; }
    }
    [Table("abhy_demand", Schema = "public")]
    public class abhy_demand
    {
        [Key]
        public long demand_id { get; set; }
        public string emailid { get; set; }
        public string activity { get; set; }
        public string startdate { get; set; }
        public string enddate { get; set; }
        public string number { get; set; }
        public string unitcost { get; set; }
        public string area { get; set; }
        public string funding { get; set; }
        public string implementing { get; set; }
        public string totalbudget { get; set; }
        public string dateandtime { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string category { get; set; }
        public string fcmkey { get; set; }
        public int? userid { get; set; }
        public DateTime todaydate { get; set; }



    }


    [Table("abhy_tenderdetails", Schema = "public")]
    public class TenderDetails
    {
        [Key]
        public long tid { get; set; }
        public int Approvedby { get; set; }
        public string bid_ref_no { get; set; }
        public string description { get; set; }
        public string office_inviting_tender { get; set; }
        public string office_emailid { get; set; }
        public string publish_date { get; set; }
        public string tender_ref_no { get; set; }
        public string UserName { get; set; }
        public int? UserId { get; set; }
        public string url { get; set; }
        public string sale_start_datetime { get; set; }
        public string sale_end_datetime { get; set; }
        public string last_submission_datetime { get; set; }
        public string opening_start_datetime { get; set; }
        public string accept { get; set; }
        public string development_area { get; set; }
        public string state_name { get; set; }
    }

    [Table("abhy_tender_award", Schema = "public")]
    public class TenderAwards
    {
        [Key]
        public long taid { get; set; }
        public string UserName { get; set; }
        public int? UserId { get; set; }
        public int Approvedby { get; set; }
        public string package_no { get; set; }
        public string packagename { get; set; }
        public string contract_award_date { get; set; }
        public string agency { get; set; }
        public string contract_amount { get; set; }
        public string name_of_consultant { get; set; }
        public string accept { get; set; }
        public string state_name { get; set; }

    }

    [Table("abhy_e_tenderpage", Schema = "public")]
    public class E_Tender
    {
        [Key]
        public long aetid { get; set; }
        public string UserName { get; set; }
        public int? UserId { get; set; }
        public int Approvedby { get; set; }
        public string state { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string accept { get; set; }
        public string state_name { get; set; }
    }



    [Table("abhy_grievance", Schema = "public")]
    public class New_Grievance
    {
        [Key]
        public long agid { get; set; }
        public string subject { get; set; }
        public string grievance_type { get; set; }
        public string grievance_address_to { get; set; }
        public string fullname { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public string IdentificationId { get; set; }
        public int CreatedBy { get; set; }
        public int ApprovedBy { get; set; }
        public string grivance_description { get; set; }
        public byte[] supported_document1 { get; set; }
        public string supported_document { get; set; }
        public string accept { get; set; }
        public string file_name { get; set; }
        public string complaint_name { get; set; }
        public string officer_name { get; set; }
        public string reg_date { get; set; }
        public string mail_count { get; set; }
        public string mail_count_date { get; set; }
        public string mail_count1 { get; set; }
        public string mail_count1_date { get; set; }
        public string mail_count2 { get; set; }
        public string mail_count2_date { get; set; }
    }

    [Table("grievance_new", Schema = "public")]
    public class grievance_new
    {
        [Key]
        public long agid { get; set; }
        public string subject { get; set; }
        public string grievance_type { get; set; }
        public string grievance_address_to { get; set; }
        public string fullname { get; set; }
        public string email { get; set; }
        public string mobile { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public string IdentificationId { get; set; }
        public int CreatedBy { get; set; }
        public int ApprovedBy { get; set; }
        public string grivance_description { get; set; }
        public byte[] supported_document1 { get; set; }
        public string supported_document { get; set; }
        public string accept { get; set; }
        public string file_name { get; set; }
        public string complaint_name { get; set; }
        public string officer_name { get; set; }
        public string reg_date { get; set; }
        public string mail_count { get; set; }
        public string mail_count_date { get; set; }
        public string mail_count1 { get; set; }
        public string mail_count1_date { get; set; }
        public string mail_count2 { get; set; }
        public string mail_count2_date { get; set; }
        public string status { get; set; }
        public string District_name { get; set; }
        public string process { get; set; }
        public string supported_document_file { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string approve_date { get; set; }
        public string forward_mail { get; set; }
        public string yes_no { get; set; }
        public string registation_date_time { get; set; }
    }

    [Table("abhy_grievance_officer_mails_info", Schema = "public")]
    public class abhy_grievance_officer_mails_info
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string first_officername { get; set; }
        public string first_officer_mailid { get; set; }
        public string second_officername { get; set; }
        public string second_officer_mailid { get; set; }
        public string third_officername { get; set; }
        public string third_officer_mailid { get; set; }
        public string fourth_officername { get; set; }
        public string fourth_officer_mailid { get; set; }
    }

    [Table("abhy_grievance_officer_mails_info_new", Schema = "public")]
    public class abhy_grievance_officer_mails_info_new
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string first_officername { get; set; }
        public string first_officer_mailid { get; set; }
        public string second_officername { get; set; }
        public string second_officer_mailid { get; set; }
        public string third_officername { get; set; }
        public string third_officer_mailid { get; set; }

    }

    [Table("grm_disrtict_email_list", Schema = "public")]
    public class grm_disrtict_email_list
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string name { get; set; }
        public string district_nodal_officer { get; set; }
        public string email { get; set; }
        public string phone_no { get; set; }

    }

    [Table("abhy_conference", Schema = "public")]
    public class Conference
    {
        [Key]
        public int acid { get; set; }
        public string Conference_type { get; set; }

        public string UserName { get; set; }
        public byte[] Image { get; set; }

        public string Time { get; set; }
        public string conference_name { get; set; }
        public string start_date { get; set; }
        public string location { get; set; }
        public string accept { get; set; }

        public int CreatedBy { get; set; }
        public int Approvedby { get; set; }

    }

    [Table("abhy_village_parameters", Schema = "public")]
    public class VillageParameters
    {
        [Key]
        public int fid { get; set; }
        public string dateandtime { get; set; }
        public string village_name { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }
        public string area_ha { get; set; }
        public string area_underlined_by { get; set; }

        public string infilteration_factor { get; set; }
        public string rainfall_m { get; set; }
        public string recharge_factor_estimated { get; set; }
        public string max_submergence_area_of_irrigation_tank { get; set; }
        public string max_submergence_area_of_percolation_tank { get; set; }
        public string max_submergence_area_of_checkdams { get; set; }
        public string max_submergence_area_of_wells_tubewells { get; set; }
        public string canal_type_lined_unlined { get; set; }
        public string geology { get; set; }
        public string soil_type { get; set; }
        public string number_of_wells { get; set; }
        public string length_of_the_canal_m { get; set; }
        public string recharge_rate_m_day { get; set; }
        public string days_of_submergence { get; set; }
        public string water_submergence_area_m2 { get; set; }
        public string average_depth_of_water_m { get; set; }

        public string number_of_fillings { get; set; }
        public string flowing_days_of_canal { get; set; }
        public string average_wetted_perimeter { get; set; }
        public string area_irrigated_ha { get; set; }
        public string design_discharge_at_outlet { get; set; }
        public string water_released_at_outlet { get; set; }
        public string command_area_irrigation { get; set; }

        public string cammand_area_return_flow { get; set; }

        public string non_cammand_area_return_flow { get; set; }
        public string total_no_of_functional_wells_for_irrigation { get; set; }
        public string avg_of_daily_pumping_hours { get; set; }
        public string total_no_of_pumping_days { get; set; }
        public string avg_well_discharge_m3 { get; set; }
        public string total_population { get; set; }
        public string water_requirement_at_55_lpcd { get; set; }
        public string total_no_of_cows_buffaloes { get; set; }

        public string total_no_of_bullocks { get; set; }
        public string total_no_of_sheep_goat { get; set; }
        public string water_requirement_cows_buffaloes_50_lpcd { get; set; }
        public string water_requirement_at_bullocks_at_30_lpcd { get; set; }

        public string water_requirement_at_sheep_goat_at_10_lpc { get; set; }
        public string total_number_of_production_days { get; set; }
        public string industria_use_m3_day { get; set; }
        public string domestic_use_in_industry_m3_day { get; set; }
        public string gardening_m3_day { get; set; }
        public string non_cammand_area_irrigation_ha_m { get; set; }
        public string area_of_the_canal_ha { get; set; }
        public string seepage_factor { get; set; }

        public string emailid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string grampanchyatname { get; set; }
    }

    public class State
    {
        public string StateName { get; set; }
        public List<District> District { get; set; }
    }
    public class District
    {
        public string DistrictName { get; set; }
        public List<Mandal> Mandal { get; set; }
    }
    public class Mandal
    {
        public string MandalName { get; set; }
        public List<Panchayat> Panchayat { get; set; }
    }
    public class Panchayat
    {
        public string PanchayatName { get; set; }
        public List<Village> Village { get; set; }
    }
    public class Village
    {
        public string VillageName { get; set; }
    }
    [Table("abhy_appeal_reg", Schema = "public")]
    public class Appeal_Registration
    {
        [Key]
        public long aarid { get; set; }
        public int ApprovedBy { get; set; }
        public int agid { get; set; }
        public int CreatedBy { get; set; }
        public string subject { get; set; }

        public string appeal_type { get; set; }

        public string appeal_address_to { get; set; }

        public string fullname { get; set; }


        public string email { get; set; }
        [MaxLength(10)]
        public string mobile { get; set; }
        [MaxLength(10)]
        public string phone { get; set; }

        public string address { get; set; }

        public string description { get; set; }

        public byte[] suppoorteddocument1 { get; set; }
        public string suppoorteddocument { get; set; }
        public string accept { get; set; }
        public string filename { get; set; }

        public string officer_name { get; set; }
        public string grievance_id { get; set; }

    }
    [Table("abhy_water_budget", Schema = "public")]
    public class abhywaterbudget
    {
        [Key]
        public int WBId { get; set; }
        public string Area { get; set; }
        public string Rainfall { get; set; }
        public string Area_underlined_by { get; set; }
        public string Max_submergence_area { get; set; }
        public string Recharge_rate { get; set; }
        public string Days_of_submergence { get; set; }
        public string Length_of_the_canal { get; set; }
        public string Seepage_factor { get; set; }
        public string Flowing_Days_of_canal { get; set; }
        public string Average_wetted_perimeter { get; set; }
        public string Command_Area_Irrigation { get; set; }
        public string Canal_Type { get; set; }
        public string Soil { get; set; }
        public string Area_Percolation_Tank { get; set; }

        public string Average_Depth_of_Water { get; set; }
        public string Number_of_Fillings { get; set; }
        public string Water_Submergence_Area_Check_Dam { get; set; }

        public string Area_Irrigated { get; set; }
        public string Water_Released_at_Outlet { get; set; }
        public string Recharge_Rate_Check_Dams_and_Nala_Bunds { get; set; }
        public string Days_of_submergence_Check_Dams_and_Nala_Bunds { get; set; }
        public string Rainfall_Ground_Water_Irrigation { get; set; }
        public string Irrigation_Speedpage_factor { get; set; }
        public string Check_dams_NumberofFillings { get; set; }
        public string Draft_total_noof_Functional_wells_for_Irrigation { get; set; }
        public string Draft_Avg_of_Daily_Pumping_Days { get; set; }
        public string Drafts_Total_noof_Pumping_Days { get; set; }
        public string Drafts_Avg_Well_Discharge { get; set; }
        public string Drafts_Totals_Papulation { get; set; }
        public string Drafts_Total_noof_cowsand_buffaloes { get; set; }
        public string Drafts_total_noof_bullocks { get; set; }
        public string drafts_Total_noof_Sheepand_goats { get; set; }

        public string Drafts_Length_of_the_canal { get; set; }
        public string Drafts_Seepage_Factor { get; set; }
        public string Drafts_Flowing_Days_of_canal { get; set; }
        public string Drafts_Avg_wetted_Perimeter { get; set; }
        public string User_Id { get; set; }
        public string statename { get; set; }

        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string VillageName { get; set; }
        public string Inserted_Date { get; set; }


        public string Rainfall_Recharge_Factor { get; set; }
        public string Harvesting_Net_Area_UnderWell_TubeWell { get; set; }
        public string Harvesting_Net_Area_UnderCanals { get; set; }
        public string Harvesting_Net_Area_UnderIrrigationTanks { get; set; }
        public string Harvesting_Net_Area_UnderCheckDams_NalaBunds { get; set; }
        public string CheckDams_Max_Submergence_Area { get; set; }
        public string Designed_Discharge_at_Outlet { get; set; }
        public string SurfaceWaterIrrigation_Seepage_Factor { get; set; }
        public string CommandArea_ReturnFlow { get; set; }
        public string NonCommandArea_Irrigation { get; set; }
        public string NonCommandArea_ReturnFlow { get; set; }
        public string Draft_Daily_pumping_HoursOrDays { get; set; }
        public string Draft_Avg_Pumping_Rate { get; set; }
        public string Draft_Total_Water_Requirement_For_People { get; set; }
        public string Draft_Ground_Water_in_Tank { get; set; }
        public string Draft_Total_Number_Of_ProductionDays { get; set; }


    }


    [Table("abhy_ground_water", Schema = "public")]
    public class abhy_ground_water
    {
        [Key]
        public long agwlid { get; set; }

        public string source { get; set; }

        public string siteid { get; set; }

        public string site_name { get; set; }

        public string gw_2010 { get; set; }

        public string gw_2011 { get; set; }

        public string gw_2012 { get; set; }

        public string gw_2013 { get; set; }


        public string gw_2014 { get; set; }

        public string gw_2015 { get; set; }

        public string gw_2016 { get; set; }

        public string gw_average_2011_2016_ { get; set; }

        public string gw_2016_post_monsoon { get; set; }

        public string gw_2017_pre_monsoon { get; set; }

        public string gw_2016_utilization { get; set; }

        public string progress { get; set; }

        public string state { get; set; }

        public string district { get; set; }
        public string block { get; set; }

        public string panchayat { get; set; }
        public string village { get; set; }

    }

    [Table("abhy_groundwater_rainfall", Schema = "public")]
    public class abhy_groundwater_rainfall
    {
        [Key]
        public long agwrid { get; set; }

        public string source { get; set; }

        public string rainfall { get; set; }

        public string gwr_2010 { get; set; }

        public string gwr_2011 { get; set; }

        public string gwr_2012 { get; set; }

        public string gwr_2013 { get; set; }

        public string gwr_2014 { get; set; }


        public string gwr_2015 { get; set; }

        public string baseline_2007_to_2015_average { get; set; }

        public string gwr_2016_pre_monsoon { get; set; }

        public string gwr_2016_post_monsoon { get; set; }

        public string gwr_2017_pre_monsoon { get; set; }

        public string deviation { get; set; }


        public string state { get; set; }

        public string district { get; set; }
        public string block { get; set; }

        public string panchayat { get; set; }
        public string village { get; set; }

    }
    [Table("Abhy_Training_Workshops", Schema = "public")]
    public class Abhy_Training_Workshops
    {
        [Key]
        public long atwid { get; set; }

        public string Trainingname { get; set; }

        public string to_date { get; set; }

        public string from_date { get; set; }

        public string Venue { get; set; }

        public string Event { get; set; }

        public string no_of_registered_users { get; set; }

        public string phone_number { get; set; }


        public string pan_number { get; set; }
        public string description { get; set; }



    }

    [Table("abhy_training_workshops", Schema = "public")]
    public class abhy_training_workshops
    {
        [Key]
        public int id { get; set; }
        public string to_date { get; set; }
        public string from_date { get; set; }
        public string p_training_name { get; set; }
        // public string mobile { get; set; }
        //public string pan_number { get; set; }
        public string training_start { get; set; }
        public string training_end { get; set; }
        public string training_status { get; set; }
        public string state_name { get; set; }
        public string other_state_name { get; set; }

    }



    [Table("abhy_tbl_error", Schema = "public")]
    public class abhy_tbl_error
    {
        [Key]
        public int? id { get; set; }
        public string error_test { get; set; }
        public string user_email { get; set; }
        public string user_type { get; set; }
        public string user_password { get; set; }
        public string user_name { get; set; }
        public string nodal_officer { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string ipaddress { get; set; }
        public string mobile { get; set; }
        public string department { get; set; }
        public string date_time { get; set; }
        public string error_count { get; set; }
    }
    [Table("abhy_tamc", Schema = "public")]
    public class abhy_tamc
    {
        [Key]
        public long atid { get; set; }

        public string name { get; set; }

        public string designation { get; set; }

        public string mobile { get; set; }

        public string email { get; set; }

        public string location { get; set; }



    }
    [Table("abhy_agencies", Schema = "public")]

    public class abhy_agencies
    {
        [Key]
        public int aid { get; set; }
        public string agencies { get; set; }
        public string address { get; set; }
        //public string weblink { get; set; }
        public string emailid { get; set; }
        public string department { get; set; }

        public string staff_name { get; set; }
        public string designation { get; set; }
        public string mobile { get; set; }
        public string phone { get; set; }
        // public string position { get; set; }
        // public string authorizedname { get; set; }
        // public int staff { get; set; }
        // public string Agency_Content { get; set; }
        // public int fkid { get; set; }

    }
    //[Table("abhy_agencies", Schema = "public")]

    //public class abhy_agencies
    //{
    //    [Key]
    //    public int aid { get; set; }
    //    public string agencies { get; set; }
    //    public string address { get; set; }
    //    public string weblink { get; set; }
    //    public string emailid { get; set; }
    //    public string department { get; set; }

    //    public string staff_name { get; set; }
    //    public string designation { get; set; }
    //    public string mobile { get; set; }
    //    public string phone { get; set; }
    //    public string position { get; set; }
    //    //public string authorizedname { get; set; }
    //    public int staff { get; set; }
    //    public string Agency_Content { get; set; }
    //    public int fkid { get; set; }

    //}

    [Table("TblAreaUnderLine_By", Schema = "public")]
    public class TblAreaUnderLine_By
    {
        [Key]
        public int aulid { get; set; }
        public int AreaunderlinedBy_TypeId { get; set; }
        public string AreaunderlinedBy_Name { get; set; }
        public string RechargeFactor { get; set; }
    }



    public class State_master
    {
        public string StateName { get; set; }
        public List<District_master> District_master { get; set; }
    }
    public class District_master
    {
        public string DistrictName { get; set; }
        public List<Mandal_master> Mandal_master { get; set; }
    }
    public class Mandal_master
    {
        public string MandalName { get; set; }
        public List<Panchayat_master> Panchayat_master { get; set; }
    }
    public class Panchayat_master
    {
        public string PanchayatName { get; set; }
        public List<Village_master> Village_master { get; set; }
    }
    public class Village_master
    {
        public string VillageName { get; set; }
    }
    [Table("tblGroundwaterLevels", Schema = "public")]

    public class GroundwaterLevels
    {
        [Key]
        public int gid { get; set; }
        public string SITE_ID { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string SiteName { get; set; }
        public string bl_avg { get; set; }

        public string y2007_pre { get; set; }
        public string y2007_post { get; set; }
        public string y2008_pre { get; set; }
        public string bl2007 { get; set; }
        public string y2008_post { get; set; }
        public string y2009_pre { get; set; }

        public string bl2008 { get; set; }
        public string y2009_post { get; set; }
        public string y2010_pre { get; set; }
        public string bl2009 { get; set; }
        public string y2010_post { get; set; }

        public string y2011_pre { get; set; }
        public string bl2010 { get; set; }
        public string y2011_post { get; set; }
        public string y2012_pre { get; set; }
        public string bl2011 { get; set; }
        public string y2012_post { get; set; }
        public string y2013_pre { get; set; }
        public string bl2012 { get; set; }
        public string y2013_post { get; set; }
        public string y2014_pre { get; set; }
        public string bl2013 { get; set; }

        public string y2014_post { get; set; }
        public string y2015_pre { get; set; }
        public string bl2014 { get; set; }
        public string y2015_post { get; set; }
        public string y2016_pre { get; set; }
        public string bl2015 { get; set; }

        public string y2016_post { get; set; }
        public string lat { get; set; }
        public string longitude { get; set; }
        public string Progress { get; set; }
        public string bl2016 { get; set; }
        public string the_geom { get; set; }

        public string Active { get; set; }
        public string stateId { get; set; }
        public string DistrictId { get; set; }
        public string GPId { get; set; }
        public string BlockId { get; set; }
        public string PiezometerInstalled { get; set; }


        public string bl2017 { get; set; }
        public string bl2018 { get; set; }
        public string bl2019 { get; set; }
        public string bl2020 { get; set; }
        public string bl2021 { get; set; }

        public string y2017_pre { get; set; }
        public string y2017_post { get; set; }
        public string y2018_pre { get; set; }
        public string y2018_post { get; set; }
        public string y2019_pre { get; set; }
        public string y2019_post { get; set; }


        public string Source { get; set; }
        public string y2020_pre { get; set; }
        public string y2020_post { get; set; }
        public string y2021_pre { get; set; }
        public string y2021_post { get; set; }
        public string y2018utilaization { get; set; }

    }

    [Table("tblInstitutionalIndex", Schema = "public")]

    public class InstitutionalIndex
    {
        [Key]
        public int institutionalindex { get; set; }
        public string pia_gwspecialist_tp { get; set; }
        public string pia_gwspecialist_fp { get; set; }
        public string pia_rsgispecialist_tp { get; set; }

        public string pia_socialsciencecomm_tp { get; set; }


        public string State { get; set; }
        public string pia_socialsciencecomm_fp { get; set; }
        public string pia_dataanalyst_tp { get; set; }
        public string pia_dataanalyst_fp { get; set; }
        public string pia_economicsspecialist_tp { get; set; }

        public string pia_economicsspecialist_fp { get; set; }
        public string pia_chemist_tp { get; set; }
        public string pia_chemist_fp { get; set; }
        public string pia_environmentalspecialist_tp { get; set; }
        public string pia_environmentalspecialist_fp { get; set; }



        public string pia_agriculturalspecialist_tp { get; set; }
        public string pia_agriculturalspecialist_fp { get; set; }
        public string block_hydrogeologist_tp { get; set; }
        public string block_hydrogeologist_fp { get; set; }
        public string block_socialsciences_tp { get; set; }


        public string block_socialsciences_fp { get; set; }
        public string block_dataentry_tp { get; set; }
        public string block_dataentry_fp { get; set; }
        public string commity_regentities { get; set; }
        public string commity_functionalmeetings { get; set; }

        public string commity_financemechanism { get; set; }
        public string trainspecializedtraining { get; set; }
        public string trainpiastafftrained { get; set; }
        public string traingpstafftrained { get; set; }
        public string datawells { get; set; }

        public string digwtrlevel { get; set; }
        public string volumetric { get; set; }
        public string energy { get; set; }
        public string datanowells { get; set; }
        public string datanowellsquality { get; set; }

        public string biweekly { get; set; }
        public string datafreqprepost { get; set; }
        public string datafreqseasonally { get; set; }
        public string infradwlrwells { get; set; }
        public string infralabs { get; set; }


        public string infracomputerinternetpia { get; set; }
        public string annualdatareport { get; set; }
        public string annualdataanalysisreport { get; set; }
        public string dataonemonth { get; set; }
        public string datathreemonths { get; set; }




        public string totalobswells { get; set; }
        public string pia_gwmodeler_tp { get; set; }
        public string pia_gwmodeler_fp { get; set; }
        public string Index { get; set; }
        public string stateId { get; set; }


    }

    [Table("tblRainfall", Schema = "public")]
    public class RainFallData
    {
        [Key]
        public string Block { get; set; }
        public string District { get; set; }
        public string State { get; set; }
        [Column("2007_preMonsoon")]
        public string pre_2007 { get; set; }

        [Column("2007_monsoon")]
        public string mon_2007 { get; set; }
        [Column("2008_preMonsoon")]
        public string pre_2008 { get; set; }

        [Column("2008_Monsoon")]
        public string mon_2008 { get; set; }
        [Column("2009_premonsoon")]
        public string pre_2009 { get; set; }

        [Column("2009_Monsoon")]
        public string mon_2009 { get; set; }
        [Column("2010_premonsoon")]
        public string pre_2010 { get; set; }

        [Column("2010_Monsoon")]
        public string mon_2010 { get; set; }
        [Column("2011_Premonsoon")]
        public string pre_2011 { get; set; }

        [Column("2011_Monsoon")]
        public string mon_2011 { get; set; }
        [Column("2012_premonsoon")]
        public string pre_2012 { get; set; }

        [Column("2012_monsoon")]
        public string mon_2012 { get; set; }
        [Column("2013_preMonsoon")]
        public string pre_2013 { get; set; }

        [Column("2013_monsoon")]
        public string mon_2013 { get; set; }


        [Column("2014_preMonsoon")]
        public string pre_2014 { get; set; }

        [Column("2014_monsoon")]
        public string mon_2014 { get; set; }
        [Column("2015_preMonsoon")]
        public string pre_2015 { get; set; }

        [Column("2015_monsoon")]
        public string mon_2015 { get; set; }
        [Column("2016_preMonsoon")]
        public string pre_2016 { get; set; }

        [Column("2016_monsoon")]
        public string mon_2016 { get; set; }
        [Column("2017_preMonsoon")]
        public string pre_2017 { get; set; }

        [Column("2017_monsoon")]
        public string mon_2017 { get; set; }
        [Column("2018_preMonsoon")]
        public string pre_2018 { get; set; }

        [Column("2018_monsoon")]
        public string mon_2018 { get; set; }
        [Column("2019_preMonsoon")]
        public string pre_2019 { get; set; }

        [Column("2019_monsoon")]
        public string mon_2019 { get; set; }
        [Column("2020_preMonsoon")]
        public string pre_2020 { get; set; }

        [Column("2020_monsoon")]
        public string mon_2020 { get; set; }
        [Column("2021_preMonsoon")]
        public string pre_2021 { get; set; }

        [Column("2021_monsoon")]
        public string mon_2021 { get; set; }
        [Column("2022_preMonsoon")]
        public string pre_2022 { get; set; }

        [Column("2022_monsoon")]
        public string mon_2022 { get; set; }
        [Column("2023_preMonsoon")]
        public string pre_2023 { get; set; }

        [Column("2023_monsoon")]
        public string mon_2023 { get; set; }

        public string Avg_PreMonsoon { get; set; }


        public string Avg_Monsoon { get; set; }

        public string Source { get; set; }


        public int RainfallId { get; set; }
    }

    [Table("abhy_Roles")]
    public class AdminRoles
    {
        [Key]
        public int RoleId { get; set; }
        public string RoleType { get; set; }


    }

    [Table("tblGP_waterYear_JuneTOMay", Schema = "public")]
    public class GP_waterYear_JuneTOMay
    {
        [Key]
        public int GP_waterYear_JuneTOMayId { get; set; }
        public string Balance_Kharif { get; set; }
        public string Balance_Rabi { get; set; }
        public string CropWater_RabiSeason { get; set; }
        public string DrinkingAndInd_WaterUse { get; set; }
        public string GPId { get; set; }

        public string GWRech_Harvesting_JuneToOct { get; set; }
        public string GW_Draft_DraningAndInd { get; set; }


        public string GW_Draft_Irrigation { get; set; }
        public string GW_Draft_PumpedWaterWell { get; set; }
        public string GW_Rech_Harvesting_NovToMay { get; set; }
        public string GW_Rech_Rainfall_NovToMay { get; set; }
        public int GroundRech_Rainfall_JunetoOct { get; set; }
        public string TotalGW_Avail_RabiCrops { get; set; }
        public string TotalGW_Rech { get; set; }
    }

    [Table("abhy_published_documents", Schema = "public")]
    public class abhy_published_documents
    {
        [Key]
        public long apdid { get; set; }
        public string published_date { get; set; }
        public string document_name { get; set; }

    }

    //[Table("abhy_feedback", Schema = "public")]
    //public class abhy_feedback
    //{
    //    [Key]
    //    public long afid { get; set; }
    //    public string document { get; set; }
    //    public int apdid { get; set; }
    //    public string name { get; set; }

    //    public string mobile { get; set; }
    //    public string address { get; set; }
    //    public string agency { get; set; }
    //    public string feedback { get; set; }
    //    public string UserId { get; set; }
    //    public int fkid { get; set; }

    //}

    [Table("abhy_states", Schema = "public")]
    public class abhy_states
    {
        [Key]
        public int sid { get; set; }
        public string statename { get; set; }
        public List<abhy_districts> abhy_districts { get; set; }
    }
    [Table("abhy_districts", Schema = "public")]
    public class abhy_districts
    {
        [Key]
        public int did { get; set; }
        public int sid { get; set; }

        public string district_name { get; set; }

        public List<abhy_blocks> abhy_blocks { get; set; }
    }
    [Table("abhy_blocks", Schema = "public")]
    public class abhy_blocks
    {
        [Key]
        public int bid { get; set; }
        public int sid { get; set; }
        public int did { get; set; }
        public string block_name { get; set; }
        public List<abhy_grampanchayat> abhy_grampanchayat { get; set; }
    }

    [Table("abhy_grampanchayat", Schema = "public")]
    public class abhy_grampanchayat
    {
        [Key]
        public int gpid { get; set; }
        public int sid { get; set; }
        public int did { get; set; }
        public int bid { get; set; }
        public string gpname { get; set; }
        public List<abhy_villages> abhy_villages { get; set; }
    }
    [Table("abhy_villages_new1", Schema = "public")]
    public class abhy_villages
    {
        [Key]
        public int vid { get; set; }
        public int gpid { get; set; }
        public int sid { get; set; }
        public int did { get; set; }
        public int bid { get; set; }
        public string viname { get; set; }

    }

    public class abhystates
    {
        public int sid { get; set; }
        public string sname { get; set; }
        public List<abhy_districts> abhydistricts { get; set; }
    }
    public class abhydistricts
    {
        public int sid { get; set; }
        public int did { get; set; }
        public string districtname { get; set; }
        public List<abhy_blocks> abhyblocks { get; set; }
    }
    public class abhyblocks
    {
        public int sid { get; set; }
        public int did { get; set; }
        public int bid { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }

    }
    [Table("abhy_wsp", Schema = "public")]
    public class abhy_wsp
    {
        [Key]
        public long wspid { get; set; }
        public string categoryname { get; set; }
        public byte[] catimage { get; set; }
        public int catid { get; set; }


    }

    [Table("abhy_wsp_socialmonitoring", Schema = "public")]
    public class abhy_wsp_socialmonitoring
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
    }

    [Table("abhy_wsp_funding_source", Schema = "public")]
    public class abhy_wsp_funding_source
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string claim_year { get; set; }
        public string month { get; set; }
        public string type { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string proposed_area { get; set; }
        public string approximate_cost { get; set; }
        public string entry_date { get; set; }
        public string user_id { get; set; }
        public string new_table_entry { get; set; }
        public string latitude_gp_centre_point { get; set; }
        public string longitude_gp_centre_point { get; set; }

        public string other_measures { get; set; }
    }

    [Table("abhy_new_DLI3", Schema = "public")]
    public class abhy_new_DLI3
    {
        [Key]
        public Int32 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string year { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string month { get; set; }
        public string type { get; set; }
        public string typeother { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string proposed_area { get; set; }
        public string possible_funding_source { get; set; }
        public string approximate_cost { get; set; }
        public string approximate_fund { get; set; }
        public string gap_funding { get; set; }
        public string work_start_date { get; set; }
        public string work_completion_date { get; set; }
        public string department_name_new { get; set; }
        public string scheme_name_new { get; set; }
        public string area_converged_new { get; set; }
        public string expenditure_incurred { get; set; }
        public string ataljal_incentive_share { get; set; }
        public string remark { get; set; }
        public string approved { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public string departmentother { get; set; }
        public string schemeother { get; set; }
        public string new_row { get; set; }
        public DateTime entry_date { get; set; }
        public string user_id { get; set; }
        public Int32 old_id { get; set; }
        public Int32 multiple_new_row { get; set; }
        public string approval { get; set; }
        public string reject { get; set; }

    }

    [Table("abhy_DLI3_upload_document", Schema = "public")]
    public class abhy_DLI3_upload_document
    {
        [Key]
        public Int32 id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string description { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public DateTime entry_date { get; set; }
        public string user_id { get; set; }
        public string approval { get; set; }
        public string reject { get; set; }


    }
    [Table("electricity_feeder_separation", Schema = "public")]
    public class electricity_feeder_separation
    {
        [Key]
        public Int32 id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string year { get; set; }
        public string fy_phase { get; set; }
        public string separation { get; set; }
        public DateTime entry_date { get; set; }
        public string user_id { get; set; }
        public string approve { get; set; }
        public string reject { get; set; }


    }


    public class abhy_new_DLI3_new
    {
        public List<abhy_new_DLI3> DLI3 { get; set; }

        public List<abhy_wsp_funding_source> FS { get; set; }

    }

    [Table("dli4_efficient_irrigation_system", Schema = "public")]
    public class dli4_efficient_irrigation_system
    {
        [Key]
        public Int32 id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gram { get; set; }
        public string year { get; set; }
        public string fy_phase { get; set; }
        public string month { get; set; }
        public double sprinkler_convergence { get; set; } = default;
        public double drip_convergence { get; set; } = default;
        public double pipeline_convergence { get; set; } = default;
        public double total_convergence { get; set; } = default;
        public double sprinkler_incentive { get; set; } = default;
        public double drip_incentive { get; set; } = default;
        public double pipeline_incentive { get; set; } = default;
        public double total_incentive { get; set; } = default;
        public double sprinkler_financing { get; set; } = default;
        public double drip_financing { get; set; } = default;
        public double pipeline_financing { get; set; } = default;
        public double total_financing { get; set; } = default;
        public double sprinkler_total { get; set; } = default;
        public double drip_total { get; set; } = default;
        public double pipeline_total { get; set; } = default;
        public double all_irrigation_total { get; set; } = default;
        public string entry_date { get; set; }
        public string userid { get; set; }
        public string approve { get; set; }
        public string reject { get; set; }
        public string tot_spr_ben { get; set; }
        public string sc_spr_ben { get; set; }
        public string st_spr_ben { get; set; }
        public string obc_spr_ben { get; set; }
        public string gen_spr_ben { get; set; }
        public string tot_drip_ben { get; set; }
        public string sc_drip_ben { get; set; }
        public string st_drip_ben { get; set; }
        public string obc_drip_ben { get; set; }
        public string gen_drip_ben { get; set; }
        public string tot_pipe_ben { get; set; }
        public string sc_pipe_ben { get; set; }
        public string st_pipe_ben { get; set; }
        public string obc_pipe_ben { get; set; }
        public string gen_pipe_ben { get; set; }
        public string approval_remarks { get; set; }
        public string approval_status { get; set; }
        public decimal TotalNpmuValue { get; set; }



    }

    [Table("dli4_area_with_crop_shifting", Schema = "public")]
    public class dli4_area_with_crop_shifting
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gram { get; set; }
        public string year { get; set; }
        public string fy_phase { get; set; }
        public string month { get; set; }
        public string existing_high_wcc { get; set; }
        //public string other_crop { get; set; }
        public string other_existing_high_wcc { get; set; }
        public string replacing_low_wcc { get; set; }
        public decimal hightolow_wcc { get; set; }
        public string department { get; set; }
        public string other_department { get; set; }
        public string scheme { get; set; }
        public string other_scheme { get; set; }
        public string entry_date { get; set; }
        public string userid { get; set; }
        public string approve { get; set; }
        public string reject { get; set; }
        public string total_ben { get; set; }
        public string sc { get; set; }
        public string st { get; set; }
        public string obc { get; set; }
        public string gen { get; set; }
        public string approval_remarks { get; set; }
        public decimal? crop_shifting_area { get; set; }
        public string approval_status { get; set; }
        public decimal TotalNpmuValue { get; set; }
    }

    [Table("dli4_water_saving_agriculture", Schema = "public")]
    public class dli4_water_saving_agriculture
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gram { get; set; }
        public string year { get; set; }
        public string fy_phase { get; set; }
        public string month { get; set; }

        public decimal super_area_covered_through_convergence { get; set; }
        public decimal super_area_covered_through_incentive { get; set; }
        public decimal super_area_covered_through_financing { get; set; }
        public decimal hydrogel_area_covered_through_convergence { get; set; }
        public decimal hydrogel_area_covered_through_incentive { get; set; }
        public decimal hydrogel_area_covered_through_financing { get; set; }
        //public decimal forestry_area_covered_through_convergence { get; set; }
        //public decimal forestry_area_covered_through_incentive { get; set; }
        //public decimal forestry_area_covered_through_financing { get; set; }
        public decimal dsr_area_covered_through_convergence { get; set; }
        public decimal dsr_area_covered_through_incentive { get; set; }
        public decimal dsr_area_covered_through_financing { get; set; }
        public decimal mulching_area_covered_through_convergence { get; set; }
        public decimal mulching_area_covered_through_incentive { get; set; }
        public decimal mulching_area_covered_through_financing { get; set; }
        public decimal polyhouse_area_covered_through_convergence { get; set; }
        public decimal polyhouse_area_covered_through_incentive { get; set; }
        public decimal polyhouse_area_covered_through_financing { get; set; }
        public decimal other_area_covered_through_convergence1 { get; set; }
        public decimal other_area_covered_through_incentive1 { get; set; }
        public decimal other_area_covered_through_financing1 { get; set; }
        public decimal other_area_covered_through_convergence2 { get; set; }
        public decimal other_area_covered_through_incentive2 { get; set; }
        public decimal other_area_covered_through_financing2 { get; set; }

        public decimal other_area_covered_through_convergence3 { get; set; }
        public decimal other_area_covered_through_incentive3 { get; set; }
        public decimal other_area_covered_through_financing3 { get; set; }
        public decimal convergence_total_area { get; set; }
        public decimal incentive_total_area { get; set; }
        public decimal financing_total_area { get; set; }
        public decimal all_total_area { get; set; }
        public string other_water_saving_method1 { get; set; }
        public string other_water_saving_method2 { get; set; }
        public string other_water_saving_method3 { get; set; }
        public string entry_date { get; set; }
        public string userid { get; set; }
        public string approve { get; set; }
        public string reject { get; set; }

        public string super_total_ben { get; set; }
        public string super_sc_ben { get; set; }
        public string super_st_ben { get; set; }
        public string super_obc_ben { get; set; }
        public string super_gen_ben { get; set; }

        public string polyhouse_total_ben { get; set; }
        public string polyhouse_sc_ben { get; set; }
        public string polyhouse_st_ben { get; set; }
        public string polyhouse_obc_ben { get; set; }
        public string polyhouse_gen_ben { get; set; }

        public string mulching_total_ben { get; set; }
        public string mulching_sc_ben { get; set; }
        public string mulching_st_ben { get; set; }
        public string mulching_obc_ben { get; set; }
        public string mulching_gen_ben { get; set; }

        public string hydrogel_total_ben { get; set; }
        public string hydrogel_sc_ben { get; set; }
        public string hydrogel_st_ben { get; set; }
        public string hydrogel_obc_ben { get; set; }
        public string hydrogel_gen_ben { get; set; }

        public string dsr_total_ben { get; set; }
        public string dsr_sc_ben { get; set; }
        public string dsr_st_ben { get; set; }
        public string dsr_obc_ben { get; set; }
        public string dsr_gen_ben { get; set; }

        public string other1_total_ben { get; set; }
        public string other1_sc_ben { get; set; }
        public string other1_st_ben { get; set; }
        public string other1_obc_ben { get; set; }
        public string other1_gen_ben { get; set; }

        public string other2_total_ben { get; set; }
        public string other2_sc_ben { get; set; }
        public string other2_st_ben { get; set; }
        public string other2_obc_ben { get; set; }
        public string other2_gen_ben { get; set; }

        public string other3_total_ben { get; set; }
        public string other3_sc_ben { get; set; }
        public string other3_st_ben { get; set; }
        public string other3_obc_ben { get; set; }
        public string other3_gen_ben { get; set; }
        public string approval_remarks { get; set; }

        public string approval_status { get; set; }

        public decimal TotalNpmuValue { get; set; }

    }



    [Table("DLI4_2122_Statewisedata", Schema = "public")]
    public class DLI4_2122_Statewisedata
    {
        [Key]
        public Int32 ID { get; set; }
        public string state { get; set; }
        public double sprinkler_total { get; set; }
        public double drip_total { get; set; }
        public double pipeline_total { get; set; }
        public double hightolow_wcc { get; set; }
        public double all_total_area { get; set; }
        public double total_claim { get; set; }
        public string year { get; set; }


    }



    [Table("dli4_upload_document", Schema = "public")]
    public class dli4_upload_document
    {
        [Key]
        public Int32 id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string year { get; set; }
        public string fy_phase { get; set; }
        public string description { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public DateTime entry_date { get; set; }
        public string user_id { get; set; }
        public string approval { get; set; }
        public string reject { get; set; }


    }



    [Table("abhy_agencies1", Schema = "public")]
    public class abhy_agencies1
    {
        [Key]
        public int aid { get; set; }
        public string agencies { get; set; }
        public string address { get; set; }
        public string weblink { get; set; }
        public string emailid { get; set; }
        //public string department { get; set; }
        public int fkid { get; set; }
    }
    [Table("abhy_groundwater_levels", Schema = "public")]
    public class Abhy_groundwater_levels
    {
        [Key]
        public long agwlid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string tahsil_name { get; set; }
        public string block { get; set; }
        public string site_name { get; set; }
        public string site_type { get; set; }
        public string depth { get; set; }
        public string wls_date { get; set; }


        public string month { get; set; }
        public string wl_2014 { get; set; }
        public string wl_2015 { get; set; }
        public string wl_2016 { get; set; }
        public string wl_2017 { get; set; }
        public string wl_2018 { get; set; }
        public string wl_2019 { get; set; }

        public string wls_wtr_level { get; set; }
        public string site_id { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }

    }
    //mohan code
    [Table("abhy_groundwater_levels2", Schema = "public")]
    public class Abhy_groundwater_levels2
    {
        [Key]
        public long agwlid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string tahsil_name { get; set; }
        public string block { get; set; }
        public string site_name { get; set; }
        public string site_type { get; set; }
        public string depth { get; set; }
        public string site_id { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }

        public string jan_14 { get; set; }
        public string apr_14 { get; set; }
        public string may_14 { get; set; }
        public string aug_14 { get; set; }
        public string nov_14 { get; set; }

        public string jan_15 { get; set; }
        public string apr_15 { get; set; }
        public string may_15 { get; set; }
        public string aug_15 { get; set; }
        public string nov_15 { get; set; }

        public string jan_16 { get; set; }
        public string apr_16 { get; set; }
        public string may_16 { get; set; }
        public string aug_16 { get; set; }
        public string nov_16 { get; set; }

        public string jan_17 { get; set; }
        public string apr_17 { get; set; }
        public string may_17 { get; set; }
        public string aug_17 { get; set; }
        public string nov_17 { get; set; }

        public string jan_18 { get; set; }
        public string apr_18 { get; set; }
        public string may_18 { get; set; }
        public string aug_18 { get; set; }
        public string nov_18 { get; set; }
        public string jan_19 { get; set; }

        // public string average { get; set; }
        // public string utilization { get; set; }
        //public string wls_date { get; set; }

    }

    [Table("abhy_groundwater_quality", Schema = "public")]
    public class Abhy_groundwater_quality
    {
        [Key]
        public long SNO { get; set; }
        public string site_id { get; set; }
        public string logitude { get; set; }
        public string latitude { get; set; }
        public string site_type { get; set; }
        public string state_name { get; set; }
        public string disrict_name { get; set; }
        public string tahsil_name { get; set; }
        public string block { get; set; }


        public string site_name { get; set; }
        public string year { get; set; }
        public string ph { get; set; }
        public string ec { get; set; }
        public string th { get; set; }
        public string tot_alkalinity { get; set; }
        public string ca { get; set; }

        public string mg { get; set; }
        public string na { get; set; }
        public string k { get; set; }

        public string fe { get; set; }
        public string carbonate { get; set; }
        public string bicarbonate { get; set; }
        public string chloride { get; set; }
        public string sulphate { get; set; }
        public string nitrate { get; set; }
        public string fluoride { get; set; }
        public string sar { get; set; }
        public string rsc { get; set; }
        public string tds { get; set; }

    }

    [Table("abhy_annual_data", Schema = "public")]
    public class abhy_annual_data
    {
        [Key]
        public long Annunalid { get; set; }
        public string state_name { get; set; }
        public string avg_rainfall { get; set; }
        public string sw_bodies { get; set; }
        public string GWO_wells { get; set; }
        public string ARGW_Resourses { get; set; }
        public string AGW_Drafts { get; set; }



    }

    [Table("abhy_totalrainfall", Schema = "public")]
    public class Abhy_Total_Rainfall
    {
        [Key]
        public long rfid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string station { get; set; }
        public string jan_14 { get; set; }
        public string jan_14_dep { get; set; }
        public string feb_14 { get; set; }
        public string feb_14_dep { get; set; }
        public string mar_14 { get; set; }
        public string mar_14_dep { get; set; }
        public string apr_14 { get; set; }
        public string apr_14_dep { get; set; }
        public string may_14 { get; set; }
        public string may_14_dep { get; set; }
        public string jun_14 { get; set; }
        public string jun_14_dep { get; set; }
        public string jul_14 { get; set; }
        public string jul_14_dep { get; set; }
        public string aug_14 { get; set; }
        public string aug_14_dep { get; set; }
        public string sep_14 { get; set; }
        public string sep_14_dep { get; set; }
        public string oct_14 { get; set; }
        public string oct_14_dep { get; set; }
        public string nov_14 { get; set; }
        public string nov_14_dep { get; set; }
        public string dec_14 { get; set; }
        public string dec_14_dep { get; set; }
        public string jan_15 { get; set; }
        public string jan_15_dep { get; set; }
        public string feb_15 { get; set; }
        public string feb_15_dep { get; set; }
        public string mar_15 { get; set; }
        public string mar_15_dep { get; set; }
        public string apr_15 { get; set; }
        public string apr_15_dep { get; set; }
        public string may_15 { get; set; }
        public string may_15_dep { get; set; }
        public string jun_15 { get; set; }
        public string jun_15_dep { get; set; }
        public string jul_15 { get; set; }
        public string jul_15_dep { get; set; }
        public string aug_15 { get; set; }
        public string aug_15_dep { get; set; }
        public string sep_15 { get; set; }
        public string sep_15_dep { get; set; }
        public string oct_15 { get; set; }
        public string oct_15_dep { get; set; }
        public string nov_15 { get; set; }
        public string nov_15_dep { get; set; }
        public string dec_15 { get; set; }
        public string dec_15_dep { get; set; }
        public string jan_16 { get; set; }
        public string jan_16_dep { get; set; }
        public string feb_16 { get; set; }
        public string feb_16_dep { get; set; }
        public string mar_16 { get; set; }
        public string mar_16_dep { get; set; }
        public string apr_16 { get; set; }
        public string apr_16_dep { get; set; }
        public string may_16 { get; set; }
        public string may_16_dep { get; set; }
        public string jun_16 { get; set; }
        public string jun_16_dep { get; set; }
        public string jul_16 { get; set; }
        public string jul_16_dep { get; set; }
        public string aug_16 { get; set; }
        public string aug_16_dep { get; set; }
        public string sep_16 { get; set; }
        public string sep_16_dep { get; set; }
        public string oct_16 { get; set; }
        public string oct_16_dep { get; set; }
        public string nov_16 { get; set; }
        public string nov_16_dep { get; set; }
        public string dec_16 { get; set; }
        public string dec_16_dep { get; set; }
        public string jan_17 { get; set; }
        public string jan_17_dep { get; set; }
        public string feb_17 { get; set; }
        public string feb_17_dep { get; set; }
        public string mar_17 { get; set; }
        public string mar_17_dep { get; set; }
        public string apr_17 { get; set; }
        public string apr_17_dep { get; set; }
        public string may_17 { get; set; }
        public string may_17_dep { get; set; }
        public string jun_17 { get; set; }
        public string jun_17_dep { get; set; }
        public string jul_17 { get; set; }
        public string jul_17_dep { get; set; }
        public string aug_17 { get; set; }
        public string aug_17_dep { get; set; }
        public string sep_17 { get; set; }
        public string sep_17_dep { get; set; }
        public string oct_17 { get; set; }
        public string oct_17_dep { get; set; }
        public string nov_17 { get; set; }
        public string nov_17_dep { get; set; }
        public string dec_17 { get; set; }
        public string dec_17_dep { get; set; }
        public string jan_18 { get; set; }
        public string jan_18_dep { get; set; }
        public string feb_18 { get; set; }
        public string feb_18_dep { get; set; }
        public string mar_18 { get; set; }
        public string mar_18_dep { get; set; }
        public string apr_18 { get; set; }
        public string apr_18_dep { get; set; }
        public string may_18 { get; set; }
        public string may_18_dep { get; set; }
        public string jun_18 { get; set; }
        public string jun_18_dep { get; set; }
        public string jul_18 { get; set; }
        public string jul_18_dep { get; set; }
        public string aug_18 { get; set; }
        public string aug_18_dep { get; set; }
        public string sep_18 { get; set; }
        public string sep_18_dep { get; set; }
        public string oct_18 { get; set; }
        public string oct_18_dep { get; set; }
        public string nov_18 { get; set; }
        public string nov_18_dep { get; set; }
        public string dec_18 { get; set; }
        public string dec_18_dep { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string actual_rainfall { get; set; }
        public string normal_rainfall { get; set; }
        public string deviation { get; set; }
        public string status { get; set; }




    }

    [Table("abhy_rainfall_saved_Data", Schema = "public")]
    public class Abhy_Rainfall_Saved_Data
    {
        [Key]
        public long arsid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string station { get; set; }
        public string jan_14 { get; set; }

        public string feb_14 { get; set; }

        public string mar_14 { get; set; }

        public string apr_14 { get; set; }

        public string may_14 { get; set; }

        public string jun_14 { get; set; }

        public string jul_14 { get; set; }

        public string aug_14 { get; set; }

        public string sep_14 { get; set; }

        public string oct_14 { get; set; }

        public string nov_14 { get; set; }

        public string dec_14 { get; set; }

        public string jan_15 { get; set; }

        public string feb_15 { get; set; }

        public string mar_15 { get; set; }

        public string apr_15 { get; set; }

        public string may_15 { get; set; }

        public string jun_15 { get; set; }

        public string jul_15 { get; set; }

        public string aug_15 { get; set; }

        public string sep_15 { get; set; }

        public string oct_15 { get; set; }

        public string nov_15 { get; set; }

        public string dec_15 { get; set; }

        public string jan_16 { get; set; }

        public string feb_16 { get; set; }

        public string mar_16 { get; set; }

        public string apr_16 { get; set; }

        public string may_16 { get; set; }

        public string jun_16 { get; set; }

        public string jul_16 { get; set; }

        public string aug_16 { get; set; }

        public string sep_16 { get; set; }

        public string oct_16 { get; set; }

        public string nov_16 { get; set; }

        public string dec_16 { get; set; }

        public string jan_17 { get; set; }

        public string feb_17 { get; set; }

        public string mar_17 { get; set; }

        public string apr_17 { get; set; }

        public string may_17 { get; set; }

        public string jun_17 { get; set; }

        public string jul_17 { get; set; }

        public string aug_17 { get; set; }

        public string sep_17 { get; set; }

        public string oct_17 { get; set; }

        public string nov_17 { get; set; }

        public string dec_17 { get; set; }

        public string jan_18 { get; set; }

        public string feb_18 { get; set; }

        public string mar_18 { get; set; }

        public string apr_18 { get; set; }

        public string may_18 { get; set; }

        public string jun_18 { get; set; }

        public string jul_18 { get; set; }

        public string aug_18 { get; set; }

        public string sep_18 { get; set; }

        public string oct_18 { get; set; }

        public string nov_18 { get; set; }

        public string dec_18 { get; set; }


        public string actual_rainfall { get; set; }
        public string normal_rainfall { get; set; }
        public string deviation { get; set; }
        public string UserId { get; set; }


        public string date { get; set; }

        public string status { get; set; }
        public string manualdata { get; set; }
        public string block { get; set; }
    }


    [Table("abhy_livestock", Schema = "public")]
    public class abhy_livestock
    {
        [Key]
        public int lsid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string livestock { get; set; }
        public string cows { get; set; }
        public string buffaloes { get; set; }
        public string cows_and_buffaloes { get; set; }
        public string sheep { get; set; }
        public string goats { get; set; }
        public string sheeps_and_goats { get; set; }
    }

    [Table("abhy_gwl_quantity", Schema = "public")]
    public class Abhy_gwl_quantity
    {
        [Key]
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string tal_name { get; set; }

        public string block_name { get; set; }


        public string area_sq_km { get; set; }
        public string avail_ha_m { get; set; }
        public string gw_dft_ha_m { get; set; }
        public string stage__gwdev_percentage { get; set; }

        public string status { get; set; }

        public long gwlqid { get; set; }
    }

    [Table("abhycensus_coordinates", Schema = "public")]
    public class abhycensus_coordinates
    {
        [Key]
        public int accid { get; set; }
        public string state_name { get; set; }
        public string state_lati { get; set; }
        public string state_long { get; set; }
        public string district_name { get; set; }
        public string district_lati { get; set; }
        public string district_long { get; set; }
        public string sub_district_name { get; set; }
        public string sub_district_lati { get; set; }
        public string sub_district_long { get; set; }
        public string gram_panchayat_name { get; set; }
        public string village_name { get; set; }
        public string village_lati { get; set; }
        public string village_long { get; set; }
        public string aquifer { get; set; }
    }

    [Table("abhy_demand1", Schema = "public")]
    public class abhy_demand1
    {
        [Key]
        public long did { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string villname { get; set; }
        public string emailid { get; set; }
        public string activity { get; set; }
        public string startdate { get; set; }
        public string enddate { get; set; }
        public string number { get; set; }
        public string unitcost { get; set; }
        public string area { get; set; }
        public string funding { get; set; }
        public string implementing { get; set; }
        public string totalbudget { get; set; }
        public string dateandtime { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string category { get; set; }
        public string fcmkey { get; set; }
        public int? userid { get; set; }
        public DateTime todaydate { get; set; }
        public string username { get; set; }
        public string accept { get; set; }

        public string insertdiff { get; set; }

    }
    [Table("abhy_supply1", Schema = "public")]
    public class abhy_supply1
    {
        [Key]
        public long supplyid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string villname { get; set; }
        public string emailid { get; set; }
        public string activity { get; set; }
        public string startdate { get; set; }
        public string enddate { get; set; }
        public string number { get; set; }
        public string unitcost { get; set; }
        public string area { get; set; }
        public string funding { get; set; }
        public string implementing { get; set; }
        public string totalbudget { get; set; }
        public string dateandtime { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string category { get; set; }
        public string fcmkey { get; set; }
        public int? userid { get; set; }
        public DateTime todaydate { get; set; }
        public string username { get; set; }
        public string accept { get; set; }
        public string insertdiff { get; set; }
    }
    [Table("abhy_supply2", Schema = "public")]
    public class abhy_supply2
    {
        [Key]
        public long supply_id { get; set; }
        public string activity { get; set; }
        public string category { get; set; }
        public string todaydate { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gpname { get; set; }
        public string village_name { get; set; }
        public string insertdiff { get; set; }
        public string sup_yr_19_phys_value { get; set; }
        public string sup_yr_19_fin_value { get; set; }
        public string sup_yr_20_phys_value { get; set; }
        public string sup_yr_20_fin_value { get; set; }
        public string sup_yr_21_phys_value { get; set; }
        public string sup_yr_21_fin_value { get; set; }
        public string sup_yr_22_phys_value { get; set; }
        public string sup_yr_22_fin_value { get; set; }
        public string sup_yr_23_phys_value { get; set; }
        public string sup_yr_23_fin_value { get; set; }
    }
    [Table("abhy_demand2", Schema = "public")]
    public class abhy_demand2
    {
        [Key]
        public long demand_id { get; set; }
        public string activity { get; set; }
        public string category { get; set; }
        public string todaydate { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gpname { get; set; }
        public string village_name { get; set; }
        public string insertdiff { get; set; }
        public string dem_yr_19_phys_value { get; set; }
        public string dem_yr_19_fin_value { get; set; }
        public string dem_yr_20_phys_value { get; set; }
        public string dem_yr_20_fin_value { get; set; }
        public string dem_yr_21_phys_value { get; set; }
        public string dem_yr_21_fin_value { get; set; }
        public string dem_yr_22_phys_value { get; set; }
        public string dem_yr_22_fin_value { get; set; }
        public string dem_yr_23_phys_value { get; set; }
        public string dem_yr_23_fin_value { get; set; }
    }

    [Table("pgwn_personsdetails", Schema = "public")]
    public class PGWN_Personal_Details
    {
        [Key]
        public int pgwnpdid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string villname { get; set; }
        public string male_sc { get; set; }
        public string female_sc { get; set; }
        public string male_st { get; set; }
        public string female_st { get; set; }
        public string male_obc { get; set; }
        public string female_obc { get; set; }

        public string male_minority { get; set; }
        public string female_minority { get; set; }
        public string male_other { get; set; }

        public string female_other { get; set; }
        public string todaydate { get; set; }

        public string userid { get; set; }
    }

    [Table("pgwn_dept", Schema = "public")]
    public class PGWN_Department_Details
    {
        [Key]
        public int pgwndeptid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string villname { get; set; }
        public string designation { get; set; }
        public string department { get; set; }
        public string countname { get; set; }
        public string activepassive { get; set; }
        public string religon { get; set; }
        public string caste { get; set; }
        public string gender { get; set; }
        public string officer_name { get; set; }
        public string todaydate { get; set; }
        public string userid { get; set; }
    }

    [Table("abhy_wspform", Schema = "public")]
    public class abhy_wspform
    {
        [Key]
        public int formid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string villname { get; set; }

        public string total_population { get; set; }
        public string tol_male { get; set; }
        public string tol_female { get; set; }


        public string tol_farmers_cultivators { get; set; }
        public string tol_agri_labourers { get; set; }
        public string tol_artisans_household { get; set; }
        public string tol_others_employees { get; set; }
        public string forest_area { get; set; }
        public string fallow_land { get; set; }
        public string barrren_land { get; set; }
        public string culturable_waste_land { get; set; }
        public string area_non_agri_use { get; set; }
        public string area_irri_canal { get; set; }
        public string tanks { get; set; }
        public string dug_wells { get; set; }
        public string dug_cum_bore_wells { get; set; }
        public string bore_or_tube_wells { get; set; }
        public string bullock_drawn { get; set; }
        public string diesel_pump { get; set; }
        public string centrifugal_pump { get; set; }
        public string submersible_pump { get; set; }
        public string working_bore_wells { get; set; }
        public string defunct_bore_wells { get; set; }
        public string kharif_tomoto { get; set; }
        public string kharif_sericulture { get; set; }
        public string kharif_ragi { get; set; }
        public string kharif_vegetables { get; set; }
        public string kharif_grass { get; set; }
        public string winter_tomoto { get; set; }
        public string winter_sericulture { get; set; }
        public string winter_ragi { get; set; }
        public string winter_vegetables { get; set; }
        public string winter_grass { get; set; }
        public string summer_tomoto { get; set; }
        public string summer_sericulture { get; set; }
        public string summer_ragi { get; set; }
        public string summer_vegetables { get; set; }
        public string summer_grass { get; set; }
        public string no_of_cows_buffaloes { get; set; }
        public string no_of_bullocks { get; set; }
        public string no_of_sheeps_goats { get; set; }
        public string monsoon_rainfall_mm { get; set; }
        public string non_monsoon_rainfall_mm { get; set; }
        public string water_level_monsoon_rainfall_m { get; set; }
        public string water_level_non_monsoon_rainfall_m { get; set; }
        public string water_usage_drinking_liters { get; set; }
        public string water_usage_agriculture_liters { get; set; }
        public string water_usage_industry_liters { get; set; }
        public string water_usage_culture_needs_liters { get; set; }
        public string avail_electricity_connectivity { get; set; }
        public string no_of_hhs_electricity_connectivity { get; set; }
        public string no_of_electricity_connections_irrigation { get; set; }
        public string avgerage_hrs_electricity_supply_irrigation { get; set; }
        public string no_of_shgs { get; set; }
        public string no_of_youth_clubs { get; set; }
        public string no_of_coopt_socisties { get; set; }
        public string others_social_activites { get; set; }
        public string pucca_road { get; set; }
        public string kuchha_road { get; set; }
        public int? userid { get; set; }
    }

    [Table("abhy_households", Schema = "public")]
    public class abhy_households
    {
        [Key]
        public long? hlid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        // public string villname { get; set; }
        public string category { get; set; }
        public string tol_households { get; set; }
        public string sc_m { get; set; }
        public string sc_f { get; set; }
        public string st_m { get; set; }
        public string st_f { get; set; }
        public string obc_m { get; set; }
        public string obc_f { get; set; }
        public string minority_m { get; set; }
        public string minority_f { get; set; }
        public string others_m { get; set; }
        public string others_f { get; set; }
        public int? userid { get; set; }

    }

    public class FilterDataModel
    {
        public List<abhy_grampanchayat> abhy_grampanchayas { get; set; }
        public List<abhystates_completecensusdata_Insert1> abhystates_completecensusdata_Inserts { get; set; }
        public List<Abhy_groundwater_levels2> Abhy_groundwater_levels { get; set; }
        public List<Abhy_WaterUtilization_Approval> Abhy_WaterUtilization_Approvals { get; set; }
        public List<abhy_supply1> abhy_supplys { get; set; }
        public List<abhy_demand1> abhy_demands { get; set; }
    }

    [Table("abhy_disbursement", Schema = "public")]
    public class abhy_disbursement
    {
        [Key]
        public int dli_no { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string villname { get; set; }
        public string dli1_finance_alloc_gwl_decline { get; set; }
        public string dli1_finance_amt_gwl_decline { get; set; }
        public string dli1_baseline_gwl_decline { get; set; }
        public string dli1_17_18 { get; set; }
        public string dli1_18_19 { get; set; }
        public string dli1_19_20 { get; set; }
        public string dli1_20_21 { get; set; }
        public string dli1_21_22 { get; set; }
        public string dli1_22_23 { get; set; }
        public string dli2_finance_alloc_wsp_community { get; set; }
        public string dli2_finance_amt_wsp_community { get; set; }
        public string dli2_baseline_wsp_community { get; set; }
        public string dli2_17_18 { get; set; }
        public string dli2_18_19 { get; set; }
        public string dli2_19_20 { get; set; }
        public string dli2_20_21 { get; set; }
        public string dli2_21_22 { get; set; }
        public string dli2_22_23 { get; set; }
        public string dli3_finance_alloc_gw_adoption { get; set; }
        public string dli3_finance_amt_wsp_adoption { get; set; }
        public string dli3_baseline_wsp_adoption { get; set; }
        public string dli3_17_18 { get; set; }
        public string dli3_18_19 { get; set; }
        public string dli3_19_20 { get; set; }
        public string dli3_20_21 { get; set; }
        public string dli3_21_22 { get; set; }
        public string dli3_22_23 { get; set; }
        public string dli4_finance_alloc_reduced_wtr_con { get; set; }
        public string dli4_finance_amt_reduced_wtr_con { get; set; }
        public string dli4_baseline_reduced_wtr_con { get; set; }
        public string dli4_17_18 { get; set; }
        public string dli4_18_19 { get; set; }
        public string dli4_19_20 { get; set; }
        public string dli4_20_21 { get; set; }
        public string dli4_21_22 { get; set; }
        public string dli4_22_23 { get; set; }
        public string dli5_finance_alloc_wsp_pending_opcs { get; set; }
        public string dli5_finance_amt_wsp_pending_opcs { get; set; }
        public string dli5_baseline_wsp_pending_opcs { get; set; }
        public string dli5_17_18 { get; set; }
        public string dli5_18_19 { get; set; }
        public string dli5_19_20 { get; set; }
        public string dli5_20_21 { get; set; }
        public string dli5_21_22 { get; set; }
        public string dli5_22_23 { get; set; }
        public string dli6_finance_alloc_gwmu_mis { get; set; }
        public string dli6_finance_amt_gwmu_mis { get; set; }
        public string dli6_baseline_gwmu_mis { get; set; }
        public string dli6_17_18 { get; set; }
        public string dli6_18_19 { get; set; }
        public string dli6_19_20 { get; set; }
        public string dli6_20_21 { get; set; }
        public string dli6_21_22 { get; set; }
        public string dli6_22_23 { get; set; }
        public string dli7_finance_alloc_gwm_mowr_rd_gr { get; set; }
        public string dli7_finance_amt_gwm_mowr_rd_gr { get; set; }
        public string dli7_baseline_gwm_mowr_rd_gr { get; set; }
        public string dli7_17_18 { get; set; }
        public string dli7_18_19 { get; set; }
        public string dli7_19_20 { get; set; }
        public string dli7_20_21 { get; set; }
        public string dli7_21_22 { get; set; }
        public string dli7_22_23 { get; set; }
    }

    [Table("abhy_framework_matrix", Schema = "public")]
    public class abhy_framework_matrix
    {
        [Key]
        public int fmid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string fmdate { get; set; }
        public string benefit_dsm_achieved { get; set; }
        public string benefit_dsm_baseline_16_17 { get; set; }
        public string benefit_dsm_ca { get; set; }
        public string benefit_dsm_endtarget_22_23 { get; set; }

        public string blocks_gwq_achieved { get; set; }
        public string blocks_gwq_baseline_16_17 { get; set; }
        public string blocks_gwq_ca { get; set; }
        public string blocks_gwq_endtarget_22_23 { get; set; }
        public string community_led_wsp_achieved { get; set; }
        public string community_led_wsp_baseline_16_17 { get; set; }
        public string community_led_wsp_ca { get; set; }
        public string community_led_wsp_endtarget_22_23 { get; set; }
        public string decline_gwl_achieved { get; set; }
        public string decline_gwl_baseline_16_17 { get; set; }
        public string decline_gwl_ca { get; set; }
        public string decline_gwl_endtarget_22_23 { get; set; }
        public string direct_prog_beneficiaries_achieved { get; set; }
        public string direct_prog_beneficiaries_baseline_16_17 { get; set; }
        public string direct_prog_beneficiaries_ca { get; set; }
        public string direct_prog_beneficiaries_endtarget_22_23 { get; set; }
        public string gp_wbc_achieved { get; set; }
        public string gp_wbc_baseline_16_17 { get; set; }
        public string gp_wbc_ca { get; set; }
        public string gp_wbc_endtarget_22_23 { get; set; }
        public string pgwm_achieved { get; set; }
        public string pgwm_baseline_16_17 { get; set; }
        public string pgwm_ca { get; set; }
        public string pgwm_endtarget_22_23 { get; set; }
        public string reduction_gwd_achieved { get; set; }
        public string reduction_gwd_baseline_16_17 { get; set; }
        public string reduction_gwd_endtarget_22_23 { get; set; }
        public string reduction_gwd_endtarget_ca { get; set; }
        public string reduction_wc_achieved { get; set; }
        public string reduction_wc_baseline_16_17 { get; set; }
        public string reduction_wc_ca { get; set; }
        public string reduction_wc_endtarget_22_23 { get; set; }
        public string states_gwm_achieved { get; set; }
        public string states_gwm_baseline_16_17 { get; set; }
        public string states_gwm_ca { get; set; }
        public string states_gwm_endtarget_22_23 { get; set; }
        public string states_gwq_achieved { get; set; }
        public string states_gwq_baseline_16_17 { get; set; }
        public string states_gwq_ca { get; set; }
        public string states_gwq_endtarget_22_23 { get; set; }
        public string village_wc_achieved { get; set; }
        public string village_wc_baseline_16_17 { get; set; }
        public string village_wc_ca { get; set; }
        public string village_wc_endtarget_22_23 { get; set; }
        public string wells_mgwl_achieved { get; set; }
        public string wells_mgwl_baseline_16_17 { get; set; }
        public string wells_mgwl_ca { get; set; }
        public string wells_mgwl_endtarget_22_23 { get; set; }
        public string women_decision_roles_achieved { get; set; }
        public string women_decision_roles_baseline_16_17 { get; set; }
        public string women_decision_roles_ca { get; set; }
        public string women_decision_roles_endtarget_22_23 { get; set; }
        public string women_village_wc_achieved { get; set; }
        public string women_village_wc_baseline_16_17 { get; set; }
        public string women_village_wc_ca { get; set; }
        public string women_village_wc_endtarget_22_23 { get; set; }
    }

    [Table("abhy_committee_functionality", Schema = "public")]
    public class abhy_committee_functionality
    {
        [Key]
        public int commid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string villname { get; set; }
        public string wm_community_name { get; set; }
        public string meet_date { get; set; }
        public string meet_start_time { get; set; }
        public string meet_end_time { get; set; }
        public string meet_organizer { get; set; }
        public string chair_person { get; set; }
        public string meet_location { get; set; }
        public string meet_attendees { get; set; }
        public string action_item { get; set; }
        public string conflicts_received { get; set; }
        public string conflicts_resolved { get; set; }
        public string objective_discussed { get; set; }
        public string gw_discussed { get; set; }
        public string wsp_discussed { get; set; }
        public string role_clarify { get; set; }
        public string budget_expenditure { get; set; }
        public string committee_fees { get; set; }
        public string mck1 { get; set; }
        public string mck2 { get; set; }
        public string mck3 { get; set; }
        public string mck4 { get; set; }
        public byte[] image_type { get; set; }
        public string image_name { get; set; }
    }

    public class abhysuplydemand
    {
        public List<abhy_supply1> objabhysupply1 { get; set; }
        public List<abhy_demand1> objabhydemand1 { get; set; }
        public int diffrval = 0;
    }
    public class abhysuplydemand_Insert
    {
        public List<abhy_supply2> objabhysupply2 { get; set; }
        public List<abhy_demand2> objabhydemand2 { get; set; }
        public int diffrval = 1;
    }
    [Table("abhy_wsp_interventions", Schema = "public")]
    public class abhy_wsp_interventions
    {
        [Key]
        public int wspinvenid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gpname { get; set; }
        public string sup_yr_19_phys_value { get; set; }
        public string sup_yr_19_fin_value { get; set; }
        public string sup_yr_20_phys_value { get; set; }
        public string sup_yr_20_fin_value { get; set; }
        public string sup_yr_21_phys_value { get; set; }
        public string sup_yr_21_fin_value { get; set; }
        public string sup_yr_22_phys_value { get; set; }
        public string sup_yr_22_fin_value { get; set; }
        public string sup_yr_23_phys_value { get; set; }
        public string sup_yr_23_fin_value { get; set; }
        public string dem_yr_19_phys_value { get; set; }
        public string dem_yr_19_fin_value { get; set; }
        public string dem_yr_20_phys_value { get; set; }
        public string dem_yr_20_fin_value { get; set; }
        public string dem_yr_21_phys_value { get; set; }
        public string dem_yr_21_fin_value { get; set; }
        public string dem_yr_22_phys_value { get; set; }
        public string dem_yr_22_fin_value { get; set; }
        public string dem_yr_23_phys_value { get; set; }
        public string dem_yr_23_fin_value { get; set; }
        public string insertdiff { get; set; }
        public string InDate { get; set; }
        public int diffrval = 1;
        public string Supply_Activity { get; set; }
        public string Demand_Activity { get; set; }
        public string supply_category { get; set; }
        public string demand_category { get; set; }
    }

    [Table("wspformgenerate1", Schema = "public")]
    public class abhy_water_budget_form
    {
        [Key]
        public int wspid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string tol_population { get; set; }
        public string male_population { get; set; }
        public string female_population { get; set; }
        public string tol_farmers { get; set; }
        public string tol_agri_labours { get; set; }
        public string tol_household_activities { get; set; }
        public string others_govt_private_employees { get; set; }
        public string forest_area { get; set; }
        public string fallow_land { get; set; }
        public string barrren_land { get; set; }
        public string cult_waste_land { get; set; }
        public string area_non_agri { get; set; }
        public string irri_canals { get; set; }
        public string irri_tanks { get; set; }
        public string irri_dugwells { get; set; }
        public string irri_dug_borewells { get; set; }
        public string irri_bore_tube_wells { get; set; }
        public string bullock_drawn { get; set; }
        public string diesel_pump { get; set; }
        public string centrifugal_pump { get; set; }
        public string water_pump { get; set; }
        public string working_borewells { get; set; }
        public string defunt_borewells { get; set; }
        public string kharif_rice { get; set; }
        public string kharif_sugarcane { get; set; }
        public string kharif_cotton { get; set; }
        public string kharif_maize { get; set; }
        public string kharif_others { get; set; }
        public string rabi_wheat { get; set; }
        public string rabi_mustard { get; set; }
        public string rabi_gram { get; set; }
        public string rabi_barley { get; set; }
        public string rabi_others { get; set; }
        public string kharif_rabi_tomoto { get; set; }
        public string kharif_rabi_others { get; set; }
        public string livestock_cows_buffaloes { get; set; }
        public string livestock_bullocks { get; set; }
        public string livestock_sheeps_goates { get; set; }
        public string monsoon_rainfall { get; set; }
        public string non_monsoon_rainfall { get; set; }
        public string monsoon_gw_level { get; set; }
        public string non_monsoon_gw_level { get; set; }
        public string water_drinking_purpose { get; set; }
        public string water_agriculture_purpose { get; set; }
        public string water_industrial_purpose { get; set; }
        public string water_domestic_purpose { get; set; }
        public string power_availbility { get; set; }
        public string power_hhs { get; set; }
        public string power_iirigation { get; set; }
        public string power_avg_hours_connectivity { get; set; }
        public string social_youth_clubs { get; set; }
        public string social_self_help { get; set; }
        public string social_cooperative { get; set; }
        public string social_others { get; set; }
        public string pucca_road { get; set; }
        public string kuchha_road { get; set; }


    }
    [Table("abhy_seasoncorps", Schema = "public")]
    public class abhy_seasoncorps
    {
        [Key]
        public int acpid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string kharif_rice { get; set; }
        public string kharif_sugarcane { get; set; }
        public string kharif_cotton { get; set; }
        public string kharif_maize { get; set; }
        public string rabi_wheat { get; set; }
        public string rabi_mustard { get; set; }
        public string rabi_gram { get; set; }
        public string rabi_barley { get; set; }
        public string karif { get; set; }
        public string karif_cu { get; set; }
        public string rabi { get; set; }
        public string rabi_cu { get; set; }
    }

    [Table("abhy_wb_report", Schema = "public")]
    public class abhy_wb_report
    {
        [Key]
        public int brid { get; set; }
        public string swrainfalltotal { get; set; }
        public string swspringstotal { get; set; }
        public string swcheckdamstotal { get; set; }
        public string swcanaltotal { get; set; }
        public string swreservoirtotal { get; set; }
        public string swltptotal { get; set; }
        public string swriverstotal { get; set; }
        public string gwrainfalltotal { get; set; }
        public string gwharvestingtotal { get; set; }
        public string gwirrigationtlptotal { get; set; }
        public string gwnalabundstotal { get; set; }
        public string gwseepagetotal { get; set; }
        public string gwsurwtrirrigationtotal { get; set; }
        public string gwgwwtrirrigationtotal { get; set; }
        public string draftirrigationtotal { get; set; }
        public string draftdomestictotal { get; set; }
        public string draftindustrytotal { get; set; }
        public string swtotal { get; set; }
        public string gwtotal { get; set; }
        public string drafttotal { get; set; }
        public string balance { get; set; }
        public string user { get; set; }
        public string indate { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string approvedby { get; set; }
    }
    [Table("abhy_waterbudget_report", Schema = "public")]
    public class abhy_waterbudget_report
    {
        [Key]
        public int brid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string surfacewatercount { get; set; }
        public string rechargetotal { get; set; }
        public string drafttotal { get; set; }
        public string reachargeanddrafttotal { get; set; }
        public string finlswreult { get; set; }
        public string surfwatspringsrainfall { get; set; }
        public string surfwatcheckdams1 { get; set; }
        public string surfwatcanals1 { get; set; }
        public string surfwatreservior1 { get; set; }
        public string surfwatlakespondstanks1 { get; set; }
        public string surfwatriver1 { get; set; }
        public string finlreult { get; set; }
        public string harvestinres { get; set; }
        public string irrigationres { get; set; }
        public string checkdamres { get; set; }
        public string seepagecanelres { get; set; }
        public string surfacewaterrecharge { get; set; }
        public string gwaterres { get; set; }
        public string irrigationdraft { get; set; }
        public string drinkingdraft { get; set; }
        public string draftindustry { get; set; }
        public string approvedby { get; set; }
        public string email { get; set; }
        public int? userid { get; set; }
        public DateTime currdate { get; set; }
    }

    [Table("wspformgenerate_inserteddata", Schema = "public")]
    public class abhy_water_budget_form_InsertedData
    {
        [Key]
        public int wfgiid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string tol_population { get; set; }
        public string male_population { get; set; }
        public string female_population { get; set; }
        public string tol_farmers { get; set; }
        public string tol_agri_labours { get; set; }
        public string tol_household_activities { get; set; }
        public string others_govt_private_employees { get; set; }
        public string forest_area { get; set; }
        public string fallow_land { get; set; }
        public string barrren_land { get; set; }
        public string cult_waste_land { get; set; }
        public string area_non_agri { get; set; }
        public string irri_canals { get; set; }
        public string irri_tanks { get; set; }
        public string irri_dugwells { get; set; }
        public string irri_dug_borewells { get; set; }
        public string irri_bore_tube_wells { get; set; }
        public string bullock_drawn { get; set; }
        public string diesel_pump { get; set; }
        public string centrifugal_pump { get; set; }
        public string water_pump { get; set; }
        public string working_borewells { get; set; }
        public string defunt_borewells { get; set; }
        public string kharif_rice { get; set; }
        public string kharif_sugarcane { get; set; }
        public string kharif_cotton { get; set; }
        public string kharif_maize { get; set; }
        public string kharif_others { get; set; }
        public string rabi_wheat { get; set; }
        public string rabi_mustard { get; set; }
        public string rabi_gram { get; set; }
        public string rabi_barley { get; set; }
        public string rabi_others { get; set; }
        public string kharif_rabi_tomoto { get; set; }
        public string kharif_rabi_others { get; set; }
        public string livestock_cows_buffaloes { get; set; }
        public string livestock_bullocks { get; set; }
        public string livestock_sheeps_goates { get; set; }
        public string monsoon_rainfall { get; set; }
        public string non_monsoon_rainfall { get; set; }
        public string monsoon_gw_level { get; set; }
        public string non_monsoon_gw_level { get; set; }
        public string water_drinking_purpose { get; set; }
        public string water_agriculture_purpose { get; set; }
        public string water_industrial_purpose { get; set; }
        public string water_domestic_purpose { get; set; }
        public string power_availbility { get; set; }
        public string power_hhs { get; set; }
        public string power_iirigation { get; set; }
        public string power_avg_hours_connectivity { get; set; }
        public string social_youth_clubs { get; set; }
        public string social_self_help { get; set; }
        public string social_cooperative { get; set; }
        public string social_others { get; set; }
        public string pucca_road { get; set; }
        public string kuchha_road { get; set; }
        public string userid { get; set; }
    }

    [Table("abhy_total_wsp_budget", Schema = "public")]
    public class abhy_total_wsp_budget
    {

        public int id { get; set; }
        public int? userid { get; set; }
        public string useremail { get; set; }
        public string today_date { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string useraddress { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gpname { get; set; }
        public string AvgOfSurfaceWaterRainfall { get; set; }
        public string Gwr_Rainfall_Area { get; set; }
        public string Gwr_Rainfall_Rainfall { get; set; }
        public string Tank_Pond_Lake_Functioning_All_round_the_year { get; set; }
        public string Tanks_Lakes_Area_in_Hectares { get; set; }
        public string Tanks_Depth { get; set; }
        public string Gwr_IT_maximum_SubmergenceArea { get; set; }
        public string Gwr_IT_Reacharge_Rate { get; set; }
        public string Gwr_IT_DaysOfSubmergence { get; set; }
        public string No_Of_CheckDams { get; set; }
        public string CheckDams_Capacity { get; set; }
        public string checkdams_depth { get; set; }
        public string Gwr_CD_maximumSubmergence_Area { get; set; }
        public string Gwr_CD_AverageDepthOf_Water { get; set; }
        public string Gwr_CD_NoOfFillings { get; set; }
        public string Canals_River_Canal_Functioning_All_round_the_year { get; set; }
        public string Canals_Area_in_Hectares { get; set; }
        public string Canals_Depth { get; set; }
        public string canals_Discharge { get; set; }
        public string Gwr_STC_LengthOfthe_Canals { get; set; }
        public string Gwr_STC_Flowing_Days { get; set; }
        public string Gwr_STC_Avg_Wetted_Perimeter { get; set; }
        public string River_Canal_Functioning_All_round_the_year { get; set; }
        public string River_Canals_Area_in_Hectares { get; set; }
        public string River_Depth { get; set; }
        public string river_Discharge { get; set; }
        [Column("Live_Capacity_at_FRL_(BCM)")]
        public double Live_Capacity_at_FRL { get; set; }
        public string reservoir_Discharge { get; set; }
        public string Gwr_SWI_DesignedDischarge_At_Outlet { get; set; }
        public string Gwr_SWI_WaterReleased_At_OutLet { get; set; }
        public string Gwr_GwI_CommndArea_Irrigation { get; set; }
        public string surface_water_paddy { get; set; }
        public string surface_water_nonpaddy { get; set; }
        public string gwi_gross_gw_draft_for_irrigation { get; set; }
        public string gwi_gwl_non_command_area { get; set; }
        public string Draft_Irrigation_DailyPumping_Hours { get; set; }
        public string Tube_Wells_Borehole_Functioning_All_round_the_year { get; set; }
        public string Draft_Irrigation_Avg_Pumping_Rate { get; set; }
        public string Total_Population_of_Village { get; set; }
        public string cows { get; set; }
        public string buffaloes { get; set; }
        public string sheeps_and_goats { get; set; }
        public string Draft_Industry_GW_In_Take { get; set; }
        public string Draft_Industry_Tot_Noof_Production_Days { get; set; }
        public string total_evapotranspiration { get; set; }
        public string total_surface_water { get; set; }
        public string total_gwr { get; set; }
        public string total_potential_gwr { get; set; }
        public string total_water_availability { get; set; }
        public string total_irrigation { get; set; }
        public string total_domestic { get; set; }
        public string total_industry { get; set; }
        public string total_environmental_flow { get; set; }
        public string total_draft { get; set; }
        public string total_balance { get; set; }
        public string AreaunderlinedBy_Name { get; set; }
        public string RechargeFactor { get; set; }
        public string no_of_days_water_released_from_outlet { get; set; }
        public string surface_water_paddy_irri { get; set; }
        public string surface_water_nonpaddy_irri { get; set; }
        public string Total_no_of_wells_tubewells { get; set; }
        public string swi_intake__20_percentage { get; set; }
        public string total_no_of_industries { get; set; }
        public string canal_type { get; set; }
        public string soil_type { get; set; }
        public string seepage_factor { get; set; }
        public string Live_Capacity_at_FRL_recharge { get; set; }
        public string reservoir_Discharge_recharge { get; set; }
        public string AreaunderlinedBy_Name_reservoirs { get; set; }
        public string RechargeFactor_reservoirs { get; set; }
        public string groundwater_rainfall { get; set; }
        public string groundwater_lakes_ponds_tanks { get; set; }
        public string groundwater_checkdams { get; set; }
        public string groundwater_canals { get; set; }
        public string groundwater_river { get; set; }
        public string groundwater_reservoirs { get; set; }
        public string groundwater_swi { get; set; }
        public string groundwater_gwi { get; set; }
    }

    [Table("tbl_landowner_baseline", Schema = "public")]
    public class Abhy_Landowner_Baseline
    {
        [Key]
        public long lbid { get; set; }
        public string userid { get; set; }
        public string today_date { get; set; }
        public string state { get; set; }
        public string dist { get; set; }

        public string block { get; set; }

        public string gram { get; set; }

        public string name { get; set; }

        public string father_or_usband_or_mother_name { get; set; }

        public string sc_or_st_or_obc { get; set; }

        public string land_holding_in_hectares { get; set; }

        public string no_of_tw_or_dcb_or_dw { get; set; }

        public string year_of_construction { get; set; }

        public string depth_in_meter_water_level { get; set; }

        public string energy_meter { get; set; }

        public string flow_meter { get; set; }

        public string electricity_or_diesel_consumption_per_annum { get; set; }

        public string discharge { get; set; }

        public string crops_kharif { get; set; }

        public string crops_kharif_irrigated_by { get; set; }

        public string crops_rabi { get; set; }

        public string crops_rabi_irrigated_by { get; set; }

        public string crops_others { get; set; }

        public string crops_others_irrigated_by { get; set; }

        public string better_irrigation_technichiques_drip { get; set; }

        public string better_irrigation_technichiques_sprinkler { get; set; }

        public string better_irrigation_technichiques_piped_irrigation { get; set; }

        public string better_irrigation_technichiques_laser_levelling { get; set; }

        public string better_irrigation_technichiques_and_so_on { get; set; }

    }


    [Table("tbl_land_use_and_irrigated_areas", Schema = "public")]
    public class Abhy_Land_use_and_irrigated_areas
    {
        [Key]
        public long luiaid { get; set; }
        public string userid { get; set; }
        public string today_date { get; set; }
        public string state { get; set; }
        public string dist { get; set; }

        public string block { get; set; }

        public string gram { get; set; }

        public string total_area_of_gp_in_sq_kms { get; set; }

        public string forest_area { get; set; }

        public string barren_land { get; set; }

        public string non_agricultural_uses { get; set; }

        public string area_of_tree_crops_groves { get; set; }

        public string cultivable_area { get; set; }

        public string net_area_sown { get; set; }

        public string gross_cropped_area { get; set; }

        public string irrigation_area_irrigated { get; set; }

        public string irrigation_by_surface_water { get; set; }

        public string irrigation_area { get; set; }

        public string irrigation_other_sources { get; set; }
    }

    [Table("abhy_water_avalibility_saved_data", Schema = "public")]
    public class Abhy_Water_Avalibility
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string surface_water_rainfall_catchment_area { get; set; }
        public string surface_water_rainfall_avg_annual { get; set; }
        public string surface_water_rainfall_runoff { get; set; }
        public string surface_water_rainfall_evapo { get; set; }
        public string surface_water_rainfall_avalibility { get; set; }
        public string ground_water_rainfall_catchment_area { get; set; }
        public string ground_water_rainfall_avg_annual { get; set; }
        public string ground_water_rainfall_geology { get; set; }
        public string ground_water_rainfall_recharge_factor { get; set; }
        public string ground_water_rainfall_netground_avail { get; set; }
        public string ground_water_rainfall_recharge { get; set; }
        public string ground_water_rainfall_avalibility { get; set; }
        public string net_water_availability_rainfall { get; set; }
        public string surface_water_lake_noof_lake_pond { get; set; }
        public string surface_water_lake_tol_catchment_area { get; set; }
        public string surface_water_lake_average_depth { get; set; }
        public string surface_water_lake_evapo { get; set; }
        public string surface_water_lake_water_availability { get; set; }
        public string ground_water_lake_submergence_area { get; set; }
        public string ground_water_lake_reachaege_rate { get; set; }
        public string ground_water_lake_daysof_submergence { get; set; }
        public string ground_water_lake_netground_avail { get; set; }
        public string ground_water_lake_gw_recharge { get; set; }
        public string ground_water_lake_gw_availability { get; set; }
        public string net_water_availability_lakes_ponds { get; set; }
        public string surface_water_checkdams_noof_dams { get; set; }
        public string surface_water_checkdams_capacity { get; set; }
        public string surface_water_checkdams_avg_depth { get; set; }
        public string surface_water_checkdams_evapo { get; set; }
        public string surface_water_checkdams_sw_avail { get; set; }
        public string ground_water_checkdams_submergence { get; set; }
        public string ground_water_checkdams_avg_depth { get; set; }
        public string ground_water_checkdams_noof_filling { get; set; }
        public string ground_water_checkdams_netground_aval { get; set; }
        public string ground_water_checkdams_gw_recharge { get; set; }
        public string ground_water_checkdams_gw_available { get; set; }
        public string net_water_availability_checkdams { get; set; }
        public string surface_water_canals_noof_canals { get; set; }
        public string surface_water_canals_area_of_canal { get; set; }
        public string surface_water_canals_avg_depth { get; set; }
        public string surface_water_canals_discharge { get; set; }
        public string surface_water_canals_evapo { get; set; }
        public string surface_water_canals_sw_available { get; set; }
        public string ground_water_canals_length_of_canal { get; set; }
        public string ground_water_canals_type_of_canal { get; set; }
        public string ground_water_canals_soil_type { get; set; }
        public string ground_water_canals_seepagefactor { get; set; }
        public string ground_water_canals_flowing_days { get; set; }
        public string ground_water_canals_avg_perimeter { get; set; }
        public string ground_water_canals_netground_avail { get; set; }
        public string ground_water_canals_gw_recharge { get; set; }
        public string ground_water_canals_gw_availability { get; set; }
        public string net_water_availability_canals { get; set; }
        public string surface_water_rivers_noof_rivers { get; set; }
        public string surface_water_rivers_area { get; set; }
        public string surface_water_rivers_avg_depth { get; set; }
        public string surface_water_rivers_discharge { get; set; }
        public string surface_water_rivers_evapo { get; set; }
        public string surface_water_rivers_sw_avail { get; set; }
        public string surface_water_reservoirs_capacity { get; set; }
        public string surface_water_reservoirs_discharge { get; set; }
        public string surface_water_reservoirs_evapo { get; set; }
        public string surface_water_reservoirs_sw_avail { get; set; }
        public string ground_water_reservoirs_geology { get; set; }
        public string ground_water_reservoirs_rechargefact { get; set; }
        public string ground_water_reservoirs_capacity { get; set; }
        public string ground_water_reservoirs_ng_avail { get; set; }
        public string ground_water_reservoirs_gw_recharge { get; set; }
        public string ground_water_reservoirs_gw_avail { get; set; }
        public string net_water_availability_reservoirs { get; set; }
        public string surface_water_irri_discharge_outlet { get; set; }
        public string surface_water_irri_days_waterreleased { get; set; }
        public string surface_water_irri_tolwater_released { get; set; }
        public string surface_water_irri_gwl_command_area { get; set; }
        public string surface_water_irri_area_under_paddy { get; set; }
        public string surface_water_irri_area_under_nonpaddy { get; set; }
        public string surface_water_irri_netground_avail { get; set; }
        public string surface_water_irri_gw_recharge { get; set; }
        public string surface_water_irri_gw_availbility { get; set; }

        public string ground_water_irri_draft { get; set; }
        public string ground_water_irri_non_command_area { get; set; }
        public string ground_water_irri_area_under_paddy { get; set; }
        public string ground_water_irri_area_under_nonpaddy { get; set; }
        public string ground_water_irri_netground_avail { get; set; }
        public string ground_water_irri_gw_recharge { get; set; }
        public string ground_water_irri_gw_availability { get; set; }
        public string total_water_availability { get; set; }
    }

    [Table("abhy_water_draft_saved_data", Schema = "public")]
    public class Abhy_Draft_Savedata
    {
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string irri_kharif_paddy_crop_area { get; set; }
        public string irri_kharif_paddy_water_demand { get; set; }
        public string irri_kharif_ragi_crop_area { get; set; }
        public string irri_kharif_ragi_water_demand { get; set; }
        public string irri_kharif_groundnut_crop_area { get; set; }
        public string irri_kharif_groundnut_water_demand { get; set; }
        public string irri_kharif_sugarcane_crop_area { get; set; }
        public string irri_kharif_sugarcane_water_demand { get; set; }
        public string irri_kharif_tomoto_crop_area { get; set; }
        public string irri_kharif_tomoto_water_demand { get; set; }
        public string irri_kharif_cabbage_crop_area { get; set; }
        public string irri_kharif_cabbage_water_demand { get; set; }
        public string irri_kharif_beans_crop_area { get; set; }
        public string irri_kharif_beans_water_demand { get; set; }
        public string irri_kharif_floriculture_crop_area { get; set; }
        public string irri_kharif_floriculture_water_demand { get; set; }
        public string irri_kharif_sericulture_crop_area { get; set; }
        public string irri_kharif_sericulture_water_demand { get; set; }
        public string irri_kharif_cucumber_crop_area { get; set; }
        public string irri_kharif_cucumber_water_demand { get; set; }
        public string irri_kharif_banana_crop_area { get; set; }
        public string irri_kharif_banana_water_demand { get; set; }
        public string irri_kharif_fodder_crop_area { get; set; }
        public string irri_kharif_fodder_water_demand { get; set; }
        public string irri_kharif_maize_crop_area { get; set; }
        public string irri_kharif_maize_water_demand { get; set; }
        public string irri_kharif_potato_crop_area { get; set; }
        public string irri_kharif_potato_water_demand { get; set; }
        public string irri_kharif_chillies_crop_area { get; set; }
        public string irri_kharif_chillies_water_demand { get; set; }
        public string irri_kharif_cotton_crop_area { get; set; }
        public string irri_kharif_cotton_water_demand { get; set; }
        public string irri_kharif_melon_crop_area { get; set; }
        public string irri_kharif_melon_water_demand { get; set; }
        public string irri_kharif_citrus_crop_area { get; set; }
        public string irri_kharif_citrus_water_demand { get; set; }
        public string irri_kharif_peanut_crop_area { get; set; }
        public string irri_kharif_peanut_water_demand { get; set; }
        public string irri_kharif_horticulture_crop_area { get; set; }
        public string irri_kharif_horticulture_water_demand { get; set; }
        public string irri_kharif_total_water_demand_crops { get; set; }
        public string irri_rabi_sericulture_crop_area { get; set; }
        public string irri_rabi_sericulture_water_demand { get; set; }
        public string irri_rabi_tomoto_crop_area { get; set; }
        public string irri_rabi_tomoto_water_demand { get; set; }
        public string irri_rabi_cabbage_crop_area { get; set; }
        public string irri_rabi_cabbage_water_demand { get; set; }
        public string irri_rabi_beans_crop_area { get; set; }
        public string irri_rabi_beans_water_demand { get; set; }
        public string irri_rabi_floriculture_crop_area { get; set; }
        public string irri_rabi_floriculture_water_demand { get; set; }
        public string irri_rabi_potato_crop_area { get; set; }
        public string irri_rabi_potato_water_demand { get; set; }
        public string irri_rabi_cucumber_crop_area { get; set; }
        public string irri_rabi_cucumber_water_demand { get; set; }
        public string irri_rabi_ragi_crop_area { get; set; }
        public string irri_rabi_ragi_water_demand { get; set; }
        public string irri_rabi_sugarcane_crop_area { get; set; }
        public string irri_rabi_sugarcane_water_demand { get; set; }
        public string irri_rabi_maize_crop_area { get; set; }
        public string irri_rabi_maize_water_demand { get; set; }
        public string irri_rabi_fodder_crop_area { get; set; }
        public string irri_rabi_fodder_water_demand { get; set; }
        public string irri_rabi_paddy_crop_area { get; set; }
        public string irri_rabi_paddy_water_demand { get; set; }
        public string irri_rabi_alfalfa_crop_area { get; set; }
        public string irri_rabi_alfalfa_water_demand { get; set; }
        public string irri_rabi_onion_crop_area { get; set; }
        public string irri_rabi_onion_water_demand { get; set; }
        public string irri_rabi_hortculture_crop_area { get; set; }
        public string irri_rabi_hortculture_water_demand { get; set; }
        public string irri_rabi_sunflower_crop_area { get; set; }
        public string irri_rabi_sunflower_water_demand { get; set; }
        public string irri_rabi_total_water_demand_crops { get; set; }
        public string irri_summer_sericulture_crop_area { get; set; }
        public string irri_summer_sericulture_water_demand { get; set; }
        public string irri_summer_tomoto_crop_area { get; set; }
        public string irri_summer_tomoto_water_demand { get; set; }
        public string irri_summer_cabbage_crop_area { get; set; }
        public string irri_summer_cabbage_water_demand { get; set; }
        public string irri_summer_beans_crop_area { get; set; }
        public string irri_summer_beans_water_demand { get; set; }
        public string irri_summer_floriculture_crop_area { get; set; }
        public string irri_summer_floriculture_water_demand { get; set; }
        public string irri_summer_maize_crop_area { get; set; }
        public string irri_summer_maize_water_demand { get; set; }
        public string irri_summer_fodder_crop_area { get; set; }
        public string irri_summer_fodder_water_demand { get; set; }
        public string irri_summer_sugarcane_crop_area { get; set; }
        public string irri_summer_sugarcane_water_demand { get; set; }
        public string irri_summer_total_water_demand_crops { get; set; }





        public string domestic_total_population { get; set; }
        public string domestic_per_capita_population { get; set; }
        public string domestic_tol_noof_cattle { get; set; }
        public string domestic_per_capita_cattle { get; set; }
        public string domestic_tol_noof_buffaloes { get; set; }
        public string domestic_per_capita_buffaloes { get; set; }
        public string domestic_tol_noof_goats_sheeps { get; set; }
        public string domestic_per_capita_goats_sheeps { get; set; }
        public string domestic_tol_water_req_human_livestock { get; set; }
        public string industry_surface_water_intake { get; set; }
        public string industry_ground_water_intake { get; set; }
        public string industry_tol_noof_production { get; set; }
        public string industry_tol_noof_industries { get; set; }
        public string industry_water_draft { get; set; }
        public string industry_environmental_flow { get; set; }
        public string total_water_draft { get; set; }

        public string total_wsp_balance { get; set; }
        public string irri_sprinkler_water_demand { get; set; }
        public string irri_sprinkler_rabiwater_demand { get; set; }
        public string irri_summer_crops_water_demand { get; set; }




    }

    [Table("abhy_wsphome_total_saved_data", Schema = "public")]
    public class Abhy_Total_WSP
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string evapotranspiration { get; set; }
        public string surface_water { get; set; }
        public string ground_water_recharge { get; set; }
        public string potential_ground_water_resource { get; set; }
        public string total_water_availability { get; set; }
        public string irrigation { get; set; }
        public string domestic { get; set; }
        public string industry { get; set; }
        public string environmental_flow { get; set; }

        public string total_draft { get; set; }
        public string total_balance { get; set; }
    }

    [Table("abhy_demandside_sprinkler_saveddata", Schema = "public")]
    public class abhy_demandside_sprinkler_saveddata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }

        public string sprinkler_kharif_paddy_crop_area { get; set; }
        public string sprinkler_kharif_paddy_irri_area { get; set; }
        public string sprinkler_kharif_paddy_water_req { get; set; }
        public string sprinkler_kharif_paddy_fundingsource { get; set; }
        public string sprinkler_kharif_paddy_waterdemand { get; set; }
        public string sprinkler_kharif_paddy_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_paddy_reduction_gw_demand { get; set; }

        public string sprinkler_kharif_ragi_crop_area { get; set; }
        public string sprinkler_kharif_ragi_irri_area { get; set; }
        public string sprinkler_kharif_ragi_water_req { get; set; }
        public string sprinkler_kharif_ragi_fundingsource { get; set; }
        public string sprinkler_kharif_ragi_waterdemand { get; set; }
        public string sprinkler_kharif_ragi_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_ragi_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_groundnut_crop_area { get; set; }
        public string sprinkler_kharif_groundnut_irri_area { get; set; }
        public string sprinkler_kharif_groundnut_water_req { get; set; }
        public string sprinkler_kharif_groundnut_fundingsource { get; set; }
        public string sprinkler_kharif_groundnut_waterdemand { get; set; }
        public string sprinkler_kharif_groundnut_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_groundnut_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_sugarcane_crop_area { get; set; }
        public string sprinkler_kharif_sugarcane_irri_area { get; set; }
        public string sprinkler_kharif_sugarcane_water_req { get; set; }
        public string sprinkler_kharif_sugarcane_fundingsource { get; set; }
        public string sprinkler_kharif_sugarcane_waterdemand { get; set; }
        public string sprinkler_kharif_sugarcane_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_sugarcane_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_tomoto_crop_area { get; set; }
        public string sprinkler_kharif_tomoto_irri_area { get; set; }
        public string sprinkler_kharif_tomoto_water_req { get; set; }
        public string sprinkler_kharif_tomoto_fundingsource { get; set; }
        public string sprinkler_kharif_tomoto_waterdemand { get; set; }
        public string sprinkler_kharif_tomoto_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_tomoto_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_cabbage_crop_area { get; set; }
        public string sprinkler_kharif_cabbage_irri_area { get; set; }
        public string sprinkler_kharif_cabbage_water_req { get; set; }
        public string sprinkler_kharif_cabbage_fundingsource { get; set; }
        public string sprinkler_kharif_cabbage_waterdemand { get; set; }
        public string sprinkler_kharif_cabbage_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_cabbage_reduction_gw_demand { get; set; }



        public string sprinkler_kharif_beans_crop_area { get; set; }
        public string sprinkler_kharif_beans_irri_area { get; set; }
        public string sprinkler_kharif_beans_water_req { get; set; }
        public string sprinkler_kharif_beans_fundingsource { get; set; }
        public string sprinkler_kharif_beans_waterdemand { get; set; }
        public string sprinkler_kharif_beans_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_beans_reduction_gw_demand { get; set; }

        public string sprinkler_kharif_floriculture_crop_area { get; set; }
        public string sprinkler_kharif_floriculture_irri_area { get; set; }
        public string sprinkler_kharif_floriculture_water_req { get; set; }
        public string sprinkler_kharif_floriculture_fundingsource { get; set; }
        public string sprinkler_kharif_floriculture_waterdemand { get; set; }
        public string sprinkler_kharif_floriculture_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_floriculture_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_sericulture_crop_area { get; set; }
        public string sprinkler_kharif_sericulture_irri_area { get; set; }
        public string sprinkler_kharif_sericulture_water_req { get; set; }
        public string sprinkler_kharif_sericulture_fundingsource { get; set; }
        public string sprinkler_kharif_sericulture_waterdemand { get; set; }
        public string sprinkler_kharif_sericulture_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_sericulture_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_cucumber_crop_area { get; set; }
        public string sprinkler_kharif_cucumber_irri_area { get; set; }
        public string sprinkler_kharif_cucumber_water_req { get; set; }
        public string sprinkler_kharif_cucumber_fundingsource { get; set; }
        public string sprinkler_kharif_cucumber_waterdemand { get; set; }
        public string sprinkler_kharif_cucumber_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_cucumber_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_banana_crop_area { get; set; }
        public string sprinkler_kharif_banana_irri_area { get; set; }
        public string sprinkler_kharif_banana_water_req { get; set; }
        public string sprinkler_kharif_banana_fundingsource { get; set; }
        public string sprinkler_kharif_banana_waterdemand { get; set; }
        public string sprinkler_kharif_banana_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_banana_reduction_gw_demand { get; set; }



        public string sprinkler_kharif_fodder_crop_area { get; set; }
        public string sprinkler_kharif_fodder_irri_area { get; set; }
        public string sprinkler_kharif_fodder_water_req { get; set; }
        public string sprinkler_kharif_fodder_fundingsource { get; set; }
        public string sprinkler_kharif_fodder_waterdemand { get; set; }
        public string sprinkler_kharif_fodder_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_fodder_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_maize_crop_area { get; set; }
        public string sprinkler_kharif_maize_irri_area { get; set; }
        public string sprinkler_kharif_maize_water_req { get; set; }
        public string sprinkler_kharif_maize_fundingsource { get; set; }
        public string sprinkler_kharif_maize_waterdemand { get; set; }
        public string sprinkler_kharif_maize_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_maize_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_potato_crop_area { get; set; }
        public string sprinkler_kharif_potato_irri_area { get; set; }
        public string sprinkler_kharif_potato_water_req { get; set; }
        public string sprinkler_kharif_potato_fundingsource { get; set; }
        public string sprinkler_kharif_potato_waterdemand { get; set; }
        public string sprinkler_kharif_potato_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_potato_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_chillies_crop_area { get; set; }
        public string sprinkler_kharif_chillies_irri_area { get; set; }
        public string sprinkler_kharif_chillies_water_req { get; set; }
        public string sprinkler_kharif_chillies_fundingsource { get; set; }
        public string sprinkler_kharif_chillies_waterdemand { get; set; }
        public string sprinkler_kharif_chillies_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_chillies_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_cotton_crop_area { get; set; }
        public string sprinkler_kharif_cotton_irri_area { get; set; }
        public string sprinkler_kharif_cotton_water_req { get; set; }
        public string sprinkler_kharif_cotton_fundingsource { get; set; }
        public string sprinkler_kharif_cotton_waterdemand { get; set; }
        public string sprinkler_kharif_cotton_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_cotton_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_melon_crop_area { get; set; }
        public string sprinkler_kharif_melon_irri_area { get; set; }
        public string sprinkler_kharif_melon_water_req { get; set; }
        public string sprinkler_kharif_melon_fundingsource { get; set; }
        public string sprinkler_kharif_melon_waterdemand { get; set; }
        public string sprinkler_kharif_melon_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_melon_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_citrus_crop_area { get; set; }
        public string sprinkler_kharif_citrus_irri_area { get; set; }
        public string sprinkler_kharif_citrus_water_req { get; set; }
        public string sprinkler_kharif_citrus_fundingsource { get; set; }
        public string sprinkler_kharif_citrus_waterdemand { get; set; }
        public string sprinkler_kharif_citrus_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_citrus_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_peanut_crop_area { get; set; }
        public string sprinkler_kharif_peanut_irri_area { get; set; }
        public string sprinkler_kharif_peanut_water_req { get; set; }
        public string sprinkler_kharif_peanut_fundingsource { get; set; }
        public string sprinkler_kharif_peanut_waterdemand { get; set; }
        public string sprinkler_kharif_peanut_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_peanut_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_horticulture_crop_area { get; set; }
        public string sprinkler_kharif_horticulture_irri_area { get; set; }
        public string sprinkler_kharif_horticulture_water_req { get; set; }
        public string sprinkler_kharif_horticulture_fundingsource { get; set; }
        public string sprinkler_kharif_horticulture_waterdemand { get; set; }
        public string sprinkler_kharif_horticulture_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_horticulture_reduction_gw_demand { get; set; }


        public string sprinkler_kharif_total_waterdemand { get; set; }
        public string sprinkler_kharif_total_sprinkler_waterdemand { get; set; }
        public string sprinkler_kharif_total_reduction_waterdemand { get; set; }

        public string sprinkler_rabi_sericulture_crop_area { get; set; }
        public string sprinkler_rabi_sericulture_irri_area { get; set; }
        public string sprinkler_rabi_sericulture_water_req { get; set; }
        public string sprinkler_rabi_sericulture_fundingsource { get; set; }
        public string sprinkler_rabi_sericulture_waterdemand { get; set; }
        public string sprinkler_rabi_sericulture_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_sericulture_reduction_gw_demand { get; set; }


        public string sprinkler_rabi_tomoto_crop_area { get; set; }
        public string sprinkler_rabi_tomoto_irri_area { get; set; }
        public string sprinkler_rabi_tomoto_water_req { get; set; }
        public string sprinkler_rabi_tomoto_fundingsource { get; set; }
        public string sprinkler_rabi_tomoto_waterdemand { get; set; }
        public string sprinkler_rabi_tomoto_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_tomoto_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_cabbage_crop_area { get; set; }
        public string sprinkler_rabi_cabbage_irri_area { get; set; }
        public string sprinkler_rabi_cabbage_water_req { get; set; }
        public string sprinkler_rabi_cabbage_fundingsource { get; set; }
        public string sprinkler_rabi_cabbage_waterdemand { get; set; }
        public string sprinkler_rabi_cabbage_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_cabbage_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_beans_crop_area { get; set; }
        public string sprinkler_rabi_beans_irri_area { get; set; }
        public string sprinkler_rabi_beans_water_req { get; set; }
        public string sprinkler_rabi_beans_fundingsource { get; set; }
        public string sprinkler_rabi_beans_waterdemand { get; set; }
        public string sprinkler_rabi_beans_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_beans_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_floriculture_crop_area { get; set; }
        public string sprinkler_rabi_floriculture_irri_area { get; set; }
        public string sprinkler_rabi_floriculture_water_req { get; set; }
        public string sprinkler_rabi_floriculture_fundingsource { get; set; }
        public string sprinkler_rabi_floriculture_waterdemand { get; set; }
        public string sprinkler_rabi_floriculture_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_floriculture_reduction_gw_demand { get; set; }


        public string sprinkler_rabi_potato_crop_area { get; set; }
        public string sprinkler_rabi_potato_irri_area { get; set; }
        public string sprinkler_rabi_potato_water_req { get; set; }
        public string sprinkler_rabi_potato_fundingsource { get; set; }
        public string sprinkler_rabi_potato_waterdemand { get; set; }
        public string sprinkler_rabi_potato_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_potato_reduction_gw_demand { get; set; }


        public string sprinkler_rabi_cucumber_crop_area { get; set; }
        public string sprinkler_rabi_cucumber_irri_area { get; set; }
        public string sprinkler_rabi_cucumber_water_req { get; set; }
        public string sprinkler_rabi_cucumber_fundingsource { get; set; }
        public string sprinkler_rabi_cucumber_waterdemand { get; set; }
        public string sprinkler_rabi_cucumber_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_cucumber_reduction_gw_demand { get; set; }


        public string sprinkler_rabi_ragi_crop_area { get; set; }
        public string sprinkler_rabi_ragi_irri_area { get; set; }
        public string sprinkler_rabi_ragi_water_req { get; set; }
        public string sprinkler_rabi_ragi_fundingsource { get; set; }
        public string sprinkler_rabi_ragi_waterdemand { get; set; }
        public string sprinkler_rabi_ragi_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_ragi_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_sugarcane_crop_area { get; set; }
        public string sprinkler_rabi_sugarcane_irri_area { get; set; }
        public string sprinkler_rabi_sugarcane_water_req { get; set; }
        public string sprinkler_rabi_sugarcane_fundingsource { get; set; }
        public string sprinkler_rabi_sugarcane_waterdemand { get; set; }
        public string sprinkler_rabi_sugarcane_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_sugarcane_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_maize_crop_area { get; set; }
        public string sprinkler_rabi_maize_irri_area { get; set; }
        public string sprinkler_rabi_maize_water_req { get; set; }
        public string sprinkler_rabi_maize_fundingsource { get; set; }
        public string sprinkler_rabi_maize_waterdemand { get; set; }
        public string sprinkler_rabi_maize_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_maize_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_fodder_crop_area { get; set; }
        public string sprinkler_rabi_fodder_irri_area { get; set; }
        public string sprinkler_rabi_fodder_water_req { get; set; }
        public string sprinkler_rabi_fodder_fundingsource { get; set; }
        public string sprinkler_rabi_fodder_waterdemand { get; set; }
        public string sprinkler_rabi_fodder_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_fodder_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_paddy_crop_area { get; set; }
        public string sprinkler_rabi_paddy_irri_area { get; set; }
        public string sprinkler_rabi_paddy_water_req { get; set; }
        public string sprinkler_rabi_paddy_fundingsource { get; set; }
        public string sprinkler_rabi_paddy_waterdemand { get; set; }
        public string sprinkler_rabi_paddy_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_paddy_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_alfalfa_crop_area { get; set; }
        public string sprinkler_rabi_alfalfa_irri_area { get; set; }
        public string sprinkler_rabi_alfalfa_water_req { get; set; }
        public string sprinkler_rabi_alfalfa_fundingsource { get; set; }
        public string sprinkler_rabi_alfalfa_waterdemand { get; set; }
        public string sprinkler_rabi_alfalfa_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_alfalfa_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_onion_crop_area { get; set; }
        public string sprinkler_rabi_onion_irri_area { get; set; }
        public string sprinkler_rabi_onion_water_req { get; set; }
        public string sprinkler_rabi_onion_fundingsource { get; set; }
        public string sprinkler_rabi_onion_waterdemand { get; set; }
        public string sprinkler_rabi_onion_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_onion_reduction_gw_demand { get; set; }



        public string sprinkler_rabi_horticulture_crop_area { get; set; }
        public string sprinkler_rabi_horticulture_irri_area { get; set; }
        public string sprinkler_rabi_horticulture_water_req { get; set; }
        public string sprinkler_rabi_horticulture_fundingsource { get; set; }
        public string sprinkler_rabi_horticulture_waterdemand { get; set; }
        public string sprinkler_rabi_horticulture_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_horticulture_reduction_gw_demand { get; set; }


        public string sprinkler_rabi_sunflower_crop_area { get; set; }
        public string sprinkler_rabi_sunflower_irri_area { get; set; }
        public string sprinkler_rabi_sunflower_water_req { get; set; }
        public string sprinkler_rabi_sunflower_fundingsource { get; set; }
        public string sprinkler_rabi_sunflower_waterdemand { get; set; }
        public string sprinkler_rabi_sunflower_sprinkler_waterdemand { get; set; }
        public string sprinkler_rabi_sunflower_reduction_gw_demand { get; set; }

        public string sprinkler_rabi_total_waterdemand { get; set; }
        public string sprinkler_rabi_total_rabi_waterdemand { get; set; }
        public string sprinkler_rabi_total_reduction_waterdemand { get; set; }


        public string sprinkler_summer_sericulture_crop_area { get; set; }
        public string sprinkler_summer_sericulture_irri_area { get; set; }
        public string sprinkler_summer_sericulture_water_req { get; set; }
        public string sprinkler_summer_sericulture_fundingsource { get; set; }
        public string sprinkler_summer_sericulture_waterdemand { get; set; }
        public string sprinkler_summer_sericulture_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_sericulture_reduction_gw_demand { get; set; }

        public string sprinkler_summer_tomoto_crop_area { get; set; }
        public string sprinkler_summer_tomoto_irri_area { get; set; }
        public string sprinkler_summer_tomoto_water_req { get; set; }
        public string sprinkler_summer_tomoto_fundingsource { get; set; }
        public string sprinkler_summer_tomoto_waterdemand { get; set; }
        public string sprinkler_summer_tomoto_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_tomoto_reduction_gw_demand { get; set; }

        public string sprinkler_summer_cabbage_crop_area { get; set; }
        public string sprinkler_summer_cabbage_irri_area { get; set; }
        public string sprinkler_summer_cabbage_water_req { get; set; }
        public string sprinkler_summer_cabbage_fundingsource { get; set; }
        public string sprinkler_summer_cabbage_waterdemand { get; set; }
        public string sprinkler_summer_cabbage_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_cabbage_reduction_gw_demand { get; set; }

        public string sprinkler_summer_beans_crop_area { get; set; }
        public string sprinkler_summer_beans_irri_area { get; set; }
        public string sprinkler_summer_beans_water_req { get; set; }
        public string sprinkler_summer_beans_fundingsource { get; set; }
        public string sprinkler_summer_beans_waterdemand { get; set; }
        public string sprinkler_summer_beans_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_beans_reduction_gw_demand { get; set; }

        public string sprinkler_summer_floriculture_crop_area { get; set; }
        public string sprinkler_summer_floriculture_irri_area { get; set; }
        public string sprinkler_summer_floriculture_water_req { get; set; }
        public string sprinkler_summer_floriculture_fundingsource { get; set; }
        public string sprinkler_summer_floriculture_waterdemand { get; set; }
        public string sprinkler_summer_floriculture_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_floriculture_reduction_gw_demand { get; set; }


        public string sprinkler_summer_maize_crop_area { get; set; }
        public string sprinkler_summer_maize_irri_area { get; set; }
        public string sprinkler_summer_maize_water_req { get; set; }
        public string sprinkler_summer_maize_fundingsource { get; set; }
        public string sprinkler_summer_maize_waterdemand { get; set; }
        public string sprinkler_summer_maize_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_maize_reduction_gw_demand { get; set; }


        public string sprinkler_summer_fodder_crop_area { get; set; }
        public string sprinkler_summer_fodder_irri_area { get; set; }
        public string sprinkler_summer_fodder_water_req { get; set; }
        public string sprinkler_summer_fodder_fundingsource { get; set; }
        public string sprinkler_summer_fodder_waterdemand { get; set; }
        public string sprinkler_summer_fodder_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_fodder_reduction_gw_demand { get; set; }


        public string sprinkler_summer_sugarcane_crop_area { get; set; }
        public string sprinkler_summer_sugarcane_irri_area { get; set; }
        public string sprinkler_summer_sugarcane_water_req { get; set; }
        public string sprinkler_summer_sugarcane_fundingsource { get; set; }
        public string sprinkler_summer_sugarcane_waterdemand { get; set; }
        public string sprinkler_summer_sugarcane_sprinkler_waterdemand { get; set; }
        public string sprinkler_summer_sugarcane_reduction_gw_demand { get; set; }

        public string sprinkler_summer_horticulture_crop_area { get; set; }
        public string sprinkler_summer_horticulture_irri_area { get; set; }
        public string sprinkler_summer_horticulture_water_req { get; set; }

        public string sprinkler_summer_horticulture_waterdemand { get; set; }
        public string sprinkler_summer_horticulture_netwater_waterdemand { get; set; }
        public string sprinkler_summer_horticulture_reduction_gw_demand { get; set; }


        public string sprinkler_summer_total_waterdemand { get; set; }
        public string sprinkler_summer_total_summer_waterdemand { get; set; }
        public string sprinkler_summer_total_reduction_waterdemand { get; set; }
        public string sprinkler_annual_reduction_waterdemand { get; set; }
        public string sprinkler_other_funding_source { get; set; }

        //estmated cost
        public string sprinkler_approx_estimated_cost { get; set; }
        public string sprinkler_cost_type { get; set; }

        //other crops kharif/rabi/summer each 5 boxes

        public string sprinkler_kharif_othercrop_name1 { get; set; }
        public string sprinkler_kharif_othercrop_area1 { get; set; }
        public string sprinkler_kharif_othercrop_irri_area1 { get; set; }
        public string sprinkler_kharif_othercrop_water_req1 { get; set; }
        public string sprinkler_kharif_othercrop_waterdemand1 { get; set; }
        public string sprinkler_kharif_othercrop_sprinkler_waterdemand1 { get; set; }
        public string sprinkler_kharif_othercrop_reduc_gw_demand1 { get; set; }

        public string sprinkler_kharif_othercrop_name2 { get; set; }
        public string sprinkler_kharif_othercrop_area2 { get; set; }
        public string sprinkler_kharif_othercrop_irri_area2 { get; set; }
        public string sprinkler_kharif_othercrop_water_req2 { get; set; }
        public string sprinkler_kharif_othercrop_waterdemand2 { get; set; }
        public string sprinkler_kharif_othercrop_sprinkler_waterdemand2 { get; set; }
        public string sprinkler_kharif_othercrop_reduc_gw_demand2 { get; set; }

        public string sprinkler_kharif_othercrop_name3 { get; set; }
        public string sprinkler_kharif_othercrop_area3 { get; set; }
        public string sprinkler_kharif_othercrop_irri_area3 { get; set; }
        public string sprinkler_kharif_othercrop_water_req3 { get; set; }
        public string sprinkler_kharif_othercrop_waterdemand3 { get; set; }
        public string sprinkler_kharif_othercrop_sprinkler_waterdemand3 { get; set; }
        public string sprinkler_kharif_othercrop_reduc_gw_demand3 { get; set; }

        public string sprinkler_kharif_othercrop_name4 { get; set; }
        public string sprinkler_kharif_othercrop_area4 { get; set; }
        public string sprinkler_kharif_othercrop_irri_area4 { get; set; }
        public string sprinkler_kharif_othercrop_water_req4 { get; set; }
        public string sprinkler_kharif_othercrop_waterdemand4 { get; set; }
        public string sprinkler_kharif_othercrop_sprinkler_waterdemand4 { get; set; }
        public string sprinkler_kharif_othercrop_reduc_gw_demand4 { get; set; }

        public string sprinkler_kharif_othercrop_name5 { get; set; }
        public string sprinkler_kharif_othercrop_area5 { get; set; }
        public string sprinkler_kharif_othercrop_irri_area5 { get; set; }
        public string sprinkler_kharif_othercrop_water_req5 { get; set; }
        public string sprinkler_kharif_othercrop_waterdemand5 { get; set; }
        public string sprinkler_kharif_othercrop_sprinkler_waterdemand5 { get; set; }
        public string sprinkler_kharif_othercrop_reduc_gw_demand5 { get; set; }

        //rabi
        public string sprinkler_rabi_othercrop_name1 { get; set; }
        public string sprinkler_rabi_othercrop_area1 { get; set; }
        public string sprinkler_rabi_othercrop_irri_area1 { get; set; }
        public string sprinkler_rabi_othercrop_water_req1 { get; set; }
        public string sprinkler_rabi_othercrop_waterdemand1 { get; set; }
        public string sprinkler_rabi_othercrop_sprinkler_waterdemand1 { get; set; }
        public string sprinkler_rabi_othercrop_reduc_gw_demand1 { get; set; }

        public string sprinkler_rabi_othercrop_name2 { get; set; }
        public string sprinkler_rabi_othercrop_area2 { get; set; }
        public string sprinkler_rabi_othercrop_irri_area2 { get; set; }
        public string sprinkler_rabi_othercrop_water_req2 { get; set; }
        public string sprinkler_rabi_othercrop_waterdemand2 { get; set; }
        public string sprinkler_rabi_othercrop_sprinkler_waterdemand2 { get; set; }
        public string sprinkler_rabi_othercrop_reduc_gw_demand2 { get; set; }

        public string sprinkler_rabi_othercrop_name3 { get; set; }
        public string sprinkler_rabi_othercrop_area3 { get; set; }
        public string sprinkler_rabi_othercrop_irri_area3 { get; set; }
        public string sprinkler_rabi_othercrop_water_req3 { get; set; }
        public string sprinkler_rabi_othercrop_waterdemand3 { get; set; }
        public string sprinkler_rabi_othercrop_sprinkler_waterdemand3 { get; set; }
        public string sprinkler_rabi_othercrop_reduc_gw_demand3 { get; set; }

        public string sprinkler_rabi_othercrop_name4 { get; set; }
        public string sprinkler_rabi_othercrop_area4 { get; set; }
        public string sprinkler_rabi_othercrop_irri_area4 { get; set; }
        public string sprinkler_rabi_othercrop_water_req4 { get; set; }
        public string sprinkler_rabi_othercrop_waterdemand4 { get; set; }
        public string sprinkler_rabi_othercrop_sprinkler_waterdemand4 { get; set; }
        public string sprinkler_rabi_othercrop_reduc_gw_demand4 { get; set; }

        public string sprinkler_rabi_othercrop_name5 { get; set; }
        public string sprinkler_rabi_othercrop_area5 { get; set; }
        public string sprinkler_rabi_othercrop_irri_area5 { get; set; }
        public string sprinkler_rabi_othercrop_water_req5 { get; set; }
        public string sprinkler_rabi_othercrop_waterdemand5 { get; set; }
        public string sprinkler_rabi_othercrop_sprinkler_waterdemand5 { get; set; }
        public string sprinkler_rabi_othercrop_reduc_gw_demand5 { get; set; }

        //summer
        public string sprinkler_summer_othercrop_name1 { get; set; }
        public string sprinkler_summer_othercrop_area1 { get; set; }
        public string sprinkler_summer_othercrop_irri_area1 { get; set; }
        public string sprinkler_summer_othercrop_water_req1 { get; set; }
        public string sprinkler_summer_othercrop_waterdemand1 { get; set; }
        public string sprinkler_summer_othercrop_sprinkler_waterdemand1 { get; set; }
        public string sprinkler_summer_othercrop_reduc_gw_demand1 { get; set; }

        public string sprinkler_summer_othercrop_name2 { get; set; }
        public string sprinkler_summer_othercrop_area2 { get; set; }
        public string sprinkler_summer_othercrop_irri_area2 { get; set; }
        public string sprinkler_summer_othercrop_water_req2 { get; set; }
        public string sprinkler_summer_othercrop_waterdemand2 { get; set; }
        public string sprinkler_summer_othercrop_sprinkler_waterdemand2 { get; set; }
        public string sprinkler_summer_othercrop_reduc_gw_demand2 { get; set; }

        public string sprinkler_summer_othercrop_name3 { get; set; }
        public string sprinkler_summer_othercrop_area3 { get; set; }
        public string sprinkler_summer_othercrop_irri_area3 { get; set; }
        public string sprinkler_summer_othercrop_water_req3 { get; set; }
        public string sprinkler_summer_othercrop_waterdemand3 { get; set; }
        public string sprinkler_summer_othercrop_sprinkler_waterdemand3 { get; set; }
        public string sprinkler_summer_othercrop_reduc_gw_demand3 { get; set; }

        public string sprinkler_summer_othercrop_name4 { get; set; }
        public string sprinkler_summer_othercrop_area4 { get; set; }
        public string sprinkler_summer_othercrop_irri_area4 { get; set; }
        public string sprinkler_summer_othercrop_water_req4 { get; set; }
        public string sprinkler_summer_othercrop_waterdemand4 { get; set; }
        public string sprinkler_summer_othercrop_sprinkler_waterdemand4 { get; set; }
        public string sprinkler_summer_othercrop_reduc_gw_demand4 { get; set; }

        public string sprinkler_summer_othercrop_name5 { get; set; }
        public string sprinkler_summer_othercrop_area5 { get; set; }
        public string sprinkler_summer_othercrop_irri_area5 { get; set; }
        public string sprinkler_summer_othercrop_water_req5 { get; set; }
        public string sprinkler_summer_othercrop_waterdemand5 { get; set; }
        public string sprinkler_summer_othercrop_sprinkler_waterdemand5 { get; set; }
        public string sprinkler_summer_othercrop_reduc_gw_demand5 { get; set; }
        public string officer_name { get; set; }

    }

    [Table("abhy_demandside_drip_saveddata", Schema = "public")]
    public class abhy_demandside_drip_saveddata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }

        public string drip_kharif_paddy_crop_area { get; set; }
        public string drip_kharif_paddy_irri_area { get; set; }
        public string drip_kharif_paddy_water_req { get; set; }
        public string drip_kharif_paddy_fundingsource { get; set; }
        public string drip_kharif_paddy_waterdemand { get; set; }
        public string drip_kharif_paddy_drip_waterdemand { get; set; }
        public string drip_kharif_paddy_reduction_gw_demand { get; set; }

        public string drip_kharif_ragi_crop_area { get; set; }
        public string drip_kharif_ragi_irri_area { get; set; }
        public string drip_kharif_ragi_water_req { get; set; }
        public string drip_kharif_ragi_fundingsource { get; set; }
        public string drip_kharif_ragi_waterdemand { get; set; }
        public string drip_kharif_ragi_drip_waterdemand { get; set; }
        public string drip_kharif_ragi_reduction_gw_demand { get; set; }


        public string drip_kharif_groundnut_crop_area { get; set; }
        public string drip_kharif_groundnut_irri_area { get; set; }
        public string drip_kharif_groundnut_water_req { get; set; }
        public string drip_kharif_groundnut_fundingsource { get; set; }
        public string drip_kharif_groundnut_waterdemand { get; set; }
        public string drip_kharif_groundnut_drip_waterdemand { get; set; }
        public string drip_kharif_groundnut_reduction_gw_demand { get; set; }


        public string drip_kharif_sugarcane_crop_area { get; set; }
        public string drip_kharif_sugarcane_irri_area { get; set; }
        public string drip_kharif_sugarcane_water_req { get; set; }
        public string drip_kharif_sugarcane_fundingsource { get; set; }
        public string drip_kharif_sugarcane_waterdemand { get; set; }
        public string drip_kharif_sugarcane_drip_waterdemand { get; set; }
        public string drip_kharif_sugarcane_reduction_gw_demand { get; set; }


        public string drip_kharif_tomoto_crop_area { get; set; }
        public string drip_kharif_tomoto_irri_area { get; set; }
        public string drip_kharif_tomoto_water_req { get; set; }
        public string drip_kharif_tomoto_fundingsource { get; set; }
        public string drip_kharif_tomoto_waterdemand { get; set; }
        public string drip_kharif_tomoto_drip_waterdemand { get; set; }
        public string drip_kharif_tomoto_reduction_gw_demand { get; set; }


        public string drip_kharif_cabbage_crop_area { get; set; }
        public string drip_kharif_cabbage_irri_area { get; set; }
        public string drip_kharif_cabbage_water_req { get; set; }
        public string drip_kharif_cabbage_fundingsource { get; set; }
        public string drip_kharif_cabbage_waterdemand { get; set; }
        public string drip_kharif_cabbage_drip_waterdemand { get; set; }
        public string drip_kharif_cabbage_reduction_gw_demand { get; set; }



        public string drip_kharif_beans_crop_area { get; set; }
        public string drip_kharif_beans_irri_area { get; set; }
        public string drip_kharif_beans_water_req { get; set; }
        public string drip_kharif_beans_fundingsource { get; set; }
        public string drip_kharif_beans_waterdemand { get; set; }
        public string drip_kharif_beans_drip_waterdemand { get; set; }
        public string drip_kharif_beans_reduction_gw_demand { get; set; }

        public string drip_kharif_floriculture_crop_area { get; set; }
        public string drip_kharif_floriculture_irri_area { get; set; }
        public string drip_kharif_floriculture_water_req { get; set; }
        public string drip_kharif_floriculture_fundingsource { get; set; }
        public string drip_kharif_floriculture_waterdemand { get; set; }
        public string drip_kharif_floriculture_drip_waterdemand { get; set; }
        public string drip_kharif_floriculture_reduction_gw_demand { get; set; }


        public string drip_kharif_sericulture_crop_area { get; set; }
        public string drip_kharif_sericulture_irri_area { get; set; }
        public string drip_kharif_sericulture_water_req { get; set; }
        public string drip_kharif_sericulture_fundingsource { get; set; }
        public string drip_kharif_sericulture_waterdemand { get; set; }
        public string drip_kharif_sericulture_drip_waterdemand { get; set; }
        public string drip_kharif_sericulture_reduction_gw_demand { get; set; }


        public string drip_kharif_cucumber_crop_area { get; set; }
        public string drip_kharif_cucumber_irri_area { get; set; }
        public string drip_kharif_cucumber_water_req { get; set; }
        public string drip_kharif_cucumber_fundingsource { get; set; }
        public string drip_kharif_cucumber_waterdemand { get; set; }
        public string drip_kharif_cucumber_drip_waterdemand { get; set; }
        public string drip_kharif_cucumber_reduction_gw_demand { get; set; }


        public string drip_kharif_banana_crop_area { get; set; }
        public string drip_kharif_banana_irri_area { get; set; }
        public string drip_kharif_banana_water_req { get; set; }
        public string drip_kharif_banana_fundingsource { get; set; }
        public string drip_kharif_banana_waterdemand { get; set; }
        public string drip_kharif_banana_drip_waterdemand { get; set; }
        public string drip_kharif_banana_reduction_gw_demand { get; set; }



        public string drip_kharif_fodder_crop_area { get; set; }
        public string drip_kharif_fodder_irri_area { get; set; }
        public string drip_kharif_fodder_water_req { get; set; }
        public string drip_kharif_fodder_fundingsource { get; set; }
        public string drip_kharif_fodder_waterdemand { get; set; }
        public string drip_kharif_fodder_drip_waterdemand { get; set; }
        public string drip_kharif_fodder_reduction_gw_demand { get; set; }


        public string drip_kharif_maize_crop_area { get; set; }
        public string drip_kharif_maize_irri_area { get; set; }
        public string drip_kharif_maize_water_req { get; set; }
        public string drip_kharif_maize_fundingsource { get; set; }
        public string drip_kharif_maize_waterdemand { get; set; }
        public string drip_kharif_maize_drip_waterdemand { get; set; }
        public string drip_kharif_maize_reduction_gw_demand { get; set; }


        public string drip_kharif_potato_crop_area { get; set; }
        public string drip_kharif_potato_irri_area { get; set; }
        public string drip_kharif_potato_water_req { get; set; }
        public string drip_kharif_potato_fundingsource { get; set; }
        public string drip_kharif_potato_waterdemand { get; set; }
        public string drip_kharif_potato_drip_waterdemand { get; set; }
        public string drip_kharif_potato_reduction_gw_demand { get; set; }


        public string drip_kharif_chillies_crop_area { get; set; }
        public string drip_kharif_chillies_irri_area { get; set; }
        public string drip_kharif_chillies_water_req { get; set; }
        public string drip_kharif_chillies_fundingsource { get; set; }
        public string drip_kharif_chillies_waterdemand { get; set; }
        public string drip_kharif_chillies_drip_waterdemand { get; set; }
        public string drip_kharif_chillies_reduction_gw_demand { get; set; }


        public string drip_kharif_cotton_crop_area { get; set; }
        public string drip_kharif_cotton_irri_area { get; set; }
        public string drip_kharif_cotton_water_req { get; set; }
        public string drip_kharif_cotton_fundingsource { get; set; }
        public string drip_kharif_cotton_waterdemand { get; set; }
        public string drip_kharif_cotton_drip_waterdemand { get; set; }
        public string drip_kharif_cotton_reduction_gw_demand { get; set; }


        public string drip_kharif_melon_crop_area { get; set; }
        public string drip_kharif_melon_irri_area { get; set; }
        public string drip_kharif_melon_water_req { get; set; }
        public string drip_kharif_melon_fundingsource { get; set; }
        public string drip_kharif_melon_waterdemand { get; set; }
        public string drip_kharif_melon_drip_waterdemand { get; set; }
        public string drip_kharif_melon_reduction_gw_demand { get; set; }


        public string drip_kharif_citrus_crop_area { get; set; }
        public string drip_kharif_citrus_irri_area { get; set; }
        public string drip_kharif_citrus_water_req { get; set; }
        public string drip_kharif_citrus_fundingsource { get; set; }
        public string drip_kharif_citrus_waterdemand { get; set; }
        public string drip_kharif_citrus_drip_waterdemand { get; set; }
        public string drip_kharif_citrus_reduction_gw_demand { get; set; }


        public string drip_kharif_peanut_crop_area { get; set; }
        public string drip_kharif_peanut_irri_area { get; set; }
        public string drip_kharif_peanut_water_req { get; set; }
        public string drip_kharif_peanut_fundingsource { get; set; }
        public string drip_kharif_peanut_waterdemand { get; set; }
        public string drip_kharif_peanut_drip_waterdemand { get; set; }
        public string drip_kharif_peanut_reduction_gw_demand { get; set; }


        public string drip_kharif_horticulture_crop_area { get; set; }
        public string drip_kharif_horticulture_irri_area { get; set; }
        public string drip_kharif_horticulture_water_req { get; set; }
        public string drip_kharif_horticulture_fundingsource { get; set; }
        public string drip_kharif_horticulture_waterdemand { get; set; }
        public string drip_kharif_horticulture_drip_waterdemand { get; set; }
        public string drip_kharif_horticulture_reduction_gw_demand { get; set; }


        public string drip_kharif_total_waterdemand { get; set; }
        public string drip_kharif_total_drip_waterdemand { get; set; }
        public string drip_kharif_total_reduction_waterdemand { get; set; }

        public string drip_rabi_sericulture_crop_area { get; set; }
        public string drip_rabi_sericulture_irri_area { get; set; }
        public string drip_rabi_sericulture_water_req { get; set; }
        public string drip_rabi_sericulture_fundingsource { get; set; }
        public string drip_rabi_sericulture_waterdemand { get; set; }
        public string drip_rabi_sericulture_drip_waterdemand { get; set; }
        public string drip_rabi_sericulture_reduction_gw_demand { get; set; }


        public string drip_rabi_tomoto_crop_area { get; set; }
        public string drip_rabi_tomoto_irri_area { get; set; }
        public string drip_rabi_tomoto_water_req { get; set; }
        public string drip_rabi_tomoto_fundingsource { get; set; }
        public string drip_rabi_tomoto_waterdemand { get; set; }
        public string drip_rabi_tomoto_drip_waterdemand { get; set; }
        public string drip_rabi_tomoto_reduction_gw_demand { get; set; }

        public string drip_rabi_cabbage_crop_area { get; set; }
        public string drip_rabi_cabbage_irri_area { get; set; }
        public string drip_rabi_cabbage_water_req { get; set; }
        public string drip_rabi_cabbage_fundingsource { get; set; }
        public string drip_rabi_cabbage_waterdemand { get; set; }
        public string drip_rabi_cabbage_drip_waterdemand { get; set; }
        public string drip_rabi_cabbage_reduction_gw_demand { get; set; }

        public string drip_rabi_beans_crop_area { get; set; }
        public string drip_rabi_beans_irri_area { get; set; }
        public string drip_rabi_beans_water_req { get; set; }
        public string drip_rabi_beans_fundingsource { get; set; }
        public string drip_rabi_beans_waterdemand { get; set; }
        public string drip_rabi_beans_drip_waterdemand { get; set; }
        public string drip_rabi_beans_reduction_gw_demand { get; set; }

        public string drip_rabi_floriculture_crop_area { get; set; }
        public string drip_rabi_floriculture_irri_area { get; set; }
        public string drip_rabi_floriculture_water_req { get; set; }
        public string drip_rabi_floriculture_fundingsource { get; set; }
        public string drip_rabi_floriculture_waterdemand { get; set; }
        public string drip_rabi_floriculture_drip_waterdemand { get; set; }
        public string drip_rabi_floriculture_reduction_gw_demand { get; set; }


        public string drip_rabi_potato_crop_area { get; set; }
        public string drip_rabi_potato_irri_area { get; set; }
        public string drip_rabi_potato_water_req { get; set; }
        public string drip_rabi_potato_fundingsource { get; set; }
        public string drip_rabi_potato_waterdemand { get; set; }
        public string drip_rabi_potato_drip_waterdemand { get; set; }
        public string drip_rabi_potato_reduction_gw_demand { get; set; }


        public string drip_rabi_cucumber_crop_area { get; set; }
        public string drip_rabi_cucumber_irri_area { get; set; }
        public string drip_rabi_cucumber_water_req { get; set; }
        public string drip_rabi_cucumber_fundingsource { get; set; }
        public string drip_rabi_cucumber_waterdemand { get; set; }
        public string drip_rabi_cucumber_drip_waterdemand { get; set; }
        public string drip_rabi_cucumber_reduction_gw_demand { get; set; }


        public string drip_rabi_ragi_crop_area { get; set; }
        public string drip_rabi_ragi_irri_area { get; set; }
        public string drip_rabi_ragi_water_req { get; set; }
        public string drip_rabi_ragi_fundingsource { get; set; }
        public string drip_rabi_ragi_waterdemand { get; set; }
        public string drip_rabi_ragi_drip_waterdemand { get; set; }
        public string drip_rabi_ragi_reduction_gw_demand { get; set; }

        public string drip_rabi_sugarcane_crop_area { get; set; }
        public string drip_rabi_sugarcane_irri_area { get; set; }
        public string drip_rabi_sugarcane_water_req { get; set; }
        public string drip_rabi_sugarcane_fundingsource { get; set; }
        public string drip_rabi_sugarcane_waterdemand { get; set; }
        public string drip_rabi_sugarcane_drip_waterdemand { get; set; }
        public string drip_rabi_sugarcane_reduction_gw_demand { get; set; }

        public string drip_rabi_maize_crop_area { get; set; }
        public string drip_rabi_maize_irri_area { get; set; }
        public string drip_rabi_maize_water_req { get; set; }
        public string drip_rabi_maize_fundingsource { get; set; }
        public string drip_rabi_maize_waterdemand { get; set; }
        public string drip_rabi_maize_drip_waterdemand { get; set; }
        public string drip_rabi_maize_reduction_gw_demand { get; set; }

        public string drip_rabi_fodder_crop_area { get; set; }
        public string drip_rabi_fodder_irri_area { get; set; }
        public string drip_rabi_fodder_water_req { get; set; }
        public string drip_rabi_fodder_fundingsource { get; set; }
        public string drip_rabi_fodder_waterdemand { get; set; }
        public string drip_rabi_fodder_drip_waterdemand { get; set; }
        public string drip_rabi_fodder_reduction_gw_demand { get; set; }

        public string drip_rabi_paddy_crop_area { get; set; }
        public string drip_rabi_paddy_irri_area { get; set; }
        public string drip_rabi_paddy_water_req { get; set; }
        public string drip_rabi_paddy_fundingsource { get; set; }
        public string drip_rabi_paddy_waterdemand { get; set; }
        public string drip_rabi_paddy_drip_waterdemand { get; set; }
        public string drip_rabi_paddy_reduction_gw_demand { get; set; }

        public string drip_rabi_alfalfa_crop_area { get; set; }
        public string drip_rabi_alfalfa_irri_area { get; set; }
        public string drip_rabi_alfalfa_water_req { get; set; }
        public string drip_rabi_alfalfa_fundingsource { get; set; }
        public string drip_rabi_alfalfa_waterdemand { get; set; }
        public string drip_rabi_alfalfa_drip_waterdemand { get; set; }
        public string drip_rabi_alfalfa_reduction_gw_demand { get; set; }

        public string drip_rabi_onion_crop_area { get; set; }
        public string drip_rabi_onion_irri_area { get; set; }
        public string drip_rabi_onion_water_req { get; set; }
        public string drip_rabi_onion_fundingsource { get; set; }
        public string drip_rabi_onion_waterdemand { get; set; }
        public string drip_rabi_onion_drip_waterdemand { get; set; }
        public string drip_rabi_onion_reduction_gw_demand { get; set; }



        public string drip_rabi_horticulture_crop_area { get; set; }
        public string drip_rabi_horticulture_irri_area { get; set; }
        public string drip_rabi_horticulture_water_req { get; set; }
        public string drip_rabi_horticulture_fundingsource { get; set; }
        public string drip_rabi_horticulture_waterdemand { get; set; }
        public string drip_rabi_horticulture_drip_waterdemand { get; set; }
        public string drip_rabi_horticulture_reduction_gw_demand { get; set; }


        public string drip_rabi_sunflower_crop_area { get; set; }
        public string drip_rabi_sunflower_irri_area { get; set; }
        public string drip_rabi_sunflower_water_req { get; set; }
        public string drip_rabi_sunflower_fundingsource { get; set; }
        public string drip_rabi_sunflower_waterdemand { get; set; }
        public string drip_rabi_sunflower_drip_waterdemand { get; set; }
        public string drip_rabi_sunflower_reduction_gw_demand { get; set; }

        public string drip_rabi_total_waterdemand { get; set; }
        public string drip_rabi_total_rabi_waterdemand { get; set; }
        public string drip_rabi_total_reduction_waterdemand { get; set; }


        public string drip_summer_sericulture_crop_area { get; set; }
        public string drip_summer_sericulture_irri_area { get; set; }
        public string drip_summer_sericulture_water_req { get; set; }
        public string drip_summer_sericulture_fundingsource { get; set; }
        public string drip_summer_sericulture_waterdemand { get; set; }
        public string drip_summer_sericulture_drip_waterdemand { get; set; }
        public string drip_summer_sericulture_reduction_gw_demand { get; set; }

        public string drip_summer_tomoto_crop_area { get; set; }
        public string drip_summer_tomoto_irri_area { get; set; }
        public string drip_summer_tomoto_water_req { get; set; }
        public string drip_summer_tomoto_fundingsource { get; set; }
        public string drip_summer_tomoto_waterdemand { get; set; }
        public string drip_summer_tomoto_drip_waterdemand { get; set; }
        public string drip_summer_tomoto_reduction_gw_demand { get; set; }

        public string drip_summer_cabbage_crop_area { get; set; }
        public string drip_summer_cabbage_irri_area { get; set; }
        public string drip_summer_cabbage_water_req { get; set; }
        public string drip_summer_cabbage_fundingsource { get; set; }
        public string drip_summer_cabbage_waterdemand { get; set; }
        public string drip_summer_cabbage_drip_waterdemand { get; set; }
        public string drip_summer_cabbage_reduction_gw_demand { get; set; }

        public string drip_summer_beans_crop_area { get; set; }
        public string drip_summer_beans_irri_area { get; set; }
        public string drip_summer_beans_water_req { get; set; }
        public string drip_summer_beans_fundingsource { get; set; }
        public string drip_summer_beans_waterdemand { get; set; }
        public string drip_summer_beans_drip_waterdemand { get; set; }
        public string drip_summer_beans_reduction_gw_demand { get; set; }

        public string drip_summer_floriculture_crop_area { get; set; }
        public string drip_summer_floriculture_irri_area { get; set; }
        public string drip_summer_floriculture_water_req { get; set; }
        public string drip_summer_floriculture_fundingsource { get; set; }
        public string drip_summer_floriculture_waterdemand { get; set; }
        public string drip_summer_floriculture_drip_waterdemand { get; set; }
        public string drip_summer_floriculture_reduction_gw_demand { get; set; }


        public string drip_summer_maize_crop_area { get; set; }
        public string drip_summer_maize_irri_area { get; set; }
        public string drip_summer_maize_water_req { get; set; }
        public string drip_summer_maize_fundingsource { get; set; }
        public string drip_summer_maize_waterdemand { get; set; }
        public string drip_summer_maize_drip_waterdemand { get; set; }
        public string drip_summer_maize_reduction_gw_demand { get; set; }


        public string drip_summer_fodder_crop_area { get; set; }
        public string drip_summer_fodder_irri_area { get; set; }
        public string drip_summer_fodder_water_req { get; set; }
        public string drip_summer_fodder_fundingsource { get; set; }
        public string drip_summer_fodder_waterdemand { get; set; }
        public string drip_summer_fodder_drip_waterdemand { get; set; }
        public string drip_summer_fodder_reduction_gw_demand { get; set; }


        public string drip_summer_sugarcane_crop_area { get; set; }
        public string drip_summer_sugarcane_irri_area { get; set; }
        public string drip_summer_sugarcane_water_req { get; set; }
        public string drip_summer_sugarcane_fundingsource { get; set; }
        public string drip_summer_sugarcane_waterdemand { get; set; }
        public string drip_summer_sugarcane_drip_waterdemand { get; set; }
        public string drip_summer_sugarcane_reduction_gw_demand { get; set; }


        public string drip_summer_total_waterdemand { get; set; }
        public string drip_summer_total_summer_waterdemand { get; set; }
        public string drip_summer_total_reduction_waterdemand { get; set; }
        public string drip_annual_reduction_waterdemand { get; set; }


        public string drip_other_funding_source { get; set; }

        //estmated cost
        public string drip_approx_estimated_cost { get; set; }
        public string drip_cost_type { get; set; }

        //horticulture
        public string drip_summer_horticulture_crop_area { get; set; }
        public string drip_summer_horticulture_irri_area { get; set; }
        public string drip_summer_horticulture_water_req { get; set; }
        public string drip_summer_horticulture_waterdemand { get; set; }
        public string drip_summer_horticulture_netwater_waterdemand { get; set; }
        public string drip_summer_horticulture_reduction_gw_demand { get; set; }

        //other crops kharif/rabi/summer each 5 boxes

        public string drip_kharif_othercrop_name1 { get; set; }
        public string drip_kharif_othercrop_area1 { get; set; }
        public string drip_kharif_othercrop_irri_area1 { get; set; }
        public string drip_kharif_othercrop_water_req1 { get; set; }
        public string drip_kharif_othercrop_waterdemand1 { get; set; }
        public string drip_kharif_othercrop_drip_waterdemand1 { get; set; }
        public string drip_kharif_othercrop_reduc_gw_demand1 { get; set; }

        public string drip_kharif_othercrop_name2 { get; set; }
        public string drip_kharif_othercrop_area2 { get; set; }
        public string drip_kharif_othercrop_irri_area2 { get; set; }
        public string drip_kharif_othercrop_water_req2 { get; set; }
        public string drip_kharif_othercrop_waterdemand2 { get; set; }
        public string drip_kharif_othercrop_drip_waterdemand2 { get; set; }
        public string drip_kharif_othercrop_reduc_gw_demand2 { get; set; }

        public string drip_kharif_othercrop_name3 { get; set; }
        public string drip_kharif_othercrop_area3 { get; set; }
        public string drip_kharif_othercrop_irri_area3 { get; set; }
        public string drip_kharif_othercrop_water_req3 { get; set; }
        public string drip_kharif_othercrop_waterdemand3 { get; set; }
        public string drip_kharif_othercrop_drip_waterdemand3 { get; set; }
        public string drip_kharif_othercrop_reduc_gw_demand3 { get; set; }

        public string drip_kharif_othercrop_name4 { get; set; }
        public string drip_kharif_othercrop_area4 { get; set; }
        public string drip_kharif_othercrop_irri_area4 { get; set; }
        public string drip_kharif_othercrop_water_req4 { get; set; }
        public string drip_kharif_othercrop_waterdemand4 { get; set; }
        public string drip_kharif_othercrop_drip_waterdemand4 { get; set; }
        public string drip_kharif_othercrop_reduc_gw_demand4 { get; set; }

        public string drip_kharif_othercrop_name5 { get; set; }
        public string drip_kharif_othercrop_area5 { get; set; }
        public string drip_kharif_othercrop_irri_area5 { get; set; }
        public string drip_kharif_othercrop_water_req5 { get; set; }
        public string drip_kharif_othercrop_waterdemand5 { get; set; }
        public string drip_kharif_othercrop_drip_waterdemand5 { get; set; }
        public string drip_kharif_othercrop_reduc_gw_demand5 { get; set; }

        //new 10 other crops kharif

        //public string drip_kharif_othercrop_name6 { get; set; }
        //public string drip_kharif_othercrop_area6 { get; set; }
        //public string drip_kharif_othercrop_irri_area6 { get; set; }
        //public string drip_kharif_othercrop_water_req6 { get; set; }
        //public string drip_kharif_othercrop_waterdemand6 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand6 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand6 { get; set; }

        //public string drip_kharif_othercrop_name7 { get; set; }
        //public string drip_kharif_othercrop_area7 { get; set; }
        //public string drip_kharif_othercrop_irri_area7 { get; set; }
        //public string drip_kharif_othercrop_water_req7 { get; set; }
        //public string drip_kharif_othercrop_waterdemand7 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand7 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand7 { get; set; }

        //public string drip_kharif_othercrop_name8 { get; set; }
        //public string drip_kharif_othercrop_area8 { get; set; }
        //public string drip_kharif_othercrop_irri_area8 { get; set; }
        //public string drip_kharif_othercrop_water_req8 { get; set; }
        //public string drip_kharif_othercrop_waterdemand8 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand8 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand8 { get; set; }

        //public string drip_kharif_othercrop_name9 { get; set; }
        //public string drip_kharif_othercrop_area9 { get; set; }
        //public string drip_kharif_othercrop_irri_area9 { get; set; }
        //public string drip_kharif_othercrop_water_req9 { get; set; }
        //public string drip_kharif_othercrop_waterdemand9 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand9 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand9 { get; set; }

        //public string drip_kharif_othercrop_name10 { get; set; }
        //public string drip_kharif_othercrop_area10 { get; set; }
        //public string drip_kharif_othercrop_irri_area10 { get; set; }
        //public string drip_kharif_othercrop_water_req10 { get; set; }
        //public string drip_kharif_othercrop_waterdemand10 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand10 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand10 { get; set; }


        //public string drip_kharif_othercrop_name11 { get; set; }
        //public string drip_kharif_othercrop_area11 { get; set; }
        //public string drip_kharif_othercrop_irri_area11 { get; set; }
        //public string drip_kharif_othercrop_water_req11 { get; set; }
        //public string drip_kharif_othercrop_waterdemand11 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand11 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand11 { get; set; }

        //public string drip_kharif_othercrop_name12 { get; set; }
        //public string drip_kharif_othercrop_area12 { get; set; }
        //public string drip_kharif_othercrop_irri_area12 { get; set; }
        //public string drip_kharif_othercrop_water_req12 { get; set; }
        //public string drip_kharif_othercrop_waterdemand12 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand12 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand12 { get; set; }

        //public string drip_kharif_othercrop_name13 { get; set; }
        //public string drip_kharif_othercrop_area13 { get; set; }
        //public string drip_kharif_othercrop_irri_area13 { get; set; }
        //public string drip_kharif_othercrop_water_req13 { get; set; }
        //public string drip_kharif_othercrop_waterdemand13 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand13 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand13 { get; set; }

        //public string drip_kharif_othercrop_name14 { get; set; }
        //public string drip_kharif_othercrop_area14 { get; set; }
        //public string drip_kharif_othercrop_irri_area14 { get; set; }
        //public string drip_kharif_othercrop_water_req14 { get; set; }
        //public string drip_kharif_othercrop_waterdemand14 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand14 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand14 { get; set; }

        //public string drip_kharif_othercrop_name15 { get; set; }
        //public string drip_kharif_othercrop_area15 { get; set; }
        //public string drip_kharif_othercrop_irri_area15 { get; set; }
        //public string drip_kharif_othercrop_water_req15 { get; set; }
        //public string drip_kharif_othercrop_waterdemand15 { get; set; }
        //public string drip_kharif_othercrop_drip_waterdemand15 { get; set; }
        //public string drip_kharif_othercrop_reduc_gw_demand15 { get; set; }


        //rabi
        public string drip_rabi_othercrop_name1 { get; set; }
        public string drip_rabi_othercrop_area1 { get; set; }
        public string drip_rabi_othercrop_irri_area1 { get; set; }
        public string drip_rabi_othercrop_water_req1 { get; set; }
        public string drip_rabi_othercrop_waterdemand1 { get; set; }
        public string drip_rabi_othercrop_drip_waterdemand1 { get; set; }
        public string drip_rabi_othercrop_reduc_gw_demand1 { get; set; }

        public string drip_rabi_othercrop_name2 { get; set; }
        public string drip_rabi_othercrop_area2 { get; set; }
        public string drip_rabi_othercrop_irri_area2 { get; set; }
        public string drip_rabi_othercrop_water_req2 { get; set; }
        public string drip_rabi_othercrop_waterdemand2 { get; set; }
        public string drip_rabi_othercrop_drip_waterdemand2 { get; set; }
        public string drip_rabi_othercrop_reduc_gw_demand2 { get; set; }

        public string drip_rabi_othercrop_name3 { get; set; }
        public string drip_rabi_othercrop_area3 { get; set; }
        public string drip_rabi_othercrop_irri_area3 { get; set; }
        public string drip_rabi_othercrop_water_req3 { get; set; }
        public string drip_rabi_othercrop_waterdemand3 { get; set; }
        public string drip_rabi_othercrop_drip_waterdemand3 { get; set; }
        public string drip_rabi_othercrop_reduc_gw_demand3 { get; set; }

        public string drip_rabi_othercrop_name4 { get; set; }
        public string drip_rabi_othercrop_area4 { get; set; }
        public string drip_rabi_othercrop_irri_area4 { get; set; }
        public string drip_rabi_othercrop_water_req4 { get; set; }
        public string drip_rabi_othercrop_waterdemand4 { get; set; }
        public string drip_rabi_othercrop_drip_waterdemand4 { get; set; }
        public string drip_rabi_othercrop_reduc_gw_demand4 { get; set; }

        public string drip_rabi_othercrop_name5 { get; set; }
        public string drip_rabi_othercrop_area5 { get; set; }
        public string drip_rabi_othercrop_irri_area5 { get; set; }
        public string drip_rabi_othercrop_water_req5 { get; set; }
        public string drip_rabi_othercrop_waterdemand5 { get; set; }
        public string drip_rabi_othercrop_drip_waterdemand5 { get; set; }
        public string drip_rabi_othercrop_reduc_gw_demand5 { get; set; }

        //10 new othercrops rabi
        //public string drip_rabi_othercrop_name6 { get; set; }
        //public string drip_rabi_othercrop_area6 { get; set; }
        //public string drip_rabi_othercrop_irri_area6 { get; set; }
        //public string drip_rabi_othercrop_water_req6 { get; set; }
        //public string drip_rabi_othercrop_waterdemand6 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand6 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand6 { get; set; }

        //public string drip_rabi_othercrop_name7 { get; set; }
        //public string drip_rabi_othercrop_area7 { get; set; }
        //public string drip_rabi_othercrop_irri_area7 { get; set; }
        //public string drip_rabi_othercrop_water_req7 { get; set; }
        //public string drip_rabi_othercrop_waterdemand7 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand7 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand7 { get; set; }

        //public string drip_rabi_othercrop_name8 { get; set; }
        //public string drip_rabi_othercrop_area8 { get; set; }
        //public string drip_rabi_othercrop_irri_area8 { get; set; }
        //public string drip_rabi_othercrop_water_req8 { get; set; }
        //public string drip_rabi_othercrop_waterdemand8 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand8 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand8 { get; set; }

        //public string drip_rabi_othercrop_name9 { get; set; }
        //public string drip_rabi_othercrop_area9 { get; set; }
        //public string drip_rabi_othercrop_irri_area9 { get; set; }
        //public string drip_rabi_othercrop_water_req9 { get; set; }
        //public string drip_rabi_othercrop_waterdemand9 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand9 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand9 { get; set; }

        //public string drip_rabi_othercrop_name10 { get; set; }
        //public string drip_rabi_othercrop_area10 { get; set; }
        //public string drip_rabi_othercrop_irri_area10 { get; set; }
        //public string drip_rabi_othercrop_water_req10 { get; set; }
        //public string drip_rabi_othercrop_waterdemand10 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand10 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand10 { get; set; }

        //public string drip_rabi_othercrop_name11 { get; set; }
        //public string drip_rabi_othercrop_area11 { get; set; }
        //public string drip_rabi_othercrop_irri_area11 { get; set; }
        //public string drip_rabi_othercrop_water_req11 { get; set; }
        //public string drip_rabi_othercrop_waterdemand11 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand11 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand11 { get; set; }

        //public string drip_rabi_othercrop_name12 { get; set; }
        //public string drip_rabi_othercrop_area12 { get; set; }
        //public string drip_rabi_othercrop_irri_area12 { get; set; }
        //public string drip_rabi_othercrop_water_req12 { get; set; }
        //public string drip_rabi_othercrop_waterdemand12 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand12 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand12 { get; set; }

        //public string drip_rabi_othercrop_name13 { get; set; }
        //public string drip_rabi_othercrop_area13 { get; set; }
        //public string drip_rabi_othercrop_irri_area13 { get; set; }
        //public string drip_rabi_othercrop_water_req13 { get; set; }
        //public string drip_rabi_othercrop_waterdemand13 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand13 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand13 { get; set; }

        //public string drip_rabi_othercrop_name14 { get; set; }
        //public string drip_rabi_othercrop_area14 { get; set; }
        //public string drip_rabi_othercrop_irri_area14 { get; set; }
        //public string drip_rabi_othercrop_water_req14 { get; set; }
        //public string drip_rabi_othercrop_waterdemand14 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand14 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand14 { get; set; }

        //public string drip_rabi_othercrop_name15 { get; set; }
        //public string drip_rabi_othercrop_area15 { get; set; }
        //public string drip_rabi_othercrop_irri_area15 { get; set; }
        //public string drip_rabi_othercrop_water_req15 { get; set; }
        //public string drip_rabi_othercrop_waterdemand15 { get; set; }
        //public string drip_rabi_othercrop_drip_waterdemand15 { get; set; }
        //public string drip_rabi_othercrop_reduc_gw_demand15 { get; set; }

        //summer
        public string drip_summer_othercrop_name1 { get; set; }
        public string drip_summer_othercrop_area1 { get; set; }
        public string drip_summer_othercrop_irri_area1 { get; set; }
        public string drip_summer_othercrop_water_req1 { get; set; }
        public string drip_summer_othercrop_waterdemand1 { get; set; }
        public string drip_summer_othercrop_drip_waterdemand1 { get; set; }
        public string drip_summer_othercrop_reduc_gw_demand1 { get; set; }

        public string drip_summer_othercrop_name2 { get; set; }
        public string drip_summer_othercrop_area2 { get; set; }
        public string drip_summer_othercrop_irri_area2 { get; set; }
        public string drip_summer_othercrop_water_req2 { get; set; }
        public string drip_summer_othercrop_waterdemand2 { get; set; }
        public string drip_summer_othercrop_drip_waterdemand2 { get; set; }
        public string drip_summer_othercrop_reduc_gw_demand2 { get; set; }

        public string drip_summer_othercrop_name3 { get; set; }
        public string drip_summer_othercrop_area3 { get; set; }
        public string drip_summer_othercrop_irri_area3 { get; set; }
        public string drip_summer_othercrop_water_req3 { get; set; }
        public string drip_summer_othercrop_waterdemand3 { get; set; }
        public string drip_summer_othercrop_drip_waterdemand3 { get; set; }
        public string drip_summer_othercrop_reduc_gw_demand3 { get; set; }

        public string drip_summer_othercrop_name4 { get; set; }
        public string drip_summer_othercrop_area4 { get; set; }
        public string drip_summer_othercrop_irri_area4 { get; set; }
        public string drip_summer_othercrop_water_req4 { get; set; }
        public string drip_summer_othercrop_waterdemand4 { get; set; }
        public string drip_summer_othercrop_drip_waterdemand4 { get; set; }
        public string drip_summer_othercrop_reduc_gw_demand4 { get; set; }

        public string drip_summer_othercrop_name5 { get; set; }
        public string drip_summer_othercrop_area5 { get; set; }
        public string drip_summer_othercrop_irri_area5 { get; set; }
        public string drip_summer_othercrop_water_req5 { get; set; }
        public string drip_summer_othercrop_waterdemand5 { get; set; }
        public string drip_summer_othercrop_drip_waterdemand5 { get; set; }
        public string drip_summer_othercrop_reduc_gw_demand5 { get; set; }

        //10 new othercrops summer

        //public string drip_summer_othercrop_name6 { get; set; }
        //public string drip_summer_othercrop_area6 { get; set; }
        //public string drip_summer_othercrop_irri_area6 { get; set; }
        //public string drip_summer_othercrop_water_req6 { get; set; }
        //public string drip_summer_othercrop_waterdemand6 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand6 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand6 { get; set; }

        //public string drip_summer_othercrop_name7 { get; set; }
        //public string drip_summer_othercrop_area7 { get; set; }
        //public string drip_summer_othercrop_irri_area7 { get; set; }
        //public string drip_summer_othercrop_water_req7 { get; set; }
        //public string drip_summer_othercrop_waterdemand7 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand7 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand7 { get; set; }

        //public string drip_summer_othercrop_name8 { get; set; }
        //public string drip_summer_othercrop_area8 { get; set; }
        //public string drip_summer_othercrop_irri_area8 { get; set; }
        //public string drip_summer_othercrop_water_req8 { get; set; }
        //public string drip_summer_othercrop_waterdemand8 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand8 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand8 { get; set; }

        //public string drip_summer_othercrop_name9 { get; set; }
        //public string drip_summer_othercrop_area9 { get; set; }
        //public string drip_summer_othercrop_irri_area9 { get; set; }
        //public string drip_summer_othercrop_water_req9 { get; set; }
        //public string drip_summer_othercrop_waterdemand9 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand9 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand9 { get; set; }

        //public string drip_summer_othercrop_name10 { get; set; }
        //public string drip_summer_othercrop_area10 { get; set; }
        //public string drip_summer_othercrop_irri_area10 { get; set; }
        //public string drip_summer_othercrop_water_req10 { get; set; }
        //public string drip_summer_othercrop_waterdemand10 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand10 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand10 { get; set; }

        //public string drip_summer_othercrop_name11 { get; set; }
        //public string drip_summer_othercrop_area11 { get; set; }
        //public string drip_summer_othercrop_irri_area11 { get; set; }
        //public string drip_summer_othercrop_water_req11 { get; set; }
        //public string drip_summer_othercrop_waterdemand11 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand11 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand11 { get; set; }

        //public string drip_summer_othercrop_name12 { get; set; }
        //public string drip_summer_othercrop_area12 { get; set; }
        //public string drip_summer_othercrop_irri_area12 { get; set; }
        //public string drip_summer_othercrop_water_req12 { get; set; }
        //public string drip_summer_othercrop_waterdemand12 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand12 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand12 { get; set; }

        //public string drip_summer_othercrop_name13 { get; set; }
        //public string drip_summer_othercrop_area13 { get; set; }
        //public string drip_summer_othercrop_irri_area13 { get; set; }
        //public string drip_summer_othercrop_water_req13 { get; set; }
        //public string drip_summer_othercrop_waterdemand13 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand13 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand13 { get; set; }

        //public string drip_summer_othercrop_name14 { get; set; }
        //public string drip_summer_othercrop_area14 { get; set; }
        //public string drip_summer_othercrop_irri_area14 { get; set; }
        //public string drip_summer_othercrop_water_req14 { get; set; }
        //public string drip_summer_othercrop_waterdemand14 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand14 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand14 { get; set; }

        //public string drip_summer_othercrop_name15 { get; set; }
        //public string drip_summer_othercrop_area15 { get; set; }
        //public string drip_summer_othercrop_irri_area15 { get; set; }
        //public string drip_summer_othercrop_water_req15 { get; set; }
        //public string drip_summer_othercrop_waterdemand15 { get; set; }
        //public string drip_summer_othercrop_drip_waterdemand15 { get; set; }
        //public string drip_summer_othercrop_reduc_gw_demand15 { get; set; }
        public string officer_name { get; set; }
    }

    [Table("abhy_demandside_pipelies_saveddata", Schema = "public")]
    public class abhy_demandside_pipelies_saveddata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string officer_name { get; set; }
        public string pipeline_kharif_paddy_crop_area { get; set; }
        public string pipeline_kharif_paddy_irri_area { get; set; }
        public string pipeline_kharif_paddy_water_req { get; set; }
        public string pipeline_kharif_paddy_fundingsource { get; set; }
        public string pipeline_kharif_paddy_waterdemand { get; set; }
        public string pipeline_kharif_paddy_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_paddy_reduction_water_demand { get; set; }

        public string pipeline_kharif_ragi_crop_area { get; set; }
        public string pipeline_kharif_ragi_irri_area { get; set; }
        public string pipeline_kharif_ragi_water_req { get; set; }
        public string pipeline_kharif_ragi_fundingsource { get; set; }
        public string pipeline_kharif_ragi_waterdemand { get; set; }
        public string pipeline_kharif_ragi_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_ragi_reduction_water_demand { get; set; }


        public string pipeline_kharif_groundnut_crop_area { get; set; }
        public string pipeline_kharif_groundnut_irri_area { get; set; }
        public string pipeline_kharif_groundnut_water_req { get; set; }
        public string pipeline_kharif_groundnut_fundingsource { get; set; }
        public string pipeline_kharif_groundnut_waterdemand { get; set; }
        public string pipeline_kharif_groundnut_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_groundnut_reduction_water_demand { get; set; }


        public string pipeline_kharif_sugarcane_crop_area { get; set; }
        public string pipeline_kharif_sugarcane_irri_area { get; set; }
        public string pipeline_kharif_sugarcane_water_req { get; set; }
        public string pipeline_kharif_sugarcane_fundingsource { get; set; }
        public string pipeline_kharif_sugarcane_waterdemand { get; set; }
        public string pipeline_kharif_sugarcane_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_sugarcane_reduction_water_demand { get; set; }


        public string pipeline_kharif_tomoto_crop_area { get; set; }
        public string pipeline_kharif_tomoto_irri_area { get; set; }
        public string pipeline_kharif_tomoto_water_req { get; set; }
        public string pipeline_kharif_tomoto_fundingsource { get; set; }
        public string pipeline_kharif_tomoto_waterdemand { get; set; }
        public string pipeline_kharif_tomoto_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_tomoto_reduction_water_demand { get; set; }


        public string pipeline_kharif_cabbage_crop_area { get; set; }
        public string pipeline_kharif_cabbage_irri_area { get; set; }
        public string pipeline_kharif_cabbage_water_req { get; set; }
        public string pipeline_kharif_cabbage_fundingsource { get; set; }
        public string pipeline_kharif_cabbage_waterdemand { get; set; }
        public string pipeline_kharif_cabbage_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_cabbage_reduction_water_demand { get; set; }



        public string pipeline_kharif_beans_crop_area { get; set; }
        public string pipeline_kharif_beans_irri_area { get; set; }
        public string pipeline_kharif_beans_water_req { get; set; }
        public string pipeline_kharif_beans_fundingsource { get; set; }
        public string pipeline_kharif_beans_waterdemand { get; set; }
        public string pipeline_kharif_beans_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_beans_reduction_water_demand { get; set; }

        public string pipeline_kharif_floriculture_crop_area { get; set; }
        public string pipeline_kharif_floriculture_irri_area { get; set; }
        public string pipeline_kharif_floriculture_water_req { get; set; }
        public string pipeline_kharif_floriculture_fundingsource { get; set; }
        public string pipeline_kharif_floriculture_waterdemand { get; set; }
        public string pipeline_kharif_floriculture_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_floriculture_reduction_water_demand { get; set; }


        public string pipeline_kharif_sericulture_crop_area { get; set; }
        public string pipeline_kharif_sericulture_irri_area { get; set; }
        public string pipeline_kharif_sericulture_water_req { get; set; }
        public string pipeline_kharif_sericulture_fundingsource { get; set; }
        public string pipeline_kharif_sericulture_waterdemand { get; set; }
        public string pipeline_kharif_sericulture_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_sericulture_reduction_water_demand { get; set; }


        public string pipeline_kharif_cucumber_crop_area { get; set; }
        public string pipeline_kharif_cucumber_irri_area { get; set; }
        public string pipeline_kharif_cucumber_water_req { get; set; }
        public string pipeline_kharif_cucumber_fundingsource { get; set; }
        public string pipeline_kharif_cucumber_waterdemand { get; set; }
        public string pipeline_kharif_cucumber_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_cucumber_reduction_water_demand { get; set; }


        public string pipeline_kharif_banana_crop_area { get; set; }
        public string pipeline_kharif_banana_irri_area { get; set; }
        public string pipeline_kharif_banana_water_req { get; set; }
        public string pipeline_kharif_banana_fundingsource { get; set; }
        public string pipeline_kharif_banana_waterdemand { get; set; }
        public string pipeline_kharif_banana_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_banana_reduction_water_demand { get; set; }



        public string pipeline_kharif_fodder_crop_area { get; set; }
        public string pipeline_kharif_fodder_irri_area { get; set; }
        public string pipeline_kharif_fodder_water_req { get; set; }
        public string pipeline_kharif_fodder_fundingsource { get; set; }
        public string pipeline_kharif_fodder_waterdemand { get; set; }
        public string pipeline_kharif_fodder_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_fodder_reduction_water_demand { get; set; }


        public string pipeline_kharif_maize_crop_area { get; set; }
        public string pipeline_kharif_maize_irri_area { get; set; }
        public string pipeline_kharif_maize_water_req { get; set; }
        public string pipeline_kharif_maize_fundingsource { get; set; }
        public string pipeline_kharif_maize_waterdemand { get; set; }
        public string pipeline_kharif_maize_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_maize_reduction_water_demand { get; set; }


        public string pipeline_kharif_potato_crop_area { get; set; }
        public string pipeline_kharif_potato_irri_area { get; set; }
        public string pipeline_kharif_potato_water_req { get; set; }
        public string pipeline_kharif_potato_fundingsource { get; set; }
        public string pipeline_kharif_potato_waterdemand { get; set; }
        public string pipeline_kharif_potato_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_potato_reduction_water_demand { get; set; }


        public string pipeline_kharif_chillies_crop_area { get; set; }
        public string pipeline_kharif_chillies_irri_area { get; set; }
        public string pipeline_kharif_chillies_water_req { get; set; }
        public string pipeline_kharif_chillies_fundingsource { get; set; }
        public string pipeline_kharif_chillies_waterdemand { get; set; }
        public string pipeline_kharif_chillies_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_chillies_reduction_water_demand { get; set; }


        public string pipeline_kharif_cotton_crop_area { get; set; }
        public string pipeline_kharif_cotton_irri_area { get; set; }
        public string pipeline_kharif_cotton_water_req { get; set; }
        public string pipeline_kharif_cotton_fundingsource { get; set; }
        public string pipeline_kharif_cotton_waterdemand { get; set; }
        public string pipeline_kharif_cotton_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_cotton_reduction_water_demand { get; set; }


        public string pipeline_kharif_melon_crop_area { get; set; }
        public string pipeline_kharif_melon_irri_area { get; set; }
        public string pipeline_kharif_melon_water_req { get; set; }
        public string pipeline_kharif_melon_fundingsource { get; set; }
        public string pipeline_kharif_melon_waterdemand { get; set; }
        public string pipeline_kharif_melon_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_melon_reduction_water_demand { get; set; }


        public string pipeline_kharif_citrus_crop_area { get; set; }
        public string pipeline_kharif_citrus_irri_area { get; set; }
        public string pipeline_kharif_citrus_water_req { get; set; }
        public string pipeline_kharif_citrus_fundingsource { get; set; }
        public string pipeline_kharif_citrus_waterdemand { get; set; }
        public string pipeline_kharif_citrus_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_citrus_reduction_water_demand { get; set; }


        public string pipeline_kharif_peanut_crop_area { get; set; }
        public string pipeline_kharif_peanut_irri_area { get; set; }
        public string pipeline_kharif_peanut_water_req { get; set; }
        public string pipeline_kharif_peanut_fundingsource { get; set; }
        public string pipeline_kharif_peanut_waterdemand { get; set; }
        public string pipeline_kharif_peanut_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_peanut_reduction_water_demand { get; set; }


        public string pipeline_kharif_horticulture_crop_area { get; set; }
        public string pipeline_kharif_horticulture_irri_area { get; set; }
        public string pipeline_kharif_horticulture_water_req { get; set; }
        public string pipeline_kharif_horticulture_fundingsource { get; set; }
        public string pipeline_kharif_horticulture_waterdemand { get; set; }
        public string pipeline_kharif_horticulture_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_horticulture_reduction_water_demand { get; set; }


        public string pipeline_kharif_total_waterdemand { get; set; }
        public string pipeline_kharif_total_pipeline_waterdemand { get; set; }
        public string pipeline_kharif_total_reduction_waterdemand { get; set; }

        public string pipeline_rabi_sericulture_crop_area { get; set; }
        public string pipeline_rabi_sericulture_irri_area { get; set; }
        public string pipeline_rabi_sericulture_water_req { get; set; }
        public string pipeline_rabi_sericulture_fundingsource { get; set; }
        public string pipeline_rabi_sericulture_waterdemand { get; set; }
        public string pipeline_rabi_sericulture_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_sericulture_reduction_water_demand { get; set; }


        public string pipeline_rabi_tomoto_crop_area { get; set; }
        public string pipeline_rabi_tomoto_irri_area { get; set; }
        public string pipeline_rabi_tomoto_water_req { get; set; }
        public string pipeline_rabi_tomoto_fundingsource { get; set; }
        public string pipeline_rabi_tomoto_waterdemand { get; set; }
        public string pipeline_rabi_tomoto_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_tomoto_reduction_water_demand { get; set; }

        public string pipeline_rabi_cabbage_crop_area { get; set; }
        public string pipeline_rabi_cabbage_irri_area { get; set; }
        public string pipeline_rabi_cabbage_water_req { get; set; }
        public string pipeline_rabi_cabbage_fundingsource { get; set; }
        public string pipeline_rabi_cabbage_waterdemand { get; set; }
        public string pipeline_rabi_cabbage_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_cabbage_reduction_water_demand { get; set; }

        public string pipeline_rabi_beans_crop_area { get; set; }
        public string pipeline_rabi_beans_irri_area { get; set; }
        public string pipeline_rabi_beans_water_req { get; set; }
        public string pipeline_rabi_beans_fundingsource { get; set; }
        public string pipeline_rabi_beans_waterdemand { get; set; }
        public string pipeline_rabi_beans_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_beans_reduction_water_demand { get; set; }

        public string pipeline_rabi_floriculture_crop_area { get; set; }
        public string pipeline_rabi_floriculture_irri_area { get; set; }
        public string pipeline_rabi_floriculture_water_req { get; set; }
        public string pipeline_rabi_floriculture_fundingsource { get; set; }
        public string pipeline_rabi_floriculture_waterdemand { get; set; }
        public string pipeline_rabi_floriculture_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_floriculture_reduction_water_demand { get; set; }


        public string pipeline_rabi_potato_crop_area { get; set; }
        public string pipeline_rabi_potato_irri_area { get; set; }
        public string pipeline_rabi_potato_water_req { get; set; }
        public string pipeline_rabi_potato_fundingsource { get; set; }
        public string pipeline_rabi_potato_waterdemand { get; set; }
        public string pipeline_rabi_potato_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_potato_reduction_water_demand { get; set; }


        public string pipeline_rabi_cucumber_crop_area { get; set; }
        public string pipeline_rabi_cucumber_irri_area { get; set; }
        public string pipeline_rabi_cucumber_water_req { get; set; }
        public string pipeline_rabi_cucumber_fundingsource { get; set; }
        public string pipeline_rabi_cucumber_waterdemand { get; set; }
        public string pipeline_rabi_cucumber_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_cucumber_reduction_water_demand { get; set; }


        public string pipeline_rabi_ragi_crop_area { get; set; }
        public string pipeline_rabi_ragi_irri_area { get; set; }
        public string pipeline_rabi_ragi_water_req { get; set; }
        public string pipeline_rabi_ragi_fundingsource { get; set; }
        public string pipeline_rabi_ragi_waterdemand { get; set; }
        public string pipeline_rabi_ragi_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_ragi_reduction_water_demand { get; set; }

        public string pipeline_rabi_sugarcane_crop_area { get; set; }
        public string pipeline_rabi_sugarcane_irri_area { get; set; }
        public string pipeline_rabi_sugarcane_water_req { get; set; }
        public string pipeline_rabi_sugarcane_fundingsource { get; set; }
        public string pipeline_rabi_sugarcane_waterdemand { get; set; }
        public string pipeline_rabi_sugarcane_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_sugarcane_reduction_water_demand { get; set; }

        public string pipeline_rabi_maize_crop_area { get; set; }
        public string pipeline_rabi_maize_irri_area { get; set; }
        public string pipeline_rabi_maize_water_req { get; set; }
        public string pipeline_rabi_maize_fundingsource { get; set; }
        public string pipeline_rabi_maize_waterdemand { get; set; }
        public string pipeline_rabi_maize_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_maize_reduction_water_demand { get; set; }

        public string pipeline_rabi_fodder_crop_area { get; set; }
        public string pipeline_rabi_fodder_irri_area { get; set; }
        public string pipeline_rabi_fodder_water_req { get; set; }
        public string pipeline_rabi_fodder_fundingsource { get; set; }
        public string pipeline_rabi_fodder_waterdemand { get; set; }
        public string pipeline_rabi_fodder_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_fodder_reduction_water_demand { get; set; }

        public string pipeline_rabi_paddy_crop_area { get; set; }
        public string pipeline_rabi_paddy_irri_area { get; set; }
        public string pipeline_rabi_paddy_water_req { get; set; }
        public string pipeline_rabi_paddy_fundingsource { get; set; }
        public string pipeline_rabi_paddy_waterdemand { get; set; }
        public string pipeline_rabi_paddy_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_paddy_reduction_water_demand { get; set; }

        public string pipeline_rabi_alfalfa_crop_area { get; set; }
        public string pipeline_rabi_alfalfa_irri_area { get; set; }
        public string pipeline_rabi_alfalfa_water_req { get; set; }
        public string pipeline_rabi_alfalfa_fundingsource { get; set; }
        public string pipeline_rabi_alfalfa_waterdemand { get; set; }
        public string pipeline_rabi_alfalfa_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_alfalfa_reduction_water_demand { get; set; }

        public string pipeline_rabi_onion_crop_area { get; set; }
        public string pipeline_rabi_onion_irri_area { get; set; }
        public string pipeline_rabi_onion_water_req { get; set; }
        public string pipeline_rabi_onion_fundingsource { get; set; }
        public string pipeline_rabi_onion_waterdemand { get; set; }
        public string pipeline_rabi_onion_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_onion_reduction_water_demand { get; set; }



        public string pipeline_rabi_horticulture_crop_area { get; set; }
        public string pipeline_rabi_horticulture_irri_area { get; set; }
        public string pipeline_rabi_horticulture_water_req { get; set; }
        public string pipeline_rabi_horticulture_fundingsource { get; set; }
        public string pipeline_rabi_horticulture_waterdemand { get; set; }
        public string pipeline_rabi_horticulture_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_horticulture_reduction_water_demand { get; set; }


        public string pipeline_rabi_sunflower_crop_area { get; set; }
        public string pipeline_rabi_sunflower_irri_area { get; set; }
        public string pipeline_rabi_sunflower_water_req { get; set; }
        public string pipeline_rabi_sunflower_fundingsource { get; set; }
        public string pipeline_rabi_sunflower_waterdemand { get; set; }
        public string pipeline_rabi_sunflower_pipeline_waterdemand { get; set; }
        public string pipeline_rabi_sunflower_reduction_water_demand { get; set; }

        public string pipeline_rabi_total_waterdemand { get; set; }
        public string pipeline_rabi_total_rabi_waterdemand { get; set; }
        public string pipeline_rabi_total_reduction_waterdemand { get; set; }


        public string pipeline_summer_sericulture_crop_area { get; set; }
        public string pipeline_summer_sericulture_irri_area { get; set; }
        public string pipeline_summer_sericulture_water_req { get; set; }
        public string pipeline_summer_sericulture_fundingsource { get; set; }
        public string pipeline_summer_sericulture_waterdemand { get; set; }
        public string pipeline_summer_sericulture_pipeline_waterdemand { get; set; }
        public string pipeline_summer_sericulture_reduction_water_demand { get; set; }

        public string pipeline_summer_tomoto_crop_area { get; set; }
        public string pipeline_summer_tomoto_irri_area { get; set; }
        public string pipeline_summer_tomoto_water_req { get; set; }
        public string pipeline_summer_tomoto_fundingsource { get; set; }
        public string pipeline_summer_tomoto_waterdemand { get; set; }
        public string pipeline_summer_tomoto_pipeline_waterdemand { get; set; }
        public string pipeline_summer_tomoto_reduction_water_demand { get; set; }

        public string pipeline_summer_cabbage_crop_area { get; set; }
        public string pipeline_summer_cabbage_irri_area { get; set; }
        public string pipeline_summer_cabbage_water_req { get; set; }
        public string pipeline_summer_cabbage_fundingsource { get; set; }
        public string pipeline_summer_cabbage_waterdemand { get; set; }
        public string pipeline_summer_cabbage_pipeline_waterdemand { get; set; }
        public string pipeline_summer_cabbage_reduction_water_demand { get; set; }

        public string pipeline_summer_beans_crop_area { get; set; }
        public string pipeline_summer_beans_irri_area { get; set; }
        public string pipeline_summer_beans_water_req { get; set; }
        public string pipeline_summer_beans_fundingsource { get; set; }
        public string pipeline_summer_beans_waterdemand { get; set; }
        public string pipeline_summer_beans_pipeline_waterdemand { get; set; }
        public string pipeline_summer_beans_reduction_water_demand { get; set; }

        public string pipeline_summer_floriculture_crop_area { get; set; }
        public string pipeline_summer_floriculture_irri_area { get; set; }
        public string pipeline_summer_floriculture_water_req { get; set; }
        public string pipeline_summer_floriculture_fundingsource { get; set; }
        public string pipeline_summer_floriculture_waterdemand { get; set; }
        public string pipeline_summer_floriculture_pipeline_waterdemand { get; set; }
        public string pipeline_summer_floriculture_reduction_water_demand { get; set; }


        public string pipeline_summer_maize_crop_area { get; set; }
        public string pipeline_summer_maize_irri_area { get; set; }
        public string pipeline_summer_maize_water_req { get; set; }
        public string pipeline_summer_maize_fundingsource { get; set; }
        public string pipeline_summer_maize_waterdemand { get; set; }
        public string pipeline_summer_maize_pipeline_waterdemand { get; set; }
        public string pipeline_summer_maize_reduction_water_demand { get; set; }


        public string pipeline_summer_fodder_crop_area { get; set; }
        public string pipeline_summer_fodder_irri_area { get; set; }
        public string pipeline_summer_fodder_water_req { get; set; }
        public string pipeline_summer_fodder_fundingsource { get; set; }
        public string pipeline_summer_fodder_waterdemand { get; set; }
        public string pipeline_summer_fodder_pipeline_waterdemand { get; set; }
        public string pipeline_summer_fodder_reduction_water_demand { get; set; }


        public string pipeline_summer_sugarcane_crop_area { get; set; }
        public string pipeline_summer_sugarcane_irri_area { get; set; }
        public string pipeline_summer_sugarcane_water_req { get; set; }
        public string pipeline_summer_sugarcane_fundingsource { get; set; }
        public string pipeline_summer_sugarcane_waterdemand { get; set; }
        public string pipeline_summer_sugarcane_pipeline_waterdemand { get; set; }
        public string pipeline_summer_sugarcane_reduction_water_demand { get; set; }


        public string pipeline_summer_total_waterdemand { get; set; }
        public string pipeline_summer_total_summer_waterdemand { get; set; }
        public string pipeline_summer_total_reduction_waterdemand { get; set; }
        public string pipeline_annual_reduction_waterdemand { get; set; }

        //estmated cost
        public string pipeline_approx_estimated_cost { get; set; }
        public string pipeline_cost_type { get; set; }

        public string pipeline_other_funding_source { get; set; }

        //horticulture
        public string pipeline_summer_horticulture_crop_area { get; set; }
        public string pipeline_summer_horticulture_irri_area { get; set; }
        public string pipeline_summer_horticulture_water_req { get; set; }
        public string pipeline_summer_horticulture_waterdemand { get; set; }
        public string pipeline_summer_horticulture_netwater_waterdemand { get; set; }
        public string pipeline_summer_horticulture_reduction_gw_demand { get; set; }

        //other crops kharif/rabi/summer each 5 boxes

        public string pipeline_kharif_othercrop_name1 { get; set; }
        public string pipeline_kharif_othercrop_area1 { get; set; }
        public string pipeline_kharif_othercrop_irri_area1 { get; set; }
        public string pipeline_kharif_othercrop_water_req1 { get; set; }
        public string pipeline_kharif_othercrop_waterdemand1 { get; set; }
        public string pipeline_kharif_othercrop_pipeline_waterdemand1 { get; set; }
        public string pipeline_kharif_othercrop_reduc_gw_demand1 { get; set; }

        public string pipeline_kharif_othercrop_name2 { get; set; }
        public string pipeline_kharif_othercrop_area2 { get; set; }
        public string pipeline_kharif_othercrop_irri_area2 { get; set; }
        public string pipeline_kharif_othercrop_water_req2 { get; set; }
        public string pipeline_kharif_othercrop_waterdemand2 { get; set; }
        public string pipeline_kharif_othercrop_pipeline_waterdemand2 { get; set; }
        public string pipeline_kharif_othercrop_reduc_gw_demand2 { get; set; }

        public string pipeline_kharif_othercrop_name3 { get; set; }
        public string pipeline_kharif_othercrop_area3 { get; set; }
        public string pipeline_kharif_othercrop_irri_area3 { get; set; }
        public string pipeline_kharif_othercrop_water_req3 { get; set; }
        public string pipeline_kharif_othercrop_waterdemand3 { get; set; }
        public string pipeline_kharif_othercrop_pipeline_waterdemand3 { get; set; }
        public string pipeline_kharif_othercrop_reduc_gw_demand3 { get; set; }

        public string pipeline_kharif_othercrop_name4 { get; set; }
        public string pipeline_kharif_othercrop_area4 { get; set; }
        public string pipeline_kharif_othercrop_irri_area4 { get; set; }
        public string pipeline_kharif_othercrop_water_req4 { get; set; }
        public string pipeline_kharif_othercrop_waterdemand4 { get; set; }
        public string pipeline_kharif_othercrop_pipeline_waterdemand4 { get; set; }
        public string pipeline_kharif_othercrop_reduc_gw_demand4 { get; set; }

        public string pipeline_kharif_othercrop_name5 { get; set; }
        public string pipeline_kharif_othercrop_area5 { get; set; }
        public string pipeline_kharif_othercrop_irri_area5 { get; set; }
        public string pipeline_kharif_othercrop_water_req5 { get; set; }
        public string pipeline_kharif_othercrop_waterdemand5 { get; set; }
        public string pipeline_kharif_othercrop_pipeline_waterdemand5 { get; set; }
        public string pipeline_kharif_othercrop_reduc_gw_demand5 { get; set; }

        // 10 new othercrops kharif
        //public string pipeline_kharif_othercrop_name6 { get; set; }
        //public string pipeline_kharif_othercrop_area6 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area6 { get; set; }
        //public string pipeline_kharif_othercrop_water_req6 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand6 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand6 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand6 { get; set; }

        //public string pipeline_kharif_othercrop_name7 { get; set; }
        //public string pipeline_kharif_othercrop_area7 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area7 { get; set; }
        //public string pipeline_kharif_othercrop_water_req7 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand7 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand7 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand7 { get; set; }

        //public string pipeline_kharif_othercrop_name8 { get; set; }
        //public string pipeline_kharif_othercrop_area8 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area8 { get; set; }
        //public string pipeline_kharif_othercrop_water_req8 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand8 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand8 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand8 { get; set; }

        //public string pipeline_kharif_othercrop_name9 { get; set; }
        //public string pipeline_kharif_othercrop_area9 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area9 { get; set; }
        //public string pipeline_kharif_othercrop_water_req9 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand9 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand9 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand9 { get; set; }

        //public string pipeline_kharif_othercrop_name10 { get; set; }
        //public string pipeline_kharif_othercrop_area10 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area10 { get; set; }
        //public string pipeline_kharif_othercrop_water_req10 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand10 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand10 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand10 { get; set; }

        //public string pipeline_kharif_othercrop_name11 { get; set; }
        //public string pipeline_kharif_othercrop_area11 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area11 { get; set; }
        //public string pipeline_kharif_othercrop_water_req11 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand11 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand11 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand11 { get; set; }

        //public string pipeline_kharif_othercrop_name12 { get; set; }
        //public string pipeline_kharif_othercrop_area12 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area12 { get; set; }
        //public string pipeline_kharif_othercrop_water_req12 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand12 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand12 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand12 { get; set; }

        //public string pipeline_kharif_othercrop_name13 { get; set; }
        //public string pipeline_kharif_othercrop_area13 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area13 { get; set; }
        //public string pipeline_kharif_othercrop_water_req13 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand13 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand13 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand13 { get; set; }

        //public string pipeline_kharif_othercrop_name14 { get; set; }
        //public string pipeline_kharif_othercrop_area14 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area14 { get; set; }
        //public string pipeline_kharif_othercrop_water_req14 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand14 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand14 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand14 { get; set; }

        //public string pipeline_kharif_othercrop_name15 { get; set; }
        //public string pipeline_kharif_othercrop_area15 { get; set; }
        //public string pipeline_kharif_othercrop_irri_area15 { get; set; }
        //public string pipeline_kharif_othercrop_water_req15 { get; set; }
        //public string pipeline_kharif_othercrop_waterdemand15 { get; set; }
        //public string pipeline_kharif_othercrop_pipeline_waterdemand15 { get; set; }
        //public string pipeline_kharif_othercrop_reduc_gw_demand15 { get; set; }
        //rabi
        public string pipeline_rabi_othercrop_name1 { get; set; }
        public string pipeline_rabi_othercrop_area1 { get; set; }
        public string pipeline_rabi_othercrop_irri_area1 { get; set; }
        public string pipeline_rabi_othercrop_water_req1 { get; set; }
        public string pipeline_rabi_othercrop_waterdemand1 { get; set; }
        public string pipeline_rabi_othercrop_pipeline_waterdemand1 { get; set; }
        public string pipeline_rabi_othercrop_reduc_gw_demand1 { get; set; }

        public string pipeline_rabi_othercrop_name2 { get; set; }
        public string pipeline_rabi_othercrop_area2 { get; set; }
        public string pipeline_rabi_othercrop_irri_area2 { get; set; }
        public string pipeline_rabi_othercrop_water_req2 { get; set; }
        public string pipeline_rabi_othercrop_waterdemand2 { get; set; }
        public string pipeline_rabi_othercrop_pipeline_waterdemand2 { get; set; }
        public string pipeline_rabi_othercrop_reduc_gw_demand2 { get; set; }

        public string pipeline_rabi_othercrop_name3 { get; set; }
        public string pipeline_rabi_othercrop_area3 { get; set; }
        public string pipeline_rabi_othercrop_irri_area3 { get; set; }
        public string pipeline_rabi_othercrop_water_req3 { get; set; }
        public string pipeline_rabi_othercrop_waterdemand3 { get; set; }
        public string pipeline_rabi_othercrop_pipeline_waterdemand3 { get; set; }
        public string pipeline_rabi_othercrop_reduc_gw_demand3 { get; set; }

        public string pipeline_rabi_othercrop_name4 { get; set; }
        public string pipeline_rabi_othercrop_area4 { get; set; }
        public string pipeline_rabi_othercrop_irri_area4 { get; set; }
        public string pipeline_rabi_othercrop_water_req4 { get; set; }
        public string pipeline_rabi_othercrop_waterdemand4 { get; set; }
        public string pipeline_rabi_othercrop_pipeline_waterdemand4 { get; set; }
        public string pipeline_rabi_othercrop_reduc_gw_demand4 { get; set; }

        public string pipeline_rabi_othercrop_name5 { get; set; }
        public string pipeline_rabi_othercrop_area5 { get; set; }
        public string pipeline_rabi_othercrop_irri_area5 { get; set; }
        public string pipeline_rabi_othercrop_water_req5 { get; set; }
        public string pipeline_rabi_othercrop_waterdemand5 { get; set; }
        public string pipeline_rabi_othercrop_pipeline_waterdemand5 { get; set; }
        public string pipeline_rabi_othercrop_reduc_gw_demand5 { get; set; }

        //new 10 othercrops rabi pipeline
        //public string pipeline_rabi_othercrop_name6 { get; set; }
        //public string pipeline_rabi_othercrop_area6 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area6 { get; set; }
        //public string pipeline_rabi_othercrop_water_req6 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand6 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand6 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand6 { get; set; }

        //public string pipeline_rabi_othercrop_name7 { get; set; }
        //public string pipeline_rabi_othercrop_area7 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area7 { get; set; }
        //public string pipeline_rabi_othercrop_water_req7 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand7 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand7 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand7 { get; set; }

        //public string pipeline_rabi_othercrop_name8 { get; set; }
        //public string pipeline_rabi_othercrop_area8 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area8 { get; set; }
        //public string pipeline_rabi_othercrop_water_req8 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand8 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand8 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand8 { get; set; }

        //public string pipeline_rabi_othercrop_name9 { get; set; }
        //public string pipeline_rabi_othercrop_area9 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area9 { get; set; }
        //public string pipeline_rabi_othercrop_water_req9 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand9 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand9 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand9 { get; set; }

        //public string pipeline_rabi_othercrop_name10 { get; set; }
        //public string pipeline_rabi_othercrop_area10 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area10 { get; set; }
        //public string pipeline_rabi_othercrop_water_req10 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand10 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand10 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand10 { get; set; }

        //public string pipeline_rabi_othercrop_name11 { get; set; }
        //public string pipeline_rabi_othercrop_area11 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area11 { get; set; }
        //public string pipeline_rabi_othercrop_water_req11 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand11 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand11 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand11 { get; set; }

        //public string pipeline_rabi_othercrop_name12 { get; set; }
        //public string pipeline_rabi_othercrop_area12 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area12 { get; set; }
        //public string pipeline_rabi_othercrop_water_req12 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand12 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand12 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand12 { get; set; }

        //public string pipeline_rabi_othercrop_name13 { get; set; }
        //public string pipeline_rabi_othercrop_area13 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area13 { get; set; }
        //public string pipeline_rabi_othercrop_water_req13 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand13 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand13 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand13 { get; set; }

        //public string pipeline_rabi_othercrop_name14 { get; set; }
        //public string pipeline_rabi_othercrop_area14 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area14 { get; set; }
        //public string pipeline_rabi_othercrop_water_req14 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand14 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand14 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand14 { get; set; }

        //public string pipeline_rabi_othercrop_name15 { get; set; }
        //public string pipeline_rabi_othercrop_area15 { get; set; }
        //public string pipeline_rabi_othercrop_irri_area15 { get; set; }
        //public string pipeline_rabi_othercrop_water_req15 { get; set; }
        //public string pipeline_rabi_othercrop_waterdemand15 { get; set; }
        //public string pipeline_rabi_othercrop_pipeline_waterdemand15 { get; set; }
        //public string pipeline_rabi_othercrop_reduc_gw_demand15 { get; set; }

        //summer
        public string pipeline_summer_othercrop_name1 { get; set; }
        public string pipeline_summer_othercrop_area1 { get; set; }
        public string pipeline_summer_othercrop_irri_area1 { get; set; }
        public string pipeline_summer_othercrop_water_req1 { get; set; }
        public string pipeline_summer_othercrop_waterdemand1 { get; set; }
        public string pipeline_summer_othercrop_pipeline_waterdemand1 { get; set; }
        public string pipeline_summer_othercrop_reduc_gw_demand1 { get; set; }

        public string pipeline_summer_othercrop_name2 { get; set; }
        public string pipeline_summer_othercrop_area2 { get; set; }
        public string pipeline_summer_othercrop_irri_area2 { get; set; }
        public string pipeline_summer_othercrop_water_req2 { get; set; }
        public string pipeline_summer_othercrop_waterdemand2 { get; set; }
        public string pipeline_summer_othercrop_pipeline_waterdemand2 { get; set; }
        public string pipeline_summer_othercrop_reduc_gw_demand2 { get; set; }

        public string pipeline_summer_othercrop_name3 { get; set; }
        public string pipeline_summer_othercrop_area3 { get; set; }
        public string pipeline_summer_othercrop_irri_area3 { get; set; }
        public string pipeline_summer_othercrop_water_req3 { get; set; }
        public string pipeline_summer_othercrop_waterdemand3 { get; set; }
        public string pipeline_summer_othercrop_pipeline_waterdemand3 { get; set; }
        public string pipeline_summer_othercrop_reduc_gw_demand3 { get; set; }

        public string pipeline_summer_othercrop_name4 { get; set; }
        public string pipeline_summer_othercrop_area4 { get; set; }
        public string pipeline_summer_othercrop_irri_area4 { get; set; }
        public string pipeline_summer_othercrop_water_req4 { get; set; }
        public string pipeline_summer_othercrop_waterdemand4 { get; set; }
        public string pipeline_summer_othercrop_pipeline_waterdemand4 { get; set; }
        public string pipeline_summer_othercrop_reduc_gw_demand4 { get; set; }

        public string pipeline_summer_othercrop_name5 { get; set; }
        public string pipeline_summer_othercrop_area5 { get; set; }
        public string pipeline_summer_othercrop_irri_area5 { get; set; }
        public string pipeline_summer_othercrop_water_req5 { get; set; }
        public string pipeline_summer_othercrop_waterdemand5 { get; set; }
        public string pipeline_summer_othercrop_pipeline_waterdemand5 { get; set; }
        public string pipeline_summer_othercrop_reduc_gw_demand5 { get; set; }

        //new 10 othercrops summer pipeline

        //public string pipeline_summer_othercrop_name6 { get; set; }
        //public string pipeline_summer_othercrop_area6 { get; set; }
        //public string pipeline_summer_othercrop_irri_area6 { get; set; }
        //public string pipeline_summer_othercrop_water_req6 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand6 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand6 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand6 { get; set; }

        //public string pipeline_summer_othercrop_name7 { get; set; }
        //public string pipeline_summer_othercrop_area7 { get; set; }
        //public string pipeline_summer_othercrop_irri_area7 { get; set; }
        //public string pipeline_summer_othercrop_water_req7 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand7 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand7 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand7 { get; set; }

        //public string pipeline_summer_othercrop_name8 { get; set; }
        //public string pipeline_summer_othercrop_area8 { get; set; }
        //public string pipeline_summer_othercrop_irri_area8 { get; set; }
        //public string pipeline_summer_othercrop_water_req8 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand8 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand8 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand8 { get; set; }

        //public string pipeline_summer_othercrop_name9 { get; set; }
        //public string pipeline_summer_othercrop_area9 { get; set; }
        //public string pipeline_summer_othercrop_irri_area9 { get; set; }
        //public string pipeline_summer_othercrop_water_req9 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand9 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand9 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand9 { get; set; }

        //public string pipeline_summer_othercrop_name10 { get; set; }
        //public string pipeline_summer_othercrop_area10 { get; set; }
        //public string pipeline_summer_othercrop_irri_area10 { get; set; }
        //public string pipeline_summer_othercrop_water_req10 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand10 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand10 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand10 { get; set; }

        //public string pipeline_summer_othercrop_name11 { get; set; }
        //public string pipeline_summer_othercrop_area11 { get; set; }
        //public string pipeline_summer_othercrop_irri_area11 { get; set; }
        //public string pipeline_summer_othercrop_water_req11 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand11 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand11 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand11 { get; set; }

        //public string pipeline_summer_othercrop_name12 { get; set; }
        //public string pipeline_summer_othercrop_area12 { get; set; }
        //public string pipeline_summer_othercrop_irri_area12 { get; set; }
        //public string pipeline_summer_othercrop_water_req12 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand12 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand12 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand12 { get; set; }

        //public string pipeline_summer_othercrop_name13 { get; set; }
        //public string pipeline_summer_othercrop_area13 { get; set; }
        //public string pipeline_summer_othercrop_irri_area13 { get; set; }
        //public string pipeline_summer_othercrop_water_req13 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand13 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand13 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand13 { get; set; }

        //public string pipeline_summer_othercrop_name14 { get; set; }
        //public string pipeline_summer_othercrop_area14 { get; set; }
        //public string pipeline_summer_othercrop_irri_area14 { get; set; }
        //public string pipeline_summer_othercrop_water_req14 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand14 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand14 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand14 { get; set; }

        //public string pipeline_summer_othercrop_name15 { get; set; }
        //public string pipeline_summer_othercrop_area15 { get; set; }
        //public string pipeline_summer_othercrop_irri_area15 { get; set; }
        //public string pipeline_summer_othercrop_water_req15 { get; set; }
        //public string pipeline_summer_othercrop_waterdemand15 { get; set; }
        //public string pipeline_summer_othercrop_pipeline_waterdemand15 { get; set; }
        //public string pipeline_summer_othercrop_reduc_gw_demand15 { get; set; }

    }

    [Table("abhy_demandside_reduction_saveddata", Schema = "public")]
    public class abhy_demandside_reduction_saveddata
    {

        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }

        public string officer_name { get; set; }
        public string reduction_kharif_paddy_crop_area { get; set; }
        public string reduction_kharif_paddy_quatum_value { get; set; }
        public string reduction_kharif_paddy_water_req { get; set; }
        public string reduction_kharif_paddy_fundingsource { get; set; }
        public string reduction_kharif_paddy_waterdemand { get; set; }
        public string reduction_kharif_paddy_gw_demand { get; set; }

        public string reduction_kharif_ragi_crop_area { get; set; }
        public string reduction_kharif_ragi_quatum_value { get; set; }
        public string reduction_kharif_ragi_water_req { get; set; }
        public string reduction_kharif_ragi_fundingsource { get; set; }
        public string reduction_kharif_ragi_waterdemand { get; set; }
        public string reduction_kharif_ragi_gw_demand { get; set; }


        public string reduction_kharif_groundnut_crop_area { get; set; }
        public string reduction_kharif_groundnut_quatum_value { get; set; }
        public string reduction_kharif_groundnut_water_req { get; set; }
        public string reduction_kharif_groundnut_fundingsource { get; set; }
        public string reduction_kharif_groundnut_waterdemand { get; set; }
        public string reduction_kharif_groundnut_gw_demand { get; set; }


        public string reduction_kharif_sugarcane_crop_area { get; set; }
        public string reduction_kharif_sugarcane_quatum_value { get; set; }
        public string reduction_kharif_sugarcane_water_req { get; set; }
        public string reduction_kharif_sugarcane_fundingsource { get; set; }
        public string reduction_kharif_sugarcane_waterdemand { get; set; }
        public string reduction_kharif_sugarcane_gw_demand { get; set; }


        public string reduction_kharif_tomoto_crop_area { get; set; }
        public string reduction_kharif_tomoto_quatum_value { get; set; }
        public string reduction_kharif_tomoto_water_req { get; set; }
        public string reduction_kharif_tomoto_fundingsource { get; set; }
        public string reduction_kharif_tomoto_waterdemand { get; set; }
        public string reduction_kharif_tomoto_gw_demand { get; set; }


        public string reduction_kharif_cabbage_crop_area { get; set; }
        public string reduction_kharif_cabbage_quatum_value { get; set; }
        public string reduction_kharif_cabbage_water_req { get; set; }
        public string reduction_kharif_cabbage_fundingsource { get; set; }
        public string reduction_kharif_cabbage_waterdemand { get; set; }
        public string reduction_kharif_cabbage_gw_demand { get; set; }

        public string reduction_kharif_beans_crop_area { get; set; }
        public string reduction_kharif_beans_quatum_value { get; set; }
        public string reduction_kharif_beans_water_req { get; set; }
        public string reduction_kharif_beans_fundingsource { get; set; }
        public string reduction_kharif_beans_waterdemand { get; set; }
        public string reduction_kharif_beans_gw_demand { get; set; }

        public string reduction_kharif_floriculture_crop_area { get; set; }
        public string reduction_kharif_floriculture_quatum_value { get; set; }
        public string reduction_kharif_floriculture_water_req { get; set; }
        public string reduction_kharif_floriculture_fundingsource { get; set; }
        public string reduction_kharif_floriculture_waterdemand { get; set; }
        public string reduction_kharif_floriculture_gw_demand { get; set; }


        public string reduction_kharif_sericulture_crop_area { get; set; }
        public string reduction_kharif_sericulture_quatum_value { get; set; }
        public string reduction_kharif_sericulture_water_req { get; set; }
        public string reduction_kharif_sericulture_fundingsource { get; set; }
        public string reduction_kharif_sericulture_waterdemand { get; set; }
        public string reduction_kharif_sericulture_gw_demand { get; set; }

        public string reduction_kharif_cucumber_crop_area { get; set; }
        public string reduction_kharif_cucumber_quatum_value { get; set; }
        public string reduction_kharif_cucumber_water_req { get; set; }
        public string reduction_kharif_cucumber_fundingsource { get; set; }
        public string reduction_kharif_cucumber_waterdemand { get; set; }
        public string reduction_kharif_cucumber_gw_demand { get; set; }

        public string reduction_kharif_banana_crop_area { get; set; }
        public string reduction_kharif_banana_quatum_value { get; set; }
        public string reduction_kharif_banana_water_req { get; set; }
        public string reduction_kharif_banana_fundingsource { get; set; }
        public string reduction_kharif_banana_waterdemand { get; set; }
        public string reduction_kharif_banana_gw_demand { get; set; }


        public string reduction_kharif_fodder_crop_area { get; set; }
        public string reduction_kharif_fodder_quatum_value { get; set; }
        public string reduction_kharif_fodder_water_req { get; set; }
        public string reduction_kharif_fodder_fundingsource { get; set; }
        public string reduction_kharif_fodder_waterdemand { get; set; }
        public string reduction_kharif_fodder_gw_demand { get; set; }

        public string reduction_kharif_maize_crop_area { get; set; }
        public string reduction_kharif_maize_quatum_value { get; set; }
        public string reduction_kharif_maize_water_req { get; set; }
        public string reduction_kharif_maize_fundingsource { get; set; }
        public string reduction_kharif_maize_waterdemand { get; set; }
        public string reduction_kharif_maize_gw_demand { get; set; }


        public string reduction_kharif_potato_crop_area { get; set; }
        public string reduction_kharif_potato_quatum_value { get; set; }
        public string reduction_kharif_potato_water_req { get; set; }
        public string reduction_kharif_potato_fundingsource { get; set; }
        public string reduction_kharif_potato_waterdemand { get; set; }
        public string reduction_kharif_potato_gw_demand { get; set; }


        public string reduction_kharif_chillies_crop_area { get; set; }
        public string reduction_kharif_chillies_quatum_value { get; set; }
        public string reduction_kharif_chillies_water_req { get; set; }
        public string reduction_kharif_chillies_fundingsource { get; set; }
        public string reduction_kharif_chillies_waterdemand { get; set; }
        public string reduction_kharif_chillies_gw_demand { get; set; }

        public string reduction_kharif_cotton_crop_area { get; set; }
        public string reduction_kharif_cotton_quatum_value { get; set; }
        public string reduction_kharif_cotton_water_req { get; set; }
        public string reduction_kharif_cotton_fundingsource { get; set; }
        public string reduction_kharif_cotton_waterdemand { get; set; }
        public string reduction_kharif_cotton_gw_demand { get; set; }

        public string reduction_kharif_melon_crop_area { get; set; }
        public string reduction_kharif_melon_quatum_value { get; set; }
        public string reduction_kharif_melon_water_req { get; set; }
        public string reduction_kharif_melon_fundingsource { get; set; }
        public string reduction_kharif_melon_waterdemand { get; set; }
        public string reduction_kharif_melon_gw_demand { get; set; }


        public string reduction_kharif_citrus_crop_area { get; set; }
        public string reduction_kharif_citrus_quatum_value { get; set; }
        public string reduction_kharif_citrus_water_req { get; set; }
        public string reduction_kharif_citrus_fundingsource { get; set; }
        public string reduction_kharif_citrus_waterdemand { get; set; }
        public string reduction_kharif_citrus_gw_demand { get; set; }


        public string reduction_kharif_peanut_crop_area { get; set; }
        public string reduction_kharif_peanut_quatum_value { get; set; }
        public string reduction_kharif_peanut_water_req { get; set; }
        public string reduction_kharif_peanut_fundingsource { get; set; }
        public string reduction_kharif_peanut_waterdemand { get; set; }
        public string reduction_kharif_peanut_gw_demand { get; set; }


        public string reduction_kharif_horticulture_crop_area { get; set; }
        public string reduction_kharif_horticulture_quatum_value { get; set; }
        public string reduction_kharif_horticulture_water_req { get; set; }
        public string reduction_kharif_horticulture_fundingsource { get; set; }
        public string reduction_kharif_horticulture_waterdemand { get; set; }
        public string reduction_kharif_horticulture_gw_demand { get; set; }

        public string reduction_kharif_total_kharifcrop_waterdemand { get; set; }
        public string reduction_kharif_total_reduc_gw_demand { get; set; }

        public string reduction_rabi_sericulture_crop_area { get; set; }
        public string reduction_rabi_sericulture_quatum_value { get; set; }
        public string reduction_rabi_sericulture_water_req { get; set; }
        public string reduction_rabi_sericulture_fundingsource { get; set; }
        public string reduction_rabi_sericulture_waterdemand { get; set; }
        public string reduction_rabi_sericulture_gw_demand { get; set; }



        public string reduction_rabi_tomoto_crop_area { get; set; }
        public string reduction_rabi_tomoto_quatum_value { get; set; }
        public string reduction_rabi_tomoto_water_req { get; set; }
        public string reduction_rabi_tomoto_fundingsource { get; set; }
        public string reduction_rabi_tomoto_waterdemand { get; set; }
        public string reduction_rabi_tomoto_gw_demand { get; set; }


        public string reduction_rabi_cabbage_crop_area { get; set; }
        public string reduction_rabi_cabbage_quatum_value { get; set; }
        public string reduction_rabi_cabbage_water_req { get; set; }
        public string reduction_rabi_cabbage_fundingsource { get; set; }
        public string reduction_rabi_cabbage_waterdemand { get; set; }
        public string reduction_rabi_cabbage_gw_demand { get; set; }


        public string reduction_rabi_beans_crop_area { get; set; }
        public string reduction_rabi_beans_quatum_value { get; set; }
        public string reduction_rabi_beans_water_req { get; set; }
        public string reduction_rabi_beans_fundingsource { get; set; }
        public string reduction_rabi_beans_waterdemand { get; set; }
        public string reduction_rabi_beans_gw_demand { get; set; }

        public string reduction_rabi_floriculture_crop_area { get; set; }
        public string reduction_rabi_floriculture_quatum_value { get; set; }
        public string reduction_rabi_floriculture_water_req { get; set; }
        public string reduction_rabi_floriculture_fundingsource { get; set; }
        public string reduction_rabi_floriculture_waterdemand { get; set; }
        public string reduction_rabi_floriculture_gw_demand { get; set; }


        public string reduction_rabi_potato_crop_area { get; set; }
        public string reduction_rabi_potato_quatum_value { get; set; }
        public string reduction_rabi_potato_water_req { get; set; }
        public string reduction_rabi_potato_fundingsource { get; set; }
        public string reduction_rabi_potato_waterdemand { get; set; }
        public string reduction_rabi_potato_gw_demand { get; set; }

        public string reduction_rabi_cucumber_crop_area { get; set; }
        public string reduction_rabi_cucumber_quatum_value { get; set; }
        public string reduction_rabi_cucumber_water_req { get; set; }
        public string reduction_rabi_cucumber_fundingsource { get; set; }
        public string reduction_rabi_cucuber_waterdemand { get; set; }
        public string reduction_rabi_cucuber_gw_demand { get; set; }


        public string reduction_rabi_ragi_crop_area { get; set; }
        public string reduction_rabi_ragi_quatum_value { get; set; }
        public string reduction_rabi_ragi_water_req { get; set; }
        public string reduction_rabi_ragi_fundingsource { get; set; }
        public string reduction_rabi_ragi_waterdemand { get; set; }
        public string reduction_rabi_ragi_gw_demand { get; set; }


        public string reduction_rabi_sugarcane_crop_area { get; set; }
        public string reduction_rabi_sugarcane_quatum_value { get; set; }
        public string reduction_rabi_sugarcane_water_req { get; set; }
        public string reduction_rabi_sugarcane_fundingsource { get; set; }
        public string reduction_rabi_sugarcane_waterdemand { get; set; }
        public string reduction_rabi_sugarcane_gw_demand { get; set; }

        public string reduction_rabi_maize_crop_area { get; set; }
        public string reduction_rabi_maize_quatum_value { get; set; }
        public string reduction_rabi_maize_water_req { get; set; }
        public string reduction_rabi_maize_fundingsource { get; set; }
        public string reduction_rabi_maize_waterdemand { get; set; }
        public string reduction_rabi_maize_gw_demand { get; set; }


        public string reduction_rabi_fodder_crop_area { get; set; }
        public string reduction_rabi_fodder_quatum_value { get; set; }
        public string reduction_rabi_fodder_water_req { get; set; }
        public string reduction_rabi_fodder_fundingsource { get; set; }
        public string reduction_rabi_fodder_waterdemand { get; set; }
        public string reduction_rabi_fodder_gw_demand { get; set; }


        public string reduction_rabi_paddy_crop_area { get; set; }
        public string reduction_rabi_paddy_quatum_value { get; set; }
        public string reduction_rabi_paddy_water_req { get; set; }
        public string reduction_rabi_paddy_fundingsource { get; set; }
        public string reduction_rabi_paddy_waterdemand { get; set; }
        public string reduction_rabi_paddy_gw_demand { get; set; }


        public string reduction_rabi_alfalfa_crop_area { get; set; }
        public string reduction_rabi_alfalfa_quatum_value { get; set; }
        public string reduction_rabi_alfalfa_water_req { get; set; }
        public string reduction_rabi_alfalfa_fundingsource { get; set; }
        public string reduction_rabi_alfalfa_waterdemand { get; set; }
        public string reduction_rabi_alfalfa_gw_demand { get; set; }


        public string reduction_rabi_onion_crop_area { get; set; }
        public string reduction_rabi_onion_quatum_value { get; set; }
        public string reduction_rabi_onion_water_req { get; set; }
        public string reduction_rabi_onion_fundingsource { get; set; }
        public string reduction_rabi_onion_waterdemand { get; set; }
        public string reduction_rabi_onion_gw_demand { get; set; }


        public string reduction_rabi_horticulture_crop_area { get; set; }
        public string reduction_rabi_horticulture_quatum_value { get; set; }
        public string reduction_rabi_horticulture_water_req { get; set; }
        public string reduction_rabi_horticulture_fundingsource { get; set; }
        public string reduction_rabi_horticulture_waterdemand { get; set; }
        public string reduction_rabi_horticulture_gw_demand { get; set; }


        public string reduction_rabi_sunflower_crop_area { get; set; }
        public string reduction_rabi_sunflower_quatum_value { get; set; }
        public string reduction_rabi_sunflower_water_req { get; set; }
        public string reduction_rabi_sunflower_fundingsource { get; set; }
        public string reduction_rabi_sunflower_waterdemand { get; set; }
        public string reduction_rabi_sunflower_gw_demand { get; set; }

        public string reduction_rabi_total_rabicrop_waterdemand { get; set; }
        public string reduction_rabi_total_reduc_gw_demand { get; set; }

        public string reduction_summer_sericulture_crop_area { get; set; }
        public string reduction_summer_sericulture_quatum_value { get; set; }
        public string reduction_summer_sericulture_water_req { get; set; }
        public string reduction_summer_sericulture_fundingsource { get; set; }
        public string reduction_summer_sericulture_waterdemand { get; set; }
        public string reduction_summer_sericulture_gw_demand { get; set; }

        public string reduction_summer_tomoto_crop_area { get; set; }
        public string reduction_summer_tomoto_quatum_value { get; set; }
        public string reduction_summer_tomoto_water_req { get; set; }
        public string reduction_summer_tomoto_fundingsource { get; set; }
        public string reduction_summer_tomoto_waterdemand { get; set; }
        public string reduction_summer_tomoto_gw_demand { get; set; }

        public string reduction_summer_cabbage_crop_area { get; set; }
        public string reduction_summer_cabbage_quatum_value { get; set; }
        public string reduction_summer_cabbage_water_req { get; set; }
        public string reduction_summer_cabbage_fundingsource { get; set; }
        public string reduction_summer_cabbage_waterdemand { get; set; }
        public string reduction_summer_cabbage_gw_demand { get; set; }

        public string reduction_summer_beans_crop_area { get; set; }
        public string reduction_summer_beans_quatum_value { get; set; }
        public string reduction_summer_beans_water_req { get; set; }
        public string reduction_summer_beans_fundingsource { get; set; }
        public string reduction_summer_beans_waterdemand { get; set; }
        public string reduction_summer_beans_gw_demand { get; set; }

        public string reduction_summer_floriculture_crop_area { get; set; }
        public string reduction_summer_floriculture_quatum_value { get; set; }
        public string reduction_summer_floriculture_water_req { get; set; }
        public string reduction_summer_floriculture_fundingsource { get; set; }
        public string reduction_summer_floriculture_waterdemand { get; set; }
        public string reduction_summer_floriculture_gw_demand { get; set; }

        public string reduction_summer_maize_crop_area { get; set; }
        public string reduction_summer_maize_quatum_value { get; set; }
        public string reduction_summer_maize_water_req { get; set; }
        public string reduction_summer_maize_fundingsource { get; set; }
        public string reduction_summer_maize_waterdemand { get; set; }
        public string reduction_summer_maize_gw_demand { get; set; }

        public string reduction_summer_fodder_crop_area { get; set; }
        public string reduction_summer_fodder_quatum_value { get; set; }
        public string reduction_summer_fodder_water_req { get; set; }
        public string reduction_summer_fodder_fundingsource { get; set; }
        public string reduction_summer_fodder_waterdemand { get; set; }
        public string reduction_summer_fodder_gw_demand { get; set; }

        public string reduction_summer_sugarcane_crop_area { get; set; }
        public string reduction_summer_sugarcane_quatum_value { get; set; }
        public string reduction_summer_sugarcane_water_req { get; set; }
        public string reduction_summer_sugarcane_fundingsource { get; set; }
        public string reduction_summer_sugarcane_waterdemand { get; set; }
        public string reduction_summer_sugarcane_gw_demand { get; set; }

        public string reduction_summer_total_summercrop_waterdemand { get; set; }
        public string reduction_summer_total_reduc_gw_demand { get; set; }



        public string reduction_total_annual_waterdemand { get; set; }
        public string reduction_other_funding_source { get; set; }

        //estmated cost
        public string reduction_approx_estimated_cost { get; set; }
        public string reduction_cost_type { get; set; }
        //horiculture
        public string reduction_summer_horticulture_crop_area { get; set; }
        public string reduction_summer_horticulture_quantum_uservalue { get; set; }
        public string reduction_summer_horticulture_water_req { get; set; }
        public string reduction_summer_horticulture_waterdemand { get; set; }
        public string reduction_summer_horticulture_reduction_gw_demand { get; set; }

        //other crops kharif/rabi/summer each 5 boxes

        public string reduction_kharif_othercrop_name1 { get; set; }
        public string reduction_kharif_othercrop_area1 { get; set; }
        public string reduction_kharif_othercrop_quantum_uservalue1 { get; set; }
        public string reduction_kharif_othercrop_water_req1 { get; set; }
        public string reduction_kharif_othercrop_waterdemand1 { get; set; }
        public string reduction_kharif_othercrop_reduction_gw_demand1 { get; set; }

        public string reduction_kharif_othercrop_name2 { get; set; }
        public string reduction_kharif_othercrop_area2 { get; set; }
        public string reduction_kharif_othercrop_quantum_uservalue2 { get; set; }
        public string reduction_kharif_othercrop_water_req2 { get; set; }
        public string reduction_kharif_othercrop_waterdemand2 { get; set; }
        public string reduction_kharif_othercrop_reduction_gw_demand2 { get; set; }

        public string reduction_kharif_othercrop_name3 { get; set; }
        public string reduction_kharif_othercrop_area3 { get; set; }
        public string reduction_kharif_othercrop_quantum_uservalue3 { get; set; }
        public string reduction_kharif_othercrop_water_req3 { get; set; }
        public string reduction_kharif_othercrop_waterdemand3 { get; set; }
        public string reduction_kharif_othercrop_reduction_gw_demand3 { get; set; }

        public string reduction_kharif_othercrop_name4 { get; set; }
        public string reduction_kharif_othercrop_area4 { get; set; }
        public string reduction_kharif_othercrop_quantum_uservalue4 { get; set; }
        public string reduction_kharif_othercrop_water_req4 { get; set; }
        public string reduction_kharif_othercrop_waterdemand4 { get; set; }
        public string reduction_kharif_othercrop_reduction_gw_demand4 { get; set; }

        public string reduction_kharif_othercrop_name5 { get; set; }
        public string reduction_kharif_othercrop_area5 { get; set; }
        public string reduction_kharif_othercrop_quantum_uservalue5 { get; set; }
        public string reduction_kharif_othercrop_water_req5 { get; set; }
        public string reduction_kharif_othercrop_waterdemand5 { get; set; }
        public string reduction_kharif_othercrop_reduction_gw_demand5 { get; set; }

        //10 new othercrops kharif reduction

        //public string reduction_kharif_othercrop_name6 { get; set; }
        //public string reduction_kharif_othercrop_area6 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue6 { get; set; }
        //public string reduction_kharif_othercrop_water_req6 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand6 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand6 { get; set; }

        //public string reduction_kharif_othercrop_name7 { get; set; }
        //public string reduction_kharif_othercrop_area7 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue7 { get; set; }
        //public string reduction_kharif_othercrop_water_req7 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand7 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand7 { get; set; }

        //public string reduction_kharif_othercrop_name8 { get; set; }
        //public string reduction_kharif_othercrop_area8 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue8 { get; set; }
        //public string reduction_kharif_othercrop_water_req8 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand8 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand8 { get; set; }

        //public string reduction_kharif_othercrop_name9 { get; set; }
        //public string reduction_kharif_othercrop_area9 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue9 { get; set; }
        //public string reduction_kharif_othercrop_water_req9 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand9 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand9 { get; set; }

        //public string reduction_kharif_othercrop_name10 { get; set; }
        //public string reduction_kharif_othercrop_area10 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue10 { get; set; }
        //public string reduction_kharif_othercrop_water_req10 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand10 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand10 { get; set; }

        //public string reduction_kharif_othercrop_name11 { get; set; }
        //public string reduction_kharif_othercrop_area11 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue11 { get; set; }
        //public string reduction_kharif_othercrop_water_req11 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand11 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand11 { get; set; }

        //public string reduction_kharif_othercrop_name12 { get; set; }
        //public string reduction_kharif_othercrop_area12 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue12 { get; set; }
        //public string reduction_kharif_othercrop_water_req12 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand12 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand12 { get; set; }

        //public string reduction_kharif_othercrop_name13 { get; set; }
        //public string reduction_kharif_othercrop_area13 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue13 { get; set; }
        //public string reduction_kharif_othercrop_water_req13 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand13 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand13 { get; set; }

        //public string reduction_kharif_othercrop_name14 { get; set; }
        //public string reduction_kharif_othercrop_area14 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue14 { get; set; }
        //public string reduction_kharif_othercrop_water_req14 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand14 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand14 { get; set; }

        //public string reduction_kharif_othercrop_name15 { get; set; }
        //public string reduction_kharif_othercrop_area15 { get; set; }
        //public string reduction_kharif_othercrop_quantum_uservalue15 { get; set; }
        //public string reduction_kharif_othercrop_water_req15 { get; set; }
        //public string reduction_kharif_othercrop_waterdemand15 { get; set; }
        //public string reduction_kharif_othercrop_reduction_gw_demand15 { get; set; }

        //rabi add crop
        public string reduction_rabi_othercrop_name1 { get; set; }
        public string reduction_rabi_othercrop_area1 { get; set; }
        public string reduction_rabi_othercrop_quantum_uservalue1 { get; set; }
        public string reduction_rabi_othercrop_water_req1 { get; set; }
        public string reduction_rabi_othercrop_waterdemand1 { get; set; }
        public string reduction_rabi_othercrop_reduction_gw_demand1 { get; set; }

        public string reduction_rabi_othercrop_name2 { get; set; }
        public string reduction_rabi_othercrop_area2 { get; set; }
        public string reduction_rabi_othercrop_quantum_uservalue2 { get; set; }
        public string reduction_rabi_othercrop_water_req2 { get; set; }
        public string reduction_rabi_othercrop_waterdemand2 { get; set; }
        public string reduction_rabi_othercrop_reduction_gw_demand2 { get; set; }

        public string reduction_rabi_othercrop_name3 { get; set; }
        public string reduction_rabi_othercrop_area3 { get; set; }
        public string reduction_rabi_othercrop_quantum_uservalue3 { get; set; }
        public string reduction_rabi_othercrop_water_req3 { get; set; }
        public string reduction_rabi_othercrop_waterdemand3 { get; set; }
        public string reduction_rabi_othercrop_reduction_gw_demand3 { get; set; }

        public string reduction_rabi_othercrop_name4 { get; set; }
        public string reduction_rabi_othercrop_area4 { get; set; }
        public string reduction_rabi_othercrop_quantum_uservalue4 { get; set; }
        public string reduction_rabi_othercrop_water_req4 { get; set; }
        public string reduction_rabi_othercrop_waterdemand4 { get; set; }
        public string reduction_rabi_othercrop_reduction_gw_demand4 { get; set; }

        public string reduction_rabi_othercrop_name5 { get; set; }
        public string reduction_rabi_othercrop_area5 { get; set; }
        public string reduction_rabi_othercrop_quantum_uservalue5 { get; set; }
        public string reduction_rabi_othercrop_water_req5 { get; set; }
        public string reduction_rabi_othercrop_waterdemand5 { get; set; }
        public string reduction_rabi_othercrop_reduction_gw_demand5 { get; set; }

        //10 new othercrops rabi reduction
        //public string reduction_rabi_othercrop_name6 { get; set; }
        //public string reduction_rabi_othercrop_area6 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue6 { get; set; }
        //public string reduction_rabi_othercrop_water_req6 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand6 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand6 { get; set; }

        //public string reduction_rabi_othercrop_name7 { get; set; }
        //public string reduction_rabi_othercrop_area7 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue7 { get; set; }
        //public string reduction_rabi_othercrop_water_req7 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand7 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand7 { get; set; }

        //public string reduction_rabi_othercrop_name8 { get; set; }
        //public string reduction_rabi_othercrop_area8 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue8 { get; set; }
        //public string reduction_rabi_othercrop_water_req8 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand8 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand8 { get; set; }

        //public string reduction_rabi_othercrop_name9 { get; set; }
        //public string reduction_rabi_othercrop_area9 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue9 { get; set; }
        //public string reduction_rabi_othercrop_water_req9 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand9 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand9 { get; set; }

        //public string reduction_rabi_othercrop_name10 { get; set; }
        //public string reduction_rabi_othercrop_area10 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue10 { get; set; }
        //public string reduction_rabi_othercrop_water_req10 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand10 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand10 { get; set; }

        //public string reduction_rabi_othercrop_name11 { get; set; }
        //public string reduction_rabi_othercrop_area11 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue11 { get; set; }
        //public string reduction_rabi_othercrop_water_req11 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand11 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand11 { get; set; }

        //public string reduction_rabi_othercrop_name12 { get; set; }
        //public string reduction_rabi_othercrop_area12 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue12 { get; set; }
        //public string reduction_rabi_othercrop_water_req12 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand12 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand12 { get; set; }

        //public string reduction_rabi_othercrop_name13 { get; set; }
        //public string reduction_rabi_othercrop_area13 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue13 { get; set; }
        //public string reduction_rabi_othercrop_water_req13 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand13 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand13 { get; set; }

        //public string reduction_rabi_othercrop_name14 { get; set; }
        //public string reduction_rabi_othercrop_area14 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue14 { get; set; }
        //public string reduction_rabi_othercrop_water_req14 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand14 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand14 { get; set; }

        //public string reduction_rabi_othercrop_name15 { get; set; }
        //public string reduction_rabi_othercrop_area15 { get; set; }
        //public string reduction_rabi_othercrop_quantum_uservalue15 { get; set; }
        //public string reduction_rabi_othercrop_water_req15 { get; set; }
        //public string reduction_rabi_othercrop_waterdemand15 { get; set; }
        //public string reduction_rabi_othercrop_reduction_gw_demand15 { get; set; }

        //summer app crop
        public string reduction_summer_othercrop_name1 { get; set; }
        public string reduction_summer_othercrop_area1 { get; set; }
        public string reduction_summer_othercrop_quantum_uservalue1 { get; set; }
        public string reduction_summer_othercrop_water_req1 { get; set; }
        public string reduction_summer_othercrop_waterdemand1 { get; set; }
        public string reduction_summer_othercrop_reduction_gw_demand1 { get; set; }

        public string reduction_summer_othercrop_name2 { get; set; }
        public string reduction_summer_othercrop_area2 { get; set; }
        public string reduction_summer_othercrop_quantum_uservalue2 { get; set; }
        public string reduction_summer_othercrop_water_req2 { get; set; }
        public string reduction_summer_othercrop_waterdemand2 { get; set; }
        public string reduction_summer_othercrop_reduction_gw_demand2 { get; set; }

        public string reduction_summer_othercrop_name3 { get; set; }
        public string reduction_summer_othercrop_area3 { get; set; }
        public string reduction_summer_othercrop_quantum_uservalue3 { get; set; }
        public string reduction_summer_othercrop_water_req3 { get; set; }
        public string reduction_summer_othercrop_waterdemand3 { get; set; }
        public string reduction_summer_othercrop_reduction_gw_demand3 { get; set; }

        public string reduction_summer_othercrop_name4 { get; set; }
        public string reduction_summer_othercrop_area4 { get; set; }
        public string reduction_summer_othercrop_quantum_uservalue4 { get; set; }
        public string reduction_summer_othercrop_water_req4 { get; set; }
        public string reduction_summer_othercrop_waterdemand4 { get; set; }
        public string reduction_summer_othercrop_reduction_gw_demand4 { get; set; }

        public string reduction_summer_othercrop_name5 { get; set; }
        public string reduction_summer_othercrop_area5 { get; set; }
        public string reduction_summer_othercrop_quantum_uservalue5 { get; set; }
        public string reduction_summer_othercrop_water_req5 { get; set; }
        public string reduction_summer_othercrop_waterdemand5 { get; set; }
        public string reduction_summer_othercrop_reduction_gw_demand5 { get; set; }

        //10 new othercrops summer reduction

        //public string reduction_summer_othercrop_name6 { get; set; }
        //public string reduction_summer_othercrop_area6 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue6 { get; set; }
        //public string reduction_summer_othercrop_water_req6 { get; set; }
        //public string reduction_summer_othercrop_waterdemand6 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand6 { get; set; }

        //public string reduction_summer_othercrop_name7 { get; set; }
        //public string reduction_summer_othercrop_area7 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue7 { get; set; }
        //public string reduction_summer_othercrop_water_req7 { get; set; }
        //public string reduction_summer_othercrop_waterdemand7 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand7 { get; set; }

        //public string reduction_summer_othercrop_name8 { get; set; }
        //public string reduction_summer_othercrop_area8 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue8 { get; set; }
        //public string reduction_summer_othercrop_water_req8 { get; set; }
        //public string reduction_summer_othercrop_waterdemand8 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand8 { get; set; }

        //public string reduction_summer_othercrop_name9 { get; set; }
        //public string reduction_summer_othercrop_area9 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue9 { get; set; }
        //public string reduction_summer_othercrop_water_req9 { get; set; }
        //public string reduction_summer_othercrop_waterdemand9 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand9 { get; set; }

        //public string reduction_summer_othercrop_name10 { get; set; }
        //public string reduction_summer_othercrop_area10 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue10 { get; set; }
        //public string reduction_summer_othercrop_water_req10 { get; set; }
        //public string reduction_summer_othercrop_waterdemand10 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand10 { get; set; }

        //public string reduction_summer_othercrop_name11 { get; set; }
        //public string reduction_summer_othercrop_area11 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue11 { get; set; }
        //public string reduction_summer_othercrop_water_req11 { get; set; }
        //public string reduction_summer_othercrop_waterdemand11 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand11 { get; set; }

        //public string reduction_summer_othercrop_name12 { get; set; }
        //public string reduction_summer_othercrop_area12 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue12 { get; set; }
        //public string reduction_summer_othercrop_water_req12 { get; set; }
        //public string reduction_summer_othercrop_waterdemand12 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand12 { get; set; }

        //public string reduction_summer_othercrop_name13 { get; set; }
        //public string reduction_summer_othercrop_area13 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue13 { get; set; }
        //public string reduction_summer_othercrop_water_req13 { get; set; }
        //public string reduction_summer_othercrop_waterdemand13 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand13 { get; set; }

        //public string reduction_summer_othercrop_name14 { get; set; }
        //public string reduction_summer_othercrop_area14 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue14 { get; set; }
        //public string reduction_summer_othercrop_water_req14 { get; set; }
        //public string reduction_summer_othercrop_waterdemand14 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand14 { get; set; }

        //public string reduction_summer_othercrop_name15 { get; set; }
        //public string reduction_summer_othercrop_area15 { get; set; }
        //public string reduction_summer_othercrop_quantum_uservalue15 { get; set; }
        //public string reduction_summer_othercrop_water_req15 { get; set; }
        //public string reduction_summer_othercrop_waterdemand15 { get; set; }
        //public string reduction_summer_othercrop_reduction_gw_demand15 { get; set; }
    }

    [Table("abhy_demandside_other_saveddata", Schema = "public")]
    public class abhy_demandside_other_saveddata
    {

        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }

        public string officer_name { get; set; }
        public string other_kharif_paddy_crop_area { get; set; }
        public string other_kharif_paddy_intervention_value { get; set; }
        public string other_kharif_paddy_fundingsource { get; set; }
        public string other_kharif_paddy_water_saving { get; set; }
        public string other_kharif_paddy_water_req { get; set; }
        public string other_kharif_paddy_water_demand { get; set; }
        public string other_kharif_paddy_reduc_gw_demand { get; set; }

        public string other_kharif_ragi_crop_area { get; set; }
        public string other_kharif_ragi_intervention_value { get; set; }
        public string other_kharif_ragi_fundingsource { get; set; }
        public string other_kharif_ragi_water_saving { get; set; }
        public string other_kharif_ragi_water_req { get; set; }
        public string other_kharif_ragi_water_demand { get; set; }
        public string other_kharif_ragi_reduc_gw_demand { get; set; }

        public string other_kharif_groundnut_crop_area { get; set; }
        public string other_kharif_groundnut_intervention_value { get; set; }
        public string other_kharif_groundnut_fundingsource { get; set; }
        public string other_kharif_groundnut_water_saving { get; set; }
        public string other_kharif_groundnut_water_req { get; set; }
        public string other_kharif_groundnut_water_demand { get; set; }
        public string other_kharif_groundnut_reduc_gw_demand { get; set; }

        public string other_kharif_sugarcane_crop_area { get; set; }
        public string other_kharif_sugarcane_intervention_value { get; set; }
        public string other_kharif_sugarcane_fundingsource { get; set; }
        public string other_kharif_sugarcane_water_saving { get; set; }
        public string other_kharif_sugarcane_water_req { get; set; }
        public string other_kharif_sugarcane_water_demand { get; set; }
        public string other_kharif_sugarcane_reduc_gw_demand { get; set; }

        public string other_kharif_tomoto_crop_area { get; set; }
        public string other_kharif_tomoto_intervention_value { get; set; }
        public string other_kharif_tomoto_fundingsource { get; set; }
        public string other_kharif_tomoto_water_saving { get; set; }
        public string other_kharif_tomoto_water_req { get; set; }
        public string other_kharif_tomoto_water_demand { get; set; }
        public string other_kharif_tomoto_reduc_gw_demand { get; set; }

        public string other_kharif_cabbage_crop_area { get; set; }
        public string other_kharif_cabbage_intervention_value { get; set; }
        public string other_kharif_cabbage_fundingsource { get; set; }
        public string other_kharif_cabbage_water_saving { get; set; }
        public string other_kharif_cabbage_water_req { get; set; }
        public string other_kharif_cabbage_water_demand { get; set; }
        public string other_kharif_cabbage_reduc_gw_demand { get; set; }

        public string other_kharif_beans_crop_area { get; set; }
        public string other_kharif_beans_intervention_value { get; set; }
        public string other_kharif_beans_fundingsource { get; set; }
        public string other_kharif_beans_water_saving { get; set; }
        public string other_kharif_beans_water_req { get; set; }
        public string other_kharif_beans_water_demand { get; set; }
        public string other_kharif_beans_reduc_gw_demand { get; set; }

        public string other_kharif_floriculture_crop_area { get; set; }
        public string other_kharif_floriculture_intervention_value { get; set; }
        public string other_kharif_floriculture_fundingsource { get; set; }
        public string other_kharif_floriculture_water_saving { get; set; }
        public string other_kharif_floriculture_water_req { get; set; }
        public string other_kharif_floriculture_water_demand { get; set; }
        public string other_kharif_floriculture_reduc_gw_demand { get; set; }

        public string other_kharif_sericulture_crop_area { get; set; }
        public string other_kharif_sericulture_intervention_value { get; set; }
        public string other_kharif_sericulture_fundingsource { get; set; }
        public string other_kharif_sericulture_water_saving { get; set; }
        public string other_kharif_sericulture_water_req { get; set; }
        public string other_kharif_sericulture_water_demand { get; set; }
        public string other_kharif_sericulture_reduc_gw_demand { get; set; }

        public string other_kharif_cucumber_crop_area { get; set; }
        public string other_kharif_cucumber_intervention_value { get; set; }
        public string other_kharif_cucumber_fundingsource { get; set; }
        public string other_kharif_cucumber_water_saving { get; set; }
        public string other_kharif_cucumber_water_req { get; set; }
        public string other_kharif_cucumber_water_demand { get; set; }
        public string other_kharif_cucumber_reduc_gw_demand { get; set; }

        public string other_kharif_banana_crop_area { get; set; }
        public string other_kharif_banana_intervention_value { get; set; }
        public string other_kharif_banana_fundingsource { get; set; }
        public string other_kharif_banana_water_saving { get; set; }
        public string other_kharif_banana_water_req { get; set; }
        public string other_kharif_banana_water_demand { get; set; }
        public string other_kharif_banana_reduc_gw_demand { get; set; }

        public string other_kharif_fodder_crop_area { get; set; }
        public string other_kharif_fodder_intervention_value { get; set; }
        public string other_kharif_fodder_fundingsource { get; set; }
        public string other_kharif_fodder_water_saving { get; set; }
        public string other_kharif_fodder_water_req { get; set; }
        public string other_kharif_fodder_water_demand { get; set; }
        public string other_kharif_fodder_reduc_gw_demand { get; set; }

        public string other_kharif_maize_crop_area { get; set; }
        public string other_kharif_maize_intervention_value { get; set; }
        public string other_kharif_maize_fundingsource { get; set; }
        public string other_kharif_maize_water_saving { get; set; }
        public string other_kharif_maize_water_req { get; set; }
        public string other_kharif_maize_water_demand { get; set; }
        public string other_kharif_maize_reduc_gw_demand { get; set; }

        public string other_kharif_potato_crop_area { get; set; }
        public string other_kharif_potato_intervention_value { get; set; }
        public string other_kharif_potato_fundingsource { get; set; }
        public string other_kharif_potato_water_saving { get; set; }
        public string other_kharif_potato_water_req { get; set; }
        public string other_kharif_potato_water_demand { get; set; }
        public string other_kharif_potato_reduc_gw_demand { get; set; }

        public string other_kharif_chillies_crop_area { get; set; }
        public string other_kharif_chillies_intervention_value { get; set; }
        public string other_kharif_chillies_fundingsource { get; set; }
        public string other_kharif_chillies_water_saving { get; set; }
        public string other_kharif_chillies_water_req { get; set; }
        public string other_kharif_chillies_water_demand { get; set; }
        public string other_kharif_chillies_reduc_gw_demand { get; set; }

        public string other_kharif_cotton_crop_area { get; set; }
        public string other_kharif_cotton_intervention_value { get; set; }
        public string other_kharif_cotton_fundingsource { get; set; }
        public string other_kharif_cotton_water_saving { get; set; }
        public string other_kharif_cotton_water_req { get; set; }
        public string other_kharif_cotton_water_demand { get; set; }
        public string other_kharif_cotton_reduc_gw_demand { get; set; }

        public string other_kharif_melon_crop_area { get; set; }
        public string other_kharif_melon_intervention_value { get; set; }
        public string other_kharif_melon_fundingsource { get; set; }
        public string other_kharif_melon_water_saving { get; set; }
        public string other_kharif_melon_water_req { get; set; }
        public string other_kharif_melon_water_demand { get; set; }
        public string other_kharif_melon_reduc_gw_demand { get; set; }

        public string other_kharif_citrus_crop_area { get; set; }
        public string other_kharif_citrus_intervention_value { get; set; }
        public string other_kharif_citrus_fundingsource { get; set; }
        public string other_kharif_citrus_water_saving { get; set; }
        public string other_kharif_citrus_water_req { get; set; }
        public string other_kharif_citrus_water_demand { get; set; }
        public string other_kharif_citrus_reduc_gw_demand { get; set; }

        public string other_kharif_peanut_crop_area { get; set; }
        public string other_kharif_peanut_intervention_value { get; set; }
        public string other_kharif_peanut_fundingsource { get; set; }
        public string other_kharif_peanut_water_saving { get; set; }
        public string other_kharif_peanut_water_req { get; set; }
        public string other_kharif_peanut_water_demand { get; set; }
        public string other_kharif_peanut_reduc_gw_demand { get; set; }

        public string other_kharif_horticulture_crop_area { get; set; }
        public string other_kharif_horticulture_intervention_value { get; set; }
        public string other_kharif_horticulture_fundingsource { get; set; }
        public string other_kharif_horticulture_water_saving { get; set; }
        public string other_kharif_horticulture_water_req { get; set; }
        public string other_kharif_horticulture_water_demand { get; set; }
        public string other_kharif_horticulture_reduc_gw_demand { get; set; }

        public string other_kharif_total_kharifcrop_waterdemand { get; set; }
        public string other_kharif_total_reduc_gw_demand { get; set; }

        public string other_rabi_sericulture_crop_area { get; set; }
        public string other_rabi_sericulture_intervention_value { get; set; }
        public string other_rabi_sericulture_fundingsource { get; set; }
        public string other_rabi_sericulture_water_saving { get; set; }
        public string other_rabi_sericulture_water_req { get; set; }
        public string other_rabi_sericulture_water_demand { get; set; }
        public string other_rabi_sericulture_reduc_gw_demand { get; set; }

        public string other_rabi_tomoto_crop_area { get; set; }
        public string other_rabi_tomoto_intervention_value { get; set; }
        public string other_rabi_tomoto_fundingsource { get; set; }
        public string other_rabi_tomoto_water_saving { get; set; }
        public string other_rabi_tomoto_water_req { get; set; }
        public string other_rabi_tomoto_water_demand { get; set; }
        public string other_rabi_tomoto_reduc_gw_demand { get; set; }

        public string other_rabi_cabbage_crop_area { get; set; }
        public string other_rabi_cabbage_intervention_value { get; set; }
        public string other_rabi_cabbage_fundingsource { get; set; }
        public string other_rabi_cabbage_water_saving { get; set; }
        public string other_rabi_cabbage_water_req { get; set; }
        public string other_rabi_cabbage_water_demand { get; set; }
        public string other_rabi_cabbage_reduc_gw_demand { get; set; }

        public string other_rabi_beans_crop_area { get; set; }
        public string other_rabi_beans_intervention_value { get; set; }
        public string other_rabi_beans_fundingsource { get; set; }
        public string other_rabi_beans_water_saving { get; set; }
        public string other_rabi_beans_water_req { get; set; }
        public string other_rabi_beans_water_demand { get; set; }
        public string other_rabi_beans_reduc_gw_demand { get; set; }

        public string other_rabi_floriculture_crop_area { get; set; }
        public string other_rabi_floriculture_intervention_value { get; set; }
        public string other_rabi_floriculture_fundingsource { get; set; }
        public string other_rabi_floriculture_water_saving { get; set; }
        public string other_rabi_floriculture_water_req { get; set; }
        public string other_rabi_floriculture_water_demand { get; set; }
        public string other_rabi_floriculture_reduc_gw_demand { get; set; }

        public string other_rabi_potato_crop_area { get; set; }
        public string other_rabi_potato_intervention_value { get; set; }
        public string other_rabi_potato_fundingsource { get; set; }
        public string other_rabi_potato_water_saving { get; set; }
        public string other_rabi_potato_water_req { get; set; }
        public string other_rabi_potato_water_demand { get; set; }
        public string other_rabi_potato_reduc_gw_demand { get; set; }

        public string other_rabi_cucumber_crop_area { get; set; }
        public string other_rabi_cucuber_intervention_value { get; set; }
        public string other_rabi_cucumber_fundingsource { get; set; }
        public string other_rabi_cucumber_water_saving { get; set; }
        public string other_rabi_cucumber_water_req { get; set; }
        public string other_rabi_cucumber_water_demand { get; set; }
        public string other_rabi_cucumber_reduc_gw_demand { get; set; }

        public string other_rabi_ragi_crop_area { get; set; }
        public string other_rabi_ragi_intervention_value { get; set; }
        public string other_rabi_ragi_fundingsource { get; set; }
        public string other_rabi_ragi_water_saving { get; set; }
        public string other_rabi_ragi_water_req { get; set; }
        public string other_rabi_ragi_water_demand { get; set; }
        public string other_rabi_ragi_reduc_gw_demand { get; set; }

        public string other_rabi_sugarcane_crop_area { get; set; }
        public string other_rabi_sugarcane_intervention_value { get; set; }
        public string other_rabi_sugarcane_fundingsource { get; set; }
        public string other_rabi_sugarcane_water_saving { get; set; }
        public string other_rabi_sugarcane_water_req { get; set; }
        public string other_rabi_sugarcane_water_demand { get; set; }
        public string other_rabi_sugarcane_reduc_gw_demand { get; set; }

        public string other_rabi_maize_crop_area { get; set; }
        public string other_rabi_maize_intervention_value { get; set; }
        public string other_rabi_maize_fundingsource { get; set; }
        public string other_rabi_maize_water_saving { get; set; }
        public string other_rabi_maize_water_req { get; set; }
        public string other_rabi_maize_water_demand { get; set; }
        public string other_rabi_maize_reduc_gw_demand { get; set; }

        public string other_rabi_fodder_crop_area { get; set; }
        public string other_rabi_fodder_intervention_value { get; set; }
        public string other_rabi_fodder_fundingsource { get; set; }
        public string other_rabi_fodder_water_saving { get; set; }
        public string other_rabi_fodder_water_req { get; set; }
        public string other_rabi_fodder_water_demand { get; set; }
        public string other_rabi_fodder_reduc_gw_demand { get; set; }

        public string other_rabi_paddy_crop_area { get; set; }
        public string other_rabi_paddy_intervention_value { get; set; }
        public string other_rabi_paddy_fundingsource { get; set; }
        public string other_rabi_paddy_water_saving { get; set; }
        public string other_rabi_paddy_water_req { get; set; }
        public string other_rabi_paddy_water_demand { get; set; }
        public string other_rabi_paddy_reduc_gw_demand { get; set; }

        public string other_rabi_alfalfa_crop_area { get; set; }
        public string other_rabi_alfalfa_intervention_value { get; set; }
        public string other_rabi_alfalfa_fundingsource { get; set; }
        public string other_rabi_alfalfa_water_saving { get; set; }
        public string other_rabi_alfalfa_water_req { get; set; }
        public string other_rabi_alfalfa_water_demand { get; set; }
        public string other_rabi_alfalfa_reduc_gw_demand { get; set; }

        public string other_rabi_onion_crop_area { get; set; }
        public string other_rabi_onion_intervention_value { get; set; }
        public string other_rabi_onion_fundingsource { get; set; }
        public string other_rabi_onion_water_saving { get; set; }
        public string other_rabi_onion_water_req { get; set; }
        public string other_rabi_onion_water_demand { get; set; }
        public string other_rabi_onion_reduc_gw_demand { get; set; }

        public string other_rabi_horticulture_crop_area { get; set; }
        public string other_rabi_horticulture_intervention_value { get; set; }
        public string other_rabi_horticulture_fundingsource { get; set; }
        public string other_rabi_horticulture_water_saving { get; set; }
        public string other_rabi_horticulture_water_req { get; set; }
        public string other_rabi_horticulture_water_demand { get; set; }
        public string other_rabi_horticulture_reduc_gw_demand { get; set; }

        public string other_rabi_sunflower_crop_area { get; set; }
        public string other_rabi_sunflower_intervention_value { get; set; }
        public string other_rabi_sunflower_fundingsource { get; set; }
        public string other_rabi_sunflower_water_saving { get; set; }
        public string other_rabi_sunflower_water_req { get; set; }
        public string other_rabi_sunflower_water_demand { get; set; }
        public string other_rabi_sunflower_reduc_gw_demand { get; set; }

        public string other_rabi_total_rabicrop_waterdemand { get; set; }
        public string other_rabi_total_reduc_gw_demand { get; set; }

        public string other_summer_sericulture_crop_area { get; set; }
        public string other_summer_sericulture_intervention_value { get; set; }
        public string other_summer_sericulture_fundingsource { get; set; }
        public string other_summer_sericulture_water_saving { get; set; }
        public string other_summer_sericulture_water_req { get; set; }
        public string other_summer_sericulture_water_demand { get; set; }
        public string other_summer_sericulture_reduc_gw_demand { get; set; }

        public string other_summer_tomoto_crop_area { get; set; }
        public string other_summer_tomoto_intervention_value { get; set; }
        public string other_summer_tomoto_fundingsource { get; set; }
        public string other_summer_tomoto_water_saving { get; set; }
        public string other_summer_tomoto_water_req { get; set; }
        public string other_summer_tomoto_water_demand { get; set; }
        public string other_summer_tomoto_reduc_gw_demand { get; set; }

        public string other_summer_cabbage_crop_area { get; set; }
        public string other_summer_cabbage_intervention_value { get; set; }
        public string other_summer_cabbage_fundingsource { get; set; }
        public string other_summer_cabbage_water_saving { get; set; }
        public string other_summer_cabbage_water_req { get; set; }
        public string other_summer_cabbage_water_demand { get; set; }
        public string other_summer_cabbage_reduc_gw_demand { get; set; }

        public string other_summer_beans_crop_area { get; set; }
        public string other_summer_beans_intervention_value { get; set; }
        public string other_summer_beans_fundingsource { get; set; }
        public string other_summer_beans_water_saving { get; set; }
        public string other_summer_beans_water_req { get; set; }
        public string other_summer_beans_water_demand { get; set; }
        public string other_summer_beans_reduc_gw_demand { get; set; }

        public string other_summer_floriculture_crop_area { get; set; }
        public string other_summer_floiculture_intervention_value { get; set; }
        public string other_summer_floriculture_fundingsource { get; set; }
        public string other_summer_floriculture_water_saving { get; set; }
        public string other_summer_floriculture_water_req { get; set; }
        public string other_summer_floriculture_water_demand { get; set; }
        public string other_summer_floriculture_reduc_gw_demand { get; set; }

        public string other_summer_maize_crop_area { get; set; }
        public string other_summer_maize_intervention_value { get; set; }
        public string other_summer_maize_fundingsource { get; set; }
        public string other_summer_maize_water_saving { get; set; }
        public string other_summer_maize_water_req { get; set; }
        public string other_summer_maize_water_demand { get; set; }
        public string other_summer_maize_reduc_gw_demand { get; set; }

        public string other_summer_fodder_crop_area { get; set; }
        public string other_summer_fodder_intervention_value { get; set; }
        public string other_summer_fodder_fundingsource { get; set; }
        public string other_summer_fodder_water_saving { get; set; }
        public string other_summer_fodder_water_req { get; set; }
        public string other_summer_fodder_water_demand { get; set; }
        public string other_summer_fodder_reduc_gw_demand { get; set; }

        public string other_summer_sugarcane_crop_area { get; set; }
        public string other_summer_sugarcane_intervention_value { get; set; }
        public string other_summer_sugarcane_fundingsource { get; set; }
        public string other_summer_sugarcane_water_saving { get; set; }
        public string other_summer_sugarcane_water_req { get; set; }
        public string other_summer_sugarcane_water_demand { get; set; }
        public string other_summer_sugarcane_reduc_gw_demand { get; set; }

        public string other_summer_total_summercrop_waterdemand { get; set; }
        public string other_summer_total_reduc_gw_demand { get; set; }


        public string other_total_annual_waterdemand { get; set; }
        public string other_funding_source { get; set; }

        //estmated cost
        public string other_approx_estimated_cost { get; set; }
        public string other_cost_type { get; set; }

        //horiculture
        public string other_summer_horticulture_crop_area { get; set; }
        public string other_summer_horticulture_invention_proposed { get; set; }
        public string other_summer_horticulture_water_saving { get; set; }
        public string other_summer_horticulture_water_req { get; set; }
        public string other_summer_horticulture_waterdemand { get; set; }
        public string other_summer_horticulture_reduction_gw_deman { get; set; }

        //other crops kharif/rabi/summer each 5 boxes
        public string other_kharif_othercrop_name1 { get; set; }
        public string other_kharif_othercrop_area1 { get; set; }
        public string other_kharif_othercrop_invention_proposed1 { get; set; }
        public string other_kharif_othercrop_water_saving1 { get; set; }
        public string other_kharif_othercrop_water_req1 { get; set; }
        public string other_kharif_othercrop_waterdemand1 { get; set; }
        public string other_kharif_othercrop_reduction_gw_demand1 { get; set; }

        public string other_kharif_othercrop_name2 { get; set; }
        public string other_kharif_othercrop_area2 { get; set; }
        public string other_kharif_othercrop_invention_proposed2 { get; set; }
        public string other_kharif_othercrop_water_saving2 { get; set; }
        public string other_kharif_othercrop_water_req2 { get; set; }
        public string other_kharif_othercrop_waterdemand2 { get; set; }
        public string other_kharif_othercrop_reduction_gw_demand2 { get; set; }

        public string other_kharif_othercrop_name3 { get; set; }
        public string other_kharif_othercrop_area3 { get; set; }
        public string other_kharif_othercrop_invention_proposed3 { get; set; }
        public string other_kharif_othercrop_water_saving3 { get; set; }
        public string other_kharif_othercrop_water_req3 { get; set; }
        public string other_kharif_othercrop_waterdemand3 { get; set; }
        public string other_kharif_othercrop_reduction_gw_demand3 { get; set; }

        public string other_kharif_othercrop_name4 { get; set; }
        public string other_kharif_othercrop_area4 { get; set; }
        public string other_kharif_othercrop_invention_proposed4 { get; set; }
        public string other_kharif_othercrop_water_saving4 { get; set; }
        public string other_kharif_othercrop_water_req4 { get; set; }
        public string other_kharif_othercrop_waterdemand4 { get; set; }
        public string other_kharif_othercrop_reduction_gw_demand4 { get; set; }

        public string other_kharif_othercrop_name5 { get; set; }
        public string other_kharif_othercrop_area5 { get; set; }
        public string other_kharif_othercrop_invention_proposed5 { get; set; }
        public string other_kharif_othercrop_water_saving5 { get; set; }
        public string other_kharif_othercrop_water_req5 { get; set; }
        public string other_kharif_othercrop_waterdemand5 { get; set; }
        public string other_kharif_othercrop_reduction_gw_demand5 { get; set; }

        //10 new other crops of kharif other
        //public string other_kharif_othercrop_name6 { get; set; }
        //public string other_kharif_othercrop_area6 { get; set; }
        //public string other_kharif_othercrop_invention_proposed6 { get; set; }
        //public string other_kharif_othercrop_water_saving6 { get; set; }
        //public string other_kharif_othercrop_water_req6 { get; set; }
        //public string other_kharif_othercrop_waterdemand6 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand6 { get; set; }

        //public string other_kharif_othercrop_name7 { get; set; }
        //public string other_kharif_othercrop_area7 { get; set; }
        //public string other_kharif_othercrop_invention_proposed7 { get; set; }
        //public string other_kharif_othercrop_water_saving7 { get; set; }
        //public string other_kharif_othercrop_water_req7 { get; set; }
        //public string other_kharif_othercrop_waterdemand7 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand7 { get; set; }

        //public string other_kharif_othercrop_name8 { get; set; }
        //public string other_kharif_othercrop_area8 { get; set; }
        //public string other_kharif_othercrop_invention_proposed8 { get; set; }
        //public string other_kharif_othercrop_water_saving8 { get; set; }
        //public string other_kharif_othercrop_water_req8 { get; set; }
        //public string other_kharif_othercrop_waterdemand8 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand8 { get; set; }

        //public string other_kharif_othercrop_name9 { get; set; }
        //public string other_kharif_othercrop_area9 { get; set; }
        //public string other_kharif_othercrop_invention_proposed9 { get; set; }
        //public string other_kharif_othercrop_water_saving9 { get; set; }
        //public string other_kharif_othercrop_water_req9 { get; set; }
        //public string other_kharif_othercrop_waterdemand9 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand9 { get; set; }

        //public string other_kharif_othercrop_name10 { get; set; }
        //public string other_kharif_othercrop_area10 { get; set; }
        //public string other_kharif_othercrop_invention_proposed10 { get; set; }
        //public string other_kharif_othercrop_water_saving10 { get; set; }
        //public string other_kharif_othercrop_water_req10 { get; set; }
        //public string other_kharif_othercrop_waterdemand10 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand10 { get; set; }

        //public string other_kharif_othercrop_name11 { get; set; }
        //public string other_kharif_othercrop_area11 { get; set; }
        //public string other_kharif_othercrop_invention_proposed11 { get; set; }
        //public string other_kharif_othercrop_water_saving11 { get; set; }
        //public string other_kharif_othercrop_water_req11 { get; set; }
        //public string other_kharif_othercrop_waterdemand11 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand11 { get; set; }

        //public string other_kharif_othercrop_name12 { get; set; }
        //public string other_kharif_othercrop_area12 { get; set; }
        //public string other_kharif_othercrop_invention_proposed12 { get; set; }
        //public string other_kharif_othercrop_water_saving12 { get; set; }
        //public string other_kharif_othercrop_water_req12 { get; set; }
        //public string other_kharif_othercrop_waterdemand12 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand12 { get; set; }

        //public string other_kharif_othercrop_name13 { get; set; }
        //public string other_kharif_othercrop_area13 { get; set; }
        //public string other_kharif_othercrop_invention_proposed13 { get; set; }
        //public string other_kharif_othercrop_water_saving13 { get; set; }
        //public string other_kharif_othercrop_water_req13 { get; set; }
        //public string other_kharif_othercrop_waterdemand13 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand13 { get; set; }

        //public string other_kharif_othercrop_name14 { get; set; }
        //public string other_kharif_othercrop_area14 { get; set; }
        //public string other_kharif_othercrop_invention_proposed14 { get; set; }
        //public string other_kharif_othercrop_water_saving14 { get; set; }
        //public string other_kharif_othercrop_water_req14 { get; set; }
        //public string other_kharif_othercrop_waterdemand14 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand14 { get; set; }

        //public string other_kharif_othercrop_name15 { get; set; }
        //public string other_kharif_othercrop_area15 { get; set; }
        //public string other_kharif_othercrop_invention_proposed15 { get; set; }
        //public string other_kharif_othercrop_water_saving15 { get; set; }
        //public string other_kharif_othercrop_water_req15 { get; set; }
        //public string other_kharif_othercrop_waterdemand15 { get; set; }
        //public string other_kharif_othercrop_reduction_gw_demand15 { get; set; }

        //rabi add crop
        public string other_rabi_othercrop_name1 { get; set; }
        public string other_rabi_othercrop_area1 { get; set; }
        public string other_rabi_othercrop_invention_proposed1 { get; set; }
        public string other_rabi_othercrop_water_saving1 { get; set; }
        public string other_rabi_othercrop_water_req1 { get; set; }
        public string other_rabi_othercrop_waterdemand1 { get; set; }
        public string other_rabi_othercrop_reduction_gw_demand1 { get; set; }

        public string other_rabi_othercrop_name2 { get; set; }
        public string other_rabi_othercrop_area2 { get; set; }
        public string other_rabi_othercrop_invention_proposed2 { get; set; }
        public string other_rabi_othercrop_water_saving2 { get; set; }
        public string other_rabi_othercrop_water_req2 { get; set; }
        public string other_rabi_othercrop_waterdemand2 { get; set; }
        public string other_rabi_othercrop_reduction_gw_demand2 { get; set; }

        public string other_rabi_othercrop_name3 { get; set; }
        public string other_rabi_othercrop_area3 { get; set; }
        public string other_rabi_othercrop_invention_proposed3 { get; set; }
        public string other_rabi_othercrop_water_saving3 { get; set; }
        public string other_rabi_othercrop_water_req3 { get; set; }
        public string other_rabi_othercrop_waterdemand3 { get; set; }
        public string other_rabi_othercrop_reduction_gw_demand3 { get; set; }

        public string other_rabi_othercrop_name4 { get; set; }
        public string other_rabi_othercrop_area4 { get; set; }
        public string other_rabi_othercrop_invention_proposed4 { get; set; }
        public string other_rabi_othercrop_water_saving4 { get; set; }
        public string other_rabi_othercrop_water_req4 { get; set; }
        public string other_rabi_othercrop_waterdemand4 { get; set; }
        public string other_rabi_othercrop_reduction_gw_demand4 { get; set; }

        public string other_rabi_othercrop_name5 { get; set; }
        public string other_rabi_othercrop_area5 { get; set; }
        public string other_rabi_othercrop_invention_proposed5 { get; set; }
        public string other_rabi_othercrop_water_saving5 { get; set; }
        public string other_rabi_othercrop_water_req5 { get; set; }
        public string other_rabi_othercrop_waterdemand5 { get; set; }
        public string other_rabi_othercrop_reduction_gw_demand5 { get; set; }

        // 10 new othercrops other rabi

        //public string other_rabi_othercrop_name6 { get; set; }
        //public string other_rabi_othercrop_area6 { get; set; }
        //public string other_rabi_othercrop_invention_proposed6 { get; set; }
        //public string other_rabi_othercrop_water_saving6 { get; set; }
        //public string other_rabi_othercrop_water_req6 { get; set; }
        //public string other_rabi_othercrop_waterdemand6 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand6 { get; set; }

        //public string other_rabi_othercrop_name7 { get; set; }
        //public string other_rabi_othercrop_area7 { get; set; }
        //public string other_rabi_othercrop_invention_proposed7 { get; set; }
        //public string other_rabi_othercrop_water_saving7 { get; set; }
        //public string other_rabi_othercrop_water_req7 { get; set; }
        //public string other_rabi_othercrop_waterdemand7 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand7 { get; set; }

        //public string other_rabi_othercrop_name8 { get; set; }
        //public string other_rabi_othercrop_area8 { get; set; }
        //public string other_rabi_othercrop_invention_proposed8 { get; set; }
        //public string other_rabi_othercrop_water_saving8 { get; set; }
        //public string other_rabi_othercrop_water_req8 { get; set; }
        //public string other_rabi_othercrop_waterdemand8 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand8 { get; set; }

        //public string other_rabi_othercrop_name9 { get; set; }
        //public string other_rabi_othercrop_area9 { get; set; }
        //public string other_rabi_othercrop_invention_proposed9 { get; set; }
        //public string other_rabi_othercrop_water_saving9 { get; set; }
        //public string other_rabi_othercrop_water_req9 { get; set; }
        //public string other_rabi_othercrop_waterdemand9 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand9 { get; set; }

        //public string other_rabi_othercrop_name10 { get; set; }
        //public string other_rabi_othercrop_area10 { get; set; }
        //public string other_rabi_othercrop_invention_proposed10 { get; set; }
        //public string other_rabi_othercrop_water_saving10 { get; set; }
        //public string other_rabi_othercrop_water_req10 { get; set; }
        //public string other_rabi_othercrop_waterdemand10 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand10 { get; set; }

        //public string other_rabi_othercrop_name11 { get; set; }
        //public string other_rabi_othercrop_area11 { get; set; }
        //public string other_rabi_othercrop_invention_proposed11 { get; set; }
        //public string other_rabi_othercrop_water_saving11 { get; set; }
        //public string other_rabi_othercrop_water_req11 { get; set; }
        //public string other_rabi_othercrop_waterdemand11 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand11 { get; set; }

        //public string other_rabi_othercrop_name12 { get; set; }
        //public string other_rabi_othercrop_area12 { get; set; }
        //public string other_rabi_othercrop_invention_proposed12 { get; set; }
        //public string other_rabi_othercrop_water_saving12 { get; set; }
        //public string other_rabi_othercrop_water_req12 { get; set; }
        //public string other_rabi_othercrop_waterdemand12 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand12 { get; set; }

        //public string other_rabi_othercrop_name13 { get; set; }
        //public string other_rabi_othercrop_area13 { get; set; }
        //public string other_rabi_othercrop_invention_proposed13 { get; set; }
        //public string other_rabi_othercrop_water_saving13 { get; set; }
        //public string other_rabi_othercrop_water_req13 { get; set; }
        //public string other_rabi_othercrop_waterdemand13 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand13 { get; set; }

        //public string other_rabi_othercrop_name14 { get; set; }
        //public string other_rabi_othercrop_area14 { get; set; }
        //public string other_rabi_othercrop_invention_proposed14 { get; set; }
        //public string other_rabi_othercrop_water_saving14 { get; set; }
        //public string other_rabi_othercrop_water_req14 { get; set; }
        //public string other_rabi_othercrop_waterdemand14 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand14 { get; set; }

        //public string other_rabi_othercrop_name15 { get; set; }
        //public string other_rabi_othercrop_area15 { get; set; }
        //public string other_rabi_othercrop_invention_proposed15 { get; set; }
        //public string other_rabi_othercrop_water_saving15 { get; set; }
        //public string other_rabi_othercrop_water_req15 { get; set; }
        //public string other_rabi_othercrop_waterdemand15 { get; set; }
        //public string other_rabi_othercrop_reduction_gw_demand15 { get; set; }
        //summer add crop
        public string other_summer_othercrop_name1 { get; set; }
        public string other_summer_othercrop_area1 { get; set; }
        public string other_summer_othercrop_invention_proposed1 { get; set; }
        public string other_summer_othercrop_water_saving1 { get; set; }
        public string other_summer_othercrop_water_req1 { get; set; }
        public string other_summer_othercrop_waterdemand1 { get; set; }
        public string other_summer_othercrop_reduction_gw_demand1 { get; set; }

        public string other_summer_othercrop_name2 { get; set; }
        public string other_summer_othercrop_area2 { get; set; }
        public string other_summer_othercrop_invention_proposed2 { get; set; }
        public string other_summer_othercrop_water_saving2 { get; set; }
        public string other_summer_othercrop_water_req2 { get; set; }
        public string other_summer_othercrop_waterdemand2 { get; set; }
        public string other_summer_othercrop_reduction_gw_demand2 { get; set; }

        public string other_summer_othercrop_name3 { get; set; }
        public string other_summer_othercrop_area3 { get; set; }
        public string other_summer_othercrop_invention_proposed3 { get; set; }
        public string other_summer_othercrop_water_saving3 { get; set; }
        public string other_summer_othercrop_water_req3 { get; set; }
        public string other_summer_othercrop_waterdemand3 { get; set; }
        public string other_summer_othercrop_reduction_gw_demand3 { get; set; }

        public string other_summer_othercrop_name4 { get; set; }
        public string other_summer_othercrop_area4 { get; set; }
        public string other_summer_othercrop_invention_proposed4 { get; set; }
        public string other_summer_othercrop_water_saving4 { get; set; }
        public string other_summer_othercrop_water_req4 { get; set; }
        public string other_summer_othercrop_waterdemand4 { get; set; }
        public string other_summer_othercrop_reduction_gw_demand4 { get; set; }

        public string other_summer_othercrop_name5 { get; set; }
        public string other_summer_othercrop_area5 { get; set; }
        public string other_summer_othercrop_invention_proposed5 { get; set; }
        public string other_summer_othercrop_water_saving5 { get; set; }
        public string other_summer_othercrop_water_req5 { get; set; }
        public string other_summer_othercrop_waterdemand5 { get; set; }
        public string other_summer_othercrop_reduction_gw_demand5 { get; set; }

        //10 new othercrops ofother summer

        //public string other_summer_othercrop_name6 { get; set; }
        //public string other_summer_othercrop_area6 { get; set; }
        //public string other_summer_othercrop_invention_proposed6 { get; set; }
        //public string other_summer_othercrop_water_saving6 { get; set; }
        //public string other_summer_othercrop_water_req6 { get; set; }
        //public string other_summer_othercrop_waterdemand6 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand6 { get; set; }

        //public string other_summer_othercrop_name7 { get; set; }
        //public string other_summer_othercrop_area7 { get; set; }
        //public string other_summer_othercrop_invention_proposed7 { get; set; }
        //public string other_summer_othercrop_water_saving7 { get; set; }
        //public string other_summer_othercrop_water_req7 { get; set; }
        //public string other_summer_othercrop_waterdemand7 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand7 { get; set; }

        //public string other_summer_othercrop_name8 { get; set; }
        //public string other_summer_othercrop_area8 { get; set; }
        //public string other_summer_othercrop_invention_proposed8 { get; set; }
        //public string other_summer_othercrop_water_saving8 { get; set; }
        //public string other_summer_othercrop_water_req8 { get; set; }
        //public string other_summer_othercrop_waterdemand8 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand8 { get; set; }

        //public string other_summer_othercrop_name9 { get; set; }
        //public string other_summer_othercrop_area9 { get; set; }
        //public string other_summer_othercrop_invention_proposed9 { get; set; }
        //public string other_summer_othercrop_water_saving9 { get; set; }
        //public string other_summer_othercrop_water_req9 { get; set; }
        //public string other_summer_othercrop_waterdemand9 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand9 { get; set; }

        //public string other_summer_othercrop_name10 { get; set; }
        //public string other_summer_othercrop_area10 { get; set; }
        //public string other_summer_othercrop_invention_proposed10 { get; set; }
        //public string other_summer_othercrop_water_saving10 { get; set; }
        //public string other_summer_othercrop_water_req10 { get; set; }
        //public string other_summer_othercrop_waterdemand10 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand10 { get; set; }

        //public string other_summer_othercrop_name11 { get; set; }
        //public string other_summer_othercrop_area11 { get; set; }
        //public string other_summer_othercrop_invention_proposed11 { get; set; }
        //public string other_summer_othercrop_water_saving11 { get; set; }
        //public string other_summer_othercrop_water_req11 { get; set; }
        //public string other_summer_othercrop_waterdemand11 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand11 { get; set; }

        //public string other_summer_othercrop_name12 { get; set; }
        //public string other_summer_othercrop_area12 { get; set; }
        //public string other_summer_othercrop_invention_proposed12 { get; set; }
        //public string other_summer_othercrop_water_saving12 { get; set; }
        //public string other_summer_othercrop_water_req12 { get; set; }
        //public string other_summer_othercrop_waterdemand12 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand12 { get; set; }

        //public string other_summer_othercrop_name13 { get; set; }
        //public string other_summer_othercrop_area13 { get; set; }
        //public string other_summer_othercrop_invention_proposed13 { get; set; }
        //public string other_summer_othercrop_water_saving13 { get; set; }
        //public string other_summer_othercrop_water_req13 { get; set; }
        //public string other_summer_othercrop_waterdemand13 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand13 { get; set; }

        //public string other_summer_othercrop_name14 { get; set; }
        //public string other_summer_othercrop_area14 { get; set; }
        //public string other_summer_othercrop_invention_proposed14 { get; set; }
        //public string other_summer_othercrop_water_saving14 { get; set; }
        //public string other_summer_othercrop_water_req14 { get; set; }
        //public string other_summer_othercrop_waterdemand14 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand14 { get; set; }

        //public string other_summer_othercrop_name15 { get; set; }
        //public string other_summer_othercrop_area15 { get; set; }
        //public string other_summer_othercrop_invention_proposed15 { get; set; }
        //public string other_summer_othercrop_water_saving15 { get; set; }
        //public string other_summer_othercrop_water_req15 { get; set; }
        //public string other_summer_othercrop_waterdemand15 { get; set; }
        //public string other_summer_othercrop_reduction_gw_demand15 { get; set; }
    }

    [Table("abhy_demandside_crop_diversification_saveddata", Schema = "public")]
    public class abhy_demandside_crop_diversification_saveddata
    {

        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }

        public string officer_name { get; set; }
        public string original_kharif_paddy_crop_area { get; set; }
        public string original_kharif_paddy_water_req { get; set; }
        public string original_kharif_paddy_fundingsource { get; set; }
        public string original_kharif_paddy_waterdemand { get; set; }

        public string original_kharif_ragi_crop_area { get; set; }
        public string original_kharif_ragi_water_req { get; set; }
        public string original_kharif_ragi_fundingsource { get; set; }
        public string original_kharif_ragi_waterdemand { get; set; }

        public string original_kharif_groundnut_crop_area { get; set; }
        public string original_kharif_groundnut_water_req { get; set; }
        public string original_kharif_groundnut_fundingsource { get; set; }
        public string original_kharif_groundnut_waterdemand { get; set; }

        public string original_kharif_sugarcane_crop_area { get; set; }
        public string original_kharif_sugarcane_water_req { get; set; }
        public string original_kharif_sugarcane_fundingsource { get; set; }
        public string original_kharif_sugarcane_waterdemand { get; set; }

        public string original_kharif_tomoto_crop_area { get; set; }
        public string original_kharif_tomoto_water_req { get; set; }
        public string original_kharif_tomoto_fundingsource { get; set; }
        public string original_kharif_tomoto_waterdemand { get; set; }

        public string original_kharif_cabbage_crop_area { get; set; }
        public string original_kharif_cabbage_water_req { get; set; }
        public string original_kharif_cabbage_fundingsource { get; set; }
        public string original_kharif_cabbage_waterdemand { get; set; }

        public string original_kharif_beans_crop_area { get; set; }
        public string original_kharif_beans_water_req { get; set; }
        public string original_kharif_beans_fundingsource { get; set; }
        public string original_kharif_beans_waterdemand { get; set; }

        public string original_kharif_floriculture_crop_area { get; set; }
        public string original_kharif_floriculture_water_req { get; set; }
        public string original_kharif_floriculture_fundingsource { get; set; }
        public string original_kharif_floriculture_waterdemand { get; set; }

        public string original_kharif_sericulture_crop_area { get; set; }
        public string original_kharif_sericulture_water_req { get; set; }
        public string original_kharif_sericulture_fundingsource { get; set; }
        public string original_kharif_sericulture_waterdemand { get; set; }

        public string original_kharif_cucumber_crop_area { get; set; }
        public string original_kharif_cucumber_water_req { get; set; }
        public string original_kharif_cucumber_fundingsource { get; set; }
        public string original_kharif_cucumber_waterdemand { get; set; }

        public string original_kharif_banana_crop_area { get; set; }
        public string original_kharif_banana_water_req { get; set; }
        public string original_kharif_banana_fundingsource { get; set; }
        public string original_kharif_banana_waterdemand { get; set; }

        public string original_kharif_fodder_crop_area { get; set; }
        public string original_kharif_fodder_water_req { get; set; }
        public string original_kharif_fodder_fundingsource { get; set; }
        public string original_kharif_fodder_waterdemand { get; set; }

        public string original_kharif_maize_crop_area { get; set; }
        public string original_kharif_maize_water_req { get; set; }
        public string original_kharif_maize_fundingsource { get; set; }
        public string original_kharif_maize_waterdemand { get; set; }

        public string original_kharif_potato_crop_area { get; set; }
        public string original_kharif_potato_water_req { get; set; }
        public string original_kharif_potato_fundingsource { get; set; }
        public string original_kharif_potato_waterdemand { get; set; }

        public string original_kharif_chillies_crop_area { get; set; }
        public string original_kharif_chillies_water_req { get; set; }
        public string original_kharif_chillies_fundingsource { get; set; }
        public string original_kharif_chillies_waterdemand { get; set; }

        public string original_kharif_cotton_crop_area { get; set; }
        public string original_kharif_cotton_water_req { get; set; }
        public string original_kharif_cotton_fundingsource { get; set; }
        public string original_kharif_cotton_waterdemand { get; set; }

        public string original_kharif_melon_crop_area { get; set; }
        public string original_kharif_melon_water_req { get; set; }
        public string original_kharif_melon_fundingsource { get; set; }
        public string original_kharif_melon_waterdemand { get; set; }

        public string original_kharif_citrus_crop_area { get; set; }
        public string original_kharif_citrus_water_req { get; set; }
        public string original_kharif_citrus_fundingsource { get; set; }
        public string original_kharif_citrus_waterdemand { get; set; }

        public string original_kharif_peanut_crop_area { get; set; }
        public string original_kharif_peanut_water_req { get; set; }
        public string original_kharif_peanut_fundingsource { get; set; }
        public string original_kharif_peanut_waterdemand { get; set; }

        public string original_kharif_horticulture_crop_area { get; set; }
        public string original_kharif_horticulture_water_req { get; set; }
        public string original_kharif_horticulture_fundingsource { get; set; }
        public string original_kharif_horticulture_waterdemand { get; set; }

        public string original_kharif_total_waterdemand { get; set; }
        public string original_kharif_total_gw_reduc_waterdemand { get; set; }

        public string original_rabi_sericulture_crop_area { get; set; }
        public string original_rabi_sericulture_water_req { get; set; }
        public string original_rabi_sericulture_fundingsource { get; set; }
        public string original_rabi_sericulture_waterdemand { get; set; }

        public string original_rabi_tomoto_crop_area { get; set; }
        public string original_rabi_tomoto_water_req { get; set; }
        public string original_rabi_tomoto_fundingsource { get; set; }
        public string original_rabi_tomoto_waterdemand { get; set; }

        public string original_rabi_cabbage_crop_area { get; set; }
        public string original_rabi_cabbage_water_req { get; set; }
        public string original_rabi_cabbage_fundingsource { get; set; }
        public string original_rabi_cabbage_waterdemand { get; set; }

        public string original_rabi_beans_crop_area { get; set; }
        public string original_rabi_beans_water_req { get; set; }
        public string original_rabi_beans_fundingsource { get; set; }
        public string original_rabi_beans_waterdemand { get; set; }

        public string original_rabi_floriculture_crop_area { get; set; }
        public string original_rabi_floriculture_water_req { get; set; }
        public string original_rabi_floriculture_fundingsource { get; set; }
        public string original_rabi_floriculture_waterdemand { get; set; }

        public string original_rabi_potato_crop_area { get; set; }
        public string original_rabi_potato_water_req { get; set; }
        public string original_rabi_potato_fundingsource { get; set; }
        public string original_rabi_potato_waterdemand { get; set; }

        public string original_rabi_cucumber_crop_area { get; set; }
        public string original_rabi_cucumber_water_req { get; set; }
        public string original_rabi_cucumber_fundingsource { get; set; }
        public string original_rabi_cucumber_waterdemand { get; set; }

        public string original_rabi_ragi_crop_area { get; set; }
        public string original_rabi_ragi_water_req { get; set; }
        public string original_rabi_ragi_fundingsource { get; set; }
        public string original_rabi_ragi_waterdemand { get; set; }

        public string original_rabi_sugarcane_crop_area { get; set; }
        public string original_rabi_sugarcane_water_req { get; set; }
        public string original_rabi_sugarcane_fundingsource { get; set; }
        public string original_rabi_sugarcane_waterdemand { get; set; }

        public string original_rabi_maize_crop_area { get; set; }
        public string original_rabi_maize_water_req { get; set; }
        public string original_rabi_maize_fundingsource { get; set; }
        public string original_rabi_maize_waterdemand { get; set; }

        public string original_rabi_fodder_crop_area { get; set; }
        public string original_rabi_fodder_water_req { get; set; }
        public string original_rabi_fodder_fundingsource { get; set; }
        public string original_rabi_fodder_waterdemand { get; set; }

        public string original_rabi_paddy_crop_area { get; set; }
        public string original_rabi_paddy_water_req { get; set; }
        public string original_rabi_paddy_fundingsource { get; set; }
        public string original_rabi_paddy_waterdemand { get; set; }

        public string original_rabi_alfalfa_crop_area { get; set; }
        public string original_rabi_alfalfa_water_req { get; set; }
        public string original_rabi_alfalfa_fundingsource { get; set; }
        public string original_rabi_alfalfa_waterdemand { get; set; }

        public string original_rabi_onion_crop_area { get; set; }
        public string original_rabi_onion_water_req { get; set; }
        public string original_rabi_onion_fundingsource { get; set; }
        public string original_rabi_onion_waterdemand { get; set; }

        public string original_rabi_horticulture_crop_area { get; set; }
        public string original_rabi_horticulture_water_req { get; set; }
        public string original_rabi_horticulture_fundingsource { get; set; }
        public string original_rabi_horticulture_waterdemand { get; set; }

        public string original_rabi_sunflower_crop_area { get; set; }
        public string original_rabi_sunflower_water_req { get; set; }
        public string original_rabi_sunflower_fundingsource { get; set; }
        public string original_rabi_sunflower_waterdemand { get; set; }

        public string original_rabi_total_waterdemand { get; set; }
        public string original_rabi_total_gw_reduc_waterdemand { get; set; }

        public string original_summer_sericulture_crop_area { get; set; }
        public string original_summer_sericulture_water_req { get; set; }
        public string original_summer_sericulture_fundingsource { get; set; }
        public string original_summer_sericulture_waterdemand { get; set; }

        public string original_summer_tomoto_crop_area { get; set; }
        public string original_summer_tomoto_water_req { get; set; }
        public string original_summer_tomoto_fundingsource { get; set; }
        public string original_summer_tomoto_waterdemand { get; set; }

        public string original_summer_cabbage_crop_area { get; set; }
        public string original_summer_cabbage_water_req { get; set; }
        public string original_summer_cabbage_fundingsource { get; set; }
        public string original_summer_cabbage_waterdemand { get; set; }

        public string original_summer_beans_crop_area { get; set; }
        public string original_summer_beans_water_req { get; set; }
        public string original_summer_beans_fundingsource { get; set; }
        public string original_summer_beans_waterdemand { get; set; }

        public string original_summer_floriculture_crop_area { get; set; }
        public string original_summer_floriculture_water_req { get; set; }
        public string original_summer_floriculture_fundingsource { get; set; }
        public string original_summer_floriculture_waterdemand { get; set; }

        public string original_summer_maize_crop_area { get; set; }
        public string original_summer_maize_water_req { get; set; }
        public string original_summer_maize_fundingsource { get; set; }
        public string original_summer_maize_waterdemand { get; set; }

        public string original_summer_fodder_crop_area { get; set; }
        public string original_summer_fodder_water_req { get; set; }
        public string original_summer_fodder_fundingsource { get; set; }
        public string original_summer_fodder_waterdemand { get; set; }

        public string original_summer_sugarcane_crop_area { get; set; }
        public string original_summer_sugarcane_water_req { get; set; }
        public string original_summer_sugarcane_fundingsource { get; set; }
        public string original_summer_sugarcane_waterdemand { get; set; }

        public string original_summer_total_waterdemand { get; set; }
        public string original_summer_total_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_paddy_crop_area { get; set; }
        public string changed_kharif_paddy_crop_water_req { get; set; }
        public string changed_kharif_paddy_fundingsource { get; set; }
        public string changed_kharif_paddy_waterdemand { get; set; }
        public string changed_kharif_paddy_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_ragi_crop_area { get; set; }
        public string changed_kharif_ragi_crop_water_req { get; set; }
        public string changed_kharif_ragi_fundingsource { get; set; }
        public string changed_kharif_ragi_waterdemand { get; set; }
        public string changed_kharif_ragi_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_groundnut_crop_area { get; set; }
        public string changed_kharif_groundnut_water_req { get; set; }
        public string changed_kharif_groundnut_fundingsource { get; set; }
        public string changed_kharif_groundnut_waterdemand { get; set; }
        public string changed_kharif_groundnut_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_sugarcane_crop_area { get; set; }
        public string changed_kharif_sugarcane_water_req { get; set; }
        public string changed_kharif_sugarcane_fundingsource { get; set; }
        public string changed_kharif_sugarcane_waterdemand { get; set; }
        public string changed_kharif_sugarcane_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_tomoto_crop_area { get; set; }
        public string changed_kharif_tomoto_water_req { get; set; }
        public string changed_kharif_tomoto_fundingsource { get; set; }
        public string changed_kharif_tomoto_waterdemand { get; set; }
        public string changed_kharif_tomoto_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_cabbage_crop_area { get; set; }
        public string changed_kharif_cabbage_water_req { get; set; }
        public string changed_kharif_cabbage_fundingsource { get; set; }
        public string changed_kharif_cabbage_waterdemand { get; set; }
        public string changed_kharif_cabbage_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_beans_crop_area { get; set; }
        public string changed_kharif_beans_water_req { get; set; }
        public string changed_kharif_beans_fundingsource { get; set; }
        public string changed_kharif_beans_waterdemand { get; set; }
        public string changed_kharif_beans_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_floriculture_crop_area { get; set; }
        public string changed_kharif_floriculture_water_req { get; set; }
        public string changed_kharif_floriculture_fundingsource { get; set; }
        public string changed_kharif_floriculture_waterdemand { get; set; }
        public string changed_kharif_floriculture_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_sericulture_crop_area { get; set; }
        public string changed_kharif_sericulture_water_req { get; set; }
        public string changed_kharif_sericulture_fundingsource { get; set; }
        public string changed_kharif_sericulture_waterdemand { get; set; }
        public string changed_kharif_sericulture_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_cucumber_crop_area { get; set; }
        public string changed_kharif_cucumber_water_req { get; set; }
        public string changed_kharif_cucumber_fundingsource { get; set; }
        public string changed_kharif_cucumber_waterdemand { get; set; }
        public string changed_kharif_cucumber_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_banana_crop_area { get; set; }
        public string changed_kharif_banana_water_req { get; set; }
        public string changed_kharif_banana_fundingsource { get; set; }
        public string changed_kharif_banana_waterdemand { get; set; }
        public string changed_kharif_banana_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_fodder_crop_area { get; set; }
        public string changed_kharif_fodder_water_req { get; set; }
        public string changed_kharif_fodder_fundingsource { get; set; }
        public string changed_kharif_fodder_waterdemand { get; set; }
        public string changed_kharif_fodder_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_maize_crop_area { get; set; }
        public string changed_kharif_maize_water_req { get; set; }
        public string changed_kharif_maize_fundingsource { get; set; }
        public string changed_kharif_maize_waterdemand { get; set; }
        public string changed_kharif_maize_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_potato_crop_area { get; set; }
        public string changed_kharif_potato_water_req { get; set; }
        public string changed_kharif_potato_fundingsource { get; set; }
        public string changed_kharif_potato_waterdemand { get; set; }
        public string changed_kharif_potato_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_chillies_crop_area { get; set; }
        public string changed_kharif_chillies_water_req { get; set; }
        public string changed_kharif_chillies_fundingsource { get; set; }
        public string changed_kharif_chillies_waterdemand { get; set; }
        public string changed_kharif_chillies_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_cotton_crop_area { get; set; }
        public string changed_kharif_cotton_water_req { get; set; }
        public string changed_kharif_cotton_fundingsource { get; set; }
        public string changed_kharif_cotton_waterdemand { get; set; }
        public string changed_kharif_cotton_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_melon_crop_area { get; set; }
        public string changed_kharif_melon_water_req { get; set; }
        public string changed_kharif_melon_fundingsource { get; set; }
        public string changed_kharif_melon_waterdemand { get; set; }
        public string changed_kharif_melon_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_citrus_crop_area { get; set; }
        public string changed_kharif_citrus_water_req { get; set; }
        public string changed_kharif_citrus_fundingsource { get; set; }
        public string changed_kharif_citrus_waterdemand { get; set; }
        public string changed_kharif_citrus_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_peanut_crop_area { get; set; }
        public string changed_kharif_peanut_water_req { get; set; }
        public string changed_kharif_peanut_fundingsource { get; set; }
        public string changed_kharif_peanut_waterdemand { get; set; }
        public string changed_kharif_peanut_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_horticulture_crop_area { get; set; }
        public string changed_kharif_horticulture_water_req { get; set; }
        public string changed_kharif_horticulture_fundingsource { get; set; }
        public string changed_kharif_horticulture_waterdemand { get; set; }
        public string changed_kharif_horticulture_gw_reduc_waterdemand { get; set; }

        public string changed_kharif_total_waterdemand { get; set; }
        public string changed_kharif_total_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_sericulture_crop_area { get; set; }
        public string changed_rabi_sericulture_water_req { get; set; }
        public string changed_rabi_sericulture_fundingsource { get; set; }
        public string changed_rabi_sericulture_waterdemand { get; set; }
        public string changed_rabi_sericulture_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_tomoto_crop_area { get; set; }
        public string changed_rabi_tomoto_water_req { get; set; }
        public string changed_rabi_tomoto_fundingsource { get; set; }
        public string changed_rabi_tomoto_waterdemand { get; set; }
        public string changed_rabi_tomoto_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_cabbage_crop_area { get; set; }
        public string changed_rabi_cabbage_water_req { get; set; }
        public string changed_rabi_cabbage_fundingsource { get; set; }
        public string changed_rabi_cabbage_waterdemand { get; set; }
        public string changed_rabi_cabbage_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_beans_crop_area { get; set; }
        public string changed_rabi_beans_water_req { get; set; }
        public string changed_rabi_beans_fundingsource { get; set; }
        public string changed_rabi_beans_waterdemand { get; set; }
        public string changed_rabi_beans_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_floriculture_crop_area { get; set; }
        public string changed_rabi_floriculture_water_req { get; set; }
        public string changed_rabi_floriculture_fundingsource { get; set; }
        public string changed_rabi_floriculture_waterdemand { get; set; }
        public string changed_rabi_floriculture_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_potato_crop_area { get; set; }
        public string changed_rabi_potato_water_req { get; set; }
        public string changed_rabi_potato_fundingsource { get; set; }
        public string changed_rabi_potato_waterdemand { get; set; }
        public string changed_rabi_potato_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_cucumber_crop_area { get; set; }
        public string changed_rabi_cucumber_water_req { get; set; }
        public string changed_rabi_cucumber_fundingsource { get; set; }
        public string changed_rabi_cucumber_waterdemand { get; set; }
        public string changed_rabi_cucumber_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_ragi_crop_area { get; set; }
        public string changed_rabi_ragi_water_req { get; set; }
        public string changed_rabi_ragi_fundingsource { get; set; }
        public string changed_rabi_ragi_waterdemand { get; set; }
        public string changed_rabi_ragi_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_sugarcane_crop_area { get; set; }
        public string changed_rabi_sugarcane_water_req { get; set; }
        public string changed_rabi_sugarcane_fundingsource { get; set; }
        public string changed_rabi_sugarcane_waterdemand { get; set; }
        public string changed_rabi_sugarcane_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_maize_crop_area { get; set; }
        public string changed_rabi_maize_water_req { get; set; }
        public string changed_rabi_maize_fundingsource { get; set; }
        public string changed_rabi_maize_waterdemand { get; set; }
        public string changed_rabi_maize_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_fodder_crop_area { get; set; }
        public string changed_rabi_fodder_water_req { get; set; }
        public string changed_rabi_fodder_fundingsource { get; set; }
        public string changed_rabi_fodder_waterdemand { get; set; }
        public string changed_rabi_fodder_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_paddy_crop_area { get; set; }
        public string changed_rabi_paddy_water_req { get; set; }
        public string changed_rabi_paddy_fundingsource { get; set; }
        public string changed_rabi_paddy_waterdemand { get; set; }
        public string changed_rabi_paddy_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_alfalfa_crop_area { get; set; }
        public string changed_rabi_alfalfa_water_req { get; set; }
        public string changed_rabi_alfalfa_fundingsource { get; set; }
        public string changed_rabi_alfalfa_waterdemand { get; set; }
        public string changed_rabi_alfalfa_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_onion_crop_area { get; set; }
        public string changed_rabi_onion_water_req { get; set; }
        public string changed_rabi_onion_fundingsource { get; set; }
        public string changed_rabi_onion_waterdemand { get; set; }
        public string changed_rabi_onion_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_horticulture_crop_area { get; set; }
        public string changed_rabi_horticulture_water_req { get; set; }
        public string changed_rabi_horticulture_fundingsource { get; set; }
        public string changed_rabi_horticulture_waterdemand { get; set; }
        public string changed_rabi_horticulture_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_sunflower_crop_area { get; set; }
        public string changed_rabi_sunflower_water_req { get; set; }
        public string changed_rabi_sunflower_fundingsource { get; set; }
        public string changed_rabi_sunflower_waterdemand { get; set; }
        public string changed_rabi_sunflower_gw_reduc_waterdemand { get; set; }

        public string changed_rabi_total_waterdemand { get; set; }
        public string changed_rabi_total_gw_reduc_waterdemand { get; set; }

        public string changed_summer_sericulture_crop_area { get; set; }
        public string changed_summer_sericulture_water_req { get; set; }
        public string changed_summer_sericulture_fundingsource { get; set; }
        public string changed_summer_sericulture_waterdemand { get; set; }
        public string changed_summer_sericulture_gw_reduc_waterdemand { get; set; }

        public string changed_summer_tomoto_crop_area { get; set; }
        public string changed_summer_tomoto_water_req { get; set; }
        public string changed_summer_tomoto_fundingsource { get; set; }
        public string changed_summer_tomoto_waterdemand { get; set; }
        public string changed_summer_tomoto_gw_reduc_waterdemand { get; set; }

        public string changed_summer_cabbage_crop_area { get; set; }
        public string changed_summer_cabbage_water_req { get; set; }
        public string changed_summer_cabbage_fundingsource { get; set; }
        public string changed_summer_cabbage_waterdemand { get; set; }
        public string changed_summer_cabbage_gw_reduc_waterdemand { get; set; }

        public string changed_summer_beans_crop_area { get; set; }
        public string changed_summer_beans_water_req { get; set; }
        public string changed_summer_beans_fundingsource { get; set; }
        public string changed_summer_beans_waterdemand { get; set; }
        public string changed_summer_beans_gw_reduc_waterdemand { get; set; }

        public string changed_summer_floriculture_crop_area { get; set; }
        public string changed_summer_floriculture_water_req { get; set; }
        public string changed_summer_floriculture_fundingsource { get; set; }
        public string changed_summer_floriculture_waterdemand { get; set; }
        public string changed_summer_floriculture_gw_reduc_waterdemand { get; set; }

        public string changed_summer_maize_crop_area { get; set; }
        public string changed_summer_maize_water_req { get; set; }
        public string changed_summer_maize_fundingsource { get; set; }
        public string changed_summer_maize_waterdemand { get; set; }
        public string changed_summer_maize_gw_reduc_waterdemand { get; set; }

        public string changed_summer_fodder_crop_area { get; set; }
        public string changed_summer_fodder_water_req { get; set; }
        public string changed_summer_fodder_fundingsource { get; set; }
        public string changed_summer_fodder_waterdemand { get; set; }
        public string changed_summer_fodder_gw_reduc_waterdemand { get; set; }

        public string changed_summer_sugarcane_crop_area { get; set; }
        public string changed_summer_sugarcane_water_req { get; set; }
        public string changed_summer_sugarcane_fundingsource { get; set; }
        public string changed_summer_sugarcane_waterdemand { get; set; }
        public string changed_summer_sugarcane_gw_reduc_waterdemand { get; set; }

        public string changed_summer_total_waterdemand { get; set; }
        public string changed_summer_total_gw_reduc_waterdemand { get; set; }
        public string crop_diversification_annual_reduction_waterdemand { get; set; }
        /// <summary>
        /// /anual total
        /// </summary>
        public string crop_total_annual_waterdemand { get; set; }


        public string crop_other_funding_source { get; set; }

        //estmated cost
        public string crop_approx_estimated_cost { get; set; }
        public string crop_cost_type { get; set; }

        //horiculture
        public string original_summer_horticulture_crop_area { get; set; }
        public string original_summer_horticulture_water_req { get; set; }
        public string original_summer_horticulture_waterdemand { get; set; }

        public string changed_summer_horticulture_crop_area { get; set; }
        public string changed_summer_horticulture_water_req { get; set; }
        public string changed_summer_horticulture_waterdemand { get; set; }
        public string changed_summer_horticulture_reduction_gw_demand { get; set; }

        //other crops 5boxes original and changed

        public string original_kharif_othercrop_name1 { get; set; }
        public string original_kharif_othercrop_area1 { get; set; }
        public string original_kharif_horticulture_water_req1 { get; set; }
        public string original_kharif_horticulture_waterdemand1 { get; set; }

        public string original_kharif_othercrop_name2 { get; set; }
        public string original_kharif_othercrop_area2 { get; set; }
        public string original_kharif_horticulture_water_req2 { get; set; }
        public string original_kharif_horticulture_waterdemand2 { get; set; }

        public string original_kharif_othercrop_name3 { get; set; }
        public string original_kharif_othercrop_area3 { get; set; }
        public string original_kharif_horticulture_water_req3 { get; set; }
        public string original_kharif_horticulture_waterdemand3 { get; set; }

        public string original_kharif_othercrop_name4 { get; set; }
        public string original_kharif_othercrop_area4 { get; set; }
        public string original_kharif_horticulture_water_req4 { get; set; }
        public string original_kharif_horticulture_waterdemand4 { get; set; }

        public string original_kharif_othercrop_name5 { get; set; }
        public string original_kharif_othercrop_area5 { get; set; }
        public string original_kharif_horticulture_water_req5 { get; set; }
        public string original_kharif_horticulture_waterdemand5 { get; set; }

        public string original_rabi_othercrop_name1 { get; set; }
        public string original_rabi_othercrop_area1 { get; set; }
        public string original_rabi_horticulture_water_req1 { get; set; }
        public string original_rabi_horticulture_waterdemand1 { get; set; }

        public string original_rabi_othercrop_name2 { get; set; }
        public string original_rabi_othercrop_area2 { get; set; }
        public string original_rabi_horticulture_water_req2 { get; set; }
        public string original_rabi_horticulture_waterdemand2 { get; set; }

        public string original_rabi_othercrop_name3 { get; set; }
        public string original_rabi_othercrop_area3 { get; set; }
        public string original_rabi_horticulture_water_req3 { get; set; }
        public string original_rabi_horticulture_waterdemand3 { get; set; }

        public string original_rabi_othercrop_name4 { get; set; }
        public string original_rabi_othercrop_area4 { get; set; }
        public string original_rabi_horticulture_water_req4 { get; set; }
        public string original_rabi_horticulture_waterdemand4 { get; set; }

        public string original_rabi_othercrop_name5 { get; set; }
        public string original_rabi_othercrop_area5 { get; set; }
        public string original_rabi_horticulture_water_req5 { get; set; }
        public string original_rabi_horticulture_waterdemand5 { get; set; }

        public string original_summer_othercrop_name1 { get; set; }
        public string original_summer_othercrop_area1 { get; set; }
        public string original_summer_horticulture_water_req1 { get; set; }
        public string original_summer_horticulture_waterdemand1 { get; set; }

        public string original_summer_othercrop_name2 { get; set; }
        public string original_summer_othercrop_area2 { get; set; }
        public string original_summer_horticulture_water_req2 { get; set; }
        public string original_summer_horticulture_waterdemand2 { get; set; }

        public string original_summer_othercrop_name3 { get; set; }
        public string original_summer_othercrop_area3 { get; set; }
        public string original_summer_horticulture_water_req3 { get; set; }
        public string original_summer_horticulture_waterdemand3 { get; set; }


        public string original_summer_othercrop_name4 { get; set; }
        public string original_summer_othercrop_area4 { get; set; }
        public string original_summer_horticulture_water_req4 { get; set; }
        public string original_summer_horticulture_waterdemand4 { get; set; }

        public string original_summer_othercrop_name5 { get; set; }
        public string original_summer_othercrop_area5 { get; set; }
        public string original_summer_horticulture_water_req5 { get; set; }
        public string original_summer_horticulture_waterdemand5 { get; set; }


        public string changed_kharif_othercrop_name1 { get; set; }
        public string changed_kharif_croparea_area1 { get; set; }
        public string changed_kharif_horticulture_water_req1 { get; set; }
        public string changed_kharif_horticulture_waterdemand1 { get; set; }
        public string changed_kharif_horticulture_reduction_gw_demand1 { get; set; }

        public string changed_kharif_othercrop_name2 { get; set; }
        public string changed_kharif_croparea_area2 { get; set; }
        public string changed_kharif_horticulture_water_req2 { get; set; }
        public string changed_kharif_horticulture_waterdemand2 { get; set; }
        public string changed_kharif_horticulture_reduction_gw_demand2 { get; set; }

        public string changed_kharif_othercrop_name3 { get; set; }
        public string changed_kharif_croparea_area3 { get; set; }
        public string changed_kharif_horticulture_water_req3 { get; set; }
        public string changed_kharif_horticulture_waterdemand3 { get; set; }
        public string changed_kharif_horticulture_reduction_gw_demand3 { get; set; }

        public string changed_kharif_othercrop_name4 { get; set; }
        public string changed_kharif_croparea_area4 { get; set; }
        public string changed_kharif_horticulture_water_req4 { get; set; }
        public string changed_kharif_horticulture_waterdemand4 { get; set; }
        public string changed_kharif_horticulture_reduction_gw_demand4 { get; set; }

        public string changed_kharif_othercrop_name5 { get; set; }
        public string changed_kharif_croparea_area5 { get; set; }
        public string changed_kharif_horticulture_water_req5 { get; set; }
        public string changed_kharif_horticulture_waterdemand5 { get; set; }
        public string changed_kharif_horticulture_reduction_gw_demand5 { get; set; }

        public string changed_rabi_othercrop_name1 { get; set; }
        public string changed_rabi_croparea_area1 { get; set; }
        public string changed_rabi_horticulture_water_req1 { get; set; }
        public string changed_rabi_horticulture_waterdemand1 { get; set; }
        public string changed_rabi_horticulture_reduction_gw_demand1 { get; set; }

        public string changed_rabi_othercrop_name2 { get; set; }
        public string changed_rabi_croparea_area2 { get; set; }
        public string changed_rabi_horticulture_water_req2 { get; set; }
        public string changed_rabi_horticulture_waterdemand2 { get; set; }
        public string changed_rabi_horticulture_reduction_gw_demand2 { get; set; }

        public string changed_rabi_othercrop_name3 { get; set; }
        public string changed_rabi_croparea_area3 { get; set; }
        public string changed_rabi_horticulture_water_req3 { get; set; }
        public string changed_rabi_horticulture_waterdemand3 { get; set; }
        public string changed_rabi_horticulture_reduction_gw_demand3 { get; set; }

        public string changed_rabi_othercrop_name4 { get; set; }
        public string changed_rabi_croparea_area4 { get; set; }
        public string changed_rabi_horticulture_water_req4 { get; set; }
        public string changed_rabi_horticulture_waterdemand4 { get; set; }
        public string changed_rabi_horticulture_reduction_gw_demand4 { get; set; }

        public string changed_rabi_othercrop_name5 { get; set; }
        public string changed_rabi_croparea_area5 { get; set; }
        public string changed_rabi_horticulture_water_req5 { get; set; }
        public string changed_rabi_horticulture_waterdemand5 { get; set; }
        public string changed_rabi_horticulture_reduction_gw_demand5 { get; set; }

        public string changed_summer_othercrop_name1 { get; set; }
        public string changed_summer_croparea_area1 { get; set; }
        public string changed_summer_horticulture_water_req1 { get; set; }
        public string changed_summer_horticulture_waterdemand1 { get; set; }
        public string changed_summer_horticulture_reduction_gw_demand1 { get; set; }

        public string changed_summer_othercrop_name2 { get; set; }
        public string changed_summer_croparea_area2 { get; set; }
        public string changed_summer_horticulture_water_req2 { get; set; }
        public string changed_summer_horticulture_waterdemand2 { get; set; }
        public string changed_summer_horticulture_reduction_gw_demand2 { get; set; }

        public string changed_summer_othercrop_name3 { get; set; }
        public string changed_summer_croparea_area3 { get; set; }
        public string changed_summer_horticulture_water_req3 { get; set; }
        public string changed_summer_horticulture_waterdemand3 { get; set; }
        public string changed_summer_horticulture_reduction_gw_demand3 { get; set; }

        public string changed_summer_othercrop_name4 { get; set; }
        public string changed_summer_croparea_area4 { get; set; }
        public string changed_summer_horticulture_water_req4 { get; set; }
        public string changed_summer_horticulture_waterdemand4 { get; set; }
        public string changed_summer_horticulture_reduction_gw_demand4 { get; set; }

        public string changed_summer_othercrop_name5 { get; set; }
        public string changed_summer_croparea_area5 { get; set; }
        public string changed_summer_horticulture_water_req5 { get; set; }
        public string changed_summer_horticulture_waterdemand5 { get; set; }
        public string changed_summer_horticulture_reduction_gw_demand5 { get; set; }

    }

    [Table("abhy_gpdata_new", Schema = "public")]
    public class abhy_gpdata_new
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
    }

    [Table("abhy_wateravailability_new", Schema = "public")]
    public class abhy_wateravailability_new
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
        public string gw_rainfall_monsoon { get; set; }
        public string gw_rainfall_nonmonsoon { get; set; }
        public string gw_rainfal_tol_recharge { get; set; }
        public string gw_other_monsoon { get; set; }
        public string gw_other_nonmonsoon { get; set; }
        public string gw_other_tol_recharge { get; set; }
        public string total_gw_available { get; set; }
        public string sw_annual_rainfall { get; set; }
        public string sw_tol_water_avail { get; set; }
        public string sw_evapo { get; set; }
        public string sw_evapo_loses { get; set; }
        public string total_gw_racharge { get; set; }
        public string total_sw_availble { get; set; }
        public string sw_premonsoon_rainfall { get; set; }
        public string sw_postmonsoon_rainfall { get; set; }
        //new columns added
        public string noof_sw_storage_structures { get; set; }
        public string total_storage_capacity { get; set; }
        public string sw_available_for_use { get; set; }
        public string volume_of_runoff { get; set; }
        ///new columns
        public string natural_losses { get; set; }
        public string loss_percentage { get; set; }
        public string total_water_avaliable_utiilization { get; set; }
        public string utilizable_rainfall_runoff { get; set; }
        public string weighted_avg_runoff { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
    }

    [Table("abhy_waterdraft_new", Schema = "public")]
    public class abhy_waterdraft_new
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }
        public string domestic_people_count { get; set; }
        public string domestic_people_water_requirement { get; set; }
        public string domestic_people_water_req { get; set; }
        public string domestic_livestock_count { get; set; }
        public string domestic_livestock_water_requirement { get; set; }
        public string domestic_livestock_water_req { get; set; }
        public string domestic_buffalo_count { get; set; }
        public string domestic_buffalo_water_requirement { get; set; }
        public string domestic_buffalo_water_req { get; set; }
        public string domestic_bullocks_count { get; set; }
        public string domestic_bullock_water_requirement { get; set; }
        public string domestic_bullock_water_req { get; set; }
        public string domestic_cow_count { get; set; }
        public string domestic_cow_water_requirement { get; set; }
        public string domestic_cow_water_req { get; set; }
        public string domestic_sheeps_count { get; set; }
        public string domestic_sheeps_water_requirement { get; set; }
        public string domestic_sheeps_water_req { get; set; }
        public string domestic_goat_count { get; set; }
        public string domestic_goat_water_requirement { get; set; }
        public string domestic_goat_water_req { get; set; }
        public string domestic_donkey_count { get; set; }
        public string domestic_donkey_water_requirement { get; set; }
        public string domestic_donkey_water_req { get; set; }
        public string domestic_camel_count { get; set; }
        public string domestic_camel_water_requirement { get; set; }
        public string domestic_camel_water_req { get; set; }
        public string domestic_annual_req_people { get; set; }
        public string domestic_annual_req_livestock { get; set; }
        public string domestic_annual_req_total_value { get; set; }
        public string domestic_demand_surface_water { get; set; }
        public string domestic_demand_surface_water_livestock { get; set; }
        public string domestic_demand_surface_water_total_value { get; set; }
        public string domestic_demand_ground_water { get; set; }
        public string domestic_demand_ground_water_livestock { get; set; }
        public string domestic_demand_ground_water_total_value { get; set; }
        public string irri_kharif_paddy_crop_area { get; set; }
        public string irri_kharif_paddy_water_requirement { get; set; }
        public string irri_kharif_paddy_waterdemand { get; set; }
        public string irri_kharif_ragi_crop_area { get; set; }
        public string irri_kharif_ragi_water_requirement { get; set; }
        public string irri_kharif_ragi_waterdemand { get; set; }
        public string irri_kharif_groundnut_crop_area { get; set; }
        public string irri_kharif_groundnut_water_requirement { get; set; }
        public string irri_kharif_groundnut_waterdemand { get; set; }
        public string irri_kharif_sugarcane_crop_area { get; set; }
        public string irri_kharif_sugarcane_water_requirement { get; set; }
        public string irri_kharif_sugarcane_waterdemand { get; set; }
        public string irri_kharif_tomoto_crop_area { get; set; }
        public string irri_kharif_tomoto_water_requirement { get; set; }
        public string irri_kharif_tomoto_waterdemand { get; set; }
        public string irri_kharif_cabbage_crop_area { get; set; }
        public string irri_kharif_cabbage_water_requirement { get; set; }
        public string irri_kharif_cabbage_waterdemand { get; set; }
        public string irri_kharif_beans_crop_area { get; set; }
        public string irri_kharif_beans_water_requirement { get; set; }
        public string irri_kharif_beans_waterdemand { get; set; }
        public string irri_kharif_floriculture_crop_area { get; set; }
        public string irri_kharif_floriculture_water_requirement { get; set; }
        public string irri_kharif_floriculture_waterdemand { get; set; }
        public string irri_kharif_sericulture_crop_area { get; set; }
        public string irri_kharif_sericulture_water_requirement { get; set; }
        public string irri_kharif_sericulture_waterdemand { get; set; }
        public string irri_kharif_cucumber_crop_area { get; set; }
        public string irri_kharif_cucumber_water_requirement { get; set; }
        public string irri_kharif_cucumber_waterdemand { get; set; }
        public string irri_kharif_banana_crop_area { get; set; }
        public string irri_kharif_banana_water_requirement { get; set; }
        public string irri_kharif_banana_waterdemand { get; set; }
        public string irri_kharif_fodder_crop_area { get; set; }
        public string irri_kharif_fodder_water_requirement { get; set; }
        public string irri_kharif_fodder_waterdemand { get; set; }
        public string irri_kharif_maize_crop_area { get; set; }
        public string irri_kharif_maize_water_requirement { get; set; }
        public string irri_kharif_maize_waterdemand { get; set; }
        public string irri_kharif_potato_crop_area { get; set; }
        public string irri_kharif_potato_water_requirement { get; set; }
        public string irri_kharif_potato_waterdemand { get; set; }
        public string irri_kharif_chillies_crop_area { get; set; }
        public string irri_kharif_chillies_water_requirement { get; set; }
        public string irri_kharif_chillies_waterdemand { get; set; }
        public string irri_kharif_cotton_crop_area { get; set; }
        public string irri_kharif_cotton_water_requirement { get; set; }
        public string irri_kharif_cotton_waterdemand { get; set; }
        public string irri_kharif_melon_crop_area { get; set; }
        public string irri_kharif_melon_water_requirement { get; set; }
        public string irri_kharif_melon_waterdemand { get; set; }
        public string irri_kharif_citrus_crop_area { get; set; }
        public string irri_kharif_citrus_water_requirement { get; set; }
        public string irri_kharif_citrus_waterdemand { get; set; }
        public string irri_kharif_peanut_crop_area { get; set; }
        public string irri_kharif_peanut_water_requirement { get; set; }
        public string irri_kharif_peanut_waterdemand { get; set; }
        public string irri_kharif_horticulture_crop_area { get; set; }
        public string irri_kharif_horticulture_water_requirement { get; set; }
        public string irri_kharif_horticulture_waterdemand { get; set; }
        public string irri_kharif_total_waterdemand_kharifcrops { get; set; }
        public string irri_rabi_sericulture_crop_area { get; set; }
        public string irri_rabi_sericulture_water_requirement { get; set; }
        public string irri_rabi_sericulture_waterdemand { get; set; }
        public string irri_rabi_tomoto_crop_area { get; set; }
        public string irri_rabi_tomoto_water_requirement { get; set; }
        public string irri_rabi_tomoto_waterdemand { get; set; }
        public string irri_rabi_cabbage_crop_area { get; set; }
        public string irri_rabi_cabbage_water_requirement { get; set; }
        public string irri_rabi_cabbage_waterdemand { get; set; }
        public string irri_rabi_beans_crop_area { get; set; }
        public string irri_rabi_beans_water_requirement { get; set; }
        public string irri_rabi_beans_waterdemand { get; set; }
        public string irri_rabi_floriculture_crop_area { get; set; }
        public string irri_rabi_floriculture_water_requirement { get; set; }
        public string irri_rabi_floriculture_waterdemand { get; set; }
        public string irri_rabi_potato_crop_area { get; set; }
        public string irri_rabi_potato_water_requirement { get; set; }
        public string irri_rabi_potato_waterdemand { get; set; }
        public string irri_rabi_cucumber_crop_area { get; set; }
        public string irri_rabi_cucumber_water_requirement { get; set; }
        public string irri_rabi_cucumber_waterdemand { get; set; }
        public string irri_rabi_ragi_crop_area { get; set; }
        public string irri_rabi_ragi_water_requirement { get; set; }
        public string irri_rabi_ragi_waterdemand { get; set; }
        public string irri_rabi_sugarcane_crop_area { get; set; }
        public string irri_rabi_sugarcane_water_requirement { get; set; }
        public string irri_rabi_sugarcane_waterdemand { get; set; }
        public string irri_rabi_maize_crop_area { get; set; }
        public string irri_rabi_maize_water_requirement { get; set; }
        public string irri_rabi_maize_waterdemand { get; set; }
        public string irri_rabi_fodder_crop_area { get; set; }
        public string irri_rabi_fodder_water_requirement { get; set; }
        public string irri_rabi_fodder_waterdemand { get; set; }
        public string irri_rabi_paddy_crop_area { get; set; }
        public string irri_rabi_paddy_water_requirement { get; set; }
        public string irri_rabi_paddy_waterdemand { get; set; }
        public string irri_rabi_alfalfa_crop_area { get; set; }
        public string irri_rabi_alfalfa_water_requirement { get; set; }
        public string irri_rabi_alfalfa_waterdemand { get; set; }
        public string irri_rabi_onion_crop_area { get; set; }
        public string irri_rabi_onion_water_requirement { get; set; }
        public string irri_rabi_onion_waterdemand { get; set; }
        public string irri_rabi_horticulture_crop_area { get; set; }
        public string irri_rabi_horticulture_water_requirement { get; set; }
        public string irri_rabi_horticulture_waterdemand { get; set; }
        public string irri_rabi_sunflower_crop_area { get; set; }
        public string irri_rabi_sunflower_water_requirement { get; set; }
        public string irri_rabi_sunflower_waterdemand { get; set; }
        public string irri_rabi_total_waterdemand_rabicrops { get; set; }
        public string irri_summer_sericulture_crop_area { get; set; }
        public string irri_summer_sericulture_water_requirement { get; set; }
        public string irri_summer_sericulture_waterdemand { get; set; }
        public string irri_summer_tomoto_crop_area { get; set; }
        public string irri_summer_tomoto_water_requirement { get; set; }
        public string irri_summer_tomoto_waterdemand { get; set; }
        public string irri_summer_cabbage_crop_area { get; set; }
        public string irri_summer_cabbage_water_requirement { get; set; }
        public string irri_summer_cabbage_waterdemand { get; set; }
        public string irri_summer_beans_crop_area { get; set; }
        public string irri_summer_beans_water_requirement { get; set; }
        public string irri_summer_beans_waterdemand { get; set; }
        public string irri_summer_floriculture_crop_area { get; set; }
        public string irri_summer_floriculture_water_requirement { get; set; }
        public string irri_summer_floriculture_waterdemand { get; set; }
        public string irri_summer_maize_crop_area { get; set; }
        public string irri_summer_maize_water_requirement { get; set; }
        public string irri_summer_maize_waterdemand { get; set; }
        public string irri_summer_fodder_crop_area { get; set; }
        public string irri_summer_fodder_water_requirement { get; set; }
        public string irri_summer_fodder_waterdemand { get; set; }
        public string irri_summer_sugarcane_crop_area { get; set; }
        public string irri_summer_sugarcane_water_requirement { get; set; }
        public string irri_summer_sugarcane_waterdemand { get; set; }
        public string irri_summer_total_waterdemand_summercrops { get; set; }

        public string irri_annual_water_demand { get; set; }
        public string irri_area_surfacewater { get; set; }
        public string irri_avg_crop_water_req { get; set; }
        public string irri_utili_surface_water { get; set; }
        public string irri_utili_ground_water { get; set; }

        //new columns in summer horticulture crop
        public string irri_summer_horticulture_crop_area { get; set; }
        public string irri_summer_horticulture_water_requirement { get; set; }
        public string irri_summer_horticulture_waterdemand { get; set; }

        //other crop
        public string irri_kharif_othercrop_name1 { get; set; }
        public string irri_kharif_othercrop_area1 { get; set; }
        public string irri_kharif_othercrop_water_req1 { get; set; }
        public string irri_kharif_othercrop_waterdemand1 { get; set; }

        public string irri_kharif_othercrop_name2 { get; set; }
        public string irri_kharif_othercrop_area2 { get; set; }
        public string irri_kharif_othercrop_water_req2 { get; set; }
        public string irri_kharif_othercrop_waterdemand2 { get; set; }

        public string irri_kharif_othercrop_name3 { get; set; }
        public string irri_kharif_othercrop_area3 { get; set; }
        public string irri_kharif_othercrop_water_req3 { get; set; }
        public string irri_kharif_othercrop_waterdemand3 { get; set; }

        public string irri_kharif_othercrop_name4 { get; set; }
        public string irri_kharif_othercrop_area4 { get; set; }
        public string irri_kharif_othercrop_water_req4 { get; set; }
        public string irri_kharif_othercrop_waterdemand4 { get; set; }

        public string irri_kharif_othercrop_name5 { get; set; }
        public string irri_kharif_othercrop_area5 { get; set; }
        public string irri_kharif_othercrop_water_req5 { get; set; }
        public string irri_kharif_othercrop_waterdemand5 { get; set; }

        //rabi
        public string irri_rabi_othercrop_name1 { get; set; }
        public string irri_rabi_othercrop_area1 { get; set; }
        public string irri_rabi_othercrop_water_req1 { get; set; }
        public string irri_rabi_othercrop_waterdemand1 { get; set; }

        public string irri_rabi_othercrop_name2 { get; set; }
        public string irri_rabi_othercrop_area2 { get; set; }
        public string irri_rabi_othercrop_water_req2 { get; set; }
        public string irri_rabi_othercrop_waterdemand2 { get; set; }

        public string irri_rabi_othercrop_name3 { get; set; }
        public string irri_rabi_othercrop_area3 { get; set; }
        public string irri_rabi_othercrop_water_req3 { get; set; }
        public string irri_rabi_othercrop_waterdemand3 { get; set; }

        public string irri_rabi_othercrop_name4 { get; set; }
        public string irri_rabi_othercrop_area4 { get; set; }
        public string irri_rabi_othercrop_water_req4 { get; set; }
        public string irri_rabi_othercrop_waterdemand4 { get; set; }

        public string irri_rabi_othercrop_name5 { get; set; }
        public string irri_rabi_othercrop_area5 { get; set; }
        public string irri_rabi_othercrop_water_req5 { get; set; }
        public string irri_rabi_othercrop_waterdemand5 { get; set; }

        //summer
        public string irri_summer_othercrop_name1 { get; set; }
        public string irri_summer_othercrop_area1 { get; set; }
        public string irri_summer_othercrop_water_req1 { get; set; }
        public string irri_summer_othercrop_waterdemand1 { get; set; }

        public string irri_summer_othercrop_name2 { get; set; }
        public string irri_summer_othercrop_area2 { get; set; }
        public string irri_summer_othercrop_water_req2 { get; set; }
        public string irri_summer_othercrop_waterdemand2 { get; set; }

        public string irri_summer_othercrop_name3 { get; set; }
        public string irri_summer_othercrop_area3 { get; set; }
        public string irri_summer_othercrop_water_req3 { get; set; }
        public string irri_summer_othercrop_waterdemand3 { get; set; }

        public string irri_summer_othercrop_name4 { get; set; }
        public string irri_summer_othercrop_area4 { get; set; }
        public string irri_summer_othercrop_water_req4 { get; set; }
        public string irri_summer_othercrop_waterdemand4 { get; set; }

        public string irri_summer_othercrop_name5 { get; set; }
        public string irri_summer_othercrop_area5 { get; set; }
        public string irri_summer_othercrop_water_req5 { get; set; }
        public string irri_summer_othercrop_waterdemand5 { get; set; }

        public string industry_name { get; set; }
        public string industry_daily_water_req { get; set; }
        public string industry_days_use { get; set; }
        public string industry_waterdemand { get; set; }
        public string industry_demand_surface_water { get; set; }
        public string industry_demand_ground_water { get; set; }
        public string other_type_of_use { get; set; }
        public string other_daily_water_req { get; set; }
        public string other_days_use { get; set; }
        public string other_annual_req { get; set; }
        public string other_demand_surface_water { get; set; }
        public string other_demand_ground_water { get; set; }

        //new column for Weighted crop value
        public string weighted_crop_value { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
    }

    [Table("abhy_waterdraft_domestic_new", Schema = "public")]
    public class abhy_waterdraft_domestic_new
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }
        public string domestic_people_count { get; set; }
        public string domestic_people_water_requirement { get; set; }
        public string domestic_people_water_req { get; set; }
        public string domestic_livestock_count { get; set; }
        public string domestic_livestock_water_requirement { get; set; }
        public string domestic_livestock_water_req { get; set; }
        public string domestic_buffalo_count { get; set; }
        public string domestic_buffalo_water_requirement { get; set; }
        public string domestic_buffalo_water_req { get; set; }
        public string domestic_bullocks_count { get; set; }
        public string domestic_bullock_water_requirement { get; set; }
        public string domestic_bullock_water_req { get; set; }
        public string domestic_cow_count { get; set; }
        public string domestic_cow_water_requirement { get; set; }
        public string domestic_cow_water_req { get; set; }
        public string domestic_sheeps_count { get; set; }
        public string domestic_sheeps_water_requirement { get; set; }
        public string domestic_sheeps_water_req { get; set; }
        public string domestic_goat_count { get; set; }
        public string domestic_goat_water_requirement { get; set; }
        public string domestic_goat_water_req { get; set; }
        public string domestic_donkey_count { get; set; }
        public string domestic_donkey_water_requirement { get; set; }
        public string domestic_donkey_water_req { get; set; }
        public string domestic_camel_count { get; set; }
        public string domestic_camel_water_requirement { get; set; }
        public string domestic_camel_water_req { get; set; }
        public string domestic_annual_req_people { get; set; }
        public string domestic_annual_req_livestock { get; set; }
        public string domestic_annual_req_total_value { get; set; }
        public string domestic_demand_userentry_groundwater_human { get; set; }
        public string domestic_demand_ground_water { get; set; }
        public string domestic_demand_userentry_groundwater_livestock { get; set; }
        public string domestic_demand_ground_water_livestock { get; set; }
        public string domestic_demand_ground_water_total_value { get; set; }
        public string domestic_demand_userentry_surfacewater_human { get; set; }
        public string domestic_demand_surface_water { get; set; }
        public string domestic_demand_userentry_surfacewater_livestock { get; set; }
        public string domestic_demand_surface_water_livestock { get; set; }
        public string domestic_demand_surface_water_total_value { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
    }

    [Table("abhy_waterdraft_industry_new", Schema = "public")]
    public class abhy_waterdraft_industry_new
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }
        public string industry_name { get; set; }
        public string industry_daily_water_req { get; set; }
        public string industry_days_use { get; set; }
        public string industry_waterdemand { get; set; }
        public string industry_demand_surface_water { get; set; }
        public string industry_demand_ground_water { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
    }

    [Table("abhy_waterdraft_other_new", Schema = "public")]
    public class abhy_waterdraft_other_new
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string longitude { get; set; }
        public string latitude { get; set; }
        public string other_type_of_use { get; set; }
        public string other_daily_water_req { get; set; }
        public string other_days_use { get; set; }
        public string other_annual_req { get; set; }
        public string other_demand_surface_water { get; set; }
        public string other_demand_ground_water { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
    }

    [Table("abhy_waterbalance_new", Schema = "public")]
    public class abhy_waterbalance_new
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
        public string wb_sw_avail { get; set; }
        public string wb_gw_avail { get; set; }
        public string wb_total_avail { get; set; }
        public string wb_sw_utili { get; set; }
        public string wb_gw_utili { get; set; }
        public string wb_total_utili { get; set; }
        public string wb_sw_balance { get; set; }
        public string wb_gw_balance { get; set; }
        public string wb_total_balance { get; set; }
        public string datetime { get; set; }
        public string officer_name { get; set; }
    }

    [Table("abhy_waterbudget_new", Schema = "public")]
    public class abhy_waterbudget_new
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

        public string wb_drinking_population { get; set; }
        public string wb_drinking_project_pop { get; set; }
        public string wb_drinking_percapita_req { get; set; }
        public string wb_drinking_alloc_req { get; set; }
        public string wb_drinking_from_sw { get; set; }
        public string wb_drinking_from_gw { get; set; }
        public string wb_drinking_total { get; set; }
        public string wb_irri_agri_sw { get; set; }
        public string wb_irri_agri_gw { get; set; }
        public string wb_irri_agri_total { get; set; }
        public string population_growth_rate { get; set; }
        public string officer_name { get; set; }
        public string datetime { get; set; }


    }


    [Table("abhy_gpdata_population", Schema = "public")]
    public class abhy_gpdata_population
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string total_population { get; set; }
    }

    [Table("abhy_maps", Schema = "public")]
    public class abhy_maps
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string map1 { get; set; }
        public string map2 { get; set; }
        public string map3 { get; set; }
        public string map4 { get; set; }
        public string uploadimage1 { get; set; }
        public string uploadimge2 { get; set; }
        public string uploadimage3 { get; set; }
        public string uploadimage4 { get; set; }
        public string uploadimage5 { get; set; }
    }

    [Table("abhy_gram_images", Schema = "public")]
    public class abhy_gram_images
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
    }


    [Table("abhy_gram_images_new", Schema = "public")]
    public class abhy_gram_images_new
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public byte[] gpimage1 { get; set; }
        public byte[] gpimage2 { get; set; }
        public byte[] gpimage3 { get; set; }
        public byte[] gpimage4 { get; set; }
        public string gpimage1_filename { get; set; }
        public string gpimage2_filename { get; set; }
        public string gpimage3_filename { get; set; }
        public string gpimage4_filename { get; set; }

    }

    [Table("abhy_gram_images_test", Schema = "public")]
    public class abhy_gram_images_test
    {
        [Key]
        public int? id { get; set; }
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

    }

    [Table("abhy_total_waterbudget", Schema = "public")]
    public class abhy_total_waterbudget
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string date_time { get; set; }
        public string allocation_surfacewater_value { get; set; }
        public string allocation_groundwater_value { get; set; }
        public string allocation_total_value { get; set; }
        public string irrigated_surfacewater_value { get; set; }
        public string irrigated_groundwater_value { get; set; }
        public string irrigated_total_value { get; set; }

    }

    // new tables for Ground water Mointoring

    //2010 to 2019
    [Table("abhy_groundwater_levels2_new", Schema = "public")]
    public class Abhy_groundwater_levels2_new
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string site_type { get; set; }
        public string site_name { get; set; }
        public string depth { get; set; }
        public string jun_2009 { get; set; }
        public string oct_2009 { get; set; }
        public string jan_2010 { get; set; }
        public string feb_2010 { get; set; }
        public string mar_2010 { get; set; }
        public string apr_2010 { get; set; }
        public string may_2010 { get; set; }
        public string jun_2010 { get; set; }
        public string jul_2010 { get; set; }
        public string aug_2010 { get; set; }
        public string sep_2010 { get; set; }
        public string oct_2010 { get; set; }
        public string nov_2010 { get; set; }
        public string dec_2010 { get; set; }
        public string jan_2011 { get; set; }
        public string feb_2011 { get; set; }
        public string mar_2011 { get; set; }
        public string apr_2011 { get; set; }
        public string may_2011 { get; set; }
        public string jun_2011 { get; set; }
        public string jul_2011 { get; set; }
        public string aug_2011 { get; set; }
        public string sep_2011 { get; set; }
        public string oct_2011 { get; set; }
        public string nov_2011 { get; set; }
        public string dec_2011 { get; set; }
        public string jan_2012 { get; set; }
        public string feb_2012 { get; set; }
        public string mar_2012 { get; set; }
        public string apr_2012 { get; set; }
        public string may_2012 { get; set; }
        public string jun_2012 { get; set; }
        public string jul_2012 { get; set; }
        public string aug_2012 { get; set; }
        public string sep_2012 { get; set; }
        public string oct_2012 { get; set; }
        public string nov_2012 { get; set; }
        public string dec_2012 { get; set; }
        public string jan_2013 { get; set; }
        public string feb_2013 { get; set; }
        public string mar_2013 { get; set; }
        public string apr_2013 { get; set; }
        public string may_2013 { get; set; }
        public string jun_2013 { get; set; }
        public string jul_2013 { get; set; }
        public string aug_2013 { get; set; }
        public string sep_2013 { get; set; }
        public string oct_2013 { get; set; }
        public string nov_2013 { get; set; }
        public string dec_2013 { get; set; }
        public string jan_2014 { get; set; }
        public string feb_2014 { get; set; }
        public string mar_2014 { get; set; }
        public string apr_2014 { get; set; }
        public string may_2014 { get; set; }
        public string jun_2014 { get; set; }
        public string jul_2014 { get; set; }
        public string aug_2014 { get; set; }
        public string sep_2014 { get; set; }
        public string oct_2014 { get; set; }
        public string nov_2014 { get; set; }
        public string dec_2014 { get; set; }
        public string jan_2015 { get; set; }
        public string feb_2015 { get; set; }
        public string mar_2015 { get; set; }
        public string apr_2015 { get; set; }
        public string may_2015 { get; set; }
        public string jun_2015 { get; set; }
        public string jul_2015 { get; set; }
        public string aug_2015 { get; set; }
        public string sep_2015 { get; set; }
        public string oct_2015 { get; set; }
        public string nov_2015 { get; set; }
        public string dec_2015 { get; set; }
        public string jan_2016 { get; set; }
        public string feb_2016 { get; set; }
        public string mar_2016 { get; set; }
        public string apr_2016 { get; set; }
        public string may_2016 { get; set; }
        public string jun_2016 { get; set; }
        public string jul_2016 { get; set; }
        public string aug_2016 { get; set; }
        public string sep_2016 { get; set; }
        public string oct_2016 { get; set; }
        public string nov_2016 { get; set; }
        public string dec_2016 { get; set; }
        public string jan_2017 { get; set; }
        public string feb_2017 { get; set; }
        public string mar_2017 { get; set; }
        public string apr_2017 { get; set; }
        public string may_2017 { get; set; }
        public string jun_2017 { get; set; }
        public string jul_2017 { get; set; }
        public string aug_2017 { get; set; }
        public string sep_2017 { get; set; }
        public string oct_2017 { get; set; }
        public string nov_2017 { get; set; }
        public string dec_2017 { get; set; }
        public string jan_2018 { get; set; }
        public string feb_2018 { get; set; }
        public string mar_2018 { get; set; }
        public string apr_2018 { get; set; }
        public string may_2018 { get; set; }
        public string jun_2018 { get; set; }
        public string jul_2018 { get; set; }
        public string aug_2018 { get; set; }
        public string sep_2018 { get; set; }
        public string oct_2018 { get; set; }
        public string nov_2018 { get; set; }
        public string dec_2018 { get; set; }
        public string jan_2019 { get; set; }
        public string feb_2019 { get; set; }
        public string mar_2019 { get; set; }
        public string apr_2019 { get; set; }
        public string may_2019 { get; set; }
        public string jun_2019 { get; set; }
        public string jul_2019 { get; set; }
        public string aug_2019 { get; set; }
        public string sep_2019 { get; set; }
        public string oct_2019 { get; set; }
        public string nov_2019 { get; set; }
        public string dec_2019 { get; set; }
        public string jan_2020 { get; set; }
        public string average_2009 { get; set; }
        public string average_2010 { get; set; }
        public string average_2011 { get; set; }
        public string average_2012 { get; set; }
        public string average_2013 { get; set; }
        public string average_2014 { get; set; }
        public string average_2015 { get; set; }
        public string average_2016 { get; set; }
        public string average_2017 { get; set; }
        public string average_2018 { get; set; }
        public string average_2019 { get; set; }
        public string average_2020 { get; set; }
        public string total_average { get; set; }
        public string utilization { get; set; }
        public string premonson_2009 { get; set; }
        public string postmonson_2009 { get; set; }
        public string premonson_2010 { get; set; }
        public string postmonson_2010 { get; set; }
        public string premonson_2011 { get; set; }
        public string postmonson_2011 { get; set; }
        public string premonson_2012 { get; set; }
        public string postmonson_2012 { get; set; }
        public string premonson_2013 { get; set; }
        public string postmonson_2013 { get; set; }
        public string premonson_2014 { get; set; }
        public string postmonson_2014 { get; set; }
        public string premonson_2015 { get; set; }
        public string postmonson_2015 { get; set; }
        public string premonson_2016 { get; set; }
        public string postmonson_2016 { get; set; }
        public string premonson_2017 { get; set; }
        public string postmonson_2017 { get; set; }
        public string premonson_2018 { get; set; }
        public string postmonson_2018 { get; set; }
        public string premonson_2019 { get; set; }
        public string postmonson_2019 { get; set; }
        public string premonson_2020 { get; set; }
        public string postmonson_2020 { get; set; }
        //new column added
        public string source_type { get; set; }
    }

    //2020 to 2025 trs data
    [Table("abhy_groundwater_levels2_new1", Schema = "public")]
    public class abhy_groundwater_levels2_new1
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string site_type { get; set; }
        public string site_name { get; set; }
        public string depth { get; set; }
        public string jan_2020 { get; set; }
        public string feb_2020 { get; set; }
        public string mar_2020 { get; set; }
        public string apr_2020 { get; set; }
        public string may_2020 { get; set; }
        public string jun_2020 { get; set; }
        public string jul_2020 { get; set; }
        public string aug_2020 { get; set; }
        public string sep_2020 { get; set; }
        public string oct_2020 { get; set; }
        public string nov_2020 { get; set; }
        public string dec_2020 { get; set; }
        public string jan_2021 { get; set; }
        public string feb_2021 { get; set; }
        public string mar_2021 { get; set; }
        public string apr_2021 { get; set; }
        public string may_2021 { get; set; }
        public string jun_2021 { get; set; }
        public string jul_2021 { get; set; }
        public string aug_2021 { get; set; }
        public string sep_2021 { get; set; }
        public string oct_2021 { get; set; }
        public string nov_2021 { get; set; }
        public string dec_2021 { get; set; }
        public string jan_2022 { get; set; }
        public string feb_2022 { get; set; }
        public string mar_2022 { get; set; }
        public string apr_2022 { get; set; }
        public string may_2022 { get; set; }
        public string jun_2022 { get; set; }
        public string jul_2022 { get; set; }
        public string aug_2022 { get; set; }
        public string sep_2022 { get; set; }
        public string oct_2022 { get; set; }
        public string nov_2022 { get; set; }
        public string dec_2022 { get; set; }
        public string jan_2023 { get; set; }
        public string feb_2023 { get; set; }
        public string mar_2023 { get; set; }
        public string apr_2023 { get; set; }
        public string may_2023 { get; set; }
        public string jun_2023 { get; set; }
        public string jul_2023 { get; set; }
        public string aug_2023 { get; set; }
        public string sep_2023 { get; set; }
        public string oct_2023 { get; set; }
        public string nov_2023 { get; set; }
        public string dec_2023 { get; set; }
        public string jan_2024 { get; set; }
        public string feb_2024 { get; set; }
        public string mar_2024 { get; set; }
        public string apr_2024 { get; set; }
        public string may_2024 { get; set; }
        public string jun_2024 { get; set; }
        public string jul_2024 { get; set; }
        public string aug_2024 { get; set; }
        public string sep_2024 { get; set; }
        public string oct_2024 { get; set; }
        public string nov_2024 { get; set; }
        public string dec_2024 { get; set; }
        public string jan_2025 { get; set; }
        public string feb_2025 { get; set; }
        public string mar_2025 { get; set; }
        public string apr_2025 { get; set; }
        public string may_2025 { get; set; }
        public string jun_2025 { get; set; }
        public string jul_2025 { get; set; }
        public string aug_2025 { get; set; }
        public string sep_2025 { get; set; }
        public string oct_2025 { get; set; }
        public string nov_2025 { get; set; }
        public string dec_2025 { get; set; }
        public string average_2020 { get; set; }
        public string average_2021 { get; set; }
        public string average_2022 { get; set; }
        public string average_2023 { get; set; }
        public string average_2024 { get; set; }
        public string average_2025 { get; set; }
        public string total_average { get; set; }
        public string utilization { get; set; }
        public string premonson_2020 { get; set; }
        public string postmonson_2020 { get; set; }
        public string premonson_2021 { get; set; }
        public string postmonson_2021 { get; set; }
        public string premonson_2022 { get; set; }
        public string postmonson_2022 { get; set; }
        public string premonson_2023 { get; set; }
        public string postmonson_2023 { get; set; }
        public string premonson_2024 { get; set; }
        public string postmonson_2024 { get; set; }
        public string premonson_2025 { get; set; }
        public string postmonson_2025 { get; set; }
        public string source_type { get; set; }

    }

    [Table("abhy_groundwater_quality_new", Schema = "public")]
    public class Abhy_groundwater_quality_new
    {
        [Key]
        public long SNO { get; set; }
        public string state_name { get; set; }
        public string disrict_name { get; set; }
        public string tahsil_name { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string logitude { get; set; }
        public string latitude { get; set; }
        public string site_type { get; set; }
        public string site_id { get; set; }
        public string site_name { get; set; }
        public string year { get; set; }
        public string ph { get; set; }
        public string ec { get; set; }
        public string th { get; set; }
        public string tot_alkalinity { get; set; }
        public string ca { get; set; }
        public string mg { get; set; }
        public string na { get; set; }
        public string k { get; set; }
        public string fe { get; set; }
        public string carbonate { get; set; }
        public string bicarbonate { get; set; }
        public string chloride { get; set; }
        public string sulphate { get; set; }
        public string nitrate { get; set; }
        public string fluoride { get; set; }
        public string sar { get; set; }
        public string rsc { get; set; }

        //new columns
        public string cd { get; set; }
        public string cn { get; set; }
        public string pb { get; set; }
        public string hg { get; set; }
        public string mo { get; set; }
        public string ni { get; set; }
        public string pesticides { get; set; }
        public string biphenyls { get; set; }
        public string pah { get; set; }
        public string total_arsenic { get; set; }
        public string cr { get; set; }
        public string bromoform { get; set; }
        public string dibromochloromethane { get; set; }
        public string bromodichloromethane { get; set; }
        public string chloroform { get; set; }
        public string tds { get; set; }

    }

    [Table("abhy_gwl_quantity_new", Schema = "public")]
    public class Abhy_gwl_quantity_new
    {
        [Key]
        public long gwlqid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string tal_name { get; set; }

        public string block_name { get; set; }

        public string gname { get; set; }
        public string area_sq_km { get; set; }
        public string avail_ha_m { get; set; }
        public string gw_dft_ha_m { get; set; }
        public string stage__gwdev_percentage { get; set; }

        public string status { get; set; }


    }

    [Table("abhy_totalrainfall_new", Schema = "public")]
    public class Abhy_Total_Rainfall_new
    {
        [Key]
        public long rfid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string station { get; set; }
        public string jan_14 { get; set; }
        public string jan_14_dep { get; set; }
        public string feb_14 { get; set; }
        public string feb_14_dep { get; set; }
        public string mar_14 { get; set; }
        public string mar_14_dep { get; set; }
        public string apr_14 { get; set; }
        public string apr_14_dep { get; set; }
        public string may_14 { get; set; }
        public string may_14_dep { get; set; }
        public string jun_14 { get; set; }
        public string jun_14_dep { get; set; }
        public string jul_14 { get; set; }
        public string jul_14_dep { get; set; }
        public string aug_14 { get; set; }
        public string aug_14_dep { get; set; }
        public string sep_14 { get; set; }
        public string sep_14_dep { get; set; }
        public string oct_14 { get; set; }
        public string oct_14_dep { get; set; }
        public string nov_14 { get; set; }
        public string nov_14_dep { get; set; }
        public string dec_14 { get; set; }
        public string dec_14_dep { get; set; }
        public string jan_15 { get; set; }
        public string jan_15_dep { get; set; }
        public string feb_15 { get; set; }
        public string feb_15_dep { get; set; }
        public string mar_15 { get; set; }
        public string mar_15_dep { get; set; }
        public string apr_15 { get; set; }
        public string apr_15_dep { get; set; }
        public string may_15 { get; set; }
        public string may_15_dep { get; set; }
        public string jun_15 { get; set; }
        public string jun_15_dep { get; set; }
        public string jul_15 { get; set; }
        public string jul_15_dep { get; set; }
        public string aug_15 { get; set; }
        public string aug_15_dep { get; set; }
        public string sep_15 { get; set; }
        public string sep_15_dep { get; set; }
        public string oct_15 { get; set; }
        public string oct_15_dep { get; set; }
        public string nov_15 { get; set; }
        public string nov_15_dep { get; set; }
        public string dec_15 { get; set; }
        public string dec_15_dep { get; set; }
        public string jan_16 { get; set; }
        public string jan_16_dep { get; set; }
        public string feb_16 { get; set; }
        public string feb_16_dep { get; set; }
        public string mar_16 { get; set; }
        public string mar_16_dep { get; set; }
        public string apr_16 { get; set; }
        public string apr_16_dep { get; set; }
        public string may_16 { get; set; }
        public string may_16_dep { get; set; }
        public string jun_16 { get; set; }
        public string jun_16_dep { get; set; }
        public string jul_16 { get; set; }
        public string jul_16_dep { get; set; }
        public string aug_16 { get; set; }
        public string aug_16_dep { get; set; }
        public string sep_16 { get; set; }
        public string sep_16_dep { get; set; }
        public string oct_16 { get; set; }
        public string oct_16_dep { get; set; }
        public string nov_16 { get; set; }
        public string nov_16_dep { get; set; }
        public string dec_16 { get; set; }
        public string dec_16_dep { get; set; }
        public string jan_17 { get; set; }
        public string jan_17_dep { get; set; }
        public string feb_17 { get; set; }
        public string feb_17_dep { get; set; }
        public string mar_17 { get; set; }
        public string mar_17_dep { get; set; }
        public string apr_17 { get; set; }
        public string apr_17_dep { get; set; }
        public string may_17 { get; set; }
        public string may_17_dep { get; set; }
        public string jun_17 { get; set; }
        public string jun_17_dep { get; set; }
        public string jul_17 { get; set; }
        public string jul_17_dep { get; set; }
        public string aug_17 { get; set; }
        public string aug_17_dep { get; set; }
        public string sep_17 { get; set; }
        public string sep_17_dep { get; set; }
        public string oct_17 { get; set; }
        public string oct_17_dep { get; set; }
        public string nov_17 { get; set; }
        public string nov_17_dep { get; set; }
        public string dec_17 { get; set; }
        public string dec_17_dep { get; set; }
        public string jan_18 { get; set; }
        public string jan_18_dep { get; set; }
        public string feb_18 { get; set; }
        public string feb_18_dep { get; set; }
        public string mar_18 { get; set; }
        public string mar_18_dep { get; set; }
        public string apr_18 { get; set; }
        public string apr_18_dep { get; set; }
        public string may_18 { get; set; }
        public string may_18_dep { get; set; }
        public string jun_18 { get; set; }
        public string jun_18_dep { get; set; }
        public string jul_18 { get; set; }
        public string jul_18_dep { get; set; }
        public string aug_18 { get; set; }
        public string aug_18_dep { get; set; }
        public string sep_18 { get; set; }
        public string sep_18_dep { get; set; }
        public string oct_18 { get; set; }
        public string oct_18_dep { get; set; }
        public string nov_18 { get; set; }
        public string nov_18_dep { get; set; }
        public string dec_18 { get; set; }
        public string dec_18_dep { get; set; }
        public string block { get; set; }
        public string gname { get; set; }
        public string actual_rainfall { get; set; }
        public string normal_rainfall { get; set; }
        public string deviation { get; set; }
        public string status { get; set; }




    }


    [Table("abhy_groundwater_datacollection", Schema = "public")]
    public class abhy_groundwater_datacollection
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string welltype { get; set; }
        public string dept_of_well { get; set; }
        public string gw_level { get; set; }
        public string gw_date { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string site_name { get; set; }
    }


    [Table("abhy_totalrainfall_updated_new", Schema = "public")]
    public class abhy_totalrainfall_updated_new
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string actual__mm__2010 { get; set; }
        public string normal__mm__2010 { get; set; }
        public string deviation__mm__2010 { get; set; }
        public string actual__mm__2011 { get; set; }
        public string normal__mm__2011 { get; set; }
        public string deviation__mm__2011 { get; set; }
        public string actual__mm__2012 { get; set; }
        public string normal__mm__2012 { get; set; }
        public string deviation__mm__2012 { get; set; }
        public string actual__mm__2013 { get; set; }
        public string normal__mm__2013 { get; set; }
        public string deviation__mm__2013 { get; set; }
        public string actual__mm__2014 { get; set; }
        public string normal__mm__2014 { get; set; }
        public string deviation__mm__2014 { get; set; }
        public string actual__mm__2015 { get; set; }
        public string normal__mm__2015 { get; set; }
        public string deviation__mm__2015 { get; set; }
        public string actual__mm__2016 { get; set; }
        public string normal__mm__2016 { get; set; }
        public string deviation__mm__2016 { get; set; }
        public string actual__mm__2017 { get; set; }
        public string normal__mm__2017 { get; set; }
        public string deviation__mm__2017 { get; set; }
        public string actual__mm__2018 { get; set; }
        public string normal__mm__2018 { get; set; }
        public string deviation__mm__2018 { get; set; }
        public string actual__mm__2019 { get; set; }
        public string normal__mm__2019 { get; set; }
        public string deviation__mm__2019 { get; set; }
        public string actual__mm__2020 { get; set; }
        public string normal__mm__2020 { get; set; }
        public string deviation__mm__2020 { get; set; }
        public string shape_length { get; set; }
        public string shape_area { get; set; }
    }



    //new data of rainfall monthly and yearly

    [Table("abhy_totalrainfall_monthly_new", Schema = "public")]
    public class abhy_totalrainfall_monthly_new
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string actual__mm__jan10 { get; set; }
        public string normal__mm__jan10 { get; set; }
        public string deviation__mm__jan10 { get; set; }
        public string actual__mm__feb10 { get; set; }
        public string normal__mm__feb10 { get; set; }
        public string deviation__mm__feb10 { get; set; }
        public string actual__mm__mar10 { get; set; }
        public string normal__mm__mar10 { get; set; }
        public string deviation__mm__mar10 { get; set; }
        public string actual__mm__apr10 { get; set; }
        public string normal__mm__apr10 { get; set; }
        public string deviation__mm__apr10 { get; set; }
        public string actual__mm__may10 { get; set; }
        public string normal__mm__may10 { get; set; }
        public string deviation__mm__may10 { get; set; }
        public string actual__mm__jun10 { get; set; }
        public string normal__mm__jun10 { get; set; }
        public string deviation__mm__jun10 { get; set; }
        public string actual__mm__jul10 { get; set; }
        public string normal__mm__jul10 { get; set; }
        public string deviation__mm__jul10 { get; set; }
        public string actual__mm__aug10 { get; set; }
        public string normal__mm__aug10 { get; set; }
        public string deviation__mm__aug10 { get; set; }
        public string actual__mm__sep10 { get; set; }
        public string normal__mm__sep10 { get; set; }
        public string deviation__mm__sep10 { get; set; }
        public string actual__mm__oct10 { get; set; }
        public string normal__mm__oct10 { get; set; }
        public string deviation__mm__oct10 { get; set; }
        public string actual__mm__nov10 { get; set; }
        public string normal__mm__nov10 { get; set; }
        public string deviation__mm__nov10 { get; set; }
        public string actual__mm__dec10 { get; set; }
        public string normal__mm__dec10 { get; set; }
        public string deviation__mm__dec10 { get; set; }
        public string actual__mm__jan11 { get; set; }
        public string normal__mm__jan11 { get; set; }
        public string deviation__mm__jan11 { get; set; }
        public string actual__mm__feb11 { get; set; }
        public string normal__mm__feb11 { get; set; }
        public string deviation__mm__feb11 { get; set; }
        public string actual__mm__mar11 { get; set; }
        public string normal__mm__mar11 { get; set; }
        public string deviation__mm__mar11 { get; set; }
        public string actual__mm__apr11 { get; set; }
        public string normal__mm__apr11 { get; set; }
        public string deviation__mm__apr11 { get; set; }
        public string actual__mm__may11 { get; set; }
        public string normal__mm__may11 { get; set; }
        public string deviation__mm__may11 { get; set; }
        public string actual__mm__jun11 { get; set; }
        public string normal__mm__jun11 { get; set; }
        public string deviation__mm__jun11 { get; set; }
        public string actual__mm__jul11 { get; set; }
        public string normal__mm__jul11 { get; set; }
        public string deviation__mm__jul11 { get; set; }
        public string actual__mm__aug11 { get; set; }
        public string normal__mm__aug11 { get; set; }
        public string deviation__mm__aug11 { get; set; }
        public string actual__mm__sep11 { get; set; }
        public string normal__mm__sep11 { get; set; }
        public string deviation__mm__sep11 { get; set; }
        public string actual__mm__oct11 { get; set; }
        public string normal__mm__oct11 { get; set; }
        public string deviation__mm__oct11 { get; set; }
        public string actual__mm__nov11 { get; set; }
        public string normal__mm__nov11 { get; set; }
        public string deviation__mm__nov11 { get; set; }
        public string actual__mm__dec11 { get; set; }
        public string normal__mm__dec11 { get; set; }
        public string deviation__mm__dec11 { get; set; }
        public string actual__mm__jan12 { get; set; }
        public string normal__mm__jan12 { get; set; }
        public string deviation__mm__jan12 { get; set; }
        public string actual__mm__feb12 { get; set; }
        public string normal__mm__feb12 { get; set; }
        public string deviation__mm__feb12 { get; set; }
        public string actual__mm__mar12 { get; set; }
        public string normal__mm__mar12 { get; set; }
        public string deviation__mm__mar12 { get; set; }
        public string actual__mm__apr12 { get; set; }
        public string normal__mm__apr12 { get; set; }
        public string deviation__mm__apr12 { get; set; }
        public string actual__mm__may12 { get; set; }
        public string normal__mm__may12 { get; set; }
        public string deviation__mm__may12 { get; set; }
        public string actual__mm__jun12 { get; set; }
        public string normal__mm__jun12 { get; set; }
        public string deviation__mm__jun12 { get; set; }
        public string actual__mm__jul12 { get; set; }
        public string normal__mm__jul12 { get; set; }
        public string deviation__mm__jul12 { get; set; }
        public string actual__mm__aug12 { get; set; }
        public string normal__mm__aug12 { get; set; }
        public string deviation__mm__aug12 { get; set; }
        public string actual__mm__sep12 { get; set; }
        public string normal__mm__sep12 { get; set; }
        public string deviation__mm__sep12 { get; set; }
        public string actual__mm__oct12 { get; set; }
        public string normal__mm__oct12 { get; set; }
        public string deviation__mm__oct12 { get; set; }
        public string actual__mm__nov12 { get; set; }
        public string normal__mm__nov12 { get; set; }
        public string deviation__mm__nov12 { get; set; }
        public string actual__mm__dec12 { get; set; }
        public string normal__mm__dec12 { get; set; }
        public string deviation__mm__dec12 { get; set; }
        public string actual__mm__jan13 { get; set; }
        public string normal__mm__jan13 { get; set; }
        public string deviation__mm__jan13 { get; set; }
        public string actual__mm__feb13 { get; set; }
        public string normal__mm__feb13 { get; set; }
        public string deviation__mm__feb13 { get; set; }
        public string actual__mm__mar13 { get; set; }
        public string normal__mm__mar13 { get; set; }
        public string deviation__mm__mar13 { get; set; }
        public string actual__mm__apr13 { get; set; }
        public string normal__mm__apr13 { get; set; }
        public string deviation__mm__apr13 { get; set; }
        public string actual__mm__may13 { get; set; }
        public string normal__mm__may13 { get; set; }
        public string deviation__mm__may13 { get; set; }
        public string actual__mm__jun13 { get; set; }
        public string normal__mm__jun13 { get; set; }
        public string deviation__mm__jun13 { get; set; }
        public string actual__mm__jul13 { get; set; }
        public string normal__mm__jul13 { get; set; }
        public string deviation__mm__jul13 { get; set; }
        public string actual__mm__aug13 { get; set; }
        public string normal__mm__aug13 { get; set; }
        public string deviation__mm__aug13 { get; set; }
        public string actual__mm__sep13 { get; set; }
        public string normal__mm__sep13 { get; set; }
        public string deviation__mm__sep13 { get; set; }
        public string actual__mm__oct13 { get; set; }
        public string normal__mm__oct13 { get; set; }
        public string deviation__mm__oct13 { get; set; }
        public string actual__mm__nov13 { get; set; }
        public string normal__mm__nov13 { get; set; }
        public string deviation__mm__nov13 { get; set; }
        public string actual__mm__dec13 { get; set; }
        public string normal__mm__dec13 { get; set; }
        public string deviation__mm__dec13 { get; set; }
        public string actual__mm__jan14 { get; set; }
        public string normal__mm__jan14 { get; set; }
        public string deviation__mm__jan14 { get; set; }
        public string actual__mm__feb14 { get; set; }
        public string normal__mm__feb14 { get; set; }
        public string deviation__mm__feb14 { get; set; }
        public string actual__mm__mar14 { get; set; }
        public string normal__mm__mar14 { get; set; }
        public string deviation__mm__mar14 { get; set; }
        public string actual__mm__apr14 { get; set; }
        public string normal__mm__apr14 { get; set; }
        public string deviation__mm__apr14 { get; set; }
        public string actual__mm__may14 { get; set; }
        public string normal__mm__may14 { get; set; }
        public string deviation__mm__may14 { get; set; }
        public string actual__mm__jun14 { get; set; }
        public string normal__mm__jun14 { get; set; }
        public string deviation__mm__jun14 { get; set; }
        public string actual__mm__jul14 { get; set; }
        public string normal__mm__jul14 { get; set; }
        public string deviation__mm__jul14 { get; set; }
        public string actual__mm__aug14 { get; set; }
        public string normal__mm__aug14 { get; set; }
        public string deviation__mm__aug14 { get; set; }
        public string actual__mm__sep14 { get; set; }
        public string normal__mm__sep14 { get; set; }
        public string deviation__mm__sep14 { get; set; }
        public string actual__mm__oct14 { get; set; }
        public string normal__mm__oct14 { get; set; }
        public string deviation__mm__oct14 { get; set; }
        public string actual__mm__nov14 { get; set; }
        public string normal__mm__nov14 { get; set; }
        public string deviation__mm__nov14 { get; set; }
        public string actual__mm__dec14 { get; set; }
        public string normal__mm__dec14 { get; set; }
        public string deviation__mm__dec14 { get; set; }
        public string actual__mm__jan15 { get; set; }
        public string normal__mm__jan15 { get; set; }
        public string deviation__mm__jan15 { get; set; }
        public string actual__mm__feb15 { get; set; }
        public string normal__mm__feb15 { get; set; }
        public string deviation__mm__feb15 { get; set; }
        public string actual__mm__mar15 { get; set; }
        public string normal__mm__mar15 { get; set; }
        public string deviation__mm__mar15 { get; set; }
        public string actual__mm__apr15 { get; set; }
        public string normal__mm__apr15 { get; set; }
        public string deviation__mm__apr15 { get; set; }
        public string actual__mm__may15 { get; set; }
        public string normal__mm__may15 { get; set; }
        public string deviation__mm__may15 { get; set; }
        public string actual__mm__jun15 { get; set; }
        public string normal__mm__jun15 { get; set; }
        public string deviation__mm__jun15 { get; set; }
        public string actual__mm__jul15 { get; set; }
        public string normal__mm__jul15 { get; set; }
        public string deviation__mm__jul15 { get; set; }
        public string actual__mm__aug15 { get; set; }
        public string normal__mm__aug15 { get; set; }
        public string deviation__mm__aug15 { get; set; }
        public string actual__mm__sep15 { get; set; }
        public string normal__mm__sep15 { get; set; }
        public string deviation__mm__sep15 { get; set; }
        public string actual__mm__oct15 { get; set; }
        public string normal__mm__oct15 { get; set; }
        public string deviation__mm__oct15 { get; set; }
        public string actual__mm__nov15 { get; set; }
        public string normal__mm__nov15 { get; set; }
        public string deviation__mm__nov15 { get; set; }
        public string actual__mm__dec15 { get; set; }
        public string normal__mm__dec15 { get; set; }
        public string deviation__mm__dec15 { get; set; }
        public string actual__mm__jan16 { get; set; }
        public string normal__mm__jan16 { get; set; }
        public string deviation__mm__jan16 { get; set; }
        public string actual__mm__feb16 { get; set; }
        public string normal__mm__feb16 { get; set; }
        public string deviation__mm__feb16 { get; set; }
        public string actual__mm__mar16 { get; set; }
        public string normal__mm__mar16 { get; set; }
        public string deviation__mm__mar16 { get; set; }
        public string actual__mm__apr16 { get; set; }
        public string normal__mm__apr16 { get; set; }
        public string deviation__mm__apr16 { get; set; }
        public string actual__mm__may16 { get; set; }
        public string normal__mm__may16 { get; set; }
        public string deviation__mm__may16 { get; set; }
        public string actual__mm__jun16 { get; set; }
        public string normal__mm__jun16 { get; set; }
        public string deviation__mm__jun16 { get; set; }
        public string actual__mm__jul16 { get; set; }
        public string normal__mm__jul16 { get; set; }
        public string deviation__mm__jul16 { get; set; }
        public string actual__mm__aug16 { get; set; }
        public string normal__mm__aug16 { get; set; }
        public string deviation__mm__aug16 { get; set; }
        public string actual__mm__sep16 { get; set; }
        public string normal__mm__sep16 { get; set; }
        public string deviation__mm__sep16 { get; set; }
        public string actual__mm__oct16 { get; set; }
        public string normal__mm__oct16 { get; set; }
        public string deviation__mm__oct16 { get; set; }
        public string actual__mm__nov16 { get; set; }
        public string normal__mm__nov16 { get; set; }
        public string deviation__mm__nov16 { get; set; }
        public string actual__mm__dec16 { get; set; }
        public string normal__mm__dec16 { get; set; }
        public string deviation__mm__dec16 { get; set; }
        public string actual__mm__jan17 { get; set; }
        public string normal__mm__jan17 { get; set; }
        public string deviation__mm__jan17 { get; set; }
        public string actual__mm__feb17 { get; set; }
        public string normal__mm__feb17 { get; set; }
        public string deviation__mm__feb17 { get; set; }
        public string actual__mm__mar17 { get; set; }
        public string normal__mm__mar17 { get; set; }
        public string deviation__mm__mar17 { get; set; }
        public string actual__mm__apr17 { get; set; }
        public string normal__mm__apr17 { get; set; }
        public string deviation__mm__apr17 { get; set; }
        public string actual__mm__may17 { get; set; }
        public string normal__mm__may17 { get; set; }
        public string deviation__mm__may17 { get; set; }
        public string actual__mm__jun17 { get; set; }
        public string normal__mm__jun17 { get; set; }
        public string deviation__mm__jun17 { get; set; }
        public string actual__mm__jul17 { get; set; }
        public string normal__mm__jul17 { get; set; }
        public string deviation__mm__jul17 { get; set; }
        public string actual__mm__aug17 { get; set; }
        public string normal__mm__aug17 { get; set; }
        public string deviation__mm__aug17 { get; set; }
        public string actual__mm__sep17 { get; set; }
        public string normal__mm__sep17 { get; set; }
        public string deviation__mm__sep17 { get; set; }
        public string actual__mm__oct17 { get; set; }
        public string normal__mm__oct17 { get; set; }
        public string deviation__mm__oct17 { get; set; }
        public string actual__mm__nov17 { get; set; }
        public string normal__mm__nov17 { get; set; }
        public string deviation__mm__nov17 { get; set; }
        public string actual__mm__dec17 { get; set; }
        public string normal__mm__dec17 { get; set; }
        public string deviation__mm__dec17 { get; set; }
        public string actual__mm__jan18 { get; set; }
        public string normal__mm__jan18 { get; set; }
        public string deviation__mm__jan18 { get; set; }
        public string actual__mm__feb18 { get; set; }
        public string normal__mm__feb18 { get; set; }
        public string deviation__mm__feb18 { get; set; }
        public string actual__mm__mar18 { get; set; }
        public string normal__mm__mar18 { get; set; }
        public string deviation__mm__mar18 { get; set; }
        public string actual__mm__apr18 { get; set; }
        public string normal__mm__apr18 { get; set; }
        public string deviation__mm__apr18 { get; set; }
        public string actual__mm__may18 { get; set; }
        public string normal__mm__may18 { get; set; }
        public string deviation__mm__may18 { get; set; }
        public string actual__mm__jun18 { get; set; }
        public string normal__mm__jun18 { get; set; }
        public string deviation__mm__jun18 { get; set; }
        public string actual__mm__jul18 { get; set; }
        public string normal__mm__jul18 { get; set; }
        public string deviation__mm__jul18 { get; set; }
        public string actual__mm__aug18 { get; set; }
        public string normal__mm__aug18 { get; set; }
        public string deviation__mm__aug18 { get; set; }
        public string actual__mm__sep18 { get; set; }
        public string normal__mm__sep18 { get; set; }
        public string deviation__mm__sep18 { get; set; }
        public string actual__mm__oct18 { get; set; }
        public string normal__mm__oct18 { get; set; }
        public string deviation__mm__oct18 { get; set; }
        public string actual__mm__nov18 { get; set; }
        public string normal__mm__nov18 { get; set; }
        public string deviation__mm__nov18 { get; set; }
        public string actual__mm__dec18 { get; set; }
        public string normal__mm__dec18 { get; set; }
        public string deviation__mm__dec18 { get; set; }
        public string actual__mm__jan19 { get; set; }
        public string normal__mm__jan19 { get; set; }
        public string deviation__mm__jan19 { get; set; }
        public string actual__mm__feb19 { get; set; }
        public string normal__mm__feb19 { get; set; }
        public string deviation__mm__feb19 { get; set; }
        public string actual__mm__mar19 { get; set; }
        public string normal__mm__mar19 { get; set; }
        public string deviation__mm__mar19 { get; set; }
        public string actual__mm__apr19 { get; set; }
        public string normal__mm__apr19 { get; set; }
        public string deviation__mm__apr19 { get; set; }
        public string actual__mm__may19 { get; set; }
        public string normal__mm__may19 { get; set; }
        public string deviation__mm__may19 { get; set; }
        public string actual__mm__jun19 { get; set; }
        public string normal__mm__jun19 { get; set; }
        public string deviation__mm__jun19 { get; set; }
        public string actual__mm__jul19 { get; set; }
        public string normal__mm__jul19 { get; set; }
        public string deviation__mm__jul19 { get; set; }
        public string actual__mm__aug19 { get; set; }
        public string normal__mm__aug19 { get; set; }
        public string deviation__mm__aug19 { get; set; }
        public string actual__mm__sep19 { get; set; }
        public string normal__mm__sep19 { get; set; }
        public string deviation__mm__sep19 { get; set; }
        public string actual__mm__oct19 { get; set; }
        public string normal__mm__oct19 { get; set; }
        public string deviation__mm__oct19 { get; set; }
        public string actual__mm__nov19 { get; set; }
        public string normal__mm__nov19 { get; set; }
        public string deviation__mm__nov19 { get; set; }
        public string actual__mm__dec19 { get; set; }
        public string normal__mm__dec19 { get; set; }
        public string deviation__mm__dec19 { get; set; }
    }

    [Table("abhy_totalrainfall_yearly_new", Schema = "public")]
    public class abhy_totalrainfall_yearly_new
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }

        public string actual__mm__2010 { get; set; }
        public string normal__mm__2010 { get; set; }
        public string deviation__mm__2010 { get; set; }
        public string actual__mm__2011 { get; set; }
        public string normal__mm__2011 { get; set; }
        public string deviation__mm__2011 { get; set; }
        public string actual__mm__2012 { get; set; }
        public string normal__mm__2012 { get; set; }
        public string deviation__mm__2012 { get; set; }
        public string actual__mm__2013 { get; set; }
        public string normal__mm__2013 { get; set; }
        public string deviation__mm__2013 { get; set; }
        public string actual__mm__2014 { get; set; }
        public string normal__mm__2014 { get; set; }
        public string deviation__mm__2014 { get; set; }
        public string actual__mm__2015 { get; set; }
        public string normal__mm__2015 { get; set; }
        public string deviation__mm__2015 { get; set; }
        public string actual__mm__2016 { get; set; }
        public string normal__mm__2016 { get; set; }
        public string deviation__mm__2016 { get; set; }
        public string actual__mm__2017 { get; set; }
        public string normal__mm__2017 { get; set; }
        public string deviation__mm__2017 { get; set; }
        public string actual__mm__2018 { get; set; }
        public string normal__mm__2018 { get; set; }
        public string deviation__mm__2018 { get; set; }
        public string actual__mm__2019 { get; set; }
        public string normal__mm__2019 { get; set; }
        public string deviation__mm__2019 { get; set; }
        public string actual__mm__2020 { get; set; }
        public string normal__mm__2020 { get; set; }
        public string deviation__mm__2020 { get; set; }
        public string premonsoon_2010 { get; set; }
        public string postmonsoon_2010 { get; set; }
        public string premonsoon_2011 { get; set; }
        public string postmonsoon_2011 { get; set; }
        public string premonsoon_2012 { get; set; }
        public string postmonsoon_2012 { get; set; }
        public string premonsoon_2013 { get; set; }
        public string postmonsoon_2013 { get; set; }
        public string premonsoon_2014 { get; set; }
        public string postmonsoon_2014 { get; set; }
        public string premonsoon_2015 { get; set; }
        public string postmonsoon_2015 { get; set; }
        public string premonsoon_2016 { get; set; }
        public string postmonsoon_2016 { get; set; }
        public string premonsoon_2017 { get; set; }
        public string postmonsoon_2017 { get; set; }
        public string premonsoon_2018 { get; set; }
        public string postmonsoon_2018 { get; set; }
        public string premonsoon_2019 { get; set; }
        public string postmonsoon_2019 { get; set; }


    }


    //part A
    [Table("abhy_baseline_sarpanchdetails_gpdata", Schema = "public")]
    public class abhy_baseline_sarpanchdetails_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string sarpanch_name { get; set; }
        public string panchayat_secretary_name { get; set; }
        public string contact_details { get; set; }

        //new column added
        public string sarpanch_contact_details { get; set; }

    }
    [Table("abhy_baseline_emailid", Schema = "public")]
    public class abhy_baseline_emailid
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string email { get; set; }
        public string nodalofficer { get; set; }
    }
    //part B
    [Table("abhy_baseline_gpdcidata", Schema = "public")]
    public class abhy_baseline_gpdata
    {
        [Key]
        public Int32 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string total_no_of_village { get; set; }

        public string village_name { get; set; }

        public string male_population { get; set; }
        public string female_population { get; set; }
        public string transgender_population { get; set; }
        public string tol_population { get; set; }
        public string source_year { get; set; }

        public string no_of_sc { get; set; }
        public string no_of_st { get; set; }
        public string no_of_obc { get; set; }
        public string no_of_general { get; set; }

        public string no_of_bpl { get; set; }

        public string no_of_households { get; set; }

        public string gp_area_in_ha { get; set; }

        public string forest_area_in_ha { get; set; }
        public string fallow_land_in_ha { get; set; }
        public string cultivable_land_in_ha { get; set; }
        public string other_land_use { get; set; }

        public string net_sown_area { get; set; }
        public string net_irrigated_area { get; set; }
        // public string net_irrigated_area { get; set; }

        public string irrigated_area_in_kharif { get; set; }
        public string irrigated_area_in_rabi { get; set; }
        public string irrigated_area_in_summer { get; set; }
        public string total_irrigated_area { get; set; }

        public string un_irrigated_area_in_kharif { get; set; }
        public string un_irrigated_area_in_rabi { get; set; }
        public string un_irrigated_area_in_summer { get; set; }
        public string total_un_irrigated_area { get; set; }

        public string total_cropped_area { get; set; }

        public string non_energised { get; set; }
        public string diesel_pumps { get; set; }

        public string solar_pumps { get; set; }
        public string centrifugal_pumps { get; set; }
        public string submersible_pumps { get; set; }
        public string total_electric_pumps { get; set; }
        public string total_water_lifting_devices { get; set; }

        public bool e_sent { get; set; }
        public bool reject { get; set; }

        public bool d_sent { get; set; }
        public bool s_reject { get; set; }

        public string approved { get; set; }

        public string entry_by { get; set; }
        public Int32 month_order_by { get; set; }

        public string gp_submit_date { get; set; }
        public string dist_submit_date { get; set; }
        public string approved_date { get; set; }
        public string dist_reject_date { get; set; }
        public string state_reject_date { get; set; }


    }


    [Table("vw_gpdcidata_tracker_count_statewise", Schema = "public")]
    public class vw_gpdcidata_tracker_count_statewise
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string year { get; set; }
        public int SavedGP { get; set; }
        public int SubmitGP { get; set; }
        public int RejectGP { get; set; }
        public int PendingByDpmu { get; set; }
        public int ApprovedGP { get; set; }
        public int RejectBySPMU { get; set; }
        public int PendingGPBySpmu { get; set; }
        public int ApprovedBySPMU { get; set; }
       
    }


    [Table("vw_gpdcidata_tracker_count_districtwise", Schema = "public")]
    public class vw_gpdcidata_tracker_count_districtwise
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string year { get; set; }
        public int SavedGP { get; set; }
        public int SubmitGP { get; set; }
        public int RejectGP { get; set; }
        public int PendingByDpmu { get; set; }
        public int ApprovedGP { get; set; }
        public int RejectBySPMU { get; set; }
        public int PendingGPBySpmu { get; set; }
        public int ApprovedBySPMU { get; set; }

    }


    [Table("vw_gpdcidata_tracker_count_blockwise", Schema = "public")]
    public class vw_gpdcidata_tracker_count_blockwise
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string year { get; set; }
        public int SavedGP { get; set; }
        public int SubmitGP { get; set; }
        public int RejectGP { get; set; }
        public int PendingByDpmu { get; set; }
        public int ApprovedGP { get; set; }
        public int RejectBySPMU { get; set; }
        public int PendingGPBySpmu { get; set; }
        public int ApprovedBySPMU { get; set; }

    }

    [Table("vw_gpdcidata_tracker_count_gpwise", Schema = "public")]
    public class vw_gpdcidata_tracker_count_gpwise
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public int SavedGP { get; set; }
        public int SubmitGP { get; set; }
        public int RejectGP { get; set; }
        public int PendingByDpmu { get; set; }
        public int ApprovedGP { get; set; }
        public int RejectBySPMU { get; set; }
        public int PendingGPBySpmu { get; set; }
        public int ApprovedBySPMU { get; set; }

    }


    [Table("abhy_baseline_gp_livestock", Schema = "public")]
    public class abhy_baseline_gp_livestock
    {
        [Key]
        public int p_id { get; set; }
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string livestock_name { get; set; }
        public string livestock_value { get; set; }
        public string source_year_liv { get; set; }
    }

    [Table("abhy_baseline_gp_surfacewater", Schema = "public")]
    public class abhy_baseline_gp_surfacewater
    {
        [Key]
        public int p_id { get; set; }
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string surface_water_name { get; set; }
        public string surface_water_value { get; set; }
    }

    [Table("abhy_baseline_gp_groundwater", Schema = "public")]
    public class abhy_baseline_gp_groundwater
    {
        [Key]
        public int p_id { get; set; }
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string ground_water_name { get; set; }
        public string ground_water_value { get; set; }
    }

    [Table("abhy_baseline_gp_existingwells", Schema = "public")]
    public class abhy_baseline_gp_existingwells
    {
        [Key]
        public int p_id { get; set; }
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string existing_wells_name { get; set; }
        public string existing_wells_value { get; set; }
    }

    [Table("abhy_baseline_gp_watereff", Schema = "public")]
    public class abhy_baseline_gp_watereff
    {
        [Key]
        public int p_id { get; set; }
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string water_eff_practices_name { get; set; }
        public string water_eff_practices_value { get; set; }
    }


    [Table("abhy_baseline_gp_remarks", Schema = "public")]
    public class abhy_baseline_gp_remarks
    {
        [Key]
        public Int64 p_id { get; set; }
        public Int64 id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string gpdata_remarks { get; set; }
        public string state_remarks { get; set; }
    }
    [Table("abhy_baseline_gp_upload", Schema = "public")]
    public class abhy_baseline_gp_upload
    {
        [Key]
        public int p_id { get; set; }
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string villages_file { get; set; }
        public string villages_path { get; set; }
        public string demographic_file { get; set; }
        public string demographic_path { get; set; }
        public string livestock_file { get; set; }
        public string livestock_path { get; set; }
        public string gparea_file { get; set; }
        public string gparea_path { get; set; }
        public string netsown_area_file { get; set; }
        public string netsown_area_path { get; set; }
        public string area_cultivation_file { get; set; }
        public string area_cultivation_path { get; set; }
        public string suface_water_file { get; set; }
        public string suface_water_path { get; set; }
        public string ground_water_file { get; set; }
        public string ground_water_path { get; set; }
        public string existing_wells_file { get; set; }
        public string existing_wells_path { get; set; }
        public string water_lifting_file { get; set; }
        public string water_lifting_path { get; set; }

        public string water_efficient_file { get; set; }
        public string water_efficient_path { get; set; }

    }


    [Table("sarpanchdetails", Schema = "public")]
    public class sarpanchdetails
    {
        [Key]
        public int? id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string designation_name { get; set; }
        public string name { get; set; }
        public string contact_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string gender { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int? month_order_by { get; set; }
        public string entry_by { get; set; }
    }

    [Table("vw_iec_report", Schema = "public")]    //abhi
    public class vw_iec_report
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string month { get; set; }
        public string year { get; set; }
        public int month_number { get; set; }
        public string awareness_meetings_ach { get; set; }
        public string awareness_meetings_cum { get; set; }
        public string pamphlets_ach { get; set; }
        public string pamphlets_cum { get; set; }
        public string leaflets_ach { get; set; }
        public string leaflets_cum { get; set; }
        public string magazine_ach { get; set; }
        public string magazine_cum { get; set; }
        public string brochures_ach { get; set; }
        public string brochures_cum { get; set; }
        public string other_iec_mat_ach { get; set; }
        public string other_iec_mat_cum { get; set; }
        public string wall_paintings_ach { get; set; }
        public string wall_paintings_cum { get; set; }
        public string hoardings_ach { get; set; }
        public string hoardings_cum { get; set; }
        public string posters_ach { get; set; }
        public string posters_cum { get; set; }
        public string signages_ach { get; set; }
        public string signages_cum { get; set; }
        public string iec_disp_others_ach { get; set; }
        public string iec_disp_others_cum { get; set; }
        public string road_shows_ach { get; set; }
        public string road_shows_cum { get; set; }
        public string street_plays_ach { get; set; }
        public string street_plays_cum { get; set; }
        public string households_ach { get; set; }
        public string households_cum { get; set; }
        public string facebook_ach { get; set; }
        public string facebook_cum { get; set; }
        public string twitter_ach { get; set; }
        public string twitter_cum { get; set; }
        public string youtube_ach { get; set; }
        public string youtube_cum { get; set; }
        public string instagram_ach { get; set; }
        public string instagram_cum { get; set; }
        public string socialmedia_others_ach { get; set; }
        public string socialmedia_others_cum { get; set; }
        public string exhibitions_ach { get; set; }
        public string exhibitions_cum { get; set; }
        public string seminars_ach { get; set; }
        public string seminars_cum { get; set; }
        public string fair_ach { get; set; }
        public string fair_cum { get; set; }
        public string others_ach { get; set; }
        public string others_cum { get; set; }

    }

    [Table("vw_orderwise_state_district_block_gp_area_info", Schema = "public")]
    public class vw_orderwise_state_district_block_gp_area_info
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gram_panchayat_name { get; set; }
    }
    [Table("abhy_ml_with_block_gp_area_info", Schema = "public")]
    public class abhy_block_gp_area_info
    {
        [Key]
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

    [Table("master_list_gp_wsp", Schema = "public")]
    public class master_list_gp_wsp
    {
        [Key]
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

    [Table("Training_dropdown_info", Schema = "public")]
    public class Training_dropdown_info
    {
        [Key]
        public int id { get; set; }
        public string email { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string auth { get; set; }
        public string nodal { get; set; }
    }


    //part C
    [Table("abhy_baseline_drinkingwater_irrigation_gpdata", Schema = "public")]
    public class abhy_baseline_drinkingwater_irrigation_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }

        public string habitation_village { get; set; }
        public string irri_water_req_monsoon { get; set; }
        public string irri_water_req_nonmonsoon { get; set; }
        public string drinking_water_req_human { get; set; }
        public string drinking_water_req_livestock { get; set; }
        public string drinking_water_req_total { get; set; }
        public string water_avail_drinking { get; set; }
        public string water_avail_irrigation { get; set; }
        public string percapita_water_avail_people { get; set; }
    }

    //part D
    [Table("abhy_baseline_borewell_tubewell_gpdata", Schema = "public")]
    public class abhy_baseline_borewell_tubewell_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }

        public string typeofwell { get; set; }
        public string habitation_village { get; set; }
        public string borewell_depth { get; set; }
        public string casing_depth { get; set; }
        public string depth_of_pump_install { get; set; }
        public string pump_capacity_hp { get; set; }
        public string pump_capacity_stages { get; set; }
        public string yield { get; set; }
        public string water_supply_3hrs { get; set; }
        public string water_supply_6hrs { get; set; }
        //new columns added
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string founctional_water { get; set; }
    }

    //part E
    [Table("abhy_baseline_gwl_observation_wells_gpdata", Schema = "public")]
    public class abhy_baseline_gwl_observation_wells_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string block_district_village_name { get; set; }
        public string latitude { get; set; }
        public string logitude { get; set; }
        public string typeofwell { get; set; }
        public string well_depth { get; set; }
        public string reduced_level { get; set; }
        public string height_mp { get; set; }
        public string aquifer { get; set; }
        public string depth_waterlevel_bgl { get; set; }
    }

    //part F
    [Table("abhy_baseline_gw_qualitydata_gpdata", Schema = "public")]
    public class abhy_baseline_gw_qualitydata_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string block_district_village_name { get; set; }
        public string latitude { get; set; }
        public string logitude { get; set; }
        public string well_depth { get; set; }
        public string aquifer { get; set; }
        public string wq_cations { get; set; }
        public string wq_anions { get; set; }
        public string wq_key_pollution { get; set; }

    }

    //part G
    [Table("abhy_baseline_water_management_measures_gpdata", Schema = "public")]
    public class abhy_baseline_water_management_measures_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string scheme_name { get; set; }
        public string activities_undertaken { get; set; }
        public string area_covered_numbers { get; set; }
        // new collumn added
        public string numbers_of_members { get; set; }

    }




    [Table("abhy_tender_images_new", Schema = "public")]
    public class abhy_tender_images_new
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string titlename { get; set; }
        public string filename { get; set; }
        public string file_part { get; set; }
        public string file_inserted_data { get; set; }
    }



    [Table("abhy_baseline_waterbodies_ponds_gpdata", Schema = "public")]
    public class abhy_baseline_waterbodies_ponds_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }

        public string name_of_gp { get; set; }
        public string name_of_water_body { get; set; }
        public string name_of_count { get; set; }
        public string storage_capacity_ham { get; set; }
    }


    [Table("abhy_baseline_adoption_gpdata", Schema = "public")]
    public class abhy_baseline_adoption_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }

        public string metering_monitoring_pgwm { get; set; }
        public string metering_monitoring_count { get; set; }
        public string wsp_prepared_pgwm { get; set; }
        public string wsp_prepared_count { get; set; }
        public string wua_committees_pgwm { get; set; }
        public string wua_committees_count { get; set; }
        public string adoption_miro_irri_crops_pgwm { get; set; }
        public string adoption_miro_irri_crops_count { get; set; }
    }
    [Table("abhy_baseline_social_org_gpdata", Schema = "public")]
    public class abhy_baseline_social_org_gpdata
    {
        [Key]
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }

        public string contact_name { get; set; }

        public string contact_mobile { get; set; }
        public string workers_count { get; set; }
        public string contact_image { get; set; }
    }


    //new module DLI VERIFICATION
    [Table("abhy_dli_one", Schema = "public")]
    public class abhy_dli_one
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public string waterlevel_i_baseline { get; set; }
        public string waterlevel_i_20_21 { get; set; }
        public string waterlevel_i_21_22 { get; set; }
        public string waterlevel_i_22_23 { get; set; }
        public string waterlevel_i_23_24 { get; set; }
        public string waterlevel_i_24_25 { get; set; }
        public string waterlevel_i_cumulative { get; set; }
        public string waterlevel_i_disbursible { get; set; }

        public string waterlevel_ii_baseline { get; set; }
        public string waterlevel_ii_20_21 { get; set; }
        public string waterlevel_ii_21_22 { get; set; }
        public string waterlevel_ii_22_23 { get; set; }
        public string waterlevel_ii_23_24 { get; set; }
        public string waterlevel_ii_24_25 { get; set; }
        public string waterlevel_ii_cumulative { get; set; }
        public string waterlevel_ii_disbursible { get; set; }

        public string waterlevel_iv_baseline { get; set; }
        public string waterlevel_iv_20_21 { get; set; }
        public string waterlevel_iv_21_22 { get; set; }
        public string waterlevel_iv_22_23 { get; set; }
        public string waterlevel_iv_23_24 { get; set; }
        public string waterlevel_iv_24_25 { get; set; }
        public string waterlevel_iv_cumulative { get; set; }
        public string waterlevel_iv_disbursible { get; set; }

        public string waterlevel_v_baseline { get; set; }
        public string waterlevel_v_20_21 { get; set; }
        public string waterlevel_v_21_22 { get; set; }
        public string waterlevel_v_22_23 { get; set; }
        public string waterlevel_v_23_24 { get; set; }
        public string waterlevel_v_24_25 { get; set; }
        public string waterlevel_v_cumulative { get; set; }
        public string waterlevel_v_disbursible { get; set; }

        public string waterlevel_vii_baseline { get; set; }
        public string waterlevel_vii_20_21 { get; set; }
        public string waterlevel_vii_21_22 { get; set; }
        public string waterlevel_vii_22_23 { get; set; }
        public string waterlevel_vii_23_24 { get; set; }
        public string waterlevel_vii_24_25 { get; set; }
        public string waterlevel_vii_cumulative { get; set; }
        public string waterlevel_vii_disbursible { get; set; }

        public string waterlevel_viii_baseline { get; set; }
        public string waterlevel_viii_20_21 { get; set; }
        public string waterlevel_viii_21_22 { get; set; }
        public string waterlevel_viii_22_23 { get; set; }
        public string waterlevel_viii_23_24 { get; set; }
        public string waterlevel_viii_24_25 { get; set; }
        public string waterlevel_viii_cumulative { get; set; }
        public string waterlevel_viii_disbursible { get; set; }

        public string waterquality_i_baseline { get; set; }
        public string waterquality_i_20_21 { get; set; }
        public string waterquality_i_21_22 { get; set; }
        public string waterquality_i_22_23 { get; set; }
        public string waterquality_i_23_24 { get; set; }
        public string waterquality_i_24_25 { get; set; }
        public string waterquality_i_cumulative { get; set; }
        public string waterquality_i_disbursible { get; set; }

        public string waterquality_ii_baseline { get; set; }
        public string waterquality_ii_20_21 { get; set; }
        public string waterquality_ii_21_22 { get; set; }
        public string waterquality_ii_22_23 { get; set; }
        public string waterquality_ii_23_24 { get; set; }
        public string waterquality_ii_24_25 { get; set; }
        public string waterquality_ii_cumulative { get; set; }
        public string waterquality_ii_disbursible { get; set; }

        public string waterquality_iv_baseline { get; set; }
        public string waterquality_iv_20_21 { get; set; }
        public string waterquality_iv_21_22 { get; set; }
        public string waterquality_iv_22_23 { get; set; }
        public string waterquality_iv_23_24 { get; set; }
        public string waterquality_iv_24_25 { get; set; }
        public string waterquality_iv_cumulative { get; set; }
        public string waterquality_iv_disbursible { get; set; }

        public string waterquality_v_baseline { get; set; }
        public string waterquality_v_20_21 { get; set; }
        public string waterquality_v_21_22 { get; set; }
        public string waterquality_v_22_23 { get; set; }
        public string waterquality_v_23_24 { get; set; }
        public string waterquality_v_24_25 { get; set; }
        public string waterquality_v_cumulative { get; set; }
        public string waterquality_v_disbursible { get; set; }

        public string blockwise_i_baseline { get; set; }
        public string blockwise_i_20_21 { get; set; }
        public string blockwise_i_21_22 { get; set; }
        public string blockwise_i_22_23 { get; set; }
        public string blockwise_i_23_24 { get; set; }
        public string blockwise_i_24_25 { get; set; }
        public string blockwise_i_cumulative { get; set; }
        public string blockwise_i_disbursible { get; set; }

        public string blockwise_ii_baseline { get; set; }
        public string blockwise_ii_20_21 { get; set; }
        public string blockwise_ii_21_22 { get; set; }
        public string blockwise_ii_22_23 { get; set; }
        public string blockwise_ii_23_24 { get; set; }
        public string blockwise_ii_24_25 { get; set; }
        public string blockwise_ii_cumulative { get; set; }
        public string blockwise_ii_disbursible { get; set; }

        public string statewise_i_baseline { get; set; }
        public string statewise_i_20_21 { get; set; }
        public string statewise_i_21_22 { get; set; }
        public string statewise_i_22_23 { get; set; }
        public string statewise_i_23_24 { get; set; }
        public string statewise_i_24_25 { get; set; }
        public string statewise_i_cumulative { get; set; }
        public string statewise_i_disbursible { get; set; }

    }

    [Table("abhy_dli_two", Schema = "public")]
    public class abhy_dli_two
    {

        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public string waterbudgets_i_baseline { get; set; }
        public string waterbudgets_i_20_21 { get; set; }
        public string waterbudgets_i_21_22 { get; set; }
        public string waterbudgets_i_22_23 { get; set; }
        public string waterbudgets_i_23_24 { get; set; }
        public string waterbudgets_i_24_25 { get; set; }
        public string waterbudgets_i_cumulative { get; set; }
        public string waterbudgets_i_disbursible { get; set; }

        public string wsp_i_baseline { get; set; }
        public string wsp_i_20_21 { get; set; }
        public string wsp_i_21_22 { get; set; }
        public string wsp_i_22_23 { get; set; }
        public string wsp_i_23_24 { get; set; }
        public string wsp_i_24_25 { get; set; }
        public string wsp_i_cumulative { get; set; }
        public string wsp_i_disbursible { get; set; }

        public string community_i_baseline { get; set; }
        public string community_i_20_21 { get; set; }
        public string community_i_21_22 { get; set; }
        public string community_i_22_23 { get; set; }
        public string community_i_23_24 { get; set; }
        public string community_i_24_25 { get; set; }
        public string community_i_cumulative { get; set; }
        public string community_i_disbursible { get; set; }

        public string community_iii_baseline { get; set; }
        public string community_iii_20_21 { get; set; }
        public string community_iii_21_22 { get; set; }
        public string community_iii_22_23 { get; set; }
        public string community_iii_23_24 { get; set; }
        public string community_iii_24_25 { get; set; }
        public string community_iii_cumulative { get; set; }
        public string community_iii_disbursible { get; set; }

        public string community_iv_baseline { get; set; }
        public string community_iv_20_21 { get; set; }
        public string community_iv_21_22 { get; set; }
        public string community_iv_22_23 { get; set; }
        public string community_iv_23_24 { get; set; }
        public string community_iv_24_25 { get; set; }
        public string community_iv_cumulative { get; set; }
        public string community_iv_disbursible { get; set; }

        public string community_v_baseline { get; set; }
        public string community_v_20_21 { get; set; }
        public string community_v_21_22 { get; set; }
        public string community_v_22_23 { get; set; }
        public string community_v_23_24 { get; set; }
        public string community_v_24_25 { get; set; }
        public string community_v_cumulative { get; set; }
        public string community_v_disbursible { get; set; }

    }


    [Table("abhy_dli_three", Schema = "public")]
    public class abhy_dli_three
    {

        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public string statelevel_i_baseline { get; set; }
        public string statelevel_i_20_21 { get; set; }
        public string statelevel_i_21_22 { get; set; }
        public string statelevel_i_22_23 { get; set; }
        public string statelevel_i_23_24 { get; set; }
        public string statelevel_i_24_25 { get; set; }
        public string statelevel_i_cumulative { get; set; }
        public string statelevel_i_disbursible { get; set; }

        public string statelevel_iii_baseline { get; set; }
        public string statelevel_iii_20_21 { get; set; }
        public string statelevel_iii_21_22 { get; set; }
        public string statelevel_iii_22_23 { get; set; }
        public string statelevel_iii_23_24 { get; set; }
        public string statelevel_iii_24_25 { get; set; }
        public string statelevel_iii_cumulative { get; set; }
        public string statelevel_iii_disbursible { get; set; }

    }

    [Table("abhy_dli_four", Schema = "public")]
    public class abhy_dli_four
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public string irrigation_i_baseline { get; set; }
        public string irrigation_i_20_21 { get; set; }
        public string irrigation_i_21_22 { get; set; }
        public string irrigation_i_22_23 { get; set; }
        public string irrigation_i_23_24 { get; set; }
        public string irrigation_i_24_25 { get; set; }
        public string irrigation_i_cumulative { get; set; }
        public string irrigation_i_disbursible { get; set; }

        public string irrigation_ii_baseline { get; set; }
        public string irrigation_ii_20_21 { get; set; }
        public string irrigation_ii_21_22 { get; set; }
        public string irrigation_ii_22_23 { get; set; }
        public string irrigation_ii_23_24 { get; set; }
        public string irrigation_ii_24_25 { get; set; }
        public string irrigation_ii_cumulative { get; set; }
        public string irrigation_ii_disbursible { get; set; }

        public string cropping_i_baseline { get; set; }
        public string cropping_i_20_21 { get; set; }
        public string cropping_i_21_22 { get; set; }
        public string cropping_i_22_23 { get; set; }
        public string cropping_i_23_24 { get; set; }
        public string cropping_i_24_25 { get; set; }
        public string cropping_i_cumulative { get; set; }
        public string cropping_i_disbursible { get; set; }

        public string cropping_ii_baseline { get; set; }
        public string cropping_ii_20_21 { get; set; }
        public string cropping_ii_21_22 { get; set; }
        public string cropping_ii_22_23 { get; set; }
        public string cropping_ii_23_24 { get; set; }
        public string cropping_ii_24_25 { get; set; }
        public string cropping_ii_cumulative { get; set; }
        public string cropping_ii_disbursible { get; set; }

        public string cropping_iii_baseline { get; set; }
        public string cropping_iii_20_21 { get; set; }
        public string cropping_iii_21_22 { get; set; }
        public string cropping_iii_22_23 { get; set; }
        public string cropping_iii_23_24 { get; set; }
        public string cropping_iii_24_25 { get; set; }
        public string cropping_iii_cumulative { get; set; }
        public string cropping_iii_disbursible { get; set; }

        public string cropping_iv_baseline { get; set; }
        public string cropping_iv_20_21 { get; set; }
        public string cropping_iv_21_22 { get; set; }
        public string cropping_iv_22_23 { get; set; }
        public string cropping_iv_23_24 { get; set; }
        public string cropping_iv_24_25 { get; set; }
        public string cropping_iv_cumulative { get; set; }
        public string cropping_iv_disbursible { get; set; }


        public string electricity_i_baseline { get; set; }
        public string electricity_i_20_21 { get; set; }
        public string electricity_i_21_22 { get; set; }
        public string electricity_i_22_23 { get; set; }
        public string electricity_i_23_24 { get; set; }
        public string electricity_i_24_25 { get; set; }
        public string electricity_i_cumulative { get; set; }
        public string electricity_i_disbursible { get; set; }
    }

    [Table("abhy_dli_five", Schema = "public")]
    public class abhy_dli_five
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public string blockwise_i_baseline { get; set; }
        public string blockwise_i_20_21 { get; set; }
        public string blockwise_i_21_22 { get; set; }
        public string blockwise_i_22_23 { get; set; }
        public string blockwise_i_23_24 { get; set; }
        public string blockwise_i_24_25 { get; set; }
        public string blockwise_i_cumulative { get; set; }
        public string blockwise_i_disbursible { get; set; }

        public string blockwise_iii_baseline { get; set; }
        public string blockwise_iii_20_21 { get; set; }
        public string blockwise_iii_21_22 { get; set; }
        public string blockwise_iii_22_23 { get; set; }
        public string blockwise_iii_23_24 { get; set; }
        public string blockwise_iii_24_25 { get; set; }
        public string blockwise_iii_cumulative { get; set; }
        public string blockwise_iii_disbursible { get; set; }

        public string blockwise_iv_baseline { get; set; }
        public string blockwise_iv_20_21 { get; set; }
        public string blockwise_iv_21_22 { get; set; }
        public string blockwise_iv_22_23 { get; set; }
        public string blockwise_iv_23_24 { get; set; }
        public string blockwise_iv_24_25 { get; set; }
        public string blockwise_iv_cumulative { get; set; }
        public string blockwise_iv_disbursible { get; set; }

    }
    //dli upload tables
    [Table("abhy_dli_one_upload_row1", Schema = "public")]
    public class abhy_dli_one_upload_row1
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string waterlevel_iii_baseline { get; set; }
        public string waterlevel_iii_20_21_filename { get; set; }
        public string waterlevel_iii_20_21_filepath { get; set; }
        public string waterlevel_iii_21_22_filename { get; set; }
        public string waterlevel_iii_21_22_filepath { get; set; }
        public string waterlevel_iii_22_23_filename { get; set; }
        public string waterlevel_iii_22_23_filepath { get; set; }
        public string waterlevel_iii_23_24_filename { get; set; }
        public string waterlevel_iii_23_24_filepath { get; set; }
        public string waterlevel_iii_24_25_filename { get; set; }
        public string waterlevel_iii_24_25_filepath { get; set; }
        public string waterlevel_iii_cumulative { get; set; }
        public string waterlevel_iii_disbursible { get; set; }

    }
    [Table("abhy_dli_one_upload_row2", Schema = "public")]
    public class abhy_dli_one_upload_row2
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string waterlevel_vi_baseline { get; set; }
        public string waterlevel_vi_20_21_filename { get; set; }
        public string waterlevel_vi_20_21_filepath { get; set; }
        public string waterlevel_vi_21_22_filename { get; set; }
        public string waterlevel_vi_21_22_filepath { get; set; }
        public string waterlevel_vi_22_23_filename { get; set; }
        public string waterlevel_vi_22_23_filepath { get; set; }
        public string waterlevel_vi_23_24_filename { get; set; }
        public string waterlevel_vi_23_24_filepath { get; set; }
        public string waterlevel_vi_24_25_filename { get; set; }
        public string waterlevel_vi_24_25_filepath { get; set; }
        public string waterlevel_vi_cumulative { get; set; }
        public string waterlevel_vi_disbursible { get; set; }

    }

    [Table("abhy_dli_one_upload_row3", Schema = "public")]
    public class abhy_dli_one_upload_row3
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string waterquality_iii_baseline { get; set; }
        public string waterquality_iii_20_21_filename { get; set; }
        public string waterquality_iii_20_21_filepath { get; set; }
        public string waterquality_iii_21_22_filename { get; set; }
        public string waterquality_iii_21_22_filepath { get; set; }
        public string waterquality_iii_22_23_filename { get; set; }
        public string waterquality_iii_22_23_filepath { get; set; }
        public string waterquality_iii_23_24_filename { get; set; }
        public string waterquality_iii_23_24_filepath { get; set; }
        public string waterquality_iii_24_25_filename { get; set; }
        public string waterquality_iii_24_25_filepath { get; set; }
        public string waterquality_iii_cumulative { get; set; }
        public string waterquality_iii_disbursible { get; set; }

    }
    [Table("abhy_dli_one_upload_row4", Schema = "public")]
    public class abhy_dli_one_upload_row4
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string waterquality_vi_baseline { get; set; }
        public string waterquality_vi_20_21_filename { get; set; }
        public string waterquality_vi_20_21_filepath { get; set; }
        public string waterquality_vi_21_22_filename { get; set; }
        public string waterquality_vi_21_22_filepath { get; set; }
        public string waterquality_vi_22_23_filename { get; set; }
        public string waterquality_vi_22_23_filepath { get; set; }
        public string waterquality_vi_23_24_filename { get; set; }
        public string waterquality_vi_23_24_filepath { get; set; }
        public string waterquality_vi_24_25_filename { get; set; }
        public string waterquality_vi_24_25_filepath { get; set; }
        public string waterquality_vi_cumulative { get; set; }
        public string waterquality_vi_disbursible { get; set; }

    }
    [Table("abhy_dli_one_upload_row5", Schema = "public")]
    public class abhy_dli_one_upload_row5
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string blockwise_ii_baseline { get; set; }
        public string blockwise_ii_20_21_filename { get; set; }
        public string blockwise_ii_20_21_filepath { get; set; }
        public string blockwise_ii_21_22_filename { get; set; }
        public string blockwise_ii_21_22_filepath { get; set; }
        public string blockwise_ii_22_23_filename { get; set; }
        public string blockwise_ii_22_23_filepath { get; set; }
        public string blockwise_ii_23_24_filename { get; set; }
        public string blockwise_ii_23_24_filepath { get; set; }
        public string blockwise_ii_24_25_filename { get; set; }
        public string blockwise_ii_24_25_filepath { get; set; }
        public string blockwise_ii_cumulative { get; set; }
        public string blockwise_ii_disbursible { get; set; }

    }
    [Table("abhy_dli_one_upload_row6", Schema = "public")]
    public class abhy_dli_one_upload_row6
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string statewise_ii_baseline { get; set; }
        public string statewise_ii_20_21_filename { get; set; }
        public string statewise_ii_20_21_filepath { get; set; }
        public string statewise_ii_21_22_filename { get; set; }
        public string statewise_ii_21_22_filepath { get; set; }
        public string statewise_ii_22_23_filename { get; set; }
        public string statewise_ii_22_23_filepath { get; set; }
        public string statewise_ii_23_24_filename { get; set; }
        public string statewise_ii_23_24_filepath { get; set; }
        public string statewise_ii_24_25_filename { get; set; }
        public string statewise_ii_24_25_filepath { get; set; }
        public string statewise_ii_cumulative { get; set; }
        public string statewise_ii_disbursible { get; set; }

    }

    [Table("abhy_dli_one_upload_row7", Schema = "public")]
    public class abhy_dli_one_upload_row7
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string mow_v_20_21_filename { get; set; }
        public string mow_v_20_21_filepath { get; set; }
        public string mow_v_21_22_filename { get; set; }
        public string mow_v_21_22_filepath { get; set; }
        public string mow_v_22_23_filename { get; set; }
        public string mow_v_22_23_filepath { get; set; }
        public string mow_v_23_24_filename { get; set; }
        public string mow_v_23_24_filepath { get; set; }
        public string mow_v_24_25_filename { get; set; }
        public string mow_v_24_25_filepath { get; set; }
        public string mow_v_cumulative { get; set; }
        public string mow_v_disbursible { get; set; }

    }
    [Table("abhy_dli_one_upload_row8", Schema = "public")]
    public class abhy_dli_one_upload_row8
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string mow_vi_20_21_filename { get; set; }
        public string mow_vi_20_21_filepath { get; set; }
        public string mow_vi_21_22_filename { get; set; }
        public string mow_vi_21_22_filepath { get; set; }
        public string mow_vi_22_23_filename { get; set; }
        public string mow_vi_22_23_filepath { get; set; }
        public string mow_vi_23_24_filename { get; set; }
        public string mow_vi_23_24_filepath { get; set; }
        public string mow_vi_24_25_filename { get; set; }
        public string mow_vi_24_25_filepath { get; set; }
        public string mow_vi_cumulative { get; set; }
        public string mow_vi_disbursible { get; set; }

    }



    [Table("abhy_dli_two_upload_row1", Schema = "public")]
    public class abhy_dli_two_upload_row1
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string waterbudgets_ii_baseline { get; set; }
        public string waterbudgets_ii_20_21_filename { get; set; }
        public string waterbudgets_ii_20_21_filepath { get; set; }
        public string waterbudgets_ii_21_22_filename { get; set; }
        public string waterbudgets_ii_21_22_filepath { get; set; }
        public string waterbudgets_ii_22_23_filename { get; set; }
        public string waterbudgets_ii_22_23_filepath { get; set; }
        public string waterbudgets_ii_23_24_filename { get; set; }
        public string waterbudgets_ii_23_24_filepath { get; set; }
        public string waterbudgets_ii_24_25_filename { get; set; }
        public string waterbudgets_ii_24_25_filepath { get; set; }
        public string waterbudgets_ii_cumulative { get; set; }
        public string waterbudgets_ii_disbursible { get; set; }

    }
    [Table("abhy_dli_two_upload_row2", Schema = "public")]
    public class abhy_dli_two_upload_row2
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string wsp_ii_baseline { get; set; }
        public string wsp_ii_20_21_filename { get; set; }
        public string wsp_ii_20_21_filepath { get; set; }
        public string wsp_ii_21_22_filename { get; set; }
        public string wsp_ii_21_22_filepath { get; set; }
        public string wsp_ii_22_23_filename { get; set; }
        public string wsp_ii_22_23_filepath { get; set; }
        public string wsp_ii_23_24_filename { get; set; }
        public string wsp_ii_23_24_filepath { get; set; }
        public string wsp_ii_24_25_filename { get; set; }
        public string wsp_ii_24_25_filepath { get; set; }
        public string wsp_ii_cumulative { get; set; }
        public string wsp_ii_disbursible { get; set; }

    }
    [Table("abhy_dli_two_upload_row3", Schema = "public")]
    public class abhy_dli_two_upload_row3
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string community_ii_baseline { get; set; }
        public string community_ii_20_21_filename { get; set; }
        public string community_ii_20_21_filepath { get; set; }
        public string community_ii_21_22_filename { get; set; }
        public string community_ii_21_22_filepath { get; set; }
        public string community_ii_22_23_filename { get; set; }
        public string community_ii_22_23_filepath { get; set; }
        public string community_ii_23_24_filename { get; set; }
        public string community_ii_23_24_filepath { get; set; }
        public string community_ii_24_25_filename { get; set; }
        public string community_ii_24_25_filepath { get; set; }
        public string community_ii_cumulative { get; set; }
        public string community_ii_disbursible { get; set; }

    }
    [Table("abhy_dli_two_upload_row4", Schema = "public")]
    public class abhy_dli_two_upload_row4
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string community_vi_baseline { get; set; }
        public string community_vi_20_21_filename { get; set; }
        public string community_vi_20_21_filepath { get; set; }
        public string community_vi_21_22_filename { get; set; }
        public string community_vi_21_22_filepath { get; set; }
        public string community_vi_22_23_filename { get; set; }
        public string community_vi_22_23_filepath { get; set; }
        public string community_vi_23_24_filename { get; set; }
        public string community_vi_23_24_filepath { get; set; }
        public string community_vi_24_25_filename { get; set; }
        public string community_vi_24_25_filepath { get; set; }
        public string community_vi_cumulative { get; set; }
        public string community_vi_disbursible { get; set; }

    }

    [Table("abhy_dli_three_upload_row1", Schema = "public")]
    public class abhy_dli_three_upload_row1
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string statelevel_ii_baseline { get; set; }
        public string statelevel_ii_20_21_filename { get; set; }
        public string statelevel_ii_20_21_filepath { get; set; }
        public string statelevel_ii_21_22_filename { get; set; }
        public string statelevel_ii_21_22_filepath { get; set; }
        public string statelevel_ii_22_23_filename { get; set; }
        public string statelevel_ii_22_23_filepath { get; set; }
        public string statelevel_ii_23_24_filename { get; set; }
        public string statelevel_ii_23_24_filepath { get; set; }
        public string statelevel_ii_24_25_filename { get; set; }
        public string statelevel_ii_24_25_filepath { get; set; }
        public string statelevel_ii_cumulative { get; set; }
        public string statelevel_ii_disbursible { get; set; }

    }

    [Table("abhy_dli_four_upload_row1", Schema = "public")]
    public class abhy_dli_four_upload_row1
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string irrigation_iii_baseline { get; set; }
        public string irrigation_iii_20_21_filename { get; set; }
        public string irrigation_iii_20_21_filepath { get; set; }
        public string irrigation_iii_21_22_filename { get; set; }
        public string irrigation_iii_21_22_filepath { get; set; }
        public string irrigation_iii_22_23_filename { get; set; }
        public string irrigation_iii_22_23_filepath { get; set; }
        public string irrigation_iii_23_24_filename { get; set; }
        public string irrigation_iii_23_24_filepath { get; set; }
        public string irrigation_iii_24_25_filename { get; set; }
        public string irrigation_iii_24_25_filepath { get; set; }
        public string irrigation_iii_cumulative { get; set; }
        public string irrigation_iii_disbursible { get; set; }

    }

    [Table("abhy_dli_four_upload_row2", Schema = "public")]
    public class abhy_dli_four_upload_row2
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string cropping_v_baseline { get; set; }
        public string cropping_v_20_21_filename { get; set; }
        public string cropping_v_20_21_filepath { get; set; }
        public string cropping_v_21_22_filename { get; set; }
        public string cropping_v_21_22_filepath { get; set; }
        public string cropping_v_22_23_filename { get; set; }
        public string cropping_v_22_23_filepath { get; set; }
        public string cropping_v_23_24_filename { get; set; }
        public string cropping_v_23_24_filepath { get; set; }
        public string cropping_v_24_25_filename { get; set; }
        public string cropping_v_24_25_filepath { get; set; }
        public string cropping_v_cumulative { get; set; }
        public string cropping_v_disbursible { get; set; }

    }
    [Table("abhy_dli_five_upload_row1", Schema = "public")]
    public class abhy_dli_five_upload_row1
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string blockwise_ii_baseline { get; set; }
        public string blockwise_ii_20_21_filename { get; set; }
        public string blockwise_ii_20_21_filepath { get; set; }
        public string blockwise_ii_21_22_filename { get; set; }
        public string blockwise_ii_21_22_filepath { get; set; }
        public string blockwise_ii_22_23_filename { get; set; }
        public string blockwise_ii_22_23_filepath { get; set; }
        public string blockwise_ii_23_24_filename { get; set; }
        public string blockwise_ii_23_24_filepath { get; set; }
        public string blockwise_ii_24_25_filename { get; set; }
        public string blockwise_ii_24_25_filepath { get; set; }
        public string blockwise_ii_cumulative { get; set; }
        public string blockwise_ii_disbursible { get; set; }

    }

    //android datanse ataljal model class

    // userlogs

    [Table("userlogs", Schema = "public")]
    public class userlogs
    {
        [Key]
        public int? id { get; set; }
        public string userid { get; set; }
        public string ipaddress { get; set; }
        public string dateandtime { get; set; }
        public string actionperformed { get; set; }
        public string status { get; set; }

    }




    //geotagging
    [Table("geotagging", Schema = "public")]
    public class geotagging
    {
        [Key]
        public int? id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string typeofstructure { get; set; }
        public string storagecapacity { get; set; }
        public string nooffillings { get; set; }
        public string image1 { get; set; }
        public string image2 { get; set; }
        public string deviceid { get; set; }
        public string others { get; set; }
        public DateTime? date { get; set; }
        public string email { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string date1 { get; set; }
        public string datetime { get; set; }
        public string locationdetail { get; set; }
        public DateTime? date_time { get; set; }
    }

    [Table("geo_new", Schema = "public")]
    public class geo_new
    {
        [Key]
        public int id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string typeofstructure { get; set; }
        public string storagecapacity { get; set; }
        public string nooffillings { get; set; }
        public string image1 { get; set; }
        public string image2 { get; set; }
        public string deviceid { get; set; }
        public string others { get; set; }
        public DateTime? date { get; set; }
        public string email { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string date1 { get; set; }
        public string datetime { get; set; }
        public string locationdetail { get; set; }
        public string wcu_aby { get; set; }
        public string wcu_aby_remark { get; set; }
        public string approve { get; set; }
        public string reject_remark { get; set; }
        public DateTime? date_time { get; set; }
        public string old_lat { get; set; }
        public string old_lon { get; set; }


    }
    //geoprofile
    [Table("gpprofile", Schema = "public")]
    public class gpprofile
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string tol_population { get; set; }
        public string male_population { get; set; }
        public string female_population { get; set; }
        public string child_population { get; set; }
        public string no_of_apl { get; set; }
        public string no_of_bpl { get; set; }
        public string no_of_sc { get; set; }
        public string no_of_st { get; set; }
        public string no_of_obc { get; set; }
        public string no_of_households { get; set; }
        public string livestock_population { get; set; }
        public string no_of_cows { get; set; }
        public string no_of_bullocks { get; set; }
        public string no_of_buffalos { get; set; }
        public string no_of_sheeps_goats { get; set; }
        public string no_of_others_or_general { get; set; }
        public string gp_area_in_ha { get; set; }
        public string forest_area_in_ha { get; set; }
        public string fallow_land_in_ha { get; set; }
        public string cultivable_land_in_ha { get; set; }
        public string net_sown_area_ha { get; set; }
        public string irrigated_area_in_kharif { get; set; }
        public string irrigated_area_in_rabi { get; set; }
        public string irrigated_area_in_summer { get; set; }
        public string non_irrigated_area { get; set; }
        public string irrigation_type_canal { get; set; }
        public string irrigation_type_tanks { get; set; }
        public string dug_wells { get; set; }
        public string dug_cum_bore_wells { get; set; }
        public string bore_well_or_tube_well { get; set; }
        public string dug_well_existing { get; set; }
        public string bore_well_existing { get; set; }
        public string tube_well_existing { get; set; }
        public string dug_cum_bore_wells_existing { get; set; }
        public string other_well_existing { get; set; }
        public string non_energised { get; set; }
        public string diesel_pump { get; set; }
        public string electric_pump { get; set; }
        public string centrifugal_pump { get; set; }
        public string submersible_pump { get; set; }
        public string area_under_sprinkler_irrigation { get; set; }
        public string area_under_drip_irrigation { get; set; }
        public string other_irrigation { get; set; }
        public string no_of_wells_electric_meter { get; set; }
        public string no_of_water_meter { get; set; }
        public string gross_cropped_area { get; set; }
        public string solar_pump { get; set; }

    }


    [Table("groundwaterlevels", Schema = "public")]
    public class groundwaterlevels
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string sitename { get; set; }
        public string typeofwell { get; set; }
        public string source { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string wellid { get; set; }
        public string sep_2020 { get; set; }
        public string oct_2020 { get; set; }
        public string nov_2020 { get; set; }
        public string dec_2020 { get; set; }
        public string jan_2021 { get; set; }
        public string feb_2021 { get; set; }
        public string mar_2021 { get; set; }
        public string apr_2021 { get; set; }
        public string may_2021 { get; set; }
        public string jun_2021 { get; set; }
        public string jul_2021 { get; set; }
        public string aug_2021 { get; set; }
        public string sep_2021 { get; set; }
        public string oct_2021 { get; set; }
        public string nov_2021 { get; set; }
        public string dec_2021 { get; set; }
        public string jan_2022 { get; set; }
        public string feb_2022 { get; set; }
        public string mar_2022 { get; set; }
        public string apr_2022 { get; set; }
        public string may_2022 { get; set; }
        public string jun_2022 { get; set; }
        public string jul_2022 { get; set; }
        public string aug_2022 { get; set; }
        public string sep_2022 { get; set; }
        public string oct_2022 { get; set; }
        public string nov_2022 { get; set; }
        public string dec_2022 { get; set; }
        public string jan_2023 { get; set; }
        public string feb_2023 { get; set; }
        public string mar_2023 { get; set; }
        public string apr_2023 { get; set; }
        public string may_2023 { get; set; }
        public string jun_2023 { get; set; }
        public string jul_2023 { get; set; }
        public string aug_2023 { get; set; }
        public string sep_2023 { get; set; }
        public string oct_2023 { get; set; }
        public string nov_2023 { get; set; }
        public string dec_2023 { get; set; }
        public string jan_2024 { get; set; }
        public string feb_2024 { get; set; }
        public string mar_2024 { get; set; }
        public string apr_2024 { get; set; }
        public string may_2024 { get; set; }
        public string jun_2024 { get; set; }
        public string jul_2024 { get; set; }
        public string aug_2024 { get; set; }
        public string sep_2024 { get; set; }
        public string oct_2024 { get; set; }
        public string nov_2024 { get; set; }
        public string dec_2024 { get; set; }
        public string jan_2025 { get; set; }
        public string feb_2025 { get; set; }
        public string mar_2025 { get; set; }
        public string apr_2025 { get; set; }
        public string may_2025 { get; set; }
        public string jun_2025 { get; set; }
        public string jul_2025 { get; set; }
        public string aug_2025 { get; set; }
        public string sep_2025 { get; set; }
        public string oct_2025 { get; set; }
        public string nov_2025 { get; set; }
        public string dec_2025 { get; set; }
        public string well { get; set; }
    }


    [Table("groundwaterlevel", Schema = "public")]
    public class groundwaterlevel
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string sitename { get; set; }
        public string typeofwell { get; set; }
        public string source { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string wellid { get; set; }
        public string welldepth { get; set; }
        public string aquifer { get; set; }
        public string pre2015 { get; set; }
        public string post2015 { get; set; }
        public string pre2016 { get; set; }
        public string post2016 { get; set; }
        public string pre2017 { get; set; }
        public string post2017 { get; set; }
        public string pre2018 { get; set; }
        public string post2018 { get; set; }
        public string pre2019 { get; set; }
        public string post2019 { get; set; }
        public string uid { get; set; }
        public string dec_2020 { get; set; }
        public string jan_2021 { get; set; }
        public string feb_2021 { get; set; }
        public string mar_2021 { get; set; }
        public string apr_2021 { get; set; }
        public string may_2021 { get; set; }
        public string jun_2021 { get; set; }
        public string jul_2021 { get; set; }
        public string aug_2021 { get; set; }
        public string sep_2021 { get; set; }
        public string oct_2021 { get; set; }
        public string nov_2021 { get; set; }
        public string dec_2021 { get; set; }
        public string jan_2022 { get; set; }
        public string feb_2022 { get; set; }
        public string mar_2022 { get; set; }
        public string apr_2022 { get; set; }
        public string may_2022 { get; set; }
        public string jun_2022 { get; set; }
        public string jul_2022 { get; set; }
        public string aug_2022 { get; set; }
        public string sep_2022 { get; set; }
        public string oct_2022 { get; set; }
        public string nov_2022 { get; set; }
        public string dec_2022 { get; set; }
        public string jan_2023 { get; set; }
        public string feb_2023 { get; set; }
        public string mar_2023 { get; set; }
        public string apr_2023 { get; set; }
        public string may_2023 { get; set; }
        public string jun_2023 { get; set; }
        public string jul_2023 { get; set; }
        public string aug_2023 { get; set; }
        public string sep_2023 { get; set; }
        public string oct_2023 { get; set; }
        public string nov_2023 { get; set; }
        public string dec_2023 { get; set; }
        public string jan_2024 { get; set; }
        public string feb_2024 { get; set; }
        public string mar_2024 { get; set; }
        public string apr_2024 { get; set; }
        public string may_2024 { get; set; }
        public string jun_2024 { get; set; }
        public string jul_2024 { get; set; }
        public string aug_2024 { get; set; }
        public string sep_2024 { get; set; }
        public string oct_2024 { get; set; }
        public string nov_2024 { get; set; }
        public string dec_2024 { get; set; }
        public string jan_2025 { get; set; }
        public string feb_2025 { get; set; }
        public string mar_2025 { get; set; }
        public string apr_2025 { get; set; }
        public string may_2025 { get; set; }
        public string jun_2025 { get; set; }
        public string jul_2025 { get; set; }
        public string aug_2025 { get; set; }
        public string sep_2025 { get; set; }
        public string oct_2025 { get; set; }
        public string nov_2025 { get; set; }
        public string dec_2025 { get; set; }
        public string well { get; set; }
        public DateTime? datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string locationdetails { get; set; }
        public string groundwater_level { get; set; }
        public string Diameter_of_Well { get; set; }
        public string Depth_of_Well { get; set; }
        public string Depth_of_Water_Level { get; set; }
        public string Height_of_Measuring_Point { get; set; }
        public DateTime? date { get; set; }
        public int isarchive { get; set; }
        public string source_type { get; set; }
        public string other_well_type { get; set; }
        public DateTime? pre_date { get; set; }
        public DateTime? post_date { get; set; }
    }


    [Table("rainfall", Schema = "public")]
    public class rainfall
    {
        [Key]
        public int? id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string sitename { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string cumulative { get; set; }
        public int? month { get; set; }
        public int? year { get; set; }
        public DateTime? date1 { get; set; }
        public DateTime? datetime { get; set; }
        public string donokey { get; set; }

        public string raingauge { get; set; }
        public DateTime? date { get; set; }
        public string rainfall1 { get; set; }
        public string deviceid { get; set; }
        public string image1 { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }   // abhi1904
        public string village { get; set; }       // abhi1904
        public DateTime? date_time { get; set; }    // abhi1904

    }




    [Table("states", Schema = "public")]
    public class states
    {
        [Key]
        public int? id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        // public string villagename { get; set; }

    }

    [Table("wellinventory", Schema = "public")]
    public class wellinventory
    {
        [Key]
        public int? gid { get; set; }
        public string wellno { get; set; }
        public string date { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string locationdetails { get; set; }
        public string ownername { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string welldiameter { get; set; }
        public string welldepth { get; set; }
        public string measuringpoint { get; set; }
        public string welltype { get; set; }
        public string wellwaterpotable { get; set; }
        public string waterleveldepth { get; set; }
        public string well_type_other { get; set; }
        public string use { get; set; }
        public string pumpinstalled { get; set; }
        public string electricmeterselecteditem { get; set; }
        public string datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string approve { get; set; }
        public string reject_remark { get; set; }

    }

    public class usersVMMobile
    {

        public int? UserId { get; set; }
        public string UserType { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ContactNumber { get; set; }
        public string DepartmentName { get; set; }
        public string NodalOfficer { get; set; }
        public string StateName { get; set; }
        public string DistrictName { get; set; }
        public string BlockName { get; set; }
        public string GramPanchayatName { get; set; }
        public string first_time_approved_by { get; set; }
        public string last_changed_password_by { get; set; }
        public string Verifiedornot { get; set; }
        public string approved_by { get; set; }
        public string plain_password { get; set; }

        public DateTimeOffset entrytime { get; set; }
        public string EntryTimeString { get; set; }
        public string approve_DateString { get; set; }
        public DateTime? approved_Date { get; set; }
    }


    [Table("users", Schema = "public")]
    public class users
    {
        [Key]
        public int? id { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string contactnumber { get; set; }
        public string departmentname { get; set; }
        public string nodalofficer { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string grampanchayatname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string verification { get; set; }
        public string plain_password { get; set; }
        public string hash_password { get; set; }
        public string first_time_approved_by { get; set; }
        public string last_changed_password_by { get; set; }
        public string approved_by { get; set; }
        public DateTimeOffset entrytime { get; set; }
        public DateTime? approved_Date { get; set; }


    }

    [Table("users_delete", Schema = "public")]
    public class users_delete
    {
        [Key]
        public int? id { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string contactnumber { get; set; }
        public string departmentname { get; set; }
        public string nodalofficer { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string grampanchayatname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string verification { get; set; }
        public string plain_password { get; set; }
        public string hash_password { get; set; }
        public string first_time_approved_by { get; set; }
        public string last_changed_password_by { get; set; }
        public string approved_by { get; set; }
        public string email_delete { get; set; }
        public string datetime_delete { get; set; }
        public DateTimeOffset entrytime { get; set; }
        public DateTime? approved_Date { get; set; }


    }

    /// <summary>
    /// android
    /// </summary>

    [Table("abhy_frameworkmatrix_new", Schema = "public")]
    public class abhy_frameworkmatrix_new
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string dli1_1_baseline { get; set; }
        public string dli1_1_20_21 { get; set; }
        public string dli1_1_21_22 { get; set; }
        public string dli1_1_22_23 { get; set; }
        public string dli1_1_23_24 { get; set; }
        public string dli1_1_24_25 { get; set; }
        public string dli1_1_cumulative { get; set; }

        public string dli1_1_1_baseline { get; set; }
        public string dli1_1_1_20_21 { get; set; }
        public string dli1_1_1_21_22 { get; set; }
        public string dli1_1_1_22_23 { get; set; }
        public string dli1_1_1_23_24 { get; set; }
        public string dli1_1_1_24_25 { get; set; }
        public string dli1_1_1_cumulative { get; set; }

        public string dli1_1_2_baseline { get; set; }
        public string dli1_1_2_20_21 { get; set; }
        public string dli1_1_2_21_22 { get; set; }
        public string dli1_1_2_22_23 { get; set; }
        public string dli1_1_2_23_24 { get; set; }
        public string dli1_1_2_24_25 { get; set; }
        public string dli1_1_2_cumulative { get; set; }

        public string dli2_2_baseline { get; set; }
        public string dli2_2_20_21 { get; set; }
        public string dli2_2_21_22 { get; set; }
        public string dli2_2_22_23 { get; set; }
        public string dli2_2_23_24 { get; set; }
        public string dli2_2_24_25 { get; set; }
        public string dli2_2_cumulative { get; set; }

        public string dli2_2_1_baseline { get; set; }
        public string dli2_2_1_20_21 { get; set; }
        public string dli2_2_1_21_22 { get; set; }
        public string dli2_2_1_22_23 { get; set; }
        public string dli2_2_1_23_24 { get; set; }
        public string dli2_2_1_24_25 { get; set; }
        public string dli2_2_1_cumulative { get; set; }

        public string dli2_3_baseline { get; set; }
        public string dli2_3_20_21 { get; set; }
        public string dli2_3_21_22 { get; set; }
        public string dli2_3_22_23 { get; set; }
        public string dli2_3_23_24 { get; set; }
        public string dli2_3_24_25 { get; set; }
        public string dli2_3_cumulative { get; set; }

        public string dli2_3a_baseline { get; set; }
        public string dli2_3a_20_21 { get; set; }
        public string dli2_3a_21_22 { get; set; }
        public string dli2_3a_22_23 { get; set; }
        public string dli2_3a_23_24 { get; set; }
        public string dli2_3a_24_25 { get; set; }
        public string dli2_3a_cumulative { get; set; }

        public string dli2_3_1_baseline { get; set; }
        public string dli2_3_1_20_21 { get; set; }
        public string dli2_3_1_21_22 { get; set; }
        public string dli2_3_1_22_23 { get; set; }
        public string dli2_3_1_23_24 { get; set; }
        public string dli2_3_1_24_25 { get; set; }
        public string dli2_3_1_cumulative { get; set; }

        public string dli2_3_1a_baseline { get; set; }
        public string dli2_3_1a_20_21 { get; set; }
        public string dli2_3_1a_21_22 { get; set; }
        public string dli2_3_1a_22_23 { get; set; }
        public string dli2_3_1a_23_24 { get; set; }
        public string dli2_3_1a_24_25 { get; set; }
        public string dli2_3_1a_cumulative { get; set; }

        public string dli3_4_baseline { get; set; }
        public string dli3_4_20_21 { get; set; }
        public string dli3_4_21_22 { get; set; }
        public string dli3_4_22_23 { get; set; }
        public string dli3_4_23_24 { get; set; }
        public string dli3_4_24_25 { get; set; }
        public string dli3_4_cumulative { get; set; }

        public string dli3_4_1_baseline { get; set; }
        public string dli3_4_1_20_21 { get; set; }
        public string dli3_4_1_21_22 { get; set; }
        public string dli3_4_1_22_23 { get; set; }
        public string dli3_4_1_23_24 { get; set; }
        public string dli3_4_1_24_25 { get; set; }
        public string dli3_4_1_cumulative { get; set; }

        public string dli3_4_2_baseline { get; set; }
        public string dli3_4_2_20_21 { get; set; }
        public string dli3_4_2_21_22 { get; set; }
        public string dli3_4_2_22_23 { get; set; }
        public string dli3_4_2_23_24 { get; set; }
        public string dli3_4_2_24_25 { get; set; }
        public string dli3_4_2_cumulative { get; set; }

        public string dli3_4_3_baseline { get; set; }
        public string dli3_4_3_20_21 { get; set; }
        public string dli3_4_3_21_22 { get; set; }
        public string dli3_4_3_22_23 { get; set; }
        public string dli3_4_3_23_24 { get; set; }
        public string dli3_4_3_24_25 { get; set; }
        public string dli3_4_3_cumulative { get; set; }

        public string dli3_4_4_baseline { get; set; }
        public string dli3_4_4_20_21 { get; set; }
        public string dli3_4_4_21_22 { get; set; }
        public string dli3_4_4_22_23 { get; set; }
        public string dli3_4_4_23_24 { get; set; }
        public string dli3_4_4_24_25 { get; set; }
        public string dli3_4_4_cumulative { get; set; }

        public string dli4_5_baseline { get; set; }
        public string dli4_5_20_21 { get; set; }
        public string dli4_5_21_22 { get; set; }
        public string dli4_5_22_23 { get; set; }
        public string dli4_5_23_24 { get; set; }
        public string dli4_5_24_25 { get; set; }
        public string dli4_5_cumulative { get; set; }

        public string dli4_5_1_baseline { get; set; }
        public string dli4_5_1_20_21 { get; set; }
        public string dli4_5_1_21_22 { get; set; }
        public string dli4_5_1_22_23 { get; set; }
        public string dli4_5_1_23_24 { get; set; }
        public string dli4_5_1_24_25 { get; set; }
        public string dli4_5_1_cumulative { get; set; }

        public string dli5_6_baseline { get; set; }
        public string dli5_6_20_21 { get; set; }
        public string dli5_6_21_22 { get; set; }
        public string dli5_6_22_23 { get; set; }
        public string dli5_6_23_24 { get; set; }
        public string dli5_6_24_25 { get; set; }
        public string dli5_6_cumulative { get; set; }

        public string dli5_6_1_baseline { get; set; }
        public string dli5_6_1_20_21 { get; set; }
        public string dli5_6_1_21_22 { get; set; }
        public string dli5_6_1_22_23 { get; set; }
        public string dli5_6_1_23_24 { get; set; }
        public string dli5_6_1_24_25 { get; set; }
        public string dli5_6_1_cumulative { get; set; }

    }

    //social management 14 tables new
    [Table("abhy_socialmgt_gramdb", Schema = "public")]
    public class abhy_socialmgt_gramdb
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string designation { get; set; }
        public string member_name { get; set; }
        public string gender { get; set; }
        public string reserved_unreserved { get; set; }
        public string contact_number { get; set; }

    }

    [Table("abhy_socialmgt_sanitation_committee", Schema = "public")]
    public class abhy_socialmgt_sanitation_committee
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string designation { get; set; }
        public string member_name { get; set; }
        public string gender { get; set; }
        public string reserved_unreserved { get; set; }
        public string contact_number { get; set; }
        //new columns
        public string category_fa { get; set; }
        public string marginal_fa { get; set; }
        public string category_value { get; set; }
        public string year { get; set; }

    }

    [Table("abhy_socialmgt_support_agency", Schema = "public")]
    public class abhy_socialmgt_support_agency
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string designation { get; set; }
        public string member_name { get; set; }
        public string gender { get; set; }
        public string reserved_unreserved { get; set; }
        public string contact_number { get; set; }

    }

    [Table("abhy_socialmgt_other_local_institues", Schema = "public")]
    public class abhy_socialmgt_other_local_institues
    {

        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string designation { get; set; }
        public string member_name { get; set; }
        public string gender { get; set; }
        public string reserved_unreserved { get; set; }
        public string contact_number { get; set; }

    }
    //B tol population
    [Table("abhy_socialmgt_tol_population", Schema = "public")]
    public class abhy_socialmgt_tol_population
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string tol_population { get; set; }
        public string basic_data { get; set; }
        public string pop_20_21 { get; set; }
        public string pop_21_22 { get; set; }
        public string pop_22_23 { get; set; }
        public string pop_23_24 { get; set; }
        public string pop_24_25 { get; set; }
        public string cumulative { get; set; }


    }

    [Table("abhy_socialmgt_socio_economic", Schema = "public")]
    public class abhy_socialmgt_socio_economic
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string male_basic_data { get; set; }
        public string male_pop_20_21 { get; set; }
        public string male_pop_21_22 { get; set; }
        public string male_pop_22_23 { get; set; }
        public string male_pop_23_24 { get; set; }
        public string male_pop_24_25 { get; set; }
        public string male_cumulative { get; set; }
        public string female_basic_data { get; set; }
        public string female_pop_20_21 { get; set; }
        public string female_pop_21_22 { get; set; }
        public string female_pop_22_23 { get; set; }
        public string female_pop_23_24 { get; set; }
        public string female_pop_24_25 { get; set; }
        public string female_cumulative { get; set; }
        public string sexratio_basic_data { get; set; }
        public string sexratio_pop_20_21 { get; set; }
        public string sexratio_pop_21_22 { get; set; }
        public string sexratio_pop_22_23 { get; set; }
        public string sexratio_pop_23_24 { get; set; }
        public string sexratio_pop_24_25 { get; set; }
        public string sexratio_cumulative { get; set; }
        public string other_basic_year { get; set; }
        public string other_pop_20_21 { get; set; }
        public string other_pop_21_22 { get; set; }
        public string other_pop_22_23 { get; set; }
        public string other_pop_23_24 { get; set; }
        public string other_pop_24_25 { get; set; }


    }

    [Table("abhy_socialmgt_vulnerable_communities", Schema = "public")]
    public class abhy_socialmgt_vulnerable_communities
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string bpl_basic_data { get; set; }
        public string bpl_pop_20_21 { get; set; }
        public string bpl_pop_21_22 { get; set; }
        public string bpl_pop_22_23 { get; set; }
        public string bpl_pop_23_24 { get; set; }
        public string bpl_pop_24_25 { get; set; }
        public string bpl_cumulative { get; set; }
        public string sc_basic_data { get; set; }
        public string sc_pop_20_21 { get; set; }
        public string sc_pop_21_22 { get; set; }
        public string sc_pop_22_23 { get; set; }
        public string sc_pop_23_24 { get; set; }
        public string sc_pop_24_25 { get; set; }
        public string sc_cumulative { get; set; }
        public string st_basic_data { get; set; }
        public string st_pop_20_21 { get; set; }
        public string st_pop_21_22 { get; set; }
        public string st_pop_22_23 { get; set; }
        public string st_pop_23_24 { get; set; }
        public string st_pop_24_25 { get; set; }
        public string st_cumulative { get; set; }
        public string obc_basic_data { get; set; }
        public string obc_pop_20_21 { get; set; }
        public string obc_pop_21_22 { get; set; }
        public string obc_pop_22_23 { get; set; }
        public string obc_pop_23_24 { get; set; }
        public string obc_pop_24_25 { get; set; }
        public string obc_cumulative { get; set; }
        public string minorities_basic_data { get; set; }
        public string minorities_pop_20_21 { get; set; }
        public string minorities_pop_21_22 { get; set; }
        public string minorities_pop_22_23 { get; set; }
        public string minorities_pop_23_24 { get; set; }
        public string minorities_pop_24_25 { get; set; }
        public string minorities_cumulative { get; set; }
        public string pwd_basic_data { get; set; }
        public string pwd_pop_20_21 { get; set; }
        public string pwd_pop_21_22 { get; set; }
        public string pwd_pop_22_23 { get; set; }
        public string pwd_pop_23_24 { get; set; }
        public string pwd_pop_24_25 { get; set; }
        public string pwd_cumulative { get; set; }
        public string women_hh_basic_data { get; set; }
        public string women_hh_pop_20_21 { get; set; }
        public string women_hh_pop_21_22 { get; set; }
        public string women_hh_pop_22_23 { get; set; }
        public string women_hh_pop_23_24 { get; set; }
        public string women_hh_pop_24_25 { get; set; }
        public string women_hh_cumulative { get; set; }

    }
    [Table("abhy_socialmgt_farmers", Schema = "public")]
    public class abhy_socialmgt_farmers
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string large_basic_data { get; set; }
        public string large_pop_20_21 { get; set; }
        public string large_pop_21_22 { get; set; }
        public string large_pop_22_23 { get; set; }
        public string large_pop_23_24 { get; set; }
        public string large_pop_24_25 { get; set; }
        public string large_cumulative { get; set; }
        public string marginal_basic_data { get; set; }
        public string marginal_pop_20_21 { get; set; }
        public string marginal_pop_21_22 { get; set; }
        public string marginal_pop_22_23 { get; set; }
        public string marginal_pop_23_24 { get; set; }
        public string marginal_pop_24_25 { get; set; }
        public string marginal_cumulative { get; set; }
        public string small_basic_data { get; set; }
        public string small_pop_20_21 { get; set; }
        public string small_pop_21_22 { get; set; }
        public string small_pop_22_23 { get; set; }
        public string small_pop_23_24 { get; set; }
        public string small_pop_24_25 { get; set; }
        public string small_cumulative { get; set; }
        public string medium_basic_data { get; set; }
        public string medium_pop_20_21 { get; set; }
        public string medium_pop_21_22 { get; set; }
        public string medium_pop_22_23 { get; set; }
        public string medium_pop_23_24 { get; set; }
        public string medium_pop_24_25 { get; set; }
        public string medium_cumulative { get; set; }
        public string landless_basic_data { get; set; }
        public string landless_pop_20_21 { get; set; }
        public string landless_pop_21_22 { get; set; }
        public string landless_pop_22_23 { get; set; }
        public string landless_pop_23_24 { get; set; }
        public string landless_pop_24_25 { get; set; }
        public string landless_cumulative { get; set; }
    }
    [Table("abhy_socialmgt_iec_activities", Schema = "public")]
    public class abhy_socialmgt_iec_activities
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string print_media { get; set; }
        public string loud_speakers { get; set; }
        public string radio { get; set; }
        public string audio_visual { get; set; }
        public string cabletv { get; set; }
        public string road_shows { get; set; }
        public string street_plays { get; set; }
        public string door_to_door { get; set; }
        public string others { get; set; }
        public string year { get; set; }


    }
    [Table("abhy_socialmgt_village_meetings", Schema = "public")]
    public class abhy_socialmgt_village_meetings
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string location { get; set; }
        public string prior_info { get; set; }
        public string noof_attendees { get; set; }
        public string disaggregated_data { get; set; }
        public string key_issues { get; set; }
        public string mom { get; set; }
        public string photographs { get; set; }
        //new columns added
        public string name_of_meeting { get; set; }
        public string curr_date { get; set; }
        public string mom_filename { get; set; }
        public string photographs_filename { get; set; }
        public string male { get; set; }
        public string female { get; set; }
        public string other { get; set; }
        public string total { get; set; }
    }
    [Table("abhy_socialmgt_community_feedback", Schema = "public")]
    public class abhy_socialmgt_community_feedback
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string community_feedback { get; set; }
        public string community_feedback_filename { get; set; }

    }
    [Table("abhy_socialmgt_social_audit", Schema = "public")]
    public class abhy_socialmgt_social_audit
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string toolkit { get; set; }
        public string pilot_under { get; set; }
        public string rollout_cal { get; set; }
        public string audit_report { get; set; }
        public string analysis_summary { get; set; }
        public string year { get; set; }
    }
    [Table("abhy_socialmgt_grm", Schema = "public")]
    public class abhy_socialmgt_grm
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string sys_aval { get; set; }
        public string tollfreeno { get; set; }
        public string adds_dissemination { get; set; }
        public string noof_complaints { get; set; }
        public string noof_resolved { get; set; }
        public string noof_pending { get; set; }
    }
    [Table("abhy_socialmgt_capacity_building", Schema = "public")]
    public class abhy_socialmgt_capacity_building
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string training_schedule { get; set; }
        public string training_materials { get; set; }
        public string noof_trainings { get; set; }
        public string training_report { get; set; }
        public string achievements { get; set; }
        public string findings_of_survey { get; set; }
        public string actual_training { get; set; }
        //new columns added
        public string name_of_training { get; set; }
        public string training_location { get; set; }
        public string training_date { get; set; }
        public string train_schedule_filename { get; set; }
        public string train_materials_filename { get; set; }
        public string nooftrain_filename { get; set; }
        public string training_report_filename { get; set; }
        public string achievements_filename { get; set; }
        public string findings_filename { get; set; }
        public string year { get; set; }
    }

    //mis tables
    [Table("abhy_mis_pip_b_activity", Schema = "public")]
    public class abhy_mis_pip_b_activity
    {
        [Key]
        public int? id { get; set; }
        public string pip_b_component_id { get; set; }
        public string pip_b_sub_component_id { get; set; }
        public string pip_b_activity_id { get; set; }
        public string pip_b_item_code { get; set; }
        public string pip_b_work_activity_name { get; set; }
    }

    [Table("abhy_mis_awp_b_activity", Schema = "public")]
    public class abhy_mis_awp_b_activity
    {
        [Key]
        public int? id { get; set; }
        public string awp_b_component_id { get; set; }
        public string awp_b_sub_component_id { get; set; }
        public string awp_b_activity_id { get; set; }
        public string awp_b_item_code { get; set; }
        public string awp_b_work_activity_name { get; set; }
    }

    [Table("abhy_mis_pip_activity", Schema = "public")]
    public class abhy_mis_pip_activity
    {
        [Key]
        public int? id { get; set; }
        public string pip_component_id { get; set; }
        public string pip_sub_component_id { get; set; }
        public string pip_activity_id { get; set; }
        public string pip_item_code { get; set; }
        public string pip_work_activity_name { get; set; }
        public string is_npmu { get; set; }
    }

    [Table("abhy_mis_awp_activity", Schema = "public")]
    public class abhy_mis_awp_activity
    {
        [Key]
        public int? id { get; set; }
        public string awp_component_id { get; set; }
        public string awp_sub_component_id { get; set; }
        public string awp_activity_id { get; set; }
        public string awp_item_code { get; set; }
        public string awp_work_activity_name { get; set; }
        public string awp_category { get; set; }
        public string is_npmu { get; set; }
    }

    [Table("abhy_mis_pip_form", Schema = "public")]
    public class abhy_mis_pip_form
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string pip_item_code { get; set; }
        public string pip_total { get; set; }
        public string pip_unit { get; set; }
        public string pip_workactivity { get; set; }
        public string pip_physical_year1_20_21 { get; set; }
        public string pip_financial_year1_20_21 { get; set; }
        public string pip_physical_year2_21_22 { get; set; }
        public string pip_financial_year2_21_22 { get; set; }
        public string pip_physical_year3_22_23 { get; set; }
        public string pip_financial_year3_22_23 { get; set; }
        public string pip_physical_year4_23_24 { get; set; }
        public string pip_financial_year4_23_24 { get; set; }
        public string pip_physical_year5_24_25 { get; set; }
        public string pip_financial_year5_24_25 { get; set; }
        public string pip_remarks { get; set; }
        public string pip_estimated_cost_for_five_years { get; set; }
        public string pip_uid { get; set; }
        public string pip_date_time { get; set; }
        public string pip_timeline { get; set; }
        public string pip_agency_name { get; set; }
        public string pip_agency_officer_name { get; set; }
        public string pip_activity_id { get; set; }
        public string pipcomponent { get; set; }

    }

    [Table("abhy_mis_awp_form", Schema = "public")]
    public class abhy_mis_awp_form
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string awp_item_code { get; set; }
        public string awp_total { get; set; }
        public string awp_unit { get; set; }
        public string awp_workactivity { get; set; }
        public string awp_physical_year_20_21 { get; set; }
        public string awp_financial_year_20_21 { get; set; }
        public string awpid { get; set; }
        public string awpcomponent { get; set; }
        public string awp_estimated_cost_for_five_years { get; set; }
        public string awp_uid { get; set; }
        public string awp_date_time { get; set; }
        public string awp_agency_name { get; set; }
        public string awp_agency_officer_name { get; set; }
        public string awp_activity_id { get; set; }
        public string awp_fin_year { get; set; }
        public string awp_month { get; set; }
        public string awp_cumulative { get; set; }
        public string awp_category { get; set; }

    }

    [Table("abhy_mis_pip_b_form", Schema = "public")]
    public class abhy_mis_pip_b_form
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string pip_item_code { get; set; }
        public string pip_total { get; set; }
        public string pip_unit { get; set; }
        public string pip_workactivity { get; set; }
        public string pip_physical_year1_20_21 { get; set; }
        public string pip_financial_year1_20_21 { get; set; }
        public string pip_physical_year2_21_22 { get; set; }
        public string pip_financial_year2_21_22 { get; set; }
        public string pip_physical_year3_22_23 { get; set; }
        public string pip_financial_year3_22_23 { get; set; }
        public string pip_physical_year4_23_24 { get; set; }
        public string pip_financial_year4_23_24 { get; set; }
        public string pip_physical_year5_24_25 { get; set; }
        public string pip_financial_year5_24_25 { get; set; }
        public string pip_remarks { get; set; }
        public string pip_estimated_cost_for_five_years { get; set; }
        public string pip_uid { get; set; }
        public string pip_date_time { get; set; }
        public string pip_timeline { get; set; }
        public string pip_agency_name { get; set; }
        public string pip_agency_officer_name { get; set; }
        public string pip_activity_id { get; set; }
        public string pipcomponent { get; set; }

    }

    [Table("abhy_mis_awp_b_form", Schema = "public")]
    public class abhy_mis_awp_b_form
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string awp_item_code { get; set; }
        public string awp_total { get; set; }
        public string awp_unit { get; set; }
        public string awp_workactivity { get; set; }
        public string awp_physical_year_20_21 { get; set; }
        public string awp_financial_year_20_21 { get; set; }
        public string awpid { get; set; }
        public string awpcomponent { get; set; }
        public string awp_estimated_cost_for_five_years { get; set; }
        public string awp_uid { get; set; }
        public string awp_date_time { get; set; }
        public string awp_agency_name { get; set; }
        public string awp_agency_officer_name { get; set; }
        public string awp_activity_id { get; set; }
        public string awp_fin_year { get; set; }
        public string awp_cumulative { get; set; }
        public string awp_month { get; set; }

    }

    [Table("abhy_mis_pip_awp_feedback", Schema = "public")]
    public class abhy_mis_pip_awp_feedback
    {
        [Key]
        public int? id { get; set; }
        public string state_name { get; set; }
        public string spmu { get; set; }
        public string nodal_agency_name { get; set; }
        public string observation_type { get; set; }

    }


    //financial progress dropdown
    [Table("abhy_financialprogress_dropdown", Schema = "public")]
    public class abhy_financialprogress_dropdown
    {
        [Key]
        public int? id { get; set; }
        public string component_id { get; set; }
        public string sub_component_id { get; set; }
        public string activity_id { get; set; }
        public string item_code { get; set; }
        public string activity_name { get; set; }
        public string component_budget_head { get; set; }
        public string expenditure_code { get; set; }
        public string state_name { get; set; }
        public string category { get; set; }
    }

    //finacial progress insert data View
    [Table("abhy_financialprogress_insertdata_vw", Schema = "public")]
    public class abhy_financialprogress_insertdata_vw
    {

        public int id { get; set; }
        public int? userid { get; set; }
        public string component_id { get; set; }
        public string sub_component_id { get; set; }
        public string activity_id { get; set; }
        public string item_code { get; set; }
        public string activity_name { get; set; }
        public string component_budget_head { get; set; }
        public string expenditure_code { get; set; }
        public string physical_awp { get; set; }
        public string financial_awp { get; set; }
        public string producrment_selection { get; set; }
        public string category_of_procurement { get; set; }
        public string expenditure_made { get; set; }
        public string cumulative_expenditure { get; set; }
        public string activity_date { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string state_name { get; set; }
        public string cumulative_sum { get; set; }
        public string fin_month { get; set; }
        public string fin_year { get; set; }
        public string fin_agency_name { get; set; }
        public string fin_officer_name { get; set; }
        public int month_number { get; set; }
        public int fyyear { get; set; }

    }
    //finacial progress insert data
    [Table("abhy_financialprogress_insertdata", Schema = "public")]
    public class abhy_financialprogress_insertdata
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string component_id { get; set; }
        public string sub_component_id { get; set; }
        public string activity_id { get; set; }
        public string item_code { get; set; }
        public string activity_name { get; set; }
        public string component_budget_head { get; set; }
        public string expenditure_code { get; set; }
        public string physical_awp { get; set; }
        public string financial_awp { get; set; }
        public string producrment_selection { get; set; }
        public string category_of_procurement { get; set; }
        public string expenditure_made { get; set; }
        public string cumulative_expenditure { get; set; }
        public string activity_date { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string state_name { get; set; }

        //new columns
        public string cumulative_sum { get; set; }
        public string fin_month { get; set; }
        public string fin_year { get; set; }
        public string fin_agency_name { get; set; }
        public string fin_officer_name { get; set; }

    }

    //finacial progress B component dropdown and insertdata
    [Table("abhy_financialprogress_b_dropdown", Schema = "public")]
    public class abhy_financialprogress_b_dropdown
    {
        [Key]
        public int? id { get; set; }
        public string component_id { get; set; }
        public string activity_name { get; set; }
        public string component_budget_head { get; set; }
        public string expenditure_code { get; set; }
        public string state_name { get; set; }

    }

    [Table("abhy_financialprogress_b_insertdata", Schema = "public")]
    public class abhy_financialprogress_b_insertdata
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string component_id { get; set; }
        public string activity_name { get; set; }
        public string component_budget_head { get; set; }
        public string expenditure_code { get; set; }
        public string expenditure_made { get; set; }
        public string cumulative_expenditure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string state_name { get; set; }
        public string activity_date { get; set; }

        //new columns
        public string fin_b_cumulative_sum { get; set; }
        public string fin_b_month { get; set; }
        public string fin_b_year { get; set; }
        public string fin_b_agency_name { get; set; }
        public string fin_b_officer_name { get; set; }
        //new columns
        public string dli_selection { get; set; }
        public string dli_amt { get; set; }
        public string total_amt_recieved { get; set; }

    }

    [Table("abhy_financialprogress_b_insertdata_vw", Schema = "public")]
    public class abhy_financialprogress_b_insertdata_vw
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string component_id { get; set; }
        public string activity_name { get; set; }
        public string component_budget_head { get; set; }
        public string expenditure_code { get; set; }
        public string expenditure_made { get; set; }
        public string cumulative_expenditure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string state_name { get; set; }
        public string activity_date { get; set; }

        //new columns
        public string fin_b_cumulative_sum { get; set; }
        public string fin_b_month { get; set; }
        public string fin_b_year { get; set; }
        public string fin_b_agency_name { get; set; }
        public string fin_b_officer_name { get; set; }
        //new columns
        public string dli_selection { get; set; }
        public string dli_amt { get; set; }
        public string total_amt_recieved { get; set; }

        public int month_number { get; set; }
        public int fyyear { get; set; }

    }

    //type_downloads

    [Table("abhy_financialprogress_type_download", Schema = "public")]
    public class abhy_financialprogress_type_download
    {
        [Key]
        public int? id { get; set; }
        public string category_name { get; set; }
        public string category_type { get; set; }
        public string state_name { get; set; }
    }


    //physical monitoring service dropdown
    [Table("abhy_physicalmonitoring_dropdown", Schema = "public")]
    public class abhy_physicalmonitoring_dropdown
    {
        [Key]
        public int? id { get; set; }
        public string support_name { get; set; }
        public string support_description { get; set; }
        public string item_code { get; set; }
        public string support_type { get; set; }
    }

    [Table("abhy_physicalmonitoring_dropdown_new3", Schema = "public")]
    public class abhy_physicalmonitoring_dropdown_new3
    {
        [Key]
        public int? id { get; set; }
        public string sub_data_year { get; set; }
        public string support_description { get; set; }
        public string item_code { get; set; }
        public string sub_data { get; set; }

    }

    [Table("abhy_physicalmonitoring_dropdown_new", Schema = "public")]
    public class abhy_physicalmonitoring_dropdown_new
    {
        [Key]
        public int? id { get; set; }
        public string support_name { get; set; }
        public string support_description { get; set; }
        public string item_code { get; set; }
        public string sub_support_type { get; set; }

    }
    [Table("abhy_physicalmonitoring_dropdown_new2", Schema = "public")]
    public class abhy_physicalmonitoring_dropdown_new2
    {
        [Key]
        public int? id { get; set; }
        public string sub_data { get; set; }
        public string support_description { get; set; }
        public string item_code { get; set; }
        public string sub_support_type { get; set; }

    }

    [Table("abhy_physicalmonitoring_insertdata", Schema = "public")]
    public class abhy_physicalmonitoring_insertdata
    {
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string agency_name { get; set; }
        public string support_type { get; set; }
        public string support_name { get; set; }
        public string support_description { get; set; }
        public string support_item_code { get; set; }
        public string support_month { get; set; }
        public string support_year { get; set; }
        public string support_targeted_number { get; set; }
        public string support_estimated_cost { get; set; }
        public string support_item_procured { get; set; }
        public string support_total { get; set; }
        public string support_cumulative_total { get; set; }
        public string support_remark { get; set; }
        public string curr_date { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        //abhishek
        public string sub_support_type { get; set; }
        public string sub_data { get; set; }        //abhi07/04
        public string sub_data_year { get; set; }   //abhi07/04
        public string material_type { get; set; }

    }
    [Table("state_awp_target", Schema = "public")]
    public class state_awp_target
    {
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string year { get; set; }
        public string awp_target { get; set; }
        public string nodal { get; set; }
        
    }

    [Table("abhy_physicalmonitoring_insertdata_vw", Schema = "public")]
    public class abhy_physicalmonitoring_insertdata_view
    {
        public int id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string agency_name { get; set; }
        public string support_type { get; set; }
        public string support_name { get; set; }
        public string support_description { get; set; }
        public string support_item_code { get; set; }
        public string support_month { get; set; }
        public string support_year { get; set; }
        public string support_targeted_number { get; set; }
        public string support_estimated_cost { get; set; }
        public string support_item_procured { get; set; }
        public string support_total { get; set; }
        public string support_cumulative_total { get; set; }
        public string support_remark { get; set; }
        public string curr_date { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        //abhishek
        public string sub_support_type { get; set; }
        public string sub_data { get; set; }        //abhi07/04
        public string sub_data_year { get; set; }   //abhi07/04
        public int month_number { get; set; }
        public int fyyear { get; set; }
        public string material_type { get; set; }
    }

    [Table("abhy_procurement_milestone_dropdown", Schema = "public")]
    public class abhy_procurement_milestone_dropdown
    {
        [Key]
        public int? id { get; set; }
        public string component_id { get; set; }
        public string sub_component_id { get; set; }
        public string activity_id { get; set; }
        public string item_code { get; set; }
        public string activity_name { get; set; }
        public string producrment_selection { get; set; }
        public string category_of_procurement { get; set; }
    }

    //abhy_procurement_milestone_insertdata

    [Table("abhy_procurement_milestone_insertdata", Schema = "public")]
    public class abhy_procurement_milestone_insertdata
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string component_id { get; set; }
        public string sub_component_id { get; set; }
        public string activity_id { get; set; }
        public string item_code { get; set; }
        public string activity_name { get; set; }
        public string producrment_selection { get; set; }
        public string category_of_procurement { get; set; }
        public string estimated_cost { get; set; }
        public string rfp_date { get; set; }
        public string tender_no { get; set; }
        public string bid_date { get; set; }
        public string bid_evalution_date { get; set; }
        public string award_date { get; set; }
        public string completion_date { get; set; }
        public string agency_name { get; set; }
        public string state_name { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        //new columns
        public string description_service { get; set; }
        public string email_office { get; set; }
        public string tender_id { get; set; }
        public string noof_envelopes { get; set; }
        public string bid_open_date { get; set; }
        public string website_url { get; set; }
        public string filename { get; set; }
        public string filepath { get; set; }
        public string deadline_date { get; set; }
        public string valid_bids { get; set; }
        public string evaluation_report_date { get; set; }
        public string final_evaluation_report_date { get; set; }
        public string contract_award_date { get; set; }
        public string tender_amt { get; set; }
        public string name_of_consultant { get; set; }
        public string aggreement_sign_date { get; set; }
        public string stipulated_date { get; set; }
        public string extension_number { get; set; }
        public string latest_ext_date { get; set; }
        public string contract_price { get; set; }
        public string expenditure_contract { get; set; }
        public string terminated_date { get; set; }
        public string proc_remarks { get; set; }
        public string workactivity_other { get; set; }
        public string district_agency { get; set; }
        public string bids_received { get; set; }
        public string rfp_date_other { get; set; }
        public string nomination_ref_no { get; set; }
        public string nomination_rec_date { get; set; }
        public string accepted_nomination_amt { get; set; }

    }

    public class apiviewtender
    {
       
        public string agency_name { get; set; }
        public string activity_name { get; set; }
        public string producrment_selection { get; set; }
        public string category_of_procurement { get; set; }
        public string description_service { get; set; }
        public string rfp_date { get; set; }
        public string email_office { get; set; }
        public string tender_no { get; set; }
        public string estimated_cost { get; set; }
        public string bid_date { get; set; }
        public string tender_id { get; set; }
        public string bid_evalution_date { get; set; }
        public string award_date { get; set; }
        public string completion_date { get; set; }
        public string noof_envelopes { get; set; }
        public string deadline_date { get; set; }
        public string bid_open_date { get; set; }
        public string website_url { get; set; }
        public string filepath { get; set; }
        public string filename { get; set; }
    }

    [Table("incentive_fund_utilization", Schema = "public")]
    public class incentive_fund_utilization
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string work_sel { get; set; }
        public string Component_Id { get; set; }
        public string Component_Budget_Head_EAP { get; set; }
        public string Expenditure_Code { get; set; }
        public string proc_sel { get; set; }
        public string Category_of_Procurement { get; set; }
        public string ofd_sel { get; set; }
        public string Name_of_Consultant { get; set; }
        public string Contract_Price { get; set; }
        public string Date_of_singning { get; set; }
        public string Date_of_Completion { get; set; }
        public string Total_Payment { get; set; }
        public string Complaints { get; set; }
        public string Remarks { get; set; }

        public string contact_ref_id { get; set; }
        public string entry_time { get; set; }
    }



    //type_downloads

    [Table("abhy_procurement_milestone_type_download", Schema = "public")]
    public class abhy_procurement_milestone_type_download
    {
        [Key]
        public int? id { get; set; }
        public string category_name { get; set; }
        public string category_type { get; set; }

    }

    [Table("abhy_phymon_fund_release", Schema = "public")]
    public class abhy_phymon_fund_release
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string agency_name { get; set; }
        public string fund_total_allocated { get; set; }
        public string fund_year { get; set; }
        //public string fund_spmu { get; set; }
        public string fund_tranche_no { get; set; }
        public string fund_file_no { get; set; }
        public string fund_sanction_date { get; set; }
        public string fund_certificate_submited { get; set; }
        public string fund_certificate_submited_date { get; set; }
        public string fund_grant_aid_general_a { get; set; }
        public string fund_grant_aid_capital_a { get; set; }
        public string fund_grant_aid_a_total { get; set; }
        public string fund_general_aid_b_value { get; set; }
        public string fund_grant_aid_general_b { get; set; }
        public string fund_capital_aid_b_value { get; set; }
        //public string fund_grant_aid_general_b_dli1 { get; set; }
        //public string fund_grant_aid_general_b_dli2 { get; set; }
        //public string fund_grant_aid_general_b_dli3 { get; set; }
        //public string fund_grant_aid_general_b_dli4 { get; set; }
        //public string fund_grant_aid_general_b_dli5 { get; set; }
        public string fund_grant_aid_general_b_total { get; set; }
        public string fund_grant_aid_capital_b { get; set; }
        //public string fund_grant_aid_capital_b_dli1 { get; set; }
        //public string fund_grant_aid_capital_b_dli2 { get; set; }
        //public string fund_grant_aid_capital_b_dli3 { get; set; }
        //public string fund_grant_aid_capital_b_dli4 { get; set; }
        //public string fund_grant_aid_capital_b_dli5 { get; set; }
        public string fund_grant_aid_capital_b_total { get; set; }
        public string fund_total_sum_a_b { get; set; }
        public string fund_cumalative_amt { get; set; }
        public string fund_timeline { get; set; }
        public string state_name { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string fund_date { get; set; }

        public string grant_in_aid_dli_general_a { get; set; }
        public string grant_in_aid_general_a { set; get; }
    }


    //contact details NPMU/SPMU/CGWB
    [Table("abhy_contact_npmu", Schema = "public")]
    public class abhy_contact_npmu
    {
        [Key]
        public int id { get; set; }
        public string officer_name { get; set; }
        public string officer_designation { get; set; }
        public string office_name { get; set; }
        public string officer_phone { get; set; }
        public string officer_emailid { get; set; }
        public string list_order { get; set; }

    }

    [Table("abhy_contact_spmu", Schema = "public")]
    public class abhy_contact_spmu
    {
        [Key]
        public int id { get; set; }
        public string state_name { get; set; }
        public string officer_name { get; set; }
        public string officer_designation { get; set; }
        public string office_name { get; set; }
        public string officer_phone { get; set; }
        public string officer_emailid { get; set; }
        public string officer_type { get; set; }
    }

    [Table("abhy_contact_cgwb", Schema = "public")]
    public class abhy_contact_cgwb
    {
        [Key]
        public int id { get; set; }
        public string officer_name { get; set; }
        public string officer_designation { get; set; }
        public string office_name { get; set; }
        public string officer_phone { get; set; }
        public string officer_emailid { get; set; }
        public string list_order { get; set; }

    }

    //retriving dsta from both PIP A and B component in single table
    public class PIP_AWP_Agency_Report
    {
        public List<abhy_mis_pip_form> abhy_mis_pip_form { get; set; }
        public List<abhy_mis_pip_b_form> abhy_mis_pip_b_form { get; set; }

    }

    //new feedback form
    [Table("abhy_feedback_new", Schema = "public")]
    public class abhy_feedback_new
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string participant_name { get; set; }
        public string participant_address { get; set; }
        public string program_title { get; set; }
        public string venue { get; set; }
        public string start_date { get; set; }
        public string duration { get; set; }
        public string strcuture_of_course { get; set; }
        public string strcuture_of_course_rating { get; set; }
        public string course_material { get; set; }
        public string course_material_rating { get; set; }
        public string teaching_faculty { get; set; }
        public string teaching_faculty_rating { get; set; }
        public string partical_session { get; set; }
        public string partical_session_rating { get; set; }
        public string food_quality_logging_facility { get; set; }
        public string food_quality_logging_facility_rating { get; set; }
        public string interaction_with_faculty { get; set; }
        public string interaction_with_faculty_rating { get; set; }
        public string unless_of_course { get; set; }
        public string unless_of_course_rating { get; set; }
        public string overall_impression { get; set; }
        public string overall_impression_rating { get; set; }
        public string course_found1 { get; set; }
        public string course_found2 { get; set; }
        public string course_found3 { get; set; }
        public string other_state_name { get; set; }
        public string registration_no { get; set; }

    }

    //events and calender search 
    public class TrainingSearchModel
    {
        public abhy_training_workshops eventsvm { get; set; }
        public abhy_training_newregs newregsvm { get; set; }
    }


    //Environment safeguard tool download

    [Table("abhy_safeguard_tool_download", Schema = "public")]
    public class abhy_safeguard_tool_download
    {
        [Key]
        public int? id { get; set; }
        public string safeguard_tool { get; set; }
        public string safeguard_when { get; set; }
        public string safeguard_download { get; set; }
        public string safegaurd_download_path { get; set; }
    }



    //Environment Safeguard Tool
    [Table("abhy_safeguard_tool", Schema = "public")]
    public class abhy_safeguard_tool
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string safeguard_waterstructure_type { get; set; }
        public string safeguard_tool { get; set; }
        public string safeguard_when { get; set; }
        public string safeguard_download { get; set; }
        public string safeguard_filename { get; set; }
        public string safeguard_filepath { get; set; }
        public string safeguard_compliance { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string finacial_year { get; set; }
        public string resused_water_irri { get; set; }

    }

    [Table("abhy_disclosure", Schema = "public")]
    public class abhy_disclosure
    {
        [Key]
        public int? id { get; set; }
        public string state_name { get; set; }
        public string filename { get; set; }
        public string filepath { get; set; }
        public string module { get; set; }
    }


    [Table("abhy_disclosure_23", Schema = "public")]
    public class abhy_disclosure_23
    {
        [Key]
        public int? id { get; set; }
        public string state_name { get; set; }
        public string filename { get; set; }
        public string filepath { get; set; }
        public string module { get; set; }
    }


    [Table("abhy_training_manuals", Schema = "public")]
    public class abhy_training_manuals
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string manualname_mobile { get; set; }
        public string filename_mobile { get; set; }
        public string filepath_mobile { get; set; }
        public string manualname_mis { get; set; }
        public string filename_mis { get; set; }
        public string filepath_mis { get; set; }
        public string manualname_wsp { get; set; }
        public string filename_wsp { get; set; }
        public string filepath_wsp { get; set; }
        public string manual_date { get; set; }
    }

    [Table("abhy_mis_wsp_approved", Schema = "public")]
    public class abhy_mis_wsp_approved
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string wsp_finename { get; set; }
        public string wsp_filepath { get; set; }
        public string wsp_22_finename { get; set; }
        public string wsp_22_filepath { get; set; }
        public string wsp_23_finename { get; set; }
        public string wsp_23_filepath { get; set; }
        public string wsp_24_finename { get; set; }
        public string wsp_24_filepath { get; set; }
        public string wsp_25_finename { get; set; }
        public string wsp_25_filepath { get; set; }
        public string wsp_date { get; set; }
        public string month_name { get; set; }
        public string isarchive { get; set; }
        public string fy_year { get; set; }
        public string wsp_update_date { get; set; }
        public string wsp_update_filename { get; set; }
        public string wsp_update_filepath { get; set; }
        public string revised_wsp_date { get; set; }
        public string revised_wsp_filename { get; set; }
        public string revised_wsp_filepath { get; set; }
        public string entry_by { get; set; }
        public string wsp_23_date { get; set; }
        public string wsp_23_users { get; set; }
        public string wsp_23_update_file { get; set; }
        public string wsp_23_update_path { get; set; }
        public string wsp_23_update_date { get; set; }
        public string wsp_23_update_users { get; set; }
    }

    [Table("abhy_stateofficer_regs", Schema = "public")]
    public class abhy_stateofficer_regs
    {
        [Key]
        public int? id { get; set; }
        public string state_name { get; set; }
        public string stateofficer_mailid { get; set; }
    }

    public class WSP_TrakerDataModel
    {
        public List<abhy_gpdata_new> abhy_gpdata_new { get; set; }
        public List<PGWN_Department_Details> PGWN_Department_Details { get; set; }
        public List<abhy_wateravailability_new> abhy_wateravailability_new { get; set; }
        public List<abhy_waterdraft_domestic_new> abhy_waterdraft_domestic_new { get; set; }
        public List<abhy_waterbudget_new> abhy_waterbudget_new { get; set; }
        public List<abhy_waterbalance_new> abhy_waterbalance_new { get; set; }
        public List<abhy_demandside_sprinkler_saveddata> abhy_demandside_sprinkler_saveddata { get; set; }
        public List<supply_AR_Structures> supply_AR_Structures { get; set; }
    }

    [Table("abhy_wsp_parameters", Schema = "public")]
    public class abhy_wsp_parameters
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string block_area { get; set; }
        public string block_area_unit { get; set; }
        public string block_area_source { get; set; }
        public string gp_area { get; set; }
        public string gp_area_unit { get; set; }
        public string gp_area_source { get; set; }
        public string annual_rainfall { get; set; }
        public string annual_rainfall_unit { get; set; }
        public string annual_rainfall_source { get; set; }
        public string evapo { get; set; }
        public string evapo_unit { get; set; }
        public string evapo_source { get; set; }
        public string surface_water_bodies { get; set; }
        public string surface_water_bodies_unit { get; set; }
        public string surface_water_bodies_source { get; set; }
        public string human_population { get; set; }
        public string human_population_unit { get; set; }
        public string human_population_source { get; set; }
        public string livestock_population { get; set; }
        public string livestock_population_unit { get; set; }
        public string livestock_population_source { get; set; }
        public string from_surface_water { get; set; }
        public string from_surface_water_unit { get; set; }
        public string from_surface_water_source { get; set; }
        public string from_ground_water { get; set; }
        public string from_ground_water_unit { get; set; }
        public string from_ground_water_source { get; set; }
        public string water_req_various_crops { get; set; }
        public string water_req_various_crops_unit { get; set; }
        public string water_req_various_crops_source { get; set; }
        public string curr_date { get; set; }

    }
    [Table("abhy_email_verification", Schema = "public")]
    public class abhy_email_verification
    {
        [Key]
        public int? id { get; set; }
        public string email { get; set; }
        public string email_count { get; set; }
        public string verification_code { get; set; }
        public string date_today { get; set; }
        public string time_today { get; set; }
        public string application_type { get; set; }
    }

    [Table("abhy_fund_requirements", Schema = "public")]
    public class abhy_fund_requirements
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string fund_date { get; set; }
        public string demandside_module { get; set; }
        public string demandside_funding_source { get; set; }
        public string demandside_funding_source_others { get; set; }
        public string demandside_gap_funding { get; set; }
        public string demandside_fund_through_convergance { get; set; }
        public string supplyside_module { get; set; }
        public string supplyside_fund_through_convergance { get; set; }
        public string supplyside_gap_funding { get; set; }

    }
    [Table("abhy_forgotpwd", Schema = "public")]
    public class abhy_forgotpwd
    {
        [Key]
        public int? id { get; set; }
        public string nodalofficer { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string resetlink { get; set; }
        public string activedate { get; set; }
        public string time_today { get; set; }
        public string application_type { get; set; }

    }

    public class Agency_Reports_Model_Class
    {
        public List<abhy_mis_pip_form> obj_abhy_mis_pip_form { get; set; }
        public List<abhy_mis_awp_form> obj_abhy_mis_awp_form { get; set; }
        public List<abhy_mis_pip_b_form> obj_abhy_mis_pip_b_form { get; set; }
        public List<abhy_mis_awp_b_form> obj_abhy_mis_awp_b_form { get; set; }
        public List<abhy_phymon_fund_release> obj_abhy_phymon_fund_release { get; set; }
        public List<abhy_procurement_milestone_insertdata> obj_abhy_procurement_milestone_insertdata { get; set; }
        public List<abhy_physicalmonitoring_insertdata> obj_abhy_physicalmonitoring_insertdata { get; set; }
        public List<abhy_financialprogress_b_insertdata> obj_abhy_financialprogress_b_insertdata { get; set; }
        public List<abhy_financialprogress_insertdata> obj_abhy_financialprogress_insertdata { get; set; }

    }

    [Table("abhy_logs", Schema = "public")]
    public class abhy_logs
    {
        [Key]
        public int sno { get; set; }
        public string userid { get; set; }
        public string ipaddress { get; set; }
        public string timestamp { get; set; }
        public string action_performed { get; set; }
        public string status { get; set; }
    }
    [Table("abhy_dli", Schema = "public")]
    public class abhy_DLI
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Target { get; set; }
        public string Achievement { get; set; }
        public string State { get; set; }
        public string Year { get; set; }
        public string WaterLevel_Achievement { set; get; }
        public string WaterQuality_Achievement { set; get; }
        public string HGR_Achievement { set; get; }


    }
    [Table("vw_abhy_feedback_latest_month_year", Schema = "public")]   //abhi
    public class vw_abhy_feedback_latest
    {
        [Key]
        public int id { get; set; }
        public string registration_no { get; set; }
        public string nodal_officer { get; set; }
        public string p_training_name { get; set; }
        public string participant_name { get; set; }
        public string level_of_event { get; set; }
        public string event_platform { get; set; }
        public string from_date { get; set; }
        public string to_date { get; set; }
        public string total_days { get; set; }
        public string structure_of_training { get; set; }
        public string course_material { get; set; }
        public string interaction_with_trainer { get; set; }
        public string hands_on_practice { get; set; }
        public string usefulness_of_contents { get; set; }
        public string information_presented { get; set; }
        public string participant_questions { get; set; }
        public string food_quality { get; set; }
        public string most_interesting_thing { get; set; }
        public string overall_impression { get; set; }
        public string your_suggestions { get; set; }
        public string clientcaptcha { get; set; }
        public string DateTime { get; set; }
        public string dist { get; set; }
        public string block { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string gender { get; set; }
        public string unic_key { get; set; }
        public string approve_status { get; set; }
    }
    [Table("mstr_states", Schema = "public")]        //chetan mstr 
    public class mstr_states
    {
        [Key]
        public int? state_id { get; set; }
        public string state_name { get; set; }
        public int? entry_by { get; set; }
        public int order_by { get; set; }

    }

    [Table("mstr_districts", Schema = "public")]        //chetan mstr
    public class mstr_districts
    {
        [Key]
        public int? district_id { get; set; }
        public int? state_id { get; set; }
        public string district_name { get; set; }
        public int? entry_by { get; set; }

    }


    [Table("mstr_blocks", Schema = "public")]        //chetan mstr
    public class mstr_blocks
    {
        [Key]
        public int? block_id { get; set; }
        public int? district_id { get; set; }
        public string block_name { get; set; }
        public int? entry_by { get; set; }

    }


    [Table("mstr_grampanchayat", Schema = "public")]        //chetan mstr 
    public class mstr_grampanchayat
    {
        [Key]
        public int? grampanchayat_id { get; set; }
        public int? block_id { get; set; }
        public string grampanchayat_name { get; set; }
        public int? entry_by { get; set; }

    }
    [Table("abhy_fund_release_monitoring_dd", Schema = "public")]
    public class abhy_fund_release_monitoring_dd
    {
        [Key]
        public int? id { get; set; }
        public string name { get; set; }

    }
    [Table("abhy_wsp_email_info", Schema = "public")]
    public class abhy_wsp_email_info
    {
        [Key]
        public int id { get; set; }
        public string email_id { get; set; }
        public string email_cc { get; set; }
        public int active { get; set; }

    }
    [Table("social_socialmgt_other_local_institues", Schema = "public")]
    public class social_socialmgt_other_local_institues
    {

        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string designation { get; set; }
        public string member_name { get; set; }
        public string gender { get; set; }
        public string reserved_unreserved { get; set; }
        public string contact_number { get; set; }
        public string comm_name { get; set; }
        public string category { get; set; }
        public string category_other { get; set; }
        public string date_of_commi { get; set; }
        public bool gp_sent { get; set; }
        public bool d_reject { get; set; }
        public bool d_sent { get; set; }
        public bool s_reject { get; set; }
        public bool approved { get; set; }
        public string remarks { get; set; }
        public string establishment_date { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
        public string approve { get; set; }
        public string remark { get; set; }


    }

    [Table("social_socialmgt_support_agency", Schema = "public")]
    public class social_socialmgt_support_agency
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string designation { get; set; }
        public string member_name { get; set; }
        public string ca_date_of_dip { get; set; }
        public string gender { get; set; }
        public string ddldesignation { get; set; }
        public string date_of_dip { get; set; }
        public string reserved_unreserved { get; set; }
        public string contact_number { get; set; }
        public bool gp_sent { get; set; }
        public bool d_reject { get; set; }
        public bool d_sent { get; set; }
        public bool s_reject { get; set; }
        public bool approved { get; set; }
        public string remarks { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
        public string approve { get; set; }
        public string remark { get; set; }
    }

    [Table("social_socialmgt_farmers", Schema = "public")]
    public class social_socialmgt_farmers
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string large_basic_data { get; set; }
        public string large_pop_20_21 { get; set; }
        public string large_pop_21_22 { get; set; }
        public string large_pop_22_23 { get; set; }
        public string large_pop_23_24 { get; set; }
        public string large_pop_24_25 { get; set; }
        public string large_cumulative { get; set; }
        public string marginal_basic_data { get; set; }
        public string marginal_pop_20_21 { get; set; }
        public string marginal_pop_21_22 { get; set; }
        public string marginal_pop_22_23 { get; set; }
        public string marginal_pop_23_24 { get; set; }
        public string marginal_pop_24_25 { get; set; }
        public string marginal_cumulative { get; set; }
        public string small_basic_data { get; set; }
        public string small_pop_20_21 { get; set; }
        public string small_pop_21_22 { get; set; }
        public string small_pop_22_23 { get; set; }
        public string small_pop_23_24 { get; set; }
        public string small_pop_24_25 { get; set; }
        public string small_cumulative { get; set; }
        public string medium_basic_data { get; set; }
        public string medium_pop_20_21 { get; set; }
        public string medium_pop_21_22 { get; set; }
        public string medium_pop_22_23 { get; set; }
        public string medium_pop_23_24 { get; set; }
        public string medium_pop_24_25 { get; set; }
        public string medium_cumulative { get; set; }
        public string medium_semi_basic_data { get; set; }
        public string medium_semi_pop_20_21 { get; set; }
        public string medium_semi_pop_21_22 { get; set; }
        public string medium_semi_pop_22_23 { get; set; }
        public string medium_semi_pop_23_24 { get; set; }
        public string medium_semi_pop_24_25 { get; set; }
        public string landless_basic_data { get; set; }
        public string landless_pop_20_21 { get; set; }
        public string landless_pop_21_22 { get; set; }
        public string landless_pop_22_23 { get; set; }
        public string landless_pop_23_24 { get; set; }
        public string landless_pop_24_25 { get; set; }
        public string landless_cumulative { get; set; }
        public bool gp_sent { get; set; }
        public bool d_reject { get; set; }
        public bool d_sent { get; set; }
        public bool s_reject { get; set; }
        public bool approved { get; set; }
        public string remarks { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
        public string approve { get; set; }
        public string remark { get; set; }

    }
    [Table("social_socialmgt_village_meetings", Schema = "public")]
    public class social_socialmgt_village_meetings
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string location { get; set; }
        public string prior_info { get; set; }
        public string noof_attendees { get; set; }
        public string disaggregated_data { get; set; }
        public string key_issues { get; set; }
        public string mom { get; set; }
        public string photographs { get; set; }
        public string name_of_meeting { get; set; }
        public string curr_date { get; set; }
        public string mom_filename { get; set; }
        public string photographs_filename { get; set; }
        public string male { get; set; }
        public string female { get; set; }
        public string other { get; set; }
        public string total { get; set; }
        public string no_of_sc_sc { get; set; }
        public string no_of_st_st { get; set; }
        public string no_of_gen { get; set; }
        public string no_of_obc { get; set; }
        public bool gp_sent { get; set; }
        public bool d_reject { get; set; }
        public bool d_sent { get; set; }
        public bool s_reject { get; set; }
        public bool approved { get; set; }
        public string remarks { get; set; }
        public string other_name_of_meeting { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
    }
    [Table("social_socialmgt_grm", Schema = "public")]
    public class social_socialmgt_grm
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }

        public string vil_awa_grm { get; set; }
        public string vil_awa_tfn { get; set; }
        public string mea_of_awar { get; set; }
        public string mea_of_awar_oth { get; set; }
        public string ddlawareness { get; set; }
        public bool gp_sent { get; set; }
        public bool d_reject { get; set; }
        public bool d_sent { get; set; }
        public bool s_reject { get; set; }
        public bool approved { get; set; }
        public string remarks { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
        public string approve { get; set; }
        public string remark { get; set; }
    }
    [Table("social_sarpanchdetails", Schema = "public")]
    public class social_sarpanchdetails
    {
        [Key]
        public int? id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string designation_name { get; set; }
        public string name { get; set; }
        public string contact_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string gender { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int? month_order_by { get; set; }
        public string entry_by { get; set; }
    }

    [Table("social_socialmgt_village_meetings_vw", Schema = "public")]
    public class social_socialmgt_village_meetings_vw
    {
        [Key]
        public int? id { get; set; }
        public int? userid { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string location { get; set; }
        public string prior_info { get; set; }
        public string noof_attendees { get; set; }
        public string disaggregated_data { get; set; }
        public string key_issues { get; set; }
        public string mom { get; set; }
        public string photographs { get; set; }
        public string name_of_meeting { get; set; }
        public string curr_date { get; set; }
        public string mom_filename { get; set; }
        public string photographs_filename { get; set; }
        public string male { get; set; }
        public string female { get; set; }
        public string other { get; set; }
        public string total { get; set; }
        public string no_of_sc_sc { get; set; }
        public string no_of_st_st { get; set; }
        public string no_of_gen { get; set; }
        public string no_of_obc { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string other_name_of_meeting { get; set; }
        public bool gp_sent { get; set; }
        public bool d_reject { get; set; }
        public bool d_sent { get; set; }
        public bool s_reject { get; set; }
        public bool approved { get; set; }
        public string remarks { get; set; }
        public string month { get; set; }
        public int month_order_by { get; set; }
        public string entry_by { get; set; }
    }

    [Table("social_socialmgt_remark", Schema = "public")]
    public class social_socialmgt_remark
    {
        public int id { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string remarks { get; set; }
        public string month { get; set; }
        public string approve { get; set; }


    }

    public class summery_report_mobile_app
    {
        public string statename { get; set; }
        public int totalgp { get; set; }
        public int welltotal { get; set; }
        public int welltotalgp { get; set; }
        public int wellnogp { get; set; }
        public int gwltotal { get; set; }
        public int gwltotalgp { get; set; }
        public int gwlnogp { get; set; }
        public int gwqtotal { get; set; }
        public int gwqtotalgp { get; set; }
        public int gwqnogp { get; set; }
        public int geototal { get; set; }
        public int geototalgp { get; set; }
        public int geonogp { get; set; }
        public int rainfalltotal { get; set; }
        public int rainfalltotalgp { get; set; }
        public int rainfallnogp { get; set; }
        public int waterflowtotal { get; set; }
        public int waterflowtotalgp { get; set; }
        public int waterflownogp { get; set; }
        public int socialtotal { get; set; }
        public int socialtotalgp { get; set; }
        public int socialnogp { get; set; }


    }

    public class social_report_class
    {
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public int Awareness_meetings_a { get; set; }
        public int Awareness_meetings_c { get; set; }
        public int WSP_Related_meetings_a { get; set; }
        public int WSP_Related_meetings_c { get; set; }
        public int other_a { get; set; }
        public int other_c { get; set; }
        public int train_c { get; set; }
        public int train_a { get; set; }
        public int total_a { get; set; }
        public int total_c { get; set; }
        public int male { get; set; }
        public int female { get; set; }
        public int trangender { get; set; }
        public int total { get; set; }
        public double percent_female { get; set; }
        public string year { get; set; }
        public string month { get; set; }

    }

    public class iec_report_class
    {
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string activity_other { get; set; }
        public int a_Awareness_meetings { get; set; }
        public int b_Awareness_meetings { get; set; }
        public int a_Road_Shows { get; set; }
        public int b_Road_Shows { get; set; }
        public int a_Street_Plays { get; set; }
        public int b_Street_Plays { get; set; }
        public int a_household { get; set; }
        public int b_household { get; set; }
        public int a_Pamphlets { get; set; }
        public int a_Magazine { get; set; }
        public int a_Leaflets { get; set; }
        public int a_Brochures { get; set; }
        public int a_Others { get; set; }
        public int b_Pamphlets { get; set; }
        public int b_Magazine { get; set; }
        public int b_Leaflets { get; set; }
        public int b_Brochures { get; set; }
        public int b_Others { get; set; }
        public int c_Facebook { get; set; }
        public int c_Twitter { get; set; }
        public int c_YouTube { get; set; }
        public int c_Instagram { get; set; }
        public int c_Others { get; set; }
        public int d_Others { get; set; }

        public int d_Audio { get; set; }
        public int d_Video { get; set; }
        public int e_Publicity { get; set; }
        public int f_Road { get; set; }
        public int f_Street { get; set; }
        public int g_HHS { get; set; }
        public int h_Exhibitions { get; set; }
        public int h_Fair { get; set; }
        public int h_Seminars { get; set; }
        public int ba_Pamphlets { get; set; }
        public int ba_Magazine { get; set; }
        public int ba_Leaflets { get; set; }
        public int ba_Brochures { get; set; }
        public int ba_Others { get; set; }
        public int bb_Pamphlets { get; set; }
        public int bb_Magazine { get; set; }
        public int bb_Leaflets { get; set; }
        public int bb_Brochures { get; set; }
        public int bb_Others { get; set; }
        public int bc_Facebook { get; set; }
        public int bc_Twitter { get; set; }
        public int bc_YouTube { get; set; }
        public int bc_Instagram { get; set; }
        public int bc_Others { get; set; }
        public int bd_Others { get; set; }
        public int bd_Audio { get; set; }
        public int bd_Video { get; set; }
        public int be_Publicity { get; set; }
        public int bf_Road { get; set; }
        public int bf_Street { get; set; }
        public int bg_HHS { get; set; }
        public int bh_Exhibitions { get; set; }
        public int bh_Fair { get; set; }
        public int bh_Seminars { get; set; }
        public int a_Exhibitions { get; set; }
        public int a_Seminars { get; set; }
        public int a_Fair { get; set; }
        public int b_Exhibitions { get; set; }
        public int b_Seminars { get; set; }
        public int b_Fair { get; set; }

    }


    public class iec_report_class_statename
    {
        public string statename { get; set; }
        public string districtname { get; set; }
    }

    [Table("incentive_demand", Schema = "public")]
    public class incentive_demand
    {
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int order_by_month { get; set; }
        public string email { get; set; }
        public string department { get; set; }
        public string otherdepartment { get; set; }
        public string activity { get; set; }
        public string cost { get; set; }
        public string area_under { get; set; }
        public string area_full { get; set; }
        public string area_total { get; set; }
        public string msc { get; set; }
        public string mst { get; set; }
        public string mobc { get; set; }
        public string mother { get; set; }
        public string fsc { get; set; }
        public string fst { get; set; }
        public string fobc { get; set; }
        public string fother { get; set; }
        public string total_beneficiary { get; set; }
        public string remark { get; set; }
        public string update_month { get; set; }

    }
    public class total_demand
    {

        public string statename { get; set; }
        public string dist_name { get; set; }
        public int totalgp { get; set; }
        public int totalgp_count { get; set; }
        public double cost { get; set; }
        public double dpmucost { get; set; }
        public double spmucost { get; set; }
        public double rejectcost { get; set; }
        public double approvecost { get; set; }
        public double area_under { get; set; }
        public double lop1cost { get; set; }
        public double lop1area_under { get; set; }
        public int msc { get; set; }
        public int mst { get; set; }
        public int mobc { get; set; }
        public int mother { get; set; }
        public int atdpmu { get; set; }
        public int fsc { get; set; }
        public int fst { get; set; }
        public int fobc { get; set; }
        public int fother { get; set; }
        public int total_beneficiary { get; set; }
        public double total_beneficiary_new { get; set; }
        public int lop1total_beneficiary { get; set; }
        public string activity_name { get; set; }

        public double lop1_cost { get; set; }
        public int lop1_msc { get; set; }
        public int lop1_fst { get; set; }


    }

    public class total_supply
    {

        public string statename { get; set; }
        public string dist_name { get; set; }
        public int totalgp { get; set; }
        public int totalgp_count { get; set; }
        public double cost { get; set; }
        public int type_new { get; set; }
        public int type_rew { get; set; }
        public int no_of_structure { get; set; }
        public string activity_name { get; set; }


    }

    [Table("incentive_supply", Schema = "public")]
    public class incentive_supply
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string dist { get; set; }
        public string block { get; set; }
        public string gram { get; set; }
        public string nameofdepartment { get; set; }
        public string nameofstructure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string statusofwork { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public string entry_date { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int order_by_month { get; set; }
        public string user_id { get; set; }
        public string update_month { get; set; }
        public string other_department { get; set; }
        public string typeofwork { get; set; }
        public string cost { get; set; }
        public string remark { get; set; }

    }

    [Table("incentive_other", Schema = "public")]
    public class incentive_other

    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string dist { get; set; }
        public string block { get; set; }
        public string gram { get; set; }
        public string nameofdepartment { get; set; }
        public string nameofstructure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string statusofwork { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public string entry_date { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public int order_by_month { get; set; }
        public string user_id { get; set; }
        public string update_month { get; set; }
        public string other_department { get; set; }
        public string typeofwork { get; set; }
        public string cost { get; set; }
        public string remark { get; set; }

    }

    [Table("demandside_dli3_new", Schema = "public")]
    public class demandside_dli3_new
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public int? meta_id { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string fund_for { get; set; }
        public string approx_est_cost { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_water_demand { get; set; }
        public string total_reduction_gw { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string addnew_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string remark_phase2 { get; set; }

        public string approve_phase2 { get; set; }
        public string rejectremark_phase2 { get; set; }

        public string entry_phase1 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string phase1_id { get; set; }
        public string phase2_id { get; set; }
        public string lop1year_subsidey_phase2 { get; set; }
        public string lop1departmentname_phase2 { get; set; }
        public string lop1schemename_phase2 { get; set; }
        public string lop1otherschemename_phase2 { get; set; }
        public string lop1area_covered_phase2 { get; set; }
        public string lop1expenditure_phase2 { get; set; }
        public string lop1total_beneficery_phase2 { get; set; }
        public string lop1remark_phase2 { get; set; }
        public string from_table { get; set; }

    }


    [Table("vw_dli3_phase2_lop", Schema = "public")]
    public class vw_dli3_phase2_lop
    {

        [Key]

        public int? id { get; set; }
        public string state { get; set; }
        public string from_table { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public int? meta_id { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string fund_for { get; set; }
        public string approx_est_cost { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public int? total_water_demand { get; set; }
        public int? total_reduction_gw { get; set; }
        public int? fund_details_id { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string phase2_id { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string addnew_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string rejectremark_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string lop1year_subsidey_phase2 { get; set; }
        public string lop1departmentname_phase2 { get; set; }
        public string lop1schemename_phase2 { get; set; }
        public string lop1otherschemename_phase2 { get; set; }
        public string lop1total_beneficery_phase2 { get; set; }
        public string lop1area_covered_phase2 { get; set; }
        public string lop1expenditure_phase2 { get; set; }
        public string lop1remark_phase2 { get; set; }

    }


    [Table("demandside_dli3_new_test", Schema = "public")]
    public class demandside_dli3_new_dth
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public int? meta_id { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string fund_for { get; set; }
        public string approx_est_cost { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_water_demand { get; set; }
        public string total_reduction_gw { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string addnew_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string remark_phase2 { get; set; }

        public string approve_phase2 { get; set; }
        public string rejectremark_phase2 { get; set; }

        public string entry_phase1 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string phase1_id { get; set; }
        public string phase2_id { get; set; }
        public int pk { get; set; }
        public string ischeck { get; set; }
        public string total_rows { get; set; }
        public string newtablepk { get; set; }
    }

    [Table("demandside_dli3_new_temp", Schema = "public")]
    public class demandside_dli3_new_k
    {

        [Key]
        public int id { get; set; }

        //public int pk { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public int? meta_id { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string fund_for { get; set; }
        public string approx_est_cost { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_water_demand { get; set; }
        public string total_reduction_gw { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string addnew_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string remark_phase2 { get; set; }

        public string approve_phase2 { get; set; }
        public string rejectremark_phase2 { get; set; }

        public string entry_phase1 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string phase1_id { get; set; }
        public string phase2_id { get; set; }
    }

    [Table("demandside_dli3_new_k1", Schema = "public")]
    public class demandside_dli3_new_k1
    {

        [Key]
        public int id { get; set; }

        //public int pk { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public int? meta_id { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string fund_for { get; set; }
        public string approx_est_cost { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_water_demand { get; set; }
        public string total_reduction_gw { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string addnew_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string remark_phase2 { get; set; }

        public string approve_phase2 { get; set; }
        public string rejectremark_phase2 { get; set; }

        public string entry_phase1 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string phase1_id { get; set; }
        public string phase2_id { get; set; }

    }


    public class demandside_dli3_new_excel
    {
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string financial_year { get; set; }
        public string fund_for { get; set; }
        public string innovative_measures { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string other_scheme { get; set; }
        public string total_crop_area { get; set; }
        public string area_proposed { get; set; }
        public string approx_est_cost { get; set; }
        public string total_water_demand { get; set; }
        public string total_reduction_gw { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string Phase1 { get; set; }
        public string from_table { get; set; }
    }

    public class demandside_dli3_new_excel_phase2
    {
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string financial_year { get; set; }
        public string fund_for { get; set; }
        public string innovative_measures { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string other_scheme { get; set; }

        public string total_crop_area { get; set; }
        public string area_proposed { get; set; }
        public string approx_est_cost { get; set; }
        public string total_water_demand { get; set; }
        public string total_reduction_gw { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve1 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string Phase1 { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string approve2 { get; set; }
        public string rejectremark_phase2 { get; set; }
        public string Phase2 { get; set; }
    }


    [Table("demandside_dli3_addnew", Schema = "public")]
    public class demandside_dli3_addnew
    {
        [Key]
        public int phaseid1 { get; set; }
        public int id { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }


    }

    [Table("demandside_dli3_phase2addnew", Schema = "public")]
    public class demandside_dli3_phase2addnew
    {
        [Key]
        public int phaseid2 { get; set; }
        public int id { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string addnew_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string rejectremark_phase2 { get; set; }
        public string update_month_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
    }

    [Table("lop1demandside_dli3_phase2addnew", Schema = "public")]
    public class lop1demandside_dli3_phase2addnew
    {
        [Key]
        public int phaseid2 { get; set; }
        public int id { get; set; }
        public string lop1year_subsidey_phase2 { get; set; }
        public string lop1departmentname_phase2 { get; set; }
        public string lop1schemename_phase2 { get; set; }
        public string lop1area_covered_phase2 { get; set; }
        public string lop1expenditure_phase2 { get; set; }
        public string lop1remark_phase2 { get; set; }
        public string lop1addnew_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string lop1rejectremark_phase2 { get; set; }
        public string lop1update_month_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string lop1entry_time_phase2 { get; set; }
        public string lop1otherschemename_phase2 { get; set; }
        public string lop1total_beneficery_phase2 { get; set; }
    }

    [Table("dli3_demandside_excelphase1_2", Schema = "public")]
    public class dli3_demandside_excelphase1_2
    {
        [Key]

        public int id_phase1 { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public int id_phase2 { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string addnew_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string rejectremark_phase2 { get; set; }

        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
    }

    [Table("supplyside_dli3_new", Schema = "public")]
    public class supplyside_dli3_new
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string from_table { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }
        public string village_name { get; set; }
        public string financial_year { get; set; }
        public string type_of_supply_side_structure { get; set; }
        public string gw_recharge_or_effective_storage { get; set; }
        public string department_name { get; set; }
        public string scheme_name_possible_funding_source { get; set; }
        public string other_scheme { get; set; }
        public string name_of_structure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_approximate_estimated_cost { get; set; }

        public string year_subsidey_phase1 { get; set; }
        public string work_start_date_phase1 { get; set; }
        public string work_end_date_phase1 { get; set; }
        public string type_of_work_phase1 { get; set; }
        public string status_of_work_phase1 { get; set; }
        public string latitude_phase1 { get; set; }
        public string longitude_phase1 { get; set; }
        public string department_name_phase1 { get; set; }
        public string schema_name_phase1 { get; set; }
        public string other_schema_name_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string reject_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string year_subsidey_phase2 { get; set; }
        public string work_start_date_phase2 { get; set; }
        public string work_end_date_phase2 { get; set; }
        public string type_of_work_phase2 { get; set; }
        public string status_of_work_phase2 { get; set; }
        public string latitude_phase2 { get; set; }
        public string longitude_phase2 { get; set; }
        public string department_name_phase2 { get; set; }
        public string schema_name_phase2 { get; set; }
        public string other_schema_name_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string reject_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        //public string old_lat { get; set; }
        //public string old_lon { get; set; }
        public string lop1_year_subsidey_phase2 { get; set; }
        public string lop1_work_start_date_phase2 { get; set; }
        public string lop1_work_end_date_phase2 { get; set; }
        public string lop1_type_of_work_phase2 { get; set; }
        public string lop1_status_of_work_phase2 { get; set; }
        public string lop1_latitude_phase2 { get; set; }
        public string lop1_longitude_phase2 { get; set; }
        public string lop1_department_name_phase2 { get; set; }
        public string lop1_schema_name_phase2 { get; set; }
        public string lop1_expenditure_phase2 { get; set; }
        public string lop1_remark_phase2 { get; set; }
        public string lop1_other_schema_name_phase2 { get; set; }


    }

    [Table("supplyside_dli3_new_test", Schema = "public")]
    public class supplyside_dli3_new_dth
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }
        public string village_name { get; set; }
        public string financial_year { get; set; }
        public string type_of_supply_side_structure { get; set; }
        public string gw_recharge_or_effective_storage { get; set; }
        public string department_name { get; set; }
        public string scheme_name_possible_funding_source { get; set; }
        public string other_scheme { get; set; }
        public string name_of_structure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_approximate_estimated_cost { get; set; }

        public string year_subsidey_phase1 { get; set; }
        public string work_start_date_phase1 { get; set; }
        public string work_end_date_phase1 { get; set; }
        public string type_of_work_phase1 { get; set; }
        public string status_of_work_phase1 { get; set; }
        public string latitude_phase1 { get; set; }
        public string longitude_phase1 { get; set; }
        public string department_name_phase1 { get; set; }
        public string schema_name_phase1 { get; set; }
        public string other_schema_name_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string reject_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string year_subsidey_phase2 { get; set; }
        public string work_start_date_phase2 { get; set; }
        public string work_end_date_phase2 { get; set; }
        public string type_of_work_phase2 { get; set; }
        public string status_of_work_phase2 { get; set; }
        public string latitude_phase2 { get; set; }
        public string longitude_phase2 { get; set; }
        public string department_name_phase2 { get; set; }
        public string schema_name_phase2 { get; set; }
        public string other_schema_name_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string reject_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string ischeck { get; set; }
        public string total_rows { get; set; }
        public string newtablepk { get; set; }


    }

    [Table("supplyside_dli3_temp", Schema = "public")]
    public class supplyside_dli3_new_k
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }
        public string village_name { get; set; }
        public string financial_year { get; set; }
        public string type_of_supply_side_structure { get; set; }
        public string gw_recharge_or_effective_storage { get; set; }
        public string department_name { get; set; }
        public string scheme_name_possible_funding_source { get; set; }
        public string other_scheme { get; set; }
        public string name_of_structure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_approximate_estimated_cost { get; set; }

        public string year_subsidey_phase1 { get; set; }
        public string work_start_date_phase1 { get; set; }
        public string work_end_date_phase1 { get; set; }
        public string type_of_work_phase1 { get; set; }
        public string status_of_work_phase1 { get; set; }
        public string latitude_phase1 { get; set; }
        public string longitude_phase1 { get; set; }
        public string department_name_phase1 { get; set; }
        public string schema_name_phase1 { get; set; }
        public string other_schema_name_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string reject_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string year_subsidey_phase2 { get; set; }
        public string work_start_date_phase2 { get; set; }
        public string work_end_date_phase2 { get; set; }
        public string type_of_work_phase2 { get; set; }
        public string status_of_work_phase2 { get; set; }
        public string latitude_phase2 { get; set; }
        public string longitude_phase2 { get; set; }
        public string department_name_phase2 { get; set; }
        public string schema_name_phase2 { get; set; }
        public string other_schema_name_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string reject_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }



    }

    [Table("DLI3_admittedclaim", Schema = "public")]
    public class DLI3_admittedclaim
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string fyear { get; set; }
        public string description { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public DateTime entry_date { get; set; }
        public string user_id { get; set; }
        public string email { get; set; }



    }
    //akash_dev_dli3
    [Table("abhy_DLI3_upload_document_new", Schema = "public")]
    public class DLI3_upload_document_new
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string description { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public DateTime entry_date { get; set; }
        public string user_id { get; set; }
        public string approval { get; set; }
        public string reject { get; set; }
        public string phase { get; set; }


    }
    public class countcurrent_events
    {

        public int sta { get; set; }
        public int dis { get; set; }
        public int blo { get; set; }
        public int npmu { get; set; }
        public int count { get; set; }
        public int totalcount { get; set; }
        public int totalcount_male { get; set; }
        public int totalcount_female { get; set; }
        public int totalcount_trangender { get; set; }
        public int npmucount { get; set; }
        public int npmucount_male { get; set; }
        public int npmucount_female { get; set; }
        public int npmucount_trangender { get; set; }
        public int spmucount { get; set; }
        public int spmucount_male { get; set; }
        public int spmucount_female { get; set; }
        public int spmucount_trangender { get; set; }
        public int dpmucount { get; set; }
        public int dpmucount_male { get; set; }
        public int dpmucount_female { get; set; }
        public int dpmucount_trangender { get; set; }
        public int bpmucount { get; set; }
        public int blockcount { get; set; }
        public int blockcount_male { get; set; }
        public int blockcount_female { get; set; }
        public int blockcount_trangender { get; set; }

    }
    public class npmu_report_data
    {

        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gram { get; set; }
        public string year { get; set; }
        public string month { get; set; }
        public string topicsname { get; set; }
        public int sta { get; set; }
        public int dis { get; set; }
        public int blo { get; set; }
        public int npmu { get; set; }
        public int count { get; set; }
        public int totalcount { get; set; }
        public int totalcount_male { get; set; }
        public int totalcount_female { get; set; }
        public int totalcount_trangender { get; set; }
        public int npmucount { get; set; }
        public int npmucount_male { get; set; }
        public int npmucount_female { get; set; }
        public int npmucount_trangender { get; set; }
        public int npmucount_total { get; set; }
        public int spmucount { get; set; }
        public int spmucount_male { get; set; }
        public int spmucount_female { get; set; }
        public int spmucount_trangender { get; set; }
        public int spmucount_total { get; set; }
        public int dpmucount { get; set; }
        public int dpmucount_male { get; set; }
        public int dpmucount_female { get; set; }
        public int dpmucount_trangender { get; set; }
        public int dpmucount_total { get; set; }
        public int bpmucount { get; set; }
        public int blockcount { get; set; }
        public int blockcount_male { get; set; }
        public int blockcount_female { get; set; }
        public int blockcount_trangender { get; set; }
        public int blockcount_total { get; set; }
        public int? gramcount { get; set; }
        public int? gramcount_male { get; set; }
        public int? gramcount_female { get; set; }
        public int? gramcount_trangender { get; set; }
        public int? gramcount_total { get; set; }
        public double spmucount_female_per { get; set; }
        public double dpmucount_female_per { get; set; }
        public double blockcount_female_per { get; set; }
        public double gramcount_female_per { get; set; }
        public double spmutotaltarger { get; set; }
        public double spmumonthcum { get; set; }
        public double spmutotalcum { get; set; }
        public double dpmutotaltarger { get; set; }
        public double dpmumonthcum { get; set; }
        public double dpmutotalcum { get; set; }
        public double blocktotaltarger { get; set; }
        public double blockmonthcum { get; set; }
        public double blocktotalcum { get; set; }
        public double gramtotaltarger { get; set; }
        public double grammonthcum { get; set; }
        public double gramtotalcum { get; set; }

    }
    public class dli_4_report
    {
        public string state { get; set; }
        public string year { get; set; }
        public string phase { get; set; }
        public double sprinkler_irrigation { get; set; }
        public double drip_irrigation { get; set; }
        public double pipeline_irrigation { get; set; }
        public double crop_shifting { get; set; }
        public double water_saving_method { get; set; }
        public double total_claim { get; set; }
    }

    //Map Export Water Quality Stastics Starts

    [Table("vw_bs_pv_quality_meta_data", Schema = "public")]
    public class vw_bs_pv_quality_meta_data
    {
        [Key]
        public int rw_id { get; set; }
        public int id { get; set; }
        public string well_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string site_name { get; set; }
        public string well_type { get; set; }
        public string year { get; set; }
        public string source { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public int? well_depth { get; set; }

        public string aquifer { get; set; }

        public int pv_data_id { get; set; }
        public string pv_data_well_id { get; set; }
        public int pv_meta_id { get; set; }
        public string pv_data_aquifer { get; set; }
        public string formation { get; set; }
        public string pv_data_year { get; set; }
        public int? ph { get; set; }

        public int? ec { get; set; }
        public int? tds { get; set; }
        public int? sodium { get; set; }
        public int? th { get; set; }
        public int? calcium { get; set; }
        public int? magnesium { get; set; }
        public int? potassium { get; set; }
        public int? carbonate { get; set; }
        public int? bicarbonate { get; set; }
        public int? sulphate { get; set; }
        public int? chloride { get; set; }
        public int? fluoride { get; set; }
        public int? nitrate { get; set; }
        public int? Turbidity { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string pv_data_year_str { get; set; }
        public string remark { get; set; }
    }

    [Table("pv_quality_meta", Schema = "public")]
    public class pv_quality_meta
    {
        [Key]
        public int id { get; set; }
        public string well_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string site_name { get; set; }
        public string well_type { get; set; }
        public string year { get; set; }
        public string source { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string well_depth { get; set; }
        public string aquifer { get; set; }





    }


    [Table("vw_bs_count_waterlevel_pv_meta_data", Schema = "public")]
    public class vw_bs_count_waterlevel_pv_meta_data
    {
        [Key]
        public int rw_id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string grampanchayat { get; set; }
        public string typeofwell { get; set; }
        public string source_ownership_type { get; set; }
        public int? Count_2015 { get; set; }
        public int? Count_2016 { get; set; }
        public int? Count_2017 { get; set; }
        public int? Count_2018 { get; set; }
        public int? Count_2019 { get; set; }
        public int? Count_2020 { get; set; }
        public int? Count_2021 { get; set; }
        public int? Count_2022 { get; set; }
        public int? Count_2023 { get; set; }
        public int? Count_2024 { get; set; }
        public int? Count_All { get; set; }
        public int? dist_total { get; set; }
        public string Count_2015_str { get; set; }
        public string Count_2016_str { get; set; }
        public string Count_2017_str { get; set; }
        public string Count_2018_str { get; set; }
        public string Count_2019_str { get; set; }
        public string Count_2020_str { get; set; }
        public string Count_2021_str { get; set; }
        public string Count_2022_str { get; set; }
        public string Count_2023_str { get; set; }
        public string Count_2024_str { get; set; }
        public string Count_All_str { get; set; }
    }




    [Table("feedback_map", Schema = "public")]
    public class feedback_map
    {
        [Key]
        public int? id { get; set; }

        public DateTime date { get; set; }
        public string comment_section { get; set; }
        public string email { get; set; }
        public string mobile_number { get; set; }
        public int rating { get; set; }
    }

    [Table("vw_bs_waterflow_meta_data", Schema = "public")]
    public class vw_bs_waterflow_meta_data
    {
        [Key]

        public int rw_id { get; set; }

        public string State { get; set; }
        public string District { get; set; }
        public string Block { get; set; }
        public string GramPanchayat { get; set; }
        public string Village { get; set; }
        public string LocationDetails { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string OwnerName { get; set; }
        public string WellType { get; set; }
        public string PumpType { get; set; }
        public string WaterFlowMeter_Installation_Date { get; set; }
        public string AreaIrrigated { get; set; }
        public string CropIrrigated { get; set; }
        public string UnitReading { get; set; }
        public string DateofEntry { get; set; }
        public string Meterid { get; set; }
        public string status { get; set; }
        public int wf_meta_id { get; set; }
        public int id { get; set; }
        public string WaterReading_Date { get; set; }
        public string MeterReading { get; set; }
        public string wf_date_time { get; set; }
        public string wf_email { get; set; }
        public string Entry_Date { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }

        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }


    }

    [Table("vw_bs_wellinventory", Schema = "public")]
    public class vw_bs_wellinventory
    {
        [Key]
        public int? gid { get; set; }
        public string wellno { get; set; }
        public string date { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string locationdetails { get; set; }
        public string ownername { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string welldiameter { get; set; }
        public string welldepth { get; set; }
        public string measuringpoint { get; set; }
        public string welltype { get; set; }
        public string wellwaterpotable { get; set; }
        public string waterleveldepth { get; set; }
        public string use { get; set; }
        public int? well_sl_no { get; set; }
        public string pumpinstalled { get; set; }

        public string electricmeterselecteditem { get; set; }

        public string datetime { get; set; }
        public string email { get; set; }
        public string image { get; set; }
        public string well_type_other { get; set; }
        public string approve { get; set; }

    }

    //waterma

    [Table("vw_bs_water_wq_meta_data", Schema = "public")]
    public class vw_bs_water_wq_meta_data
    {
        [Key]
        public int rw_id { get; set; }
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string village { get; set; }
        public string location_details { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string type_of_well { get; set; }
        public string others { get; set; }
        public string well_depth_mbgl { get; set; }
        public string well_id { get; set; }
        public int sr_no { get; set; }
        public int isachive { get; set; }
        public string status { get; set; }
        public DateTime entry_time { get; set; }
        public int data_id { get; set; }
        public int water_qi_meta_id { get; set; }
        public string qi_date { get; set; }
        public string chloride { get; set; }
        public string free_chlorine { get; set; }
        public string turbudity { get; set; }
        public string total_hardness_mgl { get; set; }
        public string alkalinity_mgl { get; set; }
        public string nitrate_mgl { get; set; }
        public string fluoride_mgl { get; set; }
        public string iron_mgl { get; set; }
        public string arsenic_mgl { get; set; }
        public string ec_us_cm { get; set; }
        public string tds { get; set; }
        public int fyyear { get; set; }
        public int fymonth { get; set; }

        public string bacterial_test { get; set; }
        public string ph { get; set; }
        public string status_data { get; set; }
        public DateTime entry_time_data { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }

    }

    [Table("vw_bs_gwl_meta_data", Schema = "public")]
    public class vw_bs_gwl_meta_data
    {
        [Key]

        public int rw_id { get; set; }
        public int id { get; set; }
        public int data_id { get; set; }
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
        public long gwl_meta_id { get; set; }

        public string gwl_reading { get; set; }
        public string gwl_date { get; set; }
        public string gwl_email { get; set; }

        public string state_name { get; set; }

        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }


    }

    [Table("vw_bs_geo_new", Schema = "public")]
    public class vw_bs_geo_new
    {
        [Key]
        public int? rw_id { get; set; }
        public int? id { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string typeofstructure { get; set; }
        public string storagecapacity { get; set; }
        public string nooffillings { get; set; }
        public string image1 { get; set; }
        public string image2 { get; set; }
        public string deviceid { get; set; }
        public string others { get; set; }
        public string date { get; set; }
        public string email { get; set; }
        public string village { get; set; }
        public string sitename { get; set; }
        public string date1 { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string datetime { get; set; }
        public string locationdetail { get; set; }
        public string approve { get; set; }
        public DateTime? date_time { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string wcu_aby { get; set; }
        public string wcu_aby_remark { get; set; }
    }

    [Table("vw_bs_rainfall_meta_data", Schema = "public")]
    public class vw_bs_rainfall_meta_data
    {
        [Key]

        public int rw_id { get; set; }
        public int id { get; set; }
        public int rf_meta_id { get; set; }
        public string rf_uid { get; set; }
        public DateTime rf_date { get; set; }
        public string rf_reading { get; set; }
        public DateTime rf_date_time { get; set; }
        public string rf_email { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gp_name { get; set; }
        public string village { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string raingauge { get; set; }
        public string image2 { get; set; }
        public string email { get; set; }
        public string locationdetail { get; set; }
        public string status { get; set; }
        public DateTime date_time { get; set; }

    }
    public class dataidtable
    {

        public int data_id { get; set; }
        public int water_qi_meta_id { get; set; }
        public string qi_date { get; set; }
        public string ph { get; set; }
        public string chloride { get; set; }
        public string free_chlorine { get; set; }
        public string turbudity { get; set; }
        public string total_hardness_mgl { get; set; }
        public string alkalinity_mgl { get; set; }
        public string nitrate_mgl { get; set; }
        public string fluoride_mgl { get; set; }
        public string iron_mgl { get; set; }
        public string arsenic_mgl { get; set; }
        public string ec_us_cm { get; set; }
        public string tds { get; set; }
        public string bacterial_test { get; set; }
        public string email { get; set; }
        public string status_data { get; set; }
        public DateTime? entry_time_data { get; set; }
    }

    //DLI3 2025
    [Table("demandside_dli3_new_2025", Schema = "public")]
    public class demandside_dli3_new_2025
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public int? meta_id { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string fund_for { get; set; }
        public string approx_est_cost { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_water_demand { get; set; }
        public string total_reduction_gw { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string addnew_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string remark_phase2 { get; set; }

        public string approve_phase2 { get; set; }
        public string rejectremark_phase2 { get; set; }

        public string entry_phase1 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string phase1_id { get; set; }
        public string phase2_id { get; set; }
        public string lop1year_subsidey_phase2 { get; set; }
        public string lop1departmentname_phase2 { get; set; }
        public string lop1schemename_phase2 { get; set; }
        public string lop1otherschemename_phase2 { get; set; }
        public string lop1area_covered_phase2 { get; set; }
        public string lop1expenditure_phase2 { get; set; }
        public string lop1total_beneficery_phase2 { get; set; }
        public string lop1remark_phase2 { get; set; }
        public string from_table { get; set; }

    }

    [Table("vw_dli3_demand_phase1_report_24_25", Schema = "public")]
    public class vw_dli3_demand_phase1_report_24_25
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string year { get; set; }
        public Int32 ataljal_gp { get; set; }
        public Int32 gp_wsp_submitted { get; set; }
        public int gp_dli3_claim_entry { get; set; }
        public double total_cost { get; set; }
        public double dpmu_cost { get; set; }
        public double spmu_cost { get; set; }
        public double approved_cost { get; set; }
        public double reject_cost { get; set; }
        public double total_area { get; set; }
        public int total_beneficiary { get; set; }
        public int totalentry_gp { get; set; }
        public int dpmu_gp { get; set; }
        public int spmu_gp { get; set; }
        public int approved_gp { get; set; }
        public int reject_gp { get; set; }
    }

    [Table("vw_dli3_phase1_total_summary_24_25", Schema = "public")]
    public class vw_dli3_phase1_total_summary_24_25
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string year { get; set; }
        public int ataljal_gp { get; set; }
        public int supply_gp_wsp_submitted { get; set; }
        public int demand_gp_wsp_submitted { get; set; }
        public int supply_gp_dli3_claim_entry { get; set; }
        public int demand_gp_dli3_claim_entry { get; set; }
        public double demand_convergence_claim { get; set; }
        public double supply_convergence_claim { get; set; }
        public int structures_claimed { get; set; }
        public double total_cost { get; set; }
        public double dpmu_cost { get; set; }
        public double spmu_cost { get; set; }
        public double approved_cost { get; set; }
        public double reject_cost { get; set; }
    }

    [Table("vw_dli3_combine_sd_lop_phase2_report_24", Schema = "public")]
    public class vw_dli3_combine_sd_lop_phase2_report_24
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public int ataljal_gp { get; set; }
        public int gp_wsp_submitted { get; set; }
        public int gp_claimed { get; set; }
        public double demand_total_conv_claim { get; set; }
        public int supply_total_struct_claim { get; set; }
        public double supply_total_conv_claim { get; set; }
        public double total_conv_claim { get; set; }
        public double dpmu_conv_claim { get; set; }
        public double spmu_submit_conv_claim { get; set; }
        public double approved_conv_claim { get; set; }
        public double rejected_conv_claim { get; set; }
    }

    [Table("vw_dli3_phase2_lop_24", Schema = "public")]
    public class vw_dli3_phase2_lop_24
    {
        [Key]
        public int? id { get; set; }
        public string state { get; set; }
        public string from_table { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public int? meta_id { get; set; }
        public string financial_year { get; set; }
        public string department_name { get; set; }
        public string scheme_name { get; set; }
        public string total_crop_area { get; set; }
        public string total_area_proposed { get; set; }
        public string area_proposed { get; set; }
        public string fund_for { get; set; }
        public string approx_est_cost { get; set; }
        public string other_scheme { get; set; }
        public string innovative_measures { get; set; }
        public string area_selected_innovative { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public int? total_water_demand { get; set; }
        public int? total_reduction_gw { get; set; }
        public int? fund_details_id { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string phase2_id { get; set; }
        public string year_subsidey_phase2 { get; set; }
        public string departmentname_phase2 { get; set; }
        public string schemename_phase2 { get; set; }
        public string area_covered_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string addnew_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string rejectremark_phase1 { get; set; }
        public string rejectremark_phase2 { get; set; }
        public string otherschemename_phase2 { get; set; }
        public string total_beneficery_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string lop1year_subsidey_phase2 { get; set; }
        public string lop1departmentname_phase2 { get; set; }
        public string lop1schemename_phase2 { get; set; }
        public string lop1otherschemename_phase2 { get; set; }
        public string lop1total_beneficery_phase2 { get; set; }
        public string lop1area_covered_phase2 { get; set; }
        public string lop1expenditure_phase2 { get; set; }
        public string lop1remark_phase2 { get; set; }

    }

    [Table("demandside_dli3_addnew_2025", Schema = "public")]
    public class demandside_dli3_addnew_2025
    {
        [Key]
        public int phaseid1 { get; set; }
        public int id { get; set; }
        public string year_subsidey_phase1 { get; set; }
        public string departmentname_phase1 { get; set; }
        public string schemename_phase1 { get; set; }
        public string area_covered_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }
        public string otherschemename_phase1 { get; set; }
        public string total_beneficery_phase1 { get; set; }


    }

    [Table("vw_dli3_lop_phase2_demand_report_24", Schema = "public")]
    public class vw_dli3_lop_phase2_demand_report_24
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string year { get; set; }
        public int ataljal_gp { get; set; }
        public int gp_wsp_submitted { get; set; }
        public double lop_conv_claim { get; set; }
        public double lop_total_beneficiary { get; set; }
        public double phase2_conv_claim { get; set; }
        public double phase2_total_beneficiary { get; set; }
        public int gp_claim_lop_phase2 { get; set; }
        public double total_conv_claim { get; set; }
        public double dpmu_conv_claim { get; set; }
        public double spmu_submit_claim { get; set; }
        public double approved_claim { get; set; }
        public double rejected_claim { get; set; }
    }
    [Table("lop1demandside_dli3_phase2addnew_2025", Schema = "public")]
    public class lop1demandside_dli3_phase2addnew_2025
    {
        [Key]
        public int phaseid2 { get; set; }
        public int id { get; set; }
        public string lop1year_subsidey_phase2 { get; set; }
        public string lop1departmentname_phase2 { get; set; }
        public string lop1schemename_phase2 { get; set; }
        public string lop1area_covered_phase2 { get; set; }
        public string lop1expenditure_phase2 { get; set; }
        public string lop1remark_phase2 { get; set; }
        public string lop1addnew_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string lop1rejectremark_phase2 { get; set; }
        public string lop1update_month_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string lop1entry_time_phase2 { get; set; }
        public string lop1otherschemename_phase2 { get; set; }
        public string lop1total_beneficery_phase2 { get; set; }
    }
    [Table("abhy_DLI3_upload_document_new2025", Schema = "public")]
    public class DLI3_upload_document_new_2025
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string description { get; set; }
        public string image_name { get; set; }
        public string image_path { get; set; }
        public DateTime entry_date { get; set; }
        public string user_id { get; set; }
        public string approval { get; set; }
        public string reject { get; set; }
        public string phase { get; set; }


    }
    [Table("supplyside_dli3_new2025", Schema = "public")]
    public class supplyside_dli3_new2025
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string from_table { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }
        public string village_name { get; set; }
        public string financial_year { get; set; }
        public string type_of_supply_side_structure { get; set; }
        public string gw_recharge_or_effective_storage { get; set; }
        public string department_name { get; set; }
        public string scheme_name_possible_funding_source { get; set; }
        public string other_scheme { get; set; }
        public string name_of_structure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_approximate_estimated_cost { get; set; }

        public string year_subsidey_phase1 { get; set; }
        public string work_start_date_phase1 { get; set; }
        public string work_end_date_phase1 { get; set; }
        public string type_of_work_phase1 { get; set; }
        public string status_of_work_phase1 { get; set; }
        public string latitude_phase1 { get; set; }
        public string longitude_phase1 { get; set; }
        public string department_name_phase1 { get; set; }
        public string schema_name_phase1 { get; set; }
        public string other_schema_name_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string reject_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string year_subsidey_phase2 { get; set; }
        public string work_start_date_phase2 { get; set; }
        public string work_end_date_phase2 { get; set; }
        public string type_of_work_phase2 { get; set; }
        public string status_of_work_phase2 { get; set; }
        public string latitude_phase2 { get; set; }
        public string longitude_phase2 { get; set; }
        public string department_name_phase2 { get; set; }
        public string schema_name_phase2 { get; set; }
        public string other_schema_name_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string reject_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        //public string old_lat { get; set; }
        //public string old_lon { get; set; }
        public string lop1_year_subsidey_phase2 { get; set; }
        public string lop1_work_start_date_phase2 { get; set; }
        public string lop1_work_end_date_phase2 { get; set; }
        public string lop1_type_of_work_phase2 { get; set; }
        public string lop1_status_of_work_phase2 { get; set; }
        public string lop1_latitude_phase2 { get; set; }
        public string lop1_longitude_phase2 { get; set; }
        public string lop1_department_name_phase2 { get; set; }
        public string lop1_schema_name_phase2 { get; set; }
        public string lop1_expenditure_phase2 { get; set; }
        public string lop1_remark_phase2 { get; set; }
        public string lop1_other_schema_name_phase2 { get; set; }


    }
    [Table("vw_dli3_supply_phase1_report_24_25", Schema = "public")]
    public class vw_dli3_supply_phase1_report_24_25
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string year { get; set; }
        public int ataljal_gp { get; set; }
        public int gp_wsp_submitted { get; set; }
        public int gp_dli3_claim_entry { get; set; }
        public int structures_claimed { get; set; }
        public double total_cost { get; set; }
        public double dpmu_cost { get; set; }
        public double spmu_cost { get; set; }
        public double approved_cost { get; set; }
        public double reject_cost { get; set; }
        public int totalentry_gp { get; set; }
        public int dpmu_gp { get; set; }
        public int spmu_gp { get; set; }
        public int approved_gp { get; set; }
        public int reject_gp { get; set; }
    }
    [Table("vw_dli3_lop_phase2_supply_report_24", Schema = "public")]
    public class vw_dli3_lop_phase2_supply_report_24
    {
        [Key]
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string year { get; set; }
        public int ataljal_gp { get; set; }
        public int gp_wsp_submitted { get; set; }
        public int lop_struct_claimed { get; set; }
        public double lop_conv_claim { get; set; }
        public int phase2_struct_claimed { get; set; }
        public double phase2_conv_claim { get; set; }
        public int gp_claim_lop_phase2 { get; set; }
        public int total_struct_claim { get; set; }
        public double total_conv_claim { get; set; }
        public double dpmu_conv_claim { get; set; }
        public double spmu_submit_claim { get; set; }
        public double approved_claim { get; set; }
        public double rejected_claim { get; set; }
    }
    [Table("supplyside_dli3_new_test2025", Schema = "public")]
    public class supplyside_dli3_new2025_dth
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }
        public string village_name { get; set; }
        public string financial_year { get; set; }
        public string type_of_supply_side_structure { get; set; }
        public string gw_recharge_or_effective_storage { get; set; }
        public string department_name { get; set; }
        public string scheme_name_possible_funding_source { get; set; }
        public string other_scheme { get; set; }
        public string name_of_structure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_approximate_estimated_cost { get; set; }

        public string year_subsidey_phase1 { get; set; }
        public string work_start_date_phase1 { get; set; }
        public string work_end_date_phase1 { get; set; }
        public string type_of_work_phase1 { get; set; }
        public string status_of_work_phase1 { get; set; }
        public string latitude_phase1 { get; set; }
        public string longitude_phase1 { get; set; }
        public string department_name_phase1 { get; set; }
        public string schema_name_phase1 { get; set; }
        public string other_schema_name_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string reject_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string year_subsidey_phase2 { get; set; }
        public string work_start_date_phase2 { get; set; }
        public string work_end_date_phase2 { get; set; }
        public string type_of_work_phase2 { get; set; }
        public string status_of_work_phase2 { get; set; }
        public string latitude_phase2 { get; set; }
        public string longitude_phase2 { get; set; }
        public string department_name_phase2 { get; set; }
        public string schema_name_phase2 { get; set; }
        public string other_schema_name_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string reject_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }
        public string ischeck { get; set; }
        public string total_rows { get; set; }
        public string newtablepk { get; set; }


    }
    [Table("supplyside_dli3_temp2025", Schema = "public")]
    public class supplyside_dli3_new_k2025
    {
        [Key]

        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string gp_center_point_latitude { get; set; }
        public string gp_center_point_longitude { get; set; }
        public string village_name { get; set; }
        public string financial_year { get; set; }
        public string type_of_supply_side_structure { get; set; }
        public string gw_recharge_or_effective_storage { get; set; }
        public string department_name { get; set; }
        public string scheme_name_possible_funding_source { get; set; }
        public string other_scheme { get; set; }
        public string name_of_structure { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }
        public string total_approximate_estimated_cost { get; set; }

        public string year_subsidey_phase1 { get; set; }
        public string work_start_date_phase1 { get; set; }
        public string work_end_date_phase1 { get; set; }
        public string type_of_work_phase1 { get; set; }
        public string status_of_work_phase1 { get; set; }
        public string latitude_phase1 { get; set; }
        public string longitude_phase1 { get; set; }
        public string department_name_phase1 { get; set; }
        public string schema_name_phase1 { get; set; }
        public string other_schema_name_phase1 { get; set; }
        public string expenditure_phase1 { get; set; }
        public string remark_phase1 { get; set; }
        public string approve_phase1 { get; set; }
        public string reject_phase1 { get; set; }
        public string entry_phase1 { get; set; }
        public string entry_time_phase1 { get; set; }

        public string year_subsidey_phase2 { get; set; }
        public string work_start_date_phase2 { get; set; }
        public string work_end_date_phase2 { get; set; }
        public string type_of_work_phase2 { get; set; }
        public string status_of_work_phase2 { get; set; }
        public string latitude_phase2 { get; set; }
        public string longitude_phase2 { get; set; }
        public string department_name_phase2 { get; set; }
        public string schema_name_phase2 { get; set; }
        public string other_schema_name_phase2 { get; set; }
        public string expenditure_phase2 { get; set; }
        public string remark_phase2 { get; set; }
        public string approve_phase2 { get; set; }
        public string reject_phase2 { get; set; }
        public string entry_phase2 { get; set; }
        public string entry_time_phase2 { get; set; }



    }

    [Table("vw_dwlr_meta_data", Schema = "public")]
    public class vw_dwlr_meta_data
    {
        [Key]
        public int data_id { get; set; }
        public int id { get; set; }
        public string state { get; set; }
        public string district { get; set; }
        public string block { get; set; }
        public string gp { get; set; }
        public string type { get; set; }
        public string Well_ID { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public string stationcode { get; set; }
        public string datatypecode { get; set; }
        public string date { get; set; }
        public string datavalue { get; set; }
        public string fyyear { get; set; }
        public string fymonth { get; set; }

    }
    // New table  



    //Map Export Water Quality Stastics Ends     




}



