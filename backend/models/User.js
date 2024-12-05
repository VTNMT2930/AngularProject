const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

class User {
  static async create(connection, userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const [result] = await connection.promise().query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [userData.username, userData.email, hashedPassword]
    );
    return result.insertId;
  }

  static async findByUsername(connection, username) {
    const [rows] = await connection.promise().query(
      'SELECT * FROM users WHERE username = ?', 
      [username]
    );
    return rows[0];
  }
}

module.exports = User;