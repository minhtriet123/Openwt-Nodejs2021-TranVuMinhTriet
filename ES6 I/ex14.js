// Replace the names of multiple object keys with the values provided

const replace_properties = (change, obj) => {
    let keys = Object.keys(change);
    let keyObject = Object.keys(obj);
    for (let i = 0; i < keyObject.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (keyObject[i] == keys[j]) obj[keyObject[i]] = change[keys[j]];
        }
    }
  
    return obj;
}
const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };

console.log(replace_properties({ name: 'firstName', job: 'Actor' }, obj))