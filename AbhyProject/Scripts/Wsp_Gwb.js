var Jsondata = "";
$(document).ready(function () {
    $("#myModal").modal('show');
    getdistrictdata();
    $('#listate').hide();
    $('#lidistrict').hide();
    $('#liblock').hide();
    $('#lipanchayat').hide();
    $('#listate1').hide();
    $('#lidistrict1').hide();
    $('#liblock1').hide();
    $('#lipanchayat1').hide();
    $('#lisecuritystate').hide();
    $('#lisecurityDistrict').hide();
    $('#lisecurityBlock').hide();
    $('#lisecurityGram').hide();
    $('#btngeneratereport').click(function () {
        domtoimage.toPng(document.getElementById('downloadpdfdiv'))
            .then(function (blob) {
                var pdf = new jsPDF('10', 'pt', [$('#downloadpdfdiv').width(), $('#downloadpdfdiv').height()]);
                pdf.addImage(blob, 'PNG', 0, 0, $('#downloadpdfdiv').width(), $('#downloadpdfdiv').height());
                pdf.save("Budget Report.pdf");
                that.options.api.optionsChanged();
            });
    });
    $('#btnsecurityreport').click(function () {
        domtoimage.toPng(document.getElementById('generatesecurityreport'))
            .then(function (blob) {
                var pdf = new jsPDF('10', 'pt', [$('#generatesecurityreport').width(), $('#generatesecurityreport').height()]);
                pdf.addImage(blob, 'PNG', 0, 0, $('#generatesecurityreport').width(), $('#generatesecurityreport').height());
                pdf.save("Security Report.pdf");
                that.options.api.optionsChanged();
            });
    });

    $("#wspstate").change(function () {
        if (this.value !== "0") {
            $('#listate').show();
            $('#listate1').show();
            $('#lisecuritystate').show();
            var ddlstatename = $("#wspstate option:selected").text();
            $('#spnWtrBstate').text(ddlstatename);
            $('#spnWtrBstate1').text(ddlstatename);
            $('#spnsecuritystate').text(ddlstatename);
            statevalue = this.value;
            var distid = this.value;
            var distjsondata = Jsondata.filter(m => m.sid == distid);
            $("#wspdist").html("0");
            $("#wspblock").html("0");
            $("#wspblock").prepend($('<option></option>').val("0").html("Select Block"));
            $("#wspgram").html("");
            $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
            $.each(distjsondata, function (i, dist) {
                $.each(dist.abhy_districts, function (j, distval) {
                    $("#wspdist").append($('<option></option>').val(distval.did).html(distval.district_name));
                });
            });
            $("#wspdist").prepend($('<option></option>').val("0").html("Select District"));
            $("#wspdist").val("0");
        }
        else {
            $("#wspdist").html("0");
            $("#wspdist").prepend($('<option></option>').val("0").html("Select District"));
            $("#wspblock").html("0");
            $("#wspblock").prepend($('<option></option>').val("0").html("Select Block"));
            $("#wspgram").html("0");
            $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
        }
    });
    $("#wspdist").change(function () {
        if (this.value !== "0" && statevalue !== "0") {
            $('#lidistrict').show();
            $('#lidistrict1').show();
            $('#lisecurityDistrict').show();
            var ddldistrictname = $("#wspdist option:selected").text();

            $('#spnWtrBdistrict').text(ddldistrictname);
            $('#spnWtrBdistrict1').text(ddldistrictname);
            $('#spnsecuritydistrict').text(ddldistrictname);
            var distjsondata2 = Jsondata.filter(m => m.sid == statevalue);
            var mandjsondata = distjsondata2[0].abhy_districts.filter(m => m.did == this.value);
            $("#wspblock").html("");
            $("#wspgram").html("");
            $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
            $.each(mandjsondata, function (j, mandval) {
                $.each(mandval.abhy_blocks, function (k, mandval2) {
                    $("#wspblock").append($('<option></option>').val(mandval2.bid).html(mandval2.block_name));
                });
            });
            $("#wspblock").prepend($('<option></option>').val("0").html("Select Block"));
            $("#wspblock").val("0");
        }
        else {
            $("#wspblock").html("0");
            $("#wspblock").prepend($('<option></option>').val("0").html("Select Block"));
            $("#wspgram").html("0");
            $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
        }
    });
    $("#wspblock").change(function () {
        if (this.value !== "0" && statevalue !== "0" && $("#wspdist").val() !== "0") {
            $('#liblock').show();
            $('#liblock1').show();
            $('#lisecurityBlock').show();
            var ddlblockname = $("#wspblock option:selected").text();
            $('#spnWtrBblock').text(ddlblockname);
            $('#spnWtrBblock1').text(ddlblockname);
            $('#spnsecurityBlock').text(ddlblockname);

            var distjsondata3 = Jsondata.filter(m => m.sid == statevalue);
            var mandjsondata2 = distjsondata3[0].abhy_districts.filter(m => m.did == $("#wspdist").val());
            var gramjsonata = mandjsondata2[0].abhy_blocks.filter(m => m.bid == this.value);
            $("#wspgram").html("");
            $.each(gramjsonata, function (j, gramval) {
                $.each(gramval.abhy_grampanchayat, function (k, gramval2) {
                    $("#wspgram").append($('<option></option>').val(gramval2.gpid).html(gramval2.gpname));
                });
            });
            $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
            $("#wspgram").val("0");
        }
        else {
            $("#wspgram").html("0");
            $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
        }
    });
    $("#wspgram").change(function () {
        if (this.value !== "0" && statevalue !== "0" && $("#wspdist").val() !== "0" && $("#wspblock").val() !== "0") {
            $('#lipanchayat').show();
            $('#lipanchayat1').show();
            $('#lisecurityGram').show();
            var ddlgpname = $("#wspgram option:selected").text();
            $('#spnWtrBpanchayat').text(ddlgpname);
            $('#spnWtrBpanchayat1').text(ddlgpname);
            $('#spnsecuritygram').text(ddlgpname);
        }
    });
    $('#ddlgwrareaUBY').on('change', function () {
        GetAreaunderlinedby(this.value);
        $('#txtgwrRechargefactor').val('');
    });
    $('#ddlsupply').on('change', function () {
        var ddlsuplyval = $('#ddlsupply option:selected').text();
        if (ddlsuplyval !== "Select Supply Activity") {
            getgplevelsecurityOnchangedata();
        }

    });
    $('#ddldemand').on('change', function () {
        var ddldemandval = $('#ddldemand option:selected').text();
        if (ddldemandval !== "Select Demand Activity") {
            getgplevelsecurityOnchangedata();
        }

    });
});

function getdistrictdata() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_total/getwspJsondata',
        data: '',
        dataType: 'JSON',
        success: function (data) {
            Jsondata = JSON.parse(data);
            $(".loading-container").hide();
            if (Jsondata !== "") {
                $("#wspstate").val("0");
                $("#wspdist").html("0");
                $("#wspdist").prepend($('<option></option>').val("0").html("Select District"));
                $("#wspblock").html("");
                $("#wspblock").prepend($('<option></option>').val("0").html("Select Block"));
                $("#wspgram").html("");
                $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
                $.each(Jsondata, function (i, dist) {
                    $("#wspstate").append($('<option></option>').val(dist.sid).html(dist.statename));
                });
                $("#wspstate").prepend($('<option></option>').val("0").html("Select State"));
                $("#wspstate").val("0");
            }
            else {
                $("#wspstate").html("0");
                $("#wspstate").prepend($('<option></option>').val("0").html("Select State"));
                $("#wspdist").html("0");
                $("#wspdist").prepend($('<option></option>').val("0").html("Select District"));
                $("#wspblock").html("0");
                $("#wspblock").prepend($('<option></option>').val("0").html("Select Block"));
                $("#wspgram").html("0");
                $("#wspgram").prepend($('<option></option>').val("0").html("Select Gram Panchayat"));
            }
        }
    });
}

var SurfaceWater_Rainfall = 0.00;
var SurfaceWater_MiTanks = 0.00;
var SurfaceWater_CheckDams = 0.00;
var SurfaceWater_Reservior = 0.00;
var SurfaceWater_canals = 0.00;
var SurfaceWater_LakesPondstanks = 0.00;
var SurfaceWater_River = 0.00;
var finlreult = 0.00;
var Harvestinres = 0.00;
var Irrigationres = 0.00;
var checkdamres = 0.00;
var Seepagecanelres = 0.00;
var SurfacewaterRecharge = 0.00;
var Gwaterres = 0.00;
var _IrrigationDraft = 0.00;
var _DrinkingDraft = 0.00;
var _DraftIndustry = 0.00;
//Start surfaceWaterRainfall
function getsurfaceWaterRainfall() {
    if ($("#txtsurarea").val() === "") {
        alert('Please Enter Area');
        $("#txtsurarea").focus();
        $('#txtsurValume').val('');
        return false;
    }
    if ($("#txtsurrainafall").val() === "") {
        alert('Please Enter Rainfall');
        $("#txtsurrainafall").focus();
        $('#txtsurValume').val('');
        return false;
    }


    var surfacewarea = $("#txtsurarea").val();
    var surfacewrainfall = $("#txtsurrainafall").val();
    SurfaceWater_Rainfall = parseFloat((surfacewarea * 10000) * surfacewrainfall / 1000).toFixed(2);
    if (SurfaceWater_Rainfall === "NaN") {
        SurfaceWater_Rainfall = 0.00;
        $('#txtsurValume').attr("style", "text-align:center;color:blue;");
        $('#txtsurValume').val(SurfaceWater_Rainfall);
    }
    else {
        $('#txtsurValume').attr("style", "text-align:center;color:blue;");
        $('#txtsurValume').val(SurfaceWater_Rainfall);
    }

}
//End surfaceWaterRainfall

