import { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 14px;
  background: #2d2d2d;
  border: 1px solid #444;
  border-radius: 12px;
  color: #e0e0e0;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #d7d5d9ff;
  }
`;

const Button = styled.button`
  padding: 14px 24px;
  background: #286833ff;
  color: #ffffffff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #2e8335ff;
  }
`;

class TodoEditor extends Component {
  state = { textValue: '' };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const text = this.state.textValue.trim();
    if (text) {
      this.props.onSave(text);
      this.setState({ textValue: '' });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.textValue}
          onChange={this.handleChange}
          placeholder="Enter task"
        />
        <Button type="submit">add</Button>
      </Form>
    );
  }
}

export default TodoEditor;