// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-recipe-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = button.dataset.recipeId;

            // Example: Confirm and delete recipe
            if (confirm(`Are you sure you want to delete recipe ${recipeId}?`)) {
                // Example: Print recipe ID to console
                console.log(`Recipe ${recipeId} deleted`);

                // Here you can send a delete request to the server or handle it as needed
            }
        });
    });
});
