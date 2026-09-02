function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(200)
    let anchor = createVector(50, 50)
    let mouse = createVector(mouseX, mouseY)

    let lineLength = 10
    let gap = lineLength/2

    let numLines = floor(p5.Vector.dist(anchor, mouse) / (lineLength + gap))


}