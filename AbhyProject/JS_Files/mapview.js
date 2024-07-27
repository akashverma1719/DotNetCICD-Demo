


require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GroupLayer",
    "esri/layers/FeatureLayer",
    "esri/widgets/LayerList",
    "esri/widgets/Legend",
    "esri/request",
    "esri/rest/support/Query",
    "esri/rest/query",
    "esri/widgets/FeatureTable",
    "esri/core/reactiveUtils",
    "esri/Graphic",
    "esri/widgets/Home",
    "esri/widgets/ScaleBar",
    "esri/widgets/Expand",
    "esri/widgets/Compass",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Print",
    "esri/layers/GraphicsLayer",
    "esri/widgets/CoordinateConversion",
    "esri/widgets/Locate",
    "esri/widgets/DistanceMeasurement2D",
    "esri/widgets/AreaMeasurement2D",
    "esri/widgets/Track",
    "esri/widgets/Search",
   "esri/popup/content/AttachmentsContent",
    "esri/renderers/Renderer",
    "esri/layers/support/FeatureEffect",
   "esri/layers/support/FeatureFilter",
   "esri/PopupTemplate",
   "esri/symbols/SimpleMarkerSymbol",
    "esri/geometry/Point",
    "esri/renderers/UniqueValueRenderer",
    "esri/symbols/SimpleFillSymbol",
    "esri/renderers/support/UniqueValueInfo",
    "esri/renderers/SimpleRenderer",
    "esri/renderers/ClassBreaksRenderer"
    

], (Map, MapView, GroupLayer,FeatureLayer,LayerList,
    Legend,esriRequest, Query, query, FeatureTable, reactiveUtils,
    Graphic,Home,ScaleBar,Expand,Compass,BasemapGallery,Print,GraphicsLayer,
    CoordinateConversion,Locate,DistanceMeasurement2D,AreaMeasurement2D,Track,
    Search,AttachmentsContent,Renderer,FeatureEffect,FeatureFilter,PopupTemplate,
    SimpleMarkerSymbol,Point,UniqueValueRenderer,SimpleFillSymbol,UniqueValueInfo,SimpleRenderer,ClassBreaksRenderer) => {

   
    let layerView;
  

    let attachmentsElement = new AttachmentsContent({
        displayType: "list" // this will show all attachments as a list of linked files
    });
    let attachmentsElementwl = new AttachmentsContent({
        displayType: "list" // this will show all attachments as a list of linked files
    });
    let attachmentsElementge = new AttachmentsContent({
        displayType: "list" // this will show all attachments as a list of linked files
    });
    let attachmentsElementrg = new AttachmentsContent({
        displayType: "list" // this will show all attachments as a list of linked files
    });

    const labellingID = document.getElementById("labeid").text;
    const labellingIDb = document.getElementById("labeidb").text;
    const labellingIDd = document.getElementById("labeidd").text;
    const labellingIDs = document.getElementById("labeids").text;




 

    const labelClass = {  // autocasts as new LabelClass()
        symbol: {
            type: "text",  // autocasts as new TextSymbol()
            color: "blue",
            //   haloColor: "black",
            //   haloSize: 1,
            font: {  // autocast as new Font()
                "family": "Avenir Next LT Pro Medium",
                "style": "normal",
                "weight": "bold",
                size: 12,
            }
        },
        labelPlacement: "always-horizontal",
        labelExpressionInfo: {
            expression: labellingID
        },
        maxScale: 0,
        minScale: 90000,
        // where: "Conference = 'AFC'"
    };

    const labelClassB = {  // autocasts as new LabelClass()
        symbol: {
            type: "text",  // autocasts as new TextSymbol()
            color: "black",
            //   haloColor: "blue",
            //   haloSize: 1,
            font: {  // autocast as new Font()
                family: "Ubuntu Mono",
                size: 14,
                weight: "bold"
            }
        },
        labelPlacement: "always-horizontal",
        labelExpressionInfo: {
            expression: labellingIDb
        },
        maxScale: 0,
        minScale: 9060000
        ,

    };
    // + TextFormatting.NewLine + $feature.Block_Name  9100000
    const labelClassD = {  // autocasts as new LabelClass()
        symbol: {
            type: "text",  // autocasts as new TextSymbol()
            color: "green",
            //   haloColor: "green",
            //   haloSize: 1,
            font: {  // autocast as new Font()
                family: "Ubuntu Mono",
                size: 14,
                weight: "bold"
            }
        },
        labelPlacement: "always-horizontal",
        labelExpressionInfo: {
            expression: labellingIDd
        },
        maxScale: 0,
        minScale: 9080000
        ,

    };

    const labelClassS = {  
        symbol: {
            type: "text",  
            color: "black",
            haloColor: "white",
            haloSize: 1,
            font: { 
                family: "arial",
                size: 10,
                style: "normal",
                weight: "bold"
            }
        },
        labelPlacement: "always-horizontal",
        labelExpressionInfo: {
            expression: labellingIDs
        },
        maxScale: 9100000,
        minScale: 0,

    };
    const geot = {
        type: "simple", 
        symbol: {
            type: "simple-marker", 
            size: 7,
            color: "gray",
            outline: null
        }
    };
    const wellp = {
        type: "simple",
        symbol: {
            type: "simple-marker", 
            size: 7,
            color: "blue",
            outline: null
        }
    };
    const raga = {
        type: "simple", 
        symbol: {
            type: "simple-marker", 
            size: 7,
            color: "green",
            outline: null
        }
    };

    const wf = {
        type: "simple", 
        symbol: {
            type: "simple-marker", 
            size: 7,
            color: "red",
            outline: null
        }
    };



    const India = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/India/MapServer/0",
        maxScale: 9100000,

        title: "India",
        visible: true,
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 0.5,
                    color: "rgba(0,0,0,0.9)"
                }
            }
        },

    });


