using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbhyProject.Models
{
    public class WaterLevel

    {
        public int sno { get; set; }
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
        public bool flag { get; set; }

    }
    public class WaterQuality
    {
        public long sno { get; set; }
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
        public bool flag { get; set; }
    }
}