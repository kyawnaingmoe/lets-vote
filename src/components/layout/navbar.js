import React from 'react'
import './layout.css'
import Image from "./images/header.png"
import { HomeOutlined, PhoneOutlined, InfoCircleOutlined, IdcardOutlined, EnvironmentOutlined, TeamOutlined, MenuOutlined, CloseOutlined, PieChartOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd'

const WebsiteHeader = () => {

    return <div className="heading-mobile">
        <Space>
        <div><img src={Image} /></div>
        <div style={{lineHeight: '20px', paddingTop: '20px'}}><h3>ELECTION<br />
        DEPARTMENT<br />
        <h4 style={{color: '#aaaa', fontSize: '16px'}}>SAGAING</h4></h3></div>
        </Space>
        <input type='checkbox' id='check' />
            <label for='check'>
                <MenuOutlined id='btn' />
                <CloseOutlined id='cancel' />
                </label>
        
        <div className='sidebar' >
            <header>Menu</header>
            <ul>
                <a href="/" style={{textDecoration: 'none', color: 'white'}}><li><HomeOutlined /> Home</li></a>
                <a href="/voter" style={{textDecoration: 'none', color: 'white'}}><li><IdcardOutlined /> Voter</li></a>
                <a href="/candidate" style={{textDecoration: 'none', color: 'white'}}><li><TeamOutlined /> Candidate</li></a>
                <a href="/party" style={{textDecoration: 'none', color: 'white'}}><li><PieChartOutlined /> Party</li></a>
                <a href="/constituency" style={{textDecoration: 'none', color: 'white'}}><li><EnvironmentOutlined /> Constituency</li></a>
                <a href="/contactus" style={{textDecoration: 'none', color: 'white'}}><li><PhoneOutlined /> Contact</li></a>
                <a href="/about" style={{textDecoration: 'none', color: 'white'}}><li><InfoCircleOutlined /> About</li></a>
            </ul>
        </div>
        
    </div>
}
export default WebsiteHeader;