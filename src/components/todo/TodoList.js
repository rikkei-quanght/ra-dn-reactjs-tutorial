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
            todo: {}
        }
    }

    toggleShowModal = async () => {
        await this.setState({
            show: !this.state.show
        })
        if (!this.state.show) {
            await this.setState({
                todo: {}
            })
        }
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
            const maxId = Math.max(...idList);

            // Trả về next ID: ID lớn nhất trong danh sách todoList + 1
            return maxId + 1;
        }
    }

    handleEdit = async (todo) => {
        await this.setState({
            // todo OR todo: todo
            todo: todo
        })
        this.toggleShowModal();
    }

    handleUpdate = (todoUpdate) => {
        const newTodoList = this.state.todoList.map((todo) => {
            if (todo.id == todoUpdate.id) {
                return todoUpdate;
            } else {
                return todo;
            }
        })
        this.setState({
            todoList: newTodoList
        })
        this.toggleShowModal();
    }

    handleDelete = async (id) => {
        const newTodoList = this.state.todoList.filter((todo) => {
            return todo.id !== id
        })
        await this.setState({
            todoList: newTodoList
        })
    }

    handleSearchChange = async (e) => {
        await this.setState({
            searchKeyWord: e.target.value
        });
    }

    handleFinished = async (event, id) => {
        const isChecked = event.target.checked;
        const newTodoList = this.state.todoList.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    updatedAt: new Date(),
                    finishedAt: isChecked ? new Date() : null,
                    isFinished: isChecked,
                };
            } else {
                return todo;
            }
        })
        await this.setState({
            todoList: newTodoList
        })
        console.log(this.state.todoList)
    }

    render() {
        const todoList = this.state.todoList.map((todo, index) => {
            return (todo.name.toLowerCase().includes(this.state.searchKeyWord.toLowerCase()) && (
                <tr key={index}>
                    <td>
                        <input type="checkbox"
                            checked={todo.isFinished}
                            onChange={(e) => this.handleFinished(e, todo.id)} />
                    </td>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                    <td>{todo.createdAt && moment(todo.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                    <td>{todo.updatedAt && moment(todo.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                    <td>{todo.finishedAt && moment(todo.finishedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                    <td>
                        <Button variant="warning" onClick={() => this.handleEdit(todo)}>Sửa</Button>&nbsp;
                        <Button variant="danger" onClick={() => this.handleDelete(todo.id)}>Xóa</Button>
                    </td>
                </tr>
            ))
        });

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
                        {todoList}
                    </tbody>
                </Table>
                <Button variant="primary" onClick={this.toggleShowModal}>Thêm mới</Button>
                {this.state.show && <TodoForm show={this.state.show}
                    toggleShowModal={this.toggleShowModal}
                    handleAdd={this.handleAdd}
                    todo={this.state.todo}
                    handleUpdate={this.handleUpdate} />}
            </div>
        );
    }
}

export default TodoList;
