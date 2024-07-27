var total_Sprinkler_all_area_geting = 0;
var sprinkler_approx_estimated_cost = 0;
var Ar_count = 0;
var ar_approx_estimated_cost = 0;
var total_of_spinklerr_and_ar_app_value = 0;

var total_drip_all_area_geting = 0;
var drip_approx_estimated_cost = 0;
var WC_count = 0;
var wc_approx_estimated_cost = 0;
var total_of_drip_and_wc_app_value = 0;

var total_ug_pipeline_all_area_geting = 0;
var pipeline_approx_estimated_cost = 0;
var AO_count = 0;
var anyother_approx_estimated_cost = 0;
var total_of_pipeline_and_ao_app_value = 0;

var total_Reduction_in_GW_SW_all_area_geting = 0;
var reduction_approx_estimated_cost = 0;

var total_Crop_diversificationall_area_geting = 0;
var crop_approx_estimated_cost = 0;

var total_other_measures_all_area_geting = 0;
var other_approx_estimated_cost = 0;


var total_of_Area_Proposed_under_various_Measures_value_sum = 0;
var total_of_approx_estimated_cost_deamend_side_value = 0;

var total_of_approx_estimated_cost_supply_side_value = 0;
var total_of_Fund_requirement_Demand_and_Supply_side_value = 0;
$(document).ready(function () {
    State = '@Session["gstate"]';
    Dist = '@Session["gdist"]';
    Block = '@Session["gblock"]';
    Gram = '@Session["ggram"]';
    $('#state_name').val(State);
    $('#district_name').val(Dist);
    $('#block_name').val(Block);
    $('#gpname').val(Gram);

    Sprinkler_all_area_geting();
    Drip_all_area_geting();
    ug_pipeline_area_geting();
    other_measures_getting()

});



//Area Proposed under various Measures (Ha) = All Area crops  sprinkler

function Sprinkler_all_area_geting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/SprinklerInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            // $('#spinkler_approx_cost').text('');
            $('#all_area_spinkler').text('');

            if (response == "Error") {
                window.location = "/WSPHome/Fund_requirements";
            }

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {
                $('#Sprinkler_kharif_Paddy_FundingSource').val(response.sprinkler_kharif_paddy_fundingsource);
                //sprinkler_kharif

                var sprinkler_kharif_paddy_irri_area = 0, sprinkler_kharif_ragi_irri_area = 0, sprinkler_kharif_groundnut_irri_area = 0, sprinkler_kharif_sugarcane_irri_area = 0, sprinkler_kharif_tomoto_irri_area = 0;
                var sprinkler_kharif_floriculture_irri_area = 0, sprinkler_kharif_sericulture_irri_area = 0, sprinkler_kharif_banana_irri_area = 0, sprinkler_kharif_fodder_irri_area = 0, sprinkler_kharif_maize_irri_area = 0;
                var sprinkler_kharif_chillies_irri_area = 0, sprinkler_kharif_cotton_irri_area = 0, sprinkler_kharif_melon_irri_area = 0, sprinkler_kharif_citrus_irri_area = 0, sprinkler_kharif_horticulture_irri_area = 0;
                var sprinkler_kharif_othercrop_irri_area1 = 0, sprinkler_kharif_othercrop_irri_area2 = 0, sprinkler_kharif_othercrop_irri_area3 = 0, sprinkler_kharif_othercrop_irri_area4 = 0, sprinkler_kharif_othercrop_irri_area5 = 0;


                if (response.sprinkler_kharif_paddy_irri_area != null && response.sprinkler_kharif_paddy_irri_area != "") {
                    sprinkler_kharif_paddy_irri_area = response.sprinkler_kharif_paddy_irri_area;
                }
                if (response.sprinkler_kharif_ragi_irri_area != null && response.sprinkler_kharif_ragi_irri_area != "") {
                    sprinkler_kharif_ragi_irri_area = response.sprinkler_kharif_ragi_irri_area;
                }
                if (response.sprinkler_kharif_groundnut_irri_area != null && response.sprinkler_kharif_groundnut_irri_area != "") {
                    sprinkler_kharif_groundnut_irri_area = response.sprinkler_kharif_groundnut_irri_area;
                }
                if (response.sprinkler_kharif_sugarcane_irri_area != null && response.sprinkler_kharif_sugarcane_irri_area != "") {
                    sprinkler_kharif_sugarcane_irri_area = response.sprinkler_kharif_sugarcane_irri_area;
                }
                if (response.sprinkler_kharif_tomoto_irri_area != null && response.sprinkler_kharif_tomoto_irri_area != "") {
                    sprinkler_kharif_tomoto_irri_area = response.sprinkler_kharif_tomoto_irri_area;
                }

                if (response.sprinkler_kharif_floriculture_irri_area != null && response.sprinkler_kharif_floriculture_irri_area != "") {
                    sprinkler_kharif_floriculture_irri_area = response.sprinkler_kharif_floriculture_irri_area;
                }
                if (response.sprinkler_kharif_sericulture_irri_area != null && response.sprinkler_kharif_sericulture_irri_area != "") {
                    sprinkler_kharif_sericulture_irri_area = response.sprinkler_kharif_sericulture_irri_area;
                }
                if (response.sprinkler_kharif_banana_irri_area != null && response.sprinkler_kharif_banana_irri_area != "") {
                    sprinkler_kharif_banana_irri_area = response.sprinkler_kharif_banana_irri_area;
                }
                if (response.sprinkler_kharif_fodder_irri_area != null && response.sprinkler_kharif_fodder_irri_area != "") {
                    sprinkler_kharif_fodder_irri_area = response.sprinkler_kharif_fodder_irri_area;
                }
                if (response.sprinkler_kharif_maize_irri_area != null && response.sprinkler_kharif_maize_irri_area != "") {
                    sprinkler_kharif_maize_irri_area = response.sprinkler_kharif_maize_irri_area;
                }

                if (response.sprinkler_kharif_chillies_irri_area != null && response.sprinkler_kharif_chillies_irri_area != "") {
                    sprinkler_kharif_chillies_irri_area = response.sprinkler_kharif_chillies_irri_area;
                }
                if (response.sprinkler_kharif_cotton_irri_area != null && response.sprinkler_kharif_cotton_irri_area != "") {
                    sprinkler_kharif_cotton_irri_area = response.sprinkler_kharif_cotton_irri_area;
                }
                if (response.sprinkler_kharif_melon_irri_area != null && response.sprinkler_kharif_melon_irri_area != "") {
                    sprinkler_kharif_melon_irri_area = response.sprinkler_kharif_melon_irri_area;
                }
                if (response.sprinkler_kharif_citrus_irri_area != null && response.sprinkler_kharif_citrus_irri_area != "") {
                    sprinkler_kharif_citrus_irri_area = response.sprinkler_kharif_citrus_irri_area;
                }
                if (response.sprinkler_kharif_horticulture_irri_area != null && response.sprinkler_kharif_horticulture_irri_area != "") {
                    sprinkler_kharif_horticulture_irri_area = response.sprinkler_kharif_horticulture_irri_area;
                }
                if (response.sprinkler_kharif_othercrop_irri_area1 != null && response.sprinkler_kharif_othercrop_irri_area1 != "") {
                    sprinkler_kharif_othercrop_irri_area1 = response.sprinkler_kharif_othercrop_irri_area1;
                }
                if (response.sprinkler_kharif_othercrop_irri_area2 != null && response.sprinkler_kharif_othercrop_irri_area2 != "") {
                    sprinkler_kharif_othercrop_irri_area2 = response.sprinkler_kharif_othercrop_irri_area2;
                }

                if (response.sprinkler_kharif_othercrop_irri_area3 != null && response.sprinkler_kharif_othercrop_irri_area3 != "") {
                    sprinkler_kharif_othercrop_irri_area3 = response.sprinkler_kharif_othercrop_irri_area3;
                }

                if (response.sprinkler_kharif_othercrop_irri_area4 != null && response.sprinkler_kharif_othercrop_irri_area4 != "") {
                    sprinkler_kharif_othercrop_irri_area4 = response.sprinkler_kharif_othercrop_irri_area4;
                }
                if (response.sprinkler_kharif_othercrop_irri_area5 != null && response.sprinkler_kharif_othercrop_irri_area5 != "") {
                    sprinkler_kharif_othercrop_irri_area5 = response.sprinkler_kharif_othercrop_irri_area5;
                }

                //sprinkler_Rabi
                var sprinkler_rabi_sericulture_irri_area = 0, sprinkler_rabi_tomoto_irri_area = 0, sprinkler_rabi_floriculture_irri_area = 0, sprinkler_rabi_ragi_irri_area = 0, sprinkler_rabi_sugarcane_irri_area = 0;
                var sprinkler_rabi_maize_irri_area = 0, sprinkler_rabi_fodder_irri_area = 0, sprinkler_rabi_paddy_irri_area = 0, sprinkler_rabi_alfalfa_irri_area = 0, sprinkler_rabi_horticulture_irri_area = 0, sprinkler_rabi_sunflower_irri_area = 0;
                var sprinkler_rabi_othercrop_irri_area1 = 0, sprinkler_rabi_othercrop_irri_area2 = 0, sprinkler_rabi_othercrop_irri_area3 = 0, sprinkler_rabi_othercrop_irri_area4 = 0, sprinkler_rabi_othercrop_irri_area5 = 0;

                if (response.sprinkler_rabi_sericulture_irri_area != null && response.sprinkler_rabi_sericulture_irri_area != "") {
                    sprinkler_rabi_sericulture_irri_area = response.sprinkler_rabi_sericulture_irri_area;
                }
                if (response.sprinkler_rabi_tomoto_irri_area != null && response.sprinkler_rabi_tomoto_irri_area != "") {
                    sprinkler_rabi_tomoto_irri_area = response.sprinkler_rabi_tomoto_irri_area;
                }
                if (response.sprinkler_rabi_floriculture_irri_area != null && response.sprinkler_rabi_floriculture_irri_area != "") {
                    sprinkler_rabi_floriculture_irri_area = response.sprinkler_rabi_floriculture_irri_area;
                }
                if (response.sprinkler_rabi_ragi_irri_area != null && response.sprinkler_rabi_ragi_irri_area != "") {
                    sprinkler_rabi_ragi_irri_area = response.sprinkler_rabi_ragi_irri_area;
                }
                if (response.sprinkler_rabi_sugarcane_irri_area != null && response.sprinkler_rabi_sugarcane_irri_area != "") {
                    sprinkler_rabi_sugarcane_irri_area = response.sprinkler_rabi_sugarcane_irri_area;
                }
                if (response.sprinkler_rabi_maize_irri_area != null && response.sprinkler_rabi_maize_irri_area != "") {
                    sprinkler_rabi_maize_irri_area = response.sprinkler_rabi_maize_irri_area;
                }
                if (response.sprinkler_rabi_fodder_irri_area != null && response.sprinkler_rabi_fodder_irri_area != "") {
                    sprinkler_rabi_fodder_irri_area = response.sprinkler_rabi_fodder_irri_area;
                }
                if (response.sprinkler_rabi_paddy_irri_area != null && response.sprinkler_rabi_paddy_irri_area != "") {
                    sprinkler_rabi_paddy_irri_area = response.sprinkler_rabi_paddy_irri_area;
                }
                if (response.sprinkler_rabi_alfalfa_irri_area != null && response.sprinkler_rabi_alfalfa_irri_area != "") {
                    sprinkler_rabi_alfalfa_irri_area = response.sprinkler_rabi_alfalfa_irri_area;
                }
                if (response.sprinkler_rabi_horticulture_irri_area != null && response.sprinkler_rabi_horticulture_irri_area != "") {
                    sprinkler_rabi_horticulture_irri_area = response.sprinkler_rabi_horticulture_irri_area;
                }

                if (response.sprinkler_rabi_sunflower_irri_area != null && response.sprinkler_rabi_sunflower_irri_area != "") {
                    sprinkler_rabi_sunflower_irri_area = response.sprinkler_rabi_sunflower_irri_area;
                }

                if (response.sprinkler_rabi_othercrop_irri_area1 != null && response.sprinkler_rabi_othercrop_irri_area1 != "") {
                    sprinkler_rabi_othercrop_irri_area1 = response.sprinkler_rabi_othercrop_irri_area1;
                }
                if (response.sprinkler_rabi_othercrop_irri_area2 != null && response.sprinkler_rabi_othercrop_irri_area2 != "") {
                    sprinkler_rabi_othercrop_irri_area2 = response.sprinkler_rabi_othercrop_irri_area2;
                }

                if (response.sprinkler_rabi_othercrop_irri_area3 != null && response.sprinkler_rabi_othercrop_irri_area3 != "") {
                    sprinkler_rabi_othercrop_irri_area3 = response.sprinkler_rabi_othercrop_irri_area3;
                }

                if (response.sprinkler_rabi_othercrop_irri_area4 != null && response.sprinkler_rabi_othercrop_irri_area4 != "") {
                    sprinkler_rabi_othercrop_irri_area4 = response.sprinkler_rabi_othercrop_irri_area4;
                }
                if (response.sprinkler_rabi_othercrop_irri_area5 != null && response.sprinkler_rabi_othercrop_irri_area5 != "") {
                    sprinkler_rabi_othercrop_irri_area5 = response.sprinkler_rabi_othercrop_irri_area5;
                }
                //sprinkler_summer
                var sprinkler_summer_sericulture_irri_area = 0, sprinkler_summer_tomoto_irri_area = 0, sprinkler_summer_floriculture_irri_area = 0, sprinkler_summer_maize_irri_area = 0, sprinkler_summer_fodder_irri_area = 0;
                var sprinkler_summer_sugarcane_irri_area = 0, sprinkler_summer_horticulture_irri_area = 0;
                var sprinkler_summer_othercrop_irri_area1 = 0, sprinkler_summer_othercrop_irri_area2 = 0, sprinkler_summer_othercrop_irri_area3 = 0, sprinkler_summer_othercrop_irri_area4 = 0, sprinkler_summer_othercrop_irri_area5 = 0;


                if (response.sprinkler_summer_sericulture_irri_area != null && response.sprinkler_summer_sericulture_irri_area != "") {
                    sprinkler_summer_sericulture_irri_area = response.sprinkler_summer_sericulture_irri_area;
                }
                if (response.sprinkler_summer_tomoto_irri_area != null && response.sprinkler_summer_tomoto_irri_area != "") {
                    sprinkler_summer_tomoto_irri_area = response.sprinkler_summer_tomoto_irri_area;
                }
                if (response.sprinkler_summer_floriculture_irri_area != null && response.sprinkler_summer_floriculture_irri_area != "") {
                    sprinkler_summer_floriculture_irri_area = response.sprinkler_summer_floriculture_irri_area;
                }
                if (response.sprinkler_summer_maize_irri_area != null && response.sprinkler_summer_maize_irri_area != "") {
                    sprinkler_summer_maize_irri_area = response.sprinkler_summer_maize_irri_area;
                }
                if (response.sprinkler_summer_fodder_irri_area != null && response.sprinkler_summer_fodder_irri_area != "") {
                    sprinkler_summer_fodder_irri_area = response.sprinkler_summer_fodder_irri_area;
                }

                if (response.sprinkler_summer_sugarcane_irri_area != null && response.sprinkler_summer_sugarcane_irri_area != "") {
                    sprinkler_summer_sugarcane_irri_area = response.sprinkler_summer_sugarcane_irri_area;
                }
                if (response.sprinkler_summer_horticulture_irri_area != null && response.sprinkler_summer_horticulture_irri_area != "") {
                    sprinkler_summer_horticulture_irri_area = response.sprinkler_summer_horticulture_irri_area;
                }

                if (response.sprinkler_summer_othercrop_irri_area1 != null && response.sprinkler_summer_othercrop_irri_area1 != "") {
                    sprinkler_summer_othercrop_irri_area1 = response.sprinkler_summer_othercrop_irri_area1;
                }
                if (response.sprinkler_summer_othercrop_irri_area2 != null && response.sprinkler_summer_othercrop_irri_area2 != "") {
                    sprinkler_summer_othercrop_irri_area2 = response.sprinkler_summer_othercrop_irri_area2;
                }

                if (response.sprinkler_summer_othercrop_irri_area3 != null && response.sprinkler_summer_othercrop_irri_area3 != "") {
                    sprinkler_summer_othercrop_irri_area3 = response.sprinkler_summer_othercrop_irri_area3;
                }

                if (response.sprinkler_summer_othercrop_irri_area4 != null && response.sprinkler_summer_othercrop_irri_area4 != "") {
                    sprinkler_summer_othercrop_irri_area4 = response.sprinkler_summer_othercrop_irri_area4;
                }
                if (response.sprinkler_summer_othercrop_irri_area5 != null && response.sprinkler_summer_othercrop_irri_area5 != "") {
                    sprinkler_summer_othercrop_irri_area5 = response.sprinkler_summer_othercrop_irri_area5;
                }


                total_Sprinkler_all_area_geting = parseFloat(sprinkler_kharif_paddy_irri_area) + parseFloat(sprinkler_kharif_ragi_irri_area) + parseFloat(sprinkler_kharif_groundnut_irri_area) + parseFloat(sprinkler_kharif_sugarcane_irri_area) + parseFloat(sprinkler_kharif_tomoto_irri_area) +
                    parseFloat(sprinkler_kharif_floriculture_irri_area) + parseFloat(sprinkler_kharif_sericulture_irri_area) + parseFloat(sprinkler_kharif_banana_irri_area) + parseFloat(sprinkler_kharif_fodder_irri_area) + parseFloat(sprinkler_kharif_maize_irri_area) +
                    parseFloat(sprinkler_kharif_chillies_irri_area) + parseFloat(sprinkler_kharif_cotton_irri_area) + parseFloat(sprinkler_kharif_melon_irri_area) + parseFloat(sprinkler_kharif_citrus_irri_area) + parseFloat(sprinkler_kharif_horticulture_irri_area) +
                    parseFloat(sprinkler_kharif_othercrop_irri_area1) + parseFloat(sprinkler_kharif_othercrop_irri_area2) + parseFloat(sprinkler_kharif_othercrop_irri_area3) + parseFloat(sprinkler_kharif_othercrop_irri_area4) + parseFloat(sprinkler_kharif_othercrop_irri_area5) +
                    parseFloat(sprinkler_rabi_sericulture_irri_area) + parseFloat(sprinkler_rabi_tomoto_irri_area) + parseFloat(sprinkler_rabi_floriculture_irri_area) + parseFloat(sprinkler_rabi_ragi_irri_area) + parseFloat(sprinkler_rabi_sugarcane_irri_area) +
                    parseFloat(sprinkler_rabi_maize_irri_area) + parseFloat(sprinkler_rabi_fodder_irri_area) + parseFloat(sprinkler_rabi_paddy_irri_area) + parseFloat(sprinkler_rabi_alfalfa_irri_area) + parseFloat(sprinkler_rabi_horticulture_irri_area) + parseFloat(sprinkler_rabi_sunflower_irri_area) +
                    parseFloat(sprinkler_rabi_othercrop_irri_area1) + parseFloat(sprinkler_rabi_othercrop_irri_area2) + parseFloat(sprinkler_rabi_othercrop_irri_area3) + parseFloat(sprinkler_rabi_othercrop_irri_area4) + parseFloat(sprinkler_rabi_othercrop_irri_area5) +
                    parseFloat(sprinkler_summer_sericulture_irri_area) + parseFloat(sprinkler_summer_tomoto_irri_area) + parseFloat(sprinkler_summer_floriculture_irri_area) + parseFloat(sprinkler_summer_maize_irri_area) + parseFloat(sprinkler_summer_fodder_irri_area) +
                    parseFloat(sprinkler_summer_sugarcane_irri_area) + parseFloat(sprinkler_summer_horticulture_irri_area) +
                    parseFloat(sprinkler_summer_othercrop_irri_area1) + parseFloat(sprinkler_summer_othercrop_irri_area2) + parseFloat(sprinkler_summer_othercrop_irri_area3) + parseFloat(sprinkler_summer_othercrop_irri_area4) + parseFloat(sprinkler_summer_othercrop_irri_area5);
                
                $('#all_area_spinkler').text(total_Sprinkler_all_area_geting.toFixed(2));

            }

            total_of_Area_Proposed_under_various_Measures_deamend_side();
        }
    });
    Reduction_in_GW_SW_all_are_getting();
    Crop_Diversification_Info_all_are_getting();
}



