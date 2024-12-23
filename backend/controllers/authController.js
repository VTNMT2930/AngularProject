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

    // Lấy thông tin người dùng vừa tạo
    const newUser = await User.findByUsername(connection, username);

    // Tạo token
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username },
      'SECRET_KEY',
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'Đăng ký thành công',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      },
      token
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

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi đăng nhập', error: error.message });
  }
};

// exports.register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Kiểm tra username đã tồn tại
//     const existingUser = await User.findByUsername(connection, username);
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username đã tồn tại' });
//     }

//     // Tạo người dùng mới
//     const userId = await User.create(connection, { username, email, password });

//     res.status(201).json({
//       message: 'Đăng ký thành công',
//       userId
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Lỗi đăng ký', error: error.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Tìm người dùng
//     const user = await User.findByUsername(connection, username);
//     if (!user) {
//       return res.status(401).json({ message: 'Người dùng không tồn tại' });
//     }

//     // Kiểm tra mật khẩu
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Mật khẩu không chính xác' });
//     }

//     // Tạo token
//     const token = jwt.sign(
//       { id: user.id, username: user.username },
//       'SECRET_KEY',
//       { expiresIn: '1h' }
//     );

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Lỗi đăng nhập', error: error.message });
//   }
// };
exports.createOrder = async (req, res) => {
  try {
    const {
      hotennguoinhan,
      sodienthoainhan,
      diachinhan,
      ghichu,
      products,
      totalPrice
    } = req.body;

    // Bắt đầu transaction
    connection.beginTransaction(async (err) => {
      if (err) {
        return res.status(500).json({ message: 'Lỗi bắt đầu giao dịch', error: err.message });
      }

      try {
        // Chèn thông tin đơn hàng chính
        const [orderResult] = await connection.promise().query(
          'INSERT INTO orders (hotennguoinhan, sodienthoainhan, diachinhan, ghichu, total_price) VALUES (?, ?, ?, ?, ?)',
          [hotennguoinhan, sodienthoainhan, diachinhan, ghichu, totalPrice]
        );

        const orderId = orderResult.insertId;

        // Chèn từng sản phẩm trong đơn hàng
        const orderItemsPromises = products.map(product =>
          connection.promise().query(
            'INSERT INTO order_items (order_id, product_id, product_name, quantity, price) VALUES (?, ?, ?, ?, ?)',
            [orderId, product.id, product.name, product.quantity, product.price]
          )
        );

        // Thực thi tất cả các truy vấn chèn sản phẩm
        await Promise.all(orderItemsPromises);

        // Commit transaction
        connection.commit((err) => {
          if (err) {
            return connection.rollback(() => {
              res.status(500).json({ message: 'Lỗi commit giao dịch', error: err.message });
            });
          }
          res.status(201).json({
            message: 'Đặt hàng thành công',
            orderId
          });
        });

      } catch (error) {
        // Rollback nếu có lỗi
        return connection.rollback(() => {
          res.status(500).json({ message: 'Lỗi tạo đơn hàng', error: error.message });
        });
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Lỗi đặt hàng', error: error.message });
  }
};