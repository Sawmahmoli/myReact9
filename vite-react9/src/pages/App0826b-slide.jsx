import React, { useState } from 'react';
import { useEffect } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
// css放在最後 => 權重
import '../css/App0826b.css'

export default function App() {

    // 預設為第一張圖
    const [currentIndex, setCurrentIndex] = useState(0);

    // 建立輪播圖片的陣列物件
    const slides = [
        { url: './images/p1.jpg', title: 'coffee shop', desc: '咖灰廰' },
        { url: './images/p4.jpg', title: 'feet', desc: '腳' },
        { url: './images/p5.jpg', title: 'wall', desc: '牆' },
        { url: './images/p6.jpg', title: 'coffee', desc: '咖灰' }
    ]

    // 建立輪播函式
    // 當currentIndex改變時 => 觸發useEffect
    useEffect(() => {

        // 每隔3秒呼叫nextSlide() => 換下一張圖片
        const autoplay = setInterval(() => {
            nextSlide();
        }, 10000)

        // 每隔3秒移除autoplay => 取得最新的索引編號
        return () => clearInterval(autoplay);
    }, [currentIndex]);


    // 上一張
    const prevSlide = () => {
        // 切換至目前索引位置
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? slides.length - 1
                : prevIndex - 1
        )

    }

    // 下一張
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1
                ? 0
                : prevIndex + 1
        )
    }

    // 左右按鈕
    const Arrow = ({ direction, onClick }) => {
        return (
            // 擺放箭頭的區域
            <div className='btn' style={{ [direction]: '150px'}}>
                {
                    direction === 'left'
                        ? (  // 左按鈕　
                            <MdArrowBackIos size={20} onClick={onClick}/>
                        )

                        : (  // 右按鈕
                            <MdArrowForwardIos size={20} onClick={onClick}/>
                        )
                }
            </div>
        )
    }

    return (
        <div className='wrapper'>

            {/* 滿版背景輪播區 */}
            <div className="slide">

                {/* 圖片輪播區 */}
                <div className='slideImg' style={{
                    backgroundImage: `url(${slides[currentIndex].url})`
                }}>
                </div>

                {/* 文字說明區 */}
                <div className='text'>
                    {slides[currentIndex].title}
                </div>

                {/* 左右按鈕區 */}
                <Arrow direction={'left'} onClick={prevSlide} />
                <Arrow direction={'right'} onClick={nextSlide} />

            </div>

        </div>
    )
}