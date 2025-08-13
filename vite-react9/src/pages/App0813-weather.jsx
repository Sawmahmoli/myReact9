import React, { useEffect, useState } from 'react';
import '../css/App0811-1.css';
import { IoIosUmbrella } from "react-icons/io";
import axios from 'axios';

const App = () => {
    // 建立 react變數 => 使用 useState
    // 存放各縣市資料
    // const [變數名稱, 更改變數名稱的方法] = useState(預設值);
    const [cities, setCities] = useState([]);

    // useEffect() => 渲染後只呼叫一次json
    // 取得渲染後的 DOM元素（HTML標籤） => 要寫在 useEffect 裡面
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
            const jsonData = await axios.get('../public/F-C0032-001.json')  // 取出json資料須寫上對應路徑名稱

            // 檢查是否連上json
            // console.log(jsonData.data.cwaopendata.dataset);

            // 取得各縣市天氣資料
            // (1)解構
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);

            // (2)將各縣市資料透過setCities方法 => 從陣列中取出更新給 cities變數
            setCities(location);

        })();  // 要加上「();」呼叫 => 否則無法執行
    }, []);


    // 卡片內容
    const CardBody = ({ cities, item, index }) => {
        return (
            <>
                <div className='date'>
                    {/* 11日 */}
                    {/* 使用日期時間函式 toLocaleString() */}
                    {
                        new Date(item.startTime).toLocaleString(undefined, {
                            day: 'numeric'
                        })
                    }
                </div>
                <div className='time'>
                    <div>
                        {/* 上午6:00 */}
                        {new Date(item.startTime).toLocaleString(undefined, {
                            hour: "numeric",
                            minute: "numeric"
                        })}
                    </div>
                    <div>~</div>
                    <div>
                        {/* 下午6:00 */}
                        {new Date(item.endTime).toLocaleString(undefined, {
                            hour: "numeric",
                            minute: "numeric"
                        })}
                    </div>
                </div>
                <div className='img'>
                    {/* 天氣圖:使用執行路徑，所以要將圖片放在divublic資料夾中才讀得到 */}
                    {/* <img src='./weatherIcon/晴午後短暫雷陣雨.svg' alt="..." /> */}
                    <img src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                </div>
                <div className='desc'>
                    {/* 晴午後短暫雷陣雨 */}
                    {item.parameter.parameterName}
                </div>
                <div className='chance'>
                    <IoIosUmbrella /> {/* import icon */}
                    {/* 80% */}
                    {
                        `${cities.weatherElement[4].time[index].parameter.parameterName
                        }%`}
                </div>
            </>
        )
    }

    // 卡片元件
    function Card({ cities }) {
        // 使用卡片屬性的參數
        // {} => 解構
        return (
            <div>
                {/* 取得縣市陣列跑迴圈 */}
                <div className='wrap'>

                    {/* 卡片標題 */}
                    <div className='title'>
                        {/* 臺北市 */}
                        {cities.locationName}
                    </div>

                    {/* 卡片內容 */}
                    <div className="cardbox">
                        {cities.weatherElement[0].time.map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <CardBody item={item} cities={cities} index={index} />
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        )
    }

    return (
        <>
            <h2>36小時天氣預報</h2>
            <div className='outer'>

                {/* jsx 語法要使用javascript => 使用大括號 */}
                {
                    cities.map((cities) => {  // 每得到一個縣市名就將值丟給(())中的變數
                        return (
                            // 呼叫元件 => 建立屬性
                            <Card cities={cities} key={cities.locationName} />  // 元件習慣字首大寫、需要有 key
                            // map 中的變數會給渲染中的卡片元件以建立屬性
                        )
                    })
                }
            </div>
        </>
    )
}

export default App;