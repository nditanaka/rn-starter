import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.textStyles}>Counter Screen</Text>
      <Button
        title='Increase'
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.counterText}>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 30,
  },
  counterText: {
    textAlign: 'center',
  },
});

export default CounterScreen;
