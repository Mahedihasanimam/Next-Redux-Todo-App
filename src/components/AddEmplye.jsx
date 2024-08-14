'use client'

import { addEmploye } from "@/app/reduxToolkit/slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
const AddEmployee = () => {
  const [employeeName, setEmployeeName] = useState("");
const dispatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeName) {
      dispatch(addEmploye(employeeName))
      setEmployeeName('')
    } else {
      console.log("Please input Employee Name!");
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="text-center">
      <h1 className="text-4xl font-bold my-4">Add Employee</h1>
      <div className="w-1/2 mx-auto my-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />
      </div>
      <div className="w-1/2 mx-auto">
        <button
          type="submit"
          className="mx-auto block my-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Employee
        </button>
      </div>
    </form>
  );
};

export default AddEmployee;
