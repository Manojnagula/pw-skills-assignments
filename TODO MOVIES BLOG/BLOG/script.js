document.addEventListener("DOMContentLoaded", () => {
  // from home.html
const plus = document.getElementById("plus");
const container = document.getElementById("container");
const url = document.getElementById("URL");
const title = document.getElementById("title");
const description = document.getElementById("description");
const blogInput = document.getElementById("blog");
const form = document.getElementById("form");
const cross = document.getElementById("cross");
const overlay = document.getElementById("overlay");


// Load existing blog posts from local storage
const existingBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

// localStorage.removeItem('blogPosts')

let count = 0;

plus.addEventListener("click", () => {
  form.style.display = "flex";
  overlay.style.display = "block";
});

cross.addEventListener("click", () => {
  closingForm();
});
function closingForm() {
  form.style.display = "none";
  overlay.style.display = "none";

  form.reset();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleText = title.value;
  const blogPic = url.value;
  const descText = description.value;
  const blogText = blogInput.value;

  const blog = {
    TITLE: titleText,
    PIC: blogPic,
    DESCRIPTION: descText,
    BLOG: blogText,
  };
  createBlog(blog);
  closingForm();
});

function createBlog(blog) {
  const existingBlogs = JSON.parse(localStorage.getItem("blogPosts")) || [];
  existingBlogs.push(blog);
  localStorage.setItem("blogPosts", JSON.stringify(existingBlogs));
  console.log(localStorage.getItem("blogPosts"));

  addCard(blog);
}

const addCard = (post) => {
  const card = document.createElement("div");
  card.classList = "CARD";
  container.appendChild(card);

  const imgHolder = document.createElement("div");
  imgHolder.classList = "imgHolder";
  card.appendChild(imgHolder);

  const poster = document.createElement("img");
  poster.classList = "POSTER";
  poster.src = `${post.PIC}`;
  imgHolder.appendChild(poster);

  const text = document.createElement("div");
  text.classList = "TEXT";
  card.appendChild(text);

  const title = document.createElement("p");
  title.classList = "TITLE";
  title.textContent = `${post.TITLE}`;
  text.appendChild(title);

  const description = document.createElement("p");
  description.classList = "DESCRIPTION";
  description.textContent = `${post.DESCRIPTION.slice(0, 50)}`;
  text.appendChild(description);

  const read = document.createElement("a");
  read.classList = "READ";
  read.setAttribute("href", `./blog.html?index=${count}`);
  count++;
  read.textContent = "Read";
  card.appendChild(read);
};


const readButtons = document.querySelectorAll(".READ");

readButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const index = event.target.getAttribute("dataIndex");
    console.log('index:',index);

    showBlogContent(existingBlogPosts[index]);
  });
});

existingBlogPosts.forEach((blog) => {
  addCard(blog);
});
console.log(existingBlogPosts);
})