const input = document.getElementById("input");
const btn = document.getElementById("btn");
const post = document.querySelector("ul");


btn.addEventListener('click', ()=>{
    const val = input.value ;
    if(val==""){
        alert("Please enter something");
    }
    else{
    const list = document.createElement("li");
    list.textContent= val;
    // console.log(list);
    
    post.append(list);
    }
}); 

// "" error