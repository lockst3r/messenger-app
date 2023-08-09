import {
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {};

  return (
    <KeyboardAvoidingView
      className="flex-row p-2.5"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={120}
    >
      <View className="flex-1 items-center flex-row p-1.5 bg-lightgray mr-2.5 rounded-3xl border-primary border-2">
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="grey"
          style={{ marginHorizontal: 4 }}
        />
        <TextInput
          value={message}
          onChangeText={(newMessage) => setMessage(newMessage)}
          className="flex-1 mx-1.5"
          placeholder="Signal message..."
        />
        <Feather
          name="camera"
          size={24}
          color="grey"
          style={{ marginHorizontal: 2 }}
        />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="grey"
          style={{ marginHorizontal: 2 }}
        />
      </View>
      <Pressable
        onPress={sendMessage}
        className="w-11 h-11 items-center justify-center bg-primary rounded-full"
      >
        {message ? (
          <MaterialIcons name="send" size={20} color="white" />
        ) : (
          <Feather name="plus" size={24} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
