import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>MealDetail Screen !!!</Text>
      <StatusBar style="auto" />
      <Button title="Go to Cetogories" onPress={() => navigation.popToTop()} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen;
