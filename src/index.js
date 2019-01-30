import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { translate } from './locales'

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>i18N</Text>
        <Text>{translate('hello')}</Text>
      </View>
    )
  }
}

export default App
