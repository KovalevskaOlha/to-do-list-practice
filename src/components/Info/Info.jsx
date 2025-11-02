import { Component } from 'react';
import styled from 'styled-components';

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: #b4adadff;
  font-weight: 600;
  margin-bottom: 20px;
`;

class Info extends Component {
  render() {
    const { total, completed } = this.props;
    return (
      <Stats>
        <span>Total: {total}</span>
        <span>Done: {completed}</span>
      </Stats>
    );
  }
}

export default Info;