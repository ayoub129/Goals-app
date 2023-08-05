import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const startAddGoal = () => {
    setModalVisible(true);
  };

  const endAddGoal = () => {
    setModalVisible(false);
  };

  const handleClick = (text) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: text, id: Math.random().toString() },
    ]);

    endAddGoal();
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#cc00ff" onPress={startAddGoal} />
        <GoalInput
          visible={modalVisible}
          onAddGoal={handleClick}
          onCancel={endAddGoal}
        />
        <View style={styles.listStyle}>
          <FlatList
            data={goals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#eee",
  },
  listStyle: {
    flex: 5,
  },
});
