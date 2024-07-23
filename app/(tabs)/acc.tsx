import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Acc = () => {
  return (
    <View className="flex-1 bg-gray-700">
      <View className="bg-yellow-300 h-40">
        <View className="flex-1 justify-stretch p-5 pt-12 flex-row">
          <View className="bg-white w-24 h-24 rounded-full">
            <Image
              source={require("@/assets/images/Logo.png")}
              className="w-24 h-24"
            />
          </View>
          <View className="flex-col h-20 pl-5 justify-center">
            <Text className="text-2xl text-black pb-1 font-medium">Tú Lê</Text>
            <TouchableOpacity className="rounded-full bg-white w-24 h-6 pl-1 pt-1 items-center">
              <Text className="text-xs text-black font-medium">VIP Member</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row justify-stretch pl-1 py-5 items-center">
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="wallet-sharp" size={30} />
          <Text className="text-xs text-white font-PolyRegular pt-2">
            Confirm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="file-tray-full-sharp" size={30} />
          <Text className="text-xs text-white font-PolyRegular pt-2">
            Pickup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="airplane-sharp" size={30} />
          <Text className="text-xs text-white font-PolyRegular pt-2">
            Delivery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="thumbs-up-sharp" size={30} />
          <Text className="text-xs text-white font-PolyRegular pt-2">
            Evaluate
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="items-center h-12 rounded-full justify-center bg-gray-500 mb-7"
        onPress={() => router.push("/(auths)/change")}
      >
        <Text className="text-white font-PolyRegular text-xl">
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center h-12 rounded-full justify-center bg-gray-500 mb-7"
        onPress={() => router.push("/(auths)/change")}
      >
        <Text className="text-white font-PolyRegular text-xl">Setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center h-12 rounded-full justify-center bg-gray-500"
        onPress={() => router.replace("/(auths)/sign_in")}
      >
        <Text className="text-white font-PolyRegular text-xl">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Acc;
