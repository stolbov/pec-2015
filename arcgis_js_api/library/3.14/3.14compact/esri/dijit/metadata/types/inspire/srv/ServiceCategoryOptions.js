// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/inspire/srv/templates/ServiceCategoryOptions.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanInteractionService}\',value:\'humanInteractionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanCatalogueViewer}\',value:\'humanCatalogueViewer\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanGeographicViewer}\',value:\'humanGeographicViewer\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanGeographicSpreadsheetViewer}\',value:\'humanGeographicSpreadsheetViewer\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanServiceEditor}\',value:\'humanServiceEditor\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanChainDefinitionEditor}\',value:\'humanChainDefinitionEditor\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanWorkflowEnactmentManager}\',value:\'humanWorkflowEnactmentManager\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanGeographicFeatureEditor}\',value:\'humanGeographicFeatureEditor\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanGeographicSymbolEditor}\',value:\'humanGeographicSymbolEditor\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanFeatureGeneralizationEditor}\',value:\'humanFeatureGeneralizationEditor\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.humanGeographicDataStructureViewer}\',value:\'humanGeographicDataStructureViewer\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoManagementService}\',value:\'infoManagementService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoFeatureAccessService}\',value:\'infoFeatureAccessService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoMapAccessService}\',value:\'infoMapAccessService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoCoverageAccessService}\',value:\'infoCoverageAccessService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoSensorDescriptionService}\',value:\'infoSensorDescriptionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoProductAccessService}\',value:\'infoProductAccessService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoFeatureTypeService}\',value:\'infoFeatureTypeService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoCatalogueService}\',value:\'infoCatalogueService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoRegistryService}\',value:\'infoRegistryService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoGazetteerService}\',value:\'infoGazetteerService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoOrderHandlingService}\',value:\'infoOrderHandlingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.infoStandingOrderService}\',value:\'infoStandingOrderService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.taskManagementService}\',value:\'taskManagementService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.chainDefinitionService}\',value:\'chainDefinitionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.workflowEnactmentService}\',value:\'workflowEnactmentService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.subscriptionService}\',value:\'subscriptionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialProcessingService}\',value:\'spatialProcessingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialCoordinateConversionService}\',value:\'spatialCoordinateConversionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialCoordinateTransformationService}\',value:\'spatialCoordinateTransformationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialCoverageVectorConversionService}\',value:\'spatialCoverageVectorConversionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialImageCoordinateConversionService}\',value:\'spatialImageCoordinateConversionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialRectificationService}\',value:\'spatialRectificationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialOrthorectificationService}\',value:\'spatialOrthorectificationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialSensorGeometryModelAdjustmentService}\',value:\'spatialSensorGeometryModelAdjustmentService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialImageGeometryModelConversionService}\',value:\'spatialImageGeometryModelConversionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialSubsettingService}\',value:\'spatialSubsettingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialSamplingService}\',value:\'spatialSamplingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialTilingChangeService}\',value:\'spatialTilingChangeService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialDimensionMeasurementService}\',value:\'spatialDimensionMeasurementService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialFeatureManipulationService}\',value:\'spatialFeatureManipulationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialFeatureMatchingService}\',value:\'spatialFeatureMatchingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialFeatureGeneralizationService}\',value:\'spatialFeatureGeneralizationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialRouteDeterminationService}\',value:\'spatialRouteDeterminationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialPositioningService}\',value:\'spatialPositioningService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.spatialProximityAnalysisService}\',value:\'spatialProximityAnalysisService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicProcessingService}\',value:\'thematicProcessingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicGoparameterCalculationService}\',value:\'thematicGoparameterCalculationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicClassificationService}\',value:\'thematicClassificationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicFeatureGeneralizationService}\',value:\'thematicFeatureGeneralizationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicSubsettingService}\',value:\'thematicSubsettingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicSpatialCountingService}\',value:\'thematicSpatialCountingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicChangeDetectionService}\',value:\'thematicChangeDetectionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicGeographicInformationExtractionService}\',value:\'thematicGeographicInformationExtractionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicImageProcessingService}\',value:\'thematicImageProcessingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicReducedResolutionGenerationService}\',value:\'thematicReducedResolutionGenerationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicImageManipulationService}\',value:\'thematicImageManipulationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicImageUnderstandingService}\',value:\'thematicImageUnderstandingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicImageSynthesisService}\',value:\'thematicImageSynthesisService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicMultibandImageManipulationService}\',value:\'thematicMultibandImageManipulationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicObjectDetectionService}\',value:\'thematicObjectDetectionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicGeoparsingService}\',value:\'thematicGeoparsingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.thematicGeocodingService}\',value:\'thematicGeocodingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.temporalProcessingService}\',value:\'temporalProcessingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.temporalReferenceSystemTransformationService}\',value:\'temporalReferenceSystemTransformationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.temporalSubsettingService}\',value:\'temporalSubsettingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.temporalSamplingService}\',value:\'temporalSamplingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.temporalProximityAnalysisService}\',value:\'temporalProximityAnalysisService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.metadataProcessingService}\',value:\'metadataProcessingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.metadataStatisticalCalculationService}\',value:\'metadataStatisticalCalculationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.metadataGeographicAnnotationService}\',value:\'metadataGeographicAnnotationService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.comService}\',value:\'comService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.comEncodingService}\',value:\'comEncodingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.comTransferService}\',value:\'comTransferService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.comGeographicCompressionService}\',value:\'comGeographicCompressionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.comGeographicFormatConversionService}\',value:\'comGeographicFormatConversionService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.comMessagingService}\',value:\'comMessagingService\'"\x3e\x3c/div\x3e\r\n\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"label:\'${i18nInspire.serviceType.comRemoteFileAndExecutableManagement}\',value:\'comRemoteFileAndExecutableManagement\'"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/inspire/srv/ServiceCategoryOptions","dojo/_base/declare dojo/_base/lang dojo/has ../../../form/Option dojo/text!./templates/ServiceCategoryOptions.html dojo/i18n!../../../nls/i18nInspire".split(" "),function(a,b,c,d,e,f,g){a=a(d,{i18nInspire:f,templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.inspire.srv.ServiceCategoryOptions",a,g);return a});