import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Alert, Layout, Typography } from 'antd';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:5500/api/auth/login', { email, password });
            navigate('/dashboard'); // Redirect to dashboard on success
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
       <Layout className='flex justify-center items-center h-screen' >
        <Typography.Title level={2}>Login</Typography.Title>
            <Form className='bg-white w-[400px] p-5 rounded-xl' onFinish={handleLogin} layout='vertical' >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Form.Item>
                {error && <Alert message={error} type="error" />}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
       </Layout>
    );
};

export default Login;
