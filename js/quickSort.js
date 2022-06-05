let quickArr = [];
let newArr = [];
let leftArr = [];
let equalArr = [];
let rightArr = [];
let quickCounter = 0;
let red_num;
let row = 0;
let quickSortArr = [103, 32, 15, 98, 46, 2, 54, 6, 67];
let pivot_i = 6; //Math.floor(Math.random() * quickSortArr.length);
let pivot = quickSortArr[pivot_i];

function startQuickSort() {

    quickArr = [];
    newArr = [];
    leftArr = [];
    equalArr = [];
    rightArr = [];
    quickCounter = 0;
    red_num;
    row = 1;
    quickSortArr = [103, 32, 15, 98, 46, 2, 54, 6, 67];
    pivot_i = 6; //Math.floor(Math.random() * quickSortArr.length);
    pivot = quickSortArr[pivot_i];

    canvasArea.stop();

    canvasArea.start(updateCanvasQuickSort);

    i = Math.floor((canvasArea.canvas.width/50 - quickSortArr.length)/2) ;
    for (let j = 0; j < quickSortArr.length; j++) {
        let newObj = new componenttext(quickSortArr[j], 10 * 5 * i, 50);
        quickArr.push(newObj);
        i++;
    }

    line1  =  new componenttext(  "" , 150, 200);
    line2  =  new componenttext(  "" , 300, 250);

}


function updateCanvasQuickSort() {
    quickArr.forEach(element => {
        element.update("white");
    });

    //canvasArea.clear();
    //if(quickCounter <= quickSortArr.length+2)
        canvasArea.context.clearRect(0, 50*row, canvasArea.canvas.width, canvasArea.canvas.height)

    if(quickCounter >= quickSortArr.length+2){
        line1.text = "Now,  We  know  the  index  of  54  in  sorted  array."
        line2.text = "Index  of  54 = 5"
        line1.update("blue");
        line2.update("blue");
    }

    quickArr.forEach(element => {
        element.update("black");
    });

    let sortedArr = [];

    newArr=[
        ...leftArr,
        ...[pivot],
        ...equalArr,
        ...rightArr
    ];

    i = canvasArea.canvas.width/100 - leftArr.length;

    if(quickCounter < quickSortArr.length+2){
        for (let j = 0; j < newArr.length; j++) {
            let newObj = new componenttext(newArr[j], 10 * 5 * i, (row+1)*50);
            sortedArr.push(newObj);
            i++;
        }
    }
    else{
        for (let j = 0; j < newArr.length; j++) {
            let x;
            if(j<5)
                x=i-1;
            else{
                if(j==5)
                    x = i;
                else
                    x=i+1;
            }

            let newObj = new componenttext(newArr[j], 10 * 5 * x, (row+1)*50);
            sortedArr.push(newObj);
            i++;
        } 
    }

    for(let i=0; i<sortedArr.length; i++){

        if(i == red_num && quickCounter<quickSortArr.length+2)
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

    if(quickCounter == quickSortArr.length+2){
        canvasArea.stop();
            // quickSortArr = [...leftArr];
            // if(quickSortArr.length>1){

            //     pivot_i = Math.floor(Math.random() * quickSortArr.length);
            //     pivot = quickSortArr[pivot_i];
            // }
            // quickCounter=0;
            // leftArr = [];
            // rightArr = [];
            // equalArr = [];
            // row++;
    }
    quickCounter++;
}
