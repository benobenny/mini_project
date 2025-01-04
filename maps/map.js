

var map = L.map('London_routemap').setView([51.51279, -0.09184], 12);  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([51.51279, -0.09184]).addTo(map).bindPopup('City of London');