//Area Proposed under various Measures (Ha) = All Area crops  DRIP
function Drip_all_area_geting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/DripInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            $('#all_area_drip').text('');
            // $('#drip_approx_cost').text('');
            if (response == "Error") {
                window.location = "/WSPHome/Fund_requirements";
            }

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            //Drip_kharif

            var drip_kharif_paddy_irri_area = 0, drip_kharif_ragi_irri_area = 0, drip_kharif_groundnut_irri_area = 0, drip_kharif_sugarcane_irri_area = 0, drip_kharif_tomoto_irri_area = 0;
            var drip_kharif_floriculture_irri_area = 0, drip_kharif_sericulture_irri_area = 0, drip_kharif_banana_irri_area = 0, drip_kharif_fodder_irri_area = 0, drip_kharif_maize_irri_area = 0;
            var drip_kharif_chillies_irri_area = 0, drip_kharif_cotton_irri_area = 0, drip_kharif_melon_irri_area = 0, drip_kharif_citrus_irri_area = 0, drip_kharif_horticulture_irri_area = 0;
            var drip_kharif_othercrop_irri_area1 = 0, drip_kharif_othercrop_irri_area2 = 0, drip_kharif_othercrop_irri_area3 = 0, drip_kharif_othercrop_irri_area4 = 0, drip_kharif_othercrop_irri_area5 = 0;



            if (response.drip_kharif_paddy_irri_area != null && response.drip_kharif_paddy_irri_area != "") {
                drip_kharif_paddy_irri_area = response.drip_kharif_paddy_irri_area;
            }
            if (response.drip_kharif_ragi_irri_area != null && response.drip_kharif_ragi_irri_area != "") {
                drip_kharif_ragi_irri_area = response.drip_kharif_ragi_irri_area;
            }
            if (response.drip_kharif_groundnut_irri_area != null && response.drip_kharif_groundnut_irri_area != "") {
                drip_kharif_groundnut_irri_area = response.drip_kharif_groundnut_irri_area;
            }
            if (response.drip_kharif_sugarcane_irri_area != null && response.drip_kharif_sugarcane_irri_area != "") {
                drip_kharif_sugarcane_irri_area = response.drip_kharif_sugarcane_irri_area;
            }
            if (response.drip_kharif_tomoto_irri_area != null && response.drip_kharif_tomoto_irri_area != "") {
                drip_kharif_tomoto_irri_area = response.drip_kharif_tomoto_irri_area;
            }
            if (response.drip_kharif_floriculture_irri_area != null && response.drip_kharif_floriculture_irri_area != "") {
                drip_kharif_floriculture_irri_area = response.drip_kharif_floriculture_irri_area;
            }
            if (response.drip_kharif_sericulture_irri_area != null && response.drip_kharif_sericulture_irri_area != "") {
                drip_kharif_sericulture_irri_area = response.drip_kharif_sericulture_irri_area;
            }
            if (response.drip_kharif_banana_irri_area != null && response.drip_kharif_banana_irri_area != "") {
                drip_kharif_banana_irri_area = response.drip_kharif_banana_irri_area;
            }
            if (response.drip_kharif_fodder_irri_area != null && response.drip_kharif_fodder_irri_area != "") {
                drip_kharif_fodder_irri_area = response.drip_kharif_fodder_irri_area;
            }
            if (response.drip_kharif_maize_irri_area != null && response.drip_kharif_maize_irri_area != "") {
                drip_kharif_maize_irri_area = response.drip_kharif_maize_irri_area;
            }

            if (response.drip_kharif_chillies_irri_area != null && response.drip_kharif_chillies_irri_area != "") {
                drip_kharif_chillies_irri_area = response.drip_kharif_chillies_irri_area;
            }
            if (response.drip_kharif_cotton_irri_area != null && response.drip_kharif_cotton_irri_area != "") {
                drip_kharif_cotton_irri_area = response.drip_kharif_cotton_irri_area;
            }
            if (response.drip_kharif_melon_irri_area != null && response.drip_kharif_melon_irri_area != "") {
                drip_kharif_melon_irri_area = response.drip_kharif_melon_irri_area;
            }
            if (response.drip_kharif_citrus_irri_area != null && response.drip_kharif_citrus_irri_area != "") {
                drip_kharif_citrus_irri_area = response.drip_kharif_citrus_irri_area;
            }
            if (response.drip_kharif_horticulture_irri_area != null && response.drip_kharif_horticulture_irri_area != "") {
                drip_kharif_horticulture_irri_area = response.drip_kharif_horticulture_irri_area;
            }
            if (response.drip_kharif_othercrop_irri_area1 != null && response.drip_kharif_othercrop_irri_area1 != "") {
                drip_kharif_othercrop_irri_area1 = response.drip_kharif_othercrop_irri_area1;
            }
            if (response.drip_kharif_othercrop_irri_area2 != null && response.drip_kharif_othercrop_irri_area2 != "") {
                drip_kharif_othercrop_irri_area2 = response.drip_kharif_othercrop_irri_area2;
            }

            if (response.drip_kharif_othercrop_irri_area3 != null && response.drip_kharif_othercrop_irri_area3 != "") {
                drip_kharif_othercrop_irri_area3 = response.drip_kharif_othercrop_irri_area3;
            }

            if (response.drip_kharif_othercrop_irri_area4 != null && response.drip_kharif_othercrop_irri_area4 != "") {
                drip_kharif_othercrop_irri_area4 = response.drip_kharif_othercrop_irri_area4;
            }
            if (response.drip_kharif_othercrop_irri_area5 != null && response.drip_kharif_othercrop_irri_area5 != "") {
                drip_kharif_othercrop_irri_area5 = response.drip_kharif_othercrop_irri_area5;
            }

            //Drip_Rabi

            var drip_rabi_sericulture_irri_area = 0, drip_rabi_tomoto_irri_area = 0, drip_rabi_floriculture_irri_area = 0, drip_rabi_ragi_irri_area = 0, drip_rabi_sugarcane_irri_area = 0;
            var drip_rabi_maize_irri_area = 0, drip_rabi_fodder_irri_area = 0, drip_rabi_paddy_irri_area = 0, drip_rabi_alfalfa_irri_area = 0, drip_rabi_horticulture_irri_area = 0, drip_rabi_sunflower_irri_area = 0;
            var drip_rabi_othercrop_irri_area1 = 0, drip_rabi_othercrop_irri_area2 = 0, drip_rabi_othercrop_irri_area3 = 0, drip_rabi_othercrop_irri_area4 = 0, drip_rabi_othercrop_irri_area5 = 0;

            if (response.drip_rabi_sericulture_irri_area != null && response.drip_rabi_sericulture_irri_area != "") {
                drip_rabi_sericulture_irri_area = response.drip_rabi_sericulture_irri_area;
            }
            if (response.drip_rabi_tomoto_irri_area != null && response.drip_rabi_tomoto_irri_area != "") {
                drip_rabi_tomoto_irri_area = response.drip_rabi_tomoto_irri_area;
            }
            if (response.drip_rabi_floriculture_irri_area != null && response.drip_rabi_floriculture_irri_area != "") {
                drip_rabi_floriculture_irri_area = response.drip_rabi_floriculture_irri_area;
            }
            if (response.drip_rabi_ragi_irri_area != null && response.drip_rabi_ragi_irri_area != "") {
                drip_rabi_ragi_irri_area = response.drip_rabi_ragi_irri_area;
            }
            if (response.drip_rabi_sugarcane_irri_area != null && response.drip_rabi_sugarcane_irri_area != "") {
                drip_rabi_sugarcane_irri_area = response.drip_rabi_sugarcane_irri_area;
            }

            if (response.drip_rabi_maize_irri_area != null && response.drip_rabi_maize_irri_area != "") {
                drip_rabi_maize_irri_area = response.drip_rabi_maize_irri_area;
            }
            if (response.drip_rabi_fodder_irri_area != null && response.drip_rabi_fodder_irri_area != "") {
                drip_rabi_fodder_irri_area = response.drip_rabi_fodder_irri_area;
            }
            if (response.drip_rabi_paddy_irri_area != null && response.drip_rabi_paddy_irri_area != "") {
                drip_rabi_paddy_irri_area = response.drip_rabi_paddy_irri_area;
            }
            if (response.drip_rabi_alfalfa_irri_area != null && response.drip_rabi_alfalfa_irri_area != "") {
                drip_rabi_alfalfa_irri_area = response.drip_rabi_alfalfa_irri_area;
            }
            if (response.drip_rabi_horticulture_irri_area != null && response.drip_rabi_horticulture_irri_area != "") {
                drip_rabi_horticulture_irri_area = response.drip_rabi_horticulture_irri_area;
            }

            if (response.drip_rabi_sunflower_irri_area != null && response.drip_rabi_sunflower_irri_area != "") {
                drip_rabi_sunflower_irri_area = response.drip_rabi_sunflower_irri_area;
            }

            if (response.drip_rabi_othercrop_irri_area1 != null && response.drip_rabi_othercrop_irri_area1 != "") {
                drip_rabi_othercrop_irri_area1 = response.drip_rabi_othercrop_irri_area1;
            }
            if (response.drip_rabi_othercrop_irri_area2 != null && response.drip_rabi_othercrop_irri_area2 != "") {
                drip_rabi_othercrop_irri_area2 = response.drip_rabi_othercrop_irri_area2;
            }

            if (response.drip_rabi_othercrop_irri_area3 != null && response.drip_rabi_othercrop_irri_area3 != "") {
                drip_rabi_othercrop_irri_area3 = response.drip_rabi_othercrop_irri_area3;
            }

            if (response.drip_rabi_othercrop_irri_area4 != null && response.drip_rabi_othercrop_irri_area4 != "") {
                drip_rabi_othercrop_irri_area4 = response.drip_rabi_othercrop_irri_area4;
            }
            if (response.drip_rabi_othercrop_irri_area5 != null && response.drip_rabi_othercrop_irri_area5 != "") {
                drip_rabi_othercrop_irri_area5 = response.drip_rabi_othercrop_irri_area5;
            }

            //Drip_summer

            var drip_summer_sericulture_irri_area = 0, drip_summer_tomoto_irri_area = 0, drip_summer_floriculture_irri_area = 0, drip_summer_maize_irri_area = 0, drip_summer_fodder_irri_area = 0;
            var drip_summer_sugarcane_irri_area = 0, drip_summer_horticulture_irri_area = 0;
            var drip_summer_othercrop_irri_area1 = 0, drip_summer_othercrop_irri_area2 = 0, drip_summer_othercrop_irri_area3 = 0, drip_summer_othercrop_irri_area4 = 0, drip_summer_othercrop_irri_area5 = 0;


            if (response.drip_summer_sericulture_irri_area != null && response.drip_summer_sericulture_irri_area != "") {
                drip_summer_sericulture_irri_area = response.drip_summer_sericulture_irri_area;
            }
            if (response.drip_summer_tomoto_irri_area != null && response.drip_summer_tomoto_irri_area != "") {
                drip_summer_tomoto_irri_area = response.drip_summer_tomoto_irri_area;
            }
            if (response.drip_summer_floriculture_irri_area != null && response.drip_summer_floriculture_irri_area != "") {
                drip_summer_floriculture_irri_area = response.drip_summer_floriculture_irri_area;
            }
            if (response.drip_summer_maize_irri_area != null && response.drip_summer_maize_irri_area != "") {
                drip_summer_maize_irri_area = response.drip_summer_maize_irri_area;
            }
            if (response.drip_summer_fodder_irri_area != null && response.drip_summer_fodder_irri_area != "") {
                drip_summer_fodder_irri_area = response.drip_summer_fodder_irri_area;
            }

            if (response.drip_summer_sugarcane_irri_area != null && response.drip_summer_sugarcane_irri_area != "") {
                drip_summer_sugarcane_irri_area = response.drip_summer_sugarcane_irri_area;
            }
            if (response.drip_summer_horticulture_irri_area != null && response.drip_summer_horticulture_irri_area != "") {
                drip_summer_horticulture_irri_area = response.drip_summer_horticulture_irri_area;
            }

            if (response.drip_summer_othercrop_irri_area1 != null && response.drip_summer_othercrop_irri_area1 != "") {
                drip_summer_othercrop_irri_area1 = response.drip_summer_othercrop_irri_area1;
            }
            if (response.drip_summer_othercrop_irri_area2 != null && response.drip_summer_othercrop_irri_area2 != "") {
                drip_summer_othercrop_irri_area2 = response.drip_summer_othercrop_irri_area2;
            }

            if (response.drip_summer_othercrop_irri_area3 != null && response.drip_summer_othercrop_irri_area3 != "") {
                drip_summer_othercrop_irri_area3 = response.drip_summer_othercrop_irri_area3;
            }

            if (response.drip_summer_othercrop_irri_area4 != null && response.drip_summer_othercrop_irri_area4 != "") {
                drip_summer_othercrop_irri_area4 = response.drip_summer_othercrop_irri_area4;
            }
            if (response.drip_summer_othercrop_irri_area5 != null && response.drip_summer_othercrop_irri_area5 != "") {
                drip_summer_othercrop_irri_area5 = response.drip_summer_othercrop_irri_area5;
            }


            total_drip_all_area_geting = parseFloat(drip_kharif_paddy_irri_area) + parseFloat(drip_kharif_ragi_irri_area) + parseFloat(drip_kharif_groundnut_irri_area) + parseFloat(drip_kharif_sugarcane_irri_area) + parseFloat(drip_kharif_tomoto_irri_area) +
                parseFloat(drip_kharif_floriculture_irri_area) + parseFloat(drip_kharif_sericulture_irri_area) + parseFloat(drip_kharif_banana_irri_area) + parseFloat(drip_kharif_fodder_irri_area) + parseFloat(drip_kharif_maize_irri_area) +
                parseFloat(drip_kharif_chillies_irri_area) + parseFloat(drip_kharif_cotton_irri_area) + parseFloat(drip_kharif_melon_irri_area) + parseFloat(drip_kharif_citrus_irri_area) + parseFloat(drip_kharif_horticulture_irri_area) +
                parseFloat(drip_kharif_othercrop_irri_area1) + parseFloat(drip_kharif_othercrop_irri_area2) + parseFloat(drip_kharif_othercrop_irri_area3) + parseFloat(drip_kharif_othercrop_irri_area4) + parseFloat(drip_kharif_othercrop_irri_area5) +
                parseFloat(drip_rabi_sericulture_irri_area) + parseFloat(drip_rabi_tomoto_irri_area) + parseFloat(drip_rabi_floriculture_irri_area) + parseFloat(drip_rabi_ragi_irri_area) + parseFloat(drip_rabi_sugarcane_irri_area) +
                parseFloat(drip_rabi_maize_irri_area) + parseFloat(drip_rabi_fodder_irri_area) + parseFloat(drip_rabi_paddy_irri_area) + parseFloat(drip_rabi_alfalfa_irri_area) + parseFloat(drip_rabi_horticulture_irri_area) + parseFloat(drip_rabi_sunflower_irri_area) +
                parseFloat(drip_rabi_othercrop_irri_area1) + parseFloat(drip_rabi_othercrop_irri_area2) + parseFloat(drip_rabi_othercrop_irri_area3) + parseFloat(drip_rabi_othercrop_irri_area4) + parseFloat(drip_rabi_othercrop_irri_area5) +
                parseFloat(drip_summer_sericulture_irri_area) + parseFloat(drip_summer_tomoto_irri_area) + parseFloat(drip_summer_floriculture_irri_area) + parseFloat(drip_summer_maize_irri_area) + parseFloat(drip_summer_fodder_irri_area) +
                parseFloat(drip_summer_sugarcane_irri_area) + parseFloat(+ parseFloat(drip_summer_horticulture_irri_area)) +
                parseFloat(drip_summer_othercrop_irri_area1) + parseFloat(drip_summer_othercrop_irri_area2) + parseFloat(drip_summer_othercrop_irri_area3) + parseFloat(drip_summer_othercrop_irri_area4) + parseFloat(drip_summer_othercrop_irri_area5);

            $('#all_area_drip').text(total_drip_all_area_geting.toFixed(2));

            total_of_Area_Proposed_under_various_Measures_deamend_side();
        }
    });

}

