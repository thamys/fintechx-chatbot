'use client';
import { Form, Input } from "antd";
import SendMesageForm from "@/app/components/SendMesageForm";

type FormFieldsType = {
  message: string;
};

export default function Home() {
  return (
    <div className="flex flex-grow flex-col justify-end">
      <SendMesageForm />
    </div>
  );
}
