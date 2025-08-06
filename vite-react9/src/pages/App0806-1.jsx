// import React from 'react'

import'../css/App0806-1.css'
const App = () => {
    // 資料抽離
    const photos={
        photo1:{
            imgURL:'https://plus.unsplash.com/premium_photo-1680364536292-388f38a7db79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Boracay',
            desc:"畢業旅行",
            btnName:'熱帶',
            btnURL:'https://plus.unsplash.com/premium_photo-1680364536292-388f38a7db79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        photo2:{
            imgURL:'https://images.unsplash.com/photo-1754075756602-33e079cbc022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
            title:'Japan',
            desc:"串燒居酒屋",
            btnName:'街頭',
            btnURL:'https://images.unsplash.com/photo-1754075756602-33e079cbc022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D'
        },

        photo3:{
            imgURL:'https://plus.unsplash.com/premium_photo-1753836314060-e6d72ddab82d?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Shandao Temple',
            desc:"期末考",
            btnName:'學校',
            btnURL:'https://plus.unsplash.com/premium_photo-1753836314060-e6d72ddab82d?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }
    return (
        <>
            <div className='container'>

            <div className="card">
                <img src={photos.photo1.imgURL} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
            </div>

            <div className="card">
                <img src={photos.photo2.imgURL} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
            </div>

            <div className="card">
                <img src={photos.photo3.imgURL} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
            </div>

            </div>
        </>
    )
}

export default App;