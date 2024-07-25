import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Acc = () => {
  return (
    <View className="flex-1 bg-Dark-Background">
      <View className="bg-Dark-header h-40">
        <View className="flex-1 justify-stretch p-5 pt-12 flex-row">
          <View className="bg-Dark-textTitle w-24 h-24 rounded-full">
            <Image
              source={require("@/assets/images/Logo.png")}
              className="w-24 h-24"
            />
          </View>
          <View className="flex-col h-20 pl-5 justify-center">
            <Text className="text-2xl text-Dark-Background pb-1 font-medium">
              Tú Lê
            </Text>
            <TouchableOpacity className="rounded-full bg-Dark-textTitle w-24 h-6 pl-1 pt-1 items-center">
              <Text className="text-xs text-Dark-Background font-medium">
                VIP Member
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row justify-stretch pl-1 py-5 items-center">
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="wallet-sharp" size={30} color={"white"} />
          <Text className="text-xs text-Dark-textTitle font-PolyRegular pt-2">
            Confirm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="file-tray-full-sharp" size={30} color={"white"} />
          <Text className="text-xs text-Dark-textTitle font-PolyRegular pt-2">
            Pickup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="airplane-sharp" size={30} color={"white"} />
          <Text className="text-xs text-Dark-textTitle font-PolyRegular pt-2">
            Delivery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-24 justify-center items-center px-8">
          <Ionicons name="thumbs-up-sharp" size={30} color={"white"} />
          <Text className="text-xs text-Dark-textTitle font-PolyRegular pt-2">
            Evaluate
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="items-center h-12 rounded-full justify-center bg-Dark-textContent mb-7"
        onPress={() => router.push("/(auths)/change")}
      >
        <Text className="text-Dark-Background font-PolyRegular text-xl">
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center h-12 rounded-full justify-center bg-Dark-textContent mb-7"
        onPress={() => router.push("/(auths)/change")}
      >
        <Text className="text-Dark-Background font-PolyRegular text-xl">
          Setting
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center h-12 rounded-full justify-center bg-Dark-textContent"
        onPress={() => router.replace("/(auths)/sign_in")}
      >
        <Text className="text-Dark-Background font-PolyRegular text-xl">
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Acc;
