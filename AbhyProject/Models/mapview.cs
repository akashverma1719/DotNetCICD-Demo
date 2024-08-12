using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class MAPEntity : DbContext
    {
        public MAPEntity() : base(nameOrConnectionString: "MAPEntity") { }


        public virtual DbSet<vw_bs_waterlevel_pv_data> obj_vw_bs_waterlevel_pv_data { get; set; }
        public virtual DbSet<vw_bs_waterlevel_pv_meta_data> obj_vw_bs_waterlevel_pv_meta_data { get; set; }
        public virtual DbSet<waterflow_data> obj_waterflow_data { get; set; }
        public virtual DbSet<rainfall_data> obj_rainfall_data { get; set; }
        public virtual DbSet<vw_bs_pv_quality_meta_data> obj_vw_bs_pv_quality_meta_data { get; set; }
        public virtual DbSet<vw_bs_water_wq_meta_data> obj_vw_bs_water_wq_meta_data { get; set; }
        public virtual DbSet<vw_bs_gwl_meta_data> obj_vw_bs_gwl_meta_data { get; set; }
        public virtual DbSet<vw_bs_geo_new> obj_vw_bs_geo_new { get; set; }
        public virtual DbSet<vw_bs_rainfall_meta_data> obj_vw_bs_rainfall_meta_data { get; set; }
        public virtual DbSet<vw_bs_waterflow_meta_data> obj_vw_bs_waterflow_meta_data { get; set; }
        public virtual DbSet<vw_bs_wellinventory> obj_vw_bs_wellinventory { get; set; }
        public virtual DbSet<feedback_map> obj_feedback_map { get; set; }
        public virtual DbSet<water_wq_data> obj_water_wq_data { get; set; }
        public virtual DbSet<vw_wellinventory> obj_vw_wellinventory { get; set; }


    }

}
