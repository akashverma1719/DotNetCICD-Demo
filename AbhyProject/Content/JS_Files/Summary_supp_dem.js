$(document).ready(function () {
    Get_supply_Report();
    Get_demand_Report_sp();
});

function Get_supply_Report() {
    $(".loader").show();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/SupplySide/Get_Lists_AR',
        data: {},
        success: function (data) {
            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}

            var tr_ar = '';
            var total_new = 0;
            var total_ren = 0;
            var annual_gw_recharge = 0;
            var storage_capacity = 0;
            var Total_Cost = 0;
            var ars1 = false;
            var ars2 = false;
            var ars3 = false;
            var ars4 = false;
            var ars5 = false;
            var ars6 = false;
            var ars7 = false;
            var ars8 = false;
            var ars9 = false;
            var ars10 = false;
            var ars11 = false;
            var ars12 = false;
            var ars13 = false;
            var ars14 = false;
            var ars15 = false;
            var ars16 = false;
            var ars17 = false;
            var ars18 = false;
            var ars19 = false;
            var ars20 = false;
            var Tr_h = 0;
            var default_div_block = 0;
            for (var i = 0; i < data.length; i++) {
                //Default block 
                var default_div = "supp_summ";
                if (default_div_block == 0) {
                    var dfd_block = default_div;
                } else {
                    var dfd_block = default_div + default_div_block;
                }
                if ($('#' + dfd_block).height() > 600) {
                    //activate new active block 
                    if (default_div_block == 0) {
                        default_div_block = 1;
                        var ars1 = true;
                        tr_ar = "";
                    } else {
                        default_div_block += 1;
                        tr_ar = "";
                        if (default_div_block == 1) {
                            var ars1 = true;
                        } else if (default_div_block == 2) {
                            var ars2 = true;
                        }else if (default_div_block == 3) {
                            var ars3 = true;
                        }else if (default_div_block == 4) {
                            var ars4 = true;
                        }else if (default_div_block == 5) {
                            var ars5 = true;
                        }else if (default_div_block == 6) {
                            var ars6 = true;
                        }else if (default_div_block == 7) {
                            var ars7 = true;
                        }else if (default_div_block == 8) {
                            var ars8 = true;
                        }else if (default_div_block == 9) {
                            var ars9 = true;
                        }else if (default_div_block == 10) {
                            var ars10 = true;
                        }else if (default_div_block == 11) {
                            var ars11 = true;
                        }else if (default_div_block == 12) {
                            var ars12 = true;
                        }else if (default_div_block == 13) {
                            var ars13 = true;
                        }else if (default_div_block == 14) {
                            var ars14 = true;
                        }else if (default_div_block == 15) {
                            var ars15 = true;
                        }else if (default_div_block == 16) {
                            var ars16 = true;
                        }else if (default_div_block == 17) {
                            var ars17 = true;
                        }else if (default_div_block == 18) {
                            var ars18 = true;
                        }else if (default_div_block == 19) {
                            var ars19 = true;
                        }else if (default_div_block == 20) {
                            var ars20 = true;
                        }
                    }

                    dfd_block = default_div + default_div_block;

                    $('#' + dfd_block).append(tr_ar);
                    $("#ars" + default_div_block).css("display", "block");
                    $("#suppagetbl_ars" + default_div_block).css("display", "block");
                }



                var scheme_name = "";
                if (data[i].scheme_name == "Other") {
                    scheme_name = data[i].scheme_name + ' - ' + data[i].other_scheme;
                } else {
                    scheme_name = data[i].scheme_name;
                }
                var name_of_Structurea = data[i].type_of_ar + "(" + data[i].work_proposed + ")";
                tr_ar = '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + name_of_Structurea + '</td><td>' + data[i].storage_capacity + '</td><td>' + data[i].annual_gw_recharge + '</td><td>' + data[i].village_name + '</td><td>' + data[i].latitude + '</td><td>' + data[i].longitude + '</td><td>' + data[i].financial_year + '</td><td>' + data[i].department_name + '</td><td>' + scheme_name + '</td><td>' + data[i].estimated_cost + '</td></tr>';

                if (data[i].work_proposed == "New") {
                    total_new += 1;
                } else {
                    total_ren += 1;
                }
                storage_capacity += parseFloat(data[i].storage_capacity);
                annual_gw_recharge += parseFloat(data[i].annual_gw_recharge);
                Total_Cost += parseFloat(data[i].estimated_cost);
                $('#' + dfd_block).append(tr_ar);
            }

            tr_ar = '<tr><td></td><td><b>Total<b></td><td><b>' + storage_capacity.toFixed(2) + '<b></td><td><b>' + annual_gw_recharge.toFixed(2) + '<b></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>' + Total_Cost.toFixed(2) + '<b></td></tr>'

            //total_new = parseFloat(total_new).toFixed(2);
            //total_ren = parseFloat(total_ren).toFixed(2);
            annual_gw_recharge = parseFloat(annual_gw_recharge).toFixed(2);

            KharifArray.push(parseFloat(total_new));
            RabiArray.push(parseFloat(total_ren));
            AOIArray.push(parseFloat(annual_gw_recharge));
            $('#' + dfd_block).append(tr_ar);
            if (ars1 == false) {
                $("#ars1").remove();
                $("#suppagetbl_ars1").remove();
            }
            if (ars2 == false) {
                $("#ars2").remove();
                $("#suppagetbl_ars2").remove();
            }
            if (ars3 == false) {
                $("#ars3").remove();
                $("#suppagetbl_ars3").remove();
            }
            if (ars4 == false) {
                $("#ars4").remove();
                $("#suppagetbl_ars4").remove();
            }
            if (ars5 == false) {
                $("#ars5").remove();
                $("#suppagetbl_ars5").remove();
            }
            if (ars6 == false) {
                $("#ars6").remove();
                $("#suppagetbl_ars6").remove();
            }
            if (ars7 == false) {
                $("#ars7").remove();
                $("#suppagetbl_ars7").remove();
            }
            if (ars8 == false) {
                $("#ars8").remove();
                $("#suppagetbl_ars8").remove();
            }
            if (ars9 == false) {
                $("#ars9").remove();
                $("#suppagetbl_ars9").remove();
            }
            if (ars10 == false) {
                $("#ars10").remove();
                $("#suppagetbl_ars10").remove();
            }
            if (ars11 == false) {
                $("#ars11").remove();
                $("#suppagetbl_ars11").remove();
            }
            if (ars12 == false) {
                $("#ars12").remove();
                $("#suppagetbl_ars12").remove();
            }
            if (ars13 == false) {
                $("#ars13").remove();
                $("#suppagetbl_ars13").remove();
            }
            if (ars14 == false) {
                $("#ars14").remove();
                $("#suppagetbl_ars14").remove();
            }
            if (ars15 == false) {
                $("#ars15").remove();
                $("#suppagetbl_ars15").remove();
            }
            if (ars16 == false) {
                $("#ars16").remove();
                $("#suppagetbl_ars16").remove();
            }
            if (ars17 == false) {
                $("#ars17").remove();
                $("#suppagetbl_ars17").remove();
            }
            if (ars18 == false) {
                $("#ars18").remove();
                $("#suppagetbl_ars18").remove();
            }
            if (ars19 == false) {
                $("#ars19").remove();
                $("#suppagetbl_ars19").remove();
            }
            if (ars20 == false) {
                $("#ars20").remove();
                $("#suppagetbl_ars20").remove();
            }

            Supply_SideReport();
            Get_supply_Report_wr();
            $(".loader").hide();

        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}


