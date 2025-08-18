import React, { useState } from 'react'

// 建立元件
function MyComponent() {
  const [counts, setCounts] = useState(0);
  const handleClick = () => {
    setCounts(counts + 1);
  }
  return (
    <button id="btn1" onClick={handleClick} > 點擊次數：{counts}</button >
  )
}


const App0818 = () => {
  // let counts=0;
  const [counts, setCounts] = useState(0);  // 解構react函式 => 自動import
  return (
    <div>
      {/*將函式元件化 */}
      <MyComponent />

      {/*<button id="btn1" onClick={() => {
        // counts++;  
        setCounts(counts + 1);  // 使用 setCounts 的方法更改 counts 結果
        console.log(counts);
      }}>點擊次數：{counts}</button>
      */}

    </div>
  )
}

export default App0818