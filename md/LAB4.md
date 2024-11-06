# JavaScript Lab 4

**CS 341 - Web Technologies**  
**Lab Assignment 4**  
**Due: 12th October 2024**

This assignment is designed for you to practice your HTML, CSS, and JavaScript knowledge, focusing on form validation and front-end management.

**Ashesi Honor Code applies!**

## Instructions

Your task is to enhance the Admin and Authentication Pages and create additional pages for our Simple Recipe Sharing Platform project. This is the fourth step in building a web application where users can register, log in, share recipes, save favorites, and leave comments. You are free to use any CSS framework, plugin, or library for styling in this exercise. For interactivity and design, you can incorporate JavaScript libraries, but avoid using frameworks like React, Next.js, Vue, and others.

## Simple Recipe-Sharing Platform

### Instructions:

This lab will focus on implementing form validation and frontend management for the recipe-sharing platform:

1. **Login Page:** Add form validation to the login form.
2. **Registration Page:** Add form validation to the registration form.
3. **User Management Page:** Enhance the existing page with form validation for editing users and confirmation for deletion.
4. **Recipe Management Page:** Enhance the existing page with form validation for adding and editing recipes and confirmation for deletion.

### Requirements:

#### 1. Login Page

For the Login Page (`login.html`):

- Design a clean and user-friendly login form.
- Include fields for email and password.
- Implement client-side validation:
  - Ensure all fields are filled before submission.
  - Validate email format.
  - Ensure the password meets the following criteria:
    - Minimum length of 8 characters
    - Contains at least one uppercase letter
    - Includes at least three digits
    - Contains at least one special character (e.g., @, #, $, etc.)
- Display appropriate error messages for invalid inputs.
- Add a link to the registration page for new users.

#### 2. Registration Page

For the Registration Page (`register.html`):

- Design a user-friendly registration form.
- Include fields for first and last name, email, password, and password confirmation.
- Implement client-side validation:
  - Ensure all fields are filled before submission.
  - Validate email format.
  - Ensure the password meets the following criteria:
    - Minimum length of 8 characters
    - Contains at least one uppercase letter
    - Includes at least three digits
    - Contains at least one special character (e.g., @, #, $, etc.)
  - Confirm that password and password confirmation match.
- Display appropriate error messages for invalid inputs.
- Add a link to the login page for existing users.

#### 3. User Management Page

Enhance the existing User Management Page (`users.html`):

- Update the edit user form with client-side validation:
  - Validate email format.
  - Ensure required fields are filled.
- Implement a confirmation dialog for user deletion:
  - Use JavaScript to display a confirmation prompt before deleting a user.
  - Proceed with deletion only if the user confirms. (This is a frontend-only interaction with no backend connection. Simply demonstrate how the user can confirm the deletion action.)
- Add a "View More" feature to see user details:
  - Display additional user information in a modal or expandable section.

#### 4. Recipe Management Page

Enhance the existing Recipe Management Page (`recipes.html`):

- Implement an "Add Recipe" feature:
  - Create a form for adding new recipes.
  - Include fields for the recipe:
    - **Recipe Title:** Name of the recipe.
    - **Ingredients:**
      - Origin: Where the ingredients come from (e.g., country or region).
      - Name: List of all ingredients used in the recipe.
      - Nutritional Value: Details about the nutrients in each ingredient.
      - Allergen Information: List any common allergens (e.g., nuts, dairy).
      - Shelf Life: How long the ingredients or prepared dish can be stored.
      - Quantity: The specific amount of an ingredient (e.g., "2" in 2 cups of flour).
      - Unit: The measurement for the quantity (e.g., cups, tablespoons, grams).
    - **Recipe Image:** A visual representation of the recipe.
    - **Preparation Time:** Time required for preparation (In Minutes).
    - **Cooking Time:** Time required for cooking (In Minutes).
    - **Serving Size:** The portion of food recommended per person.
    - **Food Description:** Brief summary of the dish, its flavor, and appeal.
    - **Calories per Serving:** Number of calories per portion.
    - **Food Origin:** Where the recipe originates from (e.g., cultural or geographical origin).
    - **Instructions:** Step-by-step guide on how to prepare and cook the dish.
- Implement client-side validation for all fields.
- Update the edit recipe form with client-side validation:
  - Ensure all required fields are filled.
  - Validate that cooking time is a positive number.
- Implement a confirmation dialog for recipe deletion:
  - Use JavaScript to display a confirmation prompt before deleting a recipe.
  - Proceed with deletion only if the user confirms. (This is a frontend-only interaction with no backend connection. Simply demonstrate how the user can confirm the deletion action.)
- Add a "View More" feature to see recipe details:
  - Display full recipe information in a modal or expandable section.

### General Requirements:

- Use HTML5 semantic tags to structure all pages.
- Implement responsive design using CSS media queries.
- Use JavaScript for all client-side validations and interactions.
- Ensure consistent styling across all pages.
- Implement appropriate error handling and user feedback for all forms.

### CSS Styling:

- Style all pages with a clean, modern, and consistent look.
- Ensure forms are visually appealing and easy to use.
- Use CSS to style validation error messages distinctly.
- Implement hover effects for interactive elements like buttons.

### JavaScript Functionality:

- Implement all form validations using JavaScript.
- Create functions for showing/hiding error messages.
- Implement the confirmation dialogs for delete operations.
- Add any necessary interactivity for the "View More" features.

### User Experience:

- Ensure all forms provide clear feedback on successful submission and errors.
- Use clear and descriptive labels for all form fields.
- Implement intuitive navigation between pages.
- Ensure all interactive elements (buttons, links) have appropriate hover states.

### Submission Guidelines:

- Submit a zip file containing the `login.html` (Login Page), `register.html` (Registration Page), `users.html` (User Management Page), `recipes.html` (Recipe Management Page), and CSS.
- Ensure your file is named appropriately (e.g., `login.html`).

### Project Description (for reference):

Create a basic recipe-sharing platform where users can register, log in, share recipes, save favorites, and leave comments. This project will allow you to practice CRUD operations, user authentication, and role-based access control while working on a practical application.

### Key Features (to be implemented in future submissions):

1. User Registration and Login
2. Recipe Management
3. Role-Based Access Control
4. Recipe Book Feature
5. Comment System
6. Simple User Interface
