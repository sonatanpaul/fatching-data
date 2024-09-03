function postData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  const postDataDisplay = document.getElementById("post-container");
  for (const post of data) {
    const divSection = document.createElement("div");
    divSection.classList.add("post-class");
    divSection.innerHTML = `
        <h4>Post Id : ${post.id} </h4>
        <h3>Post Title : ${post.title} </h3>
        <h5> Post Description : ${post.body} </h5>  

    `;
    postDataDisplay.appendChild(divSection);
  }
}

postData();
