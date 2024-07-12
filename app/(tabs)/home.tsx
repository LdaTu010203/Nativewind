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
        <Text className="text-2xl text-white font-PolyRegular pb-3">
          Purchase history
        </Text>
        <ScrollView
          className="flex-1 mb-12"
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-black rounded-3xl justify-center items-center flex-1 flex flex-row px-5 py-3 mb-3">
            <Image
              source={require("@/assets/images/Samurai.png")}
              className="h-28 w-28 rounded-xl"
            />
            <View className="flex-1 flex flex-col pl-5">
              <Text className="font-PolyRegular text-lg text-white self-center">
                Samurai
              </Text>
              <Text className="font-PolyRegular text-yellow-300 text-xl self-center">
                580.000đ
              </Text>
              <Text className="font-PolyRegular text-gray-500 text-xs self-center pt-2">
                OfficalStore-VIETGANGZ
              </Text>
              <Text className="font-PolyRegular text-gray-500 text-xs self-center">
                IG: vietgangz_original
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
