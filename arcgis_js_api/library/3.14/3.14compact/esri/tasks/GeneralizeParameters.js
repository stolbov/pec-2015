// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/tasks/GeneralizeParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils".split(" "),function(a,d,e,c,f,g,h){a=a(null,{declaredClass:"esri.tasks.GeneralizeParameters",geometries:null,deviationUnit:null,maxDeviation:null,toJson:function(){var a=e.map(this.geometries,function(a){return a.toJson()}),b={};this.geometries&&0<this.geometries.length&&(b.geometries=c.toJson({geometryType:h.getJsonType(this.geometries[0]),geometries:a}),
b.sr=c.toJson(this.geometries[0].spatialReference.toJson()));this.deviationUnit&&(b.deviationUnit=this.deviationUnit);this.maxDeviation&&(b.maxDeviation=this.maxDeviation);return b}});f("extend-esri")&&d.setObject("tasks.GeneralizeParameters",a,g);return a});