const connection = require('./db');

const addEmployee = (name, email, department) => {
  const query = 'INSERT INTO employees1 (name, email, department) VALUES (?, ?, ?)';
  connection.query(query, [name, email, department], (err, results) => {
    if (err) {
      return console.error('Error inserting employee:', err);
    }
    console.log('Employee added with ID:', results.insertId);
  });
};

const getAllEmployees = () => {
  const query = 'SELECT * FROM employees1';
  connection.query(query, (err, results) => {
    if (err) {
      return console.error('Error fetching employees:', err);
    }
    console.log('Employees:', results);
  });
};

const updateEmployee = (id, name, email, department) => {
  const query = 'UPDATE employees1 SET name = ?, email = ?, department = ? WHERE id = ?';
  connection.query(query, [name, email, department, id], (err, results) => {
    if (err) {
      return console.error('Error updating employee:', err);
    }
    console.log(`Employee with ID ${id} updated.`);
  });
};

const deleteEmployee = (id) => {
  const query = 'DELETE FROM employees1 WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return console.error('Error deleting employee:', err);
    }
    console.log(`Employee with ID ${id} deleted.`);
  });
};

const closeConnection = () => {
  connection.end((err) => {
    if (err) {
      return console.error('Error closing connection:', err);
    }
    console.log('MySQL connection closed.');
  });
};

module.exports = {
  addEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  closeConnection,
};
