



let sortArr = [];
let valMergeArr = [];
let squareArrs = [];

let list_of_square = []; 
let list_of_seperated = []; 

let inputArr22 = [92, 42, 61, 32, 69, 43, 18, 78 ,34,56,75];
let inputArr22First = [92, 42, 61, 32, 69, 43, 18, 78 ,34,56,75];
//let inputArr2 = [ 92, 42, 61, 32, 69, 43, 18, 78,34,56,75,21,43,56];
let allVariablesArray = [];
let allSquaresArray = [];
//console.log(inputArr2);

mergeSort(inputArr22, 0, inputArr22.length - 1);

console.log(sortArr);

function startMergeSort() {
    canvasArea.stop();

    canvasArea.start(updateCanvasMergeSort);

    for (let i = 0; i < inputArr22.length; i++) {
        let squares = new compSquare(10 * 5 * i, 10, 50, 50);
        let newObj = new componenttext(inputArr22First[i], 10 * 5 * i + 9, 40);
        valMergeArr.push(newObj);
        squareArrs.push(squares);
    }

    for (let i = 0; i < sortArr.length; i++){
        let tempValArr = [];
        let tempSquareArr = [];
        for(let j = 0; j < sortArr[i].length; j++){
            let squares = new compSquare(50 * j, 10, 50, 50);
            let newObj = new componenttext(sortArr[i][j], 50 * j + 9, 40);
            tempValArr.push(newObj);
            tempSquareArr.push(squares);
        }
        allVariablesArray.push(tempValArr);
        allSquaresArray.push(tempSquareArr);
    }

    // sortArr.forEach(element => {

    //     let tempItems = [] ;
    //     let tempSquares = [];
    //     element.forEach(item => {
          
    //         let squares = new compSquare(10 * 5 * i, 10, 50, 50);
    //         let newObj = new componenttext(item, 10 * 5 * i + 9, 50);
    //         tempSquares.push(squares);
    //         tempItems.push( newObj );
    //     });
    //     list_of_square.push(tempSquares);
    //     list_of_seperated.push(tempItems);

        
    // });

     console.log(list_of_seperated)
}

function compSquare(x, y, width, height) {

    this.x = x;
    this.y = y;

    this.update = function (x , y) {
        ctx = canvasArea.context;
        ctx.beginPath();
        ctx.rect( x, y, width, height);
        ctx.stroke();
    }
}

let mergeTimer = 0 , sortCount = 0;
let countForRight = 0;
let countForLeft = 0;

function updateCanvasMergeSort() {

    //canvasArea.clear();
    if(mergeTimer < 1) {
        valMergeArr.forEach((element, i) => { 
            element.update("black");
            squareArrs[i].update(10 * 5 * i, 60 * mergeTimer);

        });
    }

    if(mergeTimer < allVariablesArray.length){
        allVariablesArray[mergeTimer].forEach((element, i) => {

            if(mergeTimer % 2 === 1){
                element.y += 60 * (countForRight);
                element.x += 50 * (allVariablesArray[mergeTimer].length+2);
                allSquaresArray[mergeTimer][i].update(10 * 5 * i + 50 * (allVariablesArray[mergeTimer].length + 2), 60 * (countForRight));
                
            }
            else{
                element.y += 60*(countForLeft+1);
                allSquaresArray[mergeTimer][i].update(10 * 5 * i, 60 * (countForLeft+1));
            }
            element.update('black');

        })

    }
    if(mergeTimer % 2 === 1){
        countForLeft++;
    } else {
        countForRight++;
    }
    mergeTimer++;
}

function merge(arr, left, middle, right) {
    // let newArr = arr.slice(left,right+1);
    // console.log("merge");
    // console.log(newArr);

    let n1 = middle - left + 1;
    let n2 = right - middle;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];

    for (let j = 0; j < n2; j++)
        R[j] = arr[middle + 1 + j];

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    //let newArr = arr.slice(left,right+1);
    //sortArr.push(newArr);
    //console.log("merge");
    //console.log(newArr);

    if (left >= right) {
        return;
    }

    let middle = left + parseInt((right - left) / 2);

    let newArrLeft = arr.slice(left, middle + 1);
    sortArr.push(newArrLeft);
    let newArrRight = arr.slice(middle + 1, right + 1);
    sortArr.push(newArrRight);
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    merge(arr, left, middle, right);
}

