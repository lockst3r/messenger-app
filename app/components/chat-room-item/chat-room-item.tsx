import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "types";

const ChatRoomItem = (props) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()


  const onPress = () => {
    navigation.navigate('ChatRoom', {id: 'e'}); 
  }

  return (
    <Pressable className="flex-row p-2" onPress={onPress}>
      <Image
        className="w-12 h-12 rounded-full mr-2.5"
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
      />
      <View className="absolute left-10 top-1.5 w-5 h-5 bg-primary rounded-full justify-center items-center border-[1px] border-white">
        <Text className="text-[12px] text-white">7</Text>
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between">
          <Text className="font-bold text-base mb-1">Elon mAsk</Text>
          <Text>11:11 AM</Text>
        </View>
        <Text className="text-gray" numberOfLines={1}>
          Hi my name tolik
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
