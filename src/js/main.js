(function () {
  const doc = document;
  const rootEl = doc.documentElement;
  const body = doc.body;
  const lightSwitch = doc.getElementById('lights-toggle');
  
  doc.querySelector('.menu').addEventListener('click', e=>{
    e.preventDefault();
    doc.getElementById("myNav").style.width = "100%";
  });

  doc.querySelector('.closebtn').addEventListener('click', e=>{
    e.preventDefault();
    doc.getElementById("myNav").style.width = "0%";
  });

  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal();

  rootEl.classList.remove('no-js');
  rootEl.classList.add('js');

  window.addEventListener('load', function () {
    body.classList.add('is-loaded');
  })

  // Reveal animations
  function revealAnimations() {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations);
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights);
    lightSwitch.addEventListener('change', checkLights);
  }

  function checkLights() {
    let labelText = lightSwitch.parentNode.querySelector('.label-text');
    if (lightSwitch.checked) {
      body.classList.remove('lights-off')
      if (labelText) {
        labelText.innerHTML = 'dark'
      }
    } else {
      body.classList.add('lights-off')
      if (labelText) {
        labelText.innerHTML = 'light'
      }
    }
  }

  var app = new Vue({
    el: '#app',
    data(){
      return{
        last:{
          tech:"LARAVEL & VUEJS",
          url:"https://socialblood.herokuapp.com",
          img:'project-1.png',
          name:"Social Blood",
          description:"This is a simple basic laravel 5.8 and vue based practice. The idea was creating a social platform where people can share there need for blood and others who want to donate can wish and contact to respective person."
        },
        projects:[1, 2, 3],
        load:3,
        notice:""
      }
    },
    methods:{
      imgSrc(src){
        return "dist/images/" + src;
      },
      loadMore(){
        if (this.load < this.projects) {
          this.load += 3;
        } else {
          this.notice = "Sorry! No Project Left";
        }
      }
    },
    computed:{
      lastImageSrc(){
        return this.imgSrc(this.last.img);
      }
    },
    mounted(){

    },
  })
  
}())
