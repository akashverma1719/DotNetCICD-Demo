using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Text.RegularExpressions;
using System.Text;
using System.Security.Cryptography;
using System.IO;
using System.Globalization;

namespace AbhyProject.Models
{
    public class Malicious_File_Upload_Restriction
    {
        string[] image_format = { ".jpg", ".jpeg", ".png", ".bmp" };
        string[] compress_format = { ".rar", ".zip" };
        string[] word_format = { ".doc", ".docx" };
        string[] excel_format = { ".xlsx", ".xlsm", ".xls", ".csv" };
        int flag, flag1 = 0;
        bool isvalid = true;
        bool istruefile = true;
        public Malicious_File_Upload_Restriction()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public enum FileType
        {
            None = 0,
            Image = 1,
            Video = 2,
            PDF = 3,
            Text = 4,
            DOC = 5,
            DOCX = 6,
            Compressed = 7,
            Xlsx = 8,
            Xlsm = 9,
            Xls = 10,
            Csv = 11

        }

        private enum ImageFileExtension
        {
            none = 0,
            jpg = 1,
            jpeg = 2,
            bmp = 3,
            png = 4
        }
        private enum PDFFileExtension
        {
            none = 0,
            PDF = 1
        }
        private enum CompressExtension
        {
            none = 0,
            RAR = 1,
            ZIP = 2
        }

        public enum ExcelExtension
        {
            none = 0,
            xlsx = 1,
            xlsm = 2,
            xls = 3,
            csv = 4

        }
        public bool CheckValidFile(HttpPostedFileBase File, string FileExtensions)//GENERIC METHOD 
        {
            bool isvalid = false;
            string a = System.IO.Path.GetExtension(File.FileName).Remove(0, 1);
            if (FileExtensions.Contains(System.IO.Path.GetExtension(File.FileName).Remove(0, 1)))
            {
                string[] filetype = new string[1];
                if (FileExtensions.Contains(","))
                {
                    filetype = FileExtensions.Split(',');
                }
                else
                {
                    filetype[0] = FileExtensions;
                }

                for (int i = 0; i < filetype.Length; i++)
                {
                    if (filetype[i].ToString().ToUpper() == "PDF")
                    {
                        isvalid = Check_Valid_Pdf_File(File);
                        if (isvalid == true)
                        {
                            return isvalid;
                        }
                    }
                    else if (filetype[i].ToString().ToUpper() == "RAR" || filetype[i].ToString().ToUpper() == "ZIP")
                    {
                        isvalid = Check_Valid_UploadCommpressesFile(File);
                        if (isvalid == true)
                        {
                            return isvalid;
                        }
                    }
                    else if (filetype[i].ToString().ToUpper() == "DOC" || filetype[i].ToString().ToUpper() == "DOCX")
                    {
                        isvalid = Check_Valid_UploadWORDFile(File);
                        if (isvalid == true)
                        {
                            return isvalid;
                        }
                    }

                    else if (filetype[i].ToString().ToUpper() == "XLSX" || filetype[i].ToString().ToUpper() == "XLSM" || filetype[i].ToString().ToUpper() == "XLS" || filetype[i].ToString().ToUpper() == "CSV")
                    {
                        isvalid = Check_Valid_UploadExcelFile(File);
                        if (isvalid == true)
                        {
                            return isvalid;
                        }
                    }
                    else
                    {
                        isvalid = Check_Valid_UploadFile(File);
                        if (isvalid == true)
                        {
                            return isvalid;
                        }
                    }
                }
            }
            return isvalid;
        }

        public bool isValidFile(byte[] bytFile, FileType flType, String FileContentType, string ext = null)
        {
            bool isvalid = false;

            if (flType == FileType.None)
            {
                return isvalid;
            }
            else if (flType == FileType.Image)
            {
                isvalid = isValidImageFile(bytFile, FileContentType);
            }
            else if (flType == FileType.Compressed)
            {
                isvalid = isValidCompressFile(bytFile, FileContentType, ext);
            }
            else if (flType == FileType.DOC || flType == FileType.DOCX)
            {
                isvalid = isValidWORDFILE(bytFile, FileContentType, flType);
            }
            else if (flType == FileType.Xlsx || flType == FileType.Xlsm || flType == FileType.Xls || flType == FileType.Csv)
            {
                isvalid = isValidEXCELFILE(bytFile, FileContentType, flType);
            }


            return isvalid;
        }

