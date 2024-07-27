



function draftInffo() {

   
        
        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/WspNew/WaterDraft_user_SavedInfo",
            data: "{'UserIDDDD': '" + UserIDDDD + "'}",

            dataType: 'JSON',
            success: function (response) {
                if (response == "NO") {
                    Getting_water_budget_info();
                }
                else {
                    
                    //irrigation kharif
                    $('#Sprinkler_Water_Demand').text(response.irri_sprinkler_water_demand);
                    $('#Sprinkler_RabiWater_Demand').text(response.irri_sprinkler_rabiwater_demand);
                    $('#Summer_Crops_Water_Demand').text(response.irri_sprinkler_water_demand);

                    $('#Paddy_Kharif_Value').val(response.irri_kharif_paddy_crop_area);
                    $('#paddy_Water_Require').text(response.irri_kharif_paddy_water_demand);
                    $('#Ragi_Kharif_Value').val(response.irri_kharif_ragi_crop_area);
                    $('#Ragi_Water_Require').text(response.irri_kharif_ragi_water_demand);
                    $('#GroundNut_Kharif_Value').val(response.irri_kharif_groundnut_crop_area);
                    $('#GroundNut_Water_Require').text(response.irri_kharif_groundnut_water_demand);
                    $('#Sugarcane_Kharif_Value').val(response.irri_kharif_sugarcane_crop_area);
                    $('#Sugarcane_Water_Require').text(response.irri_kharif_sugarcane_water_demand);
                    $('#Tomato_Kharif_Value').val(response.irri_kharif_tomoto_crop_area);
                    $('#Tomato_Water_Require').text(response.irri_kharif_tomoto_water_demand);
                    $('#Cabbage_Kharif_Value').val(response.irri_kharif_cabbage_crop_area);
                    $('#Cabbage_Water_Require').text(response.irri_kharif_cabbage_water_demand);
                    $('#Beans_Kharif_Value').val(response.irri_kharif_beans_crop_area);
                    $('#Beans_Water_Require').text(response.irri_kharif_beans_water_demand);
                    $('#Floriculture_Kharif_Value').val(response.irri_kharif_floriculture_crop_area);
                    $('#Floriculture_Water_Require').text(response.irri_kharif_floriculture_water_demand);
                    $('#Sericulture_Kharif_Value').val(response.irri_kharif_sericulture_crop_area);
                    $('#Sericulture_Water_Require').text(response.irri_kharif_sericulture_water_demand);
                    $('#Cucmber_Kharif_Value').val(response.irri_kharif_cucumber_crop_area);
                    $('#Cucmber_Water_Require').text(response.irri_kharif_cucumber_water_demand);
                    $('#Banana_Kharif_Value').val(response.irri_kharif_banana_crop_area);
                    $('#Banana_Water_Require').text(response.irri_kharif_banana_water_demand);
                    $('#Fodder_Kharif_Value').val(response.irri_kharif_fodder_crop_area);
                    $('#Fodder_Water_Require').text(response.irri_kharif_fodder_water_demand);
                    $('#Maize_Kharif_Value').val(response.irri_kharif_maize_crop_area);
                    $('#Maize_Water_Require').text(response.irri_kharif_maize_water_demand);
                    $('#Potato_Kharif_Value').val(response.irri_kharif_potato_crop_area);
                    $('#Potato_Water_Require').text(response.irri_kharif_potato_water_demand);
                    $('#Chillies_Kharif_Value').val(response.irri_kharif_chillies_crop_area);
                    $('#Chillies_Water_Require').text(response.irri_kharif_chillies_water_demand);
                    $('#Cotton_Kharif_Value').val(response.irri_kharif_cotton_crop_area);
                    $('#Cotton_Water_Require').text(response.irri_kharif_cotton_water_demand);
                    $('#Melon_Kharif_Value').val(response.irri_kharif_melon_crop_area);
                    $('#Melon_Water_Require').text(response.irri_kharif_melon_water_demand);
                    $('#Citrus_Kharif_Value').val(response.irri_kharif_citrus_crop_area);
                    $('#Citrus_Water_Require').text(response.irri_kharif_citrus_water_demand);
                    $('#Peanut_Kharif_Value').val(response.irri_kharif_peanut_crop_area);
                    $('#Peanut_Water_Require').text(response.irri_kharif_peanut_water_demand);
                    $('#Horticulture_Kharif_Value').val(response.irri_kharif_horticulture_crop_area);
                    $('#Horticulture_Water_Require').text(response.irri_kharif_horticulture_water_demand);
                    $('#Total_Water_Demand_for_Kharif_Crops').val(response.irri_kharif_total_water_demand_crops);
                    
                    //irrigation rabi
                    $('#Sericulture_Rabi_Value').val(response.irri_rabi_sericulture_crop_area);
                    $('#Sericulture_Rabi_Water_Require').text(response.irri_rabi_sericulture_water_demand);
                    $('#Tomota_Rabi_Value').val(response.irri_rabi_tomoto_crop_area);
                    $('#Tomota_Rabi_Water_Require').text(response.irri_rabi_tomoto_water_demand);
                    $('#Cabbage_Rabi_Value').val(response.irri_rabi_cabbage_crop_area);
                    $('#Cabbage_Rabi_Water_Require').text(response.irri_rabi_cabbage_water_demand);
                    $('#Beans_Rabi_Value').val(response.irri_rabi_beans_crop_area);
                    $('#Beans_Rabi_Water_Require').text(response.irri_rabi_beans_water_demand);
                    $('#Floriculture_Rabi_Value').val(response.irri_rabi_floriculture_crop_area);
                    $('#Floriculture_Rabi_Water_Require').text(response.irri_rabi_floriculture_water_demand);
                    $('#Potato_Rabi_Value').val(response.irri_rabi_potato_crop_area);
                    $('#Potato_Rabi_Water_Require').text(response.irri_rabi_potato_water_demand);
                    $('#Cucumber_Rabi_Value').val(response.irri_rabi_cucumber_crop_area);
                    $('#Cucumber_Rabi_Water_Require').text(response.irri_rabi_cucumber_water_demand);
                    $('#Ragi_Rabi_Value').val(response.irri_rabi_ragi_crop_area);
                    $('#Ragi_Rabi_Water_Require').text(response.irri_rabi_ragi_water_demand);
                    $('#Sugarcane_Rabi_Value').val(response.irri_rabi_sugarcane_crop_area);
                    $('#Sugarcane_Rabi_Water_Require').text(response.irri_rabi_sugarcane_water_demand);
                    $('#Maize_Rabi_Value').val(response.irri_rabi_maize_crop_area);
                    $('#Maize_Rabi_Water_Require').text(response.irri_rabi_maize_water_demand);
                    $('#Fodder_Rabi_Value').val(response.irri_rabi_fodder_crop_area);
                    $('#Fodder_Rabi_Water_Require').text(response.irri_rabi_fodder_water_demand);
                    $('#Paddy_Rabi_Value').val(response.irri_rabi_paddy_crop_area);
                    $('#Paddy_Rabi_Water_Require').text(response.irri_rabi_paddy_water_demand);
                    $('#Alfalfa_Rabi_Value').val(response.irri_rabi_alfalfa_crop_area);
                    $('#Alfalfa_Rabi_Water_Require').text(response.irri_kharif_paddy_crop_area);
                    $('#Onion_Rabi_Value').val(response.irri_rabi_alfalfa_water_demand);
                    $('#Onion_Rabi_Water_Require').text(response.irri_rabi_onion_water_demand);
                    $('#Hortculture_Rabi_Value').val(response.irri_rabi_hortculture_crop_area);
                    $('#Hortculture_Rabi_Water_Require').text(response.irri_rabi_hortculture_water_demand);
                    $('#Sunflower_Rabi_Value').val(response.irri_rabi_sunflower_crop_area);
                    $('#Sunflower_Rabi_Water_Require').text(response.irri_rabi_sunflower_water_demand);
                    $('#Total_Water_Demand_for_Rabi_Crops').val(response.irri_rabi_total_water_demand_crops);

                    //irrigation summer crop
                    $('#Sericulture_Crop_Value').val(response.irri_summer_sericulture_crop_area);
                    $('#Sericulture_Crop_Water_Require').text(response.irri_summer_sericulture_water_demand);
                    $('#Tomota_Crop_Value').val(response.irri_summer_tomoto_crop_area);
                    $('#Tomota_Crop_Water_Require').text(response.irri_summer_tomoto_water_demand);
                    $('#Cabbage_Crop_Value').val(response.irri_summer_cabbage_crop_area);
                    $('#Cabbage_Crop_Water_Require').text(response.irri_summer_cabbage_water_demand);
                    $('#Beans_Crop_Value').val(response.irri_summer_beans_crop_area);
                    $('#Beans_Crop_Water_Require').text(response.irri_summer_beans_water_demand);
                    $('#Floriculture_Crop_Value').val(response.irri_summer_floriculture_crop_area);
                    $('#Floriculture_Crop_Water_Require').text(response.irri_summer_floriculture_water_demand);
                    $('#Maize_Crop_Value').val(response.irri_summer_maize_crop_area);
                    $('#Maize_Crop_Water_Require').text(response.irri_summer_maize_water_demand);
                    $('#Fodder_Crop_Value').val(response.irri_summer_fodder_crop_area);
                    $('#Fodder_Crop_Water_Require').text(response.irri_summer_fodder_water_demand);
                    $('#Sugarcane_Crop_Value').val(response.irri_summer_sugarcane_crop_area);
                    $('#Sugarcane_Crop_Water_Require').text(response.irri_summer_sugarcane_water_demand);
                    $('#Total_Water_Demand_for_Summer_Crops').val(response.irri_summer_total_water_demand_crops);

                    //domestic section
                    $('#data_Total_population').val(response.domestic_total_population);
                    $('#data_Per_Capita_Demand_for_Population').val(response.domestic_per_capita_population);
                    $('#data_Total_number_of_cattle').val(response.domestic_tol_noof_cattle);
                    $('#data_Per_Capita_Demand_for_Cattle').val(response.domestic_per_capita_cattle);
                    $('#data_Total_number_of_buffalos').val(response.domestic_tol_noof_buffaloes);
                    $('#data_Per_Capita_Demand_for_Buffalos').val(response.domestic_per_capita_buffaloes);
                    $('#data_Total_number_of_goats_sheeps').val(response.domestic_tol_noof_goats_sheeps);
                    $('#data_Per_Capita_Demand_for_Goats_and_Sheep').val(response.domestic_per_capita_goats_sheeps);
                    $('#data_Total_water_requirement_for_human_and_livestock').val(response.domestic_tol_water_req_human_livestock);

                    //industry section
                    $('#data_Surface_water_intake').val(response.industry_surface_water_intake);
                    $('#data_Ground_water_intake').val(response.industry_ground_water_intake);
                    $('#data_Total_number_of_production_days').val(response.industry_tol_noof_production);
                    $('#data_Total_number_of_industries').val(response.industry_tol_noof_industries);
                    $('#data_Industry_Water_Draft').val(response.industry_water_draft);

                    //environment flow section
                    $('#data_Environmental_Flow').val(response.industry_environmental_flow);
                }
            }
        });
    
}
function Draft_Save() {
    WaterUtilization_Irrigation_Calculation();
    D1();
    D2();
    Total_Water_Reqirement_For_Human_and_LiveStock_Cal();
    D3();
    Totatal_Industry_Draft_Cal();
    D4();
    
    var Sprinkler_Water_Demand = 0;
    Sprinkler_Water_Demand = $('#Sprinkler_Water_Demand').text();
    var Sprinkler_RabiWater_Demand = 0;
     Sprinkler_RabiWater_Demand = $('#Sprinkler_RabiWater_Demand').text();
    var Summer_Crops_Water_Demand = $('#Summer_Crops_Water_Demand').text();
    
    var Paddy_Kharif_Value = $('#Paddy_Kharif_Value').val();
    if (Paddy_Kharif_Value == "") {

        Paddy_Kharif_Value = "0";
    }
    var paddy_Water_Require = $('#paddy_Water_Require').text();
    if (paddy_Water_Require == "") {
        paddy_Water_Require = "0";
    }
    var Ragi_Kharif_Value = $('#Ragi_Kharif_Value').val();
    if (Ragi_Kharif_Value == "") {
        Ragi_Kharif_Value = "0";
    }
    var Ragi_Water_Require = $('#Ragi_Water_Require').text();
    if (Ragi_Water_Require == "") {
        Ragi_Water_Require = "0";
    }
    var GroundNut_Kharif_Value = $('#GroundNut_Kharif_Value').val();
    if (GroundNut_Kharif_Value == "") {
        GroundNut_Kharif_Value = "0";
    }
    var GroundNut_Water_Require = $('#GroundNut_Water_Require').text();
    if (GroundNut_Water_Require == "") {
        GroundNut_Water_Require = "0";
    }
    var Sugarcane_Kharif_Value = $('#Sugarcane_Kharif_Value').val();
    if (Sugarcane_Kharif_Value == "") {
        Sugarcane_Kharif_Value="0";
    }
    var Sugarcane_Water_Require = $('#Sugarcane_Water_Require').text();
    if (Sugarcane_Water_Require == "") {
        Sugarcane_Water_Require = "0";
    }
    var Tomato_Kharif_Value = $('#Tomato_Kharif_Value').val();
    if (Tomato_Kharif_Value == "") {
        Tomato_Kharif_Value = "0";
    }
    var Tomato_Water_Require = $('#Tomato_Water_Require').text();
    if (Tomato_Water_Require == "") {
        Tomato_Water_Require = "0";
    }
    var Cabbage_Kharif_Value = $('#Cabbage_Kharif_Value').val();
    if (Cabbage_Kharif_Value=="") {
        Cabbage_Kharif_Value = "0";
    }
    var Cabbage_Water_Require = $('#Cabbage_Water_Require').text();
    if (Cabbage_Water_Require == "") {
        Cabbage_Water_Require = "0";
    }
    var Beans_Kharif_Value = $('#Beans_Kharif_Value').val();
    if (Beans_Kharif_Value == "") {
        Beans_Kharif_Value = "0";
    }
   var Beans_Water_Require = $('#Beans_Water_Require').text();
    if (Beans_Water_Require == "") {
        Beans_Water_Require = "0";
    }
    var Floriculture_Kharif_Value = $('#Floriculture_Kharif_Value').val();
    if (Floriculture_Kharif_Value == "") {
        Floriculture_Kharif_Value = "0";
    }
    var Floriculture_Water_Require = $('#Floriculture_Water_Require').text();
    if (Floriculture_Water_Require == "") {
        Floriculture_Water_Require = "0";
    }
    var Sericulture_Kharif_Value = $('#Sericulture_Kharif_Value').val();
    if (Sericulture_Kharif_Value == "") {
        Sericulture_Kharif_Value = "0";
    }
    var Sericulture_Water_Require = $('#Sericulture_Water_Require').text();
    if (Sericulture_Water_Require == "") {
        Sericulture_Water_Require = "0";
    }
    var Cucmber_Kharif_Value = $('#Cucmber_Kharif_Value').val();
    if (Cucmber_Kharif_Value == "") {
        Cucmber_Kharif_Value = "0";
    }
    var Cucmber_Water_Require = $('#Cucmber_Water_Require').text();
    if (Cucmber_Water_Require == "") {
        Cucmber_Water_Require = "0";
    }
    var Banana_Kharif_Value = $('#Banana_Kharif_Value').val();
    if (Banana_Kharif_Value == "") {
        Banana_Kharif_Value = "0";
    }
    var Banana_Water_Require = $('#Banana_Water_Require').text();
    if (Banana_Water_Require == "") {
        Banana_Water_Require = "0";
    }
    var Fodder_Kharif_Value = $('#Fodder_Kharif_Value').val();
    if (Fodder_Kharif_Value == "") {
        Fodder_Kharif_Value = "0";
    }
    var Fodder_Water_Require = $('#Fodder_Water_Require').text();
    if (Fodder_Water_Require == "") {
        Fodder_Water_Require = "0";
    }
    var Maize_Kharif_Value = $('#Maize_Kharif_Value').val();
    if (Maize_Kharif_Value == "") {
        Maize_Kharif_Value = "0";
    }
   var Maize_Water_Require = $('#Maize_Water_Require').text();
    if (Maize_Water_Require == "") {
        Maize_Water_Require = "0";
    }
    var Potato_Kharif_Value = $('#Potato_Kharif_Value').val();
    if (Potato_Kharif_Value == "") {
        Potato_Kharif_Value = "0";
    }
    var Potato_Water_Require = $('#Potato_Water_Require').text();
    if (Potato_Water_Require == "") {
        Potato_Water_Require = "0";
    }
    var Chillies_Kharif_Value = $('#Chillies_Kharif_Value').val();
    if (Chillies_Kharif_Value == "") {
        Chillies_Kharif_Value = "0";
    }
    var Chillies_Water_Require = $('#Chillies_Water_Require').text();
    if (Chillies_Water_Require == "") {
        Chillies_Water_Require = "0";
    }
    var Cotton_Kharif_Value = $('#Cotton_Kharif_Value').val();
    if (Cotton_Kharif_Value == "") {
        Cotton_Kharif_Value = "0";
    }
    var Cotton_Water_Require = 0;
    Cotton_Water_Require = $('#Cotton_Water_Require').text();
    if (Cotton_Water_Require == "") {
        Cotton_Water_Require = "0";
    }
    var Melon_Kharif_Value = 0;
    Melon_Kharif_Value = $('#Melon_Kharif_Value').val();
    if (Melon_Kharif_Value == "") {
        Melon_Kharif_Value = "0";
    }
    var Melon_Water_Require = 0;
    Melon_Water_Require = $('#Melon_Water_Require').text();
    if (Melon_Water_Require == "") {
        Melon_Water_Require = "0";
    }
    var Citrus_Kharif_Value = 0;
    Citrus_Kharif_Value = $('#Citrus_Kharif_Value').val();
    if (Citrus_Kharif_Value == "") {
        Citrus_Kharif_Value = "0";
    }
    var Citrus_Water_Require = 0;
    Citrus_Water_Require = $('#Citrus_Water_Require').text();
    if (Citrus_Water_Require == "") {
        Citrus_Water_Require = "0";
    }
    var Peanut_Kharif_Value = 0;
    Peanut_Kharif_Value = $('#Peanut_Kharif_Value').val();
    if (Peanut_Kharif_Value == "") {
        Peanut_Kharif_Value = "0";
    }
    var Peanut_Water_Require = 0;
    Peanut_Water_Require = $('#Peanut_Water_Require').text();
    if (Peanut_Water_Require == "") {
        Peanut_Water_Require = "0";
    }
    var Horticulture_Kharif_Value = 0;
    Horticulture_Kharif_Value = $('#Horticulture_Kharif_Value').val();
    if (Horticulture_Kharif_Value == "") {
        Citrus_Water_Require = "0";
    }
    var Horticulture_Water_Require = 0;
    Horticulture_Water_Require = $('#Horticulture_Water_Require').text();
    if (Citrus_Water_Require == "") {
        Citrus_Water_Require = "0";
    }
    var Total_Water_Demand_for_Kharif_Crops = $('#Total_Water_Demand_for_Kharif_Crops').text();
    if (Total_Water_Demand_for_Kharif_Crops == "") {
        Total_Water_Demand_for_Kharif_Crops = "0";
    }
//rabi
    var Sericulture_Rabi_Value = $('#Sericulture_Rabi_Value').val();
    if (Sericulture_Rabi_Value == "") {
        Sericulture_Rabi_Value = "0";
    }
    var Sericulture_Rabi_Water_Require = $('#Sericulture_Rabi_Water_Require').text();
    if (Sericulture_Rabi_Water_Require == "") {
        Sericulture_Rabi_Water_Require = "0";
    }
    var Tomota_Rabi_Value = $('#Tomota_Rabi_Value').val();
    if (Tomota_Rabi_Value == "") {
        Tomota_Rabi_Value = "0";
    }
    var Tomota_Rabi_Water_Require = $('#Tomota_Rabi_Water_Require').text();
    if (Tomota_Rabi_Water_Require == "") {
        Tomota_Rabi_Water_Require = "0";
    }
    var Cabbage_Rabi_Value = $('#Cabbage_Rabi_Value').val();
    if (Cabbage_Rabi_Value == "") {
        Cabbage_Rabi_Value = "0";
    }
    var Cabbage_Rabi_Water_Require = $('#Cabbage_Rabi_Water_Require').text();
    if (Cabbage_Rabi_Water_Require == "") {
        Cabbage_Rabi_Water_Require = "0";
    }
    var Beans_Rabi_Value = $('#Beans_Rabi_Value').val();
    if (Beans_Rabi_Value == "") {
        Beans_Rabi_Value = "0";
    }
    var Beans_Rabi_Water_Require = $('#Beans_Rabi_Water_Require').text();
    if (Beans_Rabi_Water_Require == "") {
        Beans_Rabi_Water_Require = "0";
    }
    var Floriculture_Rabi_Value = $('#Floriculture_Rabi_Value').val();
    if (Floriculture_Rabi_Value == "") {
        Floriculture_Rabi_Value = "0";
    }
    var Floriculture_Rabi_Water_Require = $('#Floriculture_Rabi_Water_Require').text();
    if (Floriculture_Rabi_Water_Require == "") {
        Floriculture_Rabi_Water_Require = "0";
    }
    var Potato_Rabi_Value = $('#Potato_Rabi_Value').val();
    if (Potato_Rabi_Value == "") {
        Potato_Rabi_Value = "0";
    }
    var Potato_Rabi_Water_Require = $('#Potato_Rabi_Water_Require').text();
    if (Potato_Rabi_Water_Require == "") {
        Potato_Rabi_Water_Require = "0";
    }
    var Cucumber_Rabi_Value = $('#Cucumber_Rabi_Value').val();
    if (Cucumber_Rabi_Value == "") {
        Cucumber_Rabi_Value = "0";
    }
    var Cucumber_Rabi_Water_Require = $('#Cucumber_Rabi_Water_Require').text();
    if (Cucumber_Rabi_Water_Require == "") {
        Cucumber_Rabi_Water_Require = "0";
    }
    var Ragi_Rabi_Value = $('#Ragi_Rabi_Value').val();
    if (Ragi_Rabi_Value == "") {
        Ragi_Rabi_Value = "0";
    }
    var Ragi_Rabi_Water_Require = $('#Ragi_Rabi_Water_Require').text();
    if (Ragi_Rabi_Water_Require == "") {
        Ragi_Rabi_Water_Require = "0";
    }
    var Sugarcane_Rabi_Value = $('#Sugarcane_Rabi_Value').val();
    if (Sugarcane_Rabi_Value == "") {
        Sugarcane_Rabi_Value = "0";
    }
    var Sugarcane_Rabi_Water_Require = $('#Sugarcane_Rabi_Water_Require').text();
    if (Sugarcane_Rabi_Water_Require == "") {
        Sugarcane_Rabi_Water_Require = "0";
    }
    var Maize_Rabi_Value = $('#Maize_Rabi_Value').val();
    if (Maize_Rabi_Value == "") {
        Maize_Rabi_Value = "0";
    }
    var Maize_Rabi_Water_Require = $('#Maize_Rabi_Water_Require').text();
    if (Maize_Rabi_Water_Require == "") {
        Maize_Rabi_Water_Require = "0";
    }
    var Fodder_Rabi_Value = $('#Fodder_Rabi_Value').val();
    if (Fodder_Rabi_Value == "") {
        Fodder_Rabi_Value = "0";
    }
    var Fodder_Rabi_Water_Require = $('#Fodder_Rabi_Water_Require').text();
    if (Fodder_Rabi_Water_Require == "") {
        Fodder_Rabi_Water_Require = "0";
    }
    var Paddy_Rabi_Value = $('#Paddy_Rabi_Value').val();
    if (Paddy_Rabi_Value == "") {
        Paddy_Rabi_Value = "0";
    }
    var Paddy_Rabi_Water_Require = $('#Paddy_Rabi_Water_Require').text();
    if (Paddy_Rabi_Water_Require == "") {
        Paddy_Rabi_Water_Require = "0";
    }
    var Alfalfa_Rabi_Value = $('#Alfalfa_Rabi_Value').val();
    if (Alfalfa_Rabi_Value == "") {
        Alfalfa_Rabi_Value = "0";
    }
    var Alfalfa_Rabi_Water_Require = $('#Alfalfa_Rabi_Water_Require').text();
    if (Alfalfa_Rabi_Water_Require == "") {
        Alfalfa_Rabi_Water_Require = "0";
    }
    var Onion_Rabi_Value = $('#Onion_Rabi_Value').val();
    if (Onion_Rabi_Value == "") {
        Onion_Rabi_Value = "0";
    }
    var Onion_Rabi_Water_Require = $('#Onion_Rabi_Water_Require').text();
    if (Onion_Rabi_Water_Require == "") {
        Onion_Rabi_Water_Require = "0";
    }
    var Hortculture_Rabi_Value = $('#Hortculture_Rabi_Value').val();
    if (Hortculture_Rabi_Value == "") {
        Hortculture_Rabi_Value = "0";
    }
    var Hortculture_Rabi_Water_Require = $('#Hortculture_Rabi_Water_Require').text();
    if (Hortculture_Rabi_Water_Require == "") {
        Hortculture_Rabi_Water_Require = "0";
    }
    var Sunflower_Rabi_Value = $('#Sunflower_Rabi_Value').val();
    if (Sunflower_Rabi_Value == "") {
        Sunflower_Rabi_Value = "0";
    }
    var Sunflower_Rabi_Water_Require = $('#Sunflower_Rabi_Water_Require').text();
    if (Sunflower_Rabi_Water_Require == "") {
        Sunflower_Rabi_Water_Require = "0";
    }
    var Total_Water_Demand_for_Rabi_Crops = $('#Total_Water_Demand_for_Rabi_Crops').text();
    if (Total_Water_Demand_for_Rabi_Crops == "") {
        Total_Water_Demand_for_Rabi_Crops = "0";
    }

//summer crop

    var Sericulture_Crop_Value = $('#Sericulture_Crop_Value').val();
    if (Sericulture_Crop_Value == "") {
        Sericulture_Crop_Value = "0";
    }
    var Sericulture_Crop_Water_Require = $('#Sericulture_Crop_Water_Require').text();
    if (Sericulture_Crop_Water_Require == "") {
        Sericulture_Crop_Water_Require = "0";
    }
    var Tomota_Crop_Value = $('#Tomota_Crop_Value').val();
    if (Tomota_Crop_Value == "") {
        Tomota_Crop_Value = "0";
    }
    var Tomota_Crop_Water_Require = $('#Tomota_Crop_Water_Require').text();
    if (Tomota_Crop_Water_Require == "") {
        Tomota_Crop_Water_Require = "0";
    }
    var Cabbage_Crop_Value = $('#Cabbage_Crop_Value').val();
    if (Cabbage_Crop_Value == "") {
        Cabbage_Crop_Value = "0";
    }
    var Cabbage_Crop_Water_Require = $('#Cabbage_Crop_Water_Require').text();
    if (Cabbage_Crop_Water_Require == "") {
        Cabbage_Crop_Water_Require = "0";
    }
    var Beans_Crop_Value = $('#Beans_Crop_Value').val();
    if (Beans_Crop_Value == "") {
        Beans_Crop_Value = "0";
    }
    var Beans_Crop_Water_Require = $('#Beans_Crop_Water_Require').text();
    if (Beans_Crop_Water_Require == "") {
        Beans_Crop_Water_Require = "0";
    }
    var Floriculture_Crop_Value = $('#Floriculture_Crop_Value').val();
    if (Floriculture_Crop_Value == "") {
        Floriculture_Crop_Value = "0";
    }
    var Floriculture_Crop_Water_Require = $('#Floriculture_Crop_Water_Require').text();
    if (Floriculture_Crop_Water_Require == "") {
        Floriculture_Crop_Water_Require = "0";
    }
    var Maize_Crop_Value = $('#Maize_Crop_Value').val();
    if (Maize_Crop_Value == "") {
        Maize_Crop_Value = "0";
    }
    var Maize_Crop_Water_Require = $('#Maize_Crop_Water_Require').text();
    if (Maize_Crop_Water_Require == "") {
        Maize_Crop_Water_Require = "0";
    }
    var Fodder_Crop_Value = $('#Fodder_Crop_Value').val();
    if (Fodder_Crop_Value == "") {
        Fodder_Crop_Value = "0";
    }
    var Fodder_Crop_Water_Require = $('#Fodder_Crop_Water_Require').text();
    if (Fodder_Crop_Water_Require == "") {
        Fodder_Crop_Water_Require = "0";
    }
    var Sugarcane_Crop_Value = $('#Sugarcane_Crop_Value').val();
    if (Sugarcane_Crop_Value == "") {
        Sugarcane_Crop_Value = "0";
    }
    var Sugarcane_Crop_Water_Require = $('#Sugarcane_Crop_Water_Require').text();
    if (Sugarcane_Crop_Water_Require == "") {
        Sugarcane_Crop_Water_Require = "0";
    }
    var Total_Water_Demand_for_Summer_Crops = $('#Total_Water_Demand_for_Summer_Crops').text();
    if (Total_Water_Demand_for_Summer_Crops == "") {
        Total_Water_Demand_for_Summer_Crops = "0";
    }

//domestic
    var data_Total_population = $('#data_Total_population').val();
    if (data_Total_population == "") {
        data_Total_population = "0";
    }
    var data_Per_Capita_Demand_for_Population = $('#data_Per_Capita_Demand_for_Population').val();
    if (data_Per_Capita_Demand_for_Population == "") {
        data_Per_Capita_Demand_for_Population = "0";
    }
    var data_Total_number_of_cattle = $('#data_Total_number_of_cattle').val();
    if (data_Total_number_of_cattle == "") {
        data_Total_number_of_cattle = "0";
    }
    var data_Per_Capita_Demand_for_Cattle = $('#data_Per_Capita_Demand_for_Cattle').val();
    if (data_Per_Capita_Demand_for_Cattle == "") {
        data_Per_Capita_Demand_for_Cattle = "0";
    }
    var data_Total_number_of_buffalos = $('#data_Total_number_of_buffalos').val();
    if (data_Total_number_of_buffalos == "") {
        data_Total_number_of_buffalos = "0";
    }
    var data_Per_Capita_Demand_for_Buffalos = $('#data_Per_Capita_Demand_for_Buffalos').val();
    if (data_Per_Capita_Demand_for_Buffalos == "") {
        data_Per_Capita_Demand_for_Buffalos = "0";
    }
    var data_Total_number_of_goats_sheeps = $('#data_Total_number_of_goats_sheeps').val();
    if (data_Total_number_of_goats_sheeps == "") {
        data_Total_number_of_goats_sheeps = "0";
    }
    var data_Per_Capita_Demand_for_Goats_and_Sheep = $('#data_Per_Capita_Demand_for_Goats_and_Sheep').val();
    if (data_Per_Capita_Demand_for_Goats_and_Sheep == "") {
        data_Per_Capita_Demand_for_Goats_and_Sheep = "0";
    }
    var data_Total_water_requirement_for_human_and_livestock = $('#data_Total_water_requirement_for_human_and_livestock').val();
    if (data_Total_water_requirement_for_human_and_livestock == "") {
        data_Total_water_requirement_for_human_and_livestock = "0";
    }
//industry
    var data_Surface_water_intake = $('#data_Surface_water_intake').val();
    if (data_Surface_water_intake == "") {
        data_Surface_water_intake = "0";
    }
    var data_Ground_water_intake = $('#data_Ground_water_intake').val();
    if (data_Ground_water_intake == "") {
        data_Ground_water_intake = "0";
    }
    var data_Total_number_of_production_days = $('#data_Total_number_of_production_days').val();
    if (data_Total_number_of_production_days == "") {
        data_Total_number_of_production_days = "0";
    }
    var data_Total_number_of_industries = $('#data_Total_number_of_industries').val();
    if (data_Total_number_of_industries == "") {
        data_Total_number_of_industries = "0";
    }
    
    var data_Industry_Water_Draft = $('#data_Industry_Water_Draft').val();
    if (data_Industry_Water_Draft == "") {
        data_Industry_Water_Draft = "0";
    }
//environment flow
    var data_Environmental_Flow = $('#data_Environmental_Flow').val();
    if (data_Environmental_Flow == "") {
        data_Environmental_Flow = "0";
    }
    
   
        var obj = {};
//irrigation section
    
        obj.irri_sprinkler_water_demand = Sprinkler_Water_Demand;
        obj.irri_sprinkler_rabiwater_demand = Sprinkler_RabiWater_Demand;
        obj.irri_summer_crops_water_demand = Summer_Crops_Water_Demand;
        //kharif section
        obj.irri_kharif_paddy_crop_area = Paddy_Kharif_Value;
        obj.irri_kharif_paddy_water_demand = paddy_Water_Require;
        obj.irri_kharif_ragi_crop_area = Ragi_Kharif_Value;
        obj.irri_kharif_ragi_water_demand = Ragi_Water_Require;
        obj.irri_kharif_groundnut_crop_area = GroundNut_Kharif_Value;
        obj.irri_kharif_groundnut_water_demand = GroundNut_Water_Require;
        obj.irri_kharif_sugarcane_crop_area = Sugarcane_Kharif_Value;
        obj.irri_kharif_sugarcane_water_demand = Sugarcane_Water_Require;
        obj.irri_kharif_tomoto_crop_area = Tomato_Kharif_Value;
        obj.irri_kharif_tomoto_water_demand = Tomato_Water_Require;
        obj.irri_kharif_cabbage_crop_area = Cabbage_Kharif_Value;
        obj.irri_kharif_cabbage_water_demand = Cabbage_Water_Require;
        obj.irri_kharif_beans_crop_area = Beans_Kharif_Value;
        obj.irri_kharif_beans_water_demand = Beans_Water_Require;
        obj.irri_kharif_floriculture_crop_area = Floriculture_Kharif_Value;
        obj.irri_kharif_floriculture_water_demand = Floriculture_Water_Require;
        obj.irri_kharif_sericulture_crop_area = Sericulture_Kharif_Value;
        obj.irri_kharif_sericulture_water_demand = Sericulture_Water_Require;
        obj.irri_kharif_cucumber_crop_area = Cucmber_Kharif_Value;
        obj.irri_kharif_cucumber_water_demand = Cucmber_Water_Require;
        obj.irri_kharif_banana_crop_area = Banana_Kharif_Value;
        obj.irri_kharif_banana_water_demand = Banana_Water_Require;
        obj.irri_kharif_fodder_crop_area = Fodder_Kharif_Value;
        obj.irri_kharif_fodder_water_demand = Fodder_Water_Require;
        obj.irri_kharif_maize_crop_area = Maize_Kharif_Value;
        obj.irri_kharif_maize_water_demand = Maize_Water_Require;
        obj.irri_kharif_potato_crop_area = Potato_Kharif_Value;
        obj.irri_kharif_potato_water_demand = Potato_Water_Require;
        obj.irri_kharif_chillies_crop_area = Chillies_Kharif_Value;
        obj.irri_kharif_chillies_water_demand = Chillies_Water_Require;
        obj.irri_kharif_cotton_crop_area = Cotton_Kharif_Value;
        obj.irri_kharif_cotton_water_demand = Cotton_Water_Require;
        obj.irri_kharif_melon_crop_area = Melon_Kharif_Value;
        obj.irri_kharif_melon_water_demand = Melon_Water_Require;
        obj.irri_kharif_citrus_crop_area = Citrus_Kharif_Value;
        obj.irri_kharif_citrus_water_demand = Citrus_Water_Require;
        obj.irri_kharif_peanut_crop_area = Peanut_Kharif_Value;
        obj.irri_kharif_peanut_water_demand = Peanut_Water_Require;
        obj.irri_kharif_horticulture_crop_area = Horticulture_Kharif_Value;
        obj.irri_kharif_horticulture_water_demand = Horticulture_Water_Require;
        obj.irri_kharif_total_water_demand_crops = Total_Water_Demand_for_Kharif_Crops;
//rabi section
        obj.irri_rabi_sericulture_crop_area = Sericulture_Rabi_Value;
        obj.irri_rabi_sericulture_water_demand = Sericulture_Rabi_Water_Require;
        obj.irri_rabi_tomoto_crop_area = Tomota_Rabi_Value;
        obj.irri_rabi_tomoto_water_demand = Tomota_Rabi_Water_Require;
        obj.irri_rabi_cabbage_crop_area = Cabbage_Rabi_Value;
        obj.irri_rabi_cabbage_water_demand = Cabbage_Rabi_Water_Require;
        obj.irri_rabi_beans_crop_area = Beans_Rabi_Value;
        obj.irri_rabi_beans_water_demand = Beans_Rabi_Water_Require;
        obj.irri_rabi_floriculture_crop_area = Floriculture_Rabi_Value;
        obj.irri_rabi_floriculture_water_demand = Floriculture_Rabi_Water_Require;
        obj.irri_rabi_potato_crop_area = Potato_Rabi_Value;
        obj.irri_rabi_potato_water_demand = Potato_Rabi_Water_Require;
        obj.irri_rabi_cucumber_crop_area = Cucumber_Rabi_Value;
        obj.irri_rabi_cucumber_water_demand = Cucumber_Rabi_Water_Require;
        obj.irri_rabi_ragi_crop_area = Ragi_Rabi_Value;
        obj.irri_rabi_ragi_water_demand = Ragi_Rabi_Water_Require;
        obj.irri_rabi_sugarcane_crop_area = Sugarcane_Rabi_Value;
        obj.irri_rabi_sugarcane_water_demand = Sugarcane_Rabi_Water_Require;
        obj.irri_rabi_maize_crop_area = Maize_Rabi_Value;
        obj.irri_rabi_maize_water_demand = Maize_Rabi_Water_Require;
        obj.irri_rabi_fodder_crop_area = Fodder_Rabi_Value;
        obj.irri_rabi_fodder_water_demand = Fodder_Rabi_Water_Require;
        obj.irri_rabi_paddy_crop_area = Paddy_Rabi_Value;
        obj.irri_rabi_paddy_water_demand = Paddy_Rabi_Water_Require;
        obj.irri_rabi_alfalfa_crop_area = Alfalfa_Rabi_Value;
        obj.irri_rabi_alfalfa_water_demand = Alfalfa_Rabi_Water_Require;
        obj.irri_rabi_onion_crop_area = Onion_Rabi_Value;
        obj.irri_rabi_onion_water_demand = Onion_Rabi_Water_Require;
        obj.irri_rabi_hortculture_crop_area = Hortculture_Rabi_Value;
        obj.irri_rabi_hortculture_water_demand = Hortculture_Rabi_Water_Require;
        obj.irri_rabi_sunflower_crop_area = Sunflower_Rabi_Value;
        obj.irri_rabi_sunflower_water_demand = Sunflower_Rabi_Water_Require;
        obj.irri_rabi_total_water_demand_crops = Total_Water_Demand_for_Rabi_Crops;
//summer crops section
        obj.irri_summer_sericulture_crop_area = Sericulture_Crop_Value;
        obj.irri_summer_sericulture_water_demand = Sericulture_Crop_Water_Require;
        obj.irri_summer_tomoto_crop_area = Tomota_Crop_Value;
        obj.irri_summer_tomoto_water_demand = Tomota_Crop_Water_Require;
        obj.irri_summer_cabbage_crop_area = Cabbage_Crop_Value;
        obj.irri_summer_cabbage_water_demand = Cabbage_Crop_Water_Require;
        obj.irri_summer_beans_crop_area = Beans_Crop_Value;
        obj.irri_summer_beans_water_demand = Beans_Crop_Water_Require;
        obj.irri_summer_floriculture_crop_area = Floriculture_Crop_Value;
        obj.irri_summer_floriculture_water_demand = Floriculture_Crop_Water_Require;
        obj.irri_summer_maize_crop_area = Maize_Crop_Value;
        obj.irri_summer_maize_water_demand = Maize_Crop_Water_Require;
        obj.irri_summer_fodder_crop_area = Fodder_Crop_Value;
        obj.irri_summer_fodder_water_demand = Fodder_Crop_Water_Require;
        obj.irri_summer_sugarcane_crop_area = Sugarcane_Crop_Value;
        obj.irri_summer_sugarcane_water_demand = Sugarcane_Crop_Water_Require;
        obj.irri_summer_total_water_demand_crops = Total_Water_Demand_for_Summer_Crops;

//domestic section
        obj.domestic_total_population = data_Total_population;
        obj.domestic_per_capita_population = data_Per_Capita_Demand_for_Population;
        obj.domestic_tol_noof_cattle = data_Total_number_of_cattle;
        obj.domestic_per_capita_cattle = data_Per_Capita_Demand_for_Cattle;
        obj.domestic_tol_noof_buffaloes = data_Total_number_of_buffalos;
        obj.domestic_per_capita_buffaloes = data_Per_Capita_Demand_for_Buffalos;
        obj.domestic_tol_noof_goats_sheeps = data_Total_number_of_goats_sheeps;
        obj.domestic_per_capita_goats_sheeps = data_Per_Capita_Demand_for_Goats_and_Sheep;
        obj.domestic_tol_water_req_human_livestock = data_Total_water_requirement_for_human_and_livestock;
//industry section
        obj.industry_surface_water_intake = data_Surface_water_intake;
        obj.industry_ground_water_intake = data_Ground_water_intake;
        obj.industry_tol_noof_production = data_Total_number_of_production_days;
        obj.industry_tol_noof_industries = data_Total_number_of_industries;
        obj.industry_water_draft = data_Industry_Water_Draft;


    obj.industry_environmental_flow = data_Environmental_Flow;

    


        $.ajax({
            type: 'POST',
            contentType: 'application/json; chatset=utf-8',
            url: "/WspNew/WaterDraftSavedData",
            data: "{'Data': '" + JSON.stringify(obj) + "'}",

            dataType: 'JSON',
            success: function (response) {

                $('#ar_Error').text(response);

                Draft_Report();
                Availabilty_Report();
            }
        });

    }
   
