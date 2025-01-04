// Initialize particles.js with the same config as main page
particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#A855F7"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.2,
          "random": false,
          "anim": {
            "enable": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#A855F7",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.3
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    }
  );
  
  // Gallery functionality
  const artworks = [
      {
          image: 'artworks/Last.jpg',
          title: 'Fan art for GLT manga',
          description: 'A snowy cityscape with two figures and floating spirits'
      },
      {
        image: 'artworks/glt.jpg',
        title: 'Fan art for GLT manga',
        description: 'A snowy cityscape with two figures and floating spirits'
    },
    {
        image: 'artworks/mafia.jpg',
        title: 'Fan art for GLT manga',
        description: 'A snowy cityscape with two figures and floating spirits'
    },
    {
        image: 'artworks/asset.jpg',
        title: 'Fan art for GLT manga',
        description: 'A snowy cityscape with two figures and floating spirits'
    },
  ];
  
  function createGalleryItem(artwork) {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      
      galleryItem.innerHTML = `
          <img src="${artwork.image}" alt="${artwork.title}">
          <div class="gallery-item-overlay">
              <div class="gallery-item-title">${artwork.title}</div>
              <div class="gallery-item-description">${artwork.description}</div>
          </div>
      `;
      
      galleryItem.addEventListener('click', () => openModal(artwork));
      
      return galleryItem;
  }
  
  // Modal functionality
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeButton = document.querySelector('.close-modal');
  
  function openModal(artwork) {
      modal.style.display = 'block';
      modalImage.src = artwork.image;
      modalTitle.textContent = artwork.title;
      modalDescription.textContent = artwork.description;
  }
  
  closeButton.onclick = () => {
      modal.style.display = 'none';
  }
  
  window.onclick = (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  }
  
  // Initialize gallery
  const gallery = document.getElementById('artwork-gallery');
  artworks.forEach(artwork => {
      gallery.appendChild(createGalleryItem(artwork));
  });