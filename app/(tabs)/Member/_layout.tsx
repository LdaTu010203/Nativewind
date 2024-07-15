import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MemberLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="page" />
      <Stack.Screen name="mem" />
    </Stack>
  );
};

export default MemberLayout;
