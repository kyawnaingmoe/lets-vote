import React from 'react'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const WebsiteFooter = () => {
    return <>
        <div className="footer">
            <div>
                <p>CONTACT US</p>
                <PhoneOutlined /> <a href="tel:+959-400-234-455" title='Call Now'> +959-400-234-455 </a><br />
                <MailOutlined /> <a href="mailto: vs-sgg@gmail.com" title='message us'> vs-sgg@gmail.com</a><br />
                <EnvironmentOutlined /><a> General Aung San Road, Monywa Township, Sagaing Division , Myanmar.</a>
            </div>
            <div>
                <p>REFERENCES</p>
                <a href='http://uec.gov.mm' title='ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော် ပြည်ထောင်စုရွေးကောက်ပွဲကော်မရှင်'>http://uec.gov.mm</a><br />
                <a href='https://www.themimu.info/' title='Myanmar Information Management Unit'>https://www.themimu.info/</a>
            </div>
            <div >
                <p>ABOUT US</p>
                <p><a href='/about'>Election Department Sagaing Region</a></p>
            </div>
        </div>
        <div className="sub-footer">
            Copyright @ 2020 <a style={{color: 'white'}} href="http://localhost:7000"> Election Department Sagaing Region</a>. All rights received
    </div>
    </>
}
export default WebsiteFooter;