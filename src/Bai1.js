import React from 'react';

class Bai1 extends React.Component {
  render() {
    // Khai báo tiêu đề của trang
    const title = 'DANH SÁCH KHÓA HỌC';
    
    // Khai báo danh sách môn học
    const subjects = ['HTML', 'Javascript', 'Python', 'C#'];

    return (
      <div className="App">
        <h1>{title}</h1>
        <ul>
          {/* Thực hiện lặp qua từng 1 môn học (trong danh sách môn học) */}
          {subjects.map((item) => {
            
            // Hiển thị tên môn học ra màn hình
            return (<li>{item}</li>)
          })}
        </ul>
      </div>
    );
  }
}

export default Bai1;
