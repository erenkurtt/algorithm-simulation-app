function merge(arr, left, middle, right) {
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
    console.log(arr);
}

function mergeSort(arr, left, right) {


    let newArr = arr.slice(left,right+1);
    console.log("mergeSort");
    console.log(arr);

    if (left >= right) {
        return;
    }

    let middle = left + parseInt((right - left) / 2);

    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    merge(arr, left, middle, right);

}

let inputArr = [92, 42, 61, 32, 69, 43, 18, 78];

console.log(inputArr.length);

mergeSort(inputArr, 0, inputArr.length - 1);

console.log(inputArr);

