import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Components/Task';

export default function App() {

  return (
    <View style={styles.container}>
    
          {/* Today's Tasks  - P4 Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>LAB1-P4  Tareas</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}

          <Task Text={'Task 1'} />
          <Task Text={'Task 2'} />
          <Task Text={'Task 3'} />

        </View>
      </View>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});