import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
        };
    };

    handleChanges = e => {
        this.setState({newTodo: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        });
    };



    render(){
        console.log('rendering form');
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='todo'
                    placeholder='New Todo'
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    
                    />
                <button type='submit'>Submit</button>
               
            </form>
        )
    }
}

export default TodoForm;