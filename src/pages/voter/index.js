import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { Table, Button, Space, Form, Input, Row, Col, Select, Collapse } from 'antd'
import { SearchOutlined, CloseCircleOutlined, LeftOutlined } from '@ant-design/icons';
import api from '../../api'

const { Option } = Select;

const { Panel } = Collapse;

const Voter = (props) => {
    const [form] = Form.useForm();

    const [voter, setVoter] = useState([])
    const [reload, setReload] = useState(false)

    const [wardList, setWardsList] = useState([])
    const [villageList, setVillageList] = useState([])
    const [townshipList, setTownshipList] = useState([])


    useEffect(() => {
        async function fetchData() {
            const result = await api().get('/voter')
            result && result.status === 200 && setVoter(result.data)

            const villageData = await api().get('/village')
            villageData && villageData.status === 200 && setVillageList(villageData.data)

            const wardsData = await api().get('/wards')
            wardsData && wardsData.status === 200 && setWardsList(wardsData.data)

            const townshipData = await api().get('/township')
            townshipData && townshipData.status === 200 && setTownshipList(townshipData.data)

        }
        fetchData();
    }, [reload]);

    const confirm = async (id) => {
        const result = await api().delete(`voter/${id}`)
        console.log(result, "result")
        result && result.data === "DELETED" && setReload(!reload)
    }

    const onFinish = async (values) => {
        let voter_name = values.voter_name
        let village_code = values.village_code
        let wards_code = values.wards_code
        let nric_no = values.nric_no

        const result = await api().get(`voter?query=voter_name:${voter_name},village_code:${village_code},wards_code:${wards_code},nric_no:${nric_no}`)
        result && result.status === 200 && setVoter(result.data)

    }

    const columns = [
        {
            title: 'မဲဆန္ဒရှင်အမည်',
            dataIndex: 'voter_name',
            key: 'voter_name',
            render: (text, record) => {
                let id = record.voter_id
                return <div>
                    <a href onClick={() => props.history.push(`/voter/${id}`)}>{text}</a>
                </div>
            }
        },
        {
            title: 'အဖအမည်',
            dataIndex: 'father_name',
            key: 'father_name'
        },
        {
            title: 'မှတ်ပုံတင်နံပါတ်',
            dataIndex: 'nric_no',
            key: 'nric_no'
        }
    ]
    const button = {
        margin: '20px 0px'
    }
    const handleClear = async () => {
        form.resetFields();
        const result = await api().get('/voter')
        result && result.status === 200 && setVoter(result.data)

    }

    return <div className="content">
        <p style={{ color: 'black', padding: '10px', marginTop: '10px' }}><LeftOutlined /><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ</Link> <LeftOutlined />မဲဆန္ဒရှင်များ</p>
        <div><p style={{ textAlign: "center", fontWeight: 'bolder', fontSize: '15px', boxShadow: ' 2px 2px 5px 2px rgba(0, 0, 0, 0.1)', borderRadius: '5px', padding: '10px', marginTop: '10px' }}>၂၀၂၀ပြည့်နှစ်၊ အထွေထွေရွေးကောက်ပွဲတွင် မဲပေးခွင့်ရရှိသည့် မဲဆန္ဒရှင်များစာရင်း <br></br><br></br>
စစ်ကိုင်းတိုင်းဒေသကြီး</p></div>

        <div style={{ textAlign: 'center', fontSize: '15px', borderRadius: '5px', boxShadow: '2px 2px 5px 2px  rgba(0, 0, 0, 0.2)', padding: '10px', }}>
            <Form layout="horizonal" onFinish={onFinish} form={form} size='medium'>
                <Row gutter={16}>
                    <Col sm={24} md={12} lg={12}>
                        <Form.Item name="voter_name">
                            <Input placeholder="မဲဆန္ဒရှင်အမည်ဖြင့်ရှာရန်"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter='16'>
                    <Col sm={24} md={12} lg={12}>
                        <Form.Item name="nric_no">
                            <Input placeholder='မှတ်ပုံတင်ဖြင့်ရှာရန်'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={24} md={12} lg={12}>
                        <Form.Item name="village_code">
                            <Select
                                showSearch
                                optionFilterProp="children"
                                allowClear
                                placeholder='ရွာအမည်ဖြင့်ရှာရန်'
                            >
                                {
                                    villageList && villageList.map((item) => {
                                        return <Option
                                            value={item.village_code}>{item.village_name}
                                        </Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={24} md={12} lg={12}>
                        <Form.Item name="wards_code">
                            <Select
                                showSearch
                                optionFilterProp="children"
                                allowClear
                                placeholder='ရပ်ကွက်အမည်ဖြင့်ရှာရန်'
                                style={{WebkitAppearance: 'none'}}
                            >
                                {
                                    wardList && wardList.map((item) => {
                                        return <Option
                                            value={item.wards_code}>{item.wards_name}
                                        </Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Space>
                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit" style={{ borderRadius: '15px' }}>
                        ရှာရန်
                                </Button>
                    <Button icon={<CloseCircleOutlined />} type="danger" onClick={handleClear} style={{ borderRadius: '15px' }}>
                        Cancel
                                </Button>
                </Space>
            </Form>
        </div>

        <br />
        <Table columns={columns} dataSource={voter} />
    </div>
}

export default withRouter(Voter);
