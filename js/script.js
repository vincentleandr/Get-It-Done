//Create new item on the list
function newItem() {
    var item = document.getElementById("input").value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    
    li.appendChild(document.createTextNode("- " + item));
    var list = li;
    ul.appendChild(li);
    $(list).hide().fadeIn(1000);
    document.getElementById("input").value = "";
    $(list).click(function() {
        $(list).fadeOut(1000);
        removeItem;
    });
}

//Set what key to submit the value of the textbox, 13 = enter key
document.body.onkeyup = function(e) {
    if(e.keyCode == 13) {
        newItem();
    }
}

//Removing item
function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}