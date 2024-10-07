$(document).ready(function () {
    // coordenada para marcar no mapa
    var coord = [-22.905295, -43.5617389]; 
  
    var map = L.map("map-canvas", { scrollWheelZoom: false }).setView(coord, 19);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 22,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
      }
    ).addTo(map);
  
    // icone
    var customIcon = L.icon({
      iconUrl: "img/mapmarker.png",
      iconSize: [64, 64], 
      iconAnchor: [32, 63], 
    });
  
    
    var marker = L.marker(coord, { icon: customIcon }).addTo(map);
  });