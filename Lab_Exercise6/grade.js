// Error 1 (grade.html, Line 9):
// Added return before checkMark() to prevent form submission.

// Error 2 (grade.html, Line 17):
// Corrected showtable() to showTable().

// Error 3 (grade.js, Line 5):
// Changed assignment (=) to comparison (===).

// Error 4 (grade.js, Line 9):
// Corrected isNan() to isNaN().

// Error 5 (grade.js, Line 14):
// Changed && to || in the mark validation.

// Error 6 (grade.js, Line 28):
// Corrected getElementByID() to getElementById().

// Error 7 (grade.js, Line 30):
// Corrected style.colour to style.color.

// Error 8 (grade.js, Line 38):
// Changed loop starting value from 1 to 0.

// Error 9 (grade.js, Line 42):
// Corrected innerHtml to innerHTML.


// Function to check student mark
function checkMark() {

    // Get student name and mark
    let name = document.forms["gradeForm"]["name"].value.trim();

    let mark = document.forms["gradeForm"]["mark"].value.trim();

    // Check empty name
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Check empty mark
    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check non-numeric mark
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = Number(mark);

    // Check mark range
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Declare grade variable
    let grade;

    // Determine student grade
    if (mark >= 80) {
        grade = "A";

    } else if (mark >= 65) {
        grade = "B";

    } else if (mark >= 50) {
        grade = "C";

    } else {
        grade = "F";
    }

    // Display result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change result colour according to grade
    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green";

    } else if (grade === "C") {
        document.getElementById("result").style.color = "orange";

    } else {
        document.getElementById("result").style.color = "red";
    }

    // Display date and time using Date()
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();

    // Prevent page reload
    return false;
}


// Function to display grade table
function showTable() {

    let grades = ["A", "B", "C", "F"];

    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    // Create table
    let tableHTML = "<table>";

    tableHTML += "<tr><th>Grade</th><th>Mark Range</th></tr>";

    // Display all grades using for loop
    for (let i = 0; i < grades.length; i++) {

        tableHTML +=
            "<tr><td>" + grades[i] +
            "</td><td>" + ranges[i] +
            "</td></tr>";
    }

    tableHTML += "</table>";

    // Display table
    document.getElementById("tableContainer").innerHTML =
        tableHTML;
}


// Function to generate random mark
function randomMark() {

    let random = Math.floor(Math.random() * 101);

    document.getElementById("mark").value = random;
}
