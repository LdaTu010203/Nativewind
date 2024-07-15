import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ForgotPassLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="page" />
      <Stack.Screen name="forgot" />
    </Stack>
  );
};

export default ForgotPassLayout;
