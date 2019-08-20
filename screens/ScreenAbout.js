import * as React from 'react';
import { Button, FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native';

import styles from './../styles/default.js';


export default class ScreenAbout extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.description }>A pace message</Text>
        <Button
          title='Go to Details'

          onPress={
            () => this.props.navigation.navigate('Details')
          }
        />
      </View>
    )
  }
}