function Get_supply_Report_wr() {
    $(".loader").show();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/SupplySide/Get_Lists_WR',
        data: {},
        success: function (data) {
            if (data.length == 0) {
                Tbodyhtml = '<tr colspan="11"><td colspan="11" style="text-align: center;">No Data</td></tr>';
                $('#supp_WCS').append(Tbodyhtml);

            }
            $('.loader').hide();
            var tr_wcs = '';
            var total_new = 0;
            var total_ren = 0;
            var effective_storage = 0;
            var storage_capacity = 0;
            var Total_Cost = 0;
            var wcs1 = false;
            var wcs2 = false;
            var wcs3 = false;
            var wcs4 = false;
            var wcs5 = false;
            var wcs6 = false;
            var wcs7 = false;
            var wcs8 = false;
            var wcs9 = false;
            var wcs10 = false;
            var wcs11 = false;
            var wcs12 = false;
            var wcs13 = false;
            var wcs14 = false;
            var wcs15 = false;
            var wcs16 = false;
            var wcs17 = false;
            var wcs18 = false;
            var wcs19 = false;
            var wcs20 = false;
            var default_div_block = 0;
            for (var i = 0; i < data.length; i++) {
                var default_div = "supp_WCS";
                if (default_div_block == 0) {
                    var dfd_block = default_div;
                } else {
                    var dfd_block = default_div + default_div_block;
                }
                if ($('#' + dfd_block).height() > 600) {
                    //activate new active block 
                    if (default_div_block == 0) {
                        default_div_block = 1;
                        var wcs1 = true;
                        tr_wcs = "";
                    } else {
                        default_div_block += 1;
                        tr_wcs = "";
                        if (default_div_block == 1) {
                            var wcs1 = true;
                        } else if (default_div_block == 2) {
                            var wcs2 = true;
                        }else if (default_div_block == 3) {
                            var wcs3 = true;
                        }else if (default_div_block == 4) {
                            var wcs4 = true;
                        }else if (default_div_block == 5) {
                            var wcs5 = true;
                        }else if (default_div_block == 6) {
                            var wcs6 = true;
                        }else if (default_div_block == 7) {
                            var wcs7 = true;
                        }else if (default_div_block == 8) {
                            var wcs8 = true;
                        }else if (default_div_block == 9) {
                            var wcs9 = true;
                        }else if (default_div_block == 10) {
                            var wcs10 = true;
                        }else if (default_div_block == 11) {
                            var wcs11 = true;
                        }else if (default_div_block == 12) {
                            var wcs12 = true;
                        }else if (default_div_block == 13) {
                            var wcs13 = true;
                        }else if (default_div_block == 14) {
                            var wcs14 = true;
                        }else if (default_div_block == 15) {
                            var wcs15 = true;
                        }else if (default_div_block == 16) {
                            var wcs16 = true;
                        }else if (default_div_block == 17) {
                            var wcs17 = true;
                        }else if (default_div_block == 18) {
                            var wcs18 = true;
                        }else if (default_div_block == 19) {
                            var wcs19 = true;
                        }else if (default_div_block == 20) {
                            var wcs20 = true;
                        }
                    }

                    dfd_block = default_div + default_div_block;

                    $('#' + dfd_block).append(tr_wcs);
                    $("#wcs" + default_div_block).css("display", "block");
                    $("#suppagetbl_wcs" + default_div_block).css("display", "block");
                }


                var scheme_name = "";
                if (data[i].scheme_name == "Other") {
                    scheme_name = data[i].scheme_name + ' - ' + data[i].other_scheme;
                } else {
                    scheme_name = data[i].scheme_name;
                }
                var name_of_Structurea = data[i].type_of_wr + "(" + data[i].work_proposed + ")";
                tr_wcs = '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + name_of_Structurea + '</td><td>' + data[i].storage_capacity + '</td><td>' + data[i].effective_storage + '</td><td>' + data[i].village_name + '</td><td>' + data[i].latitude + '</td><td>' + data[i].longitude + '</td><td>' + data[i].financial_year + '</td><td>' + data[i].department_name + '</td><td>' + scheme_name + '</td><td>' + data[i].estimated_cost + '</td><tr>';

                if (data[i].work_proposed == "New") {
                    total_new += 1;
                } else {
                    total_ren += 1;
                }
                storage_capacity += parseFloat(data[i].storage_capacity);
                effective_storage += parseFloat(data[i].effective_storage);
                Total_Cost += parseFloat(data[i].estimated_cost);
                $('#' + dfd_block).append(tr_wcs);
            }
            //total_new = parseFloat(total_new);
            //total_ren = parseFloat(total_ren).toFixed(2);
            effective_storage = parseFloat(effective_storage).toFixed(2);

            tr_wcs = '<tr><td></td><td><b>Total<b></td><td><b>' + storage_capacity.toFixed(2) + '<b></td><td><b>' + effective_storage + '<b></td><td></td><td></td><td></td><td></td><td></td><td></td><td><b>' + Total_Cost.toFixed(2) + '<b></td></tr>'



            KharifArray_wcs.push(parseFloat(total_new));
            RabiArray_wcs.push(parseFloat(total_ren));
            AOIArray_wcs.push(parseFloat(effective_storage));
            $('#' + dfd_block).append(tr_wcs);
            if (wcs1 == false) {
                $("#wcs1").remove();
                $("#suppagetbl_wcs1").remove();
            }
            if (wcs2 == false) {
                $("#wcs2").remove();
                $("#suppagetbl_wcs2").remove();
            }
            if (wcs3 == false) {
                $("#wcs3").remove();
                $("#suppagetbl_wcs3").remove();
            }
            if (wcs4 == false) {
                $("#wcs4").remove();
                $("#suppagetbl_wcs4").remove();
            }
            if (wcs5 == false) {
                $("#wcs5").remove();
                $("#suppagetbl_wcs5").remove();
            }
            if (wcs6 == false) {
                $("#wcs6").remove();
                $("#suppagetbl_wcs6").remove();
            }
            if (wcs7 == false) {
                $("#wcs7").remove();
                $("#suppagetbl_wcs7").remove();
            }
            if (wcs8 == false) {
                $("#wcs8").remove();
                $("#suppagetbl_wcs8").remove();
            }
            if (wcs9 == false) {
                $("#wcs9").remove();
                $("#suppagetbl_wcs9").remove();
            }
            if (wcs10 == false) {
                $("#wcs10").remove();
                $("#suppagetbl_wcs10").remove();
            }
            if (wcs11 == false) {
                $("#wcs11").remove();
                $("#suppagetbl_wcs11").remove();
            }
            if (wcs12 == false) {
                $("#wcs12").remove();
                $("#suppagetbl_wcs12").remove();
            }
            if (wcs13 == false) {
                $("#wcs13").remove();
                $("#suppagetbl_wcs13").remove();
            }
            if (wcs14 == false) {
                $("#wcs14").remove();
                $("#suppagetbl_wcs14").remove();
            }
            if (wcs15 == false) {
                $("#wcs15").remove();
                $("#suppagetbl_wcs15").remove();
            }
            if (wcs16 == false) {
                $("#wcs16").remove();
                $("#suppagetbl_wcs16").remove();
            }
            if (wcs17 == false) {
                $("#wcs17").remove();
                $("#suppagetbl_wcs17").remove();
            }
            if (wcs18 == false) {
                $("#wcs18").remove();
                $("#suppagetbl_wcs18").remove();
            }
            if (wcs19 == false) {
                $("#wcs19").remove();
                $("#suppagetbl_wcs19").remove();
            }
            if (wcs20 == false) {
                $("#wcs20").remove();
                $("#suppagetbl_wcs20").remove();
            }
            
            Supply_SideReport_wcs();
            $(".loader").hide();
        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}

function Get_demand_Report_sp() {
    $(".loader").show();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/SupplySide/Get_demand_summary_sp',
        data: {},
        success: function (data) {

            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}
            var TotalWaterDemandSP = data.TotalWaterDemandSP.toFixed(2);
            var NetWaterDemandSP = data.NetWaterDemandSP.toFixed(2);
            var ReductionWaterDemandSP = data.ReductionWaterDemandSP.toFixed(2);

            var TotalWaterDemandDrip = data.TotalWaterDemandDrip.toFixed(2);
            var NetWaterDemandDrip = data.NetWaterDemandDrip.toFixed(2);
            var ReductionWaterDemandDrip = data.ReductionWaterDemandDrip.toFixed(2);


            var TotalWaterDemandPipe = data.TotalWaterDemandPipe.toFixed(2);
            var NetWaterDemandPipe = data.NetWaterDemandPipe.toFixed(2);
            var ReductionWaterDemandPipe = data.ReductionWaterDemandPipe.toFixed(2);


            var TotalWaterDemandCrop = data.TotalWaterDemandCrop.toFixed(2);
            var NetWaterDemandCrop = data.NetWaterDemandCrop.toFixed(2);
            var ReductionWaterDemandCrop = data.ReductionWaterDemandCrop.toFixed(2);


            var TotalWaterDemandAny = data.TotalWaterDemandAny.toFixed(2);
            var NetWaterDemandAny = data.NetWaterDemandAny.toFixed(2);
            var ReductionWaterDemandAny = data.ReductionWaterDemandAny.toFixed(2);
            var tr = '';
            //For Any Other <td>' + data.NetWaterDemandAny.toFixed(2) + '</td>

            if (data != null) {
                tr += '<tr><td>1</td><th>Sprinkler</th><td>' + data.ProposedAreaSP.toFixed(2) + '</td><td>' + data.TotalWaterDemandSP.toFixed(2) + '</td>'
                tr += '<td>' + data.NetWaterDemandSP.toFixed(2) + '</td><td>' + data.ReductionWaterDemandSP.toFixed(2) + '</td><td>' + data.ApproxCostSP.toFixed(2) + '</td></tr>';

                tr += '<tr><td>2</td><th>Drip</th><td>' + data.ProposedAreaDrip.toFixed(2) + '</td><td>' + data.TotalWaterDemandDrip.toFixed(2) + '</td>'
                tr += '<td>' + data.NetWaterDemandDrip.toFixed(2) + '</td><td>' + data.ReductionWaterDemandDrip.toFixed(2) + '</td><td>' + data.ApproxCostDrip.toFixed(2) + '</td></tr>';

                tr += '<tr><td>3</td><th>Pipelines</th><td>' + data.ProposedAreaPipe.toFixed(2) + '</td><td>' + data.TotalWaterDemandPipe.toFixed(2) + '</td>'
                tr += '<td>' + data.NetWaterDemandPipe.toFixed(2) + '</td><td>' + data.ReductionWaterDemandPipe.toFixed(2) + '</td><td>' + data.ApproxCostPipe.toFixed(2) + '</td></tr>';

                tr += '<tr><td>4</td><th>Crop Diversification</th><td>' + data.ProposedAreaCrop + '</td><td>' + data.TotalWaterDemandCrop.toFixed(2) + '</td>'
                tr += '<td>' + data.NetWaterDemandCrop.toFixed(2) + '</td><td>' + data.ReductionWaterDemandCrop.toFixed(2) + '</td><td>' + data.ApproxCostCrop.toFixed(2) + '</td></tr>';

                tr += '<tr><td>5</td><th>Other Measures</th><td>' + data.ProposedAreaAny.toFixed(2) + '</td><td>' + data.TotalWaterDemandAny.toFixed(2) + '</td>'
                tr += '<td>--</td><td>' + data.ReductionWaterDemandAny.toFixed(2) + '</td><td>' + data.ApproxCostAny.toFixed(2) + '</td></tr>';

                var Total_pro_Area = parseFloat(parseFloat(data.ProposedAreaSP.toFixed(2))) + parseFloat(parseFloat(data.ProposedAreaDrip.toFixed(2)))
                    + parseFloat(parseFloat(data.ProposedAreaPipe.toFixed(2))) + parseFloat(parseFloat(data.ProposedAreaCrop.toFixed(2)))
                    + parseFloat(parseFloat(data.ProposedAreaAny.toFixed(2)));

                var Total_Wt_Demand = parseFloat(parseFloat(data.TotalWaterDemandSP.toFixed(2))) + parseFloat(parseFloat(data.TotalWaterDemandDrip.toFixed(2)))
                    + parseFloat(parseFloat(data.TotalWaterDemandPipe.toFixed(2))) + parseFloat(parseFloat(data.TotalWaterDemandCrop.toFixed(2)))
                    + parseFloat(parseFloat(data.TotalWaterDemandAny.toFixed(2)));

                var Total_NetWt_Demand = parseFloat(parseFloat(data.NetWaterDemandSP.toFixed(2))) + parseFloat(parseFloat(data.NetWaterDemandDrip.toFixed(2)))
                    + parseFloat(parseFloat(data.NetWaterDemandPipe.toFixed(2))) + parseFloat(parseFloat(data.NetWaterDemandCrop.toFixed(2)));

                var Total_RedWt_Demand = parseFloat(parseFloat(data.ReductionWaterDemandSP.toFixed(2))) + parseFloat(parseFloat(data.ReductionWaterDemandDrip.toFixed(2)))
                    + parseFloat(parseFloat(data.ReductionWaterDemandPipe.toFixed(2))) + parseFloat(parseFloat(data.ReductionWaterDemandCrop.toFixed(2)))
                    + parseFloat(parseFloat(data.ReductionWaterDemandAny.toFixed(2)));

                var Total_App_Cost = parseFloat(parseFloat(data.ApproxCostSP.toFixed(2))) + parseFloat(parseFloat(data.ApproxCostDrip.toFixed(2)))
                    + parseFloat(parseFloat(data.ApproxCostPipe.toFixed(2))) + parseFloat(parseFloat(data.ApproxCostCrop.toFixed(2)))
                    + parseFloat(parseFloat(data.ApproxCostAny.toFixed(2)));

                tr += '<tr><td></td><th><b>Total<b></th><td><b>' + Total_pro_Area.toFixed(2) + '<b></td><td><b>' + Total_Wt_Demand.toFixed(2) + '<b></td><td><b>' + Total_NetWt_Demand.toFixed(2) + '<b></td><td><b>' + Total_RedWt_Demand.toFixed(2) + '<b></td><td><b>' + Total_App_Cost.toFixed(2) + '<b></td></tr>'

                $('#data_sprinkler').append(tr);
                DemandSide_KharifArray.push(parseFloat(TotalWaterDemandSP));
                DemandSide_RabiArray.push(parseFloat(NetWaterDemandSP));
                DemandSide_SummerArray.push(parseFloat(ReductionWaterDemandSP));

                DemandSide_KharifArray.push(parseFloat(TotalWaterDemandDrip));
                DemandSide_RabiArray.push(parseFloat(NetWaterDemandDrip));
                DemandSide_SummerArray.push(parseFloat(ReductionWaterDemandDrip));

                DemandSide_KharifArray.push(parseFloat(TotalWaterDemandPipe));
                DemandSide_RabiArray.push(parseFloat(NetWaterDemandPipe));
                DemandSide_SummerArray.push(parseFloat(ReductionWaterDemandPipe));

                DemandSide_KharifArray.push(parseFloat(TotalWaterDemandCrop));
                DemandSide_RabiArray.push(parseFloat(NetWaterDemandCrop));
                DemandSide_SummerArray.push(parseFloat(ReductionWaterDemandCrop));

                DemandSide_KharifArray.push(parseFloat(TotalWaterDemandAny));
                //DemandSide_RabiArray.push(parseFloat(NetWaterDemandAny));
                DemandSide_SummerArray.push(parseFloat(ReductionWaterDemandAny));

            }

            Get_fund_sp();
        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}


function Get_fund_sp() {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/SupplySide/Get_fund_sp',
        data: {},
        success: function (data) {

            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}
            $('.loader').hide();
            var tr_sp = '';
            var tr_dp = '';
            var tr_cp = '';
            var tr_pl = '';
            var tr_any = '';

            let j = 0;
            let k = 0;
            let l = 0;
            let m = 0;
            let n = 0;
            let Total_Pro_Area = 0;
            let Total_App_Cost = 0;
            for (var i = 0; i < data.length; i++) {
                var total_crop_area = "";
                if (data[i].total_crop_area == 0 || data[i].total_crop_area == null) {
                    total_crop_area = "--"
                } else {
                    total_crop_area = data[i].total_crop_area;
                }
                j += 1;
                tr_sp += '<tr><td>' + j + '</td><td> ' + data[i].fund_for + ' </td><td>' + data[i].area_proposed + '</td><td>' + data[i].financial_year + '</td><td> ' + data[i].department_name + '</td ><td>' + data[i].scheme_name + '</td><td>' + data[i].approx_est_cost + '</td></tr>';

                Total_Pro_Area += parseFloat(data[i].area_proposed);
                Total_App_Cost += parseFloat(data[i].approx_est_cost);

                /*tr += '<td> ' + data[i].approx_fund_avail + '</td ><td>' + data[i].gap_funding + '</td></tr > ';*/
            }

            tr_sp += '<tr><td></td><td><b>Total<b></td><td><b>' + Total_Pro_Area + '<b></td><td></td><td></td><td></td><td><b>' + Total_App_Cost.toFixed(2) + '<b></td></tr>'
            $('#data_sprinkler_fund').append(tr_sp);
            demandside_graph();
            //Get_demand_Report_drip();
            $(".loader").hide();
        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}


//function Get_fund_sp() {
//    $.ajax({
//        type: 'POST',
//        dataType: 'JSON',
//        url: '/SupplySide/Get_fund_sp',
//        data: {},
//        success: function (data) {

//            //if (data == "Logout") {
//            //      window.location = "/Home/LogOut";
//            //}
//            $('.loader').hide();
//            var tr_sp = '';
//            var tr_dp = '';
//            var tr_cp = '';
//            var tr_pl = '';
//            var tr_any = '';

//            let j = 0;
//            let k = 0;
//            let l = 0;
//            let m = 0;
//            let n = 0;
//            for (var i = 0; i < data.length; i++) {


//                if (data[i].fund_for == "sprinkler") {
//                    j += 1;
//                    tr_sp += '<tr><td>' + j + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].total_area_proposed + '</td><td>' + data[i].possible_funding + '</td><td>' + data[i].area_proposed + '</td><td> ' + data[i].approx_est_cost + '</td ><td>' + data[i].approx_fund_avail + '</td><td>' + data[i].gap_funding + '</td></tr>';
//                }
//                if (data[i].fund_for == "drip") {
//                    k += 1;
//                    tr_dp += '<tr><td>' + k + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].total_area_proposed + '</td><td>' + data[i].possible_funding + '</td><td>' + data[i].area_proposed + '</td><td> ' + data[i].approx_est_cost + '</td ><td>' + data[i].approx_fund_avail + '</td><td>' + data[i].gap_funding + '</td></tr>';
//                }
//                if (data[i].fund_for == "pipeline") {
//                    l += 1;
//                    tr_pl += '<tr><td>' + l + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].total_area_proposed + '</td><td>' + data[i].possible_funding + '</td><td>' + data[i].area_proposed + '</td><td> ' + data[i].approx_est_cost + '</td ><td>' + data[i].approx_fund_avail + '</td><td>' + data[i].gap_funding + '</td></tr>';
//                }
//                if (data[i].fund_for == "crop") {
//                    m += 1;
//                    tr_cp += '<tr><td>' + m + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].total_area_proposed + '</td><td>' + data[i].possible_funding + '</td><td>' + data[i].area_proposed + '</td><td> ' + data[i].approx_est_cost + '</td ><td>' + data[i].approx_fund_avail + '</td><td>' + data[i].gap_funding + '</td></tr>';
//                }
//                if (data[i].fund_for == "anyother") {
//                    n += 1;
//                    tr_any += '<tr><td>' + n + '</td><td>' + data[i].total_crop_area + '</td><td>' + data[i].possible_funding + '</td><td>' + data[i].area_proposed + '</td><td> ' + data[i].approx_est_cost + '</td ><td>' + data[i].approx_fund_avail + '</td><td>' + data[i].gap_funding + '</td></tr>';
//                }

//                /*tr += '<td> ' + data[i].approx_fund_avail + '</td ><td>' + data[i].gap_funding + '</td></tr > ';*/
//            }
//            if (tr_sp != '') {
//                $('#data_sprinkler_fund').append(tr_sp);
//            } else {
//                tr_sp = '<tr><td></td><td></td><td></td><td></td>No Data<td></td><td></td ><td></td><td></td></tr>';
//                $('#data_sprinkler_fund').append(tr_sp);
//            }
//            if (tr_dp != '') {
//                $('#data_drip_fund').append(tr_dp);
//            } else {
//                tr_dp = '<tr><td></td><td></td><td></td><td></td>No Data<td></td><td></td ><td></td><td></td></tr>';
//                $('#data_drip_fund').append(tr_dp);
//            }
//            if (tr_cp != '') {
//                $('#data_crop_fund').append(tr_cp);
//            } else {
//                tr_cp = '<tr><td></td><td></td><td></td><td></td>No Data<td></td><td></td ><td></td><td></td></tr>';
//                $('#data_crop_fund').append(tr_cp);
//            }
//            if (tr_pl != '') {
//                $('#data_pipeline_fund').append(tr_pl);
//            } else {
//                tr_pl = '<tr><td></td><td></td><td></td><td></td>' + "No Data" + '<td></td><td></td ><td></td><td></td></tr>';
//                $('#data_pipeline_fund').append(tr_pl);
//            }
//            if (tr_any != '') {
//                $('#data_anyother_fund').append(tr_any);
//            } else {
//                tr_sp = '<tr><td></td><td></td><td></td><td></td>No Data<td></td><td></td ><td></td><td></td></tr>';
//                $('#data_anyother_fund').append(tr_any);
//            }





//            Get_demand_Report_drip();
//        },
//        error:
//            function (response) {
//                console.dir(response)
//                //alert("Error: " + response);
//            }
//    });
//}

function Get_demand_Report_drip() {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/SupplySide/Get_demand_summary_dp',
        data: {},
        success: function (data) {
            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}
            $('.loader').hide();
            var tr = '';
            var total_water_demand_drip = 0;
            var tot_net_water_dem_drip = 0;
            var tot_reduction_dem_drip = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].season_type + '</td><td>' + data[i].crop_category + '</td><td>' + data[i].crop_type + '</td><td>' + data[i].crop_name + '</td>'
                    tr += '<td> ' + data[i].area_irrigation + '</td ><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td></tr>';
                    total_water_demand_drip += parseFloat(data[i].water_demand);
                    tot_net_water_dem_drip += parseFloat(data[i].net_water_demand);
                }
                tot_reduction_dem_drip = parseFloat(total_water_demand_drip - tot_net_water_dem_drip).toFixed(2);

                total_water_demand_drip = parseFloat(total_water_demand_drip).toFixed(2);
                tot_net_water_dem_drip = parseFloat(tot_net_water_dem_drip).toFixed(2);
                tot_reduction_dem_drip = parseFloat(tot_reduction_dem_drip).toFixed(2);

                $('#data_drip').append(tr);
                DemandSide_KharifArray.push(parseFloat(total_water_demand_drip));
                DemandSide_RabiArray.push(parseFloat(tot_net_water_dem_drip));
                DemandSide_SummerArray.push(parseFloat(tot_reduction_dem_drip));
            } else {
                $('#data_drip').append(tr);
                DemandSide_KharifArray.push(0);
                DemandSide_RabiArray.push(0);
                DemandSide_SummerArray.push(0);
            }


            Get_demand_Report_pipe();
        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}

