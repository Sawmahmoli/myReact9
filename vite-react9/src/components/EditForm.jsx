import React, { useState } from 'react'

const EditForm = ({ todo, editTodo }) => {

    const [editContent, setEditContent] = useState(todo.content);  // 建立狀態

    // 建立一個函式處理新增的todo資料
    const editData = () => {
        let input = document.getElementById('input');
        input.focus();  // 加入後不顯示游標

        if (content.length === 0) {
            alert('沒有輸入內容');
        } else {
            editTodo(todo.id, content);
        }
    }

    // 送出表單
    const handleSubmit = (e) => {
        // 取消送出的預設行為
        e.preventDefault();
        editTodo(todo.id, content);
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                id="input"
                type="text"
                placeholder='輸入待辦事項'
                value={editContent}
                onChange={(e) => {
                    // 去除資料前後空白 => trim
                    setEditContent(e.target.value.trim())
                }}
            />
            <button type="submit">done!</button>
        </form>
    )
}


export default EditForm