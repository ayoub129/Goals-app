import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({ onDeleteItem, itemData }) => {
  return (
    <View style={styles.textStyle}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDeleteItem(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.textColor}>
          {itemData.index + 1 + " : " + itemData.item.text}
        </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "#cc00ff",
    marginVertical: 8,
    borderRadius: 6,
  },
  textColor: {
    color: "#fff",
    fontWeight: "bold",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
