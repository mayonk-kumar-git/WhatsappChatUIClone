import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SentMessageBubble({ message, user, time }) {
  return (
    <View style={styles.bubble}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    alignSelf: "flex-end",
    backgroundColor: "#b5ffc9",
    padding: 15,
    borderRadius: 20,
    maxWidth: "70%",
    right: 0,
    margin: 15,
  },
  user: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  message: {},

  time: {
    alignSelf: "flex-end",
    marginTop: 10,
    color: "#a0a3a0",
  },
});
