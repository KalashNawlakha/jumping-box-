var canvas;
var music;
var surface1 ; 
var surface2;
var surface3; 
var box ;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(280,600,150,30)
    surface2 = createSprite(10,600,150,30)
    surface3 = createSprite(600,600,150,30)


    box.ShapeColor = "black"
    surface1.ShapeColor = "red"
    surface2.ShapeColor = "blue"
    surface3.ShapeColor = "green"

    //create box sprite and give velocity
    createCanavas =  600,100 
    box = createSprite(random(20,750))
    box.velocityY = 3 ; 


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



drawSprites();






    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1))
    && (surface2.isTouching(box) && box.bounceOff(surface2))
    {
        box.shapeColor = rgb (255,128,0)
        music.stop();
        box.velocityX = 0 

    }
}

    
}



























