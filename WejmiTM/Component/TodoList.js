import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import { Button, Pressable } from "native-base";

export default ({ text, done, onToggle, onDelete, description }) => {
  return (
    <Pressable
      style={styles.item}
      onPress={onToggle}
    >
      <Checkbox value={done} onValueChange={onToggle} />
      <Text
        style={{
          ...styles.text,
          textDecorationLine: done ? "line-through" : "none",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderColor: "black",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 2,
  },
  text: { color: "black", paddingLeft: 40 },
});