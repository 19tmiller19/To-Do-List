const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value ===''){
        alert('You Must Write Something!')
    }else{
        let li = document.createElement("li"); //create a list item
        li.innerHTML = inputBox.value;          // makes the list item equal to the inputbox value
        listContainer.appendChild(li);          //displays the list item in list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){                  //when we click in container
        e.target.classList.toggle("checked");       //if we click on li then add check class name
        saveData();
    }
    else if(e.target.tagName === "span"){           //if we click on span then it removes parent element li
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();