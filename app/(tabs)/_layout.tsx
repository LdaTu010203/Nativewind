import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Image, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          height: 90,
          paddingBottom: 25,
          backgroundColor: "black",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Poly-Regular",
          fontWeight: "600",
          fontSize: 35,
        },
        tabBarItemStyle: {
          gap: -10,
          paddingVertical: 5,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={30} color={"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={30} color={"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Shop"
        options={{
          title: "",
          tabBarIcon: () => (
            <View className=" bg-white w-20 h-20 rounded-full justify-center items-center">
              <Image
                source={require("@/assets/images/Logo.png")}
                className="w-20 h-20"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Member"
        options={{
          tabBarIcon: () => (
            <Ionicons name="card-outline" size={30} color={"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={30} color={"white"} />
          ),
        }}
      />
    </Tabs>
  );
}