function Get_demand_Report_pipe() {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/SupplySide/Get_demand_summary_pipe',
        data: {},
        success: function (data) {
            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}
            $('.loader').hide();
            var tr = '';
            var total_water_demand_pipe = 0;
            var tot_net_water_dem_pipe = 0;
            var tot_reduction_dem_pipe = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].season_type + '</td><td>' + data[i].crop_category + '</td><td>' + data[i].crop_type + '</td><td>' + data[i].crop_name + '</td>'
                    tr += '<td> ' + data[i].area_irrigation + '</td ><td>' + data[i].gross_water + '</td><td>' + data[i].area_proposed + '</td><td>' + data[i].reduction_in_demand + '</td></tr>';
                    total_water_demand_pipe += parseFloat(data[i].water_demand);
                    tot_net_water_dem_pipe += parseFloat(data[i].net_water_demand);

                }
                $('#data_pipeline').append(tr);
                tot_reduction_dem_pipe = parseFloat(total_water_demand_pipe - tot_net_water_dem_pipe).toFixed(2);

                total_water_demand_pipe = parseFloat(total_water_demand_pipe).toFixed(2);
                tot_net_water_dem_pipe = parseFloat(tot_net_water_dem_pipe).toFixed(2);
                tot_reduction_dem_pipe = parseFloat(tot_reduction_dem_pipe).toFixed(2);

                DemandSide_KharifArray.push(parseFloat(total_water_demand_pipe));
                DemandSide_RabiArray.push(parseFloat(tot_net_water_dem_pipe));
                DemandSide_SummerArray.push(parseFloat(tot_reduction_dem_pipe));
            } else {
                $('#data_pipeline').append(tr);
                DemandSide_KharifArray.push(0);
                DemandSide_RabiArray.push(0);
                DemandSide_SummerArray.push(0);
            }

            Get_demand_Report_crop();
        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}
