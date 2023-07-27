import React, { useEffect } from "react";

import { getJobs, reset } from "../features/jobs/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import JobItem from "../components/JobItem";

function Jobs() {
  const { jobs, isLoading, isSuccess } = useSelector(
    (state) => state.job
  );

  const dispatch = useDispatch();

  useEffect(() => {
    //run on unmount
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="drawer-content-custom f9">
      {/* <div className=" inline-block bg-white mt-5 w-[92%] p-5"> */}
      <div className="lg:grid grid-cols-3 gap-7 w-[92%] mt-7 ">
        <div className="col-span-1 bg-white h-20 shadow-[0px_0px_20px_0px_#00000003] rounded-[10px]"></div>
        <div className="col-span-1 bg-white shadow-[0px_0px_20px_0px_#00000003] rounded-[10px]"></div>
        <div className="col-span-1 bg-white shadow-[0px_0px_20px_0px_#00000003] rounded-[10px]"></div>
      </div>
        {/* <div className=" float-left">
          <h1 className="font-bold ">Job Enquiries</h1>
          <p className="text-xs">
            You are viewing every Quotations that's made so far...
          </p>
        </div>
        <div className="float-right">
          <button className="btn login-btn btn-sm bg-[#5c4ec9] text-white hover:bg-[#4b3bc2]">Create Job</button>
        </div> */}
      
        <div>Jobs</div>
        <div className="jobs">
          <div className="job-headings">
            <div>Date</div>
            <div>Product</div>
            <div>Status</div>
            <div></div>
          </div>
          {jobs.map((job) => (
            <JobItem key={job._id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Jobs;
