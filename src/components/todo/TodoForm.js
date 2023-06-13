import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: {},
            taskName: '',
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
            error: ''
        })
        this.props.toggleShowModal()
    }

    handleSave = () => {
        if (this.state.taskName) {
            this.props.handleAdd({
                name: this.state.taskName,
                createdAt: new Date(),
                updatedAt: new Date(),
                finishedAt: null,
                isFinished: false,
            })
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
                        <Modal.Title>Thêm công việc mới</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control type="text" placeholder="Nhập công việc cần thêm mới" onChange={this.handleChange} />
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
