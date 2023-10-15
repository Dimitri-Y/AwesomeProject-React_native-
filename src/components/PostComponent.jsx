import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { AntDesign, FontAwesome5, EvilIcons } from '@expo/vector-icons';

const PostComponent = ({
  imageURL,
  title,
  comments,
  likes,
  locationName,
  locationURL,
  navigation,
}) => {
  let imageUrl;
  switch (imageURL) {
    case '../../assets/images/1.png':
      imageUrl = require('../../assets/images/1.png');
      break;
    case '../../assets/images/2.png':
      imageUrl = require('../../assets/images/2.png');
      break;
    case '../../assets/images/3.png':
      imageUrl = require('../../assets/images/3.png');
      break;
    default:
      imageUrl = { uri: imageURL };
      break;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.99}>
        {imageURL && (
          <Image source={imageUrl} resizeMethod="resize" style={styles.image} />
        )}
        <Text style={styles.h_text}>{title}</Text>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.commentButton}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('Comments', {
                imageURL: imageURL,
                // screen:
                //   navigation.getState().routes[navigation.getState().index]
                //     .name,
              })
            }
          >
            <FontAwesome5 name="comments" size={18} color="#BDBDBD" />
            <Text style={styles.commentText}>{comments}</Text>
          </TouchableOpacity>
          {likes && (
            <TouchableOpacity style={styles.likesButton} activeOpacity={0.5}>
              <EvilIcons name="like" size={18} color="#FF6C00" />
              <Text style={styles.likesText}>{likes}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.locationButton}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('Map', {
                locationName: locationName,
                locationURL: locationURL,
              });
            }}
          >
            <AntDesign name="enviromento" size={18} color="#BDBDBD" />
            <Text style={styles.locationText}>{locationName}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // padding: 16,
    flex: 1,
    marginBottom: 32,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 240,
    borderRadius: 8,
    // justifyContent: 'flex-end',
    marginBottom: 8,
  },
  h_text: {
    fontFamily: 'Roboto-500',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  bottom: {
    flexDirection: 'row',
  },

  commentButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentText: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
  },

  likesButton: {
    marginLeft: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesText: {
    color: '#212121',
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
  },
  locationButton: {
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#212121',
    fontFamily: 'Roboto-400',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
    textDecorationLine: 'underline',
  },
});
export default PostComponent;
