// Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object

const retrieve = (obj, ...selector) => {
    return [...selector].map(x => {
        let ar_selector = x.split('.');
        return ar_selector.reduce((prev, cur) => prev && prev[cur], obj)
    })
}


const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
console.log(retrieve(obj,'selector.to.val', 'target[0]', 'target[2].a'))

/ chua lam