
function binarySearch(arr, l, r, search){
    if ( r>=l ){
        let mid = l + Math.floor((r-1)/2);
    
        if(arr[mid] == search)
            return mid;
        
        if (arr[mid] > search)
            return binarySearch(arr, l, mid-1, search);
        
        if (arr[mid] < search)
            return binarySearch(arr, mid+1, r, search);
    }
    return -1;
}

let inputArr = [2, 4, 6, 12, 34, 45, 66, 78, 79];
let search = 66;
console.log(binarySearch(inputArr, 0, inputArr.length-1, search));