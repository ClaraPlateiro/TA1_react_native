import { StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [count, setCount] = useState(0);

  const agregarTarea = () => {
    setCount(count + 1);
  };

  const eliminarTarea = () => {
    setCount(count - 1);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Tareas Pendientes</ThemedText>
        </ThemedView>
        <SafeAreaView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={agregarTarea}
              style={styles.button}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={eliminarTarea}
              style={styles.button}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.taskText}>Cantidad: {count}</Text>
        </SafeAreaView>
        <SafeAreaView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  taskText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

