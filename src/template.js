export class Template {
    /**
     * @param  {ItemList} items
     * @return {string}
     */
    itemList(items) {
        return items.reduce((accumulator, currentValue) =>
            `${accumulator}
            <li class="list-group-item" id="${currentValue.id}">
                <span class="custom-control custom-checkbox d-flex align-items-center">
                    <input class="custom-control-input" type="checkbox" ${currentValue.completed ? 'checked' : ''}>
                    <label class="custom-control-label toggle">
                        ${this.escapeSpecialChars(currentValue.title)}
                    </label>
                    <button class="btn btn-primary ml-auto delete">Delete</button>
                </span>
            </li>
            `, '');
    }

    /**
     * @param  {string} string
     * @return {string}
     */
    escapeSpecialChars(string) {
        return string.replace(/[&'`"<>]/g, match => {
            return {
                '&': '&amp;',
                "'": '&#x27;',
                '`': '&#x60;',
                '"': '&quot;',
                '<': '&lt;',
                '>': '&gt;',
            }[match];
        });
    };
}
