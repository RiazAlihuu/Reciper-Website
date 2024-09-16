// recipeCreation.js

document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(recipeForm);
        
        // Collect form data
        const recipeData = {
            title: formData.get('title'),
            ingredients: formData.get('ingredients'),
            instructions: formData.get('instructions'),
            image: formData.get('image') // Assuming image is handled as a file
        };

        // Example: Print recipe data to console
        console.log('Recipe Created:', recipeData);

        // Here you can send data to the server or handle it as needed
    });
});
