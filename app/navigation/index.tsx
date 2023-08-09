import {
  NavigationContainer
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../../types"; 
import ChatRoomScreen from "../screens/chat-room-screen";
import HomeScreen from "../screens/home-screen";
import { Text } from 'react-native'

const Stack = createStackNavigator<RootStackParamList>();

const  Navigation = ()  => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) =>  <HomeHeader {...props} />}}
          
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation


const HomeHeader = (props) => {

  return (
    <Text>Pidar</Text>
  )
}
