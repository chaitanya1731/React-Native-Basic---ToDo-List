import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";


const ToDoInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addToDoHandler = () => {
        props.onAddToDoHandler(enteredGoal);
        setEnteredGoal('');
    }

    const onCancelHandler = () => {
        setEnteredGoal('');
        props.onCancel();
    }

    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter ToDo item"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={addToDoHandler}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color='red'
                            onPress={onCancelHandler}
                        />
                    </View>

                </View>

            </View>
        </Modal>

    );
}

export default ToDoInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: '60%',
        marginBottom: 10
    },
    buttonContainer: {
        width: '60%',
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button:{
        width:'40%'
    }
});
