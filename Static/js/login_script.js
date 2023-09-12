document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form1");
    const usernameInput = document.getElementById("txtUsername");
    const passwordInput = document.getElementById("txtPassword");
    // const loginMessage = document.getElementById("lblLoginMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Check if the username and password are "admin"
        if (usernameInput.value === "admin" && passwordInput.value === "admin") {
            // Redirect to index.html
            window.location.href = "index.html";
        } else {
            // Display an error message
            alert("Invalid credentials. Please try again.");
        }
    });
});
