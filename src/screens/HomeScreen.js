import React, { Fragment } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title='Components Demo Screen'
        onPress={() => {
          navigation.navigate('Components');
        }}
      />
      <Button title='List Screen' onPress={() => navigation.navigate('List')} />
      <Button
        title='Image Screen'
        onPress={() => navigation.navigate('Images')}
      />
      <Button
        title='Counter Screen'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Color Screen'
        onPress={() => navigation.navigate('Colors')}
      />
      <Button
        title='Square Screen'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Stocks Screen'
        onPress={() => navigation.navigate('Stocks')}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to list Demo</Text>
        <Text>Go to list Demo</Text>
        <Text>Go to list Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
