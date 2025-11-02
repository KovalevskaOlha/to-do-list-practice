import { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 14px;
  background: #2d2d2d;
  border: 1px solid #444;
  border-radius: 12px;
  color: #e0e0e0;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #dededeff;
  }
`;

class Filter extends Component {
  render() {
    return (
      <Input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Search..."
      />
    );
  }
}

export default Filter;