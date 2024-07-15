import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ChangePassLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="page" />
      <Stack.Screen name="change" />
    </Stack>
  );
};

export default ChangePassLayout;
