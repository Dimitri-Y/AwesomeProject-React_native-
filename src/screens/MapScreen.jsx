import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Container from '../components/Container';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const route = useRoute();
  const [locationName, setLocationName] = useState(route.params.locationName);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  return (
    <Container>
      <View style={styles.container}>
        <MapView
          mapPadding={32}
          style={styles.mapStyle}
          region={{
            ...location,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          {location && (
            <Marker
              title="I am here"
              coordinate={location}
              description="Hello"
            />
          )}
        </MapView>
        <View style={styles.input_container}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.5}
            // onPress={}
          >
            <AntDesign name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <TextInput
            type="location"
            name="location"
            title="location"
            placeholder="Місцевість..."
            value={locationName}
            onChangeText={setLocationName}
            style={[styles.input]}
          />
          <TouchableOpacity
            style={styles.searchButton}
            activeOpacity={0.5}
            // onPress={}
          >
            <AntDesign name="search1" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 10,
  },
  input_container: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    top: 16,
    left: 8,
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  input: {
    fontFamily: 'Roboto-400',
    fontWeight: '400',
    fontSize: 20,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 8,
    paddingLeft: 41,
    paddingRight: 41,
    width: '100%',
  },
  searchButton: {
    position: 'absolute',
    zIndex: 1,
    top: 16,
    right: 8,
    height: 25,
    width: 25,
    pointerEvents: 'auto',
  },
  input_location: {
    paddingLeft: 24,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 16,
  },
});

export default MapScreen;
