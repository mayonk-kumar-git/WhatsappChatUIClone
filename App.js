import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// ----------------------------------------------------------------------------------

import Calls from "./screens/calls";
import Camera from "./screens/camera";
import Settings from "./screens/settings";
import Status from "./screens/status";
import ChatList from "./screens/chatList";
import Message from "./screens/message";

// ----------------------------------------------------------------------------------
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#2e64e5",
        keyboardHidesTabBar: true,
        backgroundColor: "red",
        headerStyle: {
          backgroundColor: "#D3D3D3",
        },
        tabBarStyle: {
          backgroundColor: "#EEE",
        },
        headerTitleAlign: "center",
      }}
      initialRouteName="ChatsList"
    >
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: "Status",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-donut-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: "Calls",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="phone-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="camera-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatsList"
        component={ChatList}
        options={{
          title: "Chats",
          tabBarLabel: "Chats",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 30 }}>
              <Text style={{ fontSize: 18, color: "#246FDC" }}>Edit</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 30 }}>
              {/* <Text style={{ fontSize: 18, color: "#246FDC" }}>Edit</Text> */}
              <Icon type="ionicon" name={"share-outline"} color={"#246FDC"} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chat-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{
            headerStyle: {
              backgroundColor: "#D3D3D3",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
