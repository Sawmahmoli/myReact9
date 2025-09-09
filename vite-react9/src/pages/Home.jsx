import React, { useEffect, useState } from 'react'
import Search from '../components/Search';
import Picture from '../components/Picture';
import '../css/home.css'

const Home = () => {

  // 文字方塊 (輸入狀態
  const [input, setInput] = useState('');

  // 所讀取的資料
  const [data, setData] = useState([]);

  // 目前頁數
  const [page, setPage] = useState(1);

  // 目前查詢的內容
  const [curSearch, setCurSearch] = useState('');

  // API Key (自子的API
  const auth = 'Y8oiT8CYul0aK9xYhd4Ibe1cr98grDiP7ODKiesJ5W14TafzP6oPQdA2'
  // 精選照片連結
  const initialURL = 'https://api.pexels.com/v1/curated?per_page=10&page=1'
  // 關鍵字搜尋連結
  const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=1`


  // Initial => 取得圖庫資料
  const search = async (url) => {
    // 連上API
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",  // 設定所取得檔案格式
        Authorization: auth,         // 設定屬性
      },
    });

    // 取得資料
    const photosData = await dataFetch.json();
    // console.log(photosData);
    setData(photosData.photos);

    // 更改頁數
    setPage(2);
  }

  // Load more => 更多圖片
  const morePic = async () => {
    // 判斷式 => 更新連結狀態
    let newURL;
    if (curSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`;
    }

    // 連上API => 取得資料前要先連上API(同上)
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",  // 設定所取得檔案格式
        Authorization: auth,         // 設定屬性
      },
    });

    // 取得資料
    const photosData = await dataFetch.json();
    // 串接陣列資料 contact()
    setData(data.contact(photosData.photos));

    // 更改頁數
    setPage(page + 1);

  }

  // 進入網頁時立刻呼叫search函式
  useEffect(() => {
    search(initialURL);
  }, [])

  // curSearch 異動時，重新取得圖片
  useEffect(() => {
    if (curSearch === "") {
      // 預設 => 沒有關鍵字
      search(initialURL)
    } else {
      search(searchURL);
    }
  }, [curSearch])

  return (
    <div className='home'>

      {/* 搜尋列 */}
      <Search
        // 按下 search 按鈕 => 將查詢關鍵字帶入 searchURL後，再執行 search()
        search={() => {
          setCurSearch(input);
        }}
        // 取得文字方塊內容
        setInput={setInput}
      />

      {/* 顯示圖片 */}
      <div className="pictures">
        {
          // 檢查data是否有資料 => && 有資料
          data &&
          data.map((pic) => {
            return <Picture key={pic.id} data={pic} />
          })
        }
      </div>

      {/* 更多圖片 */}
      <div className="morePictures">
        <button onClick={morePic}>Load more</button>
      </div>
    </div>
  )
}

export default Home;