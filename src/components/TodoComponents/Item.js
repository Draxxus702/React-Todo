import React from 'react'



function Item(props){
    console.log('item props', props)
return(
    <div className={`item${props.item.checked ? 'checked' : ''}`}
    onClick={() => props.toggleItem(props.item.id)}
    >
        <p>{props.item.name}</p>
    </div>
)
}

export default Item