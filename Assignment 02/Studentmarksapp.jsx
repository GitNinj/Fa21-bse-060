import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = () => {
    if (name && subject1 && subject2 && subject3) {
      const newStudent = { name, subject1, subject2, subject3 };
      setStudents([...students, newStudent]);
      // Clear input fields
      setName('');
      setSubject1('');
      setSubject2('');
      setSubject3('');
    }
  };

  const handleReset = () => {
    setStudents([]);
  };

  const isDisabled = !(name && subject1 && subject2 && subject3);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Subject 1 Marks"
        keyboardType="numeric"
        value={subject1}
        onChangeText={text => setSubject1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Subject 2 Marks"
        keyboardType="numeric"
        value={subject2}
        onChangeText={text => setSubject2(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Subject 3 Marks"
        keyboardType="numeric"
        value={subject3}
        onChangeText={text => setSubject3(text)}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={isDisabled}
      />
      <Button
        title="Reset"
        onPress={handleReset}
      />
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Subject 1: {item.subject1}</Text>
            <Text>Subject 2: {item.subject2}</Text>
            <Text>Subject 3: {item.subject3}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default App;
