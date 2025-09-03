import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [inputValue, setInputValue] = useState("");

    // 建立 useRef 變數綁定物件
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })

    return (
        <div>
            <h2>useRef - 次數異動</h2><hr />

            <p>type in the input field</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />

            <h2>count:{count.current}</h2>

        </div>
    )
}

export default App