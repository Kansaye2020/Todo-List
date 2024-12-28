const addButton = document.querySelector(".addButton");
const inputText = document.querySelector(".inputText");
const taskContainer = document.getElementById("task_container");

function createElementFunction(tagName) {
    return document.createElement(tagName);
};

addButton.addEventListener("click", () => {

    const UL = createElementFunction("ul");
    UL.classList.add("task");

    const labelText = createElementFunction("label");
    labelText.innerText = inputText.value;
    UL.append(labelText);

    const deleteButton = createElementFunction("button");
    deleteButton.innerText = "delete";
    UL.append(deleteButton);

    taskContainer.append(UL);
    inputText.value = '';

    deleteButton.addEventListener('click', () => {
        UL.remove();
    });
});
