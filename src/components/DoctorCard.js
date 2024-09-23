import React from "react";
import { Card, Rate } from "antd";
 

const DoctorCard = ({ doctor, onClick }) => (
  <Card
    title={doctor.name}
    extra={<Rate disabled defaultValue={doctor.rating} className="custom-rate" />}  
    onClick={onClick}
    className="doctor-card"
  >
    <p>Specialty: {doctor.specialty}</p>
    <p>Location: {doctor.location}</p>
  </Card>
);

export default DoctorCard;
