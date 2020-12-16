import React from 'react'
import { Layout } from 'antd';
import Header from './header'
import Navbar from './navbar'
import Marquee from './marquee'
import Footer from './footer'
import Routes from '../../router/routes'

const { Content } = Layout;

const WebsiteLayout = () => {
    return <Layout>
        <Header />
        <Navbar />
        <Marquee />
        <Content className="content">
            <Routes />
        </Content>
        <Footer />
    </Layout>
}
export default WebsiteLayout;