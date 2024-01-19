// profile-details.js

// Store the profile details in an object
const directory = {
    'elliott': {
      imageUrl: 'images/Ellipse 10.png', // Replace with the actual image path
      name: 'Elliott Kuecker',
      title: 'Teaching Assistant Professor',
      email: 'ellio@unc.edu',
      expertise: ['Archival science', 'Academic librarianship', 'Digital Humanities', 'Academic writing', 'Qualitative research', 'Critical theory']
    },
    // Add more profiles as needed
  };
  
  // Function to update the profile card with new data
  function updateProfile(profileId) {
    const profileData = directory[profileId];
    
    if (!profileData) {
      console.error('No data found for:', profileId);
      return;
    }
  
    // Update the profile card elements with the new data
    const profileImage = document.getElementById('profile-image');
    const profileName = document.getElementById('profile-name');
    const profileTitle = document.getElementById('profile-title');
    const profileEmail = document.getElementById('profile-email');
    const profileExpertise = document.getElementById('profile-expertise');
  
    profileImage.src = profileData.imageUrl;
    profileName.textContent = profileData.name;
    profileTitle.textContent = profileData.title;
    profileEmail.href = 'mailto:' + profileData.email;
    profileEmail.textContent = profileData.email;
  
    // Clear previous expertise
  }
  profileExpertise.innerHTML = ''; // Clear existing list
  profileData.expertise.forEach(expertise => {
    const listItem = document.createElement('li');
    listItem.textContent = expertise;
    profileExpertise.appendChild(listItem);
  });


// Event listeners for profile images
document.querySelectorAll('.staff-image').forEach(image => {
  image.addEventListener('click', function() {
    const staffId = this.getAttribute('data-staff-id');
    updateProfile(staffId);
  });
});

// Optionally, initialize the profile card with the first profile's data on page load
document.addEventListener('DOMContentLoaded', () => {
  updateProfile('elliott'); // Default profile to display
});
  