export class Model {
    constructor() {
        this.items = [];
    }

    /**
     * @param  {Item} item
     * @param  {callback} [callback]
     */
    add(item, callback = () => {}) {
        if (item.title.length === 0) {
            return;
        }
        
        this.items.push(item);
        callback();
    }

    /**
     * @param  {number} id
     * @param  {callback} [callback]
     */
    toggle(id, callback = () => {}) {
        this.items = this.items.map(item =>
            item.id === id
            ? {id: item.id, title: item.title, completed: !item.completed}
            : item);
        callback();
    }

    /**
     * @param  {number} id
     * @param  {callback} [callback]
     */
    remove(id, callback = () => {}) {
        this.items = this.items.filter(item => item.id !== id);
        callback();
    }
}
