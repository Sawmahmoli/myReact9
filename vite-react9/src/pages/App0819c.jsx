import React, { useState } from 'react'


function App0819c() {
    const [curImg, setCurImg] = useState();
    const arrPhoto = [
        "images/p4.jpg",
        "images/p8.jpg",
        "images/p10.jpg"
    ]

    return (
        <div>
            <h2>小圖換大圖</h2>
            <div>
                {
                    // 使用 map 取出小圖資料
                    arrPhoto.map((photo, index) => {
                        return (
                            < img
                                key={index}
                                src={photo}
                                width={140}
                                height={80}
                                style={{ cursor: "pointer" }}

                                // 左鍵縮圖
                                onClick={() => {
                                    // 更新大圖（最新縮圖索引值
                                    setCurImg(index);
                                    let showPic = document.querySelector('#showPic');
                                    showPic.style.display = "block";
                                }}
                            />
                        )
                    })}
            </div>
            <div>
                {/* 在這裡顯示大圖 */}
                <img
                    id="showPic"
                    src={arrPhoto[curImg]}
                    alt=""
                    width={420}
                    height={280}
                    style={{ display: "none" }}
                />
            </div>
        </div>
    )
}

export default App0819c