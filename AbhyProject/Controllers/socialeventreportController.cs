using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class socialeventreportController : Controller
    {
        AtaljalEntity AJE = new AtaljalEntity();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult report_socialevent()
        {
            return View();
        }
        public ActionResult training_report()
        {
            return View();
        }
        public ActionResult main_report()
        {
            return View();
        }

        [HttpPost]
        public ActionResult all_report(string StateName, string Year, int Month)
        {
            try
            {
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
                    if (Month == 0) {
                        string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };

                        List<social_report_class> all_data = new List<social_report_class>();

                        for (int i = 0; i < states.Length; i++)
                        {
                            social_report_class data = new social_report_class();

                            string state = states[i];
                            data.statename = state;
                            var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == state && x.FinancialYear == Year).ToList();
                            int mm = 12 + 1;
                            var socialtotal_year = AJE.obj_vw_socialmonitoring.Where(x => x.state == state && x.FinancialYear == Year).ToList();

                            int ma = 0;
                            int fe = 0;
                            int tran = 0;
                            int meeting_a = 0;
                            int wsp_a = 0;
                            int oth_a = 0;
                            int train_a = 0;

                            for (int k = 0; k < socialtotal.Count; k++)
                            {
                                var ama = socialtotal[k].event1;
                                if (ama == "Training")
                                {
                                    train_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "WSP related Meeting")
                                {
                                    wsp_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Awareness Meeting")
                                {
                                    meeting_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Others")
                                {
                                    oth_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }

                            }
                            int meeting_c = 0;
                            int wsp_c = 0;
                            int oth_c = 0;
                            int train_c = 0;
                            //for (int j = 0; j < socialtotal_year.Count; j++)
                            //{
                            //    int monnn = Convert.ToInt32(socialtotal_year[j].FinancialMonth);
                            //    if (monnn < mm)
                            //    {
                            //        var ama = socialtotal_year[j].event1;
                            //        if (ama == "WSP related Meeting")
                            //        {
                            //            wsp_c += 1;
                            //        }
                            //        if (ama == "Awareness Meeting")
                            //        {
                            //            meeting_c += 1;
                            //        }
                            //        if (ama == "Others")
                            //        {

                            //            oth_c += 1;
                            //        }
                            //    }
                            //}

                            int tot = ma + fe + tran;
                            double originalValue = Convert.ToDouble(fe);
                            double totalValue = Convert.ToDouble(tot);
                            double percentage = (originalValue / totalValue) * 100;
                            data.percent_female = percentage;
                            data.male = ma;
                            data.female = fe;
                            data.trangender = tran;
                            data.total = tot;
                            data.Awareness_meetings_a = meeting_a;
                            data.WSP_Related_meetings_a = wsp_a;
                            data.other_a = oth_a;
                            data.Awareness_meetings_c = meeting_a;
                            data.WSP_Related_meetings_c = wsp_a;
                            data.other_c = oth_a;
                            data.train_a = train_a;
                            data.train_c = train_a;

                            int tot_a = meeting_a + wsp_a + oth_a + train_a;
                            int tot_b = meeting_c + wsp_c + oth_c + train_c;
                            data.total_a = tot_a;
                            data.total_c = tot_a;
                            data.year = Year;
                            var month_num = Get_Month_Number(Month);
                            var mon = "All Months";
                            data.month = mon;



                            all_data.Add(data);
                        }


                        var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;
                        return jsonResult;
                    }
                   else
                    {
                        string[] states = { "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9" };

                        List<social_report_class> all_data = new List<social_report_class>();

                        for (int i = 0; i < states.Length; i++)
                        {
                            social_report_class data = new social_report_class();

                            string state = states[i];
                            data.statename = state;
                            var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == state && x.FinancialYear == Year && x.FinancialMonth == Month).ToList();
                            int mm = Convert.ToInt32(Month) + 1;
                            var socialtotal_year = AJE.obj_vw_socialmonitoring.Where(x => x.state == state && x.FinancialYear == Year).ToList();

                            int ma = 0;
                            int fe = 0;
                            int tran = 0;
                            int meeting_a = 0;
                            int wsp_a = 0;
                            int oth_a = 0;
                            int train_a = 0;
                            for (int k = 0; k < socialtotal.Count; k++)
                            {
                                var ama = socialtotal[k].event1;
                                if (ama == "Training")
                                {
                                    train_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "WSP related Meeting")
                                {
                                    wsp_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Awareness Meeting")
                                {
                                    meeting_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Others")
                                {
                                    oth_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }

                            }
                            int meeting_c = 0;
                            int wsp_c = 0;
                            int oth_c = 0;
                            int train_c = 0;
                            for (int j = 0; j < socialtotal_year.Count; j++)
                            {
                                int monnn = Convert.ToInt32(socialtotal_year[j].FinancialMonth);
                                if (monnn < mm)
                                {
                                    var ama = socialtotal_year[j].event1;
                                    if (ama == "Training")
                                    {
                                        train_c += 1;
                                    }
                                    if (ama == "WSP related Meeting")
                                    {
                                        wsp_c += 1;
                                    }
                                    if (ama == "Awareness Meeting")
                                    {
                                        meeting_c += 1;
                                    }
                                    if (ama == "Others")
                                    {

                                        oth_c += 1;
                                    }
                                }
                            }

                            int tot = ma + fe + tran;
                            double originalValue = Convert.ToDouble(fe);
                            double totalValue = Convert.ToDouble(tot);
                            double percentage = (originalValue / totalValue) * 100;
                            data.percent_female = percentage;
                            data.male = ma;
                            data.female = fe;
                            data.trangender = tran;
                            data.total = tot;
                            data.Awareness_meetings_a = meeting_a;
                            data.WSP_Related_meetings_a = wsp_a;
                            data.other_a = oth_a;
                            data.train_a = train_a;

                            data.Awareness_meetings_c = meeting_c;
                            data.WSP_Related_meetings_c = wsp_c;
                            data.other_c = oth_c;
                            data.train_c = train_c;

                            int tot_a = meeting_a + wsp_a + oth_a + train_a;
                            int tot_b = meeting_c + wsp_c + oth_c + train_c;
                            data.total_a = tot_a;
                            data.total_c = tot_b;
                            data.year = Year;
                            var month_num = Get_Month_Number(Month);
                            data.month = month_num;



                            all_data.Add(data);
                        }


                        var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;
                        return jsonResult;
                    }
                }
                else
                {
                    if (Month == 0)
                    {
                        string[] states = { State };

                        List<social_report_class> all_data = new List<social_report_class>();

                        for (int i = 0; i < states.Length; i++)
                        {
                            social_report_class data = new social_report_class();

                            string state = states[i];
                            data.statename = state;
                            var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == state && x.FinancialYear == Year).ToList();

                            int ma = 0;
                            int fe = 0;
                            int tran = 0;
                            int meeting_a = 0;
                            int wsp_a = 0;
                            int oth_a = 0;
                            int train_a = 0;
                            for (int k = 0; k < socialtotal.Count; k++)
                            {
                                var ama = socialtotal[k].event1;
                                if (ama == "Training")
                                {
                                    train_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "WSP related Meeting")
                                {
                                    wsp_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Awareness Meeting")
                                {
                                    meeting_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Others")
                                {
                                    oth_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }

                            }
                            int meeting_c = 0;
                            int wsp_c = 0;
                            int oth_c = 0;
                            int train_c = 0;

                            int tot = ma + fe + tran;
                            double originalValue = Convert.ToDouble(fe);
                            double totalValue = Convert.ToDouble(tot);
                            double percentage = (originalValue / totalValue) * 100;
                            data.percent_female = percentage;
                            data.male = ma;
                            data.female = fe;
                            data.trangender = tran;
                            data.total = tot;
                            data.Awareness_meetings_a = meeting_a;
                            data.WSP_Related_meetings_a = wsp_a;
                            data.other_a = oth_a;
                            data.train_a = train_a;
                            data.Awareness_meetings_c = meeting_a;
                            data.WSP_Related_meetings_c = wsp_a;
                            data.other_c = oth_a;
                            data.train_c = train_a;

                            int tot_a = meeting_a + wsp_a + oth_a + train_a;
                            int tot_b = meeting_c + wsp_c + oth_c + train_c;
                            data.total_a = tot_a;
                            data.total_c = tot_a;
                            data.year = Year;
                            var month_num = Get_Month_Number(Month);
                            var mon = "All Months";
                            data.month = mon;

                            all_data.Add(data);
                        }


                        var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;
                        return jsonResult;
                    }
                    else
                    {
                        string[] states = { State };

                        List<social_report_class> all_data = new List<social_report_class>();

                        for (int i = 0; i < states.Length; i++)
                        {
                            social_report_class data = new social_report_class();

                            string state = states[i];
                            data.statename = state;
                            var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == state && x.FinancialYear == Year && x.FinancialMonth == Month).ToList();
                            int mm = Convert.ToInt32(Month) + 1;
                            var socialtotal_year = AJE.obj_vw_socialmonitoring.Where(x => x.state == state && x.FinancialYear == Year).ToList();

                            int ma = 0;
                            int fe = 0;
                            int tran = 0;
                            int meeting_a = 0;
                            int wsp_a = 0;
                            int oth_a = 0;
                            int train_a = 0;
                            for (int k = 0; k < socialtotal.Count; k++)
                            {
                                var ama = socialtotal[k].event1;
                                if (ama == "Training")
                                {
                                    train_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "WSP related Meeting")
                                {
                                    wsp_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Awareness Meeting")
                                {
                                    meeting_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }
                                if (ama == "Others")
                                {
                                    oth_a += 1;
                                    var aa = socialtotal[k].male;
                                    if (aa != null && aa != "")
                                    {
                                        ma += Convert.ToInt32(aa);
                                    }
                                    var bb = socialtotal[k].female;
                                    if (bb != null && bb != "")
                                    {
                                        fe += Convert.ToInt32(bb);
                                    }
                                    var cc = socialtotal[k].others;
                                    if (cc != null && cc != "" && cc != " ")
                                    {
                                        tran += Convert.ToInt32(cc);
                                    }
                                }

                            }
                            int meeting_c = 0;
                            int wsp_c = 0;
                            int oth_c = 0;
                            int train_c = 0;
                            for (int j = 0; j < socialtotal_year.Count; j++)
                            {
                                int monnn = Convert.ToInt32(socialtotal_year[j].FinancialMonth);
                                if (monnn < mm)
                                {
                                    var ama = socialtotal_year[j].event1;
                                    if (ama == "Training")
                                    {
                                        train_c += 1;
                                    }if (ama == "WSP related Meeting")
                                    {
                                        wsp_c += 1;
                                    }
                                    if (ama == "Awareness Meeting")
                                    {
                                        meeting_c += 1;
                                    }
                                    if (ama == "Others")
                                    {
                                        oth_c += 1;
                                    }
                                }
                            }

                            int tot = ma + fe + tran;
                            double originalValue = Convert.ToDouble(fe);
                            double totalValue = Convert.ToDouble(tot);
                            double percentage = (originalValue / totalValue) * 100;
                            data.percent_female = percentage;
                            data.male = ma;
                            data.female = fe;
                            data.trangender = tran;
                            data.total = tot;
                            data.Awareness_meetings_a = meeting_a;
                            data.WSP_Related_meetings_a = wsp_a;
                            data.other_a = oth_a;
                            data.train_a = train_a;
                            data.Awareness_meetings_c = meeting_c;
                            data.WSP_Related_meetings_c = wsp_c;
                            data.other_c = oth_c;
                            data.train_c = train_c;

                            int tot_a = meeting_a + wsp_a + oth_a+ train_a;
                            int tot_b = meeting_c + wsp_c + oth_c+ train_c;
                            data.total_a = tot_a;
                            data.total_c = tot_b;
                            data.year = Year;
                            var month_num = Get_Month_Number(Month);
                            data.month = month_num;

                            all_data.Add(data);
                        }


                        var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                        jsonResult.MaxJsonLength = int.MaxValue;
                        return jsonResult;
                    }
                }
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult dist_report(string StateName, string distName, string Year, int Month)
        {
            try
            {
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
                if (Month == 0) {
                    string[] states = { Distric };

                    List<social_report_class> all_data = new List<social_report_class>();

                    for (int i = 0; i < states.Length; i++)
                    {
                        social_report_class data = new social_report_class();

                        string state = states[i];
                        data.statename = State;
                        data.districtname = Distric;
                        var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.FinancialYear == Year).ToList();

                        int ma = 0;
                        int fe = 0;
                        int tran = 0;
                        int meeting_a = 0;
                        int wsp_a = 0;
                        int oth_a = 0;
                        int train_a = 0;
                        for (int k = 0; k < socialtotal.Count; k++)
                        {
                            var ama = socialtotal[k].event1;
                            if (ama == "Training")
                            {
                                train_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "WSP related Meeting")
                            {
                                wsp_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Awareness Meeting")
                            {
                                meeting_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Others")
                            {
                                oth_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }

                        }
                        int meeting_c = 0;
                        int wsp_c = 0;
                        int oth_c = 0;
                        int train_c = 0;

                        int tot = ma + fe + tran;
                        double originalValue = Convert.ToDouble(fe);
                        double totalValue = Convert.ToDouble(tot);
                        double percentage = (originalValue / totalValue) * 100;
                        data.percent_female = percentage;
                        data.male = ma;
                        data.female = fe;
                        data.trangender = tran;
                        data.total = tot;
                        data.Awareness_meetings_a = meeting_a;
                        data.WSP_Related_meetings_a = wsp_a;
                        data.other_a = oth_a;
                        data.Awareness_meetings_c = meeting_a;
                        data.WSP_Related_meetings_c = wsp_a;
                        data.other_c = oth_a;
                        data.train_a = train_a;
                        data.train_c = train_a;

                        int tot_a = meeting_a + wsp_a + oth_a+ train_a;
                        int tot_b = meeting_c + wsp_c + oth_c+ train_c;
                        data.total_a = tot_a;
                        data.total_c = tot_a;
                        data.year = Year;
                        var month_num = Get_Month_Number(Month);
                        var mmmm = "All Month";
                        data.month = mmmm;
                        all_data.Add(data);
                    }

                    var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;

                }
                else
                {
                    string[] states = { Distric };

                    List<social_report_class> all_data = new List<social_report_class>();

                    for (int i = 0; i < states.Length; i++)
                    {
                        social_report_class data = new social_report_class();

                        string state = states[i];
                        data.statename = State;
                        data.districtname = Distric;
                        var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.FinancialYear == Year && x.FinancialMonth == Month).ToList();
                        int mm = Convert.ToInt32(Month) + 1;
                        var socialtotal_year = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.FinancialYear == Year).ToList();

                        int ma = 0;
                        int fe = 0;
                        int tran = 0;
                        int meeting_a = 0;
                        int wsp_a = 0;
                        int oth_a = 0;
                        int train_a = 0;
                        for (int k = 0; k < socialtotal.Count; k++)
                        {
                            var ama = socialtotal[k].event1;
                            if (ama == "Training")
                            {
                                train_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "WSP related Meeting")
                            {
                                wsp_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Awareness Meeting")
                            {
                                meeting_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Others")
                            {
                                oth_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }

                        }
                        int meeting_c = 0;
                        int wsp_c = 0;
                        int oth_c = 0;
                        int train_c = 0;
                        for (int j = 0; j < socialtotal_year.Count; j++)
                        {
                            int monnn = Convert.ToInt32(socialtotal_year[j].FinancialMonth);
                            if (monnn < mm)
                            {
                                var ama = socialtotal_year[j].event1;
                                if (ama == "Training")
                                {
                                    train_c += 1;
                                } 
                                if (ama == "WSP related Meeting")
                                {
                                    wsp_c += 1;
                                }
                                if (ama == "Awareness Meeting")
                                {
                                    meeting_c += 1;
                                }
                                if (ama == "Others")
                                {
                                    oth_c += 1;
                                }
                            }
                        }

                        int tot = ma + fe + tran;
                        double originalValue = Convert.ToDouble(fe);
                        double totalValue = Convert.ToDouble(tot);
                        double percentage = (originalValue / totalValue) * 100;
                        data.percent_female = percentage;
                        data.male = ma;
                        data.female = fe;
                        data.trangender = tran;
                        data.total = tot;
                        data.Awareness_meetings_a = meeting_a;
                        data.WSP_Related_meetings_a = wsp_a;
                        data.other_a = oth_a;
                        data.Awareness_meetings_c = meeting_c;
                        data.WSP_Related_meetings_c = wsp_c;
                        data.other_c = oth_c;
                        data.train_a = train_a;
                        data.train_c = train_c;

                        int tot_a = meeting_a + wsp_a + oth_a + train_a;
                        int tot_b = meeting_c + wsp_c + oth_c + train_c;
                        data.total_a = tot_a;
                        data.total_c = tot_b;
                        data.year = Year;
                        var month_num = Get_Month_Number(Month);
                        data.month = month_num;
                        all_data.Add(data);
                    }

                    var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
                }
            }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult block_report(string StateName, string distName, string blockName, string Year, int Month)
        {
            try
            {
                var off = Session["Officer"].ToString();
                var State = "";
                var Distric = "";
                var block = "";
                if (off == "State Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    State = ss;
                    Distric = distName;
                    block = blockName;
                }
                else if (off == "District Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    var dd = Session["gdist"].ToString();
                    State = ss;
                    Distric = dd;
                    block = blockName;
                }
                else if (off == "Block Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    var dd = Session["gdist"].ToString();
                    var bb = Session["gblock"].ToString();
                    State = ss;
                    Distric = dd;
                    block = bb;
                }
                else if (off == "Admin" || off == "National Level Nodal Officer")
                {
                    State = StateName;
                    Distric = distName;
                    block = blockName;
                }
                if (Month == 0) {
                string[] states = { block };

                List<social_report_class> all_data = new List<social_report_class>();

                for (int i = 0; i < states.Length; i++)
                {
                    social_report_class data = new social_report_class();

                    string state = states[i];
                    data.statename = State;
                    data.districtname = Distric;
                    data.blockname = block;
                    var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.block == block && x.FinancialYear == Year).ToList();

                    int ma = 0;
                    int fe = 0;
                    int tran = 0;
                    int meeting_a = 0;
                    int wsp_a = 0;
                    int oth_a = 0;
                    int train_a = 0;
                    for (int k = 0; k < socialtotal.Count; k++)
                    {
                        var ama = socialtotal[k].event1;
                            if (ama == "Training")
                            {
                                train_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "WSP related Meeting")
                        {
                            wsp_a += 1;
                            var aa = socialtotal[k].male;
                            if (aa != null && aa != "")
                            {
                                ma += Convert.ToInt32(aa);
                            }
                            var bb = socialtotal[k].female;
                            if (bb != null && bb != "")
                            {
                                fe += Convert.ToInt32(bb);
                            }
                            var cc = socialtotal[k].others;
                            if (cc != null && cc != "" && cc != " ")
                            {
                                tran += Convert.ToInt32(cc);
                            }
                        }
                        if (ama == "Awareness Meeting")
                        {
                            meeting_a += 1;
                            var aa = socialtotal[k].male;
                            if (aa != null && aa != "")
                            {
                                ma += Convert.ToInt32(aa);
                            }
                            var bb = socialtotal[k].female;
                            if (bb != null && bb != "")
                            {
                                fe += Convert.ToInt32(bb);
                            }
                            var cc = socialtotal[k].others;
                            if (cc != null && cc != "" && cc != " ")
                            {
                                tran += Convert.ToInt32(cc);
                            }
                        }
                        if (ama == "Others")
                        {
                            oth_a += 1;
                            var aa = socialtotal[k].male;
                            if (aa != null && aa != "")
                            {
                                ma += Convert.ToInt32(aa);
                            }
                            var bb = socialtotal[k].female;
                            if (bb != null && bb != "")
                            {
                                fe += Convert.ToInt32(bb);
                            }
                            var cc = socialtotal[k].others;
                            if (cc != null && cc != "" && cc != " ")
                            {
                                tran += Convert.ToInt32(cc);
                            }
                        }

                    }
                    int meeting_c = 0;
                    int wsp_c = 0;
                    int oth_c = 0;
                    int train_c = 0;

                    int tot = ma + fe + tran;
                    double originalValue = Convert.ToDouble(fe);
                    double totalValue = Convert.ToDouble(tot);
                        double percentage = (originalValue / totalValue) * 100;
                    data.percent_female = percentage;
                    data.male = ma;
                    data.female = fe;
                    data.trangender = tran;
                    data.total = tot;
                    data.Awareness_meetings_a = meeting_a;
                    data.WSP_Related_meetings_a = wsp_a;
                    data.other_a = oth_a;
                    data.Awareness_meetings_c = meeting_a;
                    data.WSP_Related_meetings_c = wsp_a;
                    data.other_c = oth_a;
                    data.train_a = train_a;
                    data.train_c = train_a;

                    int tot_a = meeting_a + wsp_a + oth_a+train_a;
                    int tot_b = meeting_c + wsp_c + oth_c+ train_c;
                    data.total_a = tot_a;
                    data.total_c = tot_a;
                    data.year = Year;
                    var month_num = Get_Month_Number(Month);
                    var mmm = "All Months";
                    data.month = mmm;
                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
            else
            {
                string[] states = { block };

                List<social_report_class> all_data = new List<social_report_class>();

                for (int i = 0; i < states.Length; i++)
                {
                    social_report_class data = new social_report_class();

                    string state = states[i];
                    data.statename = State;
                    data.districtname = Distric;
                    data.blockname = block;
                    var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.block == block && x.FinancialYear == Year && x.FinancialMonth == Month).ToList();
                    int mm = Convert.ToInt32(Month) + 1;
                    var socialtotal_year = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.block == block && x.FinancialYear == Year).ToList();

                    int ma = 0;
                    int fe = 0;
                    int tran = 0;
                    int meeting_a = 0;
                    int wsp_a = 0;
                    int oth_a = 0;
                    int train_a = 0;
                    for (int k = 0; k < socialtotal.Count; k++)
                    {
                        var ama = socialtotal[k].event1;
                            if (ama == "Training")
                            {
                                train_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "WSP related Meeting")
                        {
                            wsp_a += 1;
                            var aa = socialtotal[k].male;
                            if (aa != null && aa != "")
                            {
                                ma += Convert.ToInt32(aa);
                            }
                            var bb = socialtotal[k].female;
                            if (bb != null && bb != "")
                            {
                                fe += Convert.ToInt32(bb);
                            }
                            var cc = socialtotal[k].others;
                            if (cc != null && cc != "" && cc != " ")
                            {
                                tran += Convert.ToInt32(cc);
                            }
                        }
                        if (ama == "Awareness Meeting")
                        {
                            meeting_a += 1;
                            var aa = socialtotal[k].male;
                            if (aa != null && aa != "")
                            {
                                ma += Convert.ToInt32(aa);
                            }
                            var bb = socialtotal[k].female;
                            if (bb != null && bb != "")
                            {
                                fe += Convert.ToInt32(bb);
                            }
                            var cc = socialtotal[k].others;
                            if (cc != null && cc != "" && cc != " ")
                            {
                                tran += Convert.ToInt32(cc);
                            }
                        }
                        if (ama == "Others")
                        {
                            oth_a += 1;
                            var aa = socialtotal[k].male;
                            if (aa != null && aa != "")
                            {
                                ma += Convert.ToInt32(aa);
                            }
                            var bb = socialtotal[k].female;
                            if (bb != null && bb != "")
                            {
                                fe += Convert.ToInt32(bb);
                            }
                            var cc = socialtotal[k].others;
                            if (cc != null && cc != "" && cc != " ")
                            {
                                tran += Convert.ToInt32(cc);
                            }
                        }

                    }
                    int meeting_c = 0;
                    int wsp_c = 0;
                    int oth_c = 0;
                    int train_c = 0;
                    for (int j = 0; j < socialtotal_year.Count; j++)
                    {
                        int monnn = Convert.ToInt32(socialtotal_year[j].FinancialMonth);
                        if (monnn < mm)
                        {
                            var ama = socialtotal_year[j].event1;
                            if (ama == "Training")
                            {
                                    train_c += 1;
                            }
                                if (ama == "WSP related Meeting")
                            {
                                wsp_c += 1;
                            }
                            if (ama == "Awareness Meeting")
                            {
                                meeting_c += 1;
                            }
                            if (ama == "Others")
                            {
                                oth_c += 1;
                            }
                        }
                    }

                    int tot = ma + fe + tran;
                    double originalValue = Convert.ToDouble(fe);
                    double totalValue = Convert.ToDouble(tot);
                    double percentage = (originalValue / totalValue) * 100;
                    data.percent_female = percentage;
                    data.male = ma;
                    data.female = fe;
                    data.trangender = tran;
                    data.total = tot;
                    data.Awareness_meetings_a = meeting_a;
                    data.WSP_Related_meetings_a = wsp_a;
                    data.other_a = oth_a;
                    data.Awareness_meetings_c = meeting_c;
                    data.WSP_Related_meetings_c = wsp_c;
                    data.other_c = oth_c;
                    data.train_a = train_a;
                    data.train_c = train_c;

                    int tot_a = meeting_a + wsp_a + oth_a+train_a;
                    int tot_b = meeting_c + wsp_c + oth_c+ train_c;
                    data.total_a = tot_a;
                    data.total_c = tot_b;
                    data.year = Year;
                    var month_num = Get_Month_Number(Month);
                    data.month = month_num;
                    all_data.Add(data);
                }


                var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
            }
        }
            catch (Exception Ex)
            {
                return Json("Error", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public ActionResult gp_report(string StateName, string distName, string blockName, string gpname, string Year, int Month)
        {
            try
            {
                var off = Session["Officer"].ToString();
                var State = "";
                var Distric = "";
                var block = "";
                var gp = "";
                if (off == "State Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    State = ss;
                    Distric = distName;
                    block = blockName;
                    gp = gpname;
                }
                else if (off == "District Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    var dd = Session["gdist"].ToString();
                    State = ss;
                    Distric = dd;
                    block = blockName;
                    gp = gpname;
                }
                else if (off == "Block Level Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    var dd = Session["gdist"].ToString();
                    var bb = Session["gblock"].ToString();
                    State = ss;
                    Distric = dd;
                    block = bb;
                    gp = gpname;
                }
                else if (off == "Gram Panchyat Nodal Officer")
                {
                    var ss = Session["gstate"].ToString();
                    var dd = Session["gdist"].ToString();
                    var bb = Session["gblock"].ToString();
                    var gg = Session["ggram"].ToString();
                    State = ss;
                    Distric = dd;
                    block = bb;
                    gp = gg;
                }
                else if (off == "Admin" || off == "National Level Nodal Officer")
                {
                    State = StateName;
                    Distric = distName;
                    block = blockName;
                    gp = gpname;
                }

                if (Month == 0)
                {
                    string[] states = { gp };

                    List<social_report_class> all_data = new List<social_report_class>();

                    for (int i = 0; i < states.Length; i++)
                    {
                        social_report_class data = new social_report_class();

                        data.statename = State;
                        data.districtname = Distric;
                        data.blockname = block;
                        data.gpname = gp;
                        var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.block == block && x.grampanchayat == gp && x.FinancialYear == Year).ToList();

                        int ma = 0;
                        int fe = 0;
                        int tran = 0;
                        int meeting_a = 0;
                        int wsp_a = 0;
                        int oth_a = 0;
                        int train_a = 0;
                        for (int k = 0; k < socialtotal.Count; k++)
                        {
                            var ama = socialtotal[k].event1;
                            if (ama == "Training")
                            {
                                train_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "WSP related Meeting")
                            {
                                wsp_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Awareness Meeting")
                            {
                                meeting_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Others")
                            {
                                oth_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }

                        }
                        int meeting_c = 0;
                        int wsp_c = 0;
                        int oth_c = 0;
                        int train_c = 0;

                        int tot = ma + fe + tran;
                        double originalValue = Convert.ToDouble(fe);
                        double totalValue = Convert.ToDouble(tot);
                        double percentage = (originalValue / totalValue) * 100;
                        data.percent_female = percentage;
                        data.male = ma;
                        data.female = fe;
                        data.trangender = tran;
                        data.total = tot;
                        data.Awareness_meetings_a = meeting_a;
                        data.WSP_Related_meetings_a = wsp_a;
                        data.other_a = oth_a;
                        data.Awareness_meetings_c = meeting_a;
                        data.WSP_Related_meetings_c = wsp_a;
                        data.other_c = oth_a;
                        data.train_a = train_a;
                        data.train_c = train_a;

                        int tot_a = meeting_a + wsp_a + oth_a+train_a;
                        int tot_b = meeting_c + wsp_c + oth_c+ train_c;
                        data.total_a = tot_a;
                        data.total_c = tot_a;
                        data.year = Year;
                        var month_num = Get_Month_Number(Month);
                        data.month = month_num;
                        all_data.Add(data);
                    }
                    var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;

                }
                else
                {
                    string[] states = { gp };

                    List<social_report_class> all_data = new List<social_report_class>();

                    for (int i = 0; i < states.Length; i++)
                    {
                        social_report_class data = new social_report_class();

                        data.statename = State;
                        data.districtname = Distric;
                        data.blockname = block;
                        data.gpname = gp;
                        var socialtotal = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.block == block && x.grampanchayat == gp && x.FinancialYear == Year && x.FinancialMonth == Month).ToList();
                        int mm = Convert.ToInt32(Month) + 1;
                        var socialtotal_year = AJE.obj_vw_socialmonitoring.Where(x => x.state == State && x.district == Distric && x.block == block && x.grampanchayat == gp && x.FinancialYear == Year).ToList();

                        int ma = 0;
                        int fe = 0;
                        int tran = 0;
                        int meeting_a = 0;
                        int wsp_a = 0;
                        int oth_a = 0;
                        int train_a = 0;
                        for (int k = 0; k < socialtotal.Count; k++)
                        {
                            var ama = socialtotal[k].event1;
                            if (ama == "Training")
                            {
                                train_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "WSP related Meeting")
                            {
                                wsp_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Awareness Meeting")
                            {
                                meeting_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }
                            if (ama == "Others")
                            {
                                oth_a += 1;
                                var aa = socialtotal[k].male;
                                if (aa != null && aa != "")
                                {
                                    ma += Convert.ToInt32(aa);
                                }
                                var bb = socialtotal[k].female;
                                if (bb != null && bb != "")
                                {
                                    fe += Convert.ToInt32(bb);
                                }
                                var cc = socialtotal[k].others;
                                if (cc != null && cc != "" && cc != " ")
                                {
                                    tran += Convert.ToInt32(cc);
                                }
                            }

                        }
                        int meeting_c = 0;
                        int wsp_c = 0;
                        int oth_c = 0;
                        int train_c = 0;
                        for (int j = 0; j < socialtotal_year.Count; j++)
                        {
                            int monnn = Convert.ToInt32(socialtotal_year[j].FinancialMonth);
                            if (monnn < mm)
                            {
                                var ama = socialtotal_year[j].event1;
                                if (ama == "Training")
                                {
                                    train_c += 1;
                                } 
                                if (ama == "WSP related Meeting")
                                {
                                    wsp_c += 1;
                                }
                                if (ama == "Awareness Meeting")
                                {
                                    meeting_c += 1;
                                }
                                if (ama == "Others")
                                {
                                    oth_c += 1;
                                }
                            }
                        }

                        int tot = ma + fe + tran;
                        double originalValue = Convert.ToDouble(fe);
                        double totalValue = Convert.ToDouble(tot); ;
                        double percentage = (originalValue / totalValue) * 100;
                        data.percent_female = percentage;
                        data.male = ma;
                        data.female = fe;
                        data.trangender = tran;
                        data.total = tot;
                        data.Awareness_meetings_a = meeting_a;
                        data.WSP_Related_meetings_a = wsp_a;
                        data.other_a = oth_a;
                        data.Awareness_meetings_c = meeting_c;
                        data.WSP_Related_meetings_c = wsp_c;
                        data.other_c = oth_c;
                        data.train_a = train_a;
                        data.train_c = train_c;

                        int tot_a = meeting_a + wsp_a + oth_a+train_a;
                        int tot_b = meeting_c + wsp_c + oth_c+ train_c;
                        data.total_a = tot_a;
                        data.total_c = tot_b;
                        data.year = Year;
                        var month_num = Get_Month_Number(Month);
                        data.month = month_num;
                        all_data.Add(data);
                    }



                    var jsonResult = Json(all_data, JsonRequestBehavior.AllowGet);
                    jsonResult.MaxJsonLength = int.MaxValue;
                    return jsonResult;
                }
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