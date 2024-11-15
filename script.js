window.onload = function() {
    const light = document.querySelector('.emergency-light');
    light.classList.add('on');
  };
function toggleLight() {
  const light = document.querySelector('.emergency-light');
  const doors = document.querySelectorAll('.door');
  const doorContainer = document.querySelector('.door-container');
  const figure = document.querySelector('.figure');

  light.classList.toggle('on');
  if (light.classList.contains('on')) {
    doors.forEach(door => door.classList.add('closed'));
    doors.forEach(door => door.classList.remove('open'));
    doorContainer.classList.remove('open');
    figure.style.display = 'none'; // Hide the nurse figure when the light is on
  } else {
    doors.forEach(door => door.classList.remove('closed'));
  }
}
function showSpeechBubble(message) {
    const speechBubble = document.querySelector('.speech-bubble');
    const speechText = document.querySelector('.speech-text');
    
    speechText.textContent = message; // Set the text based on the message passed
    speechBubble.classList.add('show');
    setTimeout(() => {
        speechBubble.classList.add('hide');
        setTimeout(() => {
            speechBubble.classList.remove('show', 'hide'); // Reset styles after fade-out
        }, 300); // Time for the hide transition to complete
    }, 3000); // Popup disappears after 3 seconds
}

function tryOpenDoor() {
    const light = document.querySelector('.emergency-light');
    const doors = document.querySelectorAll('.door');
    const doorContainer = document.querySelector('.door-container');
    const speechBubble = document.querySelector('.speech-bubble');
    const figure = document.querySelector('.figure');
  
    if (!light.classList.contains('on')) {
        // Show "Operation is still under way" when light is off
        showSpeechBubble("Operation is still under way");
        
        doors.forEach(door => door.classList.add('open'));
        doors.forEach(door => door.classList.remove('closed'));
        doorContainer.classList.add('open');
        figure.style.display = 'block'; // Show the nurse figure when the door opens
        
        setTimeout(() => {
            doors.forEach(door => door.classList.remove('open'));
            doors.forEach(door => door.classList.add('closed'));
            doorContainer.classList.remove('open');
            toggleLight();
            figure.style.display = 'none'; 
        }, 3000); 
    } else {
       
        showSpeechBubble("Operation is under way");
    }
}

function toggleLight() {
    const light = document.querySelector('.emergency-light');
    const doors = document.querySelectorAll('.door');
    const doorContainer = document.querySelector('.door-container');
    const figure = document.querySelector('.figure');
  
    light.classList.toggle('on');
    if (light.classList.contains('on')) {
        doors.forEach(door => door.classList.add('closed'));
        doors.forEach(door => door.classList.remove('open'));
        doorContainer.classList.remove('open');
        figure.style.display = 'none'; // Hide the nurse figure when the light is on
    } else {
        doors.forEach(door => door.classList.remove('closed'));
    }
}
const targetDate = new Date("2024-12-12T17:12:00Z").getTime(); // 17:12 UTC for 12:12 PM EST

    function updateCountdown() {
        try {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            // Check if the countdown has ended
            if (timeRemaining <= 0) {
                document.getElementById("days").innerText = '0';
                document.getElementById("hours").innerText = '0';
                document.getElementById("minutes").innerText = '0';
                document.getElementById("seconds").innerText = '0';
                clearInterval(countdownInterval); // Stop the interval when time is up
                return;
            }

            // Calculate the days, hours, minutes, and seconds remaining
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the HTML with calculated values
            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        } catch (error) {
            console.error("Error updating countdown:", error);
        }
    }

    // Set up the countdown to update every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initialize the countdown display on page load
    updateCountdown();
