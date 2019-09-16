import {SET_NOTES, CREATE_NOTE} from '../actions'

export const notes = (state = {notes: []}, action) => {
  switch(action.type) {

    case SET_NOTES:
      state = Object.assign({}, state, action.payload)
      return state

    case CREATE_NOTE:
      state["notes"] = [...state["notes"], action.payload]
      return state


    default:
      return state;
  }
}