//Area Proposed under various Measures (Ha) = All Area crops  UG Pipeline
function ug_pipeline_area_geting() {

    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/PipeLineInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            $('#all_area_ug_pipeline').text('');
            // $('#pipeline_approx_cost').text('');
            if (response == "Error") {
                window.location = "/WSPHome/Fund_requirements";
            }

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            //pipeline_kharif

            var pipeline_kharif_paddy_irri_area = 0, pipeline_kharif_ragi_irri_area = 0, pipeline_kharif_groundnut_irri_area = 0, pipeline_kharif_sugarcane_irri_area = 0, pipeline_kharif_tomoto_irri_area = 0;
            var pipeline_kharif_floriculture_irri_area = 0, pipeline_kharif_sericulture_irri_area = 0, pipeline_kharif_banana_irri_area = 0, pipeline_kharif_fodder_irri_area = 0, pipeline_kharif_maize_irri_area = 0;
            var pipeline_kharif_chillies_irri_area = 0, pipeline_kharif_cotton_irri_area = 0, pipeline_kharif_melon_irri_area = 0, pipeline_kharif_citrus_irri_area = 0, pipeline_kharif_horticulture_irri_area = 0;
            var pipeline_kharif_othercrop_irri_area1 = 0, pipeline_kharif_othercrop_irri_area2 = 0, pipeline_kharif_othercrop_irri_area3 = 0, pipeline_kharif_othercrop_irri_area4 = 0, pipeline_kharif_othercrop_irri_area5 = 0;



            if (response.pipeline_kharif_paddy_irri_area != null && response.pipeline_kharif_paddy_irri_area != "") {
                pipeline_kharif_paddy_irri_area = response.pipeline_kharif_paddy_irri_area;
            }
            if (response.pipeline_kharif_ragi_irri_area != null && response.pipeline_kharif_ragi_irri_area != "") {
                pipeline_kharif_ragi_irri_area = response.pipeline_kharif_ragi_irri_area;
            }
            if (response.pipeline_kharif_groundnut_irri_area != null && response.pipeline_kharif_groundnut_irri_area != "") {
                pipeline_kharif_groundnut_irri_area = response.pipeline_kharif_groundnut_irri_area;
            }
            if (response.pipeline_kharif_sugarcane_irri_area != null && response.pipeline_kharif_sugarcane_irri_area != "") {
                pipeline_kharif_sugarcane_irri_area = response.pipeline_kharif_sugarcane_irri_area;
            }
            if (response.pipeline_kharif_tomoto_irri_area != null && response.pipeline_kharif_tomoto_irri_area != "") {
                pipeline_kharif_tomoto_irri_area = response.pipeline_kharif_tomoto_irri_area;
            }
            if (response.pipeline_kharif_floriculture_irri_area != null && response.pipeline_kharif_floriculture_irri_area != "") {
                pipeline_kharif_floriculture_irri_area = response.pipeline_kharif_floriculture_irri_area;
            }
            if (response.pipeline_kharif_sericulture_irri_area != null && response.pipeline_kharif_sericulture_irri_area != "") {
                pipeline_kharif_sericulture_irri_area = response.pipeline_kharif_sericulture_irri_area;
            }
            if (response.pipeline_kharif_banana_irri_area != null && response.pipeline_kharif_banana_irri_area != "") {
                pipeline_kharif_banana_irri_area = response.pipeline_kharif_banana_irri_area;
            }
            if (response.pipeline_kharif_fodder_irri_area != null && response.pipeline_kharif_fodder_irri_area != "") {
                pipeline_kharif_fodder_irri_area = response.pipeline_kharif_fodder_irri_area;
            }
            if (response.pipeline_kharif_maize_irri_area != null && response.pipeline_kharif_maize_irri_area != "") {
                pipeline_kharif_maize_irri_area = response.pipeline_kharif_maize_irri_area;
            }

            if (response.pipeline_kharif_chillies_irri_area != null && response.pipeline_kharif_chillies_irri_area != "") {
                pipeline_kharif_chillies_irri_area = response.pipeline_kharif_chillies_irri_area;
            }
            if (response.pipeline_kharif_cotton_irri_area != null && response.pipeline_kharif_cotton_irri_area != "") {
                pipeline_kharif_cotton_irri_area = response.pipeline_kharif_cotton_irri_area;
            }
            if (response.pipeline_kharif_melon_irri_area != null && response.pipeline_kharif_melon_irri_area != "") {
                pipeline_kharif_melon_irri_area = response.pipeline_kharif_melon_irri_area;
            }
            if (response.pipeline_kharif_citrus_irri_area != null && response.pipeline_kharif_citrus_irri_area != "") {
                pipeline_kharif_citrus_irri_area = response.pipeline_kharif_citrus_irri_area;
            }
            if (response.pipeline_kharif_horticulture_irri_area != null && response.pipeline_kharif_horticulture_irri_area != "") {
                pipeline_kharif_horticulture_irri_area = response.pipeline_kharif_horticulture_irri_area;
            }
            if (response.pipeline_kharif_othercrop_irri_area1 != null && response.pipeline_kharif_othercrop_irri_area1 != "") {
                pipeline_kharif_othercrop_irri_area1 = response.pipeline_kharif_othercrop_irri_area1;
            }
            if (response.pipeline_kharif_othercrop_irri_area2 != null && response.pipeline_kharif_othercrop_irri_area2 != "") {
                pipeline_kharif_othercrop_irri_area2 = response.pipeline_kharif_othercrop_irri_area2;
            }

            if (response.pipeline_kharif_othercrop_irri_area3 != null && response.pipeline_kharif_othercrop_irri_area3 != "") {
                pipeline_kharif_othercrop_irri_area3 = response.pipeline_kharif_othercrop_irri_area3;
            }

            if (response.pipeline_kharif_othercrop_irri_area4 != null && response.pipeline_kharif_othercrop_irri_area4 != "") {
                pipeline_kharif_othercrop_irri_area4 = response.pipeline_kharif_othercrop_irri_area4;
            }
            if (response.pipeline_kharif_othercrop_irri_area5 != null && response.pipeline_kharif_othercrop_irri_area5 != "") {
                pipeline_kharif_othercrop_irri_area5 = response.pipeline_kharif_othercrop_irri_area5;
            }

            //pipeline_rabi

            var pipeline_rabi_sericulture_irri_area = 0, pipeline_rabi_tomoto_irri_area = 0, pipeline_rabi_floriculture_irri_area = 0, pipeline_rabi_ragi_irri_area = 0, pipeline_rabi_sugarcane_irri_area = 0;
            var pipeline_rabi_maize_irri_area = 0, pipeline_rabi_fodder_irri_area = 0, pipeline_rabi_paddy_irri_area = 0, pipeline_rabi_alfalfa_irri_area = 0, pipeline_rabi_horticulture_irri_area = 0, pipeline_rabi_sunflower_irri_area = 0;
            var pipeline_rabi_othercrop_irri_area1 = 0, pipeline_rabi_othercrop_irri_area2 = 0, pipeline_rabi_othercrop_irri_area3 = 0, pipeline_rabi_othercrop_irri_area4 = 0, pipeline_rabi_othercrop_irri_area5 = 0;

            if (response.pipeline_rabi_sericulture_irri_area != null && response.pipeline_rabi_sericulture_irri_area != "") {
                pipeline_rabi_sericulture_irri_area = response.pipeline_rabi_sericulture_irri_area;
            }
            if (response.pipeline_rabi_tomoto_irri_area != null && response.pipeline_rabi_tomoto_irri_area != "") {
                pipeline_rabi_tomoto_irri_area = response.pipeline_rabi_tomoto_irri_area;
            }
            if (response.pipeline_rabi_floriculture_irri_area != null && response.pipeline_rabi_floriculture_irri_area != "") {
                pipeline_rabi_floriculture_irri_area = response.pipeline_rabi_floriculture_irri_area;
            }
            if (response.pipeline_rabi_ragi_irri_area != null && response.pipeline_rabi_ragi_irri_area != "") {
                pipeline_rabi_ragi_irri_area = response.pipeline_rabi_ragi_irri_area;
            }
            if (response.pipeline_rabi_sugarcane_irri_area != null && response.pipeline_rabi_sugarcane_irri_area != "") {
                pipeline_rabi_sugarcane_irri_area = response.pipeline_rabi_sugarcane_irri_area;
            }

            if (response.pipeline_rabi_maize_irri_area != null && response.pipeline_rabi_maize_irri_area != "") {
                pipeline_rabi_maize_irri_area = response.pipeline_rabi_maize_irri_area;
            }
            if (response.pipeline_rabi_fodder_irri_area != null && response.pipeline_rabi_fodder_irri_area != "") {
                pipeline_rabi_fodder_irri_area = response.pipeline_rabi_fodder_irri_area;
            }
            if (response.pipeline_rabi_paddy_irri_area != null && response.pipeline_rabi_paddy_irri_area != "") {
                pipeline_rabi_paddy_irri_area = response.pipeline_rabi_paddy_irri_area;
            }
            if (response.pipeline_rabi_alfalfa_irri_area != null && response.pipeline_rabi_alfalfa_irri_area != "") {
                pipeline_rabi_alfalfa_irri_area = response.pipeline_rabi_alfalfa_irri_area;
            }
            if (response.pipeline_rabi_horticulture_irri_area != null && response.pipeline_rabi_horticulture_irri_area != "") {
                pipeline_rabi_horticulture_irri_area = response.pipeline_rabi_horticulture_irri_area;
            }

            if (response.pipeline_rabi_sunflower_irri_area != null && response.pipeline_rabi_sunflower_irri_area != "") {
                pipeline_rabi_sunflower_irri_area = response.pipeline_rabi_sunflower_irri_area;
            }

            if (response.pipeline_rabi_othercrop_irri_area1 != null && response.pipeline_rabi_othercrop_irri_area1 != "") {
                pipeline_rabi_othercrop_irri_area1 = response.pipeline_rabi_othercrop_irri_area1;
            }
            if (response.pipeline_rabi_othercrop_irri_area2 != null && response.pipeline_rabi_othercrop_irri_area2 != "") {
                pipeline_rabi_othercrop_irri_area2 = response.pipeline_rabi_othercrop_irri_area2;
            }

            if (response.pipeline_rabi_othercrop_irri_area3 != null && response.pipeline_rabi_othercrop_irri_area3 != "") {
                pipeline_rabi_othercrop_irri_area3 = response.pipeline_rabi_othercrop_irri_area3;
            }

            if (response.pipeline_rabi_othercrop_irri_area4 != null && response.pipeline_rabi_othercrop_irri_area4 != "") {
                pipeline_rabi_othercrop_irri_area4 = response.pipeline_rabi_othercrop_irri_area4;
            }
            if (response.pipeline_rabi_othercrop_irri_area5 != null && response.pipeline_rabi_othercrop_irri_area5 != "") {
                pipeline_rabi_othercrop_irri_area5 = response.pipeline_rabi_othercrop_irri_area5;
            }

            //pipeline_summer
            var pipeline_summer_sericulture_irri_area = 0, pipeline_summer_tomoto_irri_area = 0, pipeline_summer_floriculture_irri_area = 0, pipeline_summer_maize_irri_area = 0, pipeline_summer_fodder_irri_area = 0;
            var pipeline_summer_sugarcane_irri_area = 0, pipeline_summer_horticulture_irri_area = 0;
            var pipeline_summer_othercrop_irri_area1 = 0, pipeline_summer_othercrop_irri_area2 = 0, pipeline_summer_othercrop_irri_area3 = 0, pipeline_summer_othercrop_irri_area4 = 0, pipeline_summer_othercrop_irri_area5 = 0;

            if (response.pipeline_summer_sericulture_irri_area != null && response.pipeline_summer_sericulture_irri_area != "") {
                pipeline_summer_sericulture_irri_area = response.pipeline_summer_sericulture_irri_area;
            }
            if (response.pipeline_summer_tomoto_irri_area != null && response.pipeline_summer_tomoto_irri_area != "") {
                pipeline_summer_tomoto_irri_area = response.pipeline_summer_tomoto_irri_area;
            }
            if (response.pipeline_summer_floriculture_irri_area != null && response.pipeline_summer_floriculture_irri_area != "") {
                pipeline_summer_floriculture_irri_area = response.pipeline_summer_floriculture_irri_area;
            }
            if (response.pipeline_summer_maize_irri_area != null && response.pipeline_summer_maize_irri_area != "") {
                pipeline_summer_maize_irri_area = response.pipeline_summer_maize_irri_area;
            }
            if (response.pipeline_summer_fodder_irri_area != null && response.pipeline_summer_fodder_irri_area != "") {
                pipeline_summer_fodder_irri_area = response.pipeline_summer_fodder_irri_area;
            }

            if (response.pipeline_summer_sugarcane_irri_area != null && response.pipeline_summer_sugarcane_irri_area != "") {
                pipeline_summer_sugarcane_irri_area = response.pipeline_summer_sugarcane_irri_area;
            }
            if (response.pipeline_summer_horticulture_irri_area != null && response.pipeline_summer_horticulture_irri_area != "") {
                pipeline_summer_horticulture_irri_area = response.pipeline_summer_horticulture_irri_area;
            }

            if (response.pipeline_summer_othercrop_irri_area1 != null && response.pipeline_summer_othercrop_irri_area1 != "") {
                pipeline_summer_othercrop_irri_area1 = response.pipeline_summer_othercrop_irri_area1;
            }
            if (response.pipeline_summer_othercrop_irri_area2 != null && response.pipeline_summer_othercrop_irri_area2 != "") {
                pipeline_summer_othercrop_irri_area2 = response.pipeline_summer_othercrop_irri_area2;
            }

            if (response.pipeline_summer_othercrop_irri_area3 != null && response.pipeline_summer_othercrop_irri_area3 != "") {
                pipeline_summer_othercrop_irri_area3 = response.pipeline_summer_othercrop_irri_area3;
            }

            if (response.pipeline_summer_othercrop_irri_area4 != null && response.pipeline_summer_othercrop_irri_area4 != "") {
                pipeline_summer_othercrop_irri_area4 = response.pipeline_summer_othercrop_irri_area4;
            }
            if (response.pipeline_summer_othercrop_irri_area5 != null && response.pipeline_summer_othercrop_irri_area5 != "") {
                pipeline_summer_othercrop_irri_area5 = response.pipeline_summer_othercrop_irri_area5;
            }


            total_ug_pipeline_all_area_geting = parseFloat(pipeline_kharif_paddy_irri_area) + parseFloat(pipeline_kharif_ragi_irri_area) + parseFloat(pipeline_kharif_groundnut_irri_area) + parseFloat(pipeline_kharif_sugarcane_irri_area) + parseFloat(pipeline_kharif_tomoto_irri_area) +
                parseFloat(pipeline_kharif_floriculture_irri_area) + parseFloat(pipeline_kharif_sericulture_irri_area) + parseFloat(pipeline_kharif_banana_irri_area) + parseFloat(pipeline_kharif_fodder_irri_area) + parseFloat(pipeline_kharif_maize_irri_area) +
                parseFloat(pipeline_kharif_chillies_irri_area) + parseFloat(pipeline_kharif_cotton_irri_area) + parseFloat(pipeline_kharif_melon_irri_area) + parseFloat(pipeline_kharif_citrus_irri_area) + parseFloat(pipeline_kharif_horticulture_irri_area) +
                parseFloat(pipeline_kharif_othercrop_irri_area1) + parseFloat(pipeline_kharif_othercrop_irri_area2) + parseFloat(pipeline_kharif_othercrop_irri_area3) + parseFloat(pipeline_kharif_othercrop_irri_area4) + parseFloat(pipeline_kharif_othercrop_irri_area5) +
                parseFloat(pipeline_rabi_sericulture_irri_area) + parseFloat(pipeline_rabi_tomoto_irri_area) + parseFloat(pipeline_rabi_floriculture_irri_area) + parseFloat(pipeline_rabi_ragi_irri_area) + parseFloat(pipeline_rabi_sugarcane_irri_area) +
                parseFloat(pipeline_rabi_maize_irri_area) + parseFloat(pipeline_rabi_fodder_irri_area) + parseFloat(pipeline_rabi_paddy_irri_area) + parseFloat(pipeline_rabi_alfalfa_irri_area) + parseFloat(pipeline_rabi_horticulture_irri_area) + parseFloat(pipeline_rabi_sunflower_irri_area) +
                parseFloat(pipeline_rabi_othercrop_irri_area1) + parseFloat(pipeline_rabi_othercrop_irri_area2) + parseFloat(pipeline_rabi_othercrop_irri_area3) + parseFloat(pipeline_rabi_othercrop_irri_area4) + parseFloat(pipeline_rabi_othercrop_irri_area5) +
                parseFloat(pipeline_summer_sericulture_irri_area) + parseFloat(pipeline_summer_tomoto_irri_area) + parseFloat(pipeline_summer_floriculture_irri_area) + parseFloat(pipeline_summer_maize_irri_area) + parseFloat(pipeline_summer_fodder_irri_area) +
                parseFloat(pipeline_summer_sugarcane_irri_area) + parseFloat(+ parseFloat(pipeline_summer_horticulture_irri_area)) +
                parseFloat(pipeline_summer_othercrop_irri_area1) + parseFloat(pipeline_summer_othercrop_irri_area2) + parseFloat(pipeline_summer_othercrop_irri_area3) + parseFloat(pipeline_summer_othercrop_irri_area4) + parseFloat(pipeline_summer_othercrop_irri_area5);


            $('#all_area_ug_pipeline').text(total_ug_pipeline_all_area_geting.toFixed(2));

            total_of_Area_Proposed_under_various_Measures_deamend_side();
        }
    });

}

