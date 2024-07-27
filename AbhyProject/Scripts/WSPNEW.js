//auto calculation functionality demend
$(document).ready(function () {
    //this calculates values automatically
    getsprings()
    getRainfall();
    $("#txtsurfacewaterarea, #txtsurfacewaterrainfall, #txtsurfaceTemperature").on("keydown keyup", function () {
        getRainfall();
    });
    $("#txtsurfacewater_rechargefactor, #txt_Net_surface_water_availability,#txt_Net_Ground_water_availability").on("keydown keyup", function () {
        getRainfall();
        
    });
    $("#txtsprings, #txtspringsarea,#txtspringsdepth").on("keydown keyup", function () {
        getsprings();

    });
   

});


function getRainfall() {
  
    var surfacewaterarea = $("#txtsurfacewaterarea").val();
    var surfacewaterrainfall = $("#txtsurfacewaterrainfall").val();
    var surfaceTemperature = $('#txtsurfaceTemperature').val();

    var RechargeFactor = $("#txtsurfacewater_rechargefactor").val();
    var Net_surface_water_availability = $("#txt_Net_surface_water_availability").val();
    var Net_Ground_water_availability = $("#txt_Net_Ground_water_availability").val();

    var result_Evapotranspiration = (parseInt(surfacewaterarea) * parseInt(surfacewaterrainfall)) + parseInt(surfaceTemperature);
    //calculate the Evapotranspiration
    if (!isNaN(result_Evapotranspiration)) {
        
        document.getElementById('txtsurfaceEvapotranspiration').value = result_Evapotranspiration;

    }
    
    //calculate the Rainfall based Ground Water Recharge
    var result_avalibility_of_rainfall = parseInt(RechargeFactor) + parseInt(Net_surface_water_availability) + parseInt(Net_Ground_water_availability);
    var totalvalue = parseInt(result_Evapotranspiration) + parseInt(result_avalibility_of_rainfall)
    if (!isNaN(totalvalue)) {

        document.getElementById('txt_Rainfall_based_Ground_Water_Recharge').value = totalvalue;

    }

}
function getsprings() {

    var numberOf_springs = $("#txtsprings").val();
    var Springs_area = $("#txtspringsarea").val();
    var springs_AvgDepath = $('#txtspringsdepth').val();
    //var surfaceTemperature = $('#txtspringsdischarge').val();


    var springsresult = (parseInt(numberOf_springs) * parseInt(Springs_area)) + parseInt(springs_AvgDepath);
    //calculate the Evapotranspiration
    if (!isNaN(springsresult)) {

        document.getElementById('txtspringsdischarge').value = springsresult;

    }
}
