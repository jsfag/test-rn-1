import * as React from 'react';
import { Button, FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';


import ScreenAbout from './screens/ScreenAbout.js';
import ScreenDetail from './screens/ScreenDetail.js';


const RootStack = createStackNavigator(
  // Screens:
  {
    About: {
      screen: ScreenAbout,
      navigationOptions: () => ({
        headerTitle: 'About',
        headerRight: (
          <Text>Header Right</Text>
        )
      }),
    },
    Details: {
      screen: ScreenDetail,
      navigationOptions: () => ({
        headerTitle: 'Detail',
      }),
    },
  },
  // Params:
  {
    initialRouteName: 'About',
    // initialRouteName: 'Details',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#E91E63',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}