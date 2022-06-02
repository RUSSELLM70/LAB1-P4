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

          <Task text={'Task 1 - ERS'} />
          <Task text={'Task 2 - Informe disennio'} />
          <Task text={'Task 1 - LAB1'} />
      

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