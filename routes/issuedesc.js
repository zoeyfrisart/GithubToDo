import React from 'react';
import { StyleSheet, SectionList, Text, View } from 'react-native';
import Header from '../components/header';

export default class IssueDesc extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          header="ISSUE"
          background="#5eeeee"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lime',
  }
});