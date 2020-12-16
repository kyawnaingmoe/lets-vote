import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../api'
import { Form, Input, Button, Row, Col, Card, Space } from 'antd'
import { CheckCircleOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const ConstituencyDetail = (props) => {

    const id = props.match.params.id
    const [constituency, setConstituency] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let result = await api().get(`/constituency/${id}`)
            // console.log(result.data, "result")
            result.data && setConstituency(result.data)
        } fetchData()
    }, []);

    return <div className="content">

        <Link to='/constituency'>
            <p style={{ color: 'black', padding: '10px', marginTop: '10px' }}><LeftOutlined /><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ</Link> <LeftOutlined />မဲဆန္ဒနယ်ဆိုင်ရာ</p>
        </Link>

        <div><p style={{ textAlign: "center", fontSize: '15px', boxShadow: ' 2px 2px 5px 2px rgba(0, 0, 0, 0.1)',borderRadius: '5px',fontWeight: 'bold', padding: '10px' }}>၂၀၂၀ ပြည့်နှစ်၊ ပါတီစုံဒီမိုကရေစီ အထွေထွေရွေးကောက်ပွဲအတွက် သတ်မှတ်ထားသည့် လွတ်တော် မဲဆန္ဒနယ်များ<br></br><br></br>စစ်ကိုင်းတိုင်းဒေသကြီး</p></div>
        {
            constituency ? <Card title="Constituency Information" style={{backgroundColor: 'whitesmoke'}}>
                <Form
                    initialValues={constituency}
                    layout="horizonal"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 15 }}
                    size='large'
                >
                    <Row>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="State Region"
                                name="state_region" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="District Name"
                                name="district_name" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Township Name "
                                name="township_name"
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Constituency Name"
                                name="constituency_name"
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Election Name"
                                name="election_name"
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
                : <div>Loading....</div>
        }
    </div>
}
export default withRouter(ConstituencyDetail);