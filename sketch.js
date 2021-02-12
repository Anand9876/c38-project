var canvas;
var gameState=0;
var runnerCount;
var database;
var game;
var form;
var runner;
var allrunner;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  if(runnerCount === 4){
    game.update(1);
    } 
    if(gameState === 1){
       clear();
        game.play();
        }
  
}
