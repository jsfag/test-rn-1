import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ItemCell from './../components/ItemCell.js';


export default class ListItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ItemCell
          title={this.props.title.name}
        />
        <ItemCell
          title={this.props.title.last}
        />
        <ItemCell
          title={this.props.title.highestBid}
        />
        <ItemCell
          title={this.props.title.percentChange}
        />
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
});
