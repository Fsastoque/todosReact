import React from 'react'
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'

function TodoItem(props) {
  return (    
    <li className='TodoItem'>
      <CompleteIcon 
        completed={props.completed}
        onComplete = {props.onComplete}
      />
      <DeleteIcon
        onDelete = {props.onDelete}
      />
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