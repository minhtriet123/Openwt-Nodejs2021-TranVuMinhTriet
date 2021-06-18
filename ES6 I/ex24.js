//Write a JavaScript program to dcapitalize the first letter of a string

const dcapitalize = ([fisrt,...body]) => 
    ''+fisrt.toLowerCase()+body.join('');

console.log(dcapitalize('WW3resource'))