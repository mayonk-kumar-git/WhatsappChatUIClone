import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChatListItem from "../component/chatListItem";

const Data = require("../sampleData.json");

export default function ChatList({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {Data.chats.map((chat, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("Message", { chat: chat, user: Data.user })
            }
          >
            <ChatListItem chatName={chat.topic} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
