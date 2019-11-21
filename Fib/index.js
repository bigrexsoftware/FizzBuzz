const simple = (num) => {
    var a = 1, b = 0, temp;

    while(num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

const recursion = (num) => {
    if (num<=1) return 1;

    return recursion(num-1)+recursion(num-2);
}

const memoization = (num, memo) => {
    memo = memo || {};
    if(memo[num]) return memo[num];
    
    if(num<=1) return 1;

    return memo[num] = memoization(num-1, memo) + memoization(num-2,memo);
}

// https://www.youtube.com/watch?v=qletPtcS9ao
// Pascal Triangle with memoization
//     [1]
//    [1,1]
//   [1,2,1]
//  [1,3,3,1]
// [1,4,6,4,1]
const pascalAtIndex = (row, col, memo = new Map()) => {
    if(col === 0 || col === row-1) return 1;
    const key = `row${row}col${col}`;
    if(memo.has(key)){
        return memo.get(key);
    } else {
        memo.set(key, pascalAtIndex(row-1,col,memo)+pascalAtIndex(row-1,col-1,memo))
        return memo.get(key);
    }
}

const generatePascal = (n) => {
    let resultArray = [];
    let memo = new Map();
    for(let rowNo = 1; rowNo<n; rowNo++){
        let rowArray = [];
        for(let colNo = 0; colNo<rowNo; colNo++) {
            rowArray.push(pascalAtIndex(rowNo,colNo, memo));
        }
        resultArray.push(rowArray);
    }
    return resultArray;
}



console.log('simple ' + simple(0));
console.log('simple ' + simple(1));
console.log('simple ' + simple(2));
console.log('simple ' + simple(3));
console.log('simple ' + simple(4));
console.log('simple ' + simple(5));
console.log('simple ' + simple(100));

console.log('recursion ' + recursion(0));
console.log('recursion ' + recursion(1));
console.log('recursion ' + recursion(2));
console.log('recursion ' + recursion(3));
console.log('recursion ' + recursion(4));
console.log('recursion ' + recursion(5));
console.log('recursion ' + recursion(6));
//console.log('recursion ' + recursion(42));

console.log('memo ' + memoization(0));
console.log('memo ' + memoization(1));
console.log('memo ' + memoization(2));
console.log('memo ' + memoization(3));
console.log('memo ' + memoization(4));
console.log('memo ' + memoization(5));
console.log('memo ' + memoization(6));
console.log('memo ' + memoization(100));

console.log('pascal 5,2 = '+pascalAtIndex(5,2,));

console.log('Generate Pascal 7 = ');
console.log(generatePascal(7));