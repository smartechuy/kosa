
window.onload = function() {
  var map = new OpenLayers.Map({
    div: "basicMap",
    layers: [new OpenLayers.Layer.OSM()],
    controls: [
      new OpenLayers.Control.Navigation({
        dragPanOptions: {
          enableKinetic: true
        }
      }),
      new OpenLayers.Control.Attribution(),
      new OpenLayers.Control.Zoom()
    ],
  });

  var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
  var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
  var position = new OpenLayers.LonLat(-56, -33).transform(fromProjection, toProjection);
  var zoom = 6; 

  map.setCenter(position, zoom);  
};

