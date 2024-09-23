import React, { useState, useEffect } from "react";
import DoctorCard from "../components/DoctorCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import DoctorModal from "../components/DoctorModal";
import AddDoctorForm from "../components/AddDoctorForm";
import doctorData from "../Data/index.json";
import { Spin, Empty, Layout, Pagination, Button } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

const { Content } = Layout;

const DoctorListPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ specialty: "", location: "" });
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage] = useState(10);

  const [isAddDoctorModalVisible, setIsAddDoctorModalVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDoctors(doctorData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!filters.specialty || doctor.specialty === filters.specialty) &&
        (!filters.location || doctor.location.includes(filters.location))
    );
    setFilteredDoctors(filtered);
  }, [searchQuery, filters, doctors]);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddDoctor = (newDoctor) => {
    setDoctors((prevDoctors) => [
      ...prevDoctors,
      { id: doctors.length + 1, ...newDoctor },
    ]);
    setIsAddDoctorModalVisible(false);
  };

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "auto" }} />;
  }

  return (
    <Layout>
      <Header />
      <Content className="main-content">
        <div className="site-layout-content">
          <div className="search-filters">
            <SearchBar setSearchQuery={setSearchQuery} />
            <FilterBar setFilters={setFilters} />
          </div>

          <div className="addBtn">
            <Button
              type="primary"
              onClick={() => setIsAddDoctorModalVisible(true)}
              className="add-new-btn"
            >
              Add New Doctor
            </Button>
          </div>
          <div className="cards-wrap">
            {currentDoctors.length ? (
              currentDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onClick={() => setSelectedDoctor(doctor)}
                />
              ))
            ) : (
              <Empty description="No doctors found" />
            )}
          </div>
          <Pagination
            current={currentPage}
            pageSize={doctorsPerPage}
            total={filteredDoctors.length}
            onChange={handlePageChange}
            style={{ textAlign: "center", marginTop: "20px" }}
          />
          {selectedDoctor && (
            <DoctorModal
              doctor={selectedDoctor}
              isOpen={!!selectedDoctor}
              onClose={() => setSelectedDoctor(null)}
            />
          )}

          {/* Add Doctor Modal */}
          <AddDoctorForm
            visible={isAddDoctorModalVisible}
            onCreate={handleAddDoctor}
            onCancel={() => setIsAddDoctorModalVisible(false)}
          />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default DoctorListPage;
