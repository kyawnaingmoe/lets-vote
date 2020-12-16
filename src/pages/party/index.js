import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Form, Input, Row, Col, Select} from 'antd'
import { LeftOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import api from '../../api'
import { Link } from 'react-router-dom'

const { Option } = Select;

const Party = (props) => {

    const [form] = Form.useForm();
    const [party, setState] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await api().get('/party')
            result && result.status === 200 && setState(result.data)

        }
        fetchData()
    }, []);

    const onFinish = async (values) => {

        let party_name = values.party_name
        let abbreviation = values.abbreviation

        const result = await api().get(`party?query=party_name:${party_name},abbreviation:${abbreviation}`)
        result && result.status === 200 && setState(result.data)
    }

    const columns = [
        {
            title: 'Party Name',
            dataIndex: 'party_name',
            key: 'party_name',
            render: (text, record) => {
                let id = record.party_id
                return <div>
                    <a onClick={() => props.history.push(`/party/${id}`)}>{text}</a>
                </div>
            }
        },
        {
            title: 'Abbreviation',
            dataIndex: 'abbreviation',
            key: 'abbreviation'
        },
        {
            title: 'Chair Person',
            dataIndex: 'chair_person',
            key: 'chair_person'
        }
    ]

    const handleClear = async () => {
        form.resetFields();
        const result = await api().get('/party')
        result && result.status === 200 && setState(result.data)
    }

    return <div className="content">
                <p style={{ color: 'black', padding: '10px', marginTop: '10px' }}><LeftOutlined /><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ</Link> <LeftOutlined/>နိုင်ငံရေးပါတီဆိုင်ရာ</p>
                <div><p style={{ textAlign: "center", fontSize: '15px', boxShadow: ' 2px 2px 5px 2px rgba(0, 0, 0, 0.1)',borderRadius: '5px',fontWeight: 'bold', padding: '10px', marginTop: '10px' }}>၂၀၂၀ ပြည့်နှစ်၊ အထွေးထွေးရွေးကောက်ပွဲတင် ဝင်ရောက်ယှဉ်ပြိုင်ကြမည့် နိုင်ငံရေးပါတီများစာရင်း <br></br><br></br>စစ်ကိုင်းတိုင်းဒေသကြီ</p></div>
        
                <div style={{textAlign: 'center', fontSize: '15px', borderRadius:'5px', boxShadow: '2px 2px 5px 2px  rgba(0, 0, 0, 0.2)', padding: '10px', }}>
                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row gutter={20}>
                            <Col sm={24} md={8} lg={12}>
                                <Form.Item name="party_name" label="ပါတီအမည် ဖြင့်ရှာရန်">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col sm={24} md={8} lg={12}>
                                <Form.Item name="abbreviation" label="Abbreviation">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Space>
                            <Button icon={<SearchOutlined />} type="primary" htmlType="submit" style={{borderRadius: '15px'}}>ရှာရန်</Button>
                            <Button icon={<CloseCircleOutlined />} type="danger" onClick={handleClear} style={{borderRadius: '15px'}}>Cancel</Button>
                        </Space>
                    </Form>
                </div>
                    <br/>
                    <Table columns={columns} dataSource={party} />
            </div>
}

export default withRouter(Party);
