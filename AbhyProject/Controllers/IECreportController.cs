using AbhyProject.Models;
using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.IO;
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
        public ActionResult all_report(string StateName, string Year, int Month)
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
                        var number = iec_achive[k].number;
                        if (activity == "No. of IEC material prepared")
                        {
                            if (sub_activity == "Pamphlets")
                            {
                                a_Pamphlets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Magazine")
                            {
                                a_Magazine += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Leaflets")
                            {
                                a_Leaflets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Brochures")
                            {
                                a_Brochures += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Others")
                            {
                                a_Others += Convert.ToInt32(number);
                            }

                        }
                        if (activity == "No. of IEC material displayed")
                        {
                            if (sub_activity == "Wall Paintings")
                            {
                                b_Pamphlets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Hoardings")
                            {
                                b_Magazine += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Posters")
                            {
                                b_Leaflets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Signages")
                            {
                                b_Brochures += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Others")
                            {
                                b_Others += Convert.ToInt32(number);
                            }

                        }
                        if (activity == "No. of Posts in social Media")
                        {
                            if (sub_activity == "Facebook")
                            {
                                c_Facebook += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Twitter")
                            {
                                c_Twitter += Convert.ToInt32(number);
                            }
                            if (sub_activity == "YouTube")
                            {
                                c_YouTube += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Instagram")
                            {
                                c_Instagram += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Others")
                            {
                                c_Others += Convert.ToInt32(number);
                            }

                        }
                        if (activity == "No. of  Audio/Video materials prepared")
                        {
                            if (sub_activity == "Audio")
                            {
                                d_Audio += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Video")
                            {
                                d_Video += Convert.ToInt32(number);
                            }


                        }
                        if (activity == "Others")
                        {
                            d_Others += Convert.ToInt32(number);

                        }
                    }
                    for (int j = 0; j < iec_cum.Count; j++)
                    {
                        int monnn = Convert.ToInt32(iec_cum[j].order_by_month);

                        if (monnn < mmm)
                        {
                            var activity = iec_cum[j].activity;
                            var sub_activity = iec_cum[j].sub_activity;
                            var number = iec_cum[j].number;
                            if (activity == "No. of IEC material prepared")
                            {
                                if (sub_activity == "Pamphlets")
                                {
                                    ba_Pamphlets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Magazine")
                                {
                                    ba_Magazine += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Leaflets")
                                {
                                    ba_Leaflets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Brochures")
                                {
                                    ba_Brochures += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Others")
                                {
                                    ba_Others += Convert.ToInt32(number);
                                }

                            }
                            if (activity == "No. of IEC material displayed")
                            {
                                if (sub_activity == "Wall Paintings")
                                {
                                    bb_Pamphlets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Hoardings")
                                {
                                    bb_Magazine += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Posters")
                                {
                                    bb_Leaflets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Signages")
                                {
                                    bb_Brochures += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Others")
                                {
                                    bb_Others += Convert.ToInt32(number);
                                }

                            }
                            if (activity == "No. of Posts in social Media")
                            {
                                if (sub_activity == "Facebook")
                                {
                                    bc_Facebook += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Twitter")
                                {
                                    bc_Twitter += Convert.ToInt32(number);
                                }
                                if (sub_activity == "YouTube")
                                {
                                    bc_YouTube += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Instagram")
                                {
                                    bc_Instagram += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Others")
                                {
                                    bc_Others += Convert.ToInt32(number);
                                }

                            }
                            if (activity == "No. of  Audio/Video materials prepared")
                            {
                                if (sub_activity == "Audio")
                                {
                                    bd_Audio += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Video")
                                {
                                    bd_Video += Convert.ToInt32(number);
                                }


                            }
                            if (activity == "Others")
                            {
                                bd_Others += Convert.ToInt32(number);

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
                        var number = iec_achive[k].number;
                        if (activity == "No. of Awareness meetings conducted")
                        {
                            a_Awareness_meetings += Convert.ToInt32(number);
                        }
                        if (activity == "No. of IEC material prepared")
                        {
                            if (sub_activity == "Pamphlets")
                            {
                                a_Pamphlets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Magazine")
                            {
                                a_Magazine += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Leaflets")
                            {
                                a_Leaflets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Brochures")
                            {
                                a_Brochures += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Others")
                            {
                                a_Others += Convert.ToInt32(number);
                            }

                        }
                        if (activity == "No. of IEC material displayed")
                        {
                            if (sub_activity == "Wall Paintings")
                            {
                                b_Pamphlets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Hoardings")
                            {
                                b_Magazine += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Posters")
                            {
                                b_Leaflets += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Signages")
                            {
                                b_Brochures += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Others")
                            {
                                b_Others += Convert.ToInt32(number);
                            }

                        }
                        if (activity == "No. of Road Shows/Street Plays conducted")
                        {
                            if (sub_activity == "Road Shows")
                            {
                                a_Road_Shows += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Street Plays")
                            {
                                a_Street_Plays += Convert.ToInt32(number);
                            }
                        }
                        if (activity == "No.of Households covered under Door to Door Campaign")
                        {
                            a_household += Convert.ToInt32(number);
                        }
                        if (activity == "No. of Posts in social Media")
                        {
                            if (sub_activity == "Facebook")
                            {
                                c_Facebook += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Twitter")
                            {
                                c_Twitter += Convert.ToInt32(number);
                            }
                            if (sub_activity == "YouTube")
                            {
                                c_YouTube += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Instagram")
                            {
                                c_Instagram += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Others")
                            {
                                c_Others += Convert.ToInt32(number);
                            }

                        }
                        if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                        {
                            if (sub_activity == "Exhibitions")
                            {
                                a_Exhibitions += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Seminars")
                            {
                                a_Seminars += Convert.ToInt32(number);
                            }
                            if (sub_activity == "Fair ")
                            {
                                a_Fair += Convert.ToInt32(number);
                            }
                        }
                        if (activity == "Others")
                        {
                            d_Others += Convert.ToInt32(number);

                        }
                    }
                    for (int j = 0; j < iec_cum.Count; j++)
                    {
                        int monnn = Convert.ToInt32(iec_cum[j].order_by_month);
                        if (monnn < mmm)
                        {
                            var activity = iec_cum[j].activity;
                            var sub_activity = iec_cum[j].sub_activity;
                            var number = iec_cum[j].number;
                            if (activity == "No. of Awareness meetings conducted")
                            {
                                b_Awareness_meetings += Convert.ToInt32(number);
                            }
                            if (activity == "No. of IEC material prepared")
                            {
                                if (sub_activity == "Pamphlets")
                                {
                                    ba_Pamphlets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Magazine")
                                {
                                    ba_Magazine += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Leaflets")
                                {
                                    ba_Leaflets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Brochures")
                                {
                                    ba_Brochures += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Others")
                                {
                                    ba_Others += Convert.ToInt32(number);
                                }

                            }
                            if (activity == "No. of IEC material displayed")
                            {
                                if (sub_activity == "Wall Paintings")
                                {
                                    bb_Pamphlets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Hoardings")
                                {
                                    bb_Magazine += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Posters")
                                {
                                    bb_Leaflets += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Signages")
                                {
                                    bb_Brochures += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Others")
                                {
                                    bb_Others += Convert.ToInt32(number);
                                }

                            }
                            if (activity == "No. of Road Shows/Street Plays conducted")
                            {
                                if (sub_activity == "Road Shows")
                                {
                                    b_Road_Shows += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Street Plays")
                                {
                                    b_Street_Plays += Convert.ToInt32(number);
                                }

                            }
                            if (activity == "No.of Households covered under Door to Door Campaign")
                            {
                                b_household += Convert.ToInt32(number);
                            }
                            if (activity == "No. of Posts in social Media")
                            {
                                if (sub_activity == "Facebook")
                                {
                                    bc_Facebook += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Twitter")
                                {
                                    bc_Twitter += Convert.ToInt32(number);
                                }
                                if (sub_activity == "YouTube")
                                {
                                    bc_YouTube += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Instagram")
                                {
                                    bc_Instagram += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Others")
                                {
                                    bc_Others += Convert.ToInt32(number);
                                }

                            }
                            if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                            {
                                if (sub_activity == "Exhibitions")
                                {
                                    b_Exhibitions += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Seminars")
                                {
                                    b_Seminars += Convert.ToInt32(number);
                                }
                                if (sub_activity == "Fair ")
                                {
                                    b_Fair += Convert.ToInt32(number);
                                }
                            }
                            if (activity == "Others")
                            {
                                bd_Others += Convert.ToInt32(number);

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
                var number = itema.number;
                if (activity == "No. of Awareness meetings conducted")
                {
                    a_Awareness_meetings += Convert.ToInt32(number);
                }
                if (activity == "No. of IEC material prepared")
                {
                    if (sub_activity == "Pamphlets")
                    {
                        a_Pamphlets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Magazine")
                    {
                        a_Magazine += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Leaflets")
                    {
                        a_Leaflets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Brochures")
                    {
                        a_Brochures += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Others")
                    {
                        a_Others += Convert.ToInt32(number);
                    }

                }
                if (activity == "No. of IEC material displayed")
                {
                    if (sub_activity == "Wall Paintings")
                    {
                        b_Pamphlets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Hoardings")
                    {
                        b_Magazine += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Posters")
                    {
                        b_Leaflets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Signages")
                    {
                        b_Brochures += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Others")
                    {
                        b_Others += Convert.ToInt32(number);
                    }

                }
                if (activity == "No. of Road Shows/Street Plays conducted")
                {
                    if (sub_activity == "Road Shows")
                    {
                        a_Road_Shows += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Street Plays")
                    {
                        a_Street_Plays += Convert.ToInt32(number);
                    }
                }
                if (activity == "No.of Households covered under Door to Door Campaign")
                {
                    a_household += Convert.ToInt32(number);
                }
                if (activity == "No. of Posts in social Media")
                {
                    if (sub_activity == "Facebook")
                    {
                        c_Facebook += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Twitter")
                    {
                        c_Twitter += Convert.ToInt32(number);
                    }
                    if (sub_activity == "YouTube")
                    {
                        c_YouTube += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Instagram")
                    {
                        c_Instagram += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Others")
                    {
                        c_Others += Convert.ToInt32(number);
                    }

                }
                if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                {
                    if (sub_activity == "Exhibitions")
                    {
                        a_Exhibitions += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Seminars")
                    {
                        a_Seminars += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Fair ")
                    {
                        a_Fair += Convert.ToInt32(number);
                    }
                }
                if (activity == "Others")
                {
                    d_Others += Convert.ToInt32(number);

                }
            }

            // Aggregate data from iecCum
            foreach (var item in iecCum.Where(x => Convert.ToInt32(x.order_by_month) < mmm))
            {
                var activity = item.activity;
                var sub_activity = item.sub_activity;
                var number = item.number;
                if (activity == "No. of Awareness meetings conducted")
                {
                    b_Awareness_meetings += Convert.ToInt32(number);
                }
                if (activity == "No. of IEC material prepared")
                {
                    if (sub_activity == "Pamphlets")
                    {
                        ba_Pamphlets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Magazine")
                    {
                        ba_Magazine += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Leaflets")
                    {
                        ba_Leaflets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Brochures")
                    {
                        ba_Brochures += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Others")
                    {
                        ba_Others += Convert.ToInt32(number);
                    }

                }
                if (activity == "No. of IEC material displayed")
                {
                    if (sub_activity == "Wall Paintings")
                    {
                        bb_Pamphlets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Hoardings")
                    {
                        bb_Magazine += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Posters")
                    {
                        bb_Leaflets += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Signages")
                    {
                        bb_Brochures += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Others")
                    {
                        bb_Others += Convert.ToInt32(number);
                    }

                }
                if (activity == "No. of Road Shows/Street Plays conducted")
                {
                    if (sub_activity == "Road Shows")
                    {
                        b_Road_Shows += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Street Plays")
                    {
                        b_Street_Plays += Convert.ToInt32(number);
                    }

                }
                if (activity == "No.of Households covered under Door to Door Campaign")
                {
                    b_household += Convert.ToInt32(number);
                }
                if (activity == "No. of Posts in social Media")
                {
                    if (sub_activity == "Facebook")
                    {
                        bc_Facebook += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Twitter")
                    {
                        bc_Twitter += Convert.ToInt32(number);
                    }
                    if (sub_activity == "YouTube")
                    {
                        bc_YouTube += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Instagram")
                    {
                        bc_Instagram += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Others")
                    {
                        bc_Others += Convert.ToInt32(number);
                    }

                }
                if (activity == "No.of Exhibitions/ Seminars / Fair Conducted")
                {
                    if (sub_activity == "Exhibitions")
                    {
                        b_Exhibitions += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Seminars")
                    {
                        b_Seminars += Convert.ToInt32(number);
                    }
                    if (sub_activity == "Fair ")
                    {
                        b_Fair += Convert.ToInt32(number);
                    }
                }
                if (activity == "Others")
                {
                    bd_Others += Convert.ToInt32(number);

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
        public ActionResult totalgp(string StateName, string distName, string blockName, string gpname, string Year, int Month)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    var State = StateName;
                    var Dist = distName;
                    var Block = blockName;
                    var Gram = gpname;
                    var month = Month;
                    if (Year == "All")
                    {
                        Year = "0";
                    }
                    if (Month == 13)
                    {
                        Month = 0;
                    }
                    List<vw_iec_report> data = new List<vw_iec_report>();
                    if (State == "All")
                    {
                        if (Year != "0" && Year != "" && Year != null && Month != 0)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.year == Year && x.month_number == Month).OrderBy(c => c.id).ToList();
                        }
                        else if (Year != "0" && Year != "" && Year != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.year == Year).OrderBy(c => c.id).ToList();
                        }
                        else
                        {
                            data = ABE.obj_vw_iec_report.OrderBy(c => c.id).ToList();
                        }
                    }
                    else
                    {
                        if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && Month != 0)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month_number == Month).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && Month != 0)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year && x.month_number == Month).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && Month != 0)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year && x.month_number == Month).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != 0)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.year == Year && x.month_number == Month).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.year == Year).OrderBy(c => c.id).ToList();
                        }
                        else if (State != "0" && State != "" && State != null)
                        {
                            data = ABE.obj_vw_iec_report.Where(x => x.state_name == State).OrderBy(c => c.id).ToList();
                        }
                    }
                    if (data.Count != 0)
                    {
                       
                        var exetotal = data.Count;

                        var Totalpages = Math.Ceiling(data.Count / 200.0);
                        var jsonresult = Json(exetotal + "," + Totalpages, JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                    else
                    {

                        var jsonresult = Json(0 + "," + 0 , JsonRequestBehavior.AllowGet);
                        jsonresult.MaxJsonLength = int.MaxValue;
                        return jsonresult;
                    }
                }
                catch (Exception Ex)
                {
                    return Json(Ex.Message, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public ActionResult gram_report(string StateName, string distName, string blockName, string gpname, string Year, int Month , int PageNumber)
        {
            try
            {
                var State = StateName;
                var Dist = distName;
                var Block = blockName;
                var Gram = gpname;
                var month = Month;
                if (Year == "All")
                {
                    Year = "0";
                }
                if (Month == 13)
                {
                    Month = 0;
                }
                int recordsToSkip = (PageNumber - 1) * 200;
                List<vw_iec_report> data = new List<vw_iec_report>();
                if (State == "All")
                {
                    if (Year != "0" && Year != "" && Year != null && Month != 0)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.year == Year && x.month_number == Month).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.year == Year).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else
                    {
                        data = ABE.obj_vw_iec_report.OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && Month != 0)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month_number == Month).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && Month != 0)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year && x.month_number == Month).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && Month != 0)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year && x.month_number == Month).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && Month != 0)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.year == Year && x.month_number == Month).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.year == Year).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State).OrderBy(c => c.id).Skip(recordsToSkip).Take(200).ToList();
                    }
                }

                var jsonResult = Json(data, JsonRequestBehavior.AllowGet);
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
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.order_by_month == Month /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                    }

                    else if (Year != "All" && Month == 13 && quarter == 0 && halfyear == 0)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month != 13 && quarter == 0 && halfyear == 0)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.order_by_month == Month /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = monthh + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                    }
                    else if (Year == "All" && Month == 13 && quarter == 0 && halfyear == 0)
                    {
                        iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                        int monthh = Convert.ToInt32(Month);
                        mmm = 12 + 1;
                        iec_cum = ABE.obj_abhy_IEC.Where(x => x.state_name == state /*&& x.Nodal_officer == "State Level Nodal Officer"*/ && x.approve_status == "Approved").ToList();
                    }
                    else if (Year != "All" && Month == 0 && quarter != 0 && halfyear == 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.year == Year
                         //&& x.Nodal_officer == "State Level Nodal Officer"
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
                         //&& x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         ).ToList();
                    }

                    else if (Year == "All" && Month == 0 && quarter != 0 && halfyear == 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         //&& x.Nodal_officer == "State Level Nodal Officer"
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
                         //&& x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         ).ToList();

                    }

                    else if (Year != "All" && Month == 0 && quarter == 0 && halfyear != 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                .Where(x => x.state_name == state
                         && x.year == Year
                         //&& x.Nodal_officer == "State Level Nodal Officer"
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
                         //&& x.Nodal_officer == "State Level Nodal Officer"
                         && x.approve_status == "Approved"
                         ).ToList();


                    }

                    else if (Year == "All" && Month == 0 && quarter == 0 && halfyear != 0)
                    {
                        //iec_achive = ABE.obj_abhy_IEC.Where(x => x.state_name == state && x.year == Year && x.Nodal_officer == "State Level Nodal Officer" && x.approve_status == "Approved").ToList();

                        iec_achive = ABE.obj_abhy_IEC
                        .Where(x => x.state_name == state
                //         && x.Nodal_officer == "State Level Nodal Officer"
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
                         //&& x.Nodal_officer == "State Level Nodal Officer"
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

        public ActionResult demandside_excel_phase1(string state1, string district1, string block01, string gp1, string year1, int month1)
        {
            try
            {
                var State = state1;
                var Dist = district1;
                var Block = block01;
                var Gram = gp1;
                var Year = year1;
                if (Year == "All")
                {
                    Year = "0";
                }
                if (month1 == 13)
                {
                    month1 = 0;
                }
                List<vw_iec_report> data = new List<vw_iec_report>();
                if (State == "All")
                {
                    if (Year != "0" && Year != "" && Year != null && month1 != 0)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.year == Year && x.month_number == month1).OrderBy(c => c.id).ToList();
                    }
                   else if (Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.year == Year).OrderBy(c => c.id).ToList();
                    }
                    else
                    {
                        data = ABE.obj_vw_iec_report.OrderBy(c => c.id).ToList();
                    }
                }
                else
                {
                    if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null && month1 != 0 )
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year && x.month_number == month1).OrderBy(c => c.id).ToList();
                    } 
                   else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram && x.year == Year).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Gram != "0" && Gram != "" && Gram != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.gpname == Gram).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null && month1 != 0 )
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year && x.month_number == month1).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block && x.year == Year).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Block != "0" && Block != "" && Block != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.block_name == Block).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null && month1 != 0  )
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year && x.month_number == month1).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist && x.year == Year).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Dist != "0" && Dist != "" && Dist != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.district_name == Dist).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null && month1 != 0 )
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.year == Year && x.month_number == month1).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null && Year != "0" && Year != "" && Year != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State && x.year == Year).OrderBy(c => c.id).ToList();
                    }
                    else if (State != "0" && State != "" && State != null)
                    {
                        data = ABE.obj_vw_iec_report.Where(x => x.state_name == State).OrderBy(c => c.id).ToList();
                    }
                }
                

                    using (var workbook = new XLWorkbook())
                {

                    var worksheet = workbook.Worksheets.Add("IEC Report gp");
                    var currentRow = 1;

                    worksheet.Cell(currentRow, 1).Value = "State";
                    worksheet.Cell(currentRow, 2).Value = "District";
                    worksheet.Cell(currentRow, 3).Value = "Block";
                    worksheet.Cell(currentRow, 4).Value = "GramPanchayat";
                    worksheet.Cell(currentRow, 5).Value = "Year";
                    worksheet.Cell(currentRow, 6).Value = "Month";
                    worksheet.Range(currentRow, 7, currentRow, 8).Merge();
                    worksheet.Cell(currentRow, 7).Value = "No. Of Awareness meeting conducted";
                    worksheet.Range(currentRow + 1, 7, currentRow + 1, 8).Merge();
                    worksheet.Cell(currentRow + 1, 7).Value = "Meeting";
                    worksheet.Cell(currentRow + 2, 7).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 8).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow, 9, currentRow, 18).Merge();
                    worksheet.Cell(currentRow, 9).Value = "No. of IEC material prepared";
                    worksheet.Range(currentRow + 1, 9, currentRow + 1, 10).Merge();
                    worksheet.Cell(currentRow + 1, 9).Value = "Pamplets";
                    worksheet.Cell(currentRow + 2, 9).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 10).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 11, currentRow + 1, 12).Merge();
                    worksheet.Cell(currentRow + 1, 11).Value = "Leaflets";
                    worksheet.Cell(currentRow + 2, 11).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 12).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 13, currentRow + 1, 14).Merge();
                    worksheet.Cell(currentRow + 1, 13).Value = "Magazine";
                    worksheet.Cell(currentRow + 2, 13).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 14).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 15, currentRow + 1, 16).Merge();
                    worksheet.Cell(currentRow + 1, 15).Value = "Brochures";
                    worksheet.Cell(currentRow + 2, 15).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 16).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 17, currentRow + 1, 18).Merge();
                    worksheet.Cell(currentRow + 1, 17).Value = "Others";
                    worksheet.Cell(currentRow + 2, 17).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 18).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow, 19, currentRow, 28).Merge();
                    worksheet.Cell(currentRow, 19).Value = "No. of IEC materials displayed";
                    worksheet.Range(currentRow + 1, 19, currentRow + 1, 20).Merge();
                    worksheet.Cell(currentRow + 1, 19).Value = "Hoardings";
                    worksheet.Cell(currentRow + 2, 19).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 20).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 21, currentRow + 1, 22).Merge();
                    worksheet.Cell(currentRow + 1, 21).Value = "Posters";
                    worksheet.Cell(currentRow + 2, 21).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 22).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 23, currentRow + 1, 24).Merge();
                    worksheet.Cell(currentRow + 1, 23).Value = "Wall Painting";
                    worksheet.Cell(currentRow + 2, 23).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 24).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 25, currentRow + 1, 26).Merge();
                    worksheet.Cell(currentRow + 1, 25).Value = "Signages";
                    worksheet.Cell(currentRow + 2, 25).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 26).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 27, currentRow + 1, 28).Merge();
                    worksheet.Cell(currentRow + 1, 27).Value = "Others";
                    worksheet.Cell(currentRow + 2, 27).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 28).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow, 29, currentRow, 31).Merge();
                    worksheet.Cell(currentRow, 29).Value = "No. of Road Shows/Street Plays conducted";
                    worksheet.Range(currentRow + 1, 29, currentRow + 1, 32).Merge();
                    worksheet.Cell(currentRow + 1, 29).Value = "Road Show";
                    worksheet.Cell(currentRow + 2, 29).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 30).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 31, currentRow + 1, 32).Merge();
                    worksheet.Cell(currentRow + 1, 31).Value = "Street Plays";
                    worksheet.Cell(currentRow + 2, 31).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 32).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow, 33, currentRow, 34).Merge();
                    worksheet.Cell(currentRow, 33).Value = "No. of Households covered under Door to Door Campaign";
                    worksheet.Range(currentRow + 1, 33, currentRow + 1, 34).Merge();
                    worksheet.Cell(currentRow + 1, 33).Value = "";
                    worksheet.Cell(currentRow + 2, 33).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 34).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow, 35, currentRow, 44).Merge();
                    worksheet.Cell(currentRow, 35).Value = "No. of Post in Social Media";
                    worksheet.Range(currentRow + 1, 35, currentRow + 1, 36).Merge();
                    worksheet.Cell(currentRow + 1, 35).Value = "Twitter";
                    worksheet.Cell(currentRow + 2, 35).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 36).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 37, currentRow + 1, 38).Merge();
                    worksheet.Cell(currentRow + 1, 37).Value = "Facebook";
                    worksheet.Cell(currentRow + 2, 37).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 38).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 39, currentRow + 1, 40).Merge();
                    worksheet.Cell(currentRow + 1, 39).Value = "Instagram";
                    worksheet.Cell(currentRow + 2, 39).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 40).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 41, currentRow + 1, 42).Merge();
                    worksheet.Cell(currentRow + 1, 41).Value = "Youtube";
                    worksheet.Cell(currentRow + 2, 41).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 42).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 43, currentRow + 1, 44).Merge();
                    worksheet.Cell(currentRow + 1, 43).Value = "Total";
                    worksheet.Cell(currentRow + 2, 43).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 44).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow, 45, currentRow, 50).Merge();
                    worksheet.Cell(currentRow, 45).Value = "No. of Exhibitions/Seminars/Fair Conducted at GP level";
                    worksheet.Range(currentRow + 1, 45, currentRow + 1, 46).Merge();
                    worksheet.Cell(currentRow + 1, 45).Value = "Exhibition";
                    worksheet.Cell(currentRow + 2, 45).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 46).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 47, currentRow + 1, 48).Merge();
                    worksheet.Cell(currentRow + 1, 47).Value = "Seminars";
                    worksheet.Cell(currentRow + 2, 47).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 48).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow + 1, 49, currentRow + 1, 50).Merge();
                    worksheet.Cell(currentRow + 1, 49).Value = "Fair";
                    worksheet.Cell(currentRow + 2, 49).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 50).Value = "Cumulative Achievement";
                    worksheet.Range(currentRow, 51, currentRow, 52).Merge();
                    worksheet.Cell(currentRow, 51).Value = "Others";
                    worksheet.Range(currentRow + 1, 51, currentRow + 1, 52).Merge();
                    worksheet.Cell(currentRow + 1, 51).Value = "";
                    worksheet.Cell(currentRow + 2, 51).Value = "Achievement duirng the month";
                    worksheet.Cell(currentRow + 2, 52).Value = "Cumulative Achievement";





                    for (int col = 1; col <= 52; col++)
                    {
                        worksheet.Cell(currentRow, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    for (int col = 1; col <= 52; col++)
                    {
                        worksheet.Cell(currentRow + 1, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow + 1, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                    for (int col = 1; col <= 52; col++)
                    {
                        worksheet.Cell(currentRow + 2, col).Style.Font.Bold = true;
                        worksheet.Cell(currentRow + 2, col).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }

                   
                    currentRow = 3;

                    if (data.Count != 0)
                    {
                        foreach (var item in data)
                        {
                            currentRow++;
                            worksheet.Cell(currentRow, 1).Value = item.state_name;
                            worksheet.Cell(currentRow, 2).Value = item.district_name;
                            worksheet.Cell(currentRow, 3).Value = item.block_name;
                            worksheet.Cell(currentRow, 4).Value = item.gpname;
                            worksheet.Cell(currentRow, 5).Value = item.year;
                            worksheet.Cell(currentRow, 6).Value = item.month;
                            if (month1 == 0) {
                                worksheet.Cell(currentRow, 7).Value = "NA";
                                worksheet.Cell(currentRow, 8).Value = item.awareness_meetings_cum;
                                worksheet.Cell(currentRow, 9).Value = "NA";
                                worksheet.Cell(currentRow, 10).Value = item.pamphlets_cum;
                                worksheet.Cell(currentRow, 11).Value = "NA";
                                worksheet.Cell(currentRow, 12).Value = item.leaflets_cum;
                                worksheet.Cell(currentRow, 13).Value = "NA";
                                worksheet.Cell(currentRow, 14).Value = item.magazine_cum;
                                worksheet.Cell(currentRow, 15).Value = "NA";
                                worksheet.Cell(currentRow, 16).Value = item.brochures_cum;
                                worksheet.Cell(currentRow, 17).Value = "NA";
                                worksheet.Cell(currentRow, 18).Value = item.other_iec_mat_cum;
                                worksheet.Cell(currentRow, 19).Value = "NA";
                                worksheet.Cell(currentRow, 20).Value = item.wall_paintings_cum;
                                worksheet.Cell(currentRow, 21).Value = "NA";
                                worksheet.Cell(currentRow, 22).Value = item.hoardings_cum;
                                worksheet.Cell(currentRow, 23).Value = "NA";
                                worksheet.Cell(currentRow, 24).Value = item.posters_cum;
                                worksheet.Cell(currentRow, 25).Value = "NA";
                                worksheet.Cell(currentRow, 26).Value = item.signages_cum;
                                worksheet.Cell(currentRow, 27).Value = "NA";
                                worksheet.Cell(currentRow, 28).Value = item.iec_disp_others_cum;
                                worksheet.Cell(currentRow, 29).Value = "NA";
                                worksheet.Cell(currentRow, 30).Value = item.road_shows_cum;
                                worksheet.Cell(currentRow, 31).Value = "NA";
                                worksheet.Cell(currentRow, 32).Value = item.street_plays_cum;
                                worksheet.Cell(currentRow, 33).Value = "NA";
                                worksheet.Cell(currentRow, 34).Value = item.households_cum;
                                worksheet.Cell(currentRow, 35).Value = "NA";
                                worksheet.Cell(currentRow, 36).Value = item.facebook_cum;
                                worksheet.Cell(currentRow, 37).Value = "NA";
                                worksheet.Cell(currentRow, 38).Value = item.twitter_cum;
                                worksheet.Cell(currentRow, 39).Value = "NA";
                                worksheet.Cell(currentRow, 40).Value = item.youtube_cum;
                                worksheet.Cell(currentRow, 41).Value = "NA";
                                worksheet.Cell(currentRow, 42).Value = item.instagram_cum;
                                worksheet.Cell(currentRow, 43).Value = "NA";
                                worksheet.Cell(currentRow, 44).Value = item.socialmedia_others_cum;
                                worksheet.Cell(currentRow, 45).Value = "NA";
                                worksheet.Cell(currentRow, 46).Value = item.exhibitions_cum;
                                worksheet.Cell(currentRow, 47).Value = "NA";
                                worksheet.Cell(currentRow, 48).Value = item.seminars_cum;
                                worksheet.Cell(currentRow, 49).Value = "NA";
                                worksheet.Cell(currentRow, 50).Value = item.fair_cum;
                                worksheet.Cell(currentRow, 51).Value = "NA";
                                worksheet.Cell(currentRow, 52).Value = item.others_cum;
                            }
                            else
                            {
                                worksheet.Cell(currentRow, 7).Value = item.awareness_meetings_ach;
                                worksheet.Cell(currentRow, 8).Value = item.awareness_meetings_cum;
                                worksheet.Cell(currentRow, 9).Value = item.pamphlets_ach;
                                worksheet.Cell(currentRow, 10).Value = item.pamphlets_cum;
                                worksheet.Cell(currentRow, 11).Value = item.leaflets_ach;
                                worksheet.Cell(currentRow, 12).Value = item.leaflets_cum;
                                worksheet.Cell(currentRow, 13).Value = item.magazine_ach;
                                worksheet.Cell(currentRow, 14).Value = item.magazine_cum;
                                worksheet.Cell(currentRow, 15).Value = item.brochures_ach;
                                worksheet.Cell(currentRow, 16).Value = item.brochures_cum;
                                worksheet.Cell(currentRow, 17).Value = item.other_iec_mat_ach;
                                worksheet.Cell(currentRow, 18).Value = item.other_iec_mat_cum;
                                worksheet.Cell(currentRow, 19).Value = item.wall_paintings_ach;
                                worksheet.Cell(currentRow, 20).Value = item.wall_paintings_cum;
                                worksheet.Cell(currentRow, 21).Value = item.hoardings_ach;
                                worksheet.Cell(currentRow, 22).Value = item.hoardings_cum;
                                worksheet.Cell(currentRow, 23).Value = item.posters_ach;
                                worksheet.Cell(currentRow, 24).Value = item.posters_cum;
                                worksheet.Cell(currentRow, 25).Value = item.signages_ach;
                                worksheet.Cell(currentRow, 26).Value = item.signages_cum;
                                worksheet.Cell(currentRow, 27).Value = item.iec_disp_others_ach;
                                worksheet.Cell(currentRow, 28).Value = item.iec_disp_others_cum;
                                worksheet.Cell(currentRow, 29).Value = item.road_shows_ach;
                                worksheet.Cell(currentRow, 30).Value = item.road_shows_cum;
                                worksheet.Cell(currentRow, 31).Value = item.street_plays_ach;
                                worksheet.Cell(currentRow, 32).Value = item.street_plays_cum;
                                worksheet.Cell(currentRow, 33).Value = item.households_ach;
                                worksheet.Cell(currentRow, 34).Value = item.households_cum;
                                worksheet.Cell(currentRow, 35).Value = item.facebook_ach;
                                worksheet.Cell(currentRow, 36).Value = item.facebook_cum;
                                worksheet.Cell(currentRow, 37).Value = item.twitter_ach;
                                worksheet.Cell(currentRow, 38).Value = item.twitter_cum;
                                worksheet.Cell(currentRow, 39).Value = item.youtube_ach;
                                worksheet.Cell(currentRow, 40).Value = item.youtube_cum;
                                worksheet.Cell(currentRow, 41).Value = item.instagram_ach;
                                worksheet.Cell(currentRow, 42).Value = item.instagram_cum;
                                worksheet.Cell(currentRow, 43).Value = item.socialmedia_others_ach;
                                worksheet.Cell(currentRow, 44).Value = item.socialmedia_others_cum;
                                worksheet.Cell(currentRow, 45).Value = item.exhibitions_ach;
                                worksheet.Cell(currentRow, 46).Value = item.exhibitions_cum;
                                worksheet.Cell(currentRow, 47).Value = item.seminars_ach;
                                worksheet.Cell(currentRow, 48).Value = item.seminars_cum;
                                worksheet.Cell(currentRow, 49).Value = item.fair_ach;
                                worksheet.Cell(currentRow, 50).Value = item.fair_cum;
                                worksheet.Cell(currentRow, 51).Value = item.others_ach;
                                worksheet.Cell(currentRow, 52).Value = item.others_cum;
                            }
                        }
                    }


                    else
                    {
                        currentRow++;
                        worksheet.Cell(currentRow, 1).Value = "";
                        worksheet.Cell(currentRow, 2).Value = "";
                        worksheet.Cell(currentRow, 3).Value = "";
                        worksheet.Cell(currentRow, 4).Value = "";
                        worksheet.Cell(currentRow, 5).Value = "";
                        worksheet.Cell(currentRow, 6).Value = "";
                        worksheet.Cell(currentRow, 7).Value = "No Data";
                        worksheet.Cell(currentRow, 8).Value = "";
                        worksheet.Cell(currentRow, 9).Value = "";
                        worksheet.Cell(currentRow, 10).Value = "";
                        worksheet.Cell(currentRow, 11).Value = "";
                        worksheet.Cell(currentRow, 12).Value = "";

                    }

                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        var content = stream.ToArray();

                        var exeState = state1;
                        var exeDist = district1;
                        var exeBlock = block01;
                        var exeGram = gp1;
                        var xls = "csv";

                        if (exeDist == "0")
                        {
                            exeDist = "";
                        }
                        else
                        {
                            var tt = "-";
                            exeDist = tt + exeDist;
                        }
                        if (exeBlock == "0")
                        {
                            exeBlock = "";
                        }
                        else
                        {
                            var tt = "-";
                            exeBlock = tt + exeBlock;
                        }
                        if (exeGram == "0")
                        {
                            exeGram = "";
                        }
                        else
                        {
                            var tt = "-";
                            exeGram = tt + exeGram;
                        }



                        var aa = "IEC report" + '-' + exeState + exeDist + exeBlock + exeGram + '.' + xls;
                        return File(
                            content,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            aa);
                    }
                }
            }
            catch (Exception Ex)
            {
                return Json(Ex.Message, JsonRequestBehavior.AllowGet);
            }
        }


    }
}