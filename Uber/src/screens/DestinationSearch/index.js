import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.log('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDtg_z_tRSTfgPWRBRqvAqOttX95l_y62s',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDtg_z_tRSTfgPWRBRqvAqOttX95l_y62s',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
