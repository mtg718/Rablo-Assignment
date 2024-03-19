import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import EmployeeDetails from "./components/EmployeeDetails.jsx";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchResultsExist, setSearchResultsExist] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setFilteredEmployees(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = employees.filter(
      (employee) => employee.id.toString() === searchTerm
    );
    setFilteredEmployees(filtered);
    setSearchResultsExist(filtered.length > 0);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
   
        <SearchBar
          onSearch={handleSearch}
          searchResultsExist={searchResultsExist}
        />
   

      <Routes>
        <Route
          exact
          path="/"
          element={
            <EmployeeList
              employees={filteredEmployees}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          exact
          path="/employee/:id"
          element={<EmployeeDetails employees={employees} />}
        />
      </Routes>
    </div>
  );
}

export default App;