//it is geotagging new comimg from Mobile data
    const ArtificialResourceLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/StaticPointGeo/MapServer/0",
        definitionExpression: "statename <> 'Delhi_7'",
        title: "ARS & WCS",
        visible: false,
        renderer: geot,


     
       
        outFields: ["*"],
        content: [attachmentsElementge],
        renderer: {
            type: "simple",
            field: "id",
            symbol: {
                type: "simple-marker",
                size: 4,
                color: "#69dcff",
                outline: {
                    color: "rgba(0, 139, 174, 0.5)",
                    width: 5
                }
            }
        }
    });


 const WaterLevel = new FeatureLayer({
     url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticwaterlevel/MapServer/0",

        definitionExpression: "state <> 'Delhi_7'",
        title: "Water Level",
        visible: true,
        
        outFields: ["*"],
        content: [attachmentsElementwl]
    });

  
   




 


    const WaterQuality = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticwq/MapServer/0",

        definitionExpression: "state <> 'Delhi_7'",
        title: "Water Quality",
        visible: true,


       
        outFields: ["*"]

    });


    const Well = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MapWellInventory/MapServer/0",
        definitionExpression: "state <> 'Delhi_7'",
        title: "Well Inventory",

        visible: false,
        renderer: wellp,
       
        outFields: ["*"],
        content: [attachmentsElement]
    });


    const GWRA = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/AtalJalBaseLayer/MapServer/2",
        title: "GWRA:- (CGWB 2022 (Block Level))",
        visible: false,

        popupTemplate: {

            title: "Ground Water Resource Assessment",


            content: [
                {

                    type: "fields",
                    fieldInfos: [
                       
                        {
                            fieldName: "Block_Talu",
                            visible: true,
                            label: "Block Name"
                        },
                        {
                            fieldName: "District_1",
                            visible: true,
                            label: "District Name"
                        },
                        {
                            fieldName: "State",
                            visible: true,
                            label: "State Name"
                        },
                        {
                            fieldName: "Villages_C",
                            visible: true,
                            label: "Village Count",
                            format: {
                                places: 0,
                                digitSeparator: true
                            }
                        },
                        {
                            fieldName: "GPs",
                            visible: true,
                            label: "Total GPs"
                        },
                        {
                            fieldName: "Year",
                            visible: true,
                            label: "Year"
                        },

                        {
                            fieldName: "Recharge_f",
                            visible: true,
                            label: "Recharge_F"
                        },
                        {
                            fieldName: "Recharge_1",
                            visible: true,
                            label: "Recharge_1"
                        },
                        {
                            fieldName: "Recharge_2",
                            visible: true,
                            label: "Recharge_2"
                        },
                        {
                            fieldName: "Recharge_3",
                            visible: true,
                            label: "Recharge_3"
                        },
                        {
                            fieldName: "Total_Annu",
                            visible: true,
                            label: "Total Annual"
                        },
                        {
                            fieldName: "Total_Natu",
                            visible: true,
                            label: "Total Natural"
                        },
                        {
                            fieldName: "Annual_Ext",
                            visible: true,
                            label: "Annual Extension"
                        },
                        {
                            fieldName: "Irrigation",
                            visible: true,
                            label: "Irrigation"
                        },
                        {
                            fieldName: "Industrial",
                            visible: true,
                            label: "Industrial"
                        },
                        {
                            fieldName: "Domestic_U",
                            visible: true,
                            label: "Domestic_U"
                        },
                        {
                            fieldName: "Total_Extr",
                            visible: true,
                            label: "Total_Extr"
                        },
                        {
                            fieldName: "Annual_GW_",
                            visible: true,
                            label: "Annual_GW"
                        },
                        {
                            fieldName: "Net_Ground ",
                            visible: true,
                            label: "Net Ground"
                        },
                        {
                            fieldName: "Stage_of_G",
                            visible: true,
                            label: "Stage_of_G"
                        },
                        {
                            fieldName: "Categoriza",
                            visible: true,
                            label: "Catogorization"
                        },


                    ],
                },



            ],


        },
        outFields: ["*"],
        content: [attachmentsElement]




    });

  //
    //
    const renderergw = new UniqueValueRenderer({
        field: "Categoriza", // Replace with your attribute field
        defaultSymbol: new SimpleFillSymbol({
            style: "solid",
            color: [128, 128, 128, 0.8], // Default symbol color
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        defaultLabel: "Not Assessed (Hilly Forest Area)"
    });

    // Define symbols and labels for each unique value
    renderergw.addUniqueValueInfo(new UniqueValueInfo({
        value: "Safe", // Replace with the attribute value you want to symbolize
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "white", // Red symbol color for Value1
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        label: "Safe"
    }));

    renderergw.addUniqueValueInfo(new UniqueValueInfo({
        value: "Semi-critical", // Replace with the attribute value you want to symbolize
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "blue", // Green symbol color for Value2
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        label: "Semi Critical"
    }));

    renderergw.addUniqueValueInfo(new UniqueValueInfo({
        value: "Critical", // Replace with the attribute value you want to symbolize
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "yellow", // Green symbol color for Value2
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        label: "Critical"
    }));


    renderergw.addUniqueValueInfo(new UniqueValueInfo({
        value: "Over-exploited", // Replace with the attribute value you want to symbolize
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "red", // Green symbol color for Value2
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        label: "Over Expolited"
    }));

    renderergw.addUniqueValueInfo(new UniqueValueInfo({
        value: "Saline", // Replace with the attribute value you want to symbolize
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "green", // Green symbol color for Value2
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        label: "Saline"
    }));


    // Add the renderer to the feature layer
    GWRA.renderer = renderergw;
    //

    //

    const Rainfall = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/AtalJalBaseLayer/MapServer/3",

        title: "Annual Rainfall (IMD Dist. Level(2022)) (in mm)",
        visible: false,

        popupTemplate: {

            title: "Annual Rainfall (in mm)",


            content: [
                {

                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "OBJECTID",
                            visible: true,
                            label: "ID",
                            format: {
                                places: 0,
                                digitSeparator: true
                            }
                        },
                        {
                            fieldName: "District_N",
                            visible: true,
                            label: "District Name"
                        },
                        {
                            fieldName: "Blocks_Cou",
                            visible: true,
                            label: "Blocks Count"
                        },
                        {
                            fieldName: "GPs_Count_",
                            visible: true,
                            label: "GPs Count"
                        },
                        {
                            fieldName: "Rainfall",
                            visible: true,
                            label: "Rainfall"
                        },

                        {
                            fieldName: "Area",
                            visible: true,
                            label: "Area"
                        },

                        {
                            fieldName: "Population",
                            visible: true,
                            label: "Population"
                        },




                    ],
                },



            ],


        },
        outFields: ["*"],
        content: [attachmentsElement]




    });


    // Define class breaks and symbols for your ranges
    const classBreaks = [
        {
            minValue: 0,
            maxValue: 500,
            symbol: new SimpleFillSymbol({
                style: "solid",
                color: [0, 0, 255, 0.8], 
                outline: {
                    color: [0, 0, 0, 0.5],
                    width: 1
                }
            })
        },
        {
            minValue: 500,
            maxValue: 600,
            symbol: new SimpleFillSymbol({
                style: "solid",
                color: [0, 64, 128, 0.8], 
                outline: {
                    color: [0, 0, 0, 0.5],
                    width: 1
                }
            })
        },
        {
            minValue: 600,
            maxValue: 1000,
            symbol: new SimpleFillSymbol({
                style: "solid",
                color: [0, 32, 64, 0.8], 
                outline: {
                    color: [0, 0, 0, 0.5],
                    width: 1
                }
            })
        },

        {
            minValue: 1000,
            maxValue: 2000,
            symbol: new SimpleFillSymbol({
                style: "solid",
                color: [0, 32, 64, 0.8],
                outline: {
                    color: [0, 0, 0, 0.5],
                    width: 1
                }
            })
        },
        
    ];

    // Create a ClassBreaksRenderer
    const classBreaksRenderer = new ClassBreaksRenderer({
        field: "rainfall", // Replace with your attribute field name
        defaultSymbol: new SimpleFillSymbol(), // Default symbol for values outside the specified ranges
        classBreakInfos: classBreaks
    });

    // Apply the ClassBreaksRenderer to your feature layer (replace 'yourFeatureLayer' with your actual feature layer)
    Rainfall.renderer = classBreaksRenderer;

    const Rainguage = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticrainfall/MapServer/0",
        definitionExpression: "statename <> 'Delhi_7'",
        title: "Rainfall",
        visible: false,
        renderer: raga,
       
        outFields: ["*"],
        content: [attachmentsElementrg]
    });

    const WaterFlow = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticwaterflow/MapServer/0",
        definitionExpression: "state <> 'Delhi_7'",
        title: "Water Flow Meter",
        visible: false,
        renderer: wf,
       
        outFields: ["*"]




    });




    const GPLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/MapAdminBoundAtal/MapServer/0",

        definitionExpression: "st_name <> 'Delhi_7'",
        title: "Gram Panchayat",



        minScale: 600000,
        labelingInfo: [labelClass],
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 1,
                    color: "blue"
                }
            }
        },

        outFields: ["*"],


    });

    const BlockLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/MapAdminBoundAtal/MapServer/2",
        definitionExpression: "state <> 'Delhi_7'",
        labelingInfo: [labelClassB],
        minScale: 6650000,
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 1.5,
                    color: "yellow"
                }
            }
        },

        title: "Block",

       
        outFields: ["*"],

    });

    const DistrictLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MAPDistrict/MapServer/0",
        definitionExpression: "state <> 'Delhi_7'",
        title: "District",
        labelingInfo: [labelClassD],
        minScale: 6650000,
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 2,
                    color: "green"
                }
            }
        },

        visible: true,
      
        outFields: ["*"]
    });




    const StateLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/MapAdminBoundAtal/MapServer/3",

        definitionExpression: "State <> 'Delhi_7'",
        title: "State",
        labelingInfo: [labelClassS],

        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 2.5,
                    color: "gray"
                }
            }
        },
        visible: true,
      
        outFields: ["*"]

    });

    const PointGroupLayer = new GroupLayer({
        title: "Data",
        visible: true,
       
        layers: [WaterFlow, Rainguage, ArtificialResourceLayer, Well, WaterQuality, WaterLevel],
        listMode: "show",
        opacity: 0.75
    });


    const BoundaryGroupLayer = new GroupLayer({
        title: "Boundary",
        visible: true,
        
        layers: [GPLayer, BlockLayer, DistrictLayer, StateLayer, India],
        opacity: 0.75
    });








    const rain = new GroupLayer({
        title: "Maps",
        visible: true,
    
        layers: [Rainfall, GWRA],
        opacity: 0.75
    });



 const map = new Map({
       
        basemap: "gray-vector",
        layers: [rain, PointGroupLayer, BoundaryGroupLayer]

    })

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [78, 22],

        zoom: 4,
        highlightOptions: {
            color: "orange"
        },
        popup: {
            dockEnabled: true,
            dockOptions: {
                buttonEnabled: false,
                breakpoint: false
            }
        },
        // minScale: 900000,
        // maxScale: 900000,

    });





    reactiveUtils.when(
        () => view.stationary === true,
        () => {
            (view, "updating", function (evt) {
                $("#loading").show();
            });

            
            (view, "updating", function (evt) {
                $("#loading").hide();
            });
        },
        {
            initial: true
        }
    );



    var countryDDL = document.querySelector("#cntry");
    var DistrictDDL = document.querySelector("#District");
    var BlockDDL = document.querySelector("#Block");
    var GPDDL = document.querySelector("#Gram");
    var WellDDL = document.querySelector("#well_count");
    var PieDDL = document.querySelector("#piezometer_count");
    var GeoDDL = document.querySelector("#geo_count");
    var wlDDL = document.querySelector("#wl_count");
    var wqDDL = document.querySelector("#wq_count");
    var rgDDL = document.querySelector("#rg_count");
    var wfDDL = document.querySelector("#wf_count");

 //State Query

    var queryUrl = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/MapAdminBoundAtal/MapServer/3/query"
    var queryOpts = {
        requestType: "json",
        query: {
            where: "1=1",
            outfields: ["State"],
            f: "json"
        }
    }
    //Getting the features data from the api
    esriRequest(queryUrl, queryOpts).then(function (response) {

        var countryNames = Array.from(new Set(response.data.features.map(r => r.attributes["State"]))).sort();
        // console.log("State:" + countryNames.length);

        countryNames.forEach((a, i) => {

            if (a != "Delhi_7") {
                var names = a.split("_");
                countryDDL.innerHTML += `<option value="${a}"> ${names[0]} </option>`;
            }
        })

    });

    var queryUrlD = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MAPDistrict/MapServer/0/query";
    countryDDL.addEventListener("change", function () {
        var stateName = countryDDL.value;
        

        DistrictDDL.innerHTML = `<option value="ALL"> Select Districts </option>`;
        BlockDDL.innerHTML = `<option value="ALL"> Select Blocks </option>`;
        GPDDL.innerHTML = `<option value="ALL"> Select Gram Panchayat </option>`;
        var queryOptsD = {
            requestType: "json",
            query: {
                where: "state  = '" + stateName + "'",
                outfields: ["district"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlD, queryOptsD).then(function (response) {
            var DistrictNames = Array.from(new Set(response.data.features.map(r => r.attributes["district"]))).sort();
            var dd = console.log("District :" + DistrictNames.length);

            DistrictNames.forEach((a, i) => {
                var names = a.split("_");
                DistrictDDL.innerHTML += `<option value="${a}"> ${names[0]} </option>`
            })


        });

        DistrictLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "state = '" + stateName + "'"
            }),
            excludedEffect: excludedEffect,
            // includedEffect: includedEffect

        });

        GPLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gp_name   = '" + stateName + "'"
            }),
            excludedEffect: excludedEffect,
            // includedEffect: includedEffect

        });



    })


 //Block Query

    var queryUrlB = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/MapAdminBoundAtal/MapServer/2/query";

    DistrictDDL.addEventListener("change", function () {
        var districtname = DistrictDDL.value;


        var queryOptsB = {
            requestType: "json",
            query: {
                where: "district  = '" + districtname + "'",
                outfields: ["block "],
                f: "json"
            }
        }
        BlockDDL.innerHTML = `<option value="ALL"> Select Blocks </option>`;
        GPDDL.innerHTML = `<option value="ALL"> Select Gram Panchayat </option>`;
        //Getting the features data from the api
        esriRequest(queryUrlB, queryOptsB).then(function (response) {
            var BlockNames = Array.from(new Set(response.data.features.map(r => r.attributes["block"]))).sort();
            // console.log("Block Name :" + BlockNames.length);
            BlockNames.forEach((a, i) => {
                var names = a.split("_");
                BlockDDL.innerHTML += `<option value="${a}"> ${names[0]} </option>`
            });

        });


        BlockLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "district  = '" + districtname + "'"
            }),
            excludedEffect: excludedEffect,
            // includedEffect: includedEffect

        });


        GPLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "bloc_name  = '" + districtname + "'"
            }),
            excludedEffect: excludedEffect,
            // includedEffect: includedEffect

        });
    })

    //GP Query

    var queryUrlGP = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/MapAdminBoundAtal/MapServer/0/query";
    BlockDDL.addEventListener("change", function () {
        var blockname = BlockDDL.value;



        var queryOptsGP = {
            requestType: "json",
            query: {
                where: "bloc_name  = '" + blockname + "'",
                outfields: ["gp_name"],
                f: "json"
            }
        }
        GPDDL.innerHTML = `<option value="ALL"> Select Gram Panchayat </option>`;
        //Getting the features data from the api
        esriRequest(queryUrlGP, queryOptsGP).then(function (response) {
            var GPNames = Array.from(new Set(response.data.features.map(r => r.attributes["gp_name"]))).sort();
            // console.log("Gram Panchayat Name :" + GPNames.length);
            GPNames.forEach((a, i) => {
                var names = a.split("_");
                GPDDL.innerHTML += `<option value="${a}"> ${names[0]} </option>`
            });

        });


        GPLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "bloc_name  = '" + blockname + "'"
            }),
            excludedEffect: excludedEffect

        });
    });

    const excludedEffect = "grayscale(100%) opacity(10%)";

    // Query for well

    var queryUrlW = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MapWellInventory/MapServer/0/query";


    //






 GPDDL.addEventListener("change", function () {
        var wellName = GPDDL.value;
         var queryOptsW = {
             requestType: "json",
             cacheBuster: new Date().getTime(),
            query: {
                where: "gp = '" + wellName + "'",
                outfields: ["gid"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlW, queryOptsW).then(function (response) {
            var wellNames = Array.from(new Set(response.data.features.map(r => r.attributes["gid"]))).sort();
            console.log("Well :" + wellNames.length);
            $("#well_count").text(wellNames.length);
         });


        Well.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gp = '" + wellName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })


 // Query for geo


    var queryUrlG = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/StaticPointGeo/MapServer/0/query";

    countryDDL.addEventListener("change", function () {
        var geoName = countryDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "statename     = '" + geoName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlG, queryOptsG).then(function (response) {
            var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("Geo :" + GeoNames.length);
            $("#ar_count").text(GeoNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "statename    = '" + geoName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })




    DistrictDDL.addEventListener("change", function () {
        var geoName = DistrictDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "districtname    = '" + geoName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlG, queryOptsG).then(function (response) {
            var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("Geo :" + GeoNames.length);
            $("#ar_count").text(GeoNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "districtname   = '" + geoName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })

 BlockDDL.addEventListener("change", function () {
        var geoName = BlockDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "blockname   = '" + geoName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlG, queryOptsG).then(function (response) {
            var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("Geo :" + GeoNames.length);
            $("#ar_count").text(GeoNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "blockname  = '" + geoName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })

    GPDDL.addEventListener("change", function () {
        var geoName = GPDDL.value;


        var queryOptsG = {
            requestType: "json",
            cacheBuster: new Date().getTime(),
            query: {
                where: "gpname  = '" + geoName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlG, queryOptsG).then(function (response) {
            var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("Geo :" + GeoNames.length);
            $("#ar_count").text(GeoNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gpname = '" + geoName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })



    function loadData() {
        return new Promise((resolve, reject) => {
            const waterLevelPromise = WaterLevel.load();

            waterLevelPromise
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    loadData()
        .then(() => {

           
            console.log('All data has been loaded');
            var queryUrlwl = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticwaterlevel/MapServer/0/query";

            countryDDL.addEventListener("change", function () {
                var wlName = countryDDL.value;


                var queryOptsw = {
                    requestType: "json",
                    cacheBuster: new Date().getTime(),
                    query: {
                        where: "state     = '" + wlName + "'",
                        outfields: ["id"],
                        f: "json"
                    }
                }
                //Getting the features data from the api

                esriRequest(queryUrlwl, queryOptsw).then(function (response) {
                    var wlNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
                    console.log("wl :" + wlNames.length);
                    $("#wl_count").text(wlNames.length);
                    // GeoNames.forEach((a, i) => {
                    //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
                    // })


                });

                WaterLevel.featureEffect = new FeatureEffect({
                    filter: new FeatureFilter({
                        where: "state    = '" + wlName + "'"
                    }),
                    excludedEffect: excludedEffect

                });

            })




            DistrictDDL.addEventListener("change", function () {
                var wlName = DistrictDDL.value;


                var queryOptsw = {
                    requestType: "json",
                    query: {
                        where: "district    = '" + wlName + "'",
                        outfields: ["id"],
                        f: "json"
                    }
                }

                esriRequest(queryUrlwl, queryOptsw).then(function (response) {

                    var wlNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
                    console.log("wl :" + wlNames.length);
                    $("#wl_count").text(wlNames.length);



                });

                WaterLevel.featureEffect = new FeatureEffect({
                    filter: new FeatureFilter({
                        where: "district   = '" + wlName + "'"
                    }),
                    excludedEffect: excludedEffect

                });

            })







            BlockDDL.addEventListener("change", function () {
                var wlName = BlockDDL.value;


                var queryOptsw = {
                    requestType: "json",
                    query: {
                        where: "block   = '" + wlName + "'",
                        outfields: ["id"],
                        f: "json"
                    }
                }
                //Getting the features data from the api
                esriRequest(queryUrlwl, queryOptsw).then(function (response) {

                    var wlNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
                    console.log("Geo :" + wlNames.length);
                    $("#wl_count").text(wlNames.length);
                    // GeoNames.forEach((a, i) => {
                    //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
                    // })


                });

                WaterLevel.featureEffect = new FeatureEffect({
                    filter: new FeatureFilter({
                        where: "block  = '" + wlName + "'"
                    }),
                    excludedEffect: excludedEffect

                });

            })


            WaterLevel.load().then(() => {
                // Set the view extent to the data extent
                view.extent = layer.fullExtent;
                /*layer.popupTemplate = layer.createPopupTemplate();*/
            });

            const loader = document.getElementById('loader');
            GPDDL.addEventListener("change", function () {
                var wlName = GPDDL.value;

                // Show loader when the request starts
                loader.style.display = 'block';

                var queryOptsw = {
                    requestType: "json",
                    cacheBuster: new Date().getTime(),
                    query: {
                        where: "grampancha   = '" + wlName + "'",
                        outfields: ["id"],
                        f: "json"
                    }
                };

                console.log("datatt" + queryOptsw);
                esriRequest(queryUrlwl, queryOptsw).then(function (response) {

                    var wlNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
                    console.log("wl :" + wlNames.length);
                    for (var i = 0; i < response.data.features.length; i++) {
                        console.log("data" + response.data.features[i])
                    }
                    $("#wl_count").text(wlNames.length);

                    loader.style.display = 'none';

                    // Apply feature effects or further operations
                    WaterLevel.featureEffect = new FeatureEffect({
                        filter: new FeatureFilter({
                            where: "grampancha   = '" + wlName + "'"
                        }),
                        excludedEffect: excludedEffect
                    });
                }).catch(function (error) {
                    console.error("Error fetching data:", error);
                    // Hide loader on error
                    loader.style.display = 'none';
                });
            });




                   })
        .catch((error) => {
            console.error('Error loading data:', error);
            // Handle error if data loading fails
        });

 


    //query for water level starts ends


    ////query for water quality starts




    var queryUrlwq = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticwq/MapServer/0/query";

 countryDDL.addEventListener("change", function () {
        var wqName = countryDDL.value;


        var queryOptsG = {
            requestType: "json",
            cacheBuster: new Date().getTime(),
            query: {
                where: "state     = '" + wqName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwq, queryOptsG).then(function (response) {
            var wqNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("wq :" + wqNames.length);
            $("#wq_count").text(wqNames.length);
          


        });

        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "state    = '" + wqName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })




    DistrictDDL.addEventListener("change", function () {
        var wqName = DistrictDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "district    = '" + wqName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwq, queryOptsG).then(function (response) {
            var wqNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("wq :" + wqNames.length);
            $("#wq_count").text(wqNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "district   = '" + wqName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })


  BlockDDL.addEventListener("change", function () {
        var wqName = BlockDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "block   = '" + wqName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwq, queryOptsG).then(function (response) {
            var wqNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("WQ :" + wqNames.length);
            $("#wq_count").text(wqNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "block  = '" + wqName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })






    GPDDL.addEventListener("change", function () {
        var wqName = GPDDL.value;


        var queryOptsG = {
            requestType: "json",
            cacheBuster: new Date().getTime(),
            query: {
                where: "gp  = '" + wqName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwq, queryOptsG).then(function (response) {
            var wqNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("wq :" + wqNames.length);
            $("#wq_count").text(wqNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gp = '" + wqName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })


    ///query fro water quality ends


    ////query for rainguage


    var queryUrlrg = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticrainfall/MapServer/0/query";

 countryDDL.addEventListener("change", function () {
        var rgName = countryDDL.value;


        var queryOptsG = {
            requestType: "json",
            cacheBuster: new Date().getTime(),
            query: {
                where: "statename     = '" + rgName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlrg, queryOptsG).then(function (response) {
            var rgNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("rg :" + rgNames.length);
            $("#rg_count").text(rgNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "statename    = '" + rgName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })




    DistrictDDL.addEventListener("change", function () {
        var rgName = DistrictDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "districtname     = '" + rgName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlrg, queryOptsG).then(function (response) {
            var rgNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("rg :" + rgNames.length);
            $("#rg_count").text(rgNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "districtname   = '" + rgName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })

BlockDDL.addEventListener("change", function () {
        var rgName = BlockDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "blockname    = '" + rgName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlrg, queryOptsG).then(function (response) {
            var rgNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("rg :" + rgNames.length);
            $("#rg_count").text(rgNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "blockname  = '" + rgName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })






    GPDDL.addEventListener("change", function () {
        var rgName = GPDDL.value;


        var queryOptsG = {
            requestType: "json",
            cacheBuster: new Date().getTime(),
            query: {
                where: "gpname   = '" + rgName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlrg, queryOptsG).then(function (response) {
            var rgNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("rg :" + rgNames.length);
            $("#rg_count").text(rgNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gpname = '" + rgName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })




    ////query for waterflow





    var queryUrlwf = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/staticwaterflow/MapServer/0/query";

    countryDDL.addEventListener("change", function () {
        var wfName = countryDDL.value;


        var queryOptsG = {
            requestType: "json",
            
            query: {
                where: "state      = '" + wfName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwf, queryOptsG).then(function (response) {
            var wfNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("wf :" + wfNames.length);
            $("#wf_count").text(wfNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "state     = '" + wfName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })




    DistrictDDL.addEventListener("change", function () {
        var wfName = DistrictDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "district      = '" + wfName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwf, queryOptsG).then(function (response) {
            var wfNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("wf :" + wfNames.length);
            $("#wf_count").text(wfNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "district    = '" + wfName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })







    BlockDDL.addEventListener("change", function () {
        var wfName = BlockDDL.value;


        var queryOptsG = {
            requestType: "json",
            query: {
                where: "block     = '" + wfName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwf, queryOptsG).then(function (response) {
            var wfNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("wf :" + wfNames.length);
            $("#wf_count").text(wfNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "block   = '" + wfName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })






    GPDDL.addEventListener("change", function () {
        var wfName = GPDDL.value;


        var queryOptsG = {
            requestType: "json",
            cacheBuster: new Date().getTime(),
            query: {
                where: "grampancha    = '" + wfName + "'",
                outfields: ["id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlwf, queryOptsG).then(function (response) {
            var wfNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
            console.log("wf :" + wfNames.length);
            $("#wf_count").text(wfNames.length);
            // GeoNames.forEach((a, i) => {
            //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
            // })


        });

        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "grampancha  = '" + wfName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })




    //go to results






    countryDDL.addEventListener("change", function () {
        if (this.value == "All") {
            StateLayer.definitionExpression = ""; //Querying the layer
            // queryOpts.query.where = "1=1"; //To Return an empty list, so that the city list is empty

        } else {
            StateLayer.definitionExpression = `State = '${this.value}'`; //Querying the layer
            queryOpts.query.where = `State = '${this.value}'`; //Querying the server
        }

        StateLayer.queryExtent().then(function (result) {
            view.goTo(result, {

            });

        })

    })

    DistrictDDL.addEventListener("change", function () {
        if (this.value == "All") {
            DistrictLayer.definitionExpression = ""; //Querying the layer
            // queryOpts.query.where = "1=1"; //To Return an empty list, so that the city list is empty

        } else {
            DistrictLayer.definitionExpression = `district = '${this.value}'`; //Querying the layer
            queryOpts.query.where = `district = '${this.value}'`; //Querying the server
        }

        DistrictLayer.queryExtent().then(function (result) {
            view.goTo(result, {

            });

        })

    })


    BlockDDL.addEventListener("change", function () {
        if (this.value == "All") {
            BlockLayer.definitionExpression = ""; //Querying the layer
            // queryOpts.query.where = "1=1"; //To Return an empty list, so that the city list is empty

        } else {
            BlockLayer.definitionExpression = `block  = '${this.value}'`; //Querying the layer
            queryOpts.query.where = `block  = '${this.value}'`; //Querying the server
        }

        BlockLayer.queryExtent().then(function (result) {
            view.goTo(result, {

            });

        })

    })


    GPDDL.addEventListener("change", function () {
        if (this.value == "All") {
            GPLayer.definitionExpression = ""; //Querying the layer
            // queryOpts.query.where = "1=1"; //To Return an empty list, so that the city list is empty

        } else {
            GPLayer.definitionExpression = `gp_name  = '${this.value}'`; //Querying the layer
            queryOpts.query.where = `gp_name  = '${this.value}'`; //Querying the server
        }

        GPLayer.queryExtent().then(function (result) {
            view.goTo(result, {

            });

        })

    })

    // Remove from dropdown Well


    WellDDL.addEventListener("change", function () {
        if (this.value == "All") {
            Well.definitionExpression = ""; //Querying the layer
            queryOpts.query.where = "1=1"; //To Return an empty list, so that the city list is empty

        }
        // else {
        //     Well.definitionExpression = `gid = '${this.value}'`; //Querying the layer
        //     queryOpts.query.where = `gid = '${this.value}'`; //Querying the server
        // }

        Well.queryExtent().then(function (result) {
            view.goTo(result, {

            });

        })
        Well.queryFeatures(query).then(function (results) {
            const features = results.features;
            view.goTo(features[0].geometry)
        })

    })



    const featureTableS = new FeatureTable({
        view: view,
        layer: StateLayer,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,

        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates
                {
                    // autocastable to FieldColumnTemplate
                    type: "field",


                    fieldName: "dd",
                    label: "State Name",
                    direction: "asc",
                    // This field will not be shown in the table
                    visible: true
                },
                {
                    type: "field",
                    fieldName: "Districts",
                    label: "Districts Under ABY",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    type: "field",
                    fieldName: "Blocks",
                    label: "Blocks Under ABY",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Gram_Panch",
                    label: "Gram Panchayats Under ABY",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Villages_U",
                    label: "Villages Under ABY GPs",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },




            ]
        },
        container: document.getElementById("tableDiv3")
    });


    const featureTableD = new FeatureTable({
        view: view,
        layer: DistrictLayer,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates


                {
                    type: "field",
                    fieldName: "State_Name",
                    label: "State",
                    // The table will be sorted by this column
                    // in ascending order
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "District_N",
                    label: "District",
                    // This field will not be shown in the table
                    visible: true
                },


                {
                    type: "field",
                    fieldName: "block_ct",
                    label: "Block",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },

                {
                    type: "field",
                    fieldName: "gps",
                    label: "GPs_Count",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "vill_ct",
                    label: "Villages_Covered_under_the_GPs__of_ABY",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


            ]
        },
        container: document.getElementById("tableDiv2")
    });


    const featureTableB = new FeatureTable({
        view: view,
        layer: BlockLayer,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates


                {
                    type: "field",
                    fieldName: "State_Name",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "District_N",
                    label: "District",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "Block_Name",
                    label: "Block",
                    // This field will not be shown in the table
                    visible: true
                },


                {
                    type: "field",
                    fieldName: "gps",
                    label: "GPs",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "vill_count",
                    label: "Villages_Covered_under_the_GPs__of_ABY",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },






            ]
        },
        container: document.getElementById("tableDiv1")
    });



    const featureTableg = new FeatureTable({
        view: view,
        layer: GPLayer,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates

                {
                    type: "field",
                    fieldName: "st_name1",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "dist_name1",
                    label: "District",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "bloc_name1",
                    label: "Block",
                    // The table will be sorted by this column
                    // in ascending order
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "gp_name1",
                    label: "Gram Panchayat",
                    // This field will not be shown in the table
                    visible: true
                },









                {
                    type: "field",
                    fieldName: "count_vill",
                    label: "Count_of_Villages_Under_GPs",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "gp_area",
                    label: "Gram_Panchayat_Area_in_ha",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "latitude",
                    label: "Latitude",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "longitude",
                    label: "Longitude",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "vill_name",
                    label: "Village_Names",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

            ]
        },
        container: document.getElementById("tableDiv")
    });










    // view.when(() => {
    const featureLayerw = Well;

    //////Welllllllllll
    const featureTableWell = new FeatureTable({
        view: view,
        layer: Well,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates


                {
                    type: "field",
                    fieldName: "state_name",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "district_name",
                    label: "District",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },

                {
                    type: "field",
                    fieldName: "block_name",
                    label: "Block",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "gp_name",
                    label: "Gram Panchayat",
                    // This field will not be shown in the table
                    visible: true
                },

                {
                    type: "field",
                    fieldName: "village",
                    label: "Village",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    type: "field",
                    fieldName: "latitude",
                    label: "Latitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "longitude",
                    label: "Longitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "welldiameter",
                    label: "Well_Diameter",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "welldepth",
                    label: "Well_Depth",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "measuringpoint",
                    label: "Measuring Point",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "welltype",
                    label: "Well_Type",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "wellwaterpotable",
                    label: "Well_Water_Portable",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "waterleveldepth",
                    label: "Water_Level_Depth",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "pumpinstalled",
                    label: "Pump_Installed",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "electricmeterselecteditem ",
                    label: "Electri_Meter",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "datetime",
                    label: "Date_Time",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "date",
                    label: "Date",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "image",
                    label: "Image",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "wellno",
                    label: "Well_No",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "gid",
                    label: "ID",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

            ]
        },
        container: document.getElementById("tableDiv4")
    });

    //     reactiveUtils.when(
    //         () => view.stationary === true,
    //         () => {
    //             // Get the new extent of view/map whenever map is updated.
    //             if (view.extent) {
    //                 // Filter out and show only the visible features in the feature table.
    //                 featureTableWell.filterGeometry = view.extent;
    //             }
    //         },
    //         {
    //             initial: true
    //         }
    //     );

    //     // Listen for the view's click event and access the associated graphic.

    //     view.on("immediate-click", (event) => {
    //         view.hitTest(event).then((response) => {
    //             candidate = response.results.find((result) => {
    //                 return (
    //                     result.graphic &&
    //                     result.graphic.layer &&
    //                     result.graphic.layer === featureTableWell
    //                 );
    //             });

    //             // Add the graphic's ObjectId into the collection of highlightIds.
    //             // Check that the featureTable.highlightIds collection
    //             // does not include an already highlighted feature.
    //             if (candidate) {
    //                 const objectId = candidate.graphic.getObjectId();

    //                 if (featureTableWell.highlightIds.includes(objectId)) {
    //                     // Remove feature from current selection if feature
    //                     // is already added to highlightIds collection
    //                     featureTableWell.highlightIds.remove(objectId);
    //                 } else {
    //                     // Add this feature to the featureTable highlightIds collection
    //                     featureTableWell.highlightIds.add(objectId);
    //                 }
    //             }
    //         });
    //     });

    //     // Watch the featureTable's highlightIds.length property,
    //     // and get the count of highlighted features within
    //     // the table.

    //     featureTableWell.watch("highlightIds.length", (ids) => {
    //         highlightIdsCount = ids;



    //         featureTableWell.viewModel.activeFilters.forEach((filter) => {
    //             if (filter.type === "selection") {
    //                 selectionIdCount = filter.objectIds.length; // the filtered selection's id count
    //                 // Check that the filter selection count is equal to the
    //                 // highlightIds collection count. If not, update filter selection.
    //                 if (selectionIdCount !== highlightIdsCount) {
    //                     featureTableWell.filterBySelection();
    //                 }
    //             }
    //         });
    //     });
    // });



   

       





    // view.when(() => {
    const featureTablewl = WaterLevel;


    const featureTablewaterl = new FeatureTable({
        view: view,
        layer: WaterLevel,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates

                {
                    type: "field",
                    fieldName: "st",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "dt",
                    label: "District ",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "bl",
                    label: "Block",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "gp",
                    label: "Gram_Panchayat",
                    // This field will not be shown in the table
                    visible: true
                },

                {
                    type: "field",
                    fieldName: "latitude",
                    label: "Latitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "longitude",
                    label: "Longitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "welldepth",
                    label: "Well_Depth",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },




                {
                    type: "field",
                    fieldName: "wellid",
                    label: "Well ID",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "other_well",
                    label: "Other Well Type",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "diameter_o",
                    label: "Diameter_of_Well (m)",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "height_of_",
                    label: "Height of measuring point (mbgl)",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "source_o_1",
                    label: "Source Ownership Type",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
             
                {
                    type: "field",
                    fieldName: "datetime",
                    label: "Date Time",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

             

            ]
        },
        container: document.getElementById("tableDiv6")
    });





    //     reactiveUtils.when(
    //         () => view.stationary === true,
    //         () => {
    //             // Get the new extent of view/map whenever map is updated.
    //             if (view.extent) {
    //                 // Filter out and show only the visible features in the feature table.
    //                 featureTablewaterl.filterGeometry = view.extent;
    //             }
    //         },
    //         {
    //             initial: true
    //         }
    //     );

    //     // Listen for the view's click event and access the associated graphic.

    //     view.on("immediate-click", (event) => {
    //         view.hitTest(event).then((response) => {
    //             candidate = response.results.find((result) => {
    //                 return (
    //                     result.graphic &&
    //                     result.graphic.layer &&
    //                     result.graphic.layer === featureTablewaterl
    //                 );
    //             });

    //             // Add the graphic's ObjectId into the collection of highlightIds.
    //             // Check that the featureTable.highlightIds collection
    //             // does not include an already highlighted feature.
    //             if (candidate) {
    //                 const objectId = candidate.graphic.getObjectId();

    //                 if (featureTablewaterl.highlightIds.includes(objectId)) {
    //                     // Remove feature from current selection if feature
    //                     // is already added to highlightIds collection
    //                     featureTablewaterl.highlightIds.remove(objectId);
    //                 } else {
    //                     // Add this feature to the featureTable highlightIds collection
    //                     featureTablewaterl.highlightIds.add(objectId);
    //                 }
    //             }
    //         });
    //     });

    //     // Watch the featureTable's highlightIds.length property,
    //     // and get the count of highlighted features within
    //     // the table.

    //     featureTablewaterl.watch("highlightIds.length", (ids) => {
    //         highlightIdsCount = ids;



    //         featureTablewaterl.viewModel.activeFilters.forEach((filter) => {
    //             if (filter.type === "selection") {
    //                 selectionIdCount = filter.objectIds.length; // the filtered selection's id count
    //                 // Check that the filter selection count is equal to the
    //                 // highlightIds collection count. If not, update filter selection.
    //                 if (selectionIdCount !== highlightIdsCount) {
    //                     featureTablewaterl.filterBySelection();
    //                 }
    //             }
    //         });
    //     });
    // });




    // view.when(() => {
    const featureTablewq = WaterQuality;



    const featureTablewaterQ = new FeatureTable({
        view: view,
        layer: WaterQuality,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_

             
                {
                    type: "field",
                    fieldName: "st",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "dt",
                    label: "District",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "bl",
                    label: "Block",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },


                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "gpq",
                    label: "Gram_Panchayat",
                    // This field will not be shown in the table
                    initialSortPriority: 1
                },

                {
                    type: "field",
                    fieldName: "village",
                    label: "Village",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },



                {
                    type: "field",
                    fieldName: "site_name",
                    label: "Site_Name",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },



                {
                    type: "field",
                    fieldName: "well_type",
                    label: "Type_of_well",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "source",
                    label: "Source",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "latitude",
                    label: "Latitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "longitude",
                    label: "Longitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "well_depth",
                    label: "Well Depth (mbgl)",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "aquifer",
                    label: "Acquifier",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    type: "field",
                    fieldName: "year",
                    label: "Years",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


            

                {
                    type: "field",
                    fieldName: "well_id",
                    label: "Well_ID",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
            ]
        },
        container: document.getElementById("tableDiv7")
    });


    //     reactiveUtils.when(
    //         () => view.stationary === true,
    //         () => {
    //             // Get the new extent of view/map whenever map is updated.
    //             if (view.extent) {
    //                 // Filter out and show only the visible features in the feature table.
    //                 featureTablewaterQ.filterGeometry = view.extent;
    //             }
    //         },
    //         {
    //             initial: true
    //         }
    //     );

    //     // Listen for the view's click event and access the associated graphic.

    //     view.on("immediate-click", (event) => {
    //         view.hitTest(event).then((response) => {
    //             candidate = response.results.find((result) => {
    //                 return (
    //                     result.graphic &&
    //                     result.graphic.layer &&
    //                     result.graphic.layer === featureTablewaterQ
    //                 );
    //             });

    //             // Add the graphic's ObjectId into the collection of highlightIds.
    //             // Check that the featureTable.highlightIds collection
    //             // does not include an already highlighted feature.
    //             if (candidate) {
    //                 const objectId = candidate.graphic.getObjectId();

    //                 if (featureTablewaterQ.highlightIds.includes(objectId)) {
    //                     // Remove feature from current selection if feature
    //                     // is already added to highlightIds collection
    //                     featureTablewaterQ.highlightIds.remove(objectId);
    //                 } else {
    //                     // Add this feature to the featureTable highlightIds collection
    //                     featureTablewaterQ.highlightIds.add(objectId);
    //                 }
    //             }
    //         });
    //     });

    //     // Watch the featureTable's highlightIds.length property,
    //     // and get the count of highlighted features within
    //     // the table.

    //     featureTablewaterQ.watch("highlightIds.length", (ids) => {
    //         highlightIdsCount = ids;



    //         featureTablewaterQ.viewModel.activeFilters.forEach((filter) => {
    //             if (filter.type === "selection") {
    //                 selectionIdCount = filter.objectIds.length; // the filtered selection's id count
    //                 // Check that the filter selection count is equal to the
    //                 // highlightIds collection count. If not, update filter selection.
    //                 if (selectionIdCount !== highlightIdsCount) {
    //                     featureTablewaterQ.filterBySelection();
    //                 }
    //             }
    //         });
    //     });
    // });





    // view.when(() => {
    //     const featureTablegeo = ArtificialResourceLayer;






    //geotagging table
    const featuretablearge = new FeatureTable({
        view: view,
        layer: ArtificialResourceLayer,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_

                // {
                //     // autocastable to FieldColumnTemplate
                //     type: "field",
                //     fieldName: "id",
                //     label: "id",
                //     // This field will not be shown in the table
                //     visible: true
                // },


                {
                    type: "field",
                    fieldName: "st_lgd",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "dt_lgd",
                    label: "District",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "bl_lgd",
                    label: "Block",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    type: "field",
                    fieldName: "gp_lgd",
                    label: "Gram Panchayat",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    type: "field",
                    fieldName: "village",
                    label: "Village",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },





                {
                    type: "field",
                    fieldName: "latitude",
                    label: "Latitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "longitude",
                    label: "Longitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "typeofstru",
                    label: "Type of Structure",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "storagecap",
                    label: "Storage Capacity",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "nooffillin",
                    label: "No Of Fillings",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "image1",
                    label: "Image 1",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "image2",
                    label: "Image 2",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "deviceid",
                    label: "Device ID",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "others",
                    label: "Others",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

               
                {
                    type: "field",
                    fieldName: "sitename",
                    label: "Site Name",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "locationde",
                    label: "Location Detail",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "date_time",
                    label: "Date Time",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

              


            ]
        },
        container: document.getElementById("tableDiv8")
    });



    //     reactiveUtils.when(
    //         () => view.stationary === true,
    //         () => {
    //             // Get the new extent of view/map whenever map is updated.
    //             if (view.extent) {
    //                 // Filter out and show only the visible features in the feature table.
    //                 featuretablearge.filterGeometry = view.extent;
    //             }
    //         },
    //         {
    //             initial: true
    //         }
    //     );

    //     // Listen for the view's click event and access the associated graphic.

    //     view.on("immediate-click", (event) => {
    //         view.hitTest(event).then((response) => {
    //             candidate = response.results.find((result) => {
    //                 return (
    //                     result.graphic &&
    //                     result.graphic.layer &&
    //                     result.graphic.layer === featuretablearge
    //                 );
    //             });

    //             // Add the graphic's ObjectId into the collection of highlightIds.
    //             // Check that the featureTable.highlightIds collection
    //             // does not include an already highlighted feature.
    //             if (candidate) {
    //                 const objectId = candidate.graphic.getObjectId();

    //                 if (featuretablearge.highlightIds.includes(objectId)) {
    //                     // Remove feature from current selection if feature
    //                     // is already added to highlightIds collection
    //                     featuretablearge.highlightIds.remove(objectId);
    //                 } else {
    //                     // Add this feature to the featureTable highlightIds collection
    //                     featuretablearge.highlightIds.add(objectId);
    //                 }
    //             }
    //         });
    //     });

    //     // Watch the featureTable's highlightIds.length property,
    //     // and get the count of highlighted features within
    //     // the table.

    //     featuretablearge.watch("highlightIds.length", (ids) => {
    //         highlightIdsCount = ids;



    //         featuretablearge.viewModel.activeFilters.forEach((filter) => {
    //             if (filter.type === "selection") {
    //                 selectionIdCount = filter.objectIds.length; // the filtered selection's id count
    //                 // Check that the filter selection count is equal to the
    //                 // highlightIds collection count. If not, update filter selection.
    //                 if (selectionIdCount !== highlightIdsCount) {
    //                     featuretablearge.filterBySelection();
    //                 }
    //             }
    //         });
    //     });
    // });





    //watershed table



    // const featurewatershed = new FeatureTable({
    //     view: view,
    //     layer: watershed,
    //     multiSortEnabled: true,
    //     visibleElements: {
    //         clearSelection: true,
    //         refreshData: true,
    //         toggleColumns: true,
    //         selectedRecordsShowAllToggle: true,
    //         selectedRecordsShowSelectedToggle: true,
    //         zoomToSelection: true,
    //     },
    //     tableTemplate: {
    //         // autocastable to TableTemplate
    //         // The table template's columnTemplates are used to determine which attributes are shown in the table
    //         columnTemplates: [
    //             // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_

    //             {
    //                 // autocastable to FieldColumnTemplate
    //                 type: "field",
    //                 fieldName: "id",
    //                 label: "id",
    //                 // This field will not be shown in the table
    //                 visible: true
    //             },

    //             {
    //                 // autocastable to FieldColumnTemplate
    //                 type: "field",
    //                 fieldName: "basin",
    //                 label: "Basin",
    //                 // This field will not be shown in the table
    //                 visible: true
    //             },
    //             {
    //                 type: "field",
    //                 fieldName: "sub_basin",
    //                 label: "Sub Basin",
    //                 // The table will be sorted by this column
    //                 // in ascending order
    //                 direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 1 // This columns get priority after Enrollment
    //             },
    //             {
    //                 type: "field",
    //                 fieldName: "watershed",
    //                 label: "Watershed",
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },
    //             {
    //                 type: "field",
    //                 fieldName: "area_ha",
    //                 label: "Area In Hectare",
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },




    //         ]
    //     },
    //     container: document.getElementById("tableDiv9")
    // });


    // const featureaqui = new FeatureTable({
    //     view: view,
    //     layer: aquifier,
    //     multiSortEnabled: true,
    //     visibleElements: {
    //         clearSelection: true,
    //         refreshData: true,
    //         toggleColumns: true,
    //         selectedRecordsShowAllToggle: true,
    //         selectedRecordsShowSelectedToggle: true,
    //         zoomToSelection: true,
    //     },
    //     tableTemplate: {
    //         // autocastable to TableTemplate
    //         // The table template's columnTemplates are used to determine which attributes are shown in the table
    //         columnTemplates: [
    //             // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_

    //             {
    //                 // autocastable to FieldColumnTemplate
    //                 type: "field",
    //                 fieldName: "id",
    //                 label: "id",
    //                 // This field will not be shown in the table
    //                 visible: true
    //             },


    //             {
    //                 type: "field",
    //                 fieldName: "aqui_code",
    //                 label: "Aquifier Code",
    //                 // The table will be sorted by this column
    //                 // in ascending order
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 1 // This columns get priority after Enrollment
    //             },
    //             {
    //                 type: "field",
    //                 fieldName: "newcode",
    //                 label: "New Code",
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },
    //             {
    //                 type: "field",
    //                 fieldName: "newcode14",
    //                 label: "New Code 14",
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },

    //             {
    //                 type: "field",
    //                 fieldName: "newcode43",
    //                 label: "New Code 43",
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },
    //             {
    //                 type: "field",
    //                 fieldName: "major_aqui",
    //                 label: "Major Aquifier",
    //                 direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },
    //             {
    //                 type: "field",
    //                 fieldName: "age",
    //                 label: "Age",
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },

    //             {
    //                 type: "field",
    //                 fieldName: "principal_",
    //                 label: "Principal",
    //                 //direction: "asc", // This is required for initial sorting
    //                 initialSortPriority: 0 // This column gets the highest sort priority
    //             },





    //         ]
    //     },
    //     container: document.getElementById("tableDiv10")
    // });

    const featuregwra = new FeatureTable({
        view: view,
        layer: GWRA,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_

                {
                    type: "field",
                    fieldName: "State",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },






                {
                    type: "field",
                    fieldName: "District",
                    label: "District",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Block_Talu",
                    label: "Block",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "GPs",
                    label: "GPs",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Villages_C",
                    label: "Villages Count",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Block_LGD",
                    label: "Block LGD",
                    // The table will be sorted by this column
                    // in ascending order
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    type: "field",
                    fieldName: "District_L",
                    label: "District LGD",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "State_LGD",
                    label: "State LGD",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    type: "field",
                    fieldName: "Year",
                    label: "Year",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    type: "field",
                    fieldName: "Recharge_f",
                    label: "Recharge F",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Recharge_1",
                    label: "Recharge 1",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Recharge_2",
                    label: "Recharge 2",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Recharge_3",
                    label: "Recharge 3",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Total_Annu",
                    label: "Total Annual",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Annual_Ext",
                    label: "Annual Extension",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Irrigation",
                    label: "Irrigation",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Industrial",
                    label: "Industrial",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Domestic_U",
                    label: "Domestic",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Total_Extr",
                    label: "Total Extraction",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Net_Ground",
                    label: "Net Ground",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Stage_of_G",
                    label: "Stage of G",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Categoriza",
                    label: "Categorization",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },



            ]
        },
        container: document.getElementById("tableDiv11")
    });


    const featurerainfa = new FeatureTable({
        view: view,
        layer: Rainfall,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_





                {
                    type: "field",
                    fieldName: "District_N",
                    label: "District Name",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Blocks_Cou",
                    label: "Blocks Count",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "GPs_Count_",
                    label: "GPs Count",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "District_A",
                    label: "District Area",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "Rainfall",
                    label: "Rainfall",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "Area",
                    label: "Area",
                    // The table will be sorted by this column
                    // in ascending order
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    type: "field",
                    fieldName: "Population",
                    label: "Population",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },



            ]
        },
        container: document.getElementById("tableDiv12")
    });


    const featurerg = new FeatureTable({
        view: view,
        layer: Rainguage,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_

                {
                    type: "field",
                    fieldName: "st",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "dt",
                    label: "District",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    type: "field",
                    fieldName: "bl",
                    label: "Block",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "gp",
                    label: "Gram Panchayat",
                    // This field will not be shown in the table
                    visible: true
                },





                {
                    type: "field",
                    fieldName: "village",
                    label: "Village",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "raingauge",
                    label: "Rainguage",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "locationdetail",
                    label: "Location Detail",
                    // The table will be sorted by this column
                    // in ascending order
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },
                {
                    type: "field",
                    fieldName: "is_achive",
                    label: "Is Achive",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "status",
                    label: "Status",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "latitude",
                    label: "Latitude",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "longitude",
                    label: "Longitude",
                    //direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                // {
                //     type: "field",
                //     fieldName: "ESRI_OID",
                //     label: "ESRI_OID",
                //     //direction: "asc", // This is required for initial sorting
                //     initialSortPriority: 0 // This column gets the highest sort priority
                // },


            ]
        },
        container: document.getElementById("tableDiv13")
    });





    // view.when(() => {
    //     const featureTablewq = WaterFlow;



    const featureTablewaterflow = new FeatureTable({
        view: view,
        layer: WaterFlow,
        multiSortEnabled: true,
        visibleElements: {
            clearSelection: true,
            refreshData: true,
            toggleColumns: true,
            selectedRecordsShowAllToggle: true,
            selectedRecordsShowSelectedToggle: true,
            zoomToSelection: true,
        },
        tableTemplate: {
            // autocastable to TableTemplate
            // The table template's columnTemplates are used to determine which attributes are shown in the table
            columnTemplates: [
                // Array of either FieldColumnTemplates or GroupColumnTemplates   S__No_

                // {
                //     // autocastable to FieldColumnTemplate
                //     type: "field",
                //     fieldName: "S__No_",
                //     label: "S.No",
                //     // This field will not be shown in the table
                //     visible: true
                // },

                {
                    type: "field",
                    fieldName: "st",
                    label: "State",
                    direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "dt",
                    label: "District",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "bl",
                    label: "Block",
                    // The table will be sorted by this column
                    // in ascending order
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 1 // This columns get priority after Enrollment
                },

                {
                    // autocastable to FieldColumnTemplate
                    type: "field",
                    fieldName: "gp",
                    label: "Gram Panchayat",
                    // This field will not be shown in the table
                    visible: true
                },

                {
                    type: "field",
                    fieldName: "village",
                    label: "Village",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },



                {
                    type: "field",
                    fieldName: "locationde",
                    label: "Location Details",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },



              
                {
                    type: "field",
                    fieldName: "ownername",
                    label: "Owner Name",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                // {
                //     type: "field",
                //     fieldName: "Well_ID",
                //     label: "Well_ID ",
                //     // direction: "asc", // This is required for initial sorting
                //     initialSortPriority: 0 // This column gets the highest sort priority
                // },
                {
                    type: "field",
                    fieldName: "latitude",
                    label: "Latitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "longitude",
                    label: "Longitude",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "welltype",
                    label: "Well_Type",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "pumptype",
                    label: "Pump Type",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "waterflowm",
                    label: "Installation Date",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },


                {
                    type: "field",
                    fieldName: "areairriga",
                    label: "Area Irrigated",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "cropirriga",
                    label: "Crop Irrigated",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "unitreadin",
                    label: "Unit Reading",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },
                {
                    type: "field",
                    fieldName: "meterid",
                    label: "Meter ID",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "dateofentr",
                    label: "Entry Date",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

                {
                    type: "field",
                    fieldName: "status",
                    label: "Status",
                    // direction: "asc", // This is required for initial sorting
                    initialSortPriority: 0 // This column gets the highest sort priority
                },

               
            ]
        },
        container: document.getElementById("tableDiv14")
    });


    //     reactiveUtils.when(
    //         () => view.stationary === true,
    //         () => {
    //             // Get the new extent of view/map whenever map is updated.
    //             if (view.extent) {
    //                 // Filter out and show only the visible features in the feature table.
    //                 featureTablewaterflow.filterGeometry = view.extent;
    //             }
    //         },
    //         {
    //             initial: true
    //         }
    //     );

    //     // Listen for the view's click event and access the associated graphic.

    //     view.on("immediate-click", (event) => {
    //         view.hitTest(event).then((response) => {
    //             candidate = response.results.find((result) => {
    //                 return (
    //                     result.graphic &&
    //                     result.graphic.layer &&
    //                     result.graphic.layer === featureTablewaterflow
    //                 );
    //             });

    //             // Add the graphic's ObjectId into the collection of highlightIds.
    //             // Check that the featureTable.highlightIds collection
    //             // does not include an already highlighted feature.
    //             if (candidate) {
    //                 const objectId = candidate.graphic.getObjectId();

    //                 if (featureTablewaterflow.highlightIds.includes(objectId)) {
    //                     // Remove feature from current selection if feature
    //                     // is already added to highlightIds collection
    //                     featureTablewaterflow.highlightIds.remove(objectId);
    //                 } else {
    //                     // Add this feature to the featureTable highlightIds collection
    //                     featureTablewaterflow.highlightIds.add(objectId);
    //                 }
    //             }
    //         });
    //     });

    //     // Watch the featureTable's highlightIds.length property,
    //     // and get the count of highlighted features within
    //     // the table.

    //     featureTablewaterflow.watch("highlightIds.length", (ids) => {
    //         highlightIdsCount = ids;



    //         featureTablewaterflow.viewModel.activeFilters.forEach((filter) => {
    //             if (filter.type === "selection") {
    //                 selectionIdCount = filter.objectIds.length; // the filtered selection's id count
    //                 // Check that the filter selection count is equal to the
    //                 // highlightIds collection count. If not, update filter selection.
    //                 if (selectionIdCount !== highlightIdsCount) {
    //                     featureTablewaterflow.filterBySelection();
    //                 }
    //             }
    //         });
    //     });
    // });



    const layerList = new LayerList({
        view: view
    });

    const searchWidget = new Search({
        view: view,
        allPlaceholder: "Search",
        includeDefaultSources: false,
        group: "left",
        sources: [
            {
                layer: GPLayer,
                searchFields: ["gp_name1"],

                // searchFields: ["Gram_Panchayat_Name", "Block_Name", "District_Name", "State_Name"],
                exactMatch: false,
                displayField: "gp_name1",
                outFields: ["gp_name1", "bloc_name1"],
                name: "Gram Panchayat",
                placeholder: "Search Gram Panchayat",

            },


            {
                layer: BlockLayer,
                searchFields: ["Block_Name"],

                // searchFields: ["Gram_Panchayat_Name", "Block_Name", "District_Name", "State_Name"],
                exactMatch: false,
                displayField: "Block_Name",
                outFields: ["Block_Name", "District_N"],
                name: "Block",
                placeholder: "Search Block"

            },

            {
                layer: DistrictLayer,
                searchFields: ["District_N"],

                // searchFields: ["Gram_Panchayat_Name", "Block_Name", "District_Name", "State_Name"],
                exactMatch: false,
                displayField: "District_N",
                outFields: ["District_N", "State_Name"],
                name: "District",
                placeholder: "Search District"

            },
        ]
    });

    const bgExpands = new Expand({
        view: view,
        content: searchWidget,
        group: "left"
    });

    view.ui.add(bgExpands, "top-left");


    const homeBtn = new Home({
        view: view,
        group: "left"
    });

    view.ui.add(homeBtn, "top-left");



    const basemapGallery = new BasemapGallery({
        view: view,
        container: document.createElement("div")
    });
    const bgExpand = new Expand({
        view: view,
        content: basemapGallery,
        group: "left"
    });
    basemapGallery.watch("activeBasemap", () => {
        const mobileSize =
            view.heightBreakpoint === "xsmall" ||
            view.widthBreakpoint === "xsmall";

        if (mobileSize) {
            bgExpand.collapse();
        }
    });


    view.ui.add(bgExpand, "top-left");








    //view.ui.add(layerList, "top-right");



    var legend = new Legend({
        view: view,
        container: "legendDiv",

        layerInfos: [


            {
                layer: BoundaryGroupLayer,
                title: "Boundary",

            },

            {
                layer: India,
                title: "Boundary",

            },



            {
                layer: PointGroupLayer,
                title: "",

            },


            // {
            //     layer: baselayer,
            //     title: "Base Layer",

            // },

            {
                layer: rain,
                title: "",

            },

        ]
    });
    legend.style = {
        type: "classic",
        layout: "auto"
    };




   


    const layerListExpand = new Expand({
        view: view,
        group: "left",
        content: layerList,
        expanded: false,
        expandTooltip: "Expand LayerList",
        group: "left"
    });




    const legendExpand = new Expand({
        view: view,

        group: "right",
        content: legend,
        expandTooltip: "Expand Legend",
        expanded: true
    });
    const compass = new Compass({
        view: view,
        visible: false
    });
   

    
    view.ui.add(layerListExpand, "top-left");
    view.ui.add(legendExpand, "top-right");
    view.ui.add(compass, "top-left");
    

    // load the Compass only when the view is rotated
    view.watch('rotation', function (rotation) {
        if (rotation && !compass.visible) {
            compass.visible = true;
        }
    });


    view.ui.add(
        new Expand({
            view,
            group: "left",
            content: new DistanceMeasurement2D({
                view
            })
        }),
        "top-left"
    );
    view.ui.add(
        new Expand({
            view,
            group: "left",
            content: new AreaMeasurement2D({
                view
            })
        }),
        "top-left"
    );


    view.ui.add(
        new Expand({
            view,
            group: "left",
            content: new CoordinateConversion({
                view
            })
        }),

        "top-left"
    );



    view.ui.add(
        new Locate({
            view
        }),
        "top-left"
    );
    // Track
    var track = new Track({
        view
    });
    view.ui.add(track, "top-left");


    view.ui.add(
        new Expand({
            view,
            group: "right",
            content: new Print({
                view,
                printServiceUrl:
                    "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
            })
        }),
        "top-right"
    );
    const scaleBar = new ScaleBar({
        view: view,
        unit: "dual",
        layout: "auto"
    });            
    view.ui.add(scaleBar, "top-left");
    ///popuppiez
    const checkPop = false

    document.getElementById("map_data").addEventListener("click", map_data);
    document.getElementById('map_data_off').style.visibility = 'hidden';
    
    function map_data() {
        document.getElementById("info").style.display = "";
        document.getElementById('map_data').style.visibility = 'hidden';
        document.getElementById('map_data_off').style.visibility = 'visible';
        view.ui.add("info", "top-right");
        
        view
            .when()
            .then(() => {
                return Piezometer.when();
            })
            .then((layer) => {
                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: Piezometer
                    }
                    // the hitTest() checks to see if any graphics from the hurricanesLayer
                    // intersect the x, y coordinates of the pointer
                    view.hitTest(event, opts).then(getGraphics);
                }

                // let highlight, currentYear, currentName;

                function getGraphics(response) {
                    // the topmost graphic from the hurricanesLayer
                    // and display select attribute values from the
                    // graphic to the user
                    if (response.results.length) {
                        const graphic = response.results[0].graphic;

                        const attributes = graphic.attributes;
                        const headd = attributes.station_na;
                        const category = attributes.block;
                        const wind = attributes.district;
                        const name = attributes.gram_p;
                        const obj = attributes.state;
                        const id1 = attributes.depth_of_w;
                        const id2 = attributes.aquifer_ty;
                        const id3 = attributes.principal;
                        const id4 = attributes.major_aqui;







                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "PIEZOMETER" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Depth of Well:-" + id1;
                        document.getElementById("id2").innerHTML = " Aquifier Type:-" + id2;
                        document.getElementById("id3").innerHTML = " Principal:-" + id3;
                        document.getElementById("id4").innerHTML = " Major Aquifier:-" + id4;


                    }
                    else {
                        // remove the highlight if no features are
                        // returned from the hitTest
                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });


        //geotagging popup


        view.ui.add("info", "top-right");

        view
            .when()
            .then(() => {
                return ArtificialResourceLayer.when();
            })
            .then((layer) => {


                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: ArtificialResourceLayer
                    }

                    view.hitTest(event, opts).then(getGraphics);
                }



                function getGraphics(response) {

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;

                        const attributes = graphic.attributes;
                        const category = attributes.bl_lgd;
                        const wind = attributes.dt_lgd;
                        const name = attributes.gp_lgd;
                        const obj = attributes.st_lgd;
                        const id1 = attributes.typeofstru;
                        const id2 = attributes.storagecap;
                        const id3 = attributes.nooffillin;
                        const id4 = attributes.id;



                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "GEOTAGGING" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Type of Structure:-" + id1;
                        document.getElementById("id2").innerHTML = " Storage Capacity:-" + id2;
                        document.getElementById("id3").innerHTML = " No. Of Fillings:-" + id3;
                        document.getElementById("id4").innerHTML = " ID:-" + id4;

                    }
                    else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });


        //popupwell


        view.ui.add("info", "top-right");

        view
            .when()
            .then(() => {
                return Well.when();
            })
            .then((layer) => {


                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: Well
                    }

                    view.hitTest(event, opts).then(getGraphics);
                }


                function getGraphics(response) {

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;

                        const attributes = graphic.attributes;
                        const category = attributes.block;
                        const wind = attributes.district;
                        const name = attributes.gp;
                        const obj = attributes.state;
                        const id1 = attributes.welltype;
                        const id2 = attributes.welldepth;
                        const id3 = attributes.well_sl_no;
                        const id4 = attributes.gid;
                        // const id = attributes.OBJECTID;







                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "WELL INVENTORY" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Well Type:-" + id1;
                        document.getElementById("id2").innerHTML = " Well Depth:-" + id2;
                        document.getElementById("id3").innerHTML = " Well Sl.No:-" + id3;
                        document.getElementById("id4").innerHTML = " ID:-" + id4;


                    }
                    else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });




        //popupwellclose

        //popupwaterquality starts


        view.ui.add("info", "top-right");

        view
            .when()
            .then(() => {
                return WaterQuality.when();
            })
            .then((layer) => {


                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: WaterQuality
                    }

                    view.hitTest(event, opts).then(getGraphics);
                }



                function getGraphics(response) {

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;
                        const attributes = graphic.attributes;
                        const category = attributes.bl;
                        const wind = attributes.dt;
                        const name = attributes.gpq;
                        const obj = attributes.st;
                        const id1 = attributes.well_type;
                        const id2 = attributes.source;
                        const id3 = attributes.aquifer;
                        const id4 = attributes.village;


                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "WATER QUALITY" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Type of Well:-" + id1;
                        document.getElementById("id2").innerHTML = " Source:-" + id2;
                        document.getElementById("id3").innerHTML = " Aquifier Type:-" + id3;
                        document.getElementById("id4").innerHTML = " Village:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    }
                    else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });

        ///waterqualitypopupclose

        ///waterlevelpopupstarts


        view.ui.add("info", "top-right");

        view
            .when()
            .then(() => {
                return WaterLevel.when();
            })
            .then((layer) => {


                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: WaterLevel
                    }

                    view.hitTest(event, opts).then(getGraphics);
                }



                function getGraphics(response) {

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;

                        const attributes = graphic.attributes;
                        const category = attributes.bl;
                        const wind = attributes.dt;
                        const name = attributes.gp;
                        const obj = attributes.state;
                        const id1 = attributes.diameter_o;
                        const id2 = attributes.typeofwell;
                        const id3 = attributes.height_of_;
                        const id4 = attributes.wellid;




                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "WATER LEVEL" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Diameter of Well:-" + id1;
                        document.getElementById("id2").innerHTML = " Type of Well:-" + id2;
                        document.getElementById("id3").innerHTML = " Height of Measuring Point:-" + id3;
                        document.getElementById("id4").innerHTML = " Well ID:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    }
                    else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });




        ///rainguagepopupstarts


        view.ui.add("info", "top-right");

        view
            .when()
            .then(() => {
                return Rainguage.when();
            })
            .then((layer) => {


                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: Rainguage
                    }

                    view.hitTest(event, opts).then(getGraphics);
                }



                function getGraphics(response) {

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;

                        const attributes = graphic.attributes;
                        const category = attributes.bl;
                        const wind = attributes.dt;
                        const name = attributes.gp;
                        const obj = attributes.st;
                        const id1 = attributes.raingauge;
                        const id2 = attributes.locationde;
                        const id3 = attributes.is_achive;
                        const id4 = attributes.village;




                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "RAINGUAGE" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Rainguage:-" + id1;
                        document.getElementById("id2").innerHTML = " Location Details" + id2;
                        document.getElementById("id3").innerHTML = " Is Achieve-" + id3;
                        document.getElementById("id4").innerHTML = " Village:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    }
                    else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });



        ///waterflowpopupstarts


        view.ui.add("info", "top-right");

        view
            .when()
            .then(() => {
                return WaterFlow.when();
            })
            .then((layer) => {


                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: WaterFlow
                    }

                    view.hitTest(event, opts).then(getGraphics);
                }



                function getGraphics(response) {

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;

                        const attributes = graphic.attributes;
                        const category = attributes.bl;
                        const wind = attributes.dt;
                        const name = attributes.gp;
                        const obj = attributes.st;
                        const id1 = attributes.welltype;
                        const id2 = attributes.locationde;
                        const id3 = attributes.areairriga;
                        const id4 = attributes.meterid;




                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "WATER FLOW" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Well Type:-" + id1;
                        document.getElementById("id2").innerHTML = " Location Details" + id2;
                        document.getElementById("id3").innerHTML = " Area Irrigated-" + id3;
                        document.getElementById("id4").innerHTML = " Meter ID:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    }
                    else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });

        ///


        const infoPanelDomNode = document.getElementById("infoPanel");
        const infoPanelCloseButtonDomNode = document.getElementById("infoPanelCloseButton");
        const infoPanelTitleDomNode = document.getElementById("infoPanelTitle");
        const infoPanelContentDomNode = document.getElementById("infoPanelContent");
        const infoPanelContentDomNode1 = document.getElementById("infoPanelContent1");
        const infoPanelContentDomNode2 = document.getElementById("infoPanelContent2");
        const infoPanelContentDomNode3 = document.getElementById("infoPanelContent3");
        const infoPanelButtonsDomNode = document.getElementById("infoPanelButtons");
        const infoPanelNextButtonDomNode = document.getElementById("infoPanelNextButton");
        const infoPanelPrevButtonDomNode = document.getElementById("infoPanelPrevButton");
        // const instructions = document.getElementById("instructions");
        // const instructionsExpand = new Expandd({
        //   expandIconClass: "esri-icon-question",
        //   expandTooltip: "How to use this sample",
        //   expanded: true,
        //   view: view,
        //   content: instructions
        // });
        // view.ui.add(instructionsExpand, "top-left");

        const infoPanelDomNoded = document.getElementById("infoPaneld");
        const infoPanelCloseButtonDomNoded = document.getElementById("infoPanelCloseButtond");
        const infoPanelTitleDomNoded = document.getElementById("infoPanelTitled");
        const infoPanelContentDomNoded = document.getElementById("infoPanelContentd");
        const infoPanelContentDomNoded1 = document.getElementById("infoPanelContentd1");
        const infoPanelContentDomNoded2 = document.getElementById("infoPanelContentd2");
        const infoPanelContentDomNoded3 = document.getElementById("infoPanelContentd3");
        const infoPanelButtonsDomNoded = document.getElementById("infoPanelButtonsd");
        const infoPanelNextButtonDomNoded = document.getElementById("infoPanelNextButtond");
        const infoPanelPrevButtonDomNoded = document.getElementById("infoPanelPrevButtond");


        const infoPanelDomNodeb = document.getElementById("infoPanelb");
        const infoPanelCloseButtonDomNodeb = document.getElementById("infoPanelCloseButtonb");
        const infoPanelTitleDomNodeb = document.getElementById("infoPanelTitleb");
        const infoPanelContentDomNodeb = document.getElementById("infoPanelContentb");
        const infoPanelContentDomNodeb1 = document.getElementById("infoPanelContentb1");
        const infoPanelContentDomNodeb2 = document.getElementById("infoPanelContentb2");
        const infoPanelContentDomNodeb3 = document.getElementById("infoPanelContentb3");
        const infoPanelButtonsDomNodeb = document.getElementById("infoPanelButtonsb");
        const infoPanelNextButtonDomNodeb = document.getElementById("infoPanelNextButtonb");
        const infoPanelPrevButtonDomNodeb = document.getElementById("infoPanelPrevButtonb");



        const infoPanelDomNodeg = document.getElementById("infoPanelg");
        const infoPanelCloseButtonDomNodeg = document.getElementById("infoPanelCloseButtong");
        const infoPanelTitleDomNodeg = document.getElementById("infoPanelTitleg");
        const infoPanelContentDomNodeg = document.getElementById("infoPanelContentg");
        const infoPanelContentDomNodeg1 = document.getElementById("infoPanelContentg1");
        const infoPanelContentDomNodeg2 = document.getElementById("infoPanelContentg2");
        const infoPanelContentDomNodeg3 = document.getElementById("infoPanelContentg3");
        const infoPanelContentDomNodeg4 = document.getElementById("infoPanelContentg4");
        const infoPanelContentDomNodeg5 = document.getElementById("infoPanelContentg5");
        const infoPanelContentDomNodeg6 = document.getElementById("infoPanelContentg6");
        const infoPanelButtonsDomNodeg = document.getElementById("infoPanelButtonsg");
        const infoPanelNextButtonDomNodeg = document.getElementById("infoPanelNextButtong");
        const infoPanelPrevButtonDomNodeg = document.getElementById("infoPanelPrevButtong");

        // let layerView;
        let selectedFeatures;
        let selectedFeatureIndex = 0;
        let highlightd;
        let highlightb;
        let highlightg;

        // Save the layerView to the "layerView" variable so we can use it to highlight:
        view.whenLayerView(StateLayer).then(function (lv) {
            layerView = lv;
        });

        // Based on the global state variables selectedFeatures and selectedFeatureIndex, update the content of the
        // panel and highlight the selected.
        const updateInfoPanel = () => {
            const feature = selectedFeatures[selectedFeatureIndex];
            highlight?.remove();
            highlight = layerView?.highlight(feature);
            infoPanelTitleDomNode.innerHTML = `State:-${feature?.attributes?.dd}`;
            //   infoPanelTitleDomNode.innerHTML = feature?.attributes?.State;
            infoPanelContentDomNode.innerHTML = `District:- ${feature?.attributes?.Districts} `;
            infoPanelContentDomNode1.innerHTML = `Blocks Under ABY:- ${feature?.attributes?.Blocks}`;
            infoPanelContentDomNode2.innerHTML = `GPs Under ABY:- ${feature?.attributes?.Gram_Panch }`;
            infoPanelContentDomNode3.innerHTML = `Villages Under ABY:- ${feature?.attributes?.Villages_U }`;

        };

        // Show the info panel
        const showInfoPanel = () => {
            selectedFeatureIndex = 0;
            updateInfoPanel();

            if (selectedFeatures.length > 1) {
                infoPanelButtonsDomNode.classList.remove("hidden");
            } else {
                infoPanelButtonsDomNode.classList.add("hidden");
            }

            infoPanelDomNode.classList.remove("hidden");
        };

        // Hide the info panel
        const hideInfoPanel = () => {
            infoPanelDomNode.classList.add("hidden");
            highlight?.remove();
        };

        // When the next button is clicked, update the "selectedFeatureIndex" and then call "updateInfoPanel" to update the panel info.
        infoPanelNextButtonDomNode.addEventListener("click", () => {
            if (selectedFeatureIndex == selectedFeatures.length - 1) {
                selectedFeatureIndex = 0;
            } else {
                selectedFeatureIndex++;
            }
            updateInfoPanel();
        });

        // When the "prev" button is clicked, update the "selectedFeatureIndex"
        // and then call "updateInfoPanel" to update the panel info.
        infoPanelPrevButtonDomNode.addEventListener("click", () => {
            if (selectedFeatureIndex == 0) {
                selectedFeatureIndex = selectedFeatures.length - 1;
            } else {
                selectedFeatureIndex--;
            }
            updateInfoPanel();
        });

        // When the close button in the infoPanel is clicked, hide the panel by calling hideInfoPanel
        infoPanelCloseButtonDomNode.addEventListener("click", () => {
            hideInfoPanel();
        });

        view.when(() => {
            // Get the screen point from the view's click event
            view.on("click", function (event) {
                // Search for graphics at the clicked location.
                view.hitTest(event).then(function (response) {
                    // only get the graphics returned from myLayer
                    const graphicHits = response.results?.filter(
                        (hitResult) =>
                            hitResult.type === "graphic" &&
                            hitResult.graphic.layer === StateLayer
                    );
                    if (graphicHits?.length > 0) {
                        selectedFeatures = graphicHits.map((x) => x.graphic);
                        showInfoPanel();
                    } else {
                        hideInfoPanel();
                    }
                });
            });
        });



        //district popup

        view.whenLayerView(DistrictLayer).then(function (lvd) {
            layerView = lvd;
        });

        // Based on the global state variables selectedFeatures and selectedFeatureIndex, update the content of the
        // panel and highlight the selected.
        const updateInfoPaneld = () => {
            const feature = selectedFeatures[selectedFeatureIndex];
            highlightd?.remove();
            highlightd = layerView?.highlight(feature);
            // infoPanelTitleDomNoded.innerHTML = feature?.attributes?.district;
            infoPanelTitleDomNoded.innerHTML = `District:- ${feature?.attributes?.District_N}`;

            infoPanelContentDomNoded.innerHTML = `State:- ${feature?.attributes?.State_Name} `;
            infoPanelContentDomNoded1.innerHTML = ` Blocks Under ABY:- ${feature?.attributes?.block_ct}`;
            infoPanelContentDomNoded2.innerHTML = `  GPs Under ABY::- ${feature?.attributes?.gps}`;
            infoPanelContentDomNoded3.innerHTML = ` Villages Under ABY:- ${feature?.attributes?.vill_ct}`;



        };

        // Show the info panel
        const showInfoPaneld = () => {
            selectedFeatureIndex = 0;
            updateInfoPaneld();

            if (selectedFeatures.length > 1) {
                infoPanelButtonsDomNoded.classList.remove("hidden");
            } else {
                infoPanelButtonsDomNoded.classList.add("hidden");
            }

            infoPanelDomNoded.classList.remove("hidden");
        };

        // Hide the info panel
        const hideInfoPaneld = () => {
            infoPanelDomNoded.classList.add("hidden");
            highlightd?.remove();
        };

        // When the next button is clicked, update the "selectedFeatureIndex" and then call "updateInfoPanel" to update the panel info.
        infoPanelNextButtonDomNoded.addEventListener("click", () => {
            if (selectedFeatureIndex == selectedFeatures.length - 1) {
                selectedFeatureIndex = 0;
            } else {
                selectedFeatureIndex++;
            }

            updateInfoPaneld();
        });

        // When the "prev" button is clicked, update the "selectedFeatureIndex"
        // and then call "updateInfoPanel" to update the panel info.
        infoPanelPrevButtonDomNoded.addEventListener("click", () => {
            if (selectedFeatureIndex == 0) {
                selectedFeatureIndex = selectedFeatures.length - 1;
            } else {
                selectedFeatureIndex--;
            }
            updateInfoPaneld();
        });

        // When the close button in the infoPanel is clicked, hide the panel by calling hideInfoPanel
        infoPanelCloseButtonDomNoded.addEventListener("click", () => {
            hideInfoPaneld();
        });

        view.when(() => {
            // Get the screen point from the view's click event
            view.on("click", function (event) {
                // Search for graphics at the clicked location.
                view.hitTest(event).then(function (response) {
                    // only get the graphics returned from myLayer
                    const graphicHits = response.results?.filter(
                        (hitResult) =>
                            hitResult.type === "graphic" &&
                            hitResult.graphic.layer === DistrictLayer
                    );
                    if (graphicHits?.length > 0) {
                        selectedFeatures = graphicHits.map((x) => x.graphic);
                        showInfoPaneld();
                    } else {
                        hideInfoPaneld();
                    }
                });
            });
        });

        ///block layer popup

        view.whenLayerView(BlockLayer).then(function (lvb) {
            layerView = lvb;
        });

        // Based on the global state variables selectedFeatures and selectedFeatureIndex, update the content of the
        // panel and highlight the selected.
        const updateInfoPanelb = () => {
            const feature = selectedFeatures[selectedFeatureIndex];
            highlightb?.remove();
            highlightb = layerView?.highlight(feature);
            // infoPanelTitleDomNodeb.innerHTML = feature?.attributes?.block;
            infoPanelTitleDomNodeb.innerHTML = `Block:- ${feature?.attributes?.Block_Name}`;


            infoPanelContentDomNodeb.innerHTML = `District:- ${feature?.attributes?.District_N}.`;
            infoPanelContentDomNodeb1.innerHTML = `State:- ${feature?.attributes?.State_Name}.`;
            infoPanelContentDomNodeb2.innerHTML = `GPs Under ABY:- ${feature?.attributes?.gps}.`;
            infoPanelContentDomNodeb3.innerHTML = `Villages Under ABY:- ${feature?.attributes?.vill_count}.`;

        };

        // Show the info panel
        const showInfoPanelb = () => {
            selectedFeatureIndex = 0;
            updateInfoPanelb();

            if (selectedFeatures.length > 1) {
                infoPanelButtonsDomNodeb.classList.remove("hidden");
            } else {
                infoPanelButtonsDomNodeb.classList.add("hidden");
            }

            infoPanelDomNodeb.classList.remove("hidden");
        };

        // Hide the info panel
        const hideInfoPanelb = () => {
            infoPanelDomNodeb.classList.add("hidden");
            highlightb?.remove();
        };

        // When the next button is clicked, update the "selectedFeatureIndex" and then call "updateInfoPanel" to update the panel info.
        infoPanelNextButtonDomNodeb.addEventListener("click", () => {
            if (selectedFeatureIndex == selectedFeatures.length - 1) {
                selectedFeatureIndex = 0;
            } else {
                selectedFeatureIndex++;
            }

            updateInfoPanelb();
        });

        // When the "prev" button is clicked, update the "selectedFeatureIndex"
        // and then call "updateInfoPanel" to update the panel info.
        infoPanelPrevButtonDomNodeb.addEventListener("click", () => {
            if (selectedFeatureIndex == 0) {
                selectedFeatureIndex = selectedFeatures.length - 1;
            } else {
                selectedFeatureIndex--;
            }
            updateInfoPanelb();
        });

        // When the close button in the infoPanel is clicked, hide the panel by calling hideInfoPanel
        infoPanelCloseButtonDomNodeb.addEventListener("click", () => {
            hideInfoPanelb();
        });

        view.when(() => {
            // Get the screen point from the view's click event
            view.on("click", function (event) {
                // Search for graphics at the clicked location.
                view.hitTest(event).then(function (response) {
                    // only get the graphics returned from myLayer
                    const graphicHits = response.results?.filter(
                        (hitResult) =>
                            hitResult.type === "graphic" &&
                            hitResult.graphic.layer === BlockLayer
                    );
                    if (graphicHits?.length > 0) {
                        selectedFeatures = graphicHits.map((x) => x.graphic);
                        showInfoPanelb();
                    } else {
                        hideInfoPanelb();
                    }
                });
            });
        });



        ///gp layer popup

        view.whenLayerView(GPLayer).then(function (lvg) {
            layerView = lvg;
        });

        // Based on the global state variables selectedFeatures and selectedFeatureIndex, update the content of the
        // panel and highlight the selected.
        const updateInfoPanelg = () => {
            const feature = selectedFeatures[selectedFeatureIndex];
            highlightg?.remove();
            highlightg = layerView?.highlight(feature);
            // infoPanelTitleDomNodeb.innerHTML = feature?.attributes?.block;
            infoPanelTitleDomNodeg.innerHTML = `Gram Panchayat:- ${feature?.attributes?.gp_name1}`;
            infoPanelContentDomNodeg.innerHTML = `Block Name:- ${feature?.attributes?.bloc_name1} .`;
            infoPanelContentDomNodeg1.innerHTML = `District Name:- ${feature?.attributes?.dist_name1} .`;
            infoPanelContentDomNodeg2.innerHTML = `State Name:- ${feature?.attributes?.st_name1} .`;
            infoPanelContentDomNodeg3.innerHTML = ` Gram Panchayat Area:- ${feature?.attributes?.GP_AREA } .`;
            infoPanelContentDomNodeg4.innerHTML = ` Block Area :- ${feature?.attributes?.BLOC_AREA } .`;
            infoPanelContentDomNodeg5.innerHTML = ` Village Under ABY :- ${feature?.attributes?.VILL_NAME } .`;
            infoPanelContentDomNodeg6.innerHTML = ` Count Under ABY  :- ${feature?.attributes?.COUNT_VILL } .`;

        };


        // Show the info panel
        const showInfoPanelg = () => {
            selectedFeatureIndex = 0;
            updateInfoPanelg();

            if (selectedFeatures.length > 1) {
                infoPanelButtonsDomNodeg.classList.remove("hidden");
            } else {
                infoPanelButtonsDomNodeg.classList.add("hidden");
            }

            infoPanelDomNodeg.classList.remove("hidden");
        };

        // Hide the info panel
        const hideInfoPanelg = () => {
            infoPanelDomNodeg.classList.add("hidden");
            highlightg?.remove();
        };

        // When the next button is clicked, update the "selectedFeatureIndex" and then call "updateInfoPanel" to update the panel info.
        infoPanelNextButtonDomNodeg.addEventListener("click", () => {
            if (selectedFeatureIndex == selectedFeatures.length - 1) {
                selectedFeatureIndex = 0;
            } else {
                selectedFeatureIndex++;
            }

            updateInfoPanelg();
        });

        // When the "prev" button is clicked, update the "selectedFeatureIndex"
        // and then call "updateInfoPanel" to update the panel info.
        infoPanelPrevButtonDomNodeg.addEventListener("click", () => {
            if (selectedFeatureIndex == 0) {
                selectedFeatureIndex = selectedFeatures.length - 1;
            } else {
                selectedFeatureIndex--;
            }
            updateInfoPanelg();
        });

        // When the close button in the infoPanel is clicked, hide the panel by calling hideInfoPanel
        infoPanelCloseButtonDomNodeg.addEventListener("click", () => {
            hideInfoPanelg();
        });

        view.when(() => {
            // Get the screen point from the view's click event
            view.on("click", function (event) {
                // Search for graphics at the clicked location.
                view.hitTest(event).then(function (response) {
                    // only get the graphics returned from myLayer
                    const graphicHits = response.results?.filter(
                        (hitResult) =>
                            hitResult.type === "graphic" &&
                            hitResult.graphic.layer === GPLayer
                    );
                    if (graphicHits?.length > 0) {
                        selectedFeatures = graphicHits.map((x) => x.graphic);
                        showInfoPanelg();
                    } else {
                        hideInfoPanelg();
                    }
                });
            });
        });

        ////



    }
    document.getElementById("map_data_off").addEventListener("click", map_data_off);
   
    function map_data_off() {
        document.getElementById("info").style.display = "none";
        document.getElementById('map_data_off').style.visibility = 'hidden';
        document.getElementById('map_data').style.visibility = 'visible';

        false;


    }



    //popup hover ends

    const selectLayer = new GraphicsLayer();
    var highlight;






   






    $(document).ready(function () {
        $(".sidebar-dropdown > a").click(function () {
            $(".sidebar-submenu").slideUp(200);
            if ($(this).parent().hasClass("active")) {
                $(".sidebar-dropdown").removeClass("active");
                $(this).parent().removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this).next(".sidebar-submenu").slideDown(200);
                $(this).parent().addClass("active");
            }
        });

        $("#close-sidebar").click(function () {
            $(".page-wrapper").removeClass("toggled");
        });
        $("#close-sidebar").click(function () {
            $(".map_view").addClass("toggled");
        });
        $("#show-sidebar").click(function () {
            $(".page-wrapper").addClass("toggled");
        });
        $("#show-sidebar").click(function () {
            $(".map_view").removeClass("toggled");
        });
    });

    $(document).ready(function () {
        $(".tab-a").click(function () {
            $(".tab").removeClass("tab-active");
            $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active");
            $(".tab-a").removeClass("active-a");
            $(this).parent().find(".tab-a").addClass("active-a");
        });
    });
    // Second Tabs Start
    $(document).ready(function () {
        $(".tab-sec").click(function () {
            $(".tab_sec").removeClass("tab-active-sec");
            $(".tab_sec[data-id='" + $(this).attr("data-id") + "']").addClass(
                "tab-active-sec"
            );
            $(".tab-sec").removeClass("tab_sec_active");
            $(this).parent().find(".tab-sec").addClass("tab_sec_active");
        });
    });

    // Modal Add Custom Js
    let attributeBtn = document.querySelector("#show_attributes");
    let modalBox = document.querySelector(".modal_view");
    let closeBtn = document.querySelector("#close_button");
    let countBtn = document.querySelector("#show_count");
    let secModalBox = document.querySelector(".sec_modal_view");
    let secBtn = document.querySelector("#close_button_sec");
    let infoBtn = document.querySelector('#info_icons');
    let imgBox = document.querySelector('.imgBox');

    infoBtn.addEventListener('click', () => {
        imgBox.classList.toggle('active');
    })

    countBtn.addEventListener("click", () => {
        secModalBox.classList.toggle("active");
    });

    attributeBtn.addEventListener("click", () => {
        modalBox.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        modalBox.classList.toggle("active");
    });

    secBtn.addEventListener("click", () => {
        secModalBox.classList.toggle("active");
    });


    // let waterBtn = document.querySelector('.water_close');
    let waterBox1 = document.querySelector('.box_shadow1');
    let rangeBtn = document.querySelector('.rain_close');
    let waterBox2 = document.querySelector('.box_shadow2');
    let wlBtn = document.querySelector('.wl_close');
    let waterBox3 = document.querySelector('.box_shadow3');
    let wfBtn = document.querySelector('.wf_close');
    let waterBox4 = document.querySelector('.box_shadow4');

    // waterBtn.onclick = () => {
    //     waterBox1.style.display = 'none';
    // };

    rangeBtn.onclick = () => {
        waterBox2.style.display = 'none';
    };

    wlBtn.onclick = () => {
        waterBox3.style.display = 'none';
    };


    wfBtn.onclick = () => {
        waterBox4.style.display = 'none';
    };




    ///////  Below is the code for related Data

   


    ///////


   





    //////





    var selectionButton = document.getElementById("cntry");

    selectionButton.addEventListener("click", function () {
        // Hide all layers
        StateLayer.visible = false;
        DistrictLayer.visible = false;
        BlockLayer.visible = false;
        GPLayer.visible = false;

        // Show the selected layer
        // For example, if you want to show featureLayer1 when it's selected
        StateLayer.visible = true;
    });


    var selectionButtonD = document.getElementById("District");

    selectionButtonD.addEventListener("click", function () {
        // Hide all layers
        StateLayer.visible = false;
        DistrictLayer.visible = false;
        BlockLayer.visible = false;
        GPLayer.visible = false;

        // Show the selected layer
        // For example, if you want to show featureLayer1 when it's selected
        DistrictLayer.visible = true;
    });


    var selectionButtonB = document.getElementById("Block");

    selectionButtonB.addEventListener("click", function () {
        // Hide all layers
        StateLayer.visible = false;
        DistrictLayer.visible = false;
        BlockLayer.visible = false;
        GPLayer.visible = false;

        // Show the selected layer
        // For example, if you want to show featureLayer1 when it's selected
        BlockLayer.visible = true;
    });


    var selectionButtonG = document.getElementById("Gram");

    selectionButtonG.addEventListener("click", function () {
        // Hide all layers
        StateLayer.visible = false;
        DistrictLayer.visible = false;
        BlockLayer.visible = false;
        GPLayer.visible = false;

        // Show the selected layer
        // For example, if you want to show featureLayer1 when it's selected
        GPLayer.visible = true;
    });


    ////

    ///Well Inventory Statstics
    const baseUrl = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MapWellInventory/MapServer/0/query';

    // Get the select element
    const stateSelect = document.getElementById("cntry");

    // Event listener for the "change" event on the select element
    stateSelect.addEventListener("change", function () {
        // Get the selected district code
        const selectedstate = stateSelect.value;

        // Construct the query URL
        const queryParams = new URLSearchParams({
            where: `state = '${selectedstate}'`,
            returnCountOnly: true,
            f: 'pjson'
        });

        const url = `${baseUrl}?${queryParams}`;

        fetchDataForState(url);
    });

    async function fetchDataForState(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log("Well Inventory", data);

            const wellCountElementd = document.getElementById("well_count");
            wellCountElementd.textContent = data.count;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const baseUrld = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MapWellInventory/MapServer/0/query';
    const districtSelect = document.getElementById("District");
    districtSelect.addEventListener("change", function () {
        const selectedDistrict = districtSelect.value;
        const queryParamsd = new URLSearchParams({
            where: `district = '${selectedDistrict}'`,
            returnCountOnly: true,
            f: 'pjson'
        });

        const urld = `${baseUrld}?${queryParamsd}`;

        fetchDataForStated(urld);
    });

    async function fetchDataForStated(urld) {
        try {
            const response = await fetch(urld);
            const data = await response.json();

            console.log("Well Inventory", data);

            const wellCountElementd = document.getElementById("well_count");
            wellCountElementd.textContent = data.count;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const baseUrlb = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MapWellInventory/MapServer/0/query';
    const blockSelect = document.getElementById("Block");
    blockSelect.addEventListener("change", function () {
        const selectedblock = blockSelect.value;
        const queryParamsb = new URLSearchParams({
            where: `block = '${selectedblock}'`,
            returnCountOnly: true,
            f: 'pjson'
        });

        const urlb = `${baseUrlb}?${queryParamsb}`;

        fetchDataForStated(urlb);
    });

    async function fetchDataForStated(urlb) {
        try {
            const response = await fetch(urlb);
            const data = await response.json();

            console.log("Well Inventory", data);

            const wellCountElementd = document.getElementById("well_count");
            wellCountElementd.textContent = data.count;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }                 

    //
    const baseUrlt = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/MapWellInventory/MapServer/0/query';

    // Function to get the count of all features in the specified layer
    async function fetchTotalCount() {
        const queryParams = new URLSearchParams({
            where: '1=1', // Condition that always evaluates to true to get all records
            returnCountOnly: 'true',
            f: 'json'
        });

        const url = `${baseUrlt}?${queryParams}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Displaying the count in the console
            console.log("Total Count:", data.count);
            return data.count; // Return the count if needed for further use
           // const wellCountElementt = document.getElementById("well_count");
           // wellCountElementt.textContent = data.count;

        } catch (error) {
            console.error('Error fetching data:', error);
            return null; // Return null or handle the error as required
        }
    }

    // Event listener for the executeQueriesButton click event
    const executeQueriesButton = document.getElementById("executeQueriesButton");

    executeQueriesButton.addEventListener("click", async function () {
        // Call the function to fetch the total count when the button is clicked
        const totalCount = await fetchTotalCount();
        $("#well_count").text(totalCount);
        // Use the totalCount as needed here
       
    });



 Rainguage.popupTemplate = new PopupTemplate({
        title: "Rainfall Data",
        content: createCustomPopupContentR,
    });

    function createCustomPopupContentR(feature) {
       
        const attributesrg = feature.graphic.attributes;
        function showNewPopupR() {
            const newPopupR = document.getElementById('newPopupR');
            newPopupR.style.display = 'block';
        }
        const button = document.createElement("button");
        button.id = "rainfall_id";
        button.innerText = "View Data";
        button.addEventListener("click", () => {
            console.log("Rainfall ID ", attributesrg.id)
           var valuer = attributesrg.id;
            if (valuer == "") {
                alert("Plase Enter Rainguage Id");
                return false;
            }
            else {
                $('#rainflow_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_rainfall",
                    data: "{'id':'" + valuer + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                      
                        if (response == "Logout") {
                            window.location = "/WspNew/WSP_GWM_HOME";
                        }
                        var Tbodyhtml = '';
                        if (response == 'No Data') {
                            Tbodyhtml = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
                            $('#rainfalltbl_details').html(Tbodyhtml);

                        }
                        else if (response == 'Error') {
                            $('#rainfalltbl_details').hide();
                        }
                        else {
                            var curr_date;
                            var curr_month;
                            var curr_year;
                            for (var i = 0; i < response.length; i++) {
                                if (response[i].rf_date == null) {
                                    curr_date = "";
                                    curr_month = "";
                                    curr_year = "";
                                } else {
                                    var nowDate = new Date(parseInt(response[i].rf_date.substr(6)))
                                    curr_date = nowDate.getDate();
                                    curr_month = nowDate.getMonth() + 1;    // months are zero based
                                    curr_year = nowDate.getFullYear();
                                }
                                Tbodyhtml += '<tr id="AWP1_TR_data_waterflow' + i + '"><td id="srNo">' + (i + 1) + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].rf_meta_id + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].rf_reading + '</td>';
                                Tbodyhtml += '<td id="vill">' + curr_year + "-" + curr_month + "-" + curr_date + '</td></tr>';


                            }
                            $('#rainfalltbl_details').html(Tbodyhtml);

                        }
                    }
                });
            }
            showNewPopupR();
        });
        const stateValue = attributesrg.statename;
        const distValue = attributesrg.districtna;
        const blockValue = attributesrg.blockname;
        const gpValue = attributesrg.gpname;
        const stateParts = stateValue.split('_');
        const distParts = distValue.split('_');
        const blockParts = blockValue.split('_');
        const gpParts = gpValue.split('_');
        const displayedState = stateParts.length > 0 ? stateParts[0] : stateValue;
        const displayedDist = distParts.length > 0 ? distParts[0] : distValue;
        const displayedBlock = blockParts.length > 0 ? blockParts[0] : blockValue;
        const displayeGP = gpParts.length > 0 ? gpParts[0] : gpValue;
        const formattedLatitude = parseFloat(attributesrg.latitude).toFixed(4);
        const formattedLongitude = parseFloat(attributesrg.longitude).toFixed(4);
        const popupContentR = document.createElement("divr");
        popupContentR.innerHTML = `
       <strong>ID:</strong> ${attributesrg.id}<br>
      <strong>State:</strong>    ${displayedState}<br>
      <strong>District:</strong>   ${displayedDist}<br>
      <strong>Block:</strong>   ${displayedBlock}<br>
      <strong>Gram Panchayat:</strong>   ${displayeGP}<br>
      <strong>Village Name: </strong>  ${attributesrg.village}<br>
      <strong>Latitude:</strong>  ${formattedLatitude}<br>
      <strong> Longitude:</strong>  ${formattedLongitude}<br>
      <strong>Rainguage:</strong>   ${attributesrg.raingauge}<br>
      <strong>Well:</strong>   ${attributesrg.well}<br>
      <strong> Location Details:</strong>  ${attributesrg.locationde}<br>
      <strong> Date(YYYY-MM-DD):</strong>  ${attributesrg.date_time}<br>
      <strong> Status:</strong>  ${attributesrg.status}<br>
   
     `;
        popupContentR.appendChild(button);
        return popupContentR;


        /// for graph in rg

        const chartData = [
            { category: "Rainfall", value: attributesrg.rainfallValue },
            { category: "Other", value: attributesrg.otherValue },
            // Add more data points as needed
        ];

        // Define a chart object
        const chart = {
            type: "bar", // Bar chart type
            title: "Rainfall Data", // Chart title
            labels: chartData.map(item => item.category),
            datasets: [
                {
                    data: chartData.map(item => item.value),
                    backgroundColor: "blue", // Bar color
                },
            ],
        };

        // Create a chart graphic and add it to the popup content
        const chartGraphic = {
            type: "chart",
            chart: chart,
        };
        feature.popupTemplate.content = [chartGraphic];

        ///
    }
    const closeButtonr = document.getElementById('closePopupR');
    closeButtonr.addEventListener("click", () => {
        const newPopupR = document.getElementById('newPopupR');
        newPopupR.style.display = 'none';
    });




    WaterLevel.popupTemplate = new PopupTemplate({
        title: "Water Level",
        content: createCustomPopupContentW,
    });
    function createCustomPopupContentW(feature) {
     const attributeswl = feature.graphic.attributes;
        function showNewPopup() {
            const newPopup = document.getElementById('newPopup');
            newPopup.style.display = 'block';
        }
        const button = document.createElement("button");
        button.id = "gwl_id";
        button.innerText = "View Data";
         button.addEventListener("click", () => {
            console.log("Water Level ID ", attributeswl.id)
            var value = attributeswl.id;
            //var value = $('#gwl_id').val();
            if (value == "") {
                alert("Please Enter Water level Id");
                return false;
            }
            else {
                $('#gwl_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_gwl",
                    data: "{'id':'" + value + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        if (response == "Logout") {
                            window.location = "/WspNew/WSP_GWM_HOME";
                        }
                        var Tbodyhtml = '';
                        if (response == 'No Data') {
                            Tbodyhtml = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
                            $('#tbl_details').html(Tbodyhtml);

                        }
                        else if (response == 'Error') {
                            $('#gwl_datatable').hide();
                        }
                        else {
                           var curr_date ;
                           var curr_month ;
                           var curr_year ;
                            for (var i = 0; i < response.length; i++) {
                                if (response[i].gwl_date == null) {
                                    curr_date = "";
                                    curr_month = "";
                                    curr_year = "";
                                } else {
                                    var nowDate = new Date(parseInt(response[i].gwl_date.substr(6)))
                                    curr_date = nowDate.getDate();
                                    curr_month = nowDate.getMonth() + 1;    // months are zero based
                                    curr_year = nowDate.getFullYear();
                                }
                                Tbodyhtml += '<tr id="AWP1_TR_data_waterflow' + i + '"><td id="srNo">' + (i + 1) + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].gwl_meta_id + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].gwl_reading + '</td>';
                                Tbodyhtml += '<td id="vill">' + curr_year + "-" + curr_month + "-" + curr_date + '</td></tr>';
                                

                            }
                            $('#tbl_details').html(Tbodyhtml);
                        }

                    }
                });
            }
            showNewPopup();
        });
        const stateValuewl = attributeswl.state;
        const distValuewl = attributeswl.district;
        const blockValuewl = attributeswl.block;
        const gpValuewl = attributeswl.grampancha;
        const dateStr = attributeswl.datetime;
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('en-US', {
           day: '2-digit',
            month: '2-digit',
            year: 'numeric'
            
        });
        const statePartswl = stateValuewl.split('_');
        const distPartswl = distValuewl.split('_');
        const blockPartswl = blockValuewl.split('_');
        const gpPartwls = gpValuewl.split('_');
        const displayedStatewl = statePartswl.length > 0 ? statePartswl[0] : stateValuewl;
        const displayedDistwl = distPartswl.length > 0 ? distPartswl[0] : distValuewl;
        const displayedBlockwl = blockPartswl.length > 0 ? blockPartswl[0] : blockValuewl;
        const displayeGPwl = gpPartwls.length > 0 ? gpPartwls[0] : gpValuewl;
        const formattedLatitude = parseFloat(attributeswl.latitude).toFixed(4);
        const formattedLongitude = parseFloat(attributeswl.longitude).toFixed(4);
        const popupContent = document.createElement("divd");

        popupContent.innerHTML = `
       <strong>ID:</strong> ${attributeswl.id}<br>
      <strong>State:</strong>   ${displayedStatewl}<br>
      <strong>District:</strong>   ${displayedDistwl}<br>
      <strong>Block:</strong>   ${displayedBlockwl}<br>
      <strong>Gram Panchayat:</strong>   ${displayeGPwl}<br>
      <strong>Site Name: </strong>  ${attributeswl.sitename}<br>
      <strong>Type Of Well:</strong>   ${attributeswl.typeofwell}<br>
      <strong>Source Ownership: </strong>  ${attributeswl.source_o_1}<br>
       <strong>Latitude:</strong>  ${formattedLatitude}<br>
      <strong> Longitude:</strong>  ${formattedLongitude}<br>
      <strong>Well ID:</strong>   ${attributeswl.wellid}<br>
      <strong>Well:</strong>   ${attributeswl.well}<br>
      <strong> Location Details:</strong>  ${attributeswl.locationde}<br>
      <strong> Well Type:</strong>  ${attributeswl.other_well_type}<br>
      <strong> Diameter Of Well (m):</strong>  ${attributeswl.diameter_o}<br>
        <strong> Depth Of Well(mbmp):</strong>  ${attributeswl.welldepth}<br>
      <strong>Height Of Measuring Point (magl):</strong>   ${attributeswl.height_of_}<br>
      <strong> Source Ownership Type: </strong> ${attributeswl.source_o_1}<br>
      
     `;
        popupContent.appendChild(button);

        return popupContent;
    }
    const closeButton = document.getElementById('closePopup');
    closeButton.addEventListener("click", () => {
        const newPopup = document.getElementById('newPopup');
        newPopup.style.display = 'none';
    });




    WaterFlow.popupTemplate = new PopupTemplate({
        title: "Water Flow Meter Data",
        content: createCustomPopupContentWF,
    });
    function createCustomPopupContentWF(feature) {
        const attributeswf = feature.graphic.attributes;
        function showNewPopupwf() {
            const newPopup = document.getElementById('newPopupWf');
            newPopup.style.display = 'block';
        }
        const button = document.createElement("button");
        button.id = "flow_id";
        button.innerText = "View Data";
        button.addEventListener("click", () => {
            console.log("Water Flow ID: ", attributeswf.id);
            var valuewf = attributeswf.id;
            if (valuewf == "") {
                alert("Please Enter Water Flow Id");
                return false;
            }
            else {
                $('#flow_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_flow",
                    data: "{'id':'" + valuewf + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        if (response == "Logout") {
                            window.location = "/WspNew/WSP_GWM_HOME";
                        }
                        var Tbodyhtml = '';
                        if (response == 'No Data') {
                            Tbodyhtml = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
                            $('#flowtbl_details').html(Tbodyhtml);

                        }
                        else if (response == 'Error') {
                            $('#flowtbl_details').hide();
                        }
                        else {
                            for (var i = 0; i < response.length; i++) {
                                Tbodyhtml += '<tr id="AWP1_TR_data_waterflow' + i + '"><td id="srNo">' + (i + 1) + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].wf_meta_id + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].MeterReading + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].WaterReading_Date + '</td></tr >';

                            }
                            $('#flowtbl_details').html(Tbodyhtml);
                        }

                    }
                });
            }
        showNewPopupwf();
        });
        const stateValuewf = attributeswf.state;
        const distValuewf = attributeswf.district;
        const blockValuewf = attributeswf.block;
        const gpValuewf = attributeswf.grampancha;
        const statePartswf = stateValuewf.split('_');
        const distPartswf = distValuewf.split('_');
        const blockPartswf = blockValuewf.split('_');
        const gpPartwf = gpValuewf.split('_');
        const displayedStatewf = statePartswf.length > 0 ? statePartswf[0] : stateValuewf;
        const displayedDistwf = distPartswf.length > 0 ? distPartswf[0] : distValuewf;
        const displayedBlockwf = blockPartswf.length > 0 ? blockPartswf[0] : blockValuewf;
        const displayeGPwf = gpPartwf.length > 0 ? gpPartwf[0] : gpValuewf;
        const formattedLatitude = parseFloat(attributeswf.latitude).toFixed(4);
        const formattedLongitude = parseFloat(attributeswf.longitude).toFixed(4);

        const popupContentwf = document.createElement("divwf");
        popupContentwf.innerHTML = `
       <strong> ID:</strong> ${attributeswf.id}<br>
      <strong>State:</strong>   ${displayedStatewf}<br>
      <strong>District:</strong>   ${displayedDistwf}<br>
      <strong>Block:</strong>   ${displayedBlockwf}<br>
      <strong>Gram Panchayat:</strong>   ${displayeGPwf}<br>
      <strong>Village:</strong>   ${attributeswf.village}<br>
      <strong>Location Details:</strong>   ${attributeswf.locationde}<br>
      <strong>Latitude:</strong>   ${formattedLatitude}<br>
      <strong>Longitude:</strong>   ${formattedLongitude}<br>
      <strong>Date Of Entry:</strong>   ${attributeswf.dateofentr}<br>
      <strong>Owner Name:</strong>   ${attributeswf.ownername}<br>
      <strong>Well Type:</strong>   ${attributeswf.welltype}<br>
      <strong>Pump Type:</strong>   ${attributeswf.pumptype}<br>
      <strong>Water Flow Meter Installation Date:</strong> ${attributeswf.waterflowm}<br>
       <strong>Area Irrigated (ha):</strong>  ${attributeswf.areairriga}<br>
      <strong>Crop Irrigated:</strong>   ${attributeswf.cropirriga}<br>
      <strong>Unit Reading:</strong>   ${attributeswf.unitreadin}<br>
      <strong>Meter ID:</strong>   ${attributeswf.meterid}<br>
      <strong>Date (YYYY-MM-DD):</strong>   ${attributeswf.entry_date}<br>
             
     `;
     popupContentwf.appendChild(button);

        return popupContentwf;
    }

    const closeButtonwf = document.getElementById('closePopupWF');
    closeButtonwf.addEventListener("click", () => {
        const newPopup = document.getElementById('newPopupWf');
        newPopup.style.display = 'none';
    });

   
    Well.popupTemplate = new PopupTemplate({
        title: "Well Inventory",
        content: createCustomPopupContentWell,
    });

    function createCustomPopupContentWell(feature) {
        const attributeswell = feature.graphic.attributes;
         const stateValuewell = attributeswell.state;
        const distValuewell = attributeswell.district;
        const blockValuewell = attributeswell.block;
        const gpValuewell = attributeswell.gp;
        const dateStr = attributeswell.datetime;
       
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'

        });

        const statePartswell = stateValuewell.split('_');
        const distPartswell = distValuewell.split('_');
        const blockPartswell = blockValuewell.split('_');
        const gpPartwell = gpValuewell.split('_');
         const displayedStatewell = statePartswell.length > 0 ? statePartswell[0] : stateValuewell;
        const displayedDistwell = distPartswell.length > 0 ? distPartswell[0] : distValuewell;
        const displayedBlockwell = blockPartswell.length > 0 ? blockPartswell[0] : blockValuewell;
        const displayeGPwell = gpPartwell.length > 0 ? gpPartwell[0] : gpValuewell;
        const formattedLatitude = parseFloat(attributeswell.latitude).toFixed(4);
        const formattedLongitude = parseFloat(attributeswell.longitude).toFixed(4);
         const popupContentwell = document.createElement("div");
        popupContentwell.innerHTML = `
        <strong>ID:</strong> ${attributeswell.gid}<br>
        <strong>State:</strong> ${displayedStatewell}<br>
        <strong>District:</strong> ${displayedDistwell}<br>
        <strong>Block:</strong> ${displayedBlockwell}<br>
        <strong>Gram Panchayat:</strong> ${displayeGPwell}<br>
<strong>Latitude:</strong> ${formattedLatitude}<br>
<strong>Longitude:</strong> ${formattedLongitude}<br>
        <strong>Date (YYYY/MM/DD):</strong> ${attributeswell.datetime}<br>
        <strong>Location Details:</strong> ${attributeswell.locationdetails}<br>
 <strong>Measuring Point (magl):</strong> ${attributeswell.measuringpoint}<br>
<strong>Water Level Depth :</strong> ${attributeswell.waterleveldepth}<br>
<strong>Vllage :</strong> ${attributeswell.village}<br>
<strong>Use :</strong> ${attributeswell.use}<br>
<strong>Electric Meter :</strong> ${attributeswell.electricmeterselecteditem}<br>
<strong>Well Type Other :</strong> ${attributeswell.well_type_other}<br>
<strong>Site Name :</strong> ${attributeswell.sitename}<br>
<strong>Well Diameter (m) :</strong> ${attributeswell.welldiameter}<br>
<strong>Well Depth (mbmp) :</strong> ${attributeswell.welldepth}<br>
      
    `;

        return popupContentwell;
    }

    view.on("click", function (event) {
        
        view.hitTest(event).then(function (response) {
            if (response.results.length) {
                const feature = response.results[0].graphic;
                view.popup.open({
                    title: "Well Inventory",
                    content: createCustomPopupContentW(feature),
                    location: event.mapPoint, 
                });
            }
        });
    });


    ///////waterquality


    WaterQuality.popupTemplate = new PopupTemplate({
        title: "Water Quality",
        content: createCustomPopupContentWQ,
    });

    function createCustomPopupContentWQ(feature) {
        const attributesWQ = feature.graphic.attributes;
        function showNewPopupwq() {
            const newPopup = document.getElementById('newPopupwq');
            newPopup.style.display = 'block';
        }
        const buttonElement = document.createElement("button");
        buttonElement.id = "wq_id";
        buttonElement.textContent = "View Data";
        buttonElement.addEventListener("click", () => {
            console.log("Water Qualiity ID: ", attributesWQ.id);
            var valuewq = attributesWQ.id;
            if (valuewq == "") {
                alert("Please Enter Water Quality Id");
                return false;
            }
            else {
                $('#wq_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_wq",
                    data: "{'id':'" + valuewq + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        if (response == "Logout") {
                            window.location = "/WspNew/WSP_GWM_HOME";
                        }
                        var Tbodyhtml = '';
                        if (response == 'No Data') {
                            Tbodyhtml = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
                            $('#wqtbl_details').html(Tbodyhtml);

                        }
                        else if (response == 'Error') {
                            $('#wqtbl_details').hide();
                        }
                        else {
                            for (var i = 0; i < response.length; i++) {
                                Tbodyhtml += '<tr id="AWP1_TR_data_waterflow' + i + '"><td id="srNo">' + (i + 1) + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].pv_meta_id + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].well_id + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].aquifer + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].formation + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].ph + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].ec + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].th + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].calcium + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].magnesium + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].sodium + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].potassium + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].carbonate + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].bicarbonate + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].sulphate + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].chloride + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].fluoride + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].nitrate + '</td></tr >';

                            }
                            $('#wqtbl_details').html(Tbodyhtml);
                        }

                    }
                });
            }
            showNewPopupwq();
        });
        const stateValueWQ = attributesWQ.state;
        const distValueWQ = attributesWQ.district;
        const blockValueWQ = attributesWQ.block;
        const gpValueWQ = attributesWQ.gp;
        const dateStr = attributesWQ.datetime;

        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'

        });
        const statePartsWQ = stateValueWQ.split('_');
        const distPartsWQ = distValueWQ.split('_');
        const blockPartsWQ = blockValueWQ.split('_');
        const gpPartWQ = gpValueWQ.split('_');
        const displayedStateWQ = statePartsWQ.length > 0 ? statePartsWQ[0] : stateValueWQ;
        const displayedDistWQ = distPartsWQ.length > 0 ? distPartsWQ[0] : distValueWQ;
        const displayedBlockWQ = blockPartsWQ.length > 0 ? blockPartsWQ[0] : blockValueWQ;
        const displayeGPWQ = gpPartWQ.length > 0 ? gpPartWQ[0] : gpValueWQ;
        const formattedLatitude = parseFloat(attributesWQ.latitude).toFixed(4);
        const formattedLongitude = parseFloat(attributesWQ.longitude).toFixed(4);

        const popupContentWQ = document.createElement("div");
        popupContentWQ.innerHTML = `
        <strong>ID:</strong> ${attributesWQ.id}<br>
        <strong>State:</strong> ${displayedStateWQ}<br>
        <strong>District:</strong> ${displayedDistWQ}<br>
        <strong>Block:</strong> ${displayedBlockWQ}<br>
        <strong>Gram Panchayat:</strong> ${displayeGPWQ}<br>
<strong>Village:</strong> ${attributesWQ.village}<br>
        <strong>Site Name:</strong> ${attributesWQ.site_name}<br>
        <strong>Well Type:</strong> ${attributesWQ.well_type}<br>
 <strong>Source (magl):</strong> ${attributesWQ.source}<br>
<strong>Well ID :</strong> ${attributesWQ.well_id}<br>
<strong>Latitude :</strong> ${formattedLatitude}<br>
<strong>Longitude :</strong> ${formattedLongitude}<br>
<strong>Well Depth (mbgl) :</strong> ${attributesWQ.well_depth}<br>
<strong>Acquifier :</strong> ${attributesWQ.aquifer}<br>



      
    `;
        const buttonContainer = document.createElement("div");
        buttonContainer.appendChild(buttonElement);
        popupContentWQ.appendChild(buttonElement);
        return popupContentWQ;
    }

    //view.on("click", function (event) {

    //    view.hitTest(event).then(function (response) {
    //        if (response.results.length) {
    //            const feature = response.results[0].graphic;
    //            view.popup.open({
    //                title: "Water Quality",
    //                content: createCustomPopupContentWQ(feature),
    //                location: event.mapPoint,
    //            });
    //        }
    //    });
    //});

    const closeButtonwq = document.getElementById('closePopupwq');
    closeButtonwq.addEventListener("click", () => {
        const newPopup = document.getElementById('newPopupwq');
        newPopup.style.display = 'none';
    });




     ArtificialResourceLayer.popupTemplate = new PopupTemplate({
        title: "ARS & WCS",
        content: createCustomPopupContentARS,
    });

    function createCustomPopupContentARS(feature) {
        const attributesARS = feature.graphic.attributes;

        const stateValueARS = attributesARS.statename;
        const distValueARS = attributesARS.districtna;
        const blockValueARS = attributesARS.blockname;
        const gpValueARS = attributesARS.gpname;
     
        const statePartsARS = stateValueARS.split('_');
        const distPartsARS = distValueARS.split('_');
        const blockPartsARS = blockValueARS.split('_');
        const gpPartARS = gpValueARS.split('_');

        const dateStr = attributesARS.date;
        
        const date = new Date(dateStr);
         const formattedDate = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'

        });
       
        const displayedStateARS = statePartsARS.length > 0 ? statePartsARS[0] : stateValueARS;
        const displayedDistARS = distPartsARS.length > 0 ? distPartsARS[0] : distValueARS;
        const displayedBlockARS = blockPartsARS.length > 0 ? blockPartsARS[0] : blockValueARS;
        const displayeGPARS = gpPartARS.length > 0 ? gpPartARS[0] : gpValueARS;
        const formattedLatitude = parseFloat(attributesARS.latitude).toFixed(4);
        const formattedLongitude = parseFloat(attributesARS.longitude).toFixed(4);
        const popupContentARS = document.createElement("divge");
        popupContentARS.innerHTML = `
        <strong>ID:</strong> ${attributesARS.id}<br>
        <strong>State:</strong> ${displayedStateARS}<br>
        <strong>District:</strong> ${displayedDistARS}<br>
        <strong>Block:</strong> ${displayedBlockARS}<br>
        <strong>Gram Panchayat:</strong> ${displayeGPARS}<br>
<strong>Village:</strong> ${attributesARS.village}<br>
<strong>Date (MM/DD/YYYY):</strong> ${formattedDate}<br>
        <strong>Type Of Structure:</strong> ${attributesARS.typeofstru}<br>
        <strong>Storage Capacity:</strong> ${attributesARS.storagecap}<br>
 <strong>No. Of Fillings:</strong> ${attributesARS.nooffillin}<br>
<strong>Device ID :</strong> ${attributesARS.deviceid}<br>
<strong>Latitude :</strong> ${formattedLatitude}<br>
<strong>Longitude :</strong> ${formattedLongitude}<br>
<strong>Others :</strong> ${attributesARS.others}<br>
<strong>Site Name :</strong> ${attributesARS.sitename}<br>
<strong>Location Details :</strong> ${attributesARS.locationde}<br>
    `;

        return popupContentARS;
    }

    
    view.on("click", function (event) {
        // Check if a feature is clicked
        view.hitTest(event).then(function (response) {
            if (response.results.length) {
                const feature = response.results[0].graphic;
                view.popup.open({
                    title: "ARS & WCS",
                    content: createCustomPopupContentARS(feature),
                    location: event.mapPoint, 
                });
            }
        });
    });



    var graphicsLayer = view.graphics; 

   
    document.getElementById("searchButton").addEventListener("click", function () {
        var input = document.getElementById("searchInput").value;
        var coordinates = input.split(",");

        if (coordinates.length === 2) {
            var latitude = parseFloat(coordinates[0]);
            var longitude = parseFloat(coordinates[1]);

            if (!isNaN(latitude) && !isNaN(longitude)) {
                // Create a new center point
                var centerPoint = new Point({
                    latitude: latitude,
                    longitude: longitude
                });

               
                var markerSymbol = new SimpleMarkerSymbol({
                    style: "diamond", // Set the symbol style to diamond
                    color: [226, 119, 40], // RGB color for the marker
                    outline: {
                        color: [255, 255, 255], // RGB color for the marker outline
                        width: 2
                    },
                    size: 15 // Size of the marker symbol
                });


                // Create a graphic with the marker symbol
                var centerPointGraphic = new Graphic({
                    geometry: centerPoint,
                    symbol: markerSymbol
                });

                graphicsLayer.removeAll(); // Remove existing graphics
                graphicsLayer.add(centerPointGraphic); // Add the center point graphic

                // Use the view's goTo method to zoom to the new center point
                view.goTo({
                    target: centerPoint,
                    zoom: 14 // You can adjust the zoom level as needed
                });
            } else {
                alert("Invalid latitude and longitude.");
            }
        } else {
            alert("Please enter latitude and longitude in the format 'latitude,longitude'.");
        }
    });




    var coordinatesDiv = document.getElementById("coordinates");

  // Create an event listener for mouse move events
  view.on("pointer-move", function (event) {
    var coords = view.toMap({ x: event.x, y: event.y });
    var lat = coords.latitude.toFixed(4);
    var lon = coords.longitude.toFixed(4);
      var latColor = lat >= 0 ? "blue" : "red"; // Green for positive, red for negative
      var lonColor = lon >= 0 ? "blue" : "red"; // Blue for positive, orange for negative

      // Wrap latitude and longitude values with <span> for bold text
      var htmlContent = "Latitude: <span style='color:" + latColor + "; font-weight: bold;'>" + lat + "</span>, Longitude: <span style='color:" + lonColor + "; font-weight: bold;'>" + lon + "</span>";
      coordinatesDiv.innerHTML = htmlContent;
  });



    // Function to execute all queries
    function executeAllQueries() {
        var queryPromises = [];

        function executeQuery(layer, elementToUpdate) {
            var query = new Query();
            query.where = "1=1"; // Set a condition if needed, or use "1=1" to get all features
            query.returnGeometry = false;
            query.returnCountOnly = true; // Set returnCountOnly property within the Query object

            return layer.queryFeatures(query).then(function (result) {
                var featureCount = result.features.length;
                $(elementToUpdate).text(featureCount);
            });
        }

        // Define and push all query promises
        queryPromises.push(executeQuery(ArtificialResourceLayer, "#ar_count"));
       // queryPromises.push(executeQuery(Well, "#well_count"));
        queryPromises.push(executeQuery(WaterLevel, "#wl_count"));
        queryPromises.push(executeQuery(WaterQuality, "#wq_count"));
        queryPromises.push(executeQuery(Rainguage, "#rg_count"));
        queryPromises.push(executeQuery(WaterFlow, "#wf_count"));

        // Execute all queries concurrently
        Promise.all(queryPromises)
            .then(function () {
                console.log("All queries executed successfully.");
                // You can perform additional actions after all queries are executed here if needed.
                updateStatistics();
            })
            .catch(function (error) {
                console.error("An error occurred:", error);
            });
    }

    // Button click event to execute all queries
    document.getElementById('executeQueriesButton').addEventListener('click', executeAllQueries);


    /////


    function updateStatistics(event) {
        var selectedDropdown = 'cntry'; // Default value

        if (event && event.target && event.target.id) {
            selectedDropdown = event.target.id;
        }
 // Set the default dropdown to 'cntry' if no event is provided
        var selectedElement = document.getElementById(selectedDropdown);
        var selectedValue = selectedElement.value;

        // Split the value after an underscore and get the second part
        var textOnly = selectedValue.split('_')[0] || '--ALL--';

        // Update the dynamic value
        document.getElementById('dynamicValue').textContent = textOnly;
    }

    // Attach event listeners to the dropdowns
    document.getElementById('cntry').addEventListener('change', updateStatistics);
    document.getElementById('District').addEventListener('change', updateStatistics);
    document.getElementById('Block').addEventListener('change', updateStatistics);
    document.getElementById('Gram').addEventListener('change', updateStatistics);

   
    updateStatistics({});

   //

    document.addEventListener("click", function (event) {
        var dropdown = document.getElementById("dropdown");
        var dropdownBtn = document.getElementById("dropdownBtn");

        if (!dropdown.contains(event.target) && event.target !== dropdownBtn) {
            var dropdownContent = document.getElementById("dropdownContent");
            dropdownContent.style.display = "none";
        }
    });

    document.getElementById("dropdownBtn").addEventListener("click", function () {
        var dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.style.display === "none" ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
    });


});
