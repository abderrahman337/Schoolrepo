
  //*** Dynamic content ******** */

  document.addEventListener('DOMContentLoaded', () => {
    const directoryData = [
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: 'images/Ellipse 17.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning']
      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: 'images/Ellipse 18.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 19.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: 'images/Ellipse 4.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning']
      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: 'images/Ellipse 5.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 6.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: 'images/Ellipse 7.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning']
      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: 'images/Ellipse 8.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 9.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: 'images/Ellipse 10.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning']
      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: 'images/Ellipse 21.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 12.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 13.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 14.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 15.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 16.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction']
      },
      {
        name: 'Jhonatane smith',
        title: 'Lecturer',
        imageUrl: 'images/Ellipse 79.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
      },
      // ... more profiles
    
    ];

    const directoryContainer = document.getElementById('directory');
    const detailContainer = document.getElementById('detailView');

    // Function to create profile card HTML
    directoryData.forEach(profile => {
      const card = document.createElement('div');
      card.className = 'profile-card';
      card.innerHTML = `
        <img src="${profile.imageUrl}" alt="${profile.name}" />
        <p>${profile.name}</p>
        <p>${profile.title}</p>
      `;
      card.onclick = () => showDetail(profile);
      directoryContainer.appendChild(card);
    });

    // Function to show profile detail
    function showDetail(profile) {
      detailContainer.innerHTML = `
        <div class="detail-card">
        <img src="${profile.imageUrl}" alt="${profile.name}" />
          <h2>${profile.name}</h2>
          <p>${profile.title}</p>
          <p>${profile.email}</p>
          <p>${profile.expertise.join(', ')}</p><br>
          <button onclick="hideDetail()" style="background-color: #13294B; color: #ffffff; border: none; border-radius: 5px; padding: 10px 15px; cursor: pointer;">Close</button>
        </div>
      `;
      detailContainer.style.display = 'flex'; // Or any other display style
    }

    // Function to hide profile detail
    window.hideDetail = function() {
      detailContainer.style.display = 'none';
    }
  });