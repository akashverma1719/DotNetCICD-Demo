using AbhyProject.Models;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AbhyProject
{
    public partial class TestEmail2 : System.Web.UI.Page
    {
        AbhyEntity ABE = new AbhyEntity();
        AtaljalEntity AJE = new AtaljalEntity();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnmail_Click(object sender, EventArgs e)
        {
            //var details=
        }
    }
}