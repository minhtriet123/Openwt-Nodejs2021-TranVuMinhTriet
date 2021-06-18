//   Write a JavaScript program to convert a comma-separated values
//  (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
// Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

const csv_to_array = (datas, sign = ',') => {
    let titles = datas.slice(0, datas.indexOf('\n')).split(sign);
    datas = datas.slice(datas.indexOf('\n') + 1);
    datas = datas.split('\n');
    datas = datas.map(v => v.split(sign));
    let array_result = [];
    for (let i = 0; i < datas.length; i++) {
        let json = {};
        for (let j = 0; j < titles.length; j++) {
            let title = titles[j];
            let value = datas[i][j];
            json[title] = value;
        }
        array_result.push(json);
    }
    return array_result;
}


console.log(csv_to_array('a,b,v\nc,d,e\nc,f,d\nc,a,d'));
console.log(csv_to_array('a;b\nc;d', ';'));
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));