//let button;

function setup() {
    createCanvas(400, 400)
    //button = createButton("New Color")
}

function draw() {
    background(200)

    let numLines = 17
    let rectWidth = width/(numLines + 2)
    let margin = rectWidth

    for(let i = 0; i < numLines; i++) {

        // let r = map(i, 0, numLines, 255, 0)
        let g = map(i, 0, numLines, 255, 0)
        let b = map(i, 0, numLines, 0, 255)

        stroke(255)
        strokeWeight(2)
        fill(255, g, b)
        rect(margin + (i*rectWidth), margin, rectWidth, height - margin*2)
    }

    // button.mousePressed(function(){
    //     console.log("ok")
    // })
}