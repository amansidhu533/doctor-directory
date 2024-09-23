import React from 'react';
import { Modal } from 'antd';

const DoctorModal = ({ doctor, isOpen, onClose }) => (
  <Modal title={doctor.name} visible={isOpen} onCancel={onClose} footer={null}>
    <p>Specialty: {doctor.specialty}</p>
    <p>Location: {doctor.location}</p>
    <p>Phone: {doctor.phone}</p>
    <p>Email: {doctor.email}</p>
  </Modal>
);

export default DoctorModal;
