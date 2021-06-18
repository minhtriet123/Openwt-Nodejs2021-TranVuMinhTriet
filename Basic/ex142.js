// Write a JavaScript program to simplify a given absolute path for a file in Unix-style

function simplify(path) {
    var parts = path.split('/');
    var rs="/";
    for (var i = 0; i < parts.length; i++) {
        if (!(parts[i] == '' || parts[i] == '.' || parts[i] == "..")) {
            rs +=  parts[i] + "/";
        }
    }
    return rs;
}

console.log(simplify("/home/var/./www/../html//sql/"));