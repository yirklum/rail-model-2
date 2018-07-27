
// Title
// Vivus JS 
new Vivus("title", {start: 'autostart', type: 'delayed', duration: 300, animTimingFunction: Vivus.EASE}, function(title){
    setTimeout(function(){ title.reset().play(); }, 5000);
  });

new Vivus('title', {}, function (obj) {
  obj.el.classList.add('finished')});


// Background
// Particle JS
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 380,
            "density": {
              "enable": true,
              "value_area": 800
            }
            },
          "color": {
            "value": "#ffffff"
            },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
                "width": 100,
              "height": 100
            }
            },
            "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
            },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
                "sync": false
            }
          },
            "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
            },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
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
                "opacity": 1
                }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
                "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });

// NavBar Hinge Effect
// animate.css
// function animationClick(element, animation){
//   element = $(element);
//   element.click(
//       function() {
//           element.addClass("animated" + animation);        
//           //wait for animation to finish before removing classes
//           window.setTimeout( function(){
//               element.removeClass("animated" + animation);
//           }, 2000);         
//       });
// }

// $(document).ready(function(){
$("#danger").click(
  // function() {
  //   setTimeout(
      function() {
        $(".disappearing-nav").addClass("animated hinge");
        window.setTimeout( function(){
          
          $(".disappearing-nav").text("");
          $(".nav-link").removeClass("animated hinge");
        },  2000);  
      // }, 5000);
  });
// });

// Cat

$("#surprise").click(
      function() {
        $("#cat").addClass("flying-cat");
        window.setTimeout( function(){
            $("#cat").removeClass("flying-cat");
        }, 15000);  
});


// Product cards
// anime.js

$(document).ready(function(){
  $("#prompt-button").click(
    (function() {
      $(".prompt-card").remove();
      var myAnimation = anime({
      targets: [".product"],
      translateX: "1200px",
      rotate: 360,
      borderRadius: "10px",
      duration: 10000,
      loop: false
  });
     
    })
  )  
})


// Grumpy Cat
$(document).ready(function() {
  $("#grumpy").click(
    (function() {
      window.location.href=("/grumpy");
    })
  )
});

// Popmotion Modal

const { styler, timeline, listen, easing } = window.popmotion;

const openModalButton = document.querySelector('.open-modal');
const cancelModalButton = document.querySelector('.modal-cancel');
const okModalButton = document.querySelector('.modal-ok');

const modalShade = styler(document.querySelector('.modal-shade'));
const modalContainer = styler(document.querySelector('.modal-container'));
const modal = styler(document.querySelector('.modal'));
const modalSections = Array.from(document.querySelector('.modal').children).map(styler);
const sectionLabels = modalSections.map((s, i) => 'section' + i);

const tweenUp = (track, duration = 500, yFrom = 100) => ({
  track,
  duration,
  from: { y: yFrom, opacity: 0 },
  to: { y: 0, opacity: 1 },
  ease: { y: easing.backOut, opacity: easing.linear }
});

const setStylers = (v) => {
  if (v.shade !== undefined) modalShade.set('opacity', v.shade);
  if (v.modal !== undefined) modal.set(v.modal);
  sectionLabels.forEach((label, i) => {
    if (v[label] !== undefined) modalSections[i].set(v[label])
  });
};

const showContainers = () => {
  modalShade.set('display', 'block');
  modalContainer.set('display', 'flex');
};

const hideContainers = () => {
  modalShade.set('display', 'none');
  modalContainer.set('display', 'none');
};

const openModal = () => {
  showContainers();
  
  timeline([
    { track: 'shade', from: 0, to: 1, ease: easing.linear },
    '-100',
    tweenUp('modal'),
    '-200',
    [...modalSections.map((s, i) => tweenUp(sectionLabels[i], 300, 50)), 50]
  ]).start(setStylers);
}

const cancelModal = () => {
  timeline([
    {
      track: 'modal',
      duration: 200,
      from: { y: 0, opacity: 1 },
      to: { y: 100, opacity: 0 },
      ease: { y: easing.easeIn, opacity: easing.linear }
    },
    '-100',
    { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 200 }
  ]).start({
    update: setStylers,
    complete: hideContainers
  });
}

const okModal = () => {
  timeline([
    {
      track: 'modal',
      duration: 200,
      from: { y: 0, opacity: 1 },
      to: { y: -200, opacity: 0 },
      ease: { y: easing.easeOut, opacity: easing.linear }
    },
    '-100',
    { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 300 }
  ]).start({
    update: setStylers,
    complete: hideContainers
  });
}

listen(openModalButton, 'click').start(openModal);
listen(cancelModalButton, 'click').start(cancelModal);
listen(okModalButton, 'click').start(okModal);




