import './App.css';
import initialTodos from"./data/todo.json";
import { Component } from "react";
import styled from "styled-components";

import TodoEditor from './components/Todo/TodoEditor';
import Filter from './components/Filter/Filter';
import TodoList from './components/TodoList/TodoList';
import Info from './components/Info/Info';

// стилиии
const Container = styled.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 32px;
  background: #1e1e1e;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
`;

const Title = styled.h1`
  text-align: center;
  color: #eceaeeff;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
`;


class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  }

  //добавить таску
  addTodo = (text) => {
  const newTodo = {
    id: `id-${Date.now()}`,
    text,
    completed: false,
  };
  this.setState(prev => ({
    todos: [...prev.todos, newTodo]
  }));
};

// удалить 
deleteTodo = (id) => {
    this.setState(prev => ({
      todos: prev.todos.filter(todo => todo.id !== id)
    }));
  };

  // статус сделано или не
  toggleCompleted = (id) => {
    this.setState(prev => ({
      todos: prev.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  // фильтр
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  // фильтрованные todos
  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalized = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalized)
    );
  };

  // количесвто сделанных заданий
  calculateCompletedTodos = () => {
    return this.state.todos.filter(todo => todo.completed).length;
  };

render() {
  const { todos, filter } = this.state;
  const visibleTodos = this.getVisibleTodos();
  const totalTodos = todos.length;
  const completedTodos = this.calculateCompletedTodos();

  return (
    <div className="App">
      <Container>
        <Title>Task List</Title>
        <Info total={totalTodos} completed={completedTodos} />
        <TodoEditor onSave={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          items={visibleTodos}
          onDelete={this.deleteTodo}
          onToggle={this.toggleCompleted}
        />
      </Container>
    </div>
  );
}
  
}

export default App;
