function add (){
    let ol = document.getElementById("here");
    let li;
    li = document.getElementById("userI");
    let node = document.createElement("li");
    let textnode = document.createTextNode(li.value);
    console.log(textnode);
    console.log(ol);
    console.log(node);
    node.appendChild(textnode);
    ol.appendChild(node);
    li.value = "";
    alert("Added item in To-do List");
}

function display(){
    let but = document.getElementById("here");
    if(but.style.display == "none"){
        but.style.display = "block";
    }
    else{
        but.style.display = "none";
    }
}