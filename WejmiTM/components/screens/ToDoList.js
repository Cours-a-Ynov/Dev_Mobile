import {useState} from "react";
import {Button, Input} from "native-base";
import { View, ScrollView} from 'react-native';
import TodoItem from "../TodoItem.js";
import { useTheme } from "@react-navigation/native";


export default ({navigation}) => {
    const {colors} = useTheme();
    const [currentTodo, setCurrentTodo] = useState("");
    const [todos, setTodos] = useState([
        {text : "Faire les lessives", done : true, description : ""},
        {text : "Faire la vaisselle", done : false, description : ""},
        {text : "Aller au lit", done : false, description : ""},
    ]);
    const addTodo = () => {
        setTodos([...todos,{done : false, text : currentTodo, description : ""}])
        setCurrentTodo("");
    }
    const removeDone = () => {
        setTodos(todos.filter((todo) => !todo.done));
    };

    const viewDetails = (todo) =>{
        navigation.navigate("Details", {todo});
    }
    const addButton = <Button onPress={addTodo}>+</Button>;
    return (
        <View style={{flex : 1, padding : 5}}>
        <ScrollView style={styles.expand}>
        {todos.map((todo,index) => (
            <TodoItem 
            onViewDetails={() => {viewDetails(todo)}}
            text={todo.text} 
            done={todo.done} 
            key={index}
            onToggle={() => {
                todo.done = !todo.done;
                setTodos([...todos]);
            }} />
            ))}
        </ScrollView>
        <View style={styles.form}>
            <Input 
            size="full"
            value={currentTodo} 
            onChangeText={(text) => setCurrentTodo(text)}
            rightElement={addButton}
            >
            </Input>
            
        </View>
        <Button onPress={removeDone} style={styles.deleteButton}>Supprimer les tâches terminées</Button>
    </View>
    )
}
        
const styles = {
    expand : {
        flex : 1
    },
    form : {
        marginBottom : 20,
        flexDirection : "row"
    },
    deleteButton : {
        marginBottom : 20
    }
};