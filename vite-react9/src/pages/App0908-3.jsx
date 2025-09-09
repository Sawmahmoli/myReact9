import axios from 'axios';
import React, { useState } from 'react';

const App = () => {

    // 檢查是否連上API
    const api = '';
    const accessKey = 'JKbBeSJOoux1vuORh_X32dnM7Sa3wU75pRJ_w0R16xw';
    
    const [data, setData] = useState('cafe');

    // 建立非同步的方法
    const search = async (url) => {

        // 發出請求給遠端api => 傳回結果
        const dataFetch= await fetch(url,{
            mothed:"GET",
            headers:{
                Accept:""
            }
        })

        // 全部資料
        console.log(result);
    }

    getPhotos();


    return (
        <div>

        </div>
    )
}

export default App