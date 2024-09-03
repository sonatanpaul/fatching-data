function myPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => postData(data));
}

function postData(data) {
  const ol = document.getElementById("post");
  for (const post of data) {
    const li = document.createElement("li");
    li.innerText = post.title;
    ol.appendChild(li);
  }
}
