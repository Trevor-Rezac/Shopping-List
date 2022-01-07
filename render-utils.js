export function renderItem(item) {
    const itemDiv = document.createElement('div');
    const itemEl = document.createElement('div');

    itemEl.classList.add('item');
    itemEl.textContent = `${item.quantity} - ${item.item}`;

    itemDiv.append(itemEl);
    return itemDiv;
}