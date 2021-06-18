// Compare two objects to determine if the first one contains equivalent property values to the second one

const is_Matches = (main_obj, equal_obj) => {
    let keys = Object.keys(equal_obj)
    let result = keys.every(key => main_obj.hasOwnProperty(key) && main_obj[key] == equal_obj[key]);
    return result;
}

console.log(is_Matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }))

console.log(is_Matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }))

console.log(is_Matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }))  