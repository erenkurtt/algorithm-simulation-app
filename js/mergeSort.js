



let sortArr = [];
let valMergeArr = [];
let squareArrs = [];

let list_of_square = []; 
let list_of_seperated = []; 

function startMergeSort() {
    canvasArea.stop();

    canvasArea.start(updateCanvasMergeSort);

    for (let i = 0; i < inputArr22.length; i++) {
        let squares = new compSquare(10 * 5 * i, 10, 50, 50);
        let newObj = new componenttext(inputArr22First[i], 10 * 5 * i + 9, 50);
        valMergeArr.push(newObj);
        squareArrs.push(squares);
    }

    sortArr.forEach(element => {

        let tempItems = [] ;
        let tempSquares = [];
        element.forEach(item => {
          
            let squares = new compSquare(10 * 5 * i, 10, 50, 50);
            let newObj = new componenttext(item, 10 * 5 * i + 9, 50);
            tempSquares.push(squares);
            tempItems.push( newObj );
        });
        list_of_square.push(tempSquares);
        list_of_seperated.push(tempItems);

        
    });

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


function updateCanvasMergeSort() {

    canvasArea.clear();

    valMergeArr.forEach(element => {

        element.update("black");
        squareArrs[valMergeArr.indexOf(element)].update(10 * 5 *  valMergeArr.indexOf(element) , 10 );

    });

    if(mergeTimer < 50 ){

        while(sortCount  <= mergeTimer ){
            
            // for (let index = 0; index <= sortCount; index++) {

            //     // list_of_square[index].forEach(element => {
            //     //     element.update(10 * 5 *  index , 10 *  index  + 20);
            //     // });
            //     // list_of_seperated[index].forEach(element => {
            //     //     element.x = 10 * 5 * i + 9 ; 
            //     //     element.y  =  50  * index; 
            //     //     element.update("black");
            //     // })
            // }
            list_of_seperated[0].forEach(element => {
                element.x = 10 * 5 * list_of_seperated[0].indexOf(element) + 9 ; 
                element.y  =  100  ; 
                element.update("black");
                list_of_square[0][list_of_seperated[0].indexOf(element)].update(10 * 5 *  list_of_seperated[0].indexOf(element) , 60 );
        
            });

            sortCount++;
        }
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

let inputArr22 = [92, 42, 61, 32, 69, 43, 18, 78 ,34,56,75];
let inputArr22First = [92, 42, 61, 32, 69, 43, 18, 78 ,34,56,75];
//let inputArr2 = [ 92, 42, 61, 32, 69, 43, 18, 78,34,56,75,21,43,56];

//console.log(inputArr2);

mergeSort(inputArr22, 0, inputArr22.length - 1);

console.log(sortArr);