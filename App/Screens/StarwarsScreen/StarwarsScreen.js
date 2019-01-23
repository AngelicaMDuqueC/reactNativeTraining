import React, { Component } from 'react'
import { Platform, Text, View, SafeAreaView, Image } from 'react-native'
import styles from './Styles/StarwarsScreenStyles'
import Screen from '../../Components/Screen'

export default class StarwarsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Starwars',
  }

  render() {
    return (
      <Screen backgroundColor="#333333" align="bottom">
        <Text style={styles.welcome}>Starwars Screen</Text>
        <Text style={styles.instructions}>To get started</Text>
      </Screen>
    )
  }
}
