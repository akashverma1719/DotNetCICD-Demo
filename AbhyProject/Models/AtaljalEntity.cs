using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class AtaljalEntity : DbContext
    {
        public AtaljalEntity() : base(nameOrConnectionString: "AtaljalEntity") { }



        // waterqualitymetadata
        public virtual DbSet<vw_bs_water_wq_meta_data> obj_vw_bs_water_wq_meta_data { get; set; }

        public virtual DbSet<vw_bs_gwl_meta_data> obj_vw_bs_gwl_meta_data { get; set; }

        public virtual DbSet<vw_bs_geo_new> obj_vw_bs_geo_new { get; set; }

        public virtual DbSet<vw_bs_rainfall_meta_data> obj_vw_bs_rainfall_meta_data { get; set; }

        public virtual DbSet<vw_bs_waterflow_meta_data> obj_vw_bs_waterflow_meta_data { get; set; }

        public virtual DbSet<vw_bs_wellinventory> obj_vw_bs_wellinventory { get; set; }

        public virtual DbSet<feedback_map> obj_feedback_map { get; set; }

        public virtual DbSet<pv_quality_meta> obj_pv_quality_meta { get; set; }
        public virtual DbSet<vw_bs_pv_quality_meta_data> obj_vw_bs_pv_quality_meta_data { get; set; }
    
        //Map Export Water Quality Stastics Ends

        //MADB start
       
        public virtual DbSet<WaterFlow> obj_WaterFlow { get; set; }
        public virtual DbSet<vw_waterflow_all> obj_vw_waterflow_all { get; set; }
        public virtual DbSet<waterflow_meta> obj_waterflow_meta { get; set; }
        public virtual DbSet<waterflow_data> obj_waterflow_data { get; set; }
        public virtual DbSet<vw_waterflow_meta> obj_vw_waterflow_meta { get; set; }
        public virtual DbSet<rainfall_meta> obj_rainfall_meta { get; set; }
        public virtual DbSet<rainfall_data> obj_rainfall_data { get; set; }
        public virtual DbSet<water_wq_meta> obj_water_wq_meta { get; set; }
        public virtual DbSet<water_wq_data> obj_water_wq_data { get; set; }
        public virtual DbSet<vw_block_gp_villagename> obj_vw_block_gp_villagename { get; set; }
        public virtual DbSet<gwl_data> obj_gwl_data { get; set; }
        public virtual DbSet<gwl_meta> obj_gwl_meta { get; set; }

        public virtual DbSet<vw_bs_waterlevel_pv_data> obj_vw_bs_waterlevel_pv_data { get; set; }
       
        public virtual DbSet<vw_bs_waterlevel_pv_meta_data> obj_vw_bs_waterlevel_pv_meta_data { get; set; }

        public virtual DbSet<vw_count_wellinventory> obj_vw_count_wellinventory { get; set; }
        public virtual DbSet<vw_count_geo_new> obj_vw_count_geo_new { get; set; }
        public virtual DbSet<vw_count_rainfall_meta_count> obj_vw_count_rainfall_meta_count { get; set; }
        public virtual DbSet<vw_count_gwl_meta_count> obj_vw_count_gwl_meta_count { get; set; }
        public virtual DbSet<vw_count_water_wq_meta_count> obj_vw_count_water_wq_meta_count { get; set; }
        public virtual DbSet<vw_count_waterflow_meta_count> obj_vw_count_waterflow_meta_count { get; set; }
        public virtual DbSet<vw_count_socialmonitoring_count> obj_vw_count_socialmonitoring_count { get; set; }
        public virtual DbSet<vw_gwl> obj_vw_gwl { get; set; }
        public virtual DbSet<vw_gwl_all> obj_vw_gwl_all { get; set; }
        public virtual DbSet<vw_rainfall> obj_vw_rainfall { get; set; }
        public virtual DbSet<vw_rainfall_meta> obj_vw_rainfall_meta { get; set; }
        public virtual DbSet<vw_wellinventory> obj_vw_wellinventory { get; set; }
        public virtual DbSet<vw_geotagging> obj_vw_geotagging { get; set; }
        public virtual DbSet<vw_socialmonitoring> obj_vw_socialmonitoring { get; set; }
        public virtual DbSet<vw_water> obj_vw_water { get; set; }
        public virtual DbSet<vw_water_all> obj_vw_water_all { get; set; }
        public virtual DbSet<pv_quality> obj_pv_quality { get; set; }
        public virtual DbSet<pv_quality_data> obj_pv_quality_data { get; set; }


        //MADB end
        public virtual DbSet<groundwater_meta> obj_groundwatermeta { get; set; }

        public virtual DbSet<geotagging> obj_geotagging { get; set; }
        public virtual DbSet<geo_new> obj_geo_new { get; set; }
        public virtual DbSet<gpprofile> obj_gpprofiles { get; set; }
        public virtual DbSet<groundwaterlevels> obj_groundwaterlevels { get; set; }
        public virtual DbSet<rainfall> obj_rainfall { get; set; }
        public virtual DbSet<sarpanchdetails> obj_sarpanchdetails { get; set; }
        public virtual DbSet<socialmonitoring> obj_socialmonitoring { get; set; }
        public virtual DbSet<states> obj_states { get; set; }
        public virtual DbSet<wellinventory> obj_wellinventory { get; set; }
        public virtual DbSet<users> obj_users { get; set; }
        public virtual DbSet<users_delete> obj_users_delete { get; set; }
        public virtual DbSet<groundwaterlevel> obj_groundwaterlevel { get; set; }
        public virtual DbSet<userlogs> obj_userlogs { get; set; }

        //water level class start 
        public virtual DbSet<vw_gwl_sd_block_month_year_summary_template> obj_vw_gwl_sd_block_month_year_summary_template { get; set; }
        public virtual DbSet<vw_gwl_sd_block_year_summary_template> obj_vw_gwl_sd_block_year_summary_template { get; set; }
        public virtual DbSet<vw_gwl_sd_block_summary_template> obj_vw_gwl_sd_block_summary_template { get; set; }
        public virtual DbSet<vw_gwl_s_district_month_year_summary_template> obj_vw_gwl_s_district_month_year_summary_template { get; set; }
        public virtual DbSet<vw_gwl_s_district_year_summary_template> obj_vw_gwl_s_district_year_summary_template { get; set; }
        public virtual DbSet<vw_gwl_s_district_summary_template> obj_vw_gwl_s_district_summary_template { get; set; }
        public virtual DbSet<vw_gwl_state_month_year_summary_template> obj_vw_gwl_state_month_year_summary_template { get; set; }
        public virtual DbSet<vw_gwl_state_year_summary_template> obj_vw_gwl_state_year_summary_template { get; set; }
        public virtual DbSet<vw_gwl_state_summary_template> obj_vw_gwl_state_summary_template { get; set; }
        //water level class end 

        //Rainfall class start 
        public virtual DbSet<vw_rainfall_sd_block_month_year_summary_template> obj_vw_rainfall_sd_block_month_year_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_sd_block_year_summary_template> obj_vw_rainfall_sd_block_year_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_sd_block_summary_template> obj_vw_rainfall_sd_block_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_s_district_month_year_summary_template> obj_vw_rainfall_s_district_month_year_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_s_district_year_summary_template> obj_vw_rainfall_s_district_year_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_s_district_summary_template> obj_vw_rainfall_s_district_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_state_month_year_summary_template> obj_vw_rainfall_state_month_year_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_state_year_summary_template> obj_vw_rainfall_state_year_summary_template { get; set; }
        public virtual DbSet<vw_rainfall_state_summary_template> obj_vw_rainfall_state_summary_template { get; set; }
        //Rainfall class end 

        //Quality class start 
        public virtual DbSet<vw_water_wq_sd_block_month_year_summary_template> obj_vw_water_wq_sd_block_month_year_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_sd_block_year_summary_template> obj_vw_water_wq_sd_block_year_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_sd_block_summary_template> obj_vw_water_wq_sd_block_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_s_district_month_year_summary_template> obj_vw_water_wq_s_district_month_year_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_s_district_year_summary_template> obj_vw_water_wq_s_district_year_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_s_district_summary_template> obj_vw_water_wq_s_district_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_state_month_year_summary_template> obj_vw_water_wq_state_month_year_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_state_year_summary_template> obj_vw_water_wq_state_year_summary_template { get; set; }
        public virtual DbSet<vw_water_wq_state_summary_template> obj_vw_water_wq_state_summary_template { get; set; }
        //Ouality class end 
        public virtual DbSet<master_list_gp> obj_master_list_gp { get; set; }
        public virtual DbSet<vw_water_meta_data> obj_vw_water_meta_data { get; set; }
        public virtual DbSet<vw_rainfall_meta_data> obj_vw_rainfall_meta_data { get; set; }
        public virtual DbSet<vw_gwl_meta_data> obj_vw_gwl_meta_data { get; set; }
        public virtual DbSet<vw_waterflow_meta_data> obj_vw_waterflow_meta_data { get; set; }
        public virtual DbSet<gwl_data_delete> obj_gwl_data_delete { get; set; }
        public virtual DbSet<gwl_meta_delete> obj_gwl_meta_delete { get; set; }
        public virtual DbSet<geo_new_delete> obj_geo_new_delete { get; set; }
        public virtual DbSet<water_wq_meta_delete> obj_water_wq_meta_delete { get; set; }
        public virtual DbSet<water_wq_data_delete> obj_water_wq_data_delete { get; set; }
        public virtual DbSet<waterflow_meta_delete> obj_waterflow_meta_delete { get; set; }
        public virtual DbSet<waterflow_data_delete> obj_waterflow_data_delete { get; set; }
        public virtual DbSet<rainfall_meta_delete> obj_rainfall_meta_delete { get; set; }
        public virtual DbSet<rainfall_data_delete> obj_rainfall_data_delete { get; set; }
        public virtual DbSet<socialmonitoring_delete> obj_socialmonitoring_delete { get; set; }
        public virtual DbSet<mobile_files> obj_mobile_files { get; set; }
        public virtual DbSet<wellinventory_delete> obj_wellinventory_delete { get; set; }
        //waterflow class start 
        public virtual DbSet<vw_waterflow_sd_block_month_year_summary_template> obj_vw_waterflow_sd_block_month_year_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_sd_block_year_summary_template> obj_vw_waterflow_sd_block_year_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_sd_block_summary_template> obj_vw_waterflow_sd_block_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_s_district_month_year_summary_template> obj_vw_waterflow_s_district_month_year_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_s_district_year_summary_template> obj_vw_waterflow_s_district_year_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_s_district_summary_template> obj_vw_waterflow_s_district_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_state_month_year_summary_template> obj_vw_waterflow_state_month_year_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_state_year_summary_template> obj_vw_waterflow_state_year_summary_template { get; set; }
        public virtual DbSet<vw_waterflow_state_summary_template> obj_vw_waterflow_state_summary_template { get; set; }
        //waterflow class end 

        //wellinventory class start 
        public virtual DbSet<vw_wellinventory_sd_block_month_year_summary_template> obj_vw_wellinventory_sd_block_month_year_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_sd_block_year_summary_template> obj_vw_wellinventory_sd_block_year_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_sd_block_summary_template> obj_vw_wellinventory_sd_block_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_s_district_month_year_summary_template> obj_vw_wellinventory_s_district_month_year_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_s_district_year_summary_template> obj_vw_wellinventory_s_district_year_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_s_district_summary_template> obj_vw_wellinventory_s_district_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_state_month_year_summary_template> obj_vw_wellinventory_state_month_year_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_state_year_summary_template> obj_vw_wellinventory_state_year_summary_template { get; set; }
        public virtual DbSet<vw_wellinventory_state_summary_template> obj_vw_wellinventory_state_summary_template { get; set; }
        //wellinventory class end 

        //social event class start 
        public virtual DbSet<vw_socialmonitoring_sd_block_month_year_summary> obj_vw_socialmonitoring_sd_block_month_year_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_sd_block_year_summary> obj_vw_socialmonitoring_sd_block_year_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_sd_block_summary> obj_vw_socialmonitoring_sd_block_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_s_district_month_year_summary> obj_vw_socialmonitoring_s_district_month_year_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_s_district_year_summary> obj_vw_socialmonitoring_s_district_year_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_s_district_summary> obj_vw_socialmonitoring_s_district_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_state_month_year_summary> obj_vw_socialmonitoring_state_month_year_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_state_year_summary> obj_vw_socialmonitoring_state_year_summary { get; set; }
        public virtual DbSet<vw_socialmonitoring_state_summary> obj_vw_socialmonitoring_state_summary { get; set; }
        //social event class end 
        //geotagging class start 
        public virtual DbSet<vw_geo_sd_block_month_year_summary> obj_vw_geo_sd_block_month_year_summary { get; set; }
        public virtual DbSet<vw_geo_sd_block_year_summary> obj_vw_geo_sd_block_year_summary { get; set; }
        public virtual DbSet<vw_geo_sd_block_summary> obj_vw_geo_sd_block_summary { get; set; }
        public virtual DbSet<vw_geo_s_district_month_year_summary> obj_vw_geo_s_district_month_year_summary { get; set; }
        public virtual DbSet<vw_geo_s_district_year_summary> obj_vw_geo_s_district_year_summary { get; set; }
        public virtual DbSet<vw_geo_s_district_summary> obj_vw_geo_s_district_summary { get; set; }
        public virtual DbSet<vw_geo_state_month_year_summary> obj_vw_geo_state_month_year_summary { get; set; }
        public virtual DbSet<vw_geo_state_year_summary> obj_vw_geo_state_year_summary { get; set; }
        public virtual DbSet<vw_geo_state_summary> obj_vw_geo_state_summary { get; set; }
        //geotagging class end 

    }

    public class Allmobiledata
    {

        public List<vw_geotagging> obj_vw_geotagging { get; set; }
        public List<vw_socialmonitoring> obj_vw_socialmonitoring { get; set; }
        public List<users> obj_users { get; set; }
        public List<vw_wellinventory> obj_wellinventory { get; set; }
        public List<vw_rainfall> obj_rainfall { get; set; }
        public List<vw_gwl> obj_groundwaterlevel { get; set; }
        public List<vw_water> obj_abhy_gwqm_ftk { get; set; }

    }
}
