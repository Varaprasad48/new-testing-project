import { Button, Card, Carousel, Checkbox, Col, Divider, Form, Input, Modal, Row, notification } from "antd";
import { Header } from "antd/es/layout/layout";
import lotusTwo from "../images/lotus-image2.png";
import HelpDesk1 from "../images/help-desk.png";
import SchemaxLogoWhite1 from "../images/schemaxlogowhite.png";
import newvideoicon from "../images/video-icon.png";
import Downlodeicon2 from "../images/download-new-bold.png";
import WhatsappIcon from "../images/whatsapp.png";
import lotusOne from "../images/lotus-image1.png";
import newProductIcon from "../images/new-product-icon.png";
import Lotus from "../images/Lotus-Logo.png";
import { EyeOutlined, EyeInvisibleOutlined, WhatsAppOutlined, } from '@ant-design/icons';
import './new-login-component.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginService } from '@trackx/shared-services';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



import Axios from "axios";
const NewLoginComponent = () => {
    const [form] = Form.useForm();
    const [form1] = Form.useForm();
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState<any>(false);
    const [newdata, setNewdata] = useState<any>({ username: '', password: '', todos: [] });
    const [isModalOpen, setIsModalOpen] = useState<any>(false);
    const [editingData, setEditingData] = useState<any>(null);
    const [pswOpen, setPswOpen] = useState<any>(false);
    const [data, setData] = useState({ username: '', password: '', todos: [] });

    const service = new LoginService();

    const onFinish = async (data: any) => {
        setIsAuth(true);
        try {
            const res = await service.findUser(data);
            if (res.status) {
                localStorage.setItem(res.data.todos[0].id, res.data.todos[0].permission);
                localStorage.setItem('userId', res.data.todos[0].id);
                navigate('/navpage');
            } else {
                alert("Wrong credentials!");
            }
        } catch (error) {
            alert("An error occurred: " + (error.response ? error.response.data.message : error.message));
        } finally {
            form.resetFields();
        }
    };

    const handleOk = () => {
        if (newdata.username === '' || newdata.password === '') {
            alert("Please fill all fields...");
        } else {
            axios.post("http://localhost:5004/auth/createUser", newdata)
                .then((res) => {
                    if (res.data === false) {
                        alert("Username already existed!");
                    } else {
                        alert("Registered Successfully..");
                        setIsModalOpen(false);
                        setNewdata({ username: '', password: '', todos: [] });
                        form1.resetFields();
                    }
                });
        }
    };

    const handleChange = (changedValues, allValues) => {
        setNewdata(allValues);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setNewdata({ username: '', password: '', todos: [] });
        form1.resetFields();
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const ProductsCards = [
        {
            title: 'Warehouse Mangemennt',
            image: lotusOne,
            description: 'To efficiently manage and organize raw materials inventory to ensure timely availability for production while minimizing storage costs and waste.'
        },
        {
            title: 'Inspection',
            image: lotusTwo,
            description: ' To thoroughly inspect incoming raw materials for quality and compliance with specifications to prevent defects and ensure consistency in product quality. A: 4-point inspection: Assessing four critical aspects (fabric appearance, hand-feel, weight, and width. B: Shade inspection: Checking for color consistency and accuracy. C: Shrinkage inspection: Measuring fabric shrinkage after washing or treatment. D: GSM Inspection: It involves measuring the weight of fabric per unit area, typically in grams per square meter'

        },
    ]

    const contentStyle: React.CSSProperties = {
        height: '86vh',
        color: '#fff',
        textAlign: 'center',
    };


    return (
        <div style={{ height: '100vh', overflowY: 'hidden' }}>
            <Header style={{ padding: '10px', background: 'black', border: '1px solid gray' }}>
                <Row >
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ color: 'white', marginTop: '-29px' }}>
                        <h1>Lotus Software</h1>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center', marginTop: '-10px' }}>
                        <img src={SchemaxLogoWhite1} alt="/" style={{ height: "57px" }} />
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'end' }}>
                        <a href="tel:+919014375798" ><img src={HelpDesk1} style={{ fontSize: '54px', height: "30px", marginLeft: '20px', cursor: 'pointer' }} /></a>
                        <img src={newvideoicon} alt="/" style={{ fontSize: '24px', height: "30px", marginLeft: '20px', cursor: 'pointer', marginTop: '7px' }} />
                        <img
                            // onClick={downloadFile}
                            src={Downlodeicon2}
                            alt="/" style={{ fontSize: '24px', height: "34px", marginLeft: '20px', cursor: 'pointer', marginTop: '7px' }}
                        />

                        <a aria-label="Chat on WhatsApp" target="_blank" href="https://wa.me/9133832524?text=Hi%20there%21%20I%27m%20reaching%20out%20for%20some%20help.%20Can%20you%20assist%20me%20%3F"><img alt="Chat on WhatsApp" src={WhatsappIcon} style={{ color: "white", fontSize: '24px', height: "48px", marginLeft: '20px', cursor: 'pointer' }} />
                        </a>
                    </Col>
                </Row>
            </Header>
            <Row>
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 16, order: 1 }} lg={{ span: 18, order: 1 }}>
                    <Card style={{ background: 'white', height: '100%', }}
                        bodyStyle={{ padding: "0px" }}
                    >
                        <Carousel
                            arrows={true}
                            className="login-c"
                            autoplay
                            slidesToShow={1} speed={500}>
                            {ProductsCards.map((card, key) => {
                                return <div >
                                    <p style={contentStyle}>
                                        <div key={key}
                                        >
                                            <div className="flip-container">
                                                <div className="flipper">
                                                    <div className="front">
                                                        <div>
                                                            <img style={{
                                                                height: '92vh',
                                                                width: '100%',
                                                                // position: 'relative',
                                                                top: '0', marginTop: "-30px"
                                                            }} className="mb-2" src={card.image} />
                                                        </div>
                                                    </div>
                                                    <div className="back">
                                                        <Col className="justify-center">
                                                            <h3 className="">
                                                                {card.title}
                                                            </h3>
                                                            <p className="description" style={{ color: "black" }}>
                                                                {card.description}
                                                            </p>
                                                        </Col>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                </div>
                            })}
                        </Carousel>

                    </Card>
                </Col>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 8, order: 2 }} lg={{ span: 6, order: 2 }}
                    style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', fontFamily: 'cursive',
                        background: 'black',
                        boxShadow: 'none',
                        borderRadius: 0,
                        border: 'none'
                    }}>

                        <Card className="glass" style={{
                            textAlign: 'center', background: 'black', fontFamily: 'sans-serif',
                            border: 'none', width: "300px", height: "600px",
                        }}>
                            <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <img src={Lotus} alt="/" style={{
                                    height: "9rem",
                                    marginBottom: '10px'
                                }} />
                            </Row>
                            <div className="logo">


                                <Form
                                    name="login-form"
                                    form={form}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Col span={24}>
                                        <Form.Item
                                            name='username'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Username!',
                                                },
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                            ]}>
                                            <Input placeholder="Username"
                                                className="custom-placeholder"
                                                style={{
                                                    background: '#000', border: 'none', width: "260px", height: "40px", color: 'white', boxShadow: '0 0 10px #822bff'
                                                }}
                                                autoComplete="new-username"

                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                                            <Input.Password
                                                className="custom-placeholder"
                                                placeholder="Password"
                                                iconRender={visible => (visible ? <EyeOutlined style={{ color: 'white' }} /> : <EyeInvisibleOutlined style={{ color: 'white' }} />)}
                                                style={{
                                                    background: '#000',
                                                    height: "40px",
                                                    border: 'none',
                                                    color: "white",
                                                    width: "260px",
                                                    boxShadow: '0 0 10px #822bff'
                                                }}
                                                styles={{
                                                    input: {
                                                        background: "#000",
                                                        color: "white",
                                                    }
                                                }}

                                                autoComplete="new-password"
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col span={24}>
                                        <Col span={24}>
                                            <Button
                                                htmlType="submit"
                                                style={{
                                                    textSizeAdjust: '50',
                                                    backgroundColor: '#7a6bcc',
                                                    width: "260px", color: '#FFFFFF',
                                                    height: "40px", fontSize: '18px',
                                                    border: "black",
                                                    fontFamily: "calibri",
                                                    fontWeight: 'bold',
                                                    boxShadow: '#A46BF5 -4px 15px 40px -8px',
                                                    letterSpacing: '1px',
                                                }}>Submit</Button>
                                        </Col>
                                        <Col span={24} style={{ marginTop: '20px' }}>
                                            <Button
                                                type='link' onClick={() => setIsModalOpen(true)}
                                                htmlType="submit"
                                                style={{
                                                    textSizeAdjust: '50',
                                                    backgroundColor: '#7a6bcc',
                                                    width: "260px", color: '#FFFFFF',
                                                    height: "40px", fontSize: '18px',
                                                    border: "black",
                                                    fontFamily: "calibri",
                                                    fontWeight: 'bold',
                                                    boxShadow: '#A46BF5 -4px 15px 40px -8px',
                                                    letterSpacing: '1px',
                                                }}>New Login</Button>
                                        </Col>
                                    </Col>
                                </Form>
                            </div>
                        </Card>
                        <Modal title="New Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <Form
                                form={form1}
                                onValuesChange={handleChange}
                                initialValues={{ username: '', password: '', todos: [] }}
                            >
                                <Form.Item
                                    name="username"
                                    label="Username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input
                                        placeholder='Username'
                                        prefix={<UserOutlined />}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password
                                        placeholder='Password'
                                        prefix={<LockOutlined />}
                                    />
                                </Form.Item>
                                <Form.Item label="Actions" name="todos">
                                    <Checkbox.Group>
                                        <Checkbox value="create">Create</Checkbox>
                                        <Checkbox value="read">Read</Checkbox>
                                        <Checkbox value="update">Update</Checkbox>
                                        <Checkbox value="delete">Delete</Checkbox>
                                    </Checkbox.Group>
                                </Form.Item>
                            </Form>
                        </Modal>
                        <div style={{
                            position: 'absolute',
                            bottom: '0px',
                            right: '2px',
                            color: 'white',
                            fontSize: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Divider style={{ color: '#ffff' }}>Powered by @Lotus Software</Divider>
                            <span style={{ alignSelf: 'flex-start', fontSize: '15px', fontWeight: '600', marginLeft: '0rem' }}></span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};
export default NewLoginComponent;