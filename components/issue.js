import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Link } from 'react-router-native';

export default class Issue extends React.Component {
  render() {
    return (
      <Link style={styles.issue} to={`issue/${this.props.index}`} >
        <View style={styles.linkwrap}>
          <Text style={styles.title}>{this.props.details.title}</Text>
          <Text style={styles.milestone}>{this.props.details.milestone}</Text>
        </View>
      </Link>
    )
  }
}

const styles = StyleSheet.create({
  issue: {
    height: 50,
    flex: 1,
    padding: 0,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2.5,
    flexDirection: 'row',
    width: '100%',
  },
  linkwrap: {
    height: 50,
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: 16,
    color: '#333333'
  },
  milestone: {
    color: '#34495e',
    fontSize: 14
  },
})