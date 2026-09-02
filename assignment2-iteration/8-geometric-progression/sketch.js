function setup() {
    createCanvas(400, 400)
    background(200)

    let numCircles = 22
    let diameter = 5
    let lineThickness = .2

    for(let i = 0; i < numCircles; i++) {

        noFill();
        strokeWeight(lineThickness)
        circle(width/2, height, diameter)

        diameter*=1.3
        lineThickness*=1.3
    }
}