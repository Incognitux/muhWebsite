const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/pfp.png") {
    myImage.setAttribute("src", "assets/pfpMirror.png");
  } else {
    myImage.setAttribute("src", "assets/pfp.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    const myName = prompt("Enter yo name bruv:");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello ${myName}, I am Incognitux`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}, I am Incognitux`;
}

myButton.addEventListener("click", () => {
    setUserName();
})