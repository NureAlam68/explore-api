function usersPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((users) => displayPosts(users));
}

function displayPosts(users) {
  const postsContainer = document.getElementById("posts-container");
  for (const user of users) {
    // console.log(user);
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
        <h4>User-${user.userId}</h4>
        <h5>Post: ${user.title}</h5>
        <p>Post Description: ${user.body}</p>
        `;
    postsContainer.appendChild(div);
  }
}

usersPosts(); // first function call for without click to find data

