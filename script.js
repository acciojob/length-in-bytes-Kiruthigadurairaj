const byteSize = (str) => {
    return new Blob([str]).size;
};

// Examples
console.log(byteSize('hello world')); // Output: 11
console.log(byteSize('안녕하세요')); // Output: 15
console.log(byteSize('')); // Output: 0

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));