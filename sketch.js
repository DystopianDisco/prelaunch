function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Place the canvas behind other elements
  fill(0, 0, 0, 0);
  stroke(200); // Set the wave color to light grey (RGB: 200, 200, 200)
}
function draw() {
  background(255); // Set the background color to white (RGB: 255, 255, 255)
  push();
  for (let y = 0; y < 900; y += 10) {
    beginShape();
    for (let x = 0; x < 900; x += 4) {
      vertex(
        x,
        y +
          120 * noise(x / 100, frameCount / 500 + y / 115) +
          60 * noise(y / 115, frameCount / 151)
      );
    }
    endShape();
  }
  pop();
}