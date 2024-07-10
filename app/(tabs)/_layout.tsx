import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

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
          paddingBottom: 16,
          backgroundColor: "black",
        },
        headerTitleStyle: {
          fontFamily: "Poly-Regular",
          fontWeight: "600",
          fontSize: 30,
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
            <Ionicons name="home-outline" size={30} color={"white"} />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: () => (
            <Ionicons name="bag-handle-outline" size={30} color={"white"} />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          tabBarIcon: () => (
            <Ionicons
              name="information-circle-outline"
              size={30}
              color={"white"}
            />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="mem"
        options={{
          title: "Member",
          tabBarIcon: () => (
            <Ionicons name="card-outline" size={30} color={"white"} />
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
            <Ionicons name="person-circle-outline" size={30} color={"white"} />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </Tabs>
  );
}
