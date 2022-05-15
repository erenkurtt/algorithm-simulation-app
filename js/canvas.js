
var canvasArea = {
    canvas: document.createElement("canvas"),
    start: function ( algoFunction ) {
        this.canvas.width = 860;
        this.canvas.height = 500;
        this.canvas.position = "absolute";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(algoFunction, 1000);

        // window.addEventListener('touchstart', function (e) {
        //     var touchobj = e.changedTouches[0];
        //     startx = parseInt(touchobj.clientX);
        //     starty = parseInt(touchobj.clientY);
        //     canvasArea.x = startx;
        //     canvasArea.y = starty;

        // }
        // )
        // window.addEventListener('touchend', function () {
        //     startx = false;
        //     starty = false;

        //     canvasArea.x = false;
        //     canvasArea.y = false;

        // }
        // )
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);

    }
}

function componenttext(text, x, y) {
    this.text = text
    this.x = x;
    this.y = y;

    this.update = function (color) {
        ctx = canvasArea.context;
        ctx.font = "31px Showcard Gothic ";
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
    }
}

function componentLine(moveToX, moveToY, lineToX, lineToY, weight, color) {
    this.moveToX = moveToX;
    this.moveToY = moveToY;
    this.lineToX = lineToX;
    this.lineToY = lineToY;
    this.weight = weight
    this.color = color;
    this.numberColor = 'black';

    this.update = function () {
        ctx = canvasArea.context;
        lineWeight = new componenttext(this.weight, (moveToX + lineToX)/2, (moveToY + lineToY)/2 - 10);
        lineWeight.update(this.numberColor);
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.moveToX, this.moveToY);
        ctx.lineTo(this.lineToX, this.lineToY);
        ctx.stroke();
    }
}
