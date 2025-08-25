import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

const TodoWrapper = () => {
    // (1)
    // 有N個todo事項 => 使用陣列存取
    // const[todos,setTodos]=useState(['parking fee!', 'invoice']);

    // (2)
    // 陣列內容若增減 => 索引值異動
    // 避免異動資料時造成索引值錯亂 => 陣列改為陣列物件！
    // 使用亂數產生 key

    // 判定todo內容是否被點擊 => 增加isCompleted屬性
    // 判定todo內容是否被修改 => 增加isEdit屬性

    const [todos, setTodos] = useState(
        [
            { content: 'parking fee!', id: Math.random(), isCompleted: false, isEdit: false },
            { content: 'invoice', id: Math.random(), isCompleted: false },
        ]
    );

    // 建立刪除todo
    // 傳入被刪除的todo.id
    const deltodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter保留沒有要被刪除的id
            return todo.id !== id
        }))
    }


    // 建立切換isCompleted的函式
    // isCompleted => false
    // isCompleted => true
    const toggleCompleted = (id) => {
        // 檢查 => 被點擊項目的id是否跟陣列中相同
        // (y) => 1.取出todo => 2.將isCompleted屬性反向(NOT)
        // (n) => todo不變
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }

    // 建立切換isEdit屬性的函式
    // isEdit => false
    // isEdit => true
    const toggleIsEdit = (id) => {
        // 檢查 => 被點擊項目的id是否跟陣列中相同
        // (y) => 1.取出todo => 2.將isEdit屬性反向(NOT)
        // (n) => todo不變
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isEdit: !todo.isEdit }
                : todo
        }))
    }

    // 建立修改todo的函式
    const editTodo = (id, editContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: editContent, isEdit: false }
                : todo
        }))
    }

    return (
        <div className='wrapper'>
            <h2>Todo-list</h2>
            {/* 方法(1) 傳送todos陣列資料與setTodos方法到Todo元件 */}
            <CreateForm todos={todos} setTodos={setTodos} />

            {/* 方法(2) 將setTodos方法包裝成一個帶有參數的方法傳遞給Todo元件 */}
            {/*
                <CreateForm addTodo={(newContent) => {
                    // 建立新的todo內容
                    // 使用...其餘運算子以保留原陣列內容
                    // 再加上新 !物件! 內容
                    setTodos([...todos, { content: newContent, id: Math.random(), isCompleted: false }])
                }} />
            */}

            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}
                        delTodo={deltodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />

                })
            }
        </div>
    )
}

export default TodoWrapper