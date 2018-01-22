import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={[styles.header, {backgroundColor: this.props.background}]}>
        <Text style={styles.text}>{this.props.header}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: '#333333',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});