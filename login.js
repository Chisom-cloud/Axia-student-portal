document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Clear previous messages
    errorMessage.textContent = "";

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in both fields.";
        errorMessage.style.color = "red";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        errorMessage.style.color = "red";
        return;
    }

    // Simulate success
    alert("Login successful!");
    document.getElementById("loginForm").reset();
});
