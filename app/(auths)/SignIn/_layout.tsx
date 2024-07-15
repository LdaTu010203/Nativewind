import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SignInLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="page" options={{ headerShown: false }} />
      <Stack.Screen name="sign_in" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SignInLayout;
