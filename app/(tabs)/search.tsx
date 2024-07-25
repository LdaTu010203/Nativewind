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
import ItemList from "@/components/organism/itemList";

const Search = () => {
  return (
    <View className="flex-1 bg-Dark-Background justify-center items-center p-5">
      <Text className="font-PolyRegular text-Dark-textContent text-4xl pb-5 pt-10">
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
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Hoodies
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Jackets
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Shirt
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Sweater
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              T-Shirts
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Shorts
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Pants
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Bags & Wallets
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Footwear
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Slippers
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Phone Case
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-Dark-textContent w-24 h-12 items-center justify-center rounded-2xl">
            <Text className="text-base font-PolyRegular text-Dark-Background">
              Cap & Snapback
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
      <View className=" self-stretch flex-1">
        <Text className="text-3xl text-Dark-textContent font-PolyRegular pb-3">
          Top Searches
        </Text>
        <ItemList />
      </View>
    </View>
  );
};

export default Search;
