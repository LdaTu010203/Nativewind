import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { Linking } from "react-native";
import Contacts from "react-native";

const fanpage = "https://www.facebook.com/vietgangz";

const handlePress = () => {
  Linking.canOpenURL(fanpage).then((supported) => {
    if (supported) {
      Linking.openURL(fanpage);
    } else {
      console.log(`Cannot open URL: ${fanpage}`);
    }
  });
};

const Mem = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center py-10 px-3">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-5 pt-10">
        Member Card
      </Text>
      <ScrollView className="flex-1 mb-7" showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center self-stretch pb-10">
          <View className="self-stretch bg-white py-3 mb-5 rounded-2xl">
            <Image
              source={require("@/assets/images/Logo.png")}
              className="self-center h-48 w-48 text-white"
            />
          </View>
          <View className="self-stretch bg-white rounded-2xl py-3 h-56">
            <Text className="pl-5 pt-12 font-bold text-black text-base">
              AI RỒI CŨNG
            </Text>
            <View className="flex-row px-1">
              <Text className="pl-20 font-extrabold text-black text-4xl">
                VIETGANGZ
              </Text>
              <Text className="self-center pt-2 pl-3 font-bold text-black text-base">
                THÔI...
              </Text>
            </View>
            <Image
              source={require("@/assets/images/note.png")}
              className="self-center w-40 h-10"
            />
            <Text className="self-stretch p-5 font-medium ">VGzxxx</Text>
          </View>
          <Text className="text-xl font-PolyRegular text-yellow-100 pt-5">
            You don't have member card?
          </Text>
          <Text className="items-center text-xl font-PolyRegular text-white pt-3">
            Please contact the branches
          </Text>
          <View className="flex-row">
            <Text className="items-center text-xl font-PolyRegular text-white">
              or contact directly
            </Text>
            <TouchableOpacity onPress={handlePress}>
              <Text className=" pl-1 items-center text-xl font-PolyRegular text-yellow-500">
                0941515705
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row">
            <Text className="text-xl font-PolyRegular text-white pt-5">
              Fanpage:
            </Text>
            <TouchableOpacity onPress={handlePress}>
              <Text className="pl-1 text-xl font-PolyRegular text-yellow-500 pt-5">
                Vietgangz Brotherhood
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Mem;
