import * as React from "react";
import { View, Image, Text } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="flex-row p-2">
      <Image
        className="w-12 h-12 rounded-full mr-2.5"
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
      />
      <View className="absolute w-4 h-4 bg-primary">
        <Text>7</Text>
      </View>
      <View className="flex-1">
      <View className="flex-row justify-between">
        <Text className="font-bold text-base mb-1">Elon mAsk</Text>
        <Text>11:11 AM</Text>
      </View>
      <Text className="text-gray" numberOfLines={1}>Hi my name tolik</Text> 
      </View>
    </View>
  );
}
