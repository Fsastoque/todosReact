import React from 'react'
import './TodosLoading.css'

function TodosLoading() {
  return (
    // <p>Cargando...</p>
    <div className='LoadignTodo-container skeleton'>
      <span className='LoadingTodo-completed skeleton'></span>
      <p className='LoadingTodo-text skeleton'></p>
      <span className='LoadingTodo-icon-delete skeleton'></span>
    </div>
  )
}

export { TodosLoading };