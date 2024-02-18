let pencilX, pencilY;
let selectedColor = "black";
let selectedStroke = document.getElementById("sizeSelect").value;
let userSelectedCustom = false;

function exportImage() {
  saveCanvas(canvas, "PaintJSExport", "png");
}

function preload() {}
function setup() {
  canvas = createCanvas(window.innerWidth * 0.92, window.innerHeight * 0.89);
  background(255);
}
function draw() {
  frameRate(144);
  cursor("img/pencil2.png", 1, 16);
  document.getElementById("sizeOutput").innerText = "Stroke: " + document.getElementById("sizeSelect").value;

    if (userSelectedCustom) {
      selectedColor = document.getElementById("customColor").value;
    }

  if (
    mouseIsPressed &&
    mouseX > 0 &&
    mouseX < width &&
    mouseY > 0 &&
    mouseY < height
  ) {
    selectedStroke = document.getElementById("sizeSelect").value;
    stroke(selectedColor);
    strokeWeight(selectedStroke);
    line(pencilX, pencilY, mouseX, mouseY);
    pencilX = mouseX;
    pencilY = mouseY;
  } else {
    pencilX = NaN;
    pencilY = NaN;
  }
}

function eraseCanvas() {
  background(255);
}
function bucket(){
  background(selectedColor);
}

function Selected(colorId) {
  let colorButtons = document.getElementsByClassName("color");
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].classList.remove("selected");
  }

  document.getElementById(colorId).classList.add("selected");

  if (colorId !== "color14") {
    userSelectedCustom = false;
  }

  switch (colorId) {
    case "color1":
      console.log("red selected");
      selectedColor = "red";
      break;

    case "color2":
      console.log("lime selected");
      selectedColor = "lime";
      break;

    case "color3":
      console.log("blue selected");
      selectedColor = "blue";
      break;

    case "color4":
      console.log("green selected");
      selectedColor = "green";
      break;

    case "color5":
      console.log("aqua selected");
      selectedColor = "aqua";
      break;

    case "color6":
      console.log("orange selected");
      selectedColor = "#FFA500";
      break;

    case "color7":
      console.log("pink selected");
      selectedColor = "#ff00ff";
      break;

    case "color8":
      console.log("purple selected");
      selectedColor = "#7300ff";
      break;

    case "color9":
      console.log("yellow selected");
      selectedColor = "yellow";
      break;

    case "color10":
      console.log("brown selected");
      selectedColor = "#5e3a0a";
      break;

    case "color11":
      console.log("black selected");
      selectedColor = "black";
      break;

    case "color12":
      console.log("eraser selected");
      selectedColor = "white";
      break;
    case "color13":
      console.log("clear selected");
      break;

    case "color14":
      console.log("user selected custom color");
      userSelectedCustom = true;
      break;
    case "color15":
        console.log("user selected bucket");
        bucket();
        break;
    default:
      break;
  }
}
