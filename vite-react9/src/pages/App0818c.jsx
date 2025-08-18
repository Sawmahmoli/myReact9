import React, { useState } from 'react'


// 捕捉文字方塊內容
const App0818c = () => {
  // const txt='user';
  const [txt, setTxt] = useState('user');  // 使用 useState 宣告變數

  return (
    <div>
      <h2>文字方塊</h2><hr />
      帳號：<input type="text" value={txt} onChange={(e) => {
        setTxt(e.target.value);
        console.log(e.target.value);
      }} />
      <button onClick={() => {
        alert(`帳號是 ${txt}`);
      }}>送出</button>
    </div>
  )
}

export default App0818c