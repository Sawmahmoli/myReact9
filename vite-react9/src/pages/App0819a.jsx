import React from 'react'
// 建立子元件
// 直接使用props物件
function Mycomponent1(props) {
    props.c();
    return <>
        <div>Hello!標準版本</div>
        {/* 物件 => 屬性 + 方法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
    </>
}

// 物件解構 => {物件成員}
function Mycomponent2({a, b, c}) {
    // c();
    // return 內需加上大括號 {}
    return <>
        <div>Hello!解構版本</div>
        {/* 物件 => 屬性 + 方法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 物件解構 => {物件成員}
function Mycomponent3({a, b="default", c}) {
    c();
    return <>
        <div>Hello!解構版本</div>
        {/* 物件 => 屬性 + 方法 */}
        <div>{a}</div>
        <div>{b}</div>
    </>
}

// 父元件
const App0819a = () => {
    return (<>
        {/* 呼叫元件 */}
        <Mycomponent1 a="typeA" b="typeB" c={()=>{console.log("123")}}/><br />
        <Mycomponent2 a="typeA" b="typeB" c={()=>{console.log("456")}}/><br />
        <Mycomponent3 a="typeA" b="陳榮德" c={()=>{console.log("789")}}/>  {/* 順序可以交換 */}
    
    </>)
}

export default App0819a