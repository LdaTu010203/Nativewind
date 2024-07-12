import { View, Text, TextInput } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center p-10">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-5 pt-10">
        Search
      </Text>
      <View className="flex-1 self-center ">
        <TextInput
          placeholder="Search"
          className="bg-gray-500 placeholder:font-PolyRegular text-sm text-black rounded-full justify-stretch h-10 px-44"
        ></TextInput>
      </View>
    </View>
  );
};

export default Search;
