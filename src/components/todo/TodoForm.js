import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            taskName: this.props.todo.name || '',
            error: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }

    toggleShowModal = () => {
        this.setState({
            error: '',
            taskName: ''
        })
        this.props.toggleShowModal()
    }

    handleSave = () => {
        if (this.state.taskName) {
            // Nếu có props todo thì là chỉnh sửa
            if (this.props.todo.id) {
                this.props.handleUpdate({
                    ...this.props.todo,
                    name: this.state.taskName,
                    updatedAt: new Date(),
                })
            } else {
                this.props.handleAdd({
                    name: this.state.taskName,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    finishedAt: null,
                    isFinished: false,
                })
            }
        } else {
            this.setState({
                error: 'Vui lòng nhập nội dung công việc.'
            })
        }
    }

    render() {
        const { error } = this.state

        return (
            <>
                <Modal show={this.props.show} onHide={this.toggleShowModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.todo.id ? 'Cập nhập công việc' : 'Thêm công việc mới'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.todo
                            ? <Form.Control type="text"
                                value={this.state.taskName}
                                placeholder="Nhập công việc cần thêm mới"
                                onChange={this.handleChange} />
                            : <Form.Control type="text"
                                placeholder="Nhập công việc cần thêm mới"
                                onChange={this.handleChange} />}
                        {error && (<p className='text-danger'>{error}</p>)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleShowModal}>Đóng</Button>
                        <Button variant="primary" onClick={this.handleSave}>Lưu</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default TodoForm;
