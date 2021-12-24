import React from "react";
import { StyleSheet} from "react-native";
import { Avatar, ListItem, Divider } from "react-native-elements";

export default function ChatListItem({ chatName }) {
  return (
    <>
      <ListItem>
        <Avatar rounded source={{ uri: "https://i.pravatar.cc/150" }} />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "bold" }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <Divider />
    </>
  );
}

const styles = StyleSheet.create({});
