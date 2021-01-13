import React from 'react';
import {View, TextInput} from 'react-native';

const DestinationSearch = (props) => {
  return (
    <View>
      <TextInput placeholder="From" />
      <TextInput placeholder="Where to?" />
    </View>
  );
};

export default DestinationSearch;
