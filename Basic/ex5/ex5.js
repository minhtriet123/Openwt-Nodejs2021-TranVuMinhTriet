var str = "w3resource";
var rs="";
var length = str.length;
var i = 0 ;
for ( i=0; i<length; i++){
    rs = rs + str.charAt(str.length-1);
    str = str.substring(0, str.length-1);
}
console.log(rs);

