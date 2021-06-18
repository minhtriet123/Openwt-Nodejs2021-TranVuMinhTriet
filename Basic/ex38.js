// Write a JavaScript program to check the total marks of a student in various examinations.
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is 
// "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. 
// Return true if the student get A+ grade or false otherwise

function check_grade(totalmarks, is_Final_exam) {
    if (is_Final_exam) {
        return (totalmarks >= 90) ? true : false;
    }
    return (totalmarks >= 89 && totalmarks <= 100) ? true : false;
}

console.log(check_grade("89", false));
console.log(check_grade("70", true ));
console.log(check_grade("99", true));