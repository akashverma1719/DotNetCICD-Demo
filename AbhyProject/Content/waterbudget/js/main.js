$(function () {
    if (typeof Jsondata !== "undefined") {
        console.log("Jsondataexternal", Jsondata);
    }
    var overlayColors = [
        "rgba(0, 104, 139, 0.5)",
        "rgba(0, 77, 77, 0.5)",
        "rgba(34, 139, 34, 0.5)",
        "rgba(0, 0, 102, 0.5)",
        "rgba(204, 102, 0, 0.5)",
        "rgba(0, 128, 128, 0.5)",
        "rgba(128, 128, 0, 0.5)",
        "rgba(0, 100, 0, 0.5)",
        "rgba(139, 69, 19, 0.5)",
        "rgba(85, 107, 47, 0.5)",
        "rgba(139, 90, 43, 0.5)",
        "rgba(47, 79, 79, 0.5)",
    ];
    var overlayColors2 = [
        "#5e5e5e",
        "rgba(0, 128, 128)",
        "#128d12",
        "#cf8dcd",
        "#ff582e",
        "#996846",
        "#a1956f",
        "rgba(46, 139, 87)",
        "rgba(255, 127, 80)",
        "rgba(128, 128, 0)",
        "#d994b7f0",
        "rgba(112, 128, 144)",
    ];
    var lastValidStep = 0;
    let isManuallyAdvancing = false;
    function calculateTotalGrossCroppedArea(row) {
        console.log(row);
        let area_kharif_season =
            parseFloat(row.find('input[name*="area_kharif_season"]').val()) || 0;
        let area_rabi_season =
            parseFloat(row.find('input[name*="area_rabi_season"]').val()) || 0;
        let area_summer_season =
            parseFloat(row.find('input[name*="area_summer_season"]').val()) || 0;
        let totalarea = area_kharif_season + area_rabi_season + area_summer_season;
        row
            .find('input[name*="total_gross_cropped_area"]')
            .val(totalarea.toFixed(4));
    }
    function calculateTotalGrossCroppedArea2(row) {
        let total =
            parseFloat(row.find('input[name*="total_gross_cropped_area"]').val()) ||
            0;
        let irrigation =
            parseFloat(row.find('input[name*="net_irrigation_requirement"]').val()) ||
            0;
        let final = irrigation * total;
        let val = row.find('input[name*="total_irrigation_requirement"]');
        $(val).val(final.toFixed(4));
    }
    function calculateTotalGrossCroppedAreaTable() {
        let totalCrops = 0;
        $("#major_Crops tbody tr").each(function () {
            let total_irrigation_requirement =
                parseFloat($(this).find(".total_irrigation_requirement").val()) || 0;
            console.log($(this).find(".total_irrigation_requirement"));
            totalCrops += total_irrigation_requirement;
        });

        $("#totalcrop").text(totalCrops.toFixed(4));
        $("#totalcrop_hdn").val(totalCrops.toFixed(4));
        $("#wb_total_water_req_irri_water_req").val(totalCrops.toFixed(4));

        let drinking_domestic =
            parseFloat($("#wb_total_water_req_drink_dom_water_req").val()) || 0;
        let livestockpopval =
            parseFloat($("#wb_total_water_req_water_req_livestock_pop").val()) || 0;
        let irrigationwr =
            parseFloat($("#wb_total_water_req_irri_water_req").val()) || 0;
        let industries =
            parseFloat($("#wb_total_water_req_water_req_indust").val()) || 0;

        let totalwater = parseFloat(
            drinking_domestic + livestockpopval + irrigationwr + industries
        ).toFixed(4);
        $("#wb_total_water_req_total_water_requirement").val(totalwater);

        let totwateravailable =
            parseFloat($("#wb_tot_water_avail_total_water_availability").val()) || 0;
        let totwaterrequire =
            parseFloat($("#wb_total_water_req_total_water_requirement").val()) || 0;

        $("#wb_water_balance_total_water_availability").val(totwateravailable);
        $("#wb_water_balance_total_water_requirement").val(totwaterrequire);

        let waterbalence = parseFloat(totwateravailable - totwaterrequire).toFixed(4);
        if (waterbalence > 0) {
            $("#wb_water_balance_water_balance").addClass('positiveValue');
        } else {
            $("#wb_water_balance_water_balance").addClass('negativeValue');
        }
        $("#wb_water_balance_water_balance").val(waterbalence);

    }
    function calculateAvailabilitySurfaceWaterStorage() {
        var capacity = 0;
        let BodiesStructure =
            parseFloat($("#wb_avai_surface_water_stor_exist_structure").val()) || 1;
        let AnnualnoFilling =
            parseFloat($("#wb_avai_surface_water_stor_annual_filling").val()) || 1;
        let StoreCapecity =
            parseFloat($("#wb_avai_surface_water_stor_capacity_structure").val()) ||
            1;
        capacity = BodiesStructure * AnnualnoFilling * StoreCapecity;
        $("#wb_avai_surface_water_stor_total_capacity_structure").val(
            capacity.toFixed(4)
        );
        let loss = parseFloat(capacity * (40 / 100));
        $("#wb_avai_surface_water_stor_lossess").val(loss.toFixed(4));

        let totloss = parseFloat(capacity - loss);
        $("#wb_avai_surface_water_stor_total_surface_water_uti").val(
            totloss.toFixed(4)
        );

        $("#wb_tot_water_avail_surface_water_avail").val(totloss);

        //8th form calculation
        let gwavalability =
            parseFloat($("#wb_est_ground_water_avail_est_vol_rech_gw").val()) || 0;
        $("#wb_tot_water_avail_groundwater_avail").val(gwavalability);

        //let swavalability = parseFloat($("#wb_avai_surface_water_stor_total_surface_water_uti").val()) || 0;
        let swavalability =
            parseFloat($("#wb_tot_water_avail_surface_water_avail").val()) || 0;
        //$("#wb_tot_water_avail_surface_water_avail").val(swavalability);

        //let agwavalability = parseFloat($("#totalqt_annual_rech_waterhdn").val()) || 0;
        let agwavalability =
            parseFloat($("#wb_tot_water_avail_add_ground_water").val()) || 0;
        //$("#wb_tot_water_avail_add_ground_water").val(agwavalability);

        let transportedwater =
            parseFloat(
                $("#wb_water_avai_transported_water_transported_water").val()
            ) || 0;
        $("#wb_tot_water_avail_transported_water").val(transportedwater);

        let nonpotable =
            parseFloat($("#wb_water_avai_non_potable_water_non_potable_use").val()) ||
            0;
        $("#wb_tot_water_avail_water_non_potable_use").val(nonpotable);

        let totalwateravalability = parseFloat(
            gwavalability +
            swavalability +
            agwavalability +
            transportedwater +
            nonpotable
        ).toFixed(4);

        $("#wb_tot_water_avail_total_water_availability").val(
            totalwateravalability
        );
    }
    function calculateTotalsQuantityofAnnuallyRecharged() {
        let totalQuantity = 0;
        debugger;
        $("#Artificial_Recharge tbody tr").each(function () {
            let qt_annual_rech_water =
                parseFloat($(this).find(".qt_annual_rech_water").val()) || 0;
            totalQuantity += qt_annual_rech_water;
        });

        // Update the totals in the footer
        $("#totalqt_annual_rech_water").text(totalQuantity.toFixed(4));
        $("#totalqt_annual_rech_waterhdn").val(totalQuantity.toFixed(4));

        $("#wb_tot_water_avail_add_ground_water").val(totalQuantity.toFixed(4));

        //8th form calculation
        let gwavalability =
            parseFloat($("#wb_est_ground_water_avail_est_vol_rech_gw").val()) || 0;
        $("#wb_tot_water_avail_groundwater_avail").val(gwavalability);

        //let swavalability = parseFloat($("#wb_avai_surface_water_stor_total_surface_water_uti").val()) || 0;
        let swavalability =
            parseFloat($("#wb_tot_water_avail_surface_water_avail").val()) || 0;
        //$("#wb_tot_water_avail_surface_water_avail").val(swavalability);

        //let agwavalability = parseFloat($("#totalqt_annual_rech_waterhdn").val()) || 0;
        let agwavalability =
            parseFloat($("#wb_tot_water_avail_add_ground_water").val()) || 0;
        //$("#wb_tot_water_avail_add_ground_water").val(agwavalability);

        let transportedwater =
            parseFloat(
                $("#wb_water_avai_transported_water_transported_water").val()
            ) || 0;
        $("#wb_tot_water_avail_transported_water").val(transportedwater);

        let nonpotable =
            parseFloat($("#wb_water_avai_non_potable_water_non_potable_use").val()) ||
            0;
        $("#wb_tot_water_avail_water_non_potable_use").val(nonpotable);

        let totalwateravalability = parseFloat(
            gwavalability +
            swavalability +
            agwavalability +
            transportedwater +
            nonpotable
        ).toFixed(4);

        $("#wb_tot_water_avail_total_water_availability").val(
            totalwateravalability
        );
    }
    function calculateQuantityofAnnuallyRecharged() {
        var tr = $(this);
        console.log(tr);
        $("#Artificial_Recharge tbody tr").each(function (index, item) {
            console.log(this);
            //
            let total_storage_capacity =
                parseFloat(
                    $(this).find('input[name*="total_storage_capacity"]').val()
                ) || 0;
            let annual_fillings =
                parseFloat($(this).find('input[name*="annual_fillings"]').val()) || 0;
            let capacity = total_storage_capacity * annual_fillings * 0.4;
            // Set the calculated value to the total_storage_capacity field
            $(this)
                .find('input[name*="qt_annual_rech_water"]')
                .val(capacity.toFixed(4));
        });
    }
    function calculateTotalStorageCapacity() {
        $("#Artificial_Recharge tbody tr").each(function (index, item) {
            console.log(this);
            //
            let numberOfStructures =
                parseFloat($(this).find('input[name*="number_of_structures"]').val()) ||
                0;
            let areaOfStructures =
                parseFloat($(this).find('input[name*="area_of_structures"]').val()) ||
                0;
            let avgDepthStructures =
                parseFloat($(this).find('input[name*="avg_depth_structures"]').val()) ||
                0;

            // Calculate total storage capacity for the current row
            let format = parseFloat(0.5 * 0.0001);
            let capacity =
                numberOfStructures * areaOfStructures * avgDepthStructures * format;
            // Set the calculated value to the total_storage_capacity field
            $(this)
                .find('input[name*="total_storage_capacity"]')
                .val(capacity.toFixed(4));
        });
    }
    // Function to serialize current step data and append to formData object
    var stepDescriptions1 = [
        { code: "C00", value: "Gram Panchayat Basic Information" },
        { code: "C01", value: "Estimated Ground Water Availability" },
        {
            code: "C02",
            value:
                "Estimated Availability from Rainfall for planning of supply side interventions",
        },
        { code: "C03", value: "Availability of Surface Water Storage" },
        {
            code: "C04",
            value: "Detail of Artificial Recharge & Water Conservation Structures",
        },
        {
            code: "C05",
            value:
                "Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)",
        },
        {
            code: "C06",
            value:
                "Water Available for non-potable use through Grey Water Management",
        },
        { code: "C07", value: "Total Water Availability" },
        {
            code: "C08",
            value:
                "Water Requirement for drinking/domestic, Industries and other commercial uses",
        },
        {
            code: "C09",
            value: "Area under Major Crops and Irrigation Water Requirement",
        },
        { code: "C10", value: "Total Water Requirement" },
        { code: "C11", value: "Water Balance (Ha. m)" },
    ];
    function scrollStepsHorizontally(newIndex) {
        var stepsWrapper = $(".steps-wrapper");
        var stepsList = $(".steps ul");
        var stepWidth = $(".steps ul li").outerWidth(true);
        var wrapperWidth = stepsWrapper.width();
        var totalSteps = $(".steps ul li").length;

        var newScrollPosition = newIndex * stepWidth;

        var currentScroll = stepsList.scrollLeft();
        var maxScroll = totalSteps * stepWidth - wrapperWidth;

        if (newScrollPosition + stepWidth > currentScroll + wrapperWidth) {
            stepsList.animate(
                {
                    scrollLeft: Math.min(
                        newScrollPosition - (wrapperWidth - stepWidth),
                        maxScroll
                    ),
                },
                500
            );
        } else if (newScrollPosition < currentScroll) {
            stepsList.animate(
                {
                    scrollLeft: newScrollPosition,
                },
                500
            );
        }
    }
    var stepDescriptions = [
        "Gram Panchayat Basic Information",
        "Estimated Ground Water Availability",
        "Estimated Availability from Rainfall for planning of supply side interventions",
        "Availability of Surface Water Storage",
        "Detail of Artificial Recharge & Water Conservation Structures",
        "Water Availability from Transported Water (Canal/Rivulet/Nala/Spring/Natural Sources)",
        "Water Available for non-potable use through Grey Water Management",
        "Total Water Availability",
        "Water Requirement for drinking/domestic, Industries and other commercial uses",
        "Area under Major Crops and Irrigation Water Requirement",
        "Total Water Requirement",
        "Water Balance (Ha. m)",
    ];
    $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: false,
        titleTemplate: '<span class="number">#index#</span>',
        labels: {
            current: "",
            finish: "Submit",
            next: "Next",
            previous: "Previous",
        },
        onInit: function (event, currentIndex) { },
        onStepChanging: function (event, currentIndex, newIndex) {
            if (isManuallyAdvancing) {
                isManuallyAdvancing = false;
                return true;
            }

            if (newIndex <= lastValidStep) {
                validateStep(currentIndex, newIndex).then(function (isValid) {
                    console.log(`currentIndex: ${currentIndex}, ${newIndex}`);
                    if (isValid) {
                        console.log(`currentIndex: ${currentIndex}, newIndex: ${newIndex}`);
                        scrollStepsHorizontally(newIndex);
                        return true;
                    }
                });
            }
            if (newIndex > currentIndex) {
                event.preventDefault();
                var stepSection = $("#wizard").children("section").eq(currentIndex);
                stepSection.find("img").each(function () {
                    var imageTitle = $(this).data("title");
                    if (imageTitle) {
                        var titleElement = $("<h3 class='image-title'>").text(imageTitle);
                        $(this).parent().append(titleElement);
                    }
                });

                var stepsWrapper = $(".steps-wrapper");
                var stepsList = $(".steps ul");
                var stepWidth = stepsWrapper.width();
                var newScrollPosition = newIndex * stepWidth;

                stepsList.animate(
                    {
                        scrollLeft: newScrollPosition,
                    },
                    500
                );

                validateStep(currentIndex, newIndex).then(function (isValid) {
                    console.log(`currentIndex: ${currentIndex}, ${newIndex}`);
                    if (isValid) {
                        lastValidStep = newIndex;
                        isManuallyAdvancing = true;
                        $("#wizard").steps("next");
                        stepSection = $("#wizard").children("section").eq(currentIndex);
                        scrollStepsHorizontally(newIndex);
                    }
                });
                return false;
            }
            return true;
        },

        onFinishing: function (event, currentIndex, newIndex) {
            console.log(`currentIndex${currentIndex} newIndex ${newIndex}`);

            validateStepFinal(currentIndex, newIndex).then(function (isValid) {
                if (isValid) {
                    let isapprove = confirm("Do you want submit ?");
                    if (isapprove) {
                        var model = {
                            state_id: $("#wb_grampanchayat_basic_info_state_id").val(),
                            district_id: $("#wb_grampanchayat_basic_info_district_id").val(),
                            block_id: $("#wb_grampanchayat_basic_info_block_id").val(),
                            gp_id: $("#wb_grampanchayat_basic_info_gp_id").val(),
                            //stepIndex: parseInt(newIndex),
                            //stepTitle: stepDescriptions1[newIndex]?.code || '',
                            Year: $("#wb_grampanchayat_basic_info_year").val(),
                        };

                        $.ajax({
                            url: "/WaterBudget_2526/Submit",
                            type: "POST",
                            data: JSON.stringify(model),
                            contentType: "application/json; charset=utf-8",
                            success: function (result) {
                                if (result.success) {
                                    alert("Submit sucessfully");
                                    $(".btnshow_hide").show();
                                    $(".savebtn").hide();
                                    let submitBtnLi = document.querySelector(
                                        "#wizard ul[role='menu'] li:last-of-type"
                                    );
                                    submitBtnLi.style.display = "none";
                                } else {
                                    alert(result.msg);
                                    $(".btnshow_hide").hide();
                                    $(".savebtn").show();
                                    let submitBtnLi = document.querySelector(
                                        "#wizard ul[role='menu'] li:last-of-type"
                                    );
                                    submitBtnLi.style.display = "block  ";
                                }
                            },
                            error: function () {
                                alert("An error occurred while validating the step.");
                                resolve(false); // Resolve with false on AJAX error
                            },
                        });
                        //return validateStep(currentIndex);
                    }
                } else {
                    return false;
                }
            });
        },
    });

    $(document).on(
        "change",
        ".rainfall, .population, .livestock_population, .gp_area",
        function () {
            getCalculateSecondSetp();
        }
    );
    function getCalculateSecondSetp() {
        debugger;
        let annual_rainfall =
            parseFloat($("#wb_grampanchayat_basic_info_annual_rainfall").val()) || 0;
        let cal = parseFloat(annual_rainfall / 1000).toFixed(4);
        $("#wb_est_ground_water_avail_annual_rainfall").val(cal);
        let gpara =
            parseFloat($("#wb_grampanchayat_basic_info_gp_area").val()) || 0;
        let estrainfall = parseFloat(gpara * cal).toFixed(4) || 0;
        $("#wb_est_ground_water_avail_est_vol_rainfall").val(estrainfall);
        //forloss
        let loss = parseFloat(estrainfall * (30 / 100)).toFixed(4);
        $("#wb_est_ground_water_avail_evapo_loss").val(loss);

        let wateravail = parseFloat(estrainfall - loss).toFixed(4);
        $("#wb_est_ground_water_avail_est_water_avai_rainfall").val(wateravail);

        let estvolrechargegw = parseFloat(estrainfall * (12 / 100)).toFixed(4);
        $("#wb_est_ground_water_avail_est_vol_rech_gw").val(estvolrechargegw);

        let rainfallrunoff = parseFloat(wateravail * 0.4).toFixed(4);
        $("#wb_est_avai_rainfall_supply_intervention_uti_rainfall_runoff").val(
            rainfallrunoff
        );
    }
    $("#wb_water_avai_non_potable_water_non_potable_use").change(function () {
        let gwavalability =
            parseFloat($("#wb_est_ground_water_avail_est_vol_rech_gw").val()) || 0;
        $("#wb_tot_water_avail_groundwater_avail").val(gwavalability);

        //let swavalability = parseFloat($("#wb_avai_surface_water_stor_total_surface_water_uti").val()) || 0;
        let swavalability =
            parseFloat($("#wb_tot_water_avail_surface_water_avail").val()) || 0;
        //$("#wb_tot_water_avail_surface_water_avail").val(swavalability);

        //let agwavalability = parseFloat($("#totalqt_annual_rech_waterhdn").val()) || 0;
        let agwavalability =
            parseFloat($("#wb_tot_water_avail_add_ground_water").val()) || 0;
        //$("#wb_tot_water_avail_add_ground_water").val(agwavalability);

        let transportedwater =
            parseFloat(
                $("#wb_water_avai_transported_water_transported_water").val()
            ) || 0;
        $("#wb_tot_water_avail_transported_water").val(transportedwater);

        let nonpotable =
            parseFloat($("#wb_water_avai_non_potable_water_non_potable_use").val()) ||
            0;
        $("#wb_tot_water_avail_water_non_potable_use").val(nonpotable);

        let totalwateravalability = parseFloat(
            gwavalability +
            swavalability +
            agwavalability +
            transportedwater +
            nonpotable
        ).toFixed(4);

        $("#wb_tot_water_avail_total_water_availability").val(
            totalwateravalability
        );
    });

    $("#wb_water_drink_ind_req_water_req_indust").change(function () {
        let humanvalue =
            parseFloat($("#wb_water_drink_ind_req_drink_dom_water_req").val()) || 0;
        let livestockvalue =
            parseFloat($("#wb_water_drink_ind_req_water_req_livestock_pop").val()) ||
            0;
        let waterrequirement =
            parseFloat($("#wb_water_drink_ind_req_water_req_indust").val()) || 0;

        let totalwaterrequirement = parseFloat(
            humanvalue + livestockvalue + waterrequirement
        ).toFixed(4);
        $("#wb_water_drink_ind_req_total_water_requirement").val(
            totalwaterrequirement
        );

        $("#wb_total_water_req_water_req_indust").val(waterrequirement);

        let drinking_domestic =
            parseFloat($("#wb_total_water_req_drink_dom_water_req").val()) || 0;
        let livestockpopval =
            parseFloat($("#wb_total_water_req_water_req_livestock_pop").val()) || 0;
        let irrigationwr =
            parseFloat($("#wb_total_water_req_irri_water_req").val()) || 0;
        let industries =
            parseFloat($("#wb_total_water_req_water_req_indust").val()) || 0;

        let totalwater = parseFloat(
            drinking_domestic + livestockpopval + irrigationwr + industries
        ).toFixed(4);
        $("#wb_total_water_req_total_water_requirement").val(totalwater);

        let totwateravailable =
            parseFloat($("#wb_tot_water_avail_total_water_availability").val()) || 0;
        let totwaterrequire =
            parseFloat($("#wb_total_water_req_total_water_requirement").val()) || 0;

        $("#wb_water_balance_total_water_availability").val(totwateravailable);
        $("#wb_water_balance_total_water_requirement").val(totwaterrequire);

        let waterbalence = parseFloat(totwateravailable - totwaterrequire).toFixed(4);
        if (waterbalence > 0) {
            $("#wb_water_balance_water_balance").addClass('positiveValue');
        } else {
            $("#wb_water_balance_water_balance").addClass('negativeValue');
        }
        $("#wb_water_balance_water_balance").val(waterbalence);

        //let humanpopval = parseFloat($("#wb_grampanchayat_basic_info_human_population").val()) || 0;
        //let humanpopcal = parseFloat(humanpopval * 0.0020075).toFixed(4);
        $("#wb_total_water_req_drink_dom_water_req").val(humanvalue);
        $("#wb_total_water_req_water_req_livestock_pop").val(livestockvalue);
    });

    $("#wb_grampanchayat_basic_info_human_population").change(function () {
        let humanpopval =
            parseFloat($("#wb_grampanchayat_basic_info_human_population").val()) || 0;
        let humanpopcal = parseFloat(humanpopval * 0.0020075).toFixed(4);
        $("#wb_water_drink_ind_req_drink_dom_water_req").val(humanpopcal);
        $("#wb_total_water_req_drink_dom_water_req").val(humanpopcal);
    });

    $("#wb_grampanchayat_basic_info_livestock_population").change(function () {
        let livestockval =
            parseFloat(
                $("#wb_grampanchayat_basic_info_livestock_population").val()
            ) || 0;
        let livestockcal = parseFloat(livestockval * 0.00073).toFixed(4);
        $("#wb_water_drink_ind_req_water_req_livestock_pop").val(livestockcal);
        $("#wb_total_water_req_water_req_livestock_pop").val(livestockcal);
    });
    let rowCount = $("#Artificial_Recharge tbody tr").length;
    let rowCount_major_Crops = $("#major_Crops tbody tr").length;
    $(".add-row-btn").click(function () {
        rowCount++;
        var newRow = `
          <tr>
              <td>${rowCount}</td>
              <td>
                  <select class="Structure_Dropdown" name="items[${rowCount}].type_of_structure" required>
                      <option value="" disabled selected>Select Any</option>
                      <option value="Percolation tank">Percolation tank</option>
                      <option value="Check dam">Check dam</option>
                      <option value="Farm pond">Farm pond</option>
                      <option value="Other">Other</option>
                  </select>
              </td>
              <td><input type="text" autocomplete = "off"  name="items[${rowCount}].number_of_structures" class="form-control input numeric numberofstructures" placeholder="Number of Structures (Nos.)" required maxlength = "8">  <span class="text-danger field-validation-valid"></span></td>
              <td><input type="text" autocomplete = "off" name="items[${rowCount}].area_of_structures" class="form-control input areastructures" placeholder="Area of the Structures (Sq.m)" required maxlength = "8"></td>
              <td><input type="text"  autocomplete = "off" name="items[${rowCount}].avg_depth_structures" class="form-control input depthstructures" placeholder="Average Depth of Structures (m)" required maxlength = "8"></td>
              <td class="text-secondary"><input autocomplete = "off" type="text" name="items[${rowCount}].total_storage_capacity" class="form-control input total_storage_capacity" value="0" disabled/></td>
              <td><input type="text"  autocomplete="off" name="items[${rowCount}].annual_fillings" class="form-control input numeric annualfillings" placeholder="Annual No. of Fillings (Nos.)" required maxlength = "8"></td>
              <td class="text-secondary" ><input  autocomplete = "off" type="text" name="items[${rowCount}].qt_annual_rech_water" class="form-control qt_annual_rech_water" value="0" disabled/></td>
              <td><button type="button" class="btn btn-lg btn-danger text-white remove-row" attr="0">Remove</button></td>
          </tr>`;

        $("#Artificial_Recharge tbody").append(newRow);
        //$('#Artificial_Recharge tbody').append(totalrow);

        $.validator.unobtrusive.parse("#Artificial_Recharge");
    });
    // For the second table
    $(".add-row-btn2").click(function () {
        rowCount_major_Crops++;
        var cropOptions = Jsondata.map(
            (crop) => `<option value="${crop.Value}">${crop.Text}</option>`
        ).join("");
        var newRow1 = `

        <tr>
             <td>${rowCount_major_Crops}</td>
            <td>
            <select class="crop_Dropdown" id="crops" name="itemsList[${rowCount_major_Crops}].crop" required>
            <option value="">Select</option> 
                ${cropOptions}  <!-- Insert the dynamic crop options here -->
            </select>
                
            </td>
            <td><input type="text" autocomplete = "off"  class="form-control input net_irrigation_requirement" name="itemsList[${rowCount_major_Crops}].net_irrigation_requirement" placeholder="Net Irrigation Requirement (NIR) (in m)" required readonly maxlength = "8"></td>
            <td><input autocomplete = "off"  name="itemsList[${rowCount_major_Crops}].area_kharif_season" type="text" class="form-control input area_kharif_season" placeholder="Area in Kharif Season (ha)" required maxlength = "8"></td>
            <td><input autocomplete = "off"  name="itemsList[${rowCount_major_Crops}].area_rabi_season" type="text" class="form-control input area_rabi_season" placeholder="Area in Rabi Season (ha)" required maxlength = "8"></td>
            <td class="text-secondary"><input type="text" autocomplete = "off" class="form-control input area_summer_season" name="itemsList[${rowCount_major_Crops}].area_summer_season" placeholder="Area in Summer Season (ha)" required maxlength = "8"/></td>
            <td><input autocomplete = "off" name="itemsList[${rowCount_major_Crops}].total_gross_cropped_area" type="text" class="form-control input total_gross_cropped_area" disabled></td>
            <td class="text-secondary"><input type="text" name="itemsList[${rowCount_major_Crops}].total_irrigation_requirement" class="form-control input total_irrigation_requirement"  disabled/></td>
            <td><button type="button" class="btn btn-lg btn-danger text-white remove-rowcrop" attr="0">Remove</button></td>
        </tr>`;

        // $('#structureTableBody2').append(newRow1);
        $("#major_Crops tbody").append(newRow1);
        $.validator.unobtrusive.parse("#major_Crops");
    });
    $(document).on('input', '.other-structure-textbox', function () {
        var value = $(this).val();

        // Replace any character that is not an alphabetic character (A-Z or a-z) with an empty string
        var filteredValue = value.replace(/[^a-zA-Z\s]/g, '');

        // Set the filtered value back to the input
        $(this).val(filteredValue);

        validateDuplicateStructures($(this));
    });
    $(document).on("change", ".Structure_Dropdown", function () {
        var $currentRow = $(this).closest("tr");

        // Get selected value
        var selectedValue = $(this).val();

        if (selectedValue === "Other") {
            // Create a new text box
            var $textBox = $("<input/>", {
                type: "text",
                name: $(this).attr("name") + "_other", // Adding '_other' to avoid name conflicts
                class: "form-control input other-structure-textbox", // Class name to differentiate the text box
                placeholder: "Enter New Structure",
                required: true,
            });

            // Check if the text box already exists to avoid adding duplicates
            if (!$currentRow.find(".other-structure-textbox").length) {
                // Append the new text box after the dropdown
                $(this).after($textBox);
            }

            // Trigger validation on textbox change
            $textBox.on("input", function () {
                validateDuplicateStructures($textBox);
            });
        } else {
            // Remove the text box if user changes the selection to something else
            $currentRow.find(".other-structure-textbox").remove();
        }

        // Trigger validation after dropdown change
        validateDuplicateStructures($(this));
    });

    // Function to check for duplicate structure selections
    function validateDuplicateStructures($changedElement) {
        debugger;
        var selectedValues = [];
        var dropdownOptions = [];

        // Collect all dropdown and textbox values from each row
        $(".Structure_Dropdown").each(function () {
            var $row = $(this).closest("tr");
            var selectedValue = $(this).val();

            // If 'Other' is selected, use the value from the textbox
            if (selectedValue === "Other") {
                var otherValue = $row.find(".other-structure-textbox").val();
                if (otherValue) {
                    selectedValue = otherValue.trim(); // Get text value
                }
            }

            // Add selected or text value to the array
            if (selectedValue) {
                selectedValues.push(selectedValue.toLowerCase());
            }
        });

        // Collect all options from the dropdown (to prevent new text matching existing options)
        $(".Structure_Dropdown").first().find("option").each(function () {
            var optionValue = $(this).val();
            if (optionValue) {
                dropdownOptions.push(optionValue.toLowerCase());
            }
        });

        var hasDuplicates = selectedValues.some(function (item, index) {
            return selectedValues.indexOf(item) !== index;
        });

        var isInDropdown = dropdownOptions.includes(
            $changedElement.val().toLowerCase()
        );

        if (hasDuplicates) {
            alert(
                "Duplicate structures are not allowed. Please ensure all structures are unique."
            );
            if ($changedElement.is("input")) {
                $changedElement.val(""); // Clear the textbox value
            }
        } else if (isInDropdown && $changedElement.is("input")) {
            alert(
                "The entered structure already exists in the dropdown. Please enter a unique structure."
            );
            $changedElement.val(""); // Clear the textbox if duplicate with dropdown options
        }
    }

    $(document).on('input', '.other_crop_entry', function () {
        var value = $(this).val();

        // Replace any character that is not an alphabetic character (A-Z or a-z) with an empty string
        var filteredValue = value.replace(/[^a-zA-Z\s]/g, '');

        // Set the filtered value back to the input
        $(this).val(filteredValue);
        validateDuplicateCrop($(this));
    });
    $(document).on("change", ".crop_Dropdown", function () {
        var $currentRow = $(this).closest("tr");
        debugger;
        // Get selected value
        var selectedValue = $(this).find("option:selected").text(); //$(this).val();
        //other_crop_entry
        if (selectedValue === "Other") {
            // Create a new text box
            var $textBox = $("<input/>", {
                type: "text",
                name: $(this).attr("name") + "_other", // Adding '_other' to avoid name conflicts
                class: "form-control input other_crop_entry", // Class name to differentiate the text box
                placeholder: "Enter New Crop",
                required: true,
            });


            // Check if the text box already exists to avoid adding duplicates
            if (!$currentRow.find(".other_crop_entry").length) {
                //console.log($currentRow.find('.net_irrigation_requirement'))
                $currentRow.find('.net_irrigation_requirement').removeAttr('readonly');
                $(this).after($textBox);
            }
            $textBox.on("input", function () {
                validateDuplicateCrop($textBox);
            });
        } else {
            // Remove the text box if user changes the selection to something else
            $currentRow.find(".other_crop_entry").remove();
        }
        // Trigger validation after dropdown change
        validateDuplicateCrop($(this));
    });

    function validateDuplicateCrop($changedElement) {
        var selectedValues = [];
        var dropdownOptions = [];

        // Collect all dropdown and textbox values from each row
        $(".crop_Dropdown").each(function () {
            var $row = $(this).closest("tr");
            var selectedValue = $(this).find("option:selected").text(); //$(this).val();

            // If 'Other' is selected, use the value from the textbox
            if (selectedValue === "Other") {
                var otherValue = $row.find(".other_crop_entry").val();
                if (otherValue) {
                    selectedValue = otherValue.trim(); // Get text value
                }
            }

            // Add selected or text value to the array
            if (selectedValue) {
                selectedValues.push(selectedValue.toLowerCase());
            }
        });

        // Collect all options from the dropdown (to prevent new text matching existing options)
        //= $(this).find('option:selected').text();//
        $(".crop_Dropdown")
            .first()
            .find("option")
            .each(function () {
                var optionValue = $(this).text(); //$(this).val();
                if (optionValue) {
                    dropdownOptions.push(optionValue.toLowerCase());
                }
            });

        var hasDuplicates = selectedValues.some(function (item, index) {
            return selectedValues.indexOf(item) !== index;
        });

        var isInDropdown = dropdownOptions.includes(
            $changedElement.val().toLowerCase()
        );

        if (hasDuplicates) {
            alert(
                "Duplicate crop are not allowed. Please ensure all crops are unique."
            );
            if ($changedElement.is("input")) {
                $changedElement.val(""); // Clear the textbox value
            }
        } else if (isInDropdown && $changedElement.is("input")) {
            alert(
                "The entered crop already exists in the dropdown. Please enter a unique crop."
            );
            $changedElement.val(""); // Clear the textbox if duplicate with dropdown options
        }
    }

    $(document).on('click', '.btnedit', function () {
        debugger;
        const $currentRow = $(this).closest('tr');
        console.log($currentRow);
        $currentRow.find('td').each(function () {
            $(this).find('.Structure_Dropdown, .other-structure-textbox, .numberofstructures, .areastructures, .depthstructures, .annualfillings').each(function () {

                // Check if the element is an input, set it to readonly
                if ($(this).is('input')) {
                    $(this).prop('readonly', false);  // Set read-only for inputs
                }

                // Check if the element is a select, disable it
                if ($(this).is('select')) {
                    $(this).prop('disabled', false);  // Disable selects
                }
            });
        });

    });


    $(document).on('click', '.btneditcrop', function () {
        debugger;
        const $currentRow = $(this).closest('tr');
        console.log($currentRow);
        $currentRow.find('td').each(function () {
            $(this).find('.crop_Dropdown, .other_crop_entry, .area_kharif_season, .area_rabi_season , .area_summer_season').each(function () {

                // Check if the element is an input, set it to readonly
                if ($(this).is('input')) {

                    $(this).prop('readonly', false);  // Set read-only for inputs
                }

                // Check if the element is a select, disable it
                if ($(this).is('select')) {
                    if ($(this).val() == "12") {
                        $('.net_irrigation_requirement').prop('readonly', false);
                    }
                    $(this).prop('disabled', false);  // Disable selects
                }
            });
        });

    });

    $(document).on('click', '.remove-row', function () {

        var rowId = $(this).attr('attr') || 0; // Get the value of the 'attr' attribute
        //alert(rowId);
        let currentrow = $(this);
        console.log(currentrow);
        if (rowId > 0) {
            if (confirm("Are you sure you want to delete this record?")) {
                $.ajax({
                    url: "/WaterBudget_2526/Deletestructure",
                    type: "POST",
                    data: { rowId: rowId },
                    success: function (response) {
                        if (response.success) {
                            //alert(response.message);
                            // Optionally remove the row from the table without reloading the page
                            $(currentrow).closest("tr").remove();
                            calculateTotalsQuantityofAnnuallyRecharged();
                            if ($("#Artificial_Recharge tbody tr").length == 0) {
                                rowCount = 0;
                                $("#totalqt_annual_rech_water").text("0");
                                $("#totalqt_annual_rech_waterhdn").val("0");
                            }
                        } else {
                            alert("Error: " + response.message);
                        }
                    },
                    error: function (xhr, status, error) {
                        alert("An error occurred: " + error);
                    },
                });
            }
        } else {
            $(currentrow).closest("tr").remove();
            calculateTotalsQuantityofAnnuallyRecharged();
            rowCount--;
            if ($("#Artificial_Recharge tbody tr").length == 0) {
                rowCount = 0;
                $("#totalqt_annual_rech_water").text("0");
                $("#totalqt_annual_rech_waterhdn").val("0");
            }
        }

        //alert("rows"+ $('#Artificial_Recharge tbody tr').length)
    });
    $(document).on("click", ".remove-rowcrop", function () {
        var rowId = $(this).attr("attr") || 0; // Get the value of the 'attr' attribute
        //alert(rowId);
        let currentrow = $(this);
        console.log(currentrow);
        if (rowId > 0) {
            if (confirm("Are you sure you want to delete this record?")) {
                $.ajax({
                    url: "/WaterBudget_2526/DeleteCrop",
                    type: "POST",
                    data: { rowId: rowId },
                    success: function (response) {
                        if (response.success) {
                            //alert(response.message);
                            // Optionally remove the row from the table without reloading the page
                            $(currentrow).closest("tr").remove();
                            calculateTotalGrossCroppedAreaTable();
                            if ($("#major_Crops tbody tr").length == 0) {
                                rowCount_major_Crops = 0;
                                $("#totalcrop").text("0");
                                $("#totalcrop_hdn").val("0");
                            }
                        } else {
                            alert("Error: " + response.message);
                        }
                    },
                    error: function (xhr, status, error) {
                        alert("An error occurred: " + error);
                    },
                });
            }
        } else {
            $(currentrow).closest("tr").remove();
            calculateTotalGrossCroppedAreaTable();
            rowCount_major_Crops--;
            if ($("#major_Crops tbody tr").length == 0) {
                rowCount_major_Crops = 0;
                $("#totalcrop").text("0");
                $("#totalcrop_hdn").val("0");
            }
        }
    });

    $("#btnApprove").click(function () {
        var model = {
            state_id: $("#wb_grampanchayat_basic_info_state_id").val(),
            district_id: $("#wb_grampanchayat_basic_info_district_id").val(),
            block_id: $("#wb_grampanchayat_basic_info_block_id").val(),
            gp_id: $("#wb_grampanchayat_basic_info_gp_id").val(),
            Year: $("#wb_grampanchayat_basic_info_year").val(),
        };

        $.ajax({
            url: "/WaterBudget_2526/Approved",
            type: "POST",
            data: JSON.stringify(model),
            contentType: "application/json; charset=utf-8",
            success: function (result) {
                if (result.success) {
                    alert("Approved successfully");
                    $("#approveModal").modal("hide");
                    window.location.href = "/WaterBudget_2526/uploadreport";
                } else {
                    alert(result.msg);
                }
            },
            error: function () {
                alert("An error occurred while validating the step.");
                resolve(false); // Resolve with false on AJAX error
            },
        });
        //return validateStep(currentIndex);
    });
    $("#btnReject").click(function () {
        var remark = $("#txtRemark").val();
        if (remark != "") {
            var model = {
                state_id: $("#wb_grampanchayat_basic_info_state_id").val(),
                district_id: $("#wb_grampanchayat_basic_info_district_id").val(),
                block_id: $("#wb_grampanchayat_basic_info_block_id").val(),
                gp_id: $("#wb_grampanchayat_basic_info_gp_id").val(),
                remarks: remark,
                Year: $("#wb_grampanchayat_basic_info_year").val(),
            };

            $.ajax({
                url: "/WaterBudget_2526/Reject",
                type: "POST",
                data: JSON.stringify(model),
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    if (result.success) {
                        alert("Reject successfully");
                        $("#rejectModal").modal("hide");
                        //$('#btnReject').hide();
                        //$('#btnApprove').hide();
                        $(".customButtonWrapper").hide();
                    } else {
                        alert(result.msg);
                    }
                },
                error: function () {
                    alert("An error occurred while validating the step.");
                    resolve(false); // Resolve with false on AJAX error
                },
            });
            //return validateStep(currentIndex);
        } else {
            alert("Enter remark");
            return false;
        }
    });

    $(document).on("click", ".savebtn", function (event) {
        event.preventDefault();
        console.log($("#wizard").steps("getCurrentIndex"));
        let getCurrentIndex = $("#wizard").steps("getCurrentIndex");
        let stepCode = $("#StepCode_" + getCurrentIndex).val();
        var formId = $("#form_" + getCurrentIndex).attr("id"); // $(`$form_${$(`#wizard`).steps(`getCurrentIndex`)}`)
        var formIsValid = $(`#${formId}`).valid();
        //alert($('#wizard').steps('getCurrentIndex'));
        let rowCount = $("#Artificial_Recharge tbody tr").length;
        //alert(formIsValid)
        var url = $("#form_" + getCurrentIndex).attr("action");
        //alert(`getCurrentIndex${getCurrentIndex}`)
        ///alert(`stepCode${stepCode}`)
        console.log(`getCurrentIndex ${getCurrentIndex} stepCode${stepCode}`);
        if (getCurrentIndex == 1 && stepCode == "C02") {
            var model = {
                wb_est_ground_water_avail: {
                    annual_rainfall: $(
                        "#wb_est_ground_water_avail_annual_rainfall"
                    ).val(),
                    est_vol_rainfall: $(
                        "#wb_est_ground_water_avail_est_vol_rainfall"
                    ).val(),
                },
            };
            $.ajax({
                url: url,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(model),
                success: function (result) {
                    if (result.success) {
                        /*$('#wizard').steps('next');*/
                        alert("Data saved successfully");
                    } else {
                        alert("An error occurred: " + result.message);
                    }
                    // Handle the success response here
                },
                error: function (xhr, status, error) {
                    alert("An error occurred while submitting the data: " + error);
                    // Handle the error response here
                },
            });
        } else if (getCurrentIndex == 4 && stepCode == "C04") {
            if (rowCount > 0) {
                if (formIsValid) {
                    var model = {
                        items: [],
                        state_id: $("#wb_grampanchayat_basic_info_state_id").val(),
                        district_id: $("#wb_grampanchayat_basic_info_district_id").val(),
                        block_id: $("#wb_grampanchayat_basic_info_block_id").val(),
                        gp_id: $("#wb_grampanchayat_basic_info_gp_id").val(),
                        year: $("#wb_grampanchayat_basic_info_year").val(), //'2025'
                    };
                    $("#Artificial_Recharge tbody tr").each(function () {
                        var row = {
                            id:
                                $(this).find(':input[name^="items["][name$=".id"]').val() || 0,
                            total: $("#totalqt_annual_rech_waterhdn").val(),
                            state_id: model.state_id,
                            district_id: model.district_id,
                            block_id: model.block_id,
                            gp_id: model.gp_id,
                            year: model.year,
                            type_of_structure_other:
                                $(this)
                                    .find(
                                        ':input[name^="items["][name$=".type_of_structure_other"]'
                                    )
                                    .val() || null,
                            type_of_structure: $(this)
                                .find(':input[name^="items["][name$=".type_of_structure"]')
                                .val(), //$(this).find('select[name^="items["]').val(),
                            number_of_structures: $(this)
                                .find('input[name^="items["][name$=".number_of_structures"]')
                                .val(),
                            area_of_structures: $(this)
                                .find('input[name^="items["][name$=".area_of_structures"]')
                                .val(),
                            avg_depth_structures: $(this)
                                .find('input[name^="items["][name$=".avg_depth_structures"]')
                                .val(),
                            total_storage_capacity: $(this)
                                .find('input[name^="items["][name$=".total_storage_capacity"]')
                                .val(),
                            annual_fillings: $(this)
                                .find('input[name^="items["][name$=".annual_fillings"]')
                                .val(),
                            qt_annual_rech_water: $(this)
                                .find('input[name^="items["][name$=".qt_annual_rech_water"]')
                                .val(),
                        };
                        model.items.push(row);
                    });

                    console.log(model);
                    $.ajax({
                        url: url,
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(model),
                        success: function (result) {
                            console.log(result);
                            if (result.success) {
                                if (result.msg == "1") {
                                    alert("Structure is already added with same name, Please select another structure ");
                                } else {
                                    alert("Data saved successfully");

                                    $("#Artificial_Recharge tbody").replaceWith(
                                        result.partialBody
                                    );
                                    $("#Artificial_Recharge tfoot").replaceWith(
                                        result.partialFooter
                                    );

                                    $(`#${formId}`).find('input,select').each(function () {
                                        if ($(this).is('input')) {
                                            $(this).prop('readonly', true);  // Set read-only for inputs
                                        }
                                        if ($(this).is('select')) {
                                            $(this).prop('disabled', true);  // Disable selects
                                        }
                                    });


                                }
                                /*$('#wizard').steps('next');*/
                            } else {
                                alert("An error occurred: " + result.message);
                            }
                            // Handle the success response here
                        },
                        error: function (xhr, status, error) {
                            alert("An error occurred while submitting the data: " + error);
                            // Handle the error response here
                        },
                    });
                } else {
                    return false;
                }
            } else {
                alert("Please add atleast one structure!");
                return false;
            }
        }
        else if (getCurrentIndex == 9 && stepCode == "C09") {
            if (rowCount_major_Crops > 0) {
                if (formIsValid) {
                    var model = {
                        itemsList: [],
                        state_id: $("#wb_grampanchayat_basic_info_state_id").val(),
                        district_id: $("#wb_grampanchayat_basic_info_district_id").val(),
                        block_id: $("#wb_grampanchayat_basic_info_block_id").val(),
                        gp_id: $("#wb_grampanchayat_basic_info_gp_id").val(),
                        year: $("#wb_grampanchayat_basic_info_year").val(), //'2025'
                    };
                    $("#major_Crops tbody tr").each(function () {
                        var row = {
                            id: $(this).find(':input[name^="itemsList["][name$=".id"]').val() || 0,
                            total_water_req: $("#totalcrop_hdn").val(),
                            state_id: model.state_id,
                            district_id: model.district_id,
                            block_id: model.block_id,
                            gp_id: model.gp_id,
                            year: model.year,
                            crop: $(this).find(':input[name^="itemsList["][name$=".crop"]').val(), //$(this).find('select[name^="items["]').val(),
                            net_irrigation_requirement: $(this)
                                .find(
                                    'input[name^="itemsList["][name$=".net_irrigation_requirement"]'
                                )
                                .val(),
                            crop_other:
                                $(this).find('input[name^="itemsList["][name$=".crop_other"]').val() || null,
                            area_kharif_season: $(this)
                                .find('input[name^="itemsList["][name$=".area_kharif_season"]')
                                .val(),
                            area_rabi_season: $(this)
                                .find('input[name^="itemsList["][name$=".area_rabi_season"]')
                                .val(),
                            area_summer_season: $(this)
                                .find('input[name^="itemsList["][name$=".area_summer_season"]')
                                .val(),
                            total_gross_cropped_area: $(this)
                                .find(
                                    'input[name^="itemsList["][name$=".total_gross_cropped_area"]'
                                )
                                .val(),
                            total_irrigation_requirement: $(this)
                                .find(
                                    'input[name^="itemsList["][name$=".total_irrigation_requirement"]'
                                )
                                .val(),
                        };
                        model.itemsList.push(row);
                    });

                    console.log(model);
                    $.ajax({
                        url: url,
                        type: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(model),
                        success: function (result) {
                            if (result.success) {
                                if (result.msg == "1") {
                                    alert("Crop is already added with same name,Please select another crop");
                                } else {
                                    alert("Data saved successfully");
                                    $("#major_Crops tbody").replaceWith(result.partialBody);
                                    $("#major_Crops tfoot").replaceWith(result.partialFooter);


                                    $(`#${formId}`).find('input,select').each(function () {
                                        if ($(this).is('input')) {
                                            $(this).prop('readonly', true);  // Set read-only for inputs
                                        }
                                        if ($(this).is('select')) {
                                            $(this).prop('disabled', true);  // Disable selects
                                        }
                                    });
                                }
                                /*$('#wizard').steps('next');*/
                            } else {
                                alert("An error occurred: " + result.message);
                            }
                            // Handle the success response here
                        },
                        error: function (xhr, status, error) {
                            alert("An error occurred while submitting the data: " + error);
                            // Handle the error response here
                        },
                    });
                } else {
                    return false;
                }
            } else {
                alert("Please add atleast one crop!");
                return false;
            }
        } else {
            if (formIsValid) {
                $.ajax({
                    url: $("#form_" + getCurrentIndex).attr("action"), // form.attr('action'),
                    type: "POST",
                    data: $("#form_" + getCurrentIndex).serialize(),
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    success: function (result) {
                        if (result.success) {
                            //  alert("ebabling")
                            /*$('#wizard').steps('next');*/
                            alert("Data saved successfully");
                        } else {
                            alert("An error occurred: " + result.message);
                        }
                    },
                    error: function (xhr, status, error) {
                        var response = xhr.responseJSON;
                        if (response && response.message) {
                            console.error("Server Error:", response.message);
                            alert("Error: " + response.message); // Display the error message to the user
                        } else {
                            console.error("AJAX Error:", error);
                            alert("An unexpected error occurred: " + error);
                        }
                    },
                });

                // $('#form1').submit();
            } else {
                // Prevent default action (submitting the form)
                return false;
            }
        }
    });

    //Table 10
    $(document).on('input', '.area_summer_season, .area_kharif_season,.area_rabi_season, .net_irrigation_requirement', function () {
        //$(this).val($(this).val().replace(/[^0-9^.]/g, ''));

        let value = $(this).val().replace(/[^0-9.]/g, '');

        // Ensure only a single decimal point is allowed
        if (value.split('.').length > 2) {
            value = value.replace(/\.+$/, ""); // remove extra decimal points at the end
        }

        $(this).val(value);

        calculateTotalGrossCroppedArea($(this).closest('tr'));
        calculateTotalGrossCroppedArea2($(this).closest('tr'));
        calculateTotalGrossCroppedAreaTable();
    });

    //Table 4.
    $(document).on(
        "input",
        ".BodiesStructure, .AnnualnoFilling,.StoreCapecity",
        function () {
            calculateAvailabilitySurfaceWaterStorage();
        }
    );

    $(document).on("change", ".crop_Dropdown", function () {
        let row = $(this).closest("tr");
        let cropId = $(this).val();
        if (cropId) {
            // Populate state dropdown based on selected country
            $.ajax({
                url: "/WaterBudget_2526/getCropById", // Your API endpoint
                method: "GET",
                data: { cropId: cropId },
                success: function (result) {
                    console.log(result);
                    //let stateDropdown = row.find('.net_irrigation_requirement');
                    row
                        .find(".net_irrigation_requirement")
                        .val(result.net_irrigation_requirement);
                    if (result.net_irrigation_requirement > 0) {
                        row.find(".net_irrigation_requirement").attr('readonly', true);
                    }
                },
            });
        }
    });

    //
    $(document).on("input", ".water_req_industcal", function () {
        var totcal = 0;
        let drink_dom_water_req =
            parseFloat($("#wb_water_drink_ind_req_drink_dom_water_req").val()) || 0;
        let water_req_livestock_pop =
            parseFloat($("#wb_water_drink_ind_req_water_req_livestock_pop").val()) ||
            0;
        let water_req_indust =
            parseFloat($("#wb_water_drink_ind_req_water_req_indust").val()) || 0;
        totcal = drink_dom_water_req + water_req_livestock_pop + water_req_indust;
        $("#wb_water_drink_ind_req_total_water_requirement").val(totcal.toFixed(4));
    });
    $(document).on('input', '.depthstructures, .areastructures,.numberofstructures', function () {
        calculateTotalStorageCapacity();
        calculateQuantityofAnnuallyRecharged();
        calculateTotalsQuantityofAnnuallyRecharged();
    });

    $(document).on('input', '.depthstructures, .areastructures', function () {
        //$(this).val($(this).val().replace(/[^0-9^.]/g, ''));
        //$(this).val($(this).val().replace(/[^0-9^.]/g, ''));
        // Replace everything that is not a digit or a decimal point
        // Allow only one decimal point
        let value = $(this).val().replace(/[^0-9.]/g, '');

        // Ensure only a single decimal point is allowed
        if (value.split('.').length > 2) {
            value = value.replace(/\.+$/, ""); // remove extra decimal points at the end
        }

        $(this).val(value);
    });

    $(document).on("input", ".numeric", function () {
        $(this).val(
            $(this)
                .val()
                .replace(/[^0-9]/g, "")
        );
    });

    $(document).on("input", ".annualfillings", function () {
        calculateQuantityofAnnuallyRecharged();
        calculateTotalsQuantityofAnnuallyRecharged();
    });

    $(".stepForm").on("submit", function (event) {
        event.preventDefault();
        //var url = $(this).attr("action");
        //alert(url)
    });

    console.log(stepDescriptions1);
    for (var i = 0; i < stepDescriptions1.length; i++) {
        var stepNumber = i + 1;
        var imagePath = "../content/waterbudget/images/step-" + stepNumber + ".png";
        $("#wizard .steps ul li:nth-child(" + stepNumber + ")").attr(
            "style",
            "background-image: url(" + imagePath + ") !important;"
        );
        $(".steps ul li:nth-child(" + stepNumber + ") a").append(
            '<p class="text-center">' +
            stepDescriptions[i] +
            '</p><input type="hidden" value="' +
            stepDescriptions1[i].code +
            '" id="StepCode_' +
            i +
            '"> '
        );
        $(".steps ul li:nth-child(" + stepNumber + ") a").append(
            '<span class="tabNumber">' + stepNumber + "</span>"
        );
    }

    for (var i = 0; i < overlayColors.length; i++) {
        var listItem = $(".steps ul li:nth-child(" + (i + 1) + ") a");
        listItem.css("position", "relative");
        listItem.append('<div class="overlaySuchIn"></div>');
        listItem.find(".overlaySuchIn").css({
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            "background-color": overlayColors[i],
            "z-index": "1",
        });
        $("#wizard-p-" + i + " .HeadingText").css(
            "background-color",
            overlayColors2[i]
        );
    }

    async function validateStepFinal(currentIndex, newIndex) {
        try {
            var model = {
                state_id: $("#wb_grampanchayat_basic_info_state_id").val(),
                district_id: $("#wb_grampanchayat_basic_info_district_id").val(),
                block_id: $("#wb_grampanchayat_basic_info_block_id").val(),
                gp_id: $("#wb_grampanchayat_basic_info_gp_id").val(),
                stepIndex: parseInt(currentIndex + 1),
                stepTitle: "C12",
            };

            let result = await $.ajax({
                url: "/WaterBudget_2526/CheckStatus",
                type: "POST",
                data: JSON.stringify(model),
                contentType: "application/json; charset=utf-8",
            });

            if (result.success) {
                // Perform additional UI updates here if needed
                return true; // Return true if the step is valid
            } else {
                alert(result.msg);
                return false; // Return false if the step is invalid
            }
        } catch (error) {
            alert("An error occurred while validating the step.");
            return false; // Return false on AJAX error
        }
    }

    function validateStep(currentIndex, newIndex) {
        return new Promise(function (resolve, reject) {
            var model = {
                state_id: $("#wb_grampanchayat_basic_info_state_id").val(),
                district_id: $("#wb_grampanchayat_basic_info_district_id").val(),
                block_id: $("#wb_grampanchayat_basic_info_block_id").val(),
                gp_id: $("#wb_grampanchayat_basic_info_gp_id").val(),
                stepIndex: parseInt(newIndex),
                stepTitle: stepDescriptions1[newIndex]?.code || "",
            };

            if (currentIndex >= newIndex) {
                resolve(true);
            } else {
                $.ajax({
                    url: "/WaterBudget_2526/CheckStatus",
                    type: "POST",
                    data: JSON.stringify(model),
                    contentType: "application/json; charset=utf-8",
                    success: function (result) {
                        console.log("Validation result:", result);
                        let isValid = true;

                        // Common logic for handling fields across all steps
                        let currentStepFields = $("#wizard section")
                            .eq(currentIndex)
                            .find("input[name], select[name]");
                        if (result.success === false) {
                            alert(result.msg);
                            resolve(false);
                        } else {
                            currentStepFields.each(function () {
                                if ($(this).attr("type") === "hidden") return; // Skip hidden fields

                                let datafield = $(this).attr("name").split(".").pop();
                                let actualValue = $(this).val().trim();
                                let expectedValue = result.data[datafield]
                                    ? result.data[datafield].toString().trim()
                                    : null;

                                if (expectedValue === null || expectedValue === undefined) {
                                    console.log(
                                        `No expected value for field: ${datafield}. Skipping validation.`
                                    );
                                    return;
                                }

                                // Numeric comparison
                                let actualNumber =
                                    actualValue !== "" ? parseFloat(actualValue) : NaN;
                                let expectedNumber =
                                    expectedValue !== "" ? parseFloat(expectedValue) : NaN;

                                if (!isNaN(actualNumber) && !isNaN(expectedNumber)) {
                                    if (actualNumber.toFixed(2) !== expectedNumber.toFixed(2)) {
                                        console.log(
                                            `Mismatch at field: ${datafield}. Expected: ${expectedNumber}, Actual: ${actualNumber}`
                                        );
                                        isValid = false;
                                    }
                                } else if (actualValue !== expectedValue) {
                                    console.log(
                                        `Mismatch at field: ${datafield}. Expected: ${expectedValue}, Actual: ${actualValue}`
                                    );
                                    isValid = false;
                                }
                            });

                            // Step-specific validation for step 5
                            if (newIndex == 5) {
                                let hiddenValue = $("#totalqt_annual_rech_waterhdn")
                                    .val()
                                    .trim();
                                let expectedTotal = result.data[0].total.toString().trim();

                                if (hiddenValue !== expectedTotal) {
                                    console.log(
                                        `Mismatch for totalqt_annual_rech_waterhdn. Expected: ${expectedTotal}, Actual: ${hiddenValue}`
                                    );
                                    isValid = false;
                                }
                                finalizeValidation(isValid, resolve);
                            }
                            // Step-specific validation for step 10
                            else if (newIndex == 10) {
                                let hiddenValue = $("#totalcrop_hdn").val().trim();
                                let expectedWaterReq = result.data[0].total_water_req
                                    .toString()
                                    .trim();

                                if (hiddenValue !== expectedWaterReq) {
                                    console.log(
                                        `Mismatch for totalcrop_hdn. Expected: ${expectedWaterReq}, Actual: ${hiddenValue}`
                                    );
                                    isValid = false;
                                }
                                finalizeValidation(isValid, resolve);
                            } else {
                                finalizeValidation(isValid, resolve);
                            }
                        }
                    },
                    error: function () {
                        alert("An error occurred while validating the step.");
                        resolve(false);
                    },
                });
            }
        });
    }

    function finalizeValidation(isValid, resolve) {
        if (isValid) {
            resolve(true);
        } else {
            alert("Some fields are changed. Please save before proceeding.");
            resolve(false);
        }
    }

    $(".steps-nav.left").on("click", function () {
        $("#wizard").steps("previous");
    });

    $(".steps-nav.right").on("click", function () {
        $("#wizard").steps("next");
    });
});
