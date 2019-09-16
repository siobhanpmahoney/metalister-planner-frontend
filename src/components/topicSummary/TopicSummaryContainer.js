import React from 'react'

import {withRouter} from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {fetchTopicsAction, createTopicAction} from '../../actions'

import TopicSummaryList from './TopicSummaryList'


class TopicSummaryContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expandedTopic: null, // the topic appearing in side drawer,
      isLoading: false, //to load if loading
      topics: null
    }
  }

  componentDidMount() {
    this.props.fetchTopicsAction()
  }



  render() {
    if (!!this.props.topics && this.props.topics.length > 0) {
      console.log(this.props)
      return (
        <div>
          <ol>
            <TopicSummaryList topics={this.props.topics} />
          </ol>
        </div>
      )
    } else {
        return (
          <div>
            Loading...
          </div>
        )
    }

  }
}


function mapStateToProps(state, props) {
  return {
    topics: state.topics
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTopicsAction, createTopicAction}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicSummaryContainer))
