import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, createEnquiry, getEnquiryIDs } from "../features/enquiries/enquirySlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function NewEnquiry() {
  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.enquiry
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [client_name, setClient_name] = useState("");
  const [project_name, setProject_name] = useState("sample project");
  const [contactNo, setContactNo] = useState("");
  const [IHT_Member, setIHT_Member] = useState("");
  const [Brief, setBrief] = useState("");
  const [site_visit, setSite_visit] = useState(false);
  const [sub_task, setSub_task] = useState(false);
  const [status, setStatus] = useState("Pending");
  

  useEffect(() => {
    

    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      // navigate("/tickets");
    }

    dispatch(reset());
  }, [isError, dispatch, isSuccess, navigate, message]);

  
  const onSubmit = (e) => {
    console.log(client_name)
    e.preventDefault();
    dispatch(
      createEnquiry({
        client_name,
        project_name,
        contactNo,
        IHT_Member,
        Brief,
        site_visit,
        sub_task,
        status
      })
    );
  };

  
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="drawer-content-custom f9">
      <div className=" inline-block bg-white mt-5 w-[92%] p-5">
        <div className=" float-left">
          <h1 className="font-bold ">Job Enquiries</h1>
          <p className="text-xs">
            You are viewing every Quotations that's made so far...
          </p>
        </div>
        <Link to="/new-job" className=" float-right">
            <button
              type="button"
              className="btn btn-sm bg-[#5c4ec9] text-white hover:bg-[#4b3bc2] text-sm normal-case font-medium"
            >
              Create Job
              <img
                src={require("../resources/ic_round-keyboard-arrow-right.png")}
                className=" "
              />
            </button>
          </Link>
        {/* <div className="float-right">
          <button className="btn login-btn btn-sm bg-[#5c4ec9] text-white hover:bg-[#4b3bc2]">Create Job</button>
        </div> */}
      </div>
      <hr />
      <div className="w-[92%] bg-white">
        <form onSubmit={onSubmit}></form>
        <div className="lg:grid grid-cols-2 gap-2 bg-white p-5 shadow-lg m-2 lg:m-10">
          <div className="col-span-2 font-medium">
            <p>Add an inquiry</p>
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
                value={client_name}
                onChange={(e) => setClient_name(e.target.value)}
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
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
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
                value={IHT_Member}
                onChange={(e) => setIHT_Member(e.target.value)}
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
                value={Brief}
                onChange={(e) => setBrief(e.target.value)}
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
              checked={site_visit}
              onClick ={(e) => setSite_visit(e.target.checked)}
            />
          </div>
          <div className="col-span-2 inline-block">
            <div className="float-right">
              <button className="btn btn-sm m-1 text-sm normal-case font-medium">Cancel</button>
              <button className="btn btn-sm bg-blue-700 hover:bg-blue-800 text-white ml-1 submit text-sm normal-case font-medium" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewEnquiry;
