document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    
    if (role === "student") {
        // Fetch student records for student
        fetchStudentRecords(username, password);
    } else {
        // Teacher dashboard logic
        fetchTeacherDashboard(username, password);
    }
});

function fetchStudentRecords(username, password) {
    // Simulate a login request
    // If login is successful, show the student records
    document.getElementById("student-records").style.display = "block";
    document.getElementById("login-section").style.display = "none";
}

function fetchTeacherDashboard(username, password) {
    // Simulate a teacher login
    document.getElementById("teacher-dashboard").style.display = "block";
    document.getElementById("login-section").style.display = "none";
}
