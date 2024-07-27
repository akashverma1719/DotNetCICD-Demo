using AbhyProject.Classes;
using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Controllers
{
    public class AgencyDashBoardController : Controller
    {
        AbhyEntity ABE = new AbhyEntity();
        // GET: AgencyDashBoard
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult State_SessionInfo()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    if (Session["Officer"] != null && Session["Officer"].ToString() == "Admin")
                    {
                        return Json("Admin", JsonRequestBehavior.AllowGet);
                    }
                    else if (Session["gstate"] != null && Session["gstate"].ToString() != "0" && Session["gstate"].ToString() != "")
                    {
                        var Statename = Session["gstate"].ToString();
                        return Json(Statename, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("Admin", JsonRequestBehavior.AllowGet);

                    }



                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult PIP_Agency_Info()
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_awp_feedback> ddetails = ABE.obj_abhy_mis_pip_awp_feedback.ToList();//total list

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpGet]
        public ActionResult PIP_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.ToList();
                        }
                        else
                        {

                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName).ToList();//total list
                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpGet]
        public ActionResult PIP_B_Info(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_b_form> ddetails = new List<abhy_mis_pip_b_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.ToList();//total list
                        }
                        else
                        {

                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName).ToList();//total list
                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpGet]
        public ActionResult AWP_Info(string FIN_Year, string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    List<abhy_mis_awp_form> ddetails = new List<abhy_mis_awp_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);

                    if (StateName != "" && FIN_Year != "" && FIN_Year != null)
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == FIN_Year && x.state_name == StateName).ToList();//total list
                        }
                    }
                    else if (StateName != "" && FIN_Year == "")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == StateName).ToList();//total list
                        }
                    }
                    else if (FIN_Year != "" && FIN_Year != null)
                    {
                        ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);

                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult AWP_B_Info(string FIN_Year, string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    List<abhy_mis_awp_b_form> ddetails = new List<abhy_mis_awp_b_form>();
                    if (StateName != "" && FIN_Year != "" && FIN_Year != null)
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_fin_year == FIN_Year && x.state_name == StateName).ToList();//total list
                        }

                    }
                    else if (StateName != "" && FIN_Year == "")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == StateName).ToList();//total list
                        }


                    }
                    else if (FIN_Year != "" && FIN_Year != null)
                    {
                        ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_fin_year == FIN_Year).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }



        [HttpGet]
        public ActionResult php_and_fn_Info_A_Form(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_insertdata> ddetails = new List<abhy_financialprogress_insertdata>();
                    if (StateName != "")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list
                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
                    }


                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult php_and_fn_Info_B_Form(string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_b_insertdata> ddetails = new List<abhy_financialprogress_b_insertdata>();
                    if (StateName != "")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName).ToList();//total list
                        }


                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list

                    }




                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult Get_Fund_Form_Info(string FIN_Year, string StateName)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_phymon_fund_release> ddetails = new List<abhy_phymon_fund_release>();
                    if (StateName != "" && FIN_Year == "" || FIN_Year == null)
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.state_name == StateName).ToList();//total list
                        }


                    }
                    else if (StateName != "" && FIN_Year != "")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.fund_year == FIN_Year).ToList();///total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.fund_year == FIN_Year && x.state_name == StateName).ToList();//total list

                        }
                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_phymon_fund_release.Where(x => x.fund_year == FIN_Year).ToList();//total list

                    }

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpGet]
        public ActionResult State_wise_PIP_vs_Year_wise_Expenditure_PIP_Info(string StateName, string ItemCode)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL" && ItemCode == "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.ToList();
                        }
                        else if (State == "ALL" && ItemCode != "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.pip_item_code == ItemCode).ToList();
                        }
                        else if (State != "ALL" && State != "" && ItemCode != "")
                        {

                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName && x.pip_item_code == ItemCode).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName).ToList();//total list

                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpGet]
        public ActionResult State_wise_PIP_vs_Year_wise_Expenditure_PIP_B_Info(string StateName, string ItemCode)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_b_form> ddetails = new List<abhy_mis_pip_b_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL" && ItemCode == "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.ToList();
                        }
                        else if (State == "ALL" && ItemCode != "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.pip_item_code == ItemCode).ToList();
                        }
                        else if (State != "ALL" && State != "" && ItemCode != "")
                        {

                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName && x.pip_item_code == ItemCode).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName).ToList();//total list

                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpGet]
        public ActionResult State_wise_PIP_vs_Year_wise_Expenditure_php_and_fn_Info_A_Form(string StateName, string ItemCode, string Fin_Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_insertdata> ddetails = new List<abhy_financialprogress_insertdata>();
                    if (StateName != "")
                    {

                        if (StateName == "ALL" && ItemCode == "" && Fin_Year == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();
                        }
                        else if (StateName == "ALL" && ItemCode != "" && Fin_Year == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.item_code == ItemCode).ToList();
                        }
                        else if (StateName == "ALL" && ItemCode == "" && Fin_Year != "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.fin_year == Fin_Year).ToList();
                        }
                        else if (StateName != "ALL" && StateName != "" && ItemCode != "" && Fin_Year != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.item_code == ItemCode && x.fin_year == Fin_Year).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && ItemCode != "" && Fin_Year == "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.item_code == ItemCode).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && ItemCode == "" && Fin_Year != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.fin_year == Fin_Year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
                    }


                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult State_wise_PIP_vs_Year_wise_Expenditure_php_and_fn_Info_B_Form(string StateName, string ItemCode, string Fin_Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_b_insertdata> ddetails = new List<abhy_financialprogress_b_insertdata>();
                    if (StateName != "")
                    {

                        if (StateName == "ALL" && Fin_Year == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();
                        }
                        else if (StateName == "ALL" && Fin_Year != "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.fin_b_year == Fin_Year).ToList();
                        }
                        else if (StateName != "ALL" && StateName != "" && Fin_Year != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName && x.fin_b_year == Fin_Year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list

                    }




                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }



        [HttpGet]
        public ActionResult Statewise_Activity_wise_Year_wise_Expenditure_PIP_Info(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL" && Activity == "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.ToList();
                        }
                        else if (State == "ALL" && Activity != "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.pip_workactivity == Activity).ToList();
                        }
                        else if (State != "ALL" && State != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName && x.pip_workactivity == Activity).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName).ToList();//total list

                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpGet]
        public ActionResult Statewise_Activity_wise_Year_wise_Expenditure_PIP_B_Info(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_b_form> ddetails = new List<abhy_mis_pip_b_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL" && Activity == "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.ToList();
                        }
                        else if (State == "ALL" && Activity != "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.pip_workactivity == Activity).ToList();
                        }
                        else if (State != "ALL" && State != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName && x.pip_workactivity == Activity).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName).ToList();//total list

                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpGet]
        public ActionResult Statewise_Activity_wise_Year_wise_Expenditure_php_and_fn_Info_A_Form(string StateName, string Activity, string Fin_Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_insertdata> ddetails = new List<abhy_financialprogress_insertdata>();
                    if (StateName != "")
                    {

                        if (StateName == "ALL" && Activity == "" && Fin_Year == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();
                        }
                        else if (StateName == "ALL" && Activity != "" && Fin_Year == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.activity_name == Activity).ToList();
                        }
                        else if (StateName == "ALL" && Activity == "" && Fin_Year != "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.fin_year == Fin_Year).ToList();
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity != "" && Fin_Year != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity && x.fin_year == Fin_Year).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity != "" && Fin_Year == "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity == "" && Fin_Year != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.fin_year == Fin_Year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
                    }


                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult Statewise_Activity_wise_Year_wise_Expenditure_php_and_fn_Info_B_Form(string StateName, string Activity, string Fin_Year)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_b_insertdata> ddetails = new List<abhy_financialprogress_b_insertdata>();
                    if (StateName != "")
                    {


                        if (StateName == "ALL" && Activity == "" && Fin_Year == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();
                        }
                        else if (StateName == "ALL" && Activity != "" && Fin_Year == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.activity_name == Activity).ToList();
                        }
                        else if (StateName == "ALL" && Activity == "" && Fin_Year != "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.fin_b_year == Fin_Year).ToList();
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity != "" && Fin_Year != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity && x.fin_b_year == Fin_Year).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity != "" && Fin_Year == "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity == "" && Fin_Year != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName && x.fin_b_year == Fin_Year).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list
                    }

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }



        [HttpGet]
        public ActionResult State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_PIP_Info(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_form> ddetails = new List<abhy_mis_pip_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL" && Activity == "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.ToList();
                        }
                        else if (State == "ALL" && Activity != "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.pip_workactivity == Activity).ToList();
                        }
                        else if (State != "ALL" && State != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName && x.pip_workactivity == Activity).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_form.Where(x => x.state_name == StateName).ToList();//total list

                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }
        [HttpGet]
        public ActionResult State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_PIP_B_Info(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_mis_pip_b_form> ddetails = new List<abhy_mis_pip_b_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);
                    var State = StateName;

                    if (State != "" && State != null)
                    {
                        if (State == "ALL" && Activity == "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.ToList();
                        }
                        else if (State == "ALL" && Activity != "")
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.pip_workactivity == Activity).ToList();
                        }
                        else if (State != "ALL" && State != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName && x.pip_workactivity == Activity).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_pip_b_form.Where(x => x.state_name == StateName).ToList();//total list

                        }
                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }


        [HttpGet]
        public ActionResult State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_php_and_fn_Info_A_Form(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_insertdata> ddetails = new List<abhy_financialprogress_insertdata>();
                    if (StateName != "")
                    {

                        if (StateName == "ALL" && Activity == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();
                        }
                        else if (StateName == "ALL" && Activity != "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.activity_name == Activity).ToList();
                        }

                        else if (StateName != "ALL" && StateName != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity == "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_insertdata.ToList();//total list
                    }


                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_php_and_fn_Info_B_Form(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {
                    List<abhy_financialprogress_b_insertdata> ddetails = new List<abhy_financialprogress_b_insertdata>();
                    if (StateName != "")
                    {

                        if (StateName == "ALL" && Activity == "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();
                        }

                        else if (StateName == "ALL" && Activity != "")
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.activity_name == Activity).ToList();
                        }

                        else if (StateName != "ALL" && StateName != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity != "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName && x.activity_name == Activity).ToList();//total list
                        }
                        else if (StateName != "ALL" && StateName != "" && Activity == "")
                        {

                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_financialprogress_b_insertdata.Where(x => x.state_name == StateName).ToList();//total list

                        }

                    }
                    else
                    {
                        ddetails = ABE.obj_abhy_financialprogress_b_insertdata.ToList();//total list
                    }

                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_Info(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    List<abhy_mis_awp_form> ddetails = new List<abhy_mis_awp_form>();
                    var userid = Convert.ToInt32(Session["UserId"]);

                    if (StateName != "" && Activity != "" && Activity != null)
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_workactivity == Activity).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_workactivity == Activity && x.state_name == StateName).ToList();//total list
                        }
                    }
                    else if (StateName != "" && Activity == "")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.state_name == StateName).ToList();//total list
                        }
                    }
                    else if (Activity != "" && Activity != null)
                    {
                        ddetails = ABE.obj_abhy_mis_awp_form.Where(x => x.awp_workactivity == Activity).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);

                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

        [HttpGet]
        public ActionResult State_wise_Agencywise_Wise_PIP_vs_Release_vs_AWP_vs_Expenditure_AWP_B_Info(string StateName, string Activity)
        {
            if (Session["UserId"] != null)
            {
                try
                {

                    List<abhy_mis_awp_b_form> ddetails = new List<abhy_mis_awp_b_form>();
                    if (StateName != "" && Activity != "" && Activity != null)
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_workactivity == Activity).ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_workactivity == Activity && x.state_name == StateName).ToList();//total list
                        }

                    }
                    else if (StateName != "" && Activity == "")
                    {
                        if (StateName == "ALL")
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.ToList();//total list
                        }
                        else
                        {
                            ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.state_name == StateName).ToList();//total list
                        }


                    }
                    else if (Activity != "" && Activity != null)
                    {
                        ddetails = ABE.obj_abhy_mis_awp_b_form.Where(x => x.awp_workactivity == Activity).ToList();//total list

                    }
                    return Json(ddetails, JsonRequestBehavior.AllowGet);
                }
                catch (Exception Ex)
                {
                    return Json("Error", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("Logout", JsonRequestBehavior.AllowGet);

            }
        }

    }
}