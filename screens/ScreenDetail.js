import * as React from 'react';
import { Button, FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native';

import styles from './../styles/default.js';
import ListItem from './../components/ListItem.js';


const interval = cb => setInterval(cb => cb(), 5000, cb);

export default class ScreenDetail extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Detail',
    }
  }

  state = {
    ticker: [],
    count: 0,
    isFocused: false
  }

  // constructor(props) {
  //   super(props);

  //   console.log('DetailsScreen constructor start');

  //   // this.didFocusListener = this.props.navigation.addListener('didFocus',
  //   //   async obj => {
  //   //     console.log('DetailsScreen didFocus start')

  //   //     this.setState({isFocused: true})
  //   //   }
  //   // );

  //   // If the screens are split into components, next the commented code occurs errors.

  //   // this.didBlurListener = this.props.navigation.addListener('didBlur',
  //   //   obj => {
  //   //     console.log('DetailsScreen didBlur start')

  //   //     this.setState({isFocused: false})
  //   //   }
  //   // );
  // }

  componentDidMount() {
    console.log('DidMount of DetailsScreen.');

    // First call.
    this.getTicker();

    this.setState({
      interval: interval(() => this.getTicker())
    });
  }

  componentWillUnmount() {
    console.log('WillUnmount of DetailsScreen.');

    clearInterval(this.state.interval);
  }

  async getTicker() {
    try {
      let response = await fetch(
        'https://poloniex.com/public?command=returnTicker'
      );
      let responseJSON = await response.json();

      const data = [];

      for(let key in responseJSON) {
        const keyCached = responseJSON[key];

        if(!keyCached.last) {
          // TODO: alert an error msg.
          return;
        };

        data.push({
          id: keyCached.id,
          name: key,
          last: keyCached.last,
          highestBid: keyCached.highestBid,
          percentChange: keyCached.percentChange,
        })
      };
      
      this.setState(previousState => (
        {
          ticker: data,
          count: previousState.count += 1
        }
      ));

      console.log(`Updated times: ${this.state.count}`);

      // return data;
    }catch (err) {
      console.error(err);
    }
  }

  _keyExtractor = (item, index) => `${index}`

  _renderItem = ({item, index}) => (
    <ListItem
      id={item.id}
      name={item.name}
      last={item.last}
      highestBid={item.highestBid}
      percentChange={item.percentChange}
      index={index}
    />
  )

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.description }>Details screen</Text>

        <Button
          title='Go to About'

          onPress={
            () => {
              this.props.navigation.navigate('About');
            }
          }
        />

        <FlatList style={{ borderWidth: 1, display: 'flex', flex: 1 }}
          data={this.state.ticker}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}