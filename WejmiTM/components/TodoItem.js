import {View, Text, StyleSheet, Pressable} from "react-native";
import Checkbox from "expo-checkbox";
import { useTheme } from "@react-navigation/native";

export default ({text,done, onToggle, onViewDetails}) => {
    const {colors} = useTheme();
    return (
            <View style={{...styles.container, borderColor : colors.text}}>
                <Pressable style={styles.item} onPress={onToggle} onLongPress={onViewDetails} android_ripple={{color : colors.primary}}>
            <Checkbox value={done} onValueChange={onToggle} color={colors.primary}/>
            <Text 
                style={
                {
                    ...styles.text, 
                    color : colors.text,
                    textDecorationLine : done ? "line-through" : "none"
                }
                } >{text}
            </Text>
                </Pressable>
            </View>
        
        );
    };
    
    const styles = StyleSheet.create({
        container : {
            overflow : "hidden",
            borderRadius: 5,
            borderStyle : "solid",
            borderWidth : 1,
            margin : 2
        },
        item : {
            flexDirection : "row",
            padding : 5,
            
        },
        text : {
            paddingLeft : 10,
        }
    });