import React, { useRef } from 'react'

const App = () => {

    // 建立 useRef 變數綁定物件
    const ylwRef = useRef(null);
    const bluRef = useRef(null);
    const orgRef = useRef(null);

    // 黃色
    function turntoYellow() {
        ylwRef.current.style.backgroundColor = "greenyellow";
        bluRef.current.style.backgroundColor = "";
        orgRef.current.style.backgroundColor = "";
    }

    // 藍色
    function turntoBlue() {
        ylwRef.current.style.backgroundColor = ""
        bluRef.current.style.backgroundColor = "dodgerblue";
        orgRef.current.style.backgroundColor = "";

    }

    // 橘色
    function turntoOrange() {
        ylwRef.current.style.backgroundColor = ""
        bluRef.current.style.backgroundColor = "";
        orgRef.current.style.backgroundColor = "orange";
    }

    return (
        <div>
            <h2>useRef - 點擊方塊變色</h2><hr />

            <div>
                Yellow!
                <input
                    ref={ylwRef}
                    onFocus={turntoYellow}
                    style={{ border: '1px solid', width: '100px', height: '100px' }}>
                </input>
            </div>
            <br />
            <div>
                Blue!
                <input
                    ref={bluRef}
                    onFocus={turntoBlue}
                    style={{ border: '1px solid', width: '100px', height: '100px' }}>
                </input>
            </div>
            <br />
            <div>
                Orange!
                <input
                    ref={orgRef}
                    onFocus={turntoOrange}
                    style={{ border: '1px solid', width: '100px', height: '100px' }}>
                </input>
            </div>
        </div>
    )
}

export default App