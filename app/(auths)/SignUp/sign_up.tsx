import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { createUser } from "@/lib/appwrite";
import merge from "./../../../node_modules/react-native-appwrite/node_modules/@react-native-community/cli-config/build/merge.d";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password);
      router.replace("/(tabs)/Home/page");
    } catch (error) {
      Alert.alert("Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-gray-700 p-10">
      <Text className="text-4xl pb-20 pt-10 font-PolyRegular text-yellow-100 pb-5">
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
                 placeholder:font-Regular"
        ></TextInput>
        <Text className="text-yellow-100 text-base font-PolyRegular">
          Email
        </Text>
        <TextInput
          placeholder="Vietgangz@gmail.com"
          className=" h-10
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
          Phone Number
        </Text>
        <TextInput
          placeholder="+012 3456789"
          className=" h-10
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
          Date Of Birth
        </Text>
        <TextInput
          placeholder="DD/MM/YY"
          className=" h-10
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
          placeholder="**********"
          className=" h-10
            pb-1
             pl-5
              rounded-3xl
              font-PolyRegular
               bg-gray-500
                placeholder:text-sm
                 items-center
                 placeholder:font-PolyRegular"
          secureTextEntry={true}
        ></TextInput>
        <Text className="text-yellow-100 text-base font-PolyRegular">
          Confirm Password
        </Text>
        <TextInput
          placeholder="**********"
          className=" h-10
            pb-1
             pl-5
              rounded-3xl
              font-PolyRegular
               bg-gray-500
                placeholder:text-sm
                 items-center
                 placeholder:font-PolyRegular"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View className="flex-1 justify-center self-center items-center pt-96 gap-0">
        <Text className="font-PolyRegular text-sm text-white pb-2">
          By continuing, you agree to
        </Text>
        <View className="flex flex-row">
          <Text className="font-PolyRegular text-sm text-yellow-100 pb-2">
            Term of Use
          </Text>
          <Text className="font-PolyRegular text-sm text-white pb-2"> and</Text>
          <Text className="font-PolyRegular text-sm text-yellow-100 pb-2 pl-1">
            Privacy Policy
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/Home/page")}
          className="self-center w-48 h-12 rounded-full pt-2 bg-yellow-100"
        >
          <Text className="text-black text-xl self-center font-PolyRegular font-extrabold">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-1 justify-end self-center items-center">
        <Text className="font-PolyRegular text-sm text-yellow-100 pb-2">
          or you can sign up with
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
            href="/(auths)/SignIn/page"
            className="font-PolyRegular text-base text-yellow-100 pb-1"
          >
            <Text> Sign In</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
