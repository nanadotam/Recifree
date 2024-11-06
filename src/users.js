// Mock data for users
let users = {
    1: {
        name: 'Nana Amoako',
        email: 'nana.amoako@ashesi.edu.gh',
        role: 'Admin',
        joined: '2024-10-03'
    },
    2: {
        name: 'Not Nana Amoako',
        email: 'not.nana.amoako@ashesi.edu.gh',
        role: 'User',
        joined: '2024-10-04'
    }
};

// Render users table
function renderUserTable() {
    const userTableBody = document.querySelector('.user-management tbody');
    userTableBody.innerHTML = ''; // Clear existing rows

    Object.keys(users).forEach((id) => {
        const user = users[id];
        const row = `
            <tr>
                <td>${id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser(${id})">Edit</button>
                    <button onclick="deleteUser(${id})">Delete</button>
                    <button onclick="viewUserDetails(${id})">View More</button>
                </td>
            </tr>
        `;
        userTableBody.insertAdjacentHTML('beforeend', row);
    });
}

// Delete User
function deleteUser(userId) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        delete users[userId]; // Remove user from the mock data
        renderUserTable(); // Re-render the table after deletion
        alert(`User ${userId} has been deleted.`);
    }
}

// Edit User
function editUser(userId) {
    const user = users[userId];
    if (user) {
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;

        // Update user on form submission
        document.getElementById('editUserForm').onsubmit = function (e) {
            e.preventDefault();
            users[userId].name = document.getElementById('name').value;
            users[userId].email = document.getElementById('email').value;

            renderUserTable(); // Re-render the table to reflect updates
            alert(`User ${userId} has been updated.`);
        };
    }
}

// View User Details in Modal
function viewUserDetails(userId) {
    const user = users[userId];
    if (user) {
        const modalContent = document.getElementById('userDetails');
        modalContent.innerHTML = `
            <strong>Name:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Role:</strong> ${user.role}<br>
            <strong>Date Joined:</strong> ${user.joined}
        `;
        document.getElementById('userModal').style.display = 'block';
    }
}

// Close modal
document.getElementsByClassName('close-btn')[0].onclick = function () {
    document.getElementById('userModal').style.display = 'none';
};

// Initialize
renderUserTable();
