function setup() {
    createCanvas(400, 400)
    background(200)

    let numRectangles = 14
    let margin = height/numRectangles

    let rectWidth = (width - margin*2)/numRectangles
    let rectHeight = (height - margin*2)/numRectangles

    

    for(let i = 0; i < numRectangles; i++) {
        fill(i*(255/numRectangles))
        rect(margin + (i*rectWidth), height - rectHeight * (i+1) - margin, rectWidth, rectHeight * (i+1))
    }
}