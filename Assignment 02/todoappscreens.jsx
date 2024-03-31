import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Define Home screen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonText}>Go to Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>Go to About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define Contact screen component
const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
    </View>
  );
};

// Define About Us screen component
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
    </View>
  );
};

// Create stack navigator
const Stack = createStackNavigator();

// Define main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
