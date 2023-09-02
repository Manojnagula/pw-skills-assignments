//from blog.html
const desc = document.getElementById("desc");
const page = document.getElementById("page");
const descContainer = document.getElementById("desc-container");
const blogDiv = document.getElementById('blog-div');

const URLParams = new URLSearchParams(window.location.search);

const index = URLParams.get('index');
const existingBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));

//showing full blog

function showBlogContent(index) {
    const blogTitle = document.createElement("p");
    blogTitle.classList = "BLOGTITLE";
    blogTitle.textContent = existingBlogPosts[index].TITLE;
    desc.appendChild(blogTitle);
  
    const blogDesc = document.createElement("p");
    blogDesc.classList = "BLOGDESC";
    blogDesc.textContent = existingBlogPosts[index].DESCRIPTION;
    desc.appendChild(blogDesc);
  
    const imgContainer = document.createElement("div");
    imgContainer.classList = "IMGCONTAINER";
    descContainer.appendChild(imgContainer);
  
    const img = document.createElement("img");
    img.classList = "IMG";
    img.src = existingBlogPosts[index].PIC;
    imgContainer.appendChild(img);

    const blog = document.createElement('p');
    blog.textContent=existingBlogPosts[index].BLOG;
    blog.classList= 'BLOG';
    blogDiv.appendChild(blog);
  }
  showBlogContent(index);