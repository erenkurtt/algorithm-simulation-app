
let quickArr = [];
let newArr = [];
let leftArr = [];
let equalArr = [];
let rightArr = [];

function startQuickSort() {

    canvasArea.stop();

    canvasArea.start(updateCanvasQuickSort);

    i = Math.floor((canvasArea.canvas.width/50 - quickSortArr.length)/2) ;
    console.log(i);
    for (let j = 0; j < quickSortArr.length; j++) {
        let newObj = new componenttext(quickSortArr[j], 10 * 5 * i, 50);
        //let newObj = new componenttext(quickSortArr[j], 10 * 5 * j, 50);
        quickArr.push(newObj);
        console.log(i);
        i++;
    }

    deneme  =  new componenttext(  i , 10 * 5 * i, 350);
}

let quickCounter = 0;

let red_num;

let row = 1;

function updateCanvasQuickSort() {
    quickArr.forEach(element => {
        element.update("white");
    });

    //canvasArea.clear();

    canvasArea.context.clearRect(0, 50, canvasArea.canvas.width, canvasArea.canvas.height)

    deneme.text = pivot;
    deneme.x  =  10 * 5 * quickCounter;

    deneme.update("blue");

    quickArr.forEach(element => {
        element.update("black");
    });


    addRow(row);
}

function addRow (row) {
    let sortedArr = [];

    newArr=[
        ...leftArr,
        ...[pivot],
        ...equalArr,
        ...rightArr
    ];

    console.log(newArr);

    i = canvasArea.canvas.width/100 - leftArr.length;

    for (let j = 0; j < newArr.length; j++) {
        let newObj = new componenttext(newArr[j], 10 * 5 * i, (row+1)*50);
        sortedArr.push(newObj);
        i++;
    }

    for(let i=0; i<sortedArr.length; i++){

        if(i == red_num)
            sortedArr[i].update("red");

        else if(sortedArr[i].text==pivot)
            sortedArr[i].update("blue");

        else
            sortedArr[i].update("black");
    }

    if(quickSortArr[quickCounter] < pivot){
        leftArr.push(quickSortArr[quickCounter]);
        red_num = leftArr.length - 1;
    }

    else if(quickSortArr[quickCounter] > pivot){
        rightArr.push(quickSortArr[quickCounter]);
        red_num = leftArr.length + equalArr.length + rightArr.length;
    }

    else if(quickSortArr[quickCounter] == pivot && quickCounter != pivot_i){
        equalArr.push(quickSortArr[quickCounter]);
        red_num = leftArr.length + equalArr.length;
    }
    console.log(row);

    if(quickCounter == quickSortArr.length){
        if(row==1){
            quickCounter=0;
            leftArr = [];
            rightArr = [];
            equalArr = [];
            row++;
            console.log(row);
            addRow(row);
        }
        else
            canvasArea.stop();
    }
    quickCounter++;

}



let quickSortArr = [16, 15, 46, 2, 54, 6, 16, 98, 67, 103];
let pivot_i = Math.floor(Math.random() * quickSortArr.length);
let pivot = quickSortArr[pivot_i];
console.log(pivot);