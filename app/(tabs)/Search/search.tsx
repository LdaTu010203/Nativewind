import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const Search = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center p-10">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-5 pt-10">
        Search
      </Text>
      <TextInput
        className="h-10 self-stretch pb-2 pl-5 rounded-full font-PolyRegular bg-white placeholder:text-base items-center placeholder:font-PolyRegular"
        placeholderTextColor={"gray"}
        placeholder="Search"
      ></TextInput>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="w-96 h-20 flex-grow-0"
      >
        <View className="h-1 justify-stretch flex-row gap-5 pt-5">
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Hoodies
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Jackets
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">Shirt</Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Sweater
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              T-Shirts
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Shorts
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">Pants</Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Bags & Wallets
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Footwear
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Slippers
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Phone Case
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Cap & Snapback
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View className=" self-stretch flex-1 mt-7">
        <Text className="text-3xl text-yellow-100 font-PolyRegular pb-3">
          Top Searches
        </Text>
        <ScrollView
          className="flex-1 mb-12"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            className="bg-black rounded-3xl justify-center items-center flex-1 flex flex-row px-5 py-3 mb-3"
            onPress={() => router.push("/(auths)/Items")}
          >
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
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
