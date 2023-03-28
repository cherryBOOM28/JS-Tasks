const form = document.querySelector(".form");
const tasksInput = document.querySelector(".tasks__input");
const tasksUl = document.querySelector(".tasks__ul")
const btn = document.querySelector(".form-btn");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" name="checkbox" class="checkbox">
    ${tasksInput.value}
    <button class="delete__task__btn" name="delete">X</button>`;
    tasksUl.appendChild(li);
    tasksInput.value = " ";

    

    li.addEventListener("change", (event) => {
        if(event.target.checked) {
            tasksUl.insertBefore(li, tasksUl.children[tasksUl.children.length+1]);
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
            tasksUl.insertBefore(li, tasksUl.children[0]);
        }
        
    });

    li.children[1].onclick = () => {
        li.remove();
    };
});