function Get_demand_Report_crop() {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: "/SupplySide/Fetch_Irrigation_kharif",
        data: {},
        success: function (data) {
            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}
            $('.loader').hide();
            var tr = '';
            var val_kharif = 0;

            var j = 0;
            for (var i = 0; i < data.length; i++) {
                var water_demand = parseFloat(data[i].area) * parseFloat(data[i].gross_water) / 1000;
                tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].season_type + '</td><td>' + data[i].crop_category + '</td><td>' + data[i].crop_type + '</td><td>' + data[i].crop_name + '</td>'
                tr += '<td> ' + data[i].area + '</td ><td>' + data[i].gross_water + '</td><td>' + water_demand + '</td></tr>';

                //if (data[i].Season_change != "" & data[i].Season_change != null) {
                //    ++j;
                //    tr2 += '<tr><td> ' + j + '</td ><td> ' + data[i].Season_change + '</td ><td>' + data[i].crop_category_change + '</td><td>' + data[i].crop_type_change + '</td> ';
                //    tr2 += '<td> ' + data[i].crop_name_change + '</td ><td>' + data[i].area_change + '</td><td>' + data[i].gross_water_change + '</td>';
                //    tr2 += '<td> ' + data[i].water_demand_change + '</td ><td>' + data[i].reduction_gw + '</td></tr > ';
                //}
                var sum_area = parseFloat(data[i].area);
                var sum_waterReq = parseFloat(data[i].gross_water);
                val_kharif += (sum_area * sum_waterReq) / 1000;

            }

            $('#data_crop_original').append(tr);

            /*$('#data_crop_change').append(tr2);*/
            Get_demand_Report_Change_crop(val_kharif);

        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}


