import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoryMealsScreen = ({ navigation, route }) => {

  console.log(route);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.ctitle,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Category Meals Screen !!!</Text>
      <StatusBar style="auto" />
      <Button title="Go to Meal Detail" onPress={() => navigation.navigate("Meal Detail Screen") } /> 
      {/* <Button title="Go to Back" onPress={() => navigation.goBack() } />  */}
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

export default CategoryMealsScreen;
