import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Issue from './issue';

// Import firebase
import base from '../base';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  item: {
    height: 44,
    color: '#333',
    backgroundColor: '#eeeeee',
    fontFamily: 'PingFang SC',
    marginTop: 4,
    fontSize: 18,
    padding: 10,
  },
});

export default class Respos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      respos: {},
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`/issues`, {
      context: this,
      state: 'respos',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  populateData() {
    const respos = { ...this.state.respos };
    const item = {
      title: 'Issue desc 1',
      tags: {
        bug: true,
        toDo: true,
      },
      assigned: {
        p1: 'Yannick Frisart',
      },
      milestone: 'V0.3',
    };
    const timestamp = Date.now();
    respos[`issue-${timestamp}`] = item;
    this.setState({ respos });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {Object.keys(this.state.respos).map(key => (
            <Issue key={key} index={key} details={this.state.respos[key]} />
          ))}
        </ScrollView>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}
