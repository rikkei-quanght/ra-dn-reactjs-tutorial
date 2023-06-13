import React from 'react';
import TodoForm from './TodoForm';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            show: false,
            searchKeyWord: '',
        }
    }

    toggleShowModal = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleAdd = async (newTodo) => {
        newTodo.id = await this.getNextId();

        await this.setState({
            todoList: [
                ...this.state.todoList,
                newTodo
            ]
        });
        this.toggleShowModal();

        console.log(this.state.todoList)
    }

    getNextId = async () => {
        // Trường hợp 1: nếu todoList rỗng thì next ID sẽ là 1
        if (this.state.todoList.length === 0) {
            return 1;
        }
        // Trường hợp 2: Nếu todoList không rỗng thì next ID sẽ bằng ID lớn nhất trong danh sách todoList + 1
        else {
            // Lấy tất cả ID trong danh sách todoList lưu vào mảng idList
            const idList = this.state.todoList.map(todo => {
                return parseInt(todo.id);
            });

            // Lấy giá trị ID lớn nhất trong mảng idList
            const maxId = Math.max(idList);

            // Trả về next ID: ID lớn nhất trong danh sách todoList + 1
            return maxId + 1;
        }
    }

    handleEdit = (index) => {

    }

    handleDelete = async (index) => {
        const newTodoList = this.state.todoList.slice(index, 1);
        await this.setState({
            todoList: newTodoList
        })
    }

    handleSearchChange = async (e) => {
        await this.setState({
            searchKeyWord: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Danh sách việc cần làm</h1>
                <Form.Control type="text" placeholder="Nhập từ khóa" onChange={this.handleSearchChange} />
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Việc cần làm</th>
                            <th>Thời gian tạo</th>
                            <th>Thời gian cập nhật</th>
                            <th>Thời gian hoàn thành</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todoList.map((todo, index) => {
                            return (
                                <>
                                    {todo.name.toLowerCase().includes(this.state.searchKeyWord.toLowerCase()) && (
                                        <tr>
                                            <td>
                                                <Form.Check type="checkbox" />
                                            </td>
                                            <td>{todo.id}</td>
                                            <td>{todo.name}</td>
                                            <td>{moment(todo.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                                            <td>{moment(todo.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                                            <td>{moment(todo.finishedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                                            <td>
                                                <Button variant="warning" onClick={() => this.handleEdit(index)}>Sửa</Button>&nbsp;
                                                <Button variant="danger" onClick={() => this.handleDelete(index)}>Xóa</Button>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            );
                        })}
                    </tbody>
                </Table>
                <Button variant="primary" onClick={this.toggleShowModal}>Thêm mới</Button>
                <TodoForm show={this.state.show}
                    toggleShowModal={this.toggleShowModal}
                    handleAdd={this.handleAdd} />
            </div>
        );
    }
}

export default TodoList;
