import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const handleUsernameChange = (text) => {
    setUsername(text);
    setSubmitButtonDisabled(!text || !password);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setSubmitButtonDisabled(!username || !text);
  };

  const handleSubmit = () => {
    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success', 'Login successful');
    } else {
      Alert.alert('Error', 'Incorrect username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
        value={password}
      />
      <TouchableOpacity
        style={[styles.button, submitButtonDisabled && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={submitButtonDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});

export default LoginScreen;