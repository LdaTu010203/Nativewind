import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const Change = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center p-10">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-12 pt-10">
        Set Password
      </Text>
      <View className="flex-0 self-stretch gap-2 pb-10 pt-14">
        <Text className="font-PolyRegular text-yellow-100 text-3xl">
          Change The Password
        </Text>
      </View>
      <View className="flex-1 self-stretch gap-2">
        <Text className="text-yellow-100 text-base font-PolyRegular">
          Password
        </Text>
        <TextInput
          placeholder="*****************"
          className="
           h-10
            pb-1
             pl-5
              rounded-3xl
              font-PolyRegular
               bg-gray-500
                placeholder:text-sm
                 items-center
                 placeholder:font-PolyRegular"
        ></TextInput>
        <Text className="text-yellow-100 text-base font-PolyRegular">
          Confirm Password
        </Text>
        <TextInput
          placeholder="*****************"
          className="
           h-10
             pl-5
              rounded-3xl
               bg-gray-500
                placeholder:text-sm
                 items-center
                 placeholder:font-PolyRegular mb-4"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          onPress={() => router.replace("/(auths)/SignIn/page")}
          className="self-center w-48 h-12 rounded-full pt-2 bg-yellow-100"
        >
          <Text className="text-black text-xl self-center font-PolyRegular font-extrabold">
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Change;
