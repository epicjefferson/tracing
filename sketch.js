var capture;
var frozen = true;
var button;

function setup() {
  createCanvas(640, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  img = createImage(320,240);

  button = createButton('freeze');
  button.mousePressed(pauseVid);

  console.log("frozen is " + frozen);

}

function draw() {
  background(255);

  // console.log(frozen);
  // starts off false
  if(frozen){
    // console.log("if frozen is TRUE");
    copy(capture,0,0,320,240,0,0,320,240);

  }
  // starts here
  else{
    // console.log("frozen is TRUE");

    image(capture, 0, 0);
    // filter('INVERT');
  }
}

function pauseVid() {
  if (frozen) {
    console.log("if frozen is TRUE");

    button.html('draw');
  } else {
    console.log("frozen is FALSE");

    button.html('freeze');
  }
  frozen = !frozen;
}