        private bool isValidEXCELFILE(byte[] bytFile, String FileContentType, FileType filetyp)
        {
            string msg_bytefile = "";
            byte[] chkBytepdf = { 50, 75, 03, 04 };
            if (filetyp == FileType.Xls)
            {
                chkBytepdf = new byte[] { 50, 75, 03, 04 };
            }
            else if (filetyp == FileType.Xlsx)
            {
                chkBytepdf = new byte[] { 50, 75, 03, 04 };
            }
            bool isvalid = false;

            //WORDFileExtension wordfileExtn = WORDFileExtension.none;
            //if (FileContentType.Contains("application/msword") )
            //{
            //    wordfileExtn = WORDFileExtension.DOC;
            //}

            //if (wordfileExtn == WORDFileExtension.DOC)
            //{
            if (bytFile.Length >= 4)
            {
                int j = 0;
                for (Int32 i = 0; i <= 3; i++)
                {
                    msg_bytefile += bytFile[i] + ",";
                    if (bytFile[i] == chkBytepdf[i])
                    {
                        j = j + 1;
                        if (j == 3)
                        {
                            isvalid = true;
                        }
                    }
                }
            }
            //}
            //if (isvalid==false)
            //{
            //    
            //     
            //}

            return isvalid;
        }


        private bool isValidWORDFILE(byte[] bytFile, String FileContentType, FileType filetyp)
        {
            string msg_bytefile = "";
            byte[] chkBytepdf = { 80, 75, 3, 4 };
            if (filetyp == FileType.DOC)
            {
                chkBytepdf = new byte[] { 208, 207, 17, 224 };
            }
            else if (filetyp == FileType.DOCX)
            {
                chkBytepdf = new byte[] { 80, 75, 3, 4 };
            }
            bool isvalid = false;

            //WORDFileExtension wordfileExtn = WORDFileExtension.none;
            //if (FileContentType.Contains("application/msword") )
            //{
            //    wordfileExtn = WORDFileExtension.DOC;
            //}

            //if (wordfileExtn == WORDFileExtension.DOC)
            //{
            if (bytFile.Length >= 4)
            {
                int j = 0;
                for (Int32 i = 0; i <= 3; i++)
                {
                    msg_bytefile += bytFile[i] + ",";
                    if (bytFile[i] == chkBytepdf[i])
                    {
                        j = j + 1;
                        if (j == 3)
                        {
                            isvalid = true;
                        }
                    }
                }
            }
            //}
            //if (isvalid==false)
            //{
            //    
            //     
            //}

            return isvalid;
        }

        private bool isValidCompressFile(byte[] bytFile, String FileContentType, string ext)
        {
            byte[] chkByterar = { 82, 97, 114, 33 };
            //byte[] chkBytezip = { 80, 75,3,4 };
            byte[] chkBytezip = { 0, 0, 0, 0 };
            bool isvalid = false;

            CompressExtension comfileExtn = CompressExtension.none;
            //if ((FileContentType.ToString()).Contains("application/octet-stream") || (FileContentType.ToString()).Contains("application/x-zip-compressed"))
            {

                if (ext.ToUpper() == ".RAR")
                {
                    comfileExtn = CompressExtension.RAR;
                }
                else if (ext.ToUpper() == ".ZIP")
                {
                    comfileExtn = CompressExtension.ZIP;
                }
            }
            // else
            {

            }
            if (comfileExtn == CompressExtension.RAR)
            {
                if (bytFile.Length >= 4)
                {
                    int j = 0;
                    for (Int32 i = 0; i < 4; i++)
                    {
                        if (bytFile[i] == chkByterar[i])
                        {
                            j = j + 1;
                            if (j == 3)
                            {
                                isvalid = true;
                            }
                        }
                    }
                }
            }
            else if (comfileExtn == CompressExtension.ZIP)
            {
                if (bytFile.Length >= 4)
                {
                    int j = 0;
                    for (Int32 i = 0; i < 4; i++)
                    {
                        if (bytFile[i] == chkBytezip[i])
                        {
                            j = j + 1;
                            if (j == 3)
                            {
                                isvalid = true;
                            }
                        }
                    }
                }
            }
            return isvalid;
        }

