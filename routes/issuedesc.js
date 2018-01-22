import React from 'react';
import { StyleSheet, SectionList, Text, View, ScrollView } from 'react-native';
import IssueRow from '../components/issueRow';
import Header from '../components/header';

import base from '../base';

export default class IssueDesc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: {},
    }
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
    return (
      <ScrollView style={styles.container}>
        <Header
          header="ISSUE"
          background="#5eeeee"
          backArrow
        />
        {Object.keys(this.state.issue).map(key =>
          <IssueRow key={key} index={key} label={key} value={this.state.issue[key]}/>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});