import React from 'react';

const Todo = props => {

    return(
        <div className={`item${props.todo.completed ? '-completed' : ''}`} onClick={props.handleComplete} id={props.todo.id}>
            {props.todo.name}
        </div>
    )

}
export default Todo;