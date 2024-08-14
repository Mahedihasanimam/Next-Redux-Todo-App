"use client";
import { removeEmploye } from "@/app/reduxToolkit/slice";
import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ShowEmploye = () => {
  const employeeData = useSelector((data) => data.employe);
  const dispatch=useDispatch()
  console.log(employeeData);
  return (
    <div>
      <deiv>
        <hr />
        <h1 className="text-4xl font-bold text-center mb-4">Show Employe</h1>
        {employeeData.map((item,index) => (
          <div className="bg-blue-600 text-white text-xl max-w-sm flex justify-between p-2 rounded-md items-center mx-auto my-4" key={item.id}>
            <div>
            {index+1+"."+" "}
            {item.name}
            </div>
             <span onClick={()=>dispatch(removeEmploye(item.id))} ><Button type="primary" danger>Delete</Button></span>
             </div>
        ))}
      </deiv>
    </div>
  );
};

export default ShowEmploye;
