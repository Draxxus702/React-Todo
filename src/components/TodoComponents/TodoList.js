
import React from 'react';
import Item from './Item';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Item 
                key={item.id} 
                item={item} 
                toggleItem={props.toggleItem} />
            ))}
            <button className="clear-button" onClick={props.clearChecked}>
                Clear Item
            </button>
        </div>
    );
};

export default TodoList; 
