import React from 'react'
import { Divider, Space} from 'antd';
import './layout.css'
import Image from "./images/header.png"

const WebsiteHeader = () => {

    return <div className="heading">
        <Space>
        <div><img src={Image} /></div>
        <div style={{lineHeight: '20px', paddingTop: '18px'}}><h3>ELECTION<br />
        DEPARTMENT<br />
        <small style={{color: '#aaa',fontWeight:'200', fontSize: '15px'}}>SAGAING REGION</small></h3></div>
        </Space>
        <div><Space >
                <a href="/" style={{textDecoration: 'none', color: 'black'}}><li>Home</li></a><Divider type="vertical" />
                <a href="/voter" style={{textDecoration: 'none', color: 'black'}}><li>Voter</li></a><Divider type="vertical" />
                <a href="/candidate" style={{textDecoration: 'none', color: 'black'}}><li>Candidate</li></a><Divider type="vertical" />
                <a href="/party" style={{textDecoration: 'none', color: 'black'}}><li>Party</li></a><Divider type="vertical" />
                <a href="/constituency" style={{textDecoration: 'none', color: 'black'}}><li>Constituency</li></a><Divider type="vertical" />
                <a href="/contactus" style={{textDecoration: 'none', color: 'black'}}><li>Contact</li></a><Divider type="vertical" />
                <a href="/about" style={{textDecoration: 'none', color: 'black'}}><li>About</li></a>
        </Space>
        </div>

        
    </div>
}
export default WebsiteHeader;