import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ShopLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="page" />
      <Stack.Screen name="shop" />
    </Stack>
  );
};

export default ShopLayout;
