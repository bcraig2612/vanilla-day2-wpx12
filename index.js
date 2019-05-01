console.dir(document);
const myButton = document.getElementById("my-button");
myButton.onclick = function(event) {
  event.stopPropagation();
  console.log("Hello from index.js");
};

document.body.onclick = function(e) {
  console.log("the body was clicked");
};

document.body.onclick = function() {
  console.log("The second body event");
};

function myFunc() {
  console.log("added to body through addEventListener");
}

document.body.addEventListener("click", myFunc);

document.querySelector("form").onsubmit = submitMe;

function submitMe(event) {
  console.log(event);
  event.preventDefault();

  let email = document.querySelector("#email");
  document.querySelector(".message").innerHTML = email.value;
}

function makeSomething() {
  let newElem = document.createElement("a");
  let text = document.createTextNode("Let me install a virus");

  newElem.appendChild(text);
  newElem.setAttribute("href", "https://lmgtfy.com");
  newElem.setAttribute("class", "made-link");
  document.body.appendChild(newElem);
}

document.querySelector(".add-link").onclick = makeSomething;

function nukeSomething() {
  let elemToRemove = document.querySelector(".made-link");
  let parent = elemToRemove.parentNode;
  parent.removeChild(elemToRemove);
}

document.querySelector(".remove-link").onclick = nukeSomething;
