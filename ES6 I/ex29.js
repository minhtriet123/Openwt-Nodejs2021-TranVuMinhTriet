//  Convert a value to a safe integer
const to_Safe_Integer = num =>
    (num <= Number.MAX_SAFE_INTEGER && num >= Number.MIN_SAFE_INTEGER) ? Math.round(num) :
        ((num > Number.MAX_SAFE_INTEGER) ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER)


console.log(to_Safe_Integer('5.2'));
console.log(to_Safe_Integer('5.52'));
console.log(to_Safe_Integer(Infinity));

