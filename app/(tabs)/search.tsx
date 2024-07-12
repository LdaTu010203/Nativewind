import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const Search = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center p-10">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-5 pt-10">
        Search
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-1 justify-stretch flex-row gap-5">
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Hoodies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Jackets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">Shirt</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Sweater
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              T-Shirts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Shorts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">Pants</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Bags & Wallets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Footwear
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Slippers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Phone Case
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-100 w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-black">
              Cap & Snapback
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
