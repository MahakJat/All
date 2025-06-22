let play = document.querySelector(".play");
let reset = document.querySelector(".reset");
let count = 0;
let storeInterval = null;

let hour = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let isRunning = false; //play start nhi hua hai interval

play.addEventListener("click", function () {
  if (!isRunning) {
    //agar stop hai to start
    isRunning = true; //ab run ho raha hai
    storeInterval = setInterval(function () {
      if (count === 60) {
        count = 0;
        min.textContent = parseInt(min.textContent) + 1; //increase min
        if (parseInt(min.textContent) === 60) {
          //check if min == 60
          min.textContent = "0";
          hour.textContent = parseInt(hour.textContent) + 1;
        }
      }
      sec.textContent = count;

      // Format the time as two digits (e.g., 09 instead of 9)
      sec.textContent = count.toString().padStart(2, "0"); // Ensures two digits for seconds
      min.textContent = parseInt(min.textContent).toString().padStart(2, "0"); // Ensures two digits for minutes
      hour.textContent = parseInt(hour.textContent).toString().padStart(2, "0"); // Ensures two digits for hours

      count += 1;
    }, 1000);
  } else {
    // If already running, pause the interval
    isRunning = false; // Change state to paused
    clearInterval(storeInterval); // Stop the interval
  }
});

reset.addEventListener("click", function () {
  count = 0;
  sec.textContent = "00";
  min.textContent = "00";
  hour.textContent = "00";

  if (isRunning) {
    clearInterval(storeInterval);
    isRunning = false;
  }
});