// all geting Other measures for saving water
function other_measures_getting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/Other_MeasureInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {

            $('#all_area_other_measures').text('');
            //  $('#other_approx_estimated_cost').text('');
            if (response == "Error") {
                window.location = "/WSPHome/Fund_requirements";
            }

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {
                // $('#Sprinkler_kharif_Paddy_FundingSource').val(response.sprinkler_kharif_paddy_fundingsource);
                //sprinkler_kharif

                var other_kharif_paddy_crop_area = 0, other_kharif_ragi_crop_area = 0, other_kharif_groundnut_crop_area = 0, other_kharif_sugarcane_crop_area = 0, other_kharif_tomoto_crop_area = 0;
                var other_kharif_floriculture_crop_area = 0, other_kharif_sericulture_crop_area = 0, other_kharif_banana_crop_area = 0, other_kharif_fodder_crop_area = 0, other_kharif_maize_crop_area = 0;
                var other_kharif_chillies_crop_area = 0, other_kharif_cotton_crop_area = 0, other_kharif_melon_crop_area = 0, other_kharif_citrus_crop_area = 0, other_kharif_horticulture_crop_area = 0;
                var other_kharif_othercrop_area1 = 0, other_kharif_othercrop_area2 = 0, other_kharif_othercrop_area3 = 0, other_kharif_othercrop_area4 = 0, other_kharif_othercrop_area5 = 0;


                if (response.other_kharif_paddy_crop_area != null && response.other_kharif_paddy_crop_area != "") {
                    other_kharif_paddy_crop_area = response.other_kharif_paddy_crop_area;
                }
                if (response.other_kharif_ragi_crop_area != null && response.other_kharif_ragi_crop_area != "") {
                    other_kharif_ragi_crop_area = response.other_kharif_ragi_crop_area;
                }
                if (response.other_kharif_groundnut_crop_area != null && response.other_kharif_groundnut_crop_area != "") {
                    other_kharif_groundnut_crop_area = response.other_kharif_groundnut_crop_area;
                }
                if (response.other_kharif_sugarcane_crop_area != null && response.other_kharif_sugarcane_crop_area != "") {
                    other_kharif_sugarcane_crop_area = response.other_kharif_sugarcane_crop_area;
                }
                if (response.other_kharif_tomoto_crop_area != null && response.other_kharif_tomoto_crop_area != "") {
                    other_kharif_tomoto_crop_area = response.other_kharif_tomoto_crop_area;
                }

                if (response.other_kharif_floriculture_crop_area != null && response.other_kharif_floriculture_crop_area != "") {
                    other_kharif_floriculture_crop_area = response.other_kharif_floriculture_crop_area;
                }
                if (response.other_kharif_sericulture_crop_area != null && response.other_kharif_sericulture_crop_area != "") {
                    other_kharif_sericulture_crop_area = response.other_kharif_sericulture_crop_area;
                }
                if (response.other_kharif_banana_crop_area != null && response.other_kharif_banana_crop_area != "") {
                    other_kharif_banana_crop_area = response.other_kharif_banana_crop_area;
                }
                if (response.other_kharif_fodder_crop_area != null && response.other_kharif_fodder_crop_area != "") {
                    other_kharif_fodder_crop_area = response.other_kharif_fodder_crop_area;
                }
                if (response.other_kharif_maize_crop_area != null && response.other_kharif_maize_crop_area != "") {
                    other_kharif_maize_crop_area = response.other_kharif_maize_crop_area;
                }

                if (response.other_kharif_chillies_crop_area != null && response.other_kharif_chillies_crop_area != "") {
                    other_kharif_chillies_crop_area = response.other_kharif_chillies_crop_area;
                }
                if (response.other_kharif_cotton_crop_area != null && response.other_kharif_cotton_crop_area != "") {
                    other_kharif_cotton_crop_area = response.other_kharif_cotton_crop_area;
                }
                if (response.other_kharif_melon_crop_area != null && response.other_kharif_melon_crop_area != "") {
                    other_kharif_melon_crop_area = response.other_kharif_melon_crop_area;
                }
                if (response.other_kharif_citrus_crop_area != null && response.other_kharif_citrus_crop_area != "") {
                    other_kharif_citrus_crop_area = response.other_kharif_citrus_crop_area;
                }
                if (response.other_kharif_horticulture_crop_area != null && response.other_kharif_horticulture_crop_area != "") {
                    other_kharif_horticulture_crop_area = response.other_kharif_horticulture_crop_area;
                }
                if (response.other_kharif_othercrop_area1 != null && response.other_kharif_othercrop_area1 != "") {
                    other_kharif_othercrop_area1 = response.other_kharif_othercrop_area1;
                }
                if (response.other_kharif_othercrop_area2 != null && response.other_kharif_othercrop_area2 != "") {
                    other_kharif_othercrop_area2 = response.other_kharif_othercrop_area2;
                }

                if (response.other_kharif_othercrop_area3 != null && response.other_kharif_othercrop_area3 != "") {
                    other_kharif_othercrop_area3 = response.other_kharif_othercrop_area3;
                }

                if (response.other_kharif_othercrop_area4 != null && response.other_kharif_othercrop_area4 != "") {
                    other_kharif_othercrop_area4 = response.other_kharif_othercrop_area4;
                }
                if (response.other_kharif_othercrop_area5 != null && response.other_kharif_othercrop_area5 != "") {
                    other_kharif_othercrop_area5 = response.other_kharif_othercrop_area5;
                }

                //sprinkler_Rabi
                var other_rabi_sericulture_crop_area = 0, other_rabi_tomoto_crop_area = 0, other_rabi_floriculture_crop_area = 0, other_rabi_ragi_crop_area = 0, other_rabi_sugarcane_crop_area = 0;
                var other_rabi_maize_crop_area = 0, other_rabi_fodder_crop_area = 0, other_rabi_paddy_crop_area = 0, other_rabi_alfalfa_crop_area = 0, other_rabi_horticulture_crop_area = 0, other_rabi_sunflower_crop_area = 0;
                var other_rabi_othercrop_area1 = 0, other_rabi_othercrop_area2 = 0, other_rabi_othercrop_area3 = 0, other_rabi_othercrop_area4 = 0, other_rabi_othercrop_area5 = 0;

                if (response.other_rabi_sericulture_crop_area != null && response.other_rabi_sericulture_crop_area != "") {
                    other_rabi_sericulture_crop_area = response.other_rabi_sericulture_crop_area;
                }
                if (response.other_rabi_tomoto_crop_area != null && response.other_rabi_tomoto_crop_area != "") {
                    other_rabi_tomoto_crop_area = response.other_rabi_tomoto_crop_area;
                }
                if (response.other_rabi_floriculture_crop_area != null && response.other_rabi_floriculture_crop_area != "") {
                    other_rabi_floriculture_crop_area = response.other_rabi_floriculture_crop_area;
                }
                if (response.other_rabi_ragi_crop_area != null && response.other_rabi_ragi_crop_area != "") {
                    other_rabi_ragi_crop_area = response.other_rabi_ragi_crop_area;
                }
                if (response.other_rabi_sugarcane_crop_area != null && response.other_rabi_sugarcane_crop_area != "") {
                    other_rabi_sugarcane_crop_area = response.other_rabi_sugarcane_crop_area;
                }
                if (response.other_rabi_maize_crop_area != null && response.other_rabi_maize_crop_area != "") {
                    other_rabi_maize_crop_area = response.other_rabi_maize_crop_area;
                }
                if (response.other_rabi_fodder_crop_area != null && response.other_rabi_fodder_crop_area != "") {
                    other_rabi_fodder_crop_area = response.other_rabi_fodder_crop_area;
                }
                if (response.other_rabi_paddy_crop_area != null && response.other_rabi_paddy_crop_area != "") {
                    other_rabi_paddy_crop_area = response.other_rabi_paddy_crop_area;
                }
                if (response.other_rabi_alfalfa_crop_area != null && response.other_rabi_alfalfa_crop_area != "") {
                    other_rabi_alfalfa_crop_area = response.other_rabi_alfalfa_crop_area;
                }
                if (response.other_rabi_horticulture_crop_area != null && response.other_rabi_horticulture_crop_area != "") {
                    other_rabi_horticulture_crop_area = response.other_rabi_horticulture_crop_area;
                }

                if (response.other_rabi_sunflower_crop_area != null && response.other_rabi_sunflower_crop_area != "") {
                    other_rabi_sunflower_crop_area = response.other_rabi_sunflower_crop_area;
                }

                if (response.other_rabi_othercrop_area1 != null && response.other_rabi_othercrop_area1 != "") {
                    other_rabi_othercrop_area1 = response.other_rabi_othercrop_area1;
                }
                if (response.other_rabi_othercrop_area2 != null && response.other_rabi_othercrop_area2 != "") {
                    other_rabi_othercrop_area2 = response.other_rabi_othercrop_area2;
                }

                if (response.other_rabi_othercrop_area3 != null && response.other_rabi_othercrop_area3 != "") {
                    other_rabi_othercrop_area3 = response.other_rabi_othercrop_area3;
                }

                if (response.other_rabi_othercrop_area4 != null && response.other_rabi_othercrop_area4 != "") {
                    other_rabi_othercrop_area4 = response.other_rabi_othercrop_area4;
                }
                if (response.other_rabi_othercrop_area5 != null && response.other_rabi_othercrop_area5 != "") {
                    other_rabi_othercrop_area5 = response.other_rabi_othercrop_area5;
                }
                //sprinkler_summer
                var other_summer_sericulture_crop_area = 0, other_summer_tomoto_crop_area = 0, other_summer_floriculture_crop_area = 0, other_summer_maize_crop_area = 0, other_summer_fodder_crop_area = 0;
                var other_summer_sugarcane_crop_area = 0, other_summer_horticulture_crop_area = 0;
                var other_summer_othercrop_area1 = 0, other_summer_othercrop_area2 = 0, other_summer_othercrop_area3 = 0, other_summer_othercrop_area4 = 0, other_summer_othercrop_area5 = 0;


                if (response.other_summer_sericulture_crop_area != null && response.other_summer_sericulture_crop_area != "") {
                    other_summer_sericulture_crop_area = response.other_summer_sericulture_crop_area;
                }
                if (response.other_summer_tomoto_crop_area != null && response.other_summer_tomoto_crop_area != "") {
                    other_summer_tomoto_crop_area = response.other_summer_tomoto_crop_area;
                }
                if (response.other_summer_floriculture_crop_area != null && response.other_summer_floriculture_crop_area != "") {
                    other_summer_floriculture_crop_area = response.other_summer_floriculture_crop_area;
                }
                if (response.other_summer_maize_crop_area != null && response.other_summer_maize_crop_area != "") {
                    other_summer_maize_crop_area = response.other_summer_maize_crop_area;
                }
                if (response.other_summer_fodder_crop_area != null && response.other_summer_fodder_crop_area != "") {
                    other_summer_fodder_crop_area = response.other_summer_fodder_crop_area;
                }

                if (response.other_summer_sugarcane_crop_area != null && response.other_summer_sugarcane_crop_area != "") {
                    other_summer_sugarcane_crop_area = response.other_summer_sugarcane_crop_area;
                }
                if (response.other_summer_horticulture_crop_area != null && response.other_summer_horticulture_crop_area != "") {
                    other_summer_horticulture_crop_area = response.other_summer_horticulture_crop_area;
                }

                if (response.other_summer_othercrop_area1 != null && response.other_summer_othercrop_area1 != "") {
                    other_summer_othercrop_area1 = response.other_summer_othercrop_area1;
                }
                if (response.other_summer_othercrop_area2 != null && response.other_summer_othercrop_area2 != "") {
                    other_summer_othercrop_area2 = response.other_summer_othercrop_area2;
                }

                if (response.other_summer_othercrop_area3 != null && response.other_summer_othercrop_area3 != "") {
                    other_summer_othercrop_area3 = response.other_summer_othercrop_area3;
                }

                if (response.other_summer_othercrop_area4 != null && response.other_summer_othercrop_area4 != "") {
                    other_summer_othercrop_area4 = response.other_summer_othercrop_area4;
                }
                if (response.other_summer_othercrop_area5 != null && response.other_summer_othercrop_area5 != "") {
                    other_summer_othercrop_area5 = response.other_summer_othercrop_area5;
                }


                total_other_measures_all_area_geting = parseFloat(other_kharif_paddy_crop_area) + parseFloat(other_kharif_ragi_crop_area) + parseFloat(other_kharif_groundnut_crop_area) + parseFloat(other_kharif_sugarcane_crop_area) + parseFloat(other_kharif_tomoto_crop_area) +
                    parseFloat(other_kharif_floriculture_crop_area) + parseFloat(other_kharif_sericulture_crop_area) + parseFloat(other_kharif_banana_crop_area) + parseFloat(other_kharif_fodder_crop_area) + parseFloat(other_kharif_maize_crop_area) +
                    parseFloat(other_kharif_chillies_crop_area) + parseFloat(other_kharif_cotton_crop_area) + parseFloat(other_kharif_melon_crop_area) + parseFloat(other_kharif_citrus_crop_area) + parseFloat(other_kharif_horticulture_crop_area) +
                    parseFloat(other_kharif_othercrop_area1) + parseFloat(other_kharif_othercrop_area2) + parseFloat(other_kharif_othercrop_area3) + parseFloat(other_kharif_othercrop_area4) + parseFloat(other_kharif_othercrop_area5) +
                    parseFloat(other_rabi_sericulture_crop_area) + parseFloat(other_rabi_tomoto_crop_area) + parseFloat(other_rabi_floriculture_crop_area) + parseFloat(other_rabi_ragi_crop_area) + parseFloat(other_rabi_sugarcane_crop_area) +
                    parseFloat(other_rabi_maize_crop_area) + parseFloat(other_rabi_fodder_crop_area) + parseFloat(other_rabi_paddy_crop_area) + parseFloat(other_rabi_alfalfa_crop_area) + parseFloat(other_rabi_horticulture_crop_area) + parseFloat(other_rabi_sunflower_crop_area) +
                    parseFloat(other_rabi_othercrop_area1) + parseFloat(other_rabi_othercrop_area2) + parseFloat(other_rabi_othercrop_area3) + parseFloat(other_rabi_othercrop_area4) + parseFloat(other_rabi_othercrop_area5) +
                    parseFloat(other_summer_sericulture_crop_area) + parseFloat(other_summer_tomoto_crop_area) + parseFloat(other_summer_floriculture_crop_area) + parseFloat(other_summer_maize_crop_area) + parseFloat(other_summer_fodder_crop_area) +
                    parseFloat(other_summer_sugarcane_crop_area) + parseFloat(other_summer_horticulture_crop_area) +
                    parseFloat(other_summer_othercrop_area1) + parseFloat(other_summer_othercrop_area2) + parseFloat(other_summer_othercrop_area3) + parseFloat(other_summer_othercrop_area4) + parseFloat(other_summer_othercrop_area5);

                $('#all_area_other_measures').text(total_other_measures_all_area_geting.toFixed(2));


            }

            total_of_Area_Proposed_under_various_Measures_deamend_side();

        }
    });

}

