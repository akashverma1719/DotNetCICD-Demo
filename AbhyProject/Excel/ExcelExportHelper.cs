using OfficeOpenXml;
using OfficeOpenXml.Style;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Web;

namespace AbhyProject.Excel
{
    public class ExcelExportHelper
    {
       static string D_f = "";
        public static string ExcelContentType
        {
            get
            { return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"; }
        }

        public static DataTable ListToDataTable<T>(List<T> data)
        {
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            DataTable dataTable = new DataTable();
            dataTable.TableName = "12";
            for (int i = 0; i < properties.Count; i++)
            {
                PropertyDescriptor property = properties[i];
                dataTable.Columns.Add(property.Name, Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType);
            }

            object[] values = new object[properties.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = properties[i].GetValue(item);
                }

                dataTable.Rows.Add(values);
            }
            if (D_f == "")
            {
                string Expenditure_Made_Value = "";
                decimal comulative_mode_val = Convert.ToDecimal(0.0);
                decimal expenditure_made = Convert.ToDecimal(0.0);
                decimal Sum_1 = Convert.ToDecimal(0.0);
                for (int i = 0; i < dataTable.Rows.Count; i++)
                {
                    if (dataTable.Rows[i]["expenditure_made"] != null && dataTable.Rows[i]["expenditure_made"].ToString() != "")
                    {
                        Expenditure_Made_Value += Convert.ToDecimal(dataTable.Rows[i]["expenditure_made"]);
                        var SS = Convert.ToDecimal(dataTable.Rows[i]["expenditure_made"]);
                        expenditure_made = Convert.ToDecimal(SS);
                        comulative_mode_val = Convert.ToDecimal(SS);
                        Sum_1 += Convert.ToDecimal(SS);
                        dataTable.Rows[i]["cumulative_expenditure"] = Sum_1.ToString();

                    }
                }
            }
            return dataTable;
        }

        public static byte[] ExportExcel(DataTable dataTable, string heading = "", bool showSrNo = false, string DataFor = "")
        {
            if (DataFor == "")
            {
                dataTable.Columns["state_name"].ColumnName = "State Name";
                dataTable.Columns["fin_year"].ColumnName = "Year";
                dataTable.Columns["fin_month"].ColumnName = "Month";
                dataTable.Columns["component_id"].ColumnName = "Component ID";
                dataTable.Columns["sub_component_id"].ColumnName = "Subject-Component ID";
                dataTable.Columns["activity_id"].ColumnName = "Activity ID";
                dataTable.Columns["item_code"].ColumnName = "Item Code";
                dataTable.Columns["activity_name"].ColumnName = "Work/Activities";
                dataTable.Columns["financial_awp"].ColumnName = "Financial (In Crore)(Planned as per AWP)";
                dataTable.Columns["producrment_selection"].ColumnName = "Method of Selection/ Procurement (PP)";
                dataTable.Columns["category_of_procurement"].ColumnName = "Category of Procurement(As categorised in PP)";
                dataTable.Columns["component_budget_head"].ColumnName = "Component Budget Head";
                dataTable.Columns["expenditure_code"].ColumnName = "Expenditure Code";
                dataTable.Columns["expenditure_made"].ColumnName = "Expenditure Made(in crores)";
                dataTable.Columns["cumulative_expenditure"].ColumnName = "Cumulative Expenditure (in crore)";
            }
            byte[] result = null;
            using (ExcelPackage package = new ExcelPackage())
            {
                ExcelWorksheet workSheet = package.Workbook.Worksheets.Add(String.Format("{0} Data", heading));
                int startRowFrom = String.IsNullOrEmpty(heading) ? 1 : 3;

                if (showSrNo)
                {
                    DataColumn dataColumn = dataTable.Columns.Add("S.No", typeof(int));
                    dataColumn.SetOrdinal(0);
                    int index = 1;
                    foreach (DataRow item in dataTable.Rows)
                    {
                        item[0] = index;
                        index++;
                    }
                }


                // add the content into the Excel file  
                workSheet.Cells["A" + startRowFrom].LoadFromDataTable(dataTable, true);

                // autofit width of cells with small content  
                int columnIndex = 1;
                try
                {
                    foreach (DataColumn column in dataTable.Columns)
                    {
                        ExcelRange columnCells = workSheet.Cells[workSheet.Dimension.Start.Row, columnIndex, workSheet.Dimension.End.Row, columnIndex];
                        int maxLength = columnCells.Max(cell => cell.Value.ToString().Count());
                        if (maxLength < 150)
                        {
                            workSheet.Column(columnIndex).AutoFit();
                        }


                        columnIndex++;
                    }
                }
                catch (Exception ex)
                {

                }


                // format header - bold, yellow on black  
                using (ExcelRange r = workSheet.Cells[startRowFrom, 1, startRowFrom, dataTable.Columns.Count])
                {
                    r.Style.Font.Color.SetColor(System.Drawing.Color.Black);
                    r.Style.Font.Bold = true;
                    r.Style.Fill.PatternType = OfficeOpenXml.Style.ExcelFillStyle.Solid;
                    r.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    r.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                    r.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    r.Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    r.Style.Fill.BackgroundColor.SetColor(System.Drawing.ColorTranslator.FromHtml("#1fb5ad"));
                }

                // format cells - add borders  
                using (ExcelRange r = workSheet.Cells[startRowFrom + 1, 1, startRowFrom + dataTable.Rows.Count, dataTable.Columns.Count])
                {
                    r.Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    r.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                    r.Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    r.Style.Border.Right.Style = ExcelBorderStyle.Thin;

                    r.Style.Border.Top.Color.SetColor(System.Drawing.Color.Black);
                    r.Style.Border.Bottom.Color.SetColor(System.Drawing.Color.Black);
                    r.Style.Border.Left.Color.SetColor(System.Drawing.Color.Black);
                    r.Style.Border.Right.Color.SetColor(System.Drawing.Color.Black);
                }

                // removed ignored columns  
                //for (int i = dataTable.Columns.Count - 1; i >= 0; i--)
                //{
                //    if (i == 0 && showSrNo)
                //    {
                //        continue;
                //    }
                //    if (!columnsToTake.Contains(dataTable.Columns[i].ColumnName))
                //    {
                //        workSheet.DeleteColumn(i + 1);
                //    }
                //}

                if (!String.IsNullOrEmpty(heading))
                {
                    workSheet.Cells["A1"].Value = heading;
                    workSheet.Cells["A1"].Style.Font.Size = 20;

                    workSheet.InsertColumn(1, 1);
                    workSheet.InsertRow(1, 1);
                    workSheet.Column(1).Width = 5;
                }

                result = package.GetAsByteArray();
            }

            return result;
        }

        public static byte[] ExportExcel<T>(List<T> data, string Heading = "", bool showSlno = false, string DataFor = "")
        {
            D_f = DataFor;
            return ExportExcel(ListToDataTable<T>(data), Heading, showSlno, DataFor);
        }

    }
}
