import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>covid</Text>
      <Text style={styles.text}>
        Then consume those files in your JavaScript entry point to get the
        bundled url and inject a style tag in your pag
      </Text>

      <Text style={styles.learnMore}>
        Then consume those files in your JavaScript entry point to get the
        bundled url and inject a style tag in your pag
      </Text>
    </View>
  );
};

export default CovidMessage;
