import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="page" options={{ headerShown: false }} />
      <Stack.Screen name="sign_up" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SignUpLayout;
