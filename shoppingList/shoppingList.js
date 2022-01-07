import { checkAuth, logout, createItem, getItems, purchasedItem, deleteItems } from '../fetch-utils.js';

const itemForm = document.querySelector('form');
const shoppingListEl = document.querySelector('.shopping-list');
const deleteBtn = document.getElementById('delete-items-btn');

console.log(itemForm, shoppingListEl, deleteBtn);
checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

