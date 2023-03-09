let list= [
"HTML and Semantics",
"Starting with CSS",
"Working Template",
"Mobile responsive webpages",
"Grid and Flex-box in CSS",
"Projects using HTML & CSS",
"Version Control and Git",
"Getting Started with JavaScript",
"Advance JavaScript",
"Working with DOM",
"Making Projects using HTML, CSS and JavaScript",
"Understanding Fundamental of Computer Science",
"Getting Started with Database",
"Understanding the Database",
"Starting with NodeJS and Express",
"Understanding React and its Fundamentals",
"Understanding Hooks and Routers",
"Starting and Completing Full Fledge Projects"
];

function addItem(){
    if(list.length!==0)
    {
    let item = document.createElement("p");
    document.body.appendChild(item);
    item.textContent=list[0];
    list.splice(0,1)
    }
    else{
        alert("all items are added.");
    }
}
let but = document.getElementById("button");
but.addEventListener("click",addItem);
