// Assuming you want to redirect to another directory on button click
// document.getElementById('campusMapBtn').addEventListener('click', function() {
//     window.location.href = '/campus-map-directory'; 
//   });
  
//   document.getElementById('manningHallMapBtn').addEventListener('click', function() {
//     window.location.href = '/manning-hall-map-directory'; 
//   });

  document.getElementById('campusMapBtn').addEventListener('click', function() {
    window.location.href = './campus-map-directory.html'; 
  });
  
  document.getElementById('manningHallMapBtn').addEventListener('click', function() {
    window.location.href = './manning-hall-map-directory.html'; 
  });


  document.getElementById('campusMapBtn').addEventListener('click', function() {
    var mapFrame = document.createElement('iframe');
    mapFrame.width = '600';
    mapFrame.height = '450';
    mapFrame.style.border = '0';
    mapFrame.loading = 'lazy';
    mapFrame.allowFullscreen = true;
    mapFrame.src = 'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA';
    
    var mapContainer = document.getElementById('mapContainer');
    mapContainer.innerHTML = ''; 
    mapContainer.appendChild(mapFrame); 
  });
  
  