import {SET_PROJECTS, CREATE_PROJECT} from '../actions'

export const projects = (state = {projects: []}, action) => {
  switch(action.type) {

    case SET_PROJECTS:
      state = Object.assign({}, state, action.payload)
      return state

    case CREATE_PROJECT:
      state["projects"] = [...state["projects"], action.payload]
      return state


    default:
      return state;
  }
}
