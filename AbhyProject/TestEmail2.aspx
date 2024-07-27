<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestEmail2.aspx.cs" Inherits="AbhyProject.TestEmail2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
             <table>
                <tr>
                    <td>Email Id</td>
                    <td><asp:TextBox ID="textemail" runat="server" ></asp:TextBox></td>
                </tr>
                <tr>
                    <td></td>
                    <td><asp:Button runat="server" ID="btnmail" Text="Send" OnClick="btnmail_Click" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><asp:Label ID="lblstatus" runat="server" Text="" ForeColor="Red"></asp:Label></td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
