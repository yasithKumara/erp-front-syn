import axios from "axios";
//const API_URL = 'http://localhost:8080/auth'
const API_URL = "http://localhost:8080/job";

//create a new job
const createJob = async (jobData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + '/CreateJob', jobData, config);

  return response.data;
};

//get user jobs
const getJobs = async (filters, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };


  //   const filters = {
  //   "date": "2023-07-28",
  //   "stateFilter":"Pending",
  //   "cursor":3
  // }
  
    const response = await axios.post(API_URL+ '/GetJobs', filters, config);
    console.log(response.data)
  
    return response.data.data;
  };

  //get user jobs
const getJob = async (jobId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL+ jobId, config);
  
    return response.data;
  };

  
  //get user jobs
const closeJob = async (jobId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.put(API_URL+ jobId, {status: 'closed'}, config);
  
    return response.data;
  };
const jobService = {
  createJob,
  getJobs,
  getJob,
  closeJob
};

export default jobService;
