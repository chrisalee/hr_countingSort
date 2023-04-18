/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    let frequencyArray = new Array(100).fill(0);
    
    for(let num of arr) {
        frequencyArray[num]++
    }
    return frequencyArray;
}

//////////////////////////////////////////////////////////////////
function countingSort(arr) {
    let frequencyArray = [];
    for(let i = 0; i < 100; i++) {
        frequencyArray.push(0)
    }
    
    for(let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]]++
    }
    
    console.log(frequencyArray)
    return frequencyArray;
}
