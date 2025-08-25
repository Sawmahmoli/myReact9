import React from 'react'

const App0825 = () => {
    return (
        <div>
            <h2>本地端存取資料 - Local storage</h2>
            <button onClick={() => {
                // window.localStorage.setItem('key','value')
                window.localStorage.setItem('book1', 'HTML')
                window.localStorage.setItem('book2', 'CSS')
                window.localStorage.setItem('book3', 'React')
            }}>
                讀入資料
            </button>

            <button onClick={() => {
                // 指定key名稱
                // console.log(window.localStorage.getItem('book2'))

                // 使用迴圈讀取全部資料
                for (let i = 0; i < window, localStorage.length; i++) {
                    let key = window.localStorage.key(i);
                    console.log(window.localStorage.getItem(key));
                }
            }}>
                讀取資料
            </button>

            <button onClick={() => {
                window.localStorage.removeItem('book2');
            }}
            >刪除指定資料</button>

            <button onClick={() => {
                window.localStorage.clear();
            }}>!全部刪除!</button>
        </div>
    )
}

export default App0825