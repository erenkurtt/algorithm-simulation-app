let valArr = [];
let inputArr = [92, 42, 61, 32, 69];
var index = 0, i = 0, j = 0, timer = -1;

function startInsertionSort() {
    valArr = [];
    inputArr = [92, 42, 61, 32, 69];
    index = 0;
    i = 0;
    j = 0;
    timer = -1;

    canvasArea.stop();
    canvasArea.start(updateCanvasInsertionSort);

    for (let i = 0; i < inputArr.length; i++) {
        let newObj = new componenttext(inputArr[i], 10 * 5 * i, 50);
        valArr.push(newObj);
    }

    val1 = new componenttext(1, 600, 50);
}


// function Picture(width, height, picsrc, x, y) {
//     this.image = new Image();
//     this.image.src = picsrc;
//     this.width = width;
//     this.height = height;
//     this.speedY = 1;
//     this.count = 0;
//     this.counter = 0;
//     this.x = x;
//     this.y = y;

//     this.update = function () {
//         ctx = canvasArea.context;
//         ctx.drawImage(this.image,
//             this.x,
//             this.y,
//             this.width, this.height)
//     }
// }


function updateCanvasInsertionSort() {

    canvasArea.clear();

    val1.update("black")

    if (timer === -1) {

        valArr.forEach(element => {

            element.update("black");


        });
    }

    if (index < 1) {
        insertionSort(inputArr);
    }

    index++;

    j = 0;

    if (i < allArr.length && timer >= 0) {


        while (j < valArr.length) {

            valArr[j].text = allArr[i][j];

            j++
        }

        if (i < allArr.length - 1 && timer % 2 === 0) {
            returnChanges(comparasion[i]);
        }
        else if (timer % 2 === 1 && (i < comparasion.length)) {
            waitChanges(comparasion[i - 1], comparasion[i])
        }
        else {

            valArr.forEach(element => {
                element.y = 50
                element.update("blue");


            });

        }

        val1.text = i;

    } else if (i === allArr.length) {

        valArr.forEach(element => {

            element.update("blue");


        });
        canvasArea.stop()
    }

    if (timer % 2 === 0) {
        i++;
    }

    timer++;

}




var allArr = new Array();
var comparasion = new Array();

function insertionSort(inputArr) {

    let n = inputArr.length;

    for (let i = 1; i < n; i++) {

        let temp = inputArr[i];

        let j = i - 1;

        while ((j >= 0) && (temp < inputArr[j])) {

            comparasion.push({ currentIndex: j + 1, comparasedIndex: j })
            let tempArr = [...inputArr];

            allArr.push(tempArr);

            inputArr[j + 1] = inputArr[j];
            inputArr[j] = temp;
            j--;

        }

        //   inputArr[j+1] = temp;
    }
    let tempArr = [...inputArr];
    allArr.push(tempArr);

    console.log(comparasion)

}


function returnChanges(obj) {

    valArr.forEach(element => {
        element.y = 50
        if (valArr.indexOf(element) === obj.currentIndex) {
            element.y += 50
            element.update("green");

        } else if (valArr.indexOf(element) === obj.comparasedIndex) {
            element.update("red")

        } else {

            element.update("black");
        }


    });

}

function waitChanges(obj, nextObj) {

    valArr.forEach(element => {
        element.y = 50
        if (valArr.indexOf(element) === obj.comparasedIndex) {

            if (obj.currentIndex > nextObj.currentIndex) {
                element.y += 50
                console.log(obj)
            }
            element.update("green");


        } else if (valArr.indexOf(element) === obj.currentIndex) {
            element.update("red")

        } else {

            element.update("black");
        }

    });

}