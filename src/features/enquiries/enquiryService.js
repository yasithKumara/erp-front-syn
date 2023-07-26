import axios from "axios";
//const API_URL = 'http://localhost:8080/auth'
const API_URL = "http://localhost:8080/inquiry";

//create a new enquiry
const createEnquiry = async (enquiryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + '/CreateInquiry', enquiryData, config);

  return response.data;
};

//get user enquirys
const getEnquirys = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL, config);
  
    return response.data;
  };

  //get user enquirys
const getEnquiry = async (enquiryId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL+ enquiryId, config);
  
    return response.data;
  };

  
  //get user enquirys
const closeEnquiry = async (enquiryId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.put(API_URL+ enquiryId, {status: 'closed'}, config);
  
    return response.data;
  };

  //get enqury ids
  const getEnquiryIDs = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL+'/GetInquiryIDs', config);
    console.log(response)
  
    return response.data;
  };

const enquiryService = {
  createEnquiry,
  getEnquirys,
  getEnquiry,
  closeEnquiry
};

export default enquiryService;
