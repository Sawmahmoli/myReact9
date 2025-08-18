import React, { useState } from 'react'

const App0818d = () => {
    const [select, setSelect] = useState("");  // useState 使用空字串

    // 建立下拉式清單選項陣列
    const opList=['HTML', 'CSS', 'JavaScript', 'React'];

    // 建立下拉式清單選項內容
    const opListValue=['HTML', 'CSS', 'JavaScript', 'React'];

    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <p>目前選取：{select}</p>
            <select name="" id="" 
                value={select} 
                onChange={(e) => {
                    setSelect(e.target.value);
            }}>
                <option value="" disabled>Select</option>  {/* disabled => 僅看不選取 */}
                {
                    opList.map((item, index)=>{
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }                
                {/*
                <option value="">Select</option>              
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option>
                */}
            </select>
        </div>
    )
}

export default App0818d