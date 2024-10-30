import { Image, StyleSheet, Platform, SafeAreaView, TextInput, Button, View, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from 'react-native';


export default function HomeScreen() {
  const [text, onChangeText] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const agregarTarea = () => {
    setTasks([...tasks, text]);
    onChangeText('');
  }

  const eliminarTarea = (taskToDelete: string) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
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
});