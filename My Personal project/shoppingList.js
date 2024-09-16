// shoppingList.js

document.addEventListener('DOMContentLoaded', () => {
    const generateListButton = document.getElementById('generateListButton');
    generateListButton.addEventListener('click', () => {
        const ingredientItems = document.querySelectorAll('.ingredient-item');
        const shoppingList = [];

        ingredientItems.forEach(item => {
            const ingredient = item.textContent;
            shoppingList.push(ingredient);
        });

        // Example: Print shopping list to console
        console.log('Shopping List:', shoppingList);

        // Here you can generate a downloadable list or display it as needed
    });
});