//Start Sufacewatersprings
function getSufacewatersprings() {
    if ($("#txtsurnoofsprings").val() === "") {
        alert('Please Enter Number Of Springs');
        $("#txtsurnoofsprings").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    if ($("#txtsurspringsarea").val() === "") {
        alert('Please Enter Springs Area');
        $("#txtsurspringsarea").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    if ($("#txtsuravgdepth").val() === "") {
        alert('Please Enter Springs Depth');
        $("#txtsuravgdepth").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    if ($("#txtsurspringsdischarge").val() === "") {
        alert('Please Enter Springs Discharge');
        $("#txtsurspringsdischarge").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    var NoofSprings = $("#txtsurnoofsprings").val();
    var springarea = $("#txtsurspringsarea").val();
    var springdepth = $("#txtsuravgdepth").val();
    var springdischarge = $("#txtsurspringsdischarge").val();
    SurfaceWater_MiTanks = parseFloat(NoofSprings * (springarea * 10000) * springdepth - springdischarge).toFixed(2);
    if (SurfaceWater_MiTanks === "NaN") {
        SurfaceWater_MiTanks = 0.00;
        $('#txtsurspringsvalume').attr("style", "text-align:center;color:blue;");
        $('#txtsurspringsvalume').val(SurfaceWater_MiTanks);
    }
    else {
        $('#txtsurspringsvalume').attr("style", "text-align:center;color:blue;");
        $('#txtsurspringsvalume').val(SurfaceWater_MiTanks);
    }
}
//End Sufacewatersprings

//Start SurfaceWaterCapacity 
function getSurwtrCheckdams() {
    if ($("#txtsurcheckdams").val() === "") {
        alert('Please Enter Check Dams');
        $("#txtsurcheckdams").focus();
        $('#txtsurcheckdamsRead').val('');
        return false;
    }
    if ($("#txtsurcheckdamsvalume").val() === "") {
        alert('Please Enter Check Dams Volume');
        $("#txtsurcheckdamsvalume").focus();
        $('#txtsurcheckdamsRead').val('');
        return false;
    }
    if ($("#txtsurcheckdamsdischarge").val() === "") {
        alert('Please Enter Check Dams Discharge');
        $("#txtsurcheckdamsdischarge").focus();
        $('#txtsurcheckdamsRead').val('');
        return false;
    }
    var Noofsurfacewcheckdams = $("#txtsurcheckdams").val();
    var surfacewcapacity = $("#txtsurcheckdamsvalume").val();
    var surfacewchkdamsdis = $("#txtsurcheckdamsdischarge").val();
    SurfaceWater_CheckDams = parseFloat(Noofsurfacewcheckdams * surfacewcapacity - surfacewchkdamsdis).toFixed(2);
    if (SurfaceWater_CheckDams === "NaN") {
        SurfaceWater_CheckDams = 0.00;
        $('#txtsurcheckdamsRead').attr("style", "text-align:center;color:blue;");
        $('#txtsurcheckdamsRead').val(SurfaceWater_CheckDams);
    }
    else {
        $('#txtsurcheckdamsRead').attr("style", "text-align:center;color:blue;");
        $('#txtsurcheckdamsRead').val(SurfaceWater_CheckDams);
    }
}
//End SurfaceWaterCapacity

//Start surfaceWatercanals
function getsurwtrcanals() {
    if ($("#txtsurnoofcanals").val() === "") {
        alert('Please Enter Number of Canals');
        $("#txtsurnoofcanals").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }
    if ($("#txtsurcanalsarea").val() === "") {
        alert('Please Enter Surface Water Canals Area');
        $("#txtsurcanalsarea").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }
    if ($("#txtsurcanalsavgdepth").val() === "") {
        alert('Please Enter Canals Depth');
        $("#txtsurcanalsavgdepth").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }
    if ($("#txtsurcanalsdischarge").val() === "") {
        alert('Please Enter Canals Discharge');
        $("#txtsurcanalsdischarge").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }


    var Noofsurfacewcanals = $("#txtsurnoofcanals").val();
    var Areaofsurfacewcanals = $("#txtsurcanalsarea").val();
    var Depthofsurfacewcanals = $("#txtsurcanalsavgdepth").val();
    var Dischargeofsurfacewcanals = $("#txtsurcanalsdischarge").val();
    SurfaceWater_canals = parseFloat((Noofsurfacewcanals * (Areaofsurfacewcanals * 10000)) * Depthofsurfacewcanals - Dischargeofsurfacewcanals).toFixed(2);
    if (SurfaceWater_canals === "NaN") {
        SurfaceWater_canals = 0.00;
        $('#txtsurcanalsvolume').attr("style", "text-align:center;color:blue;");
        $('#txtsurcanalsvolume').val(SurfaceWater_canals);
    }
    else {
        $('#txtsurcanalsvolume').attr("style", "text-align:center;color:blue;");
        $('#txtsurcanalsvolume').val(SurfaceWater_canals);
    }
}
//End surfaceWatercanals

//Start surfaceWaterreservoir
function getsurwtrReservoirs() {
    if ($("#txtsurnoofreservoirs").val() === "") {
        alert('Please Enter Reservior');
        $("#txtsurnoofreservoirs").focus();
        $('#txtsurreservoirsvolumeread').val('');
        return false;
    }
    if ($("#txtsurreservoirsvolume").val() === "") {
        alert('Please Caliculate the Reservior Value');
        $("#txtsurreservoirsvolume").focus();
        $('#txtsurreservoirsvolumeread').val('');
        return false;
    }
    if ($("#txtsurreservoirsdischarge").val() === "") {
        alert('Please Caliculate the Reservior Value');
        $("#txtsurreservoirsdischarge").focus();
        $('#txtsurreservoirsvolumeread').val('');
        return false;
    }


    var Noofreservoirs = $("#txtsurnoofreservoirs").val();
    var reservoirsval = $("#txtsurreservoirsvolume").val();
    var reservoirsdis = $("#txtsurreservoirsdischarge").val();
    SurfaceWater_Reservior = parseFloat(Noofreservoirs * reservoirsval - reservoirsdis).toFixed(2);
    if (SurfaceWater_Reservior === "NaN") {
        SurfaceWater_Reservior = 0.00;
        $('#txtsurreservoirsvolumeread').attr("style", "text-align:center;color:blue;");
        $('#txtsurreservoirsvolumeread').val(SurfaceWater_Reservior);
    }
    else {
        $('#txtsurreservoirsvolumeread').attr("style", "text-align:center;color:blue;");
        $('#txtsurreservoirsvolumeread').val(SurfaceWater_Reservior);
    }
}
//End surfaceWaterreservoir

//Start surfaceWaterlakespondstanks
function getsurwtrLPT() {
    if ($("#txtsurLPT").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks');
        $("#txtsurLPT").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    if ($("#txtsurLPTatrea").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks Area');
        $("#txtsurLPTatrea").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    if ($("#txtsurLPTAvgdepth").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks Depth');
        $("#txtsurLPTAvgdepth").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    if ($("#txtsurLPTDischarge").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks Discharge');
        $("#txtsurLPTDischarge").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    var Noofsurfacewlakespondstanks = $("#txtsurLPT").val();
    var surfacewlakespondstanksarea = $("#txtsurLPTatrea").val();
    var surfacewlakespondstanksdepth = $("#txtsurLPTAvgdepth").val();
    var surfacewlakespondstanksdischarge = $("#txtsurLPTDischarge").val();
    SurfaceWater_LakesPondstanks = parseFloat(Noofsurfacewlakespondstanks * (surfacewlakespondstanksarea * 10000) * surfacewlakespondstanksdepth - surfacewlakespondstanksdischarge).toFixed(2);
    if (SurfaceWater_LakesPondstanks === "NaN") {
        SurfaceWater_LakesPondstanks = 0.00;
        $('#txtsurLPTvolume').attr("style", "text-align:center;color:blue;");
        $('#txtsurLPTvolume').val(SurfaceWater_LakesPondstanks);
    }
    else {
        $('#txtsurLPTvolume').attr("style", "text-align:center;color:blue;");
        $('#txtsurLPTvolume').val(SurfaceWater_LakesPondstanks);
    }
}
//End surfaceWaterlakespondstanks

//Start surfaceWaterrivers
function getsurwtrRivers() {
    if ($("#txtsurnoofrivers").val() === "") {
        alert('Please Enter Number of Rivers');
        $("#txtsurnoofrivers").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    if ($("#txtsurriversarea").val() === "") {
        alert('Please Enter Rivers Area');
        $("#txtsurriversarea").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    if ($("#txtsurriveravgdepth").val() === "") {
        alert('Please Enter Rivers Depth');
        $("#txtsurriveravgdepth").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    if ($("#txtsurriverdischarge").val() === "") {
        alert('Please Enter Rivers Discharge');
        $("#txtsurriverdischarge").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    var Noofsurfacewrivers = $("#txtsurnoofrivers").val();
    var surfacewriversarea = $("#txtsurriversarea").val();
    var surfacewriversdepth = $("#txtsurriveravgdepth").val();
    var surfacewriversdischarge = $("#txtsurriverdischarge").val();
    SurfaceWater_River = parseFloat((Noofsurfacewrivers * (surfacewriversarea * 10000)) * surfacewriversdepth - surfacewriversdischarge).toFixed(2);
    if (SurfaceWater_River === "NaN") {
        SurfaceWater_River = 0.00;
        $('#txtsurriverVolume').attr("style", "text-align:center;color:blue;");
        $('#txtsurriverVolume').val(SurfaceWater_River);
    }
    else {
        $('#txtsurriverVolume').attr("style", "text-align:center;color:blue;");
        $('#txtsurriverVolume').val(SurfaceWater_River);
    }
}
//End surfaceWaterrivers



function GetAreaunderlinedby(val) {
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Wsp_total/getareaunderlinedby",
        data: "{'AreaUnderLinedBy':'" + val + "'}",
        dataType: 'JSON',
        success: function (response) {
            if (response[0]["RechargeFactor"] !== "" && response[0]["RechargeFactor"] !== null) {
                $('#txtgwrRechargefactor').val(response[0]["RechargeFactor"]);
                getgwrrainfall();
            }
            else {
                $('#txtgwrRechargefactor').val(0);
            }
        },
        error: function (a) { }
    });
}

//Start Of The Rainfall
function getgwrrainfall() {

    if ($("#txtgwrarea").val() === "") {
        alert('Please Enter Area');
        $("#txtgwrarea").focus();
        $('#txtgwrrecharge').val('');
        return false;
    }
    if ($("#txtgwrrainfall").val() === "") {
        alert('Please Enter RainFall');
        $("#txtgwrrainfall").focus();
        $('#txtgwrrecharge').val('');
        return false;
    }

    //if ($("#ddlgwrareaUBY").val() === "") {
    //    alert('Please Select Area UnderLine By');
    //    $("#ddlgwrareaUBY").focus();
    //    $('#txtgwrrecharge').val('');
    //    return false;
    //}
    //if ($('#txtgwrRechargefactor').val() === "") {
    //    alert('Please Select Area UnderLine By');
    //    $("#AreaUnderLinedBy").focus();
    //    $('#txtgwrRechargefactor').val('');
    //    return false;
    //}
    var ddlareaunderlinedby = $("#ddlgwrareaUBY").val();
    var area = $("#txtgwrarea").val();
    var rainfall = $("#txtgwrrainfall").val();
    var Ref = $('#txtgwrRechargefactor').val();
    finlreult = parseFloat((parseFloat(area * 10000) * parseFloat(rainfall / 1000) * parseFloat(Ref)) / 100).toFixed(2);
    $('#txtgwrrecharge').val('');
    if (finlreult === "NaN") {
        finlreult = 0.00;
        $('#txtgwrrecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrrecharge').val(finlreult);
    }
    else {
        $('#txtgwrrecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrrecharge').val(finlreult);
    }
}
//End Of The Rainfall

//Start Of the Harvesting structure
function getHarvestingStructure() {
    if ($("#txtgwrHSnetUWTW").val() === "") {
        alert('Please Enter Net Area Under Well/Tube Well');
        $("#txtgwrHSnetUWTW").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }
    if ($("#txtgwrHSnetareaUcanals").val() === "") {
        alert('Please Enter Net Area Under Canals');
        $("#txtgwrHSnetareaUcanals").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }
    if ($("#txtgwrHSnetareaULPT").val() === "") {
        alert('Please Enter Net Area Under Irrigation Tanks');
        $("#txtgwrHSnetareaULPT").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }
    if ($("#txtgwrHSnetareaUchkdamsnalabunds").val() === "") {
        alert('Please Enter Net Area Under Check Dams And Nala Bunds');
        $("#txtgwrHSnetareaUchkdamsnalabunds").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }

    var NetAreaUnderWellTubeWell = $("#txtgwrHSnetUWTW").val();
    var NetAreaUnderCanals = $("#txtgwrHSnetareaUcanals").val();
    var NetAreaUnderIrrigationTanks = $('#txtgwrHSnetareaULPT').val();
    var NetAreaUnderCheckDamsNalaBunds = $('#txtgwrHSnetareaUchkdamsnalabunds').val();
    Harvestinres = parseFloat((parseFloat(NetAreaUnderWellTubeWell) + parseFloat(NetAreaUnderCanals) + parseFloat(NetAreaUnderIrrigationTanks) + parseFloat(NetAreaUnderCheckDamsNalaBunds)) * 10000).toFixed(2);
    if (Harvestinres === "NaN") {
        Harvestinres = 0.00;
        $('#txtgwrHSRecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrHSRecharge').val(Harvestinres);
    }
    else {
        $('#txtgwrHSRecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrHSRecharge').val(Harvestinres);
    }

}
//End Of the Harvesting Structure

//Start Irrigation
function getgwrirrigation() {
    if ($("#txtgwrITPmSarea").val() === "") {
        alert('Please Enter Max Submergence Area ');
        $("#txtgwrITPmSarea").focus();
        $('#txtgwrITPrecharge').val("");
        return false;
    }
    if ($("#txtgwrITPrechargerate").val() === "") {
        alert('Please Enter Irrigation Recharge Rate');
        $("#txtgwrITPrechargerate").focus();
        $('#txtgwrITPrecharge').val("");
        return false;
    }
    if ($("#txtgwrITPmSarea").val() === "") {
        alert('Please Enter Days of Submergence');
        $("#txtgwrITPmSarea").focus();
        $('#txtgwrITPrecharge').val("");
        return false;
    }

    var Maxsubmergencearea = $("#txtgwrITPmSarea").val();
    var _RechargeRate = $('#txtgwrITPrechargerate').val();
    var Daysofsubmergence = $('#txtgwrITPmSarea').val();
    Irrigationres = parseFloat(parseFloat(Maxsubmergencearea * 10000) * parseFloat(Daysofsubmergence) * parseFloat(_RechargeRate)).toFixed(2);
    if (Irrigationres === "NaN") {
        Irrigationres = 0.00;
        $('#txtgwrITPrecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrITPrecharge').val(Irrigationres);
    }
    else {
        $('#txtgwrITPrecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrITPrecharge').val(Irrigationres);
    }
}
//End Irrigation

//Start CheckDam
function getgwrcheckdams() {
    if ($("#txtgwrChkdamsavgdepthofwater").val() === "") {
        alert('Please Enter Recharge Rate');
        $("#txtgwrChkdamsavgdepthofwater").focus();
        $('#txtgwrChkdamsrecharge').val("");
        return false;
    }
    if ($("#txtgwrChkdamsMsArea").val() === "") {
        alert('Please Enter Max Submergence Area');
        $("#txtgwrChkdamsMsArea").focus();
        $('#txtgwrChkdamsrecharge').val("");
        return false;
    }
    //if ($("#txtRechargerate").val() === "" || $("#txtRechargerate").val() === "0") {
    //    alert('Please Enter Average Depth Of Water');
    //    $("#txtRechargerate").focus();
    //    $('#txtcheckdam').val("");
    //    return false;
    //}
    if ($("#txtgwrChkdamsnooffillings").val() === "") {
        alert('Please Enter Number of Fillings');
        $("#txtgwrChkdamsnooffillings").focus();
        $('#txtgwrChkdamsrecharge').val("");
        return false;
    }

    var Watersubmergencearea = $("#txtgwrChkdamsMsArea").val();
    var Averagedepthofwater = $("#txtgwrChkdamsavgdepthofwater").val();
    var Numberoffillings = $('#txtgwrChkdamsnooffillings').val();
    checkdamres = parseFloat(parseFloat(Watersubmergencearea * 10000) * (parseFloat(Averagedepthofwater) * parseFloat(Numberoffillings))).toFixed(2);
    if (checkdamres === "NaN") {
        checkdamres = 0.00;
        $('#txtgwrChkdamsrecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrChkdamsrecharge').val(checkdamres);
    }
    else {
        $('#txtgwrChkdamsrecharge').attr("style", "text-align:center;color:blue;");
        $('#txtgwrChkdamsrecharge').val(checkdamres);
    }

}
//End CheckDam

//start Seepagecanel ddls pending
function getgwrSeepagecanel() {
    if ($("#txtgwrSTCanalsLofthecansl").val() === "") {
        alert('Please Enter Length of the Canal');
        $("#txtgwrSTCanalsLofthecansl").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }
    if ($("#txtgwrSTCanalsSeepageFactor").val() === "") {
        alert('Please Enter Seepage Factor');
        $("#txtgwrSTCanalsSeepageFactor").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }
    if ($("#txtgwrSTCanalsFlowingdays").val() === "") {
        alert('Please Enter Flowing Days of Canals');
        $("#txtgwrSTCanalsFlowingdays").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }
    if ($("#txtgwrSTCanalsAvgWtPerimeter").val() === "") {
        alert('Please Enter Average Wetted Perimater');
        $("#txtgwrSTCanalsAvgWtPerimeter").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }

    var Lengthofthecanal = $("#txtgwrSTCanalsLofthecansl").val();
    var SeepageFactor = $("#txtgwrSTCanalsSeepageFactor").val();
    var FlowingDaysofcanal = $('#txtgwrSTCanalsFlowingdays').val();
    var AverageWettedPerimeter = $('#txtgwrSTCanalsAvgWtPerimeter').val();
    // var Seepagecanelres = (((Lengthofthecanal * SeepageFactor * FlowingDaysofcanal * AverageWettedPerimeter) / 1000000) * 10000);
    Seepagecanelres = parseFloat((parseFloat(Lengthofthecanal) * parseFloat(SeepageFactor) * parseFloat(FlowingDaysofcanal) * parseFloat(AverageWettedPerimeter) / 1000000) * 10000).toFixed(2);
    if (Seepagecanelres === "NaN") {
        Seepagecanelres = 0.00;
        $('#txtgwrSTCanalsRechargeread').attr("style", "text-align:center;color:blue;");
        $('#txtgwrSTCanalsRechargeread').val(Seepagecanelres);
    }
    else {
        $('#txtgwrSTCanalsRechargeread').attr("style", "text-align:center;color:blue;");
        $('#txtgwrSTCanalsRechargeread').val(Seepagecanelres);
    }

}
//end Seepagecanel

//start Surface Water Coloumns not Matched pending
function getgwrsurfacewater() {
    if ($("#txtgwrSWIDDatOutlet").val() === "") {
        alert('Please Enter Designed Discharge Outlet');
        $("#txtgwrSWIDDatOutlet").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtirrigationwaterreleaseatoutlet").val() === "") {
        alert('Please Enter Water Released at OutLet');
        $("#txtirrigationwaterreleaseatoutlet").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIcommandarea").val() === "") {
        alert('Please Enter Command Area');
        $("#txtgwrSWIcommandarea").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIunderpaddy").val() === "") {
        alert('Please Enter Paddy');
        $("#txtgwrSWIunderpaddy").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIundernonpaddy").val() === "") {
        alert('Please Enter Non Paddy');
        $("#txtgwrSWIundernonpaddy").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }

    var gwrSWIwtrReleasedOutlet1 = $("#txtgwrSWIwtrReleasedOutlet").val();
    var gwrSWIunderpaddy1 = $("#txtgwrSWIunderpaddy").val();
    var gwrSWIundernonpaddy1 = $("#txtgwrSWIundernonpaddy").val();
    //var DesigneddischargeatOutlet = (parseFloat(AreaIrrigated * 10000) / 4);
    //var WaterreleasedatOutlet = parseFloat(parseFloat(DesigneddischargeatOutlet) * parseFloat(SeepageFactor1));
    //SurfacewaterRecharge = parseFloat(parseFloat(WaterreleasedatOutlet) * 10000).toFixed(2);

    SurfacewaterRecharge = parseFloat(parseFloat(gwrSWIwtrReleasedOutlet1) * parseFloat(parseFloat(gwrSWIunderpaddy1) + parseFloat(gwrSWIundernonpaddy1)) * 10000).toFixed(2);
    if (SurfacewaterRecharge === "NaN") {
        SurfacewaterRecharge = 0.00;
        $('#txtgwrSWIRechargeRead').attr("style", "text-align:center;color:blue;");
        $('#txtgwrSWIRechargeRead').val(SurfacewaterRecharge);
    }
    else {
        $('#txtgwrSWIRechargeRead').attr("style", "text-align:center;color:blue;");
        $('#txtgwrSWIRechargeRead').val(SurfacewaterRecharge);
    }

}
//End Surface Water

//start Ground Water Coloumns not Matched pending
function getgwrGroundWater() {
    if ($("#txtgwrGWIgrossgwrdraftirrigation").val() === "") {
        alert('Please Enter Gross Ground Water Draft For Irrigation');
        $("#txtgwrGWIgrossgwrdraftirrigation").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIgwlnoncommandarea").val() === "") {
        alert('Please Enter Non Command Area Irrigation');
        $("#txtgwrGWIgwlnoncommandarea").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIirriareaunderpaddy").val() === "") {
        alert('Please Enter Irrigated Area Under Paddy');
        $("#txtgwrGWIirriareaunderpaddy").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIirriareaundernonpaddy").val() === "") {
        alert('Please Enter Irrigated Area Under Non Paddy');
        $("#txtgwrGWIirriareaundernonpaddy").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    var gwdrfatforirrigation = $('#txtgwrGWIgrossgwrdraftirrigation').val();
    var CommandareaIrrigation = $("#txtgwrGWIirriareaunderpaddy").val();
    var NonCommandareaIrrigation = $("#txtgwrGWIirriareaundernonpaddy").val();
    //var CommandareaReturnflow = (parseFloat(CommandareaIrrigation) * 0.15);
    //var NonCommandareaReturnflow = (parseFloat(NonCommandareaIrrigation) * 0.15);
    //Gwaterres = parseFloat((parseFloat(CommandareaReturnflow) + parseFloat(NonCommandareaReturnflow)) * 10000).toFixed(2);
    // seepage depends on = Canal type & Soil type; canal type = drop down
    Gwaterres = parseFloat(parseFloat(gwdrfatforirrigation) * parseFloat(parseFloat(CommandareaIrrigation) + parseFloat(NonCommandareaIrrigation)) * 10000).toFixed(2);
    if (Gwaterres === "NaN") {
        Gwaterres = 0.00;
        $('#txtgwrGWIrechargeread1').attr("style", "text-align:center;color:blue;");
        $('#txtgwrGWIrechargeread1').val(Gwaterres);
    }
    else {
        $('#txtgwrGWIrechargeread1').attr("style", "text-align:center;color:blue;");
        $('#txtgwrGWIrechargeread1').val(Gwaterres);
    }
}
//End Ground Water

//start Draft irrigation
function getdraftirrigation() {
    if ($("#txtdriDpHoursordays").val() === "") {
        alert('Please Enter Daily Pumping Days');
        $("#txtdriDpHoursordays").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    if ($("#txtDritotnoofPLCR").val() === "") {
        alert('Please Enter Total Number Of Functional Wells');
        $("#txtDritotnoofPLCR").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    if ($("#txtDritotnoofPumpingdays").val() === "") {
        alert('Please Enter Total Number of Days');
        $("#txtDritotnoofPumpingdays").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    if ($("#txtDriAvgpumpingRate").val() === "") {
        alert('Please Enter Average Pumping Rate');
        $("#txtDriAvgpumpingRate").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    var _IrrigationDraft = 0.00;
    var TotalNumberoffunctionalwellsforirrigation = $("#txtDritotnoofPLCR").val();
    var AvgofDailyPumping = $("#txtdriDpHoursordays").val();
    var TotalNoofpumpingdays = $('#txtDritotnoofPumpingdays').val();
    var AvgWellDischarge = $('#txtDriAvgpumpingRate').val();
    // _IrrigationDraft = parseFloat(parseFloat(AvgofDailyPumping) * parseFloat(TotalNumberoffunctionalwellsforirrigation) * parseFloat(TotalNoofpumpingdays * 40) * parseFloat(AvgWellDischarge)).toFixed(2);
    _IrrigationDraft = parseFloat(parseFloat(AvgofDailyPumping) * parseFloat(TotalNumberoffunctionalwellsforirrigation) * parseFloat(TotalNoofpumpingdays) * parseFloat(AvgWellDischarge)).toFixed(2);
    if (_IrrigationDraft === "NaN") {
        _IrrigationDraft = 0.00;
        $('#txtDriDraft').attr("style", "text-align:center;color:blue;");
        $('#txtDriDraft').val(_IrrigationDraft);
    }
    else {
        $('#txtDriDraft').attr("style", "text-align:center;color:blue;");
        $('#txtDriDraft').val(_IrrigationDraft);
    }

}
//End Draft irrigation

//start Draft Drinking
function getDraftDrinking() {
    if ($("#txtDomPurtotpopulation").val() === "") {
        alert('Please Enter Total Number of Peoples');
        $("#txtDomPurtotpopulation").focus();
        $('#txtDomPurRead').val("");
        return false;
    }
    if ($("#txtDomPurtotnoofbuffalos").val() === "") {
        alert('Please Enter Total Number of Cows And Buffoles');
        $("#txtDomPurtotnoofbuffalos").focus();
        $('#txtDomPurRead').val("");
        return false;
    }
    if ($("#txtDomPurtotnoofcattle").val() === "") {
        alert('Please Enter Total Number of Bullocks');
        $("#txtDomPurtotnoofcattle").focus();
        $('#txtDomPurRead').val("");
        return false;
    }
    if ($("#txtDomPurtotnoofGoatsSheeps").val() === "") {
        alert('Please Enter Total Number of Seeps And Goats');
        $("#txtDomPurtotnoofGoatsSheeps").focus();
        $('#txtDomPurRead').val("");
        return false;
    }

    var _DrinkingDraft = 0.00;
    var Totalpopulation = $("#txtDomPurtotpopulation").val();
    var totnumofcowsandbuffoles = $("#txtDomPurtotnoofbuffalos").val();
    var totnumofbullocks = $('#txtDomPurtotnoofcattle').val();
    var totnumofsheepandgoat = $('#txtDomPurtotnoofGoatsSheeps').val();

    //var WaterRequirementforpeopleat55litreforday = parseFloat(parseFloat(Totalpopulation) * 55);
    //var WaterRequirementforCowsandBuffalosat50litreforday = parseFloat(parseFloat(totnumofcowsandbuffoles) * 50);
    //var WaterRequirementforBullocksat30litrforforday = parseFloat(parseFloat(totnumofbullocks) * 30);
    //var WaterRequirementforgoatsandsheepat10litreforday = parseFloat(parseFloat(totnumofsheepandgoat) * 10);
    //_DrinkingDraft = parseFloat(((parseFloat(WaterRequirementforpeopleat55litreforday) + parseFloat(WaterRequirementforCowsandBuffalosat50litreforday) + parseFloat(WaterRequirementforBullocksat30litrforforday) + parseFloat(WaterRequirementforgoatsandsheepat10litreforday)) * 365) / 1000).toFixed(2);
    _DrinkingDraft = parseFloat(((parseFloat(Totalpopulation) + parseFloat(totnumofcowsandbuffoles) + parseFloat(totnumofbullocks) + parseFloat(totnumofsheepandgoat)) * 365) / 1000).toFixed(2);
    if (_DrinkingDraft === "NaN") {
        _DrinkingDraft = 0.00;
        $('#txtDomPurRead').attr("style", "text-align:center;color:blue;");
        $('#txtDomPurRead').val(_DrinkingDraft);
    }
    else {
        $('#txtDomPurRead').attr("style", "text-align:center;color:blue;");
        $('#txtDomPurRead').val(_DrinkingDraft);
    }

}
//End Draft Drinking

//start Draft Industries Surface wtr in tanks coloumn dought
function getDraftIndustries() {
    if ($("#txtDrForindustrySwtIntake").val() === "") {
        alert('Please Enter Surface Water In Tanks');
        $("#txtDrForindustrySwtIntake").focus();
        $('#txtDrForindustryRead').val("");
        return false;
    }
    if ($("#txtDrForindustryGwtrintake").val() === "") {
        alert('Please Enter Ground Water In Tanks');
        $("#txtDrForindustryGwtrintake").focus();
        $('#txtDrForindustryRead').val("");
        return false;
    }
    if ($("#txtDrForindustrytotnoofprodudays").val() === "") {
        alert('Please Enter Number Of Production Days');
        $("#txtDrForindustrytotnoofprodudays").focus();
        $('#txtDrForindustryRead').val("");
        return false;
    }

    var _DraftIndustry = 0.00;
    var GWinTanks = $("#txtDrForindustryGwtrintake").val();
    var NoofProductiondays = $("#txtDrForindustrytotnoofprodudays").val();
    var industryproddays = $("#txtDrForindustrySwtIntake").val();
    //_DraftIndustry = parseFloat(parseFloat(GWinTanks) * parseFloat(NoofProductiondays) * parseFloat(industryproddays)).toFixed(2);
    _DraftIndustry = parseFloat(parseFloat(industryproddays) + parseFloat(GWinTanks) * parseFloat(NoofProductiondays)).toFixed(2);
    if (_DraftIndustry === "NaN") {
        _DraftIndustry = 0.00;
        $('#txtDrForindustryRead').attr("style", "text-align:center;color:blue;");
        $('#txtDrForindustryRead').val(_DraftIndustry);
    }
    else {
        $('#txtDrForindustryRead').attr("style", "text-align:center;color:blue;");
        $('#txtDrForindustryRead').val(_DraftIndustry);
    }
}
//End Draft Industries


var insertid = "0";
function getgpleveldata() {
    var ddlstate = "";
    if ($('#wspstate option:selected').text() === "Select State") {
        alert('Please Select State');
    }
    else {
        ddlstate = $('#wspstate option:selected').text();
    }

    var ddldistrict = $('#wspdist option:selected').text();
    var ddlblock = $('#wspblock option:selected').text();
    var ddlgram = $('#wspgram option:selected').text();
    HouseholdsDetails(ddlstate, ddldistrict, ddlblock, ddlgram); Getting_water_budget_info(ddlstate, ddldistrict, ddlblock, ddlgram);
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_total/getgpsleveldata',
        data: '{"state": "' + ddlstate + '", "district":"' + ddldistrict + '","block":"' + ddlblock + '","gp":"' + ddlgram + '","insertid1":"' + insertid + '"}',
        dataType: 'JSON',
        success: function (data) {
            var i = 0, s = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, a = 0, b = 0, c = 0, a1 = 0, b1 = 0, c1 = 0, d1 = 0, e1 = 0, f1 = 0, g1 = 0, h1 = 0, i1 = 0, j1 = 0, k1 = 0, l1 = 0, m1 = 0, n1 = 0, o1 = 0, p1 = 0, q1 = 0, r1 = 0, s1 = 0, t1 = 0, u1 = 0, v1 = 0, w1 = 0, x1 = 0, y1 = 0, z1 = 0, aa1 = 0, bb1 = 0, cc1 = 0, dd1 = 0, ee1 = 0, ff1 = 0;
            var avgtxtsurarea = 0, avgtxtsurrainafall = 0, avgtxtsurnoofsprings = 0, avgtxtsurspringsarea = 0, avgtxtsurspringsdischarge = 0, avgtxtsurcheckdams = 0, avgtxtsurcheckdamsvalume = 0, avgtxtsurcheckdamsdischarge = 0, avgtxtsurnoofcanals = 0,
                avgtxtsurcanalsarea = 0, avgtxtsurcanalsdischarge = 0, avgtxtsurreservoirsvolume = 0, avgtxtsurreservoirsdischarge = 0, avgtxtsurLPT = 0,
                avgtxtsurLPTatrea = 0, avgtxtsurLPTDischarge = 0, avgtxtsurnoofrivers = 0, avgtxtsurriversarea = 0, avgtxtsurriverdischarge = 0, avgtxtgwrarea = 0,
                avgtxtgwrrainfall = 0, avgtxtgwrHSnetUWTW = 0, avgtxtgwrHSnetareaUcanals = 0, avgtxtgwrHSnetareaULPT = 0, avgtxtgwrHSnetareaUchkdamsnalabunds = 0, avgtxtgwrITPmSarea = 0,
                avgtxtgwrITPrechargerate = 0, avgtxtITPdaysofsubmergence = 0, avgtxtgwrChkdamsMsArea = 0, avgtxtgwrChkdamsavgdepthofwater = 0, avgtxtgwrChkdamsnooffillings = 0,
                avgtxtgwrSTCanalsLofthecansl = 0, avgtxtgwrSTCanalsDischarge = 0, avgtxtgwrSTCanalsSeepageFactor = 0, avgtxtgwrSTCanalsFlowingdays = 0, avgtxtgwrSTCanalsAvgWtPerimeter = 0,
                avgtxtgwrSWIDDatOutlet = 0, avgtxtgwrSWInoofdayswtrisrelOutlet = 0, avgtxtgwrSWIwtrReleasedOutlet = 0, avgtxtgwrSWIcommandarea = 0, avgtxtgwrSWIunderpaddy = 0, avgtxtgwrSWIundernonpaddy = 0,
                avgtxtgwrGWIgrossgwrdraftirrigation = 0, avgtxtgwrGWIgwlnoncommandarea = 0, avgtxtgwrGWIirriareaunderpaddy = 0, avgtxtgwrGWIirriareaundernonpaddy = 0,
                avgtxtdriDpHoursordays = 0, avgtxtDritotnoofPLCR = 0, avgtxtDritotnoofPumpingdays = 0, avgtxtDriAvgpumpingRate = 0, avgtxtDomPurtotpopulation = 0, avgtxtDomPurtotnoofcattle = 0,
                avgtxtDomPurtotnoofbuffalos = 0, avgtxtDomPurtotnoofGoatsSheeps = 0, avgtxtDrForindustrySwtIntake = 0, avgtxtDrForindustryGwtrintake = 0, avgtxtDrForindustrytotnoofprodudays = 0;

            var Jsondata1 = data;
            if (Jsondata1 !== "NoData") {
                $('#myModal').modal('hide');
                for (i = 0; i < Jsondata1.length; i++) {
                    if (parseFloat(Jsondata1[i]["Springs_Total_Geographical_Area_in_Hectares"]) !== 0) {
                        s = s + 1;
                        avgtxtsurarea = parseFloat(parseFloat(avgtxtsurarea) + parseFloat(Jsondata1[i]["Springs_Total_Geographical_Area_in_Hectares"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["AvgOfSurfaceWaterRainfall"]) !== 0) {
                        d = d + 1;
                        avgtxtsurrainafall = parseFloat(parseFloat(avgtxtsurrainafall) + parseFloat(Jsondata1[i]["AvgOfSurfaceWaterRainfall"])).toFixed(2);
                    }

                    if (parseFloat(Jsondata1[i]["Spring_Functioning_All_round_the_year"]) !== 0) {
                        e = e + 1;
                        avgtxtsurnoofsprings = parseFloat(parseFloat(avgtxtsurnoofsprings) + parseFloat(Jsondata1[i]["Spring_Functioning_All_round_the_year"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Waterfall_Area_in_Hectares"]) !== 0) {
                        f = f + 1;
                        avgtxtsurspringsarea = parseFloat(parseFloat(avgtxtsurspringsarea) + parseFloat(Jsondata1[i]["Waterfall_Area_in_Hectares"])).toFixed(2);
                    }
                    //springs depth here
                    if (parseFloat(Jsondata1[i]["springs_Discharge"]) !== 0) {
                        g = g + 1;
                        avgtxtsurspringsdischarge = parseFloat(parseFloat(avgtxtsurspringsdischarge) + parseFloat(Jsondata1[i]["springs_Discharge"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["No_Of_CheckDams"]) !== 0) {
                        h = h + 1;
                        avgtxtsurcheckdams = parseFloat(parseFloat(avgtxtsurcheckdams) + parseFloat(Jsondata1[i]["No_Of_CheckDams"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["CheckDams_Capacity"]) !== 0) {
                        j = j + 1;
                        avgtxtsurcheckdamsvalume = parseFloat(parseFloat(avgtxtsurcheckdamsvalume) + parseFloat(Jsondata1[i]["CheckDams_Capacity"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["checkdams_Discharge"]) !== 0) {
                        k = k + 1;
                        avgtxtsurcheckdamsdischarge = parseFloat(parseFloat(avgtxtsurcheckdamsdischarge) + parseFloat(Jsondata1[i]["checkdams_Discharge"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Canals_River_Canal_Functioning_All_round_the_year"]) !== 0) {
                        l = l + 1;
                        avgtxtsurnoofcanals = parseFloat(parseFloat(avgtxtsurnoofcanals) + parseFloat(Jsondata1[i]["Canals_River_Canal_Functioning_All_round_the_year"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Canals_Area_in_Hectares"]) !== 0) {
                        m = m + 1;
                        avgtxtsurcanalsarea = parseFloat(parseFloat(avgtxtsurcanalsarea) + parseFloat(Jsondata1[i]["Canals_Area_in_Hectares"])).toFixed(2);
                    }
                    //chekdams depth here
                    if (parseFloat(Jsondata1[i]["canals_Discharge"]) !== 0) {
                        n = n + 1;
                        avgtxtsurcanalsdischarge = parseFloat(parseFloat(avgtxtsurcanalsdischarge) + parseFloat(Jsondata1[i]["canals_Discharge"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Reservoir_Name"]) !== 0 && Jsondata1[i]["Reservoir_Name"] !== "" && Jsondata1[i]["Reservoir_Name"] !== null) {
                        o = o + 1;
                    }
                    if (parseFloat(Jsondata1[i]["Current_Live_Storage"]) !== 0) {
                        p = p + 1;
                        avgtxtsurreservoirsvolume = parseFloat(parseFloat(avgtxtsurreservoirsvolume) + parseFloat(Jsondata1[i]["Current_Live_Storage"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["reservoir_Discharge"]) !== 0) {
                        q = q + 1;
                        avgtxtsurreservoirsdischarge = parseFloat(parseFloat(avgtxtsurreservoirsdischarge) + parseFloat(Jsondata1[i]["reservoir_Discharge"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Tank_Pond_Lake_Functioning_All_round_the_year"]) !== 0) {
                        r = r + 1;
                        avgtxtsurLPT = parseFloat(parseFloat(avgtxtsurLPT) + parseFloat(Jsondata1[i]["Tank_Pond_Lake_Functioning_All_round_the_year"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Tanks_Lakes_Area_in_Hectares"]) !== 0) {
                        t = t + 1;
                        avgtxtsurLPTatrea = parseFloat(parseFloat(avgtxtsurLPTatrea) + parseFloat(Jsondata1[i]["Tanks_Lakes_Area_in_Hectares"])).toFixed(2);
                    }
                    //LPT Depth here
                    if (parseFloat(Jsondata1[i]["lakespondstanks_Discharge"]) !== 0) {
                        u = u + 1;
                        avgtxtsurLPTDischarge = parseFloat(parseFloat(avgtxtsurLPTDischarge) + parseFloat(Jsondata1[i]["lakespondstanks_Discharge"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["River_Canal_Functioning_All_round_the_year"]) !== 0) {
                        v = v + 1;
                        avgtxtsurnoofrivers = parseFloat(parseFloat(avgtxtsurnoofrivers) + parseFloat(Jsondata1[i]["River_Canal_Functioning_All_round_the_year"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["River_Canals_Area_in_Hectares"]) !== 0) {
                        w = w + 1;
                        avgtxtsurriversarea = parseFloat(parseFloat(avgtxtsurriversarea) + parseFloat(Jsondata1[i]["River_Canals_Area_in_Hectares"])).toFixed(2);
                    }
                    //river depth here
                    if (parseFloat(Jsondata1[i]["river_Discharge"]) !== 0) {
                        x = x + 1;
                        avgtxtsurriverdischarge = parseFloat(parseFloat(avgtxtsurriverdischarge) + parseFloat(Jsondata1[i]["river_Discharge"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_Rainfall_Area"]) !== 0) {
                        y = y + 1;
                        avgtxtgwrarea = parseFloat(parseFloat(avgtxtgwrarea) + parseFloat(Jsondata1[i]["Gwr_Rainfall_Area"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_Rainfall_Rainfall"]) !== 0) {
                        z = z + 1;
                        avgtxtgwrrainfall = parseFloat(parseFloat(avgtxtgwrrainfall) + parseFloat(Jsondata1[i]["Gwr_Rainfall_Rainfall"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Wells_Tube_Wells_Area_in_Hectares"]) !== 0) {
                        a = a + 1;
                        avgtxtgwrHSnetUWTW = parseFloat(parseFloat(avgtxtgwrHSnetUWTW) + parseFloat(Jsondata1[i]["Wells_Tube_Wells_Area_in_Hectares"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Harvesting_Canals_Area_in_Hectares"]) !== 0) {
                        b = b + 1;
                        avgtxtgwrHSnetareaUcanals = parseFloat(parseFloat(avgtxtgwrHSnetareaUcanals) + parseFloat(Jsondata1[i]["Harvesting_Canals_Area_in_Hectares"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Harvesting_Tanks_Lakes_Area_in_Hectares"]) !== 0) {
                        c = c + 1;
                        avgtxtgwrHSnetareaULPT = parseFloat(parseFloat(avgtxtgwrHSnetareaULPT) + parseFloat(Jsondata1[i]["Harvesting_Tanks_Lakes_Area_in_Hectares"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["NetArea_Under_CheckDams_and_NalaBunds"]) !== 0) {
                        a1 = a1 + 1;
                        avgtxtgwrHSnetareaUchkdamsnalabunds = parseFloat(parseFloat(avgtxtgwrHSnetareaUchkdamsnalabunds) + parseFloat(Jsondata1[i]["NetArea_Under_CheckDams_and_NalaBunds"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_IT_maximum_SubmergenceArea"]) !== 0) {
                        b1 = b1 + 1;
                        avgtxtgwrITPmSarea = parseFloat(parseFloat(avgtxtgwrITPmSarea) + parseFloat(Jsondata1[i]["Gwr_IT_maximum_SubmergenceArea"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_IT_Reacharge_Rate"]) !== 0) {
                        c1 = c1 + 1;
                        avgtxtgwrITPrechargerate = parseFloat(parseFloat(avgtxtgwrITPrechargerate) + parseFloat(Jsondata1[i]["Gwr_IT_Reacharge_Rate"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_IT_DaysOfSubmergence"]) !== 0) {
                        d1 = d1 + 1;
                        avgtxtITPdaysofsubmergence = parseFloat(parseFloat(avgtxtITPdaysofsubmergence) + parseFloat(Jsondata1[i]["Gwr_IT_DaysOfSubmergence"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_CD_maximumSubmergence_Area"]) !== 0) {
                        e1 = e1 + 1;
                        avgtxtgwrChkdamsMsArea = parseFloat(parseFloat(avgtxtgwrChkdamsMsArea) + parseFloat(Jsondata1[i]["Gwr_CD_maximumSubmergence_Area"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_CD_AverageDepthOf_Water"]) !== 0) {
                        f1 = f1 + 1;
                        avgtxtgwrChkdamsavgdepthofwater = parseFloat(parseFloat(avgtxtgwrChkdamsavgdepthofwater) + parseFloat(Jsondata1[i]["Gwr_CD_AverageDepthOf_Water"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_CD_NoOfFillings"]) !== 0) {
                        g1 = g1 + 1;
                        avgtxtgwrChkdamsnooffillings = parseFloat(parseFloat(avgtxtgwrChkdamsnooffillings) + parseFloat(Jsondata1[i]["Gwr_CD_NoOfFillings"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_STC_LengthOfthe_Canals"]) !== 0) {
                        h1 = h1 + 1;
                        avgtxtgwrSTCanalsLofthecansl = parseFloat(parseFloat(avgtxtgwrSTCanalsLofthecansl) + parseFloat(Jsondata1[i]["Gwr_STC_LengthOfthe_Canals"])).toFixed(2);
                    }
                    //missing of seepage through canals discharge
                    //if (parseFloat(Jsondata1[i]["Gwr_STC_Seepage_Factor"]) !== 0) {
                    //    i1 = i1 + 1;
                    //    avgtxtgwrSTCanalsSeepageFactor = parseFloat(parseFloat(avgtxtgwrSTCanalsSeepageFactor) + parseFloat(Jsondata1[i]["Gwr_STC_Seepage_Factor"])).toFixed(2);
                    //}
                    if (parseFloat(Jsondata1[i]["Gwr_STC_Flowing_Days"]) !== 0) {
                        j1 = j1 + 1;
                        avgtxtgwrSTCanalsFlowingdays = parseFloat(parseFloat(avgtxtgwrSTCanalsFlowingdays) + parseFloat(Jsondata1[i]["Gwr_STC_Flowing_Days"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_STC_Avg_Wetted_Perimeter"]) !== 0) {
                        k1 = k1 + 1;
                        avgtxtgwrSTCanalsAvgWtPerimeter = parseFloat(parseFloat(avgtxtgwrSTCanalsAvgWtPerimeter) + parseFloat(Jsondata1[i]["Gwr_STC_Avg_Wetted_Perimeter"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_SWI_AreaIrrigated"]) !== 0) {
                        l1 = l1 + 1;
                        avgtxtgwrSWIDDatOutlet = parseFloat(parseFloat(avgtxtgwrSWIDDatOutlet) + parseFloat(Jsondata1[i]["Gwr_SWI_AreaIrrigated"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_SWI_DesignedDischarge_At_Outlet"]) !== 0) {
                        m1 = m1 + 1;
                        avgtxtgwrSWInoofdayswtrisrelOutlet = parseFloat(parseFloat(avgtxtgwrSWInoofdayswtrisrelOutlet) + parseFloat(Jsondata1[i]["Gwr_SWI_DesignedDischarge_At_Outlet"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_SWI_Seepage_Factor"]) !== 0) {
                        n1 = n1 + 1;
                        avgtxtgwrSWIwtrReleasedOutlet = parseFloat(parseFloat(avgtxtgwrSWIwtrReleasedOutlet) + parseFloat(Jsondata1[i]["Gwr_SWI_Seepage_Factor"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_SWI_WaterReleased_At_OutLet"]) !== 0) {
                        o1 = o1 + 1;
                        avgtxtgwrSWIcommandarea = parseFloat(parseFloat(avgtxtgwrSWIcommandarea) + parseFloat(Jsondata1[i]["Gwr_SWI_WaterReleased_At_OutLet"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["surface_water_paddy"]) !== 0) {
                        p1 = p1 + 1;
                        avgtxtgwrSWIunderpaddy = parseFloat(parseFloat(avgtxtgwrSWIunderpaddy) + parseFloat(Jsondata1[i]["surface_water_paddy"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["surface_water_nonpaddy"]) !== 0) {
                        q1 = q1 + 1;
                        avgtxtgwrSWIundernonpaddy = parseFloat(parseFloat(avgtxtgwrSWIundernonpaddy) + parseFloat(Jsondata1[i]["surface_water_nonpaddy"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_GwI_CommndArea_Irrigation"]) !== 0) {
                        r1 = r1 + 1;
                        avgtxtgwrGWIgrossgwrdraftirrigation = parseFloat(parseFloat(avgtxtgwrGWIgrossgwrdraftirrigation) + parseFloat(Jsondata1[i]["Gwr_GwI_CommndArea_Irrigation"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_GwI_CommandArea_ReturnFlow"]) !== 0) {
                        s1 = s1 + 1;
                        avgtxtgwrGWIgwlnoncommandarea = parseFloat(parseFloat(avgtxtgwrGWIgwlnoncommandarea) + parseFloat(Jsondata1[i]["Gwr_GwI_CommandArea_ReturnFlow"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_GwI_NonCommand_Area_Irrigation"]) !== 0) {
                        t1 = t1 + 1;
                        avgtxtgwrGWIirriareaunderpaddy = parseFloat(parseFloat(avgtxtgwrGWIirriareaunderpaddy) + parseFloat(Jsondata1[i]["Gwr_GwI_NonCommand_Area_Irrigation"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Gwr_GwI_NonCommand_Area_ReturnFlow"]) !== 0) {
                        u1 = u1 + 1;
                        avgtxtgwrGWIirriareaundernonpaddy = parseFloat(parseFloat(avgtxtgwrGWIirriareaundernonpaddy) + parseFloat(Jsondata1[i]["Gwr_GwI_NonCommand_Area_ReturnFlow"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Draft_Irrigation_DailyPumping_Hours"]) !== 0) {
                        v1 = v1 + 1;
                        avgtxtdriDpHoursordays = parseFloat(parseFloat(avgtxtdriDpHoursordays) + parseFloat(Jsondata1[i]["Draft_Irrigation_DailyPumping_Hours"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Tube_Wells_Borehole_Functioning_All_round_the_year"]) !== 0) {
                        w1 = w1 + 1;
                        avgtxtDritotnoofPLCR = parseFloat(parseFloat(avgtxtDritotnoofPLCR) + parseFloat(Jsondata1[i]["Tube_Wells_Borehole_Functioning_All_round_the_year"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Draft_Irrigation_Total_NoOf_Pumping_Days"]) !== 0) {
                        x1 = x1 + 1;
                        avgtxtDritotnoofPumpingdays = parseFloat(parseFloat(avgtxtDritotnoofPumpingdays) + parseFloat(Jsondata1[i]["Draft_Irrigation_Total_NoOf_Pumping_Days"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Draft_Irrigation_Avg_Pumping_Rate"]) !== 0) {
                        y1 = y1 + 1;
                        avgtxtDriAvgpumpingRate = parseFloat(parseFloat(avgtxtDriAvgpumpingRate) + parseFloat(Jsondata1[i]["Draft_Irrigation_Avg_Pumping_Rate"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_People"]) !== 0) {
                        z1 = z1 + 1;
                        avgtxtDomPurtotpopulation = parseFloat(parseFloat(avgtxtDomPurtotpopulation) + parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_People"])).toFixed(2);
                    }
                    //three coloumns are not mentioned in DB(noofcattle,noofbuffaloes,noofgoatsseeps)

                    //if (parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_Bullocks"]) !== 0) {
                    //    aa1 = aa1 + 1;
                    //    avgtxtDomPurtotnoofcattle = parseFloat(parseFloat(avgtxtDomPurtotnoofcattle) + parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_Bullocks"])).toFixed(2);
                    //}
                    //if (parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_CowsBufalos"]) !== 0) {
                    //    bb1 = bb1 + 1;
                    //    avgtxtDomPurtotnoofbuffalos = parseFloat(parseFloat(avgtxtDomPurtotnoofbuffalos) + parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_CowsBufalos"])).toFixed(2);
                    //}
                    //if (parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps"]) !== 0) {
                    //    cc1 = cc1 + 1;
                    //    avgtxtDomPurtotnoofGoatsSheeps = parseFloat(parseFloat(avgtxtDomPurtotnoofGoatsSheeps) + parseFloat(Jsondata1[i]["Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps"])).toFixed(2);
                    //}
                    if (parseFloat(Jsondata1[i]["Draft_Industry_GW_In_Take"]) !== 0) {
                        dd1 = dd1 + 1;
                        avgtxtDrForindustrySwtIntake = parseFloat(parseFloat(avgtxtDrForindustrySwtIntake) + parseFloat(Jsondata1[i]["Draft_Industry_GW_In_Take"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Draft_Industry_Tot_Noof_Production_Days"]) !== 0) {
                        ee1 = ee1 + 1;
                        avgtxtDrForindustryGwtrintake = parseFloat(parseFloat(avgtxtDrForindustryGwtrintake) + parseFloat(Jsondata1[i]["Draft_Industry_Tot_Noof_Production_Days"])).toFixed(2);
                    }
                    if (parseFloat(Jsondata1[i]["Industry_Prod_days"]) !== 0) {
                        ff1 = ff1 + 1;
                        avgtxtDrForindustrytotnoofprodudays = parseFloat(parseFloat(avgtxtDrForindustrytotnoofprodudays) + parseFloat(Jsondata1[i]["Industry_Prod_days"])).toFixed(2);
                    }
                }
                if (avgtxtsurarea !== null && avgtxtsurarea !== "NaN") {
                    var avgval = parseFloat(avgtxtsurarea / s).toFixed(2);
                    if (avgval !== "NaN") {
                        $('#txtsurarea').val(avgval);
                    }
                    else {
                        $('#txtsurarea').val(0);
                    }
                }
                if (avgtxtsurrainafall !== null && avgtxtsurrainafall !== "NaN") {
                    var avgval1 = parseFloat(avgtxtsurrainafall / d).toFixed(2);
                    if (avgval1 !== "NaN") {
                        $('#txtsurrainafall').val(avgval1);
                    }
                    else {
                        $('#txtsurrainafall').val(0);
                    }
                }
                if (avgtxtsurnoofsprings !== null && avgtxtsurnoofsprings !== "NaN") {
                    var avgval2 = parseFloat(avgtxtsurnoofsprings / e).toFixed(2);
                    if (avgval2 !== "NaN") {
                        $('#txtsurnoofsprings').val(avgval2);
                    }
                    else {
                        $('#txtsurnoofsprings').val(0);
                    }
                }
                if (avgtxtsurspringsarea !== null && avgtxtsurspringsarea !== "NaN") {
                    var avgval3 = parseFloat(avgtxtsurspringsarea / f).toFixed(2);
                    if (avgval3 !== "NaN") {
                        $('#txtsurspringsarea').val(avgval3);
                    }
                    else {
                        $('#txtsurspringsarea').val(0);
                    }
                }
                $('#txtsuravgdepth').val(4);
                if (avgtxtsurspringsdischarge !== null && avgtxtsurspringsdischarge !== "NaN") {
                    var avgval4 = parseFloat(avgtxtsurspringsdischarge / g).toFixed(2);
                    if (avgval4 !== "NaN") {
                        $('#txtsurspringsdischarge').val(avgval4);
                    }
                    else {
                        $('#txtsurspringsdischarge').val(0);
                    }
                }
                if (avgtxtsurcheckdams !== null && avgtxtsurcheckdams !== "NaN") {
                    var avgval5 = parseFloat(avgtxtsurcheckdams / h).toFixed(2);
                    if (avgval5 !== "NaN") {
                        $('#txtsurcheckdams').val(avgval5);
                    }
                    else {
                        $('#txtsurcheckdams').val(0);
                    }
                }
                if (avgtxtsurcheckdamsvalume !== null && avgtxtsurcheckdamsvalume !== "NaN") {
                    var avgval6 = parseFloat(avgtxtsurcheckdamsvalume / j).toFixed(2);
                    if (avgval6 !== "NaN") {
                        $('#txtsurcheckdamsvalume').val(avgval6);
                    }
                    else {
                        $('#txtsurcheckdamsvalume').val(0);
                    }
                }
                if (avgtxtsurcheckdamsdischarge !== null && avgtxtsurcheckdamsdischarge !== "NaN") {
                    var avgval7 = parseFloat(avgtxtsurcheckdamsdischarge / k).toFixed(2);
                    if (avgval7 !== "NaN") {
                        $('#txtsurcheckdamsdischarge').val(avgval7);
                    }
                    else {
                        $('#txtsurcheckdamsdischarge').val(0);
                    }
                }
                if (avgtxtsurnoofcanals !== null && avgtxtsurnoofcanals !== "NaN") {
                    var avgval8 = parseFloat(avgtxtsurnoofcanals / l).toFixed(2);
                    if (avgval8 !== "NaN") {
                        $('#txtsurnoofcanals').val(avgval8);
                    }
                    else {
                        $('#txtsurnoofcanals').val(0);
                    }
                }
                if (avgtxtsurcanalsarea !== null && avgtxtsurcanalsarea !== "NaN") {
                    var avgval9 = parseFloat(avgtxtsurcanalsarea / m).toFixed(2);
                    if (avgval9 !== "NaN") {
                        $('#txtsurcanalsarea').val(avgval9);
                    }
                    else {
                        $('#txtsurcanalsarea').val(0);
                    }
                }
                $('#txtsurcanalsavgdepth').val(3);
                if (avgtxtsurcanalsdischarge !== null && avgtxtsurcanalsdischarge !== "NaN") {
                    var avgval10 = parseFloat(avgtxtsurcanalsdischarge / n).toFixed(2);
                    if (avgval10 !== "NaN") {
                        $('#txtsurcanalsdischarge').val(avgval10);
                    }
                    else {
                        $('#txtsurcanalsdischarge').val(0);
                    }
                }
                $('#txtsurnoofreservoirs').val(o);
                if (avgtxtsurreservoirsvolume !== null && avgtxtsurreservoirsvolume !== "NaN") {
                    var avgval11 = parseFloat(avgtxtsurreservoirsvolume / p).toFixed(2);
                    if (avgval11 !== "NaN") {
                        $('#txtsurreservoirsvolume').val(avgval11);
                    }
                    else {
                        $('#txtsurreservoirsvolume').val(0);
                    }
                }
                if (avgtxtsurreservoirsdischarge !== null && avgtxtsurreservoirsdischarge !== "NaN") {
                    var avgval12 = parseFloat(avgtxtsurreservoirsdischarge / q).toFixed(2);
                    if (avgval12 !== "NaN") {
                        $('#txtsurreservoirsdischarge').val(avgval12);
                    }
                    else {
                        $('#txtsurreservoirsdischarge').val(0);
                    }
                }
                if (avgtxtsurLPT !== null && avgtxtsurLPT !== "NaN") {
                    var avgval13 = parseFloat(avgtxtsurLPT / r).toFixed(2);
                    if (avgval13 !== "NaN") {
                        $('#txtsurLPT').val(avgval13);
                    }
                    else {
                        $('#txtsurLPT').val(0);
                    }
                }
                if (avgtxtsurLPTatrea !== null && avgtxtsurLPTatrea !== "NaN") {
                    var avgval14 = parseFloat(avgtxtsurLPTatrea / t).toFixed(2);
                    if (avgval14 !== "NaN") {
                        $('#txtsurLPTatrea').val(avgval14);
                    }
                    else {
                        $('#txtsurLPTatrea').val(0);
                    }
                }
                $('#txtsurLPTAvgdepth').val(5);
                if (avgtxtsurLPTDischarge !== null && avgtxtsurLPTDischarge !== "NaN") {
                    var avgval15 = parseFloat(avgtxtsurLPTDischarge / u).toFixed(2);
                    if (avgval15 !== "NaN") {
                        $('#txtsurLPTDischarge').val(avgval15);
                    }
                    else {
                        $('#txtsurLPTDischarge').val(0);
                    }
                }
                if (avgtxtsurnoofrivers !== null && avgtxtsurnoofrivers !== "NaN") {
                    var avgval16 = parseFloat(avgtxtsurnoofrivers / v).toFixed(2);
                    if (avgval16 !== "NaN") {
                        $('#txtsurnoofrivers').val(avgval16);
                    }
                    else {
                        $('#txtsurnoofrivers').val(0);
                    }
                }
                if (avgtxtsurriversarea !== null && avgtxtsurriversarea !== "NaN") {
                    var avgval17 = parseFloat(avgtxtsurriversarea / w).toFixed(2);
                    if (avgval17 !== "NaN") {
                        $('#txtsurriversarea').val(avgval17);
                    }
                    else {
                        $('#txtsurriversarea').val(0);
                    }
                }
                $('#txtsurriveravgdepth').val(0);

                if (avgtxtsurriverdischarge !== null && avgtxtsurriverdischarge !== "NaN") {
                    var avgval18 = parseFloat(avgtxtsurriverdischarge / x).toFixed(2);
                    if (avgval18 !== "NaN") {
                        $('#txtsurriverdischarge').val(avgval18);
                    }
                    else {
                        $('#txtsurriverdischarge').val(0);
                    }
                }
                if (avgtxtgwrarea !== null && avgtxtgwrarea !== "NaN") {
                    var avgval19 = parseFloat(avgtxtgwrarea / y).toFixed(2);
                    if (avgval19 !== "NaN") {
                        $('#txtgwrarea').val(avgval19);
                    }
                    else {
                        $('#txtgwrarea').val(0);
                    }
                }
                if (avgtxtgwrrainfall !== null && avgtxtgwrrainfall !== "NaN") {
                    var avgval20 = parseFloat(avgtxtgwrrainfall / z).toFixed(2);
                    if (avgval20 !== "NaN") {
                        $('#txtgwrrainfall').val(avgval20);
                    }
                    else {
                        $('#txtgwrrainfall').val(0);
                    }
                }
                if (avgtxtgwrHSnetUWTW !== null && avgtxtgwrHSnetUWTW !== "NaN") {
                    var avgval21 = parseFloat(avgtxtgwrHSnetUWTW / a).toFixed(2);
                    if (avgval21 !== "NaN") {
                        $('#txtgwrHSnetUWTW').val(avgval21);
                    }
                    else {
                        $('#txtgwrHSnetUWTW').val(0);
                    }
                }
                if (avgtxtgwrHSnetareaUcanals !== null && avgtxtgwrHSnetareaUcanals !== "NaN") {
                    var avgval22 = parseFloat(avgtxtgwrHSnetareaUcanals / b).toFixed(2);
                    if (avgval22 !== "NaN") {
                        $('#txtgwrHSnetareaUcanals').val(avgval22);
                    }
                    else {
                        $('#txtgwrHSnetareaUcanals').val(0);
                    }
                }
                if (avgtxtgwrHSnetareaULPT !== null && avgtxtgwrHSnetareaULPT !== "NaN") {
                    var avgval23 = parseFloat(avgtxtgwrHSnetareaULPT / c).toFixed(2);
                    if (avgval23 !== "NaN") {
                        $('#txtgwrHSnetareaULPT').val(avgval23);
                    }
                    else {
                        $('#txtgwrHSnetareaULPT').val(0);
                    }
                }
                if (avgtxtgwrHSnetareaUchkdamsnalabunds !== null && avgtxtgwrHSnetareaUchkdamsnalabunds !== "NaN") {
                    var avgval24 = parseFloat(avgtxtgwrHSnetareaUchkdamsnalabunds / a1).toFixed(2);
                    if (avgval24 !== "NaN") {
                        $('#txtgwrHSnetareaUchkdamsnalabunds').val(avgval24);
                    }
                    else {
                        $('#txtgwrHSnetareaUchkdamsnalabunds').val(0);
                    }
                }
                if (avgtxtgwrITPmSarea !== null && avgtxtgwrITPmSarea !== "NaN") {
                    var avgval25 = parseFloat(avgtxtgwrITPmSarea / b1).toFixed(2);
                    if (avgval25 !== "NaN") {
                        $('#txtgwrITPmSarea').val(avgval25);
                    }
                    else {
                        $('#txtgwrITPmSarea').val(0);
                    }
                }
                if (avgtxtgwrITPrechargerate !== null && avgtxtgwrITPrechargerate !== "NaN") {
                    var avgval26 = parseFloat(avgtxtgwrITPrechargerate / c1).toFixed(2);
                    if (avgval26 !== "NaN") {
                        $('#txtgwrITPrechargerate').val(avgval26);
                    }
                    else {
                        $('#txtgwrITPrechargerate').val(0);
                    }
                }
                if (avgtxtITPdaysofsubmergence !== null && avgtxtITPdaysofsubmergence !== "NaN") {
                    var avgval27 = parseFloat(avgtxtITPdaysofsubmergence / d1).toFixed(2);
                    if (avgval27 !== "NaN") {
                        $('#txtITPdaysofsubmergence').val(avgval27);
                    }
                    else {
                        $('#txtITPdaysofsubmergence').val(0);
                    }
                }
                if (avgtxtgwrChkdamsMsArea !== null && avgtxtgwrChkdamsMsArea !== "NaN") {
                    var avgval28 = parseFloat(avgtxtgwrChkdamsMsArea / e1).toFixed(2);
                    if (avgval28 !== "NaN") {
                        $('#txtgwrChkdamsMsArea').val(avgval28);
                    }
                    else {
                        $('#txtgwrChkdamsMsArea').val(0);
                    }
                }
                if (avgtxtgwrChkdamsavgdepthofwater !== null && avgtxtgwrChkdamsavgdepthofwater !== "NaN") {
                    var avgval29 = parseFloat(avgtxtgwrChkdamsavgdepthofwater / f1).toFixed(2);
                    if (avgval29 !== "NaN") {
                        $('#txtgwrChkdamsavgdepthofwater').val(avgval29);
                    }
                    else {
                        $('#txtgwrChkdamsavgdepthofwater').val(0);
                    }
                }
                if (avgtxtgwrChkdamsnooffillings !== null && avgtxtgwrChkdamsnooffillings !== "NaN") {
                    var avgval31 = parseFloat(avgtxtgwrChkdamsnooffillings / g1).toFixed(2);
                    if (avgval31 !== "NaN") {
                        $('#txtgwrChkdamsnooffillings').val(avgval31);
                    }
                    else {
                        $('#txtgwrChkdamsnooffillings').val(0);
                    }
                }
                if (avgtxtgwrSTCanalsLofthecansl !== null && avgtxtgwrSTCanalsLofthecansl !== "NaN") {
                    var avgval32 = parseFloat(avgtxtgwrSTCanalsLofthecansl / h1).toFixed(2);
                    if (avgval32 !== "NaN") {
                        $('#txtgwrSTCanalsLofthecansl').val(avgval32);
                    }
                    else {
                        $('#txtgwrSTCanalsLofthecansl').val(0);
                    }
                }
                if (avgtxtgwrSTCanalsFlowingdays !== null && avgtxtgwrSTCanalsFlowingdays !== "NaN") {
                    var avgval33 = parseFloat(avgtxtgwrSTCanalsFlowingdays / j1).toFixed(2);
                    if (avgval33 !== "NaN") {
                        $('#txtgwrSTCanalsFlowingdays').val(avgval33);
                    }
                    else {
                        $('#txtgwrSTCanalsFlowingdays').val(0);
                    }
                }
                if (avgtxtgwrSTCanalsAvgWtPerimeter !== null && avgtxtgwrSTCanalsAvgWtPerimeter !== "NaN") {
                    var avgval34 = parseFloat(avgtxtgwrSTCanalsAvgWtPerimeter / k1).toFixed(2);
                    if (avgval34 !== "NaN") {
                        $('#txtgwrSTCanalsAvgWtPerimeter').val(avgval34);
                    }
                    else {
                        $('#txtgwrSTCanalsAvgWtPerimeter').val(0);
                    }
                }
                if (avgtxtgwrSWIDDatOutlet !== null && avgtxtgwrSWIDDatOutlet !== "NaN") {
                    var avgval35 = parseFloat(avgtxtgwrSWIDDatOutlet / l1).toFixed(2);
                    if (avgval35 !== "NaN") {
                        $('#txtgwrSWIDDatOutlet').val(avgval35);
                    }
                    else {
                        $('#txtgwrSWIDDatOutlet').val(0);
                    }
                }
                if (avgtxtgwrSWInoofdayswtrisrelOutlet !== null && avgtxtgwrSWInoofdayswtrisrelOutlet !== "NaN") {
                    var avgval36 = parseFloat(avgtxtgwrSWInoofdayswtrisrelOutlet / m1).toFixed(2);
                    if (avgval36 !== "NaN") {
                        $('#txtgwrSWInoofdayswtrisrelOutlet').val(avgval36);
                    }
                    else {
                        $('#txtgwrSWInoofdayswtrisrelOutlet').val(0);
                    }
                }
                if (avgtxtgwrSWIwtrReleasedOutlet !== null && avgtxtgwrSWIwtrReleasedOutlet !== "NaN") {
                    var avgval37 = parseFloat(avgtxtgwrSWIwtrReleasedOutlet / n1).toFixed(2);
                    if (avgval37 !== "NaN") {
                        $('#txtgwrSWIwtrReleasedOutlet').val(avgval37);
                    }
                    else {
                        $('#txtgwrSWIwtrReleasedOutlet').val(0);
                    }
                }
                if (avgtxtgwrSWIcommandarea !== null && avgtxtgwrSWIcommandarea !== "NaN") {
                    var avgval38 = parseFloat(avgtxtgwrSWIcommandarea / o1).toFixed(2);
                    if (avgval38 !== "NaN") {
                        $('#txtgwrSWIcommandarea').val(avgval38);
                    }
                    else {
                        $('#txtgwrSWIcommandarea').val(0);
                    }
                }
                if (avgtxtgwrSWIunderpaddy !== null && avgtxtgwrSWIunderpaddy !== "NaN") {
                    var avgval39 = parseFloat(avgtxtgwrSWIunderpaddy / p1).toFixed(2);
                    if (avgval39 !== "NaN") {
                        $('#txtgwrSWIunderpaddy').val(avgval39);
                    }
                    else {
                        $('#txtgwrSWIunderpaddy').val(0);
                    }
                }
                if (avgtxtgwrSWIundernonpaddy !== null && avgtxtgwrSWIundernonpaddy !== "NaN") {
                    var avgval40 = parseFloat(avgtxtgwrSWIundernonpaddy / q1).toFixed(2);
                    if (avgval40 !== "NaN") {
                        $('#txtgwrSWIundernonpaddy').val(avgval40);
                    }
                    else {
                        $('#txtgwrSWIundernonpaddy').val(0);
                    }
                }
                if (avgtxtgwrGWIgrossgwrdraftirrigation !== null && avgtxtgwrGWIgrossgwrdraftirrigation !== "NaN") {
                    var avgval402 = parseFloat(avgtxtgwrGWIgrossgwrdraftirrigation / r1).toFixed(2);
                    if (avgval402 !== "NaN") {
                        $('#txtgwrGWIgrossgwrdraftirrigation').val(avgval402);
                    }
                    else {
                        $('#txtgwrGWIgrossgwrdraftirrigation').val(0);
                    }
                }
                if (avgtxtgwrGWIgwlnoncommandarea !== null && avgtxtgwrGWIgwlnoncommandarea !== "NaN") {
                    var avgval41 = parseFloat(avgtxtgwrGWIgwlnoncommandarea / s1).toFixed(2);
                    if (avgval41 !== "NaN") {
                        $('#txtgwrGWIgwlnoncommandarea').val(avgval41);
                    }
                    else {
                        $('#txtgwrGWIgwlnoncommandarea').val(0);
                    }
                }
                if (avgtxtgwrGWIirriareaunderpaddy !== null && avgtxtgwrGWIirriareaunderpaddy !== "NaN") {
                    var avgval42 = parseFloat(avgtxtgwrGWIirriareaunderpaddy / t1).toFixed(2);
                    if (avgval42 !== "NaN") {
                        $('#txtgwrGWIirriareaunderpaddy').val(avgval42);
                    }
                    else {
                        $('#txtgwrGWIirriareaunderpaddy').val(0);
                    }
                }
                if (avgtxtgwrGWIirriareaundernonpaddy !== null && avgtxtgwrGWIirriareaundernonpaddy !== "NaN") {
                    var avgval43 = parseFloat(avgtxtgwrGWIirriareaundernonpaddy / u1).toFixed(2);
                    if (avgval43 !== "NaN") {
                        $('#txtgwrGWIirriareaundernonpaddy').val(avgval43);
                    }
                    else {
                        $('#txtgwrGWIirriareaundernonpaddy').val(0);
                    }
                }
                if (avgtxtdriDpHoursordays !== null && avgtxtdriDpHoursordays !== "NaN") {
                    var avgval44 = parseFloat(avgtxtdriDpHoursordays / v1).toFixed(2);
                    if (avgval44 !== "NaN") {
                        $('#txtdriDpHoursordays').val(avgval44);
                    }
                    else {
                        $('#txtdriDpHoursordays').val(0);
                    }
                }
                if (avgtxtDritotnoofPLCR !== null && avgtxtDritotnoofPLCR !== "NaN") {
                    var avgval45 = parseFloat(avgtxtDritotnoofPLCR / w1).toFixed(2);
                    if (avgval45 !== "NaN") {
                        $('#txtDritotnoofPLCR').val(avgval45);
                    }
                    else {
                        $('#txtDritotnoofPLCR').val(0);
                    }
                }
                if (avgtxtDritotnoofPumpingdays !== null && avgtxtDritotnoofPumpingdays !== "NaN") {
                    var avgval46 = parseFloat(avgtxtDritotnoofPumpingdays / x1).toFixed(2);
                    if (avgval46 !== "NaN") {
                        $('#txtDritotnoofPumpingdays').val(avgval46);
                    }
                    else {
                        $('#txtDritotnoofPumpingdays').val(0);
                    }
                }
                if (avgtxtDriAvgpumpingRate !== null && avgtxtDriAvgpumpingRate !== "NaN") {
                    var avgval47 = parseFloat(avgtxtDriAvgpumpingRate / y1).toFixed(2);
                    if (avgval47 !== "NaN") {
                        $('#txtDriAvgpumpingRate').val(avgval47);
                    }
                    else {
                        $('#txtDriAvgpumpingRate').val(0);
                    }
                }
                if (avgtxtDomPurtotpopulation !== null && avgtxtDomPurtotpopulation !== "NaN") {
                    var avgval48 = parseFloat(avgtxtDomPurtotpopulation / z1).toFixed(2);
                    if (avgval48 !== "NaN") {
                        $('#txtDomPurtotpopulation').val(avgval48);
                    }
                    else {
                        $('#txtDomPurtotpopulation').val(0);
                    }
                }
                //if (avgtxtDomPurtotnoofcattle !== null && avgtxtDomPurtotnoofcattle !== "NaN") {
                //    var avgval49 = parseFloat(avgtxtDomPurtotnoofcattle / aa1).toFixed(2);
                //    if (avgval49 !== "NaN") {
                //        $('#txtDomPurtotnoofcattle').val(avgval49);
                //    }
                //    else {
                //        $('#txtDomPurtotnoofcattle').val(0);
                //    }
                //}
                //if (avgtxtDomPurtotnoofbuffalos !== null && avgtxtDomPurtotnoofbuffalos !== "NaN") {
                //    var avgval50 = parseFloat(avgtxtDomPurtotnoofbuffalos / bb1).toFixed(2);
                //    if (avgval50 !== "NaN") {
                //        $('#txtDomPurtotnoofbuffalos').val(avgval50);
                //    }
                //    else {
                //        $('#txtDomPurtotnoofbuffalos').val(0);
                //    }
                //}

                //if (avgtxtDomPurtotnoofGoatsSheeps !== null && avgtxtDomPurtotnoofGoatsSheeps !== "NaN") {
                //    var avgval51 = parseFloat(avgtxtDomPurtotnoofGoatsSheeps / cc1).toFixed(2);
                //    if (avgval51 !== "NaN") {
                //        $('#txtDomPurtotnoofGoatsSheeps').val(avgval51);
                //    }
                //    else {
                //        $('#txtDomPurtotnoofGoatsSheeps').val(0);
                //    }
                //}
                if (avgtxtDrForindustrySwtIntake !== null && avgtxtDrForindustrySwtIntake !== "NaN") {
                    var avgval52 = parseFloat(avgtxtDrForindustrySwtIntake / dd1).toFixed(2);
                    if (avgval52 !== "NaN") {
                        $('#txtDrForindustrySwtIntake').val(avgval52);
                    }
                    else {
                        $('#txtDrForindustrySwtIntake').val(0);
                    }
                }
                if (avgtxtDrForindustryGwtrintake !== null && avgtxtDrForindustryGwtrintake !== "NaN") {
                    var avgval53 = parseFloat(avgtxtDrForindustryGwtrintake / ee1).toFixed(2);
                    if (avgval53 !== "NaN") {
                        $('#txtDrForindustryGwtrintake').val(avgval53);
                    }
                    else {
                        $('#txtDrForindustryGwtrintake').val(0);
                    }
                }
                if (avgtxtDrForindustrytotnoofprodudays !== null && avgtxtDrForindustrytotnoofprodudays !== "NaN") {
                    var avgval54 = parseFloat(avgtxtDrForindustrytotnoofprodudays / ff1).toFixed(2);
                    if (avgval54 !== "NaN") {
                        $('#txtDrForindustrytotnoofprodudays').val(avgval54);
                    }
                    else {
                        $('#txtDrForindustrytotnoofprodudays').val(0);
                    }
                }
                getallmethods();
            }
            else {
                alert('No Data Available');
            }
        }
    });
}
function getsavedata() {
    var obj = {};
    if ($('#wspstate option:selected').text() !== "Select State") {
        obj.state_name = $('#wspstate option:selected').text();
    }
    else {
        obj.state_name = "0";
    }
    if ($('#wspdist option:selected').text() !== "Select District") {
        obj.district_name = $('#wspdist option:selected').text();
    }
    else {
        obj.district_name = "0";
    }
    if ($('#wspblock option:selected').text() !== "Select Block") {
        obj.sub_district_name = $('#wspblock option:selected').text();
    }
    else {
        obj.sub_district_name = "0";
    }
    if ($('#wspgram option:selected').text() !== "Select Gram Panchayat") {
        obj.gram_panchayat_name = $('#wspgram option:selected').text();
    }
    else {
        obj.gram_panchayat_name = "0";
    }
    obj.Village_Name = "0";
    if ($("#txtsurarea").val() === "" || $("#txtsurarea").val() === "0") {
        alert('Please Enter Area');
        $("#txtsurarea").focus();
        $('#txtsurValume').val('');
        return false;
    }
    if ($("#txtsurrainafall").val() === "") {
        alert('Please Enter Rainfall');
        $("#txtsurrainafall").focus();
        $('#txtsurValume').val('');
        return false;
    }
    if ($("#txtsurnoofsprings").val() === "") {
        alert('Please Enter Number Of Springs');
        $("#txtsurnoofsprings").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    if ($("#txtsurspringsarea").val() === "") {
        alert('Please Enter Springs Area');
        $("#txtsurspringsarea").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    if ($("#txtsuravgdepth").val() === "") {
        alert('Please Enter Springs Depth');
        $("#txtsuravgdepth").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    if ($("#txtsurspringsdischarge").val() === "") {
        alert('Please Enter Springs Discharge');
        $("#txtsurspringsdischarge").focus();
        $('#txtsurspringsvalume').val('');
        return false;
    }
    if ($("#txtsurcheckdams").val() === "" || $("#txtsurcheckdams").val() === "0") {
        alert('Please Enter Check Dams');
        $("#txtsurcheckdams").focus();
        $('#txtsurcheckdamsRead').val('');
        return false;
    }
    if ($("#txtsurcheckdamsvalume").val() === "" || $("#txtsurcheckdamsvalume").val() === "0") {
        alert('Please Enter Check Dams Volume');
        $("#txtsurcheckdamsvalume").focus();
        $('#txtsurcheckdamsRead').val('');
        return false;
    }
    if ($("#txtsurcheckdamsdischarge").val() === "" || $("#txtsurcheckdamsdischarge").val() === "0") {
        alert('Please Enter Check Dams Discharge');
        $("#txtsurcheckdamsdischarge").focus();
        $('#txtsurcheckdamsRead').val('');
        return false;
    }
    if ($("#txtsurnoofcanals").val() === "") {
        alert('Please Enter Number of Canals');
        $("#txtsurnoofcanals").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }
    if ($("#txtsurcanalsarea").val() === "") {
        alert('Please Enter Surface Water Canals Area');
        $("#txtsurcanalsarea").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }
    if ($("#txtsurcanalsavgdepth").val() === "") {
        alert('Please Enter Canals Depth');
        $("#txtsurcanalsavgdepth").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }
    if ($("#txtsurcanalsdischarge").val() === "") {
        alert('Please Enter Canals Discharge');
        $("#txtsurcanalsdischarge").focus();
        $('#txtsurcanalsvolume').val('');
        return false;
    }
    if ($("#txtsurnoofreservoirs").val() === "") {
        alert('Please Enter Reservior');
        $("#txtsurnoofreservoirs").focus();
        $('#txtsurreservoirsvolumeread').val('');
        return false;
    }
    if ($("#txtsurreservoirsvolume").val() === "") {
        alert('Please Caliculate the Reservior Value');
        $("#txtsurreservoirsvolume").focus();
        $('#txtsurreservoirsvolumeread').val('');
        return false;
    }
    if ($("#txtsurreservoirsdischarge").val() === "") {
        alert('Please Caliculate the Reservior Value');
        $("#txtsurreservoirsdischarge").focus();
        $('#txtsurreservoirsvolumeread').val('');
        return false;
    }
    if ($("#txtsurLPT").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks');
        $("#txtsurLPT").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    if ($("#txtsurLPTatrea").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks Area');
        $("#txtsurLPTatrea").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    if ($("#txtsurLPTAvgdepth").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks Depth');
        $("#txtsurLPTAvgdepth").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    if ($("#txtsurLPTDischarge").val() === "") {
        alert('Please Enter Lakes And Ponds And Tanks Discharge');
        $("#txtsurLPTDischarge").focus();
        $('#txtsurLPTvolume').val('');
        return false;
    }
    if ($("#txtsurnoofrivers").val() === "") {
        alert('Please Enter Number of Rivers');
        $("#txtsurnoofrivers").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    if ($("#txtsurriversarea").val() === "") {
        alert('Please Enter Rivers Area');
        $("#txtsurriversarea").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    if ($("#txtsurriveravgdepth").val() === "") {
        alert('Please Enter Rivers Depth');
        $("#txtsurriveravgdepth").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    if ($("#txtsurriverdischarge").val() === "") {
        alert('Please Enter Rivers Discharge');
        $("#txtsurriverdischarge").focus();
        $('#txtsurriverVolume').val('');
        return false;
    }
    if ($("#txtgwrarea").val() === "" || $("#txtgwrarea").val() === "0") {
        alert('Please Enter Area');
        $("#txtgwrarea").focus();
        $('#txtgwrrecharge').val('');
        return false;
    }
    if ($("#txtgwrrainfall").val() === "" || $("#txtgwrrainfall").val() === "0") {
        alert('Please Enter RainFall');
        $("#txtgwrrainfall").focus();
        $('#txtgwrrecharge').val('');
        return false;
    }

    if ($("#ddlgwrareaUBY").val() === "") {
        alert('Please Select Area UnderLine By');
        $("#ddlgwrareaUBY").focus();
        $('#txtgwrrecharge').val('');
        return false;
    }
    if ($('#txtgwrRechargefactor').val() === "") {
        alert('Please Select Area UnderLine By');
        $("#AreaUnderLinedBy").focus();
        $('#txtgwrRechargefactor').val('');
        return false;
    }
    if ($("#txtgwrHSnetUWTW").val() === "") {
        alert('Please Enter Net Area Under Well/Tube Well');
        $("#txtgwrHSnetUWTW").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }
    if ($("#txtgwrHSnetareaUcanals").val() === "") {
        alert('Please Enter Net Area Under Canals');
        $("#txtgwrHSnetareaUcanals").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }
    if ($("#txtgwrHSnetareaULPT").val() === "") {
        alert('Please Enter Net Area Under Irrigation Tanks');
        $("#txtgwrHSnetareaULPT").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }
    if ($("#txtgwrHSnetareaUchkdamsnalabunds").val() === "" || $("#txtgwrHSnetareaUchkdamsnalabunds").val() === "0") {
        alert('Please Enter Net Area Under Check Dams And Nala Bunds');
        $("#txtgwrHSnetareaUchkdamsnalabunds").focus();
        $('#txtgwrHSRecharge').val("");
        return false;
    }
    if ($("#txtgwrITPmSarea").val() === "" || $("#txtgwrITPmSarea").val() === "0") {
        alert('Please Enter Max Submergence Area ');
        $("#txtgwrITPmSarea").focus();
        $('#txtgwrITPrecharge').val("");
        return false;
    }
    if ($("#txtgwrITPrechargerate").val() === "" || $("#txtgwrITPrechargerate").val() === "0") {
        alert('Please Enter Irrigation Recharge Rate');
        $("#txtgwrITPrechargerate").focus();
        $('#txtgwrITPrecharge').val("");
        return false;
    }
    if ($("#txtgwrITPmSarea").val() === "" || $("#txtgwrITPmSarea").val() === "0") {
        alert('Please Enter Days of Submergence');
        $("#txtgwrITPmSarea").focus();
        $('#txtgwrITPrecharge').val("");
        return false;
    }
    if ($("#txtgwrChkdamsavgdepthofwater").val() === "") {
        alert('Please Enter Recharge Rate');
        $("#txtgwrChkdamsavgdepthofwater").focus();
        $('#txtgwrChkdamsrecharge').val("");
        return false;
    }
    if ($("#txtgwrChkdamsMsArea").val() === "" || $("#txtgwrChkdamsMsArea").val() === "0") {
        alert('Please Enter Max Submergence Area');
        $("#txtgwrChkdamsMsArea").focus();
        $('#txtgwrChkdamsrecharge').val("");
        return false;
    }
    //if ($("#txtRechargerate").val() === "" || $("#txtRechargerate").val() === "0") {
    //    alert('Please Enter Average Depth Of Water');
    //    $("#txtRechargerate").focus();
    //    $('#txtcheckdam').val("");
    //    return false;
    //}
    if ($("#txtgwrChkdamsnooffillings").val() === "" || $("#txtgwrChkdamsnooffillings").val() === "0") {
        alert('Please Enter Number of Fillings');
        $("#txtgwrChkdamsnooffillings").focus();
        $('#txtgwrChkdamsrecharge').val("");
        return false;
    }
    if ($("#txtgwrSTCanalsLofthecansl").val() === "" || $("#txtgwrSTCanalsLofthecansl").val() === "0") {
        alert('Please Enter Length of the Canal');
        $("#txtgwrSTCanalsLofthecansl").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }
    if ($("#txtgwrSTCanalsSeepageFactor").val() === "") {
        alert('Please Enter Seepage Factor');
        $("#txtgwrSTCanalsSeepageFactor").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }
    if ($("#txtgwrSTCanalsFlowingdays").val() === "" || $("#txtgwrSTCanalsFlowingdays").val() === "0") {
        alert('Please Enter Flowing Days of Canals');
        $("#txtgwrSTCanalsFlowingdays").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }
    if ($("#txtgwrSTCanalsAvgWtPerimeter").val() === "" || $("#txtgwrSTCanalsAvgWtPerimeter").val() === "0") {
        alert('Please Enter Average Wetted Perimater');
        $("#txtgwrSTCanalsAvgWtPerimeter").focus();
        $('#txtgwrSTCanalsRechargeread').val("");
        return false;
    }
    if ($("#txtgwrSWIDDatOutlet").val() === "" || $("#txtgwrSWIDDatOutlet").val() === "0") {
        alert('Please Enter Designed Discharge Outlet');
        $("#txtgwrSWIDDatOutlet").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtirrigationwaterreleaseatoutlet").val() === "" || $("#txtirrigationwaterreleaseatoutlet").val() === "0") {
        alert('Please Enter Water Released at OutLet');
        $("#txtirrigationwaterreleaseatoutlet").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIcommandarea").val() === "" || $("#txtgwrSWIcommandarea").val() === "0") {
        alert('Please Enter Command Area');
        $("#txtgwrSWIcommandarea").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIunderpaddy").val() === "") {
        alert('Please Enter Paddy');
        $("#txtgwrSWIunderpaddy").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIundernonpaddy").val() === "") {
        alert('Please Enter Non Paddy');
        $("#txtgwrSWIundernonpaddy").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrGWIgrossgwrdraftirrigation").val() === "" || $("#txtgwrGWIgrossgwrdraftirrigation").val() === "0") {
        alert('Please Enter Gross Ground Water Draft For Irrigation');
        $("#txtgwrGWIgrossgwrdraftirrigation").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIgwlnoncommandarea").val() === "" || $("#txtgwrGWIgwlnoncommandarea").val() === "0") {
        alert('Please Enter Non Command Area Irrigation');
        $("#txtgwrGWIgwlnoncommandarea").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIirriareaunderpaddy").val() === "") {
        alert('Please Enter Irrigated Area Under Paddy');
        $("#txtgwrGWIirriareaunderpaddy").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIirriareaundernonpaddy").val() === "") {
        alert('Please Enter Irrigated Area Under Non Paddy');
        $("#txtgwrGWIirriareaundernonpaddy").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtdriDpHoursordays").val() === "" || $("#txtdriDpHoursordays").val() === "0") {
        alert('Please Enter Daily Pumping Days');
        $("#txtdriDpHoursordays").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    if ($("#txtDritotnoofPLCR").val() === "") {
        alert('Please Enter Total Number Of Functional Wells');
        $("#txtDritotnoofPLCR").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    if ($("#txtDritotnoofPumpingdays").val() === "" || $("#txtDritotnoofPumpingdays").val() === "0") {
        alert('Please Enter Total Number of Days');
        $("#txtDritotnoofPumpingdays").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    if ($("#txtDriAvgpumpingRate").val() === "" || $("#txtDriAvgpumpingRate").val() === "0") {
        alert('Please Enter Average Pumping Rate');
        $("#txtDriAvgpumpingRate").focus();
        $('#lblIrrigationCalculation').val("");
        return false;
    }
    if ($("#txtgwrSWIDDatOutlet").val() === "" || $("#txtgwrSWIDDatOutlet").val() === "0") {
        alert('Please Enter Designed Discharge Outlet');
        $("#txtgwrSWIDDatOutlet").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtirrigationwaterreleaseatoutlet").val() === "" || $("#txtirrigationwaterreleaseatoutlet").val() === "0") {
        alert('Please Enter Water Released at OutLet');
        $("#txtirrigationwaterreleaseatoutlet").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIcommandarea").val() === "" || $("#txtgwrSWIcommandarea").val() === "0") {
        alert('Please Enter Command Area');
        $("#txtgwrSWIcommandarea").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIunderpaddy").val() === "") {
        alert('Please Enter Paddy');
        $("#txtgwrSWIunderpaddy").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrSWIundernonpaddy").val() === "") {
        alert('Please Enter Non Paddy');
        $("#txtgwrSWIundernonpaddy").focus();
        $('#txtgwrSWIRechargeRead').val("");
        return false;
    }
    if ($("#txtgwrGWIgrossgwrdraftirrigation").val() === "" || $("#txtgwrGWIgrossgwrdraftirrigation").val() === "0") {
        alert('Please Enter Gross Ground Water Draft For Irrigation');
        $("#txtgwrGWIgrossgwrdraftirrigation").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIgwlnoncommandarea").val() === "" || $("#txtgwrGWIgwlnoncommandarea").val() === "0") {
        alert('Please Enter Non Command Area Irrigation');
        $("#txtgwrGWIgwlnoncommandarea").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIirriareaunderpaddy").val() === "") {
        alert('Please Enter Irrigated Area Under Paddy');
        $("#txtgwrGWIirriareaunderpaddy").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    if ($("#txtgwrGWIirriareaundernonpaddy").val() === "") {
        alert('Please Enter Irrigated Area Under Non Paddy');
        $("#txtgwrGWIirriareaundernonpaddy").focus();
        $('#txtgwrGWIrechargeread1').val("");
        return false;
    }
    obj.Springs_Total_Geographical_Area_in_Hectares = $("#txtsurarea").val();
    obj.AvgOfSurfaceWaterRainfall = $("#txtsurrainafall").val();

    obj.Spring_Functioning_All_round_the_years = $("#txtsurnoofsprings").val();
    obj.Waterfall_Area_in_Hectares = $("#txtsurspringsarea").val();
    obj.Springs_Depth = $("#txtsuravgdepth").val();
    obj.springs_Discharge = $("#txtsurspringsdischarge").val();

    obj.No_Of_CheckDams = $("#txtsurcheckdams").val();
    obj.CheckDams_Capacity = $("#txtsurcheckdamsvalume").val();
    obj.checkdams_Discharge = $("#txtsurcheckdamsdischarge").val();

    obj.Canals_River_Canal_Functioning_All_round_the_year = $("#txtsurnoofcanals").val();
    obj.Canals_Area_in_Hectares = $("#txtsurcanalsarea").val();
    obj.Canals_Depth = $("#txtsurcanalsavgdepth").val();
    obj.canals_Discharge = $("#txtsurcanalsdischarge").val();

    obj.Reservoir_Name = $("#txtsurnoofreservoirs").val();
    obj.Current_Live_Storage = $("#txtsurreservoirsvolume").val();
    obj.reservoir_Discharge = $("#txtsurreservoirsdischarge").val();

    obj.Tank_Pond_Lake_Functioning_All_round_the_year = $("#txtsurLPT").val();
    obj.Tanks_Lakes_Area_in_Hectares = $("#txtsurLPTatrea").val();
    obj.Tanks_Depth = $("#txtsurLPTAvgdepth").val();
    obj.lakespondstanks_Discharge = $("#txtsurLPTDischarge").val();

    obj.River_Canal_Functioning_All_round_the_year = $("#txtsurnoofrivers").val();
    obj.River_Canals_Area_in_Hectares = $("#txtsurriversarea").val();
    obj.River_Depth = $("#txtsurriveravgdepth").val();
    obj.river_Discharge = $("#txtsurriverdischarge").val();

    obj.Gwr_Rainfall_Area = $("#txtgwrarea").val();
    obj.Gwr_Rainfall_Rainfall = $("#txtgwrrainfall").val();
    if ($("#ddlgwrareaUBY option:selected").text() !== "Select Area UnderLined By") {
        obj.Area_underlined_by = $("#ddlgwrareaUBY option:selected").text();
    }
    obj.Rainfall_Recharge_Factor = $("#txtgwrRechargefactor").val();

    obj.Wells_Tube_Wells_Area_in_Hectares = $("#txtgwrHSnetUWTW").val();
    obj.Harvesting_Canals_Area_in_Hectares = $("#txtgwrHSnetareaUcanals").val();
    obj.Harvesting_Tanks_Lakes_Area_in_Hectares = $("#txtgwrHSnetareaULPT").val();
    obj.NetArea_Under_CheckDams_and_NalaBunds = $("#txtgwrHSnetareaUchkdamsnalabunds").val();

    obj.Gwr_IT_maximum_SubmergenceArea = $("#txtgwrITPmSarea").val();
    obj.Gwr_IT_Reacharge_Rate = $('#txtgwrITPrechargerate').val();
    obj.Gwr_IT_DaysOfSubmergence = $('#txtITPdaysofsubmergence').val();


    obj.Gwr_CD_maximumSubmergence_Area = $("#txtgwrChkdamsMsArea").val();
    obj.Gwr_CD_AverageDepthOf_Water = $("#txtgwrChkdamsavgdepthofwater").val();
    obj.Gwr_CD_NoOfFillings = $('#txtgwrChkdamsnooffillings').val();

    obj.Gwr_STC_LengthOfthe_Canals = $("#txtgwrSTCanalsLofthecansl").val();
    if ($('#ddlgwrSTCanalsType option:selected').text() !== "Select Canal Type") {
        obj.canaltype = $('#ddlgwrSTCanalsType option:selected').text();
    }
    //$("#txtgwrSTCanalsDischarge").val();
    if ($('#ddlgwrSTCanalsSoilType option:selected').text() !== "Select Soil type") {
        obj.soiltype = $('#ddlgwrSTCanalsSoilType option:selected').text();
    }
    obj.Gwr_STC_Seepage_Factor = $("#txtgwrSTCanalsSeepageFactor").val();
    obj.Gwr_STC_Flowing_Days = $("#txtgwrSTCanalsFlowingdays").val();
    obj.Gwr_STC_Avg_Wetted_Perimeter = $('#txtgwrSTCanalsAvgWtPerimeter').val();

    obj.Gwr_SWI_AreaIrrigated = $("#txtgwrSWIDDatOutlet").val();
    obj.Gwr_SWI_DesignedDischarge_At_Outlet = $("#txtgwrSWInoofdayswtrisrelOutlet").val();
    obj.Gwr_SWI_Seepage_Factor = $('#txtgwrSWIwtrReleasedOutlet').val();
    obj.Gwr_SWI_WaterReleased_At_OutLet = $("#txtgwrSWIcommandarea").val();
    obj.surface_water_paddy = $("#txtgwrSWIunderpaddy").val();
    obj.surface_water_nonpaddy = $("#txtgwrSWIundernonpaddy").val();

    obj.Gwr_GwI_CommndArea_Irrigation = $("#txtgwrGWIgrossgwrdraftirrigation").val();
    obj.Gwr_GwI_CommandArea_ReturnFlow = $("#txtgwrGWIgwlnoncommandarea").val();
    obj.Gwr_GwI_NonCommand_Area_Irrigation = $("#txtgwrGWIirriareaunderpaddy").val();
    obj.Gwr_GwI_NonCommand_Area_ReturnFlow = $("#txtgwrGWIirriareaundernonpaddy").val();

    obj.Draft_Irrigation_DailyPumping_Hours = $("#txtdriDpHoursordays").val();
    obj.Tube_Wells_Borehole_Functioning_All_round_the_year = $("#txtDritotnoofPLCR").val();
    obj.Draft_Irrigation_Total_NoOf_Pumping_Days = $("#txtDritotnoofPumpingdays").val();
    obj.Draft_Irrigation_Avg_Pumping_Rate = $("#txtDriAvgpumpingRate").val();

    obj.Draft_Drink_Tot_Water_Requirement_For_People = $("#txtDomPurtotpopulation").val();
    obj.Draft_Drink_Tot_Water_Requirement_For_CowsBufalos = $("#txtDomPurtotnoofbuffalos").val();
    obj.Draft_Drink_Tot_Water_Requirement_For_Bullocks = $("#txtDomPurtotnoofcattle").val();
    obj.Draft_Drink_Tot_Water_Requirement_For_GoatsSheeps = $("#txtDomPurtotnoofGoatsSheeps").val();

    obj.Draft_Industry_GW_In_Take = $("#txtDrForindustrySwtIntake").val();
    obj.Draft_Industry_Tot_Noof_Production_Days = $("#txtDrForindustryGwtrintake").val();
    obj.Industry_Prod_days = $("#txtDrForindustrytotnoofprodudays").val();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Wsp_total/savedata",
        data: "{'GWB':'" + JSON.stringify(obj) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert('Process Sucess..');
            insertid = "1";
            //Clear();
        },
        error: function (a) { }
    });
}
function getdelete() {
    var state_name = "", district_name = "", sub_district_name = "", gram_panchayat_name = "";
    state_name = $('#wspstate option:selected').text();
    district_name = $('#wspdist option:selected').text();
    sub_district_name = $('#wspblock option:selected').text();
    gram_panchayat_name = $('#wspgram option:selected').text();
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Wsp_total/gdbdatadelete",
        data: "{'state':'" + state_name + "','districtname':'" + district_name + "','blckname':'" + sub_district_name + "','gpname':'" + gram_panchayat_name + "'}",
        dataType: 'JSON',
        success: function (response) {
            var resp = response;
            if (resp === "Delete") {
                alert('Delete Success..');
            }
            if (resp === "Nodata") {
                alert('No Data Available..');
            }
            getgpleveldata();
        },
        error: function (a) { }
    });
}

function getallmethods() {
    getsurfaceWaterRainfall();
    getSufacewatersprings();
    getSurwtrCheckdams();
    getsurwtrcanals();
    getsurwtrReservoirs();
    getsurwtrLPT();
    getsurwtrRivers();

    getgwrrainfall();
    getHarvestingStructure();
    getgwrirrigation();
    getgwrcheckdams();
    getgwrSeepagecanel();
    getgwrsurfacewater();
    getgwrGroundWater();

    getdraftirrigation();
    getDraftDrinking();
    getDraftIndustries();
}
function getgplevelsecuritydata() {
    var ddlstate1 = "";
    if ($('#wspstate option:selected').text() === "Select State") {
        alert('Please Select State');
    }
    else {
        ddlstate1 = $('#wspstate option:selected').text();
    }

    var ddldistrict1 = $('#wspdist option:selected').text();
    var ddlblock1 = $('#wspblock option:selected').text();
    var ddlgram1 = $('#wspgram option:selected').text();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_total/getsecuritydata',
        data: '{"state": "' + ddlstate1 + '", "district":"' + ddldistrict1 + '","block":"' + ddlblock1 + '","gp":"' + ddlgram1 + '"}',
        dataType: 'JSON',
        success: function (data) {
            var D3 = 0, D4 = 0, S3 = 0, S4 = 0, S5 = 0, S6 = 0, S7 = 0, S8 = 0, S9 = 0, S10 = 0, S11 = 0, S12 = 0, S13 = 0, S14 = 0, S15 = 0, S16 = 0, S17 = 0, S18 = 0, S19 = 0, S20 = 0, S21 = 0, S22 = 0;
            var avgphval2019 = 0, avgphval2020 = 0, avgphval2021 = 0, avgphval2022 = 0, avgphval2023 = 0, avgfinval2019 = 0, avgfinval2020 = 0, avgfinval2021 = 0, avgfinval2022 = 0,
                avgfinval2023 = 0, avgphval2019Y = 0, avgphval2020Y = 0, avgphval2021Y = 0, avgphval2022Y = 0, avgphval2023Y = 0, avgfinval2019Y = 0, avgfinval2020Y = 0, avgfinval2021Y = 0, avgfinval2022Y = 0,
                avgfinval2023Y = 0;

            var Jsondata2 = data;
            if (Jsondata2.diffrval === 0) {
                var abhy_supply = Jsondata2.objabhysupply1;
                var abhy_demand = Jsondata2.objabhydemand1;
                if (abhy_supply.length !== 0) {
                    $('#myModal').modal('hide');
                    for (D3 = 0; D3 < abhy_supply.length; D3++) {
                        var MyDate_String_Value = abhy_supply[D3]["todaydate"];
                        var value = new Date
                            (
                                parseInt(MyDate_String_Value.replace(/(^.*\()|([+-].*$)/g, ''))
                            );
                        var dat = value.getFullYear();
                        if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2019) {
                            S3 = S3 + 1;
                            avgphval2019 = parseFloat(parseFloat(avgphval2019) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2020) {
                            S4 = S4 + 1;
                            avgphval2020 = parseFloat(parseFloat(avgphval2020) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2021) {
                            S5 = S5 + 1;
                            avgphval2021 = parseFloat(parseFloat(avgphval2021) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2022) {
                            S6 = S6 + 1;
                            avgphval2022 = parseFloat(parseFloat(avgphval2022) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2023) {
                            S7 = S7 + 1;
                            avgphval2023 = parseFloat(parseFloat(avgphval2023) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                        }

                        if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2019) {
                            S8 = S8 + 1;
                            avgfinval2019 = parseFloat(parseFloat(avgfinval2019) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2020) {
                            S9 = S9 + 1;
                            avgfinval2020 = parseFloat(parseFloat(avgfinval2020) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2021) {
                            S10 = S10 + 1;
                            avgfinval2021 = parseFloat(parseFloat(avgfinval2021) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2022) {
                            S11 = S11 + 1;
                            avgfinval2022 = parseFloat(parseFloat(avgfinval2022) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2023) {
                            S12 = S12 + 1;
                            avgfinval2023 = parseFloat(parseFloat(avgfinval2023) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                        }
                    }
                }
                if (abhy_demand.length !== 0) {
                    for (D4 = 0; D4 < abhy_demand.length; D4++) {
                        var MyDate_String_Value1 = abhy_demand[D4]["todaydate"];
                        var value1 = new Date
                            (
                                parseInt(MyDate_String_Value1.replace(/(^.*\()|([+-].*$)/g, ''))
                            );
                        var dat1 = value1.getFullYear();
                        if (parseInt(abhy_demand[D4]["unitcost"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2019) {
                            S13 = S13 + 1;
                            avgphval2019Y = parseFloat(parseFloat(avgphval2019Y) + parseInt(abhy_demand[D4]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["unitcost"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2020) {
                            S14 = S14 + 1;
                            avgphval2020Y = parseFloat(parseFloat(avgphval2020Y) + parseInt(abhy_demand[D4]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["unitcost"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2021) {
                            S15 = S15 + 1;
                            avgphval2021Y = parseFloat(parseFloat(avgphval2021Y) + parseInt(abhy_demand[D4]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["unitcost"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2022) {
                            S16 = S16 + 1;
                            avgphval2022Y = parseFloat(parseFloat(avgphval2022Y) + parseInt(abhy_demand[D4]["unitcost"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["unitcost"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2023) {
                            S17 = S17 + 1;
                            avgphval2023Y = parseFloat(parseFloat(avgphval2023Y) + parseInt(abhy_demand[D4]["unitcost"])).toFixed(2);
                        }

                        if (parseInt(abhy_demand[D4]["totalbudget"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2019) {
                            S18 = S18 + 1;
                            avgfinval2019Y = parseFloat(parseFloat(avgfinval2019Y) + parseInt(abhy_demand[D4]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["totalbudget"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2020) {
                            S19 = S19 + 1;
                            avgfinval2020Y = parseFloat(parseFloat(avgfinval2020Y) + parseInt(abhy_demand[D4]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["totalbudget"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2021) {
                            S20 = S20 + 1;
                            avgfinval2021Y = parseFloat(parseFloat(avgfinval2021Y) + parseInt(abhy_demand[D4]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["totalbudget"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2022) {
                            S21 = S21 + 1;
                            avgfinval2022Y = parseFloat(parseFloat(avgfinval2022Y) + parseInt(abhy_demand[D4]["totalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand[D4]["totalbudget"]) !== 0 && abhy_demand[D4]["category"] === "DemandSide" && dat1 === 2023) {
                            S22 = S22 + 1;
                            avgfinval2023Y = parseFloat(parseFloat(avgfinval2023Y) + parseInt(abhy_demand[D4]["totalbudget"])).toFixed(2);
                        }
                    }
                }
            }
            else if (Jsondata2.diffrval === 1) {
                var abhy_supply1 = Jsondata2.objabhysupply2;
                var abhy_demand1 = Jsondata2.objabhydemand2;
                if (abhy_supply1.length !== 0) {
                    $('#myModal').modal('hide');
                    for (D3 = 0; D3 < abhy_supply1.length; D3++) {
                        var MyDate_String_Value2 = abhy_supply1[D3]["todaydate"];
                        var value2 = new Date
                            (
                                parseInt(MyDate_String_Value2.replace(/(^.*\()|([+-].*$)/g, ''))
                            );
                        var dat2 = value2.getFullYear();
                        if (parseInt(abhy_supply1[D3]["sup_yr_19_phys_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2019) {
                            S3 = S3 + 1;
                            avgphval2019 = parseFloat(parseFloat(avgphval2019) + parseInt(abhy_supply1[D3]["sup_yr_19_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_20_phys_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2020) {
                            S4 = S4 + 1;
                            avgphval2020 = parseFloat(parseFloat(avgphval2020) + parseInt(abhy_supply1[D3]["sup_yr_20_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_21_phys_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2021) {
                            S5 = S5 + 1;
                            avgphval2021 = parseFloat(parseFloat(avgphval2021) + parseInt(abhy_supply1[D3]["sup_yr_21_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_22_phys_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2022) {
                            S6 = S6 + 1;
                            avgphval2022 = parseFloat(parseFloat(avgphval2022) + parseInt(abhy_supply1[D3]["sup_yr_22_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_23_phys_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2023) {
                            S7 = S7 + 1;
                            avgphval2023 = parseFloat(parseFloat(avgphval2023) + parseInt(abhy_supply1[D3]["sup_yr_23_phys_value"])).toFixed(2);
                        }

                        if (parseInt(abhy_supply1[D3]["sup_yr_19_fin_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2019) {
                            S8 = S8 + 1;
                            avgfinval2019 = parseFloat(parseFloat(avgfinval2019) + parseInt(abhy_supply1[D3]["sup_yr_19_fin_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_20_fin_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2020) {
                            S9 = S9 + 1;
                            avgfinval2020 = parseFloat(parseFloat(avgfinval2020) + parseInt(abhy_supply1[D3]["tosup_yr_20_fin_valuetalbudget"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_21_fin_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2021) {
                            S10 = S10 + 1;
                            avgfinval2021 = parseFloat(parseFloat(avgfinval2021) + parseInt(abhy_supply1[D3]["sup_yr_21_fin_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_22_fin_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2022) {
                            S11 = S11 + 1;
                            avgfinval2022 = parseFloat(parseFloat(avgfinval2022) + parseInt(abhy_supply1[D3]["sup_yr_22_fin_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_supply1[D3]["sup_yr_23_fin_value"]) !== 0 && abhy_supply1[D3]["category"] === "SupplySide" && dat2 === 2023) {
                            S12 = S12 + 1;
                            avgfinval2023 = parseFloat(parseFloat(avgfinval2023) + parseInt(abhy_supply1[D3]["sup_yr_23_fin_value"])).toFixed(2);
                        }
                    }
                }
                if (abhy_demand1.length !== 0) {
                    for (D4 = 0; D4 < abhy_demand1.length; D4++) {
                        var MyDate_String_Value3 = abhy_demand1[D4]["todaydate"];
                        var value3 = new Date
                            (
                                parseInt(MyDate_String_Value3.replace(/(^.*\()|([+-].*$)/g, ''))
                            );
                        var dat3 = value3.getFullYear();
                        if (parseInt(abhy_demand1[D4]["dem_yr_19_phys_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2019) {
                            S13 = S13 + 1;
                            avgphval2019Y = parseFloat(parseFloat(avgphval2019Y) + parseInt(abhy_demand1[D4]["dem_yr_19_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_20_phys_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2020) {
                            S14 = S14 + 1;
                            avgphval2020Y = parseFloat(parseFloat(avgphval2020Y) + parseInt(abhy_demand1[D4]["dem_yr_20_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_21_phys_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2021) {
                            S15 = S15 + 1;
                            avgphval2021Y = parseFloat(parseFloat(avgphval2021Y) + parseInt(abhy_demand1[D4]["dem_yr_21_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_22_phys_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2022) {
                            S16 = S16 + 1;
                            avgphval2022Y = parseFloat(parseFloat(avgphval2022Y) + parseInt(abhy_demand1[D4]["dem_yr_22_phys_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_23_phys_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2023) {
                            S17 = S17 + 1;
                            avgphval2023Y = parseFloat(parseFloat(avgphval2023Y) + parseInt(abhy_demand1[D4]["dem_yr_23_phys_value"])).toFixed(2);
                        }

                        if (parseInt(abhy_demand1[D4]["dem_yr_19_fin_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2019) {
                            S18 = S18 + 1;
                            avgfinval2019Y = parseFloat(parseFloat(avgfinval2019Y) + parseInt(abhy_demand1[D4]["dem_yr_19_fin_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_20_fin_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2020) {
                            S19 = S19 + 1;
                            avgfinval2020Y = parseFloat(parseFloat(avgfinval2020Y) + parseInt(abhy_demand1[D4]["dem_yr_20_fin_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_21_fin_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2021) {
                            S20 = S20 + 1;
                            avgfinval2021Y = parseFloat(parseFloat(avgfinval2021Y) + parseInt(abhy_demand1[D4]["dem_yr_21_fin_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_22_fin_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2022) {
                            S21 = S21 + 1;
                            avgfinval2022Y = parseFloat(parseFloat(avgfinval2022Y) + parseInt(abhy_demand1[D4]["dem_yr_22_fin_value"])).toFixed(2);
                        }
                        if (parseInt(abhy_demand1[D4]["dem_yr_23_fin_value"]) !== 0 && abhy_demand1[D4]["category"] === "DemandSide" && dat3 === 2023) {
                            S22 = S22 + 1;
                            avgfinval2023Y = parseFloat(parseFloat(avgfinval2023Y) + parseInt(abhy_demand1[D4]["dem_yr_23_fin_value"])).toFixed(2);
                        }
                    }
                }
            }


            if (avgphval2019 !== null && avgphval2019 !== "NaN") {
                var avgval55 = parseFloat(avgphval2019 / S3).toFixed(2);
                if (avgval55 !== "NaN") {
                    $('#phval2019').val(avgval55);
                }
                else {
                    $('#phval2019').val(0);
                }
            }
            if (avgphval2020 !== null && avgphval2020 !== "NaN") {
                var avgval56 = parseFloat(avgphval2020 / S4).toFixed(2);
                if (avgval56 !== "NaN") {
                    $('#phval2020').val(avgval56);
                }
                else {
                    $('#phval2020').val(0);
                }
            }
            if (avgphval2021 !== null && avgphval2021 !== "NaN") {
                var avgval57 = parseFloat(avgphval2021 / S5).toFixed(2);
                if (avgval57 !== "NaN") {
                    $('#phval2021').val(avgval57);
                }
                else {
                    $('#phval2021').val(0);
                }
            }
            if (avgphval2022 !== null && avgphval2022 !== "NaN") {
                var avgval58 = parseFloat(avgphval2022 / S6).toFixed(2);
                if (avgval58 !== "NaN") {
                    $('#phval2022').val(avgval58);
                }
                else {
                    $('#phval2022').val(0);
                }
            }
            if (avgphval2023 !== null && avgphval2023 !== "NaN") {
                var avgval59 = parseFloat(avgphval2023 / S7).toFixed(2);
                if (avgval59 !== "NaN") {
                    $('#phval2023').val(avgval59);
                }
                else {
                    $('#phval2023').val(0);
                }
            }


            if (avgfinval2019 !== null && avgfinval2019 !== "NaN") {
                var avgval60 = parseFloat(avgfinval2019 / S8).toFixed(2);
                if (avgval60 !== "NaN") {
                    $('#finval2019').val(avgval60);
                }
                else {
                    $('#finval2019').val(0);
                }
            }
            if (avgfinval2020 !== null && avgfinval2020 !== "NaN") {
                var avgval61 = parseFloat(avgfinval2020 / S9).toFixed(2);
                if (avgval61 !== "NaN") {
                    $('#finval2020').val(avgval61);
                }
                else {
                    $('#finval2020').val(0);
                }
            }
            if (avgfinval2021 !== null && avgfinval2021 !== "NaN") {
                var avgval62 = parseFloat(avgfinval2021 / S10).toFixed(2);
                if (avgval62 !== "NaN") {
                    $('#finval2021').val(avgval62);
                }
                else {
                    $('#finval2021').val(0);
                }
            }
            if (avgfinval2022 !== null && avgfinval2022 !== "NaN") {
                var avgval63 = parseFloat(avgfinval2022 / S11).toFixed(2);
                if (avgval63 !== "NaN") {
                    $('#finval2022').val(avgval63);
                }
                else {
                    $('#finval2022').val(0);
                }
            }
            if (avgfinval2023 !== null && avgfinval2023 !== "NaN") {
                var avgval64 = parseFloat(avgfinval2023 / S12).toFixed(2);
                if (avgval64 !== "NaN") {
                    $('#finval2023').val(avgval64);
                }
                else {
                    $('#finval2023').val(0);
                }
            }


            if (avgphval2019Y !== null && avgphval2019Y !== "NaN") {
                var avgval65 = parseFloat(avgphval2019Y / S13).toFixed(2);
                if (avgval65 !== "NaN") {
                    $('#phval2019y').val(avgval65);
                }
                else {
                    $('#phval2019y').val(0);
                }
            }
            if (avgphval2020Y !== null && avgphval2020Y !== "NaN") {
                var avgval66 = parseFloat(avgphval2020Y / S14).toFixed(2);
                if (avgval66 !== "NaN") {
                    $('#phval2020y').val(avgval66);
                }
                else {
                    $('#phval2020y').val(0);
                }
            }
            if (avgphval2021Y !== null && avgphval2021Y !== "NaN") {
                var avgval67 = parseFloat(avgphval2021Y / S15).toFixed(2);
                if (avgval67 !== "NaN") {
                    $('#phval2021y').val(avgval67);
                }
                else {
                    $('#phval2021y').val(0);
                }
            }
            if (avgphval2022Y !== null && avgphval2022Y !== "NaN") {
                var avgval68 = parseFloat(avgphval2022Y / S16).toFixed(2);
                if (avgval68 !== "NaN") {
                    $('#phval2022y').val(avgval68);
                }
                else {
                    $('#phval2022y').val(0);
                }
            }
            if (avgphval2023Y !== null && avgphval2023Y !== "NaN") {
                var avgval69 = parseFloat(avgphval2023Y / S17).toFixed(2);
                if (avgval69 !== "NaN") {
                    $('#phval2023y').val(avgval69);
                }
                else {
                    $('#phval2023y').val(0);
                }
            }


            if (avgfinval2019Y !== null && avgfinval2019Y !== "NaN") {
                var avgval70 = parseFloat(avgfinval2019Y / S18).toFixed(2);
                if (avgval70 !== "NaN") {
                    $('#finval2019y').val(avgval70);
                }
                else {
                    $('#finval2019y').val(0);
                }
            }
            if (avgfinval2020Y !== null && avgfinval2020Y !== "NaN") {
                var avgval71 = parseFloat(avgfinval2020Y / S19).toFixed(2);
                if (avgval71 !== "NaN") {
                    $('#finval2020y').val(avgval71);
                }
                else {
                    $('#finval2020y').val(0);
                }
            }
            if (avgfinval2021Y !== null && avgfinval2021Y !== "NaN") {
                var avgval72 = parseFloat(avgfinval2021Y / S20).toFixed(2);
                if (avgval72 !== "NaN") {
                    $('#finval2021y').val(avgval72);
                }
                else {
                    $('#finval2021y').val(0);
                }
            }
            if (avgfinval2022Y !== null && avgfinval2022Y !== "NaN") {
                var avgval73 = parseFloat(avgfinval2022Y / S21).toFixed(2);
                if (avgval73 !== "NaN") {
                    $('#finval2022y').val(avgval73);
                }
                else {
                    $('#finval2022y').val(0);
                }
            }
            if (avgfinval2023Y !== null && avgfinval2023Y !== "NaN") {
                var avgval74 = parseFloat(avgfinval2023Y / S22).toFixed(2);
                if (avgval74 !== "NaN") {
                    $('#finval2023y').val(avgval74);
                }
                else {
                    $('#finval2023y').val(0);
                }
            }

        }
    });
}

function getgplevelsecurityOnchangedata() {
    var ddlstate1 = "";
    if ($('#wspstate option:selected').text() === "Select State") {
        alert('Please Select State');
    }
    else {
        ddlstate1 = $('#wspstate option:selected').text();
    }

    var ddldistrict1 = $('#wspdist option:selected').text();
    var ddlblock1 = $('#wspblock option:selected').text();
    var ddlgram1 = $('#wspgram option:selected').text();
    var ddlsuplyval1 = $('#ddlsupply option:selected').text();
    var ddldemandval1 = $('#ddldemand option:selected').text();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: '/Wsp_total/getsecurityonchage',
        data: '{"state": "' + ddlstate1 + '", "district":"' + ddldistrict1 + '","block":"' + ddlblock1 + '","gp":"' + ddlgram1 + '","ddlsuplyvalue":"' + ddlsuplyval1 + '","ddldemandvalue":"' + ddldemandval1 + '"}',
        dataType: 'JSON',
        success: function (data) {
            var D3 = 0, D4 = 0, S3 = 0, S4 = 0, S5 = 0, S6 = 0, S7 = 0, S8 = 0, S9 = 0, S10 = 0, S11 = 0, S12 = 0, S13 = 0, S14 = 0, S15 = 0, S16 = 0, S17 = 0, S18 = 0, S19 = 0, S20 = 0, S21 = 0, S22 = 0;
            var avgphval2019onchange = 0, avgphval2020onchange = 0, avgphval2021onchange = 0, avgphval2022onchange = 0, avgphval2023onchange = 0, avgfinval2019onchange = 0, avgfinval2020onchange = 0, avgfinval2021onchange = 0, avgfinval2022onchange = 0,
                avgfinval2023onchange = 0, avgphval2019Yonchange = 0, avgphval2020Yonchange = 0, avgphval2021Yonchange = 0, avgphval2022Yonchange = 0, avgphval2023Yonchange = 0, avgfinval2019Yonchange = 0, avgfinval2020Yonchange = 0, avgfinval2021Yonchange = 0, avgfinval2022Yonchange = 0,
                avgfinval2023Yonchange = 0;
            var abhy_demand = "";
            var abhy_demand0 = "";
            var Jsondata2 = data;
            if (Jsondata2 !== "NoData") {
                if (Jsondata2.diffrval === 0) {
                    abhy_supply = Jsondata2.objabhysupply1;
                    abhy_demand0 = Jsondata2.objabhydemand1;
                    if (abhy_supply.length !== 0) {
                        $('#myModal').modal('hide');
                        for (D3 = 0; D3 < abhy_supply.length; D3++) {
                            var MyDate_String_Value = abhy_supply[D3]["todaydate"];
                            var value = new Date
                                (
                                    parseInt(MyDate_String_Value.replace(/(^.*\()|([+-].*$)/g, ''))
                                );
                            var dat = value.getFullYear();
                            if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2019) {
                                S3 = S3 + 1;
                                avgphval2019onchange = parseFloat(parseFloat(avgphval2019onchange) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2020) {
                                S4 = S4 + 1;
                                avgphval2020onchange = parseFloat(parseFloat(avgphval2020onchange) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2021) {
                                S5 = S5 + 1;
                                avgphval2021onchange = parseFloat(parseFloat(avgphval2021onchange) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2022) {
                                S6 = S6 + 1;
                                avgphval2022onchange = parseFloat(parseFloat(avgphval2022onchange) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["unitcost"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2023) {
                                S7 = S7 + 1;
                                avgphval2023onchange = parseFloat(parseFloat(avgphval2023onchange) + parseInt(abhy_supply[D3]["unitcost"])).toFixed(2);
                            }

                            if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2019) {
                                S8 = S8 + 1;
                                avgfinval2019onchange = parseFloat(parseFloat(avgfinval2019onchange) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2020) {
                                S9 = S9 + 1;
                                avgfinval2020onchange = parseFloat(parseFloat(avgfinval2020onchange) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2021) {
                                S10 = S10 + 1;
                                avgfinval2021onchange = parseFloat(parseFloat(avgfinval2021onchange) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2022) {
                                S11 = S11 + 1;
                                avgfinval2022onchange = parseFloat(parseFloat(avgfinval2022onchange) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["totalbudget"]) !== 0 && abhy_supply[D3]["category"] === "SupplySide" && dat === 2023) {
                                S12 = S12 + 1;
                                avgfinval2023onchange = parseFloat(parseFloat(avgfinval2023onchange) + parseInt(abhy_supply[D3]["totalbudget"])).toFixed(2);
                            }
                        }
                        if (avgphval2019onchange !== null && avgphval2019onchange !== "NaN") {
                            var avgval01 = parseFloat(avgphval2019onchange / S3).toFixed(2);
                            if (avgval01 !== "NaN") {
                                $('#phval2019').val(avgval01);
                            }
                            else {
                                $('#phval2019').val(0);
                            }
                        }
                        if (avgphval2020onchange !== null && avgphval2020onchange !== "NaN") {
                            var avgval02 = parseFloat(avgphval2020onchange / S4).toFixed(2);
                            if (avgval02 !== "NaN") {
                                $('#phval2020').val(avgval02);
                            }
                            else {
                                $('#phval2020').val(0);
                            }
                        }
                        if (avgphval2021onchange !== null && avgphval2021onchange !== "NaN") {
                            var avgval03 = parseFloat(avgphval2021onchange / S5).toFixed(2);
                            if (avgval03 !== "NaN") {
                                $('#phval2021').val(avgval03);
                            }
                            else {
                                $('#phval2021').val(0);
                            }
                        }
                        if (avgphval2022onchange !== null && avgphval2022onchange !== "NaN") {
                            var avgval04 = parseFloat(avgphval2022onchange / S6).toFixed(2);
                            if (avgval04 !== "NaN") {
                                $('#phval2022').val(avgval04);
                            }
                            else {
                                $('#phval2022').val(0);
                            }
                        }
                        if (avgphval2023onchange !== null && avgphval2023onchange !== "NaN") {
                            var avgval05 = parseFloat(avgphval2023onchange / S7).toFixed(2);
                            if (avgval05 !== "NaN") {
                                $('#phval2023').val(avgval05);
                            }
                            else {
                                $('#phval2023').val(0);
                            }
                        }


                        if (avgfinval2019onchange !== null && avgfinval2019onchange !== "NaN") {
                            var avgval06 = parseFloat(avgfinval2019onchange / S8).toFixed(2);
                            if (avgval06 !== "NaN") {
                                $('#finval2019').val(avgval06);
                            }
                            else {
                                $('#finval2019').val(0);
                            }
                        }
                        if (avgfinval2020onchange !== null && avgfinval2020onchange !== "NaN") {
                            var avgval07 = parseFloat(avgfinval2020onchange / S9).toFixed(2);
                            if (avgval07 !== "NaN") {
                                $('#finval2020').val(avgval07);
                            }
                            else {
                                $('#finval2020').val(0);
                            }
                        }
                        if (avgfinval2021onchange !== null && avgfinval2021onchange !== "NaN") {
                            var avgval08 = parseFloat(avgfinval2021onchange / S10).toFixed(2);
                            if (avgval08 !== "NaN") {
                                $('#finval2021').val(avgval08);
                            }
                            else {
                                $('#finval2021').val(0);
                            }
                        }
                        if (avgfinval2022onchange !== null && avgfinval2022onchange !== "NaN") {
                            var avgval09 = parseFloat(avgfinval2022onchange / S11).toFixed(2);
                            if (avgval09 !== "NaN") {
                                $('#finval2022').val(avgval09);
                            }
                            else {
                                $('#finval2022').val(0);
                            }
                        }
                        if (avgfinval2023onchange !== null && avgfinval2023onchange !== "NaN") {
                            var avgval10 = parseFloat(avgfinval2023onchange / S12).toFixed(2);
                            if (avgval10 !== "NaN") {
                                $('#finval2023').val(avgval10);
                            }
                            else {
                                $('#finval2023').val(0);
                            }
                        }
                    }
                    if (abhy_demand0.length !== 0) {
                        for (D4 = 0; D4 < abhy_demand0.length; D4++) {
                            var MyDate_String_Value1 = abhy_demand0[D4]["todaydate"];
                            var value1 = new Date
                                (
                                    parseInt(MyDate_String_Value1.replace(/(^.*\()|([+-].*$)/g, ''))
                                );
                            var dat1 = value1.getFullYear();
                            if (parseInt(abhy_demand0[D4]["unitcost"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2019) {
                                S13 = S13 + 1;
                                avgphval2019Yonchange = parseFloat(parseFloat(avgphval2019Yonchange) + parseInt(abhy_demand0[D4]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["unitcost"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2020) {
                                S14 = S14 + 1;
                                avgphval2020Yonchange = parseFloat(parseFloat(avgphval2020Yonchange) + parseInt(abhy_demand[D4]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["unitcost"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2021) {
                                S15 = S15 + 1;
                                avgphval2021Yonchange = parseFloat(parseFloat(avgphval2021Yonchange) + parseInt(abhy_demand0[D4]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["unitcost"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2022) {
                                S16 = S16 + 1;
                                avgphval2022Yonchange = parseFloat(parseFloat(avgphval2022Yonchange) + parseInt(abhy_demand0[D4]["unitcost"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["unitcost"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2023) {
                                S17 = S17 + 1;
                                avgphval2023Yonchange = parseFloat(parseFloat(avgphval2023Yonchange) + parseInt(abhy_demand0[D4]["unitcost"])).toFixed(2);
                            }

                            if (parseInt(abhy_demand0[D4]["totalbudget"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2019) {
                                S18 = S18 + 1;
                                avgfinval2019Yonchange = parseFloat(parseFloat(avgfinval2019Yonchange) + parseInt(abhy_demand0[D4]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["totalbudget"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2020) {
                                S19 = S19 + 1;
                                avgfinval2020Yonchange = parseFloat(parseFloat(avgfinval2020Yonchange) + parseInt(abhy_demand0[D4]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["totalbudget"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2021) {
                                S20 = S20 + 1;
                                avgfinval2021Yonchange = parseFloat(parseFloat(avgfinval2021Yonchange) + parseInt(abhy_demand0[D4]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["totalbudget"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2022) {
                                S21 = S21 + 1;
                                avgfinval2022Yonchange = parseFloat(parseFloat(avgfinval2022Yonchange) + parseInt(abhy_demand0[D4]["totalbudget"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand0[D4]["totalbudget"]) !== 0 && abhy_demand0[D4]["category"] === "DemandSide" && dat1 === 2023) {
                                S22 = S22 + 1;
                                avgfinval2023Yonchange = parseFloat(parseFloat(avgfinval2023Yonchange) + parseInt(abhy_demand0[D4]["totalbudget"])).toFixed(2);
                            }
                        }
                        if (avgphval2019Yonchange !== null && avgphval2019Yonchange !== "NaN") {
                            var avgval011 = parseFloat(avgphval2019Yonchange / S13).toFixed(2);
                            if (avgval011 !== "NaN") {
                                $('#phval2019y').val(avgval011);
                            }
                            else {
                                $('#phval2019y').val(0);
                            }
                        }
                        if (avgphval2020Yonchange !== null && avgphval2020Yonchange !== "NaN") {
                            var avgval022 = parseFloat(avgphval2020Yonchange / S14).toFixed(2);
                            if (avgval022 !== "NaN") {
                                $('#phval2020y').val(avgval022);
                            }
                            else {
                                $('#phval2020y').val(0);
                            }
                        }
                        if (avgphval2021Yonchange !== null && avgphval2021Yonchange !== "NaN") {
                            var avgval033 = parseFloat(avgphval2021Yonchange / S15).toFixed(2);
                            if (avgval033 !== "NaN") {
                                $('#phval2021y').val(avgval033);
                            }
                            else {
                                $('#phval2021y').val(0);
                            }
                        }
                        if (avgphval2022Yonchange !== null && avgphval2022Yonchange !== "NaN") {
                            var avgval044 = parseFloat(avgphval2022Yonchange / S16).toFixed(2);
                            if (avgval044 !== "NaN") {
                                $('#phval2022y').val(avgval044);
                            }
                            else {
                                $('#phval2022y').val(0);
                            }
                        }
                        if (avgphval2023Yonchange !== null && avgphval2023Yonchange !== "NaN") {
                            var avgval055 = parseFloat(avgphval2023Yonchange / S17).toFixed(2);
                            if (avgval055 !== "NaN") {
                                $('#phval2023y').val(avgval055);
                            }
                            else {
                                $('#phval2023y').val(0);
                            }
                        }


                        if (avgfinval2019Yonchange !== null && avgfinval2019Yonchange !== "NaN") {
                            var avgval066 = parseFloat(avgfinval2019Yonchange / S18).toFixed(2);
                            if (avgval066 !== "NaN") {
                                $('#finval2019y').val(avgval066);
                            }
                            else {
                                $('#finval2019y').val(0);
                            }
                        }
                        if (avgfinval2020Yonchange !== null && avgfinval2020Yonchange !== "NaN") {
                            var avgval077 = parseFloat(avgfinval2020Yonchange / S19).toFixed(2);
                            if (avgval077 !== "NaN") {
                                $('#finval2020y').val(avgval077);
                            }
                            else {
                                $('#finval2020y').val(0);
                            }
                        }
                        if (avgfinval2021Yonchange !== null && avgfinval2021Yonchange !== "NaN") {
                            var avgval088 = parseFloat(avgfinval2021Yonchange / S20).toFixed(2);
                            if (avgval088 !== "NaN") {
                                $('#finval2021y').val(avgval088);
                            }
                            else {
                                $('#finval2021y').val(0);
                            }
                        }
                        if (avgfinval2022Yonchange !== null && avgfinval2022Yonchange !== "NaN") {
                            var avgval099 = parseFloat(avgfinval2022Yonchange / S21).toFixed(2);
                            if (avgval099 !== "NaN") {
                                $('#finval2022y').val(avgval099);
                            }
                            else {
                                $('#finval2022y').val(0);
                            }
                        }
                        if (avgfinval2023Yonchange !== null && avgfinval2023Yonchange !== "NaN") {
                            var avgval0123 = parseFloat(avgfinval2023Yonchange / S22).toFixed(2);
                            if (avgval0123 !== "NaN") {
                                $('#finval2023y').val(avgval0123);
                            }
                            else {
                                $('#finval2023y').val(0);
                            }
                        }

                    }
                }
                else if (Jsondata2.diffrval === 1) {
                    abhy_supply = Jsondata2.objabhysupply2;
                    abhy_demand = Jsondata2.objabhydemand2;
                    if (abhy_supply.length !== 0) {
                        $('#myModal').modal('hide');
                        for (D3 = 0; D3 < abhy_supply.length; D3++) {
                            var MyDate_String_Value5 = abhy_supply[D3]["todaydate"];
                            var dat5 = parseInt(MyDate_String_Value5.substring(6, 10));
                            if (parseInt(abhy_supply[D3]["sup_yr_19_phys_value"]) !== 0 && dat5 === 2019) {
                                S3 = S3 + 1;
                                avgphval2019onchange = parseFloat(parseFloat(avgphval2019onchange) + parseInt(abhy_supply[D3]["sup_yr_19_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_20_phys_value"]) !== 0 && dat5 === 2020) {
                                S4 = S4 + 1;
                                avgphval2020onchange = parseFloat(parseFloat(avgphval2020onchange) + parseInt(abhy_supply[D3]["sup_yr_20_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_21_phys_value"]) !== 0 && dat5 === 2021) {
                                S5 = S5 + 1;
                                avgphval2021onchange = parseFloat(parseFloat(avgphval2021onchange) + parseInt(abhy_supply[D3]["sup_yr_21_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_22_phys_value"]) !== 0 && dat5 === 2022) {
                                S6 = S6 + 1;
                                avgphval2022onchange = parseFloat(parseFloat(avgphval2022onchange) + parseInt(abhy_supply[D3]["sup_yr_22_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_23_phys_value"]) !== 0 && dat5 === 2023) {
                                S7 = S7 + 1;
                                avgphval2023onchange = parseFloat(parseFloat(avgphval2023onchange) + parseInt(abhy_supply[D3]["sup_yr_23_phys_value"])).toFixed(2);
                            }

                            if (parseInt(abhy_supply[D3]["sup_yr_19_fin_value"]) !== 0 && dat5 === 2019) {
                                S8 = S8 + 1;
                                avgfinval2019onchange = parseFloat(parseFloat(avgfinval2019onchange) + parseInt(abhy_supply[D3]["sup_yr_19_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_20_fin_value"]) !== 0 && dat5 === 2020) {
                                S9 = S9 + 1;
                                avgfinval2020onchange = parseFloat(parseFloat(avgfinval2020onchange) + parseInt(abhy_supply[D3]["sup_yr_20_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_21_fin_value"]) !== 0 && dat5 === 2021) {
                                S10 = S10 + 1;
                                avgfinval2021onchange = parseFloat(parseFloat(avgfinval2021onchange) + parseInt(abhy_supply[D3]["sup_yr_21_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_22_fin_value"]) !== 0 && dat5 === 2022) {
                                S11 = S11 + 1;
                                avgfinval2022onchange = parseFloat(parseFloat(avgfinval2022onchange) + parseInt(abhy_supply[D3]["sup_yr_22_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_supply[D3]["sup_yr_23_fin_value"]) !== 0 && dat5 === 2023) {
                                S12 = S12 + 1;
                                avgfinval2023onchange = parseFloat(parseFloat(avgfinval2023onchange) + parseInt(abhy_supply[D3]["sup_yr_23_fin_value"])).toFixed(2);
                            }
                        }
                        if (avgphval2019onchange !== null && avgphval2019onchange !== "NaN") {
                            var avgval55 = parseFloat(avgphval2019onchange / S3).toFixed(2);
                            if (avgval55 !== "NaN") {
                                $('#phval2019').val(avgval55);
                            }
                            else {
                                $('#phval2019').val(0);
                            }
                        }
                        if (avgphval2020onchange !== null && avgphval2020onchange !== "NaN") {
                            var avgval56 = parseFloat(avgphval2020onchange / S4).toFixed(2);
                            if (avgval56 !== "NaN") {
                                $('#phval2020').val(avgval56);
                            }
                            else {
                                $('#phval2020').val(0);
                            }
                        }
                        if (avgphval2021onchange !== null && avgphval2021onchange !== "NaN") {
                            var avgval57 = parseFloat(avgphval2021onchange / S5).toFixed(2);
                            if (avgval57 !== "NaN") {
                                $('#phval2021').val(avgval57);
                            }
                            else {
                                $('#phval2021').val(0);
                            }
                        }
                        if (avgphval2022onchange !== null && avgphval2022onchange !== "NaN") {
                            var avgval58 = parseFloat(avgphval2022onchange / S6).toFixed(2);
                            if (avgval58 !== "NaN") {
                                $('#phval2022').val(avgval58);
                            }
                            else {
                                $('#phval2022').val(0);
                            }
                        }
                        if (avgphval2023onchange !== null && avgphval2023onchange !== "NaN") {
                            var avgval59 = parseFloat(avgphval2023onchange / S7).toFixed(2);
                            if (avgval59 !== "NaN") {
                                $('#phval2023').val(avgval59);
                            }
                            else {
                                $('#phval2023').val(0);
                            }
                        }


                        if (avgfinval2019onchange !== null && avgfinval2019onchange !== "NaN") {
                            var avgval60 = parseFloat(avgfinval2019onchange / S8).toFixed(2);
                            if (avgval60 !== "NaN") {
                                $('#finval2019').val(avgval60);
                            }
                            else {
                                $('#finval2019').val(0);
                            }
                        }
                        if (avgfinval2020onchange !== null && avgfinval2020onchange !== "NaN") {
                            var avgval61 = parseFloat(avgfinval2020onchange / S9).toFixed(2);
                            if (avgval61 !== "NaN") {
                                $('#finval2020').val(avgval61);
                            }
                            else {
                                $('#finval2020').val(0);
                            }
                        }
                        if (avgfinval2021onchange !== null && avgfinval2021onchange !== "NaN") {
                            var avgval62 = parseFloat(avgfinval2021onchange / S10).toFixed(2);
                            if (avgval62 !== "NaN") {
                                $('#finval2021').val(avgval62);
                            }
                            else {
                                $('#finval2021').val(0);
                            }
                        }
                        if (avgfinval2022onchange !== null && avgfinval2022onchange !== "NaN") {
                            var avgval63 = parseFloat(avgfinval2022onchange / S11).toFixed(2);
                            if (avgval63 !== "NaN") {
                                $('#finval2022').val(avgval63);
                            }
                            else {
                                $('#finval2022').val(0);
                            }
                        }
                        if (avgfinval2023onchange !== null && avgfinval2023onchange !== "NaN") {
                            var avgval64 = parseFloat(avgfinval2023onchange / S12).toFixed(2);
                            if (avgval64 !== "NaN") {
                                $('#finval2023').val(avgval64);
                            }
                            else {
                                $('#finval2023').val(0);
                            }
                        }
                    }
                    if (abhy_demand.length !== 0) {
                        for (D4 = 0; D4 < abhy_demand.length; D4++) {
                            var MyDate_String_Value6 = abhy_demand[D4]["todaydate"];
                            var dat6 = parseInt(MyDate_String_Value6.substring(6, 10));
                            if (parseInt(abhy_demand[D4]["dem_yr_19_phys_value"]) !== 0 && dat6 === 2019) {
                                S13 = S13 + 1;
                                avgphval2019Yonchange = parseFloat(parseFloat(avgphval2019Yonchange) + parseInt(abhy_demand[D4]["dem_yr_19_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_20_phys_value"]) !== 0 && dat6 === 2020) {
                                S14 = S14 + 1;
                                avgphval2020Yonchange = parseFloat(parseFloat(avgphval2020Yonchange) + parseInt(abhy_demand[D4]["dem_yr_20_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_21_phys_value"]) !== 0 && dat6 === 2021) {
                                S15 = S15 + 1;
                                avgphval2021Yonchange = parseFloat(parseFloat(avgphval2021Yonchange) + parseInt(abhy_demand[D4]["dem_yr_21_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_22_phys_value"]) !== 0 && dat6 === 2022) {
                                S16 = S16 + 1;
                                avgphval2022Yonchange = parseFloat(parseFloat(avgphval2022Yonchange) + parseInt(abhy_demand[D4]["dem_yr_22_phys_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_23_phys_value"]) !== 0 && dat6 === 2023) {
                                S17 = S17 + 1;
                                avgphval2023Yonchange = parseFloat(parseFloat(avgphval2023Yonchange) + parseInt(abhy_demand[D4]["dem_yr_23_phys_value"])).toFixed(2);
                            }

                            if (parseInt(abhy_demand[D4]["dem_yr_19_fin_value"]) !== 0 && dat6 === 2019) {
                                S18 = S18 + 1;
                                avgfinval2019Yonchange = parseFloat(parseFloat(avgfinval2019Yonchange) + parseInt(abhy_demand[D4]["dem_yr_19_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_20_fin_value"]) !== 0 && dat6 === 2020) {
                                S19 = S19 + 1;
                                avgfinval2020Yonchange = parseFloat(parseFloat(avgfinval2020Yonchange) + parseInt(abhy_demand[D4]["dem_yr_20_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_21_fin_value"]) !== 0 && dat6 === 2021) {
                                S20 = S20 + 1;
                                avgfinval2021Yonchange = parseFloat(parseFloat(avgfinval2021Yonchange) + parseInt(abhy_demand[D4]["dem_yr_21_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_22_fin_value"]) !== 0 && dat6 === 2022) {
                                S21 = S21 + 1;
                                avgfinval2022Yonchange = parseFloat(parseFloat(avgfinval2022Yonchange) + parseInt(abhy_demand[D4]["dem_yr_22_fin_value"])).toFixed(2);
                            }
                            if (parseInt(abhy_demand[D4]["dem_yr_23_fin_value"]) !== 0 && dat6 === 2023) {
                                S22 = S22 + 1;
                                avgfinval2023Yonchange = parseFloat(parseFloat(avgfinval2023Yonchange) + parseInt(abhy_demand[D4]["dem_yr_23_fin_value"])).toFixed(2);
                            }
                        }
                        if (avgphval2019Yonchange !== null && avgphval2019Yonchange !== "NaN") {
                            var avgval65 = parseFloat(avgphval2019Yonchange / S13).toFixed(2);
                            if (avgval65 !== "NaN") {
                                $('#phval2019y').val(avgval65);
                            }
                            else {
                                $('#phval2019y').val(0);
                            }
                        }
                        if (avgphval2020Yonchange !== null && avgphval2020Yonchange !== "NaN") {
                            var avgval66 = parseFloat(avgphval2020Yonchange / S14).toFixed(2);
                            if (avgval66 !== "NaN") {
                                $('#phval2020y').val(avgval66);
                            }
                            else {
                                $('#phval2020y').val(0);
                            }
                        }
                        if (avgphval2021Yonchange !== null && avgphval2021Yonchange !== "NaN") {
                            var avgval67 = parseFloat(avgphval2021Yonchange / S15).toFixed(2);
                            if (avgval67 !== "NaN") {
                                $('#phval2021y').val(avgval67);
                            }
                            else {
                                $('#phval2021y').val(0);
                            }
                        }
                        if (avgphval2022Yonchange !== null && avgphval2022Yonchange !== "NaN") {
                            var avgval68 = parseFloat(avgphval2022Yonchange / S16).toFixed(2);
                            if (avgval68 !== "NaN") {
                                $('#phval2022y').val(avgval68);
                            }
                            else {
                                $('#phval2022y').val(0);
                            }
                        }
                        if (avgphval2023Yonchange !== null && avgphval2023Yonchange !== "NaN") {
                            var avgval69 = parseFloat(avgphval2023Yonchange / S17).toFixed(2);
                            if (avgval69 !== "NaN") {
                                $('#phval2023y').val(avgval69);
                            }
                            else {
                                $('#phval2023y').val(0);
                            }
                        }


                        if (avgfinval2019Yonchange !== null && avgfinval2019Yonchange !== "NaN") {
                            var avgval70 = parseFloat(avgfinval2019Yonchange / S18).toFixed(2);
                            if (avgval70 !== "NaN") {
                                $('#finval2019y').val(avgval70);
                            }
                            else {
                                $('#finval2019y').val(0);
                            }
                        }
                        if (avgfinval2020Yonchange !== null && avgfinval2020Yonchange !== "NaN") {
                            var avgval71 = parseFloat(avgfinval2020Yonchange / S19).toFixed(2);
                            if (avgval71 !== "NaN") {
                                $('#finval2020y').val(avgval71);
                            }
                            else {
                                $('#finval2020y').val(0);
                            }
                        }
                        if (avgfinval2021Yonchange !== null && avgfinval2021Yonchange !== "NaN") {
                            var avgval72 = parseFloat(avgfinval2021Yonchange / S20).toFixed(2);
                            if (avgval72 !== "NaN") {
                                $('#finval2021y').val(avgval72);
                            }
                            else {
                                $('#finval2021y').val(0);
                            }
                        }
                        if (avgfinval2022Yonchange !== null && avgfinval2022Yonchange !== "NaN") {
                            var avgval73 = parseFloat(avgfinval2022Yonchange / S21).toFixed(2);
                            if (avgval73 !== "NaN") {
                                $('#finval2022y').val(avgval73);
                            }
                            else {
                                $('#finval2022y').val(0);
                            }
                        }
                        if (avgfinval2023Yonchange !== null && avgfinval2023Yonchange !== "NaN") {
                            var avgval74 = parseFloat(avgfinval2023Yonchange / S22).toFixed(2);
                            if (avgval74 !== "NaN") {
                                $('#finval2023y').val(avgval74);
                            }
                            else {
                                $('#finval2023y').val(0);
                            }
                        }
                    }
                }
            }
            else {
                alert('No Data Available...');
            }

        }
    });
}

function getsecuritysavedata() {
    var obj = {};
    var obj1 = {};
    if ($('#wspstate option:selected').text() !== "Select State") {
        obj.state_name = $('#wspstate option:selected').text();
        obj1.state_name = $('#wspstate option:selected').text();
    }
    else {
        obj.state_name = "0";
        obj1.state_name = "0";
    }
    if ($('#wspdist option:selected').text() !== "Select District") {
        obj.district_name = $('#wspdist option:selected').text();
        obj1.district_name = $('#wspdist option:selected').text();
    }
    else {
        obj.district_name = "0";
        obj1.district_name = "0";
    }
    if ($('#wspblock option:selected').text() !== "Select Block") {
        obj.block = $('#wspblock option:selected').text();
        obj1.block = $('#wspblock option:selected').text();
    }
    else {
        obj.block = "0";
        obj1.block = "0";
    }
    if ($('#wspgram option:selected').text() !== "Select Gram Panchayat") {
        obj.gpname = $('#wspgram option:selected').text();
        obj1.gpname = $('#wspgram option:selected').text();
    }
    else {
        obj.gpname = "0";
        obj1.gpname = "0";
    }
    obj.village_name = 0;
    obj1.village_name = 0;
    if ($("#phval2019").val() === "" || $("#phval2019").val() === "0") {
        alert('Please Enter 2019 Supply Side Physical Value');
        $("#phval2019").focus();
        return false;
    }
    if ($("#finval2019").val() === "" || $("#finval2019").val() === "0") {
        alert('Please Enter 2019 Supply Side Financial Value');
        $("#finval2019").focus();
        return false;
    }
    if ($("#phval2020").val() === "" || $("#phval2020").val() === "0") {
        alert('Please Enter 2020 Supply Side Physical Value');
        $("#phval2020").focus();
        return false;
    }
    if ($("#finval2020").val() === "" || $("#finval2020").val() === "0") {
        alert('Please Enter 2020 Supply Side Financial Value');
        $("#finval2020").focus();
        return false;
    }
    if ($("#phval2021").val() === "" || $("#phval2021").val() === "0") {
        alert('Please Enter 2021 Supply Side Physical Value');
        $("#phval2021").focus();
        return false;
    }
    if ($("#finval2021").val() === "" || $("#finval2021").val() === "0") {
        alert('Please Enter 2021 Supply Side Financial Value');
        $("#finval2021").focus();
        return false;
    }
    if ($("#phval2022").val() === "" || $("#phval2022").val() === "0") {
        alert('Please Enter 2022 Supply Side Physical Value');
        $("#phval2022").focus();
        return false;
    }
    if ($("#finval2022").val() === "" || $("#finval2022").val() === "0") {
        alert('Please Enter 2022 Supply Side Financial Value');
        $("#finval2022").focus();
        return false;
    }
    if ($("#phval2023").val() === "" || $("#phval2023").val() === "0") {
        alert('Please Enter 2023 Supply Side Physical Value');
        $("#phval2023").focus();
        return false;
    }
    if ($("#finval2023").val() === "" || $("#finval2023").val() === "0") {
        alert('Please Enter 2023 Supply Side Financial Value');
        $("#finval2023").focus();
        return false;
    }

    if ($("#phval2019y").val() === "" || $("#phval2019y").val() === "0") {
        alert('Please Enter 2019 Demand Side Physical Value');
        $("#phval2019y").focus();
        return false;
    }
    if ($("#finval2019y").val() === "" || $("#finval2019y").val() === "0") {
        alert('Please Enter 2019 Demand Side Financial Value');
        $("#finval2019y").focus();
        return false;
    }
    if ($("#phval2020y").val() === "" || $("#phval2020y").val() === "0") {
        alert('Please Enter 2020 Demand Side Physical Value');
        $("#phval2020y").focus();
        return false;
    }
    if ($("#finval2020y").val() === "" || $("#finval2020y").val() === "0") {
        alert('Please Enter 2020 Demand Side Financial Value');
        $("#finval2020y").focus();
        return false;
    }
    if ($("#phval2021y").val() === "" || $("#phval2021y").val() === "0") {
        alert('Please Enter 2021 Demand Side Physical Value');
        $("#phval2021y").focus();
        return false;
    }
    if ($("#finval2021y").val() === "" || $("#finval2021y").val() === "0") {
        alert('Please Enter 2021 Demand Side Financial Value');
        $("#finval2021y").focus();
        return false;
    }
    if ($("#phval2022y").val() === "" || $("#phval2022y").val() === "0") {
        alert('Please Enter 2022 Demand Side Physical Value');
        $("#phval2022y").focus();
        return false;
    }
    if ($("#finval2022y").val() === "" || $("#finval2022y").val() === "0") {
        alert('Please Enter 2022 Demand Side Financial Value');
        $("#finval2022y").focus();
        return false;
    }
    if ($("#phval2023y").val() === "" || $("#phval2023y").val() === "0") {
        alert('Please Enter 2023 Demand Side Physical Value');
        $("#phval2023y").focus();
        return false;
    }
    if ($("#finval2023y").val() === "" || $("#finval2023y").val() === "0") {
        alert('Please Enter 2023 Demand Side Financial Value');
        $("#finval2023y").focus();
        return false;
    }
    obj.sup_yr_19_phys_value = $("#phval2019").val();
    obj.sup_yr_19_fin_value = $("#finval2019").val();
    obj.sup_yr_20_phys_value = $("#phval2020").val();
    obj.sup_yr_20_fin_value = $("#finval2020").val();
    obj.sup_yr_21_phys_value = $("#phval2021").val();
    obj.sup_yr_21_fin_value = $("#finval2021").val();
    obj.sup_yr_22_phys_value = $("#phval2022").val();
    obj.sup_yr_22_fin_value = $("#finval2022").val();
    obj.sup_yr_23_phys_value = $("#phval2023").val();
    obj.sup_yr_23_fin_value = $("#finval2023").val();
    obj.insertdiff = "2";
    obj.category = "SupplySide";
    var ddlsuplyval = $('#ddlsupply option:selected').text();
    if (ddlsuplyval !== "Select Supply Activity") {
        obj.activity = ddlsuplyval;
    }
    else {
        obj.activity = "0";
    }

    obj1.dem_yr_19_phys_value = $("#phval2019y").val();
    obj1.dem_yr_19_fin_value = $("#finval2019y").val();
    obj1.dem_yr_20_phys_value = $("#phval2020y").val();
    obj1.dem_yr_20_fin_value = $("#finval2020y").val();
    obj1.dem_yr_21_phys_value = $("#phval2021y").val();
    obj1.dem_yr_21_fin_value = $("#finval2021y").val();
    obj1.dem_yr_22_phys_value = $("#phval2022y").val();
    obj1.dem_yr_22_fin_value = $("#finval2022y").val();
    obj1.dem_yr_23_phys_value = $("#phval2023y").val();
    obj1.dem_yr_23_fin_value = $("#finval2023y").val();
    obj1.insertdiff = "2";
    obj1.category = "DemandSide";
    var ddldemand = $('#ddldemand option:selected').text();
    if (ddldemand !== "Select Demand Activity") {
        obj1.activity = ddldemand;
    }
    else {
        obj1.activity = "0";
    }
    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Wsp_total/saveSecuritydata",
        data: "{'Securitysupply':'" + JSON.stringify(obj) + "','securitydemand':'" + JSON.stringify(obj1) + "'}",
        dataType: 'JSON',
        success: function (response) {
            alert('Process Sucess..');
            getgplevelsecuritydata();
            //Clear();
        },
        error: function (a) { }
    });
}

function getsecuritydatadelete() {
    var state_name = "", district_name = "", sub_district_name = "", gram_panchayat_name = "", ddlsuplyval1 = "", ddldemandval1 = "";
    ddlsuplyval1 = $('#ddlsupply option:selected').text();
    if (ddlsuplyval1 === "Select Supply Activity") {
        alert('Please Select Supply Activity');
        $('#ddlsupply').focus();
        return false;
    }
    ddldemandval1 = $('#ddldemand option:selected').text();
    if (ddldemandval1 === "Select Demand Activity") {
        alert('Please Select Demand Activity');
        $('#ddldemand').focus();
        return false;
    }
    state_name = $('#wspstate option:selected').text();
    district_name = $('#wspdist option:selected').text();
    sub_district_name = $('#wspblock option:selected').text();
    gram_panchayat_name = $('#wspgram option:selected').text();

    $.ajax({
        type: 'POST',
        contentType: 'application/json; chatset=utf-8',
        url: "/Wsp_total/securitydatadelete",
        data: "{'state':'" + state_name + "','district':'" + district_name + "','block':'" + sub_district_name + "','gp':'" + gram_panchayat_name + "','ddlsuplyvalue':'" + ddlsuplyval1 + "','ddldemandvalue':'" + ddldemandval1 + "'}",
        dataType: 'JSON',
        success: function (response) {
            var resp = response;
            if (resp === "Delete") {
                alert('Delete Success..');
            }
            if (resp === "Nodata") {
                alert('No Data Available..');
            }
            getgplevelsecuritydata();
        },
        error: function (a) { }
    });
}