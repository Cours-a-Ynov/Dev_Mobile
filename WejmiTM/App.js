import TodoList from "./components/TodoList";
import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import TodoDetails from "./components/TodoDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator>
          <Screen name="List" component={TodoList}></Screen>
          <Screen name="Details" component={TodoDetails}></Screen>
        </Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}