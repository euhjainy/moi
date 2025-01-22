

$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    adaptiveHeight: true,
   
  });
});



const leftSection = document.querySelector('.section-left');
const rightSection = document.querySelector('.section-right');
const centerSection = document.querySelector('.section-center');


function resetSlickCarousel() {
  $('.your-class').slick('setPosition');
}

function expandLeft() {
  leftSection.style.flex = '0.8'; 
  centerSection.style.flex = '0.2'; 
  rightSection.style.flex = '0'; 

  leftSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
}


function expandRight() {
  leftSection.style.flex = '0'; 
  centerSection.style.flex = '0.2'; 
  rightSection.style.flex = '0.8'; 
  rightSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
}


function resetSections() {
  leftSection.style.flex = '0.4';
  centerSection.style.flex = '0.2'; 
  rightSection.style.flex = '0.4'; 

  leftSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
  rightSection.addEventListener('transitionend', resetSlickCarousel, { once: true });
}

window.expandLeft = expandLeft;
window.expandRight = expandRight;
window.resetSections = resetSections;







var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});




function showOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  const centerSection = document.querySelector('.section-center');

  const rect = centerSection.getBoundingClientRect();
  
  overlay.style.position = 'absolute';
  overlay.style.top = `${rect.top}px`;
  overlay.style.left = `${rect.left}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;

  overlay.style.display = 'flex'; 
}

function hideOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  overlay.style.display = 'none';
}

document.getElementById('contactBtn').addEventListener('click', () => {
  showOverlay('contactOverlay');
});

document.getElementById('aboutMeBtn').addEventListener('click', () => {
  showOverlay('aboutMeOverlay');
});

document.getElementById('closeContact').addEventListener('click', () => {
  hideOverlay('contactOverlay');
});
