import React from 'react'

function TodoForm(props){
return(
<form onSubmit={props.handleSubmit}>
    <input
    type='text'
    name='name'
    value={props.todoText}
    onChange={props.handleChanges}
    
/>
<button className='add-button'>Add Item</button>
</form>
)
}
export default TodoForm