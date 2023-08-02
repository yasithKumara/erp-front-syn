import React, { useEffect } from "react";

import { getJobs, reset } from "../features/jobs/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import JobItem from "../components/JobItem";
import HeadCard from "../components/HeadCard";
import { Link } from "react-router-dom";
import { useState } from "react";

function Jobs() {
  const { jobs, isLoading, isSuccess } = useSelector((state) => state.job);

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    //run on unmount
    return () => {
      if (isSuccess) {
        console.log(jobs);
        //dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getJobs({
      // "date": "1999-07-28",
      "stateFilter": 'any',
      "cursor":6
    }));
    setActiveTab('jobs')
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const clickedTab = (e) => {
    const clickedTabId = e.target.id;
    setActiveTab(clickedTabId);
    if(clickedTabId === 'Completed' || clickedTabId === 'Pending'){
      dispatch(getJobs({
        "date": "2023-07-28",
      "stateFilter": clickedTabId,
      "cursor":6
      }))
    }else{
      dispatch(getJobs({
        "date": "2023-07-28",
      "stateFilter": 'any',
      "cursor":6
      }))
    }
  }

  console.log("Before rendering JobItem", jobs); // Add this log statement to check the jobs array before mapping

  return (
    <>
      <div className="drawer-content-custom f9">
        <div className="grid grid-cols-3 gap-7 w-[92%] mt-7 ">
          <HeadCard />
          <HeadCard />
          <HeadCard />
        </div>
        <div className=" inline-block bg-white mt-5 w-[92%] p-5">
          <h className="font-bold text-2xl">Projects</h>
          <p className=" font-normal text-base text-[#9FA1A6]">
            You Have requests awaiting your approval
          </p>
        </div>
        <hr />
        {/* Pending Approved Revision rejected */}
        <div className=" inline-block bg-white w-[92%] p-2 lg:p-5 ">
          <div className="tabs">
            <a id="Jobs" onClick={clickedTab} className={`tab tab-bordered text-black hover:text-[#5c4ec9] hover:border-[#5c4ec9] ${activeTab === 'Jobs' ? 'active-tab' : ''}`}>
              Jobs
            </a>
            <a id="Pending" onClick={clickedTab} className={`tab tab-bordered text-black hover:text-[#5c4ec9] hover:border-[#5c4ec9] ${activeTab === 'Pending' ? 'active-tab' : ''}`}>
              Pending
            </a>
            <a id="Manufacturing" onClick={clickedTab} className={`tab tab-bordered text-black hover:text-[#5c4ec9] hover:border-[#5c4ec9] ${activeTab === 'Manufacturing' ? 'active-tab' : ''}`}>
              In Manufacturing
            </a>
            <a id="Review" onClick={clickedTab} className={`tab tab-bordered text-black hover:text-[#5c4ec9] hover:border-[#5c4ec9] ${activeTab === 'Review' ? 'active-tab' : ''}`}>
              In Review
            </a>
            <a id="Completed" onClick={clickedTab} className={`tab tab-bordered text-black hover:text-[#5c4ec9] hover:border-[#5c4ec9] ${activeTab === 'Completed' ? 'active-tab' : ''}`}>
              Completed
            </a>
          </div>
        </div>

        <div className=" lg:flex items-center justify-center bg-white w-[92%] p-1 lg:p-5">
          <div className="dropdown dropdown-bottom dropdown-end m-1">
            <label
              tabIndex={0}
              className="btn min-h-[40px] h-[40px] min-w-[180px] m-0 "
            >
              <img
                src={require("../resources/call.png")}
                className=" justify-center items-center"
              />
              Last 30 days
              <img
                src={require("../resources/darrow.png")}
                className=" justify-center items-center"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-40 "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end m-1 align-top">
            <label tabIndex={0} className="btn min-h-0 h-[40px] min-w-[121px]">
              {/* <img
                src={require("../resources/call.png")}
                className=" justify-center items-center"
              /> */}
              Filter by
              <img
                src={require("../resources/darrow.png")}
                className=" justify-center items-center"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-40 "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <form class="flex flex-row focus-within:outline-[#1b53c5] focus-within:outline rounded bg-[#F2F3F5] min-h-0 h-[40px] m-1 w-[310px]">
            <span class="flex items-center rounded rounded-l-none border-0 px-2 ">
              <button
              // onClick={}
              >
                <img
                  src={require("../resources/charm_search.png")}
                  className=" justify-center items-center"
                />
              </button>
            </span>
            <input
              class=" py-2 lg:w-full px-2 outline-none text-gray-600 bg-[#F2F3F5] rounded text-sm  min-w-[120px]"
              type="text"
              placeholder="Search or type a command (Ctrl + G)"
              // value={project_start ? project_start.toISOString().slice(0, 10) : null}
              // onChange={handleProject_startDateSelect}
            />
          </form>

          <Link to="/new-job" className="font-medium">
            <button
              type="button"
              className="btn h-[40px] btn-sm bg-[#5c4ec9] text-white hover:bg-[#4b3bc2] text-sm normal-case font-medium m-1 min-w-[128px]"
            >
              Create Job
              <img
                src={require("../resources/ic_round-keyboard-arrow-right.png")}
                className=" justify-center items-center"
              />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-10  grid-flow-row bg-white w-[92%] gap-1 lg:gap-2 text-sm lg:text-base">
          <div className="col-start-1 "></div>
          <div className="col-start-2 ">No.</div>
          <div className="col-start-3 col-span-2 ">Job Title *</div>
          <div className="col-start-5 col-span-2 m-[-2px]">Description</div>
          <div className="col-start-7 col-span-2 ">Production Status</div>
          <div className="col-start-9 col-span-2 pl-1">Remarks</div>
          <hr className="col-span-10 mx-3 my-3"/>
        </div>

        <div className="grid grid-cols-10  grid-flow-row bg-white w-[92%] gap-1 lg:gap-2 text-sm lg:text-base">
          {/* {<JobItem key={jobs.data[0]._id} job={jobs.data[0]} />} */}

          {jobs.length > 0
            ? jobs.map((job) => (
                <>
                  <JobItem key={job._id} job={job} />
                  <hr className="col-span-10 mx-3 my-3" />
                </>
              ))
            : null}

        </div>
      </div>
    </>
  );
}

export default Jobs;
