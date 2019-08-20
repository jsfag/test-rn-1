import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
export default class ListItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.props.title.name}
        </Text>

        <Text style={styles.paragraph}>
          {this.props.title.last}
        </Text>

        <Text style={styles.paragraph}>
          {this.props.title.highestBid}
        </Text>

        <Text style={styles.paragraph}>
          {this.props.title.percentChange}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
  },
  paragraph: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
