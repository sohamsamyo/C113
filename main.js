function preload() {

}

function setup() {
    canvas = createCanvas(600,600);
    canvas.position(450,250);
    video = createCapture(VIDEO);
    video.hide();


  let c = color(0, 225, 0);

  noStroke();
  fill(c);

  let greenValue = green(c);
  fill(0, greenValue, 0);
}

function draw() {

    image(video,150,150,300,300);

    circle(50,50,100);
    circle(50,550,100);
    circle(550,50,100);
    circle(550,550,100);


    rect(40, 100, 20, 400);
    rect(100, 40, 400, 20);
    rect(100, 540, 400, 20);
    rect(540, 100, 20, 400);
  
}    
 
function take_snapshot(){
    save('Birthday_photoC113project.png ');
}
