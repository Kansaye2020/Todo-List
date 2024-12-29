const addButton = document.querySelector(".addButton");
const inputText = document.querySelector(".inputText");
const taskContainer = document.getElementById("task_container");

function createElementFunction(tagName) {
    return document.createElement(tagName);
};

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    if(inputText.value === '') {
        return;
    }

    const UL = createElementFunction("ul");
    UL.classList.add("task");

    const taskContentDiv = createElementFunction("div");

    const inputCheckbox = createElementFunction("input");
    inputCheckbox.type = "checkbox";
    taskContentDiv.append(inputCheckbox);

    const labelText = createElementFunction("label");
    labelText.innerText = inputText.value;
    taskContentDiv.append(labelText);
    UL.append(taskContentDiv)

    const deleteButton = createElementFunction("button");
    deleteButton.innerText = "delete";
    UL.append(deleteButton);

    taskContainer.append(UL);
    inputText.value = '';

    deleteButton.addEventListener('click', () => {
        UL.remove();
    });
});
