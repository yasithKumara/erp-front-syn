import React from "react";
import { Link } from "react-router-dom";

function JobItem({ job }) {
  console.log(job);

  const showStatus = () => {
    switch (job.status) {
      case "Pending":
        return (
          <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm  ">
            Pending
          </div>
        );
      case "Approved":
        return (
          <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm">
            Approved
          </div>
        );
      case "Revision":
        return (
          <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm">
            Revision
          </div>
        );
      case "Rejected":
        return (
          <div className=" rounded p-2 bg-[#FBF5C4] text-[#8B5401] inline-block text-xs lg:text-sm">
            Rejected
          </div>
        );
      case "Completed":
        return (
          <div className=" rounded p-2 bg-[#97FAB8] text-[#14AE5C] text-xs lg:text-sm inline-block">
            Complete
          </div>
        );
    }
  };

  return (
    <>
      <div className="col-start-1  "></div>
      <div className="col-start-2  ">{job.job_no}</div>
      <div className="col-start-3 col-span-2  ">{job.main_job_id}</div>
      <div className="col-start-5 col-span-2  ">{job.description}</div>
      <div className="col-start-7 col-span-2  "> {showStatus()}</div>
      <div className="col-start-9 col-span-2  ">{job.brief}</div>
      <div className="col-start-11 col-span-1 ">
        <Link
          to={`/job/${job.job_no}/add-subtask-enquiry`}
          className="btn btn-reverse btn-sm h-14 p-0 w-14"
        >
          Add sub task
        </Link>
      </div>
      {/* <Link to={`/job/${job._id}`} className="btn btn-reverse btn-sm">
        View
      </Link> */}
    </>
  );
}

export default JobItem;
