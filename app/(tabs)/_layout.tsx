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
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home-outline" size={30} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: () => <Ionicons name="bag-handle-outline" size={30} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          tabBarIcon: () => (
            <Ionicons name="information-circle-outline" size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="mem"
        options={{
          title: "Member",
          tabBarIcon: () => <Ionicons name="card-outline" size={30} />,
        }}
      />
      <Tabs.Screen
        name="acc"
        options={{
          title: "Account",
          tabBarIcon: () => <Ionicons name="person-circle-outline" size={30} />,
        }}
      />
    </Tabs>
  );
}
