ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11869222.449303, -685171.021545, 11875021.994189, -681531.748901]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_APMSTerbaru_1 = new ol.format.GeoJSON();
var features_APMSTerbaru_1 = format_APMSTerbaru_1.readFeatures(json_APMSTerbaru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APMSTerbaru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APMSTerbaru_1.addFeatures(features_APMSTerbaru_1);
var lyr_APMSTerbaru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APMSTerbaru_1, 
                style: style_APMSTerbaru_1,
                popuplayertitle: 'APMS Terbaru',
                interactive: true,
    title: 'APMS Terbaru<br />\
    <img src="styles/legend/APMSTerbaru_1_0.png" /> 0 - 11 Failed<br />\
    <img src="styles/legend/APMSTerbaru_1_1.png" /> 11 - 26 Serious<br />\
    <img src="styles/legend/APMSTerbaru_1_2.png" /> 26 - 41 Very Poor<br />\
    <img src="styles/legend/APMSTerbaru_1_3.png" /> 41 - 56 Poor<br />\
    <img src="styles/legend/APMSTerbaru_1_4.png" /> 56 - 71 Fair<br />\
    <img src="styles/legend/APMSTerbaru_1_5.png" /> 71 - 86 Satisfactory<br />\
    <img src="styles/legend/APMSTerbaru_1_6.png" /> 86 - 100 Good<br />' });

lyr_GoogleSatelite_0.setVisible(true);lyr_APMSTerbaru_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_APMSTerbaru_1];
lyr_APMSTerbaru_1.set('fieldAliases', {'Section': 'Section', 'PCI Rating': 'PCI Rating', 'PCN': 'PCN', });
lyr_APMSTerbaru_1.set('fieldImages', {'Section': 'TextEdit', 'PCI Rating': 'TextEdit', 'PCN': 'TextEdit', });
lyr_APMSTerbaru_1.set('fieldLabels', {'Section': 'inline label - visible with data', 'PCI Rating': 'inline label - visible with data', 'PCN': 'inline label - visible with data', });
lyr_APMSTerbaru_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});