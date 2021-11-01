var spookyRoom 
var security
const accessCode1 = "DIAMOND"

function preload(){
  spookyRoom = loadImage("images/Spooky room.jpeg")

}

function setup(){
createCanvas(1450, 700)
security = new Security()


}

function draw(){
background(spookyRoom);

clues();
security.display();
}

function clues(){
  fill("white")
  textSize(15);
  text("What is very shiny and very costly?",100,50);
  fill("cyan")
  text("Hint : This is required to beat the game, or to save your family...", 100, 70)
}
