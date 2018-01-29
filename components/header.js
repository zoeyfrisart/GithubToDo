import React from 'react';
import { Link } from 'react-router-native';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';

import backArrowIcon from '../assets/backarrow.png';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#333333',
    flexDirection: 'row',
    height: 150,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  back: {
    position: 'absolute',
    left: 10,
  },
});

export default class Header extends React.Component {
  render() {
    return (
      <View style={[styles.header, { backgroundColor: this.props.background }]}>
        {this.props.backArrow && (
          <Link to="/" style={styles.back}>
            <Image source={backArrowIcon} />
          </Link>
        )}
        <Text style={styles.text}>{this.props.header}</Text>
      </View>
    );
  }
}

Header.propTypes = {
  backArrow: PropTypes.bool,
  background: PropTypes.string,
  header: PropTypes.string.isRequired,
};

Header.defaultProps = {
  backArrow: false,
  background: '#3f3f3f',
};
