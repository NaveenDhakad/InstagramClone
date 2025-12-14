function createPost() {
    fetch("http://localhost:8080/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        body: JSON.stringify({
            imageUrl: imageUrl.value,
            caption: caption.value
        })
    })
    .then(() => {
        imageUrl.value = "";
        caption.value = "";
        loadFeed();
    });
}
