using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace AbhyProject.Areas.api.Controllers
{
    //[APIAuthorization]
    public class WaterFlowMeterController : ApiController
    {
        AbhyEntity AJE = new AbhyEntity();

        [HttpGet]
        [Route("api/gettenderdetails")]
        public IHttpActionResult gettenderdetails()
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                List<apiviewtender> finaldata = new List<apiviewtender>();
                var exist = AJE.obj_abhy_procurement_milestone_insertdata.ToList();
                foreach (var item in exist)

                {
                    if (item.bid_open_date != "" && item.bid_open_date != null)
                    {
                        var bid_open_date = Set_Date(item.bid_open_date);

                        DateTime publisheddate = ParseDate(bid_open_date);
                        DateTime ss = DateTime.Today;

                        if (publisheddate <= DateTime.Today)
                        {
                            apiviewtender obj = new apiviewtender();
                            obj.agency_name = item.agency_name;
                            obj.activity_name = item.activity_name;
                            obj.producrment_selection = item.producrment_selection;
                            obj.category_of_procurement = item.category_of_procurement;
                            obj.description_service = item.description_service;
                            obj.rfp_date = item.rfp_date;
                            obj.email_office = item.email_office;
                            obj.tender_no = item.tender_no;
                            obj.estimated_cost = item.estimated_cost;
                            obj.bid_date = item.bid_date;
                            obj.tender_id = item.tender_id;
                            obj.bid_evalution_date = item.bid_evalution_date;
                            obj.award_date = item.award_date;
                            obj.completion_date = item.completion_date;
                            obj.noof_envelopes = item.noof_envelopes;
                            obj.deadline_date = item.deadline_date;
                            obj.bid_open_date = item.bid_open_date;
                            obj.website_url = item.website_url;
                            obj.filepath = item.filepath;
                            obj.filename = item.filename;
                                finaldata.Add(obj);
                        }
                    }


                }

                if (finaldata != null)
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", true);
                    dict.Add("message", "Data Loaded Successfully.");
                    dict.Add("data", finaldata);
                    return Ok(dict);
                }
                else
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", "No Data Found");
                    return Content(HttpStatusCode.BadRequest, dict);
                }
            }
            catch (Exception e)
            {
                if (e.Message == "An error occurred while updating the entries. See the inner exception for details.")
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", e.InnerException.ToString());
                    return Content(HttpStatusCode.BadRequest, dict);
                }
                else
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", e.Message.ToString());
                    return Content(HttpStatusCode.BadRequest, dict);
                }
            }
        }

        [HttpGet]
        [Route("api/gettenderdata")]
        public IHttpActionResult gettenderdata()
        {
            try
            {
                JavaScriptSerializer js = new JavaScriptSerializer();
                List<apiviewtender> finaldata = new List<apiviewtender>();
                var Data = AJE.obj_abhy_procurement_milestone_insertdata.ToList();
                List<abhy_procurement_milestone_insertdata> ActiveBids = new List<abhy_procurement_milestone_insertdata>();
                List<abhy_procurement_milestone_insertdata> openingToday = new List<abhy_procurement_milestone_insertdata>();
                List<abhy_procurement_milestone_insertdata> closeToday = new List<abhy_procurement_milestone_insertdata>();
                List<abhy_procurement_milestone_insertdata> close7daysdata = new List<abhy_procurement_milestone_insertdata>();
                List<abhy_procurement_milestone_insertdata> final = new List<abhy_procurement_milestone_insertdata>();

                foreach (var item in Data)

                {

                    if (item.contract_award_date != null && item.contract_award_date != "")
                    {

                        var contract_award_date = Set_Date(item.contract_award_date);


                        DateTime publisheddate1 = ParseDate(contract_award_date);

                        if (publisheddate1 <= DateTime.Today)
                        {

                        }
                        else
                        {
                            if (item.bid_open_date != null && item.bid_open_date != "")
                            {

                                var bid_open_date = Set_Date(item.bid_open_date);

                                DateTime publisheddate11 = ParseDate(bid_open_date);

                                if (publisheddate11 <= DateTime.Today)
                                {

                                }
                                else
                                {
                                    if (item.deadline_date != "" && item.deadline_date != null)
                                    {
                                        var deadline_date = Set_Date(item.deadline_date);

                                        DateTime publisheddate = ParseDate(deadline_date);

                                        if (publisheddate >= DateTime.Today)
                                        {
                                            ActiveBids.Add(item);
                                        }
                                    }
                                    // string od = item.opening_start_datetime;
                                    if (item.bid_open_date != "" && item.bid_open_date != null)
                                    {
                                        var bid_open_date1 = Set_Date(item.bid_open_date);
                                        DateTime openingdate = ParseDate(bid_open_date1);
                                        if (openingdate == DateTime.Today)
                                        {
                                            openingToday.Add(item);
                                        }
                                    }

                                    if (item.deadline_date != "" && item.deadline_date != null)
                                    {
                                        var deadline_date = Set_Date(item.deadline_date);
                                        DateTime Closedate = ParseDate(deadline_date);
                                        if (Closedate == DateTime.Today)
                                        {
                                            closeToday.Add(item);
                                        }
                                        if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                                        {
                                            close7daysdata.Add(item);
                                        }
                                    }
                                }



                            }
                            else
                            {
                                if (item.deadline_date != "" && item.deadline_date != null)
                                {
                                    var deadline_date = Set_Date(item.deadline_date);
                                    DateTime publisheddate = ParseDate(deadline_date);

                                    if (publisheddate >= DateTime.Today)
                                    {
                                        ActiveBids.Add(item);
                                    }
                                }
                                // string od = item.opening_start_datetime;
                                if (item.bid_open_date != "" && item.bid_open_date != null)
                                {
                                    var bid_open_date = Set_Date(item.bid_open_date);
                                    DateTime openingdate = ParseDate(bid_open_date);
                                    if (openingdate == DateTime.Today)
                                    {
                                        openingToday.Add(item);
                                    }
                                }

                                if (item.deadline_date != "" && item.deadline_date != null)
                                {
                                    var deadline_date = Set_Date(item.deadline_date);
                                    DateTime Closedate = ParseDate(deadline_date);
                                    if (Closedate == DateTime.Today)
                                    {
                                        closeToday.Add(item);
                                    }
                                    if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                                    {
                                        close7daysdata.Add(item);
                                    }
                                }
                            }


                        }

                    }
                    else
                    {
                        if (item.bid_open_date != null && item.bid_open_date != "")
                        {
                            var bid_open_date = Set_Date(item.bid_open_date);
                            DateTime publisheddate11 = ParseDate(bid_open_date);

                            if (publisheddate11 <= DateTime.Today)
                            {

                            }
                            else
                            {
                                if (item.deadline_date != "" && item.deadline_date != null)
                                {
                                    var deadline_date = Set_Date(item.deadline_date);
                                    DateTime publisheddate = ParseDate(deadline_date);

                                    if (publisheddate >= DateTime.Today)
                                    {
                                        ActiveBids.Add(item);
                                    }
                                }
                                // string od = item.opening_start_datetime;
                                if (item.bid_open_date != "" && item.bid_open_date != null)
                                {
                                    var bid_open_date1 = Set_Date(item.bid_open_date);
                                    DateTime openingdate = ParseDate(bid_open_date1);
                                    if (openingdate == DateTime.Today)
                                    {
                                        openingToday.Add(item);
                                    }
                                }

                                if (item.deadline_date != "" && item.deadline_date != null)
                                {
                                    var deadline_date = Set_Date(item.deadline_date);
                                    DateTime Closedate = ParseDate(deadline_date);
                                    if (Closedate == DateTime.Today)
                                    {
                                        closeToday.Add(item);
                                    }
                                    if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                                    {
                                        close7daysdata.Add(item);
                                    }
                                }
                            }



                        }
                        else
                        {
                            if (item.deadline_date != "" && item.deadline_date != null)
                            {
                                var deadline_date = Set_Date(item.deadline_date);
                                DateTime publisheddate = ParseDate(item.deadline_date);

                                if (publisheddate >= DateTime.Today)
                                {
                                    ActiveBids.Add(item);
                                }
                            }
                            // string od = item.opening_start_datetime;
                            if (item.bid_open_date != "" && item.bid_open_date != null)
                            {
                                var bid_open_date = Set_Date(item.bid_open_date);
                                DateTime openingdate = ParseDate(bid_open_date);
                                if (openingdate == DateTime.Today)
                                {
                                    openingToday.Add(item);
                                }
                            }

                            if (item.deadline_date != "" && item.deadline_date != null)
                            {
                                var deadline_date = Set_Date(item.deadline_date);
                                DateTime Closedate = ParseDate(deadline_date);
                                if (Closedate == DateTime.Today)
                                {
                                    closeToday.Add(item);
                                }
                                if (Closedate <= DateTime.Today.AddDays(7) && Closedate >= DateTime.Today)
                                {
                                    close7daysdata.Add(item);
                                }
                            }
                        }
                    }
                }
                var Date11 = DateTime.Today.AddDays(7);
                final.AddRange(ActiveBids);
                final.AddRange(openingToday);
                final.AddRange(closeToday);
                final.AddRange(close7daysdata);

                foreach (var itema in final)
                {
                    apiviewtender obj = new apiviewtender();
                    obj.agency_name = itema.agency_name;
                    obj.activity_name = itema.activity_name;
                    obj.producrment_selection = itema.producrment_selection;
                    obj.category_of_procurement = itema.category_of_procurement;
                    obj.description_service = itema.description_service;
                    obj.rfp_date = itema.rfp_date;
                    obj.email_office = itema.email_office;
                    obj.tender_no = itema.tender_no;
                    obj.estimated_cost = itema.estimated_cost;
                    obj.bid_date = itema.bid_date;
                    obj.tender_id = itema.tender_id;
                    obj.bid_evalution_date = itema.bid_evalution_date;
                    obj.award_date = itema.award_date;
                    obj.noof_envelopes = itema.noof_envelopes;
                    obj.deadline_date = itema.deadline_date;
                    obj.bid_open_date = itema.bid_open_date;
                    obj.website_url = itema.website_url;
                    obj.filepath = itema.filepath;
                    obj.filename = itema.filename;
                    finaldata.Add(obj);
                }
                if (finaldata != null)
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", true);
                    dict.Add("message", "Data Loaded Successfully.");
                    dict.Add("Active Bids", ActiveBids.Count);
                    dict.Add("Opening Today", openingToday.Count);
                    dict.Add("Closing Today", closeToday.Count);
                    dict.Add("Closing in next 7 days", close7daysdata.Count);
                    dict.Add("data", finaldata);
                    return Ok(dict);
                }
                else
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", "No Data Found");
                    return Content(HttpStatusCode.BadRequest, dict);
                }
            }
            catch (Exception e)
            {
                if (e.Message == "An error occurred while updating the entries. See the inner exception for details.")
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", e.InnerException.ToString());
                    return Content(HttpStatusCode.BadRequest, dict);
                }
                else
                {
                    Dictionary<object, object> dict = new Dictionary<object, object>();
                    dict.Add("status", false);
                    dict.Add("message", e.Message.ToString());
                    return Content(HttpStatusCode.BadRequest, dict);
                }
            }
        }

        public DateTime ParseDate(string date)
        {
            DateTimeFormatInfo dateFormatProvider = new DateTimeFormatInfo();
            dateFormatProvider.ShortDatePattern = "dd/MM/yyyy";
            return DateTime.Parse(date, dateFormatProvider);
        }
        public string Set_Date(string date)
        {
            string[] Date112 = date.Split('/');
            var FinalDate = "";
            if (Date112.Length == 1)
            {
                string[] Date1121 = date.Split('-');
                FinalDate = Date1121[0] + "/" + Date1121[1] + "/" + Date1121[2];
            }
            else
            {
                FinalDate = Date112[0] + "/" + Date112[1] + "/" + Date112[2];
            }
            return FinalDate;
        }

    }
}

