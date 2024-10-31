import { Image, StyleSheet, Platform, SafeAreaView, TextInput, Button, View, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const agregarTarea = () => {
    setTasks([...tasks, text]);
    onChangeText('');
    setCount(count + 1);
  }

  const eliminarTarea = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
    if (count > 0){
      setCount(count - 1);
    }else{
      setCount(0);
    }
  };

  const aumentarTarea = () => {
    setCount(count + 1);
  }

  const disminuirTarea = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <SafeAreaProvider>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Lista de Tareas</ThemedText>
        </ThemedView>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Button
            title="Agregar"
            onPress={agregarTarea}
          />
        </SafeAreaView>
        <SafeAreaView>
        <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => eliminarTarea(item)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item}
          />
        </SafeAreaView>
        <SafeAreaView>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={disminuirTarea}
              style={styles.buttonRemove}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={aumentarTarea}
              style={styles.buttonAdd}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.taskText}>Cantidad: {count}</Text>
        </SafeAreaView>
      </SafeAreaProvider>
      {/* </ScrollView> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  buttonAdd: {
    backgroundColor: '#006400',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
  },taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonRemove: {
    backgroundColor: 'red',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  taskText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});