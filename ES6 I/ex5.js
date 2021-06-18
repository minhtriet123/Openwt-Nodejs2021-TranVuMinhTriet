// Write a JavaScript program to convert an array of 
// objects to a comma-separated values (CSV) string that contains only the columns specified.

const json_to_csv = (arr, columns, delimiter = ',') => {
    return [
        columns.join(delimiter),
        ...arr.map(obj =>
            columns.reduce(
                (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
                ''
            )
        )
    ].join('\n');

}
console.log(json_to_csv([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(json_to_csv([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));

// Chữa xỏng