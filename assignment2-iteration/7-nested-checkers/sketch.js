function setup() {
    createCanvas(400, 400)
    background(200)

    let numCheckers = 8;

    let checkerWidth = width/numCheckers;

    for(let y = 0; y < numCheckers; y++) {
        for(let x = 0; x < numCheckers; x++) {

            if(y % 2 == 0) {
                if(x % 2 == 0) {
                    fill(255)
                } else {
                    fill(0)
                }
                square(x * checkerWidth, y * checkerWidth, checkerWidth)
            } else {
                if(x % 2 == 0) {
                    fill(0)
                } else {
                    fill(255)
                }
                square(x * checkerWidth, y * checkerWidth, checkerWidth)
            }
            
        }
    }

}