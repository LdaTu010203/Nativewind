import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import SignIn from "./sign_in";

const Welcome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-700">
        <Image
          source={require("@/assets/images/Logo.png")}
          className="w-96 h-96"
        />
        <Text className="text-white text-6xl font-PolyRegular pt-7">
          VIETGANGZ
        </Text>
        <Text className="text-white text-xl font-PolyRegular">
          OfficalStore-VIETGANGZ
        </Text>
        <Text className="text-white text-xl font-PolyRegular">
          IG: vietgangz_original
        </Text>
      </View>
    );
  } else {
    return <SignIn />;
  }
};

export default Welcome;
