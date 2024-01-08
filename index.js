function calculateGrade() {
    // Prompt the user for input
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a valid number between 0 and 100.");
        return;
    }

    // Determine the grade
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the result
    console.log(`Student Grade: ${grade}`);
}

// Call the function
calculateGrade();
