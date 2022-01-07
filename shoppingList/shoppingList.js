import { checkAuth, logout, createItem, getItems, purchaseItem, deleteItems } from '../fetch-utils.js';

const itemForm = document.querySelector('form');
const shoppingListEl = document.querySelector('.shopping-list');
const deleteBtn = document.getElementById('delete-items-btn');

// console.log(itemForm, shoppingListEl, deleteBtn);

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    await displayList();
});

itemForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(itemForm);

    const item = data.get('item');
    const quantity = data.get('quantity');

    await createItem(item, quantity);

    itemForm.reset();

    await displayList();
});

deleteBtn.addEventListener('click', async() => {
    await deleteItems();
    await displayList();
});

async function displayList() {
    const list = await getItems();

    shoppingListEl.textContent = '';

    for (let item of list) {
        const itemEl = document.createElement('p');

        itemEl.classList.add('item');
        itemEl.textContent = `${item.quantity} - ${item.item}`;

        if (item.purchased) {
            itemEl.classList.add('purchased');
        } else {
            itemEl.classList.add('not-purchased');
            
            itemEl.addEventListener('click', async() => {

                await purchaseItem(item.id);
                await displayList();
            });
        }
        shoppingListEl.append(itemEl);
    }
}

