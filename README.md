# Ứng dụng hiển thị danh sách bài viết

## Đề bài:
- Sử dụng ReactJS + Redux Toolkit + Axios để hiển thị danh sách bài viết từ API
- API: https://jsonplaceholder.typicode.com/posts
- Ứng dụng thêm: React Bootstrap + React Router

### 2. Các bước thực hiện
#### 2.1. Cài đặt các thư viện
##### 2.1.1. React Bootstrap
```
npm install bootstrap react-bootstrap
```

##### 2.1.2. Redux
```
npm install redux react-redux
```

##### 2.1.3. Redux Toolkit
```
npm install @reduxjs/toolkit
```

##### 2.1.4. Axios (thư viện hỗ trợ gọi API)
```
npm install axios
```

##### 2.1.5. React Router
```
npm install react-router-dom
```

#### 2.2. Cấu hình các thư viện
##### 2.2.1. React bootstrap
```js
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
```

##### 2.2.2. React router
import BrowserRouter và bao thẻ App ở file `index.js`

##### 2.2.3. React redux toolkit
- Tạo reducers
- Tạo store
- Tạo actions
- import `Provider` và set thuộc tính `store` - bao thẻ App

#### 2.3. Dựng UI
- Dựng PostList component

#### 2.4. Lấy dữ liệu từ API
- import axios
- Dùng axios gọi API https://jsonplaceholder.typicode.com/posts
- Gán giá trị vào store
- ProductList component: đổ dữ liệu ra

#### 2.5. Đổ dữ liệu ra giao diện
