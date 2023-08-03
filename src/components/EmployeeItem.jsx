import React from "react";
import { Link } from "react-router-dom";

function EmployeeItem({ employee }) {
  console.log(employee);

 const showDepartment = () =>{
  switch(employee.department_ID){
    //set colors according to department
    case 'Pending' : return <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm  ">Pending</div>
    case 'Approved' : return <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm">Approved</div>
    case 'Revision' : return <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm">Revision</div>
    case 'Rejected' : return <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm">Rejected</div>
    case 'Completed' : return <div className=" rounded p-2 bg-[#97FAB8] text-[#14AE5C] text-xs lg:text-sm inline-block">Complete</div>
  }
 }
  

  return (
    <>
      <div className="col-start-1  "></div>
      <div className="col-start-2  ">{employee.Emp_no}</div>
      <div className="col-start-3 col-span-2  ">{employee.name}</div>
      {/* no description in employee */}
      <div className="col-start-5 col-span-2  ">{employee.description}</div> 
      <div className="col-start-7 col-span-2  "> {showDepartment()}</div>
      <div className="col-start-9 col-span-2  ">{employee.brief}</div>
      {/* <Link to={`/job/${job._id}`} className="btn btn-reverse btn-sm">
        View
      </Link> */}
    </>
  );
}

export default EmployeeItem;
