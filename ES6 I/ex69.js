// Write a JavaScript program to group the elements
// of an array based on the given function and returns the count of elements in each group

const group_elements = (ar, fn) => {
    if (typeof fn === 'function') {
        let rs = ar.map(x => fn(x));
        let rt = rs.reduce((acc, v) => (acc[v] = 0, acc), {})
        for ( let j = 0; j < rs.length; j++) {
            for (let i = 0; i < ar.length;i++) {
                if (fn(ar[i]) == rs[j]) rt[rs[j]]++;
            }
        }
        return rt;
    }
    return "Your 2nd input is not a function!"

}
console.log(group_elements([6, 10, 100, 10], Math.sqrt));
console.log(group_elements([6.1, 4.2, 6.3], Math.floor));
console.log(group_elements(['one', 'two', 'three'], 'length'));