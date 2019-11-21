let arr = [1,2,3,4,5,6,7,8,9];

// linear O(n) time - touches every element to run
function linearSearch(arr,elem){
    for (let i = 0; i<arr.length;i++){
        if(arr[i] === elem){
            return i;
        }
    }
    return -1;
}

// binary search - works on sorted arrays
function binarySearch(arr,elem){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);

    while(arr[mid]!=elem && start<=end) {
        console.log(start+' '+mid+' '+end);
        if(arr[mid]<elem){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start+end)/2);
    }
    return arr[mid] === elem ? mid : -1;
}

console.log(binarySearch(arr,1));
console.log(binarySearch(arr,2));
console.log(binarySearch(arr,3));
console.log(binarySearch(arr,4));
console.log(binarySearch(arr,5));
console.log(binarySearch(arr,8));