import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



const todosItems = [
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
      todos: todosItems,
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

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
    todos: this.state.todos.filter(todo => todo.completed !== true)  
  })
    }

  

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Time ToDo Me!</h2>
        <TodoForm addTodo={this.addTodo}/>

        <TodoList todos={this.state.todos} handleComplete={this.handleComplete} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