        private bool isValidImageFile(byte[] bytFile, String FileContentType)
        {
            byte[] chkBytejpg = { 255, 216, 255, 224 };
            byte[] chkBytebmp = { 66, 77 };
            byte[] chkBytepng = { 137, 80, 78, 71 };
            bool isvalid = false;

            ImageFileExtension imgfileExtn = ImageFileExtension.none;
            if (FileContentType.Contains("jpg") | FileContentType.Contains("jpeg"))
            {
                imgfileExtn = ImageFileExtension.jpg;
            }
            else if (FileContentType.Contains("bmp"))
            {
                imgfileExtn = ImageFileExtension.bmp;
            }
            //else if (FileContentType.Contains("gif"))
            //{
            //    imgfileExtn = ImageFileExtension.gif;
            //}
            else if (FileContentType.Contains("png"))
            {
                imgfileExtn = ImageFileExtension.png;
            }

            if (imgfileExtn == ImageFileExtension.jpg || imgfileExtn == ImageFileExtension.jpeg)
            {
                if (bytFile.Length >= 4)
                {
                    int j = 0;
                    for (Int32 i = 0; i <= 3; i++)
                    {
                        if (bytFile[i] == chkBytejpg[i])
                        {
                            j = j + 1;
                            if (j == 3)
                            {
                                isvalid = true;
                            }
                        }
                    }
                }
            }
            else if (imgfileExtn == ImageFileExtension.bmp)
            {
                if (bytFile.Length >= 2)
                {
                    int j = 0;
                    for (Int32 i = 0; i <= 1; i++)
                    {
                        if (bytFile[i] == chkBytebmp[i])
                        {
                            j = j + 1;
                            if (j == 1)
                            {
                                isvalid = true;
                            }
                        }
                    }
                }
            }

            else if (imgfileExtn == ImageFileExtension.png)
            {
                if (bytFile.Length >= 4)
                {
                    int j = 0;
                    for (Int32 i = 0; i <= 3; i++)
                    {
                        if (bytFile[i] == chkBytepng[i])
                        {
                            j = j + 1;
                            if (j == 3)
                            {
                                isvalid = true;
                            }
                        }
                    }
                }
            }

            return isvalid;
        }

        public void check_validfile(HttpPostedFileBase objFile)
        {
            string[] dangerFileName = { "LPT1", "LPT2", "COM1", "COM2", "com1", "lpt1", "lpt2", "com2" };
            string[] check = objFile.FileName.Split('.', ' ', '%', ',', '_', '-', '#', '$', '^', '&', '*', '(', ')', '<', '>', '+', '!', '~');
            for (int i = 0; i < check.Length; i++)
            {
                for (int j = 0; j < dangerFileName.Length; j++)
                {
                    if (check[i] == dangerFileName[j])
                    {
                        //Response.Write("Error!!!");
                        //  ClientScript.RegisterStartupScript(this.GetType(), "Alert", "alert('Malicious File.Stop!')", true);
                        isvalid = false;
                        return;
                    }

                }
            }

        }

