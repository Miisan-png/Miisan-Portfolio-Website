// Particles.js configuration
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
  
  // Fetch GitHub repositories count
  async function fetchGitHubRepos() {
      try {
          const response = await fetch('https://api.github.com/users/Miisan-png');
          const data = await response.json();
          const repoCount = data.public_repos;
          document.getElementById('repo-count').textContent = `${repoCount} repos`;
      } catch (error) {
          console.error('Error fetching GitHub data:', error);
          document.getElementById('repo-count').textContent = '';
      }
  }
  
  // Initialize
  fetchGitHubRepos();