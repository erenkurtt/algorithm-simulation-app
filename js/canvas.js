
var canvasArea = {
    canvas: document.createElement("canvas"),
    start: function ( algoFunction ) {
        this.canvas.width = 860;
        this.canvas.height = 400;
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