import {combineReducers} from 'redux'
import { topics } from './topic'
import { projects } from './project'
import { notes } from './note'
import { sources } from './source'
import { tasks } from './task'
import { tags } from './tag'


const rootReducer = combineReducers({
  topics,
  projects,
  notes,
  sources,
  tasks,
  tags
  // other reducers
});

export default rootReducer;
