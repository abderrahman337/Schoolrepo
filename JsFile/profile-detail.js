// Function to extract URL parameters
  /**********Profile details  ***************/

  // Example profile data
const directory = {
  'jhon': {
    imageUrl: 'images/Ellipse 4.png', 
    name: 'Jhon Denise',
    title: 'Teaching Assistant Professor',
    email: 'ellio@unc.edu',
    expertise: ['Archival science', 'Academic librarianship', 'Digital Humanities', 'Academic writing', 'Qualitative research', 'Critical theory'],
    adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']
  },
  'denise': {
    imageUrl: 'images/Ellipse 6.png', 
    name: 'Elliott Kuecker',
    title: 'Teaching Assistant Professor',
    email: 'ellio@unc.edu',
    expertise: ['Archival science', 'Academic librarianship', 'Digital Humanities', 'Academic writing', 'Qualitative research', 'Critical theory'],
    adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']
  },
  'elliott': {
    imageUrl: 'images/Ellipse 7.png', 
    name: 'Elliott Kuecker',
    title: 'Teaching Assistant Professor',
    email: 'ellio@unc.edu',
    expertise: ['Archival science , Academic librarianship , Academic librarianship , Digital Humanities ,Qualitative research , Academic writing , Critical theory'],
    adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']
  },
  
  // You can add more profiles here
};

// Function to update the profile card with new data
function updateProfile(profileData) {
  document.getElementById('profile-image').src = profileData.imageUrl;
  document.getElementById('profile-name').textContent = profileData.name;
  document.getElementById('profile-title').textContent = profileData.title;
  document.getElementById('profile-email').href = 'mailto:' + profileData.email;
  document.getElementById('profile-email').textContent = profileData.email;
  document.getElementById('profile-adresse').textContent = profileData.adresse;


  const expertiseList = document.getElementById('profile-expertise');
  expertiseList.innerHTML = ''; // Clear the list
  profileData.expertise.forEach(function (item) {
    const li = document.createElement('li');
    li.textContent = item;
    expertiseList.appendChild(li);
  });
}

// Example function to handle a click event on a directory item
function onDirectoryItemClick(event) {
  const profileId = event.target.getAttribute('data-profile-id'); 
  const profileData = directory[profileId];
  if (profileData) {
    updateProfile(profileData);
  }
}

// Assuming you have clickable items with class 'directory-item'
const directoryItems = document.querySelectorAll('.directory-item');
directoryItems.forEach(function (item) {
  item.addEventListener('click', onDirectoryItemClick);
});

// Initialize the profile card with the first profile data

updateProfile(directory['jhon']);

// Add event listeners to staff images
document.querySelectorAll('.staff-image').forEach(item => {
  item.addEventListener('click', function() {
    const staffId = this.getAttribute('data-staff-id');
    const profileData = directory[staffId];
    if (profileData) {
      updateProfile(profileData);
    }
  });
});

// Function to update the profile card with new data
// Function to create and append all profile cards


