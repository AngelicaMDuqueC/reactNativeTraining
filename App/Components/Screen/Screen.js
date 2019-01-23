import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ScrollView } from 'react-native'
import styles from './Styles/ScreenStyles'

export default class Screen extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    align: PropTypes.string,
  }

  static defaultProps = {
    align: 'center',
  }

  render() {
    const { children, backgroundColor, align } = this.props

    return (
      <SafeAreaView style={[styles.root, { backgroundColor }]}>
        <ScrollView contentContainerStyle={[styles.container, styles[align]]}>
          {children}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