        public bool Check_Valid_UploadFile(HttpPostedFileBase ObjFUL)
        {
            if (ObjFUL.FileName != "")
            {
                string fileext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                for (int i = 0; i < image_format.Length; i++)
                {
                    if (fileext == image_format[i])
                        flag = 1;
                }
                //if (fileext == ".jpg" || fileext == ".jpeg")
                if (flag == 1)
                {

                    string img = string.Empty;
                    Stream imagestream;
                    int len = ObjFUL.ContentLength;
                    imagestream = ObjFUL.InputStream;
                    Byte[] imagecontent = new Byte[len];
                    imagestream.Read(imagecontent, 0, len);

                    string[] check = ObjFUL.FileName.Split('.');

                    string[] percentile = ObjFUL.FileName.Split('%');

                    if (check.Length > 2)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    if (percentile.Length > 1)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }

                    string cont = ObjFUL.ContentType;
                    string ext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                    FileType f = new FileType();
                    for (int i = 0; i < image_format.Length; i++)
                    {
                        if (ext == image_format[i])
                        {
                            f = FileType.Image;
                        }
                    }
                    check_validfile(ObjFUL);
                    if (isvalid == false)
                    {
                        string pop = "alert('Malicious File.Stop!');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        return isvalid;
                    }

                    if (isValidFile(imagecontent, f, cont) == false)
                    {
                        string pop = "alert('This Control Allows To Upload Only Images Format!!');";
                        //  ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    else
                    {
                        istruefile = true;
                    }

                }
                else
                {
                    istruefile = false;
                }

            }
            else
            {
                istruefile = false;
            }
            return istruefile;
        }

        public bool Check_Valid_UploadCommpressesFile(HttpPostedFileBase ObjFUL)
        {
            if (ObjFUL.FileName != "")
            {
                string fileext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                for (int i = 0; i < compress_format.Length; i++)
                {
                    if (fileext == compress_format[i])
                        flag = 1;
                }
                //if (fileext == ".jpg" || fileext == ".jpeg")
                if (flag == 1)
                {

                    string img = string.Empty;
                    Stream compresstream;
                    int len = ObjFUL.ContentLength;
                    compresstream = ObjFUL.InputStream;
                    Byte[] compresscontent = new Byte[len];
                    compresstream.Read(compresscontent, 0, len);

                    string[] check = ObjFUL.FileName.Split('.');

                    string[] percentile = ObjFUL.FileName.Split('%');

                    if (check.Length > 2)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    if (percentile.Length > 1)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }

                    string cont = ObjFUL.ContentType;
                    string ext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                    FileType f = new FileType();
                    for (int i = 0; i < compress_format.Length; i++)
                    {
                        if (ext == compress_format[i])
                        {
                            f = FileType.Compressed;
                        }
                    }
                    check_validfile(ObjFUL);
                    if (isvalid == false)
                    {
                        string pop = "alert('Malicious File.Stop!');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        return isvalid;
                    }

                    if (isValidFile(compresscontent, f, cont, ext) == false)
                    {
                        string pop = "alert('This Control Allows To Upload only in  compressed Format!!');";
                        //  ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    else
                    {
                        istruefile = true;
                    }

                }
                else
                {
                    istruefile = false;
                }

            }
            else
            {
                istruefile = false;
            }
            return istruefile;
        }


