import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "tailwind-rn";

const SignIn = () => {
  const colors = useTheme();

  return (
    <View className="flex-1 dark:bg-dark-Background justify-center items-center p-10">
      <Text className="font-PolyRegular dark:text-dark-Content text-4xl pt-10 pb-10">
        Sign In
      </Text>
      <Switch
        trackColor={{ false: colors.background, true: colors.primary }}
        thumbColor={colors.text}
        ios_backgroundColor={colors.backgorund}
        onValueChange={(value) => console.log(value)}
        value={true}
      >
        <Text className="self-center font-PolyRegular dark:text-dark-Background text-xl pb-10">
          Dark
        </Text>
      </Switch>
      <View className="self-center, justify-center items-center pb-10">
        <Text className="font-PolyItalic dark:text-dark-Content text-3xl">
          Welcome To VietGangz
        </Text>
        <Text className="font-PolyRegular dark:text-dark-Content text-sm">
          Please enter your details to proceed
        </Text>
      </View>
      <View className="flex-1 self-stretch gap-2">
        <Text className="dark:text-dark-Content text-base font-PolyRegular">
          Username Or Email
        </Text>
        <TextInput
          placeholder="Vietgangz or Vietgangz@gmail.com"
          placeholderTextColor={"gray"}
          className="
           h-10 self-stretch pb-2 pl-5 rounded-full font-PolyRegular bg-dark-Note placeholder:text-base items-center placeholder:font-PolyRegular"
        ></TextInput>
        <Text className="dark:text-dark-Content text-base font-PolyRegular">
          Password
        </Text>
        <TextInput
          placeholderTextColor={"gray"}
          className="
            h-10 self-stretch pb-2 pl-5 rounded-full font-PolyRegular bg-dark-Note placeholder:text-base items-center placeholder:font-PolyRegular mb-5"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/home")}
          className="self-center w-48 h-12 rounded-full pt-2 dark:text-dark-Content"
        >
          <Text className="dark:text-dark-Title text-xl self-center font-PolyRegular font-extrabold">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("./forgot")}
          className="self-center"
        >
          <Text className="font-PolyRegular text-sm dark:text-dark-Content">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-1 justify-end self-center items-center">
        <Text className="font-PolyRegular text-sm dark:text-dark-Content pb-2">
          or you can sign in with
        </Text>
        <View className="flex flex-row self-center gap-3">
          <Ionicons name="logo-facebook" size={45} />
          <Ionicons name="logo-google" size={45} />
        </View>
        <View className="flex flex-row self-center">
          <Text className="font-PolyRegular text-base dark:text-dark-Title">
            Don't have an account?
          </Text>
          <Link
            href={"./sign_up"}
            className="font-PolyRegular text-base dark:text-dark-Content pb-1"
          >
            <Text> Sign Up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
