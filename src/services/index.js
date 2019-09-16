const API_ROOT = 'http://localhost:3000/api/v1'

const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accepts': 'application/json'
  }
}


// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

export const fetchTopics = () => {
  return fetch(`${API_ROOT}/topics`, {
    method: 'GET',
    headers: headers()
  })
  .then(results => {
    return results.json()
  })
}

export const createTopic = (data) => {
  return fetch(`${API_ROOT}/topics`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({topic: data})
  })
  .then(response => response.json())
}





// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

export const fetchProjects = () => {
  return fetch(`${API_ROOT}/projects`, {
    method: 'GET',
    headers: headers()
  })
  .then(results => results.json())
}

export const createProject = (data) => {
  return fetch(`${API_ROOT}/projects`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({project: data})
  })
  .then(response => response.json())
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// END: Project
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------




// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// BEGIN: source
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

export const fetchSources = () => {
  return fetch(`${API_ROOT}/sources`, {
    method: 'GET',
    headers: headers()
  })
  .then(results => results.json())
}

export const createSource = (data) => {
  return fetch(`${API_ROOT}/sources`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({source: data})
  })
  .then(response => response.json())
}



// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

export const fetchNotes = () => {
  return fetch(`${API_ROOT}/notes`, {
    method: 'GET',
    headers: headers()
  })
  .then(results => results.json())
}

export const createNote = (data) => {
  return fetch(`${API_ROOT}/notes`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({note: data})
  })
  .then(response => response.json())
}


// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

export const fetchTasks = () => {
  return fetch(`${API_ROOT}/tasks`, {
    method: 'GET',
    headers: headers()
  })
  .then(results => results.json())
}

export const createTask = (data) => {
  return fetch(`${API_ROOT}/tasks`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({task: data})
  })
  .then(response => response.json())
}



// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

export const fetchTags = () => {
  return fetch(`${API_ROOT}/tags`, {
    method: 'GET',
    headers: headers()
  })
  .then(results => results.json())
}

export const createTag = (data) => {
  return fetch(`${API_ROOT}/tags`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({tag: data})
  })
  .then(response => response.json())
}
