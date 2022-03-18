import { View } from "react-native";
import { TextArea } from "native-base";

import TodoItem from "./TodoItem";

export default ({ todo }) => {
  return (
    <View>
      <TodoItem text={todo.text} done={todo.done}></TodoItem>
      <TextArea value={todo.description}></TextArea>
    </View>
  );
};