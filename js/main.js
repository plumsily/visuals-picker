document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("yellow").onclick = partyYellow;
document.getElementById("bpm-switch").onclick = toggleBPM;
document.getElementById("beat-small").onclick = setBeatSm;
document.getElementById("beat-medium").onclick = setBeatMd;
document.getElementById("beat-large").onclick = setBeatLg;

let slider = document.getElementById("bpm-range");
let output = document.getElementById("bpm-value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  document.querySelector(".background").style.animationDuration = `${
    1 / (this.value / 60)
  }s`;
};

function partyPurple() {
  document.querySelector(".background").style.background =
    "url(https://i.giphy.com/Id6QAoJlekX3mkWIZj.gif) no-repeat center center";
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
  document.querySelector(".background").style.background =
    "url(https://i.giphy.com/QqDXvbotoEvhEhFQ8H.gif) no-repeat center center";
  document.querySelector(".background").style.backgroundSize = "cover";

  //   document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
  document.querySelector("body").style.color = "black";
}

function partyYellow() {
  document.querySelector(".background").style.background =
    "url(https://i.giphy.com/VJHGm6V1szmCTrGJSl.gif) no-repeat center center";
  document.querySelector(".background").style.backgroundSize = "cover";

  //   document.querySelector("body").style.backgroundColor = "rgb(255, 254, 0)";
  document.querySelector("body").style.color = "black";
}

function toggleBPM() {
  if (
    document.querySelector(".background").style.animationPlayState === "paused"
  ) {
    document.querySelector(".background").style.animationPlayState = "running";
    document.getElementById("bpm-switch").style.backgroundColor =
      "rgba(60,179,113,0.8)";
  } else {
    document.querySelector(".background").style.animationPlayState = "paused";
    document.getElementById("bpm-switch").style.backgroundColor =
      "rgba(60,179,113,0)";
  }
}

function setBeatSm() {
  document.querySelector(".background").style.animationName = "beatSm";
  document.getElementById("beat-small").style.backgroundColor =
    "rgba(60,179,113,0.8)";
  document.getElementById("beat-medium").style.backgroundColor =
    "rgba(60,179,113,0)";
  document.getElementById("beat-large").style.backgroundColor =
    "rgba(60,179,113,0)";
}
function setBeatMd() {
  document.querySelector(".background").style.animationName = "beatMd";
  document.getElementById("beat-small").style.backgroundColor =
    "rgba(60,179,113,0)";
  document.getElementById("beat-medium").style.backgroundColor =
    "rgba(60,179,113,0.8)";
  document.getElementById("beat-large").style.backgroundColor =
    "rgba(60,179,113,0)";
}
function setBeatLg() {
  document.querySelector(".background").style.animationName = "beatLg";
  document.getElementById("beat-small").style.backgroundColor =
    "rgba(60,179,113,0)";
  document.getElementById("beat-medium").style.backgroundColor =
    "rgba(60,179,113,0)";
  document.getElementById("beat-large").style.backgroundColor =
    "rgba(60,179,113,0.8)";
}
