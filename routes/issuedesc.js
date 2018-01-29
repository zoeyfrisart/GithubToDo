import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import IssueRow from '../components/issueRow';
import Header from '../components/header';

import base from '../base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});

export default class IssueDesc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: {},
    };
  }

  componentWillMount(nextProps) {
    this.ref = base.syncState(`/issues/${this.props.match.params.issueId}`, {
      context: this,
      state: 'issue',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const issue = this.state.issue;
    return (
      <ScrollView style={styles.container}>
        <Header header="ISSUE" background="#5eeeee" backArrow />
        {issue.title && <IssueRow key="Title" label="Title" value={this.state.issue.title} />}
        {issue.body && <IssueRow key="Body" label="Description" value={this.state.issue.body} />}
        {issue.status && <IssueRow key="Status" label="Status" value={this.state.issue.status} />}
        {issue.assigned && (
          <IssueRow key="Assigned" label="Assigned" value={this.state.issue.assigned} />
        )}
        {issue.labels && <IssueRow key="Labels" label="Labels" value={this.state.issue.labels} />}
        {issue.milestone && (
          <IssueRow key="Milestone" label="Milestone" value={this.state.issue.milestone} />
        )}
      </ScrollView>
    );
  }
}
