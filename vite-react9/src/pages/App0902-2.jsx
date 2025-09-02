import React, { useContext } from 'react'
import { useState } from 'react';


const App = () => {
    
    // 共用區 => 可以跨元件使用
    const Context = React.createContext();
    // 建立帳號變數
    const [userName, setUserName] = useState('');
    // 登入鈕的控制
    const [isLogin, setIsLogin] = useState(false);
    
    // 按鈕控制變數
    const [signedIn, setSignedIn] = useState(false);

    // // 建立一個Nav元件
    // const Nav = () => {
    //     return (
    //         <div className='nav'>
    //             {/* 按鈕 */}
    //             <Btn />
    //         </div>
    //     )
    // }

    // // 建立按鈕
    // const Btn = () => {
    //     // 取出共用區的 signedIn 變數與 setSignedIn 方法
    //     const [signedIn, setSignedIn] = useContext(Context);
    //     return (
    //         <button
    //             onClick={() => setSignedIn(!signedIn)}>
    //             {signedIn ? "登出" : "登入"}
    //         </button>
    //     )
    // }

    // 建立登入元件
    const LoginForm = () => {
        // 從共用區 userContext 解構出 userName, setUserName
        const { userName, setUserName, setIsLogin } = useContext(Context);
        return (
            <>
                <label htmlFor="username">使用者名稱</label>
                <input
                    type="text"
                    id="userName"
                    placeholder='請輸入帳號'
                    value={userName}
                    onChange={(e) =>
                        setUserName(e.target.value)
                    }
                    autoFocus
                />
                <button type='button' onClick={() => { setIsLogin(true) }}>log in!</button>
            </>
        )
    }

    const Greeting = () => {
        // 從共用區 userContext 取得 userName
        const { userName } = useContext(Context);
        return (
            <div>
                Hi!{userName}
            </div>
        )

    }

    return (
        <div>
            <h2>useContext - 跨元件使用變數與函式</h2>
            <hr />
            <Context.Provider value={{ userName, setUserName, setIsLogin }}>
                {
                    isLogin ? <Greeting /> : <LoginForm />
                }
            </Context.Provider>
        </div>
    )
}

export default App