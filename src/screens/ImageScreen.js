import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Image Screen</Text>
      <Button
        title='Home Screen'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        imageScore={10}
      />
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
        imageScore={9}
      />
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
