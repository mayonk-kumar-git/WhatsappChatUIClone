import React, { useLayoutEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Keyboard,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ReceivedMessageBubble from "../component/receivedMessageBubble";
import SentMessageBubble from "../component/sentMessageBubble";

export default function Message({ navigation, route }) {
  const chatName = route.params.chat.topic;
  const user = route.params.user;
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Message",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 30 }}>
          {/* <Text style={{ fontSize: 18, color: "#246FDC" }}>Edit</Text> */}
          <Icon type="ionicon" name={"call-outline"} color={"#246FDC"} />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.headerTitleView}>
          <Avatar rounded source={{ uri: "https://i.pravatar.cc/150" }} />
          <Text style={styles.headerTitle}>{chatName}</Text>
        </View>
      ),
    });
  });

  return (
    <SafeAreaView style={{ flex: 1, borderColor: "white" }}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>
              {route.params.chat.messages.map((message) => {
                {
                  if (message.from == user) {
                    return (
                      <SentMessageBubble
                        key={message.time}
                        message={message.message}
                        user={user}
                        time={message.time}
                      />
                    );
                  } else {
                    return (
                      <ReceivedMessageBubble
                        key={message.time}
                        message={message.message}
                        sender={message.from}
                        time={message.time}
                      />
                    );
                  }
                }
              })}
            </ScrollView>
            <View style={styles.footer}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.footerButtons}
              >
                <MaterialCommunityIcons name="plus" size={24} color="#2b68e6" />
              </TouchableOpacity>
              <TextInput
                placeholder="Type Message..."
                value={input}
                onChangeText={(text) => setInput(text)}
                style={styles.messageInput}
              />
              <TouchableOpacity
                onPress={() => setInput("")}
                activeOpacity={0.5}
                style={styles.footerButtons}
              >
                <MaterialCommunityIcons
                  name="send-circle-outline"
                  size={30}
                  color="#2b68e6"
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.footerButtons}
              >
                <Ionicons name="ios-camera-outline" size={24} color="#2b68e6" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.footerButtons}
              >
                <Ionicons name="mic-outline" size={24} color="#2b68e6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    padding: 15,
  },
  messageInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 30,
  },
  footerButtons: {
    margin: 5,
  },
});
