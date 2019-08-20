import {Text, View} from 'react-native';

import React from 'react';
import styles from './styles';
import {translate} from './locales';

function App() {
  return (
    <View style={styles.container}>
      <Text>i18N</Text>
      <Text>{translate('hello')}</Text>
    </View>
  );
}

export default App;
