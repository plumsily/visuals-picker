document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("yellow").onclick = partyYellow;
document.getElementById("gif").onclick = partyGif;
// document.getElementById("gif-base").style.display = "none";

function partyPurple() {
  document.querySelector(".background").style.background =
    "url(https://i.giphy.com/JpScsr53qh6sR6dSeJ.gif) no-repeat center center";
  document.querySelector(".background").style.backgroundSize = "cover";

  // document.querySelector("body").style.backgroundColor = "rgba(241,63,247,1)";
  document.querySelector("body").style.color = "white";
}

function partyGreen() {
  document.querySelector(".background").style.background =
    "url(https://i.giphy.com/KE2bkE27ghVoIxwWCl.gif) no-repeat center center";
  document.querySelector(".background").style.backgroundSize = "cover";

  // document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
  document.querySelector("body").style.color = "white";
}

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
  document.querySelector("body").style.color = "white";
}

function partyYellow() {
  document.querySelector("body").style.backgroundColor = "rgb(255, 254, 0)";
  document.querySelector("body").style.color = "black";
}

function partyGif() {
  document.getElementById("gif").style.display = "none";
  document.querySelector("body").style.color = "black";
}
