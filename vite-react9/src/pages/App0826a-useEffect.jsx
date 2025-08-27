import $ from 'jquery'
import { useEffect } from 'react';
import React from 'react'
import '../css/App0826a.css';

const App = () => {
    useEffect(() => {
        console.log('useEffect');

        // 當滑鼠碰到圖片 => 放大！
        // document.querySelecter(zoom)
        $('.zoom').on('mouseover', function () {
            $(this).addClass('imgScale');
        })

        /*
        // 箭頭函式
        $('.zoom').on('mouseover', (e)=> {
            $(e.currentTarget).addClass('imgScale');
        })
        */

        // 當滑鼠離開圖片 => 還原！
        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    }, [])


    return (
        <div>
            <h1>useEffect</h1>
            <h2>jQuery - 圖片縮放</h2>
            <a href="#" className="zoom">
                <img src="./images/p4.jpg" alt="" />
            </a>
        </div>
    )
}

export default App