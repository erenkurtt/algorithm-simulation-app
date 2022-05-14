let linear_squares = [];
let linear_vals = [];

let linearArr = [83, 64, 63, 12, 34, 45, 66, 78, 79];
let searchLinear = 34;
let linCount = 0;
linearSearch(linearArr, searchLinear);

function startLinearSearch() {
    canvasArea.stop();
    linear_squares = [];
    linear_vals = [];
    linearArr = [83, 64, 63, 12, 34, 45, 66, 78, 79];
    searchLinear = 34;
    linCount = 0;
    linearSearch(linearArr, searchLinear);
    canvasArea.start(updateCanvasLinearSearch);

    for (let i = 0; i < linearArr.length; i++) {
        //    let squares = new compSquare(10 * 5 * i, 10, 50, 50);
        let newObj = new componenttext(linearArr[i], 10 * 5 * i + 10 * i, 50);
        linear_vals.push(newObj);
        //    linear_squares.push(squares);
    }

     searchKey  =  new componenttext(  searchLinear , 10 * 5 * i + 10 * i, 100);
}



function updateCanvasLinearSearch() {

    canvasArea.clear();

    searchKey.x = 10 * 5 * linCount + 10 * linCount; 

    searchKey.update("blue");

    linear_vals.forEach(element => {

        if(linear_vals.indexOf(element) === linCount ){

            element.update("green");
        }
        else if( linear_vals.indexOf(element) < linCount ){

            element.update("red");
        }
        else{
            element.update("black");
        }
        //  linear_squares[linear_vals.indexOf(element)].update(10 * 5 *  linear_vals.indexOf(element) , 10 );

    });
    console.log(linear_vals[linCount] )
    if( linear_vals[linCount].text === searchLinear  ){

        linear_vals[linCount].update("blue");
        canvasArea.stop()
    }

    linCount++;

}

function linearSearch(arr, searchLinear) {
    let n = arr.length;

    let i;
    for (i = 0; i < n; i++) {
        if (arr[i] == searchLinear)
            return [i];
    }
    return -1;

}