var canva;

var gameState = 0;
var contestantCount, database;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(400,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
