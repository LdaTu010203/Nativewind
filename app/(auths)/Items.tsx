import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

const Items = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center p-10">
      <View className="bg-black rounded-3xl justify-center items-center mb-3 p-7">
        <Image
          source={require("@/assets/images/Samurai.png")}
          className="h-96 w-80 rounded-xl"
        />
        <View className="self-stretch items-center pt-5 h-48">
          <Text className="font-PolyRegular text-3xl text-white self-center">
            Samurai
          </Text>
          <Text className="font-PolyRegular text-yellow-300 text-3xl self-center pt-3">
            580.000đ
          </Text>
          <Text className="font-PolyRegular text-gray-500 text-base self-center pt-3">
            OfficalStore-VIETGANGZ
          </Text>
          <Text className="font-PolyRegular text-gray-500 text-base self-center">
            IG: vietgangz_original
          </Text>
        </View>
        <View className="flex-row self-center gap-3 py-5">
          <TouchableOpacity
            className="bg-gray-500 rounded-full w-40 h-14 justify-center items-center"
            onPress={() => router.back()}
          >
            <Text className="text-base font-PolyRegular text-white">
              Trở về
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-500 rounded-full w-40 h-14 justify-center items-center">
            <Text className="text-base font-PolyRegular text-yellow-100">
              Thêm vào giỏ hàng
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-gray-700 rounded-full w-80 h-14 justify-center items-center">
          <Text className="text-2xl font-extrabold text-yellow-200">
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Items;
