import { View, Text } from "react-native";
import React from "react";
import { classNames } from "../../helpers/classNames";

const Message = () => {
  const isMe = true;
  return (
    <View
      className={classNames("bg-primary p-2.5 m-2.5 rounded-lg w-9/12", {
        "bg-black ml-auto": isMe,
      })}
    >
      <Text className="text-white">message</Text>
    </View>
  );
};

export default Message;
