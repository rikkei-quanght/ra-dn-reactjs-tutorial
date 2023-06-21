## SHOPPING CART

## 1. Cài đặt
### 1.1. Cài đặt redux
```
npm install redux react-redux
```

### 1.2. Cài đặt react-bootstrap
```
npm install bootstrap react-bootstrap
```

### 1.3. Cài đặt react-router-dom
```
npm install react-router-dom
```

## 2. Dựng UI
- Components: ProductList, ProductDetail, CartList
- Pages: Home, Cart

## 3. Cấu hình
### 3.1. Cấu hình react-router
- Import BrowserRouter trong file `index.js`
- Định nghĩa các routes ở `App.js`


### 3.2. Cấu hình react-redux

#### 3.2.1. Tạo reducers
- productReducer
- cartReducer

#### 3.2.2. Tạo store
- tạo file `./store/index.js`
- Import productReducer và cartReducer
- Combine 2 reducers trên
- createStore()

#### 3.2.3. Tạo action
- Thêm sản phẩm vào giỏ hàng (ADD_TO_CART)
- Xóa sản phẩm trong giỏ hàng (DELETE_FROM_CART)
- Thay đổi số lượng đặt hàng cho từng sản phẩm (CHANGE_QUANTITY)

### 3.3. Cấu hình react-bootstrap
import CSS `import 'bootstrap/dist/css/bootstrap.min.css';` vào file App.js hoặc index.js

## 4. Đổ dữ liệu
- Đổ danh sách sản phẩm
- Đổ dữ liệu giỏ hàng
- Hiển thị số lượng sản phẩm đã đặt trong giỏ hàng (hiển thị bên cạnh nút giỏ hàng)
- Hiển thị tổng giá

## 5. Xử lý sự kiện
- Xử lý thêm sản phẩm vào giỏ hàng
- Xử lý sự kiện xóa sản phẩm trong giỏ hàng
- Xử lý sự kiện thay đổi số lượng đặt hàng cho từng sản phẩm
