import "./styles.css";

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteListItem = (text) => {
  // li
  const li = document.createElement("li");

  //div
  const div = document.createElement("div");
  div.className = "list-row";

  //span
  const span = document.createElement("span");
  span.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const deleteTarget = completeButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const span = document.createElement("span");
    span.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteListItem(text);
    });

    addTarget.appendChild(span);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = completeButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

const addOnClick = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteListItem(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => addOnClick());
