document.addEventListener('DOMContentLoaded', function () {
  function replacename() {
    let nameUser = prompt("To open this page, please enter your name first:");
    document.getElementById("nameUser").innerHTML = nameUser;
    document.getElementById("name").value = nameUser;
  }
  replacename();
  document.getElementById("nameUser").addEventListener("click", function () {
    replacename();
  });

  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const youAreInputs = document.getElementsByName('you-are');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const appointmentInput = document.getElementById('appointment');
  const scheduleInput = document.getElementById('schedule');
  const messageInput = document.getElementById('message');

  const outputName = document.getElementById('output-name');
  const outputYouAre = document.getElementById('output-you-are');
  const outputEmail = document.getElementById('output-email');
  const outputPhone = document.getElementById('output-phone');
  const outputAppointment = document.getElementById('output-appointment');
  const outputSchedule = document.getElementById('output-schedule');
  const outputMessage = document.getElementById('output-message');
  const currentTimeElement = document.getElementById('current-time');
});

function smoothScroll(target) {
  const targetElement = document.getElementById(target);

  if (!targetElement) {
    console.error(`Element with ID "${target}" not found.`);
    return; 
  }

  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500; // Durasi scroll dalam milidetik
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime; 
    if (elapsed >= duration) {
      window.scrollTo(0, targetPosition); 
      return; 
    }

    const t = elapsed / duration;
    const easedProgress = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    window.scrollTo(0, startPosition + distance * easedProgress);
    requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

const seeMoreButton = document.getElementById("seeMoreBtn");
seeMoreButton.addEventListener("click", () => {
  smoothScroll("find-us"); 
});

let slideIndex = 0;
const slides = document.getElementsByClassName("slide-banner");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active'); 
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; 
  }

  slides[slideIndex - 1].classList.add('active'); 

  setTimeout(showSlides, 3000); 
}

showSlides();
