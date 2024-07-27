using AbhyProject.Utility;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AbhyProject
{
    public partial class TestEmail : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnmail_Click(object sender, EventArgs e)
        {
            try
            {
                string Host = "relay.nic.in";
                string Email = "no-reply-cea@gov.in";
                int Port = 25;

                string email = textemail.Text.Trim();
                string result = WebConstents.SendEmailSMTP(email, "", "Test Email NIC", "Msg Body", "");
                string MsgTo = email;
                string MsgCc = "";
                string MsgSubje = "";
                string MsgText = "";
                string FilePath = "";
        

                    MailMessage mail = new MailMessage();
                    SmtpClient SmtpServer = new SmtpClient();

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
                    mail.Subject = MsgSubje;
                    mail.IsBodyHtml = true;
                    mail.Body = MsgText;
                    SmtpServer.Host = Host;
                    SmtpServer.Port = Port;
                    SmtpServer.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                    //if (!string.IsNullOrEmpty(FilePath))
                    //{

                    //    string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "@\\CircularFormUpload", FilePath);
                    //    path = path.Replace("@\\", "");
                    //    Attachment attachment;
                    //    attachment = new Attachment(path);
                    //    mail.Attachments.Add(attachment);

                    //}
                    SmtpServer.Send(mail);
                    result = "success";
                

                if (result == "success")
                {
                    lblstatus.Text = result;
                    lblstatus.ForeColor = Color.Green;
                }
                else
                {
                    lblstatus.Text = result;
                }
            }
            catch (Exception ex)
            {
                lblstatus.Text = ex.Message;
            }
        }
    }
}