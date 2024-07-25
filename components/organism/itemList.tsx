import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import displayProduct from "../molecules/items";

const ItemList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samurai",
      price: 580,
      image: require("@/assets/images/Samurai.png"),
    },
    {
      id: 2,
      name: "Hoodie LT Grey",
      price: 580,
      image: require("@/assets/images/LTgrey.png"),
    },
    {
      id: 3,
      name: "Bag",
      price: 580,
      image: require("@/assets/images/Bag.png"),
    },
    {
      id: 4,
      name: "Jacket RN",
      price: 580,
      image: require("@/assets/images/JacketRN.png"),
    },
    {
      id: 5,
      name: "Short VG Tuscan",
      price: 580,
      image: require("@/assets/images/ShortVGTuscan.png"),
    },
  ]);

  const navigation = useNavigation();

  const handleSelectProduct = (product: any) => {
    console.log(product.id);
  };

  return (
    <View>
      <FlatList
        className="mb-32"
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={(product: {
          index: number;
          item: (typeof products)[0];
          separators: any;
        }) => (
          <TouchableOpacity
            onPress={() => handleSelectProduct(product.item)}
            className="bg-Dark-Background rounded-3xl justify-center items-center flex-1 flex flex-row px-5 py-3 mb-3"
          >
            <Image
              source={product.item.image}
              className="h-28 w-28 rounded-xl"
            />
            <View className="flex-1 flex flex-col pl-5">
              <Text className="font-PolyRegular text-xl text-Dark-header self-center">
                {product.item.name}
              </Text>
              <Text className="font-PolyRegular text-Dark-textContent text-xl self-center">
                {product.item.price}.000đ
              </Text>
              <Text className="font-PolyRegular text-Dark-header text-xs self-center pt-2">
                OfficalStore-VIETGANGZ
              </Text>
              <Text className="font-PolyRegular text-Dark-header text-xs self-center">
                IG: vietgangz_original
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ItemList;
