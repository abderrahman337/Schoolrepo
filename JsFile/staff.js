
  //*** Dynamic content ******** */

  document.addEventListener('DOMContentLoaded', () => {
    const directoryData = [
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: '/images/Ellipse 70.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: '/images/Ellipse 71.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']


      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 72.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: '/images/Ellipse 73.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: '/images/Ellipse 74.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 75.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: '/images/Ellipse 88.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: '/images/Ellipse 77.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 79.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Jane Doe',
        title: 'Associate Professor',
        imageUrl: '/images/Ellipse 80.png', // Path to Jane's profile image
        email: 'jane.doe@university.edu',
        expertise: ['Data Science', 'Machine Learning'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'John Smith',
        title: 'Assistant Professor',
        imageUrl: '/images/Ellipse 81.png', // Path to John's profile image
        email: 'john.smith@university.edu',
        expertise: ['Network Security', 'Cryptography'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 82.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 101.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 102.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 104.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Alice Johnson',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse 86.png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      {
        name: 'Jhonatane smith',
        title: 'Lecturer',
        imageUrl: '/images/Ellipse .png', // Path to Alice's profile image
        email: 'alice.johnson@university.edu',
        expertise: ['User Experience Design', 'Human-Computer Interaction'],
        adresse :['Manning Hall, SILS Library','Monday - Friday 8 a.m. - 5 p.m.']

      },
      // ... more profiles
    
    ];

    const directoryContainer = document.getElementById('profile-detail-container');
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
          <h3>${profile.title}</h3>
          <p>${profile.email}</p><br>
          <h3>Staff Expertise</h3>
          <p>${profile.expertise.join(', ')}</p><br>
          <p>${profile.adresse}</p><br>
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