import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const EmployeeDetails = ({ employees }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const employee = employees.find((emp) => emp.id.toString() === id);

  const handleBackToDashboard = () => {
    navigate("/"); // Navigate back to the dashboard
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "2rem",
          borderRadius: "10px",
          margin: "2rem",
          width: "21rem",
          height: "25rem",
          border: "none",
          cursor: "pointer",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 1px 1px 1px #007bff",
        }}
      >
        <h3>Employee Details</h3>
        {employee ? (
          <div className="employee-details">
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Username: {employee.username}</p>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
            <p>City: {employee.address.city}</p>
            <p>Company Name: {employee.company.name}</p>
            <p>Website: {employee.website}</p>
          </div>
        ) : (
          <p>Employee not found</p>
        )}

        {/* Button to go back to dashboard */}
        <div style={{ marginTop: "1rem" }}>
          <button
            style={{
              width: "10rem",
              padding: "0.5rem",
              margin: ".3rem",
              borderRadius: "50px",
              backgroundColor: "#007bff",
              color: "#f3fcff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleBackToDashboard}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
