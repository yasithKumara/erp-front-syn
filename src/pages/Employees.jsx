import React, { useEffect } from "react";

import { getJobs, reset } from "../features/jobs/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import JobItem from "../components/JobItem";
import HeadCard from "../components/HeadCard";
import { Link } from "react-router-dom";
import { useState } from "react";

import folderIcon from "../resources/folder.svg";
import infoIcon from "../resources/Info.svg";
import refreshIcon from "../resources/refresh.svg";

function Employees() {
  const { jobs, isLoading, isSuccess } = useSelector((state) => state.job);

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    //run on unmount
    return () => {
      if (isSuccess) {
        console.log(jobs);
        //dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  //   useEffect(() => {
  //     dispatch(getJobs({
  //       // "date": "1999-07-28",
  //       "stateFilter": 'any',
  //       "cursor":6
  //     }));
  //     setActiveTab('jobs')
  //   }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const onSubmit = (e) => {
    //console.log(client_name)
    e.preventDefault();
    dispatch();
    // createEnquiry({
    //   client_name,
    //   project_name,
    //   contactNo,
    //   IHT_Member,
    //   site_visit,
    //   Brief,
    //   status,
    //   sub_task
    // })
  };

  console.log("Before rendering JobItem", jobs); // Add this log statement to check the jobs array before mapping

  return (
    <>
      <div className="drawer-content-custom f9">
        <div className="grid grid-cols-3 gap-7 w-[92%] mt-7 ">
          <HeadCard icon={folderIcon} value={23} heading={"Total Employees"} />
          <HeadCard icon={infoIcon} value={6} heading={"Managers"} />
          <HeadCard icon={refreshIcon} value={8} heading={"Departments"} />
        </div>
        <div className=" inline-block bg-white mt-5 w-[92%] p-5">
          <h className="font-bold text-2xl">Employees</h>
          <p className=" font-normal text-base text-[#9FA1A6]">
            Lorem Ipsum is simply dummy text ...
          </p>
        </div>
        <hr />
        {/* Pending Approved Revision rejected */}
        <div className=" inline-block bg-white w-[92%] p-2 lg:p-5 ">
          <div className="tabs">
            <a
              id="Jobs"
              className={`tab tab-bordered text-black hover:text-[#5c4ec9] hover:border-[#5c4ec9] active-tab`}
            >
              Employee
            </a>
          </div>
        </div>

        <div className=" lg:flex items-center justify-center bg-white w-[92%] p-1 lg:p-5 lg:px-7">
          <form class="flex flex-row focus-within:outline-[#1b53c5] focus-within:outline rounded bg-[#F2F3F5] min-h-0 h-[40px] m-1 w-[310px] lg:w-full">
            <span class="flex items-center rounded rounded-l-none border-0 px-2 ">
              <button>
                <img
                  src={require("../resources/charm_search.png")}
                  className=" justify-center items-center"
                />
              </button>
            </span>
            <input
              class=" py-2 lg:w-full px-2 outline-none text-gray-600 bg-[#F2F3F5] rounded text-sm  min-w-[280px]"
              type="text"
              placeholder="Search or type a command (Ctrl + G)"
              // value={project_start ? project_start.toISOString().slice(0, 10) : null}
              // onChange={handleProject_startDateSelect}
            />
          </form>

          {/* <Link to="/new-job" className="font-medium">
            
          </Link> */}

          <button
            type="button"
            className="btn h-[40px] btn-sm bg-[#5c4ec9] text-white hover:bg-[#4b3bc2] text-sm normal-case font-medium m-1 min-w-[160px]"
            onClick={() => window.my_modal_3.showModal()}
          >
            Add Employee
            <img
              src={require("../resources/ic_round-keyboard-arrow-right.png")}
              className=" justify-center items-center"
            />
          </button>

          {/* <button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button> */}
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
              <div className="flex justify-between">

                

                
              </div>

              <div className="lg:grid grid-cols-2 gap-2 bg-white p-5 ">

              <h3 className="col-span-1 font-medium text-2xl">Employee Profile</h3>

              <div className="col-span-1 flex justify-center items-center p-2 bg-[#e4e4e4]">
                  <div className="  rounded-full float-left p-2">
                    <img
                      className=" w-16 h-16"
                      src={require("../resources/Profile.png")}
                    />
                  </div>
                  <div className="flex space flex-col ">
                    <p className=" font-medium">Alex jones</p>
                    <p className=" font-light">Business analyst</p>
                    <p className=" font-light">4039049</p>
                  </div>
                </div>

                <div className="col-span-1 ">
                  <p>Employee Profile</p>
                </div>

                <div className="col-span-1 ">
                  <p>
                    <label className=" text-xs" for="">
                      Client Name
                    </label>
                    <input
                      className="input input-sm input-bordered w-full"
                      type="text"
                      id="client_name"
                      // value={client_name}
                      // onChange={(e) => setClient_name(e.target.value)}
                    />
                  </p>
                </div>
                <div className="col-span-1 ">
                  <p>
                    <label className=" text-xs" for="">
                      Contact Number
                    </label>
                    <input
                      className="input input-sm input-bordered w-full"
                      type="text"
                      id="contactNo"
                      // value={contactNo}
                      // onChange={(e) => setContactNo(e.target.value)}
                    />
                  </p>
                </div>
                <div className="col-span-1 ">
                  <p>
                    <label className=" text-xs" for="">
                      IHT Client Service Number
                    </label>
                    <input
                      className="input input-sm input-bordered w-full"
                      type="text"
                      id="IHT_Member"
                      // value={IHT_Member}
                      // onChange={(e) => setIHT_Member(e.target.value)}
                    />
                  </p>
                </div>
                <div className="col-span-1 ">
                  <p>
                    <label className=" text-xs" for="">
                      Job ID
                    </label>
                    <input
                      className="input input-sm input-bordered w-full"
                      type="text"
                    />
                  </p>
                </div>
                <div className="col-span-2">
                  <p>
                    <label className=" text-xs" for="">
                      Brief
                    </label>
                    <textarea
                      class="textarea textarea-bordered w-full"
                      placeholder="Brief"
                      id="Brief"
                      // value={Brief}
                      // onChange={(e) => setBrief(e.target.value)}
                    ></textarea>
                  </p>
                </div>
                <div className="col-span-1">
                  <label class="cursor-pointer label text-xs">
                    Site visit required
                  </label>
                  <input
                    type="checkbox"
                    class="toggle toggle-primary toggle-xs ml-1"
                    id="site_visit"
                    // checked={site_visit}
                    // onClick ={(e) => setSite_visit(e.target.checked)}
                  />
                </div>
                <div className="col-span-2 inline-block">
                  <div className="float-right">
                    <button className="btn btn-sm m-1 text-sm normal-case font-medium">
                      Cancel
                    </button>
                    <button
                      className="btn btn-sm bg-blue-700 hover:bg-blue-800 text-white ml-1 submit text-sm normal-case font-medium"
                      onClick={onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </dialog>
        </div>

        <div className="grid grid-cols-10  grid-flow-row bg-white w-[92%] gap-1 lg:gap-2 text-sm lg:text-base">
          {/* {<JobItem key={jobs.data[0]._id} job={jobs.data[0]} />} */}

          {/* {jobs.length > 0
            ? jobs.map((job) => (
                <>
                  <JobItem key={job._id} job={job} />
                  <hr className="col-span-10 mx-3 my-3" />
                </>
              ))
            : null} */}
        </div>
      </div>
    </>
  );
}

export default Employees;
