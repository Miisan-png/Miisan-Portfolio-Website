// Initialize particles.js
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
  
  // Games data
  const games = [
      {
          title: "Violet The Robot",
          description: "Game Jam Game made in godot 3.2, for practice and learning the engine in 2 Days",
          thumbnail: "games/violet.png",
          playLink: "https://miisan.itch.io/violet-the-robot",
          technologies: ["Godot 3.2", "Gdscript", "Pixel Art","Game Jam"],
          screenshots: [
              "games/v2.png",
              "games/v1.png"
          ]
      },
      {
        title: "Jump if you can",
        description: "Another game jam game",
        thumbnail: "games/Jump.png",
        playLink: "https://miisan.itch.io/jump-if-you-can",
        technologies: ["Godot 3.2", "Gdscript", "Pixel Art","Game Jam"],
        screenshots: [
            "games/J1.png",
            "games/J2.png",
            "games/J3.png"
        ]
    }
  ];
  
  function createGameCard(game) {
      const gameCard = document.createElement('div');
      gameCard.className = 'game-card';
      
      gameCard.innerHTML = `
          <img src="${game.thumbnail}" alt="${game.title}">
          <div class="game-card-overlay">
              <div class="game-title">${game.title}</div>
              <div class="game-description">${game.description.substring(0, 100)}...</div>
          </div>
      `;
      
      gameCard.addEventListener('click', () => openGameModal(game));
      
      return gameCard;
  }
  
  function createScreenshotElements(screenshots) {
      return screenshots.map(screenshot => `
          <div class="screenshot">
              <img src="${screenshot}" alt="Game Screenshot">
          </div>
      `).join('');
  }
  
  function createTechTags(technologies) {
      return technologies.map(tech => `
          <span class="tech-tag">${tech}</span>
      `).join('');
  }
  
  function openGameModal(game) {
      const modal = document.getElementById('game-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalDescription = document.getElementById('modal-description');
      const modalTech = document.getElementById('modal-tech');
      const modalScreenshots = document.getElementById('modal-screenshots');
      const modalPlayLink = document.getElementById('modal-play-link');
  
      modalTitle.textContent = game.title;
      modalDescription.textContent = game.description;
      modalTech.innerHTML = createTechTags(game.technologies);
      modalScreenshots.innerHTML = createScreenshotElements(game.screenshots);
      modalPlayLink.href = game.playLink;
  
      modal.style.display = 'block';
  }
  
  // Modal close functionality
  const modal = document.getElementById('game-modal');
  const closeButton = document.querySelector('.close-modal');
  
  closeButton.onclick = () => {
      modal.style.display = 'none';
  }
  
  window.onclick = (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  }
  
  // Initialize gallery
  const gamesGallery = document.getElementById('games-gallery');
  games.forEach(game => {
      gamesGallery.appendChild(createGameCard(game));
  });