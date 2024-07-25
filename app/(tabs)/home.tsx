import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import ItemList from "@/components/organism/itemList";
import DisplayUser from "@/components/molecules/users";

const Home = () => {
  return (
    <View className="flex-1 bg-Dark-Background justify-center items-center p-5">
      <View className="p-4 flex flex-row self-center pt-10">
        <View className="flex flex-col px-2">
          <Text className="font-PolyRegular text-2xl text-Dark-textTitle">
            Welcome Back, <DisplayUser userId={2} />
          </Text>
          <Text className="font-PolyRegular text-2xl text-Dark-textTitle">
            How's going today?
          </Text>
        </View>
        <Image
          source={require("@/assets/images/Mouse.png")}
          className="w-20 h-20"
        />
      </View>
      <View className=" self-stretch flex-1">
        <Text className="text-2xl text-Dark-textTitle font-PolyRegular pb-3">
          Purchase history
        </Text>
        <ItemList />
      </View>
    </View>
  );
};

export default Home;
