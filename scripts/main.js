const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/pfp.png") {
    myImage.setAttribute("src", "assets/pfpMirror.png");
  } else {
    myImage.setAttribute("src", "assets/pfp.png");
  }
});
