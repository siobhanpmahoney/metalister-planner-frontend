import {SET_TAGS, CREATE_TAG} from '../actions'

export const tags = (state = {tags: []}, action) => {
  switch(action.type) {

    case SET_TAGS:
      state = Object.assign({}, state, action.payload)
      return state

    case CREATE_TAG:
      state["tags"] = [...state["tags"], action.payload]
      return state


    default:
      return state;
  }
}
