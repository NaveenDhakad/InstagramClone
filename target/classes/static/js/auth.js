const API = "http://localhost:8080/api/auth";

function signup() {
    fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    })
    .then(res => res.json())
    .then(() => {
        alert("Signup successful");
        window.location.href = "index.html";
    });
}

function login() {
    fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        window.location.href = "feed.html";
    });
}
.then(data => {
    localStorage.setItem("token", data.token);
    window.location.href = "feed.html"; // HOME PAGE
});
