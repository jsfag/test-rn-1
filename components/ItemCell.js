import * as React from 'react';
import { Text, StyleSheet } from 'react-native';


export default class ItemCell extends React.PureComponent {
  render() {
    return (
      <Text style={[styles.paragraph, this.props.style]}>
        {this.props.title}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
});