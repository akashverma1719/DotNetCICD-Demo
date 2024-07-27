using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;

namespace AbhyProject.Utility
{
    public static class ENCandDEC
    {
        #region EHTASHAM HUSAIN AES(Advanced Encryption Standard) 256 Encryption & Decryption
        private const string AES256Key = "mkbadahuatokyahuajaisepedkhajoor";

        // AES256 Encryption Ehtasham
        public static string EncryptAES256(string plainText)
        {
            try
            {
                RijndaelManaged aes = new RijndaelManaged();
                aes.KeySize = 256;
                aes.BlockSize = 128;
                aes.Padding = PaddingMode.PKCS7;
                aes.Mode = CipherMode.CBC;

                aes.Key = Encoding.UTF8.GetBytes(AES256Key);
                aes.GenerateIV();

                ICryptoTransform AESEncrypt = aes.CreateEncryptor(aes.Key, aes.IV);
                byte[] buffer = Encoding.UTF8.GetBytes(plainText);

                string encryptedText = Convert.ToBase64String(AESEncrypt.TransformFinalBlock(buffer, 0, buffer.Length));

                String mac = "";

                mac = BitConverter.ToString(HmacSHA256(Convert.ToBase64String(aes.IV) + encryptedText, AES256Key)).Replace("-", "").ToLower();

                var keyValues = new Dictionary<string, object>
                {
                    { "iv", Convert.ToBase64String(aes.IV) },
                    { "value", encryptedText },
                    { "mac", mac },
                };

                JavaScriptSerializer serializer = new JavaScriptSerializer();

                return Convert.ToBase64String(Encoding.UTF8.GetBytes(serializer.Serialize(keyValues)));
            }
            catch (Exception e)
            {
                throw new Exception("Error encrypting: " + e.Message);
            }
        }

        // AES256 Decryption
        public static string DecryptAES256(string cipherText)
        {
            try
            {
                RijndaelManaged aes = new RijndaelManaged();
                aes.KeySize = 256;
                aes.BlockSize = 128;
                aes.Padding = PaddingMode.PKCS7;
                aes.Mode = CipherMode.CBC;
                aes.Key = Encoding.UTF8.GetBytes(AES256Key);

                // Base 64 decode
                byte[] base64Decoded = Convert.FromBase64String(cipherText);
                string base64DecodedStr = Encoding.UTF8.GetString(base64Decoded);

                // JSON Decode base64Str
                JavaScriptSerializer ser = new JavaScriptSerializer();
                var payload = ser.Deserialize<Dictionary<string, string>>(base64DecodedStr);

                aes.IV = Convert.FromBase64String(payload["iv"]);

                ICryptoTransform AESDecrypt = aes.CreateDecryptor(aes.Key, aes.IV);
                byte[] buffer = Convert.FromBase64String(payload["value"]);

                return Encoding.UTF8.GetString(AESDecrypt.TransformFinalBlock(buffer, 0, buffer.Length));
            }
            catch (Exception e)
            {
                throw new Exception("Error decrypting: " + e.Message);
            }
        }

        static byte[] HmacSHA256(String data, String key)
        {
            using (HMACSHA256 hmac = new HMACSHA256(Encoding.UTF8.GetBytes(key)))
            {
                return hmac.ComputeHash(Encoding.UTF8.GetBytes(data));
            }
        }
        #endregion

        public static string MD5(string Password)
        {
            string md5password = "";
            MD5CryptoServiceProvider x = new MD5CryptoServiceProvider();
            byte[] bs = Encoding.UTF8.GetBytes(Password);
            bs = x.ComputeHash(bs);
            StringBuilder s = new StringBuilder();
            foreach (byte b in bs)
            {
                s.Append(b.ToString("x2").ToLower());
            }
            md5password = s.ToString();
            return md5password;
        }

        public static string GetMd5Hash(MD5 md5Hash, string input)
        {
            // Convert the input string to a byte array and compute the hash. 
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
            // Create a new Stringbuilder to collect the bytes 
            // and create a string.
            StringBuilder sBuilder = new StringBuilder();
            // Loop through each byte of the hashed data  
            // and format each one as a hexadecimal string. 
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            // Return the hexadecimal string. 
            return sBuilder.ToString();
        }

        public static string HashEncrypt(string clearText, string EncryptionKey)
        {
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }

        public static string GeneratePassword()
        {
            string SufixChar = GenerateSufixPwd();
            Random r = new Random();
            string password = "";
            for (int i = 0; i < 6; i++)
            {
                password = SufixChar + (Convert.ToString(r.Next(10, 200000)));
            }
            return password;
        }

