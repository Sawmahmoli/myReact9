import React, { useState } from 'react'

// 方法(1)
const CreateForm = ({ todos, setTodos }) => {

    const [content, setContent] = useState('');  // 建立狀態

    // 建立一個函式處理新增的todo資料
    const addData = () => {
        let input = document.getElementById('input');
        input.focus();  // 加入後不顯示游標

        if (content.length === 0) {
            alert('沒有輸入內容');
        } else {
            setTodos([...todos, { content: content, id: Math.random(), isCompleted: false }]);
            setContent('');
        }
    }

    return (
        <form className="create-form">
            <input
                id="input"
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => {
                    // 去除資料前後空白 => trim
                    setContent(e.target.value.trim())
                }}
            />
            <button type="button" onClick={addData}>+</button>
        </form>
    )
}


// 方法(2)
/*
const CreateForm = ({ addTodo }) => {
    const [content, setContent] = useState('');  // 建立狀態

    return (
        <form className="create-form">
            <input
                id="input"
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => { setContent(e.target.value.trim()) }}
            />
            <button type="button" onClick={() => {
                addTodo(content);
                setContent('');  // 清空輸入欄位
                let input=document.querySelector('input');
                input.focus();  // 加入後不顯示游標
            }}>+</button>
        </form>
    )
}
    */

export default CreateForm