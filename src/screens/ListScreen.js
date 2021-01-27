import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 20 },
    { name: 'Friend 2', age: 22 },
    { name: 'Friend 3', age: 23 },
    { name: 'Friend 4', age: 20 },
    { name: 'Friend 5', age: 21 },
    { name: 'Friend 6', age: 19 },
    { name: 'Friend 7', age: 22 },
    { name: 'Friend 8', age: 21 },
  ];
  return (
    <View>
      {/* <Text style={styles.textStyle}>List Screen</Text> */}
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 50,
  },
});

export default ListScreen;
