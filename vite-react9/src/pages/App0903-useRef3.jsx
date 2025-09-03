import React, { useRef } from 'react'

const App = () => {

    // 建立useRef變數綁定
    const blueRef = useRef(null);
    const yellowRef = useRef(null);

    // 滑動到藍色
    function gotoBlue() {
        window.scrollTo({
            top: blueRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    // 滑動到黃色
    function gotoYellow() {
        window.scrollTo({
            top: yellowRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <h2>useRef - 滑動到指定位置</h2><hr />

            <div>
                <button onClick={gotoYellow}
                    ref={blueRef}
                    style={{ border: 'none', backgroundColor: 'blue', width: '100vh', height: '100vh' }}>
                    down!</button>
            </div>

            <div>
                <button onClick={gotoBlue}
                    ref={yellowRef}
                    style={{ border: 'none', backgroundColor: 'greenyellow', width: '100vh', height: '100vh' }}
                >up!</button>
            </div>
        </div>
    )
}

export default App