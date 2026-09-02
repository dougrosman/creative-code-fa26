function setup() {
    createCanvas(400, 400)
    background(200)

    let numLines = 8
    
    let step = (width/numLines)
    let margin = step/2;
    
    for(let i = 0; i < width; i+=step) {
        
        strokeWeight(4)
        stroke(0)
        line(i + margin, height-margin, margin, i + margin)

        strokeWeight(8)
        stroke(255, 0, 0)
        point(i + margin, height-margin)

        stroke(0, 255, 0)
        point(margin, i + margin)
    }
}