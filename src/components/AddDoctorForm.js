import React from "react";
import { Modal, Form, Input, Select } from "antd";

const { Option } = Select;

const AddDoctorForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  return (
    <Modal
      visible={visible}
      title="Add a New Doctor"
      okText="Add Doctor"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleSubmit}
    >
      <Form form={form} layout="vertical" name="add_doctor_form">
        <Form.Item
          name="name"
          label="Doctor Name"
          rules={[{ required: true, message: "Please enter doctor's name!" }]}
        >
          <Input placeholder="Enter doctor's name" />
        </Form.Item>

        <Form.Item
          name="specialty"
          label="Specialty"
          rules={[{ required: true, message: "Please select a specialty!" }]}
        >
          <Select placeholder="Select a specialty">
            <Option value="Cardiologist">Cardiologist</Option>
            <Option value="Dentist">Dentist</Option>
            <Option value="Dermatologist">Dermatologist</Option>
            <Option value="Pediatrician">Pediatrician</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: "Please enter location!" }]}
        >
          <Input placeholder="Enter location" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddDoctorForm;
