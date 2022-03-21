import { StatusBar } from 'expo-status-bar';
import {NativeBaseProvider} from "native-base";
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoDetails from './components/screens/ToDoDetails.js';
import ToDoList from './components/screens/ToDoList.js';

const { Navigator, Screen } = createNativeStackNavigator();

const TodoTheme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    primary : "rgb(150,0,200)"
  }
};

const DarkTodoTheme = {
  ...DarkTheme,
  colors : {
    ...DarkTheme.colors,
    primary : "rgb(75,0,100)"
  }
};

const Nav = () => {
  const {colors} = useTheme();
  return (
    <Navigator>
    <Screen 
          name="List" 
          component={ToDoList} 
          options={{headerStyle : {backgroundColor : colors.primary}, title : "À faire"}}></Screen>
    <Screen name="Details" component={ToDoDetails} options={({route}) => { return {title : route.params.todo.text, headerStyle : {backgroundColor : colors.primary}}}}></Screen>
    </Navigator>
  )
}


export default function App() {
  const  scheme = useColorScheme();
  console.log(scheme);
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={scheme == "dark" ? DarkTodoTheme : TodoTheme}>
        <Nav></Nav>
      </NavigationContainer>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}


