
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



function updateCanvasQuickSort() {
    let sortedArr = [];

    canvasArea.clear();

    deneme.text = pivot;
    deneme.x  =  10 * 5 * quickCounter ;

    deneme.update("blue");

    quickArr.forEach(element => {
        element.update("black");
    });

    

    if(quickSortArr[quickCounter] < pivot)
        leftArr.push(quickSortArr[quickCounter]);
    
    else if(quickSortArr[quickCounter] > pivot)
        rightArr.push(quickSortArr[quickCounter]);
    
    else if(quickSortArr[quickCounter] == pivot && quickCounter != pivot_i)
        equalArr.push(quickSortArr[quickCounter]);

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

    sortedArr.forEach(element => {
        if(element.text==pivot)
            element.update("blue");
        else
            element.update("black");
    });


    if(quickCounter == quickSortArr.length - 1)
        canvasArea.stop();

    quickCounter++;
}

let quickSortArr = [16, 15, 46, 2, 54, 6, 16, 98, 67, 103];
let pivot_i = Math.floor(Math.random() * quickSortArr.length);
let pivot = quickSortArr[pivot_i];
console.log(pivot);

