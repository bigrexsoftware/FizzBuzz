// https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// http://regexlib.com/Search.aspx?k=phone
// https://regex101.com/


const textCharacters = (text) => {
    var pattern = /[^A-Za-z0-9]/g;
    text = text.toLowerCase().replace(pattern, '');

    return text;
}

const isPhoneNumber = (text) => {
    var pattern = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/g
    var resultArray = text.match(pattern);
    console.log(resultArray);
    if(!resultArray){
        return false;
    }
    if(resultArray.length > 0){
        return true;
    } 
    return false;
}

console.log(isPhoneNumber('1-222-222-2222'));
console.log(isPhoneNumber('222-222-2222'));
console.log(isPhoneNumber('222-2222'));
console.log(isPhoneNumber('2222222'));
console.log(isPhoneNumber('lkfsaklfhsd834'));