//all_are_getting Reduction in GW by added use of SW
function Reduction_in_GW_SW_all_are_getting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/ReductionInfo',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            $('#all_area_Reduction_in_GW_SW').text('');
            //$('#reduction_approx_estimated_cost').text('');
            if (response == "Error") {
                window.location = "/WSPHome/Fund_requirements";
            }

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {
                // $('#Sprinkler_kharif_Paddy_FundingSource').val(response.sprinkler_kharif_paddy_fundingsource);
                //sprinkler_kharif

                var reduction_kharif_paddy_quatum_value = 0, reduction_kharif_ragi_quatum_value = 0, reduction_kharif_groundnut_quatum_value = 0, reduction_kharif_sugarcane_quatum_value = 0, reduction_kharif_tomoto_quatum_value = 0;
                var reduction_kharif_floriculture_quatum_value = 0, reduction_kharif_sericulture_quatum_value = 0, reduction_kharif_banana_quatum_value = 0, reduction_kharif_fodder_quatum_value = 0, reduction_kharif_maize_quatum_value = 0;
                var reduction_kharif_chillies_quatum_value = 0, reduction_kharif_cotton_quatum_value = 0, reduction_kharif_melon_quatum_value = 0, reduction_kharif_citrus_quatum_value = 0, reduction_kharif_horticulture_quatum_value = 0;
                var reduction_kharif_othercrop_quantum_uservalue1 = 0, reduction_kharif_othercrop_quantum_uservalue2 = 0, reduction_kharif_othercrop_quantum_uservalue3 = 0, reduction_kharif_othercrop_quantum_uservalue4 = 0, reduction_kharif_othercrop_quantum_uservalue5 = 0;


                if (response.reduction_kharif_paddy_quatum_value != null && response.reduction_kharif_paddy_quatum_value != "") {
                    reduction_kharif_paddy_quatum_value = response.reduction_kharif_paddy_quatum_value;
                }
                if (response.reduction_kharif_ragi_quatum_value != null && response.reduction_kharif_ragi_quatum_value != "") {
                    reduction_kharif_ragi_quatum_value = response.reduction_kharif_ragi_quatum_value;
                }
                if (response.reduction_kharif_groundnut_quatum_value != null && response.reduction_kharif_groundnut_quatum_value != "") {
                    reduction_kharif_groundnut_quatum_value = response.reduction_kharif_groundnut_quatum_value;
                }
                if (response.reduction_kharif_sugarcane_quatum_value != null && response.reduction_kharif_sugarcane_quatum_value != "") {
                    reduction_kharif_sugarcane_quatum_value = response.reduction_kharif_sugarcane_quatum_value;
                }
                if (response.reduction_kharif_tomoto_quatum_value != null && response.reduction_kharif_tomoto_quatum_value != "") {
                    reduction_kharif_tomoto_quatum_value = response.reduction_kharif_tomoto_quatum_value;
                }

                if (response.reduction_kharif_floriculture_quatum_value != null && response.reduction_kharif_floriculture_quatum_value != "") {
                    reduction_kharif_floriculture_quatum_value = response.reduction_kharif_floriculture_quatum_value;
                }
                if (response.reduction_kharif_sericulture_quatum_value != null && response.reduction_kharif_sericulture_quatum_value != "") {
                    reduction_kharif_sericulture_quatum_value = response.reduction_kharif_sericulture_quatum_value;
                }
                if (response.reduction_kharif_banana_quatum_value != null && response.reduction_kharif_banana_quatum_value != "") {
                    reduction_kharif_banana_quatum_value = response.reduction_kharif_banana_quatum_value;
                }
                if (response.reduction_kharif_fodder_quatum_value != null && response.reduction_kharif_fodder_quatum_value != "") {
                    reduction_kharif_fodder_quatum_value = response.reduction_kharif_fodder_quatum_value;
                }
                if (response.reduction_kharif_maize_quatum_value != null && response.reduction_kharif_maize_quatum_value != "") {
                    reduction_kharif_maize_quatum_value = response.reduction_kharif_maize_quatum_value;
                }

                if (response.reduction_kharif_chillies_quatum_value != null && response.reduction_kharif_chillies_quatum_value != "") {
                    reduction_kharif_chillies_quatum_value = response.reduction_kharif_chillies_quatum_value;
                }
                if (response.reduction_kharif_cotton_quatum_value != null && response.reduction_kharif_cotton_quatum_value != "") {
                    reduction_kharif_cotton_quatum_value = response.reduction_kharif_cotton_quatum_value;
                }
                if (response.reduction_kharif_melon_quatum_value != null && response.reduction_kharif_melon_quatum_value != "") {
                    reduction_kharif_melon_quatum_value = response.reduction_kharif_melon_quatum_value;
                }
                if (response.reduction_kharif_citrus_quatum_value != null && response.reduction_kharif_citrus_quatum_value != "") {
                    reduction_kharif_citrus_quatum_value = response.reduction_kharif_citrus_quatum_value;
                }
                if (response.reduction_kharif_horticulture_quatum_value != null && response.reduction_kharif_horticulture_quatum_value != "") {
                    reduction_kharif_horticulture_quatum_value = response.reduction_kharif_horticulture_quatum_value;
                }
                if (response.reduction_kharif_othercrop_quantum_uservalue1 != null && response.reduction_kharif_othercrop_quantum_uservalue1 != "") {
                    reduction_kharif_othercrop_quantum_uservalue1 = response.reduction_kharif_othercrop_quantum_uservalue1;
                }
                if (response.reduction_kharif_othercrop_quantum_uservalue2 != null && response.reduction_kharif_othercrop_quantum_uservalue2 != "") {
                    reduction_kharif_othercrop_quantum_uservalue2 = response.reduction_kharif_othercrop_quantum_uservalue2;
                }

                if (response.reduction_kharif_othercrop_quantum_uservalue3 != null && response.reduction_kharif_othercrop_quantum_uservalue3 != "") {
                    reduction_kharif_othercrop_quantum_uservalue3 = response.reduction_kharif_othercrop_quantum_uservalue3;
                }

                if (response.reduction_kharif_othercrop_quantum_uservalue4 != null && response.reduction_kharif_othercrop_quantum_uservalue4 != "") {
                    reduction_kharif_othercrop_quantum_uservalue4 = response.reduction_kharif_othercrop_quantum_uservalue4;
                }
                if (response.reduction_kharif_othercrop_quantum_uservalue5 != null && response.reduction_kharif_othercrop_quantum_uservalue5 != "") {
                    reduction_kharif_othercrop_quantum_uservalue5 = response.reduction_kharif_othercrop_quantum_uservalue5;
                }

                //sprinkler_Rabi
                var reduction_rabi_sericulture_quatum_value = 0, reduction_rabi_tomoto_quatum_value = 0, reduction_rabi_floriculture_quatum_value = 0, reduction_rabi_ragi_quatum_value = 0, reduction_rabi_sugarcane_quatum_value = 0;
                var reduction_rabi_maize_quatum_value = 0, reduction_rabi_fodder_quatum_value = 0, reduction_rabi_paddy_quatum_value = 0, reduction_rabi_alfalfa_quatum_value = 0, reduction_rabi_horticulture_quatum_value = 0, reduction_rabi_sunflower_quatum_value = 0;
                var reduction_rabi_othercrop_quantum_uservalue1 = 0, reduction_rabi_othercrop_quantum_uservalue2 = 0, reduction_rabi_othercrop_quantum_uservalue3 = 0, reduction_rabi_othercrop_quantum_uservalue4 = 0, reduction_rabi_othercrop_quantum_uservalue5 = 0;

                if (response.reduction_rabi_sericulture_quatum_value != null && response.reduction_rabi_sericulture_quatum_value != "") {
                    reduction_rabi_sericulture_quatum_value = response.reduction_rabi_sericulture_quatum_value;
                }
                if (response.reduction_rabi_tomoto_quatum_value != null && response.reduction_rabi_tomoto_quatum_value != "") {
                    reduction_rabi_tomoto_quatum_value = response.reduction_rabi_tomoto_quatum_value;
                }
                if (response.reduction_rabi_floriculture_quatum_value != null && response.reduction_rabi_floriculture_quatum_value != "") {
                    reduction_rabi_floriculture_quatum_value = response.reduction_rabi_floriculture_quatum_value;
                }
                if (response.reduction_rabi_ragi_quatum_value != null && response.reduction_rabi_ragi_quatum_value != "") {
                    reduction_rabi_ragi_quatum_value = response.reduction_rabi_ragi_quatum_value;
                }
                if (response.reduction_rabi_sugarcane_quatum_value != null && response.reduction_rabi_sugarcane_quatum_value != "") {
                    reduction_rabi_sugarcane_quatum_value = response.reduction_rabi_sugarcane_quatum_value;
                }
                if (response.reduction_rabi_maize_quatum_value != null && response.reduction_rabi_maize_quatum_value != "") {
                    reduction_rabi_maize_quatum_value = response.reduction_rabi_maize_quatum_value;
                }
                if (response.reduction_rabi_fodder_quatum_value != null && response.reduction_rabi_fodder_quatum_value != "") {
                    reduction_rabi_fodder_quatum_value = response.reduction_rabi_fodder_quatum_value;
                }
                if (response.reduction_rabi_paddy_quatum_value != null && response.reduction_rabi_paddy_quatum_value != "") {
                    reduction_rabi_paddy_quatum_value = response.reduction_rabi_paddy_quatum_value;
                }
                if (response.reduction_rabi_alfalfa_quatum_value != null && response.reduction_rabi_alfalfa_quatum_value != "") {
                    reduction_rabi_alfalfa_quatum_value = response.reduction_rabi_alfalfa_quatum_value;
                }
                if (response.reduction_rabi_horticulture_quatum_value != null && response.reduction_rabi_horticulture_quatum_value != "") {
                    reduction_rabi_horticulture_quatum_value = response.reduction_rabi_horticulture_quatum_value;
                }

                if (response.reduction_rabi_sunflower_quatum_value != null && response.reduction_rabi_sunflower_quatum_value != "") {
                    reduction_rabi_sunflower_quatum_value = response.reduction_rabi_sunflower_quatum_value;
                }

                if (response.reduction_rabi_othercrop_quantum_uservalue1 != null && response.reduction_rabi_othercrop_quantum_uservalue1 != "") {
                    reduction_rabi_othercrop_quantum_uservalue1 = response.reduction_rabi_othercrop_quantum_uservalue1;
                }
                if (response.reduction_rabi_othercrop_quantum_uservalue2 != null && response.reduction_rabi_othercrop_quantum_uservalue2 != "") {
                    reduction_rabi_othercrop_quantum_uservalue2 = response.reduction_rabi_othercrop_quantum_uservalue2;
                }

                if (response.reduction_rabi_othercrop_quantum_uservalue3 != null && response.reduction_rabi_othercrop_quantum_uservalue3 != "") {
                    reduction_rabi_othercrop_quantum_uservalue3 = response.reduction_rabi_othercrop_quantum_uservalue3;
                }

                if (response.reduction_rabi_othercrop_quantum_uservalue4 != null && response.reduction_rabi_othercrop_quantum_uservalue4 != "") {
                    reduction_rabi_othercrop_quantum_uservalue4 = response.reduction_rabi_othercrop_quantum_uservalue4;
                }
                if (response.reduction_rabi_othercrop_quantum_uservalue5 != null && response.reduction_rabi_othercrop_quantum_uservalue5 != "") {
                    reduction_rabi_othercrop_quantum_uservalue5 = response.reduction_rabi_othercrop_quantum_uservalue5;
                }
                //sprinkler_summer
                var reduction_summer_sericulture_quatum_value = 0, reduction_summer_tomoto_quatum_value = 0, reduction_summer_floriculture_quatum_value = 0, reduction_summer_maize_quatum_value = 0, reduction_summer_fodder_quatum_value = 0;
                var reduction_summer_sugarcane_quatum_value = 0, reduction_summer_horticulture_quantum_uservalue = 0;
                var reduction_summer_othercrop_quantum_uservalue1 = 0, reduction_summer_othercrop_quantum_uservalue2 = 0, reduction_summer_othercrop_quantum_uservalue3 = 0, reduction_summer_othercrop_quantum_uservalue4 = 0, reduction_summer_othercrop_quantum_uservalue5 = 0;


                if (response.reduction_summer_sericulture_quatum_value != null && response.reduction_summer_sericulture_quatum_value != "") {
                    reduction_summer_sericulture_quatum_value = response.reduction_summer_sericulture_quatum_value;
                }
                if (response.reduction_summer_tomoto_quatum_value != null && response.reduction_summer_tomoto_quatum_value != "") {
                    reduction_summer_tomoto_quatum_value = response.reduction_summer_tomoto_quatum_value;
                }
                if (response.reduction_summer_floriculture_quatum_value != null && response.reduction_summer_floriculture_quatum_value != "") {
                    reduction_summer_floriculture_quatum_value = response.reduction_summer_floriculture_quatum_value;
                }
                if (response.reduction_summer_maize_quatum_value != null && response.reduction_summer_maize_quatum_value != "") {
                    reduction_summer_maize_quatum_value = response.reduction_summer_maize_quatum_value;
                }
                if (response.reduction_summer_fodder_quatum_value != null && response.reduction_summer_fodder_quatum_value != "") {
                    reduction_summer_fodder_quatum_value = response.reduction_summer_fodder_quatum_value;
                }

                if (response.reduction_summer_sugarcane_quatum_value != null && response.reduction_summer_sugarcane_quatum_value != "") {
                    reduction_summer_sugarcane_quatum_value = response.reduction_summer_sugarcane_quatum_value;
                }
                if (response.reduction_summer_horticulture_quantum_uservalue != null && response.reduction_summer_horticulture_quantum_uservalue != "") {
                    reduction_summer_horticulture_quantum_uservalue = response.reduction_summer_horticulture_quantum_uservalue;
                }

                if (response.reduction_summer_othercrop_quantum_uservalue1 != null && response.reduction_summer_othercrop_quantum_uservalue1 != "") {
                    reduction_summer_othercrop_quantum_uservalue1 = response.reduction_summer_othercrop_quantum_uservalue1;
                }
                if (response.reduction_summer_othercrop_quantum_uservalue2 != null && response.reduction_summer_othercrop_quantum_uservalue2 != "") {
                    reduction_summer_othercrop_quantum_uservalue2 = response.reduction_summer_othercrop_quantum_uservalue2;
                }

                if (response.reduction_summer_othercrop_quantum_uservalue3 != null && response.reduction_summer_othercrop_quantum_uservalue3 != "") {
                    reduction_summer_othercrop_quantum_uservalue3 = response.reduction_summer_othercrop_quantum_uservalue3;
                }

                if (response.reduction_summer_othercrop_quantum_uservalue4 != null && response.reduction_summer_othercrop_quantum_uservalue4 != "") {
                    reduction_summer_othercrop_quantum_uservalue4 = response.reduction_summer_othercrop_quantum_uservalue4;
                }
                if (response.reduction_summer_othercrop_quantum_uservalue5 != null && response.reduction_summer_othercrop_quantum_uservalue5 != "") {
                    reduction_summer_othercrop_quantum_uservalue5 = response.reduction_summer_othercrop_quantum_uservalue5;
                }


                total_Reduction_in_GW_SW_all_area_geting = parseFloat(reduction_kharif_paddy_quatum_value) + parseFloat(reduction_kharif_ragi_quatum_value) + parseFloat(reduction_kharif_groundnut_quatum_value) + parseFloat(reduction_kharif_sugarcane_quatum_value) + parseFloat(reduction_kharif_tomoto_quatum_value) +
                    parseFloat(reduction_kharif_floriculture_quatum_value) + parseFloat(reduction_kharif_sericulture_quatum_value) + parseFloat(reduction_kharif_banana_quatum_value) + parseFloat(reduction_kharif_fodder_quatum_value) + parseFloat(reduction_kharif_maize_quatum_value) +
                    parseFloat(reduction_kharif_chillies_quatum_value) + parseFloat(reduction_kharif_cotton_quatum_value) + parseFloat(reduction_kharif_melon_quatum_value) + parseFloat(reduction_kharif_citrus_quatum_value) + parseFloat(reduction_kharif_horticulture_quatum_value) +
                    parseFloat(reduction_kharif_othercrop_quantum_uservalue1) + parseFloat(reduction_kharif_othercrop_quantum_uservalue2) + parseFloat(reduction_kharif_othercrop_quantum_uservalue3) + parseFloat(reduction_kharif_othercrop_quantum_uservalue4) + parseFloat(reduction_kharif_othercrop_quantum_uservalue5) +
                    parseFloat(reduction_rabi_sericulture_quatum_value) + parseFloat(reduction_rabi_tomoto_quatum_value) + parseFloat(reduction_rabi_floriculture_quatum_value) + parseFloat(reduction_rabi_ragi_quatum_value) + parseFloat(reduction_rabi_sugarcane_quatum_value) +
                    parseFloat(reduction_rabi_maize_quatum_value) + parseFloat(reduction_rabi_fodder_quatum_value) + parseFloat(reduction_rabi_paddy_quatum_value) + parseFloat(reduction_rabi_alfalfa_quatum_value) + parseFloat(reduction_rabi_horticulture_quatum_value) + parseFloat(reduction_rabi_sunflower_quatum_value) +
                    parseFloat(reduction_rabi_othercrop_quantum_uservalue1) + parseFloat(reduction_rabi_othercrop_quantum_uservalue2) + parseFloat(reduction_rabi_othercrop_quantum_uservalue3) + parseFloat(reduction_rabi_othercrop_quantum_uservalue4) + parseFloat(reduction_rabi_othercrop_quantum_uservalue5) +
                    parseFloat(reduction_summer_sericulture_quatum_value) + parseFloat(reduction_summer_tomoto_quatum_value) + parseFloat(reduction_summer_floriculture_quatum_value) + parseFloat(reduction_summer_maize_quatum_value) + parseFloat(reduction_summer_fodder_quatum_value) +
                    parseFloat(reduction_summer_sugarcane_quatum_value) + parseFloat(reduction_summer_horticulture_quantum_uservalue) +
                    parseFloat(reduction_summer_othercrop_quantum_uservalue1) + parseFloat(reduction_summer_othercrop_quantum_uservalue2) + parseFloat(reduction_summer_othercrop_quantum_uservalue3) + parseFloat(reduction_summer_othercrop_quantum_uservalue4) + parseFloat(reduction_summer_othercrop_quantum_uservalue5);

                $('#all_area_Reduction_in_GW_SW').text(total_Reduction_in_GW_SW_all_area_geting.toFixed(2));


            }
            total_of_Area_Proposed_under_various_Measures_deamend_side();

        }
    });
}

