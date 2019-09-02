export class Template {
    /**
     * @param  {ItemList} items
     * @return {string}
     */
    itemList(items) {
        return items.reduce((accumulator, currentValue) =>
            `${accumulator}
            <li id="${currentValue.id}">
                <label>
                    <input class="toggle" type="checkbox" ${currentValue.completed ? 'checked' : ''}>
                    <span class="toggle-icon"></span>
                    ${this.escapeSpecialChars(currentValue.title)}
                </label>
                <button class="delete"></button>
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