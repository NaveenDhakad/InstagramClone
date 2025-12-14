const POST_API = "http://localhost:8080/api/posts";
const token = localStorage.getItem("token");

function loadFeed() {
    fetch(`${POST_API}/feed`, {
        headers: { Authorization: "Bearer " + token }
    })
    .then(res => res.json())
    .then(posts => {
        feed.innerHTML = "";
        posts.forEach(p => {
            feed.innerHTML += `
            <div class="card mb-3">
                <img src="${p.imageUrl}" class="card-img-top">
                <div class="card-body">
                    <h6>@${p.username}</h6>
                    <p>${p.caption}</p>
                    <button onclick="likePost(${p.id})" class="btn btn-sm btn-outline-danger">❤ Like</button>
                </div>
            </div>`;
        });
    });
}

function likePost(id) {
    fetch(`${POST_API}/${id}/like`, {
        method: "POST",
        headers: { Authorization: "Bearer " + token }
    }).then(loadFeed);
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

loadFeed();
