import axios from 'axios';
import React, { useState } from 'react';

const App = () => {

    // 檢查是否連上API
    const api = '';
    const accessKey = 'JKbBeSJOoux1vuORh_X32dnM7Sa3wU75pRJ_w0R16xw';
    const [filterString, setFilterString] = useState('cafe');

    // 建立非同步的方法
    const getPhoto = async () => {
        console.log(`${api}?client_id=${accessKey}&query=${filterString}`)

        // 發出請求給遠端api => 傳回結果
        const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`)

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