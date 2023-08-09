import * as React from "react";
import { View, FlatList } from "react-native";
import ChatRoomItem from "../components/chat-room-item";
import chatRoomData from "../assets/dummy-data/ChatRooms";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem />}
      />
    </View>
  );
};

export default HomeScreen;
