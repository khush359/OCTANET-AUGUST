
const input = document.getElementById("post-text");
const btn = document.getElementById("post-button");
const imgBtn = document.getElementById("post-image");
const post = document.querySelector(".post");




btn.addEventListener('click', () => {
    const val = input.value;

    if (val.trim() === "") {
        alert("Please enter a post before submitting.");
        return; 
    }

    // Create a new container div for the post
    const postContainer = document.createElement("div");
    postContainer.className = "post";

    // Create the HTML content for the post
    const postHTML = `
        <div class="post_avatar">
            <img src="360_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg">
        </div>
        <div class="post_body">
            <div class="post_header">
                <div class="post_headerText">
                    <h3>
                        Khushi
                        <span class="post_headerSpecial">
                            <i class="fa-solid fa-circle-check"></i>@khushisetia
                        </span>
                    </h3>
                   
                </div>
                <div class="post_header_description">
                    ${val}
                </div>
            </div>
        </div>
    `;

   
    postContainer.innerHTML = postHTML;

    
// const deleteButton = document.querySelector(".deleteButton");
const deleteButton = document.createElement("button");
deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'; 
 
// Add a CSS class to the button
deleteButton.classList.add("delete-button");

deleteButton.addEventListener('click', () => {
    postContainer.remove();

});

// const postDescription = document.getElementById("post_header_description");
function editPost(e) {
    const editedText = prompt("Edit your post:", val); // val is the current post text
    console.log(e.target);
    if (editedText !== null) {
        // Check if the user clicked "OK" in the prompt (not canceled)
        // Update the post description with the edited text
        postDescription.textContent = editedText;
    } 
}

const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fa-solid fa-edit"></i>';
    editButton.classList.add("edit-button");

    // Add click event listener for the edit button
    editButton.addEventListener('click', editPost);


    // Append the DELETE and EDIT buttons to the postContainer
    postContainer.appendChild(deleteButton);
    postContainer.appendChild(editButton);
 

    // Get the existing post element
    const existingPost = document.querySelector(".post");

    // Insert the new postContainer before the existing post element
    existingPost.parentNode.insertBefore(postContainer, existingPost);

    input.value = "";

});
