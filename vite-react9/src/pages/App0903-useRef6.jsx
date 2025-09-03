import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    // 建立 useRef 變數綁定物件
    const inputRef = useRef(null);

    function focusInput(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor='dodgerblue';
    }

    return (
        <div>
            <h2>useRef - 取得游標</h2><hr />

            <label htmlFor="input1">帳號</label>
            <input
                type="text"
                id='input'ref={inputRef} />

            <button onClick={focusInput}>get!</button>
        </div>
    )
}

export default App