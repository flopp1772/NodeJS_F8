# 🎓 Web Khóa Học (Node.js + Express + MongoDB)

Đây là một dự án web khóa học được xây dựng bằng Node.js theo mô hình MVC. Người dùng có thể xem danh sách khóa học, tạo, chỉnh sửa, xoá (soft delete) và quản lý nội dung.

---

## 🚀 Tính năng chính

- 📚 Hiển thị danh sách khóa học
- ➕ Thêm khóa học mới
- 📝 Chỉnh sửa khóa học
- 🗑️ Xoá mềm (Soft delete) khóa học
- ♻️ Khôi phục khóa học đã xoá
- ❌ Xoá vĩnh viễn (Force delete)
- 🔎 Phân trang, tìm kiếm (nếu có)
- 🧩 Tổ chức theo mô hình MVC rõ ràng
- 🎨 Giao diện sử dụng Handlebars + SCSS + Bootstrap

---

## 🛠️ Công nghệ sử dụng

| Công nghệ       | Vai trò                           |
|----------------|------------------------------------|
| Node.js         | Nền tảng JavaScript backend       |
| Express.js      | Framework xây dựng web server     |
| MongoDB         | Cơ sở dữ liệu NoSQL               |
| Mongoose        | Quản lý mô hình dữ liệu           |
| mongoose-delete | Plugin xoá mềm dữ liệu            |
| Handlebars      | Template engine                   |
| SCSS            | CSS mở rộng                       |
| Bootstrap       | Thư viện UI                       |
| npm             | Quản lý dependencies              |

---

## 📁 Cấu trúc thư mục

```
.
├── node_modules/
├── public/
│   └── css/
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   ├── config/db/
│   ├── public/
│   │   └── img/, css/
│   └── resources/
│       ├── views/
│       └── scss/
├── routes/
│   ├── courses.js
│   ├── site.js
│   ├── me.js
│   ├── news.js
│   └── index.js
├── .gitignore
├── nodemon.json
├── package.json
├── package-lock.json
└── README.md
```

---

## ▶️ Cài đặt & chạy

### 1. Clone dự án

```bash
git clone https://github.com/your-username/course-app.git
cd course-app
```

### 2. Cài dependencies

```bash
npm install
```

### 3. Khởi động MongoDB

Đảm bảo bạn đã cài MongoDB và chạy dịch vụ:

```bash
mongod
```

### 4. Chạy ứng dụng (dev mode)

```bash
npm run dev
```

Ứng dụng chạy tại: [http://localhost:3000](http://localhost:3000)

---

## 📌 Ghi chú

- Dự án sử dụng soft delete bằng plugin `mongoose-delete`.
- Không nên trộn lẫn `npm` và `yarn`.