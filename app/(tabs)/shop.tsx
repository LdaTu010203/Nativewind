import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Shop = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center pt-10">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-5 pt-10">
        Shop
      </Text>
      <ScrollView className="flex-1 mb-12" showsVerticalScrollIndicator={false}>
        <View className="flex-col flex-1 justify-stretch">
          <View className="flex-row self-stretch gap-1">
            <TouchableOpacity className="w-48 h-80 bg-red-500">
              <Image
                source={require("@/assets/images/Samurai.png")}
                className="w-48 h-52"
              />
              <Text className="text-base font-PolyRegular text-yellow-100 self-center">
                Samurai
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-48 h-80 bg-red-500"></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Shop;
