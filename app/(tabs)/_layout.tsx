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
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={35} color={"white"} />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="search"
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
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="acc"
        options={{
          title: "Account",
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={35} color={"white"} />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Tabs>
  );
}
