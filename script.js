

$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
   
  });
});
 
  

//   const leftSection = document.querySelector('.section-left');
//   const rightSection = document.querySelector('.section-right');
//   const centerSection = document.querySelector('.section-center');

//   // Fonction pour agrandir la section gauche
//   function expandLeft() {
//     leftSection.style.flex = '0.8'; // La section gauche prend 80% de l'espace
//     centerSection.style.flex = '0.2'; // La section centrale est réduite
//     rightSection.style.flex = '0'; // La section droite est réduite

//     // Attendre la fin de la transition CSS et réinitialiser le carrousel
//     setTimeout(() => {
//       $('.your-class').slick('setPosition');
//     }, 200); // La durée correspond à la transition CSS (0.5s)
//   }

//   // Fonction pour agrandir la section droite
//   function expandRight() {
//     leftSection.style.flex = '0'; // La section gauche est réduite
//     centerSection.style.flex = '0.2'; // La section centrale est réduite
//     rightSection.style.flex = '0.8'; // La section droite prend 80% de l'espace

//     // Attendre la fin de la transition CSS et réinitialiser le carrousel
//     setTimeout(() => {
//       $('.your-class').slick('setPosition');
//     }, 200);
//   }

//   // Fonction pour réinitialiser les sections
//   function resetSections() {
//     leftSection.style.flex = '0.4'; // Taille initiale 40%
//     centerSection.style.flex = '0.2'; // Taille initiale 20%
//     rightSection.style.flex = '0.4'; // Taille initiale 40%

//     // Attendre la fin de la transition CSS et réinitialiser le carrousel
//     setTimeout(() => {
//       $('.your-class').slick('setPosition');
//     }, 200);
//   }

//   // Associer les fonctions aux boutons
//   window.expandLeft = expandLeft;
//   window.expandRight = expandRight;
//   window.resetSections = resetSections;
// });



const leftSection = document.querySelector('.section-left');
const rightSection = document.querySelector('.section-right');
const centerSection = document.querySelector('.section-center');

// Fonction utilitaire pour réinitialiser Slick
function resetSlickCarousel() {
  // Réinitialise Slick après une transition
  $('.your-class').slick('setPosition');
}

// Fonction pour agrandir la section gauche
function expandLeft() {
  leftSection.style.flex = '0.8'; // La section gauche prend 80% de l'espace
  centerSection.style.flex = '0.2'; // La section centrale est réduite
  rightSection.style.flex = '0'; // La section droite est réduite

  // Réinitialiser Slick après la fin de la transition CSS
  leftSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
}

// Fonction pour agrandir la section droite
function expandRight() {
  leftSection.style.flex = '0'; // La section gauche est réduite
  centerSection.style.flex = '0.2'; // La section centrale est réduite
  rightSection.style.flex = '0.8'; // La section droite prend 80% de l'espace

  // Réinitialiser Slick après la fin de la transition CSS
  rightSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
}

// Fonction pour réinitialiser les sections
function resetSections() {
  leftSection.style.flex = '0.4'; // Taille initiale 40%
  centerSection.style.flex = '0.2'; // Taille initiale 20%
  rightSection.style.flex = '0.4'; // Taille initiale 40%

  // Réinitialiser Slick après la fin de la transition CSS
  leftSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
  rightSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
}

// Associer les fonctions aux boutons
window.expandLeft = expandLeft;
window.expandRight = expandRight;
window.resetSections = resetSections;







var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});


