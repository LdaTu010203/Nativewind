import { View, Text, TextInput } from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-700 p-10">
      <Text className="text-4xl pb-20 pt-10 font-PolyRegular text-yellow-100">
        Create Account
      </Text>
      <View className="flex-1 self-stretch gap-2">
        <Text className="text-yellow-100 text-base font-PolyRegular">
          FullName
        </Text>
        <TextInput
          placeholder="Vietgangz"
          className=" h-10
            pb-1
             pl-5
              rounded-3xl
              font-PolyRegular
               bg-gray-500
                placeholder:text-sm
                 items-center
                 placeholder:font-PolyItalic"
        ></TextInput>
        <Text className="text-yellow-100 text-base font-PolyRegular">
          Email
        </Text>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default SignUp;
