import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const Forgot = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-700 p-5">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-12 pt-10">
        Forgot Password
      </Text>
      <View className="flex-0 self-stretch gap-2 pb-10 pt-14">
        <Text className="font-PolyRegular text-yellow-100 text-3xl">
          Reset Password?
        </Text>
      </View>
      <View className="bg-gray-500 flex-1 self-stretch rounded-t-3xl py-6 px-3 ">
        <Text className="text-yellow-100 font-PolyRegular text-xl pb-3">
          Enter Your Email Address
        </Text>
        <TextInput
          placeholder="Vietgangz@gmail.com"
          className="
           h-10
            pb-1
             pl-5
              rounded-3xl
              font-PolyRegular
               bg-yellow-100
                placeholder:text-sm
                 items-center
                 placeholder:font-PolyRegular"
          placeholderTextColor={"gray"}
        />
        <View className="py-4"></View>
        <TouchableOpacity
          onPress={() => router.push("./sign_in")}
          className="self-center w-48 h-12 rounded-full pt-2 bg-yellow-100"
        >
          <Text className="text-black text-xl self-center font-PolyRegular font-extrabold">
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgot;
