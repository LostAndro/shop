var sandy=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    background(173,216,230); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {

  //circle
  stroke(255,255,255,67); // an RGB color for the circle's border
  fill(255,255,255,67); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),mouseY,50); // center of canvas, 20px dia
  //circle
  stroke(255,255,255); // an RGB color for the circle's border
  fill(102,178,255,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(sandy,mouseY,mouseX,60); // center of canvas, 20px dia
  
}

  function mousePressed(){
    if (sandy>=300){
      sandy=0;
  } else{
    sandy=sandy+5;
  }
  }