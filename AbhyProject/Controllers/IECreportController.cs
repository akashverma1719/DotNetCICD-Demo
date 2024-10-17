using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class IECreportController : Controller
    {
        // GET: IECreport
        AbhyEntity ABE = new AbhyEntity();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult report_IEC()
        {
            return View();
        }

        [HttpPost]
        public ActionResult all_report (string StateName, string Year, int Month)
        {
            try
            {
                List<iec_report_class_statename> statenn = new List<iec_report_class_statename>();
                var off = Session["Officer"].ToString();
                var State = "";
                if (off == "State Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    State = ss;
                }
                else if (off == "Admin" || off == "National Level Nodal Officer")
                {
                    State = StateName;
                }
                if (State == "All")
                {
                    string[] statename = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                    for (int a = 0; a < statename.Length; a++)
                    {
                        iec_report_class_statename datan = new iec_report_class_statename();
                        var staten = statename[a];
                        datan.statename = staten;
                        statenn.Add(datan);
                    }
                }
                else
                {
                    iec_report_class_statename datan = new iec_report_class_statename();
                    var staten = State;
                    datan.statename = staten;
                    statenn.Add(datan);
                }

                List<iec_report_class> all_data = new List<iec_report_class>();

                for (int i = 0; i < statenn.Count; i++)
                {
                    iec_report_class data = new iec_report_class();

                    var state = (statenn[i].statename).ToString();
                    data.statename = state;
                    List<abhy_IEC> iec_achive = new List<abhy_IEC>();
                    List<abhy_IEC> iec_cum = new List<abhy_IEC>();
                    int mmm = 0;
                    if (Year != "All" && Month != 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.order_by_month == Month && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year != "All" && Month == 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month != 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.order_by_month == Month && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month == 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = 12 + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }

                    int a_Pamphlets = 0;
                    int a_Magazine = 0;
                    int a_Leaflets = 0;
                    int a_Brochures = 0;
                    int a_Others = 0;

                    int b_Pamphlets = 0;
                    int b_Magazine = 0;
                    int b_Leaflets = 0;
                    int b_Brochures = 0;
                    int b_Others = 0;

                    int c_Facebook = 0;
                    int c_Twitter = 0;
                    int c_YouTube = 0;
                    int c_Instagram = 0;
                    int c_Others = 0;

                    int d_Others = 0;

                    int d_Audio = 0;
                    int d_Video = 0;

                    int ba_Pamphlets = 0;
                    int ba_Magazine = 0;
                    int ba_Leaflets = 0;
                    int ba_Brochures = 0;
                    int ba_Others = 0;

                    int bb_Pamphlets = 0;
                    int bb_Magazine = 0;
                    int bb_Leaflets = 0;
                    int bb_Brochures = 0;
                    int bb_Others = 0;

                    int bc_Facebook = 0;
                    int bc_Twitter = 0;
                    int bc_YouTube = 0;
                    int bc_Instagram = 0;
                    int bc_Others = 0;

                    int bd_Others = 0;

                    int bd_Audio = 0;
                    int bd_Video = 0;


                    for (int k = 0; k < iec_achive.Count; k++)
                    {
                        var activity = iec_achive[k].activity;
                        var sub_activity = iec_achive[k].sub_activity;
                        if (activity == "No. of IEC material prepared")
                        {
                            if (sub_activity == "Pamphlets")
                            {
                                a_Pamphlets += 1;
                            }
                            if (sub_activity == "Magazine")
                            {
                                a_Magazine += 1;
                            }
                            if (sub_activity == "Leaflets")
                            {
                                a_Leaflets += 1;
                            }
                            if (sub_activity == "Brochures")
                            {
                                a_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                a_Others += 1;
                            }

                        }
                        if (activity == "No. of IEC material displayed")
                        {
                            if (sub_activity == "Wall Paintings")
                            {
                                b_Pamphlets += 1;
                            }
                            if (sub_activity == "Hoardings")
                            {
                                b_Magazine += 1;
                            }
                            if (sub_activity == "Posters")
                            {
                                b_Leaflets += 1;
                            }
                            if (sub_activity == "Signages")
                            {
                                b_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                b_Others += 1;
                            }

                        }
                        if (activity == "No. of Posts in social Media")
                        {
                            if (sub_activity == "Facebook")
                            {
                                c_Facebook += 1;
                            }
                            if (sub_activity == "Twitter")
                            {
                                c_Twitter += 1;
                            }
                            if (sub_activity == "YouTube")
                            {
                                c_YouTube += 1;
                            }
                            if (sub_activity == "Instagram")
                            {
                                c_Instagram += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                c_Others += 1;
                            }

                        }
                        if (activity == "No. of  Audio/Video materials prepared")
                        {
                            if (sub_activity == "Audio")
                            {
                                d_Audio += 1;
                            }
                            if (sub_activity == "Video")
                            {
                                d_Video += 1;
                            }


                        }
                        if (activity == "Others")
                        {
                            d_Others += 1;

                        }
                    }
                    for (int j = 0; j < iec_cum.Count; j++)
                    {
                        int monnn = Convert.ToInt32(iec_cum[j].order_by_month);
                        if (monnn < mmm)
                        {
                            var activity = iec_cum[j].activity;
                            var sub_activity = iec_cum[j].sub_activity;
                            if (activity == "No. of IEC material prepared")
                            {
                                if (sub_activity == "Pamphlets")
                                {
                                    ba_Pamphlets += 1;
                                }
                                if (sub_activity == "Magazine")
                                {
                                    ba_Magazine += 1;
                                }
                                if (sub_activity == "Leaflets")
                                {
                                    ba_Leaflets += 1;
                                }
                                if (sub_activity == "Brochures")
                                {
                                    ba_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    ba_Others += 1;
                                }

                            }
                            if (activity == "No. of IEC material displayed")
                            {
                                if (sub_activity == "Wall Paintings")
                                {
                                    bb_Pamphlets += 1;
                                }
                                if (sub_activity == "Hoardings")
                                {
                                    bb_Magazine += 1;
                                }
                                if (sub_activity == "Posters")
                                {
                                    bb_Leaflets += 1;
                                }
                                if (sub_activity == "Signages")
                                {
                                    bb_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bb_Others += 1;
                                }

                            }
                            if (activity == "No. of Posts in social Media")
                            {
                                if (sub_activity == "Facebook")
                                {
                                    bc_Facebook += 1;
                                }
                                if (sub_activity == "Twitter")
                                {
                                    bc_Twitter += 1;
                                }
                                if (sub_activity == "YouTube")
                                {
                                    bc_YouTube += 1;
                                }
                                if (sub_activity == "Instagram")
                                {
                                    bc_Instagram += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bc_Others += 1;
                                }

                            }
                            if (activity == "No. of  Audio/Video materials prepared")
                            {
                                if (sub_activity == "Audio")
                                {
                                    bd_Audio += 1;
                                }
                                if (sub_activity == "Video")
                                {
                                    bd_Video += 1;
                                }


                            }
                            if (activity == "Others")
                            {
                                bd_Others += 1;

                            }
                        }
                    }

                    int a_total = c_Facebook + c_Twitter + c_YouTube + c_Instagram;
                    int b_total = bc_Facebook + bc_Twitter + bc_YouTube + bc_Instagram;

                    data.a_Pamphlets = a_Pamphlets;
                    data.a_Magazine = a_Magazine;
                    data.a_Leaflets = a_Leaflets;
                    data.a_Brochures = a_Brochures;
                    data.a_Others = a_Others;
                    data.b_Pamphlets = b_Pamphlets;
                    data.b_Magazine = b_Magazine;
                    data.b_Leaflets = b_Leaflets;
                    data.b_Brochures = b_Brochures;
                    data.b_Others = b_Others;
                    data.c_Facebook = c_Facebook;
                    data.c_Twitter = c_Twitter;
                    data.c_YouTube = c_YouTube;
                    data.c_Instagram = c_Instagram;
                    data.c_Others = a_total;
                    data.d_Others = d_Others;
                    data.d_Audio = d_Audio;
                    data.d_Video = d_Video;
                    data.ba_Pamphlets = ba_Pamphlets;
                    data.ba_Magazine = ba_Magazine;
                    data.ba_Leaflets = ba_Leaflets;
                    data.ba_Brochures = ba_Brochures;
                    data.ba_Others = ba_Others;
                    data.bb_Pamphlets = bb_Pamphlets;
                    data.bb_Magazine = bb_Magazine;
                    data.bb_Leaflets = bb_Leaflets;
                    data.bb_Brochures = bb_Brochures;
                    data.bb_Others = bb_Others;
                    data.bc_Facebook = bc_Facebook;
                    data.bc_Twitter = bc_Twitter;
                    data.bc_YouTube = bc_YouTube;
                    data.bc_Instagram = bc_Instagram;
                    data.bc_Others = b_total;
                    data.bd_Others = bd_Others;
                    data.bd_Audio = bd_Audio;
                    data.bd_Video = bd_Video;

                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult district_report(string StateName, string distName, string Year, int Month)
        {
            try
            {
                List<iec_report_class_statename> statenn = new List<iec_report_class_statename>();
                var off = Session["Officer"].ToString();
                var State = "";
                var Distric = "";
                if (off == "State Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    State = ss;
                    Distric = distName;
                }
                else if (off == "District Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    var dd = Session["gdist"].ToString();
                    State = ss;
                    Distric = dd;
                }
                else if (off == "Admin" || off == "National Level Nodal Officer")
                {
                    State = StateName;
                    Distric = distName;
                }
                if (State == "All")
                {
                    string[] statename = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                    for (int a = 0; a < statename.Length; a++)
                    {
                        
                        var staten = statename[a];
                        var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == staten).Distinct().GroupBy(x => x.district_name).ToList();
                        for (int b = 0; b < dist.Count; b++)
                        {
                            iec_report_class_statename datan = new iec_report_class_statename();
                            string district = dist[b].Key;
                            datan.statename = staten;
                            datan.districtname = district;
                            statenn.Add(datan);
                        }
                    }
                }
                else if (Distric == "0")
                {
                    var staten = State;
                    var dist = ABE.obj_abhy_block_gp_area_info.Where(x => x.state_name == staten).Distinct().GroupBy(x => x.district_name).ToList();
                    for (int b = 0; b < dist.Count; b++)
                    {
                        iec_report_class_statename datan = new iec_report_class_statename();
                        string district = dist[b].Key;
                        datan.statename = staten;
                        datan.districtname = district;
                        statenn.Add(datan);
                    }
                }
                else
                {
                    iec_report_class_statename datan = new iec_report_class_statename();
                    datan.statename = State;
                    datan.districtname = Distric;
                    statenn.Add(datan);

                }

                List<iec_report_class> all_data = new List<iec_report_class>();

                for (int i = 0; i < statenn.Count; i++)
                {
                    iec_report_class data = new iec_report_class();

                    var state = (statenn[i].statename).ToString();
                    var district = (statenn[i].districtname).ToString();
                    data.statename = state;
                    data.districtname = district;
                    List<abhy_IEC> iec_achive = new List<abhy_IEC>();
                    List<abhy_IEC> iec_cum = new List<abhy_IEC>();
                    int mmm = 0;
                    if (Year != "All" && Month != 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.year == Year && x.order_by_month == Month && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.year == Year && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year != "All" && Month == 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.year == Year && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.year == Year && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month != 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.order_by_month == Month && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month == 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = 12 + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.Nodal_officer == "District Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }

                    int a_Pamphlets = 0;
                    int a_Magazine = 0;
                    int a_Leaflets = 0;
                    int a_Brochures = 0;
                    int a_Others = 0;

                    int b_Pamphlets = 0;
                    int b_Magazine = 0;
                    int b_Leaflets = 0;
                    int b_Brochures = 0;
                    int b_Others = 0;

                    int c_Facebook = 0;
                    int c_Twitter = 0;
                    int c_YouTube = 0;
                    int c_Instagram = 0;
                    int c_Others = 0;

                    int d_Others = 0;

                    int ba_Pamphlets = 0;
                    int ba_Magazine = 0;
                    int ba_Leaflets = 0;
                    int ba_Brochures = 0;
                    int ba_Others = 0;

                    int bb_Pamphlets = 0;
                    int bb_Magazine = 0;
                    int bb_Leaflets = 0;
                    int bb_Brochures = 0;
                    int bb_Others = 0;

                    int bc_Facebook = 0;
                    int bc_Twitter = 0;
                    int bc_YouTube = 0;
                    int bc_Instagram = 0;
                    int bc_Others = 0;

                    int bd_Others = 0;

                    int a_Awareness_meetings = 0;
                    int b_Awareness_meetings = 0;

                    int a_Road_Shows = 0;
                    int b_Road_Shows = 0;
                    int a_Street_Plays = 0;
                    int b_Street_Plays = 0;
                    int a_household = 0;
                    int b_household = 0;
                    int a_Exhibitions = 0;
                    int a_Seminars = 0;
                    int a_Fair = 0;
                    int b_Exhibitions = 0;
                    int b_Seminars = 0;
                    int b_Fair = 0;


                    for (int k = 0; k < iec_achive.Count; k++)
                    {
                        var activity = iec_achive[k].activity;
                        var sub_activity = iec_achive[k].sub_activity; 
                        if (activity == "No. of Awareness meetings conducted")
                        {
                            a_Awareness_meetings += 1;
                        }
                        if (activity == "No. of IEC material prepared")
                        {
                            if (sub_activity == "Pamphlets")
                            {
                                a_Pamphlets += 1;
                            }
                            if (sub_activity == "Magazine")
                            {
                                a_Magazine += 1;
                            }
                            if (sub_activity == "Leaflets")
                            {
                                a_Leaflets += 1;
                            }
                            if (sub_activity == "Brochures")
                            {
                                a_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                a_Others += 1;
                            }

                        }
                        if (activity == "No. of IEC material displayed")
                        {
                            if (sub_activity == "Wall Paintings")
                            {
                                b_Pamphlets += 1;
                            }
                            if (sub_activity == "Hoardings")
                            {
                                b_Magazine += 1;
                            }
                            if (sub_activity == "Posters")
                            {
                                b_Leaflets += 1;
                            }
                            if (sub_activity == "Signages")
                            {
                                b_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                b_Others += 1;
                            }

                        }
                        if (activity == "No. of Road Shows/Street Plays conducted")
                        {
                            if (sub_activity == "Road Shows")
                            {
                                a_Road_Shows += 1;
                            }
                            if (sub_activity == "Street Plays")
                            {
                                a_Street_Plays += 1;
                            }
                        }
                        if (activity == "No.of Households covered under Door to Door Campaign")
                        {
                            a_household += 1;
                        }
                        if (activity == "No. of Posts in social Media")
                        {
                            if (sub_activity == "Facebook")
                            {
                                c_Facebook += 1;
                            }
                            if (sub_activity == "Twitter")
                            {
                                c_Twitter += 1;
                            }
                            if (sub_activity == "YouTube")
                            {
                                c_YouTube += 1;
                            }
                            if (sub_activity == "Instagram")
                            {
                                c_Instagram += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                c_Others += 1;
                            }

                        }
                        if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                        {
                            if (sub_activity == "Exhibitions")
                            {
                                a_Exhibitions += 1;
                            }
                            if (sub_activity == "Seminars")
                            {
                                a_Seminars += 1;
                            }
                            if (sub_activity == "Fair ")
                            {
                                a_Fair += 1;
                            }
                        }
                        if (activity == "Others")
                        {
                            d_Others += 1;

                        }
                    }
                    for (int j = 0; j < iec_cum.Count; j++)
                    {
                        int monnn = Convert.ToInt32(iec_cum[j].order_by_month);
                        if (monnn < mmm)
                        {
                            var activity = iec_cum[j].activity;
                            var sub_activity = iec_cum[j].sub_activity;
                            if (activity == "No. of Awareness meetings conducted")
                            {
                                b_Awareness_meetings += 1;
                            }
                            if (activity == "No. of IEC material prepared")
                            {
                                if (sub_activity == "Pamphlets")
                                {
                                    ba_Pamphlets += 1;
                                }
                                if (sub_activity == "Magazine")
                                {
                                    ba_Magazine += 1;
                                }
                                if (sub_activity == "Leaflets")
                                {
                                    ba_Leaflets += 1;
                                }
                                if (sub_activity == "Brochures")
                                {
                                    ba_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    ba_Others += 1;
                                }

                            }
                            if (activity == "No. of IEC material displayed")
                            {
                                if (sub_activity == "Wall Paintings")
                                {
                                    bb_Pamphlets += 1;
                                }
                                if (sub_activity == "Hoardings")
                                {
                                    bb_Magazine += 1;
                                }
                                if (sub_activity == "Posters")
                                {
                                    bb_Leaflets += 1;
                                }
                                if (sub_activity == "Signages")
                                {
                                    bb_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bb_Others += 1;
                                }

                            }
                            if (activity == "No. of Road Shows/Street Plays conducted")
                            {
                                if (sub_activity == "Road Shows")
                                {
                                    b_Road_Shows += 1;
                                }
                                if (sub_activity == "Street Plays")
                                {
                                    b_Street_Plays += 1;
                                }
                                
                            }
                            if (activity == "No.of Households covered under Door to Door Campaign")
                            {
                                    b_household += 1;
                            }
                            if (activity == "No. of Posts in social Media")
                            {
                                if (sub_activity == "Facebook")
                                {
                                    bc_Facebook += 1;
                                }
                                if (sub_activity == "Twitter")
                                {
                                    bc_Twitter += 1;
                                }
                                if (sub_activity == "YouTube")
                                {
                                    bc_YouTube += 1;
                                }
                                if (sub_activity == "Instagram")
                                {
                                    bc_Instagram += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bc_Others += 1;
                                }

                            }
                            if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                            {
                                if (sub_activity == "Exhibitions")
                                {
                                    b_Exhibitions += 1;
                                }
                                if (sub_activity == "Seminars")
                                {
                                    b_Seminars += 1;
                                }
                                if (sub_activity == "Fair ")
                                {
                                    b_Fair += 1;
                                }
                            }
                            if (activity == "Others")
                            {
                                bd_Others += 1;

                            }
                        }
                    }

                    int a_total = c_Facebook + c_Twitter + c_YouTube + c_Instagram;
                    int b_total = bc_Facebook + bc_Twitter + bc_YouTube + bc_Instagram;

                    data.a_Awareness_meetings = a_Awareness_meetings;
                    data.b_Awareness_meetings = b_Awareness_meetings;
                    data.a_Road_Shows = a_Road_Shows;
                    data.b_Road_Shows = b_Road_Shows;
                    data.a_Street_Plays = a_Street_Plays;
                    data.b_Street_Plays = b_Street_Plays;
                    data.a_Pamphlets = a_Pamphlets;
                    data.a_Magazine = a_Magazine;
                    data.a_Leaflets = a_Leaflets;
                    data.a_Brochures = a_Brochures;
                    data.a_Others = a_Others;
                    data.b_Pamphlets = b_Pamphlets;
                    data.b_Magazine = b_Magazine;
                    data.b_Leaflets = b_Leaflets;
                    data.b_Brochures = b_Brochures;
                    data.b_Others = b_Others;
                    data.c_Facebook = c_Facebook;
                    data.c_Twitter = c_Twitter;
                    data.c_YouTube = c_YouTube;
                    data.c_Instagram = c_Instagram;
                    data.c_Others = a_total;
                    data.d_Others = d_Others;
                    data.ba_Pamphlets = ba_Pamphlets;
                    data.ba_Magazine = ba_Magazine;
                    data.ba_Leaflets = ba_Leaflets;
                    data.ba_Brochures = ba_Brochures;
                    data.ba_Others = ba_Others;
                    data.bb_Pamphlets = bb_Pamphlets;
                    data.bb_Magazine = bb_Magazine;
                    data.bb_Leaflets = bb_Leaflets;
                    data.bb_Brochures = bb_Brochures;
                    data.bb_Others = bb_Others;
                    data.bc_Facebook = bc_Facebook;
                    data.bc_Twitter = bc_Twitter;
                    data.bc_YouTube = bc_YouTube;
                    data.bc_Instagram = bc_Instagram;
                    data.bc_Others = b_total;
                    data.bd_Others = bd_Others;
                    data.a_Exhibitions = a_Exhibitions;
                    data.a_Seminars = a_Seminars;
                    data.a_Fair = a_Fair;
                    data.b_Exhibitions = b_Exhibitions;
                    data.b_Seminars = b_Seminars;
                    data.b_Fair = b_Fair;

                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult GramReport(string stateName, string distName, string blockName, string gpName, string year, int month)
        {
            try
            {
                List<vw_orderwise_state_district_block_gp_area_info> statenn = new List<vw_orderwise_state_district_block_gp_area_info>();
                var officer = Session["Officer"].ToString();
                string state = "", district = "", block = "", gram = "";

                // Set state, district, block, and gram values based on officer type
                switch (officer)
                {
                    case "State Level Nodal Officer":
                        state = Session["gstate"].ToString();
                        district = distName;
                        block = blockName;
                        gram = gpName;
                        break;

                    case "District Level Nodal Officer":
                        state = Session["gstate"].ToString();
                        district = Session["gdist"].ToString();
                        block = blockName;
                        gram = gpName;
                        break;

                    case "Block Level Nodal Officer":
                        state = Session["gstate"].ToString();
                        district = Session["gdist"].ToString();
                        block = Session["gblock"].ToString();
                        gram = gpName;
                        break;

                    case "Gram Panchayat Nodal Officer":
                        state = Session["gstate"].ToString();
                        district = Session["gdist"].ToString();
                        block = Session["gblock"].ToString();
                        gram = Session["ggram"].ToString();
                        break;

                    case "Admin":
                    case "National Level Nodal Officer":
                        state = stateName;
                        district = distName;
                        block = blockName;
                        gram = gpName;
                        break;
                }

                // Fetch data based on the input state, district, block, and gram
                if (state == "All")
                {
                    string[] stateNames = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                    foreach (var stateItem in stateNames)
                    {
                        var data = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == stateItem).ToList();
                        statenn.AddRange(data);
                    }
                }
                else if (district == "0")
                {
                    var data = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == state).ToList();
                    statenn.AddRange(data);
                }
                else if (block == "0")
                {
                    var data = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == state && x.district_name == district).ToList();
                    statenn.AddRange(data);
                }
                else if (gram == "0")
                {
                    var data = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == state && x.district_name == district && x.block_name == block).ToList();
                    statenn.AddRange(data);
                }
                else
                {
                    statenn.Add(new vw_orderwise_state_district_block_gp_area_info
                    {
                        state_name = state,
                        district_name = district,
                        block_name = block,
                        gram_panchayat_name = gram
                    });
                }

                List<iec_report_class> allData = new List<iec_report_class>();

                foreach (var item in statenn)
                {
                    iec_report_class reportData = GenerateReportData(item, year, month);
                    allData.Add(reportData);
                }

                var jsonResult = Json(allData, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            catch (Exception ex)
            {
                // Log the exception (ex) here if needed
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        // Method to generate report data based on state, district, block, gram, year, and month
        private iec_report_class GenerateReportData(vw_orderwise_state_district_block_gp_area_info item, string year, int month)
        {
            iec_report_class data = new iec_report_class
            {
                statename = item.state_name,
                districtname = item.district_name,
                blockname = item.block_name,
                gpname = item.gram_panchayat_name
            };

            List<abhy_IEC> iecAchive = new List<abhy_IEC>();
            List<abhy_IEC> iecCum = new List<abhy_IEC>();
            int mmm = month + 1;

            if (year != "All" && month != 13)
            {
                iecAchive = FetchIECData(data.statename, data.districtname, data.blockname, data.gpname, year, month);
                iecCum = FetchIECData(data.statename, data.districtname, data.blockname, data.gpname, year);
            }
            else if (year == "All" && month != 13)
            {
                iecAchive = FetchIECData(data.statename, data.districtname, data.blockname, data.gpname, month: month);
                iecCum = FetchIECData(data.statename, data.districtname, data.blockname, data.gpname);
            }

            // Aggregate data from iecAchive and iecCum into the report data
            AggregateIECData(data, iecAchive, iecCum, mmm);

            return data;
        }

        // Fetch IEC data with optional filters for year and month
        private List<abhy_IEC> FetchIECData(string state, string district, string block, string gram, string year = null, int? month = null)
        {
            var query = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved");

            if (year != null) query = query.Where(x => x.year == year);
            if (month.HasValue) query = query.Where(x => x.order_by_month == month.Value);

            return query.ToList();
        }

        // Method to aggregate IEC data into report data
        private void AggregateIECData(iec_report_class reportData, List<abhy_IEC> iecAchive, List<abhy_IEC> iecCum, int mmm)
        {
            int a_Pamphlets = 0;
            int a_Magazine = 0;
            int a_Leaflets = 0;
            int a_Brochures = 0;
            int a_Others = 0;

            int b_Pamphlets = 0;
            int b_Magazine = 0;
            int b_Leaflets = 0;
            int b_Brochures = 0;
            int b_Others = 0;

            int c_Facebook = 0;
            int c_Twitter = 0;
            int c_YouTube = 0;
            int c_Instagram = 0;
            int c_Others = 0;

            int d_Others = 0;

            int ba_Pamphlets = 0;
            int ba_Magazine = 0;
            int ba_Leaflets = 0;
            int ba_Brochures = 0;
            int ba_Others = 0;

            int bb_Pamphlets = 0;
            int bb_Magazine = 0;
            int bb_Leaflets = 0;
            int bb_Brochures = 0;
            int bb_Others = 0;

            int bc_Facebook = 0;
            int bc_Twitter = 0;
            int bc_YouTube = 0;
            int bc_Instagram = 0;
            int bc_Others = 0;

            int bd_Others = 0;

            int a_Awareness_meetings = 0;
            int b_Awareness_meetings = 0;

            int a_Road_Shows = 0;
            int b_Road_Shows = 0;
            int a_Street_Plays = 0;
            int b_Street_Plays = 0;
            int a_household = 0;
            int b_household = 0;
            int a_Exhibitions = 0;
            int a_Seminars = 0;
            int a_Fair = 0;
            int b_Exhibitions = 0;
            int b_Seminars = 0;
            int b_Fair = 0;
            iec_report_class data = new iec_report_class();
            // Aggregate data from iecAchive
            foreach (var itema in iecAchive)
            {
                // Logic for aggregating the iecAchive data
                var activity = itema.activity;
                var sub_activity = itema.sub_activity;
                if (activity == "No. of Awareness meetings conducted")
                {
                    a_Awareness_meetings += 1;
                }
                if (activity == "No. of IEC material prepared")
                {
                    if (sub_activity == "Pamphlets")
                    {
                        a_Pamphlets += 1;
                    }
                    if (sub_activity == "Magazine")
                    {
                        a_Magazine += 1;
                    }
                    if (sub_activity == "Leaflets")
                    {
                        a_Leaflets += 1;
                    }
                    if (sub_activity == "Brochures")
                    {
                        a_Brochures += 1;
                    }
                    if (sub_activity == "Others")
                    {
                        a_Others += 1;
                    }

                }
                if (activity == "No. of IEC material displayed")
                {
                    if (sub_activity == "Wall Paintings")
                    {
                        b_Pamphlets += 1;
                    }
                    if (sub_activity == "Hoardings")
                    {
                        b_Magazine += 1;
                    }
                    if (sub_activity == "Posters")
                    {
                        b_Leaflets += 1;
                    }
                    if (sub_activity == "Signages")
                    {
                        b_Brochures += 1;
                    }
                    if (sub_activity == "Others")
                    {
                        b_Others += 1;
                    }

                }
                if (activity == "No. of Road Shows/Street Plays conducted")
                {
                    if (sub_activity == "Road Shows")
                    {
                        a_Road_Shows += 1;
                    }
                    if (sub_activity == "Street Plays")
                    {
                        a_Street_Plays += 1;
                    }
                }
                if (activity == "No.of Households covered under Door to Door Campaign")
                {
                    a_household += 1;
                }
                if (activity == "No. of Posts in social Media")
                {
                    if (sub_activity == "Facebook")
                    {
                        c_Facebook += 1;
                    }
                    if (sub_activity == "Twitter")
                    {
                        c_Twitter += 1;
                    }
                    if (sub_activity == "YouTube")
                    {
                        c_YouTube += 1;
                    }
                    if (sub_activity == "Instagram")
                    {
                        c_Instagram += 1;
                    }
                    if (sub_activity == "Others")
                    {
                        c_Others += 1;
                    }

                }
                if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                {
                    if (sub_activity == "Exhibitions")
                    {
                        a_Exhibitions += 1;
                    }
                    if (sub_activity == "Seminars")
                    {
                        a_Seminars += 1;
                    }
                    if (sub_activity == "Fair ")
                    {
                        a_Fair += 1;
                    }
                }
                if (activity == "Others")
                {
                    d_Others += 1;

                }
            }

            // Aggregate data from iecCum
            foreach (var item in iecCum.Where(x => Convert.ToInt32(x.order_by_month) < mmm))
            {
                var activity = item.activity;
                var sub_activity = item.sub_activity;
                if (activity == "No. of Awareness meetings conducted")
                {
                    b_Awareness_meetings += 1;
                }
                if (activity == "No. of IEC material prepared")
                {
                    if (sub_activity == "Pamphlets")
                    {
                        ba_Pamphlets += 1;
                    }
                    if (sub_activity == "Magazine")
                    {
                        ba_Magazine += 1;
                    }
                    if (sub_activity == "Leaflets")
                    {
                        ba_Leaflets += 1;
                    }
                    if (sub_activity == "Brochures")
                    {
                        ba_Brochures += 1;
                    }
                    if (sub_activity == "Others")
                    {
                        ba_Others += 1;
                    }

                }
                if (activity == "No. of IEC material displayed")
                {
                    if (sub_activity == "Wall Paintings")
                    {
                        bb_Pamphlets += 1;
                    }
                    if (sub_activity == "Hoardings")
                    {
                        bb_Magazine += 1;
                    }
                    if (sub_activity == "Posters")
                    {
                        bb_Leaflets += 1;
                    }
                    if (sub_activity == "Signages")
                    {
                        bb_Brochures += 1;
                    }
                    if (sub_activity == "Others")
                    {
                        bb_Others += 1;
                    }

                }
                if (activity == "No. of Road Shows/Street Plays conducted")
                {
                    if (sub_activity == "Road Shows")
                    {
                        b_Road_Shows += 1;
                    }
                    if (sub_activity == "Street Plays")
                    {
                        b_Street_Plays += 1;
                    }

                }
                if (activity == "No.of Households covered under Door to Door Campaign")
                {
                    b_household += 1;
                }
                if (activity == "No. of Posts in social Media")
                {
                    if (sub_activity == "Facebook")
                    {
                        bc_Facebook += 1;
                    }
                    if (sub_activity == "Twitter")
                    {
                        bc_Twitter += 1;
                    }
                    if (sub_activity == "YouTube")
                    {
                        bc_YouTube += 1;
                    }
                    if (sub_activity == "Instagram")
                    {
                        bc_Instagram += 1;
                    }
                    if (sub_activity == "Others")
                    {
                        bc_Others += 1;
                    }

                }
                if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                {
                    if (sub_activity == "Exhibitions")
                    {
                        b_Exhibitions += 1;
                    }
                    if (sub_activity == "Seminars")
                    {
                        b_Seminars += 1;
                    }
                    if (sub_activity == "Fair ")
                    {
                        b_Fair += 1;
                    }
                }
                if (activity == "Others")
                {
                    bd_Others += 1;

                }
                // Logic for aggregating the iecCum data
            }
            int a_total = c_Facebook + c_Twitter + c_YouTube + c_Instagram;
            int b_total = bc_Facebook + bc_Twitter + bc_YouTube + bc_Instagram;

            reportData.a_Awareness_meetings = a_Awareness_meetings;
            reportData.b_Awareness_meetings = b_Awareness_meetings;
            reportData.a_Road_Shows = a_Road_Shows;
            reportData.b_Road_Shows = b_Road_Shows;
            reportData.a_Street_Plays = a_Street_Plays;
            reportData.b_Street_Plays = b_Street_Plays;
            reportData.a_Pamphlets = a_Pamphlets;
            reportData.a_Magazine = a_Magazine;
            reportData.a_Leaflets = a_Leaflets;
            reportData.a_Brochures = a_Brochures;
            reportData.a_Others = a_Others;
            reportData.b_Pamphlets = b_Pamphlets;
            reportData.b_Magazine = b_Magazine;
            reportData.b_Leaflets = b_Leaflets;
            reportData.b_Brochures = b_Brochures;
            reportData.b_Others = b_Others;
            reportData.c_Facebook = c_Facebook;
            reportData.c_Twitter = c_Twitter;
            reportData.c_YouTube = c_YouTube;
            reportData.c_Instagram = c_Instagram;
            reportData.c_Others = a_total;
            reportData.d_Others = d_Others;
            reportData.ba_Pamphlets = ba_Pamphlets;
            reportData.ba_Magazine = ba_Magazine;
            reportData.ba_Leaflets = ba_Leaflets;
            reportData.ba_Brochures = ba_Brochures;
            reportData.ba_Others = ba_Others;
            reportData.bb_Pamphlets = bb_Pamphlets;
            reportData.bb_Magazine = bb_Magazine;
            reportData.bb_Leaflets = bb_Leaflets;
            reportData.bb_Brochures = bb_Brochures;
            reportData.bb_Others = bb_Others;
            reportData.bc_Facebook = bc_Facebook;
            reportData.bc_Twitter = bc_Twitter;
            reportData.bc_YouTube = bc_YouTube;
            reportData.bc_Instagram = bc_Instagram;
            reportData.bc_Others = b_total;
            reportData.bd_Others = bd_Others;
            reportData.a_Exhibitions = a_Exhibitions;
            reportData.a_Seminars = a_Seminars;
            reportData.a_Fair = a_Fair;
            reportData.b_Exhibitions = b_Exhibitions;
            reportData.b_Seminars = b_Seminars;
            reportData.b_Fair = b_Fair;

        }



        [HttpPost]
        public ActionResult gram_report(string StateName, string distName, string blockName, string gpname, string Year, int Month)
        {
            try
            {
                List<vw_orderwise_state_district_block_gp_area_info> statenn = new List<vw_orderwise_state_district_block_gp_area_info>();
                var off = Session["Officer"].ToString();
                var State = "";
                var Distric = "";
                var Block = "";
                var Gram = "";
                if (off == "State Level Nodal Officer")
                {
                    State = Session["gstate"].ToString();
                    Distric = distName;
                    Block = blockName;
                    Gram = gpname;
                }
                else if (off == "District Level Nodal Officer")
                {
                    State = Session["gstate"].ToString();
                    Distric = Session["gdist"].ToString();
                    Block = blockName;
                    Gram = gpname;
                }
                else if (off == "Block Level Nodal Officer")
                {
                    State = Session["gstate"].ToString();
                    Distric = Session["gdist"].ToString();
                    Block = Session["gblock"].ToString();
                    Gram = gpname;
                }
                else if (off == "Gram Panchyat Nodal Officer")
                {
                    State = Session["gstate"].ToString();
                    Distric = Session["gdist"].ToString();
                    Block = Session["gblock"].ToString();
                    Gram = Session["ggram"].ToString();
                }
                else if (off == "Admin" || off == "National Level Nodal Officer")
                {
                    State = StateName;
                    Distric = distName;
                    Block = blockName;
                    Gram = gpname;
                }
                if (State == "All")
                {
                    string[] statename = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                    
                    for (int a = 0; a < statename.Length; a++)
                    {
                        var staten = statename[a];
                      var  datan = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == staten).ToList();
                        statenn.AddRange(datan);
                    }
                }
                else if (Distric == "0")
                {
                    var staten = State;
                   var datan = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == staten).ToList();
                    statenn.AddRange(datan);

                }
                else if (Block == "0")
                {
                    var staten = State;
                    var district = Distric;
                   var datan = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == staten && x.district_name == district).ToList();
                    statenn.AddRange(datan);
                }
                else if (Gram == "0")
                {
                    var staten = State;
                    var district = Distric;
                    var blockname_new = Block;
                   var datan = ABE.obj_vw_orderwise_state_district_block_gp_area_info.Where(x => x.state_name == staten && x.district_name == district && x.block_name==blockname_new).ToList();
                    statenn.AddRange(datan);
                }
                else
                {
                    vw_orderwise_state_district_block_gp_area_info datan = new vw_orderwise_state_district_block_gp_area_info();
                    datan.state_name = State;
                    datan.district_name = Distric;
                    datan.block_name = Block;
                    datan.gram_panchayat_name = Gram;
                    statenn.Add(datan);

                }

                List<iec_report_class> all_data = new List<iec_report_class>();
                foreach (var itemfinal in statenn)
                {
                    iec_report_class data = new iec_report_class();

                    var state = (itemfinal.state_name).ToString();
                    var district = (itemfinal.district_name).ToString();
                    var block = (itemfinal.block_name).ToString();
                    var gram = (itemfinal.gram_panchayat_name).ToString();
                    data.statename = state;
                    data.districtname = district;
                    data.blockname = block;
                    data.gpname = gram;
                    List<abhy_IEC> iec_achive = new List<abhy_IEC>();
                    List<abhy_IEC> iec_cum = new List<abhy_IEC>();
                    int mmm = 0;
                    if (Year != "All")
                    {
                        if (Month != 13)
                        {
                            int monthh = Convert.ToInt32(Month);
                            mmm = monthh + 1;
                            iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.order_by_month == Month && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        }
                        else
                        {
                            mmm = 13; // For Month == 13, you are already setting mmm to 13 in the original code
                            iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        }

                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else
                    {
                        if (Month != 13)
                        {
                            int monthh = Convert.ToInt32(Month);
                            mmm = monthh + 1;
                            iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.order_by_month == Month && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        }
                        else
                        {
                            mmm = 13; // When Month is 13, set mmm to 13
                            iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        }

                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    }



                    //int mmm = 0;
                    //if (Year != "All" && Month != 13)
                    //{
                    //    iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name==block && x.gpname== gram && x.year == Year && x.order_by_month == Month && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //    int monthh = Convert.ToInt32(Month);
                    //    mmm = monthh + 1;
                    //    iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //}
                    //else if (Year != "All" && Month == 13)
                    //{
                    //    iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //    int monthh = Convert.ToInt32(Month);
                    //    mmm = monthh + 1;
                    //    iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //}
                    //else if (Year == "All" && Month != 13)
                    //{
                    //    iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.order_by_month == Month && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //    int monthh = Convert.ToInt32(Month);
                    //    mmm = monthh + 1;
                    //    iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //}
                    //else if (Year == "All" && Month == 13)
                    //{
                    //    iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //    int monthh = Convert.ToInt32(Month);
                    //    mmm = 12 + 1;
                    //    iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    //}

                    int a_Pamphlets = 0;
                    int a_Magazine = 0;
                    int a_Leaflets = 0;
                    int a_Brochures = 0;
                    int a_Others = 0;

                    int b_Pamphlets = 0;
                    int b_Magazine = 0;
                    int b_Leaflets = 0;
                    int b_Brochures = 0;
                    int b_Others = 0;

                    int c_Facebook = 0;
                    int c_Twitter = 0;
                    int c_YouTube = 0;
                    int c_Instagram = 0;
                    int c_Others = 0;

                    int d_Others = 0;

                    int ba_Pamphlets = 0;
                    int ba_Magazine = 0;
                    int ba_Leaflets = 0;
                    int ba_Brochures = 0;
                    int ba_Others = 0;

                    int bb_Pamphlets = 0;
                    int bb_Magazine = 0;
                    int bb_Leaflets = 0;
                    int bb_Brochures = 0;
                    int bb_Others = 0;

                    int bc_Facebook = 0;
                    int bc_Twitter = 0;
                    int bc_YouTube = 0;
                    int bc_Instagram = 0;
                    int bc_Others = 0;

                    int bd_Others = 0;

                    int a_Awareness_meetings = 0;
                    int b_Awareness_meetings = 0;

                    int a_Road_Shows = 0;
                    int b_Road_Shows = 0;
                    int a_Street_Plays = 0;
                    int b_Street_Plays = 0;
                    int a_household = 0;
                    int b_household = 0;
                    int a_Exhibitions = 0;
                    int a_Seminars = 0;
                    int a_Fair = 0;
                    int b_Exhibitions = 0;
                    int b_Seminars = 0;
                    int b_Fair = 0;
                    foreach (var itema in iec_achive)
                    {
                        var activity = itema.activity;
                        var sub_activity = itema.sub_activity;
                        if (activity == "No. of Awareness meetings conducted")
                        {
                            a_Awareness_meetings += 1;
                        }
                        if (activity == "No. of IEC material prepared")
                        {
                            if (sub_activity == "Pamphlets")
                            {
                                a_Pamphlets += 1;
                            }
                            if (sub_activity == "Magazine")
                            {
                                a_Magazine += 1;
                            }
                            if (sub_activity == "Leaflets")
                            {
                                a_Leaflets += 1;
                            }
                            if (sub_activity == "Brochures")
                            {
                                a_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                a_Others += 1;
                            }

                        }
                        if (activity == "No. of IEC material displayed")
                        {
                            if (sub_activity == "Wall Paintings")
                            {
                                b_Pamphlets += 1;
                            }
                            if (sub_activity == "Hoardings")
                            {
                                b_Magazine += 1;
                            }
                            if (sub_activity == "Posters")
                            {
                                b_Leaflets += 1;
                            }
                            if (sub_activity == "Signages")
                            {
                                b_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                b_Others += 1;
                            }

                        }
                        if (activity == "No. of Road Shows/Street Plays conducted")
                        {
                            if (sub_activity == "Road Shows")
                            {
                                a_Road_Shows += 1;
                            }
                            if (sub_activity == "Street Plays")
                            {
                                a_Street_Plays += 1;
                            }
                        }
                        if (activity == "No.of Households covered under Door to Door Campaign")
                        {
                            a_household += 1;
                        }
                        if (activity == "No. of Posts in social Media")
                        {
                            if (sub_activity == "Facebook")
                            {
                                c_Facebook += 1;
                            }
                            if (sub_activity == "Twitter")
                            {
                                c_Twitter += 1;
                            }
                            if (sub_activity == "YouTube")
                            {
                                c_YouTube += 1;
                            }
                            if (sub_activity == "Instagram")
                            {
                                c_Instagram += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                c_Others += 1;
                            }

                        }
                        if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                        {
                            if (sub_activity == "Exhibitions")
                            {
                                a_Exhibitions += 1;
                            }
                            if (sub_activity == "Seminars")
                            {
                                a_Seminars += 1;
                            }
                            if (sub_activity == "Fair ")
                            {
                                a_Fair += 1;
                            }
                        }
                        if (activity == "Others")
                        {
                            d_Others += 1;

                        }
                    }                 
                    foreach (var item in iec_cum)
                    {
                        int monnn = Convert.ToInt32(item.order_by_month);
                        if (monnn < mmm)
                        {
                            var activity = item.activity;
                            var sub_activity = item.sub_activity;
                            if (activity == "No. of Awareness meetings conducted")
                            {
                                b_Awareness_meetings += 1;
                            }
                            if (activity == "No. of IEC material prepared")
                            {
                                if (sub_activity == "Pamphlets")
                                {
                                    ba_Pamphlets += 1;
                                }
                                if (sub_activity == "Magazine")
                                {
                                    ba_Magazine += 1;
                                }
                                if (sub_activity == "Leaflets")
                                {
                                    ba_Leaflets += 1;
                                }
                                if (sub_activity == "Brochures")
                                {
                                    ba_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    ba_Others += 1;
                                }

                            }
                            if (activity == "No. of IEC material displayed")
                            {
                                if (sub_activity == "Wall Paintings")
                                {
                                    bb_Pamphlets += 1;
                                }
                                if (sub_activity == "Hoardings")
                                {
                                    bb_Magazine += 1;
                                }
                                if (sub_activity == "Posters")
                                {
                                    bb_Leaflets += 1;
                                }
                                if (sub_activity == "Signages")
                                {
                                    bb_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bb_Others += 1;
                                }

                            }
                            if (activity == "No. of Road Shows/Street Plays conducted")
                            {
                                if (sub_activity == "Road Shows")
                                {
                                    b_Road_Shows += 1;
                                }
                                if (sub_activity == "Street Plays")
                                {
                                    b_Street_Plays += 1;
                                }

                            }
                            if (activity == "No.of Households covered under Door to Door Campaign")
                            {
                                b_household += 1;
                            }
                            if (activity == "No. of Posts in social Media")
                            {
                                if (sub_activity == "Facebook")
                                {
                                    bc_Facebook += 1;
                                }
                                if (sub_activity == "Twitter")
                                {
                                    bc_Twitter += 1;
                                }
                                if (sub_activity == "YouTube")
                                {
                                    bc_YouTube += 1;
                                }
                                if (sub_activity == "Instagram")
                                {
                                    bc_Instagram += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bc_Others += 1;
                                }

                            }
                            if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                            {
                                if (sub_activity == "Exhibitions")
                                {
                                    b_Exhibitions += 1;
                                }
                                if (sub_activity == "Seminars")
                                {
                                    b_Seminars += 1;
                                }
                                if (sub_activity == "Fair ")
                                {
                                    b_Fair += 1;
                                }
                            }
                            if (activity == "Others")
                            {
                                bd_Others += 1;

                            }
                        }
                    }

                    int a_total = c_Facebook + c_Twitter + c_YouTube + c_Instagram;
                    int b_total = bc_Facebook + bc_Twitter + bc_YouTube + bc_Instagram;

                    data.a_Awareness_meetings = a_Awareness_meetings;
                    data.b_Awareness_meetings = b_Awareness_meetings;
                    data.a_Road_Shows = a_Road_Shows;
                    data.b_Road_Shows = b_Road_Shows;
                    data.a_Street_Plays = a_Street_Plays;
                    data.b_Street_Plays = b_Street_Plays;
                    data.a_Pamphlets = a_Pamphlets;
                    data.a_Magazine = a_Magazine;
                    data.a_Leaflets = a_Leaflets;
                    data.a_Brochures = a_Brochures;
                    data.a_Others = a_Others;
                    data.b_Pamphlets = b_Pamphlets;
                    data.b_Magazine = b_Magazine;
                    data.b_Leaflets = b_Leaflets;
                    data.b_Brochures = b_Brochures;
                    data.b_Others = b_Others;
                    data.c_Facebook = c_Facebook;
                    data.c_Twitter = c_Twitter;
                    data.c_YouTube = c_YouTube;
                    data.c_Instagram = c_Instagram;
                    data.c_Others = a_total;
                    data.d_Others = d_Others;
                    data.ba_Pamphlets = ba_Pamphlets;
                    data.ba_Magazine = ba_Magazine;
                    data.ba_Leaflets = ba_Leaflets;
                    data.ba_Brochures = ba_Brochures;
                    data.ba_Others = ba_Others;
                    data.bb_Pamphlets = bb_Pamphlets;
                    data.bb_Magazine = bb_Magazine;
                    data.bb_Leaflets = bb_Leaflets;
                    data.bb_Brochures = bb_Brochures;
                    data.bb_Others = bb_Others;
                    data.bc_Facebook = bc_Facebook;
                    data.bc_Twitter = bc_Twitter;
                    data.bc_YouTube = bc_YouTube;
                    data.bc_Instagram = bc_Instagram;
                    data.bc_Others = b_total;
                    data.bd_Others = bd_Others;
                    data.a_Exhibitions = a_Exhibitions;
                    data.a_Seminars = a_Seminars;
                    data.a_Fair = a_Fair;
                    data.b_Exhibitions = b_Exhibitions;
                    data.b_Seminars = b_Seminars;
                    data.b_Fair = b_Fair;

                    all_data.Add(data);
                }

                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }


        public string Get_Month_Number(int month)
        {
            string month_num = "";
            switch (month)
            {
                case 1:
                    month_num = "April";
                    break;
                case 2:
                    month_num = "May";
                    break;
                case 3:
                    month_num = "June";
                    break;
                case 4:
                    month_num = "July";
                    break;
                case 5:
                    month_num = "August";
                    break;
                case 6:
                    month_num = "September";
                    break;
                case 7:
                    month_num = "October";
                    break;
                case 8:
                    month_num = "November";
                    break;
                case 9:
                    month_num = "December";
                    break;
                case 10:
                    month_num = "January";
                    break;
                case 11:
                    month_num = "February";
                    break;
                case 12:
                    month_num = "March";
                    break;
            }
            return month_num;
        }


        public ActionResult report_IECMonthly()
        {
            return View();
        }

        [HttpPost]
        public ActionResult all_reportMonthly(string StateName, string Year, int Month, int quarter, int halfyear)
        {
            try
            {
                //int quarter = 2;
                List<iec_report_class_statename> statenn = new List<iec_report_class_statename>();
                var off = Session["Officer"].ToString();
                var State = "";
                if (off == "State Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    State = ss;
                }
                else if (off == "Admin" || off == "National Level Nodal Officer")
                {
                    State = StateName;
                }
                if (State == "All")
                {
                    string[] statename = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };
                    for (int a = 0; a < statename.Length; a++)
                    {
                        iec_report_class_statename datan = new iec_report_class_statename();
                        var staten = statename[a];
                        datan.statename = staten;
                        statenn.Add(datan);
                    }
                }
                else
                {
                    iec_report_class_statename datan = new iec_report_class_statename();
                    var staten = State;
                    datan.statename = staten;
                    statenn.Add(datan);
                }

                List<iec_report_class> all_data = new List<iec_report_class>();

                for (int i = 0; i < statenn.Count; i++)
                {
                    iec_report_class data = new iec_report_class();

                    var state = (statenn[i].statename).ToString();
                    data.statename = state;
                    List<abhy_IEC> iec_achive = new List<abhy_IEC>();
                    List<abhy_IEC> iec_cum = new List<abhy_IEC>();
                    int mmm = 0;
                    if (Year != "All" && Month != 13 && quarter == 0 && halfyear == 0)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.order_by_month == Month && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }

                    else if (Year != "All" && Month == 13 && quarter == 0 && halfyear == 0)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month != 13 && quarter == 0 && halfyear == 0)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.order_by_month == Month && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month == 13 && quarter == 0 && halfyear == 0)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = 12 + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year != "All" && Month == 0 && quarter != 0 && halfyear == 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.year == Year
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                        && (
                     (x.order_by_month >= 1 && x.order_by_month <= 3 && quarter == 1) ||
                     (x.order_by_month >= 4 && x.order_by_month <= 6 && quarter == 2) ||
                     (x.order_by_month >= 7 && x.order_by_month <= 9 && quarter == 3) ||
                     (x.order_by_month >= 10 && x.order_by_month <= 12 && quarter == 4)
                 )).ToList();

                        int monthh = Convert.ToInt32(quarter);
                        mmm = 12 + 1;

                        //iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        iec_cum = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.year == Year
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         ).ToList();
                    }

                    else if (Year == "All" && Month == 0 && quarter != 0 && halfyear == 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         && (
                     (x.order_by_month >= 1 && x.order_by_month <= 3 && quarter == 1) ||
                     (x.order_by_month >= 4 && x.order_by_month <= 6 && quarter == 2) ||
                     (x.order_by_month >= 7 && x.order_by_month <= 9 && quarter == 3) ||
                     (x.order_by_month >= 10 && x.order_by_month <= 12 && quarter == 4)
                 )).ToList();

                        //int monthh = Convert.ToInt32(Month);
                        //mmm = monthh + 1;
                        //iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        int monthh = Convert.ToInt32(quarter);
                        //if (monthh == 1)
                        //{
                        //    mmm = 1 + 2 + 3 + 1;
                        //}
                        //if (monthh == 2)
                        //{
                        //    mmm = 4 + 5 + 6 + 1;
                        //}
                        //if (monthh == 3)
                        //{
                        //    mmm = 7 + 8 + 9 + 1;
                        //}
                        //if (monthh == 4)
                        //{
                        //    mmm = 10 + 11 + 12 + 1;
                        //}
                        mmm = 12 + 1;

                        iec_cum = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         ).ToList();

                    }

                    else if (Year != "All" && Month == 0 && quarter == 0 && halfyear != 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.year == Year
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                        && (
                     (x.order_by_month >= 1 && x.order_by_month <= 6 && halfyear == 1) ||
                     (x.order_by_month >= 7 && x.order_by_month <= 12 && halfyear == 2)

                 )).ToList();

                        int monthh = Convert.ToInt32(halfyear);
                        //if (monthh == 1)
                        //{
                        //    mmm = 1 + 2 + 3 + 4 + 5 + 6 + 1;
                        //}
                        //if (monthh == 2)
                        //{
                        //    mmm = 7 + 8 + 9 + 10 + 11 + 12 + 1;
                        //}
                        mmm = 12 + 1;

                        //iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        iec_cum = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.year == Year
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         ).ToList();


                    }

                    else if (Year == "All" && Month == 0 && quarter == 0 && halfyear != 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                        && (
                     (x.order_by_month >= 1 && x.order_by_month <= 6 && halfyear == 1) ||
                     (x.order_by_month >= 7 && x.order_by_month <= 12 && halfyear == 2)

                 )).ToList();

                        int monthh = Convert.ToInt32(halfyear);
                        //if (monthh == 1)
                        //{
                        //    mmm = 1 + 2 + 3 + 4 + 5 + 6 + 1;
                        //}
                        //if (monthh == 2)
                        //{
                        //    mmm = 7 + 8 + 9 + 10 + 11 + 12 + 1;
                        //}

                        mmm = 12 + 1;

                        //iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();
                        iec_cum = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         ).ToList();


                    }


                    int a_Pamphlets = 0;
                    int a_Magazine = 0;
                    int a_Leaflets = 0;
                    int a_Brochures = 0;
                    int a_Others = 0;

                    int b_Pamphlets = 0;
                    int b_Magazine = 0;
                    int b_Leaflets = 0;
                    int b_Brochures = 0;
                    int b_Others = 0;

                    int c_Facebook = 0;
                    int c_Twitter = 0;
                    int c_YouTube = 0;
                    int c_Instagram = 0;
                    int c_Others = 0;

                    int d_Others = 0;

                    int d_Audio = 0;
                    int d_Video = 0;

                    int e_Publicity = 0;

                    int f_Road = 0;
                    int f_Street = 0;

                    int g_HHS = 0;

                    int h_Exhibitions = 0;
                    int h_Fair = 0;
                    int h_Seminars = 0;


                    int ba_Pamphlets = 0;
                    int ba_Magazine = 0;
                    int ba_Leaflets = 0;
                    int ba_Brochures = 0;
                    int ba_Others = 0;

                    int bb_Pamphlets = 0;
                    int bb_Magazine = 0;
                    int bb_Leaflets = 0;
                    int bb_Brochures = 0;
                    int bb_Others = 0;

                    int bc_Facebook = 0;
                    int bc_Twitter = 0;
                    int bc_YouTube = 0;
                    int bc_Instagram = 0;
                    int bc_Others = 0;

                    int bd_Others = 0;

                    int bd_Audio = 0;
                    int bd_Video = 0;

                    int be_Publicity = 0;

                    int bf_Road = 0;
                    int bf_Street = 0;

                    int bg_HHS = 0;

                    int bh_Exhibitions = 0;
                    int bh_Fair = 0;
                    int bh_Seminars = 0;
                    string other_activity = null;

                    for (int k = 0; k < iec_achive.Count; k++)
                    {
                        var activity = iec_achive[k].activity;
                        var sub_activity = iec_achive[k].sub_activity;

                        if (activity == "No. of IEC material prepared")
                        {
                            if (sub_activity == "Pamphlets")
                            {
                                a_Pamphlets += 1;
                            }
                            if (sub_activity == "Magazine")
                            {
                                a_Magazine += 1;
                            }
                            if (sub_activity == "Leaflets")
                            {
                                a_Leaflets += 1;
                            }
                            if (sub_activity == "Brochures")
                            {
                                a_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                a_Others += 1;
                            }

                        }
                        if (activity == "No. of IEC material displayed")
                        {
                            if (sub_activity == "Wall Paintings")
                            {
                                b_Pamphlets += 1;
                            }
                            if (sub_activity == "Hoardings")
                            {
                                b_Magazine += 1;
                            }
                            if (sub_activity == "Posters")
                            {
                                b_Leaflets += 1;
                            }
                            if (sub_activity == "Signages")
                            {
                                b_Brochures += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                b_Others += 1;
                            }

                        }
                        if (activity == "No. of Posts in social Media")
                        {
                            if (sub_activity == "Facebook")
                            {
                                c_Facebook += 1;
                            }
                            if (sub_activity == "Twitter")
                            {
                                c_Twitter += 1;
                            }
                            if (sub_activity == "YouTube")
                            {
                                c_YouTube += 1;
                            }
                            if (sub_activity == "Instagram")
                            {
                                c_Instagram += 1;
                            }
                            if (sub_activity == "Others")
                            {
                                c_Others += 1;
                            }

                        }
                        if (activity == "No. of  Audio/Video materials prepared")
                        {
                            if (sub_activity == "Audio")
                            {
                                d_Audio += 1;
                            }
                            if (sub_activity == "Video")
                            {
                                d_Video += 1;
                            }


                        }
                        if (activity == "Others")
                        {

                            d_Others += 1;
                            other_activity = iec_achive[k].activity_other;


                        }
                        if (activity == "No. of Awareness meetings conducted")
                        {
                            if (sub_activity == "Publicity meetings")
                            {
                                e_Publicity += 1;
                            }

                        }
                        if (activity == "No. of Road Shows/Street Plays conducted")
                        {
                            if (sub_activity == "Road Shows")
                            {
                                f_Road += 1;
                            }
                            if (sub_activity == "Street Plays")
                            {
                                f_Street += 1;
                            }

                        }
                        if (activity == "No. of Households covered under Door to Door Campaign")
                        {
                            g_HHS += 1;

                        }
                        if (activity == "No. of Exhibitions/Seminars/Fair Conducted")
                        {
                            if (sub_activity == "Exhibitions")
                            {
                                h_Exhibitions += 1;
                            }
                            if (sub_activity == "Fair ")
                            {
                                h_Fair += 1;
                            }
                            if (sub_activity == "Seminars ")
                            {
                                h_Seminars += 1;
                            }

                        }
                    }
                    for (int j = 0; j < iec_cum.Count; j++)
                    {
                        int monnn = Convert.ToInt32(iec_cum[j].order_by_month);
                        if (monnn < mmm)
                        {
                            var activity = iec_cum[j].activity;
                            var sub_activity = iec_cum[j].sub_activity;

                            if (activity == "No. of IEC material prepared")
                            {
                                if (sub_activity == "Pamphlets")
                                {
                                    ba_Pamphlets += 1;
                                }
                                if (sub_activity == "Magazine")
                                {
                                    ba_Magazine += 1;
                                }
                                if (sub_activity == "Leaflets")
                                {
                                    ba_Leaflets += 1;
                                }
                                if (sub_activity == "Brochures")
                                {
                                    ba_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    ba_Others += 1;
                                }

                            }
                            if (activity == "No. of IEC material displayed")
                            {
                                if (sub_activity == "Wall Paintings")
                                {
                                    bb_Pamphlets += 1;
                                }
                                if (sub_activity == "Hoardings")
                                {
                                    bb_Magazine += 1;
                                }
                                if (sub_activity == "Posters")
                                {
                                    bb_Leaflets += 1;
                                }
                                if (sub_activity == "Signages")
                                {
                                    bb_Brochures += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bb_Others += 1;
                                }

                            }
                            if (activity == "No. of Posts in social Media")
                            {
                                if (sub_activity == "Facebook")
                                {
                                    bc_Facebook += 1;
                                }
                                if (sub_activity == "Twitter")
                                {
                                    bc_Twitter += 1;
                                }
                                if (sub_activity == "YouTube")
                                {
                                    bc_YouTube += 1;
                                }
                                if (sub_activity == "Instagram")
                                {
                                    bc_Instagram += 1;
                                }
                                if (sub_activity == "Others")
                                {
                                    bc_Others += 1;
                                }

                            }
                            if (activity == "No. of  Audio/Video materials prepared")
                            {
                                if (sub_activity == "Audio")
                                {
                                    bd_Audio += 1;
                                }
                                if (sub_activity == "Video")
                                {
                                    bd_Video += 1;
                                }


                            }
                            if (activity == "Others")
                            {
                                bd_Others += 1;
                                other_activity = iec_cum[j].activity_other;

                            }
                            if (activity == "No. of Awareness meetings conducted")
                            {
                                if (sub_activity == "Publicity meetings")
                                {
                                    be_Publicity += 1;
                                }

                            }
                            if (activity == "No. of Road Shows/Street Plays conducted")
                            {
                                if (sub_activity == "Road Shows")
                                {
                                    bf_Road += 1;
                                }
                                if (sub_activity == "Street Plays")
                                {
                                    bf_Street += 1;
                                }

                            }
                            if (activity == "No. of Households covered under Door to Door Campaign")
                            {
                                bg_HHS += 1;

                            }
                            if (activity == "No. of Exhibitions/Seminars/Fair Conducted")
                            {
                                if (sub_activity == "Exhibitions")
                                {
                                    bh_Exhibitions += 1;
                                }
                                if (sub_activity == "Fair ")
                                {
                                    bh_Fair += 1;
                                }
                                if (sub_activity == "Seminars ")
                                {
                                    bh_Seminars += 1;
                                }

                            }
                        }
                    }

                    int a_total = c_Facebook + c_Twitter + c_YouTube + c_Instagram;
                    int b_total = bc_Facebook + bc_Twitter + bc_YouTube + bc_Instagram;


                    data.a_Pamphlets = a_Pamphlets;
                    data.a_Magazine = a_Magazine;
                    data.a_Leaflets = a_Leaflets;
                    data.a_Brochures = a_Brochures;
                    data.a_Others = a_Others;
                    data.b_Pamphlets = b_Pamphlets;
                    data.b_Magazine = b_Magazine;
                    data.b_Leaflets = b_Leaflets;
                    data.b_Brochures = b_Brochures;
                    data.b_Others = b_Others;
                    data.c_Facebook = c_Facebook;
                    data.c_Twitter = c_Twitter;
                    data.c_YouTube = c_YouTube;
                    data.c_Instagram = c_Instagram;
                    data.c_Others = a_total;
                    data.d_Others = d_Others;
                    data.d_Audio = d_Audio;
                    data.d_Video = d_Video;
                    data.e_Publicity = e_Publicity;
                    data.f_Road = f_Road;
                    data.f_Street = f_Street;
                    data.g_HHS = g_HHS;
                    data.h_Exhibitions = h_Exhibitions;
                    data.h_Fair = h_Fair;
                    data.h_Seminars = h_Seminars;
                    data.ba_Pamphlets = ba_Pamphlets;
                    data.ba_Magazine = ba_Magazine;
                    data.ba_Leaflets = ba_Leaflets;
                    data.ba_Brochures = ba_Brochures;
                    data.ba_Others = ba_Others;
                    data.bb_Pamphlets = bb_Pamphlets;
                    data.bb_Magazine = bb_Magazine;
                    data.bb_Leaflets = bb_Leaflets;
                    data.bb_Brochures = bb_Brochures;
                    data.bb_Others = bb_Others;
                    data.bc_Facebook = bc_Facebook;
                    data.bc_Twitter = bc_Twitter;
                    data.bc_YouTube = bc_YouTube;
                    data.bc_Instagram = bc_Instagram;
                    data.bc_Others = b_total;
                    data.bd_Others = bd_Others;
                    data.bd_Audio = bd_Audio;
                    data.bd_Video = bd_Video;
                    data.be_Publicity = be_Publicity;
                    data.bf_Road = bf_Road;
                    data.bf_Street = bf_Street;
                    data.bg_HHS = bg_HHS;
                    data.bh_Exhibitions = h_Exhibitions;
                    data.bh_Fair = h_Fair;
                    data.bh_Seminars = h_Seminars;
                    data.activity_other = other_activity;
                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }



    }
}