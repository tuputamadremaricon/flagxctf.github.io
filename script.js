const particlesContainer = document.getElementById('particles-js');

if (particlesContainer) {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 700
        }
      },
      color: {
        value: getComputedStyle(document.documentElement).getPropertyValue('--hacker-text').trim() || '#00ff00'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: getComputedStyle(document.documentElement).getPropertyValue('--hacker-border').trim() || '#004d00'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 0.4,
          opacity_min: 0.05,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 5,
          size_min: 1.5,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 110,
        color: getComputedStyle(document.documentElement).getPropertyValue('--hacker-text-secondary').trim() || '#00cc00',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 10,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse'
        },
        onclick: {
          enable: false, 
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 0.7
          }
        },
        bubble: {
          distance: 200,
          size: 20,
          duration: 2,
          opacity: 0.8
        },
        repulse: {
          distance: 80,
          duration: 0.4
        },
        push: {
          particles_nb: 2
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
}