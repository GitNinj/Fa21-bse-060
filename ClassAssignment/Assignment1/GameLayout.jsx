import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const GameLayout = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = (number) => {
    setInputValue(inputValue + number);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Title</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        editable={false}
        placeholder="Enter Number"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.button}
            onPress={() => handleButtonPress(number)}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={handleClear}
        >
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameLayout;