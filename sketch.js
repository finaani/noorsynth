
var osc, fft;
let song;


function setup() {
  createCanvas(800, 800);

  }

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();


function draw() {
  background(173, 247, 143);


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

  var amp = map(mouseY, 0, height, 4, 0.5);
  osc.amp(amp);


}
