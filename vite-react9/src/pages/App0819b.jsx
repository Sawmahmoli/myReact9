import React, { Children } from 'react'

// 次元件
function SecondComponent({c}) {
    return <>
    <h2>SecondComponent</h2>
    <p>SecondComponent接收的{c}</p>
    </>
}

function Mycomponent2({b}){
    return(
        <>
            <h2>接收主元件傳遞的物件</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio cupiditate quidem consequuntur? Exercitationem laborum id et perferendis nobis repellat doloribus nihil, consectetur nam vel neque impedit recusandae officiis est!</p>
            <SecondComponent c={b}/>
            {b}
        </>
    )
}

// 子元件 => 接收主元件傳遞的元件
function Mycomponent({a,children}) {
    return (
        <>
            <h2>接收主元件傳遞的物件</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio cupiditate quidem consequuntur? Exercitationem laborum id et perferendis nobis repellat doloribus nihil, consectetur nam vel neque impedit recusandae officiis est!</p>
            {children}
            {a}
        </>
    )
}

// 主元件
const App0819b = () => {
    return (
        <div><h2>元件之間傳遞元件</h2><hr />
            <Mycomponent a="typeA">
                <SecondComponent c="typeC"/>
            </Mycomponent>

            <hr />
            {/* 逐層各自呼叫元件 */}
            <Mycomponent2 b="typeB"/>
        </div>
    )
}

export default App0819b