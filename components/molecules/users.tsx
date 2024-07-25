// DisplayUser.js
import React from "react";
import { Text } from "react-native";
import { users } from "@/components/organism/userList";

const DisplayUser = ({ userId }: any) => {
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <Text>Không tìm thấy người dùng</Text>;
  }

  return (
    <Text className="font-PolyRegular text-2xl text-Dark-textContent">
      {user.fullName}
    </Text>
  );
};

export default DisplayUser;
