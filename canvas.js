let valArr = [];

function startApp() {

    canvasArea.start();

  



    for (let i = 0; i < inputArr.length; i++) {
        let newObj = new componenttext(inputArr[i], 10 * 5 * i, 50);
        valArr.push(newObj);
    }

    val1 = new  componenttext( 1, 600, 50)
    
}



let inputArr = [92, 42, 61, 32, 69];


var canvasArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 700;
        this.canvas.height = 400;
        this.canvas.position = "absolute";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateCanvasArea, 2000);

        window.addEventListener('touchstart', function (e) {
            var touchobj = e.changedTouches[0];
            startx = parseInt(touchobj.clientX);
            starty = parseInt(touchobj.clientY);
            canvasArea.x = startx;
            canvasArea.y = starty;

        }
        )
        window.addEventListener('touchend', function () {
            startx = false;
            starty = false;

            canvasArea.x = false;
            canvasArea.y = false;

        }
        )

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);

    }
}


function Picture(width, height, picsrc, x, y) {
    this.image = new Image();
    this.image.src = picsrc;
    this.width = width;
    this.height = height;
    this.speedY = 1;
    this.count = 0;
    this.counter = 0;
    this.x = x;
    this.y = y;

    this.update = function () {
        ctx = canvasArea.context;
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height)
    }
}
function componenttext(text, x, y) {
    this.text = text
    this.x = x;
    this.y = y;

    this.update = function () {
        ctx = canvasArea.context;
        ctx.font = "31px Showcard Gothic ";
        ctx.fillStyle = "black";
        ctx.fillText(this.text, this.x, this.y);
    }
}

var index = 0 , i = 0, j = 0;  

function updateCanvasArea() {


    canvasArea.clear();
    
    val1.update()

    valArr.forEach(element => {
        element.update();
    });

    if(index < 1){
        insertionSort(inputArr);
    }
   
    index++;

    j=0;

    if( i < allArr.length ) {
       

            while( j < valArr.length ){
     
                valArr[j].text = allArr[i][j];
             
                j++
            }

    }

    i++
    

    val1.text += 1 ;



}



var allArr = new Array();

function insertionSort(inputArr) {

    let n = inputArr.length;

    for (let i = 1; i < n; i++) {

        let temp = inputArr[i];

        let j = i - 1;

        while ((j >= 0) && (temp < inputArr[j])) {
         

            let tempArr =[...inputArr];

            allArr.push(tempArr);

            inputArr[j + 1] = inputArr[j];
            inputArr[j] = temp;
            j--;
            
          
        }
       
        //   inputArr[j+1] = temp;
    }
    let tempArr =[...inputArr];
    allArr.push(tempArr);

   


    
}