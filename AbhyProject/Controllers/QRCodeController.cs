using AbhyProject.Models;
using AbhyProject.Utility;
using QRCoder;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web.Mvc;

public class QRCodeController : Controller
{
    AbhyEntity ABE = new AbhyEntity();
    public ActionResult Qrcode()
    {
        return View();
    }
    // Action to generate and download QR code
    public ActionResult DownloadQRCode(string link)
    {
        if (string.IsNullOrEmpty(link))
        {
            return new HttpStatusCodeResult(400, "Link cannot be null or empty");
        }

        using (MemoryStream ms = new MemoryStream())
        {
            // Create QR code generator
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(link, QRCodeGenerator.ECCLevel.Q);

            // Generate QR code as bitmap
            QRCode qrCode = new QRCode(qrCodeData);
            using (Bitmap qrCodeImage = qrCode.GetGraphic(20))
            {
                qrCodeImage.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                byte[] byteImage = ms.ToArray();

                // Return QR code as file result
                return File(byteImage, "image/png", "Registration QR.png");
            }
        }
    }
    public ActionResult feedQRCode(string link)
    {

        if (string.IsNullOrEmpty(link))
        {
            return new HttpStatusCodeResult(400, "Link cannot be null or empty");
        }

        using (MemoryStream ms = new MemoryStream())
        {
            // Create QR code generator
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(link, QRCodeGenerator.ECCLevel.Q);

            // Generate QR code as bitmap
            QRCode qrCode = new QRCode(qrCodeData);
            using (Bitmap qrCodeImage = qrCode.GetGraphic(20))
            {
                qrCodeImage.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                byte[] byteImage = ms.ToArray();

                // Return QR code as file result
                return File(byteImage, "image/png", "Feedback QR.png");
            }
        }
    }
}
