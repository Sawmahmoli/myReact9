import React, { useEffect } from 'react';
import '../css/App0811-1.css';
import { IoIosUmbrella } from "react-icons/io";
import axios from 'axios';

const App = () => {

    // useEffect()=>渲染後只呼叫一次json
    useEffect(() => {

        // 非同步取出資料的方法
        (async () => {
            // 取得public中的json檔
            /*
            const data = await axios.get('./F-C0032-001.json')
            // 檢查是否連上json
            console.log(data.data.cwaopendata.dataset);
            */
           // 取得src中的json檔
           const data = await axios.get('./src/json/F-C0032-001.json')  // 取出json資料須寫上對應路徑名稱
           // 檢查是否連上json
           console.log(data.data.cwaopendata.dataset);



        })();  // 要加上「();」呼叫
    }, [])


    return (
        <>
            <div className='wrap'>
                {/* 卡片標題 */}
                <div className='title'>臺北市</div>

                {/* 卡片內容 */}
                <div className="cardbox">

                    <div className="card">
                        <div className='date'>11日</div>
                        <div className='time'>
                            上午6:00<br />~<br />下午6:00<br />
                        </div>
                        <div className='img'>
                            {/* 天氣圖:使用執行路徑，所以要將圖片放在divublic資料夾中才讀得到 */}
                            <img src='./weatherIcon/晴午後短暫雷陣雨.svg' alt="..." />
                        </div>
                        <div className='desc'>晴午後短暫雷陣雨</div>
                        <div className='chace'><IoIosUmbrella />80%</div>  {/* import icon */}
                    </div>

                    <div className="card">
                        <div className='date'>11日</div>
                        <div className='time'>
                            上午6:00<br />~<br />下午6:00<br />
                        </div>
                        <div className='img'>
                            {/* 天氣圖:使用執行路徑，所以要將圖片放在divublic資料夾中才讀得到 */}
                            <img src='./weatherIcon/晴午後短暫雷陣雨.svg' alt="..." />
                        </div>
                        <div className='desc'>晴午後短暫雷陣雨</div>
                        <div className='chace'><IoIosUmbrella />80%</div>  {/* import icon */}
                    </div>

                    <div className="card">
                        <div className='date'>11日</div>
                        <div className='time'>
                            上午6:00<br />~<br />下午6:00<br />
                        </div>
                        <div className='img'>
                            {/* 天氣圖:使用執行路徑，所以要將圖片放在divublic資料夾中才讀得到 */}
                            <img src='./weatherIcon/晴午後短暫雷陣雨.svg' alt="..." />
                        </div>
                        <div className='desc'>晴午後短暫雷陣雨</div>
                        <div className='chace'><IoIosUmbrella />80%</div>  {/* import icon */}
                    </div>

                </div>

            </div>

        </>
    )
}

export default App;