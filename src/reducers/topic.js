import {SET_TOPICS, CREATE_TOPIC} from '../actions'

export const topics = (state = {topics: []}, action) => {
  switch(action.type) {

    case SET_TOPICS:
      return [...state["topics"],...action.payload]
      // return [...state["topics"],... action.payload]
      // return state

    case CREATE_TOPIC:
      state["topics"] = [...state["topics"], action.payload]
      return state


    default:
      return state;
  }
}