function Get_demand_Report_Change_crop(total_water_demand_crop) {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: "/SupplySide/Get_demand_change_crop",
        data: {},
        success: function (data) {
            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}

            $('.loader').hide();
            var tr = '';
            var area1 = 0;
            var water_re1 = 0;

            var j = 0;
            for (var i = 0; i < data.length; i++) {

                //var water_demand = parseFloat(data[i].area) * parseFloat(data[i].gross_water) / 1000;
                tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].season_type + '</td><td>' + data[i].crop_category + '</td><td>' + data[i].crop_type + '</td><td>' + data[i].crop_name + '</td>'
                tr += '<td> ' + data[i].area_ch + '</td ><td>' + data[i].water_req + '</td></tr>';

                //if (data[i].Season_change != "" & data[i].Season_change != null) {
                //    ++j;
                //    tr2 += '<tr><td> ' + j + '</td ><td> ' + data[i].Season_change + '</td ><td>' + data[i].crop_category_change + '</td><td>' + data[i].crop_type_change + '</td> ';
                //    tr2 += '<td> ' + data[i].crop_name_change + '</td ><td>' + data[i].area_change + '</td><td>' + data[i].gross_water_change + '</td>';
                //    tr2 += '<td> ' + data[i].water_demand_change + '</td ><td>' + data[i].reduction_gw + '</td></tr > ';
                //}
                area1 += parseFloat(data[i].area_ch);
                water_re1 += parseFloat(data[i].water_req);
            }
            $('#data_crop_change').append(tr);
            tot_net_water_dem_crop = (parseFloat((parseFloat(area1) * parseFloat(water_re1)) / 1000));
            /*$('#data_crop_change').append(tr2);*/
            var tot_reduction_dem_crop = parseFloat(total_water_demand_crop - tot_net_water_dem_crop).toFixed(2);

            total_water_demand_crop = parseFloat(total_water_demand_crop).toFixed(2);
            tot_net_water_dem_crop = parseFloat(tot_net_water_dem_crop).toFixed(2);
            tot_reduction_dem_crop = parseFloat(tot_reduction_dem_crop).toFixed(2);

            DemandSide_KharifArray.push(parseFloat(total_water_demand_crop));
            DemandSide_RabiArray.push(parseFloat(tot_net_water_dem_crop));
            DemandSide_SummerArray.push(parseFloat(tot_reduction_dem_crop));

            Get_demand_Report_anyother();
        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}

