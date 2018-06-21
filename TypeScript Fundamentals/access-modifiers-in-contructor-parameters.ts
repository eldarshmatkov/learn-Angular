class Point {

constructor(private x?: number, private y?: number) {

}

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point();
point.draw();