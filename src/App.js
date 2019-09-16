import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { NavBar} from './components/nav/NavBar'
import HomePage from './components/HomePage'
import TopicSummaryContainer from './components/topicSummary/TopicSummaryContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={(routerProps) => {
              return <HomePage history={routerProps.history} />
            }} />

          <Route exact path="/topics" render={(routerProps) => {
              return <TopicSummaryContainer history={routerProps.history} />
            }} />

        </Switch>
      </div>
    )
  }

}

export default App;