        public static string GenerateSufixPwd()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var stringChars = new char[4];
            var random = new Random();
            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }
            var finalString = new String(stringChars);
            return finalString;
        }

        public static string GetHashRandomKey()
        {
            Random r = new Random();
            string sPawd = "";
            for (int i = 0; i < 6; i++)
            {
                sPawd = (Convert.ToString(r.Next(10, 200000)));
            }
            return sPawd;
        }

        public static string DecryptStringAES(string cipherText)
        {
            var keybytes = Encoding.UTF8.GetBytes("9393939393939393");
            var iv = Encoding.UTF8.GetBytes("9393939393939393");

            var encrypted = Convert.FromBase64String(cipherText);
            var decriptedFromJavascript = DecryptStringFromBytes(encrypted, keybytes, iv);
            return string.Format(decriptedFromJavascript);
        }

        private static string DecryptStringFromBytes(byte[] cipherText, byte[] key, byte[] iv)
        {
            // Check arguments.
            if (cipherText == null || cipherText.Length <= 0)
            {
                throw new ArgumentNullException("cipherText");
            }
            if (key == null || key.Length <= 0)
            {
                throw new ArgumentNullException("key");
            }
            if (iv == null || iv.Length <= 0)
            {
                throw new ArgumentNullException("key");
            }

            // Declare the string used to hold
            // the decrypted text.
            string plaintext = null;

            // Create an RijndaelManaged object
            // with the specified key and IV.
            using (var rijAlg = new RijndaelManaged())
            {
                //Settings
                rijAlg.Mode = CipherMode.CBC;
                rijAlg.Padding = PaddingMode.PKCS7;
                rijAlg.FeedbackSize = 128;

                rijAlg.Key = key;
                rijAlg.IV = iv;

                // Create a decrytor to perform the stream transform.
                var decryptor = rijAlg.CreateDecryptor(rijAlg.Key, rijAlg.IV);

                try
                {
                    // Create the streams used for decryption.
                    using (var msDecrypt = new MemoryStream(cipherText))
                    {
                        using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, System.Security.Cryptography.CryptoStreamMode.Read))
                        {
                            using (var srDecrypt = new StreamReader(csDecrypt))
                            {
                                // Read the decrypted bytes from the decrypting stream
                                // and place them in a string.
                                plaintext = srDecrypt.ReadToEnd();
                            }
                        }
                    }
                }
                catch
                {
                    plaintext = "keyError";
                }
            }
            return plaintext;
        }

        #region "Constants"
        /// <summary>
        /// Salt for encryption
        /// </summary>
        /// <remarks>Do not change</remarks>
        private const string strSalt = "Wipro$&_^Encr)&&%&Salt_789!";
        /// <summary>
        /// Name of algorithm
        /// </summary>
        /// <remarks>Do not change</remarks>
        private const string strAlgo = "SHA1";
        /// <summary>
        /// No. of encryption iterations in algorithm
        /// </summary>
        private const int intIteration = 2;
        /// <summary>
        /// Initialization Vector
        /// </summary>
        /// /// <remarks>Do not change</remarks>
        private const string strIV = "OFRna73m*aze01xY";//Do not change Initialization Vector
        /// <summary>
        /// Secrect Key
        /// </summary>
        private const string strSecretKey = "KJbibIHI8gi8B87ghib*gy8iB";
        /// <summary>
        /// Encryption key size
        /// </summary>
        /// <remarks>Do not change</remarks>
        private const int intKeySize = 256;
        private static PasswordDeriveBytes derivedPassword = null;
        private static RijndaelManaged symmetricKey = null;
        #endregion

        #region "Methods"        
        /// <summary>
        /// Method to encrypt a text using a password
        /// </summary>
        /// <param name="plainText">Text to be encrypted</param>
        /// <returns>Encrypted Text</returns>
        public static string Encrypt(string plainText)
        {
            if (string.IsNullOrEmpty(plainText))
                return string.Empty;
            if (string.IsNullOrEmpty(strSecretKey))
                throw new Exception("Secret Key specified is null or empty.");
            try
            {
                byte[] bIV = Encoding.ASCII.GetBytes(strIV);
                byte[] bSalt = Encoding.ASCII.GetBytes(strSalt);
                byte[] bPlainText = Encoding.UTF8.GetBytes(plainText);

                derivedPassword = new PasswordDeriveBytes(strSecretKey, bSalt, strAlgo, intIteration);
                byte[] KeyBytes = derivedPassword.GetBytes(intKeySize / 8);

                symmetricKey = new RijndaelManaged();
                symmetricKey.Mode = CipherMode.CBC;
                byte[] bCipherText = null;

                using (ICryptoTransform objEncryptor = symmetricKey.CreateEncryptor(KeyBytes, bIV))
                using (MemoryStream msEncrypt = new MemoryStream())
                {
                    CryptoStream csEncrypt = new CryptoStream(msEncrypt, objEncryptor, CryptoStreamMode.Write);
                    csEncrypt.Write(bPlainText, 0, bPlainText.Length);
                    csEncrypt.FlushFinalBlock();
                    bCipherText = msEncrypt.ToArray();
                }
                symmetricKey.Clear();
                return Convert.ToBase64String(bCipherText);
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while encrypting specified text.", ex);
            }
            finally
            {
                if (derivedPassword != null)
                    derivedPassword.Dispose();
                if (symmetricKey != null)
                    symmetricKey.Dispose();
            }
        }
        
        /// <summary>
        /// Method to encrypt a text using a password
        /// </summary>
        /// <param name="cipherText">Text to be decrypted</param>
        /// <returns>Decrypted Text</returns>
        public static string Decrypt(string cipherText)
        {
            if (string.IsNullOrEmpty(cipherText))
                return string.Empty;
            if (string.IsNullOrEmpty(strSecretKey))
                throw new Exception("Secret Key specified is null or empty.");
            try
            {
                byte[] bIV = Encoding.ASCII.GetBytes(strIV);
                byte[] bSalt = Encoding.ASCII.GetBytes(strSalt);
                byte[] bCipherText = Convert.FromBase64String(cipherText);

                derivedPassword = new PasswordDeriveBytes(strSecretKey, bSalt, strAlgo, intIteration);
                byte[] KeyBytes = derivedPassword.GetBytes(intKeySize / 8);

                symmetricKey = new RijndaelManaged();
                symmetricKey.Mode = CipherMode.CBC;

                byte[] bPlainText = new byte[bCipherText.Length];

                int intByteCount = 0;
                using (ICryptoTransform objDecryptor = symmetricKey.CreateDecryptor(KeyBytes, bIV))
                using (MemoryStream msDecrypt = new MemoryStream(bCipherText))
                {
                    CryptoStream csDecrypt = new CryptoStream(msDecrypt, objDecryptor, CryptoStreamMode.Read);
                    intByteCount = csDecrypt.Read(bPlainText, 0, bPlainText.Length);
                }

                symmetricKey.Clear();
                return Encoding.UTF8.GetString(bPlainText, 0, intByteCount);
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while decrypting specified text.", ex);
            }
            finally
            {
                if (derivedPassword != null)
                    derivedPassword.Dispose();
                if (symmetricKey != null)
                    symmetricKey.Dispose();
            }
        }
        
        /// <summary>
        /// Method to encrypt Password (one Way)
        /// </summary>
        /// <param name="plainText">Plain Text Input</param>
        /// <returns>Encrypted Text</returns>
        public static string EncryptOneWay(string plainText)
        {
            try
            {
                if (string.IsNullOrEmpty(plainText))
                    return string.Empty;
                if (string.IsNullOrEmpty(plainText))
                    throw new Exception("Secret Key specified is null or empty.");
                try
                {
                    byte[] bIV = Encoding.ASCII.GetBytes(strIV);
                    byte[] bSalt = Encoding.ASCII.GetBytes(strSalt);
                    byte[] bPlainText = Encoding.UTF8.GetBytes(plainText);

                    derivedPassword = new PasswordDeriveBytes(plainText, bSalt, strAlgo, intIteration);
                    byte[] KeyBytes = derivedPassword.GetBytes(intKeySize / 8);

                    symmetricKey = new RijndaelManaged();
                    symmetricKey.Mode = CipherMode.CBC;
                    byte[] bCipherText = null;

                    using (ICryptoTransform objEncryptor = symmetricKey.CreateEncryptor(KeyBytes, bIV))
                    using (MemoryStream msEncrypt = new MemoryStream())
                    {
                        CryptoStream csEncrypt = new CryptoStream(msEncrypt, objEncryptor, CryptoStreamMode.Write);
                        csEncrypt.Write(bPlainText, 0, bPlainText.Length);
                        csEncrypt.FlushFinalBlock();
                        bCipherText = msEncrypt.ToArray();
                    }
                    symmetricKey.Clear();
                    return Convert.ToBase64String(bCipherText);
                }
                catch (Exception ex)
                {
                    throw new Exception("An error occurred while encrypting specified text.", ex);
                }
                finally
                {
                    if (derivedPassword != null)
                        derivedPassword.Dispose();
                    if (symmetricKey != null)
                        symmetricKey.Dispose();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while encrypting specified text.", ex);
            }
        }
        #endregion
    }
}