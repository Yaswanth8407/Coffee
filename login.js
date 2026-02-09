let users = [
    {
        name: "Yaswanth",
        email: "customer1@gmail.com",
        password: "coffee"
    }
];

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'none';
}

function showSignup() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signupBox").style.display = "block";
    clearInputs();
}

function showLogin() {
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    clearInputs();
}

function clearInputs() {
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
    document.getElementById("signupName").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";
    hideError("loginError");
    hideError("signupError");
}

function signup() {
    let name = document.getElementById("signupName").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        showError("signupError", "All fields are required");
        return;
    }

    if (password.length < 6) {
        showError("signupError", "Password must be at least 6 characters");
        return;
    }

    let existingUser = users.find(function (u) {
        return u.email === email;
    });

    if (existingUser) {
        showError("signupError", "User already exists with this email");
        return;
    }

    // Store user data
    users.push({ name: name, email: email, password: password });

    alert("Signup successful! Welcome to Brew & Bean, " + name + "!");
    window.location.href = "order.html";
}

function login() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        showError("loginError", "Please enter both email and password");
        return;
    }

    // Check if user exists with matching credentials
    let user = users.find(function (u) {
        return u.email === email && u.password === password;
    });

    if (!user) {
        showError("loginError", "Invalid email or password");
        return;
    }

    alert("Login successful! Welcome back, " + user.name + "!");
    window.location.href = "main.html";
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        if (document.getElementById("loginBox").style.display !== 'none') {
            login();
        } else {
            signup();
        }
    }
}); 0