
import React from 'react';
import { Form, Input } from 'antd'

const Login = (props: any) => {
  return (
    <div>
      <Form name="login">
      
        <Form.Item label="Username" name="username">
          <Input/>
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;