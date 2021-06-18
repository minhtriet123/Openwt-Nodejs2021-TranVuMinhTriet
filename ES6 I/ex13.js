// Convert the length of a given string in bytes

const byteSize = str => {
    let size = Buffer.from(str).length;
    return size;
}

console.log(byteSize('123456'));  
console.log(byteSize('Hello World'));  
console.log(byteSize('Ã¢')); 