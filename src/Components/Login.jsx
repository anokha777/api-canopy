import React from 'react';
import { Button, Form, Input, notification } from 'antd';
import { credntials } from '../constants/cred';

const Login = (props) => {
    
  const onFinish = (values) => {
    console.log('Success:', values);
    const userStore = credntials.filter(cred => cred.username === values.username && cred.password === values.password);
    if(userStore.length > 0){
      localStorage.setItem('isAuthenticated', true);
      props.setIsAuthenticated(true);
    } else {
      localStorage.setItem('isAuthenticated', false);
      props.setIsAuthenticated(false);
      notification.error({
        message: 'Login Error',
        description: 'Please provide valid credential to login, or connect to admin.',
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        margin: '2rem'
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
)};
export default Login;
