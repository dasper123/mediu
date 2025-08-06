ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([577923.850686, 335972.144733, 580242.437058, 337371.349533]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_tabel_v1_10_06_1 = new ol.format.GeoJSON();
var features_tabel_v1_10_06_1 = format_tabel_v1_10_06_1.readFeatures(json_tabel_v1_10_06_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_tabel_v1_10_06_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tabel_v1_10_06_1.addFeatures(features_tabel_v1_10_06_1);
var lyr_tabel_v1_10_06_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tabel_v1_10_06_1, 
                style: style_tabel_v1_10_06_1,
                popuplayertitle: 'tabel_v1_10_06',
                interactive: true,
    title: 'tabel_v1_10_06<br />\
    <img src="styles/legend/tabel_v1_10_06_1_0.png" /> Curatat<br />\
    <img src="styles/legend/tabel_v1_10_06_1_1.png" /> Expirat<br />\
    <img src="styles/legend/tabel_v1_10_06_1_2.png" /> In Termen<br />\
    <img src="styles/legend/tabel_v1_10_06_1_3.png" /> Lipsă Date<br />\
    <img src="styles/legend/tabel_v1_10_06_1_4.png" /> Retur<br />\
    <img src="styles/legend/tabel_v1_10_06_1_5.png" /> Retur/Afisare<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_tabel_v1_10_06_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_tabel_v1_10_06_1];
lyr_tabel_v1_10_06_1.set('fieldAliases', {'ie': 'ie', 'suprafata': 'suprafata', 'siruta': 'siruta', 'id': 'id', 'general_ta': 'general_ta', 'general__1': 'general__1', 'general__2': 'general__2', 'general__3': 'general__3', 'general__4': 'general__4', 'general__5': 'general__5', 'general__6': 'general__6', 'general__7': 'general__7', 'general__8': 'general__8', 'general__9': 'general__9', 'general_10': 'general_10', 'general_11': 'general_11', 'general_12': 'general_12', 'general_13': 'general_13', 'general_14': 'general_14', 'general_15': 'general_15', 'general_16': 'general_16', 'general_17': 'general_17', });
lyr_tabel_v1_10_06_1.set('fieldImages', {'ie': 'TextEdit', 'suprafata': 'TextEdit', 'siruta': 'TextEdit', 'id': 'TextEdit', 'general_ta': 'TextEdit', 'general__1': 'TextEdit', 'general__2': 'TextEdit', 'general__3': 'TextEdit', 'general__4': 'TextEdit', 'general__5': 'TextEdit', 'general__6': 'TextEdit', 'general__7': 'TextEdit', 'general__8': 'TextEdit', 'general__9': 'TextEdit', 'general_10': 'TextEdit', 'general_11': 'TextEdit', 'general_12': 'TextEdit', 'general_13': 'TextEdit', 'general_14': 'TextEdit', 'general_15': 'TextEdit', 'general_16': 'TextEdit', 'general_17': 'TextEdit', });
lyr_tabel_v1_10_06_1.set('fieldLabels', {'ie': 'no label', 'suprafata': 'no label', 'siruta': 'no label', 'id': 'no label', 'general_ta': 'no label', 'general__1': 'no label', 'general__2': 'no label', 'general__3': 'no label', 'general__4': 'no label', 'general__5': 'no label', 'general__6': 'no label', 'general__7': 'no label', 'general__8': 'no label', 'general__9': 'no label', 'general_10': 'no label', 'general_11': 'no label', 'general_12': 'no label', 'general_13': 'no label', 'general_14': 'no label', 'general_15': 'no label', 'general_16': 'no label', 'general_17': 'no label', });
lyr_tabel_v1_10_06_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});