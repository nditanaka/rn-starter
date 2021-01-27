import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Tanaka';
  return (
    <View>
      <Text style={styles.headerStyle}>Hello Components screen</Text>
      <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
