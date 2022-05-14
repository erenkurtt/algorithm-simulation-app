let selectionArr = [];

function swap(arr,i,j){
    let temp = arr[i].text;
    arr[i].text = arr[j].text;
    arr[j].text = temp;
}

function startSelectionSort() {
    selectionArr = [];
    selectionSortArr = [16, 15, 46, 2, 54, 6, 16, 98, 67, 103];
    i=0;
    j=i+1;
    let min_i=i;
    canvasArea.stop();

    canvasArea.start(updateCanvasSelectionSort);

    for (let i = 0; i < selectionSortArr.length; i++) {
        let newObj = new componenttext(selectionSortArr[i], 10 * 5 * i, 50);
        selectionArr.push(newObj);
    }

}

i=0;
j=i+1;
let min_i=i;

function updateCanvasSelectionSort() {

    canvasArea.clear();

    for(let k=0; k<selectionArr.length; k++){
        if(k==min_i)
            selectionArr[k].update("blue");
        else if(k==i || k==j)
            selectionArr[k].update("red");
        else
            selectionArr[k].update("black");
        
    }
    
    if(j < selectionArr.length-1){
        
        if(selectionArr[min_i].text>selectionArr[j].text)
            min_i = j;
        
    }

    else if(j==selectionArr.length-1)
        swap(selectionArr,i,min_i);
        
    else {
        i++;
        j=i;
        min_i=i;
    }
        
    if(i==selectionArr.length)
    canvasArea.stop();
    
    console.log(selectionArr[i].text);
    console.log(selectionArr[min_i].text);
    j++;
}

let selectionSortArr = [16, 15, 46, 2, 54, 6, 16, 98, 67, 103];
