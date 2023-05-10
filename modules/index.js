const stringLength = (string) => {
    let length = string.replace(/\s+/g, '').length
    if (length > 1 && length < 10){
        return length;
    }
    else {
        return "string length shouldn't be empty and more than 10"
    }
};

const reverseString = (string) => string.split('').reverse().join('');

module.exports = {
    stringLength,
    reverseString,
  };