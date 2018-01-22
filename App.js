import React from 'react';
import { StyleSheet, SectionList, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import HomeScreen from './routes/home.js';
import IssueDesc from './routes/issuedesc';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route path="/issue/:issueId" render={() => <IssueDesc />} />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
  }
})