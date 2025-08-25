const {
  addEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  closeConnection,
} = require('./employeeModel');

// Add a new employee
addEmployee('Alice Johnson', 'alice.johnson@example.com', 'Sales');

// List all employees
// Use a timeout to wait for insert to finish (for demonstration only)
setTimeout(() => {
  getAllEmployees();
}, 1000);

// Update employee with ID 1
setTimeout(() => {
  updateEmployee(1, 'Alice J.', 'alice.j@example.com', 'Marketing');
}, 2000);

// Delete employee with ID 1
setTimeout(() => {
  deleteEmployee(1);
}, 3000);

// Close the connection after all operations
setTimeout(() => {
  closeConnection();
}, 4000);
