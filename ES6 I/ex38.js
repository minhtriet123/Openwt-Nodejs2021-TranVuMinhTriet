//  Pad a string on both sides with the specified character

// padStart() : đệm ở đầu 
// padEnd(): đệm ở cuối
const pad_str = (str , length, char =' ') => {
   return str.padStart((str.length+length)/2,char).padEnd(length,char);
}


console.log(pad_str('cat', 8));
console.log(pad_str(String(42), 6, '0'))
console.log(pad_str('foobar', 3))