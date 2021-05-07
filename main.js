//variable for gameState
let gameState;
//image loading variable for start wallpaper
let start;
//image loading variable for log in with guest
let guestbutton;
//image loading variable for log in with email
let emailbutton;
function preload() {
  start = loadImage("assets/start wallpaer.png");
  guestbutton=loadImage("assets/guestbutton.png");
  emailbutton=loadImage("assets/emailbutton.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameState = "start";
}

function draw() {
  background(255);
  if (gameState === "start") {
    push();
    imageMode(CENTER);
    image(start, width / 2, height / 2, width, height);
    image(guestbutton,width/2.5,height/4,width/1.5,height);
    image(emailbutton,width/2.5,height/1.4,width/1.6,height);
    pop();
  }
}