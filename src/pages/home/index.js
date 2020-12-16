import React from 'react'
import './home.css'
import 'react-slideshow-image/dist/styles.css'
import { Button, Divider } from 'antd'
import {
    Link,
} from "react-router-dom";

const Home = () => {

    return <div className="parent">
        <div className='circle-1'>
            <h3>𝑪𝑯𝑬𝑪𝑲 𝑽𝑶𝑻𝑬𝑹</h3>
            <hr style={{ width: '100px', alignItems: 'center' }}></hr>
            <br></br>
            <blockquote><q>
                မဲဆန္ဒရှင်စာရင်းတွင် မိမိတို့၏အမည်ပါ/မပါ၊<br />မိမိတို့၏အမည်နှင့် ကိုယ်ရေးအချက်အလက်များမှန်/မမှန်ကို <br />ဤနေရာတွင်ကြည့်ပါ
                    </q></blockquote>
            <br />
            <Link to="/voter">
                <Button className='button'>ကြည့်ရန်</Button>
            </Link>
        </div>
        <div className='circle-2'>
            <h3>𝑪𝑯𝑬𝑪𝑲 𝑪𝑨𝑵𝑫𝑰𝑫𝑨𝑻𝑬</h3>
            <hr className='hr' style={{ width: '150px', alignItems: 'center' }}></hr>
            <br></br>
            <blockquote><q>
                မိမိ‌မဲပေးမည့်ကိုယ်စားလှယ်လောင်းများ၏ <br />ကိုယ်ရေးအချက်အလက်များကို <br />ဤနေရာတွင်ကြည့်ပါ
                </q></blockquote>
            <br></br>
            <Link to="/candidate">
                <Button className='button'>ကြည့်ရန်</Button>
            </Link>
        </div>
        <div className='circle-3'>
            <h3>𝑪𝑯𝑬𝑪𝑲 𝑷𝑨𝑹𝑻𝒀</h3>
            <hr style={{ width: '100px', alignItems: 'center' }}></hr>
            <br></br>
            <blockquote><q>
                ပါတီစုံဒီမိုကရေစီအထွေထွေရွေးကောက်ပွဲတွင် ဝင်ရောက်ယှဉ်ပြိုင်ကြမည့် <br />နိုင်ငံရေးပါတီများ၏ အချက်အလက်များကို <br />ဤနေရာတွင်ကြည့်ပါ
                </q></blockquote>
            <br></br>
            <Link to="/party">
                <Button className='button'>ကြည့်ရန်</Button>
            </Link>
        </div>
        <div className='circle-4'>
            <h3>𝑪𝑯𝑬𝑪𝑲 𝑪𝑶𝑵𝑺𝑻𝑰𝑻𝑼𝑬𝑵𝑪𝒀</h3>
            <hr style={{ width: '100px', alignItems: 'center' }}></hr>
            <br></br>
            <blockquote><q>
                ပါတီစုံဒီမိုကရေစီအထွေထွေရွေးကောက်ပွဲအတွက် <br />သတ်မှတ်ထားသည့်လွတ်တော်မဲဆန္ဒနယ်မျာကို<br />ဤနေရာတွင်ကြည့်ပါ
                </q></blockquote>
            <br></br>
            <Link to="/constituency">
                <Button className='button'>ကြည့်ရန်</Button>
            </Link>
        </div>

        <Divider type='horizontal' />

        <div className='voter-edu'>
        <div class="hexagon-wrapper">
            <div class="hexagon">
                <i class="fab fa-facebook"></i>
            </div>
        </div>
        <div class="hexagon-wrapper">
            <div class="hexagon">
                <i class="fab fa-twitter"></i>
            </div>
        </div>
        <div class="hexagon-wrapper">
            <div class="hexagon">
                <i class="fab fa-instagram"></i>
            </div>
        </div>
        </div>
    </div>
}

export default Home;