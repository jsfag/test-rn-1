import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ItemCell from './../components/ItemCell.js';


export default class ListItem extends React.PureComponent {
  colours() {
    return this.props.index % 2 == 0 ? '#81D4FA' : '#F48FB1';
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.colours()}]}>
        <ItemCell
          style={{fontWeight: 'bold', textAlign: 'left'}}
          title={this.props.name}
        />

        <ItemCell
          title={this.props.last}
        />

        <ItemCell
          title={this.props.highestBid}
        />

        <ItemCell
          title={this.props.percentChange}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
});
