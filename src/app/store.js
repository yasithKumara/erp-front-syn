import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import ticketReducer from '../features/tickets/ticketSlice'
import noteReducer from '../features/notes/noteSlice'
import enquiryReducer from '../features/enquiries/enquirySlice'
import jobReducer from '../features/jobs/jobSlice'
import BOMReducer from '../features/boms/BOMSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
    note: noteReducer,
    enquiry: enquiryReducer,
    job: jobReducer,
    BOM: BOMReducer
  },
});
