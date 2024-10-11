import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import Image from "next/image";

type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormAccountInformations: React.FC = () => {
  const [isFullnameEditable, setIsFullnameEditable] = React.useState(false);
  const [isEmailEditable, setIsEmailEditable] = React.useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = React.useState(false);

  return (
    <Form
      name="account-informations"
      variant="filled"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Form.Item<FieldType>
        name="fullName"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input
          placeholder="Full Name"
          disabled={!isFullnameEditable}
          prefix={
            <Image
              alt="Icon User"
              width={18}
              height={20}
              src="/assets/icons/user.svg"
              className="mx-4 h-10"
            />
          }
          suffix={
            <Button type="link" shape="circle" onClick={() => setIsFullnameEditable(!isFullnameEditable)}>
              <Image
                alt="Icon Edit"
                width={20}
                height={20}
                src="/assets/icons/edit.svg"
                className="mx-4"
              />
            </Button>
          }
        />
      </Form.Item>
      
      <Form.Item<FieldType>
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          placeholder="Email"
          disabled={!isEmailEditable}
          prefix={
            <Image
              alt="Icon User"
              width={18}
              height={20}
              src="/assets/icons/user.svg"
              className="mx-4 h-10"
            />
          }
          suffix={
            <Button type="link" shape="circle" onClick={() => setIsEmailEditable(!isEmailEditable)}>
              <Image
                alt="Icon Edit"
                width={20}
                height={20}
                src="/assets/icons/edit.svg"
                className="mx-4"
              />
            </Button>
          }
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          placeholder="Password"
          disabled={!isPasswordEditable}
          prefix={
            <Image
              alt="Icon User"
              width={18}
              height={20}
              src="/assets/icons/user.svg"
              className="mx-4 h-10"
            />
          }
          suffix={
            <Button type="link" shape="circle" onClick={() => setIsPasswordEditable(!isPasswordEditable)}>
              <Image
                alt="Icon Edit"
                width={20}
                height={20}
                src="/assets/icons/edit.svg"
                className="mx-4"
              />
            </Button>
          }
        />
      </Form.Item>

      <Form.Item>
        <Button
          className="w-full !h-14 uppercase"
          type="primary"
          htmlType="submit"
        >
          Save changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormAccountInformations;
