import React, { useRef } from 'react'

const App = () => {

    // useState變數
    // const [inputValue, setInputValue] = useState('123');

    // useRef變數給input => 相當於 document.queryselecter 綁定
    const inputRef = useRef(null)

    console.log('App渲染成功！')

    function btnHandler() {
        // console.log(inputValue);

    // 查看 ref 物件
    console.log(inputRef);

    // 查看 ref 值
    console.log(inputRef.current.value);

    // 查看 ref 資料型別
    console.log(inputRef.current.type);

    // 更改類型
    inputRef.current.type="password";

    // 查看 ref 資料型別
    console.log(inputRef.current.type);

    }

    return (
        <div className='wrap'>
            <h2>useRef</h2><hr />

            {/* 使用useState */}
            {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}

            {/* 使用useRef */}
            <input type="text" ref={inputRef} />
            <button onClick={btnHandler}>Click</button>
        </div>
    )
}

export default App