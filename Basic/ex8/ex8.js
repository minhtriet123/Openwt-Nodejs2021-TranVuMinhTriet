function guess() {
    random_num = Math.ceil(Math.random() * 10);
    var number = document.getElementById('nb');
    if (number == random_num)
        alert("Good work");
    else alert('Not matched, the number was ' + random_num);
}

