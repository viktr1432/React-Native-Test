import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Autorisation } from './src/components/Autorisation';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Autorisation />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#111',
  },
});
