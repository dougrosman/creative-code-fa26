function setup() {
    createCanvas(400, 400)
    background(200)

}

function draw() {
    background(200)

    let margin = 40;
    let numLines = 10;
    let range = width - margin

    for(let i = 0; i < numLines; i++) {

        let anchorX = map(i, 0, numLines, margin, range)

        strokeWeight(2)
        line(anchorX, margin, mouseX, mouseY)
        
    }
}