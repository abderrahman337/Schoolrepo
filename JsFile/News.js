const contentData = [
    {
      imageUrl: '/images/Rectangle 1.png',
      description: 'Research In Action & Equity in the Making: How the EITM Lab Promotes Inclusivity in Public Makerspaces '
    },
    {
      imageUrl: '/images/Rectangle 2.png',
      description: 'Research In Action & Equity in the Making: How the EITM Lab Promotes Inclusivity in Public Makerspaces'
    },
    {
        imageUrl: '/images/Rectangle 3.png',
        description: 'Research In Action & Equity in the Making: How the EITM Lab Promotes Inclusivity in Public Makerspaces'
    },
    {
        imageUrl: '/images/Rectangle 39.png',
        description: 'Research In Action & Equity in the Making: How the EITM Lab Promotes Inclusivity in Public Makerspaces'
    },
    {
        imageUrl: '/images/Rectangle 40.png',
        description: 'Research In Action & Equity in the Making: How the EITM Lab Promotes Inclusivity in Public Makerspaces'
    },
    {
        imageUrl: '/images/Rectangle 41.png',
        description: 'Research In Action & Equity in the Making: How the EITM Lab Promotes Inclusivity in Public Makerspaces'
    },
    // Add more content objects as needed
  ];
function createContentItem(item) {
    const container = document.createElement('div');
    container.className = 'content-item';

    const image = document.createElement('img');
    image.src = item.imageUrl;
    image.alt = item.title;

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = item.title;

    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = item.description;

    container.appendChild(image);
    container.appendChild(title);
    container.appendChild(description);

    return container;
  }

  // Insert the content into the page
  const contentContainer = document.getElementById('content');
  contentData.forEach(item => {
    contentContainer.appendChild(createContentItem(item));
  });

