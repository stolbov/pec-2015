// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/tasks/RouteResult","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../graphic ./DirectionsFeatureSet".split(" "),function(b,d,e,k,l,f,m){b=b(null,{declaredClass:"esri.tasks.RouteResult",constructor:function(a){var b=a.spatialReference,c=a.route;if(a.directions){var g=[],h=[];e.forEach(a.directions.features,function(a,b){h[b]=a.compressedGeometry;g[b]=a.strings});a.directions.strings=g;this.directions=new m(a.directions,h)}this.routeName=a.routeName;c&&(c.geometry&&
(c.geometry.spatialReference=b),this.route=new f(c));if(a.stops){var d=this.stops=[];e.forEach(a.stops,function(a,c){a.geometry&&(a.geometry.spatialReference=b);d[a.attributes.Sequence-1]=new f(a)})}},routeName:null,directions:null,route:null,stops:null});k("extend-esri")&&d.setObject("tasks.RouteResult",b,l);return b});