import {SET_SOURCES, CREATE_SOURCE} from '../actions'

export const sources = (state = {sources: []}, action) => {
  switch(action.type) {

    case SET_SOURCES:
      state = Object.assign({}, state, action.payload)
      return state

    case CREATE_SOURCE:
      state["sources"] = [...state["sources"], action.payload]
      return state


    default:
      return state;
  }
}
