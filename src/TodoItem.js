import React from 'react'
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css'

function TodoItem(props) {
  return (    
    <li className='TodoItem'>
      <CompleteIcon/>
      <DeleteIcon/>
      {/*<span className={`Icon Icon-check ${props.completed && 'Icon-check--activate'}`}
      onClick={props.onComplete}>
        </span>*/
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
      /*<span className='Icon Icon-delete' 
      onClick={props.onDelete}>X</span>*/      
    }</li>
  )
}

export { TodoItem } ;