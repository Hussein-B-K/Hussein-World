// Start of scrollToTopButton
const scrollToTopButton = document.querySelector('.btn-scroll-top');

function handleScroll() {
  const threshHold = window.scrollY >= 1000;
  scrollToTopButton.classList.toggle('show', threshHold);
}

window.addEventListener('scroll', handleScroll);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// End of scrollToTopButton



// Start of Show Skills Meter On Scroll

let skContainer = document.querySelector(".our-skills"); 
let skSpans = document.querySelectorAll(".progress span");


window.onscroll = function () {
    // On Reaching the Container
    if (window.scrollY >= skContainer.offsetTop - 300) {
        // the width of the Span = the width of the data-set
        skSpans.forEach((e) => {
            e.style.width = e.dataset.width;
        });

        // show stats numbers

         if (window.scrollY >= stContainer.offsetTop - 350) {
        if (!started) {
          stSpans.forEach((e) => startCount(e));
        }
        started = true;
      }
        
    };
    
};

// End Of  Show Skills Meter On Scroll



// Start of Count Down
let countDown = new Date("Dec 31, 2024 23:59:59").getTime();

let counter= setInterval(() => {
// get Current Date
let CurrentDate = new Date();

let dateDiff = countDown - CurrentDate; // returns the remaining seconds from the current time until the requiered date.

// time units: 

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
document.querySelector(".events .days").innerHTML = days < 10? `0${days}`: days;

let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
document.querySelector(".events .hours").innerHTML = hours < 10? `0${hours}`: hours;

let minutes = Math.floor((dateDiff % (1000 * 60 * 60) / (1000 * 60)));
document.querySelector(".events .minutes").innerHTML = minutes < 10? `0${minutes}`: minutes;

let seconds = Math.floor((dateDiff % (1000 * 60) / (1000)));
document.querySelector(".events .seconds").innerHTML = seconds < 10? `0${seconds}`: seconds;

if (dateDiff < 0) {
    clearInterval(counter);
}
}, 1000);

// End of Count Down

// Start of Show Stats

let stContainer = document.querySelector(".stats"); 
let stSpans = document.querySelectorAll(".number");
let started = false;
  
  function startCount(e) {
    let goal = e.dataset.goal;
    let count = setInterval(() => {
      e.textContent++;
      if (e.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }

// end of Show Stats