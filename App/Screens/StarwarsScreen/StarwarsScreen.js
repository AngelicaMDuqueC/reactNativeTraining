import React, { Component } from 'react';
import { Platform, Text, View, SafeAreaView, Image } from 'react-native';
import styles from './Styles/StarwarsScreenStyles';

export default class StarwarsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Starwars'
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Starwars Screen</Text>
        <Text style={styles.instructions}>To get started</Text>
      </SafeAreaView>
    );
  }
}
