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
        if(this.state.newTodo){

            this.props.addTodo(this.state.newTodo);
            this.setState({
                newTodo: ''
            });
        }else{
            alert('You must submit something.');
        }
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