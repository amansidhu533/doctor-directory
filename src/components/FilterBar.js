import React, { useState } from "react";
import { Select, Button } from "antd";

const { Option } = Select;

const FilterBar = ({ setFilters }) => {
  const [specialty, setSpecialty] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSpecialtyChange = (value) => {
    setSpecialty(value);
    setFilters((prev) => ({ ...prev, specialty: value }));
  };

  const handleLocationChange = (value) => {
    setLocation(value);
    setFilters((prev) => ({ ...prev, location: value }));
  };

  const handleClearFilters = () => {
    setSpecialty(null);
    setLocation(null);
    setFilters({ specialty: null, location: null });
  };

  return (
    <div className="filters-bar">
      <div className="filters">
        <Select
          placeholder="Select Specialty"
          onChange={handleSpecialtyChange}
          value={specialty}
          allowClear
          className="filter-select"
        >
          <Option value="Cardiology">Cardiology</Option>
          <Option value="Dermatology">Dermatology</Option>
        </Select>

        <Select
          placeholder="Select Location"
          onChange={handleLocationChange}
          value={location}
          allowClear
          className="filter-select"
        >
          <Option value="New York, NY">New York, NY</Option>
          <Option value="Los Angeles, CA">Los Angeles, CA</Option>
        </Select>
      </div>
      <div className="filters">
        <div></div>
        <Button
          onClick={handleClearFilters}
          type="primary"
          className="clear-filters-btn"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
