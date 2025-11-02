import { Component } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 14px;
  background: #2d2d2d;
  border-radius: 12px;
  margin-bottom: 10px;
  border: 1px solid #444;
`;

const Text = styled.span`
  flex: 1;
  margin-left: 12px;
  color: ${p => p.completed ? '#666' : '#e0e0e0'};
  text-decoration: ${p => p.completed ? 'line-through' : 'none'};
`;

const DeleteBtn = styled.button`
  background: #da111188;
  color: white;
  border: none;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #db3a3ada;
  }
`;

class TodoList extends Component {
  render() {
    const { items, onDelete, onToggle } = this.props;

    return (
      <List>
        {items.map(todo => (
          <Item key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              style={{ transform: 'scale(1.2)', accentColor: '#a4ae9fff' }}
            />
            <Text completed={todo.completed}>{todo.text}</Text>
            <DeleteBtn onClick={() => onDelete(todo.id)}>
              delete
            </DeleteBtn>
          </Item>
        ))}
      </List>
    );
  }
}

export default TodoList;