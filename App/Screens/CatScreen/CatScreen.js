import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './Styles/CatScreenStyles'
import Screen from '../../Components/Screen'

export default class CatScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cats',
  }

  render() {
    return (
      <Screen backgroundColor="#FDB681" align="top">
        <Text style={styles.welcome}>Cat Screen</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
        <Text style={styles.instructions}>To get started</Text>
      </Screen>
    )
  }
}
