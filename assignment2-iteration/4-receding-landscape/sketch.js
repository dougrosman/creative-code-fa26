function setup() {
    createCanvas(400, 400)
    
}

function draw() {
    background(200)

    // let foregroundWidth = width * map(mouseX, 0, width, .1, 32);
    let foregroundWidth = width * 10;
    let backgroundWidth = width;
    let foregroundStartX = (backgroundWidth - foregroundWidth) / 2
    let foregroundEndX = (foregroundWidth - backgroundWidth) / 2

    let numLines = 100;
    let step = width/numLines

    for(let i = 0; i < numLines; i++) {

        let foregroundX = map(i, 0, numLines, foregroundStartX, foregroundEndX)

        line(foregroundX + (i * step), height, i * step, 0)
    }
}