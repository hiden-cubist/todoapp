export class View {
    /**
     * @param  {Template} template
     */
    constructor(template) {
        this.template = template;

        this.newTodoForm = document.getElementById('new-todo-form');
        this.newTodoInput = document.getElementById('new-todo-input');
        this.todoList = document.getElementById('todo-list');
    }

    /**
     * @param  {ItemList} items
     */
    showItems(items) {
        this.todoList.innerHTML = this.template.itemList(items);
    }

    clearInput() {
        this.newTodoInput.value = '';
    }

    /**
     * @param  {callback} handler
     */
    bindAddItem(handler) {
        this.newTodoForm.addEventListener('submit', event => {
            event.preventDefault();
            handler(this.newTodoInput.value);
        });
    }

    /**
     * @param  {callback} handler
     */
    bindToggleItem(handler) {
        this.todoList.addEventListener('click', event => {
            this.todoList.querySelectorAll('.toggle').forEach(element => {
                if (element === event.target) {
                    handler(parseInt(event.target.parentNode.parentNode.id));
                }
            });
        });
    }

    /**
     * @param  {callback} handler
     */
    bindRemoveItem(handler) {
        this.todoList.addEventListener('click', event => {
            this.todoList.querySelectorAll('.delete').forEach(element => {
                if (element === event.target) {
                    handler(parseInt(event.target.parentNode.parentNode.id));
                }
            });
        });       
    }
}
