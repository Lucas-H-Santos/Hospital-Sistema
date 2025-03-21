import {
  GET_APPOINTMENTS,
  GET_APPOINTMENT,
  ADD_APPOINTMENT,
  UPDATE_APPOINTMENT,
  DELETE_APPOINTMENT,
  APPOINTMENT_ERROR,
  CLEAR_APPOINTMENT
} from '../actions/types';

const initialState = {
  appointments: [],
  appointment: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: payload,
        loading: false
      };
    case GET_APPOINTMENT:
      return {
        ...state,
        appointment: payload,
        loading: false
      };
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [payload, ...state.appointments],
        loading: false
      };
    case UPDATE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.map(app =>
          app._id === payload._id ? payload : app
        ),
        loading: false
      };
    case DELETE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.filter(app => app._id !== payload),
        loading: false
      };
    case APPOINTMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_APPOINTMENT:
      return {
        ...state,
        appointment: null
      };
    default:
      return state;
  }
}
