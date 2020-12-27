import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import ToDoItem from './components/ToDoItems';
import ToDoInput from './components/ToDoInput';

export default function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [isModalOn, setIsModalOn] = useState(false);

  const addGoalHandler = (todoItem) => {
    // console.log(enteredGoal);
    setToDoItems(toDoItems => [
      ...toDoItems,
      { id: Math.random().toString(), value: todoItem }
    ]);
    
    setIsModalOn(false);
  }

  const removeGoalHandler = (goalId) => {
    setToDoItems(toDoItems => {
      return toDoItems.filter((item) => item.id !== goalId);
    })
  }

  const onCancelModal = () => {
    setIsModalOn(false);
  }


  return (
    <View style={styles.container}>
      <Button title="Add Item ?" onPress={() => setIsModalOn(true)} />
      <ToDoInput visible={isModalOn} onAddToDoHandler={addGoalHandler} onCancel={onCancelModal}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={toDoItems}
        renderItem={itemData =>
          <ToDoItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  }
});