        //testing
        string omg = "";
        public string Demo(HttpPostedFileBase ObjFUL)
        {
            string pop = "";
            if (ObjFUL.FileName != "")
            {
                string fileext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                for (int i = 0; i < compress_format.Length; i++)
                {
                    if (fileext == compress_format[i])
                        flag = 1;
                }
                //if (fileext == ".jpg" || fileext == ".jpeg")
                if (flag == 1)
                {

                    string img = string.Empty;
                    Stream compresstream;
                    int len = ObjFUL.ContentLength;
                    compresstream = ObjFUL.InputStream;
                    Byte[] compresscontent = new Byte[len];
                    compresstream.Read(compresscontent, 0, len);

                    string[] check = ObjFUL.FileName.Split('.');

                    string[] percentile = ObjFUL.FileName.Split('%');

                    if (check.Length > 2)
                    {
                        pop += "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    if (percentile.Length > 1)
                    {
                        pop += "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }

                    string cont = ObjFUL.ContentType;
                    string ext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                    FileType f = new FileType();
                    for (int i = 0; i < compress_format.Length; i++)
                    {
                        if (ext == compress_format[i])
                        {
                            f = FileType.Compressed;
                        }
                    }
                    check_validfile(ObjFUL);
                    if (isvalid == false)
                    {
                        pop += "alert('Malicious File.Stop!');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        return pop;
                    }

                    if (isValidFile(compresscontent, f, cont, ext) == false)
                    {
                        pop += "This Control Allows To Upload only in  compressed Format!!";
                        for (int i = 0; i < 10; i++)
                        {
                            pop += compresscontent[i] + ",";

                        }
                        //  ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    else
                    {
                        istruefile = true;
                    }

                }
                else
                {
                    istruefile = false;
                }

            }
            else
            {
                istruefile = false;
            }
            return pop + omg;
        }

        string pdf_format = ".pdf";


        public bool isValidFile1(byte[] bytFile, FileType flType, String FileContentType)
        {
            bool isvalid = false;

            if (flType == FileType.None)
            {
                return isvalid;
            }

            else if (flType == FileType.PDF)
            {
                isvalid = isValidPDFFile1(bytFile, FileContentType);
                isvalid = true;
            }

            return isvalid;
        }
        private bool isValidPDFFile1(byte[] bytFile, String FileContentType)
        {
            string msg_bytefile = "";
            byte[] chkBytepdf = { 37, 80, 68, 70 };
            bool isvalid = false;

            PDFFileExtension pdffileExtn = PDFFileExtension.none;
            if (FileContentType.Contains("text/html") || FileContentType.Contains("pdf") || FileContentType.Contains("PDF"))
            {
                pdffileExtn = PDFFileExtension.PDF;
            }

            if (pdffileExtn == PDFFileExtension.PDF)
            {
                if (bytFile.Length >= 4)
                {
                    int j = 0;
                    for (Int32 i = 0; i <= 3; i++)
                    {
                        msg_bytefile += bytFile[i] + ",";
                        if (bytFile[i] == chkBytepdf[i])
                        {
                            j = j + 1;
                            if (j == 3)
                            {
                                isvalid = true;
                            }
                        }
                    }
                }
            }
            //if (isvalid==false)
            //{
            //    
            //     
            //}

            return isvalid;
        }

        private bool isValidFileName1(String FileName)
        {
            bool isvalid = false;

            string[] dangerFileName = { "LPT1", "LPT2", "COM1", "COM2", "com1", "lpt1", "lpt2", "com2" };
            string[] check = FileName.Split('.', ' ', '%', ',', '_', '-', '#', '$', '^', '&', '*', '(', ')', '<', '>', '+', '!', '~');
            for (int i = 0; i < check.Length; i++)
            {
                for (int j = 0; j < dangerFileName.Length; j++)
                {
                    if (check[i] == dangerFileName[j])
                    {
                        //Response.Write("Error!!!");
                        isvalid = false;
                        return isvalid;
                    }
                    else
                    {
                        isvalid = true;
                    }
                }
            }

            return isvalid;

        }

        #region new fileupload
        //  23/05/2014 1:33PM
        public bool Check_Valid_Pdf_File(HttpPostedFileBase objfileupload)
        {
            int flag = 0;

            string filetext = System.IO.Path.GetExtension(objfileupload.FileName).ToLower();

            if (filetext.ToLower() == pdf_format.ToLower() || filetext.ToLower() == ".pdf")
                flag = 1;

            //if (fileext == ".jpg" || fileext == ".jpge")
            if (flag == 1)
            {

                Stream pdfstream;
                int len = objfileupload.ContentLength;
                pdfstream = objfileupload.InputStream;
                Byte[] pdfcontent = new Byte[len];
                pdfstream.Read(pdfcontent, 0, len);

                string[] check = objfileupload.FileName.Split('.');

                string[] percentile = objfileupload.FileName.Split('%');

                if (check.Length > 2)
                {
                    string pop = "Malicious File Detected(.)";

                    istruefile = false;
                    return istruefile;
                }
                if (percentile.Length > 1)
                {
                    string pop = "Malicious File Detected(%)";
                    istruefile = false;
                    return istruefile;
                }

                string cont = objfileupload.ContentType;
                string ext = System.IO.Path.GetExtension(objfileupload.FileName).ToLower();
                FileType f = new FileType();

                if (ext.ToLower() == pdf_format.ToLower())
                {
                    f = FileType.PDF;
                }
                if (isValidFile1(pdfcontent, f, cont) == false)
                {
                    string pop = "alert('This Control Allows To Upload Only Pdf Format!!');";

                    istruefile = false;
                    return istruefile;
                }
                else if (isValidFileName1(objfileupload.FileName) == false)
                {
                    string pop = "Malicious File";
                    istruefile = false;
                    return istruefile;
                }
                else
                {
                    istruefile = true;
                    return istruefile;
                }
            }
            else
            {
                istruefile = false;
                return istruefile;
            }
            return istruefile;
        }
        #endregion

        public bool Check_Valid_UploadWORDFile(HttpPostedFileBase ObjFUL)
        {
            if (ObjFUL.FileName != "")
            {
                string fileext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                for (int i = 0; i < word_format.Length; i++)
                {
                    if (fileext == word_format[i])
                        flag = 1;
                }

                if (flag == 1)
                {

                    string img = string.Empty;
                    Stream wordstream;
                    int len = ObjFUL.ContentLength;
                    wordstream = ObjFUL.InputStream;
                    Byte[] wordcontent = new Byte[len];
                    wordstream.Read(wordcontent, 0, len);

                    string[] check = ObjFUL.FileName.Split('.');

                    string[] percentile = ObjFUL.FileName.Split('%');

                    if (check.Length > 2)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    if (percentile.Length > 1)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }

                    string cont = ObjFUL.ContentType;
                    string ext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                    FileType f = new FileType();
                    //for (int i = 0; i < word_format.Length; i++)
                    //{
                    if (ext == ".doc")
                    {
                        f = FileType.DOC;
                    }
                    else if (ext == ".docx")
                    {
                        f = FileType.DOCX;
                    }
                    //}
                    check_validfile(ObjFUL);
                    if (isvalid == false)
                    {
                        string pop = "alert('Malicious File.Stop!');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        return isvalid;
                    }

                    if (isValidFile(wordcontent, f, cont, ext) == false)
                    {
                        string pop = "alert('This Control Allows To Upload only in Word Format!!');";
                        //  ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    else
                    {
                        istruefile = true;
                    }

                }
                else
                {
                    istruefile = false;
                }

            }
            else
            {
                istruefile = false;
            }
            return istruefile;
        }


        public bool Check_Valid_UploadExcelFile(HttpPostedFileBase ObjFUL)
        {
            if (ObjFUL.FileName != "")
            {
                string fileext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                for (int i = 0; i < excel_format.Length; i++)
                {
                    if (fileext == excel_format[i])
                        flag = 1;
                }

                if (flag == 1)
                {

                    string img = string.Empty;
                    Stream wordstream;
                    int len = ObjFUL.ContentLength;
                    wordstream = ObjFUL.InputStream;
                    //Byte[] wordcontent = new Byte[len];
                    //wordstream.Read(wordcontent, 0, len);

                    string[] check = ObjFUL.FileName.Split('.');

                    string[] percentile = ObjFUL.FileName.Split('%');

                    if (check.Length > 2)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }
                    if (percentile.Length > 1)
                    {
                        string pop = "alert('Malicious File Detected');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        istruefile = false;
                    }

                    string cont = ObjFUL.ContentType;
                    string ext = System.IO.Path.GetExtension(ObjFUL.FileName).ToLower();
                    FileType f = new FileType();
                    //for (int i = 0; i < word_format.Length; i++)
                    //{
                    if (ext == ".csv")
                    {
                        f = FileType.Csv;
                    }
                    else if (ext == ".xls")
                    {
                        f = FileType.Xls;
                    }
                    else if (ext == ".xlsx")
                    {
                        f = FileType.Xlsx;
                    }
                    //}
                    check_validfile(ObjFUL);
                    if (isvalid == false)
                    {
                        string pop = "alert('Malicious File.Stop!');";
                        // ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                        return isvalid;
                    }

                    //if (isValidFile(wordcontent, f, cont, ext) == false)
                    //{
                    //    string pop = "alert('This Control Allows To Upload only in Word Format!!');";
                    //    //  ScriptManager.RegisterStartupScript(this, this.GetType(), "pop", pop, true);
                    //    istruefile = false;
                    //}
                    //else
                    //{
                    //    istruefile = true;
                    //}

                }
                else
                {
                    istruefile = false;
                }

            }
            else
            {
                istruefile = false;
            }
            return istruefile;
        }





    }
}