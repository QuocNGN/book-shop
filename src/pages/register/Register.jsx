import React from 'react';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

function Register(props) {
  return (
    <div>
      <Row className='register'>
        <Col>
          <div className='Auth_regis_card'>
            <div className='Auth_head'>
              <h4>Register</h4>
            </div>
            <Form
              className='Auth_body'
              name='basic'
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete='off'
            >
              {/* ! FullName */}
              <Form.Item
                label='Full Name'
                name='Full Name'
                rules={[
                  {
                    required: true,
                    message: 'Please input your full name!',
                  },
                ]}
              >
                <Input placeholder='Full name' />
              </Form.Item>

              {/* ! Email */}
              <Form.Item
                label='Email'
                name='Email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input placeholder='example@yourmail.com' />
              </Form.Item>

              {/* ! Password */}
              <Form.Item
                label='Password'
                name='Password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password placeholder='**********' />
              </Form.Item>

              {/* ! Phone */}
              <Form.Item
                label='Phone'
                name='Phone'
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone!',
                  },
                ]}
              >
                <Input placeholder='+84-094-xxx-xxx' />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type='primary' htmlType='submit' className='btn-submit'>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
