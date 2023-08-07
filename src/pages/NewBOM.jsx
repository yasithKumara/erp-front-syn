import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, createBOM, getBOMs } from "../features/boms/BOMSlice";
import { getJobIDs, getJob } from "../features/jobs/jobSlice";
// import {
//   reset as enquiryReset,
//   createEnquiry,
//   getEnquiryIDs,
//   getEnquiryByID,
// } from "../features/enquiries/enquirySlice";

import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import BOMItemInput from "../components/BOMItemInput";

function NewBOM() {
  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.BOM
  );

  // const { isLoading, isError, isSuccess, message, enquiryIDs, enquiry } =
  //   useSelector((state) => state.enquiry);

  const {
    job,
    isLoading: jobIsLoading,
    isSuccess: jobIsSuccess,
    jobIDs,
  } = useSelector((state) => state.job);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [job_no, setJob_no] = useState("");
  const [client_name, setClient_name] = useState("");
  const [description, setDescription] = useState("");
  const [materials, setMaterials] = useState([{
    category:'Timber',
    name:'Teak',
    unit:'Sq.Ft',
    rate:100,
    material_qty:1,
    total_material_cost:100,
    remarks:'lorem ipsum'
  }, {
    category:'Timber',
    name:'Mahogani',
    unit:'Sq.Ft',
    rate:80,
    material_qty:2,
    total_material_cost:160,
    remarks:'lorem ipsum'}]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      // navigate("/tickets");
    }

    //dispatch(reset());
  }, [isError, dispatch, isSuccess, navigate, message]);

  useEffect(() => {
    //console.log("first");
    dispatch(getJobIDs());
  }, []);

  useEffect(() => {
    setClient_name(job.client_name);

  }, [job]);

  const onJobIDSelect = (job_no) => {
    setJob_no(parseInt(job_no));


    jobIDs.map((job) => {
      if (job_no === job.job_no.toString()) {
        console.log(job_no + "=" + job.job_no.toString());
        console.log(job.client_name.toString());
        setClient_name(job.client_name.toString());
      }
    });

    //dispatch(getJob(job_no));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    

    dispatch(
      createBOM({
        job_no,
        Index_no: 1,
        created_date: new Date(),
        items: materials,
        status: "pending",
        description,
      })
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  const handleAddItemClick = () => {
    setMaterials([...materials, { category: "", name: "", unit: "", rate: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index][field] = value;
    setMaterials(updatedMaterials);
  };

  return (
    <div className="drawer-content-custom f9">
      <div className=" inline-block bg-white mt-5 w-[92%] p-5">
        <div className=" float-left">
          <h1 className="font-bold ">BOM</h1>
          <p className="text-xs">
            You are viewing every Quotations that's made so far...
          </p>
        </div>
      </div>
      <hr />
      <div className="w-[92%] bg-white">
        <form onSubmit={onSubmit}></form>
        <div className="lg:grid grid-cols-2 gap-2 bg-white p-5 shadow-lg m-2 lg:m-10">
          <div className="col-span-2 font-medium">
            <p>Create Quotation</p>
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
                disabled
              />
            </p>
          </div>
          <div className="col-span-1 ">
            <p>
              <label className=" text-xs" for="">
                Job ID
              </label>
              <select
                onChange={(e) => onJobIDSelect(e.target.value)}
                value={job.job_no}
                className="select select-sm select-bordered font-normal text-sm w-full"
              >
                <option disabled selected>
                  Select an enquiry ID
                </option>
                {jobIDs.length > 0
                  ? jobIDs.map((jobID) => (
                      <>
                        <option>{jobID.job_no}</option>
                      </>
                    ))
                  : null}
              </select>
            </p>
          </div>

          <div className="col-span-2">
            <p>
              <label className=" text-xs" for="">
                Description
              </label>
              <textarea
                class="textarea textarea-bordered w-full"
                placeholder="Description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </p>
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
      </div>
      <div className=" inline-block bg-white w-[92%] p-5">
        <div className=" float-left">
          <h1 className=" font-semibold text-xl">Items</h1>
        </div>
        <div className=" float-right">
          <button
            className="btn btn-sm bg-white text-black ml-1 submit text-sm normal-case font-medium"
            onClick={handleAddItemClick}
          >
            Add new Item
          </button>
        </div>

        <div className="grid grid-cols-11  grid-flow-row bg-white w-full gap-1 lg:gap-2 lg:text-base col-span-1 text-center pt-3">
          <div className="col-start-1">No</div>
          <div className="col-start-2">Category *</div>
          <div className="col-start-3">Description *</div>
          <div className="col-start-4 ml-3">Unit *</div>
          <div className="col-start-5">Rate (LKR) *</div>
          <div className="col-start-6">Material Qty per Unit *</div>
          <div className="col-start-7">Material Cost per Unit *</div>
          <div className="col-start-8">Total material Qty *</div>
          <div className="col-start-9">Total Material Cost *</div>
          <div className="col-start-10 ">Remarks*</div>
          <div className="col-start-11"></div>

          <hr className="col-span-11 mx-3 my-3" />
        </div>

        {materials.map((item, index) => (
          <BOMItemInput key={index} index={index} onChange={handleItemChange} />
        ))}
      </div>
    </div>
  );
}

export default NewBOM;
