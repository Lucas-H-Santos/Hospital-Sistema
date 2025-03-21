import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import doctorReducer from './doctorReducer';
import appointmentReducer from './appointmentReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  doctor: doctorReducer,
  appointment: appointmentReducer
});
