// use a queue or a stack
class Stack{
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element){
        this.size++;
        this.storage[this.size] = element;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}


const simple = (text) => {
    var regex = /[^A-Za-z0-9]/g;
    text = text.toLowerCase().replace(regex, '');
    var len = text.length;
    for (var i = 0; i < len/2; i++) {
        if(text[i] !== text[len-1-i]) {
            return false;
        }
    }
    return true;
}

const withStack = (text) =>{
    var regex = /[^A-za-z0-9]/g;
    text = text.toLowerCase().replace(regex, '');

    let s = new Stack();
    for (var i = 0; i < text.length; i++){
        s.push(text[i]);
    }

    var reverseText = '';
    while(s.size > 0){
        reverseText += s.pop();
    }

    if (text === reverseText){
        return true;
    } else {
        return false;
    }
}

let text = 'A man, a plan, a canal. Panama';
console.log(text+' = '+simple(text));
console.log(text+' = '+withStack(text));
text = 'Hi Mom';
console.log(text+' = '+simple(text));
console.log(text+' = '+withStack(text));
text = 'race car';
console.log(text+' = '+simple(text));
console.log(text+' = '+withStack(text));
text = 'never odd or even';
console.log(text+' = '+simple(text));
console.log(text+' = '+withStack(text));
text = 'My age is 0, 0 si ega ym.';
console.log(text+' = '+simple(text));
console.log(text+' = '+withStack(text));
text = '1 eye for of 1 eye';
console.log(text+' = '+simple(text));
console.log(text+' = '+withStack(text));
text = 'O=O(:/-\:)O-O';
console.log(text+' = '+simple(text));
console.log(text+' = '+withStack(text));

