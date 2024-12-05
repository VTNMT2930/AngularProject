const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shopnk'
});

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Kiểm tra username đã tồn tại
    const existingUser = await User.findByUsername(connection, username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username đã tồn tại' });
    }

    // Tạo người dùng mới
    const userId = await User.create(connection, { username, email, password });
    
    res.status(201).json({ 
      message: 'Đăng ký thành công', 
      userId 
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi đăng ký', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Tìm người dùng
    const user = await User.findByUsername(connection, username);
    if (!user) {
      return res.status(401).json({ message: 'Người dùng không tồn tại' });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mật khẩu không chính xác' });
    }

    // Tạo token
    const token = jwt.sign(
      { id: user.id, username: user.username }, 
      'SECRET_KEY', 
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi đăng nhập', error: error.message });
  }
};