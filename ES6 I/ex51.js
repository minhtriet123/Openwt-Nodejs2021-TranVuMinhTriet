//  Write a JavaScript program to get an object containing the parameters of the current URL.

const get_obj_URL = (URL) => {
    let index_start_ = URL.indexOf('?');
    if (index_start_ !== -1) str_obj = URL.slice(index_start_ + 1);
    let ar_obj = str_obj.split('&');
    return ar_obj.reduce((acc, v) => ((acc[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), acc), {});
}
console.log(get_obj_URL('http://url.com/page?name=Adam&surname=Smith'));
console.log(get_obj_URL('google.com'));
console.log(get_obj_URL('https://www.w3resource.com'));
