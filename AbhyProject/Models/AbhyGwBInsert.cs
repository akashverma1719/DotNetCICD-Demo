using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AbhyProject.Models
{
    public class AbhyGwBInsert
    {
    }
    [Table("ABHYstates_completecensusdata_insert1", Schema = "public")]
    public class abhystates_completecensusdata_Insert1
    {
        [Key]
        public int INId { get; set; }
        public string state_name { get; set; }
        public string district_name { get; set; }
        public string sub_district_name { get; set; }
        public string Village_Name { get; set; }
        public string gram_panchayat_name { get; set; }
        [Column("Total_Geographical_Area_in_Hectares")]
        public string Total_Geographical_Area_in_Hectares { get; set; }
        [Column("Total_Households")]
        public string Total_Households { get; set; }
        public string Total_Population_of_Village { get; set; }
        public string Tube_Wells_Borehole_Functioning_All_round_the_year { get; set; }
        public string Spring_Functioning_All_round_the_year { get; set; }
        public string River_Canal_Functioning_All_round_the_year { get; set; }
        public string Tank_Pond_Lake_Functioning_All_round_the_year { get; set; }
        public string Power_Supply_For_Domestic_Use_Summer_April_Sept_per_day_in_Hour { get; set; }
        [Column("Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours")]
        public string Power_Supply_For_Domestic_Use_Winter_Oct_March_per_day_in_Hours { get; set; }
        public string Power_Supply_for_domestic_have_to_calculate_the_average_from_tw { get; set; }
        public string Power_Supply_For_Agriculture_Use_Summer_April_Sept_per_day_in_H { get; set; }
        public string Power_Supply_For_Agriculture_Use_Winter_Oct_March_per_day_in_Ho { get; set; }
        public string Power_Supply_for_agriculture_have_to_calculate_the_average_from { get; set; }
        public string Power_Supply_For_Commercial_Use_Winter_Oct_March_per_day_in_Hou { get; set; }
        public string Power_Supply_for_commercial_have_to_calculate_the_average_from_ { get; set; }
        [Column("Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours")]
        public string Power_Supply_For_All_Users_Summer_April_Sept_per_day_in_Hours { get; set; }
        [Column("Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours")]
        public string Power_Supply_For_All_Users_Winter_Oct_March_per_day_in_Hours { get; set; }
        public string Power_Supply_for_all_users_have_to_calculate_the_average_from_t { get; set; }
        public string Agricultural_Commodities_First { get; set; }
        public string Manufacturers_Commodities_First { get; set; }
        public string Agricultural_Commodities_Second { get; set; }
        public string Manufacturers_Commodities_Second { get; set; }
        public string Agricultural_Commodities_Third { get; set; }
        [Column("Area_under_Non_Agricultural_Uses_in_Hectares")]
        public string Area_under_Non_Agricultural_Uses_in_Hectares { get; set; }
        [Column("Net_Area_Sown_in_Hectares")]
        public string Net_Area_Sown_in_Hectares { get; set; }
        [Column("Canals_Area_in_Hectares")]
        public string Canals_Area_in_Hectares { get; set; }
        [Column("Wells_Tube_Wells_Area_in_Hectares")]
        public string Wells_Tube_Wells_Area_in_Hectares { get; set; }
        [Column("Tanks_Lakes_Area_in_Hectares")]
        public string Tanks_Lakes_Area_in_Hectares { get; set; }
        [Column("Waterfall_Area_in_Hectares")]
        public string Waterfall_Area_in_Hectares { get; set; }
        public string Manufacturers_Commodities_Third { get; set; }
        public string Springs_Depth { get; set; }
        public string Reservoir_Name { get; set; }
        [Column("Current_Reservoir_Level_(m)")]
        public string Current_Reservoir_Level { get; set; }
        [Column("Live_Capacity_at_FRL_(BCM)")]
        public string Live_Capacity_at_FRL { get; set; }
        [Column("Live_Capacity_at_FRL_(m_cube)")]
        public string Live_Capacity_at_FRL_ { get; set; }
        [Column("Current_Live_Storage_(BCM)")]
        public string Current_Live_Storage { get; set; }
        [Column("Current_Live_Storage_(m_cube)")]
        public string Current_Live_Storage_ { get; set; }
        public string AvgOfSurfaceWaterRainfall { get; set; }
        [Column("No_Of_CheckDams")]
        public string No_Of_CheckDams { get; set; }
        public string CheckDams_Capacity { get; set; }
        public string Gwr_Rainfall_Area { get; set; }
        public string Gwr_Rainfall_Rainfall { get; set; }
        [Column("NetArea_Under_CheckDams_and_NalaBunds")]
        public string NetArea_Under_CheckDams_and_NalaBunds { get; set; }
        public string Gwr_IT_maximum_SubmergenceArea { get; set; }
        public string Gwr_IT_Reacharge_Rate { get; set; }
        public string Gwr_IT_DaysOfSubmergence { get; set; }
        public string Gwr_CD_maximumSubmergence_Area { get; set; }
        public string Gwr_CD_AverageDepthOf_Water { get; set; }
        [Column("Gwr_CD_NoOfFillings")]
        public string Gwr_CD_NoOfFillings { get; set; }
        [Column("Gwr_STC_LengthOfthe_Canals")]
        public string Gwr_STC_LengthOfthe_Canals { get; set; }
        public string Gwr_STC_Seepage_Factor { get; set; }
        [Column("Gwr_STC_Flowing_Days")]
        public string Gwr_STC_Flowing_Days { get; set; }
        public string Gwr_STC_Avg_Wetted_Perimeter { get; set; }
        public string Gwr_SWI_AreaIrrigated { get; set; }
        public string Gwr_SWI_DesignedDischarge_At_Outlet { get; set; }
        public string Gwr_SWI_Seepage_Factor { get; set; }
        public string Gwr_SWI_WaterReleased_At_OutLet { get; set; }
        public string Gwr_GwI_CommndArea_Irrigation { get; set; }
        public string Gwr_GwI_CommandArea_ReturnFlow { get; set; }
        public string Gwr_GwI_NonCommand_Area_Irrigation { get; set; }
        public string Gwr_GwI_NonCommand_Area_ReturnFlow { get; set; }
        [Column("Draft_Irrigation_DailyPumping_Hours")]
        public string Draft_Irrigation_DailyPumping_Hours { get; set; }

        [Column("Draft_Irrigation_Total_NoOf_Pumping_Days")]
        public string Draft_Irrigation_Total_NoOf_Pumping_Days { get; set; }
        public string Draft_Irrigation_Avg_Pumping_Rate { get; set; }
        public string Draft_Drink_Tot_Water_Requirement_For_People { get; set; }
        [Column("Draft_Drink_Tot_Water_Requirement_For_CowsBufalos")]
        public string Draft_Drink_Tot_Water_Requirement_For_CowsBufalos { get; set; }
        [Column("Draft_Drink_Tot_Water_Requirement_For_Bullocks")]
        public string Draft_Drink_Tot_Water_Requirement_For_Bullocks { get; set; }
        [Column("Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps")]
        public string Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps { get; set; }
        public string Draft_Industry_GW_In_Take { get; set; }
        [Column("Draft_Industry_Tot_Noof_Production_Days")]
        public string Draft_Industry_Tot_Noof_Production_Days { get; set; }
        public string Tbl_Condition { get; set; }
        public string Canals_Depth { get; set; }
        public string Tanks_Depth { get; set; }
        public string River_Depth { get; set; }
        [Column("Springs_Total_Geographical_Area_in_Hectares")]
        public string Springs_Total_Geographical_Area_in_Hectares { get; set; }
        public string Canals_River_Canal_Functioning_All_round_the_year { get; set; }
        [Column("River_Canals_Area_in_Hectares")]
        public string River_Canals_Area_in_Hectares { get; set; }
        [Column("Harvesting_Canals_Area_in_Hectares")]
        public string Harvesting_Canals_Area_in_Hectares { get; set; }
        [Column("Harvesting_Tanks_Lakes_Area_in_Hectares")]
        public string Harvesting_Tanks_Lakes_Area_in_Hectares { get; set; }
        public string Inserted_Date { get; set; }
        public string Springs_Area_In_Hectares { get; set; }
        public string userid { get; set; }
        public string approvedorreject { get; set; }
        public string canaltype { get; set; }
        public string soiltype { get; set; }

        public string springs_Discharge { get; set; }
        public string checkdams_Discharge { get; set; }
        public string canals_Discharge { get; set; }
        public string reservoir_Discharge { get; set; }
        public string lakespondstanks_Discharge { get; set; }
        public string river_Discharge { get; set; }

        public string surface_water_paddy { get; set; }
        public string surface_water_nonpaddy { get; set; }
        public string Industry_Prod_days { get; set; }
        public string checkdams_depth { get; set; }
    }
}