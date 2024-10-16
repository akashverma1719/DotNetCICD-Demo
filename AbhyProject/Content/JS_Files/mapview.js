function showLoader() {
    document.getElementById("loaderwl").classList.remove("hidden");
}

// Function to hide the loader
// Function to hide the loader
function hideLoader() {
    var loader = document.getElementById("loaderwl");
    loader.classList.add("hidden");
}

let valuewqm = null;
let DistrictLayer
let gpChange;
let blockChange;
let districtChange;
let stateChange;
let wspChange;
let basinValuesArray = [];
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
    "esri/renderers/ClassBreaksRenderer",
    "esri/geometry/geometryEngine",
    "esri/widgets/Popup",
    "esri/rest/print",
    "esri/rest/support/PrintTemplate",
    "esri/rest/support/PrintParameters",
    "esri/renderers/support/ClassBreakInfo",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/CIMSymbol",
    "esri/geometry/Extent"




], (Map, MapView, GroupLayer, FeatureLayer, LayerList,
    Legend, esriRequest, Query, query, FeatureTable, reactiveUtils,
    Graphic, Home, ScaleBar, Expand, Compass, BasemapGallery, Print, GraphicsLayer,
    CoordinateConversion, Locate, DistanceMeasurement2D, AreaMeasurement2D, Track,
    Search, AttachmentsContent, Renderer, FeatureEffect, FeatureFilter, PopupTemplate,
    SimpleMarkerSymbol, Point, UniqueValueRenderer, SimpleFillSymbol, UniqueValueInfo,
    SimpleRenderer, ClassBreaksRenderer, geometryEngine, Popup, print, PrintTemplate,
    PrintParameters, ClassBreakInfo, SimpleLineSymbol, CIMSymbol, Extent) => {


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




    const labelClass = { // autocasts as new LabelClass()
        symbol: {
            type: "text", // autocasts as new TextSymbol()
            color: "blue",
            //   haloColor: "black",
            //   haloSize: 1,
            font: { // autocast as new Font()
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

    const labelClassB = { // autocasts as new LabelClass()
        symbol: {
            type: "text", // autocasts as new TextSymbol()
            color: "black",
            //   haloColor: "blue",
            //   haloSize: 1,
            font: { // autocast as new Font()
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
        minScale: 9060000,

    };
    // + TextFormatting.NewLine + $feature.Block_Name  9100000
    const labelClassD = { // autocasts as new LabelClass()
        symbol: {
            type: "text", // autocasts as new TextSymbol()
            color: "green",
            //   haloColor: "green",
            //   haloSize: 1,
            font: { // autocast as new Font()
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
        minScale: 9080000,

    };

    const labelClassS = {
        symbol: {
            type: "text",
            color: "black",
            haloColor: "white",
            haloSize: 1,
            font: {
                family: "arial",
                size: 8,
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
            color: "#af7022",
            outline: null
        }
    };




    const India = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/1",
        maxScale: 9244649,

        title: "India",
        id: "layer18",
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
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4",
        definitionExpression: "statename <> 'Delhi_7'",
        title: "Artificial Recharge and Water Conservation Structures",
        visible: false,
        renderer: geot,
        id: "layer7",
        outFields: ["*"],
        popupTemplate: {
            title: "Artificial Recharge and Water Conservation Structures <span class='Artificial_Icon'><span>",
            content: createCustomPopupContentARS,
        },
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


    //

    //


    const WaterLevel = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5",
        definitionExpression: "state <> 'Delhi_7'",
        title: "Water Level Monitoring Stations",
        visible: true,
        id: "layer5",
        outFields: ["*"],
        popupTemplate: { // Define the popup template directly here
            title: "Water Level Monitoring Stations <span class='icon_Waterlevel'></span>",
            content: createCustomPopupContentW
        }
    });






    // Function to update clustering configuration based on zoom level




    const WaterQuality = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/6",

        definitionExpression: "state <> 'Delhi_7'",
        title: "Water Quality Monitoring Stations",
        visible: true,
        id: "layer6",
        outFields: ["*"],
        popupTemplate: {
            title: "Water Quality Monitoring Stations <span class='icon_WaterQuality'></span>",
            content: createCustomPopupContentWQ,
        }

    });

    const WaterQualitym = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0",

        definitionExpression: "state <> 'Delhi_7'",
        title: "Water Quality Monitoring (Through Field Testing Kit)",
        visible: false,
        id: "layer8",
        outFields: ["*"],
        popupTemplate: {
            title: "Water Quality Monitoring (Through Field Testing Kit)  <span class='icon_WaterQualityMonitoring'></span>",
            content: createCustomPopupContentWQM,
        }

    });

    //

    const Well = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0",
        definitionExpression: "state <> 'Delhi_7'",
        title: "Well Registered",

        visible: false,
        renderer: wellp,
        id: "layer9",
        outFields: ["*"],
        popupTemplate: {
            title: "Well Registered <span class='icon_Well'></span>",
            content: createCustomPopupContentWell,
        }

    });


    const GWRA = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/5",
        title: "GWRA:- (CGWB 2022 (Block Level))",
        visible: false,
        id: "layer10",
        popupTemplate: {

            title: "Ground Water Resource Assessment",


            content: [{

                type: "fields",
                fieldInfos: [

                    {
                        fieldName: "Block_Name",
                        visible: true,
                        label: "Block Name"
                    },
                    {
                        fieldName: "District_N",
                        visible: true,
                        label: "District Name"
                    },
                    {
                        fieldName: "State_Name",
                        visible: true,
                        label: "State Name"
                    },

                    {
                        fieldName: "gps",
                        visible: true,
                        label: "Total GPs Covered Under Atal Jal-"
                    },
                    {
                        fieldName: "vill_count",
                        visible: true,
                        label: "Total Villages Covered Under Atal Jal GPs-",
                        format: {
                            places: 0,
                            digitSeparator: true
                        }
                    },


                    {
                        fieldName: "gwr_rainfa",
                        visible: true,
                        label: "GWR Rainfall Monsoon (ha m)-"
                    },
                    {
                        fieldName: "gwr_rain_1",
                        visible: true,
                        label: "GWR Rainfall Non-Monsoon (ha m)-"
                    },
                    {
                        fieldName: "gwr_rain_2",
                        visible: true,
                        label: "GWR Rainfall Other Sources Monsoon(ha m) "
                    },
                    {
                        fieldName: "gwr_rain_3",
                        visible: true,
                        label: "GWR Rainfall Other Sources Non-Monsoon (ha m)-"
                    },
                    {
                        fieldName: "loss_natur",
                        visible: true,
                        label: "Losses Due to Natural Discharge (ha m)-"
                    },
                    {
                        fieldName: "gw_withdra",
                        visible: true,
                        label: "Total Annual  Ground Water Recharge (ha m) -"
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
        field: "category", // Replace with your attribute field
        defaultSymbol: new SimpleFillSymbol({
            style: "solid",
            color: [128, 128, 128, 0.8], // Default symbol color
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        defaultLabel: "Not Assessed"
    });

    // Define symbols and labels for each unique value
    renderergw.addUniqueValueInfo(new UniqueValueInfo({
        value: "Safe", // Replace with the attribute value you want to symbolize
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "white", // Red symbol color for Value1
            outline: {
                color: [0, 0, 0, 1], // Black outline color
                width: 1
            }
        }),
        label: "Safe"
    }));


    renderergw.addUniqueValueInfo(new UniqueValueInfo({
        value: "Semi-Critical", // Replace with the attribute value you want to symbolize
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
        value: "Over-Exploited", // Replace with the attribute value you want to symbolize
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
        value: "Not-Specified", // Replace with the attribute value you want to symbolize
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "green", // Green symbol color for Value2
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        label: "Not Specified"
    }));

    // Add the renderer to the feature layer
    GWRA.renderer = renderergw;
    //principaacq
    const acquifier = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/6",
        title: "Principal Aquifer (CGWB)",
        visible: false,
        id: "layer11",
        popupTemplate: {

            title: "Aquifer",

            content: [{

                type: "fields",
                fieldInfos: [

                    {
                        fieldName: "AQUIFER",
                        visible: true,
                        label: "Principal Aquifer"
                    },

                    {
                        fieldName: "AQUI_CODE",
                        visible: true,
                        label: "Aquifer Code"
                    },
                    {
                        fieldName: "NEWCODE",
                        visible: true,
                        label: "New Code"
                    }




                ],
            },



            ],


        },
        outFields: ["*"],
        content: [attachmentsElement]




    });

    const rendererpq = new UniqueValueRenderer({
        field: "AQUIFER", // Replace with your attribute field
        defaultSymbol: new SimpleFillSymbol({
            style: "solid",
            color: [128, 128, 128, 0.8], // Default symbol color
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        defaultLabel: "Not Found"
    });

    // Define symbols and labels for each unique value
    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Alluvium",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF00",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Alluvium"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Basalt",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#228B22",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Basalt"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Basement_Gneissic_Complex",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#32CD32",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Basement_Gneissic_Complex"
    }));


    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "-Charnockite-",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#2E8B57",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "-Charnockite-"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "-Gneiss-",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#008000",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "-Gneiss-"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Granite",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#3CB371",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Granite"
    }));
    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Intrusive",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#20B2AA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Intrusive"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Khondalites",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#66CDAA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Khondalites"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Laterite",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#7FFFD4",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Laterite"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Limestone",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FA9A",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Limestone"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "-Quartzite-",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF7F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "-Quartzite-"
    }));


    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Sandstone",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#8FBC8F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Sandstone"
    }));

    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "-Schist-",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#556B2F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "-Schist-"
    }));


    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Shale",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#9ACD32",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Shale"
    }));
    rendererpq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Unclassified",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#ADFF2F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Unclassified"
    }));
    // Add the renderer to the feature layer
    acquifier.renderer = rendererpq;


    //majoraacq
    const majoracquifier = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/4",
        title: "Major Aquifer (CGWB)",
        visible: false,
        id: "layer12",
        popupTemplate: {

            title: "Aquifer",


            content: [{

                type: "fields",
                fieldInfos: [

                    {
                        fieldName: "major_aqui",
                        visible: true,
                        label: "Major Acquifier"
                    },

                    {
                        fieldName: "Age",
                        visible: true,
                        label: "Age"
                    }



                ],
            },



            ],


        },
        outFields: ["*"],
        content: [attachmentsElement]




    });


    const renderermajaq = new UniqueValueRenderer({
        field: "major_aqui", // Replace with your attribute field
        defaultSymbol: new SimpleFillSymbol({
            style: "solid",
            color: [128, 128, 128, 0.8], // Default symbol color
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        defaultLabel: "Not Found"
    });

    // Define symbols and labels for each unique value
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Acidic Rocks (Granite,Syenite, Rhyolite etc.)",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF00",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Acidic Rocks (Granite,Syenite, Rhyolite etc.)"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Acidic Rocks (Pegmatite, Granite, Syenite, Rhyolit",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#228B22",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Acidic Rocks (Pegmatite, Granite, Syenite, Rhyolit"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Aeolian Alluvium (Silt/ Sand)",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#32CD32",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Aeolian Alluvium (Silt/ Sand)"
    }));


    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Basement Gneissic Complex",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#2E8B57",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Basement Gneissic Complex"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Basic Rocks (Basalt)",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#008000",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Basic Rocks (Basalt)"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Basic Rocks (Dolerite, Anorthosite etc.)",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#3CB371",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Basic Rocks (Dolerite, Anorthosite etc.)"
    }));
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Charnockite",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#20B2AA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Charnockite"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Coastal Alluvium (Sand/Silt/Clay)",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#66CDAA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Coastal Alluvium (Sand/Silt/Clay)"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Gneiss",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#7FFFD4",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Gneiss"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Khondalites, Granulites",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FA9A",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Khondalites, Granulites"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Laterite / Ferruginous concretions",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF7F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Laterite / Ferruginous concretions"
    }));


    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Limestone / Dolomite",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#8FBC8F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Limestone / Dolomite"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Limestone with Shale",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#556B2F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Limestone with Shale"
    }));


    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Limestone/Dolomite",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#9ACD32",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Limestone/Dolomite"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Marble",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#ADFF2F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Marble"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Migmatitic Gneiss",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#7FFF00",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Migmatitic Gneiss"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Older Alluvium (Silt/Sand/Gravel/Lithomargic clay)",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF66",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Older Alluvium (Silt/Sand/Gravel/Lithomargic clay)"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Pebble / Gravel/ Bazada/ Kandi",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#6B8E23",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Pebble / Gravel/ Bazada/ Kandi)"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Phyllite",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#32CD99",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Phyllite"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Quartzite",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#2E8B57",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Quartzite"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Sandstone with Clay",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#48D1CC",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Sandstone with Clay"
    }));
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Sandstone with Shale",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#20B2AA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Sandstone with Shale"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Sandstone with shale/ coal beds",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#5F9EA0",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Sandstone with shale/ coal beds"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Sandstone/Conglomerate",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#4682B4",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Sandstone/Conglomerate"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Schist",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#87CEEB",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Schist"
    }));


    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Shale with Limestone",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#87CEFA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Shale with Limestone"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Shale with Sandstone",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00BFFF",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Shale with Sandstone"
    }));
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Shale, limestone and sandstone",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#1E90FF",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Shale, limestone and sandstone"
    }));
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Shale/Shale with Sandstone",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#6495ED",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Shale/Shale with Sandstone"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Slate",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#7B68EE",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Slate"
    }));
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Ulrta Basics (Epidiorite, Granophyre etc.)",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#4169E1",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Ulrta Basics (Epidiorite, Granophyre etc.)"
    }));
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Ultra Basic",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#0000FF",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Ultra Basic"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Undifferentiated metasedimentaries/ Undifferentiat",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#0000CD",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Undifferentiated metasedimentaries/ Undifferentiat"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Valley Fills",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00008B",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Valley Fills"
    }));

    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Younger Alluvium (Clay/Silt/Sand/ Calcareous concr",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#000080",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Younger Alluvium (Clay/Silt/Sand/ Calcareous concr"
    }));

    //
    renderermajaq.addUniqueValueInfo(new UniqueValueInfo({
        value: "Not_Specified",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#000080",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Not_Specified"
    }));
    //
    // Add the renderer to the feature layer
    majoracquifier.renderer = renderermajaq;


    const watershed = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/2",
        title: "Basins (CGWB)",
        visible: false,
        id: "layer13",
        popupTemplate: {

            title: "Basin",
            content: [{

                type: "fields",
                fieldInfos: [{
                    fieldName: "basin",
                    visible: true,
                    label: "Basin Name",
                    format: {
                        places: 0,
                        digitSeparator: true
                    }
                },
                {
                    fieldName: "sub_basin",
                    visible: true,
                    label: "Sub Basin Name"
                },
                {
                    fieldName: "area_ha",
                    visible: true,
                    label: "Basin Area in Hectare"
                },
                {
                    fieldName: "GPs_Count_",
                    visible: true,
                    label: "GPs Count"
                },
                {
                    fieldName: "watershed",
                    visible: true,
                    label: "Watershed Code"
                },




                ],
            },



            ],


        },


        outFields: ["*"],


    });


    const rendererwsh = new UniqueValueRenderer({
        field: "basin", // Replace with your attribute field
        defaultSymbol: new SimpleFillSymbol({
            style: "solid",
            color: [128, 128, 128, 0.8], // Default symbol color
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        defaultLabel: "Not Found"
    });

    // Define symbols and labels for each unique value
    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Barmer",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF00",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Barmer"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Bhatsol",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#228B22",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Bhatsol"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Cauvery",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#32CD32",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Cauvery"
    }));


    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Chambal",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#2E8B57",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Chambal"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Churu",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#008000",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Churu"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Ghaghar",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#3CB371",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Ghaghar"
    }));
    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Godavari",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#20B2AA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Godavari"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Krishna",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#66CDAA",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Krishna"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Kutch",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#7FFFD4",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Kutch"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Luni",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FA9A",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Luni"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Narmada",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF7F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Narmada"
    }));


    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Pennar",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#8FBC8F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Pennar"
    }));


    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Sabarmati",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#556B2F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Sabarmati"
    }));
    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Sutlej",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#9ACD32",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Sutlej"
    }));
    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Tapi",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#ADFF2F",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Tapi"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Upper Ganga",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#7FFF00",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Upper Ganga"
    }));

    rendererwsh.addUniqueValueInfo(new UniqueValueInfo({
        value: "Yamuna",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF66",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "Yamuna"
    }));
    watershed.renderer = rendererwsh;

    //

    const Rainfall = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/3",

        title: "Annual Rainfall (IMD (2022) (in mm) at District Level",
        visible: false,
        id: "layer14",
        popupTemplate: {

            title: "Annual Rainfall (in mm)",


            content: [{

                type: "fields",
                fieldInfos: [

                    {
                        fieldName: "State_Name",
                        visible: true,
                        label: "State Name"
                    },
                    {
                        fieldName: "District_N",
                        visible: true,
                        label: "District Name"
                    },
                    {
                        fieldName: "BLOCK_Coun",
                        visible: true,
                        label: "Blocks Covered Under Atal Jal (In Numbers)"
                    },
                    {
                        fieldName: "GPs_Count",
                        visible: true,
                        label: "Total GPs Covered Under Atal Jal (In Numbers)"
                    },

                    {
                        fieldName: "Village_Co",
                        visible: true,
                        label: "Total Villages Covered Under Atal Jal GPs (In Numbers)-"
                    },




                ],
            },



            ],


        },




    });

    //
    // Your code for creating the UniqueValueRenderer
    const rendererraf = new UniqueValueRenderer({
        field: "Category", // Replace with your attribute field
        defaultSymbol: new SimpleFillSymbol({
            style: "solid",
            color: [128, 128, 128, 0.8], // Default symbol color
            outline: {
                color: [0, 0, 0, 0.5],
                width: 1
            }
        }),
        defaultLabel: "Not Found"
    });

    // Define symbols and labels for each unique value
    rendererraf.addUniqueValueInfo(new UniqueValueInfo({
        value: "287.50-400.00",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#00FF00",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "287.50-400.00"
    }));

    rendererraf.addUniqueValueInfo(new UniqueValueInfo({
        value: "400.01-800.00",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#6A5ACD",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "400.01-800.00"
    }));

    rendererraf.addUniqueValueInfo(new UniqueValueInfo({
        value: "800.01-1200.00",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#FFD700",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "800.01-1200.00"
    }));

    rendererraf.addUniqueValueInfo(new UniqueValueInfo({
        value: "1200.01-1600.00",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#8B4513",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "1200.01-1600.00"
    }));

    rendererraf.addUniqueValueInfo(new UniqueValueInfo({
        value: "1600.01-2000.00",
        symbol: new SimpleFillSymbol({
            style: "solid",
            color: "#8A2BE2",
            outline: {
                color: [0, 0, 255, 1.0],
                width: 1
            }
        }),
        label: "1600.01-2000.00"
    }));

    // Set the renderer to the Rainfall layer
    Rainfall.renderer = rendererraf;




    // Add the Rainfall layer to the map



    //drrrr


    //const Drainage = new FeatureLayer({
    //    url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/Hosted/Drainage/FeatureServer/0",
    //    title: "Drainage",
    //    visible: false,
    //    id: "layer15",
    //    popupTemplate: {
    //        title: "Drainage",
    //        content: [{
    //            type: "fields",
    //            fieldInfos: [{
    //                fieldName: "state_name",
    //                visible: true,
    //                label: "State",
    //                format: {
    //                    places: 0,
    //                    digitSeparator: true
    //                }
    //            }]
    //        }]
    //    },
    //    outFields: ["*"]
    //});

    //const rendererLine = new UniqueValueRenderer({
    //    field: "state_name", // Replace with your attribute field
    //    defaultSymbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: [128, 128, 128, 0.8], // Default symbol color
    //        width: 1
    //    }),
    //    defaultLabel: "Not Assessed"
    //});

    //// Define symbols and labels for each unique value
    //rendererLine.addUniqueValueInfo(new UniqueValueInfo({
    //    value: "Gujarat",
    //    symbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: "#00FF00", // Lime Green for Safe
    //        width: 2
    //    }),
    //    label: "Gujarat"
    //}));

    //rendererLine.addUniqueValueInfo(new UniqueValueInfo({
    //    value: "Haryana",
    //    symbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: "#228B22", // Lime for Semi-critical
    //        width: 2
    //    }),
    //    label: "Haryana"
    //}));

    //rendererLine.addUniqueValueInfo(new UniqueValueInfo({
    //    value: "Karnataka",
    //    symbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: "#32CD32", // Yellow for Critical
    //        width: 2
    //    }),
    //    label: "Karnataka"
    //}));

    //rendererLine.addUniqueValueInfo(new UniqueValueInfo({
    //    value: "Madhya Pradesh",
    //    symbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: "#2E8B57", // Red for Over-exploited
    //        width: 2
    //    }),
    //    label: "Madhya Pradesh"
    //}));

    //rendererLine.addUniqueValueInfo(new UniqueValueInfo({
    //    value: "Maharashtra",
    //    symbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: "#008000", // Green for Saline
    //        width: 2
    //    }),
    //    label: "Maharashtra"
    //}));
    //rendererLine.addUniqueValueInfo(new UniqueValueInfo({
    //    value: "Rajasthan",
    //    symbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: "#3CB371", // Green for Saline
    //        width: 2
    //    }),
    //    label: "Rajasthan"
    //}));

    //rendererLine.addUniqueValueInfo(new UniqueValueInfo({
    //    value: "Uttar Pradesh",
    //    symbol: new SimpleLineSymbol({
    //        style: "solid",
    //        color: "#20B2AA", // Green for Saline
    //        width: 2
    //    }),
    //    label: "Uttar Pradesh"
    //}));
    //// Continue adding more UniqueValueInfo objects for additional attribute values with their respective colors

    //// Add the renderer to the feature layer
    //Drainage.renderer = rendererLine;



    const Rainguage = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/3",
        definitionExpression: "statename <> 'Delhi_7'",
        title: "Rainguage Stations",
        visible: false,
        renderer: raga,
        id: "layer16",
        outFields: ["*"],
        popupTemplate: {
            title: "Rainguage Stations <span class='rainguage_icon'></span>",
            content: createCustomPopupContentR,
        }


    });

    const WaterFlow = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/1",
        definitionExpression: "state <> 'Delhi_7'",
        title: "Water Flow Meters",
        visible: false,
        renderer: wf,
        id: "layer17",
        outFields: ["*"],
        popupTemplate: {
            title: "Water Flow  <span class='WaterFlow_icon'></span>",
            content: createCustomPopupContentWF,
        }




    });

    const waterdropWithCrossSymbol = {
        type: "cim",
        data: {
            type: "CIMSymbolReference",
            symbol: {
                type: "CIMPointSymbol",
                symbolLayers: [{
                    type: "CIMVectorMarker",
                    enable: true,
                    primitiveName: "vector_marker",
                    anchorPointUnits: "Relative",
                    dominantSizeAxis3D: "Y",
                    size: 20,
                    frame: {
                        xmin: -5,
                        ymin: -10,
                        xmax: 5,
                        ymax: 10
                    },
                    markerGraphics: [{
                        type: "CIMMarkerGraphic",
                        geometry: {
                            rings: [
                                [
                                    [0, 10],
                                    [-5, 0],
                                    [0, -10],
                                    [5, 0],
                                    [0, 10]
                                ]
                            ]
                        },
                        symbol: {
                            type: "CIMPolygonSymbol",
                            symbolLayers: [{
                                type: "CIMSolidFill",
                                enable: true,
                                color: [0, 0, 255, 255] // Blue color for waterdrop
                            }]
                        }
                    }]
                }]
            }
        }
    };


    // Define the renderer using the composite symbol a
    const renderer = {
        type: "simple",
        symbol: waterdropWithCrossSymbol
    };

    const WSP = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/0",
        title: "GP Water Security Plan (2023-24)",
        visible: false,
        renderer: renderer,
        content: wspChange,
        id: "layer19",
        outFields: ["*"],
    });




    const GPLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/1",

        definitionExpression: "st_name <> 'Delhi_7'",
        title: "Gram Panchayats",
        id: "layer1",


        minScale: 600000,

        labelingInfo: [labelClass],
        content: gpChange,
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 1,
                    color: "blue",
                    style: "dash",
                }
            }
        },

        outFields: ["*"],


    });



    const BlockLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/3",
        definitionExpression: "state <> 'Delhi_7'",
        labelingInfo: [labelClassB],
        content: blockChange,
        minScale: 6650000,
        id: "layer2",
        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 1.5,
                    color: "black"
                }
            }
        },

        title: "Blocks",


        outFields: ["*"],

    });

    const DistrictLayer = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/2",
        definitionExpression: "state <> 'Delhi_7'",
        title: "Districts",
        labelingInfo: [labelClassD],
        content: districtChange,
        minScale: 6650000,
        id: "layer3",
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
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/0",

        definitionExpression: "State <> 'Delhi_7'",
        title: "States",
        labelingInfo: [labelClassS],
        content: stateChange,
        id: "layer4",

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



    //
    const GPLayerse = new FeatureLayer({
        url: "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/1",

        definitionExpression: "st_name <> 'Delhi_7'",
        title: "Gram Panchayats",

        visible: false,
        content: gpChange,

        labelingInfo: [labelClass],


        renderer: {
            type: "simple",
            symbol: {
                type: "simple-fill",
                color: null,
                outline: {
                    width: 1,
                    color: "blue",
                    style: "dash",
                }
            }
        },

        outFields: ["*"],


    });

    //

    let graphicsLayer1 = new GraphicsLayer();
    graphicsLayer1.listMode = "hide";

    const PointGroupLayer = new GroupLayer({
        title: "Data Point Layers",
        visible: true,

        layers: [WSP, WaterQualitym, Well, WaterFlow, Rainguage, ArtificialResourceLayer, WaterQuality, WaterLevel],
        listMode: "show",
        opacity: 0.75
    });


    const BoundaryGroupLayer = new GroupLayer({
        title: "Administrative Boundaries",
        visible: true,

        layers: [StateLayer, DistrictLayer, BlockLayer, GPLayer, India, GPLayerse],
        opacity: 0.75
    });




    const rain = new GroupLayer({
        title: "Integrated Water Resources Mapping",
        visible: true,

        layers: [Rainfall, GWRA, acquifier, majoracquifier, watershed],
        opacity: 0.75
    });



    const map = new Map({

        basemap: "topo",
        layers: [rain, PointGroupLayer, BoundaryGroupLayer, graphicsLayer1]

    })

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [78, 22],
        zoom: 4,
        highlightOptions: {
            color: "orange"
        },
        popup: new Popup({
            dockEnabled: true,
            dockOptions: {
                // Set the docking position to top-left corner
                position: "top-left",
                // Disables the dock button from the popup
                buttonEnabled: false,
                // Ignore the default sizes that trigger responsive docking
                breakpoint: false
            },
            visibleElements: {
                closeButton: true
            }
        }),
        // minScale: 900000,
        // maxScale: 900000,
        ui: {
            components: []
        }
    });

    view.popup.watch("visible", function (visible, event) {
        if (visible) {
            setTimeout(() => {
                const closeButton = document.querySelector(".esri-popup__header-buttons");
                if (closeButton) {
                    closeButton.classList.add("custom-close-button");
                    closeButton.addEventListener("click", function () {
                        const customPopup = document.querySelector(".CustomPopup");
                        const ClosePopupwq = document.querySelector(".popupwq");
                        const ClosePopupR = document.querySelector(".popupR");
                        const ClosePopupwf = document.querySelector(".popupWF");
                        const ClosePopupwqm = document.querySelector(".popupwqm");
                        if (customPopup) {
                            customPopup.style.display = "none";
                            ClosePopupwq.style.display = "none";
                            ClosePopupR.style.display = "none";
                            ClosePopupwf.style.display = "none";
                            ClosePopupwqm.style.display = "none";
                        }
                    });
                }
            }, 3000);
        }
    });
    view.when(() => {
        view.scale = 36978595.474472;
    });


    //  For Loader
    showLoader();
    view.whenLayerView(WaterLevel).then(function (layerView) {
        hideLoader();
    });

    function showLoader() {
        document.getElementById("loaderwl").classList.remove("hidden");
    }

    function hideLoader() {
        document.getElementById("loaderwl").classList.add("hidden");
    }
    //  For Loader Ends

    //


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
    var wsDDL = document.querySelector("#ws_count");
    var wspDDL = document.querySelector("#wsp_count");

    //State Query

    var queryUrl = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/0/query";
    var queryOpts = {
        requestType: "json",
        query: {
            where: "1=1",
            outfields: ["State"],
            f: "json"
        }
    };

    // Getting the features data from the API
    esriRequest(queryUrl, queryOpts).then(function (response) {

        var countryNames = Array.from(new Set(response.data.features.map(r => r.attributes["State"]))).sort();
        var hardcodedStates = ["All", "--Select State--", "Gujarat_24", "Haryana_6", "Karnataka_29", "Madhya Pradesh_23", "Maharashtra_27", "Rajasthan_8", "Uttar Pradesh_9"];

        // Clear existing options
        countryDDL.innerHTML = "";

        // Add hardcoded states
        hardcodedStates.forEach(state => {
            var names = state.split("_");
            countryDDL.innerHTML += `<option value="${state}"> ${names[0]} </option>`;
        });

        // Add remaining states from API response
        countryNames.forEach(a => {
            if (a != "Delhi_7" && !hardcodedStates.includes(a)) {
                var names = a.split("_");
                countryDDL.innerHTML += `<option value="${a}"> ${names[0]} </option>`;
            }
        });

    });


    var queryUrlD = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/2/query";
    countryDDL.addEventListener("change", function () {
        var stateName = countryDDL.value;


        DistrictDDL.innerHTML = `<option value="0"> Select Districts </option>`;


        BlockDDL.innerHTML = `<option value="0"> Select Blocks </option>`;
        GPDDL.innerHTML = `<option value="0"> Select Gram Panchayat </option>`;
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


    var queryOptsq = {
        requestType: "json",
        query: {
            where: "1=1",
            outfields: ["State"],
            f: "json"
        }
    };

    var queryOptsDistrict = {
        requestType: "json",
        query: {
            where: "1=1",
            outfields: ["district"],
            f: "json"
        }
    }
    var queryUrlB = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/3/query";

    DistrictDDL.addEventListener("change", function () {
        var districtname = DistrictDDL.value;
        if (districtname === "Select_Districts") {
            document.getElementById("Block").style.display = "none";
            DistrictLayer.definitionExpression = "";
            getcountrydata = document.getElementById("cntry").value;


            //// Show the selected layer
            //// For example, if you want to show featureLayer1 when it's selected
            //DistrictLayer.visible = true;

            StateLayer.definitionExpression = `State  = '${getcountrydata}'`; //Querying the layer
            queryOptsq.query.where = `State = '${getcountrydata}'`;


            StateLayer.queryExtent().then(function (getcountrydata) {
                view.goTo(getcountrydata, {

                });

            })



        }

        StateLayer.visible = false;
        DistrictLayer.visible = true;
        BlockLayer.visible = false;
        GPLayer.visible = false;


        var queryOptsB = {
            requestType: "json",
            query: {
                where: "district  = '" + districtname + "'",
                outfields: ["block "],
                f: "json"
            }
        }
        BlockDDL.innerHTML = `<option value="0"> Select Blocks </option>`;
        GPDDL.innerHTML = `<option value="0"> Select Gram Panchayat </option>`;
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

    var queryUrlGP = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Adminnew/MapServer/1/query";
    BlockDDL.addEventListener("change", function () {
        var blockname = BlockDDL.value;
        if (blockname === '0') {
            var districtDropdown = document.getElementById("District");
            if (districtDropdown) {
                districtDropdown.click(); // Trigger click event
            }
        }

        document.getElementById("Gram").style.display = "none";
        DistrictLayer.definitionExpression = "";
        getcountrydata = document.getElementById("District").value;
        DistrictLayer.definitionExpression = `District_N  = '${getcountrydata}'`; //Querying the layer
        queryOptsDistrict.query.where = `District_N = '${getcountrydata}'`;
        DistrictLayer.queryExtent().then(function (getcountrydata) {
            view.goTo(getcountrydata, {});
        });



        var queryOptsGP = {
            requestType: "json",
            query: {
                where: "bloc_name  = '" + blockname + "'",
                outfields: ["gp_name"],
                f: "json"
            }
        }
        GPDDL.innerHTML = `<option value="0"> Select Gram Panchayat </option>`;
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

    var queryUrlW = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query";
    var queryOptsWGpLayer = {
        requestType: "json",
        query: {
            where: "1=1",
            outfields: ["block"],
            f: "json"
        }
    }
    GPDDL.addEventListener("change", function () {
        var wellName = GPDDL.value;
        if (wellName === '0') {
            BlockLayer.definitionExpression = "";
            getcountrydata = document.getElementById("Block").value;
            BlockLayer.definitionExpression = `block= '${getcountrydata}'`; //Querying the layer
            queryOptsWGpLayer.query.where = `block= '${getcountrydata}'`;
            BlockLayer.queryExtent().then(function (getcountrydata) {
                view.goTo(getcountrydata, {});
            });
        }
        var queryOptsW = {
            requestType: "json",
            cacheBuster: new Date().getTime(),
            query: {
                where: "gp = '" + wellName + "'",
                outfields: ["rw_id"],
                f: "json"
            }
        }
        //Getting the features data from the api
        esriRequest(queryUrlW, queryOptsW).then(function (response) {
            var wellNames = Array.from(new Set(response.data.features.map(r => r.attributes["rw_id"]))).sort();

            $("#well_count").text(wellNames.length);
        });


        Well.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gp = '" + wellName + "'"
            }),
            excludedEffect: excludedEffect

        });

    })

    // code start


    // Query for geo


    const baseUrlge = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query';

    // Get the select element
    const stateSelectg = document.getElementById("cntry");

    // Event listener for the "change" event on the select element
    stateSelectg.addEventListener("change", function () {
        // Get the selected district code
        const selectedstateg = stateSelectg.value;
        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "statename  = '" + selectedstateg + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamsge = new URLSearchParams({
            where: `statename  = '${selectedstateg}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlge = `${baseUrlge}?${queryParamsge}`;
        fetchDataForStatege(urlge);
    });

    async function fetchDataForStatege(urlge) {
        try {
            const response = await fetch(urlge);
            const data = await response.json();

            console.log("ARS", data);

            const geoElementd = document.getElementById("ar_count");
            geoElementd.textContent = data.count;

        } catch (error) {
            console.error('Geo fetching data:', error);
        }
    }


    //

    const baseUrldg = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query';
    const districtSelectdg = document.getElementById("District");
    districtSelectdg.addEventListener("change", function () {
        const selectedDistrictdg = districtSelectdg.value;
        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "districtname  = '" + selectedDistrictdg + "'"
            }),
            excludedEffect: excludedEffect
        });

        const queryParamsdg = new URLSearchParams({
            where: `districtname = '${selectedDistrictdg}'`,
            returnCountOnly: true,
            f: 'pjson'
        });

        const urldg = `${baseUrldg}?${queryParamsdg}`;

        fetchDataForStateged(urldg);
    });

    async function fetchDataForStateged(urldg) {
        try {
            const response = await fetch(urldg);
            const data = await response.json();

            console.log("ARS d", data);

            const ARSElementd = document.getElementById("ar_count");
            ARSElementd.textContent = data.count;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    //


    const baseUrlbge = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query';
    const blockSelectbg = document.getElementById("Block");
    blockSelectbg.addEventListener("change", function () {
        const selectedblockbge = blockSelectbg.value;

        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "blockname   = '" + selectedblockbge + "'"
            }),
            excludedEffect: excludedEffect
        });

        const queryParamsbge = new URLSearchParams({
            where: `blockname = '${selectedblockbge}'`,
            returnCountOnly: true,
            f: 'pjson'
        });

        const urlbge = `${baseUrlbge}?${queryParamsbge}`;

        fetchDataForStatedbg(urlbge);
    });

    async function fetchDataForStatedbg(urlbge) {
        try {
            const response = await fetch(urlbge);
            const data = await response.json();

            console.log("arsbl", data);

            const arElementb = document.getElementById("ar_count");
            arElementb.textContent = data.count;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    //

    var queryUrlG = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query";

    const gramSelectbg = document.getElementById("Gram");
    gramSelectbg.addEventListener("change", function () {
        const selectedGrambge = gramSelectbg.value;

        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gpname    = '" + selectedGrambge + "'"
            }),
            excludedEffect: excludedEffect
        });

        const queryParamsbge = new URLSearchParams({
            where: `gpname  = '${selectedGrambge}'`,
            returnCountOnly: true,
            f: 'pjson'
        });

        const urlbge = `${queryUrlG}?${queryParamsbge}`;

        fetchDataForgramg(urlbge);
    });

    async function fetchDataForgramg(urlbge) {
        try {
            const response = await fetch(urlbge);
            const data = await response.json();

            console.log("arsbl", data);

            const arElementb = document.getElementById("ar_count");
            arElementb.textContent = data.count;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    //countryDDL.addEventListener("change", function () {
    //    var geoName = countryDDL.value;


    //    var queryOptsG = {
    //        requestType: "json",
    //        query: {
    //            where: "statename     = '" + geoName + "'",
    //            outfields: ["id"],
    //            f: "json"
    //        }
    //    }
    //    //Getting the features data from the api
    //    esriRequest(queryUrlG, queryOptsG).then(function (response) {
    //        var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
    //        console.log("Geo :" + GeoNames.length);
    //        $("#ar_count").text(GeoNames.length);
    //        // GeoNames.forEach((a, i) => {
    //        //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
    //        // })


    //    });

    //    ArtificialResourceLayer.featureEffect = new FeatureEffect({
    //        filter: new FeatureFilter({
    //            where: "statename    = '" + geoName + "'"
    //        }),
    //        excludedEffect: excludedEffect

    //    });

    //})




    //DistrictDDL.addEventListener("change", function () {
    //    var geoName = DistrictDDL.value;
    //    if (geoName === "Select_Districts") {
    //        document.getElementById("Block").style.display = "none";
    //        DistrictLayer.definitionExpression = "";
    //        getcountrydata = document.getElementById("cntry").value;


    //        //// Show the selected layer
    //        //// For example, if you want to show featureLayer1 when it's selected
    //        //DistrictLayer.visible = true;
    //        StateLayer.definitionExpression = `State  = '${getcountrydata}'`; //Querying the layer
    //        queryOptsq.query.where = `State = '${getcountrydata}'`;


    //        StateLayer.queryExtent().then(function (getcountrydata) {
    //            view.goTo(getcountrydata, {

    //            });

    //        })


    //        console.log("done")
    //    }
    //    StateLayer.visible = false;
    //    DistrictLayer.visible = true;
    //    BlockLayer.visible = false;
    //    GPLayer.visible = false;
    //    var queryOptsG = {
    //        requestType: "json",
    //        query: {
    //            where: "districtname     = '" + geoName + "'",
    //            returnCountOnly: true,
    //            outfields: ["id"],
    //            f: "json"
    //        }
    //    }
    //    //Getting the features data from the api
    //    esriRequest(queryUrlG, queryOptsG).then(function (response) {
    //        var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
    //        console.log("Geo :" + GeoNames.length);
    //        $("#ar_count").text(GeoNames.length);
    //        // GeoNames.forEach((a, i) => {
    //        //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
    //        // })


    //    });

    //    ArtificialResourceLayer.featureEffect = new FeatureEffect({
    //        filter: new FeatureFilter({
    //            where: "districtname   = '" + geoName + "'"
    //        }),
    //        excludedEffect: excludedEffect

    //    });

    //})

    //BlockDDL.addEventListener("change", function () {
    //    var geoName = BlockDDL.value;

    //    if (geoName === '0') {
    //        document.getElementById("Gram").style.display = "none";
    //        DistrictLayer.definitionExpression = "";
    //        getcountrydata = document.getElementById("District").value;
    //        DistrictLayer.definitionExpression = `District_N  = '${getcountrydata}'`; //Querying the layer
    //        queryOptsDistrict.query.where = `District_N = '${getcountrydata}'`;
    //        DistrictLayer.queryExtent().then(function (getcountrydata) {
    //            view.goTo(getcountrydata, {});
    //        });
    //    }

    //    var queryOptsG = {
    //        requestType: "json",
    //        query: {
    //            where: "blockname   = '" + geoName + "'",
    //            outfields: ["id"],
    //            f: "json"
    //        }
    //    }
    //    //Getting the features data from the api
    //    esriRequest(queryUrlG, queryOptsG).then(function (response) {
    //        var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
    //        console.log("Geo :" + GeoNames.length);
    //        $("#ar_count").text(GeoNames.length);
    //        // GeoNames.forEach((a, i) => {
    //        //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
    //        // })


    //    });

    //    ArtificialResourceLayer.featureEffect = new FeatureEffect({
    //        filter: new FeatureFilter({
    //            where: "blockname  = '" + geoName + "'"
    //        }),
    //        excludedEffect: excludedEffect

    //    });

    //})

    //GPDDL.addEventListener("change", function () {
    //    var geoName = GPDDL.value;
    //    if (geoName === '0') {
    //        BlockLayer.definitionExpression = "";
    //        getcountrydata = document.getElementById("Block").value;
    //        BlockLayer.definitionExpression = `block= '${getcountrydata}'`; //Querying the layer
    //        queryOptsWGpLayer.query.where = `block= '${getcountrydata}'`;
    //        BlockLayer.queryExtent().then(function (getcountrydata) {
    //            view.goTo(getcountrydata, {});
    //        });
    //    }

    //    var queryOptsG = {
    //        requestType: "json",
    //        cacheBuster: new Date().getTime(),
    //        query: {
    //            where: "gpname  = '" + geoName + "'",
    //            outfields: ["id"],
    //            f: "json"
    //        }
    //    }
    //    //Getting the features data from the api
    //    esriRequest(queryUrlG, queryOptsG).then(function (response) {
    //        var GeoNames = Array.from(new Set(response.data.features.map(r => r.attributes["id"]))).sort();
    //        console.log("Geo :" + GeoNames.length);
    //        $("#ar_count").text(GeoNames.length);
    //        // GeoNames.forEach((a, i) => {
    //        //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
    //        // })


    //    });

    //    ArtificialResourceLayer.featureEffect = new FeatureEffect({
    //        filter: new FeatureFilter({
    //            where: "gpname = '" + geoName + "'"
    //        }),
    //        excludedEffect: excludedEffect

    //    });

    //})


    // for dropdown

    $(document).ready(function () {
        // Hide district and gram panchayat initially
        $("#District, #Block, #Gram").hide();

        // Event listener for state select
        $("#cntry").change(function () {
            var selectedState = $(this).val();

            // If "--Select State--" or "All" is selected, hide district and gram panchayat
            if (selectedState === "--Select State--" || selectedState === "All") {
                $("#District, #Block, #Gram").hide();
            } else {
                // Show district and populate with relevant options
                $("#District").show();


            }
        });

        // Event listener for district select
        $("#District").change(function () {
            var selectedDistrict = $(this).val();

            // If "--Select District--" is selected, hide gram panchayat
            if (selectedDistrict === "--Select District--") {
                $("#Block").hide();
            } else {
                // Show gram panchayat
                $("#Block").show();
                // You can populate the gram panchayat select box based on the selected district here
            }
        });
        // Event listener for district select
        $("#Block").change(function () {
            var selectedDistrict = $(this).val();

            // If "--Select District--" is selected, hide gram panchayat
            if (selectedDistrict === "--Select Block--") {
                $("#Gram").hide();
            } else {
                // Show gram panchayat
                $("#Gram").show();
                // You can populate the gram panchayat select box based on the selected district here
            }
        });

    });

    // for dropdown ends


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
            var queryUrlwl = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query";

            const stateSelectg = document.getElementById("cntry");
            stateSelectg.addEventListener("change", function () {
                const loader = document.getElementById('loader');
                loader.style.display = 'block';
                const selectedstateg = stateSelectg.value;
                WaterLevel.featureEffect = new FeatureEffect({
                    filter: new FeatureFilter({
                        where: "state   = '" + selectedstateg + "'"
                    }),
                    excludedEffect: excludedEffect
                });
                // Construct the query URL
                const queryParamsge = new URLSearchParams({
                    cacheBuster: new Date().getTime(),
                    where: `state  = '${selectedstateg}'`,
                    returnCountOnly: true,
                    f: 'pjson'
                });
                const urlge = `${queryUrlwl}?${queryParamsge}`;
                fetchDataForStatege(urlge);
            });

            async function fetchDataForStatege(urlge) {
                try {
                    const response = await fetch(urlge);
                    const data = await response.json();

                    console.log("water", data);

                    const wlElement = document.getElementById("wl_count");
                    wlElement.textContent = data.count;
                    loader.style.display = 'none';
                } catch (error) {
                    console.error('Geo fetching data:', error);
                }
            }
            //

            const baseUrlwl = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query';

            // Get the select element
            const distSelectwl = document.getElementById("District");

            // Event listener for the "change" event on the select element
            distSelectwl.addEventListener("change", function () {
                const loader = document.getElementById('loader');
                loader.style.display = 'block';

                const selecteddistwl = distSelectwl.value;
                WaterLevel.featureEffect = new FeatureEffect({
                    filter: new FeatureFilter({
                        where: "district  = '" + selecteddistwl + "'"
                    }),
                    excludedEffect: excludedEffect
                });
                // Construct the query URL
                const queryParamswl = new URLSearchParams({
                    where: `district  = '${selecteddistwl}'`,
                    returnCountOnly: true,
                    f: 'pjson'
                });
                const urlwl = `${baseUrlwl}?${queryParamswl}`;
                fetchDataForStatege(urlwl);
            });

            async function fetchDataForStatege(urlwl) {
                try {
                    const response = await fetch(urlwl);
                    const data = await response.json();

                    console.log("wl d", data);

                    const wlElementd = document.getElementById("wl_count");
                    wlElementd.textContent = data.count;
                    loader.style.display = 'none';
                } catch (error) {
                    console.error('wl d fetching data:', error);
                }
            }
            // block query
            const baseUrlwlb = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query';

            const blockSelectwl = document.getElementById("Block");

            // Event listener for the "change" event on the select element
            blockSelectwl.addEventListener("change", function () {
                const loader = document.getElementById('loader');
                loader.style.display = 'block';
                const selectedBlWL = blockSelectwl.value;
                WaterLevel.featureEffect = new FeatureEffect({
                    filter: new FeatureFilter({
                        where: "block   = '" + selectedBlWL + "'"
                    }),
                    excludedEffect: excludedEffect
                });
                // Construct the query URL
                const queryParamswlb = new URLSearchParams({
                    where: `block  = '${selectedBlWL}'`,
                    returnCountOnly: true,
                    f: 'pjson'
                });
                const urlwlb = `${baseUrlwlb}?${queryParamswlb}`;
                fetchDataForStatege(urlwlb);
            });

            async function fetchDataForStatege(urlwlb) {
                try {
                    const response = await fetch(urlwlb);
                    const data = await response.json();

                    console.log("wl b", data);

                    const wlElementb = document.getElementById("wl_count");
                    wlElementb.textContent = data.count;
                    loader.style.display = 'none';
                } catch (error) {
                    console.error('wl b fetching data:', error);
                }
            }
            //  wl gram
            const baseUrlwlg = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query';
            const gramSelectwl = document.getElementById("Gram");
            gramSelectwl.addEventListener("change", function () {
                const loader = document.getElementById('loader');
                loader.style.display = 'block';
                const selectedGPWL = gramSelectwl.value;
                WaterLevel.featureEffect = new FeatureEffect({
                    filter: new FeatureFilter({
                        where: "grampanchayat    = '" + selectedGPWL + "'"
                    }),
                    excludedEffect: excludedEffect
                });
                // Construct the query URL
                const queryParamswlg = new URLSearchParams({
                    where: `grampanchayat  = '${selectedGPWL}'`,
                    returnCountOnly: true,
                    f: 'pjson'
                });
                const urlwlg = `${baseUrlwlg}?${queryParamswlg}`;
                fetchDataForStatege(urlwlg);
            });

            async function fetchDataForStatege(urlwlg) {
                try {
                    const response = await fetch(urlwlg);
                    const data = await response.json();

                    console.log("wl g", data);

                    const wlElementg = document.getElementById("wl_count");

                    wlElementg.textContent = data.count;
                    loader.style.display = 'none';

                } catch (error) {
                    console.error('wl g fetching data:', error);
                }
            }

        })
        .catch((error) => {
            console.error('Error loading data:', error);
        });
    //query for water level starts ends


    //query for water quality starts

    var queryUrlwq = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/6/query";


    const stateSelectwq = document.getElementById("cntry");

    // Event listener for the "change" event on the select element
    stateSelectwq.addEventListener("change", function () {
        // Get the selected district code
        const selectedstatewq = stateSelectwq.value;
        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "state  = '" + selectedstatewq + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamsge = new URLSearchParams({
            where: `state  = '${selectedstatewq}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwq = `${queryUrlwq}?${queryParamsge}`;
        fetchDataForStatewq(urlwq);
    });

    async function fetchDataForStatewq(urlwq) {
        try {
            const response = await fetch(urlwq);
            const data = await response.json();

            console.log("wq", data);

            const wqElementd = document.getElementById("wq_count");
            wqElementd.textContent = data.count;

        } catch (error) {
            console.error('WQ fetching data:', error);
        }
    }

    //dist


    const distSelectwq = document.getElementById("District");

    // Event listener for the "change" event on the select element
    distSelectwq.addEventListener("change", function () {
        // Get the selected district code
        const selectedDistwq = distSelectwq.value;
        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "district  = '" + selectedDistwq + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswq = new URLSearchParams({
            where: `district  = '${selectedDistwq}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwqd = `${queryUrlwq}?${queryParamswq}`;
        fetchDataForDistwqd(urlwqd);
    });

    async function fetchDataForDistwqd(urlwqd) {
        try {
            const response = await fetch(urlwqd);
            const data = await response.json();

            console.log("wq", data);

            const wqElementd = document.getElementById("wq_count");
            wqElementd.textContent = data.count;

        } catch (error) {
            console.error('WQ fetching data:', error);
        }
    }

    //block


    const blockSelectwq = document.getElementById("Block");

    // Event listener for the "change" event on the select element
    blockSelectwq.addEventListener("change", function () {

        const selectedblockwq = blockSelectwq.value;
        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "block  = '" + selectedblockwq + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswqb = new URLSearchParams({
            where: `block  = '${selectedblockwq}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwqb = `${queryUrlwq}?${queryParamswqb}`;
        fetchDataForblockwqd(urlwqb);
    });

    async function fetchDataForblockwqd(urlwqd) {
        try {
            const response = await fetch(urlwqd);
            const data = await response.json();

            console.log("wq", data);

            const wqElementb = document.getElementById("wq_count");
            wqElementb.textContent = data.count;

        } catch (error) {
            console.error('WQ fetching data:', error);
        }
    }

    //gram


    const gramSelectwq = document.getElementById("Gram");

    // Event listener for the "change" event on the select element
    gramSelectwq.addEventListener("change", function () {

        const selectedGramwq = gramSelectwq.value;
        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gp  = '" + selectedGramwq + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswqb = new URLSearchParams({
            where: `gp  = '${selectedGramwq}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwqg = `${queryUrlwq}?${queryParamswqb}`;
        fetchDataForgramwq(urlwqg);
    });

    async function fetchDataForgramwq(urlwqg) {
        try {
            const response = await fetch(urlwqg);
            const data = await response.json();

            console.log("wq", data);

            const wqElementg = document.getElementById("wq_count");
            wqElementg.textContent = data.count;

        } catch (error) {
            console.error('WQ fetching data:', error);
        }
    }
    ///query for water quality ends


    ///query for waterqualityftk starts


    countryDDL.addEventListener("change", function () {
        var wqNamem = countryDDL.value;

        // Construct the query URL with a dynamic where clause based on the selected dropdown value
        var qwaterqm = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=state='" + wqNamem + "'&returnCountOnly=true&f=json";

        // Query the feature service to get the count of features based on the selected dropdown option
        esriRequest(qwaterqm).then(function (response) {
            var totalCount = response.data.count;
            // console.log("Total feature count for selected state (" + wqNamem + "): " + totalCount);
            // Do something with the total feature count, such as displaying it in HTML
            $("#wqm_count").text(totalCount);
        });

        WaterQualitym.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "state = '" + wqNamem + "'"
            }),
            excludedEffect: excludedEffect

        });


    });

    DistrictDDL.addEventListener("change", function () {
        var wqNamed = DistrictDDL.value;

        if (wqNamed === "Select_Districts") {
            document.getElementById("Block").style.display = "none";
            DistrictLayer.definitionExpression = "";
            getcountrydata = document.getElementById("cntry").value;
            //  console.log("getcountrydata", getcountrydata);
            StateLayer.visible = false;
            DistrictLayer.visible = true;
            BlockLayer.visible = false;
            GPLayer.visible = false;

            //// Show the selected layer
            //// For example, if you want to show featureLayer1 when it's selected
            //DistrictLayer.visible = false;

            StateLayer.definitionExpression = `State  = '${getcountrydata}'`; //Querying the layer
            queryOptsq.query.where = `State = '${getcountrydata}'`;


            StateLayer.queryExtent().then(function (getcountrydata) {
                view.goTo(getcountrydata, {

                });

            })


            // console.log("done")
        }
        StateLayer.visible = false;
        DistrictLayer.visible = true;
        BlockLayer.visible = false;
        GPLayer.visible = false;
        // Construct the query URL with a dynamic where clause based on the selected dropdown value
        var qwaterqmd = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=district='" + wqNamed + "'&returnCountOnly=true&f=json";

        // Query the feature service to get the count of features based on the selected dropdown option
        esriRequest(qwaterqmd).then(function (response) {
            var totalCount = response.data.count;
            // console.log("Total feature count for selected district (" + wqNamed + "): " + totalCount);
            // Update the wqm_count HTML element with the total count
            $("#wqm_count").text(totalCount);
        });

        WaterQualitym.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "district = '" + wqNamed + "'"
            }),
            excludedEffect: excludedEffect

        });

        // Additional code for your other operations...
    });

    BlockDDL.addEventListener("change", function () {
        var wqNameb = BlockDDL.value;
        // console.log("wqNameb", wqNameb)
        if (wqNameb === '0') {
            document.getElementById("Gram").style.display = "none";
            DistrictLayer.definitionExpression = "";
            getcountrydata = document.getElementById("District").value;
            DistrictLayer.definitionExpression = `District_N  = '${getcountrydata}'`; //Querying the layer
            queryOptsDistrict.query.where = `District_N = '${getcountrydata}'`;
            DistrictLayer.queryExtent().then(function (getcountrydata) {
                view.goTo(getcountrydata, {});
            });
        }
        // Construct the query URL with a dynamic where clause based on the selected dropdown value
        var qwaterqmb = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=block='" + wqNameb + "'&returnCountOnly=true&f=json";

        // Query the feature service to get the count of features based on the selected dropdown option
        esriRequest(qwaterqmb).then(function (response) {
            var totalCount = response.data.count;

            // Update the wqm_count HTML element with the total count
            $("#wqm_count").text(totalCount);
        });

        WaterQualitym.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "block = '" + wqNameb + "'"
            }),
            excludedEffect: excludedEffect

        });

        // Additional code for your other operations...
    });



    GPDDL.addEventListener("change", function () {
        var wqNameg = GPDDL.value;
        if (wqNameg === '0') {
            BlockLayer.definitionExpression = "";
            getcountrydata = document.getElementById("Block").value;
            BlockLayer.definitionExpression = `block= '${getcountrydata}'`; //Querying the layer
            queryOptsWGpLayer.query.where = `block= '${getcountrydata}'`;
            BlockLayer.queryExtent().then(function (getcountrydata) {
                view.goTo(getcountrydata, {});
            });
        }
        // Construct the query URL with a dynamic where clause based on the selected dropdown value
        var qwaterqmg = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=gp='" + wqNameg + "'&returnCountOnly=true&f=json";

        // Query the feature service to get the count of features based on the selected dropdown option
        esriRequest(qwaterqmg).then(function (response) {
            var totalCount = response.data.count;
            // console.log("Total feature count for selected district (" + wqNameg + "): " + totalCount);
            // Update the wqm_count HTML element with the total count
            $("#wqm_count").text(totalCount);
        });

        WaterQualitym.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gp = '" + wqNameg + "'"
            }),
            excludedEffect: excludedEffect

        });

        // Additional code for your other operations...
    });



    ///query for waterqualityftk ends


    ////query for rainguage


    var queryUrlrg = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/3/query";

    //state
    const stateSelectrg = document.getElementById("cntry");

    // Event listener for the "change" event on the select element
    stateSelectrg.addEventListener("change", function () {
        // Get the selected district code
        const selectedstaterg = stateSelectrg.value;
        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "statename  = '" + selectedstaterg + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamsrg = new URLSearchParams({
            where: `statename  = '${selectedstaterg}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlrg = `${queryUrlrg}?${queryParamsrg}`;
        fetchDataForStaterg(urlrg);
    });

    async function fetchDataForStaterg(urlrg) {
        try {
            const response = await fetch(urlrg);
            const data = await response.json();

            // console.log("rg", data);

            const rgElementd = document.getElementById("rg_count");
            rgElementd.textContent = data.count;

        } catch (error) {
            console.error('rain fetching data:', error);
        }
    }

    //dist

    const distSelectrg = document.getElementById("District");

    // Event listener for the "change" event on the select element
    distSelectrg.addEventListener("change", function () {
        // Get the selected district code
        const selecteddistrg = distSelectrg.value;
        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "districtna  = '" + selecteddistrg + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamsrgd = new URLSearchParams({
            where: `districtna  = '${selecteddistrg}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlrgd = `${queryUrlrg}?${queryParamsrgd}`;
        fetchDataForDistrg(urlrgd);
    });

    async function fetchDataForDistrg(urlrgd) {
        try {
            const response = await fetch(urlrgd);
            const data = await response.json();

            // console.log("rg", data);

            const rgElementd = document.getElementById("rg_count");
            rgElementd.textContent = data.count;

        } catch (error) {
            console.error('rain fetching data:', error);
        }
    }

    //block


    const blockSelectrg = document.getElementById("Block");

    // Event listener for the "change" event on the select element
    blockSelectrg.addEventListener("change", function () {

        const selectedblockrg = blockSelectrg.value;
        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "blockname  = '" + selectedblockrg + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamsrgb = new URLSearchParams({
            where: `blockname  = '${selectedblockrg}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlrgb = `${queryUrlrg}?${queryParamsrgb}`;
        fetchDataForblockrg(urlrgb);
    });

    async function fetchDataForblockrg(urlrgb) {
        try {
            const response = await fetch(urlrgb);
            const data = await response.json();

            // console.log("rg", data);

            const rgElementb = document.getElementById("rg_count");
            rgElementb.textContent = data.count;

        } catch (error) {
            console.error('rain fetching data:', error);
        }
    }


    //gram



    const gramSelectrg = document.getElementById("Gram");

    // Event listener for the "change" event on the select element
    gramSelectrg.addEventListener("change", function () {

        const selectedGramrg = gramSelectrg.value;
        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gpname  = '" + selectedGramrg + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamsrgg = new URLSearchParams({
            where: `gpname  = '${selectedGramrg}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlrgg = `${queryUrlrg}?${queryParamsrgg}`;
        fetchDataForblockrg(urlrgg);
    });

    async function fetchDataForblockrg(urlrgg) {
        try {
            const response = await fetch(urlrgg);
            const data = await response.json();

            // console.log("rg", data);

            const rgElementg = document.getElementById("rg_count");
            rgElementg.textContent = data.count;

        } catch (error) {
            console.error('rain fetching data:', error);
        }
    }

    ``


    ////query for waterflow




    var queryUrlwf = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/1/query";

    //state

    const stateSelectwf = document.getElementById("cntry");

    // Event listener for the "change" event on the select element
    stateSelectwf.addEventListener("change", function () {
        // Get the selected district code
        const selectedstatewf = stateSelectwf.value;
        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "state  = '" + selectedstatewf + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswf = new URLSearchParams({
            where: `state  = '${selectedstatewf}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwf = `${queryUrlwf}?${queryParamswf}`;
        fetchDataForStatewf(urlwf);
    });

    async function fetchDataForStatewf(urlwf) {
        try {
            const response = await fetch(urlwf);
            const data = await response.json();

            // console.log("wf", data);

            const wfElement = document.getElementById("wf_count");
            wfElement.textContent = data.count;

        } catch (error) {
            console.error('Geo fetching data:', error);
        }
    }
    //dist

    const distSelectwf = document.getElementById("District");

    // Event listener for the "change" event on the select element
    distSelectwf.addEventListener("change", function () {
        // Get the selected district code
        const selecteddistwf = distSelectwf.value;
        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "district  = '" + selecteddistwf + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswfd = new URLSearchParams({
            where: `district  = '${selecteddistwf}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwfd = `${queryUrlwf}?${queryParamswfd}`;
        fetchDataFordistwf(urlwfd);
    });

    async function fetchDataFordistwf(urlwfd) {
        try {
            const response = await fetch(urlwfd);
            const data = await response.json();

            // console.log("wf", data);

            const wfElementd = document.getElementById("wf_count");
            wfElementd.textContent = data.count;

        } catch (error) {
            console.error('Wf fetching data:', error);
        }
    }

    //block


    const blockSelectwf = document.getElementById("Block");

    // Event listener for the "change" event on the select element
    blockSelectwf.addEventListener("change", function () {

        const selectedblockwf = blockSelectwf.value;
        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "block  = '" + selectedblockwf + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswfb = new URLSearchParams({
            where: `block  = '${selectedblockwf}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwfb = `${queryUrlwf}?${queryParamswfb}`;
        fetchDataForblockwf(urlwfb);
    });

    async function fetchDataForblockwf(urlwfb) {
        try {
            const response = await fetch(urlwfb);
            const data = await response.json();

            // console.log("wf", data);

            const wfElementb = document.getElementById("wf_count");
            wfElementb.textContent = data.count;

        } catch (error) {
            console.error('Wf fetching data:', error);
        }
    }

    //gram


    const gramSelectwf = document.getElementById("Gram");

    // Event listener for the "change" event on the select element
    gramSelectwf.addEventListener("change", function () {

        const selectedgramwf = gramSelectwf.value;
        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "grampanchayat  = '" + selectedgramwf + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswfg = new URLSearchParams({
            where: `grampanchayat  = '${selectedgramwf}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwfg = `${queryUrlwf}?${queryParamswfg}`;
        fetchDataForgramwf(urlwfg);
    });

    async function fetchDataForgramwf(urlwfg) {
        try {
            const response = await fetch(urlwfg);
            const data = await response.json();

            // console.log("wf", data);

            const wfElementg = document.getElementById("wf_count");
            wfElementg.textContent = data.count;

        } catch (error) {
            console.error('Wf fetching data:', error);
        }
    }

    //


    // for wsp count in databox


    var queryUrlWsp = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/0/query";


    //state

    const stateSelectwsp = document.getElementById("cntry");

    // Event listener for the "change" event on the select element
    stateSelectwsp.addEventListener("change", function () {
        // Get the selected district code
        const selectedstatewsp = stateSelectwsp.value;
        WSP.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "st_name  = '" + selectedstatewsp + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswsp = new URLSearchParams({
            where: `st_name  = '${selectedstatewsp}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwsp = `${queryUrlWsp}?${queryParamswsp}`;
        fetchDataForStatewsp(urlwsp);
    });

    async function fetchDataForStatewsp(urlwsp) {
        try {
            const response = await fetch(urlwsp);
            const data = await response.json();

            // console.log("wsp", data);wsp_count

            const wspElement = document.getElementById("wsp_count");
            wspElement.textContent = data.count;

        } catch (error) {
            console.error('wspp fetching data:', error);
        }
    }

    //dist



    const distSelectwsp = document.getElementById("District");

    // Event listener for the "change" event on the select element
    distSelectwsp.addEventListener("change", function () {
        // Get the selected district code
        const selecteddistwsp = distSelectwsp.value;
        WSP.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "dist_name  = '" + selecteddistwsp + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswspd = new URLSearchParams({
            where: `dist_name  = '${selecteddistwsp}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwspd = `${queryUrlWsp}?${queryParamswspd}`;
        fetchDataForDistwsp(urlwspd);
    });

    async function fetchDataForDistwsp(urlwspd) {
        try {
            const response = await fetch(urlwspd);
            const data = await response.json();

            // console.log("wsp", data);wsp_count

            const wspElementd = document.getElementById("wsp_count");
            wspElementd.textContent = data.count;

        } catch (error) {
            console.error('wspp fetching data:', error);
        }
    }
    //block


    const blockSelectwsp = document.getElementById("Block");

    // Event listener for the "change" event on the select element
    blockSelectwsp.addEventListener("change", function () {
        // Get the selected district code
        const selectedblockwsp = blockSelectwsp.value;
        WSP.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "bloc_name  = '" + selectedblockwsp + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswspb = new URLSearchParams({
            where: `bloc_name  = '${selectedblockwsp}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwspb = `${queryUrlWsp}?${queryParamswspb}`;
        fetchDataForblocwsp(urlwspb);
    });

    async function fetchDataForblocwsp(urlwspb) {
        try {
            const response = await fetch(urlwspb);
            const data = await response.json();

            // console.log("wsp", data);wsp_count

            const wspElementb = document.getElementById("wsp_count");
            wspElementb.textContent = data.count;

        } catch (error) {
            console.error('wspp fetching data:', error);
        }
    }

    //gram


    const gramSelectwsp = document.getElementById("Gram");

    // Event listener for the "change" event on the select element
    gramSelectwsp.addEventListener("change", function () {
        // Get the selected district code
        const selectedgramwsp = gramSelectwsp.value;
        WSP.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "gp_name  = '" + selectedgramwsp + "'"
            }),
            excludedEffect: excludedEffect
        });
        // Construct the query URL
        const queryParamswspg = new URLSearchParams({
            where: `gp_name  = '${selectedgramwsp}'`,
            returnCountOnly: true,
            f: 'pjson'
        });
        const urlwspg = `${queryUrlWsp}?${queryParamswspg}`;
        fetchDataForgramwsp(urlwspg);
    });

    async function fetchDataForgramwsp(urlwspg) {
        try {
            const response = await fetch(urlwspg);
            const data = await response.json();

            // console.log("wsp", data);wsp_count

            const wspElementg = document.getElementById("wsp_count");
            wspElementg.textContent = data.count;

        } catch (error) {
            console.error('wspp fetching data:', error);
        }
    }



    //GPDDL.addEventListener("change", function () {
    //    var wspName = GPDDL.value;


    //    var queryOptswsp = {
    //        requestType: "json",
    //        query: {
    //            where: "gp_name        = '" + wspName + "'",
    //            outfields: ["FID"],
    //            f: "json"
    //        }
    //    }
    //    //Getting the features data from the api
    //    esriRequest(queryUrlWsp, queryOptswsp).then(function (response) {
    //        var wspNames = Array.from(new Set(response.data.features.map(r => r.attributes["FID"]))).sort();
    //        console.log("WSP :" + wspNames.length);
    //        $("#wsp_count").text(wspNames.length);
    //        // GeoNames.forEach((a, i) => {
    //        //     GeoDDL.innerHTML += `<option value="${a}"> ${a} </option>`
    //        // })


    //    });

    //    WSP.featureEffect = new FeatureEffect({
    //        filter: new FeatureFilter({
    //            where: "gp_name      = '" + wspName + "'"
    //        }),
    //        excludedEffect: excludedEffect

    //    });

    //})
    // for wsp count ends



    //go to results



    countryDDL.addEventListener("change", function () {
        if (this.value === "All" || this.value === "--Select State--") {

            StateLayer.definitionExpression = ""; //Querying the layer
            document.getElementById("District").style.display = "none";
            console.log("alert")
            India.visible = true;
            GPLayer.visible = true;
            BlockLayer.visible = true;
            DistrictLayer.visible = true;
            StateLayer.visible = true;

            StateLayer.definitionExpression = "";
            DistrictLayer.definitionExpression = "";
            BlockLayer.definitionExpression = "";
            GPLayer.definitionExpression = "";
            WaterLevel.definitionExpression = "";
            WaterQuality.definitionExpression = "";
            ArtificialResourceLayer.definitionExpression = "";
            Rainguage.definitionExpression = "";
            WaterFlow.definitionExpression = "";
            Well.definitionExpression = "";
            WaterQualitym.definitionExpression = "";
            WSP.definitionExpression = "";

            WaterLevel.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: null
            });

            WaterQuality.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            ArtificialResourceLayer.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            Rainguage.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            WaterFlow.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            Well.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            WaterQualitym.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            StateLayer.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            DistrictLayer.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            BlockLayer.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            GPLayer.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            WSP.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    //where: "state = '" + wlName + "'"
                }),
                excludedEffect: excludedEffect
            });

            // queryOpts.query.where = "1=1"; //To Return an empty list, so that the city list is empty

        } else if (this.value === "--Select State--") {
            console.log("call")
            India.visible = true;
            GPLayer.visible = true;
            BlockLayer.visible = true;
            DistrictLayer.visible = true;
            StateLayer.visible = true;
        } else {
            document.getElementById("District").style.display = "block";
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

    //


    function toggleVisibility(id, visible) {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = visible ? 'block' : 'none';
        }
    }


    //

    view.ui.add(
        new Expand({
            view,
            group: "left",
            expandTooltip: "Expand Export Layout/Map",
            content: new Print({
                view,

                printServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
            })

        }),

        "top-left"
    );



    const layerListContainer = document.createElement("div");
    layerListContainer.style.display = "none";
    layerListContainer.style.position = "absolute";
    layerListContainer.style.top = "50px";
    layerListContainer.style.right = "10px";

    const layerList = new LayerList({
        view: view,
        container: layerListContainer,
        listItemCreatedFunction: function (event) {
            const item = event.item;
            if (item.layer.type !== "group") {
                // Check if item.layer.graphics is defined
                if (item.layer.graphics) {
                    // Get the count of rendered features
                    const count = item.layer.graphics.length;
                    console.log("gggg", count)
                    // Construct the legend item title with the count
                    const legendTitle = document.createElement("div");
                    legendTitle.textContent = `${item.layer.title} (${count})`;

                    // Add the legend title to the legend item
                    item.panel = {
                        content: legendTitle,
                        open: true
                    };
                } else {
                    // If graphics are not defined, use the default legend item title
                    item.panel = {
                        content: "legend",
                        open: true
                    };
                }
            }
        }
    });

    view.ui.add(layerList.container, "top-right");




    // view.ui.add(layerList.container, "top-right");

    // Function to toggle the visibility of the LayerList widget
    function toggleLayerList() {
        if (layerListContainer.style.display === "none") {
            layerListContainer.style.display = "block";
        } else {
            layerListContainer.style.display = "none";
        }
    }
    const toggleLayerListBtn = document.createElement("button");
    toggleLayerListBtn.textContent = "Layer List";
    toggleLayerListBtn.className = "toggle-layer-list-button"; // Replace 'your-css-class' with the name of your CSS class
    toggleLayerListBtn.addEventListener("click", toggleLayerList);

    // Add the button to the UI
    view.ui.add(toggleLayerListBtn, "top-right");


    // Position the button absolutely
    toggleLayerListBtn.style.position = "absolute";
    toggleLayerListBtn.style.top = "0px"; // Adjust the top position as needed
    toggleLayerListBtn.style.right = "0px"; // Adjust the right position as needed

    view.ui.add(toggleLayerListBtn, "top-right");


    const compass = new Compass({
        view: view,
        visible: false
    });




    view.ui.add(compass, "bottom-left");


    // load the Compass only when the view is rotated
    view.watch('rotation', function (rotation) {
        if (rotation && !compass.visible) {
            compass.visible = true;
        }
    });


    //view.ui.add(
    //    new Expand({
    //        view,
    //        group: "left",
    //        expandTooltip: "Measure Distance",
    //        content: new DistanceMeasurement2D({
    //            view
    //        })
    //    }),
    //    "top-left"
    //);
    //view.ui.add(
    //    new Expand({
    //        view,
    //        group: "left",
    //        expandTooltip: "Measure Area",
    //        content: new AreaMeasurement2D({
    //            view
    //        })
    //    }),
    //    "top-left"
    //);
    //view.ui.add("topbar", "top-left");

    //view.ui.add("topbar1", "top-left");

    // create the measurement widgets and hide them by default
    const distanceMeasurement2D = new DistanceMeasurement2D({
        view,
        visible: false
    });
    const areaMeasurement2D = new AreaMeasurement2D({
        view,
        visible: false
    });


    function setActiveButton(selectedButton) {
        // focus the view to activate keyboard shortcuts for sketching
        view.focus();
        let elements = document.getElementsByClassName("active");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        if (selectedButton) {
            selectedButton.classList.add("active");
        }
    }


    const scaleBar = new ScaleBar({
        view: view,
        unit: "dual",
        layout: "auto"
    });
    view.ui.add(scaleBar, "top-left");
    ///popuppiez
    const checkPop = false
    // Create the container div element
    var container = document.createElement("div");
    container.className = "ml-4 map-hover-btn";

    // Create the Hover ON button
    var hoverOnButton = document.createElement("button");
    hoverOnButton.className = "btn btn-sm btn-info";
    hoverOnButton.id = "map_data";
    hoverOnButton.type = "submit";
    hoverOnButton.title = "Hover-On";
    hoverOnButton.innerHTML = "<i class='fa-solid fa-eye'></i>";
    hoverOnButton.addEventListener("click", function () {
        const Art = document.getElementById("restoggle");
        Art.classList.remove("toggled");
    });
    // Create the Hover OFF button
    var hoverOffButton = document.createElement("button");
    hoverOffButton.className = "btn btn-sm btn-info";
    hoverOffButton.id = "map_data_off";
    hoverOffButton.type = "submit";
    hoverOffButton.title = "Hover-Off";
    hoverOffButton.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";

    const MapBody = document.getElementById("viewDiv");
    MapBody.addEventListener("click", function () {
        map_data_off();
        const Art = document.getElementById("restoggle");
        Art.classList.remove("toggled");
    });
    // Append buttons to the container
    container.appendChild(hoverOffButton);
    container.appendChild(hoverOnButton);
    //
    //hoverOffButton.addEventListener('click', function (event) {
    //    event.preventDefault();
    //    const mapData = document.getElementById('map_data_off');
    //    if (mapData.style.display === 'none') {
    //        mapData.style.display = 'block';
    //    } else {
    //        mapData.style.display = 'block';
    //    }
    //});

    //

    // Find the UI container element
    var uiContainer2 = document.querySelector(".ui-container");

    // Check if the UI container element exists
    if (uiContainer2) {
        // Append the container to the UI container
        uiContainer2.appendChild(container);
    } else {

        document.body.appendChild(container);
    }

    function map_data_off() {
        document.getElementById("info").style.display = "none";
        document.getElementById('map_data_off').style.visibility = 'visible';
        document.getElementById('map_data').style.visibility = 'hidden';
        false;
    }
    createLegendId();

    function map_data() {
        document.getElementById("info").style.display = "block";
        document.getElementById('map_data').style.visibility = 'visible';
        document.getElementById('map_data_off').style.visibility = 'hidden';


        view.ui.add("info", "top-left");


        view.whenLayerView(WSP)
            .then((layerView) => {
                // Function to handle pointer events
                function eventHandler(event) {
                    const opts = {
                        include: WSP
                    };
                    view.hitTest(event, opts).then(getGraphics);
                }

                function getGraphics(response, selectedId, displayId3Id4) {
                    const infoDiv = document.getElementById("info");

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;
                        const attributes = graphic.attributes;


                        const {
                            st_name: headd,
                            dist_name1: category,
                            bloc_name1: wind,
                            st_name1: name,
                            gp_name1: obj,
                            st_name: id1,
                            st_name: id2,
                            st_name: id3,
                            st_name: id4
                        } = attributes;


                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "Water Security Plan";
                        document.getElementById("name").innerHTML = "State:-" + name;
                        document.getElementById("category").innerHTML = "District:- " + category;
                        document.getElementById("wind").innerHTML = "Block:-" + wind;
                        document.getElementById("obj").innerHTML = " Gram Panchayat:-" + obj;



                        if (displayId3Id4) {
                            document.getElementById("id1").innerHTML = "Depth of Well:-" + id1;
                            document.getElementById("id2").innerHTML = "Aquifer Type:-" + id2;
                            document.getElementById("id3").innerHTML = " Principal:-" + id3;
                            document.getElementById("id4").innerHTML = " Major Aquifer:-" + id4;
                        } else {

                            document.getElementById("id1").innerHTML = "";
                            document.getElementById("id2").innerHTML = "";
                            document.getElementById("id3").innerHTML = "";
                            document.getElementById("id4").innerHTML = "";
                        }


                        document.getElementById("headd").classList.add("headd-class");
                        document.getElementById("name").classList.add("name-class");
                        document.getElementById("category").classList.add("category-class");
                        document.getElementById("wind").classList.add("wind-class");
                        document.getElementById("obj").classList.add("obj-class");
                        document.getElementById("id1").classList.add("id1-class");
                        document.getElementById("id2").classList.add("id2-class");
                        document.getElementById("id3").classList.add("id3-class");
                        document.getElementById("id4").classList.add("id4-class");


                        if (displayId1Id2Id3Id4) {
                            document.getElementById("id1").classList.add("id1-wsp");
                            document.getElementById("id2").classList.add("id2-wsp");
                            document.getElementById("id3").classList.add("id3-wsp");
                            document.getElementById("id4").classList.add("id4-wsp");
                        } else {

                            document.getElementById("id1").classList.remove("id1-wsp");
                            document.getElementById("id2").classList.remove("id2-wsp");
                            document.getElementById("id3").classList.remove("id3-wsp");
                            document.getElementById("id4").classList.remove("id4-wsp");
                        }
                    } else {

                        document.getElementById("info").style.visibility = "hidden";
                    }
                }



                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);
            });


        //geotagging popup


        view.ui.add("info", "top-left");

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
                        const category = attributes.block_name;
                        const wind = attributes.district_name;
                        const name = attributes.gp_name;
                        const obj = attributes.state_name;
                        const id1 = attributes.typeofstructure;
                        const id2 = attributes.storagecapacity;
                        const id3 = attributes.nooffillings;
                        const id4 = attributes.id;



                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "Artificial Recharge and Water Conservation Structures:" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Type of Structure:-" + id1;
                        document.getElementById("id2").innerHTML = " Storage Capacity:-" + id2;
                        document.getElementById("id3").innerHTML = " No. Of Fillings:-" + id3;
                        document.getElementById("id4").innerHTML = " ID:-" + id4;

                    } else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });


        //popupwell


        view.ui.add("info", "top-left");

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
                        const category = attributes.block_name;
                        const wind = attributes.district_name;
                        const name = attributes.gp_name;
                        const obj = attributes.state_name;
                        const id1 = attributes.welltype;
                        const id2 = attributes.welldepth;
                        const id3 = attributes.electricmeterselecteditem;
                        const id4 = attributes.welldiameter;
                        // const id = attributes.OBJECTID;




                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "WELL Registered" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Well Type:-" + id1;
                        document.getElementById("id2").innerHTML = " Well Depth(mbmp):-" + id2;
                        document.getElementById("id3").innerHTML = " Electric Meter Selected Item:-" + id3;
                        document.getElementById("id4").innerHTML = " Well Diameter (m):-" + id4;


                    } else {

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


        view.ui.add("info", "top-left");

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
                        const category = attributes.block_name;
                        const wind = attributes.district_name;
                        const name = attributes.gp_name;
                        const obj = attributes.state_name;
                        const id1 = attributes.well_type;
                        const id2 = attributes.source;
                        const id3 = attributes.aquifer;
                        const id4 = attributes.village;


                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "Water Quality Monitoring Stations" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Type of Well:-" + id1;
                        document.getElementById("id2").innerHTML = " Source:-" + id2;
                        document.getElementById("id3").innerHTML = " Aquifier Type:-" + id3;
                        document.getElementById("id4").innerHTML = " Village:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    } else {

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


        view.ui.add("info", "top-left");

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
                        const category = attributes.block_name;
                        const wind = attributes.district_name;
                        const name = attributes.gp_name;
                        const obj = attributes.state_name;
                        const id1 = attributes.diameter_of_well;
                        const id2 = attributes.typeofwell;
                        const id3 = attributes.height_of_measuring_point;
                        const id4 = attributes.wellid;




                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "Water Level Monitoring Stations" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Diameter of Well:-" + id1;
                        document.getElementById("id2").innerHTML = " Type of Well:-" + id2;
                        document.getElementById("id3").innerHTML = " Height of Measuring Point:-" + id3;
                        document.getElementById("id4").innerHTML = " Well ID:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    } else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });




        ///rainguagepopupstarts


        view.ui.add("info", "top-left");

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
                        document.getElementById("headd").innerHTML = "Rainguage Stations" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Rainguage:-" + id1;
                        document.getElementById("id2").innerHTML = " Location Details:-" + id2;
                        document.getElementById("id3").innerHTML = " Is Achieve-" + id3;
                        document.getElementById("id4").innerHTML = " Village:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    } else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });



        ///waterflowpopupstarts


        view.ui.add("info", "top-left");

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
                        const category = attributes.block;
                        const wind = attributes.district;
                        const name = attributes.grampanchayat;
                        const obj = attributes.state;
                        const id1 = attributes.welltype;
                        const id2 = attributes.locationdetails;
                        const id3 = attributes.areairrigated;
                        const id4 = attributes.meterid;




                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "Water Flow Meters" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Well Type:-" + id1;
                        document.getElementById("id2").innerHTML = " Location Details:-" + id2;
                        document.getElementById("id3").innerHTML = " Area Irrigated-" + id3;
                        document.getElementById("id4").innerHTML = " Meter ID:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    } else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });

        ///

        ///waterqualitympopupstarts


        view.ui.add("info", "top-left");

        view
            .when()
            .then(() => {
                return WaterQualitym.when();
            })
            .then((layer) => {


                return view.whenLayerView(layer);
            })
            .then((layerView) => {
                view.on("pointer-move", eventHandler);
                view.on("pointer-down", eventHandler);

                function eventHandler(event) {

                    const opts = {
                        include: WaterQualitym
                    }

                    view.hitTest(event, opts).then(getGraphics);
                }



                function getGraphics(response) {

                    if (response.results.length) {
                        const graphic = response.results[0].graphic;

                        const attributes = graphic.attributes;
                        const category = attributes.block_name;
                        const wind = attributes.district_name;
                        const name = attributes.gp_name;
                        const obj = attributes.state_name;
                        const id1 = attributes.village;
                        const id2 = attributes.well_depth;
                        const id3 = attributes.location_details;
                        const id4 = attributes.entry_time;




                        document.getElementById("info").style.visibility = "visible";
                        document.getElementById("headd").innerHTML = "Water Quality Monitoring (Through Field Testing Kit):" + "";
                        document.getElementById("name").innerHTML = "Gram Panchayat:-" + name;
                        document.getElementById("category").innerHTML = "Block:- " + category;
                        document.getElementById("wind").innerHTML = " District:-" + wind;
                        document.getElementById("obj").innerHTML = " State:-" + obj;
                        document.getElementById("id1").innerHTML = " Vllage:-" + id1;
                        document.getElementById("id2").innerHTML = " Depth Of Well-" + id2;
                        document.getElementById("id3").innerHTML = " Location Details-" + id3;
                        document.getElementById("id4").innerHTML = " Entry Time:-" + id4;
                        // document.getElementById("wind").innerHTML = " Surface-"+ year;


                    } else {

                        if (highlight) {
                            highlight.remove();
                            highlight = null;
                        }
                        document.getElementById("info").style.visibility = "hidden";
                    }
                }

            });

        ////



    }

    document.getElementById("map_data_off").addEventListener("click", map_data);
    document.getElementById('map_data').style.visibility = 'hidden';
    document.getElementById("map_data").addEventListener("click", map_data_off);

    // Select all buttons on the page

    // Add the event listener to each button

    //


    function queryRelatedFeatures(commonID) {
        // Assuming WaterLevelLayer and AnotherLayer are your related layers
        const waterLevelQuery = WaterLevel.createQuery();
        waterLevelQuery.where = `grampancha  = '${commonID}'`;

        const anotherLayerQuery = WaterQuality.createQuery();
        anotherLayerQuery.where = `gp  = '${commonID}'`;

        const wellQuery = Well.createQuery();
        wellQuery.where = `gp  = '${commonID}'`;


        const geoQuery = ArtificialResourceLayer.createQuery();
        geoQuery.where = `gpname   = '${commonID}'`;

        const rainQuery = Rainguage.createQuery();
        rainQuery.where = `gpname    = '${commonID}'`;

        const wfQuery = WaterFlow.createQuery();
        wfQuery.where = `grampanchayat      = '${commonID}'`;


        // Perform the queries
        WaterLevel.queryFeatures(waterLevelQuery).then(function (waterLevelResults) {
            console.log("Water Level Results:", waterLevelResults.features);
            const waterLevelCount = waterLevelResults.features.length;

            document.getElementById("infoPanelCount11").innerText = `Water Level Observation Well: ${waterLevelCount}`;
            // Process water level results as needed
        });

        WaterQuality.queryFeatures(anotherLayerQuery).then(function (waterqResults) {
            console.log("Water Quality Results:", waterqResults.features);

            const waterqualityCount = waterqResults.features.length;

            document.getElementById("infoPanelCount12").innerText = `Water Quality Observation Well: ${waterqualityCount}`;

            // Process another layer results as needed
        });

        Well.queryFeatures(wellQuery).then(function (wellResults) {
            console.table("Well Results: ", wellResults.features);

            const wellCount = wellResults.features.length;

            document.getElementById("infoPanelCount13").innerText = `Well: ${wellCount}`;
            // Process another layer results as needed
        });

        ArtificialResourceLayer.queryFeatures(geoQuery).then(function (geoResults) {
            console.log("Geo Results:", geoResults.features);
            // Process another layer results as needed
            const arsCount = geoResults.features.length;

            document.getElementById("infoPanelCount14").innerText = `ARS and WCS: ${arsCount}`;
        });

        Rainguage.queryFeatures(rainQuery).then(function (rainResults) {
            console.log("Rain Results:", rainResults.features);

            const rainCount = rainResults.features.length;

            document.getElementById("infoPanelCount15").innerText = `Rainguage: ${rainCount}`;
            // Process another layer results as needed
        });

        WaterFlow.queryFeatures(wfQuery).then(function (wfResults) {
            console.log("WF Results:", wfResults.features);

            const wfCount = wfResults.features.length;

            document.getElementById("infoPanelCount16").innerText = `Water Flow Meter: ${wfCount}`;
            // Process another layer results as needed
        });

    }



    // block
    view.when(() => {

        view.on("click", function (event) {
            // Search for graphics at the clicked location.
            view.hitTest(event).then(function (response) {
                const graphicHits = response.results?.filter(
                    (hitResult) =>
                        hitResult.type === "graphic" &&
                        hitResult.graphic.layer === BlockLayer
                );

                if (graphicHits?.length > 0) {
                    const clickedFeatureb = graphicHits[0].graphic;
                    const commonIDb = clickedFeatureb.attributes.block; // Adjust attribute name as per your data

                    // Query related features from different layers based on the common ID
                    queryRelatedFeaturesb(commonIDb);

                    // Continue with the rest of your code...
                }
            });
        });
    });

    function queryRelatedFeaturesb(commonIDb) {
        // Assuming WaterLevelLayer and AnotherLayer are your related layers
        const waterLevelQueryb = WaterLevel.createQuery();
        waterLevelQueryb.where = `block   = '${commonIDb}'`;

        const anotherLayerQueryb = WaterQuality.createQuery();
        anotherLayerQueryb.where = `block  = '${commonIDb}'`;

        const wellQueryb = Well.createQuery();
        wellQueryb.where = `block   = '${commonIDb}'`;


        const geoQueryb = ArtificialResourceLayer.createQuery();
        geoQueryb.where = `blockname    = '${commonIDb}'`;

        const rainQueryb = Rainguage.createQuery();
        rainQueryb.where = `blockname     = '${commonIDb}'`;

        const wfQueryb = WaterFlow.createQuery();
        wfQueryb.where = `block      = '${commonIDb}'`;


        // Perform the queries
        //    WaterLevel.queryFeatures(waterLevelQueryb).then(function (waterLevelResultsb) {
        //        console.log("Water Level Results:", waterLevelResultsb.features);
        //        const waterLevelCountb = waterLevelResultsb.features.length;

        //        document.getElementById("infoPanelCount21").innerText = `Water Level Observation Well: ${waterLevelCountb}`;
        //        // Process water level results as needed
        //    });

        //    WaterQuality.queryFeatures(anotherLayerQueryb).then(function (waterqResultsb) {
        //        console.log("Water Quality Results:", waterqResultsb.features);

        //        const waterqualityCountb = waterqResultsb.features.length;

        //        document.getElementById("infoPanelCount22").innerText = `Water Quality Observation Well: ${waterqualityCountb}`;

        //        // Process another layer results as needed
        //    });

        //    Well.queryFeatures(wellQueryb).then(function (wellResultsb) {
        //        console.table("Well Results: ", wellResultsb.features);

        //        const wellCountb = wellResultsb.features.length;

        //        document.getElementById("infoPanelCount23").innerText = `Well: ${wellCountb}`;
        //        // Process another layer results as needed
        //    });

        //    ArtificialResourceLayer.queryFeatures(geoQueryb).then(function (geoResultsb) {
        //        console.log("Geo Results:", geoResultsb.features);
        //        // Process another layer results as needed
        //        const arsCountb = geoResultsb.features.length;

        //        document.getElementById("infoPanelCount24").innerText = `ARS and WCS: ${arsCountb}`;
        //    });

        //    Rainguage.queryFeatures(rainQueryb).then(function (rainResultsb) {
        //        console.log("Rain Results:", rainResultsb.features);

        //        const rainCountb = rainResultsb.features.length;

        //        document.getElementById("infoPanelCount25").innerText = `Rainguage: ${rainCountb}`;
        //        // Process another layer results as needed
        //    });

        //    WaterFlow.queryFeatures(wfQueryb).then(function (wfResultsb) {
        //        console.log("WF Results:", wfResultsb.features);

        //        const wfCountb = wfResultsb.features.length;

        //        document.getElementById("infoPanelCount26").innerText = `Water Flow Meter: ${wfCountb}`;
        //        // Process another layer results as needed
        //    });

    }
    //  district

    //view.when(() => {

    //    view.on("click", function (event) {
    //        // Search for graphics at the clicked location.
    //        view.hitTest(event).then(function (response) {
    //            const graphicHits = response.results?.filter(
    //                (hitResult) =>
    //                    hitResult.type === "graphic" &&
    //                    hitResult.graphic.layer === DistrictLayer
    //            );

    //            if (graphicHits?.length > 0) {
    //                const clickedFeatures = graphicHits[0].graphic;
    //                const commonIDd = clickedFeatures.attributes.district; // Adjust attribute name as per your data

    //                // Query related features from different layers based on the common ID
    //                queryRelatedFeaturesd(commonIDd);
    //                const selecteddist = clickedFeatures.attributes.district;
    //                fetchWellCountFordist(selecteddist);

    //                // Continue with the rest of your code...
    //            }
    //        });
    //    });
    //});

    function queryRelatedFeaturesd(commonIDd) {
        // Assuming WaterLevelLayer and AnotherLayer are your related layers
        const waterLevelQueryd = WaterLevel.createQuery();
        waterLevelQueryd.where = `district     = '${commonIDd}'`;

        const anotherLayerQueryd = WaterQuality.createQuery();
        anotherLayerQueryd.where = `district     = '${commonIDd}'`;

        const wellQueryd = Well.createQuery();
        wellQueryd.where = `district    = '${commonIDd}'`;


        const geoQueryd = ArtificialResourceLayer.createQuery();
        geoQueryd.where = `districtna      = '${commonIDd}'`;

        const rainQueryd = Rainguage.createQuery();
        rainQueryd.where = `districtname        = '${commonIDd}'`;

        const wfQueryd = WaterFlow.createQuery();
        wfQueryd.where = `district        = '${commonIDd}'`;


        // Perform the queries
        //    WaterLevel.queryFeatures(waterLevelQueryd).then(function (waterLevelResults) {
        //        console.log("Water Level Results d:", waterLevelResults.features);
        //        const waterLevelCount = waterLevelResults.features.length;

        //        document.getElementById("infoPanelCount51").innerText = `Water Level Observation Well: ${waterLevelCount}`;
        //        // Process water level results as needed
        //    });

        //    WaterQuality.queryFeatures(anotherLayerQueryd).then(function (waterqResults) {
        //        console.log("Water Quality Results d:", waterqResults.features);

        //        const waterqualityCount = waterqResults.features.length;

        //        document.getElementById("infoPanelCount52").innerText = `Water Quality Observation Well: ${waterqualityCount}`;

        //        // Process another layer results as needed
        //    });

        //    // Well.queryFeatures(wellQuery).then(function (wellResults) {
        //    // console.table("Well Results: ", wellResults.features);

        //    // const wellCount = wellResults.features.length;

        //    // document.getElementById("infoPanelCount3").innerText = `Well: ${wellCount}`;

        //    // Process another layer results as needed
        //    // });

        //    ArtificialResourceLayer.queryFeatures(geoQueryd).then(function (geoResults) {
        //        console.log("Geo Results:", geoResults.features);
        //        // Process another layer results as needed
        //        const arsCount = geoResults.features.length;

        //        document.getElementById("infoPanelCount54").innerText = `ARS and WCS: ${arsCount}`;
        //    });

        //    Rainguage.queryFeatures(rainQueryd).then(function (rainResults) {
        //        console.log("Rain Results d:", rainResults.features);

        //        const rainCount = rainResults.features.length;

        //        document.getElementById("infoPanelCount55").innerText = `Rainguage: ${rainCount}`;
        //        // Process another layer results as needed
        //    });

        //    WaterFlow.queryFeatures(wfQueryd).then(function (wfResults) {
        //        console.log("WF Results d:", wfResults.features);

        //        const wfCount = wfResults.features.length;

        //        document.getElementById("infoPanelCount56").innerText = `Water Flow Meter: ${wfCount}`;
        //        // Process another layer results as needed
        //    });




        //}

        //function fetchWellCountFordist(district) {
        //    // Construct the query URL
        //    const queryParams = new URLSearchParams({
        //        where: `district = '${district}'`,
        //        returnCountOnly: true,
        //        f: 'json' // Specify JSON format for response
        //    });
        //    const apiUrld = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/Mapwell/MapServer/0/query?${queryParams}`;

        //    // Fetch the data from the API
        //    fetch(apiUrld)
        //        .then(response => response.json())
        //        .then(data => {
        //            // Check if the response has a valid count property
        //            if (data.hasOwnProperty('count')) {
        //                // Update the HTML element with the well count for the selected state
        //                document.getElementById("infoPanelCount53").innerText = `Well Registered: ${data.count}`;
        //            } else {
        //                console.error(`Invalid response format for well count for ${district}`);
        //            }
        //        })
        //        .catch(error => {
        //            console.error(`Error fetching well count for ${district}:`, error);
        //        });
    }



    // statepopup

    //view.when(() => {

    //    view.on("click", function (event) {
    //        // Search for graphics at the clicked location.
    //        view.hitTest(event).then(function (response) {
    //            const graphicHits = response.results?.filter(
    //                (hitResult) =>
    //                    hitResult.type === "graphic" &&
    //                    hitResult.graphic.layer === StateLayer
    //            );

    //            if (graphicHits?.length > 0) {
    //                const clickedFeatures = graphicHits[0].graphic;
    //                const commonIDs = clickedFeatures.attributes.State; // Adjust attribute name as per your data

    //                // Query related features from different layers based on the common ID
    //                queryRelatedFeaturesS(commonIDs);
    //                const selectedState = clickedFeatures.attributes.State;
    //                fetchWellCountForState(selectedState);

    //                // Continue with the rest of your code...
    //            }
    //        });
    //    });
    //});

    function queryRelatedFeaturesS(commonIDs) {
        // Assuming WaterLevelLayer and AnotherLayer are your related layers
        const waterLevelQuery = WaterLevel.createQuery();
        waterLevelQuery.where = `state    = '${commonIDs}'`;

        const anotherLayerQuery = WaterQuality.createQuery();
        anotherLayerQuery.where = `state    = '${commonIDs}'`;

        //const wellQuery = Well.createQuery();
        //wellQuery.where = `state   = '${commonIDs}'`;


        const geoQuery = ArtificialResourceLayer.createQuery();
        geoQuery.where = `statename     = '${commonIDs}'`;

        const rainQuery = Rainguage.createQuery();
        rainQuery.where = `statename      = '${commonIDs}'`;

        const wfQuery = WaterFlow.createQuery();
        wfQuery.where = `state       = '${commonIDs}'`;


        // Perform the queries
        //    WaterLevel.queryFeatures(waterLevelQuery).then(function (waterLevelResults) {
        //        console.log("Water Level Results:", waterLevelResults.features);
        //        const waterLevelCount = waterLevelResults.features.length;

        //        document.getElementById("infoPanelCount1").innerText = `Water Level Observation Well: ${waterLevelCount}`;
        //        // Process water level results as needed
        //    });

        //    WaterQuality.queryFeatures(anotherLayerQuery).then(function (waterqResults) {
        //        console.log("Water Quality Results:", waterqResults.features);

        //        const waterqualityCount = waterqResults.features.length;

        //        document.getElementById("infoPanelCount2").innerText = `Water Quality Observation Well: ${waterqualityCount}`;

        //        // Process another layer results as needed
        //    });

        //   // Well.queryFeatures(wellQuery).then(function (wellResults) {
        //       // console.table("Well Results: ", wellResults.features);

        //       // const wellCount = wellResults.features.length;

        //       // document.getElementById("infoPanelCount3").innerText = `Well: ${wellCount}`;

        //        // Process another layer results as needed
        //   // });

        //    ArtificialResourceLayer.queryFeatures(geoQuery).then(function (geoResults) {
        //        console.log("Geo Results:", geoResults.features);
        //        // Process another layer results as needed
        //        const arsCount = geoResults.features.length;

        //        document.getElementById("infoPanelCount4").innerText = `ARS and WCS: ${arsCount}`;
        //    });

        //    Rainguage.queryFeatures(rainQuery).then(function (rainResults) {
        //        console.log("Rain Results:", rainResults.features);

        //        const rainCount = rainResults.features.length;

        //        document.getElementById("infoPanelCount5").innerText = `Rainguage: ${rainCount}`;
        //        // Process another layer results as needed
        //    });

        //    WaterFlow.queryFeatures(wfQuery).then(function (wfResults) {
        //        console.log("WF Results:", wfResults.features);

        //        const wfCount = wfResults.features.length;

        //        document.getElementById("infoPanelCount6").innerText = `Water Flow Meter: ${wfCount}`;
        //        // Process another layer results as needed
        //    });




        //}

        //function fetchWellCountForState(state) {
        //    // Construct the query URL
        //    const queryParams = new URLSearchParams({
        //        where: `state = '${state}'`,
        //        returnCountOnly: true,
        //        f: 'json' // Specify JSON format for response
        //    });
        //    const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/Mapwell/MapServer/0/query?${queryParams}`;

        //    // Fetch the data from the API
        //    fetch(apiUrl)
        //        .then(response => response.json())
        //        .then(data => {
        //            // Check if the response has a valid count property
        //            if (data.hasOwnProperty('count')) {
        //                // Update the HTML element with the well count for the selected state
        //                document.getElementById("infoPanelCount3").innerText = `Well Registered: ${data.count}`;
        //            } else {
        //                console.error(`Invalid response format for well count for ${state}`);
        //            }
        //        })
        //        .catch(error => {
        //            console.error(`Error fetching well count for ${state}:`, error);
        //        });
    }


    //

    // console.table(""Well Results:", wellResults.features);

    //popup hover ends

    //const selectLayer = new GraphicsLayer();
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
            //$(".map_view").addClass("toggled");
            $('#popupfeed').hide();
            $('#mapInfo').hide();
            $('#close-sidebar2').css('display', 'none');
            $('#show-sidebar').css('display', 'flex');
        });
        $("#close-sidebar2").click(function () {
            $(".page-wrapper").removeClass("toggled");
            //$(".map_view").addClass("toggled");
            $('#popupfeed').hide();
            $('#mapInfo').hide();
            $('#close-sidebar2').css('display', 'none');
            $('#show-sidebar').css('display', 'flex');
        });
        $("#show-sidebar").click(function () {
            $(".page-wrapper").addClass("toggled");
            $('#popupModal').hide();
            //$(".map_view").removeClass("toggled");
            $('#show-sidebar').css('display', 'none');
            $('#close-sidebar2').css('display', 'flex');
            GPLayer.visible = true;
            BlockLayer.visible = true;
            DistrictLayer.visible = true;
            StateLayer.visible = true;
            var initialCenter = [78, 22];
            var initialZoom = 4;

            document.getElementById("show-sidebar").addEventListener("click", function () {
                view.goTo({
                    center: initialCenter,
                    zoom: initialZoom
                });
            });
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

    //infoBtn.addEventListener('click', () => {
    //    imgBox.classList.toggle('active');
    //})

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
        StateLayer.visible = true;
        DistrictLayer.visible = false;
        BlockLayer.visible = false;
        GPLayer.visible = false;

        // Show the selected layer
        // For example, if you want to show featureLayer1 when it's selected
        //StateLayer.visible = true;
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



    // Access the dropdown/select element
    const cntrySelectd = document.getElementById('cntry');
    cntrySelectd.addEventListener('change', function () {
        const selectedValue = cntrySelectd.value;

        if (selectedValue === "--Select State--" || selectedValue === "All") {

            DistrictLayer.definitionExpression == "";
            DistrictLayer.featureEffect = new FeatureEffect({
                filter: new FeatureFilter({
                    where: "1=1"
                }),
                excludedEffect: excludedEffect,
                // includedEffect: includedEffect

            });

            DistrictLayer.visible = true;

        } else {
            DistrictLayer.visible = true;
        }



        updateLayerVisibilityd();
    });

    function updateLayerVisibilityd() {

        console.log("Dist visibility updated:", DistrictLayer.visible);

    }


    //////

    ///Well Inventory Statstics
    const baseUrl = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query';

    // Get the select element
    const stateSelect = document.getElementById("cntry");

    // Event listener for the "change" event on the select element
    stateSelect.addEventListener("change", function () {
        // Get the selected district code
        const selectedstate = stateSelect.value;
        Well.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "state = '" + selectedstate + "'"
            }),
            excludedEffect: excludedEffect
        });
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
    const baseUrld = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query';
    const districtSelect = document.getElementById("District");
    districtSelect.addEventListener("change", function () {
        const selectedDistrict = districtSelect.value;
        Well.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "district  = '" + selectedDistrict + "'"
            }),
            excludedEffect: excludedEffect
        });

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

    const baseUrlb = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query';
    const blockSelect = document.getElementById("Block");
    blockSelect.addEventListener("change", function () {
        const selectedblock = blockSelect.value;

        Well.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                where: "block   = '" + selectedblock + "'"
            }),
            excludedEffect: excludedEffect
        });

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
    const baseUrlt = 'https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query';

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
            console.log("Total Count:", data.count);
            return data.count;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
    window.onload = async function () {
        const totalCount = await fetchTotalCount();
        $("#well_count").text(totalCount);
    };
    let totalCountValue;
    const executeQueriesButton = document.getElementById("executeQueriesButton");
    executeQueriesButton.addEventListener("click", async function () {
        try {
            const totalCount = await fetchTotalCount();
            totalCountValue = totalCount;
            document.getElementById("well_count").textContent = totalCountValue;
        } catch (error) {
            console.error("Error fetching total count:", error);
        }
    });

    //Rainguage.popupTemplate = new PopupTemplate({
    //    title: "Rainfall Data",
    //    content: createCustomPopupContentR,
    //});

    function createCustomPopupContentR(feature) {

        const attributesrg = feature.graphic.attributes;

        function showNewPopupR() {
            const newPopupR = document.getElementById('newPopupR');
            newPopupR.style.display = 'block';
        }
        const button = document.createElement("button");
        button.id = "rainfall_id";
        button.classList.add("btn-view");
        button.innerText = "View Data";
        button.addEventListener("click", () => {
            console.log("Rainfall ID ", attributesrg.id)
            var valuer = attributesrg.id;
            if (valuer == "") {
                alert("Plase Enter Rainguage Id");
                return false;
            } else {
                $('#rainflow_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_rainfall",
                    data: "{'id':'" + valuer + "'}",
                    dataType: 'JSON',
                    success: function (response) {

                        if (response == "Logout") {
                            window.location = "/Home/LogOut";
                        }
                        var Tbodyhtml = '';
                        if (response == 'No Data') {
                            Tbodyhtml = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
                            $('#rainfalltbl_details').html(Tbodyhtml);

                        } else if (response == 'Error') {
                            $('#rainfalltbl_details').hide();
                        } else {

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
                                    curr_month = nowDate.getMonth() + 1; // months are zero based
                                    curr_year = nowDate.getFullYear();
                                }
                                Tbodyhtml += '<tr id="AWP1_TR_data_waterflow' + i + '"><td id="srNo">' + (i + 1) + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].rf_meta_id + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].rf_reading + '</td>';
                                Tbodyhtml += '<td id="vill">' + curr_date + "-" + curr_month + "-" + curr_year + '</td></tr>';



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
        const installationDate = attributesrg.date_time;
        const dateObj = new Date(installationDate);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear().toString();

        const formattedDate = `${day}-${month}-${year}`;

        popupContentR.innerHTML = `
       
      <strong>State:</strong>    ${displayedState}<br>
      <strong>District:</strong>   ${displayedDist}<br>
      <strong>Block:</strong>   ${displayedBlock}<br>
      <strong>Gram Panchayat:</strong>   ${displayeGP}<br>
      <strong>Village Name: </strong>  ${attributesrg.village}<br>
<strong>ID:</strong> ${attributesrg.id}<br>
    <strong>Type of Rainguage:</strong>   ${attributesrg.raingauge}<br>
<strong> Location of Rainguage Station:</strong>  ${attributesrg.locationde}<br>
     <strong>Rainguage Installation Date:</strong> ${formattedDate}<br>
     
   <button id="Exportdatarg" class="Btn">Export</button>
     `;


        const exportButton = popupContentR.querySelector("#Exportdatarg");
        exportButton.addEventListener("click", function () {
            const rgID = attributesrg.id;
            console.log("Exporting data for rg ID:", rgID);


            fetchDataForrgID(rgID).then(data => {
                console.log("Data from server:", data)

                const csvContent = convertrgDataToCSV(data);


                const blob = new Blob([csvContent], {
                    type: "text/csv"
                });


                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `rgID_${rgID}.csv`;


                document.body.appendChild(downloadLink);
                downloadLink.click();


                document.body.removeChild(downloadLink);
            }).catch(error => {
                console.error("Error fetching data:", error);

            });
        });

        function fetchDataForrgID(rgID) {

            return new Promise((resolve, reject) => {

                $.ajax({
                    type: "POST",
                    url: "/mapview/fetchDataForrgID",
                    data: {
                        id: rgID
                    },
                    success: function (response) {
                        if (response === "No Data" || response === "Error") {
                            reject(new Error(response));
                        } else {
                            resolve(response);
                        }
                    },
                    error: function (xhr, status, error) {
                        reject(new Error(error));
                    }
                });
            });
        }



        //

        function convertrgDataToCSV(data) {
            const headers = ['State', 'District', 'Block', 'Gram_Panchayat',
                'Village', 'ID', 'Rainguage', 'Location_Details', 'Rainfall_date', 'Rainfall_Reading'
            ];

            // Check if data is an array
            if (!Array.isArray(data)) {
                throw new Error("Data is not an array.");
            }

            // Construct CSV content
            const csvContent = [headers.join(',')]; // Start with headers
            csvContent.push(...data.map(row => headers.map(header => row[header] ?? '').join(','))); // Add rows

            // Return CSV content as string
            return csvContent.join('\n');
        }




        popupContentR.appendChild(button);
        return popupContentR;



        ///
    }
    const closeButtonr = document.getElementById('closePopupR');
    closeButtonr.addEventListener("click", () => {
        const newPopupR = document.getElementById('newPopupR');
        newPopupR.style.display = 'none';
    });




    //WaterLevel.popupTemplate = new PopupTemplate({
    //    title: "Water Level",
    //    content: createCustomPopupContentW,

    //});
    function createCustomPopupContentW(feature) {
        const attributeswl = feature.graphic.attributes;

        function showNewPopup() {
            const newPopup = document.getElementById('newPopup');
            console.log("newPopup element:", newPopup);
            newPopup.style.display = 'block';
            const graphPopup = document.getElementById('graphPopup');
            graphPopup.style.display = 'none';
        }
        const button = document.createElement("button");
        button.id = "gwl_id";
        button.classList.add("btn-view");
        button.innerText = "View Data";
        const buttonViewGraph = document.createElement("button");
        buttonViewGraph.id = "gwl_view_graph";
        buttonViewGraph.innerText = "View Graph";
        buttonViewGraph.addEventListener("click", () => {
            console.log("Water Level ID (View Graph):", attributeswl.partition_id);
            const partition_id = attributeswl.partition_id;
            console.log(partition_id, "sss")
            function handleViewGraphClick(partition_) {
                console.log("Handling View Graph click for ID:", partition_id);
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_graph_data",
                    data: "{'partition_id':'" + partition_id + "'}",
                    dataType: 'JSON',
                    success: function (graphData) {
                        console.log("Graph data received:", graphData);

                        displayGraphPopup(graphData);
                    }
                });
            }
            let myChart;
            var newChart;

            function displayGraphPopup(graphData) {
                if (!graphData) {
                    console.error('Graph data is undefined or null.');
                    return;
                }
                const graphPopup = document.getElementById('graphPopup');
                const closeGraphPopup = document.getElementById('closeGraphPopup');
                const graphCanvas = document.getElementById('graphCanvas');
                const ctx = graphCanvas.getContext('2d');
                const dates = graphData.map(entry => new Date(parseInt(entry.gwl_date.slice(6, -2))));
                const formattedDates = dates.map(date => {
                    return date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                });
                console.log(formattedDates);
                const waterLevels = graphData.map(entry => entry.gwl_reading);
                console.log('Dates:', dates);
                graphPopup.style.display = 'block';
                var canvasId = "graphCanvas";
                let chartStatus = Chart.getChart(canvasId);
                if (chartStatus != undefined) {
                    chartStatus.destroy();
                }
                var invertedWaterLevels = waterLevels.map(value => -value);
                // invertedWaterLevels.push(0);
                var ctx2 = document.getElementById(canvasId).getContext('2d');
                var newChart = new Chart(ctx2, {
                    type: 'line',
                    data: {
                        labels: formattedDates,
                        datasets: [{
                            label: 'Depth to Water Level',
                            data: invertedWaterLevels,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',

                            borderWidth: 1
                        }]
                        //{
                        //    label: 'Regression Line',
                        //    //data: calculateRegressionLine(formattedDates, invertedWaterLevels),
                        //    data: invertedWaterLevels,
                        //    borderColor: 'rgba(255,0,0,1)',
                        //    borderWidth: 1,
                        //    fill: false,
                        //    pointRadius:0
                        //}]
                    },




                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'mbgl - Meter Below Ground Level',
                                font: {
                                    weight: 'bold',
                                    size: 16
                                },
                                position: 'bottom',
                            }
                        },

                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Time',
                                    font: {
                                        weight: 'bold',
                                        size: 14
                                    }
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'mbgl',
                                    font: {
                                        weight: 'bold',
                                        size: 14
                                    }
                                },
                            },
                            xAxes: [{
                                type: 'time',
                                title: {
                                    display: true,
                                    text: 'Time'
                                },
                                time: {
                                    unit: 'month',
                                    displayFormats: {
                                        day: 'MMM YYYY'
                                    }
                                },
                                position: 'bottom',
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Date'
                                }
                            }],
                            yAxes: [{
                                title: {
                                    display: true,
                                    text: 'mbgl'
                                },
                                type: 'linear',
                                position: 'left',
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Reading'
                                }
                            }]
                        }
                    }
                });

                //function calculateRegressionLine(xValues, yValues) {
                //    const n = xValues.length;
                //    let sumX = 0;
                //    let sumY = 0;
                //    let sumXY = 0;
                //    let sumXX = 0;
                //    for (let i = 0; i < n; i++) {
                //        sumX += Date.parse(xValues[i]);
                //        sumY += yValues[i];
                //        sumXY += Date.parse(xValues[i]) * yValues[i];
                //        sumXX += Date.parse(xValues[i]) * Date.parse(xValues[i]);
                //        console.log(xValues[i], yValues[i]);
                //    }
                //    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);

                //    const intercept = (sumY - slope * sumX) / n;
                //    console.log(slope, intercept)
                //    const regressionLine = [];
                //    for (let i = 0; i < n; i++) {
                //        regressionLine.push(slope * Date.parse(xValues[i]) + intercept);
                //    }
                //    return regressionLine;
                //}



                closeGraphPopup.addEventListener("click", () => {
                    graphPopup.style.display = 'none';
                });
            }
            handleViewGraphClick(attributeswl.partition_);
        });


        button.addEventListener("click", () => {
            console.log("Water Level ID ", attributeswl.partiion_id)
            var value = attributeswl.partition_id;
            //var value = $('#gwl_id').val();
            if (value == "") {
                alert("Please Enter Water level Id");
                return false;
            } else {

                $('#gwl_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_gwl",
                    data: "{'partition_id':'" + value + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        if (response == "Logout") {
                            window.location = "/Home/LogOut";
                        }

                        console.log(response)
                        var Tbodyhtml = '';
                        if (response == 'No Data') {
                            Tbodyhtml = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
                            $('#tbl_details').html(Tbodyhtml);

                        } else if (response == 'Error') {
                            $('#gwl_datatable').hide();
                        } else {
                            var curr_date;
                            var curr_month;
                            var curr_year;
                            for (var i = 0; i < response.length; i++) {
                                if (response[i].gwl_date == null) {
                                    curr_date = "";
                                    curr_month = "";
                                    curr_year = "";
                                } else {
                                    var nowDate = new Date(parseInt(response[i].gwl_date.substr(6)))
                                    curr_date = nowDate.getDate();
                                    curr_month = nowDate.getMonth() + 1; // months are zero based
                                    curr_year = nowDate.getFullYear();
                                }
                                Tbodyhtml += '<tr id="AWP1_TR_data_waterflow' + i + '"><td id="srNo">' + (i + 1) + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].partition_id + '</td>';

                                var gwlReading = response[i].gwl_reading !== null ? response[i].gwl_reading : "-";
                                Tbodyhtml += '<td id="vill">' + gwlReading + '</td>';

                                Tbodyhtml += '<td id="vill">' + curr_date + "-" + curr_month + "-" + curr_year + '</td></tr>';


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
        const gpValuewl = attributeswl.grampanchayat;
        const dateStr = attributeswl.datetime;
        let formattedDate;

        if (dateStr) {
            const date = new Date(dateStr);
            const options = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            };
            formattedDate = date.toLocaleDateString('en-IN', options);
        } else {
            formattedDate = "No Date";
        }

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
       <strong>ID:</strong> ${attributeswl.partition_id}<br>
      <strong>State:</strong>   ${displayedStatewl}<br>
      <strong>District:</strong>   ${displayedDistwl}<br>
      <strong>Block:</strong>   ${displayedBlockwl}<br>
      <strong>Gram Panchayat:</strong>   ${displayeGPwl}<br>
      <strong>Site Name: </strong>  ${attributeswl.sitename}<br>
 <strong>Well ID:</strong>   ${attributeswl.wellid}<br>
 <strong>Type Of Well:</strong>   ${attributeswl.typeofwell}<br>
<strong>Date Time:</strong>   ${formattedDate}<br>
<strong>Height Of Measuring Point (in magl):</strong>   ${attributeswl.height_of_measuring_point}<br>
  <strong> Diameter Of Well (in m):</strong>  ${attributeswl.diameter_of_well}<br>
<strong> Depth Of Well(in mbmp):</strong>  ${attributeswl.welldepth}<br>
 <strong>Source Ownership: </strong>  ${attributeswl.source_ownership_type}<br>
<strong> Location Details:</strong>  ${attributeswl.locationdetails}<br>
<button id="Exportdatawl" class="Btn">Export</button>
 
     `;

        const exportButton = popupContent.querySelector("#Exportdatawl");
        exportButton.addEventListener("click", function () {
            const wlID = attributeswl.partition_id;
            console.log("Exporting data for wl ID:", wlID);


            fetchDataForwlID(wlID).then(data => {
                console.log("Data from server:", data)

                const csvContent = convertwlDataToCSV(data);


                const blob = new Blob([csvContent], {
                    type: "text/csv"
                });


                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `wlID_${wlID}.csv`;


                document.body.appendChild(downloadLink);
                downloadLink.click();


                document.body.removeChild(downloadLink);
            }).catch(error => {
                console.error("Error fetching data:", error);

            });
        });

        function fetchDataForwlID(wlID) {

            return new Promise((resolve, reject) => {

                $.ajax({
                    type: "POST",
                    url: "/mapview/fetchDataForwlID",

                    data: {
                        part_id: wlID
                    },
                    success: function (response) {
                        if (response === "No Data" || response === "Error") {
                            reject(new Error(response));
                        } else {
                            resolve(response);
                        }
                    },
                    error: function (xhr, status, error) {
                        reject(new Error(error));
                    }
                });
            });
        }



        //




        function convertwlDataToCSV(data) {
            const headers = ['State', 'District', 'Block', 'Gram_Panchayat', 'Site_Name',
                'Well_ID', 'Type_Of_Well', 'Date_Time',
                'Depth_of_Well', 'Location_Details'
            ];

            // Check if data is an array
            if (!Array.isArray(data)) {
                throw new Error("Data is not an array.");
            }

            const csvContent = [
                headers.join(','),
                ...data.map(row => headers.map(header => row[header]).join(','))
            ].join('\n');

            return csvContent;
        }




        popupContent.appendChild(button);
        popupContent.appendChild(buttonViewGraph);

        return popupContent;
    }
    const closeButton = document.getElementById('closePopup');
    closeButton.addEventListener("click", () => {
        const newPopup = document.getElementById('newPopup');
        newPopup.style.display = 'none';
    });




    //WaterFlow.popupTemplate = new PopupTemplate({
    //    title: "Water Flow Meter Data",
    //    content: createCustomPopupContentWF,
    //});
    function createCustomPopupContentWF(feature) {
        const attributeswf = feature.graphic.attributes;

        function showNewPopupwf() {
            const newPopup = document.getElementById('newPopupWf');
            newPopup.style.display = 'block';
        }
        const button = document.createElement("button");
        button.id = "flow_id";
        button.classList.add("btn-view");
        button.innerText = "View Data";
        button.addEventListener("click", () => {
            console.log("Water Flow ID: ", attributeswf.id);
            var valuewf = attributeswf.id;
            if (valuewf == "") {
                alert("Please Enter Water Flow Id");
                return false;
            } else {
                $('#flow_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_flow",
                    data: "{'id':'" + valuewf + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        if (response == "Logout") {
                            window.location = "/Home/LogOut";
                        }
                        var Tbodyhtml = '';
                        if (response == 'No Data') {
                            Tbodyhtml = '<tr colspan="5"><td colspan="5" style="text-align: center;">No Data</td></tr>';
                            $('#flowtbl_details').html(Tbodyhtml);

                        } else if (response == 'Error') {
                            $('#flowtbl_details').hide();
                        } else {
                            for (var i = 0; i < response.length; i++) {



                                const dateStr = response[i].WaterReading_Date;

                                const date = new Date(dateStr);

                                const day = String(date.getDate()).padStart(2, '0');
                                const month = String(date.getMonth() + 1).padStart(2, '0');
                                const year = date.getFullYear();

                                const formattedDate = `${day}/${month}/${year}`;


                                Tbodyhtml += '<tr id="AWP1_TR_data_waterflow' + i + '"><td id="srNo">' + (i + 1) + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].wf_meta_id + '</td>';
                                Tbodyhtml += '<td id="vill">' + response[i].MeterReading + '</td>';
                                Tbodyhtml += '<td id="vill">' + formattedDate + '</td></tr >';

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
        const gpValuewf = attributeswf.grampanchayat;
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



        const dateStr = attributeswf.waterflowmeter_installation_date;

        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        const popupContentwf = document.createElement("divwf");
        popupContentwf.innerHTML = `
       <strong> ID:</strong> ${attributeswf.id}<br>
      <strong>State:</strong>   ${displayedStatewf}<br>
      <strong>District:</strong>   ${displayedDistwf}<br>
      <strong>Block:</strong>   ${displayedBlockwf}<br>
      <strong>Gram Panchayat:</strong>   ${displayeGPwf}<br>
      <strong>Village Name:</strong>   ${attributeswf.village}<br>
<strong>Meter ID:</strong>   ${attributeswf.meterid}<br>
 <strong>Water Flow Meter Installation Date:</strong>  ${formattedDate}<br>
 <strong>Type of Well:</strong>   ${attributeswf.welltype}<br>
<strong>Pump Type:</strong>   ${attributeswf.pumptype}<br>
<strong>Area Irrigated (ha):</strong>  ${attributeswf.areairrigated}<br>
      <strong>Location of Water Flow Meter:</strong>   ${attributeswf.locationdetails}<br>
    
<button id="Exportdatawf" class="Btn">Export</button>
             
     `;


        const exportButton = popupContentwf.querySelector("#Exportdatawf");
        exportButton.addEventListener("click", function () {
            const wfID = attributeswf.id;
            console.log("Exporting data for wl ID:", wfID);


            fetchDataForwfID(wfID).then(data => {
                console.log("Data from server:", data)

                const csvContent = convertwfDataToCSV(data);


                const blob = new Blob([csvContent], {
                    type: "text/csv"
                });


                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `wfID_${wfID}.csv`;


                document.body.appendChild(downloadLink);
                downloadLink.click();


                document.body.removeChild(downloadLink);
            }).catch(error => {
                console.error("Error fetching data:", error);

            });
        });

        function fetchDataForwfID(wfID) {

            return new Promise((resolve, reject) => {

                $.ajax({
                    type: "POST",
                    url: "/mapview/fetchDataForwfID",
                    data: {
                        id: wfID
                    },
                    success: function (response) {
                        if (response === "No Data" || response === "Error") {
                            reject(new Error(response));
                        } else {
                            resolve(response);
                        }
                    },
                    error: function (xhr, status, error) {
                        reject(new Error(error));
                    }
                });
            });
        }



        //

        function convertwfDataToCSV(data) {
            const headers = ['State', 'District', 'Block', 'Gram_Panchayat', 'Village', 'Meter_ID',
                'Water_Flow_Installation_date', 'Well_Type', 'Pump_type', 'Area_Irrigated',
                'Crop_Irrigated', 'Location_Details', 'Unit_Reading', 'Date_Time_Meter', 'Water_Reading_date', 'Meter_Reading'
            ];

            // Check if data is an array
            if (!Array.isArray(data)) {
                throw new Error("Data is not an array.");
            }

            // Construct CSV content
            const csvContent = [headers.join(',')]; // Start with headers
            csvContent.push(...data.map(row => headers.map(header => row[header] ?? '').join(','))); // Add rows

            // Return CSV content as string
            return csvContent.join('\n');
        }



        popupContentwf.appendChild(button);

        return popupContentwf;
    }

    const closeButtonwf = document.getElementById('closePopupWF');
    closeButtonwf.addEventListener("click", () => {
        const newPopup = document.getElementById('newPopupWf');
        newPopup.style.display = 'none';
    });


    //Well.popupTemplate = new PopupTemplate({
    //    title: "Well Inventory",
    //    content: createCustomPopupContentWell,
    //});

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
        <strong>ID:</strong> ${attributeswell.wellno}<br>
        <strong>State:</strong> ${displayedStatewell}<br>
        <strong>District:</strong> ${displayedDistwell}<br>
        <strong>Block:</strong> ${displayedBlockwell}<br>
        <strong>Gram Panchayat:</strong> ${displayeGPwell}<br>
<strong>Village Name:</strong> ${attributeswell.village}<br>
<strong>Type of Well:</strong> ${attributeswell.well_type_other}<br>
        <strong>Water Level Recorded Date (YYYY/MM/DD):</strong> ${attributeswell.date}<br>
<strong>Well Registration Date (YYYY/MM/DD):</strong> ${attributeswell.datetime}<br>
        
 <strong>Height of Measuring Point (in magl):</strong> ${attributeswell.measuringpoint}<br>
<strong>Diameter of Well (in m) :</strong> ${attributeswell.welldiameter}<br>
<strong>Depth of Well(in m) :</strong> ${attributeswell.waterleveldepth}<br>
<strong>Well Water Potable(Yes/No) :</strong> ${attributeswell.wellwaterpotable}<br>

<strong>Use (irrigation or Drinking/Domestic or Both) :</strong> ${attributeswell.use}<br>
<strong>Pump Installed:</strong> ${attributeswell.pumpinstalled}<br>
<strong>Volumetric/Electric Meter Installed :</strong> ${attributeswell.electricmeterselecteditem}<br>



<strong>Well Depth (mbmp) :</strong> ${attributeswell.welldepth}<br>
<strong>Location Details:</strong> ${attributeswell.locationdetails}<br>
      <button id="Exportdatawell" class="Btn">Export</button>
    `;


        const exportButton = popupContentwell.querySelector("#Exportdatawell");
        exportButton.addEventListener("click", function () {
            const wellID = attributeswell.wellno;
            console.log("Exporting data for Well ID:", wellID);


            fetchDataForwellID(wellID).then(data => {
                console.log("Data from server:", data)

                const csvContent = convertDataToCSV(data);


                const blob = new Blob([csvContent], {
                    type: "text/csv"
                });


                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `wellID_${wellID}.csv`;


                document.body.appendChild(downloadLink);
                downloadLink.click();


                document.body.removeChild(downloadLink);
            }).catch(error => {
                console.error("Error fetching data:", error);

            });
        });

        function fetchDataForwellID(wellID) {

            return new Promise((resolve, reject) => {

                $.ajax({
                    type: "POST",
                    url: "/mapview/fetchDataForwellID",
                    data: {
                        wellno: wellID
                    },
                    success: function (response) {
                        if (response === "No Data" || response === "Error") {
                            reject(new Error(response));
                        } else {
                            resolve(response);
                        }
                    },
                    error: function (xhr, status, error) {
                        reject(new Error(error));
                    }
                });
            });
        }



        //




        function convertDataToCSV(data) {

            const headers = ['State', 'District', 'Block', 'Gram_Panchayat',
                'Village', 'Type_of_Well', 'Date',
                'Height_of_Measuring_Point', 'Diameter_of_well', 'Depth_of_well', 'Well_Water_Portable',
                'Use', 'Pump_Installed', 'Electric_Meter_Selected_Item', 'Well_Depth', 'Location_Details',
            ];


            const csvContent = [
                headers.join(','),
                ...data.map(row => headers.map(header => row[header]).join(','))
            ].join('\n');

            return csvContent;
        }




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


    //WaterQuality.popupTemplate = new PopupTemplate({
    //    title: "Water Quality",
    //    content: createCustomPopupContentWQ,
    //});
    var valuewq;
    $("#yearDropdown").change(function () {
        year = $("#yearDropdown").val();
        $('#wq_datatable').show();
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=utf-8",
            url: "/mapview/get_wq",
            data: "{'id':'" + valuewq + "', 'year': '" + year + "'}",
            dataType: 'JSON',
            success: function (response) {
                if (response == "Logout") {
                    window.location = "/Home/LogOut";
                }
                var Tbodyhtml = '';
                if (response == 'No Data') {
                    Tbodyhtml = '<tr><td colspan="6" style="text-align: center;">No Data</td></tr>';
                    $('#wqtbl_details').html(Tbodyhtml);

                } else if (response == 'Error') {
                    $('#wqtbl_details').hide();
                } else {

                    function calculateOverallAssessment(response) {
                        var water_wquality = "";
                        var weight = 0;

                        for (var i = 0; i < response.length; i++) {
                            var aa = response[i];
                            var aboTDS = parseFloat(aa.tds);
                            var aboTH = parseFloat(aa.th);
                            var aboSulphate = parseFloat(aa.sulphate);
                            var aboChloride = parseFloat(aa.chloride);
                            var aboFluoride = parseFloat(aa.fluoride);
                            var aboNitrate = parseFloat(aa.nitrate);

                            if (aboTDS < 500 && aboTH < 200 && aboSulphate < 200 && aboChloride < 250 && aboFluoride < 1 && aboNitrate < 45) {
                                water_wquality = "Very Good";
                            } else if (aboTDS < 2000 && aboTH < 600 && aboSulphate < 400 && aboChloride < 1000 && aboFluoride < 1.5 && aboNitrate < 45) {
                                water_wquality = "Good";
                            } else {
                                var TDS = aboTDS != 0 ? 4 : 0;
                                var TH = aboTH != 0 ? 3 : 0;
                                var Sulphate = aboSulphate != 0 ? 2 : 0;
                                var Chloride = aboChloride != 0 ? 2 : 0;
                                var Fluoride = aboFluoride != 0 ? 5 : 0;
                                var Nitrate = aboNitrate != 0 ? 4 : 0;

                                weight = TDS + TH + Sulphate + Chloride + Fluoride + Nitrate;

                                var sTDS = (aboTDS / 2000 * 100 * (TDS / weight));
                                var sTH = (aboTH / 600 * 100 * (TH / weight));
                                var sSulphate = (aboSulphate / 400 * 100 * (Sulphate / weight));
                                var sChloride = (aboChloride / 1000 * 100 * (Chloride / weight));
                                var sFluoride = (aboFluoride / 1.5 * 100 * (Fluoride / weight));
                                var sNitrate = (aboNitrate / 45 * 100 * (Nitrate / weight));

                                var sweight = sTDS + sTH + sSulphate + sChloride + sFluoride + sNitrate;

                                if (sweight < 25) {
                                    water_wquality = "Very Good";
                                } else if (sweight >= 25 && sweight <= 50) {
                                    water_wquality = "Good";
                                } else if (sweight >= 51 && sweight <= 75) {
                                    water_wquality = "Poor";
                                } else if (sweight >= 76 && sweight <= 100) {
                                    water_wquality = "Very poor";
                                } else if (sweight > 100) {
                                    water_wquality = "Unsuitable";
                                }
                            }
                        }
                        return water_wquality;
                    }
                    var pvDataIdCounter = 1;
                    var assessmentText = '';
                    var assessmentColor = '';
                    var backgroundColor = '';

                    Tbodyhtml += '<tr>';
                    Tbodyhtml += '<th colspan="5">Well ID: ' + response[0].well_id + '</th>';
                    Tbodyhtml += '</tr>';
                    var overallAssessment = calculateOverallAssessment(response);

                    if (overallAssessment === 'Unsuitable') {
                        assessmentText = 'Unsuitable';
                        assessmentColor = 'white';
                        backgroundColor = 'darkred';
                    } else if (overallAssessment === 'Very poor') {
                        assessmentText = 'Very poor';
                        assessmentColor = 'black';
                        backgroundColor = 'red';
                    } else if (overallAssessment === 'Poor') {
                        assessmentText = 'Poor';
                        assessmentColor = 'black';
                        backgroundColor = 'yellow';
                    } else if (overallAssessment === 'Good') {
                        assessmentText = 'Good';
                        assessmentColor = 'white';
                        backgroundColor = 'green';
                    } else if (overallAssessment === 'Very Good') {
                        assessmentText = 'Very Good';
                        assessmentColor = 'white';
                        backgroundColor = 'darkgreen';
                    }

                    Tbodyhtml += '<tr style="background-color: ' + backgroundColor + '">';
                    Tbodyhtml += '<td colspan="5" style="color: ' + assessmentColor + '">' + assessmentText + '</td>';
                    Tbodyhtml += '</tr>';



                    Tbodyhtml += '<tr>';
                    Tbodyhtml += '<th>Sr. No</th>';
                    Tbodyhtml += '<th>Parameters</th>';
                    Tbodyhtml += '<th>Observed Value</th>';
                    Tbodyhtml += '<th>BIS Standard(IS10500-2012)</th>';
                    Tbodyhtml += '</tr>';
                    for (var i = 0; i < response.length; i++) {
                        var serialNumber = 1;


                        Tbodyhtml += '<tr>';
                        Tbodyhtml += '<td colspan="4" class="hidden-pv-data-id">PV Data ID: ' + pvDataIdCounter + '</td>';
                        Tbodyhtml += '</tr>';


                        pvDataIdCounter++;


                        var parameters = [{
                            label: 'PH',
                            value: response[i].ph,
                            bisValue: '6.5-8.5'
                        },
                        {
                            label: 'EC(ÂµS/cm)',
                            value: response[i].ec,
                            bisValue: '3000'
                        },
                        {
                            label: 'TDS(mg/L)',
                            value: response[i].tds,
                            bisValue: '2000'
                        },
                        {
                            label: 'TH(mg/L)',
                            value: response[i].th,
                            bisValue: '600'
                        },
                        {
                            label: 'Calcium(mg/L)',
                            value: response[i].calcium,
                            bisValue: '200'
                        },
                        {
                            label: 'Magnesium(mg/L)',
                            value: response[i].magnesium,
                            bisValue: '100'
                        },
                        {
                            label: 'Sodium(mg/L)',
                            value: response[i].sodium,
                            bisValue: '200'
                        },
                        {
                            label: 'Pottasium(mg/L)',
                            value: response[i].potassium,
                            bisValue: '12'
                        },
                        {
                            label: 'Carbonate(mg/L)',
                            value: response[i].carbonate,
                            bisValue: ''
                        },
                        {
                            label: 'BiCarbonate(mg/L)',
                            value: response[i].bicarbonate,
                            bisValue: ''
                        },
                        {
                            label: 'Sulphate(mg/L)',
                            value: response[i].sulphate,
                            bisValue: '400'
                        },
                        {
                            label: 'Chloride(mg/L)',
                            value: response[i].chloride,
                            bisValue: '1000'
                        },
                        {
                            label: 'Fluoride(mg/L)',
                            value: response[i].fluoride,
                            bisValue: '1.5'
                        },
                        {
                            label: 'Nitrate(mg/L)',
                            value: response[i].nitrate,
                            bisValue: '45'
                        },
                        {
                            label: 'Aquifer',
                            value: response[i].pv_data_aquifer,
                            bisValue: ''
                        },
                        {
                            label: 'Formation',
                            value: (response[i].formation != "NULL") ? response[i].formation : '',
                            bisValue: ''
                        },
                        {
                            label: 'Well_Type',
                            value: response[i].well_type,
                            bisValue: ''
                        },

                        ];


                        parameters.forEach(function (param) {
                            Tbodyhtml += '<tr>';
                            Tbodyhtml += '<td>' + serialNumber + '</td>';
                            Tbodyhtml += '<td>' + param.label + '</td>';
                            Tbodyhtml += '<td>' + param.value + '</td>';
                            Tbodyhtml += '<td>' + param.bisValue + '</td>';
                            Tbodyhtml += '</tr>';
                            serialNumber++;
                        });
                    }
                    $('#wqtbl_details').html(Tbodyhtml);
                }

            }
        });
    });

    function createCustomPopupContentWQ(feature) {
        const attributesWQ = feature.graphic.attributes;

        function showNewPopupwq() {
            const newPopup = document.getElementById('newPopupwq');
            newPopup.style.display = 'block';
        }
        const buttonElement = document.createElement("button");
        buttonElement.id = "wq_id";
        buttonElement.classList.add("btn-view");
        buttonElement.textContent = "View Data";
        buttonElement.addEventListener("click", () => {
            console.log("Water Qualiity ID: ", attributesWQ.id);
            valuewq = attributesWQ.id;
            if (valuewq == "") {
                alert("Please Enter Water Quality Id");
                return false;
            } else {
                year = $("#yearDropdown").val();
                $('#wq_datatable').show();
                $.ajax({
                    type: "POST",
                    contentType: "application/json;charset=utf-8",
                    url: "/mapview/get_wq",
                    data: "{'id':'" + valuewq + "', 'year': '" + year + "'}",
                    dataType: 'JSON',
                    success: function (response) {
                        if (response == "Logout") {
                            window.location = "/Home/LogOut";
                        }
                        var Tbodyhtml = '';

                        if (response == 'No Data') {
                            Tbodyhtml = '<tr><td colspan="6" style="text-align: center;">No Data</td></tr>';
                            $('#wqtbl_details').html(Tbodyhtml);

                        } else if (response == 'Error') {
                            $('#wqtbl_details').hide();
                        } else {
                            var pvDataIdCounter = 1;


                            Tbodyhtml += '<tr>';
                            Tbodyhtml += '<th colspan="5">Well ID: ' + response[0].well_id + '</th>';
                            Tbodyhtml += '</tr>';

                            Tbodyhtml += '<tr>';
                            Tbodyhtml += '<th>Sr. No</th>';
                            Tbodyhtml += '<th>Parameters</th>';
                            Tbodyhtml += '<th>Observed Value</th>';
                            Tbodyhtml += '<th>BIS Standard(IS10500-2012)</th>';
                            Tbodyhtml += '</tr>';

                            for (var i = 0; i < response.length; i++) {
                                var serialNumber = 1;


                                Tbodyhtml += '<tr>';
                                Tbodyhtml += '<td colspan="4" class="hidden-pv-data-id">PV Data ID: ' + pvDataIdCounter + '</td>';
                                Tbodyhtml += '</tr>';


                                pvDataIdCounter++;


                                var parameters = [{
                                    label: 'PH',
                                    value: response[i].ph,
                                    bisValue: '6.5-8.5'
                                },
                                {
                                    label: 'EC(ÂµS/cm)',
                                    value: response[i].ec,
                                    bisValue: '3000'
                                },
                                {
                                    label: 'TDS(mg/L)',
                                    value: response[i].tds,
                                    bisValue: '2000'
                                },
                                {
                                    label: 'TH(mg/L)',
                                    value: response[i].th,
                                    bisValue: '600'
                                },
                                {
                                    label: 'Calcium(mg/L)',
                                    value: response[i].calcium,
                                    bisValue: '200'
                                },
                                {
                                    label: 'Magnesium(mg/L)',
                                    value: response[i].magnesium,
                                    bisValue: '100'
                                },
                                {
                                    label: 'Sodium(mg/L)',
                                    value: response[i].sodium,
                                    bisValue: '200'
                                },
                                {
                                    label: 'Pottasium(mg/L)',
                                    value: response[i].potassium,
                                    bisValue: '12'
                                },
                                {
                                    label: 'Carbonate(mg/L)',
                                    value: response[i].carbonate,
                                    bisValue: ''
                                },
                                {
                                    label: 'BiCarbonate(mg/L)',
                                    value: response[i].bicarbonate,
                                    bisValue: ''
                                },
                                {
                                    label: 'Sulphate(mg/L)',
                                    value: response[i].sulphate,
                                    bisValue: '400'
                                },
                                {
                                    label: 'Chloride(mg/L)',
                                    value: response[i].chloride,
                                    bisValue: '1000'
                                },
                                {
                                    label: 'Fluoride(mg/L)',
                                    value: response[i].fluoride,
                                    bisValue: '1.5'
                                },
                                {
                                    label: 'Nitrate(mg/L)',
                                    value: response[i].nitrate,
                                    bisValue: '45'
                                },
                                {
                                    label: 'Aquifer',
                                    value: response[i].pv_data_aquifer,
                                    bisValue: ''
                                },
                                {
                                    label: 'Formation',
                                    value: (response[i].formation != "NULL") ? response[i].formation : '',
                                    bisValue: ''
                                },
                                {
                                    label: 'Well_Type',
                                    value: response[i].well_type,
                                    bisValue: ''
                                },


                                ];


                                parameters.forEach(function (param) {
                                    Tbodyhtml += '<tr>';
                                    Tbodyhtml += '<td>' + serialNumber + '</td>';
                                    Tbodyhtml += '<td>' + param.label + '</td>';
                                    Tbodyhtml += '<td>' + param.value + '</td>';
                                    Tbodyhtml += '<td>' + param.bisValue + '</td>';
                                    Tbodyhtml += '</tr>';
                                    serialNumber++;
                                });
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
<strong>Well ID :</strong> ${attributesWQ.well_id}<br>
<strong>Type of Well:</strong> ${attributesWQ.well_type}<br>
<strong>Depth of Well (in mbgl) :</strong> ${attributesWQ.well_depth}<br>
<strong>Source Ownership:</strong> ${attributesWQ.source}<br>
<strong>Acquifier Type :</strong> ${attributesWQ.aquifer}<br>
<button id="Exportdatawq" class="Btn">Export</button>

    `;
        const exportButton = popupContentWQ.querySelector("#Exportdatawq");
        exportButton.addEventListener("click", function () {
            const wqID = attributesWQ.id;
            console.log("Exporting data for wq ID:", wqID);

            fetchDataForwqID(wqID).then(data => {
                console.log("Data from server:", data)

                const csvContent = convertwqDataToCSV(data);


                const blob = new Blob([csvContent], {
                    type: "text/csv"
                });


                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `wqID_${wqID}.csv`;


                document.body.appendChild(downloadLink);
                downloadLink.click();


                document.body.removeChild(downloadLink);
            }).catch(error => {
                console.error("Error fetching data:", error);

            });
        });

        function fetchDataForwqID(wqID) {

            return new Promise((resolve, reject) => {

                $.ajax({
                    type: "POST",
                    url: "/mapview/fetchDataForwqID",
                    data: {
                        id: wqID
                    },
                    success: function (response) {
                        if (response === "No Data" || response === "Error") {
                            reject(new Error(response));
                        } else {
                            resolve(response);
                        }
                    },
                    error: function (xhr, status, error) {
                        reject(new Error(error));
                    }
                });
            });
        }




        function convertwqDataToCSV(data) {
            const headers = ['State', 'District', 'Block', 'Gram_Panchayat', 'Village',
                'Well_ID', 'Type_of_Well', 'Depth_of_Well',
                'Source_Ownership', 'Acqufer_Type', 'Year',
                'PH', 'EC', 'TDS', 'TH', 'Calcium', 'Magnesium', 'Sodium',
                'Pottasium', 'Carbonate', 'Bicarbonate', 'Sulphate', 'Choloride', 'Flouride', 'Nitrate'
            ];


            if (!Array.isArray(data)) {
                throw new Error("Data is not an array.");
            }


            const csvContent = [headers.join(',')]; // Start with headers
            csvContent.push(...data.map(row => headers.map(header => row[header] ?? '').join(','))); // Add rows


            return csvContent.join('\n');
        }



        const buttonContainer = document.createElement("div");
        buttonContainer.appendChild(buttonElement);
        popupContentWQ.appendChild(buttonElement);
        return popupContentWQ;
    }



    const closeButtonwq = document.getElementById('closePopupwq');
    closeButtonwq.addEventListener("click", () => {
        const newPopup = document.getElementById('newPopupwq');
        newPopup.style.display = 'none';
    });

    //wqm starts

    //WaterQualitym.popupTemplate = new PopupTemplate({
    //    title: "Water Quality Monitoring (Through Field Testing Kit):",
    //    content: createCustomPopupContentWQM,
    //});
    function createCustomPopupContentWQM(feature) {
        console.log("Creating custom popup content for Water Quality FTK...");
        const attributesWQM = feature.graphic.attributes;
        let selectedId = attributesWQM.id;

        function showNewPopupwqm() {
            const newPopup = document.getElementById('newPopupwqm');
            newPopup.style.display = 'block';
        }

        function fetchDataAndPopulateTable(wqmID, year) {
            console.log("Fetching data for Water Quality ID:", wqmID, " and Year:", year);
            $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: "/mapview/get_wqm",
                data: JSON.stringify({
                    water_qi_meta_id: wqmID,
                    year: year
                }),
                dataType: 'JSON',
                success: function (response) {
                    if (response == "Logout") {
                        window.location = "/WspNew/WSP_GWM_HOME";
                    }
                    var Tbodyhtml = '';
                    if (response == 'No Data') {
                        Tbodyhtml = '<tr><td colspan="5" style="text-align: center;">No Data</td></tr>';
                        $('#wqtbl_details').html(Tbodyhtml);
                        $('#wqmtbl_details').hide();
                    } else if (response == 'Error') {
                        $('#wqmtbl_details').hide();
                    } else {
                        Tbodyhtml += '<tr>';
                        Tbodyhtml += '<th colspan="5">Well ID: ' + response[0].well_id + '</th>';
                        Tbodyhtml += '</tr>';

                        Tbodyhtml += '<tr>';
                        Tbodyhtml += '<th>Sr. No</th>';
                        Tbodyhtml += '<th>Parameters</th>';
                        Tbodyhtml += '<th>Observed Value</th>';
                        Tbodyhtml += '<th>BIS Standard(IS10500-2012)</th>';
                        Tbodyhtml += '</tr>';

                        response.forEach((item, index) => {
                            var epochTime = item.entry_time_data.match(/\d+/)[0];
                            var entryDate = new Date(parseInt(epochTime));
                            var formattedDate = entryDate.getDate() + '/' + (entryDate.getMonth() + 1) + '/' + entryDate.getFullYear();


                            var parameters = [{
                                label: 'PH',
                                value: item.ph,
                                bisValue: '6.5-8.5'
                            },

                            {
                                label: 'EC(µS/cm)',
                                value: item.chloride,
                                bisValue: ''
                            },
                            {
                                label: 'Chlorine(mg/L)',
                                value: item.free_chlorine,
                                bisValue: '250'
                            },
                            {
                                label: 'Turbudity(mg/L)',
                                value: item.turbudity,
                                bisValue: '1'
                            },
                            {
                                label: 'Total Hardness (mg/L)',
                                value: item.total_hardness_mgl,
                                bisValue: '200'
                            },
                            {
                                label: 'Alkanility (mg/L)',
                                value: item.alkalinity_mgl,
                                bisValue: '200'
                            },
                            {
                                label: 'Nitrate(mg/L)',
                                value: item.nitrate_mgl,
                                bisValue: '45'
                            },
                            {
                                label: 'Fluoride(mg/L)',
                                value: item.fluoride_mgl,
                                bisValue: '1'
                            },
                            {
                                label: 'Arsenic)',
                                value: item.arsenic_mgl,
                                bisValue: ''
                            },
                            {
                                label: 'Electrical Conductivity',
                                value: item.ec_us_cm,
                                bisValue: ''
                            },
                            {
                                label: 'TDS(mg/L)',
                                value: item.tds,
                                bisValue: '500'
                            },
                            {
                                label: 'Bacterial Test',
                                value: item.bacterial_test,
                                bisValue: ''
                            },
                            {
                                label: 'Entry Time',
                                value: formattedDate,
                                bisValue: ''
                            },
                            ];

                            Tbodyhtml += '<tr><th colspan="4">Data</th></tr>';

                            var serialNumber = 1;
                            parameters.forEach(function (param) {
                                Tbodyhtml += '<tr>';
                                Tbodyhtml += '<td>' + serialNumber + '</td>';
                                Tbodyhtml += '<td>' + param.label + '</td>';
                                Tbodyhtml += '<td>' + param.value + '</td>';
                                Tbodyhtml += '<td>' + param.bisValue + '</td>';
                                serialNumber++;
                            });

                            Tbodyhtml += '<tr><td></td></tr>';
                        });

                        $('#wqmtbl_details').html(Tbodyhtml).show(); // Show the table
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching data:", error);
                }
            });
        }

        const viewButton = document.createElement("button");
        viewButton.textContent = "View Data";
        viewButton.classList.add("btn-view");

        let selectedYear = $("#yearDropdownwq").val();

        viewButton.addEventListener("click", () => {
            if (!selectedId) {
                alert("Please Enter Water Quality Id");
                return false;
            } else {
                fetchDataAndPopulateTable(selectedId, selectedYear);
                showNewPopupwqm();
            }
        });


        $("#yearDropdownwq").off("change").on("change", function () {
            selectedYear = $(this).val();
            console.log("Dropdown changed. New selected year: ", selectedYear);
            if (selectedId) {
                fetchDataAndPopulateTable(selectedId, selectedYear);
            } else {
                console.log("No Water Quality ID is selected.");
            }
        });


        $(".wq-item").off("click").on("click", function () {
            selectedId = $(this).data("id");
            console.log("Clicked Item ID: ", selectedId);
            fetchDataAndPopulateTable(selectedId, selectedYear);
        });

        const exportButton = document.createElement("button");
        exportButton.textContent = "Export";
        exportButton.classList.add("Btn");
        exportButton.id = "Btn";
        exportButton.addEventListener("click", function () {
            console.log("Exporting data for wqm ID:", selectedId);

            $.ajax({
                type: "POST",
                url: "/mapview/fetchDataForwqmID",
                data: { id: selectedId },
                success: function (response) {
                    if (response === "No Data" || response === "Error") {
                        console.error("Error: No data available for export");
                    } else {
                        console.log("Data from server:", response);

                        const csvContent = convertwqmDataToCSV(response);
                        const blob = new Blob([csvContent], { type: "text/csv" });
                        const downloadLink = document.createElement('a');
                        downloadLink.href = URL.createObjectURL(blob);
                        downloadLink.download = `wqmID_${selectedId}.csv`;

                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink);
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching data:", error);
                }
            });
        });
        function convertwqmDataToCSV(data) {
            const headers = ['State', 'District', 'Block', 'Gram_Panchayat', 'Village_Name',
                'Well_ID', 'Depth_of_Well', 'Location_Details', 'Entry_Time', 'Chloride',
                'Free_chlorine', 'Turbudity', 'Total_Hardness', 'Alkanility', 'Nitrate', 'Flouride', 'Iron',
                'Arsenic', 'EC', 'TDS', 'Bacterial_Test', 'PH'
            ];


            if (!Array.isArray(data)) {
                throw new Error("Data is not an array.");
            }


            const csvContent = [headers.join(',')]; // Start with headers
            csvContent.push(...data.map(row => headers.map(header => row[header] ?? '').join(','))); // Add rows


            return csvContent.join('\n');
        }
        const dateStr = attributesWQM.entry_time;
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        const popupContentWQM = document.createElement("div");
        popupContentWQM.innerHTML = `
           <strong>ID:</strong> ${attributesWQM.id}<br>
        <strong>Well ID:</strong> ${attributesWQM.well_id}<br>
        <strong>State:</strong> ${attributesWQM.state_name}<br>
        <strong>District:</strong> ${attributesWQM.district_name}<br>
        <strong>Block:</strong> ${attributesWQM.block_name}<br>
        <strong>Gram Panchayat:</strong> ${attributesWQM.gp_name}<br>
      <strong>Village Name:</strong> ${attributesWQM.village}<br>
<strong>Well ID:</strong> ${attributesWQM.well_id}<br>
<strong>Depth of Well(in mbgl):</strong> ${attributesWQM.well_depth_mbgl}<br>
      <strong>Location Details:</strong> ${attributesWQM.location_details}<br>
        
        <strong>Entry Time:</strong> ${formattedDate}<br>
    `;

        const buttonContainer = document.createElement("div");
        buttonContainer.appendChild(viewButton);
        buttonContainer.appendChild(exportButton);
        popupContentWQM.appendChild(buttonContainer);

        console.log("Final popup content:", popupContentWQM);
        return popupContentWQM;
    }

    const closeButtonwqm = document.getElementById('closePopupwqm');
    closeButtonwqm.addEventListener("click", () => {
        const newPopup = document.getElementById('newPopupwqm');
        newPopup.style.display = 'none';
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        const closeButton = document.querySelector('.esri-popup__header-buttons [aria-label="Close"]');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                alert('Close button clicked');
            });
        } else {
            console.error('Close button not found');
        }
    });


    //ends

    //ArtificialResourceLayer.popupTemplate = new PopupTemplate({
    //    title: "Artificial Recharge and Water Conservation Structures",
    //    content: createCustomPopupContentARS,
    //});

    function createCustomPopupContentARS(feature) {

        const attributesARS = feature.graphic.attributes;
        const stateValueARS = attributesARS.statename;
        const distValueARS = attributesARS.districtname;
        const blockValueARS = attributesARS.blockname;
        const gpValueARS = attributesARS.gpname;

        const statePartsARS = stateValueARS.split('_');
        const distPartsARS = distValueARS.split('_');
        const blockPartsARS = blockValueARS.split('_');
        const gpPartARS = gpValueARS.split('_');

        const dateStr = attributesARS.date;
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('en-GB', {
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
        
        <strong>State:</strong> ${displayedStateARS}<br>
        <strong>District:</strong> ${displayedDistARS}<br>
        <strong>Block:</strong> ${displayedBlockARS}<br>
        <strong>Gram Panchayat:</strong> ${displayeGPARS}<br>

<strong>Village Name:</strong> ${attributesARS.village}<br>
<strong>ID:</strong> ${attributesARS.id}<br>
<strong>Type Of Structure:</strong> ${attributesARS.typeofstructure}<br>
<strong>Storage Capacity:</strong> ${attributesARS.storagecapacity}<br>
 <strong>No. Of Fillings:</strong> ${attributesARS.nooffillings}<br>
<strong>Location Details :</strong> ${attributesARS.locationdetail}</br>
<strong>Geotagged Date (MM/DD/YYYY):</strong> ${formattedDate}<br>
<strong>Whether Constructed Under ABY(Yes/No) :</strong> ${attributesARS.wcu_aby}<br>
   <strong>Name of the Scheme :</strong> ${attributesARS.wcu_aby_remark}<br>
 
<a href="/GplevelMobileData/ViewFile?FileName=${attributesARS.image1}">${attributesARS.image1}</a></br>

<button id="ExportdataGeo" class="Btn">Export</button>
<button id="downloadImageButton" class="Btn">Download Image</button>
    `;

        function showImagePopup(imageURL) {

            const imagePopup = new Popup({
                title: "Image Preview",
                content: `<img src="${imageURL}" style="max-width: 100%; max-height: 80vh;">`,
                dockOptions: {
                    buttonEnabled: false
                }
            });


            imagePopup.open();
        }

        const downloadButton = popupContentARS.querySelector("#downloadImageButton");
        const imageLink = popupContentARS.querySelector("a[href^='/GplevelMobileData/ViewFile']");
        downloadButton.addEventListener("click", function () {
            const imageURL = imageLink.getAttribute("href");
            const imageID = attributesARS.id;
            console.log("Geo ID", imageID);
            // Create a download link
            const downloadLink = document.createElement('a');
            downloadLink.href = imageURL;
            downloadLink.download = imageURL.split('/').pop();
            document.body.appendChild(downloadLink);


            downloadLink.click();


            document.body.removeChild(downloadLink);
        });


        imageLink.style.display = "none";


        //for downloading dataid geotagging

        const exportButton = popupContentARS.querySelector("#ExportdataGeo");
        exportButton.addEventListener("click", function () {
            const imageID = attributesARS.id;
            console.log("Exporting data for Image ID:", imageID);


            fetchDataForImageID(imageID).then(data => {
                console.log("Data from server:", data)

                const csvContent = convertDataToCSV(data);


                const blob = new Blob([csvContent], {
                    type: "text/csv"
                });


                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = `Geo_ID_${imageID}.csv`;


                document.body.appendChild(downloadLink);
                downloadLink.click();


                document.body.removeChild(downloadLink);
            }).catch(error => {
                console.error("Error fetching data:", error);

            });
        });

        function fetchDataForImageID(imageID) {

            return new Promise((resolve, reject) => {

                $.ajax({
                    type: "POST",
                    url: "/mapview/fetchDataForImageID",
                    data: {
                        id: imageID
                    },
                    success: function (response) {
                        if (response === "No Data" || response === "Error") {
                            reject(new Error(response));
                        } else {
                            resolve(response);
                        }
                    },
                    error: function (xhr, status, error) {
                        reject(new Error(error));
                    }
                });
            });
        }


        function convertDataToCSV(data) {

            const headers = ['State', 'District', 'Block', 'Gram_Panchayat',
                'Village_Name', 'Type_Of_structure', 'ID',
                'Storage_Capacity', 'No_Of_Fillings', 'Location_Details',
                'Geotagged_date', 'Constructed_Under_ABY', 'Scheme_Name'
            ];


            const csvContent = [
                headers.join(','),
                ...data.map(row => headers.map(header => row[header]).join(','))
            ].join('\n');

            return csvContent;
        }




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


    document.getElementById("searchButtonc").addEventListener("click", function () {
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
        var coords = view.toMap({
            x: event.x,
            y: event.y
        });
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




        // Function to update statistics
        function updateStatistics(event) {
            var selectedDropdown = 'cntry'; // Default value

            if (event && event.target && event.target.id) {
                selectedDropdown = event.target.id;
            }
            // Set the default dropdown to 'cntry' if no event is provided
            var selectedElement = document.getElementById(selectedDropdown);
            var selectedValue = selectedElement.value;

            // Check if the selected value is "--Select State--", if so, set to "--All--"
            var textOnly = selectedValue.split('_')[0];
            if (textOnly === "All") {
                textOnly = "--All--";

            } else if (textOnly !== "--Select State--") {
                var downloadBtn = document.getElementsByClassName("btn_export");

                for (var i = 0; i < downloadBtn.length; i++) {
                    downloadBtn[i].style.display = 'block';
                }
            }

            // Update the dynamic value
            document.getElementById('dynamicValue').textContent = textOnly;
        }

        // Set the initial value to "--All--" only if it's not already set
        if (!document.getElementById('dynamicValue').textContent.trim()) {
            document.getElementById('dynamicValue').textContent = '--All--';
        }

        // Attach event listeners to the dropdowns after setting the initial value
        document.getElementById('cntry').addEventListener('change', updateStatistics);
        document.getElementById('District').addEventListener('change', updateStatistics);
        document.getElementById('Block').addEventListener('change', updateStatistics);
        document.getElementById('Gram').addEventListener('change', updateStatistics);



        // Additional code for dropdown menu management (if needed)
        updateStatistics({}); // Trigger initial update
        document.addEventListener("click", function (event) {
            var dropdown = document.getElementById("dropdown");
            var dropdownBtn = document.getElementById("dropdownBtn");

            if (!dropdown.contains(event.target) && event.target !== dropdownBtn) {
                var dropdownContent = document.getElementById("dropdownContent");
                if (dropdownContent) {
                    dropdownContent.style.display = "none";
                }
            }
        });

        document.getElementById("dropdownBtn").addEventListener("click", function () {
            var dropdownContent = document.getElementById("dropdownContent");
            dropdownContent.style.display === "none" ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
        });

        // Define and push all query promises
        queryPromises.push(executeQuery(ArtificialResourceLayer, "#ar_count"));
        queryPromises.push(executeQuery(WaterQualitym, "#wqm_count"));
        queryPromises.push(executeQuery(WaterLevel, "#wl_count"));
        queryPromises.push(executeQuery(WaterQuality, "#wq_count"));
        queryPromises.push(executeQuery(Rainguage, "#rg_count"));
        queryPromises.push(executeQuery(WaterFlow, "#wf_count"));
        queryPromises.push(executeQuery(WSP, "#wsp_count"));

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
    $(document).ready(function () {
        // Code to execute when the DOM is ready
        executeAllQueries();
    });

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
    document.addEventListener("click", function (event) {
        var dropdown = document.getElementById("dropdown");
        var dropdownBtn = document.getElementById("dropdownBtn");

        if (!dropdown.contains(event.target) && event.target !== dropdownBtn) {
            var dropdownContent = document.getElementById("dropdownContent");
            if (dropdownContent) {
                dropdownContent.style.display = "none";
            }
        }
    });

    document.getElementById("dropdownBtn").addEventListener("click", function () {
        var dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.style.display === "none" ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
    });

    //


    // Convert the original extent array to an extent object
    var originalExtent = {
        center: [78, 22], // Assuming [78, 22] is the center of your extent
        zoom: 2 // Adjust the zoom level as needed
    };

    // Listen for the change event on the select element
    document.getElementById("District").addEventListener("change", function () {
        // Get the selected option
        var selectedOption = this.value;

        // If the selected option is "--select--"
        if (selectedOption === "Select Districts") {
            // Go back to the original extent
            view.goTo(originalExtent); // Replace `view` with your map view object
        }
    });




    //  For All count starts

    document.getElementById("cntry").addEventListener("change", function () {
        const wellCountSpan = document.getElementById("well_count");
        const additionalSpan = document.getElementById("additional_span");
        const wlCountSpan = document.getElementById("wl_count");
        const additionalSpanwl = document.getElementById("additional_spanwl");
        const wqCountSpan = document.getElementById("wq_count");
        const additionalSpanwq = document.getElementById("additional_spanwq");
        const geCountSpan = document.getElementById("ar_count");
        const additionalSpange = document.getElementById("additional_spange");
        const rgCountSpan = document.getElementById("rg_count");
        const additionalSpanrg = document.getElementById("additional_spanrg");
        const wfCountSpan = document.getElementById("wf_count");
        const additionalSpanwf = document.getElementById("additional_spanwf");
        const wqmCountSpan = document.getElementById("wqm_count");
        const additionalSpanwqm = document.getElementById("additional_spanwqm");
        const wspCountSpan = document.getElementById("wsp_count");
        const additionalSpanwsp = document.getElementById("additional_spanwsp");

        // Check if the 'All in Country' option is selected
        if (this.value === "All") {
            // Hide the well_count span
            wellCountSpan.style.display = "none";
            wlCountSpan.style.display = "none";
            wqCountSpan.style.display = "none";
            geCountSpan.style.display = "none";
            rgCountSpan.style.display = "none";
            wfCountSpan.style.display = "none";
            wqmCountSpan.style.display = "none";
            wspCountSpan.style.display = "none";

            // Show the additional span
            additionalSpan.style.display = "inline-block";
            additionalSpanwl.style.display = "inline-block";
            additionalSpanwq.style.display = "inline-block";
            additionalSpange.style.display = "inline-block";
            additionalSpanrg.style.display = "inline-block";
            additionalSpanwf.style.display = "inline-block";
            additionalSpanwqm.style.display = "inline-block";
            additionalSpanwsp.style.display = "inline-block";


            // Call the function to fetch the total row count
            //fetchTotalRowCount();
        } else {
            // Show the well_count span if another option is selected
            wellCountSpan.style.display = "inline-block";
            wlCountSpan.style.display = "inline-block";
            wqCountSpan.style.display = "inline-block";
            geCountSpan.style.display = "inline-block";
            rgCountSpan.style.display = "inline-block";
            wfCountSpan.style.display = "inline-block";
            wqmCountSpan.style.display = "inline-block";
            wspCountSpan.style.display = "inline-block";


            // Hide the additional span if another option is selected
            additionalSpan.style.display = "none";
            additionalSpanwl.style.display = "none";
            additionalSpanwq.style.display = "none";
            additionalSpange.style.display = "none";
            additionalSpanrg.style.display = "none";
            additionalSpanwf.style.display = "none";
            additionalSpanwqm.style.display = "none";
            additionalSpanwsp.style.display = "none";
            // Handle other options if necessary
        }
    });




    //document.getElementById("cntry").addEventListener("change", function () {

    //    if (this.value === "All") {

    //        //  fetchTotalRowCount();
    //    } else {

    //    }
    //});

    function fetchTotalRowCount(apiUrl, targetElementId) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.hasOwnProperty('count')) {
                    // console.log(`Total Rows for ${apiUrl}: ${data.count}`);

                    const countElement = document.getElementById(targetElementId);
                    countElement.innerHTML = `<span style="color: white;">${data.count}</span>`;
                } else {
                    console.error(`Failed to retrieve the total row count for ${apiUrl}.`);
                }
            })
            .catch(error => console.error(`Error fetching total row count for ${apiUrl}:`, error));
    }


    const apiUrlLayer0 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer0, "additional_span");

    const apiUrlLayer1 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer1, "additional_spanwl");

    const apiUrlLayer2 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/6/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer2, "additional_spanwq");

    const apiUrlLayer3 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer3, "additional_spange");

    const apiUrlLayer4 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/3/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer4, "additional_spanrg");

    const apiUrlLayer5 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/1/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer5, "additional_spanwf");


    const apiUrlLayer6 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer6, "additional_spanwqm");

    const apiUrlLayer7 = "https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Base/MapServer/0/query?where=1=1&returnCountOnly=true&f=json";
    fetchTotalRowCount(apiUrlLayer7, "additional_spanwsp");

    //  For All count Ends


    // for popup in esri count


    //and GPLayer


    // GP Layer Popup

    GPLayerse.popupTemplate = {
        title: "Gram Panchayat:- {gp_name1}",
        content: gpChange
    };

    GPLayer.popupTemplate = {
        title: "Gram Panchayat:- {gp_name1}",
        content: gpChange
    };

    async function gpChange(feature) {
        try {
            const gpName = feature.graphic.attributes.gp_name; // Get the block name
            const gpNamec = feature.graphic.attributes.gp_name1;
            const blName = feature.graphic.attributes.bloc_name1;
            const dtName = feature.graphic.attributes.dist_name1;
            const statName = feature.graphic.attributes.st_name1;
            const blNamew = feature.graphic.attributes.bloc_name;
            const dtNamew = feature.graphic.attributes.dist_name;
            const statNamew = feature.graphic.attributes.st_name;
            const villcov = feature.graphic.attributes.COUNT_VILL;
            const villna = feature.graphic.attributes.VILL_NAME;
            const gppop = feature.graphic.attributes.ST_LGD;
            const gparea = feature.graphic.attributes.GP_AREA;
            const annuara = feature.graphic.attributes.DIST_LGD;
            console.log("Blockqqqq:", gpName);


            const waterLevelCountPromise = fetchWaterLevelCount(gpName);
            const waterQualityCountPromise = fetchWaterQualityCount(gpName, "WaterQuality");
            const geCountPromise = fetchGeoCount(gpName, "ArtificialAndResource");
            const rgCountPromise = fetchrgCount(gpName, "Rainguage");
            const wfCountPromise = fetchWFCount(gpName, "WaterFlow");
            const wellCountPromise = fetchWellCount(gpName, "WellRegistered");
            const wqftkCountPromise = fetchWqftkCount(gpName, "WaterQualityftkRegistered");

            const [
                waterLevelCount,
                waterQualityCount,
                geCount,
                rgCount,
                wfCount,
                wellCount,
                wqftkCount
            ] = await Promise.all([
                waterLevelCountPromise,
                waterQualityCountPromise,
                geCountPromise,
                rgCountPromise,
                wfCountPromise,
                wellCountPromise,
                wqftkCountPromise
            ]);

            const csvData = [{
                GP: gpNamec,
                Block: blName,
                District: dtName,
                State: statName,
                Village_Count: villcov,
                Village_Name: villna,
                Gram_Panchayat_Population: gppop,
                Gram_Panchayat_Area: gparea,
                Annual_Rainfall: annuara,
                Layer: 'Water Level',
                Count: waterLevelCount
            },
            {
                GP: gpNamec,
                Block: blName,
                District: dtName,
                State: statName,
                Village_Count: villcov,
                Village_Name: villna,
                Gram_Panchayat_Population: gppop,
                Gram_Panchayat_Area: gparea,
                Annual_Rainfall: annuara,
                Layer: 'Water Quality',
                Count: waterQualityCount
            },
            {
                GP: gpNamec,
                Block: blName,
                District: dtName,
                State: statName,
                Village_Count: villcov,
                Village_Name: villna,
                Gram_Panchayat_Population: gppop,
                Gram_Panchayat_Area: gparea,
                Annual_Rainfall: annuara,
                Layer: 'Artificial and Resource',
                Count: geCount
            },
            {
                GP: gpNamec,
                Block: blName,
                District: dtName,
                State: statName,
                Village_Count: villcov,
                Village_Name: villna,
                Gram_Panchayat_Population: gppop,
                Gram_Panchayat_Area: gparea,
                Annual_Rainfall: annuara,
                Layer: 'Rainguage',
                Count: rgCount
            },
            {
                GP: gpNamec,
                Block: blName,
                District: dtName,
                State: statName,
                Village_Count: villcov,
                Village_Name: villna,
                Gram_Panchayat_Population: gppop,
                Gram_Panchayat_Area: gparea,
                Annual_Rainfall: annuara,
                Layer: 'Water Flow',
                Count: wfCount
            },
            {
                GP: gpNamec,
                Block: blName,
                District: dtName,
                State: statName,
                Village_Count: villcov,
                Village_Name: villna,
                Gram_Panchayat_Population: gppop,
                Gram_Panchayat_Area: gparea,
                Annual_Rainfall: annuara,
                Layer: 'Well Registered',
                Count: wellCount
            },
            {
                GP: gpNamec,
                Block: blName,
                District: dtName,
                State: statName,
                Village_Count: villcov,
                Village_Name: villna,
                Gram_Panchayat_Population: gppop,
                Gram_Panchayat_Area: gparea,
                Annual_Rainfall: annuara,
                Layer: 'WaterQual FTK',
                Count: wqftkCount
            }
            ];



            const additionalContent = `
    <div>
        <strong>Block Name:</strong> ${blName}<br>
        <strong>District Name:</strong> ${dtName}<br>
        <strong>State Name:</strong> ${statName}<br>
        <strong>Village Covered Under Atal Jal GPs (In Numbers)-:</strong> ${villcov}<br>
        <strong>Village Names-:</strong> ${villna}<br>
        <strong>Gram Panchayat Area Under Atal Jal (in ha)- :</strong> ${gparea}<br>
        <strong>Annual Rainfall (IMD 2023 Data at Distric-t Level) (In mm):</strong> ${annuara}<br>
       
       
        
    </div>
`;


            const content = `
<br>
${additionalContent}
<table style="width:100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Layer</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Symbol</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Count</th>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Level</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Waterlevel1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterLevelCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQuality1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterQualityCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Artificial and Resource</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='Artificial_Icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${geCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Rainguage</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='rainguage_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${rgCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Flow</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='WaterFlow_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wfCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Well Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Well1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wellCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality FTK Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQualityMonitoring1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wqftkCount}</td>
    </tr>
</table>`;


            const div = document.createElement("div");
            div.innerHTML = content;


            const downloadButton = document.createElement('button');
            const downloadButtonwsp = document.createElement('button');
            downloadButton.id = 'btnsubmit_water';
            downloadButtonwsp.id = 'btnsubmit_waterwsp';
            downloadButton.textContent = 'Download'; // Font Awesome download 
            downloadButtonwsp.textContent = 'View/Download WSP Report';
            downloadButton.title = 'Download'; // Tooltip text

            downloadButton.setAttribute('onclick', 'DownloadAllGP("' + gpName + '")');
            downloadButtonwsp.addEventListener('click', async () => {
                const downloadFilename = `${statNamew}_${dtNamew}_${blNamew}_${gpName}.pdf`;
                console.log("Download Filename:", downloadFilename);

                try {
                    const wspapiUrl = `https://ataljal-mis.mowr.gov.in/api/DiskInfo/GetFilepath/${statNamew}/${dtNamew}/${blNamew}/${gpName}`;

                    const response = await fetch(wspapiUrl, {
                        method: 'GET'
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.statusText}`);
                    }

                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    window.open(url, '_blank');
                    window.URL.revokeObjectURL(url);

                } catch (error) {
                    console.error("Error downloading PDF:", error);
                }
            });


            div.appendChild(downloadButton);
            div.appendChild(downloadButtonwsp);
            return div;
        } catch (error) {
            console.error("Error fetching category counts:", error);


            return document.createElement("div");
        }
    }




    async function fetchWaterLevelCount(gpName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query?where=grampanchayat ='${gpName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for WaterLevel:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching WaterLevel count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }


    async function fetchWaterQualityCount(gpName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/6/query?where=gp ='${gpName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for WaterQuality:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Waterquality count data:`, error);
            return 0;
        }
    }



    async function fetchGeoCount(gpName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query?where=gpname  ='${gpName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for Geo:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Geo count data:`, error);
            return 0;
        }
    }




    async function fetchrgCount(gpName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/3/query?where=gpname   ='${gpName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for rg:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching rg count data:`, error);
            return 0;
        }
    }



    async function fetchWFCount(gpName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/1/query?where=grampanchayat  ='${gpName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for wf:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }




    async function fetchWellCount(gpName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query?where=gp ='${gpName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for well:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0;
        }
    }



    async function fetchWqftkCount(gpName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=gp  ='${gpName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for wqftk:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0;
        }
    }



    //

    //
    // state Layer Popup


    StateLayer.popupTemplate = {
        title: "State:- {dd}",
        content: stateChange
    };

    async function stateChange(feature) {
        try {
            const stName = feature.graphic.attributes.State; // Get the block name
            const stc = feature.graphic.attributes.dd;
            const dtc = feature.graphic.attributes.Districts;
            const blcc = feature.graphic.attributes.Blocks;
            const gpc = feature.graphic.attributes.Gram_Panch;



            console.log("Statewwww:", stName);
            console.log("District:", dtc);
            // Fetch counts for all six categories asynchronously
            const waterLevelCountPromise = fetchWaterLevelCounts(stName);
            const waterQualityCountPromise = fetchWaterQualityCounts(stName, "WaterQuality");
            const geCountPromise = fetchGeoCounts(stName, "ArtificialAndResource");
            const rgCountPromise = fetchrgCounts(stName, "Rainguage");
            const wfCountPromise = fetchWFCounts(stName, "WaterFlow");
            const wellCountPromise = fetchWellCounts(stName, "WellRegistered");
            const wqftkCountPromise = fetchWqftkCounts(stName, "WaterQualityftkRegistered");
            // Wait for all promises to resolve
            const [
                waterLevelCount,
                waterQualityCount,
                geCount,
                rgCount,
                wfCount,
                wellCount,
                wqftkCount
            ] = await Promise.all([
                waterLevelCountPromise,
                waterQualityCountPromise,
                geCountPromise,
                rgCountPromise,
                wfCountPromise,
                wellCountPromise,
                wqftkCountPromise
            ]);

            const csvData = [{
                State: stc,
                District: dtc,
                Block_Count: blcc,
                Gram_Panchayat_Covered: gpc,
                Layer: 'Water Level',
                Count: waterLevelCount
            },
            {
                State: stc,
                District: dtc,
                Block_Count: blcc,
                Gram_Panchayat_Covered: gpc,
                Layer: 'Water Quality',
                Count: waterQualityCount
            },
            {
                State: stc,
                District: dtc,
                Block_Count: blcc,
                Gram_Panchayat_Covered: gpc,
                Layer: 'Artificial and Resource',
                Count: geCount
            },
            {
                State: stc,
                District: dtc,
                Block_Count: blcc,
                Gram_Panchayat_Covered: gpc,
                Layer: 'Rainguage',
                Count: rgCount
            },
            {
                State: stc,
                District: dtc,
                Block_Count: blcc,
                Gram_Panchayat_Covered: gpc,
                Layer: 'Water Flow',
                Count: wfCount
            },
            {
                State: stc,
                District: dtc,
                Block_Count: blcc,
                Gram_Panchayat_Covered: gpc,
                Layer: 'Well Registered',
                Count: wellCount
            },
            {
                State: stc,
                District: dtc,
                Block_Count: blcc,
                Gram_Panchayat_Covered: gpc,
                Layer: 'WaterQual FTK',
                Count: wqftkCount
            }
            ];


            // Additional content in one div
            const additionalContent = `
    <div>
        <strong>Districts Covered Under Atal Jal (In Numbers)-:</strong> ${dtc}<br>
        <strong>Blocks Covered Under Atal Jal (In Numbers):-</strong> ${blcc}<br>
        <strong>Gram Panchayats Covered Under Atal Jal (In Numbers)-:</strong> ${gpc}<br>
       
    </div>
`;


            const content = `
<br>

<table style="width:100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Layer</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Symbol</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Count</th>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Level</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Waterlevel1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterLevelCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQuality1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterQualityCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Artificial and Resource</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='Artificial_Icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${geCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Rainguage</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='rainguage_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${rgCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Flow</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='WaterFlow_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wfCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Well Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Well1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wellCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality FTK Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQualityMonitoring1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wqftkCount}</td>
    </tr>
</table>`;

            // Create a div element to contain the content
            const div = document.createElement("div");
            div.innerHTML = `<div>${additionalContent}</div>`; // Wrap additional content in a div
            div.style.marginBottom = "0.5%"; // Adjust margin to your preference


            // Append additional content and the table to the main content div
            div.innerHTML += content;
            console.log("State:", stName);
            var std = stName;
            const downloadButton = document.createElement('button');
            downloadButton.id = 'btnsubmit_water';
            downloadButton.textContent = 'Download';
            downloadButton.title = 'Download';
            downloadButton.onclick = function () {
                showPopup();
            };


            downloadButton.setAttribute('onclick', 'DownloadAll("' + stName + '")');
            console.log(stName, "ababa")
            div.appendChild(downloadButton);

            return div;
        } catch (error) {
            console.error("Error fetching category counts:", error);


            return document.createElement("div");
        }
    }



    async function fetchWaterLevelCounts(stName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query?where=state  ='${stName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for WaterLevel:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching WaterLevel count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }


    async function fetchWaterQualityCounts(stName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/6/query?where=state  ='${stName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for WaterQuality:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Waterquality count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }



    async function fetchGeoCounts(stName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query?where=statename   ='${stName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for Geo:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Geo count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }




    async function fetchrgCounts(stName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/3/query?where=statename    ='${stName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for rg:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching rg count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }



    async function fetchWFCounts(stName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/1/query?where=state   ='${stName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for wf:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }




    async function fetchWellCounts(stName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query?where=state ='${stName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for well:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }



    async function fetchWqftkCounts(stName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=state   ='${stName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for wqftk:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }




    // District Layer Popup

    DistrictLayer.popupTemplate = {
        title: function (feature) {

            var districtName = feature.graphic.attributes.District_N.split('_')[0];
            return "District: " + districtName;
        },
        content: districtChange
    };


    async function districtChange(feature) {
        try {
            const distName = feature.graphic.attributes.district; // Get the block name
            const dtNamec = feature.graphic.attributes.District_N;
            const stNamec = feature.graphic.attributes.State_Name;
            const blcou = feature.graphic.attributes.BLOCK_Coun;
            const gpnum = feature.graphic.attributes.GPs_Count;


            console.log("District:", distName);
            console.log("District:", dtNamec);
            // Fetch counts for all six categories asynchronously
            const waterLevelCountPromise = fetchWaterLevelCountd(distName);
            const waterQualityCountPromise = fetchWaterQualityCountd(distName, "WaterQuality");
            const geCountPromise = fetchGeoCountd(distName, "ArtificialAndResource");
            const rgCountPromise = fetchrgCountd(distName, "Rainguage");
            const wfCountPromise = fetchWFCountd(distName, "WaterFlow");
            const wellCountPromise = fetchWellCountd(distName, "WellRegistered");
            const wqftkCountPromise = fetchWqftkCountd(distName, "WaterQualityftkRegistered");
            // Wait for all promises to resolve
            const [
                waterLevelCount,
                waterQualityCount,
                geCount,
                rgCount,
                wfCount,
                wellCount,
                wqftkCount
            ] = await Promise.all([
                waterLevelCountPromise,
                waterQualityCountPromise,
                geCountPromise,
                rgCountPromise,
                wfCountPromise,
                wellCountPromise,
                wqftkCountPromise
            ]);

            const csvData = [{
                State: stNamec,
                Block_Count: blcou,
                Gram_Panchayat_Covered: gpnum,
                Layer: 'Water Level',
                Count: waterLevelCount
            },
            {
                State: stNamec,
                Block_Count: blcou,
                Gram_Panchayat_Covered: gpnum,
                Layer: 'Water Quality',
                Count: waterQualityCount
            },
            {
                State: stNamec,
                Block_Count: blcou,
                Gram_Panchayat_Covered: gpnum,
                Layer: 'Artificial and Resource',
                Count: geCount
            },
            {
                State: stNamec,
                Block_Count: blcou,
                Gram_Panchayat_Covered: gpnum,
                Layer: 'Rainguage',
                Count: rgCount
            },
            {
                State: stNamec,
                Block_Count: blcou,
                Gram_Panchayat_Covered: gpnum,
                Layer: 'Water Flow',
                Count: wfCount
            },
            {
                State: stNamec,
                Block_Count: blcou,
                Gram_Panchayat_Covered: gpnum,
                Layer: 'Well Registered',
                Count: wellCount
            },
            {
                State: stNamec,
                Block_Count: blcou,
                Gram_Panchayat_Covered: gpnum,
                Layer: 'WaterQual FTK',
                Count: wqftkCount
            }
            ];


            // Additional content in one div
            const additionalContent = `
    <div>
       
        <strong>Blocks Covered Under Atal Jal (In Numbers)-</strong> ${blcou}<br>
        <strong>State Name-:</strong> ${stNamec}<br>
        <strong>Gram Panchayats Covered Under Atal Jal (In Numbers)-:</strong> ${gpnum}<br>
       
    </div>
`;


            const content = `
<br>
${additionalContent}
<table style="width:100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Layer</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Symbol</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Count</th>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Level</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Waterlevel1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterLevelCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQuality1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterQualityCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Artificial and Resource</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='Artificial_Icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${geCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Rainguage</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='rainguage_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${rgCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Flow</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='WaterFlow_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wfCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Well Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Well1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wellCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality FTK Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQualityMonitoring1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wqftkCount}</td>
    </tr>
</table>`;

            // Create a div element to contain the content
            const div = document.createElement("div");
            div.innerHTML = content;

            // Create a button for downloading the CSV
            const downloadButton = document.createElement('button');
            downloadButton.id = 'btnsubmit_water'; // Assign the specified id
            downloadButton.textContent = 'Download'; // Font Awesome download 
            downloadButton.title = 'Download'; // Tooltip text

            downloadButton.setAttribute('onclick', 'DownloadAllDi("' + distName + '")');

            div.appendChild(downloadButton);

            return div;
        } catch (error) {
            console.error("Error fetching category counts:", error);

            // In case of error, return an empty div
            return document.createElement("div");
        }
    }




    async function fetchWaterLevelCountd(distName) {
        try {
            // Construct the query URL targeting the WaterLevel layer
            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query?where=district ='${distName}'&returnCountOnly=true&f=json`;

            // Make a fetch request to the API URL
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            // Log the response data for debugging
            console.log(`API Response for WaterLevel:`, data);

            // Check if the response contains the 'count' field
            if (data.hasOwnProperty('count')) {
                // Return the count value
                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching WaterLevel count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }


    async function fetchWaterQualityCountd(distName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/6/query?where=district ='${distName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for WaterQuality:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Waterquality count data:`, error);
            return 0;
        }
    }



    async function fetchGeoCountd(distName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query?where=districtname  ='${distName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for Geo:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Geo count data:`, error);
            return 0;
        }
    }




    async function fetchrgCountd(distName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/3/query?where=districtna   ='${distName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for rg:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching rg count data:`, error);
            return 0;
        }
    }



    async function fetchWFCountd(distName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/1/query?where=district  ='${distName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for wf:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0;
        }
    }




    async function fetchWellCountd(distName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query?where=district ='${distName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for well:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0;
        }
    }



    async function fetchWqftkCountd(distName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=district  ='${distName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for wqftk:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0; // Return 0 if there's an error
        }
    }



    //

    // Block Layer Popup


    BlockLayer.popupTemplate = {
        title: "Block:- {Block_Name}",
        content: blockChange
    };

    async function blockChange(feature) {
        try {
            const blockName = feature.graphic.attributes.block; // Get the block name
            const blNamec = feature.graphic.attributes.Block_Name;
            const dtName = feature.graphic.attributes.District_N;
            const statName = feature.graphic.attributes.State_Name;
            const blhe = feature.graphic.attributes.Block_Area;
            const gws = feature.graphic.attributes.GWS;
            const gpa = feature.graphic.attributes.gps;

            console.log("Block:", blockName);


            const waterLevelCountPromise = fetchWaterLevelCountb(blockName);
            const waterQualityCountPromise = fetchWaterQualityCountb(blockName, "WaterQuality");
            const geCountPromise = fetchGeoCountb(blockName, "ArtificialAndResource");
            const rgCountPromise = fetchrgCountb(blockName, "Rainguage");
            const wfCountPromise = fetchWFCountb(blockName, "WaterFlow");
            const wellCountPromise = fetchWellCountb(blockName, "WellRegistered");
            const wqftkCountPromise = fetchWqftkCountb(blockName, "WaterQualityftkRegistered");

            const [
                waterLevelCount,
                waterQualityCount,
                geCount,
                rgCount,
                wfCount,
                wellCount,
                wqftkCount
            ] = await Promise.all([
                waterLevelCountPromise,
                waterQualityCountPromise,
                geCountPromise,
                rgCountPromise,
                wfCountPromise,
                wellCountPromise,
                wqftkCountPromise
            ]);

            const csvData = [{
                Block: blNamec,
                District: dtName,
                State: statName,
                Block_Area: blhe,
                Village_count: gpa,
                Ground_Water: gws,
                Layer: 'Water Level',
                Count: waterLevelCount
            },
            {
                Block: blNamec,
                District: dtName,
                State: statName,
                Block_Area: blhe,
                Village_count: gpa,
                Ground_Water: gws,
                Layer: 'Water Quality',
                Count: waterQualityCount
            },
            {
                Block: blNamec,
                District: dtName,
                State: statName,
                Block_Area: blhe,
                Village_count: gpa,
                Ground_Water: gws,
                Layer: 'Artificial and Resource',
                Count: geCount
            },
            {
                Block: blNamec,
                District: dtName,
                State: statName,
                Block_Area: blhe,
                Village_count: gpa,
                Ground_Water: gws,
                Layer: 'Rainguage',
                Count: rgCount
            },
            {
                Block: blNamec,
                District: dtName,
                State: statName,
                Block_Area: blhe,
                Village_count: gpa,
                Ground_Water: gws,
                Layer: 'Water Flow',
                Count: wfCount
            },
            {
                Block: blNamec,
                District: dtName,
                State: statName,
                Block_Area: blhe,
                Village_count: gpa,
                Ground_Water: gws,
                Layer: 'Well Registered',
                Count: wellCount
            },
            {
                Block: blNamec,
                District: dtName,
                State: statName,
                Block_Area: blhe,
                Village_count: gpa,
                Ground_Water: gws,
                Layer: 'WaterQual FTK',
                Count: wqftkCount
            }
            ];



            const additionalContent = `
    <div>
        <strong>District Name:</strong> ${dtName}<br>
        <strong>State Name:</strong> ${statName}<br>
        <strong>Block Area (in ha):</strong> ${blhe}<br>
        <strong>Ground Water Situation (Block Level) As per GWRA (CGWB 2023)-:</strong> ${gws}<br>
        <strong>Gram Panchayats Covered Under Atal Jal (In Numbers)-:</strong> ${gpa}<br>
    </div>
`;


            const content = `
<br>
${additionalContent}
<table style="width:100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Layer</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Symbol</th>
        <th style="border: 1px solid black; padding: 8px; text-align: left;">Count</th>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Level</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Waterlevel1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterLevelCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQuality1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${waterQualityCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Artificial and Resource</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='Artificial_Icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${geCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Rainguage</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='rainguage_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${rgCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Flow</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='WaterFlow_icon1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wfCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Well Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_Well1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wellCount}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black; padding: 8px;">Water Quality FTK Registered</td>
        <td style="border: 1px solid black; padding: 8px;"><span class='icon_WaterQualityMonitoring1'></span></td>
        <td style="border: 1px solid black; padding: 8px;">${wqftkCount}</td>
    </tr>
</table>`;


            const div = document.createElement("div");
            div.innerHTML = content;


            const downloadButton = document.createElement('button');
            downloadButton.id = 'btnsubmit_water'; // Assign the specified id
            downloadButton.textContent = 'Download'; // Font Awesome download 
            downloadButton.title = 'Download'; // Tooltip text

            downloadButton.setAttribute('onclick', 'DownloadAllbl("' + blockName + '")');

            div.appendChild(downloadButton);



            return div;
        } catch (error) {
            console.error("Error fetching category counts:", error);


            return document.createElement("div");
        }
    }




    async function fetchWaterLevelCountb(blockName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/5/query?where=block='${blockName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for WaterLevel:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching WaterLevel count data:`, error);
            return 0;
        }
    }


    async function fetchWaterQualityCountb(blockName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/6/query?where=block='${blockName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for WaterQuality:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Waterquality count data:`, error);
            return 0;
        }
    }



    async function fetchGeoCountb(blockName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/4/query?where=blockname ='${blockName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for Geo:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching Geo count data:`, error);
            return 0;
        }
    }




    async function fetchrgCountb(blockName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/3/query?where=blockname  ='${blockName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for rg:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching rg count data:`, error);
            return 0;
        }
    }



    async function fetchWFCountb(blockName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/1/query?where=block ='${blockName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for wf:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0;
        }
    }




    async function fetchWellCountb(blockName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/Datapoint/MapServer/0/query?where=block ='${blockName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for well:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0;
        }
    }



    async function fetchWqftkCountb(blockName) {
        try {

            const apiUrl = `https://ataljal-arcgis.mowr.gov.in/ajserver/rest/services/NewFolder/WQM/MapServer/0/query?where=block ='${blockName}'&returnCountOnly=true&f=json`;


            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch data from API: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            console.log(`API Response for wqftk:`, data);


            if (data.hasOwnProperty('count')) {

                return data.count;
            } else {
                throw new Error(`Count not found in API response for WaterLevel`);
            }
        } catch (error) {
            console.error(`Error fetching wf count data:`, error);
            return 0;
        }
    }



    //  For Ascending of Popup
    view.watch("popup.viewModel.features", (graphics) => {
        if (graphics && graphics.length > 1) {
            let selectedFeatureIndex = -1;
            for (let i = 0; i < graphics.length; i++) {
                const graphic = graphics[i];
                if (graphic.layer.title === "Water Level Monitoring Stations") {
                    selectedFeatureIndex = i;
                    break;
                } else if (graphic.layer.title === "Water Quality Monitoring Stations") {
                    selectedFeatureIndex = i;
                    break;
                } else if (graphic.layer.title === "Artificial Recharge and Water Conservation Structures") {
                    selectedFeatureIndex = i;
                    break;
                } else if (graphic.layer.title === "Rainguage Stations") {
                    selectedFeatureIndex = i;
                    break;
                } else if (graphic.layer.title === "Water Flow Meters") {
                    selectedFeatureIndex = i;
                    break;
                } else if (graphic.layer.title === "Well Registered") {
                    selectedFeatureIndex = i;
                    break;
                } else if (graphic.layer.title === "Water Quality Monitoring (Through Field Testing Kit)") {
                    selectedFeatureIndex = i;
                    break;
                } else if (graphic.layer.title === "GP Water Security Plan (2023-24)") {
                    selectedFeatureIndex = i;
                    break;
                }
                //else if (graphic.layer.title === "Gram Panchayat") {
                //    selectedFeatureIndex = i;
                //    break;
                //}

                //else if (graphic.layer.title === "Block") {
                //    selectedFeatureIndex = i;
                //    break;
                //}
                //else if (graphic.layer.title === "District") {
                //    selectedFeatureIndex = i;
                //    break;
                //}

                //else if (graphic.layer.title === "State") {
                //    selectedFeatureIndex = i;
                //    break;
                //}
            }
            if (selectedFeatureIndex !== -1) {
                view.popup.viewModel.selectedFeatureIndex = selectedFeatureIndex;
            }

        }
    });


    //

    // For Getting count in View



    function updateCountin(layerView) {
        layerView.queryFeatureCount().then(function (count) {
            $('body').find(".legend-count-layer18").each(function () {
                var currentValue = 1;
                $(this).html('<span> ' + currentValue + '</span>');
                console.log($(this).html());


            });
            //console.log("Number of features in DistLayer: ", count);
            document.getElementById('IndLayerData').innerText = count
        });
    }


    view.whenLayerView(India).then(function (layerView) {
        // Update the count whenever the layer view is created or updated
        updateCountin(layerView);

        // Listen for layer view updates
        layerView.watch("updating", function (value) {
            if (!value) {
                updateCountin(layerView);
            }
        });
        layerView.watch("visible", function (visible) {
            if (!visible) {
                // If the layer becomes invisible, update the count to 0
                $('.legend-count-layer18').html('<span>1</span>');
                document.getElementById('IndLayerData').innerText = "1";
            } else {
                // If the layer becomes visible, update the count
                updateCountin(layerView);
            }
        });
    });


    //
    function updateCountst(layerView) {

        const query = {
            geometry: view.extent,
            spatialRelationship: "intersects",
            returnGeometry: false,
            outFields: ["*"]
        };

        layerView.queryFeatures(query).then(function (result) {
            const count = result.features.length;
            const legendCountElements = $('body').find(".legend-count-layer4");

            legendCountElements.each(function () {
                $(this).html('<span>' + count + '</span>');
                //   console.log($(this).html());
            });

            document.getElementById('stateLayerData').innerText = count;
        });
    }

    view.whenLayerView(StateLayer).then(function (layerView) {

        updateCountst(layerView);


        layerView.watch("updating", function (updating) {
            if (!updating) {
                updateCountst(layerView);
            }
        });

        layerView.watch("visible", function (visible) {
            if (!visible) {
                $('.legend-count-layer4').html('<span>0</span>');
                document.getElementById('stateLayerData').innerText = "0";
            } else {
                updateCountst(layerView);
            }
        });
    });


    //function updateCountdt(layerView) {
    function updateCountdt(layerView) {
        // Create a query object with the current view extent
        const query = layerView.createQuery();
        query.geometry = view.extent;
        query.spatialRelationship = "intersects";
        query.returnGeometry = false;
        query.outFields = ["*"];

        layerView.queryFeatures(query).then(function (result) {
            const count = result.features.length;
            const legendCountElements = $('body').find(".legend-count-layer3");

            legendCountElements.each(function () {
                $(this).html('<span> ' + count + '</span>');
                //    console.log($(this).html());
            });

            document.getElementById('dtLayerData').innerText = count;
        }).catch(function (error) {
            console.error("Error querying features: ", error);
        });
    }

    view.whenLayerView(DistrictLayer).then(function (layerView) {
        // Update the count whenever the layer view is created or updated
        updateCountdt(layerView);

        // Listen for layer view updates
        layerView.watch("updating", function (updating) {
            if (!updating) {
                updateCountdt(layerView);
            }
        });

        layerView.watch("visible", function (visible) {
            if (!visible) {
                // If the layer becomes invisible, update the count to 0
                $('.legend-count-layer3').html('<span>0</span>');
                document.getElementById('dtLayerData').innerText = "0";
            } else {
                // If the layer becomes visible, update the count
                updateCountdt(layerView);
            }
        });
    }).catch(function (error) {
        console.error("Error when getting layer view: ", error);
    });
    // block
    function updateCountbl(layerView) {
        // Create a query object with the current view extent
        const query = layerView.createQuery();
        query.geometry = view.extent;
        query.spatialRelationship = "intersects";
        query.returnGeometry = false;
        query.outFields = ["*"];

        layerView.queryFeatures(query).then(function (result) {
            const count = result.features.length;
            const legendCountElements = $('body').find(".legend-count-layer2");

            legendCountElements.each(function () {
                $(this).html('<span> ' + count + '</span>');
                console.log($(this).html());
            });

            document.getElementById('blkLayerData').innerText = count;

            const closeButton = document.querySelector(".esri-popup__button[aria-label='Close']");
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    const childDiv = document.getElementById('newPopup');
                    if (childDiv) {
                        childDiv.style.display = 'none';
                    }
                });
            }
        }).catch(function (error) {
            console.error("Error querying features: ", error);
        });
    }

    view.whenLayerView(BlockLayer).then(function (layerView) {
        // Update the count whenever the layer view is created or updated
        updateCountbl(layerView);

        // Listen for layer view updates
        layerView.watch("updating", function (updating) {
            if (!updating) {
                updateCountbl(layerView);
            }
        });

        layerView.watch("visible", function (visible) {
            if (!visible) {
                // If the layer becomes invisible, update the count to 0
                $('.legend-count-layer2').html('<span>0</span>');
                document.getElementById('blkLayerData').innerText = "0";
            } else {
                // If the layer becomes visible, update the count
                updateCountbl(layerView);
            }
        });
    }).catch(function (error) {
        console.error("Error when getting layer view: ", error);
    });

    // Function to update the count for GPLayer
    function updateCountgp(layerView) {
        // Create a query object with the current view extent
        const query = layerView.createQuery();
        query.geometry = view.extent;
        query.spatialRelationship = "intersects";
        query.returnGeometry = false;
        query.outFields = ["*"];

        layerView.queryFeatures(query).then(function (result) {
            const count = result.features.length;
            const legendCountElements = $('body').find(".legend-count-layer1");

            legendCountElements.each(function () {
                $(this).html('<span> ' + count + '</span>');
                console.log($(this).html());
            });

            document.getElementById('gPLayerData').innerText = count;

            const closeButton = document.querySelector(".esri-popup__button[aria-label='Close']");
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    const childDiv = document.getElementById('newPopup');
                    if (childDiv) {
                        childDiv.style.display = 'none';
                    }
                });
            }
        }).catch(function (error) {
            console.error("Error querying features: ", error);
        });
    }

    view.whenLayerView(GPLayer).then(function (layerView) {
        // Update the count whenever the layer view is created or updated
        updateCountgp(layerView);

        // Listen for layer view updates
        layerView.watch("updating", function (updating) {
            if (!updating) {
                updateCountgp(layerView);
            }
        });

        layerView.watch("visible", function (visible) {
            if (!visible) {
                // If the layer becomes invisible, update the count to 0
                $('.legend-count-layer1').html('<span>0</span>');
                document.getElementById('gPLayerData').innerText = "0";
            } else {
                // If the layer becomes visible, update the count
                updateCountgp(layerView);
            }
        });
    }).catch(function (error) {
        console.error("Error when getting layer view: ", error);
    });
    //ws
    function updateCountws(layerView) {
        // Create a query object with the current view extent
        const query = layerView.createQuery();
        query.geometry = view.extent;
        query.spatialRelationship = "intersects";
        query.returnGeometry = false;
        query.outFields = ["*"];

        layerView.queryFeatures(query).then(function (result) {
            const count = result.features.length;
            const legendCountElements = $('body').find(".legend-count-layer13");

            legendCountElements.each(function () {
                $(this).html('<span> ' + count + '</span>');
                console.log($(this).html());
            });

            document.getElementById('wQshedFTKData').innerText = count;
        }).catch(function (error) {
            console.error("Error querying features: ", error);
        });
    }

    view.whenLayerView(watershed).then(function (layerView) {
        // Update the count whenever the layer view is created or updated
        updateCountws(layerView);

        // Listen for layer view updates
        layerView.watch("updating", function (updating) {
            if (!updating) {
                updateCountws(layerView);
            }
        });

        layerView.watch("visible", function (visible) {
            if (!visible) {
                // If the layer becomes invisible, update the count to 0
                $('.legend-count-layer13').html('<span>0</span>');
                document.getElementById('wQshedFTKData').innerText = "0";
            } else {
                // If the layer becomes visible, update the count
                updateCountws(layerView);
            }
        });
    }).catch(function (error) {
        console.error("Error when getting layer view: ", error);
    });


    //gwra


    function updateCountgwr(layerView) {
        // Create a query object with the current view extent
        const query = layerView.createQuery();
        query.geometry = view.extent;
        query.spatialRelationship = "intersects";
        query.returnGeometry = false;
        query.outFields = ["*"];

        layerView.queryFeatures(query).then(function (result) {
            const count = result.features.length;
            const legendCountElements = $('body').find(".legend-count-layer10");

            legendCountElements.each(function () {
                $(this).html(count);

            });

            document.getElementById('gwraData').innerText = count;
        }).catch(function (error) {
            console.error("Error querying features: ", error);
        });
    }

    view.whenLayerView(GWRA).then(function (layerView) {
        // Update the count whenever the layer view is created or updated
        updateCountgwr(layerView);

        // Listen for layer view updates
        layerView.watch("updating", function (updating) {
            if (!updating) {
                updateCountgwr(layerView);
            }
        });

        layerView.watch("visible", function (visible) {
            if (!visible) {
                // If the layer becomes invisible, update the count to 0
                $('.legend-count-layer10').html('0');
                document.getElementById('gwraData').innerText = "0";
            } else {
                // If the layer becomes visible, update the count
                updateCountgwr(layerView);
            }
        });
    }).catch(function (error) {
        console.error("Error when getting layer view: ", error);
    });



    //

    WSP.popupTemplate = {
        title: "Gram Panchayat Water Security Plan (2023-24)",
        content: wspChange
    };

    async function wspChange(feature) {
        try {
            const gpName = feature.graphic.attributes.gp_name1;
            const gpNamew = feature.graphic.attributes.gp_name;
            const blName = feature.graphic.attributes.bloc_name;
            const blNamew = feature.graphic.attributes.bloc_name1;
            const dtName = feature.graphic.attributes.dist_name;
            const dtNamew = feature.graphic.attributes.dist_name1;
            const statName = feature.graphic.attributes.st_name1;
            const statNamew = feature.graphic.attributes.st_name;

            const additionalContent = `
            <div>
                <strong>State Name:</strong> ${statName}<br>
                 <strong>District Name:</strong> ${dtNamew}<br>
                <strong>Block Name:</strong> ${blNamew}<br>
                <strong>Gram Panchayat:</strong> ${gpName}<br>
               
                
            </div>
        `;

            const div = document.createElement("div");
            div.innerHTML = additionalContent;

            const downloadButtonwspw = document.createElement('button');
            downloadButtonwspw.id = 'btnsubmit_waterwsp';
            downloadButtonwspw.textContent = 'Download WSP Report';

            downloadButtonwspw.addEventListener('click', async () => {
                const downloadFilename = `${statNamew}_${dtName}_${blName}_${gpNamew}.pdf`;
                console.log("Download Filename:", downloadFilename);

                try {
                    const wspapiUrl1 = `https://ataljal-mis.mowr.gov.in/api/DiskInfo/GetFilepath/${statNamew}/${dtName}/${blName}/${gpNamew}`;

                    const response = await fetch(wspapiUrl1, {
                        method: 'GET'
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.statusText}`);
                    }

                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = downloadFilename;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    a.remove();
                } catch (error) {
                    console.error("Error downloading PDF:", error);
                }
            });

            div.appendChild(downloadButtonwspw);
            return div;
        } catch (error) {
            console.error("Error fetching category counts:", error);
            return document.createElement("div");
        }
    }



    // for sublayers
    var basinCounts = {};

    function updateCountbasinba(layerView) {
        // Get the extent of the current view
        var extent = layerView.view.extent;

        // Query for unique basins and their counts within the extent
        layerView.queryFeatures({
            geometry: extent,
            spatialRelationship: "intersects",
            outStatistics: [{
                onStatisticField: "basin",
                outStatisticFieldName: "unique_basins",
                statisticType: "count"
            }],
            groupByFieldsForStatistics: ["basin"]
        }).then(function (result) {
            // Reset basinCounts object before updating
            basinCounts = {};

            // Get a list of all unique basins within the extent
            var uniqueBasins = result.features.map(function (feature) {
                return feature.attributes.basin;
            });

            // Iterate over each unique basina
            uniqueBasins.forEach(function (basin) {
                // Query features for each basin to get count within the extent
                layerView.queryFeatures({
                    geometry: extent,
                    spatialRelationship: "intersects",
                    where: "basin = '" + basin + "'",
                    returnGeometry: false,
                    outStatistics: [{
                        statisticType: "count",
                        onStatisticField: "FID",
                        outStatisticFieldName: "count"
                    }]
                }).then(function (result) {
                    // Get count of features for the current basin
                    var count = (result.features.length > 0) ? result.features[0].attributes.count : 0;
                    basinCounts[basin] = count;

                    // Update the corresponding DOM element with the count
                    const IdShow = document.getElementById(basin);
                    if (IdShow) {
                        IdShow.innerHTML = count;
                    } else {
                        console.warn('Element with ID ' + basin + ' not found in the DOM.');
                    }
                }).catch(function (error) {
                    console.error('Error querying features for basin ' + basin + ':', error);
                });
            });

            // Set count to 0 for basins not in the current extent
            for (var basin in basinCounts) {
                if (!uniqueBasins.includes(basin)) {
                    basinCounts[basin] = 0;
                    const IdShow = document.getElementById(basin);
                    if (IdShow) {
                        IdShow.innerHTML = 0;
                    } else {
                        console.warn('Element with ID ' + basin + ' not found in the DOM.');
                    }
                }
            }
        }).catch(function (error) {
            console.error('Error querying unique basins:', error);
        });
    }

    // When the layer view for 'watershed' is ready
    view.whenLayerView(watershed).then(function (layerView) {
        // Initial call to update counts
        updateCountbasinba(layerView);

        // Watch for updates to the layer view
        layerView.watch("updating", function (value) {
            if (!value) {
                updateCountbasinba(layerView);
            }
        });

        // Watch for visibility changes
        layerView.watch("visible", function (visible) {
            if (!visible) {
                // If layer becomes invisible, update counts to 0
                $('.legend-count-layer13').html('<span>0</span>');

                // Update the corresponding DOM element (change 'RainfallData' to correct ID)
                document.getElementById('RainfallData').innerText = "0";
            } else {
                // If layer becomes visible, update counts
                updateCountbasinba(layerView);
            }
        });

        // Watch for extent changes to update counts on zoom in and out
        layerView.view.watch("extent", function () {
            updateCountbasinba(layerView);
        });
    }).catch(function (error) {
        console.error("Error when getting layer view: ", error);
    });

    var gwraCounts = {};

    function updateCountgwra(layerView) {
        // Get the extent of the current view
        var extent = layerView.view.extent;

        layerView.queryFeatures({
            geometry: extent,
            spatialRelationship: "intersects",
            outStatistics: [{
                onStatisticField: "category",
                outStatisticFieldName: "unique_categories",
                statisticType: "count"
            }],
            groupByFieldsForStatistics: ["category"]
        }).then(function (result) {
            var queries = result.features.map(function (feature) {
                var category = feature.attributes.category;
                return layerView.queryFeatures({
                    geometry: extent,
                    spatialRelationship: "intersects",
                    where: "category = '" + category + "'",
                    returnGeometry: false,
                    outStatistics: [{
                        statisticType: "count",
                        onStatisticField: "FID",
                        outStatisticFieldName: "count"
                    }]
                }).then(function (result) {
                    var count = (result.features[0] && result.features[0].attributes.count) || 0;
                    gwraCounts[category] = count;
                    console.log(gwraCounts, "GWRA");

                    var IdShow = document.getElementById(category);
                    if (IdShow) {
                        IdShow.innerHTML = count;
                    } else {
                        console.warn('Element with ID ' + category + ' not found in the DOM.');
                    }

                    console.log("category: " + category + ", Count: " + count);
                }).catch(function (error) {
                    console.error('Error querying features for category ' + category + ':', error);
                });
            });

            // Wait for all queries to complete
            Promise.all(queries).then(function () {
                // Set counts to 0 for categories not in the current extent
                for (var category in gwraCounts) {
                    if (!result.features.some(function (feature) {
                        return feature.attributes.category === category;
                    })) {
                        gwraCounts[category] = 0;
                        var IdShow = document.getElementById(category);
                        if (IdShow) {
                            IdShow.innerHTML = 0;
                        } else {
                            console.warn('Element with ID ' + category + ' not found in the DOM.');
                        }
                    }
                }
            });
        }).catch(function (error) {
            console.error('Error querying unique categories:', error);
        });
    }

    view.whenLayerView(GWRA).then(function (layerView) {
        updateCountgwra(layerView);

        layerView.watch("updating", function (value) {
            if (!value) {
                updateCountgwra(layerView);
            }
        });

        layerView.watch("visible", function (visible) {
            if (!visible) {
                console.log('Layer is not visible. Setting counts to 0.');
                $('.legend-count-layer13').html('<span>0</span>');
                for (const property in gwraCounts) {
                    const IdShow = document.getElementById(property);
                    if (IdShow) {
                        IdShow.innerHTML = 0;
                    }
                }
            } else {
                updateCountgwra(layerView);
            }
        });

        // Watch for extent changes to update counts on zoom in and out
        layerView.view.watch("extent", function () {
            updateCountgwra(layerView);
        });
    }).catch(function (error) {
        console.error("Error when getting layer view: ", error);
    });


    //
    // Function to toggle legend visibility
    function toggleLegend() {
        const Art = document.getElementById("restoggle");
        var legend = document.getElementById("legend");
        if (legend.style.display === "none" || legend.style.display === "") {
            legend.style.display = "flex";
            Art.classList.remove("toggled");

        } else {
            legend.style.display = "none";
            Art.classList.remove("toggled");
        }
    }

    function createLegendId() {

        // Create the legend container div element
        var legendContainer = document.createElement("div");
        legendContainer.id = "legend";
        legendContainer.style.display = "none"; // Hide the legend container initially

        // Find the UI container element
        var uiContainer = document.querySelector(".ui-container");

        // Check if the UI container element exists
        if (uiContainer) {
            // Append the legend container to the UI container
            uiContainer.appendChild(legendContainer);
        } else {
            // If the UI container element doesn't exist, append to the document body as fallback
            document.body.appendChild(legendContainer);
        }
    }

    // Create and append the toggle button
    var toggleButton = document.createElement("button");
    toggleButton.id = "toggleButton";
    toggleButton.title = "Select Layers (Atal Jal)";
    toggleButton.innerHTML = "<svg id='Layer_1' enable-background='new 0 0 512 512' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'><path d='m221.5 421.9h-79.9c-8.3 0-15 6.7-15 15v19.1c0 8.3 6.7 15 15 15h79.9c8.3 0 15-6.7 15-15v-19.1c0-8.3-6.7-15-15-15zm-1.4 32.7h-77v-16.3h77zm16.1-323.4h107.2c10.8.2 10.8 16.2 0 16.4h-107.2c-10.8-.2-10.8-16.3 0-16.4zm-60.1 45.7h167.3c10.8.2 10.7 16.2 0 16.4h-167.3c-10.9-.2-10.8-16.2 0-16.4zm0 45.7h167.3c10.8.2 10.7 16.2 0 16.4h-167.3c-10.9-.2-10.8-16.2 0-16.4zm275.5-164.7-225.3-56.4c-7.7-2.1-16.3 3.1-18.1 10.9l-4.2 16.9-146 45.5c-3.2 1-5.9 3.3-7.4 6.3-1.6 3-1.9 6.5-.8 9.7l53.2 170.8c-8.9 2.3-15.5 10.4-15.5 20v208.6c0 11.5 9.3 20.8 20.8 20.8h295.6c11.5 0 20.8-9.3 20.8-20.8v-177.9c0-10-7-18.3-16.4-20.3 0 0 54.1-216 54.1-216 2-7.9-2.8-16.1-10.8-18.1zm-385.1 31.5 132.8-41.4-9.9 39.5h-46c-7 0-12.8 5.7-12.8 12.8v160.6h-10.7zm305.9 14.4v187.8h-149.7c-1.3 0-2.5-.6-3.3-1.5l-19.3-22.3c-3.9-4.6-9.7-7.2-15.8-7.2l-37.2.1v-156.9zm35.9 386.4c0 2.4-2 4.4-4.4 4.4h-295.6c-2.4 0-4.4-2-4.4-4.4v-208.6c.2-5.5 6.2-4.3 9.9-4.4 15.4 0 54.6-.2 70.5-.3 1.3 0 2.5.5 3.4 1.5l19.3 22.3c4 4.6 9.7 7.2 15.7 7.2h181.2c2.5 0 4.4 1.9 4.4 4.4zm-16.8-198.6h-2.7v-191.4c0-7-5.7-12.8-12.8-12.8h-169.7c3.5-14 14.1-56.3 17.5-69.6l222.4 55.7z'/></svg>";
    toggleButton.onclick = handleButtonClick;
    document.body.appendChild(toggleButton);

    function toggleUIContainer() {
        var uiContainers = document.querySelectorAll('.uiContainer');
        uiContainers.forEach(function (container) {
            container.classList.toggle('d-none');
            /* container.classList.toggle('d-block');*/
        });
    }

    function sidebaroff() {
        var Reviewbox = document.querySelectorAll('.popupfeed');
        var Reviewbox1 = document.querySelectorAll('#mapInfo');

        Reviewbox.forEach(function (element) {
            element.style.display = "none";
        });

        Reviewbox1.forEach(function (element) {
            element.style.display = "none";
        });
    }
    // Define the combined function
    function handleButtonClick() {
        toggleLegend();
        toggleUIContainer();
        sidebaroff();
    }

    var legendData = [{
        layerId: "layer1",
        color: "blue",
        label: "Gram Panchayat",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer2",
        color: "black",
        label: "Block",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer3",
        color: "green",
        label: "District",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer4",
        color: "gray",
        label: "State",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer5",
        color: "blue",
        label: "Water Level Monitoring Stations",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer6",
        color: "yellow",
        label: "Water Quality Monitoring Stations",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer7",
        color: "#69dcff",
        label: "Artificial Recharge and Water Conservation Structures",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer8",
        color: "red",
        label: "Water Quality Monitoring (Through Field Testing Kit)",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer9",
        color: "#0000ff",
        label: "Well Registered",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer10",
        color: "#fff",
        label: "Ground Water Situation (Block Label)-As per GWR (CGWB 2023)",
        customTexts: [{
            "text": "Safe",
            "color": "white",
            "shape": "rectangle"
        },
        {
            "text": "Semi-Critical",
            "color": "blue",
            "shape": "rectangle"
        },
        {
            "text": "Critical",
            "color": "yellow",
            "shape": "rectangle"
        },
        {
            "text": "Over-Exploited",
            "color": "red",
            "shape": "rectangle"
        },


            ,
        ]
    },
    {
        layerId: "layer11",
        color: "blue",
        label: "Principal Aquifer",
        customTexts: [{
            "text": "Alluvium",
            "color": "#00FF00",
            "shape": "rectangle"
        },
        {
            "text": "Basalt",
            "color": "#228B22",
            "shape": "rectangle"
        },
        {
            "text": "Basement_Gneissic_Complex",
            "color": "#32CD32",
            "shape": "rectangle"
        },
        {
            "text": "-Charnockite-",
            "color": "#2E8B57",
            "shape": "rectangle"
        },
        {
            "text": "-Gneiss-",
            "color": "#008000",
            "shape": "rectangle"
        },
        {
            "text": "Granite",
            "color": "#3CB371",
            "shape": "rectangle"
        },
        {
            "text": "Intrusive",
            "color": "#20B2AA",
            "shape": "rectangle"
        },
        {
            "text": "Khondalites",
            "color": "#66CDAA",
            "shape": "rectangle"
        },
        {
            "text": "Laterite",
            "color": "#7FFFD4",
            "shape": "rectangle"
        },
        {
            "text": "Limestone",
            "color": "#00FA9A",
            "shape": "rectangle"
        },
        {
            "text": "-Quartzite-",
            "color": "#00FF7F",
            "shape": "rectangle"
        },
        {
            "text": "Sandstone",
            "color": "#8FBC8F",
            "shape": "rectangle"
        },
        {
            "text": "-Schist-",
            "color": "#556B2F",
            "shape": "rectangle"
        },
        {
            "text": "Shale",
            "color": "#9ACD32",
            "shape": "rectangle"
        },
        {
            "text": "Unclassified",
            "color": "#ADFF2",
            "shape": "rectangle"
        }
        ]
    },
    {
        layerId: "layer12",
        color: "blue",
        label: "Major Aquifer",
        customTexts: [{
            "text": "Acidic Rocks (Granite,Syenite, Rhyolite etc.)",
            "color": "#00FF00",
            "shape": "rectangle"
        },
        {
            "text": "Acidic Rocks (Pegmatite, Granite, Syenite, Rhyolit",
            "color": "#228B22",
            "shape": "rectangle"
        },
        {
            "text": "Aeolian Alluvium (Silt/ Sand)",
            "color": "#32CD32",
            "shape": "rectangle"
        },
        {
            "text": "Basement Gneissic Complex",
            "color": "#2E8B57",
            "shape": "rectangle"
        },
        {
            "text": "Basic Rocks (Basalt)",
            "color": "#008000",
            "shape": "rectangle"
        },
        {
            "text": "Basic Rocks (Dolerite, Anorthosite etc.)",
            "color": "#3CB371",
            "shape": "rectangle"
        },
        {
            "text": "Charnockite",
            "color": "#20B2AA",
            "shape": "rectangle"
        },
        {
            "text": "Coastal Alluvium (Sand/Silt/Clay)",
            "color": "#66CDAA",
            "shape": "rectangle"
        },
        {
            "text": "Gneiss",
            "color": "#7FFFD4",
            "shape": "rectangle"
        },
        {
            "text": "Khondalites, Granulites",
            "color": "#00FA9A",
            "shape": "rectangle"
        },
        {
            "text": "Laterite / Ferruginous concretions",
            "color": "#00FF7F",
            "shape": "rectangle"
        },
        {
            "text": "Limestone / Dolomite",
            "color": "#8FBC8F",
            "shape": "rectangle"
        },
        {
            "text": "Limestone with Shale",
            "color": "#556B2F",
            "shape": "rectangle"
        },
        {
            "text": "Limestone/Dolomite",
            "color": "#9ACD32",
            "shape": "rectangle"
        },
        {
            "text": "Marble",
            "color": "#ADFF2F",
            "shape": "rectangle"
        },
        {
            "text": "Migmatitic Gneiss",
            "color": "#7FFF00",
            "shape": "rectangle"
        },
        {
            "text": "Older Alluvium (Silt/Sand/Gravel/Lithomargic clay)",
            "color": "#00FF66",
            "shape": "rectangle"
        },
        {
            "text": "Pebble / Gravel/ Bazada/ Kandi",
            "color": "#6B8E23",
            "shape": "rectangle"
        },
        {
            "text": "Phyllite",
            "color": "#32CD99",
            "shape": "rectangle"
        },
        {
            "text": "Quartzite",
            "color": "#2E8B57",
            "shape": "rectangle"
        },
        {
            "text": "Sandstone with Clay",
            "color": "#48D1CC",
            "shape": "rectangle"
        },
        {
            "text": "Sandstone with Shale",
            "color": "#20B2AA",
            "shape": "rectangle"
        },
        {
            "text": "Sandstone with shale/ coal beds",
            "color": "#5F9EA0",
            "shape": "rectangle"
        },
        {
            "text": "Sandstone/Conglomerate",
            "color": "#4682B4",
            "shape": "rectangle"
        },
        {
            "text": "Schist",
            "color": "#87CEEB",
            "shape": "rectangle"
        },
        {
            "text": "Shale with Limestone",
            "color": "#87CEFA",
            "shape": "rectangle"
        },
        {
            "text": "Shale with Sandstone",
            "color": "#00BFFF",
            "shape": "rectangle"
        },
        {
            "text": "Shale, limestone and sandstone",
            "color": "#1E90FF",
            "shape": "rectangle"
        },
        {
            "text": "Shale/Shale with Sandstone",
            "color": "#6495ED",
            "shape": "rectangle"
        },
        {
            "text": "Slate",
            "color": "#7B68EE",
            "shape": "rectangle"
        },
        {
            "text": "Ulrta Basics (Epidiorite, Granophyre etc.)",
            "color": "#4169E1",
            "shape": "rectangle"
        },
        {
            "text": "Ultra Basic",
            "color": "#0000FF",
            "shape": "rectangle"
        },
        {
            "text": "Undifferentiated metasedimentaries/ Undifferentiat",
            "color": "#0000CD",
            "shape": "rectangle"
        },
        {
            "text": "Valley Fills",
            "color": "#00008B",
            "shape": "rectangle"
        },
        {
            "text": "Younger Alluvium (Clay/Silt/Sand/ Calcareous concr",
            "color": "#000080",
            "shape": "rectangle"
        },
        {
            "text": "Not_Specified",
            "color": "#000080",
            "shape": "rectangle"
        }
        ],


    },
    {
        layerId: "layer13",
        color: "blue",
        label: "Basins (CGWB)",
        customTexts: [{
            "text": "Barmer",
            "color": "#00FF00",
            "shape": "rectangle"
        },
        {
            "text": "Bhatsol",
            "color": "#228B22",
            "shape": "rectangle"
        },
        {
            "text": "Cauvery",
            "color": "#32CD32",
            "shape": "rectangle"
        },
        {
            "text": "Chambal",
            "color": "#2E8B57",
            "shape": "rectangle"
        },
        {
            "text": "Churu",
            "color": "#008000",
            "shape": "rectangle"
        },
        {
            "text": "Ghaghar",
            "color": "#3CB371",
            "shape": "rectangle"
        },
        {
            "text": "Godavari",
            "color": "#20B2AA",
            "shape": "rectangle"
        },
        {
            "text": "Krishna",
            "color": "#66CDAA",
            "shape": "rectangle"
        },
        {
            "text": "Kutch",
            "color": "#7FFFD4",
            "shape": "rectangle"
        },
        {
            "text": "Luni",
            "color": "#00FA9A",
            "shape": "rectangle"
        },
        {
            "text": "Narmada",
            "color": "#00FF7F",
            "shape": "rectangle"
        },
        {
            "text": "Pennar",
            "color": "#8FBC8F",
            "shape": "rectangle"
        },
        {
            "text": "Sabarmati",
            "color": "#556B2F",
            "shape": "rectangle"
        },
        {
            "text": "Sutlej",
            "color": "#9ACD32",
            "shape": "rectangle"
        },
        {
            "text": "Tapi",
            "color": "#ADFF2F",
            "shape": "rectangle"
        },
        {
            "text": "Upper Ganga",
            "color": "#7FFF00",
            "shape": "rectangle"
        },
        {
            "text": "Yamuna",
            "color": "#00FF66",
            "shape": "rectangle"
        },
        ]
    },
    {
        layerId: "layer14",
        color: "blue",
        label: "Annual Rainfall (IMD 2023 (in mm) at District Level)",
        customTexts: [{
            "text": "287.50-400.00",
            "color": "#00FF00",
            "shape": "rectangle"
        },
        {
            "text": "400.01-800.00",
            "color": "#6A5ACD",
            "shape": "rectangle"
        },
        {
            "text": "800.01-1200.00",
            "color": "#FFD700",
            "shape": "rectangle"
        },
        {
            "text": "1200.01-1600.00",
            "color": "#8B4513",
            "shape": "rectangle"
        },
        {
            "text": "1600.01-2000.00",
            "color": "#8A2BE2",
            "shape": "rectangle"
        },

        ]
    },
    //{
    //    layerId: "layer15", color: "blue", label: "Drainage (CGWB)", customTexts: [{ "text": "Gujarat", "color": "#00FF00", "shape": "rectangle" },
    //    { "text": "Haryana", "color": "#228B22", "shape": "rectangle" },
    //    { "text": "Karnataka", "color": "#32CD32", "shape": "rectangle" },
    //    { "text": "Madhya Pradesh", "color": "#2E8B57", "shape": "rectangle" },
    //    { "text": "Maharashtra", "color": "#008000", "shape": "rectangle" },
    //    { "text": "Rajasthan", "color": "#3CB371", "shape": "rectangle" },
    //    { "text": "Uttar Pradesh", "color": "#20B2AA", "shape": "rectangle" }]


    //},
    {
        layerId: "layer16",
        color: "green",
        label: "Rainguage",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer17",
        color: "#af7022",
        label: "Waterflow",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer18",
        color: "blue",
        label: "India",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer19",
        color: "blue",
        label: "GP Water Security Plan (2023-24)",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    {
        layerId: "layer22",
        color: "blue",
        label: "Water Level Monitoring Stations Se",
        customTexts: [{
            "text": "",
            "color": "",
            "shape": ""
        }]
    },
    ];

    var legendGroups = [{
        name: "Administrative Boundaries",
        layers: ["layer18", "layer4", "layer3", "layer2", "layer1"]
    },
    {
        name: "Data Point Layers",
        layers: ["layer5", "layer6", "layer7", "layer16", "layer17", "layer9", "layer8", "layer19"]
    },
    {
        name: "Intergreated Water Resource Mapping",
        layers: ["layer13", {
            subhead: ["layer12", "layer11"]
        }, "layer10", "layer14",]
    },
        // { name: "Gram Panchayats Water Security Plans", layers: ["layer19"] },
    ];
    var legendContainer = document.getElementById("legend");
    var count = 1;
    //

    // aman start
    legendGroups.forEach(function (group) {

        //main div
        var groupContainer = document.createElement("div");
        groupContainer.className = "legend-group";
        var h1Element = document.createElement("h1");
        h1Element.id = "Legend_Heading";
        h1Element.className = "Legendmain_Heading";
        h1Element.innerHTML = "( Counting As Per Dynamic Scale )";

        //child div
        var groupLabel = document.createElement("div");
        groupLabel.className = "legend-group-label";

        //main checkbox
        var groupsec = document.createElement("div");
        groupsec.className = "legend-group-labelText";
        groupsec.textContent = group.name;
        var groupCheckbox = document.createElement("input");
        groupCheckbox.type = "checkbox";
        groupCheckbox.className = "group-checkbox";
        groupCheckbox.id = "checkAll_" + count;
        $("#checkAll_1").attr('checked', true);
        $("#checkAll_2").attr('checked', true);
        groupContainer.appendChild(h1Element);
        groupLabel.appendChild(groupCheckbox);
        groupLabel.appendChild(groupsec);
        groupContainer.appendChild(groupLabel);


        // child checkbox
        group.layers.forEach(function (layerId) {

            var legendItem = document.createElement("div");
            legendItem.className = "legend-item";
            if (typeof layerId !== 'object') {

                var titleContainer = document.createElement("div");
                titleContainer.className = "legend-title-container";
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = layerId + "Toggle";
                checkbox.className = "layer-checkbox_" + groupCheckbox.id;


                checkbox.checked = true;
                $('#layer7Toggle').prop('checked', false);
                $('#layer16Toggle').prop('checked', false);
                $('#layer17Toggle').prop('checked', false);
                $('#layer9Toggle').prop('checked', false);
                $('#layer8Toggle').prop('checked', false);



                var anyChecked = document.querySelectorAll('.layer-checkbox_checkAll_2:checked').length > 0;
                checkbox.checked = !anyChecked;
                var titleText = legendData.find(item => item.layerId === layerId).label;
                var titleColor = legendData.find(item => item.layerId === layerId).color;

                var title = document.createElement("div");
                title.className = "legend-title";
                //var radioButtonMainParent = document.createElement("input");
                //radioButtonMainParent.type = "radio";
                //radioButtonMainParent.className = "legend-radio";
                var countSpan = document.createElement("span");
                countSpan.className = "legend-count";
                countSpan.classList.add("legend-count-" + layerId); // Add class based on layerId
                countSpan.textContent = "";

                var titleColorBox = document.createElement("div");
                titleColorBox.className = `title-color-box ${layerId}`;
                titleColorBox.style.backgroundColor = titleColor;

                title.textContent = titleText;
                var customTextContainers = document.createElement("div");
                customTextContainers.className = "legend-custom-text-container containerGridForCheckBox";
                //var div34 = document.createElement('div');
                //div34.className = "legend-title-container34";
                var customsata = legendData.filter(item => item.layerId === layerId);


                var customTextContainerss = document.createElement("div");
                customTextContainerss.className = "legend-custom-text-container";
                var tor = 1;
                customsata.forEach(function (customText) {
                    customText.customTexts.forEach(item => {
                        if (item.text && item.color && item.shape) {
                            // Perform any operation with the properties here
                            var customtextdivs = document.createElement("div");
                            customtextdivs.classname = "legend-custom-tex";
                            customtextdivs.textContent = item.text;

                            var colorboxs = document.createElement("div");
                            colorboxs.className = "color-box";

                            colorboxs.style.backgroundColor = item.color;


                            var TextSpan = document.createElement("div");
                            TextSpan.className = "Span-count";
                            TextSpan.id = item.text;
                            TextSpan.textContent = "";
                            TextSpan.name = item.text;

                            var radioButton = document.createElement("input");
                            radioButton.type = "checkbox";
                            radioButton.name = "customTextOption";
                            radioButton.className = "checkboxList newcheckbox";
                            radioButton.id = "newcheckbox" + groupCheckbox.id + tor + item.text.trim().toLowerCase();
                            radioButton.value = item.text;



                            customTextContainerss.appendChild(radioButton);
                            customTextContainerss.appendChild(customtextdivs);
                            customTextContainerss.appendChild(TextSpan);
                            customTextContainerss.appendChild(colorboxs);
                            tor++;
                        }

                    });

                });
                titleContainer.appendChild(checkbox);
                /* titleContainer.appendChild(radioButtonMainParent);*/
                titleContainer.appendChild(title);

                titleContainer.appendChild(countSpan);
                titleContainer.appendChild(titleColorBox);
                titleContainer.appendChild(customTextContainerss);
                groupContainer.appendChild(legendItem);

                legendItem.appendChild(titleContainer);;
            } else {
                //  console.log(layerId, 'layerId');
                var mainDiv = document.createElement("div");
                mainDiv.className = "legend-item";
                var subCheckBoxParentDiv = document.createElement('div');
                subCheckBoxParentDiv.className = "legend-title-container";
                var subCheckBoxParentDivInput = document.createElement("input");
                subCheckBoxParentDivInput.type = "checkbox";
                subCheckBoxParentDivInput.id = "layer20Toggle";
                subCheckBoxParentDivInput.className = "layer-checkbox_" + groupCheckbox.id;
                //var radioButtonMain = document.createElement("input");
                //radioButtonMain.type = "radio";
                //radioButtonMain.name = "customTextOption12";
                /* radioButtonMain.value = item.text;*/
                var title = document.createElement('div');
                title.className = "legend-title";
                title.textContent = "Aquifer";
                subCheckBoxParentDiv.appendChild(subCheckBoxParentDivInput);
                /*subCheckBoxParentDiv.appendChild(radioButtonMain);*/
                subCheckBoxParentDiv.appendChild(title);
                mainDiv.appendChild(subCheckBoxParentDiv);
                groupContainer.appendChild(mainDiv);
                layerId.subhead.forEach(function (subLayer) {
                    var subData = legendData.find(item => item.layerId === subLayer).label;


                    var parentdiv = document.createElement('div');
                    parentdiv.className = "legend-title-container gridcustomclass";
                    var div12 = document.createElement('div');
                    div12.className = "legend-title-container12";
                    var countSpanMajor = document.createElement("span");
                    countSpanMajor.className = "legend-countMajor-" + count++;
                    countSpanMajor.id = subData;
                    countSpanMajor.textContent = "";

                    var childDiv = document.createElement('div');
                    childDiv.className = "subcheckboxtitle";
                    childDiv.textContent = subData; // Set dummy text
                    var subCheckBoxParentDivInputs = document.createElement("input");

                    subCheckBoxParentDivInputs.type = "checkbox";
                    subCheckBoxParentDivInputs.id = subLayer + "Toggles";
                    subCheckBoxParentDivInputs.className = "layer-checkbox_sub";

                    //var radioButtonMainParentSub = document.createElement("input");
                    //radioButtonMainParentSub.type = "radio";
                    //radioButtonMainParentSub.className = "legend-radios";

                    var mainDataSubChild = document.createElement("div");
                    mainDataSubChild.id = subLayer + "Toggle" + "Child";
                    // mainDataSubChild.textContent = "asknbs";
                    var customTextContainer = document.createElement("div");
                    customTextContainer.className = "legend-custom-text-container pl_70";

                    var customTexts = legendData.find(item => item.layerId === subLayer).customTexts;
                    var countcheck = 0;
                    customTexts.forEach(function (customText) {
                        // console.log(customText, 'customText')
                        var radioButtons = document.createElement("input");
                        radioButtons.type = "checkbox";
                        radioButtons.className = "legend-radios " + ' ' + subLayer + "Toggles";

                        radioButtons.name = "customTextOption";
                        radioButtons.value = customText.text;

                        forID = customText.text.replace(/\s+/g, '_');
                        forID = customText.text.replace(/[^a-zA-Z0-9_]/g, '');
                        radioButtons.id = "legendsubcheck_" + forID.trim().toLowerCase() + countcheck;

                        var customTextDiv = document.createElement("div");
                        customTextDiv.className = "legend-custom-tex";
                        customTextDiv.innerHTML = customText.text;
                        var TextSpan1 = document.createElement("div");
                        TextSpan1.className = "Span-count";
                        //TextSpan1.id = "legendsubcheckCount_" + countcheck;
                        TextSpan1.id = customText.text;
                        TextSpan1.textContent = "";
                        var colorbox = document.createElement("div");
                        colorbox.className = "color-box";



                        colorbox.style.backgroundColor = customText.color;
                        customTextContainer.appendChild(radioButtons);
                        customTextContainer.appendChild(customTextDiv);

                        customTextContainer.appendChild(TextSpan1);
                        customTextContainer.appendChild(colorbox);

                        div12.appendChild(customTextContainer);
                        countcheck++
                    });
                    parentdiv.appendChild(subCheckBoxParentDivInputs);
                    /*parentdiv.appendChild(radioButtonMainParentSub);*/
                    parentdiv.appendChild(childDiv);
                    parentdiv.appendChild(countSpanMajor);
                    parentdiv.appendChild(countSpanMajor);
                    mainDiv.appendChild(mainDataSubChild);

                    parentdiv.appendChild(div12);
                    mainDiv.appendChild(parentdiv);
                    //mainDiv.appendChild(div12);

                });


            }

        });
        legendContainer.appendChild(groupContainer);
        count++;
    });




    // ------ Function for Graph data single or multiple Checkboxes---------

    function handleRadioButtonChange(layer_off_on) {
        if (layer_off_on) {
            basinValuesArray.push(layer_off_on);
        }
        if (layer_off_on) {
            const basinString = "'" + basinValuesArray.join("', '") + "'";
            console.log("basin string", basinString)
            try {
                watershed.definitionExpression = `basin IN (${basinString})`;
                aquifer.definitionExpression = `AQUIFER IN (${basinString})`;
                majoracquifier.definitionExpression = `major_aqui IN (${basinString})`;
                GWRA.definitionExpression = `category IN (${basinString})`;
                Rainfall.definitionExpression = `Category IN (${basinString})`;
                console.log(aquifer.definitionExpression, 'aquifer.definitionExpression')
            } catch (error) {
                console.error('Error updating layer definitions', error);
            }

        } else {
            try {
                watershed.definitionExpression = "";
                aquifer.definitionExpression = "";
                majoracquifier.definitionExpression = "";
                GWRA.definitionExpression = "";
                Rainfall.definitionExpression = "";

                console.log('Layer definitions cleared');
            } catch (error) {
                console.error('Error clearing layer definitions', error);
            }
        }
    }

    // -----------  For Sub Checkboxes click function -------------------- 
    $(document).ready(function () {
        var legendGroupLabelTexts = document.querySelectorAll('.checkboxList');
        var legendGroupLabelTexts12toggle = document.querySelectorAll('.layer12Toggles');
        var legendGroupLabelTexts11toggle = document.querySelectorAll('.layer11Toggles');
        legendGroupLabelTexts.forEach(function (labelText) {
            labelText.addEventListener('change', function () {

                basinValuesArray = [];
                let anyChecked = false;
                legendGroupLabelTexts.forEach(function (labelGetValue) {
                    if (labelGetValue.checked) {
                        console.log(labelGetValue.checked, 'true checked')
                        handleRadioButtonChange(labelGetValue.value);
                        anyChecked = true;
                    }

                })
                if (!anyChecked) {
                    // Handle the case when none of the labels are checked
                    // You can send the last value or a default value here
                    const lastValue = legendGroupLabelTexts[legendGroupLabelTexts.length - 1].value;
                    console.log('No labels checked, handling last value:', lastValue);
                    handleRadioButtonChange(lastValue);
                }
            });
        });
        legendGroupLabelTexts12toggle.forEach(function (labelText) {
            labelText.addEventListener('change', function () {

                basinValuesArray = [];
                legendGroupLabelTexts12toggle.forEach(function (labelGetValue) {
                    if (labelGetValue.checked) {

                        handleRadioButtonChange(labelGetValue.value);
                    }

                })
            });
        });
        legendGroupLabelTexts11toggle.forEach(function (labelText) {
            labelText.addEventListener('change', function () {
                console.log("calling")
                basinValuesArray = [];
                legendGroupLabelTexts11toggle.forEach(function (labelGetValue) {
                    if (labelGetValue.checked) {
                        console.log(labelGetValue.checked, 'true checked major principal')
                        handleRadioButtonChange(labelGetValue.value);
                    }

                })
            });
        });
    });

    // for sublayer checkbox
    //aman end

    $(document).ready(function () {
        // Get all legend group label text elements
        var legendGroupLabelTexts = document.querySelectorAll('.legend-group-labelText');

        // Add click event listener to each legend group label text
        legendGroupLabelTexts.forEach(function (labelText) {
            labelText.addEventListener('click', function () {
                // Find the closest legend group parent
                var legendGroup = this.closest('.legend-group');
                // Toggle active class on legend items within this legend group
                var legendItems = legendGroup.querySelectorAll('.legend-item');
                legendItems.forEach(function (item) {
                    item.classList.toggle('active');
                });
            });
        });
    });

    //$(document).ready(function () {
    //    // Get all legend group label text elements
    //    var legendGroupLabelTexts = document.querySelectorAll('.legend-title');

    //    // Add click event listener to each legend group label text
    //    legendGroupLabelTexts.forEach(function (labelText) {
    //        console.log(labelText,"abcd")
    //        labelText.addEventListener('click', function () {
    //            // Find the closest legend group parent
    //            var legendGroup = this.closest('.gridcustomclass');
    //            // Toggle active class on legend items within this legend group
    //            var legendItems = legendGroup.querySelectorAll('.legend-item');
    //            legendItems.forEach(function (item) {
    //                item.classList.toggle('active');
    //            });
    //        });
    //    });
    //});

    $(document).ready(function () {
        $('#layer13Toggle').prop('checked', false);
        $('#layer12Toggle').prop('checked', false);
        $('#layer11Toggle').prop('checked', false);
        $('#layer10Toggle').prop('checked', false);
        $('#layer14Toggle').prop('checked', false);
        $('#layer15Toggle').prop('checked', false);
        $('#layer16Toggle').prop('checked', false);
        $('#layer19Toggle').prop('checked', false);

        $("#checkAll_1").on("change", function () {

            var isCheckedcheckAll_1 = $("#checkAll_1").is(":checked");
            var checkboxes = document.querySelectorAll('.layer-checkbox_checkAll_1');
            GPLayer.visible = isCheckedcheckAll_1;
            BlockLayer.visible = isCheckedcheckAll_1;
            DistrictLayer.visible = isCheckedcheckAll_1;
            StateLayer.visible = isCheckedcheckAll_1;
            India.visible = isCheckedcheckAll_1;
            checkboxes.forEach(function (checkbox) {

                $('#' + checkbox.id).prop('checked', isCheckedcheckAll_1); // Setting each checkbox to the checked status of the checkAll_1 checkbox
            });

            //--- for graph ----
            $("#layer18Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer18Toggle").is(":checked");
                India.visible = isCheckedcheckAll_1;
            });
            $("#layer4Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer4Toggle").is(":checked");
                StateLayer.visible = isCheckedcheckAll_1;
            });
            $("#layer3Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer3Toggle").is(":checked");
                DistrictLayer.visible = isCheckedcheckAll_1;
            });
            $("#layer2Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer2Toggle").is(":checked");
                BlockLayer.visible = isCheckedcheckAll_1;
            });
            $("#layer1Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer1Toggle").is(":checked");
                GPLayer.visible = isCheckedcheckAll_1;
                GPLayerse.visible = isCheckedcheckAll_1;
            });

            $("#layer6Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer6Toggle").is(":checked");
                WaterQuality.visible = isCheckedcheckAll_1;
            });
            $("#layer5Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer5Toggle").is(":checked");
                WaterLevel.visible = isCheckedcheckAll_1;

            });
            $("#layer7Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer7Toggle").is(":checked");
                ArtificialResourceLayer.visible = isCheckedcheckAll_1;


            });
            $("#layer16Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer16Toggle").is(":checked");
                Rainguage.visible = isCheckedcheckAll_1;
            });
            $("#layer17Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer17Toggle").is(":checked");
                WaterFlow.visible = isCheckedcheckAll_1;


            });
            $("#layer9Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer9Toggle").is(":checked");
                Well.visible = isCheckedcheckAll_1;
            });
            $("#layer8Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer8Toggle").is(":checked");
                WaterQualitym.visible = isCheckedcheckAll_1;
            });
            $("#layer13Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer13Toggle").is(":checked");
                if (isCheckedcheckAll_1 == true) {
                    watershed.definitionExpression = "";
                }

                watershed.visible = isCheckedcheckAll_1;

            });
            $("#layer12Toggles").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer12Toggles").is(":checked");
                majoracquifier.definitionExpression = "";
                majoracquifier.visible = isCheckedcheckAll_1;
            });
            $("#layer11Toggles").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer11Toggles").is(":checked");
                aquifer.definitionExpression = "";
                acquifier.visible = isCheckedcheckAll_1;
            });
            $("#layer10Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer10Toggle").is(":checked");
                GWRA.definitionExpression = "";
                GWRA.visible = isCheckedcheckAll_1;
            });
            $("#layer14Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer14Toggle").is(":checked");
                Rainfall.definitionExpression = "";
                Rainfall.visible = isCheckedcheckAll_1;
            });
            //$("#layer15Toggle").on("change", function () {
            //    var isCheckedcheckAll_1 = $("#layer15Toggle").is(":checked");
            //    Drainage.definitionExpression = "";
            //    Drainage.visible = isCheckedcheckAll_1;
            //});

            $("#layer16Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer16Toggle").is(":checked");
                WSP.visible.visible = isCheckedcheckAll_1;
            });
            $("#layer19Toggle").on("change", function () {
                var isCheckedcheckAll_1 = $("#layer19Toggle").is(":checked");
                WSP.visible.visible = isCheckedcheckAll_1;
            });

            //$("#layer20Toggle").on("change", function () {
            //    var isCheckedcheckAll_1 = $("#layer20Toggle").is(":checked");
            //    if (isCheckedcheckAll_1) {
            //        $('#layer20Toggle').prop('checked', true); 
            //        console.log(isCheckedcheckAll_1,"ddd")
            //}

            //    console.log(isCheckedcheckAll_1,"qwq")
            //    majoracquifier.visible = isCheckedcheckAll_1;
            //    acquifier.visible = isCheckedcheckAll_1;

            //});

            //$("#layer5Toggle").on("change", function () {
            //    var isCheckedcheckAll_1 = $("#layer5Toggle").is(":checked");
            //    WaterLevelse.visible = isCheckedcheckAll_1;

            //});
        });


        $("#checkAll_2").on("change", function () {

            var isCheckedcheckAll_1 = $("#checkAll_2").is(":checked");
            var checkboxes = document.querySelectorAll('.layer-checkbox_checkAll_2');
            WaterQualitym.visible = isCheckedcheckAll_1;
            Well.visible = isCheckedcheckAll_1;
            WaterFlow.visible = isCheckedcheckAll_1;
            Rainguage.visible = isCheckedcheckAll_1;
            ArtificialResourceLayer.visible = isCheckedcheckAll_1;
            WaterLevel.visible = isCheckedcheckAll_1;
            WaterQuality.visible = isCheckedcheckAll_1;
            WSP.visible = isCheckedcheckAll_1;
            checkboxes.forEach(function (checkbox) {

                $('#' + checkbox.id).prop('checked', isCheckedcheckAll_1);
            });

        });
        //SUBCHECKBOX START

        //SUBCHECKBOX END

        $("#layer20Toggle").on("change", function () {


            var isCheckedcheckAll_1 = $("#layer20Toggle").is(":checked");
            var checkboxes = document.querySelectorAll('.layer-checkbox_sub');

            var elements = document.querySelectorAll('.legend-custom-text-container.pl_70');
            var legendelements = document.querySelectorAll('.legend-radios');

            elements.forEach(function (element) {
                if (isCheckedcheckAll_1) {
                    element.classList.add('hidden');
                } else {
                    element.classList.remove('hidden');
                }
            });

            checkboxes.forEach(function (checkbox) {

                $('#' + checkbox.id).prop('checked', isCheckedcheckAll_1); // Setting each checkbox to the checked status of the checkAll_1 checkbox
            });
            legendelements.forEach(function (checkbox) {
                console.log(checkbox.id, "id")
                $('.legend-radios').prop('checked', isCheckedcheckAll_1); // Setting each checkbox to the checked status of the checkAll_1 checkbox
            });
        });
        //swbjds
        $("#layer12Toggles").on("change", function () {

            var isCheckedcheckAll_1 = $("#layer12Toggles").is(":checked");
            var checkboxes = document.querySelectorAll('.layer12Toggles');

            checkboxes.forEach(function (checkbox) {

                $('#' + checkbox.id).prop('checked', isCheckedcheckAll_1); // Setting each checkbox to the checked status of the checkAll_1 checkbox
            });

        });
        $("#layer11Toggles").on("change", function () {

            var isCheckedcheckAll_1 = $("#layer11Toggles").is(":checked");
            var checkboxes = document.querySelectorAll('.layer11Toggles');
            console.log(isCheckedcheckAll_1, "11")

            checkboxes.forEach(function (checkbox) {

                $('.legend-radios.layer11Toggles').prop('checked', isCheckedcheckAll_1); // Setting each checkbox to the checked status of the checkAll_1 checkbox
            });

        });
        //sdkjcbdkjc
        $("#checkAll_3").on("change", function () {

            var isCheckedcheckAll_1 = $("#checkAll_3").is(":checked");
            var checkboxes = document.querySelectorAll('.layer-checkbox_checkAll_3');
            var checkboxessub = document.querySelectorAll('.layer-checkbox_sub');
            var checkboxessubsub = document.querySelectorAll('.checkboxList');
            var checkboxessubsubLegend = document.querySelectorAll('.legend-radios');
            var checkboxessubsubnew = document.querySelectorAll('.newcheckbox');


            Rainfall.visible = isCheckedcheckAll_1;
            GWRA.visible = isCheckedcheckAll_1;
            acquifier.visible = isCheckedcheckAll_1;
            majoracquifier.visible = isCheckedcheckAll_1;
            watershed.visible = isCheckedcheckAll_1;

            checkboxes.forEach(function (checkbox) {

                $('#' + checkbox.id).prop('checked', isCheckedcheckAll_1); // Setting each checkbox to the checked status of the checkAll_1 checkbox
            });
            checkboxessub.forEach(function (cb) {
                cb.checked = isCheckedcheckAll_1;
                // synchronize state with main checkbox
                console.log(cb.checked, "www")
            });
            checkboxessubsub.forEach(function (cb) {
                cb.checked = isCheckedcheckAll_1;
                // synchronize state with main checkbox
                console.log(cb.checked, "checkboxessubsub")
            });
            checkboxessubsubnew.forEach(function (cb) {
                cb.checked = isCheckedcheckAll_1;
                // synchronize state with main checkbox
                console.log(cb.checked, "newcheckbox")
            });
            checkboxessubsubLegend.forEach(function (cb) {
                cb.checked = isCheckedcheckAll_1;
                // synchronize state with main checkbox
                console.log(cb.checked, "www")
            });

            var elements = document.querySelectorAll('.legend-custom-text-container.pl_70');
            console.log("at class", elements)
            elements.forEach(function (element) {
                if (isCheckedcheckAll_1) {
                    // Add the class 'added-class' to the element
                    element.classList.add('hidden');
                    console.log("at class", isCheckedcheckAll_1);
                } else {
                    element.classList.remove('hidden');
                }
            });
        });
    })


    $("#checkAll_6").on("change", function () {

        var isCheckedcheckAll_1 = $("#checkAll_6").is(":checked");

        var checkboxes = document.querySelectorAll('#layer19Toggle');
        WSP.visible = isCheckedcheckAll_1;



        checkboxes.forEach(function (checkbox) {

            $('#' + checkbox.id).prop('checked', isCheckedcheckAll_1);

            // Setting each checkbox to the checked status of the checkAll_1 checkbox

        });

    })
    $("#layer19Toggle").on("change", function () {

        var isCheckedcheckAll_1 = $("#layer19Toggle").is(":checked");
        WSP.visible = isCheckedcheckAll_1;


    })

    $(document).ready(function () {
        $("#layer20Toggle").on("change", function () {
            var isCheckedcheckAll_1 = $("#layer20Toggle").is(":checked");
            //if (isCheckedcheckAll_1) {
            //    $('#layer20Toggle').prop('checked', true);
            //    console.log(isCheckedcheckAll_1, "ddd")
            //}

            console.log(isCheckedcheckAll_1, "qwq")
            majoracquifier.visible = isCheckedcheckAll_1;
            acquifier.visible = isCheckedcheckAll_1;

        });
    });
    //    // Select all checkboxes


    //


    // sub check box
    //$(document).ready(function () {
    //    // Select checkboxes
    //    var layer20Toggle = $('#layer20Toggle');
    //    var layer12Toggles = $('#layer12Toggles');
    //    var layer11Toggles = $('#layer11Toggles');

    //    // Function to update layer20Toggle based on layer12Toggles and layer11Toggles
    //    function updateLayer20Toggle() {
    //        var isChecked = layer12Toggles.prop('checked') || layer11Toggles.prop('checked');
    //        layer20Toggle.prop('checked', isChecked);
    //    }

    //    // Function to update layer12Toggles and layer11Toggles based on layer20Toggle
    //    function updateSubToggles() {
    //        var isChecked = layer20Toggle.prop('checked');
    //        layer12Toggles.prop('checked', isChecked);
    //        layer11Toggles.prop('checked', isChecked);
    //    }

    //    // Bind change events
    //    layer12Toggles.change(updateLayer20Toggle);
    //    layer11Toggles.change(updateLayer20Toggle);
    //    layer20Toggle.change(updateSubToggles);
    //});

    $(document).ready(function () {
        var checkboxes = document.querySelectorAll('.layer11Toggles');
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var isChecked = this.checked;
                var checkedCount = 0;
                checkboxes.forEach(function (cb) {
                    if (cb.checked) {
                        console.log(isChecked, 'isChecked');
                        checkedCount++;
                    }
                });
                if (checkedCount === 0) {
                    console.log(isChecked, 'isChecked', checkedCount);
                    $('#layer11Toggles').prop('checked', false);
                    $('#layer20Toggle').prop('checked', false);
                    $('#checkAll_3').prop('checked', false);
                } else {
                    $('#layer11Toggles').prop('checked', true);
                    $('#layer20Toggle').prop('checked', true);
                    $('#checkAll_3').prop('checked', true);
                }

            });
        });


    })

    //$(document).ready(function () {
    //    var checkboxes = document.querySelectorAll('.layer-checkbox_checkAll_3');
    //    var subcheckboxes = document.querySelectorAll('.checkboxList');
    //    checkboxes.forEach(function (checkbox) {
    //        checkbox.addEventListener('change', function () {
    //            console.log(checkbox,"Cjecknew")
    //            var isChecked = this.checked;
    //            var checkedCount = 0;
    //            subcheckboxes.forEach(function (cb) {
    //                $('.checkboxList').prop('checked', isChecked);
    //            });


    //        });
    //    });


    //})

    // end
    $(document).ready(function () {
        var checkboxes = document.querySelectorAll('.layer-checkbox_checkAll_1');

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var isChecked = this.checked;
                var checkedCount = 0;
                checkboxes.forEach(function (cb) {
                    if (cb.checked) {
                        console.log(isChecked, 'isChecked');
                        checkedCount++;
                    }
                });
                if (checkedCount === 0) {
                    console.log(isChecked, 'isChecked', checkedCount);
                    $('#checkAll_1').prop('checked', false);
                } else {
                    $('#checkAll_1').prop('checked', true);
                }

            });
        });


    })
    //checkbox 2
    $(document).ready(function () {

        var checkboxes1 = document.querySelectorAll('.layer-checkbox_checkAll_2');
        checkboxes1.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var isChecked = this.checked;
                var checkedCount = 0;
                checkboxes1.forEach(function (cb) {
                    if (cb.checked) {
                        console.log(isChecked, 'isChecked');
                        checkedCount++;
                    }
                });
                if (checkedCount === 0) {
                    console.log(isChecked, 'isChecked', checkedCount);
                    $('#checkAll_2').prop('checked', false);
                } else {
                    $('#checkAll_2').prop('checked', true);
                }

            });
        });
        //check box 2

    })
    $(document).on('change', '.layer-checkbox_checkAll_3', function () {
        var isChecked = $(this).is(':checked');
        $(this).closest('.legend-title-container').find('.additional-span').each(function () {
            if (isChecked) {
                $(this).css('display', 'none');
            }
        });

        $(this).closest('.legend-title-container').find('.Span-count').each(function () {
            if (isChecked) {
                $(this).css('display', 'block');
            }
        });
    });

    //checkbox 3
    $(document).ready(function () {
        $('#checkAll_3').change(function () {
            if ($(this).is(':checked')) {
                $(this).closest('.legend-group-label').siblings('.legend-item').find('.legend-custom-text-container').addClass('disLayerNoneCustomForParentChild');
                $(this).closest('.legend-group-label').siblings('.legend-item').find('.disLayerNone').show();
            } else {
                $(this).closest('.legend-group-label').siblings('.legend-item').find('.legend-custom-text-container').removeClass('disLayerNoneCustomForParentChild');
                $(this).closest('.legend-group-label').siblings('.legend-item').find('.disLayerNone').hide();
            }

            var isChecked = $(this).is(':checked');
            $(this).closest('.legend-title-container').find('.additional-span').each(function () {
                if (isChecked) {
                    $(this).css('display', 'none');
                }
            });

            $(this).closest('.legend-title-container').find('.Span-count').each(function () {
                if (isChecked) {
                    $(this).css('display', 'block');
                }
            });
        });
    });

    $(document).ready(function () {
        var checkboxes3 = document.querySelectorAll('.layer-checkbox_checkAll_3');


        checkboxes3.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var isChecked = this.checked;
                var checkedCount = 0;
                checkboxes3.forEach(function (cb) {
                    if (cb.checked) {
                        checkedCount++;
                    }
                });
                $('#checkAll_3').prop('checked', checkedCount > 0);

            });
        });
        $(document).ready(function () {
            // Function to update the parent checkbox and the legend-custom-text-container
            function updateParentCheckboxAndContainer(parentCheckbox, isCheckedin, id) {
                var container = parentCheckbox.closest('.legend-item');
                var newCheckboxes = container.find('.newcheckbox');
                var anyChecked = newCheckboxes.is(':checked');
                var legendCustomTextContainer = container.find('.legend-custom-text-container');

                parentCheckbox.prop('checked', anyChecked);

                if (id === "layer20Toggle") {
                    $('#layer20Toggle').prop('checked', isCheckedin);
                }



                if (anyChecked) {
                    legendCustomTextContainer.addClass('disLayerNone');

                } else {
                    legendCustomTextContainer.removeClass('disLayerNone');


                }


            }



            // Add event listener to each newcheckbox
            $('.newcheckbox').change(function () {
                var parentCheckbox = $(this).closest('.legend-item').find('.layer-checkbox_checkAll_3');
                updateParentCheckboxAndContainer(parentCheckbox, false, undefined);
                //var anyChecked = $('.newcheckbox:checked').length > 0;

                //if (anyChecked) {
                //    console.log('At least one checkbox is checked');
                //    // Perform your desired actions here
                //} else {
                //    console.log('No checkboxes are checked');
                //    // Perform your desired actions here
                //}

            });

            // Add event listener to the parent checkbox to check/uncheck its associated newcheckboxes
            $('.layer-checkbox_checkAll_3').change(function () {
                var isChecked = $(this).prop('checked');
                var checkboxId = $(this).attr('id');
                if (checkboxId === "layer20Toggle") {
                    isChecked = $(this).prop('checked');
                }

                var newCheckboxes = $(this).closest('.legend-item').find('.newcheckbox');
                newCheckboxes.prop('checked', isChecked);
                updateParentCheckboxAndContainer($(this), isChecked, checkboxId);
                if ($(this).is(':checked')) {

                    $(this).closest('.legend-group-label').siblings('.legend-item').find('.legend-custom-text-container').show();
                    $(this).closest('.legend-group-label').siblings('.legend-item').find('.dislayernone').show();
                } else {

                    $(this).closest('.legend-group-label').siblings('.legend-item').find('.legend-custom-text-container').hide();
                    $(this).closest('.legend-group-label').siblings('.legend-item').find('.dislayernone').hide();
                }

            });
            $('.layer-checkbox_checkAll_3').each(function () {
                updateParentCheckboxAndContainer($(this), false, undefined);
                var newCheckboxes = $(this).closest('.legend-item').find('.newcheckbox');

            });


        });

        $(document).ready(function () {
            var layerzeroOnOff = document.querySelectorAll(".checkbox_checkAll_3")

            function updateSpanVisibility(checkbox) {
                var checkboxId = checkbox.val();
                var spanElement = $('#' + checkboxId);
                var additionalSpanClass = 'additional-span-' + checkboxId;

                // Remove existing additional span if any
                $('.' + additionalSpanClass).remove();

                if (checkbox.is(':checked')) {
                    console.log(checkbox, "sdew")
                    spanElement.show();
                } else {
                    spanElement.hide();
                    spanElement.after('<div class="additional-span ' + additionalSpanClass + '">0</div>');
                }
                checkAllUnchecked();
            }

            function checkAllUnchecked() {
                var allUnchecked = true;
                $('.newcheckbox').each(function () {
                    if ($(this).is(':checked')) {
                        allUnchecked = false;
                    }
                });

                if (allUnchecked) {
                    $('.legend-count').each(function () {
                        $(this).text('0');
                    });
                }
            }
            // Attach change event handler
            $('.newcheckbox').change(function () {
                updateSpanVisibility($(this));
            });

            // Initialize visibility based on initial checkbox state
            //$('.newcheckbox').each(function () {
            //    updateSpanVisibility($(this));
            //});
        });

        // Get all checkboxes with class "layer-checkbox_checkAll_3"
        // Get all checkboxes with class "layer-checkbox_checkAll_3"
        //document.addEventListener('change', function (event) {
        //    if (event.target.matches('.layer-checkbox_checkAll_3')) {

        //        var container = event.target.closest('.legend-title-container');
        //        if (container) {
        //            var customTextContainer = container.querySelector('.legend-custom-text-container');
        //            if (customTextContainer) {
        //                var siblings = customTextContainer.querySelectorAll('div');
        //                //  siblings.forEach(function (sibling) {
        //                if (event.target.checked) {
        //                    customTextContainer.classList.add('disLayerNone');
        //                    customTextContainer.classList.add('disLayerNoneCustomForParentChild');
        //                } else {
        //                    customTextContainer.classList.remove('disLayerNone');
        //                    customTextContainer.classList.remove('disLayerNoneCustomForParentChild');
        //                }
        //                // });
        //            }
        //        }
        //    }
        //    //anothe lmnsc


        //});



        document.addEventListener('change', function (event) {
            // Check if the changed element has the class 'layer-checkbox_sub'
            var checkboxes3sub = document.querySelectorAll('.layer-checkbox_sub');

            if (event.target.classList.contains('layer-checkbox_sub')) {

                var checkedCount = 0;
                checkboxes3sub.forEach(function (cb) {
                    if (cb.checked) {


                        checkedCount++;
                    }
                });
                if (checkedCount === 0) {

                    $('#layer20Toggle').prop('checked', false);
                    $('#checkAll_3').prop('checked', false);

                } else {
                    $('#layer20Toggle').prop('checked', true);
                    $('#checkAll_3').prop('checked', true);
                }

                var container = event.target.closest('.legend-title-container');
                if (container) {


                    var customTextContainer = container.querySelector('.legend-custom-text-container');
                    if (customTextContainer) {

                        customTextContainer.classList.toggle('hidden');
                    }
                }
            }
        });



    });


    function clickCheckboxTwice(checkboxId) {
        $("#" + checkboxId).prop('checked', true).trigger('change').prop('checked', true).trigger('change');
    }

    $(document).ready(function () {

        clickCheckboxTwice("checkAll_1");
    });


    function checkAllChecked() {
        const checkboxes = document.querySelectorAll('.newcheckbox');
        let checkedCount = 0;

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                checkedCount++;
            }
        });


        if (checkedCount === 1) {
            $('#checkAll_3').prop('checked', false);
        }
        // return checkedCount === checkboxes.length;
    }
    $('.newcheckbox').change(function () {
        checkAllChecked();
    });




    function toggleGroupLayers(group, visible) {
        group.layers.forEach(function (layerId) {
            id = '#' + layerId + "Toggle";
            if (visible) {
                $(id).prop('checked', false)
            } else {
                $(id).prop('checked', true)
            }


            toggleLayer(layerId, visible);
        });
    }

    //function toggleGroupLayersVisibility(groupId, visible) {
    //    var groupLayers = legendGroups[groupId - 1].layers; // Get the layers for the corresponding group
    //    groupLayers.forEach(function (layerId) {
    //        toggleLayer(layerId, visible); // Toggle the visibility of each layer in the group
    //    });
    //}

    function toggleLayer(layerId, visible) {

        var layerElement = document.getElementById(layerId);


        if (visible) {

            layerElement.style.display = "none";
        } else {

            layerElement.style.display = "block";
        }
    }



    function toggleGroupLayersVisibility(checkbox, visible) {
        var groupId = checkbox.id.split("_")[1];
        var groupLayers = legendGroups[groupId - 1].layers;
        groupLayers.forEach(function (layerId) {
            toggleLayer(layerId, visible);
        });
    }

    function toggleCustomText(checkbox) {

        const legendItem = checkbox.parentElement.parentElement; // Get legendItem from checkbox
        const customTextContainers = legendItem.querySelectorAll('.legend-custom-text-container');


        customTextContainers.forEach(function (customTextContainer) {
            if (checkbox.checked) {
                customTextContainer.style.display = "none"; // Show custom text
            } else {
                customTextContainer.style.display = "flex"; // Hide custom text
            }
        });
    }

    function toggleLayer(layerId, visible) {

        var layerElement = document.getElementById(layerId);


        if (visible !== undefined) {

            layerElement.style.display = visible ? "block" : "none";
        } else {

            layerElement.style.display = layerElement.style.display === "none" ? "block" : "none";
        }
    }


    // Function to toggle visibility of a layer
    function toggleLayer(layerId, visible) {

        var layerElement = document.getElementById(layerId);

        if (visible !== undefined) {

            layerElement.style.display = visible ? "block" : "none";
        } else {

            layerElement.style.display = layerElement.style.display === "none" ? "block" : "none";
        }
    }

    function toggleGroupVisibility(groupContainer) {
        // Toggle visibility of group layers when group label is clicked
        var legendItems = groupContainer.querySelectorAll(".legend-item");
        legendItems.forEach(function (legendItem) {
            legendItem.classList.toggle("hidden");
        });
    }

    function toggleLayer(layerId) {
        var layer = view.map.findLayerById(layerId);
        if (layer) {
            var checkbox = document.getElementById(layerId + "Toggle");
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                layer.visible = checkbox.checked;
            }
        }
    }
    //ui-container
    var uiContainer = document.getElementById("ui-container");

    var customToggleButton = document.createElement("div");
    customToggleButton.className = "maptoggleButton";

    var customCloseButton = document.createElement("a");
    customCloseButton.id = "close-sidebar2";
    customCloseButton.title = "Close Sidebar";
    customCloseButton.href = "#";
    customCloseButton.innerHTML = " <i class='fas fa-bars'></i>";

    var customToggleButton1 = document.createElement("a");
    customToggleButton1.id = "show-sidebar";
    customToggleButton1.title = "Show Sidebar";
    customToggleButton1.href = "#";
    customToggleButton1.innerHTML = " <i class='fas fa-bars'></i>";

    var customToggleButton2 = document.createElement("a");
    customToggleButton2.id = "show-sidebar1";
    customToggleButton2.target = "_blank"
    customToggleButton2.href = "https://ataljal.mowr.gov.in";
    customToggleButton2.innerHTML = " <i class='fa fa-home'></i>";

    var customHomeButton = document.createElement("div");
    customHomeButton.id = "customHomeButton";
    customHomeButton.className = "custom-home-button";
    customHomeButton.title = "Default View";
    customHomeButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M2 5h2.281L.85 1.556l.7-.712L5 4.244V2h1v3.939H2zm12 5.061h-4V14h1v-2.243l3.449 3.399.702-.712L11.72 11H14zM10 2v3.939h4V5h-2.281l3.432-3.444-.702-.712L11 4.244V2zM1.551 15.156L5 11.756V14h1v-3.939H2V11h2.281L.85 14.444z'/><path fill='none' d='M0 0h16v16H0z'/></svg>";



    uiContainer.appendChild(customToggleButton);
    customToggleButton.appendChild(customToggleButton1);
    customToggleButton.appendChild(customCloseButton);
    customToggleButton1.addEventListener("click", function (event) {
        event.preventDefault();
        $(".page-wrapper").addClass("toggled");
    });
    customToggleButton.appendChild(customToggleButton2);
    uiContainer.appendChild(customHomeButton);
    customHomeButton.addEventListener('click', function () {
        clickButtonTwice('show-sidebar');
        const mapData = document.getElementById('map_data_off');
        if (mapData.style.visibility === 'visible') {
            map_data_off();
        }


    });

    var homeViewModel = new Home({
        view: view
    });

    customHomeButton.addEventListener("click", function () {
        homeViewModel.go();
    });


    //  For getting the Layer On
    function clickButtonTwice(buttonId) {
        $("#" + buttonId).click();
        setTimeout(function () {
            $("#" + buttonId).click();
        }, 100);
    }

    $(document).ready(function () {
        const cntrySelectd = $('#cntry');

        cntrySelectd.change(function () {
            const selectedValue = $(this).val();

            if (selectedValue === "--Select State--" || selectedValue === "All") {
                clickButtonTwice('show-sidebar');
            }
        });
    });


    // for Querying waterlevel



    $(document).ready(function () {
        console.log("Document is ready");
        $('#stateDropdown, #districtDropdown, #blockDropdown, #gpDropdown, #sourceDropdown').on('change', function () {
            // Get selected values
            var selectedState = $('#stateDropdown').val();
            var selectedDistrict = $('#districtDropdown').val();
            var selectedBlock = $('#blockDropdown').val();
            var selectedGp = $('#gpDropdown').val();
            var selectedSource = $('#sourceDropdown').val();

            // Call the function to fetch well type count
            fetchWellTypeCountWL(selectedState, selectedDistrict, selectedBlock, selectedGp, selectedSource);
        });
        // Fetch states when the page loads
        FetchLocationOptionsWL();
        //$('#sourceDropdownQuality').change(function () {
        //    // Fetch the selected values from other dropdowns (state, district, etc.)
        //    let state = $('#stateDropdown').val(); // Example: assuming you have a state dropdown
        //    let district = $('#districtDropdown').val(); // Example: district dropdown
        //    let block = $('#blockDropdown').val(); // Example: block dropdown
        //    let gp = $('#gpDropdown').val(); // Example: gp dropdown

        //    fetchSourceAndWellTypeOptions(state, district, block, gp);
        //});
        // Function to fetch source and well_type counts based on selected parameters



        function fetchSourceAndWellTypeOptionsWL(state, district, block, grampanchayat) {
            let url = '/mapview/FetchLocationOptionsWL';  // Adjust endpoint if needed

            // Append query parameters based on input
            if (state) url += `?state=${encodeURIComponent(state)}`;
            if (district) url += `&district=${encodeURIComponent(district)}`;
            if (block) url += `&block=${encodeURIComponent(block)}`;
            if (grampanchayat) url += `&grampanchayat=${encodeURIComponent(grampanchayat)}`;

            console.log("Fetching source and well type URL:", url); // Log the URL

            // Fetch data from the server for sources and well types
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    console.log("Source and well type data received:", data); // Log the response

                    if (data.success) {
                        // Populate the source dropdown (assuming the ID is 'sourceDropdownQuality')
                        populateDropdown('sourceDropdown', data.options, 'Source');

                        // You can also handle well type options similarly if needed
                        // populateDropdown('wellTypeDropdownQuality', data.wellTypeOptions, 'Well Type');
                    } else {
                        alert(data.message);  // Notify if there's no data
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching source and well type options:", error);
                    alert("An error occurred while fetching source and well type options.");
                }
            });
        }

        // Function to fetch data based on parameters
        function FetchLocationOptionsWL(state = null, district = null, block = null, grampanchayat = null) {

            let url = '/mapview/FetchLocationOptionsWL';

            // Append query parameters based on input
            if (state) url += `?state=${encodeURIComponent(state)}`;
            if (district) url += `&district=${encodeURIComponent(district)}`;
            if (block) url += `&block=${encodeURIComponent(block)}`;
            if (grampanchayat) url += `&grampanchayat=${encodeURIComponent(grampanchayat)}`;

            console.log("Fetching URL:", url); // Log the URL being fetched

            // Fetch data from the server
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {

                    console.log("Data received:", data); // Log the response
                    if (data.success) {
                        if (!state && !district && !block && !grampanchayat) {
                            // Populate the state dropdown
                            populateDropdown('stateDropdown', data.options, 'State');

                        } else if (state && !district && !block && !grampanchayat) {
                            // Populate the district dropdown
                            populateDropdown('districtDropdown', data.options, 'District');
                            populatesource('sourceDropdown', data.sourceoption, 'source');

                        } else if (state && district && !block && !grampanchayat) {
                            // Populate the block dropdown
                            populateDropdown('blockDropdown', data.options, 'Block');
                            populatesource('sourceDropdown', data.sourceoption, 'source');
                        } else if (state && district && block && !grampanchayat) {
                            // Populate the Gram Panchayat dropdown
                            populateDropdown('gpDropdown', data.options, 'Gram Panchayat');
                            populatesource('sourceDropdown', data.sourceoption, 'source');
                        } else if (state && district && block && grampanchayat) {
                            // Fetch and update source and well_type counts after GP is selected
                            fetchSourceAndWellTypeOptionsWL(state, district, block, grampanchayat);
                        }
                    } else {
                        alert(data.message); // Alert the user if no data found
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching data:", error);
                    alert("An error occurred while fetching data.");
                }
            });
        }




        function fetchSourceOptions(state, district, block, grampanchayat) {
            if (!state || !district || !block || !grampanchayat) {
                console.log("All parameters must be provided.");
                return;
            }

            let url = `/mapview/FetchSourceOptionsWL?state=${encodeURIComponent(state)}&district=${encodeURIComponent(district)}&block=${encodeURIComponent(block)}&grampanchayat=${encodeURIComponent(grampanchayat)}`;
            console.log("Fetching Source Options URL:", url); // Log the URL being fetched

            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    console.log("Source Options Data received:", data); // Log the response
                    if (data.success) {
                        $('#sourceDropdown').empty();
                        $('#sourceDropdown').append(new Option("Select Source", ""));
                        $.each(data.options, function (index, source_Ownership) {
                            $('#sourceDropdown').append(new Option(source_Ownership, source_Ownership));
                        });
                    } else {
                        alert(data.message);
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching source options:", error);
                    alert("An error occurred while fetching source options.");
                }
            });
        }


        // Call this function when the page loads or when relevant selections change
        $(document).ready(function () {
            fetchSourceOptions(); // Fetch sources on page load or when a selection is made
        });
        // Function to populate a dropdown with options and display only the part before '_'
        function populateDropdown(dropdownId, options, placeholderName) {
            const dropdown = document.getElementById(dropdownId);
            dropdown.innerHTML = ''; // Clear existing options

            // Add default 'Select' option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = `Select ${placeholderName}`;
            dropdown.appendChild(defaultOption);

            // Populate dropdown with fetched options
            options.forEach(option => {
                const opt = document.createElement('option');
                const value = option.name || option;
                if (value === 'Delhi_7') {
                    return;
                }
                const displayText = value.split('_')[0]; // Show only the part before '_'

                opt.value = value; // Keep the full value for submission
                opt.textContent = displayText; // Show only the first part before the underscore
                dropdown.appendChild(opt);
            });
        }

        //  for dropdown being seen one by one


        $(document).ready(function () {
            $("#districtDropdown, #blockDropdown, #gpDropdown").hide();
            $("#stateDropdown").change(function () {
                var selectedState = $(this).val();
                if (selectedState === "Select State") {
                    $("#districtDropdown, #blockDropdown, #gpDropdown").hide();
                } else {
                    $("#districtDropdown").show();
                }
            });
            $("#districtDropdown").change(function () {
                var selectedDistrict = $(this).val();
                if (selectedDistrict === "Select District") {
                    $("#blockDropdown").hide();
                } else {
                    $("#blockDropdown").show();
                }
            });
            $("#blockDropdown").change(function () {
                var selectedDistrict = $(this).val();

                if (selectedDistrict === "Select Block") {
                    $("#gpDropdown").hide();
                } else {
                    $("#gpDropdown").show();
                }
            });
        });

        $(document).ready(function () {
            $("#districtDropdownQuality, #blockDropdownQuality, #gpDropdownQuality").hide();
            $("#stateDropdownQuality").change(function () {
                var selectedState = $(this).val();
                if (selectedState === "Select State") {
                    $("#districtDropdownQuality, #blockDropdownQuality, #gpDropdownQuality").hide();
                } else {
                    $("#districtDropdownQuality").show();
                }
            });
            $("#districtDropdownQuality").change(function () {
                var selectedDistrict = $(this).val();
                if (selectedDistrict === "Select District") {
                    $("#blockDropdownQuality").hide();
                } else {
                    $("#blockDropdownQuality").show();
                }
            });
            $("#blockDropdownQuality").change(function () {
                var selectedDistrict = $(this).val();

                if (selectedDistrict === "Select Block") {
                    $("#gpDropdownQuality").hide();
                } else {
                    $("#gpDropdownQuality").show();
                }
            });
        });
        //

        $(document).ready(function () {
            // Change event for districtDropdownQuality
            $('#districtDropdownQuality').change(function () {
                var selectedDistrict = $(this).val();

                // If the district is "Select District", reset the block and GP dropdowns
                if (selectedDistrict === "Select District") {
                    $('#blockDropdownQuality').html('<option value="">Select Block</option>'); // Reset Block
                    $('#gpDropdownQuality').html('<option value="">Select Gram Panchayat</option>'); // Reset GP
                } else {
                    // When a district is selected, reset and show the block and GP dropdowns
                    $('#blockDropdownQuality').html('<option value="">Select Block</option>').show(); // Ensure Block dropdown shows
                    $('#gpDropdownQuality').html('<option value="">Select Gram Panchayat</option>').hide(); // Reset GP but hide it until block is selected
                }
            });

            // Change event for blockDropdownQuality
            $('#blockDropdownQuality').change(function () {
                var selectedBlock = $(this).val();

                // If block is "Select Block", reset the GP dropdown
                if (selectedBlock === "Select Block") {
                    $('#gpDropdownQuality').html('<option value="">Select Gram Panchayat</option>'); // Reset GP
                } else {
                    // When a block is selected, show the GP dropdown
                    $('#gpDropdownQuality').show();
                }
            });

        //    // Change event for stateDropdownQuality
        //    $('#stateDropdownQuality').change(function () {
        //        var selectedState = $(this).val();

        //        // If state is "Select State", reset the district, block, and GP dropdowns
        //        if (selectedState === "Select State") {
        //            $('#districtDropdownQuality').html('<option value="">Select District</option>'); // Reset District
        //            $('#blockDropdownQuality').html('<option value="">Select Block</option>'); // Reset Block
        //            $('#gpDropdownQuality').html('<option value="">Select Gram Panchayat</option>'); // Reset GP
        //        } else {
        //            // State is selected, show district dropdown and reset others
        //            $('#districtDropdownQuality').html('<option value="">Select District</option>').show(); // Ensure District dropdown shows
        //            $('#blockDropdownQuality').html('<option value="">Select Block</option>').hide(); // Reset and hide Block
        //            $('#gpDropdownQuality').html('<option value="">Select Gram Panchayat</option>').hide(); // Reset and hide GP
        //        }
        //    });
        });





        //
        function populatesource(dropdownId, sourceoption, placeholderName) {

            const dropdown = document.getElementById(dropdownId);
            dropdown.innerHTML = ''; // Clear existing options

            // Add default 'Select' option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = `Select ${placeholderName}`;
            dropdown.appendChild(defaultOption);
            // Populate dropdown with fetched options
            sourceoption.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.name || option; // Use the name property or the direct string if available
                opt.textContent = option.name || option; // Use the name property or the direct string if available
                dropdown.appendChild(opt);
            });

        }

        // Event listeners for dropdown changes
        $('#stateDropdown').change(function () {
            const state = this.value;
            FetchLocationOptionsWL(state); // Fetch districts based on the selected state
        });

        $('#districtDropdown').change(function () {
            const state = $('#stateDropdown').val();
            const district = this.value;
            FetchLocationOptionsWL(state, district); // Fetch blocks based on the selected district
        });

        $('#blockDropdown').change(function () {
            const state = $('#stateDropdown').val();
            const district = $('#districtDropdown').val();
            const block = this.value;
            FetchLocationOptionsWL(state, district, block); // Fetch GPs based on the selected block
        });

        $('#gpDropdown').change(function () {
            const state = $('#stateDropdown').val();
            const district = $('#districtDropdown').val();
            const block = $('#blockDropdown').val();
            const grampanchayat = this.value;
            FetchLocationOptionsWL(state, district, block, grampanchayat); // Fetch source and well type data based on GP
        });

        $('#sourceDropdown').change(function () {
            const state = $('#stateDropdown').val();
            const district = $('#districtDropdown').val();
            const block = $('#blockDropdown').val();
            const grampanchayat = $('#gpDropdown').val();
            const source_Ownership = this.value;

            // Fetch the unique well types based on the selected source
            // fetchWellTypeCountBySource(state, district, block, grampanchayat, source_Ownership);
        });
        function fetchWellTypeCountWL(state, district, block, grampanchayat, source_Ownership) {
            let url = `/mapview/FetchWellTypeCountBySourceWL?state=${encodeURIComponent(state)}&district=${encodeURIComponent(district)}&block=${encodeURIComponent(block)}&grampanchayat=${encodeURIComponent(grampanchayat)}&source_Ownership=${encodeURIComponent(source_Ownership)}`;

            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    let container = $('#wellTypeCountsContainer');
                    let messageContainer = $('#messageContainer');  // Add a div to display messages
                    container.empty();  // Clear any previous results
                    messageContainer.empty();  // Clear previous messages

                    if (data.success) {
                        console.log("Well Type Counts:", data.wellTypeCounts);

                        // Check if there are no wellTypeCounts and show a message in the div
                        if (data.wellTypeCounts.length === 0) {
                            messageContainer.html('<div class="alert alert-info">Please update the dropdown</div>');
                        } else {
                            // If data exists, clear any message and display the results
                            data.wellTypeCounts.forEach(function (wellTypeCount, index) {
                                var wellTypeHtml = `
                        <div id="wellTypeContainer1_${index}" class="wellTypeContainer d-flex justify-content-between align-items-center mb-2">
                            <span id="wellType1_${index}" class="popUpText">${wellTypeCount.TypeOfWell}:</span>
                            <span id="wellCount1_${index}" class="popUpText2 badge badge-primary">${wellTypeCount.Count}</span>
                        </div>
                        `;
                                container.append(wellTypeHtml);
                            });
                        }
                    } else {
                        messageContainer.html(`<div class="alert alert-danger">${data.message}</div>`);  // Show the error message in a div
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching well type count:", error);
                    $('#messageContainer').html('<div class="alert alert-danger">An error occurred while fetching well type counts.</div>');  // Show error in a div
                }
            });
        }

    });
    //








    //  // Function to waterlevel query ends
    // Function to waterquality query start

    $(document).ready(function () {
        console.log("Document is ready");

        // Event listener for dropdown changes
        $('#stateDropdownQuality, #districtDropdownQuality, #blockDropdownQuality, #gpDropdownQuality, #sourceDropdownQuality').on('change', function () {
            // Get selected values
            var selectedState = $('#stateDropdownQuality').val();
            var selectedDistrict = $('#districtDropdownQuality').val();
            var selectedBlock = $('#blockDropdownQuality').val();
            var selectedGp = $('#gpDropdownQuality').val();
            var selectedSource = $('#sourceDropdownQuality').val();

            // Call the function to fetch well type count
            fetchWellTypeCount(selectedState, selectedDistrict, selectedBlock, selectedGp, selectedSource);
        });

        // Fetch states when the page loads
        fetchLocationOptions();

        // Function to fetch location options for states, districts, blocks, and GPs
        function fetchLocationOptions(state = null, district = null, block = null, gp = null) {
            let url = '/mapview/FetchLocationOptions';

            // Append query parameters based on input
            if (state) url += `?state=${encodeURIComponent(state)}`;
            if (district) url += `&district=${encodeURIComponent(district)}`;
            if (block) url += `&block=${encodeURIComponent(block)}`;
            if (gp) url += `&gp=${encodeURIComponent(gp)}`;

            console.log("Fetching URL:", url); // Log the URL being fetched

            // Fetch data from the server
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    console.log("Data received:", data); // Log the response
                    if (data.success) {
                        // Populate the dropdowns based on the state of other selections
                        if (!state && !district && !block && !gp) {
                            populateDropdown('stateDropdownQuality', data.options, 'State');
                        } else if (state && !district) {
                            populateDropdown('districtDropdownQuality', data.options, 'District');
                            fetchSourceAndWellTypeOptions(state);
                        } else if (state && district && !block) {
                            populateDropdown('blockDropdownQuality', data.options, 'Block');
                            fetchSourceAndWellTypeOptions(state, district);
                        } else if (state && district && block && !gp) {
                            populateDropdown('gpDropdownQuality', data.options, 'Gram Panchayat');
                            fetchSourceAndWellTypeOptions(state, district, block);
                        } else if (state && district && block && gp) {
                            fetchSourceAndWellTypeOptions(state, district, block, gp);
                        }
                    } else {
                        alert(data.message); // Alert the user if no data found
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching data:", error);
                    alert("An error occurred while fetching data.");
                }
            });
        }

        // Function to fetch source and well_type counts based on selected parameters
        function fetchSourceAndWellTypeOptions(state, district, block, gp) {
            let url = '/mapview/FetchLocationOptions';

            // Add parameters to the array only if they have a value
            if (state) {
                url += `?state=${encodeURIComponent(state)}`;
                if (district) url += `&district=${encodeURIComponent(district)}`;
                if (block) url += `&block=${encodeURIComponent(block)}`;
                if (gp) url += `&grampanchayat=${encodeURIComponent(gp)}`;
            } else if (district) {
                url += `?district=${encodeURIComponent(district)}`;
                if (block) url += `&block=${encodeURIComponent(block)}`;
                if (gp) url += `&grampanchayat=${encodeURIComponent(gp)}`;
            } else if (block) {
                url += `?block=${encodeURIComponent(block)}`;
                if (gp) url += `&grampanchayat=${encodeURIComponent(gp)}`;
            } else if (gp) {
                url += `?grampanchayat=${encodeURIComponent(gp)}`;
            }

            console.log("Fetching source and well type URL:", url); // Log the final URL

            // Fetch data from the server for sources and well types
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    console.log("Source and well type data received:", data); // Log the response
                    if (data.success) {
                        // Populate the source dropdown
                        populatesource('sourceDropdownQuality', data.sourceoption, 'Source');
                    } else {
                        alert(data.message);  // Notify if there's no data
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching source and well type options:", error);
                    alert("An error occurred while fetching source and well type options.");
                }
            });
        }

        // Function to populate a dropdown with options and display only the part before '_'
        function populateDropdown(dropdownId, options, placeholderName) {
            const dropdown = document.getElementById(dropdownId);
            dropdown.innerHTML = ''; // Clear existing options

            // Add default 'Select' option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = `Select ${placeholderName}`;
            dropdown.appendChild(defaultOption);

            // Populate dropdown with fetched options
            options.forEach(option => {
                const opt = document.createElement('option');
                const value = option.name || option; // Use the name property or the direct string if available
                const displayText = value.split('_')[0]; // Show only the part before '_'

                opt.value = value; // Keep the full value for submission
                opt.textContent = displayText; // Show only the first part before the underscore
                dropdown.appendChild(opt);
            });
        }

        function populatesource(dropdownId, sourceoption, placeholderName) {
            const dropdown = document.getElementById(dropdownId);
            dropdown.innerHTML = ''; // Clear existing options

            // Add default 'Select' option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = `Select ${placeholderName}`;
            dropdown.appendChild(defaultOption);

            // Populate dropdown with fetched options
            sourceoption.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.name || option;
                opt.textContent = option.name || option;
                dropdown.appendChild(opt);
            });
        }

        // Event listeners for dropdown changes
        $('#stateDropdownQuality').change(function () {
            const state = this.value;
            fetchLocationOptions(state); // Fetch districts based on the selected state
        });

        $('#districtDropdownQuality').change(function () {
            const state = $('#stateDropdownQuality').val();
            const district = this.value;
            fetchLocationOptions(state, district); // Fetch blocks based on the selected district
        });

        $('#blockDropdownQuality').change(function () {
            const state = $('#stateDropdownQuality').val();
            const district = $('#districtDropdownQuality').val();
            const block = this.value;
            fetchLocationOptions(state, district, block); // Fetch GPs based on the selected block
        });

        $('#gpDropdownQuality').change(function () {
            const state = $('#stateDropdownQuality').val();
            const district = $('#districtDropdownQuality').val();
            const block = $('#blockDropdownQuality').val();
            const gp = this.value;
            fetchLocationOptions(state, district, block, gp); // Fetch source and well type data based on GP
        });

        $('#sourceDropdownQuality').change(function () {
            const state = $('#stateDropdownQuality').val();
            const district = $('#districtDropdownQuality').val();
            const block = $('#blockDropdownQuality').val();
            const gp = $('#gpDropdownQuality').val();
            const source = this.value;

            // Fetch the unique well types based on the selected source
            fetchWellTypeCount(state, district, block, gp, source);
        });
        function fetchWellTypeCount(state, district, block, gp, source) {
            let url = `/mapview/FetchWellTypeCountBySource?state=${encodeURIComponent(state)}&district=${encodeURIComponent(district)}&block=${encodeURIComponent(block)}&gp=${encodeURIComponent(gp)}&source=${encodeURIComponent(source)}`;

            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    let container = $('#wellCountsContainer');
                    let messageContainerQ = $('#messageContainerQ');  // Add a div to display messages
                    container.empty();  // Clear any previous results
                    messageContainerQ.empty();  // Clear previous messages

                    if (data.success) {
                        console.log("Well Type Counts WQ:", data.wellTypeCounts);

                        // Check if there are no wellTypeCounts and show a message in the div
                        if (data.wellTypeCounts.length === 0) {
                            messageContainerQ.html('<div class="alert alert-info">No well type data found for the selected filters. Please update the dropdown.</div>');
                        } else {
                            // If data exists, clear any message and display the results
                            data.wellTypeCounts.forEach(function (wellTypeCount, index) {
                                var wellTypeHtml = `
                        <div id="wellTypeContainer_${index}" class="wellTypeContainer d-flex justify-content-between align-items-center mb-2">
                            <span id="wellType_${index}" class="popUpText">${wellTypeCount.TypeOfWell}:</span>
                            <span id="wellCount_${index}" class="popUpText2 badge badge-primary">${wellTypeCount.Count}</span>
                        </div>
                        `;
                                container.append(wellTypeHtml);
                            });
                        }
                    } else {
                        messageContainerQ.html(`<div class="alert alert-danger">${data.message}</div>`);  // Show the error message in a div
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching well type counts:", error);
                    $('#messageContainerQ').html('<div class="alert alert-danger">An error occurred while fetching well type counts.</div>');  // Show error in a div
                }
            });
        }
    });
    //
    // Close the modal when the 'x' is clicked
    document.querySelector('.close').onclick = function () {
        document.getElementById('popupModal').style.display = 'none';
    };

    // Close the modal when clicking outside of the modal
    window.onclick = function (event) {
        const modal = document.getElementById('popupModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Toggle forms
    document.getElementById('waterLevelBtn').onclick = function () {
        document.getElementById('waterLevelForm').style.display = 'none';
        document.getElementById('waterQualityForm').style.display = 'block';
    };

    document.getElementById('waterQualityBtn').onclick = function () {
        document.getElementById('waterQualityForm').style.display = 'none';
        document.getElementById('waterLevelForm').style.display = 'block';
    };

    // Set initial state
    document.getElementById('waterLevelForm').style.display = 'block';
    document.getElementById('waterQualityForm').style.display = 'none';

    //

    //function plotPointsOnMapS(coordinates) {
    //    // Clear any existing points
    //    graphicsLayer.removeAll();

    //    // Loop through each coordinate and create a point
    //    coordinates.forEach(function (coord) {
    //        var point = {
    //            type: "point", // autocasts as new Point()
    //            longitude: parseFloat(coord.Longitude),
    //            latitude: parseFloat(coord.Latitude)
    //        };

    //        var simpleMarkerSymbol = {
    //            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    //            color: [226, 119, 40], // Orange color
    //            outline: {
    //                color: [255, 255, 255], // White outline
    //                width: 1
    //            }
    //        };

    //        var pointGraphic = new Graphic({
    //            geometry: point,
    //            symbol: simpleMarkerSymbol
    //        });

    //        // Add the point to the graphics layer
    //        graphicsLayer.add(pointGraphic);
    //    });

    //    // Zoom to the first coordinate
    //    if (coordinates.length > 0) {
    //        view.goTo({
    //            center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
    //            zoom: 8
    //        });
    //    }
    //}

    //$(document).ready(function () {
    //    $('#sourceDropdown').change(function () {
    //        var selectedS = $(this).val();
    //        if (selectedS) {
    //            $.ajax({
    //                url: queryUrlWLSource,
    //                type: 'GET',
    //                data: { source_Ownership: selectedS },
    //                success: function (response) {
    //                    if (response.success) {
    //                        console.log(response, "sourceww");

    //                        plotPointsOnMapS(response.coordinates);
    //                    } else {
    //                        console.log(response.message);
    //                    }
    //                },
    //                error: function () {
    //                    console.log("An error occurred while fetching coordinates.");
    //                }
    //            });
    //        }
    //    });
    //});
    //  for zooming in

    function plotPointsOnMap(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 7
            });
        }
    }

    $(document).ready(function () {
        $('#stateDropdown').change(function () {
            var selectedState = $(this).val(); // Get the selected state value
            if (selectedState) {
                $.ajax({
                    url: queryUrlWLSta, // Use the global variable for the URL
                    type: 'GET',
                    data: { state: selectedState },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMap(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });

    // for state level viewing in map ends
    //for dist  level viewing in map starts



    function plotPointsOnMapD(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 8
            });
        }
    }

    $(document).ready(function () {
        $('#districtDropdown').change(function () {
            var selectedDist = $(this).val(); // Get the selected state value
            if (selectedDist) {
                $.ajax({
                    url: queryUrlWLDist, // Use the global variable for the URL
                    type: 'GET',
                    data: { district: selectedDist },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMapD(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });


    //



    function plotPointsOnMapB(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 10
            });
        }
    }

    $(document).ready(function () {
        $('#blockDropdown').change(function () {
            var selectedBlock = $(this).val(); // Get the selected state value
            if (selectedBlock) {
                $.ajax({
                    url: queryUrlWLBlock, // Use the global variable for the URL
                    type: 'GET',
                    data: { block: selectedBlock },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMapB(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });

    //



    function plotPointsOnMapGP(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 14
            });
        }
    }

    $(document).ready(function () {
        $('#gpDropdown').change(function () {

            var selectedGP = $(this).val(); // Get the selected state value
            if (selectedGP) {
                $.ajax({
                    url: queryUrlWLGP, // Use the global variable for the URL
                    type: 'GET',
                    data: { grampanchayat: selectedGP },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMapGP(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });



    //

    //function plotPointsOnMapS(coordinates) {
    //    // Clear any existing points
    //    graphicsLayer.removeAll();

    //    // Loop through each coordinate and create a point
    //    coordinates.forEach(function (coord) {
    //        var point = {
    //            type: "point", // autocasts as new Point()
    //            longitude: parseFloat(coord.Longitude),
    //            latitude: parseFloat(coord.Latitude)
    //        };

    //        var simpleMarkerSymbol = {
    //            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    //            color: [226, 119, 40], // Orange color
    //            outline: {
    //                color: [255, 255, 255], // White outline
    //                width: 1
    //            }
    //        };

    //        var pointGraphic = new Graphic({
    //            geometry: point,
    //            symbol: simpleMarkerSymbol
    //        });

    //        // Add the point to the graphics layer
    //        graphicsLayer.add(pointGraphic);
    //    });

    //    // Zoom to the first coordinate
    //    if (coordinates.length > 0) {
    //        view.goTo({
    //            center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
    //            zoom: 8
    //        });
    //    }
    //}
    //$(document).ready(function () {
    //    $('#sourceDropdown').change(function () {
    //        var selectedS = $(this).val(); // Get the selected source value


    //        if (selectedS) {
    //            $.ajax({
    //                url: queryUrlWLSource,
    //                type: 'GET',
    //                data: { source_Ownership: selectedS },
    //                success: function (response) {
    //                    if (response.success) {
    //                        console.log(response, "source");

    //                        plotPointsOnMapS(response.coordinates);
    //                    } else {
    //                        console.log(response.message);
    //                    }
    //                },
    //                error: function () {
    //                    console.log("An error occurred while fetching coordinates.");
    //                }
    //            });
    //        }
    //    });
    //});



    function plotPointsOnMapS(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 8
            });
        }
    }
    $(document).ready(function () {
        $('#sourceDropdown').change(function () {
            var selectedSource = $('#sourceDropdown').val(); // Get the selected source value
            var selectedState = $('#stateDropdown').val(); // Get the selected state
            var selectedDistrict = $('#districtDropdown').val(); // Get the selected district
            var selectedBlock = $('#blockDropdown').val(); // Get the selected block
            var selectedGP = $('#gpDropdown').val(); // Get the selected GP

            // Create a data object to hold only the selected dropdown values
            var requestData = { source_Ownership: selectedSource };

            // Add selected values only if they exist
            if (selectedState) {
                requestData.state = selectedState;
            }
            if (selectedDistrict) {
                requestData.district = selectedDistrict;
            }
            if (selectedBlock) {
                requestData.block = selectedBlock;
            }
            if (selectedGP) {
                requestData.grampanchayat = selectedGP;
            }

            // Log the selected combinations
            console.log("Selected Dropdown Values:", requestData);

            if (selectedSource) { // Ensure the source is selected
                // Clear previous points on the map


                $.ajax({
                    url: queryUrlWLSource, // Ensure the correct URL is set
                    type: 'GET',
                    data: requestData, // Send only selected values
                    success: function (response) {
                        console.log("AJAX URL:", queryUrlWLSource); // Log the request URL
                        if (response.success) {
                            console.log(response.coordinates, "Coordinates received"); // Log the coordinates
                            plotPointsOnMapS(response.coordinates); // Plot the new points using the function
                        } else {
                            console.log(response.message); // Log any failure message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });


    });


    // for wq zooming


    function plotPointsOnMapQ(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 7
            });
        }
    }

    $(document).ready(function () {
        $('#stateDropdownQuality').change(function () {
            var selectedState = $(this).val(); // Get the selected state value
            if (selectedState) {
                $.ajax({
                    url: queryUrlWQSta, // Use the global variable for the URL
                    type: 'GET',
                    data: { state: selectedState },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMapQ(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });

    // for state level viewing in map ends
    //for dist  level viewing in map starts



    function plotPointsOnMapDQ(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate ff
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 8
            });
        }
    }

    $(document).ready(function () {
        $('#districtDropdownQuality').change(function () {
            var selectedDist = $(this).val(); // Get the selected state value
            if (selectedDist) {
                $.ajax({
                    url: queryUrlWQDist, // Use the global variable for the URL
                    type: 'GET',
                    data: { district: selectedDist },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMapDQ(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });


    //



    function plotPointsOnMapBQ(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 10
            });
        }
    }

    $(document).ready(function () {
        $('#blockDropdownQuality').change(function () {
            var selectedBlock = $(this).val(); // Get the selected state value
            if (selectedBlock) {
                $.ajax({
                    url: queryUrlWQBlock, // Use the global variable for the URL
                    type: 'GET',
                    data: { block: selectedBlock },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMapBQ(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });

    //



    function plotPointsOnMapGPQ(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 14
            });
        }
    }

    $(document).ready(function () {
        $('#gpDropdownQuality').change(function () {

            var selectedGP = $(this).val(); // Get the selected state value
            if (selectedGP) {
                $.ajax({
                    url: queryUrlWQGP, // Use the global variable for the URL
                    type: 'GET',
                    data: { gp: selectedGP },
                    success: function (response) {
                        if (response.success) {
                            // Call the function to plot the points on the map
                            plotPointsOnMapGPQ(response.coordinates);
                        } else {
                            console.log(response.message); // Log the error message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });



    //

    function plotPointsOnMapSQ(coordinates) {
        // Clear any existing points
        graphicsLayer.removeAll();

        // Loop through each coordinate and create a point
        coordinates.forEach(function (coord) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: parseFloat(coord.Longitude),
                latitude: parseFloat(coord.Latitude)
            };

            var simpleMarkerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40], // Orange color
                outline: {
                    color: [255, 255, 255], // White outline
                    width: 1
                }
            };

            var pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
            });

            // Add the point to the graphics layer
            graphicsLayer.add(pointGraphic);
        });

        // Zoom to the first coordinate
        if (coordinates.length > 0) {
            view.goTo({
                center: [parseFloat(coordinates[0].Longitude), parseFloat(coordinates[0].Latitude)],
                zoom: 8
            });
        }
    }
    $(document).ready(function () {
        $('#sourceDropdownQuality').change(function () {
            var selectedS = $(sourceDropdownQuality).val(); // Get the selected source value
            var selectedState = $('#stateDropdownQuality').val(); // Get the selected state
            var selectedDistrict = $('#districtDropdownQuality').val(); // Get the selected district
            var selectedBlock = $('#blockDropdownQuality').val(); // Get the selected block
            var selectedGP = $('#gpDropdownQuality').val(); // Get the selected group

            // Log the selected values for debugging
            console.log("Selected Values:", selectedState, selectedDistrict, selectedBlock, selectedGP, selectedS);

            if (selectedS) { // Make sure the source is selected
                $.ajax({
                    url: queryUrlWQSource, // The URL should be set correctly here
                    type: 'GET',
                    data: {
                        state: selectedState || "", // Send empty string if null
                        district: selectedDistrict || "",
                        block: selectedBlock || "",
                        gp: selectedGP || "",
                        source: selectedS
                    },
                    success: function (response) {
                        console.log("AJAX URL:", queryUrlWQSource);

                        if (response.success) {
                            console.log(response.coordinates); // Log coordinates
                            plotPointsOnMapSQ(response.coordinates); // Ensure this function exists to plot the points
                        } else {
                            console.log(response.message); // Log failure message
                        }
                    },
                    error: function () {
                        console.log("An error occurred while fetching coordinates.");
                    }
                });
            }
        });
    });



    var zoomInBtn = document.createElement("div");
    zoomInBtn.id = "zoomInBtn";
    zoomInBtn.className = "zoom-btn";
    zoomInBtn.innerHTML = "<svg version='1.1' id='Capa_1' width='23' height='23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='522.781px' height='522.782px' viewBox='0 0 522.781 522.782' style='enable-background:new 0 0 522.781 522.782;' xml:space='preserve'><g><g><path d='M512.703,455.395l-75.353-75.2c-7.191-7.19-16.983-10.557-26.469-10.098l-36.262-36.261c61.735-81.625,55.463-198.365-18.896-272.799C274.405-20.282,142.443-20.282,61.124,61.19c-81.473,81.472-81.473,213.282-0.153,294.601c74.435,74.435,191.174,80.631,272.799,18.896l36.261,36.262c-0.459,9.485,2.907,19.277,10.098,26.469l75.2,75.199c13.464,13.464,35.419,13.464,48.883,0l8.339-8.339C526.167,490.814,526.167,469.012,512.703,455.395z M310.666,310.733c-56.457,56.457-148.18,56.61-204.637,0.153s-56.457-148.027,0.153-204.638c56.457-56.457,148.181-56.61,204.638-0.153S367.047,254.123,310.666,310.733z'/><path d='M265.072,186.727h-34.119v-34.119c0-12.316-9.945-22.262-22.108-22.262h-0.229c-12.164,0-22.108,9.945-22.108,22.262v34.119h-34.119c-12.316,0-22.261,9.945-22.261,22.109v0.153c0,12.164,9.945,22.108,22.261,22.108h34.119v34.119c0,12.317,9.945,22.262,22.108,22.262h0.153c12.163,0,22.108-9.944,22.108-22.262v-34.119h34.119c12.316,0,22.262-9.945,22.262-22.108v-0.153C287.41,196.672,277.466,186.727,265.072,186.727z'/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
    zoomInBtn.title = "Zoom In";
    zoomInBtn.addEventListener("click", function () {
        view.zoom += 1;
    });

    var zoomOutBtn = document.createElement("div");
    zoomOutBtn.id = "zoomOutBtn";
    zoomOutBtn.className = "zoom-btn";
    zoomOutBtn.innerHTML = "<svg version='1.1' id='Capa_1' width='23' heigh='23' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 490.8 490.8' style='enable-background:new 0 0 490.8 490.8;' xml:space='preserve'><g><g><path d='M364.8,299.5c46.3-75.8,36.9-176.3-28.6-241.9c-76.8-76.8-201.8-76.8-278.6,0s-76.8,201.8,0,278.6 c65.5,65.5,166,74.9,241.9,28.6L412,477.3c18,18,47.3,18,65.3,0s18-47.3,0-65.3L364.8,299.5z M295.5,295.5 c-54.4,54.4-142.8,54.4-197.1,0C44,241.1,44,152.7,98.4,98.4c54.4-54.4,142.8-54.4,197.1,0C349.8,152.7,349.8,241.1,295.5,295.5z  M128,167.3h138.7v54.6H128V167.3z'/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
    zoomOutBtn.title = "Zoom Out";
    zoomOutBtn.addEventListener("click", function () {
        view.zoom -= 1;
    });

    uiContainer.appendChild(zoomInBtn);
    uiContainer.appendChild(zoomOutBtn);

    let isDistanceMeasurementActive = false;
    let isAreaMeasurementActive = false;

    const distanceButton = document.createElement('button');
    distanceButton.id = 'distanceMeasurementButton';
    distanceButton.innerHTML = "<svg id='Layer_1' enable-background='new 0 0 512.064 512.064' height='30' width='33' viewBox='0 0 512.064 512.064' width='512' xmlns='http://www.w3.org/2000/svg'><g><path d='m92.131 246.868c-50.801 0-92.131 41.33-92.131 92.132 0 25.683 14.043 56.703 41.74 92.199 19.782 25.352 39.332 43.685 40.155 44.453l10.237 9.558 10.237-9.558c.823-.768 20.373-19.101 40.155-44.453 27.696-35.496 41.74-66.516 41.74-92.199-.001-50.802-41.331-92.132-92.133-92.132zm0 121.938c-16.435 0-29.806-13.371-29.806-29.806s13.371-29.806 29.806-29.806 29.806 13.371 29.806 29.806-13.371 29.806-29.806 29.806z'/><path d='m419.932 26.854c-50.801 0-92.131 41.33-92.131 92.131 0 25.683 14.043 56.703 41.739 92.199 19.781 25.352 39.332 43.685 40.154 44.453l10.237 9.558 10.236-9.558c.823-.768 20.374-19.101 40.155-44.453 27.697-35.496 41.74-66.516 41.74-92.199.002-50.8-41.328-92.131-92.13-92.131zm0 121.938c-16.435 0-29.806-13.371-29.806-29.806s13.371-29.806 29.806-29.806c16.436 0 29.807 13.371 29.807 29.806s-13.371 29.806-29.807 29.806z'/><g><path d='m364.929 479.688h-212.794v-30h212.794c22.058 0 40.003-17.945 40.003-40.003s-17.945-40.003-40.003-40.003h-83.896c-38.6 0-70.004-31.403-70.004-70.003s31.404-70.003 70.004-70.003h78.895v30h-78.895c-22.059 0-40.004 17.945-40.004 40.003s17.945 40.003 40.004 40.003h83.896c38.6 0 70.003 31.403 70.003 70.003s-31.403 70.003-70.003 70.003z'/></g></g></svg>";
    distanceButton.title = "Distance";
    uiContainer.appendChild(distanceButton); // Append to uiContainer
    //function map_data_off() {
    //    document.getElementById("info").style.display = "none";
    //    document.getElementById('map_data_off').style.visibility = 'hidden';
    //    document.getElementById('map_data').style.visibility = 'visible';

    //    false;


    //}
    distanceButton.addEventListener('click', function () {
        const mapData = document.getElementById('map_data_off');
        if (mapData.style.visibility === 'visible') {
            map_data_off();
        }
    });


    const measurementContainer = document.createElement('div');
    measurementContainer.id = 'distanceMeasurementContainer';
    uiContainer.appendChild(measurementContainer); // Append to uiContainer

    const distanceMeasurement = new DistanceMeasurement2D({
        view: view,
        container: "distanceMeasurementContainer"
    });

    distanceButton.addEventListener("click", function () {
        if (!isDistanceMeasurementActive) {
            distanceMeasurement.viewModel.start();
            isDistanceMeasurementActive = true;
            distanceButton.classList.add('active');
        } else {
            distanceMeasurement.viewModel.clear();
            isDistanceMeasurementActive = false;
            distanceButton.classList.remove('active');
        }
    });



    const areaButton = document.createElement('button');
    areaButton.id = 'areaMeasurementButton';
    areaButton.innerHTML = "<svg id='Layer_1' enable-background='new 0 0 512 512' height='30' width='33' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'><path d='m378.212 165.885 2.786-23.57-113.685 113.685 113.686 113.686-2.786-23.571c-.519-4.388 2.618-8.365 7.006-8.884 4.386-.514 8.365 2.618 8.884 7.006l5.494 46.475c.288 2.433-.556 4.863-2.288 6.596-1.509 1.509-3.548 2.343-5.656 2.343-.312 0-.625-.018-.939-.055l-46.476-5.493c-4.388-.519-7.524-4.496-7.006-8.884s4.49-7.525 8.884-7.006l23.57 2.786-113.686-113.686-113.686 113.686 23.571-2.786c4.385-.515 8.365 2.618 8.884 7.006s-2.618 8.365-7.006 8.884l-46.475 5.494c-.313.037-.627.055-.939.055-2.109 0-4.147-.834-5.656-2.343-1.732-1.732-2.576-4.163-2.288-6.596l5.493-46.475c.519-4.388 4.487-7.527 8.884-7.006 4.388.519 7.524 4.496 7.006 8.884l-2.786 23.57 113.684-113.686-113.685-113.685 2.786 23.571c.519 4.388-2.618 8.365-7.006 8.884-.318.038-.636.056-.949.056-3.999 0-7.454-2.992-7.935-7.062l-5.494-46.475c-.288-2.433.556-4.863 2.288-6.596 1.732-1.731 4.163-2.573 6.596-2.288l46.476 5.493c4.388.519 7.524 4.496 7.006 8.884-.519 4.387-4.494 7.522-8.884 7.006l-23.57-2.786 113.685 113.684 113.685-113.685-23.57 2.786c-4.386.521-8.365-2.618-8.884-7.006s2.618-8.365 7.006-8.884l46.475-5.494c2.432-.291 4.863.555 6.596 2.288 1.732 1.732 2.576 4.163 2.288 6.596l-5.493 46.475c-.481 4.069-3.937 7.062-7.935 7.062-.313 0-.63-.018-.949-.056-4.388-.518-7.525-4.495-7.007-8.883zm-294.75-157.885v67.462c0 4.418-3.582 8-8 8h-67.462c-4.418 0-8-3.582-8-8v-67.462c0-4.418 3.582-8 8-8h67.462c4.419 0 8 3.582 8 8zm-16 8h-51.462v51.462h51.462zm16 420.538v67.462c0 4.418-3.582 8-8 8h-67.462c-4.418 0-8-3.582-8-8v-67.462c0-4.418 3.582-8 8-8h67.462c4.419 0 8 3.581 8 8zm-16 8h-51.462v51.462h51.462zm444.538-436.538v67.462c0 4.418-3.582 8-8 8h-67.462c-4.418 0-8-3.582-8-8v-67.462c0-4.418 3.582-8 8-8h67.462c4.418 0 8 3.582 8 8zm-16 8h-51.462v51.462h51.462zm16 420.538v67.462c0 4.418-3.582 8-8 8h-67.462c-4.418 0-8-3.582-8-8v-67.462c0-4.418 3.582-8 8-8h67.462c4.418 0 8 3.581 8 8zm-16 8h-51.462v51.462h51.462zm-388.468-394.807h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8zm65.801 0h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8zm65.801 0h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8zm65.802 0h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8h-33.731c-4.418 0-8 3.582-8 8s3.581 8 8 8zm99.532-16h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-263.204 428.538h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8zm65.8 0h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8h33.731c4.418 0 8-3.582 8-8s-3.581-8-8-8zm65.802 0h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8zm65.801 0h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8zm65.801 0h-33.731c-4.418 0-8 3.582-8 8s3.582 8 8 8h33.731c4.418 0 8-3.582 8-8s-3.582-8-8-8zm65.801-313.005c4.418 0 8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8v33.731c0 4.418 3.582 8 8 8zm-8 57.8c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8zm0 65.802c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8zm0 65.801c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8zm0 65.801c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8zm-420.538-255.204c4.418 0 8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8v33.731c0 4.418 3.582 8 8 8zm-8 57.8c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8zm0 65.802c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8zm0 65.801c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8zm0 65.801c0 4.418 3.582 8 8 8s8-3.582 8-8v-33.731c0-4.418-3.582-8-8-8s-8 3.582-8 8z'/></svg>";
    areaButton.title = "Area";
    uiContainer.appendChild(areaButton); // Append to uiContainer
    //function map_data_off() {
    //    document.getElementById("info").style.display = "none";
    //    document.getElementById('map_data_off').style.visibility = 'hidden';
    //    document.getElementById('map_data').style.visibility = 'visible';

    //    false;


    //}
    areaButton.addEventListener('click', function () {
        const mapData = document.getElementById('map_data_off');
        if (mapData.style.visibility === 'visible') {
            map_data_off();
        }
    });
    const areaMeasurementContainer = document.createElement('div');
    areaMeasurementContainer.id = 'areaMeasurementContainer';
    uiContainer.appendChild(areaMeasurementContainer); // Append to uiContainer

    const areaMeasurement = new AreaMeasurement2D({
        view: view,
        container: "areaMeasurementContainer"
    });

    areaButton.addEventListener("click", function () {
        if (!isAreaMeasurementActive) {
            areaMeasurement.viewModel.start();
            isAreaMeasurementActive = true;
            areaButton.classList.add('active');
        } else {
            areaMeasurement.viewModel.clear();
            isAreaMeasurementActive = false;
            areaButton.classList.remove('active');
        }
    });

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'Atal Jal Gram Panchayat';

    const suggestionsList = document.createElement('ul');
    suggestionsList.id = 'suggestionsList';

    const searchButton = document.createElement('button');
    searchButton.id = 'searchButton';
    searchButton.innerHTML = "<svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 118.783 118.783' style='enable-background:new 0 0 118.783 118.783;' xml:space='preserve'><g> <path d='M115.97,101.597L88.661,74.286c4.64-7.387,7.333-16.118,7.333-25.488c0-26.509-21.49-47.996-47.998-47.996 S0,22.289,0,48.798c0,26.51,21.487,47.995,47.996,47.995c10.197,0,19.642-3.188,27.414-8.605l26.984,26.986 c1.875,1.873,4.333,2.806,6.788,2.806c2.458,0,4.913-0.933,6.791-2.806C119.72,111.423,119.72,105.347,115.97,101.597z  M47.996,81.243c-17.917,0-32.443-14.525-32.443-32.443s14.526-32.444,32.443-32.444c17.918,0,32.443,14.526,32.443,32.444 S65.914,81.243,47.996,81.243z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";

    const searchInputWrapper = document.createElement('div');
    searchInputWrapper.classList.add('searchInputWrappper');

    searchInputWrapper.appendChild(searchInput);

    const SearchButton = document.createElement('div');
    SearchButton.classList.add('SeachBar');
    SearchButton.id = "Searchbar";
    SearchButton.innerHTML = "<i class='fa fa-search'></i>"
    SearchButton.onclick = toggleSearch;

    function toggleSearch() {
        var input = document.querySelector(".searchInputWrappper");
        input.style.display = (input.style.display === "none") ? "flex" : "none";
        input.classList.toggle("active");

    }

    uiContainer.appendChild(SearchButton);
    uiContainer.appendChild(searchInputWrapper);


    const Search12 = document.getElementById("Searchbar");

    searchInputWrapper.appendChild(suggestionsList);
    searchInputWrapper.appendChild(searchButton);
    suggestionsList.style.maxHeight = "300px";
    suggestionsList.style.overflowY = "auto";
    searchInputWrapper.appendChild(suggestionsList);
    document.body.appendChild(uiContainer);

    function displaySuggestions(suggestions) {
        suggestionsList.innerHTML = '';
        suggestions.forEach(function (suggestion) {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            listItem.addEventListener('click', function () {
                searchInput.value = suggestion;
                suggestionsList.innerHTML = '';

            });
            suggestionsList.appendChild(listItem);
            Search12.addEventListener('click', function () {
                searchInput.value = " ";
                suggestionsList.removeChild(listItem);
            });
        });
    }

    searchInput.addEventListener('input', function () {
        let searchTerm = searchInput.value.trim();
        searchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
        if (searchTerm !== '') {
            const query = {
                outFields: ['gp_name1'],
                returnDistinctValues: true,
                where: `gp_name1 LIKE '%${searchTerm}%'`
            };

            GPLayerse.queryFeatures(query)
                .then(function (result) {
                    const suggestions = result.features.map(feature => feature.attributes.gp_name1);
                    displaySuggestions(suggestions);
                })
                .catch(function (error) {
                    console.error('Error fetching suggestions:', error);
                });
        } else {
            suggestionsList.innerHTML = '';
        }
    });
    $("#show-sidebar").click(function () {
        var initialCenter = [78, 22];
        var initialZoom = 4;

        document.getElementById("show-sidebar").addEventListener("click", function () {
            view.goTo({
                center: initialCenter,
                zoom: initialZoom
            });
        });
        StateLayer.definitionExpression = "";
        DistrictLayer.definitionExpression = "";
        BlockLayer.definitionExpression = "";
        GPLayer.definitionExpression = "";
        WaterLevel.definitionExpression = "";
        WaterQuality.definitionExpression = "";
        ArtificialResourceLayer.definitionExpression = "";
        Rainguage.definitionExpression = "";
        WaterFlow.definitionExpression = "";
        Well.definitionExpression = "";
        WaterQualitym.definitionExpression = "";
        WSP.definitionExpression = "";

        WaterLevel.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: null
        });

        WaterQuality.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        ArtificialResourceLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        Rainguage.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        WaterFlow.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        Well.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        WaterQualitym.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        StateLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        DistrictLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        BlockLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        GPLayer.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        WSP.featureEffect = new FeatureEffect({
            filter: new FeatureFilter({
                //where: "state = '" + wlName + "'"
            }),
            excludedEffect: excludedEffect
        });

        var wlCountElement = document.getElementById('wl_count');
        var cntryDaata = document.getElementById('cntry');
        var wq_count = document.getElementById('wq_count');
        var ar_count = document.getElementById('ar_count');
        var rg_count = document.getElementById('rg_count');
        var wf_count = document.getElementById('wf_count');
        var well_count = document.getElementById('well_count');
        var wqm_count = document.getElementById('wqm_count');
        var textvalues = document.getElementById("dynamicValue");
        var disNoneDistrict = document.getElementById("District");
        var downloadBtn = document.getElementsByClassName("btn_export");
        document.getElementById("Gram").style.display = "none";
        document.getElementById("Block").style.display = "none";
        document.getElementById("District").style.display = "none";
        GPLayerse.visible = false;
        var selectedValue = '--Select State--'; // Set the value you want to select
        cntryDaata.value = selectedValue;
        disNoneDistrict.style.display = 'none';
        for (var i = 0; i < downloadBtn.length; i++) {
            downloadBtn[i].style.display = 'none';
        }
        textvalues.textContent = "--Select State--";
        wlCountElement.textContent = "0";
        wq_count.textContent = "0";
        ar_count.textContent = "0";
        rg_count.textContent = "0";
        wf_count.textContent = "0";
        well_count.textContent = "0";
        wqm_count.textContent = "0";
        wsp_count.textContent = "0";
        GPLayerse.visible = false;

    });
    searchButton.addEventListener('click', function () {
        GPLayerse.visible = true;
        GPLayer.visible = false;
        WaterLevel.visible = true;

        suggestionsList.innerHTML = '';


        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            const query = {
                where: "gp_name1 = '" + searchTerm + "'",
                outFields: ["*"],
                returnGeometry: true
            };
            GPLayerse.queryFeatures(query)
                .then(function (result) {
                    if (result.features.length > 0) {

                        view.goTo(result.features);
                        var effect = new FeatureEffect({
                            filter: new FeatureFilter({
                                where: "gp_name1 = '" + searchTerm + "'",
                            }),


                        });

                        GPLayerse.featureEffect = effect;



                    } else {
                        alert("No features found for the search term.");
                    }
                })
                .catch(function (error) {
                    console.error("Error performing search:", error);
                })
                .finally(function () {

                    searchInput.value = "";
                });
            const Art = document.getElementById("restoggle");
            Art.classList.remove("toggled");
        } else {
            alert("Please enter a search term.");


        }
    });


    //

    function createScaleBar() {
        const scaleBarContainer = document.createElement("div");
        scaleBarContainer.id = "scalebar-container";
        scaleBarContainer.className = "scale-bar";
        scaleBarContainer.style.position = "absolute";
        /*scaleBarContainer.style.bottom = "60px";*/
        scaleBarContainer.style.right = "60px";

        const scaleBarLine = document.createElement("div");
        scaleBarLine.id = "scaleBarLine";
        scaleBarLine.className = "scale-bar-line";
        // scaleBarContainer.appendChild(scaleBarLine);

        // Create and append the scale value text element
        const scaleValue = document.createElement("div");
        scaleValue.className = "scale-bar-value";
        scaleBarContainer.appendChild(scaleValue);

        document.getElementById("viewDiv").appendChild(scaleBarContainer);
    }

    function updateScaleBarPosition(event) {
        const scaleBarContainer = document.getElementById("scalebar-container");
        scaleBarContainer.style.bottom = `${window.innerHeight - event.y + 10}px`;

    }


    // Add event listener for pointer-move to update scale bar position
    view.on("pointer-move", function (event) {
        updateScaleBarPosition(event);
    });

    function updateScaleBar() {
        const scale = view.scale;
        const scaleBarWidth = 100;

        const scaleFactor = scale / view.resolution;
        const width = Math.round(scaleBarWidth / scaleFactor);

        const scaleBarLine = document.getElementById("scaleBarLine");
        if (scaleBarLine) {
            scaleBarLine.style.width = width + "px";
        }


        const scaleValue = document.querySelector(".scale-bar-value");
        if (scaleValue) {

            scaleValue.innerHTML = "1:" + Math.round(scale) + "<br>" + "(Dynamic Scale in m) "; // Change "meters" to your desired unit
        }
    }


    createScaleBar();


    view.when(() => {
        view.watch("scale", updateScaleBar);


        updateScaleBar();
    });


    //var mapContainer = document.createElement("div");
    //mapContainer.id = "mapContainer";
    //mapContainer.style.height = "400px"; // Set the height to 400 pixels
    //uiContainer.appendChild(mapContainer);


    var dropdownDiv = document.createElement("div");
    dropdownDiv.className = "dropdown";
    dropdownDiv.id = "basemapDropdown";
    dropdownDiv.title = "Base Map";
    uiContainer.appendChild(dropdownDiv);


    var dropdownBtn = document.createElement("button");
    dropdownBtn.className = "dropbtn btn-sm";
    dropdownBtn.id = "basemapDropdownBtn";
    dropdownBtn.innerHTML = "<svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 511.999 511.999' style='enable-background:new 0 0 511.999 511.999;' xml:space='preserve'><g><path style='fill:#44C868;' d='M511.879,475.685l-40.224-221.611c-0.401-2.212-1.773-4.128-3.739-5.221l-101.242-56.31 c-1.314-0.732-2.787-1.023-4.234-0.911l18.419,237.608l-0.617,0.276l121.164,54.357c0.986,0.441,2.034,0.659,3.077,0.659 c1.651,0,3.287-0.543,4.632-1.596C511.313,481.22,512.376,478.428,511.879,475.685z'/><path style='fill:#44C868;' d='M256,246.375l-103.545-53.931c-1.241-0.647-2.617-0.911-3.972-0.82 c0.359-0.022,0.72-0.02,1.078,0.008l-18.419,237.608l121.781,54.634c0.983,0.44,2.032,0.659,3.077,0.659l0,0V246.375z'/></g><g><path style='fill:#4CE166;' d='M149.56,191.633c-1.447-0.112-2.92,0.179-4.234,0.91l-101.243,56.31 c-1.966,1.093-3.338,3.008-3.739,5.221L0.121,475.685c-0.498,2.742,0.566,5.534,2.763,7.252c1.347,1.053,2.982,1.596,4.632,1.596 c1.043,0,2.092-0.217,3.077-0.659l120.504-54.061L149.56,191.633z'/><path style='fill:#4CE166;' d='M362.439,191.628c-0.996,0.077-1.981,0.342-2.894,0.818L256,246.376v238.158c0,0,0,0,0.001,0 c1.045,0,2.095-0.218,3.077-0.659l121.781-54.634L362.439,191.628z'/></g><polygon style='fill:#FFDB56;' points='28.154,321.233 19.983,366.252 140.977,302.346 143.786,266.107 144.252,260.097 '/><path style='fill:#A8EEFC;' d='M142.066,288.294l-1.089,14.052L19.983,366.252L0.121,475.685c-0.498,2.742,0.566,5.534,2.763,7.252 c1.347,1.053,2.982,1.596,4.632,1.596c1.043,0,2.092-0.217,3.077-0.659l120.504-54.061L142.066,288.294L142.066,288.294z'/><g><polygon style='fill:#FFBB24;' points='256.03,276.08 144.252,260.097 140.977,302.346 256,477.025 256,413.507 187.363,305.429 256.03,313.642 	'/><polygon style='fill:#FFBB24;' points='459.946,244.421 411.311,217.37 365.269,228.128 365.845,235.564 368.119,264.898'/></g><polygon style='fill:#FFDB56;' points='372.202,317.576 367.842,261.327 367.842,261.327 365.269,228.128 256.03,276.08 256.03,313.642 327.386,282.612 '/><path style='fill:#FFBB24;' d='M511.879,475.685l-10.103-55.666L368.119,264.898l4.084,52.678l137.07,165.221 C511.357,481.07,512.364,478.358,511.879,475.685z'/><path style='fill:#FF4A4A;' d='M256.481,27.465c-57.963,0-105.12,47.118-105.12,105.034c0,35.826,17.009,74.29,50.556,114.322 c24.639,29.403,48.943,48.314,49.966,49.105c1.354,1.047,2.976,1.57,4.599,1.57c1.622,0,3.245-0.523,4.599-1.57 c1.022-0.791,25.327-19.702,49.966-49.105c33.547-40.032,50.556-78.495,50.556-114.322 C361.601,74.583,314.444,27.465,256.481,27.465z M295.411,132.498c0,21.482-17.43,38.898-38.93,38.898 c-21.5,0-38.93-17.415-38.93-38.898s17.43-38.898,38.93-38.898C277.981,93.6,295.411,111.016,295.411,132.498z'/><path style='fill:#E7343F;' d='M256.481,27.465c-4.594,0-9.119,0.298-13.559,0.872c51.583,6.667,91.562,50.836,91.562,104.162 c0,35.826-17.009,74.29-50.556,114.322c-15.845,18.908-31.54,33.467-41.005,41.669c5.254,4.552,8.596,7.154,8.96,7.436 c1.354,1.047,2.976,1.57,4.599,1.57c1.622,0,3.245-0.523,4.599-1.57c1.022-0.791,25.327-19.702,49.966-49.105 c33.547-40.032,50.556-78.495,50.556-114.322C361.601,74.583,314.444,27.465,256.481,27.465z'/><path style='fill:#FFDB56;' d='M259.078,483.874l45.285-20.316L256,413.507v71.026c0,0,0,0,0.001,0 C257.046,484.533,258.095,484.316,259.078,483.874z'/><g><path style='fill:#1EA4E9;' d='M471.654,254.074c-0.401-2.212-1.773-4.128-3.739-5.221l-7.97-4.433l-91.827,20.477l0,0 l133.656,155.121L471.654,254.074z'/><path style='fill:#1EA4E9;' d='M255.999,484.533C256,484.533,256,484.533,255.999,484.533v-7.508L140.977,302.346l-9.837,126.895 l121.781,54.634C253.904,484.316,254.953,484.533,255.999,484.533z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
    dropdownDiv.appendChild(dropdownBtn);
    //function map_data_off() {
    //    document.getElementById("info").style.display = "none";
    //    document.getElementById('map_data_off').style.visibility = 'hidden';
    //    document.getElementById('map_data').style.visibility = 'visible';

    //    false;


    //}
    dropdownBtn.addEventListener('click', function () {
        const mapData = document.getElementById('map_data_off');
        if (mapData.style.visibility === 'visible') {
            map_data_off();
        }
    });
    var dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";
    dropdownDiv.appendChild(dropdownContent);


    var basemapOptions = [{
        name: "Dark Gray Canvas",
        value: "dark-gray"
    },
    {
        name: "Hybrid",
        value: "hybrid"
    },
    {
        name: "Oceans",
        value: "oceans"
    },
    {
        name: "Open street Map",
        value: "osm"
    },
    {
        name: "Satellite",
        value: "satellite"
    },
    {
        name: "Streets",
        value: "streets"
    },
    {
        name: "World Street Map (Night)",
        value: "streets-night-vector"
    },
    {
        name: "World Hillshade",
        value: "streets-relief-vector"
    },
    {
        name: "World Terrain Base",
        value: "terrain"
    },
    {
        name: "World Hillshade",
        value: "topo"
    }
    ];

    basemapOptions.forEach(function (option) {
        var optionLink = document.createElement("a");
        optionLink.href = "#";
        optionLink.setAttribute("data-value", option.value);
        optionLink.textContent = option.name;
        dropdownContent.appendChild(optionLink);
    });


    dropdownBtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    dropdownContent.querySelectorAll("a").forEach(function (option) {
        option.addEventListener("click", function (event) {
            event.preventDefault();
            var selectedBasemap = option.getAttribute("data-value");
            map.basemap = selectedBasemap;
            dropdownContent.classList.remove("show");
        });
    });

    var openPopupBtn = document.createElement("button");
    openPopupBtn.className = "openPopupBtn";
    openPopupBtn.id = "openPopupBtn";
    openPopupBtn.innerHTML = "<i class='fas fa-database'></i>"
    openPopupBtn.title = "Query";
    uiContainer.appendChild(openPopupBtn);
    window.addEventListener("click", function (event) {
        if (!event.target.matches("#basemapDropdownBtn")) {
            dropdownContent.classList.remove("show");
        }
    });

    // Show the modal and load state options on button click
    $(document).ready(function () {
        // Show the modal and load state options on button click
        $('#openPopupBtn').click(function () {
            $(".page-wrapper").removeClass("toggled");
            //$(".map_view").removeClass("toggled");
            $(".page-wrapper").addClass("toggled-other");
            $('#popupfeed').hide();
            $('#mapInfo').hide();
            $('#close-sidebar2').css('display', 'none');
            $('#show-sidebar').css('display', 'flex');
        });

        // Close the modal when the 'x' is clicked
        $('.closePopupModal').click(function () {
            $('#popupModal').hide();
            $(".page-wrapper").removeClass("toggled-other");
        });

        //// Close the modal when clicking outside of the modal
        //$(window).click(function (event) {
        //    if ($(event.target).is('#popupModal')) {
        //        $('#popupModal').hide();
        //    }
        //});

        // Get the buttons   Button ID is reversed
        const waterLevelBtn = document.getElementById('waterLevelBtn');
        const waterQualityBtn = document.getElementById('waterQualityBtn');

        // Get the formswaterLevelBtn
        const waterLevelForm = document.getElementById('waterLevelForm');
        const waterQualityForm = document.getElementById('waterQualityForm');

        // Add click event listeners to the buttons
        waterLevelBtn.addEventListener('click', function () {
            waterLevelForm.style.display = 'block';     // Show Water Level form
            waterQualityForm.style.display = 'none';    // Hide Water Quality form
        });

        waterQualityBtn.addEventListener('click', function () {
            waterQualityForm.style.display = 'block';   // Show Water Quality form
            waterLevelForm.style.display = 'none';      // Hide Water Level form
        });

        // Optional: Set initial state
        waterLevelForm.style.display = 'block'; // Show Water Level form by default
        waterQualityForm.style.display = 'none'; // Hide Water Quality form by default
    });
    // Show the modal and load state options on button click
    document.getElementById('openPopupBtn').onclick = function () {
        document.getElementById('popupModal').style.display = 'block';

    };

});


$(document).ready(function () {
    var globalCounter = 0; // Initialize global counter

    // Function to increment counter
    function incrementCounter() {
        globalCounter++;
        $("#counter").text(globalCounter); // Update counter value in the DOM
    }

    // Function to process each div
    function processDivs() {
        $("div").each(function () {
            incrementCounter(); // Call incrementCounter function for each div
        });
    }

    // Call processDivs function when button is clicked
    $("#processBtn").click(function () {
        processDivs();
    });
    //

});

// Show the loader initially
function toggleClassBasedOnWidth() {
    const $maincontainer = $('#ui-container');
    if ($(window).width() < 1000) {
        $maincontainer.addClass('uiContainer');
    } else {
        $maincontainer.removeClass('uiContainer');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var customLegend = document.getElementById("customLegend");
    var toggleDiv = document.createElement("div");
    toggleDiv.id = "toggleIcon";
    toggleDiv.className = "toggle-icon";
    toggleDiv.innerHTML = "<i class='fas fa-bars'></i>";
    customLegend.appendChild(toggleDiv);
    customLegend.addEventListener('click', function () {
        var uiContainer = document.querySelector('.uiContainer');
        if (uiContainer.style.display === 'none') {
            uiContainer.style.display = 'flex';
        } else {
            uiContainer.style.display = 'none';
        }
    });
    toggleClassBasedOnWidth();

    $(window).resize(toggleClassBasedOnWidth);
    //$(window).resize(checkwindowWidth);
    //$(window).resize(checkwindowWidthSmall);

});


//function checkwindowWidth() {
//    if ($(window).width() > 1021 && $(window).height() > 500) {
//        document.getElementById("ui-container").style.flexDirection = 'row';
//    }
//}

//function checkwindowWidthSmall() {
////    if ($(window).width() <= 1021 && $(window).height() > 500) {
//        document.getElementById("ui-container").style.flexDirection = 'column';
//    }
//}




