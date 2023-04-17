document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const inputField = document.getElementById("new-task-description");

  const formElement = document.querySelector("form");
  
  formElement.addEventListener('submit', (e) => {
  let newtask =inputField.value

    e.preventDefault();
    if (newtask.length===0){
    alert('Task cannot be empty')
    }else{
      handleToDo(newtask);
    }
    formElement.reset()
  });


});
