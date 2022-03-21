
let quickArr = [];
let newArr = [];
let leftArr = [];
let equalArr = [];
let rightArr = [];

function startQuickSort() {

    canvasArea.stop();

    canvasArea.start(updateCanvasQuickSort);

    for (let i = 0; i < quickSortArr.length; i++) {
        let newObj = new componenttext(quickSortArr[i], 10 * 5 * i, 50);
        quickArr.push(newObj);
    }


    deneme  =  new componenttext(  i , 10 * 5 * i, 150);
}

let quickCounter = 0;

let red_num;

function updateCanvasQuickSort() {
    let sortedArr = [];

    canvasArea.clear();

    //canvasArea.context.clearRect(0, 50, canvasArea.canvas.width, canvasArea.canvas.height)

    deneme.text = pivot;
    deneme.x  =  10 * 5 * quickCounter ;

    deneme.update("blue");

    quickArr.forEach(element => {
        element.update("black");
    });


    newArr=[
        ...leftArr,
        ...[pivot],
        ...equalArr,
        ...rightArr
      ]

    for (let i = 0; i < newArr.length; i++) {
        let newObj = new componenttext(newArr[i], 10 * 5 * i, 100);
        sortedArr.push(newObj);
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

    if(quickCounter == quickSortArr.length)
        canvasArea.stop();

    quickCounter++;
}

let quickSortArr = [16, 15, 46, 2, 54, 6, 16, 98, 67, 103];
let pivot_i = Math.floor(Math.random() * quickSortArr.length);
let pivot = quickSortArr[pivot_i];
console.log(pivot);

