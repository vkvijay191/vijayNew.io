// Example 1: Count the Number of Zeros
let countZeros = (str) => {
    let count = 0;
    for(let i =0; i<=str.length-1; i++){
        let ch = str.charAt(i);
        if(ch === 'o' || ch === 'O'){
            count++;
        }
    }
    return count;
};

// Example 2: Reverse String
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Example 3: isPalindrome or Not
let isPalindrome = (str) => {
    return str === reverseString(str);
};

// Example 4 : convert To Palindrome
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i=str.length-2; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Example 5: Triangle One
let triangleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length;i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};

// Example 6: Triangle Two
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<=str.length-1;i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};

// Example 7: Triangle Three
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length;i>=1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};

// Example 8: Triangle Four
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};

// Example 9: Convert a Number to Word Number
let wordNumber = (theNumber) => {
    let tempStr = '';
    for(let i=0; i<=theNumber.length-1; i++){
        let digit = Number(theNumber.charAt(i));
        switch(digit){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
        }
    }
    return tempStr;
};

// Example 10 : displayWordNumber
let numbers = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let displayWordNumbers = (theNumber) => {
    let tempStr = '';
    for(let i=0; i<=theNumber.length-1; i++){
        let digit = Number(theNumber.charAt(i));
        tempStr += ` ${numbers[digit]} `;
    }
    return tempStr;
};

// Example 11 : palindromeWord
let palindromeWord = (theNumber) => {
    return displayWordNumbers(convertToPalindrome(theNumber));
};
