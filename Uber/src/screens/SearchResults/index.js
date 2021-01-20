import React from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = (props) => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 300}}>
        <RouteMap />
      </View>

      <View style={{height: 300}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
