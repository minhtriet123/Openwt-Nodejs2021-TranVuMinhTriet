// Write a JavaScript program to break an address of an url and put it's part into an array. 

function break_address(url){
    var parts1 = url.split("://");
    var parts2 = parts1[1].split("/");
    var ar_rs = [];
    ar_rs.push(parts1[0]);
    ar_rs.push.apply(ar_rs, parts2);

    return ar_rs;
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log(break_address(url_add))