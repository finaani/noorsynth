
var osc, fft;
//declare randomColor
//var randomColor;

function setup() {
  createCanvas(800, 800);

  }

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();


function draw() {
  background (255,26,141);


     //random gray
     //randomColor = color(random(255),random(255),random(255));

     fill (143,247,217);


  var waveform = fft.waveform();  // analyze the waveform
  beginShape();
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -2, 2, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  var freq = map(mouseX, 0, width, -50, 400);
  osc.freq(freq);

  var amp = map(mouseY, 0, height, 20, 1);
  osc.amp(amp);


}
