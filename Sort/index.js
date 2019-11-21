const mergeSort = (arrA,arrB) => {
    let singleSorted = [];
    while(arrA.length && arrB.length){
        if(arrA[0]<arrB[0]){
            singleSorted.push(arrA[0]);
            arrA.shift();
        } else {
            singleSorted.push(arrB[0]);
            arrB.shift();
        }
    }
    console.log(singleSorted);
    return singleSorted.concat(arrA,arrB);  

}

// https://www.youtube.com/watch?v=_TEPAM3auLQ
const radixSort = (inputArray) => {
    if(inputArray.length<2) return inputArray;
    let maxValue = inputArray[0];
    for(let i = 1; i<inputArray.length;i++){
        if(inputArray[i]>maxValue){
            maxValue = inputArray[i];
        }
    }
    const iterationCount = maxValue.toString().length;
    for(let digit=0;digit<iterationCount;digit++){
        const bucketArray = Array.from({length:10}, ()=>[]);
        for(let i=0; i<inputArray.length;i++){
            const digitValue = Math.floor(inputArray[i]/Math.pow(10,digit))%10;
            bucketArray[digitValue].push(inputArray[i]);
        }
        inputArray = [].concat(...bucketArray);
    }
    return inputArray;
}

let arrA = [0,1,3,5,7,9,11,13,15,17];
let arrB = [2,4,6,8,10,12]
console.log(mergeSort(arrA,arrB));

let unsortedArray = [400,4,300,65,33,779,433,5,36,778,88,22,41,6];
console.log(radixSort(unsortedArray));