import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';
import styles from './Styles/CatScreenStyles';

export default class CatScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cats'
  };

  render() {
    return (
      <SafeAreaView style={styles.root}>
        <ScrollView contentContainerStyle={styles.container}>
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}
