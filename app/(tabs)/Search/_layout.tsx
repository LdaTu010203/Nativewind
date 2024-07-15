import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SearchLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="page" />
      <Stack.Screen name="search" />
    </Stack>
  );
};

export default SearchLayout;
