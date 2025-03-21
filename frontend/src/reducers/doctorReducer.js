import {
  GET_DOCTORS,
  GET_DOCTOR,
  DOCTOR_ERROR,
  CLEAR_DOCTOR
} from '../actions/types';

const initialState = {
  doctors: [],
  doctor: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctors: payload,
        loading: false
      };
    case GET_DOCTOR:
      return {
        ...state,
        doctor: payload,
        loading: false
      };
    case DOCTOR_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_DOCTOR:
      return {
        ...state,
        doctor: null
      };
    default:
      return state;
  }
}
