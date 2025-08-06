import './css/App0805-1.css'
function App() {  // jsx檔案名稱跟元件字首大寫
    // 一般變數
    const dogName="陳金里"
    // 屬性名稱變數
    const myClassName="myClass"
    // 方法
    function myClick(){
        alert('我是按鈕')
    }
    
    return (  // 頁面顯示內容
        <>
            <div>
                <p style={{color:'brown', fontSize:'24px', fontWeight:'bold'}} className={myClassName}>姓名：{dogName}</p>  {/* 行內css權重較高 */}
                <button type="button" onClick={myClick}>button</button>
                <button type="button" onClick={()=>
                    alert('我是按鈕')
                }>click!</button>

            </div>
        </>  // 建立空標籤存放多個區塊原件 => fragment

    )
}
export default App;  // 匯出!!