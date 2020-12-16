import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Input, Card } from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import moment from 'moment'

import api from '../../api'

const { TextArea } = Input;

const DetailForm = (props) => {

    const id = props.match.params.id

    const [voter, setVoter] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let result = await api().get(`/voter/${id}`)
            var date = result.data.date_of_birth
            result.data.date_of_birth = moment(date).format('YYYY-MM-DD')
            console.log(result, "result")
            result && result.status === 200 && setVoter(result.data)
        }
        fetchData()
    }, [])

    return <div className="content">
        <p style={{ color: 'black', padding: '10px', marginTop: '10px' }}><LeftOutlined /><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ</Link> <LeftOutlined /><Link to='/voter' style={{ color: 'black' }}>မဲဆန္ဒရှင်များ</Link></p>
        <p style={{ textAlign: "center", fontSize: '15px', boxShadow: ' 2px 2px 5px 2px rgba(0, 0, 0, 0.1)',borderRadius: '5px',fontWeight: 'bold', padding: '10px' }}>၂၀၂၀ပြည့်နှစ်၊ အထွေထွေရွေးကောက်ပွဲတွင် မဲပေးခွင့်ရရှိသည့် မဲဆန္ဒရှင်များစာရင်း <br></br><br></br>
စစ်ကိုင်းတိုင်းဒေသကြီး</p>
        {
            voter ? <Card title={ voter.voter_name+'၏ အချက်အလက်များ'} style={{backgroundColor: 'whitesmoke'}} fontSize='20px' textAlign='center'>
               
               <table className='table'>
                    <tr className="tr">
                        <td className='td'>Voter Name</td>
                        <td className='td'>{voter.voter_name}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Father's Name</td>
                        <td className='td'>{voter.father_name}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>NRIC NO</td>
                        <td className='td'>{voter.nric_no}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Race</td>
                        <td className='td'>{voter.race}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Religion</td>
                        <td className='td'>{voter.religion}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Date of Birth</td>
                        <td className='td'>{voter.date_of_birth}</td>
                    </tr>
                    {voter.wards_code ? <tr className="tr">
                        <td className='td'>Address</td>
                        <td className='td'>{voter.state_region}၊ {voter.district_name}၊ {voter.township_name}၊ {voter.town_name}၊ {voter.wards_name}၊၊</td>
                    </tr> : <tr className="tr">
                        <td className='td'>Address</td>
                        <td className='td'>{voter.state_region}၊ {voter.district_name}၊ {voter.township_name}၊ {voter.village_tracts_name}အုပ်စု၊ {voter.village_name}ရွာ၊၊</td>
                    </tr>}                     
                </table>  
                {/* <Form
                    initialValues={voter}
                    layout="horizonal"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 15 }}
                    size='large'
                >
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Voter Name"
                                name="voter_name" //db name
                            // rules={[{ required: true, message: 'Please select Voter Name!' }]}//essential
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="State Region"
                                name="state_region" //db name
                            //rules={[{ required: true, message: 'Please select District Name!' }]}//essential
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
                            //rules={[{ required: true, message: 'Please select District Name!' }]}//essential
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Township Name"
                                name="township_name" //db name
                            //rules={[{ required: true, message: 'Please select District Name!' }]}//essential
                            >
                                <Input readOnly/>
                            </Form.Item>
                        </Col>
                    </Row>

                    {voter.wards_code ? <div>
                        <Row gutter={16}>
                            <Col sm={48} md={24} lg={24}>
                                <Form.Item
                                    label="Town Name"
                                    name="town_name" //db name
                                // rules={[{ required: true, message: 'Please enter Township Code!' }]}
                                >
                                    <Input readOnly />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={48} md={24} lg={24}>
                                <Form.Item
                                    label="Ward Name"
                                    name="wards_name" //db name
                                // rules={[{ required: true, message: 'Please enter Township Code!' }]}
                                >
                                    <Input readOnly />
                                </Form.Item>
                            </Col>
                        </Row> </div> : <div>
                            <Row gutter={16}>
                                <Col sm={48} md={24} lg={24}>
                                    <Form.Item
                                        label="Village Tract Name"
                                        name="village_tracts_name" //db name
                                    // rules={[{ required: true, message: 'Please enter Township Code!' }]}
                                    >
                                        <Input readOnly />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col sm={48} md={24} lg={24}>
                                    <Form.Item
                                        label="Village Name"
                                        name="village_name" //db name
                                    >
                                        <Input readOnly />
                                    </Form.Item>
                                </Col>
                            </Row></div>}
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Date of Birth"
                                name="date_of_birth" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Race"
                                name="race" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Religion"
                                name="religion" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="NRIC No."
                                name="nric_no" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Permanent Address"
                                name="permanent_address" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Remark"
                                name="remark" //db name
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form> */}
            </Card> : <div>Loading...</div>
        }
    </div>
}

export default withRouter(DetailForm);