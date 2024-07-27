using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class AbhyBaselineGpModel
    {
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string block_name { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }

        public string total_no_of_village { get; set; }
        public string[] village_name { get; set; }

        public string male_population { get; set; }
        public string female_population { get; set; }
        public string transgender_population { get; set; }
        public string tol_population { get; set; }
        public string source_year { get; set; }
        public string source_year_liv { get; set; }
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

        public string irrigated_area_in_kharif { get; set; }
        public string irrigated_area_in_rabi { get; set; }
        public string irrigated_area_in_summer { get; set; }
        public string total_irrigated_area { get; set; }
        // public string net_irrigated_area { get; set; }

        public string un_irrigated_area_in_kharif { get; set; }
        public string un_irrigated_area_in_rabi { get; set; }
        public string un_irrigated_area_in_summer { get; set; }
        public string total_un_irrigated_area { get; set; }

        public string total_cropped_area { get; set; }

        public string non_energised { get; set; }
        public string diesel_pumps { get; set; }
        public string centrifugal_pumps { get; set; }
        public string submersible_pumps { get; set; }
        public string solar_pumps { get; set; }
        public string total_electric_pumps { get; set; }
        public string total_water_lifting_devices { get; set; }

        public string villages_file { get; set; }
        public string demographic_file { get; set; }
        public string livestock_file { get; set; }
        public string gparea_file { get; set; }
        public string netsown_area_file { get; set; }
        public string net_irrigated_area { get; set; }
        public string area_cultivation_file { get; set; }
        public string suface_water_file { get; set; }
        public string ground_water_file { get; set; }
        public string existing_wells_file { get; set; }
        public string water_lifting_file { get; set; }
        public string water_efficient_file { get; set; }

        public string approved { get; set; }
        public string month { get; set; }
        public string[] livestock_name { get; set; }
        public string[] livestock_value { get; set; }
        public string[] surface_water_name { get; set; }
        public string[] surface_water_value { get; set; }
        public string[] ground_water_name { get; set; }
        public string[] ground_water_value { get; set; }
        public string[] existing_wells_name { get; set; }
        public string[] existing_wells_value { get; set; }
        public string[] water_eff_practices_name { get; set; }
        public string[] water_eff_practices_value { get; set; }

    }
    public class Allgpdata
    {
        public List<abhy_baseline_gpdata> objgpdata { get; set; }
        public List<abhy_baseline_gp_remarks> objremarks { get; set; }
        public List<abhy_baseline_gp_livestock> objlivestock { get; set; }
        public List<abhy_baseline_gp_surfacewater> objsurfacewater { get; set; }
        public List<abhy_baseline_gp_groundwater> objgroundwater { get; set; }
        public List<abhy_baseline_gp_existingwells> objexwells { get; set; }
        public List<abhy_baseline_gp_watereff> objwatereff { get; set; }
        public List<abhy_baseline_gp_upload> objupload { get; set; }
    }
    public class Allsocialevent
    {
        public List<social_socialmgt_other_local_institues> obj_social_socialmgt_other_local_institues { get; set; }
        public List<social_socialmgt_support_agency> obj_social_socialmgt_support_agency { get; set; }
        public List<social_socialmgt_farmers> obj_social_socialmgt_farmers { get; set; }
        public List<social_socialmgt_village_meetings> obj_social_socialmgt_village_meetings { get; set; }
        public List<social_socialmgt_grm> obj_social_socialmgt_grm { get; set; }

    }
    public class Pagenum
    {
        public string statename { get; set; }
        public string districtname { get; set; }
        public string blockname { get; set; }
        public string gpname { get; set; }
        public string year { get; set; }
        public string fy_phase { get; set; }
        public string month { get; set; }
        public int PageNumber { get; set; }
    }
    public class GpTracker
    {
        public string StateName { get; set; }
        public int DistrinctCount { get; set; }
        public int BlockCount { get; set; }
        public int GpCount { get; set; }
        public int SavedGP { get; set; }
        public int SubmitGP { get; set; }
        public int RejectGP { get; set; }
        public int ApprovedGP { get; set; }
        public int ApprovedBySPMU { get; set; }
        public int RejectBySPMU { get; set; }
        public int PendingGP { get; set; }
        public int PendingByDpmu { get; set; }
        public int PendingGPBySpmu { get; set; }
        public int TotalGPCOUNT { get; set; }
    }
}