import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Card } from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import api from '../../api'
import moment from 'moment'

const CandidateDetail = (props) => {

    const id = props.match.params.id
    const [candidate, setCandidate] = useState(false)

    useEffect(() => {

        async function fetchData() {
            let result = await api().get(`/candidate/${id}`)
            var date = result.data.date_of_birth
            result.data.date_of_birth = moment(date).format('YYYY-MM-DD')
            console.log(result.data, "result")
            result.data && setCandidate(result.data)
        } fetchData()
    }, []);

    return <div className="content">
        <p style={{ color: 'black', padding: '10px', marginTop: '10px' }}><LeftOutlined /><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ</Link> <LeftOutlined /><Link to='/candidate' style={{ color: 'black' }}>လွှတ်တော်ကိုယ်စားလှယ်ဆိုင်ရာ</Link></p>
        <p style={{ textAlign: "center", fontSize: '15px', boxShadow: ' 2px 2px 5px 2px rgba(0, 0, 0, 0.1)', borderRadius: '5px', fontWeight: 'bold', padding: '10px' }}>၂၀၂၀ပြည့်နှစ် ပါတီစုံဒီမိုကရေစီအထွေထွေရွေးကောက်ပွဲ၊ လွှတ်တော်ကိုယ်စားလှယ်လောင်း အမည်စာရင်း <br></br><br></br>
စစ်ကိုင်းတိုင်းဒေသကြီး</p>
        {
            candidate ? <Card title={candidate.parliament_type+"လောင်း "+candidate.candidate_name+'၏ ကိုယ်ရေးအချက်အလက်များ'} style={{ backgroundColor: 'whitesmoke' }}>
                <img src={candidate.image} width="170px" height="150px" style={{ paddingBottom: '10px' }} />
                <h2>{candidate.candidate_name}</h2>
                <h3>{candidate.party_name}</h3>
                <br></br>
                <br></br>
                <table className='table'>
                    <tr className="tr">
                        <td className='td'>Candidate Name</td>
                        <td className='td'>{candidate.candidate_name}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Constituency Name</td>
                        <td className='td'>{candidate.constituency_name}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Party Name</td>
                        <td className='td'>{candidate.party_name}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>NRIC NO</td>
                        <td className='td'>{candidate.nric_no}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Race</td>
                        <td className='td'>{candidate.race}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Religion</td>
                        <td className='td'>{candidate.religion}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Education</td>
                        <td className='td'>{candidate.education}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Occupation</td>
                        <td className='td'>{candidate.occupation}</td>
                    </tr>
                    {candidate.wards_code ?
                    <tr className="tr">
                        <td className='td'>Address</td>
                        <td className='td'>{candidate.state_region}၊ {candidate.district_name}၊ {candidate.township_name}၊ {candidate.town_name}၊ {candidate.wards_name}</td>
                    </tr> : 
                    <tr className="tr">
                    <td className='td'>Address</td>
                    <td className='td'>{candidate.state_region}၊ {candidate.district_name}၊ {candidate.township_name}၊ {candidate.village_tracts_name}၊ {candidate.village_name}</td>
                </tr>
                    }
                </table>
            </Card>
                : <div>Loading....</div>
        }
    </div>
}
export default withRouter(CandidateDetail);

{/* <Form
                    //style={form}
                    initialValues={candidate}
                    layout="horizonal"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 15 }}
                    size='large'
                >
                    
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Candidate Name"
                                name="candidate_name"
                            //rules={[{ required: true, message: 'Please input Candidate Name!' }]}
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
                            //rules={[{ required: true, message: 'Please input Constituency Name!' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Party Name"
                                name="party_name"
                            //rules={[{ required: true, message: 'Please input Office_Name!' }]}
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
                            //rules={[{ required: true, message: 'Please input Election Name!' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Date of Birth"
                                name="date_of_birth"
                            //rules={[{ required: true, message: 'Please input Date of Birth' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="NRIC NO"
                                name="nric_no"
                            //rules={[{ required: true, message: 'Please input NRIC NO!' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Race"
                                name="race"
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Religion"
                                name="religion"
                            //rules={[{ required: true, message: 'Please input Religion!' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Education"
                                name="education"
                            //rules={[{ required: true, message: 'Please input Education!' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Occupation"
                                name="occupation"
                            //rules={[{ required: true, message: 'Please input Occupation!' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="Address"
                                name="permanent_address"
                            //rules={[{ required: true, message: 'Please input Permanent Address!' }]}
                            >
                                <Input readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={48} md={24} lg={24}>
                            <Form.Item
                                label="History"
                                name="history"
                            >
                                <TextArea rows={25} readOnly />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form> */}