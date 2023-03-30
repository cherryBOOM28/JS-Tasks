const form = document.querySelector(".form");
const tasksInput = document.querySelector(".tasks__input");
const tasksUl = document.querySelector(".tasks__ul")
const btn = document.querySelector(".form-btn");
// const tasks = document.querySelector(".tasks");

for (var i = 0; i < localStorage.length; i++){
    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" name="checkbox" class="checkBox">
        ${localStorage.getItem(localStorage.key(i))}
        <button class="delete__task__btn" name="delete">X</button>
    `;
    tasksUl.appendChild(li)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" name="checkbox" class="checkBox">
        ${tasksInput.value}
        <button class="delete__task__btn" name="delete">X</button>
    `;
    tasksUl.appendChild(li);
    
    // adding task into localstorage
    let randomId = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem(`task${randomId}`, tasksInput.value)

    tasksInput.value = " ";


    const deleteBtn = document.querySelector(".delete__task__btn");
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.padding = "10px";
    deleteBtn.style.marginLeft = "10px";


    li.addEventListener("change", (event) => {
        if(event.target.checked) {
            li.style.textDecoration = "line-through";
            tasksUl.insertBefore(li, tasksUl.children[tasksUl.children.length+1]);

        } else {
            li.style.textDecoration = "none";
            tasksUl.insertBefore(li, tasksUl.children[0]);
        } 
    });

    li.children[1].onclick = () => {
        li.remove();
    };
});


