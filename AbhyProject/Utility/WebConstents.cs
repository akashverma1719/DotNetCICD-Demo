using AbhyProject.Controllers;
using AbhyProject.Models;
using Mono.Security.Protocol.Tls;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace AbhyProject.Utility
{
    public class WebConstents
    {
        public String MailServer;
        public int MailPort;
        public String Email;
        public string Password;
        public string BccEmail;
        private static AbhyEntity ABE = new AbhyEntity();
        public static string SendEmailSMTP(string MsgTo, string MsgCc, string MsgSubject, string MsgText, string FilePath)
        {
            string result = "";
            string Host = "relay.nic.in";
            string Email = "no-reply-ataljal@gov.in";
            int Port = 25;
            //string Host = System.Configuration.ConfigurationManager.AppSettings["smtpkey"];
            //string Email = System.Configuration.ConfigurationManager.AppSettings["UserName"];
            //int Port = Convert.ToInt32(System.Configuration.ConfigurationManager.AppSettings["Port"].ToString());
            //string Password = System.Configuration.ConfigurationManager.AppSettings["Password"];
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient();

                //SmtpServer.UseDefaultCredentials = false;
                //SmtpServer.EnableSsl = true;

                ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                foreach (var address in MsgTo.Split(new[] { ";" }, StringSplitOptions.RemoveEmptyEntries))
                {
                    mail.To.Add(address);
                }
                if (MsgCc != null)
                {
                    foreach (var address1 in MsgCc.Split(new[] { ";" }, StringSplitOptions.RemoveEmptyEntries))
                    {
                        mail.CC.Add(address1);
                    }
                }
                //mail.To.Add(MsgTo.ToString().Trim());
                mail.From = new MailAddress(Email);
                mail.Subject = MsgSubject;
                mail.IsBodyHtml = true;
                mail.Body = MsgText;
                SmtpServer.Host = Host;
                SmtpServer.Port = Port;
                SmtpServer.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                if (!string.IsNullOrEmpty(FilePath))
                {
                    string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "@\\CircularFormUpload", FilePath);
                    path = path.Replace("@\\", "");
                    Attachment attachment;
                    attachment = new Attachment(path);
                    mail.Attachments.Add(attachment);
                }
                SmtpServer.Send(mail);
                result = "success";
            }
            catch (Exception ex)
            {
                //status.Text = ex.StackTrace;
                abhy_tbl_error error_data = new abhy_tbl_error();
                error_data.error_test = ex.Message;
                error_data.user_email = ex.StackTrace;
                error_data.user_type = "SMTP";
                error_data.error_count = "1";
                error_data.date_time = DateTime.Now.ToString();
                ABE.obj_abhy_tbl_error.Add(error_data);
                ABE.SaveChanges();
                result = ex.StackTrace.ToString() + ",,,,,, " + ex.Message + "......." + ex.InnerException + "";
            }
            return result;
        }




        
    }
}