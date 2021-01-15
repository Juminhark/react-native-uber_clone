import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles.js';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = (props) => {
  return (
    <View>
      {/* Image */}
      <Image
        style={styles.image}
        source={require('../../assets/images/UberX.jpeg')}
      />

      <View styles={styles.middleContainer}>
        <Text style={styles.text}>
          UberX
          <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>

      <View styles={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. $27</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
