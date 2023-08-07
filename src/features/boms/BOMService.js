import axios from "axios";
//const API_URL = 'http://localhost:8080/auth'
const API_URL = "http://localhost:8080/bom";

//create a new BOM
const createBOM = async (BOMData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + '/CreateBOM', BOMData, config);

  return response.data;
};

//get user BOMs
const getBOMs = async (filters, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.post(API_URL+ '/GetBOMS', filters, config);
    console.log(response.data)
  
    return response.data.data;
  };

  //get user BOMs
const getBOM = async (BOMId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL+ BOMId, config);
  
    return response.data;
  };

  
  //get user BOMs
// const closeBOM = async (BOMId, token) => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
  
//     const response = await axios.put(API_URL+ BOMId, {status: 'closed'}, config);
  
//     return response.data;
//   };

  //get user BOM count Completed
  const getBOMCountCompleted = async ( token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL+ '/GetBOMCountCompleted', config);
    //console.log(response.data)
  
    return response.data.data.count;
  };

  //get user BOM count Pending
  const getBOMCountPending = async ( token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL+ '/GetBOMCountPending', config);
    //console.log(response.data)
  
    return response.data.data.count;
  };

  //get user BOM count Not Arrived
  const getBOMCountNotArrived = async ( token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL+ '/GetBOMCountNotArrived', config);
    //console.log(response.data)
  
    return response.data.data.count;
  };

const BOMService = {
  createBOM,
  getBOMs,
  getBOM,
//closeBOM,
  getBOMCountCompleted,
  getBOMCountPending,
  getBOMCountNotArrived
};

export default BOMService;
