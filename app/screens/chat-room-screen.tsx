import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Message from "../components/message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/message-input";
import { useRoute } from "@react-navigation/native";

const ChatRootScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList data={chatRoomData.messages} renderItem={() => <Message />} />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRootScreen;
