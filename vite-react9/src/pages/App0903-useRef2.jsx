import React, { useRef } from 'react'

const App = () => {
    const inputRef = useRef(null);

    // 關閉密碼函式
    function closePassword() {
        // 動態改變型別 => password
        inputRef.current.type = "password";
    }


    // 顯示密碼函式
    function showPassword() {
        // 動態改變型別 => text
        inputRef.current.type = "text";
    }

    return (
        <div>
            <h2>useRef - 開關密碼</h2><hr />

            <input type="text" ref={inputRef}/>
            <button onClick={closePassword}>關閉密碼</button>
            <button onClick={showPassword}>查看密碼</button>
        </div>
    )
}

export default App