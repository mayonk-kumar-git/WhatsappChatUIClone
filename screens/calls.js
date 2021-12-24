import React from 'react'
import { StatusBar, StyleSheet, View, Text } from "react-native";

export default function Calls() {
  return (
    <View style={styles.container}>
      <Text>Calls Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
