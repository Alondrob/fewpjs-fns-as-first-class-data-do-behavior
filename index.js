/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

// greet function:
// If the time is earlier than 12pm, return "Good Morning"
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".

function displayMessage(msg) {
  document.getElementById('greeting').textContent = msg;
}


function greet(timeStr) {

  const hour = parseInt(timeStr, 10)
  
  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"

}