// http://geeksforgeeks.org/check-string-substring-another/

class Substring {
    constructor() {
    }

    IsSubstring(text, pattern) {
        if(!text || !pattern){
            return -2;
        }

        let i,j = 0;

        const textLength = text.length;
        const patternLength = pattern.length;

        console.log(textLength +' '+patternLength);
        
        for (i=0; i < textLength  - patternLength; i++) {
            for(j=0; j < patternLength; j++){
                console.log(text[i+j]+ ' '+ pattern[j])
                if(text[i+j] != pattern[j]) {
                    break;
                }

            }

            if(j == patternLength){
                return i;
            }
        }

        return -1;
    }
}

const countValuesInArray = (inputArray) => {
    let hash = {};

    for (let i=0; i<inputArray.length; i++){
        let element = inputArray[i];
        if(hash[element]>0){
            hash[element]++
        } else {
            hash[element] = 1;
        }
    }
    console.log(hash);
    return Object.keys(hash).length;
}

const countCertainValuesInArray = (inputArray, patternArray) => {
    let hash = {};
    let patternHash = {};

    if(!inputArray || !patternArray){
        return null;
    }

    for(let j=0;j<patternArray.length;j++){
        let patternElement = patternArray[j];
        if(!patternHash[patternElement]){
            patternHash[patternElement] = 1;
        }
    }

    for (let i=0; i<inputArray.length; i++){
        let element = inputArray[i];

        if(patternHash[element]){
            if(hash[element]>0){
                hash[element]++
            } else {
                hash[element] = 1;
            }
        }
    }
    console.log(patternHash);
    console.log(hash);
    return Object.keys(hash).length;
}

// https://www.youtube.com/watch?v=dvPybpgk5Y4
// O(n^2)
const removeDuplicatesBruteForce = (inputArray) => { 
    let aLength = inputArray.length;
    let b = [];
    for (let i = 0; i<aLength; i++){
        if(b.indexOf(inputArray[i]) === -1){
            b.push(inputArray[i]);
        }
    }

    return b;
}

const removeDuplicates = (inputArray) => { 
    let aLength = inputArray.length;
    let b = [];
    inputArray = inputArray.sort();

    let _temp;
    for (let i = 0; i<aLength; i++){
        if(inputArray[i] !== _temp){
            b.push(inputArray[i]);
            _temp = inputArray[i];
        }
    }

    return b;
}


const removeDuplicates2 = (inputArray) => { 
    let obj = {};
    for(let i of inputArray){
        obj[i] = true;
    }

    let b = Object.keys(obj);

    return b;
}

const removeDuplicatesSet = (inputArray) => { 
    return [... new Set(inputArray)];
    //let bSet = new Set(inputArray);
    //return bSet;
}

const substringClass = new Substring();
console.log(substringClass.IsSubstring('geeksforgeeks','for'));

const inputArray = [1,1,1,1,3,3,5,7,8,8];
console.log('count values array '+countValuesInArray(inputArray));

const patternArray = [1,3,7];
console.log('certain values array '+countCertainValuesInArray(inputArray, patternArray));

const duplicateArray = [1,2,5,2,1,8];
console.log(removeDuplicatesBruteForce(duplicateArray));
console.log(removeDuplicates(duplicateArray));
console.log(removeDuplicates2(duplicateArray));
console.log(removeDuplicatesSet(duplicateArray));