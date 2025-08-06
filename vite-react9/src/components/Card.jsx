import React from 'react'
// rafce => 使用模板
const Card = ({imgURL, title, desc, btnName, btnURL}) => {
    // 解構 => 把元件得到的參數給props
    // 逐一解構出來使用
    
    /*const {title}=props;
    const {desc}=props;
    const {btnName}=props;
    const {btnURL}=props;
    各項目可以並列如上述
    */

    return (
        <div className="card" >
            <img src={imgURL} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={btnURL} className="btn">{btnName}</a>
            </div>
        </div >
    )

}
export default Card;