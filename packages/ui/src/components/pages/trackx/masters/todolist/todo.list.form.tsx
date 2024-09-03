import { TodoSharedService } from '@trackx/shared-services';
import { Button, Col, Form, Input, Row, message } from 'antd';
import { FormInstance } from 'antd/lib';
import { AlertMessages } from 'packages/ui/src/components/common';
import React, { useEffect } from 'react';

interface CompanyIProps {
  initialValues: any;
  formRef: FormInstance<any>;
  drawerOnClose: () => void;
}

const CompanyForm: React.FC<CompanyIProps> = ({ initialValues, formRef, drawerOnClose }) => {
  const service = new TodoSharedService();
  const [form] = Form.useForm()
  const id = localStorage.getItem("userId");
  const roles = localStorage.getItem(id);

  useEffect(() => {
    if (initialValues) {
      formRef.setFieldsValue(initialValues);
    }
  });

  const TaskCreate = () => {
    formRef.validateFields()
      .then(values => {

        service.createTodo(values)
          .then(response => {
            if (response.status) {
              AlertMessages.getSuccessMessage(response.internalMessage);
              drawerOnClose();
            } else {
              AlertMessages.getErrorMessage(response.internalMessage);
            }
          }).catch(err => console.log(err.message));
      })
      .catch(err => console.log(err.message));
  };






  return (
    <Form
      layout='vertical'
      form={formRef}
    >
      <Form.Item name={"id"} hidden >
        <Input />
      </Form.Item>

      <Row gutter={24}>
        <Col span={112}>
          <Form.Item label="Organization Name"
            name="task"
            rules={[{
              required: true, message: 'Enter Organization Name'
            },
            {
              pattern: /^[a-zA-Z&]+(?: [a-zA-Z]+)*$/,
              message: 'Enter Characters Only'
            }]}>
            <Input
              placeholder="Enter Organization Name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Email"
            rules={[{
              required: true,

              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|in)$/i,
              message: 'Kindly include "@"".com"".in"'
            }]}
            name="description">
            <Input
              placeholder="Enter Email" />
          </Form.Item>
        </Col>
      </Row>
      <Row>

        <Col span={2}>
          <Form.Item label={' '}>
            <Button type='primary' onClick={TaskCreate}>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default CompanyForm;
