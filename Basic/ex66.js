//Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function dis_city(name){
    if(name.substring(0,3)=="Los"||name.substring(0,3)=="New") return name;
    return "";
}

console.log(dis_city("New York"));
console.log(dis_city("Da Nang"));