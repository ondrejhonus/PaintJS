let prevX, prevY;
let selectedColor = "black";

function preload() {}
function setup() {
  canvas = createCanvas(window.innerWidth * 0.92, window.innerHeight * 0.89);
  background(255);
}
function draw() {
  if (mouseIsPressed) {
    stroke(selectedColor);
    strokeWeight(10);
    if (prevX !== undefined && prevY !== undefined) {
      line(prevX, prevY, mouseX, mouseY);
    }
    prevX = mouseX;
    prevY = mouseY;
  } else {
    prevX = undefined;
    prevY = undefined;
  }
}

function Selected(colorId) {
  let colorButtons = document.getElementsByClassName("color");
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].classList.remove("selected");
  }

  document.getElementById(colorId).classList.add("selected");

  switch (colorId) {
    case "color1":
      console.log("red selected");
      selectedColor = 'red';
      break;

    case "color2":
      console.log("lime selected");
      selectedColor = 'lime';
      break;

    case "color3":
      console.log("blue selected");
      selectedColor = 'blue';
      break;

    case "color4":
      console.log("green selected");
      selectedColor = 'green';
      break;

    case "color5":
      console.log("aqua selected");
      selectedColor = 'aqua';
      break;

    case "color6":
      console.log("orange selected");
      selectedColor = '#FFA500';
      break;

    case "color7":
      console.log("pink selected");
      selectedColor = '#ff00ff';
      break;

    case "color8":
      console.log("purple selected");
      selectedColor = '#7300ff';
      break;

    case "color9":
      console.log("yellow selected");
      selectedColor = 'yellow';
      break;

    case "color10":
      console.log("brown selected");
      selectedColor = '#331405';
      break;

    case "color11":
      console.log("black selected");
      selectedColor = 'black';
      break;

    case "color12":
      console.log("eraser selected");
      selectedColor = 'white';
      break;

    default:
      break;
  }
}
