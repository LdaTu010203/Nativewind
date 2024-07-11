import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const SignIn = () => {
  return (
    <View className="flex-1 bg-gray-700 justify-center items-center p-10">
      <Text className="font-PolyRegular text-yellow-100 text-4xl pb-20 pt-10">
        Sign In
      </Text>
      <View className="self-center, justify-center items-center pb-10">
        <Text className="font-PolyItalic text-yellow-100 text-3xl">
          Welcome To VietGangz
        </Text>
        <Text className="font-PolyRegular text-yellow-100 text-sm">
          Please enter your details to proceed
        </Text>
      </View>
      <View className="flex-1 self-stretch gap-2">
        <Text className="text-yellow-100 text-base font-PolyRegular">
          Username Or Email
        </Text>
        <TextInput
          placeholder="Vietgangz or Vietgangz@gmail.com"
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
          Password
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
          onPress={() => router.push("/(tabs)/home")}
          className="self-center w-48 h-12 rounded-full pt-2 bg-yellow-100"
        >
          <Text className="text-black text-xl self-center font-PolyRegular font-extrabold">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("./forgot")}
          className="self-center"
        >
          <Text className="font-PolyRegular text-sm text-yellow-100">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-1 justify-end self-center items-center">
        <Text className="font-PolyRegular text-sm text-yellow-100 pb-2">
          or you can sign in with
        </Text>
        <View className="flex flex-row self-center gap-3">
          <Ionicons name="logo-facebook" size={45} />
          <Ionicons name="logo-google" size={45} />
        </View>
        <View className="flex flex-row self-center">
          <Text className="font-PolyRegular text-base text-white">
            Don't have an account?
          </Text>
          <Link
            href={"./sign_up"}
            className="font-PolyRegular text-base text-yellow-100 pb-1"
          >
            <Text> Sign Up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
