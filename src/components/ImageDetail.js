import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, imageScore }) => {
  console.log(imageSource);
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
      <Text>Image Score: {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageDetail;
