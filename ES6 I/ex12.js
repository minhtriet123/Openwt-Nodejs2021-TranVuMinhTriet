// Write a JavaScript program to removes non-printable ASCII characters from a given string

const removes_non_printable = str =>
     str.replace(/[^\x20-\x7E]/g, '');

// It says something like: all characters that are not (^) in the range \x20-\x7E (hex 0x20 to 0x7E).

console.log(removes_non_printable('äÄçÇéÉêw3resouröceÖÐþúÚ'));