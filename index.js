/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  if (parseInt(string) < 12){greeting = "Good Morning"} else if (parseInt(string)<17){greeting = "Good Afternoon"} else {greeting = "Good Evening"}
  return greeting
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  greeting = document.getElementById('greeting')
  greeting.innerText = string
}
