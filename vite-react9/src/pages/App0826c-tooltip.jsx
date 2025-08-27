import React, { useEffect } from 'react'
import $ from 'jquery';
import '../css/App0826c.css';

const App = () => {

    // 監聽網頁的結構內容
    useEffect(() => {

        // has => 檢查是否有指定類別或指定 id
        $('a:has(.ttpShow)').on('mouseenter', function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({ top: e.pageY + 10, left: e.pageX + 10 }).fadeIn('fast');

        }).on('mousemove', function (e) {
            $('#ttpPanel').css({ top: e.pageY + 10, left: e.pageX + 10 });

        }).on('mouseleave', function (e) {
            $('#ttpPanel').remove();
        })

    })

    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cum at impedit. Ipsa, hic. Repellendus
                ipsum ut dolores debitis animi quas explicabo. Repudiandae quia illo amet reprehenderit, facere eum non vel
                nam veniam praesentium ea omnis minus quam quaerat ducimus quas rem? Praesentium impedit explicabo in
                facilis officiis nemo. Fugiat ducimus autem ipsa, corrupti maxime
                <a href="#">commodi
                    <span className="ttpShow">Tooltip-commodi 內容說明
                    </span>
                </a>
                architecto cupiditate aliquam
                rerum vero incidunt porro modi veritatis at odit quasi eos obcaecati. Dignissimos labore, expedita
                laudantium cupiditate nam harum natus autem nesciunt corrupti illo totam omnis nisi vitae reprehenderit
                eveniet dicta esse sapiente ducimus asperiores distinctio tenetur excepturi deleniti? Sit ratione maxime
                quae cum, accusamus ipsa adipisci sapiente laborum nulla, modi praesentium. Nam alias, dolores nostrum
                officiis eum nesciunt porro enim. Ab temporibus dolorem impedit numquam quod obcaecati animi porro? Tempora
                provident iusto explicabo aspernatur exercitationem facere, quaerat consequuntur accusantium excepturi quo
                ab minima ipsa cupiditate atque numquam molestiae alias inventore vero voluptates officia
                <a href="#">commodi
                    <span className="ttpShow">Tooltip-commodi 內容說明
                    </span>
                </a>
                adipisci
                amet consequatur maxime. Ipsum dignissimos aspernatur sit consequatur libero itaque rerum sequi, suscipit
                necessitatibus
                <a href="#"> commodi
                    <img src="images/p4.jpg" alt="" />
                    <span className="ttpShow">圖片說明</span>
                </a>
                . Nesciunt in
                suscipit, doloribus vel eos, accusamus dolor dolores
                velit illo atque
                beatae nulla perspiciatis quia quo? Ad, voluptas voluptates saepe et deserunt earum? Suscipit aperiam
                cupiditate odio sequi corrupti neque enim ad laborum beatae error saepe maxime veniam, iusto eius possimus,
                itaque illum veritatis reiciendis? Molestias odit, magni,
                <a href="#">commodi
                    <span className="ttpShow">Tooltip-commodi 內容說明
                    </span>
                </a>
                qui in cum sequi quas0
                illum fuga
                blanditiis error ullam. Voluptas voluptatem et, minima quidem vel est itaque fuga quae omnis possimus,
                cupiditate laborum. Numquam minus esse asperiores voluptas, sunt aut repellendus quidem pariatur vitae,
                repudiandae, tenetur maxime. In odit eaque quisquam alias quam excepturi, voluptates laboriosam! Saepe
                sapiente voluptatum modi et delectus in facere consequatur, tenetur quae quod. Tempore provident blanditiis
                expedita vitae perferendis quidem mollitia aliquam, vero aperiam corrupti tempora, sapiente architecto.
                Molestias sed sit libero non voluptatibus rerum.
            </p>
        </div>
    )
}

export default App