//all_are_getting Crop diversification
function Crop_Diversification_Info_all_are_getting() {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; chatset=utf-8',
        url: '/WspNew/Crop_Diversification_Info',
        data: '',
        dataType: 'JSON',
        success: function (response) {
            $('#all_area_Crop_diversification').text('');
            //$('#crop_approx_estimated_cost').text('');

            if (response == "Error") {
                window.location = "/WSPHome/Fund_requirements";
            }

            if (response == "Logout") {
                window.location = "/WspNew/WSP_GWM_HOME";
            }
            if (response.length != 0) {
                // $('#Sprinkler_kharif_Paddy_FundingSource').val(response.sprinkler_kharif_paddy_fundingsource);
                //sprinkler_kharif

                var original_kharif_paddy_crop_area = 0, original_kharif_ragi_crop_area = 0, original_kharif_groundnut_crop_area = 0, original_kharif_sugarcane_crop_area = 0, original_kharif_tomoto_crop_area = 0;
                var original_kharif_floriculture_crop_area = 0, original_kharif_sericulture_crop_area = 0, original_kharif_banana_crop_area = 0, original_kharif_fodder_crop_area = 0, original_kharif_maize_crop_area = 0;
                var original_kharif_chillies_crop_area = 0, original_kharif_cotton_crop_area = 0, original_kharif_melon_crop_area = 0, original_kharif_citrus_crop_area = 0, original_kharif_horticulture_crop_area = 0;
                var changed_kharif_croparea_area1 = 0, changed_kharif_croparea_area2 = 0, changed_kharif_croparea_area3 = 0, changed_kharif_croparea_area4 = 0, changed_kharif_croparea_area5 = 0;


                if (response.original_kharif_paddy_crop_area != null && response.original_kharif_paddy_crop_area != "") {
                    original_kharif_paddy_crop_area = response.original_kharif_paddy_crop_area;
                }
                if (response.original_kharif_ragi_crop_area != null && response.original_kharif_ragi_crop_area != "") {
                    original_kharif_ragi_crop_area = response.original_kharif_ragi_crop_area;
                }
                if (response.original_kharif_groundnut_crop_area != null && response.original_kharif_groundnut_crop_area != "") {
                    original_kharif_groundnut_crop_area = response.original_kharif_groundnut_crop_area;
                }
                if (response.original_kharif_sugarcane_crop_area != null && response.original_kharif_sugarcane_crop_area != "") {
                    original_kharif_sugarcane_crop_area = response.original_kharif_sugarcane_crop_area;
                }
                if (response.original_kharif_tomoto_crop_area != null && response.original_kharif_tomoto_crop_area != "") {
                    original_kharif_tomoto_crop_area = response.original_kharif_tomoto_crop_area;
                }

                if (response.original_kharif_floriculture_crop_area != null && response.original_kharif_floriculture_crop_area != "") {
                    original_kharif_floriculture_crop_area = response.original_kharif_floriculture_crop_area;
                }
                if (response.original_kharif_sericulture_crop_area != null && response.original_kharif_sericulture_crop_area != "") {
                    original_kharif_sericulture_crop_area = response.original_kharif_sericulture_crop_area;
                }
                if (response.original_kharif_banana_crop_area != null && response.original_kharif_banana_crop_area != "") {
                    original_kharif_banana_crop_area = response.original_kharif_banana_crop_area;
                }
                if (response.original_kharif_fodder_crop_area != null && response.original_kharif_fodder_crop_area != "") {
                    original_kharif_fodder_crop_area = response.original_kharif_fodder_crop_area;
                }
                if (response.original_kharif_maize_crop_area != null && response.original_kharif_maize_crop_area != "") {
                    original_kharif_maize_crop_area = response.original_kharif_maize_crop_area;
                }

                if (response.original_kharif_chillies_crop_area != null && response.original_kharif_chillies_crop_area != "") {
                    original_kharif_chillies_crop_area = response.original_kharif_chillies_crop_area;
                }
                if (response.original_kharif_cotton_crop_area != null && response.original_kharif_cotton_crop_area != "") {
                    original_kharif_cotton_crop_area = response.original_kharif_cotton_crop_area;
                }
                if (response.original_kharif_melon_crop_area != null && response.original_kharif_melon_crop_area != "") {
                    original_kharif_melon_crop_area = response.original_kharif_melon_crop_area;
                }
                if (response.original_kharif_citrus_crop_area != null && response.original_kharif_citrus_crop_area != "") {
                    original_kharif_citrus_crop_area = response.original_kharif_citrus_crop_area;
                }
                if (response.original_kharif_horticulture_crop_area != null && response.original_kharif_horticulture_crop_area != "") {
                    original_kharif_horticulture_crop_area = response.original_kharif_horticulture_crop_area;
                }
                if (response.changed_kharif_croparea_area1 != null && response.changed_kharif_croparea_area1 != "") {
                    changed_kharif_croparea_area1 = response.changed_kharif_croparea_area1;
                }
                if (response.changed_kharif_croparea_area2 != null && response.changed_kharif_croparea_area2 != "") {
                    changed_kharif_croparea_area2 = response.changed_kharif_croparea_area2;
                }

                if (response.changed_kharif_croparea_area3 != null && response.changed_kharif_croparea_area3 != "") {
                    changed_kharif_croparea_area3 = response.changed_kharif_croparea_area3;
                }

                if (response.changed_kharif_croparea_area4 != null && response.changed_kharif_croparea_area4 != "") {
                    changed_kharif_croparea_area4 = response.changed_kharif_croparea_area4;
                }
                if (response.changed_kharif_croparea_area5 != null && response.changed_kharif_croparea_area5 != "") {
                    changed_kharif_croparea_area5 = response.changed_kharif_croparea_area5;
                }

                //sprinkler_Rabi
                var original_rabi_sericulture_crop_area = 0, original_rabi_tomoto_crop_area = 0, original_rabi_floriculture_crop_area = 0, original_rabi_ragi_crop_area = 0, original_rabi_sugarcane_crop_area = 0;
                var original_rabi_maize_crop_area = 0, original_rabi_fodder_crop_area = 0, original_rabi_paddy_crop_area = 0, original_rabi_alfalfa_crop_area = 0, original_rabi_horticulture_crop_area = 0, original_rabi_sunflower_crop_area = 0;
                var changed_rabi_croparea_area1 = 0, changed_rabi_croparea_area2 = 0, changed_rabi_croparea_area3 = 0, changed_rabi_croparea_area4 = 0, changed_rabi_croparea_area5 = 0;

                if (response.original_rabi_sericulture_crop_area != null && response.original_rabi_sericulture_crop_area != "") {
                    original_rabi_sericulture_crop_area = response.original_rabi_sericulture_crop_area;
                }
                if (response.original_rabi_tomoto_crop_area != null && response.original_rabi_tomoto_crop_area != "") {
                    original_rabi_tomoto_crop_area = response.original_rabi_tomoto_crop_area;
                }
                if (response.original_rabi_floriculture_crop_area != null && response.original_rabi_floriculture_crop_area != "") {
                    original_rabi_floriculture_crop_area = response.original_rabi_floriculture_crop_area;
                }
                if (response.original_rabi_ragi_crop_area != null && response.original_rabi_ragi_crop_area != "") {
                    original_rabi_ragi_crop_area = response.original_rabi_ragi_crop_area;
                }
                if (response.original_rabi_sugarcane_crop_area != null && response.original_rabi_sugarcane_crop_area != "") {
                    original_rabi_sugarcane_crop_area = response.original_rabi_sugarcane_crop_area;
                }
                if (response.original_rabi_maize_crop_area != null && response.original_rabi_maize_crop_area != "") {
                    original_rabi_maize_crop_area = response.original_rabi_maize_crop_area;
                }
                if (response.original_rabi_fodder_crop_area != null && response.original_rabi_fodder_crop_area != "") {
                    original_rabi_fodder_crop_area = response.original_rabi_fodder_crop_area;
                }
                if (response.original_rabi_paddy_crop_area != null && response.original_rabi_paddy_crop_area != "") {
                    original_rabi_paddy_crop_area = response.original_rabi_paddy_crop_area;
                }
                if (response.original_rabi_alfalfa_crop_area != null && response.original_rabi_alfalfa_crop_area != "") {
                    original_rabi_alfalfa_crop_area = response.original_rabi_alfalfa_crop_area;
                }
                if (response.original_rabi_horticulture_crop_area != null && response.original_rabi_horticulture_crop_area != "") {
                    original_rabi_horticulture_crop_area = response.original_rabi_horticulture_crop_area;
                }

                if (response.original_rabi_sunflower_crop_area != null && response.original_rabi_sunflower_crop_area != "") {
                    original_rabi_sunflower_crop_area = response.original_rabi_sunflower_crop_area;
                }

                if (response.changed_rabi_croparea_area1 != null && response.changed_rabi_croparea_area1 != "") {
                    changed_rabi_croparea_area1 = response.changed_rabi_croparea_area1;
                }
                if (response.changed_rabi_croparea_area2 != null && response.changed_rabi_croparea_area2 != "") {
                    changed_rabi_croparea_area2 = response.changed_rabi_croparea_area2;
                }

                if (response.changed_rabi_croparea_area3 != null && response.changed_rabi_croparea_area3 != "") {
                    changed_rabi_croparea_area3 = response.changed_rabi_croparea_area3;
                }

                if (response.changed_rabi_croparea_area4 != null && response.changed_rabi_croparea_area4 != "") {
                    changed_rabi_croparea_area4 = response.changed_rabi_croparea_area4;
                }
                if (response.changed_rabi_croparea_area5 != null && response.changed_rabi_croparea_area5 != "") {
                    changed_rabi_croparea_area5 = response.changed_rabi_croparea_area5;
                }
                //sprinkler_summer
                var original_summer_sericulture_crop_area = 0, original_summer_tomoto_crop_area = 0, original_summer_floriculture_crop_area = 0, original_summer_maize_crop_area = 0, original_summer_fodder_crop_area = 0;
                var original_summer_sugarcane_crop_area = 0, original_summer_horticulture_crop_area = 0;
                var changed_summer_croparea_area1 = 0, changed_summer_croparea_area2 = 0, changed_summer_croparea_area3 = 0, changed_summer_croparea_area4 = 0, changed_summer_croparea_area5 = 0;


                if (response.original_summer_sericulture_crop_area != null && response.original_summer_sericulture_crop_area != "") {
                    original_summer_sericulture_crop_area = response.original_summer_sericulture_crop_area;
                }
                if (response.original_summer_tomoto_crop_area != null && response.original_summer_tomoto_crop_area != "") {
                    original_summer_tomoto_crop_area = response.original_summer_tomoto_crop_area;
                }
                if (response.original_summer_floriculture_crop_area != null && response.original_summer_floriculture_crop_area != "") {
                    original_summer_floriculture_crop_area = response.original_summer_floriculture_crop_area;
                }
                if (response.original_summer_maize_crop_area != null && response.original_summer_maize_crop_area != "") {
                    original_summer_maize_crop_area = response.original_summer_maize_crop_area;
                }
                if (response.original_summer_fodder_crop_area != null && response.original_summer_fodder_crop_area != "") {
                    original_summer_fodder_crop_area = response.original_summer_fodder_crop_area;
                }

                if (response.original_summer_sugarcane_crop_area != null && response.original_summer_sugarcane_crop_area != "") {
                    original_summer_sugarcane_crop_area = response.original_summer_sugarcane_crop_area;
                }
                if (response.original_summer_horticulture_crop_area != null && response.original_summer_horticulture_crop_area != "") {
                    original_summer_horticulture_crop_area = response.original_summer_horticulture_crop_area;
                }

                if (response.changed_summer_croparea_area1 != null && response.changed_summer_croparea_area1 != "") {
                    changed_summer_croparea_area1 = response.changed_summer_croparea_area1;
                }
                if (response.changed_summer_croparea_area2 != null && response.changed_summer_croparea_area2 != "") {
                    changed_summer_croparea_area2 = response.changed_summer_croparea_area2;
                }

                if (response.changed_summer_croparea_area3 != null && response.changed_summer_croparea_area3 != "") {
                    changed_summer_croparea_area3 = response.changed_summer_croparea_area3;
                }

                if (response.changed_summer_croparea_area4 != null && response.changed_summer_croparea_area4 != "") {
                    changed_summer_croparea_area4 = response.changed_summer_croparea_area4;
                }
                if (response.changed_summer_croparea_area5 != null && response.changed_summer_croparea_area5 != "") {
                    changed_summer_croparea_area5 = response.changed_summer_croparea_area5;
                }


                total_Crop_diversificationall_area_geting = parseFloat(original_kharif_paddy_crop_area) + parseFloat(original_kharif_ragi_crop_area) + parseFloat(original_kharif_groundnut_crop_area) + parseFloat(original_kharif_sugarcane_crop_area) + parseFloat(original_kharif_tomoto_crop_area) +
                    parseFloat(original_kharif_floriculture_crop_area) + parseFloat(original_kharif_sericulture_crop_area) + parseFloat(original_kharif_banana_crop_area) + parseFloat(original_kharif_fodder_crop_area) + parseFloat(original_kharif_maize_crop_area) +
                    parseFloat(original_kharif_chillies_crop_area) + parseFloat(original_kharif_cotton_crop_area) + parseFloat(original_kharif_melon_crop_area) + parseFloat(original_kharif_citrus_crop_area) + parseFloat(original_kharif_horticulture_crop_area) +
                    parseFloat(changed_kharif_croparea_area1) + parseFloat(changed_kharif_croparea_area2) + parseFloat(changed_kharif_croparea_area3) + parseFloat(changed_kharif_croparea_area4) + parseFloat(changed_kharif_croparea_area5) +
                    parseFloat(original_rabi_sericulture_crop_area) + parseFloat(original_rabi_tomoto_crop_area) + parseFloat(original_rabi_floriculture_crop_area) + parseFloat(original_rabi_ragi_crop_area) + parseFloat(original_rabi_sugarcane_crop_area) +
                    parseFloat(original_rabi_maize_crop_area) + parseFloat(original_rabi_fodder_crop_area) + parseFloat(original_rabi_paddy_crop_area) + parseFloat(original_rabi_alfalfa_crop_area) + parseFloat(original_rabi_horticulture_crop_area) + parseFloat(original_rabi_sunflower_crop_area) +
                    parseFloat(changed_rabi_croparea_area1) + parseFloat(changed_rabi_croparea_area2) + parseFloat(changed_rabi_croparea_area3) + parseFloat(changed_rabi_croparea_area4) + parseFloat(changed_rabi_croparea_area5) +
                    parseFloat(original_summer_sericulture_crop_area) + parseFloat(original_summer_tomoto_crop_area) + parseFloat(original_summer_floriculture_crop_area) + parseFloat(original_summer_maize_crop_area) + parseFloat(original_summer_fodder_crop_area) +
                    parseFloat(original_summer_sugarcane_crop_area) + parseFloat(original_summer_horticulture_crop_area) +
                    parseFloat(changed_summer_croparea_area1) + parseFloat(changed_summer_croparea_area2) + parseFloat(changed_summer_croparea_area3) + parseFloat(changed_summer_croparea_area4) + parseFloat(changed_summer_croparea_area5);

                $('#all_area_Crop_diversification').text(total_Crop_diversificationall_area_geting.toFixed(2));

                // Total Fund required for Demand Side (Amount in lakh)



            }
            total_of_Area_Proposed_under_various_Measures_deamend_side();


        }
    });
}


function total_of_Area_Proposed_under_various_Measures_deamend_side() {

    total_of_Area_Proposed_under_various_Measures_value_sum = parseFloat(total_Sprinkler_all_area_geting) + parseFloat(total_drip_all_area_geting) + parseFloat(total_ug_pipeline_all_area_geting) + parseFloat(total_Reduction_in_GW_SW_all_area_geting) + parseFloat(total_Crop_diversificationall_area_geting) + + parseFloat(total_other_measures_all_area_geting);

    $('#total_of_Area_Proposed_under_various_Measures_value_sum').text(total_of_Area_Proposed_under_various_Measures_value_sum.toFixed(2));
}
