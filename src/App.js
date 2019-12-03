import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todos = [
  {
    name: 'Do Laundry',
    id: 123,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
      anotherTodo: '',
      show: true,
    };
  };
addTodo = newTodoText => {
  const newTodo = {
    name: newTodoText,
    id: Date.now(),
    completed: false,
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
  };

  handleComplete = e => {
    console.log("correct!");
    this.setState({
      todos: this.state.todos.map(todo => {
        console.log(e.target);
        if (todo.id===Number(e.target.id)) {
          todo.completed=!todo.completed
        }
        return todo;
      })
    });
  }

  

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Time ToDo Me!</h2>
        <TodoForm addTodo={this.addTodo}/>

        <TodoList todos={this.state.todos} handleComplete={this.handleComplete} />
      </div>
    );
  }
}

export default App;
