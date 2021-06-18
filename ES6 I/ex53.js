// Write a JavaScript program to Initialize a two dimension array of given width and height and value.


const Initialize_2D_array = (w,h,val) => {
    let ar = Array.from({length : h}).map( x => x = Array.from({length : w}).fill(val));
    return ar ;
}


console.log(Initialize_2D_array(2, 2, 0));
console.log(Initialize_2D_array(3, 3, 3));