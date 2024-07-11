import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center p-10">
      <View className="p-4 flex flex-row self-center pt-10">
        <View className="flex flex-col px-2">
          <Text className="font-PolyRegular text-2xl text-yellow-100">
            Welcome Back, Homie
          </Text>
          <Text className="font-PolyRegular text-2xl text-yellow-100">
            How's going today?
          </Text>
        </View>
        <Image
          source={require("@/assets/images/Mouse.png")}
          className="w-20 h-20"
        />
      </View>
      <View className=" self-stretch flex-1 mt-7">
        <Text className="text-2xl text-white font-PolyRegular">
          Purchase history
        </Text>
        <ScrollView className="flex-1 py-5">
          <View className="bg-black rounded-3xl py-4 h-36">
            <View className="flex flex-row px-5 justify-stretch">
              <Image
                source={require("@/assets/images/Samurai.png")}
                className="w-28 h-28 rounded-xl"
              />
              <View className="flex flex-col">
                <Text className="font-PolyRegular text-2xl text-white h-8 pl-14">
                  Samurai
                </Text>
                <Text className="font-PolyRegular text-2xl text-yellow-100 h-11 pl-14">
                  580.000đ
                </Text>
                <Text className="font-PolyRegular text-xs text-gray-400 h-4 pl-9">
                  OfficalStore-VIETGANGZ
                </Text>
                <Text className="font-PolyRegular text-xs text-gray-400 h-7 pl-11">
                  IG: vietgangz-original
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
