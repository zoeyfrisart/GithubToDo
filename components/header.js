import React from 'react';
import { Link } from 'react-router-native';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

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

export default class Header extends React.Component {
  render() {
    return (
      <View style={[styles.header, { backgroundColor: this.props.background }]}>
        {this.props.backArrow && (
          <Link to="/">
            <Text>back</Text>
          </Link>
        )}
        <Text style={styles.text}>{this.props.header}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  backArrow: PropTypes.bool,
  header: PropTypes.string.isRequired,
};

Header.defaultProps = {
  backArrow: false,
};
