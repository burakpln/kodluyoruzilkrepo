// Variables
const listDOM = document.querySelector("#list");
const liveToastBtn = document.querySelector("#liveToastBtn")
const task = document.querySelector("#task")
const liveToast = document.querySelectorAll("#liveToast")
const clearBtn = document.querySelector("#clearBtn")

// close button and checked functions
listDOM.addEventListener("click", function (e) {
    if (e.target.className === "close") {
        e.target.parentElement.remove()
    } else if (e.target.classList.contains("list-item")) {
        e.target.classList.toggle("checked")
    }
    e.preventDefault();
})




function newElement() {
    // blank input error
    if (task.value === "") {
        $(document).ready(function () {
            $('.error').toast('show');
        });
    } else {
        const li = document.createElement("li")
        li.className = "list-item";
        li.innerHTML = `<span class="close">×</span>`
        const txt = document.createTextNode(task.value)
        li.appendChild(txt)
        listDOM.appendChild(li)

        // clear input
        task.value = ""

        // success toast
        $(document).ready(function () {
            $('.success').toast('show');
        });
        
    }
}

// clear all button
function clearAll(){
    if(confirm("Tüm listeyi silmek istediğinizden emin misiniz?")){

    listDOM.innerHTML = ""
}
}

// hide toast
$(document).ready(function () {
    $('.toast').toast('hide');
});
