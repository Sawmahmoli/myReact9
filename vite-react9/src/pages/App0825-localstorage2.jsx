import React from 'react'

const App = () => {

    const arrCitys = [
        {
            citiId: 1,
            cityName: "台北市",
        },
        {
            cityId: 2,
            cityName: "新北市",
        }
    ]

    return (
        <div>
            <h2>陣列物件存取 - 資料寫入Local storage</h2>
            <button onClick={() => {
                // console.log('before');
                // console.log(arrCitys);
                // 陣列物件轉字串
                let strCity = JSON.stringify(arrCitys)
                // console.log('after');
                // console.log(strCity);

                // 寫入local storage
                window.localStorage.setItem('citys', strCity)
            }}>
                讀入資料
            </button>

            <button onClick={() => {
                // 取出local storage資料 => 建立變數
                let getData = window.localStorage.getItem('citys');

                // 字串轉陣列物件
                let getArrData = JSON.parse(getData);
                console.log(getArrData);
                // 查看物件型別
                console.log(typeof getArrData);
            }}>
                讀取資料
            </button>

        </div>
    )
}

export default App