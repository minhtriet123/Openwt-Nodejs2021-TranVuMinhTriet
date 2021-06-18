// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c
// turns into x, ..., n turns into m, m turns into n, ..., z turns into a

function change_char(str) {
	var result = [];
	for (var i = 0; i < str.length; i++)
    {
		var char_ogri = str.charCodeAt(i) - 'a'.charCodeAt(0),
			change_char = 25 - char_ogri + 'a'.charCodeAt(0);
          
		result.push(String.fromCharCode(change_char));
	}
	return result.join("");
}
console.log(change_char("abcxyz"));
console.log(change_char("python"));  