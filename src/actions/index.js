import {fetchTopics, fetchProjects, fetchSources, fetchNotes, fetchTasks, fetchTags, createTopic, createProject, createSource, createNote, createTask, createTag} from '../services'

export const SET_TOPICS = 'SET_TOPICS'
export const CREATE_TOPIC = 'CREATE_TOPIC'

export const SET_PROJECTS = 'SET_PROJECTS'
export const CREATE_PROJECT = 'CREATE_PROJECT'

export const SET_SOURCES = 'SET_SOURCES'
export const CREATE_SOURCE = 'CREATE_SOURCE'

export const SET_NOTES = 'SET_NOTES'
export const CREATE_NOTE = 'CREATE_NOTE'

export const SET_TASKS = 'SET_TASKS'
export const CREATE_TASK = 'CREATE_TASK'

export const SET_TAGS = 'SET_TAGS'
export const CREATE_TAG = 'CREATE_TAG'

export function fetchTopicsAction() {
  return(dispatch) => {
    fetchTopics()
    .then(json => {
      console.log(json)
      dispatch({
        type: SET_TOPICS,
        payload: json
      })
    })
  }
}

export function createTopicAction(topic_data) {
  return(dispatch) => {
    return createTopic(topic_data)
    .then(topic_json => {
      dispatch({
        type: CREATE_TOPIC,
        payload: topic_json
      })
    })
  }
}

// -------------------------------------------------------
// -------------------------------------------------------


export function fetchProjectsAction() {
  return(dispatch) => {
    return fetchProjects()
    .then(json => {
      dispatch({
        type: SET_PROJECTS,
        payload: json
      })
    })
  }
}

export function createProjectAction(project_data) {
  return(dispatch) => {
    return createProject(project_data)
    .then(project_json => {
      dispatch({
        type: CREATE_PROJECT,
        payload: project_json
      })
    })
  }
}

// -------------------------------------------------------
// -------------------------------------------------------

export function fetchSourcesAction() {
  return(dispatch) => {
    return fetchSources()
    .then(json => {
      dispatch({
        type: SET_SOURCES,
        payload: json
      })
    })
  }
}

export function createSourceAction(source_data) {
  return(dispatch) => {
    return createSource(source_data)
    .then(source_json => {
      dispatch({
        type: CREATE_SOURCE,
        payload: source_json
      })
    })
  }
}

// -------------------------------------------------------
// -------------------------------------------------------

export function fetchNotesAction() {
  return(dispatch) => {
    return fetchNotes()
    .then(json => {
      dispatch({
        type: SET_NOTES,
        payload: json
      })
    })
  }
}

export function createNoteAction(note_data) {
  return(dispatch) => {
    return createNote(note_data)
    .then(note_json => {
      dispatch({
        type: CREATE_NOTE,
        payload: note_json
      })
    })
  }
}

// -------------------------------------------------------
// -------------------------------------------------------

export function fetchTasksAction() {
  return(dispatch) => {
    return fetchTasks()
    .then(json => {
      dispatch({
        type: SET_TASKS,
        payload: json
      })
    })
  }
}

export function createTaskAction(task_data) {
  return(dispatch) => {
    return createNote(task_data)
    .then(task_json => {
      dispatch({
        type: CREATE_TASK,
        payload: task_json
      })
    })
  }
}

// -------------------------------------------------------
// -------------------------------------------------------

export function fetchTagsAction() {
  return(dispatch) => {
    return fetchTags()
    .then(json => {
      dispatch({
        type: SET_TAGS,
        payload: json
      })
    })
  }
}

export function createTagAction(tag_data) {
  return(dispatch) => {
    return createNote(tag_data)
    .then(tag_json => {
      dispatch({
        type: CREATE_TAG,
        payload: tag_json
      })
    })
  }
}
