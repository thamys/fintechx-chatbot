'use client';
import { Form, Input } from "antd";

type FormFieldsType = {
  message: string;
};

export default function Home() {
  return (
    <div className="flex flex-grow flex-col justify-end">
      <Form>
        <Form.Item<FormFieldsType>>
          <Input placeholder="Send a message." />
        </Form.Item>
      </Form>
    </div>
  );
}