function Get_demand_Report_anyother() {
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: '/SupplySide/Get_demand_summary_anyother',
        data: {},
        success: function (data) {

            //if (data == "Logout") {
            //      window.location = "/Home/LogOut";
            //}
            $('.loader').hide();
            var tr = '';
            var total_water_demand_any = 0;
            var tot_reduction_dem_any = 0;
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {

                    tr += '<tr><td>' + (parseInt(i) + 1) + '</td><td>' + data[i].season_type + '</td><td>' + data[i].crop_category + '</td><td>' + data[i].crop_type + '</td><td>' + data[i].crop_name + '</td>'
                    tr += '<td> ' + data[i].area_irrigation + '</td ><td>' + data[i].gross_water + '</td><td>' + data[i].water_demand + '</td><td>' + data[i].water_save + '</td></tr>';
                    total_water_demand_any += parseFloat(data[i].water_demand);
                    tot_reduction_dem_any += parseFloat(data[i].reduction);
                }
                $('#data_anyother').append(tr);

                total_water_demand_any = parseFloat(total_water_demand_any).toFixed(2);
                tot_reduction_dem_any = parseFloat(tot_reduction_dem_any).toFixed(2);

                DemandSide_KharifArray.push(total_water_demand_any);
                /*DemandSide_RabiArray.push(tot_net_water_dem_any);*/
                DemandSide_SummerArray.push(tot_reduction_dem_any);
            }
            else {
                $('#data_anyother').append(tr);
                DemandSide_KharifArray.push(0);
                /*DemandSide_RabiArray.push(0);*/
                DemandSide_SummerArray.push(0);
            }
            demandside_graph();
        },
        error:
            function (response) {
                console.dir(response)
                //alert("Error: " + response);
            }
    });
}