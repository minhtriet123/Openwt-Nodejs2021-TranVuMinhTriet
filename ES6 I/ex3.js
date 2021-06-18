// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

const csv_to_array = (data, sign = ',' , dele_head = false ) =>
    {
    data = data.slice(dele_head ? data.indexOf('\n')+1 : 0); // delete head
    data = data.split('\n');
    let array_data = data.map( v => v.split(sign));
    return array_data;
}


console.log(csv_to_array('a,b\nc,d')); 
console.log(csv_to_array('a;b\nc;d', ';')); 
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));