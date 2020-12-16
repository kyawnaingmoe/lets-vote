import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../api'
import { Input, Card } from 'antd'
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { TextArea } = Input;

const PartyDetail = (props) => {

    const id = props.match.params.id
    const [party, setParty] = useState(false)

    useEffect(() => {
        async function fetchData() {
            let result = await api().get(`/party/${id}`)
            console.log(result, 'party result')
            result.data && setParty(result.data)
        } fetchData()
    }, []);

    const form = {
        textAlign: 'center'
    }

    return <div className="content">

        <p style={{ color: 'black', padding: '10px', marginTop: '10px' }}><LeftOutlined /><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ</Link> <Link to='/party' style={{ color: 'black' }}><LeftOutlined />နိုင်ငံရေးပါတီဆိုင်ရာ</Link></p>
        <p style={{ textAlign: "center", fontSize: '15px', boxShadow: ' 2px 2px 5px 2px rgba(0, 0, 0, 0.1)',borderRadius: '5px',fontWeight: 'bold', padding: '10px' }}>၂၀၂၀ ပြည့်နှစ်၊ အထွေးထွေးရွေးကောက်ပွဲတင် ဝင်ရောက်ယှဉ်ပြိုင်ကြမည့် နိုင်ငံရေးပါတီများစာရင်း <br></br><br></br>စစ်ကိုင်းတိုင်းဒေသကြီ</p>

        {party ? <Card title={party.party_name+ '၏ အချက်အလက်များ'} style={{ backgroundColor: 'whitesmoke' }} fontSize='20px' textAlign='center' className='card'>

                <img src={party.image} width="190px" height="100px" style={{ paddingBottom: '10px' }} />
                <br></br>
                <h2 style={{fontWeight:'bolder', letterSpacing:'1px'}}>{party.party_name}</h2>
                <h3 style={{color: '#aa', letterSpacing:'2px'}}>{party.party_eng_name} ({party.abbreviation})</h3>
                <br></br>
                <table className='table'>
                    <tr className="tr">
                        <td className='td'>Party Name</td>
                        <td className='td'>{party.party_name}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Party English Name</td>
                        <td className='td'>{party.party_eng_name}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Abbreviation</td>
                        <td className='td'>{party.abbreviation}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Chair Person</td>
                        <td className='td'>{party.chair_person}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Founder</td>
                        <td className='td'>{party.founder}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Founded</td>
                        <td className='td'>{party.founded}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Political Ideology</td>
                        <td className='td'>{party.political_ideology}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Political position</td>
                        <td className='td'>{party.political_position}</td>
                    </tr>
                    <tr className="tr">
                        <td className='td'>Headquaraters</td>
                        <td className='td'>{party.state_region}၊ {party.district_name}၊ {party.township_name}၊ {party.town_name}၊ {party.wards_name}</td>
                    </tr>
                    {/* <tr className="tr">
                        <td className='td'>Facebook page</td>
                        <td className='td'>{party.remark}</td>
                    </tr> */}
                    <tr className="tr">
                        <td className='td'>History</td>
                        <td className='td'>{party.history}</td>
                    </tr>
                </table>
            {/* <Form style={form}
                layout="horizonal"
                initialValues={party}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 15 }}
                size={"large"}

            >
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Party Name"
                            name="party_name"
                        >
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Party English Name"
                            name="party_eng_name"
                        >
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Abbreviation"
                            name="abbreviation"
                        >
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Chair Person"
                            name="chair_person"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Founder"
                            name="founder"
                        >
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Founded"
                            name="founded"
                        >
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Political Ideology"
                            name="political_ideology"
                        >
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col sm={48} md={24} lg={24}>
                        <Form.Item
                            label="Political Position"
                            name="political_position"
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
        </Card> : <div>Loading....</div>
        }
    </div>
}
export default withRouter(PartyDetail);