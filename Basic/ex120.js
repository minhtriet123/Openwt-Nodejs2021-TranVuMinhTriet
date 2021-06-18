// Write a JavaScript program to check whether a point lies strictly inside a given circle.

// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b).

function check_a_point(x, y, a, b, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r = r*r;
    if (dist_points < r) {
        return true;
    }
    return false;
}

console.log(check_a_point(2, 4, 0, 0, 6));
console.log(check_a_point(6, 8, 0, 0, 6));