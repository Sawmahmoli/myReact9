import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from './EditForm';

const Todo = ({ todo, delTodo, toggleCompleted, toggleIsEdit }) => {
    return (
        todo.isEdit ? <EditForm todo={todo} />

            // 使用三元運算子的方法，控制是否套用css規則
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    <MdEdit
                        style={{ cursor: 'pointer', marginRight: '5px' }}
                        onClick={()=>{toggleIsEdit(todo.id)}}
                    />
                    <MdDelete
                        style={{ cursor: 'pointer' }}
                        onClick={() => { delTodo(todo.id) }}
                    />
                </div>

            </div>
    )
}

export default Todo