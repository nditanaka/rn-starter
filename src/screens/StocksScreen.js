import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { REACT_APP_RAPID_API_KEY } from '@env';
import { WebView } from 'react-native-webview';

const StocksScreen = () => {
  const [metadata, setMetadata] = useState('');
  const [data, setData] = useState('');
  const [ordered_data, setOrdered_data] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Text style={styles.headerText}>Stocks Screen</Text>
      <WebView source={{ uri: 'https://csb-x5mlz.netlify.app/' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: { fontSize: 30, textAlign: 'center' },
});
export default StocksScreen;
