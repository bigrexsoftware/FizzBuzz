// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/

let argRange = process.argv[2];
console.log(argRange);

const FizzBuzzSimple = (range) => {
    let results = '';

    for(i=1;i<=range;i++){
        if(i%3 === 0 && i%5 === 0){
            results += "FizzBuzz ";
        } else if(i%3 === 0){
            results += "Fizz ";
        } else if(i%5 === 0){
            results += "Buzz ";
        } else {
            results += i + ' ';
        }  
    }

    return results;
}

const FizzbuzzMap = (range, dictionary) => {
  console.log('FizzbuzzMap');

  let results = '';

  for(i=1;i<=range;i++){
    let word = '';
    for(j=0;j<Object.keys(dictionary).length;j++){
      if(i%Object.keys(dictionary)[j]==0){
        word+=dictionary[Object.keys(dictionary)[j]];
      }
    }

    if(word === ''){
      results += i;
    } else {
      results += word;
    }
    results += ' ';
  }

  return results;
}

//console.log(FizzBuzzSimple(argRange));

var dictionary = {
  '3':'Fizz',
  '5':'Buzz',
  '7':'Jazz',
  '4':'Band',
  '10':'Piano'
}
console.log(FizzbuzzMap(argRange, dictionary));


