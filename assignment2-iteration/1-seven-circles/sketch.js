function setup() {
    createCanvas(400, 400)
    background(200)


    let numCircles = 7;
    let circleWidth = width/(numCircles * 3)
    let spacing = circleWidth;

    // the margin is calculated like this in order to center the circles.
    // 1. Find the total width of all the circles and their spacing
    // 2. subtract that total width from the width of the canvas
    // 3. divide that difference by 2 to get the left side margin (which is all we need)
    // note: it's "numCircles-1" because even though there are 7 circles, there are only
    // 6 spaces between them, and the first and last circle are counted as half circles
    // because a circle is drawn from the center of the circle.
    let margin = (width - ((spacing + circleWidth) * (numCircles-1))) / 2;

    for(let i = 0; i < numCircles; i++) {
        circle(margin + (i * circleWidth) + (i * spacing), width/3, circleWidth)
    }

    fill(0, 100)
    noStroke()

    // uncomment to show that the circles are perfectly centered
    // rect(0, 0, margin, height)
    // rect(width-margin, 0, margin, height)
}