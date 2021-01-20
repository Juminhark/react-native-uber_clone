import React from 'react';
import {View, Text, Pressable} from 'react-native';
import UberTypeRow from '../UberTypeRow';

import typeData from '../../assets/data/types';

const UberTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>

      {typeData.map((type) => (
        <UberTypeRow key={type.id} type={type} />
      ))}
    </View>
  );
};

export default UberTypes;
