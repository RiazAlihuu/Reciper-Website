// recipeRating.js

document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-button');
    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const recipeId = button.dataset.recipeId;
            const rating = button.dataset.rating;

            // Example: Print rating to console
            console.log(`Recipe ${recipeId} rated with ${rating} stars`);

            // Here you can send rating data to the server or handle it as needed
        });
    });
});
