import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import Container from '../components/Container';

const MapScreen = () => {
  const route = useRoute();
  const [isRoute, setIsRoute] = useState(false);
  const isFocused = useIsFocused();

  const [locationName, setLocationName] = useState(route.params.locationName);
  const title = route.params.name;
  const imageURL = route.params.uriPhoto ? route.params.uriPhoto : null;
  const locationURL = route.params.locationURL;

  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const TextInputRef = useRef();

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
      console.log(locationName);
      console.log(route.params.locationName);
      if (route.params.locationName === locationName) {
        setIsRoute(true);
      }
      console.log(isRoute);
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    setLocationName(route.params.locationName);
  }, [isFocused]);

  return (
    <Container>
      <View style={styles.container}>
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
            ref={TextInputRef}
          />
          <TouchableOpacity
            style={styles.searchButton}
            activeOpacity={0.5}
            // onPress={}
          >
            <AntDesign name="search1" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <MapView
          mapPadding={32}
          style={styles.mapStyle}
          region={
            locationURL
              ? {
                  ...locationURL,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }
              : {
                  ...location,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }
          }
          showsUserLocation={true}
        >
          {locationURL && (
            <Marker
              title={locationName}
              coordinate={locationURL}
              description="Я тут"
            />
          )}
          {location && !locationURL && (
            <Marker
              title={locationName}
              coordinate={location}
              description="Hello"
            />
          )}
        </MapView>
        <View style={styles.footer}>
          {locationURL ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.publishLink}
              activeOpacity={0.5}
            >
              <Text style={[styles.publishLinkText]}>Вернутися</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Posts', {
                  imageURL: imageURL,
                  title: title,
                  comments: 0,
                  likes: 0,
                  location: {
                    locationName: locationName,
                    locationURL: location,
                  },
                })
              }
              style={styles.publishLink}
              activeOpacity={0.5}
            >
              <Text style={[styles.publishLinkText]}>Опублікувати</Text>
            </TouchableOpacity>
          )}
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
    paddingTop: 30,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    top: 46,
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
    top: 46,
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
    height: Dimensions.get('window').height - 90,
  },
  footer: {
    flex: 1,
    // backgroundColor: 'rgba(255,255,255,1)',
    // paddingBottom: 30,
  },
  publishLink: {
    backgroundColor: '#FF6C00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 100,
    marginBottom: 16,
  },
  publishLinkText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
  },
});

export default MapScreen;
