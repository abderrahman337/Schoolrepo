// Assuming your directories are named '/basement', '/first-floor', etc.
document.getElementById('button-basement').addEventListener('click', function() {
    window.location.href = '/Maning_Hall_Map/basement.html';
  });
    
    document.getElementById('first-floor').addEventListener('click', function() {
      window.location.href = '/Maning_Hall_Map/first-floor.html';
    });
    
    document.getElementById('second-floor').addEventListener('click', function() {
      window.location.href = '/Maning_Hall_Map/second-floor.html';
    });
    
    document.getElementById('third-floor').addEventListener('click', function() {
      window.location.href = '/Maning_Hall_Map/third-floor.html';
    });
  
    document.querySelectorAll('.floor-button').forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all map contents
          document.querySelectorAll('.map-content').forEach(content => {
              content.classList.remove('active');
          });
  
          // Add active class to the targeted map content
          const targetId = this.getAttribute('data-target');
          document.getElementById(targetId).classList.add('active');
        });
  });

  document.querySelectorAll('.floor-button').forEach(button => {
    button.addEventListener('click', function() {

      document.querySelectorAll('.floor-button').forEach(btn => {
        btn.classList.remove('active');
      });
  
      this.classList.add('active');
    });
  });
  
    