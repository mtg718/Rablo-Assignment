import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner.jsx";
import "./EmployeeList.css";
import toast, { Toaster } from "react-hot-toast";

const EmployeeList = ({ employees, onDelete }) => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to set loading state based on employees data
  useEffect(() => {
    if (employees.length > 0) {
      setIsLoading(false); // If employees data is not empty, set loading to false
    }
  }, [employees]);

  // Function to handle employee deletion
  const handleDelete = (id) => {
    onDelete(id); // Call the onDelete function to delete the employee
    toast.success("Employee deleted successfully"); // Show success toast notification
  };

  // If loading, display loading message
  if (isLoading) {
    return (
      <div className="loading-message">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15rem",
          }}
        >
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="employee-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1500px",
        }}
      >
        {employees.map((employee) => (
          <Link 
            style={{ textDecoration: "none" }}
            to={`/employee/${employee.id}`}
            key={employee.id}
            className="employee-link"
          >
            <div
              style={{
                padding: "2rem",
                borderRadius: "10px",
                margin: "2rem",
                width: "17rem",
                height: "17rem",
                border: "none",
                cursor: "pointer",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "1px 1px 1px 1px #007bff",
              }}
              className="employee-card"
            >
              <div className="employee-card-details" style={{ color: "black" }}>
                <p>ID: {employee.id}</p>
                <p>Name: {employee.name}</p>
                <p>Username: {employee.username}</p>
                <p>Email: {employee.email}</p>
                <p>Phone: {employee.phone}</p>
              </div>

              <div
                className="button-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "10rem",
                }}
              >
                <button
                  style={{
                    padding: "0.4rem",
                    margin: ".3rem",
                    borderRadius: "50px",
                    backgroundColor: "#007bff",
                    color: "#f3fcff",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDelete(employee.id); // Pass the employee id to handleDelete function
                  }}
                >
                  Delete
                </button>

                <button
                  style={{
                    padding: "0.4rem",
                    margin: ".3rem",
                    borderRadius: "50px",
                    backgroundColor: "#007bff",
                    color: "#f3fcff",
                    border: "none",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </Link>
        ))}
        <Toaster />
      </div>
    </div>
  );
};

export default EmployeeList;
