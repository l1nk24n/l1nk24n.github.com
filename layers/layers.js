var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Canales84_0 = new ol.format.GeoJSON();
var features_Canales84_0 = format_Canales84_0.readFeatures(json_Canales84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canales84_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Canales84_0.addFeatures(features_Canales84_0);var lyr_Canales84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canales84_0, 
                style: style_Canales84_0,
                title: '<img src="styles/legend/Canales84_0.png" /> Canales84'
            });var format_AVENIDAS_1 = new ol.format.GeoJSON();
var features_AVENIDAS_1 = format_AVENIDAS_1.readFeatures(json_AVENIDAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AVENIDAS_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AVENIDAS_1.addFeatures(features_AVENIDAS_1);var lyr_AVENIDAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AVENIDAS_1, 
                style: style_AVENIDAS_1,
                title: '<img src="styles/legend/AVENIDAS_1.png" /> AVENIDAS'
            });var format_Calles84_2 = new ol.format.GeoJSON();
var features_Calles84_2 = format_Calles84_2.readFeatures(json_Calles84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles84_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Calles84_2.addFeatures(features_Calles84_2);var lyr_Calles84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calles84_2, 
                style: style_Calles84_2,
                title: '<img src="styles/legend/Calles84_2.png" /> Calles84'
            });var format_levantamientostopograficos_3 = new ol.format.GeoJSON();
var features_levantamientostopograficos_3 = format_levantamientostopograficos_3.readFeatures(json_levantamientostopograficos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_levantamientostopograficos_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_levantamientostopograficos_3.addFeatures(features_levantamientostopograficos_3);var lyr_levantamientostopograficos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_levantamientostopograficos_3, 
                style: style_levantamientostopograficos_3,
                title: '<img src="styles/legend/levantamientostopograficos_3.png" /> levantamientos topograficos'
            });

lyr_Canales84_0.setVisible(true);lyr_AVENIDAS_1.setVisible(true);lyr_Calles84_2.setVisible(true);lyr_levantamientostopograficos_3.setVisible(true);
var layersList = [baseLayer,lyr_Canales84_0,lyr_AVENIDAS_1,lyr_Calles84_2,lyr_levantamientostopograficos_3];
lyr_Canales84_0.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'Text': 'Text', });
lyr_AVENIDAS_1.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', });
lyr_Calles84_2.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'Text': 'Text', });
lyr_levantamientostopograficos_3.set('fieldAliases', {'sector': 'sector', 'proyecto': 'proyecto', 'plano': 'plano', 'fecha': 'fecha', });
lyr_Canales84_0.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'Text': 'TextEdit', });
lyr_AVENIDAS_1.set('fieldImages', {'Id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Calles84_2.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'Text': 'TextEdit', });
lyr_levantamientostopograficos_3.set('fieldImages', {'sector': 'TextEdit', 'proyecto': 'TextEdit', 'plano': 'FileName', 'fecha': 'TextEdit', });
lyr_Canales84_0.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'Text': 'no label', });
lyr_AVENIDAS_1.set('fieldLabels', {'Id': 'no label', 'NOMBRE': 'no label', });
lyr_Calles84_2.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'Text': 'no label', });
lyr_levantamientostopograficos_3.set('fieldLabels', {'sector': 'no label', 'proyecto': 'no label', 'plano': 'no label', 'fecha': 'no label', });
lyr_levantamientostopograficos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});