// Mock data for recipes
let recipes = {
    1: {
        title: 'Fufu',
        author: 'Marge',
        dateCreated: '2024-10-03',
        ingredients: 'Cassava, Plantains',
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        calories: 300,
        instructions: 'Boil cassava and plantains, then pound together.'
    }
};

// Add Recipe Button Toggle
document.getElementById('addRecipeButton').onclick = function() {
    const addSection = document.getElementById('addRecipeSection');
    addSection.style.display = addSection.style.display === 'none' ? 'block' : 'none';
};

// Add Recipe Form Submission
document.getElementById('addRecipeForm').onsubmit = function(e) {
    e.preventDefault(); // Prevent page refresh

    // Get the values from the form
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const prepTime = document.getElementById('prepTime').value;
    const cookTime = document.getElementById('cookTime').value;
    const servings = document.getElementById('servings').value;
    const calories = document.getElementById('calories').value;
    const instructions = document.getElementById('instructions').value;

    // Create a new recipe ID and add the recipe to the object
    const newId = Object.keys(recipes).length + 1;
    recipes[newId] = {
        title,
        author: 'Admin', // Can be updated dynamically later
        dateCreated: new Date().toISOString().split('T')[0],
        ingredients,
        prepTime,
        cookTime,
        servings,
        calories,
        instructions
    };

    // Re-render the recipes table and hide the add form
    renderRecipeTable();
    document.getElementById('addRecipeSection').style.display = 'none'; // Hide the add recipe form

    // Clear form fields after submission
    document.getElementById('addRecipeForm').reset();

    alert('Recipe added successfully!');
};

// Render recipes table
function renderRecipeTable() {
    const recipeTableBody = document.querySelector('.recipe-management tbody');
    recipeTableBody.innerHTML = ''; // Clear existing rows

    Object.keys(recipes).forEach((id) => {
        const recipe = recipes[id];
        const row = `
            <tr>
                <td>${id}</td>
                <td>${recipe.title}</td>
                <td>${recipe.author}</td>
                <td>${recipe.dateCreated}</td>
                <td>
                    <button onclick="editRecipe(${id})">Edit</button>
                    <button onclick="deleteRecipe(${id})">Delete</button>
                    <button onclick="viewRecipeDetails(${id})">View More</button>
                </td>
            </tr>
        `;
        recipeTableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Delete Recipe
function deleteRecipe(recipeId) {
    const confirmDelete = confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
        delete recipes[recipeId]; // Remove recipe from the mock data
        renderRecipeTable(); // Re-render the table after deletion
        alert(`Recipe ${recipeId} has been deleted.`);
    }
}

// Edit Recipe
function editRecipe(recipeId) {
    const recipe = recipes[recipeId];
    const editSection = document.getElementById('editRecipeSection');
    editSection.style.display = 'block'; // Show the form

    if (recipe) {
        document.getElementById('editTitle').value = recipe.title;
        document.getElementById('editIngredients').value = recipe.ingredients;
        document.getElementById('editPrepTime').value = recipe.prepTime;
        document.getElementById('editCookTime').value = recipe.cookTime;
        document.getElementById('editServings').value = recipe.servings;
        document.getElementById('editCalories').value = recipe.calories;
        document.getElementById('editInstructions').value = recipe.instructions;

        // Update recipe on form submission
        document.getElementById('editRecipeForm').onsubmit = function (e) {
            e.preventDefault(); // Prevent page refresh

            // Update the recipe with new values
            recipes[recipeId].title = document.getElementById('editTitle').value;
            recipes[recipeId].ingredients = document.getElementById('editIngredients').value;
            recipes[recipeId].prepTime = document.getElementById('editPrepTime').value;
            recipes[recipeId].cookTime = document.getElementById('editCookTime').value;
            recipes[recipeId].servings = document.getElementById('editServings').value;
            recipes[recipeId].calories = document.getElementById('editCalories').value;
            recipes[recipeId].instructions = document.getElementById('editInstructions').value;

            renderRecipeTable(); // Re-render the table to reflect updates

            // Hide the edit recipe form after submission
            editSection.style.display = 'none';

            alert(`Recipe ${recipeId} has been updated.`);
        };
    }
}

// View Recipe Details in Modal
function viewRecipeDetails(recipeId) {
    const recipe = recipes[recipeId];
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('recipeDetails');

    if (recipe) {
        modalContent.innerHTML = `
            <strong>Title:</strong> ${recipe.title}<br>
            <strong>Ingredients:</strong> ${recipe.ingredients}<br>
            <strong>Prep Time:</strong> ${recipe.prepTime} minutes<br>
            <strong>Cook Time:</strong> ${recipe.cookTime} minutes<br>
            <strong>Servings:</strong> ${recipe.servings}<br>
            <strong>Calories:</strong> ${recipe.calories}<br>
            <strong>Instructions:</strong> ${recipe.instructions}
        `;
        modal.style.display = 'block'; // Open the modal
    }
}

// Close modal when clicking the close button
document.querySelector('.close-btn').onclick = function () {
    document.getElementById('recipeModal').style.display = 'none'; // Close modal
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Close modal if clicked outside
    }
};

// Initialize
renderRecipeTable();
