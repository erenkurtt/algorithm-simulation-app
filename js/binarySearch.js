let binary_vals = [];
let binaryArray = [2, 4, 6, 12, 34, 45, 66, 78, 79];

function startBinarySearch() {
    canvasArea.stop();
    canvasArea.start(updateCanvasBinarySearch);
    for (let i = 0; i < binaryArray.length; i++) {
        let newObj = new componenttext(binaryArray[i], 10 * 5 * i, 50, false);
        binary_vals.push(newObj);
    }
    exactValue = new componenttext(1, 600, 50);
}

function componenttextBinary(text, x, y, eliminated) {
    this.text = text
    this.x = x;
    this.y = y;
    this.eliminated = eliminated;

    this.update = function (color) {
        ctx = canvasArea.context;
        ctx.font = "31px Showcard Gothic ";
        ctx.fillStyle = color;
        ctx.fillText(this.text, this.x, this.y);
    }
}

let bsTimer = 0, searchinglNumb = 12, left = 0, right = binaryArray.length - 1;

function updateCanvasBinarySearch() {
    //canvasArea.clear();
    binary_vals.forEach(element => {
        element.y += 50;
    });
    let mid = left + Math.floor((right - left) / 2);
    console.log(binaryArray[mid])
    binary_vals.forEach(element => {
        if(searchinglNumb < binaryArray[mid] && binary_vals.indexOf(element) > mid){
            element.eliminated = true;
        }
        else if(searchinglNumb > binaryArray[mid] && binary_vals.indexOf(element) < mid){
            element.eliminated = true;
        }
    });

    binary_vals.forEach(element => {
        if ( element.eliminated ) {
            element.update("red");
        }
        else {
            element.update("black");
        }
    });
    binary_vals[mid].update("blue");
    if (binaryArray[mid] === searchinglNumb) {
        console.log(searchinglNumb, binaryArray[mid]);
        if (bsTimer % 2 === 1) {
            binary_vals[mid].update("green");
            canvasArea.stop();
        }
        binary_vals.forEach(element => {
           if(binary_vals.indexOf(element) !== mid) {
                element.eliminated = true;
           }
        });
        bsTimer++;
    }
    if (binaryArray[mid] > searchinglNumb) {
        right = mid - 1;
    }
    if (binaryArray[mid] < searchinglNumb) {
        left = mid + 1;
    }
}

function binarySearch(arr, l, r, search) {
    if (r >= l) {
        let mid = l + Math.floor((r - 1) / 2);

        if (arr[mid] == search)
            return mid;

        if (arr[mid] > search)
            return binarySearch(arr, l, mid - 1, search);

        if (arr[mid] < search)
            return binarySearch(arr, mid + 1, r, search);
    }
    return -1;
}
