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
            <TouchableOpacity className="w-48 h-80">
              <Image
                source={require("@/assets/images/Samurai.png")}
                className="w-48 h-52"
              />
              <Text className="text-xl font-PolyRegular text-yellow-100 self-center p-2">
                Samurai
              </Text>
              <View
                style={{
                  height: 1,
                  alignSelf: "stretch",
                  backgroundColor: "black",
                  marginHorizontal: 10,
                }}
              ></View>
              <Text className="text-white text-2xl self-center font-PolyRegular pt-1">
                580.000đ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-48 h-80">
              <Image
                source={require("@/assets/images/LTgrey.png")}
                className="w-48 h-52"
              />
              <Text className="text-xl font-PolyRegular text-yellow-100 self-center p-2">
                Hoodie LT Grey
              </Text>
              <View
                style={{
                  height: 1,
                  alignSelf: "stretch",
                  backgroundColor: "black",
                  marginHorizontal: 10,
                }}
              ></View>
              <Text className="text-white text-2xl self-center font-PolyRegular pt-1">
                580.000đ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Shop;
