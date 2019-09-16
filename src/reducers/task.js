import {SET_TASKS, CREATE_TASK} from '../actions'

export const tasks = (state = {tasks: []}, action) => {
  switch(action.type) {

    case SET_TASKS:
      state = Object.assign({}, state, action.payload)
      return state

    case CREATE_TASK:
      state["tasks"] = [...state["tasks"], action.payload]
      return state


    default:
      return state;
  }
}
