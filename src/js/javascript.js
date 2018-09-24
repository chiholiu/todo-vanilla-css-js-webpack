(function() {
    "use strict";

    function Todo() {
        let inputField;
        let checkAll;
        let todoList;
        let todoCheckbox;
        let storage;

        this.init = function() {
            addEventListener();
        }

        let addEventListener = function() {
            checkAll = document.getElementById('checkAll');
            inputField = document.getElementById('inputField');
            todoList = document.getElementById('todoList');

            checkAll.addEventListener('click', mainCheckbox);
            inputField.addEventListener('change', getTodoList);
            todoList.addEventListener('click', removeItem);
        }

        let mainCheckbox = function() {
            todoCheckbox = document.querySelectorAll(".checkbox-input");
            if(todoCheckbox.length < 1) return;
            todoCheckbox.forEach(function(todoItem, index) {
                todoCheckbox[index].checked = event.target.checked;
            });
            popRemoveTab();
        }

        let getTodoList = function() {
            checkAll.checked = false;
            if(inputField.value.length > 0) {
                let text = "<div class='todo-list-item'><input type='checkbox' class='checkbox-input'/><span class='todo-item-text'>" + inputField.value + "</span><span class='remove'>X</span></div>";
                document.getElementById('todoList').innerHTML += text;
            }
            inputField.value = "";
        }

        let removeItem = function() {
            if(event.target.classList.contains('remove')) {
               event.target.parentNode.remove();
            }
        }

        let popRemoveTab = function() {
            if(todoCheckbox.length > 0 && checkAll.checked) {
                document.getElementById('remove-all').classList.add('display-block');
            } else {
                document.getElementById('remove-all').classList.remove('display-block');
            } 
        }
    }

    const todo = new Todo();
    todo.init();
})();