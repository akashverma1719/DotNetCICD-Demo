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

                for (int i = 0; i < statenn.Count; i++)
                {
                    iec_report_class data = new iec_report_class();

                    var state = (statenn[i].state_name).ToString();
                    var district = (statenn[i].district_name).ToString();
                    var block = (statenn[i].block_name).ToString();
                    var gram = (statenn[i].gram_panchayat_name).ToString();
                    data.statename = state;
                    data.districtname = district;
                    data.blockname = block;
                    data.gpname = gram;
                    List<abhy_IEC> iec_achive = new List<abhy_IEC>();
                    List<abhy_IEC> iec_cum = new List<abhy_IEC>();
                    int mmm = 0;
                    if (Year != "All" && Month != 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name==block && x.gpname== gram && x.year == Year && x.order_by_month == Month && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year != "All" && Month == 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.year == Year && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month != 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.order_by_month == Month && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month == 13)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = 12 + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.district_name == district && x.block_name == block && x.gpname == gram && x.Nodal_officer == "Gram Panchyat Nodal Officer" && x.approve_status == "Approved").ToList();
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

    }
}