var BG
var tom,jerry
var mouse,mouse2,mouse3,cat,cat2,cat3;
function preload() {
    //load the images here
    BG =loadImage("images/garden.png");
    cat =loadAnimation("images/cat2.png","images/cat3.png");
    cat2 =loadAnimation("images/cat1.png");
    cat3 =loadAnimation("images/cat4.png");
    mouse =loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse2 =loadAnimation("images/mouse1.png");
    mouse3 =loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom=createSprite(800,700)
 tom.addAnimation('catlay',cat2)
 tom.scale =0.19;

 jerry=createSprite(100,650)
 jerry.addAnimation('mousestanding',mouse2)
 jerry.scale =0.1;
}

function draw() {

    background(BG);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0;
tom.addAnimation('happy',cat3);
tom.x =300;
tom.scale =0.2;
tom.changeAnimation('happy');

jerry.addAnimation('happyl',mouse3);
jerry.scale=0.1;
jerry.changeAnimation('happyl');



}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
jerry.addAnimation('Tease',mouse);
jerry.frameDelay= 30;
jerry.changeAnimation('Tease')


tom.velocityX = -5;
tom.addAnimation('angry',cat);
tom.changeAnimation('angry')


}




}
