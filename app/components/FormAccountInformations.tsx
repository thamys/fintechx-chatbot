import React, { useCallback } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, theme } from "antd";
import Image from "next/image";
import IconFormUser from "./icons/IconFormUser";
import IconFormEmail from "./icons/IconFormEmail";
import IconFormPassword from "./icons/IconFormPassword";
import { Poppins } from "next/font/google";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import IconLock from "./icons/IconLock";

type FieldType = {
  fullName?: string;
  email?: string;
  password?: string;
};

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const ButtonEdit: React.FC<{ onClick: () => void; isEditable: boolean }> = ({
  onClick,
  isEditable,
}) => {
  const { useToken } = theme;
  const {
    token: { colorText },
  } = useToken();
  return (
    <Button type="link" shape="circle" onClick={onClick}>
      {isEditable ? (
        <IconLock className="mx-4 w-5" color={colorText} />
      ) : (
        <Image
          alt="Icon Edit"
          width={20}
          height={20}
          src="/assets/icons/edit.svg"
          className="mx-4"
        />
      )}
    </Button>
  );
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
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handlePasswordEditability = useCallback(
    (visible: boolean) => {
      if (!isPasswordEditable)
        return (
          <Button
            type="link"
            shape="circle"
            onClick={() => setIsPasswordEditable(true)}
          >
            <Image
              alt="Icon Edit"
              width={20}
              height={20}
              src="/assets/icons/edit.svg"
              className="mx-4"
            />
          </Button>
        );
      return visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
    },
    [isPasswordEditable]
  );

  return (
    <Form
      className={`!font-semibold ${poppins.className}`}
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
          className={`${isFullnameEditable ? "!border-1" : "!border-none"}`}
          placeholder="FULL NAME"
          disabled={!isFullnameEditable}
          prefix={<IconFormUser className="mr-4 ml-2 pb-1" />}
          suffix={
            <ButtonEdit
              onClick={() => setIsFullnameEditable(!isFullnameEditable)}
              isEditable={isFullnameEditable}
            />
          }
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          className={`${isEmailEditable ? "border" : "!border-none"}`}
          placeholder="EMAIL"
          disabled={!isEmailEditable}
          prefix={<IconFormEmail className="mr-4 ml-2 pb-1" />}
          suffix={
            <ButtonEdit
              onClick={() => setIsEmailEditable(!isEmailEditable)}
              isEditable={isEmailEditable}
            />
          }
        />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          size="large"
          className={`${isPasswordEditable ? "border" : "!border-none"} h-14`}
          placeholder="PASSWORD"
          disabled={!isPasswordEditable}
          prefix={<IconFormPassword className="mr-4 ml-2 pb-1" />}
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          iconRender={(visible) => handlePasswordEditability(visible)}
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
