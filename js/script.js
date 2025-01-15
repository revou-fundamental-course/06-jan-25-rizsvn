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
  const youAreInput = document.getElementById('you-are');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const appointmentInput = document.getElementsByName('appointment');
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



  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    let valid = true;
    let errorMessage = '';

    if (nameInput.value.trim() === '') {
        valid = false;
        errorMessage += 'Name required.\n';
    }

    if (youAreInput.value.trim() === '..') {
      valid = false;
      errorMessage += 'Who are you? Select You Are required.\n';
  }

    if (emailInput.value.trim() === '') {
        valid = false;
        errorMessage += 'Email required.\n';
    }

    if (phoneInput.value.trim() === '') {
        valid = false;
        errorMessage += 'Phone required.\n';
    }

    let appointmentSelected = false;
    for (let i = 0; i < appointmentInput.length; i++) {
        if (appointmentInput[i].checked) {
            appointmentSelected = true;
            break;
        }
    }
    if (!appointmentSelected) {
        valid = false;
        errorMessage += 'Appointment required.\n';
    }

    if (!scheduleInput.value) {
        valid = false;
        errorMessage += 'Schedule required.\n';
    }

    if (messageInput.value.trim() === '') {
        valid = false;
        errorMessage += 'Message required.\n';
    }

    if (valid) {
        nameUser.textContent = nameInput.value;

        const currentTime = new Date().toLocaleString();
        currentTimeElement.textContent = currentTime;

        outputName.textContent = nameInput.value;
        outputYouAre.textContent = youAreInput.value; 
        outputEmail.textContent = emailInput.value;
        outputPhone.textContent = phoneInput.value;
        let appointmentValue = '';
        for (let i = 0; i < appointmentInput.length; i++) {
            if (appointmentInput[i].checked) {
                appointmentValue = appointmentInput[i].value;
                break;
            }
        }
        outputAppointment.textContent = appointmentValue;
        outputSchedule.textContent = scheduleInput.value;
        outputMessage.textContent = messageInput.value;

        form.reset();
    } else {
        alert(errorMessage);
    }
  });



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
