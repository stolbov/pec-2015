// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require("dojo/_base/array dojo/dom dojo/dom-class dojo/on dojo/parser esri/arcgis/Portal esri/arcgis/utils esri/config esri/dijit/BasemapGallery esri/dijit/BasemapToggle esri/dijit/Bookmarks esri/dijit/Directions esri/dijit/editing/AttachmentEditor esri/dijit/editing/Editor esri/dijit/editing/TemplatePicker esri/dijit/Gauge esri/dijit/Geocoder esri/dijit/geoenrichment/Infographic esri/dijit/HomeButton esri/dijit/LayerSwipe esri/dijit/Legend esri/dijit/LocateButton esri/dijit/Measurement esri/dijit/OverviewMap esri/dijit/Print esri/dijit/Scalebar esri/dijit/Search esri/dijit/TimeSlider esri/dijit/VisibleScaleRangeSlider esri/geometry/Point esri/graphic esri/layers/ArcGISDynamicMapServiceLayer esri/layers/FeatureLayer esri/map esri/SpatialReference esri/symbols/SimpleMarkerSymbol esri/tasks/geoenrichment/GeometryStudyArea esri/tasks/locator esri/tasks/PrintTemplate esri/TimeExtent esri/urlUtils dojo/domReady! esri/dijit/HorizontalSlider esri/dijit/ColorPicker".split(" "),
function(r,m,t,n,d,C,p,D,u,E,F,G,H,I,J,K,s,L,v,z,M,N,O,P,Q,R,g,S,T,A,U,q,e,k,V,W,X,Y,Z,$,f){d.parse();d="calcite";var l=f.urlToObject(document.location.href);l.query&&l.query.theme&&(d=l.query.theme.toLowerCase());var l=null,l="calcite"===d?"css/calcite.css":"calcite_dark"===d?"css/calcite_dark.css":document.location.protocol+"//js.arcgis.com/3.11/dijit/themes/"+d+"/"+d+".css",w=document.createElement("link");w.rel="stylesheet";w.href=l;document.getElementsByTagName("head")[0].appendChild(w);t.add(document.body,
d);console.log(d);f.addProxyRule({urlPrefix:"geoenrich.arcgis.com",proxyUrl:"http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php"});f.addProxyRule({urlPrefix:"traffic.arcgis.com",proxyUrl:"http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php"});f.addProxyRule({urlPrefix:"route.arcgis.com",proxyUrl:"http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php"});D.defaults.io.proxyUrl="http://kelly-mac.esri.com/~kell3008/resource_proxy/proxy.php";var c=new k("mapDiv",{center:[-56.049,
38.485],zoom:3,basemap:"streets"}),x=new e("http://servicesbeta.esri.com/ArcGIS/rest/services/Hurricanes/Hurricanes/MapServer/0",{id:"hurricanes",mode:e.MODE_ONDEMAND,outFields:["OBJECTID","WINDSPEED","DAY"]});t=new e("http://servicesbeta.esri.com/ArcGIS/rest/services/SanFrancisco/SFStreetTreesRendered/MapServer/0",{mode:e.MODE_SNAPSHOT,outFields:["*"]});c.on("layers-add-result",function(){(new M({map:c},"legendDiv")).startup();(new J({map:c,featureLayers:[x]},"templatePickerDiv")).startup();var a=
new K({caption:"Hurricane windspeed.",color:"#c0c",dataField:"WINDSPEED",dataFormat:"value",dataLabelField:"EVENTID",layer:x,maxDataValue:120,noFeatureLabel:"No name",title:"Atlantic Hurricanes(2000)",unitLabel:"MPH"},"gaugeDiv");a.startup();a.set("value",60)});c.addLayers([x,t]);c.on("load",function(){});var y=new k("smallSliderDiv",{center:[-56.049,38.485],zoom:3,basemap:"streets",sliderStyle:"large"});q=new q("http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Petroleum/KSWells/MapServer");
q.setVisibleLayers([0]);q.setLayerDefinitions(["FIELD_KID\x3d1000148164"]);y.addLayers([q]);y.on("layers-add-result",function(){var a=new S({style:"width: 100%;"},m.byId("timeSliderDiv"));y.setTimeSlider(a);var b=new $;b.startTime=new Date("1/1/1921 UTC");b.endTime=new Date("12/31/2009 UTC");a.setThumbCount(2);a.createTimeStopsByTimeInterval(b,2,"esriTimeUnitsYears");a.setThumbIndexes([0,1]);a.setThumbMovingRate(2E3);a.startup();b=r.map(a.timeStops,function(a,b){return 0===b%2?a.getUTCFullYear():
""});a.setLabels(b);a.on("time-extent-change",function(a){var b=a.startTime.getUTCFullYear();a=a.endTime.getUTCFullYear();m.byId("daterange").innerHTML="\x3ci\x3e"+b+" and "+a+"\x3c/i\x3e"})});var h=new k("attachmentMapDiv",{center:[-56.049,38.485],zoom:3,basemap:"streets"});h.on("load",function(){var a=new e("http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/SanFrancisco/311Incidents/FeatureServer/0",{mode:e.MODE_ONDEMAND});h.infoWindow.setContent("\x3cdiv id\x3d'content' style\x3d'width:100%'\x3e\x3c/div\x3e");
h.infoWindow.resize(350,200);var b=new H({},m.byId("content"));b.startup();a.on("click",function(c){h.infoWindow.setTitle("Attributes");b.showAttachments(c.graphic,a);h.infoWindow.show(c.screenPoint,h.getInfoWindowAnchor(c.screenPoint))});h.addLayer(a);(new I({settings:{map:h,toolbarVisible:!0,layerInfos:[{featureLayer:a}]}},"editorDiv")).startup()});(new u({showArcGISBasemaps:!0,map:c},"basemapGalleryDiv")).startup();(new E({map:c,visible:!0,basemap:"hybrid"},basemapToggleDiv)).startup();new F({map:c,
bookmarks:[{extent:{spatialReference:{wkid:102100},xmax:-1.09836368866296E7,xmin:-1.44113725423473E7,ymax:5109691.46502651,ymin:2707598.58754309},name:"Sonara"},{extent:{spatialReference:{wkid:102100},xmax:-1.19836368866296E7,xmin:-1.44113725423473E7,ymax:5209691.46502651,ymin:2707598.58754309},name:"Another Bookmark"},{extent:{spatialReference:{wkid:102100},xmax:-1.39836368866296E7,xmin:-1.44113725423473E7,ymax:5109691.46502651,ymin:2507598.58754309},name:"One more bookmark"}]},"bookmarkDiv");(new G({showClearButton:!0,
map:c},"directionsDiv")).startup();(new O({map:c},"measureDiv")).startup();(new s({map:c,arcgisGeocoder:!0,autoComplete:!0,geocoders:[{url:"http://servicesbeta.esri.com/ArcGIS/rest/services/LocateValveByAssetID/GeocodeServer",name:"LocateValveByAssetId",placeholder:"enter asset id"}]},"geocoderDiv")).startup();u=new k("mapgeocoder2",{center:[-56.049,38.485],zoom:3,basemap:"streets"});(new s({map:u,arcgisGeocoder:!0,autoComplete:!0,geocoders:[{url:"http://servicesbeta.esri.com/ArcGIS/rest/services/LocateValveByAssetID/GeocodeServer",
name:"LocateValveByAssetId",placeholder:"enter asset id"}]},"geocoderDiv2")).startup();s=r.map([{name:"Letter ANSI A Landscape",label:"Landscape (PDF)",format:"pdf",options:{legendLayers:[],scalebarUnit:"Miles",titleText:"Landscape PDF"}},{name:"Letter ANSI A Portrait",label:"Portrait (Image)",format:"jpg",options:{legendLayers:[],scaleBarUnit:"Miles",titleText:"Portrait JPG"}}],function(a){var b=new Z;b.layout=a.name;b.label=a.label;b.format=a.format;b.layoutOptions=a.options;return b});(new Q({map:c,
templates:s,url:"http://servicesbeta4.esri.com/arcgis/rest/services/Utilities/ExportWebMap/GPServer/Export Web Map Task"},"printDiv")).startup();new R({map:c,scalebarUnit:"english"},m.byId("scalebarDiv"));(new v({map:c},"homeDiv")).startup();(new N({map:c},"locateDiv")).startup();n(m.byId("signIn"),"click",function(){(new C.Portal("http://www.arcgis.com")).signIn()});var B=new esri.Map("infographicMap",{basemap:"topo",center:[-117.17,34.035],zoom:16});n(B,"load",function(){var a=new L({type:"AgePyramid",
variables:["Age.*"],returnGeometry:!0},"infographicDiv"),b=new A(-117.17,34.035);B.graphics.add(new U(b,(new W).setColor("#ccc")));a.set("studyArea",new X({geometry:b}));a.startup()});p.createMap("59bdf3f131854da7b58c76886826bb94","popupDiv").then(function(a){a=a.map;a.reposition();a.resize()});p.createMap("62702544d70648e593bc05d65180fd64","swipeMap").then(function(a){var b,c=a.map;r.some(a.itemInfo.itemData.operationalLayers,function(a){return"2009 Obesity Rates"===a.title?(b=a.id,a.featureCollection&&
a.featureCollection.layers.length&&(b=a.featureCollection.layers[0].id),!0):!1});b&&(a=c.getLayer(b),(new z({type:"scope",map:c,layers:[a]},"swipeDiv")).startup())});p.createMap("62702544d70648e593bc05d65180fd64","swipeMap2").then(function(a){var b,c=a.map;r.some(a.itemInfo.itemData.operationalLayers,function(a){return"2009 Obesity Rates"===a.title?(b=a.id,a.featureCollection&&a.featureCollection.layers.length&&(b=a.featureCollection.layers[0].id),!0):!1});b&&(a=c.getLayer(b),(new z({type:"vertical",
map:c,layers:[a]},"swipeDiv2")).startup())});p=new k("mapgeocoder3",{basemap:"gray",center:[-120.435,46.159],zoom:7});v=new e("http://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/GeoForm_Survey_v11_live/FeatureServer/0",{outFields:["*"]});c.addLayer(v);g=new g({enableButtonMode:!0,map:p},"geocoderDiv3");f.urlToObject(location.href);f=g.get("sources");f.push({locator:new Y("//geocodedev.arcgis.com/arcgis/rest/services/World/GeocodeServer"),singleLineFieldName:"SingleLine",name:"Esri Dev Locator",
localSearchOptions:{minScale:3E5,distance:5E4},placeholder:"Search GeocodeDev",maxResults:3,maxSuggestions:6,suggest:!0,minCharacters:0});f.push({featureLayer:new e("http://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/GeoForm_Survey_v11_live/FeatureServer/0",{outFields:["*"]}),searchFields:["Email","URL"],displayField:"Email",exactMatch:!1,outFields:["*"],name:"A FeatureLayer",placeholder:"example: esri",maxResults:6,maxSuggestions:6,suggest:!0,minCharacters:0});g.set("sources",f);g.startup();
n(g,"search-results",function(a){console.log("search-results",a)});n(g,"suggest-results",function(a){console.log("suggest-results",a)});n(g,"select-result",function(a){console.log("select-result",a)});new A(-118.15,33.8,new V({wkid:4326}));(function(){var a=new k("visibleScaleRangeSliderMapDiv",{basemap:"gray",center:[-106.4649,31.7713],zoom:9}),b=new e("http://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2");a.addLayer(b);(new T({map:a,layer:b,region:"es-MX"},"visibleScaleRangeSliderDiv")).startup()})();
(function(){var a=new k("overviewMapDiv",{basemap:"gray",center:[-106.4649,31.7713],zoom:9});(new P({map:a,height:200,width:200},"overviewDiv")).startup()})()});