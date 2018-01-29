import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  issueRow: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 10,
    marginTop: 2.5,
    marginBottom: 2.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  label: {
    alignItems: 'center',
    backgroundColor: '#524adf',
    color: '#ffffff',
    padding: 5,
    marginLeft: 5,
    fontSize: 12,
  },
  labels: {
    flexDirection: 'row',
  },
  inputLabel: {
    fontWeight: '700',
  },
});

export default class IssueRow extends React.Component {
  render() {
    if (this.props.label === 'Labels') {
      const value = this.props.value;
      const splitted = value.split(', ');
      console.log(splitted);
      return (
        <View style={styles.issueRow}>
          <Text style={styles.inputLabel}>{this.props.label}</Text>
          <View style={styles.labels}>
            {Object.keys(splitted).map(key => (
              <Text key={key} style={styles.label}>
                {splitted[key]}
              </Text>
            ))}
          </View>
        </View>
      );
    }
    return (
      <View style={styles.issueRow}>
        <Text style={styles.inputLabel}>{this.props.label}</Text>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}

IssueRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
