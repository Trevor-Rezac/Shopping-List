export function renderItem(item) {
    const itemDiv = document.createElement('div');
    const itemEl = document.createElement('div');

    //trying to add a remove item button
    // const removeBtn = document.createElement('button');
    // removeBtn.textContent = 'Remove Item';

    itemEl.classList.add('item');
    itemEl.textContent = `${item.quantity} - ${item.item}`;

    itemDiv.append(itemEl);
    
    return (itemDiv);
}