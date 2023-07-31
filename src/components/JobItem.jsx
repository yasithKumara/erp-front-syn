import React from "react";
import { Link } from "react-router-dom";

function JobItem({ job }) {
  console.log(job);

  return (
    <>
      <div className="col-start-1  "></div>
      <div className="col-start-2  ">{job.job_no}</div>
      <div className="col-start-3 col-span-2  ">{job.description}</div>
      <div className="col-start-5 col-span-2  ">{job.status}</div>
      <div className="col-start-7 col-span-2  ">{job.status}</div>
      <div className="col-start-9 col-span-2  ">{job.brief}</div>
      {/* <Link to={`/job/${job._id}`} className="btn btn-reverse btn-sm">
        View
      </Link> */}
    </>
  );
}

export default JobItem;
