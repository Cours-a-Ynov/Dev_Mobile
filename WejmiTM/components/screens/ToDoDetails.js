import {View} from "react-native";
import { TextArea } from "native-base";
import TodoItem from "../TodoItem";

export default ({navigation,route}) => {
    const {todo}=route.params;

    return (
        <View style={{flex : 1, padding : 5}}>
            <TodoItem 
            text={todo.text} 
            done={todo.done}  ></TodoItem>
            <TextArea 
            ></TextArea>
        </View>
    )
}