import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Form, Input, Row, Col, Select, Collapse, Card, Metay} from 'antd'
import { LeftOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import api from '../../api'
import '../pages.css'
import {Link} from 'react-router-dom'

const { Option } = Select;

const { Panel } = Collapse;

const Candidate = (props) => {
    const [form] = Form.useForm();

    const [candidate, setState] = useState([])
    const [partyList, setPartyList] = useState([])
    const [constituencyList, setConstituencyList] = useState([])


    useEffect(() => {
        async function fetchData() {
            const result = await api().get('/candidate')
            result && result.status === 200 && setState(result.data)

            const partyData = await api().get(`/party`)
            partyData && partyData.status === 200 && setPartyList(partyData.data)

            const consData = await api().get('/constituency')
            consData && consData.status === 200 && setConstituencyList(consData.data)

        }
        fetchData()
    }, []);

    const onFinish = async (values) => {
        let candidate_name = values.candidate_name
        let party_id = values.party_id
        let constituency_id = values.constituency_id

        const result = await api().get(`candidate?query=candidate_name:${candidate_name},party_id:${party_id},constituency_id:${constituency_id}`)
        result && result.status === 200 && setState(result.data)

    }

    const handleClear = async() => {
        form.resetFields();
        const result = await api().get('/candidate')
        result && result.status === 200 && setState(result.data)

    }

    const columns = [
        {
            title: 'ကိုယ်စားလှယ်လောင်း အမည်',
            dataIndex: 'candidate_name',
            key: 'candidate_name',
            render: (text, record) => {
                let id = record.candidate_id
                return <div>
                    <a onClick={() => props.history.push(`/candidate/${id}`)}>{text} </a>
                </div>
            }
        },
        {
            title: 'ပါတီ အမည်' ,
            dataIndex: 'party_name',
            key: 'party_name',
            render: (text, record) => {
                let id = record.party_id
                return <div>
                    <a onClick={() => props.history.push(`/party/${id}`)}>{text} </a>
                </div>
            }
        },
        {
            title: 'မဲဆန္ဒနယ်',
            dataIndex: 'constituency_name',
            key: 'constituency_name'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image'
        }
    ]

    // const renderCard=columns.map((item, index) => {
    //     return (
    //         <Card style={{ width: '18rem'}} key={index}>
    //             <Card.Image variant="top" src={item.image}></Card.Image>
    //             <Card.Body>
    //                 <Card.Title>{item.candidate_name}</Card.Title>
    //                 <Card.Text>{item.party_name}</Card.Text>
    //             </Card.Body>
    //         </Card>
    //     )
    // })
    return <div className="content">
        <p style={{ color: 'black', padding: '10px', marginTop: '10px' }}><LeftOutlined /><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ</Link> <LeftOutlined/>ကိုယ်စားလှယ်လောင်းများ</p>
        <p style={{textAlign:"center", fontSize:'15px',boxShadow: ' 2px 2px 5px 2px rgba(0, 0, 0, 0.1)',borderRadius: '5px',fontWeight: 'bold', padding:'10px'}}>၂၀၂၀ပြည့်နှစ် ပါတီစုံဒီမိုကရေစီအထွေထွေရွေးကောက်ပွဲ၊ လွှတ်တော်ကိုယ်စားလှယ်လောင်း အမည်စာရင်း <br></br><br></br>
စစ်ကိုင်းတိုင်းဒေသကြီး</p>
                <div style={{textAlign: 'center', fontSize: '15px', borderRadius:'5px', boxShadow: '2px 2px 5px 2px  rgba(0, 0, 0, 0.2)', padding: '10px' }}>
                    <Form 
                        layout="vertical" 
                        onFinish={onFinish} 
                        form={form} 
                        >
                        <Row gutter={28}>
                            <Col sm={48} md={24} lg={24}>
                                <Form.Item name="candidate_name" label="ကိုယ်စားလှယ်လောင်းအမည် ဖြင့်ရှာရန်">
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={28}>
                            <Col sm={48} md={24} lg={24}>
                                <Form.Item name="party_id" label="ပါတီအမည်ဖြင့်ရှာရန်">
                                    <Select
                                        showSearch
                                        optionFilterProp="children"
                                        allowClear
                                    >
                                        {
                                            partyList && partyList.map((item) => {
                                                return <Option
                                                    value={item.party_id}>{item.party_name}
                                                </Option>
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={28}>
                            <Col sm={48} md={24} lg={24}>
                                <Form.Item name="constituency_id" label="မဲဆန္ဒနယ်ဖြင့်ရှာရန်">
                                    <Select
                                        showSearch
                                        optionFilterProp="children"
                                        allowClear
                                    >
                                        {
                                            constituencyList && constituencyList.map((item) => {
                                                return <Option
                                                    value={item.constituency_id}>{item.constituency_name}
                                                </Option>
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Space>
                                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit" style={{borderRadius: '15px'}}>
                                    ရှာရန်
                                    </Button>
                                    <Button icon={<CloseCircleOutlined />} type="danger" onClick={handleClear} style={{borderRadius: '15px'}}>
                                        ဖျက်ရန်
                                    </Button>
                                </Space>
                    </Form>
                </div>
        <br />
        <Table className="ant-table" columns={columns} dataSource={candidate} />
        
        {/* <Card style={{ width: '18rem'}} dataSource={candidate}>
                <Card.Image variant="top" src={`image:${image}`}></Card.Image>
                <Card.Body>
                    <Card.Title>{`candidate_name:${candidate_name}`}</Card.Title>
                    <Card.Text>{`party_name:${party_name}`}</Card.Text>
                </Card.Body>
            </Card>
         */}
         
    </div>
}

export default withRouter(Candidate);
