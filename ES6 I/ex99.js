// Hash an given input string into a whole number

const sdbm = str => {
    let arr = str.split('');
    return arr.reduce(
      (hashCode, currentVal) =>
        (hashCode = currentVal.charCodeAt(0)),
      0
    );
  };
  console.log(sdbm('w3r'));
  console.log(sdbm('name'));
  