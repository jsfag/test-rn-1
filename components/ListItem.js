import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class ListItem extends React.PureComponent {
  colours() {
    // console.log(this.props.index);
    return this.props.index % 2 == 0 ? '#81D4FA' : '#F48FB1';
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.colours()}]}>
        <Text style={[styles.paragraph, {fontWeight: 'bold'}]}>
          {this.props.name}
        </Text>

        <Text style={styles.paragraph}>
          {this.props.last}
        </Text>

        <Text style={styles.paragraph}>
          {this.props.highestBid}
        </Text>

        <Text style={styles.paragraph}>
          {this.props.percentChange}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    padding: 8,
  },
  paragraph: {
    flex: 1,
    fontSize: 14,
    // fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
  },
});
