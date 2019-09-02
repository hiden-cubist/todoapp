export class Controller {
    /**
     * @param  {Model} model
     * @param  {View} view
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddItem(this.handleAddItem.bind(this));
        this.view.bindToggleItem(this.handleToggleItem.bind(this));
        this.view.bindRemoveItem(this.handleRemoveItem.bind(this));
    }

    /**
     * @param  {string} title
     */
    handleAddItem(title) {
        this.model.add({
            id: Date.now(),
            title,
            completed: false
        }, () => {
            this.view.clearInput();
            this.view.showItems(this.model.items);
        });
    }

    /**
     * @param  {number} id
     */
    handleToggleItem(id) {
        this.model.toggle(id);
    }

    /**
     * @param  {number} id
     */
    handleRemoveItem(id) {
        this.model.remove(id, () => {
            this.view.showItems(this.model.items);
        });
    }
}
