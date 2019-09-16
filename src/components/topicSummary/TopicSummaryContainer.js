import React from 'react'

import {withRouter} from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ReactTable, {
    TableProps as ReactTableProps,
    SortingRule,
    Column,
    FinalState,
    Instance,
    RowInfo,
    ReactTableDefaults
} from 'react-table';

import {fetchTopicsAction, createTopicAction} from '../../actions'


class TopicSummaryContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expandedTopic: null // the topic appearing in side drawer
    }
  }

  componentDidMount() {
    this.props.fetchTopicsAction()
  }



  render() {
    return (
      <div>
        TOPIC LIST
      </div>
    )
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
