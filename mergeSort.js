



let sortArr = [];
let valMergeArr = [];
let squareArrs = [];

function startMerge() {

    canvasArea.start(updateCanvasMerge);

    for (let i = 0; i < inputArr22.length; i++) {
        let squares = new compSquare(10 * 5 * i, 10, 50, 50);
        let newObj = new componenttext(inputArr22[i], 10 * 5 * i + 9, 50);
        valMergeArr.push(newObj);
        squareArrs.push(squares);
    }

    val1 = new componenttext(1, 600, 50)

}

function compSquare(x, y, width, height) {

    this.x = x;
    this.y = y;

    this.update = function () {
        ctx = canvasArea.context;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
    }
}



function updateCanvasMerge() {

    canvasArea.clear();

    valMergeArr.forEach(element => {

        element.update("black");
        squareArrs[valMergeArr.indexOf(element)].update();

    });




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

let inputArr22 = [92, 42, 61, 32, 69, 43, 18, 78];

//let inputArr2 = [ 92, 42, 61, 32, 69, 43, 18, 78,34,56,75,21,43,56];

//console.log(inputArr2);

mergeSort(inputArr22, 0, inputArr22.length - 1);

console.log(sortArr);