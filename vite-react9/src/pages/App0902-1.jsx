import React, { useMemo } from 'react';
import { useState } from 'react';


const App = () => {
    // 表格資料
    const arrProd = [
        {
            id: 1,
            prodName: 'Coffee',
            prodPrice: 80,
            prodImgUrl: './images/p6.jpg',
        },
        {
            id: 2,
            prodName: 'Model1',
            prodPrice: 120,
            prodImgUrl: './images/p3.jpg',
        },
        {
            id: 3,
            prodName: 'Model2',
            prodPrice: 120,
            prodImgUrl: './images/p10.jpg',
        },
        {
            id: 4,
            prodName: 'Selfieeee!',
            prodPrice: 160,
            prodImgUrl: './images/p4.jpg',
        },
        {
            id: 5,
            prodName: 'Streetseen',
            prodPrice: 200,
            prodImgUrl: './images/p8.jpg',
        },
    ]

    // 表格元件
    const ProdTable = ({ ascFilterProds }) => {
        return (
            <table style={{ width: '500px', marginTop: '20px' }}>
                <tbody>
                    {
                        ascFilterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td style={{
                                        borderBottom: '1px dashed #d9d9d9',
                                        padding: '5px',
                                        width: '130px'
                                    }}>{prod.prodName}</td>
                                    <td style={{
                                        borderBottom: '1px dashed #d9d9d9',
                                        padding: '5px',
                                        width: '300px'
                                    }}><img src={prod.prodImgUrl} alt="" style={{ width: '200px' }} /></td>
                                    <td style={{
                                        borderBottom: '1px dashed #d9d9d9',
                                        padding: '5px',
                                        width: '70px'
                                    }}>{prod.prodPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    // 陣列變數
    const [prods, setProds] = useState(arrProd);

    // 排序變數 => 預設為遞增
    const [ascending, setAscending] = useState(true);

    // 搜尋變數，預設為空字串
    const [search, setSearch] = useState('');

    // 建立排序與搜尋的函式
    const ascFilterProds = useMemo(() => {
        return [...prods]
            // 排序
            .sort((a, b) => {
                return ascending
                    ? a.prodPrice - b.prodPrice  // 勾選(true) => 遞增
                    : b.prodPrice - a.prodPrice  // 否則(false) => 遞減
            })

            // 搜尋
            .filter((prod) => {
                return prod.prodName.match(search);
            })
    }, [ascending, search])

    return (
        <div className='wrap'>
            <h2>useMemo搜尋與排序</h2>
            <hr />
            排序：
            <input
                type="checkbox"

                // 綁定排序變數
                checked={ascending}

                // 當checkbox有異動 => 更新排序變數
                onChange={(e) => { setAscending(e.target.checked) }}
            />

            搜尋：
            <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />

            {/* 表格元件 */}
            <ProdTable ascFilterProds={ascFilterProds} />

        </div>
    )
}

export default App